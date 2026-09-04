import { useForm } from "react-hook-form"
import { CalendarEventInput, calendarEventSchema } from "../schema/calendar-event.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ApiResponse } from "@/types/api/api.response"
import { AxiosError } from "axios"
import { createCalendar, getAllCalendar, getCalendar, updateCalendar } from "../api/calendar.api"
import showToast from "@/lib/toast/show.toast"
import { useState } from "react"
import { getMonthRange } from "../utils/calendar.utils"
import { EventInput } from "@fullcalendar/react"
import { useModalActions } from "@/store/useModalStore"
import { IdInput } from "@/schema/id.schema"
import { useRightSidebarStore } from "../store/useRightSidebarStore"

export const useCreateCalendarEvent = () => {

    const { closeModal } = useModalActions();
    const queryClient = useQueryClient();

    const form = useForm<CalendarEventInput>({
        resolver: zodResolver(calendarEventSchema),
        defaultValues: {
            event_title: "",
            event_category: "",
            event_date: "",
            event_time: "",
            description: ""
        }
    })

    const mutation = useMutation<
        ApiResponse<null>,
        AxiosError<ApiResponse<never>>,
        CalendarEventInput
    >({
        mutationFn: createCalendar,
        onSuccess (response) {
            // Reset form fields
            form.reset();
            // Show toast success
            showToast({message: response.message, type: "success"});
            // Invalidate stale query
            queryClient.invalidateQueries({queryKey: ["calendar"]});
            // Hide the modal
            closeModal();
        },
        onError(error) {
            // Show toast error
            showToast({message: error.response?.data.message ?? "Failed to create event", type: "error"})
        },
    })

    const onSubmit = (input: CalendarEventInput) => mutation.mutate(input);

    return {
        form,
        handleSubmit: form.handleSubmit(onSubmit),
        isPending: mutation.isPending,
        error: form.formState.errors
    }

} 

export const useListCalendarEvent = () => {

    // Start at the current month
    const [currentMonth, setCurrentMonth] = useState<Date>(() => new Date());

    const filters = getMonthRange(currentMonth);

    const query = useQuery<ApiResponse<EventInput[]>>({
        queryFn: () => getAllCalendar(filters),
        queryKey: [
            "calendar",
            filters.start_date,
            filters.end_date
        ],
        staleTime: 60 * 1000,
    });

    const handlePreviousMonth = () => {
        setCurrentMonth(
            (current) => new Date(
                current.getFullYear(),
                current.getMonth() - 1,
                1 
            )
        )
    }

    const handleNextMonth =  () => {
        setCurrentMonth(
            (current) => new Date(
                current.getFullYear(),
                current.getMonth() + 1,
                1
            )
        )
    }

    return{
        listCalendarEvents: query.data?.success ? query.data.data : [],
        handlePreviousMonth,
        handleNextMonth
    }

}

export const useGetCalendarEvent = () => {

    const calendarId = useRightSidebarStore((state) => state.getId);
    
    const query = useQuery<ApiResponse<EventInput>, AxiosError<ApiResponse<never>>>({
        queryKey: ["calendar", calendarId],
        queryFn: () => getCalendar({id: calendarId!}),
        enabled: !!calendarId, // Convert calendarId to a boolean and only fetch the event when calendar ID is selected
        staleTime: 60 * 1000
    })

    return {
        data: query.data?.success ? query.data.data : null,
    }

}

export const useUpdateCalendarEvent = () => {

    const queryClient = useQueryClient();

    const calendarId = useRightSidebarStore((state) => state.getId);

    const mutation = useMutation<
        ApiResponse<never>,
        AxiosError<ApiResponse<never>>,
        IdInput
    >({
        mutationFn: (input) => updateCalendar({id: input.id}),
        mutationKey: ["calendar", calendarId],
        onSuccess: (response, input) => {
            // Show toast success
            showToast({message: response.message, type: "success"})
            // Invalidate the updated event
            queryClient.invalidateQueries({queryKey: ["calendar", input.id]})
        },
        onError: (error) => {
            // Show toast error
            showToast({message: error.response?.data.message ?? "Failed to update the event", type: "error"})
        }
    })

    const markEventAsCompleted = () => {
        if(!calendarId) return;
        mutation.mutate({
            id: calendarId
        });
    }

    return {
        markEventAsCompleted,
        isPending: mutation.isPending
    }

}