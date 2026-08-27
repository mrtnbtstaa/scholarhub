import Navigate from "@/components/ui/Navigate/Navigate";
import ApplicationPrioritiesItem from "./ApplicationPrioritiesItem";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const ApplicationPriorities = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between">
        <CardTitle>Application Priorities</CardTitle>
        <Navigate href="/" variants="default">
          View All
        </Navigate>
      </CardHeader>
      <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 p-4">
        <ApplicationPrioritiesItem />
        <ApplicationPrioritiesItem />
        <ApplicationPrioritiesItem />
        <ApplicationPrioritiesItem />
      </div>
    </Card>
  );
};

export default ApplicationPriorities;
