import { BaseMapper } from "@/mapper/baseMapper";
import { CalendarEventResponse } from "../types/calendar.response";
import { EventInput } from "@fullcalendar/react";

export class CalendarEventMapper extends BaseMapper<CalendarEventResponse, EventInput>{
    public map(response: CalendarEventResponse): EventInput {
        return {
            id: response.id,
            title: response.event_title,
            start: response.event_date,
            extendedProps: {
                type: response.event_category,
                time: response.event_time,
                description: response.description,
                status: response.status,
            }
        }
    }
}

export const calendarEventMapper = new CalendarEventMapper()