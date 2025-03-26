const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Home-yCrTzk16.js",
      "assets/vendor-DKx09kD0.js",
      "assets/Loading-Bg3FSsJ4.js",
      "assets/formatters-Qc2P36Ej.js",
      "assets/charts-DzQ2rSjN.js",
      "assets/Transactions-B6hFJp_t.js",
      "assets/Badge-DUONU_FP.js",
      "assets/api-BXm3BkPp.js",
      "assets/TransactionDetails-DzSJb0Jk.js",
      "assets/Blocks-vicTz66P.js",
      "assets/BlockDetails-B_4tWA0Y.js",
      "assets/Accounts-DDjYdliO.js",
      "assets/AccountDetails-7dFF6jcE.js",
      "assets/Validators-CJx3hEmN.js",
      "assets/Tokens-B-UYec2k.js",
      "assets/TokenDetails-xQXIUWUH.js",
      "assets/Statistics-DcWwqFv4.js",
      "assets/Analytics-D0RUR08d.js",
      "assets/SearchResults-CQj-VI9P.js",
      "assets/NFTs-CWxJFsZe.js",
      "assets/NFTDetails-BhP8ztdN.js",
      "assets/Apps-BI0k42Hj.js",
      "assets/AppDetails-KSkzwlYg.js",
      "assets/NotFound-BG4t8zTp.js",
    ])
) => i.map((i) => d[i]);
var t = Object.defineProperty,
  e = (e, r, a) =>
    ((e, r, a) =>
      r in e
        ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
        : (e[r] = a))(e, "symbol" != typeof r ? r + "" : r, a);
import {
  r,
  a,
  R as s,
  u as c,
  b as l,
  L as n,
  H as o,
  c as i,
  d,
} from "./vendor-DKx09kD0.js";
!(function () {
  const t = document.createElement("link").relList;
  if (!(t && t.supports && t.supports("modulepreload"))) {
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
      e(t);
    new MutationObserver((t) => {
      for (const r of t)
        if ("childList" === r.type)
          for (const t of r.addedNodes)
            "LINK" === t.tagName && "modulepreload" === t.rel && e(t);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function e(t) {
    if (t.ep) return;
    t.ep = !0;
    const e = (function (t) {
      const e = {};
      return (
        t.integrity && (e.integrity = t.integrity),
        t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        "use-credentials" === t.crossOrigin
          ? (e.credentials = "include")
          : "anonymous" === t.crossOrigin
          ? (e.credentials = "omit")
          : (e.credentials = "same-origin"),
        e
      );
    })(t);
    fetch(t.href, e);
  }
})();
var m = { exports: {} },
  x = {},
  h = r,
  p = Symbol.for("react.element"),
  u = Symbol.for("react.fragment"),
  g = Object.prototype.hasOwnProperty,
  y = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  v = { key: !0, ref: !0, __self: !0, __source: !0 };
function f(t, e, r) {
  var a,
    s = {},
    c = null,
    l = null;
  for (a in (void 0 !== r && (c = "" + r),
  void 0 !== e.key && (c = "" + e.key),
  void 0 !== e.ref && (l = e.ref),
  e))
    g.call(e, a) && !v.hasOwnProperty(a) && (s[a] = e[a]);
  if (t && t.defaultProps)
    for (a in (e = t.defaultProps)) void 0 === s[a] && (s[a] = e[a]);
  return { $$typeof: p, type: t, key: c, ref: l, props: s, _owner: y.current };
}
(x.Fragment = u), (x.jsx = f), (x.jsxs = f), (m.exports = x);
var j = m.exports,
  k = {},
  b = a;
(k.createRoot = b.createRoot), (k.hydrateRoot = b.hydrateRoot);
const w = {},
  N = function (t, e, r) {
    let a = Promise.resolve();
    if (e && e.length > 0) {
      document.getElementsByTagName("link");
      const t = document.querySelector("meta[property=csp-nonce]"),
        r =
          (null == t ? void 0 : t.nonce) ||
          (null == t ? void 0 : t.getAttribute("nonce"));
      a = Promise.allSettled(
        e.map((t) => {
          if (
            (t = (function (t) {
              return "/drt-explorer/" + t;
            })(t)) in w
          )
            return;
          w[t] = !0;
          const e = t.endsWith(".css"),
            a = e ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${t}"]${a}`)) return;
          const s = document.createElement("link");
          return (
            (s.rel = e ? "stylesheet" : "modulepreload"),
            e || (s.as = "script"),
            (s.crossOrigin = ""),
            (s.href = t),
            r && s.setAttribute("nonce", r),
            document.head.appendChild(s),
            e
              ? new Promise((e, r) => {
                  s.addEventListener("load", e),
                    s.addEventListener("error", () =>
                      r(new Error(`Unable to preload CSS for ${t}`))
                    );
                })
              : void 0
          );
        })
      );
    }
    function s(t) {
      const e = new Event("vite:preloadError", { cancelable: !0 });
      if (((e.payload = t), window.dispatchEvent(e), !e.defaultPrevented))
        throw t;
    }
    return a.then((e) => {
      for (const t of e || []) "rejected" === t.status && s(t.reason);
      return t().catch(s);
    });
  };
function z({ title: t, titleId: e, ...a }, s) {
  return r.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": e,
      },
      a
    ),
    t ? r.createElement("title", { id: e }, t) : null,
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    })
  );
}
const L = r.forwardRef(z);
function _({ title: t, titleId: e, ...a }, s) {
  return r.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": e,
      },
      a
    ),
    t ? r.createElement("title", { id: e }, t) : null,
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5",
    })
  );
}
const M = r.forwardRef(_);
function E({ title: t, titleId: e, ...a }, s) {
  return r.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": e,
      },
      a
    ),
    t ? r.createElement("title", { id: e }, t) : null,
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
    })
  );
}
const C = r.forwardRef(E);
function V({ title: t, titleId: e, ...a }, s) {
  return r.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": e,
      },
      a
    ),
    t ? r.createElement("title", { id: e }, t) : null,
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    })
  );
}
const B = r.forwardRef(V);
function S({ title: t, titleId: e, ...a }, s) {
  return r.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": e,
      },
      a
    ),
    t ? r.createElement("title", { id: e }, t) : null,
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z",
    })
  );
}
const H = r.forwardRef(S);
function A({ title: t, titleId: e, ...a }, s) {
  return r.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": e,
      },
      a
    ),
    t ? r.createElement("title", { id: e }, t) : null,
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
    })
  );
}
const T = r.forwardRef(A);
function O({ title: t, titleId: e, ...a }, s) {
  return r.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": e,
      },
      a
    ),
    t ? r.createElement("title", { id: e }, t) : null,
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18 18 6M6 6l12 12",
    })
  );
}
const R = r.forwardRef(O),
  D = r.createContext({ theme: "light", toggleTheme: () => {} }),
  I = ({ children: t }) => {
    const [e, a] = r.useState(() => {
      try {
        return localStorage.getItem("theme") || "light";
      } catch (t) {
        return "light";
      }
    });
    r.useEffect(() => {
      try {
        document.documentElement.classList.remove(
          "light-theme",
          "dim-theme",
          "dark-theme",
          "dark"
        ),
          document.body.classList.remove(
            "light-theme",
            "dim-theme",
            "dark-theme"
          ),
          document.documentElement.classList.add(`${e}-theme`),
          document.body.classList.add(`${e}-theme`),
          "dark" === e || "dim" === e
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark"),
          document.documentElement.className ||
            (document.documentElement.classList.add("light-theme"),
            document.body.classList.add("light-theme"));
        try {
          localStorage.setItem("theme", e);
        } catch (t) {}
      } catch (t) {}
    }, [e]);
    const c = (t) => {
        try {
          a(t);
        } catch (e) {}
      },
      l = s.useMemo(() => ({ theme: e, toggleTheme: c }), [e]);
    return j.jsx(D.Provider, { value: l, children: t });
  },
  P = () => {
    const t = r.useContext(D);
    return void 0 === t ? { theme: "light", toggleTheme: () => {} } : t;
  },
  W = () => {
    const [t, e] = r.useState(!1),
      [a, s] = r.useState(""),
      [o, i] = r.useState(!1),
      [d, m] = r.useState(!1),
      [x, h] = r.useState(!1),
      p = c(),
      u = l(),
      { theme: g, toggleTheme: y } = P(),
      v = (t) => u.pathname === t || u.pathname.startsWith(t + "/");
    r.useEffect(() => {
      const t = () => {
        window.scrollY > 10 ? i(!0) : i(!1);
      };
      return (
        window.addEventListener("scroll", t),
        () => {
          window.removeEventListener("scroll", t);
        }
      );
    }, []),
      r.useEffect(() => {
        const t = (t) => {
          d && !t.target.closest("#network-dropdown") && m(!1),
            x && !t.target.closest("#theme-dropdown") && h(!1);
        };
        return (
          document.addEventListener("mousedown", t),
          () => {
            document.removeEventListener("mousedown", t);
          }
        );
      }, [d, x]);
    const f = (t) => {
        if ((t.preventDefault(), !a.trim())) return;
        const e = a.trim();
        e.startsWith("0x") && e.length > 40
          ? p(`/transaction/${e}`)
          : e.startsWith("0x")
          ? p(`/account/${e}`)
          : isNaN(e)
          ? p(`/search?q=${encodeURIComponent(e)}`)
          : p(`/block/${e}`),
          s("");
      },
      k = () =>
        "light" === g
          ? j.jsx(T, { className: "h-5 w-5" })
          : "dim" === g
          ? j.jsx(C, { className: "h-5 w-5" })
          : "dark" === g
          ? j.jsx(H, { className: "h-5 w-5" })
          : j.jsx(C, { className: "h-5 w-5" });
    return j.jsx("nav", {
      className:
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (o
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md"
          : "bg-white dark:bg-black"),
      children: j.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          j.jsxs("div", {
            className: "flex justify-between items-center py-4",
            children: [
              j.jsxs(n, {
                to: "/",
                className: "flex items-center space-x-2",
                children: [
                  j.jsx("img", {
                    src: "./drt-logo.png",
                    alt: "Dharitri Explorer",
                    className: "h-8 w-auto",
                    onError: (t) => {
                      (t.target.onerror = null),
                        (t.target.src =
                          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%2310b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>');
                    },
                  }),
                  j.jsx("span", {
                    className:
                      "text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text",
                    children: "Explorer",
                  }),
                ],
              }),
              j.jsxs("div", {
                className: "hidden md:flex items-center space-x-1",
                children: [
                  j.jsx(n, {
                    to: "/",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "Dashboard",
                  }),
                  j.jsx(n, {
                    to: "/blocks",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/blocks")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "Blocks",
                  }),
                  j.jsx(n, {
                    to: "/transactions",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/transactions")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "Transactions",
                  }),
                  j.jsx(n, {
                    to: "/accounts",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/accounts")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "Accounts",
                  }),
                  j.jsx(n, {
                    to: "/apps",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/apps")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "Apps",
                  }),
                  j.jsx(n, {
                    to: "/tokens",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/tokens")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "Tokens",
                  }),
                  j.jsx(n, {
                    to: "/nfts",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/nfts")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "NFTs",
                  }),
                  j.jsx(n, {
                    to: "/validators",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/validators")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "Validators",
                  }),
                  j.jsx(n, {
                    to: "/statistics",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/statistics")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "Statistics",
                  }),
                  j.jsx(n, {
                    to: "/analytics",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " +
                      (v("/analytics")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"),
                    children: "Analytics",
                  }),
                ],
              }),
              j.jsxs("div", {
                className: "hidden md:flex items-center gap-3",
                children: [
                  j.jsxs("form", {
                    onSubmit: f,
                    className: "relative",
                    children: [
                      j.jsx("input", {
                        type: "text",
                        placeholder:
                          "Search by Address / Txn Hash / Block / Token",
                        className:
                          "w-72 py-2 pl-10 pr-4 rounded-full bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary",
                        value: a,
                        onChange: (t) => s(t.target.value),
                      }),
                      j.jsx("button", {
                        type: "submit",
                        className:
                          "absolute inset-y-0 left-0 pl-3 flex items-center",
                        children: j.jsx(B, {
                          className: "h-5 w-5 text-gray-500 dark:text-gray-400",
                        }),
                      }),
                    ],
                  }),
                  j.jsxs("div", {
                    className: "relative",
                    id: "network-dropdown",
                    children: [
                      j.jsxs("button", {
                        onClick: () => m(!d),
                        className:
                          "flex items-center px-3 py-2 rounded-full bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900",
                        children: [
                          j.jsxs("span", {
                            className: "flex items-center",
                            children: [
                              j.jsx("span", {
                                className:
                                  "h-2 w-2 rounded-full bg-green-500 mr-2",
                              }),
                              "Mainnet",
                            ],
                          }),
                          j.jsx(M, { className: "h-4 w-4 ml-2" }),
                        ],
                      }),
                      d &&
                        j.jsxs("div", {
                          className:
                            "absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-black ring-1 ring-black ring-opacity-5",
                          children: [
                            j.jsx("a", {
                              href: "#",
                              className:
                                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900",
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsx("span", {
                                    className:
                                      "h-2 w-2 rounded-full bg-green-500 mr-2",
                                  }),
                                  "Mainnet",
                                ],
                              }),
                            }),
                            j.jsx("a", {
                              href: "#",
                              className:
                                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900",
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsx("span", {
                                    className:
                                      "h-2 w-2 rounded-full bg-purple-500 mr-2",
                                  }),
                                  "Testnet",
                                ],
                              }),
                            }),
                            j.jsx("a", {
                              href: "#",
                              className:
                                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900",
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsx("span", {
                                    className:
                                      "h-2 w-2 rounded-full bg-blue-500 mr-2",
                                  }),
                                  "Devnet",
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  j.jsxs("div", {
                    className: "relative",
                    id: "theme-dropdown",
                    children: [
                      j.jsx("button", {
                        onClick: () => h(!x),
                        className:
                          "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors",
                        "aria-label": "Toggle theme",
                        children: j.jsx(k, {}),
                      }),
                      x &&
                        j.jsxs("div", {
                          className:
                            "absolute right-0 mt-2 w-48 rounded-md shadow-lg py-2 bg-white dark:bg-black ring-1 ring-black ring-opacity-5 z-50 border border-gray-200 dark:border-gray-800",
                          children: [
                            j.jsx("div", {
                              className:
                                "px-3 py-1 text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold",
                              children: "Appearance",
                            }),
                            j.jsx("button", {
                              onClick: () => {
                                y("light"), h(!1);
                              },
                              className:
                                "w-full text-left block px-4 py-2 text-sm " +
                                ("light" === g
                                  ? "text-primary font-medium"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"),
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsx(T, { className: "h-4 w-4 mr-3" }),
                                  "Light",
                                  "light" === g &&
                                    j.jsx("span", {
                                      className: "ml-auto",
                                      children: j.jsx("svg", {
                                        className: "h-4 w-4 text-primary",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: j.jsx("path", {
                                          fillRule: "evenodd",
                                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            j.jsx("button", {
                              onClick: () => {
                                y("dim"), h(!1);
                              },
                              className:
                                "w-full text-left block px-4 py-2 text-sm " +
                                ("dim" === g
                                  ? "text-primary font-medium"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"),
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsx(C, { className: "h-4 w-4 mr-3" }),
                                  "Dim",
                                  "dim" === g &&
                                    j.jsx("span", {
                                      className: "ml-auto",
                                      children: j.jsx("svg", {
                                        className: "h-4 w-4 text-primary",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: j.jsx("path", {
                                          fillRule: "evenodd",
                                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            j.jsx("button", {
                              onClick: () => {
                                y("dark"), h(!1);
                              },
                              className:
                                "w-full text-left block px-4 py-2 text-sm " +
                                ("dark" === g
                                  ? "text-primary font-medium"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"),
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsx(H, { className: "h-4 w-4 mr-3" }),
                                  "Dark",
                                  "dark" === g &&
                                    j.jsx("span", {
                                      className: "ml-auto",
                                      children: j.jsx("svg", {
                                        className: "h-4 w-4 text-primary",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: j.jsx("path", {
                                          fillRule: "evenodd",
                                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            j.jsx("div", {
                              className:
                                "border-t border-gray-200 dark:border-gray-800 my-1",
                            }),
                            j.jsx("button", {
                              onClick: () => h(!1),
                              className:
                                "w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900",
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsxs("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-4 w-4 mr-3",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: [
                                      j.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                                      }),
                                      j.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                      }),
                                    ],
                                  }),
                                  "Site Settings",
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              j.jsxs("div", {
                className: "md:hidden flex items-center space-x-2",
                children: [
                  j.jsxs("div", {
                    className: "relative",
                    id: "mobile-theme-dropdown",
                    children: [
                      j.jsx("button", {
                        onClick: () => h(!x),
                        className:
                          "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors",
                        "aria-label": "Toggle theme",
                        children: j.jsx(k, {}),
                      }),
                      x &&
                        j.jsxs("div", {
                          className:
                            "absolute right-0 mt-2 w-48 rounded-md shadow-lg py-2 bg-white dark:bg-black ring-1 ring-black ring-opacity-5 z-50",
                          children: [
                            j.jsx("div", {
                              className:
                                "px-3 py-1 text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold",
                              children: "Appearance",
                            }),
                            j.jsx("button", {
                              onClick: () => {
                                y("light"), h(!1);
                              },
                              className:
                                "w-full text-left block px-4 py-2 text-sm " +
                                ("light" === g
                                  ? "text-primary font-medium"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"),
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsx(T, { className: "h-4 w-4 mr-3" }),
                                  "Light",
                                  "light" === g &&
                                    j.jsx("span", {
                                      className: "ml-auto",
                                      children: j.jsx("svg", {
                                        className: "h-4 w-4 text-primary",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: j.jsx("path", {
                                          fillRule: "evenodd",
                                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            j.jsx("button", {
                              onClick: () => {
                                y("dim"), h(!1);
                              },
                              className:
                                "w-full text-left block px-4 py-2 text-sm " +
                                ("dim" === g
                                  ? "text-primary font-medium"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"),
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsx(C, { className: "h-4 w-4 mr-3" }),
                                  "Dim",
                                  "dim" === g &&
                                    j.jsx("span", {
                                      className: "ml-auto",
                                      children: j.jsx("svg", {
                                        className: "h-4 w-4 text-primary",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: j.jsx("path", {
                                          fillRule: "evenodd",
                                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            j.jsx("button", {
                              onClick: () => {
                                y("dark"), h(!1);
                              },
                              className:
                                "w-full text-left block px-4 py-2 text-sm " +
                                ("dark" === g
                                  ? "text-primary font-medium"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"),
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsx(H, { className: "h-4 w-4 mr-3" }),
                                  "Dark",
                                  "dark" === g &&
                                    j.jsx("span", {
                                      className: "ml-auto",
                                      children: j.jsx("svg", {
                                        className: "h-4 w-4 text-primary",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: j.jsx("path", {
                                          fillRule: "evenodd",
                                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            j.jsx("div", {
                              className:
                                "border-t border-gray-200 dark:border-gray-800 my-1",
                            }),
                            j.jsx("button", {
                              onClick: () => h(!1),
                              className:
                                "w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900",
                              children: j.jsxs("span", {
                                className: "flex items-center",
                                children: [
                                  j.jsxs("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-4 w-4 mr-3",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: [
                                      j.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                                      }),
                                      j.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                      }),
                                    ],
                                  }),
                                  "Site Settings",
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  j.jsx("button", {
                    onClick: () => e(!t),
                    className:
                      "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary focus:outline-none",
                    children: t
                      ? j.jsx(R, { className: "h-6 w-6" })
                      : j.jsx(L, { className: "h-6 w-6" }),
                  }),
                ],
              }),
            ],
          }),
          j.jsx("div", {
            className: "md:hidden pb-4",
            children: j.jsxs("form", {
              onSubmit: f,
              className: "relative",
              children: [
                j.jsx("input", {
                  type: "text",
                  placeholder: "Search...",
                  className:
                    "w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary",
                  value: a,
                  onChange: (t) => s(t.target.value),
                }),
                j.jsx("button", {
                  type: "submit",
                  className: "absolute inset-y-0 left-0 pl-3 flex items-center",
                  children: j.jsx(B, {
                    className: "h-5 w-5 text-gray-500 dark:text-gray-400",
                  }),
                }),
              ],
            }),
          }),
          t &&
            j.jsx("div", {
              className:
                "md:hidden py-4 border-t border-gray-200 dark:border-gray-800",
              children: j.jsxs("div", {
                className: "flex flex-col space-y-2",
                children: [
                  j.jsx(n, {
                    to: "/",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "Dashboard",
                  }),
                  j.jsx(n, {
                    to: "/blocks",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/blocks")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "Blocks",
                  }),
                  j.jsx(n, {
                    to: "/transactions",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/transactions")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "Transactions",
                  }),
                  j.jsx(n, {
                    to: "/accounts",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/accounts")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "Accounts",
                  }),
                  j.jsx(n, {
                    to: "/apps",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/apps")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "Apps",
                  }),
                  j.jsx(n, {
                    to: "/tokens",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/tokens")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "Tokens",
                  }),
                  j.jsx(n, {
                    to: "/nfts",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/nfts")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "NFTs",
                  }),
                  j.jsx(n, {
                    to: "/validators",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/validators")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "Validators",
                  }),
                  j.jsx(n, {
                    to: "/statistics",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/statistics")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "Statistics",
                  }),
                  j.jsx(n, {
                    to: "/analytics",
                    className:
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                      (v("/analytics")
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"),
                    onClick: () => e(!1),
                    children: "Analytics",
                  }),
                  j.jsxs("div", {
                    className:
                      "px-3 py-2 border-t border-gray-200 dark:border-gray-700 mt-2 pt-2",
                    children: [
                      j.jsx("div", {
                        className:
                          "text-sm text-gray-500 dark:text-gray-400 mb-2",
                        children: "Network",
                      }),
                      j.jsxs("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                          j.jsxs("a", {
                            href: "#",
                            className:
                              "flex items-center rounded-md py-1 px-2 bg-gray-100 dark:bg-gray-800",
                            children: [
                              j.jsx("span", {
                                className:
                                  "h-2 w-2 rounded-full bg-green-500 mr-2",
                              }),
                              "Mainnet",
                            ],
                          }),
                          j.jsxs("a", {
                            href: "#",
                            className: "flex items-center rounded-md py-1 px-2",
                            children: [
                              j.jsx("span", {
                                className:
                                  "h-2 w-2 rounded-full bg-purple-500 mr-2",
                              }),
                              "Testnet",
                            ],
                          }),
                          j.jsxs("a", {
                            href: "#",
                            className: "flex items-center rounded-md py-1 px-2",
                            children: [
                              j.jsx("span", {
                                className:
                                  "h-2 w-2 rounded-full bg-blue-500 mr-2",
                              }),
                              "Devnet",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      }),
    });
  };
var $ = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  F = s.createContext && s.createContext($),
  Z = function () {
    return (
      (Z =
        Object.assign ||
        function (t) {
          for (var e, r = 1, a = arguments.length; r < a; r++)
            for (var s in (e = arguments[r]))
              Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
          return t;
        }),
      Z.apply(this, arguments)
    );
  };
function J(t) {
  return (
    t &&
    t.map(function (t, e) {
      return s.createElement(t.tag, Z({ key: e }, t.attr), J(t.child));
    })
  );
}
function q(t) {
  return function (e) {
    return s.createElement(U, Z({ attr: Z({}, t.attr) }, e), J(t.child));
  };
}
function U(t) {
  var e = function (e) {
    var r,
      a = t.attr,
      c = t.size,
      l = t.title,
      n = (function (t, e) {
        var r = {};
        for (var a in t)
          Object.prototype.hasOwnProperty.call(t, a) &&
            e.indexOf(a) < 0 &&
            (r[a] = t[a]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var s = 0;
          for (a = Object.getOwnPropertySymbols(t); s < a.length; s++)
            e.indexOf(a[s]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, a[s]) &&
              (r[a[s]] = t[a[s]]);
        }
        return r;
      })(t, ["attr", "size", "title"]),
      o = c || e.size || "1em";
    return (
      e.className && (r = e.className),
      t.className && (r = (r ? r + " " : "") + t.className),
      s.createElement(
        "svg",
        Z(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          e.attr,
          a,
          n,
          {
            className: r,
            style: Z(Z({ color: t.color || e.color }, e.style), t.style),
            height: o,
            width: o,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        l && s.createElement("title", null, l),
        t.children
      )
    );
  };
  return void 0 !== F
    ? s.createElement(F.Consumer, null, function (t) {
        return e(t);
      })
    : e($);
}
function Y(t) {
  return q({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z",
        },
      },
    ],
  })(t);
}
function G(t) {
  return q({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z",
        },
      },
    ],
  })(t);
}
function K(t) {
  return q({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
      },
    ],
  })(t);
}
function Q(t) {
  return q({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z",
        },
      },
    ],
  })(t);
}
function X(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
      },
    ],
  })(t);
}
function tt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z",
        },
      },
    ],
  })(t);
}
function et(t) {
  return q({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z",
        },
      },
    ],
  })(t);
}
function rt(t) {
  return q({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",
        },
      },
    ],
  })(t);
}
function at(t) {
  return q({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
      },
    ],
  })(t);
}
function st(t) {
  return q({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z",
        },
      },
    ],
  })(t);
}
function ct(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z",
        },
      },
    ],
  })(t);
}
function lt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",
        },
      },
    ],
  })(t);
}
function nt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
        },
      },
    ],
  })(t);
}
function ot(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
        },
      },
    ],
  })(t);
}
function it(t) {
  return q({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
        },
      },
    ],
  })(t);
}
function dt(t) {
  return q({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
        },
      },
    ],
  })(t);
}
function mt(t) {
  return q({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
        },
      },
    ],
  })(t);
}
function xt(t) {
  return q({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z",
        },
      },
    ],
  })(t);
}
function ht(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        },
      },
    ],
  })(t);
}
function pt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z",
        },
      },
    ],
  })(t);
}
function ut(t) {
  return q({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z",
        },
      },
    ],
  })(t);
}
function gt(t) {
  return q({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z",
        },
      },
    ],
  })(t);
}
function yt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z",
        },
      },
    ],
  })(t);
}
function vt(t) {
  return q({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",
        },
      },
    ],
  })(t);
}
function ft(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z",
        },
      },
    ],
  })(t);
}
function jt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",
        },
      },
    ],
  })(t);
}
function kt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
        },
      },
    ],
  })(t);
}
function bt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z",
        },
      },
    ],
  })(t);
}
function wt(t) {
  return q({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
        },
      },
    ],
  })(t);
}
function Nt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",
        },
      },
    ],
  })(t);
}
function zt(t) {
  return q({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z",
        },
      },
    ],
  })(t);
}
function Lt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",
        },
      },
    ],
  })(t);
}
function _t(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z",
        },
      },
    ],
  })(t);
}
function Mt(t) {
  return q({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z",
        },
      },
    ],
  })(t);
}
function Et(t) {
  return q({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
        },
      },
    ],
  })(t);
}
function Ct(t) {
  return q({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z",
        },
      },
    ],
  })(t);
}
function Vt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
        },
      },
    ],
  })(t);
}
function Bt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z",
        },
      },
    ],
  })(t);
}
function St(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
      },
    ],
  })(t);
}
function Ht(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z",
        },
      },
    ],
  })(t);
}
function At(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z",
        },
      },
    ],
  })(t);
}
function Tt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",
        },
      },
    ],
  })(t);
}
function Ot(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",
        },
      },
    ],
  })(t);
}
function Rt(t) {
  return q({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z",
        },
      },
    ],
  })(t);
}
function Dt(t) {
  return q({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z",
        },
      },
    ],
  })(t);
}
function It(t) {
  return q({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z",
        },
      },
    ],
  })(t);
}
function Pt(t) {
  return q({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
        },
      },
    ],
  })(t);
}
function Wt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z",
        },
      },
    ],
  })(t);
}
function $t(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",
        },
      },
    ],
  })(t);
}
function Ft(t) {
  return q({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z",
        },
      },
    ],
  })(t);
}
function Zt(t) {
  return q({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
        },
      },
    ],
  })(t);
}
function Jt(t) {
  return q({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        },
      },
    ],
  })(t);
}
function qt(t) {
  return q({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
        },
      },
    ],
  })(t);
}
function Ut(t) {
  return q({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z",
        },
      },
    ],
  })(t);
}
const Yt = () => {
  const { theme: t } = P(),
    e = new Date().getFullYear(),
    r = [
      {
        name: "Twitter",
        icon: j.jsx(X, {}),
        url: "https://twitter.com/dharitri",
      },
      {
        name: "GitHub",
        icon: j.jsx(K, {}),
        url: "https://github.com/TerraDharitri",
      },
      { name: "Telegram", icon: j.jsx(Q, {}), url: "https://t.me/dharitri" },
      {
        name: "Discord",
        icon: j.jsx(Y, {}),
        url: "https://discord.gg/dharitri",
      },
    ];
  return j.jsx("footer", {
    className:
      "bg-gray-50 dark:bg-gray-900 pt-12 pb-6 border-t border-gray-200 dark:border-gray-800",
    children: j.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        j.jsxs("div", {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",
          children: [
            j.jsxs("div", {
              children: [
                j.jsxs("div", {
                  className: "flex items-center mb-4",
                  children: [
                    j.jsx("img", {
                      src: "./drt-logo.png",
                      alt: "Dharitri Logo",
                      className: "h-8 w-auto mr-2",
                      onError: (t) => {
                        (t.target.onerror = null),
                          (t.target.src =
                            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%2310b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>');
                      },
                    }),
                    j.jsx("span", {
                      className:
                        "text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text",
                      children: "Explorer",
                    }),
                  ],
                }),
                j.jsx("p", {
                  className: "text-gray-600 dark:text-gray-400 text-sm mb-4",
                  children:
                    "Explore the Dharitri blockchain with real-time data, charts and analytics.",
                }),
                j.jsx("div", {
                  className: "flex space-x-4",
                  children: r.map((t) =>
                    j.jsx(
                      "a",
                      {
                        href: t.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors",
                        "aria-label": t.name,
                        children: t.icon,
                      },
                      t.name
                    )
                  ),
                }),
              ],
            }),
            j.jsxs("div", {
              children: [
                j.jsx("h3", {
                  className: "text-gray-900 dark:text-white font-semibold mb-4",
                  children: "Explore",
                }),
                j.jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "Dashboard",
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/blocks",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "Blocks",
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/transactions",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "Transactions",
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/accounts",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "Accounts",
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/apps",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "Apps",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            j.jsxs("div", {
              children: [
                j.jsx("h3", {
                  className: "text-gray-900 dark:text-white font-semibold mb-4",
                  children: "Resources",
                }),
                j.jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/tokens",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "Tokens",
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/nfts",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "NFTs",
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/validators",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "Validators",
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/statistics",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "Statistics",
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsx(n, {
                        to: "/analytics",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors",
                        children: "Analytics",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            j.jsxs("div", {
              children: [
                j.jsx("h3", {
                  className: "text-gray-900 dark:text-white font-semibold mb-4",
                  children: "Developers",
                }),
                j.jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    j.jsx("li", {
                      children: j.jsxs("a", {
                        href: "https://docs.dharitri.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors flex items-center",
                        children: [
                          j.jsx("span", { children: "Documentation" }),
                          j.jsx(Nt, { className: "ml-1 h-3 w-3" }),
                        ],
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsxs("a", {
                        href: "https://github.com/TerraDharitri",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors flex items-center",
                        children: [
                          j.jsx("span", { children: "GitHub" }),
                          j.jsx(Nt, { className: "ml-1 h-3 w-3" }),
                        ],
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsxs("a", {
                        href: "https://dharitri.com/sdk",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors flex items-center",
                        children: [
                          j.jsx("span", { children: "SDK" }),
                          j.jsx(Nt, { className: "ml-1 h-3 w-3" }),
                        ],
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsxs("a", {
                        href: "https://dharitri.com/api",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors flex items-center",
                        children: [
                          j.jsx("span", { children: "API" }),
                          j.jsx(Nt, { className: "ml-1 h-3 w-3" }),
                        ],
                      }),
                    }),
                    j.jsx("li", {
                      children: j.jsxs("a", {
                        href: "mailto:supporrt@dharitri.org",
                        className:
                          "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors flex items-center",
                        children: [
                          j.jsx(kt, { className: "mr-2" }),
                          j.jsx("span", { children: "supporrt@dharitri.org" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        j.jsxs("div", {
          className:
            "border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center",
          children: [
            j.jsxs("p", {
              className: "text-sm text-gray-600 dark:text-gray-400",
              children: ["© ", e, " Dharitri Explorer. All rights reserved."],
            }),
            j.jsxs("div", {
              className: "flex items-center mt-4 md:mt-0 space-x-4",
              children: [
                j.jsxs("span", {
                  className:
                    "text-xs text-gray-500 dark:text-gray-500 flex items-center",
                  children: [
                    j.jsx(gt, { className: "mr-1" }),
                    " Built with ❤️ by the Dharitri Team",
                  ],
                }),
                j.jsx("div", {
                  className: "flex items-center",
                  children: j.jsxs("span", {
                    className:
                      "flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                    children: [
                      j.jsx("span", {
                        className: "h-2 w-2 rounded-full bg-green-500 mr-2",
                      }),
                      "Mainnet",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
class Gt extends r.Component {
  constructor(t) {
    super(t),
      e(this, "resetErrorBoundary", () => {
        this.setState({
          hasError: !1,
          error: null,
          errorInfo: null,
          timestamp: null,
        });
      }),
      (this.state = {
        hasError: !1,
        error: null,
        errorInfo: null,
        timestamp: null,
      });
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, e) {
    const r = new Date().toISOString();
    this.setState({ error: t, errorInfo: e, timestamp: r });
    try {
      const e = JSON.parse(
        localStorage.getItem("dharitri_explorer_errors") || "[]"
      );
      e.push({
        timestamp: r,
        message: t.toString(),
        url: window.location.href,
        stack: t.stack,
        userAgent: navigator.userAgent,
      }),
        e.length > 5 && e.shift(),
        localStorage.setItem("dharitri_explorer_errors", JSON.stringify(e));
    } catch (a) {}
  }
  render() {
    return this.state.hasError
      ? j.jsx("div", {
          className: "container mx-auto px-4 py-16 max-w-4xl",
          children: j.jsxs("div", {
            className: "flex flex-col items-center justify-center text-center",
            children: [
              j.jsx("div", {
                className:
                  "bg-red-100 dark:bg-red-900/20 p-6 rounded-full mb-4",
                children: j.jsx(wt, {
                  className: "text-red-500 dark:text-red-400 text-6xl",
                }),
              }),
              j.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "Something Went Wrong",
              }),
              j.jsx("p", {
                className: "text-xl text-gray-600 dark:text-gray-400 mb-6",
                children:
                  "We apologize for the inconvenience. The issue has been logged and we'll look into it.",
              }),
              !1,
              j.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4",
                children: [
                  j.jsxs("button", {
                    onClick: () => window.location.reload(),
                    className:
                      "flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors",
                    children: [
                      j.jsx(Wt, { className: "mr-2" }),
                      " Reload Page",
                    ],
                  }),
                  j.jsxs(n, {
                    to: "/",
                    className:
                      "flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors",
                    onClick: this.resetErrorBoundary,
                    children: [
                      j.jsx(Et, { className: "mr-2" }),
                      " Return Home",
                    ],
                  }),
                ],
              }),
              j.jsxs("div", {
                className: "mt-8 max-w-xl",
                children: [
                  j.jsx("h2", {
                    className: "text-lg font-semibold mb-2",
                    children: "Troubleshooting Tips",
                  }),
                  j.jsxs("ul", {
                    className:
                      "text-left list-disc list-inside text-gray-600 dark:text-gray-400",
                    children: [
                      j.jsx("li", { children: "Try refreshing the page" }),
                      j.jsx("li", {
                        children: "Clear your browser cache and cookies",
                      }),
                      j.jsx("li", {
                        children: "Try using a different browser",
                      }),
                      j.jsx("li", {
                        children: "Check your internet connection",
                      }),
                      j.jsx("li", {
                        children: "Come back later if the problem persists",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
const Kt = () =>
    j.jsx("div", {
      className: "flex justify-center items-center h-screen",
      children: j.jsx("div", {
        className:
          "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary",
      }),
    }),
  Qt = r.lazy(() =>
    N(() => import("./Home-yCrTzk16.js"), __vite__mapDeps([0, 1, 2, 3, 4]))
  ),
  Xt = r.lazy(() =>
    N(
      () => import("./Transactions-B6hFJp_t.js"),
      __vite__mapDeps([5, 1, 6, 2, 7, 3])
    )
  ),
  te = r.lazy(() =>
    N(
      () => import("./TransactionDetails-DzSJb0Jk.js"),
      __vite__mapDeps([8, 1, 7, 3, 6, 2])
    )
  ),
  ee = r.lazy(() =>
    N(() => import("./Blocks-vicTz66P.js"), __vite__mapDeps([9, 1, 3]))
  ),
  re = r.lazy(() =>
    N(() => import("./BlockDetails-B_4tWA0Y.js"), __vite__mapDeps([10, 1, 3]))
  ),
  ae = r.lazy(() =>
    N(() => import("./Accounts-DDjYdliO.js"), __vite__mapDeps([11, 1, 3]))
  ),
  se = r.lazy(() =>
    N(() => import("./AccountDetails-7dFF6jcE.js"), __vite__mapDeps([12, 1, 3]))
  ),
  ce = r.lazy(() =>
    N(() => import("./Validators-CJx3hEmN.js"), __vite__mapDeps([13, 1, 3]))
  ),
  le = r.lazy(() =>
    N(() => import("./Tokens-B-UYec2k.js"), __vite__mapDeps([14, 1, 3]))
  ),
  ne = r.lazy(() =>
    N(
      () => import("./TokenDetails-xQXIUWUH.js"),
      __vite__mapDeps([15, 1, 7, 3, 4])
    )
  ),
  oe = r.lazy(() =>
    N(() => import("./Statistics-DcWwqFv4.js"), __vite__mapDeps([16, 1, 3]))
  ),
  ie = r.lazy(() =>
    N(() => import("./Analytics-D0RUR08d.js"), __vite__mapDeps([17, 1, 4, 3]))
  ),
  de = r.lazy(() =>
    N(
      () => import("./SearchResults-CQj-VI9P.js"),
      __vite__mapDeps([18, 1, 7, 3])
    )
  ),
  me = r.lazy(() =>
    N(() => import("./NFTs-CWxJFsZe.js"), __vite__mapDeps([19, 1, 7, 3]))
  ),
  xe = r.lazy(() =>
    N(() => import("./NFTDetails-BhP8ztdN.js"), __vite__mapDeps([20, 1, 4]))
  ),
  he = r.lazy(() =>
    N(() => import("./Apps-BI0k42Hj.js"), __vite__mapDeps([21, 1, 7]))
  ),
  pe = r.lazy(() =>
    N(() => import("./AppDetails-KSkzwlYg.js"), __vite__mapDeps([22, 1, 4]))
  ),
  ue = r.lazy(() =>
    N(() => import("./NotFound-BG4t8zTp.js"), __vite__mapDeps([23, 1]))
  );
function ge() {
  return j.jsx(o, {
    children: j.jsx(I, {
      children: j.jsx(Gt, {
        children: j.jsxs("div", {
          className: "flex flex-col min-h-screen",
          children: [
            j.jsx(W, {}),
            j.jsx("main", {
              className: "flex-grow pt-16",
              children: j.jsx(r.Suspense, {
                fallback: j.jsx(Kt, {}),
                children: j.jsxs(i, {
                  children: [
                    j.jsx(d, { path: "/", element: j.jsx(Qt, {}) }),
                    j.jsx(d, { path: "/transactions", element: j.jsx(Xt, {}) }),
                    j.jsx(d, {
                      path: "/transaction/:txHash",
                      element: j.jsx(te, {}),
                    }),
                    j.jsx(d, { path: "/blocks", element: j.jsx(ee, {}) }),
                    j.jsx(d, {
                      path: "/block/:blockId",
                      element: j.jsx(re, {}),
                    }),
                    j.jsx(d, { path: "/accounts", element: j.jsx(ae, {}) }),
                    j.jsx(d, {
                      path: "/account/:address",
                      element: j.jsx(se, {}),
                    }),
                    j.jsx(d, { path: "/validators", element: j.jsx(ce, {}) }),
                    j.jsx(d, { path: "/tokens", element: j.jsx(le, {}) }),
                    j.jsx(d, {
                      path: "/token/:tokenId",
                      element: j.jsx(ne, {}),
                    }),
                    j.jsx(d, { path: "/nfts", element: j.jsx(me, {}) }),
                    j.jsx(d, { path: "/nft/:nftId", element: j.jsx(xe, {}) }),
                    j.jsx(d, { path: "/apps", element: j.jsx(he, {}) }),
                    j.jsx(d, { path: "/app/:appId", element: j.jsx(pe, {}) }),
                    j.jsx(d, { path: "/statistics", element: j.jsx(oe, {}) }),
                    j.jsx(d, { path: "/analytics", element: j.jsx(ie, {}) }),
                    j.jsx(d, { path: "/search", element: j.jsx(de, {}) }),
                    j.jsx(d, { path: "*", element: j.jsx(ue, {}) }),
                  ],
                }),
              }),
            }),
            j.jsx(Yt, {}),
          ],
        }),
      }),
    }),
  });
}
(() => {
  window.addEventListener("error", (e) => {
    t("uncaught_error", e.error), e.preventDefault();
  }),
    window.addEventListener("unhandledrejection", (e) => {
      t("unhandled_promise", e.reason), e.preventDefault();
    });
  const t = (t, e) => {
    try {
      const r = JSON.parse(
        localStorage.getItem("dharitri_explorer_errors") || "[]"
      );
      r.push({
        type: t,
        timestamp: new Date().toISOString(),
        message: (null == e ? void 0 : e.message) || String(e),
        stack: null == e ? void 0 : e.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
        r.length > 10 && r.shift(),
        localStorage.setItem("dharitri_explorer_errors", JSON.stringify(r));
    } catch (r) {}
  };
})(),
  (() => {
    try {
      if ("undefined" == typeof localStorage) return;
      const e = "_test_dharitri_explorer";
      localStorage.setItem(e, "test"), localStorage.removeItem(e);
      try {
        const t = localStorage.getItem("dharitri_explorer_errors");
        t && JSON.parse(t);
      } catch (t) {
        localStorage.removeItem("dharitri_explorer_errors");
      }
    } catch (t) {}
  })(),
  (() => {
    try {
      const t = document.getElementById("root");
      if (!t)
        throw new Error("Root element not found - DOM might not be ready");
      k.createRoot(t).render(j.jsx(ge, {}));
    } catch (t) {
      const e = document.getElementById("root");
      e
        ? k
            .createRoot(e)
            .render(
              j.jsxs("div", {
                style: { padding: "40px", color: "red", textAlign: "center" },
                children: [
                  j.jsx("h1", { children: "Application Error" }),
                  j.jsx("p", {
                    children: "There was a problem loading the application.",
                  }),
                  j.jsxs("div", {
                    style: {
                      margin: "20px 0",
                      padding: "10px",
                      background: "#ffeeee",
                      borderRadius: "5px",
                      textAlign: "left",
                    },
                    children: [
                      j.jsxs("p", {
                        children: [
                          j.jsx("strong", { children: "Error:" }),
                          " ",
                          t.message,
                        ],
                      }),
                      t.stack &&
                        j.jsx("pre", {
                          style: {
                            whiteSpace: "pre-wrap",
                            fontSize: "12px",
                            marginTop: "10px",
                          },
                          children: t.stack,
                        }),
                    ],
                  }),
                  j.jsx("button", {
                    onClick: () => window.location.reload(),
                    style: {
                      padding: "10px 20px",
                      background: "#0066cc",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    },
                    children: "Reload Page",
                  }),
                ],
              })
            )
        : (document.body.innerHTML =
            '\n        <div style="padding: 40px; color: red; text-align: center">\n          <h1>Critical Error</h1>\n          <p>The application could not be loaded due to a critical error.</p>\n          <p>Please refresh the page or try again later.</p>\n        </div>\n      ');
    }
  })();
export {
  Et as $,
  Vt as A,
  xt as B,
  it as C,
  Ut as D,
  Ot as E,
  St as F,
  q as G,
  st as H,
  et as I,
  Ft as J,
  At as K,
  Bt as L,
  Wt as M,
  ht as N,
  It as O,
  Dt as P,
  Rt as Q,
  Nt as R,
  Jt as S,
  ct as T,
  Zt as U,
  rt as V,
  X as W,
  Y as X,
  Pt as Y,
  G as Z,
  K as _,
  jt as a,
  ft as b,
  bt as c,
  lt as d,
  at as e,
  yt as f,
  Ht as g,
  Mt as h,
  dt as i,
  j,
  mt as k,
  Lt as l,
  pt as m,
  Tt as n,
  wt as o,
  qt as p,
  ut as q,
  _t as r,
  zt as s,
  tt as t,
  gt as u,
  $t as v,
  Ct as w,
  nt as x,
  ot as y,
  vt as z,
};
