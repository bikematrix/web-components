var Ci, W, za, qa, Xt, bo, $a, Jn, Va, fi = {}, ja = [], dc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, fn = Array.isArray;
function Ct(r, e) {
  for (var t in e)
    r[t] = e[t];
  return r;
}
function Ua(r) {
  var e = r.parentNode;
  e && e.removeChild(r);
}
function V(r, e, t) {
  var i, n, s, o = {};
  for (s in e)
    s == "key" ? i = e[s] : s == "ref" ? n = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Ci.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null)
    for (s in r.defaultProps)
      o[s] === void 0 && (o[s] = r.defaultProps[s]);
  return ni(r, o, i, n, null);
}
function ni(r, e, t, i, n) {
  var s = { type: r, props: e, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n ?? ++za, __i: -1, __u: 0 };
  return n == null && W.vnode != null && W.vnode(s), s;
}
function pc() {
  return { current: null };
}
function j(r) {
  return r.children;
}
function et(r, e) {
  this.props = r, this.context = e;
}
function Sr(r, e) {
  if (e == null)
    return r.__ ? Sr(r.__, r.__i + 1) : null;
  for (var t; e < r.__k.length; e++)
    if ((t = r.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof r.type == "function" ? Sr(r) : null;
}
function Ha(r) {
  var e, t;
  if ((r = r.__) != null && r.__c != null) {
    for (r.__e = r.__c.base = null, e = 0; e < r.__k.length; e++)
      if ((t = r.__k[e]) != null && t.__e != null) {
        r.__e = r.__c.base = t.__e;
        break;
      }
    return Ha(r);
  }
}
function Qn(r) {
  (!r.__d && (r.__d = !0) && Xt.push(r) && !ji.__r++ || bo !== W.debounceRendering) && ((bo = W.debounceRendering) || $a)(ji);
}
function ji() {
  var r, e, t, i, n, s, o, a, l;
  for (Xt.sort(Jn); r = Xt.shift(); )
    r.__d && (e = Xt.length, i = void 0, s = (n = (t = r).__v).__e, a = [], l = [], (o = t.__P) && ((i = Ct({}, n)).__v = n.__v + 1, W.vnode && W.vnode(i), Ls(o, i, n, t.__n, o.ownerSVGElement !== void 0, 32 & n.__u ? [s] : null, a, s ?? Sr(n), !!(32 & n.__u), l), i.__v = n.__v, i.__.__k[i.__i] = i, Ya(a, i, l), i.__e != s && Ha(i)), Xt.length > e && Xt.sort(Jn));
  ji.__r = 0;
}
function Ga(r, e, t, i, n, s, o, a, l, u, c) {
  var d, h, f, b, v, w = i && i.__k || ja, m = e.length;
  for (t.__d = l, fc(t, e, w), l = t.__d, d = 0; d < m; d++)
    (f = t.__k[d]) != null && typeof f != "boolean" && typeof f != "function" && (h = f.__i === -1 ? fi : w[f.__i] || fi, f.__i = d, Ls(r, f, h, n, s, o, a, l, u, c), b = f.__e, f.ref && h.ref != f.ref && (h.ref && Ts(h.ref, null, f), c.push(f.ref, f.__c || b, f)), v == null && b != null && (v = b), 65536 & f.__u || h.__k === f.__k ? l = Wa(f, l, r) : typeof f.type == "function" && f.__d !== void 0 ? l = f.__d : b && (l = b.nextSibling), f.__d = void 0, f.__u &= -196609);
  t.__d = l, t.__e = v;
}
function fc(r, e, t) {
  var i, n, s, o, a, l = e.length, u = t.length, c = u, d = 0;
  for (r.__k = [], i = 0; i < l; i++)
    o = i + d, (n = r.__k[i] = (n = e[i]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? ni(null, n, null, null, null) : fn(n) ? ni(j, { children: n }, null, null, null) : n.constructor === void 0 && n.__b > 0 ? ni(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = r, n.__b = r.__b + 1, a = hc(n, t, o, c), n.__i = a, s = null, a !== -1 && (c--, (s = t[a]) && (s.__u |= 131072)), s == null || s.__v === null ? (a == -1 && d--, typeof n.type != "function" && (n.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? c > l - o ? d += a - o : d-- : a < o ? a == o - 1 && (d = a - o) : d = 0, a !== i + d && (n.__u |= 65536))) : (s = t[o]) && s.key == null && s.__e && !(131072 & s.__u) && (s.__e == r.__d && (r.__d = Sr(s)), es(s, s, !1), t[o] = null, c--);
  if (c)
    for (i = 0; i < u; i++)
      (s = t[i]) != null && !(131072 & s.__u) && (s.__e == r.__d && (r.__d = Sr(s)), es(s, s));
}
function Wa(r, e, t) {
  var i, n;
  if (typeof r.type == "function") {
    for (i = r.__k, n = 0; i && n < i.length; n++)
      i[n] && (i[n].__ = r, e = Wa(i[n], e, t));
    return e;
  }
  r.__e != e && (t.insertBefore(r.__e, e || null), e = r.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function kt(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (fn(r) ? r.some(function(t) {
    kt(t, e);
  }) : e.push(r)), e;
}
function hc(r, e, t, i) {
  var n = r.key, s = r.type, o = t - 1, a = t + 1, l = e[t];
  if (l === null || l && n == l.key && s === l.type && !(131072 & l.__u))
    return t;
  if (i > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; o >= 0 || a < e.length; ) {
      if (o >= 0) {
        if ((l = e[o]) && !(131072 & l.__u) && n == l.key && s === l.type)
          return o;
        o--;
      }
      if (a < e.length) {
        if ((l = e[a]) && !(131072 & l.__u) && n == l.key && s === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function vo(r, e, t) {
  e[0] === "-" ? r.setProperty(e, t ?? "") : r[e] = t == null ? "" : typeof t != "number" || dc.test(e) ? t : t + "px";
}
function Bi(r, e, t, i, n) {
  var s;
  e:
    if (e === "style")
      if (typeof t == "string")
        r.style.cssText = t;
      else {
        if (typeof i == "string" && (r.style.cssText = i = ""), i)
          for (e in i)
            t && e in t || vo(r.style, e, "");
        if (t)
          for (e in t)
            i && t[e] === i[e] || vo(r.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in r ? e.toLowerCase().slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + s] = t, t ? i ? t.u = i.u : (t.u = Date.now(), r.addEventListener(e, s ? xo : wo, s)) : r.removeEventListener(e, s ? xo : wo, s);
    else {
      if (n)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in r)
        try {
          r[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? r.removeAttribute(e) : r.setAttribute(e, t));
    }
}
function wo(r) {
  if (this.l) {
    var e = this.l[r.type + !1];
    if (r.t) {
      if (r.t <= e.u)
        return;
    } else
      r.t = Date.now();
    return e(W.event ? W.event(r) : r);
  }
}
function xo(r) {
  if (this.l)
    return this.l[r.type + !0](W.event ? W.event(r) : r);
}
function Ls(r, e, t, i, n, s, o, a, l, u) {
  var c, d, h, f, b, v, w, m, g, x, _, y, k, A, C, D = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & t.__u && (l = !!(32 & t.__u), s = [a = e.__e = t.__e]), (c = W.__b) && c(e);
  e:
    if (typeof D == "function")
      try {
        if (m = e.props, g = (c = D.contextType) && i[c.__c], x = c ? g ? g.props.value : c.__ : i, t.__c ? w = (d = e.__c = t.__c).__ = d.__E : ("prototype" in D && D.prototype.render ? e.__c = d = new D(m, x) : (e.__c = d = new et(m, x), d.constructor = D, d.render = mc), g && g.sub(d), d.props = m, d.state || (d.state = {}), d.context = x, d.__n = i, h = d.__d = !0, d.__h = [], d._sb = []), d.__s == null && (d.__s = d.state), D.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = Ct({}, d.__s)), Ct(d.__s, D.getDerivedStateFromProps(m, d.__s))), f = d.props, b = d.state, d.__v = e, h)
          D.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && m !== f && d.componentWillReceiveProps != null && d.componentWillReceiveProps(m, x), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(m, d.__s, x) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (d.props = m, d.state = d.__s, d.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(S) {
              S && (S.__ = e);
            }), _ = 0; _ < d._sb.length; _++)
              d.__h.push(d._sb[_]);
            d._sb = [], d.__h.length && o.push(d);
            break e;
          }
          d.componentWillUpdate != null && d.componentWillUpdate(m, d.__s, x), d.componentDidUpdate != null && d.__h.push(function() {
            d.componentDidUpdate(f, b, v);
          });
        }
        if (d.context = x, d.props = m, d.__P = r, d.__e = !1, y = W.__r, k = 0, "prototype" in D && D.prototype.render) {
          for (d.state = d.__s, d.__d = !1, y && y(e), c = d.render(d.props, d.state, d.context), A = 0; A < d._sb.length; A++)
            d.__h.push(d._sb[A]);
          d._sb = [];
        } else
          do
            d.__d = !1, y && y(e), c = d.render(d.props, d.state, d.context), d.state = d.__s;
          while (d.__d && ++k < 25);
        d.state = d.__s, d.getChildContext != null && (i = Ct(Ct({}, i), d.getChildContext())), h || d.getSnapshotBeforeUpdate == null || (v = d.getSnapshotBeforeUpdate(f, b)), Ga(r, fn(C = c != null && c.type === j && c.key == null ? c.props.children : c) ? C : [C], e, t, i, n, s, o, a, l, u), d.base = e.__e, e.__u &= -161, d.__h.length && o.push(d), w && (d.__E = d.__ = null);
      } catch (S) {
        e.__v = null, l || s != null ? (e.__e = a, e.__u |= l ? 160 : 32, s[s.indexOf(a)] = null) : (e.__e = t.__e, e.__k = t.__k), W.__e(S, e, t);
      }
    else
      s == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = gc(t.__e, e, t, i, n, s, o, l, u);
  (c = W.diffed) && c(e);
}
function Ya(r, e, t) {
  e.__d = void 0;
  for (var i = 0; i < t.length; i++)
    Ts(t[i], t[++i], t[++i]);
  W.__c && W.__c(e, r), r.some(function(n) {
    try {
      r = n.__h, n.__h = [], r.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      W.__e(s, n.__v);
    }
  });
}
function gc(r, e, t, i, n, s, o, a, l) {
  var u, c, d, h, f, b, v, w = t.props, m = e.props, g = e.type;
  if (g === "svg" && (n = !0), s != null) {
    for (u = 0; u < s.length; u++)
      if ((f = s[u]) && "setAttribute" in f == !!g && (g ? f.localName === g : f.nodeType === 3)) {
        r = f, s[u] = null;
        break;
      }
  }
  if (r == null) {
    if (g === null)
      return document.createTextNode(m);
    r = n ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), s = null, a = !1;
  }
  if (g === null)
    w === m || a && r.data === m || (r.data = m);
  else {
    if (s = s && Ci.call(r.childNodes), w = t.props || fi, !a && s != null)
      for (w = {}, u = 0; u < r.attributes.length; u++)
        w[(f = r.attributes[u]).name] = f.value;
    for (u in w)
      f = w[u], u == "children" || (u == "dangerouslySetInnerHTML" ? d = f : u === "key" || u in m || Bi(r, u, null, f, n));
    for (u in m)
      f = m[u], u == "children" ? h = f : u == "dangerouslySetInnerHTML" ? c = f : u == "value" ? b = f : u == "checked" ? v = f : u === "key" || a && typeof f != "function" || w[u] === f || Bi(r, u, f, w[u], n);
    if (c)
      a || d && (c.__html === d.__html || c.__html === r.innerHTML) || (r.innerHTML = c.__html), e.__k = [];
    else if (d && (r.innerHTML = ""), Ga(r, fn(h) ? h : [h], e, t, i, n && g !== "foreignObject", s, o, s ? s[0] : t.__k && Sr(t, 0), a, l), s != null)
      for (u = s.length; u--; )
        s[u] != null && Ua(s[u]);
    a || (u = "value", b !== void 0 && (b !== r[u] || g === "progress" && !b || g === "option" && b !== w[u]) && Bi(r, u, b, w[u], !1), u = "checked", v !== void 0 && v !== r[u] && Bi(r, u, v, w[u], !1));
  }
  return r;
}
function Ts(r, e, t) {
  try {
    typeof r == "function" ? r(e) : r.current = e;
  } catch (i) {
    W.__e(i, t);
  }
}
function es(r, e, t) {
  var i, n;
  if (W.unmount && W.unmount(r), (i = r.ref) && (i.current && i.current !== r.__e || Ts(i, null, e)), (i = r.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (s) {
        W.__e(s, e);
      }
    i.base = i.__P = null, r.__c = void 0;
  }
  if (i = r.__k)
    for (n = 0; n < i.length; n++)
      i[n] && es(i[n], e, t || typeof r.type != "function");
  t || r.__e == null || Ua(r.__e), r.__ = r.__e = r.__d = void 0;
}
function mc(r, e, t) {
  return this.constructor(r, t);
}
function qt(r, e, t) {
  var i, n, s, o;
  W.__ && W.__(r, e), n = (i = typeof t == "function") ? null : t && t.__k || e.__k, s = [], o = [], Ls(e, r = (!i && t || e).__k = V(j, null, [r]), n || fi, fi, e.ownerSVGElement !== void 0, !i && t ? [t] : n ? null : e.firstChild ? Ci.call(e.childNodes) : null, s, !i && t ? t : n ? n.__e : e.firstChild, i, o), Ya(s, r, o);
}
function Fs(r, e) {
  qt(r, e, Fs);
}
function Ns(r, e, t) {
  var i, n, s, o, a = Ct({}, r.props);
  for (s in r.type && r.type.defaultProps && (o = r.type.defaultProps), e)
    s == "key" ? i = e[s] : s == "ref" ? n = e[s] : a[s] = e[s] === void 0 && o !== void 0 ? o[s] : e[s];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Ci.call(arguments, 2) : t), ni(r.type, a, i || r.key, n || r.ref, null);
}
function ki(r, e) {
  var t = { __c: e = "__cC" + Va++, __: r, Consumer: function(i, n) {
    return i.children(n);
  }, Provider: function(i) {
    var n, s;
    return this.getChildContext || (n = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && n.some(function(a) {
        a.__e = !0, Qn(a);
      });
    }, this.sub = function(o) {
      n.push(o);
      var a = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        n.splice(n.indexOf(o), 1), a && a.call(o);
      };
    }), i.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
Ci = ja.slice, W = { __e: function(r, e, t, i) {
  for (var n, s, o; e = e.__; )
    if ((n = e.__c) && !n.__)
      try {
        if ((s = n.constructor) && s.getDerivedStateFromError != null && (n.setState(s.getDerivedStateFromError(r)), o = n.__d), n.componentDidCatch != null && (n.componentDidCatch(r, i || {}), o = n.__d), o)
          return n.__E = n;
      } catch (a) {
        r = a;
      }
  throw r;
} }, za = 0, qa = function(r) {
  return r != null && r.constructor == null;
}, et.prototype.setState = function(r, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ct({}, this.state), typeof r == "function" && (r = r(Ct({}, t), this.props)), r && Ct(t, r), r != null && this.__v && (e && this._sb.push(e), Qn(this));
}, et.prototype.forceUpdate = function(r) {
  this.__v && (this.__e = !0, r && this.__h.push(r), Qn(this));
}, et.prototype.render = j, Xt = [], $a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Jn = function(r, e) {
  return r.__v.__b - e.__v.__b;
}, ji.__r = 0, Va = 0;
function Ms() {
  return (Ms = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }).apply(this, arguments);
}
var bc = ["context", "children"];
function vc(r) {
  this.getChildContext = function() {
    return r.context;
  };
  var e = r.children, t = function(i, n) {
    if (i == null)
      return {};
    var s, o, a = {}, l = Object.keys(i);
    for (o = 0; o < l.length; o++)
      n.indexOf(s = l[o]) >= 0 || (a[s] = i[s]);
    return a;
  }(r, bc);
  return Ns(e, t);
}
function wc() {
  var r = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(r), this._vdom = V(vc, Ms({}, this._props, { context: r.detail.context }), function e(t, i) {
    if (t.nodeType === 3)
      return t.data;
    if (t.nodeType !== 1)
      return null;
    var n = [], s = {}, o = 0, a = t.attributes, l = t.childNodes;
    for (o = a.length; o--; )
      a[o].name !== "slot" && (s[a[o].name] = a[o].value, s[Ka(a[o].name)] = a[o].value);
    for (o = l.length; o--; ) {
      var u = e(l[o], null), c = l[o].slot;
      c ? s[c] = V(_o, { name: c }, u) : n[o] = u;
    }
    var d = i ? V(_o, null, n) : n;
    return V(i || t.nodeName.toLowerCase(), s, d);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Fs : qt)(this._vdom, this._root);
}
function Ka(r) {
  return r.replace(/-(\w)/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  });
}
function xc(r, e, t) {
  if (this._vdom) {
    var i = {};
    i[r] = t = t ?? void 0, i[Ka(r)] = t, this._vdom = Ns(this._vdom, i), qt(this._vdom, this._root);
  }
}
function _c() {
  qt(this._vdom = null, this._root);
}
function _o(r, e) {
  var t = this;
  return V("slot", Ms({}, r, { ref: function(i) {
    i ? (t.ref = i, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = e;
    }, i.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function yc(r, e, t, i) {
  function n() {
    var s = Reflect.construct(HTMLElement, [], n);
    return s._vdomComponent = r, s._root = i && i.shadow ? s.attachShadow({ mode: i.mode || "open" }) : s, s;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = wc, n.prototype.attributeChangedCallback = xc, n.prototype.disconnectedCallback = _c, t = t || r.observedAttributes || Object.keys(r.propTypes || {}), n.observedAttributes = t, t.forEach(function(s) {
    Object.defineProperty(n.prototype, s, { get: function() {
      return this._vdom.props[s];
    }, set: function(o) {
      this._vdom ? this.attributeChangedCallback(s, null, o) : (this._props || (this._props = {}), this._props[s] = o, this.connectedCallback());
      var a = typeof o;
      o != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(s, o);
    } });
  }), customElements.define(e || r.tagName || r.displayName || r.name, n);
}
var $t, le, kn, yo, Er = 0, Za = [], Pi = [], de = W, Co = de.__b, ko = de.__r, Do = de.diffed, Ao = de.__c, So = de.unmount, Eo = de.__;
function zr(r, e) {
  de.__h && de.__h(le, r, Er || e), Er = 0;
  var t = le.__H || (le.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({ __V: Pi }), t.__[r];
}
function R(r) {
  return Er = 1, Xa(Qa, r);
}
function Xa(r, e, t) {
  var i = zr($t++, 2);
  if (i.t = r, !i.__c && (i.__ = [t ? t(e) : Qa(void 0, e), function(a) {
    var l = i.__N ? i.__N[0] : i.__[0], u = i.t(l, a);
    l !== u && (i.__N = [u, i.__[1]], i.__c.setState({}));
  }], i.__c = le, !le.u)) {
    var n = function(a, l, u) {
      if (!i.__c.__H)
        return !0;
      var c = i.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (c.every(function(h) {
        return !h.__N;
      }))
        return !s || s.call(this, a, l, u);
      var d = !1;
      return c.forEach(function(h) {
        if (h.__N) {
          var f = h.__[0];
          h.__ = h.__N, h.__N = void 0, f !== h.__[0] && (d = !0);
        }
      }), !(!d && i.__c.props === a) && (!s || s.call(this, a, l, u));
    };
    le.u = !0;
    var s = le.shouldComponentUpdate, o = le.componentWillUpdate;
    le.componentWillUpdate = function(a, l, u) {
      if (this.__e) {
        var c = s;
        s = void 0, n(a, l, u), s = c;
      }
      o && o.call(this, a, l, u);
    }, le.shouldComponentUpdate = n;
  }
  return i.__N || i.__;
}
function U(r, e) {
  var t = zr($t++, 3);
  !de.__s && Ps(t.__H, e) && (t.__ = r, t.i = e, le.__H.__h.push(t));
}
function qr(r, e) {
  var t = zr($t++, 4);
  !de.__s && Ps(t.__H, e) && (t.__ = r, t.i = e, le.__h.push(t));
}
function Y(r) {
  return Er = 5, ct(function() {
    return { current: r };
  }, []);
}
function Cc(r, e, t) {
  Er = 6, qr(function() {
    return typeof r == "function" ? (r(e()), function() {
      return r(null);
    }) : r ? (r.current = e(), function() {
      return r.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(r));
}
function ct(r, e) {
  var t = zr($t++, 7);
  return Ps(t.__H, e) ? (t.__V = r(), t.i = e, t.__h = r, t.__V) : t.__;
}
function Ja(r, e) {
  return Er = 8, ct(function() {
    return r;
  }, e);
}
function hn(r) {
  var e = le.context[r.__c], t = zr($t++, 9);
  return t.c = r, e ? (t.__ == null && (t.__ = !0, e.sub(le)), e.props.value) : r.__;
}
function kc(r, e) {
  de.useDebugValue && de.useDebugValue(e ? e(r) : r);
}
function Dc() {
  var r = zr($t++, 11);
  if (!r.__) {
    for (var e = le.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    r.__ = "P" + t[0] + "-" + t[1]++;
  }
  return r.__;
}
function Ac() {
  for (var r; r = Za.shift(); )
    if (r.__P && r.__H)
      try {
        r.__H.__h.forEach(Oi), r.__H.__h.forEach(ts), r.__H.__h = [];
      } catch (e) {
        r.__H.__h = [], de.__e(e, r.__v);
      }
}
de.__b = function(r) {
  le = null, Co && Co(r);
}, de.__ = function(r, e) {
  r && e.__k && e.__k.__m && (r.__m = e.__k.__m), Eo && Eo(r, e);
}, de.__r = function(r) {
  ko && ko(r), $t = 0;
  var e = (le = r.__c).__H;
  e && (kn === le ? (e.__h = [], le.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = Pi, t.__N = t.i = void 0;
  })) : (e.__h.forEach(Oi), e.__h.forEach(ts), e.__h = [], $t = 0)), kn = le;
}, de.diffed = function(r) {
  Do && Do(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (Za.push(e) !== 1 && yo === de.requestAnimationFrame || ((yo = de.requestAnimationFrame) || Sc)(Ac)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== Pi && (t.__ = t.__V), t.i = void 0, t.__V = Pi;
  })), kn = le = null;
}, de.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(Oi), t.__h = t.__h.filter(function(i) {
        return !i.__ || ts(i);
      });
    } catch (i) {
      e.some(function(n) {
        n.__h && (n.__h = []);
      }), e = [], de.__e(i, t.__v);
    }
  }), Ao && Ao(r, e);
}, de.unmount = function(r) {
  So && So(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.forEach(function(i) {
    try {
      Oi(i);
    } catch (n) {
      e = n;
    }
  }), t.__H = void 0, e && de.__e(e, t.__v));
};
var Bo = typeof requestAnimationFrame == "function";
function Sc(r) {
  var e, t = function() {
    clearTimeout(i), Bo && cancelAnimationFrame(e), setTimeout(r);
  }, i = setTimeout(t, 100);
  Bo && (e = requestAnimationFrame(t));
}
function Oi(r) {
  var e = le, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), le = e;
}
function ts(r) {
  var e = le;
  r.__c = r.__(), le = e;
}
function Ps(r, e) {
  return !r || r.length !== e.length || e.some(function(t, i) {
    return t !== r[i];
  });
}
function Qa(r, e) {
  return typeof e == "function" ? e(r) : e;
}
function el(r, e) {
  for (var t in e)
    r[t] = e[t];
  return r;
}
function rs(r, e) {
  for (var t in r)
    if (t !== "__source" && !(t in e))
      return !0;
  for (var i in e)
    if (i !== "__source" && r[i] !== e[i])
      return !0;
  return !1;
}
function is(r, e) {
  this.props = r, this.context = e;
}
function Ec(r, e) {
  function t(n) {
    var s = this.props.ref, o = s == n.ref;
    return !o && s && (s.call ? s(null) : s.current = null), e ? !e(this.props, n) || !o : rs(this.props, n);
  }
  function i(n) {
    return this.shouldComponentUpdate = t, V(r, n);
  }
  return i.displayName = "Memo(" + (r.displayName || r.name) + ")", i.prototype.isReactComponent = !0, i.__f = !0, i;
}
(is.prototype = new et()).isPureReactComponent = !0, is.prototype.shouldComponentUpdate = function(r, e) {
  return rs(this.props, r) || rs(this.state, e);
};
var Lo = W.__b;
W.__b = function(r) {
  r.type && r.type.__f && r.ref && (r.props.ref = r.ref, r.ref = null), Lo && Lo(r);
};
var Bc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Os(r) {
  function e(t) {
    var i = el({}, t);
    return delete i.ref, r(i, t.ref || null);
  }
  return e.$$typeof = Bc, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (r.displayName || r.name) + ")", e;
}
var To = function(r, e) {
  return r == null ? null : kt(kt(r).map(e));
}, tl = { map: To, forEach: To, count: function(r) {
  return r ? kt(r).length : 0;
}, only: function(r) {
  var e = kt(r);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: kt }, Lc = W.__e;
W.__e = function(r, e, t, i) {
  if (r.then) {
    for (var n, s = e; s = s.__; )
      if ((n = s.__c) && n.__c)
        return e.__e == null && (e.__e = t.__e, e.__k = t.__k), n.__c(r, e);
  }
  Lc(r, e, t, i);
};
var Fo = W.unmount;
function rl(r, e, t) {
  return r && (r.__c && r.__c.__H && (r.__c.__H.__.forEach(function(i) {
    typeof i.__c == "function" && i.__c();
  }), r.__c.__H = null), (r = el({}, r)).__c != null && (r.__c.__P === t && (r.__c.__P = e), r.__c = null), r.__k = r.__k && r.__k.map(function(i) {
    return rl(i, e, t);
  })), r;
}
function il(r, e, t) {
  return r && t && (r.__v = null, r.__k = r.__k && r.__k.map(function(i) {
    return il(i, e, t);
  }), r.__c && r.__c.__P === e && (r.__e && t.appendChild(r.__e), r.__c.__e = !0, r.__c.__P = t)), r;
}
function Ii() {
  this.__u = 0, this.t = null, this.__b = null;
}
function nl(r) {
  var e = r.__.__c;
  return e && e.__a && e.__a(r);
}
function Tc(r) {
  var e, t, i;
  function n(s) {
    if (e || (e = r()).then(function(o) {
      t = o.default || o;
    }, function(o) {
      i = o;
    }), i)
      throw i;
    if (!t)
      throw e;
    return V(t, s);
  }
  return n.displayName = "Lazy", n.__f = !0, n;
}
function Qr() {
  this.u = null, this.o = null;
}
W.unmount = function(r) {
  var e = r.__c;
  e && e.__R && e.__R(), e && 32 & r.__u && (r.type = null), Fo && Fo(r);
}, (Ii.prototype = new et()).__c = function(r, e) {
  var t = e.__c, i = this;
  i.t == null && (i.t = []), i.t.push(t);
  var n = nl(i.__v), s = !1, o = function() {
    s || (s = !0, t.__R = null, n ? n(a) : a());
  };
  t.__R = o;
  var a = function() {
    if (!--i.__u) {
      if (i.state.__a) {
        var l = i.state.__a;
        i.__v.__k[0] = il(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (i.setState({ __a: i.__b = null }); u = i.t.pop(); )
        u.forceUpdate();
    }
  };
  i.__u++ || 32 & e.__u || i.setState({ __a: i.__b = i.__v.__k[0] }), r.then(o, o);
}, Ii.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ii.prototype.render = function(r, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), i = this.__v.__k[0].__c;
      this.__v.__k[0] = rl(this.__b, t, i.__O = i.__P);
    }
    this.__b = null;
  }
  var n = e.__a && V(j, null, r.fallback);
  return n && (n.__u &= -33), [V(j, null, e.__a ? null : r.children), n];
};
var No = function(r, e, t) {
  if (++t[1] === t[0] && r.o.delete(e), r.props.revealOrder && (r.props.revealOrder[0] !== "t" || !r.o.size))
    for (t = r.u; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      r.u = t = t[2];
    }
};
function Fc(r) {
  return this.getChildContext = function() {
    return r.context;
  }, r.children;
}
function Nc(r) {
  var e = this, t = r.i;
  e.componentWillUnmount = function() {
    qt(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== t && e.componentWillUnmount(), e.l || (e.i = t, e.l = { nodeType: 1, parentNode: t, childNodes: [], appendChild: function(i) {
    this.childNodes.push(i), e.i.appendChild(i);
  }, insertBefore: function(i, n) {
    this.childNodes.push(i), e.i.appendChild(i);
  }, removeChild: function(i) {
    this.childNodes.splice(this.childNodes.indexOf(i) >>> 1, 1), e.i.removeChild(i);
  } }), qt(V(Fc, { context: e.context }, r.__v), e.l);
}
function Mc(r, e) {
  var t = V(Nc, { __v: r, i: e });
  return t.containerInfo = e, t;
}
(Qr.prototype = new et()).__a = function(r) {
  var e = this, t = nl(e.__v), i = e.o.get(r);
  return i[0]++, function(n) {
    var s = function() {
      e.props.revealOrder ? (i.push(n), No(e, r, i)) : n();
    };
    t ? t(s) : s();
  };
}, Qr.prototype.render = function(r) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = kt(r.children);
  r.revealOrder && r.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; )
    this.o.set(e[t], this.u = [1, 0, this.u]);
  return r.children;
}, Qr.prototype.componentDidUpdate = Qr.prototype.componentDidMount = function() {
  var r = this;
  this.o.forEach(function(e, t) {
    No(r, t, e);
  });
};
var sl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Pc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Oc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ic = /[A-Z0-9]/g, Rc = typeof document < "u", zc = function(r) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(r);
};
function qc(r, e, t) {
  return e.__k == null && (e.textContent = ""), qt(r, e), typeof t == "function" && t(), r ? r.__c : null;
}
function $c(r, e, t) {
  return Fs(r, e), typeof t == "function" && t(), r ? r.__c : null;
}
et.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(r) {
  Object.defineProperty(et.prototype, r, { configurable: !0, get: function() {
    return this["UNSAFE_" + r];
  }, set: function(e) {
    Object.defineProperty(this, r, { configurable: !0, writable: !0, value: e });
  } });
});
var Mo = W.event;
function Vc() {
}
function jc() {
  return this.cancelBubble;
}
function Uc() {
  return this.defaultPrevented;
}
W.event = function(r) {
  return Mo && (r = Mo(r)), r.persist = Vc, r.isPropagationStopped = jc, r.isDefaultPrevented = Uc, r.nativeEvent = r;
};
var Is, Hc = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Po = W.vnode;
W.vnode = function(r) {
  typeof r.type == "string" && function(e) {
    var t = e.props, i = e.type, n = {};
    for (var s in t) {
      var o = t[s];
      if (!(s === "value" && "defaultValue" in t && o == null || Rc && s === "children" && i === "noscript" || s === "class" || s === "className")) {
        var a = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : a === "translate" && o === "no" ? o = !1 : a === "ondoubleclick" ? s = "ondblclick" : a !== "onchange" || i !== "input" && i !== "textarea" || zc(t.type) ? a === "onfocus" ? s = "onfocusin" : a === "onblur" ? s = "onfocusout" : Oc.test(s) ? s = a : i.indexOf("-") === -1 && Pc.test(s) ? s = s.replace(Ic, "-$&").toLowerCase() : o === null && (o = void 0) : a = s = "oninput", a === "oninput" && n[s = a] && (s = "oninputCapture"), n[s] = o;
      }
    }
    i == "select" && n.multiple && Array.isArray(n.value) && (n.value = kt(t.children).forEach(function(l) {
      l.props.selected = n.value.indexOf(l.props.value) != -1;
    })), i == "select" && n.defaultValue != null && (n.value = kt(t.children).forEach(function(l) {
      l.props.selected = n.multiple ? n.defaultValue.indexOf(l.props.value) != -1 : n.defaultValue == l.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Hc)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), e.props = n;
  }(r), r.$$typeof = sl, Po && Po(r);
};
var Oo = W.__r;
W.__r = function(r) {
  Oo && Oo(r), Is = r.__c;
};
var Io = W.diffed;
W.diffed = function(r) {
  Io && Io(r);
  var e = r.props, t = r.__e;
  t != null && r.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value), Is = null;
};
var Gc = { ReactCurrentDispatcher: { current: { readContext: function(r) {
  return Is.__n[r.__c].props.value;
} } } };
function Wc(r) {
  return V.bind(null, r);
}
function Vt(r) {
  return !!r && r.$$typeof === sl;
}
function Yc(r) {
  return Vt(r) && r.type === j;
}
function ol(r) {
  return Vt(r) ? Ns.apply(null, arguments) : r;
}
function Kc(r) {
  return !!r.__k && (qt(null, r), !0);
}
function Zc(r) {
  return r && (r.base || r.nodeType === 1 && r) || null;
}
var Xc = function(r, e) {
  return r(e);
}, Jc = function(r, e) {
  return r(e);
}, Qc = j;
function al(r) {
  r();
}
function ed(r) {
  return r;
}
function td() {
  return [!1, al];
}
var rd = qr, id = Vt;
function nd(r, e) {
  var t = e(), i = R({ h: { __: t, v: e } }), n = i[0].h, s = i[1];
  return qr(function() {
    n.__ = t, n.v = e, Dn(n) && s({ h: n });
  }, [r, t, e]), U(function() {
    return Dn(n) && s({ h: n }), r(function() {
      Dn(n) && s({ h: n });
    });
  }, [r]), t;
}
function Dn(r) {
  var e, t, i = r.v, n = r.__;
  try {
    var s = i();
    return !((e = n) === (t = s) && (e !== 0 || 1 / e == 1 / t) || e != e && t != t);
  } catch {
    return !0;
  }
}
var we = { useState: R, useId: Dc, useReducer: Xa, useEffect: U, useLayoutEffect: qr, useInsertionEffect: rd, useTransition: td, useDeferredValue: ed, useSyncExternalStore: nd, startTransition: al, useRef: Y, useImperativeHandle: Cc, useMemo: ct, useCallback: Ja, useContext: hn, useDebugValue: kc, version: "17.0.2", Children: tl, render: qc, hydrate: $c, unmountComponentAtNode: Kc, createPortal: Mc, createElement: V, createContext: ki, createFactory: Wc, cloneElement: ol, createRef: pc, Fragment: j, isValidElement: Vt, isElement: id, isFragment: Yc, findDOMNode: Zc, Component: et, PureComponent: is, memo: Ec, forwardRef: Os, flushSync: Jc, unstable_batchedUpdates: Xc, StrictMode: Qc, Suspense: Ii, SuspenseList: Qr, lazy: Tc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Gc }, An = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ll(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var sd = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
const od = /* @__PURE__ */ ll(sd);
var ad = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ro(r) {
  var e = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, t = r.match(/<\/?([^\s]+?)[/\s>]/);
  if (t && (e.name = t[1], (od[t[1]] || r.charAt(r.length - 2) === "/") && (e.voidElement = !0), e.name.startsWith("!--"))) {
    var i = r.indexOf("-->");
    return { type: "comment", comment: i !== -1 ? r.slice(4, i) : "" };
  }
  for (var n = new RegExp(ad), s = null; (s = n.exec(r)) !== null; )
    if (s[0].trim())
      if (s[1]) {
        var o = s[1].trim(), a = [o, ""];
        o.indexOf("=") > -1 && (a = o.split("=")), e.attrs[a[0]] = a[1], n.lastIndex--;
      } else
        s[2] && (e.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
  return e;
}
var ld = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, ud = /^\s*$/, cd = /* @__PURE__ */ Object.create(null);
function ul(r, e) {
  switch (e.type) {
    case "text":
      return r + e.content;
    case "tag":
      return r += "<" + e.name + (e.attrs ? function(t) {
        var i = [];
        for (var n in t)
          i.push(n + '="' + t[n] + '"');
        return i.length ? " " + i.join(" ") : "";
      }(e.attrs) : "") + (e.voidElement ? "/>" : ">"), e.voidElement ? r : r + e.children.reduce(ul, "") + "</" + e.name + ">";
    case "comment":
      return r + "<!--" + e.comment + "-->";
  }
}
var dd = { parse: function(r, e) {
  e || (e = {}), e.components || (e.components = cd);
  var t, i = [], n = [], s = -1, o = !1;
  if (r.indexOf("<") !== 0) {
    var a = r.indexOf("<");
    i.push({ type: "text", content: a === -1 ? r : r.substring(0, a) });
  }
  return r.replace(ld, function(l, u) {
    if (o) {
      if (l !== "</" + t.name + ">")
        return;
      o = !1;
    }
    var c, d = l.charAt(1) !== "/", h = l.startsWith("<!--"), f = u + l.length, b = r.charAt(f);
    if (h) {
      var v = Ro(l);
      return s < 0 ? (i.push(v), i) : ((c = n[s]).children.push(v), i);
    }
    if (d && (s++, (t = Ro(l)).type === "tag" && e.components[t.name] && (t.type = "component", o = !0), t.voidElement || o || !b || b === "<" || t.children.push({ type: "text", content: r.slice(f, r.indexOf("<", f)) }), s === 0 && i.push(t), (c = n[s - 1]) && c.children.push(t), n[s] = t), (!d || t.voidElement) && (s > -1 && (t.voidElement || t.name === l.slice(2, -1)) && (s--, t = s === -1 ? i : n[s]), !o && b !== "<" && b)) {
      c = s === -1 ? i : n[s].children;
      var w = r.indexOf("<", f), m = r.slice(f, w === -1 ? void 0 : w);
      ud.test(m) && (m = " "), (w > -1 && s + c.length >= 0 || m !== " ") && c.push({ type: "text", content: m });
    }
  }), i;
}, stringify: function(r) {
  return r.reduce(function(e, t) {
    return e + ul("", t);
  }, "");
} };
const Ri = (...r) => {
  console != null && console.warn && (Je(r[0]) && (r[0] = `react-i18next:: ${r[0]}`), console.warn(...r));
}, zo = {}, Ui = (...r) => {
  Je(r[0]) && zo[r[0]] || (Je(r[0]) && (zo[r[0]] = /* @__PURE__ */ new Date()), Ri(...r));
}, cl = (r, e) => () => {
  if (r.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        r.off("initialized", t);
      }, 0), e();
    };
    r.on("initialized", t);
  }
}, qo = (r, e, t) => {
  r.loadNamespaces(e, cl(r, t));
}, $o = (r, e, t, i) => {
  Je(t) && (t = [t]), t.forEach((n) => {
    r.options.ns.indexOf(n) < 0 && r.options.ns.push(n);
  }), r.loadLanguages(e, cl(r, i));
}, pd = (r, e, t = {}) => !e.languages || !e.languages.length ? (Ui("i18n.languages were undefined or empty", e.languages), !0) : e.hasLoadedNamespace(r, {
  lng: t.lng,
  precheck: (i, n) => {
    var s;
    if (((s = t.bindI18n) == null ? void 0 : s.indexOf("languageChanging")) > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !n(i.isLanguageChangingTo, r))
      return !1;
  }
}), Je = (r) => typeof r == "string", mr = (r) => typeof r == "object" && r !== null, fd = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, hd = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, gd = (r) => hd[r], md = (r) => r.replace(fd, gd);
let ns = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: md
};
const bd = (r = {}) => {
  ns = {
    ...ns,
    ...r
  };
}, dl = () => ns;
let pl;
const vd = (r) => {
  pl = r;
}, jt = () => pl, Sn = (r, e) => {
  var i;
  if (!r)
    return !1;
  const t = ((i = r.props) == null ? void 0 : i.children) ?? r.children;
  return e ? t.length > 0 : !!t;
}, En = (r) => {
  var t, i;
  if (!r)
    return [];
  const e = ((t = r.props) == null ? void 0 : t.children) ?? r.children;
  return (i = r.props) != null && i.i18nIsDynamicList ? br(e) : e;
}, wd = (r) => Array.isArray(r) && r.every(Vt), br = (r) => Array.isArray(r) ? r : [r], xd = (r, e) => {
  const t = {
    ...e
  };
  return t.props = Object.assign(r.props, e.props), t;
}, fl = (r, e) => {
  if (!r)
    return "";
  let t = "";
  const i = br(r), n = e != null && e.transSupportBasicHtmlNodes ? e.transKeepBasicHtmlNodesFor ?? [] : [];
  return i.forEach((s, o) => {
    if (Je(s))
      t += `${s}`;
    else if (Vt(s)) {
      const {
        props: a,
        type: l
      } = s, u = Object.keys(a).length, c = n.indexOf(l) > -1, d = a.children;
      if (!d && c && !u)
        t += `<${l}/>`;
      else if (!d && (!c || u) || a.i18nIsDynamicList)
        t += `<${o}></${o}>`;
      else if (c && u === 1 && Je(d))
        t += `<${l}>${d}</${l}>`;
      else {
        const h = fl(d, e);
        t += `<${o}>${h}</${o}>`;
      }
    } else if (s === null)
      Ri("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (mr(s)) {
      const {
        format: a,
        ...l
      } = s, u = Object.keys(l);
      if (u.length === 1) {
        const c = a ? `${u[0]}, ${a}` : u[0];
        t += `{{${c}}}`;
      } else
        Ri("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", s);
    } else
      Ri("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", s);
  }), t;
}, _d = (r, e, t, i, n, s) => {
  if (e === "")
    return [];
  const o = i.transKeepBasicHtmlNodesFor || [], a = e && new RegExp(o.map((w) => `<${w}`).join("|")).test(e);
  if (!r && !a && !s)
    return [e];
  const l = {}, u = (w) => {
    br(w).forEach((g) => {
      Je(g) || (Sn(g) ? u(En(g)) : mr(g) && !Vt(g) && Object.assign(l, g));
    });
  };
  u(r);
  const c = dd.parse(`<0>${e}</0>`), d = {
    ...l,
    ...n
  }, h = (w, m, g) => {
    var y;
    const x = En(w), _ = b(x, m.children, g);
    return wd(x) && _.length === 0 || (y = w.props) != null && y.i18nIsDynamicList ? x : _;
  }, f = (w, m, g, x, _) => {
    w.dummy ? (w.children = m, g.push(ol(w, {
      key: x
    }, _ ? void 0 : m))) : g.push(...tl.map([w], (y) => {
      const k = {
        ...y.props
      };
      return delete k.i18nIsDynamicList, V(y.type, {
        ...k,
        key: x,
        ref: y.ref
      }, _ ? null : m);
    }));
  }, b = (w, m, g) => {
    const x = br(w);
    return br(m).reduce((y, k, A) => {
      var D, S;
      const C = ((S = (D = k.children) == null ? void 0 : D[0]) == null ? void 0 : S.content) && t.services.interpolator.interpolate(k.children[0].content, d, t.language);
      if (k.type === "tag") {
        let B = x[parseInt(k.name, 10)];
        g.length === 1 && !B && (B = g[0][k.name]), B || (B = {});
        const E = Object.keys(k.attrs).length !== 0 ? xd({
          props: k.attrs
        }, B) : B, T = Vt(E), M = T && Sn(k, !0) && !k.voidElement, F = a && mr(E) && E.dummy && !T, $ = mr(r) && Object.hasOwnProperty.call(r, k.name);
        if (Je(E)) {
          const I = t.services.interpolator.interpolate(E, d, t.language);
          y.push(I);
        } else if (Sn(E) || M) {
          const I = h(E, k, g);
          f(E, I, y, A);
        } else if (F) {
          const I = b(x, k.children, g);
          f(E, I, y, A);
        } else if (Number.isNaN(parseFloat(k.name)))
          if ($) {
            const I = h(E, k, g);
            f(E, I, y, A, k.voidElement);
          } else if (i.transSupportBasicHtmlNodes && o.indexOf(k.name) > -1)
            if (k.voidElement)
              y.push(V(k.name, {
                key: `${k.name}-${A}`
              }));
            else {
              const I = b(x, k.children, g);
              y.push(V(k.name, {
                key: `${k.name}-${A}`
              }, I));
            }
          else if (k.voidElement)
            y.push(`<${k.name} />`);
          else {
            const I = b(x, k.children, g);
            y.push(`<${k.name}>${I}</${k.name}>`);
          }
        else if (mr(E) && !T) {
          const I = k.children[0] ? C : null;
          I && y.push(I);
        } else
          f(E, C, y, A, k.children.length !== 1 || !C);
      } else if (k.type === "text") {
        const B = i.transWrapTextNodes, E = s ? i.unescape(t.services.interpolator.interpolate(k.content, d, t.language)) : t.services.interpolator.interpolate(k.content, d, t.language);
        B ? y.push(V(B, {
          key: `${k.name}-${A}`
        }, E)) : y.push(E);
      }
      return y;
    }, []);
  }, v = b([{
    dummy: !0,
    children: r || []
  }], c, br(r || []));
  return En(v[0]);
};
function yd({
  children: r,
  count: e,
  parent: t,
  i18nKey: i,
  context: n,
  tOptions: s = {},
  values: o,
  defaults: a,
  components: l,
  ns: u,
  i18n: c,
  t: d,
  shouldUnescape: h,
  ...f
}) {
  var B, E, T, M, F, $;
  const b = c || jt();
  if (!b)
    return Ui("You will need to pass in an i18next instance by using i18nextReactModule"), r;
  const v = d || b.t.bind(b) || ((I) => I), w = {
    ...dl(),
    ...(B = b.options) == null ? void 0 : B.react
  };
  let m = u || v.ns || ((E = b.options) == null ? void 0 : E.defaultNS);
  m = Je(m) ? [m] : m || ["translation"];
  const g = fl(r, w), x = a || g || w.transEmptyNodeValue || i, {
    hashTransKey: _
  } = w, y = i || (_ ? _(g || x) : g || x);
  (M = (T = b.options) == null ? void 0 : T.interpolation) != null && M.defaultVariables && (o = o && Object.keys(o).length > 0 ? {
    ...o,
    ...b.options.interpolation.defaultVariables
  } : {
    ...b.options.interpolation.defaultVariables
  });
  const k = o || e !== void 0 && !(($ = (F = b.options) == null ? void 0 : F.interpolation) != null && $.alwaysFormat) || !r ? s.interpolation : {
    interpolation: {
      ...s.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, A = {
    ...s,
    context: n || s.context,
    count: e,
    ...o,
    ...k,
    defaultValue: x,
    ns: m
  }, C = y ? v(y, A) : x;
  l && Object.keys(l).forEach((I) => {
    const O = l[I];
    if (typeof O.type == "function" || !O.props || !O.props.children || C.indexOf(`${I}/>`) < 0 && C.indexOf(`${I} />`) < 0)
      return;
    function P() {
      return V(j, null, O);
    }
    l[I] = V(P);
  });
  const D = _d(l || r, C, b, w, A, h), S = t ?? w.defaultTransParent;
  return S ? V(S, f, D) : D;
}
const Cd = {
  type: "3rdParty",
  init(r) {
    bd(r.options.react), vd(r);
  }
}, hl = ki();
class kd {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function Vo({
  children: r,
  count: e,
  parent: t,
  i18nKey: i,
  context: n,
  tOptions: s = {},
  values: o,
  defaults: a,
  components: l,
  ns: u,
  i18n: c,
  t: d,
  shouldUnescape: h,
  ...f
}) {
  var g;
  const {
    i18n: b,
    defaultNS: v
  } = hn(hl) || {}, w = c || b || jt(), m = d || (w == null ? void 0 : w.t.bind(w));
  return yd({
    children: r,
    count: e,
    parent: t,
    i18nKey: i,
    context: n,
    tOptions: s,
    values: o,
    defaults: a,
    components: l,
    ns: u || (m == null ? void 0 : m.ns) || v || ((g = w == null ? void 0 : w.options) == null ? void 0 : g.defaultNS),
    i18n: w,
    t: d,
    shouldUnescape: h,
    ...f
  });
}
const Dd = (r, e) => {
  const t = Y();
  return U(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
}, gl = (r, e, t, i) => r.getFixedT(e, t, i), Ad = (r, e, t, i) => Ja(gl(r, e, t, i), [r, e, t, i]), te = (r, e = {}) => {
  var _, y, k, A;
  const {
    i18n: t
  } = e, {
    i18n: i,
    defaultNS: n
  } = hn(hl) || {}, s = t || i || jt();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new kd()), !s) {
    Ui("You will need to pass in an i18next instance by using initReactI18next");
    const C = (S, B) => Je(B) ? B : mr(B) && Je(B.defaultValue) ? B.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, D = [C, {}, !1];
    return D.t = C, D.i18n = {}, D.ready = !1, D;
  }
  (_ = s.options.react) != null && _.wait && Ui("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...dl(),
    ...s.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: l
  } = o;
  let u = r || n || ((y = s.options) == null ? void 0 : y.defaultNS);
  u = Je(u) ? [u] : u || ["translation"], (A = (k = s.reportNamespaces).addUsedNamespaces) == null || A.call(k, u);
  const c = (s.isInitialized || s.initializedStoreOnce) && u.every((C) => pd(C, s, o)), d = Ad(s, e.lng || null, o.nsMode === "fallback" ? u : u[0], l), h = () => d, f = () => gl(s, e.lng || null, o.nsMode === "fallback" ? u : u[0], l), [b, v] = R(h);
  let w = u.join();
  e.lng && (w = `${e.lng}${w}`);
  const m = Dd(w), g = Y(!0);
  U(() => {
    const {
      bindI18n: C,
      bindI18nStore: D
    } = o;
    g.current = !0, !c && !a && (e.lng ? $o(s, e.lng, u, () => {
      g.current && v(f);
    }) : qo(s, u, () => {
      g.current && v(f);
    })), c && m && m !== w && g.current && v(f);
    const S = () => {
      g.current && v(f);
    };
    return C && (s == null || s.on(C, S)), D && (s == null || s.store.on(D, S)), () => {
      g.current = !1, s && (C == null || C.split(" ").forEach((B) => s.off(B, S))), D && s && D.split(" ").forEach((B) => s.store.off(B, S));
    };
  }, [s, w]), U(() => {
    g.current && c && v(h);
  }, [s, l, c]);
  const x = [b, s, c];
  if (x.t = b, x.i18n = s, x.ready = c, c || !c && !a)
    return x;
  throw new Promise((C) => {
    e.lng ? $o(s, e.lng, u, () => C()) : qo(s, u, () => C());
  });
};
var Sd = Symbol.for("preact-signals");
function gn() {
  if (It > 1)
    It--;
  else {
    for (var r, e = !1; si !== void 0; ) {
      var t = si;
      for (si = void 0, ss++; t !== void 0; ) {
        var i = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && bl(t))
          try {
            t.c();
          } catch (n) {
            e || (r = n, e = !0);
          }
        t = i;
      }
    }
    if (ss = 0, It--, e)
      throw r;
  }
}
function Ed(r) {
  if (It > 0)
    return r();
  It++;
  try {
    return r();
  } finally {
    gn();
  }
}
var se = void 0, si = void 0, It = 0, ss = 0, Hi = 0;
function ml(r) {
  if (se !== void 0) {
    var e = r.n;
    if (e === void 0 || e.t !== se)
      return e = { i: 0, S: r, p: se.s, n: void 0, t: se, e: void 0, x: void 0, r: e }, se.s !== void 0 && (se.s.n = e), se.s = e, r.n = e, 32 & se.f && r.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = se.s, e.n = void 0, se.s.n = e, se.s = e), e;
  }
}
function ye(r) {
  this.v = r, this.i = 0, this.n = void 0, this.t = void 0;
}
ye.prototype.brand = Sd;
ye.prototype.h = function() {
  return !0;
};
ye.prototype.S = function(r) {
  this.t !== r && r.e === void 0 && (r.x = this.t, this.t !== void 0 && (this.t.e = r), this.t = r);
};
ye.prototype.U = function(r) {
  if (this.t !== void 0) {
    var e = r.e, t = r.x;
    e !== void 0 && (e.x = t, r.e = void 0), t !== void 0 && (t.e = e, r.x = void 0), r === this.t && (this.t = t);
  }
};
ye.prototype.subscribe = function(r) {
  var e = this;
  return zs(function() {
    var t = e.value, i = se;
    se = void 0;
    try {
      r(t);
    } finally {
      se = i;
    }
  });
};
ye.prototype.valueOf = function() {
  return this.value;
};
ye.prototype.toString = function() {
  return this.value + "";
};
ye.prototype.toJSON = function() {
  return this.value;
};
ye.prototype.peek = function() {
  var r = se;
  se = void 0;
  try {
    return this.value;
  } finally {
    se = r;
  }
};
Object.defineProperty(ye.prototype, "value", { get: function() {
  var r = ml(this);
  return r !== void 0 && (r.i = this.i), this.v;
}, set: function(r) {
  if (r !== this.v) {
    if (ss > 100)
      throw new Error("Cycle detected");
    this.v = r, this.i++, Hi++, It++;
    try {
      for (var e = this.t; e !== void 0; e = e.x)
        e.t.N();
    } finally {
      gn();
    }
  }
} });
function Ae(r) {
  return new ye(r);
}
function bl(r) {
  for (var e = r.s; e !== void 0; e = e.n)
    if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
      return !0;
  return !1;
}
function vl(r) {
  for (var e = r.s; e !== void 0; e = e.n) {
    var t = e.S.n;
    if (t !== void 0 && (e.r = t), e.S.n = e, e.i = -1, e.n === void 0) {
      r.s = e;
      break;
    }
  }
}
function wl(r) {
  for (var e = r.s, t = void 0; e !== void 0; ) {
    var i = e.p;
    e.i === -1 ? (e.S.U(e), i !== void 0 && (i.n = e.n), e.n !== void 0 && (e.n.p = i)) : t = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = i;
  }
  r.s = t;
}
function $r(r) {
  ye.call(this, void 0), this.x = r, this.s = void 0, this.g = Hi - 1, this.f = 4;
}
($r.prototype = new ye()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Hi))
    return !0;
  if (this.g = Hi, this.f |= 1, this.i > 0 && !bl(this))
    return this.f &= -2, !0;
  var r = se;
  try {
    vl(this), se = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return se = r, wl(this), this.f &= -2, !0;
};
$r.prototype.S = function(r) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.S(e);
  }
  ye.prototype.S.call(this, r);
};
$r.prototype.U = function(r) {
  if (this.t !== void 0 && (ye.prototype.U.call(this, r), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.U(e);
  }
};
$r.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var r = this.t; r !== void 0; r = r.x)
      r.t.N();
  }
};
Object.defineProperty($r.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var r = ml(this);
  if (this.h(), r !== void 0 && (r.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function Bd(r) {
  return new $r(r);
}
function xl(r) {
  var e = r.u;
  if (r.u = void 0, typeof e == "function") {
    It++;
    var t = se;
    se = void 0;
    try {
      e();
    } catch (i) {
      throw r.f &= -2, r.f |= 8, Rs(r), i;
    } finally {
      se = t, gn();
    }
  }
}
function Rs(r) {
  for (var e = r.s; e !== void 0; e = e.n)
    e.S.U(e);
  r.x = void 0, r.s = void 0, xl(r);
}
function Ld(r) {
  if (se !== this)
    throw new Error("Out-of-order effect");
  wl(this), se = r, this.f &= -2, 8 & this.f && Rs(this), gn();
}
function Di(r) {
  this.x = r, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
Di.prototype.c = function() {
  var r = this.S();
  try {
    if (8 & this.f || this.x === void 0)
      return;
    var e = this.x();
    typeof e == "function" && (this.u = e);
  } finally {
    r();
  }
};
Di.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, xl(this), vl(this), It++;
  var r = se;
  return se = this, Ld.bind(this, r);
};
Di.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = si, si = this);
};
Di.prototype.d = function() {
  this.f |= 8, 1 & this.f || Rs(this);
};
function zs(r) {
  var e = new Di(r);
  try {
    e.c();
  } catch (t) {
    throw e.d(), t;
  }
  return e.d.bind(e);
}
var Bn;
function Vr(r, e) {
  W[r] = e.bind(null, W[r] || function() {
  });
}
function Gi(r) {
  Bn && Bn(), Bn = r && r.S();
}
function _l(r) {
  var e = this, t = r.data, i = Fd(t);
  i.value = t;
  var n = ct(function() {
    for (var s = e.__v; s = s.__; )
      if (s.__c) {
        s.__c.__$f |= 4;
        break;
      }
    return e.__$u.c = function() {
      var o, a = e.__$u.S(), l = n.value;
      a(), qa(l) || ((o = e.base) == null ? void 0 : o.nodeType) !== 3 ? (e.__$f |= 1, e.setState({})) : e.base.data = l;
    }, Bd(function() {
      var o = i.value.value;
      return o === 0 ? 0 : o === !0 ? "" : o || "";
    });
  }, []);
  return n.value;
}
_l.displayName = "_st";
Object.defineProperties(ye.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: _l }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
Vr("__b", function(r, e) {
  if (typeof e.type == "string") {
    var t, i = e.props;
    for (var n in i)
      if (n !== "children") {
        var s = i[n];
        s instanceof ye && (t || (e.__np = t = {}), t[n] = s, i[n] = s.peek());
      }
  }
  r(e);
});
Vr("__r", function(r, e) {
  Gi();
  var t, i = e.__c;
  i && (i.__$f &= -2, (t = i.__$u) === void 0 && (i.__$u = t = function(n) {
    var s;
    return zs(function() {
      s = this;
    }), s.c = function() {
      i.__$f |= 1, i.setState({});
    }, s;
  }())), Gi(t), r(e);
});
Vr("__e", function(r, e, t, i) {
  Gi(), r(e, t, i);
});
Vr("diffed", function(r, e) {
  Gi();
  var t;
  if (typeof e.type == "string" && (t = e.__e)) {
    var i = e.__np, n = e.props;
    if (i) {
      var s = t.U;
      if (s)
        for (var o in s) {
          var a = s[o];
          a !== void 0 && !(o in i) && (a.d(), s[o] = void 0);
        }
      else
        t.U = s = {};
      for (var l in i) {
        var u = s[l], c = i[l];
        u === void 0 ? (u = Td(t, l, c, n), s[l] = u) : u.o(c, n);
      }
    }
  }
  r(e);
});
function Td(r, e, t, i) {
  var n = e in r && r.ownerSVGElement === void 0, s = Ae(t);
  return { o: function(o, a) {
    s.value = o, i = a;
  }, d: zs(function() {
    var o = s.value.value;
    i[e] !== o && (i[e] = o, n ? r[e] = o : o ? r.setAttribute(e, o) : r.removeAttribute(e));
  }) };
}
Vr("unmount", function(r, e) {
  if (typeof e.type == "string") {
    var t = e.__e;
    if (t) {
      var i = t.U;
      if (i) {
        t.U = void 0;
        for (var n in i) {
          var s = i[n];
          s && s.d();
        }
      }
    }
  } else {
    var o = e.__c;
    if (o) {
      var a = o.__$u;
      a && (o.__$u = void 0, a.d());
    }
  }
  r(e);
});
Vr("__h", function(r, e, t, i) {
  (i < 3 || i === 9) && (e.__$f |= 2), r(e, t, i);
});
et.prototype.shouldComponentUpdate = function(r, e) {
  var t = this.__$u;
  if (!(t && t.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
    return !0;
  for (var i in e)
    return !0;
  for (var n in r)
    if (n !== "__source" && r[n] !== this.props[n])
      return !0;
  for (var s in this.props)
    if (!(s in r))
      return !0;
  return !1;
};
function Fd(r) {
  return ct(function() {
    return Ae(r);
  }, []);
}
const os = Ae(!1), Z = Ae(null), xr = Ae([]), hr = Ae(!1), Ee = Ae(!1), _r = Ae([]), Qe = Ae(!1), mn = Ae(null), ke = Ae(null), Wi = Ae(!1), bn = Ae(!0), _t = Ae(!1), Nd = () => {
  Ed(() => {
    Z.value = null, xr.value = [], hr.value = !1, Ee.value = !1, _r.value = [], Qe.value = !1, mn.value = null, ke.value = null, Wi.value = !1, bn.value = !0, _t.value = !1;
  });
}, qs = "bm_currentBike", Md = "v2", Ln = 2, as = "https://cdn.bikematrix.io", vn = "https://imagestore.bikematrix.io", Pd = "1.0.2", jo = {
  // Shopify specific
  isShopify: !1,
  skuField: "sku",
  // Bike Selector
  apiUrl: "https://api.bikematrix.io/proxy/v3/",
  apiKey: "",
  apiToken: "",
  currentCollectionHandle: "",
  categories: [],
  collections: [],
  pageType: "index",
  showHomePageCollection: !1,
  showSearchPageCollection: !1,
  designMode: !1,
  bikeSelectorBrands: "",
  productsCollections: {},
  isHomePage: !1,
  isSearchPage: !1,
  // Compatible List Config
  products: {},
  collectionUrl: "",
  compatiblityListCurrentPage: 0,
  showCompatibleList: !0,
  delayCompatibleListInitialization: !1,
  // Product Result Config
  sku: "",
  productCollections: [],
  logLevel: "none",
  // Virtual Workshop
  virtualWorkshop: !0,
  // Internal shop link
  internalLink: "",
  // Browse Compatibility settings
  showBrowseCategoryButtons: !0,
  browseCompatibilityUrl: ""
}, Od = {
  ß: "ss",
  Æ: "AE",
  æ: "ae",
  Œ: "OE",
  œ: "oe",
  Ø: "O",
  ø: "o",
  Ð: "D",
  ð: "d",
  Þ: "TH",
  þ: "th",
  Ł: "L",
  ł: "l"
}, Be = function(r) {
  return new URL(r, as).toString();
}, Id = (r = "") => r.trim().replace(/\s+/g, "").split("").map((e) => Od[e] ?? e).join("").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9_-]/g, "").toLowerCase(), wn = (r) => {
  const e = Id(r);
  return e.length < 3 ? e.padEnd(3, "1") : e;
}, Rd = (r, e) => {
  const t = r.match(/\/400-(.+)$/);
  return t ? `${vn}/${wn(e)}/400/${t[1]}` : r;
};
function yl(r) {
  var e, t, i = "";
  if (typeof r == "string" || typeof r == "number")
    i += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var n = r.length;
      for (e = 0; e < n; e++)
        r[e] && (t = yl(r[e])) && (i && (i += " "), i += t);
    } else
      for (t in r)
        r[t] && (i && (i += " "), i += t);
  return i;
}
function zd() {
  for (var r, e, t = 0, i = "", n = arguments.length; t < n; t++)
    (r = arguments[t]) && (e = yl(r)) && (i && (i += " "), i += e);
  return i;
}
const $s = "-";
function qd(r) {
  const e = Vd(r), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: i
  } = r;
  function n(o) {
    const a = o.split($s);
    return a[0] === "" && a.length !== 1 && a.shift(), Cl(a, e) || $d(o);
  }
  function s(o, a) {
    const l = t[o] || [];
    return a && i[o] ? [...l, ...i[o]] : l;
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  };
}
function Cl(r, e) {
  var o;
  if (r.length === 0)
    return e.classGroupId;
  const t = r[0], i = e.nextPart.get(t), n = i ? Cl(r.slice(1), i) : void 0;
  if (n)
    return n;
  if (e.validators.length === 0)
    return;
  const s = r.join($s);
  return (o = e.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : o.classGroupId;
}
const Uo = /^\[(.+)\]$/;
function $d(r) {
  if (Uo.test(r)) {
    const e = Uo.exec(r)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function Vd(r) {
  const {
    theme: e,
    prefix: t
  } = r, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ud(Object.entries(r.classGroups), t).forEach(([s, o]) => {
    ls(o, i, s, e);
  }), i;
}
function ls(r, e, t, i) {
  r.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? e : Ho(e, n);
      s.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (jd(n)) {
        ls(n(i), e, t, i);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([s, o]) => {
      ls(o, Ho(e, s), t, i);
    });
  });
}
function Ho(r, e) {
  let t = r;
  return e.split($s).forEach((i) => {
    t.nextPart.has(i) || t.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(i);
  }), t;
}
function jd(r) {
  return r.isThemeGetter;
}
function Ud(r, e) {
  return e ? r.map(([t, i]) => {
    const n = i.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, a]) => [e + o, a])) : s);
    return [t, n];
  }) : r;
}
function Hd(r) {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function n(s, o) {
    t.set(s, o), e++, e > r && (e = 0, i = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get(s) {
      let o = t.get(s);
      if (o !== void 0)
        return o;
      if ((o = i.get(s)) !== void 0)
        return n(s, o), o;
    },
    set(s, o) {
      t.has(s) ? t.set(s, o) : n(s, o);
    }
  };
}
const kl = "!";
function Gd(r) {
  const e = r.separator, t = e.length === 1, i = e[0], n = e.length;
  return function(o) {
    const a = [];
    let l = 0, u = 0, c;
    for (let v = 0; v < o.length; v++) {
      let w = o[v];
      if (l === 0) {
        if (w === i && (t || o.slice(v, v + n) === e)) {
          a.push(o.slice(u, v)), u = v + n;
          continue;
        }
        if (w === "/") {
          c = v;
          continue;
        }
      }
      w === "[" ? l++ : w === "]" && l--;
    }
    const d = a.length === 0 ? o : o.substring(u), h = d.startsWith(kl), f = h ? d.substring(1) : d, b = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: f,
      maybePostfixModifierPosition: b
    };
  };
}
function Wd(r) {
  if (r.length <= 1)
    return r;
  const e = [];
  let t = [];
  return r.forEach((i) => {
    i[0] === "[" ? (e.push(...t.sort(), i), t = []) : t.push(i);
  }), e.push(...t.sort()), e;
}
function Yd(r) {
  return {
    cache: Hd(r.cacheSize),
    splitModifiers: Gd(r),
    ...qd(r)
  };
}
const Kd = /\s+/;
function Zd(r, e) {
  const {
    splitModifiers: t,
    getClassGroupId: i,
    getConflictingClassGroupIds: n
  } = e, s = /* @__PURE__ */ new Set();
  return r.trim().split(Kd).map((o) => {
    const {
      modifiers: a,
      hasImportantModifier: l,
      baseClassName: u,
      maybePostfixModifierPosition: c
    } = t(o);
    let d = i(c ? u.substring(0, c) : u), h = !!c;
    if (!d) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (d = i(u), !d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      h = !1;
    }
    const f = Wd(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? f + kl : f,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: h
    };
  }).reverse().filter((o) => {
    if (!o.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: l,
      hasPostfixModifier: u
    } = o, c = a + l;
    return s.has(c) ? !1 : (s.add(c), n(l, u).forEach((d) => s.add(a + d)), !0);
  }).reverse().map((o) => o.originalClassName).join(" ");
}
function Xd() {
  let r = 0, e, t, i = "";
  for (; r < arguments.length; )
    (e = arguments[r++]) && (t = Dl(e)) && (i && (i += " "), i += t);
  return i;
}
function Dl(r) {
  if (typeof r == "string")
    return r;
  let e, t = "";
  for (let i = 0; i < r.length; i++)
    r[i] && (e = Dl(r[i])) && (t && (t += " "), t += e);
  return t;
}
function Jd(r, ...e) {
  let t, i, n, s = o;
  function o(l) {
    const u = e.reduce((c, d) => d(c), r());
    return t = Yd(u), i = t.cache.get, n = t.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = i(l);
    if (u)
      return u;
    const c = Zd(l, t);
    return n(l, c), c;
  }
  return function() {
    return s(Xd.apply(null, arguments));
  };
}
function ae(r) {
  const e = (t) => t[r] || [];
  return e.isThemeGetter = !0, e;
}
const Al = /^\[(?:([a-z-]+):)?(.+)\]$/i, Qd = /^\d+\/\d+$/, ep = /* @__PURE__ */ new Set(["px", "full", "screen"]), tp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ip = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, np = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function gt(r) {
  return Qt(r) || ep.has(r) || Qd.test(r);
}
function Lt(r) {
  return jr(r, "length", fp);
}
function Qt(r) {
  return !!r && !Number.isNaN(Number(r));
}
function Li(r) {
  return jr(r, "number", Qt);
}
function Gr(r) {
  return !!r && Number.isInteger(Number(r));
}
function op(r) {
  return r.endsWith("%") && Qt(r.slice(0, -1));
}
function K(r) {
  return Al.test(r);
}
function Tt(r) {
  return tp.test(r);
}
const ap = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function lp(r) {
  return jr(r, ap, Sl);
}
function up(r) {
  return jr(r, "position", Sl);
}
const cp = /* @__PURE__ */ new Set(["image", "url"]);
function dp(r) {
  return jr(r, cp, gp);
}
function pp(r) {
  return jr(r, "", hp);
}
function Wr() {
  return !0;
}
function jr(r, e, t) {
  const i = Al.exec(r);
  return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : t(i[2]) : !1;
}
function fp(r) {
  return rp.test(r) && !ip.test(r);
}
function Sl() {
  return !1;
}
function hp(r) {
  return np.test(r);
}
function gp(r) {
  return sp.test(r);
}
function mp() {
  const r = ae("colors"), e = ae("spacing"), t = ae("blur"), i = ae("brightness"), n = ae("borderColor"), s = ae("borderRadius"), o = ae("borderSpacing"), a = ae("borderWidth"), l = ae("contrast"), u = ae("grayscale"), c = ae("hueRotate"), d = ae("invert"), h = ae("gap"), f = ae("gradientColorStops"), b = ae("gradientColorStopPositions"), v = ae("inset"), w = ae("margin"), m = ae("opacity"), g = ae("padding"), x = ae("saturate"), _ = ae("scale"), y = ae("sepia"), k = ae("skew"), A = ae("space"), C = ae("translate"), D = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", K, e], E = () => [K, e], T = () => ["", gt, Lt], M = () => ["auto", Qt, K], F = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], $ = () => ["solid", "dashed", "dotted", "double", "none"], I = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], P = () => ["", "0", K], L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [Qt, Li], q = () => [Qt, K];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Wr],
      spacing: [gt, Lt],
      blur: ["none", "", Tt, K],
      brightness: N(),
      borderColor: [r],
      borderRadius: ["none", "", "full", Tt, K],
      borderSpacing: E(),
      borderWidth: T(),
      contrast: N(),
      grayscale: P(),
      hueRotate: q(),
      invert: P(),
      gap: E(),
      gradientColorStops: [r],
      gradientColorStopPositions: [op, Lt],
      inset: B(),
      margin: B(),
      opacity: N(),
      padding: E(),
      saturate: N(),
      scale: N(),
      sepia: P(),
      skew: q(),
      space: E(),
      translate: E()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", K]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Tt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": L()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": L()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...F(), K]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Gr, K]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", K]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: P()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: P()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Gr, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Wr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Gr, K]
        }, K]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Wr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Gr, K]
        }, K]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", K]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", K]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...O()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...O(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [g]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [g]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [g]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [g]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [g]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [g]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [g]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [g]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [g]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [A]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [A]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [K, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [K, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Tt]
        }, Tt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [K, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [K, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [K, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [K, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Tt, Lt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Li]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Wr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Qt, Li]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", gt, K]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", K]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", K]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [m]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [m]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", gt, Lt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", gt, K]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", K]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [m]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...F(), up]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", lp]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, dp]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [m]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...$(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [m]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: $()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...$()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [gt, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [gt, Lt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: T()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [m]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [gt, Lt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Tt, pp]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Wr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": I()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": I()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Tt, K]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [y]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [y]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", K]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", K]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Gr, K]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [C]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [C]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", K]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [gt, Lt, Li]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const bp = /* @__PURE__ */ Jd(mp);
function X(...r) {
  return bp(zd(r));
}
const vp = crypto.randomUUID();
function wp() {
  const r = "bm_window_id";
  let e = sessionStorage.getItem(r);
  return e || (e = crypto.randomUUID(), sessionStorage.setItem(r, e)), e;
}
const xp = {
  shopify: {
    bikeBrands: "bike/brands",
    bikeModels: "bike/models",
    framesSeries: "bike/frameSeries",
    bikeSpecs: "bike/bikeSpecBikes",
    bikeSpecYears: "bike/bikeSpecYears",
    bikeSpecSizes: "bike/bikeSpecSizes",
    bikeBrandProductCategories: "bike/bikeBrandProductCategories",
    checkSku: "compatibility/checkSku",
    checkSkus: "compatibility/checkSkus",
    checkSkusWithResults: "compatibility/checkSkusWithResults",
    bikeBom: "workshop/bikeBom",
    customBike: "workshop/addCustomBike",
    addComponent: "workshop/addComponent",
    findProducts: "workshop/findProducts",
    removeComponent: "workshop/removeComponent",
    revertComponent: "workshop/revertComponent",
    saveCustomBike: "workshop/saveCustomBike",
    updateCustomBike: "workshop/updateCustomBike",
    updateCustomBikeName: "workshop/updateCustomBikeName",
    raceControl: "raceControl"
  },
  bikematrix: {
    bikeBrands: "GetBikeBrands",
    bikeModels: "GetBikeModels",
    framesSeries: "GetBikeFrameSeries",
    bikeSpecs: "GetBikeSpecBikes",
    bikeSpecYears: "GetBikeSpecYears",
    bikeSpecSizes: "GetBikeSpecSizes",
    bikeBrandProductCategories: "GetBikeBrandProductCategories",
    checkSku: "Compatibility_CheckSku",
    checkSkus: "Compatibility_CheckSkus",
    checkSkusWithResults: "Compatibility_CheckSkusWithResults",
    bikeBom: "GetBikeBillOfMaterials",
    customBike: "AddCustomBike",
    addComponent: "AddComponent",
    findProducts: "FindProducts",
    removeComponent: "RemoveComponent",
    revertComponent: "RevertComponent",
    saveCustomBike: "SaveCustomBike",
    updateCustomBike: "UpdateCustomBike",
    updateCustomBikeName: "UpdateCustomBikeName",
    raceControl: "RaceControl"
  }
};
class Se {
  constructor(e, t, i, n) {
    this._apiUrl = n ? window.location.origin + "/apps/proxy/api/" : e, this._apiKey = t ?? "", this._apiToken = i ?? "", this._apiType = n ? "shopify" : "bikematrix", this._requestCorrelationId = wp(), this._requestDiagnosticCounter = 0;
  }
  getDiagnosticHeaderValue() {
    const e = "bm_request_diagnostic_counter", t = parseInt(sessionStorage.getItem(e) || "", 10), i = Number.isFinite(t) ? t : 0;
    this._requestDiagnosticCounter = i + 1, sessionStorage.setItem(e, this._requestDiagnosticCounter.toString());
    const n = parseInt(this._requestCorrelationId.replace(/-/g, "").slice(0, 8) || "0", 16);
    return (this._requestDiagnosticCounter ^ n).toString(36);
  }
  getEndpoint(e) {
    return xp[this._apiType][e];
  }
  async getBikeBrands() {
    const e = this.getEndpoint("bikeBrands"), t = await this.makeRequest(e);
    return t.success ? {
      success: t.success,
      data: t.data
    } : {
      success: t.success,
      error: "error_generic GetBikeBrands",
      logError: t.error
    };
  }
  async getBikeModels(e) {
    if (!e)
      return {
        success: !1,
        error: "error_generic"
      };
    const t = this.getEndpoint("bikeModels"), i = await this.makeRequest(t, {
      params: {
        bikeBrandId: e
      }
    });
    return i.success ? {
      data: i.data,
      success: i.success
    } : {
      success: i.success,
      error: "error_generic GetBikeModels",
      logError: i.error
    };
  }
  async getBikeFrameSeries(e) {
    if (!e)
      return {
        error: "error_generic",
        success: !1
      };
    const t = this.getEndpoint("framesSeries"), i = await this.makeRequest(t, {
      params: {
        bikeModelId: e
      }
    });
    return i.success ? {
      data: i.data,
      success: i.success
    } : {
      success: i.success,
      error: "error_generic GetBikeFrameSeries",
      logError: i.error
    };
  }
  async getBikeSpecs(e) {
    if (!e)
      return {
        success: !1,
        error: "error_generic GetBikeSpecs"
      };
    const t = this.getEndpoint("bikeSpecs"), i = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return i.success ? {
      data: i.data,
      success: i.success
    } : {
      success: i.success,
      error: "error_generic GetBikeSpecs",
      logError: i.error
    };
  }
  async getYears(e) {
    if (!e)
      return {
        error: "error_generic GetBikeYears",
        success: !1
      };
    const t = this.getEndpoint("bikeSpecYears"), i = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return i.success ? {
      data: i.data,
      success: i.success
    } : {
      error: "error_generic GetBikeYears",
      success: !1,
      logError: i.success
    };
  }
  async getFrameSizes(e, t, i) {
    if (!e || !t)
      return {
        success: !1,
        error: "error_generic GetFrameSizes"
      };
    const n = this.getEndpoint("bikeSpecSizes"), s = await this.makeRequest(n, {
      params: {
        bikeModelSpecId: e,
        bikeSpec: t,
        year: i
      }
    });
    return s.success ? {
      data: s.data,
      success: s.success
    } : {
      success: s.success,
      error: "error_generic GetFrameSizes",
      logError: s.error
    };
  }
  async getBikes(e, t, i) {
    if (e && (t || i)) {
      const n = this.getEndpoint("bikeSpecs"), s = await this.makeRequest(n, {
        params: {
          bikeModelSpecId: e,
          bikeSpec: t,
          year: i
        }
      });
      return s.success ? {
        data: s.data,
        success: s.success
      } : {
        success: s.success,
        error: "error_generic GetBikes",
        logError: s.error
      };
    } else
      return {
        success: !1,
        error: "error_generic GetBikes"
      };
  }
  async getBrandProductCategories(e) {
    if (e) {
      const t = this.getEndpoint("bikeBrandProductCategories"), i = await this.makeRequest(t, {
        params: {
          bikeBrandId: e
        }
      });
      return i.success ? {
        data: i.data,
        success: !0
      } : (console.error(i.error), {
        success: !1,
        error: "error_generic GetBrandProductCategories",
        logError: i.error
      });
    } else
      return {
        success: !1,
        error: "error_generic GetBrandProductCategories"
      };
  }
  async checkSkuCompatibility(e, t, i, n, s) {
    if (e && t) {
      const o = this.getEndpoint("checkSku") + `/${e}/${t}/${i}`, a = {
        "bm-caller": n
      };
      s && (a["bm-collection-handle"] = s);
      const l = await this.makeRequest(o, {
        headers: a
      });
      return l.success ? {
        success: l.success,
        data: l.data
      } : {
        success: l.success,
        error: "error_generic CheckSkuCompatibility",
        logError: l.error
      };
    } else
      return {
        success: !1,
        error: "error_generic CheckSkuCompatibility"
      };
  }
  async checkSkusCompatibility(e, t, i, n, s) {
    if (e && t) {
      const o = this.getEndpoint("checkSkus") + `/${e}/${t}/${i}`, a = {
        "bm-caller": n
      };
      s && (a["bm-collection-handle"] = s);
      const l = await this.makeRequest(o, {
        headers: a
      });
      return l.success ? {
        data: l.data,
        success: l.success,
        logError: l.error
      } : {
        success: l.success,
        error: "error_generic CheckSkusCompatibility",
        logError: l.error
      };
    } else
      return {
        success: !1,
        error: "error_generic CheckSkusCompatibility"
      };
  }
  async checkSkusCompatibilityWithResults(e, t, i, n, s, o = {}) {
    if (e && t) {
      const a = this.getEndpoint("checkSkusWithResults") + `/${e}/${i}`, l = {
        "Content-Type": "application/json",
        "bm-caller": n
      };
      s && (l["bm-collection-handle"] = s);
      const u = await this.makeRequest(a, {
        body: JSON.stringify(t),
        method: "POST",
        headers: l,
        ...o
      });
      return u.success ? {
        data: u.data,
        success: u.success
      } : {
        success: u.success,
        error: "error_compatiblelist",
        logError: u.error
      };
    } else
      return {
        success: !1,
        error: "error_compatiblelist"
      };
  }
  async getActiveSubscription(e) {
    if (this._apiType !== "shopify") {
      e({
        activeSubscription: !0
      });
      return;
    }
    var t = "activeSubscription";
    const i = await this.makeRequest(t);
    if (!i.success) {
      console.log(`getActiveSubscription Error: ${i.error}`);
      return;
    }
    e(i.data);
  }
  // == Virtual Workshop == //
  /**
   * Get Bike BOM data
   * @param bikeKey: string
   * @returns Bike BOM data
   */
  async getBikeBom(e) {
    if (!e)
      return {
        success: !1,
        error: "error_generic getBikeBom"
      };
    const t = this.getEndpoint("bikeBom"), i = await this.makeRequest(t, {
      params: {
        bikeKey: e
      }
    });
    return i.success ? {
      data: i.data,
      success: i.success
    } : {
      success: i.success,
      error: "error_get_bike_bom",
      logError: i.error
    };
  }
  /**
   * Add a custom bike
   * @param bikeKey: string
   * @returns Bike BOM data of the new custom bike
   */
  async addCustomBike(e) {
    if (!e)
      return {
        success: !1,
        error: "error_generic addCustomBike"
      };
    const t = this.getEndpoint("customBike"), i = await this.makeRequest(t, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e
      }
    });
    return i.success ? {
      data: i.data,
      success: i.success
    } : {
      success: i.success,
      error: "error_add_custom_bike",
      logError: i.error
    };
  }
  /**
   * Find products matching the search value
   * @param _searchValue: string
   * @param _categoryId: number
   * @returns Array of products
   */
  async findProducts(e, t) {
    if (!e)
      return {
        success: !1,
        error: "error_generic findProducts"
      };
    const i = this.getEndpoint("findProducts"), n = await this.makeRequest(i, {
      params: {
        search: e,
        productCategoryId: t,
        recordCount: 500
      }
    });
    return n.success ? {
      data: n.data,
      success: n.success
    } : {
      success: n.success,
      error: "error_find_products",
      logError: n.error
    };
  }
  /**
   * Add a component to a custom bike
   * @param _bikeKey: string
   * @param _productCategoryId: number
   * @param productId: number
   * @param bikeFieldName: number
   * @returns Success or fail
   */
  async addComponent(e, t, i, n) {
    if (!e || !t || !i || !n)
      return {
        success: !1,
        error: "error_generic addComponent"
      };
    const s = this.getEndpoint("addComponent"), o = await this.makeRequest(s, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        productCategoryId: t,
        productId: i,
        bikeFieldName: n
      }
    });
    return o.success ? {
      data: o.data,
      success: o.success
    } : {
      success: o.success,
      error: "error_add_component",
      logError: o.error
    };
  }
  /**
   * Remove component from a custom bike
   * @param _bikeKey: string
   * @param _productCategoryId: number
   * @param _bikeFieldName: number
   * @returns Success or fail
   */
  async removeComponent(e, t, i) {
    if (!e || !t || !i)
      return {
        success: !1,
        error: "error_generic removeComponent"
      };
    const n = this.getEndpoint("removeComponent"), s = await this.makeRequest(n, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        productCategoryId: t,
        bikeFieldName: i
      }
    });
    return s.success ? {
      data: s.data,
      success: s.success
    } : {
      success: s.success,
      error: "error_remove_component",
      logError: s.error
    };
  }
  /**
   * Revert the changes a user has made to a component
   * @param _bikeKey: string
   * @param _productCategoryId: number
   * @param _bikeFieldName
   * @returns Success or fail
   */
  async revertComponent(e, t, i) {
    if (!e || !t || !i)
      return {
        success: !1,
        error: "error_generic revertComponent"
      };
    const n = this.getEndpoint("revertComponent"), s = await this.makeRequest(n, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        productCategoryId: t,
        bikeFieldName: i
      }
    });
    return s.success ? {
      data: s.data,
      success: s.success
    } : {
      success: s.success,
      error: "error_revert_component",
      logError: s.error
    };
  }
  /**
   * Save a custom bike to a user's email
   * @param _bikeKey: string
   * @param _email: string
   * @returns Success or fail
   */
  async saveCustomBike(e, t) {
    if (!e || !t)
      return {
        success: !1,
        error: "error_generic saveCustomBike"
      };
    const i = this.getEndpoint("saveCustomBike"), n = await this.makeRequest(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        email: t
      }
    });
    return n.success ? {
      data: n.data,
      success: n.success
    } : {
      success: n.success,
      error: "error_save_custom_bike",
      logError: n.error
    };
  }
  /**
   * Update the Custom Bike email or name
   * @param _bikeKey: string
   * @param _productCategoryId: string
   * @returns Success or fail
   */
  async updateCustomBike(e, t) {
    if (!e || !t)
      return {
        success: !1,
        error: "error_generic saveCustomBike"
      };
    const i = this.getEndpoint("updateCustomBike"), n = await this.makeRequest(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        productCategoryId: t
      }
    });
    return n.success ? {
      data: n.data,
      success: n.success
    } : {
      success: n.success,
      error: "error_update_custom_bike"
    };
  }
  /**
   * Update the custom bike name.
   * @param _bikeKey: string
   * @param _name: string
   * @returns Success or fail
   */
  async updateCustomBikeName(e, t) {
    if (!e || !t)
      return {
        success: !1,
        error: "error_generic updateCustomBikeName"
      };
    const i = this.getEndpoint("updateCustomBikeName"), n = await this.makeRequest(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        name: t
      }
    });
    return n.success ? {
      data: n.data,
      success: n.success
    } : {
      success: n.success,
      error: "error_update_custom_bike_name",
      logError: n.error
    };
  }
  /**
   * Send a RaceControl Request
   * @param _id: string
   * @param _bodyData: any
   * @returns Success or fail
   */
  async raceControl(e, t) {
    if (!e)
      return {
        success: !1,
        error: "error_generic raceControl"
      };
    const i = this.getEndpoint("raceControl"), n = await this.makeRequest(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t),
      params: {
        id: e
      }
    });
    return n.success ? {
      data: n.data,
      success: n.success
    } : {
      success: n.success,
      error: "error_generic raceControl",
      logError: n.error
    };
  }
  async makeRequest(e, t = {}) {
    const i = new URL(e, this._apiUrl), n = {
      "Cache-Control": "no-cache",
      ...this._apiKey && {
        "bm-subscription-key": this._apiKey
      },
      ...this._apiToken && {
        "bm-app-token": this._apiToken
      },
      "bm-sdk-version": "1.3.15",
      // Added globally so request origin context is available on every endpoint.
      "bm-url": window.location.href,
      // Added globally so all endpoints can be tied to the same page-load event.
      "bm-page-load-correlation-id": vp,
      // Added globally so all endpoints share the same stable window correlation ID.
      "bm-window-correlation-id": this._requestCorrelationId,
      // Intentionally opaque per-request value to support server-side anomaly checks.
      "x-diagnostic-r": this.getDiagnosticHeaderValue()
    };
    typeof t.params == "object" && (Object.keys(t.params).forEach((o) => {
      t.params[o] && i.searchParams.set(o, t.params[o]);
    }), delete t.params);
    let s;
    try {
      const o = {
        ...n,
        // Default headers
        ...t.headers || {}
        // Calling function headers
      }, a = {
        ...t,
        // Spread options first (with options.headers)
        headers: o
        // Explicitly set headers after spreading options (as mergedHeaders will override options.headers)
      };
      t.signal && (a.signal = t.signal);
      const l = await fetch(i == null ? void 0 : i.href, a), u = await l.json().catch(() => {
        throw new Error("Request failed: " + (l.statusText || "Status" + l.status));
      });
      u.status === 400 || u.statusCode === 404 ? s = {
        success: !1,
        data: u
      } : s = {
        success: !0,
        data: u
      };
    } catch (o) {
      s = {
        success: !1,
        error: o.message
      };
    }
    return s;
  }
}
async function El(r, e) {
  var f;
  const {
    categories: t,
    collections: i,
    apiUrl: n,
    apiKey: s,
    apiToken: o,
    isShopify: a,
    logLevel: l
  } = window.BikeMatrix.getConfig(), u = JSON.parse(sessionStorage.getItem("bm_categories") || "null"), c = JSON.parse(localStorage.getItem(qs) || "null"), d = new Se(n, s, o, a);
  let h = [];
  if (l === "verbose" && console.log("useCompatibleCollections sessionCollections", u), !u || !(u != null && u.collections) || !(u != null && u.collections.length) || (u == null ? void 0 : u.key) !== (c == null ? void 0 : c.key) || (u == null ? void 0 : u.language) !== e) {
    l === "verbose" && console.log("useCompatibleCollections fetching new collections");
    const b = await d.getBrandProductCategories(r);
    if (l === "verbose" && console.log("useCompatibleCollections bikeBrandProductCategories", b), !b.success)
      return console.log(b), l === "verbose" && console.error(b.error), h = {
        error: b.error
      }, h;
    if (l === "verbose" && (console.log("useCompatibleCollections categories", t), console.log("useCompatibleCollections collections", i)), ((f = b.data) == null ? void 0 : f.length) > 0) {
      let v = t.filter((w) => {
        var m;
        return !!w.collection && ((m = b == null ? void 0 : b.data) == null ? void 0 : m.some((g) => g.product_Category.toLowerCase() === w.title.toLowerCase()));
      });
      l === "verbose" && console.log("useCompatibleCollections availableCategories", v), h = v.map((w) => w.collection.split(",").map((g) => g.trim().toLowerCase()).map((g) => i.find((x) => x.title.toLowerCase() === g)).filter((g) => g !== void 0).map((g) => ({
        title: g.title,
        text_id: w.text_id,
        handle: g.handle,
        url: g.url
      }))).flat(), l === "verbose" && console.log("useCompatibleCollections compatibleCollections", h), h = h == null ? void 0 : h.filter((w, m, g) => m === g.findIndex((x) => x.title === w.title && x.text_id === w.text_id && x.handle === w.handle && x.url === w.url));
    }
    sessionStorage.setItem("bm_categories", JSON.stringify({
      key: c == null ? void 0 : c.key,
      collections: h,
      language: e
    })), l === "verbose" && console.log("useCompatibleCollections fetched collections", h);
  } else
    l === "verbose" && console.log("useCompatibleCollections using session collections"), h = u.collections;
  return h;
}
const G = (r) => typeof r == "string", Yr = () => {
  let r, e;
  const t = new Promise((i, n) => {
    r = i, e = n;
  });
  return t.resolve = r, t.reject = e, t;
}, Go = (r) => r == null ? "" : String(r), _p = (r, e, t) => {
  r.forEach((i) => {
    e[i] && (t[i] = e[i]);
  });
}, yp = /###/g, Wo = (r) => r && r.includes("###") ? r.replace(yp, ".") : r, Yo = (r) => !r || G(r), oi = (r, e, t) => {
  const i = G(e) ? e.split(".") : e;
  let n = 0;
  for (; n < i.length - 1; ) {
    if (Yo(r))
      return {};
    const s = Wo(i[n]);
    !r[s] && t && (r[s] = new t()), Object.prototype.hasOwnProperty.call(r, s) ? r = r[s] : r = {}, ++n;
  }
  return Yo(r) ? {} : {
    obj: r,
    k: Wo(i[n])
  };
}, Ko = (r, e, t) => {
  const {
    obj: i,
    k: n
  } = oi(r, e, Object);
  if (i !== void 0 || e.length === 1) {
    i[n] = t;
    return;
  }
  let s = e[e.length - 1], o = e.slice(0, e.length - 1), a = oi(r, o, Object);
  for (; a.obj === void 0 && o.length; )
    s = `${o[o.length - 1]}.${s}`, o = o.slice(0, o.length - 1), a = oi(r, o, Object), a != null && a.obj && typeof a.obj[`${a.k}.${s}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${s}`] = t;
}, Cp = (r, e, t, i) => {
  const {
    obj: n,
    k: s
  } = oi(r, e, Object);
  n[s] = n[s] || [], n[s].push(t);
}, Yi = (r, e) => {
  const {
    obj: t,
    k: i
  } = oi(r, e);
  if (t && Object.prototype.hasOwnProperty.call(t, i))
    return t[i];
}, kp = (r, e, t) => {
  const i = Yi(r, t);
  return i !== void 0 ? i : Yi(e, t);
}, Bl = (r, e, t) => {
  for (const i in e)
    i !== "__proto__" && i !== "constructor" && (i in r ? G(r[i]) || r[i] instanceof String || G(e[i]) || e[i] instanceof String ? t && (r[i] = e[i]) : Bl(r[i], e[i], t) : r[i] = e[i]);
  return r;
}, mt = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), Dp = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
}, Ap = (r) => G(r) ? r.replace(/[&<>"'\/]/g, (e) => Dp[e]) : r;
class Sp {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const i = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, i), this.regExpQueue.push(e), i;
  }
}
const Ep = [" ", ",", "?", "!", ";"], Bp = new Sp(20), Lp = (r, e, t) => {
  e = e || "", t = t || "";
  const i = Ep.filter((o) => !e.includes(o) && !t.includes(o));
  if (i.length === 0)
    return !0;
  const n = Bp.getRegExp(`(${i.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let s = !n.test(r);
  if (!s) {
    const o = r.indexOf(t);
    o > 0 && !n.test(r.substring(0, o)) && (s = !0);
  }
  return s;
}, us = (r, e, t = ".") => {
  if (!r)
    return;
  if (r[e])
    return Object.prototype.hasOwnProperty.call(r, e) ? r[e] : void 0;
  const i = e.split(t);
  let n = r;
  for (let s = 0; s < i.length; ) {
    if (!n || typeof n != "object")
      return;
    let o, a = "";
    for (let l = s; l < i.length; ++l)
      if (l !== s && (a += t), a += i[l], o = n[a], o !== void 0) {
        if (["string", "number", "boolean"].includes(typeof o) && l < i.length - 1)
          continue;
        s += l - s + 1;
        break;
      }
    n = o;
  }
  return n;
}, hi = (r) => r == null ? void 0 : r.replace(/_/g, "-"), Tp = {
  type: "logger",
  log(r) {
    this.output("log", r);
  },
  warn(r) {
    this.output("warn", r);
  },
  error(r) {
    this.output("error", r);
  },
  output(r, e) {
    var t, i;
    (i = (t = console == null ? void 0 : console[r]) == null ? void 0 : t.apply) == null || i.call(t, console, e);
  }
};
class Ki {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || Tp, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, i, n) {
    return n && !this.debug ? null : (e = e.map((s) => G(s) ? s.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : s), G(e[0]) && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Ki(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Ki(this.logger, e);
  }
}
var at = new Ki();
class xn {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((i) => {
      this.observers[i] || (this.observers[i] = /* @__PURE__ */ new Map());
      const n = this.observers[i].get(t) || 0;
      this.observers[i].set(t, n + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  once(e, t) {
    const i = (...n) => {
      t(...n), this.off(e, i);
    };
    return this.on(e, i), this;
  }
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([n, s]) => {
      for (let o = 0; o < s; o++)
        n(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([n, s]) => {
      for (let o = 0; o < s; o++)
        n(e, ...t);
    });
  }
}
class Zo extends xn {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.includes(e) || this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, i, n = {}) {
    var u, c;
    const s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, o = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.includes(".") ? a = e.split(".") : (a = [e, t], i && (Array.isArray(i) ? a.push(...i) : G(i) && s ? a.push(...i.split(s)) : a.push(i)));
    const l = Yi(this.data, a);
    return !l && !t && !i && e.includes(".") && (e = a[0], t = a[1], i = a.slice(2).join(".")), l || !o || !G(i) ? l : us((c = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : c[t], i, s);
  }
  addResource(e, t, i, n, s = {
    silent: !1
  }) {
    const o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let a = [e, t];
    i && (a = a.concat(o ? i.split(o) : i)), e.includes(".") && (a = e.split("."), n = t, t = a[1]), this.addNamespaces(t), Ko(this.data, a, n), s.silent || this.emit("added", e, t, i, n);
  }
  addResources(e, t, i, n = {
    silent: !1
  }) {
    for (const s in i)
      (G(i[s]) || Array.isArray(i[s])) && this.addResource(e, t, s, i[s], {
        silent: !0
      });
    n.silent || this.emit("added", e, t, i);
  }
  addResourceBundle(e, t, i, n, s, o = {
    silent: !1,
    skipCopy: !1
  }) {
    let a = [e, t];
    e.includes(".") && (a = e.split("."), n = i, i = t, t = a[1]), this.addNamespaces(t);
    let l = Yi(this.data, a) || {};
    o.skipCopy || (i = JSON.parse(JSON.stringify(i))), n ? Bl(l, i, s) : l = {
      ...l,
      ...i
    }, Ko(this.data, a, l), o.silent || this.emit("added", e, t, i);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((n) => t[n] && Object.keys(t[n]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Ll = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, e, t, i, n) {
    return r.forEach((s) => {
      var o;
      e = ((o = this.processors[s]) == null ? void 0 : o.process(e, t, i, n)) ?? e;
    }), e;
  }
};
const Tl = Symbol("i18next/PATH_KEY");
function Fp() {
  const r = [], e = /* @__PURE__ */ Object.create(null);
  let t;
  return e.get = (i, n) => {
    var s;
    return (s = t == null ? void 0 : t.revoke) == null || s.call(t), n === Tl ? r : (r.push(n), t = Proxy.revocable(i, e), t.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function yr(r, e) {
  const {
    [Tl]: t
  } = r(Fp()), i = (e == null ? void 0 : e.keySeparator) ?? ".", n = (e == null ? void 0 : e.nsSeparator) ?? ":";
  if (t.length > 1 && n) {
    const s = e == null ? void 0 : e.ns, o = Array.isArray(s) ? s : null;
    if (o && o.length > 1 && o.slice(1).includes(t[0]))
      return `${t[0]}${n}${t.slice(1).join(i)}`;
  }
  return t.join(i);
}
const Tn = (r) => !G(r) && typeof r != "boolean" && typeof r != "number";
class Zi extends xn {
  constructor(e, t = {}) {
    super(), _p(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = at.create("translator"), this.checkedLoadedFor = {};
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const i = {
      ...t
    };
    if (e == null)
      return !1;
    const n = this.resolve(e, i);
    if ((n == null ? void 0 : n.res) === void 0)
      return !1;
    const s = Tn(n.res);
    return !(i.returnObjects === !1 && s);
  }
  extractFromKey(e, t) {
    let i = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const n = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let s = t.ns || this.options.defaultNS || [];
    const o = i && e.includes(i), a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Lp(e, i, n);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: G(s) ? [s] : s
        };
      const u = e.split(i);
      (i !== n || i === n && this.options.ns.includes(u[0])) && (s = u.shift()), e = u.join(n);
    }
    return {
      key: e,
      namespaces: G(s) ? [s] : s
    };
  }
  translate(e, t, i) {
    let n = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), e == null)
      return "";
    typeof e == "function" && (e = yr(e, {
      ...this.options,
      ...n
    })), Array.isArray(e) || (e = [String(e)]), e = e.map((T) => typeof T == "function" ? yr(T, {
      ...this.options,
      ...n
    }) : String(T));
    const s = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], n), u = l[l.length - 1];
    let c = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    c === void 0 && (c = ":");
    const d = n.lng || this.language, h = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((d == null ? void 0 : d.toLowerCase()) === "cimode")
      return h ? s ? {
        res: `${u}${c}${a}`,
        usedKey: a,
        exactUsedKey: a,
        usedLng: d,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(n)
      } : `${u}${c}${a}` : s ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: d,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(n)
      } : a;
    const f = this.resolve(e, n);
    let b = f == null ? void 0 : f.res;
    const v = (f == null ? void 0 : f.usedKey) || a, w = (f == null ? void 0 : f.exactUsedKey) || a, m = ["[object Number]", "[object Function]", "[object RegExp]"], g = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, x = !this.i18nFormat || this.i18nFormat.handleAsObject, _ = n.count !== void 0 && !G(n.count), y = Zi.hasDefaultValue(n), k = _ ? this.pluralResolver.getSuffix(d, n.count, n) : "", A = n.ordinal && _ ? this.pluralResolver.getSuffix(d, n.count, {
      ordinal: !1
    }) : "", C = _ && !n.ordinal && n.count === 0, D = C && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${k}`] || n[`defaultValue${A}`] || n.defaultValue;
    let S = b;
    x && !b && y && (S = D);
    const B = Tn(S), E = Object.prototype.toString.apply(S);
    if (x && S && B && !m.includes(E) && !(G(g) && Array.isArray(S))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const T = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, S, {
          ...n,
          ns: l
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return s ? (f.res = T, f.usedParams = this.getUsedParamsDetails(n), f) : T;
      }
      if (o) {
        const T = Array.isArray(S), M = T ? [] : {}, F = T ? w : v;
        for (const $ in S)
          if (Object.prototype.hasOwnProperty.call(S, $)) {
            const I = `${F}${o}${$}`;
            y && !b ? M[$] = this.translate(I, {
              ...n,
              defaultValue: Tn(D) ? D[$] : void 0,
              joinArrays: !1,
              ns: l
            }) : M[$] = this.translate(I, {
              ...n,
              joinArrays: !1,
              ns: l
            }), M[$] === I && (M[$] = S[$]);
          }
        b = M;
      }
    } else if (x && G(g) && Array.isArray(b))
      b = b.join(g), b && (b = this.extendTranslation(b, e, n, i));
    else {
      let T = !1, M = !1;
      !this.isValidLookup(b) && y && (T = !0, b = D), this.isValidLookup(b) || (M = !0, b = a);
      const $ = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && M ? void 0 : b, I = y && D !== b && this.options.updateMissing;
      if (M || T || I) {
        if (this.logger.log(I ? "updateKey" : "missingKey", d, u, a, I ? D : b), o) {
          const N = this.resolve(a, {
            ...n,
            keySeparator: !1
          });
          N && N.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let O = [];
        const P = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && P && P[0])
          for (let N = 0; N < P.length; N++)
            O.push(P[N]);
        else
          this.options.saveMissingTo === "all" ? O = this.languageUtils.toResolveHierarchy(n.lng || this.language) : O.push(n.lng || this.language);
        const L = (N, q, ie) => {
          var H;
          const ee = y && ie !== b ? ie : $;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(N, u, q, ee, I, n) : (H = this.backendConnector) != null && H.saveMissing && this.backendConnector.saveMissing(N, u, q, ee, I, n), this.emit("missingKey", N, u, q, b);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && _ ? O.forEach((N) => {
          const q = this.pluralResolver.getSuffixes(N, n);
          C && n[`defaultValue${this.options.pluralSeparator}zero`] && !q.includes(`${this.options.pluralSeparator}zero`) && q.push(`${this.options.pluralSeparator}zero`), q.forEach((ie) => {
            L([N], a + ie, n[`defaultValue${ie}`] || D);
          });
        }) : L(O, a, D));
      }
      b = this.extendTranslation(b, e, n, f, i), M && b === a && this.options.appendNamespaceToMissingKey && (b = `${u}${c}${a}`), (M || T) && this.options.parseMissingKeyHandler && (b = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${a}` : a, T ? b : void 0, n));
    }
    return s ? (f.res = b, f.usedParams = this.getUsedParamsDetails(n), f) : b;
  }
  extendTranslation(e, t, i, n, s) {
    var l, u;
    if ((l = this.i18nFormat) != null && l.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...i
      }, i.lng || this.language || n.usedLng, n.usedNS, n.usedKey, {
        resolved: n
      });
    else if (!i.skipInterpolation) {
      i.interpolation && this.interpolator.init({
        ...i,
        interpolation: {
          ...this.options.interpolation,
          ...i.interpolation
        }
      });
      const c = G(e) && (((u = i == null ? void 0 : i.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (c) {
        const f = e.match(this.interpolator.nestingRegexp);
        d = f && f.length;
      }
      let h = i.replace && !G(i.replace) ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (h = {
        ...this.options.interpolation.defaultVariables,
        ...h
      }), e = this.interpolator.interpolate(e, h, i.lng || this.language || n.usedLng, i), c) {
        const f = e.match(this.interpolator.nestingRegexp), b = f && f.length;
        d < b && (i.nest = !1);
      }
      !i.lng && n && n.res && (i.lng = this.language || n.usedLng), i.nest !== !1 && (e = this.interpolator.nest(e, (...f) => (s == null ? void 0 : s[0]) === f[0] && !i.context ? (this.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`), null) : this.translate(...f, t), i)), i.interpolation && this.interpolator.reset();
    }
    const o = i.postProcess || this.options.postProcess, a = G(o) ? [o] : o;
    return e != null && (a != null && a.length) && i.applyPostProcessor !== !1 && (e = Ll.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...n,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), e;
  }
  resolve(e, t = {}) {
    let i, n, s, o, a;
    return G(e) && (e = [e]), Array.isArray(e) && (e = e.map((l) => typeof l == "function" ? yr(l, {
      ...this.options,
      ...t
    }) : l)), e.forEach((l) => {
      if (this.isValidLookup(i))
        return;
      const u = this.extractFromKey(l, t), c = u.key;
      n = c;
      let d = u.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const h = t.count !== void 0 && !G(t.count), f = h && !t.ordinal && t.count === 0, b = t.context !== void 0 && (G(t.context) || typeof t.context == "number") && t.context !== "", v = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      d.forEach((w) => {
        var m, g;
        this.isValidLookup(i) || (a = w, !this.checkedLoadedFor[`${v[0]}-${w}`] && ((m = this.utils) != null && m.hasLoadedNamespace) && !((g = this.utils) != null && g.hasLoadedNamespace(a)) && (this.checkedLoadedFor[`${v[0]}-${w}`] = !0, this.logger.warn(`key "${n}" for languages "${v.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((x) => {
          var k;
          if (this.isValidLookup(i))
            return;
          o = x;
          const _ = [c];
          if ((k = this.i18nFormat) != null && k.addLookupKeys)
            this.i18nFormat.addLookupKeys(_, c, x, w, t);
          else {
            let A;
            h && (A = this.pluralResolver.getSuffix(x, t.count, t));
            const C = `${this.options.pluralSeparator}zero`, D = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (t.ordinal && A.startsWith(D) && _.push(c + A.replace(D, this.options.pluralSeparator)), _.push(c + A), f && _.push(c + C)), b) {
              const S = `${c}${this.options.contextSeparator || "_"}${t.context}`;
              _.push(S), h && (t.ordinal && A.startsWith(D) && _.push(S + A.replace(D, this.options.pluralSeparator)), _.push(S + A), f && _.push(S + C));
            }
          }
          let y;
          for (; y = _.pop(); )
            this.isValidLookup(i) || (s = y, i = this.getResource(x, w, y, t));
        }));
      });
    }), {
      res: i,
      usedKey: n,
      exactUsedKey: s,
      usedLng: o,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, i, n = {}) {
    var s;
    return (s = this.i18nFormat) != null && s.getResource ? this.i18nFormat.getResource(e, t, i, n) : this.resourceStore.getResource(e, t, i, n);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = e.replace && !G(e.replace);
    let n = i ? e.replace : e;
    if (i && typeof e.count < "u" && (n.count = e.count), this.options.interpolation.defaultVariables && (n = {
      ...this.options.interpolation.defaultVariables,
      ...n
    }), !i) {
      n = {
        ...n
      };
      for (const s of t)
        delete n[s];
    }
    return n;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i) && i.startsWith(t) && e[i] !== void 0)
        return !0;
    return !1;
  }
}
class Xo {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = at.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = hi(e), !e || !e.includes("-"))
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = hi(e), !e || !e.includes("-"))
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (G(e) && e.includes("-")) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(e);
  }
  getBestMatchFromCodes(e) {
    if (!e)
      return null;
    let t;
    return e.forEach((i) => {
      if (t)
        return;
      const n = this.formatLanguageCode(i);
      (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
    }), !t && this.options.supportedLngs && e.forEach((i) => {
      if (t)
        return;
      const n = this.getScriptPartFromCode(i);
      if (this.isSupportedCode(n))
        return t = n;
      const s = this.getLanguagePartFromCode(i);
      if (this.isSupportedCode(s))
        return t = s;
      t = this.options.supportedLngs.find((o) => o === s ? !0 : !o.includes("-") && !s.includes("-") ? !1 : !!(o.includes("-") && !s.includes("-") && o.slice(0, o.indexOf("-")) === s || o.startsWith(s) && s.length > 1));
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e)
      return [];
    if (typeof e == "function" && (e = e(t)), G(e) && (e = [e]), Array.isArray(e))
      return e;
    if (!t)
      return e.default || [];
    let i = e[t];
    return i || (i = e[this.getScriptPartFromCode(t)]), i || (i = e[this.formatLanguageCode(t)]), i || (i = e[this.getLanguagePartFromCode(t)]), i || (i = e.default), i || [];
  }
  toResolveHierarchy(e, t) {
    const i = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), n = [], s = (o) => {
      o && (this.isSupportedCode(o) ? n.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return G(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : G(e) && s(this.formatLanguageCode(e)), i.forEach((o) => {
      n.includes(o) || s(this.formatLanguageCode(o));
    }), n;
  }
}
const Jo = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Qo = {
  select: (r) => r === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Np {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = at.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const i = hi(e === "dev" ? "en" : e), n = t.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
      cleanedCode: i,
      type: n
    });
    if (s in this.pluralRulesCache)
      return this.pluralRulesCache[s];
    let o;
    try {
      o = new Intl.PluralRules(i, {
        type: n
      });
    } catch {
      if (typeof Intl > "u")
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Qo;
      if (!e.match(/-|_/))
        return Qo;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      o = this.getRule(l, t);
    }
    return this.pluralRulesCache[s] = o, o;
  }
  needsPlural(e, t = {}) {
    let i = this.getRule(e, t);
    return i || (i = this.getRule("dev", t)), (i == null ? void 0 : i.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t, i = {}) {
    return this.getSuffixes(e, i).map((n) => `${t}${n}`);
  }
  getSuffixes(e, t = {}) {
    let i = this.getRule(e, t);
    return i || (i = this.getRule("dev", t)), i ? i.resolvedOptions().pluralCategories.sort((n, s) => Jo[n] - Jo[s]).map((n) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : [];
  }
  getSuffix(e, t, i = {}) {
    const n = this.getRule(e, i);
    return n ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, i));
  }
}
const ea = (r, e, t, i = ".", n = !0) => {
  let s = kp(r, e, t);
  return !s && n && G(t) && (s = us(r, t, i), s === void 0 && (s = us(e, t, i))), s;
}, Fn = (r) => r.replace(/\$/g, "$$$$");
class ta {
  constructor(e = {}) {
    var t;
    this.logger = at.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((i) => i), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: i,
      useRawValueToEscape: n,
      prefix: s,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: d,
      nestingPrefix: h,
      nestingPrefixEscaped: f,
      nestingSuffix: b,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: w,
      maxReplaces: m,
      alwaysFormat: g
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Ap, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = s ? mt(s) : o || "{{", this.suffix = a ? mt(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : d ? mt(d) : "-", this.unescapeSuffix = this.unescapePrefix ? "" : c ? mt(c) : "", this.nestingPrefix = h ? mt(h) : f || mt("$t("), this.nestingSuffix = b ? mt(b) : v || mt(")"), this.nestingOptionsSeparator = w || ",", this.maxReplaces = m || 1e3, this.alwaysFormat = g !== void 0 ? g : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, i) => (t == null ? void 0 : t.source) === i ? (t.lastIndex = 0, t) : new RegExp(i, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, i, n) {
    var f;
    let s, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (b) => {
      if (!b.includes(this.formatSeparator)) {
        const g = ea(t, l, b, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(g, void 0, i, {
          ...n,
          ...t,
          interpolationkey: b
        }) : g;
      }
      const v = b.split(this.formatSeparator), w = v.shift().trim(), m = v.join(this.formatSeparator).trim();
      return this.format(ea(t, l, w, this.options.keySeparator, this.options.ignoreJSONStructure), m, i, {
        ...n,
        ...t,
        interpolationkey: w
      });
    };
    this.resetRegExp(), !this.escapeValue && typeof e == "string" && /\$t\([^)]*\{[^}]*\{\{/.test(e) && this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
    const c = (n == null ? void 0 : n.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((f = n == null ? void 0 : n.interpolation) == null ? void 0 : f.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (b) => Fn(b)
    }, {
      regex: this.regexp,
      safeValue: (b) => this.escapeValue ? Fn(this.escape(b)) : Fn(b)
    }].forEach((b) => {
      for (a = 0; s = b.regex.exec(e); ) {
        const v = s[1].trim();
        if (o = u(v), o === void 0)
          if (typeof c == "function") {
            const m = c(e, s, n);
            o = G(m) ? m : "";
          } else if (n && Object.prototype.hasOwnProperty.call(n, v))
            o = "";
          else if (d) {
            o = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`), o = "";
        else
          !G(o) && !this.useRawValueToEscape && (o = Go(o));
        const w = b.safeValue(o);
        if (e = e.replace(s[0], w), d ? (b.regex.lastIndex += o.length, b.regex.lastIndex -= s[0].length) : b.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, i = {}) {
    let n, s, o;
    const a = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (!l.includes(c))
        return l;
      const d = l.split(new RegExp(`${mt(c)}[ ]*{`));
      let h = `{${d[1]}`;
      l = d[0], h = this.interpolate(h, o);
      const f = h.match(/'/g), b = h.match(/"/g);
      (((f == null ? void 0 : f.length) ?? 0) % 2 === 0 && !b || ((b == null ? void 0 : b.length) ?? 0) % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        o = JSON.parse(h), u && (o = {
          ...u,
          ...o
        });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, v), `${l}${c}${h}`;
      }
      return o.defaultValue && o.defaultValue.includes(this.prefix) && delete o.defaultValue, l;
    };
    for (; n = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...i
      }, o = o.replace && !G(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      const u = /{.*}/.test(n[1]) ? n[1].lastIndexOf("}") + 1 : n[1].indexOf(this.formatSeparator);
      if (u !== -1 && (l = n[1].slice(u).split(this.formatSeparator).map((c) => c.trim()).filter(Boolean), n[1] = n[1].slice(0, u)), s = t(a.call(this, n[1].trim(), o), o), s && n[0] === e && !G(s))
        return s;
      G(s) || (s = Go(s)), s || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), s = ""), l.length && (s = l.reduce((c, d) => this.format(c, d, i.lng, {
        ...i,
        interpolationkey: n[1].trim()
      }), s.trim())), e = e.replace(n[0], s), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Mp = (r) => {
  let e = r.toLowerCase().trim();
  const t = {};
  if (r.includes("(")) {
    const i = r.split("(");
    e = i[0].toLowerCase().trim();
    const n = i[1].slice(0, -1);
    e === "currency" && !n.includes(":") ? t.currency || (t.currency = n.trim()) : e === "relativetime" && !n.includes(":") ? t.range || (t.range = n.trim()) : n.split(";").forEach((o) => {
      if (o) {
        const [a, ...l] = o.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
        t[c] || (t[c] = u), u === "false" && (t[c] = !1), u === "true" && (t[c] = !0), isNaN(u) || (t[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, ra = (r) => {
  const e = {};
  return (t, i, n) => {
    let s = n;
    n && n.interpolationkey && n.formatParams && n.formatParams[n.interpolationkey] && n[n.interpolationkey] && (s = {
      ...s,
      [n.interpolationkey]: void 0
    });
    const o = i + JSON.stringify(s);
    let a = e[o];
    return a || (a = r(hi(i), n), e[o] = a), a(t);
  };
}, Pp = (r) => (e, t, i) => r(hi(t), i)(e);
class Op {
  constructor(e = {}) {
    this.logger = at.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const i = t.cacheInBuiltFormats ? ra : Pp;
    this.formats = {
      number: i((n, s) => {
        const o = new Intl.NumberFormat(n, {
          ...s
        });
        return (a) => o.format(a);
      }),
      currency: i((n, s) => {
        const o = new Intl.NumberFormat(n, {
          ...s,
          style: "currency"
        });
        return (a) => o.format(a);
      }),
      datetime: i((n, s) => {
        const o = new Intl.DateTimeFormat(n, {
          ...s
        });
        return (a) => o.format(a);
      }),
      relativetime: i((n, s) => {
        const o = new Intl.RelativeTimeFormat(n, {
          ...s
        });
        return (a) => o.format(a, s.range || "day");
      }),
      list: i((n, s) => {
        const o = new Intl.ListFormat(n, {
          ...s
        });
        return (a) => o.format(a);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = ra(t);
  }
  format(e, t, i, n = {}) {
    if (!t || e == null)
      return e;
    const s = t.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && !s[0].includes(")") && s.find((a) => a.includes(")"))) {
      const a = s.findIndex((l) => l.includes(")"));
      s[0] = [s[0], ...s.splice(1, a)].join(this.formatSeparator);
    }
    return s.reduce((a, l) => {
      var d;
      const {
        formatName: u,
        formatOptions: c
      } = Mp(l);
      if (this.formats[u]) {
        let h = a;
        try {
          const f = ((d = n == null ? void 0 : n.formatParams) == null ? void 0 : d[n.interpolationkey]) || {}, b = f.locale || f.lng || n.locale || n.lng || i;
          h = this.formats[u](a, b, {
            ...c,
            ...n,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return h;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, e);
  }
}
const Ip = (r, e) => {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
};
class Rp extends xn {
  constructor(e, t, i, n = {}) {
    var s, o;
    super(), this.backend = e, this.store = t, this.services = i, this.languageUtils = i.languageUtils, this.options = n, this.logger = at.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], (o = (s = this.backend) == null ? void 0 : s.init) == null || o.call(s, i, n.backend, n);
  }
  queueLoad(e, t, i, n) {
    const s = {}, o = {}, a = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((d) => {
        const h = `${u}|${d}`;
        !i.reload && this.store.hasResourceBundle(u, d) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? o[h] === void 0 && (o[h] = !0) : (this.state[h] = 1, c = !1, o[h] === void 0 && (o[h] = !0), s[h] === void 0 && (s[h] = !0), l[d] === void 0 && (l[d] = !0)));
      }), c || (a[u] = !0);
    }), (Object.keys(s).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: n
    }), {
      toLoad: Object.keys(s),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, i) {
    const n = e.split("|"), s = n[0], o = n[1];
    t && this.emit("failedLoading", s, o, t), !t && i && this.store.addResourceBundle(s, o, i, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && i && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      Cp(l.loaded, [s], o), Ip(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        a[u] || (a[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((d) => {
          a[u][d] === void 0 && (a[u][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, i, n = 0, s = this.retryTimeout, o) {
    if (!e.length)
      return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: i,
        tried: n,
        wait: s,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (u && c && n < this.maxRetries) {
        setTimeout(() => {
          this.read(e, t, i, n + 1, s * 2, o);
        }, s);
        return;
      }
      o(u, c);
    }, l = this.backend[i].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, t);
        u && typeof u.then == "function" ? u.then((c) => a(null, c)).catch(a) : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(e, t, a);
  }
  prepareLoading(e, t, i = {}, n) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
    G(e) && (e = this.languageUtils.toResolveHierarchy(e)), G(t) && (t = [t]);
    const s = this.queueLoad(e, t, i, n);
    if (!s.toLoad.length)
      return s.pending.length || n(), null;
    s.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, t, i) {
    this.prepareLoading(e, t, {}, i);
  }
  reload(e, t, i) {
    this.prepareLoading(e, t, {
      reload: !0
    }, i);
  }
  loadOne(e, t = "") {
    const i = e.split("|"), n = i[0], s = i[1];
    this.read(n, s, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${t}loading namespace ${s} for language ${n} failed`, o), !o && a && this.logger.log(`${t}loaded namespace ${s} for language ${n}`, a), this.loaded(e, o, a);
    });
  }
  saveMissing(e, t, i, n, s, o = {}, a = () => {
  }) {
    var l, u, c, d, h;
    if ((u = (l = this.services) == null ? void 0 : l.utils) != null && u.hasLoadedNamespace && !((d = (c = this.services) == null ? void 0 : c.utils) != null && d.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if ((h = this.backend) != null && h.create) {
        const f = {
          ...o,
          isUpdate: s
        }, b = this.backend.create.bind(this.backend);
        if (b.length < 6)
          try {
            let v;
            b.length === 5 ? v = b(e, t, i, n, f) : v = b(e, t, i, n), v && typeof v.then == "function" ? v.then((w) => a(null, w)).catch(a) : a(null, v);
          } catch (v) {
            a(v);
          }
        else
          b(e, t, i, n, a, f);
      }
      !e || !e[0] || this.store.addResource(e[0], t, i, n);
    }
  }
}
const Nn = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (r) => {
    let e = {};
    if (typeof r[1] == "object" && (e = r[1]), G(r[1]) && (e.defaultValue = r[1]), G(r[2]) && (e.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
      const t = r[3] || r[2];
      Object.keys(t).forEach((i) => {
        e[i] = t[i];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), ia = (r) => (G(r.ns) && (r.ns = [r.ns]), G(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]), G(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && !r.supportedLngs.includes("cimode") && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r), Ti = () => {
}, zp = (r) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
};
class ai extends xn {
  constructor(e = {}, t) {
    if (super(), this.options = ia(e), this.services = {}, this.logger = at, this.modules = {
      external: []
    }, zp(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (G(e.ns) ? e.defaultNS = e.ns : e.ns.includes("translation") || (e.defaultNS = e.ns[0]));
    const i = Nn();
    this.options = {
      ...i,
      ...this.options,
      ...ia(e)
    }, this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = i.overloadTranslationOptionHandler);
    const n = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? at.init(n(this.modules.logger), this.options) : at.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = Op;
      const c = new Xo(this.options);
      this.store = new Zo(this.options.resources, this.options);
      const d = this.services;
      d.logger = at, d.resourceStore = this.store, d.languageUtils = c, d.pluralResolver = new Np(c, {
        prepend: this.options.pluralSeparator
      }), u && (d.formatter = n(u), d.formatter.init && d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new ta(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new Rp(n(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", (h, ...f) => {
        this.emit(h, ...f);
      }), this.modules.languageDetector && (d.languageDetector = n(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = n(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new Zi(this.services, this.options), this.translator.on("*", (h, ...f) => {
        this.emit(h, ...f);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = Ti), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...c) => this.store[u](...c);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...c) => (this.store[u](...c), this);
    });
    const a = Yr(), l = () => {
      const u = (c, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(d), t(c, d);
      };
      if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized)
        return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), a;
  }
  loadResources(e, t = Ti) {
    var s, o;
    let i = t;
    const n = G(e) ? e : this.language;
    if (typeof e == "function" && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((n == null ? void 0 : n.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return i();
      const a = [], l = (u) => {
        if (!u || u === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((d) => {
          d !== "cimode" && (a.includes(d) || a.push(d));
        });
      };
      n ? l(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => l(c)), (o = (s = this.options.preload) == null ? void 0 : s.forEach) == null || o.call(s, (u) => l(u)), this.services.backendConnector.load(a, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(u);
      });
    } else
      i(null);
  }
  reloadResources(e, t, i) {
    const n = Yr();
    return typeof e == "function" && (i = e, e = void 0), typeof t == "function" && (i = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), i || (i = Ti), this.services.backendConnector.reload(e, t, (s) => {
      n.resolve(), i(s);
    }), n;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Ll.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !["cimode", "dev"].includes(e)) {
      for (let t = 0; t < this.languages.length; t++) {
        const i = this.languages[t];
        if (!["cimode", "dev"].includes(i) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
      !this.resolvedLanguage && !this.languages.includes(e) && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const i = Yr();
    this.emit("languageChanging", e);
    const n = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, s = (a, l) => {
      l ? this.isLanguageChangingTo === e && (n(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, i.resolve((...u) => this.t(...u)), t && t(a, (...u) => this.t(...u));
    }, o = (a) => {
      var c, d;
      !e && !a && this.services.languageDetector && (a = []);
      const l = G(a) ? a : a && a[0], u = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(G(a) ? [a] : a);
      u && (this.language || n(u), this.translator.language || this.translator.changeLanguage(u), (d = (c = this.services.languageDetector) == null ? void 0 : c.cacheUserLanguage) == null || d.call(c, u)), this.loadResources(u, (h) => {
        s(h, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), i;
  }
  getFixedT(e, t, i) {
    const n = (s, o, ...a) => {
      let l;
      typeof o != "object" ? l = this.options.overloadTranslationOptionHandler([s, o].concat(a)) : l = {
        ...o
      }, l.lng = l.lng || n.lng, l.lngs = l.lngs || n.lngs, l.ns = l.ns || n.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || i || n.keyPrefix);
      const u = {
        ...this.options,
        ...l
      };
      typeof l.keyPrefix == "function" && (l.keyPrefix = yr(l.keyPrefix, u));
      const c = this.options.keySeparator || ".";
      let d;
      return l.keyPrefix && Array.isArray(s) ? d = s.map((h) => (typeof h == "function" && (h = yr(h, u)), `${l.keyPrefix}${c}${h}`)) : (typeof s == "function" && (s = yr(s, u)), d = l.keyPrefix ? `${l.keyPrefix}${c}${s}` : s), this.t(d, l);
    };
    return G(e) ? n.lng = e : n.lngs = e, n.ns = t, n.keyPrefix = i, n;
  }
  t(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.translate(...e);
  }
  exists(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const i = t.lng || this.resolvedLanguage || this.languages[0], n = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode")
      return !0;
    const o = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, o);
      if (a !== void 0)
        return a;
    }
    return !!(this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(i, e) && (!n || o(s, e)));
  }
  loadNamespaces(e, t) {
    const i = Yr();
    return this.options.ns ? (G(e) && (e = [e]), e.forEach((n) => {
      this.options.ns.includes(n) || this.options.ns.push(n);
    }), this.loadResources((n) => {
      i.resolve(), t && t(n);
    }), i) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const i = Yr();
    G(e) && (e = [e]);
    const n = this.options.preload || [], s = e.filter((o) => !n.includes(o) && this.services.languageUtils.isSupportedCode(o));
    return s.length ? (this.options.preload = n.concat(s), this.loadResources((o) => {
      i.resolve(), t && t(o);
    }), i) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var n, s;
    if (e || (e = this.resolvedLanguage || (((n = this.languages) == null ? void 0 : n.length) > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    try {
      const o = new Intl.Locale(e);
      if (o && o.getTextInfo) {
        const a = o.getTextInfo();
        if (a && a.direction)
          return a.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = ((s = this.services) == null ? void 0 : s.languageUtils) || new Xo(Nn());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.includes(i.getLanguagePartFromCode(e)) || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    const i = new ai(e, t);
    return i.createInstance = ai.createInstance, i;
  }
  cloneInstance(e = {}, t = Ti) {
    const i = e.forkResourceStore;
    i && delete e.forkResourceStore;
    const n = {
      ...this.options,
      ...e,
      isClone: !0
    }, s = new ai(n);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      s[a] = this[a];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, i) {
      const a = Object.keys(this.store.data).reduce((l, u) => (l[u] = {
        ...this.store.data[u]
      }, l[u] = Object.keys(l[u]).reduce((c, d) => (c[d] = {
        ...l[u][d]
      }, c), l[u]), l), {});
      s.store = new Zo(a, n), s.services.resourceStore = s.store;
    }
    if (e.interpolation) {
      const l = {
        ...Nn().interpolation,
        ...this.options.interpolation,
        ...e.interpolation
      }, u = {
        ...n,
        interpolation: l
      };
      s.services.interpolator = new ta(u);
    }
    return s.translator = new Zi(s.services, n), s.translator.on("*", (a, ...l) => {
      s.emit(a, ...l);
    }), s.init(n, t), s.translator.options = n, s.translator.backendConnector.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, s;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const me = ai.createInstance();
me.createInstance;
me.dir;
me.init;
me.loadResources;
me.reloadResources;
me.use;
me.changeLanguage;
me.getFixedT;
me.t;
me.exists;
me.setDefaultNamespace;
me.hasLoadedNamespace;
me.loadNamespaces;
me.loadLanguages;
const {
  slice: qp,
  forEach: $p
} = [];
function Vp(r) {
  return $p.call(qp.call(arguments, 1), (e) => {
    if (e)
      for (const t in e)
        r[t] === void 0 && (r[t] = e[t]);
  }), r;
}
function jp(r) {
  return typeof r != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some((t) => t.test(r));
}
const na = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Up = function(r, e) {
  const i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    path: "/"
  }, n = encodeURIComponent(e);
  let s = `${r}=${n}`;
  if (i.maxAge > 0) {
    const o = i.maxAge - 0;
    if (Number.isNaN(o))
      throw new Error("maxAge should be a Number");
    s += `; Max-Age=${Math.floor(o)}`;
  }
  if (i.domain) {
    if (!na.test(i.domain))
      throw new TypeError("option domain is invalid");
    s += `; Domain=${i.domain}`;
  }
  if (i.path) {
    if (!na.test(i.path))
      throw new TypeError("option path is invalid");
    s += `; Path=${i.path}`;
  }
  if (i.expires) {
    if (typeof i.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    s += `; Expires=${i.expires.toUTCString()}`;
  }
  if (i.httpOnly && (s += "; HttpOnly"), i.secure && (s += "; Secure"), i.sameSite)
    switch (typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite) {
      case !0:
        s += "; SameSite=Strict";
        break;
      case "lax":
        s += "; SameSite=Lax";
        break;
      case "strict":
        s += "; SameSite=Strict";
        break;
      case "none":
        s += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return s;
}, sa = {
  create(r, e, t, i) {
    let n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    t && (n.expires = /* @__PURE__ */ new Date(), n.expires.setTime(n.expires.getTime() + t * 60 * 1e3)), i && (n.domain = i), document.cookie = Up(r, encodeURIComponent(e), n);
  },
  read(r) {
    const e = `${r}=`, t = document.cookie.split(";");
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      for (; n.charAt(0) === " "; )
        n = n.substring(1, n.length);
      if (n.indexOf(e) === 0)
        return n.substring(e.length, n.length);
    }
    return null;
  },
  remove(r) {
    this.create(r, "", -1);
  }
};
var Hp = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(r) {
    let {
      lookupCookie: e
    } = r;
    if (e && typeof document < "u")
      return sa.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(r, e) {
    let {
      lookupCookie: t,
      cookieMinutes: i,
      cookieDomain: n,
      cookieOptions: s
    } = e;
    t && typeof document < "u" && sa.create(t, r, i, n, s);
  }
}, Gp = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(r) {
    var i;
    let {
      lookupQuerystring: e
    } = r, t;
    if (typeof window < "u") {
      let {
        search: n
      } = window.location;
      !window.location.search && ((i = window.location.hash) == null ? void 0 : i.indexOf("?")) > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
      const o = n.substring(1).split("&");
      for (let a = 0; a < o.length; a++) {
        const l = o[a].indexOf("=");
        l > 0 && o[a].substring(0, l) === e && (t = o[a].substring(l + 1));
      }
    }
    return t;
  }
};
let cr = null;
const oa = () => {
  if (cr !== null)
    return cr;
  try {
    if (cr = typeof window < "u" && window.localStorage !== null, !cr)
      return !1;
    const r = "i18next.translate.boo";
    window.localStorage.setItem(r, "foo"), window.localStorage.removeItem(r);
  } catch {
    cr = !1;
  }
  return cr;
};
var Wp = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(r) {
    let {
      lookupLocalStorage: e
    } = r;
    if (e && oa())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(r, e) {
    let {
      lookupLocalStorage: t
    } = e;
    t && oa() && window.localStorage.setItem(t, r);
  }
};
let dr = null;
const aa = () => {
  if (dr !== null)
    return dr;
  try {
    if (dr = typeof window < "u" && window.sessionStorage !== null, !dr)
      return !1;
    const r = "i18next.translate.boo";
    window.sessionStorage.setItem(r, "foo"), window.sessionStorage.removeItem(r);
  } catch {
    dr = !1;
  }
  return dr;
};
var Yp = {
  name: "sessionStorage",
  lookup(r) {
    let {
      lookupSessionStorage: e
    } = r;
    if (e && aa())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(r, e) {
    let {
      lookupSessionStorage: t
    } = e;
    t && aa() && window.sessionStorage.setItem(t, r);
  }
}, Kp = {
  name: "navigator",
  lookup(r) {
    const e = [];
    if (typeof navigator < "u") {
      const {
        languages: t,
        userLanguage: i,
        language: n
      } = navigator;
      if (t)
        for (let s = 0; s < t.length; s++)
          e.push(t[s]);
      i && e.push(i), n && e.push(n);
    }
    return e.length > 0 ? e : void 0;
  }
}, Zp = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(r) {
    let {
      htmlTag: e
    } = r, t;
    const i = e || (typeof document < "u" ? document.documentElement : null);
    return i && typeof i.getAttribute == "function" && (t = i.getAttribute("lang")), t;
  }
}, Xp = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(r) {
    var n;
    let {
      lookupFromPathIndex: e
    } = r;
    if (typeof window > "u")
      return;
    const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(t) ? (n = t[typeof e == "number" ? e : 0]) == null ? void 0 : n.replace("/", "") : void 0;
  }
}, Jp = {
  name: "subdomain",
  lookup(r) {
    var n, s;
    let {
      lookupFromSubdomainIndex: e
    } = r;
    const t = typeof e == "number" ? e + 1 : 1, i = typeof window < "u" && ((s = (n = window.location) == null ? void 0 : n.hostname) == null ? void 0 : s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (i)
      return i[t];
  }
};
let Fl = !1;
try {
  document.cookie, Fl = !0;
} catch {
}
const Nl = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Fl || Nl.splice(1, 1);
const Qp = () => ({
  order: Nl,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  // cache user language
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'
  convertDetectedLanguage: (r) => r
});
class Ml {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      languageUtils: {}
    }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e, this.options = Vp(t, this.options || {}, Qp()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (n) => n.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(Hp), this.addDetector(Gp), this.addDetector(Wp), this.addDetector(Yp), this.addDetector(Kp), this.addDetector(Zp), this.addDetector(Xp), this.addDetector(Jp);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, t = [];
    return e.forEach((i) => {
      if (this.detectors[i]) {
        let n = this.detectors[i].lookup(this.options);
        n && typeof n == "string" && (n = [n]), n && (t = t.concat(n));
      }
    }), t = t.filter((i) => i != null && !jp(i)).map((i) => this.options.convertDetectedLanguage(i)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
  }
  cacheUserLanguage(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((i) => {
      this.detectors[i] && this.detectors[i].cacheUserLanguage(e, this.options);
    }));
  }
}
Ml.type = "languageDetector";
const e2 = Be(`bm_translation_${Pd}.json`), t2 = async () => {
  const r = await fetch(e2, {
    mode: "cors",
    credentials: "omit"
  });
  if (!r.ok)
    throw new Error(`Failed to fetch translations: ${r.status}`);
  const e = await r.json(), t = Object.fromEntries(Object.entries(e).map(([i, n]) => [i, n]));
  return await me.use(Ml).use(Cd).init({
    debug: !1,
    resources: t,
    supportedLngs: ["en", "en-GB", "en-US", "de", "fr", "es", "it", "nl", "fi", "pl"],
    fallbackLng: "en-GB",
    ns: ["translation"],
    defaultNS: "translation",
    detection: {
      order: ["htmlTag", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "path", "subdomain"]
    },
    nonExplicitSupportedLngs: !0,
    interpolation: {
      escapeValue: !1
    }
  }), me;
}, Pl = class ei {
  constructor() {
    this.initialized = !1, this.compatibleListInitialized = !1, this.currentBike = null, this.activeSubscription = null, this.components = [], this.config = jo;
  }
  // Initialize with optional config
  async initialize(e) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: initialize() called"), this.components = [], this.initialized && this.cleanup(), e && (this.config = {
      ...this.config,
      ...e
    }), this.initializeConfig(), this.service = new Se(this.config.apiUrl, this.config.apiKey, this.config.apiToken, this.config.isShopify), this.initializeActiveSubscription(), localStorage.bm_currentBike && (this.currentBike = JSON.parse(localStorage.bm_currentBike)), await t2(), (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log(`Core: Resolved Language: ${me.resolvedLanguage}`), this.setupEventListeners(), this.registerComponents(), this.initialized = !0, os.value = !0;
    const t = new Event("BM:Initialized");
    document.dispatchEvent(t), (this.config.logLevel === "verbose" || this.config.logLevel === "core") && (console.log("Core: BikeMatrix WebComponent Version: 1.3.15"), console.log("Core: BikeMatrixCore initialized"));
  }
  // Singleton pattern to ensure a single global instance
  static getInstance() {
    return ei.instance || (ei.instance = new ei()), ei.instance;
  }
  registerComponents() {
    const e = ["bikematrix-bikeselector", "bikematrix-productresult", "bikematrix-collectionresult", "bikematrix-compatibilitylabel", "bikematrix-compatiblelist", "bikematrix-bikeselectorbanner", "bikematrix-variantselector"];
    this.components = [], e.forEach((t) => {
      const i = document.getElementsByTagName(t);
      Array.from(i).forEach((n) => {
        this.components.push(n);
      });
    }), (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log(`Core: Registered ${this.components.length} components`);
  }
  resetComponents() {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: resetComponents() called"), this.components.forEach((e) => {
      var t;
      try {
        const i = e.cloneNode(!1);
        e.querySelectorAll("template").forEach((s) => {
          i.appendChild(s.cloneNode(!0));
        }), (t = e.parentNode) == null || t.replaceChild(i, e);
      } catch {
        console.error("Core: Error resetting component", e);
      }
    });
  }
  isInitialized() {
    return this.initialized;
  }
  // Update config without full reinitialization
  updateConfig(e) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: updateConfig() called"), this.config = {
      ...this.config,
      ...e
    }, this.reload(!1);
  }
  // Cleanup without destroying instance
  cleanup() {
    this.removeEventListeners(), Nd();
  }
  // Full destroy for complete cleanup
  async destroy() {
    this.cleanup(), this.service = null, this.currentBike = null, this.activeSubscription = null, this.config = {
      ...jo
    }, this.initialized = !1, os.value = !1, this.resetComponents();
  }
  updateCompatibleList(e = !0) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: updateCompatibleList showCompatibleList: ", e), this.config.showCompatibleList = e, this.initializeConfig(), e && (Ee.value = !0, this.RefreshCompatibleSkus(!0)), this.compatibleListInitialized = !0;
  }
  refresh() {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: refresh() called"), this.ChangeBike();
  }
  reset() {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: reset() called"), this.destroy(), this.initialize();
  }
  reload(e = !0) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: reload() called. shouldReloadConfig: ", e), e && this.initializeConfig(), this.refresh(), this.registerComponents(), this.resetComponents();
  }
  initializeConfig() {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: initializeConfig called");
    const e = document.querySelectorAll('script[type="application/json"][data-bikematrix-config]'), t = JSON.parse(sessionStorage.getItem("bm_diagnostics"));
    e.forEach((i) => {
      if (i != null && i.textContent)
        try {
          this.config = {
            ...this.config,
            ...JSON.parse(i.textContent)
          };
        } catch {
          console.error("Core: Invalid BikeMatrix configuration"), console.log("Core: configScript ", i.textContent);
        }
    }), this.config.showCompatibleList && !this.config.delayCompatibleListInitialization ? this.compatibleListInitialized = !0 : this.config.showCompatibleList && this.config.delayCompatibleListInitialization && !this.compatibleListInitialized && (Ee.value = !0), t != null && t.includes("verbose") ? this.config.logLevel = "verbose" : t != null && t.includes("core") && (this.config.logLevel = "core"), t != null && t.includes("virtualWorkshop") && (this.config.virtualWorkshop = !0), t != null && t.includes("subscribtion") && (this.activeSubscription = !0), t != null && t.includes("all") && (this.config.logLevel = "verbose", this.config.virtualWorkshop = !0, this.activeSubscription = !0), this.config.logLevel === "verbose" && console.log("initializeConfig ", JSON.stringify(this.config, null, 2));
  }
  initializeActiveSubscription() {
    const e = sessionStorage.getItem("bm_activeSubscription");
    if ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && (console.log("Core: Not Shopify: ", !this.config.isShopify), console.log("Core: Session Active Subscription: ", e), console.log("Core: Design Mode: ", this.config.designMode)), !this.config.isShopify) {
      this.activeSubscription = !0;
      return;
    }
    this.activeSubscription = this.config.designMode || e === "true", e || this.service.getActiveSubscription(this.updateActiveSubscription.bind(this));
  }
  setupEventListeners() {
    document.addEventListener("BikeMatrix:RefreshCompatibleSkus", (e) => {
      this.RefreshCompatibleSkus().then(() => {
        document.dispatchEvent(new Event("RefreshCompatibility", {
          bubbles: !0,
          composed: !0
        }));
      });
    }), document.addEventListener("on:facet-filters:updated", this.handleRefreshCompatibleSkus.bind(this)), document.addEventListener("BikeChanging", this.handleBikeChanging.bind(this));
  }
  removeEventListeners() {
    document.removeEventListener("BikeMatrix:RefreshCompatibleSkus", this.handleRefreshCompatibleSkus), document.removeEventListener("on:facet-filters:updated", this.handleRefreshCompatibleSkus), document.removeEventListener("BikeChanging", this.handleBikeChanging);
  }
  async handleRefreshCompatibleSkus(e) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: Listener RefreshCompatibleSkus ..."), this.RefreshCompatibleSkus().then(() => {
      document.dispatchEvent(new Event("RefreshCompatibility", {
        bubbles: !0,
        composed: !0
      }));
    });
  }
  async handleBikeChanging(e) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: Listener BikeChanging (pre) ..."), this.ChangeBike();
  }
  getConfig() {
    return this.config;
  }
  getActiveSubscription() {
    return this.activeSubscription;
  }
  getCurrentBike() {
    return this.currentBike;
  }
  updateSku(e) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: updateSku() called with sku: ", e);
    const t = document.querySelector("bikematrix-productresult[data-sku]"), i = document.querySelector("bikematrix-variantselector[data-sku]");
    t && t.setAttribute("data-sku", e), i && i.setAttribute("data-sku", e), this.config.sku = e;
  }
  // ===== Legacy methods ===== //
  ResetSelectedBikeIndicator() {
    var e, t;
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: ResetSelectedBikeIndicator() Method Called"), this.currentBike === null ? (e = window.bm_selectBikeButton) == null || e.classList.remove("show-selected") : (t = window.bm_selectBikeButton) == null || t.classList.add("show-selected");
  }
  ChangeBike() {
    if ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: ChangeBike() Method Called"), hr.value === !0 || Qe.value === !0) {
      console.log("Core: ChangeBike loading, return");
      return;
    }
    hr.value = !0, Ee.value = !0, Qe.value = !0, xr.value = [], _r.value = [], (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: ChangeBike updateBikeSignal..."), this.updateBikeSignal().then(() => {
      this.config.logLevel === "verbose" ? console.log("Core: Bike Signal Updated: ", JSON.stringify(Z.value, null, 2)) : this.config.logLevel === "core" && console.log("Core: Bike Signal Updated"), this.ResetSelectedBikeIndicator(), this.RefreshCompatibleSkus().then(() => {
        document.dispatchEvent(new Event("RefreshCompatibility", {
          bubbles: !0,
          composed: !0
        })), document.dispatchEvent(new Event("BikeChanged", {
          bubbles: !0,
          composed: !0
        }));
      });
    });
  }
  async RefreshCompatibleSkus(e = !1) {
    var i, n;
    const t = `${(i = Z.value) == null ? void 0 : i.key}:${this.config.currentCollectionHandle}:${Md}`;
    switch ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: RefreshCompatibleSkus() called. Current Collection Bike Key: ", t), this.config.pageType) {
      case "collection":
        const s = !!Z.value && !Z.value.compatibleCollections.error && ((n = Z.value.compatibleCollections) == null ? void 0 : n.some((a) => a.handle === this.config.currentCollectionHandle)), o = this.config.showCompatibleList && (this.compatibleListInitialized || e);
        (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: RefreshCompatibleSkus. hasCompatibleCollection: ", s, " showCompatibleList: ", this.config.showCompatibleList, " compatibleListInitialized: ", this.compatibleListInitialized, " CompatibleListLoadingSignal: ", Ee.value, " onlyCompatibleList: ", e, " delayCompatibleListInitialization: ", this.config.delayCompatibleListInitialization, " shouldRefreshCompatibleListSkus: ", o), s && (e || await this.RefreshCollectionPageSkus(t), o && ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: RefreshCompatibleSkus refreshing compatible list skus for collection page..."), await this.RefreshCollectionListSkus(t))), hr.value = !1, Qe.value = !1, o && (Ee.value = !1);
        break;
      case "search":
      case "index":
        hr.value = !1, Ee.value = !1, (this.config.pageType === "index" && this.config.showHomePageCollection || this.config.pageType === "search" && this.config.showSearchPageCollection) && await this.RefreshCollectionPageSkus(t), Qe.value = !1;
        break;
      default:
        hr.value = !1, Ee.value = !1, Qe.value = !1;
        break;
    }
  }
  async RefreshCollectionPageSkus(e) {
    var o, a;
    let t = document.getElementsByTagName("bikematrix-collectionresult"), n = Array.from(t).map((l) => {
      const u = this.config.skuField === "barcode" ? l.getAttribute("data-product-barcodes") : this.config.skuField === "metafield" ? l.getAttribute("data-product-metafields") : l.getAttribute("data-product-skus") || "";
      return u == null ? void 0 : u.split(",").filter((c) => !!c);
    }).flat();
    this.config.logLevel === "verbose" && console.log("Refresh Collection Page SKUs. SKUs: ", JSON.stringify(n), null, 2);
    var s = ((o = jt()) == null ? void 0 : o.language) || "en-GB";
    if (n && n.length > 0) {
      const l = await this.service.checkSkusCompatibilityWithResults((a = Z.value) == null ? void 0 : a.key, n, s, "CollectionResult", this.config.currentCollectionHandle);
      l.success ? _r.value = l.data : (Wi.value = !0, this.config.logLevel === "verbose" && console.log("Compatible List Error: ", l.logError));
    } else
      _r.value = [];
  }
  async RefreshCollectionListSkus(e) {
    var n, s;
    var t = JSON.parse(sessionStorage.getItem(e));
    if (t)
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from Session: ", JSON.stringify(t), null, 2), xr.value = t;
    else {
      const o = Object.values(this.config.products || {}).map((c) => c.skus).flat();
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(o), null, 2);
      var i = ((n = jt()) == null ? void 0 : n.language) || "en-GB";
      const a = new AbortController(), l = a.signal, u = () => a.abort();
      window.addEventListener("beforeunload", u);
      try {
        if (!((s = Z.value) != null && s.key))
          throw new Error("BikeSignal key is undefined");
        const c = await this.service.checkSkusCompatibilityWithResults(Z.value.key, o, i, "CompatibleList", this.config.currentCollectionHandle, {
          signal: l
        });
        if (this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(c)), l.aborted) {
          this.config.logLevel === "verbose" && console.log("function RefreshCompatibleSkus() operation aborted");
          return;
        }
        c.success ? (sessionStorage.setItem(e, JSON.stringify(c.data)), xr.value = c.data) : (Wi.value = !0, this.config.logLevel === "verbose" && console.log("Compatible List Error: ", c.logError));
      } catch (c) {
        c.name === "AbortError" ? console.log("function RefreshCompatibleSkus() fetch aborted") : console.error("function RefreshCompatibleSkus() fetch error", c);
      } finally {
        window.removeEventListener("beforeunload", u);
      }
    }
  }
  updateActiveSubscription(e) {
    this.config.logLevel === "verbose" && console.log("updateActiveSubscription data: ", e);
    const t = !!(e != null && e.activeSubscription);
    sessionStorage.setItem("bm_activeSubscription", JSON.stringify(t)), this.activeSubscription = t;
  }
  async updateBikeSignal() {
    const e = me.resolvedLanguage || me.language || "en-GB";
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: updateBikeSignal() called");
    const t = localStorage.getItem(qs) || "null", i = JSON.parse(t);
    if (this.currentBike = i, i == null) {
      Z.value = null;
      return;
    }
    const n = await El(i == null ? void 0 : i.brandId, e);
    !Array.isArray(n) && n.error ? (i.compatibleCollections = [], Z.value = i) : (i.compatibleCollections = n, Z.value = i), this.config.logLevel === "verbose" ? console.log("Core: Bike Changed: ", JSON.stringify(Z.value, null, 2)) : this.config.logLevel === "core" && console.log("Core: Bike Changed");
  }
};
Pl.instance = null;
let r2 = Pl;
const gi = (r) => /* @__PURE__ */ V("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M1.53553 8.60658L5.07107 5.07104M5.07107 5.07104L8.6066 1.53551M5.07107 5.07104L8.6066 8.60658M5.07107 5.07104L1.53553 1.53551", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" })), i2 = `:host .overlay{opacity:0;visibility:hidden}@media (min-width: 640px){:host .modal{opacity:0;transform:scale(.9);visibility:hidden}}@media not all and (min-width: 640px){:host .modal{transform:translateY(100%);visibility:hidden}}
`;
function xt(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ol(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ue = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Br = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Vs, _e, ce, Ze = 1e8, oe = 1 / Ze, cs = Math.PI * 2, n2 = cs / 4, s2 = 0, Il = Math.sqrt, o2 = Math.cos, a2 = Math.sin, xe = function(e) {
  return typeof e == "string";
}, he = function(e) {
  return typeof e == "function";
}, At = function(e) {
  return typeof e == "number";
}, js = function(e) {
  return typeof e > "u";
}, ft = function(e) {
  return typeof e == "object";
}, Fe = function(e) {
  return e !== !1;
}, Us = function() {
  return typeof window < "u";
}, Fi = function(e) {
  return he(e) || xe(e);
}, Rl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, De = Array.isArray, ds = /(?:-?\.?\d|\.)+/gi, zl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, vr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Mn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ql = /[+-]=-?[.\d]+/, $l = /[^,'"\[\]\s]+/gi, l2 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, pe, nt, ps, Hs, He = {}, Xi = {}, Vl, jl = function(e) {
  return (Xi = Lr(e, He)) && Oe;
}, Gs = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, mi = function(e, t) {
  return !t && console.warn(e);
}, Ul = function(e, t) {
  return e && (He[e] = t) && Xi && (Xi[e] = t) || He;
}, bi = function() {
  return 0;
}, u2 = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, zi = {
  suppressEvents: !0,
  kill: !1
}, c2 = {
  suppressEvents: !0
}, Ws = {}, Rt = [], fs = {}, Hl, qe = {}, Pn = {}, la = 30, qi = [], Ys = "", Ks = function(e) {
  var t = e[0], i, n;
  if (ft(t) || he(t) || (e = [e]), !(i = (t._gsap || {}).harness)) {
    for (n = qi.length; n-- && !qi[n].targetTest(t); )
      ;
    i = qi[n];
  }
  for (n = e.length; n--; )
    e[n] && (e[n]._gsap || (e[n]._gsap = new gu(e[n], i))) || e.splice(n, 1);
  return e;
}, tr = function(e) {
  return e._gsap || Ks(Xe(e))[0]._gsap;
}, Gl = function(e, t, i) {
  return (i = e[t]) && he(i) ? e[t]() : js(i) && e.getAttribute && e.getAttribute(t) || i;
}, Ne = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, ge = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, ve = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Cr = function(e, t) {
  var i = t.charAt(0), n = parseFloat(t.substr(2));
  return e = parseFloat(e), i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n;
}, d2 = function(e, t) {
  for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; )
    ;
  return n < i;
}, Ji = function() {
  var e = Rt.length, t = Rt.slice(0), i, n;
  for (fs = {}, Rt.length = 0, i = 0; i < e; i++)
    n = t[i], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, Wl = function(e, t, i, n) {
  Rt.length && !_e && Ji(), e.render(t, i, n || _e && t < 0 && (e._initted || e._startAt)), Rt.length && !_e && Ji();
}, Yl = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match($l).length < 2 ? t : xe(e) ? e.trim() : e;
}, Kl = function(e) {
  return e;
}, Ge = function(e, t) {
  for (var i in t)
    i in e || (e[i] = t[i]);
  return e;
}, p2 = function(e) {
  return function(t, i) {
    for (var n in i)
      n in t || n === "duration" && e || n === "ease" || (t[n] = i[n]);
  };
}, Lr = function(e, t) {
  for (var i in t)
    e[i] = t[i];
  return e;
}, ua = function r(e, t) {
  for (var i in t)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = ft(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
  return e;
}, Qi = function(e, t) {
  var i = {}, n;
  for (n in e)
    n in t || (i[n] = e[n]);
  return i;
}, li = function(e) {
  var t = e.parent || pe, i = e.keyframes ? p2(De(e.keyframes)) : Ge;
  if (Fe(e.inherit))
    for (; t; )
      i(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, f2 = function(e, t) {
  for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; )
    ;
  return i < 0;
}, Zl = function(e, t, i, n, s) {
  i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
  var o = e[n], a;
  if (s)
    for (a = t[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = o, t.parent = t._dp = e, t;
}, _n = function(e, t, i, n) {
  i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
  var s = t._prev, o = t._next;
  s ? s._next = o : e[i] === t && (e[i] = o), o ? o._prev = s : e[n] === t && (e[n] = s), t._next = t._prev = t.parent = null;
}, Ut = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, rr = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var i = e; i; )
      i._dirty = 1, i = i.parent;
  return e;
}, h2 = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, hs = function(e, t, i, n) {
  return e._startAt && (_e ? e._startAt.revert(zi) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n));
}, g2 = function r(e) {
  return !e || e._ts && r(e.parent);
}, ca = function(e) {
  return e._repeat ? Tr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Tr = function(e, t) {
  var i = Math.floor(e = ve(e / t));
  return e && i === e ? i - 1 : i;
}, en = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, yn = function(e) {
  return e._end = ve(e._start + (e._tDur / Math.abs(e._ts || e._rts || oe) || 0));
}, Cn = function(e, t) {
  var i = e._dp;
  return i && i.smoothChildTiming && e._ts && (e._start = ve(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), yn(e), i._dirty || rr(i, e)), e;
}, Xl = function(e, t) {
  var i;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = en(e.rawTime(), t), (!t._dur || Ai(0, t.totalDuration(), i) - t._tTime > oe) && t.render(i, !0)), rr(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (i = e; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    e._zTime = -oe;
  }
}, st = function(e, t, i, n) {
  return t.parent && Ut(t), t._start = ve((At(i) ? i : i || e !== pe ? Ye(e, i, t) : e._time) + t._delay), t._end = ve(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Zl(e, t, "_first", "_last", e._sort ? "_start" : 0), gs(t) || (e._recent = t), n || Xl(e, t), e._ts < 0 && Cn(e, e._tTime), e;
}, Jl = function(e, t) {
  return (He.ScrollTrigger || Gs("scrollTrigger", t)) && He.ScrollTrigger.create(t, e);
}, Ql = function(e, t, i, n, s) {
  if (Xs(e, t, s), !e._initted)
    return 1;
  if (!i && e._pt && !_e && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Hl !== Ve.frame)
    return Rt.push(e), e._lazy = [s, n], 1;
}, m2 = function r(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
}, gs = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, b2 = function(e, t, i, n) {
  var s = e.ratio, o = t < 0 || !t && (!e._start && m2(e) && !(!e._initted && gs(e)) || (e._ts < 0 || e._dp._ts < 0) && !gs(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, d;
  if (a && e._repeat && (l = Ai(0, e._tDur, t), c = Tr(l, a), e._yoyo && c & 1 && (o = 1 - o), c !== Tr(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || _e || n || e._zTime === oe || !t && e._zTime) {
    if (!e._initted && Ql(e, t, n, i, l))
      return;
    for (d = e._zTime, e._zTime = t || (i ? oe : 0), i || (i = t && !d), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u; )
      u.r(o, u.d), u = u._next;
    t < 0 && hs(e, t, i, !0), e._onUpdate && !i && je(e, "onUpdate"), l && e._repeat && !i && e.parent && je(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Ut(e, 1), !i && !_e && (je(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = t);
}, v2 = function(e, t, i) {
  var n;
  if (i > t)
    for (n = e._first; n && n._start <= i; ) {
      if (n.data === "isPause" && n._start > t)
        return n;
      n = n._next;
    }
  else
    for (n = e._last; n && n._start >= i; ) {
      if (n.data === "isPause" && n._start < t)
        return n;
      n = n._prev;
    }
}, Fr = function(e, t, i, n) {
  var s = e._repeat, o = ve(t) || 0, a = e._tTime / e._tDur;
  return a && !n && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : ve(o * (s + 1) + e._rDelay * s) : o, a > 0 && !n && Cn(e, e._tTime = e._tDur * a), e.parent && yn(e), i || rr(e.parent, e), e;
}, da = function(e) {
  return e instanceof Le ? rr(e) : Fr(e, e._dur);
}, w2 = {
  _start: 0,
  endTime: bi,
  totalDuration: bi
}, Ye = function r(e, t, i) {
  var n = e.labels, s = e._recent || w2, o = e.duration() >= Ze ? s.endTime(!1) : e._dur, a, l, u;
  return xe(t) && (isNaN(t) || t in n) ? (l = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? s : i).totalDuration() / 100 : 1)) : a < 0 ? (t in n || (n[t] = o), n[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && i && (l = l / 100 * (De(i) ? i[0] : i).totalDuration()), a > 1 ? r(e, t.substr(0, a - 1), i) + l : o + l)) : t == null ? o : +t;
}, ui = function(e, t, i) {
  var n = At(t[1]), s = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
  if (n && (o.duration = t[1]), o.parent = i, e) {
    for (a = o, l = i; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = Fe(l.vars.inherit) && l.parent;
    o.immediateRender = Fe(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
  }
  return new be(t[0], o, t[s + 1]);
}, Gt = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Ai = function(e, t, i) {
  return i < e ? e : i > t ? t : i;
}, Ce = function(e, t) {
  return !xe(e) || !(t = l2.exec(e)) ? "" : t[1];
}, x2 = function(e, t, i) {
  return Gt(i, function(n) {
    return Ai(e, t, n);
  });
}, ms = [].slice, eu = function(e, t) {
  return e && ft(e) && "length" in e && (!t && !e.length || e.length - 1 in e && ft(e[0])) && !e.nodeType && e !== nt;
}, _2 = function(e, t, i) {
  return i === void 0 && (i = []), e.forEach(function(n) {
    var s;
    return xe(n) && !t || eu(n, 1) ? (s = i).push.apply(s, Xe(n)) : i.push(n);
  }) || i;
}, Xe = function(e, t, i) {
  return ce && !t && ce.selector ? ce.selector(e) : xe(e) && !i && (ps || !Nr()) ? ms.call((t || Hs).querySelectorAll(e), 0) : De(e) ? _2(e, i) : eu(e) ? ms.call(e, 0) : e ? [e] : [];
}, bs = function(e) {
  return e = Xe(e)[0] || mi("Invalid scope") || {}, function(t) {
    var i = e.current || e.nativeElement || e;
    return Xe(t, i.querySelectorAll ? i : i === e ? mi("Invalid scope") || Hs.createElement("div") : e);
  };
}, tu = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, ru = function(e) {
  if (he(e))
    return e;
  var t = ft(e) ? e : {
    each: e
  }, i = ir(t.ease), n = t.from || 0, s = parseFloat(t.base) || 0, o = {}, a = n > 0 && n < 1, l = isNaN(n) || a, u = t.axis, c = n, d = n;
  return xe(n) ? c = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !a && l && (c = n[0], d = n[1]), function(h, f, b) {
    var v = (b || t).length, w = o[v], m, g, x, _, y, k, A, C, D;
    if (!w) {
      if (D = t.grid === "auto" ? 0 : (t.grid || [1, Ze])[1], !D) {
        for (A = -Ze; A < (A = b[D++].getBoundingClientRect().left) && D < v; )
          ;
        D < v && D--;
      }
      for (w = o[v] = [], m = l ? Math.min(D, v) * c - 0.5 : n % D, g = D === Ze ? 0 : l ? v * d / D - 0.5 : n / D | 0, A = 0, C = Ze, k = 0; k < v; k++)
        x = k % D - m, _ = g - (k / D | 0), w[k] = y = u ? Math.abs(u === "y" ? _ : x) : Il(x * x + _ * _), y > A && (A = y), y < C && (C = y);
      n === "random" && tu(w), w.max = A - C, w.min = C, w.v = v = (parseFloat(t.amount) || parseFloat(t.each) * (D > v ? v - 1 : u ? u === "y" ? v / D : D : Math.max(D, v / D)) || 0) * (n === "edges" ? -1 : 1), w.b = v < 0 ? s - v : s, w.u = Ce(t.amount || t.each) || 0, i = i && v < 0 ? pu(i) : i;
    }
    return v = (w[h] - w.min) / w.max || 0, ve(w.b + (i ? i(v) : v) * w.v) + w.u;
  };
}, vs = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(i) {
    var n = ve(Math.round(parseFloat(i) / e) * e * t);
    return (n - n % 1) / t + (At(i) ? 0 : Ce(i));
  };
}, iu = function(e, t) {
  var i = De(e), n, s;
  return !i && ft(e) && (n = i = e.radius || Ze, e.values ? (e = Xe(e.values), (s = !At(e[0])) && (n *= n)) : e = vs(e.increment)), Gt(t, i ? he(e) ? function(o) {
    return s = e(o), Math.abs(s - o) <= n ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = Ze, c = 0, d = e.length, h, f; d--; )
      s ? (h = e[d].x - a, f = e[d].y - l, h = h * h + f * f) : h = Math.abs(e[d] - a), h < u && (u = h, c = d);
    return c = !n || u <= n ? e[c] : o, s || c === o || At(o) ? c : c + Ce(o);
  } : vs(e));
}, nu = function(e, t, i, n) {
  return Gt(De(e) ? !t : i === !0 ? !!(i = 0) : !n, function() {
    return De(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) * i * n) / n;
  });
}, y2 = function() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return function(n) {
    return t.reduce(function(s, o) {
      return o(s);
    }, n);
  };
}, C2 = function(e, t) {
  return function(i) {
    return e(parseFloat(i)) + (t || Ce(i));
  };
}, k2 = function(e, t, i) {
  return ou(e, t, 0, 1, i);
}, su = function(e, t, i) {
  return Gt(i, function(n) {
    return e[~~t(n)];
  });
}, D2 = function r(e, t, i) {
  var n = t - e;
  return De(e) ? su(e, r(0, e.length), t) : Gt(i, function(s) {
    return (n + (s - e) % n) % n + e;
  });
}, A2 = function r(e, t, i) {
  var n = t - e, s = n * 2;
  return De(e) ? su(e, r(0, e.length - 1), t) : Gt(i, function(o) {
    return o = (s + (o - e) % s) % s || 0, e + (o > n ? s - o : o);
  });
}, vi = function(e) {
  for (var t = 0, i = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
    o = e.indexOf(")", n), a = e.charAt(n + 7) === "[", s = e.substr(n + 7, o - n - 7).match(a ? $l : ds), i += e.substr(t, n - t) + nu(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), t = o + 1;
  return i + e.substr(t, e.length - t);
}, ou = function(e, t, i, n, s) {
  var o = t - e, a = n - i;
  return Gt(s, function(l) {
    return i + ((l - e) / o * a || 0);
  });
}, S2 = function r(e, t, i, n) {
  var s = isNaN(e + t) ? 0 : function(f) {
    return (1 - f) * e + f * t;
  };
  if (!s) {
    var o = xe(e), a = {}, l, u, c, d, h;
    if (i === !0 && (n = 1) && (i = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (De(e) && !De(t)) {
      for (c = [], d = e.length, h = d - 2, u = 1; u < d; u++)
        c.push(r(e[u - 1], e[u]));
      d--, s = function(b) {
        b *= d;
        var v = Math.min(h, ~~b);
        return c[v](b - v);
      }, i = t;
    } else
      n || (e = Lr(De(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        Zs.call(a, e, l, "get", t[l]);
      s = function(b) {
        return eo(b, a) || (o ? e.p : e);
      };
    }
  }
  return Gt(i, s);
}, pa = function(e, t, i) {
  var n = e.labels, s = Ze, o, a, l;
  for (o in n)
    a = n[o] - t, a < 0 == !!i && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, je = function(e, t, i) {
  var n = e.vars, s = n[t], o = ce, a = e._ctx, l, u, c;
  if (s)
    return l = n[t + "Params"], u = n.callbackScope || e, i && Rt.length && Ji(), a && (ce = a), c = l ? s.apply(u, l) : s.call(u), ce = o, c;
}, ti = function(e) {
  return Ut(e), e.scrollTrigger && e.scrollTrigger.kill(!!_e), e.progress() < 1 && je(e, "onInterrupt"), e;
}, wr, au = [], lu = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Us() || e.headless) {
      var t = e.name, i = he(e), n = t && !i && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: bi,
        render: eo,
        add: Zs,
        kill: j2,
        modifier: V2,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Qs,
        aliases: {},
        register: 0
      };
      if (Nr(), e !== n) {
        if (qe[t])
          return;
        Ge(n, Ge(Qi(e, s), o)), Lr(n.prototype, Lr(s, Qi(e, o))), qe[n.prop = t] = n, e.targetTest && (qi.push(n), Ws[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Ul(t, n), e.register && e.register(Oe, n, Me);
    } else
      au.push(e);
}, ne = 255, ri = {
  aqua: [0, ne, ne],
  lime: [0, ne, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ne],
  navy: [0, 0, 128],
  white: [ne, ne, ne],
  olive: [128, 128, 0],
  yellow: [ne, ne, 0],
  orange: [ne, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ne, 0, 0],
  pink: [ne, 192, 203],
  cyan: [0, ne, ne],
  transparent: [ne, ne, ne, 0]
}, On = function(e, t, i) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (i - t) * e * 6 : e < 0.5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * ne + 0.5 | 0;
}, uu = function(e, t, i) {
  var n = e ? At(e) ? [e >> 16, e >> 8 & ne, e & ne] : 0 : ri.black, s, o, a, l, u, c, d, h, f, b;
  if (!n) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ri[e])
      n = ri[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & ne, n & ne, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & ne, e & ne];
    } else if (e.substr(0, 3) === "hsl") {
      if (n = b = e.match(ds), !t)
        l = +n[0] % 360 / 360, u = +n[1] / 100, c = +n[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, s = c * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = On(l + 1 / 3, s, o), n[1] = On(l, s, o), n[2] = On(l - 1 / 3, s, o);
      else if (~e.indexOf("="))
        return n = e.match(zl), i && n.length < 4 && (n[3] = 1), n;
    } else
      n = e.match(ds) || ri.transparent;
    n = n.map(Number);
  }
  return t && !b && (s = n[0] / ne, o = n[1] / ne, a = n[2] / ne, d = Math.max(s, o, a), h = Math.min(s, o, a), c = (d + h) / 2, d === h ? l = u = 0 : (f = d - h, u = c > 0.5 ? f / (2 - d - h) : f / (d + h), l = d === s ? (o - a) / f + (o < a ? 6 : 0) : d === o ? (a - s) / f + 2 : (s - o) / f + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(u * 100 + 0.5), n[2] = ~~(c * 100 + 0.5)), i && n.length < 4 && (n[3] = 1), n;
}, cu = function(e) {
  var t = [], i = [], n = -1;
  return e.split(zt).forEach(function(s) {
    var o = s.match(vr) || [];
    t.push.apply(t, o), i.push(n += o.length + 1);
  }), t.c = i, t;
}, fa = function(e, t, i) {
  var n = "", s = (e + n).match(zt), o = t ? "hsla(" : "rgba(", a = 0, l, u, c, d;
  if (!s)
    return e;
  if (s = s.map(function(h) {
    return (h = uu(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), i && (c = cu(e), l = i.c, l.join(n) !== c.c.join(n)))
    for (u = e.replace(zt, "1").split(vr), d = u.length - 1; a < d; a++)
      n += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : i).shift());
  if (!u)
    for (u = e.split(zt), d = u.length - 1; a < d; a++)
      n += u[a] + s[a];
  return n + u[d];
}, zt = function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in ri)
    r += "|" + e + "\\b";
  return new RegExp(r + ")", "gi");
}(), E2 = /hsl[a]?\(/, du = function(e) {
  var t = e.join(" "), i;
  if (zt.lastIndex = 0, zt.test(t))
    return i = E2.test(t), e[1] = fa(e[1], i), e[0] = fa(e[0], i, cu(e[1])), !0;
}, wi, Ve = function() {
  var r = Date.now, e = 500, t = 33, i = r(), n = i, s = 1e3 / 240, o = s, a = [], l, u, c, d, h, f, b = function v(w) {
    var m = r() - n, g = w === !0, x, _, y, k;
    if ((m > e || m < 0) && (i += m - t), n += m, y = n - i, x = y - o, (x > 0 || g) && (k = ++d.frame, h = y - d.time * 1e3, d.time = y = y / 1e3, o += x + (x >= s ? 4 : s - x), _ = 1), g || (l = u(v)), _)
      for (f = 0; f < a.length; f++)
        a[f](y, h, k, w);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      b(!0);
    },
    deltaRatio: function(w) {
      return h / (1e3 / (w || 60));
    },
    wake: function() {
      Vl && (!ps && Us() && (nt = ps = window, Hs = nt.document || {}, He.gsap = Oe, (nt.gsapVersions || (nt.gsapVersions = [])).push(Oe.version), jl(Xi || nt.GreenSockGlobals || !nt.gsap && nt || {}), au.forEach(lu)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), u = c || function(w) {
        return setTimeout(w, o - d.time * 1e3 + 1 | 0);
      }, wi = 1, b(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), wi = 0, u = bi;
    },
    lagSmoothing: function(w, m) {
      e = w || 1 / 0, t = Math.min(m || 33, e);
    },
    fps: function(w) {
      s = 1e3 / (w || 240), o = d.time * 1e3 + s;
    },
    add: function(w, m, g) {
      var x = m ? function(_, y, k, A) {
        w(_, y, k, A), d.remove(x);
      } : w;
      return d.remove(w), a[g ? "unshift" : "push"](x), Nr(), x;
    },
    remove: function(w, m) {
      ~(m = a.indexOf(w)) && a.splice(m, 1) && f >= m && f--;
    },
    _listeners: a
  }, d;
}(), Nr = function() {
  return !wi && Ve.wake();
}, J = {}, B2 = /^[\d.\-M][\d.\-,\s]/, L2 = /["']/g, T2 = function(e) {
  for (var t = {}, i = e.substr(1, e.length - 3).split(":"), n = i[0], s = 1, o = i.length, a, l, u; s < o; s++)
    l = i[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), t[n] = isNaN(u) ? u.replace(L2, "").trim() : +u, n = l.substr(a + 1).trim();
  return t;
}, F2 = function(e) {
  var t = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", t);
  return e.substring(t, ~n && n < i ? e.indexOf(")", i + 1) : i);
}, N2 = function(e) {
  var t = (e + "").split("("), i = J[t[0]];
  return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [T2(t[1])] : F2(e).split(",").map(Yl)) : J._CE && B2.test(e) ? J._CE("", e) : i;
}, pu = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, fu = function r(e, t) {
  for (var i = e._first, n; i; )
    i instanceof Le ? r(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? r(i.timeline, t) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = t)), i = i._next;
}, ir = function(e, t) {
  return e && (he(e) ? e : J[e] || N2(e)) || t;
}, ar = function(e, t, i, n) {
  i === void 0 && (i = function(l) {
    return 1 - t(1 - l);
  }), n === void 0 && (n = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: t,
    easeOut: i,
    easeInOut: n
  }, o;
  return Ne(e, function(a) {
    J[a] = He[a] = s, J[o = a.toLowerCase()] = i;
    for (var l in s)
      J[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = J[a + "." + l] = s[l];
  }), s;
}, hu = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, In = function r(e, t, i) {
  var n = t >= 1 ? t : 1, s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = s / cs * (Math.asin(1 / n) || 0), a = function(c) {
    return c === 1 ? 1 : n * Math.pow(2, -10 * c) * a2((c - o) * s) + 1;
  }, l = e === "out" ? a : e === "in" ? function(u) {
    return 1 - a(1 - u);
  } : hu(a);
  return s = cs / s, l.config = function(u, c) {
    return r(e, u, c);
  }, l;
}, Rn = function r(e, t) {
  t === void 0 && (t = 1.70158);
  var i = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, n = e === "out" ? i : e === "in" ? function(s) {
    return 1 - i(1 - s);
  } : hu(i);
  return n.config = function(s) {
    return r(e, s);
  }, n;
};
Ne("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
  var t = e < 5 ? e + 1 : e;
  ar(r + ",Power" + (t - 1), e ? function(i) {
    return Math.pow(i, t);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, t);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2;
  });
});
J.Linear.easeNone = J.none = J.Linear.easeIn;
ar("Elastic", In("in"), In("out"), In());
(function(r, e) {
  var t = 1 / e, i = 2 * t, n = 2.5 * t, s = function(a) {
    return a < t ? r * a * a : a < i ? r * Math.pow(a - 1.5 / e, 2) + 0.75 : a < n ? r * (a -= 2.25 / e) * a + 0.9375 : r * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  ar("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
ar("Expo", function(r) {
  return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
});
ar("Circ", function(r) {
  return -(Il(1 - r * r) - 1);
});
ar("Sine", function(r) {
  return r === 1 ? 1 : -o2(r * n2) + 1;
});
ar("Back", Rn("in"), Rn("out"), Rn());
J.SteppedEase = J.steps = He.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var i = 1 / e, n = e + (t ? 0 : 1), s = t ? 1 : 0, o = 1 - oe;
    return function(a) {
      return ((n * Ai(0, o, a) | 0) + s) * i;
    };
  }
};
Br.ease = J["quad.out"];
Ne("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return Ys += r + "," + r + "Params,";
});
var gu = function(e, t) {
  this.id = s2++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Gl, this.set = t ? t.getSetter : Qs;
}, xi = /* @__PURE__ */ function() {
  function r(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Fr(this, +t.duration, 1, 1), this.data = t.data, ce && (this._ctx = ce, ce.data.push(this)), wi || Ve.wake();
  }
  var e = r.prototype;
  return e.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, e.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Fr(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(i, n) {
    if (Nr(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Cn(this, i), !s._dp || s.parent || Xl(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && st(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !n || this._initted && Math.abs(this._zTime) === oe || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Wl(this, i, n)), this;
  }, e.time = function(i, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + ca(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), n) : this._time;
  }, e.totalProgress = function(i, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(i, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + ca(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(i, n) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * s, n) : this._repeat ? Tr(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(i, n) {
    if (!arguments.length)
      return this._rts === -oe ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var s = this.parent && this._ts ? en(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -oe ? 0 : this._rts, this.totalTime(Ai(-Math.abs(this._delay), this._tDur, s), n !== !1), yn(this), h2(this);
  }, e.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Nr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== oe && (this._tTime -= oe)))), this) : this._ps;
  }, e.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && st(n, this, i - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(i) {
    return this._start + (Fe(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(i) {
    var n = this.parent || this._dp;
    return n ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? en(n.rawTime(i), this) : this._tTime : this._tTime;
  }, e.revert = function(i) {
    i === void 0 && (i = c2);
    var n = _e;
    return _e = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), _e = n, this;
  }, e.globalTime = function(i) {
    for (var n = this, s = arguments.length ? i : n.rawTime(); n; )
      s = n._start + s / (Math.abs(n._ts) || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : s;
  }, e.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, da(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(i) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = i, da(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, e.seek = function(i, n) {
    return this.totalTime(Ye(this, i), Fe(n));
  }, e.restart = function(i, n) {
    return this.play().totalTime(i ? -this._delay : 0, Fe(n)), this._dur || (this._zTime = -oe), this;
  }, e.play = function(i, n) {
    return i != null && this.seek(i, n), this.reversed(!1).paused(!1);
  }, e.reverse = function(i, n) {
    return i != null && this.seek(i || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, e.pause = function(i, n) {
    return i != null && this.seek(i, n), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -oe : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -oe, this;
  }, e.isActive = function() {
    var i = this.parent || this._dp, n = this._start, s;
    return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(!0)) >= n && s < this.endTime(!0) - oe);
  }, e.eventCallback = function(i, n, s) {
    var o = this.vars;
    return arguments.length > 1 ? (n ? (o[i] = n, s && (o[i + "Params"] = s), i === "onUpdate" && (this._onUpdate = n)) : delete o[i], this) : o[i];
  }, e.then = function(i) {
    var n = this;
    return new Promise(function(s) {
      var o = he(i) ? i : Kl, a = function() {
        var u = n.then;
        n.then = null, he(o) && (o = o(n)) && (o.then || o === n) && (n.then = u), s(o), n.then = u;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a;
    });
  }, e.kill = function() {
    ti(this);
  }, r;
}();
Ge(xi.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -oe,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Le = /* @__PURE__ */ function(r) {
  Ol(e, r);
  function e(i, n) {
    var s;
    return i === void 0 && (i = {}), s = r.call(this, i) || this, s.labels = {}, s.smoothChildTiming = !!i.smoothChildTiming, s.autoRemoveChildren = !!i.autoRemoveChildren, s._sort = Fe(i.sortChildren), pe && st(i.parent || pe, xt(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), i.scrollTrigger && Jl(xt(s), i.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(n, s, o) {
    return ui(0, arguments, this), this;
  }, t.from = function(n, s, o) {
    return ui(1, arguments, this), this;
  }, t.fromTo = function(n, s, o, a) {
    return ui(2, arguments, this), this;
  }, t.set = function(n, s, o) {
    return s.duration = 0, s.parent = this, li(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new be(n, s, Ye(this, o), 1), this;
  }, t.call = function(n, s, o) {
    return st(this, be.delayedCall(0, n, s), o);
  }, t.staggerTo = function(n, s, o, a, l, u, c) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new be(n, o, Ye(this, l)), this;
  }, t.staggerFrom = function(n, s, o, a, l, u, c) {
    return o.runBackwards = 1, li(o).immediateRender = Fe(o.immediateRender), this.staggerTo(n, s, o, a, l, u, c);
  }, t.staggerFromTo = function(n, s, o, a, l, u, c, d) {
    return a.startAt = o, li(a).immediateRender = Fe(a.immediateRender), this.staggerTo(n, s, a, l, u, c, d);
  }, t.render = function(n, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = n <= 0 ? 0 : ve(n), d = this._zTime < 0 != n < 0 && (this._initted || !u), h, f, b, v, w, m, g, x, _, y, k, A;
    if (this !== pe && c > l && n >= 0 && (c = l), c !== this._tTime || o || d) {
      if (a !== this._time && u && (c += this._time - a, n += this._time - a), h = c, _ = this._start, x = this._ts, m = !x, d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
        if (k = this._yoyo, w = u + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(w * 100 + n, s, o);
        if (h = ve(c % w), c === l ? (v = this._repeat, h = u) : (y = ve(c / w), v = ~~y, v && v === y && (h = u, v--), h > u && (h = u)), y = Tr(this._tTime, w), !a && this._tTime && y !== v && this._tTime - y * w - this._dur <= 0 && (y = v), k && v & 1 && (h = u - h, A = 1), v !== y && !this._lock) {
          var C = k && y & 1, D = C === (k && v & 1);
          if (v < y && (C = !C), a = C ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (A ? 0 : ve(v * w)), s, !u)._lock = 0, this._tTime = c, !s && this.parent && je(this, "onRepeat"), this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, D && (this._lock = 2, a = C ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !A && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          fu(this, A);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (g = v2(this, ve(a), ve(h)), g && (c -= h - (h = g._start))), this._tTime = c, this._time = h, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && h && !s && !v && (je(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= a && n >= 0)
        for (f = this._first; f; ) {
          if (b = f._next, (f._act || h >= f._start) && f._ts && g !== f) {
            if (f.parent !== this)
              return this.render(n, s, o);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, s, o), h !== this._time || !this._ts && !m) {
              g = 0, b && (c += this._zTime = -oe);
              break;
            }
          }
          f = b;
        }
      else {
        f = this._last;
        for (var S = n < 0 ? n : h; f; ) {
          if (b = f._prev, (f._act || S <= f._end) && f._ts && g !== f) {
            if (f.parent !== this)
              return this.render(n, s, o);
            if (f.render(f._ts > 0 ? (S - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (S - f._start) * f._ts, s, o || _e && (f._initted || f._startAt)), h !== this._time || !this._ts && !m) {
              g = 0, b && (c += this._zTime = S ? -oe : oe);
              break;
            }
          }
          f = b;
        }
      }
      if (g && !s && (this.pause(), g.render(h >= a ? 0 : -oe)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = _, yn(this), this.render(n, s, o);
      this._onUpdate && !s && je(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (_ === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((n || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Ut(this, 1), !s && !(n < 0 && !a) && (c || a || !l) && (je(this, c === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(n, s) {
    var o = this;
    if (At(s) || (s = Ye(this, s, n)), !(n instanceof xi)) {
      if (De(n))
        return n.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (xe(n))
        return this.addLabel(n, s);
      if (he(n))
        n = be.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? st(this, n, s) : this;
  }, t.getChildren = function(n, s, o, a) {
    n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -Ze);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof be ? s && l.push(u) : (o && l.push(u), n && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
    return l;
  }, t.getById = function(n) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === n)
        return s[o];
  }, t.remove = function(n) {
    return xe(n) ? this.removeLabel(n) : he(n) ? this.killTweensOf(n) : (n.parent === this && _n(this, n), n === this._recent && (this._recent = this._last), rr(this));
  }, t.totalTime = function(n, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ve(Ve.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), r.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(n, s) {
    return this.labels[n] = Ye(this, s), this;
  }, t.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, t.addPause = function(n, s, o) {
    var a = be.delayedCall(0, s || bi, o);
    return a.data = "isPause", this._hasPause = 1, st(this, a, Ye(this, n));
  }, t.removePause = function(n) {
    var s = this._first;
    for (n = Ye(this, n); s; )
      s._start === n && s.data === "isPause" && Ut(s), s = s._next;
  }, t.killTweensOf = function(n, s, o) {
    for (var a = this.getTweensOf(n, o), l = a.length; l--; )
      Nt !== a[l] && a[l].kill(n, s);
    return this;
  }, t.getTweensOf = function(n, s) {
    for (var o = [], a = Xe(n), l = this._first, u = At(s), c; l; )
      l instanceof be ? d2(l._targets, a) && (u ? (!Nt || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, t.tweenTo = function(n, s) {
    s = s || {};
    var o = this, a = Ye(o, n), l = s, u = l.startAt, c = l.onStart, d = l.onStartParams, h = l.immediateRender, f, b = be.to(o, Ge({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || oe,
      onStart: function() {
        if (o.pause(), !f) {
          var w = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          b._dur !== w && Fr(b, w, 0, 1).render(b._time, !0, !0), f = 1;
        }
        c && c.apply(b, d || []);
      }
    }, s));
    return h ? b.render(0) : b;
  }, t.tweenFromTo = function(n, s, o) {
    return this.tweenTo(s, Ge({
      startAt: {
        time: Ye(this, n)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(n) {
    return n === void 0 && (n = this._time), pa(this, Ye(this, n));
  }, t.previousLabel = function(n) {
    return n === void 0 && (n = this._time), pa(this, Ye(this, n), 1);
  }, t.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + oe);
  }, t.shiftChildren = function(n, s, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, u; a; )
      a._start >= o && (a._start += n, a._end += n), a = a._next;
    if (s)
      for (u in l)
        l[u] >= o && (l[u] += n);
    return rr(this);
  }, t.invalidate = function(n) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(n), s = s._next;
    return r.prototype.invalidate.call(this, n);
  }, t.clear = function(n) {
    n === void 0 && (n = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), rr(this);
  }, t.totalDuration = function(n) {
    var s = 0, o = this, a = o._last, l = Ze, u, c, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
    if (o._dirty) {
      for (d = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, st(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (s -= c, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
      Fr(o, o === pe && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(n) {
    if (pe._ts && (Wl(pe, en(n, pe)), Hl = Ve.frame), Ve.frame >= la) {
      la += Ue.autoSleep || 120;
      var s = pe._first;
      if ((!s || !s._ts) && Ue.autoSleep && Ve._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || Ve.sleep();
      }
    }
  }, e;
}(xi);
Ge(Le.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var M2 = function(e, t, i, n, s, o, a) {
  var l = new Me(this._pt, e, t, 0, 1, _u, null, s), u = 0, c = 0, d, h, f, b, v, w, m, g;
  for (l.b = i, l.e = n, i += "", n += "", (m = ~n.indexOf("random(")) && (n = vi(n)), o && (g = [i, n], o(g, e, t), i = g[0], n = g[1]), h = i.match(Mn) || []; d = Mn.exec(n); )
    b = d[0], v = n.substring(u, d.index), f ? f = (f + 1) % 5 : v.substr(-5) === "rgba(" && (f = 1), b !== h[c++] && (w = parseFloat(h[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: v || c === 1 ? v : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: w,
      c: b.charAt(1) === "=" ? Cr(w, b) - w : parseFloat(b) - w,
      m: f && f < 4 ? Math.round : 0
    }, u = Mn.lastIndex);
  return l.c = u < n.length ? n.substring(u, n.length) : "", l.fp = a, (ql.test(n) || m) && (l.e = 0), this._pt = l, l;
}, Zs = function(e, t, i, n, s, o, a, l, u, c) {
  he(n) && (n = n(s || 0, e, o));
  var d = e[t], h = i !== "get" ? i : he(d) ? u ? e[t.indexOf("set") || !he(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : d, f = he(d) ? u ? z2 : wu : Js, b;
  if (xe(n) && (~n.indexOf("random(") && (n = vi(n)), n.charAt(1) === "=" && (b = Cr(h, n) + (Ce(h) || 0), (b || b === 0) && (n = b))), !c || h !== n || ws)
    return !isNaN(h * n) && n !== "" ? (b = new Me(this._pt, e, t, +h || 0, n - (h || 0), typeof d == "boolean" ? $2 : xu, 0, f), u && (b.fp = u), a && b.modifier(a, this, e), this._pt = b) : (!d && !(t in e) && Gs(t, n), M2.call(this, e, t, h, n, f, l || Ue.stringFilter, u));
}, P2 = function(e, t, i, n, s) {
  if (he(e) && (e = ci(e, s, t, i, n)), !ft(e) || e.style && e.nodeType || De(e) || Rl(e))
    return xe(e) ? ci(e, s, t, i, n) : e;
  var o = {}, a;
  for (a in e)
    o[a] = ci(e[a], s, t, i, n);
  return o;
}, mu = function(e, t, i, n, s, o) {
  var a, l, u, c;
  if (qe[e] && (a = new qe[e]()).init(s, a.rawVars ? t[e] : P2(t[e], n, s, o, i), i, n, o) !== !1 && (i._pt = l = new Me(i._pt, s, e, 0, 1, a.render, a, 0, a.priority), i !== wr))
    for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, Nt, ws, Xs = function r(e, t, i) {
  var n = e.vars, s = n.ease, o = n.startAt, a = n.immediateRender, l = n.lazy, u = n.onUpdate, c = n.runBackwards, d = n.yoyoEase, h = n.keyframes, f = n.autoRevert, b = e._dur, v = e._startAt, w = e._targets, m = e.parent, g = m && m.data === "nested" ? m.vars.targets : w, x = e._overwrite === "auto" && !Vs, _ = e.timeline, y, k, A, C, D, S, B, E, T, M, F, $, I;
  if (_ && (!h || !s) && (s = "none"), e._ease = ir(s, Br.ease), e._yEase = d ? pu(ir(d === !0 ? s : d, Br.ease)) : 0, d && e._yoyo && !e._repeat && (d = e._yEase, e._yEase = e._ease, e._ease = d), e._from = !_ && !!n.runBackwards, !_ || h && !n.stagger) {
    if (E = w[0] ? tr(w[0]).harness : 0, $ = E && n[E.prop], y = Qi(n, Ws), v && (v._zTime < 0 && v.progress(1), t < 0 && c && a && !f ? v.render(-1, !0) : v.revert(c && b ? zi : u2), v._lazy = 0), o) {
      if (Ut(e._startAt = be.set(w, Ge({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !v && Fe(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return je(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (_e || !a && !f) && e._startAt.revert(zi), a && b && t <= 0 && i <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && b && !v) {
      if (t && (a = !1), A = Ge({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !v && Fe(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, y), $ && (A[E.prop] = $), Ut(e._startAt = be.set(w, A)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (_e ? e._startAt.revert(zi) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        r(e._startAt, oe, oe);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = b && Fe(l) || l && !b, k = 0; k < w.length; k++) {
      if (D = w[k], B = D._gsap || Ks(w)[k]._gsap, e._ptLookup[k] = M = {}, fs[B.id] && Rt.length && Ji(), F = g === w ? k : g.indexOf(D), E && (T = new E()).init(D, $ || y, e, F, g) !== !1 && (e._pt = C = new Me(e._pt, D, T.name, 0, 1, T.render, T, 0, T.priority), T._props.forEach(function(O) {
        M[O] = C;
      }), T.priority && (S = 1)), !E || $)
        for (A in y)
          qe[A] && (T = mu(A, y, e, F, D, g)) ? T.priority && (S = 1) : M[A] = C = Zs.call(e, D, A, "get", y[A], F, g, 0, n.stringFilter);
      e._op && e._op[k] && e.kill(D, e._op[k]), x && e._pt && (Nt = e, pe.killTweensOf(D, M, e.globalTime(t)), I = !e.parent, Nt = 0), e._pt && l && (fs[B.id] = 1);
    }
    S && yu(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !I, h && t <= 0 && _.render(Ze, !0, !0);
}, O2 = function(e, t, i, n, s, o, a, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, d, h, f;
  if (!u)
    for (u = e._ptCache[t] = [], h = e._ptLookup, f = e._targets.length; f--; ) {
      if (c = h[f][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return ws = 1, e.vars[t] = "+=0", Xs(e, a), ws = 0, l ? mi(t + " not eligible for reset") : 1;
      u.push(c);
    }
  for (f = u.length; f--; )
    d = u[f], c = d._pt || d, c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + o * c.c, c.c = i - c.s, d.e && (d.e = ge(i) + Ce(d.e)), d.b && (d.b = c.s + Ce(d.b));
}, I2 = function(e, t) {
  var i = e[0] ? tr(e[0]).harness : 0, n = i && i.aliases, s, o, a, l;
  if (!n)
    return t;
  s = Lr({}, t);
  for (o in n)
    if (o in s)
      for (l = n[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, R2 = function(e, t, i, n) {
  var s = t.ease || n || "power1.inOut", o, a;
  if (De(t))
    a = i[e] || (i[e] = []), t.forEach(function(l, u) {
      return a.push({
        t: u / (t.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (o in t)
      a = i[o] || (i[o] = []), o === "ease" || a.push({
        t: parseFloat(e),
        v: t[o],
        e: s
      });
}, ci = function(e, t, i, n, s) {
  return he(e) ? e.call(t, i, n, s) : xe(e) && ~e.indexOf("random(") ? vi(e) : e;
}, bu = Ys + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", vu = {};
Ne(bu + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return vu[r] = 1;
});
var be = /* @__PURE__ */ function(r) {
  Ol(e, r);
  function e(i, n, s, o) {
    var a;
    typeof n == "number" && (s.duration = n, n = s, s = null), a = r.call(this, o ? n : li(n)) || this;
    var l = a.vars, u = l.duration, c = l.delay, d = l.immediateRender, h = l.stagger, f = l.overwrite, b = l.keyframes, v = l.defaults, w = l.scrollTrigger, m = l.yoyoEase, g = n.parent || pe, x = (De(i) || Rl(i) ? At(i[0]) : "length" in n) ? [i] : Xe(i), _, y, k, A, C, D, S, B;
    if (a._targets = x.length ? Ks(x) : mi("GSAP target " + i + " not found. https://gsap.com", !Ue.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, b || h || Fi(u) || Fi(c)) {
      if (n = a.vars, _ = a.timeline = new Le({
        data: "nested",
        defaults: v || {},
        targets: g && g.data === "nested" ? g.vars.targets : x
      }), _.kill(), _.parent = _._dp = xt(a), _._start = 0, h || Fi(u) || Fi(c)) {
        if (A = x.length, S = h && ru(h), ft(h))
          for (C in h)
            ~bu.indexOf(C) && (B || (B = {}), B[C] = h[C]);
        for (y = 0; y < A; y++)
          k = Qi(n, vu), k.stagger = 0, m && (k.yoyoEase = m), B && Lr(k, B), D = x[y], k.duration = +ci(u, xt(a), y, D, x), k.delay = (+ci(c, xt(a), y, D, x) || 0) - a._delay, !h && A === 1 && k.delay && (a._delay = c = k.delay, a._start += c, k.delay = 0), _.to(D, k, S ? S(y, D, x) : 0), _._ease = J.none;
        _.duration() ? u = c = 0 : a.timeline = 0;
      } else if (b) {
        li(Ge(_.vars.defaults, {
          ease: "none"
        })), _._ease = ir(b.ease || n.ease || "none");
        var E = 0, T, M, F;
        if (De(b))
          b.forEach(function($) {
            return _.to(x, $, ">");
          }), _.duration();
        else {
          k = {};
          for (C in b)
            C === "ease" || C === "easeEach" || R2(C, b[C], k, b.easeEach);
          for (C in k)
            for (T = k[C].sort(function($, I) {
              return $.t - I.t;
            }), E = 0, y = 0; y < T.length; y++)
              M = T[y], F = {
                ease: M.e,
                duration: (M.t - (y ? T[y - 1].t : 0)) / 100 * u
              }, F[C] = M.v, _.to(x, F, E), E += F.duration;
          _.duration() < u && _.to({}, {
            duration: u - _.duration()
          });
        }
      }
      u || a.duration(u = _.duration());
    } else
      a.timeline = 0;
    return f === !0 && !Vs && (Nt = xt(a), pe.killTweensOf(x), Nt = 0), st(g, xt(a), s), n.reversed && a.reverse(), n.paused && a.paused(!0), (d || !u && !b && a._start === ve(g._time) && Fe(d) && g2(xt(a)) && g.data !== "nested") && (a._tTime = -oe, a.render(Math.max(0, -c) || 0)), w && Jl(xt(a), w), a;
  }
  var t = e.prototype;
  return t.render = function(n, s, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = n < 0, d = n > l - oe && !c ? l : n < oe ? 0 : n, h, f, b, v, w, m, g, x, _;
    if (!u)
      b2(this, n, s, o);
    else if (d !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = d, x = this.timeline, this._repeat) {
        if (v = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(v * 100 + n, s, o);
        if (h = ve(d % v), d === l ? (b = this._repeat, h = u) : (w = ve(d / v), b = ~~w, b && b === w ? (h = u, b--) : h > u && (h = u)), m = this._yoyo && b & 1, m && (_ = this._yEase, h = u - h), w = Tr(this._tTime, v), h === a && !o && this._initted && b === w)
          return this._tTime = d, this;
        b !== w && (x && this._yEase && fu(x, m), this.vars.repeatRefresh && !m && !this._lock && h !== v && this._initted && (this._lock = o = 1, this.render(ve(v * b), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Ql(this, c ? n : h, o, s, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && b !== w))
          return this;
        if (u !== this._dur)
          return this.render(n, s, o);
      }
      if (this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = g = (_ || this._ease)(h / u), this._from && (this.ratio = g = 1 - g), h && !a && !s && !b && (je(this, "onStart"), this._tTime !== d))
        return this;
      for (f = this._pt; f; )
        f.r(g, f.d), f = f._next;
      x && x.render(n < 0 ? n : x._dur * x._ease(h / this._dur), s, o) || this._startAt && (this._zTime = n), this._onUpdate && !s && (c && hs(this, n, s, o), je(this, "onUpdate")), this._repeat && b !== w && this.vars.onRepeat && !s && this.parent && je(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (c && !this._onUpdate && hs(this, n, !0, !0), (n || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ut(this, 1), !s && !(c && !a) && (d || a || m) && (je(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), r.prototype.invalidate.call(this, n);
  }, t.resetTo = function(n, s, o, a, l) {
    wi || Ve.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Xs(this, u), c = this._ease(u / this._dur), O2(this, n, s, o, a, c, u, l) ? this.resetTo(n, s, o, a, 1) : (Cn(this, 0), this.parent || Zl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(n, s) {
    if (s === void 0 && (s = "all"), !n && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? ti(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_e), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, s, Nt && Nt.vars.overwrite !== !0)._first || ti(this), this.parent && o !== this.timeline.totalDuration() && Fr(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = n ? Xe(n) : a, u = this._ptLookup, c = this._pt, d, h, f, b, v, w, m;
    if ((!s || s === "all") && f2(a, l))
      return s === "all" && (this._pt = 0), ti(this);
    for (d = this._op = this._op || [], s !== "all" && (xe(s) && (v = {}, Ne(s, function(g) {
      return v[g] = 1;
    }), s = v), s = I2(a, s)), m = a.length; m--; )
      if (~l.indexOf(a[m])) {
        h = u[m], s === "all" ? (d[m] = s, b = h, f = {}) : (f = d[m] = d[m] || {}, b = s);
        for (v in b)
          w = h && h[v], w && ((!("kill" in w.d) || w.d.kill(v) === !0) && _n(this, w, "_pt"), delete h[v]), f !== "all" && (f[v] = 1);
      }
    return this._initted && !this._pt && c && ti(this), this;
  }, e.to = function(n, s) {
    return new e(n, s, arguments[2]);
  }, e.from = function(n, s) {
    return ui(1, arguments);
  }, e.delayedCall = function(n, s, o, a) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: n,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, e.fromTo = function(n, s, o) {
    return ui(2, arguments);
  }, e.set = function(n, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(n, s);
  }, e.killTweensOf = function(n, s, o) {
    return pe.killTweensOf(n, s, o);
  }, e;
}(xi);
Ge(be.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ne("staggerTo,staggerFrom,staggerFromTo", function(r) {
  be[r] = function() {
    var e = new Le(), t = ms.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var Js = function(e, t, i) {
  return e[t] = i;
}, wu = function(e, t, i) {
  return e[t](i);
}, z2 = function(e, t, i, n) {
  return e[t](n.fp, i);
}, q2 = function(e, t, i) {
  return e.setAttribute(t, i);
}, Qs = function(e, t) {
  return he(e[t]) ? wu : js(e[t]) && e.setAttribute ? q2 : Js;
}, xu = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, $2 = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, _u = function(e, t) {
  var i = t._pt, n = "";
  if (!e && t.b)
    n = t.b;
  else if (e === 1 && t.e)
    n = t.e;
  else {
    for (; i; )
      n = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + n, i = i._next;
    n += t.c;
  }
  t.set(t.t, t.p, n, t);
}, eo = function(e, t) {
  for (var i = t._pt; i; )
    i.r(e, i.d), i = i._next;
}, V2 = function(e, t, i, n) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === n && s.modifier(e, t, i), s = o;
}, j2 = function(e) {
  for (var t = this._pt, i, n; t; )
    n = t._next, t.p === e && !t.op || t.op === e ? _n(this, t, "_pt") : t.dep || (i = 1), t = n;
  return !i;
}, U2 = function(e, t, i, n) {
  n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
}, yu = function(e) {
  for (var t = e._pt, i, n, s, o; t; ) {
    for (i = t._next, n = s; n && n.pr > t.pr; )
      n = n._next;
    (t._prev = n ? n._prev : o) ? t._prev._next = t : s = t, (t._next = n) ? n._prev = t : o = t, t = i;
  }
  e._pt = s;
}, Me = /* @__PURE__ */ function() {
  function r(t, i, n, s, o, a, l, u, c) {
    this.t = i, this.s = s, this.c = o, this.p = n, this.r = a || xu, this.d = l || this, this.set = u || Js, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = r.prototype;
  return e.modifier = function(i, n, s) {
    this.mSet = this.mSet || this.set, this.set = U2, this.m = i, this.mt = s, this.tween = n;
  }, r;
}();
Ne(Ys + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
  return Ws[r] = 1;
});
He.TweenMax = He.TweenLite = be;
He.TimelineLite = He.TimelineMax = Le;
pe = new Le({
  sortChildren: !1,
  defaults: Br,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Ue.stringFilter = du;
var nr = [], $i = {}, H2 = [], ha = 0, G2 = 0, zn = function(e) {
  return ($i[e] || H2).map(function(t) {
    return t();
  });
}, xs = function() {
  var e = Date.now(), t = [];
  e - ha > 2 && (zn("matchMediaInit"), nr.forEach(function(i) {
    var n = i.queries, s = i.conditions, o, a, l, u;
    for (a in n)
      o = nt.matchMedia(n[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
    u && (i.revert(), l && t.push(i));
  }), zn("matchMediaRevert"), t.forEach(function(i) {
    return i.onMatch(i, function(n) {
      return i.add(null, n);
    });
  }), ha = e, zn("matchMedia"));
}, Cu = /* @__PURE__ */ function() {
  function r(t, i) {
    this.selector = i && bs(i), this.data = [], this._r = [], this.isReverted = !1, this.id = G2++, t && this.add(t);
  }
  var e = r.prototype;
  return e.add = function(i, n, s) {
    he(i) && (s = n, n = i, i = he);
    var o = this, a = function() {
      var u = ce, c = o.selector, d;
      return u && u !== o && u.data.push(o), s && (o.selector = bs(s)), ce = o, d = n.apply(o, arguments), he(d) && o._r.push(d), ce = u, o.selector = c, o.isReverted = !1, d;
    };
    return o.last = a, i === he ? a(o, function(l) {
      return o.add(null, l);
    }) : i ? o[i] = a : a;
  }, e.ignore = function(i) {
    var n = ce;
    ce = null, i(this), ce = n;
  }, e.getTweens = function() {
    var i = [];
    return this.data.forEach(function(n) {
      return n instanceof r ? i.push.apply(i, n.getTweens()) : n instanceof be && !(n.parent && n.parent.data === "nested") && i.push(n);
    }), i;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(i, n) {
    var s = this;
    if (i ? function() {
      for (var a = s.getTweens(), l = s.data.length, u; l--; )
        u = s.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
          return a.splice(a.indexOf(c), 1);
        }));
      for (a.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, d) {
        return d.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(i);
      }), l = s.data.length; l--; )
        u = s.data[l], u instanceof Le ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof be) && u.revert && u.revert(i);
      s._r.forEach(function(c) {
        return c(i, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), n)
      for (var o = nr.length; o--; )
        nr[o].id === this.id && nr.splice(o, 1);
  }, e.revert = function(i) {
    this.kill(i || {});
  }, r;
}(), W2 = /* @__PURE__ */ function() {
  function r(t) {
    this.contexts = [], this.scope = t, ce && ce.data.push(this);
  }
  var e = r.prototype;
  return e.add = function(i, n, s) {
    ft(i) || (i = {
      matches: i
    });
    var o = new Cu(0, s || this.scope), a = o.conditions = {}, l, u, c;
    ce && !o.selector && (o.selector = ce.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = i;
    for (u in i)
      u === "all" ? c = 1 : (l = nt.matchMedia(i[u]), l && (nr.indexOf(o) < 0 && nr.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(xs) : l.addEventListener("change", xs)));
    return c && n(o, function(d) {
      return o.add(null, d);
    }), this;
  }, e.revert = function(i) {
    this.kill(i || {});
  }, e.kill = function(i) {
    this.contexts.forEach(function(n) {
      return n.kill(i, !0);
    });
  }, r;
}(), tn = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    t.forEach(function(n) {
      return lu(n);
    });
  },
  timeline: function(e) {
    return new Le(e);
  },
  getTweensOf: function(e, t) {
    return pe.getTweensOf(e, t);
  },
  getProperty: function(e, t, i, n) {
    xe(e) && (e = Xe(e)[0]);
    var s = tr(e || {}).get, o = i ? Kl : Yl;
    return i === "native" && (i = ""), e && (t ? o((qe[t] && qe[t].get || s)(e, t, i, n)) : function(a, l, u) {
      return o((qe[a] && qe[a].get || s)(e, a, l, u));
    });
  },
  quickSetter: function(e, t, i) {
    if (e = Xe(e), e.length > 1) {
      var n = e.map(function(c) {
        return Oe.quickSetter(c, t, i);
      }), s = n.length;
      return function(c) {
        for (var d = s; d--; )
          n[d](c);
      };
    }
    e = e[0] || {};
    var o = qe[t], a = tr(e), l = a.harness && (a.harness.aliases || {})[t] || t, u = o ? function(c) {
      var d = new o();
      wr._pt = 0, d.init(e, i ? c + i : c, wr, 0, [e]), d.render(1, d), wr._pt && eo(1, wr);
    } : a.set(e, l);
    return o ? u : function(c) {
      return u(e, l, i ? c + i : c, a, 1);
    };
  },
  quickTo: function(e, t, i) {
    var n, s = Oe.to(e, Ge((n = {}, n[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), i || {})), o = function(l, u, c) {
      return s.resetTo(t, l, u, c);
    };
    return o.tween = s, o;
  },
  isTweening: function(e) {
    return pe.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = ir(e.ease, Br.ease)), ua(Br, e || {});
  },
  config: function(e) {
    return ua(Ue, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, i = e.effect, n = e.plugins, s = e.defaults, o = e.extendTimeline;
    (n || "").split(",").forEach(function(a) {
      return a && !qe[a] && !He[a] && mi(t + " effect requires " + a + " plugin.");
    }), Pn[t] = function(a, l, u) {
      return i(Xe(a), Ge(l || {}, s), u);
    }, o && (Le.prototype[t] = function(a, l, u) {
      return this.add(Pn[t](a, ft(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(e, t) {
    J[e] = ir(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? ir(e, t) : J;
  },
  getById: function(e) {
    return pe.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var i = new Le(e), n, s;
    for (i.smoothChildTiming = Fe(e.smoothChildTiming), pe.remove(i), i._dp = 0, i._time = i._tTime = pe._time, n = pe._first; n; )
      s = n._next, (t || !(!n._dur && n instanceof be && n.vars.onComplete === n._targets[0])) && st(i, n, n._start - n._delay), n = s;
    return st(pe, i, 0), i;
  },
  context: function(e, t) {
    return e ? new Cu(e, t) : ce;
  },
  matchMedia: function(e) {
    return new W2(e);
  },
  matchMediaRefresh: function() {
    return nr.forEach(function(e) {
      var t = e.conditions, i, n;
      for (n in t)
        t[n] && (t[n] = !1, i = 1);
      i && e.revert();
    }) || xs();
  },
  addEventListener: function(e, t) {
    var i = $i[e] || ($i[e] = []);
    ~i.indexOf(t) || i.push(t);
  },
  removeEventListener: function(e, t) {
    var i = $i[e], n = i && i.indexOf(t);
    n >= 0 && i.splice(n, 1);
  },
  utils: {
    wrap: D2,
    wrapYoyo: A2,
    distribute: ru,
    random: nu,
    snap: iu,
    normalize: k2,
    getUnit: Ce,
    clamp: x2,
    splitColor: uu,
    toArray: Xe,
    selector: bs,
    mapRange: ou,
    pipe: y2,
    unitize: C2,
    interpolate: S2,
    shuffle: tu
  },
  install: jl,
  effects: Pn,
  ticker: Ve,
  updateRoot: Le.updateRoot,
  plugins: qe,
  globalTimeline: pe,
  core: {
    PropTween: Me,
    globals: Ul,
    Tween: be,
    Timeline: Le,
    Animation: xi,
    getCache: tr,
    _removeLinkedListItem: _n,
    reverting: function() {
      return _e;
    },
    context: function(e) {
      return e && ce && (ce.data.push(e), e._ctx = ce), ce;
    },
    suppressOverwrites: function(e) {
      return Vs = e;
    }
  }
};
Ne("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return tn[r] = be[r];
});
Ve.add(Le.updateRoot);
wr = tn.to({}, {
  duration: 0
});
var Y2 = function(e, t) {
  for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
    i = i._next;
  return i;
}, K2 = function(e, t) {
  var i = e._targets, n, s, o;
  for (n in t)
    for (s = i.length; s--; )
      o = e._ptLookup[s][n], o && (o = o.d) && (o._pt && (o = Y2(o, n)), o && o.modifier && o.modifier(t[n], e, i[s], n));
}, qn = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, s, o) {
      o._onInit = function(a) {
        var l, u;
        if (xe(s) && (l = {}, Ne(s, function(c) {
          return l[c] = 1;
        }), s = l), t) {
          l = {};
          for (u in s)
            l[u] = t(s[u]);
          s = l;
        }
        K2(a, s);
      };
    }
  };
}, Oe = tn.registerPlugin({
  name: "attr",
  init: function(e, t, i, n, s) {
    var o, a, l;
    this.tween = i;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], n, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var i = t._pt; i; )
      _e ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var i = t.length; i--; )
      this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
  }
}, qn("roundProps", vs), qn("modifiers"), qn("snap", iu)) || tn;
be.version = Le.version = Oe.version = "3.12.7";
Vl = 1;
Us() && Nr();
J.Power0;
J.Power1;
J.Power2;
J.Power3;
J.Power4;
J.Linear;
J.Quad;
J.Cubic;
J.Quart;
J.Quint;
J.Strong;
J.Elastic;
J.Back;
J.SteppedEase;
J.Bounce;
J.Sine;
J.Expo;
J.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ga, Mt, kr, to, er, ma, ro, Z2 = function() {
  return typeof window < "u";
}, St = {}, Zt = 180 / Math.PI, Dr = Math.PI / 180, pr = Math.atan2, ba = 1e8, io = /([A-Z])/g, X2 = /(left|right|width|margin|padding|x)/i, J2 = /[\s,\(]\S/, lt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, _s = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Q2 = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, ef = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, tf = function(e, t) {
  var i = t.s + t.c * e;
  t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
}, ku = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Du = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, rf = function(e, t, i) {
  return e.style[t] = i;
}, nf = function(e, t, i) {
  return e.style.setProperty(t, i);
}, sf = function(e, t, i) {
  return e._gsap[t] = i;
}, of = function(e, t, i) {
  return e._gsap.scaleX = e._gsap.scaleY = i;
}, af = function(e, t, i, n, s) {
  var o = e._gsap;
  o.scaleX = o.scaleY = i, o.renderTransform(s, o);
}, lf = function(e, t, i, n, s) {
  var o = e._gsap;
  o[t] = i, o.renderTransform(s, o);
}, fe = "transform", Pe = fe + "Origin", uf = function r(e, t) {
  var i = this, n = this.target, s = n.style, o = n._gsap;
  if (e in St && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = lt[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return i.tfm[a] = yt(n, a);
      }) : this.tfm[e] = o.x ? o[e] : yt(n, e), e === Pe && (this.tfm.zOrigin = o.zOrigin);
    else
      return lt.transform.split(",").forEach(function(a) {
        return r.call(i, a, t);
      });
    if (this.props.indexOf(fe) >= 0)
      return;
    o.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Pe, t, "")), e = fe;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, Au = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, cf = function() {
  var e = this.props, t = this.target, i = t.style, n = t._gsap, s, o;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? i[e[s]] = e[s + 2] : i.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(io, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      n[o] = this.tfm[o];
    n.svg && (n.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = ro(), (!s || !s.isStart) && !i[fe] && (Au(i), n.zOrigin && i[Pe] && (i[Pe] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
  }
}, Su = function(e, t) {
  var i = {
    target: e,
    props: [],
    revert: cf,
    save: uf
  };
  return e._gsap || Oe.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(n) {
    return i.save(n);
  }), i;
}, Eu, ys = function(e, t) {
  var i = Mt.createElementNS ? Mt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Mt.createElement(e);
  return i && i.style ? i : Mt.createElement(e);
}, dt = function r(e, t, i) {
  var n = getComputedStyle(e);
  return n[t] || n.getPropertyValue(t.replace(io, "-$1").toLowerCase()) || n.getPropertyValue(t) || !i && r(e, Mr(t) || t, 1) || "";
}, va = "O,Moz,ms,Ms,Webkit".split(","), Mr = function(e, t, i) {
  var n = t || er, s = n.style, o = 5;
  if (e in s && !i)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(va[o] + e in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? va[o] : "") + e;
}, Cs = function() {
  Z2() && window.document && (ga = window, Mt = ga.document, kr = Mt.documentElement, er = ys("div") || {
    style: {}
  }, ys("div"), fe = Mr(fe), Pe = fe + "Origin", er.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Eu = !!Mr("perspective"), ro = Oe.core.reverting, to = 1);
}, wa = function(e) {
  var t = e.ownerSVGElement, i = ys("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = e.cloneNode(!0), s;
  n.style.display = "block", i.appendChild(n), kr.appendChild(i);
  try {
    s = n.getBBox();
  } catch {
  }
  return i.removeChild(n), kr.removeChild(i), s;
}, xa = function(e, t) {
  for (var i = t.length; i--; )
    if (e.hasAttribute(t[i]))
      return e.getAttribute(t[i]);
}, Bu = function(e) {
  var t, i;
  try {
    t = e.getBBox();
  } catch {
    t = wa(e), i = 1;
  }
  return t && (t.width || t.height) || i || (t = wa(e)), t && !t.width && !t.x && !t.y ? {
    x: +xa(e, ["x", "cx", "x1"]) || 0,
    y: +xa(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Lu = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Bu(e));
}, sr = function(e, t) {
  if (t) {
    var i = e.style, n;
    t in St && t !== Pe && (t = fe), i.removeProperty ? (n = t.substr(0, 2), (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), i.removeProperty(n === "--" ? t : t.replace(io, "-$1").toLowerCase())) : i.removeAttribute(t);
  }
}, Pt = function(e, t, i, n, s, o) {
  var a = new Me(e._pt, t, i, 0, 1, o ? Du : ku);
  return e._pt = a, a.b = n, a.e = s, e._props.push(i), a;
}, _a = {
  deg: 1,
  rad: 1,
  turn: 1
}, df = {
  grid: 1,
  flex: 1
}, Ht = function r(e, t, i, n) {
  var s = parseFloat(i) || 0, o = (i + "").trim().substr((s + "").length) || "px", a = er.style, l = X2.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = n === "px", f = n === "%", b, v, w, m;
  if (n === o || !s || _a[n] || _a[o])
    return s;
  if (o !== "px" && !h && (s = r(e, t, i, "px")), m = e.getCTM && Lu(e), (f || o === "%") && (St[t] || ~t.indexOf("adius")))
    return b = m ? e.getBBox()[l ? "width" : "height"] : e[c], ge(f ? s / b * d : s / 100 * b);
  if (a[l ? "width" : "height"] = d + (h ? o : n), v = n !== "rem" && ~t.indexOf("adius") || n === "em" && e.appendChild && !u ? e : e.parentNode, m && (v = (e.ownerSVGElement || {}).parentNode), (!v || v === Mt || !v.appendChild) && (v = Mt.body), w = v._gsap, w && f && w.width && l && w.time === Ve.time && !w.uncache)
    return ge(s / w.width * d);
  if (f && (t === "height" || t === "width")) {
    var g = e.style[t];
    e.style[t] = d + n, b = e[c], g ? e.style[t] = g : sr(e, t);
  } else
    (f || o === "%") && !df[dt(v, "display")] && (a.position = dt(e, "position")), v === e && (a.position = "static"), v.appendChild(er), b = er[c], v.removeChild(er), a.position = "absolute";
  return l && f && (w = tr(v), w.time = Ve.time, w.width = v[c]), ge(h ? b * s / d : b && s ? d / b * s : 0);
}, yt = function(e, t, i, n) {
  var s;
  return to || Cs(), t in lt && t !== "transform" && (t = lt[t], ~t.indexOf(",") && (t = t.split(",")[0])), St[t] && t !== "transform" ? (s = yi(e, n), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : nn(dt(e, Pe)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = rn[t] && rn[t](e, t, i) || dt(e, t) || Gl(e, t) || (t === "opacity" ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? Ht(e, t, s, i) + i : s;
}, pf = function(e, t, i, n) {
  if (!i || i === "none") {
    var s = Mr(t, e, 1), o = s && dt(e, s, 1);
    o && o !== i ? (t = s, i = o) : t === "borderColor" && (i = dt(e, "borderTopColor"));
  }
  var a = new Me(this._pt, e.style, t, 0, 1, _u), l = 0, u = 0, c, d, h, f, b, v, w, m, g, x, _, y;
  if (a.b = i, a.e = n, i += "", n += "", n === "auto" && (v = e.style[t], e.style[t] = n, n = dt(e, t) || n, v ? e.style[t] = v : sr(e, t)), c = [i, n], du(c), i = c[0], n = c[1], h = i.match(vr) || [], y = n.match(vr) || [], y.length) {
    for (; d = vr.exec(n); )
      w = d[0], g = n.substring(l, d.index), b ? b = (b + 1) % 5 : (g.substr(-5) === "rgba(" || g.substr(-5) === "hsla(") && (b = 1), w !== (v = h[u++] || "") && (f = parseFloat(v) || 0, _ = v.substr((f + "").length), w.charAt(1) === "=" && (w = Cr(f, w) + _), m = parseFloat(w), x = w.substr((m + "").length), l = vr.lastIndex - x.length, x || (x = x || Ue.units[t] || _, l === n.length && (n += x, a.e += x)), _ !== x && (f = Ht(e, t, v, x) || 0), a._pt = {
        _next: a._pt,
        p: g || u === 1 ? g : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: m - f,
        m: b && b < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    a.r = t === "display" && n === "none" ? Du : ku;
  return ql.test(n) && (a.e = 0), this._pt = a, a;
}, ya = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ff = function(e) {
  var t = e.split(" "), i = t[0], n = t[1] || "50%";
  return (i === "top" || i === "bottom" || n === "left" || n === "right") && (e = i, i = n, n = e), t[0] = ya[i] || i, t[1] = ya[n] || n, t.join(" ");
}, hf = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var i = t.t, n = i.style, s = t.u, o = i._gsap, a, l, u;
    if (s === "all" || s === !0)
      n.cssText = "", l = 1;
    else
      for (s = s.split(","), u = s.length; --u > -1; )
        a = s[u], St[a] && (l = 1, a = a === "transformOrigin" ? Pe : fe), sr(i, a);
    l && (sr(i, fe), o && (o.svg && i.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", yi(i, 1), o.uncache = 1, Au(n)));
  }
}, rn = {
  clearProps: function(e, t, i, n, s) {
    if (s.data !== "isFromStart") {
      var o = e._pt = new Me(e._pt, t, i, 0, 0, hf);
      return o.u = n, o.pr = -10, o.tween = s, e._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, _i = [1, 0, 0, 1, 0, 0], Tu = {}, Fu = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Ca = function(e) {
  var t = dt(e, fe);
  return Fu(t) ? _i : t.substr(7).match(zl).map(ge);
}, no = function(e, t) {
  var i = e._gsap || tr(e), n = e.style, s = Ca(e), o, a, l, u;
  return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? _i : s) : (s === _i && !e.offsetParent && e !== kr && !i.svg && (l = n.display, n.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, a = e.nextElementSibling, kr.appendChild(e)), s = Ca(e), l ? n.display = l : sr(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : kr.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, ks = function(e, t, i, n, s, o) {
  var a = e._gsap, l = s || no(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, f = l[0], b = l[1], v = l[2], w = l[3], m = l[4], g = l[5], x = t.split(" "), _ = parseFloat(x[0]) || 0, y = parseFloat(x[1]) || 0, k, A, C, D;
  i ? l !== _i && (A = f * w - b * v) && (C = _ * (w / A) + y * (-v / A) + (v * g - w * m) / A, D = _ * (-b / A) + y * (f / A) - (f * g - b * m) / A, _ = C, y = D) : (k = Bu(e), _ = k.x + (~x[0].indexOf("%") ? _ / 100 * k.width : _), y = k.y + (~(x[1] || x[0]).indexOf("%") ? y / 100 * k.height : y)), n || n !== !1 && a.smooth ? (m = _ - u, g = y - c, a.xOffset = d + (m * f + g * v) - m, a.yOffset = h + (m * b + g * w) - g) : a.xOffset = a.yOffset = 0, a.xOrigin = _, a.yOrigin = y, a.smooth = !!n, a.origin = t, a.originIsAbsolute = !!i, e.style[Pe] = "0px 0px", o && (Pt(o, a, "xOrigin", u, _), Pt(o, a, "yOrigin", c, y), Pt(o, a, "xOffset", d, a.xOffset), Pt(o, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", _ + " " + y);
}, yi = function(e, t) {
  var i = e._gsap || new gu(e);
  if ("x" in i && !t && !i.uncache)
    return i;
  var n = e.style, s = i.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = dt(e, Pe) || "0", c, d, h, f, b, v, w, m, g, x, _, y, k, A, C, D, S, B, E, T, M, F, $, I, O, P, L, N, q, ie, ee, H;
  return c = d = h = v = w = m = g = x = _ = 0, f = b = 1, i.svg = !!(e.getCTM && Lu(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[fe] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[fe] !== "none" ? l[fe] : "")), n.scale = n.rotate = n.translate = "none"), A = no(e, i.svg), i.svg && (i.uncache ? (O = e.getBBox(), u = i.xOrigin - O.x + "px " + (i.yOrigin - O.y) + "px", I = "") : I = !t && e.getAttribute("data-svg-origin"), ks(e, I || u, !!I || i.originIsAbsolute, i.smooth !== !1, A)), y = i.xOrigin || 0, k = i.yOrigin || 0, A !== _i && (B = A[0], E = A[1], T = A[2], M = A[3], c = F = A[4], d = $ = A[5], A.length === 6 ? (f = Math.sqrt(B * B + E * E), b = Math.sqrt(M * M + T * T), v = B || E ? pr(E, B) * Zt : 0, g = T || M ? pr(T, M) * Zt + v : 0, g && (b *= Math.abs(Math.cos(g * Dr))), i.svg && (c -= y - (y * B + k * T), d -= k - (y * E + k * M))) : (H = A[6], ie = A[7], L = A[8], N = A[9], q = A[10], ee = A[11], c = A[12], d = A[13], h = A[14], C = pr(H, q), w = C * Zt, C && (D = Math.cos(-C), S = Math.sin(-C), I = F * D + L * S, O = $ * D + N * S, P = H * D + q * S, L = F * -S + L * D, N = $ * -S + N * D, q = H * -S + q * D, ee = ie * -S + ee * D, F = I, $ = O, H = P), C = pr(-T, q), m = C * Zt, C && (D = Math.cos(-C), S = Math.sin(-C), I = B * D - L * S, O = E * D - N * S, P = T * D - q * S, ee = M * S + ee * D, B = I, E = O, T = P), C = pr(E, B), v = C * Zt, C && (D = Math.cos(C), S = Math.sin(C), I = B * D + E * S, O = F * D + $ * S, E = E * D - B * S, $ = $ * D - F * S, B = I, F = O), w && Math.abs(w) + Math.abs(v) > 359.9 && (w = v = 0, m = 180 - m), f = ge(Math.sqrt(B * B + E * E + T * T)), b = ge(Math.sqrt($ * $ + H * H)), C = pr(F, $), g = Math.abs(C) > 2e-4 ? C * Zt : 0, _ = ee ? 1 / (ee < 0 ? -ee : ee) : 0), i.svg && (I = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !Fu(dt(e, fe)), I && e.setAttribute("transform", I))), Math.abs(g) > 90 && Math.abs(g) < 270 && (s ? (f *= -1, g += v <= 0 ? 180 : -180, v += v <= 0 ? 180 : -180) : (b *= -1, g += g <= 0 ? 180 : -180)), t = t || i.uncache, i.x = c - ((i.xPercent = c && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + o, i.y = d - ((i.yPercent = d && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + o, i.z = h + o, i.scaleX = ge(f), i.scaleY = ge(b), i.rotation = ge(v) + a, i.rotationX = ge(w) + a, i.rotationY = ge(m) + a, i.skewX = g + a, i.skewY = x + a, i.transformPerspective = _ + o, (i.zOrigin = parseFloat(u.split(" ")[2]) || !t && i.zOrigin || 0) && (n[Pe] = nn(u)), i.xOffset = i.yOffset = 0, i.force3D = Ue.force3D, i.renderTransform = i.svg ? mf : Eu ? Nu : gf, i.uncache = 0, i;
}, nn = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, $n = function(e, t, i) {
  var n = Ce(t);
  return ge(parseFloat(t) + parseFloat(Ht(e, "x", i + "px", n))) + n;
}, gf = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Nu(e, t);
}, Yt = "0deg", Kr = "0px", Kt = ") ", Nu = function(e, t) {
  var i = t || this, n = i.xPercent, s = i.yPercent, o = i.x, a = i.y, l = i.z, u = i.rotation, c = i.rotationY, d = i.rotationX, h = i.skewX, f = i.skewY, b = i.scaleX, v = i.scaleY, w = i.transformPerspective, m = i.force3D, g = i.target, x = i.zOrigin, _ = "", y = m === "auto" && e && e !== 1 || m === !0;
  if (x && (d !== Yt || c !== Yt)) {
    var k = parseFloat(c) * Dr, A = Math.sin(k), C = Math.cos(k), D;
    k = parseFloat(d) * Dr, D = Math.cos(k), o = $n(g, o, A * D * -x), a = $n(g, a, -Math.sin(k) * -x), l = $n(g, l, C * D * -x + x);
  }
  w !== Kr && (_ += "perspective(" + w + Kt), (n || s) && (_ += "translate(" + n + "%, " + s + "%) "), (y || o !== Kr || a !== Kr || l !== Kr) && (_ += l !== Kr || y ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Kt), u !== Yt && (_ += "rotate(" + u + Kt), c !== Yt && (_ += "rotateY(" + c + Kt), d !== Yt && (_ += "rotateX(" + d + Kt), (h !== Yt || f !== Yt) && (_ += "skew(" + h + ", " + f + Kt), (b !== 1 || v !== 1) && (_ += "scale(" + b + ", " + v + Kt), g.style[fe] = _ || "translate(0, 0)";
}, mf = function(e, t) {
  var i = t || this, n = i.xPercent, s = i.yPercent, o = i.x, a = i.y, l = i.rotation, u = i.skewX, c = i.skewY, d = i.scaleX, h = i.scaleY, f = i.target, b = i.xOrigin, v = i.yOrigin, w = i.xOffset, m = i.yOffset, g = i.forceCSS, x = parseFloat(o), _ = parseFloat(a), y, k, A, C, D;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= Dr, u *= Dr, y = Math.cos(l) * d, k = Math.sin(l) * d, A = Math.sin(l - u) * -h, C = Math.cos(l - u) * h, u && (c *= Dr, D = Math.tan(u - c), D = Math.sqrt(1 + D * D), A *= D, C *= D, c && (D = Math.tan(c), D = Math.sqrt(1 + D * D), y *= D, k *= D)), y = ge(y), k = ge(k), A = ge(A), C = ge(C)) : (y = d, C = h, k = A = 0), (x && !~(o + "").indexOf("px") || _ && !~(a + "").indexOf("px")) && (x = Ht(f, "x", o, "px"), _ = Ht(f, "y", a, "px")), (b || v || w || m) && (x = ge(x + b - (b * y + v * A) + w), _ = ge(_ + v - (b * k + v * C) + m)), (n || s) && (D = f.getBBox(), x = ge(x + n / 100 * D.width), _ = ge(_ + s / 100 * D.height)), D = "matrix(" + y + "," + k + "," + A + "," + C + "," + x + "," + _ + ")", f.setAttribute("transform", D), g && (f.style[fe] = D);
}, bf = function(e, t, i, n, s) {
  var o = 360, a = xe(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? Zt : 1), u = l - n, c = n + u + "deg", d, h;
  return a && (d = s.split("_")[1], d === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), d === "cw" && u < 0 ? u = (u + o * ba) % o - ~~(u / o) * o : d === "ccw" && u > 0 && (u = (u - o * ba) % o - ~~(u / o) * o)), e._pt = h = new Me(e._pt, t, i, n, u, Q2), h.e = c, h.u = "deg", e._props.push(i), h;
}, ka = function(e, t) {
  for (var i in t)
    e[i] = t[i];
  return e;
}, vf = function(e, t, i) {
  var n = ka({}, i._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, a, l, u, c, d, h, f, b;
  n.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), o[fe] = t, a = yi(i, 1), sr(i, fe), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[fe], o[fe] = t, a = yi(i, 1), o[fe] = u);
  for (l in St)
    u = n[l], c = a[l], u !== c && s.indexOf(l) < 0 && (f = Ce(u), b = Ce(c), d = f !== b ? Ht(i, l, u, b) : parseFloat(u), h = parseFloat(c), e._pt = new Me(e._pt, a, l, d, h - d, _s), e._pt.u = b || 0, e._props.push(l));
  ka(a, n);
};
Ne("padding,margin,Width,Radius", function(r, e) {
  var t = "Top", i = "Right", n = "Bottom", s = "Left", o = (e < 3 ? [t, i, n, s] : [t + s, t + i, n + i, n + s]).map(function(a) {
    return e < 2 ? r + a : "border" + a + r;
  });
  rn[e > 1 ? "border" + r : r] = function(a, l, u, c, d) {
    var h, f;
    if (arguments.length < 4)
      return h = o.map(function(b) {
        return yt(a, b, u);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (c + "").split(" "), f = {}, o.forEach(function(b, v) {
      return f[b] = h[v] = h[v] || h[(v - 1) / 2 | 0];
    }), a.init(l, f, d);
  };
});
var Mu = {
  name: "css",
  register: Cs,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, i, n, s) {
    var o = this._props, a = e.style, l = i.vars.startAt, u, c, d, h, f, b, v, w, m, g, x, _, y, k, A, C;
    to || Cs(), this.styles = this.styles || Su(e), C = this.styles.props, this.tween = i;
    for (v in t)
      if (v !== "autoRound" && (c = t[v], !(qe[v] && mu(v, t, i, n, e, s)))) {
        if (f = typeof c, b = rn[v], f === "function" && (c = c.call(i, n, e, s), f = typeof c), f === "string" && ~c.indexOf("random(") && (c = vi(c)), b)
          b(this, e, v, c, i) && (A = 1);
        else if (v.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(v) + "").trim(), c += "", zt.lastIndex = 0, zt.test(u) || (w = Ce(u), m = Ce(c)), m ? w !== m && (u = Ht(e, v, u, m) + m) : w && (c += w), this.add(a, "setProperty", u, c, n, s, 0, 0, v), o.push(v), C.push(v, 0, a[v]);
        else if (f !== "undefined") {
          if (l && v in l ? (u = typeof l[v] == "function" ? l[v].call(i, n, e, s) : l[v], xe(u) && ~u.indexOf("random(") && (u = vi(u)), Ce(u + "") || u === "auto" || (u += Ue.units[v] || Ce(yt(e, v)) || ""), (u + "").charAt(1) === "=" && (u = yt(e, v))) : u = yt(e, v), h = parseFloat(u), g = f === "string" && c.charAt(1) === "=" && c.substr(0, 2), g && (c = c.substr(2)), d = parseFloat(c), v in lt && (v === "autoAlpha" && (h === 1 && yt(e, "visibility") === "hidden" && d && (h = 0), C.push("visibility", 0, a.visibility), Pt(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), v !== "scale" && v !== "transform" && (v = lt[v], ~v.indexOf(",") && (v = v.split(",")[0]))), x = v in St, x) {
            if (this.styles.save(v), _ || (y = e._gsap, y.renderTransform && !t.parseTransform || yi(e, t.parseTransform), k = t.smoothOrigin !== !1 && y.smooth, _ = this._pt = new Me(this._pt, a, fe, 0, 1, y.renderTransform, y, 0, -1), _.dep = 1), v === "scale")
              this._pt = new Me(this._pt, y, "scaleY", y.scaleY, (g ? Cr(y.scaleY, g + d) : d) - y.scaleY || 0, _s), this._pt.u = 0, o.push("scaleY", v), v += "X";
            else if (v === "transformOrigin") {
              C.push(Pe, 0, a[Pe]), c = ff(c), y.svg ? ks(e, c, 0, k, 0, this) : (m = parseFloat(c.split(" ")[2]) || 0, m !== y.zOrigin && Pt(this, y, "zOrigin", y.zOrigin, m), Pt(this, a, v, nn(u), nn(c)));
              continue;
            } else if (v === "svgOrigin") {
              ks(e, c, 1, k, 0, this);
              continue;
            } else if (v in Tu) {
              bf(this, y, v, h, g ? Cr(h, g + c) : c);
              continue;
            } else if (v === "smoothOrigin") {
              Pt(this, y, "smooth", y.smooth, c);
              continue;
            } else if (v === "force3D") {
              y[v] = c;
              continue;
            } else if (v === "transform") {
              vf(this, c, e);
              continue;
            }
          } else
            v in a || (v = Mr(v) || v);
          if (x || (d || d === 0) && (h || h === 0) && !J2.test(c) && v in a)
            w = (u + "").substr((h + "").length), d || (d = 0), m = Ce(c) || (v in Ue.units ? Ue.units[v] : w), w !== m && (h = Ht(e, v, u, m)), this._pt = new Me(this._pt, x ? y : a, v, h, (g ? Cr(h, g + d) : d) - h, !x && (m === "px" || v === "zIndex") && t.autoRound !== !1 ? tf : _s), this._pt.u = m || 0, w !== m && m !== "%" && (this._pt.b = u, this._pt.r = ef);
          else if (v in a)
            pf.call(this, e, v, u, g ? g + c : c);
          else if (v in e)
            this.add(e, v, u || e[v], g ? g + c : c, n, s);
          else if (v !== "parseTransform") {
            Gs(v, c);
            continue;
          }
          x || (v in a ? C.push(v, 0, a[v]) : typeof e[v] == "function" ? C.push(v, 2, e[v]()) : C.push(v, 1, u || e[v])), o.push(v);
        }
      }
    A && yu(this);
  },
  render: function(e, t) {
    if (t.tween._time || !ro())
      for (var i = t._pt; i; )
        i.r(e, i.d), i = i._next;
    else
      t.styles.revert();
  },
  get: yt,
  aliases: lt,
  getSetter: function(e, t, i) {
    var n = lt[t];
    return n && n.indexOf(",") < 0 && (t = n), t in St && t !== Pe && (e._gsap.x || yt(e, "x")) ? i && ma === i ? t === "scale" ? of : sf : (ma = i || {}) && (t === "scale" ? af : lf) : e.style && !js(e.style[t]) ? rf : ~t.indexOf("-") ? nf : Qs(e, t);
  },
  core: {
    _removeProperty: sr,
    _getMatrix: no
  }
};
Oe.utils.checkPrefix = Mr;
Oe.core.getStyleSaver = Su;
(function(r, e, t, i) {
  var n = Ne(r + "," + e + "," + t, function(s) {
    St[s] = 1;
  });
  Ne(e, function(s) {
    Ue.units[s] = "deg", Tu[s] = 1;
  }), lt[n[13]] = r + "," + e, Ne(i, function(s) {
    var o = s.split(":");
    lt[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ne("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  Ue.units[r] = "px";
});
Oe.registerPlugin(Mu);
var Q = Oe.registerPlugin(Mu) || Oe;
Q.core.Tween;
var wf = 0;
function p(r, e, t, i, n, s) {
  var o, a, l = {};
  for (a in e)
    a == "ref" ? o = e[a] : l[a] = e[a];
  var u = { type: r, props: l, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --wf, __i: -1, __u: 0, __source: n, __self: s };
  if (typeof r == "function" && (o = r.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return W.vnode && W.vnode(u), u;
}
function Pr() {
  document.dispatchEvent(new Event("BmToggleModal"));
}
function xf({
  children: r
}) {
  const e = Y(null), t = Y(null), i = () => {
    document.body.classList.toggle("bm-modal-active"), _t.value ? _t.value && (Q.to(e.current, {
      duration: 0.25,
      autoAlpha: 0
    }), window.innerWidth > 639 ? (Q.to(t.current, {
      duration: 0.25,
      autoAlpha: 0,
      transform: "scale(1)",
      onComplete: () => {
        _t.value = !1;
      }
    }), Q.set(document.body, {
      overflow: "auto"
    })) : (Q.to(t.current, {
      duration: 0.25,
      autoAlpha: 0,
      transform: "translateY(100%)",
      onComplete: () => {
        _t.value = !1;
      }
    }), Q.set(document.body, {
      overflow: "auto"
    }))) : (Q.to(e.current, {
      duration: 0.25,
      autoAlpha: 1
    }), window.innerWidth > 639 ? (Q.to(t.current, {
      duration: 0.25,
      autoAlpha: 1,
      transform: "scale(1)",
      onComplete: () => {
        _t.value = !0;
      }
    }), Q.set(document.body, {
      overflow: "hidden"
    })) : (Q.to(t.current, {
      duration: 0.25,
      autoAlpha: 1,
      transform: "translateY(0%)",
      onComplete: () => {
        _t.value = !0;
      }
    }), Q.set(document.body, {
      overflow: "hidden"
    })));
  };
  return U(() => {
    const n = document.getElementById("bm_selectBikeButton");
    return document.addEventListener("BmToggleModal", i), n == null || n.addEventListener("click", i), () => {
      document.removeEventListener("BmToggleModal", i), n == null || n.removeEventListener("click", i);
    };
  }, []), p(j, {
    children: [p("style", {
      type: "text/css",
      children: i2
    }), p("div", {
      onClick: () => {
        Pr();
      },
      class: X("overlay", "fixed cursor-pointer inset-0 z-[2147483645] bg-black/40 "),
      ref: e
    }), p("div", {
      className: X("modal", "fixed pointer-events-none inset-0 mx-auto justify-end z-[2147483646] flex flex-col items-center outline-none ", "sm:justify-center"),
      ref: t,
      children: p("div", {
        className: "flex sm:px-2 pointer-events-auto max-sm:max-h-[96%] sm:max-h-[90%] max-sm:h-[89vh] max-w-lg sm:max-w-[640px] flex-col items-center max-sm:flex-1 w-full bg-white rounded-t-3xl sm:rounded-xl shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.06)]",
        children: [p("div", {
          className: "sm:hidden mx-auto mt-4 h-[6px] w-[100px] rounded-full bg-gray-400/50",
          onClick: Pr
        }), p("div", {
          className: "sm:hidden h-[10px]"
        }), p("div", {
          className: "relative flex flex-col w-full sm:h-full max-sm:flex-none max-sm:grow",
          children: p("div", {
            class: "modal-content max-sm:absolute sm:h-full max-sm:inset-0 overflow-x-hidden overflow-y-auto  px-8 sm:px-6",
            children: r
          })
        })]
      })
    })]
  });
}
const tt = (r) => /* @__PURE__ */ V("svg", { width: 7, height: 12, viewBox: "0 0 7 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M1 11L6 6L1 1", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), _f = (r) => /* @__PURE__ */ V("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("circle", { cx: 15.5, cy: 15.5, r: 15.5, fill: "#030712" }), /* @__PURE__ */ V("path", { d: "M10.1974 17.1317L13.9955 20.4461L20.8639 10.8909", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), yf = (r) => /* @__PURE__ */ V("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("g", { clipPath: "url(#clip0_64_2)" }, /* @__PURE__ */ V("path", { d: "M30.5 15.5C30.5 23.7843 23.7843 30.5 15.5 30.5C7.21573 30.5 0.5 23.7843 0.5 15.5C0.5 7.21573 7.21573 0.5 15.5 0.5C23.7843 0.5 30.5 7.21573 30.5 15.5Z", fill: "white", stroke: "#D1D5DB" })), /* @__PURE__ */ V("path", { d: "M23.983 11.132C23.9699 10.9806 23.8699 10.8506 23.727 10.7988C23.5837 10.7466 23.4233 10.7822 23.3155 10.8894L21.1098 13.0866L18.6647 12.3153L17.8905 9.87937L20.0961 7.68201C20.2041 7.57458 20.2393 7.41475 20.1873 7.27224C20.1348 7.12945 20.0046 7.02999 19.8524 7.01688C18.5129 6.9019 17.2004 7.37836 16.2514 8.32387C14.9518 9.61873 14.6076 11.5096 15.217 13.1213C15.1504 13.1773 15.0847 13.2365 15.0199 13.3004L7.65736 20.2216C7.65476 20.2241 7.6522 20.2268 7.64939 20.2293C6.78354 21.092 6.78354 22.4955 7.64939 23.3583C8.51539 24.2209 9.91396 24.2104 10.7797 23.3477C10.7834 23.3443 10.7868 23.3408 10.7902 23.3369L17.677 15.945C17.7398 15.8822 17.798 15.8165 17.853 15.749C19.4713 16.3573 21.3705 16.0152 22.6713 14.7195C23.62 13.7739 24.0986 12.4663 23.983 11.132ZM9.67019 22.4264C9.35113 22.7442 8.83439 22.744 8.51536 22.4264C8.19644 22.1089 8.19644 21.5937 8.51536 21.2761C8.83439 20.9585 9.35113 20.9585 9.67019 21.2761C9.98911 21.5937 9.98911 22.1089 9.67019 22.4264Z", fill: "black" }), /* @__PURE__ */ V("defs", null, /* @__PURE__ */ V("clipPath", { id: "clip0_64_2" }, /* @__PURE__ */ V("rect", { width: 31, height: 31, fill: "white" })))), Cf = (r) => /* @__PURE__ */ V("svg", { width: 31, height: 31, viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M2 24.0437V22.6518C4.30404 21.9559 5.82929 20.347 6.17596 18.244C6.45967 16.523 5.87584 14.7802 4.66788 13.505L5.50401 12.1672C6.3441 12.2632 7.12499 12.2938 7.83019 12.2273C8.91308 12.1253 10.0603 11.7686 10.8965 10.814C11.7162 9.87828 11.9364 8.70751 11.9455 7.65019C11.9509 7.01984 11.882 6.33439 11.7615 5.60532L13.1089 4.93163C14.6862 6.27858 16.5967 7.00972 18.5085 6.50659C20.496 5.98355 21.7104 4.35171 22.2287 2.32023L23.4959 2.17943C23.7105 2.84427 23.9686 3.45839 24.2803 4.0055C24.8609 5.02453 25.7009 5.93317 26.8959 6.37534C28.1054 6.8229 29.35 6.6716 30.4872 6.21488C31.2478 5.9094 32.0092 5.4502 32.771 4.87155L33.84 5.40607C33.3102 7.17682 33.6407 8.97473 34.9205 10.3525C36.2854 11.8219 38.3837 12.4206 40.6053 12.1884L41.4091 13.3137C40.1484 14.904 39.5422 16.7943 40.0082 18.6621C40.4975 20.623 42.0098 21.9631 44 22.6091V23.6937C42.0295 24.646 40.407 25.9295 39.9934 27.9032C39.7449 29.089 40.0083 30.2272 40.4663 31.2395C40.7549 31.8775 41.1444 32.5183 41.6038 33.1622L41.0881 34.0648C39.1096 33.5569 37.1545 33.7409 35.7252 35.1442C34.3293 36.5148 34.0136 38.5186 34.2755 40.5318L32.7931 41.4583C31.191 40.0523 29.3504 39.2822 27.3831 40.0414C26.2841 40.4655 25.451 41.2846 24.816 42.1501C24.4114 42.7016 24.0463 43.3278 23.7127 44H22.6585C22.1786 42.2318 21.2165 40.6691 19.4091 40.0247C17.4936 39.3418 15.3888 40.0023 13.3765 41.2022L11.9877 40.5078C12.4255 38.6858 12.158 36.865 10.7918 35.5311C9.4171 34.1889 7.44044 33.8741 5.42929 34.2133L4.6584 32.9799C6.03869 31.6871 6.93069 30.0087 6.40539 28.071C6.07607 26.8563 5.24467 25.9088 4.25062 25.2068C3.60737 24.7526 2.85005 24.3664 2 24.0437Z", stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ V("circle", { cx: 23, cy: 23, r: 12, stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ V("path", { d: "M23 39.75C32.2508 39.75 39.75 32.2508 39.75 23C39.75 13.7492 32.2508 6.25 23 6.25C13.7492 6.25 6.25 13.7492 6.25 23C6.25 32.2508 13.7492 39.75 23 39.75Z", stroke: "black", strokeWidth: 3.5 })), kf = `.shared-icon{background-color:#fba157;padding:5px 10px;border-radius:8px;font-size:12px;display:flex;justify-content:center;align-items:center;color:#fff}
`, Da = ({
  text: r
}) => p(j, {
  children: [p("style", {
    type: "text/css",
    children: kf
  }), p("div", {
    className: "shared-icon",
    children: p("p", {
      className: "text",
      children: r || "Shared with you"
    })
  })]
});
function rt({
  spanner: r,
  selected: e,
  settings: t,
  simple: i,
  bike: n,
  compact: s,
  readOnly: o,
  onClick: a,
  shared: l,
  custom: u,
  noSymbol: c,
  ...d
}) {
  var k;
  const h = (k = n.images) != null && k.length ? n.images : [Be("bike.png")], f = Y(null), [b, v] = R(0), w = Y(null);
  U(() => {
    const A = f == null ? void 0 : f.current;
    if (A) {
      var C = new IntersectionObserver(function(D) {
        var S = D.reduce(function(B, E) {
          return E.intersectionRatio > B.intersectionRatio ? E : B;
        });
        S.intersectionRatio > 0 && v(Number(S.target.getAttribute("data-slide")));
      }, {
        root: A,
        threshold: 0.8
      });
      return A.querySelectorAll("&>div").forEach((D) => {
        C.observe(D);
      }), () => {
        C.disconnect();
      };
    }
  }, [f]);
  function m(A) {
    if (!f.current)
      return;
    const C = f.current.querySelectorAll("&>div")[A];
    f.current.scrollLeft = C.clientWidth * A;
  }
  function g() {
    b != 0 && m(b - 1);
  }
  function x() {
    b != h.length - 1 && m(b + 1);
  }
  const _ = (h == null ? void 0 : h.length) && b !== h.length - 1, y = (h == null ? void 0 : h.length) && b !== 0;
  return p("div", {
    class: X("rounded-xl select-none border  py-4 relative", e ? "border-gray-950" : "border-gray-300"),
    ...d,
    onClick: (A) => {
      if (w.current && !w.current.contains(A.target))
        a(A);
      else {
        A.preventDefault();
        return;
      }
    },
    children: [!i && p("p", {
      class: "text-gray-950 px-4 text-base font-normal font-nunito leading-tight ",
      children: s ? p(j, {
        children: o ? `${n.bike_Brand} ${n.year} ${n.spec}` : n.name && n.isCustom ? n.name : `${n.brand} ${n.year} ${n.bikeSpec} ${n.variant ? n.variant : ""}`
      }) : p(j, {
        children: o ? n.bike_Name : n.name
      })
    }), p("div", {
      class: "relative mt-2",
      children: [p("div", {
        ref: f,
        class: X("flex scroll-smooth snap-mandatory  no-scrollbar h-32 snap-x space-x-2 relative overflow-x-auto", "px-4"),
        "data-active-slide": b,
        children: [!o && h.length && h.map((A, C) => p("div", {
          "data-slide": C,
          class: "w-full h-full snap-center flex items-center flex-none",
          children: p("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: A,
            alt: A,
            onError: (D) => D.currentTarget.src = `${as}/bike.png`
          })
        }, C)), o && p("div", {
          class: "w-full h-full snap-center flex items-center flex-none",
          children: p("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: `${vn}/${wn(n.bike_Brand)}/400/${n.bike_Thumbnail}`,
            alt: n.bike_Reference,
            onError: (A) => A.currentTarget.src = `${as}/bike.png`
          })
        })]
      }), p(j, {
        children: [p("div", {
          onClick: g,
          class: X("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center left-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", y ? "" : "hidden"),
          children: p(tt, {
            class: "h-3 text-gray-500 -rotate-180"
          })
        }), p("div", {
          onClick: x,
          class: X("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center right-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", _ ? "" : "hidden"),
          children: p(tt, {
            class: "h-3 text-gray-500 translate-x-px"
          })
        })]
      })]
    }), (h == null ? void 0 : h.length) > 1 && p("div", {
      class: "space-x-2 flex items-center justify-center",
      children: h.map((A, C) => p("div", {
        class: X("rounded-xl w-2 h-2 transition-all duration-300", C == b ? " bg-gray-950 scale-125" : " bg-gray-200")
      }, C))
    }), (l || n.isShared) && p("div", {
      className: "absolute left-4 bottom-4",
      children: p(Da, {})
    }), (u || n.isCustom) && p("div", {
      className: "absolute left-4 bottom-4",
      children: p(Da, {
        text: "Custom"
      })
    }), p("div", {
      className: "spanner_wrapper absolute right-4 bottom-14 h-fit w-fit",
      ref: w,
      children: r && e && p(yf, {
        class: "cursor-pointer",
        onClick: (A) => {
          A.preventDefault(), !(n != null && n.isCustom) && !(n != null && n.isShared) ? re("/workshop") : n != null && n.isShared ? re("/read-only") : re("/bom");
        }
      })
    }), e && !t ? p(_f, {
      class: "absolute right-4 bottom-4 cursor-pointer"
    }) : t ? p(Cf, {
      class: "absolute right-4 bottom-4 cursor-pointer",
      onClick: () => re("/settings")
    }) : o ? p("span", {}) : c ? p("span", {}) : p(j, {
      children: p("span", {
        class: "border absolute right-4 bottom-4 rounded-full h-8 w-8 border-gray-300 bg-white/75"
      })
    })]
  });
}
function Aa(r, e) {
  const t = () => {
    try {
      const s = window.localStorage.getItem(r);
      return s ? JSON.parse(s) : e;
    } catch (s) {
      return console.error(s), e;
    }
  }, [i, n] = R(t);
  return U(() => {
    try {
      if (!i && r === "bm_currentBike")
        window.localStorage.setItem(r, null);
      else if (!i)
        window.localStorage.removeItem(r);
      else {
        const s = JSON.stringify(i);
        window.localStorage.setItem(r, s);
      }
    } catch (s) {
      console.error(s);
    }
  }, [r, i]), [i, n, t];
}
function Df(r, e) {
  const t = () => {
    try {
      const s = window.sessionStorage.getItem(r);
      return s ? JSON.parse(s) : e;
    } catch (s) {
      return console.error(s), e;
    }
  }, [i, n] = R(t);
  return U(() => {
    try {
      if (!i)
        window.sessionStorage.removeItem(r);
      else {
        const s = JSON.stringify(i);
        window.sessionStorage.setItem(r, s);
      }
    } catch (s) {
      console.error(s);
    }
  }, [r, i]), [i, n, t];
}
const Vn = {
  brand: {
    options: [],
    value: null,
    error: null
  },
  model: {
    options: [],
    value: null,
    error: null
  },
  frameSeries: {
    options: [],
    value: null,
    error: null
  },
  year: {
    options: [],
    value: [],
    error: null
  },
  bikeSpec: {
    options: [],
    value: null,
    error: null
  },
  frameSize: {
    options: [],
    value: null,
    error: null
  },
  options: [],
  value: {}
}, Pu = ki(void 0), Af = ({
  children: r
}) => {
  var P;
  const e = window.BikeMatrix.getConfig(), [t, i] = Aa(qs, null), [n, s] = Aa("bm_lounge", []), o = Array.isArray(n) ? n : (n == null ? void 0 : n.bikes) ?? [], a = new Se(e.apiUrl, e.apiKey, e.apiToken, e.isShopify), [l, u] = R(Vn), c = Y({}), [d, h] = R([]), [f, b] = R(!1), [v, w] = R(null);
  R(null), U(() => {
    const L = me.resolvedLanguage || me.language || "en-GB";
    (async () => {
      if (t != null && t.brandId) {
        const q = await El(t == null ? void 0 : t.brandId, L);
        w(q);
      }
    })();
  }, [t == null ? void 0 : t.brandId]);
  function m(L) {
    u((N) => {
      var q;
      return {
        ...N,
        [L]: {
          options: [],
          value: (q = Vn[L]) == null ? void 0 : q.value
        }
      };
    });
  }
  function g(L, N) {
    u((q) => (q[L].value = N, {
      ...q
    }));
  }
  const x = () => {
    u((L) => {
      var N;
      return {
        ...Vn,
        brand: {
          options: ((N = L.brand) == null ? void 0 : N.options) || [],
          error: L.brand.error || null
        }
      };
    });
  }, _ = () => !Array.isArray(n) && (n != null && n._loungeId) ? n._loungeId : crypto.randomUUID(), y = (L) => {
    i({
      ...L
    }), s({
      _loungeVersion: Ln,
      _loungeId: _(),
      bikes: [...(o || []).filter((N) => !!N.key && N.key !== L.key), L]
    });
  }, k = (L) => {
    (t == null ? void 0 : t.key) === L && i(null), s({
      _loungeVersion: Ln,
      _loungeId: _(),
      bikes: [...(o || []).filter((N) => !!N.key && N.key !== L)]
    });
  }, A = () => {
    e.logLevel === "verbose" && console.log("Dispatch BikeChanging (pre-change)..."), document.dispatchEvent(new Event("BikeChanging", {
      bubbles: !0,
      composed: !0
    }));
  }, C = () => {
    setTimeout(() => {
      x(), re("/");
    }, 500);
  }, D = async () => {
    const L = await a.getBikeBrands();
    L.success ? (sessionStorage.setItem("bm_brands", JSON.stringify(L.data)), u((N) => (N.brand.options = L.data.map((q) => ({
      label: q.bike_Brand,
      value: q.bike_Brand_ID
    })), N.brand.error = null, {
      ...N
    }))) : L.success || (u((N) => (N.brand.error = L.error, {
      ...N
    })), e.logLevel === "verbose" && console.error(L.logError));
  }, S = async () => {
    const L = await a.getBikeModels(l.brand.value);
    L.success ? u((N) => (N.model.options = L.data.map((q) => ({
      label: q.model_Family,
      value: q.model_Family_ID
    })), {
      ...N
    })) : L.success || (u((N) => (N.model.error = L.error, {
      ...N
    })), e.logLevel === "verbose" && console.error(L.logError));
  }, B = async () => {
    const L = await a.getBikeFrameSeries(l.model.value);
    L.success ? u((N) => {
      var ie, ee;
      const q = [];
      return N.frameSeries.options = L.data.reduce((H, Re) => {
        const ue = {
          label: Re.model_Spec,
          value: Re.model_Spec_ID
        };
        return q.includes(ue.value) || (q.push(ue.value), H.push(ue)), H;
      }, []), ((ie = N.frameSeries.options) == null ? void 0 : ie.length) === 1 && (N.frameSeries.value = (ee = N.frameSeries.options[0]) == null ? void 0 : ee.value), {
        ...N
      };
    }) : L.success || (u((N) => (N.frameSeries.error = L.error, {
      ...N
    })), e.logLevel === "verbose" && console.error(L.logError));
  }, E = async () => {
    const L = await a.getBikeSpecs(l.frameSeries.value);
    if (L.success) {
      const N = [], q = [], ie = [], ee = [];
      L.data.forEach((H) => {
        var Wt, ur;
        const Re = H.year + "-" + H.spec.replace(/[^0-9a-zA-Z]/g, "") + (H.bike_Variant ? "-" + H.bike_Variant.replace(/[^0-9a-zA-Z]/g, "") : ""), ue = {
          label: H.spec,
          value: H.spec
        };
        if (N.includes(ue.value) || (N.push(ue.value), ie.push(ue)), !q.includes(Re)) {
          q.push(Re);
          const Hr = {
            _key: Re,
            key: H.bike_Key,
            name: H.bike_Name,
            variant: H.bike_Variant,
            brand: H.bike_Brand,
            brandId: H.bike_Brand_ID,
            model: H.model_Family,
            modelId: H.model_Family_ID,
            frameSeries: H.model_Spec,
            frameSeriesId: H.model_Spec_ID,
            bikeSpec: H.spec,
            year: H.year,
            images: [H.bike_Thumbnail, ...((Wt = H == null ? void 0 : H.bike_Images) == null ? void 0 : Wt.split(",")) || []].filter((ze) => !!ze).map((ze) => `${vn}/${wn(H.bike_Brand)}/400/${ze}`)
          }, ht = L.data.reduce((ze, We) => (We.year == H.year && We.spec === H.spec && We.model_Spec === H.model_Spec && We.bike_Variant === H.bike_Variant && ze.push({
            key: We.bike_Key,
            name: We.bike_Name,
            variant: We.bike_Variant,
            sizeId: We.bike_Size_ID,
            size: We.bike_Size
          }), ze), []);
          (ur = ht == null ? void 0 : ht.filter((ze) => !!ze.sizeId)) != null && ur.length && (Hr.sizes = ht), ee.push(Hr);
        }
        c.current[l.frameSeries.value] = Array.from(/* @__PURE__ */ new Set([...c.current[l.frameSeries.value] || [], H.year]));
      }), u((H) => (H.bikeSpec.options = ie, {
        ...H
      })), h(ee);
    } else
      L.success || (u((N) => (N.bikeSpec.error = L.error, {
        ...N
      })), e.logLevel === "verbose" && console.error(L.logError));
  }, T = async () => {
    u((L) => {
      const N = c.current[L.frameSeries.value] || [];
      return L.year.options = N.map((q) => ({
        label: q,
        value: q
      })), {
        ...L
      };
    });
  }, M = async () => {
    u((L) => {
      var N, q, ie;
      if (L.frameSize.options = (N = l == null ? void 0 : l.value) != null && N.sizes ? l.value.sizes.filter((ee) => !!ee.size).map((ee) => ({
        label: ee.size,
        value: ee.size
      })) : [], ((q = L.frameSize.options) == null ? void 0 : q.length) === 1) {
        const ee = (ie = L.frameSize.options[0]) == null ? void 0 : ie.value;
        L.frameSize.value = ee, L.value.frameSize = ee;
      }
      return {
        ...L
      };
    });
  };
  U(() => (document.addEventListener("BmToggleModal", C), () => {
    document.removeEventListener("BmToggleModal", C);
  }), []);
  const [F, $] = Df("bm_diagnostics", []), I = () => {
    const N = new URLSearchParams(window.location.search).get("diagnostics");
    JSON.parse(sessionStorage.getItem("bm_diagnostics")).includes(N) || $([...F, N]), N === null && $([]);
  };
  U(() => {
    A(), I();
  }, [t]), U(() => {
    var N;
    const L = (q) => ({
      ...q,
      images: (q.images ?? []).map((ie) => Rd(ie, q.brand))
    });
    Array.isArray(n) && s({
      _loungeVersion: Ln,
      _loungeId: crypto.randomUUID(),
      bikes: n.map(L)
    }), (N = t == null ? void 0 : t.images) != null && N.some((q) => /\/400-/.test(q)) && i(L(t));
  }, []), U(() => {
    sessionStorage.getItem("bm_brands") ? u((L) => (L.brand.options = JSON.parse(sessionStorage.getItem("bm_brands")).map((N) => ({
      label: N.bike_Brand,
      value: N.bike_Brand_ID
    })), {
      ...L
    })) : _t.value && D();
  }, [_t.value]), U(() => {
    l.brand.value && (m("model"), m("frameSeries"), S());
  }, [l.brand.value]), U(() => {
    l.model.value && (m("frameSeries"), B());
  }, [l.model.value]), U(() => {
    l.frameSeries.value && (m("bikeSpec"), m("year"), h([]), E().then(() => {
      T();
    }));
  }, [l.frameSeries.value]), U(() => {
    l.value._key && (m("frameSize"), M());
  }, [(P = l.value) == null ? void 0 : P._key]), U(() => {
    l.frameSize.value && u((L) => {
      var N, q;
      return L.value = {
        ...L.value,
        ...((q = (N = L == null ? void 0 : L.value) == null ? void 0 : N.sizes) == null ? void 0 : q.find((ie) => l.frameSize.value == ie.size)) || {}
      }, delete L.value.sizes, L;
    });
  }, [l.frameSize.value]);
  const O = {
    // Wizard Bike
    bike: l,
    setBike: u,
    setBikeAttr: g,
    resetBike: x,
    // Search Results
    results: d,
    loading: f,
    setLoading: b,
    // Compatible Parts
    compatibleCollections: v,
    // Final Bike
    currentBike: t,
    setCurrentBike: i,
    removeBike: k,
    saveBike: y,
    // Bike Lounge
    lounge: o
  };
  return p(Pu.Provider, {
    value: O,
    children: r
  });
}, Ie = () => {
  const r = hn(Pu);
  if (!r)
    throw new Error("useBikeState must be used within a BikeProvider");
  return r;
};
function Bt() {
  const {
    t: r
  } = te(), t = window.BikeMatrix.getConfig(), [i, n] = R(null);
  return t.internalLink && n(t.internalLink), p(j, {
    children: [p("p", {
      class: "text-gray-600 max-w-sm mx-auto mt-4 text-center font-normal text-xs",
      children: r("bikeselector_home_footer_message")
    }), p("a", {
      href: i || "https://bikematrix.io/landed-it",
      target: "_blank",
      class: "text-gray-950 block  underline  mb-4 font-bold mt-4 text-center text-xs",
      children: r("bikematrix_poweredby")
    })]
  });
}
const Sf = (r) => /* @__PURE__ */ V("svg", { width: 17, height: 17, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M16.983 4.13197C16.9699 3.98064 16.8699 3.85064 16.727 3.7988C16.5837 3.74665 16.4233 3.78215 16.3155 3.88937L14.1098 6.08655L11.6647 5.31527L10.8905 2.87937L13.0961 0.682011C13.2041 0.574581 13.2393 0.414746 13.1873 0.272238C13.1348 0.129446 13.0046 0.0299881 12.8524 0.0168782C11.5129 -0.0980992 10.2004 0.378357 9.25142 1.32387C7.95176 2.61873 7.60759 4.50961 8.21705 6.12135C8.15043 6.17726 8.08471 6.2365 8.01987 6.30039L0.65736 13.2216C0.654763 13.2241 0.652203 13.2268 0.649393 13.2293C-0.216464 14.092 -0.216464 15.4955 0.649393 16.3583C1.51539 17.2209 2.91396 17.2104 3.77967 16.3477C3.78341 16.3443 3.78682 16.3408 3.79024 16.3369L10.677 8.94505C10.7398 8.88222 10.798 8.8165 10.853 8.74903C12.4713 9.3573 14.3705 9.01524 15.6713 7.71952C16.62 6.77394 17.0986 5.46628 16.983 4.13197ZM2.67019 15.4264C2.35113 15.7442 1.83439 15.744 1.51536 15.4264C1.19644 15.1089 1.19644 14.5937 1.51536 14.2761C1.83439 13.9585 2.35113 13.9585 2.67019 14.2761C2.98911 14.5937 2.98911 15.1089 2.67019 15.4264Z", fill: "black" })), z = {
  id: null,
  name: null,
  product_category_id: null,
  swap: !1,
  version_id: null,
  unsaved_changes: null,
  translation: null
}, Zr = {
  bike_Key: "",
  bike_Type: null,
  bike_Name: null,
  bike_Variant: null,
  bike_Reference: null,
  bike_Thumbnail: null,
  bike_Images: null,
  bike_Brand_ID: 0,
  bike_Brand: null,
  model_Family_ID: 0,
  model_Family: null,
  model_Spec_ID: 0,
  model_Spec: null,
  spec: null,
  bike_Size_ID: null,
  bike_Size: null,
  year: 0,
  original_Bike_Key: null,
  share_Bike_Key: null,
  owner_Email_Address: null,
  brake_Configuration: null,
  cockpit: {
    stem: z,
    handlebar: z,
    seat_Post: z,
    seat_Post_Clamp: z,
    dropper_Lever: z,
    lockout_Lever: z,
    grips: z,
    pedals: z,
    saddle: z
  },
  "frame_&_fork": {
    fork: z,
    rear_Shock: z,
    headseat: z
  },
  drivetrain: {
    chainguide: z,
    bottom_Bracket: z,
    crankset: z,
    largest_Chainring: z,
    second_Largest_Chainring: z,
    third_Largest_Chainring: z,
    chainring_Spider: z,
    chain: z,
    cassette: z,
    rear_Derailleur: z,
    front_Derailleur: z,
    shifter_RH: z,
    shifter_LH: z,
    shift_Brake_Combo_RH: z,
    shift_Brake_Combo_LH: z,
    shifter_Adapter_RH: z,
    shifter_Adapter_LH: z
  },
  brakes: {
    brake_Caliper_Front: z,
    brake_Caliper_Rear: z,
    brake_Lever_RH: z,
    brake_Lever_LH: z,
    brake_Pads_Front: z,
    brake_Pads_Rear: z,
    brake_Rotor_Front: z,
    brake_Rotor_Rear: z,
    brake_Adapter_Front: z,
    brake_Adapter_Rear: z
  },
  "wheels_&_tyres": {
    front_Wheel: z,
    front_Axle: z,
    rear_Wheel: z,
    rear_Axle: z,
    tyre_Front: z,
    tyre_Rear: z
  },
  is_E_Bike: null,
  eMotor_System_ID: null,
  eBattery_ID: null,
  eControl_Unit_ID: null,
  eCharger_ID: null,
  eInterconnects_ID: null
}, Xr = {
  cockpit: {
    stem: z,
    handlebar: z,
    seat_Post: z,
    seat_Post_Clamp: z,
    dropper_Lever: z,
    lockout_Lever: z,
    grips: z,
    pedals: z,
    saddle: z
  },
  "frame_&_fork": {
    headset: z,
    fork: z,
    rear_Shock: z
  },
  drivetrain: {
    chainguide: z,
    bottom_Bracket: z,
    crankset: z,
    largest_Chainring: z,
    second_Largest_Chainring: z,
    third_Largest_Chainring: z,
    chainring_Spider: z,
    chain: z,
    cassette: z,
    rear_Derailleur: z,
    front_Derailleur: z,
    shifter_RH: z,
    shifter_LH: z,
    shift_Brake_Combo_RH: z,
    shift_Brake_Combo_LH: z,
    shifter_Adapter_RH: z,
    shifter_Adapter_LH: z
  },
  brakes: {
    brake_Caliper_Front: z,
    brake_Caliper_Rear: z,
    brake_Lever_RH: z,
    brake_Lever_LH: z,
    brake_Pads_Front: z,
    brake_Pads_Rear: z,
    brake_Rotor_Front: z,
    brake_Rotor_Rear: z,
    brake_Adapter_Front: z,
    brake_Adapter_Rear: z
  },
  "wheels_&_tyres": {
    front_Wheel: z,
    front_Axle: z,
    rear_Wheel: z,
    rear_Axle: z,
    tyre_Front: z,
    tyre_Rear: z
  }
}, bt = {
  headset: {},
  stem: {},
  handlebar: {},
  seat_Post: {},
  seat_Post_Clamp: {},
  dropper_Lever: {},
  lockout_Lever: {},
  grips: {},
  pedals: {},
  saddle: {},
  fork: {},
  rear_Shock: {},
  chainguide: {},
  bottom_Bracket: {},
  crankset: {},
  largest_Chainring: {},
  second_Largest_Chainring: {},
  third_Largest_Chainring: {},
  chainring_Spider: {},
  chain: {},
  cassette: {},
  rear_Derailleur: {},
  front_Derailleur: {},
  shifter_RH: {},
  shifter_LH: {},
  shift_Brake_Combo_RH: {},
  shift_Brake_Combo_LH: {},
  brake_Lever_RH: {},
  brake_Lever_LH: {},
  shifter_Adapter_RH: {},
  shifter_Adapter_LH: {},
  brake_Caliper_Front: {},
  brake_Caliper_Rear: {},
  brake_Pads_Front: {},
  brake_Pads_Rear: {},
  brake_Rotor_Front: {},
  brake_Rotor_Rear: {},
  brake_Adapter_Front: {},
  brake_Adapter_Rear: {},
  front_Wheel: {},
  front_Axle: {},
  rear_Wheel: {},
  rear_Axle: {},
  tyre_Front: {},
  tyre_Rear: {}
}, jn = (r, e) => Object.keys(r).includes(e), Or = (r) => (Object.keys(bt).forEach((e) => {
  Object.keys(r).forEach((t) => {
    `${e}_ID` === t && (bt[e].id = r[t]), `${e}_Name` === t && (bt[e].name = r[t]), `${e}_Product_Category_ID` === t && (bt[e].product_category_id = r[t]), `${e}_Swap` === t && (bt[e].swap = r[t]), `${e}_Version_ID` === t && (bt[e].version_id = r[t]), `${e}_Unsaved_Changes` === t && (bt[e].unsaved_changes = r[t]);
  });
}), Object.keys(Xr).forEach((e) => {
  Object.keys(bt).forEach((t) => {
    jn(Xr[e], t) && (Xr[e][t] = bt[t]);
  });
}), Object.keys(Xr).forEach((e) => {
  jn(Zr, e) && (Zr[e] = Xr[e]);
}), Object.keys(r).forEach((e) => {
  jn(Zr, e) && (Zr[e] = r[e]);
}), Zr), Ou = async (r) => {
  var t;
  return {
    bikeSpec: r.spec,
    brand: r.bike_Brand,
    brandId: r.bike_Brand_ID,
    frameSeries: r.spec,
    frameSeriesId: r.model_Spec_ID,
    frameSize: r.bike_Size,
    images: [`${vn}/${wn(r.bike_Brand)}/400/${r.bike_Thumbnail}`],
    isCustom: r.bike_Type === "Custom_Bike",
    isShared: r.bike_Type === "Shared_Bike",
    key: r.bike_Type === "Shared_Bike" ? r.share_Bike_Key : r.bike_Key,
    model: r.model_Family,
    modelId: r.model_Family_ID,
    name: r.bike_Name,
    size: r.bike_Size,
    sizeId: r.bike_Size_ID,
    variant: r.bike_Variant,
    year: r.year,
    _key: `${r.year}-${(t = r.spec) == null ? void 0 : t.replace(" ", "")}`
  };
};
function Ef() {
  const r = window.BikeMatrix.getConfig(), {
    bike: e,
    currentBike: t,
    setCurrentBike: i,
    lounge: n,
    removeBike: s,
    resetBike: o,
    saveBike: a
  } = Ie(), {
    t: l
  } = te(), {
    apiUrl: u,
    apiKey: c,
    apiToken: d,
    isShopify: h,
    virtualWorkshop: f
  } = window.BikeMatrix.getConfig();
  U(() => {
    ke.value = null;
  }, []);
  const b = new Se(u, c, d, h), v = async () => {
    const g = new URLSearchParams(window.location.search).get("bikematrixid"), x = sessionStorage.getItem("bm_passed_id");
    if (!(x && x !== null && g === x) && (!x || g !== x)) {
      const _ = n.find((y) => y.key === g);
      _ ? (i(_), sessionStorage.setItem("bm_passed_id", g)) : _ || (await w(g), sessionStorage.setItem("bm_passed_id", g));
    }
  }, w = async (m) => {
    const g = await b.getBikeBom(m);
    if (!(g != null && g.success)) {
      r.logLevel === "verbose" && console.error(g.logError);
      return;
    }
    const x = Or(g.data);
    e.value = await Ou(x), a(e.value), i(e.value);
  };
  return v(), U(() => {
    n.map((m) => {
      m != null && m.isCustom && (bn.value = !1);
    });
  }, [n]), p(j, {
    children: [n != null && n.length ? n == null ? void 0 : n.filter((m) => !!m._key).map((m) => p("div", {
      class: "mb-4 relative",
      children: [p("p", {
        className: "opacity-0 absolute",
        children: m.key
      }), p("div", {
        onClick: () => s(m.key),
        class: "w-7 h-7 z-10 -right-2 -top-2 flex items-center justify-center absolute bg-gray-200 text-gray-800 rounded-full",
        children: p(gi, {
          class: "h-3 w-3"
        })
      }), p(rt, {
        compact: !0,
        onClick: (g) => {
          g.preventDefault(), i((t == null ? void 0 : t.key) === (m == null ? void 0 : m.key) ? null : {
            ...m
          });
        },
        bike: m,
        selected: (t == null ? void 0 : t.key) === (m == null ? void 0 : m.key),
        spanner: f,
        custom: m == null ? void 0 : m.isCustom
      })]
    }, m.key)) : p("div", {
      class: X("relative mb-4 z-10 "),
      children: [p("div", {
        class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
        children: [p("span", {
          class: "block rounded-lg h-6 w-1/2 bg-gray-200"
        }), p("img", {
          class: "w-auto mx-auto h-auto max-h-36 opacity-30",
          src: Be("bike.png")
        }), p("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), p("div", {
        class: X("w-full relative bg-white border -z-10 border-b-0 border-gray-300 rounded-t-xl h-20  mb-4", "after:bottom-0 after:-inset-x-px after:-top-6 after:bg-gradient-to-t after:absolute after:from-white after:to-transparent"),
        children: [p("span", {
          class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
        }), p("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), p("div", {
        class: " text-gray-800 text-center flex -mt-5 z-20 justify-center",
        children: [l("bikeselector_home_empty"), p("br", {}), l("bikeselector_home_add_a_bike")]
      })]
    }), p("button", {
      onClick: (m) => {
        m.preventDefault(), o(), re("/add");
      },
      class: X("duration-300 transition-colors sticky bottom-[128px] mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", n.length && !(t != null && t.key) ? "bg-gray-950 text-white" : n.length ? "bg-gray-200 text-gray-800" : "bg-gray-950 text-white", !t && "bottom-0", t && f && "bottom-[128px]", t && !f && "bottom-[72px]"),
      children: [l("bikeselector_home_add_btn"), p(gi, {
        class: "h-3 absolute [&>path]:stroke-[2px] right-5 justify-self-end rotate-45"
      })]
    }), !!(n != null && n.length) && !!(t != null && t.key) && f && p("button", {
      onClick: (m) => {
        m.preventDefault(), !(t != null && t.isCustom) && !(t != null && t.isShared) ? re("/workshop") : t != null && t.isCustom && !(t != null && t.isShared) ? re("/bom") : !(t != null && t.isCustom) && (t != null && t.isShared) && re("/read-only");
      },
      class: X("duration-300 sticky bottom-[72px] transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: [l("virtualworkshop_title"), p(Sf, {
        class: "h-5 absolute right-5 justify-self-end"
      })]
    }), !!(n != null && n.length) && !!(t != null && t.key) && p("button", {
      onClick: (m) => {
        m.preventDefault(), !r.showBrowseCategoryButtons && r.browseCompatibilityUrl ? window.location.href = r.browseCompatibilityUrl : re("/browse");
      },
      class: X("duration-300 sticky bottom-4 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", n.length ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-800"),
      children: l("bikeselector_home_browse_btn")
    }), p(Bt, {})]
  });
}
const Bf = (r) => /* @__PURE__ */ V("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("circle", { cx: 10, cy: 10, r: 10, fill: "#030712" }), /* @__PURE__ */ V("path", { d: "M6.57886 11.0526L9.02922 13.191L13.4604 7.02636", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), it = ({
  messages: r,
  left: e,
  margin: t
}) => {
  const {
    t: i
  } = te(), [n, s] = R(""), [o, a] = R("");
  return U(() => {
    r && r.indexOf(" ") >= 0 && (s(r.split(" ")[0]), a(r.split(" ")[1]));
  }, [r]), p("div", {
    className: `flex h-4 w-auto ${e ? "justify-start" : "justify-center"} ${t ? "mt-1" : ""}`,
    children: r && p("p", {
      className: "message text-xs text-red-500",
      children: i(n || r, {
        endpoint_location: o
      })
    })
  });
};
function di({
  type: r,
  title: e,
  placeholder: t,
  options: i = [],
  disabled: n = void 0,
  loading: s = !1,
  infoVisible: o = !1,
  children: a = void 0,
  error: l = null,
  ...u
}) {
  const {
    t: c
  } = te(), d = (f) => {
    switch (f) {
      case "brand":
        return c("bikeselector_addbike_brand_desc");
      case "model":
        return c("bikeselector_addbike_model_desc");
      case "framespec":
        return c("bikeselector_addbike_framespec_desc");
      case "framesize":
        return c("bikeselector_size_framesize_desc");
      default:
        return "";
    }
  }, h = (f, b) => f === "framesize" && b === "One Size" ? c("bikeselector_size_framesize_one_size") : b;
  return p(j, {
    children: p("div", {
      class: "w-full flex flex-col space-y-2",
      children: [p("label", {
        class: "text-gray-800 font-bold text",
        children: e
      }), a && p("div", {
        class: X("!my-0 overflow-hidden box-border transition-all duration-300", o ? "max-h-screen" : "h-0"),
        children: [p("p", {
          class: "text-gray-600 my-1 italic text-sm",
          children: d(r)
        }), p("div", {
          class: X("rounded-xl overflow-hidden my-0 relative py-1 h-32 bg-gray-100 w-full"),
          children: a
        })]
      }), p("div", {
        class: "w-full flex items-center relative",
        children: [p("select", {
          class: X("rounded-xl peer !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg bg-white placeholder:text-gray-700 text-gray-700", "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400", u.class),
          disabled: n,
          ...u,
          children: [p("option", {
            value: "",
            selected: !u.value,
            disabled: !0,
            children: t
          }), i.map((f) => p("option", {
            value: f.value,
            disabled: f.disabled,
            children: h(r, f.label)
          }))]
        }), s ? p("span", {
          class: "absolute block loader animate-spin right-4 w-5 h-5"
        }) : u.value && typeof n == "boolean" ? p(Bf, {
          class: "right-3 absolute w-5 pointer-events-none"
        }) : p(tt, {
          class: "absolute h-3 text-gray-700 pointer-events-none rotate-90 right-5 peer-disabled:text-gray-400"
        })]
      }), l && p(it, {
        messages: l,
        left: !0,
        margin: 5
      })]
    })
  });
}
const Iu = (r) => /* @__PURE__ */ V("svg", { width: 25, height: 25, viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("circle", { cx: 12.5, cy: 12.5, r: 12, fill: "white", stroke: "black" }), /* @__PURE__ */ V("path", { d: "M9 16.0711L12.5355 12.5355M12.5355 12.5355L16.0711 9M12.5355 12.5355L16.0711 16.0711M12.5355 12.5355L9 9", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" })), Lf = `.input_container{display:flex;flex-direction:column}.input_wrapper{width:100%;border-radius:12px;padding:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:space-between}.input_wrapper input{width:100%}
`, Ru = ({
  value: r,
  setValue: e,
  placeholder: t,
  type: i,
  error: n,
  submitInput: s,
  label: o,
  instructions: a
}) => p(j, {
  children: [p("style", {
    type: "text/css",
    children: Lf
  }), p("div", {
    className: "input_container",
    children: [o && p("label", {
      class: "text-gray-800 font-bold text",
      children: o
    }), a && p("label", {
      class: "text-gray-600 my-1 italic text-sm",
      children: a
    }), p("div", {
      className: "input_wrapper",
      children: [p("input", {
        placeholder: t,
        value: r,
        onChange: (l) => e(l.currentTarget.value),
        type: i,
        onKeyDown: (l) => {
          l.key === "Enter" && s();
        }
      }), p(Iu, {
        height: 20,
        width: 20,
        onClick: () => e(""),
        className: "cursor-pointer"
      })]
    }), p(it, {
      messages: n
    })]
  })]
}), Tf = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`;
function Et({
  isLoading: r,
  colour: e
}) {
  return p(j, {
    children: [p("style", {
      type: "text/css",
      children: Tf
    }), p("div", {
      class: "lds-ring",
      id: "bm-loading-spinner",
      style: {
        display: r ? "inline-block" : "none"
      },
      children: [p("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      }), p("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      }), p("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      }), p("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      })]
    })]
  });
}
const pt = ({
  onClick: r,
  primary: e,
  text: t,
  loading: i,
  disabled: n,
  sticky: s,
  children: o,
  active: a = !0,
  noMargin: l = !1
}) => p("button", {
  onClick: (u) => {
    !n && !i && (u.preventDefault(), r());
  },
  class: X("duration-300 bottom-4 transition-colors rounded-xl p-3 w-full flex justify-center items-center", `${e && a ? "bg-gray-950 text-white" : e && !a ? "bg-gray-200 text-gray-400 " : "bg-gray-200 text-gray-800"} ${s && "sticky"} ${!l && "mt-4"}`),
  style: {
    cursor: n ? "not-allowed" : "pointer",
    opacity: n ? 0.5 : 1
  },
  children: i ? p(Et, {
    isLoading: i,
    colour: e ? "#fff" : "#000"
  }) : p(j, {
    children: [p("span", {
      className: o ? "ml-auto" : "",
      children: t
    }), o]
  })
});
function Ff() {
  const r = window.BikeMatrix.getConfig(), {
    bike: e,
    setBikeAttr: t
  } = Ie(), {
    brand: i,
    model: n,
    frameSeries: s
  } = e, {
    t: o
  } = te(), [a, l] = R([]), [u, c] = R(!1), d = new Se(r.apiUrl, r.apiKey, r.apiToken, r.isShopify), [h, f] = R(null), [b, v] = R(""), w = i.value, m = i.value && n.value;
  U(() => {
    const x = r.bikeSelectorBrands ? r.bikeSelectorBrands.split(",").filter((_) => _ !== "") : [];
    if (x.length > 0 && i.options.length > 0) {
      let _ = [];
      i.options.forEach((y) => {
        x.includes(y.value.toString().trim()) && _.push(y);
      }), l(_);
    } else
      i.options.length > 0 && l(i.options);
  }, [r.bikeSelectorBrands, i.options]);
  const g = async () => {
    c(!0);
    const x = await d.getBikeBom(b);
    if (!(x != null && x.success)) {
      r.logLevel === "verbose" && console.error(x.logError), c(!1), f(x.error);
      return;
    }
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(b)) {
      const y = await d.getBikeBom(b), k = Or(y.data);
      ke.value = k, e.value = await Ou(k), c(!1), re("/confirm");
    } else
      f("error_get_bike_bom"), c(!1);
  };
  return p(j, {
    children: [p("div", {
      class: "space-y-5 relative w-full flex flex-col",
      children: [p(di, {
        type: "brand",
        title: o("bikeselector_addbike_brand_label"),
        placeholder: o("bikeselector_addbike_brand_select"),
        value: i.value,
        options: a,
        onChange: (x) => {
          t("brand", x.target.value);
        },
        loading: !i.options.length && !i.error,
        disabled: !i.options.length || i.error,
        info: !0,
        infoVisible: !i.value,
        error: i.error,
        children: p("img", {
          src: Be("info-brand.svg"),
          class: "w-full h-full"
        })
      }), p(di, {
        type: "model",
        title: o("bikeselector_addbike_model_label"),
        placeholder: o("bikeselector_addbike_model_select"),
        value: n.value,
        options: n.options,
        onChange: (x) => {
          t("model", x.target.value);
        },
        loading: w && !n.options.length && !n.error,
        disabled: !w || !n.options.length,
        info: !0,
        infoVisible: w && !n.value,
        error: n.error,
        children: p("img", {
          src: Be("info-model.svg"),
          class: "w-full h-full"
        })
      }), p(di, {
        type: "framespec",
        title: o("bikeselector_addbike_framespec_label"),
        placeholder: o("bikeselector_addbike_framespec_select"),
        value: s.value,
        loading: m && !s.options.length && !s.error,
        options: s.options,
        onChange: (x) => {
          t("frameSeries", x.target.value);
        },
        disabled: !m || !s.options.length || s.error,
        info: !0,
        infoVisible: m && !s.value,
        error: s.error,
        children: p("img", {
          src: Be("info-frameseries.svg"),
          class: "w-full h-full"
        })
      }), r.virtualWorkshop && p(j, {
        children: [p("div", {
          className: "flex justify-center items-center gap-2",
          children: [p("div", {
            className: "bg-gray-300 h-[1px] w-full"
          }), p("p", {
            className: " font-semibold text-sm",
            children: o("bikeselector_or")
          }), p("div", {
            className: "bg-gray-300 h-[1px] w-full"
          })]
        }), p(Ru, {
          value: b,
          setValue: (x) => v(x),
          label: "Bike Matrix ID",
          placeholder: o("virtualworkshop_add_by_id"),
          type: "text",
          instructions: o("virtualworkshop_bm_id_text")
        })]
      })]
    }), p(it, {
      messages: h
    }), p(pt, {
      noMargin: !0,
      primary: !0,
      text: o("bikeselector_addbike_find_btn"),
      onClick: () => {
        i.value && n.value && s.value ? re("/search") : b && g();
      },
      active: i.value && n.value && s.value || b,
      loading: u,
      children: p(tt, {
        class: "h-3 ml-auto justify-self-end"
      })
    })]
  });
}
function Nf() {
  var b, v, w, m;
  const {
    bike: r,
    setBike: e,
    setBikeAttr: t,
    results: i,
    loading: n
  } = Ie(), {
    year: s,
    bikeSpec: o
  } = r, {
    t: a
  } = te(), [l, u] = [r.value, (g) => e((x) => ({
    ...x,
    value: g
  }))], c = ct(() => {
    const g = i == null ? void 0 : i.filter((x) => {
      var y;
      let _ = !0;
      return o.value && (_ = x.bikeSpec === o.value), _ && s.value.length && (_ = (y = s.value) == null ? void 0 : y.includes(x.year)), _;
    });
    return g.some((x) => x._key == l._key) || u({}), g;
  }, [i, o.value, s.value]), d = ct(() => o.value ? i.filter((x) => o.value == x.bikeSpec).map((x) => x.year) : s.options.map((x) => x.value), [o.value]), h = ct(() => {
    var x;
    if (!((x = s.value) != null && x.length))
      return o.options;
    const g = i.filter((_) => {
      var y;
      return (y = s.value) == null ? void 0 : y.includes(_.year);
    }).map((_) => _.bikeSpec);
    return o.options.map((_) => ({
      ..._,
      disabled: !g.includes(_.value)
    }));
  }, [o.options, s.value]), f = (g) => g === 0 ? a("bikeselector_search_no_bikes_found") : g === 1 ? a("bikeselector_search_one_bike_found") : a("bikeselector_search_number_bikes_found", {
    number_found: g
  });
  return p(j, {
    children: [p("div", {
      class: "space-y-3 mb-6 relative w-full flex flex-col",
      children: [(r.bikeSpec.error || r.frameSize.error || r.year.error) && p(it, {
        messages: r.bikeSpec.error || r.frameSize.error || r.year.error
      }), p(di, {
        type: "bikespec",
        title: a("bikeselector_search_bikespec_label"),
        placeholder: a("bikeselector_search_bikespec_select"),
        value: o.value,
        options: [{
          label: a("bikeselector_search_bikespec_select_all"),
          value: ""
        }, ...h],
        onChange: (g) => {
          t("bikeSpec", g.target.value);
        },
        disabled: !((b = o.options) != null && b.length) || r.bikeSpec.error,
        loading: !((v = o.options) != null && v.length) && !r.bikeSpec.error
      }), p("div", {
        class: "w-full flex flex-col space-y-2",
        children: [p("label", {
          class: "text-gray-800 font-bold text",
          children: a("bikeselector_search_year_label")
        }), p("div", {
          class: X("flex space-x-2 overflow-x-auto", "-mx-8 w-[calc(100%_+_64px)] px-8 no-scrollbar"),
          children: (w = s.options) != null && w.length ? (m = s.options) == null ? void 0 : m.map((g) => {
            var y;
            const x = o.value && !d.includes(g.value), _ = (y = s.value) == null ? void 0 : y.includes(g.value);
            return p("div", {
              onClick: () => {
                x || t("year", _ ? s.value.filter((k) => k !== g.value) : [...s.value, g.value]);
              },
              class: X("rounded-full cursor-pointer items-center flex border  py-2 px-4", _ ? "pr-3 bg-gray-950 border-gray-950 text-white" : "border-gray-300 text-gray-700 ", x && "hidden"),
              children: [g.label, _ && p(gi, {
                class: "w-3 h-3 ml-2"
              })]
            });
          }) : Array(2).fill(0).map((g, x) => p("div", {
            class: "rounded-full items-center flex border py-2 bg-gray-100 px-4 bg-100 border-gray-300 animate-pulse",
            children: p("span", {
              class: "rounded-lg bg-gray-100 w-9 h-5"
            })
          }, x))
        })]
      }), p("div", {
        class: X("text-nowrap font-medium w-full flex", "[&>span]:text-gray-500 [&>span]:font-normal"),
        children: [n ? (
          // "Searching..."
          p(j, {
            children: a("bikeselector_search_searching")
          })
        ) : p(j, {
          children: f(c.length)
        }), " ", (i == null ? void 0 : i.length) > 0 && p(j, {
          children: [p("span", {
            children: "("
          }), p("span", {
            class: "whitespace-nowrap overflow-hidden text-ellipsis truncate",
            children: [i[0].brand, " ", i[0].frameSeries]
          }), p("span", {
            children: ")"
          })]
        })]
      }), p("div", {
        class: "grid grid-cols-1 sm:grid-cols-2 gap-4",
        children: c != null && c.length && !n ? c.map((g, x) => p(rt, {
          "data-key": g._key,
          bike: g,
          selected: g._key === l._key,
          onClick: (_) => {
            _.preventDefault(), u(g);
          },
          compact: !0
        }, g._key)) : Array(n ? 2 : 1).fill(0).map((g, x) => p("div", {
          class: X("w-full relative rounded-xl h-40 bg-white border border-gray-200 ", n && "animate-pulse"),
          children: [p("span", {
            class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
          }), p("span", {
            class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-200"
          })]
        }, x))
      })]
    }), p("button", {
      onClick: (g) => {
        var x, _;
        if (g.preventDefault(), l._key) {
          const y = (x = this.base.querySelector(`[data-key="${l._key}"] [data-active-slide]`)) == null ? void 0 : x.getAttribute("data-active-slide"), A = [(_ = this.base.querySelector(`[data-key="${l._key}"] [data-slide="${y}"] img`)) == null ? void 0 : _.src].filter((C) => !!C);
          A != null && A.length && e((C) => (C.value = {
            ...C.value || {},
            images: A
          }, {
            ...C
          })), re("/size");
        }
      },
      class: X("duration-300 transition-colors sticky bottom-6 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", l._key ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [p("span", {
        class: "ml-auto",
        children: a("bikeselector_search_confirm_btn")
      }), " ", p(tt, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
function Mf() {
  var s, o;
  const {
    bike: r,
    setBikeAttr: e,
    setBike: t
  } = Ie(), {
    frameSize: i
  } = r, {
    t: n
  } = te();
  return U(() => {
    var a;
    (a = i.options) != null && a.length || re("/confirm");
  }, []), p(j, {
    children: [p(rt, {
      bike: r.value,
      selected: !0,
      compact: !0
    }), p("div", {
      class: " mt-4 mb-6 relative w-full flex flex-col",
      children: p(di, {
        type: "framesize",
        instruction: !0,
        title: n("bikeselector_size_framesize_label"),
        placeholder: n("bikeselector_size_framesize_select"),
        value: i.value,
        options: i.options,
        onChange: (a) => {
          e("frameSize", a.target.value), t((l) => {
            var u;
            return l.value.frameSize = ((u = i.options.find((c) => c.value == a.target.value)) == null ? void 0 : u.label) || "", l;
          });
        },
        selected: !0,
        info: !0,
        infoVisible: !0,
        disabled: !((s = i.options) != null && s.length),
        loading: !((o = i.options) != null && o.length),
        children: p("img", {
          src: Be("info-size.svg"),
          class: "w-full h-full"
        })
      })
    }), p("button", {
      onClick: (a) => {
        a.preventDefault(), i.value && re("/confirm");
      },
      class: X("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", i.value ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [p("span", {
        class: "ml-auto",
        children: n("bikeselector_size_confirm_btn")
      }), " ", p(tt, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
const ot = Ae({
  title: "",
  step: 0,
  back: ""
});
function Pf({
  children: r
}) {
  const {
    t: e
  } = te();
  return p(j, {
    children: [p("div", {
      class: "relative flex items-center justify-center w-full h-10 my-5 sm:mt-8",
      children: [!!ot.value.back && p("div", {
        onClick: () => re(ot.value.back),
        class: " w-10 h-10 absolute left-0 rounded-xl self-start border-gray-200 border items-center justify-center flex",
        children: p(tt, {
          class: "h-3 text-gray-500 -translate-x-px -rotate-180"
        })
      }), p("h2", {
        class: "text-xl font-bold",
        style: {
          maxWidth: "70%",
          textAlign: "center"
        },
        children: e(ot.value.title)
      })]
    }), r, typeof ot.value.step < "u" && p("div", {
      class: "space-x-2 my-6 flex items-center justify-center",
      children: [0, 1, 2, 3].map((t) => p("div", {
        class: X("rounded-xl h-2 transition-all duration-300", t == ot.value.step ? "w-6 bg-gray-950" : "w-2 bg-gray-200")
      }, t))
    })]
  });
}
function Of() {
  const {
    bike: r,
    saveBike: e
  } = Ie(), {
    apiUrl: t,
    apiKey: i,
    apiToken: n,
    isShopify: s
  } = window.BikeMatrix.getConfig(), {
    brand: o,
    model: a,
    frameSeries: l,
    frameSize: u,
    year: c,
    bikeSpec: d
  } = r.value, {
    t: h
  } = te(), f = ke.value, b = new Se(t, i, n, s);
  return U(() => {
    !u && !f ? ot.value.back = "/search" : f && (ot.value.back = "/add");
  }, []), p(j, {
    children: [p(rt, {
      bike: r.value,
      selected: !0,
      compact: !0
    }), p("div", {
      class: " space-y-4 mt-4 mb-6 relative w-full flex flex-col",
      children: [{
        // title: "Brand, Model, Frame Series",
        title: h("bikeselector_confirm_brandmodelframespec_label"),
        value: [o, a, l].join(", "),
        path: "/add"
      }, {
        // title: "Year, Bike Spec",
        title: h("bikeselector_confirm_yearbikespec_label"),
        value: [c, d].join(", "),
        path: "/search"
      }, {
        // title: "Frame Size",
        title: h("bikeselector_confirm_framesize_label"),
        value: u,
        path: "/size"
      }].filter((v) => !!v.value).map((v) => p("div", {
        class: "w-full flex flex-col space-y-2",
        children: [p("label", {
          class: "text-gray-800 font-bold",
          children: v.title
        }), p("div", {
          onClick: () => re(v.path),
          class: "w-full flex items-center relative cursor-pointer",
          children: [p("div", {
            class: X("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-700"),
            children: v.value
          }), p(tt, {
            class: "absolute h-3 text-gray-700 pointer-events-none right-4 peer-disabled:text-gray-400"
          })]
        })]
      }, v.path))
    }), p("button", {
      onClick: (v) => {
        v.preventDefault(), b.raceControl("AddBikeToLounge", {
          BikeKey: r.value.key
        }), e(r.value), re("/browse");
      },
      class: X("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: h("bikeselector_confirm_confirm_btn")
    }), p("p", {
      class: "text-gray-600 -mb-3 mt-2 text-center font-normal text-xs",
      children: h("bikeselector_confirm_notyourride_msg")
    })]
  });
}
function If() {
  const {
    currentBike: r,
    compatibleCollections: e
  } = Ie(), [t, i] = R(!0), [n, s] = R(), {
    t: o
  } = te(), a = () => {
    if (e && e.length > 0) {
      let l = [];
      e.map((u) => {
        l.some((c) => c.text_id === u.text_id) || l.push(u);
      }), s(l);
    }
  };
  return U(() => {
    a();
  }, [e]), U(() => {
    n && i(!1);
  }, [n]), p(j, {
    children: [p(rt, {
      bike: r,
      selected: !0
    }), !!(n != null && n.length) && !e.error && p(j, {
      children: [p("p", {
        class: "text-gray-800 mt-4 font-bold",
        children: o("bikeselector_browse_products_label")
      }), p("div", {
        class: "gap-3 mt-2 mb-6 relative w-full flex flex-wrap",
        children: n.map((l) => p("a", {
          href: l.url,
          class: "group flex items-center relative cursor-pointer",
          children: [p("div", {
            class: X("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-950", "group-disabled:bg-gray-100 group-disabled:border-gray-200 group-disabled:text-gray-400"),
            children: o(l.text_id)
          }), p(tt, {
            class: "absolute h-3 pointer-events-none right-4 group-disabled:text-gray-400 text-gray-950"
          })]
        }, l.text_id))
      })]
    }), p("div", {
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem"
      },
      children: p(Et, {
        isLoading: t,
        colour: "#000"
      })
    }), e && (e == null ? void 0 : e.error) && p(it, {
      messages: e.error,
      left: !0,
      margin: 20
    }), p("button", {
      onClick: (l) => {
        l.preventDefault(), Pr();
      },
      class: X("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: o("bikeselector_browse_shop_btn")
    }), p("button", {
      onClick: (l) => {
        l.preventDefault(), re("/");
      },
      class: X("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: o("bikeselector_browse_back_btn")
    }), p(Bt, {})]
  });
}
const Ur = () => p("div", {
  class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
  children: [p("span", {
    class: "block rounded-lg h-6 w-1/2 bg-gray-200"
  }), p("img", {
    class: "w-auto mx-auto h-auto max-h-36 opacity-30",
    src: Be("bike.png")
  }), p("span", {
    class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
  })]
});
function Rf() {
  const {
    t: r
  } = te(), t = window.BikeMatrix.getConfig(), {
    currentBike: i,
    setCurrentBike: n,
    compatibleCollections: s
  } = Ie(), o = new Se(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), [a, l] = R(!1), [u, c] = R(null), {
    saveBike: d
  } = Ie(), h = async () => {
    l(!0);
    const f = await o.addCustomBike(i.key);
    if (f.success) {
      const b = await o.getBikeBom(f == null ? void 0 : f.data);
      if (!b.success) {
        c(b.error), l(!1), t.logLevel === "verbose" && console.error(b.logError);
        return;
      }
      const v = Or(b.data);
      ke.value = v;
      const w = {
        ...i,
        key: v.bike_Key,
        isCustom: !0,
        shareId: v.share_Bike_Key
      };
      d(w), n(w), l(!1), re("/bom");
    } else {
      c(f.error), l(!1), t.logLevel === "verbose" && console.error(f.logError);
      return;
    }
  };
  return p(j, {
    children: [p("div", {
      style: {
        marginBottom: "1rem"
      },
      children: [i ? p(rt, {
        bike: i,
        noSymbol: !0,
        compact: !0
      }) : p(Ur, {}), p("div", {
        class: " text-gray-800 text-center flex z-20 justify-center font-bold mt-6",
        children: !s.error && s.length > 1 ? r("virtualworkshop_intro_text") : r("virtualworkshop_do_not_pass")
      })]
    }), p(it, {
      messages: u || s.error
    }), p(pt, {
      text: !s.error && s.length > 1 ? r("virtualworkshop_enter_button") : r("bikeselector_browse_back_btn"),
      onClick: !s.error && s.length > 1 ? () => h() : () => re("/"),
      loading: a,
      primary: !0
    }), p(Bt, {})]
  });
}
const zf = `.overflowing{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;justify-content:flex-start}.flexend{justify-content:flex-end}
`, Dt = ({
  paragraph: r,
  subheader: e,
  header: t,
  text: i,
  small: n,
  left: s,
  bold: o,
  capitalize: a,
  nowrap: l,
  flexend: u
}) => p(j, {
  children: [p("style", {
    type: "text/css",
    children: zf
  }), t ? p("h2", {
    class: "text-xl font-bold",
    children: i
  }) : e ? p("h4", {
    className: `text-gray-800 text-center flex z-20 justify-center font-bold  ${a ? "capitalize" : ""}`,
    children: i
  }) : p("p", {
    class: `text-gray-800  flex z-20 ${n ? "text-sm" : ""} ${s ? "text-start justify-start" : "text-center justify-center"} ${o ? "font-bold" : ""} ${a ? "capitalize" : ""} ${l ? "overflowing" : ""} ${u ? "flexend" : ""}`,
    children: i
  })]
}), qf = `.background-alert-wrapper{opacity:0;position:absolute;height:100%;width:100%;display:none;top:0;left:0;pointer-events:none}.alert-wrapper{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none}.alert{width:80%;padding:2rem;border-radius:12px;background-color:#fff;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:300}.text-wrapper{display:flex;flex-direction:column;align-items:center;gap:1rem}.button-wrapper{display:flex;gap:1rem;width:100%;margin-top:1rem}.translation-link-text a{text-decoration:underline}
`, so = ({
  isOpen: r,
  toggleModal: e,
  content: t,
  title: i,
  onConfirm: n,
  onCancel: s,
  children: o,
  loading: a,
  secondary: l = !1,
  contentElement: u,
  confirmDisabled: c = !1
}) => {
  const {
    t: d
  } = te(), h = Y(null), f = Y(null), b = () => {
    Q.to(f.current, {
      opacity: 1,
      duration: 0.25,
      zIndex: 2e3,
      pointerEvents: "all",
      display: "block"
    }), Q.to(h.current, {
      opacity: 1,
      duration: 0.5,
      pointerEvents: "all"
    });
  }, v = () => {
    Q.to(f.current, {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
      display: "none"
    }), Q.to(h.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
      onComplete: () => e()
    });
  };
  return U(() => {
    r ? b() : v();
  }, [r]), p("div", {
    ref: f,
    className: "background-alert-wrapper",
    children: [p("style", {
      type: "text/css",
      children: qf
    }), p("div", {
      className: "alert-wrapper",
      onClick: v,
      ref: h
    }), p("div", {
      className: "alert",
      children: [p("div", {
        className: "text-wrapper",
        children: [p(Dt, {
          text: i,
          header: !0
        }), t && p(Dt, {
          text: t,
          paragraph: !0
        }), u && p("p", {
          className: "translation-link-text",
          children: u
        })]
      }), o, l ? p(pt, {
        text: "Done",
        onClick: n,
        primary: !0,
        disabled: c
      }) : p("div", {
        className: "button-wrapper",
        children: [p(pt, {
          text: d("confirm"),
          onClick: n,
          primary: !0,
          loading: a,
          disabled: c
        }), p(pt, {
          text: d("cancel"),
          onClick: v
        })]
      })]
    })]
  });
}, $f = `.bom-table{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.bom-table_unsaved-changes{display:flex;justify-content:space-between;align-items:center}.circle{background-color:#fba157;border-radius:100%;display:flex;justify-content:center;align-items:center;color:#fff;height:16px;width:16px;min-width:16px;min-height:16px;font-size:10px}.unsaved-changes{position:relative;width:50%}
`, Vf = `.unsaved-changes_wrapper{opacity:0}.title-section{display:flex;align-items:center;justify-content:flex-end;gap:.35rem;cursor:pointer;position:relative;z-index:23;padding-right:15px}.unsaved-content{display:flex;flex-direction:column;align-items:flex-start;width:100%;gap:1rem;border-radius:12px;background-color:#fff;border:1px solid transparent;position:absolute;z-index:21;right:0;height:0;width:0;overflow:hidden;top:-1rem}.animation-wrapper{padding:15px;margin-top:2rem;width:100%;opacity:0;display:flex;flex-direction:column;gap:1rem}.unsaved-part-wrapper{width:100%}.unsaved-part{display:flex;align-items:center;justify-content:space-between;gap:1rem}.revert-button{font-size:10px;padding:3px 10px;border:1px solid #d1d5db;border-radius:12px;transition:all ease-in-out .5s;cursor:pointer}.revert-button:hover{background-color:#000;color:#fff}.close-button{position:absolute;left:6px;top:6px;cursor:pointer}
`, jf = (r) => /* @__PURE__ */ V("svg", { width: 28, height: 28, viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("circle", { cx: 14, cy: 14, r: 14, fill: "white" }), /* @__PURE__ */ V("path", { d: "M11 17L14 14M14 14L17 11M14 14L17 17M14 14L11 11", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let Sa = typeof document < "u" ? qr : U, Ea = (r) => r && !Array.isArray(r) && typeof r == "object", Ni = [], Uf = {}, zu = Q;
const oo = (r, e = Ni) => {
  let t = Uf;
  Ea(r) ? (t = r, r = null, e = "dependencies" in t ? t.dependencies : Ni) : Ea(e) && (t = e, e = "dependencies" in t ? t.dependencies : Ni), r && typeof r != "function" && console.warn("First parameter must be a function or config object");
  const { scope: i, revertOnUpdate: n } = t, s = Y(!1), o = Y(zu.context(() => {
  }, i)), a = Y((u) => o.current.add(null, u)), l = e && e.length && !n;
  return l && Sa(() => (s.current = !0, () => o.current.revert()), Ni), Sa(() => {
    if (r && o.current.add(r, i), !l || !s.current)
      return () => o.current.revert();
  }, e), { context: o.current, contextSafe: a.current };
};
oo.register = (r) => {
  zu = r;
};
oo.headless = !0;
const Hf = () => {
  const [r, e] = R(window.innerWidth), [t, i] = R(window.innerHeight);
  return U(() => {
    const n = () => {
      e(window.innerWidth), i(window.innerHeight);
    };
    return window.addEventListener("resize", n), () => {
      window.removeEventListener("resize", n);
    };
  }, []), {
    width: r,
    height: t
  };
}, Gf = ({
  unsavedParts: r,
  revertPart: e,
  readOnly: t
}) => {
  const {
    t: i
  } = te(), n = Y(null), s = Y(), o = Y(null), a = Y({}), [l, u] = R(r), c = Y(null), {
    height: d,
    width: h
  } = Hf(), {
    contextSafe: f
  } = oo(() => {
    s.current = Q.timeline({
      paused: !0
    }), s.current.to(n.current, {
      border: "1px solid #d1d5db",
      height: "auto",
      maxHeight: "150px",
      overflowY: "auto",
      width: h >= 640 ? "500px" : "366px"
    }).to(o.current, {
      opacity: 1
    }, "-=.25").reverse(), l.length > 0 ? Q.to(c.current, {
      opacity: 1
    }) : Q.to(c.current, {
      opacity: 0
    });
  }, {
    scope: c,
    dependencies: [l]
  }), b = f(() => {
    s.current && s.current.reversed(!s.current.reversed());
  }), v = (w, m, g) => {
    u(l.filter((x) => x.part !== m)), Q.to(a.current[w], {
      opacity: 0,
      height: 0,
      onComplete: () => e(m, g)
    });
  };
  return U(() => {
    u(r);
  }, [r]), p(j, {
    children: [p("style", {
      type: "text/css",
      children: Vf
    }), p("div", {
      className: "unsaved-changes_wrapper",
      ref: c,
      onClick: b,
      children: [p("div", {
        className: "title-section",
        children: [p(Dt, {
          text: i("virtualworkshop_unsaved_changes"),
          small: !0,
          bold: !0,
          nowrap: !0,
          flexend: !0
        }), p("div", {
          className: "circle",
          children: l.length
        })]
      }), p("div", {
        className: "unsaved-content",
        ref: n,
        children: [p("div", {
          className: "close-button",
          children: p(jf, {})
        }), p("div", {
          className: "animation-wrapper",
          ref: o,
          children: l.length > 0 && l.map((w, m) => {
            var g, x;
            return p("div", {
              className: "unsaved-part-wrapper",
              ref: (_) => {
                a.current[w.type + m] = _;
              },
              children: [p(Dt, {
                text: (g = w.type) == null ? void 0 : g.replace(/_/g, " "),
                small: !0,
                left: !0,
                bold: !0,
                capitalize: !0
              }), p("div", {
                className: "unsaved-part",
                children: [p(Dt, {
                  text: (x = w.part) != null && x.name ? w.part.name : i("virtualworkshop_removed"),
                  small: !0,
                  left: !0
                }), p("div", {
                  className: "revert-button",
                  onClick: () => v(w.type + m, w.part, w.type),
                  children: i("virtualworkshop_revert_btn")
                })]
              })]
            }, w.type + m);
          })
        })]
      })]
    })]
  });
}, ao = () => {
  JSON.parse(sessionStorage.getItem("bm_categories")).collections.map((e) => {
    sessionStorage.removeItem(`${Z.value.key}:${e.handle}:v2`);
  });
}, lo = {
  frame: "Frame_ID",
  headset: "Headset_ID",
  fork: "Fork_ID",
  stem: "Stem_ID",
  handlebar: "Handlebar_ID",
  chainguide: "Chainguide_ID",
  bottom_Bracket: "Bottom_Bracket_ID",
  crankset: "Crankset_ID",
  largest_Chainring: "Largest_Chainring_ID",
  second_Largest_Chainring: "Second_Largest_Chainring_ID",
  third_Largest_Chainring: "Third_Largest_Chainring_ID",
  chainring_Spider: "Chainring_Spider_ID",
  chain: "Chain_ID",
  cassette: "Cassette_ID",
  rear_Derailleur: "Rear_Derailleur_ID",
  front_Derailleur: "Front_Derailleur_ID",
  shifter_RH: "Shifter_RH_ID",
  shifter_LH: "Shifter_LH_ID",
  shift_Brake_Combo_RH: "Shift_Brake_Combo_RH_ID",
  shift_Brake_Combo_LH: "Shift_Brake_Combo_LH_ID",
  brake_Lever_RH: "Brake_Lever_RH_ID",
  brake_Lever_LH: "Brake_Lever_LH_ID",
  shifter_Adapter_RH: "Shifter_Adapter_RH_ID",
  shifter_Adapter_LH: "Shifter_Adapter_LH_ID",
  brake_Caliper_Front: "Brake_Caliper_Front_ID",
  brake_Caliper_Rear: "Brake_Caliper_Rear_ID",
  brake_Pads_Front: "Brake_Pads_Front_ID",
  brake_Pads_Rear: "Brake_Pads_Rear_ID",
  brake_Rotor_Front: "Brake_Rotor_Front_ID",
  brake_Rotor_Rear: "Brake_Rotor_Rear_ID",
  brake_Adapter_Front: "Brake_Adapter_Front_ID",
  brake_Adapter_Rear: "Brake_Adapter_Rear_ID",
  front_Wheel: "Front_Wheel_ID",
  front_Axle: "Front_Axle_ID",
  rear_Wheel: "Rear_Wheel_ID",
  rear_Axle: "Rear_Axle_ID",
  seat_Post: "Seat_Post_ID",
  seat_Post_Clamp: "Seat_Post_Clamp_ID",
  dropper_Lever: "Dropper_Lever_ID",
  lockout_Lever: "Lockout_Lever_ID",
  rear_Shock: "Rear_Shock_ID",
  tyre_Front: "Tyre_Front_ID",
  tyre_Rear: "Tyre_Rear_ID",
  grips: "Grips_ID",
  pedals: "Pedals_ID"
}, Wf = `.type,.part{font-size:16px}.wrapper{display:flex;flex-direction:column;gap:.25rem}.part-wrapper{display:flex;justify-content:space-between;align-items:flex-start;padding:10px;transition:all ease-in-out .5s}.can-hover{cursor:pointer}.can-hover:hover{background-color:#d9d9d966;border-radius:12px}.type-wrapper{display:flex}.svg-wrapper{min-width:20px}.updating-spinner{position:absolute;top:2.5rem;right:1rem}
`, Yf = (r) => /* @__PURE__ */ V("svg", { width: 20, height: 20, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M15.5 31C24.0605 31 31 24.0604 31 15.5C31 6.93958 24.0605 0 15.5 0C6.93945 0 0 6.93958 0 15.5C0 18.6947 0.966309 21.6637 2.62305 24.1305L8.62451 18.4889C8.74268 18.3724 8.86279 18.2644 8.98389 18.1625C7.87256 15.2234 8.50049 11.7754 10.8701 9.41406C12.6006 7.68994 14.9941 6.82117 17.4365 7.03076C17.5571 7.04114 17.6699 7.08105 17.7671 7.14429C17.8936 7.22681 17.9932 7.349 18.0474 7.49646C18.1226 7.70227 18.0977 7.92786 17.9868 8.11011C17.9575 8.15796 17.9224 8.20288 17.8813 8.24365L13.8589 12.2506L15.271 16.6925L19.7295 18.099L23.7515 14.0924C23.9482 13.8969 24.2407 13.8322 24.502 13.9272C24.7627 14.0217 24.9453 14.2588 24.9692 14.5348C25.1797 16.9679 24.3071 19.3524 22.5771 21.0768C20.2051 23.4396 16.7417 24.0634 13.7905 22.9541C13.6904 23.0771 13.5845 23.197 13.4697 23.3115L8.0708 29.1067C10.2769 30.3137 12.8081 31 15.5 31Z", fill: "#10B981" })), Kf = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db;position:relative}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}
`, qu = ({
  title: r,
  children: e
}) => {
  const [t, i] = R(!1), n = Y(null), s = Y(null), o = Y(null), a = Y();
  return U(() => {
    a.current = Q.timeline({
      paused: !0
    });
    const l = Q.context(() => {
      a.current.to(n.current, {
        height: "auto",
        duration: 0.75
      }).to(o.current, {
        rotate: 270
      }, "=").to(s.current, {
        opacity: 1
      }, "-=.5").reverse();
    });
    return () => {
      l.revert();
    };
  }, []), U(() => {
    a.current.reversed(!t);
  }, [t, i]), p(j, {
    children: [p("style", {
      type: "text/css",
      children: Kf
    }), p("div", {
      className: "accordian-wrapper",
      ref: n,
      children: [p("div", {
        className: "header-content",
        onClick: () => i(!t),
        children: [p("h4", {
          className: "category font-semibold",
          children: r
        }), p("div", {
          className: "chevron-wrapper",
          ref: o,
          children: p(tt, {})
        })]
      }), p("div", {
        className: "content",
        ref: s,
        children: e
      })]
    })]
  });
}, Ba = {
  bike: "category_bike",
  frame: "category_frame",
  headset: "category_headset",
  fork: "category_fork",
  stem: "category_stem",
  handlebar: "category_handlebar",
  chainguide: "category_chainguide",
  bottom_Bracket: "category_bottombracket",
  crankset: "category_crankset",
  largest_Chainring: "category_largestchainring",
  second_Largest_Chainring: "category_secondlargestchainring",
  third_Largest_Chainring: "category_thirdlargestchainring",
  chainring_Spider: "category_chainringspider",
  chain: "category_chain",
  cassette: "category_cassette",
  rear_Derailleur: "category_rearderailleur",
  front_Derailleur: "category_frontderailleur",
  shifter_RH: "category_shifterrh",
  shifter_LH: "category_shifterlh",
  shift_Brake_Combo_RH: "category_shifterbrakecomborh",
  shift_Brake_Combo_LH: "category_shifterbrakecombolh",
  brake_Lever_RH: "category_brakeleverrh",
  brake_Lever_LH: "category_brakeleverlh",
  shifter_Adapter_RH: "category_shifteradapterrh",
  shifter_Adapter_LH: "category_shifteradapterlh",
  brake_Caliper_Front: "category_brakecaliperfront",
  brake_Caliper_Rear: "category_brakecaliperrear",
  brake_Adapter_Front: "category_brakeadapterfront",
  brake_Adapter_Rear: "category_brakeadapterrear",
  brake_Pads_Front: "category_brakepadsfront",
  brake_Pads_Rear: "category_brakepadsrear",
  brake_Rotor_Front: "category_brakerotorfront",
  brake_Rotor_Rear: "category_brakerotorrear",
  front_Wheel: "category_frontwheel",
  rear_Wheel: "category_rearwheel",
  front_Axle: "category_frontaxle",
  rear_Axle: "category_rearaxle",
  seatpost: "category_seatpost",
  dropper_Lever: "category_dropperlever",
  rear_Shock: "category_rearshock",
  tyre_Front: "category_tyrefront",
  tyre_Rear: "category_tyrerear",
  grips: "category_grips",
  pedals: "category_pedals",
  saddle: "category_saddle",
  "Frame & Fork": "category_framefork",
  Drivetrain: "category_drivetrain",
  Brakes: "category_brakes",
  Cockpit: "category_cockpit",
  "Wheels & Tyres": "category_wheelstyres"
}, Zf = ({
  bom: r,
  category: e,
  readOnly: t,
  loading: i
}) => {
  const {
    t: n
  } = te(), s = (o, a, l) => {
    mn.value = {
      part: o,
      category: a,
      type: l
    }, o.id ? re("/part") : re("/update");
  };
  return p(qu, {
    title: n(Ba[e]),
    children: [p("style", {
      type: "text/css",
      children: Wf
    }), i && r && p("div", {
      className: "updating-spinner",
      children: p(Et, {
        colour: "#000",
        isLoading: !0
      })
    }), r ? Object.keys(r || {}).map((o, a) => {
      if (e.toLocaleLowerCase() === o.replace(/_/g, " ").toLocaleLowerCase())
        return Object.keys(r[o] || {}).map((l) => {
          const u = r[o][l];
          return p("div", {
            className: "wrapper",
            children: [p("div", {
              className: "type-wrapper",
              children: p("h4", {
                className: "type font-semibold capitalize",
                children: n(Ba[l])
              })
            }), p("div", {
              className: `part-wrapper ${u != null && u.swap && !t ? "can-hover" : ""}`,
              onClick: () => {
                u != null && u.swap && !t && s(u, o == null ? void 0 : o.replace(/_/g, " "), l == null ? void 0 : l.replace(/_/g, " "));
              },
              children: [p("p", {
                className: "part",
                children: u != null && u.name ? u.name : "—"
              }), (u == null ? void 0 : u.swap) && !t && p("div", {
                className: "svg-wrapper",
                children: p(Yf, {})
              })]
            }, u == null ? void 0 : u.id)]
          }, l);
        });
    }) : p(Et, {
      colour: "#000",
      isLoading: !0
    })]
  });
}, $u = ({
  categorisedBOM: r,
  bikeSave: e,
  refreshBomb: t,
  readOnly: i,
  loading: n,
  bomError: s
}) => {
  const {
    t: o
  } = te(), l = window.BikeMatrix.getConfig(), [u, c] = R([]), {
    currentBike: d,
    setCurrentBike: h
  } = Ie(), f = new Se(l.apiUrl, l.apiKey, l.apiToken, l.isShopify), [b, v] = R(""), w = ke.value, m = [
    "Frame & Fork",
    "Drivetrain",
    "Brakes",
    "Cockpit",
    "Wheels & Tyres"
    // "EBike",
  ], g = async (_, y) => {
    ao();
    const k = await f.revertComponent(d.key, _.product_category_id, lo[y.split(" ").join("_")]);
    if (k.success)
      t(), h({
        ...d
      });
    else {
      v(k.error), l.logLevel === "verbose" && console.error(k.logError);
      return;
    }
  }, x = () => {
    let _ = [];
    w && Object.keys(r).forEach((y) => {
      typeof r[y] == "object" && r[y] !== null && Object.keys(r[y]).forEach((k) => {
        r[y][k].unsaved_changes && _.push({
          type: k,
          part: r[y][k]
        });
      });
    }), c(_);
  };
  return U(() => {
    x();
  }, [w, r]), p(j, {
    children: [p("style", {
      type: "text/css",
      children: $f
    }), p("div", {
      class: "bom-table_unsaved-changes mt-8",
      children: [p(Dt, {
        subheader: !0,
        text: o("virtualworkshop_build_text")
      }), !i && p("div", {
        className: "unsaved-changes",
        children: p(Gf, {
          readOnly: i,
          unsavedParts: u,
          revertPart: (_, y) => g(_, y)
        })
      }), !r && i && p(Et, {
        isLoading: !0,
        colour: "#000"
      }), (s || b) && p(it, {
        messages: s || b
      })]
    }), p("div", {
      className: "bom-table",
      children: m.map((_, y) => p(Zf, {
        category: _,
        bom: r,
        readOnly: i,
        loading: n
      }, _ + y))
    })]
  });
}, Xf = `:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.onboarding-wrapper{position:absolute;height:100%;width:100%;top:0;left:0}.onboarding-background{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px}@media screen and (max-width: 639px){.onboarding-background{background-color:#000000b3}}.onboarding-modal{background-color:#fff;border-radius:8px;width:90%;height:-moz-fit-content;height:fit-content;z-index:201;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:hidden}.heading{max-width:60%;text-align:center;margin-left:auto;margin-right:auto}.back-button{z-index:1;cursor:pointer;display:flex;justify-content:center;align-items:center;border-radius:12px;border:1px solid #d4d4d4;position:absolute;top:30px;left:30px;width:40px;height:40px;padding-right:2px}.back-button svg{transform:rotate(180deg);color:#6b7280}.button-wrapper{padding:30px}.swiper-pagination-bullet{width:7px;height:7px;opacity:1;background:rgba(0,0,0,.2)}.swiper-pagination-bullet-active{background:#000}.swiper-pagination-bullets.swiper-pagination-horizontal{--swiper-pagination-bottom: -2.5rem}.swiper{overflow:visible}
`, Jf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgMzFDMjQuMDYwNSAzMSAzMSAyNC4wNjA0IDMxIDE1LjVDMzEgNi45Mzk1OCAyNC4wNjA1IDAgMTUuNSAwQzYuOTM5NDUgMCAwIDYuOTM5NTggMCAxNS41QzAgMTguNjk0NyAwLjk2NjMwOSAyMS42NjM3IDIuNjIzMDUgMjQuMTMwNUw4LjYyNDUxIDE4LjQ4ODlDOC43NDI2OCAxOC4zNzI0IDguODYyNzkgMTguMjY0NCA4Ljk4Mzg5IDE4LjE2MjVDNy44NzI1NiAxNS4yMjM0IDguNTAwNDkgMTEuNzc1NCAxMC44NzAxIDkuNDE0MDZDMTIuNjAwNiA3LjY4OTk0IDE0Ljk5NDEgNi44MjExNyAxNy40MzY1IDcuMDMwNzZDMTcuNTU3MSA3LjA0MTE0IDE3LjY2OTkgNy4wODEwNSAxNy43NjcxIDcuMTQ0MjlDMTcuODkzNiA3LjIyNjgxIDE3Ljk5MzIgNy4zNDkgMTguMDQ3NCA3LjQ5NjQ2QzE4LjEyMjYgNy43MDIyNyAxOC4wOTc3IDcuOTI3ODYgMTcuOTg2OCA4LjExMDExQzE3Ljk1NzUgOC4xNTc5NiAxNy45MjI0IDguMjAyODggMTcuODgxMyA4LjI0MzY1TDEzLjg1ODkgMTIuMjUwNkwxNS4yNzEgMTYuNjkyNUwxOS43Mjk1IDE4LjA5OUwyMy43NTE1IDE0LjA5MjRDMjMuOTQ4MiAxMy44OTY5IDI0LjI0MDcgMTMuODMyMiAyNC41MDIgMTMuOTI3MkMyNC43NjI3IDE0LjAyMTcgMjQuOTQ1MyAxNC4yNTg4IDI0Ljk2OTIgMTQuNTM0OEMyNS4xNzk3IDE2Ljk2NzkgMjQuMzA3MSAxOS4zNTI0IDIyLjU3NzEgMjEuMDc2OEMyMC4yMDUxIDIzLjQzOTYgMTYuNzQxNyAyNC4wNjM0IDEzLjc5MDUgMjIuOTU0MUMxMy42OTA0IDIzLjA3NzEgMTMuNTg0NSAyMy4xOTcgMTMuNDY5NyAyMy4zMTE1TDguMDcwOCAyOS4xMDY3QzEwLjI3NjkgMzAuMzEzNyAxMi44MDgxIDMxIDE1LjUgMzFaIiBmaWxsPSIjMTBCOTgxIi8+Cjwvc3ZnPgo=", Vu = [{
  number: 1,
  title: "virtualworkshop_title",
  content: "onboarding_vw_description",
  image: Be("onboarding-vw/build.png"),
  svg: ""
}, {
  number: 2,
  title: "onboarding_open_bike_build",
  content: "onboarding_open_bike_build_description",
  image: Be("onboarding-vw/build.png"),
  svg: ""
}, {
  number: 3,
  title: "onboarding_green_spanner",
  content: "onboarding_green_spanner_description",
  image: Be("onboarding-vw/green-spanner.png"),
  svg: Jf
}, {
  number: 4,
  title: "onboarding_replacement",
  content: "onboarding_replacement_description",
  image: Be("onboarding-vw/compatible.png"),
  svg: ""
}, {
  number: 5,
  title: "onboarding_linked_components",
  content: "onboarding_linked_components_description",
  image: Be("onboarding-vw/not-compatible.png"),
  svg: ""
}, {
  number: 6,
  title: "onboarding_preview",
  content: "onboarding_preview_description",
  image: Be("onboarding-vw/unsaved-changes.png"),
  svg: ""
}, {
  number: 7,
  title: "onboarding_settings",
  content: "onboarding_settings_description",
  image: Be("onboarding-vw/settings.png"),
  svg: ""
}], Qf = `.card-wrapper{width:100%;display:flex;flex-direction:column}.card-image-wrapper{border:1px solid #d4d4d4;border-radius:8px;overflow:hidden;width:100%;margin-bottom:1rem}.card-image-wrapper img{width:100%;height:auto}.card-content{color:#000;font-size:16px}
`, eh = ({
  title: r,
  src: e,
  content: t,
  number: i
}) => {
  const {
    t: n
  } = te();
  return p(j, {
    children: [p("style", {
      type: "text/css",
      children: Qf
    }), p("div", {
      className: "card-wrapper",
      children: [p("div", {
        className: "card-image-wrapper",
        children: p("img", {
          src: e
        })
      }), p("h3", {
        class: "card-title",
        children: [i, ". ", n(`${r}`)]
      }), p("div", {
        className: "card-content",
        children: n(`${t}`)
      })]
    })]
  });
};
function La(r) {
  return r !== null && typeof r == "object" && "constructor" in r && r.constructor === Object;
}
function uo(r = {}, e = {}) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((i) => t.indexOf(i) < 0).forEach((i) => {
    typeof r[i] > "u" ? r[i] = e[i] : La(e[i]) && La(r[i]) && Object.keys(e[i]).length > 0 && uo(r[i], e[i]);
  });
}
const ju = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function lr() {
  const r = typeof document < "u" ? document : {};
  return uo(r, ju), r;
}
const th = {
  document: ju,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(r) {
    return typeof setTimeout > "u" ? (r(), null) : setTimeout(r, 0);
  },
  cancelAnimationFrame(r) {
    typeof setTimeout > "u" || clearTimeout(r);
  }
};
function Te() {
  const r = typeof window < "u" ? window : {};
  return uo(r, th), r;
}
function rh(r = "") {
  return r.trim().split(" ").filter((e) => !!e.trim());
}
function ih(r) {
  const e = r;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {
    }
    try {
      delete e[t];
    } catch {
    }
  });
}
function Uu(r, e = 0) {
  return setTimeout(r, e);
}
function sn() {
  return Date.now();
}
function nh(r) {
  const e = Te();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(r, null)), !t && r.currentStyle && (t = r.currentStyle), t || (t = r.style), t;
}
function sh(r, e = "x") {
  const t = Te();
  let i, n, s;
  const o = nh(r);
  return t.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((a) => a.replace(",", ".")).join(", ")), s = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? n = s.m41 : i.length === 16 ? n = parseFloat(i[12]) : n = parseFloat(i[4])), e === "y" && (t.WebKitCSSMatrix ? n = s.m42 : i.length === 16 ? n = parseFloat(i[13]) : n = parseFloat(i[5])), n || 0;
}
function Mi(r) {
  return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object";
}
function oh(r) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? r instanceof HTMLElement : r && (r.nodeType === 1 || r.nodeType === 11);
}
function $e(...r) {
  const e = Object(r[0]);
  for (let t = 1; t < r.length; t += 1) {
    const i = r[t];
    if (i != null && !oh(i)) {
      const n = Object.keys(Object(i)).filter((s) => s !== "__proto__" && s !== "constructor" && s !== "prototype");
      for (let s = 0, o = n.length; s < o; s += 1) {
        const a = n[s], l = Object.getOwnPropertyDescriptor(i, a);
        l !== void 0 && l.enumerable && (Mi(e[a]) && Mi(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : $e(e[a], i[a]) : !Mi(e[a]) && Mi(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : $e(e[a], i[a])) : e[a] = i[a]);
      }
    }
  }
  return e;
}
function fr(r, e, t) {
  r.style.setProperty(e, t);
}
function Hu({
  swiper: r,
  targetPosition: e,
  side: t
}) {
  const i = Te(), n = -r.translate;
  let s = null, o;
  const a = r.params.speed;
  r.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(r.cssModeFrameID);
  const l = e > n ? "next" : "prev", u = (d, h) => l === "next" && d >= h || l === "prev" && d <= h, c = () => {
    o = (/* @__PURE__ */ new Date()).getTime(), s === null && (s = o);
    const d = Math.max(Math.min((o - s) / a, 1), 0), h = 0.5 - Math.cos(d * Math.PI) / 2;
    let f = n + h * (e - n);
    if (u(f, e) && (f = e), r.wrapperEl.scrollTo({
      [t]: f
    }), u(f, e)) {
      r.wrapperEl.style.overflow = "hidden", r.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        r.wrapperEl.style.overflow = "", r.wrapperEl.scrollTo({
          [t]: f
        });
      }), i.cancelAnimationFrame(r.cssModeFrameID);
      return;
    }
    r.cssModeFrameID = i.requestAnimationFrame(c);
  };
  c();
}
function ut(r, e = "") {
  const t = Te(), i = [...r.children];
  return t.HTMLSlotElement && r instanceof HTMLSlotElement && i.push(...r.assignedElements()), e ? i.filter((n) => n.matches(e)) : i;
}
function ah(r, e) {
  const t = [e];
  for (; t.length > 0; ) {
    const i = t.shift();
    if (r === i)
      return !0;
    t.push(...i.children, ...i.shadowRoot ? i.shadowRoot.children : [], ...i.assignedElements ? i.assignedElements() : []);
  }
}
function lh(r, e) {
  const t = Te();
  let i = e.contains(r);
  return !i && t.HTMLSlotElement && e instanceof HTMLSlotElement && (i = [...e.assignedElements()].includes(r), i || (i = ah(r, e))), i;
}
function on(r) {
  try {
    console.warn(r);
    return;
  } catch {
  }
}
function an(r, e = []) {
  const t = document.createElement(r);
  return t.classList.add(...Array.isArray(e) ? e : rh(e)), t;
}
function uh(r, e) {
  const t = [];
  for (; r.previousElementSibling; ) {
    const i = r.previousElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), r = i;
  }
  return t;
}
function ch(r, e) {
  const t = [];
  for (; r.nextElementSibling; ) {
    const i = r.nextElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), r = i;
  }
  return t;
}
function Ot(r, e) {
  return Te().getComputedStyle(r, null).getPropertyValue(e);
}
function ln(r) {
  let e = r, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function Gu(r, e) {
  const t = [];
  let i = r.parentElement;
  for (; i; )
    e ? i.matches(e) && t.push(i) : t.push(i), i = i.parentElement;
  return t;
}
function Ds(r, e, t) {
  const i = Te();
  return t ? r[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : r.offsetWidth;
}
function vt(r) {
  return (Array.isArray(r) ? r : [r]).filter((e) => !!e);
}
function un(r, e = "") {
  typeof trustedTypes < "u" ? r.innerHTML = trustedTypes.createPolicy("html", {
    createHTML: (t) => t
  }).createHTML(e) : r.innerHTML = e;
}
let Un;
function dh() {
  const r = Te(), e = lr();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in r || r.DocumentTouch && e instanceof r.DocumentTouch)
  };
}
function Wu() {
  return Un || (Un = dh()), Un;
}
let Hn;
function ph({
  userAgent: r
} = {}) {
  const e = Wu(), t = Te(), i = t.navigator.platform, n = r || t.navigator.userAgent, s = {
    ios: !1,
    android: !1
  }, o = t.screen.width, a = t.screen.height, l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const c = n.match(/(iPod)(.*OS\s([\d_]+))?/), d = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = i === "Win32";
  let f = i === "MacIntel";
  const b = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !u && f && e.touch && b.indexOf(`${o}x${a}`) >= 0 && (u = n.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), f = !1), l && !h && (s.os = "android", s.android = !0), (u || d || c) && (s.os = "ios", s.ios = !0), s;
}
function Yu(r = {}) {
  return Hn || (Hn = ph(r)), Hn;
}
let Gn;
function fh() {
  const r = Te(), e = Yu();
  let t = !1;
  function i() {
    const a = r.navigator.userAgent.toLowerCase();
    return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0;
  }
  if (i()) {
    const a = String(r.navigator.userAgent);
    if (a.includes("Version/")) {
      const [l, u] = a.split("Version/")[1].split(" ")[0].split(".").map((c) => Number(c));
      t = l < 16 || l === 16 && u < 2;
    }
  }
  const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent), s = i(), o = s || n && e.ios;
  return {
    isSafari: t || s,
    needPerspectiveFix: t,
    need3dFix: o,
    isWebView: n
  };
}
function Ku() {
  return Gn || (Gn = fh()), Gn;
}
function hh({
  swiper: r,
  on: e,
  emit: t
}) {
  const i = Te();
  let n = null, s = null;
  const o = () => {
    !r || r.destroyed || !r.initialized || (t("beforeResize"), t("resize"));
  }, a = () => {
    !r || r.destroyed || !r.initialized || (n = new ResizeObserver((c) => {
      s = i.requestAnimationFrame(() => {
        const {
          width: d,
          height: h
        } = r;
        let f = d, b = h;
        c.forEach(({
          contentBoxSize: v,
          contentRect: w,
          target: m
        }) => {
          m && m !== r.el || (f = w ? w.width : (v[0] || v).inlineSize, b = w ? w.height : (v[0] || v).blockSize);
        }), (f !== d || b !== h) && o();
      });
    }), n.observe(r.el));
  }, l = () => {
    s && i.cancelAnimationFrame(s), n && n.unobserve && r.el && (n.unobserve(r.el), n = null);
  }, u = () => {
    !r || r.destroyed || !r.initialized || t("orientationchange");
  };
  e("init", () => {
    if (r.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", u);
  }), e("destroy", () => {
    l(), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", u);
  });
}
function gh({
  swiper: r,
  extendParams: e,
  on: t,
  emit: i
}) {
  const n = [], s = Te(), o = (u, c = {}) => {
    const d = s.MutationObserver || s.WebkitMutationObserver, h = new d((f) => {
      if (r.__preventObserver__)
        return;
      if (f.length === 1) {
        i("observerUpdate", f[0]);
        return;
      }
      const b = function() {
        i("observerUpdate", f[0]);
      };
      s.requestAnimationFrame ? s.requestAnimationFrame(b) : s.setTimeout(b, 0);
    });
    h.observe(u, {
      attributes: typeof c.attributes > "u" ? !0 : c.attributes,
      childList: r.isElement || (typeof c.childList > "u" ? !0 : c).childList,
      characterData: typeof c.characterData > "u" ? !0 : c.characterData
    }), n.push(h);
  }, a = () => {
    if (r.params.observer) {
      if (r.params.observeParents) {
        const u = Gu(r.hostEl);
        for (let c = 0; c < u.length; c += 1)
          o(u[c]);
      }
      o(r.hostEl, {
        childList: r.params.observeSlideChildren
      }), o(r.wrapperEl, {
        attributes: !1
      });
    }
  }, l = () => {
    n.forEach((u) => {
      u.disconnect();
    }), n.splice(0, n.length);
  };
  e({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), t("init", a), t("destroy", l);
}
var mh = {
  on(r, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function")
      return i;
    const n = t ? "unshift" : "push";
    return r.split(" ").forEach((s) => {
      i.eventsListeners[s] || (i.eventsListeners[s] = []), i.eventsListeners[s][n](e);
    }), i;
  },
  once(r, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function")
      return i;
    function n(...s) {
      i.off(r, n), n.__emitterProxy && delete n.__emitterProxy, e.apply(i, s);
    }
    return n.__emitterProxy = e, i.on(r, n, t);
  },
  onAny(r, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof r != "function")
      return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(r) < 0 && t.eventsAnyListeners[i](r), t;
  },
  offAny(r) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
      return e;
    const t = e.eventsAnyListeners.indexOf(r);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(r, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || r.split(" ").forEach((i) => {
      typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((n, s) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && t.eventsListeners[i].splice(s, 1);
      });
    }), t;
  },
  emit(...r) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
      return e;
    let t, i, n;
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (t = r[0], i = r.slice(1, r.length), n = e) : (t = r[0].events, i = r[0].data, n = r[0].context || e), i.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((a) => {
        a.apply(n, [o, ...i]);
      }), e.eventsListeners && e.eventsListeners[o] && e.eventsListeners[o].forEach((a) => {
        a.apply(n, i);
      });
    }), e;
  }
};
function bh() {
  const r = this;
  let e, t;
  const i = r.el;
  typeof r.params.width < "u" && r.params.width !== null ? e = r.params.width : e = i.clientWidth, typeof r.params.height < "u" && r.params.height !== null ? t = r.params.height : t = i.clientHeight, !(e === 0 && r.isHorizontal() || t === 0 && r.isVertical()) && (e = e - parseInt(Ot(i, "padding-left") || 0, 10) - parseInt(Ot(i, "padding-right") || 0, 10), t = t - parseInt(Ot(i, "padding-top") || 0, 10) - parseInt(Ot(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(r, {
    width: e,
    height: t,
    size: r.isHorizontal() ? e : t
  }));
}
function vh() {
  const r = this;
  function e(S, B) {
    return parseFloat(S.getPropertyValue(r.getDirectionLabel(B)) || 0);
  }
  const t = r.params, {
    wrapperEl: i,
    slidesEl: n,
    rtlTranslate: s,
    wrongRTL: o
  } = r, a = r.virtual && t.virtual.enabled, l = a ? r.virtual.slides.length : r.slides.length, u = ut(n, `.${r.params.slideClass}, swiper-slide`), c = a ? r.virtual.slides.length : u.length;
  let d = [];
  const h = [], f = [];
  let b = t.slidesOffsetBefore;
  typeof b == "function" && (b = t.slidesOffsetBefore.call(r));
  let v = t.slidesOffsetAfter;
  typeof v == "function" && (v = t.slidesOffsetAfter.call(r));
  const w = r.snapGrid.length, m = r.slidesGrid.length, g = r.size - b - v;
  let x = t.spaceBetween, _ = -b, y = 0, k = 0;
  if (typeof g > "u")
    return;
  typeof x == "string" && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * g : typeof x == "string" && (x = parseFloat(x)), r.virtualSize = -x - b - v, u.forEach((S) => {
    s ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = "";
  }), t.centeredSlides && t.cssMode && (fr(i, "--swiper-centered-offset-before", ""), fr(i, "--swiper-centered-offset-after", "")), t.cssMode && (fr(i, "--swiper-slides-offset-before", `${b}px`), fr(i, "--swiper-slides-offset-after", `${v}px`));
  const A = t.grid && t.grid.rows > 1 && r.grid;
  A ? r.grid.initSlides(u) : r.grid && r.grid.unsetSlides();
  let C;
  const D = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((S) => typeof t.breakpoints[S].slidesPerView < "u").length > 0;
  for (let S = 0; S < c; S += 1) {
    C = 0;
    const B = u[S];
    if (!(B && (A && r.grid.updateSlide(S, B, u), Ot(B, "display") === "none"))) {
      if (a && t.slidesPerView === "auto")
        t.virtual.slidesPerViewAutoSlideSize && (C = t.virtual.slidesPerViewAutoSlideSize), C && B && (t.roundLengths && (C = Math.floor(C)), B.style[r.getDirectionLabel("width")] = `${C}px`);
      else if (t.slidesPerView === "auto") {
        D && (B.style[r.getDirectionLabel("width")] = "");
        const E = getComputedStyle(B), T = B.style.transform, M = B.style.webkitTransform;
        if (T && (B.style.transform = "none"), M && (B.style.webkitTransform = "none"), t.roundLengths)
          C = r.isHorizontal() ? Ds(B, "width", !0) : Ds(B, "height", !0);
        else {
          const F = e(E, "width"), $ = e(E, "padding-left"), I = e(E, "padding-right"), O = e(E, "margin-left"), P = e(E, "margin-right"), L = E.getPropertyValue("box-sizing");
          if (L && L === "border-box")
            C = F + O + P;
          else {
            const {
              clientWidth: N,
              offsetWidth: q
            } = B;
            C = F + $ + I + O + P + (q - N);
          }
        }
        T && (B.style.transform = T), M && (B.style.webkitTransform = M), t.roundLengths && (C = Math.floor(C));
      } else
        C = (g - (t.slidesPerView - 1) * x) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), B && (B.style[r.getDirectionLabel("width")] = `${C}px`);
      B && (B.swiperSlideSize = C), f.push(C), t.centeredSlides ? (_ = _ + C / 2 + y / 2 + x, y === 0 && S !== 0 && (_ = _ - g / 2 - x), S === 0 && (_ = _ - g / 2 - x), Math.abs(_) < 1 / 1e3 && (_ = 0), t.roundLengths && (_ = Math.floor(_)), k % t.slidesPerGroup === 0 && d.push(_), h.push(_)) : (t.roundLengths && (_ = Math.floor(_)), (k - Math.min(r.params.slidesPerGroupSkip, k)) % r.params.slidesPerGroup === 0 && d.push(_), h.push(_), _ = _ + C + x), r.virtualSize += C + x, y = C, k += 1;
    }
  }
  if (r.virtualSize = Math.max(r.virtualSize, g) + v, s && o && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${r.virtualSize + x}px`), t.setWrapperSize && (i.style[r.getDirectionLabel("width")] = `${r.virtualSize + x}px`), A && r.grid.updateWrapperSize(C, d), !t.centeredSlides) {
    const S = t.slidesPerView !== "auto" && t.slidesPerView % 1 !== 0, B = t.snapToSlideEdge && !t.loop && (t.slidesPerView === "auto" || S);
    let E = d.length;
    if (B) {
      let M;
      if (t.slidesPerView === "auto") {
        M = 1;
        let F = 0;
        for (let $ = f.length - 1; $ >= 0 && (F += f[$] + ($ < f.length - 1 ? x : 0), F <= g); $ -= 1)
          M = f.length - $;
      } else
        M = Math.floor(t.slidesPerView);
      E = Math.max(c - M, 0);
    }
    const T = [];
    for (let M = 0; M < d.length; M += 1) {
      let F = d[M];
      t.roundLengths && (F = Math.floor(F)), B ? M <= E && T.push(F) : d[M] <= r.virtualSize - g && T.push(F);
    }
    d = T, Math.floor(r.virtualSize - g) - Math.floor(d[d.length - 1]) > 1 && (B || d.push(r.virtualSize - g));
  }
  if (a && t.loop) {
    const S = f[0] + x;
    if (t.slidesPerGroup > 1) {
      const B = Math.ceil((r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup), E = S * t.slidesPerGroup;
      for (let T = 0; T < B; T += 1)
        d.push(d[d.length - 1] + E);
    }
    for (let B = 0; B < r.virtual.slidesBefore + r.virtual.slidesAfter; B += 1)
      t.slidesPerGroup === 1 && d.push(d[d.length - 1] + S), h.push(h[h.length - 1] + S), r.virtualSize += S;
  }
  if (d.length === 0 && (d = [0]), x !== 0) {
    const S = r.isHorizontal() && s ? "marginLeft" : r.getDirectionLabel("marginRight");
    u.filter((B, E) => !t.cssMode || t.loop ? !0 : E !== u.length - 1).forEach((B) => {
      B.style[S] = `${x}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let S = 0;
    f.forEach((E) => {
      S += E + (x || 0);
    }), S -= x;
    const B = S > g ? S - g : 0;
    d = d.map((E) => E <= 0 ? -b : E > B ? B + v : E);
  }
  if (t.centerInsufficientSlides) {
    let S = 0;
    if (f.forEach((B) => {
      S += B + (x || 0);
    }), S -= x, S < g) {
      const B = (g - S) / 2;
      d.forEach((E, T) => {
        d[T] = E - B;
      }), h.forEach((E, T) => {
        h[T] = E + B;
      });
    }
  }
  if (Object.assign(r, {
    slides: u,
    snapGrid: d,
    slidesGrid: h,
    slidesSizesGrid: f
  }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    fr(i, "--swiper-centered-offset-before", `${-d[0]}px`), fr(i, "--swiper-centered-offset-after", `${r.size / 2 - f[f.length - 1] / 2}px`);
    const S = -r.snapGrid[0], B = -r.slidesGrid[0];
    r.snapGrid = r.snapGrid.map((E) => E + S), r.slidesGrid = r.slidesGrid.map((E) => E + B);
  }
  if (c !== l && r.emit("slidesLengthChange"), d.length !== w && (r.params.watchOverflow && r.checkOverflow(), r.emit("snapGridLengthChange")), h.length !== m && r.emit("slidesGridLengthChange"), t.watchSlidesProgress && r.updateSlidesOffset(), r.emit("slidesUpdated"), !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const S = `${t.containerModifierClass}backface-hidden`, B = r.el.classList.contains(S);
    c <= t.maxBackfaceHiddenSlides ? B || r.el.classList.add(S) : B && r.el.classList.remove(S);
  }
}
function wh(r) {
  const e = this, t = [], i = e.virtual && e.params.virtual.enabled;
  let n = 0, s;
  typeof r == "number" ? e.setTransition(r) : r === !0 && e.setTransition(e.params.speed);
  const o = (a) => i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((a) => {
        t.push(a);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const a = e.activeIndex + s;
        if (a > e.slides.length && !i)
          break;
        t.push(o(a));
      }
  else
    t.push(o(e.activeIndex));
  for (s = 0; s < t.length; s += 1)
    if (typeof t[s] < "u") {
      const a = t[s].offsetHeight;
      n = a > n ? a : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function xh() {
  const r = this, e = r.slides, t = r.isElement ? r.isHorizontal() ? r.wrapperEl.offsetLeft : r.wrapperEl.offsetTop : 0;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset = (r.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - r.cssOverflowAdjustment();
}
const Ta = (r, e, t) => {
  e && !r.classList.contains(t) ? r.classList.add(t) : !e && r.classList.contains(t) && r.classList.remove(t);
};
function _h(r = this && this.translate || 0) {
  const e = this, t = e.params, {
    slides: i,
    rtlTranslate: n,
    snapGrid: s
  } = e;
  if (i.length === 0)
    return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -r;
  n && (o = r), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let a = t.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
  for (let l = 0; l < i.length; l += 1) {
    const u = i[l];
    let c = u.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
    const d = (o + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + a), h = (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + a), f = -(o - c), b = f + e.slidesSizesGrid[l], v = f >= 0 && f <= e.size - e.slidesSizesGrid[l], w = f >= 0 && f < e.size - 1 || b > 1 && b <= e.size || f <= 0 && b >= e.size;
    w && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)), Ta(u, w, t.slideVisibleClass), Ta(u, v, t.slideFullyVisibleClass), u.progress = n ? -d : d, u.originalProgress = n ? -h : h;
  }
}
function yh(r) {
  const e = this;
  if (typeof r > "u") {
    const c = e.rtlTranslate ? -1 : 1;
    r = e && e.translate && e.translate * c || 0;
  }
  const t = e.params, i = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: s,
    isEnd: o,
    progressLoop: a
  } = e;
  const l = s, u = o;
  if (i === 0)
    n = 0, s = !0, o = !0;
  else {
    n = (r - e.minTranslate()) / i;
    const c = Math.abs(r - e.minTranslate()) < 1, d = Math.abs(r - e.maxTranslate()) < 1;
    s = c || n <= 0, o = d || n >= 1, c && (n = 0), d && (n = 1);
  }
  if (t.loop) {
    const c = e.getSlideIndexByData(0), d = e.getSlideIndexByData(e.slides.length - 1), h = e.slidesGrid[c], f = e.slidesGrid[d], b = e.slidesGrid[e.slidesGrid.length - 1], v = Math.abs(r);
    v >= h ? a = (v - h) / b : a = (v + b - f) / b, a > 1 && (a -= 1);
  }
  Object.assign(e, {
    progress: n,
    progressLoop: a,
    isBeginning: s,
    isEnd: o
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(r), s && !l && e.emit("reachBeginning toEdge"), o && !u && e.emit("reachEnd toEdge"), (l && !s || u && !o) && e.emit("fromEdge"), e.emit("progress", n);
}
const Wn = (r, e, t) => {
  e && !r.classList.contains(t) ? r.classList.add(t) : !e && r.classList.contains(t) && r.classList.remove(t);
};
function Ch() {
  const r = this, {
    slides: e,
    params: t,
    slidesEl: i,
    activeIndex: n
  } = r, s = r.virtual && t.virtual.enabled, o = r.grid && t.grid && t.grid.rows > 1, a = (d) => ut(i, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
  let l, u, c;
  if (s)
    if (t.loop) {
      let d = n - r.virtual.slidesBefore;
      d < 0 && (d = r.virtual.slides.length + d), d >= r.virtual.slides.length && (d -= r.virtual.slides.length), l = a(`[data-swiper-slide-index="${d}"]`);
    } else
      l = a(`[data-swiper-slide-index="${n}"]`);
  else
    o ? (l = e.find((d) => d.column === n), c = e.find((d) => d.column === n + 1), u = e.find((d) => d.column === n - 1)) : l = e[n];
  l && (o || (c = ch(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c && (c = e[0]), u = uh(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !u === 0 && (u = e[e.length - 1]))), e.forEach((d) => {
    Wn(d, d === l, t.slideActiveClass), Wn(d, d === c, t.slideNextClass), Wn(d, d === u, t.slidePrevClass);
  }), r.emitSlidesClasses();
}
const Vi = (r, e) => {
  if (!r || r.destroyed || !r.params)
    return;
  const t = () => r.isElement ? "swiper-slide" : `.${r.params.slideClass}`, i = e.closest(t());
  if (i) {
    let n = i.querySelector(`.${r.params.lazyPreloaderClass}`);
    !n && r.isElement && (i.shadowRoot ? n = i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      i.shadowRoot && (n = i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`), n && !n.lazyPreloaderManaged && n.remove());
    })), n && !n.lazyPreloaderManaged && n.remove();
  }
}, Yn = (r, e) => {
  if (!r.slides[e])
    return;
  const t = r.slides[e].querySelector('[loading="lazy"]');
  t && t.removeAttribute("loading");
}, As = (r) => {
  if (!r || r.destroyed || !r.params)
    return;
  let e = r.params.lazyPreloadPrevNext;
  const t = r.slides.length;
  if (!t || !e || e < 0)
    return;
  e = Math.min(e, t);
  const i = r.params.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(r.params.slidesPerView), n = r.activeIndex;
  if (r.params.grid && r.params.grid.rows > 1) {
    const o = n, a = [o - e];
    a.push(...Array.from({
      length: e
    }).map((l, u) => o + i + u)), r.slides.forEach((l, u) => {
      a.includes(l.column) && Yn(r, u);
    });
    return;
  }
  const s = n + i - 1;
  if (r.params.rewind || r.params.loop)
    for (let o = n - e; o <= s + e; o += 1) {
      const a = (o % t + t) % t;
      (a < n || a > s) && Yn(r, a);
    }
  else
    for (let o = Math.max(n - e, 0); o <= Math.min(s + e, t - 1); o += 1)
      o !== n && (o > s || o < n) && Yn(r, o);
};
function kh(r) {
  const {
    slidesGrid: e,
    params: t
  } = r, i = r.rtlTranslate ? r.translate : -r.translate;
  let n;
  for (let s = 0; s < e.length; s += 1)
    typeof e[s + 1] < "u" ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2 ? n = s : i >= e[s] && i < e[s + 1] && (n = s + 1) : i >= e[s] && (n = s);
  return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function Dh(r) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: i,
    params: n,
    activeIndex: s,
    realIndex: o,
    snapIndex: a
  } = e;
  let l = r, u;
  const c = (f) => {
    let b = f - e.virtual.slidesBefore;
    return b < 0 && (b = e.virtual.slides.length + b), b >= e.virtual.slides.length && (b -= e.virtual.slides.length), b;
  };
  if (typeof l > "u" && (l = kh(e)), i.indexOf(t) >= 0)
    u = i.indexOf(t);
  else {
    const f = Math.min(n.slidesPerGroupSkip, l);
    u = f + Math.floor((l - f) / n.slidesPerGroup);
  }
  if (u >= i.length && (u = i.length - 1), l === s && !e.params.loop) {
    u !== a && (e.snapIndex = u, e.emit("snapIndexChange"));
    return;
  }
  if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = c(l);
    return;
  }
  const d = e.grid && n.grid && n.grid.rows > 1;
  let h;
  if (e.virtual && n.virtual.enabled)
    n.loop ? h = c(l) : h = l;
  else if (d) {
    const f = e.slides.find((v) => v.column === l);
    let b = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(b) && (b = Math.max(e.slides.indexOf(f), 0)), h = Math.floor(b / n.grid.rows);
  } else if (e.slides[l]) {
    const f = e.slides[l].getAttribute("data-swiper-slide-index");
    f ? h = parseInt(f, 10) : h = l;
  } else
    h = l;
  Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: h,
    previousIndex: s,
    activeIndex: l
  }), e.initialized && As(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Ah(r, e) {
  const t = this, i = t.params;
  let n = r.closest(`.${i.slideClass}, swiper-slide`);
  !n && t.isElement && e && e.length > 1 && e.includes(r) && [...e.slice(e.indexOf(r) + 1, e.length)].forEach((a) => {
    !n && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (n = a);
  });
  let s = !1, o;
  if (n) {
    for (let a = 0; a < t.slides.length; a += 1)
      if (t.slides[a] === n) {
        s = !0, o = a;
        break;
      }
  }
  if (n && s)
    t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var Sh = {
  updateSize: bh,
  updateSlides: vh,
  updateAutoHeight: wh,
  updateSlidesOffset: xh,
  updateSlidesProgress: _h,
  updateProgress: yh,
  updateSlidesClasses: Ch,
  updateActiveIndex: Dh,
  updateClickedSlide: Ah
};
function Eh(r = this.isHorizontal() ? "x" : "y") {
  const e = this, {
    params: t,
    rtlTranslate: i,
    translate: n,
    wrapperEl: s
  } = e;
  if (t.virtualTranslate)
    return i ? -n : n;
  if (t.cssMode)
    return n;
  let o = sh(s, r);
  return o += e.cssOverflowAdjustment(), i && (o = -o), o || 0;
}
function Bh(r, e) {
  const t = this, {
    rtlTranslate: i,
    params: n,
    wrapperEl: s,
    progress: o
  } = t;
  let a = 0, l = 0;
  const u = 0;
  t.isHorizontal() ? a = i ? -r : r : l = r, n.roundLengths && (a = Math.floor(a), l = Math.floor(l)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? a : l, n.cssMode ? s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -a : -l : n.virtualTranslate || (t.isHorizontal() ? a -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(), s.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`);
  let c;
  const d = t.maxTranslate() - t.minTranslate();
  d === 0 ? c = 0 : c = (r - t.minTranslate()) / d, c !== o && t.updateProgress(r), t.emit("setTranslate", t.translate, e);
}
function Lh() {
  return -this.snapGrid[0];
}
function Th() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Fh(r = 0, e = this.params.speed, t = !0, i = !0, n) {
  const s = this, {
    params: o,
    wrapperEl: a
  } = s;
  if (s.animating && o.preventInteractionOnTransition)
    return !1;
  const l = s.minTranslate(), u = s.maxTranslate();
  let c;
  if (i && r > l ? c = l : i && r < u ? c = u : c = r, s.updateProgress(c), o.cssMode) {
    const d = s.isHorizontal();
    if (e === 0)
      a[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return Hu({
          swiper: s,
          targetPosition: -c,
          side: d ? "left" : "top"
        }), !0;
      a.scrollTo({
        [d ? "left" : "top"]: -c,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (s.setTransition(0), s.setTranslate(c), t && (s.emit("beforeTransitionStart", e, n), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(c), t && (s.emit("beforeTransitionStart", e, n), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(h) {
    !s || s.destroyed || h.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, t && s.emit("transitionEnd"));
  }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0;
}
var Nh = {
  getTranslate: Eh,
  setTranslate: Bh,
  minTranslate: Lh,
  maxTranslate: Th,
  translateTo: Fh
};
function Mh(r, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${r}ms`, t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : ""), t.emit("setTransition", r, e);
}
function Zu({
  swiper: r,
  runCallbacks: e,
  direction: t,
  step: i
}) {
  const {
    activeIndex: n,
    previousIndex: s
  } = r;
  let o = t;
  o || (n > s ? o = "next" : n < s ? o = "prev" : o = "reset"), r.emit(`transition${i}`), e && o === "reset" ? r.emit(`slideResetTransition${i}`) : e && n !== s && (r.emit(`slideChangeTransition${i}`), o === "next" ? r.emit(`slideNextTransition${i}`) : r.emit(`slidePrevTransition${i}`));
}
function Ph(r = !0, e) {
  const t = this, {
    params: i
  } = t;
  i.cssMode || (i.autoHeight && t.updateAutoHeight(), Zu({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "Start"
  }));
}
function Oh(r = !0, e) {
  const t = this, {
    params: i
  } = t;
  t.animating = !1, !i.cssMode && (t.setTransition(0), Zu({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "End"
  }));
}
var Ih = {
  setTransition: Mh,
  transitionStart: Ph,
  transitionEnd: Oh
};
function Rh(r = 0, e, t = !0, i, n) {
  typeof r == "string" && (r = parseInt(r, 10));
  const s = this;
  let o = r;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: h,
    wrapperEl: f,
    enabled: b
  } = s;
  if (!b && !i && !n || s.destroyed || s.animating && a.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = s.params.speed);
  const v = Math.min(s.params.slidesPerGroupSkip, o);
  let w = v + Math.floor((o - v) / s.params.slidesPerGroup);
  w >= l.length && (w = l.length - 1);
  const m = -l[w];
  if (a.normalizeSlideIndex)
    for (let A = 0; A < u.length; A += 1) {
      const C = -Math.floor(m * 100), D = Math.floor(u[A] * 100), S = Math.floor(u[A + 1] * 100);
      typeof u[A + 1] < "u" ? C >= D && C < S - (S - D) / 2 ? o = A : C >= D && C < S && (o = A + 1) : C >= D && (o = A);
    }
  if (s.initialized && o !== d && (!s.allowSlideNext && (h ? m > s.translate && m > s.minTranslate() : m < s.translate && m < s.minTranslate()) || !s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (d || 0) !== o))
    return !1;
  o !== (c || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(m);
  let g;
  o > d ? g = "next" : o < d ? g = "prev" : g = "reset";
  const x = s.virtual && s.params.virtual.enabled;
  if (!(x && n) && (h && -m === s.translate || !h && m === s.translate))
    return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), a.effect !== "slide" && s.setTranslate(m), g !== "reset" && (s.transitionStart(t, g), s.transitionEnd(t, g)), !1;
  if (a.cssMode) {
    const A = s.isHorizontal(), C = h ? m : -m;
    if (e === 0)
      x && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        f[A ? "scrollLeft" : "scrollTop"] = C;
      })) : f[A ? "scrollLeft" : "scrollTop"] = C, x && requestAnimationFrame(() => {
        s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1;
      });
    else {
      if (!s.support.smoothScroll)
        return Hu({
          swiper: s,
          targetPosition: C,
          side: A ? "left" : "top"
        }), !0;
      f.scrollTo({
        [A ? "left" : "top"]: C,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const k = Ku().isSafari;
  return x && !n && k && s.isElement && s.virtual.update(!1, !1, o), s.setTransition(e), s.setTranslate(m), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, i), s.transitionStart(t, g), e === 0 ? s.transitionEnd(t, g) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(C) {
    !s || s.destroyed || C.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(t, g));
  }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0;
}
function zh(r = 0, e, t = !0, i) {
  typeof r == "string" && (r = parseInt(r, 10));
  const n = this;
  if (n.destroyed)
    return;
  typeof e > "u" && (e = n.params.speed);
  const s = n.grid && n.params.grid && n.params.grid.rows > 1;
  let o = r;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled)
      o = o + n.virtual.slidesBefore;
    else {
      let a;
      if (s) {
        const v = o * n.params.grid.rows;
        a = n.slides.find((w) => w.getAttribute("data-swiper-slide-index") * 1 === v).column;
      } else
        a = n.getSlideIndexByData(o);
      const l = s ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, {
        centeredSlides: u,
        slidesOffsetBefore: c,
        slidesOffsetAfter: d
      } = n.params, h = u || !!c || !!d;
      let f = n.params.slidesPerView;
      f === "auto" ? f = n.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(n.params.slidesPerView, 10)), h && f % 2 === 0 && (f = f + 1));
      let b = l - a < f;
      if (h && (b = b || a < Math.ceil(f / 2)), i && h && n.params.slidesPerView !== "auto" && !s && (b = !1), b) {
        const v = h ? a < n.activeIndex ? "prev" : "next" : a - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: v,
          slideTo: !0,
          activeSlideIndex: v === "next" ? a + 1 : a - l + 1,
          slideRealIndex: v === "next" ? n.realIndex : void 0
        });
      }
      if (s) {
        const v = o * n.params.grid.rows;
        o = n.slides.find((w) => w.getAttribute("data-swiper-slide-index") * 1 === v).column;
      } else
        o = n.getSlideIndexByData(o);
    }
  return requestAnimationFrame(() => {
    n.slideTo(o, e, t, i);
  }), n;
}
function qh(r, e = !0, t) {
  const i = this, {
    enabled: n,
    params: s,
    animating: o
  } = i;
  if (!n || i.destroyed)
    return i;
  typeof r > "u" && (r = i.params.speed);
  let a = s.slidesPerGroup;
  s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a, u = i.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !u && s.loopPreventsSliding)
      return !1;
    if (i.loopFix({
      direction: "next"
    }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && s.cssMode)
      return requestAnimationFrame(() => {
        i.slideTo(i.activeIndex + l, r, e, t);
      }), !0;
  }
  return s.rewind && i.isEnd ? i.slideTo(0, r, e, t) : i.slideTo(i.activeIndex + l, r, e, t);
}
function $h(r, e = !0, t) {
  const i = this, {
    params: n,
    snapGrid: s,
    slidesGrid: o,
    rtlTranslate: a,
    enabled: l,
    animating: u
  } = i;
  if (!l || i.destroyed)
    return i;
  typeof r > "u" && (r = i.params.speed);
  const c = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (u && !c && n.loopPreventsSliding)
      return !1;
    i.loopFix({
      direction: "prev"
    }), i._clientLeft = i.wrapperEl.clientLeft;
  }
  const d = a ? i.translate : -i.translate;
  function h(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const f = h(d), b = s.map((g) => h(g)), v = n.freeMode && n.freeMode.enabled;
  let w = s[b.indexOf(f) - 1];
  if (typeof w > "u" && (n.cssMode || v)) {
    let g;
    s.forEach((x, _) => {
      f >= x && (g = _);
    }), typeof g < "u" && (w = v ? s[g] : s[g > 0 ? g - 1 : g]);
  }
  let m = 0;
  if (typeof w < "u" && (m = o.indexOf(w), m < 0 && (m = i.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), n.rewind && i.isBeginning) {
    const g = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(g, r, e, t);
  } else if (n.loop && i.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      i.slideTo(m, r, e, t);
    }), !0;
  return i.slideTo(m, r, e, t);
}
function Vh(r, e = !0, t) {
  const i = this;
  if (!i.destroyed)
    return typeof r > "u" && (r = i.params.speed), i.slideTo(i.activeIndex, r, e, t);
}
function jh(r, e = !0, t, i = 0.5) {
  const n = this;
  if (n.destroyed)
    return;
  typeof r > "u" && (r = n.params.speed);
  let s = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, s), a = o + Math.floor((s - o) / n.params.slidesPerGroup), l = n.rtlTranslate ? n.translate : -n.translate;
  if (l >= n.snapGrid[a]) {
    const u = n.snapGrid[a], c = n.snapGrid[a + 1];
    l - u > (c - u) * i && (s += n.params.slidesPerGroup);
  } else {
    const u = n.snapGrid[a - 1], c = n.snapGrid[a];
    l - u <= (c - u) * i && (s -= n.params.slidesPerGroup);
  }
  return s = Math.max(s, 0), s = Math.min(s, n.slidesGrid.length - 1), n.slideTo(s, r, e, t);
}
function Uh() {
  const r = this;
  if (r.destroyed)
    return;
  const {
    params: e,
    slidesEl: t
  } = r, i = e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
  let n = r.getSlideIndexWhenGrid(r.clickedIndex), s;
  const o = r.isElement ? "swiper-slide" : `.${e.slideClass}`, a = r.grid && r.params.grid && r.params.grid.rows > 1;
  if (e.loop) {
    if (r.animating)
      return;
    s = parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? r.slideToLoop(s) : n > (a ? (r.slides.length - i) / 2 - (r.params.grid.rows - 1) : r.slides.length - i) ? (r.loopFix(), n = r.getSlideIndex(ut(t, `${o}[data-swiper-slide-index="${s}"]`)[0]), Uu(() => {
      r.slideTo(n);
    })) : r.slideTo(n);
  } else
    r.slideTo(n);
}
var Hh = {
  slideTo: Rh,
  slideToLoop: zh,
  slideNext: qh,
  slidePrev: $h,
  slideReset: Vh,
  slideToClosest: jh,
  slideToClickedSlide: Uh
};
function Gh(r, e) {
  const t = this, {
    params: i,
    slidesEl: n
  } = t;
  if (!i.loop || t.virtual && t.params.virtual.enabled)
    return;
  const s = () => {
    ut(n, `.${i.slideClass}, swiper-slide`).forEach((b, v) => {
      b.setAttribute("data-swiper-slide-index", v);
    });
  }, o = () => {
    const f = ut(n, `.${i.slideBlankClass}`);
    f.forEach((b) => {
      b.remove();
    }), f.length > 0 && (t.recalcSlides(), t.updateSlides());
  }, a = t.grid && i.grid && i.grid.rows > 1;
  i.loopAddBlankSlides && (i.slidesPerGroup > 1 || a) && o();
  const l = i.slidesPerGroup * (a ? i.grid.rows : 1), u = t.slides.length % l !== 0, c = a && t.slides.length % i.grid.rows !== 0, d = (f) => {
    for (let b = 0; b < f; b += 1) {
      const v = t.isElement ? an("swiper-slide", [i.slideBlankClass]) : an("div", [i.slideClass, i.slideBlankClass]);
      t.slidesEl.append(v);
    }
  };
  if (u) {
    if (i.loopAddBlankSlides) {
      const f = l - t.slides.length % l;
      d(f), t.recalcSlides(), t.updateSlides();
    } else
      on("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else if (c) {
    if (i.loopAddBlankSlides) {
      const f = i.grid.rows - t.slides.length % i.grid.rows;
      d(f), t.recalcSlides(), t.updateSlides();
    } else
      on("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else
    s();
  const h = i.centeredSlides || !!i.slidesOffsetBefore || !!i.slidesOffsetAfter;
  t.loopFix({
    slideRealIndex: r,
    direction: h ? void 0 : "next",
    initial: e
  });
}
function Wh({
  slideRealIndex: r,
  slideTo: e = !0,
  direction: t,
  setTranslate: i,
  activeSlideIndex: n,
  initial: s,
  byController: o,
  byMousewheel: a
} = {}) {
  const l = this;
  if (!l.params.loop)
    return;
  l.emit("beforeLoopFix");
  const {
    slides: u,
    allowSlidePrev: c,
    allowSlideNext: d,
    slidesEl: h,
    params: f
  } = l, {
    centeredSlides: b,
    slidesOffsetBefore: v,
    slidesOffsetAfter: w,
    initialSlide: m
  } = f, g = b || !!v || !!w;
  if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && f.virtual.enabled) {
    e && (!g && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : g && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)), l.allowSlidePrev = c, l.allowSlideNext = d, l.emit("loopFix");
    return;
  }
  let x = f.slidesPerView;
  x === "auto" ? x = l.slidesPerViewDynamic() : (x = Math.ceil(parseFloat(f.slidesPerView, 10)), g && x % 2 === 0 && (x = x + 1));
  const _ = f.slidesPerGroupAuto ? x : f.slidesPerGroup;
  let y = g ? Math.max(_, Math.ceil(x / 2)) : _;
  y % _ !== 0 && (y += _ - y % _), y += f.loopAdditionalSlides, l.loopedSlides = y;
  const k = l.grid && f.grid && f.grid.rows > 1;
  u.length < x + y || l.params.effect === "cards" && u.length < x + y * 2 ? on("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : k && f.grid.fill === "row" && on("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const A = [], C = [], D = k ? Math.ceil(u.length / f.grid.rows) : u.length, S = s && D - m < x && !g;
  let B = S ? m : l.activeIndex;
  typeof n > "u" ? n = l.getSlideIndex(u.find((O) => O.classList.contains(f.slideActiveClass))) : B = n;
  const E = t === "next" || !t, T = t === "prev" || !t;
  let M = 0, F = 0;
  const I = (k ? u[n].column : n) + (g && typeof i > "u" ? -x / 2 + 0.5 : 0);
  if (I < y) {
    M = Math.max(y - I, _);
    for (let O = 0; O < y - I; O += 1) {
      const P = O - Math.floor(O / D) * D;
      if (k) {
        const L = D - P - 1;
        for (let N = u.length - 1; N >= 0; N -= 1)
          u[N].column === L && A.push(N);
      } else
        A.push(D - P - 1);
    }
  } else if (I + x > D - y) {
    F = Math.max(I - (D - y * 2), _), S && (F = Math.max(F, x - D + m + 1));
    for (let O = 0; O < F; O += 1) {
      const P = O - Math.floor(O / D) * D;
      k ? u.forEach((L, N) => {
        L.column === P && C.push(N);
      }) : C.push(P);
    }
  }
  if (l.__preventObserver__ = !0, requestAnimationFrame(() => {
    l.__preventObserver__ = !1;
  }), l.params.effect === "cards" && u.length < x + y * 2 && (C.includes(n) && C.splice(C.indexOf(n), 1), A.includes(n) && A.splice(A.indexOf(n), 1)), T && A.forEach((O) => {
    u[O].swiperLoopMoveDOM = !0, h.prepend(u[O]), u[O].swiperLoopMoveDOM = !1;
  }), E && C.forEach((O) => {
    u[O].swiperLoopMoveDOM = !0, h.append(u[O]), u[O].swiperLoopMoveDOM = !1;
  }), l.recalcSlides(), f.slidesPerView === "auto" ? l.updateSlides() : k && (A.length > 0 && T || C.length > 0 && E) && l.slides.forEach((O, P) => {
    l.grid.updateSlide(P, O, l.slides);
  }), f.watchSlidesProgress && l.updateSlidesOffset(), e) {
    if (A.length > 0 && T) {
      if (typeof r > "u") {
        const O = l.slidesGrid[B], L = l.slidesGrid[B + M] - O;
        a ? l.setTranslate(l.translate - L) : (l.slideTo(B + Math.ceil(M), 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - L, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - L));
      } else if (i) {
        const O = k ? A.length / f.grid.rows : A.length;
        l.slideTo(l.activeIndex + O, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate;
      }
    } else if (C.length > 0 && E)
      if (typeof r > "u") {
        const O = l.slidesGrid[B], L = l.slidesGrid[B - F] - O;
        a ? l.setTranslate(l.translate - L) : (l.slideTo(B - F, 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - L, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - L));
      } else {
        const O = k ? C.length / f.grid.rows : C.length;
        l.slideTo(l.activeIndex - O, 0, !1, !0);
      }
  }
  if (l.allowSlidePrev = c, l.allowSlideNext = d, l.controller && l.controller.control && !o) {
    const O = {
      slideRealIndex: r,
      direction: t,
      setTranslate: i,
      activeSlideIndex: n,
      byController: !0
    };
    Array.isArray(l.controller.control) ? l.controller.control.forEach((P) => {
      !P.destroyed && P.params.loop && P.loopFix({
        ...O,
        slideTo: P.params.slidesPerView === f.slidesPerView ? e : !1
      });
    }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
      ...O,
      slideTo: l.controller.control.params.slidesPerView === f.slidesPerView ? e : !1
    });
  }
  l.emit("loopFix");
}
function Yh() {
  const r = this, {
    params: e,
    slidesEl: t
  } = r;
  if (!e.loop || !t || r.virtual && r.params.virtual.enabled)
    return;
  r.recalcSlides();
  const i = [];
  r.slides.forEach((n) => {
    const s = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    i[s] = n;
  }), r.slides.forEach((n) => {
    n.removeAttribute("data-swiper-slide-index");
  }), i.forEach((n) => {
    t.append(n);
  }), r.recalcSlides(), r.slideTo(r.realIndex, 0);
}
var Kh = {
  loopCreate: Gh,
  loopFix: Wh,
  loopDestroy: Yh
};
function Zh(r) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = r ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function Xh() {
  const r = this;
  r.params.watchOverflow && r.isLocked || r.params.cssMode || (r.isElement && (r.__preventObserver__ = !0), r[r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", r.isElement && requestAnimationFrame(() => {
    r.__preventObserver__ = !1;
  }));
}
var Jh = {
  setGrabCursor: Zh,
  unsetGrabCursor: Xh
};
function Qh(r, e = this) {
  function t(i) {
    if (!i || i === lr() || i === Te())
      return null;
    i.assignedSlot && (i = i.assignedSlot);
    const n = i.closest(r);
    return !n && !i.getRootNode ? null : n || t(i.getRootNode().host);
  }
  return t(e);
}
function Fa(r, e, t) {
  const i = Te(), {
    params: n
  } = r, s = n.edgeSwipeDetection, o = n.edgeSwipeThreshold;
  return s && (t <= o || t >= i.innerWidth - o) ? s === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function e1(r) {
  const e = this, t = lr();
  let i = r;
  i.originalEvent && (i = i.originalEvent);
  const n = e.touchEventsData;
  if (i.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== i.pointerId)
      return;
    n.pointerId = i.pointerId;
  } else
    i.type === "touchstart" && i.targetTouches.length === 1 && (n.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    Fa(e, i, i.targetTouches[0].pageX);
    return;
  }
  const {
    params: s,
    touches: o,
    enabled: a
  } = e;
  if (!a || !s.simulateTouch && i.pointerType === "mouse" || e.animating && s.preventInteractionOnTransition)
    return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = i.target;
  if (s.touchEventsTarget === "wrapper" && !lh(l, e.wrapperEl) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || n.isTouched && n.isMoved)
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "", c = i.composedPath ? i.composedPath() : i.path;
  u && i.target && i.target.shadowRoot && c && (l = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, h = !!(i.target && i.target.shadowRoot);
  if (s.noSwiping && (h ? Qh(d, l) : l.closest(d))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler))
    return;
  o.currentX = i.pageX, o.currentY = i.pageY;
  const f = o.currentX, b = o.currentY;
  if (!Fa(e, i, f))
    return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = f, o.startY = b, n.touchStartTime = sn(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (n.allowThresholdMove = !1);
  let v = !0;
  l.matches(n.focusableElements) && (v = !1, l.nodeName === "SELECT" && (n.isTouched = !1)), t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== l && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !l.matches(n.focusableElements)) && t.activeElement.blur();
  const w = v && e.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || w) && !l.isContentEditable && i.preventDefault(), s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i);
}
function t1(r) {
  const e = lr(), t = this, i = t.touchEventsData, {
    params: n,
    touches: s,
    rtlTranslate: o,
    enabled: a
  } = t;
  if (!a || !n.simulateTouch && r.pointerType === "mouse")
    return;
  let l = r;
  if (l.originalEvent && (l = l.originalEvent), l.type === "pointermove" && (i.touchId !== null || l.pointerId !== i.pointerId))
    return;
  let u;
  if (l.type === "touchmove") {
    if (u = [...l.changedTouches].find((k) => k.identifier === i.touchId), !u || u.identifier !== i.touchId)
      return;
  } else
    u = l;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  const c = u.pageX, d = u.pageY;
  if (l.preventedByNestedSwiper) {
    s.startX = c, s.startY = d;
    return;
  }
  if (!t.allowTouchMove) {
    l.target.matches(i.focusableElements) || (t.allowClick = !1), i.isTouched && (Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d
    }), i.touchStartTime = sn());
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop)
    if (t.isVertical()) {
      if (d < s.startY && t.translate <= t.maxTranslate() || d > s.startY && t.translate >= t.minTranslate()) {
        i.isTouched = !1, i.isMoved = !1;
        return;
      }
    } else {
      if (o && (c > s.startX && -t.translate <= t.maxTranslate() || c < s.startX && -t.translate >= t.minTranslate()))
        return;
      if (!o && (c < s.startX && t.translate <= t.maxTranslate() || c > s.startX && t.translate >= t.minTranslate()))
        return;
    }
  if (e.activeElement && e.activeElement.matches(i.focusableElements) && e.activeElement !== l.target && l.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && l.target === e.activeElement && l.target.matches(i.focusableElements)) {
    i.isMoved = !0, t.allowClick = !1;
    return;
  }
  i.allowTouchCallbacks && t.emit("touchMove", l), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = c, s.currentY = d;
  const h = s.currentX - s.startX, f = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(h ** 2 + f ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let k;
    t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (k = Math.atan2(Math.abs(f), Math.abs(h)) * 180 / Math.PI, i.isScrolling = t.isHorizontal() ? k > n.touchAngle : 90 - k > n.touchAngle);
  }
  if (i.isScrolling && t.emit("touchMoveOpposite", l), typeof i.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (i.startMoving = !0), i.isScrolling || l.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving)
    return;
  t.allowClick = !1, !n.cssMode && l.cancelable && l.preventDefault(), n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
  let b = t.isHorizontal() ? h : f, v = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  n.oneWayMovement && (b = Math.abs(b) * (o ? 1 : -1), v = Math.abs(v) * (o ? 1 : -1)), s.diff = b, b *= n.touchRatio, o && (b = -b, v = -v);
  const w = t.touchesDirection;
  t.swipeDirection = b > 0 ? "prev" : "next", t.touchesDirection = v > 0 ? "prev" : "next";
  const m = t.params.loop && !n.cssMode, g = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!i.isMoved) {
    if (m && g && t.loopFix({
      direction: t.swipeDirection
    }), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const k = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(k);
    }
    i.allowMomentumBounce = !1, n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", l);
  }
  let x;
  if ((/* @__PURE__ */ new Date()).getTime(), n._loopSwapReset !== !1 && i.isMoved && i.allowThresholdMove && w !== t.touchesDirection && m && g && Math.abs(b) >= 1) {
    Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: i.currentTranslate
    }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
    return;
  }
  t.emit("sliderMove", l), i.isMoved = !0, i.currentTranslate = b + i.startTranslate;
  let _ = !0, y = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (y = 0), b > 0 ? (m && g && !x && i.allowThresholdMove && i.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (n.slidesPerView !== "auto" && t.slides.length - n.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), i.currentTranslate > t.minTranslate() && (_ = !1, n.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + b) ** y))) : b < 0 && (m && g && !x && i.allowThresholdMove && i.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (n.slidesPerView !== "auto" && t.slides.length - n.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
  }), i.currentTranslate < t.maxTranslate() && (_ = !1, n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - b) ** y))), _ && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate), n.threshold > 0)
    if (Math.abs(b) > n.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && t.freeMode || n.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate));
}
function r1(r) {
  const e = this, t = e.touchEventsData;
  let i = r;
  i.originalEvent && (i = i.originalEvent);
  let n;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (n = [...i.changedTouches].find((y) => y.identifier === t.touchId), !n || n.identifier !== t.touchId)
      return;
  } else {
    if (t.touchId !== null || i.pointerId !== t.pointerId)
      return;
    n = i;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  t.pointerId = null, t.touchId = null;
  const {
    params: o,
    touches: a,
    rtlTranslate: l,
    slidesGrid: u,
    enabled: c
  } = e;
  if (!c || !o.simulateTouch && i.pointerType === "mouse")
    return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", i), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && o.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const d = sn(), h = d - t.touchStartTime;
  if (e.allowClick) {
    const y = i.path || i.composedPath && i.composedPath();
    e.updateClickedSlide(y && y[0] || i.target, y), e.emit("tap click", i), h < 300 && d - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i);
  }
  if (t.lastClickTime = sn(), Uu(() => {
    e.destroyed || (e.allowClick = !0);
  }), !t.isTouched || !t.isMoved || !e.swipeDirection || a.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let f;
  if (o.followFinger ? f = l ? e.translate : -e.translate : f = -t.currentTranslate, o.cssMode)
    return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: f
    });
    return;
  }
  const b = f >= -e.maxTranslate() && !e.params.loop;
  let v = 0, w = e.slidesSizesGrid[0];
  for (let y = 0; y < u.length; y += y < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const k = y < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[y + k] < "u" ? (b || f >= u[y] && f < u[y + k]) && (v = y, w = u[y + k] - u[y]) : (b || f >= u[y]) && (v = y, w = u[u.length - 1] - u[u.length - 2]);
  }
  let m = null, g = null;
  o.rewind && (e.isBeginning ? g = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (m = 0));
  const x = (f - u[v]) / w, _ = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (h > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (x >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? m : v + _) : e.slideTo(v)), e.swipeDirection === "prev" && (x > 1 - o.longSwipesRatio ? e.slideTo(v + _) : g !== null && x < 0 && Math.abs(x) > o.longSwipesRatio ? e.slideTo(g) : e.slideTo(v));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(v + _) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : v + _), e.swipeDirection === "prev" && e.slideTo(g !== null ? g : v));
  }
}
function Na() {
  const r = this, {
    params: e,
    el: t
  } = r;
  if (t && t.offsetWidth === 0)
    return;
  e.breakpoints && r.setBreakpoint();
  const {
    allowSlideNext: i,
    allowSlidePrev: n,
    snapGrid: s
  } = r, o = r.virtual && r.params.virtual.enabled;
  r.allowSlideNext = !0, r.allowSlidePrev = !0, r.updateSize(), r.updateSlides(), r.updateSlidesClasses();
  const a = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && r.isEnd && !r.isBeginning && !r.params.centeredSlides && !a ? r.slideTo(r.slides.length - 1, 0, !1, !0) : r.params.loop && !o ? r.slideToLoop(r.realIndex, 0, !1, !0) : r.slideTo(r.activeIndex, 0, !1, !0), r.autoplay && r.autoplay.running && r.autoplay.paused && (clearTimeout(r.autoplay.resizeTimeout), r.autoplay.resizeTimeout = setTimeout(() => {
    r.autoplay && r.autoplay.running && r.autoplay.paused && r.autoplay.resume();
  }, 500)), r.allowSlidePrev = n, r.allowSlideNext = i, r.params.watchOverflow && s !== r.snapGrid && r.checkOverflow();
}
function i1(r) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && r.preventDefault(), e.params.preventClicksPropagation && e.animating && (r.stopPropagation(), r.stopImmediatePropagation())));
}
function n1() {
  const r = this, {
    wrapperEl: e,
    rtlTranslate: t,
    enabled: i
  } = r;
  if (!i)
    return;
  r.previousTranslate = r.translate, r.isHorizontal() ? r.translate = -e.scrollLeft : r.translate = -e.scrollTop, r.translate === 0 && (r.translate = 0), r.updateActiveIndex(), r.updateSlidesClasses();
  let n;
  const s = r.maxTranslate() - r.minTranslate();
  s === 0 ? n = 0 : n = (r.translate - r.minTranslate()) / s, n !== r.progress && r.updateProgress(t ? -r.translate : r.translate), r.emit("setTranslate", r.translate, !1);
}
function s1(r) {
  const e = this;
  Vi(e, r.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function o1() {
  const r = this;
  r.documentTouchHandlerProceeded || (r.documentTouchHandlerProceeded = !0, r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
}
const Xu = (r, e) => {
  const t = lr(), {
    params: i,
    el: n,
    wrapperEl: s,
    device: o
  } = r, a = !!i.nested, l = e === "on" ? "addEventListener" : "removeEventListener", u = e;
  !n || typeof n == "string" || (t[l]("touchstart", r.onDocumentTouchStart, {
    passive: !1,
    capture: a
  }), n[l]("touchstart", r.onTouchStart, {
    passive: !1
  }), n[l]("pointerdown", r.onTouchStart, {
    passive: !1
  }), t[l]("touchmove", r.onTouchMove, {
    passive: !1,
    capture: a
  }), t[l]("pointermove", r.onTouchMove, {
    passive: !1,
    capture: a
  }), t[l]("touchend", r.onTouchEnd, {
    passive: !0
  }), t[l]("pointerup", r.onTouchEnd, {
    passive: !0
  }), t[l]("pointercancel", r.onTouchEnd, {
    passive: !0
  }), t[l]("touchcancel", r.onTouchEnd, {
    passive: !0
  }), t[l]("pointerout", r.onTouchEnd, {
    passive: !0
  }), t[l]("pointerleave", r.onTouchEnd, {
    passive: !0
  }), t[l]("contextmenu", r.onTouchEnd, {
    passive: !0
  }), (i.preventClicks || i.preventClicksPropagation) && n[l]("click", r.onClick, !0), i.cssMode && s[l]("scroll", r.onScroll), i.updateOnWindowResize ? r[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Na, !0) : r[u]("observerUpdate", Na, !0), n[l]("load", r.onLoad, {
    capture: !0
  }));
};
function a1() {
  const r = this, {
    params: e
  } = r;
  r.onTouchStart = e1.bind(r), r.onTouchMove = t1.bind(r), r.onTouchEnd = r1.bind(r), r.onDocumentTouchStart = o1.bind(r), e.cssMode && (r.onScroll = n1.bind(r)), r.onClick = i1.bind(r), r.onLoad = s1.bind(r), Xu(r, "on");
}
function l1() {
  Xu(this, "off");
}
var u1 = {
  attachEvents: a1,
  detachEvents: l1
};
const Ma = (r, e) => r.grid && e.grid && e.grid.rows > 1;
function c1() {
  const r = this, {
    realIndex: e,
    initialized: t,
    params: i,
    el: n
  } = r, s = i.breakpoints;
  if (!s || s && Object.keys(s).length === 0)
    return;
  const o = lr(), a = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container", l = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? r.el : o.querySelector(i.breakpointsBase), u = r.getBreakpoint(s, a, l);
  if (!u || r.currentBreakpoint === u)
    return;
  const d = (u in s ? s[u] : void 0) || r.originalParams, h = Ma(r, i), f = Ma(r, d), b = r.params.grabCursor, v = d.grabCursor, w = i.enabled;
  h && !f ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), r.emitContainerClasses()) : !h && f && (n.classList.add(`${i.containerModifierClass}grid`), (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && i.grid.fill === "column") && n.classList.add(`${i.containerModifierClass}grid-column`), r.emitContainerClasses()), b && !v ? r.unsetGrabCursor() : !b && v && r.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((k) => {
    if (typeof d[k] > "u")
      return;
    const A = i[k] && i[k].enabled, C = d[k] && d[k].enabled;
    A && !C && r[k].disable(), !A && C && r[k].enable();
  });
  const m = d.direction && d.direction !== i.direction, g = i.loop && (d.slidesPerView !== i.slidesPerView || m), x = i.loop;
  m && t && r.changeDirection(), $e(r.params, d);
  const _ = r.params.enabled, y = r.params.loop;
  Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev
  }), w && !_ ? r.disable() : !w && _ && r.enable(), r.currentBreakpoint = u, r.emit("_beforeBreakpoint", d), t && (g ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides()) : !x && y ? (r.loopCreate(e), r.updateSlides()) : x && !y && r.loopDestroy()), r.emit("breakpoint", d);
}
function d1(r, e = "window", t) {
  if (!r || e === "container" && !t)
    return;
  let i = !1;
  const n = Te(), s = e === "window" ? n.innerHeight : t.clientHeight, o = Object.keys(r).map((a) => {
    if (typeof a == "string" && a.indexOf("@") === 0) {
      const l = parseFloat(a.substr(1));
      return {
        value: s * l,
        point: a
      };
    }
    return {
      value: a,
      point: a
    };
  });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const {
      point: l,
      value: u
    } = o[a];
    e === "window" ? n.matchMedia(`(min-width: ${u}px)`).matches && (i = l) : u <= t.clientWidth && (i = l);
  }
  return i || "max";
}
var p1 = {
  setBreakpoint: c1,
  getBreakpoint: d1
};
function f1(r, e) {
  const t = [];
  return r.forEach((i) => {
    typeof i == "object" ? Object.keys(i).forEach((n) => {
      i[n] && t.push(e + n);
    }) : typeof i == "string" && t.push(e + i);
  }), t;
}
function h1() {
  const r = this, {
    classNames: e,
    params: t,
    rtl: i,
    el: n,
    device: s
  } = r, o = f1(["initialized", t.direction, {
    "free-mode": r.params.freeMode && t.freeMode.enabled
  }, {
    autoheight: t.autoHeight
  }, {
    rtl: i
  }, {
    grid: t.grid && t.grid.rows > 1
  }, {
    "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
  }, {
    android: s.android
  }, {
    ios: s.ios
  }, {
    "css-mode": t.cssMode
  }, {
    centered: t.cssMode && t.centeredSlides
  }, {
    "watch-progress": t.watchSlidesProgress
  }], t.containerModifierClass);
  e.push(...o), n.classList.add(...e), r.emitContainerClasses();
}
function g1() {
  const r = this, {
    el: e,
    classNames: t
  } = r;
  !e || typeof e == "string" || (e.classList.remove(...t), r.emitContainerClasses());
}
var m1 = {
  addClasses: h1,
  removeClasses: g1
};
function b1() {
  const r = this, {
    isLocked: e,
    params: t
  } = r, {
    slidesOffsetBefore: i
  } = t;
  if (i) {
    const n = r.slides.length - 1, s = r.slidesGrid[n] + r.slidesSizesGrid[n] + i * 2;
    r.isLocked = r.size > s;
  } else
    r.isLocked = r.snapGrid.length === 1;
  t.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked), t.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked), e && e !== r.isLocked && (r.isEnd = !1), e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock");
}
var v1 = {
  checkOverflow: b1
}, Ss = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  snapToSlideEdge: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function w1(r, e) {
  return function(i = {}) {
    const n = Object.keys(i)[0], s = i[n];
    if (typeof s != "object" || s === null) {
      $e(e, i);
      return;
    }
    if (r[n] === !0 && (r[n] = {
      enabled: !0
    }), n === "navigation" && r[n] && r[n].enabled && !r[n].prevEl && !r[n].nextEl && (r[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && r[n] && r[n].enabled && !r[n].el && (r[n].auto = !0), !(n in r && "enabled" in s)) {
      $e(e, i);
      return;
    }
    typeof r[n] == "object" && !("enabled" in r[n]) && (r[n].enabled = !0), r[n] || (r[n] = {
      enabled: !1
    }), $e(e, i);
  };
}
const Kn = {
  eventsEmitter: mh,
  update: Sh,
  translate: Nh,
  transition: Ih,
  slide: Hh,
  loop: Kh,
  grabCursor: Jh,
  events: u1,
  breakpoints: p1,
  checkOverflow: v1,
  classes: m1
}, Zn = {};
let co = class wt {
  constructor(...e) {
    let t, i;
    e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? i = e[0] : [t, i] = e, i || (i = {}), i = $e({}, i), t && !i.el && (i.el = t);
    const n = lr();
    if (i.el && typeof i.el == "string" && n.querySelectorAll(i.el).length > 1) {
      const l = [];
      return n.querySelectorAll(i.el).forEach((u) => {
        const c = $e({}, i, {
          el: u
        });
        l.push(new wt(c));
      }), l;
    }
    const s = this;
    s.__swiper__ = !0, s.support = Wu(), s.device = Yu({
      userAgent: i.userAgent
    }), s.browser = Ku(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], i.modules && Array.isArray(i.modules) && i.modules.forEach((l) => {
      typeof l == "function" && s.modules.indexOf(l) < 0 && s.modules.push(l);
    });
    const o = {};
    s.modules.forEach((l) => {
      l({
        params: i,
        swiper: s,
        extendParams: w1(i, o),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s)
      });
    });
    const a = $e({}, Ss, o);
    return s.params = $e({}, a, Zn, i), s.originalParams = $e({}, s.params), s.passedParams = $e({}, i), s.params && s.params.on && Object.keys(s.params.on).forEach((l) => {
      s.on(l, s.params.on[l]);
    }), s.params && s.params.onAny && s.onAny(s.params.onAny), Object.assign(s, {
      enabled: s.params.enabled,
      el: t,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return s.params.direction === "horizontal";
      },
      isVertical() {
        return s.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: s.params.allowSlideNext,
      allowSlidePrev: s.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: s.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: s.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), s.emit("_swiper"), s.params.init && s.init(), s;
  }
  getDirectionLabel(e) {
    return this.isHorizontal() ? e : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[e];
  }
  getSlideIndex(e) {
    const {
      slidesEl: t,
      params: i
    } = this, n = ut(t, `.${i.slideClass}, swiper-slide`), s = ln(n[0]);
    return ln(e) - s;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.find((t) => t.getAttribute("data-swiper-slide-index") * 1 === e));
  }
  getSlideIndexWhenGrid(e) {
    return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? e = Math.floor(e / this.params.grid.rows) : this.params.grid.fill === "row" && (e = e % Math.ceil(this.slides.length / this.params.grid.rows))), e;
  }
  recalcSlides() {
    const e = this, {
      slidesEl: t,
      params: i
    } = e;
    e.slides = ut(t, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, t) {
    const i = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = i.minTranslate(), o = (i.maxTranslate() - n) * e + n;
    i.translateTo(o, typeof t > "u" ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el)
      return;
    const t = e.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed ? "" : e.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el)
      return;
    const t = [];
    e.slides.forEach((i) => {
      const n = e.getSlideClasses(i);
      t.push({
        slideEl: i,
        classNames: n
      }), e.emit("_slideClass", i, n);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e = "current", t = !1) {
    const i = this, {
      params: n,
      slides: s,
      slidesGrid: o,
      slidesSizesGrid: a,
      size: l,
      activeIndex: u
    } = i;
    let c = 1;
    if (typeof n.slidesPerView == "number")
      return n.slidesPerView;
    if (n.centeredSlides) {
      let d = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0, h;
      for (let f = u + 1; f < s.length; f += 1)
        s[f] && !h && (d += Math.ceil(s[f].swiperSlideSize), c += 1, d > l && (h = !0));
      for (let f = u - 1; f >= 0; f -= 1)
        s[f] && !h && (d += s[f].swiperSlideSize, c += 1, d > l && (h = !0));
    } else if (e === "current")
      for (let d = u + 1; d < s.length; d += 1)
        (t ? o[d] + a[d] - o[u] < l : o[d] - o[u] < l) && (c += 1);
    else
      for (let d = u - 1; d >= 0; d -= 1)
        o[u] - o[d] < l && (c += 1);
    return c;
  }
  update() {
    const e = this;
    if (!e || e.destroyed)
      return;
    const {
      snapGrid: t,
      params: i
    } = e;
    i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
      o.complete && Vi(e, o);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate, a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let s;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      n(), i.autoHeight && e.updateAutoHeight();
    else {
      if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
        const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
        s = e.slideTo(o.length - 1, 0, !1, !0);
      } else
        s = e.slideTo(e.activeIndex, 0, !1, !0);
      s || n();
    }
    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t = !0) {
    const i = this, n = i.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${n}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((s) => {
      e === "vertical" ? s.style.width = "" : s.style.height = "";
    }), i.emit("changeDirection"), t && i.update()), i;
  }
  changeLanguageDirection(e) {
    const t = this;
    t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted)
      return !0;
    let i = e || t.params.el;
    if (typeof i == "string" && (i = document.querySelector(i)), !i)
      return !1;
    i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
    const n = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(n()) : ut(i, n())[0])();
    return !o && t.params.createElements && (o = an("div", t.params.wrapperClass), i.append(o), ut(i, `.${t.params.slideClass}`).forEach((a) => {
      o.append(a);
    })), Object.assign(t, {
      el: i,
      wrapperEl: o,
      slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
      hostEl: t.isElement ? i.parentNode.host : i,
      mounted: !0,
      // RTL
      rtl: i.dir.toLowerCase() === "rtl" || Ot(i, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || Ot(i, "direction") === "rtl"),
      wrongRTL: Ot(o, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1)
      return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
    const n = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((s) => {
      s.complete ? Vi(t, s) : s.addEventListener("load", (o) => {
        Vi(t, o.target);
      });
    }), As(t), t.initialized = !0, As(t), t.emit("init"), t.emit("afterInit"), t;
  }
  destroy(e = !0, t = !0) {
    const i = this, {
      params: n,
      el: s,
      wrapperEl: o,
      slides: a
    } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s && typeof s != "string" && s.removeAttribute("style"), o && o.removeAttribute("style"), a && a.length && a.forEach((l) => {
      l.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index");
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((l) => {
      i.off(l);
    }), e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null), ih(i)), i.destroyed = !0), null;
  }
  static extendDefaults(e) {
    $e(Zn, e);
  }
  static get extendedDefaults() {
    return Zn;
  }
  static get defaults() {
    return Ss;
  }
  static installModule(e) {
    wt.prototype.__modules__ || (wt.prototype.__modules__ = []);
    const t = wt.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => wt.installModule(t)), wt) : (wt.installModule(e), wt);
  }
};
Object.keys(Kn).forEach((r) => {
  Object.keys(Kn[r]).forEach((e) => {
    co.prototype[e] = Kn[r][e];
  });
});
co.use([hh, gh]);
const Ju = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_snapToSlideEdge",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function or(r) {
  return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object" && !r.__swiper__;
}
function Ar(r, e) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((i) => t.indexOf(i) < 0).forEach((i) => {
    typeof r[i] > "u" ? r[i] = e[i] : or(e[i]) && or(r[i]) && Object.keys(e[i]).length > 0 ? e[i].__swiper__ ? r[i] = e[i] : Ar(r[i], e[i]) : r[i] = e[i];
  });
}
function Qu(r = {}) {
  return r.navigation && typeof r.navigation.nextEl > "u" && typeof r.navigation.prevEl > "u";
}
function ec(r = {}) {
  return r.pagination && typeof r.pagination.el > "u";
}
function tc(r = {}) {
  return r.scrollbar && typeof r.scrollbar.el > "u";
}
function rc(r = "") {
  const e = r.split(" ").map((i) => i.trim()).filter((i) => !!i), t = [];
  return e.forEach((i) => {
    t.indexOf(i) < 0 && t.push(i);
  }), t.join(" ");
}
function x1(r = "") {
  return r ? r.includes("swiper-wrapper") ? r : `swiper-wrapper ${r}` : "swiper-wrapper";
}
function _1({
  swiper: r,
  slides: e,
  passedParams: t,
  changedParams: i,
  nextEl: n,
  prevEl: s,
  scrollbarEl: o,
  paginationEl: a
}) {
  const l = i.filter((C) => C !== "children" && C !== "direction" && C !== "wrapperClass"), {
    params: u,
    pagination: c,
    navigation: d,
    scrollbar: h,
    virtual: f,
    thumbs: b
  } = r;
  let v, w, m, g, x, _, y, k;
  i.includes("thumbs") && t.thumbs && t.thumbs.swiper && !t.thumbs.swiper.destroyed && u.thumbs && (!u.thumbs.swiper || u.thumbs.swiper.destroyed) && (v = !0), i.includes("controller") && t.controller && t.controller.control && u.controller && !u.controller.control && (w = !0), i.includes("pagination") && t.pagination && (t.pagination.el || a) && (u.pagination || u.pagination === !1) && c && !c.el && (m = !0), i.includes("scrollbar") && t.scrollbar && (t.scrollbar.el || o) && (u.scrollbar || u.scrollbar === !1) && h && !h.el && (g = !0), i.includes("navigation") && t.navigation && (t.navigation.prevEl || s) && (t.navigation.nextEl || n) && (u.navigation || u.navigation === !1) && d && !d.prevEl && !d.nextEl && (x = !0);
  const A = (C) => {
    r[C] && (r[C].destroy(), C === "navigation" ? (r.isElement && (r[C].prevEl.remove(), r[C].nextEl.remove()), u[C].prevEl = void 0, u[C].nextEl = void 0, r[C].prevEl = void 0, r[C].nextEl = void 0) : (r.isElement && r[C].el.remove(), u[C].el = void 0, r[C].el = void 0));
  };
  i.includes("loop") && r.isElement && (u.loop && !t.loop ? _ = !0 : !u.loop && t.loop ? y = !0 : k = !0), l.forEach((C) => {
    if (or(u[C]) && or(t[C]))
      Object.assign(u[C], t[C]), (C === "navigation" || C === "pagination" || C === "scrollbar") && "enabled" in t[C] && !t[C].enabled && A(C);
    else {
      const D = t[C];
      (D === !0 || D === !1) && (C === "navigation" || C === "pagination" || C === "scrollbar") ? D === !1 && A(C) : u[C] = t[C];
    }
  }), l.includes("controller") && !w && r.controller && r.controller.control && u.controller && u.controller.control && (r.controller.control = u.controller.control), i.includes("children") && e && f && u.virtual.enabled ? (f.slides = e, f.update(!0)) : i.includes("virtual") && f && u.virtual.enabled && (e && (f.slides = e), f.update(!0)), i.includes("children") && e && u.loop && (k = !0), v && b.init() && b.update(!0), w && (r.controller.control = u.controller.control), m && (r.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-pagination"), a.part.add("pagination"), r.el.appendChild(a)), a && (u.pagination.el = a), c.init(), c.render(), c.update()), g && (r.isElement && (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), r.el.appendChild(o)), o && (u.scrollbar.el = o), h.init(), h.updateSize(), h.setTranslate()), x && (r.isElement && ((!n || typeof n == "string") && (n = document.createElement("div"), n.classList.add("swiper-button-next"), un(n, r.navigation.arrowSvg), n.part.add("button-next"), r.el.appendChild(n)), (!s || typeof s == "string") && (s = document.createElement("div"), s.classList.add("swiper-button-prev"), un(s, r.navigation.arrowSvg), s.part.add("button-prev"), r.el.appendChild(s))), n && (u.navigation.nextEl = n), s && (u.navigation.prevEl = s), d.init(), d.update()), i.includes("allowSlideNext") && (r.allowSlideNext = t.allowSlideNext), i.includes("allowSlidePrev") && (r.allowSlidePrev = t.allowSlidePrev), i.includes("direction") && r.changeDirection(t.direction, !1), (_ || k) && r.loopDestroy(), (y || k) && r.loopCreate(), r.update();
}
function y1(r = {}, e = !0) {
  const t = {
    on: {}
  }, i = {}, n = {};
  Ar(t, Ss), t._emitClasses = !0, t.init = !1;
  const s = {}, o = Ju.map((l) => l.replace(/_/, "")), a = Object.assign({}, r);
  return Object.keys(a).forEach((l) => {
    typeof r[l] > "u" || (o.indexOf(l) >= 0 ? or(r[l]) ? (t[l] = {}, n[l] = {}, Ar(t[l], r[l]), Ar(n[l], r[l])) : (t[l] = r[l], n[l] = r[l]) : l.search(/on[A-Z]/) === 0 && typeof r[l] == "function" ? e ? i[`${l[2].toLowerCase()}${l.substr(3)}`] = r[l] : t.on[`${l[2].toLowerCase()}${l.substr(3)}`] = r[l] : s[l] = r[l]);
  }), ["navigation", "pagination", "scrollbar"].forEach((l) => {
    t[l] === !0 && (t[l] = {}), t[l] === !1 && delete t[l];
  }), {
    params: t,
    passedParams: n,
    rest: s,
    events: i
  };
}
function C1({
  el: r,
  nextEl: e,
  prevEl: t,
  paginationEl: i,
  scrollbarEl: n,
  swiper: s
}, o) {
  Qu(o) && e && t && (s.params.navigation.nextEl = e, s.originalParams.navigation.nextEl = e, s.params.navigation.prevEl = t, s.originalParams.navigation.prevEl = t), ec(o) && i && (s.params.pagination.el = i, s.originalParams.pagination.el = i), tc(o) && n && (s.params.scrollbar.el = n, s.originalParams.scrollbar.el = n), s.init(r);
}
function k1(r, e, t, i, n) {
  const s = [];
  if (!e)
    return s;
  const o = (l) => {
    s.indexOf(l) < 0 && s.push(l);
  };
  if (t && i) {
    const l = i.map(n), u = t.map(n);
    l.join("") !== u.join("") && o("children"), i.length !== t.length && o("children");
  }
  return Ju.filter((l) => l[0] === "_").map((l) => l.replace(/_/, "")).forEach((l) => {
    if (l in r && l in e)
      if (or(r[l]) && or(e[l])) {
        const u = Object.keys(r[l]), c = Object.keys(e[l]);
        u.length !== c.length ? o(l) : (u.forEach((d) => {
          r[l][d] !== e[l][d] && o(l);
        }), c.forEach((d) => {
          r[l][d] !== e[l][d] && o(l);
        }));
      } else
        r[l] !== e[l] && o(l);
  }), s;
}
const D1 = (r) => {
  !r || r.destroyed || !r.params.virtual || r.params.virtual && !r.params.virtual.enabled || (r.updateSlides(), r.updateProgress(), r.updateSlidesClasses(), r.emit("_virtualUpdated"), r.parallax && r.params.parallax && r.params.parallax.enabled && r.parallax.setTranslate());
};
function cn() {
  return cn = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, cn.apply(this, arguments);
}
function ic(r) {
  return r.type && r.type.displayName && r.type.displayName.includes("SwiperSlide");
}
function nc(r) {
  const e = [];
  return we.Children.toArray(r).forEach((t) => {
    ic(t) ? e.push(t) : t.props && t.props.children && nc(t.props.children).forEach((i) => e.push(i));
  }), e;
}
function A1(r) {
  const e = [], t = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return we.Children.toArray(r).forEach((i) => {
    if (ic(i))
      e.push(i);
    else if (i.props && i.props.slot && t[i.props.slot])
      t[i.props.slot].push(i);
    else if (i.props && i.props.children) {
      const n = nc(i.props.children);
      n.length > 0 ? n.forEach((s) => e.push(s)) : t["container-end"].push(i);
    } else
      t["container-end"].push(i);
  }), {
    slides: e,
    slots: t
  };
}
function S1(r, e, t) {
  if (!t)
    return null;
  const i = (c) => {
    let d = c;
    return c < 0 ? d = e.length + c : d >= e.length && (d = d - e.length), d;
  }, n = r.isHorizontal() ? {
    [r.rtlTranslate ? "right" : "left"]: `${t.offset}px`
  } : {
    top: `${t.offset}px`
  }, {
    from: s,
    to: o
  } = t, a = r.params.loop ? -e.length : 0, l = r.params.loop ? e.length * 2 : e.length, u = [];
  for (let c = a; c < l; c += 1)
    c >= s && c <= o && u.push(e[i(c)]);
  return u.map((c, d) => /* @__PURE__ */ we.cloneElement(c, {
    swiper: r,
    style: n,
    key: c.props.virtualIndex || c.key || `slide-${d}`
  }));
}
function pi(r, e) {
  return typeof window > "u" ? U(r, e) : qr(r, e);
}
const Pa = /* @__PURE__ */ ki(null), E1 = /* @__PURE__ */ ki(null), sc = /* @__PURE__ */ Os(({
  className: r,
  tag: e = "div",
  wrapperTag: t = "div",
  children: i,
  onSwiper: n,
  ...s
} = {}, o) => {
  let a = !1;
  const [l, u] = R("swiper"), [c, d] = R(null), [h, f] = R(!1), b = Y(!1), v = Y(null), w = Y(null), m = Y(null), g = Y(null), x = Y(null), _ = Y(null), y = Y(null), k = Y(null), {
    params: A,
    passedParams: C,
    rest: D,
    events: S
  } = y1(s), {
    slides: B,
    slots: E
  } = A1(i), T = () => {
    f(!h);
  };
  Object.assign(A.on, {
    _containerClasses(O, P) {
      u(P);
    }
  });
  const M = () => {
    Object.assign(A.on, S), a = !0;
    const O = {
      ...A
    };
    if (delete O.wrapperClass, w.current = new co(O), w.current.virtual && w.current.params.virtual.enabled) {
      w.current.virtual.slides = B;
      const P = {
        cache: !1,
        slides: B,
        renderExternal: d,
        renderExternalUpdate: !1
      };
      Ar(w.current.params.virtual, P), Ar(w.current.originalParams.virtual, P);
    }
  };
  v.current || M(), w.current && w.current.on("_beforeBreakpoint", T);
  const F = () => {
    a || !S || !w.current || Object.keys(S).forEach((O) => {
      w.current.on(O, S[O]);
    });
  }, $ = () => {
    !S || !w.current || Object.keys(S).forEach((O) => {
      w.current.off(O, S[O]);
    });
  };
  U(() => () => {
    w.current && w.current.off("_beforeBreakpoint", T);
  }), U(() => {
    !b.current && w.current && (w.current.emitSlidesClasses(), b.current = !0);
  }), pi(() => {
    if (o && (o.current = v.current), !!v.current)
      return w.current.destroyed && M(), C1({
        el: v.current,
        nextEl: x.current,
        prevEl: _.current,
        paginationEl: y.current,
        scrollbarEl: k.current,
        swiper: w.current
      }, A), n && !w.current.destroyed && n(w.current), () => {
        w.current && !w.current.destroyed && w.current.destroy(!0, !1);
      };
  }, []), pi(() => {
    F();
    const O = k1(C, m.current, B, g.current, (P) => P.key);
    return m.current = C, g.current = B, O.length && w.current && !w.current.destroyed && _1({
      swiper: w.current,
      slides: B,
      passedParams: C,
      changedParams: O,
      nextEl: x.current,
      prevEl: _.current,
      scrollbarEl: k.current,
      paginationEl: y.current
    }), () => {
      $();
    };
  }), pi(() => {
    D1(w.current);
  }, [c]);
  function I() {
    return A.virtual ? S1(w.current, B, c) : B.map((O, P) => /* @__PURE__ */ we.cloneElement(O, {
      swiper: w.current,
      swiperSlideIndex: P
    }));
  }
  return /* @__PURE__ */ we.createElement(e, cn({
    ref: v,
    className: rc(`${l}${r ? ` ${r}` : ""}`)
  }, D), /* @__PURE__ */ we.createElement(E1.Provider, {
    value: w.current
  }, E["container-start"], /* @__PURE__ */ we.createElement(t, {
    className: x1(A.wrapperClass)
  }, E["wrapper-start"], I(), E["wrapper-end"]), Qu(A) && /* @__PURE__ */ we.createElement(we.Fragment, null, /* @__PURE__ */ we.createElement("div", {
    ref: _,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ we.createElement("div", {
    ref: x,
    className: "swiper-button-next"
  })), tc(A) && /* @__PURE__ */ we.createElement("div", {
    ref: k,
    className: "swiper-scrollbar"
  }), ec(A) && /* @__PURE__ */ we.createElement("div", {
    ref: y,
    className: "swiper-pagination"
  }), E["container-end"]));
});
sc.displayName = "Swiper";
const oc = /* @__PURE__ */ Os(({
  tag: r = "div",
  children: e,
  className: t = "",
  swiper: i,
  zoom: n,
  lazy: s,
  virtualIndex: o,
  swiperSlideIndex: a,
  ...l
} = {}, u) => {
  const c = Y(null), [d, h] = R("swiper-slide"), [f, b] = R(!1);
  function v(x, _, y) {
    _ === c.current && h(y);
  }
  pi(() => {
    if (typeof a < "u" && (c.current.swiperSlideIndex = a), u && (u.current = c.current), !(!c.current || !i)) {
      if (i.destroyed) {
        d !== "swiper-slide" && h("swiper-slide");
        return;
      }
      return i.on("_slideClass", v), () => {
        i && i.off("_slideClass", v);
      };
    }
  }), pi(() => {
    i && c.current && !i.destroyed && h(i.getSlideClasses(c.current));
  }, [i]);
  const w = {
    isActive: d.indexOf("swiper-slide-active") >= 0,
    isVisible: d.indexOf("swiper-slide-visible") >= 0,
    isPrev: d.indexOf("swiper-slide-prev") >= 0,
    isNext: d.indexOf("swiper-slide-next") >= 0
  }, m = () => typeof e == "function" ? e(w) : e, g = () => {
    b(!0);
  };
  return /* @__PURE__ */ we.createElement(r, cn({
    ref: c,
    className: rc(`${d}${t ? ` ${t}` : ""}`),
    "data-swiper-slide-index": o,
    onLoad: g
  }, l), n && /* @__PURE__ */ we.createElement(Pa.Provider, {
    value: w
  }, /* @__PURE__ */ we.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof n == "number" ? n : void 0
  }, m(), s && !f && /* @__PURE__ */ we.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (x) => {
      x && (x.lazyPreloaderManaged = !0);
    }
  }))), !n && /* @__PURE__ */ we.createElement(Pa.Provider, {
    value: w
  }, m(), s && !f && /* @__PURE__ */ we.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (x) => {
      x && (x.lazyPreloaderManaged = !0);
    }
  })));
});
oc.displayName = "SwiperSlide";
function B1(r, e, t, i) {
  return r.params.createElements && Object.keys(i).forEach((n) => {
    if (!t[n] && t.auto === !0) {
      let s = ut(r.el, `.${i[n]}`)[0];
      s || (s = an("div", i[n]), s.className = i[n], r.el.append(s)), t[n] = s, e[n] = s;
    }
  }), t;
}
function Jr(r = "") {
  return `.${r.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
function L1({
  swiper: r,
  extendParams: e,
  on: t,
  emit: i
}) {
  const n = "swiper-pagination";
  e({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (m) => m,
      formatFractionTotal: (m) => m,
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`
    }
  }), r.pagination = {
    el: null,
    bullets: []
  };
  let s, o = 0;
  function a() {
    return !r.params.pagination.el || !r.pagination.el || Array.isArray(r.pagination.el) && r.pagination.el.length === 0;
  }
  function l(m, g) {
    const {
      bulletActiveClass: x
    } = r.params.pagination;
    m && (m = m[`${g === "prev" ? "previous" : "next"}ElementSibling`], m && (m.classList.add(`${x}-${g}`), m = m[`${g === "prev" ? "previous" : "next"}ElementSibling`], m && m.classList.add(`${x}-${g}-${g}`)));
  }
  function u(m, g, x) {
    if (m = m % x, g = g % x, g === m + 1)
      return "next";
    if (g === m - 1)
      return "previous";
  }
  function c(m) {
    const g = m.target.closest(Jr(r.params.pagination.bulletClass));
    if (!g)
      return;
    m.preventDefault();
    const x = ln(g) * r.params.slidesPerGroup;
    if (r.params.loop) {
      if (r.realIndex === x)
        return;
      const _ = u(r.realIndex, x, r.slides.length);
      _ === "next" ? r.slideNext() : _ === "previous" ? r.slidePrev() : r.slideToLoop(x);
    } else
      r.slideTo(x);
  }
  function d() {
    const m = r.rtl, g = r.params.pagination;
    if (a())
      return;
    let x = r.pagination.el;
    x = vt(x);
    let _, y;
    const k = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : r.slides.length, A = r.params.loop ? Math.ceil(k / r.params.slidesPerGroup) : r.snapGrid.length;
    if (r.params.loop ? (y = r.previousRealIndex || 0, _ = r.params.slidesPerGroup > 1 ? Math.floor(r.realIndex / r.params.slidesPerGroup) : r.realIndex) : typeof r.snapIndex < "u" ? (_ = r.snapIndex, y = r.previousSnapIndex) : (y = r.previousIndex || 0, _ = r.activeIndex || 0), g.type === "bullets" && r.pagination.bullets && r.pagination.bullets.length > 0) {
      const C = r.pagination.bullets;
      let D, S, B;
      if (g.dynamicBullets && (s = Ds(C[0], r.isHorizontal() ? "width" : "height", !0), x.forEach((E) => {
        E.style[r.isHorizontal() ? "width" : "height"] = `${s * (g.dynamicMainBullets + 4)}px`;
      }), g.dynamicMainBullets > 1 && y !== void 0 && (o += _ - (y || 0), o > g.dynamicMainBullets - 1 ? o = g.dynamicMainBullets - 1 : o < 0 && (o = 0)), D = Math.max(_ - o, 0), S = D + (Math.min(C.length, g.dynamicMainBullets) - 1), B = (S + D) / 2), C.forEach((E) => {
        const T = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((M) => `${g.bulletActiveClass}${M}`)].map((M) => typeof M == "string" && M.includes(" ") ? M.split(" ") : M).flat();
        E.classList.remove(...T);
      }), x.length > 1)
        C.forEach((E) => {
          const T = ln(E);
          T === _ ? E.classList.add(...g.bulletActiveClass.split(" ")) : r.isElement && E.setAttribute("part", "bullet"), g.dynamicBullets && (T >= D && T <= S && E.classList.add(...`${g.bulletActiveClass}-main`.split(" ")), T === D && l(E, "prev"), T === S && l(E, "next"));
        });
      else {
        const E = C[_];
        if (E && E.classList.add(...g.bulletActiveClass.split(" ")), r.isElement && C.forEach((T, M) => {
          T.setAttribute("part", M === _ ? "bullet-active" : "bullet");
        }), g.dynamicBullets) {
          const T = C[D], M = C[S];
          for (let F = D; F <= S; F += 1)
            C[F] && C[F].classList.add(...`${g.bulletActiveClass}-main`.split(" "));
          l(T, "prev"), l(M, "next");
        }
      }
      if (g.dynamicBullets) {
        const E = Math.min(C.length, g.dynamicMainBullets + 4), T = (s * E - s) / 2 - B * s, M = m ? "right" : "left";
        C.forEach((F) => {
          F.style[r.isHorizontal() ? M : "top"] = `${T}px`;
        });
      }
    }
    x.forEach((C, D) => {
      if (g.type === "fraction" && (C.querySelectorAll(Jr(g.currentClass)).forEach((S) => {
        S.textContent = g.formatFractionCurrent(_ + 1);
      }), C.querySelectorAll(Jr(g.totalClass)).forEach((S) => {
        S.textContent = g.formatFractionTotal(A);
      })), g.type === "progressbar") {
        let S;
        g.progressbarOpposite ? S = r.isHorizontal() ? "vertical" : "horizontal" : S = r.isHorizontal() ? "horizontal" : "vertical";
        const B = (_ + 1) / A;
        let E = 1, T = 1;
        S === "horizontal" ? E = B : T = B, C.querySelectorAll(Jr(g.progressbarFillClass)).forEach((M) => {
          M.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${T})`, M.style.transitionDuration = `${r.params.speed}ms`;
        });
      }
      g.type === "custom" && g.renderCustom ? (un(C, g.renderCustom(r, _ + 1, A)), D === 0 && i("paginationRender", C)) : (D === 0 && i("paginationRender", C), i("paginationUpdate", C)), r.params.watchOverflow && r.enabled && C.classList[r.isLocked ? "add" : "remove"](g.lockClass);
    });
  }
  function h() {
    const m = r.params.pagination;
    if (a())
      return;
    const g = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : r.grid && r.params.grid.rows > 1 ? r.slides.length / Math.ceil(r.params.grid.rows) : r.slides.length;
    let x = r.pagination.el;
    x = vt(x);
    let _ = "";
    if (m.type === "bullets") {
      let y = r.params.loop ? Math.ceil(g / r.params.slidesPerGroup) : r.snapGrid.length;
      r.params.freeMode && r.params.freeMode.enabled && y > g && (y = g);
      for (let k = 0; k < y; k += 1)
        m.renderBullet ? _ += m.renderBullet.call(r, k, m.bulletClass) : _ += `<${m.bulletElement} ${r.isElement ? 'part="bullet"' : ""} class="${m.bulletClass}"></${m.bulletElement}>`;
    }
    m.type === "fraction" && (m.renderFraction ? _ = m.renderFraction.call(r, m.currentClass, m.totalClass) : _ = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`), m.type === "progressbar" && (m.renderProgressbar ? _ = m.renderProgressbar.call(r, m.progressbarFillClass) : _ = `<span class="${m.progressbarFillClass}"></span>`), r.pagination.bullets = [], x.forEach((y) => {
      m.type !== "custom" && un(y, _ || ""), m.type === "bullets" && r.pagination.bullets.push(...y.querySelectorAll(Jr(m.bulletClass)));
    }), m.type !== "custom" && i("paginationRender", x[0]);
  }
  function f() {
    r.params.pagination = B1(r, r.originalParams.pagination, r.params.pagination, {
      el: "swiper-pagination"
    });
    const m = r.params.pagination;
    if (!m.el)
      return;
    let g;
    typeof m.el == "string" && r.isElement && (g = r.el.querySelector(m.el)), !g && typeof m.el == "string" && (g = [...document.querySelectorAll(m.el)]), g || (g = m.el), !(!g || g.length === 0) && (r.params.uniqueNavElements && typeof m.el == "string" && Array.isArray(g) && g.length > 1 && (g = [...r.el.querySelectorAll(m.el)], g.length > 1 && (g = g.find((x) => Gu(x, ".swiper")[0] === r.el))), Array.isArray(g) && g.length === 1 && (g = g[0]), Object.assign(r.pagination, {
      el: g
    }), g = vt(g), g.forEach((x) => {
      m.type === "bullets" && m.clickable && x.classList.add(...(m.clickableClass || "").split(" ")), x.classList.add(m.modifierClass + m.type), x.classList.add(r.isHorizontal() ? m.horizontalClass : m.verticalClass), m.type === "bullets" && m.dynamicBullets && (x.classList.add(`${m.modifierClass}${m.type}-dynamic`), o = 0, m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)), m.type === "progressbar" && m.progressbarOpposite && x.classList.add(m.progressbarOppositeClass), m.clickable && x.addEventListener("click", c), r.enabled || x.classList.add(m.lockClass);
    }));
  }
  function b() {
    const m = r.params.pagination;
    if (a())
      return;
    let g = r.pagination.el;
    g && (g = vt(g), g.forEach((x) => {
      x.classList.remove(m.hiddenClass), x.classList.remove(m.modifierClass + m.type), x.classList.remove(r.isHorizontal() ? m.horizontalClass : m.verticalClass), m.clickable && (x.classList.remove(...(m.clickableClass || "").split(" ")), x.removeEventListener("click", c));
    })), r.pagination.bullets && r.pagination.bullets.forEach((x) => x.classList.remove(...m.bulletActiveClass.split(" ")));
  }
  t("changeDirection", () => {
    if (!r.pagination || !r.pagination.el)
      return;
    const m = r.params.pagination;
    let {
      el: g
    } = r.pagination;
    g = vt(g), g.forEach((x) => {
      x.classList.remove(m.horizontalClass, m.verticalClass), x.classList.add(r.isHorizontal() ? m.horizontalClass : m.verticalClass);
    });
  }), t("init", () => {
    r.params.pagination.enabled === !1 ? w() : (f(), h(), d());
  }), t("activeIndexChange", () => {
    typeof r.snapIndex > "u" && d();
  }), t("snapIndexChange", () => {
    d();
  }), t("snapGridLengthChange", () => {
    h(), d();
  }), t("destroy", () => {
    b();
  }), t("enable disable", () => {
    let {
      el: m
    } = r.pagination;
    m && (m = vt(m), m.forEach((g) => g.classList[r.enabled ? "remove" : "add"](r.params.pagination.lockClass)));
  }), t("lock unlock", () => {
    d();
  }), t("click", (m, g) => {
    const x = g.target, _ = vt(r.pagination.el);
    if (r.params.pagination.el && r.params.pagination.hideOnClick && _ && _.length > 0 && !x.classList.contains(r.params.pagination.bulletClass)) {
      if (r.navigation && (r.navigation.nextEl && x === r.navigation.nextEl || r.navigation.prevEl && x === r.navigation.prevEl))
        return;
      const y = _[0].classList.contains(r.params.pagination.hiddenClass);
      i(y === !0 ? "paginationShow" : "paginationHide"), _.forEach((k) => k.classList.toggle(r.params.pagination.hiddenClass));
    }
  });
  const v = () => {
    r.el.classList.remove(r.params.pagination.paginationDisabledClass);
    let {
      el: m
    } = r.pagination;
    m && (m = vt(m), m.forEach((g) => g.classList.remove(r.params.pagination.paginationDisabledClass))), f(), h(), d();
  }, w = () => {
    r.el.classList.add(r.params.pagination.paginationDisabledClass);
    let {
      el: m
    } = r.pagination;
    m && (m = vt(m), m.forEach((g) => g.classList.add(r.params.pagination.paginationDisabledClass))), b();
  };
  Object.assign(r.pagination, {
    enable: v,
    disable: w,
    render: h,
    update: d,
    init: f,
    destroy: b
  });
}
const T1 = () => {
  const r = Y(null), e = Y(null), t = Vu, i = Y(null), [n, s] = R(0), [o, a] = R(!0), {
    t: l
  } = te(), u = {
    clickable: !0,
    renderBullet: function(f, b) {
      return '<span class="' + b + ' "></span>';
    }
  }, c = () => {
    Q.to(r.current, {
      opacity: 1,
      duration: 0.25,
      zIndex: 2e3,
      pointerEvents: "all",
      display: "block"
    }), Q.to(e.current, {
      opacity: 1,
      duration: 0.5,
      pointerEvents: "all"
    });
  }, d = () => {
    Q.to(r.current, {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
      display: "none"
    }), Q.to(e.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
      onComplete: () => a(!1)
    });
  }, h = () => {
    d(), bn.value = !1;
  };
  return U(() => {
    o ? c() : d();
  }, [o]), p("div", {
    className: "onboarding-wrapper",
    ref: r,
    children: [p("style", {
      type: "text/css",
      children: Xf
    }), p("div", {
      className: "onboarding-background"
    }), p("div", {
      className: "onboarding-modal",
      ref: e,
      children: [p("div", {
        className: "back-button",
        onClick: () => n > 0 ? i.current.slidePrev() : re("/workshop"),
        children: p(tt, {})
      }), p("h2", {
        className: "heading relative flex items-center justify-center w-full h-10 my-5 sm:mt-8 text-xl",
        children: "Virtual Workshop - Quick Guide"
      }), p(sc, {
        style: {
          padding: "0 30px"
        },
        spaceBetween: 30,
        onSwiper: (f) => i.current = f,
        pagination: u,
        modules: [L1],
        onSlideChange: (f) => s(f.activeIndex),
        children: t.map((f, b) => p(oc, {
          children: p(eh, {
            title: f.title,
            src: f.image,
            content: f.content,
            number: f.number
          })
        }, b))
      }), p("div", {
        className: "button-wrapper",
        children: p(pt, {
          onClick: () => n < t.length - 1 ? i.current.slideNext() : h(),
          text: n < t.length - 1 ? l("onboarding_next") : l("onboarding_explore"),
          active: !0,
          primary: !0
        })
      })]
    })]
  });
};
function F1() {
  const {
    t: r
  } = te(), {
    currentBike: e
  } = Ie(), [t, i] = R(ke.value), s = window.BikeMatrix.getConfig(), [o, a] = R(!1), [l, u] = R(""), [c, d] = R(!1);
  U(() => {
    ot.value.back = "/";
  }, []);
  const [h, f] = R(!1), [b, v] = R(!1), [w, m] = R(!1), [g, x] = R(""), [_, y] = R(""), [k, A] = R(!1), C = new Se(s.apiUrl, s.apiKey, s.apiToken, s.isShopify), [D, S] = R(!1), B = async () => {
    if (!t)
      return;
    const F = await C.getBikeBom(t.bike_Key);
    if (!F.success) {
      u(F.error), s.logLevel === "verbose" && console.error(F.logError);
      return;
    }
    ke.value = Or(F), f(!1), v(!0), re("/");
  }, E = (F) => {
    y(F), f(!1);
  }, T = async () => {
    if (f(!0), A(!0), t != null && t.owner_Email_Address) {
      const F = await C.saveCustomBike(e.key, t.owner_Email_Address);
      if (F.success)
        B();
      else {
        s.logLevel === "verbose" && console.error(F.logError), E(F.error);
        return;
      }
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(g)) {
      const F = await C.saveCustomBike(e.key, g);
      if (F.success)
        B();
      else {
        s.logLevel === "verbose" && console.error(F.logError), E(F.error);
        return;
      }
    }
  };
  U(() => {
    k && _ && y("");
  }, [g]);
  const M = async () => {
    a(!0);
    const F = await C.getBikeBom(e.key);
    if (!F.success) {
      u(F.error), s.logLevel === "verbose" && console.error(F.logError), a(!1);
      return;
    }
    const $ = Or(F.data);
    i($), ke.value = $, a(!1);
  };
  return U(() => {
    ke.value || M();
  }, []), U(() => {
    d(!!(D && g));
  }, [D, g]), p(j, {
    children: [bn.value && p(T1, {}), p("div", {
      className: "mb-4",
      children: [e ? p(rt, {
        bike: e,
        selected: !0,
        settings: !0,
        compact: !0
      }) : p(Ur, {}), p("div", {
        class: "mt-4 mb-8",
        children: p($u, {
          categorisedBOM: t,
          bikeSave: b,
          refreshBomb: M,
          loading: o,
          bomError: l
        })
      })]
    }), p(pt, {
      text: r("virtualworkshop_save_btn"),
      onClick: t != null && t.owner_Email_Address ? () => T() : () => m(!0),
      primary: !0,
      loading: !w && h
    }), p(Bt, {}), p(so, {
      isOpen: w,
      toggleModal: () => m(!1),
      contentElement: p(Vo, {
        i18nKey: "virtualworkshop_save_text",
        components: {
          privacyLink: p("a", {
            href: "https://www.bikematrix.io/privacy-policy",
            target: "_blank",
            rel: "noopener noreferrer"
          })
        }
      }),
      title: r("virtualworkshop_save_title"),
      onConfirm: T,
      onCancel: () => m(!1),
      loading: h,
      confirmDisabled: !c,
      children: [p("div", {
        class: "mt-8",
        children: p(Ru, {
          value: g,
          setValue: (F) => x(F),
          placeholder: r("virtualworkshop_settings_email"),
          type: "email",
          error: _,
          submitInput: T
        })
      }), p("div", {
        className: "mt-1 flex gap-2 items-start",
        children: [p("input", {
          type: "checkbox",
          onClick: () => S(!D),
          id: "privacyPolicy",
          className: "bike_matrix-checkbox"
        }), p("label", {
          for: "privacyPolicy",
          children: [" ", p(Vo, {
            i18nKey: "virtualworkshop_save_accept_text",
            components: {
              privacyLink: p("a", {
                href: "https://www.bikematrix.io/privacy-policy",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  textDecoration: "underline"
                }
              })
            }
          })]
        }), p("br", {})]
      }), p(it, {
        messages: l
      })]
    })]
  });
}
function N1() {
  const {
    t: r
  } = te(), e = mn.value, i = window.BikeMatrix.getConfig(), [n, s] = R(!1), [o, a] = R(null), l = ke.value, {
    currentBike: u,
    setCurrentBike: c
  } = Ie(), d = new Se(i.apiUrl, i.apiKey, i.apiToken, i.isShopify), [h, f] = R(!1);
  u.isShared && re("/");
  const b = async () => {
    f(!0), ao();
    const v = await d.removeComponent(u.key, e.part.product_category_id, lo[e.type.split(" ").join("_")]);
    if (v.success)
      l[e.category.split(" ").join("_")][e.type.split(" ").join("_")] = {
        ...l[e.category.split(" ").join("_")][e.type.split(" ").join("_")],
        id: null,
        name: null,
        unsaved_changes: !0
      }, ke.value = l, c({
        ...u
      }), f(!1), re("/bom");
    else {
      f(!1), s(!1), a(v.error + " - " + e.part.name), i.logLevel === "verbose" && console.error(v.logError);
      return;
    }
  };
  return p(j, {
    children: [p("div", {
      className: "mb-4",
      children: [u ? p(rt, {
        bike: u,
        selected: !0,
        settings: !0
      }) : p(Ur, {}), p("div", {
        className: "part-wrapper mt-8 mb-8 relative",
        children: [p(Dt, {
          subheader: !0,
          text: e.part.name
        }), p("p", {
          className: "absolute text-red-500 text-sm left-1/2 transform -translate-x-1/2",
          children: o
        })]
      })]
    }), p(pt, {
      text: r("virtualworkshop_swap_btn"),
      onClick: () => re("/update"),
      primary: !0
    }), p(pt, {
      text: r("virtualworkshop_remove_btn"),
      onClick: () => s(!0)
    }), p(Bt, {}), n && p(so, {
      isOpen: n,
      toggleModal: () => s(!1),
      content: r("virtualworkshop_remove_subtitle"),
      title: r("virtualworkshop_are_you_sure"),
      onConfirm: b,
      onCancel: () => s(!1),
      loading: h
    })]
  });
}
const M1 = `.search-wrapper{position:relative;margin-bottom:12rem}@media (max-width: 767px){.search-wrapper{margin-bottom:22rem}}.search_bar-wrapper{border:1px solid rgb(209 213 219);border-radius:12px;display:flex;align-items:center;z-index:2;width:100%;background-color:#fff;position:absolute;transition:all ease-in-out .5s;padding:12px}.input_icon-wrapper{display:flex;align-items:center;gap:1rem;width:100%}.input_icon-wrapper input{width:100%}.svg-wrapper{cursor:pointer}.compatibility-wrapper{height:110px;position:absolute;width:100%;border-radius:12px;overflow:hidden;top:0}.compatibility{position:absolute;width:100%;top:-75px;height:71px;border:1px solid;border-bottom-right-radius:12px;border-bottom-left-radius:12px}.compatibility-contents{position:relative;height:54px;display:flex;align-items:center;border-bottom-left-radius:12px;margin-top:16px;overflow:hidden}@media (max-width: 767px){.compatibility-contents p{font-size:16px}}.polygon{position:absolute}.bikon{margin-left:.75rem}.compatibility-background{height:108px;position:absolute;z-index:-1;border-bottom-left-radius:12px;left:-2px;top:-38px;width:59px}.compatibility-warning_button{margin-left:auto;border:1px solid rgb(245 158 11);color:#451a03;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 32px;height:75%;margin-right:5px;margin-bottom:1px;font-weight:600}.results-wrapper{top:40px;height:0;overflow:hidden;position:absolute;width:100%;border:1px solid black;border-bottom-left-radius:12px;border-bottom-right-radius:12px;max-height:190px;overflow-y:scroll;background-color:#fff;z-index:1}.results{width:100%;padding:12px;padding-top:2rem;display:flex;flex-direction:column;gap:.5rem}.result{background-color:#fff;transition:ease-in-out .2s;border-radius:8px;padding-left:10px;padding-top:5px;padding-bottom:5px;cursor:pointer}.result:hover{background-color:#d9d9d966}.notes-wrapper{display:flex;flex-direction:column;gap:.5rem;padding-top:1rem}
`, P1 = (r) => /* @__PURE__ */ V("svg", { width: 23, height: 23, viewBox: "0 0 23 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M0 9.26199C0 7.98077 0.242061 6.78221 0.726184 5.66631C1.21031 4.5504 1.87806 3.57089 2.72945 2.72776C3.58919 1.87637 4.58247 1.21096 5.70931 0.731536C6.83615 0.243845 8.04228 0 9.32771 0C10.6215 0 11.8318 0.243845 12.9586 0.731536C14.0855 1.21096 15.0788 1.87637 15.9385 2.72776C16.7982 3.57089 17.4701 4.5504 17.9543 5.66631C18.4384 6.78221 18.6805 7.98077 18.6805 9.26199C18.6805 10.3283 18.5052 11.345 18.1546 12.3121C17.804 13.271 17.3199 14.1389 16.7022 14.9159L22.6369 20.8178C22.7538 20.9418 22.8414 21.0782 22.8998 21.227C22.9666 21.384 23 21.5452 23 21.7105C23 21.9585 22.9457 22.1775 22.8372 22.3677C22.7287 22.566 22.5785 22.719 22.3865 22.8264C22.1945 22.9421 21.9733 23 21.7229 23C21.556 23 21.389 22.9669 21.2221 22.9008C21.0635 22.8429 20.9216 22.7562 20.7964 22.6404L14.8367 16.7137C14.0604 17.2758 13.209 17.7181 12.2825 18.0404C11.356 18.3545 10.3711 18.5116 9.32771 18.5116C8.04228 18.5116 6.83615 18.2719 5.70931 17.7925C4.58247 17.313 3.58919 16.6476 2.72945 15.7962C1.87806 14.9448 1.21031 13.9612 0.726184 12.8453C0.242061 11.7294 0 10.535 0 9.26199ZM1.81546 9.26199C1.81546 10.287 2.01161 11.25 2.40392 12.1509C2.79623 13.0437 3.3346 13.8331 4.01905 14.5191C4.71185 15.1969 5.50898 15.7301 6.41045 16.1186C7.32027 16.4988 8.29269 16.6889 9.32771 16.6889C10.3711 16.6889 11.3435 16.4988 12.245 16.1186C13.1548 15.7301 13.9519 15.1969 14.6364 14.5191C15.3292 13.8331 15.8675 13.0437 16.2515 12.1509C16.6438 11.25 16.84 10.287 16.84 9.26199C16.84 8.22875 16.6438 7.26577 16.2515 6.37305C15.8675 5.47206 15.3292 4.68266 14.6364 4.00485C13.9519 3.31878 13.1548 2.78562 12.245 2.40539C11.3435 2.01689 10.3711 1.82264 9.32771 1.82264C8.29269 1.82264 7.32027 2.01689 6.41045 2.40539C5.50898 2.78562 4.71185 3.31878 4.01905 4.00485C3.3346 4.68266 2.79623 5.47206 2.40392 6.37305C2.01161 7.26577 1.81546 8.22875 1.81546 9.26199Z", fill: "black" })), po = (r) => /* @__PURE__ */ V("svg", { width: 57, height: 40, viewBox: "0 0 57 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4343 1.80079C44.6538 2.54246 44.2342 3.3224 43.4943 3.54788L37.9829 5.22744L42.5437 17.3218C42.7699 17.2662 42.9979 17.2168 43.2272 17.1749C43.4564 17.1337 43.687 17.0993 43.9187 17.0724C44.1498 17.0449 44.3822 17.0256 44.6151 17.0131C44.8475 17.0012 45.0804 16.9962 45.3134 16.9987C45.547 17.0018 45.7794 17.0118 46.0117 17.0293C46.2441 17.0468 46.4758 17.0712 46.7069 17.1037C46.938 17.1356 47.1673 17.1756 47.396 17.2224C47.6246 17.2693 47.8508 17.3231 48.0764 17.3843C48.3013 17.4462 48.5244 17.5143 48.7451 17.5899C48.9657 17.6656 49.1839 17.7481 49.4002 17.8374C49.6159 17.9268 49.8286 18.0231 50.0381 18.1262C50.2477 18.2293 50.4541 18.3387 50.6575 18.4549C50.8603 18.5712 51.0594 18.6937 51.2547 18.8224C51.4501 18.9512 51.6412 19.0862 51.8285 19.2274C52.0153 19.3687 52.1977 19.5156 52.3758 19.6681C52.5539 19.8206 52.7265 19.9787 52.8948 20.1424C53.063 20.3062 53.2257 20.4749 53.3835 20.6493C53.5413 20.8237 53.6929 21.0024 53.8396 21.1862C53.9863 21.3699 54.1268 21.5581 54.2618 21.7512C54.3967 21.9437 54.5255 22.1406 54.6482 22.3418C54.7708 22.5424 54.8867 22.7474 54.997 22.9556C55.1067 23.1637 55.2103 23.3756 55.307 23.5906C55.4038 23.8056 55.4944 24.0237 55.5776 24.2443C55.6608 24.4649 55.7372 24.6881 55.8069 24.9137C55.8765 25.1393 55.9388 25.3668 55.9942 25.5962C56.0497 25.8262 56.0978 26.0568 56.1391 26.2899C56.1804 26.5224 56.2136 26.7562 56.2408 26.9912C56.2673 27.2256 56.2864 27.4612 56.2987 27.6974C56.3104 27.9331 56.3153 28.1693 56.3123 28.4056C56.3098 28.6418 56.2999 28.8781 56.2827 29.1137C56.2654 29.3493 56.2408 29.5843 56.2087 29.8187C56.1773 30.0524 56.1378 30.2856 56.0916 30.5174C56.0454 30.7487 55.9924 30.9787 55.932 31.2068C55.871 31.4356 55.8038 31.6612 55.7292 31.8856C55.6546 32.1093 55.5733 32.3306 55.4852 32.5493C55.3964 32.7681 55.3015 32.9837 55.2004 33.1968C55.0987 33.4093 54.9902 33.6187 54.8756 33.8243C54.761 34.0299 54.6402 34.2318 54.5132 34.4299C54.3863 34.6281 54.2531 34.8224 54.1138 35.0118C53.9746 35.2012 53.8297 35.3862 53.6793 35.5668C53.529 35.7474 53.3724 35.9224 53.2109 36.0931C53.0495 36.2637 52.8831 36.4287 52.7117 36.5887C52.5398 36.7481 52.3635 36.9024 52.1817 37.0512C52.0005 37.1993 51.815 37.3424 51.6251 37.4787C51.4347 37.6156 51.2406 37.7462 51.0427 37.8706C50.8443 37.9949 50.6427 38.1131 50.4369 38.2243C50.2316 38.3356 50.0227 38.4406 49.8107 38.5387C49.5987 38.6368 49.3836 38.7287 49.166 38.8131C48.9485 38.8974 48.7284 38.9749 48.506 39.0456C48.2835 39.1156 48.0591 39.1793 47.8323 39.2349C47.6061 39.2912 47.3781 39.3406 47.1488 39.3818C46.9195 39.4237 46.689 39.4581 46.4573 39.4849C46.2262 39.5118 45.9938 39.5312 45.7609 39.5431C45.5279 39.5556 45.2955 39.5599 45.062 39.5574C44.829 39.5549 44.5966 39.5449 44.3643 39.5268C44.1313 39.5093 43.9002 39.4843 43.6691 39.4524C43.438 39.4199 43.2087 39.3806 42.98 39.3337C42.7514 39.2862 42.5252 39.2324 42.2996 39.1706C42.0747 39.1093 41.8522 39.0412 41.6309 38.9656C41.4103 38.8899 41.1921 38.8074 40.9764 38.7174C40.7607 38.6281 40.548 38.5318 40.3379 38.4287C40.1283 38.3256 39.9219 38.2162 39.7191 38.0999C39.5163 37.9837 39.3172 37.8606 39.1219 37.7318C38.9265 37.6031 38.7354 37.4681 38.5481 37.3268C38.3613 37.1856 38.1789 37.0387 38.0008 36.8862C37.8233 36.7331 37.6501 36.5749 37.4825 36.4112C37.3142 36.2474 37.1515 36.0787 36.9937 35.9043C36.8359 35.7299 36.6843 35.5512 36.5376 35.3674C36.391 35.1837 36.2504 34.9949 36.1161 34.8024C35.9811 34.6093 35.8523 34.4124 35.7296 34.2118C35.607 34.0106 35.4911 33.8062 35.3808 33.5974C35.2711 33.3893 35.1676 33.1774 35.0708 32.9624C34.974 32.7474 34.8841 32.5293 34.8009 32.3087C34.7177 32.0881 34.6412 31.8649 34.5716 31.6393C34.5026 31.4137 34.4397 31.1862 34.3848 30.9562C34.3294 30.7268 34.2813 30.4956 34.24 30.2631C34.1993 30.0306 34.1654 29.7968 34.1389 29.5618C34.1124 29.3268 34.0933 29.0912 34.081 28.8556C34.0693 28.6193 34.0644 28.3831 34.0674 28.1468C34.0699 27.9106 34.0798 27.6743 34.0976 27.4387C34.1149 27.2031 34.1395 26.9681 34.171 26.7343C34.203 26.4999 34.2425 26.2668 34.2887 26.0356C34.3349 25.8037 34.3885 25.5737 34.4489 25.3456C34.5093 25.1174 34.5771 24.8912 34.6517 24.6674C34.7263 24.4437 34.8076 24.2224 34.8964 24.0037C34.9845 23.7849 35.0794 23.5693 35.1811 23.3562C35.2828 23.1437 35.3913 22.9343 35.5059 22.7287C35.6206 22.5231 35.7414 22.3212 35.8683 22.1231C35.9959 21.9249 36.129 21.7312 36.2683 21.5418C36.407 21.3518 36.5524 21.1668 36.7028 20.9868C36.8532 20.8062 37.0097 20.6312 37.1712 20.4606C37.3327 20.2906 37.4991 20.1249 37.6711 19.9656C37.843 19.8056 38.0193 19.6518 38.2005 19.5031C38.3817 19.3543 38.5678 19.2118 38.7576 19.0756C38.9481 18.9387 39.1422 18.8081 39.3407 18.6837C39.5385 18.5593 39.7407 18.4418 39.9459 18.3306L37.6544 12.2531L29.7544 28.8937C29.6977 29.0137 29.625 29.1224 29.5381 29.2218C29.4506 29.3206 29.3514 29.4049 29.2404 29.4756C29.1295 29.5462 29.0112 29.5993 28.8854 29.6362C28.7597 29.6724 28.6309 29.6906 28.5002 29.6906H22.8523C22.8085 30.0424 22.7481 30.3912 22.6717 30.7368C22.5947 31.0824 22.5022 31.4243 22.3943 31.7612C22.2859 32.0981 22.1626 32.4293 22.0233 32.7543C21.884 33.0793 21.7306 33.3974 21.5617 33.7074C21.3934 34.0181 21.211 34.3199 21.0144 34.6131C20.8178 34.9062 20.6076 35.1893 20.3845 35.4618C20.162 35.7349 19.9266 35.9968 19.6795 36.2474C19.4323 36.4974 19.1741 36.7362 18.9047 36.9618C18.6354 37.1874 18.3562 37.3999 18.0672 37.5993C17.7775 37.7981 17.4798 37.9831 17.1735 38.1537C16.8672 38.3243 16.5541 38.4799 16.233 38.6212C15.9125 38.7618 15.5859 38.8868 15.2531 38.9962C14.9209 39.1056 14.5843 39.1993 14.2429 39.2762C13.9021 39.3537 13.5582 39.4143 13.2112 39.4593C12.8648 39.5037 12.5166 39.5312 12.1671 39.5424C11.8177 39.5537 11.4689 39.5481 11.12 39.5262C10.7712 39.5037 10.4242 39.4649 10.0791 39.4093C9.73392 39.3543 9.39186 39.2824 9.0535 39.1943C8.71452 39.1062 8.38109 39.0024 8.05198 38.8824C7.72348 38.7624 7.40053 38.6274 7.08436 38.4762C6.76819 38.3256 6.45941 38.1599 6.15865 37.9799C5.85788 37.7999 5.56575 37.6056 5.28286 37.3974C4.99997 37.1893 4.72755 36.9681 4.465 36.7337C4.20245 36.4993 3.95161 36.2531 3.71248 35.9949C3.47273 35.7368 3.24592 35.4681 3.03144 35.1881C2.81696 34.9081 2.61604 34.6187 2.42868 34.3193C2.24132 34.0206 2.06814 33.7131 1.90913 33.3974C1.75011 33.0818 1.6059 32.7593 1.47709 32.4299C1.34827 32.1006 1.23487 31.7656 1.13688 31.4256C1.03888 31.0849 0.956912 30.7412 0.890966 30.3931C0.825636 30.0449 0.775714 29.6943 0.742433 29.3412C0.709152 28.9887 0.692511 28.6349 0.691895 28.2806C0.691895 27.9256 0.707919 27.5718 0.740584 27.2187C0.773249 26.8649 0.822554 26.5143 0.887884 26.1656C0.953214 25.8168 1.03457 25.4724 1.13195 25.1312C1.22933 24.7906 1.34211 24.4549 1.47092 24.1249C1.59973 23.7949 1.74334 23.4718 1.90173 23.1556C2.06074 22.8393 2.23393 22.5318 2.42129 22.2318C2.60865 21.9324 2.80957 21.6424 3.02343 21.3618C3.23791 21.0812 3.46472 20.8118 3.70446 20.5531C3.94421 20.2943 4.19505 20.0474 4.45761 19.8124C4.71954 19.5781 4.99257 19.3562 5.27546 19.1474C5.55835 18.9393 5.85049 18.7443 6.15187 18.5637C6.45325 18.3831 6.76202 18.2174 7.07881 18.0662C7.39498 17.9149 7.71794 17.7793 8.04705 17.6593C8.37678 17.5387 8.71083 17.4349 9.0498 17.3462C9.38878 17.2581 9.73083 17.1862 10.0766 17.1312C10.4217 17.0756 10.7693 17.0368 11.1188 17.0143C11.4676 16.9924 11.8177 16.9868 12.1671 16.9981C12.5166 17.0093 12.8654 17.0368 13.2124 17.0818C13.5594 17.1262 13.9039 17.1874 14.2454 17.2649C14.5868 17.3424 14.9239 17.4362 15.2568 17.5456C15.5896 17.6556 15.9162 17.7812 16.2373 17.9218C16.5584 18.0631 16.8721 18.2193 17.1791 18.3906C17.4854 18.5612 17.7837 18.7468 18.0727 18.9462C18.3618 19.1462 18.6416 19.3593 18.9109 19.5856C19.1802 19.8118 19.4385 20.0506 19.6862 20.3018C19.9334 20.5524 20.1682 20.8149 20.3913 21.0887C20.6138 21.3624 20.824 21.6456 21.02 21.9393C21.2166 22.2331 21.399 22.5356 21.5672 22.8468C21.7355 23.1574 21.889 23.4762 22.0276 23.8018C22.1663 24.1274 22.2896 24.4593 22.3974 24.7968C22.5053 25.1343 22.5971 25.4768 22.6729 25.8231C22.7493 26.1693 22.8091 26.5187 22.8523 26.8706H26.3283L19.5433 7.60432C19.489 7.45119 19.4625 7.29307 19.4625 7.13057H17.3769C17.2857 7.13057 17.1951 7.12182 17.1057 7.10369C17.0163 7.08557 16.9294 7.05869 16.845 7.02307C16.7606 6.98807 16.6805 6.94432 16.6046 6.89307C16.5282 6.84182 16.4586 6.78307 16.3939 6.71744C16.3292 6.65244 16.2712 6.58119 16.2207 6.50369C16.1701 6.42682 16.127 6.34557 16.0925 6.25994C16.0574 6.17494 16.0309 6.08682 16.013 5.99557C15.9951 5.90494 15.9865 5.81307 15.9865 5.72057C15.9865 5.62807 15.9951 5.53619 16.013 5.44557C16.0309 5.35494 16.0574 5.26682 16.0925 5.18119C16.127 5.09557 16.1701 5.01432 16.2207 4.93744C16.2712 4.86057 16.3292 4.78932 16.3939 4.72369C16.4586 4.65807 16.5282 4.59994 16.6046 4.54807C16.6805 4.49682 16.7606 4.45369 16.845 4.41807C16.9294 4.38244 17.0163 4.35557 17.1057 4.33744C17.1951 4.31994 17.2857 4.31057 17.3769 4.31057H23.6338C23.725 4.31057 23.8156 4.31994 23.9049 4.33744C23.9943 4.35557 24.0812 4.38244 24.1657 4.41807C24.2501 4.45369 24.3302 4.49682 24.406 4.54807C24.4824 4.59994 24.5521 4.65807 24.6168 4.72369C24.6815 4.78932 24.7388 4.86057 24.79 4.93744C24.8405 5.01432 24.8837 5.09557 24.9182 5.18119C24.9533 5.26682 24.9798 5.35494 24.9977 5.44557C25.0156 5.53619 25.0242 5.62807 25.0242 5.72057C25.0242 5.81307 25.0156 5.90494 24.9977 5.99557C24.9798 6.08682 24.9533 6.17494 24.9182 6.25994C24.8837 6.34557 24.8405 6.42682 24.79 6.50369C24.7388 6.58119 24.6815 6.65244 24.6168 6.71744C24.5521 6.78307 24.4824 6.84182 24.406 6.89307C24.3302 6.94432 24.2501 6.98807 24.1657 7.02307C24.0812 7.05869 23.9943 7.08557 23.9049 7.10369C23.8156 7.12182 23.725 7.13057 23.6338 7.13057H22.3296L24.8904 14.4018L36.1907 8.37119L34.8489 4.81432C34.8144 4.72369 34.7898 4.63057 34.775 4.53432C34.7596 4.43869 34.754 4.34244 34.7589 4.24557C34.7633 4.14869 34.7774 4.05307 34.8009 3.95932C34.8249 3.86557 34.8576 3.77494 34.9001 3.68807C34.942 3.60119 34.9925 3.51932 35.0517 3.44307C35.1102 3.36619 35.1762 3.29682 35.2495 3.23432C35.3223 3.17182 35.4012 3.11744 35.485 3.07119C35.5688 3.02494 35.6569 2.98744 35.7488 2.95994L42.6737 0.853036C43.4219 0.625398 44.2123 1.05089 44.4343 1.80079ZM25.8346 17.0849L28.5766 24.8687L34.4582 12.4831L25.8346 17.0849ZM43.8866 28.7843L40.9486 20.9912C40.8001 21.0799 40.6547 21.1731 40.5117 21.2712C40.3693 21.3693 40.2294 21.4712 40.0932 21.5781C39.9564 21.6849 39.8232 21.7956 39.6938 21.9112C39.5638 22.0262 39.438 22.1449 39.3154 22.2681C39.1934 22.3912 39.0744 22.5181 38.9598 22.6487C38.8451 22.7787 38.7348 22.9131 38.6282 23.0506C38.5216 23.1874 38.4193 23.3287 38.3213 23.4724C38.2239 23.6162 38.1302 23.7631 38.0415 23.9124C37.9521 24.0624 37.8683 24.2149 37.7888 24.3699C37.7087 24.5249 37.6341 24.6824 37.5638 24.8418C37.4942 25.0018 37.4288 25.1631 37.3691 25.3274C37.3087 25.4912 37.2538 25.6568 37.2039 25.8237C37.154 25.9912 37.109 26.1599 37.0695 26.3299C37.0295 26.4999 36.995 26.6712 36.966 26.8431C36.937 27.0156 36.913 27.1887 36.8945 27.3624C36.8754 27.5362 36.8624 27.7106 36.8544 27.8849C36.8464 28.0593 36.8433 28.2343 36.8464 28.4087C36.8489 28.5837 36.8569 28.7581 36.8705 28.9324C36.8834 29.1068 36.9025 29.2806 36.9265 29.4537C36.95 29.6268 36.9795 29.7987 37.0141 29.9699C37.0486 30.1412 37.088 30.3112 37.133 30.4799C37.178 30.6487 37.2279 30.8162 37.2828 30.9818C37.3382 31.1474 37.398 31.3112 37.4634 31.4731C37.5281 31.6349 37.5983 31.7943 37.6729 31.9518C37.7481 32.1093 37.8276 32.2643 37.912 32.4168C37.9965 32.5687 38.0852 32.7187 38.1789 32.8656C38.272 33.0124 38.37 33.1562 38.4723 33.2968C38.5746 33.4374 38.6812 33.5749 38.7915 33.7087C38.9025 33.8431 39.0171 33.9731 39.1354 34.0999C39.2544 34.2268 39.3764 34.3499 39.5028 34.4687C39.6291 34.5881 39.7585 34.7031 39.8917 34.8143C40.0248 34.9249 40.1616 35.0318 40.3009 35.1343C40.4408 35.2362 40.5832 35.3343 40.7292 35.4274C40.8747 35.5212 41.0232 35.6099 41.1742 35.6937C41.3252 35.7781 41.4787 35.8574 41.6346 35.9318C41.7905 36.0062 41.9489 36.0756 42.1092 36.1399C42.2694 36.2049 42.4315 36.2643 42.5948 36.3187C42.7588 36.3724 42.9239 36.4218 43.091 36.4656C43.258 36.5099 43.4256 36.5481 43.5951 36.5818C43.764 36.6149 43.9341 36.6431 44.1054 36.6656C44.2761 36.6887 44.4475 36.7056 44.6194 36.7174C44.7914 36.7293 44.9633 36.7362 45.1359 36.7374C45.3085 36.7381 45.4804 36.7337 45.6524 36.7243C45.825 36.7143 45.9963 36.6993 46.1676 36.6787C46.339 36.6581 46.5091 36.6324 46.6786 36.6012C46.8481 36.5699 47.0169 36.5337 47.1839 36.4918C47.3516 36.4499 47.5174 36.4024 47.6819 36.3506C47.8465 36.2981 48.0092 36.2406 48.1701 36.1781C48.3309 36.1156 48.4899 36.0487 48.6465 35.9762C48.8036 35.9037 48.9577 35.8262 49.1099 35.7437C49.2622 35.6618 49.4119 35.5749 49.5586 35.4831C49.7053 35.3918 49.8489 35.2956 49.9901 35.1949C50.1312 35.0943 50.2686 34.9893 50.4036 34.8799C50.538 34.7712 50.6686 34.6574 50.7968 34.5399C50.9244 34.4224 51.0483 34.3012 51.1684 34.1756C51.2886 34.0506 51.4045 33.9218 51.5167 33.7887C51.6288 33.6562 51.7373 33.5206 51.8415 33.3812C51.945 33.2418 52.0449 33.0993 52.1404 32.9531C52.2353 32.8074 52.3259 32.6593 52.4122 32.5081C52.4985 32.3562 52.5798 32.2024 52.6569 32.0462C52.7333 31.8893 52.8054 31.7306 52.8726 31.5699C52.9398 31.4087 53.002 31.2456 53.0587 31.0812C53.116 30.9162 53.1678 30.7493 53.2146 30.5812C53.2621 30.4131 53.3034 30.2437 53.3404 30.0731C53.3767 29.9018 53.4082 29.7299 53.434 29.5574C53.4605 29.3849 53.4809 29.2112 53.4963 29.0374C53.5123 28.8631 53.5222 28.6887 53.5271 28.5137C53.532 28.3393 53.5314 28.1643 53.5253 27.9899C53.5197 27.8149 53.5086 27.6406 53.492 27.4668C53.4753 27.2931 53.4538 27.1193 53.4266 26.9468C53.3995 26.7743 53.3669 26.6031 53.3293 26.4324C53.2917 26.2618 53.2491 26.0924 53.2011 25.9243C53.153 25.7568 53.1 25.5906 53.0421 25.4256C52.9841 25.2612 52.9206 25.0987 52.8529 24.9381C52.7851 24.7774 52.7117 24.6193 52.6341 24.4631C52.5564 24.3074 52.4744 24.1537 52.3869 24.0031C52.3 23.8518 52.2082 23.7043 52.112 23.5593C52.0159 23.4137 51.9154 23.2718 51.8107 23.1331C51.7059 22.9943 51.5974 22.8593 51.484 22.7274C51.3712 22.5956 51.2541 22.4668 51.1333 22.3424C51.0119 22.2181 50.8874 22.0974 50.7592 21.9806C50.631 21.8637 50.4991 21.7512 50.3642 21.6431C50.2292 21.5343 50.0905 21.4306 49.9494 21.3306C49.8076 21.2306 49.6634 21.1356 49.5155 21.0449C49.3682 20.9543 49.2184 20.8681 49.0656 20.7868C48.9133 20.7056 48.758 20.6293 48.6009 20.5581C48.4437 20.4862 48.2847 20.4199 48.1232 20.3581C47.9617 20.2968 47.7984 20.2406 47.6339 20.1893C47.4693 20.1381 47.3029 20.0918 47.1353 20.0512C46.9676 20.0106 46.7994 19.9749 46.6293 19.9443C46.4598 19.9143 46.2891 19.8893 46.1177 19.8699C45.9464 19.8506 45.775 19.8362 45.6025 19.8281C45.4305 19.8193 45.2579 19.8156 45.086 19.8181C44.9134 19.8199 44.7415 19.8274 44.5695 19.8406C44.3976 19.8537 44.2262 19.8718 44.0555 19.8956C43.8848 19.9193 43.7147 19.9487 43.5458 19.9831L46.4838 27.7774C46.5152 27.8637 46.5374 27.9518 46.5516 28.0424C46.5658 28.1331 46.5713 28.2243 46.5676 28.3162C46.5645 28.4074 46.5522 28.4981 46.5313 28.5874C46.5103 28.6768 46.4813 28.7631 46.4437 28.8468C46.4062 28.9299 46.3612 29.0093 46.3082 29.0837C46.2558 29.1581 46.1966 29.2268 46.1307 29.2899C46.0647 29.3524 45.9932 29.4087 45.9168 29.4574C45.8398 29.5056 45.759 29.5468 45.6746 29.5793C45.5901 29.6118 45.5032 29.6362 45.4145 29.6518C45.3251 29.6674 45.2351 29.6743 45.1445 29.6718C45.0546 29.6699 44.9652 29.6587 44.8764 29.6387C44.7883 29.6187 44.7026 29.5906 44.6201 29.5537C44.5369 29.5168 44.4586 29.4718 44.384 29.4199C44.3101 29.3674 44.241 29.3081 44.1782 29.2418C44.1153 29.1762 44.0598 29.1043 44.0105 29.0274C43.9612 28.9506 43.9199 28.8693 43.8866 28.7843ZM20.0425 26.8706H11.8152C11.724 26.8706 11.6334 26.8799 11.544 26.8974C11.4547 26.9156 11.3678 26.9424 11.2833 26.9781C11.1989 27.0137 11.1188 27.0568 11.043 27.1081C10.9666 27.1599 10.8969 27.2181 10.8322 27.2837C10.7675 27.3493 10.7095 27.4206 10.659 27.4974C10.6085 27.5743 10.5653 27.6556 10.5308 27.7412C10.4957 27.8268 10.4692 27.9149 10.4513 28.0056C10.4334 28.0962 10.4248 28.1881 10.4248 28.2806C10.4248 28.3731 10.4334 28.4649 10.4513 28.5556C10.4692 28.6468 10.4957 28.7349 10.5308 28.8199C10.5653 28.9056 10.6085 28.9868 10.659 29.0637C10.7095 29.1412 10.7675 29.2124 10.8322 29.2774C10.8969 29.3431 10.9666 29.4018 11.043 29.4531C11.1188 29.5043 11.1989 29.5481 11.2833 29.5831C11.3678 29.6187 11.4547 29.6456 11.544 29.6637C11.6334 29.6818 11.724 29.6906 11.8152 29.6906H20.0425C19.9987 29.9487 19.9432 30.2043 19.8761 30.4568C19.8089 30.7099 19.73 30.9587 19.64 31.2043C19.55 31.4499 19.449 31.6906 19.3374 31.9262C19.2252 32.1624 19.1026 32.3924 18.9695 32.6168C18.8363 32.8412 18.6934 33.0587 18.5405 33.2699C18.3877 33.4806 18.2249 33.6837 18.0536 33.8799C17.8817 34.0756 17.7017 34.2624 17.5131 34.4412C17.3245 34.6199 17.1279 34.7893 16.9233 34.9493C16.7193 35.1093 16.5079 35.2599 16.2903 35.3999C16.0721 35.5406 15.8484 35.6706 15.6185 35.7893C15.3886 35.9087 15.1538 36.0168 14.9141 36.1143C14.6743 36.2112 14.4303 36.2968 14.1825 36.3712C13.9354 36.4456 13.6845 36.5074 13.4312 36.5581C13.1779 36.6087 12.9228 36.6474 12.6657 36.6743C12.4094 36.7006 12.1517 36.7156 11.8935 36.7174C11.6353 36.7199 11.3776 36.7099 11.12 36.6881C10.863 36.6662 10.6072 36.6324 10.3527 36.5868C10.0988 36.5406 9.84732 36.4831 9.59833 36.4131C9.34933 36.3437 9.10404 36.2624 8.86244 36.1693C8.62146 36.0768 8.38479 35.9731 8.15244 35.8581C7.9207 35.7431 7.69452 35.6174 7.47387 35.4812C7.25323 35.3449 7.03937 35.1981 6.83228 35.0418C6.62582 34.8856 6.42613 34.7199 6.23384 34.5443C6.04216 34.3693 5.8585 34.1856 5.68347 33.9931C5.50843 33.8006 5.34264 33.5999 5.1861 33.3924C5.02955 33.1843 4.88225 32.9693 4.74543 32.7474C4.60799 32.5256 4.48164 32.2974 4.36516 32.0637C4.24929 31.8299 4.1439 31.5912 4.0496 31.3474C3.95531 31.1037 3.8721 30.8556 3.80061 30.6043C3.72912 30.3524 3.66872 30.0981 3.62064 29.8412C3.57195 29.5837 3.53559 29.3249 3.51094 29.0643C3.48629 28.8037 3.47334 28.5424 3.47273 28.2806C3.47273 28.0181 3.48444 27.7562 3.50786 27.4949C3.53189 27.2337 3.56764 26.9737 3.6151 26.7162C3.66255 26.4581 3.72234 26.2031 3.79321 25.9506C3.86409 25.6981 3.94668 25.4499 4.04036 25.2049C4.13465 24.9606 4.23943 24.7206 4.3553 24.4862C4.47116 24.2512 4.59751 24.0231 4.73433 23.7999C4.87116 23.5774 5.01784 23.3612 5.17439 23.1524C5.33093 22.9437 5.49672 22.7424 5.67176 22.5493C5.84679 22.3562 6.03045 22.1712 6.22274 21.9956C6.41442 21.8193 6.61411 21.6531 6.82181 21.4956C7.02889 21.3387 7.24275 21.1918 7.46401 21.0549C7.68465 20.9181 7.91146 20.7918 8.14381 20.6762C8.37616 20.5606 8.61345 20.4562 8.85504 20.3631C9.09726 20.2699 9.34255 20.1887 9.59216 20.1187C9.84177 20.0487 10.0938 19.9906 10.3484 19.9449C10.6035 19.8987 10.8599 19.8643 11.1176 19.8424C11.3758 19.8206 11.634 19.8106 11.8929 19.8131C12.1517 19.8156 12.4094 19.8306 12.667 19.8574C12.9246 19.8837 13.1804 19.9231 13.4343 19.9737C13.6876 20.0249 13.9391 20.0874 14.1868 20.1618C14.4352 20.2368 14.6793 20.3231 14.9196 20.4206C15.16 20.5181 15.3948 20.6268 15.6253 20.7468C15.8552 20.8668 16.0795 20.9968 16.2977 21.1381C16.5165 21.2793 16.7273 21.4299 16.9319 21.5912C17.1365 21.7518 17.3331 21.9224 17.5217 22.1018C17.7103 22.2812 17.8909 22.4693 18.0622 22.6656C18.2336 22.8624 18.3957 23.0668 18.5485 23.2781C18.7014 23.4899 18.8443 23.7087 18.9769 23.9343C19.11 24.1593 19.232 24.3906 19.3436 24.6274C19.4551 24.8643 19.5556 25.1056 19.6449 25.3518C19.7343 25.5981 19.812 25.8481 19.8785 26.1018C19.9445 26.3556 19.9993 26.6118 20.0425 26.8706Z", fill: "white" })), fo = (r) => /* @__PURE__ */ V("svg", { preserveAspectRatio: "none", width: 123, height: 82, viewBox: "0 0 123 82", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M120.365 37.1527C122.774 39.152 122.774 42.848 120.365 44.8473L76.9935 80.8473C76.0961 81.5923 74.9664 82 73.8001 82L0 82L0 0L73.8001 0C74.9664 0 76.0961 0.407744 76.9935 1.15267L120.365 37.1527Z", fill: "currentColor" })), O1 = (r, e) => {
  const [t, i] = R(r);
  return U(() => {
    const n = setTimeout(() => {
      i(r);
    }, e);
    return () => {
      clearTimeout(n);
    };
  }, [r, e]), t;
}, Es = (r) => /* @__PURE__ */ V("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("circle", { cx: 16, cy: 16, r: 16, fill: "#030712" }), /* @__PURE__ */ V("path", { d: "M15.6047 20.0343C15.1 20.0343 14.6794 19.6137 14.6794 19.109V18.7389C14.6121 16.7203 15.9748 15.8455 16.9673 15.2062C18.0439 14.5165 18.6495 14.0623 18.6495 12.8343C18.6495 11.2698 17.5056 10.2604 15.7393 10.2604C15.3187 10.2773 13.3505 10.496 13.3505 12.8175C13.3505 13.3221 12.9299 13.7427 12.4252 13.7427C11.9206 13.7427 11.5 13.3221 11.5 12.8175C11.5 9.4025 14.2589 8.44362 15.7056 8.40997H15.7224C18.5318 8.40997 20.5 10.2268 20.5 12.8343C20.5 15.1389 19.0364 16.081 17.9766 16.7707C16.9841 17.41 16.5131 17.7632 16.5467 18.6885C16.5467 18.7053 16.5467 18.7053 16.5467 18.7221V19.109C16.5299 19.6305 16.1093 20.0343 15.6047 20.0343Z", fill: "white" }), /* @__PURE__ */ V("path", { d: "M15.6887 23.5838C16.274 23.5838 16.7485 23.1093 16.7485 22.524C16.7485 21.9387 16.274 21.4642 15.6887 21.4642C15.1034 21.4642 14.6289 21.9387 14.6289 22.524C14.6289 23.1093 15.1034 23.5838 15.6887 23.5838Z", fill: "white" })), Ir = (r) => /* @__PURE__ */ V("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("circle", { cx: 16, cy: 16, r: 16, fill: "#10B981" }), /* @__PURE__ */ V("path", { d: "M10.5261 17.6842L14.4467 21.1056L21.5366 11.2421", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), dn = (r) => /* @__PURE__ */ V("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("circle", { cx: 16, cy: 16, r: 16, fill: "#EF4444" }), /* @__PURE__ */ V("path", { d: "M10.913 21.0829L15.9959 16M15.9959 16L21.0789 10.9171M15.9959 16L21.0789 21.0829M15.9959 16L10.913 10.9171", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Rr = (r) => /* @__PURE__ */ V("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("circle", { cx: 16, cy: 16, r: 15.5, fill: "#F59E0B", stroke: "#F59E0B" }), /* @__PURE__ */ V("path", { d: "M18 23.9603C18 25.0648 17.1041 25.96 15.9997 25.96C14.8951 25.96 14 25.0648 14 23.9603C14 22.8548 14.8951 21.96 15.9997 21.96C17.1041 21.9602 18 22.8551 18 23.9603Z", fill: "white" }), /* @__PURE__ */ V("path", { d: "M18.222 8.13512C18.1818 7.67877 18.0044 7.24904 17.7339 6.89648C17.3204 6.35776 16.6887 5.99896 15.9949 6C15.3216 5.99917 14.7072 6.33675 14.2935 6.84864C14.0016 7.20973 13.8096 7.65776 13.7676 8.13512C13.7565 8.26117 13.7578 8.39783 13.7676 8.52034L14.6898 18.9815C14.7177 19.2972 14.8575 19.5762 15.0669 19.7837C15.3063 20.0211 15.6364 20.1652 15.9949 20.1648C16.3175 20.1652 16.6171 20.0483 16.8481 19.8522C17.0987 19.6396 17.2688 19.333 17.2998 18.9813L18.222 8.52013C18.232 8.39762 18.2331 8.26117 18.222 8.13512Z", fill: "white" })), ii = {
  unavailable: {
    icon: Es,
    heading: "Compatibility Information Not Available",
    heading_code: "checksku_message_nocompatibilityinfo"
  },
  check: {
    icon: Es,
    heading: "Check Compatibility",
    heading_code: "productcheck_nobikeselected_label",
    details: "Add your ride to check if this part fits",
    details_code: "productcheck_nobikeselected_message"
  },
  compatible: {
    icon: Ir,
    heading: "Compatible",
    heading_code: "compatible"
  },
  incompatible: {
    icon: dn,
    heading: "Not Compatible",
    heading_code: "not_compatible"
  },
  warning: {
    icon: Rr,
    heading: "Compatible - Check Notes",
    heading_code: "compatible_check_notes"
  }
};
function I1({
  type: r,
  onSelect: e,
  categoryId: t,
  removePart: i,
  notes: n,
  clearNotes: s,
  notesViewed: o,
  setNotesViewed: a
}) {
  var N;
  const u = window.BikeMatrix.getConfig(), c = new Se(u.apiUrl, u.apiKey, u.apiToken, u.isShopify), [d, h] = R(!1), f = Y(null), b = Y(null), v = Y(null), [w, m] = R(""), [g, x] = R(null), [_, y] = R([]), [k, A] = R(!1), [C, D] = R(""), S = O1(w, 500), [B, E] = R(!1), {
    t: T
  } = te(), M = async () => {
    A(!0);
    const q = await c.findProducts(w, t);
    q.success ? (A(!1), y(q.data)) : (A(!1), D(q.error), u.logLevel === "verbose" && console.error(q.logError));
  };
  U(() => {
    (S && !g && w.length > 2 || S && g && (g == null ? void 0 : g.display_Name) !== w) && M();
  }, [S]), U(() => {
    _.length > 0 && w.length > 2 && $();
  }, [_]);
  const F = (q) => {
    x(q), m(q.display_Name), e(q);
  };
  U(() => {
    g && w === g.display_Name && I();
  }, [w, g]);
  const $ = () => {
    Q.to(f.current, {
      height: "auto"
    });
  }, I = () => {
    Q.to(f.current, {
      height: 0
    });
  }, O = () => {
    d && L(), m(""), y([]), I(), s();
  };
  U(() => {
    d || (x(null), i());
  }, [d]);
  const P = () => {
    Q.to(b.current, {
      transform: "translateY(112px)",
      duration: 1,
      onComplete: () => h(!0)
    });
  }, L = () => {
    Q.to(b.current, {
      transform: "translateY(0px)",
      duration: 1,
      onComplete: () => h(!1)
    });
  };
  return U(() => {
    r ? P() : !r && d && L();
  }, [r]), p(j, {
    children: [p("div", {
      className: "search-wrapper",
      children: [p("style", {
        type: "text/css",
        children: M1
      }), C && p(it, {
        messages: C
      }), p("div", {
        className: X("compatibility-wrapper"),
        ref: v,
        style: {
          height: r === "warning" ? "140px" : "110px"
        },
        children: p("div", {
          className: X("compatibility ", {
            compatible: "bg-emerald-50",
            incompatible: "bg-red-50",
            warning: "bg-amber-50",
            "no-information": "bg-white"
          }[r]),
          style: {
            borderColor: r === "compatible" ? "rgb(16 185 129)" : r == "incompatible" ? "rgb(239 68 68)" : r === "warning" ? "rgb(245 158 11)" : r === "no-information" ? "#000" : "transparent"
          },
          ref: b,
          children: [p("div", {
            className: X("compatibility-contents"),
            children: [p(fo, {
              class: X("self-start h-full w-[93px] polygon", {
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-500",
                "no-information": "text-black"
              }[r])
            }), p(po, {
              class: "h-[26px] w-[37.5px] absolute bikon"
            }), p("p", {
              className: X("font-semibold text-lg ml-[105px]", {
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-950",
                "no-information": "text-black"
              }[r]),
              children: T((N = ii[r]) == null ? void 0 : N.heading_code)
            }), r === "warning" && p("button", {
              className: "compatibility-warning_button",
              onClick: () => E(!0),
              children: "Notes"
            })]
          }), p("div", {
            className: X("compatibility-background ", {
              compatible: "bg-emerald-500",
              incompatible: "bg-red-500",
              warning: "bg-amber-500",
              "no-information": "bg-black"
            }[r])
          })]
        })
      }), p("div", {
        className: X("search_bar-wrapper text-lg", {
          compatible: "bg-emerald-50 border-emerald-500",
          incompatible: "bg-red-50 border-red-500",
          warning: "bg-amber-50 border-amber-500",
          "no-information": "bg-white border-black-500"
        }[r]),
        style: {
          borderColor: r === "compatible" ? "rgb(16 185 129)" : r == "incompatible" ? "rgb(239 68 68)" : r === "warning" ? "rgb(245 158 11)" : "rgb(0 0 0)"
        },
        children: [p("div", {
          className: "input_icon-wrapper",
          children: [!k && p("div", {
            className: "svg-wrapper",
            children: p(P1, {})
          }), p(Et, {
            isLoading: k,
            colour: "#000"
          }), p("input", {
            type: "text",
            placeholder: T("virtualworkshop_search_text"),
            value: w,
            onChange: (q) => m(q.currentTarget.value)
          })]
        }), p("div", {
          className: "svg-wrapper",
          onClick: O,
          children: p(Iu, {})
        })]
      }), p("div", {
        className: "results-wrapper",
        ref: f,
        children: p("div", {
          className: "results text-lg",
          children: _ && _.length > 0 ? _.map((q) => p("div", {
            className: "result",
            onClick: () => {
              F(q);
            },
            children: q.display_Name
          }, q.product_ID)) : p("div", {
            className: "result",
            children: T("error_find_products_no_results")
          })
        })
      })]
    }), p(so, {
      isOpen: B,
      toggleModal: () => E(!1),
      title: "Notes",
      onConfirm: () => {
        a(), E(!1);
      },
      onCancel: () => E(!1),
      children: p("div", {
        className: "notes-wrapper",
        children: [!!n.compatible && p("p", {
          class: "text-sm flex",
          children: [p(Ir, {
            class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
          }), " ", n.compatible]
        }), p("p", {
          class: "text-sm flex",
          children: [p(Rr, {
            class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
          }), " ", n.warning]
        })]
      })
    })]
  });
}
function R1() {
  const {
    t: r
  } = te(), t = window.BikeMatrix.getConfig(), i = mn.value, n = ke.value, s = new Se(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), {
    currentBike: o,
    setCurrentBike: a
  } = Ie(), [l, u] = R(!1), [c, d] = R(null), [h, f] = R(null), [b, v] = R(null), [w, m] = R({
    compatible: "",
    warning: ""
  }), [g, x] = R(!1);
  o.isShared && re("/");
  const _ = async () => {
    u(!0), ao(), n[i.category.split(" ").join("_")][i.type.split(" ").join("_")] = {
      ...n[i.category.split(" ").join("_")][i.type.split(" ").join("_")],
      id: h.product_ID,
      name: h.display_Name,
      unsaved_changes: !0
    }, ke.value = n;
    const k = await s.addComponent(o.key, h.product_Category_ID, h.product_ID, lo[i.type.split(" ").join("_")]);
    if (k.success)
      a({
        ...o
      }), re("/bom");
    else {
      v(k.error), u(!1), t.logLevel === "verbose" && console.error(k.logError);
      return;
    }
  }, y = async (k) => {
    var A;
    if (m({
      compatible: "",
      warning: ""
    }), !k.skU_EAN && !k.skU_UPC && !k.manufacturer_Part_Number)
      d("no-information");
    else {
      f(k);
      const C = ((A = jt()) == null ? void 0 : A.language) || "en-GB", D = await s.checkSkuCompatibility(o.key, k.skU_EAN || k.skU_UPC || k.manufacturer_Part_Number, C, "WorkshopCheckPart", t.currentCollectionHandle);
      D.success || (t.logLevel === "verbose" && console.error(D.logError), v(D.error)), D.data.compatible && D.data.warning ? (x(!1), d("warning"), m({
        warning: D.data.warningMessage,
        compatible: D.data.compatibilityMessage
      })) : D.data.compatible ? (d("compatible"), x(!0)) : D.data.compatible || d("incompatible");
    }
  };
  return i ? p(j, {
    children: [p("div", {
      children: [o ? p(rt, {
        bike: o,
        selected: !0,
        settings: !0
      }) : p(Ur, {}), p("div", {
        className: "part-wrapper mt-8 mb-8",
        children: [p(Dt, {
          text: i != null && i.type ? r("virtualworkshop_current") + " " + r(`category_${i.type.replace(/[ &]/g, "").toLocaleLowerCase()}`) + ":" : r(`category_${i.type.replace(/[ &]/g, "").toLocaleLowerCase()}`),
          bold: !0,
          capitalize: !0
        }), p(Dt, {
          subheader: !0,
          text: i == null ? void 0 : i.part.name
        })]
      })]
    }), p(I1, {
      notes: w,
      onSelect: (k) => y(k),
      type: c,
      categoryId: i.part.product_category_id,
      clearNotes: () => m({
        compatible: "",
        warning: ""
      }),
      removePart: () => {
        d(null), f(null);
      },
      notesViewed: g,
      setNotesViewed: () => x(!0)
    }), p(it, {
      messages: b
    }), p(pt, {
      text: r("confirm"),
      onClick: _,
      primary: !0,
      disabled: c === "incompatible" || c === "no-information" || !g,
      loading: l
    }), p(Bt, {})]
  }) : p(j, {});
}
const z1 = `.edit-field__wrapper{position:relative}.edit-container{display:flex;align-items:center;gap:1rem;margin-top:8px}.edit-input_wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:flex;align-items:center;height:54px;transition:ease-in-out all .5s}.edit-input_content{display:flex;gap:.5rem;cursor:pointer}.input-wrapper{width:100%}.edit-input{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.edit-input_content{width:100%;display:grid}.svg{width:20px;height:20px;cursor:pointer}.icon-wrapper{display:flex;align-items:center;gap:.25rem}.generic-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.edit-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.edit-button:hover{background-color:#000}.edit-button:hover svg{color:#fff}.edit-button:hover .label-wrapper{opacity:1;top:-32px}.edit-button:hover .tick{stroke:#fff}.edit-button svg{width:16px;height:16px}.tick{stroke:#000}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}.edit-open-wrapper{display:flex;gap:1rem}.notice{position:absolute;right:0;bottom:-20px}
`, q1 = (r) => /* @__PURE__ */ V("svg", { width: 13, height: 13, viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M1.19739 8.1317L4.99549 11.4461L11.8639 1.8909", stroke: "currentColour", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), $1 = (r) => /* @__PURE__ */ V("svg", { width: 16, height: 16, viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M1.71186 11C1.14322 11 0.714757 10.8578 0.426485 10.5733C0.142162 10.2889 0 9.86613 0 9.30512V2.85152C0 2.28656 0.142162 1.86382 0.426485 1.58332C0.714757 1.29886 1.14322 1.15663 1.71186 1.15663H8.12098L7.30355 1.97444H1.72371C1.43149 1.97444 1.2064 2.05148 1.04844 2.20557C0.894433 2.35965 0.817429 2.58879 0.817429 2.893V9.25771C0.817429 9.56192 0.894433 9.79106 1.04844 9.94514C1.2064 10.0992 1.43149 10.1763 1.72371 10.1763H8.2513C8.47639 10.1763 8.66001 10.0992 8.80217 9.94514C8.94828 9.79106 9.02134 9.56192 9.02134 9.25771V3.72859L9.83877 2.90485V9.30512C9.83877 9.86613 9.70055 10.2889 9.42413 10.5733C9.15165 10.8578 8.76663 11 8.26907 11H1.71186ZM3.80875 7.3317C3.76136 7.35541 3.71792 7.34553 3.67843 7.30207C3.63894 7.25861 3.63104 7.21318 3.65474 7.16577L4.13453 6.16425L9.35305 0.943291L10.0757 1.65443L4.85126 6.87539L3.80875 7.3317ZM10.4785 1.25738L9.76176 0.534386L10.1527 0.143259C10.2396 0.0563415 10.3403 0.0089322 10.4548 0.00103064C10.5693 -0.00687092 10.668 0.0306615 10.751 0.113628L10.8694 0.232151C10.9603 0.323019 11.0037 0.425739 10.9998 0.540312C10.9998 0.654885 10.9543 0.761556 10.8635 0.860325L10.4785 1.25738Z", fill: "currentColor" })), Oa = ({
  value: r,
  onSave: e,
  loading: t,
  label: i,
  success: n,
  error: s
}) => {
  const {
    t: o
  } = te(), [a, l] = R(!1), [u, c] = R(r), d = Y(null), h = Y(null), [f, b] = R({
    type: "",
    message: ""
  }), [v, w] = R(!1), m = () => {
    const x = Q.timeline();
    x.to(h.current, {
      opacity: 0
    }), x.to(h.current, {
      width: "124px"
    }), x.to(h.current, {
      onStart: () => l(!0),
      opacity: 1
    });
  }, g = () => {
    const x = Q.timeline();
    x.to(h.current, {
      opacity: 0
    }), x.to(h.current, {
      width: "54px"
    }), x.to(h.current, {
      onStart: () => {
        l(!1);
      },
      opacity: 1
    });
  };
  return U(() => {
    a && d.current.focus();
  }, [a]), U(() => {
    n ? (g(), b({
      type: "success",
      message: o("virtualworkshop_saved", {
        label: i
      })
    })) : !n && n !== null && (g(), b({
      type: "error",
      message: s
    }));
  }, [n]), p("div", {
    className: "edit-field__wrapper",
    children: [p("style", {
      type: "text/css",
      children: z1
    }), i && p("label", {
      class: "text-gray-800 font-bold text",
      children: i
    }), p("div", {
      className: "edit-container",
      children: [p("div", {
        className: "edit-input_wrapper",
        style: a && {
          border: "1px solid #000"
        },
        children: [a && p("div", {
          className: "input-wrapper",
          children: p("input", {
            maxLength: 80,
            type: "text",
            className: "edit-input",
            placeholder: u,
            onChange: (x) => c(x.currentTarget.value),
            value: u,
            ref: d,
            onKeyDown: (x) => {
              x.key === "Enter" && e(u);
            }
          })
        }), !a && p("div", {
          className: "edit-input_content",
          children: p("p", {
            className: "generic-text",
            children: r
          })
        })]
      }), p("div", {
        className: "edit-save-cancel-wrapper",
        ref: h,
        children: [!a && p("div", {
          className: "edit-button",
          onClick: m,
          children: [p("div", {
            className: "label-wrapper",
            children: p("div", {
              className: "button-label",
              children: o("edit")
            })
          }), p($1, {})]
        }), a && p("div", {
          className: "edit-open-wrapper",
          onMouseOver: () => w(!0),
          onMouseLeave: () => w(!1),
          children: [p("div", {
            className: "edit-button",
            onClick: () => {
              t || e(u);
            },
            children: [p("div", {
              className: "label-wrapper",
              children: p("div", {
                className: "button-label",
                children: o("save")
              })
            }), t ? p(Et, {
              isLoading: t,
              colour: v ? "#fff" : "#000"
            }) : p(q1, {
              className: "tick"
            })]
          }), p("div", {
            className: "edit-button",
            onClick: () => {
              t || g();
            },
            children: [p("div", {
              className: "label-wrapper",
              children: p("div", {
                className: "button-label",
                children: o("cancel")
              })
            }), p(gi, {})]
          })]
        })]
      })]
    }), f.message && p("p", {
      class: "text-xs notice flex",
      style: {
        color: f.type === "success" ? "#10B981" : "#EF4444"
      },
      children: f.message
    })]
  });
}, V1 = `.copy-share_wrapper{display:flex;align-items:center;gap:1rem;margin-top:8px}.value-wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:grid;height:54px}.generic-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.share-button,.copy-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.share-button:hover,.copy-button:hover{background-color:#000}.share-button:hover svg,.copy-button:hover svg{color:#fff}.share-button:hover .label-wrapper,.copy-button:hover .label-wrapper{opacity:1;top:-32px}.share-button svg,.copy-button svg{width:16px}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}
`, j1 = (r) => /* @__PURE__ */ V("svg", { width: 22, height: 27, viewBox: "0 0 22 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M5.23701 5.89236V3.30519C5.23701 2.21106 5.51143 1.38666 6.06029 0.831997C6.61677 0.277332 7.43624 0 8.51871 0H12.738C13.2717 0 13.7481 0.0759814 14.1674 0.227944C14.5942 0.379907 14.9906 0.638244 15.3565 1.00295L20.9938 6.71296C21.3825 7.10806 21.6455 7.51836 21.7827 7.94386C21.9276 8.36176 22 8.87083 22 9.47108V18.3837C22 19.4778 21.7256 20.3022 21.1767 20.8569C20.6355 21.404 19.8198 21.6775 18.7297 21.6775H16.4314V20.1047H18.6497C19.2367 20.1047 19.6788 19.9527 19.9761 19.6488C20.2734 19.3449 20.422 18.9118 20.422 18.3495V9.0152H15.1965C14.6019 9.0152 14.1559 8.87463 13.8586 8.5935C13.5613 8.30477 13.4127 7.85268 13.4127 7.23723V1.58421H8.59875C8.01178 1.58421 7.56583 1.73618 7.26091 2.0401C6.96362 2.34403 6.81497 2.77712 6.81497 3.33938V5.89236H5.23701ZM14.8534 7.02068C14.8534 7.40059 15.044 7.59054 15.4252 7.59054H19.999L14.8534 2.39341V7.02068ZM0 23.6948V8.61629C0 7.52216 0.274428 6.70156 0.823285 6.1545C1.37214 5.59983 2.1878 5.3225 3.27027 5.3225H7.13514C7.71448 5.3225 8.18711 5.38328 8.55301 5.50485C8.92654 5.62642 9.30769 5.88476 9.69647 6.27986L15.8025 12.4686C16.2065 12.8789 16.4695 13.2664 16.5915 13.6311C16.7134 13.9958 16.7744 14.5049 16.7744 15.1583V23.6948C16.7744 24.7889 16.5 25.6133 15.9511 26.168C15.4023 26.7227 14.5866 27 13.5042 27H3.27027C2.1878 27 1.37214 26.7227 0.823285 26.168C0.274428 25.6133 0 24.7889 0 23.6948ZM1.5894 23.6606C1.5894 24.2305 1.73423 24.6636 2.02391 24.9599C2.32121 25.2638 2.75953 25.4158 3.33888 25.4158H13.4127C13.9997 25.4158 14.4418 25.2638 14.7391 24.9599C15.044 24.6636 15.1965 24.2305 15.1965 23.6606V15.1811H9.01039C8.36244 15.1811 7.87457 15.0215 7.54678 14.7024C7.21899 14.3833 7.05509 13.8932 7.05509 13.2322V6.90671H3.35031C2.77096 6.90671 2.33264 7.05867 2.03534 7.3626C1.73805 7.65893 1.5894 8.08442 1.5894 8.63909V23.6606ZM9.18191 13.7108H14.8763L8.54158 7.29422V13.0612C8.54158 13.2892 8.59113 13.4563 8.69023 13.5627C8.79695 13.6615 8.96085 13.7108 9.18191 13.7108Z", fill: "currentColor" })), U1 = (r) => /* @__PURE__ */ V("svg", { width: 16, height: 21.6, viewBox: "0 0 20 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M3.58702 27C2.40708 27 1.51426 26.682 0.908555 26.046C0.302851 25.4184 0 24.4812 0 23.2343V11.4728C0 10.2176 0.302851 9.27615 0.908555 8.64854C1.51426 8.01255 2.40708 7.69456 3.58702 7.69456H6.89086V9.82845H3.66962C3.13471 9.82845 2.72566 9.97908 2.44248 10.2803C2.15929 10.5732 2.0177 11.0209 2.0177 11.6234V23.0837C2.0177 23.6695 2.15929 24.113 2.44248 24.4142C2.72566 24.7155 3.13471 24.8661 3.66962 24.8661H16.3422C16.8692 24.8661 17.2783 24.7155 17.5693 24.4142C17.8604 24.113 18.0059 23.6695 18.0059 23.0837V11.6234C18.0059 11.0209 17.8604 10.5732 17.5693 10.2803C17.2783 9.97908 16.8692 9.82845 16.3422 9.82845H13.1209V7.69456H16.413C17.6087 7.69456 18.5054 8.01255 19.1032 8.64854C19.7011 9.28452 20 10.2259 20 11.4728V23.2343C20 24.4812 19.7011 25.4184 19.1032 26.046C18.5054 26.682 17.6087 27 16.413 27H3.58702ZM10.0059 17.6109C9.73845 17.6109 9.51032 17.5105 9.32153 17.3096C9.13274 17.1088 9.03835 16.8745 9.03835 16.6067V4.53138L9.10914 2.76151L8.38938 3.62762L6.77286 5.46025C6.5998 5.66946 6.37955 5.77406 6.11209 5.77406C5.86037 5.77406 5.65192 5.69038 5.48673 5.52301C5.3294 5.34728 5.25074 5.13389 5.25074 4.88285C5.25074 4.6318 5.3412 4.41004 5.52212 4.21757L9.28614 0.351464C9.40413 0.225941 9.52212 0.138075 9.64012 0.0878661C9.75811 0.0292887 9.88004 0 10.0059 0C10.1318 0 10.2498 0.0292887 10.3599 0.0878661C10.4779 0.138075 10.5959 0.225941 10.7139 0.351464L14.4779 4.21757C14.6667 4.41004 14.7611 4.6318 14.7611 4.88285C14.7611 5.13389 14.6745 5.34728 14.5015 5.52301C14.3363 5.69038 14.1318 5.77406 13.8879 5.77406C13.6205 5.77406 13.4041 5.66946 13.2389 5.46025L11.6106 3.62762L10.8909 2.77406L10.9735 4.53138V16.6067C10.9735 16.8745 10.8751 17.1088 10.6785 17.3096C10.4897 17.5105 10.2655 17.6109 10.0059 17.6109Z", fill: "currentColor" })), Ia = ({
  text: r,
  onShare: e,
  label: t,
  onCopy: i
}) => {
  const {
    t: n
  } = te(), [s, o] = R(n("virtualworkshop_copy"));
  return p("div", {
    children: [p("style", {
      type: "text/css",
      children: V1
    }), t && p("label", {
      class: "text-gray-800 font-bold text",
      children: t
    }), p("div", {
      className: "copy-share_wrapper",
      children: [p("div", {
        className: "value-wrapper",
        children: p("div", {
          className: "generic-text",
          children: r
        })
      }), e && p("div", {
        className: "share-button",
        onClick: () => e(r),
        children: [p("div", {
          className: "label-wrapper",
          children: p("div", {
            className: "button-label",
            children: n("share")
          })
        }), p(U1, {})]
      }), p("div", {
        className: "copy-button",
        onClick: () => {
          i(r), o("Copied");
        },
        onMouseLeave: () => setTimeout(() => {
          o(n("copy"));
        }, 1e3),
        children: [p("div", {
          className: "label-wrapper",
          children: p("div", {
            className: "button-label",
            children: s
          })
        }), p(j1, {})]
      })]
    })]
  });
}, H1 = `.question-button{display:flex;justify-content:center;align-items:center;background-color:#000;border-radius:100%;height:31px;width:31px;color:#fff;position:absolute;top:36px;right:1.5rem;cursor:pointer}@media screen and (max-width: 639px){.question-button{top:24px;right:32px}}
`, ac = (r) => /* @__PURE__ */ V("svg", { width: 8, height: 14, viewBox: "0 0 8 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ V("path", { d: "M2.80272 10.0382V9.95794C2.81179 9.1058 2.90249 8.42766 3.07483 7.92352C3.24717 7.41938 3.49206 7.01115 3.80952 6.69885C4.12698 6.38655 4.50794 6.09879 4.95238 5.83556C5.21995 5.67495 5.46032 5.48534 5.67347 5.26673C5.88662 5.04366 6.05442 4.78713 6.17687 4.49713C6.30385 4.20714 6.36735 3.88591 6.36735 3.53346C6.36735 3.09624 6.26304 2.71702 6.05442 2.39579C5.8458 2.07457 5.56689 1.82696 5.21769 1.65296C4.86848 1.47897 4.48073 1.39197 4.05442 1.39197C3.68254 1.39197 3.32426 1.46781 2.97959 1.6195C2.63492 1.77119 2.34694 2.00988 2.11565 2.33556C1.88435 2.66125 1.75057 3.08732 1.71429 3.61377H0C0.0362812 2.85532 0.235828 2.20618 0.598639 1.66635C0.965986 1.12651 1.44898 0.71383 2.04762 0.428298C2.65079 0.142766 3.31973 0 4.05442 0C4.85261 0 5.54649 0.15615 6.13605 0.468451C6.73016 0.780752 7.18821 1.20905 7.5102 1.75335C7.83673 2.29764 8 2.91778 8 3.61377C8 4.10453 7.9229 4.54844 7.76871 4.94551C7.61905 5.34257 7.40136 5.69726 7.11565 6.00956C6.83447 6.32186 6.49433 6.59847 6.09524 6.83939C5.69615 7.08477 5.37642 7.34353 5.13605 7.61568C4.89569 7.88336 4.72109 8.20236 4.61224 8.57266C4.5034 8.94296 4.44444 9.40472 4.43537 9.95794V10.0382H2.80272ZM3.67347 14C3.33787 14 3.04989 13.8818 2.80952 13.6453C2.56916 13.4089 2.44898 13.1256 2.44898 12.7954C2.44898 12.4653 2.56916 12.182 2.80952 11.9455C3.04989 11.7091 3.33787 11.5908 3.67347 11.5908C4.00907 11.5908 4.29705 11.7091 4.53741 11.9455C4.77778 12.182 4.89796 12.4653 4.89796 12.7954C4.89796 13.014 4.84127 13.2148 4.72789 13.3977C4.61905 13.5806 4.47166 13.7279 4.28571 13.8394C4.10431 13.9465 3.90023 14 3.67347 14Z", fill: "white" })), G1 = ({
  onClick: r
}) => p(j, {
  children: [p("style", {
    type: "text/css",
    children: H1
  }), p("div", {
    className: "question-button",
    onClick: r,
    children: p(ac, {})
  })]
});
function W1() {
  const r = ke.value, t = window.BikeMatrix.getConfig(), {
    currentBike: i,
    saveBike: n
  } = Ie(), [s, o] = R(r == null ? void 0 : r.owner_Email_Address), [a, l] = R(!1), [u, c] = R(null), [d, h] = R(null), [f, b] = R(i.name), [v, w] = R(null), [m, g] = R(null), [x, _] = R(null), y = new Se(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), {
    t: k
  } = te(), A = async (D, S) => {
    if (S === "name") {
      b(D), w(!0), g(null), _(null);
      const B = await y.updateCustomBikeName(i.key, D);
      n({
        ...i,
        name: D
      }), w(!1), B.success ? g(!0) : (_(B.error), t.logLevel === "verbose" && console.error(B.logError));
    }
    if (S === "email") {
      o(D), l(!0), c(null), h(null);
      const B = await y.saveCustomBike(i.key, D);
      l(!1), B.success ? c(!0) : (c(!1), h(B.error), t.logLevel === "verbose" && console.error(B.logError));
    }
  }, C = (D) => {
    navigator.share({
      title: k("virtualworkshop_settings_id"),
      text: D,
      url: window.location.href
    }).then(() => console.log("Successful share! 🎉")).catch((S) => console.error(S));
  };
  return r ? p(j, {
    children: [p(G1, {
      onClick: () => re("/quick-guide")
    }), p("div", {
      className: "mb-4",
      children: i ? p(rt, {
        bike: i,
        selected: !0,
        simple: !0
      }) : p(Ur, {})
    }), p("div", {
      className: "flex flex-col gap-4",
      children: [p(Oa, {
        value: f,
        onSave: (D) => A(D, "name"),
        loading: v,
        label: k("virtualworkshop_settings_bike_name"),
        success: m,
        error: x
      }), (r == null ? void 0 : r.owner_Email_Address) && p(Oa, {
        value: s,
        onSave: (D) => A(D, "email"),
        loading: a,
        label: k("virtualworkshop_settings_email"),
        success: u,
        error: d
      }), p(Ia, {
        label: k("virtualworkshop_settings_id"),
        text: i.key,
        onCopy: (D) => navigator.clipboard.writeText(D)
      }), p(Ia, {
        label: k("virtualworkshop_settings_share_id"),
        text: i.shareId,
        onShare: (D) => C(D),
        onCopy: (D) => navigator.clipboard.writeText(D)
      })]
    }), p(Bt, {})]
  }) : p(j, {});
}
function Y1() {
  const e = window.BikeMatrix.getConfig();
  U(() => {
    ot.value.back = "/";
  }, []);
  const t = new Se(e.apiUrl, e.apiKey, e.apiToken, e.isShopify), {
    currentBike: i
  } = Ie(), [n, s] = R(null), [o, a] = R(""), l = async () => {
    const u = await t.getBikeBom(i.key);
    if (!u.success)
      a(u.error), e.logLevel === "verbose" && console.error(u.logError);
    else {
      const c = Or(u.data);
      s(c), ke.value = c;
    }
  };
  return U(() => {
    l();
  }, []), p(j, {
    children: [p("div", {
      className: "mb-4",
      children: [n ? p(rt, {
        bike: n,
        readOnly: !0,
        shared: !0
      }) : p(Ur, {}), p("div", {
        class: "mt-4 mb-8",
        children: p($u, {
          categorisedBOM: n,
          readOnly: !0
        })
      })]
    }), o, p(Bt, {})]
  });
}
const K1 = `.onboarding-content-wrapper{display:flex;flex-direction:column;gap:1rem;padding-left:1rem;padding-right:1rem}@media screen and (max-width: 639px){.onboarding-content-wrapper{padding:0}}
`, Z1 = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}.card-image-wrapper{border:1px solid #d4d4d4;border-radius:8px;overflow:hidden;width:100%;margin-bottom:1rem}.card-image-wrapper img{width:100%;height:auto}.card-content{color:#000;font-size:16px}
`, X1 = ({
  title: r,
  content: e,
  src: t,
  svg: i
}) => p(qu, {
  title: r,
  children: [p("style", {
    type: "text/css",
    children: Z1
  }), p("div", {
    className: "card-image-wrapper",
    children: p("img", {
      src: t
    })
  }), p("div", {
    className: "card-content",
    children: e
  })]
}), J1 = () => {
  const {
    t: r
  } = te();
  return p(j, {
    children: [p("style", {
      type: "text/css",
      children: K1
    }), p("div", {
      className: "onboarding",
      children: p("div", {
        className: "onboarding-content-wrapper",
        children: Vu.map((e, t) => p(X1, {
          title: e.number + ". " + r(`${e.title}`),
          src: e.image,
          svg: e.svg,
          content: r(`${e.content}`)
        }, t))
      })
    })]
  });
};
function Q1() {
  return p("div", {
    className: "quick-guide-page",
    children: [p(J1, {}), p(Bt, {})]
  });
}
const Bs = Ae("/"), re = (r) => {
  const e = Bs.peek();
  Bs.value = r, lc({
    previous: e,
    path: r
  });
}, ho = [{
  title: "bikeselector_home_title",
  component: Ef,
  path: "/"
}, {
  title: "bikeselector_addbike_title",
  component: Ff,
  path: "/add"
}, {
  title: "bikeselector_search_title",
  component: Nf,
  path: "/search"
}, {
  title: "bikeselector_size_title",
  component: Mf,
  path: "/size"
}, {
  title: "bikeselector_confirm_title",
  component: Of,
  path: "/confirm"
}, {
  title: "bikeselector_browse_title",
  component: If,
  path: "/browse"
}, {
  title: "virtualworkshop_title",
  component: Rf,
  path: "/workshop"
}, {
  title: "virtualworkshop_title",
  component: F1,
  path: "/bom"
}, {
  title: "virtualworkshop_title",
  component: N1,
  path: "/part"
}, {
  title: "virtualworkshop_title",
  component: R1,
  path: "/update"
}, {
  title: "virtualworkshop_title",
  component: W1,
  path: "/settings"
}, {
  title: "virtualworkshop_bom_title",
  component: Y1,
  path: "/read-only"
}, {
  title: "Virtual Workshop — Quick Guide",
  component: Q1,
  path: "/quick-guide"
}], Xn = ho.map((r) => r.path), lc = (r) => {
  let e;
  const t = Xn.indexOf(r.path), i = ho[t], n = Xn.slice(1, 5).indexOf(i.path);
  t && (e = Xn[t - 1]), r.previous === "/" && r.path === "/browse" && (e = "/"), r.previous === "/" && r.path === "/workshop" && (e = "/"), r.path === "/settings" && (e = "/bom"), r.path === "/quick-guide" && (e = "/settings"), ot.value = {
    title: i.title,
    step: n > -1 ? n : void 0,
    back: e
  };
};
function e0() {
  const e = ct(() => ho.reduce((t, i) => (t[i.path] = i.component, t), {}), [])[Bs.value];
  return U(() => {
    lc({
      path: "/"
    });
  }, []), p(e, {});
}
const go = `@import"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-2{right:-8px}.-top-2{top:-8px}.bottom-0{bottom:0}.bottom-10{bottom:40px}.bottom-14{bottom:56px}.bottom-4{bottom:16px}.bottom-6{bottom:24px}.bottom-\\[128px\\]{bottom:128px}.bottom-\\[72px\\]{bottom:72px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:16px}.right-0{right:0}.right-3{right:12px}.right-4{right:16px}.right-5{right:20px}.top-0{top:0}.top-1\\/2{top:50%}.top-4{top:16px}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-\\[2147483645\\]{z-index:2147483645}.z-\\[2147483646\\]{z-index:2147483646}.\\!my-0{margin-top:0!important;margin-bottom:0!important}.-mx-8{margin-left:-32px;margin-right:-32px}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:4px;margin-bottom:4px}.my-5{margin-top:20px;margin-bottom:20px}.my-6{margin-top:24px;margin-bottom:24px}.my-\\[2px\\]{margin-top:2px;margin-bottom:2px}.my-px{margin-top:1px;margin-bottom:1px}.\\!ml-0{margin-left:0!important}.\\!ml-auto{margin-left:auto!important}.-mb-3{margin-bottom:-12px}.-mt-2{margin-top:-8px}.-mt-5{margin-top:-20px}.mb-4{margin-bottom:16px}.mb-6{margin-bottom:24px}.mb-8{margin-bottom:32px}.ml-2{margin-left:8px}.ml-\\[105px\\]{margin-left:105px}.ml-auto{margin-left:auto}.mr-\\[6px\\]{margin-right:6px}.mt-1{margin-top:4px}.mt-2{margin-top:8px}.mt-4{margin-top:16px}.mt-6{margin-top:24px}.mt-8{margin-top:32px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-0{height:0px}.h-10{height:40px}.h-2{height:8px}.h-20{height:80px}.h-3{height:12px}.h-32{height:128px}.h-4{height:16px}.h-40{height:160px}.h-5{height:20px}.h-6{height:24px}.h-7{height:28px}.h-8{height:32px}.h-9{height:36px}.h-\\[10px\\]{height:10px}.h-\\[18px\\]{height:18px}.h-\\[1px\\]{height:1px}.h-\\[26px\\]{height:26px}.h-\\[6px\\]{height:6px}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-36{max-height:144px}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.w-1\\/2{width:50%}.w-10{width:40px}.w-2{width:8px}.w-3{width:12px}.w-4{width:16px}.w-5{width:20px}.w-6{width:24px}.w-7{width:28px}.w-8{width:32px}.w-9{width:36px}.w-\\[100px\\]{width:100px}.w-\\[25px\\]{width:25px}.w-\\[37\\.5px\\]{width:37.5px}.w-\\[48px\\]{width:48px}.w-\\[93px\\]{width:93px}.w-\\[calc\\(100\\%_\\+_64px\\)\\]{width:calc(100% + 64px)}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.min-w-0{min-width:0px}.max-w-\\[220px\\]{max-width:220px}.max-w-full{max-width:100%}.max-w-lg{max-width:512px}.max-w-sm{max-width:384px}.flex-none{flex:none}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[20\\%\\]{--tw-translate-x: -20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-px{--tw-translate-x: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/3{--tw-translate-y: -33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/3{--tw-translate-x: 33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-px{--tw-translate-x: 1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-125{--tw-scale-x: 1.25;--tw-scale-y: 1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-center{scroll-snap-align:center}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:4px}.gap-2{gap:8px}.gap-3{gap:12px}.gap-4{gap:16px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(8px * var(--tw-space-x-reverse));margin-left:calc(8px * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(8px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(8px * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(12px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(12px * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(16px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(16px * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(20px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(20px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-nowrap{text-wrap:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-xl{border-radius:12px}.rounded-b-lg{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.rounded-t-3xl{border-top-left-radius:24px;border-top-right-radius:24px}.rounded-t-xl{border-top-left-radius:12px;border-top-right-radius:12px}.border{border-width:1px}.border-b-0{border-bottom-width:0px}.border-amber-500{--tw-border-opacity: 1;border-color:rgb(245 158 11 / var(--tw-border-opacity))}.border-emerald-500{--tw-border-opacity: 1;border-color:rgb(16 185 129 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-gray-950{--tw-border-opacity: 1;border-color:rgb(3 7 18 / var(--tw-border-opacity))}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity))}.bg-amber-500{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-black\\/40{background-color:#0006}.bg-emerald-50{--tw-bg-opacity: 1;background-color:rgb(236 253 245 / var(--tw-bg-opacity))}.bg-emerald-500{--tw-bg-opacity: 1;background-color:rgb(16 185 129 / var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-400\\/50{background-color:#9ca3af80}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-950{--tw-bg-opacity: 1;background-color:rgb(3 7 18 / var(--tw-bg-opacity))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/75{background-color:#ffffffbf}.p-0{padding:0}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.px-4{padding-left:16px;padding-right:16px}.px-8{padding-left:32px;padding-right:32px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.\\!pr-8{padding-right:32px!important}.pl-1{padding-left:4px}.pl-3{padding-left:12px}.pr-3{padding-right:12px}.pr-5{padding-right:20px}.pr-6{padding-right:24px}.pt-4{padding-top:16px}.text-center{text-align:center}.text-start{text-align:start}.font-nunito{font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-base{font-size:16px;line-height:24px}.text-lg{font-size:18px;line-height:28px}.text-sm{font-size:14px;line-height:20px}.text-xl{font-size:20px;line-height:28px}.text-xs{font-size:12px;line-height:16px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.lowercase{text-transform:lowercase}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-\\[18px\\]{line-height:18px}.leading-\\[22px\\]{line-height:22px}.leading-tight{line-height:1.25}.text-amber-500{--tw-text-opacity: 1;color:rgb(245 158 11 / var(--tw-text-opacity))}.text-amber-950{--tw-text-opacity: 1;color:rgb(69 26 3 / var(--tw-text-opacity))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-emerald-500{--tw-text-opacity: 1;color:rgb(16 185 129 / var(--tw-text-opacity))}.text-emerald-950{--tw-text-opacity: 1;color:rgb(2 44 34 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-950{--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-950{--tw-text-opacity: 1;color:rgb(69 10 10 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-30{opacity:.3}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_-2px_10px_0px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\,0px_0px_0px_1px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\]{--tw-shadow: 0px -2px 10px 0px rgba(0,0,0,.04),0px 0px 0px 1px rgba(0,0,0,.06);--tw-shadow-colored: 0px -2px 10px 0px var(--tw-shadow-color), 0px 0px 0px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.bike-matrix-container{width:100%}@media (min-width: 640px){.bike-matrix-container{max-width:640px}}@media (min-width: 768px){.bike-matrix-container{max-width:768px}}@media (min-width: 1024px){.bike-matrix-container{max-width:1024px}}@media (min-width: 1280px){.bike-matrix-container{max-width:1280px}}@media (min-width: 1536px){.bike-matrix-container{max-width:1536px}}:root,:host{all:initial!important;font-size:16px!important;width:100%}input,select,button{outline:2px solid transparent;outline-offset:2px}h1,h2,h3,h4,h5,h6,label,button{margin-top:0;margin-bottom:0;font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h1,h2,h3,h4,h5,h6{font-weight:700;--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}h1,h2,h3,h4,h5,h6,label,button,p,a,div{font-family:Nunito,sans-serif}select{appearance:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}select::-ms-expand{display:none}.loader{border-radius:100%;border-top:4px solid rgba(3,7,18,.2);border-right:4px solid rgba(3,7,18,.2);border-bottom:4px solid rgba(3,7,18,.2);border-left:4px solid rgb(3,7,18)}*::-webkit-scrollbar{height:12px;width:12px}*::-webkit-scrollbar-track{border-radius:12px;margin-block:8px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:active{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb{border-radius:8px;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb:hover{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}@media not all and (min-width: 640px){*::-webkit-scrollbar{display:none}.modal-content{-ms-overflow-style:none;scrollbar-width:none}}@media only screen and (max-width: 450px){.compatibility-label-container .status{padding:7px 2px}}.bike_matrix-checkbox{height:14px;width:14px}input[type=checkbox]{margin-top:3px}input[type=checkbox]:checked{accent-color:#000}.placeholder\\:text-gray-700::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.placeholder\\:text-gray-700::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-inset-x-px:after{content:var(--tw-content);left:-1px;right:-1px}.after\\:-top-6:after{content:var(--tw-content);top:-24px}.after\\:bottom-0:after{content:var(--tw-content);bottom:0}.after\\:bg-gradient-to-t:after{content:var(--tw-content);background-image:linear-gradient(to top,var(--tw-gradient-stops))}.after\\:from-white:after{content:var(--tw-content);--tw-gradient-from: #fff var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:to-transparent:after{content:var(--tw-content);--tw-gradient-to: transparent var(--tw-gradient-to-position)}.disabled\\:border-gray-200:disabled{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.disabled\\:bg-gray-100:disabled{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.disabled\\:text-gray-400:disabled{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.group:disabled .group-disabled\\:border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.group:disabled .group-disabled\\:bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.group:disabled .group-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.peer:disabled~.peer-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media not all and (min-width: 640px){.max-sm\\:absolute{position:absolute}.max-sm\\:inset-0{top:0;right:0;bottom:0;left:0}.max-sm\\:h-\\[89vh\\]{height:89vh}.max-sm\\:max-h-\\[96\\%\\]{max-height:96%}.max-sm\\:flex-1{flex:1 1 0%}.max-sm\\:flex-none{flex:none}.max-sm\\:grow{flex-grow:1}}@media (max-width: 426px){.max-\\[426px\\]\\:w-\\[21px\\]{width:21px}.max-\\[426px\\]\\:w-\\[38px\\]{width:38px}.max-\\[426px\\]\\:text-xs{font-size:12px;line-height:16px}}@media (min-width: 640px){.sm\\:mt-8{margin-top:32px}.sm\\:hidden{display:none}.sm\\:h-full{height:100%}.sm\\:max-h-\\[90\\%\\]{max-height:90%}.sm\\:max-w-\\[640px\\]{max-width:640px}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:justify-center{justify-content:center}.sm\\:rounded-xl{border-radius:12px}.sm\\:px-2{padding-left:8px;padding-right:8px}.sm\\:px-6{padding-left:24px;padding-right:24px}}.\\[\\&\\>path\\]\\:stroke-\\[2px\\]>path{stroke-width:2px}.\\[\\&\\>span\\]\\:font-normal>span{font-weight:400}.\\[\\&\\>span\\]\\:text-gray-500>span{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}
`;
function t0() {
  return U(() => {
    const r = document.createElement("link");
    r.type = "text/css", r.rel = "stylesheet", r.href = "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap", document.head.appendChild(r);
  }, []), p(j, {
    children: [p("style", {
      type: "text/css",
      children: go
    }), p(xf, {
      children: [p("div", {
        onClick: Pr,
        style: {
          right: "-36px",
          top: "-24px"
        },
        class: "w-7 h-7 z-10 flex items-center justify-center absolute bg-white text-gray-800 rounded-full cursor-pointer",
        children: p(gi, {
          class: "h-3 w-3"
        })
      }), p(Af, {
        children: p(Pf, {
          children: p(e0, {})
        })
      })]
    })]
  });
}
const r0 = (r) => /* @__PURE__ */ V("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 500, zoomAndPan: "magnify", viewBox: "0 0 375 374.999991", height: 500, preserveAspectRatio: "xMidYMid meet", ...r }, /* @__PURE__ */ V("path", { fill: "#000000", d: "M 151.4375 131.65625 L 210.511719 259.050781 C 210.511719 252.984375 210.105469 242.875 210.105469 230.335938 L 197.160156 117.5 C 168.835938 117.90625 151.4375 131.65625 151.4375 131.65625 Z M 225.484375 117.097656 C 218.605469 116.691406 212.128906 116.691406 206.464844 117.097656 L 212.941406 181.804688 C 214.960938 160.773438 219.007812 138.125 225.484375 117.097656 Z M 80.222656 227.101562 C 90.746094 230.335938 101.265625 233.976562 113 238.425781 C 113 238.425781 146.988281 255.816406 173.285156 266.734375 L 104.097656 179.78125 C 93.980469 194.746094 86.292969 211.328125 80.222656 227.101562 Z M 35.714844 287.363281 C 37.738281 276.441406 40.167969 265.117188 43.808594 254.601562 C 34.90625 252.984375 26.003906 251.773438 17.507812 250.960938 C 21.957031 263.90625 28.433594 276.039062 35.714844 287.363281 Z M 195.945312 276.039062 C 195.945312 276.039062 204.441406 278.867188 208.488281 274.417969 L 142.535156 138.125 C 131.207031 146.621094 121.089844 156.324219 112.1875 167.648438 L 191.898438 274.417969 C 193.519531 275.230469 194.730469 275.632812 195.945312 276.039062 Z M 365.480469 146.214844 C 359.816406 122.351562 349.296875 100.109375 335.539062 81.101562 C 343.632812 101.726562 352.128906 124.375 358.199219 140.148438 C 360.625 141.765625 363.457031 144.191406 365.480469 146.214844 Z M 356.175781 170.886719 C 339.179688 157.539062 322.996094 147.023438 307.214844 138.933594 L 244.90625 157.539062 L 232.363281 189.085938 C 230.339844 208.902344 228.71875 233.976562 230.339844 254.601562 C 230.339844 254.601562 233.980469 294.640625 219.414062 299.496094 C 219.414062 299.496094 203.632812 314.863281 163.574219 295.855469 C 163.574219 295.855469 121.898438 274.015625 70.109375 260.265625 C 62.015625 291 59.992188 314.457031 59.992188 316.480469 C 92.363281 349.644531 138.085938 369.867188 188.257812 369.867188 C 288.605469 369.867188 370.335938 288.171875 370.335938 187.871094 C 370.335938 185.847656 370.335938 183.828125 370.335938 181.804688 C 363.054688 183.019531 356.175781 170.886719 356.175781 170.886719 Z M 233.980469 95.257812 C 237.621094 86.761719 242.476562 78.675781 247.332031 71.394531 C 247.332031 71.394531 261.089844 49.960938 281.726562 31.761719 C 254.617188 15.582031 222.246094 5.875 188.257812 5.875 C 87.507812 5.875 6.179688 87.570312 6.179688 187.871094 C 6.179688 197.578125 6.988281 206.476562 8.203125 215.371094 C 22.363281 215.777344 38.144531 217.394531 55.542969 220.628906 C 66.0625 195.152344 75.773438 177.761719 75.773438 177.761719 C 75.773438 177.761719 124.328125 87.976562 233.980469 95.257812 Z M 236.8125 147.429688 L 240.453125 146.214844 L 250.972656 120.332031 C 248.546875 119.925781 246.925781 119.523438 244.5 119.117188 C 241.261719 127.609375 238.429688 137.316406 236.8125 147.429688 Z M 259.066406 121.949219 L 250.164062 143.789062 L 292.648438 132.867188 C 281.320312 128.015625 269.992188 124.375 259.066406 121.949219 Z M 272.015625 76.25 C 266.347656 82.71875 260.683594 90 255.425781 98.085938 C 275.65625 101.726562 293.054688 106.582031 308.027344 112.242188 Z M 340.800781 128.015625 L 314.902344 57.238281 C 311.261719 53.601562 307.621094 50.363281 303.980469 47.128906 C 295.886719 52.792969 287.390625 59.667969 278.894531 68.160156 L 323.804688 119.117188 C 330.28125 122.351562 336.347656 125.589844 340.800781 128.015625 Z M 340.800781 128.015625 ", fillOpacity: 1, fillRule: "nonzero" }));
function i0({
  "data-sku": r,
  "data-padding-top": e,
  "data-padding-bottom": t
}) {
  var _, y;
  const i = window.BikeMatrix, n = i.getConfig(), [s, o] = R({}), [a, l] = R(!1), [u, c] = R({
    compatible: "",
    warning: ""
  }), {
    t: d
  } = te(), [h, f] = R(!1), b = r || n.sku, [v, w] = R(null);
  if (r === "*")
    return n.logLevel === "verbose" && console.log("Early return as prouduct is blacklisted"), p(j, {});
  if (((_ = n.productCollections) == null ? void 0 : _.length) === 0 || !n.productCollections || Z.value && !n.productCollections.some((k) => {
    var A;
    return (A = Z.value) == null ? void 0 : A.compatibleCollections.some((C) => C.handle === k);
  }))
    return n.logLevel === "verbose" && console.log("No product collection available"), p(j, {});
  n.internalLink && w(n.internalLink);
  const m = ct(() => Qe.value || h, [Qe.value, h]), g = !!i.getActiveSubscription(), x = async () => {
    var A, C, D, S, B, E, T;
    if (f(!0), c({
      compatible: "",
      warning: ""
    }), l(!1), n.logLevel === "verbose" && (console.log("ProductResult updateCompatibility config: " + JSON.stringify(n)), console.log("ProductResult updateCompatibility BikeSignal.value: " + JSON.stringify(Z.value))), Z.value) {
      for (let M = 0; M < n.productCollections.length; M++)
        if (!((C = (A = Z.value) == null ? void 0 : A.compatibleCollections) != null && C.error) && ((S = (D = Z.value) == null ? void 0 : D.compatibleCollections) != null && S.find((F) => F.handle === n.productCollections[M]))) {
          l(!0);
          break;
        }
    } else
      for (let M = 0; M < n.productCollections.length; M++)
        if ((B = n == null ? void 0 : n.collections) != null && B.map((F) => F.handle).includes(n == null ? void 0 : n.productCollections[M])) {
          l(!0);
          break;
        }
    if (Z.value) {
      if (b == "") {
        o({
          type: "unavailable",
          ...ii.unavailable
        }), f(!1);
        return;
      }
      var k = ((E = jt()) == null ? void 0 : E.language) || "en-GB";
      const F = await new Se(n.apiUrl, n.apiKey, n.apiToken, n.isShopify).checkSkuCompatibility((T = Z.value) == null ? void 0 : T.key, b, k, "ProductResult", n.currentCollectionHandle);
      if (f(!1), !F.success) {
        n.logLevel === "verbose" && console.error(F.logError), o({
          type: "unavailable",
          ...ii.unavailable
        });
        return;
      }
      const $ = (F == null ? void 0 : F.data.compatible) === null ? "unavailable" : F.data.warning ? "warning" : F != null && F.data.compatible ? "compatible" : "incompatible";
      c({
        warning: F.data.warningMessage,
        compatible: F.data.compatibilityMessage
      }), o({
        type: $,
        ...ii[$]
      });
    } else
      f(!1), o({
        type: "check",
        ...ii.check
      });
  };
  return U(() => {
    x();
  }, [Z.value, b]), U(() => (document.addEventListener("RefreshCompatibility", x), () => {
    document.removeEventListener("RefreshCompatibility", x);
  }), []), !g || !m && !(s != null && s.type) || !a ? p(j, {}) : p(j, {
    children: [p("style", {
      type: "text/css",
      children: go
    }), p("div", {
      class: "flex flex-col relative w-full mx-auto",
      style: {
        marginTop: `${e}px`,
        marginBottom: `${t}px`
      },
      children: [p("div", {
        // todo: check if there's any state that we don't want it to toggle and then remove the check
        onClick: (k) => {
          k.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
            bubbles: !0,
            composed: !0
          }));
        },
        class: X("rounded-lg relative z-20 border overflow-hidden w-full flex cursor-pointer", m ? "bg-gray-100 border-gray-300 text-gray-950" : {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          check: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[s.type]),
        children: m ? p("span", {
          class: "loader self-center animate-spin justify-self-center justify-center w-9 my-5 mx-auto h-9",
          style: {
            borderWidth: "6px"
          }
        }) : p(j, {
          children: [p("div", {
            class: "relative z-10 h-auto items-center justify-center flex",
            children: [p(fo, {
              class: X("self-start h-full w-[93px]", {
                unavailable: "text-gray-950",
                check: "text-gray-950",
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-500"
              }[s.type])
            }), p(po, {
              class: "h-[26px] absolute -translate-x-1/4"
            })]
          }), p("div", {
            class: "flex flex-col pl-3 pr-6 py-[6px] min-w-0",
            children: [p("p", {
              class: "text-lg font-semibold",
              children: d(s == null ? void 0 : s.heading_code)
            }), p("p", {
              class: "flex w-full text-sm leading-[22px] font-normal",
              children: p("span", {
                class: "truncate",
                children: s != null && s.details_code ? d(s == null ? void 0 : s.details_code) : (y = Z.value) == null ? void 0 : y.name
              })
            })]
          })]
        })
      }), p("div", {
        class: "z-10 bg-gray-100 w-full -mt-2 pt-4 flex border justify-between flex-wrap gap-1 border-gray-300 rounded-b-lg p-3 py-2",
        children: [s.type !== "incompatible" && p("div", {
          class: "space-y-2 my-[2px]",
          children: [!!(u != null && u.compatible) && p("p", {
            class: "text-sm flex",
            children: [p(Ir, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
            }), " ", u.compatible]
          }), !!u.warning && p("p", {
            class: "text-sm flex",
            children: [p(Rr, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
            }), " ", u.warning]
          })]
        }), p("a", {
          class: "flex text-xs self-end font-semibold items-center underline ml-auto",
          href: v || "https://bikematrix.io/landed-it",
          target: "_blank",
          children: [d("bikematrix_poweredby"), " ", p(r0, {
            class: "w-5 h-5 ml-2"
          })]
        })]
      }), !m && p(s.icon, {
        class: "absolute top-0 z-30 right-0 w-6 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  });
}
const n0 = `.wrapper{position:relative}.bm_collection_result{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.4rem;position:relative;margin-left:auto;margin-right:auto;font-size:14px;text-align:left;height:100%;line-height:1.3em}.bm_collection_result_iconLabel{display:inline-block;position:relative}.bm_collection_result_link{text-align:right;font-weight:500;font-size:.6em;margin-top:1px;text-decoration:underline;color:#000}.bm_collection_result_link:visited{color:#000}.bm_collection_result p{display:inline;padding:1px;margin:0;color:#000}.bm_collection_result_icon{padding:0 .1rem 0 0;position:absolute;left:-24px;top:-.25rem}.bm-hidden{display:none}.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`, Ra = {
  unavailable: {
    icon: Es,
    heading: "",
    code: ""
  },
  compatible: {
    icon: Ir,
    heading: "Compatible",
    code: "compatible"
  },
  warning: {
    icon: Rr,
    heading: "Compatible",
    code: "compatible"
  },
  incompatible: {
    icon: dn,
    heading: "Not Compatible",
    code: "not_compatible"
  }
};
function uc({
  "data-type": r
}) {
  var i;
  const e = Ra[r], {
    t
  } = te();
  return e ? p(j, {
    children: [p("style", {
      type: "text/css",
      children: go
    }), p("div", {
      class: "flex z-0 flex-col relative  w-full mx-auto compatibility-label-container max-w-[220px]",
      children: [p("div", {
        class: X("rounded-lg relative z-20 border overflow-hidden w-full flex", {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[r]),
        children: [p("div", {
          class: "relative z-10 h-auto items-center justify-center flex",
          children: [p(fo, {
            class: X("self-start h-full w-[48px] max-[426px]:w-[38px]", {
              unavailable: "text-gray-950",
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-500"
            }[r])
          }), p(po, {
            class: "h-[18px] max-[426px]:w-[21px] w-[25px] absolute -translate-x-[20%]"
          })]
        }), p("div", {
          class: "status flex flex-col p-2 pl-1 w-full",
          children: p("p", {
            class: "max-[426px]:text-xs text-sm font-semibold p-0 leading-[18px] text-center",
            children: t((i = Ra[r]) == null ? void 0 : i.code)
          })
        })]
      }), p(e.icon, {
        class: "absolute top-0 z-30 right-0 w-4 h-4 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  }) : p(j, {});
}
const gr = {
  unavailable: {
    heading: ""
  },
  compatible: {
    heading: "Compatible"
  },
  incompatible: {
    heading: "Not Compatible"
  },
  warning: {
    heading: "Compatible - Check Notes"
  }
};
let Ke = {
  type: "unavailable",
  heading: ""
};
const s0 = async (r, e, t, i) => {
  var l;
  if (!t || !((l = _r.value) != null && l.length)) {
    Ke = {
      type: "unavailable",
      ...gr.unavailable
    };
    return;
  }
  let n = [];
  for (const u of t.split(",").filter((c) => !!c)) {
    const c = _r.value.find((d) => d.sku === u.trim());
    n.push(c);
  }
  const s = n.some((u) => (u == null ? void 0 : u.compatible) === !0 && !(u != null && u.warning)), o = n.some((u) => (u == null ? void 0 : u.compatible) === !0 && (u == null ? void 0 : u.warning)), a = n.some((u) => (u == null ? void 0 : u.compatible) === !1);
  s ? Ke = {
    type: "compatible",
    ...gr.compatible
  } : o ? Ke = {
    type: "warning",
    ...gr.warning
  } : a ? Ke = {
    type: "incompatible",
    ...gr.incompatible
  } : Ke = {
    type: "unavailable",
    ...gr.unavailable
  }, i === "verbose" && console.log("checkCollectionResult prodcutId: " + e + " bikeKey: " + r + " sku: " + t + " status: " + Ke.type);
}, o0 = function(r, e, t, i, n, s, o) {
  var l;
  const a = window.BikeMatrix.getConfig();
  if (r || e) {
    if ((r && t || e && i) && a.productsCollections[s]) {
      for (let u = 0; u < a.productsCollections[s].length; u++)
        if (a.collections.map((c) => c.handle).includes(a.productsCollections[s][u]))
          return !0;
    }
  } else
    return n ? !1 : !!Z.value && !Z.value.compatibleCollections.error && ((l = Z.value.compatibleCollections) == null ? void 0 : l.find((c) => c.handle === o));
  return !1;
};
function a0({
  "data-product-id": r,
  "data-product-skus": e,
  "data-product-barcodes": t,
  "data-product-metafields": i
}) {
  const n = window.BikeMatrix, s = n.getConfig(), [o, a] = R(!1), l = !!n.getActiveSubscription();
  Ke = {
    type: "unavailable",
    ...gr.unavailable
  };
  const {
    currentCollectionHandle: u,
    isHomePage: c,
    isSearchPage: d,
    showSearchPageCollection: h,
    showHomePageCollection: f,
    logLevel: b,
    skuField: v
  } = s, w = !!s.pageType && s.pageType === "product", m = v === "barcode" ? t : v === "metafield" ? i : e || "";
  return b === "verbose" && (console.log("CollectionResult currentCollectionHandle: ", u), console.log("CollectionResult skuField: ", v), console.log("CollectionResult productId: ", r), console.log("CollectionResult skusToCheck: ", m), console.log("CollectionResult BikeSignal.value: " + JSON.stringify(Z.value))), Qe.value ? a(!0) : Z.value && o0(c, d, f, h, w, r, u) ? s0(Z.value.key, r, m, s.logLevel).then(() => {
    a(!0);
  }) : a(!1), b === "verbose" && console.log("CollectionResult status: ", Ke), p(j, {
    children: l && o && p(j, {
      children: [p("style", {
        type: "text/css",
        children: n0
      }), p("div", {
        class: "bm_collection_result bm-wrapper",
        children: [p("div", {
          class: "lds-ring",
          id: "bm-loading-spinner",
          style: Qe.value ? "" : "display: none",
          children: [p("div", {}), p("div", {}), p("div", {}), p("div", {})]
        }), !Qe.value && (Ke == null ? void 0 : Ke.type) !== "unavailable" && p(uc, {
          "data-type": Ke.type
        })]
      })]
    })
  });
}
const l0 = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.bm-compatible-products-wrapper{display:block;width:100%;border-top:.5px solid lightgrey;border-bottom:.5px solid lightgrey;margin-top:10px}.bm-compatible-products-title>div{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none;display:flex;align-items:center;justify-content:space-between;padding:8px 0}.bm-compatible-products-title>div>span{font-weight:700}.bm-compatible-products-title svg{height:24px;width:24px;transition:transform .3s linear}.bm-compatible-products-title div.active svg{transform:rotate(180deg)}.bm-compatible-products-list{width:100%;max-width:100%;display:none;overflow:hidden}.bm-compatible-products-list ul{display:grid;gap:20px;grid-template-columns:repeat(4,minmax(0,1fr));padding:0;list-style:none}@media only screen and (max-width: 1000px){.bm-compatible-products-list ul{grid-template-columns:repeat(3,minmax(0,1fr))}}@media only screen and (max-width: 600px){.bm-compatible-products-list ul{gap:10px;grid-template-columns:repeat(2,minmax(0,1fr))}}.bm-compatible-products-list ul li{width:100%;display:flex}.bm-compatible-product-wrapper{display:block;width:100%;border:1px solid lightgrey;padding:5px;display:flex;flex-flow:column;flex:1}.bm-compatible-product-image{display:block;width:100%;max-width:100%;line-height:1;padding-top:100%;position:relative;margin-bottom:5px;overflow:hidden}.bm-compatible-product-image a,.bm-compatible-product-image a:hover,.bm-compatible-product-image a:focus{display:block;width:100%;max-width:100%;outline:none;text-decoration:none;width:auto;height:auto;line-height:1;border:none;border-radius:0}.bm-compatible-product-image img{display:inline-block;vertical-align:top;width:100%;max-width:100%;height:auto;line-height:1;position:absolute;left:0;right:0;bottom:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;top:50%;transform:translateY(-50%)}.bm-compatible-product-title{text-align:center;margin:0 0 1em;display:flex;flex-flow:column;flex:1}.bm-compatible-product-title a,.bm-compatible-product-title a:hover,.bm-compatible-product-title a:focus{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none}.bm-compatible-product-price{text-align:center;margin:0 0 1em}.bm-compatible-product-price p{font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;color:rgb(var(--text-color));padding:0;margin:0}.bm-compatible-product-price p strong{font-size:1.2em}.bm-compatible-product-compatibility{text-align:center;margin:0 .25em 1em}@media only screen and (max-width: 450px){.bm-compatible-product-compatibility{margin:0 0 1em}}.bm_result_link{justify-content:center;text-align:right;text-decoration:underline;font-size:12px;padding:10px 0}.bm_result_link a{text-align:right;font-weight:700;margin-top:10px;color:#000}
`;
var pn = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
pn.exports;
(function(r, e) {
  (function(t) {
    var i = e, n = r && r.exports == i && r, s = typeof An == "object" && An;
    (s.global === s || s.window === s) && (t = s);
    var o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, a = /[\x01-\x7F]/g, l = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, u = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, c = { "­": "shy", "‌": "zwnj", "‍": "zwj", "‎": "lrm", "⁣": "ic", "⁢": "it", "⁡": "af", "‏": "rlm", "​": "ZeroWidthSpace", "⁠": "NoBreak", "̑": "DownBreve", "⃛": "tdot", "⃜": "DotDot", "	": "Tab", "\n": "NewLine", " ": "puncsp", " ": "MediumSpace", " ": "thinsp", " ": "hairsp", " ": "emsp13", " ": "ensp", " ": "emsp14", " ": "emsp", " ": "numsp", " ": "nbsp", "  ": "ThickSpace", "‾": "oline", _: "lowbar", "‐": "dash", "–": "ndash", "—": "mdash", "―": "horbar", ",": "comma", ";": "semi", "⁏": "bsemi", ":": "colon", "⩴": "Colone", "!": "excl", "¡": "iexcl", "?": "quest", "¿": "iquest", ".": "period", "‥": "nldr", "…": "mldr", "·": "middot", "'": "apos", "‘": "lsquo", "’": "rsquo", "‚": "sbquo", "‹": "lsaquo", "›": "rsaquo", '"': "quot", "“": "ldquo", "”": "rdquo", "„": "bdquo", "«": "laquo", "»": "raquo", "(": "lpar", ")": "rpar", "[": "lsqb", "]": "rsqb", "{": "lcub", "}": "rcub", "⌈": "lceil", "⌉": "rceil", "⌊": "lfloor", "⌋": "rfloor", "⦅": "lopar", "⦆": "ropar", "⦋": "lbrke", "⦌": "rbrke", "⦍": "lbrkslu", "⦎": "rbrksld", "⦏": "lbrksld", "⦐": "rbrkslu", "⦑": "langd", "⦒": "rangd", "⦓": "lparlt", "⦔": "rpargt", "⦕": "gtlPar", "⦖": "ltrPar", "⟦": "lobrk", "⟧": "robrk", "⟨": "lang", "⟩": "rang", "⟪": "Lang", "⟫": "Rang", "⟬": "loang", "⟭": "roang", "❲": "lbbrk", "❳": "rbbrk", "‖": "Vert", "§": "sect", "¶": "para", "@": "commat", "*": "ast", "/": "sol", undefined: null, "&": "amp", "#": "num", "%": "percnt", "‰": "permil", "‱": "pertenk", "†": "dagger", "‡": "Dagger", "•": "bull", "⁃": "hybull", "′": "prime", "″": "Prime", "‴": "tprime", "⁗": "qprime", "‵": "bprime", "⁁": "caret", "`": "grave", "´": "acute", "˜": "tilde", "^": "Hat", "¯": "macr", "˘": "breve", "˙": "dot", "¨": "die", "˚": "ring", "˝": "dblac", "¸": "cedil", "˛": "ogon", "ˆ": "circ", "ˇ": "caron", "°": "deg", "©": "copy", "®": "reg", "℗": "copysr", "℘": "wp", "℞": "rx", "℧": "mho", "℩": "iiota", "←": "larr", "↚": "nlarr", "→": "rarr", "↛": "nrarr", "↑": "uarr", "↓": "darr", "↔": "harr", "↮": "nharr", "↕": "varr", "↖": "nwarr", "↗": "nearr", "↘": "searr", "↙": "swarr", "↝": "rarrw", "↝̸": "nrarrw", "↞": "Larr", "↟": "Uarr", "↠": "Rarr", "↡": "Darr", "↢": "larrtl", "↣": "rarrtl", "↤": "mapstoleft", "↥": "mapstoup", "↦": "map", "↧": "mapstodown", "↩": "larrhk", "↪": "rarrhk", "↫": "larrlp", "↬": "rarrlp", "↭": "harrw", "↰": "lsh", "↱": "rsh", "↲": "ldsh", "↳": "rdsh", "↵": "crarr", "↶": "cularr", "↷": "curarr", "↺": "olarr", "↻": "orarr", "↼": "lharu", "↽": "lhard", "↾": "uharr", "↿": "uharl", "⇀": "rharu", "⇁": "rhard", "⇂": "dharr", "⇃": "dharl", "⇄": "rlarr", "⇅": "udarr", "⇆": "lrarr", "⇇": "llarr", "⇈": "uuarr", "⇉": "rrarr", "⇊": "ddarr", "⇋": "lrhar", "⇌": "rlhar", "⇐": "lArr", "⇍": "nlArr", "⇑": "uArr", "⇒": "rArr", "⇏": "nrArr", "⇓": "dArr", "⇔": "iff", "⇎": "nhArr", "⇕": "vArr", "⇖": "nwArr", "⇗": "neArr", "⇘": "seArr", "⇙": "swArr", "⇚": "lAarr", "⇛": "rAarr", "⇝": "zigrarr", "⇤": "larrb", "⇥": "rarrb", "⇵": "duarr", "⇽": "loarr", "⇾": "roarr", "⇿": "hoarr", "∀": "forall", "∁": "comp", "∂": "part", "∂̸": "npart", "∃": "exist", "∄": "nexist", "∅": "empty", "∇": "Del", "∈": "in", "∉": "notin", "∋": "ni", "∌": "notni", "϶": "bepsi", "∏": "prod", "∐": "coprod", "∑": "sum", "+": "plus", "±": "pm", "÷": "div", "×": "times", "<": "lt", "≮": "nlt", "<⃒": "nvlt", "=": "equals", "≠": "ne", "=⃥": "bne", "⩵": "Equal", ">": "gt", "≯": "ngt", ">⃒": "nvgt", "¬": "not", "|": "vert", "¦": "brvbar", "−": "minus", "∓": "mp", "∔": "plusdo", "⁄": "frasl", "∖": "setmn", "∗": "lowast", "∘": "compfn", "√": "Sqrt", "∝": "prop", "∞": "infin", "∟": "angrt", "∠": "ang", "∠⃒": "nang", "∡": "angmsd", "∢": "angsph", "∣": "mid", "∤": "nmid", "∥": "par", "∦": "npar", "∧": "and", "∨": "or", "∩": "cap", "∩︀": "caps", "∪": "cup", "∪︀": "cups", "∫": "int", "∬": "Int", "∭": "tint", "⨌": "qint", "∮": "oint", "∯": "Conint", "∰": "Cconint", "∱": "cwint", "∲": "cwconint", "∳": "awconint", "∴": "there4", "∵": "becaus", "∶": "ratio", "∷": "Colon", "∸": "minusd", "∺": "mDDot", "∻": "homtht", "∼": "sim", "≁": "nsim", "∼⃒": "nvsim", "∽": "bsim", "∽̱": "race", "∾": "ac", "∾̳": "acE", "∿": "acd", "≀": "wr", "≂": "esim", "≂̸": "nesim", "≃": "sime", "≄": "nsime", "≅": "cong", "≇": "ncong", "≆": "simne", "≈": "ap", "≉": "nap", "≊": "ape", "≋": "apid", "≋̸": "napid", "≌": "bcong", "≍": "CupCap", "≭": "NotCupCap", "≍⃒": "nvap", "≎": "bump", "≎̸": "nbump", "≏": "bumpe", "≏̸": "nbumpe", "≐": "doteq", "≐̸": "nedot", "≑": "eDot", "≒": "efDot", "≓": "erDot", "≔": "colone", "≕": "ecolon", "≖": "ecir", "≗": "cire", "≙": "wedgeq", "≚": "veeeq", "≜": "trie", "≟": "equest", "≡": "equiv", "≢": "nequiv", "≡⃥": "bnequiv", "≤": "le", "≰": "nle", "≤⃒": "nvle", "≥": "ge", "≱": "nge", "≥⃒": "nvge", "≦": "lE", "≦̸": "nlE", "≧": "gE", "≧̸": "ngE", "≨︀": "lvnE", "≨": "lnE", "≩": "gnE", "≩︀": "gvnE", "≪": "ll", "≪̸": "nLtv", "≪⃒": "nLt", "≫": "gg", "≫̸": "nGtv", "≫⃒": "nGt", "≬": "twixt", "≲": "lsim", "≴": "nlsim", "≳": "gsim", "≵": "ngsim", "≶": "lg", "≸": "ntlg", "≷": "gl", "≹": "ntgl", "≺": "pr", "⊀": "npr", "≻": "sc", "⊁": "nsc", "≼": "prcue", "⋠": "nprcue", "≽": "sccue", "⋡": "nsccue", "≾": "prsim", "≿": "scsim", "≿̸": "NotSucceedsTilde", "⊂": "sub", "⊄": "nsub", "⊂⃒": "vnsub", "⊃": "sup", "⊅": "nsup", "⊃⃒": "vnsup", "⊆": "sube", "⊈": "nsube", "⊇": "supe", "⊉": "nsupe", "⊊︀": "vsubne", "⊊": "subne", "⊋︀": "vsupne", "⊋": "supne", "⊍": "cupdot", "⊎": "uplus", "⊏": "sqsub", "⊏̸": "NotSquareSubset", "⊐": "sqsup", "⊐̸": "NotSquareSuperset", "⊑": "sqsube", "⋢": "nsqsube", "⊒": "sqsupe", "⋣": "nsqsupe", "⊓": "sqcap", "⊓︀": "sqcaps", "⊔": "sqcup", "⊔︀": "sqcups", "⊕": "oplus", "⊖": "ominus", "⊗": "otimes", "⊘": "osol", "⊙": "odot", "⊚": "ocir", "⊛": "oast", "⊝": "odash", "⊞": "plusb", "⊟": "minusb", "⊠": "timesb", "⊡": "sdotb", "⊢": "vdash", "⊬": "nvdash", "⊣": "dashv", "⊤": "top", "⊥": "bot", "⊧": "models", "⊨": "vDash", "⊭": "nvDash", "⊩": "Vdash", "⊮": "nVdash", "⊪": "Vvdash", "⊫": "VDash", "⊯": "nVDash", "⊰": "prurel", "⊲": "vltri", "⋪": "nltri", "⊳": "vrtri", "⋫": "nrtri", "⊴": "ltrie", "⋬": "nltrie", "⊴⃒": "nvltrie", "⊵": "rtrie", "⋭": "nrtrie", "⊵⃒": "nvrtrie", "⊶": "origof", "⊷": "imof", "⊸": "mumap", "⊹": "hercon", "⊺": "intcal", "⊻": "veebar", "⊽": "barvee", "⊾": "angrtvb", "⊿": "lrtri", "⋀": "Wedge", "⋁": "Vee", "⋂": "xcap", "⋃": "xcup", "⋄": "diam", "⋅": "sdot", "⋆": "Star", "⋇": "divonx", "⋈": "bowtie", "⋉": "ltimes", "⋊": "rtimes", "⋋": "lthree", "⋌": "rthree", "⋍": "bsime", "⋎": "cuvee", "⋏": "cuwed", "⋐": "Sub", "⋑": "Sup", "⋒": "Cap", "⋓": "Cup", "⋔": "fork", "⋕": "epar", "⋖": "ltdot", "⋗": "gtdot", "⋘": "Ll", "⋘̸": "nLl", "⋙": "Gg", "⋙̸": "nGg", "⋚︀": "lesg", "⋚": "leg", "⋛": "gel", "⋛︀": "gesl", "⋞": "cuepr", "⋟": "cuesc", "⋦": "lnsim", "⋧": "gnsim", "⋨": "prnsim", "⋩": "scnsim", "⋮": "vellip", "⋯": "ctdot", "⋰": "utdot", "⋱": "dtdot", "⋲": "disin", "⋳": "isinsv", "⋴": "isins", "⋵": "isindot", "⋵̸": "notindot", "⋶": "notinvc", "⋷": "notinvb", "⋹": "isinE", "⋹̸": "notinE", "⋺": "nisd", "⋻": "xnis", "⋼": "nis", "⋽": "notnivc", "⋾": "notnivb", "⌅": "barwed", "⌆": "Barwed", "⌌": "drcrop", "⌍": "dlcrop", "⌎": "urcrop", "⌏": "ulcrop", "⌐": "bnot", "⌒": "profline", "⌓": "profsurf", "⌕": "telrec", "⌖": "target", "⌜": "ulcorn", "⌝": "urcorn", "⌞": "dlcorn", "⌟": "drcorn", "⌢": "frown", "⌣": "smile", "⌭": "cylcty", "⌮": "profalar", "⌶": "topbot", "⌽": "ovbar", "⌿": "solbar", "⍼": "angzarr", "⎰": "lmoust", "⎱": "rmoust", "⎴": "tbrk", "⎵": "bbrk", "⎶": "bbrktbrk", "⏜": "OverParenthesis", "⏝": "UnderParenthesis", "⏞": "OverBrace", "⏟": "UnderBrace", "⏢": "trpezium", "⏧": "elinters", "␣": "blank", "─": "boxh", "│": "boxv", "┌": "boxdr", "┐": "boxdl", "└": "boxur", "┘": "boxul", "├": "boxvr", "┤": "boxvl", "┬": "boxhd", "┴": "boxhu", "┼": "boxvh", "═": "boxH", "║": "boxV", "╒": "boxdR", "╓": "boxDr", "╔": "boxDR", "╕": "boxdL", "╖": "boxDl", "╗": "boxDL", "╘": "boxuR", "╙": "boxUr", "╚": "boxUR", "╛": "boxuL", "╜": "boxUl", "╝": "boxUL", "╞": "boxvR", "╟": "boxVr", "╠": "boxVR", "╡": "boxvL", "╢": "boxVl", "╣": "boxVL", "╤": "boxHd", "╥": "boxhD", "╦": "boxHD", "╧": "boxHu", "╨": "boxhU", "╩": "boxHU", "╪": "boxvH", "╫": "boxVh", "╬": "boxVH", "▀": "uhblk", "▄": "lhblk", "█": "block", "░": "blk14", "▒": "blk12", "▓": "blk34", "□": "squ", "▪": "squf", "▫": "EmptyVerySmallSquare", "▭": "rect", "▮": "marker", "▱": "fltns", "△": "xutri", "▴": "utrif", "▵": "utri", "▸": "rtrif", "▹": "rtri", "▽": "xdtri", "▾": "dtrif", "▿": "dtri", "◂": "ltrif", "◃": "ltri", "◊": "loz", "○": "cir", "◬": "tridot", "◯": "xcirc", "◸": "ultri", "◹": "urtri", "◺": "lltri", "◻": "EmptySmallSquare", "◼": "FilledSmallSquare", "★": "starf", "☆": "star", "☎": "phone", "♀": "female", "♂": "male", "♠": "spades", "♣": "clubs", "♥": "hearts", "♦": "diams", "♪": "sung", "✓": "check", "✗": "cross", "✠": "malt", "✶": "sext", "❘": "VerticalSeparator", "⟈": "bsolhsub", "⟉": "suphsol", "⟵": "xlarr", "⟶": "xrarr", "⟷": "xharr", "⟸": "xlArr", "⟹": "xrArr", "⟺": "xhArr", "⟼": "xmap", "⟿": "dzigrarr", "⤂": "nvlArr", "⤃": "nvrArr", "⤄": "nvHarr", "⤅": "Map", "⤌": "lbarr", "⤍": "rbarr", "⤎": "lBarr", "⤏": "rBarr", "⤐": "RBarr", "⤑": "DDotrahd", "⤒": "UpArrowBar", "⤓": "DownArrowBar", "⤖": "Rarrtl", "⤙": "latail", "⤚": "ratail", "⤛": "lAtail", "⤜": "rAtail", "⤝": "larrfs", "⤞": "rarrfs", "⤟": "larrbfs", "⤠": "rarrbfs", "⤣": "nwarhk", "⤤": "nearhk", "⤥": "searhk", "⤦": "swarhk", "⤧": "nwnear", "⤨": "toea", "⤩": "tosa", "⤪": "swnwar", "⤳": "rarrc", "⤳̸": "nrarrc", "⤵": "cudarrr", "⤶": "ldca", "⤷": "rdca", "⤸": "cudarrl", "⤹": "larrpl", "⤼": "curarrm", "⤽": "cularrp", "⥅": "rarrpl", "⥈": "harrcir", "⥉": "Uarrocir", "⥊": "lurdshar", "⥋": "ldrushar", "⥎": "LeftRightVector", "⥏": "RightUpDownVector", "⥐": "DownLeftRightVector", "⥑": "LeftUpDownVector", "⥒": "LeftVectorBar", "⥓": "RightVectorBar", "⥔": "RightUpVectorBar", "⥕": "RightDownVectorBar", "⥖": "DownLeftVectorBar", "⥗": "DownRightVectorBar", "⥘": "LeftUpVectorBar", "⥙": "LeftDownVectorBar", "⥚": "LeftTeeVector", "⥛": "RightTeeVector", "⥜": "RightUpTeeVector", "⥝": "RightDownTeeVector", "⥞": "DownLeftTeeVector", "⥟": "DownRightTeeVector", "⥠": "LeftUpTeeVector", "⥡": "LeftDownTeeVector", "⥢": "lHar", "⥣": "uHar", "⥤": "rHar", "⥥": "dHar", "⥦": "luruhar", "⥧": "ldrdhar", "⥨": "ruluhar", "⥩": "rdldhar", "⥪": "lharul", "⥫": "llhard", "⥬": "rharul", "⥭": "lrhard", "⥮": "udhar", "⥯": "duhar", "⥰": "RoundImplies", "⥱": "erarr", "⥲": "simrarr", "⥳": "larrsim", "⥴": "rarrsim", "⥵": "rarrap", "⥶": "ltlarr", "⥸": "gtrarr", "⥹": "subrarr", "⥻": "suplarr", "⥼": "lfisht", "⥽": "rfisht", "⥾": "ufisht", "⥿": "dfisht", "⦚": "vzigzag", "⦜": "vangrt", "⦝": "angrtvbd", "⦤": "ange", "⦥": "range", "⦦": "dwangle", "⦧": "uwangle", "⦨": "angmsdaa", "⦩": "angmsdab", "⦪": "angmsdac", "⦫": "angmsdad", "⦬": "angmsdae", "⦭": "angmsdaf", "⦮": "angmsdag", "⦯": "angmsdah", "⦰": "bemptyv", "⦱": "demptyv", "⦲": "cemptyv", "⦳": "raemptyv", "⦴": "laemptyv", "⦵": "ohbar", "⦶": "omid", "⦷": "opar", "⦹": "operp", "⦻": "olcross", "⦼": "odsold", "⦾": "olcir", "⦿": "ofcir", "⧀": "olt", "⧁": "ogt", "⧂": "cirscir", "⧃": "cirE", "⧄": "solb", "⧅": "bsolb", "⧉": "boxbox", "⧍": "trisb", "⧎": "rtriltri", "⧏": "LeftTriangleBar", "⧏̸": "NotLeftTriangleBar", "⧐": "RightTriangleBar", "⧐̸": "NotRightTriangleBar", "⧜": "iinfin", "⧝": "infintie", "⧞": "nvinfin", "⧣": "eparsl", "⧤": "smeparsl", "⧥": "eqvparsl", "⧫": "lozf", "⧴": "RuleDelayed", "⧶": "dsol", "⨀": "xodot", "⨁": "xoplus", "⨂": "xotime", "⨄": "xuplus", "⨆": "xsqcup", "⨍": "fpartint", "⨐": "cirfnint", "⨑": "awint", "⨒": "rppolint", "⨓": "scpolint", "⨔": "npolint", "⨕": "pointint", "⨖": "quatint", "⨗": "intlarhk", "⨢": "pluscir", "⨣": "plusacir", "⨤": "simplus", "⨥": "plusdu", "⨦": "plussim", "⨧": "plustwo", "⨩": "mcomma", "⨪": "minusdu", "⨭": "loplus", "⨮": "roplus", "⨯": "Cross", "⨰": "timesd", "⨱": "timesbar", "⨳": "smashp", "⨴": "lotimes", "⨵": "rotimes", "⨶": "otimesas", "⨷": "Otimes", "⨸": "odiv", "⨹": "triplus", "⨺": "triminus", "⨻": "tritime", "⨼": "iprod", "⨿": "amalg", "⩀": "capdot", "⩂": "ncup", "⩃": "ncap", "⩄": "capand", "⩅": "cupor", "⩆": "cupcap", "⩇": "capcup", "⩈": "cupbrcap", "⩉": "capbrcup", "⩊": "cupcup", "⩋": "capcap", "⩌": "ccups", "⩍": "ccaps", "⩐": "ccupssm", "⩓": "And", "⩔": "Or", "⩕": "andand", "⩖": "oror", "⩗": "orslope", "⩘": "andslope", "⩚": "andv", "⩛": "orv", "⩜": "andd", "⩝": "ord", "⩟": "wedbar", "⩦": "sdote", "⩪": "simdot", "⩭": "congdot", "⩭̸": "ncongdot", "⩮": "easter", "⩯": "apacir", "⩰": "apE", "⩰̸": "napE", "⩱": "eplus", "⩲": "pluse", "⩳": "Esim", "⩷": "eDDot", "⩸": "equivDD", "⩹": "ltcir", "⩺": "gtcir", "⩻": "ltquest", "⩼": "gtquest", "⩽": "les", "⩽̸": "nles", "⩾": "ges", "⩾̸": "nges", "⩿": "lesdot", "⪀": "gesdot", "⪁": "lesdoto", "⪂": "gesdoto", "⪃": "lesdotor", "⪄": "gesdotol", "⪅": "lap", "⪆": "gap", "⪇": "lne", "⪈": "gne", "⪉": "lnap", "⪊": "gnap", "⪋": "lEg", "⪌": "gEl", "⪍": "lsime", "⪎": "gsime", "⪏": "lsimg", "⪐": "gsiml", "⪑": "lgE", "⪒": "glE", "⪓": "lesges", "⪔": "gesles", "⪕": "els", "⪖": "egs", "⪗": "elsdot", "⪘": "egsdot", "⪙": "el", "⪚": "eg", "⪝": "siml", "⪞": "simg", "⪟": "simlE", "⪠": "simgE", "⪡": "LessLess", "⪡̸": "NotNestedLessLess", "⪢": "GreaterGreater", "⪢̸": "NotNestedGreaterGreater", "⪤": "glj", "⪥": "gla", "⪦": "ltcc", "⪧": "gtcc", "⪨": "lescc", "⪩": "gescc", "⪪": "smt", "⪫": "lat", "⪬": "smte", "⪬︀": "smtes", "⪭": "late", "⪭︀": "lates", "⪮": "bumpE", "⪯": "pre", "⪯̸": "npre", "⪰": "sce", "⪰̸": "nsce", "⪳": "prE", "⪴": "scE", "⪵": "prnE", "⪶": "scnE", "⪷": "prap", "⪸": "scap", "⪹": "prnap", "⪺": "scnap", "⪻": "Pr", "⪼": "Sc", "⪽": "subdot", "⪾": "supdot", "⪿": "subplus", "⫀": "supplus", "⫁": "submult", "⫂": "supmult", "⫃": "subedot", "⫄": "supedot", "⫅": "subE", "⫅̸": "nsubE", "⫆": "supE", "⫆̸": "nsupE", "⫇": "subsim", "⫈": "supsim", "⫋︀": "vsubnE", "⫋": "subnE", "⫌︀": "vsupnE", "⫌": "supnE", "⫏": "csub", "⫐": "csup", "⫑": "csube", "⫒": "csupe", "⫓": "subsup", "⫔": "supsub", "⫕": "subsub", "⫖": "supsup", "⫗": "suphsub", "⫘": "supdsub", "⫙": "forkv", "⫚": "topfork", "⫛": "mlcp", "⫤": "Dashv", "⫦": "Vdashl", "⫧": "Barv", "⫨": "vBar", "⫩": "vBarv", "⫫": "Vbar", "⫬": "Not", "⫭": "bNot", "⫮": "rnmid", "⫯": "cirmid", "⫰": "midcir", "⫱": "topcir", "⫲": "nhpar", "⫳": "parsim", "⫽": "parsl", "⫽⃥": "nparsl", "♭": "flat", "♮": "natur", "♯": "sharp", "¤": "curren", "¢": "cent", $: "dollar", "£": "pound", "¥": "yen", "€": "euro", "¹": "sup1", "½": "half", "⅓": "frac13", "¼": "frac14", "⅕": "frac15", "⅙": "frac16", "⅛": "frac18", "²": "sup2", "⅔": "frac23", "⅖": "frac25", "³": "sup3", "¾": "frac34", "⅗": "frac35", "⅜": "frac38", "⅘": "frac45", "⅚": "frac56", "⅝": "frac58", "⅞": "frac78", "𝒶": "ascr", "𝕒": "aopf", "𝔞": "afr", "𝔸": "Aopf", "𝔄": "Afr", "𝒜": "Ascr", ª: "ordf", á: "aacute", Á: "Aacute", à: "agrave", À: "Agrave", ă: "abreve", Ă: "Abreve", â: "acirc", Â: "Acirc", å: "aring", Å: "angst", ä: "auml", Ä: "Auml", ã: "atilde", Ã: "Atilde", ą: "aogon", Ą: "Aogon", ā: "amacr", Ā: "Amacr", æ: "aelig", Æ: "AElig", "𝒷": "bscr", "𝕓": "bopf", "𝔟": "bfr", "𝔹": "Bopf", ℬ: "Bscr", "𝔅": "Bfr", "𝔠": "cfr", "𝒸": "cscr", "𝕔": "copf", ℭ: "Cfr", "𝒞": "Cscr", ℂ: "Copf", ć: "cacute", Ć: "Cacute", ĉ: "ccirc", Ĉ: "Ccirc", č: "ccaron", Č: "Ccaron", ċ: "cdot", Ċ: "Cdot", ç: "ccedil", Ç: "Ccedil", "℅": "incare", "𝔡": "dfr", "ⅆ": "dd", "𝕕": "dopf", "𝒹": "dscr", "𝒟": "Dscr", "𝔇": "Dfr", "ⅅ": "DD", "𝔻": "Dopf", ď: "dcaron", Ď: "Dcaron", đ: "dstrok", Đ: "Dstrok", ð: "eth", Ð: "ETH", "ⅇ": "ee", ℯ: "escr", "𝔢": "efr", "𝕖": "eopf", ℰ: "Escr", "𝔈": "Efr", "𝔼": "Eopf", é: "eacute", É: "Eacute", è: "egrave", È: "Egrave", ê: "ecirc", Ê: "Ecirc", ě: "ecaron", Ě: "Ecaron", ë: "euml", Ë: "Euml", ė: "edot", Ė: "Edot", ę: "eogon", Ę: "Eogon", ē: "emacr", Ē: "Emacr", "𝔣": "ffr", "𝕗": "fopf", "𝒻": "fscr", "𝔉": "Ffr", "𝔽": "Fopf", ℱ: "Fscr", ﬀ: "fflig", ﬃ: "ffilig", ﬄ: "ffllig", ﬁ: "filig", fj: "fjlig", ﬂ: "fllig", ƒ: "fnof", ℊ: "gscr", "𝕘": "gopf", "𝔤": "gfr", "𝒢": "Gscr", "𝔾": "Gopf", "𝔊": "Gfr", ǵ: "gacute", ğ: "gbreve", Ğ: "Gbreve", ĝ: "gcirc", Ĝ: "Gcirc", ġ: "gdot", Ġ: "Gdot", Ģ: "Gcedil", "𝔥": "hfr", ℎ: "planckh", "𝒽": "hscr", "𝕙": "hopf", ℋ: "Hscr", ℌ: "Hfr", ℍ: "Hopf", ĥ: "hcirc", Ĥ: "Hcirc", ℏ: "hbar", ħ: "hstrok", Ħ: "Hstrok", "𝕚": "iopf", "𝔦": "ifr", "𝒾": "iscr", "ⅈ": "ii", "𝕀": "Iopf", ℐ: "Iscr", ℑ: "Im", í: "iacute", Í: "Iacute", ì: "igrave", Ì: "Igrave", î: "icirc", Î: "Icirc", ï: "iuml", Ï: "Iuml", ĩ: "itilde", Ĩ: "Itilde", İ: "Idot", į: "iogon", Į: "Iogon", ī: "imacr", Ī: "Imacr", ĳ: "ijlig", Ĳ: "IJlig", ı: "imath", "𝒿": "jscr", "𝕛": "jopf", "𝔧": "jfr", "𝒥": "Jscr", "𝔍": "Jfr", "𝕁": "Jopf", ĵ: "jcirc", Ĵ: "Jcirc", "ȷ": "jmath", "𝕜": "kopf", "𝓀": "kscr", "𝔨": "kfr", "𝒦": "Kscr", "𝕂": "Kopf", "𝔎": "Kfr", ķ: "kcedil", Ķ: "Kcedil", "𝔩": "lfr", "𝓁": "lscr", ℓ: "ell", "𝕝": "lopf", ℒ: "Lscr", "𝔏": "Lfr", "𝕃": "Lopf", ĺ: "lacute", Ĺ: "Lacute", ľ: "lcaron", Ľ: "Lcaron", ļ: "lcedil", Ļ: "Lcedil", ł: "lstrok", Ł: "Lstrok", ŀ: "lmidot", Ŀ: "Lmidot", "𝔪": "mfr", "𝕞": "mopf", "𝓂": "mscr", "𝔐": "Mfr", "𝕄": "Mopf", ℳ: "Mscr", "𝔫": "nfr", "𝕟": "nopf", "𝓃": "nscr", ℕ: "Nopf", "𝒩": "Nscr", "𝔑": "Nfr", ń: "nacute", Ń: "Nacute", ň: "ncaron", Ň: "Ncaron", ñ: "ntilde", Ñ: "Ntilde", ņ: "ncedil", Ņ: "Ncedil", "№": "numero", ŋ: "eng", Ŋ: "ENG", "𝕠": "oopf", "𝔬": "ofr", ℴ: "oscr", "𝒪": "Oscr", "𝔒": "Ofr", "𝕆": "Oopf", º: "ordm", ó: "oacute", Ó: "Oacute", ò: "ograve", Ò: "Ograve", ô: "ocirc", Ô: "Ocirc", ö: "ouml", Ö: "Ouml", ő: "odblac", Ő: "Odblac", õ: "otilde", Õ: "Otilde", ø: "oslash", Ø: "Oslash", ō: "omacr", Ō: "Omacr", œ: "oelig", Œ: "OElig", "𝔭": "pfr", "𝓅": "pscr", "𝕡": "popf", ℙ: "Popf", "𝔓": "Pfr", "𝒫": "Pscr", "𝕢": "qopf", "𝔮": "qfr", "𝓆": "qscr", "𝒬": "Qscr", "𝔔": "Qfr", ℚ: "Qopf", ĸ: "kgreen", "𝔯": "rfr", "𝕣": "ropf", "𝓇": "rscr", ℛ: "Rscr", ℜ: "Re", ℝ: "Ropf", ŕ: "racute", Ŕ: "Racute", ř: "rcaron", Ř: "Rcaron", ŗ: "rcedil", Ŗ: "Rcedil", "𝕤": "sopf", "𝓈": "sscr", "𝔰": "sfr", "𝕊": "Sopf", "𝔖": "Sfr", "𝒮": "Sscr", "Ⓢ": "oS", ś: "sacute", Ś: "Sacute", ŝ: "scirc", Ŝ: "Scirc", š: "scaron", Š: "Scaron", ş: "scedil", Ş: "Scedil", ß: "szlig", "𝔱": "tfr", "𝓉": "tscr", "𝕥": "topf", "𝒯": "Tscr", "𝔗": "Tfr", "𝕋": "Topf", ť: "tcaron", Ť: "Tcaron", ţ: "tcedil", Ţ: "Tcedil", "™": "trade", ŧ: "tstrok", Ŧ: "Tstrok", "𝓊": "uscr", "𝕦": "uopf", "𝔲": "ufr", "𝕌": "Uopf", "𝔘": "Ufr", "𝒰": "Uscr", ú: "uacute", Ú: "Uacute", ù: "ugrave", Ù: "Ugrave", ŭ: "ubreve", Ŭ: "Ubreve", û: "ucirc", Û: "Ucirc", ů: "uring", Ů: "Uring", ü: "uuml", Ü: "Uuml", ű: "udblac", Ű: "Udblac", ũ: "utilde", Ũ: "Utilde", ų: "uogon", Ų: "Uogon", ū: "umacr", Ū: "Umacr", "𝔳": "vfr", "𝕧": "vopf", "𝓋": "vscr", "𝔙": "Vfr", "𝕍": "Vopf", "𝒱": "Vscr", "𝕨": "wopf", "𝓌": "wscr", "𝔴": "wfr", "𝒲": "Wscr", "𝕎": "Wopf", "𝔚": "Wfr", ŵ: "wcirc", Ŵ: "Wcirc", "𝔵": "xfr", "𝓍": "xscr", "𝕩": "xopf", "𝕏": "Xopf", "𝔛": "Xfr", "𝒳": "Xscr", "𝔶": "yfr", "𝓎": "yscr", "𝕪": "yopf", "𝒴": "Yscr", "𝔜": "Yfr", "𝕐": "Yopf", ý: "yacute", Ý: "Yacute", ŷ: "ycirc", Ŷ: "Ycirc", ÿ: "yuml", Ÿ: "Yuml", "𝓏": "zscr", "𝔷": "zfr", "𝕫": "zopf", ℨ: "Zfr", ℤ: "Zopf", "𝒵": "Zscr", ź: "zacute", Ź: "Zacute", ž: "zcaron", Ž: "Zcaron", ż: "zdot", Ż: "Zdot", Ƶ: "imped", þ: "thorn", Þ: "THORN", ŉ: "napos", α: "alpha", Α: "Alpha", β: "beta", Β: "Beta", γ: "gamma", Γ: "Gamma", δ: "delta", Δ: "Delta", ε: "epsi", "ϵ": "epsiv", Ε: "Epsilon", ϝ: "gammad", Ϝ: "Gammad", ζ: "zeta", Ζ: "Zeta", η: "eta", Η: "Eta", θ: "theta", ϑ: "thetav", Θ: "Theta", ι: "iota", Ι: "Iota", κ: "kappa", ϰ: "kappav", Κ: "Kappa", λ: "lambda", Λ: "Lambda", μ: "mu", µ: "micro", Μ: "Mu", ν: "nu", Ν: "Nu", ξ: "xi", Ξ: "Xi", ο: "omicron", Ο: "Omicron", π: "pi", ϖ: "piv", Π: "Pi", ρ: "rho", ϱ: "rhov", Ρ: "Rho", σ: "sigma", Σ: "Sigma", ς: "sigmaf", τ: "tau", Τ: "Tau", υ: "upsi", Υ: "Upsilon", ϒ: "Upsi", φ: "phi", ϕ: "phiv", Φ: "Phi", χ: "chi", Χ: "Chi", ψ: "psi", Ψ: "Psi", ω: "omega", Ω: "ohm", а: "acy", А: "Acy", б: "bcy", Б: "Bcy", в: "vcy", В: "Vcy", г: "gcy", Г: "Gcy", ѓ: "gjcy", Ѓ: "GJcy", д: "dcy", Д: "Dcy", ђ: "djcy", Ђ: "DJcy", е: "iecy", Е: "IEcy", ё: "iocy", Ё: "IOcy", є: "jukcy", Є: "Jukcy", ж: "zhcy", Ж: "ZHcy", з: "zcy", З: "Zcy", ѕ: "dscy", Ѕ: "DScy", и: "icy", И: "Icy", і: "iukcy", І: "Iukcy", ї: "yicy", Ї: "YIcy", й: "jcy", Й: "Jcy", ј: "jsercy", Ј: "Jsercy", к: "kcy", К: "Kcy", ќ: "kjcy", Ќ: "KJcy", л: "lcy", Л: "Lcy", љ: "ljcy", Љ: "LJcy", м: "mcy", М: "Mcy", н: "ncy", Н: "Ncy", њ: "njcy", Њ: "NJcy", о: "ocy", О: "Ocy", п: "pcy", П: "Pcy", р: "rcy", Р: "Rcy", с: "scy", С: "Scy", т: "tcy", Т: "Tcy", ћ: "tshcy", Ћ: "TSHcy", у: "ucy", У: "Ucy", ў: "ubrcy", Ў: "Ubrcy", ф: "fcy", Ф: "Fcy", х: "khcy", Х: "KHcy", ц: "tscy", Ц: "TScy", ч: "chcy", Ч: "CHcy", џ: "dzcy", Џ: "DZcy", ш: "shcy", Ш: "SHcy", щ: "shchcy", Щ: "SHCHcy", ъ: "hardcy", Ъ: "HARDcy", ы: "ycy", Ы: "Ycy", ь: "softcy", Ь: "SOFTcy", э: "ecy", Э: "Ecy", ю: "yucy", Ю: "YUcy", я: "yacy", Я: "YAcy", ℵ: "aleph", ℶ: "beth", ℷ: "gimel", ℸ: "daleth" }, d = /["&'<>`]/g, h = {
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#x27;",
      "<": "&lt;",
      // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
      // following is not strictly necessary unless it’s part of a tag or an
      // unquoted attribute value. We’re only escaping it to support those
      // situations, and for XML support.
      ">": "&gt;",
      // In Internet Explorer ≤ 8, the backtick character can be used
      // to break out of (un)quoted attribute values or HTML comments.
      // See http://html5sec.org/#102, http://html5sec.org/#108, and
      // http://html5sec.org/#133.
      "`": "&#x60;"
    }, f = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, b = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, v = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, w = { aacute: "á", Aacute: "Á", abreve: "ă", Abreve: "Ă", ac: "∾", acd: "∿", acE: "∾̳", acirc: "â", Acirc: "Â", acute: "´", acy: "а", Acy: "А", aelig: "æ", AElig: "Æ", af: "⁡", afr: "𝔞", Afr: "𝔄", agrave: "à", Agrave: "À", alefsym: "ℵ", aleph: "ℵ", alpha: "α", Alpha: "Α", amacr: "ā", Amacr: "Ā", amalg: "⨿", amp: "&", AMP: "&", and: "∧", And: "⩓", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", Aogon: "Ą", aopf: "𝕒", Aopf: "𝔸", ap: "≈", apacir: "⩯", ape: "≊", apE: "⩰", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", aring: "å", Aring: "Å", ascr: "𝒶", Ascr: "𝒜", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", Bcy: "Б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", beta: "β", Beta: "Β", beth: "ℶ", between: "≬", bfr: "𝔟", Bfr: "𝔅", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bNot: "⫭", bopf: "𝕓", Bopf: "𝔹", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxhD: "╥", boxHd: "╤", boxHD: "╦", boxhu: "┴", boxhU: "╨", boxHu: "╧", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpe: "≏", bumpE: "⪮", bumpeq: "≏", Bumpeq: "≎", cacute: "ć", Cacute: "Ć", cap: "∩", Cap: "⋒", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", ccaron: "č", Ccaron: "Č", ccedil: "ç", Ccedil: "Ç", ccirc: "ĉ", Ccirc: "Ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", Cdot: "Ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", chcy: "ч", CHcy: "Ч", check: "✓", checkmark: "✓", chi: "χ", Chi: "Χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cire: "≗", cirE: "⧃", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", colone: "≔", Colone: "⩴", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", cscr: "𝒸", Cscr: "𝒞", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", Cup: "⋓", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", dArr: "⇓", Darr: "↡", dash: "‐", dashv: "⊣", Dashv: "⫤", dbkarow: "⤏", dblac: "˝", dcaron: "ď", Dcaron: "Ď", dcy: "д", Dcy: "Д", dd: "ⅆ", DD: "ⅅ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", delta: "δ", Delta: "Δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", Dfr: "𝔇", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", DJcy: "Ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", Dopf: "𝔻", dot: "˙", Dot: "¨", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", downarrow: "↓", Downarrow: "⇓", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", Dscr: "𝒟", dscy: "ѕ", DScy: "Ѕ", dsol: "⧶", dstrok: "đ", Dstrok: "Đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", DZcy: "Џ", dzigrarr: "⟿", eacute: "é", Eacute: "É", easter: "⩮", ecaron: "ě", Ecaron: "Ě", ecir: "≖", ecirc: "ê", Ecirc: "Ê", ecolon: "≕", ecy: "э", Ecy: "Э", eDDot: "⩷", edot: "ė", eDot: "≑", Edot: "Ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", Efr: "𝔈", eg: "⪚", egrave: "è", Egrave: "È", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", Emacr: "Ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", eng: "ŋ", ENG: "Ŋ", ensp: " ", eogon: "ę", Eogon: "Ę", eopf: "𝕖", Eopf: "𝔼", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", Epsilon: "Ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", esim: "≂", Esim: "⩳", eta: "η", Eta: "Η", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", fcy: "ф", Fcy: "Ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", Ffr: "𝔉", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", Fopf: "𝔽", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", gamma: "γ", Gamma: "Γ", gammad: "ϝ", Gammad: "Ϝ", gap: "⪆", gbreve: "ğ", Gbreve: "Ğ", Gcedil: "Ģ", gcirc: "ĝ", Gcirc: "Ĝ", gcy: "г", Gcy: "Г", gdot: "ġ", Gdot: "Ġ", ge: "≥", gE: "≧", gel: "⋛", gEl: "⪌", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", Gfr: "𝔊", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", GJcy: "Ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", Gopf: "𝔾", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", gscr: "ℊ", Gscr: "𝒢", gsim: "≳", gsime: "⪎", gsiml: "⪐", gt: ">", Gt: "≫", GT: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", HARDcy: "Ъ", harr: "↔", hArr: "⇔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", hcirc: "ĥ", Hcirc: "Ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", hstrok: "ħ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", iacute: "í", Iacute: "Í", ic: "⁣", icirc: "î", Icirc: "Î", icy: "и", Icy: "И", Idot: "İ", iecy: "е", IEcy: "Е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", igrave: "ì", Igrave: "Ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", IJlig: "Ĳ", Im: "ℑ", imacr: "ī", Imacr: "Ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", Int: "∬", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", iocy: "ё", IOcy: "Ё", iogon: "į", Iogon: "Į", iopf: "𝕚", Iopf: "𝕀", iota: "ι", Iota: "Ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", Itilde: "Ĩ", iukcy: "і", Iukcy: "І", iuml: "ï", Iuml: "Ï", jcirc: "ĵ", Jcirc: "Ĵ", jcy: "й", Jcy: "Й", jfr: "𝔧", Jfr: "𝔍", jmath: "ȷ", jopf: "𝕛", Jopf: "𝕁", jscr: "𝒿", Jscr: "𝒥", jsercy: "ј", Jsercy: "Ј", jukcy: "є", Jukcy: "Є", kappa: "κ", Kappa: "Κ", kappav: "ϰ", kcedil: "ķ", Kcedil: "Ķ", kcy: "к", Kcy: "К", kfr: "𝔨", Kfr: "𝔎", kgreen: "ĸ", khcy: "х", KHcy: "Х", kjcy: "ќ", KJcy: "Ќ", kopf: "𝕜", Kopf: "𝕂", kscr: "𝓀", Kscr: "𝒦", lAarr: "⇚", lacute: "ĺ", Lacute: "Ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", Lambda: "Λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larr: "←", lArr: "⇐", Larr: "↞", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", lAtail: "⤛", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", Lcaron: "Ľ", lcedil: "ļ", Lcedil: "Ļ", lceil: "⌈", lcub: "{", lcy: "л", Lcy: "Л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", leftarrow: "←", Leftarrow: "⇐", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", Leftrightarrow: "⇔", LeftRightArrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", leg: "⋚", lEg: "⪋", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", Lfr: "𝔏", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", LJcy: "Љ", ll: "≪", Ll: "⋘", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", lmidot: "ŀ", Lmidot: "Ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", Longleftarrow: "⟸", LongLeftArrow: "⟵", longleftrightarrow: "⟷", Longleftrightarrow: "⟺", LongLeftRightArrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", Longrightarrow: "⟹", LongRightArrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", Lopf: "𝕃", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", Lstrok: "Ł", lt: "<", Lt: "≪", LT: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", Map: "⤅", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", Mcy: "М", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", mfr: "𝔪", Mfr: "𝔐", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", Mopf: "𝕄", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", mu: "μ", Mu: "Μ", multimap: "⊸", mumap: "⊸", nabla: "∇", nacute: "ń", Nacute: "Ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", Ncaron: "Ň", ncedil: "ņ", Ncedil: "Ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", Ncy: "Н", ndash: "–", ne: "≠", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", nfr: "𝔫", Nfr: "𝔑", nge: "≱", ngE: "≧̸", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", ngt: "≯", nGt: "≫⃒", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", NJcy: "Њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nle: "≰", nlE: "≦̸", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nlt: "≮", nLt: "≪⃒", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", not: "¬", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrarr: "↛", nrArr: "⇏", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", Nscr: "𝒩", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsube: "⊈", nsubE: "⫅̸", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupe: "⊉", nsupE: "⫆̸", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntilde: "ñ", Ntilde: "Ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", Nu: "Ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", oacute: "ó", Oacute: "Ó", oast: "⊛", ocir: "⊚", ocirc: "ô", Ocirc: "Ô", ocy: "о", Ocy: "О", odash: "⊝", odblac: "ő", Odblac: "Ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", OElig: "Œ", ofcir: "⦿", ofr: "𝔬", Ofr: "𝔒", ogon: "˛", ograve: "ò", Ograve: "Ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", Omacr: "Ō", omega: "ω", Omega: "Ω", omicron: "ο", Omicron: "Ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", Oopf: "𝕆", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", or: "∨", Or: "⩔", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", oscr: "ℴ", Oscr: "𝒪", oslash: "ø", Oslash: "Ø", osol: "⊘", otilde: "õ", Otilde: "Õ", otimes: "⊗", Otimes: "⨷", otimesas: "⨶", ouml: "ö", Ouml: "Ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", pcy: "п", Pcy: "П", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", Pfr: "𝔓", phi: "φ", Phi: "Φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", Pi: "Π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", pr: "≺", Pr: "⪻", prap: "⪷", prcue: "≼", pre: "⪯", prE: "⪳", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", Pscr: "𝒫", psi: "ψ", Psi: "Ψ", puncsp: " ", qfr: "𝔮", Qfr: "𝔔", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", qscr: "𝓆", Qscr: "𝒬", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", racute: "ŕ", Racute: "Ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarr: "→", rArr: "⇒", Rarr: "↠", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", Rarrtl: "⤖", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", Rcaron: "Ř", rcedil: "ŗ", Rcedil: "Ŗ", rceil: "⌉", rcub: "}", rcy: "р", Rcy: "Р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", Rho: "Ρ", rhov: "ϱ", RightAngleBracket: "⟩", rightarrow: "→", Rightarrow: "⇒", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", sacute: "ś", Sacute: "Ś", sbquo: "‚", sc: "≻", Sc: "⪼", scap: "⪸", scaron: "š", Scaron: "Š", sccue: "≽", sce: "⪰", scE: "⪴", scedil: "ş", Scedil: "Ş", scirc: "ŝ", Scirc: "Ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", Scy: "С", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", Sfr: "𝔖", sfrown: "⌢", sharp: "♯", shchcy: "щ", SHCHcy: "Щ", shcy: "ш", SHcy: "Ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", sigma: "σ", Sigma: "Σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", SOFTcy: "Ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", Sopf: "𝕊", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", Sscr: "𝒮", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", Star: "⋆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", sube: "⊆", subE: "⫅", subedot: "⫃", submult: "⫁", subne: "⊊", subnE: "⫋", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup: "⊃", Sup: "⋑", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supe: "⊇", supE: "⫆", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supne: "⊋", supnE: "⫌", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", tau: "τ", Tau: "Τ", tbrk: "⎴", tcaron: "ť", Tcaron: "Ť", tcedil: "ţ", Tcedil: "Ţ", tcy: "т", Tcy: "Т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", Tfr: "𝔗", there4: "∴", therefore: "∴", Therefore: "∴", theta: "θ", Theta: "Θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", thorn: "þ", THORN: "Þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", Topf: "𝕋", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", Tscr: "𝒯", tscy: "ц", TScy: "Ц", tshcy: "ћ", TSHcy: "Ћ", tstrok: "ŧ", Tstrok: "Ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uacute: "ú", Uacute: "Ú", uarr: "↑", uArr: "⇑", Uarr: "↟", Uarrocir: "⥉", ubrcy: "ў", Ubrcy: "Ў", ubreve: "ŭ", Ubreve: "Ŭ", ucirc: "û", Ucirc: "Û", ucy: "у", Ucy: "У", udarr: "⇅", udblac: "ű", Udblac: "Ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", Ufr: "𝔘", ugrave: "ù", Ugrave: "Ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", Umacr: "Ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", uogon: "ų", Uogon: "Ų", uopf: "𝕦", Uopf: "𝕌", uparrow: "↑", Uparrow: "⇑", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", updownarrow: "↕", Updownarrow: "⇕", UpDownArrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", upsilon: "υ", Upsilon: "Υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", Uring: "Ů", urtri: "◹", uscr: "𝓊", Uscr: "𝒰", utdot: "⋰", utilde: "ũ", Utilde: "Ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uuml: "ü", Uuml: "Ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", vcy: "в", Vcy: "В", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", vee: "∨", Vee: "⋁", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", vfr: "𝔳", Vfr: "𝔙", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", Vopf: "𝕍", vprop: "∝", vrtri: "⊳", vscr: "𝓋", Vscr: "𝒱", vsubne: "⊊︀", vsubnE: "⫋︀", vsupne: "⊋︀", vsupnE: "⫌︀", Vvdash: "⊪", vzigzag: "⦚", wcirc: "ŵ", Wcirc: "Ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", wfr: "𝔴", Wfr: "𝔚", wopf: "𝕨", Wopf: "𝕎", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", Wscr: "𝒲", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", Xfr: "𝔛", xharr: "⟷", xhArr: "⟺", xi: "ξ", Xi: "Ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", Xopf: "𝕏", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", xscr: "𝓍", Xscr: "𝒳", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacute: "ý", Yacute: "Ý", yacy: "я", YAcy: "Я", ycirc: "ŷ", Ycirc: "Ŷ", ycy: "ы", Ycy: "Ы", yen: "¥", yfr: "𝔶", Yfr: "𝔜", yicy: "ї", YIcy: "Ї", yopf: "𝕪", Yopf: "𝕐", yscr: "𝓎", Yscr: "𝒴", yucy: "ю", YUcy: "Ю", yuml: "ÿ", Yuml: "Ÿ", zacute: "ź", Zacute: "Ź", zcaron: "ž", Zcaron: "Ž", zcy: "з", Zcy: "З", zdot: "ż", Zdot: "Ż", zeetrf: "ℨ", ZeroWidthSpace: "​", zeta: "ζ", Zeta: "Ζ", zfr: "𝔷", Zfr: "ℨ", zhcy: "ж", ZHcy: "Ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", zscr: "𝓏", Zscr: "𝒵", zwj: "‍", zwnj: "‌" }, m = { aacute: "á", Aacute: "Á", acirc: "â", Acirc: "Â", acute: "´", aelig: "æ", AElig: "Æ", agrave: "à", Agrave: "À", amp: "&", AMP: "&", aring: "å", Aring: "Å", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", brvbar: "¦", ccedil: "ç", Ccedil: "Ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", Eacute: "É", ecirc: "ê", Ecirc: "Ê", egrave: "è", Egrave: "È", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", iacute: "í", Iacute: "Í", icirc: "î", Icirc: "Î", iexcl: "¡", igrave: "ì", Igrave: "Ì", iquest: "¿", iuml: "ï", Iuml: "Ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", Ntilde: "Ñ", oacute: "ó", Oacute: "Ó", ocirc: "ô", Ocirc: "Ô", ograve: "ò", Ograve: "Ò", ordf: "ª", ordm: "º", oslash: "ø", Oslash: "Ø", otilde: "õ", Otilde: "Õ", ouml: "ö", Ouml: "Ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", THORN: "Þ", times: "×", uacute: "ú", Uacute: "Ú", ucirc: "û", Ucirc: "Û", ugrave: "ù", Ugrave: "Ù", uml: "¨", uuml: "ü", Uuml: "Ü", yacute: "ý", Yacute: "Ý", yen: "¥", yuml: "ÿ" }, g = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" }, x = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111], _ = String.fromCharCode, y = {}, k = y.hasOwnProperty, A = function(P, L) {
      return k.call(P, L);
    }, C = function(P, L) {
      for (var N = -1, q = P.length; ++N < q; )
        if (P[N] == L)
          return !0;
      return !1;
    }, D = function(P, L) {
      if (!P)
        return L;
      var N = {}, q;
      for (q in L)
        N[q] = A(P, q) ? P[q] : L[q];
      return N;
    }, S = function(P, L) {
      var N = "";
      return P >= 55296 && P <= 57343 || P > 1114111 ? (L && T("character reference outside the permissible Unicode range"), "�") : A(g, P) ? (L && T("disallowed character reference"), g[P]) : (L && C(x, P) && T("disallowed character reference"), P > 65535 && (P -= 65536, N += _(P >>> 10 & 1023 | 55296), P = 56320 | P & 1023), N += _(P), N);
    }, B = function(P) {
      return "&#x" + P.toString(16).toUpperCase() + ";";
    }, E = function(P) {
      return "&#" + P + ";";
    }, T = function(P) {
      throw Error("Parse error: " + P);
    }, M = function(P, L) {
      L = D(L, M.options);
      var N = L.strict;
      N && b.test(P) && T("forbidden code point");
      var q = L.encodeEverything, ie = L.useNamedReferences, ee = L.allowUnsafeSymbols, H = L.decimal ? E : B, Re = function(ue) {
        return H(ue.charCodeAt(0));
      };
      return q ? (P = P.replace(a, function(ue) {
        return ie && A(c, ue) ? "&" + c[ue] + ";" : Re(ue);
      }), ie && (P = P.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), ie && (P = P.replace(u, function(ue) {
        return "&" + c[ue] + ";";
      }))) : ie ? (ee || (P = P.replace(d, function(ue) {
        return "&" + c[ue] + ";";
      })), P = P.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), P = P.replace(u, function(ue) {
        return "&" + c[ue] + ";";
      })) : ee || (P = P.replace(d, Re)), P.replace(o, function(ue) {
        var Wt = ue.charCodeAt(0), ur = ue.charCodeAt(1), Hr = (Wt - 55296) * 1024 + ur - 56320 + 65536;
        return H(Hr);
      }).replace(l, Re);
    };
    M.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1
    };
    var F = function(P, L) {
      L = D(L, F.options);
      var N = L.strict;
      return N && f.test(P) && T("malformed character reference"), P.replace(v, function(q, ie, ee, H, Re, ue, Wt, ur, Hr) {
        var ht, ze, We, mo, Si, Ei;
        return ie ? (Si = ie, w[Si]) : ee ? (Si = ee, Ei = H, Ei && L.isAttributeValue ? (N && Ei == "=" && T("`&` did not start a character reference"), q) : (N && T(
          "named character reference was not terminated by a semicolon"
        ), m[Si] + (Ei || ""))) : Re ? (We = Re, ze = ue, N && !ze && T("character reference was not terminated by a semicolon"), ht = parseInt(We, 10), S(ht, N)) : Wt ? (mo = Wt, ze = ur, N && !ze && T("character reference was not terminated by a semicolon"), ht = parseInt(mo, 16), S(ht, N)) : (N && T(
          "named character reference was not terminated by a semicolon"
        ), q);
      });
    };
    F.options = {
      isAttributeValue: !1,
      strict: !1
    };
    var $ = function(P) {
      return P.replace(d, function(L) {
        return h[L];
      });
    }, I = {
      version: "1.2.0",
      encode: M,
      decode: F,
      escape: $,
      unescape: F
    };
    if (i && !i.nodeType)
      if (n)
        n.exports = I;
      else
        for (var O in I)
          A(I, O) && (i[O] = I[O]);
    else
      t.he = I;
  })(An);
})(pn, pn.exports);
var u0 = pn.exports;
const c0 = /* @__PURE__ */ ll(u0), Jt = {
  unknown: {
    details: "",
    details_code: ""
  },
  unavailable: {
    details: "Compatibility for this product category for your selected bike brand is coming soon!",
    details_code: "compatiblelist_unavailable"
  },
  selectbike: {
    details: "No bike selected. Click here to add your ride to check for compatible parts",
    details_code: "compatiblelist_nobikeselected"
  },
  pageone: {
    details: "All products compatible with your bike can be seen <a>here</a>.",
    details_code: "compatiblelist_pageone"
  },
  noresults: {
    details: "No compatible products found",
    details_code: "compatiblelist_noresults"
  },
  compatibleresults: {
    details: "",
    details_code: ""
  },
  error: {
    details: "Something went wrong. Sorry! Refresh and try again.",
    details_code: "compatiblelist_error"
  }
}, d0 = (r) => {
  const e = r ? [...new Set(r.split(","))] : [], i = window.BikeMatrix.getConfig(), n = [];
  return Object.entries(i.products).reduce((o, [a, l]) => (!n.includes(a) && l.skus.some((u) => !!u && e.includes(u == null ? void 0 : u.trim())) && (o.push(l), n.push(a)), o), []).sort((o, a) => o["bm-sort"] - a["bm-sort"]);
}, p0 = (r) => {
  if (!(r != null && r.length))
    return [];
  const e = r.filter((t) => t.compatible).map((t) => t.sku).join(",");
  return d0(e);
}, f0 = (r, e) => Ee.value ? {
  type: "unknown",
  ...Jt.unknown
} : r > 1 ? {
  type: "pageone",
  ...Jt.pageone
} : (e == null ? void 0 : e.length) > 0 ? {
  type: "compatibleresults",
  ...Jt.compatibleresults
} : Wi.value ? {
  type: "error",
  ...Jt.error
} : {
  type: "noresults",
  ...Jt.noresults
}, h0 = () => `
<div class="bm-compatible-product-wrapper">
  <div class="bm-compatible-product-image">
    <a href="{{productUrl}}">
      <img src="{{featuredImage}}" width="80px" alt="" loading="lazy"></img>
    </a>
  </div>
  <div class="bm-compatible-product-title">
    <a href="{{productUrl}}">{{productTitle}}</a>
  </div>
  <div class="bm-compatible-product-price">
    <a href="{{productUrl}}" style="text-decoration: none; color: #000">
      <p>
        <span>{{priceFrom}}</span>
        <strong>{{price}}</strong>
      </p>
    </a>
  </div>
  <div class="bm-compatible-product-compatibility">
    <bikematrix-compatibilitylabel data-type="compatible"></bikematrix-compatibilitylabel>
  </div>
</div>
`;
function g0({
  "data-title": r,
  "data-current-count": e,
  "data-total-count": t
}) {
  var C;
  const i = Y(null), n = window.BikeMatrix, s = n.getConfig(), [o, a] = R(!1), [l, u] = R(!0), [c, d] = R({
    type: "unknown",
    details: "",
    details_code: ""
  }), [h, f] = R([]), {
    t: b
  } = te(), [v, w] = R(""), m = !!n.getActiveSubscription(), g = s.currentCollectionHandle || "", x = s.collectionUrl || "", _ = s.compatiblityListCurrentPage || 0, y = !!s.showCompatibleList || !1, k = s.logLevel || "none", A = (D) => {
    var M, F;
    if (!(i != null && i.current))
      return null;
    const S = (F = (M = i == null ? void 0 : i.current) == null ? void 0 : M.parentElement) == null ? void 0 : F.querySelector('template[slot="product-card"]');
    k === "verbose" && console.log("CompatibleList Product Card Template: ", S);
    const T = (S ? S.innerHTML : h0()).replace(s.isShopify ? /\@\@#if\s+(\w+)\@\@(.*?)\@\@\/if\@\@/gs : /\{\{#if\s+(\w+)\}\}(.*?)\{\{\/if\}\}/gs, ($, I, O) => D[I] ? O : "").replace(s.isShopify ? /\@\@\s*(\w+)\s*\@\@/g : /\{\{\s*(\w+)\s*\}\}/g, ($, I) => {
      if (I === "compatibility")
        return '<bikematrix-compatibilitylabel data-type="compatible"></bikematrix-compatibilitylabel>';
      const O = D[I];
      return I === "productTitle" ? c0.decode(O) : O || "";
    });
    return k === "verbose" && console.log("CompatibleList Product Card: ", T), p("li", {
      dangerouslySetInnerHTML: {
        __html: T
      }
    }, D.productId);
  };
  return U(() => {
    var T, M, F;
    const D = s.collections.map(($) => $.handle) || [];
    if (!y || !D.includes(g)) {
      d({
        type: "unknown",
        ...Jt.unknown
      }), a(!1);
      return;
    }
    if (!Z.value) {
      d({
        type: "selectbike",
        ...Jt.selectbike
      }), a(!Ee.value);
      return;
    }
    let S = !0;
    if ((T = Z.value) != null && T.compatibleCollections.error || (S = (F = (M = Z.value) == null ? void 0 : M.compatibleCollections) == null ? void 0 : F.find(($) => $.handle === g)), !S) {
      a(!1);
      return;
    }
    const B = p0(xr.value).map(A);
    f(B);
    const E = f0(_, B);
    d(E), a(!0);
  }, [g, Z.value, xr.value, Ee.value, _]), U(() => {
    e === void 0 || t === void 0 || (parseInt(e) > parseInt(t) || parseInt(e) === parseInt(t) ? w(b("compatiblelist_waitstate_compatibility", {
      y: t
    })) : w(b("compatiblelist_waitstate_count", {
      x: e,
      y: t
    })));
  }, [e, t]), p(j, {
    children: m && o && p("div", {
      ref: i,
      children: [p("style", {
        type: "text/css",
        children: l0
      }), p("div", {
        class: "bike-matrix-container",
        children: p("div", {
          class: "bm-compatible-products-wrapper",
          children: [p("div", {
            class: "bm-compatible-products-title",
            children: p("div", {
              id: "bm_customAccordion",
              class: l && "active",
              onClick: () => u(!l),
              children: [p("span", {
                children: r || b("compatiblelist_header")
              }), p("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                focusable: "false",
                role: "presentation",
                class: "icon",
                children: p("path", {
                  d: "M20 8.5 12.5 16 5 8.5",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  fill: "none"
                })
              })]
            })
          }), p("div", {
            class: "bm-compatible-products-list",
            id: "bm_compatibleProductsListPanel",
            style: l ? "display: block" : "display: none",
            children: [p("div", {
              style: {
                display: Ee.value ? "flex" : "none",
                gap: "1rem"
              },
              children: [p("div", {
                class: "lds-ring",
                id: "bm-loading-spinner",
                style: Ee.value ? "" : "display: none",
                children: [p("div", {}), p("div", {}), p("div", {}), p("div", {})]
              }), !!v && v]
            }), !Ee.value && {
              error: p("p", {
                children: b(c == null ? void 0 : c.details_code)
              }),
              unknown: p("p", {
                class: "bm-compatible-products-message"
              }),
              unavailable: p("p", {
                class: "bm-compatible-products-message",
                children: b(c == null ? void 0 : c.details_code)
              }),
              selectbike: p("div", {
                onClick: (D) => {
                  D.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
                    bubbles: !0,
                    composed: !0
                  }));
                },
                style: "cursor: pointer;",
                children: p("p", {
                  class: "bm-compatible-products-message",
                  children: b(c == null ? void 0 : c.details_code)
                })
              }),
              pageone: p("p", {
                class: "bm-compatible-products-message",
                children: p("div", {
                  dangerouslySetInnerHTML: {
                    __html: (C = b(c == null ? void 0 : c.details_code)) == null ? void 0 : C.replace("<a>", "<a href='" + x + "'>")
                  }
                })
              }),
              noresults: p("p", {
                class: "bm-compatible-products-message",
                children: b(c == null ? void 0 : c.details_code)
              }),
              compatibleresults: p(j, {})
            }[c == null ? void 0 : c.type], p("ul", {
              id: "bm_compatibleProductsList",
              children: !Ee.value && (c == null ? void 0 : c.type) === "compatibleresults" && h
            }), p("div", {
              class: "bm_result_link",
              children: p("a", {
                rel: "noreferrer",
                href: "http://www.bikematrix.io/landed-it",
                target: "_blank",
                class: "link",
                children: b("bikematrix_poweredby")
              })
            })]
          })]
        })
      })]
    })
  });
}
const m0 = `.bike-selector-banner_wrapper{position:relative;height:40px}.bike-selector-banner{width:100%;height:40px;position:absolute;top:0;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-bottom:2rem}.floating{border-radius:12px;box-shadow:0 4px 4px #0000001f}.bike-selector-banner_title{color:#fff;text-transform:uppercase;padding-top:2px;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px}@media (width <= 991px){.bike-selector-banner_title{display:none}}.bike-selector-banner_title_mobile{display:none;text-transform:uppercase;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px;color:#fff;padding-top:2px}@media (width <= 991px){.bike-selector-banner_title_mobile{display:block}}.bike-selector-banner_svg{height:19px}.bike-selector-banner_icon-wrapper{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.bike-selector-banner_tick{width:12px;height:12px;position:absolute;right:6px;top:5px}
`, b0 = `.bm-button{cursor:pointer;border:none;font-weight:600}.bm-header-btn{display:inline-block;font-weight:200;background-color:#000;color:#fff;border-radius:5px;text-align:center;font-size:.75em;cursor:pointer}.bm-icon{display:inline-block;padding:6px;font-weight:200;border:none;text-align:center;font-size:.75em;background-color:transparent;height:44px;width:44px}.bm-icon svg{width:32px;height:32px}@media screen and (max-width: 991px){.bm-icon{padding:10px}.bm-icon svg{width:24px;height:24px}}.bm-bike-select-icon.show-selected,.bm-bike-select-icon.show-selected-banner{position:relative}.bm-bike-select-icon.show-selected:after{content:"";width:12px;height:12px;top:2px;right:2px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}.bm-bike-select-icon.show-selected-banner:after{content:"";width:12px;height:12px;top:6px;right:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}
`;
function cc({
  "data-color": r,
  banner: e
}) {
  const t = Z.value;
  return window.BikeMatrix.getConfig(), p(j, {
    children: [p("style", {
      type: "text/css",
      children: b0
    }), p("div", {
      className: "bm-bikon-wrapper",
      children: p("button", {
        className: `p-2 !ml-auto header__icon bm-header-btn bm-icon bm-bike-select-icon ${t && !e ? "show-selected" : t && e ? "show-selected-banner" : ""}`,
        style: {
          color: r
        },
        onClick: e ? () => {
        } : () => Pr(),
        "aria-label": "Bike Matrix Bike Selector",
        children: p("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 48 48",
          className: "w-full h-full",
          children: p("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "m35.745 12.17l-4.925 1.48l3.28 8.578a8 8 0 1 1-1.868.715l-1.648-4.31l-5.682 11.802A1 1 0 0 1 24 31h-4.062A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A.998.998 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157l8.127-4.277l-.965-2.523a1 1 0 0 1 .647-1.315l5.957-1.787l.575 1.915Zm-13.662 9.89l1.972 5.52l4.23-8.784l-6.202 3.264Zm12.983 8.297l-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714ZM17.917 29H12a1 1 0 1 0 0 2h5.917A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1Z",
            clipRule: "evenodd"
          })
        })
      })
    })]
  });
}
function v0({
  "data-title": r,
  "data-mobile-title": e,
  "data-color": t,
  "data-full-width": i,
  "data-font-color": n,
  "data-show": s
}) {
  const o = Z.value, {
    t: a
  } = te();
  if (typeof s > "u" || s !== "true" && s !== "")
    return p(j, {});
  const l = n === "black" ? "#000" : n === "white" ? "#fff" : n;
  return p(j, {
    children: [p("style", {
      type: "text/css",
      children: m0
    }), p("div", {
      onClick: () => {
        Pr();
      },
      class: "bike-selector-banner_wrapper",
      children: p("div", {
        class: `bike-selector-banner ${i === "false" ? "floating" : ""}`,
        style: {
          backgroundColor: t ?? "#000",
          maxWidth: i ?? null
        },
        children: p(j, {
          children: [p("h2", {
            class: "bike-selector-banner_title",
            style: {
              color: l
            },
            children: o ? o.brand + " " + o.frameSeries : r || a("bikeselectorbanner_title")
          }), p("h2", {
            class: "bike-selector-banner_title_mobile",
            style: {
              color: l
            },
            children: o ? o.brand : e || a("bikeselectorbanner_mobiletitle")
          }), p(cc, {
            "data-color": l,
            banner: !0
          })]
        })
      })
    })]
  });
}
const w0 = `.variant-selector-wrapper{display:flex;flex-direction:column;border-radius:8px;gap:.25rem}.title{font-size:16px;line-height:20px;font-weight:600;padding-bottom:.25rem;color:#000;display:flex;align-items:center;justify-content:space-between;gap:1rem;font-family:nunito}.indicator-wrapper{display:grid;grid-template-columns:repeat(2,minmax(10px,1fr));row-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;grid-auto-columns:auto}@media screen and (max-width: 991px){.indicator-wrapper{grid-template-columns:minmax(10px,1fr)}}.full-width{grid-template-columns:minmax(10px,1fr)}.loading-wrapper{background-color:#f3f4f6;border:1px solid rgb(209 213 219);min-height:45px;border-radius:8px;display:flex;justify-content:center;align-items:center}
`, x0 = `.alt-indicator{border-radius:8px;border:1px solid #000;background-color:#fff;color:#000;font-weight:600;font-size:14px;display:flex;justify-content:space-between;align-items:center;gap:5px;padding:10px;text-decoration:none;transition:all ease-in-out .2s;font-family:nunito}.alt-indicator:hover{transform:scale(1.01)}.alt-is-active{box-shadow:0 3px 7px #00000040;font-weight:700}.variant-title{text-wrap:nowrap;text-overflow:ellipsis;white-space:nowrap;margin:0;overflow:hidden}
`, _0 = ({
  item: r,
  clickable: e,
  currentVariant: t
}) => {
  const [i, n] = R(!1);
  U(() => {
    t === r.id ? n(!0) : n(!1);
  }, [t]);
  const s = (o) => {
    const a = new URL(window.location.href);
    return a.searchParams.set("variant", o), a.toString();
  };
  return p(j, {
    children: [p("style", {
      type: "text/css",
      children: x0
    }), p("div", {
      className: "alt-indicator-wrapper",
      children: e && p("a", {
        href: s(r.id),
        className: `alt-indicator ${i ? "alt-is-active" : ""}`,
        style: {
          borderWidth: i ? "2px" : "1px"
        },
        children: p("div", {
          className: "variant-title",
          children: r.title
        })
      })
    })]
  });
}, y0 = `.question-button{cursor:pointer;display:flex;align-items:center;position:relative;background-color:#000;justify-content:center;height:24px;width:24px;border-radius:100%}.question-popup{position:absolute;border-radius:8px;background-color:#000;top:0;right:0;height:0;width:0;overflow:hidden;opacity:0;z-index:1}.question-popup .information{padding:12px;color:#fff;width:200px;font-size:12px}
`, C0 = ({
  showall: r,
  clickable: e
}) => {
  const t = Y(null), [i, n] = R(!1), {
    t: s
  } = te(), o = () => {
    i ? i && Q.to(t.current, {
      width: 0,
      height: 0,
      opacity: 0,
      onComplete: () => n(!1)
    }) : Q.to(t.current, {
      height: "auto",
      width: "auto",
      opacity: 1,
      onComplete: () => n(!0)
    });
  };
  return p(j, {
    children: [p("style", {
      type: "text/css",
      children: y0
    }), p("div", {
      className: "question-button",
      onClick: o,
      children: [p(ac, {
        height: 12
      }), p("div", {
        className: "question-popup",
        ref: t,
        children: p("div", {
          className: "information",
          children: [!r && s("variantselector_help_text"), " ", r && s("variantselector_help_text_showall"), " ", e && s("variantselector_help_text_clickable")]
        })
      })]
    })]
  });
}, k0 = `.indicator{border-radius:8px;border:1px solid #10b981;background-color:#ecfdf5;color:#022c22;font-weight:600;font-size:14px;display:flex;justify-content:space-between;align-items:center;gap:5px;padding:10px;text-decoration:none;transition:all ease-in-out .2s;font-family:nunito}.indicator:hover{transform:scale(1.01)}.is-active{box-shadow:0 3px 7px #00000040;font-weight:700;border-width:2px}.non-clickable-indicator{display:flex;justify-content:space-between;align-items:center;border-radius:8px;padding:10px;font-weight:600;font-size:14px}.icon-wrapper{min-height:24px;min-width:24px;display:flex;align-items:center}.variant-title{text-wrap:nowrap;text-overflow:ellipsis;white-space:nowrap;margin:0;overflow:hidden}
`, D0 = ({
  item: r,
  clickable: e,
  currentVariant: t,
  override: i
}) => {
  const [n, s] = R(!1);
  U(() => {
    t === r.id ? s(!0) : s(!1);
  }, [t]);
  const o = (a) => {
    const l = new URL(window.location.href);
    return l.searchParams.set("variant", a), l.toString();
  };
  return p(j, {
    children: [p("style", {
      type: "text/css",
      children: k0
    }), (e || i) && p("a", {
      href: o(r.id),
      className: `indicator ${n ? "is-active" : ""}`,
      style: !r.warning && r.compatible ? {
        backgroundColor: "#ECFDF5",
        borderColor: "#10B981",
        borderStyle: "solid",
        color: "#022c22",
        borderWidth: n ? "2px" : "1px"
      } : r.warning && r.compatible ? {
        backgroundColor: "#FEFBEC",
        borderColor: "#FBA157",
        borderStyle: "solid",
        color: "#451a03",
        borderWidth: n ? "2px" : "1px"
      } : r.compatible === !1 ? {
        backgroundColor: "#FCF3F2",
        borderColor: "#EF4444",
        borderStyle: "solid",
        color: "#450a0a",
        borderWidth: n ? "2px" : "1px"
      } : {
        backgroundColor: "#fff",
        borderColor: "#000",
        borderStyle: "solid",
        color: "#000",
        borderWidth: n ? "2px" : "1px"
      },
      children: [p("div", {
        className: "variant-title",
        children: r.title
      }), p("div", {
        className: "icon-wrapper",
        children: r.warning && r.compatible ? p(Rr, {
          height: 23,
          width: 23
        }) : !r.warning && r.compatible ? p(Ir, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : r.compatible === !1 ? p(dn, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : p(j, {})
      })]
    }), !e && !i && p("div", {
      className: `non-clickable-indicator ${n ? "is-active" : ""}`,
      style: !r.warning && r.compatible ? {
        borderColor: "#10B981",
        borderStyle: "solid",
        color: "#022c22",
        borderWidth: n ? "2px" : "1px"
      } : r.warning && r.compatible ? {
        borderColor: "#FBA157",
        borderStyle: "solid",
        color: "#451a03",
        borderWidth: n ? "2px" : "1px"
      } : r.compatible === !1 ? {
        borderColor: "#EF4444",
        borderStyle: "solid",
        color: "#450a0a",
        borderWidth: n ? "2px" : "1px"
      } : {
        backgroundColor: "#fff",
        borderColor: "#000",
        borderStyle: "solid",
        color: "#000",
        borderWidth: n ? "2px" : "1px"
      },
      children: [p("div", {
        className: "variant-title",
        children: r.title
      }), p("div", {
        className: "icon-wrapper",
        children: r.warning && r.compatible ? p(Rr, {
          height: 23,
          width: 23
        }) : !r.warning && r.compatible ? p(Ir, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : r.compatible === !1 ? p(dn, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : p(j, {})
      })]
    })]
  });
}, A0 = ({
  data: r,
  currentVariant: e,
  title: t,
  clickable: i,
  showall: n,
  override: s,
  fullWidth: o,
  sku: a,
  error: l
}) => {
  const [u, c] = R({
    type: "loading",
    display: !0
  }), [d, h] = R([]), [f, b] = R([]), w = window.BikeMatrix.getConfig(), {
    t: m
  } = te(), g = () => {
    var k, A, C;
    c({
      type: "loading",
      display: !0
    });
    let _ = [];
    r.map((D) => {
      D.compatible && _.push(D);
    }), h(_);
    let y = [];
    (A = (k = Z.value) == null ? void 0 : k.compatibleCollections) != null && A.error || (C = Z.value) == null || C.compatibleCollections.map((D) => {
      w.productCollections.includes(D.handle) && y.push(D.handle);
    }), b(y);
  }, x = () => {
    c({
      type: "loading",
      display: !0
    }), !f.length && !d.length && !s && c({
      type: "noInformation",
      display: !1
    }), !f.length && !d.length && s && c({
      type: "generic",
      display: !0
    }), f.length && !d.length && s && c({
      type: "compatible",
      display: !0
    }), f.length && !d.length && !s && c({
      type: "noCompatible",
      display: !0
    }), f.length && d.length && c({
      type: "compatible",
      display: !0
    });
  };
  return U(() => {
    g();
  }, [Z.value, r, a]), U(() => {
    x();
  }, [Z.value, r, a, f, d]), p(j, {
    children: [p("style", {
      type: "text/css",
      children: w0
    }), u.display && p("div", {
      className: "variant-selector-wrapper",
      children: p("div", {
        className: "title",
        children: [t, p(C0, {
          clickable: i,
          showall: n
        })]
      })
    }), l && p(it, {
      messages: l,
      left: !0,
      margin: 10
    }), u.type === "loading" && u.display ? p("div", {
      className: `indicator-wrapper ${o || s ? "full-width" : ""}`,
      children: [p("div", {
        className: "loading-wrapper",
        children: p(Et, {
          isLoading: !0,
          colour: "#d1d5db"
        })
      }), p("div", {
        className: "loading-wrapper",
        children: p(Et, {
          isLoading: !0,
          colour: "#d1d5db"
        })
      })]
    }) : u.type === "generic" && u.display ? p("div", {
      className: "indicator-wrapper",
      children: r.map((_, y) => p(_0, {
        item: _,
        clickable: !0,
        currentVariant: e
      }, y))
    }) : u.type === "noCompatible" && u.display ? p("div", {
      className: "indicator-wrapper full-width",
      children: p("div", {
        className: "loading-wrapper",
        children: m("variantselector_no_compatible")
      })
    }) : u.type === "compatible" && u.display ? p("div", {
      className: `indicator-wrapper ${o || s ? "full-width" : ""}`,
      children: r.map((_, y) => {
        if (!(!_.compatible && !s && !n))
          return p(D0, {
            item: _,
            clickable: i,
            currentVariant: e,
            override: s
          }, y);
      })
    }) : u.type === "noInformation" && u.display ? p("div", {
      className: "indicator-wrapper full-width",
      children: p("div", {
        className: "loading-wrapper",
        children: m("variantselector_no_compatible_information")
      })
    }) : p(j, {})]
  });
}, S0 = ({
  "data-variants": r,
  "data-delimiter": e,
  "data-showall": t,
  "data-clickable": i,
  "data-query-param": n,
  "data-full-width": s,
  "data-title": o,
  "data-no-variants": a,
  "data-show": l,
  "data-route-variant": u,
  "data-padding-top": c,
  "data-padding-bottom": d,
  "data-override": h,
  "data-sku": f
}) => {
  var E;
  const b = Z.value, w = window.BikeMatrix.getConfig(), [m, g] = R([]), [x, _] = R(null);
  let y = ((E = jt()) == null ? void 0 : E.language) || "en-GB";
  const k = new Se(w.apiUrl, w.apiKey, w.apiToken, w.isShopify), A = f || w.sku, [C, D] = R(""), {
    t: S
  } = te(), B = async () => {
    const T = r.split("~");
    let M = [], F = [];
    if (T.map(($) => {
      let I = $.split(e || "|");
      M.push(I[0].length > 2 ? I[0] : I[2]), F.push({
        title: I[1],
        id: I[2],
        sku: I[0].length > 2 ? I[0] : I[2],
        index: parseInt(I[3])
      });
    }), b) {
      D("");
      const $ = await k.checkSkusCompatibilityWithResults(b.key, M, y, "VariantSelector", w.currentCollectionHandle);
      if (!$.success) {
        D($.error), w.logLevel === "verbose" && console.error($.logError);
        return;
      }
      let I = [];
      $.data.map((O) => {
        F.map((P) => {
          O.sku === P.sku && I.push({
            bikeKey: O.bikeKey,
            sku: O.sku,
            compatible: O.compatible,
            compatibilityMessage: O.compatibilityMessage,
            warning: O.warning,
            warningMessage: O.warningMessage,
            compatibilityLogGuid: O.compatibilityLogGuid,
            title: P.title,
            id: P.id,
            index: P.index
          });
        });
      }), g(I.sort((O, P) => O.index - P.index));
    } else {
      let $ = [];
      F.map((I) => {
        $.push({
          sku: I.sku,
          title: I.title,
          id: I.id,
          index: I.index
        });
      }), g($.sort((I, O) => I.index - O.index));
    }
  };
  return U(() => {
    B();
  }, [b, A]), U(() => {
    const M = new URLSearchParams(window.location.search).get("variant");
    if (m && u === "true" && !M) {
      for (let F = 0; F < m.length; F++)
        if (m[F].compatible) {
          const $ = new URL(window.location.href);
          $.searchParams.set("variant", m[F].id), window.location.href = $.toString();
          break;
        }
    }
    M ? _(M) : m.length && _(m[0].id);
  }, [m]), p("div", {
    style: {
      paddingTop: `${c}px`,
      paddingBottom: `${d}px`
    },
    children: a !== "true" && p(A0, {
      data: m,
      currentVariant: x,
      showall: t === "true",
      override: h === "true",
      clickable: i === "true",
      fullWidth: s === "true" || h === "true",
      title: o || S("variantselector_title"),
      sku: A,
      error: C
    })
  });
}, E0 = typeof window < "u";
function Ft(r, e, t = [], i = null) {
  yc((s) => os.value ? p(r, {
    ...s
  }) : p(j, {}), e, t, i);
}
function B0() {
  Ft(t0, "bikematrix-bikeselector", [], {
    shadow: !0
  }), Ft(i0, "bikematrix-productresult", ["data-sku"], {
    shadow: !0
  }), Ft(a0, "bikematrix-collectionresult", ["data-product-id", "data-product-skus", "data-padding-top", "data-padding-bottom"], {
    shadow: !0
  }), Ft(uc, "bikematrix-compatibilitylabel", ["data-type"], {
    shadow: !0
  }), Ft(g0, "bikematrix-compatiblelist", ["data-title", "data-current-count", "data-total-count"]), Ft(v0, "bikematrix-bikeselectorbanner", ["data-title", "data-mobile-title", "data-color", "data-full-width", "data-font-color", "data-show"], {
    shadow: !0
  }), Ft(cc, "bikematrix-bikon", ["data-color"], {
    shadow: !0
  }), Ft(S0, "bikematrix-variantselector", ["data-title", "data-variants", "data-delimiter", "data-showall", "data-clickable", "data-query-param", "data-full-width", "data-show", "data-route-variant", "data-padding-top", "data-padding-bottom", "data-override", "data-sku"], {
    shadow: !0
  });
}
function L0() {
  if (!E0)
    return null;
  const r = r2.getInstance(), e = {
    // Core instance methods
    isInitialized: () => r.isInitialized(),
    init: (t) => r.initialize(t),
    refresh: () => r.refresh(),
    destroy: () => r.destroy(),
    reload: (t = !0) => r.reload(t),
    reset: () => r.reset(),
    // Utility methods
    getConfig: () => r.getConfig(),
    getCurrentBike: () => r.getCurrentBike(),
    getActiveSubscription: () => r.getActiveSubscription(),
    updateConfig: (t) => r.updateConfig(t),
    updateSku: (t) => r.updateSku(t),
    updateCompatibleList: () => r.updateCompatibleList()
  };
  return typeof process < "u" && process.env.NODE_ENV === "development" && (e.core = r), window.BikeMatrix = e, B0(), document.currentScript && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => e.init()) : e.init()), e;
}
const T0 = L0();
export {
  T0 as default
};
