import DocumentCard from "./DocumentCard";
import { LuCloud, LuFileText, LuGrid3X3, LuHistory } from "react-icons/lu";
import { FiAlertTriangle } from "react-icons/fi";

const DocumentCards = () => {
  return (
    <div className="mt-4 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
      <DocumentCard
        icon={LuFileText}
        title="TOTAL DOCS"
        subDescription="Files stored securely"
        count={21}
      />
      <DocumentCard
        icon={LuGrid3X3}
        title="USING DOCS"
        subDescription="Archive Applications"
        count={21}
        variants="using-docs"
      />
      <DocumentCard
        icon={FiAlertTriangle}
        title="EXPIRING"
        subDescription="Passport & IELTS"
        count={21}
        variants="expiring"
      />
      <DocumentCard
        icon={LuCloud}
        title="MISSING"
        subDescription="Mediical Certificate"
        count={21}
        variants="missing"
      />
      <DocumentCard
        icon={LuHistory}
        title="RECENT"
        subDescription="Last 7 Days"
        count={21}
        variants="recent"
      />
    </div>
  );
};

export default DocumentCards;
