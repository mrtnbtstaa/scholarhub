"use client";

import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/helpers/cn";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const _routes = [
  routes.public.forgotPassword,
  routes.public.resetPassword
]

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <div className={
      cn(
        "flex flex-col md:flex-row items-center justify-between",
        // min-h-screen
      )
    }>
      {!_routes.includes(path) && <div className="md:w-1/2 md:flex flex-col w-full h-screen md:h-disabled min-h-screen md:min-h-0 hidden">
        <div className="bg-btn-primary p-6 md:p-12 flex flex-col justify-center w-full">
          <div className="inline-flex gap-2 items-center mt-4">
            <FaGraduationCap className="text-foreground/50 text-4xl" />
            <h1 className="font-semibold text-2xl">ScholarHub</h1>
          </div>
          <div>
            <p className="font-bold lg:text-4xl text-2xl tracking-wide mt-4">
              Empowering your academic future.
            </p>
            <p className="font-medium text-sm lg:text-lg text-foreground/80 tracking-wide">
              Join thousands of students securing their education through
              data-driven scholarship matching.
            </p>
          </div>
        </div>
        <div className="h-1/1 w-full relative">
          <Image
            alt="hero background"
            src={"/assets/hero.png"}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover aspect-square"
          />
        </div>
      </div>}
      <div className="md:w-1/2 w-full h-screen">{children}</div>
    </div>
  );
};
export default AuthLayout;
