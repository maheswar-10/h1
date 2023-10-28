"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3509], {
        6604: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return y
                }
            });
            var o = n(828),
                i = n(85893),
                a = n(67294),
                l = n(26042),
                r = n(69396),
                c = n(31996),
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
                        m = void 0 === v ? "none" : v,
                        f = e.duration,
                        h = void 0 === f ? 300 : f,
                        g = (e.asChild, e.unmount, e.style),
                        p = e.delay,
                        y = e.className,
                        x = (0, a.useState)(!1),
                        b = x[0],
                        w = x[1],
                        k = null !== (t = u[m]) && void 0 !== t ? t : u.none,
                        C = (0, r.Z)((0, l.Z)({}, k), {
                            enter: "".concat(k.enter, " ").concat(s[h], " ").concat(p ? "delay-".concat(p) : ""),
                            leave: "".concat(k.leave, " ").concat(s[h], " ").concat(p ? "delay-".concat(p) : "")
                        });
                    return (0, a.useEffect)((function() {
                        if (o) {
                            var e = setTimeout((function() {
                                return w(!0)
                            }), 150);
                            return function() {
                                e && clearTimeout(e)
                            }
                        }
                    }), [o]), (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("div", {
                            className: (0, c.AK)("transition-all", b ? "".concat(C.enter, " ").concat(C.enterTo) : "".concat(C.enter, " ").concat(C.enterFrom), y),
                            style: g,
                            children: d
                        })
                    })
                },
                v = n(42708),
                m = "default",
                f = "medium",
                h = "none",
                g = "medium";
            var p = {
                    slow: 750,
                    medium: 500,
                    fast: 250
                },
                y = function(e) {
                    var t = e.children,
                        n = e.settings,
                        l = e.globalSettings,
                        r = e.unmount,
                        c = void 0 !== r && r,
                        s = e.delay,
                        u = e.className,
                        y = e.style,
                        x = function(e, t) {
                            var n = e || {},
                                o = n.type,
                                i = void 0 === o ? m : o,
                                a = n.speed,
                                l = void 0 === a ? f : a;
                            return "default" === i && (i = (null === t || void 0 === t ? void 0 : t.type) || h, l = (null === t || void 0 === t ? void 0 : t.speed) || g), {
                                type: i,
                                speed: l
                            }
                        }(n, l),
                        b = x.type,
                        w = x.speed,
                        k = (0, a.useState)(!1),
                        C = k[0],
                        j = k[1],
                        F = (0, o.Z)((0, v.YD)({
                            triggerOnce: !0
                        }), 3),
                        S = F[0],
                        M = F[1];
                    F[2];
                    return (0, a.useEffect)((function() {
                        M && j(!0)
                    }), [M]), "none" === b ? (0, i.jsx)("div", {
                        className: u,
                        style: y,
                        children: t
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [!C && (0, i.jsx)("div", {
                            className: "absolute left-0 top-8 min-h-full min-w-full",
                            ref: S
                        }), (0, i.jsx)(d, {
                            show: C,
                            animation: b,
                            duration: p[w],
                            unmount: c,
                            disableLeave: !0,
                            delay: s,
                            className: u,
                            style: y,
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
                i = n(67294),
                a = n(62246),
                l = n(4433),
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
                c = function(e) {
                    var t = e.width,
                        n = e.shape,
                        i = e.strokeWidth,
                        a = e.strokeColor,
                        c = e.strokeType,
                        s = r.find((function(e) {
                            return e.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        u = Math.floor(t),
                        d = "none" === s.id ? Math.floor(i) : Math.floor(u / l.c8),
                        v = s.getPath(u, d);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: u,
                        height: d,
                        viewBox: "0 0 ".concat(u, " ").concat(d),
                        children: (0, o.jsx)("path", {
                            d: v,
                            stroke: a,
                            strokeWidth: i,
                            strokeDasharray: "dashed" === c ? "40 20" : void 0
                        })
                    })
                },
                s = function(e) {
                    var t = e.border,
                        n = e.contentRef,
                        l = e.sectionDivider,
                        r = t || {},
                        s = r.type,
                        u = r.width,
                        d = r.color,
                        v = (0, i.useState)(0),
                        m = v[0],
                        f = v[1],
                        h = (0, i.useCallback)((function() {
                            var e;
                            f(null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0)
                        }), [n]);
                    return (0, a.Z)(h, t ? n : null), t ? (0, o.jsx)(c, {
                        width: m,
                        shape: l,
                        strokeType: s,
                        strokeWidth: u,
                        strokeColor: d
                    }) : null
                }
        },
        33509: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var o = n(26042),
                i = n(69396),
                a = n(85893),
                l = n(31996),
                r = n(25675),
                c = n.n(r),
                s = n(52077),
                u = n(399),
                d = n(21123),
                v = n(67294),
                m = "below",
                f = {
                    color: "#000000",
                    amount: 80
                },
                h = {
                    below: "",
                    top: "absolute w-full bottom-0 left-0 flex flex-col justify-end",
                    covering: "absolute w-full h-full top-0 left-0 flex flex-col justify-center"
                },
                g = {
                    below: "py-6",
                    top: "p-6 justify-end",
                    covering: "p-10"
                };
            var p = n(62246),
                y = n(7004),
                x = n(4433),
                b = n(60546);
            var w = {
                xsmall: {
                    small: {
                        nColumns: 1,
                        gap: 16
                    },
                    medium: {
                        nColumns: 1,
                        gap: 40
                    },
                    large: {
                        nColumns: 1,
                        gap: 40
                    }
                },
                small: {
                    small: {
                        nColumns: 3,
                        gap: 24
                    },
                    medium: {
                        nColumns: 2,
                        gap: 40
                    },
                    large: {
                        nColumns: 1,
                        gap: 40
                    }
                },
                large: {
                    small: {
                        nColumns: 4,
                        gap: 24
                    },
                    medium: {
                        nColumns: 3,
                        gap: 40
                    },
                    large: {
                        nColumns: 2,
                        gap: 40
                    }
                },
                xlarge: {
                    small: {
                        nColumns: 4,
                        gap: 40
                    },
                    medium: {
                        nColumns: 3,
                        gap: 40
                    },
                    large: {
                        nColumns: 2,
                        gap: 80
                    }
                }
            };

            function k(e) {
                var t = function() {
                        var e = (0, l.ac)("(min-width: 640px)"),
                            t = (0, l.ac)("(min-width: 1024px)");
                        return (0, l.ac)("(min-width: 1280px)") ? "xlarge" : t ? "large" : e ? "small" : "xsmall"
                    }(),
                    n = (0, v.useState)({}),
                    o = n[0],
                    i = n[1],
                    a = (0, v.useState)({}),
                    r = a[0],
                    c = a[1];
                return (0, v.useEffect)((function() {
                    var n = w[t][null !== e && void 0 !== e ? e : "medium"],
                        o = n.nColumns,
                        a = n.gap;
                    i(function(e, t) {
                        return {
                            flex: "0 0 calc(".concat(100 / e, "% - ").concat((e - 1) * t / e, "px")
                        }
                    }(o, a)), c({
                        gap: "".concat(a, "px")
                    })
                }), [t, e]), {
                    itemsContainerStyles: r,
                    itemsStyles: o
                }
            }
            var C = n(6604);

            function j(e) {
                var t, n = e.id,
                    r = e.block,
                    w = e.website,
                    j = e.previousBlock,
                    F = null === r || void 0 === r ? void 0 : r.headline,
                    S = null === r || void 0 === r ? void 0 : r.showImage,
                    M = null === r || void 0 === r ? void 0 : r.showIcon,
                    T = null === r || void 0 === r ? void 0 : r.showHeading,
                    N = null === r || void 0 === r ? void 0 : r.showContent,
                    R = null === r || void 0 === r ? void 0 : r.showButton,
                    L = null === r || void 0 === r ? void 0 : r.fullContentLink,
                    A = null === r || void 0 === r ? void 0 : r.aspectRatio,
                    P = null !== (t = null === r || void 0 === r ? void 0 : r.imageFit) && void 0 !== t ? t : "cover",
                    Z = null === r || void 0 === r ? void 0 : r.cornerRadius,
                    H = null === r || void 0 === r ? void 0 : r.align,
                    I = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return e.position && !t || (e.position = m), e.background && !t || (e.background = f), e
                    }(null === r || void 0 === r ? void 0 : r.textSettings, !S || "cover" !== P || !R && !N && !T),
                    W = null === r || void 0 === r ? void 0 : r.animation,
                    E = null === w || void 0 === w ? void 0 : w.animation,
                    V = null === r || void 0 === r ? void 0 : r.divider,
                    z = null === r || void 0 === r ? void 0 : r.border,
                    K = k(null === r || void 0 === r ? void 0 : r.itemsSize),
                    O = K.itemsStyles,
                    D = K.itemsContainerStyles,
                    B = (0, v.useRef)(null),
                    _ = (0, v.useState)("#FFFFFF"),
                    U = _[0],
                    $ = _[1],
                    G = (0, v.useState)("below" === (null === I || void 0 === I ? void 0 : I.position) ? void 0 : "0px"),
                    Y = G[0],
                    Q = G[1],
                    q = function(e, t) {
                        var n, o, i = e.position,
                            a = e.background,
                            r = {},
                            c = {};
                        return "covering" === i || "top" === i ? (c.backgroundColor = (0, l.mR)(a.color, a.amount), r.color = (0, l.$O)(a.color)) : r.color = t, {
                            containerClasses: null !== (n = h[i]) && void 0 !== n ? n : "",
                            containerStyles: c,
                            contentClasses: null !== (o = g[i]) && void 0 !== o ? o : "",
                            contentStyles: r
                        }
                    }(I, U),
                    X = (0, v.useRef)([]),
                    J = (0, v.useCallback)((function() {
                        var e, t, n = X.current.reduce((function(n, o) {
                            var i, a;
                            return (null !== (e = null === (i = n.current) || void 0 === i ? void 0 : i.offsetHeight) && void 0 !== e ? e : 0) > (null !== (t = null === (a = o.current) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== t ? t : 0) ? n : o
                        }));
                        n.current && Q(n.current.offsetHeight + "px")
                    }), [X]);
                (0, p.Z)(J, "below" === (null === I || void 0 === I ? void 0 : I.position) ? null : X.current);
                var ee = (0, u.Z)(r).minHeight,
                    te = function() {
                        return "left" === H ? "text-left" : "right" === H ? "text-right" : "text-center"
                    },
                    ne = L ? "a" : "div";
                return (0, a.jsxs)("section", {
                    className: "relative",
                    children: [(0, a.jsxs)("div", {
                        ref: B,
                        id: n,
                        className: (0, l.AK)("relative flex flex-none flex-shrink-0 break-word", (0, l.A2)((null === r || void 0 === r ? void 0 : r.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: ee
                        }, (0, x.$h)(r)),
                        children: [(0, a.jsx)(d.Z, {
                            block: r,
                            website: w,
                            setTextColor: $
                        }), (0, a.jsx)("div", {
                            className: (0, l.AK)("relative z-10 container mx-auto", (0, l.bG)(null === r || void 0 === r ? void 0 : r.spacing)),
                            children: (0, a.jsxs)("div", {
                                children: [F && (0, a.jsx)(C.Z, {
                                    settings: W,
                                    globalSettings: E,
                                    children: (0, a.jsx)("h2", {
                                        className: (0, l.AK)("heading-large mb-6", te()),
                                        style: (0, o.Z)({
                                            color: U
                                        }, (0, l.j2)(w)),
                                        children: F
                                    })
                                }), (null === r || void 0 === r ? void 0 : r.items) && (0, a.jsx)("div", {
                                    className: (0, l.AK)("flex flex-wrap relative", "left" === H ? "justify-start" : "right" === H ? "justify-end" : "justify-center"),
                                    style: D,
                                    children: r.items.map((function(e, t) {
                                        var u, d, v, m, f, h, g;
                                        return (0, a.jsx)(ne, {
                                            className: (0, l.AK)("group w-full relative overflow-hidden", (0, l.yW)(Z, null === w || void 0 === w ? void 0 : w.cornerRadius), "0px" === Y ? "opacity-0" : "", L ? "focus:outline-blue-600 cursor-pointer" : ""),
                                            onClick: L ? function(t) {
                                                return (0, y.Gc)(t, null === e || void 0 === e ? void 0 : e.button)
                                            } : void 0,
                                            target: L ? (0, y.U9)(null === e || void 0 === e ? void 0 : e.button, w) : void 0,
                                            href: L ? (0, y.f$)(null === e || void 0 === e ? void 0 : e.button, w) : void 0,
                                            style: O,
                                            children: (0, a.jsxs)(C.Z, {
                                                settings: W,
                                                globalSettings: E,
                                                delay: 100 * (t + 1),
                                                children: [S && e.image && (0, a.jsxs)("div", {
                                                    className: (0, l.AK)("flex-shrink-0 relative", (0, l.n3)(A)),
                                                    style: {
                                                        minHeight: Y
                                                    },
                                                    children: ["top" === (null === I || void 0 === I ? void 0 : I.position) && (0, a.jsx)("span", {
                                                        className: "relative block",
                                                        style: {
                                                            height: Y
                                                        }
                                                    }), (0, l.QW)(null === e || void 0 === e ? void 0 : e.image) && (0, a.jsx)(c(), {
                                                        className: (0, l.AK)(L && "transition-all duration-300 group-hover:scale-110", (0, l.yW)(Z, null === w || void 0 === w ? void 0 : w.cornerRadius)),
                                                        src: (0, l.QW)(null === e || void 0 === e ? void 0 : e.image),
                                                        onContextMenu: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        objectFit: P,
                                                        objectPosition: "".concat(e.imagePositionX || "center", " ").concat(e.imagePositionY || "center"),
                                                        layout: "fill",
                                                        alt: e.imageAltText || e.title || e.image.description || e.image.author
                                                    })]
                                                }), M && (null === (u = e.icon) || void 0 === u ? void 0 : u.media) && (0, a.jsx)("div", {
                                                    className: (0, l.AK)("flex-shrink-0 relative", (null === r || void 0 === r ? void 0 : r.iconSize) || "w-12 h-12", "left" === H ? "ml-0 mr-auto" : "right" === H ? "ml-auto mr-0" : "mx-auto"),
                                                    children: (0, a.jsx)("div", {
                                                        className: "absolute w-full h-full",
                                                        style: {
                                                            backgroundColor: (null === (d = e.icon) || void 0 === d ? void 0 : d.color) || "#1F2937",
                                                            WebkitMaskImage: 'url("'.concat(null === e || void 0 === e || null === (v = e.icon) || void 0 === v || null === (m = v.media) || void 0 === m ? void 0 : m.url, '")'),
                                                            maskImage: 'url("'.concat(null === e || void 0 === e || null === (f = e.icon) || void 0 === f || null === (h = f.media) || void 0 === h ? void 0 : h.url, '")'),
                                                            WebkitMaskPosition: "center",
                                                            maskPosition: "center",
                                                            WebkitMaskRepeat: "no-repeat",
                                                            maskRepeat: "no-repeat",
                                                            WebkitMaskSize: "contain",
                                                            maskSize: "contain"
                                                        }
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: q.containerClasses,
                                                    style: (0, i.Z)((0, o.Z)({}, q.containerStyles), {
                                                        minHeight: Y
                                                    }),
                                                    children: (0, a.jsxs)("div", {
                                                        ref: function(e) {
                                                            return X.current[t] = {
                                                                current: e
                                                            }
                                                        },
                                                        className: (0, l.AK)("flex flex-col", te(), "left" === H ? "items-start" : "right" === H ? "items-end" : "items-center", q.contentClasses),
                                                        style: q.contentStyles,
                                                        children: [T && (0, a.jsx)("p", {
                                                            className: (0, l.AK)("heading-medium mb-4", L ? "group-hover:underline" : ""),
                                                            style: (0, o.Z)({
                                                                color: "currentColor"
                                                            }, (0, l.j2)(w)),
                                                            children: e.title
                                                        }), N && (0, a.jsx)("div", {
                                                            className: (0, l.AK)("rich-text-block", L && !T ? "group-hover:underline" : ""),
                                                            style: {
                                                                color: "currentColor"
                                                            },
                                                            dangerouslySetInnerHTML: {
                                                                __html: e.content
                                                            }
                                                        }), R && (null === e || void 0 === e ? void 0 : e.button) && (0, a.jsx)(s.Z, {
                                                            button: (0, i.Z)((0, o.Z)({}, e.button), {
                                                                style: null === (g = r.button) || void 0 === g ? void 0 : g.style
                                                            }),
                                                            block: r,
                                                            website: w,
                                                            className: "lg mt-4"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }, "section-".concat(n, "-item-").concat(t))
                                    }))
                                })]
                            })
                        }), (0, a.jsx)(x.iz, {
                            previousDivider: null === j || void 0 === j ? void 0 : j.divider,
                            dividerUniqueId: "".concat(n, "-").concat(V),
                            divider: V,
                            contentRef: B
                        })]
                    }), z && (0, a.jsx)(b.OC, {
                        border: z,
                        sectionDivider: V,
                        contentRef: B
                    })]
                })
            }
        },
        399: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var o = n(67294);

            function i(e) {
                var t, n, i = (0, o.useState)(0),
                    a = i[0],
                    l = i[1],
                    r = (0, o.useState)([0, 0]),
                    c = r[0],
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
                    e && l(1 === e.idx ? (null === (t = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === t ? void 0 : t.offsetHeight) || 80 : 0)
                }), [e, c]), {
                    minHeight: (null === e || void 0 === e || null === (t = e.spacing) || void 0 === t ? void 0 : t.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
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
                i = Object.defineProperty,
                a = (e, t, n) => (((e, t, n) => {
                    t in e ? i(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                l = new Map,
                r = new WeakMap,
                c = 0,
                s = void 0;

            function u(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(r.has(n)||(c+=1,r.set(n,c.toString())),r.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function d(e, t, n = {}, o = s) {
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== o) {
                    const i = e.getBoundingClientRect();
                    return t(o, {
                        isIntersecting: o,
                        target: e,
                        intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: i,
                        intersectionRect: i,
                        rootBounds: i
                    }), () => {}
                }
                const {
                    id: i,
                    observer: a,
                    elements: r
                } = function(e) {
                    let t = u(e),
                        n = l.get(t);
                    if (!n) {
                        const o = new Map;
                        let i;
                        const a = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const a = t.isIntersecting && i.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = a), null == (n = o.get(t.target)) || n.forEach((e => {
                                    e(a, t)
                                }))
                            }))
                        }), e);
                        i = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: a,
                            elements: o
                        }, l.set(t, n)
                    }
                    return n
                }(n);
                let c = r.get(e) || [];
                return r.has(e) || r.set(e, c), c.push(t), a.observe(e),
                    function() {
                        c.splice(c.indexOf(t), 1), 0 === c.length && (r.delete(e), a.unobserve(e)), 0 === r.size && (a.disconnect(), l.delete(i))
                    }
            }
            o.Component;

            function v({
                threshold: e,
                delay: t,
                trackVisibility: n,
                rootMargin: i,
                root: a,
                triggerOnce: l,
                skip: r,
                initialInView: c,
                fallbackInView: s,
                onChange: u
            } = {}) {
                var v;
                const [m, f] = o.useState(null), h = o.useRef(), [g, p] = o.useState({
                    inView: !!c,
                    entry: void 0
                });
                h.current = u, o.useEffect((() => {
                    if (r || !m) return;
                    let o;
                    return o = d(m, ((e, t) => {
                        p({
                            inView: e,
                            entry: t
                        }), h.current && h.current(e, t), t.isIntersecting && l && o && (o(), o = void 0)
                    }), {
                        root: a,
                        rootMargin: i,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, s), () => {
                        o && o()
                    }
                }), [Array.isArray(e) ? e.toString() : e, m, a, i, l, r, n, s, t]);
                const y = null == (v = g.entry) ? void 0 : v.target,
                    x = o.useRef();
                m || !y || l || r || x.current === y || (x.current = y, p({
                    inView: !!c,
                    entry: void 0
                }));
                const b = [f, g.inView, g.entry];
                return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
            }
        }
    }
]);