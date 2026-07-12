import { cn } from "@/lib/utils"

const Divider = ({className}: {className?: string}) => {
    return (
        <hr className={cn(
            className,
            "text-black/20 mb-2"
        )} />
    )
}

export default Divider;