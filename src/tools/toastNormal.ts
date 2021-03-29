import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
    autoClose: 1500,
    draggable: false,
    position: toast.POSITION.BOTTOM_CENTER
})

export const ToastNormal = (msg: string) => toast(msg);
export const ToastWarn = (msg: string) => toast.warn(msg);
export const ToastErr = (msg: string) => toast.error(msg);
export const ToastInfo = (msg: string) => toast.info(msg);
