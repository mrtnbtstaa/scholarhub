import PageTitle from "@/components/shared/PageTitle/PageTitle";
import Section from "@/components/shared/Section/Section";
import Stats from "./components/Stats/Stats";
import ApplicationPriorities from "./components/ApplicationPriorities/ApplicationPriorities";
import StatusOverview from "./components/StatusOverview/StatusOverview";
import MyApplications from "./components/MyApplication/MyApplications";
import TopMatches from "./components/TopMatches/TopMatches";

const DashboardPage = () => {
  return (
    <Section>
      <div className="mb-4">
        <PageTitle
          title="Dashboard"
          description="Welcome back, Martin! 🌟
Your Fulbright dream is calling, and your scholarship is just around the corner—let’s go find it!"
        />
      </div>
      <Stats />
      <div className="lg:flex grid grid-cols-1 grid-rows-1 items-start gap-4 mt-4 w-full">
        <div className="flex flex-col w-full">
          <ApplicationPriorities />
          <MyApplications />
        </div>
        <div className="flex flex-col gap-4 lg:shrink-0">
          <StatusOverview />
          <TopMatches />
        </div>
      </div>
    </Section>
  );
};

export default DashboardPage;
