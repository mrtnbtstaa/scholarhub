import { axiosClient } from "@/lib/axios/axios.client";
import { CalendarEventInput, CalendarQueryInput } from "../schema/calendar-event.schema";
import { ENDPOINTS } from "@/lib/constants/endpoints";
import { ApiResponse } from "@/types/api/api.response";
import { EventInput } from "@fullcalendar/react";
import { calendarEventMapper } from "../mapper/calendar-event.mapper";
import { IdInput } from "@/schema/id.schema";

export const createCalendar = async (calendarInput: CalendarEventInput) : Promise<ApiResponse<never>> => 
    ((await axiosClient.post(ENDPOINTS.client.calendar_event.calendar, calendarInput)).data)

export const getAllCalendar = async (input: CalendarQueryInput) : Promise<ApiResponse<EventInput[]>> => {
    const response = await axiosClient.get(`${ENDPOINTS.client.calendar_event.calendar}?start_date=${input.start_date}&end_date=${input.end_date}`);
    return {
        ...response.data,
        data: calendarEventMapper.mapList(response.data.data)
    }
}

export const getCalendar = async (input: IdInput | undefined) : Promise<ApiResponse<EventInput>> => {

    const response = await axiosClient.get(`${ENDPOINTS.client.calendar_event.calendar}/?id=${input?.id}/`);
    return {
        ...response.data,
        data: calendarEventMapper.map(response.data.data)
    }
}

export const updateCalendar = async (input: IdInput) : Promise<ApiResponse<never>> => 
    ((await axiosClient.patch(`${ENDPOINTS.client.calendar_event.calendar}/?id=${input.id}/`)).data)