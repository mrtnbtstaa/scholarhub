import Main from "@/components/shared/Section/Main";
import ScholarshipHeader from "./components/ScholarshipHeader";
import ScholarshipAnalytics from "./components/ScholarshipAnalytics/ScholarshipAnalytics";
import StatusDistribution from "./components/StatusDistribution";
import ApiImports from "./components/ApiImports";
import QuickInsights from "./components/QuickInsights";
import ScholarshipFilter from "./components/ScholarshipFilter";
import ScholarshipTable from "./components/ScholarshipTable/ScholarshipTable";

const ScholarshipsPage = () => {
  return (
    <Main>
      <ScholarshipHeader />
      <ScholarshipAnalytics />
      <div className="grid grid-cols-4 grid-rows-1 gap-4 flex-col-reverse">
        <div className="lg:col-span-3 md:col-span-2 col-span-4">
          <ScholarshipFilter />
          <ScholarshipTable />
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-4 md:mt-4 mt-0">
          <StatusDistribution />
          <ApiImports />
          <QuickInsights />
        </div>
      </div>
    </Main>
  );
};

export default ScholarshipsPage;
