"use client";

import { useEffect, useState } from "react";

import { GooeyLoader } from "@/components/ui/loader-10";

const STORAGE_KEY = "jr-portfolio-loader-seen";
const LOADER_DURATION_MS = 3000;

export function InitialLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === "true") {
      const timeout = window.setTimeout(() => setIsLoading(false), 0);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, "true");
      setIsLoading(false);
    }, LOADER_DURATION_MS);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      {children}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-foreground">
          <div className="flex flex-col items-center gap-6">
            <GooeyLoader
              primaryColor="#c42e2e"
              secondaryColor="#e8e4db"
              borderColor="#9b968c"
            />
            <p className="font-display text-xs uppercase tracking-[0.28em] text-secondary">
              Loading Portfolio
            </p>
          </div>
        </div>
      )}
    </>
  );
}
