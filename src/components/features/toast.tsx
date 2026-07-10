"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Box from "@/common/box";
import Button, { type ButtonProps } from "@/common/button";
import Typography from "@/common/typography";

const ToastCtx = createContext<(msg: string) => void>(() => {});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState("Done");
  const [show, setShow] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fire = useCallback((m: string) => {
    setMsg(m || "Done");
    setShow(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(false), 2600);
  }, []);

  // Without this an unmount mid-timeout leaves a pending setState.
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <ToastCtx.Provider value={fire}>
      {children}
      <Box
        className={show ? "toast show" : "toast"}
        role="status"
        aria-live="polite"
      >
        <Typography as="span" className="ck" aria-hidden="true">
          ✓
        </Typography>
        <Typography as="span">{msg}</Typography>
      </Box>
    </ToastCtx.Provider>
  );
}

export const useToast = () => useContext(ToastCtx);

export type ToastButtonProps = Omit<
  Extract<ButtonProps, { href?: undefined }>,
  "onClick"
> & {
  /** Message shown in the toast when pressed. */
  msg: string;
  onClick?: () => void;
};

/**
 * A real <button> that fires a toast. It used to render `role="button"` on a
 * <button> and spread `Record<string, unknown>`; both are gone.
 */
export function ToastButton({
  msg,
  onClick,
  children,
  ...rest
}: ToastButtonProps) {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast(msg);
        onClick?.();
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
