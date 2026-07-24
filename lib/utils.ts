import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]){
    return twMerge(clsx(...input));
}

export function getInitials(name: string){
    return name.split(" ").map((n) => n && n.length > 0 && n[0]).join("");
}