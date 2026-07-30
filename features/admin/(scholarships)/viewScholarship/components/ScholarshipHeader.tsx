"use client";

import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Badge from "@/components/ui/Badge/Badge";
import Navigate from "@/components/ui/Navigate/Navigate";
import { routes } from "@/lib/constants/routes";
import { useParams } from "next/navigation";

const ScholarshipHeader = () => {
  const { scholarshipId } = useParams<{ scholarshipId: string }>();
  return (
    <>
      <header>
        <div className="flex flex-wrap items-center justify-between">
          <PageHeader
            as="div"
            title="Mext Undergraduate Scholarship"
            description="Government of Japan (MEXT)"
          />
          <Navigate
            className="p-3 mb-4 md:block hidden"
            href={`${routes.admin.editScholarship}/${scholarshipId}`}
          >
            Edit Scholarship
          </Navigate>
        </div>
        <div className="flex items-center flex-wrap gap-4">
          <Badge className="bg-[#6df9bb] text-[#0a8f86]" title="Published" />
          <Badge className="bg-[#dde8ff]" title="Fully Funded" />
          <Badge className="bg-[#dde8ff]" title="Bachelor's" />
          <Badge className="bg-[#dde8ff]" title="API Imported" />
          <Badge
            className="bg-[#006c49] text-white"
            title="Verified Provider"
          />
        </div>
      </header>
    </>
  );
};

export default ScholarshipHeader;
