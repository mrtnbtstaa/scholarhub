import {
  MdDrafts,
  MdImportExport,
  MdPublish,
  MdReviews,
  MdSchedule,
} from "react-icons/md";
import CardAnalytics from "./CardAnalytics";
import { FcExpired } from "react-icons/fc";
import GridAnalyticCards from "@/components/shared/GridAnalyticCards/GridAnalyticCards";

const ScholarshipAnalytics = () => {
  return (
    <GridAnalyticCards>
      <CardAnalytics title="Published" count={"1,126"} icon={MdPublish} />
      <CardAnalytics title="Pending Review" count={"300"} icon={MdReviews} />
      <CardAnalytics title="Drafts" count={"1,126"} icon={MdDrafts} />
      <CardAnalytics title="Expired" count={"1,126"} icon={FcExpired} />
      <CardAnalytics
        title="Imported Today"
        count={"1,126"}
        icon={MdImportExport}
      />
      <CardAnalytics title="Scheduled" count={"1,126"} icon={MdSchedule} />
    </GridAnalyticCards>
  );
};

export default ScholarshipAnalytics;
