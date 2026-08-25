import { ServiceResponse } from "@/types/service/service.response";
import {
  CalendarEventInput,
  calendarEventSchema,
  CalendarQueryInput,
  calendarQuerySchema,
} from "../schema/calendar-event.schema";
import { genericService } from "@/services/generic.service";
import { CalendarEventResponse } from "../types/calendar.response";
import { IdInput, idSchema } from "@/schema/id.schema";

export const createCalendar = async (
  input: CalendarEventInput,
): Promise<ServiceResponse<null>> => {
  return genericService(calendarEventSchema, input, {
    method: "POST",
    url: "v1/calendar/",
  });
};

export const getAllCalendar = async (
  input: CalendarQueryInput,
): Promise<
  ServiceResponse<
    Omit<CalendarEventResponse[], "event_time" | "description" | "status">
  >
> => {
  return genericService(calendarQuerySchema, input, {
    method: "GET",
    url: `v1/calendar?start_date=${input.start_date}&end_date=${input.end_date}`,
  });
};

export const getCalendar = async (input: IdInput): Promise<ServiceResponse<CalendarEventResponse>> => {
    return genericService(
        idSchema,
        input,
        {
            method: "GET",
            url: `v1/calendar/${input.id}`
        }
    )
}

export const updateCalendar = async (input: IdInput): Promise<ServiceResponse<never>> => {
    return genericService(
        idSchema,
        input,
        {
          method: "PATCH",
          url: `v1/calendar/${input.id}`
        }
    )
}
