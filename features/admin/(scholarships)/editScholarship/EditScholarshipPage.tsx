import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import ScholarshipForm from "./components/ScholarshipForm";

const EditScholarshipPage = () => {
  return (
    <Main>
      <PageHeader
        title="Edit Scholarship"
        description="Mext Undergraduate Scholarship"
      />
      <ScholarshipForm />
    </Main>
  );
};

export default EditScholarshipPage;
