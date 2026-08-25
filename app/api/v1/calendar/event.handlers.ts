import { createCalendar, getAllCalendar, getCalendar, updateCalendar } from "@/features/student/calendar/services/calendar.service";
import { ENDPOINTS } from "@/lib/constants/endpoints";
import { ActionHandler } from "@/lib/routerHandler/create-route-handler";
import { UUID } from "crypto";
import { NextResponse } from "next/server";

export const calendarEventPostHandler : Record<string, ActionHandler> = {

    [ENDPOINTS.server.calendar_event.calendar]: async ({request}) => {

        const body = await request.json();

        const result = await createCalendar(body);

        return NextResponse.json(result, {status: result.status});

    }

}

export const calendarEventGetHandler: Record<string, ActionHandler> = {

    [ENDPOINTS.server.calendar_event.calendar]: async ({searchParams}) => {

        let serviceResult = null;

        const startDate = searchParams.get("start_date") as string;
        const endDate = searchParams.get("end_date") as string;
        const id = searchParams.get("id") as UUID;

        if(id){
            serviceResult = await getCalendar({id: id});
        }else{
            serviceResult = await getAllCalendar({
                start_date: startDate,
                end_date: endDate
            })
        }

        return NextResponse.json(serviceResult, {status:  serviceResult.status})

    },
}

export const calendarEventPatchHandler : Record<string, ActionHandler> = {

    [ENDPOINTS.server.calendar_event.calendar]: async ({searchParams}) => {

        const id = searchParams.get("id") as UUID;

        const result = await updateCalendar({id: id});

        return NextResponse.json(result, {status: result.status})

    }

}