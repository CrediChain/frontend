import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { base, baseSepolia, sepolia, optimismSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export function getConfig() {
  return createConfig({
    chains: [baseSepolia, base, sepolia, optimismSepolia],
    connectors: [
      coinbaseWallet({
        appName: "OnchainKit",
        preference: "all",
      }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [base.id]: http(),
      [baseSepolia.id]: http(),
      [sepolia.id]: http(),
      [optimismSepolia.id]: http(),
    },
  });
}

declare module "wagmi" {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}
