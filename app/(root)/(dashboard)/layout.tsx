import Sidebar from "@/components/layout/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Sidebar />
      <main className="flex flex-col min-h-screen ml-80">{children}</main>
    </div>
  );
};

export default Layout;
