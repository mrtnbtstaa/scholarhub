import Banner from "@/components/shared/Banner/Banner";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import DocumentCards from "./components/DocumentCard/DocumentCards";
import UrgentAttention from "./components/UrgentAttention/UrgentAttention";
import DocumentFilter from "./components/DocumentFilter/DocumentFilter";
import DocumentTable from "./components/DocumentTable/DocumentTable";

const MyDocumentsPage = () => {
  return (
    <Main>
      <PageHeader
        title="My Documents"
        description="Upload, organize, and reuse your scholarship documents across multiple applications. Keep everything in one secure place so you're always prepared for your next opportunity."
      />
      <Banner className="bg-[#fbf1f3]" iconColor="text-[#96010b]">
        <p className="text-[#96010b] md:text-md text-sm tracking-wider">
          21 DOCUMENTS STORED. 3 REQUIRED ATTENTION.
        </p>
      </Banner>
      <DocumentCards />
      <div className="flex items-start gap-2 w-full mt-4">
        <div className="w-full">
          <DocumentFilter />
          <DocumentTable />
        </div>
        <div className="w-[40%]">
          <UrgentAttention />
        </div>
      </div>
    </Main>
  );
};

export default MyDocumentsPage;
