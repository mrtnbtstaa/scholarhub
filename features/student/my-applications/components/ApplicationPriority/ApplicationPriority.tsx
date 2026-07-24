import Card from "@/components/shared/Card/Card";
import Navigate from "@/components/ui/Navigate/Navigate";
import { MdWarning } from "react-icons/md";

const ApplicationPriority = () => {
    return (
        <Card as="section" className="p-6 mt-4 bg-[#fae8e7] w-full overflow-hidden" variants="custom">
        <div className="flex items-start gap-4">
          <div className="bg-[#cc5657] md:p-6 p-4 rounded-2xl animate-pulse">
            <MdWarning className="md:text-3xl text-2xl text-white" />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex md:flex-row flex-col md:items-center items-start gap-2 mb-2">
              <div className="bg-[#cc5657] px-2 py-1 rounded-lg">
                <p className="text-xs tracking-wider text-white">
                  PRIORITY ATTENTION
                </p>
              </div>
              <h3 className="text-[#93010b] tracking-wider text-sm font-semibold">
                MEXT Undergraduate Scholarship
              </h3>
            </div>
            <div className="flex flex-col md:items-center items-start justify-between w-full">
              <p className="text-gray-700 text-md tracking-wider">
                Application closes in{" "}
                <strong className="text-[#bb1b1a]">5 days.</strong> You are
                missing a mandatory <strong>Recommendation Letter.</strong>{" "}
                Complete this immediately to avoid disqualification.
              </p>
              <div className="flex items-center md:flex-row flex-col w-full mt-2 gap-2">
                <Navigate
                  href={"/"}
                  className="p-3 bg-[#fff8f8] rounded-md border md:w-auto w-full text-center border-[#c7c8d1]"
                  variants="custom"
                >
                  View Requirements
                </Navigate>
                <Navigate href={"/"} className="p-2 md:w-auto w-full text-center">
                  Continue Application
                </Navigate>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
}

export default ApplicationPriority;