import { useCallback, useMemo } from "react";
import Toast from "react-native-toast-message";

type ToastType = "success" | "info" | "error";

export const useNotification = () => {
  const showNotification = (type: ToastType = "info", message: string) => {
    Toast.show({ type, text1: message });
  };

  const success = useCallback(
    (message: string) => showNotification("success", message),
    []
  );
  const info = useCallback(
    (message: string) => showNotification("info", message),
    []
  );
  const error = useCallback(
    (message: string) => showNotification("error", message),
    []
  );
  const clear = useCallback(() => Toast.hide(), []);

  return useMemo(() => ({ success, info, error, clear }), []);
};
