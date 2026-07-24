import Divider from "@/components/shared/Divider/Divider";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";
import { MdCheck, MdEdit } from "react-icons/md";

const PersonalInformationHeader = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-start gap-4">
        <Image
          alt="Profile Image"
          src={"/assets/hero.png"}
          width={96}
          height={96}
          loading="eager"
          priority
          className="aspect-square rounded-full object-cover"
        />
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col items-start">
            <h3 className="font-semibold md:text-2xl text-lg tracking-wider">
              Martin Bautista
            </h3>
            <div className="flex items-center gap-1">
              <p className="text-gray-600 md:text-sm text-xs tracking-wider">
                BS Computer Science
              </p>
              <span>·</span>
              <p className="text-gray-600 md:text-sm text-xs tracking-wider">
                Angeles University Foundation
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="rounded-2xl flex items-center gap-1 bg-[#f0fdf4] px-3 py-2 border border-[#bbf0cc]">
                <MdCheck />
                <h4 className="text-xs text-[#15803d] tracking-widest font-semibold">
                  Identity Verified
                </h4>
              </div>
              <div className="rounded-2xl flex items-center gap-1 bg-[#eff5fe] px-3 py-2 border border-[#e3e6f0]">
                <FaLocationPin />
                <h4 className="text-xs tracking-widest font-semibold">
                  Pampanga, PH
                </h4>
              </div>
            </div>
          </div>
          <Button
            variants="custom"
            className="p-2 bg-[#f8f8fb] hover:bg-[#efeff8] transition-colors duration-100 rounded-lg tracking-wider text-md font-medium"
            iconClass="text-black"
          >
            Edit
          </Button>
        </div>
      </div>
      <Divider className="mt-6" />
    </>
  );
};

export default PersonalInformationHeader;
