"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8353], {
        95519: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultRenderAnnounceSlideMessage = t.default = void 0;
            var r, o = (r = n(67294)) && r.__esModule ? r : {
                default: r
            };
            var i = {
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                padding: 0,
                margin: "-1px",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                border: 0
            };
            t.defaultRenderAnnounceSlideMessage = function(e) {
                var t = e.currentSlide,
                    n = e.count;
                return "Slide ".concat(t + 1, " of ").concat(n)
            };
            var a = function(e) {
                var t = e.message,
                    n = e.ariaLive,
                    r = void 0 === n ? "polite" : n;
                return o.default.createElement("div", {
                    "aria-live": r,
                    "aria-atomic": "true",
                    style: i,
                    tabIndex: -1
                }, t)
            };
            t.default = a
        },
        52294: function(e, t, n) {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.Carousel = void 0;
            var o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var u = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            u && (u.get || u.set) ? Object.defineProperty(o, a, u) : o[a] = e[a]
                        }
                    o.default = e, n && n.set(e, o);
                    return o
                }(n(67294)),
                i = p(n(45366)),
                a = p(n(95519)),
                u = n(78056),
                l = p(n(16971)),
                c = p(n(50299)),
                s = n(87353),
                f = n(42314),
                d = n(40418);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function g(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach((function(t) {
                        b(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                    } catch (l) {
                        u = !0, o = l
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                    return i
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var S = function(e) {
                var t = e,
                    n = t.adaptiveHeight,
                    r = t.adaptiveHeightAnimation,
                    c = t.afterSlide,
                    p = t.animation,
                    g = t.autoplay,
                    y = t.autoplayInterval,
                    b = t.autoplayReverse,
                    h = t.beforeSlide,
                    S = t.cellAlign,
                    O = t.cellSpacing,
                    w = t.children,
                    C = t.className,
                    P = t.disableAnimation,
                    j = t.dragging,
                    M = t.dragThreshold,
                    x = t.enableKeyboardControls,
                    D = t.frameAriaLabel,
                    A = t.innerRef,
                    k = t.keyCodeConfig,
                    E = t.onDrag,
                    B = t.onDragEnd,
                    R = t.onDragStart,
                    T = t.onUserNavigation,
                    I = t.pauseOnHover,
                    N = t.renderAnnounceSlideMessage,
                    _ = t.scrollMode,
                    L = t.slideIndex,
                    H = t.slidesToScroll,
                    W = t.slidesToShow,
                    V = t.speed,
                    U = t.style,
                    z = t.swiping,
                    F = t.wrapAround,
                    $ = t.zoomScale,
                    X = o.default.Children.toArray(w).filter(Boolean),
                    K = X.length,
                    q = "fade" === p ? W : H,
                    Y = m((0, o.useState)((function() {
                        return (0, s.getDefaultSlideIndex)(L, K, W, q, S, b, _)
                    })), 2),
                    G = Y[0],
                    J = Y[1],
                    Q = m((0, o.useState)(!1), 2),
                    Z = Q[0],
                    ee = Q[1],
                    te = m((0, o.useState)(!1), 2),
                    ne = te[0],
                    re = te[1],
                    oe = m((0, o.useState)(0), 2),
                    ie = oe[0],
                    ae = oe[1],
                    ue = m((0, o.useState)(0), 2),
                    le = ue[0],
                    ce = ue[1],
                    se = (0, o.useRef)(null),
                    fe = (0, o.useRef)(0),
                    de = (0, o.useRef)(null),
                    pe = (0, o.useRef)(null),
                    ge = (0, o.useRef)(),
                    ye = (0, o.useRef)(null),
                    ve = (0, o.useRef)(!0),
                    be = (0, o.useCallback)((function(e) {
                        e && e.querySelectorAll(".slider-list img").forEach((function(e) {
                            return e.setAttribute("draggable", "false")
                        })), de.current = e
                    }), []);
                (0, o.useEffect)((function() {
                    return ve.current = !0,
                        function() {
                            ve.current = !1
                        }
                }), []);
                var me = A || pe,
                    he = (0, o.useCallback)((function(e) {
                        if (de.current && me.current) {
                            var t = (0, s.getBoundedIndex)(e, K),
                                n = e !== G;
                            n && h(G, t);
                            var r = de.current.getBoundingClientRect().left - me.current.getBoundingClientRect().left,
                                o = de.current.offsetWidth,
                                i = (0, u.getPercentOffsetForSlide)(t, K, W, S, F) / 100 * o;
                            if (F) {
                                var a = o / 3;
                                e < 0 && (i += a), e >= K && (i -= a)
                            }
                            if (ce(i - r), n) J(t), setTimeout((function() {
                                ve.current && c(t)
                            }), P ? 40 : V || 500)
                        }
                    }), [c, h, me, S, G, P, V, K, W, F]),
                    Se = (0, o.useCallback)((function() {
                        var e = (0, s.getNextMoveIndex)(_, F, G, K, q, W, S);
                        G !== e && he(e)
                    }), [S, G, he, q, _, K, W, F]),
                    Oe = (0, o.useCallback)((function() {
                        var e = (0, s.getPrevMoveIndex)(_, F, G, q, W, S);
                        G !== e && he(e)
                    }), [S, G, he, q, _, W, F]),
                    we = (0, o.useRef)(L);
                (0, o.useEffect)((function() {
                    void 0 === L || L === we.current || b || (he(L), we.current = L)
                }), [L, b, he]), (0, o.useEffect)((function() {
                    var e = null;
                    return Z && (e = Date.now()),
                        function() {
                            null !== e && null !== ye.current && (ye.current += Date.now() - e)
                        }
                }), [Z]), (0, o.useEffect)((function() {
                    if (g && !Z) {
                        var e = null !== ye.current ? y - (Date.now() - ye.current) : y;
                        ge.current = setTimeout((function() {
                            ye.current = Date.now(), b ? Oe() : Se()
                        }), e)
                    }
                    return g && Z && clearTimeout(ge.current),
                        function() {
                            clearTimeout(ge.current)
                        }
                }), [Z, g, y, b, Oe, Se]);
                var Ce = (0, o.useRef)([]),
                    Pe = function(e) {
                        if (ne && me.current) {
                            re(!1);
                            var t = 0;
                            if (Ce.current.length > 1)
                                for (var n = Ce.current[0], r = Ce.current[Ce.current.length - 1], o = r.time - n.time, i = 9 * Math.abs((r.pos - n.pos) / o); Math.abs(i) > 1;) t += i, i *= .92;
                            Ce.current = [];
                            var a = Math.abs(ie) + Math.abs(t);
                            B(e), se.current = null, ae(0);
                            var u = me.current.offsetWidth * Math.min(1, q / W),
                                l = u * M;
                            if (a < l) he(G);
                            else {
                                for (var c = W >= 2 * q ? 1 + Math.floor((a - l) / u) : 1, f = G, d = 0; d < c; d += 1) f = ie > 0 ? (0, s.getNextMoveIndex)(_, F, f, K, q, W, S) : (0, s.getPrevMoveIndex)(_, F, f, q, W, S);
                                f !== G && T(e), he(f)
                            }
                        }
                    },
                    je = (0, o.useCallback)((function(e) {
                        z && de.current && me.current && (re(!0), fe.current = de.current.getBoundingClientRect().left - me.current.getBoundingClientRect().left, R(e))
                    }), [me, R, z]),
                    Me = (0, o.useCallback)((function(e) {
                        if (ne) {
                            for (var t = null === se.current, n = null !== se.current ? e - se.current : 0, r = ie + n, o = Date.now(); Ce.current.length > 0 && !(o - Ce.current[0].time <= 100);) Ce.current.shift();
                            Ce.current.push({
                                pos: r,
                                time: o
                            }), t || ae(r), se.current = e
                        }
                    }), [ne, ie]),
                    xe = (0, o.useCallback)((function(e) {
                        if (ne && me.current) {
                            R(e);
                            var t = me.current.offsetWidth - e.touches[0].pageX;
                            Me(t)
                        }
                    }), [ne, me, Me, R]),
                    De = (0, o.useCallback)((function(e) {
                        j && de.current && me.current && (re(!0), fe.current = de.current.getBoundingClientRect().left - me.current.getBoundingClientRect().left, R(e))
                    }), [me, j, R]),
                    Ae = (0, o.useCallback)((function(e) {
                        if (ne && me.current) {
                            E(e);
                            var t = e.clientX - me.current.getBoundingClientRect().left,
                                n = me.current.offsetWidth - t;
                            Me(n)
                        }
                    }), [me, ne, Me, E]),
                    ke = function(e) {
                        e.preventDefault(), Pe(e)
                    },
                    Ee = (0, o.useCallback)((function() {
                        I && ee(!0)
                    }), [I]),
                    Be = (0, o.useCallback)((function() {
                        I && ee(!1)
                    }), [I]),
                    Re = (0, f.useFrameHeight)(n, W, K),
                    Te = Re.frameHeight,
                    Ie = Re.handleVisibleSlideHeightChange,
                    Ne = Re.initializedAdaptiveHeight,
                    _e = function(e) {
                        return X.map((function(t, r) {
                            return o.default.createElement(i.default, {
                                key: "".concat(e, "-").concat(r),
                                count: K,
                                currentSlide: G,
                                index: r,
                                isCurrentSlide: G === r,
                                typeOfSlide: e,
                                wrapAround: F,
                                cellSpacing: O,
                                animation: p,
                                slidesToShow: W,
                                speed: V,
                                zoomScale: $,
                                cellAlign: S,
                                onVisibleSlideHeightChange: Ie,
                                adaptiveHeight: n,
                                initializedAdaptiveHeight: Ne
                            }, t)
                        }))
                    };
                return o.default.createElement("div", {
                    className: "slider-container",
                    style: {
                        position: "relative"
                    },
                    onMouseEnter: Ee,
                    onMouseLeave: Be
                }, o.default.createElement(a.default, {
                    ariaLive: g && !Z ? "off" : "polite",
                    message: N({
                        currentSlide: G,
                        count: K
                    })
                }), (0, l.default)(t, K, G, he, Se, Oe, q), o.default.createElement("div", {
                    className: ["slider-frame", C || ""].join(" ").trim(),
                    style: v({
                        overflow: "hidden",
                        width: "100%",
                        position: "relative",
                        outline: "none",
                        height: Te,
                        transition: r ? "height 300ms ease-in-out" : void 0,
                        willChange: "height",
                        userSelect: "none"
                    }, U),
                    "aria-label": D,
                    role: "region",
                    tabIndex: x ? 0 : -1,
                    onKeyDown: x ? function(e) {
                        var t = null;
                        if (Object.keys(k).forEach((function(n) {
                                var r;
                                null !== (r = k[n]) && void 0 !== r && r.includes(e.keyCode) && (t = n)
                            })), null !== t) switch (e.preventDefault(), e.stopPropagation(), t) {
                            case "nextSlide":
                                T(e), Se();
                                break;
                            case "previousSlide":
                                T(e), Oe();
                                break;
                            case "firstSlide":
                            case "lastSlide":
                                T(e);
                                var n = (0, d.getDotIndexes)(K, q, _, W, F, S);
                                he("firstSlide" === t ? n[0] : n[n.length - 1]);
                                break;
                            case "pause":
                                ee((function(e) {
                                    return !e
                                }))
                        }
                    } : void 0,
                    ref: me,
                    onMouseUp: ke,
                    onMouseDown: De,
                    onMouseMove: Ae,
                    onMouseLeave: ke,
                    onTouchStart: je,
                    onTouchEnd: Pe,
                    onTouchMove: xe
                }, o.default.createElement(u.SliderList, {
                    animationDistance: le,
                    cellAlign: S,
                    currentSlide: G,
                    disableEdgeSwiping: t.disableEdgeSwiping,
                    draggedOffset: fe.current - ie,
                    disableAnimation: P,
                    easing: t.easing,
                    edgeEasing: t.edgeEasing,
                    isDragging: ne,
                    ref: be,
                    scrollMode: _,
                    animation: p,
                    slideCount: K,
                    slidesToScroll: q,
                    slidesToShow: W,
                    speed: V,
                    wrapAround: F
                }, F ? _e("prev-cloned") : null, _e(), F ? _e("next-cloned") : null)))
            };
            t.Carousel = S, S.defaultProps = c.default;
            var O = S;
            t.default = O
        },
        16132: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getControlContainerStyles = void 0;
            var r = n(1916);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var u = {
                position: "absolute",
                display: "flex",
                zIndex: 1,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            };
            t.getControlContainerStyles = function(e) {
                return i(i({}, function(e) {
                    var t, n;
                    switch (e) {
                        case r.Positions.TopLeft:
                        case r.Positions.TopCenter:
                        case r.Positions.TopRight:
                            t = "flex-start";
                            break;
                        case r.Positions.CenterLeft:
                        case r.Positions.CenterCenter:
                        case r.Positions.CenterRight:
                            t = "center";
                            break;
                        case r.Positions.BottomLeft:
                        case r.Positions.BottomCenter:
                        case r.Positions.BottomRight:
                            t = "flex-end"
                    }
                    switch (e) {
                        case r.Positions.TopLeft:
                        case r.Positions.CenterLeft:
                        case r.Positions.BottomLeft:
                            n = "flex-start";
                            break;
                        case r.Positions.TopCenter:
                        case r.Positions.CenterCenter:
                        case r.Positions.BottomCenter:
                            n = "center";
                            break;
                        case r.Positions.TopRight:
                        case r.Positions.CenterRight:
                        case r.Positions.BottomRight:
                            n = "flex-end"
                    }
                    return {
                        alignItems: t,
                        justifyContent: n
                    }
                }(e)), u)
            }
        },
        16971: function(e, t, n) {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var u = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            u && (u.get || u.set) ? Object.defineProperty(o, a, u) : o[a] = e[a]
                        }
                    o.default = e, n && n.set(e, o);
                    return o
                }(n(67294)),
                i = n(16132),
                a = n(40418),
                u = n(1916);

            function l(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (l = function(e) {
                    return e ? n : t
                })(e)
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        f(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var d = [{
                    funcName: "renderTopLeftControls",
                    key: u.Positions.TopLeft
                }, {
                    funcName: "renderTopCenterControls",
                    key: u.Positions.TopCenter
                }, {
                    funcName: "renderTopRightControls",
                    key: u.Positions.TopRight
                }, {
                    funcName: "renderCenterLeftControls",
                    key: u.Positions.CenterLeft
                }, {
                    funcName: "renderCenterCenterControls",
                    key: u.Positions.CenterCenter
                }, {
                    funcName: "renderCenterRightControls",
                    key: u.Positions.CenterRight
                }, {
                    funcName: "renderBottomLeftControls",
                    key: u.Positions.BottomLeft
                }, {
                    funcName: "renderBottomCenterControls",
                    key: u.Positions.BottomCenter
                }, {
                    funcName: "renderBottomRightControls",
                    key: u.Positions.BottomRight
                }],
                p = function(e, t, n, r, u, l, c) {
                    if (e.withoutControls) return null;
                    var f = s(s({}, e), {}, {
                            currentSlide: n,
                            slideCount: t
                        }),
                        p = (0, a.nextButtonDisabled)(f),
                        g = (0, a.prevButtonDisabled)(f),
                        y = (0, a.getDotIndexes)(t, c, e.scrollMode, e.slidesToShow, e.wrapAround, e.cellAlign);
                    return d.map((function(a) {
                        var f;
                        return e[a.funcName] && "function" === typeof e[a.funcName] ? o.default.createElement("div", {
                            key: a.funcName,
                            style: s(s({}, (0, i.getControlContainerStyles)(a.key)), {}, {
                                pointerEvents: "none"
                            })
                        }, o.default.createElement("div", {
                            className: ["slider-control-".concat(a.key.toLowerCase()), e.defaultControlsConfig.containerClassName || ""].join(" ").trim(),
                            style: {
                                pointerEvents: "auto"
                            }
                        }, null === (f = e[a.funcName]) || void 0 === f ? void 0 : f.call(e, {
                            cellAlign: e.cellAlign,
                            cellSpacing: e.cellSpacing,
                            currentSlide: n,
                            defaultControlsConfig: e.defaultControlsConfig || {},
                            pagingDotsIndices: y,
                            goToSlide: r,
                            nextDisabled: p,
                            nextSlide: u,
                            onUserNavigation: e.onUserNavigation,
                            previousDisabled: g,
                            previousSlide: l,
                            scrollMode: e.scrollMode,
                            slideCount: t,
                            slidesToScroll: c,
                            slidesToShow: e.slidesToShow || 1,
                            vertical: e.vertical,
                            wrapAround: e.wrapAround
                        }))) : o.default.createElement(o.Fragment, {
                            key: a.funcName
                        })
                    }))
                };
            t.default = p
        },
        50299: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, o = (r = n(67294)) && r.__esModule ? r : {
                    default: r
                },
                i = n(1916),
                a = n(40418);
            var u = function(e) {
                    return Math.pow(e - 1, 3) + 1
                },
                l = {
                    adaptiveHeight: !1,
                    adaptiveHeightAnimation: !0,
                    afterSlide: function() {},
                    autoplay: !1,
                    autoplayInterval: 3e3,
                    autoplayReverse: !1,
                    beforeSlide: function() {},
                    cellAlign: "left",
                    cellSpacing: 0,
                    defaultControlsConfig: {},
                    disableAnimation: !1,
                    disableEdgeSwiping: !1,
                    dragging: !0,
                    dragThreshold: .5,
                    easing: u,
                    edgeEasing: u,
                    enableKeyboardControls: !1,
                    frameAriaLabel: "carousel-slider",
                    keyCodeConfig: {
                        nextSlide: [39, 68, 38, 87],
                        previousSlide: [37, 65, 40, 83],
                        firstSlide: [81],
                        lastSlide: [69],
                        pause: [32]
                    },
                    onDragStart: function() {},
                    onDrag: function() {},
                    onDragEnd: function() {},
                    onUserNavigation: function() {},
                    pauseOnHover: !0,
                    renderAnnounceSlideMessage: n(95519).defaultRenderAnnounceSlideMessage,
                    renderBottomCenterControls: function(e) {
                        return o.default.createElement(a.PagingDots, e)
                    },
                    renderCenterLeftControls: function(e) {
                        return o.default.createElement(a.PreviousButton, e)
                    },
                    renderCenterRightControls: function(e) {
                        return o.default.createElement(a.NextButton, e)
                    },
                    scrollMode: i.ScrollMode.page,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    speed: 500,
                    style: {},
                    swiping: !0,
                    vertical: !1,
                    withoutControls: !1,
                    wrapAround: !1,
                    children: o.default.createElement(o.default.Fragment, null)
                };
            t.default = l
        },
        40418: function(e, t, n) {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.prevButtonDisabled = t.nextButtonDisabled = t.getDotIndexes = t.PreviousButton = t.PagingDots = t.NextButton = void 0;
            var o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(o, a, l) : o[a] = e[a]
                        }
                    o.default = e, n && n.set(e, o);
                    return o
                }(n(67294)),
                i = n(1916),
                a = n(87353);

            function u(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (u = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        s(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var f = function(e) {
                return {
                    border: 0,
                    background: "rgba(0,0,0,0.4)",
                    color: "white",
                    padding: 10,
                    textTransform: "uppercase",
                    opacity: e ? .3 : 1,
                    cursor: e ? "not-allowed" : "pointer"
                }
            };
            t.prevButtonDisabled = function(e) {
                var t = e.cellAlign,
                    n = e.currentSlide,
                    r = e.slidesToShow;
                return !e.wrapAround && (0 === n || "right" === t && n <= r - 1)
            };
            t.PreviousButton = function(e) {
                var t = e.previousSlide,
                    n = e.defaultControlsConfig,
                    r = n.prevButtonClassName,
                    i = n.prevButtonStyle,
                    a = void 0 === i ? {} : i,
                    u = n.prevButtonText,
                    l = n.prevButtonOnClick,
                    s = e.onUserNavigation,
                    d = e.previousDisabled;
                return o.default.createElement("button", {
                    className: r,
                    style: c(c({}, f(d)), a),
                    disabled: d,
                    onClick: function(e) {
                        null === l || void 0 === l || l(e), e.defaultPrevented || (s(e), e.preventDefault(), t())
                    },
                    "aria-label": "previous",
                    type: "button"
                }, u || "Prev")
            };
            t.nextButtonDisabled = function(e) {
                var t = e.cellAlign,
                    n = e.currentSlide,
                    r = e.slideCount,
                    o = e.slidesToShow;
                return !e.wrapAround && (n >= r - 1 || "left" === t && n >= r - o)
            };
            t.NextButton = function(e) {
                var t = e.nextSlide,
                    n = e.defaultControlsConfig,
                    r = n.nextButtonClassName,
                    i = n.nextButtonStyle,
                    a = void 0 === i ? {} : i,
                    u = n.nextButtonText,
                    l = n.nextButtonOnClick,
                    s = e.nextDisabled,
                    d = e.onUserNavigation;
                return o.default.createElement("button", {
                    className: r,
                    style: c(c({}, f(s)), a),
                    disabled: s,
                    onClick: function(e) {
                        null === l || void 0 === l || l(e), e.defaultPrevented || (d(e), e.preventDefault(), t())
                    },
                    "aria-label": "next",
                    type: "button"
                }, u || "Next")
            };
            t.getDotIndexes = function(e, t, n, r, o, a) {
                var u = [],
                    l = t <= 0 ? 1 : t;
                if (o) {
                    for (var c = 0; c < e; c += l) u.push(c);
                    return u
                }
                if ("center" === a) {
                    for (var s = 0; s < e - 1; s += l) u.push(s);
                    return e > 0 && u.push(e - 1), u
                }
                if ("left" === a) {
                    if (r >= e) return [0];
                    for (var f = e - r, d = 0; d < f; d += l) u.push(d);
                    return n === i.ScrollMode.remainder ? u.push(f) : u.push(u[u.length - 1] + l), u
                }
                if ("right" === a) {
                    if (r >= e) return [e - 1];
                    var p = r - 1;
                    if (n === i.ScrollMode.remainder) {
                        for (var g = p; g < e - 1; g += l) u.push(g);
                        u.push(e - 1)
                    } else {
                        for (var y = e - 1; y > p; y -= l) u.push(y);
                        u.push(u[u.length - 1] - l), u.reverse()
                    }
                    return u
                }
                return u
            };
            t.PagingDots = function(e) {
                var t = e.pagingDotsIndices,
                    n = e.defaultControlsConfig,
                    r = n.pagingDotsContainerClassName,
                    i = n.pagingDotsClassName,
                    u = n.pagingDotsStyle,
                    l = void 0 === u ? {} : u,
                    s = n.pagingDotsOnClick,
                    f = e.currentSlide,
                    d = e.onUserNavigation,
                    p = e.slideCount,
                    g = e.goToSlide,
                    y = (0, o.useCallback)((function(e) {
                        return {
                            cursor: "pointer",
                            opacity: e ? 1 : .5,
                            background: "transparent",
                            border: "none",
                            fill: "black"
                        }
                    }), []),
                    v = (0, a.getBoundedIndex)(f, p);
                return o.default.createElement("ul", {
                    className: r,
                    style: {
                        position: "relative",
                        top: -10,
                        display: "flex",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none"
                    }
                }, t.map((function(e, n) {
                    var r = v === e || v < e && (0 === n || v > t[n - 1]);
                    return o.default.createElement("li", {
                        key: e,
                        className: r ? "paging-item active" : "paging-item"
                    }, o.default.createElement("button", {
                        className: i,
                        type: "button",
                        style: c(c({}, y(r)), l),
                        onClick: function(t) {
                            null === s || void 0 === s || s(t), t.defaultPrevented || (d(t), g(e))
                        },
                        "aria-label": "slide ".concat(e + 1, " bullet"),
                        "aria-selected": r
                    }, o.default.createElement("svg", {
                        className: "paging-dot",
                        width: "6",
                        height: "6",
                        "aria-hidden": "true",
                        focusable: "false",
                        viewBox: "0 0 6 6"
                    }, o.default.createElement("circle", {
                        cx: "3",
                        cy: "3",
                        r: "3"
                    }))))
                })))
            }
        },
        42314: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useFrameHeight = void 0;
            var r = n(67294),
                o = n(53771);

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return l(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || u(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                    } catch (l) {
                        u = !0, o = l
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                    return i
                }(e, t) || u(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                if (e) {
                    if ("string" === typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                }
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            t.useFrameHeight = function(e, t, n) {
                var u = a((0, o.useStateWithRef)([]), 3),
                    l = u[0],
                    c = u[1],
                    s = u[2],
                    f = a((0, r.useState)(!1), 2),
                    d = f[0],
                    p = f[1];
                return {
                    handleVisibleSlideHeightChange: (0, r.useCallback)((function(e, r) {
                        var o, a = s.current;
                        o = null === r ? a.filter((function(t) {
                            return t.slideIndex !== e
                        })) : [].concat(i(a), [{
                            slideIndex: e,
                            height: r
                        }]), c(o), o.length >= Math.min(n, Math.ceil(t)) && p(!0)
                    }), [n, c, t, s]),
                    frameHeight: (0, r.useMemo)((function() {
                        if (e) {
                            if (!d) return "auto";
                            var t = Math.max.apply(Math, [0].concat(i(l.map((function(e) {
                                return e.height
                            })))));
                            return "".concat(t, "px")
                        }
                        return "auto"
                    }), [e, d, l]),
                    initializedAdaptiveHeight: d
                }
            }
        },
        53771: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useStateWithRef = void 0;
            var r = n(67294);

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                    } catch (l) {
                        u = !0, o = l
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                    return i
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            t.useStateWithRef = function(e) {
                var t = o((0, r.useState)(e), 2),
                    n = t[0],
                    i = t[1],
                    a = (0, r.useRef)(e);
                return [n, (0, r.useCallback)((function(e) {
                    a.current = e, i(e)
                }), []), a]
            }
        },
        54923: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useTween = void 0;
            var r = n(67294);

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                    } catch (l) {
                        u = !0, o = l
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                    return i
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            t.useTween = function(e, t, n, i) {
                var a = o((0, r.useState)(1), 2),
                    u = a[0],
                    l = a[1],
                    c = (0, r.useRef)(Date.now()),
                    s = (0, r.useRef)(),
                    f = (0, r.useRef)(!0),
                    d = (0, r.useRef)(null),
                    p = null === d.current || d.current === n || i ? u : 0;
                return (0, r.useEffect)((function() {
                    if (d.current = n, f.current) f.current = !1;
                    else if (!i) {
                        c.current = Date.now(), l(0);
                        return function t() {
                                s.current = requestAnimationFrame((function() {
                                    var n = Date.now(),
                                        r = Math.min(1, (n - c.current) / e);
                                    l(r), r < 1 ? t() : s.current = void 0
                                }))
                            }(),
                            function() {
                                void 0 !== s.current && (cancelAnimationFrame(s.current), l(1))
                            }
                    }
                }), [n, e, i]), {
                    isAnimating: 1 !== p,
                    value: t(p)
                }
            }
        },
        33752: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                NextButton: !0,
                PreviousButton: !0,
                PagingDots: !0
            };
            Object.defineProperty(t, "NextButton", {
                enumerable: !0,
                get: function() {
                    return a.NextButton
                }
            }), Object.defineProperty(t, "PagingDots", {
                enumerable: !0,
                get: function() {
                    return a.PagingDots
                }
            }), Object.defineProperty(t, "PreviousButton", {
                enumerable: !0,
                get: function() {
                    return a.PreviousButton
                }
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o.Carousel
                }
            });
            var o = n(52294),
                i = n(1916);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }));
            var a = n(40418)
        },
        45366: function(e, t, n) {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var n = a(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var l = i ? Object.getOwnPropertyDescriptor(e, u) : null;
                            l && (l.get || l.set) ? Object.defineProperty(o, u, l) : o[u] = e[u]
                        }
                    o.default = e, n && n.set(e, o);
                    return o
                }(n(67294)),
                i = n(87353);

            function a(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (a = function(e) {
                    return e ? n : t
                })(e)
            }
            var u = function(e, t, n, r, o, i, a, u, l, c) {
                    var s = function(e, t) {
                            return "".concat(t ? 100 / (3 * e) : 100 / e, "%")
                        }(e, r),
                        f = n ? 1 : 0,
                        d = "fade" === i ? 200 : 500,
                        p = "auto";
                    return l && (p = c ? "100%" : n ? "auto" : "0"), {
                        width: s,
                        flex: 1,
                        height: p,
                        padding: "0 ".concat(o ? o / 2 : 0, "px"),
                        transition: i ? "".concat(a || d, "ms ease 0s") : void 0,
                        transform: "zoom" === i ? "scale(".concat(t && n ? 1 : u || .85, ")") : void 0,
                        opacity: "fade" === i ? f : 1
                    }
                },
                l = function(e) {
                    var t = e.count,
                        n = e.children,
                        r = e.currentSlide,
                        a = e.index,
                        l = e.isCurrentSlide,
                        c = e.typeOfSlide,
                        s = e.wrapAround,
                        f = e.cellSpacing,
                        d = e.animation,
                        p = e.speed,
                        g = e.slidesToShow,
                        y = e.zoomScale,
                        v = e.cellAlign,
                        b = e.onVisibleSlideHeightChange,
                        m = e.adaptiveHeight,
                        h = e.initializedAdaptiveHeight,
                        S = s ? function(e, t, n) {
                            return "prev-cloned" === n ? e - t : "next-cloned" === n ? e + t : e
                        }(a, t, c) : a,
                        O = (0, i.isSlideVisible)(r, S, g, v),
                        w = (0, o.useRef)(null),
                        C = (0, o.useRef)(!1);
                    (0, o.useEffect)((function() {
                        var e = w.current;
                        if (e) {
                            var t, n = null === (t = e.getBoundingClientRect()) || void 0 === t ? void 0 : t.height;
                            O ? e.removeAttribute("inert") : e.setAttribute("inert", "true");
                            var r = C.current;
                            O && !r ? b(S, n) : !O && r && b(S, null), C.current = O
                        }
                    }), [m, S, O, b, g]);
                    var P = l && O ? " slide-current" : "";
                    return o.default.createElement("div", {
                        ref: w,
                        className: "slide".concat(P).concat(c ? " ".concat(c) : "").concat(O ? " slide-visible" : ""),
                        style: u(t, l, O, s, f, d, p, y, m, h)
                    }, n)
                };
            t.default = l
        },
        78056: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPercentOffsetForSlide = t.SliderList = void 0;
            var r, o = (r = n(67294)) && r.__esModule ? r : {
                    default: r
                },
                i = n(40418),
                a = n(54923);
            var u = function(e, t, n, r, o) {
                var i = o ? 3 * t : t,
                    a = 100 / i,
                    u = o ? -100 / 3 : 0;
                "right" === r && n > 1 && (u += a * (n - 1));
                "center" === r && n > 1 && (u += a * ((n - 1) / 2));
                return u - 100 / i * e
            };
            t.getPercentOffsetForSlide = u;
            var l = o.default.forwardRef((function(e, t) {
                var n = e.animation,
                    r = e.animationDistance,
                    l = e.cellAlign,
                    c = e.children,
                    s = e.currentSlide,
                    f = e.disableAnimation,
                    d = e.disableEdgeSwiping,
                    p = e.draggedOffset,
                    g = e.easing,
                    y = e.edgeEasing,
                    v = e.isDragging,
                    b = e.scrollMode,
                    m = e.slideCount,
                    h = e.slidesToScroll,
                    S = e.slidesToShow,
                    O = e.speed,
                    w = e.wrapAround,
                    C = "".concat(100 * (w ? 3 * m : m) / S, "%"),
                    P = [m, S, l, w],
                    j = (0, i.getDotIndexes)(m, h, b, S, w, l),
                    M = "".concat(p, "px");
                if (v && d && !w) {
                    var x = [j[0], j[j.length - 1]].map((function(e) {
                        return u.apply(void 0, [e].concat(P))
                    }));
                    M = "clamp(".concat(x[1], "%, ").concat(p, "px, ").concat(x[0], "%)")
                }
                var D, A = u.apply(void 0, [s].concat(P)),
                    k = !d && !w && (s === j[0] && r < 0 || s === j[j.length - 1] && r > 0),
                    E = (0, a.useTween)(O, k ? y : g, s + r, v || f || "fade" === n),
                    B = E.value,
                    R = E.isAnimating;
                if (v || 0 !== A || R)
                    if (v) D = "translateX(".concat(M, ")");
                    else {
                        var T = R ? (1 - B) * r : 0;
                        D = "translateX(calc(".concat(A, "% - ").concat(T, "px))")
                    }
                return o.default.createElement("div", {
                    ref: t,
                    className: "slider-list",
                    style: {
                        width: C,
                        textAlign: "left",
                        userSelect: "auto",
                        transform: D,
                        display: "flex"
                    }
                }, c)
            }));
            t.SliderList = l, l.displayName = "SliderList"
        },
        1916: function(e, t) {
            var n, r, o, i;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ScrollMode = t.Positions = t.Directions = t.Alignment = void 0, t.Alignment = n,
                function(e) {
                    e.Center = "center", e.Right = "right", e.Left = "left"
                }(n || (t.Alignment = n = {})), t.Directions = r,
                function(e) {
                    e.Next = "next", e.Prev = "prev", e.Up = "up", e.Down = "down"
                }(r || (t.Directions = r = {})), t.Positions = o,
                function(e) {
                    e.TopLeft = "TopLeft", e.TopCenter = "TopCenter", e.TopRight = "TopRight", e.CenterLeft = "CenterLeft", e.CenterCenter = "CenterCenter", e.CenterRight = "CenterRight", e.BottomLeft = "BottomLeft", e.BottomCenter = "BottomCenter", e.BottomRight = "BottomRight"
                }(o || (t.Positions = o = {})), t.ScrollMode = i,
                function(e) {
                    e.page = "page", e.remainder = "remainder"
                }(i || (t.ScrollMode = i = {}))
        },
        87353: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSlideVisible = t.getPrevMoveIndex = t.getNextMoveIndex = t.getDefaultSlideIndex = t.getBoundedIndex = void 0;
            var r = n(40418),
                o = n(1916);
            t.isSlideVisible = function(e, t, n, r) {
                return "left" === r ? t < e + n && t > e - 1 : "center" === r ? t > e - n / 2 - .5 && t <= e || t > e && t < e + n / 2 + .5 : "right" === r && (t < e + 1 && t > e - n)
            };
            t.getNextMoveIndex = function(e, t, n, r, i, a, u) {
                return t ? n + i : n >= r - 1 || "left" === u && n >= r - a ? n : e === o.ScrollMode.remainder && "left" === u ? Math.min(n + i, r - a) : Math.min(n + i, r - 1)
            };
            t.getPrevMoveIndex = function(e, t, n, r, i, a) {
                return t ? n - r : n <= 0 || "right" === a && n <= i - 1 ? n : e === o.ScrollMode.remainder && "right" === a ? Math.max(n - r, i - 1) : Math.max(n - r, 0)
            };
            t.getDefaultSlideIndex = function(e, t, n, o, i, a, u) {
                if (void 0 !== e) return e;
                var l = (0, r.getDotIndexes)(t, o, u, n, !1, i);
                return a ? l[l.length - 1] : l[0]
            };
            t.getBoundedIndex = function(e, t) {
                return (e % t + t) % t
            }
        },
        42708: function(e, t, n) {
            n.d(t, {
                YD: function() {
                    return d
                }
            });
            var r = n(67294),
                o = Object.defineProperty,
                i = (e, t, n) => (((e, t, n) => {
                    t in e ? o(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                a = new Map,
                u = new WeakMap,
                l = 0,
                c = void 0;

            function s(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(u.has(n)||(l+=1,u.set(n,l.toString())),u.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function f(e, t, n = {}, r = c) {
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== r) {
                    const o = e.getBoundingClientRect();
                    return t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: o,
                        intersectionRect: o,
                        rootBounds: o
                    }), () => {}
                }
                const {
                    id: o,
                    observer: i,
                    elements: u
                } = function(e) {
                    let t = s(e),
                        n = a.get(t);
                    if (!n) {
                        const r = new Map;
                        let o;
                        const i = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const i = t.isIntersecting && o.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = i), null == (n = r.get(t.target)) || n.forEach((e => {
                                    e(i, t)
                                }))
                            }))
                        }), e);
                        o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: i,
                            elements: r
                        }, a.set(t, n)
                    }
                    return n
                }(n);
                let l = u.get(e) || [];
                return u.has(e) || u.set(e, l), l.push(t), i.observe(e),
                    function() {
                        l.splice(l.indexOf(t), 1), 0 === l.length && (u.delete(e), i.unobserve(e)), 0 === u.size && (i.disconnect(), a.delete(o))
                    }
            }
            r.Component;

            function d({
                threshold: e,
                delay: t,
                trackVisibility: n,
                rootMargin: o,
                root: i,
                triggerOnce: a,
                skip: u,
                initialInView: l,
                fallbackInView: c,
                onChange: s
            } = {}) {
                var d;
                const [p, g] = r.useState(null), y = r.useRef(), [v, b] = r.useState({
                    inView: !!l,
                    entry: void 0
                });
                y.current = s, r.useEffect((() => {
                    if (u || !p) return;
                    let r;
                    return r = f(p, ((e, t) => {
                        b({
                            inView: e,
                            entry: t
                        }), y.current && y.current(e, t), t.isIntersecting && a && r && (r(), r = void 0)
                    }), {
                        root: i,
                        rootMargin: o,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, c), () => {
                        r && r()
                    }
                }), [Array.isArray(e) ? e.toString() : e, p, i, o, a, u, n, c, t]);
                const m = null == (d = v.entry) ? void 0 : d.target,
                    h = r.useRef();
                p || !m || a || u || h.current === m || (h.current = m, b({
                    inView: !!l,
                    entry: void 0
                }));
                const S = [g, v.inView, v.entry];
                return S.ref = S[0], S.inView = S[1], S.entry = S[2], S
            }
        }
    }
]);