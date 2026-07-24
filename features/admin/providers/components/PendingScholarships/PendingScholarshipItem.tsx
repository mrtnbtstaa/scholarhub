import { MdChevronRight } from "react-icons/md";

const PendingScholarshipItem = ({title, dateSubmitted}: {title: string, dateSubmitted: string}) => {
    return (
        <div className="p-3 rounded-lg bg-[#e4efff] flex items-center justify-between w-full">
            <div>
                <h4 className="text-md tracking-wider">{title}</h4>
                <p className="text-sm tracking-wider text-gray-800">Submitted {dateSubmitted} ago</p>
            </div>
            <MdChevronRight />
        </div>
    )
}

export default PendingScholarshipItem;