import ActiveDeviceItem from "./ActiveDeviceItem";

const ActiveSession = () => {
  return (
    <>
      <h3 className="text-gray-600 text-md tracking-wider my-4">
        Active Sessions
      </h3>
      <div className="border border-[#c7c9d1] rounded-2xl">
        {Array.from({ length: 3 }).map((_, idx) => (
          <ActiveDeviceItem
            key={idx}
            deviceName="Windows 11 Desktop"
            location="New York, USA"
            timeSession="Current Session"
            isLastItem={idx === 2}
            isNotCurrentDeviceActive={idx === 2}
          />
        ))}
      </div>
    </>
  );
};

export default ActiveSession;
