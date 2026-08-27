import Card from "@/components/shared/Card/Card";
import ProviderItem from "./ProviderItem";

const ActiveProviders = () => {
  return (
    <Card className="p-6 mt-4">
      <h3 className="text-primary tracking-wider text-md mb-4">
        Most Active Providers
      </h3>
      <div className="flex flex-col items-start gap-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <ProviderItem
            key={idx}
            title="Gov. of Japan (MEXT)"
            activeProgramCount={42}
            country="JP"
          />
        ))}
      </div>
    </Card>
  );
};

export default ActiveProviders;
