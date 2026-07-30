import Card from "@/components/shared/Card/Card";
import Divider from "@/components/shared/Divider/Divider";
import Heading from "@/components/shared/Heading/Heading";
import { MdInfo } from "react-icons/md";

const ScholarshipOverview = () => {
  return (
    <Card className="p-4 mt-4" as="section">
      <div className="flex items-center gap-1">
        <MdInfo className="text-slate-900" size={"24"} />
        <Heading>Scholarship Overview</Heading>
      </div>
      <div className="mt-4 flex flex-col items-start gap-6 w-full">
        <div className="w-full">
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500 text-sm tracking-wider">Provider</dt>
            <dd className="text-slate-900 tracking-wider text-sm font-semibold">MEXT Japan</dd>
          </dl>
          <Divider className="mt-2" />
        </div>
        <div className="w-full">
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500 text-sm tracking-wider">Country</dt>
            <dd className="text-slate-900 tracking-wider text-sm font-semibold">Japan</dd>
          </dl>
          <Divider className="mt-2" />
        </div>
        <div className="w-full">
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500 text-sm tracking-wider">Degree Level</dt>
            <dd className="text-slate-900 tracking-wider text-sm font-semibold">Bachelor{"'s"} Degree</dd>
          </dl>
          <Divider className="mt-2" />
        </div>
        <div className="w-full">
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500 text-sm tracking-wider">Field of Study</dt>
            <dd className="text-slate-900 tracking-wider text-sm font-semibold">CS, Engineering, IT</dd>
          </dl>
          <Divider className="mt-2" />
        </div>
        <div className="w-full">
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500 text-sm tracking-wider">Languages</dt>
            <dd className="text-slate-900 tracking-wider text-sm font-semibold">Tagalog, English, Japanese</dd>
          </dl>
          <Divider className="mt-2" />
        </div>
        <div className="w-full">
          <dl className="flex items-center justify-between">
            <dt className="text-gray-500 text-sm tracking-wider">Apply via</dt>
            <dd className="text-slate-900 tracking-wider text-sm font-semibold">Online, Embassy</dd>
          </dl>
        </div>
      </div>
    </Card>
  );
};

export default ScholarshipOverview;
