import Card from "@/components/shared/Card/Card";
import Switcher from "@/components/ui/Switcher/Switcher";

const NotificationCard = ({title, description, isActive = true}: {title: string, description: string, isActive?: boolean}) => {
    return (
        <Card className="p-4 w-full">
          <div className="flex items-center justify-between">
            <h4 className="text-primary md:text-lg text-md tracking-wider">{title}</h4>
            <Switcher isActive={isActive} />
          </div>
          <p className="text-sm tracking-wider leading-none text-gray-700">{description}</p>
        </Card>
    )
}

export default NotificationCard;