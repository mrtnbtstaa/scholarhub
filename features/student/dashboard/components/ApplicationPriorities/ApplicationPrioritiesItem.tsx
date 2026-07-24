import Card from "@/components/shared/Card/Card";
import Checkbox from "@/components/ui/Checkbox/Checkbox";

const ApplicationPrioritiesItem = () => {
  return (
    <Card className="p-4 flex items-center gap-6">
      <Checkbox />
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="font-semibold lg:text-lg md:text-md text-sm tracking-wide leading-none">
            MEXT Personal Statement
          </h2>
          <p className="text-gray-500 tracking-wide md:text-md text-sm">
            Drafting - 2 days left
          </p>
        </div>
        <div className="p-2 bg-[#f8e9e9] rounded">
          <span className="text-[#db641a] md:text-md text-sm tracking-wide font-semibold">
            High
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationPrioritiesItem;
