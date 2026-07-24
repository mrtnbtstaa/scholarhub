import Card from "@/components/shared/Card/Card";
import LineProgress from "@/components/shared/LineProgress/LineProgress";
import DocumentCheckbox from "./DocumentCheckbox";

const RequiredDocuments = () => {
  return (
    <Card as="section" className="p-4 mt-4">
      <h3 className="text-secondary text-2xl tracking-wider font-semibold">
        Required Documents
      </h3>
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <p className="text-sm tracking-wider">
            <strong className="text-sm">Progress: </strong>0 / 7 Documents
            Prepared
          </p>
          <span>85%</span>
        </div>
        <LineProgress percentage={85} className="bg-green-600" />
      </div>
      <div className="mt-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap grid-rows-1 gap-4 w-full">
          <DocumentCheckbox title="Application Form" />
          <DocumentCheckbox title="Academic Transcript" />
          <DocumentCheckbox title="High School Diploma" />
          <DocumentCheckbox title="Recommendation Letter" />
          <DocumentCheckbox title="Medical Certificate" />
          <DocumentCheckbox title="Passport Copy" />
          <DocumentCheckbox title="Passport-sized Photograph" />
        </div>
      </div>
    </Card>
  );
};

export default RequiredDocuments;
