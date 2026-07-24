import Card from "@/components/shared/Card/Card";
import Navigate from "@/components/ui/Navigate/Navigate";

const UpdatePassword = () => {
  return (
    <Card
      variants="custom"
      className="p-4 mt-4 flex md:flex-row flex-col gap-2 md:text-start text-center items-center justify-between w-full bg-[#eff5fe] border border-[#cfdcf0]"
    >
      <div>
        <h4 className="text-md tracking-wider text-secondary">
          Account Password
        </h4>
        <p className="text-sm text-gray-700 tracking-wider leading-none">
          Last changed 45 days ago
        </p>
      </div>
      <Navigate
        variants="custom"
        className="bg-[#fefffe] md:w-auto w-full border border-secondary p-4 rounded-lg text-secondary tracking-wider text-sm font-medium"
        href="/update-password"
      >
        Update Password
      </Navigate>
    </Card>
  );
};


export default UpdatePassword;