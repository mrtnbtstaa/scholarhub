import Card from "@/components/shared/Card/Card";
import { MdApi } from "react-icons/md";

const ApiImports = () => {
  return (
    <Card variants="custom" className="p-4 bg-secondary mt-4 w-full">
      <div className="flex items-center justify-between">
        <MdApi className="text-4xl text-white" />
        <div className="bg-[#334c6b] px-3 py-1 rounded-full">
          <span className="text-xs text-white tracking-wider font-semibold">
            API LIVE
          </span>
        </div>
      </div>
      <h4 className="text-[#cdd3da] tracking-wider text-lg font-medium my-2">
        Total API Imports
      </h4>
      <span className="text-white text-3xl tracking-wider font-semibold">
        842,109
      </span>
    </Card>
  );
};

export default ApiImports;
