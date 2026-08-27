import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const ApplicationPrioritiesItem = () => {
  return (
    <Card className="relative transition-colors duration-200 has-[input[type=checkbox]:checked]:ring-2 has-[input[type=checkbox]:checked]:ring-primary">
      <CardHeader className="">
        <div className="flex justify-between px-3 pt-1 gap-2 absolute inset-x-0 mx-auto top-2 w-full">
          <Checkbox className="cursor-pointer" />
          <div className="bg-[#f8e9e9] rounded-full">
            <span className="text-[#db641a] p-2 px-4 md:text-md text-sm tracking-wide">
              High
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex w-full">
        <div>
          <h2 className="font-semibold lg:text-lg md:text-md text-sm tracking-wide leading-none">
            MEXT Personal Statement
          </h2>
          <p className="text-gray-500 tracking-wide md:text-md text-sm">
            Drafting - 2 days left
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationPrioritiesItem;
