import PageHeader from "@/components/shared/PageHeader/PageHeader";
// import Button from "@/components/ui/Button/Button";
// import { MdAdd } from "react-icons/md";

const DashboardHeader = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between">
      <PageHeader
        title="Administration Dashboard"
        description="Monitor platform activity, manage scholarship data, review student engagement, and oversee system operations from one centralized dashboard."
      />
      {/* <Button
        className="p-3 md:w-auto w-full text-center whitespace-nowrap"
        suffixIcon={MdAdd}
      >
        Create Scholarship
      </Button> */}
    </div>
  );
};

export default DashboardHeader;
