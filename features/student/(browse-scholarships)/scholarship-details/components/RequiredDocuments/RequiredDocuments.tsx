import { MdOutlineEditNote } from "react-icons/md";
import DocumentsCard from "./DocumentsCard";
import { LiaFileSignatureSolid } from "react-icons/lia";
import { FaBriefcaseMedical, FaGraduationCap, FaRegIdCard } from "react-icons/fa";
import { LuImage, LuThumbsUp } from "react-icons/lu";



const RequiredDocuments = () => {
  return (
    <div className="mt-8">
      <h2 className="text-primary text-2xl font-medium tracking-wider mb-4">
        Required Documents
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
        <DocumentsCard icon={MdOutlineEditNote} title="Application Form" description="ORIGINAL +2 COPIES" />
        <DocumentsCard icon={LiaFileSignatureSolid} title="Transcript" description="CERTIFIED OFFICIAL" />
        <DocumentsCard icon={FaGraduationCap} title="Diploma" description="OR CERTIFICATE" />
        <DocumentsCard icon={LuThumbsUp} title="Recommendations" description="FROM PRINCIPAL" />
        <DocumentsCard icon={FaBriefcaseMedical} title="Medical Certificate" description="MEXT FORMAT ONLY" />
        <DocumentsCard icon={FaRegIdCard} title="Passport Copy" description="PHOTO PAGE" />
        <DocumentsCard icon={LuImage} title="Photo" description="35 X 45 medium " />
      </div>
    </div>
  );
};

export default RequiredDocuments;
