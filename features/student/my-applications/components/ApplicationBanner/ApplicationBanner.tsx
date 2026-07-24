import Card from "@/components/shared/Card/Card";
import { MdInfo } from "react-icons/md";

const ApplicationBanner = () => {
    return (
        <Card
        className="p-4 rounded-full bg-[#e3e7ee] border border-[#cad1df]"
        variants="custom"
      >
        <div className="flex md:items-center items-start gap-2">
          <MdInfo className="text-secondary text-2xl" />
          <p className="text-secondary text-md tracking-wider">
            6 active applications. Two require immediate attention (MEXT,
            SINGA).
          </p>
        </div>
      </Card>
    )
}

export default ApplicationBanner;