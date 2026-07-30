import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import Card from "@/components/shared/Card/Card";
import LineProgress from "@/components/shared/LineProgress/LineProgress";
import OverviewCard from "./components/OverviewCard/OverviewCard";

const ProfilePage = () => {
  return (
    <Main>
      <PageHeader
        title="Profile"
        description="Complete your profile to unlock 100% accurate scholarship recommendations."
      />
      <Card variants="custom" className="bg-secondary rounded-2xl p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-start">
            <span className="text-white text-4xl font-semibold">100%</span>
            <span className="text-sm text-white tracking-wider">COMPLETE</span>
          </div>
          <div className="flex flex-col">
            <LineProgress percentage={70} className="bg-red-600" />
            <div></div>
          </div>
        </div>
      </Card>
      <div className="w-full md:flex-row flex-col-reverse flex items-start gap-4 mt-4">
        <div className="w-full">
          <PersonalInformation />
        </div>
        <div className="md:w-[40%] w-full">
          <h2 className="text-gray-600 text-md tracking-wider mb-2">Account Overview</h2>
          <div className="grid grid-cols-2 grid-rows-1 gap-2">
           <OverviewCard count={18} title="SAVED" />
           <OverviewCard count={18} title="SAVED" />
           <OverviewCard count={18} title="SAVED" />
           <OverviewCard count={18} title="SAVED" />
          </div>
        </div>
      </div>
      <Card className="p-4 mt-4">
        <h3 className="font-semibold text-2xl tracking-wider text-secondary">
          Academic History
        </h3>
      </Card>
    </Main>
  );
};

export default ProfilePage;
