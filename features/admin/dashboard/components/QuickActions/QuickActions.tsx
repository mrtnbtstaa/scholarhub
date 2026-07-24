import ActionButton from "./ActionButton";

const QuickActions = () => {
    return (
        <div className="flex flex-col items-start gap-2 mt-4">
            <h2 className="text-secondary text-lg tracking-wider">Quick Actions</h2>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 w-full">
                <ActionButton actionTitle="New scholarship" />
                <ActionButton actionTitle="Import API" />
                <ActionButton actionTitle="Upload CSV" />
                <ActionButton actionTitle="Manage Providers" />
                <ActionButton actionTitle="New Announcement" />
                <ActionButton actionTitle="Review Pending" />
            </div>
        </div>
    )
}

export default QuickActions;