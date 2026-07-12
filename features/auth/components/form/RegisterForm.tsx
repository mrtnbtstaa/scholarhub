"use client";

import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Navigate from "@/components/ui/Navigate/Navigate";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import AuthFooter from "../AuthFooter";

const RegisterForm = () => {

  const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);
  const [toggleConfirmVisibility, setToggleConfirmVisibility] = useState<boolean>(false);

  return (
    <>
      <form className="mt-4 w-full">
        <FormField>
          <Label htmlFor="Email Address">Full Name</Label>
          <Input
            type="text"
            placeholder="John Doe"
            className="w-full"
            prefixIcon={MdPerson}
            required
          />
        </FormField>
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
        <FormField>
          <Label htmlFor="Password">Confirm Password</Label>
          <Input
            type={toggleConfirmVisibility ? "text" : "password"}
            placeholder="••••••••"
            className="w-full"
            prefixIcon={MdLock}
            suffixIcon={toggleConfirmVisibility ? BsEyeFill : BsEyeSlashFill}
            SuffixOnClick={() => setToggleConfirmVisibility(!toggleConfirmVisibility)}
            required
          />
        </FormField>
       
        <Button className="p-2 float-right w-full">Create My Account</Button>
      </form>
      <AuthFooter title="Already have an account?&nbsp;" navigateTitle="Sign in Instead" href="/login" />
    </>
  );
};

export default RegisterForm;
