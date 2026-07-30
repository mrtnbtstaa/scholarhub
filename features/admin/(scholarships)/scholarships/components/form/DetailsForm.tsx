import Checkbox from "@/components/ui/Checkbox/Checkbox";
import FormField from "@/components/ui/FormField/FormField";
import Label from "@/components/ui/Label/Label";
import TextArea from "@/components/ui/TextArea/TextArea";

type RequiredDocuments = {
  documentTitle: string;
};

const documents: RequiredDocuments[] = [
  { documentTitle: "Official Transcripts" },
  { documentTitle: "ID / Passport" },
  { documentTitle: "Medical Certificate" },
  { documentTitle: "Application Form" },
  { documentTitle: "Personal Statement" },
  { documentTitle: "Recommendation Letters" },
];

const DetailsForm = () => {
  return (
    <div className="flex flex-col items-start w-full px-4">
      <FormField className="w-full">
        <Label isRequired={true} htmlFor="benefits-coverage">
          Benefits & Coverage
        </Label>
        <TextArea
          id="benefits-coverage"
          placeholder="List allowance, flight tickets, insurance, etc."
          required
        />
      </FormField>
      <FormField className="w-full">
        <Label isRequired={true} htmlFor="application-process">
          Application Process
        </Label>
        <TextArea
          id="application-process"
          placeholder="Step-by-step guide for applicants..."
          required
        />
      </FormField>
      <FormField className="w-full">
        <Label isRequired={true} htmlFor="required-documents">
          Required Documents
        </Label>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full">
          {documents.map((document) => (
            <div
              key={document.documentTitle}
              className="bg-[#f8f9ff] rounded-lg border border-[#e0e1e8] w-full"
            >
              <div className="flex items-center gap-2 p-2">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span className="text-xs tracking-wider text-gray-700 whitespace-nowrap">
                    {document.documentTitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FormField>
    </div>
  );
};

export default DetailsForm;
