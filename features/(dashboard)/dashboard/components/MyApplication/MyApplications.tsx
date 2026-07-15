import Card from "@/components/shared/Card/Card";
import CardHeader from "@/components/shared/CardHeader/CardHeader";
import Button from "@/components/ui/Button/Button";
import { LuListFilter } from "react-icons/lu";
import ApplicationContent from "./ApplicationContent";

interface ApplicationProps {
  status?: "Draft" | "In Review" | "Submitted" | "Incomplete";
}

const MyApplications = ({ status = "In Review" }: ApplicationProps) => {
  return (
    <Card as="section" className="mt-4 w-full">
      <CardHeader headerTitle="My Applications">
        <Button variants="none" className="border border-[#c5c7cf] rounded p-1">
          <LuListFilter className="text-2xl text-secondary" />
        </Button>
      </CardHeader>
      <ApplicationContent status={status} />
    </Card>
  );
};

export default MyApplications;
