import React from "react";

interface CardHeaderProps {
  headerTitle: string;
  children: React.ReactNode;
}

const CardHeader = ({
  headerTitle,
  children,
}: CardHeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-[#c5c7cf]">
      <h2 className="text-primary tracking-wider md:text-lg text-md font-semibold">
        {headerTitle}
      </h2>
      {children}
    </header>
  );
};

export default CardHeader;
