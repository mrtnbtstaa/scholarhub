import {
  MdAirplaneTicket,
  MdBuild,
  MdLanguage,
  MdMoney,
  MdSupportAgent,
} from "react-icons/md";
import CoverageCard from "./CoverageCard";

const BenefitsCoverage = () => (
  <div className="mt-8">
    <h2 className="text-primary text-2xl font-medium tracking-wider mb-4">
      Benefits & Coverage
    </h2>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
      <CoverageCard
        icon={MdMoney}
        title="Full Tuition"
        description="Entrance, matriculation, and tuition fees are fully covered."
      />
      <CoverageCard
        icon={MdMoney}
        title="Monthly Allowance"
        description="117,000 JPY monthly stipend for living expenses."
      />
      <CoverageCard
        icon={MdAirplaneTicket}
        title="Airfare"
        description="Round-trip economy class air ticket provided."
      />
      <CoverageCard
        icon={MdLanguage}
        title="Language Training"
        description="1-year intensive Japanese language course included."
      />
      <CoverageCard
        icon={MdBuild}
        title="Placement"
        description="Assistance with university admission and housing."
      />
      <CoverageCard
        icon={MdSupportAgent}
        title="On-campus Support"
        description="Dedicated international student support desk."
      />
    </div>
  </div>
);

export default BenefitsCoverage;
