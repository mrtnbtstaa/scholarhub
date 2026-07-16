import Card from "@/components/shared/Card/Card";
import RequirementsCard from "./RequirementsCard";
import LineProgress from "@/components/shared/LineProgress/LineProgress";

const EligibilityRequirements = () => {
  return (
    <Card
      as="section"
      variants="custom"
      className="bg-[#eff5fe] border border-[#d5d8e2] mt-8 p-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="md:text-2xl text-lg text-secondary tracking-wider font-medium">
            Eligibility Requirements
          </h3>
          <p className="text-gray-600 tracking-wider font-normal text-sm">
            Check if you meet the core criteria for this award.
          </p>
        </div>
        <div>
          <p className="md:text-sm text-xs tracking-wider text-right mb-1">
            ELIGIBILITY MATCH
          </p>
          <LineProgress
            percentage={85}
            className="bg-[#006c49]"
            textPercentage="85"
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 grid-rows-1 gap-4">
        <RequirementsCard content="International student with non-Japanese nationality" />
        <RequirementsCard content="Age between 17 and 24 years old" />
        <RequirementsCard content="Completed 12 years of formal education" />
        <RequirementsCard
          content="Willingness to learn Japanese (Beginner level OK)"
          type="invalid"
        />
      </div>
    </Card>
  );
};

export default EligibilityRequirements;
