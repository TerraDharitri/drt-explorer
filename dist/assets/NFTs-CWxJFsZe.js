import { j as e, F as a, O as s, P as t, Q as r } from "./index-v_tBRMeY.js";
import { r as l, L as o } from "./vendor-DKx09kD0.js";
import "./api-BXm3BkPp.js";
import { f as i } from "./formatters-Qc2P36Ej.js";
const d = () => {
  const [d, m] = l.useState([]),
    [c, n] = l.useState(!0),
    [f, x] = l.useState(null),
    [h, g] = l.useState(1),
    [p, u] = l.useState(1),
    [y, b] = l.useState(""),
    [v, N] = l.useState("popularity"),
    [j, k] = l.useState("desc"),
    S = [
      {
        id: "deadrare-dharitri-gorillaz",
        name: "dharitri Gorillaz",
        ticker: "GORILLAZ",
        items: 5e3,
        holders: 1520,
        floor: 0.35,
        volume: 125600,
        image: "https://placehold.co/400x400/10b981/ffffff?text=GORILLAZ",
      },
      {
        id: "hape-prime",
        name: "Hape Prime",
        ticker: "HAPE",
        items: 8192,
        holders: 3204,
        floor: 1.2,
        volume: 524800,
        image: "https://placehold.co/400x400/1a4dda/ffffff?text=HAPE",
      },
      {
        id: "cyberpunks",
        name: "CyberPunks",
        ticker: "CYBRP",
        items: 1e4,
        holders: 4500,
        floor: 0.85,
        volume: 356200,
        image: "https://placehold.co/400x400/f59e0b/ffffff?text=CYBRP",
      },
      {
        id: "elfin-dragons",
        name: "Elfin Dragons",
        ticker: "DRAGONS",
        items: 3e3,
        holders: 1250,
        floor: 2.4,
        volume: 288e3,
        image: "https://placehold.co/400x400/8b5cf6/ffffff?text=DRAGONS",
      },
      {
        id: "ape-league",
        name: "Ape League",
        ticker: "APLEAG",
        items: 6e3,
        holders: 2100,
        floor: 0.55,
        volume: 21e4,
        image: "https://placehold.co/400x400/ef4444/ffffff?text=APLEAG",
      },
      {
        id: "pixel-heroes",
        name: "Pixel Heroes",
        ticker: "HEROES",
        items: 4500,
        holders: 1800,
        floor: 0.28,
        volume: 175e3,
        image: "https://placehold.co/400x400/3b82f6/ffffff?text=HEROES",
      },
      {
        id: "crypto-kitties",
        name: "Crypto Kitties",
        ticker: "KITTIES",
        items: 7800,
        holders: 3100,
        floor: 0.18,
        volume: 145e3,
        image: "https://placehold.co/400x400/10b981/ffffff?text=KITTIES",
      },
      {
        id: "space-punks",
        name: "Space Punks",
        ticker: "SPUNKS",
        items: 5500,
        holders: 2400,
        floor: 0.65,
        volume: 32e4,
        image: "https://placehold.co/400x400/6366f1/ffffff?text=SPUNKS",
      },
      {
        id: "dmt-cities",
        name: "DMT Cities",
        ticker: "CITIES",
        items: 1e3,
        holders: 750,
        floor: 3.5,
        volume: 42e4,
        image: "https://placehold.co/400x400/14b8a6/ffffff?text=CITIES",
      },
      {
        id: "virtual-lands",
        name: "Virtual Lands",
        ticker: "LANDS",
        items: 12e3,
        holders: 5500,
        floor: 0.42,
        volume: 68e4,
        image: "https://placehold.co/400x400/f97316/ffffff?text=LANDS",
      },
      {
        id: "meta-avatars",
        name: "Meta Avatars",
        ticker: "AVATARS",
        items: 9500,
        holders: 4200,
        floor: 0.75,
        volume: 52e4,
        image: "https://placehold.co/400x400/a855f7/ffffff?text=AVATARS",
      },
      {
        id: "music-nfts",
        name: "Music NFTs",
        ticker: "MUSIC",
        items: 2500,
        holders: 980,
        floor: 1.8,
        volume: 245e3,
        image: "https://placehold.co/400x400/ec4899/ffffff?text=MUSIC",
      },
    ];
  l.useEffect(() => {
    (async () => {
      n(!0), x(null);
      try {
        const e = [...S].sort((e, a) => {
            let s, t;
            switch (v) {
              case "name":
                (s = e.name), (t = a.name);
                break;
              case "items":
                (s = e.items), (t = a.items);
                break;
              case "holders":
                (s = e.holders), (t = a.holders);
                break;
              case "floor":
                (s = e.floor), (t = a.floor);
                break;
              default:
                (s = e.volume), (t = a.volume);
            }
            if ("string" == typeof s) {
              const e = s.localeCompare(t);
              return "asc" === j ? e : -e;
            }
            return "asc" === j ? s - t : t - s;
          }),
          a = 12 * (h - 1),
          s = a + 12,
          t = e.slice(a, s);
        m(t),
          u(Math.ceil(S.length / 12)),
          setTimeout(() => {
            n(!1);
          }, 500);
      } catch (e) {
        x("Failed to fetch NFT collections"), n(!1);
      }
    })();
  }, [h, v, j]);
  const A = (e) => {
      v === e ? k("asc" === j ? "desc" : "asc") : (N(e), k("desc"));
    },
    w = (a) =>
      v !== a
        ? e.jsx(s, { className: "ml-1 text-gray-400" })
        : "asc" === j
        ? e.jsx(t, { className: "ml-1 text-primary" })
        : e.jsx(r, { className: "ml-1 text-primary" });
  return c
    ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          e.jsx("h1", {
            className: "text-2xl font-bold mb-6",
            children: "NFT Collections",
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
    : f
    ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          e.jsx("h1", {
            className: "text-2xl font-bold mb-6",
            children: "NFT Collections",
          }),
          e.jsx("div", {
            className:
              "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg",
            children: f,
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
                children: "NFT Collections",
              }),
              e.jsxs("form", {
                onSubmit: (e) => {
                  e.preventDefault();
                },
                className: "mt-4 md:mt-0 relative",
                children: [
                  e.jsx("input", {
                    type: "text",
                    placeholder: "Search NFT collections...",
                    value: y,
                    onChange: (e) => b(e.target.value),
                    className:
                      "pl-10 pr-4 py-2 w-full md:w-64 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary",
                  }),
                  e.jsx(a, {
                    className: "absolute left-3 top-3 text-gray-400",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mb-6 flex flex-wrap gap-2",
            children: [
              e.jsxs("button", {
                onClick: () => A("popularity"),
                className:
                  "px-3 py-1 rounded-md text-sm flex items-center " +
                  ("popularity" === v
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"),
                children: ["Popularity ", w("popularity")],
              }),
              e.jsxs("button", {
                onClick: () => A("name"),
                className:
                  "px-3 py-1 rounded-md text-sm flex items-center " +
                  ("name" === v
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"),
                children: ["Name ", w("name")],
              }),
              e.jsxs("button", {
                onClick: () => A("floor"),
                className:
                  "px-3 py-1 rounded-md text-sm flex items-center " +
                  ("floor" === v
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"),
                children: ["Floor Price ", w("floor")],
              }),
              e.jsxs("button", {
                onClick: () => A("volume"),
                className:
                  "px-3 py-1 rounded-md text-sm flex items-center " +
                  ("volume" === v
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"),
                children: ["Volume ", w("volume")],
              }),
              e.jsxs("button", {
                onClick: () => A("items"),
                className:
                  "px-3 py-1 rounded-md text-sm flex items-center " +
                  ("items" === v
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"),
                children: ["Items ", w("items")],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
            children: d.map((a) =>
              e.jsxs(
                o,
                {
                  to: `/nft/${a.id}`,
                  className:
                    "bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
                  children: [
                    e.jsx("div", {
                      className: "aspect-square overflow-hidden",
                      children: e.jsx("img", {
                        src: a.image,
                        alt: a.name,
                        className: "w-full h-full object-cover",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "p-4",
                      children: [
                        e.jsx("h3", {
                          className: "text-lg font-semibold",
                          children: a.name,
                        }),
                        e.jsx("p", {
                          className:
                            "text-sm text-gray-500 dark:text-gray-400 mb-2",
                          children: a.ticker,
                        }),
                        e.jsxs("div", {
                          className:
                            "grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-sm",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "text-gray-500 dark:text-gray-400",
                                  children: "Floor",
                                }),
                                e.jsxs("p", {
                                  className: "font-medium",
                                  children: [a.floor, " REWA"],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "text-gray-500 dark:text-gray-400",
                                  children: "Items",
                                }),
                                e.jsx("p", {
                                  className: "font-medium",
                                  children: i(a.items),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "text-gray-500 dark:text-gray-400",
                                  children: "Holders",
                                }),
                                e.jsx("p", {
                                  className: "font-medium",
                                  children: i(a.holders),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "text-gray-500 dark:text-gray-400",
                                  children: "Volume",
                                }),
                                e.jsxs("p", {
                                  className: "font-medium",
                                  children: [i(a.volume), " REWA"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                a.id
              )
            ),
          }),
          e.jsxs("div", {
            className: "flex items-center justify-center mt-8 space-x-2",
            children: [
              e.jsx("button", {
                onClick: () => g((e) => Math.max(e - 1, 1)),
                disabled: h <= 1,
                className:
                  "px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50",
                children: "Previous",
              }),
              e.jsx("span", {
                className: "px-4 py-1 rounded-md bg-primary text-white",
                children: h,
              }),
              e.jsx("button", {
                onClick: () => g((e) => Math.min(e + 1, p)),
                disabled: h >= p,
                className:
                  "px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50",
                children: "Next",
              }),
            ],
          }),
        ],
      });
};
export { d as default };
