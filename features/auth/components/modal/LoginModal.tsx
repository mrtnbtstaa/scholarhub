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
import { useLogin } from "../../hooks/use-auth";

const LoginModal: FC<ModalComponentProps> = ({ onClose }) => {
  const { openModal } = useModalActions();

  const { form, handleSubmit, isPending, error } = useLogin();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Log in</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your account.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="py-4">
            <Field>
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
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
              <Label htmlFor="login-password">Password</Label>
              <Input
                id="login-password"
                type="password"
                autoComplete="current-password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </Field>
          </FieldGroup>

          {error.root && (
            <p className="text-sm text-destructive pb-2">
              {error.root.message ?? "Login failed. Please try again."}
            </p>
          )}

          <DialogFooter>
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              }
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Log in"}
            </Button>
          </DialogFooter>
        </form>

        <p className="text-sm text-muted-foreground text-center">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="underline underline-offset-4 hover:text-foreground"
            onClick={() => openModal("register")}
          >
            Register
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
