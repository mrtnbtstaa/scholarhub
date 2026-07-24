import { cn } from "@/lib/utils";

const GridAnalyticCards = ({children, className}: {children: React.ReactNode, className?:string}) => {
    return (
        <div className={
            cn("grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 grid-rows-1 gap-4 mt-4", className)
        }>
            {children}
        </div>
    )
}

export default GridAnalyticCards;