import { toast } from 'react-toastify';

const shootToast = (message: string, toastType: 'success' | 'error' | 'warning') => {
  toast(message, {
    type: toastType,
    position: 'bottom-center',
    hideProgressBar: true,
    autoClose: 1900,
    draggable: false,
  });
};

export default shootToast;
