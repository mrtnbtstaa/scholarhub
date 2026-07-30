import Badge from "@/components/ui/Badge/Badge";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { MdMoney } from "react-icons/md";

const ScholarshipHeader = () => {
  return (
    <header className="flex flex-col items-start gap-2 mb-2">
      <div className="flex items-center gap-2">
        <Badge icon={IoMdGlobe} title="Japan" />
        <Badge icon={FaGraduationCap} title="Bachelor's" />
        <Badge icon={MdMoney} title="Fully Funded" type="badge02" />
      </div>
      <PageHeader
        title="MEXT Undergraduate Scholarship"
        description="Government-funded undergraduate scholarship for international students pursuing bachelor's degrees at Japanese universities."
      />
    </header>
  );
};

export default ScholarshipHeader;
