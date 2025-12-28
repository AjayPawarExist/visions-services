/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: "consent" | "config" | "event" | "js" | "set" | string,
      targetId?: string | Date | Record<string, any> | any,
      config?: Record<string, any> | boolean | string | any
    ) => void;
  }
}
