import { j as e, F as a, A as s, E as r, n as t } from "./index-v_tBRMeY.js";
import { r as d, L as n } from "./vendor-DKx09kD0.js";
import { s as l, f as c } from "./formatters-Qc2P36Ej.js";
const i = () => {
  const [i, o] = d.useState([]),
    [x, m] = d.useState(!0),
    [q, u] = d.useState(null),
    [h, p] = d.useState(1),
    [g, y] = d.useState(1),
    [f, b] = d.useState(""),
    [j, k] = d.useState("balance"),
    [v, w] = d.useState("desc"),
    N = [
      {
        address:
          "erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqz8llllls7a6h85",
        balance: 1278e16,
        txCount: 0,
        shard: 0,
        type: "Smart Contract",
        username: "dharitri.io",
        isVerified: !0,
      },
      {
        address:
          "erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqfhllllsp5g4ey",
        balance: 865e16,
        txCount: 0,
        shard: 1,
        type: "Smart Contract",
        username: "staking.dharitri.io",
        isVerified: !0,
      },
      {
        address:
          "erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqtllllls062et4",
        balance: 645e16,
        txCount: 0,
        shard: 2,
        type: "Smart Contract",
        username: "bridge.dharitri.io",
        isVerified: !0,
      },
      {
        address:
          "erd1932v4kxmjk48p5wnvsfk639q5jlhhrz4wsfwlqmkaroqfuuys4astyc0kl",
        balance: 324e16,
        txCount: 458,
        shard: 0,
        type: "Wallet",
        username: "alice.dharitri",
        isVerified: !1,
      },
      {
        address:
          "erd18s6a06ktr2v6fvlv5yfxdqnsdmazrvsxwdq7vzxsd7h5pxjkh40qv3xuk5",
        balance: 297e16,
        txCount: 312,
        shard: 1,
        type: "Wallet",
        username: "bob.dharitri",
        isVerified: !1,
      },
      {
        address:
          "erd1k7j6ewjsla4zsgv8v6f6fe3dvrkgv3d0j3tzgemw6sfk3m5z0ntqgqj9e9",
        balance: 268e16,
        txCount: 128,
        shard: 2,
        type: "Wallet",
        username: "",
        isVerified: !1,
      },
      {
        address:
          "erd1ff7n4mq5cjh8zxmd6a5vye3qj2rdafg3eflkwvs6ltxae6wycvys9ydchu",
        balance: 245e16,
        txCount: 276,
        shard: 0,
        type: "Wallet",
        username: "charlie.dharitri",
        isVerified: !1,
      },
      {
        address:
          "erd1c8wvrxlj9a9l8rw4wpyasl9kxf7zfx3adq5c3m5g8g3zmk6ndfjqhr3frj",
        balance: 218e16,
        txCount: 192,
        shard: 1,
        type: "Wallet",
        username: "",
        isVerified: !1,
      },
      {
        address:
          "erd15xdla6k7lfxc3mgl5u46a63a5sydf8mw2n0wvdrphcpkuknlgyuqmc0xw6",
        balance: 197e16,
        txCount: 88,
        shard: 2,
        type: "Wallet",
        username: "dave.dharitri",
        isVerified: !1,
      },
      {
        address:
          "erd1qqqqqqqqqqqqqpgq53thnw99v3ssfdd84eg5jrrxhzmkfp8g2jpsgk0hzn",
        balance: 186e16,
        txCount: 0,
        shard: 0,
        type: "Smart Contract",
        username: "exchange.dharitri.io",
        isVerified: !0,
      },
      {
        address:
          "erd1qqqqqqqqqqqqqpgqrc4pg2xarca9z34njcxeur622qmfj20gerpsk6nsws",
        balance: 175e16,
        txCount: 0,
        shard: 1,
        type: "Smart Contract",
        username: "nft.dharitri.io",
        isVerified: !0,
      },
      {
        address:
          "erd1wh2rz67zlq5nea7j0jdktvjr3atsehlf8l96p7xfj7fhupzaw3xscllhvj",
        balance: 168e16,
        txCount: 156,
        shard: 2,
        type: "Wallet",
        username: "eve.dharitri",
        isVerified: !1,
      },
      {
        address:
          "erd1tfs0pn0hgkwfxj5d4ze0h3qrz9v3ua3tlj948p0acuylzqj8z9vqeaxdmw",
        balance: 157e16,
        txCount: 134,
        shard: 0,
        type: "Wallet",
        username: "",
        isVerified: !1,
      },
      {
        address:
          "erd1g98qmpk702jxkkmueusqvgwvp3r9pdz62rdpwqzk9k8rjeggvc7qm730va",
        balance: 145e16,
        txCount: 122,
        shard: 1,
        type: "Wallet",
        username: "frank.dharitri",
        isVerified: !1,
      },
      {
        address:
          "erd1mv5zea4fxtg2s6ahn5mqzqwg46q5lmjgse8qm5hcjk0vaemmdj9qv7z2j3",
        balance: 134e16,
        txCount: 98,
        shard: 2,
        type: "Wallet",
        username: "",
        isVerified: !1,
      },
    ];
  d.useEffect(() => {
    (async () => {
      m(!0), u(null);
      try {
        let e = [...N];
        if ("" !== f.trim()) {
          const a = f.toLowerCase();
          e = e.filter(
            (e) =>
              e.address.toLowerCase().includes(a) ||
              (e.username && e.username.toLowerCase().includes(a))
          );
        }
        e.sort((e, a) => {
          let s, r;
          switch (j) {
            case "address":
              (s = e.address), (r = a.address);
              break;
            case "username":
              (s = e.username || ""), (r = a.username || "");
              break;
            case "txCount":
              (s = e.txCount), (r = a.txCount);
              break;
            case "shard":
              (s = e.shard), (r = a.shard);
              break;
            default:
              (s = e.balance), (r = a.balance);
          }
          if ("string" == typeof s) {
            const e = s.localeCompare(r);
            return "asc" === v ? e : -e;
          }
          return "asc" === v ? s - r : r - s;
        });
        const a = 10 * (h - 1),
          s = a + 10,
          r = e.slice(a, s);
        o(r),
          y(Math.ceil(e.length / 10)),
          setTimeout(() => {
            m(!1);
          }, 600);
      } catch (e) {
        u("Failed to fetch accounts"), m(!1);
      }
    })();
  }, [h, f, j, v]);
  const C = (e) => {
      j === e ? w("asc" === v ? "desc" : "asc") : (k(e), w("desc"));
    },
    z = (a) =>
      j !== a
        ? null
        : "asc" === v
        ? e.jsx(r, { className: "ml-1 inline" })
        : e.jsx(t, { className: "ml-1 inline" });
  return x
    ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          e.jsx("h1", {
            className: "text-2xl font-bold mb-6",
            children: "Accounts",
          }),
          e.jsx("div", {
            className: "flex justify-center items-center h-64",
            children: e.jsx("div", {
              className:
                "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary",
            }),
          }),
        ],
      })
    : q
    ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          e.jsx("h1", {
            className: "text-2xl font-bold mb-6",
            children: "Accounts",
          }),
          e.jsx("div", {
            className:
              "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg",
            children: q,
          }),
        ],
      })
    : e.jsxs("div", {
        className: "container mx-auto px-4 py-8 max-w-7xl",
        children: [
          e.jsxs("div", {
            className:
              "flex flex-col md:flex-row md:items-center md:justify-between mb-6",
            children: [
              e.jsx("h1", {
                className: "text-2xl font-bold",
                children: "Accounts",
              }),
              e.jsxs("form", {
                onSubmit: (e) => {
                  e.preventDefault(), p(1);
                },
                className: "mt-4 md:mt-0 relative w-full md:w-auto",
                children: [
                  e.jsx("input", {
                    type: "text",
                    placeholder: "Search by address or username...",
                    value: f,
                    onChange: (e) => b(e.target.value),
                    className:
                      "pl-10 pr-4 py-2 w-full md:w-80 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary",
                  }),
                  e.jsx(a, {
                    className: "absolute left-3 top-3 text-gray-400",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden",
            children: e.jsx("div", {
              className: "overflow-x-auto",
              children: e.jsxs("table", {
                className:
                  "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                children: [
                  e.jsx("thead", {
                    className: "bg-gray-50 dark:bg-gray-800",
                    children: e.jsxs("tr", {
                      children: [
                        e.jsxs("th", {
                          scope: "col",
                          className:
                            "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",
                          onClick: () => C("address"),
                          children: ["Address ", z("address")],
                        }),
                        e.jsxs("th", {
                          scope: "col",
                          className:
                            "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",
                          onClick: () => C("balance"),
                          children: ["Balance ", z("balance")],
                        }),
                        e.jsxs("th", {
                          scope: "col",
                          className:
                            "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",
                          onClick: () => C("txCount"),
                          children: ["Transactions ", z("txCount")],
                        }),
                        e.jsxs("th", {
                          scope: "col",
                          className:
                            "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",
                          onClick: () => C("shard"),
                          children: ["Shard ", z("shard")],
                        }),
                        e.jsx("th", {
                          scope: "col",
                          className:
                            "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                          children: "Type",
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    className:
                      "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                    children: i.map((a) => {
                      return e.jsxs(
                        "tr",
                        {
                          className: "hover:bg-gray-50 dark:hover:bg-gray-800",
                          children: [
                            e.jsxs("td", {
                              className: "px-6 py-4 whitespace-nowrap",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    e.jsx(n, {
                                      to: `/account/${a.address}`,
                                      className: "text-primary hover:underline",
                                      children: l(a.address, 12),
                                    }),
                                    a.isVerified &&
                                      e.jsx("span", {
                                        className:
                                          "ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
                                        children: "Verified",
                                      }),
                                  ],
                                }),
                                a.username &&
                                  e.jsx("div", {
                                    className:
                                      "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                    children: a.username,
                                  }),
                              ],
                            }),
                            e.jsx("td", {
                              className: "px-6 py-4 whitespace-nowrap",
                              children: e.jsx("div", {
                                className: "text-sm font-medium",
                                children:
                                  ((s = a.balance),
                                  (Number(s) / Math.pow(10, 18)).toLocaleString(
                                    void 0,
                                    { maximumFractionDigits: 4 }
                                  ) + " REWA"),
                              }),
                            }),
                            e.jsx("td", {
                              className: "px-6 py-4 whitespace-nowrap text-sm",
                              children: c(a.txCount),
                            }),
                            e.jsx("td", {
                              className: "px-6 py-4 whitespace-nowrap text-sm",
                              children: e.jsx("span", {
                                className:
                                  "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
                                children: a.shard,
                              }),
                            }),
                            e.jsx("td", {
                              className: "px-6 py-4 whitespace-nowrap text-sm",
                              children: e.jsx("span", {
                                className:
                                  "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full " +
                                  ("Smart Contract" === a.type
                                    ? "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"),
                                children: a.type,
                              }),
                            }),
                          ],
                        },
                        a.address
                      );
                      var s;
                    }),
                  }),
                ],
              }),
            }),
          }),
          e.jsxs("div", {
            className: "flex items-center justify-center mt-8 space-x-2",
            children: [
              e.jsx("button", {
                onClick: () => p((e) => Math.max(e - 1, 1)),
                disabled: h <= 1,
                className:
                  "px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50",
                children: "Previous",
              }),
              e.jsx("div", {
                className: "flex items-center space-x-1",
                children: Array.from({ length: Math.min(5, g) }, (a, s) => {
                  let r;
                  return (
                    (r =
                      g <= 5 || h <= 3
                        ? s + 1
                        : h >= g - 2
                        ? g - 4 + s
                        : h - 2 + s),
                    e.jsx(
                      "button",
                      {
                        onClick: () => p(r),
                        className:
                          "w-10 h-10 rounded-md " +
                          (h === r
                            ? "bg-primary text-white"
                            : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"),
                        children: r,
                      },
                      s
                    )
                  );
                }),
              }),
              e.jsx("button", {
                onClick: () => p((e) => Math.min(e + 1, g)),
                disabled: h >= g,
                className:
                  "px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50",
                children: "Next",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center mb-4",
                children: [
                  e.jsx(s, { className: "text-primary mr-2" }),
                  e.jsx("h2", {
                    className: "text-lg font-semibold",
                    children: "About Accounts",
                  }),
                ],
              }),
              e.jsx("p", {
                className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                children:
                  "An account is an entity on the Dharitri blockchain with a unique address. Accounts can store REWA (the native token), other tokens, and data. Each account has a balance and a nonce (transaction count).",
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "text-md font-medium mb-3",
                        children: "What is an Account?",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400",
                        children:
                          "An account is an entity on the Dharitri blockchain with a unique address that can send and receive transactions. Accounts can be of two types: user wallets and smart contracts. Each account has its own balance and state.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "text-md font-medium mb-3",
                        children: "Account Types",
                      }),
                      e.jsxs("ul", {
                        className:
                          "list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2",
                        children: [
                          e.jsxs("li", {
                            children: [
                              e.jsx("span", {
                                className: "font-medium",
                                children: "Wallet",
                              }),
                              ": Regular user account, controlled by a private key",
                            ],
                          }),
                          e.jsxs("li", {
                            children: [
                              e.jsx("span", {
                                className: "font-medium",
                                children: "Smart Contract",
                              }),
                              ": Programmatic account that executes code on the blockchain",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
};
export { i as default };
