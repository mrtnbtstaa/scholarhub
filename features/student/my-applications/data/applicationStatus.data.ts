import { GenericSelect } from "@/types/select.types";

export const ApplicationStatusData: GenericSelect[] = [
    {
        label: "All",
        value: "all"
    },
    {
        label: "Preparing",
        value: "preparing"
    },
    {
        label: "Submitted",
        value: "submitted"
    },
    {
        label: "Awarded",
        value: "awarded"
    }
]