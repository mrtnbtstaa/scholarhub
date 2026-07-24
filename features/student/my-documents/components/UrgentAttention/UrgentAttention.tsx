import Card from "@/components/shared/Card/Card";
import UrgentContent from "./UrgentContent";

const UrgentAttention = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-secondary text-2xl font-medium tracking-wider">
          Urgent Attention
        </h3>
        <div className="rounded-lg px-2 py-1 bg-[#fedbd6]">
          <span className="text-xs tracking-wider text-[#af010b] font-semibold">
            3 Alerts
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-start gap-4">
        <UrgentContent title="Passport Expiring" description="Expires on March 18, 2027. Some applications require 6 months validity." />
        <UrgentContent title="IELTS Near Expiry" description="Your language certificate expires in 45 days. Consider booking a retake." variants="near-expiry" />
        <UrgentContent title="Missing: Medical Cert" description="Required for MEXT Scholarship. Upload as soon as possible." variants="missing" />
      </div>
    </Card>
  );
};

export default UrgentAttention;
