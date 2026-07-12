import Image from "next/image";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="md:w-1/2 md:flex flex-col w-full h-screen md:h-disabled min-h-screen md:min-h-0 hidden">
        <div className="bg-[#1a375c] p-6 md:p-12 flex flex-col justify-center w-full">
          <div className="inline-flex gap-2 items-center mt-4">
            <FaGraduationCap className="text-white/50 text-4xl" />
            <h1 className="text-white font-semibold text-2xl">ScholarHub</h1>
          </div>
          <div>
            <p className="font-bold lg:text-4xl text-2xl text-white tracking-wide mt-4">
              Empowering your academic future.
            </p>
            <p className="font-medium text-sm lg:text-lg text-white/80 tracking-wide">
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
            priority
            className="object-cover aspect-square"
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full h-screen">{children}</div>
    </div>
  );
};
export default AuthLayout;
