import { createActionDispatcher } from "@/lib/routerHandler/create-route-handler";
import { calendarEventGetHandler, calendarEventPatchHandler, calendarEventPostHandler } from "./event.handlers";

export const POST = createActionDispatcher(calendarEventPostHandler);
export const GET = createActionDispatcher(calendarEventGetHandler);
export const PATCH = createActionDispatcher(calendarEventPatchHandler);