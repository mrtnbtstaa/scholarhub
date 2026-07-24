import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Section from "@/components/shared/Section/Section";
import ScholarshipProvider from "./components/ScholarshipProvider";
import TimelinePreview from "./components/TimelinePreview/TimelinePreview";
import Apply from "./components/ReadyApply/Apply";
import OverviewCard from "./components/OverviewCard/OverviewCard";
import ApplicationStatus from "./components/ApplicationStatus/ApplicationStatus";
import RequiredDocuments from "./RequiredDocuments/RequiredDocuments";
import Card from "@/components/shared/Card/Card";
import TextArea from "@/components/ui/TextArea/TextArea";
import Banner from "@/components/shared/Banner/Banner";

const TrackApplyPage = () => {
  return (
    <Section>
      <PageHeader
        title="Track & Apply"
        description="Before continuing to the official scholarship website, add this scholarship to your personal application tracker. You'll be able to monitor progress, organize required documents, save notes, and receive deadline reminders."
      />
      <Banner>
        <p className="tracking-wider text-md text-secondary">
          <strong className="text-secondary">Info Banner:&nbsp;</strong>
          ScholarHub does not submit scholarship applications. Applications are
          completed on the official scholarship provider&apos;s website.
        </p>  
      </Banner>
      <div className="flex lg:flex-row flex-col-reverse w-full items-start gap-4 mt-4">
        <main className="w-full">
          <ScholarshipProvider />
          <ApplicationStatus />
          <RequiredDocuments />
          <Card as="search" className="p-4 mt-4">
            <h3 className="text-secondary text-2xl tracking-wider font-semibold">
              Personal Notes
            </h3>
            <TextArea placeholder="Request recommendation letter from Professor Santos before September 10." />
          </Card>
        </main>
        <aside className="lg:w-[40%] w-full flex flex-col items-start gap-4">
          <TimelinePreview />
          <Apply />
          <OverviewCard />
        </aside>
      </div>
    </Section>
  );
};

export default TrackApplyPage;
