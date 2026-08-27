import Card from "@/components/shared/Card/Card";
import Divider from "@/components/shared/Divider/Divider";
import LineProgress from "@/components/shared/LineProgress/LineProgress";
import Button from "@/components/ui/Button/Button";
import { MdEmail } from "react-icons/md";

const StudentEngagement = () => {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-btn-primary">
          <span className="text-2xl font-semibold text-white">MB</span>
        </div>
        <div>
          <h4 className="text-primary font-medium text-md tracking-wider">
            M. Bautista
          </h4>
          <p className="text-green-600 text-sm font-semibold">
            ENGAGED STUDENT
          </p>
        </div>
      </div>
      <Divider className="mt-4" />
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm tracking-wider text-gray-700">Engagement Score</p>
        <span className="text-green-600 font-semibold text-sm">94/100</span>
      </div>
      <LineProgress percentage={94} className="bg-green-600" />
      <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-4">
        <Card className="p-4 bg-[#eff5fe]" variants="custom">
          <h4 className="text-gray-700 tracking-wider">Apps</h4>
          <span className="font-semibold text-2xl tracking-wider">12</span>
        </Card>
        <Card className="p-4 bg-[#eff5fe]" variants="custom">
          <h4 className="text-gray-700 tracking-wider">Saved</h4>
          <span className="font-semibold text-2xl tracking-wider">12</span>
        </Card>
      </div>
      <Button suffixIcon={MdEmail} className="p-3 w-full mt-4">
        Send Direct Email
      </Button>
      <Button variants="danger" className="w-full mt-2 text-red-600">
        Suspend Account
      </Button>
    </Card>
  );
};

export default StudentEngagement;
