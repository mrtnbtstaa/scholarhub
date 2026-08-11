import { cn } from "@/lib/cn"

const Divider = ({className}: {className?: string}) => {
    return (
        <hr className={cn(
            className,
            "text-primary-border"
        )} />
    )
}

export default Divider;