import { cn } from "@/lib/cn"

const Divider = ({className}: {className?: string}) => {
    return (
        <hr className={cn(
            className,
            "text-black/10"
        )} />
    )
}

export default Divider;