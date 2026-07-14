import Image from "next/image";
import OnboardingCard from "./OnboardingCard";
import { MdArtTrack, MdNotifications, MdStar } from "react-icons/md";
import Navigate from "@/components/ui/Navigate/Navigate";
import Button from "@/components/ui/Button/Button";
import { useStepperStore } from "@/features/(dashboard)/onboarding/store/useStepperStore";

const OnboardingWelcome = () => {

  const {setCurrentStep} = useStepperStore((state) => state.action);
  const {setStepProgress} = useStepperStore((state) => state.action);

  return (
    <div className="flex flex-col items-center mt-4 p-4">
      <div className="flex justify-between">
        <div className="flex flex-col items-center justify-center w-full overflow-y-hidden mt-8">
          <Image
            alt="Onboarding Step 1 Image"
            width={256}
            height={256}
            src={"/assets/onboarding-step-1.jpg"}
            loading="eager"
          />
          <div className="mt-8 text-center w-[75%]">
            <p className="text-secondary font-semibold tracking-wide lg:text-4xl md:text-2xl text-lg">
              Welcome to ScholarHub, Martin! 🎉
            </p>
            <p className="text-gray-400 tracking-wide lg:text-md text-sm">
              You&apos;re one step closer to your dream education. We&apos;ve
              built a personalized dashboard to help you manage every part of
              your scholarship journey.
            </p>
          </div>
          <div className="mt-8 lg:flex items-start justify-between gap-4 w-full grid md:grid-cols-2 grid-cols-1 grid-row-1">
            <OnboardingCard
              icon={MdArtTrack}
              title="Applications"
              description="Track status in real-time"
            />
            <OnboardingCard
              icon={MdStar}
              title="Recommendations"
              description="AI-powered matches"
            />
            <OnboardingCard
              icon={MdNotifications}
              title="Reminders"
              description="Never miss a deadline"
            />
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 mb-4">
            <Button className="p-4 text-md tracking-wide font-semibold" aria-label="Start My Journey" onClick={() => {
              setCurrentStep(1)
              setStepProgress(20)
            }}>Start My Journey</Button>
            <Navigate href="/" variants="default">
              Skip for now
            </Navigate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWelcome;
