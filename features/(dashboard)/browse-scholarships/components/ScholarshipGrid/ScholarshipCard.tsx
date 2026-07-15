import Card from "@/components/shared/Card/Card";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { MdLogoDev, MdMoney } from "react-icons/md";

const ScholarshipCard = () => {
  return (
    <Card className="mt-4 p-4">
      <div className="flex justify-between items-center">
        <div className="bg-[#eff5fe] p-3 rounded-2xl">
          <MdLogoDev className="text-3xl" />
        </div>
        <div className="bg-[#6df9bb] rounded-2xl p-2">
          <p className="text-[#017351] font-bold tracking-wide text-md">
            Recommended
          </p>
        </div>
      </div>
      <h2 className="font-semibold text-2xl tracking-wider mt-4">
        MEXT Undergraduate Scholarship
      </h2>
      <h3 className="text-gray-600 tracking-widest text-md">
        Japanese Government (MEXT)
      </h3>
      <div className="mt-4 flex items-center flex-wrap gap-2">
        <div className="bg-[#eff5fe] p-2 rounded-full">
          <div className="inline-flex items-center gap-2">
            <IoMdGlobe />
            <h3 className="text-gray-700 font-semibold tracking-wider text-sm">
              Japan
            </h3>
          </div>
        </div>
        <div className="bg-[#eff5fe] p-2 rounded-full">
          <div className="inline-flex items-center gap-2">
            <FaGraduationCap />
            <h3 className="text-gray-700 font-semibold tracking-wider text-sm">
              Bachelor&apos;s
            </h3>
          </div>
        </div>
        <div className="bg-[#e3fff1] py-2 px-4 rounded-full">
          <div className="inline-flex items-center gap-2">
            <MdMoney className="text-[#1d6f48]" />
            <h3 className="text-[#1d6f48] font-semibold tracking-wider text-sm">
              Fully Funded
            </h3>
          </div>
        </div>
        <p className="mt-2 text-gray-700 text-md tracking-wider">
          A prestigious scholarship for international students to study at top
          Japanese universities with full tuition and monthly allowance.
        </p>
      </div>
    </Card>
  );
};

export default ScholarshipCard;
