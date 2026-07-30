import Card from "@/components/shared/Card/Card";
import Heading from "@/components/shared/Heading/Heading";
import { FaLanguage } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { IoMedical } from "react-icons/io5";
import { MdHouse, MdMoney } from "react-icons/md";

const FinancialBenefits = () => {
    return (
        <Card as="section" className="p-4 mt-4">
        <Heading>Financial Benefits</Heading>
        <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4">
          <div className="bg-[#f8f9ff] rounded-md p-4 flex items-center gap-2 border border-[#dbdce5]">
              <div className="p-2 rounded-full bg-[#e3e7ee]">
                <MdMoney className="text-slate-900" size={24} />
              </div>
              <div>
                <Heading as="h4">Full Tuition</Heading>
                <span className="text-sm tracking-wider text-slate-600">100% Waiver</span>
              </div>
          </div>
          <div className="bg-[#f8f9ff] rounded-md p-4 flex items-center gap-2 border border-[#dbdce5]">
              <div className="p-2 rounded-full bg-[#e3e7ee]">
                <MdMoney className="text-slate-900" size={24} />
              </div>
              <div>
                <Heading as="h4">Monthly Allowance</Heading>
                <span className="text-sm tracking-wider text-slate-600">117,000 JPY/mo</span>
              </div>
          </div>
          <div className="bg-[#f8f9ff] rounded-md p-4 flex items-center gap-2 border border-[#dbdce5]">
              <div className="p-2 rounded-full bg-[#e3e7ee]">
                <IoMdAirplane className="text-slate-900" size={24} />
              </div>
              <div>
                <Heading as="h4">Round-trip Airfare</Heading>
                <span className="text-sm tracking-wider text-slate-600">Economy class</span>
              </div>
          </div>
          <div className="bg-[#f8f9ff] rounded-md p-4 flex items-center gap-2 border border-[#dbdce5]">
              <div className="p-2 rounded-full bg-[#e3e7ee]">
                <MdHouse className="text-slate-900" size={24} />
              </div>
              <div>
                <Heading as="h4">Accomodation</Heading>
                <span className="text-sm tracking-wider text-slate-600">Dormitory provided</span>
              </div>
          </div>
          <div className="bg-[#f8f9ff] rounded-md p-4 flex items-center gap-2 border border-[#dbdce5]">
              <div className="p-2 rounded-full bg-[#e3e7ee]">
                <FaLanguage className="text-slate-900" size={24} />
              </div>
              <div>
                <Heading as="h4">Language Prep</Heading>
                <span className="text-sm tracking-wider text-slate-600">1 Year intensive</span>
              </div>
          </div>
          <div className="bg-[#f8f9ff] rounded-md p-4 flex items-center gap-2 border border-[#dbdce5]">
              <div className="p-2 rounded-full bg-[#e3e7ee]">
                <IoMedical className="text-slate-900" size={24} />
              </div>
              <div>
                <Heading as="h4">Health Insurance</Heading>
                <span className="text-sm tracking-wider text-slate-600">Full Coverage</span>
              </div>
          </div>
        </div>
      </Card>
    )
}

export default FinancialBenefits;