import Card from "@/components/shared/Card/Card";
import PendingScholarshipItem from "./PendingScholarshipItem";
import Button from "@/components/ui/Button/Button";

const PendingScholarships = () => {
  return (
    <Card className="p-4 mt-4">
      <h3 className="text-primary tracking-wider font-semibold text-md mb-4">
        Pending Verification Queue
      </h3>
      <div className="flex flex-col items-start gap-4 w-full">
        {Array.from({ length: 3 }).map((_, idx) => (
          <PendingScholarshipItem
            key={idx}
            title="Asean Foundation"
            dateSubmitted="2h"
          />
        ))}
      </div>
      <Button variants="custom" className="text-md text-primary tracking-wider font-normal flex items-center justify-center mt-4 mx-auto">
        View All Pending (9)
      </Button>
    </Card>
  );
};

export default PendingScholarships;
