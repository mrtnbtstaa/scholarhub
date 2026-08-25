import { CalendarQueryInput } from "../schema/calendar-event.schema";

const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

export const getMonthRange = (date: Date): CalendarQueryInput => {
    
    // Use day 1 to get the first day of the current month.
    const startDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    );

    // Move to the next month and use day 0 to get the last day of the current month.
    const endDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    );

    return {
        start_date: formatDate(startDate),
        end_date: formatDate(endDate),
    };
};