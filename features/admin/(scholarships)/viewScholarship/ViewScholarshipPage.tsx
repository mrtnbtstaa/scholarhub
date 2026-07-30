import Main from "@/components/shared/Section/Main";
import ScholarshipHeader from "./components/ScholarshipHeader";
import ScholarshipCards from "./components/ScholarshipCards";
import ScholarshipOverview from "./components/ScholarshipOverview";
import ScholarshipDescription from "./components/ScholarshipDescription";
import FinancialBenefits from "./components/FinancialBenefits";
import RequiredDocuments from "./components/RequiredDocuments";
import Heading from "@/components/shared/Heading/Heading";
import Card from "@/components/shared/Card/Card";
import { MdArrowRightAlt, MdFlag } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const ViewScholarshipPage = () => {
  return (
    <Main>
      <ScholarshipHeader />
      <ScholarshipCards />
      <ScholarshipOverview />
      <ScholarshipDescription />
      <FinancialBenefits />
      <RequiredDocuments />
      <div className="my-4">
          <Heading as="h2">Related Scholarships</Heading>
          <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 gap-4">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-md bg-[#e5e8ec]">
                      <MdFlag className="text-slate-900" size={24} />
                  </div>
                  <div className="bg-[#dde8ff] w-8 h-8 flex items-center justify-center rounded-full">
                    <span className="text-xs tracking-wider text-slate-900 font-semibold">UK</span>
                  </div>
                </div>
                <Heading as="h4" className="text-md mt-2 tracking-wider text-slate-800">Chevening Scholarship</Heading>
                <p className="text-gray-500 text-xs tracking-wider">UK Government (FCDO)</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-btn-primary text-sm tracking-wider font-semibold">Fully Funded</span>
                  <BsArrowRight size={20} />
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-md bg-[#e5e8ec]">
                      <MdFlag className="text-slate-900" size={24} />
                  </div>
                  <div className="bg-[#dde8ff] w-8 h-8 flex items-center justify-center rounded-full">
                    <span className="text-xs tracking-wider text-slate-900 font-semibold">UK</span>
                  </div>
                </div>
                <Heading as="h4" className="text-md mt-2 tracking-wider text-slate-800">Chevening Scholarship</Heading>
                <p className="text-gray-500 text-xs tracking-wider">UK Government (FCDO)</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-btn-primary text-sm tracking-wider font-semibold">Fully Funded</span>
                  <BsArrowRight size={20} />
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-md bg-[#e5e8ec]">
                      <MdFlag className="text-slate-900" size={24} />
                  </div>
                  <div className="bg-[#dde8ff] w-8 h-8 flex items-center justify-center rounded-full">
                    <span className="text-xs tracking-wider text-slate-900 font-semibold">UK</span>
                  </div>
                </div>
                <Heading as="h4" className="text-md mt-2 tracking-wider text-slate-800">Chevening Scholarship</Heading>
                <p className="text-gray-500 text-xs tracking-wider">UK Government (FCDO)</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-btn-primary text-sm tracking-wider font-semibold">Fully Funded</span>
                  <BsArrowRight size={20} />
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-md bg-[#e5e8ec]">
                      <MdFlag className="text-slate-900" size={24} />
                  </div>
                  <div className="bg-[#dde8ff] w-8 h-8 flex items-center justify-center rounded-full">
                    <span className="text-xs tracking-wider text-slate-900 font-semibold">UK</span>
                  </div>
                </div>
                <Heading as="h4" className="text-md mt-2 tracking-wider text-slate-800">Chevening Scholarship</Heading>
                <p className="text-gray-500 text-xs tracking-wider">UK Government (FCDO)</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-btn-primary text-sm tracking-wider font-semibold">Fully Funded</span>
                  <BsArrowRight size={20} />
                </div>
              </Card>
          </div>
      </div>
    </Main>
  );
};

export default ViewScholarshipPage;
