import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import ApplicationFilterBar from "./components/ApplicationFilterBar/ApplicationFilterBar";
import ApplicationTable from "./components/ApplicationTable/ApplicationTable";
import StatusDistribution from "./components/StatusDistribution/StatusDistribution";
import ApplicationGrowth from "./components/ApplicationGrowth/ApplicationGrowth";

const ApplicationsPage = () => {
  return (
    <Main>
      <PageHeader
        title="Applications"
        description="Monitor scholarship applications across the platform, analyze student engagement, identify trends, and provide administrative oversight for tracked applications.Monitor scholarship applications across the platform, analyze student engagement, identify trends, and provide administrative oversight for tracked applications."
      />
      <ApplicationFilterBar />
      <ApplicationTable />
      <div className="grid grid-cols-4 grid-rows-1 gap-4 mt-4">
        <div className="col-span-1">
          <StatusDistribution />
        </div>
        <div className="col-span-3 h-32">
          <ApplicationGrowth />
        </div>
      </div>
    </Main>
  );
};

export default ApplicationsPage;
