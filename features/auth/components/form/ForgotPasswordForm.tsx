"use client";

import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import { useForgotPassword } from "../../hooks/use-auth";
import BackButton from "@/components/shared/BackButton/BackButton";

const ForgotPasswordForm = () => {
  const {form, handleSubmit, isPending, error} = useForgotPassword()
  return (
    <form method="POST" onSubmit={handleSubmit} className="mt-4">
      <FormField className="w-full" error={error.email}>
        <Label htmlFor="email">Email Address</Label>
        <Input 
            id="email"
            type="email"
            placeholder="alex.student@gmail.com"
            {...form.register("email")}
        />
      </FormField>
      <Button type="submit" isLoading={isPending} className="w-full p-3 mt-2">
        Send Reset Link
      </Button>
     <BackButton title="Back to log in" />
    </form>
  );
};

export default ForgotPasswordForm;
