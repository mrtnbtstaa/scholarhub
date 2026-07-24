"use client";

import Card from "@/components/shared/Card/Card";
import OverviewContent from "../../../../../../components/shared/OverviewContent/OverviewContent";
import Navigate from "@/components/ui/Navigate/Navigate";
import { MdBookmark, MdRocketLaunch } from "react-icons/md";

const OverviewCard = () => {
  return (
    <Card className="p-6 w-full">
      <OverviewContent title="Funding" rightContent="100% (Full)" />
      <OverviewContent title="Country" rightContent="Japan" />
      <OverviewContent title="Deadline" rightContent="Sept 30, 2026" />
      <OverviewContent
        title="Degree"
        rightContent="Bachelor's"
        withDivider={false}
      />
      <Navigate
        className="md:p-4 p-3 inline-block w-full text-center"
        href="/browse-scholarships/1/track-and-apply"
        prefixIcon={MdRocketLaunch}
      >
        Track & Apply
      </Navigate>
      <Navigate
        className="md:p-3 p-2 inline-block w-full text-center mt-2 text-secondary"
        href="/browse-scholarships"
        suffixIcon={MdBookmark}
        variants="outlined"
      >
        Save Scholarship
      </Navigate>
      <p className="text-gray-500 tracking-wider text-sm font-normal mt-6 text-center">
        Scholarship application is handled by the local Japanese Embassy. We
        help you track documents and deadlines.
      </p>
    </Card>
  );
};

export default OverviewCard;
