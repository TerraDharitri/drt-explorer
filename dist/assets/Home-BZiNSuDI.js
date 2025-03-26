import {
  j as e,
  F as t,
  a as r,
  b as a,
  c as s,
  d as n,
  e as i,
  f as l,
  g as d,
  h as o,
} from "./index-DfoykQib.js";
import { g as c, r as x, u as m, L as h } from "./vendor-DKx09kD0.js";
import { L as g } from "./Loading-J9bENTsc.js";
import { f as u, s as p, t as f, a as y } from "./formatters-Qc2P36Ej.js";
import {
  L as b,
  C as j,
  a as k,
  b as v,
  P as N,
  c as w,
  p as S,
  d as V,
  i as E,
} from "./charts-DzQ2rSjN.js";
var T = {},
  C = function () {
    return (
      (C =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++)
            for (var s in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e;
        }),
      C.apply(this, arguments)
    );
  },
  A = (function () {
    function e(e, t, r) {
      var a = this;
      (this.endVal = t),
        (this.options = r),
        (this.version = "2.8.0"),
        (this.defaults = {
          startVal: 0,
          decimalPlaces: 0,
          duration: 2,
          useEasing: !0,
          useGrouping: !0,
          useIndianSeparators: !1,
          smartEasingThreshold: 999,
          smartEasingAmount: 333,
          separator: ",",
          decimal: ".",
          prefix: "",
          suffix: "",
          enableScrollSpy: !1,
          scrollSpyDelay: 200,
          scrollSpyOnce: !1,
        }),
        (this.finalEndVal = null),
        (this.useEasing = !0),
        (this.countDown = !1),
        (this.error = ""),
        (this.startVal = 0),
        (this.paused = !0),
        (this.once = !1),
        (this.count = function (e) {
          a.startTime || (a.startTime = e);
          var t = e - a.startTime;
          (a.remaining = a.duration - t),
            a.useEasing
              ? a.countDown
                ? (a.frameVal =
                    a.startVal -
                    a.easingFn(t, 0, a.startVal - a.endVal, a.duration))
                : (a.frameVal = a.easingFn(
                    t,
                    a.startVal,
                    a.endVal - a.startVal,
                    a.duration
                  ))
              : (a.frameVal =
                  a.startVal + (a.endVal - a.startVal) * (t / a.duration));
          var r = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
          (a.frameVal = r ? a.endVal : a.frameVal),
            (a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces))),
            a.printValue(a.frameVal),
            t < a.duration
              ? (a.rAF = requestAnimationFrame(a.count))
              : null !== a.finalEndVal
              ? a.update(a.finalEndVal)
              : a.options.onCompleteCallback && a.options.onCompleteCallback();
        }),
        (this.formatNumber = function (e) {
          var t,
            r,
            s,
            n,
            i = e < 0 ? "-" : "";
          t = Math.abs(e).toFixed(a.options.decimalPlaces);
          var l = (t += "").split(".");
          if (
            ((r = l[0]),
            (s = l.length > 1 ? a.options.decimal + l[1] : ""),
            a.options.useGrouping)
          ) {
            n = "";
            for (var d = 3, o = 0, c = 0, x = r.length; c < x; ++c)
              a.options.useIndianSeparators && 4 === c && ((d = 2), (o = 1)),
                0 !== c && o % d == 0 && (n = a.options.separator + n),
                o++,
                (n = r[x - c - 1] + n);
            r = n;
          }
          return (
            a.options.numerals &&
              a.options.numerals.length &&
              ((r = r.replace(/[0-9]/g, function (e) {
                return a.options.numerals[+e];
              })),
              (s = s.replace(/[0-9]/g, function (e) {
                return a.options.numerals[+e];
              }))),
            i + a.options.prefix + r + s + a.options.suffix
          );
        }),
        (this.easeOutExpo = function (e, t, r, a) {
          return (r * (1 - Math.pow(2, (-10 * e) / a)) * 1024) / 1023 + t;
        }),
        (this.options = C(C({}, this.defaults), r)),
        (this.formattingFn = this.options.formattingFn
          ? this.options.formattingFn
          : this.formatNumber),
        (this.easingFn = this.options.easingFn
          ? this.options.easingFn
          : this.easeOutExpo),
        (this.startVal = this.validateValue(this.options.startVal)),
        (this.frameVal = this.startVal),
        (this.endVal = this.validateValue(t)),
        (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
        this.resetDuration(),
        (this.options.separator = String(this.options.separator)),
        (this.useEasing = this.options.useEasing),
        "" === this.options.separator && (this.options.useGrouping = !1),
        (this.el = "string" == typeof e ? document.getElementById(e) : e),
        this.el
          ? this.printValue(this.startVal)
          : (this.error = "[CountUp] target is null or undefined"),
        "undefined" != typeof window &&
          this.options.enableScrollSpy &&
          (this.error ||
            ((window.onScrollFns = window.onScrollFns || []),
            window.onScrollFns.push(function () {
              return a.handleScroll(a);
            }),
            (window.onscroll = function () {
              window.onScrollFns.forEach(function (e) {
                return e();
              });
            }),
            this.handleScroll(this)));
    }
    return (
      (e.prototype.handleScroll = function (e) {
        if (e && window && !e.once) {
          var t = window.innerHeight + window.scrollY,
            r = e.el.getBoundingClientRect(),
            a = r.top + window.pageYOffset,
            s = r.top + r.height + window.pageYOffset;
          s < t && s > window.scrollY && e.paused
            ? ((e.paused = !1),
              setTimeout(function () {
                return e.start();
              }, e.options.scrollSpyDelay),
              e.options.scrollSpyOnce && (e.once = !0))
            : (window.scrollY > s || a > t) && !e.paused && e.reset();
        }
      }),
      (e.prototype.determineDirectionAndSmartEasing = function () {
        var e = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > e;
        var t = e - this.startVal;
        if (
          Math.abs(t) > this.options.smartEasingThreshold &&
          this.options.useEasing
        ) {
          this.finalEndVal = e;
          var r = this.countDown ? 1 : -1;
          (this.endVal = e + r * this.options.smartEasingAmount),
            (this.duration = this.duration / 2);
        } else (this.endVal = e), (this.finalEndVal = null);
        null !== this.finalEndVal
          ? (this.useEasing = !1)
          : (this.useEasing = this.options.useEasing);
      }),
      (e.prototype.start = function (e) {
        this.error ||
          (this.options.onStartCallback && this.options.onStartCallback(),
          e && (this.options.onCompleteCallback = e),
          this.duration > 0
            ? (this.determineDirectionAndSmartEasing(),
              (this.paused = !1),
              (this.rAF = requestAnimationFrame(this.count)))
            : this.printValue(this.endVal));
      }),
      (e.prototype.pauseResume = function () {
        this.paused
          ? ((this.startTime = null),
            (this.duration = this.remaining),
            (this.startVal = this.frameVal),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)))
          : cancelAnimationFrame(this.rAF),
          (this.paused = !this.paused);
      }),
      (e.prototype.reset = function () {
        cancelAnimationFrame(this.rAF),
          (this.paused = !0),
          this.resetDuration(),
          (this.startVal = this.validateValue(this.options.startVal)),
          (this.frameVal = this.startVal),
          this.printValue(this.startVal);
      }),
      (e.prototype.update = function (e) {
        cancelAnimationFrame(this.rAF),
          (this.startTime = null),
          (this.endVal = this.validateValue(e)),
          this.endVal !== this.frameVal &&
            ((this.startVal = this.frameVal),
            null == this.finalEndVal && this.resetDuration(),
            (this.finalEndVal = null),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)));
      }),
      (e.prototype.printValue = function (e) {
        var t;
        if (this.el) {
          var r = this.formattingFn(e);
          (
            null === (t = this.options.plugin) || void 0 === t
              ? void 0
              : t.render
          )
            ? this.options.plugin.render(this.el, r)
            : "INPUT" === this.el.tagName
            ? (this.el.value = r)
            : "text" === this.el.tagName || "tspan" === this.el.tagName
            ? (this.el.textContent = r)
            : (this.el.innerHTML = r);
        }
      }),
      (e.prototype.ensureNumber = function (e) {
        return "number" == typeof e && !isNaN(e);
      }),
      (e.prototype.validateValue = function (e) {
        var t = Number(e);
        return this.ensureNumber(t)
          ? t
          : ((this.error = "[CountUp] invalid start or end value: ".concat(e)),
            null);
      }),
      (e.prototype.resetDuration = function () {
        (this.startTime = null),
          (this.duration = 1e3 * Number(this.options.duration)),
          (this.remaining = this.duration);
      }),
      e
    );
  })();
const O = c(
  Object.freeze(
    Object.defineProperty({ __proto__: null, CountUp: A }, Symbol.toStringTag, {
      value: "Module",
    })
  )
);
Object.defineProperty(T, "__esModule", { value: !0 });
var D = x,
  M = O;
function F(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, a);
  }
  return r;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? F(Object(r), !0).forEach(function (t) {
          L(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : F(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function R(e) {
  var t = (function (e, t) {
    if ("object" != typeof e || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
      var a = r.call(e, t);
      if ("object" != typeof a) return a;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  })(e, "string");
  return "symbol" == typeof t ? t : String(t);
}
function L(e, t, r) {
  return (
    (t = R(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function B() {
  return (
    (B = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    B.apply(this, arguments)
  );
}
function W(e, t) {
  if (null == e) return {};
  var r,
    a,
    s = (function (e, t) {
      if (null == e) return {};
      var r,
        a,
        s = {},
        n = Object.keys(e);
      for (a = 0; a < n.length; a++)
        (r = n[a]), t.indexOf(r) >= 0 || (s[r] = e[r]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (a = 0; a < n.length; a++)
      (r = n[a]),
        t.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
  }
  return s;
}
function U(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var r =
        null == e
          ? null
          : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
      if (null != r) {
        var a,
          s,
          n,
          i,
          l = [],
          d = !0,
          o = !1;
        try {
          if (((n = (r = r.call(e)).next), 0 === t));
          else
            for (
              ;
              !(d = (a = n.call(r)).done) && (l.push(a.value), l.length !== t);
              d = !0
            );
        } catch (c) {
          (o = !0), (s = c);
        } finally {
          try {
            if (!d && null != r.return && ((i = r.return()), Object(i) !== i))
              return;
          } finally {
            if (o) throw s;
          }
        }
        return l;
      }
    })(e, t) ||
    (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return $(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if (
        "Arguments" === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return $(e, t);
    })(e, t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function $(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
var I =
  "undefined" != typeof window &&
  void 0 !== window.document &&
  void 0 !== window.document.createElement
    ? D.useLayoutEffect
    : D.useEffect;
function G(e) {
  var t = D.useRef(e);
  return (
    I(function () {
      t.current = e;
    }),
    D.useCallback(function () {
      for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
        r[a] = arguments[a];
      return t.current.apply(void 0, r);
    }, [])
  );
}
var H = [
    "ref",
    "startOnMount",
    "enableReinitialize",
    "delay",
    "onEnd",
    "onStart",
    "onPauseResume",
    "onReset",
    "onUpdate",
  ],
  z = {
    decimal: ".",
    separator: ",",
    delay: null,
    prefix: "",
    suffix: "",
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: !0,
    enableReinitialize: !0,
    useEasing: !0,
    useGrouping: !0,
    useIndianSeparators: !1,
  },
  X = function (e) {
    var t = Object.fromEntries(
        Object.entries(e).filter(function (e) {
          return void 0 !== U(e, 2)[1];
        })
      ),
      r = D.useMemo(
        function () {
          return P(P({}, z), t);
        },
        [e]
      ),
      a = r.ref,
      s = r.startOnMount,
      n = r.enableReinitialize,
      i = r.delay,
      l = r.onEnd,
      d = r.onStart,
      o = r.onPauseResume,
      c = r.onReset,
      x = r.onUpdate,
      m = W(r, H),
      h = D.useRef(),
      g = D.useRef(),
      u = D.useRef(!1),
      p = G(function () {
        return (function (e, t) {
          var r = t.decimal,
            a = t.decimals,
            s = t.duration,
            n = t.easingFn,
            i = t.end,
            l = t.formattingFn,
            d = t.numerals,
            o = t.prefix,
            c = t.separator,
            x = t.start,
            m = t.suffix,
            h = t.useEasing,
            g = t.useGrouping,
            u = t.useIndianSeparators,
            p = t.enableScrollSpy,
            f = t.scrollSpyDelay,
            y = t.scrollSpyOnce,
            b = t.plugin;
          return new M.CountUp(e, i, {
            startVal: x,
            duration: s,
            decimal: r,
            decimalPlaces: a,
            easingFn: n,
            formattingFn: l,
            numerals: d,
            separator: c,
            prefix: o,
            suffix: m,
            plugin: b,
            useEasing: h,
            useIndianSeparators: u,
            useGrouping: g,
            enableScrollSpy: p,
            scrollSpyDelay: f,
            scrollSpyOnce: y,
          });
        })("string" == typeof a ? a : a.current, m);
      }),
      f = G(function (e) {
        var t = h.current;
        if (t && !e) return t;
        var r = p();
        return (h.current = r), r;
      }),
      y = G(function () {
        var e = function () {
          return f(!0).start(function () {
            null == l || l({ pauseResume: b, reset: j, start: v, update: k });
          });
        };
        i && i > 0 ? (g.current = setTimeout(e, 1e3 * i)) : e(),
          null == d || d({ pauseResume: b, reset: j, update: k });
      }),
      b = G(function () {
        f().pauseResume(), null == o || o({ reset: j, start: v, update: k });
      }),
      j = G(function () {
        f().el &&
          (g.current && clearTimeout(g.current),
          f().reset(),
          null == c || c({ pauseResume: b, start: v, update: k }));
      }),
      k = G(function (e) {
        f().update(e), null == x || x({ pauseResume: b, reset: j, start: v });
      }),
      v = G(function () {
        j(), y();
      }),
      N = G(function (e) {
        s && (e && j(), y());
      });
    return (
      D.useEffect(
        function () {
          u.current ? n && N(!0) : ((u.current = !0), N());
        },
        [
          n,
          u,
          N,
          i,
          e.start,
          e.suffix,
          e.prefix,
          e.duration,
          e.separator,
          e.decimals,
          e.decimal,
          e.formattingFn,
        ]
      ),
      D.useEffect(
        function () {
          return function () {
            j();
          };
        },
        [j]
      ),
      { start: v, pauseResume: b, reset: j, update: k, getCountUp: f }
    );
  },
  Y = ["className", "redraw", "containerProps", "children", "style"];
(T.default = function (e) {
  var t = e.className,
    r = e.redraw,
    a = e.containerProps,
    s = e.children,
    n = e.style,
    i = W(e, Y),
    l = D.useRef(null),
    d = D.useRef(!1),
    o = X(
      P(
        P({}, i),
        {},
        {
          ref: l,
          startOnMount: "function" != typeof s || 0 === e.delay,
          enableReinitialize: !1,
        }
      )
    ),
    c = o.start,
    x = o.reset,
    m = o.update,
    h = o.pauseResume,
    g = o.getCountUp,
    u = G(function () {
      c();
    }),
    p = G(function (t) {
      e.preserveValue || x(), m(t);
    }),
    f = G(function () {
      ("function" != typeof e.children || l.current instanceof Element) && g();
    });
  D.useEffect(
    function () {
      f();
    },
    [f]
  ),
    D.useEffect(
      function () {
        d.current && p(e.end);
      },
      [e.end, p]
    );
  var y = r && e;
  return (
    D.useEffect(
      function () {
        r && d.current && u();
      },
      [u, r, y]
    ),
    D.useEffect(
      function () {
        !r && d.current && u();
      },
      [
        u,
        r,
        e.start,
        e.suffix,
        e.prefix,
        e.duration,
        e.separator,
        e.decimals,
        e.decimal,
        e.className,
        e.formattingFn,
      ]
    ),
    D.useEffect(function () {
      d.current = !0;
    }, []),
    "function" == typeof s
      ? s({
          countUpRef: l,
          start: c,
          reset: x,
          update: m,
          pauseResume: h,
          getCountUp: g,
        })
      : D.createElement(
          "span",
          B({ className: t, ref: l, style: n }, a),
          void 0 !== e.start ? g().formattingFn(e.start) : ""
        )
  );
}),
  (T.useCountUp = X),
  j.register(k, v, N, w, S, V, E);
const q = (e) =>
    null == e ? "0" : e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  _ = () => {
    const [c, j] = x.useState(null),
      [k, v] = x.useState([]),
      [N, w] = x.useState([]),
      [S, V] = x.useState([]),
      [E, T] = x.useState([]),
      [C, A] = x.useState(!0),
      [O, D] = x.useState(null),
      [M, F] = x.useState(""),
      P = m(),
      [R, L] = x.useState(14753e3),
      [B, W] = x.useState(504128649),
      [U, $] = x.useState(125e3),
      [I, G] = x.useState(125e4),
      [H, z] = x.useState(45e3),
      [X, Y] = x.useState(3200),
      [_, Q] = x.useState({ northAmerica: 1250, percentage: 39 }),
      [J, K] = x.useState({ current: 125, roundTime: 6, roundsLeft: 4320 }),
      [Z, ee] = x.useState({
        current: 38.42,
        change: 3.5,
        marketCap: 854e6,
        volume24h: 125e5,
        history: [
          32, 33, 32.5, 33.5, 34, 33.8, 34.2, 35, 34.8, 35.5, 36, 35.8, 36.5,
          37, 36.8, 37.2, 37.5, 37.3, 37.8, 38, 37.9, 38.2, 38.1, 38.3, 38.5,
          38.4, 38.6, 38.5, 38.7, 38.9,
        ],
      }),
      [te, re] = x.useState({
        total: 125e5,
        percentage: 62.5,
        circulatingSupply: 2e7,
        usersStaking: 8520,
        apr: 9.8,
        history: [
          11e6, 111e5, 112e5, 1125e4, 113e5, 1135e4, 114e5, 1145e4, 115e5,
          1155e4, 116e5, 1165e4, 117e5, 1175e4, 118e5, 1185e4, 119e5, 1195e4,
          12e6, 1205e4, 121e5, 1215e4, 122e5, 1225e4, 123e5, 1235e4, 124e5,
          1245e4, 125e5, 1255e4,
        ],
      }),
      [ae, se] = x.useState({
        rewards: 35e4,
        feesCaptured: 18e4,
        appsDeployed: 820,
      }),
      [ne, ie] = x.useState({
        total: 54328761,
        applications: 41328761,
        standard: 13e6,
        history: {
          labels: Array(30)
            .fill("")
            .map((e, t) => `Day ${t + 1}`),
          datasets: [
            {
              label: "Applications",
              data: [
                38e4, 39e4, 385e3, 4e5, 41e4, 405e3, 415e3, 42e4, 43e4, 425e3,
                435e3, 44e4, 445e3, 45e4, 445e3, 46e4, 465e3, 47e4, 475e3, 48e4,
                485e3, 49e4, 5e5, 505e3, 51e4, 515e3, 52e4, 525e3, 53e4, 54e4,
              ],
              borderColor: "#2dd4bf",
              backgroundColor: "rgba(45, 212, 191, 0.4)",
              fill: !0,
              borderWidth: 2,
              tension: 0.4,
            },
            {
              label: "Standard",
              data: [
                15e4, 155e3, 152e3, 158e3, 16e4, 162e3, 165e3, 168e3, 17e4,
                172e3, 175e3, 178e3, 18e4, 182e3, 185e3, 188e3, 19e4, 192e3,
                195e3, 198e3, 2e5, 202e3, 205e3, 208e3, 21e4, 212e3, 215e3,
                218e3, 22e4, 225e3,
              ],
              borderColor: "#818cf8",
              backgroundColor: "rgba(129, 140, 248, 0.4)",
              fill: !0,
              borderWidth: 2,
              tension: 0.4,
            },
          ],
        },
      }),
      [le, de] = x.useState("30d");
    x.useEffect(() => {}, [le]),
      x.useEffect(() => {
        (async () => {
          A(!0), D(null);
          try {
            await new Promise((e) => {
              setTimeout(() => {
                const t = Array(20)
                    .fill(0)
                    .map((e, t) => ({
                      hash: `0x${Math.random().toString(16).substring(2, 64)}`,
                      from: `erd1${Math.random()
                        .toString(16)
                        .substring(2, 40)}`,
                      to: `erd1${Math.random().toString(16).substring(2, 40)}`,
                      value: 1e3 * Math.random(),
                      fee: 0.01 * Math.random(),
                      timestamp: Math.floor(Date.now() / 1e3) - 60 * t,
                      status:
                        Math.random() > 0.1
                          ? "success"
                          : Math.random() > 0.5
                          ? "pending"
                          : "failed",
                    })),
                  r = Array(20)
                    .fill(0)
                    .map((e, t) => ({
                      hash: `0x${Math.random().toString(16).substring(2, 64)}`,
                      nonce: 5e6 - t,
                      shard: Math.floor(3 * Math.random()),
                      txCount: Math.floor(50 * Math.random()),
                      size: Math.floor(1e6 * Math.random()),
                      timestamp: Math.floor(Date.now() / 1e3) - 6 * t,
                    }));
                j({
                  price: 52.35,
                  priceChange: -2.1,
                  marketCap: 1235e6,
                  totalTransactions: 124578962,
                  blockHeight: 18436782,
                  activeValidators: 3200,
                  stakedValue: 0xd2b5cadfa4d2,
                  stakedPercent: 56.2,
                  tps: 1287,
                  accounts: 2184673,
                  activeAccounts24h: 47825,
                  apy: 12.45,
                  epochLength: "6d 2h 15m",
                  circulatingSupply: 24567890,
                  nfts: 123456,
                  smartContracts: 5487,
                }),
                  w(r),
                  v(t),
                  V([
                    {
                      rank: 1,
                      symbol: "REWA",
                      name: "Reward Token",
                      icon: "🪙",
                      totalTxns: 18834,
                    },
                    {
                      rank: 2,
                      symbol: "USDC",
                      name: "USD Coin",
                      icon: "💵",
                      totalTxns: 5614,
                    },
                    {
                      rank: 3,
                      symbol: "BNB",
                      name: "Binance Coin",
                      icon: "🪙",
                      totalTxns: 4775,
                    },
                    {
                      rank: 4,
                      symbol: "REWA",
                      name: "Dharitri REWA",
                      icon: "💎",
                      totalTxns: 2461,
                    },
                    {
                      rank: 5,
                      symbol: "MEX",
                      name: "Maiar Exchange Token",
                      icon: "🔄",
                      totalTxns: 1488,
                    },
                    {
                      rank: 6,
                      symbol: "ESDT",
                      name: "Elrond Standard Token",
                      icon: "🪙",
                      totalTxns: 1425,
                    },
                    {
                      rank: 7,
                      symbol: "HTM",
                      name: "Hatom Protocol",
                      icon: "🔶",
                      totalTxns: 1378,
                    },
                    {
                      rank: 8,
                      symbol: "ASH",
                      name: "Ashswap Token",
                      icon: "🔥",
                      totalTxns: 1353,
                    },
                    {
                      rank: 9,
                      symbol: "LPAD",
                      name: "Launchpad Token",
                      icon: "🚀",
                      totalTxns: 1317,
                    },
                    {
                      rank: 10,
                      symbol: "RIDE",
                      name: "Holoride Token",
                      icon: "🚗",
                      totalTxns: 1134,
                    },
                  ]),
                  T([
                    {
                      rank: 1,
                      name: "Cathena Items",
                      icon: "🎮",
                      items: 225702,
                      holders: 7855,
                      totalTxns: 761,
                    },
                    {
                      rank: 2,
                      name: "Portals Of Infinity",
                      icon: "🌀",
                      items: 17,
                      holders: 36537,
                      totalTxns: 435,
                    },
                    {
                      rank: 3,
                      name: "Portal Achievements",
                      icon: "🏆",
                      items: 15,
                      holders: 169889,
                      totalTxns: 409,
                    },
                    {
                      rank: 4,
                      name: "Wood",
                      icon: "🪵",
                      items: 1,
                      holders: 376,
                      totalTxns: 122,
                    },
                    {
                      rank: 5,
                      name: "Stone",
                      icon: "🪨",
                      items: 1,
                      holders: 219,
                      totalTxns: 122,
                    },
                    {
                      rank: 6,
                      name: "Wheat",
                      icon: "🌾",
                      items: 1,
                      holders: 284,
                      totalTxns: 118,
                    },
                    {
                      rank: 7,
                      name: "ELRONDAPESCLUB",
                      icon: "🐵",
                      items: 1e4,
                      holders: 1119,
                      totalTxns: 63,
                    },
                    {
                      rank: 8,
                      name: "MemeverseX Airdrop",
                      icon: "🪂",
                      items: 1,
                      holders: 10713,
                      totalTxns: 61,
                    },
                    {
                      rank: 9,
                      name: "xCastle",
                      icon: "🏰",
                      items: 67,
                      holders: 407,
                      totalTxns: 48,
                    },
                    {
                      rank: 10,
                      name: "MYSTERYBOX",
                      icon: "📦",
                      items: 5,
                      holders: 7752,
                      totalTxns: 48,
                    },
                  ]),
                  e();
              }, 800);
            });
          } catch (e) {
            D("Failed to load dashboard data. Please try refreshing the page."),
              j({
                price: 0,
                priceChange: 0,
                marketCap: 0,
                totalTransactions: 0,
                blockHeight: 0,
                activeValidators: 0,
                stakedValue: 0,
                stakedPercent: 0,
                tps: 0,
                accounts: 0,
                activeAccounts24h: 0,
                apy: 0,
                epochLength: "0d 0h 0m",
                circulatingSupply: 0,
                nfts: 0,
                smartContracts: 0,
              }),
              v([]),
              w([]),
              V([]),
              T([]);
          } finally {
            A(!1);
          }
        })();
      }, []);
    const oe = (e) => {
      if ("metachain" === e)
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      return (
        {
          0: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
          1: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
          2: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
        }[e] ||
        "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
      );
    };
    return C
      ? e.jsx("div", {
          className: "container mx-auto px-4 py-8",
          children: e.jsx(g, { className: "h-16 w-16 mx-auto my-20" }),
        })
      : O
      ? e.jsx("div", {
          className: "container mx-auto px-4 py-8",
          children: e.jsxs("div", {
            className:
              "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg mb-8",
            children: [
              O,
              e.jsx("button", {
                onClick: () => window.location.reload(),
                className: "ml-4 text-primary hover:underline",
                children: "Retry",
              }),
            ],
          }),
        })
      : c
      ? e.jsxs("div", {
          className: "container-custom py-8",
          children: [
            e.jsx("div", {
              className: "relative mb-10",
              children: e.jsxs("div", {
                className:
                  "bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-700 dark:to-teal-600 rounded-xl p-8 text-white",
                children: [
                  e.jsx("h1", {
                    className: "text-3xl font-bold mb-4",
                    children: "Dharitri Blockchain Explorer",
                  }),
                  e.jsx("p", {
                    className: "text-lg mb-6 max-w-2xl",
                    children:
                      "Explore transactions, blocks, accounts and smart contracts on the Dharitri blockchain.",
                  }),
                  e.jsxs("form", {
                    onSubmit: (e) => {
                      if ((e.preventDefault(), !M.trim())) return;
                      const t = M.trim();
                      t.startsWith("erd1") && t.length > 40
                        ? P(`/account/${t}`)
                        : t.startsWith("0x") || t.length >= 64
                        ? P(`/transaction/${t}`)
                        : isNaN(t)
                        ? P(`/search?q=${encodeURIComponent(t)}`)
                        : P(`/block/${t}`);
                    },
                    className: "relative max-w-3xl",
                    children: [
                      e.jsx("input", {
                        type: "text",
                        placeholder:
                          "Search by Address / Transaction / Block / Token",
                        className:
                          "w-full py-3 pl-12 pr-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50",
                        value: M,
                        onChange: (e) => F(e.target.value),
                      }),
                      e.jsx("button", {
                        type: "submit",
                        className:
                          "absolute inset-y-0 left-0 pl-3 flex items-center",
                        children: e.jsx(t, {
                          className: "h-6 w-6 text-white/70",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "container mx-auto px-4",
              children: C
                ? e.jsx("div", {
                    className: "flex justify-center py-16",
                    children: e.jsx("div", {
                      className:
                        "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary",
                    }),
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                        children: [
                          e.jsxs("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2",
                                children: "Block Height",
                              }),
                              e.jsx("div", {
                                className:
                                  "text-3xl font-bold text-gray-800 dark:text-teal-400",
                                children: q(R),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2",
                                children: "Total Transactions",
                              }),
                              e.jsx("div", {
                                className:
                                  "text-3xl font-bold text-gray-800 dark:text-teal-400",
                                children: q(B),
                              }),
                              e.jsx("div", {
                                className:
                                  "text-xs text-gray-500 dark:text-gray-400 mt-2",
                                children: e.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "h-2 w-2 bg-green-400 rounded-full",
                                    }),
                                    q(U),
                                    " today",
                                  ],
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2",
                                children: "Total Accounts",
                              }),
                              e.jsx("div", {
                                className:
                                  "text-3xl font-bold text-gray-800 dark:text-teal-400",
                                children: q(I),
                              }),
                              e.jsx("div", {
                                className:
                                  "text-xs text-gray-500 dark:text-gray-400 mt-2",
                                children: e.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "h-2 w-2 bg-green-400 rounded-full",
                                    }),
                                    q(H),
                                    " active today",
                                    e.jsx("span", {
                                      className:
                                        "ml-1 text-xs bg-teal-400 text-white rounded px-0.5",
                                      children: "1",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2",
                                children: "Validators",
                              }),
                              e.jsx("div", {
                                className:
                                  "text-3xl font-bold text-gray-800 dark:text-teal-400",
                                children: q(X),
                              }),
                              e.jsx("div", {
                                className:
                                  "text-xs text-gray-500 dark:text-gray-400 mt-2",
                                children: e.jsx("span", {
                                  className: "flex items-center gap-1",
                                  children: e.jsxs("span", {
                                    children: [
                                      "North America ",
                                      _.northAmerica,
                                      " nodes (",
                                      _.percentage,
                                      "%)",
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                        children: [
                          e.jsxs("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 relative overflow-hidden",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2",
                                children: "Current Price",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "text-3xl font-bold text-gray-800 dark:text-white",
                                    children: ["$", Z.current],
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-sm " +
                                      (Z.change >= 0
                                        ? "text-green-500"
                                        : "text-red-500"),
                                    children: [Z.change, "% today"],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "h-24 mt-4 mb-2",
                                children: e.jsx(b, {
                                  data: {
                                    labels: Array(30).fill(""),
                                    datasets: [
                                      {
                                        data: Z.history,
                                        borderColor: "#10b981",
                                        backgroundColor:
                                          "rgba(16, 185, 129, 0.1)",
                                        borderWidth: 2,
                                        tension: 0.4,
                                        fill: !0,
                                        pointRadius: 0,
                                      },
                                    ],
                                  },
                                  options: {
                                    responsive: !0,
                                    maintainAspectRatio: !1,
                                    plugins: {
                                      legend: { display: !1 },
                                      tooltip: { enabled: !1 },
                                    },
                                    scales: {
                                      x: { display: !1 },
                                      y: { display: !1 },
                                    },
                                  },
                                }),
                              }),
                              e.jsxs("div", {
                                className: "grid grid-cols-2 gap-4 mt-4",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-xs text-gray-500 dark:text-gray-400",
                                        children: "Market Cap",
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "text-sm text-gray-800 dark:text-white font-medium",
                                        children: ["$", q(Z.marketCap)],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-xs text-gray-500 dark:text-gray-400",
                                        children: "24h Volume",
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "text-sm text-gray-800 dark:text-white font-medium",
                                        children: ["$", q(Z.volume24h)],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 relative overflow-hidden",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2",
                                children: "Total Staked",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "text-3xl font-bold text-primary dark:text-teal-400",
                                    children: [q(te.total), " REWA"],
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-sm text-primary dark:text-teal-400",
                                    children: ["(", te.percentage, "%)"],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "h-24 mt-4 mb-2",
                                children: e.jsx(b, {
                                  data: {
                                    labels: Array(30).fill(""),
                                    datasets: [
                                      {
                                        data: te.history,
                                        borderColor: "#2dd4bf",
                                        backgroundColor:
                                          "rgba(45, 212, 191, 0.1)",
                                        borderWidth: 2,
                                        tension: 0.4,
                                        fill: !0,
                                        pointRadius: 0,
                                      },
                                    ],
                                  },
                                  options: {
                                    responsive: !0,
                                    maintainAspectRatio: !1,
                                    plugins: {
                                      legend: { display: !1 },
                                      tooltip: { enabled: !1 },
                                    },
                                    scales: {
                                      x: { display: !1 },
                                      y: { display: !1 },
                                    },
                                  },
                                }),
                              }),
                              e.jsxs("div", {
                                className: "grid grid-cols-3 gap-4 mt-4",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-xs text-gray-500 dark:text-gray-400",
                                        children: "Circulating Supply",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "text-sm text-gray-800 dark:text-white font-medium",
                                        children: q(te.circulatingSupply),
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-xs text-gray-500 dark:text-gray-400",
                                        children: "Users Staking",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "text-sm text-gray-800 dark:text-white font-medium",
                                        children: q(te.usersStaking),
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-xs text-gray-500 dark:text-gray-400",
                                        children: "Average APR",
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "text-sm text-gray-800 dark:text-white font-medium",
                                        children: [te.apr, "%"],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",
                            children: e.jsxs("div", {
                              className: "space-y-6",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("h3", {
                                      className:
                                        "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",
                                      children: "Developer Rewards",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "text-xl font-bold text-gray-800 dark:text-white",
                                      children: [q(ae.rewards), " REWA"],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("h3", {
                                      className:
                                        "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",
                                      children: "Fees Captured",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "text-xl font-bold text-gray-800 dark:text-white",
                                      children: [q(ae.feesCaptured), " REWA"],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("h3", {
                                      className:
                                        "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",
                                      children: "Applications Deployed",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-xl font-bold text-gray-800 dark:text-white",
                                      children: q(ae.appsDeployed),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-10",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex flex-col md:flex-row justify-between items-start md:items-center mb-6",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",
                                    children: "Total Transactions",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-2xl font-bold text-gray-800 dark:text-teal-400",
                                    children: q(ne.total),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mt-4 md:mt-0 inline-flex",
                                children: [
                                  e.jsx("button", {
                                    className:
                                      "px-3 py-1 text-sm rounded-md " +
                                      ("30d" === le
                                        ? "bg-white dark:bg-gray-700"
                                        : ""),
                                    onClick: () => de("30d"),
                                    children: "30d",
                                  }),
                                  e.jsx("button", {
                                    className:
                                      "px-3 py-1 text-sm rounded-md " +
                                      ("60d" === le
                                        ? "bg-white dark:bg-gray-700"
                                        : ""),
                                    onClick: () => de("60d"),
                                    children: "60d",
                                  }),
                                  e.jsx("button", {
                                    className:
                                      "px-3 py-1 text-sm rounded-md " +
                                      ("90d" === le
                                        ? "bg-white dark:bg-gray-700"
                                        : ""),
                                    onClick: () => de("90d"),
                                    children: "90d",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-4 mb-6",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h4", {
                                    className:
                                      "text-sm text-gray-500 dark:text-gray-400",
                                    children: "Applications",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-xl font-bold text-gray-800 dark:text-teal-400",
                                    children: q(ne.applications),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h4", {
                                    className:
                                      "text-sm text-gray-500 dark:text-gray-400",
                                    children: "Standard",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-xl font-bold text-gray-800 dark:text-indigo-400",
                                    children: q(ne.standard),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "h-64",
                            children: e.jsx(b, {
                              data: ne.history,
                              options: {
                                responsive: !0,
                                maintainAspectRatio: !1,
                                plugins: {
                                  legend: { display: !1 },
                                  tooltip: { mode: "index", intersect: !1 },
                                },
                                hover: { mode: "nearest", intersect: !1 },
                                scales: {
                                  x: { display: !1 },
                                  y: { display: !1, suggestedMin: 0 },
                                },
                              },
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black rounded-xl shadow-lg p-6 mb-10 overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-800",
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                              e.jsxs("h2", {
                                className:
                                  "text-xl font-bold text-gray-900 dark:text-white group flex items-center",
                                children: [
                                  "Most Used Applications",
                                  " ",
                                  e.jsx("span", {
                                    className:
                                      "text-gray-500 dark:text-gray-400 text-sm ml-2",
                                    children: "(daily)",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "w-2 h-2 bg-teal-400 rounded-full ml-3 animate-pulse",
                                  }),
                                ],
                              }),
                              e.jsxs(h, {
                                to: "/dashboard",
                                className:
                                  "bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm shadow-sm transition-all duration-200 hover:shadow-md flex items-center group",
                                children: [
                                  "Dashboard",
                                  e.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className:
                                      "h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: e.jsx("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M9 5l7 7-7 7",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex space-x-4 overflow-x-auto pb-4 scrollbar-hide -mx-1 px-1",
                            children: [
                              e.jsx("div", {
                                className:
                                  "flex-shrink-0 w-56 bg-white dark:bg-gray-800 hover:dark:bg-gray-750 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300",
                                children: e.jsxs("div", {
                                  className: "p-4",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between items-start mb-4",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-4xl font-bold text-gray-900 dark:text-white",
                                          children: "1",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-teal-500 dark:text-teal-400 text-sm font-medium",
                                          children: "15,482 Txn",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col items-center mt-4",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-24 h-24 bg-gray-100 dark:bg-black rounded-full flex items-center justify-center mb-3 shadow-inner",
                                          children: e.jsx("div", {
                                            className:
                                              "w-12 h-12 border-2 border-gray-900 dark:border-white rounded-full",
                                          }),
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "text-gray-900 dark:text-white font-medium text-center group-hover:text-primary",
                                          children: "Pulsar Money: Quests",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "flex-shrink-0 w-56 bg-white dark:bg-gray-800 hover:dark:bg-gray-750 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300",
                                children: e.jsxs("div", {
                                  className: "p-4",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between items-start mb-4",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-4xl font-bold text-gray-900 dark:text-white",
                                          children: "2",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-teal-500 dark:text-teal-400 text-sm font-medium",
                                          children: "14,643 Txn",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col items-center mt-4",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center mb-3 shadow-lg",
                                          children: e.jsx("span", {
                                            className: "text-4xl",
                                            children: "🐦",
                                          }),
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "text-gray-900 dark:text-white font-medium text-center",
                                          children: "Scratch Bot",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "flex-shrink-0 w-56 bg-white dark:bg-gray-800 hover:dark:bg-gray-750 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300",
                                children: e.jsxs("div", {
                                  className: "p-4",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between items-start mb-4",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-4xl font-bold text-gray-900 dark:text-white",
                                          children: "3",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-teal-500 dark:text-teal-400 text-sm font-medium",
                                          children: "6,806 Txn",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col items-center mt-4",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-24 h-24 bg-gray-100 dark:bg-black rounded-full flex items-center justify-center mb-3 shadow-inner",
                                          children: e.jsx("span", {
                                            className: "text-6xl text-teal-400",
                                            children: "x",
                                          }),
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "text-gray-900 dark:text-white font-medium text-center",
                                          children: "xPortal: Claim XP Shard 1",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "flex-shrink-0 w-56 bg-white dark:bg-gray-800 hover:dark:bg-gray-750 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300",
                                children: e.jsxs("div", {
                                  className: "p-4",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between items-start mb-4",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-4xl font-bold text-gray-900 dark:text-white",
                                          children: "4",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-teal-500 dark:text-teal-400 text-sm font-medium",
                                          children: "5,017 Txn",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col items-center mt-4",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-24 h-24 bg-gray-100 dark:bg-black rounded-full flex items-center justify-center mb-3 shadow-inner",
                                          children: e.jsx("span", {
                                            className: "text-6xl text-blue-400",
                                            children: "⚡",
                                          }),
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "text-gray-900 dark:text-white font-medium text-center",
                                          children: "xExchange: Fees Collector",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "flex-shrink-0 w-56 bg-white dark:bg-gray-800 hover:dark:bg-gray-750 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300",
                                children: e.jsxs("div", {
                                  className: "p-4",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between items-start mb-4",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-4xl font-bold text-gray-900 dark:text-white",
                                          children: "5",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-teal-500 dark:text-teal-400 text-sm font-medium",
                                          children: "4,890 Txn",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col items-center mt-4",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-24 h-24 bg-teal-400 rounded-full flex items-center justify-center mb-3 shadow-lg",
                                          children: e.jsx("span", {
                                            className: "text-4xl",
                                            children: "🦫",
                                          }),
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "text-gray-900 dark:text-white font-medium text-center",
                                          children: "BOBER: Flip",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "flex-shrink-0 w-56 bg-white dark:bg-gray-800 hover:dark:bg-gray-750 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300",
                                children: e.jsxs("div", {
                                  className: "p-4",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between items-start mb-4",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-4xl font-bold text-gray-900 dark:text-white",
                                          children: "6",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-teal-500 dark:text-teal-400 text-sm font-medium",
                                          children: "4,725 Txn",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col items-center mt-4",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-24 h-24 bg-gray-100 dark:bg-black rounded-full flex items-center justify-center mb-3 shadow-inner",
                                          children: e.jsx("span", {
                                            className: "text-5xl",
                                            children: "💱",
                                          }),
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "text-gray-900 dark:text-white font-medium text-center",
                                          children: "xExchange: MEX Liquidity",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex justify-end mt-4",
                            children: [
                              e.jsx("button", {
                                className:
                                  "w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md mr-2 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors",
                                children: e.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className:
                                    "h-5 w-5 text-gray-800 dark:text-gray-200",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: e.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7",
                                  }),
                                }),
                              }),
                              e.jsx("button", {
                                className:
                                  "w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors",
                                children: e.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className:
                                    "h-5 w-5 text-gray-800 dark:text-gray-200",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: e.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10",
                        children: [
                          e.jsxs("div", {
                            className:
                              "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-800",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800",
                                children: [
                                  e.jsxs("h2", {
                                    className:
                                      "text-xl font-bold text-gray-900 dark:text-white group flex items-center",
                                    children: [
                                      "Most Transacted NFTs",
                                      " ",
                                      e.jsx("span", {
                                        className:
                                          "text-gray-500 dark:text-gray-400 text-sm ml-2",
                                        children: "(Daily)",
                                      }),
                                    ],
                                  }),
                                  e.jsxs(h, {
                                    to: "/dashboard/nfts",
                                    className:
                                      "bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm shadow-sm transition-all duration-200 hover:shadow-md flex items-center group",
                                    children: [
                                      "View Dashboard",
                                      e.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className:
                                          "h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: e.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M9 5l7 7-7 7",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "overflow-x-auto",
                                children: e.jsxs("table", {
                                  className: "w-full",
                                  children: [
                                    e.jsx("thead", {
                                      children: e.jsxs("tr", {
                                        className:
                                          "bg-gray-50 dark:bg-gray-800 text-left",
                                        children: [
                                          e.jsx("th", {
                                            className:
                                              "py-3 px-6 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-16",
                                            children: "Rank",
                                          }),
                                          e.jsx("th", {
                                            className:
                                              "py-3 px-6 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                            children: "Token",
                                          }),
                                          e.jsx("th", {
                                            className:
                                              "py-3 px-6 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right",
                                            children: "Items",
                                          }),
                                          e.jsx("th", {
                                            className:
                                              "py-3 px-6 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right",
                                            children: "Holders",
                                          }),
                                          e.jsx("th", {
                                            className:
                                              "py-3 px-6 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right",
                                            children: "Total Txn",
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsxs("tbody", {
                                      className:
                                        "divide-y divide-gray-200 dark:divide-gray-700",
                                      children: [
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "1",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "🎮",
                                                    }),
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children: [
                                                      "CathenaItems",
                                                      " ",
                                                      e.jsxs("span", {
                                                        className:
                                                          "inline-flex ml-2 items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
                                                        children: [
                                                          e.jsx("span", {
                                                            className:
                                                              "h-1.5 w-1.5 rounded-full bg-yellow-400 mr-1",
                                                          }),
                                                          "Verified",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "225,826",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "7,868",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "986",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "2",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "🌀",
                                                    }),
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children: [
                                                      "Portals Of Infinity",
                                                      " ",
                                                      e.jsxs("span", {
                                                        className:
                                                          "inline-flex ml-2 items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
                                                        children: [
                                                          e.jsx("span", {
                                                            className:
                                                              "h-1.5 w-1.5 rounded-full bg-blue-400 mr-1",
                                                          }),
                                                          "Verified",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "17",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "36,537",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "435",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "3",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "🏆",
                                                    }),
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children:
                                                      "Portal Achievements",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "15",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "169,889",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "409",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "4",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-brown-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "🪵",
                                                    }),
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children: "Wood",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "1",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "376",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "122",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "5",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "🪨",
                                                    }),
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children: "Stone",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "1",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm text-gray-700 dark:text-gray-300",
                                              children: "219",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "122",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "bg-gray-50 dark:bg-gray-800/30 py-3 px-6 border-t border-gray-200 dark:border-gray-700",
                                children: e.jsxs(h, {
                                  to: "/nfts",
                                  className:
                                    "text-primary hover:text-primary-dark text-sm font-medium flex items-center",
                                  children: [
                                    "View All NFTs",
                                    e.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: "h-4 w-4 ml-1",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      children: e.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-800",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800",
                                children: [
                                  e.jsxs("h2", {
                                    className:
                                      "text-xl font-bold text-gray-900 dark:text-white group flex items-center",
                                    children: [
                                      "Most Transacted Tokens",
                                      " ",
                                      e.jsx("span", {
                                        className:
                                          "text-gray-500 dark:text-gray-400 text-sm ml-2",
                                        children: "(Daily)",
                                      }),
                                    ],
                                  }),
                                  e.jsxs(h, {
                                    to: "/dashboard/tokens",
                                    className:
                                      "bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm shadow-sm transition-all duration-200 hover:shadow-md flex items-center group",
                                    children: [
                                      "Dashboard",
                                      e.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className:
                                          "h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: e.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M9 5l7 7-7 7",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "overflow-x-auto",
                                children: e.jsxs("table", {
                                  className: "w-full",
                                  children: [
                                    e.jsx("thead", {
                                      children: e.jsxs("tr", {
                                        className:
                                          "bg-gray-50 dark:bg-gray-800 text-left",
                                        children: [
                                          e.jsx("th", {
                                            className:
                                              "py-3 px-6 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-16",
                                            children: "Rank",
                                          }),
                                          e.jsx("th", {
                                            className:
                                              "py-3 px-6 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                            children: "Token",
                                          }),
                                          e.jsx("th", {
                                            className:
                                              "py-3 px-6 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right",
                                            children: "Total Txn",
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsxs("tbody", {
                                      className:
                                        "divide-y divide-gray-200 dark:divide-gray-700",
                                      children: [
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "1",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "🪙",
                                                    }),
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children: [
                                                      "REWA",
                                                      " ",
                                                      e.jsxs("span", {
                                                        className:
                                                          "inline-flex ml-2 items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
                                                        children: [
                                                          e.jsx("span", {
                                                            className:
                                                              "h-1.5 w-1.5 rounded-full bg-blue-400 mr-1",
                                                          }),
                                                          "Verified",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "18,834",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "2",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "💵",
                                                    }),
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children: [
                                                      "USDC",
                                                      " ",
                                                      e.jsxs("span", {
                                                        className:
                                                          "inline-flex ml-2 items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
                                                        children: [
                                                          e.jsx("span", {
                                                            className:
                                                              "h-1.5 w-1.5 rounded-full bg-green-400 mr-1",
                                                          }),
                                                          "Verified",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "5,614",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "3",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "🪙",
                                                    }),
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children: "BNB",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "4,775",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "4",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "💎",
                                                    }),
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children: [
                                                      "REWA",
                                                      " ",
                                                      e.jsxs("span", {
                                                        className:
                                                          "inline-flex ml-2 items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300",
                                                        children: [
                                                          e.jsx("span", {
                                                            className:
                                                              "h-1.5 w-1.5 rounded-full bg-indigo-400 mr-1",
                                                          }),
                                                          "Verified",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "2,461",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("tr", {
                                          className:
                                            "hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center font-bold text-gray-900 dark:text-white",
                                              children: "5",
                                            }),
                                            e.jsx("td", {
                                              className: "px-6 py-4",
                                              children: e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex-shrink-0 h-8 w-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3",
                                                    children: e.jsx("span", {
                                                      className: "text-lg",
                                                      children: "🔄",
                                                    }),
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "font-medium text-gray-900 dark:text-white",
                                                    children: "MEX",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "px-6 py-4 text-right text-sm font-medium text-teal-500 dark:text-teal-400",
                                              children: "1,488",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "bg-gray-50 dark:bg-gray-800/30 py-3 px-6 border-t border-gray-200 dark:border-gray-700",
                                children: e.jsxs(h, {
                                  to: "/tokens",
                                  className:
                                    "text-primary hover:text-primary-dark text-sm font-medium flex items-center",
                                  children: [
                                    "View All Tokens",
                                    e.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: "h-4 w-4 ml-1",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      children: e.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10",
                        children: [
                          e.jsxs("div", {
                            className:
                              "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-800",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800",
                                children: [
                                  e.jsxs("h2", {
                                    className:
                                      "text-xl font-bold text-gray-900 dark:text-white group flex items-center",
                                    children: [
                                      e.jsx(r, {
                                        className:
                                          "mr-3 text-blue-500 dark:text-blue-400",
                                      }),
                                      "Latest Blocks",
                                      e.jsx("span", {
                                        className:
                                          "w-2 h-2 bg-blue-400 rounded-full ml-3 animate-pulse",
                                      }),
                                    ],
                                  }),
                                  e.jsxs(h, {
                                    to: "/blocks",
                                    className:
                                      "bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm shadow-sm transition-all duration-200 hover:shadow-md flex items-center group",
                                    children: [
                                      "View All",
                                      e.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className:
                                          "h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: e.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M9 5l7 7-7 7",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "overflow-x-auto divide-y divide-gray-200 dark:divide-gray-700",
                                children: N.slice(0, 5).map((t, r) =>
                                  e.jsx(
                                    "div",
                                    {
                                      className:
                                        "p-4 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                      children: e.jsxs("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          e.jsxs("div", {
                                            className: "flex items-center",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 shadow-sm",
                                                children: e.jsx(a, {
                                                  className:
                                                    "text-blue-500 dark:text-blue-400",
                                                }),
                                              }),
                                              e.jsxs("div", {
                                                children: [
                                                  e.jsxs(h, {
                                                    to: `/block/${t.nonce}`,
                                                    className:
                                                      "text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors",
                                                    children: ["#", u(t.nonce)],
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1",
                                                    children: [
                                                      e.jsx("div", {
                                                        className:
                                                          "truncate max-w-[120px] font-mono",
                                                        children: p(t.hash, 8),
                                                      }),
                                                      e.jsx("span", {
                                                        className: `ml-2 px-2 py-0.5 text-xs rounded-full ${oe(
                                                          t.shard
                                                        )}`,
                                                        children:
                                                          "metachain" ===
                                                          t.shard
                                                            ? "Metachain"
                                                            : `Shard ${t.shard}`,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className: "text-right",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center justify-end",
                                                children: [
                                                  e.jsxs("span", {
                                                    className:
                                                      "text-gray-700 dark:text-gray-300 text-sm font-medium mr-2",
                                                    children: [
                                                      u(t.txCount),
                                                      " txns",
                                                    ],
                                                  }),
                                                  e.jsxs("span", {
                                                    className:
                                                      "bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-400",
                                                    children: [u(t.size), " B"],
                                                  }),
                                                ],
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                children: f(t.timestamp),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    t.hash
                                  )
                                ),
                              }),
                              e.jsx("div", {
                                className:
                                  "bg-gray-50 dark:bg-gray-800/30 py-3 px-6 border-t border-gray-200 dark:border-gray-700",
                                children: e.jsxs(h, {
                                  to: "/blocks",
                                  className:
                                    "text-primary hover:text-primary-dark text-sm font-medium flex items-center",
                                  children: [
                                    "View All Blocks",
                                    e.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: "h-4 w-4 ml-1",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      children: e.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-800",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800",
                                children: [
                                  e.jsxs("h2", {
                                    className:
                                      "text-xl font-bold text-gray-900 dark:text-white group flex items-center",
                                    children: [
                                      e.jsx(s, {
                                        className:
                                          "mr-3 text-green-500 dark:text-green-400",
                                      }),
                                      "Latest Transactions",
                                      e.jsx("span", {
                                        className:
                                          "w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse",
                                      }),
                                    ],
                                  }),
                                  e.jsxs(h, {
                                    to: "/transactions",
                                    className:
                                      "bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm shadow-sm transition-all duration-200 hover:shadow-md flex items-center group",
                                    children: [
                                      "View All",
                                      e.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className:
                                          "h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: e.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M9 5l7 7-7 7",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "overflow-x-auto divide-y divide-gray-200 dark:divide-gray-700",
                                children: k.slice(0, 5).map((t) => {
                                  return e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "p-4 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center justify-between mb-2",
                                          children: [
                                            e.jsxs(h, {
                                              to: `/transaction/${t.hash}`,
                                              className:
                                                "flex items-center font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 shadow-sm",
                                                  children: e.jsx(s, {
                                                    className:
                                                      "text-green-500 dark:text-green-400",
                                                  }),
                                                }),
                                                e.jsx("div", {
                                                  className: "font-mono",
                                                  children: p(t.hash, 10),
                                                }),
                                              ],
                                            }),
                                            e.jsx("span", {
                                              className: `px-2 py-1 text-xs rounded-full ${
                                                ((r = t.status),
                                                {
                                                  success:
                                                    "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
                                                  pending:
                                                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
                                                  failed:
                                                    "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
                                                }[r] ||
                                                  "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200")
                                              }`,
                                              children: t.status,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "grid grid-cols-3 gap-2 text-sm pl-14",
                                          children: [
                                            e.jsxs("div", {
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "text-gray-500 dark:text-gray-400 text-xs",
                                                  children: "From",
                                                }),
                                                e.jsx(h, {
                                                  to: `/account/${t.from}`,
                                                  className:
                                                    "font-mono text-primary hover:underline truncate block",
                                                  children: p(t.from, 8),
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "text-gray-500 dark:text-gray-400 text-xs",
                                                  children: "To",
                                                }),
                                                e.jsx(h, {
                                                  to: `/account/${t.to}`,
                                                  className:
                                                    "font-mono text-primary hover:underline truncate block",
                                                  children: p(t.to, 8),
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className: "text-right",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "text-gray-500 dark:text-gray-400 text-xs",
                                                  children: "Value",
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "font-medium text-gray-800 dark:text-gray-200",
                                                  children: y(t.value),
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                  children: f(t.timestamp),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    t.hash
                                  );
                                  var r;
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "bg-gray-50 dark:bg-gray-800/30 py-3 px-6 border-t border-gray-200 dark:border-gray-700",
                                children: e.jsxs(h, {
                                  to: "/transactions",
                                  className:
                                    "text-primary hover:text-primary-dark text-sm font-medium flex items-center",
                                  children: [
                                    "View All Transactions",
                                    e.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: "h-4 w-4 ml-1",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      children: e.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                        children: [
                          e.jsxs("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center mb-4",
                                children: [
                                  e.jsx(n, {
                                    className: "text-primary mr-2 text-xl",
                                  }),
                                  e.jsx("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Statistics & Analytics",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-gray-600 dark:text-gray-400 mb-4",
                                children:
                                  "Explore detailed network statistics, charts, and analytics about the Dharitri ecosystem.",
                              }),
                              e.jsxs(h, {
                                to: "/analytics",
                                className:
                                  "inline-flex items-center text-primary hover:text-primary-dark",
                                children: [
                                  "View Analytics ",
                                  e.jsx(i, { className: "ml-2" }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center mb-4",
                                children: [
                                  e.jsx(l, {
                                    className: "text-primary mr-2 text-xl",
                                  }),
                                  e.jsx("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Tokens & NFTs",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-gray-600 dark:text-gray-400 mb-4",
                                children:
                                  "Browse and search all tokens and NFT collections on the Dharitri blockchain.",
                              }),
                              e.jsxs("div", {
                                className: "flex space-x-4",
                                children: [
                                  e.jsxs(h, {
                                    to: "/tokens",
                                    className:
                                      "inline-flex items-center text-primary hover:text-primary-dark",
                                    children: [
                                      "View Tokens ",
                                      e.jsx(i, { className: "ml-2" }),
                                    ],
                                  }),
                                  e.jsxs(h, {
                                    to: "/nfts",
                                    className:
                                      "inline-flex items-center text-primary hover:text-primary-dark",
                                    children: [
                                      "View NFTs ",
                                      e.jsx(i, { className: "ml-2" }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center mb-4",
                                children: [
                                  e.jsx(d, {
                                    className: "text-primary mr-2 text-xl",
                                  }),
                                  e.jsx("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Validators & Staking",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-gray-600 dark:text-gray-400 mb-4",
                                children:
                                  "Explore validators securing the Dharitri network and staking statistics.",
                              }),
                              e.jsxs(h, {
                                to: "/validators",
                                className:
                                  "inline-flex items-center text-primary hover:text-primary-dark",
                                children: [
                                  "View Validators ",
                                  e.jsx(i, { className: "ml-2" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
            e.jsxs("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-8",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("h3", {
                      className: "text-lg font-semibold mb-4 flex items-center",
                      children: [
                        e.jsx(o, { className: "mr-2 text-primary" }),
                        "Explorer Resources",
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm text-gray-600 dark:text-gray-400 mb-4",
                      children:
                        "The Explorer is your window into the Dharitri blockchain. Use it to track transactions, view blocks, and learn more about the Dharitri ecosystem.",
                    }),
                    e.jsxs(h, {
                      to: "/statistics",
                      className:
                        "text-primary hover:underline text-sm flex items-center",
                      children: [
                        "View Network Statistics",
                        e.jsx(i, { className: "ml-1 text-xs" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("h3", {
                      className: "text-lg font-semibold mb-4 flex items-center",
                      children: [
                        e.jsx(r, { className: "mr-2 text-primary" }),
                        "About Blocks",
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm text-gray-600 dark:text-gray-400 mb-4",
                      children:
                        "Blocks are the fundamental units that make up the Dharitri blockchain.",
                    }),
                    e.jsxs(h, {
                      to: "/blocks",
                      className:
                        "text-primary hover:underline text-sm flex items-center",
                      children: [
                        "Explore Blocks",
                        e.jsx(i, { className: "ml-1 text-xs" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("h3", {
                      className: "text-lg font-semibold mb-4 flex items-center",
                      children: [
                        e.jsx(s, { className: "mr-2 text-primary" }),
                        "About Transactions",
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm text-gray-600 dark:text-gray-400 mb-4",
                      children:
                        "Transactions record transfers of REWA and other tokens, smart contract interactions, and other operations.",
                    }),
                    e.jsxs(h, {
                      to: "/transactions",
                      className:
                        "text-primary hover:underline text-sm flex items-center",
                      children: [
                        "Explore Transactions",
                        e.jsx(i, { className: "ml-1 text-xs" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("h3", {
                      className: "text-lg font-semibold mb-4 flex items-center",
                      children: [
                        e.jsx(d, { className: "mr-2 text-primary" }),
                        "About Validators",
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm text-gray-600 dark:text-gray-400 mb-4",
                      children:
                        "Explore validators securing the Dharitri network and staking statistics.",
                    }),
                    e.jsxs(h, {
                      to: "/validators",
                      className:
                        "text-primary hover:underline text-sm flex items-center",
                      children: [
                        "View Validators",
                        e.jsx(i, { className: "ml-1 text-xs" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : e.jsx("div", {
          className: "container mx-auto px-4 py-8",
          children: e.jsxs("div", {
            className:
              "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 p-4 rounded-lg mb-8",
            children: [
              "No dashboard data available. Please try again later.",
              e.jsx("button", {
                onClick: () => window.location.reload(),
                className: "ml-4 text-primary hover:underline",
                children: "Retry",
              }),
            ],
          }),
        });
  };
export { _ as default };
