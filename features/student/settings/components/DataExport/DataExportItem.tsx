import Card from "@/components/shared/Card/Card";
import Button from "@/components/ui/Button/Button";
import { BiCloudDownload } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const PrepareExport = () => {
  return (
    <Card className="p-4 mt-4 border border-[#c7c9d1] rounded-2xl flex flex-col items-center justify-center gap-2" variants="custom">
      <div className="bg-[#e8eaef] rounded-lg p-3 inline-block">
        <BiCloudDownload className="text-2xl" />
      </div>
      <h4 className="text-secondary text-lg tracking-wider font-medium">
        Download My Data
      </h4>
      <p className="text-gray-600 text-md tracking-wider md:text-start text-center">
        Export all scholarship applications, essays, and uploaded documents as a
        ZIP file.
      </p>
      <Button
        variants="outlined"
        className="border-none p-0 text-secondary font-medium tracking-wider"
        prefixIcon={BsArrowRight}
        iconClass="text-secondary"
      >
        Prepare Export
      </Button>
    </Card>
  );
};

export default PrepareExport;
