import Card from "@/components/shared/Card/Card";

interface ActivityProps{
  type: "submitted" | "saved" | "completed" | "detected";
  studentName: string;
  
}

const RecentActivity = () => {
  return (
    <Card className="p-4 md:mt-4 col-span-1">
      <h3>Recent Activity</h3>
    </Card>
  );
};

export default RecentActivity;
