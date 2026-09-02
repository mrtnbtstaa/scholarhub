"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModalComponentProps } from "@/types/shared/modal.types";
import { useModalActions } from "@/store/useModalStore";
import { FC } from "react";
import { useRegister } from "../../hooks/use-auth";
import { RiGoogleFill } from "react-icons/ri";
import Image from "next/image";

const RegisterModal: FC<ModalComponentProps> = ({ onClose }) => {
  const { openModal } = useModalActions();

  const { form, handleSubmit, isPending, error } = useRegister();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="">
        <div className="flex-1">
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Create an account</DialogTitle>
            <DialogDescription>
              Sign up to start tracking scholarships and deadlines.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Button type="button" variant="outline" onClick={onClose}
              className="border border-input">
              <RiGoogleFill />
              Continue with Google
            </Button>
          </FieldGroup>

          <div className="flex items-center gap-2 my-4 text-muted-foreground">
            <hr className="flex-1" />
            <span>or</span>
            <hr className="flex-1" />
          </div>
          <FieldGroup className="">
            <div className="flex items-start gap-4">
              <Field>
                <Label htmlFor="register-first-name">First name</Label>
                <Input
                  id="register-first-name"
                  type="text"
                  autoComplete="given-name"
                  {...register("first_name")}
                />
                {errors.first_name && (
                  <p className="text-sm text-destructive">
                    {errors.first_name.message}
                  </p>
                )}
              </Field>
              <Field>
                <Label htmlFor="register-last-name">Last name</Label>
                <Input
                  id="register-last-name"
                  type="text"
                  autoComplete="family-name"
                  {...register("last_name")}
                />
                {errors.last_name && (
                  <p className="text-sm text-destructive">
                    {errors.last_name.message}
                  </p>
                )}
              </Field>
            </div>
            <Field>
              <Label htmlFor="register-email">Email</Label>
              <Input
                id="register-email"
                type="email"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </Field>
            <Field>
              <Label htmlFor="register-password">Password</Label>
              <Input
                id="register-password"
                type="password"
                autoComplete="new-password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </Field>
            <Field>
              <Label htmlFor="register-confirm-password">
                Confirm password
              </Label>
              <Input
                id="register-confirm-password"
                type="password"
                autoComplete="new-password"
                {...register("confirm_password")}
              />
              {errors.confirm_password && (
                <p className="text-sm text-destructive">
                  {errors.confirm_password.message}
                </p>
              )}
            </Field>
            <DialogFooter className="flex justify-center!">
              <DialogClose
                render={
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                }
              />
              <Button type="submit" disabled={isPending}>
                {isPending ? "Creating account..." : "Create account"}
              </Button>
            </DialogFooter>
          </FieldGroup>

          {error.root && (
            <p className="text-sm text-destructive pb-2">
              {error.root.message ?? "Registration failed. Please try again."}
            </p>
            )}
          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{" "}
            <button
              type="button"
              className="underline underline-offset-4 hover:text-foreground"
              onClick={() => openModal("login")}
            >
              Log in
            </button>
          </p>
        </form>

        
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
