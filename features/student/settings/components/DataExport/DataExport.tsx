import Card from "@/components/shared/Card/Card";
import Header from "../Header/Header";
import PrepareExport from "./DataExportItem";

const DataExport = () => {
  return (
    <Card as="section" className="p-4 w-full" id="Data & Export">
      <Header title="Data & Export" />
      <PrepareExport />
    </Card>
  );
};

export default DataExport;
