const InsightItem = ({title, value}: {title: string, value: string}) => {
  return (
    <div className="flex items-center justify-between w-full bg-[#eff5fe] rounded-lg p-2">
      <dt className="text-gray-700 text-lg tracking-wider">{title}</dt>
      <dd className="text-secondary text-lg tracking-wider font-semibold">
        {value}
      </dd>
    </div>
  );
};

export default InsightItem;
