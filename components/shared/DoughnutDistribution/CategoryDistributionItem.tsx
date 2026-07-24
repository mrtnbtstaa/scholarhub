const CategoryDistributionItem = ({
  color,
  title,
  percentage,
}: {
  color: string;
  title: string;
  percentage: number;
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${color}`}></span>
        <h4 className="text-sm font-normal text-secondary tracking-wider">
          {title}
        </h4>
      </div>
      <span className="font-semibold text-sm tracking-wider text-secondary">
        {percentage}%
      </span>
    </div>
  );
};

export default CategoryDistributionItem;
