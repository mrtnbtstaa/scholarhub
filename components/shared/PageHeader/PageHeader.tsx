const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <header className="mb-4">
      <h1 className="font-bold tracking-wider lg:text-3xl md:text-2xl text-lg leading-none text-secondary mb-2">
        {title}
      </h1>
      {description && (
        <p className="text-gray-500 tracking-wide md:text-md text-sm lg:w-[65%] w-full">
          {description}
        </p>
      )}
    </header>
  );
};

export default PageHeader;
