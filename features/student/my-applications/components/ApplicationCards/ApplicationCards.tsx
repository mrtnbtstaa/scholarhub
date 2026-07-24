import { MdInfo } from "react-icons/md";
import ApplicationCard from "./ApplicationCard";

const ApplicationCards = () => {
    return (
        <div className="mt-4 lg:flex grid md:grid-cols-2 grid-cols-1 grid-rows-1 items-center gap-2">
        <ApplicationCard icon={MdInfo} title="Total Apps" count={6} />
        <ApplicationCard icon={MdInfo} title="Preparing" count={6} variants="preparing" />
        <ApplicationCard icon={MdInfo} title="Submitted" count={6} variants="submitted" />
        <ApplicationCard icon={MdInfo} title="Reviewing" count={6} variants="reviewing" />
        <ApplicationCard icon={MdInfo} title="Awarded" count={6} variants="awarded" />
        <ApplicationCard icon={MdInfo} title="Next 30days" count={6} variants="30days" />
      </div>
    )
}

export default ApplicationCards;