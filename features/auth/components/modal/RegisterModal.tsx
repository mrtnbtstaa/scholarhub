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
import {
  InkArrow,
  InkNote,
  InkUnderline,
} from "@/components/LandingPage/HandDrawn";
import { CustomInput } from "@/components/shared/CustomInput";

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
              <DialogTitle>
                <span className="relative w-fit">
                  Create an account
                  <InkArrow
                    delay={2.45}
                    className="stroke-4 size-20 -top-11 -right-15 absolute"
                  />
                </span>
              </DialogTitle>

              <DialogDescription>
                Sign up to start tracking scholarships and deadlines.
              </DialogDescription>
            </DialogHeader>

            <FieldGroup>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border border-input"
              >
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
              <div className="flex items-start divide-x divide-[var(--border)]  border-border border rounded-md">
                <Field className="relative max-w-full">
                  <CustomInput
                    id="register-first-name"
                    type="text"
                    placeholder="First name"
                    autoComplete="given-name"
                    {...register("first_name")}
                    className="border-none rounded-r-none focus:border-none"
                  />

                  {errors.first_name && (
                    <p className="text-sm text-destructive">
                      {errors.first_name.message}
                    </p>
                  )}
                </Field>
                <Field>
                  <CustomInput
                    id="register-last-name"
                    type="text"
                    placeholder="Last name"
                    autoComplete="family-name"
                    {...register("last_name")}
                    className="border-none rounded-l-none focus:border-none"
                  />
                  {errors.last_name && (
                    <p className="text-sm text-destructive">
                      {errors.last_name.message}
                    </p>
                  )}
                </Field>
              </div>
              <Field>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  {...register("email")}
                  className="shadow-none"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </Field>
              <Field>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  {...register("password")}
                  className="shadow-none"
                />
                {errors.password && (
                  <p className="text-sm text-destructive">
                    {errors.password.message}
                  </p>
                )}
              </Field>
              <Field>
                <Input
                  id="register-confirm-password"
                  type="password"
                  placeholder="Confirm password"
                  autoComplete="new-password"
                  {...register("confirm_password")}
                  className="shadow-none"
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
