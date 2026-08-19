import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import Stats from "./components/Stats/Stats";
import ApplicationPriorities from "./components/ApplicationPriorities/ApplicationPriorities";
import StatusOverview from "./components/StatusOverview";
import MyApplications from "./components/MyApplications";
import TopMatches from "./components/TopMatches";

const DashboardPage = () => {
  return (
    <Main>
      <div className="mb-4">
        <PageHeader
          title="Dashboard"
          description="Welcome back, Martin! 🌟
          Your Fulbright dream is calling, and your scholarship is just around the corner—let’s go find it!"
        />
      </div>
      <Stats />
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-4">
          <ApplicationPriorities />
          <MyApplications />
        </div>

        <div className="flex flex-col gap-4">
          <StatusOverview />
          <TopMatches />
        </div>
      </div>
    </Main>
  );
};

export default DashboardPage;
