"use client";

import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Label from "@/components/ui/Label/Label";
import BackButton from "@/components/shared/BackButton/BackButton";
import { useResetPassword } from "../../hooks/use-auth";
import PasswordField from "@/components/shared/PasswordField/PasswordField";

const ResetPasswordForm = () => {
  const { form, handleSubmit, isPending, error } = useResetPassword();
  return (
    <form method="POST" onSubmit={handleSubmit} className="mt-4">
      <FormField className="w-full" error={error.new_password}>
        <Label htmlFor="newPassword">New Password</Label>
        <PasswordField
          placeholder="Enter your new password"
          id="newPassword"
          {...form.register("new_password")}
        />
      </FormField>
      <FormField className="w-full" error={error.confirm_password}>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <PasswordField
          id="confirmPassword"
          placeholder="Cofirm your password"
          {...form.register("confirm_password")}
        />
      </FormField>
      <Button type="submit" isLoading={isPending} className="w-full p-3 mt-2">
        Reset Password
      </Button>
      <BackButton title="Back to log in" />
    </form>
  );
};

export default ResetPasswordForm;
