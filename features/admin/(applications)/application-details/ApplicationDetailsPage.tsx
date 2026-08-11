import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import ApplicationDetailsAnalytics from "./components/ApplicationDetailsAnalytics";
import ApplicationOverviewCard from "./components/ApplicationOverviewCard";
import RequiredDocuments from "./components/RequiredDocuments";
import ApplicationSnapshot from "./components/ApplicationSnapshot";

const ApplicationDetailsPage = () => {
  return (
    <Main>
      <PageHeader title="Application Details" />
      <ApplicationDetailsAnalytics />
      <div className="grid grid-cols-12 grid-rows-1 gap-4">
        <div className="md:col-span-4 col-span-12">
          <ApplicationOverviewCard
            title="Martin Bautista"
            subtitle="martinbautista0288@outlook.com"
            actionLabel="View Student Profile"
            details={[
              { label: "LOCATION", value: "Philippines" },
              { label: "UNIVERSITY", value: "Holy Angel University" },
              {
                label: "PROGRAM",
                value: "Bachelor of Science in Computer Science",
              },
            ]}
          />
          <ApplicationOverviewCard
            type="scholarship"
            status="Fully Funded"
            title="MEXT Undergraduate"
            subtitle="Government of Japan"
            actionLabel="View Scholarship Details"
            details={[
              { label: "REGION", value: "Japan" },
              { label: "DEADLINE", value: "Sept 30, 2026" },
              {
                label: "REQUIREMENTS",
                value: "JLPT N2 (Preferred), GPA > 3.5",
              },
            ]}
          />
        </div>
        <RequiredDocuments
          uploadedCount={3}
          documentItems={[
            {
              title: "Academic Transcript",
              subTitle: "Uploaded Aug 28 • PDF (2.4MB)",
              isUploaded: true,
            },
            {
              title: "Passport Copy",
              subTitle: "Uploaded Yesterday • JPG (1.1MB)",
              isUploaded: true,
            },
            {
              title: "Recommendation Letter",
              subTitle: "Missing Attachment",
              isUploaded: false,
            },
            {
              title: "Medical Certificate",
              subTitle: "Missing Attachment",
              isUploaded: false,
            },
            {
              title: "Personal Statement",
              subTitle: "Uploaded Today • PDF (0.8MB)",
              isUploaded: true,
            },
          ]}
        />
        <ApplicationSnapshot />
      </div>
    </Main>
  );
};

export default ApplicationDetailsPage;
