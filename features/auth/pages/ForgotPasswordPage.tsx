import Card from "@/components/shared/Card/Card";
import Heading from "@/components/shared/Heading/Heading";
import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import { ICONS } from "@/lib/constants/icons";

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

        <form method="POST" className="mt-4">
          <FormField className="w-full">
            <Label htmlFor="email">Email Address</Label>
            <Input placeholder="alex.student@gmail.com" />
          </FormField>
          <Button type="submit" className="w-full p-3">
            Send Reset Link
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
