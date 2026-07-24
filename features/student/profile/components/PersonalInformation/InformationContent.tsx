import { ElementType } from "react";

interface InformationProps {
    icon: ElementType;
    label: string;
    title: string;
}

const InformationContent = ({icon: Icon, label, title}: InformationProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#f8f8fb] rounded-lg p-3 inline-block">
        <Icon />
      </div>
      <div className="leading-none">
        <h4 className="text-md tracking-wider text-gray-700">
          {title}
        </h4>
        <span className="text-sm tracking-wider text-gray-500">
          {label}
        </span>
      </div>
    </div>
  );
};

export default InformationContent;
