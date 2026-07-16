import Card from "@/components/shared/Card/Card";
import { ElementType } from "react";

interface RequiredDocumentProps {
  icon: ElementType;
  title: string;
  description: string;
}

const DocumentsCard = ({
  icon: Icon,
  title,
  description,
}: RequiredDocumentProps) => {
  return (
    <Card className="p-4 flex flex-col items-center gap-2 justify-center">
      <Icon className="text-4xl text-secondary mb-1" />
      <div className="text-center">
        <h3 className="text-secondary text-md tracking-wide font-semibold mb-2">
          {title}
        </h3>
        <p className="text-xs tracking-wider text-gray-400 leading-none">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default DocumentsCard;
