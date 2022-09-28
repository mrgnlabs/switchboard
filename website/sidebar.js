module.exports = {
  gettingStarted: [
    "about/introduction",
    "about/network",
    "about/faq",
    "about/security",
  ],

  // Switchboard Feeds
  dataFeeds: [
    {
      type: "doc",
      label: "What are Data Feeds?",
      className: "sidebar__switchboard",
      id: "feeds/about",
    },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Tasks</h3>',
    },
    "feeds/tasks/task-runner",
    "feeds/tasks/tasks",
    {
      type: "category",
      label: "Examples",
      // collapsible: false,
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "feeds/examples" }],
    },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Best Practices</h3>',
    },
    { type: "autogenerated", dirName: "feeds/best-practices" },
    { type: "html", value: '<hr class="sidebar-separator">' },
    // {
    //   type: "html",
    //   value:
    //     '<h3 class="sidebar__custom_label sidebar__category_label">Examples</h3>',
    // },
    // { type: "autogenerated", dirName: "feeds/examples" },
    // { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Publisher</h3>',
    },
    { type: "autogenerated", dirName: "feeds/publisher" },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value: '<h3 class="sidebar__custom_label">Integrate</h3>',
    },
    {
      type: "link",
      label: "Aptos",
      className: "sidebar__aptos",
      href: "/aptos/feeds",
    },
    {
      type: "link",
      label: "Near",
      className: "sidebar__near",
      href: "/near/feeds",
    },
    {
      type: "link",
      label: "Solana",
      className: "sidebar__solana",
      href: "/solana/feeds",
    },
  ],

  randomness: [
    "randomness/about",
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value: '<h3 class="sidebar__custom_label">Integrate</h3>',
    },
    {
      type: "link",
      label: "Solana",
      className: "sidebar__solana",
      href: "/solana/randomness",
    },
  ],

  // aptos
  aptos: [
    {
      type: "doc",
      label: "Aptos",
      className: "sidebar__aptos",
      id: "aptos/overview",
    },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Program</h3>',
    },
    { type: "autogenerated", dirName: "aptos/program" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Data Feeds</h3>',
    },
    { type: "autogenerated", dirName: "aptos/feeds" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Developers</h3>',
    },
    { type: "autogenerated", dirName: "aptos/dev" },
  ],

  // near
  near: [
    {
      type: "doc",
      label: "Near",
      className: "sidebar__near",
      id: "near/overview",
    },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Program</h3>',
    },
    { type: "autogenerated", dirName: "near/program" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Data Feeds</h3>',
    },
    { type: "autogenerated", dirName: "near/feeds" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">IDL</h2>',
    },
    { type: "autogenerated", dirName: "near/idl" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Developers</h3>',
    },
    { type: "autogenerated", dirName: "near/dev" },
  ],

  solana: [
    {
      type: "doc",
      label: "Solana",
      className: "sidebar__solana",
      id: "solana/overview",
    },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Program</h3>',
    },
    { type: "autogenerated", dirName: "solana/program" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Data Feeds</h3>',
    },
    { type: "autogenerated", dirName: "solana/feeds" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Randomness</h3>',
    },
    { type: "autogenerated", dirName: "solana/randomness" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Buffer Relayers</h3>',
    },
    { type: "autogenerated", dirName: "solana/buffer-relayers" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">IDL</h2>',
    },
    { type: "autogenerated", dirName: "solana/idl" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Developers</h2>',
    },
    { type: "autogenerated", dirName: "solana/dev" },
    // {
    //   type: "link",
    //   label: "@switchboard-xyz/solana.js",
    //   className: "sidebar__typescript",
    //   href: "https://switchboard-xyz.github.io/sbv2-core/api/@switchboard-xyz/solana.js",
    // },
    // {
    //   type: "link",
    //   label: "@switchboard-xyz/sbv2-lite",
    //   className: "sidebar__typescript",
    //   href: "https://switchboard-xyz.github.io/sbv2-core/api/@switchboard-xyz/sbv2-lite",
    // },
    // {
    //   type: "link",
    //   label: "switchboardpy",
    //   className: "sidebar__python",
    //   href: "https://switchboard-xyz.github.io/sbv2-core/api/switchboardpy",
    // },
    // {
    //   type: "link",
    //   label: "switchboard-v2",
    //   className: "sidebar__rust",
    //   href: "https://docs.rs/switchboard-v2/latest/switchboard_v2/",
    // },
  ],

  operator: [
    {
      type: "doc",
      label: "Switchboard Operator",
      className: "sidebar__switchboard",
      id: "operator/about",
    },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Oracle</h3>',
    },
    { type: "autogenerated", dirName: "oracles" },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Crank</h3>',
    },
    { type: "autogenerated", dirName: "crank" },
  ],

  dev: [
    {
      type: "doc",
      id: "dev/overview",
      label: "🛠️ Developer Resources",
      className: "sidebar__custom_doc_label",
    },
    // {
    //   type: "link",
    //   label: "@switchboard-xyz/common",
    //   className: "sidebar__typescript",
    //   href: "https://switchboard-xyz.github.io/sbv2-core/api/@switchboard-xyz/common",
    // },
    {
      type: "category",
      label: "@switchboard-xyz/cli",
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "dev/cli" }],
    },
    "dev/common",
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "link",
      href: "/aptos/dev",
      label: "Aptos Resources",
      className: "sidebar__aptos sidebar__custom_doc_label",
    },
    // {
    //   type: "link",
    //   label: "@switchboard-xyz/aptos.js",
    //   className: "sidebar__typescript",
    //   href: "https://switchboard-xyz.github.io/sbv2-core/api/@switchboard-xyz/aptos.js",
    // },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "link",
      href: "/near/dev",
      label: "Near Resources",
      className: "sidebar__near sidebar__custom_doc_label",
    },
    // {
    //   type: "link",
    //   label: "@switchboard-xyz/near.js",
    //   className: "sidebar__typescript",
    //   href: "https://switchboard-xyz.github.io/sbv2-core/api/@switchboard-xyz/near.js",
    // },
    { type: "html", value: '<hr class="sidebar__separator">' },
    {
      type: "link",
      href: "/solana/dev",
      label: "Solana Resources",
      className: "sidebar__solana sidebar__custom_doc_label",
    },
    // {
    //   type: "link",
    //   label: "@switchboard-xyz/solana.js",
    //   className: "sidebar__typescript",
    //   href: "https://switchboard-xyz.github.io/sbv2-core/api/@switchboard-xyz/solana.js",
    // },
    // {
    //   type: "link",
    //   label: "@switchboard-xyz/sbv2-lite",
    //   className: "sidebar__typescript",
    //   href: "https://switchboard-xyz.github.io/sbv2-core/api/@switchboard-xyz/sbv2-lite",
    // },
    // {
    //   type: "link",
    //   label: "switchboardpy",
    //   className: "sidebar__python",
    //   href: "https://switchboard-xyz.github.io/sbv2-core/api/switchboardpy",
    // },
    // {
    //   type: "link",
    //   label: "switchboard-v2",
    //   className: "sidebar__rust",
    //   href: "https://docs.rs/switchboard-v2/latest/switchboard_v2/",
    // },
  ],
};
