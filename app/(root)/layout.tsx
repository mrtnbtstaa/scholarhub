const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default Layout;
