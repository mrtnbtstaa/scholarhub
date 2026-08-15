import { cn } from "@/lib/helpers/cn"

const Divider = ({className}: {className?: string}) => {
    return (
        <hr className={cn(
            className,
            "text-primary-border"
        )} />
    )
}

export default Divider;