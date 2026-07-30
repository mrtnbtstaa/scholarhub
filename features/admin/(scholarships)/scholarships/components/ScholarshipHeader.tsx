"use client";

import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Button from "@/components/ui/Button/Button";
import { useModalStore } from "@/store/useModalStore";
import { MdAdd } from "react-icons/md";

const ScholarshipHeader = () => {
  const { setModalVisibility } = useModalStore((state) => state.action);
  return (
    <div className="flex md:flex-row flex-col items-center justify-between">
      <PageHeader
        title="Scholarships Management"
        description="Manage every scholarship published on ScholarHub, including provider moderation, API ingestion monitoring, and compliance checks."
      />
      <Button
        onClick={() => setModalVisibility(true)}
        className="p-3 md:w-auto w-full text-center whitespace-nowrap"
        suffixIcon={MdAdd}
      >
        Create Scholarship
      </Button>
    </div>
  );
};

export default ScholarshipHeader;
