import { toast, Bounce, ToastOptions } from 'react-toastify';

type ToastProps = {
    message: string;
    type: "success" | "warning" | "error"
}

const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}

const showToast = ({message, type = "success"} : ToastProps) => {
    switch(type){
        case "success": toast.success(message, toastOptions); break;
        case "warning": toast.warning(message, toastOptions); break;
        case "error": toast.error(message, toastOptions); break;
    }
}

export default showToast;