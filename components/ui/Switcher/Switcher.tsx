"use client";

import { useState } from "react";
import Button from "../Button/Button";
import { cn } from "@/lib/cn";

const Switcher = ({ isActive = true }: { isActive?: boolean }) => {
  const [currentIsActive, setCurrentIsActive] = useState<boolean>(isActive);

  return (
    <Button variants="custom" onClick={() => setCurrentIsActive((isActive) => !isActive)}>
      <div className={
        cn(
          "md:w-16 md:h-8 w-14 h-6 rounded-full relative transition-colors duration-150 ease-in-out",
          currentIsActive ? "bg-secondary" : "bg-[#c5c7cf]"
        )
      }>
        <div className="relative">
          <span
            className={cn(
              "md:w-7 md:h-7 w-5 h-5 rounded-full absolute bg-white top-0.5 md:ml-0.5 ml-1 transition-colors duration-150 ease-in-out",
              !currentIsActive && "md:left-0.5 -left-0.5" 
            )}
          ></span>
        </div>
      </div>
    </Button>
  );
};

export default Switcher;
