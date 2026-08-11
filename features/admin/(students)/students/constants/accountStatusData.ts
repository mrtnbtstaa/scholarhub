import { GenericSelect } from "@/types/shared/select.types";

export const accountStatusData: GenericSelect[] = [
    {
        default: "Account Status",
        label: "Account Status"
    },
    {
        label: "Active",
        value: "active"
    },
    {
        label: "Pending",
        value: "pending"
    },
    {
        label: "Suspended",
        value: "suspended"
    }
]