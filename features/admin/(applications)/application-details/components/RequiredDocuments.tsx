import Card from "@/components/shared/Card/Card";
import { cn } from "@/lib/cn";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdCheck } from "react-icons/md";

interface DocumentsItem {
  isUploaded?: boolean;
  title: string;
  subTitle: string;
}

interface RequiredDocumentProps {
  documentItems: DocumentsItem[];
  uploadedCount: number;
}

const RequiredDocuments = ({
  documentItems,
  uploadedCount,
}: RequiredDocumentProps) => {
  return (
    <Card className="md:col-span-4 col-span-12 mt-4 p-4 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-lg tracking-wider">Required Documents</h3>
        <p className="text-gray-600 tracking-wider text-md">
          {uploadedCount} of {documentItems.length} Uploaded
        </p>
      </div>
      {documentItems &&
        documentItems.map(({ isUploaded, title, subTitle }) => (
          <div
            key={title}
            className={cn(
              "p-4 rounded-md flex items-center gap-3 mt-6",
              isUploaded
                ? "bg-[#f8f9ff]"
                : "border border-[#dddde2] border-dashed",
            )}
          >
            <div className="inline-block border border-green-600 rounded-full p-1">
              {isUploaded ? (
                <MdCheck className="text-green-600 text-lg" />
              ) : (
                <FiMoreHorizontal className="text-[#72757a] text-lg" />
              )}
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <h4
                  className={cn(
                    "font-semibold tracking-widest md:text-md text-sm",
                    !isUploaded && "text-gray-500",
                  )}
                >
                  {title}
                </h4>
                <p
                  className={cn(
                    "text-sm tracking-wider",
                    isUploaded ? "text-gray-500" : "text-red-600",
                  )}
                >
                  {subTitle}
                </p>
              </div>
              <div
                className={cn(
                  "inline-block px-3 py-1 text-xs rounded-lg",
                  isUploaded
                    ? "bg-btn-primary text-white"
                    : "text-[#72757a] bg-transparent",
                )}
              >
                {isUploaded ? "Uploaded" : "Awaiting Student"}
              </div>
            </div>
          </div>
        ))}
    </Card>
  );
};

export default RequiredDocuments;
