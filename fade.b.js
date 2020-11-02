! function(t, e) {
    ! function(e) {
        for (; --e;) t.push(t.shift())
    }(++e)
}(_0x5b0b, 178);
var _0x4d12 = function(e, t) {
    return _0x5b0b[e -= 0]
};
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.fundebug = t() : e.fundebug = t()
}(window, function() {
    return function(n) {
        var r = {};

        function o(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
        }
        return o.m = n, o.c = r, o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return n
        }, o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            } : function() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 0)
    }([function(e, t, n) {
        var r = n(1),
            o = n(8),
            i = n(10),
            a = n(11),
            u = n(13),
            s = n(15),
            c = n(16),
            l = n(17),
            f = n(18),
            p = n(19),
            d = n(20),
            m = n(21),
            g = n(22),
            v = n(23),
            y = n(24),
            h = v.getConfig();
        r(h, y), o(h, y), i(h, y), a(h, y), u(h, y), s(h, y), c(h), l(h, y), f(h, y), p(h, y), d(h, y), m(h, y), g(h, y), window.fundebug = h, e[_0x4d12("0x0")] = h
    }, function(e, t, n) {
        var i = n(2);
        e.exports = function(r, o) {
            "addEventListener" in window && window.addEventListener("unhandledrejection", function(e) {
                try {
                    var t = {
                        type: "unhandledrejection",
                        name: "unhandledrejection",
                        message: e.reason
                    };
                    i(t, r, o)
                } catch (n) {}
            })
        }
    }, function(e, t, n) {
        var s = n(3),
            c = n(4),
            l = n(5),
            f = n(6),
            p = n(7);

        function r(e, t, n) {
            var r = t.apikey;
            if (c.verifyApiKey(r) && t.maxEventNumber && !t.silent && !l(t.silentDev)) {
                var o;
                t.maxEventNumber -= 1, o = t.revideo && t.revideo.fetchSequence && t.revideo.fetchSequence();
                var i, a = n.getBreadcrumbs();
                t.silentPerformance || (i = f.getPerformance());
                var u = {
                    notifierVersion: "2.2.0",
                    userAgent: window.navigator.userAgent,
                    locale: window.navigator.language || window.navigator.userLanguage,
                    url: window.location.href,
                    title: document.title,
                    appVersion: t.appversion,
                    apiKey: t.apikey,
                    releaseStage: t.releasestage,
                    metaData: e.metaData || t.metaData,
                    user: e.user || t.user,
                    name: e.name,
                    time: (new Date).getTime(),
                    message: e.message,
                    fileName: e.fileName,
                    lineNumber: e.lineNumber,
                    columnNumber: e.columnNumber,
                    stacktrace: e.stacktrace,
                    type: e.type,
                    severity: e.severity,
                    target: e.target,
                    req: e.req,
                    res: e.res,
                    httpTimeout: e.httpTimeout,
                    breadcrumbs: a,
                    redo: o,
                    performance: i
                };
                u.userAgent && u.userAgent.match(/Googlebot/) || (t.callback && t.callback(u), s.isFiltered(u, t.filters) || c.isSampled(t.sampleRate) && function(e, t) {
                    var n = function(e) {
                        var t;
                        try {
                            t = p(e)
                        } catch (n) {
                            delete e.metaData;
                            try {
                                t = p(e)
                            } catch (r) {
                                return
                            }
                        }
                        return t
                    }(e);
                    if (n)
                        if (window.XMLHttpRequest && window.atob) {
                            var r = new XMLHttpRequest;
                            r.sendByFundebug = !0, r.open("POST", t), r.setRequestHeader("Content-Type", "application/json"), r.send(n)
                        } else {
                            (new Image).src = t + "?event=" + encodeURIComponent(n)
                        }
                }(u, t.notifierUrl))
            }
        }
        e[_0x4d12("0x0")] = function(e, t, n) {
            t.revideo ? setTimeout(function() {
                r(e, t, n)
            }, 1e3) : r(e, t, n)
        }
    }, function(e, t) {
        function r(e, t) {
            if (!e) return !1;
            if (!t) return !1;
            if (Object.keys && !Object.keys(t).length) return !1;
            for (var n in t)
                if (t.hasOwnProperty(n))
                    if (t[n].constructor === RegExp) {
                        if (!t[n].test(e[n])) return !1
                    } else if (t[n].constructor === Object) {
                if (!r(e[n], t[n])) return !1
            } else {
                if (t[n].constructor !== String || "inexistence" !== t[n]) return !1;
                if (e.hasOwnProperty(n)) return !1
            }
            return !0
        }
        t.isFiltered = function(e, t) {
            if (!t || !t.length) return !1;
            for (var n = 0; n < t.length; n++)
                if (r(e, t[n])) return !0;
            return !1
        }
    }, function(e, t) {
        t.isSampled = function(e) {
            return !e && 0 !== e || (e = parseFloat(e), !!isNaN(e) || Math[_0x4d12("0x1")]() <= e)
        }, t.verifyApiKey = function(e, t) {
            return e ? !!e.match(/^[0-9a-z]{64}$/i) || (t || console.error("Fundebug: apikey格式错误"), !1) : (t || console.error("Fundebug: 请配置apikey"), !1)
        }
    }, function(e, t) {
        e.exports = function(e) {
            return !(!e || !(t = window.location[_0x4d12("0x2")]) || !/^http:\/\/localhost/.test(t) && !/^http:\/\/(\d{1,3}\.){3}\d{1,3}/.test(t));
            var t
        }
    }, function(e, t) {
        t.getPerformance = function() {
            if ("performance" in window && "getEntriesByType" in performance) return {
                navigation: performance[_0x4d12("0x3")]("navigation")
            }
        }
    }, function(e, t) {
        e.exports = function(t, n, r, o) {
            var g, v, y, h, i = o && o.redactedKeys ? o.redactedKeys : [],
                a = o && o.redactedPaths ? o.redactedPaths : [];
            return JSON.stringify((g = i, v = a, y = [], h = 0, function e(t, n) {
                function r() {
                    return n.length > x && w < h
                }
                if (h++, n.length > b) return T;
                if (r()) return T;
                if (null === t || "object" != typeof t) return t;
                if (function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return !0;
                        return !1
                    }(y, t)) return "[Circular]";
                if (y.push(t), "function" == typeof t.toJSON) try {
                    h--;
                    var o = e(t.toJSON(), n);
                    return y.pop(), o
                } catch (d) {
                    return N(d)
                }
                var i, a;
                if ((i = t) instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(i))) {
                    h--;
                    var u = e({
                        name: t.name,
                        message: t.message
                    }, n);
                    return y.pop(), u
                }
                if (a = t, "[object Array]" === Object.prototype.toString.call(a)) {
                    for (var s = [], c = 0, l = t.length; c < l; c++) {
                        if (r()) {
                            s.push(T);
                            break
                        }
                        s.push(e(t[c], n.concat("[]")))
                    }
                    return y.pop(), s
                }
                var f = {};
                try {
                    for (var p in t)
                        if (Object.prototype.hasOwnProperty.call(t, p))
                            if (E(v, n.join(".")) && k(g, p)) f[p] = "[REDACTED]";
                            else {
                                if (r()) {
                                    f[p] = T;
                                    break
                                }
                                f[p] = e(H(t, p), n.concat(p))
                            }
                } catch (m) {}
                return y.pop(), f
            }(t, [])), n, r)
        };
        var b = 20,
            w = 25e3,
            x = 8,
            T = "...";

        function N(e) {
            return "[Throws: " + (e ? e.message : "?") + "]"
        }

        function E(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (0 === t.indexOf(e[n])) return !0;
            return !1
        }

        function k(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if ("string" == typeof e[n] && e[n] === t) return !0;
                if (e[n] && "function" == typeof e[n].test && e[n].test(t)) return !0
            }
            return !1
        }

        function H(e, t) {
            try {
                return e[t]
            } catch (n) {
                return N(n)
            }
        }
    }, function(e, t, n) {
        var l = n(2),
            f = n(9);
        e.exports = function(s, c) {
            window.onerror = function(e, t, n, r, o) {
                var i;
                void 0 === r && window.event && (r = window.event.errorCharacter), i = t && t !== window.location.href ? t : null;
                var a = f(o),
                    u = {
                        message: e,
                        lineNumber: n,
                        columnNumber: r,
                        fileName: i || a && a.fileName,
                        name: a && a.name || "uncaught error",
                        stacktrace: o && o.stack || function() {
                            var e, t, n = [];
                            try {
                                t = arguments.callee.caller.caller
                            } catch (o) {
                                t = ""
                            }
                            for (; t && n.length < 10;) {
                                var r = t.toString().match(/function\s*([\w\_$]+)?\s*\(/i);
                                e = r && r[1] || "[anonymous]", n.push(e), t = t.caller
                            }
                            return "generated-stack:\n" + n.join("\n")
                        }(),
                        severity: "error",
                        type: "uncaught"
                    };
                return l(u, s, c), !1
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (!e) return null;
            var t = {};
            return window.XMLHttpRequest ? t = {
                name: e.name,
                message: e.message,
                fileName: e.fileName || e.sourceURL,
                lineNumber: e.lineNumber || e.line,
                columnNumber: e.columnNumber || e.column
            } : t.message = e.message, t
        }
    }, function(e, t, n) {
        var s = n(2);
        e.exports = function(a, u) {
            window.addEventListener && window.addEventListener("error", function(e) {
                try {
                    if (a.silentResource || e.message) return;
                    var t, n = (t = e.target ? e.target : e.srcElement) && t.outerHTML;
                    n && 200 < n.length && (n = n.slice(0, 200));
                    var r = {
                        type: "resourceError",
                        target: {
                            outerHTML: n,
                            src: t && t.src,
                            tagName: t && t[_0x4d12("0x4")],
                            id: t && t.id,
                            className: t && t.className,
                            name: t && t.name,
                            type: t && t.type,
                            XPath: function(e) {
                                for (var t = []; e && e.nodeType === Node.ELEMENT_NODE; e = e.parentNode) {
                                    var n, r = 0,
                                        o = !1;
                                    for (n = e.previousSibling; n; n = n.previousSibling) n.nodeType !== Node.DOCUMENT_TYPE_NODE && n.nodeName === e[_0x4d12("0x5")] && ++r;
                                    for (n = e.nextSibling; n && !o; n = n.nextSibling) n.nodeName === e.nodeName && (o = !0);
                                    var i = (e.prefix ? e[_0x4d12("0x6")] + ":" : "") + e.localName,
                                        a = r || o ? "[" + (r + 1) + "]" : "";
                                    t.splice(0, 0, i + a)
                                }
                                return t.length ? "/" + t.join("/") : null
                            }(t),
                            selector: function(e) {
                                for (var t = []; e.parentNode;) {
                                    if (e.id) {
                                        t.unshift("#" + e.id);
                                        break
                                    }
                                    if (e === e.ownerDocument.documentElement) t.unshift(e.tagName);
                                    else {
                                        for (var n = 1, r = e; r.previousElementSibling; r = r.previousElementSibling, n++);
                                        t.unshift(e.tagName + ":nth-child(" + n + ")")
                                    }
                                    e = e.parentNode
                                }
                                return t.join(" > ")
                            }(t),
                            timeStamp: e.timeStamp
                        }
                    };
                    if (t.src === window.location.href) return;
                    if (t.src && t.src.match(/.*\/(.*)$/) && !t.src.match(/.*\/(.*)$/)[1]) return;
                    if (r.target.src && window.XMLHttpRequest) {
                        var o = new XMLHttpRequest;
                        o.sendByFundebug = !0, o.open("HEAD", r.target.src), o.send(), o.onload = function(e) {
                            200 !== e.target.status && (r.target.status = e.target.status, r.target.statusText = e.target[_0x4d12("0x7")]), s(r, a, u)
                        }
                    }
                } catch (i) {}
            }, !0)
        }
    }, function(e, t, n) {
        var f = n(12);
        e.exports = function(c, l) {
            if (window.fetch) {
                var t = window.fetch;
                window[_0x4d12("0x8")] = function(e, u) {
                    var s = (new Date).getTime();
                    return t.apply(this, arguments).then(function(e) {
                        return function(e) {
                            try {
                                var t = (new Date).getTime() - s,
                                    n = u && u.method || "GET",
                                    r = e.url,
                                    o = e.status,
                                    i = e.statusText;
                                ! function(e, t, n, r, o) {
                                    if (!c.silentHttp && (f.ifReportHttpError(n, t) || f[_0x4d12("0x9")](o, c.httpTimeout))) {
                                        var i, a = {
                                                method: e,
                                                url: t
                                            },
                                            u = {
                                                status: n,
                                                statusText: r,
                                                elapsedTime: o
                                            };
                                        i = f.ifReportHttpError(n, t) ? "httpError" : "httpTimeout", f.sendHttpErrorToFundebug(i, a, u, c, l)
                                    }
                                }(n, r, o, i, t),
                                function(e, t, n, r, o, i) {
                                    if (!c.silentBehavior) {
                                        var a = {
                                            type: "fetch",
                                            page: {
                                                url: window.location.href,
                                                title: document.title
                                            },
                                            detail: {
                                                method: e,
                                                url: t,
                                                status: n,
                                                statusText: r
                                            },
                                            elapsedTime: o,
                                            time: i
                                        };
                                        l.addBreadcrumb(a)
                                    }
                                }(n, r, o, i, t, s)
                            } catch (a) {}
                        }(e), e
                    })
                }
            }
        }
    }, function(e, t, n) {
        var a = n(2);
        t.ifReportHttpTimout = function(e, t) {
            return "number" == typeof t && t < e
        }, t.ifReportHttpError = function(e, t) {
            return !(0 === e && /^file:\/\/\//.test(t) || /^2\d\d$/.test(e))
        }, t.sendHttpErrorToFundebug = function(e, t, n, r, o) {
            var i = {
                type: e,
                req: t,
                res: n
            };
            "number" == typeof r.httpTimeout && (i.httpTimeout = r.httpTimeout), a(i, r, o)
        }
    }, function(e, t, n) {
        var m = n(14),
            g = n(12);
        e.exports = function(p, d) {
            if (window.XMLHttpRequest && window.XMLHttpRequest.prototype) {
                var r = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function(e, t) {
                    try {
                        this.fundebugTemp = {
                            method: e,
                            url: t,
                            startTime: (new Date).getTime()
                        }
                    } catch (n) {}
                    r && r.apply(this, arguments)
                };
                var o = XMLHttpRequest.prototype.send;
                XMLHttpRequest.prototype.send = function(e) {
                    try {
                        if (!this.sendByFundebug) {
                            var t = this;
                            t.fundebugTemp.fundebugHttpRecorded = !1;
                            var n = t.onloadend;
                            t.onloadend = function() {
                                ! function(e, t) {
                                    try {
                                        var n, r = (new Date).getTime(),
                                            o = e.fundebugTemp[_0x4d12("0xa")],
                                            i = r - o,
                                            a = e.fundebugTemp.method,
                                            u = e.responseURL || e.fundebugTemp.url,
                                            s = e.status,
                                            c = e.statusText,
                                            l = e.response;
                                        p.setHttpBody && (n = m.copyWithoutPrivacy(t)), e.fundebugTemp.fundebugHttpRecorded || (function(e, t, n, r, o, i, a) {
                                            if (!p.silentHttp && (g.ifReportHttpError(r, t) || g.ifReportHttpTimout(a, p.httpTimeout))) {
                                                var u, s = {
                                                        method: e,
                                                        url: t,
                                                        body: n
                                                    },
                                                    c = {
                                                        status: r,
                                                        statusText: o,
                                                        response: i,
                                                        elapsedTime: a
                                                    };
                                                u = g.ifReportHttpError(r, t) ? "httpError" : "httpTimeout", g.sendHttpErrorToFundebug(u, s, c, p, d)
                                            }
                                        }(a, u, n, s, c, l, i), function(e, t, n, r, o, i) {
                                            if (!p.silentBehavior) {
                                                var a = {
                                                    type: "XMLHttpRequest",
                                                    page: {
                                                        url: window.location.href
                                                    },
                                                    detail: {
                                                        method: e,
                                                        url: t,
                                                        status: n,
                                                        statusText: r
                                                    },
                                                    elapsedTime: o,
                                                    time: i
                                                };
                                                d.addBreadcrumb(a)
                                            }
                                        }(a, u, s, c, i, o), e[_0x4d12("0xb")].fundebugHttpRecorded = !0)
                                    } catch (f) {}
                                }(t, e), n && n.apply(this, arguments)
                            }
                        }
                    } catch (r) {}
                    o && o.apply(this, arguments)
                }
            }
        }
    }, function(e, t) {
        t.copyWithoutPrivacy = function(e) {
            try {
                var t = e;
                return "string" == typeof e && (t = JSON[_0x4d12("0xc")](e)).password && (t.password = "Fundebug: deleted for protectiong privary"), t
            } catch (n) {
                return e
            }
        }, t.copyWithoutCircle = function(e) {
            return e && "object" == typeof e && function(e) {
                try {
                    JSON.stringify(e)
                } catch (t) {
                    return !!(t.message.includes("Converting circular structure to JSON") || t.message.includes("JSON.stringify cannot serialize cyclic structures") || t.message.includes("cyclic object value") || t.message.includes("Circular reference in value argument not supported") || t.message[_0x4d12("0xd")]("循环引用"))
                }
                return !1
            }(e) ? "entries" in Object ? function r(e, o) {
                try {
                    var i = {};
                    return Object.entries(e).forEach(function(e) {
                        var t = e[0],
                            n = e[1];
                        "object" == typeof n && null !== n ? o.has(n) ? i[t] = "property removed because of circular structure" : 10 < o.size ? i[t] = "property removed to avoid deep recursion" : (o.add(n), i[t] = r(n, o)) : i[t] = n
                    }), i
                } catch (t) {
                    return e
                }
            }(e, new Set([e])) : {} : e
        }
    }, function(e, t, n) {
        var a = n(2);
        e.exports = function(o, i) {
            try {
                if (o.silentWebsocket) return;
                if (!("WebSocket" in window)) return;
                var t = Object.getOwnPropertyDescriptor(WebSocket.prototype, "onerror");
                if (!t) return;
                if (!t.configurable) return;
                Object.defineProperty(WebSocket.prototype, "onerror", {
                    set: function() {
                        if (o.silentWebsocket) return t.set.apply(this, arguments);
                        try {
                            var r = arguments[0];
                            return t.set.apply(this, [function(e) {
                                try {
                                    var t = {
                                        type: "websocketError",
                                        target: {
                                            type: "onerror",
                                            url: e.target.url,
                                            timeStamp: e.timeStamp
                                        }
                                    };
                                    a(t, o, i), "function" == typeof r && r[_0x4d12("0xe")](this, arguments)
                                } catch (n) {
                                    "function" == typeof r && r.apply(this, arguments)
                                }
                            }])
                        } catch (e) {
                            return t.set.apply(this, arguments)
                        }
                    }
                })
            } catch (e) {}
        }
    }, function(e, t, n) {
        n(2), n(4), e.exports = function(o) {
            o.init = function(e) {
                for (var t = 0, n = [_0x4d12("0xf"), "appversion", "releasestage", "user", "metaData", "callback", "setHttpBody", "httpTimeout", "filters", "silent", "silentDev", _0x4d12("0x10"), "silentHttp", "silentWebsocket", "silentConsole", "silentPerformance", "sampleRate", "domain", "notifierUrl"]; t < n.length; t++) {
                    var r = n[t];
                    e[r] && (o[r] = e[r])
                }
            }
        }
    }, function(e, t, n) {
        var a = n(2),
            u = n(9);
        e.exports = function(o, i) {
            o.notifyError = function(e, t) {
                if (e) {
                    window.console && console.error(e);
                    var n = u(e),
                        r = {
                            name: n.name || t && t[_0x4d12("0x11")] || "caught error",
                            message: n.message || t && t.message,
                            stacktrace: e.stack,
                            fileName: n.fileName,
                            lineNumber: n.lineNumber,
                            columnNumber: n.columnNumber,
                            severity: t && t.severity || "error",
                            type: "caught",
                            user: t && t.user,
                            metaData: t && t.metaData
                        };
                    a(r, o, i)
                }
            }
        }
    }, function(e, t, n) {
        var u = n(2),
            s = n(4);
        e.exports = function(i, a) {
            i.notify = function(e, t, n) {
                if (e) {
                    var r = {
                            message: t || n && n.message,
                            name: e || n && n.name,
                            severity: n && n.message || "warning",
                            stacktrace: function() {
                                var e;
                                try {
                                    throw new Error("")
                                } catch (t) {
                                    e = t.stack
                                }
                                if (e) return "generated-stack:\n" + (e = e.replace(/(.*?)fundebug(.*?)\.js(.*)\n?/gm, "")).replace(/^Error\n/g, "")
                            }(),
                            type: "notification",
                            user: n && n.user,
                            metaData: n && n[_0x4d12("0x12")]
                        },
                        o = i.apikey;
                    return s[_0x4d12("0x13")](o, !0) ? (u(r, i, a), "fundebug.com" === location.host || "www.fundebug.com" === location.host ? "亲，不要在Fundebug网站测试哦；请将Fundebug插件集成到您的网站，然后进行测试!" : "请查看邮箱以及Fundebug控制台!") : o ? "apikey格式错误" : "请配置apikey"
                }
            }
        }
    }, function(e, t, n) {
        var a = n(2),
            u = n(4);
        e.exports = function(o, i) {
            o.test = function(e, t) {
                var n = {
                        name: e || "Test",
                        message: t || "Hello, Fundebug!",
                        severity: "test",
                        type: "test"
                    },
                    r = o.apikey;
                return u.verifyApiKey(r, !0) ? (a(n, o, i), "fundebug.com" === location.host || "www.fundebug.com" === location.host ? "亲，不要在Fundebug网站测试哦；请将Fundebug插件集成到您的网站，然后进行测试!" : "请查看邮箱以及Fundebug控制台!") : r ? "apikey格式错误" : "请配置apikey"
            }
        }
    }, function(e, t) {
        e.exports = function(o, i) {
            function e(e) {
                var t, n = (t = e.target ? e.target : e.srcElement) && t.outerHTML;
                n && 200 < n.length && (n = n.slice(0, 200));
                var r = {
                    type: "click",
                    page: {
                        url: window.location.href,
                        title: document.title
                    },
                    detail: {
                        outerHTML: n,
                        tagName: t && t.tagName,
                        id: t && t.id,
                        className: t && t.className,
                        name: t && t.name
                    },
                    time: (new Date).getTime()
                };
                i.addBreadcrumb(r, o.silentBehavior)
            }
            window.addEventListener ? window.addEventListener("click", e, !0) : document.attachEvent("onclick", e)
        }
    }, function(e, t) {
        e.exports = function(r, o) {
            var i = {
                url: window[_0x4d12("0x14")].href,
                title: ""
            };
            document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
                i = {
                    url: window.location.href,
                    title: document.title
                }
            }) : document.attachEvent("onreadystatechange", function() {
                i = {
                    url: window.location.href,
                    title: document.title
                }
            });
            var t = window.onpopstate;
            window.onpopstate = function() {
                var e = {
                    url: window.location.href
                };
                if (i.title || (i.title = document.title), i.url !== e[_0x4d12("0x15")] && u(i, e), t) return t.apply(this, arguments)
            };
            var n = window.history.pushState;
            n && (window.history.pushState = function() {
                i = {
                    url: window.location.href,
                    title: document.title
                };
                var e = {};
                if (3 === arguments.length && (e.url = arguments[2]), i.url !== e.url && u(i, e), n) return n.apply(this, arguments)
            });
            var a = window.onhashchange;

            function u(e, t) {
                var n = {
                    type: "navigation",
                    detail: {
                        from: e,
                        to: i = t
                    },
                    time: (new Date).getTime()
                };
                JSON.stringify(n, null, 4), o.addBreadcrumb(n, r.silentBehavior)
            }
            window.onhashchange, window.onhashchange = function() {
                var e = {
                    url: window.location.href,
                    title: document.title
                };
                if (i.url !== e[_0x4d12("0x15")] && u(i, e), a) return a.apply(this, arguments)
            }
        }
    }, function(e, t, n) {
        var s = n(14);
        e.exports = function(a, u) {
            function e(o) {
                var i = console[o];
                console[o] = function() {
                    try {
                        var e = {
                            type: "console",
                            page: {
                                url: window.location.href,
                                title: document.title
                            },
                            detail: {
                                level: o,
                                arguments: (t = arguments, t[0] instanceof Error ? [].slice.apply(t).join(" ") : s.copyWithoutCircle(t))
                            },
                            time: (new Date).getTime()
                        };
                        a.silentConsole || u.addBreadcrumb(e, a.silentBehavior)
                    } catch (r) {}
                    var t;
                    if ("function" == typeof i)
                        if (i.apply) i.apply(console, arguments);
                        else {
                            var n = Array.prototype.slice.apply(arguments).join(" ");
                            i(n)
                        }
                }
            }
            for (var t = ["log", "warn", "debug", "info"], n = {}, r = 0; r < t.length; r++) window.console && (n[t[r]] = console[t[r]], a.silentConsole || e(t[r]));
            document.addEventListener && document.addEventListener("DOMContentLoaded", function() {
                for (var e = 0; e < t.length; e++) window.console && a.silentConsole && n[t[e]] && (console[t[e]] = n[t[e]])
            })
        }
    }, function(e, t) {
        var n = function() {
            var e = document.currentScript;
            if (!e) {
                var t = document.scripts;
                e = t[t.length - 1]
            }
            return e
        }();
        t.getConfig = function() {
            var e = {};
            return e.silent = n.getAttribute("silent") || !1, "false" === e.silent && (e.silent = !1), e.maxEventNumber = n.getAttribute("maxEventNumber") || n.getAttribute("maxeventnumber") || 10, e.setHttpBody = n.getAttribute("setHttpBody") || n.getAttribute("sethttpbody") || !1, "false" === e.setHttpBody && (e.setHttpBody = !1), e.silentResource = n.getAttribute("silentResource") || n.getAttribute("silentresource") || !1, "false" === e.silentResource && (e.silentResource = !1), e.silentWebsocket = n.getAttribute("silentWebsocket") || n.getAttribute("silentWebsocket") || !1, "false" === e.silentWebsocket && (e.silentWebsocket = !1), e.silentHttp = n.getAttribute("silentHttp") || n.getAttribute(_0x4d12("0x16")) || !1, "false" === e[_0x4d12("0x17")] && (e.silentHttp = !1), e.silentConsole = n.getAttribute("silentConsole") || n.getAttribute("silentconsole") || !1, "false" === e.silentConsole && (e.silentConsole = !1), e.sampleRate = n.getAttribute("sampleRate") || n.getAttribute("samplerate"), e.silentBehavior = n.getAttribute("silentBehavior") || n.getAttribute("silentbehavior") || !1, "false" === e.silentBehavior && (e.silentBehavior = !1), e.silentPerformance = n.getAttribute("silentPerformance") || n.getAttribute("silentperformance") || !1, "false" === e.silentPerformance && (e.silentPerformance = !1), e.silentDev = n.getAttribute("silentDev") || n.getAttribute("silentdev") || !1, "false" === e.silentDev && (e.silentDev = !1), e.apikey = n.getAttribute("apikey"), e.appversion = n.getAttribute("appversion"), e.releasestage = n.getAttribute("releasestage"), e.notifierUrl = n.getAttribute("notifierUrl") || "https://web.fundebug.net/event/", e
        }
    }, function(e, t) {
        var n = [],
            r = 0;
        t.addBreadcrumb = function(e, t) {
            t || (n[r] = e, 20 == ++r && (r = 0))
        }, t.getBreadcrumbs = function() {
            return n
        }
    }])
});