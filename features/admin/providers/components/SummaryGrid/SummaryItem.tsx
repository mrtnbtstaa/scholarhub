import Card from "@/components/shared/Card/Card";

interface SummaryProps {
    headerTitle: "LARGEST PROVIDER" | "FASTEST GROWING" | "MOST VIEWED" | "HIGH ENGAGEMENT";
    subHeader: string;
    summaryCount: number | string;
}

const SummaryItem = ({headerTitle, subHeader, summaryCount}: SummaryProps) => {
    return (
        <Card className="p-4 bg-[#eff5fe] rounded-md flex flex-col items-start gap-1 border border-[#ced1d8]">
        <p className="md:text-md text-sm tracking-wider text-gray-700">{headerTitle}</p>
        <h3 className="font-semibold lg:text-lg text-md tracking-wider">{subHeader}</h3>
        <p className="text-xs tracking-wider text-gray-600">
          <span>{summaryCount}</span>
          {headerTitle === "LARGEST PROVIDER" && "Programs"}
          {headerTitle === "FASTEST GROWING" && "Apps"}
          {headerTitle === "MOST VIEWED" && "Views"}
          {headerTitle === "HIGH ENGAGEMENT" && "Comp."}
        </p>
      </Card>
    )
}

export default SummaryItem;