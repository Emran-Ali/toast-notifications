import { ToastConfig, Toast } from './types';
export declare const initializeToast: (config?: Partial<ToastConfig>) => void;
export declare const createHtml: (className: string, id: number, message: string) => string;
export declare const handleShowToast: (id: string) => void;
export declare const handleCloseToaster: (id: string) => void;
declare const toast: Toast;
export default toast;
