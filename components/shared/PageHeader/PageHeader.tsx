import { ElementType } from "react";
import Heading from "../Heading/Heading";

const PageHeader = ({
  title,
  description,
  as: Component = "header"
}: {
  title: string;
  description?: string;
  as?: ElementType
}) => {
  return (
    <Component className="mb-2">
      <Heading className="font-semibold tracking-wider lg:text-xl text-2xl leading-none mb-2">
        {title}
      </Heading>
      {description && (
        <p className="text-gray-500 tracking-wide md:text-md text-sm lg:w-[65%] w-full">
          {description}
        </p>
      )}
    </Component>
  );
};

export default PageHeader;
