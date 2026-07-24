import Card from "@/components/shared/Card/Card";
import InsightItem from "./InsightItem";

const QuickInsights = () => {
    return (
        <Card className="p-4 mt-4 w-full">
            <h3 className="text-lg tracking-wider font-semibold">Quick Insights</h3>
            <dl className="flex flex-col gap-4 items-start mt-4">
              <InsightItem title="Top Country" value="United Kingdom" />
              <InsightItem title="Next Expiring" value="Mext Undergrad" />
              <InsightItem title="Most Viewed" value="SINGA phD" />
            </dl>
        </Card>
    )
}

export default QuickInsights;