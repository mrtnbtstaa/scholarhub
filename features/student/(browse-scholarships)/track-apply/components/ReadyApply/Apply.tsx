"use client";

import Card from "@/components/shared/Card/Card";
import Navigate from "@/components/ui/Navigate/Navigate";
import { LuExternalLink } from "react-icons/lu";

const Apply = () => {
  return (
    <Card variants="custom" className="bg-[#1a375c] p-6 w-full">
      <h3 className="text-lg font-semibold tracking-wider text-white leading-none mb-2">
        Ready to Apply?
      </h3>
      <p className="text-[#7e95b5] tracking-wider text-sm">
        You can access the official scholarship portal at any time. We&apos;ve
        bookmarked it for you.
      </p>
      <Navigate
        href={"/"}
        variants="custom"
        prefixIcon={LuExternalLink}
        className="bg-[#fefffe] text-secondary p-4 rounded-lg inline-block mt-4 font-semibold w-full text-center"
        prefixClassName="text-secondary"
      >
        Official Website
      </Navigate>
    </Card>
  );
};

export default Apply;
