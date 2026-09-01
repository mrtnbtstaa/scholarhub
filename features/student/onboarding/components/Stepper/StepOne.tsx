import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import { MdFlag, MdPhone } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { IoCamera } from "react-icons/io5";
import { FileUpload } from "@/components/shared/FileUpload/FileUpload";
import SelectField from "@/components/shared/SelectField/SelectField";
import { GenderData } from "@/data/genderData";
import { useOnboardingStore } from "@/store/useOnboardDraftStore";
import { Gender } from "@/types/onboarding/onboarding";
import { Label } from "@/components/ui/label";
const StepOne = () => {
  const {draft, updateField} = useOnboardingStore()
  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <form>
              <div className="text-center mb-3">
                  <p className="text-2xl tracking-wide text-primary font-semibold leading-none">
                    Tell Us About Yourself
                  </p>
                  <p className="text-gray-600 tracking-wide text-md">
                    Help us personalize your scholarship journey with some basic details.
                  </p>
              </div>
              <div className="text-center">
            <FileUpload />
                <p className="text-gray-500 text-sm tracking-wide font-medium leading-none">
                  Drag and drop or click to upload
                </p>
              </div>
            <div className="lg:flex grid grid-cols-1 grid-rows-1 w-full gap-2">
              <FormField className="w-full">
                <Label htmlFor="date of birth">Date of Birth</Label>
                <Input
                variant="tertiary"
                type="date" />
              </FormField>
              <FormField className="w-full">
                <Label htmlFor="gender">Gender</Label>
                <SelectField variant="tertiary" placeholder="Select Gender" data={GenderData} value={draft.gender ?? ""} onChange={(value) => updateField("gender", value as string )} className="  leading-none w-full"/>
        
              </FormField>
            </div>
            <div className="lg:flex grid grid-cols-1 grid-rows-1 w-full gap-2">
              <FormField className="w-full">
                <Label htmlFor="nationality">Nationality</Label>
                <Input
                  variant="tertiary"
                  type="text"
                  prefixIcon={MdFlag}
                  placeholder="e.g. Canadian"
                />
              </FormField>
              <FormField className="w-full">
                <Label htmlFor="current country">Current Country</Label>
                <Input
                  variant="tertiary"
                  type="text"
                  prefixIcon={IoMdGlobe}
                  placeholder="e.g. United Kingdom"
                />
              </FormField>
            </div>
            <FormField className="w-full">
              <Label htmlFor="phone number">Phone Number</Label>
              <Input
                variant="tertiary"
                type="text"
                prefixIcon={MdPhone}
                placeholder="(+63) (999) 000-000"
              />
            </FormField>
      </form>
    </div>
  );
};

export default StepOne;
