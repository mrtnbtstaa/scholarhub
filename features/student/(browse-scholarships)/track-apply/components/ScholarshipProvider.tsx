"use client";

import Badge from "@/components/ui/Badge/Badge";
import Card from "@/components/shared/Card/Card";
import Divider from "@/components/shared/Divider/Divider";
import Navigate from "@/components/ui/Navigate/Navigate";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";
import { MdMoney } from "react-icons/md";

const ScholarshipProvider = () => {
  return (
    <Card className="p-4" as="section">
      <div className="flex items-start gap-4">
        <div className="bg-[#eff5fe] p-3 rounded-2xl">
          <FaGraduationCap className="text-3xl" />
        </div>
        <div>
          <h3 className="font-semibold text-2xl text-primary tracking-wider">
            MEXT Undergraduate Scholarship
          </h3>
          <p className="text-gray-600 tracking-widest text-md">
            Japanese Government (MEXT)
          </p>
          <div className="mt-4 flex items-center flex-wrap gap-2">
            <Badge icon={IoMdGlobe} title="Japan" />
            <Badge icon={FaGraduationCap} title="Bachelor's" />
            <Badge icon={MdMoney} title="Fully Funded" type="badge02" />
          </div>
        </div>
      </div>
      <Divider className="mt-4" />
      <div className="flex items-center gap-8">
        <div>
          <span className="text-gray-600 font-semibold text-xs tracking-wide">
            DEADLINE
          </span>
          <p className="text-primary font-semibold text-md tracking-wide">
            September 30, 2026
          </p>
        </div>
        <div className="bg-[#fedbd6] rounded-lg p-2 px-4">
          <span className="text-[#98163e] font-semibold text-xs tracking-wide">
            COUNTDOWN
          </span>
          <p className="text-[#98163e] font-semibold text-md tracking-wide">
            5 DAYS REMANING
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 w-full">
        <Navigate
          variants="outlined"
          href={"/browse-scholarships/1"}
          className="p-2 md:w-auto w-full text-center"
        >
          View Details
        </Navigate>
        <Navigate
          href={"/browse-scholarships/1"}
          className="p-2 md:w-auto w-full text-center"
          prefixIcon={LuExternalLink}
          prefixClassName="text-lg"
        >
          View Website
        </Navigate>
      </div>
    </Card>
  );
};

export default ScholarshipProvider;
