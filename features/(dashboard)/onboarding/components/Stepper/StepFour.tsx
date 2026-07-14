import OnboardingContainer from "../OnboardingContainer";
import DocumentUpload from "../DocumentUpload";
import { FaUpload } from "react-icons/fa6";
import { LuFileText, LuGraduationCap, LuQuote, LuSignature } from "react-icons/lu";

const StepFour = () => {
  return (
    <OnboardingContainer className="w-full mb-4">
      {/* <div className="mt-4">
                <div className="bg-[#eff5fe] p-4 rounded-md flex items-center gap-2">
                    <MdInfo className="text-2xl text-secondary" />
                    <p className="text-gray-400 tracking-wider text-md">No worries. You can upload these anytime later. Adding them now helps us match you with high-value opportunities immediately.</p>
                </div>
            </div> */}
      <div className="grid grid-cols-2 grid-rows-1 gap-4 px-4">
        <DocumentUpload
          icon={LuFileText}
          title="Resume / CV"
          body="PDF, DOCX (Max 5MB)"
        />
        <DocumentUpload
          icon={LuGraduationCap}
          title="Academic Transcript"
          body="Official or Unofficial"
        />
        <DocumentUpload
          icon={LuQuote}
          title="Recommendation Letter"
          body="PDF format preffered"
        />
        <DocumentUpload
          icon={LuSignature}
          title="Personal Statement"
          body="Essays or statements"
        />
      </div>
      <div className="flex items-center justify-center gap-2 mt-8">
        <FaUpload className="text-md text-gray-400" />
        <p className="text-gray-400 tracking-wide text-xs leading-none">DRAG FILES DIRECTLY ONTO THE CARDS</p>
      </div>
    </OnboardingContainer>
  );
};

export default StepFour;
