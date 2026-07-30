import Card from "@/components/shared/Card/Card";
import Heading from "@/components/shared/Heading/Heading";
import { IoMdDocument } from "react-icons/io";

const RequiredDocuments = () => {
  return (
    <Card as="section" className="p-4 my-4">
      <Heading>Required Documents</Heading>
      <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4">
        <div className="border border-[#e3e2e8] rounded-md p-2">
          <div className="flex items-center gap-2">
            <IoMdDocument size={24} className="text-slate-900" />
            <Heading className="font-normal text-slate-600 text-md" as="h4">
              Application Form
            </Heading>
          </div>
        </div>
        <div className="border border-[#e3e2e8] rounded-md p-2">
          <div className="flex items-center gap-2">
            <IoMdDocument size={24} className="text-slate-900" />
            <Heading className="font-normal text-slate-600 text-md" as="h4">
              Offcial Transcripts
            </Heading>
          </div>
        </div>
        <div className="border border-[#e3e2e8] rounded-md p-2">
          <div className="flex items-center gap-2">
            <IoMdDocument size={24} className="text-slate-900" />
            <Heading className="font-normal text-slate-600 text-md" as="h4">
              Passport Copy
            </Heading>
          </div>
        </div>
        <div className="border border-[#e3e2e8] rounded-md p-2">
          <div className="flex items-center gap-2">
            <IoMdDocument size={24} className="text-slate-900" />
            <Heading className="font-normal text-slate-600 text-md" as="h4">
              Recommendation Letters (2)
            </Heading>
          </div>
        </div>
        <div className="border border-[#e3e2e8] rounded-md p-2">
          <div className="flex items-center gap-2">
            <IoMdDocument size={24} className="text-slate-900" />
            <Heading className="font-normal text-slate-600 text-md" as="h4">
              Medical Certificate
            </Heading>
          </div>
        </div>
        <div className="border border-[#e3e2e8] rounded-md p-2">
          <div className="flex items-center gap-2">
            <IoMdDocument size={24} className="text-slate-900" />
            <Heading className="font-normal text-slate-600 text-md" as="h4">
              Personal Statement
            </Heading>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RequiredDocuments;
