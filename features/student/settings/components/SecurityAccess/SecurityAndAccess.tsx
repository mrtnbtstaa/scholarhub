import Card from "@/components/shared/Card/Card";
import Header from "../Header/Header";
import UpdatePassword from "./UpdatePassword";
import TwoFactorAuthentication from "./TwoFactorAuthentication";
import ActiveSession from "./ActiveSessions/ActiveSession";

const SecurityAndAccess = () => {
  return (
    <Card as="section" className="w-full p-4" id="Security & Access">
      <Header title="Security & Access" />
      <UpdatePassword />
      <TwoFactorAuthentication isEnabled={true} />
      <ActiveSession />
    </Card>
  );
};

export default SecurityAndAccess;
