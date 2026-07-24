import Section from "@/components/shared/Section/Section";
import ScholarshipHeader from "./components/Header/ScholarshipHeader";
import ScholarshipAnalytics from "./components/ScholarshipAnalytics/ScholarshipAnalytics";
import ScholarshipTable from "./components/ScholarshipTable/ScholarshipTable";
import StatusDistribution from "./components/StatusDistribution/StatusDistribution";
import ApiImports from "./components/ApiImports/ApiImports";
import QuickInsights from "./components/QuickInsights/QuickInsights";

const ScholarshipsPage = () => {
  return (
    <Section>
      <ScholarshipHeader />
      <ScholarshipAnalytics />
      <div className="grid grid-cols-4 grid-rows-1 gap-4 flex-col-reverse">
        <div className="lg:col-span-3 md:col-span-2 col-span-4">
          <ScholarshipTable />
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-4 md:mt-4 mt-0">
          <StatusDistribution />
          <ApiImports />
          <QuickInsights />
        </div>
      </div>
    </Section>
  );
};

export default ScholarshipsPage;
