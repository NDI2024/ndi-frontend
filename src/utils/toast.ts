import toast from "react-hot-toast";

const globalToastOptions = {
    duration: 3500,
}

export const toastError = (message: string) => {
    const localOptions = {}
    toast.error(message, {
        ...globalToastOptions,
        ...localOptions
    });
}

export const toastSuccess = (message: string) => {
    const localOptions = {}
    toast.success(message, {
        ...globalToastOptions,
        ...localOptions
    });
}

export const toastLoading = (message: string) => {
    const localOptions = {}
    return toast.loading(message, {
        ...globalToastOptions,
        ...localOptions
    });
}