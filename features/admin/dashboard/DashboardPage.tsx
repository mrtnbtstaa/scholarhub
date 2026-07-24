import Section from "@/components/shared/Section/Section";
import AddedScholarships from "./components/AddedScholarships/AddedScholarships";
import PlatformDistribution from "./components/PlatformDistribution/PlatformDistribution";
import ActiveProviders from "./components/ActiveProviders/ActiveProviders";
import QuickActions from "./components/QuickActions/QuickActions";
import StudentGrowth from "./components/StudentGrowth/StudentGrowth";
import AdminActivity from "./components/Activity/AdminActivity";
import Analytics from "./components/Analytics/Analytics";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";

const DashboardPage = () => {
  return (
    <Section>
      <DashboardHeader />
      <Analytics />
      <QuickActions />
      <div className="grid grid-rows-1 gap-4 grid-cols-4">
        <div className="lg:col-span-3 md:col-span-2 col-span-4">
          <AddedScholarships />
          <AdminActivity />
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-4">
          <PlatformDistribution />
          <StudentGrowth />
          <ActiveProviders />
        </div>
      </div>
    </Section>
  );
};

export default DashboardPage;
