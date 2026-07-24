import Card from "@/components/shared/Card/Card";
import { IoMdCalendar, IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import PersonalInformationHeader from "./PersonalInformationHeader";
import InformationContent from "./InformationContent";

const PersonalInformation = () => {
  return (
    <Card className="p-4 w-full">
      <PersonalInformationHeader />
      <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6 mt-4">
        <InformationContent
          icon={IoMdPerson}
          label="Full Legal Name"
          title="Martin Bautista"
        />
        <InformationContent
          icon={MdEmail}
          label="Email"
          title="martinbautista0288@outlook.com"
        />
        <InformationContent
          icon={IoMdCalendar}
          label="Date of Birth"
          title="1999-18-09"
        />
        <InformationContent
          icon={FaLocationPin}
          label="Current Location"
          title="Central Luzon / Pamapnga"
        />
        <InformationContent icon={IoMdPerson} label="Gender" title="Male" />
        <InformationContent
          icon={IoMdPerson}
          label="Nationality"
          title="Filipino"
        />
      </div>
    </Card>
  );
};

export default PersonalInformation;
