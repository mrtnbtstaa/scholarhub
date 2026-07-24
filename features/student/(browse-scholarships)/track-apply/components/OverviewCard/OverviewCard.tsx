"use client";

import Card from "@/components/shared/Card/Card";
import OverviewContent from "@/components/shared/OverviewContent/OverviewContent";
import Navigate from "@/components/ui/Navigate/Navigate";

const OverviewCard = () => {
  return (
    <Card className="p-6 w-full">
      <h3 className="text-sm tracking-wide text-secondary mb-4 font-semibold">
        TRACKER SUMMARY
      </h3>
      <OverviewContent title="Scholarship" rightContent="MEXT Undergraduate" />
      <OverviewContent title="Priority" rightContent="High" />
      <OverviewContent title="Documents" rightContent="0 / 7" />
      <OverviewContent
        title="Goal Date"
        rightContent="Sept 20, 2026"
        withDivider={false}
      />
      <Navigate
        className="md:p-4 p-3 inline-block w-full text-center mt-4"
        href="/browse-scholarships/1/track-and-apply"
      >
        Save & Continue
      </Navigate>
      <Navigate
        className="md:p-3 p-2 inline-block w-full text-center mt-2 text-secondary"
        href="/browse-scholarships"
        variants="default"
      >
        Cancel
      </Navigate>
    </Card>
  );
};

export default OverviewCard;
