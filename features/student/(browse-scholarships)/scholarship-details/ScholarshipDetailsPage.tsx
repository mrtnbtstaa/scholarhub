import Main from "@/components/shared/Section/Main";
import AboutScholarship from "./components/AboutScholarship/AboutScholarship";
import ScholarshipDetailInfo from "./components/ScholarshipInformation/ScholarshipDetailInfo";
import BenefitsCoverage from "./components/CoverageCard/BenefitsCoverage";
import OverviewCard from "./components/OverviewCard/OverviewCard";
import ScholarshipVerified from "./components/ScholarshipVerified/ScholarshipVerified";
import EligibilityRequirements from "./components/EligibilityRequirements/EligibilityRequirements";
import ScholarshipHeader from "./components/ScholarshipHeader/ScholarshipHeader";
import RequiredDocuments from "./components/RequiredDocuments/RequiredDocuments";
import ScholarshipDuration from "./components/ScholarshipDuration/ScholarshipDuration";

const ScholarshipDetailsPage = () => {
  return (
    <Main>
      <ScholarshipHeader />
      <div className="flex md:flex-row flex-col-reverse gap-4 items-start min-w-full">
        <main className="w-full flex-col flex">
          <ScholarshipDetailInfo />
          <ScholarshipDuration />
          <AboutScholarship />
          <BenefitsCoverage />
          <EligibilityRequirements />
          <RequiredDocuments />
        </main>
        <aside className="lg:w-[35%] md:w-[60%] w-full flex flex-col gap-4">
          <OverviewCard />
          <ScholarshipVerified />
        </aside>
      </div>
    </Main>
  );
};

export default ScholarshipDetailsPage;
