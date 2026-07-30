const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default Layout;
