const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="font-bold tracking-wider text-3xl leading-none text-secondary">
      {title}
    </h1>
  );
};

export default PageTitle;
