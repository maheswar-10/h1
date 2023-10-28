"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [866], {
        6604: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var o = n(828),
                a = n(85893),
                i = n(67294),
                c = n(26042),
                r = n(69396),
                l = n(31996),
                s = {
                    250: "duration-250",
                    300: "duration-300",
                    500: "duration-500",
                    700: "duration-700",
                    750: "duration-750"
                },
                u = {
                    fadeIn: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 !block",
                        enterTo: "opacity-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0"
                    },
                    slideFromBottom: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 translate-y-8",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-8"
                    },
                    slideFromRight: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 translate-x-8",
                        enterTo: "opacity-100 translate-x-0",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 translate-x-0",
                        leaveTo: "opacity-0 translate-x-8"
                    },
                    slideFromLeft: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 -translate-x-8",
                        enterTo: "opacity-100 translate-x-0",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 translate-x-0",
                        leaveTo: "opacity-0 -translate-x-8"
                    },
                    fadeAndGrow: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95"
                    },
                    zoomOut: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-105",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-105"
                    },
                    zoomIn: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95"
                    },
                    popUp: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-0",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-0"
                    },
                    none: {
                        enter: "",
                        enterFrom: "",
                        enterTo: "",
                        leave: "",
                        leaveFrom: "",
                        leaveTo: ""
                    }
                },
                d = function(e) {
                    var t, n = e.show,
                        o = void 0 === n || n,
                        d = (e.appear, e.children),
                        v = e.animation,
                        f = void 0 === v ? "none" : v,
                        h = e.duration,
                        m = void 0 === h ? 300 : h,
                        p = (e.asChild, e.unmount, e.style),
                        y = e.delay,
                        g = e.className,
                        w = (0, i.useState)(!1),
                        b = w[0],
                        x = w[1],
                        F = null !== (t = u[f]) && void 0 !== t ? t : u.none,
                        k = (0, r.Z)((0, c.Z)({}, F), {
                            enter: "".concat(F.enter, " ").concat(s[m], " ").concat(y ? "delay-".concat(y) : ""),
                            leave: "".concat(F.leave, " ").concat(s[m], " ").concat(y ? "delay-".concat(y) : "")
                        });
                    return (0, i.useEffect)((function() {
                        if (o) {
                            var e = setTimeout((function() {
                                return x(!0)
                            }), 150);
                            return function() {
                                e && clearTimeout(e)
                            }
                        }
                    }), [o]), (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: (0, l.AK)("transition-all", b ? "".concat(k.enter, " ").concat(k.enterTo) : "".concat(k.enter, " ").concat(k.enterFrom), g),
                            style: p,
                            children: d
                        })
                    })
                },
                v = n(42708),
                f = "default",
                h = "medium",
                m = "none",
                p = "medium";
            var y = {
                    slow: 750,
                    medium: 500,
                    fast: 250
                },
                g = function(e) {
                    var t = e.children,
                        n = e.settings,
                        c = e.globalSettings,
                        r = e.unmount,
                        l = void 0 !== r && r,
                        s = e.delay,
                        u = e.className,
                        g = e.style,
                        w = function(e, t) {
                            var n = e || {},
                                o = n.type,
                                a = void 0 === o ? f : o,
                                i = n.speed,
                                c = void 0 === i ? h : i;
                            return "default" === a && (a = (null === t || void 0 === t ? void 0 : t.type) || m, c = (null === t || void 0 === t ? void 0 : t.speed) || p), {
                                type: a,
                                speed: c
                            }
                        }(n, c),
                        b = w.type,
                        x = w.speed,
                        F = (0, i.useState)(!1),
                        k = F[0],
                        T = F[1],
                        C = (0, o.Z)((0, v.YD)({
                            triggerOnce: !0
                        }), 3),
                        L = C[0],
                        M = C[1];
                    C[2];
                    return (0, i.useEffect)((function() {
                        M && T(!0)
                    }), [M]), "none" === b ? (0, a.jsx)("div", {
                        className: u,
                        style: g,
                        children: t
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [!k && (0, a.jsx)("div", {
                            className: "absolute left-0 top-8 min-h-full min-w-full",
                            ref: L
                        }), (0, a.jsx)(d, {
                            show: k,
                            animation: b,
                            duration: y[x],
                            unmount: l,
                            disableLeave: !0,
                            delay: s,
                            className: u,
                            style: g,
                            children: t
                        })]
                    })
                }
        },
        60546: function(e, t, n) {
            n.d(t, {
                OC: function() {
                    return s
                }
            });
            var o = n(85893),
                a = n(67294),
                i = n(62246),
                c = n(4433),
                r = [{
                    id: "slantLeft",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0L-0 ").concat(t)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e, " ").concat(t)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(e, t) {
                        return "M0 0".concat(t, "L").concat(e / 2, " 0L").concat(e, " ").concat(t, "L").concat(1.5 * e, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e / 2, " ").concat(t, "L").concat(e, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(e, t) {
                        return "M0 0 C".concat(e / 2, " ").concat(t, " ").concat(e - e / 2, " ").concat(t, " ").concat(e, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, " C").concat(e / 2, " 0 ").concat(e - e / 2, " 0 ").concat(e, " ").concat(t)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(e, t) {
                        return "M0 0C0 0 ".concat(.2023 * e, " ").concat(t, " ").concat(.3333 * e, " ").concat(t, "C").concat(.4681 * e, " ").concat(t, " ").concat(.5318 * e, " 0 ").concat(.6667 * e, " 0C").concat(.8015 * e, " 0 ").concat(e, " ").concat(t, " ").concat(e, " ").concat(t)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0C").concat(e, " 0 ").concat(.8 * e, " ").concat(t, " ").concat(.666 * e, " ").concat(t, "C").concat(.547 * e, " ").concat(t, " ").concat(.483 * e, " 0 ").concat(.333 * e, " 0C").concat(.184 * e, " 0 -0.00012207 ").concat(t, " -0.00012207 ").concat(t)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e / 3, " ").concat(t, "L").concat(e / 1.5, " 0L").concat(e, " ").concat(t)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0L").concat(e / 1.5, " ").concat(t, "L").concat(e / 3, " 0L0 ").concat(t)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, "C").concat(e, " 0 ").concat(2 * e, " 0 ").concat(2 * e, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " ").concat(t, "C").concat(e / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, "H").concat(e)
                    }
                }],
                l = function(e) {
                    var t = e.width,
                        n = e.shape,
                        a = e.strokeWidth,
                        i = e.strokeColor,
                        l = e.strokeType,
                        s = r.find((function(e) {
                            return e.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        u = Math.floor(t),
                        d = "none" === s.id ? Math.floor(a) : Math.floor(u / c.c8),
                        v = s.getPath(u, d);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: u,
                        height: d,
                        viewBox: "0 0 ".concat(u, " ").concat(d),
                        children: (0, o.jsx)("path", {
                            d: v,
                            stroke: i,
                            strokeWidth: a,
                            strokeDasharray: "dashed" === l ? "40 20" : void 0
                        })
                    })
                },
                s = function(e) {
                    var t = e.border,
                        n = e.contentRef,
                        c = e.sectionDivider,
                        r = t || {},
                        s = r.type,
                        u = r.width,
                        d = r.color,
                        v = (0, a.useState)(0),
                        f = v[0],
                        h = v[1],
                        m = (0, a.useCallback)((function() {
                            var e;
                            h(null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0)
                        }), [n]);
                    return (0, i.Z)(m, t ? n : null), t ? (0, o.jsx)(l, {
                        width: f,
                        shape: c,
                        strokeType: s,
                        strokeWidth: u,
                        strokeColor: d
                    }) : null
                }
        },
        50866: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var o = n(26042),
                a = n(85893),
                i = n(31996),
                c = n(399),
                r = n(21123),
                l = n(67294),
                s = n(4433),
                u = n(60546),
                d = n(6604);

            function v(e) {
                var t = e.id,
                    n = e.website,
                    v = e.block,
                    f = e.previousBlock,
                    h = null === v || void 0 === v ? void 0 : v.content,
                    m = null === v || void 0 === v ? void 0 : v.align,
                    p = null === v || void 0 === v ? void 0 : v.animation,
                    y = null === n || void 0 === n ? void 0 : n.animation,
                    g = null === v || void 0 === v ? void 0 : v.divider,
                    w = null === v || void 0 === v ? void 0 : v.border,
                    b = (0, l.useRef)(null),
                    x = (0, l.useState)("#FFFFFF"),
                    F = x[0],
                    k = x[1],
                    T = (0, c.Z)(v).minHeight;
                return (0, a.jsxs)("section", {
                    className: "relative",
                    children: [(0, a.jsxs)("div", {
                        ref: b,
                        id: t,
                        className: (0, i.AK)("flex flex-none flex-shrink-0 relative break-word", (0, i.A2)((null === v || void 0 === v ? void 0 : v.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: T
                        }, (0, s.$h)(v)),
                        children: [(0, a.jsx)(r.Z, {
                            block: v,
                            website: n,
                            setTextColor: k
                        }), (0, a.jsx)("div", {
                            className: (0, i.AK)("relative z-10 container mx-auto", (0, i.bG)(null === v || void 0 === v ? void 0 : v.spacing)),
                            children: (0, a.jsx)(d.Z, {
                                settings: p,
                                globalSettings: y,
                                children: (0, a.jsx)("div", {
                                    className: (0, i.AK)("rich-text-block max-w-5xl", "text-".concat(m), "left" === m ? "ml-0 mr-auto" : "right" === m ? "ml-auto mr-0" : "mx-auto"),
                                    style: {
                                        color: F
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: h
                                    }
                                })
                            })
                        }), (0, a.jsx)(s.iz, {
                            previousDivider: null === f || void 0 === f ? void 0 : f.divider,
                            dividerUniqueId: "".concat(t, "-").concat(g),
                            divider: g,
                            contentRef: b
                        })]
                    }), w && (0, a.jsx)(u.OC, {
                        border: w,
                        sectionDivider: g,
                        contentRef: b
                    })]
                })
            }
        },
        399: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var o = n(67294);

            function a(e) {
                var t, n, a = (0, o.useState)(0),
                    i = a[0],
                    c = a[1],
                    r = (0, o.useState)([0, 0]),
                    l = r[0],
                    s = r[1];
                return (0, o.useEffect)((function() {
                    var e = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, o.useEffect)((function() {
                    var t;
                    e && c(1 === e.idx ? (null === (t = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === t ? void 0 : t.offsetHeight) || 80 : 0)
                }), [e, l]), {
                    minHeight: (null === e || void 0 === e || null === (t = e.spacing) || void 0 === t ? void 0 : t.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : i, "px)") : "134px",
                    headerHeight: i
                }
            }
        },
        42708: function(e, t, n) {
            n.d(t, {
                YD: function() {
                    return v
                }
            });
            var o = n(67294),
                a = Object.defineProperty,
                i = (e, t, n) => (((e, t, n) => {
                    t in e ? a(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                c = new Map,
                r = new WeakMap,
                l = 0,
                s = void 0;

            function u(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(r.has(n)||(l+=1,r.set(n,l.toString())),r.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function d(e, t, n = {}, o = s) {
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== o) {
                    const a = e.getBoundingClientRect();
                    return t(o, {
                        isIntersecting: o,
                        target: e,
                        intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: a,
                        intersectionRect: a,
                        rootBounds: a
                    }), () => {}
                }
                const {
                    id: a,
                    observer: i,
                    elements: r
                } = function(e) {
                    let t = u(e),
                        n = c.get(t);
                    if (!n) {
                        const o = new Map;
                        let a;
                        const i = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const i = t.isIntersecting && a.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = i), null == (n = o.get(t.target)) || n.forEach((e => {
                                    e(i, t)
                                }))
                            }))
                        }), e);
                        a = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: i,
                            elements: o
                        }, c.set(t, n)
                    }
                    return n
                }(n);
                let l = r.get(e) || [];
                return r.has(e) || r.set(e, l), l.push(t), i.observe(e),
                    function() {
                        l.splice(l.indexOf(t), 1), 0 === l.length && (r.delete(e), i.unobserve(e)), 0 === r.size && (i.disconnect(), c.delete(a))
                    }
            }
            o.Component;

            function v({
                threshold: e,
                delay: t,
                trackVisibility: n,
                rootMargin: a,
                root: i,
                triggerOnce: c,
                skip: r,
                initialInView: l,
                fallbackInView: s,
                onChange: u
            } = {}) {
                var v;
                const [f, h] = o.useState(null), m = o.useRef(), [p, y] = o.useState({
                    inView: !!l,
                    entry: void 0
                });
                m.current = u, o.useEffect((() => {
                    if (r || !f) return;
                    let o;
                    return o = d(f, ((e, t) => {
                        y({
                            inView: e,
                            entry: t
                        }), m.current && m.current(e, t), t.isIntersecting && c && o && (o(), o = void 0)
                    }), {
                        root: i,
                        rootMargin: a,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, s), () => {
                        o && o()
                    }
                }), [Array.isArray(e) ? e.toString() : e, f, i, a, c, r, n, s, t]);
                const g = null == (v = p.entry) ? void 0 : v.target,
                    w = o.useRef();
                f || !g || c || r || w.current === g || (w.current = g, y({
                    inView: !!l,
                    entry: void 0
                }));
                const b = [h, p.inView, p.entry];
                return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
            }
        }
    }
]);