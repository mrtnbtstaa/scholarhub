import Card from "@/components/shared/Card/Card";

const StudentDetailsAnalytics = () => {
  return (
    <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
      <Card className="p-4">
        <h4 className="text-md tracking-widest text-gray-700">APPLICATIONS</h4>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-2xl tracking-wider">12</span>
          <span className="text-green-600 tracking-wider text-sm font-semibold">
            +2 New
          </span>
        </div>
      </Card>
      <Card className="p-4">
        <h4 className="text-md tracking-widest text-gray-700">SAVED</h4>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-2xl tracking-wider">12</span>
          <span className="tracking-wider text-sm font-semibold">Wishlist</span>
        </div>
      </Card>
      <Card className="p-4">
        <h4 className="text-md tracking-widest text-gray-700">PROFILE</h4>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-green-600 text-2xl tracking-wider">
            100%
          </span>
          <div className="bg-green-600 px-3 py-1 rounded-md">
            <span className="tracking-wider text-white text-sm font-semibold">
              Completed
            </span>
          </div>
        </div>
      </Card>
      <Card className="p-4">
        <h4 className="text-md tracking-widest text-gray-700">LAST ACTIVE</h4>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700 text-2xl tracking-wider">
            Today
          </span>
            <span className="tracking-wider text-gray-700 text-sm font-medium">
              2h ago
            </span>
        </div>
      </Card>
    </div>
  );
};

export default StudentDetailsAnalytics;
