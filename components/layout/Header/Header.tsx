import Avatar from "@/components/shared/Avatar/Avatar";
import BrandHeader from "@/components/shared/BrandHeader/BrandHeader";
import Button from "@/components/ui/Button/Button";
import { MdNotifications } from "react-icons/md";
import MenuButton from "../Menu/MenuButton";
import { useNotificationDropdownStore } from "@/store/useNotificationDropdownStore";
import Notification from "@/features/notifications/Notification";

const Header = () => {
  const isNotificationOpen = useNotificationDropdownStore((state) => state.isNotificationOpen);
  const {toggleNotification} = useNotificationDropdownStore((state) => state.action);

  return (
    <header className="bg-[#ffffff] flex items-center md:justify-end justify-between w-full md:p-4 p-2 border-b border-primary-border sticky top-0 z-200 mb-4">
      <BrandHeader className="md:hidden flex" isAdmin={true} />
      <div className="flex items-center">
        <div className="flex items-center md:gap-8 gap-4">
          <Button
          onClick={() => toggleNotification(isNotificationOpen)}
            variants="custom"
            className="border border-primary-border rounded-full"
          >
            <div className="relative inline-flex items-center justify-center p-2">
              <MdNotifications size={24} />
              <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-btn-primary text-xs text-white font-medium">
                24
              </span>
            </div>
          </Button>
          <span className="h-8 w-0 border-l border-gray-300"></span>
          <div className="md:flex hidden items-center gap-2">
            <div>
              <h4 className="text-slate-900 text-sm tracking-wider whitespace-nowrap leading-none">
                Alex Rivera
              </h4>
              <span className="text-xs tracking-wider text-gray-500 leading-none">
                ADMIN
              </span>
            </div>
            <Avatar
              className="w-10 h-10"
              alt="Profile Image"
              source={"/assets/hero.png"}
            />
          </div>
        </div>
        <MenuButton />
      </div>
      <Notification />
    </header>
  );
};

export default Header;
