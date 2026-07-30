import Badge from "@/components/ui/Badge/Badge";

const StudentBadge = () => {
    return (
        <div className="flex items-center gap-2 flex-wrap">
            <Badge className="bg-[#e4efff] text-[#0a1c31]" title="Students" count={"4,812"} />
            <Badge className="bg-[#ddf9f0] text-[#386c48]" title="Active" count={"4,812"} />
            <Badge className="bg-[#dfe7f1] text-[#012042]" title="Pending Verification" count={"4,812"} />
            <Badge className="bg-[#f8f3f6] text-[#bb1b1a]" title="Suspended" count={"4,812"} />
        </div>
    )
    
}
export default StudentBadge;