// components/Toast.tsx

"use client";

import { Toaster, toast, ToastOptions } from "react-hot-toast";
import { ReactNode } from "react";

interface ToastProps {
  position?: ToastOptions["position"];
  duration?: number;
}

const Toast = ({ position = "top-center", duration = 3000 }: ToastProps) => (
  <Toaster position={position} toastOptions={{ duration }} />
);

// Utility functions to trigger specific types of toasts
const showToast = {
  success: (message: string, options?: ToastOptions) =>
    toast.success(message, { ...options }),

  error: (message: string, options?: ToastOptions) =>
    toast.error(message, { ...options }),

  loading: (message: string, options?: ToastOptions) =>
    toast.loading(message, { ...options }),

  custom: (message: ReactNode, options?: ToastOptions) =>
    toast(
      (t) => (
        <div className="flex items-center">
          {message}
          <button
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            Close
          </button>
        </div>
      ),
      options
    ),
};

export { Toast, showToast };
