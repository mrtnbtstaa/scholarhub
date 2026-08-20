"use client";

// import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Navigate from "@/components/ui/Navigate/Navigate";
import { ICONS } from "@/lib/constants/icons";
import AuthFooter from "../AuthFooter";
import { useLogin } from "../../hooks/use-auth";
import PasswordField from "@/components/shared/PasswordField/PasswordField";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const {form, handleSubmit, isPending, error} = useLogin();
  return (
    <>
      <form method="POST" onSubmit={handleSubmit} className="mt-4 w-full">
        <FormField error={error.email}>
          <Label htmlFor="emailAddress">Email Address</Label>
          <Input
            id="emailAddress"
            type="email"
            placeholder="name@university.edu"
            className="w-full"
            prefixIcon={ICONS.MdEmail}
            {...form.register("email")}
            // required
          />
        </FormField>
        <FormField error={error.password}>
          <Label htmlFor="password">Password</Label>
          <PasswordField
            id="password"
            placeholder="Enter your password"
            {...form.register("password")}
          />
        </FormField>
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-4 justify-center">
            <Input type="checkbox" variants="secondary" className="size-4" />
            <span className="text-sm tracking-wide">
              Remember me
            </span>
          </div>
          <Navigate
            href="/forgot-password"
            className="text-xs"
            variants="redirect"
          >
            Forgot Password?
          </Navigate>
        </div>
        <Button className="float-right w-full h-12">
          Sign In
        </Button>
      </form>
      <AuthFooter
        title="Don't have an account?"
        navigateTitle="Sign up"
        href={"/register"}
      />
    </>
  );
};

export default LoginForm;
