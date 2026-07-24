const ScholarshipTime = ({
  time,
  timeInName,
}: {
  time: number;
  timeInName: string;
}) => {
  return (
    <div className="text-center">
      <div className="bg-[#334c6b] rounded-lg p-4 mb-2">
        <span className="text-white font-semibold text-2xl tracking-wide">
          {time < 10 ? `0${time}` : time}
        </span>
      </div>
      <span className="text-gray-400 font-md text-sm font-bold tracking-wide">
        {timeInName}
      </span>
    </div>
  );
};

export default ScholarshipTime;
