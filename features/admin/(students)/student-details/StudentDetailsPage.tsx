import Divider from "@/components/shared/Divider/Divider";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import Badge from "@/components/ui/Badge/Badge";
import StudentDetailsAnalytics from "./components/StudentDetailsAnalytics";
import ProfileInfomation from "./components/ProfileInformation";
import ScholarshipTable from "./components/ScholarshipTable";
import StudentEngagement from "./components/StudentEngagement";
import StudentAnalytics from "./components/StudentAnalytics";
import SavedScholarships from "./components/SavedScholarships";

const StudentDetailsPage = () => {
  return (
    <Main>
      <PageHeader title="Martin Bautista" />
      <div className="flex flex-wrap items-center gap-4">
        <Badge className="bg-[#6df9bb]" title="Active" />
        <Badge className="bg-[#d3e4fe]" title="Email Verified" />
        <Badge className="bg-[#1a375c] text-white" title="Profile Completed" />
        <Badge className="bg-[#003666] text-white" title="High Engagement" />
      </div>
      <div className="mt-4 flex items-center gap-8 flex-wrap">
        <p className="text-sm">
          Student ID: <strong>STU 2026-1042</strong>
        </p>
        <p className="text-sm">
          Member Since: <strong>May 12, 2026</strong>
        </p>
      </div>
      <Divider className="mt-4" />
      <StudentDetailsAnalytics />
      <div className="grid grid-cols-4 grid-rows-1 gap-4 mt-4">
        <div className="col-span-2">
          <ProfileInfomation />
          <ScholarshipTable />
        </div>
        <div className="col-span-2">
          <StudentEngagement />
          <StudentAnalytics />
        </div>
      </div>
      <SavedScholarships />
    </Main>
  );
};

export default StudentDetailsPage;
