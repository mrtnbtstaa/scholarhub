import { ElementType } from "react";

type UploadProps = {
    icon: ElementType;
    title: string;
    body: string;
}

const DocumentUpload = ({icon: Icon, title, body}: UploadProps) => {
    return (
        <div className="w-full h-32 rounded-md border border-dashed border-gray-300 p-2 mt-4 justify-center items-center flex flex-col transition-colors duration-150 hover:border-gray-500">
            <Icon className="text-4xl text-gray-300" />
            <h2 className="text-md tracking-wide text-primary font-semibold">{title}</h2>
            <h3 className="text-gray-400 tracking-wide text-sm font-medium">{body}</h3>
        </div>
    )
}


export default DocumentUpload;