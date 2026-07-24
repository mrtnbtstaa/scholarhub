import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Section from "@/components/shared/Section/Section";
import ScholarshipAnalytic from "./components/ScholarshipAnalytic/ScholarshipAnalytic";
import ScholarshipGrid from "./components/SaveScholarship/ScholarshipGrid";
import ScholarshipFilter from "./components/ScholarshipFilter/ScholarshipFilter";
import ScholarshipTimeline from "./components/ScholarshipTimeline/ScholarshipTimeline";

const SavedScholarshipsPage = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default SavedScholarshipsPage;
