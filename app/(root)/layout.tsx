const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <main className="flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
