const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="mb-4">
      <h1 className="font-bold tracking-wider text-3xl leading-none text-secondary mb-2">
        {title}
      </h1>
      {description && (
        <p className="text-gray-500 tracking-wide text-md lg:w-[65%] w-full">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
