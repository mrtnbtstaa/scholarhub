import Button from "@/components/ui/Button/Button";
import Navigate from "@/components/ui/Navigate/Navigate";
import { Actions } from "@/types/shared/pagination";
import Card from "../Card/Card";

const PaginatedAction = ({
  actions,
  isVisible,
  id,
}: {
  actions?: Actions[];
  isVisible: boolean;
  id: string;
}) => {
  if (!actions || actions.length === 0) return null;

  return (
    <>
      {isVisible && (
        <Card className="flex flex-col items-start gap-4 absolute right-4">
          {actions &&
            actions.map((action) => {
              switch (action.type) {
                case "view":
                case "edit":
                  return (
                    <Navigate
                      key={action.type}
                      variants="custom"
                      href={`${action.href}/${id}`}
                      className="hover:bg-btn-primary duration-75 ease-in-out px-6 py-3 w-full rounded-t-lg transition-colors hover:text-white"
                    >
                      {action.type}
                    </Navigate>
                  );
                default:
                  return (
                    <Button
                      key={action.type}
                      variants="custom"
                      onClick={action.onClick}
                    >
                      {action.type}
                    </Button>
                  );
              }
            })}
        </Card>
      )}
    </>
  );
};

export default PaginatedAction;