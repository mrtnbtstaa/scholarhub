import { getAllCalendar } from "@/features/student/calendar/api/calendar.api";
import CalendarPage from "@/features/student/calendar/CalendarPage";
import { getMonthRange } from "@/features/student/calendar/utils/calendar.utils";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

const Page = async () => {

    const queryClient = new QueryClient();

    const filters = getMonthRange(new Date());

    await queryClient.prefetchQuery({
        queryKey: ["calendar", filters.start_date, filters.end_date],
        queryFn: () => getAllCalendar(filters),
        staleTime: 60 * 1000
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CalendarPage />
        </HydrationBoundary>
    )
}

export default Page;