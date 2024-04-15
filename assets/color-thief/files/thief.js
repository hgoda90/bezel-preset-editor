parcelRequire = function(e, r, t, n) {
	var i, o = "function" == typeof parcelRequire && parcelRequire,
		u = "function" == typeof require && require;

	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = "function" == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && "string" == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			p.resolve = function(r) {
				return e[t][1][r] || r
			}, p.cache = {};
			var l = r[t] = new f.Module(t);
			e[t][0].call(l.exports, p, l, l.exports, this)
		}
		return r[t].exports;

		function p(e) {
			return f(p.resolve(e))
		}
	}
	f.isParcelRequire = !0, f.Module = function(e) {
		this.id = e, this.bundle = f, this.exports = {}
	}, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
		e[r] = [function(e, r) {
			r.exports = t
		}, {}]
	};
	for (var c = 0; c < t.length; c++) try {
		f(t[c])
	} catch (e) {
		i || (i = e)
	}
	if (t.length) {
		var l = f(t[t.length - 1]);
		"object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
			return l
		}) : n && (this[n] = l)
	}
	if (parcelRequire = f, i) throw i;
	return f
}({
	"g5IB": [function(require, module, exports) {

		var t, e, n = module.exports = {};

		function r() {
			throw new Error("setTimeout has not been defined")
		}

		function o() {
			throw new Error("clearTimeout has not been defined")
		}

		function i(e) {
			if (t === setTimeout) return setTimeout(e, 0);
			if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
			try {
				return t(e, 0)
			} catch (n) {
				try {
					return t.call(null, e, 0)
				} catch (n) {
					return t.call(this, e, 0)
				}
			}
		}

		function u(t) {
			if (e === clearTimeout) return clearTimeout(t);
			if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
			try {
				return e(t)
			} catch (n) {
				try {
					return e.call(null, t)
				} catch (n) {
					return e.call(this, t)
				}
			}
		}! function() {
			try {
				t = "function" == typeof setTimeout ? setTimeout : r
			} catch (n) {
				t = r
			}
			try {
				e = "function" == typeof clearTimeout ? clearTimeout : o
			} catch (n) {
				e = o
			}
		}();
		var c, s = [],
			l = !1,
			a = -1;

		function f() {
			l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
		}

		function h() {
			if (!l) {
				var t = i(f);
				l = !0;
				for (var e = s.length; e;) {
					for (c = s, s = []; ++a < e;) c && c[a].run();
					a = -1, e = s.length
				}
				c = null, l = !1, u(t)
			}
		}

		function m(t, e) {
			this.fun = t, this.array = e
		}

		function p() {}
		n.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			s.push(new m(t, e)), 1 !== s.length || l || i(h)
		}, m.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) {
			return []
		}, n.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, n.cwd = function() {
			return "/"
		}, n.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, n.umask = function() {
			return 0
		};
	}, {}],
	"HlZQ": [function(require, module, exports) {
		var global = arguments[3];
		var process = require("process");
		var define;
		var e, t = arguments[3],
			n = require("process");
		! function(e, t) {
			"use strict";
			"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
				if (!e.document) throw new Error("jQuery requires a window with a document");
				return t(e)
			} : t(e)
		}("undefined" != typeof window ? window : this, function(t, n) {
			"use strict";
			var r = [],
				i = Object.getPrototypeOf,
				o = r.slice,
				a = r.flat ? function(e) {
					return r.flat.call(e)
				} : function(e) {
					return r.concat.apply([], e)
				},
				s = r.push,
				u = r.indexOf,
				l = {},
				c = l.toString,
				f = l.hasOwnProperty,
				p = f.toString,
				d = p.call(Object),
				h = {},
				g = function(e) {
					return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
				},
				v = function(e) {
					return null != e && e === e.window
				},
				y = t.document,
				m = {
					type: !0,
					src: !0,
					nonce: !0,
					noModule: !0
				};

			function x(e, t, n) {
				var r, i, o = (n = n || y).createElement("script");
				if (o.text = e, t)
					for (r in m)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
				n.head.appendChild(o).parentNode.removeChild(o)
			}

			function b(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
			}
			var w = function(e, t) {
				return new w.fn.init(e, t)
			};

			function T(e) {
				var t = !!e && "length" in e && e.length,
					n = b(e);
				return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
			}
			w.fn = w.prototype = {
				jquery: "3.6.3",
				constructor: w,
				length: 0,
				toArray: function() {
					return o.call(this)
				},
				get: function(e) {
					return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
				},
				pushStack: function(e) {
					var t = w.merge(this.constructor(), e);
					return t.prevObject = this, t
				},
				each: function(e) {
					return w.each(this, e)
				},
				map: function(e) {
					return this.pushStack(w.map(this, function(t, n) {
						return e.call(t, n, t)
					}))
				},
				slice: function() {
					return this.pushStack(o.apply(this, arguments))
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				even: function() {
					return this.pushStack(w.grep(this, function(e, t) {
						return (t + 1) % 2
					}))
				},
				odd: function() {
					return this.pushStack(w.grep(this, function(e, t) {
						return t % 2
					}))
				},
				eq: function(e) {
					var t = this.length,
						n = +e + (e < 0 ? t : 0);
					return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
				},
				end: function() {
					return this.prevObject || this.constructor()
				},
				push: s,
				sort: r.sort,
				splice: r.splice
			}, w.extend = w.fn.extend = function() {
				var e, t, n, r, i, o, a = arguments[0] || {},
					s = 1,
					u = arguments.length,
					l = !1;
				for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
					if (null != (e = arguments[s]))
						for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
				return a
			}, w.extend({
				expando: "jQuery" + ("3.6.3" + Math.random()).replace(/\D/g, ""),
				isReady: !0,
				error: function(e) {
					throw new Error(e)
				},
				noop: function() {},
				isPlainObject: function(e) {
					var t, n;
					return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
				},
				isEmptyObject: function(e) {
					var t;
					for (t in e) return !1;
					return !0
				},
				globalEval: function(e, t, n) {
					x(e, {
						nonce: t && t.nonce
					}, n)
				},
				each: function(e, t) {
					var n, r = 0;
					if (T(e))
						for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
					else
						for (r in e)
							if (!1 === t.call(e[r], r, e[r])) break;
					return e
				},
				makeArray: function(e, t) {
					var n = t || [];
					return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
				},
				inArray: function(e, t, n) {
					return null == t ? -1 : u.call(t, e, n)
				},
				merge: function(e, t) {
					for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
					return e.length = i, e
				},
				grep: function(e, t, n) {
					for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
					return r
				},
				map: function(e, t, n) {
					var r, i, o = 0,
						s = [];
					if (T(e))
						for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
					else
						for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
					return a(s)
				},
				guid: 1,
				support: h
			}), "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
				l["[object " + t + "]"] = t.toLowerCase()
			});
			var C = function(e) {
				var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
					w = e.document,
					T = 0,
					C = 0,
					S = ue(),
					E = ue(),
					k = ue(),
					A = ue(),
					N = function(e, t) {
						return e === t && (f = !0), 0
					},
					j = {}.hasOwnProperty,
					D = [],
					q = D.pop,
					L = D.push,
					H = D.push,
					O = D.slice,
					P = function(e, t) {
						for (var n = 0, r = e.length; n < r; n++)
							if (e[n] === t) return n;
						return -1
					},
					R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					M = "[\\x20\\t\\r\\n\\f]",
					I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
					W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
					F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
					$ = new RegExp(M + "+", "g"),
					B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
					_ = new RegExp("^" + M + "*," + M + "*"),
					z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
					U = new RegExp(M + "|>"),
					X = new RegExp(F),
					V = new RegExp("^" + I + "$"),
					G = {
						ID: new RegExp("^#(" + I + ")"),
						CLASS: new RegExp("^\\.(" + I + ")"),
						TAG: new RegExp("^(" + I + "|[*])"),
						ATTR: new RegExp("^" + W),
						PSEUDO: new RegExp("^" + F),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
						bool: new RegExp("^(?:" + R + ")$", "i"),
						needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
					},
					Y = /HTML$/i,
					Q = /^(?:input|select|textarea|button)$/i,
					J = /^h\d$/i,
					K = /^[^{]+\{\s*\[native \w/,
					Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					ee = /[+~]/,
					te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
					ne = function(e, t) {
						var n = "0x" + e.slice(1) - 65536;
						return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
					},
					re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
					ie = function(e, t) {
						return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
					},
					oe = function() {
						p()
					},
					ae = be(function(e) {
						return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
					}, {
						dir: "parentNode",
						next: "legend"
					});
				try {
					H.apply(D = O.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
				} catch (Ee) {
					H = {
						apply: D.length ? function(e, t) {
							L.apply(e, O.call(t))
						} : function(e, t) {
							for (var n = e.length, r = 0; e[n++] = t[r++];);
							e.length = n - 1
						}
					}
				}

				function se(e, t, r, i) {
					var o, s, l, c, f, h, y, m = t && t.ownerDocument,
						w = t ? t.nodeType : 9;
					if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
					if (!i && (p(t), t = t || d, g)) {
						if (11 !== w && (f = Z.exec(e)))
							if (o = f[1]) {
								if (9 === w) {
									if (!(l = t.getElementById(o))) return r;
									if (l.id === o) return r.push(l), r
								} else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
							} else {
								if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
								if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
							} if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
							if (y = e, m = t, 1 === w && (U.test(e) || z.test(e))) {
								for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
								y = h.join(",")
							}
							try {
								if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + y + "))")) throw new Error;
								return H.apply(r, m.querySelectorAll(y)), r
							} catch (T) {
								A(e, !0)
							} finally {
								c === b && t.removeAttribute("id")
							}
						}
					}
					return u(e.replace(B, "$1"), t, r, i)
				}

				function ue() {
					var e = [];
					return function t(n, i) {
						return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
					}
				}

				function le(e) {
					return e[b] = !0, e
				}

				function ce(e) {
					var t = d.createElement("fieldset");
					try {
						return !!e(t)
					} catch (Ee) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t), t = null
					}
				}

				function fe(e, t) {
					for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
				}

				function pe(e, t) {
					var n = t && e,
						r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
					if (r) return r;
					if (n)
						for (; n = n.nextSibling;)
							if (n === t) return -1;
					return e ? 1 : -1
				}

				function de(e) {
					return function(t) {
						return "input" === t.nodeName.toLowerCase() && t.type === e
					}
				}

				function he(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && t.type === e
					}
				}

				function ge(e) {
					return function(t) {
						return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
					}
				}

				function ve(e) {
					return le(function(t) {
						return t = +t, le(function(n, r) {
							for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
						})
					})
				}

				function ye(e) {
					return e && void 0 !== e.getElementsByTagName && e
				}
				for (t in n = se.support = {}, o = se.isXML = function(e) {
						var t = e && e.namespaceURI,
							n = e && (e.ownerDocument || e).documentElement;
						return !Y.test(t || n && n.nodeName || "HTML")
					}, p = se.setDocument = function(e) {
						var t, i, a = e ? e.ownerDocument || e : w;
						return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function(e) {
							return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
						}), n.cssSupportsSelector = ce(function() {
							return CSS.supports("selector(*)") && d.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
						}), n.attributes = ce(function(e) {
							return e.className = "i", !e.getAttribute("className")
						}), n.getElementsByTagName = ce(function(e) {
							return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
						}), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function(e) {
							return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
						}), n.getById ? (r.filter.ID = function(e) {
							var t = e.replace(te, ne);
							return function(e) {
								return e.getAttribute("id") === t
							}
						}, r.find.ID = function(e, t) {
							if (void 0 !== t.getElementById && g) {
								var n = t.getElementById(e);
								return n ? [n] : []
							}
						}) : (r.filter.ID = function(e) {
							var t = e.replace(te, ne);
							return function(e) {
								var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
								return n && n.value === t
							}
						}, r.find.ID = function(e, t) {
							if (void 0 !== t.getElementById && g) {
								var n, r, i, o = t.getElementById(e);
								if (o) {
									if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
									for (i = t.getElementsByName(e), r = 0; o = i[r++];)
										if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
								}
								return []
							}
						}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
							return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
						} : function(e, t) {
							var n, r = [],
								i = 0,
								o = t.getElementsByTagName(e);
							if ("*" === e) {
								for (; n = o[i++];) 1 === n.nodeType && r.push(n);
								return r
							}
							return o
						}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
							if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
						}, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
							var t;
							h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
						}), ce(function(e) {
							e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
							var t = d.createElement("input");
							t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
						})), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
							n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", F)
						}), n.cssSupportsSelector || v.push(":has"), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
							var n = 9 === e.nodeType && e.documentElement || e,
								r = t && t.parentNode;
							return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
						} : function(e, t) {
							if (t)
								for (; t = t.parentNode;)
									if (t === e) return !0;
							return !1
						}, N = t ? function(e, t) {
							if (e === t) return f = !0, 0;
							var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
							return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
						} : function(e, t) {
							if (e === t) return f = !0, 0;
							var n, r = 0,
								i = e.parentNode,
								o = t.parentNode,
								a = [e],
								s = [t];
							if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
							if (i === o) return pe(e, t);
							for (n = e; n = n.parentNode;) a.unshift(n);
							for (n = t; n = n.parentNode;) s.unshift(n);
							for (; a[r] === s[r];) r++;
							return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
						}, d) : d
					}, se.matches = function(e, t) {
						return se(e, null, null, t)
					}, se.matchesSelector = function(e, t) {
						if (p(e), n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
							var r = m.call(e, t);
							if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
						} catch (Ee) {
							A(t, !0)
						}
						return se(t, d, null, [e]).length > 0
					}, se.contains = function(e, t) {
						return (e.ownerDocument || e) != d && p(e), x(e, t)
					}, se.attr = function(e, t) {
						(e.ownerDocument || e) != d && p(e);
						var i = r.attrHandle[t.toLowerCase()],
							o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
						return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
					}, se.escape = function(e) {
						return (e + "").replace(re, ie)
					}, se.error = function(e) {
						throw new Error("Syntax error, unrecognized expression: " + e)
					}, se.uniqueSort = function(e) {
						var t, r = [],
							i = 0,
							o = 0;
						if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
							for (; t = e[o++];) t === e[o] && (i = r.push(o));
							for (; i--;) e.splice(r[i], 1)
						}
						return c = null, e
					}, i = se.getText = function(e) {
						var t, n = "",
							r = 0,
							o = e.nodeType;
						if (o) {
							if (1 === o || 9 === o || 11 === o) {
								if ("string" == typeof e.textContent) return e.textContent;
								for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
							} else if (3 === o || 4 === o) return e.nodeValue
						} else
							for (; t = e[r++];) n += i(t);
						return n
					}, (r = se.selectors = {
						cacheLength: 50,
						createPseudo: le,
						match: G,
						attrHandle: {},
						find: {},
						relative: {
							">": {
								dir: "parentNode",
								first: !0
							},
							" ": {
								dir: "parentNode"
							},
							"+": {
								dir: "previousSibling",
								first: !0
							},
							"~": {
								dir: "previousSibling"
							}
						},
						preFilter: {
							ATTR: function(e) {
								return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
							},
							CHILD: function(e) {
								return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
							},
							PSEUDO: function(e) {
								var t, n = !e[6] && e[2];
								return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
							}
						},
						filter: {
							TAG: function(e) {
								var t = e.replace(te, ne).toLowerCase();
								return "*" === e ? function() {
									return !0
								} : function(e) {
									return e.nodeName && e.nodeName.toLowerCase() === t
								}
							},
							CLASS: function(e) {
								var t = S[e + " "];
								return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, function(e) {
									return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
								})
							},
							ATTR: function(e, t, n) {
								return function(r) {
									var i = se.attr(r, e);
									return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
								}
							},
							CHILD: function(e, t, n, r, i) {
								var o = "nth" !== e.slice(0, 3),
									a = "last" !== e.slice(-4),
									s = "of-type" === t;
								return 1 === r && 0 === i ? function(e) {
									return !!e.parentNode
								} : function(t, n, u) {
									var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
										v = t.parentNode,
										y = s && t.nodeName.toLowerCase(),
										m = !u && !s,
										x = !1;
									if (v) {
										if (o) {
											for (; g;) {
												for (p = t; p = p[g];)
													if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
												h = g = "only" === e && !h && "nextSibling"
											}
											return !0
										}
										if (h = [a ? v.firstChild : v.lastChild], a && m) {
											for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
												if (1 === p.nodeType && ++x && p === t) {
													c[e] = [T, d, x];
													break
												}
										} else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
											for (;
												(p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
										return (x -= i) === r || x % r == 0 && x / r >= 0
									}
								}
							},
							PSEUDO: function(e, t) {
								var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
								return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
									for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
								}) : function(e) {
									return i(e, 0, n)
								}) : i
							}
						},
						pseudos: {
							not: le(function(e) {
								var t = [],
									n = [],
									r = s(e.replace(B, "$1"));
								return r[b] ? le(function(e, t, n, i) {
									for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
								}) : function(e, i, o) {
									return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
								}
							}),
							has: le(function(e) {
								return function(t) {
									return se(e, t).length > 0
								}
							}),
							contains: le(function(e) {
								return e = e.replace(te, ne),
									function(t) {
										return (t.textContent || i(t)).indexOf(e) > -1
									}
							}),
							lang: le(function(e) {
								return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
									function(t) {
										var n;
										do {
											if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
										} while ((t = t.parentNode) && 1 === t.nodeType);
										return !1
									}
							}),
							target: function(t) {
								var n = e.location && e.location.hash;
								return n && n.slice(1) === t.id
							},
							root: function(e) {
								return e === h
							},
							focus: function(e) {
								return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
							},
							enabled: ge(!1),
							disabled: ge(!0),
							checked: function(e) {
								var t = e.nodeName.toLowerCase();
								return "input" === t && !!e.checked || "option" === t && !!e.selected
							},
							selected: function(e) {
								return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
							},
							empty: function(e) {
								for (e = e.firstChild; e; e = e.nextSibling)
									if (e.nodeType < 6) return !1;
								return !0
							},
							parent: function(e) {
								return !r.pseudos.empty(e)
							},
							header: function(e) {
								return J.test(e.nodeName)
							},
							input: function(e) {
								return Q.test(e.nodeName)
							},
							button: function(e) {
								var t = e.nodeName.toLowerCase();
								return "input" === t && "button" === e.type || "button" === t
							},
							text: function(e) {
								var t;
								return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
							},
							first: ve(function() {
								return [0]
							}),
							last: ve(function(e, t) {
								return [t - 1]
							}),
							eq: ve(function(e, t, n) {
								return [n < 0 ? n + t : n]
							}),
							even: ve(function(e, t) {
								for (var n = 0; n < t; n += 2) e.push(n);
								return e
							}),
							odd: ve(function(e, t) {
								for (var n = 1; n < t; n += 2) e.push(n);
								return e
							}),
							lt: ve(function(e, t, n) {
								for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
								return e
							}),
							gt: ve(function(e, t, n) {
								for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
								return e
							})
						}
					}).pseudos.nth = r.pseudos.eq, {
						radio: !0,
						checkbox: !0,
						file: !0,
						password: !0,
						image: !0
					}) r.pseudos[t] = de(t);
				for (t in {
						submit: !0,
						reset: !0
					}) r.pseudos[t] = he(t);

				function me() {}

				function xe(e) {
					for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
					return r
				}

				function be(e, t, n) {
					var r = t.dir,
						i = t.next,
						o = i || r,
						a = n && "parentNode" === o,
						s = C++;
					return t.first ? function(t, n, i) {
						for (; t = t[r];)
							if (1 === t.nodeType || a) return e(t, n, i);
						return !1
					} : function(t, n, u) {
						var l, c, f, p = [T, s];
						if (u) {
							for (; t = t[r];)
								if ((1 === t.nodeType || a) && e(t, n, u)) return !0
						} else
							for (; t = t[r];)
								if (1 === t.nodeType || a)
									if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
									else {
										if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
										if (c[o] = p, p[2] = e(t, n, u)) return !0
									} return !1
					}
				}

				function we(e) {
					return e.length > 1 ? function(t, n, r) {
						for (var i = e.length; i--;)
							if (!e[i](t, n, r)) return !1;
						return !0
					} : e[0]
				}

				function Te(e, t, n, r, i) {
					for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
					return a
				}

				function Ce(e, t, n, r, i, o) {
					return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le(function(o, a, s, u) {
						var l, c, f, p = [],
							d = [],
							h = a.length,
							g = o || function(e, t, n) {
								for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
								return n
							}(t || "*", s.nodeType ? [s] : s, []),
							v = !e || !o && t ? g : Te(g, p, e, s, u),
							y = n ? i || (o ? e : h || r) ? [] : a : v;
						if (n && n(v, y, s, u), r)
							for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
						if (o) {
							if (i || e) {
								if (i) {
									for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
									i(null, y = [], l, u)
								}
								for (c = y.length; c--;)(f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
							}
						} else y = Te(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
					})
				}

				function Se(e) {
					for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
							return e === t
						}, s, !0), f = be(function(e) {
							return P(t, e) > -1
						}, s, !0), p = [function(e, n, r) {
							var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
							return t = null, i
						}]; u < o; u++)
						if (n = r.relative[e[u].type]) p = [be(we(p), n)];
						else {
							if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
								for (i = ++u; i < o && !r.relative[e[i].type]; i++);
								return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
									value: " " === e[u - 2].type ? "*" : ""
								})).replace(B, "$1"), n, u < i && Se(e.slice(u, i)), i < o && Se(e = e.slice(i)), i < o && xe(e))
							}
							p.push(n)
						} return we(p)
				}
				return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
					var n, i, o, a, s, u, l, c = E[e + " "];
					if (c) return t ? 0 : c.slice(0);
					for (s = e, u = [], l = r.preFilter; s;) {
						for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
								value: n,
								type: i[0].replace(B, " ")
							}), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
							value: n,
							type: a,
							matches: i
						}), s = s.slice(n.length));
						if (!n) break
					}
					return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
				}, s = se.compile = function(e, t) {
					var n, i = [],
						o = [],
						s = k[e + " "];
					if (!s) {
						for (t || (t = a(e)), n = t.length; n--;)(s = Se(t[n]))[b] ? i.push(s) : o.push(s);
						(s = k(e, function(e, t) {
							var n = t.length > 0,
								i = e.length > 0,
								o = function(o, a, s, u, c) {
									var f, h, v, y = 0,
										m = "0",
										x = o && [],
										b = [],
										w = l,
										C = o || i && r.find.TAG("*", c),
										S = T += null == w ? 1 : Math.random() || .1,
										E = C.length;
									for (c && (l = a == d || a || c); m !== E && null != (f = C[m]); m++) {
										if (i && f) {
											for (h = 0, a || f.ownerDocument == d || (p(f), s = !g); v = e[h++];)
												if (v(f, a || d, s)) {
													u.push(f);
													break
												} c && (T = S)
										}
										n && ((f = !v && f) && y--, o && x.push(f))
									}
									if (y += m, n && m !== y) {
										for (h = 0; v = t[h++];) v(x, b, a, s);
										if (o) {
											if (y > 0)
												for (; m--;) x[m] || b[m] || (b[m] = q.call(u));
											b = Te(b)
										}
										H.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
									}
									return c && (T = S, l = w), x
								};
							return n ? le(o) : o
						}(o, i))).selector = e
					}
					return s
				}, u = se.select = function(e, t, n, i) {
					var o, u, l, c, f, p = "function" == typeof e && e,
						d = !i && a(e = p.selector || e);
					if (n = n || [], 1 === d.length) {
						if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
							if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
							p && (t = t.parentNode), e = e.slice(u.shift().value.length)
						}
						for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
							if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
								if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
								break
							}
					}
					return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
				}, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function(e) {
					return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
				}), ce(function(e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || fe("type|href|height|width", function(e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), n.attributes && ce(function(e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}) || fe("value", function(e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}), ce(function(e) {
					return null == e.getAttribute("disabled")
				}) || fe(R, function(e, t, n) {
					var r;
					if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
				}), se
			}(t);
			w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
			var S = function(e, t, n) {
					for (var r = [], i = void 0 !== n;
						(e = e[t]) && 9 !== e.nodeType;)
						if (1 === e.nodeType) {
							if (i && w(e).is(n)) break;
							r.push(e)
						} return r
				},
				E = function(e, t) {
					for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
					return n
				},
				k = w.expr.match.needsContext;

			function A(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			}
			var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

			function j(e, t, n) {
				return g(t) ? w.grep(e, function(e, r) {
					return !!t.call(e, r, e) !== n
				}) : t.nodeType ? w.grep(e, function(e) {
					return e === t !== n
				}) : "string" != typeof t ? w.grep(e, function(e) {
					return u.call(t, e) > -1 !== n
				}) : w.filter(t, e, n)
			}
			w.filter = function(e, t, n) {
				var r = t[0];
				return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
					return 1 === e.nodeType
				}))
			}, w.fn.extend({
				find: function(e) {
					var t, n, r = this.length,
						i = this;
					if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
						for (t = 0; t < r; t++)
							if (w.contains(i[t], this)) return !0
					}));
					for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
					return r > 1 ? w.uniqueSort(n) : n
				},
				filter: function(e) {
					return this.pushStack(j(this, e || [], !1))
				},
				not: function(e) {
					return this.pushStack(j(this, e || [], !0))
				},
				is: function(e) {
					return !!j(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length
				}
			});
			var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
			(w.fn.init = function(e, t, n) {
				var r, i;
				if (!e) return this;
				if (n = n || D, "string" == typeof e) {
					if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
					if (r[1]) {
						if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), N.test(r[1]) && w.isPlainObject(t))
							for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
						return this
					}
					return (i = y.getElementById(r[2])) && (this[0] = i, this.length = 1), this
				}
				return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
			}).prototype = w.fn, D = w(y);
			var L = /^(?:parents|prev(?:Until|All))/,
				H = {
					children: !0,
					contents: !0,
					next: !0,
					prev: !0
				};

			function O(e, t) {
				for (;
					(e = e[t]) && 1 !== e.nodeType;);
				return e
			}
			w.fn.extend({
				has: function(e) {
					var t = w(e, this),
						n = t.length;
					return this.filter(function() {
						for (var e = 0; e < n; e++)
							if (w.contains(this, t[e])) return !0
					})
				},
				closest: function(e, t) {
					var n, r = 0,
						i = this.length,
						o = [],
						a = "string" != typeof e && w(e);
					if (!k.test(e))
						for (; r < i; r++)
							for (n = this[r]; n && n !== t; n = n.parentNode)
								if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
									o.push(n);
									break
								} return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
				},
				index: function(e) {
					return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
				},
				add: function(e, t) {
					return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
				},
				addBack: function(e) {
					return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
				}
			}), w.each({
				parent: function(e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null
				},
				parents: function(e) {
					return S(e, "parentNode")
				},
				parentsUntil: function(e, t, n) {
					return S(e, "parentNode", n)
				},
				next: function(e) {
					return O(e, "nextSibling")
				},
				prev: function(e) {
					return O(e, "previousSibling")
				},
				nextAll: function(e) {
					return S(e, "nextSibling")
				},
				prevAll: function(e) {
					return S(e, "previousSibling")
				},
				nextUntil: function(e, t, n) {
					return S(e, "nextSibling", n)
				},
				prevUntil: function(e, t, n) {
					return S(e, "previousSibling", n)
				},
				siblings: function(e) {
					return E((e.parentNode || {}).firstChild, e)
				},
				children: function(e) {
					return E(e.firstChild)
				},
				contents: function(e) {
					return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
				}
			}, function(e, t) {
				w.fn[e] = function(n, r) {
					var i = w.map(this, t, n);
					return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (H[e] || w.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
				}
			});
			var P = /[^\x20\t\r\n\f]+/g;

			function R(e) {
				return e
			}

			function M(e) {
				throw e
			}

			function I(e, t, n, r) {
				var i;
				try {
					e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
				} catch (e) {
					n.apply(void 0, [e])
				}
			}
			w.Callbacks = function(e) {
				e = "string" == typeof e ? function(e) {
					var t = {};
					return w.each(e.match(P) || [], function(e, n) {
						t[n] = !0
					}), t
				}(e) : w.extend({}, e);
				var t, n, r, i, o = [],
					a = [],
					s = -1,
					u = function() {
						for (i = i || e.once, r = t = !0; a.length; s = -1)
							for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
						e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
					},
					l = {
						add: function() {
							return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
								w.each(n, function(n, r) {
									g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
								})
							}(arguments), n && !t && u()), this
						},
						remove: function() {
							return w.each(arguments, function(e, t) {
								for (var n;
									(n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
							}), this
						},
						has: function(e) {
							return e ? w.inArray(e, o) > -1 : o.length > 0
						},
						empty: function() {
							return o && (o = []), this
						},
						disable: function() {
							return i = a = [], o = n = "", this
						},
						disabled: function() {
							return !o
						},
						lock: function() {
							return i = a = [], n || t || (o = n = ""), this
						},
						locked: function() {
							return !!i
						},
						fireWith: function(e, n) {
							return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
						},
						fire: function() {
							return l.fireWith(this, arguments), this
						},
						fired: function() {
							return !!r
						}
					};
				return l
			}, w.extend({
				Deferred: function(e) {
					var n = [
							["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
							["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
							["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
						],
						r = "pending",
						i = {
							state: function() {
								return r
							},
							always: function() {
								return o.done(arguments).fail(arguments), this
							},
							catch: function(e) {
								return i.then(null, e)
							},
							pipe: function() {
								var e = arguments;
								return w.Deferred(function(t) {
									w.each(n, function(n, r) {
										var i = g(e[r[4]]) && e[r[4]];
										o[r[1]](function() {
											var e = i && i.apply(this, arguments);
											e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
										})
									}), e = null
								}).promise()
							},
							then: function(e, r, i) {
								var o = 0;

								function a(e, n, r, i) {
									return function() {
										var s = this,
											u = arguments,
											l = function() {
												var t, l;
												if (!(e < o)) {
													if ((t = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
													l = t && ("object" == typeof t || "function" == typeof t) && t.then, g(l) ? i ? l.call(t, a(o, n, R, i), a(o, n, M, i)) : (o++, l.call(t, a(o, n, R, i), a(o, n, M, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = void 0, u = [t]), (i || n.resolveWith)(s, u))
												}
											},
											c = i ? l : function() {
												try {
													l()
												} catch (t) {
													w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (r !== M && (s = void 0, u = [t]), n.rejectWith(s, u))
												}
											};
										e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
									}
								}
								return w.Deferred(function(t) {
									n[0][3].add(a(0, t, g(i) ? i : R, t.notifyWith)), n[1][3].add(a(0, t, g(e) ? e : R)), n[2][3].add(a(0, t, g(r) ? r : M))
								}).promise()
							},
							promise: function(e) {
								return null != e ? w.extend(e, i) : i
							}
						},
						o = {};
					return w.each(n, function(e, t) {
						var a = t[2],
							s = t[5];
						i[t[1]] = a.add, s && a.add(function() {
							r = s
						}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
							return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
						}, o[t[0] + "With"] = a.fireWith
					}), i.promise(o), e && e.call(o, o), o
				},
				when: function(e) {
					var t = arguments.length,
						n = t,
						r = Array(n),
						i = o.call(arguments),
						a = w.Deferred(),
						s = function(e) {
							return function(n) {
								r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
							}
						};
					if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
					for (; n--;) I(i[n], s(n), a.reject);
					return a.promise()
				}
			});
			var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
			w.Deferred.exceptionHook = function(e, n) {
				t.console && t.console.warn && e && W.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
			}, w.readyException = function(e) {
				t.setTimeout(function() {
					throw e
				})
			};
			var F = w.Deferred();

			function $() {
				y.removeEventListener("DOMContentLoaded", $), t.removeEventListener("load", $), w.ready()
			}
			w.fn.ready = function(e) {
				return F.then(e).catch(function(e) {
					w.readyException(e)
				}), this
			}, w.extend({
				isReady: !1,
				readyWait: 1,
				ready: function(e) {
					(!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(y, [w]))
				}
			}), w.ready.then = F.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? t.setTimeout(w.ready) : (y.addEventListener("DOMContentLoaded", $), t.addEventListener("load", $));
			var B = function(e, t, n, r, i, o, a) {
					var s = 0,
						u = e.length,
						l = null == n;
					if ("object" === b(n))
						for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
					else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
							return l.call(w(e), n)
						})), t))
						for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
					return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
				},
				_ = /^-ms-/,
				z = /-([a-z])/g;

			function U(e, t) {
				return t.toUpperCase()
			}

			function X(e) {
				return e.replace(_, "ms-").replace(z, U)
			}
			var V = function(e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
			};

			function G() {
				this.expando = w.expando + G.uid++
			}
			G.uid = 1, G.prototype = {
				cache: function(e) {
					var t = e[this.expando];
					return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
						value: t,
						configurable: !0
					}))), t
				},
				set: function(e, t, n) {
					var r, i = this.cache(e);
					if ("string" == typeof t) i[X(t)] = n;
					else
						for (r in t) i[X(r)] = t[r];
					return i
				},
				get: function(e, t) {
					return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
				},
				access: function(e, t, n) {
					return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
				},
				remove: function(e, t) {
					var n, r = e[this.expando];
					if (void 0 !== r) {
						if (void 0 !== t) {
							n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
							for (; n--;) delete r[t[n]]
						}(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
					}
				},
				hasData: function(e) {
					var t = e[this.expando];
					return void 0 !== t && !w.isEmptyObject(t)
				}
			};
			var Y = new G,
				Q = new G,
				J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				K = /[A-Z]/g;

			function Z(e, t, n) {
				var r;
				if (void 0 === n && 1 === e.nodeType)
					if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
						try {
							n = function(e) {
								return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
							}(n)
						} catch (i) {}
						Q.set(e, t, n)
					} else n = void 0;
				return n
			}
			w.extend({
				hasData: function(e) {
					return Q.hasData(e) || Y.hasData(e)
				},
				data: function(e, t, n) {
					return Q.access(e, t, n)
				},
				removeData: function(e, t) {
					Q.remove(e, t)
				},
				_data: function(e, t, n) {
					return Y.access(e, t, n)
				},
				_removeData: function(e, t) {
					Y.remove(e, t)
				}
			}), w.fn.extend({
				data: function(e, t) {
					var n, r, i, o = this[0],
						a = o && o.attributes;
					if (void 0 === e) {
						if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
							for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
							Y.set(o, "hasDataAttrs", !0)
						}
						return i
					}
					return "object" == typeof e ? this.each(function() {
						Q.set(this, e)
					}) : B(this, function(t) {
						var n;
						if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
						this.each(function() {
							Q.set(this, e, t)
						})
					}, null, t, arguments.length > 1, null, !0)
				},
				removeData: function(e) {
					return this.each(function() {
						Q.remove(this, e)
					})
				}
			}), w.extend({
				queue: function(e, t, n) {
					var r;
					if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, w.makeArray(n)) : r.push(n)), r || []
				},
				dequeue: function(e, t) {
					t = t || "fx";
					var n = w.queue(e, t),
						r = n.length,
						i = n.shift(),
						o = w._queueHooks(e, t);
					"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
						w.dequeue(e, t)
					}, o)), !r && o && o.empty.fire()
				},
				_queueHooks: function(e, t) {
					var n = t + "queueHooks";
					return Y.get(e, n) || Y.access(e, n, {
						empty: w.Callbacks("once memory").add(function() {
							Y.remove(e, [t + "queue", n])
						})
					})
				}
			}), w.fn.extend({
				queue: function(e, t) {
					var n = 2;
					return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
						var n = w.queue(this, e, t);
						w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
					})
				},
				dequeue: function(e) {
					return this.each(function() {
						w.dequeue(this, e)
					})
				},
				clearQueue: function(e) {
					return this.queue(e || "fx", [])
				},
				promise: function(e, t) {
					var n, r = 1,
						i = w.Deferred(),
						o = this,
						a = this.length,
						s = function() {
							--r || i.resolveWith(o, [o])
						};
					for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
					return s(), i.promise(t)
				}
			});
			var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
				ne = ["Top", "Right", "Bottom", "Left"],
				re = y.documentElement,
				ie = function(e) {
					return w.contains(e.ownerDocument, e)
				},
				oe = {
					composed: !0
				};
			re.getRootNode && (ie = function(e) {
				return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
			});
			var ae = function(e, t) {
				return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === w.css(e, "display")
			};

			function se(e, t, n, r) {
				var i, o, a = 20,
					s = r ? function() {
						return r.cur()
					} : function() {
						return w.css(e, t, "")
					},
					u = s(),
					l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
					c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && te.exec(w.css(e, t));
				if (c && c[3] !== l) {
					for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
					c *= 2, w.style(e, t, c + l), n = n || []
				}
				return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
			}
			var ue = {};

			function le(e) {
				var t, n = e.ownerDocument,
					r = e.nodeName,
					i = ue[r];
				return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i)
			}

			function ce(e, t) {
				for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Y.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = le(r))) : "none" !== n && (i[o] = "none", Y.set(r, "display", n)));
				for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
				return e
			}
			w.fn.extend({
				show: function() {
					return ce(this, !0)
				},
				hide: function() {
					return ce(this)
				},
				toggle: function(e) {
					return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
						ae(this) ? w(this).show() : w(this).hide()
					})
				}
			});
			var fe, pe, de = /^(?:checkbox|radio)$/i,
				he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
				ge = /^$|^module$|\/(?:java|ecma)script/i;
			fe = y.createDocumentFragment().appendChild(y.createElement("div")), (pe = y.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), fe.appendChild(pe), h.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", h.option = !!fe.lastChild;
			var ve = {
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};

			function ye(e, t) {
				var n;
				return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
			}

			function me(e, t) {
				for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
			}
			ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, h.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
			var xe = /<|&#?\w+;/;

			function be(e, t, n, r, i) {
				for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
					if ((o = e[d]) || 0 === o)
						if ("object" === b(o)) w.merge(p, o.nodeType ? [o] : o);
						else if (xe.test(o)) {
					for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ve[s] || ve._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
					w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
				} else p.push(t.createTextNode(o));
				for (f.textContent = "", d = 0; o = p[d++];)
					if (r && w.inArray(o, r) > -1) i && i.push(o);
					else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && me(a), n)
					for (c = 0; o = a[c++];) ge.test(o.type || "") && n.push(o);
				return f
			}
			var we = /^([^.]*)(?:\.(.+)|)/;

			function Te() {
				return !0
			}

			function Ce() {
				return !1
			}

			function Se(e, t) {
				return e === function() {
					try {
						return y.activeElement
					} catch (e) {}
				}() == ("focus" === t)
			}

			function Ee(e, t, n, r, i, o) {
				var a, s;
				if ("object" == typeof t) {
					for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
					return e
				}
				if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;
				else if (!i) return e;
				return 1 === o && (a = i, (i = function(e) {
					return w().off(e), a.apply(this, arguments)
				}).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
					w.event.add(this, t, i, r, n)
				})
			}

			function ke(e, t, n) {
				n ? (Y.set(e, t, !1), w.event.add(e, t, {
					namespace: !1,
					handler: function(e) {
						var r, i, a = Y.get(this, t);
						if (1 & e.isTrigger && this[t]) {
							if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
							else if (a = o.call(arguments), Y.set(this, t, a), r = n(this, t), this[t](), a !== (i = Y.get(this, t)) || r ? Y.set(this, t, !1) : i = {}, a !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
						} else a.length && (Y.set(this, t, {
							value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
						}), e.stopImmediatePropagation())
					}
				})) : void 0 === Y.get(e, t) && w.event.add(e, t, Te)
			}
			w.event = {
				global: {},
				add: function(e, t, n, r, i) {
					var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(e);
					if (V(e))
						for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(re, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(t) {
								return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
							}), l = (t = (t || "").match(P) || [""]).length; l--;) d = g = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
							type: d,
							origType: g,
							data: r,
							handler: n,
							guid: n.guid,
							selector: i,
							needsContext: i && w.expr.match.needsContext.test(i),
							namespace: h.join(".")
						}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
				},
				remove: function(e, t, n, r, i) {
					var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
					if (v && (u = v.events)) {
						for (l = (t = (t || "").match(P) || [""]).length; l--;)
							if (d = g = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
								for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
								a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle), delete u[d])
							} else
								for (d in u) w.event.remove(e, d + t[l], n, r, !0);
						w.isEmptyObject(u) && Y.remove(e, "handle events")
					}
				},
				dispatch: function(e) {
					var t, n, r, i, o, a, s = new Array(arguments.length),
						u = w.event.fix(e),
						l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
						c = w.event.special[u.type] || {};
					for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
					if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
						for (a = w.event.handlers.call(this, u, l), t = 0;
							(i = a[t++]) && !u.isPropagationStopped();)
							for (u.currentTarget = i.elem, n = 0;
								(o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
						return c.postDispatch && c.postDispatch.call(this, u), u.result
					}
				},
				handlers: function(e, t) {
					var n, r, i, o, a, s = [],
						u = t.delegateCount,
						l = e.target;
					if (u && l.nodeType && !("click" === e.type && e.button >= 1))
						for (; l !== this; l = l.parentNode || this)
							if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
								for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
								o.length && s.push({
									elem: l,
									handlers: o
								})
							} return l = this, u < t.length && s.push({
						elem: l,
						handlers: t.slice(u)
					}), s
				},
				addProp: function(e, t) {
					Object.defineProperty(w.Event.prototype, e, {
						enumerable: !0,
						configurable: !0,
						get: g(t) ? function() {
							if (this.originalEvent) return t(this.originalEvent)
						} : function() {
							if (this.originalEvent) return this.originalEvent[e]
						},
						set: function(t) {
							Object.defineProperty(this, e, {
								enumerable: !0,
								configurable: !0,
								writable: !0,
								value: t
							})
						}
					})
				},
				fix: function(e) {
					return e[w.expando] ? e : new w.Event(e)
				},
				special: {
					load: {
						noBubble: !0
					},
					click: {
						setup: function(e) {
							var t = this || e;
							return de.test(t.type) && t.click && A(t, "input") && ke(t, "click", Te), !1
						},
						trigger: function(e) {
							var t = this || e;
							return de.test(t.type) && t.click && A(t, "input") && ke(t, "click"), !0
						},
						_default: function(e) {
							var t = e.target;
							return de.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
						}
					},
					beforeunload: {
						postDispatch: function(e) {
							void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
						}
					}
				}
			}, w.removeEvent = function(e, t, n) {
				e.removeEventListener && e.removeEventListener(t, n)
			}, w.Event = function(e, t) {
				if (!(this instanceof w.Event)) return new w.Event(e, t);
				e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
			}, w.Event.prototype = {
				constructor: w.Event,
				isDefaultPrevented: Ce,
				isPropagationStopped: Ce,
				isImmediatePropagationStopped: Ce,
				isSimulated: !1,
				preventDefault: function() {
					var e = this.originalEvent;
					this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
				},
				stopPropagation: function() {
					var e = this.originalEvent;
					this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
				},
				stopImmediatePropagation: function() {
					var e = this.originalEvent;
					this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
				}
			}, w.each({
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				code: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: !0
			}, w.event.addProp), w.each({
				focus: "focusin",
				blur: "focusout"
			}, function(e, t) {
				w.event.special[e] = {
					setup: function() {
						return ke(this, e, Se), !1
					},
					trigger: function() {
						return ke(this, e), !0
					},
					_default: function(t) {
						return Y.get(t.target, e)
					},
					delegateType: t
				}
			}), w.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			}, function(e, t) {
				w.event.special[e] = {
					delegateType: t,
					bindType: t,
					handle: function(e) {
						var n, r = e.relatedTarget,
							i = e.handleObj;
						return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
					}
				}
			}), w.fn.extend({
				on: function(e, t, n, r) {
					return Ee(this, e, t, n, r)
				},
				one: function(e, t, n, r) {
					return Ee(this, e, t, n, r, 1)
				},
				off: function(e, t, n) {
					var r, i;
					if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
					if ("object" == typeof e) {
						for (i in e) this.off(i, t, e[i]);
						return this
					}
					return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() {
						w.event.remove(this, e, n, t)
					})
				}
			});
			var Ae = /<script|<style|<link/i,
				Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
				je = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

			function De(e, t) {
				return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
			}

			function qe(e) {
				return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
			}

			function Le(e) {
				return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
			}

			function He(e, t) {
				var n, r, i, o, a, s;
				if (1 === t.nodeType) {
					if (Y.hasData(e) && (s = Y.get(e).events))
						for (i in Y.remove(t, "handle events"), s)
							for (n = 0, r = s[i].length; n < r; n++) w.event.add(t, i, s[i][n]);
					Q.hasData(e) && (o = Q.access(e), a = w.extend({}, o), Q.set(t, a))
				}
			}

			function Oe(e, t, n, r) {
				t = a(t);
				var i, o, s, u, l, c, f = 0,
					p = e.length,
					d = p - 1,
					v = t[0],
					y = g(v);
				if (y || p > 1 && "string" == typeof v && !h.checkClone && Ne.test(v)) return e.each(function(i) {
					var o = e.eq(i);
					y && (t[0] = v.call(this, i, o.html())), Oe(o, t, n, r)
				});
				if (p && (o = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
					for (u = (s = w.map(ye(i, "script"), qe)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
					if (u)
						for (c = s[s.length - 1].ownerDocument, w.map(s, Le), f = 0; f < u; f++) l = s[f], ge.test(l.type || "") && !Y.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
							nonce: l.nonce || l.getAttribute("nonce")
						}, c) : x(l.textContent.replace(je, ""), l, c))
				}
				return e
			}

			function Pe(e, t, n) {
				for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && ie(r) && me(ye(r, "script")), r.parentNode.removeChild(r));
				return e
			}
			w.extend({
				htmlPrefilter: function(e) {
					return e
				},
				clone: function(e, t, n) {
					var r, i, o, a, s, u, l, c = e.cloneNode(!0),
						f = ie(e);
					if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
						for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
					if (t)
						if (n)
							for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) He(o[r], a[r]);
						else He(e, c);
					return (a = ye(c, "script")).length > 0 && me(a, !f && ye(e, "script")), c
				},
				cleanData: function(e) {
					for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
						if (V(n)) {
							if (t = n[Y.expando]) {
								if (t.events)
									for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
								n[Y.expando] = void 0
							}
							n[Q.expando] && (n[Q.expando] = void 0)
						}
				}
			}), w.fn.extend({
				detach: function(e) {
					return Pe(this, e, !0)
				},
				remove: function(e) {
					return Pe(this, e)
				},
				text: function(e) {
					return B(this, function(e) {
						return void 0 === e ? w.text(this) : this.empty().each(function() {
							1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
						})
					}, null, e, arguments.length)
				},
				append: function() {
					return Oe(this, arguments, function(e) {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
					})
				},
				prepend: function() {
					return Oe(this, arguments, function(e) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var t = De(this, e);
							t.insertBefore(e, t.firstChild)
						}
					})
				},
				before: function() {
					return Oe(this, arguments, function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this)
					})
				},
				after: function() {
					return Oe(this, arguments, function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
					})
				},
				empty: function() {
					for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
					return this
				},
				clone: function(e, t) {
					return e = null != e && e, t = null == t ? e : t, this.map(function() {
						return w.clone(this, e, t)
					})
				},
				html: function(e) {
					return B(this, function(e) {
						var t = this[0] || {},
							n = 0,
							r = this.length;
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
						if ("string" == typeof e && !Ae.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
							e = w.htmlPrefilter(e);
							try {
								for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
								t = 0
							} catch (i) {}
						}
						t && this.empty().append(e)
					}, null, e, arguments.length)
				},
				replaceWith: function() {
					var e = [];
					return Oe(this, arguments, function(t) {
						var n = this.parentNode;
						w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
					}, e)
				}
			}), w.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function(e, t) {
				w.fn[e] = function(e) {
					for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
					return this.pushStack(r)
				}
			});
			var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
				Me = /^--/,
				Ie = function(e) {
					var n = e.ownerDocument.defaultView;
					return n && n.opener || (n = t), n.getComputedStyle(e)
				},
				We = function(e, t, n) {
					var r, i, o = {};
					for (i in t) o[i] = e.style[i], e.style[i] = t[i];
					for (i in r = n.call(e), t) e.style[i] = o[i];
					return r
				},
				Fe = new RegExp(ne.join("|"), "i"),
				$e = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g");

			function Be(e, t, n) {
				var r, i, o, a, s = Me.test(t),
					u = e.style;
				return (n = n || Ie(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace($e, "$1") || void 0), "" !== a || ie(e) || (a = w.style(e, t)), !h.pixelBoxStyles() && Re.test(a) && Fe.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
			}

			function _e(e, t) {
				return {
					get: function() {
						if (!e()) return (this.get = t).apply(this, arguments);
						delete this.get
					}
				}
			}! function() {
				function e() {
					if (c) {
						l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(l).appendChild(c);
						var e = t.getComputedStyle(c);
						r = "1%" !== e.top, u = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), i = 36 === n(e.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), re.removeChild(l), c = null
					}
				}

				function n(e) {
					return Math.round(parseFloat(e))
				}
				var r, i, o, a, s, u, l = y.createElement("div"),
					c = y.createElement("div");
				c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
					boxSizingReliable: function() {
						return e(), i
					},
					pixelBoxStyles: function() {
						return e(), a
					},
					pixelPosition: function() {
						return e(), r
					},
					reliableMarginLeft: function() {
						return e(), u
					},
					scrollboxSize: function() {
						return e(), o
					},
					reliableTrDimensions: function() {
						var e, n, r, i;
						return null == s && (e = y.createElement("table"), n = y.createElement("tr"), r = y.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", re.appendChild(e).appendChild(n).appendChild(r), i = t.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, re.removeChild(e)), s
					}
				}))
			}();
			var ze = ["Webkit", "Moz", "ms"],
				Ue = y.createElement("div").style,
				Xe = {};

			function Ve(e) {
				var t = w.cssProps[e] || Xe[e];
				return t || (e in Ue ? e : Xe[e] = function(e) {
					for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
						if ((e = ze[n] + t) in Ue) return e
				}(e) || e)
			}
			var Ge = /^(none|table(?!-c[ea]).+)/,
				Ye = {
					position: "absolute",
					visibility: "hidden",
					display: "block"
				},
				Qe = {
					letterSpacing: "0",
					fontWeight: "400"
				};

			function Je(e, t, n) {
				var r = te.exec(t);
				return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
			}

			function Ke(e, t, n, r, i, o) {
				var a = "width" === t ? 1 : 0,
					s = 0,
					u = 0;
				if (n === (r ? "border" : "content")) return 0;
				for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + ne[a] + "Width", !0, i))) : (u += w.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += w.css(e, "border" + ne[a] + "Width", !0, i) : s += w.css(e, "border" + ne[a] + "Width", !0, i));
				return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
			}

			function Ze(e, t, n) {
				var r = Ie(e),
					i = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
					o = i,
					a = Be(e, t, r),
					s = "offset" + t[0].toUpperCase() + t.slice(1);
				if (Re.test(a)) {
					if (!n) return a;
					a = "auto"
				}
				return (!h.boxSizingReliable() && i || !h.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
			}

			function et(e, t, n, r, i) {
				return new et.prototype.init(e, t, n, r, i)
			}
			w.extend({
				cssHooks: {
					opacity: {
						get: function(e, t) {
							if (t) {
								var n = Be(e, "opacity");
								return "" === n ? "1" : n
							}
						}
					}
				},
				cssNumber: {
					animationIterationCount: !0,
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					gridArea: !0,
					gridColumn: !0,
					gridColumnEnd: !0,
					gridColumnStart: !0,
					gridRow: !0,
					gridRowEnd: !0,
					gridRowStart: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
				},
				cssProps: {},
				style: function(e, t, n, r) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var i, o, a, s = X(t),
							u = Me.test(t),
							l = e.style;
						if (u || (t = Ve(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
						"string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
					}
				},
				css: function(e, t, n, r) {
					var i, o, a, s = X(t);
					return Me.test(t) || (t = Ve(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
				}
			}), w.each(["height", "width"], function(e, t) {
				w.cssHooks[t] = {
					get: function(e, n, r) {
						if (n) return !Ge.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : We(e, Ye, function() {
							return Ze(e, t, r)
						})
					},
					set: function(e, n, r) {
						var i, o = Ie(e),
							a = !h.scrollboxSize() && "absolute" === o.position,
							s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
							u = r ? Ke(e, t, r, s, o) : 0;
						return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ke(e, t, "border", !1, o) - .5)), u && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Je(0, n, u)
					}
				}
			}), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
				if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
					marginLeft: 0
				}, function() {
					return e.getBoundingClientRect().left
				})) + "px"
			}), w.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function(e, t) {
				w.cssHooks[e + t] = {
					expand: function(n) {
						for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
						return i
					}
				}, "margin" !== e && (w.cssHooks[e + t].set = Je)
			}), w.fn.extend({
				css: function(e, t) {
					return B(this, function(e, t, n) {
						var r, i, o = {},
							a = 0;
						if (Array.isArray(t)) {
							for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
							return o
						}
						return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
					}, e, t, arguments.length > 1)
				}
			}), w.Tween = et, et.prototype = {
				constructor: et,
				init: function(e, t, n, r, i, o) {
					this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
				},
				cur: function() {
					var e = et.propHooks[this.prop];
					return e && e.get ? e.get(this) : et.propHooks._default.get(this)
				},
				run: function(e) {
					var t, n = et.propHooks[this.prop];
					return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
				}
			}, et.prototype.init.prototype = et.prototype, et.propHooks = {
				_default: {
					get: function(e) {
						var t;
						return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
					},
					set: function(e) {
						w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
					}
				}
			}, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
				set: function(e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
				}
			}, w.easing = {
				linear: function(e) {
					return e
				},
				swing: function(e) {
					return .5 - Math.cos(e * Math.PI) / 2
				},
				_default: "swing"
			}, w.fx = et.prototype.init, w.fx.step = {};
			var tt, nt, rt = /^(?:toggle|show|hide)$/,
				it = /queueHooks$/;

			function ot() {
				nt && (!1 === y.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ot) : t.setTimeout(ot, w.fx.interval), w.fx.tick())
			}

			function at() {
				return t.setTimeout(function() {
					tt = void 0
				}), tt = Date.now()
			}

			function st(e, t) {
				var n, r = 0,
					i = {
						height: e
					};
				for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
				return t && (i.opacity = i.width = e), i
			}

			function ut(e, t, n) {
				for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
					if (r = i[o].call(n, t, e)) return r
			}

			function lt(e, t, n) {
				var r, i, o = 0,
					a = lt.prefilters.length,
					s = w.Deferred().always(function() {
						delete u.elem
					}),
					u = function() {
						if (i) return !1;
						for (var t = tt || at(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
						return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
					},
					l = s.promise({
						elem: e,
						props: w.extend({}, t),
						opts: w.extend(!0, {
							specialEasing: {},
							easing: w.easing._default
						}, n),
						originalProperties: t,
						originalOptions: n,
						startTime: tt || at(),
						duration: n.duration,
						tweens: [],
						createTween: function(t, n) {
							var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
							return l.tweens.push(r), r
						},
						stop: function(t) {
							var n = 0,
								r = t ? l.tweens.length : 0;
							if (i) return this;
							for (i = !0; n < r; n++) l.tweens[n].run(1);
							return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
						}
					}),
					c = l.props;
				for (! function(e, t) {
						var n, r, i, o, a;
						for (n in e)
							if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
								for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
							else t[r] = i
					}(c, l.opts.specialEasing); o < a; o++)
					if (r = lt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
				return w.map(c, ut, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
					elem: e,
					anim: l,
					queue: l.opts.queue
				})), l
			}
			w.Animation = w.extend(lt, {
					tweeners: {
						"*": [function(e, t) {
							var n = this.createTween(e, t);
							return se(n.elem, e, te.exec(t), n), n
						}]
					},
					tweener: function(e, t) {
						g(e) ? (t = e, e = ["*"]) : e = e.match(P);
						for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
					},
					prefilters: [function(e, t, n) {
						var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
							p = this,
							d = {},
							h = e.style,
							g = e.nodeType && ae(e),
							v = Y.get(e, "fxshow");
						for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
								a.unqueued || s()
							}), a.unqueued++, p.always(function() {
								p.always(function() {
									a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
								})
							})), t)
							if (i = t[r], rt.test(i)) {
								if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
									if ("show" !== i || !v || void 0 === v[r]) continue;
									g = !0
								}
								d[r] = v && v[r] || w.style(e, r)
							} if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
							for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (ce([e], !0), l = e.style.display || l, c = w.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
									h.display = l
								}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
									h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
								})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
								display: l
							}), o && (v.hidden = !g), g && ce([e], !0), p.done(function() {
								for (r in g || ce([e]), Y.remove(e, "fxshow"), d) w.style(e, r, d[r])
							})), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
					}],
					prefilter: function(e, t) {
						t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
					}
				}), w.speed = function(e, t, n) {
					var r = e && "object" == typeof e ? w.extend({}, e) : {
						complete: n || !n && t || g(e) && e,
						duration: e,
						easing: n && t || t && !g(t) && t
					};
					return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
						g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
					}, r
				}, w.fn.extend({
					fadeTo: function(e, t, n, r) {
						return this.filter(ae).css("opacity", 0).show().end().animate({
							opacity: t
						}, e, n, r)
					},
					animate: function(e, t, n, r) {
						var i = w.isEmptyObject(e),
							o = w.speed(t, n, r),
							a = function() {
								var t = lt(this, w.extend({}, e), o);
								(i || Y.get(this, "finish")) && t.stop(!0)
							};
						return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
					},
					stop: function(e, t, n) {
						var r = function(e) {
							var t = e.stop;
							delete e.stop, t(n)
						};
						return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
							var t = !0,
								i = null != e && e + "queueHooks",
								o = w.timers,
								a = Y.get(this);
							if (i) a[i] && a[i].stop && r(a[i]);
							else
								for (i in a) a[i] && a[i].stop && it.test(i) && r(a[i]);
							for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
							!t && n || w.dequeue(this, e)
						})
					},
					finish: function(e) {
						return !1 !== e && (e = e || "fx"), this.each(function() {
							var t, n = Y.get(this),
								r = n[e + "queue"],
								i = n[e + "queueHooks"],
								o = w.timers,
								a = r ? r.length : 0;
							for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
							for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
							delete n.finish
						})
					}
				}), w.each(["toggle", "show", "hide"], function(e, t) {
					var n = w.fn[t];
					w.fn[t] = function(e, r, i) {
						return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, i)
					}
				}), w.each({
					slideDown: st("show"),
					slideUp: st("hide"),
					slideToggle: st("toggle"),
					fadeIn: {
						opacity: "show"
					},
					fadeOut: {
						opacity: "hide"
					},
					fadeToggle: {
						opacity: "toggle"
					}
				}, function(e, t) {
					w.fn[e] = function(e, n, r) {
						return this.animate(t, e, n, r)
					}
				}), w.timers = [], w.fx.tick = function() {
					var e, t = 0,
						n = w.timers;
					for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
					n.length || w.fx.stop(), tt = void 0
				}, w.fx.timer = function(e) {
					w.timers.push(e), w.fx.start()
				}, w.fx.interval = 13, w.fx.start = function() {
					nt || (nt = !0, ot())
				}, w.fx.stop = function() {
					nt = null
				}, w.fx.speeds = {
					slow: 600,
					fast: 200,
					_default: 400
				}, w.fn.delay = function(e, n) {
					return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, r) {
						var i = t.setTimeout(n, e);
						r.stop = function() {
							t.clearTimeout(i)
						}
					})
				},
				function() {
					var e = y.createElement("input"),
						t = y.createElement("select").appendChild(y.createElement("option"));
					e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = y.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
				}();
			var ct, ft = w.expr.attrHandle;
			w.fn.extend({
				attr: function(e, t) {
					return B(this, w.attr, e, t, arguments.length > 1)
				},
				removeAttr: function(e) {
					return this.each(function() {
						w.removeAttr(this, e)
					})
				}
			}), w.extend({
				attr: function(e, t, n) {
					var r, i, o = e.nodeType;
					if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
				},
				attrHooks: {
					type: {
						set: function(e, t) {
							if (!h.radioValue && "radio" === t && A(e, "input")) {
								var n = e.value;
								return e.setAttribute("type", t), n && (e.value = n), t
							}
						}
					}
				},
				removeAttr: function(e, t) {
					var n, r = 0,
						i = t && t.match(P);
					if (i && 1 === e.nodeType)
						for (; n = i[r++];) e.removeAttribute(n)
				}
			}), ct = {
				set: function(e, t, n) {
					return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
				}
			}, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
				var n = ft[t] || w.find.attr;
				ft[t] = function(e, t, r) {
					var i, o, a = t.toLowerCase();
					return r || (o = ft[a], ft[a] = i, i = null != n(e, t, r) ? a : null, ft[a] = o), i
				}
			});
			var pt = /^(?:input|select|textarea|button)$/i,
				dt = /^(?:a|area)$/i;

			function ht(e) {
				return (e.match(P) || []).join(" ")
			}

			function gt(e) {
				return e.getAttribute && e.getAttribute("class") || ""
			}

			function vt(e) {
				return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
			}
			w.fn.extend({
				prop: function(e, t) {
					return B(this, w.prop, e, t, arguments.length > 1)
				},
				removeProp: function(e) {
					return this.each(function() {
						delete this[w.propFix[e] || e]
					})
				}
			}), w.extend({
				prop: function(e, t, n) {
					var r, i, o = e.nodeType;
					if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
				},
				propHooks: {
					tabIndex: {
						get: function(e) {
							var t = w.find.attr(e, "tabindex");
							return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
						}
					}
				},
				propFix: {
					for: "htmlFor",
					class: "className"
				}
			}), h.optSelected || (w.propHooks.selected = {
				get: function(e) {
					var t = e.parentNode;
					return t && t.parentNode && t.parentNode.selectedIndex, null
				},
				set: function(e) {
					var t = e.parentNode;
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
				}
			}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
				w.propFix[this.toLowerCase()] = this
			}), w.fn.extend({
				addClass: function(e) {
					var t, n, r, i, o, a;
					return g(e) ? this.each(function(t) {
						w(this).addClass(e.call(this, t, gt(this)))
					}) : (t = vt(e)).length ? this.each(function() {
						if (r = gt(this), n = 1 === this.nodeType && " " + ht(r) + " ") {
							for (o = 0; o < t.length; o++) i = t[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
							a = ht(n), r !== a && this.setAttribute("class", a)
						}
					}) : this
				},
				removeClass: function(e) {
					var t, n, r, i, o, a;
					return g(e) ? this.each(function(t) {
						w(this).removeClass(e.call(this, t, gt(this)))
					}) : arguments.length ? (t = vt(e)).length ? this.each(function() {
						if (r = gt(this), n = 1 === this.nodeType && " " + ht(r) + " ") {
							for (o = 0; o < t.length; o++)
								for (i = t[o]; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
							a = ht(n), r !== a && this.setAttribute("class", a)
						}
					}) : this : this.attr("class", "")
				},
				toggleClass: function(e, t) {
					var n, r, i, o, a = typeof e,
						s = "string" === a || Array.isArray(e);
					return g(e) ? this.each(function(n) {
						w(this).toggleClass(e.call(this, n, gt(this), t), t)
					}) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = vt(e), this.each(function() {
						if (s)
							for (o = w(this), i = 0; i < n.length; i++) r = n[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
						else void 0 !== e && "boolean" !== a || ((r = gt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : Y.get(this, "__className__") || ""))
					}))
				},
				hasClass: function(e) {
					var t, n, r = 0;
					for (t = " " + e + " "; n = this[r++];)
						if (1 === n.nodeType && (" " + ht(gt(n)) + " ").indexOf(t) > -1) return !0;
					return !1
				}
			});
			var yt = /\r/g;
			w.fn.extend({
				val: function(e) {
					var t, n, r, i = this[0];
					return arguments.length ? (r = g(e), this.each(function(n) {
						var i;
						1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
							return null == e ? "" : e + ""
						})), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
					})) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
				}
			}), w.extend({
				valHooks: {
					option: {
						get: function(e) {
							var t = w.find.attr(e, "value");
							return null != t ? t : ht(w.text(e))
						}
					},
					select: {
						get: function(e) {
							var t, n, r, i = e.options,
								o = e.selectedIndex,
								a = "select-one" === e.type,
								s = a ? null : [],
								u = a ? o + 1 : i.length;
							for (r = o < 0 ? u : a ? o : 0; r < u; r++)
								if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
									if (t = w(n).val(), a) return t;
									s.push(t)
								} return s
						},
						set: function(e, t) {
							for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
							return n || (e.selectedIndex = -1), o
						}
					}
				}
			}), w.each(["radio", "checkbox"], function() {
				w.valHooks[this] = {
					set: function(e, t) {
						if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
					}
				}, h.checkOn || (w.valHooks[this].get = function(e) {
					return null === e.getAttribute("value") ? "on" : e.value
				})
			}), h.focusin = "onfocusin" in t;
			var mt = /^(?:focusinfocus|focusoutblur)$/,
				xt = function(e) {
					e.stopPropagation()
				};
			w.extend(w.event, {
				trigger: function(e, n, r, i) {
					var o, a, s, u, l, c, p, d, h = [r || y],
						m = f.call(e, "type") ? e.type : e,
						x = f.call(e, "namespace") ? e.namespace.split(".") : [];
					if (a = d = s = r = r || y, 3 !== r.nodeType && 8 !== r.nodeType && !mt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), l = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), p = w.event.special[m] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
						if (!i && !p.noBubble && !v(r)) {
							for (u = p.delegateType || m, mt.test(u + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
							s === (r.ownerDocument || y) && h.push(s.defaultView || s.parentWindow || t)
						}
						for (o = 0;
							(a = h[o++]) && !e.isPropagationStopped();) d = a, e.type = o > 1 ? u : p.bindType || m, (c = (Y.get(a, "events") || Object.create(null))[e.type] && Y.get(a, "handle")) && c.apply(a, n), (c = l && a[l]) && c.apply && V(a) && (e.result = c.apply(a, n), !1 === e.result && e.preventDefault());
						return e.type = m, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), n) || !V(r) || l && g(r[m]) && !v(r) && ((s = r[l]) && (r[l] = null), w.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, xt), r[m](), e.isPropagationStopped() && d.removeEventListener(m, xt), w.event.triggered = void 0, s && (r[l] = s)), e.result
					}
				},
				simulate: function(e, t, n) {
					var r = w.extend(new w.Event, n, {
						type: e,
						isSimulated: !0
					});
					w.event.trigger(r, null, t)
				}
			}), w.fn.extend({
				trigger: function(e, t) {
					return this.each(function() {
						w.event.trigger(e, t, this)
					})
				},
				triggerHandler: function(e, t) {
					var n = this[0];
					if (n) return w.event.trigger(e, t, n, !0)
				}
			}), h.focusin || w.each({
				focus: "focusin",
				blur: "focusout"
			}, function(e, t) {
				var n = function(e) {
					w.event.simulate(t, e.target, w.event.fix(e))
				};
				w.event.special[t] = {
					setup: function() {
						var r = this.ownerDocument || this.document || this,
							i = Y.access(r, t);
						i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
					},
					teardown: function() {
						var r = this.ownerDocument || this.document || this,
							i = Y.access(r, t) - 1;
						i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
					}
				}
			});
			var bt = t.location,
				wt = {
					guid: Date.now()
				},
				Tt = /\?/;
			w.parseXML = function(e) {
				var n, r;
				if (!e || "string" != typeof e) return null;
				try {
					n = (new t.DOMParser).parseFromString(e, "text/xml")
				} catch (i) {}
				return r = n && n.getElementsByTagName("parsererror")[0], n && !r || w.error("Invalid XML: " + (r ? w.map(r.childNodes, function(e) {
					return e.textContent
				}).join("\n") : e)), n
			};
			var Ct = /\[\]$/,
				St = /\r?\n/g,
				Et = /^(?:submit|button|image|reset|file)$/i,
				kt = /^(?:input|select|textarea|keygen)/i;

			function At(e, t, n, r) {
				var i;
				if (Array.isArray(t)) w.each(t, function(t, i) {
					n || Ct.test(e) ? r(e, i) : At(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
				});
				else if (n || "object" !== b(t)) r(e, t);
				else
					for (i in t) At(e + "[" + i + "]", t[i], n, r)
			}
			w.param = function(e, t) {
				var n, r = [],
					i = function(e, t) {
						var n = g(t) ? t() : t;
						r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
					};
				if (null == e) return "";
				if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
					i(this.name, this.value)
				});
				else
					for (n in e) At(n, e[n], t, i);
				return r.join("&")
			}, w.fn.extend({
				serialize: function() {
					return w.param(this.serializeArray())
				},
				serializeArray: function() {
					return this.map(function() {
						var e = w.prop(this, "elements");
						return e ? w.makeArray(e) : this
					}).filter(function() {
						var e = this.type;
						return this.name && !w(this).is(":disabled") && kt.test(this.nodeName) && !Et.test(e) && (this.checked || !de.test(e))
					}).map(function(e, t) {
						var n = w(this).val();
						return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
							return {
								name: t.name,
								value: e.replace(St, "\r\n")
							}
						}) : {
							name: t.name,
							value: n.replace(St, "\r\n")
						}
					}).get()
				}
			});
			var Nt = /%20/g,
				jt = /#.*$/,
				Dt = /([?&])_=[^&]*/,
				qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
				Lt = /^(?:GET|HEAD)$/,
				Ht = /^\/\//,
				Ot = {},
				Pt = {},
				Rt = "*/".concat("*"),
				Mt = y.createElement("a");

			function It(e) {
				return function(t, n) {
					"string" != typeof t && (n = t, t = "*");
					var r, i = 0,
						o = t.toLowerCase().match(P) || [];
					if (g(n))
						for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
				}
			}

			function Wt(e, t, n, r) {
				var i = {},
					o = e === Pt;

				function a(s) {
					var u;
					return i[s] = !0, w.each(e[s] || [], function(e, s) {
						var l = s(t, n, r);
						return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
					}), u
				}
				return a(t.dataTypes[0]) || !i["*"] && a("*")
			}

			function Ft(e, t) {
				var n, r, i = w.ajaxSettings.flatOptions || {};
				for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
				return r && w.extend(!0, e, r), e
			}
			Mt.href = bt.href, w.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: bt.href,
					type: "GET",
					isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
					global: !0,
					processData: !0,
					async: !0,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
						"*": Rt,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},
					contents: {
						xml: /\bxml\b/,
						html: /\bhtml/,
						json: /\bjson\b/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},
					converters: {
						"* text": String,
						"text html": !0,
						"text json": JSON.parse,
						"text xml": w.parseXML
					},
					flatOptions: {
						url: !0,
						context: !0
					}
				},
				ajaxSetup: function(e, t) {
					return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e)
				},
				ajaxPrefilter: It(Ot),
				ajaxTransport: It(Pt),
				ajax: function(e, n) {
					"object" == typeof e && (n = e, e = void 0), n = n || {};
					var r, i, o, a, s, u, l, c, f, p, d = w.ajaxSetup({}, n),
						h = d.context || d,
						g = d.context && (h.nodeType || h.jquery) ? w(h) : w.event,
						v = w.Deferred(),
						m = w.Callbacks("once memory"),
						x = d.statusCode || {},
						b = {},
						T = {},
						C = "canceled",
						S = {
							readyState: 0,
							getResponseHeader: function(e) {
								var t;
								if (l) {
									if (!a)
										for (a = {}; t = qt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
									t = a[e.toLowerCase() + " "]
								}
								return null == t ? null : t.join(", ")
							},
							getAllResponseHeaders: function() {
								return l ? o : null
							},
							setRequestHeader: function(e, t) {
								return null == l && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
							},
							overrideMimeType: function(e) {
								return null == l && (d.mimeType = e), this
							},
							statusCode: function(e) {
								var t;
								if (e)
									if (l) S.always(e[S.status]);
									else
										for (t in e) x[t] = [x[t], e[t]];
								return this
							},
							abort: function(e) {
								var t = e || C;
								return r && r.abort(t), E(0, t), this
							}
						};
					if (v.promise(S), d.url = ((e || d.url || bt.href) + "").replace(Ht, bt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(P) || [""], null == d.crossDomain) {
						u = y.createElement("a");
						try {
							u.href = d.url, u.href = u.href, d.crossDomain = Mt.protocol + "//" + Mt.host != u.protocol + "//" + u.host
						} catch (k) {
							d.crossDomain = !0
						}
					}
					if (d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)), Wt(Ot, d, n, S), l) return S;
					for (f in (c = w.event && d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Lt.test(d.type), i = d.url.replace(jt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Nt, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (Tt.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(Dt, "$1"), p = (Tt.test(i) ? "&" : "?") + "_=" + wt.guid++ + p), d.url = i + p), d.ifModified && (w.lastModified[i] && S.setRequestHeader("If-Modified-Since", w.lastModified[i]), w.etag[i] && S.setRequestHeader("If-None-Match", w.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && S.setRequestHeader("Content-Type", d.contentType), S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]), d.headers) S.setRequestHeader(f, d.headers[f]);
					if (d.beforeSend && (!1 === d.beforeSend.call(h, S, d) || l)) return S.abort();
					if (C = "abort", m.add(d.complete), S.done(d.success), S.fail(d.error), r = Wt(Pt, d, n, S)) {
						if (S.readyState = 1, c && g.trigger("ajaxSend", [S, d]), l) return S;
						d.async && d.timeout > 0 && (s = t.setTimeout(function() {
							S.abort("timeout")
						}, d.timeout));
						try {
							l = !1, r.send(b, E)
						} catch (k) {
							if (l) throw k;
							E(-1, k)
						}
					} else E(-1, "No Transport");

					function E(e, n, a, u) {
						var f, p, y, b, T, C = n;
						l || (l = !0, s && t.clearTimeout(s), r = void 0, o = u || "", S.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (b = function(e, t, n) {
							for (var r, i, o, a, s = e.contents, u = e.dataTypes;
								"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
							if (r)
								for (i in s)
									if (s[i] && s[i].test(r)) {
										u.unshift(i);
										break
									} if (u[0] in n) o = u[0];
							else {
								for (i in n) {
									if (!u[0] || e.converters[i + " " + u[0]]) {
										o = i;
										break
									}
									a || (a = i)
								}
								o = o || a
							}
							if (o) return o !== u[0] && u.unshift(o), n[o]
						}(d, S, a)), !f && w.inArray("script", d.dataTypes) > -1 && w.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), b = function(e, t, n, r) {
							var i, o, a, s, u, l = {},
								c = e.dataTypes.slice();
							if (c[1])
								for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
							for (o = c.shift(); o;)
								if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
									if ("*" === o) o = u;
									else if ("*" !== u && u !== o) {
								if (!(a = l[u + " " + o] || l["* " + o]))
									for (i in l)
										if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
											!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
											break
										} if (!0 !== a)
									if (a && e.throws) t = a(t);
									else try {
										t = a(t)
									} catch (k) {
										return {
											state: "parsererror",
											error: a ? k : "No conversion from " + u + " to " + o
										}
									}
							}
							return {
								state: "success",
								data: t
							}
						}(d, b, S, f), f ? (d.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (w.lastModified[i] = T), (T = S.getResponseHeader("etag")) && (w.etag[i] = T)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, f = !(y = b.error))) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (n || C) + "", f ? v.resolveWith(h, [p, C, S]) : v.rejectWith(h, [S, C, y]), S.statusCode(x), x = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [S, d, f ? p : y]), m.fireWith(h, [S, C]), c && (g.trigger("ajaxComplete", [S, d]), --w.active || w.event.trigger("ajaxStop")))
					}
					return S
				},
				getJSON: function(e, t, n) {
					return w.get(e, t, n, "json")
				},
				getScript: function(e, t) {
					return w.get(e, void 0, t, "script")
				}
			}), w.each(["get", "post"], function(e, t) {
				w[t] = function(e, n, r, i) {
					return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
						url: e,
						type: t,
						dataType: i,
						data: n,
						success: r
					}, w.isPlainObject(e) && e))
				}
			}), w.ajaxPrefilter(function(e) {
				var t;
				for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
			}), w._evalUrl = function(e, t, n) {
				return w.ajax({
					url: e,
					type: "GET",
					dataType: "script",
					cache: !0,
					async: !1,
					global: !1,
					converters: {
						"text script": function() {}
					},
					dataFilter: function(e) {
						w.globalEval(e, t, n)
					}
				})
			}, w.fn.extend({
				wrapAll: function(e) {
					var t;
					return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
						for (var e = this; e.firstElementChild;) e = e.firstElementChild;
						return e
					}).append(this)), this
				},
				wrapInner: function(e) {
					return g(e) ? this.each(function(t) {
						w(this).wrapInner(e.call(this, t))
					}) : this.each(function() {
						var t = w(this),
							n = t.contents();
						n.length ? n.wrapAll(e) : t.append(e)
					})
				},
				wrap: function(e) {
					var t = g(e);
					return this.each(function(n) {
						w(this).wrapAll(t ? e.call(this, n) : e)
					})
				},
				unwrap: function(e) {
					return this.parent(e).not("body").each(function() {
						w(this).replaceWith(this.childNodes)
					}), this
				}
			}), w.expr.pseudos.hidden = function(e) {
				return !w.expr.pseudos.visible(e)
			}, w.expr.pseudos.visible = function(e) {
				return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
			}, w.ajaxSettings.xhr = function() {
				try {
					return new t.XMLHttpRequest
				} catch (e) {}
			};
			var $t = {
					0: 200,
					1223: 204
				},
				Bt = w.ajaxSettings.xhr();
			h.cors = !!Bt && "withCredentials" in Bt, h.ajax = Bt = !!Bt, w.ajaxTransport(function(e) {
				var n, r;
				if (h.cors || Bt && !e.crossDomain) return {
					send: function(i, o) {
						var a, s = e.xhr();
						if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
							for (a in e.xhrFields) s[a] = e.xhrFields[a];
						for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
						n = function(e) {
							return function() {
								n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
									binary: s.response
								} : {
									text: s.responseText
								}, s.getAllResponseHeaders()))
							}
						}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
							4 === s.readyState && t.setTimeout(function() {
								n && r()
							})
						}, n = n("abort");
						try {
							s.send(e.hasContent && e.data || null)
						} catch (u) {
							if (n) throw u
						}
					},
					abort: function() {
						n && n()
					}
				}
			}), w.ajaxPrefilter(function(e) {
				e.crossDomain && (e.contents.script = !1)
			}), w.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /\b(?:java|ecma)script\b/
				},
				converters: {
					"text script": function(e) {
						return w.globalEval(e), e
					}
				}
			}), w.ajaxPrefilter("script", function(e) {
				void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
			}), w.ajaxTransport("script", function(e) {
				var t, n;
				if (e.crossDomain || e.scriptAttrs) return {
					send: function(r, i) {
						t = w("<script>").attr(e.scriptAttrs || {}).prop({
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function(e) {
							t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
						}), y.head.appendChild(t[0])
					},
					abort: function() {
						n && n()
					}
				}
			});
			var _t, zt = [],
				Ut = /(=)\?(?=&|$)|\?\?/;
			w.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function() {
					var e = zt.pop() || w.expando + "_" + wt.guid++;
					return this[e] = !0, e
				}
			}), w.ajaxPrefilter("json jsonp", function(e, n, r) {
				var i, o, a, s = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
				if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ut, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
					return a || w.error(i + " was not called"), a[0]
				}, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
					a = arguments
				}, r.always(function() {
					void 0 === o ? w(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, zt.push(i)), a && g(o) && o(a[0]), a = o = void 0
				}), "script"
			}), h.createHTMLDocument = ((_t = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), w.parseHTML = function(e, t, n) {
				return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((r = (t = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, t.head.appendChild(r)) : t = y), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && w(o).remove(), w.merge([], i.childNodes)));
				var r, i, o
			}, w.fn.load = function(e, t, n) {
				var r, i, o, a = this,
					s = e.indexOf(" ");
				return s > -1 && (r = ht(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
					url: e,
					type: i || "GET",
					dataType: "html",
					data: t
				}).done(function(e) {
					o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
				}).always(n && function(e, t) {
					a.each(function() {
						n.apply(this, o || [e.responseText, t, e])
					})
				}), this
			}, w.expr.pseudos.animated = function(e) {
				return w.grep(w.timers, function(t) {
					return e === t.elem
				}).length
			}, w.offset = {
				setOffset: function(e, t, n) {
					var r, i, o, a, s, u, l = w.css(e, "position"),
						c = w(e),
						f = {};
					"static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
				}
			}, w.fn.extend({
				offset: function(e) {
					if (arguments.length) return void 0 === e ? this : this.each(function(t) {
						w.offset.setOffset(this, e, t)
					});
					var t, n, r = this[0];
					return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
						top: t.top + n.pageYOffset,
						left: t.left + n.pageXOffset
					}) : {
						top: 0,
						left: 0
					} : void 0
				},
				position: function() {
					if (this[0]) {
						var e, t, n, r = this[0],
							i = {
								top: 0,
								left: 0
							};
						if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
						else {
							for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
							e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
						}
						return {
							top: t.top - i.top - w.css(r, "marginTop", !0),
							left: t.left - i.left - w.css(r, "marginLeft", !0)
						}
					}
				},
				offsetParent: function() {
					return this.map(function() {
						for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
						return e || re
					})
				}
			}), w.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			}, function(e, t) {
				var n = "pageYOffset" === t;
				w.fn[e] = function(r) {
					return B(this, function(e, r, i) {
						var o;
						if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
						o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
					}, e, r, arguments.length)
				}
			}), w.each(["top", "left"], function(e, t) {
				w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
					if (n) return n = Be(e, t), Re.test(n) ? w(e).position()[t] + "px" : n
				})
			}), w.each({
				Height: "height",
				Width: "width"
			}, function(e, t) {
				w.each({
					padding: "inner" + e,
					content: t,
					"": "outer" + e
				}, function(n, r) {
					w.fn[r] = function(i, o) {
						var a = arguments.length && (n || "boolean" != typeof i),
							s = n || (!0 === i || !0 === o ? "margin" : "border");
						return B(this, function(t, n, i) {
							var o;
							return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
						}, t, a ? i : void 0, a)
					}
				})
			}), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
				w.fn[t] = function(e) {
					return this.on(t, e)
				}
			}), w.fn.extend({
				bind: function(e, t, n) {
					return this.on(e, null, t, n)
				},
				unbind: function(e, t) {
					return this.off(e, null, t)
				},
				delegate: function(e, t, n, r) {
					return this.on(t, e, n, r)
				},
				undelegate: function(e, t, n) {
					return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
				},
				hover: function(e, t) {
					return this.mouseenter(e).mouseleave(t || e)
				}
			}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
				w.fn[t] = function(e, n) {
					return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
				}
			});
			var Xt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
			w.proxy = function(e, t) {
				var n, r, i;
				if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (i = function() {
					return e.apply(t || this, r.concat(o.call(arguments)))
				}).guid = e.guid = e.guid || w.guid++, i
			}, w.holdReady = function(e) {
				e ? w.readyWait++ : w.ready(!0)
			}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = g, w.isWindow = v, w.camelCase = X, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
				var t = w.type(e);
				return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
			}, w.trim = function(e) {
				return null == e ? "" : (e + "").replace(Xt, "$1")
			}, "function" == typeof e && e.amd && e("jquery", [], function() {
				return w
			});
			var Vt = t.jQuery,
				Gt = t.$;
			return w.noConflict = function(e) {
				return t.$ === w && (t.$ = Gt), e && t.jQuery === w && (t.jQuery = Vt), w
			}, void 0 === n && (t.jQuery = t.$ = w), w
		});
	}, {
		"process": "g5IB"
	}],
	"Tm6y": [function(require, module, exports) {
		"use strict";
		if (Object.defineProperty(exports, "__esModule", {
				value: !0
			}), exports.default = void 0, !t) var t = {
			map: function(t, r) {
				var n = {};
				return r ? t.map(function(t, o) {
					return n.index = o, r.call(n, t)
				}) : t.slice()
			},
			naturalOrder: function(t, r) {
				return t < r ? -1 : t > r ? 1 : 0
			},
			sum: function(t, r) {
				var n = {};
				return t.reduce(r ? function(t, o, e) {
					return n.index = e, t + r.call(n, o)
				} : function(t, r) {
					return t + r
				}, 0)
			},
			max: function(r, n) {
				return Math.max.apply(null, n ? t.map(r, n) : r)
			}
		};
		var r = function() {
				var r = 5,
					n = 8 - r,
					o = 1e3;

				function e(t, n, o) {
					return (t << 2 * r) + (n << r) + o
				}

				function u(t) {
					var r = [],
						n = !1;

					function o() {
						r.sort(t), n = !0
					}
					return {
						push: function(t) {
							r.push(t), n = !1
						},
						peek: function(t) {
							return n || o(), void 0 === t && (t = r.length - 1), r[t]
						},
						pop: function() {
							return n || o(), r.pop()
						},
						size: function() {
							return r.length
						},
						map: function(t) {
							return r.map(t)
						},
						debug: function() {
							return n || o(), r
						}
					}
				}

				function i(t, r, n, o, e, u, i) {
					var a = this;
					a.r1 = t, a.r2 = r, a.g1 = n, a.g2 = o, a.b1 = e, a.b2 = u, a.histo = i
				}

				function a() {
					this.vboxes = new u(function(r, n) {
						return t.naturalOrder(r.vbox.count() * r.vbox.volume(), n.vbox.count() * n.vbox.volume())
					})
				}

				function c(r, n) {
					if (n.count()) {
						var o = n.r2 - n.r1 + 1,
							u = n.g2 - n.g1 + 1,
							i = t.max([o, u, n.b2 - n.b1 + 1]);
						if (1 == n.count()) return [n.copy()];
						var a, c, f, s, v = 0,
							l = [],
							h = [];
						if (i == o)
							for (a = n.r1; a <= n.r2; a++) {
								for (s = 0, c = n.g1; c <= n.g2; c++)
									for (f = n.b1; f <= n.b2; f++) s += r[e(a, c, f)] || 0;
								l[a] = v += s
							} else if (i == u)
								for (a = n.g1; a <= n.g2; a++) {
									for (s = 0, c = n.r1; c <= n.r2; c++)
										for (f = n.b1; f <= n.b2; f++) s += r[e(c, a, f)] || 0;
									l[a] = v += s
								} else
									for (a = n.b1; a <= n.b2; a++) {
										for (s = 0, c = n.r1; c <= n.r2; c++)
											for (f = n.g1; f <= n.g2; f++) s += r[e(c, f, a)] || 0;
										l[a] = v += s
									}
						return l.forEach(function(t, r) {
								h[r] = v - t
							}),
							function(t) {
								var r, o, e, u, i, c = t + "1",
									f = t + "2",
									s = 0;
								for (a = n[c]; a <= n[f]; a++)
									if (l[a] > v / 2) {
										for (e = n.copy(), u = n.copy(), i = (r = a - n[c]) <= (o = n[f] - a) ? Math.min(n[f] - 1, ~~(a + o / 2)) : Math.max(n[c], ~~(a - 1 - r / 2)); !l[i];) i++;
										for (s = h[i]; !s && l[i - 1];) s = h[--i];
										return e[f] = i, u[c] = e[f] + 1, [e, u]
									}
							}(i == o ? "r" : i == u ? "g" : "b")
					}
				}
				return i.prototype = {
					volume: function(t) {
						var r = this;
						return r._volume && !t || (r._volume = (r.r2 - r.r1 + 1) * (r.g2 - r.g1 + 1) * (r.b2 - r.b1 + 1)), r._volume
					},
					count: function(t) {
						var r = this,
							n = r.histo;
						if (!r._count_set || t) {
							var o, u, i, a = 0;
							for (o = r.r1; o <= r.r2; o++)
								for (u = r.g1; u <= r.g2; u++)
									for (i = r.b1; i <= r.b2; i++) a += n[e(o, u, i)] || 0;
							r._count = a, r._count_set = !0
						}
						return r._count
					},
					copy: function() {
						var t = this;
						return new i(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo)
					},
					avg: function(t) {
						var n = this,
							o = n.histo;
						if (!n._avg || t) {
							var u, i, a, c, f = 0,
								s = 1 << 8 - r,
								v = 0,
								l = 0,
								h = 0;
							for (i = n.r1; i <= n.r2; i++)
								for (a = n.g1; a <= n.g2; a++)
									for (c = n.b1; c <= n.b2; c++) f += u = o[e(i, a, c)] || 0, v += u * (i + .5) * s, l += u * (a + .5) * s, h += u * (c + .5) * s;
							n._avg = f ? [~~(v / f), ~~(l / f), ~~(h / f)] : [~~(s * (n.r1 + n.r2 + 1) / 2), ~~(s * (n.g1 + n.g2 + 1) / 2), ~~(s * (n.b1 + n.b2 + 1) / 2)]
						}
						return n._avg
					},
					contains: function(t) {
						var r = this,
							o = t[0] >> n;
						return gval = t[1] >> n, bval = t[2] >> n, o >= r.r1 && o <= r.r2 && gval >= r.g1 && gval <= r.g2 && bval >= r.b1 && bval <= r.b2
					}
				}, a.prototype = {
					push: function(t) {
						this.vboxes.push({
							vbox: t,
							color: t.avg()
						})
					},
					palette: function() {
						return this.vboxes.map(function(t) {
							return t.color
						})
					},
					size: function() {
						return this.vboxes.size()
					},
					map: function(t) {
						for (var r = this.vboxes, n = 0; n < r.size(); n++)
							if (r.peek(n).vbox.contains(t)) return r.peek(n).color;
						return this.nearest(t)
					},
					nearest: function(t) {
						for (var r, n, o, e = this.vboxes, u = 0; u < e.size(); u++)((n = Math.sqrt(Math.pow(t[0] - e.peek(u).color[0], 2) + Math.pow(t[1] - e.peek(u).color[1], 2) + Math.pow(t[2] - e.peek(u).color[2], 2))) < r || void 0 === r) && (r = n, o = e.peek(u).color);
						return o
					},
					forcebw: function() {
						var r = this.vboxes;
						r.sort(function(r, n) {
							return t.naturalOrder(t.sum(r.color), t.sum(n.color))
						});
						var n = r[0].color;
						n[0] < 5 && n[1] < 5 && n[2] < 5 && (r[0].color = [0, 0, 0]);
						var o = r.length - 1,
							e = r[o].color;
						e[0] > 251 && e[1] > 251 && e[2] > 251 && (r[o].color = [255, 255, 255])
					}
				}, {
					quantize: function(f, s) {
						if (!f.length || s < 2 || s > 256) return !1;
						var v = function(t) {
							var o, u = new Array(1 << 3 * r);
							return t.forEach(function(t) {
								o = e(t[0] >> n, t[1] >> n, t[2] >> n), u[o] = (u[o] || 0) + 1
							}), u
						}(f);
						v.forEach(function() {});
						var l = function(t, r) {
								var o, e, u, a = 1e6,
									c = 0,
									f = 1e6,
									s = 0,
									v = 1e6,
									l = 0;
								return t.forEach(function(t) {
									(o = t[0] >> n) < a ? a = o : o > c && (c = o), (e = t[1] >> n) < f ? f = e : e > s && (s = e), (u = t[2] >> n) < v ? v = u : u > l && (l = u)
								}), new i(a, c, f, s, v, l, r)
							}(f, v),
							h = new u(function(r, n) {
								return t.naturalOrder(r.count(), n.count())
							});

						function g(t, r) {
							for (var n, e = t.size(), u = 0; u < o;) {
								if (e >= r) return;
								if (u++ > o) return;
								if ((n = t.pop()).count()) {
									var i = c(v, n),
										a = i[0],
										f = i[1];
									if (!a) return;
									t.push(a), f && (t.push(f), e++)
								} else t.push(n), u++
							}
						}
						h.push(l), g(h, .75 * s);
						for (var p = new u(function(r, n) {
								return t.naturalOrder(r.count() * r.volume(), n.count() * n.volume())
							}); h.size();) p.push(h.pop());
						g(p, s);
						for (var b = new a; p.size();) b.push(p.pop());
						return b
					}
				}
			}().quantize,
			n = function(t) {
				this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.width = this.canvas.width = t.naturalWidth, this.height = this.canvas.height = t.naturalHeight, this.context.drawImage(t, 0, 0, this.width, this.height)
			};
		n.prototype.getImageData = function() {
			return this.context.getImageData(0, 0, this.width, this.height)
		};
		var o = function() {};
		exports.default = o, o.prototype.getColor = function(t, r) {
			return void 0 === r && (r = 10), this.getPalette(t, 5, r)[0]
		}, o.prototype.getPalette = function(t, o, e) {
			var u = function(t) {
					var r = t.colorCount,
						n = t.quality;
					if (void 0 !== r && Number.isInteger(r)) {
						if (1 === r) throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
						r = Math.max(r, 2), r = Math.min(r, 20)
					} else r = 12;
					return (void 0 === n || !Number.isInteger(n) || n < 1) && (n = 10), {
						colorCount: r,
						quality: n
					}
				}({
					colorCount: o,
					quality: e
				}),
				i = new n(t),
				a = function(t, r, n) {
					for (var o, e, u, i, a, c = t, f = [], s = 0; s < r; s += n) e = c[0 + (o = 4 * s)], u = c[o + 1], i = c[o + 2], (void 0 === (a = c[o + 3]) || a >= 125) && (e > 250 && u > 250 && i > 250 || f.push([e, u, i]));
					return f
				}(i.getImageData().data, i.width * i.height, u.quality),
				c = r(a, u.colorCount);
			return c ? c.palette() : null
		}, o.prototype.getColorFromUrl = function(t, r, n) {
			var o = this,
				e = document.createElement("img");
			e.addEventListener("load", function() {
				var u = o.getPalette(e, 5, n);
				r(u[0], t)
			}), e.src = t
		}, o.prototype.getImageData = function(t, r) {
			var n = new XMLHttpRequest;
			n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function() {
				if (200 == this.status) {
					var t = new Uint8Array(this.response);
					i = t.length;
					for (var n = new Array(i), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
					var e = n.join(""),
						u = window.btoa(e);
					r("data:image/png;base64," + u)
				}
			}, n.send()
		}, o.prototype.getColorAsync = function(t, r, n) {
			var o = this;
			this.getImageData(t, function(t) {
				var e = document.createElement("img");
				e.addEventListener("load", function() {
					var t = o.getPalette(e, 5, n);
					r(t[0], this)
				}), e.src = t
			})
		};
	}, {}],
	"THaq": [function(require, module, exports) {
		module.exports = "./images/image-1.jpg";
	}, {}],
	"qYE0": [function(require, module, exports) {
		module.exports = "./images/image-3.jpg";
	}, {}],
	"odII": [function(require, module, exports) {
		module.exports = "./images/image-2.jpg";
	}, {}],
	"SkiV": [function(require, module, exports) {
		module.exports = {
			"image-1": require("./images/image-1.jpg"),
			"image-3": require("./images/image-3.jpg"),
			"image-2": require("./images/image-2.jpg")
		};
	}, {
		"./images/image-1.jpg": "THaq",
		"./images/image-3.jpg": "qYE0",
		"./images/image-2.jpg": "odII"
	}],
	"pLyG": [function(require, module, exports) {
		var define;
		var global = arguments[3];
		var e, t = arguments[3];
		! function(t, n) {
			"object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof e && e.amd ? e(n) : (t = t || self).Mustache = n()
		}(this, function() {
			"use strict";
			var e = Object.prototype.toString,
				t = Array.isArray || function(t) {
					return "[object Array]" === e.call(t)
				};

			function n(e) {
				return "function" == typeof e
			}

			function r(e) {
				return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}

			function i(e, t) {
				return null != e && "object" == typeof e && t in e
			}
			var o = RegExp.prototype.test;
			var a = /\S/;

			function s(e) {
				return ! function(e, t) {
					return o.call(e, t)
				}(a, e)
			}
			var c = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
				"/": "&#x2F;",
				"`": "&#x60;",
				"=": "&#x3D;"
			};
			var p = /\s*/,
				u = /\s+/,
				l = /\s*=/,
				h = /\s*\}/,
				f = /#|\^|\/|>|\{|&|=|!/;

			function g(e) {
				this.string = e, this.tail = e, this.pos = 0
			}

			function d(e, t) {
				this.view = e, this.cache = {
					".": this.view
				}, this.parent = t
			}

			function v() {
				this.templateCache = {
					_cache: {},
					set: function(e, t) {
						this._cache[e] = t
					},
					get: function(e) {
						return this._cache[e]
					},
					clear: function() {
						this._cache = {}
					}
				}
			}
			g.prototype.eos = function() {
				return "" === this.tail
			}, g.prototype.scan = function(e) {
				var t = this.tail.match(e);
				if (!t || 0 !== t.index) return "";
				var n = t[0];
				return this.tail = this.tail.substring(n.length), this.pos += n.length, n
			}, g.prototype.scanUntil = function(e) {
				var t, n = this.tail.search(e);
				switch (n) {
					case -1:
						t = this.tail, this.tail = "";
						break;
					case 0:
						t = "";
						break;
					default:
						t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
				}
				return this.pos += t.length, t
			}, d.prototype.push = function(e) {
				return new d(e, this)
			}, d.prototype.lookup = function(e) {
				var t, r, o, a = this.cache;
				if (a.hasOwnProperty(e)) t = a[e];
				else {
					for (var s, c, p, u = this, l = !1; u;) {
						if (e.indexOf(".") > 0)
							for (s = u.view, c = e.split("."), p = 0; null != s && p < c.length;) p === c.length - 1 && (l = i(s, c[p]) || (r = s, o = c[p], null != r && "object" != typeof r && r.hasOwnProperty && r.hasOwnProperty(o))), s = s[c[p++]];
						else s = u.view[e], l = i(u.view, e);
						if (l) {
							t = s;
							break
						}
						u = u.parent
					}
					a[e] = t
				}
				return n(t) && (t = t.call(this.view)), t
			}, v.prototype.clearCache = function() {
				void 0 !== this.templateCache && this.templateCache.clear()
			}, v.prototype.parse = function(e, n) {
				var i = this.templateCache,
					o = e + ":" + (n || y.tags).join(":"),
					a = void 0 !== i,
					c = a ? i.get(o) : void 0;
				return null == c && (c = function(e, n) {
					if (!e) return [];
					var i, o, a, c = !1,
						d = [],
						v = [],
						w = [],
						m = !1,
						b = !1,
						C = "",
						k = 0;

					function x() {
						if (m && !b)
							for (; w.length;) delete v[w.pop()];
						else w = [];
						m = !1, b = !1
					}

					function E(e) {
						if ("string" == typeof e && (e = e.split(u, 2)), !t(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
						i = new RegExp(r(e[0]) + "\\s*"), o = new RegExp("\\s*" + r(e[1])), a = new RegExp("\\s*" + r("}" + e[1]))
					}
					E(n || y.tags);
					for (var T, j, U, S, P, V, O = new g(e); !O.eos();) {
						if (T = O.pos, U = O.scanUntil(i))
							for (var A = 0, I = U.length; A < I; ++A) s(S = U.charAt(A)) ? (w.push(v.length), C += S) : (b = !0, c = !0, C += " "), v.push(["text", S, T, T + 1]), T += 1, "\n" === S && (x(), C = "", k = 0, c = !1);
						if (!O.scan(i)) break;
						if (m = !0, j = O.scan(f) || "name", O.scan(p), "=" === j ? (U = O.scanUntil(l), O.scan(l), O.scanUntil(o)) : "{" === j ? (U = O.scanUntil(a), O.scan(h), O.scanUntil(o), j = "&") : U = O.scanUntil(o), !O.scan(o)) throw new Error("Unclosed tag at " + O.pos);
						if (P = ">" == j ? [j, U, T, O.pos, C, k, c] : [j, U, T, O.pos], k++, v.push(P), "#" === j || "^" === j) d.push(P);
						else if ("/" === j) {
							if (!(V = d.pop())) throw new Error('Unopened section "' + U + '" at ' + T);
							if (V[1] !== U) throw new Error('Unclosed section "' + V[1] + '" at ' + T)
						} else "name" === j || "{" === j || "&" === j ? b = !0 : "=" === j && E(U)
					}
					if (x(), V = d.pop()) throw new Error('Unclosed section "' + V[1] + '" at ' + O.pos);
					return function(e) {
						for (var t, n = [], r = n, i = [], o = 0, a = e.length; o < a; ++o) switch ((t = e[o])[0]) {
							case "#":
							case "^":
								r.push(t), i.push(t), r = t[4] = [];
								break;
							case "/":
								i.pop()[5] = t[2], r = i.length > 0 ? i[i.length - 1][4] : n;
								break;
							default:
								r.push(t)
						}
						return n
					}(function(e) {
						for (var t, n, r = [], i = 0, o = e.length; i < o; ++i)(t = e[i]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (r.push(t), n = t));
						return r
					}(v))
				}(e, n), a && i.set(o, c)), c
			}, v.prototype.render = function(e, t, n, r) {
				var i = this.getConfigTags(r),
					o = this.parse(e, i),
					a = t instanceof d ? t : new d(t, void 0);
				return this.renderTokens(o, a, n, e, r)
			}, v.prototype.renderTokens = function(e, t, n, r, i) {
				for (var o, a, s, c = "", p = 0, u = e.length; p < u; ++p) s = void 0, "#" === (a = (o = e[p])[0]) ? s = this.renderSection(o, t, n, r, i) : "^" === a ? s = this.renderInverted(o, t, n, r, i) : ">" === a ? s = this.renderPartial(o, t, n, i) : "&" === a ? s = this.unescapedValue(o, t) : "name" === a ? s = this.escapedValue(o, t, i) : "text" === a && (s = this.rawValue(o)), void 0 !== s && (c += s);
				return c
			}, v.prototype.renderSection = function(e, r, i, o, a) {
				var s = this,
					c = "",
					p = r.lookup(e[1]);
				if (p) {
					if (t(p))
						for (var u = 0, l = p.length; u < l; ++u) c += this.renderTokens(e[4], r.push(p[u]), i, o, a);
					else if ("object" == typeof p || "string" == typeof p || "number" == typeof p) c += this.renderTokens(e[4], r.push(p), i, o, a);
					else if (n(p)) {
						if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
						null != (p = p.call(r.view, o.slice(e[3], e[5]), function(e) {
							return s.render(e, r, i, a)
						})) && (c += p)
					} else c += this.renderTokens(e[4], r, i, o, a);
					return c
				}
			}, v.prototype.renderInverted = function(e, n, r, i, o) {
				var a = n.lookup(e[1]);
				if (!a || t(a) && 0 === a.length) return this.renderTokens(e[4], n, r, i, o)
			}, v.prototype.indentPartial = function(e, t, n) {
				for (var r = t.replace(/[^ \t]/g, ""), i = e.split("\n"), o = 0; o < i.length; o++) i[o].length && (o > 0 || !n) && (i[o] = r + i[o]);
				return i.join("\n")
			}, v.prototype.renderPartial = function(e, t, r, i) {
				if (r) {
					var o = this.getConfigTags(i),
						a = n(r) ? r(e[1]) : r[e[1]];
					if (null != a) {
						var s = e[6],
							c = e[5],
							p = e[4],
							u = a;
						0 == c && p && (u = this.indentPartial(a, p, s));
						var l = this.parse(u, o);
						return this.renderTokens(l, t, r, u, i)
					}
				}
			}, v.prototype.unescapedValue = function(e, t) {
				var n = t.lookup(e[1]);
				if (null != n) return n
			}, v.prototype.escapedValue = function(e, t, n) {
				var r = this.getConfigEscape(n) || y.escape,
					i = t.lookup(e[1]);
				if (null != i) return "number" == typeof i && r === y.escape ? String(i) : r(i)
			}, v.prototype.rawValue = function(e) {
				return e[1]
			}, v.prototype.getConfigTags = function(e) {
				return t(e) ? e : e && "object" == typeof e ? e.tags : void 0
			}, v.prototype.getConfigEscape = function(e) {
				return e && "object" == typeof e && !t(e) ? e.escape : void 0
			};
			var y = {
					name: "mustache.js",
					version: "4.2.0",
					tags: ["{{", "}}"],
					clearCache: void 0,
					escape: void 0,
					parse: void 0,
					render: void 0,
					Scanner: void 0,
					Context: void 0,
					Writer: void 0,
					set templateCache(e) {
						w.templateCache = e
					},
					get templateCache() {
						return w.templateCache
					}
				},
				w = new v;
			return y.clearCache = function() {
				return w.clearCache()
			}, y.parse = function(e, t) {
				return w.parse(e, t)
			}, y.render = function(e, n, r, i) {
				if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (t(o = e) ? "array" : typeof o) + '" was given as the first argument for mustache#render(template, view, partials)');
				var o;
				return w.render(e, n, r, i)
			}, y.escape = function(e) {
				return String(e).replace(/[&<>"'`=\/]/g, function(e) {
					return c[e]
				})
			}, y.Scanner = g, y.Context = d, y.Writer = v, y
		});
	}, {}],
	"Mfih": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = n;
		var e = o(require("jquery")),
			t = o(require("colorthief")),
			a = o(require("../images/*.jpg")),
			r = o(require("mustache"));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function n() {
			var o = {
					images: Object.values(a.default).map(e => ({
						file: e
					}))
				},
				n = r.default.render((0, e.default)("#image-section-template").html(), o);
			(0, e.default)("#example-images").append(n), (0, e.default)(".run-functions-button").on("click", function(t) {
				var a = (0, e.default)(this);
				a.text("...");
				var r = a.closest(".image-section"),
					o = (r.find(".color-thief-output"), r.find(".target-image"));
				l(o, r)
			});
			var i = new t.default,
				l = function(t, a) {
					var o = t[0],
						n = Date.now(),
						l = i.getColor(o),
						d = Date.now() - n,
						u = {
							color: l,
							palette: i.getPalette(o),
							elapsedTimeForGetColor: d,
							elapsedTimeForGetPalette: Date.now() - n + d
						},
						f = r.default.render((0, e.default)("#color-thief-output-template").html(), u);
					a.addClass("with-color-thief-output"), a.find(".run-functions-button").addClass("hide"), setTimeout(function() {
						a.find(".color-thief-output").append(f).slideDown();
						var t = (0, e.default)(window).height(),
							r = (0, e.default)("html").scrollTop(),
							o = a.find(".color-thief-output").offset().top;
						r < o && r + t - 250 < o && (0, e.default)("html, body").animate({
							scrollTop: o - t + 200 + "px"
						})
					}, 300)
				};
			if (window.FileReader && !/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase())) {
				(0, e.default)("#drag-drop").show();
				var d = (0, e.default)("#drop-zone");
				d.on("dragenter", function(e) {
					return d.addClass("dragging"), !1
				}).on("dragleave", function(e) {
					return d.removeClass("dragging"), !1
				}).on("dragover", function(e) {
					return !1
				}).on("drop", function(t) {
					return d.removeClass("dragging"),
						function(t) {
							for (var a = (0, e.default)("#dragged-images"), o = /image.*/, n = t.length, i = 0; i < n; i++) {
								var d = t[i];
								if (d.type.match(o)) {
									var u = new FileReader;
									u.onload = function(t) {
										let o = {
											images: [{
												class: "dropped-image",
												file: t.target.result
											}]
										};
										var n = r.default.render((0, e.default)("#image-section-template").html(), o);
										a.prepend(n);
										var i = a.find(".image-section").first(),
											d = (0, e.default)(".dropped-image .target-image");
										d.on("load", function() {
											l(d, i)
										})
									}, u.readAsDataURL(d)
								} else alert("File must be a supported image type.")
							}
						}(t.originalEvent.dataTransfer.files), !1
				})
			}
		}
	}, {
		"jquery": "HlZQ",
		"colorthief": "Tm6y",
		"../images/*.jpg": "SkiV",
		"mustache": "pLyG"
	}],
	"ix9x": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = n;
		var e = t(require("jquery"));

		function t(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function n() {
			(0, e.default)("#nav").on("click", ".nav-link", function(t) {
				t.preventDefault();
				var n = this.hash;
				(0, e.default)("html, body").animate({
					scrollTop: (0, e.default)(n).offset().top
				}, 600, function() {
					window.location.hash = n
				})
			})
		}
	}, {
		"jquery": "HlZQ"
	}],
	"aKVG": [function(require, module, exports) {
		"use strict";
		async function t(t, e) {
			try {
				const o = await fetch(`https://api.github.com/repos/${t}/${e}`);
				if (o.ok) {
					return (await o.json()).stargazers_count
				}
				return !1
			} catch (r) {
				return !1
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.getStarCount = t;
	}, {}],
	"IvHX": [function(require, module, exports) {
		"use strict";

		function t() {
			var t = t || [];
			t.push(["_setAccount", "UA-2196019-1"]), t.push(["_trackPageview"]),
				function() {
					var t = document.createElement("script");
					t.type = "text/javascript", t.async = !0, t.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
					var e = document.getElementsByTagName("script")[0];
					e.parentNode.insertBefore(t, e)
				}()
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.trackPageView = t;
	}, {}],
	"S6uw": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
			t = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
			a = function() {
				var e = /\blang(?:uage)?-([\w-]+)\b/i,
					a = 0,
					n = t.Prism = {
						manual: t.Prism && t.Prism.manual,
						disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
						util: {
							encode: function(e) {
								return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
							},
							type: function(e) {
								return Object.prototype.toString.call(e).slice(8, -1)
							},
							objId: function(e) {
								return e.__id || Object.defineProperty(e, "__id", {
									value: ++a
								}), e.__id
							},
							clone: function(e, t) {
								var a = n.util.type(e);
								switch (t = t || {}, a) {
									case "Object":
										if (t[n.util.objId(e)]) return t[n.util.objId(e)];
										var r = {};
										for (var s in t[n.util.objId(e)] = r, e) e.hasOwnProperty(s) && (r[s] = n.util.clone(e[s], t));
										return r;
									case "Array":
										if (t[n.util.objId(e)]) return t[n.util.objId(e)];
										r = [];
										return t[n.util.objId(e)] = r, e.forEach(function(e, a) {
											r[a] = n.util.clone(e, t)
										}), r
								}
								return e
							}
						},
						languages: {
							extend: function(e, t) {
								var a = n.util.clone(n.languages[e]);
								for (var r in t) a[r] = t[r];
								return a
							},
							insertBefore: function(e, t, a, r) {
								var s = (r = r || n.languages)[e],
									i = {};
								for (var l in s)
									if (s.hasOwnProperty(l)) {
										if (l == t)
											for (var o in a) a.hasOwnProperty(o) && (i[o] = a[o]);
										a.hasOwnProperty(l) || (i[l] = s[l])
									} var u = r[e];
								return r[e] = i, n.languages.DFS(n.languages, function(t, a) {
									a === u && t != e && (this[t] = i)
								}), i
							},
							DFS: function(e, t, a, r) {
								for (var s in r = r || {}, e) e.hasOwnProperty(s) && (t.call(e, s, e[s], a || s), "Object" !== n.util.type(e[s]) || r[n.util.objId(e[s])] ? "Array" !== n.util.type(e[s]) || r[n.util.objId(e[s])] || (r[n.util.objId(e[s])] = !0, n.languages.DFS(e[s], t, s, r)) : (r[n.util.objId(e[s])] = !0, n.languages.DFS(e[s], t, null, r)))
							}
						},
						plugins: {},
						highlightAll: function(e, t) {
							n.highlightAllUnder(document, e, t)
						},
						highlightAllUnder: function(e, t, a) {
							var r = {
								callback: a,
								selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
							};
							n.hooks.run("before-highlightall", r);
							for (var s, i = r.elements || e.querySelectorAll(r.selector), l = 0; s = i[l++];) n.highlightElement(s, !0 === t, r.callback)
						},
						highlightElement: function(a, r, s) {
							for (var i, l, o = a; o && !e.test(o.className);) o = o.parentNode;
							o && (i = (o.className.match(e) || [, ""])[1].toLowerCase(), l = n.languages[i]), a.className = a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i, a.parentNode && (o = a.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i));
							var u = {
								element: a,
								language: i,
								grammar: l,
								code: a.textContent
							};
							if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (n.hooks.run("before-highlight", u), u.element.textContent = u.code, n.hooks.run("after-highlight", u)), void n.hooks.run("complete", u);
							if (n.hooks.run("before-highlight", u), r && t.Worker) {
								var c = new Worker(n.filename);
								c.onmessage = function(e) {
									u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, n.hooks.run("after-highlight", u), n.hooks.run("complete", u), s && s.call(u.element)
								}, c.postMessage(JSON.stringify({
									language: u.language,
									code: u.code,
									immediateClose: !0
								}))
							} else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, n.hooks.run("after-highlight", u), n.hooks.run("complete", u), s && s.call(a)
						},
						highlight: function(e, t, a) {
							var s = {
								code: e,
								grammar: t,
								language: a
							};
							return n.hooks.run("before-tokenize", s), s.tokens = n.tokenize(s.code, s.grammar), n.hooks.run("after-tokenize", s), r.stringify(n.util.encode(s.tokens), s.language)
						},
						matchGrammar: function(e, t, a, r, s, i, l) {
							var o = n.Token;
							for (var u in a)
								if (a.hasOwnProperty(u) && a[u]) {
									if (u == l) return;
									var c = a[u];
									c = "Array" === n.util.type(c) ? c : [c];
									for (var g = 0; g < c.length; ++g) {
										var p = c[g],
											d = p.inside,
											m = !!p.lookbehind,
											h = !!p.greedy,
											f = 0,
											b = p.alias;
										if (h && !p.pattern.global) {
											var y = p.pattern.toString().match(/[imuy]*$/)[0];
											p.pattern = RegExp(p.pattern.source, y + "g")
										}
										p = p.pattern || p;
										for (var v = r, k = s; v < t.length; k += t[v].length, ++v) {
											var F = t[v];
											if (t.length > e.length) return;
											if (!(F instanceof o)) {
												if (h && v != t.length - 1) {
													if (p.lastIndex = k, !(C = p.exec(e))) break;
													for (var S = C.index + (m ? C[1].length : 0), A = C.index + C[0].length, w = v, x = k, j = t.length; j > w && (A > x || !t[w].type && !t[w - 1].greedy); ++w) S >= (x += t[w].length) && (++v, k = x);
													if (t[v] instanceof o) continue;
													N = w - v, F = e.slice(k, x), C.index -= k
												} else {
													p.lastIndex = 0;
													var C = p.exec(F),
														N = 1
												}
												if (C) {
													m && (f = C[1] ? C[1].length : 0);
													A = (S = C.index + f) + (C = C[0].slice(f)).length;
													var L = F.slice(0, S),
														P = F.slice(A),
														E = [v, N];
													L && (++v, k += L.length, E.push(L));
													var T = new o(u, d ? n.tokenize(C, d) : C, b, C, h);
													if (E.push(T), P && E.push(P), Array.prototype.splice.apply(t, E), 1 != N && n.matchGrammar(e, t, a, v, k, !0, u), i) break
												} else if (i) break
											}
										}
									}
								}
						},
						tokenize: function(e, t) {
							var a = [e],
								r = t.rest;
							if (r) {
								for (var s in r) t[s] = r[s];
								delete t.rest
							}
							return n.matchGrammar(e, a, t, 0, 0, !1), a
						},
						hooks: {
							all: {},
							add: function(e, t) {
								var a = n.hooks.all;
								a[e] = a[e] || [], a[e].push(t)
							},
							run: function(e, t) {
								var a = n.hooks.all[e];
								if (a && a.length)
									for (var r, s = 0; r = a[s++];) r(t)
							}
						}
					},
					r = n.Token = function(e, t, a, n, r) {
						this.type = e, this.content = t, this.alias = a, this.length = 0 | (n || "").length, this.greedy = !!r
					};
				if (r.stringify = function(e, t, a) {
						if ("string" == typeof e) return e;
						if ("Array" === n.util.type(e)) return e.map(function(a) {
							return r.stringify(a, t, e)
						}).join("");
						var s = {
							type: e.type,
							content: r.stringify(e.content, t, a),
							tag: "span",
							classes: ["token", e.type],
							attributes: {},
							language: t,
							parent: a
						};
						if (e.alias) {
							var i = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
							Array.prototype.push.apply(s.classes, i)
						}
						n.hooks.run("wrap", s);
						var l = Object.keys(s.attributes).map(function(e) {
							return e + '="' + (s.attributes[e] || "").replace(/"/g, "&quot;") + '"'
						}).join(" ");
						return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + (l ? " " + l : "") + ">" + s.content + "</" + s.tag + ">"
					}, !t.document) return t.addEventListener ? (n.disableWorkerMessageHandler || t.addEventListener("message", function(e) {
					var a = JSON.parse(e.data),
						r = a.language,
						s = a.code,
						i = a.immediateClose;
					t.postMessage(n.highlight(s, n.languages[r], r)), i && t.close()
				}, !1), t.Prism) : t.Prism;
				var s = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
				return s && (n.filename = s.src, n.manual || s.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), t.Prism
			}();
		"undefined" != typeof module && module.exports && (module.exports = a), void 0 !== e && (e.Prism = a), a.languages.markup = {
				comment: /<!--[\s\S]*?-->/,
				prolog: /<\?[\s\S]+?\?>/,
				doctype: /<!DOCTYPE[\s\S]+?>/i,
				cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
				tag: {
					pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
					greedy: !0,
					inside: {
						tag: {
							pattern: /^<\/?[^\s>\/]+/i,
							inside: {
								punctuation: /^<\/?/,
								namespace: /^[^\s>\/:]+:/
							}
						},
						"attr-value": {
							pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
							inside: {
								punctuation: [/^=/, {
									pattern: /(^|[^\\])["']/,
									lookbehind: !0
								}]
							}
						},
						punctuation: /\/?>/,
						"attr-name": {
							pattern: /[^\s>\/]+/,
							inside: {
								namespace: /^[^\s>\/:]+:/
							}
						}
					}
				},
				entity: /&#?[\da-z]{1,8};/i
			}, a.languages.markup.tag.inside["attr-value"].inside.entity = a.languages.markup.entity, a.hooks.add("wrap", function(e) {
				"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
			}), a.languages.xml = a.languages.markup, a.languages.html = a.languages.markup, a.languages.mathml = a.languages.markup, a.languages.svg = a.languages.markup, a.languages.css = {
				comment: /\/\*[\s\S]*?\*\//,
				atrule: {
					pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
					inside: {
						rule: /@[\w-]+/
					}
				},
				url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
				selector: /[^{}\s][^{};]*?(?=\s*\{)/,
				string: {
					pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
					greedy: !0
				},
				property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
				important: /!important\b/i,
				function: /[-a-z0-9]+(?=\()/i,
				punctuation: /[(){};:,]/
			}, a.languages.css.atrule.inside.rest = a.languages.css, a.languages.markup && (a.languages.insertBefore("markup", "tag", {
				style: {
					pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
					lookbehind: !0,
					inside: a.languages.css,
					alias: "language-css",
					greedy: !0
				}
			}), a.languages.insertBefore("inside", "attr-value", {
				"style-attr": {
					pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
					inside: {
						"attr-name": {
							pattern: /^\s*style/i,
							inside: a.languages.markup.tag.inside
						},
						punctuation: /^\s*=\s*['"]|['"]\s*$/,
						"attr-value": {
							pattern: /.+/i,
							inside: a.languages.css
						}
					},
					alias: "language-css"
				}
			}, a.languages.markup.tag)), a.languages.clike = {
				comment: [{
					pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
					lookbehind: !0
				}, {
					pattern: /(^|[^\\:])\/\/.*/,
					lookbehind: !0,
					greedy: !0
				}],
				string: {
					pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
					greedy: !0
				},
				"class-name": {
					pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
					lookbehind: !0,
					inside: {
						punctuation: /[.\\]/
					}
				},
				keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
				boolean: /\b(?:true|false)\b/,
				function: /\w+(?=\()/,
				number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
				operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
				punctuation: /[{}[\];(),.:]/
			}, a.languages.javascript = a.languages.extend("clike", {
				"class-name": [a.languages.clike["class-name"], {
					pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
					lookbehind: !0
				}],
				keyword: [{
					pattern: /((?:^|})\s*)(?:catch|finally)\b/,
					lookbehind: !0
				}, /\b(?:as|async|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/],
				number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
				function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\(|\.(?:apply|bind|call)\()/,
				operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
			}), a.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, a.languages.insertBefore("javascript", "keyword", {
				regex: {
					pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
					lookbehind: !0,
					greedy: !0
				},
				"function-variable": {
					pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
					alias: "function"
				},
				parameter: [{
					pattern: /(function(?:\s+[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)[^\s()][^()]*?(?=\s*\))/,
					lookbehind: !0,
					inside: a.languages.javascript
				}, {
					pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/,
					inside: a.languages.javascript
				}, {
					pattern: /(\(\s*)[^\s()][^()]*?(?=\s*\)\s*=>)/,
					lookbehind: !0,
					inside: a.languages.javascript
				}, {
					pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)[^\s()][^()]*?(?=\s*\)\s*\{)/,
					lookbehind: !0,
					inside: a.languages.javascript
				}],
				constant: /\b[A-Z][A-Z\d_]*\b/
			}), a.languages.insertBefore("javascript", "string", {
				"template-string": {
					pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
					greedy: !0,
					inside: {
						interpolation: {
							pattern: /\${[^}]+}/,
							inside: {
								"interpolation-punctuation": {
									pattern: /^\${|}$/,
									alias: "punctuation"
								},
								rest: a.languages.javascript
							}
						},
						string: /[\s\S]+/
					}
				}
			}), a.languages.markup && a.languages.insertBefore("markup", "tag", {
				script: {
					pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
					lookbehind: !0,
					inside: a.languages.javascript,
					alias: "language-javascript",
					greedy: !0
				}
			}), a.languages.js = a.languages.javascript,
			function() {
				if ("undefined" != typeof self && self.Prism && self.document) {
					var e = "line-numbers",
						t = /\n(?!$)/g,
						n = function(e) {
							var a = r(e)["white-space"];
							if ("pre-wrap" === a || "pre-line" === a) {
								var n = e.querySelector("code"),
									s = e.querySelector(".line-numbers-rows"),
									i = e.querySelector(".line-numbers-sizer"),
									l = n.textContent.split(t);
								i || ((i = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(i)), i.style.display = "block", l.forEach(function(e, t) {
									i.textContent = e || "\n";
									var a = i.getBoundingClientRect().height;
									s.children[t].style.height = a + "px"
								}), i.textContent = "", i.style.display = "none"
							}
						},
						r = function(e) {
							return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
						};
					window.addEventListener("resize", function() {
						Array.prototype.forEach.call(document.querySelectorAll("pre." + e), n)
					}), a.hooks.add("complete", function(e) {
						if (e.code) {
							var r = e.element.parentNode,
								s = /\s*\bline-numbers\b\s*/;
							if (r && /pre/i.test(r.nodeName) && (s.test(r.className) || s.test(e.element.className)) && !e.element.querySelector(".line-numbers-rows")) {
								s.test(e.element.className) && (e.element.className = e.element.className.replace(s, " ")), s.test(r.className) || (r.className += " line-numbers");
								var i, l = e.code.match(t),
									o = l ? l.length + 1 : 1,
									u = new Array(o + 1);
								u = u.join("<span></span>"), (i = document.createElement("span")).setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = u, r.hasAttribute("data-start") && (r.style.counterReset = "linenumber " + (parseInt(r.getAttribute("data-start"), 10) - 1)), e.element.appendChild(i), n(r), a.hooks.run("line-numbers", e)
							}
						}
					}), a.hooks.add("line-numbers", function(e) {
						e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
					}), a.plugins.lineNumbers = {
						getLine: function(t, a) {
							if ("PRE" === t.tagName && t.classList.contains(e)) {
								var n = t.querySelector(".line-numbers-rows"),
									r = parseInt(t.getAttribute("data-start"), 10) || 1,
									s = r + (n.children.length - 1);
								r > a && (a = r), a > s && (a = s);
								var i = a - r;
								return n.children[i]
							}
						}
					}
				}
			}(),
			function() {
				if ("undefined" != typeof self && self.Prism && self.document) {
					var e = [],
						t = {},
						n = function() {};
					a.plugins.toolbar = {};
					var r = a.plugins.toolbar.registerButton = function(a, n) {
							var r;
							r = "function" == typeof n ? n : function(e) {
								var t;
								return "function" == typeof n.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function() {
									n.onClick.call(this, e)
								})) : "string" == typeof n.url ? (t = document.createElement("a")).href = n.url : t = document.createElement("span"), t.textContent = n.text, t
							}, e.push(t[a] = r)
						},
						s = a.plugins.toolbar.hook = function(a) {
							var r = a.element.parentNode;
							if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
								var s = document.createElement("div");
								s.classList.add("code-toolbar"), r.parentNode.insertBefore(s, r), s.appendChild(r);
								var i = document.createElement("div");
								i.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (e = document.body.getAttribute("data-toolbar-order").split(",").map(function(e) {
									return t[e] || n
								})), e.forEach(function(e) {
									var t = e(a);
									if (t) {
										var n = document.createElement("div");
										n.classList.add("toolbar-item"), n.appendChild(t), i.appendChild(n)
									}
								}), s.appendChild(i)
							}
						};
					r("label", function(e) {
						var t = e.element.parentNode;
						if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
							var a, n, r = t.getAttribute("data-label");
							try {
								n = document.querySelector("template#" + r)
							} catch (s) {}
							return n ? a = n.content : (t.hasAttribute("data-url") ? (a = document.createElement("a")).href = t.getAttribute("data-url") : a = document.createElement("span"), a.textContent = r), a
						}
					}), a.hooks.add("complete", s)
				}
			}(),
			function() {
				if ("undefined" != typeof self && self.Prism && self.document) {
					if (!a.plugins.toolbar) return void console.warn("Show Languages plugin loaded before Toolbar plugin.");
					var e = {
						html: "HTML",
						xml: "XML",
						svg: "SVG",
						mathml: "MathML",
						css: "CSS",
						clike: "C-like",
						javascript: "JavaScript",
						abap: "ABAP",
						actionscript: "ActionScript",
						apacheconf: "Apache Configuration",
						apl: "APL",
						applescript: "AppleScript",
						arff: "ARFF",
						asciidoc: "AsciiDoc",
						asm6502: "6502 Assembly",
						aspnet: "ASP.NET (C#)",
						autohotkey: "AutoHotkey",
						autoit: "AutoIt",
						shell: "Shell",
						basic: "BASIC",
						csharp: "C#",
						cpp: "C++",
						cil: "CIL",
						coffeescript: "CoffeeScript",
						csp: "Content-Security-Policy",
						"css-extras": "CSS Extras",
						django: "Django/Jinja2",
						erb: "ERB",
						fsharp: "F#",
						gcode: "G-code",
						gedcom: "GEDCOM",
						glsl: "GLSL",
						gml: "GameMaker Language",
						graphql: "GraphQL",
						hcl: "HCL",
						http: "HTTP",
						hpkp: "HTTP Public-Key-Pins",
						hsts: "HTTP Strict-Transport-Security",
						ichigojam: "IchigoJam",
						inform7: "Inform 7",
						javastacktrace: "Java stack trace",
						json: "JSON",
						jsonp: "JSONP",
						latex: "LaTeX",
						livescript: "LiveScript",
						lolcode: "LOLCODE",
						"markup-templating": "Markup templating",
						matlab: "MATLAB",
						mel: "MEL",
						n1ql: "N1QL",
						n4js: "N4JS",
						nasm: "NASM",
						nginx: "nginx",
						nsis: "NSIS",
						objectivec: "Objective-C",
						ocaml: "OCaml",
						opencl: "OpenCL",
						parigp: "PARI/GP",
						objectpascal: "Object Pascal",
						php: "PHP",
						"php-extras": "PHP Extras",
						plsql: "PL/SQL",
						powershell: "PowerShell",
						properties: ".properties",
						protobuf: "Protocol Buffers",
						q: "Q (kdb+ database)",
						jsx: "React JSX",
						tsx: "React TSX",
						renpy: "Ren'py",
						rest: "reST (reStructuredText)",
						sas: "SAS",
						sass: "Sass (Sass)",
						scss: "Sass (Scss)",
						sql: "SQL",
						soy: "Soy (Closure Template)",
						tap: "TAP",
						toml: "TOML",
						tt2: "Template Toolkit 2",
						typescript: "TypeScript",
						vbnet: "VB.Net",
						vhdl: "VHDL",
						vim: "vim",
						"visual-basic": "Visual Basic",
						wasm: "WebAssembly",
						wiki: "Wiki markup",
						xeoracube: "XeoraCube",
						xojo: "Xojo (REALbasic)",
						xquery: "XQuery",
						yaml: "YAML"
					};
					a.plugins.toolbar.registerButton("show-language", function(t) {
						var a = t.element.parentNode;
						if (a && /pre/i.test(a.nodeName)) {
							var n = a.getAttribute("data-language") || e[t.language] || t.language && t.language.substring(0, 1).toUpperCase() + t.language.substring(1);
							if (n) {
								var r = document.createElement("span");
								return r.textContent = n, r
							}
						}
					})
				}
			}();
	}, {}],
	"QvaY": [function(require, module, exports) {
		"use strict";
		var e = o(require("./demo.js")),
			t = o(require("./links.js")),
			r = require("./github.js"),
			n = require("./google-analytics.js"),
			u = o(require("./prism.min.js"));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function i(e) {
			e ? document.querySelector(".gh-count-number").innerText = e : document.querySelector(".gh-count").style.display = "none"
		}
		document.addEventListener("DOMContentLoaded", () => {
			(0, e.default)(), (0, t.default)(), (0, r.getStarCount)("lokesh", "color-thief").then(e => {
				i(e)
			}).catch(e => {
				i(!1)
			}), (0, n.trackPageView)()
		});
	}, {
		"./demo.js": "Mfih",
		"./links.js": "ix9x",
		"./github.js": "aKVG",
		"./google-analytics.js": "IvHX",
		"./prism.min.js": "S6uw"
	}]
}, {}, ["QvaY"], null)
//# sourceMappingURL=js.323f86c6.js.map