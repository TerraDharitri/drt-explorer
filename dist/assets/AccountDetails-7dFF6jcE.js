import {
  j as e,
  y as a,
  D as t,
  H as r,
  I as s,
  J as d,
  A as l,
  c as i,
  K as n,
  L as c,
  q as o,
} from "./index-v_tBRMeY.js";
import { e as x, r as m, L as h } from "./vendor-DKx09kD0.js";
import {
  a as g,
  f as p,
  t as y,
  s as u,
  d as b,
} from "./formatters-Qc2P36Ej.js";
const j = () => {
  const { address: j } = x(),
    [f, N] = m.useState(null),
    [v, k] = m.useState(!0),
    [w, M] = m.useState(null),
    [S, A] = m.useState("transactions"),
    [C, T] = m.useState(!1),
    [D, F] = m.useState([]),
    [$, W] = m.useState([]),
    [R, E] = m.useState([]),
    [V, q] = m.useState([]),
    [L, U] = m.useState(1),
    [B] = m.useState(10);
  m.useEffect(() => {
    (async () => {
      k(!0), M(null);
      try {
        setTimeout(() => {
          const e = j.startsWith("erd1qqqqq"),
            a = j.includes("dharitri") || Math.random() > 0.7;
          N({
            address: j,
            balance: Math.floor(1e20 * Math.random()),
            nonce: Math.floor(1e3 * Math.random()),
            shard: Math.floor(3 * Math.random()),
            type: e ? "Smart Contract" : "Wallet",
            username: a ? (e ? "exchange.dharitri.org" : "alice.dharitri") : "",
            isVerified: a,
            txCount: Math.floor(1e3 * Math.random()) + 10,
            createdAt: new Date().getTime() - Math.floor(1e10 * Math.random()),
            lastActive: new Date().getTime() - Math.floor(1e8 * Math.random()),
            developerReward: e ? "5%" : null,
            code: e ? "0x608060405234801561001..." : null,
            assets: [
              {
                identifier: "REWA-0000001",
                name: "REWA",
                token: "REWA",
                balance: (1e3 * Math.random()).toFixed(4),
                usdValue: (1e4 * Math.random()).toFixed(2),
                decimals: 18,
                change24h: (10 * Math.random() - 5).toFixed(2),
              },
              {
                token: "MEX",
                balance: Math.floor(1e22 * Math.random()),
                value: Math.floor(1e5 * Math.random()) / 100,
                decimals: 18,
                price: Math.floor(100 * Math.random()) / 100,
              },
              {
                token: "USDC",
                balance: Math.floor(1e9 * Math.random()),
                value: Math.floor(1e4 * Math.random()) / 100,
                decimals: 6,
                price: 1,
              },
            ],
            stats: {
              totalValue: Math.floor(1e7 * Math.random()) / 100,
              valueChange24h: 20 * Math.random() - 10,
              successRate: Math.floor(100 * Math.random()),
              firstTx: new Date().getTime() - Math.floor(1e10 * Math.random()),
              avgTxValue: Math.floor(1e19 * Math.random()),
            },
          });
          const t = Array.from({ length: 50 }, (e, a) => ({
            hash: `tx${a}_${Math.random().toString(36).substring(2, 15)}`,
            from:
              a % 3 == 0
                ? j
                : `erd1${Math.random()
                    .toString(36)
                    .substring(2, 15)}${Math.random()
                    .toString(36)
                    .substring(2, 15)}`,
            to:
              a % 4 == 0
                ? `erd1${Math.random()
                    .toString(36)
                    .substring(2, 15)}${Math.random()
                    .toString(36)
                    .substring(2, 15)}`
                : j,
            value: Math.floor(1e18 * Math.random()),
            fee: Math.floor(1e12 * Math.random()),
            status: Math.random() > 0.1 ? "success" : "failed",
            timestamp: new Date().getTime() - Math.floor(1e7 * Math.random()),
            type: ["transfer", "smart contract", "delegate", "claim rewards"][
              Math.floor(4 * Math.random())
            ],
          }));
          if ((F(t), Math.random() > 0.3)) {
            const e = Array.from(
              { length: Math.floor(12 * Math.random()) + 1 },
              (e, a) => ({
                identifier: `NFT-${Math.random().toString(36).substring(2, 6)}`,
                name: `Dharitri NFT #${Math.floor(1e4 * Math.random())}`,
                collection: "BAYC-38e92a",
                collectionName:
                  Math.random() > 0.5 ? "Bored Apes" : "Knights of Dharitri",
                value: (10 * Math.random()).toFixed(2),
                thumbnailUrl: "https://placehold.co/400x400?text=NFT",
              })
            );
            q(e);
          }
          if (!e && Math.random() > 0.5) {
            const e = Array.from(
              { length: Math.floor(3 * Math.random()) + 1 },
              () => ({
                provider: "DharitriStake",
                amount: (5e3 * Math.random()).toFixed(2),
                rewards: (500 * Math.random()).toFixed(2),
              })
            );
            E(e);
          }
          W((null == f ? void 0 : f.assets) || []), k(!1);
        }, 800);
      } catch (e) {
        M("Failed to fetch account details"), k(!1);
      }
    })();
  }, [j]);
  const P = (a) => {
      switch (a.toLowerCase()) {
        case "transfer":
          return e.jsx(i, { className: "text-blue-500" });
        case "smart contract":
          return e.jsx(o, { className: "text-purple-500" });
        case "delegate":
          return e.jsx(c, { className: "text-green-500" });
        case "claim rewards":
          return e.jsx(n, { className: "text-yellow-500" });
        default:
          return e.jsx(i, { className: "text-gray-500" });
      }
    },
    H = (e) => {
      switch (e) {
        case "success":
          return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
        case "failed":
          return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
        case "pending":
          return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
        default:
          return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
      }
    },
    K = L * B,
    z = K - B,
    G = D.slice(z, K),
    I = Math.ceil(D.length / B);
  return v
    ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          e.jsx("h1", {
            className: "text-2xl font-bold mb-6",
            children: "Account Details",
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
    : w
    ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          e.jsx("h1", {
            className: "text-2xl font-bold mb-6",
            children: "Account Details",
          }),
          e.jsx("div", {
            className:
              "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg",
            children: w,
          }),
        ],
      })
    : f
    ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8 max-w-7xl",
        children: [
          e.jsxs("div", {
            className:
              "bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden mb-6",
            children: [
              e.jsx("div", {
                className: "p-6 border-b border-gray-200 dark:border-gray-700",
                children: e.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row md:justify-between md:items-center gap-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("h1", {
                          className: "text-2xl font-bold",
                          children: "Account Details",
                        }),
                        e.jsxs("div", {
                          className: "flex items-center mt-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-400",
                              children: f.type,
                            }),
                            f.isVerified &&
                              e.jsx("span", {
                                className:
                                  "ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
                                children: "Verified",
                              }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col items-start md:items-end",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            e.jsx("span", {
                              className: "text-xl font-medium",
                              children: g(f.balance),
                            }),
                            e.jsxs("span", {
                              className:
                                "ml-2 text-sm text-gray-500 dark:text-gray-400",
                              children: [
                                "($",
                                ((null == f ? void 0 : f.assets)
                                  ? f.assets.reduce((e, a) => e + a.value, 0)
                                  : 0
                                ).toLocaleString(),
                                ")",
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center mt-1",
                          children: [
                            e.jsxs("span", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-400",
                              children: [f.txCount, " transactions"],
                            }),
                            e.jsx("span", {
                              className:
                                "mx-2 text-gray-300 dark:text-gray-600",
                              children: "•",
                            }),
                            e.jsxs("span", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-400",
                              children: ["Shard ", f.shard],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsxs("div", {
                className: "p-6",
                children: [
                  e.jsxs("div", {
                    className: "mb-6",
                    children: [
                      e.jsx("div", {
                        className: "flex items-center mb-2",
                        children: e.jsx("div", {
                          className:
                            "text-sm font-medium text-gray-500 dark:text-gray-400",
                          children: "Address",
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg",
                        children: [
                          e.jsx("div", {
                            className: "font-mono text-sm break-all",
                            children: f.address,
                          }),
                          e.jsx("button", {
                            onClick: () => {
                              return (
                                (e = f.address),
                                navigator.clipboard.writeText(e),
                                T(!0),
                                void setTimeout(() => T(!1), 2e3)
                              );
                              var e;
                            },
                            className:
                              "ml-2 text-primary hover:text-primary-dark",
                            children: C ? e.jsx(a, {}) : e.jsx(t, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.username &&
                    e.jsxs("div", {
                      className: "mb-6",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-sm font-medium text-gray-500 dark:text-gray-400 mb-2",
                          children: "Username",
                        }),
                        e.jsx("div", {
                          className: "text-md",
                          children: f.username,
                        }),
                      ],
                    }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
                    children: [
                      e.jsxs("div", {
                        className: "bg-gray-50 dark:bg-gray-800 p-4 rounded-lg",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",
                            children: "Balance",
                          }),
                          e.jsx("div", {
                            className: "text-lg font-medium",
                            children: g(f.balance),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "bg-gray-50 dark:bg-gray-800 p-4 rounded-lg",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",
                            children: "Transactions",
                          }),
                          e.jsx("div", {
                            className: "text-lg font-medium",
                            children: p(f.txCount),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "bg-gray-50 dark:bg-gray-800 p-4 rounded-lg",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",
                            children: "Created",
                          }),
                          e.jsx("div", {
                            className: "text-lg font-medium",
                            children: y(f.createdAt),
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.assets &&
                    f.assets.length > 0 &&
                    e.jsxs("div", {
                      className: "mb-6",
                      children: [
                        e.jsx("h2", {
                          className: "text-xl font-semibold mb-4",
                          children: "Assets",
                        }),
                        e.jsx("div", {
                          className:
                            "bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700",
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
                                      e.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                        children: "Token",
                                      }),
                                      e.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                        children: "Balance",
                                      }),
                                      e.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                        children: "Value",
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx("tbody", {
                                  className:
                                    "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                                  children: f.assets.map((a, t) =>
                                    e.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-gray-50 dark:hover:bg-gray-800",
                                        children: [
                                          e.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: e.jsxs("div", {
                                              className: "flex items-center",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "bg-gray-100 dark:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center mr-3",
                                                  children: a.token.charAt(0),
                                                }),
                                                e.jsx("div", {
                                                  children: e.jsx("div", {
                                                    className: "font-medium",
                                                    children: a.token,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                          e.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: e.jsx("div", {
                                              className: "text-sm",
                                              children: g(
                                                a.balance,
                                                a.decimals,
                                                a.token
                                              ),
                                            }),
                                          }),
                                          e.jsxs("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: [
                                              e.jsxs("div", {
                                                className: "text-sm",
                                                children: [
                                                  "$",
                                                  a.value.toLocaleString(),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "text-xs text-gray-500 dark:text-gray-400",
                                                children: [
                                                  "$",
                                                  a.price,
                                                  " per ",
                                                  a.token,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mb-6",
            children: [
              e.jsx("div", {
                className: "border-b border-gray-200 dark:border-gray-700",
                children: e.jsxs("nav", {
                  className: "-mb-px flex space-x-8",
                  children: [
                    e.jsx("button", {
                      onClick: () => A("transactions"),
                      className:
                        "py-4 px-1 border-b-2 font-medium text-sm " +
                        ("transactions" === S
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600"),
                      children: "Transactions",
                    }),
                    V.length > 0 &&
                      e.jsx("button", {
                        onClick: () => A("nfts"),
                        className:
                          "py-4 px-1 border-b-2 font-medium text-sm " +
                          ("nfts" === S
                            ? "border-primary text-primary"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600"),
                        children: "NFTs",
                      }),
                    R.length > 0 &&
                      e.jsx("button", {
                        onClick: () => A("delegations"),
                        className:
                          "py-4 px-1 border-b-2 font-medium text-sm " +
                          ("delegations" === S
                            ? "border-primary text-primary"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600"),
                        children: "Delegations",
                      }),
                  ],
                }),
              }),
              "transactions" === S &&
                e.jsxs("div", {
                  className: "mt-6",
                  children: [
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
                                  e.jsx("th", {
                                    scope: "col",
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Tx Hash",
                                  }),
                                  e.jsx("th", {
                                    scope: "col",
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Type",
                                  }),
                                  e.jsx("th", {
                                    scope: "col",
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "From / To",
                                  }),
                                  e.jsx("th", {
                                    scope: "col",
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Value",
                                  }),
                                  e.jsx("th", {
                                    scope: "col",
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Status",
                                  }),
                                  e.jsx("th", {
                                    scope: "col",
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Age",
                                  }),
                                ],
                              }),
                            }),
                            e.jsx("tbody", {
                              className:
                                "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                              children: G.map((a, t) =>
                                e.jsxs(
                                  "tr",
                                  {
                                    className:
                                      "hover:bg-gray-50 dark:hover:bg-gray-800",
                                    children: [
                                      e.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap",
                                        children: e.jsx(h, {
                                          to: `/transaction/${a.hash}`,
                                          className:
                                            "text-primary hover:underline",
                                          children: u(a.hash, 8),
                                        }),
                                      }),
                                      e.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap",
                                        children: e.jsxs("div", {
                                          className: "flex items-center",
                                          children: [
                                            e.jsx("span", {
                                              className: "mr-2",
                                              children: P(a.type),
                                            }),
                                            e.jsx("span", {
                                              className: "capitalize",
                                              children: a.type,
                                            }),
                                          ],
                                        }),
                                      }),
                                      e.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap",
                                        children: e.jsx("div", {
                                          className: "flex flex-col",
                                          children: e.jsxs("div", {
                                            className: "flex items-center",
                                            children: [
                                              a.from === j
                                                ? e.jsx(r, {
                                                    className:
                                                      "text-red-500 mr-2",
                                                  })
                                                : e.jsx(s, {
                                                    className:
                                                      "text-green-500 mr-2",
                                                  }),
                                              e.jsx(h, {
                                                to: `/account/${
                                                  a.from === j ? a.to : a.from
                                                }`,
                                                className:
                                                  "text-primary hover:underline",
                                                children: u(
                                                  a.from === j ? a.to : a.from,
                                                  8
                                                ),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                      e.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap",
                                        children: g(a.value),
                                      }),
                                      e.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap",
                                        children: e.jsx("span", {
                                          className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${H(
                                            a.status
                                          )}`,
                                          children: a.status,
                                        }),
                                      }),
                                      e.jsx("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                        children: y(a.timestamp),
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center justify-center mt-6 space-x-2",
                      children: [
                        e.jsx("button", {
                          onClick: () => U((e) => Math.max(e - 1, 1)),
                          disabled: L <= 1,
                          className:
                            "px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50",
                          children: "Previous",
                        }),
                        e.jsx("div", {
                          className: "flex items-center space-x-1",
                          children: Array.from(
                            { length: Math.min(5, I) },
                            (a, t) => {
                              let r;
                              return (
                                (r =
                                  I <= 5 || L <= 3
                                    ? t + 1
                                    : L >= I - 2
                                    ? I - 4 + t
                                    : L - 2 + t),
                                e.jsx(
                                  "button",
                                  {
                                    onClick: () => U(r),
                                    className:
                                      "w-10 h-10 rounded-md " +
                                      (L === r
                                        ? "bg-primary text-white"
                                        : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"),
                                    children: r,
                                  },
                                  t
                                )
                              );
                            }
                          ),
                        }),
                        e.jsx("button", {
                          onClick: () => U((e) => Math.min(e + 1, I)),
                          disabled: L >= I,
                          className:
                            "px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50",
                          children: "Next",
                        }),
                      ],
                    }),
                  ],
                }),
              "nfts" === S &&
                e.jsx("div", {
                  className: "mt-6",
                  children: e.jsx("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                    children: V.map((a, t) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden",
                          children: [
                            e.jsx("img", {
                              src: a.thumbnailUrl,
                              alt: a.name,
                              className: "w-full h-48 object-cover",
                            }),
                            e.jsxs("div", {
                              className: "p-4",
                              children: [
                                e.jsx("h3", {
                                  className: "text-lg font-medium mb-1",
                                  children: a.name,
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-gray-500 dark:text-gray-400 mb-2",
                                  children: a.collectionName,
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex justify-between items-center",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "px-2 py-1 text-xs rounded-full " +
                                        ("Bored Apes" === a.collectionName
                                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                                          : "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"),
                                      children: a.collectionName,
                                    }),
                                    e.jsxs("span", {
                                      className: "text-sm font-medium",
                                      children: [a.value, " REWA"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                }),
              "delegations" === S &&
                e.jsx("div", {
                  className: "mt-6",
                  children: e.jsx("div", {
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
                                e.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                  children: "Provider",
                                }),
                                e.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                  children: "Amount",
                                }),
                                e.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                  children: "Rewards",
                                }),
                                e.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                  children: "APR",
                                }),
                                e.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                  children: "Status",
                                }),
                              ],
                            }),
                          }),
                          e.jsx("tbody", {
                            className:
                              "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                            children: R.map((a, t) =>
                              e.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-gray-50 dark:hover:bg-gray-800",
                                  children: [
                                    e.jsx("td", {
                                      className: "px-6 py-4 whitespace-nowrap",
                                      children: e.jsxs("div", {
                                        className: "flex items-center",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "bg-gray-100 dark:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center mr-3",
                                            children: e.jsx(d, {
                                              className: "text-gray-500",
                                            }),
                                          }),
                                          e.jsxs("div", {
                                            children: [
                                              e.jsx("div", {
                                                className: "font-medium",
                                                children: a.providerName,
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "text-sm text-gray-500 dark:text-gray-400",
                                                children: u(a.provider, 8),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsx("td", {
                                      className: "px-6 py-4 whitespace-nowrap",
                                      children: g(a.amount),
                                    }),
                                    e.jsx("td", {
                                      className: "px-6 py-4 whitespace-nowrap",
                                      children: g(a.rewards),
                                    }),
                                    e.jsx("td", {
                                      className: "px-6 py-4 whitespace-nowrap",
                                      children: b(a.apr),
                                    }),
                                    e.jsx("td", {
                                      className: "px-6 py-4 whitespace-nowrap",
                                      children: e.jsx("span", {
                                        className:
                                          "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full " +
                                          (a.unbound
                                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                                            : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"),
                                        children: a.unbound
                                          ? "Unbonding"
                                          : "Active",
                                      }),
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
            ],
          }),
          e.jsxs("div", {
            className: "bg-gray-50 dark:bg-gray-800 rounded-xl p-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center mb-4",
                children: [
                  e.jsx(l, { className: "text-primary mr-2" }),
                  e.jsxs("h2", {
                    className: "text-lg font-semibold",
                    children: [
                      "About",
                      " ",
                      "Smart Contract" === f.type
                        ? "Smart Contracts"
                        : "Accounts",
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsxs("h3", {
                        className: "text-md font-medium mb-2",
                        children: [
                          "Smart Contract" === f.type
                            ? "Smart Contracts"
                            : "Wallets",
                          " ",
                          "on Dharitri",
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400",
                        children:
                          "Smart Contract" === f.type
                            ? "Smart contracts are programs deployed on the Dharitri blockchain that execute automatically when predetermined conditions are met. They can define rules for token distribution, decentralized applications, and more."
                            : "Dharitri accounts are secure digital identities on the blockchain, capable of holding REWA and other tokens, sending transactions, and interacting with smart contracts. Each account has a unique address and is secured by cryptographic keys.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "text-md font-medium mb-2",
                        children: "Key Features",
                      }),
                      e.jsx("ul", {
                        className:
                          "list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",
                        children:
                          "Smart Contract" === f.type
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx("li", {
                                    children:
                                      "Deployed with WebAssembly (WASM)",
                                  }),
                                  e.jsx("li", {
                                    children: "Gas-efficient execution",
                                  }),
                                  e.jsx("li", {
                                    children: "Upgradable design",
                                  }),
                                  e.jsx("li", {
                                    children: "Support for multiple tokens",
                                  }),
                                  e.jsx("li", {
                                    children: "Predictable execution",
                                  }),
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx("li", {
                                    children: "Secured by Schnorr signatures",
                                  }),
                                  e.jsx("li", {
                                    children: "Human-readable herotag support",
                                  }),
                                  e.jsx("li", {
                                    children: "Low transaction fees",
                                  }),
                                  e.jsx("li", {
                                    children: "Support for NFTs and tokens",
                                  }),
                                  e.jsx("li", {
                                    children: "Staking capabilities",
                                  }),
                                ],
                              }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : e.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          e.jsx("h1", {
            className: "text-2xl font-bold mb-6",
            children: "Account Details",
          }),
          e.jsx("div", {
            className:
              "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 p-4 rounded-lg",
            children: "Account not found",
          }),
        ],
      });
};
export { j as default };
