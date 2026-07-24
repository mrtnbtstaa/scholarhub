import Card from "@/components/shared/Card/Card";
import { IoMdCalendar } from "react-icons/io";
import TimelineContent from "./TimelineContent";
import { TimelineProps } from "../../types/timeline.types";

const timelineData: TimelineProps[] = [
  {
    title: "MEXT Scholarship",
    remainingDays: 5,
    date: "Sept 30, 2026",
  },
  {
    title: "Chevening Scholarship",
    remainingDays: 38,
    date: "Sept 25, 2026",
  },
  {
    title: "SINGA Graduate Award",
    remainingDays: 101,
    date: "Sept 30, 2026",
  }
];

const ScholarshipTimeline = () => {
  return (
    <Card className="p-6">
      {/* header  */}
      <div className="flex items-center gap-2">
        <IoMdCalendar className="md:text-2xl text-lg text-secondary" />
        <h3 className="text-secondary tracking-wider font-medium md:text-2xl text-lg">
          Deadline Timeline
        </h3>
      </div>

      {/* Timeline Container */}
      <div className=" h-[330px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-secondary">
        <div className="flex flex-col relative gap-3">
          <div className="w-0.5 top-6 bottom-6 bg-[#c5c7cf] h-full absolute left-2.75"></div>
          {timelineData &&
            timelineData.map(({ title, remainingDays, date }) => (
              <TimelineContent
                key={title}
                title={title}
                remainingDays={remainingDays}
                date={date}
              />
            ))}
        </div>
      </div>
    </Card>
  );
};

export default ScholarshipTimeline;
