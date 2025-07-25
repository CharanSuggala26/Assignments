var webVitals = function(e) {
    "use strict";
    var n, t, r, i, o, a = -1,
        c = function(e) {
            addEventListener("pageshow", (function(n) {
                n.persisted && (a = n.timeStamp, e(n))
            }), !0)
        },
        u = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        s = function() {
            var e = u();
            return e && e.activationStart || 0
        },
        f = function(e, n) {
            var t = u(),
                r = "navigate";
            a >= 0 ? r = "back-forward-cache" : t && (document.prerendering || s() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : t.type && (r = t.type.replace(/_/g, "-")));
            return {
                name: e,
                value: void 0 === n ? -1 : n,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: r
            }
        },
        d = function(e, n, t) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var r = new PerformanceObserver((function(e) {
                        Promise.resolve().then((function() {
                            n(e.getEntries())
                        }))
                    }));
                    return r.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, t || {})), r
                }
            } catch (e) {}
        },
        l = function(e, n, t, r) {
            var i, o;
            return function(a) {
                n.value >= 0 && (a || r) && ((o = n.value - (i || 0)) || void 0 === i) && (i = n.value, n.delta = o, n.rating = function(e, n) {
                    return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good"
                }(n.value, t), e(n))
            }
        },
        v = function(e) {
            requestAnimationFrame((function() {
                return requestAnimationFrame((function() {
                    return e()
                }))
            }))
        },
        p = function(e) {
            var n = function(n) {
                "pagehide" !== n.type && "hidden" !== document.visibilityState || e(n)
            };
            addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
        },
        m = function(e) {
            var n = !1;
            return function(t) {
                n || (e(t), n = !0)
            }
        },
        h = -1,
        g = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        T = function(e) {
            "hidden" === document.visibilityState && h > -1 && (h = "visibilitychange" === e.type ? e.timeStamp : 0, E())
        },
        y = function() {
            addEventListener("visibilitychange", T, !0), addEventListener("prerenderingchange", T, !0)
        },
        E = function() {
            removeEventListener("visibilitychange", T, !0), removeEventListener("prerenderingchange", T, !0)
        },
        C = function() {
            return h < 0 && (h = g(), y(), c((function() {
                setTimeout((function() {
                    h = g(), y()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return h
                }
            }
        },
        L = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", (function() {
                return e()
            }), !0) : e()
        },
        b = [1800, 3e3],
        S = function(e, n) {
            n = n || {}, L((function() {
                var t, r = C(),
                    i = f("FCP"),
                    o = d("paint", (function(e) {
                        e.forEach((function(e) {
                            "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - s(), 0), i.entries.push(e), t(!0)))
                        }))
                    }));
                o && (t = l(e, i, b, n.reportAllChanges), c((function(r) {
                    i = f("FCP"), t = l(e, i, b, n.reportAllChanges), v((function() {
                        i.value = performance.now() - r.timeStamp, t(!0)
                    }))
                })))
            }))
        },
        w = [.1, .25],
        P = function(e, n) {
            n = n || {}, S(m((function() {
                var t, r = f("CLS", 0),
                    i = 0,
                    o = [],
                    a = function(e) {
                        e.forEach((function(e) {
                            if (!e.hadRecentInput) {
                                var n = o[0],
                                    t = o[o.length - 1];
                                i && e.startTime - t.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (i += e.value, o.push(e)) : (i = e.value, o = [e])
                            }
                        })), i > r.value && (r.value = i, r.entries = o, t())
                    },
                    u = d("layout-shift", a);
                u && (t = l(e, r, w, n.reportAllChanges), p((function() {
                    a(u.takeRecords()), t(!0)
                })), c((function() {
                    i = 0, r = f("CLS", 0), t = l(e, r, w, n.reportAllChanges), v((function() {
                        return t()
                    }))
                })), setTimeout(t, 0))
            })))
        },
        I = {
            passive: !0,
            capture: !0
        },
        F = new Date,
        A = function(e, i) {
            n || (n = i, t = e, r = new Date, k(removeEventListener), M())
        },
        M = function() {
            if (t >= 0 && t < r - F) {
                var e = {
                    entryType: "first-input",
                    name: n.type,
                    target: n.target,
                    cancelable: n.cancelable,
                    startTime: n.timeStamp,
                    processingStart: n.timeStamp + t
                };
                i.forEach((function(n) {
                    n(e)
                })), i = []
            }
        },
        D = function(e) {
            if (e.cancelable) {
                var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, n) {
                    var t = function() {
                            A(e, n), i()
                        },
                        r = function() {
                            i()
                        },
                        i = function() {
                            removeEventListener("pointerup", t, I), removeEventListener("pointercancel", r, I)
                        };
                    addEventListener("pointerup", t, I), addEventListener("pointercancel", r, I)
                }(n, e) : A(n, e)
            }
        },
        k = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(n) {
                return e(n, D, I)
            }))
        },
        B = [100, 300],
        x = function(e, r) {
            r = r || {}, L((function() {
                var o, a = C(),
                    u = f("FID"),
                    s = function(e) {
                        e.startTime < a.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), o(!0))
                    },
                    v = function(e) {
                        e.forEach(s)
                    },
                    h = d("first-input", v);
                o = l(e, u, B, r.reportAllChanges), h && p(m((function() {
                    v(h.takeRecords()), h.disconnect()
                }))), h && c((function() {
                    var a;
                    u = f("FID"), o = l(e, u, B, r.reportAllChanges), i = [], t = -1, n = null, k(addEventListener), a = s, i.push(a), M()
                }))
            }))
        },
        N = 0,
        R = 1 / 0,
        H = 0,
        O = function(e) {
            e.forEach((function(e) {
                e.interactionId && (R = Math.min(R, e.interactionId), H = Math.max(H, e.interactionId), N = H ? (H - R) / 7 + 1 : 0)
            }))
        },
        _ = function() {
            return o ? N : performance.interactionCount || 0
        },
        j = function() {
            "interactionCount" in performance || o || (o = d("event", O, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        },
        q = [200, 500],
        V = 0,
        z = function() {
            return _() - V
        },
        G = [],
        J = {},
        K = function(e) {
            var n = G[G.length - 1],
                t = J[e.interactionId];
            if (t || G.length < 10 || e.duration > n.latency) {
                if (t) t.entries.push(e), t.latency = Math.max(t.latency, e.duration);
                else {
                    var r = {
                        id: e.interactionId,
                        latency: e.duration,
                        entries: [e]
                    };
                    J[r.id] = r, G.push(r)
                }
                G.sort((function(e, n) {
                    return n.latency - e.latency
                })), G.splice(10).forEach((function(e) {
                    delete J[e.id]
                }))
            }
        },
        Q = function(e, n) {
            n = n || {}, L((function() {
                var t;
                j();
                var r, i = f("INP"),
                    o = function(e) {
                        e.forEach((function(e) {
                            (e.interactionId && K(e), "first-input" === e.entryType) && (!G.some((function(n) {
                                return n.entries.some((function(n) {
                                    return e.duration === n.duration && e.startTime === n.startTime
                                }))
                            })) && K(e))
                        }));
                        var n, t = (n = Math.min(G.length - 1, Math.floor(z() / 50)), G[n]);
                        t && t.latency !== i.value && (i.value = t.latency, i.entries = t.entries, r())
                    },
                    a = d("event", o, {
                        durationThreshold: null !== (t = n.durationThreshold) && void 0 !== t ? t : 40
                    });
                r = l(e, i, q, n.reportAllChanges), a && ("interactionId" in PerformanceEventTiming.prototype && a.observe({
                    type: "first-input",
                    buffered: !0
                }), p((function() {
                    o(a.takeRecords()), i.value < 0 && z() > 0 && (i.value = 0, i.entries = []), r(!0)
                })), c((function() {
                    G = [], V = _(), i = f("INP"), r = l(e, i, q, n.reportAllChanges)
                })))
            }))
        },
        U = [2500, 4e3],
        W = {},
        X = function(e, n) {
            n = n || {}, L((function() {
                var t, r = C(),
                    i = f("LCP"),
                    o = function(e) {
                        var n = e[e.length - 1];
                        n && n.startTime < r.firstHiddenTime && (i.value = Math.max(n.startTime - s(), 0), i.entries = [n], t())
                    },
                    a = d("largest-contentful-paint", o);
                if (a) {
                    t = l(e, i, U, n.reportAllChanges);
                    var u = m((function() {
                        W[i.id] || (o(a.takeRecords()), a.disconnect(), W[i.id] = !0, t(!0))
                    }));
                    ["keydown", "click"].forEach((function(e) {
                        addEventListener(e, (function() {
                            return setTimeout(u, 0)
                        }), !0)
                    })), p(u), c((function(r) {
                        i = f("LCP"), t = l(e, i, U, n.reportAllChanges), v((function() {
                            i.value = performance.now() - r.timeStamp, W[i.id] = !0, t(!0)
                        }))
                    }))
                }
            }))
        },
        Y = [800, 1800],
        Z = function e(n) {
            document.prerendering ? L((function() {
                return e(n)
            })) : "complete" !== document.readyState ? addEventListener("load", (function() {
                return e(n)
            }), !0) : setTimeout(n, 0)
        },
        $ = function(e, n) {
            n = n || {};
            var t = f("TTFB"),
                r = l(e, t, Y, n.reportAllChanges);
            Z((function() {
                var i = u();
                if (i) {
                    var o = i.responseStart;
                    if (o <= 0 || o > performance.now()) return;
                    t.value = Math.max(o - s(), 0), t.entries = [i], r(!0), c((function() {
                        t = f("TTFB", 0), (r = l(e, t, Y, n.reportAllChanges))(!0)
                    }))
                }
            }))
        };
    return e.CLSThresholds = w, e.FCPThresholds = b, e.FIDThresholds = B, e.INPThresholds = q, e.LCPThresholds = U, e.TTFBThresholds = Y, e.getCLS = P, e.getFCP = S, e.getFID = x, e.getINP = Q, e.getLCP = X, e.getTTFB = $, e.onCLS = P, e.onFCP = S, e.onFID = x, e.onINP = Q, e.onLCP = X, e.onTTFB = $, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});