import { ToastConfig, Toast } from './types';

const defaultToastConfig: ToastConfig = {
  position: 'top-right',
  duration: 5000,
};

let duration = defaultToastConfig.duration;

export const initializeToast = (config: Partial<ToastConfig> = {}): void => {
  duration = config.duration || defaultToastConfig.duration;
  defaultToastConfig.position = config.position || defaultToastConfig.position;
  const toastContainer = document.getElementById('toast-popup');
  if (toastContainer) {
    toastContainer.style.position = 'absolute';

    switch (defaultToastConfig.position) {
      case 'top-right':
        toastContainer.style.top = '2%';
        toastContainer.style.right = '2%';
        break;
      case 'top-left':
        toastContainer.style.top = '2%';
        toastContainer.style.left = '2%';
        break;
      case 'bottom-right':
        toastContainer.style.bottom = '2%';
        toastContainer.style.right = '2%';
        break;
      case 'bottom-left':
        toastContainer.style.bottom = '2%';
        toastContainer.style.left = '2%';
        break;
      case 'center':
        toastContainer.style.top = '50%';
        toastContainer.style.left = '50%';
        toastContainer.style.transform = 'translate(-50%, -50%)';
        break;
      default:
        toastContainer.style.top = '2%';
        toastContainer.style.right = '2%';
        break;
    }
  }
};

export const createHtml = (className: string, id: number, message: string): string => {
  return `
    <div class="toastBody ${className}" id="toast-${id}">
      <div>${message}</div>
      <div onclick="handleCloseToaster('toast-${id}')">
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 24L24 8M8 8L24 24" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  `;
};

export const handleShowToast = (id: string): void => {
  const toastElement = document.getElementById(id);
  if (toastElement) {
    toastElement.classList.add('show');

    let timer = setTimeout(() => {
      toastElement.classList.remove('show');
      handleCloseToaster(id);
    }, duration);

    toastElement.addEventListener('mouseenter', () => {
      clearTimeout(timer);
    });

    toastElement.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        toastElement.classList.remove('show');
        handleCloseToaster(id);
      }, 3000);
    });
  }
};

export const handleCloseToaster = (id: string): void => {
  const toastElement = document.getElementById(id);
  if (toastElement) {
    toastElement.classList.remove('show');
    setTimeout(() => {
      toastElement.remove();
    }, 1000);
  }
};

const toast: Toast = {
  show: (type, message) => {
    const toastDiv = document.getElementById('toast-popup');
    if (toastDiv) {
      const count = toastDiv.childElementCount + 1;
      const element = createHtml(type, count, message);
      toastDiv.insertAdjacentHTML('beforeend', element);

      setTimeout(() => {
        handleShowToast(`toast-${count}`);
      }, 10);
    }
  },
  success: (message) => toast.show('success', message),
  warning: (message) => toast.show('warning', message),
  info: (message) => toast.show('info', message),
  error: (message) => toast.show('error', message),
  neutral: (message) => toast.show('neutral', message),
};

export default toast ;