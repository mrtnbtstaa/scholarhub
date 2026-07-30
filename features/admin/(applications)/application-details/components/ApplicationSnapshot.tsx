import Card from "@/components/shared/Card/Card";
import Button from "@/components/ui/Button/Button";
import { MdMail, MdPictureAsPdf } from "react-icons/md";

const ApplicationSnapshot = () => {
  return (
    <Card className="mt-4 p-4 h-fit md:col-span-4 col-span-12">
      <h3 className="text-lg tracking-wider">Application Snapshot</h3>
      <div className="mt-4 flex flex-col gap-6 items-starrt w-full">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-600 tracking-wider text-md">
            Current Status
          </h4>
          <div className="px-3 py-1 rounded-lg bg-btn-primary">
            <span className="text-sm tracking-wider text-white">Preparing</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-gray-600 tracking-wider text-md">Progress</h4>
          <span className="text-sm tracking-wider">70%</span>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-gray-600 tracking-wider text-md">Deadline</h4>
          <span className="text-sm tracking-wider text-red-600 font-semibold">
            Sept 30 2026
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-gray-600 tracking-wider text-md">Student</h4>
          <span className="text-sm tracking-wider font-semibold">
            M. Bautista
          </span>
        </div>
        <div className="w-full flex flex-col gap-4">
          <Button suffixIcon={MdMail} className="p-3 text-center">
            Contact Student
          </Button>
          <Button
            suffixIcon={MdPictureAsPdf}
            className="p-3"
            iconClass="text-black hover:text-white"
            variants="outlined"
          >
            Export PDF
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationSnapshot;
