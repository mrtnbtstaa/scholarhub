import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Section from "@/components/shared/Section/Section";
import StudentAnalytics from "./components/StudentAnalytics/StudentAnalytics";
import StudentTable from "./components/StudentTable/StudentTable";
import StudentGrowth from "./components/StudentGrowth/StudentGrowth";
import EngagementPerformance from "./components/EngagementPerformance/EngagementPerformance";
import GeographicDistribution from "./components/GeographicDistribution/GeographicDistribution";
import StudentFilterBar from "./components/StudentFilterBar/StudentFilterBar";
import StudentBadge from "./components/StudentBadge/StudentBadge";

const StudentsPage = () => {
  return (
    <Section>
      <PageHeader
        title="Student Management"
        description="Manage registered students, monitor engagement, verify accounts, review activity, and maintain a secure scholarship platform."
      />
      <StudentBadge />
      <StudentAnalytics />
      <div className="grid grid-cols-4 grid-rows-1 gap-4">
        <div className="md:col-span-3 col-span-4">
          <StudentFilterBar />
          <StudentTable />
        </div>
        <div className="md:col-span-1 col-span-4">
          <StudentGrowth />
          <GeographicDistribution />
          <EngagementPerformance />
        </div>
      </div>
    </Section>
  );
};

export default StudentsPage;
