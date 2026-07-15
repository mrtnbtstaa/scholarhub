import DashboardCard from "@/components/shared/DashboardCard/DashboardCard";
import { FcDocument } from "react-icons/fc";
import { IoMdDocument } from "react-icons/io";
import { MdBookmark, MdUpcoming } from "react-icons/md";

const Stats = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
      <DashboardCard
        icon={MdBookmark}
        status="+4 new"
        count={18}
        title="Saved Scholarships"
      />
      <DashboardCard
        variants="active"
        icon={FcDocument}
        status="Active"
        count={15}
        title="Active Applications"
      />
      <DashboardCard
        variants="urgent"
        icon={MdUpcoming}
        status="Urgent"
        count={5}
        title="Upcoming Deadlines"
      />
      <DashboardCard
        variants="updated"
        icon={IoMdDocument}
        status="Updated"
        count={21}
        title="Documents Upload"
      />
    </div>
  );
};

export default Stats;
