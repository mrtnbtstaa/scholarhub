"use client";

import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Navigate from "@/components/ui/Navigate/Navigate";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { MdEmail, MdLock } from "react-icons/md";
import AuthFooter from "../AuthFooter";

const LoginForm = () => {
  const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);

  return (
    <>
      <form className="mt-4 w-full">
        <FormField>
          <Label htmlFor="Email Address">Email Address</Label>
          <Input
            type="email"
            placeholder="name@university.edu"
            className="w-full"
            prefixIcon={MdEmail}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="Password">Password</Label>
          <Input
            type={toggleVisibility ? "text" : "password"}
            placeholder="••••••••"
            className="w-full"
            prefixIcon={MdLock}
            suffixIcon={toggleVisibility ? BsEyeFill : BsEyeSlashFill}
            SuffixOnClick={() => setToggleVisibility(!toggleVisibility)}
            required
          />
        </FormField>
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-4 justify-center">
            <Input type="checkbox" variants="secondary" className="size-4" />
            <span className="text-sm tracking-wide text-secondary">
              Remember me
            </span>
          </div>
          <Navigate
            href="/forgot-password"
            className="text-sm"
            variants="redirect"
          >
            Forgot Password?
          </Navigate>
        </div>
        <Button className="p-2 float-right w-full">Sign In</Button>
      </form>
      <AuthFooter
        title="Don't have an account?&nbsp;"
        navigateTitle="Create an account"
        href="/register"
      />
    </>
  );
};

export default LoginForm;
