import Card from "@/components/shared/Card/Card";
import { BsShieldCheck } from "react-icons/bs";

const ScholarshipVerified = () => {
  return (
    <Card
      className="bg-[#eaeff6] px-4 py-2 border border-[#bdc4d2]"
      variants="custom"
    >
      <div className="flex items-start gap-4">
        <BsShieldCheck className="text-6xl text-primary" />
        <div className="mt-3">
          <h3 className="text-primary font-semibold text-lg tracking-wide">
            ScholarHub Verified
          </h3>
          <p className="font-normal tracking-wider text-gray-700 font-sm">
            All information is sourced directly from the Japanese Ministry of
            Education (MEXT).
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ScholarshipVerified;
