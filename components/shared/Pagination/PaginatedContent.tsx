interface PaginatedProps<T> {
  data: T[];
  type?: "grid" | "table";
  children: (row: T, index: number) => React.ReactNode;
  withPagination?: boolean; // boolean flag for showing the pagination
}

const PaginatedContent = <T,>({
  data,
  type = "grid",
  children,
  withPagination = true,
}: PaginatedProps<T>) => {
  return (
    <>
      {type === "grid" ? (
        <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-3">
          {data &&
            data.map((item, index) => (
              <div key={index}>{children(item, index)}</div>
            ))}
        </div>
      ) : (
        <h1></h1>
      )}
    </>
  );
};

export default PaginatedContent;
