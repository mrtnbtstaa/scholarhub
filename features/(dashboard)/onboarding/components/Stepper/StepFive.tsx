import { MdCheck } from "react-icons/md";
import OnboardingContainer from "../OnboardingContainer";
import Card from "@/components/shared/Card/Card";

const StepFive = () => {
  return (
    <OnboardingContainer>
      <div className="flex flex-col items-center justify-center mt-4 mb-4">
        <p className="text-2xl tracking-wide text-secondary font-medium">
          Congratulations, Sarah
        </p>
        <p className="text-secondary font-semibold text-3xl">
          You&apos;re Ready! Welcome to ScholarHub🎉
        </p>
        <p className="text-gray-400 tracking-wide font-medium text-md w-1/2 text-center">
          Your profile is now live. We&apos;ve analyzed your credentials and
          matched you with opportunities tailored to your academic goals.
        </p>
      </div>
      <div className="bg-[#eff5fe] rounded-md w-full p-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-green-600 rounded-full p-2">
            <MdCheck className="text-lg text-white" />
          </div>
          <h2 className="text-secondary font-semibold text-md tracking-wider">
            Personal Info
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-600 rounded-full p-2">
            <MdCheck className="text-lg text-white" />
          </div>
          <h2 className="text-secondary font-semibold text-md tracking-wider">
            Academic Data
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-600 rounded-full p-2">
            <MdCheck className="text-lg text-white" />
          </div>
          <h2 className="text-secondary font-semibold text-md tracking-wider">
            Preferences
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Card className="mb-4 p-4 border border-[#edeff0] text-center w-full">
          <p className="text-secondary text-3xl font-bold tracking-wide">
            3,284
          </p>
          <span className="tracking-wide text-md text-gray-500">MATCHES</span>
        </Card>
        <Card className="mb-4 p-4 border border-[#edeff0] text-center w-full">
          <p className="text-secondary text-3xl font-bold tracking-wide">
            3,284
          </p>
          <span className="tracking-wide text-md text-gray-500">COUNTRIES</span>
        </Card>
        <Card className="mb-4 p-4 border border-[#edeff0] text-center w-full">
          <p className="text-secondary text-3xl font-bold tracking-wide">
            3,284
          </p>
          <span className="tracking-wide text-md text-gray-500">PROVIDERS</span>
        </Card>
      </div>
    </OnboardingContainer>
  );
};

export default StepFive;
