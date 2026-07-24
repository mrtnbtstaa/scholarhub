import Card from "@/components/shared/Card/Card";
import Divider from "@/components/shared/Divider/Divider";
import Navigate from "@/components/ui/Navigate/Navigate";
import { MdCalendarMonth, MdLocationCity, MdMoney } from "react-icons/md";
import { SaveScholarshipData } from "./ScholarshipGrid";

const SaveScholarshipItem = ({data}: {data: SaveScholarshipData}) => {
  return (
    <Card className="mt-4 w-full py-2">
      <div className="p-4">
        <div className="px-3 py-1 bg-[#f2e3e8] rounded-full inline-block border border-[#e6bbbf]">
          <span className="text-[#bb1b1a] font-semibold tracking-wider text-xs">
            {data.status} in 5 Days
          </span>
        </div>
        <h3 className="text-secondary lg:text-2xl md:text-lg text-md tracking-wider mt-4">
          {data.title}
        </h3>
        <div className="flex flex-col items-start gap-1 mt-2">
          <div className="inline-flex items-center gap-2">
            <MdLocationCity />
            <h4 className="text-sm font-normal tracking-wider text-gray-700">
              {data.country}
            </h4>
          </div>
          <div className="inline-flex items-center gap-2">
            <MdMoney />
            <h4 className="text-sm font-normal tracking-wider text-gray-700">
              {data.funding}
            </h4>
          </div>
          <div className="inline-flex items-center gap-2">
            <MdCalendarMonth />
            <h4 className="text-sm font-normal tracking-wider text-gray-700">
              Deadline: {data.deadline}
            </h4>
          </div>
        </div>
        <Card
          variants="custom"
          className="bg-[#eff5fe] rounded-2xl p-4 border-l-3 border-secondary mt-4"
        >
          <p className="md:text-md text-sm tracking-wider text-gray-600 font-normal">
            {`"`}{data.request}{`"`}
          </p>
        </Card>
      </div>
      <Divider />
      <div className="p-2">
        <Navigate
          variants="success"
          href="/"
          className="w-full inline-block p-4"
        >
          Track & Apply
        </Navigate>
      </div>
    </Card>
  );
};

export default SaveScholarshipItem;
