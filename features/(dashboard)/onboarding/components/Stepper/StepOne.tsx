import Button from "@/components/ui/Button/Button";
import OnboardingContainer from "../OnboardingContainer";
import FormField from "@/components/ui/FormField/FormField";
import Label from "@/components/ui/Label/Label";
import Input from "@/components/ui/Input/Input";
import { MdCalendarMonth, MdFlag, MdPhone } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { IoCamera } from "react-icons/io5";

const StepOne = () => {
  return (
    <OnboardingContainer className="w-full p-4">
      <div className="mt-4 text-center">
        <p className="text-4xl tracking-wide text-secondary font-semibold leading-none">
          Tell Us About Yourself
        </p>
        <p className="text-gray-600 tracking-wide text-md">
          Help us personalize your scholarship journey with some basic details.
        </p>
      </div>
      <form>
        <div className="mt-8">
          <div className="text-center">
            <div className="relative w-32 h-32 leading-none bg-[#eff5fe] rounded-full border border-dashed flex flex-col items-center justify-center space-y-4 text-center mx-auto mb-4">
              <Input type="file" className="hidden" />
              <div>
                <Button aria-label="Camera Button Upload" variants="none">
                  <IoCamera className="text-3xl text-black/70" />
                </Button>
                <p className="text-xs text-gray-400 tracking-wide">Photo</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm tracking-wide font-medium leading-none">
              Drag and drop or click to upload
            </p>
          </div>
          <div className="lg:flex grid grid-cols-1 grid-rows-1 w-full gap-2">
            <FormField className="w-full">
              <Label htmlFor="date of birth">Date of Birth</Label>
              <Input type="date" prefixIcon={MdCalendarMonth} />
            </FormField>
            <FormField className="w-full">
              <Label htmlFor="gender">Gender</Label>
              <select className="outline-none border border-[#c5c7cf] p-3 rounded-md leading-none w-full">
                <option defaultValue="Select Gender">Select Gender</option>
              </select>
            </FormField>
          </div>
          <div className="lg:flex grid grid-cols-1 grid-rows-1 w-full gap-2">
            <FormField className="w-full">
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                type="text"
                prefixIcon={MdFlag}
                placeholder="e.g. Canadian"
              />
            </FormField>
            <FormField className="w-full">
              <Label htmlFor="current country">Current Country</Label>
              <Input
                type="text"
                prefixIcon={IoMdGlobe}
                placeholder="e.g. United Kingdom"
              />
            </FormField>
          </div>
          <FormField className="w-full">
            <Label htmlFor="phone number">Phone Number</Label>
            <Input
              type="text"
              prefixIcon={MdPhone}
              placeholder="(+63) (999) 000-000"
            />
          </FormField>
        </div>
      </form>
    </OnboardingContainer>
  );
};

export default StepOne;
