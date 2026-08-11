import { MessageNotification } from "../types/notificationsData";

const MessageContent = ({
  messages,
}: {
  messages: MessageNotification;
}) => {
  const { sender, isNew, subject, previewOrMeta } = messages;
  return (
    <div className="w-full p-4 cursor-pointer transition-colors duration-100 ease-linear hover:bg-[#f7f9ff]">
      <div className="mx-4">
        {/* Sender & Badge */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900 text-sm">{sender}</span>
          {isNew && (
            <span className="px-1.5 py-0.5 text-xs font-medium text-slate-600 bg-slate-200 rounded">
              New
            </span>
          )}
        </div>

        {/* Message Subject */}
        <h4 className="text-sm font-bold text-slate-900">{subject}</h4>

        {/* Preview Snippet / Metadata */}
        <p className="text-sm text-gray-500 truncate">{previewOrMeta}</p>
      </div>
    </div>
  );
};

export default MessageContent;
