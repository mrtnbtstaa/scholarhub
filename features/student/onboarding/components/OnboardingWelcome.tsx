import Image from "next/image";
import OnboardingCard from "./OnboardingCard";
import { MdArtTrack, MdNotifications, MdStar } from "react-icons/md";
import { useStepperStore } from "../store/useStepperStore";
import { routes } from "@/lib/constants/_routes";
import { Button } from "@/components/ui/button";
import Navigate from "@/components/ui/Navigate/Navigate";

const OnboardingWelcome = () => {

  const {setCurrentStep} = useStepperStore((state) => state.action);
  const {setStepProgress} = useStepperStore((state) => state.action);

  return (
    <div className="flex flex-col items-center w-full p-4">
        <Image
          alt="Onboarding Step 1 Image"
          width={350}
          height={350}
          src={"/assets/onboarding-step-1.jpg"}
          loading="eager"
        />
        <div className="mt-8 text-center flex flex-col items-center ">
          <p className="text-primary w-[75%] font-semibold tracking-wide lg:text-4xl md:text-2xl text-lg">
            Welcome to ScholarHub, Martin! 🎉
          </p>
          <p className="text-muted-foreground tracking-wide lg:text-md text-sm w-[50%]">
            You&apos;re one step closer to your dream education. We&apos;ve
            built a personalized dashboard to help you manage every part of
            your scholarship journey.
          </p>
        </div>
        <div className="mt-8 transition-all duration-300 lg:flex items-start justify-between gap-4 w-full grid md:grid-cols-2 grid-cols-1 grid-row-1">
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
          <Button className="shadow hover:shadow-gray-600 hover:bg-black hover:scale-[1.03] transition-all duration-300 text-md h-12 tracking-wide font-semibold" aria-label="Start My Journey" onClick={() => {
            setCurrentStep(1)
            setStepProgress(0)
          }}>Start My Journey</Button>
          <Navigate className="text-gray-600 hover:text-gray-9" variants="custom" href={routes.student.dashboard}>
            Skip for now
          </Navigate>
        </div>
    </div>
  );
};

export default OnboardingWelcome;
