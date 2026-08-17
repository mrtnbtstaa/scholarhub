"use client";

import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import AuthFooter from "../AuthFooter";
import { ICONS } from "@/lib/constants/icons";
import { useRegister } from "../../hooks/use-auth";
import PasswordField from "@/components/shared/PasswordField/PasswordField";

const RegisterForm = () => {
  const { form, handleSubmit, isPending, error } = useRegister();
  return (
    <>
      <form method="POST" className="mt-4 w-full" onSubmit={handleSubmit}>
        <div className="flex items-center gap-4 w-full">
          <FormField className="flex-1" error={error.first_name}>
            <Label isRequired={true} htmlFor="firstName">Firstname</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="John"
              className="w-full"
              prefixIcon={ICONS.MdPerson}
              // required
              {...form.register("first_name")}
            />
          </FormField>
          <FormField className="flex-1" error={error.last_name}>
            <Label isRequired={true} htmlFor="lastName">Lastname</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Doe"
              className="w-full"
              prefixIcon={ICONS.MdPerson}
              // required
              {...form.register("last_name")}
            />
          </FormField>
        </div>
        <FormField error={error.email}>
          <Label isRequired={true} htmlFor="emailAddress">Email Address</Label>
          <Input
            id="emailAddress"
            type="email"
            placeholder="name@university.edu"
            className="w-full"
            prefixIcon={ICONS.MdEmail}
            // required
            {...form.register("email")}
          />
        </FormField>
        <FormField error={error.password}>
          <Label isRequired={true} htmlFor="password">Password</Label>
          <PasswordField
            id="password"
            placeholder="Enter your password"
            {...form.register("password")}
          />
        </FormField>
        <FormField error={error.confirm_password}>
          <Label isRequired={true} htmlFor="confirmPassword">Confirm Password</Label>
          <PasswordField
            id="confirmPassword"
            placeholder="Confirm your password"
            {...form.register("confirm_password")}
          />
        </FormField>
        <Button
          type="submit"
          disabled={isPending}
          className="p-3 mt-2 float-right w-full"
        >
          {isPending ? "Signing up..." : "Sign up"}
        </Button>
      </form>
      <AuthFooter
        title="Already have an account?"
        navigateTitle="Sign in"
        href="/login"
      />
    </>
  );
};

export default RegisterForm;
