import { createActionDispatcher } from "@/lib/routerHandler/create-route-handler";
import { authPatchHandler, authPostHandlers } from "./auth.handlers";

export const POST = createActionDispatcher(authPostHandlers);
export const PATCH = createActionDispatcher(authPatchHandler);