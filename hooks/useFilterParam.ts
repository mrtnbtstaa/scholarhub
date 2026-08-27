import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react";

export const useFilterParam = (key: string, defaulValue?: string) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const value = searchParams.get(key) ?? defaulValue;

    const setValue = useCallback(
        (newValue: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(key, newValue);
            router.push(`${pathname}?${params.toString()}`, {scroll: false});
        },
        [key, pathname, router, searchParams]
    );

    return [value, setValue] as const;
};