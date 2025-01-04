export interface ToastConfig {
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
    duration: number;
}
export interface Toast {
    show: (type: string, message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    info: (message: string) => void;
    error: (message: string) => void;
    neutral: (message: string) => void;
}
