const ProviderItem = ({
  title,
  activeProgramCount,
  country
}: {
  title: string;
  activeProgramCount: number;
  country: string
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="p-4 w-12 h-12 rounded-full bg-[#dde8ff] aspect-square flex items-center justify-center">
        <span className="font-semibold text-primary text-md">{country}</span>
      </div>
      <div>
        <h4 className="text-primary font-semibold tracking-wider text-md">
          {title}
        </h4>
        <p className="text-gray-700 font-medium tracking-wider text-sm">
          {activeProgramCount} Active Programs
        </p>
      </div>
    </div>
  );
};

export default ProviderItem;
