export type SdkType = "solana" | "evm" | "aptos" | "sui";

interface LinkWithLabel {
  label: string;
  link: string;
}

interface Config {
  git: string;
  discord: string;
  icon: {
    light: string;
    dark?: string;
  };
  links: LinkWithLabel[];
  sdk: {
    js: LinkWithLabel;
    rust?: LinkWithLabel;
    move?: LinkWithLabel;
    solidity?: LinkWithLabel[];
  };
  examples: LinkWithLabel[];
}

export const CONFIG_MAP: Map<SdkType, Config> = new Map([
  [
    "solana",
    {
      git: "https://github.com/switchboard-xyz/solana-sdk",
      discord:
        "https://discord.com/channels/841525135311634443/984343400377647144",
      icon: {
        light: "/img/icons/solana/logo.svg",
        dark: "/img/icons/solana/logo.svg",
      },
      links: [],
      sdk: {
        js: {
          label: "@switchboard-xyz/solana.js",
          link: "/api/solana.js",
        },
        rust: {
          label: "Rust: switchboard-solana",
          link: "https://docs.rs/switchboard-solana/latest/switchboard_solana/",
        },
      },
      examples: [
        {
          label: "Switchboard Function Examples",
          link: "https://github.com/switchboard-xyz/solana-sdk/tree/main/examples/functions",
        },
        {
          label: "Data Feed Examples",
          link: "https://github.com/switchboard-xyz/solana-sdk/tree/main/examples/feeds",
        },
        {
          label: "Randomness Examples",
          link: "https://github.com/switchboard-xyz/solana-sdk/tree/main/examples/vrf",
        },
        {
          label: "VRF Flip",
          link: "https://github.com/switchboard-xyz/vrf-flip",
        },
      ],
    },
  ],
  [
    "evm",
    {
      git: "https://github.com/switchboard-xyz/evm-sdk",
      discord:
        "https://discord.com/channels/841525135311634443/1134016468703526972",
      icon: {
        light: "/img/icons/solidity/light.svg",
        dark: "/img/icons/solana/dark.svg",
      },
      links: [],
      sdk: {
        js: {
          label: "@switchboard-xyz/evm.js",
          link: "/api/evm.js",
        },
        rust: {
          label: "Rust: switchboard-evm",
          link: "https://docs.rs/switchboard-evm/latest/switchboard_evm/",
        },
        // solidity: [
        //   { label: "ISwitchboard.sol", link: "/evm/dev/switchboard-sol" },
        // ],
      },
      examples: [
        {
          label: "Coin Flip",
          link: "https://github.com/switchboard-xyz/evm-coin-flip",
        },
        {
          label: "Randomness Callback Function",
          link: "https://github.com/switchboard-xyz/evm-sdk/tree/main/examples/01_randomness_callback",
        },
        {
          label: "User Triggered Callback",
          link: "https://github.com/switchboard-xyz/evm-sdk/tree/main/examples/02_user_triggered_callback",
        },
      ],
    },
  ],
  [
    "aptos",
    {
      git: "https://github.com/switchboard-xyz/aptos-sdk",
      discord:
        "https://discord.com/channels/841525135311634443/1134016412734726216",
      icon: {
        light: "/img/icons/aptos/logo.svg",
        dark: "/img/icons/aptos/dark.svg",
      },
      links: [],
      sdk: {
        js: {
          label: "@switchboard-xyz/aptos.js",
          link: "/api/aptos.js",
        },
        move: {
          label: "Move: switchboard-aptos",
          link: "https://github.com/switchboard-xyz/aptos-sdk/tree/main/move/switchboard",
        },
      },
      examples: [
        {
          label: "Switchboard Feed Parser",
          link: "https://github.com/switchboard-xyz/aptos-sdk/blob/main/programs/feed-parser/sources/demo.move",
        },
      ],
    },
  ],
  [
    "sui",
    {
      git: "https://github.com/switchboard-xyz/sui-sdk",
      discord:
        "https://discord.com/channels/841525135311634443/1134016553759821894",
      icon: {
        light: "/img/icons/sui/logo.svg",
        dark: "/img/icons/sui/dark.svg",
      },
      links: [],
      sdk: {
        js: {
          label: "@switchboard-xyz/sui.js",
          link: "/api/sui.js",
        },
        move: {
          label: "Move: switchboard-sui",
          link: "https://github.com/switchboard-xyz/sui-sdk/tree/main/move/mainnet/switchboard_std",
        },
      },
      examples: [
        {
          label: "Switchboard Feed Parser",
          link: "https://github.com/switchboard-xyz/sui-sdk/blob/main/programs/mainnet/feed-parser/sources/demo.move",
        },
      ],
    },
  ],
]);
