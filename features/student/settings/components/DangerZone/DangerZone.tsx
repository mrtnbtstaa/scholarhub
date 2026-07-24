import Card from "@/components/shared/Card/Card";
import Header from "../Header/Header";
import Button from "@/components/ui/Button/Button";

const DangerZone = () => {
  return (
    <Card as="section" className="p-4 w-full" id="Danger Zone">
      <Header title="Danger Zone" className="text-red-500" isDanger={true} />
      <div className="flex md:flex-row flex-col gap-2 md:text-start text-center items-center justify-between">
        <div>
          <h4 className="md:text-lg text-md tracking-wider text-red-500 font-medium">
            Delete Account Permanently
          </h4>
          <p className="md:text-md text-sm tracking-wider text-gray-600 font-medium">
            Once deleted, all your data will be permanently removed. This action
            is irreversible.
          </p>
        </div>
        <Button
          variants="custom"
          className="md:p-4 p-3 bg-red-500 hover:bg-red-400 transition-colors duration-100 rounded-lg md:w-auto w-full text-white"
        >
          Delete Account
        </Button>
      </div>
    </Card>
  );
};

export default DangerZone;
