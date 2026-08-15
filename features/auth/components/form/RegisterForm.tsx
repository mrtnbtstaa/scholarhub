"use client";

import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import { useState } from "react";
import AuthFooter from "../AuthFooter";
import { useRegister } from "../../hooks/use-register";
import { ICONS } from "@/lib/constants/icons";

const RegisterForm = () => {
  const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);
  const [toggleConfirmVisibility, setToggleConfirmVisibility] = useState<boolean>(false);
  const { form, onSubmit, isPending, error } = useRegister();
  return (
    <>
      <form method="POST" className="mt-4 w-full" onSubmit={onSubmit}>
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
          <Input
            id="password"
            type={toggleVisibility ? "text" : "password"}
            placeholder="••••••••"
            className="w-full"
            prefixIcon={ICONS.MdLock}
            suffixIcon={
              toggleVisibility ? ICONS.BsEyeFill : ICONS.BsEyeSlashFill
            }
            SuffixOnClick={() => setToggleVisibility(!toggleVisibility)}
            // required
            {...form.register("password")}
          />
        </FormField>
        <FormField error={error.confirm_password}>
          <Label isRequired={true} htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type={toggleConfirmVisibility ? "text" : "password"}
            placeholder="••••••••"
            className="w-full"
            prefixIcon={ICONS.MdLock}
            suffixIcon={
              toggleConfirmVisibility ? ICONS.BsEyeFill : ICONS.BsEyeSlashFill
            }
            SuffixOnClick={() =>
              setToggleConfirmVisibility(!toggleConfirmVisibility)
            }
            // required
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
