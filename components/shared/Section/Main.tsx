const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-4 transition-all duration-200 overflow-x-hidden">{children}</main>
  );
};

export default Main;
