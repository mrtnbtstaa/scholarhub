import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import ScholarshipAnalytic from "./components/ScholarshipAnalytic/ScholarshipAnalytic";
import ScholarshipGrid from "./components/SaveScholarship/ScholarshipGrid";
import ScholarshipFilter from "./components/ScholarshipFilter/ScholarshipFilter";
import ScholarshipTimeline from "./components/ScholarshipTimeline/ScholarshipTimeline";

const SavedScholarshipsPage = () => {
  return (
    <Main>
      <PageHeader
        title="Saved Scholarships"
        description="You currently have 18 saved scholarships. Three of them are closing within the next 14 days."
      />
      <ScholarshipAnalytic />
      <div className="flex lg:flex-row flex-col-reverse items-start gap-4 w-full mt-4">
        <div className="w-full">
          <ScholarshipFilter />
          <ScholarshipGrid />
        </div>
        <aside className="lg:w-[40%] w-full">
          <ScholarshipTimeline />
        </aside>
      </div>
    </Main>
  );
};

export default SavedScholarshipsPage;
