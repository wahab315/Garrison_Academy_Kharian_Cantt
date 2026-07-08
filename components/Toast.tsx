"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

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

  return (
    <ToastCtx.Provider value={fire}>
      {children}
      <div className={`toast ${show ? "show" : ""}`} role="status" aria-live="polite">
        <span className="ck">✓</span>
        <span>{msg}</span>
      </div>
    </ToastCtx.Provider>
  );
}

export const useToast = () => useContext(ToastCtx);

export function ToastButton({
  msg,
  className,
  children,
  as = "button",
  ...rest
}: {
  msg: string;
  className?: string;
  children: ReactNode;
  as?: ElementType;
} & Record<string, unknown>) {
  const toast = useToast();
  const Cmp = as;
  return (
    <Cmp className={className} onClick={() => toast(msg)} role="button" tabIndex={0} {...rest}>
      {children}
    </Cmp>
  );
}
