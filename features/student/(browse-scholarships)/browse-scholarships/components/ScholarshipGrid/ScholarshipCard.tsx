import Card from "@/components/shared/Card/Card";
import Navigate from "@/components/ui/Navigate/Navigate";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { MdLogoDev, MdMoney } from "react-icons/md";
import Badge from "../../../../../../components/shared/Badge/Badge";
import Divider from "@/components/shared/Divider/Divider";
import Deadline from "@/components/shared/Deadline/Deadline";

const ScholarshipCard = () => {
  return (
      <Card className="mt-4 p-4">
        <div className="flex justify-between items-center">
          <div className="bg-[#eff5fe] p-3 rounded-2xl">
            <MdLogoDev className="text-3xl" />
          </div>
          <div className="bg-[#6df9bb] rounded-2xl px-4 py-2">
            <p className="text-[#017351] font-bold tracking-wider text-sm">
              Recommended
            </p>
          </div>
        </div>
        <h2 className="font-semibold text-lg tracking-wider mt-4">
          MEXT Undergraduate Scholarship
        </h2>
        <h3 className="text-gray-600 tracking-widest text-md">
          Japanese Government (MEXT)
        </h3>
        <div className="mt-4 flex items-center flex-wrap gap-2">
          <Badge icon={IoMdGlobe} title="Japan" />
          <Badge icon={FaGraduationCap} title="Bachelor&apos;s" />
          <Badge icon={MdMoney} title="Fully Funded" type="badge02" />
          <p className="mt-2 text-gray-700 font-normal md:text-md text-sm tracking-wider">
            A prestigious scholarship for international students to study at top
            Japanese universities with full tuition and monthly allowance.
          </p>
        </div>
        <Divider className="mt-4" />
        <div className="flex items-center justify-between mt-4">
          <Deadline content="Deadline: Sept 15, 2024" />
          <Navigate href={"/browse-scholarships/1"} className="p-2">
            Details
          </Navigate>
        </div>
      </Card>
  );
};

export default ScholarshipCard;
