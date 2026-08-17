"use client";

import Button from "@/components/ui/Button/Button";
import { ICONS } from "@/lib/constants/icons";
import { cn } from "@/lib/helpers/cn";
import { useRouter } from "next/navigation";

const BackButton = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <Button
    type="button"
      variants="custom"
      className={cn(
        "text-sm tracking-wider text-gray-500 mt-4 flex items-center justify-center mx-auto",
        className,
      )}
      prefixIcon={ICONS.MdArrowBack}
      onClick={() => router.back()}
    >
      {title}
    </Button>
  );
};

export default BackButton;
