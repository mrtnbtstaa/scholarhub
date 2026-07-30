import Main from "@/components/shared/Section/Main";
import ProviderHeader from "./components/ProviderHeader/ProviderHeader";
import ProviderAnalytics from "./components/ProviderAnalytics/ProviderAnalytics";
import ProviderTable from "./components/ProviderTable/ProviderTable";
import DoughnutDistribution from "@/components/shared/DoughnutDistribution/DoughnutDistribution";
import CategoryDistributionItem from "@/components/shared/DoughnutDistribution/CategoryDistributionItem";
import PendingScholarships from "./components/PendingScholarships/PendingScholarships";
import Card from "@/components/shared/Card/Card";
import SummaryGrid from "./components/SummaryGrid/SummaryGrid";

const chartData = {
  labels: [],
  datasets: [
    {
      label: "Status Overview",
      data: [6, 3, 3],
      backgroundColor: ["#012145", "#01a73e", "#145dfd"],
      borderWidth: 0,
    },
  ],
};

const ProvidersPage = () => {
  return (
    <Main>
      <ProviderHeader />
      <ProviderAnalytics />
      <div className="grid grid-cols-4 grid-rows 1 gap-4">
        <div className="lg:col-span-3 md:col-span-2 col-span-4">
          <ProviderTable />
        </div>
        <div className="md:mt-4 lg:col-span-1 md:col-span-2 col-span-4">
          <DoughnutDistribution
            distributionCount={182}
            distributionTitle="TOTAL"
            data={chartData}
            headerTitle="Provider Distribution"
          >
            {Array.from({ length: 3 }).map((_, idx) => (
              <CategoryDistributionItem
                key={idx}
                color="bg-blue-600"
                title="Universities"
                percentage={35}
              />
            ))}
          </DoughnutDistribution>
          <PendingScholarships />
          <SummaryGrid />
        </div>
      </div>
    </Main>
  );
};

export default ProvidersPage;
