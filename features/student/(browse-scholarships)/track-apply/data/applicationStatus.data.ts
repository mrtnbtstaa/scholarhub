import { GenericSelect } from "@/types/shared/select.types";

export const ApplicationStatusData : GenericSelect[] = [
    {
        label: "Not started",
        value: "not started"
    },
    {
        label: "In Progress",
        value: "in progress"
    },
    {
        label: "Document Collection",
        value: "document collection"
    },
    {
        label: "Reviewing",
        value: "reviewing"
    },
    {
        label: "Submitted",
        value: "submitted"
    }
]