import Card from "@/components/shared/Card/Card";
import CardHeader from "@/components/shared/CardHeader/CardHeader";
import Navigate from "@/components/ui/Navigate/Navigate";
import ApplicationPrioritiesItem from "./ApplicationPrioritiesItem";

const ApplicationPriorities = () => {
  return (
    <Card as="section" className="w-full">
      <CardHeader headerTitle="Application Priorities">
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
