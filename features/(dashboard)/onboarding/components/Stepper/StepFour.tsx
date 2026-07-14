import { MdInfo } from "react-icons/md";
import OnboardingContainer from "../OnboardingContainer";

const StepFour = () => {
    return (
        <OnboardingContainer className=" px-4 mb-4">
            <div className="mt-4">
                <div className="bg-[#eff5fe] p-4 rounded-md flex items-center gap-2">
                    <MdInfo className="text-2xl text-secondary" />
                    <p className="text-gray-400 tracking-wider text-md">No worries. You can upload these anytime later. Adding them now helps us match you with high-value opportunities immediately.</p>
                </div>
            </div>
        </OnboardingContainer>
    )
}

export default StepFour;