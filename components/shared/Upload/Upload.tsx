import { MdInfo, MdUploadFile } from "react-icons/md";
import LineProgress from "../LineProgress/LineProgress";
import Button from "@/components/ui/Button/Button";

type state = "idle" | "uploading" | "success" | "error";

interface UploadProps {
  uploadState?: state;
  title: string;
  description: string;
  uploadPercentage?: number;
  file?: File;
}

const stateConfig = (state: state) => {
  switch (state) {
    case "idle":
      return {
        borderColor: "border-[#c5c7cf]",
        bgColor: "bg-[#f8f9ff]",
        textColor: "text-gray-400",
      };
    case "uploading":
      return {
        borderColor: "border-btn-primary",
        bgColor: "bg-[#f8f9ff]",
        textColor: "text-btn-primary",
      };
    case "success":
      return {
        borderColor: "border-green-600",
        bgColor: "bg-[#f8f9ff]",
        textColor: "text-green-600",
      };
    case "error":
      return {
        borderColor: "border-red-600",
        bgColor: "bg-[#f8f9ff]",
        textColor: "text-gray-400",
      };
  }
};

const Upload = ({
  uploadState = "idle",
  title,
  description,
  uploadPercentage = 75,
  file,
}: UploadProps) => {
  const config = stateConfig(uploadState);

  return (
    <div
      className={`border border-dashed rounded-md w-full p-4 ${config.bgColor} ${config.borderColor}`}
    >
      <div className="flex flex-col items-center gap-1 justify-center">
        {uploadState === "error" ? (
          <MdInfo className={`text-6xl text-red-600`} />
        ) : (
          <MdUploadFile className={`text-6xl ${config.textColor}`} />
        )}
        <div className="mt-2 text-center min-w-100">
          <p className={`text-md tracking-wider ${config.textColor}`}>
            {title}
          </p>
          {uploadState === "uploading" && (
            <div>
              <LineProgress
                percentage={uploadPercentage}
                className="bg-btn-primary w-full"
              />
              <Button variants="custom" className="mt-2 text-gray-500">
                Cancel
              </Button>
            </div>
          )}
          {uploadState === "idle" && (
            <p className="text-sm tracking-wider text-gray-600">
              {description}
              Drag and drop to upload logo and the supported files (PNG, JPG,
              JPEG, SVG) up to 2MB
            </p>
          )}
          {uploadState === "success" && (
            <p className="text-sm tracking-wider text-gray-600">
              qwewqeqeqwewqe.jpg
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
