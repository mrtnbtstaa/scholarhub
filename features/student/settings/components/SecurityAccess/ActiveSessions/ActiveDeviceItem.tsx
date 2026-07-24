import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/utils";
import { IoMdDesktop, IoMdPhonePortrait } from "react-icons/io";

interface ActiveDeviceProps {
  deviceName: string;
  location: string;
  timeSession: string;
  deviceType?: "Desktop" | "Phone";
  isLastItem: boolean;
  isNotCurrentDeviceActive?: boolean;
}

const ActiveDeviceItem = ({
  deviceName,
  location,
  timeSession,
  deviceType = "Desktop",
  isLastItem,
  isNotCurrentDeviceActive: isCurrentDeviceActive,
}: ActiveDeviceProps) => {
  return (
    <div
      className={cn(
        "p-4 border-[#c7c9d1] w-full",
        isLastItem ? "" : "border-b",
      )}
    >
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-4">
          {deviceType === "Desktop" ? (
            <IoMdDesktop className="text-2xl text-gray-600" />
          ) : (
            <IoMdPhonePortrait className="text-2xl text-gray-600" />
          )}
          <div className="flex flex-col items-start leading-0">
            <h4 className="md:text-lg text-sm tracking-wider text-gray-700">
              {deviceName}
            </h4>
            <div className="flex items-center gap-1 w-full">
              <span className="text-gray-600 md:text-sm text-xs whitespace-nowrap tracking-wider">
                {location}
              </span>
              <span>·</span>
              <span className="text-gray-600 md:text-sm text-xs whitespace-nowrap tracking-wider">
                {timeSession}
              </span>
            </div>
          </div>
        </div>
        {isCurrentDeviceActive && (
          <Button variants="custom" className="text-red-600 text-sm">
            Revoke
          </Button>
        )}
      </div>
    </div>
  );
};

export default ActiveDeviceItem;
