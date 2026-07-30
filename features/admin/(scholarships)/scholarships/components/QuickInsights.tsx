import Card from "@/components/shared/Card/Card";

const QuickInsights = () => {
  return (
    <Card className="p-4 my-4 w-full">
      <h3 className="text-lg tracking-wider font-semibold">Quick Insights</h3>
      <dl className="flex flex-col gap-4 items-start mt-4">
        <div className="flex items-center justify-between w-full bg-[#eff5fe] rounded-lg p-2">
          <dt className="text-gray-700 text-md tracking-wider">Top Country</dt>
          <dd className="text-secondary text-md tracking-wider font-semibold">
            United Kingdom
          </dd>
        </div>
        <div className="flex items-center justify-between w-full bg-[#eff5fe] rounded-lg p-2">
          <dt className="text-gray-700 text-md tracking-wider">Next Expiring</dt>
          <dd className="text-secondary text-md tracking-wider font-semibold">
            Mext Undergrad
          </dd>
        </div>
        <div className="flex items-center justify-between w-full bg-[#eff5fe] rounded-lg p-2">
          <dt className="text-gray-700 text-md tracking-wider">Most Viewed</dt>
          <dd className="text-secondary text-md tracking-wider font-semibold">
            SINGA phD
          </dd>
        </div>
      </dl>
    </Card>
  );
};

export default QuickInsights;
