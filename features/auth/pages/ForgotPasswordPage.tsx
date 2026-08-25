import Card from "@/components/shared/Card/Card";
import Heading from "@/components/shared/Heading/Heading";
import { ICONS } from "@/lib/constants/icons";
import ForgotPasswordForm from "../components/form/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <div className="flex items-center justify-center mx-auto min-h-screen md:translate-x-1/2 p-4">
      <Card as="section" className="flex p-6 flex-col">
        <div className="flex items-center justify-center flex-col">
          <ICONS.RiRotateLockFill size={64} className="mb-4" />
          <Heading as="h3" className="text-lg">
            Forgot Password
          </Heading>
          <p className="tracking-wider text-sm text-gray-500 text-center">
            Enter your email and we{"'"}ll send you instruction to reset your
            password.
          </p>
        </div>
        <ForgotPasswordForm />
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
