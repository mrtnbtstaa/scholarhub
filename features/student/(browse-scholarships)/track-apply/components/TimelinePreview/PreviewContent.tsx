import { cn } from "@/lib/cn";
import { ElementType } from "react";
import { MdCheck } from "react-icons/md";

interface PreviewProps {
  icon?: ElementType;
  title: string;
  subTitle: string;
  isCurrentPreview?: boolean;
}

const PreviewContent = ({
  icon: Icon,
  title,
  subTitle,
  isCurrentPreview = true,
}: PreviewProps) => {
  return (
    <div className="flex items-start gap-2 z-100">
      <div
        className={cn(
          "p-2 rounded-full",
          isCurrentPreview ? "bg-green-600" : "bg-secondary",
        )}
      >
        {isCurrentPreview ? (
          <MdCheck className="text-white" />
        ) : (
          Icon && <Icon className="text-white" />
        )}
      </div>
      <div>
        {title && (
          <h3 className={
            cn(
              "text-secondary font-semibold text-md tracking-wider",
              !isCurrentPreview && "opacity-50"
            )
          }>
            {title}
          </h3>
        )}
        {subTitle && (
          <p className={
            cn(
              "text-gray-500 text-sm tracking-wider",
              !isCurrentPreview && "opacity-50"
            )
          }>{subTitle}</p>
        )}
      </div>
    </div>
  );
};

export default PreviewContent;
