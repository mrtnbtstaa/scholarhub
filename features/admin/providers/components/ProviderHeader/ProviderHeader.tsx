import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Button from "@/components/ui/Button/Button";
import { MdAdd } from "react-icons/md";

const ProviderHeader = () => {
    return (
        <div className="flex md:flex-row flex-col items-center justify-between">
        <PageHeader
          title="Scholarship Providers"
          description="Manage governments, universities, organizations, NGOs, and private institutions that publish scholarship opportunities on ScholarHub."
        />
        <Button
          className="p-3 md:w-auto w-full text-center whitespace-nowrap"
          suffixIcon={MdAdd}
        >
          Add Provider
        </Button>
      </div>
    )
}

export default ProviderHeader;