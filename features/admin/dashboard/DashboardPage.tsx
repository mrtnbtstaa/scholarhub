import Main from "@/components/shared/Section/Main";
import AddedScholarships from "./components/AddedScholarships/AddedScholarships";
import PlatformDistribution from "./components/PlatformDistribution/PlatformDistribution";
import ActiveProviders from "./components/ActiveProviders/ActiveProviders";
import StudentGrowth from "./components/StudentGrowth/StudentGrowth";
import AdminActivity from "./components/Activity/AdminActivity";
import Analytics from "./components/Analytics/Analytics";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <Main>
      <DashboardHeader />
      <Analytics />
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
    </Main>
  );
};

export default DashboardPage;
