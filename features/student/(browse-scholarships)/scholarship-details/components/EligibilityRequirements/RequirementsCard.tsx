import Card from "@/components/shared/Card/Card";
import { LuCircleX } from "react-icons/lu";
import { MdCheckCircle } from "react-icons/md";

interface RequirementsProps{
    type?: "valid" | "invalid";
    content: string;
}

const RequirementsCard = ({type = "valid", content}: RequirementsProps) => {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        {type === "valid" ? (
            <MdCheckCircle className="md:text-2xl text-6xl text-green-600" />
        ) : (
            <LuCircleX className="md:text-2xl text-6xl text-red-600" />
        )}
        <p className="text-gray-800 tracking-wider text-sm">
          {content}
        </p>
      </div>
    </Card>
  );
};

export default RequirementsCard;
