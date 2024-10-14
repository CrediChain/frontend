"use client";

import { useEffect, useState } from "react";
import { cookieToInitialState } from "wagmi";
import { Providers } from "../../../providers";
import { config } from "../../../config";

export function DynamicProviders({ children }: { children: React.ReactNode }) {
  const [initialState, setInitialState] = useState<any>(undefined);

  useEffect(() => {
    const cookie = document.cookie;

    const state = cookieToInitialState(config, cookie);
    setInitialState(state);

    // Remove the cz-shortcut-listen attribute
    const body = document.body;
    if (body && body.getAttribute("cz-shortcut-listen")) {
      body.removeAttribute("cz-shortcut-listen");
    }
  }, []);

  // Render children even if initialState is null
  return <Providers initialState={initialState}>{children}</Providers>;
}
