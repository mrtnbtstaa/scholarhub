import Card from "@/components/shared/Card/Card";
import PreviewContent from "./PreviewContent";
import { MdEditDocument } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import { GrDocument } from "react-icons/gr";

const TimelinePreview = () => {
  return (
    <Card className="p-4 w-full">
      <h3 className="lg:text-2xl md:text-lg text-md font-semibold tracking-widest text-primary">
        Timeline Preview
      </h3>
      <div className="mt-4 flex flex-col items-start gap-6 relative z-100">
        <PreviewContent title="Scholarship Added" subTitle="Added to tracker today" />
        <PreviewContent icon={MdEditDocument} title="Preparing Documents" subTitle="Expected by Sept 10" isCurrentPreview={false} />
        <PreviewContent icon={GrDocument} title="Ready to Submit" subTitle="Scheduled for Sept 20" isCurrentPreview={false} />
        <PreviewContent icon={BsPersonCheck} title="Submitted" subTitle="Official Website Confirmation" isCurrentPreview={false} />
        <div className="h-full w-0.5 bg-[#e4efff] absolute left-3.5 -z-1000"></div>
      </div>
    </Card>
  );
};

export default TimelinePreview;
