import Checkbox from "@/components/shared/Checkbox/Checkbox";

const ScholarshipCountrySelect = () => {
  return (
    <div className="mt-4 flex flex-col items-start justify-start gap-2">
      <h2 className="text-xs font-semibold tracking-wider text-gray-700">
        COUNTRY
      </h2>
      <div className="inline-flex items-center gap-4 leading-none">
        <Checkbox className="rounded-full" />
        <h3 className="text-sm text-secondary tracking-wide leading-none">
          Japan
        </h3>
      </div>
      <div className="inline-flex items-center gap-4 leading-none">
        <Checkbox className="rounded-full" />
        <h3 className="text-sm text-secondary tracking-wide leading-none whitespace-nowrap">
          South Korea
        </h3>
      </div>
      <div className="inline-flex items-center gap-4 leading-none">
        <Checkbox className="rounded-full" />
        <h3 className="text-sm text-secondary tracking-wide leading-none">
          USA
        </h3>
      </div>
      <div className="inline-flex items-center gap-4 leading-none">
        <Checkbox className="rounded-full" />
        <h3 className="text-sm text-secondary tracking-wide leading-none">
          Germany
        </h3>
      </div>
    </div>
  );
};

export default ScholarshipCountrySelect;
