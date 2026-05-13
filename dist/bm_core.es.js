var yi, G, Wa, Ya, Nt, Do, Ka, Za, An, Pi, ii, Xa, Fs, es, ts, Ja, Ui = {}, Hi = [], Sc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ci = Array.isArray;
function lt(i, e) {
  for (var t in e)
    i[t] = e[t];
  return i;
}
function Ns(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function z(i, e, t) {
  var r, n, s, o = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? n = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? yi.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null)
    for (s in i.defaultProps)
      o[s] === void 0 && (o[s] = i.defaultProps[s]);
  return ni(i, o, r, n, null);
}
function ni(i, e, t, r, n) {
  var s = { type: i, props: e, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: n ?? ++Wa, __i: -1, __u: 0 };
  return n == null && G.vnode != null && G.vnode(s), s;
}
function Ec() {
  return { current: null };
}
function $(i) {
  return i.children;
}
function et(i, e) {
  this.props = i, this.context = e;
}
function Er(i, e) {
  if (e == null)
    return i.__ ? Er(i.__, i.__i + 1) : null;
  for (var t; e < i.__k.length; e++)
    if ((t = i.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof i.type == "function" ? Er(i) : null;
}
function Bc(i) {
  if (i.__P && i.__d) {
    var e = i.__v, t = e.__e, r = [], n = [], s = lt({}, e);
    s.__v = e.__v + 1, G.vnode && G.vnode(s), Os(i.__P, s, e, i.__n, i.__P.namespaceURI, 32 & e.__u ? [t] : null, r, t ?? Er(e), !!(32 & e.__u), n), s.__v = e.__v, s.__.__k[s.__i] = s, rl(r, s, n), e.__e = e.__ = null, s.__e != t && Qa(s);
  }
}
function Qa(i) {
  if ((i = i.__) != null && i.__c != null)
    return i.__e = i.__c.base = null, i.__k.some(function(e) {
      if (e != null && e.__e != null)
        return i.__e = i.__c.base = e.__e;
    }), Qa(i);
}
function rs(i) {
  (!i.__d && (i.__d = !0) && Nt.push(i) && !Gi.__r++ || Do != G.debounceRendering) && ((Do = G.debounceRendering) || Ka)(Gi);
}
function Gi() {
  try {
    for (var i, e = 1; Nt.length; )
      Nt.length > e && Nt.sort(Za), i = Nt.shift(), e = Nt.length, Bc(i);
  } finally {
    Nt.length = Gi.__r = 0;
  }
}
function el(i, e, t, r, n, s, o, a, l, u, c) {
  var d, h, f, v, g, w, m, b = r && r.__k || Hi, x = e.length;
  for (l = Tc(t, e, b, l, x), d = 0; d < x; d++)
    (f = t.__k[d]) != null && (h = f.__i != -1 && b[f.__i] || Ui, f.__i = d, w = Os(i, f, h, n, s, o, a, l, u, c), v = f.__e, f.ref && h.ref != f.ref && (h.ref && Ms(h.ref, null, f), c.push(f.ref, f.__c || v, f)), g == null && v != null && (g = v), (m = !!(4 & f.__u)) || h.__k === f.__k ? (l = tl(f, l, i, m), m && h.__e && (h.__e = null)) : typeof f.type == "function" && w !== void 0 ? l = w : v && (l = v.nextSibling), f.__u &= -7);
  return t.__e = g, l;
}
function Tc(i, e, t, r, n) {
  var s, o, a, l, u, c = t.length, d = c, h = 0;
  for (i.__k = new Array(n), s = 0; s < n; s++)
    (o = e[s]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = i.__k[s] = ni(null, o, null, null, null) : Ci(o) ? o = i.__k[s] = ni($, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = i.__k[s] = ni(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : i.__k[s] = o, l = s + h, o.__ = i, o.__b = i.__b + 1, a = null, (u = o.__i = Lc(o, t, l, d)) != -1 && (d--, (a = t[u]) && (a.__u |= 2)), a == null || a.__v == null ? (u == -1 && (n > c ? h-- : n < c && h++), typeof o.type != "function" && (o.__u |= 4)) : u != l && (u == l - 1 ? h-- : u == l + 1 ? h++ : (u > l ? h-- : h++, o.__u |= 4))) : i.__k[s] = null;
  if (d)
    for (s = 0; s < c; s++)
      (a = t[s]) != null && !(2 & a.__u) && (a.__e == r && (r = Er(a)), nl(a, a));
  return r;
}
function tl(i, e, t, r) {
  var n, s;
  if (typeof i.type == "function") {
    for (n = i.__k, s = 0; n && s < n.length; s++)
      n[s] && (n[s].__ = i, e = tl(n[s], e, t, r));
    return e;
  }
  i.__e != e && (r && (e && i.type && !e.parentNode && (e = Er(i)), t.insertBefore(i.__e, e || null)), e = i.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function yt(i, e) {
  return e = e || [], i == null || typeof i == "boolean" || (Ci(i) ? i.some(function(t) {
    yt(t, e);
  }) : e.push(i)), e;
}
function Lc(i, e, t, r) {
  var n, s, o, a = i.key, l = i.type, u = e[t], c = u != null && (2 & u.__u) == 0;
  if (u === null && a == null || c && a == u.key && l == u.type)
    return t;
  if (r > (c ? 1 : 0)) {
    for (n = t - 1, s = t + 1; n >= 0 || s < e.length; )
      if ((u = e[o = n >= 0 ? n-- : s++]) != null && !(2 & u.__u) && a == u.key && l == u.type)
        return o;
  }
  return -1;
}
function Ao(i, e, t) {
  e[0] == "-" ? i.setProperty(e, t ?? "") : i[e] = t == null ? "" : typeof t != "number" || Sc.test(e) ? t : t + "px";
}
function Ti(i, e, t, r, n) {
  var s, o;
  e:
    if (e == "style")
      if (typeof t == "string")
        i.style.cssText = t;
      else {
        if (typeof r == "string" && (i.style.cssText = r = ""), r)
          for (e in r)
            t && e in t || Ao(i.style, e, "");
        if (t)
          for (e in t)
            r && t[e] == r[e] || Ao(i.style, e, t[e]);
      }
    else if (e[0] == "o" && e[1] == "n")
      s = e != (e = e.replace(Xa, "$1")), o = e.toLowerCase(), e = o in i || e == "onFocusOut" || e == "onFocusIn" ? o.slice(2) : e.slice(2), i.l || (i.l = {}), i.l[e + s] = t, t ? r ? t[ii] = r[ii] : (t[ii] = Fs, i.addEventListener(e, s ? ts : es, s)) : i.removeEventListener(e, s ? ts : es, s);
    else {
      if (n == "http://www.w3.org/2000/svg")
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in i)
        try {
          i[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] != "-" ? i.removeAttribute(e) : i.setAttribute(e, e == "popover" && t == 1 ? "" : t));
    }
}
function So(i) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + i];
      if (e[Pi] == null)
        e[Pi] = Fs++;
      else if (e[Pi] < t[ii])
        return;
      return t(G.event ? G.event(e) : e);
    }
  };
}
function Os(i, e, t, r, n, s, o, a, l, u) {
  var c, d, h, f, v, g, w, m, b, x, _, C, A, k, y, D = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & t.__u && (l = !!(32 & t.__u), s = [a = e.__e = t.__e]), (c = G.__b) && c(e);
  e:
    if (typeof D == "function")
      try {
        if (m = e.props, b = D.prototype && D.prototype.render, x = (c = D.contextType) && r[c.__c], _ = c ? x ? x.props.value : c.__ : r, t.__c ? w = (d = e.__c = t.__c).__ = d.__E : (b ? e.__c = d = new D(m, _) : (e.__c = d = new et(m, _), d.constructor = D, d.render = Nc), x && x.sub(d), d.state || (d.state = {}), d.__n = r, h = d.__d = !0, d.__h = [], d._sb = []), b && d.__s == null && (d.__s = d.state), b && D.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = lt({}, d.__s)), lt(d.__s, D.getDerivedStateFromProps(m, d.__s))), f = d.props, v = d.state, d.__v = e, h)
          b && D.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), b && d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
          if (b && D.getDerivedStateFromProps == null && m !== f && d.componentWillReceiveProps != null && d.componentWillReceiveProps(m, _), e.__v == t.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(m, d.__s, _) === !1) {
            e.__v != t.__v && (d.props = m, d.state = d.__s, d.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(E) {
              E && (E.__ = e);
            }), Hi.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && o.push(d);
            break e;
          }
          d.componentWillUpdate != null && d.componentWillUpdate(m, d.__s, _), b && d.componentDidUpdate != null && d.__h.push(function() {
            d.componentDidUpdate(f, v, g);
          });
        }
        if (d.context = _, d.props = m, d.__P = i, d.__e = !1, C = G.__r, A = 0, b)
          d.state = d.__s, d.__d = !1, C && C(e), c = d.render(d.props, d.state, d.context), Hi.push.apply(d.__h, d._sb), d._sb = [];
        else
          do
            d.__d = !1, C && C(e), c = d.render(d.props, d.state, d.context), d.state = d.__s;
          while (d.__d && ++A < 25);
        d.state = d.__s, d.getChildContext != null && (r = lt(lt({}, r), d.getChildContext())), b && !h && d.getSnapshotBeforeUpdate != null && (g = d.getSnapshotBeforeUpdate(f, v)), k = c != null && c.type === $ && c.key == null ? il(c.props.children) : c, a = el(i, Ci(k) ? k : [k], e, t, r, n, s, o, a, l, u), d.base = e.__e, e.__u &= -161, d.__h.length && o.push(d), w && (d.__E = d.__ = null);
      } catch (E) {
        if (e.__v = null, l || s != null)
          if (E.then) {
            for (e.__u |= l ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; )
              a = a.nextSibling;
            s[s.indexOf(a)] = null, e.__e = a;
          } else {
            for (y = s.length; y--; )
              Ns(s[y]);
            is(e);
          }
        else
          e.__e = t.__e, e.__k = t.__k, E.then || is(e);
        G.__e(E, e, t);
      }
    else
      s == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : a = e.__e = Fc(t.__e, e, t, r, n, s, o, l, u);
  return (c = G.diffed) && c(e), 128 & e.__u ? void 0 : a;
}
function is(i) {
  i && (i.__c && (i.__c.__e = !0), i.__k && i.__k.some(is));
}
function rl(i, e, t) {
  for (var r = 0; r < t.length; r++)
    Ms(t[r], t[++r], t[++r]);
  G.__c && G.__c(e, i), i.some(function(n) {
    try {
      i = n.__h, n.__h = [], i.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      G.__e(s, n.__v);
    }
  });
}
function il(i) {
  return typeof i != "object" || i == null || i.__b > 0 ? i : Ci(i) ? i.map(il) : lt({}, i);
}
function Fc(i, e, t, r, n, s, o, a, l) {
  var u, c, d, h, f, v, g, w = t.props || Ui, m = e.props, b = e.type;
  if (b == "svg" ? n = "http://www.w3.org/2000/svg" : b == "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), s != null) {
    for (u = 0; u < s.length; u++)
      if ((f = s[u]) && "setAttribute" in f == !!b && (b ? f.localName == b : f.nodeType == 3)) {
        i = f, s[u] = null;
        break;
      }
  }
  if (i == null) {
    if (b == null)
      return document.createTextNode(m);
    i = document.createElementNS(n, b, m.is && m), a && (G.__m && G.__m(e, s), a = !1), s = null;
  }
  if (b == null)
    w === m || a && i.data == m || (i.data = m);
  else {
    if (s = s && yi.call(i.childNodes), !a && s != null)
      for (w = {}, u = 0; u < i.attributes.length; u++)
        w[(f = i.attributes[u]).name] = f.value;
    for (u in w)
      f = w[u], u == "dangerouslySetInnerHTML" ? d = f : u == "children" || u in m || u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m || Ti(i, u, null, f, n);
    for (u in m)
      f = m[u], u == "children" ? h = f : u == "dangerouslySetInnerHTML" ? c = f : u == "value" ? v = f : u == "checked" ? g = f : a && typeof f != "function" || w[u] === f || Ti(i, u, f, w[u], n);
    if (c)
      a || d && (c.__html == d.__html || c.__html == i.innerHTML) || (i.innerHTML = c.__html), e.__k = [];
    else if (d && (i.innerHTML = ""), el(e.type == "template" ? i.content : i, Ci(h) ? h : [h], e, t, r, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, s, o, s ? s[0] : t.__k && Er(t, 0), a, l), s != null)
      for (u = s.length; u--; )
        Ns(s[u]);
    a || (u = "value", b == "progress" && v == null ? i.removeAttribute("value") : v != null && (v !== i[u] || b == "progress" && !v || b == "option" && v != w[u]) && Ti(i, u, v, w[u], n), u = "checked", g != null && g != i[u] && Ti(i, u, g, w[u], n));
  }
  return i;
}
function Ms(i, e, t) {
  try {
    if (typeof i == "function") {
      var r = typeof i.__u == "function";
      r && i.__u(), r && e == null || (i.__u = i(e));
    } else
      i.current = e;
  } catch (n) {
    G.__e(n, t);
  }
}
function nl(i, e, t) {
  var r, n;
  if (G.unmount && G.unmount(i), (r = i.ref) && (r.current && r.current != i.__e || Ms(r, null, e)), (r = i.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        G.__e(s, e);
      }
    r.base = r.__P = null;
  }
  if (r = i.__k)
    for (n = 0; n < r.length; n++)
      r[n] && nl(r[n], e, t || typeof i.type != "function");
  t || Ns(i.__e), i.__c = i.__ = i.__e = void 0;
}
function Nc(i, e, t) {
  return this.constructor(i, t);
}
function $t(i, e, t) {
  var r, n, s, o;
  e == document && (e = document.documentElement), G.__ && G.__(i, e), n = (r = typeof t == "function") ? null : t && t.__k || e.__k, s = [], o = [], Os(e, i = (!r && t || e).__k = z($, null, [i]), n || Ui, Ui, e.namespaceURI, !r && t ? [t] : n ? null : e.firstChild ? yi.call(e.childNodes) : null, s, !r && t ? t : n ? n.__e : e.firstChild, r, o), rl(s, i, o);
}
function Ps(i, e) {
  $t(i, e, Ps);
}
function Is(i, e, t) {
  var r, n, s, o, a = lt({}, i.props);
  for (s in i.type && i.type.defaultProps && (o = i.type.defaultProps), e)
    s == "key" ? r = e[s] : s == "ref" ? n = e[s] : a[s] = e[s] === void 0 && o != null ? o[s] : e[s];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? yi.call(arguments, 2) : t), ni(i.type, a, r || i.key, n || i.ref, null);
}
function ki(i) {
  function e(t) {
    var r, n;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (n = {})[e.__c] = this, this.getChildContext = function() {
      return n;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value != s.value && r.forEach(function(o) {
        o.__e = !0, rs(o);
      });
    }, this.sub = function(s) {
      r.add(s);
      var o = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        r && r.delete(s), o && o.call(s);
      };
    }), t.children;
  }
  return e.__c = "__cC" + Ja++, e.__ = i, e.Provider = e.__l = (e.Consumer = function(t, r) {
    return t.children(r);
  }).contextType = e, e;
}
yi = Hi.slice, G = { __e: function(i, e, t, r) {
  for (var n, s, o; e = e.__; )
    if ((n = e.__c) && !n.__)
      try {
        if ((s = n.constructor) && s.getDerivedStateFromError != null && (n.setState(s.getDerivedStateFromError(i)), o = n.__d), n.componentDidCatch != null && (n.componentDidCatch(i, r || {}), o = n.__d), o)
          return n.__E = n;
      } catch (a) {
        i = a;
      }
  throw i;
} }, Wa = 0, Ya = function(i) {
  return i != null && i.constructor === void 0;
}, et.prototype.setState = function(i, e) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = lt({}, this.state), typeof i == "function" && (i = i(lt({}, t), this.props)), i && lt(t, i), i != null && this.__v && (e && this._sb.push(e), rs(this));
}, et.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), rs(this));
}, et.prototype.render = $, Nt = [], Ka = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Za = function(i, e) {
  return i.__v.__b - e.__v.__b;
}, Gi.__r = 0, An = Math.random().toString(8), Pi = "__d" + An, ii = "__a" + An, Xa = /(PointerCapture)$|Capture$/i, Fs = 0, es = So(!1), ts = So(!0), Ja = 0;
var Oc = 0;
function p(i, e, t, r, n, s) {
  e || (e = {});
  var o, a, l = e;
  if ("ref" in l)
    for (a in l = {}, e)
      a == "ref" ? o = e[a] : l[a] = e[a];
  var u = { type: i, props: l, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Oc, __i: -1, __u: 0, __source: n, __self: s };
  if (typeof i == "function" && (o = i.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return G.vnode && G.vnode(u), u;
}
function Wi() {
  return Wi = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
    }
    return i;
  }, Wi.apply(this, arguments);
}
function sl(i, e) {
  if (i == null)
    return {};
  var t, r, n = {}, s = Object.keys(i);
  for (r = 0; r < s.length; r++)
    e.indexOf(t = s[r]) >= 0 || (n[t] = i[t]);
  return n;
}
var Mc = ["context", "children"], Pc = ["useFragment"];
function Ic(i, e, t, r) {
  function n() {
    var s, o = Reflect.construct(HTMLElement, [], n);
    return o._vdomComponent = i, r && r.shadow ? (o._root = o.attachShadow({ mode: r.mode || "open", serializable: (s = r.serializable) != null && s }), r.adoptedStyleSheets && (o._root.adoptedStyleSheets = r.adoptedStyleSheets)) : o._root = o, o;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = function() {
    zc.call(this, r);
  }, n.prototype.attributeChangedCallback = qc, n.prototype.disconnectedCallback = $c, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), n.observedAttributes = t, i.formAssociated && (n.formAssociated = !0), t.forEach(function(s) {
    Object.defineProperty(n.prototype, s, { get: function() {
      return this._vdom ? this._vdom.props[s] : this._props[s];
    }, set: function(o) {
      this._vdom ? this.attributeChangedCallback(s, null, o) : (this._props || (this._props = {}), this._props[s] = o);
      var a = typeof o;
      o != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(s, o);
    } });
  }), customElements.define(e || i.tagName || i.displayName || i.name, n), n;
}
function Rc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var e = i.children, t = sl(i, Mc);
  return Is(e, t);
}
function zc(i) {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = z(Rc, Wi({}, this._props, { context: e.detail.context }), al(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? Ps : $t)(this._vdom, this._root);
}
function ol(i) {
  return i.replace(/-(\w)/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  });
}
function qc(i, e, t) {
  if (this._vdom) {
    var r = {};
    r[i] = t = t ?? void 0, r[ol(i)] = t, this._vdom = Is(this._vdom, r), $t(this._vdom, this._root);
  }
}
function $c() {
  $t(this._vdom = null, this._root);
}
function Eo(i, e) {
  var t = this, r = i.useFragment, n = sl(i, Pc);
  return z(r ? $ : "slot", Wi({}, n, { ref: function(s) {
    s ? (t.ref = s, t._listener || (t._listener = function(o) {
      o.stopPropagation(), o.detail.context = e;
    }, s.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function al(i, e, t) {
  if (i.nodeType === 3)
    return i.data;
  if (i.nodeType !== 1)
    return null;
  var r = [], n = {}, s = 0, o = i.attributes, a = i.childNodes;
  for (s = o.length; s--; )
    o[s].name !== "slot" && (n[o[s].name] = o[s].value, n[ol(o[s].name)] = o[s].value);
  for (s = a.length; s--; ) {
    var l = al(a[s], null, t), u = a[s].slot;
    u ? n[u] = z(Eo, { name: u }, l) : r[s] = l;
  }
  var c = !(!t || !t.shadow), d = e ? z(Eo, { useFragment: !c }, r) : r;
  return !c && e && (i.innerHTML = ""), z(e || i.nodeName.toLowerCase(), n, d);
}
var Vt, oe, Sn, Bo, Br = 0, ll = [], le = G, To = le.__b, Lo = le.__r, Fo = le.diffed, No = le.__c, Oo = le.unmount, Mo = le.__;
function qr(i, e) {
  le.__h && le.__h(oe, i, Br || e), Br = 0;
  var t = oe.__H || (oe.__H = { __: [], __h: [] });
  return i >= t.__.length && t.__.push({}), t.__[i];
}
function M(i) {
  return Br = 1, Rs(pl, i);
}
function Rs(i, e, t) {
  var r = qr(Vt++, 2);
  if (r.t = i, !r.__c && (r.__ = [t ? t(e) : pl(void 0, e), function(a) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, a);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = oe, !oe.__f)) {
    var n = function(a, l, u) {
      if (!r.__c.__H)
        return !0;
      var c = r.__c.__H.__.filter(function(h) {
        return h.__c;
      });
      if (c.every(function(h) {
        return !h.__N;
      }))
        return !s || s.call(this, a, l, u);
      var d = r.__c.props !== a;
      return c.some(function(h) {
        if (h.__N) {
          var f = h.__[0];
          h.__ = h.__N, h.__N = void 0, f !== h.__[0] && (d = !0);
        }
      }), s && s.call(this, a, l, u) || d;
    };
    oe.__f = !0;
    var s = oe.shouldComponentUpdate, o = oe.componentWillUpdate;
    oe.componentWillUpdate = function(a, l, u) {
      if (this.__e) {
        var c = s;
        s = void 0, n(a, l, u), s = c;
      }
      o && o.call(this, a, l, u);
    }, oe.shouldComponentUpdate = n;
  }
  return r.__N || r.__;
}
function j(i, e) {
  var t = qr(Vt++, 3);
  !le.__s && qs(t.__H, e) && (t.__ = i, t.u = e, oe.__H.__h.push(t));
}
function or(i, e) {
  var t = qr(Vt++, 4);
  !le.__s && qs(t.__H, e) && (t.__ = i, t.u = e, oe.__h.push(t));
}
function Y(i) {
  return Br = 5, tt(function() {
    return { current: i };
  }, []);
}
function ul(i, e, t) {
  Br = 6, or(function() {
    if (typeof i == "function") {
      var r = i(e());
      return function() {
        i(null), r && typeof r == "function" && r();
      };
    }
    if (i)
      return i.current = e(), function() {
        return i.current = null;
      };
  }, t == null ? t : t.concat(i));
}
function tt(i, e) {
  var t = qr(Vt++, 7);
  return qs(t.__H, e) && (t.__ = i(), t.__H = e, t.__h = i), t.__;
}
function zs(i, e) {
  return Br = 8, tt(function() {
    return i;
  }, e);
}
function Di(i) {
  var e = oe.context[i.__c], t = qr(Vt++, 9);
  return t.c = i, e ? (t.__ == null && (t.__ = !0, e.sub(oe)), e.props.value) : i.__;
}
function cl(i, e) {
  le.useDebugValue && le.useDebugValue(e ? e(i) : i);
}
function dl() {
  var i = qr(Vt++, 11);
  if (!i.__) {
    for (var e = oe.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    i.__ = "P" + t[0] + "-" + t[1]++;
  }
  return i.__;
}
function Vc() {
  for (var i; i = ll.shift(); ) {
    var e = i.__H;
    if (i.__P && e)
      try {
        e.__h.some(Ii), e.__h.some(ns), e.__h = [];
      } catch (t) {
        e.__h = [], le.__e(t, i.__v);
      }
  }
}
le.__b = function(i) {
  oe = null, To && To(i);
}, le.__ = function(i, e) {
  i && e.__k && e.__k.__m && (i.__m = e.__k.__m), Mo && Mo(i, e);
}, le.__r = function(i) {
  Lo && Lo(i), Vt = 0;
  var e = (oe = i.__c).__H;
  e && (Sn === oe ? (e.__h = [], oe.__h = [], e.__.some(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (e.__h.some(Ii), e.__h.some(ns), e.__h = [], Vt = 0)), Sn = oe;
}, le.diffed = function(i) {
  Fo && Fo(i);
  var e = i.__c;
  e && e.__H && (e.__H.__h.length && (ll.push(e) !== 1 && Bo === le.requestAnimationFrame || ((Bo = le.requestAnimationFrame) || jc)(Vc)), e.__H.__.some(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Sn = oe = null;
}, le.__c = function(i, e) {
  e.some(function(t) {
    try {
      t.__h.some(Ii), t.__h = t.__h.filter(function(r) {
        return !r.__ || ns(r);
      });
    } catch (r) {
      e.some(function(n) {
        n.__h && (n.__h = []);
      }), e = [], le.__e(r, t.__v);
    }
  }), No && No(i, e);
}, le.unmount = function(i) {
  Oo && Oo(i);
  var e, t = i.__c;
  t && t.__H && (t.__H.__.some(function(r) {
    try {
      Ii(r);
    } catch (n) {
      e = n;
    }
  }), t.__H = void 0, e && le.__e(e, t.__v));
};
var Po = typeof requestAnimationFrame == "function";
function jc(i) {
  var e, t = function() {
    clearTimeout(r), Po && cancelAnimationFrame(e), setTimeout(i);
  }, r = setTimeout(t, 35);
  Po && (e = requestAnimationFrame(t));
}
function Ii(i) {
  var e = oe, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), oe = e;
}
function ns(i) {
  var e = oe;
  i.__c = i.__(), oe = e;
}
function qs(i, e) {
  return !i || i.length !== e.length || e.some(function(t, r) {
    return t !== i[r];
  });
}
function pl(i, e) {
  return typeof e == "function" ? e(i) : e;
}
function fl(i, e) {
  for (var t in e)
    i[t] = e[t];
  return i;
}
function ss(i, e) {
  for (var t in i)
    if (t !== "__source" && !(t in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && i[r] !== e[r])
      return !0;
  return !1;
}
function hl(i, e) {
  var t = e(), r = M({ t: { __: t, u: e } }), n = r[0].t, s = r[1];
  return or(function() {
    n.__ = t, n.u = e, En(n) && s({ t: n });
  }, [i, t, e]), j(function() {
    return En(n) && s({ t: n }), i(function() {
      En(n) && s({ t: n });
    });
  }, [i]), t;
}
function En(i) {
  try {
    return !((e = i.__) === (t = i.u()) && (e !== 0 || 1 / e == 1 / t) || e != e && t != t);
  } catch {
    return !0;
  }
  var e, t;
}
function gl(i) {
  i();
}
function ml(i) {
  return i;
}
function bl() {
  return [!1, gl];
}
var vl = or;
function os(i, e) {
  this.props = i, this.context = e;
}
function Uc(i, e) {
  function t(n) {
    var s = this.props.ref;
    return s != n.ref && s && (typeof s == "function" ? s(null) : s.current = null), e ? !e(this.props, n) || s != n.ref : ss(this.props, n);
  }
  function r(n) {
    return this.shouldComponentUpdate = t, z(i, n);
  }
  return r.displayName = "Memo(" + (i.displayName || i.name) + ")", r.__f = r.prototype.isReactComponent = !0, r.type = i, r;
}
(os.prototype = new et()).isPureReactComponent = !0, os.prototype.shouldComponentUpdate = function(i, e) {
  return ss(this.props, i) || ss(this.state, e);
};
var Io = G.__b;
G.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Io && Io(i);
};
var Hc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function $s(i) {
  function e(t) {
    var r = fl({}, t);
    return delete r.ref, i(r, t.ref || null);
  }
  return e.$$typeof = Hc, e.render = i, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", e;
}
var Ro = function(i, e) {
  return i == null ? null : yt(yt(i).map(e));
}, wl = { map: Ro, forEach: Ro, count: function(i) {
  return i ? yt(i).length : 0;
}, only: function(i) {
  var e = yt(i);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: yt }, Gc = G.__e;
G.__e = function(i, e, t, r) {
  if (i.then) {
    for (var n, s = e; s = s.__; )
      if ((n = s.__c) && n.__c)
        return e.__e == null && (e.__e = t.__e, e.__k = t.__k), n.__c(i, e);
  }
  Gc(i, e, t, r);
};
var zo = G.unmount;
function xl(i, e, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), i.__c.__H = null), (i = fl({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = e), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(r) {
    return xl(r, e, t);
  })), i;
}
function _l(i, e, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(r) {
    return _l(r, e, t);
  }), i.__c && i.__c.__P === e && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function Ri() {
  this.__u = 0, this.o = null, this.__b = null;
}
function yl(i) {
  var e = i.__ && i.__.__c;
  return e && e.__a && e.__a(i);
}
function Wc(i) {
  var e, t, r, n = null;
  function s(o) {
    if (e || (e = i()).then(function(a) {
      a && (n = a.default || a), r = !0;
    }, function(a) {
      t = a, r = !0;
    }), t)
      throw t;
    if (!r)
      throw e;
    return n ? z(n, o) : null;
  }
  return s.displayName = "Lazy", s.__f = !0, s;
}
function Jr() {
  this.i = null, this.l = null;
}
G.unmount = function(i) {
  var e = i.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & i.__u && (i.type = null), zo && zo(i);
}, (Ri.prototype = new et()).__c = function(i, e) {
  var t = e.__c, r = this;
  r.o == null && (r.o = []), r.o.push(t);
  var n = yl(r.__v), s = !1, o = function() {
    s || r.__z || (s = !0, t.__R = null, n ? n(l) : l());
  };
  t.__R = o;
  var a = t.__P;
  t.__P = null;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var u = r.state.__a;
        r.__v.__k[0] = _l(u, u.__c.__P, u.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.o.pop(); )
        c.__P = a, c.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), i.then(o, o);
}, Ri.prototype.componentWillUnmount = function() {
  this.o = [];
}, Ri.prototype.render = function(i, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = xl(this.__b, t, r.__O = r.__P);
    }
    this.__b = null;
  }
  var n = e.__a && z($, null, i.fallback);
  return n && (n.__u &= -33), [z($, null, e.__a ? null : i.children), n];
};
var qo = function(i, e, t) {
  if (++t[1] === t[0] && i.l.delete(e), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.l.size))
    for (t = i.i; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      i.i = t = t[2];
    }
};
function Yc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Kc(i) {
  var e = this, t = i.h;
  if (e.componentWillUnmount = function() {
    $t(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== t && e.componentWillUnmount(), !e.v) {
    for (var r = e.__v; r !== null && !r.__m && r.__ !== null; )
      r = r.__;
    e.h = t, e.v = { nodeType: 1, parentNode: t, childNodes: [], __k: { __m: r.__m }, contains: function() {
      return !0;
    }, namespaceURI: t.namespaceURI, insertBefore: function(n, s) {
      this.childNodes.push(n), e.h.insertBefore(n, s);
    }, removeChild: function(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.h.removeChild(n);
    } };
  }
  $t(z(Yc, { context: e.context }, i.__v), e.v);
}
function Zc(i, e) {
  var t = z(Kc, { __v: i, h: e });
  return t.containerInfo = e, t;
}
(Jr.prototype = new et()).__a = function(i) {
  var e = this, t = yl(e.__v), r = e.l.get(i);
  return r[0]++, function(n) {
    var s = function() {
      e.props.revealOrder ? (r.push(n), qo(e, i, r)) : n();
    };
    t ? t(s) : s();
  };
}, Jr.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = yt(i.children);
  i.revealOrder && i.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; )
    this.l.set(e[t], this.i = [1, 0, this.i]);
  return i.children;
}, Jr.prototype.componentDidUpdate = Jr.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(e, t) {
    qo(i, t, e);
  });
};
var Cl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Xc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Jc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Qc = /[A-Z0-9]/g, ed = typeof document < "u", td = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function rd(i, e, t) {
  return e.__k == null && (e.textContent = ""), $t(i, e), typeof t == "function" && t(), i ? i.__c : null;
}
function id(i, e, t) {
  return Ps(i, e), typeof t == "function" && t(), i ? i.__c : null;
}
et.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(et.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(e) {
    Object.defineProperty(this, i, { configurable: !0, writable: !0, value: e });
  } });
});
var $o = G.event;
G.event = function(i) {
  return $o && (i = $o(i)), i.persist = function() {
  }, i.isPropagationStopped = function() {
    return this.cancelBubble;
  }, i.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, i.nativeEvent = i;
};
var Vs, nd = { configurable: !0, get: function() {
  return this.class;
} }, Vo = G.vnode;
G.vnode = function(i) {
  typeof i.type == "string" && function(e) {
    var t = e.props, r = e.type, n = {}, s = r.indexOf("-") == -1;
    for (var o in t) {
      var a = t[o];
      if (!(o === "value" && "defaultValue" in t && a == null || ed && o === "children" && r === "noscript" || o === "class" || o === "className")) {
        var l = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : l === "translate" && a === "no" ? a = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? o = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || td(t.type) ? l === "onfocus" ? o = "onfocusin" : l === "onblur" ? o = "onfocusout" : Jc.test(o) && (o = l) : l = o = "oninput" : s && Xc.test(o) ? o = o.replace(Qc, "-$&").toLowerCase() : a === null && (a = void 0), l === "oninput" && n[o = l] && (o = "oninputCapture"), n[o] = a;
      }
    }
    r == "select" && (n.multiple && Array.isArray(n.value) && (n.value = yt(t.children).forEach(function(u) {
      u.props.selected = n.value.indexOf(u.props.value) != -1;
    })), n.defaultValue != null && (n.value = yt(t.children).forEach(function(u) {
      u.props.selected = n.multiple ? n.defaultValue.indexOf(u.props.value) != -1 : n.defaultValue == u.props.value;
    }))), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", nd)) : t.className && (n.class = n.className = t.className), e.props = n;
  }(i), i.$$typeof = Cl, Vo && Vo(i);
};
var jo = G.__r;
G.__r = function(i) {
  jo && jo(i), Vs = i.__c;
};
var Uo = G.diffed;
G.diffed = function(i) {
  Uo && Uo(i);
  var e = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value), Vs = null;
};
var sd = { ReactCurrentDispatcher: { current: { readContext: function(i) {
  return Vs.__n[i.__c].props.value;
}, useCallback: zs, useContext: Di, useDebugValue: cl, useDeferredValue: ml, useEffect: j, useId: dl, useImperativeHandle: ul, useInsertionEffect: vl, useLayoutEffect: or, useMemo: tt, useReducer: Rs, useRef: Y, useState: M, useSyncExternalStore: hl, useTransition: bl } } };
function od(i) {
  return z.bind(null, i);
}
function jt(i) {
  return !!i && i.$$typeof === Cl;
}
function ad(i) {
  return jt(i) && i.type === $;
}
function ld(i) {
  return !!i && typeof i.displayName == "string" && i.displayName.indexOf("Memo(") == 0;
}
function js(i) {
  return jt(i) ? Is.apply(null, arguments) : i;
}
function ud(i) {
  return !!i.__k && ($t(null, i), !0);
}
function cd(i) {
  return i && (i.base || i.nodeType === 1 && i) || null;
}
var dd = function(i, e) {
  return i(e);
}, pd = function(i, e) {
  var t = G.debounceRendering;
  G.debounceRendering = function(n) {
    return n();
  };
  var r = i(e);
  return G.debounceRendering = t, r;
}, fd = jt, ve = { useState: M, useId: dl, useReducer: Rs, useEffect: j, useLayoutEffect: or, useInsertionEffect: vl, useTransition: bl, useDeferredValue: ml, useSyncExternalStore: hl, startTransition: gl, useRef: Y, useImperativeHandle: ul, useMemo: tt, useCallback: zs, useContext: Di, useDebugValue: cl, version: "18.3.1", Children: wl, render: rd, hydrate: id, unmountComponentAtNode: ud, createPortal: Zc, createElement: z, createContext: ki, createFactory: od, cloneElement: js, createRef: Ec, Fragment: $, isValidElement: jt, isElement: fd, isFragment: ad, isMemo: ld, findDOMNode: cd, Component: et, PureComponent: os, memo: Uc, forwardRef: $s, flushSync: pd, unstable_batchedUpdates: dd, StrictMode: $, Suspense: Ri, SuspenseList: Jr, lazy: Wc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: sd }, Bn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kl(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var hd = {
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
const gd = /* @__PURE__ */ kl(hd);
var md = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ho(i) {
  var e = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, t = i.match(/<\/?([^\s]+?)[/\s>]/);
  if (t && (e.name = t[1], (gd[t[1]] || i.charAt(i.length - 2) === "/") && (e.voidElement = !0), e.name.startsWith("!--"))) {
    var r = i.indexOf("-->");
    return { type: "comment", comment: r !== -1 ? i.slice(4, r) : "" };
  }
  for (var n = new RegExp(md), s = null; (s = n.exec(i)) !== null; )
    if (s[0].trim())
      if (s[1]) {
        var o = s[1].trim(), a = [o, ""];
        o.indexOf("=") > -1 && (a = o.split("=")), e.attrs[a[0]] = a[1], n.lastIndex--;
      } else
        s[2] && (e.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
  return e;
}
var bd = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, vd = /^\s*$/, wd = /* @__PURE__ */ Object.create(null);
function Dl(i, e) {
  switch (e.type) {
    case "text":
      return i + e.content;
    case "tag":
      return i += "<" + e.name + (e.attrs ? function(t) {
        var r = [];
        for (var n in t)
          r.push(n + '="' + t[n] + '"');
        return r.length ? " " + r.join(" ") : "";
      }(e.attrs) : "") + (e.voidElement ? "/>" : ">"), e.voidElement ? i : i + e.children.reduce(Dl, "") + "</" + e.name + ">";
    case "comment":
      return i + "<!--" + e.comment + "-->";
  }
}
var xd = { parse: function(i, e) {
  e || (e = {}), e.components || (e.components = wd);
  var t, r = [], n = [], s = -1, o = !1;
  if (i.indexOf("<") !== 0) {
    var a = i.indexOf("<");
    r.push({ type: "text", content: a === -1 ? i : i.substring(0, a) });
  }
  return i.replace(bd, function(l, u) {
    if (o) {
      if (l !== "</" + t.name + ">")
        return;
      o = !1;
    }
    var c, d = l.charAt(1) !== "/", h = l.startsWith("<!--"), f = u + l.length, v = i.charAt(f);
    if (h) {
      var g = Ho(l);
      return s < 0 ? (r.push(g), r) : ((c = n[s]).children.push(g), r);
    }
    if (d && (s++, (t = Ho(l)).type === "tag" && e.components[t.name] && (t.type = "component", o = !0), t.voidElement || o || !v || v === "<" || t.children.push({ type: "text", content: i.slice(f, i.indexOf("<", f)) }), s === 0 && r.push(t), (c = n[s - 1]) && c.children.push(t), n[s] = t), (!d || t.voidElement) && (s > -1 && (t.voidElement || t.name === l.slice(2, -1)) && (s--, t = s === -1 ? r : n[s]), !o && v !== "<" && v)) {
      c = s === -1 ? r : n[s].children;
      var w = i.indexOf("<", f), m = i.slice(f, w === -1 ? void 0 : w);
      vd.test(m) && (m = " "), (w > -1 && s + c.length >= 0 || m !== " ") && c.push({ type: "text", content: m });
    }
  }), r;
}, stringify: function(i) {
  return i.reduce(function(e, t) {
    return e + Dl("", t);
  }, "");
} };
const zi = (i, e, t, r) => {
  var s, o, a, l;
  const n = [t, {
    code: e,
    ...r || {}
  }];
  if ((o = (s = i == null ? void 0 : i.services) == null ? void 0 : s.logger) != null && o.forward)
    return i.services.logger.forward(n, "warn", "react-i18next::", !0);
  Xe(n[0]) && (n[0] = `react-i18next:: ${n[0]}`), (l = (a = i == null ? void 0 : i.services) == null ? void 0 : a.logger) != null && l.warn ? i.services.logger.warn(...n) : console != null && console.warn && console.warn(...n);
}, Go = {}, pi = (i, e, t, r) => {
  Xe(t) && Go[t] || (Xe(t) && (Go[t] = /* @__PURE__ */ new Date()), zi(i, e, t, r));
}, Al = (i, e) => () => {
  if (i.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        i.off("initialized", t);
      }, 0), e();
    };
    i.on("initialized", t);
  }
}, as = (i, e, t) => {
  i.loadNamespaces(e, Al(i, t));
}, Wo = (i, e, t, r) => {
  if (Xe(t) && (t = [t]), i.options.preload && i.options.preload.indexOf(e) > -1)
    return as(i, t, r);
  t.forEach((n) => {
    i.options.ns.indexOf(n) < 0 && i.options.ns.push(n);
  }), i.loadLanguages(e, Al(i, r));
}, _d = (i, e, t = {}) => !e.languages || !e.languages.length ? (pi(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(i, {
  lng: t.lng,
  precheck: (r, n) => {
    if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !n(r.isLanguageChangingTo, i))
      return !1;
  }
}), Xe = (i) => typeof i == "string", Ot = (i) => typeof i == "object" && i !== null, yd = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Cd = {
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
}, kd = (i) => Cd[i], Dd = (i) => i.replace(yd, kd);
let ls = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Dd
};
const Ad = (i = {}) => {
  ls = {
    ...ls,
    ...i
  };
}, Sl = () => ls;
let El;
const Sd = (i) => {
  El = i;
}, Ut = () => El, Tn = (i, e) => {
  var r;
  if (!i)
    return !1;
  const t = ((r = i.props) == null ? void 0 : r.children) ?? i.children;
  return e ? t.length > 0 : !!t;
}, Ln = (i) => {
  var t, r;
  if (!i)
    return [];
  const e = ((t = i.props) == null ? void 0 : t.children) ?? i.children;
  return (r = i.props) != null && r.i18nIsDynamicList ? vr(e) : e;
}, Ed = (i) => Array.isArray(i) && i.every(jt), vr = (i) => Array.isArray(i) ? i : [i], Bd = (i, e) => {
  const t = {
    ...e
  };
  return t.props = Object.assign(i.props, e.props), t;
}, Bl = (i, e, t, r) => {
  if (!i)
    return "";
  let n = "";
  const s = vr(i), o = e != null && e.transSupportBasicHtmlNodes ? e.transKeepBasicHtmlNodesFor ?? [] : [];
  return s.forEach((a, l) => {
    if (Xe(a)) {
      n += `${a}`;
      return;
    }
    if (jt(a)) {
      const {
        props: u,
        type: c
      } = a, d = Object.keys(u).length, h = o.indexOf(c) > -1, f = u.children;
      if (!f && h && !d) {
        n += `<${c}/>`;
        return;
      }
      if (!f && (!h || d) || u.i18nIsDynamicList) {
        n += `<${l}></${l}>`;
        return;
      }
      if (h && d === 1 && Xe(f)) {
        n += `<${c}>${f}</${c}>`;
        return;
      }
      const v = Bl(f, e, t, r);
      n += `<${l}>${v}</${l}>`;
      return;
    }
    if (a === null) {
      zi(t, "TRANS_NULL_VALUE", "Passed in a null value as child", {
        i18nKey: r
      });
      return;
    }
    if (Ot(a)) {
      const {
        format: u,
        ...c
      } = a, d = Object.keys(c);
      if (d.length === 1) {
        const h = u ? `${d[0]}, ${u}` : d[0];
        n += `{{${h}}}`;
        return;
      }
      zi(t, "TRANS_INVALID_OBJ", "Invalid child - Object should only have keys {{ value, format }} (format is optional).", {
        i18nKey: r,
        child: a
      });
      return;
    }
    zi(t, "TRANS_INVALID_VAR", "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.", {
      i18nKey: r,
      child: a
    });
  }), n;
}, Td = (i, e, t, r, n, s, o) => {
  if (t === "")
    return [];
  const a = n.transKeepBasicHtmlNodesFor || [], l = t && new RegExp(a.map((m) => `<${m}`).join("|")).test(t);
  if (!i && !e && !l && !o)
    return [t];
  const u = e ?? {}, c = (m) => {
    vr(m).forEach((x) => {
      Xe(x) || (Tn(x) ? c(Ln(x)) : Ot(x) && !jt(x) && Object.assign(u, x));
    });
  };
  c(i);
  const d = xd.parse(`<0>${t}</0>`), h = {
    ...u,
    ...s
  }, f = (m, b, x) => {
    var A;
    const _ = Ln(m), C = g(_, b.children, x);
    return Ed(_) && C.length === 0 || (A = m.props) != null && A.i18nIsDynamicList ? _ : C;
  }, v = (m, b, x, _, C) => {
    m.dummy ? (m.children = b, x.push(js(m, {
      key: _
    }, C ? void 0 : b))) : x.push(...wl.map([m], (A) => {
      const k = {
        ...A.props
      };
      return delete k.i18nIsDynamicList, z(A.type, {
        ...k,
        key: _,
        ref: A.props.ref ?? A.ref
      }, C ? null : b);
    }));
  }, g = (m, b, x) => {
    const _ = vr(m);
    return vr(b).reduce((A, k, y) => {
      var E, L;
      const D = ((L = (E = k.children) == null ? void 0 : E[0]) == null ? void 0 : L.content) && r.services.interpolator.interpolate(k.children[0].content, h, r.language);
      if (k.type === "tag") {
        let T = _[parseInt(k.name, 10)];
        !T && e && (T = e[k.name]), x.length === 1 && !T && (T = x[0][k.name]), T || (T = {});
        const F = Object.keys(k.attrs).length !== 0 ? Bd({
          props: k.attrs
        }, T) : T, N = jt(F), O = N && Tn(k, !0) && !k.voidElement, q = l && Ot(F) && F.dummy && !N, R = Ot(e) && Object.hasOwnProperty.call(e, k.name);
        if (Xe(F)) {
          const S = r.services.interpolator.interpolate(F, h, r.language);
          A.push(S);
        } else if (Tn(F) || O) {
          const S = f(F, k, x);
          v(F, S, A, y);
        } else if (q) {
          const S = g(_, k.children, x);
          v(F, S, A, y);
        } else if (Number.isNaN(parseFloat(k.name)))
          if (R) {
            const S = f(F, k, x);
            v(F, S, A, y, k.voidElement);
          } else if (n.transSupportBasicHtmlNodes && a.indexOf(k.name) > -1)
            if (k.voidElement)
              A.push(z(k.name, {
                key: `${k.name}-${y}`
              }));
            else {
              const S = g(_, k.children, x);
              A.push(z(k.name, {
                key: `${k.name}-${y}`
              }, S));
            }
          else if (k.voidElement)
            A.push(`<${k.name} />`);
          else {
            const S = g(_, k.children, x);
            A.push(`<${k.name}>${S}</${k.name}>`);
          }
        else if (Ot(F) && !N) {
          const S = k.children[0] ? D : null;
          S && A.push(S);
        } else
          v(F, D, A, y, k.children.length !== 1 || !D);
      } else if (k.type === "text") {
        const T = n.transWrapTextNodes, F = o ? n.unescape(r.services.interpolator.interpolate(k.content, h, r.language)) : r.services.interpolator.interpolate(k.content, h, r.language);
        T ? A.push(z(T, {
          key: `${k.name}-${y}`
        }, F)) : A.push(F);
      }
      return A;
    }, []);
  }, w = g([{
    dummy: !0,
    children: i || []
  }], d, vr(i || []));
  return Ln(w[0]);
}, Tl = (i, e, t) => {
  const r = i.key || e, n = js(i, {
    key: r
  });
  if (!n.props || !n.props.children || t.indexOf(`${e}/>`) < 0 && t.indexOf(`${e} />`) < 0)
    return n;
  function s() {
    return z($, null, n);
  }
  return z(s, {
    key: r
  });
}, Ld = (i, e) => i.map((t, r) => Tl(t, r, e)), Fd = (i, e) => {
  const t = {};
  return Object.keys(i).forEach((r) => {
    Object.assign(t, {
      [r]: Tl(i[r], r, e)
    });
  }), t;
}, Nd = (i, e, t, r) => i ? Array.isArray(i) ? Ld(i, e) : Ot(i) ? Fd(i, e) : (pi(t, "TRANS_INVALID_COMPONENTS", '<Trans /> "components" prop expects an object or array', {
  i18nKey: r
}), null) : null, Od = (i) => !Ot(i) || Array.isArray(i) ? !1 : Object.keys(i).reduce((e, t) => e && Number.isNaN(Number.parseFloat(t)), !0);
function Md({
  children: i,
  count: e,
  parent: t,
  i18nKey: r,
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
  var N, O, q, R, S, B;
  const v = c || Ut();
  if (!v)
    return pi(v, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using i18nextReactModule", {
      i18nKey: r
    }), i;
  const g = d || v.t.bind(v) || ((P) => P), w = {
    ...Sl(),
    ...(N = v.options) == null ? void 0 : N.react
  };
  let m = u || g.ns || ((O = v.options) == null ? void 0 : O.defaultNS);
  m = Xe(m) ? [m] : m || ["translation"];
  const b = Bl(i, w, v, r), x = a || b || w.transEmptyNodeValue || r, {
    hashTransKey: _
  } = w, C = r || (_ ? _(b || x) : b || x);
  (R = (q = v.options) == null ? void 0 : q.interpolation) != null && R.defaultVariables && (o = o && Object.keys(o).length > 0 ? {
    ...o,
    ...v.options.interpolation.defaultVariables
  } : {
    ...v.options.interpolation.defaultVariables
  });
  const A = o || e !== void 0 && !((B = (S = v.options) == null ? void 0 : S.interpolation) != null && B.alwaysFormat) || !i ? s.interpolation : {
    interpolation: {
      ...s.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, k = {
    ...s,
    context: n || s.context,
    count: e,
    ...o,
    ...A,
    defaultValue: x,
    ns: m
  }, y = C ? g(C, k) : x, D = Nd(l, y, v, r);
  let E = D || i, L = null;
  Od(D) && (L = D, E = i);
  const T = Td(E, L, y, v, w, k, h), F = t ?? w.defaultTransParent;
  return F ? z(F, f, T) : T;
}
const Pd = {
  type: "3rdParty",
  init(i) {
    Ad(i.options.react), Sd(i);
  }
}, Ll = ki();
class Id {
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
function Yo({
  children: i,
  count: e,
  parent: t,
  i18nKey: r,
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
  var b;
  const {
    i18n: v,
    defaultNS: g
  } = Di(Ll) || {}, w = c || v || Ut(), m = d || (w == null ? void 0 : w.t.bind(w));
  return Md({
    children: i,
    count: e,
    parent: t,
    i18nKey: r,
    context: n,
    tOptions: s,
    values: o,
    defaults: a,
    components: l,
    ns: u || (m == null ? void 0 : m.ns) || g || ((b = w == null ? void 0 : w.options) == null ? void 0 : b.defaultNS),
    i18n: w,
    t: d,
    shouldUnescape: h,
    ...f
  });
}
const Rd = (i, e) => {
  const t = Y();
  return j(() => {
    t.current = e ? t.current : i;
  }, [i, e]), t.current;
}, Fl = (i, e, t, r) => i.getFixedT(e, t, r), zd = (i, e, t, r) => zs(Fl(i, e, t, r), [i, e, t, r]), ee = (i, e = {}) => {
  var _, C, A, k;
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: n
  } = Di(Ll) || {}, s = t || r || Ut();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new Id()), !s) {
    pi(s, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const y = (E, L) => Xe(L) ? L : Ot(L) && Xe(L.defaultValue) ? L.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, D = [y, {}, !1];
    return D.t = y, D.i18n = {}, D.ready = !1, D;
  }
  (_ = s.options.react) != null && _.wait && pi(s, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...Sl(),
    ...s.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: l
  } = o;
  let u = i || n || ((C = s.options) == null ? void 0 : C.defaultNS);
  u = Xe(u) ? [u] : u || ["translation"], (k = (A = s.reportNamespaces).addUsedNamespaces) == null || k.call(A, u);
  const c = (s.isInitialized || s.initializedStoreOnce) && u.every((y) => _d(y, s, o)), d = zd(s, e.lng || null, o.nsMode === "fallback" ? u : u[0], l), h = () => d, f = () => Fl(s, e.lng || null, o.nsMode === "fallback" ? u : u[0], l), [v, g] = M(h);
  let w = u.join();
  e.lng && (w = `${e.lng}${w}`);
  const m = Rd(w), b = Y(!0);
  j(() => {
    const {
      bindI18n: y,
      bindI18nStore: D
    } = o;
    b.current = !0, !c && !a && (e.lng ? Wo(s, e.lng, u, () => {
      b.current && g(f);
    }) : as(s, u, () => {
      b.current && g(f);
    })), c && m && m !== w && b.current && g(f);
    const E = () => {
      b.current && g(f);
    };
    return y && (s == null || s.on(y, E)), D && (s == null || s.store.on(D, E)), () => {
      b.current = !1, s && y && (y == null || y.split(" ").forEach((L) => s.off(L, E))), D && s && D.split(" ").forEach((L) => s.store.off(L, E));
    };
  }, [s, w]), j(() => {
    b.current && c && g(h);
  }, [s, l, c]);
  const x = [v, s, c];
  if (x.t = v, x.i18n = s, x.ready = c, c || !c && !a)
    return x;
  throw new Promise((y) => {
    e.lng ? Wo(s, e.lng, u, () => y()) : as(s, u, () => y());
  });
};
var qd = Symbol.for("preact-signals");
function wn() {
  if (Ct > 1)
    Ct--;
  else {
    var i, e = !1;
    for (function() {
      var n = Ki;
      for (Ki = void 0; n !== void 0; )
        n.S.v === n.v && (n.S.i = n.i), n = n.o;
    }(); si !== void 0; ) {
      var t = si;
      for (si = void 0, Yi++; t !== void 0; ) {
        var r = t.u;
        if (t.u = void 0, t.f &= -3, !(8 & t.f) && Ml(t))
          try {
            t.c();
          } catch (n) {
            e || (i = n, e = !0);
          }
        t = r;
      }
    }
    if (Yi = 0, Ct--, e)
      throw i;
  }
}
function $d(i) {
  if (Ct > 0)
    return i();
  us = ++Vd, Ct++;
  try {
    return i();
  } finally {
    wn();
  }
}
var re = void 0;
function Nl(i) {
  var e = re;
  re = void 0;
  try {
    return i();
  } finally {
    re = e;
  }
}
var si = void 0, Ct = 0, Yi = 0, Vd = 0, us = 0, Ki = void 0, Zi = 0;
function Ol(i) {
  if (re !== void 0) {
    var e = i.n;
    if (e === void 0 || e.t !== re)
      return e = { i: 0, S: i, p: re.s, n: void 0, t: re, e: void 0, x: void 0, r: e }, re.s !== void 0 && (re.s.n = e), re.s = e, i.n = e, 32 & re.f && i.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = re.s, e.n = void 0, re.s.n = e, re.s = e), e;
  }
}
function ye(i, e) {
  this.v = i, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = e == null ? void 0 : e.watched, this.Z = e == null ? void 0 : e.unwatched, this.name = e == null ? void 0 : e.name;
}
ye.prototype.brand = qd;
ye.prototype.h = function() {
  return !0;
};
ye.prototype.S = function(i) {
  var e = this, t = this.t;
  t !== i && i.e === void 0 && (i.x = t, this.t = i, t !== void 0 ? t.e = i : Nl(function() {
    var r;
    (r = e.W) == null || r.call(e);
  }));
};
ye.prototype.U = function(i) {
  var e = this;
  if (this.t !== void 0) {
    var t = i.e, r = i.x;
    t !== void 0 && (t.x = r, i.e = void 0), r !== void 0 && (r.e = t, i.x = void 0), i === this.t && (this.t = r, r === void 0 && Nl(function() {
      var n;
      (n = e.Z) == null || n.call(e);
    }));
  }
};
ye.prototype.subscribe = function(i) {
  var e = this;
  return Hs(function() {
    var t = e.value, r = re;
    re = void 0;
    try {
      i(t);
    } finally {
      re = r;
    }
  }, { name: "sub" });
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
  var i = re;
  re = void 0;
  try {
    return this.value;
  } finally {
    re = i;
  }
};
Object.defineProperty(ye.prototype, "value", { get: function() {
  var i = Ol(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Yi > 100)
      throw new Error("Cycle detected");
    (function(t) {
      Ct !== 0 && Yi === 0 && t.l !== us && (t.l = us, Ki = { S: t, v: t.v, i: t.i, o: Ki });
    })(this), this.v = i, this.i++, Zi++, Ct++;
    try {
      for (var e = this.t; e !== void 0; e = e.x)
        e.t.N();
    } finally {
      wn();
    }
  }
} });
function Ae(i, e) {
  return new ye(i, e);
}
function Ml(i) {
  for (var e = i.s; e !== void 0; e = e.n)
    if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
      return !0;
  return !1;
}
function Pl(i) {
  for (var e = i.s; e !== void 0; e = e.n) {
    var t = e.S.n;
    if (t !== void 0 && (e.r = t), e.S.n = e, e.i = -1, e.n === void 0) {
      i.s = e;
      break;
    }
  }
}
function Il(i) {
  for (var e = i.s, t = void 0; e !== void 0; ) {
    var r = e.p;
    e.i === -1 ? (e.S.U(e), r !== void 0 && (r.n = e.n), e.n !== void 0 && (e.n.p = r)) : t = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = r;
  }
  i.s = t;
}
function ar(i, e) {
  ye.call(this, void 0), this.x = i, this.s = void 0, this.g = Zi - 1, this.f = 4, this.W = e == null ? void 0 : e.watched, this.Z = e == null ? void 0 : e.unwatched, this.name = e == null ? void 0 : e.name;
}
ar.prototype = new ye();
ar.prototype.h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Zi))
    return !0;
  if (this.g = Zi, this.f |= 1, this.i > 0 && !Ml(this))
    return this.f &= -2, !0;
  var i = re;
  try {
    Pl(this), re = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return re = i, Il(this), this.f &= -2, !0;
};
ar.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.S(e);
  }
  ye.prototype.S.call(this, i);
};
ar.prototype.U = function(i) {
  if (this.t !== void 0 && (ye.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.U(e);
  }
};
ar.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i = this.t; i !== void 0; i = i.x)
      i.t.N();
  }
};
Object.defineProperty(ar.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var i = Ol(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function jd(i, e) {
  return new ar(i, e);
}
function Rl(i) {
  var e = i.m;
  if (i.m = void 0, typeof e == "function") {
    Ct++;
    var t = re;
    re = void 0;
    try {
      e();
    } catch (r) {
      throw i.f &= -2, i.f |= 8, Us(i), r;
    } finally {
      re = t, wn();
    }
  }
}
function Us(i) {
  for (var e = i.s; e !== void 0; e = e.n)
    e.S.U(e);
  i.x = void 0, i.s = void 0, Rl(i);
}
function Ud(i) {
  if (re !== this)
    throw new Error("Out-of-order effect");
  Il(this), re = i, this.f &= -2, 8 & this.f && Us(this), wn();
}
function $r(i, e) {
  this.x = i, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = e == null ? void 0 : e.name;
}
$r.prototype.c = function() {
  var i = this.S();
  try {
    if (8 & this.f || this.x === void 0)
      return;
    var e = this.x();
    typeof e == "function" && (this.m = e);
  } finally {
    i();
  }
};
$r.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Rl(this), Pl(this), Ct++;
  var i = re;
  return re = this, Ud.bind(this, i);
};
$r.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = si, si = this);
};
$r.prototype.d = function() {
  this.f |= 8, 1 & this.f || Us(this);
};
$r.prototype.dispose = function() {
  this.d();
};
function Hs(i, e) {
  var t = new $r(i, e);
  try {
    t.c();
  } catch (n) {
    throw t.d(), n;
  }
  var r = t.d.bind(t);
  return r[Symbol.dispose] = r, r;
}
var Li;
function Vr(i, e) {
  G[i] = e.bind(null, G[i] || function() {
  });
}
function Xi(i) {
  if (Li) {
    var e = Li;
    Li = void 0, e();
  }
  Li = i && i.S();
}
function zl(i) {
  var e = this, t = i.data, r = Gd(t);
  r.value = t;
  var n = tt(function() {
    for (var s = e.__v; s = s.__; )
      if (s.__c) {
        s.__c.__$f |= 4;
        break;
      }
    return e.__$u.c = function() {
      var o, a = e.__$u.S(), l = n.value;
      a(), Ya(l) || ((o = e.base) == null ? void 0 : o.nodeType) !== 3 ? (e.__$f |= 1, e.setState({})) : e.base.data = l;
    }, jd(function() {
      var o = r.value.value;
      return o === 0 ? 0 : o === !0 ? "" : o || "";
    });
  }, []);
  return n.value;
}
zl.displayName = "_st";
Object.defineProperties(ye.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: zl }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
Vr("__b", function(i, e) {
  if (typeof e.type == "string") {
    var t, r = e.props;
    for (var n in r)
      if (n !== "children") {
        var s = r[n];
        s instanceof ye && (t || (e.__np = t = {}), t[n] = s, r[n] = s.peek());
      }
  }
  i(e);
});
Vr("__r", function(i, e) {
  i(e), Xi();
  var t, r = e.__c;
  r && (r.__$f &= -2, (t = r.__$u) === void 0 && (r.__$u = t = function(n) {
    var s;
    return Hs(function() {
      s = this;
    }), s.c = function() {
      r.__$f |= 1, r.setState({});
    }, s;
  }())), Xi(t);
});
Vr("__e", function(i, e, t, r) {
  Xi(), i(e, t, r);
});
Vr("diffed", function(i, e) {
  Xi();
  var t;
  if (typeof e.type == "string" && (t = e.__e)) {
    var r = e.__np, n = e.props;
    if (r) {
      var s = t.U;
      if (s)
        for (var o in s) {
          var a = s[o];
          a !== void 0 && !(o in r) && (a.d(), s[o] = void 0);
        }
      else
        t.U = s = {};
      for (var l in r) {
        var u = s[l], c = r[l];
        u === void 0 ? (u = Hd(t, l, c, n), s[l] = u) : u.o(c, n);
      }
    }
  }
  i(e);
});
function Hd(i, e, t, r) {
  var n = e in i && i.ownerSVGElement === void 0, s = Ae(t);
  return { o: function(o, a) {
    s.value = o, r = a;
  }, d: Hs(function() {
    var o = s.value.value;
    r[e] !== o && (r[e] = o, n ? i[e] = o : o ? i.setAttribute(e, o) : i.removeAttribute(e));
  }) };
}
Vr("unmount", function(i, e) {
  if (typeof e.type == "string") {
    var t = e.__e;
    if (t) {
      var r = t.U;
      if (r) {
        t.U = void 0;
        for (var n in r) {
          var s = r[n];
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
  i(e);
});
Vr("__h", function(i, e, t, r) {
  (r < 3 || r === 9) && (e.__$f |= 2), i(e, t, r);
});
et.prototype.shouldComponentUpdate = function(i, e) {
  if (this.__R)
    return !0;
  var t = this.__$u, r = t && t.s !== void 0;
  for (var n in e)
    return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    if (!(r || 2 & this.__$f || 4 & this.__$f) || 1 & this.__$f)
      return !0;
  } else if (!(r || 4 & this.__$f) || 3 & this.__$f)
    return !0;
  for (var s in i)
    if (s !== "__source" && i[s] !== this.props[s])
      return !0;
  for (var o in this.props)
    if (!(o in i))
      return !0;
  return !1;
};
function Gd(i) {
  return tt(function() {
    return Ae(i);
  }, []);
}
const cs = Ae(!1), Z = Ae(null), _r = Ae([]), mr = Ae(!1), Ee = Ae(!1), yr = Ae([]), Qe = Ae(!1), xn = Ae(null), ke = Ae(null), Ji = Ae(!1), _n = Ae(!0), xt = Ae(!1), Wd = () => {
  $d(() => {
    Z.value = null, _r.value = [], mr.value = !1, Ee.value = !1, yr.value = [], Qe.value = !1, xn.value = null, ke.value = null, Ji.value = !1, _n.value = !0, xt.value = !1;
  });
}, Gs = "bm_currentBike", Yd = "v2", Kd = "https://cdn.bikematrix.io", Zd = "1.0.2", Ko = {
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
}, Be = function(i) {
  return new URL(i, Kd).toString();
};
function ql(i) {
  var e, t, r = "";
  if (typeof i == "string" || typeof i == "number")
    r += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var n = i.length;
      for (e = 0; e < n; e++)
        i[e] && (t = ql(i[e])) && (r && (r += " "), r += t);
    } else
      for (t in i)
        i[t] && (r && (r += " "), r += t);
  return r;
}
function Xd() {
  for (var i, e, t = 0, r = "", n = arguments.length; t < n; t++)
    (i = arguments[t]) && (e = ql(i)) && (r && (r += " "), r += e);
  return r;
}
const Ws = "-", Jd = (i) => {
  const e = ep(i), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = i;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Ws);
      return a[0] === "" && a.length !== 1 && a.shift(), $l(a, e) || Qd(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const l = t[o] || [];
      return a && r[o] ? [...l, ...r[o]] : l;
    }
  };
}, $l = (i, e) => {
  var o;
  if (i.length === 0)
    return e.classGroupId;
  const t = i[0], r = e.nextPart.get(t), n = r ? $l(i.slice(1), r) : void 0;
  if (n)
    return n;
  if (e.validators.length === 0)
    return;
  const s = i.join(Ws);
  return (o = e.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : o.classGroupId;
}, Zo = /^\[(.+)\]$/, Qd = (i) => {
  if (Zo.test(i)) {
    const e = Zo.exec(i)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, ep = (i) => {
  const {
    theme: e,
    prefix: t
  } = i, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return rp(Object.entries(i.classGroups), t).forEach(([s, o]) => {
    ds(o, r, s, e);
  }), r;
}, ds = (i, e, t, r) => {
  i.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? e : Xo(e, n);
      s.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (tp(n)) {
        ds(n(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([s, o]) => {
      ds(o, Xo(e, s), t, r);
    });
  });
}, Xo = (i, e) => {
  let t = i;
  return e.split(Ws).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, tp = (i) => i.isThemeGetter, rp = (i, e) => e ? i.map(([t, r]) => {
  const n = r.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, a]) => [e + o, a])) : s);
  return [t, n];
}) : i, ip = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const n = (s, o) => {
    t.set(s, o), e++, e > i && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let o = t.get(s);
      if (o !== void 0)
        return o;
      if ((o = r.get(s)) !== void 0)
        return n(s, o), o;
    },
    set(s, o) {
      t.has(s) ? t.set(s, o) : n(s, o);
    }
  };
}, Vl = "!", np = (i) => {
  const {
    separator: e,
    experimentalParseClassName: t
  } = i, r = e.length === 1, n = e[0], s = e.length, o = (a) => {
    const l = [];
    let u = 0, c = 0, d;
    for (let w = 0; w < a.length; w++) {
      let m = a[w];
      if (u === 0) {
        if (m === n && (r || a.slice(w, w + s) === e)) {
          l.push(a.slice(c, w)), c = w + s;
          continue;
        }
        if (m === "/") {
          d = w;
          continue;
        }
      }
      m === "[" ? u++ : m === "]" && u--;
    }
    const h = l.length === 0 ? a : a.substring(c), f = h.startsWith(Vl), v = f ? h.substring(1) : h, g = d && d > c ? d - c : void 0;
    return {
      modifiers: l,
      hasImportantModifier: f,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return t ? (a) => t({
    className: a,
    parseClassName: o
  }) : o;
}, sp = (i) => {
  if (i.length <= 1)
    return i;
  const e = [];
  let t = [];
  return i.forEach((r) => {
    r[0] === "[" ? (e.push(...t.sort(), r), t = []) : t.push(r);
  }), e.push(...t.sort()), e;
}, op = (i) => ({
  cache: ip(i.cacheSize),
  parseClassName: np(i),
  ...Jd(i)
}), ap = /\s+/, lp = (i, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: n
  } = e, s = [], o = i.trim().split(ap);
  let a = "";
  for (let l = o.length - 1; l >= 0; l -= 1) {
    const u = o[l], {
      modifiers: c,
      hasImportantModifier: d,
      baseClassName: h,
      maybePostfixModifierPosition: f
    } = t(u);
    let v = !!f, g = r(v ? h.substring(0, f) : h);
    if (!g) {
      if (!v) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (g = r(h), !g) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      v = !1;
    }
    const w = sp(c).join(":"), m = d ? w + Vl : w, b = m + g;
    if (s.includes(b))
      continue;
    s.push(b);
    const x = n(g, v);
    for (let _ = 0; _ < x.length; ++_) {
      const C = x[_];
      s.push(m + C);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function up() {
  let i = 0, e, t, r = "";
  for (; i < arguments.length; )
    (e = arguments[i++]) && (t = jl(e)) && (r && (r += " "), r += t);
  return r;
}
const jl = (i) => {
  if (typeof i == "string")
    return i;
  let e, t = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (e = jl(i[r])) && (t && (t += " "), t += e);
  return t;
};
function cp(i, ...e) {
  let t, r, n, s = o;
  function o(l) {
    const u = e.reduce((c, d) => d(c), i());
    return t = op(u), r = t.cache.get, n = t.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = lp(l, t);
    return n(l, c), c;
  }
  return function() {
    return s(up.apply(null, arguments));
  };
}
const se = (i) => {
  const e = (t) => t[i] || [];
  return e.isThemeGetter = !0, e;
}, Ul = /^\[(?:([a-z-]+):)?(.+)\]$/i, dp = /^\d+\/\d+$/, pp = /* @__PURE__ */ new Set(["px", "full", "screen"]), fp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, mp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, gt = (i) => Cr(i) || pp.has(i) || dp.test(i), Tt = (i) => jr(i, "length", Dp), Cr = (i) => !!i && !Number.isNaN(Number(i)), Fn = (i) => jr(i, "number", Cr), Hr = (i) => !!i && Number.isInteger(Number(i)), vp = (i) => i.endsWith("%") && Cr(i.slice(0, -1)), K = (i) => Ul.test(i), Lt = (i) => fp.test(i), wp = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xp = (i) => jr(i, wp, Hl), _p = (i) => jr(i, "position", Hl), yp = /* @__PURE__ */ new Set(["image", "url"]), Cp = (i) => jr(i, yp, Sp), kp = (i) => jr(i, "", Ap), Gr = () => !0, jr = (i, e, t) => {
  const r = Ul.exec(i);
  return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : t(r[2]) : !1;
}, Dp = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hp.test(i) && !gp.test(i)
), Hl = () => !1, Ap = (i) => mp.test(i), Sp = (i) => bp.test(i), Ep = () => {
  const i = se("colors"), e = se("spacing"), t = se("blur"), r = se("brightness"), n = se("borderColor"), s = se("borderRadius"), o = se("borderSpacing"), a = se("borderWidth"), l = se("contrast"), u = se("grayscale"), c = se("hueRotate"), d = se("invert"), h = se("gap"), f = se("gradientColorStops"), v = se("gradientColorStopPositions"), g = se("inset"), w = se("margin"), m = se("opacity"), b = se("padding"), x = se("saturate"), _ = se("scale"), C = se("sepia"), A = se("skew"), k = se("space"), y = se("translate"), D = () => ["auto", "contain", "none"], E = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", K, e], T = () => [K, e], F = () => ["", gt, Tt], N = () => ["auto", Cr, K], O = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], R = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], B = () => ["", "0", K], P = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], V = () => [Cr, K];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Gr],
      spacing: [gt, Tt],
      blur: ["none", "", Lt, K],
      brightness: V(),
      borderColor: [i],
      borderRadius: ["none", "", "full", Lt, K],
      borderSpacing: T(),
      borderWidth: F(),
      contrast: V(),
      grayscale: B(),
      hueRotate: V(),
      invert: B(),
      gap: T(),
      gradientColorStops: [i],
      gradientColorStopPositions: [vp, Tt],
      inset: L(),
      margin: L(),
      opacity: V(),
      padding: T(),
      saturate: V(),
      scale: V(),
      sepia: B(),
      skew: V(),
      space: T(),
      translate: T()
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
        columns: [Lt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": P()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": P()
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
        object: [...O(), K]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", Hr, K]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: L()
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
        grow: B()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: B()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Hr, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Gr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Hr, K]
        }, K]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Gr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Hr, K]
        }, K]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        justify: ["normal", ...S()]
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
        content: ["normal", ...S(), "baseline"]
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
        "place-content": [...S(), "baseline"]
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
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
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
        "space-x": [k]
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
        "space-y": [k]
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
          screen: [Lt]
        }, Lt]
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
        text: ["base", Lt, Tt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Fn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Gr]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
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
        "line-clamp": ["none", Cr, Fn]
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
        placeholder: [i]
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
        text: [i]
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", gt, Tt]
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
        decoration: [i]
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
        indent: T()
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
        bg: [...O(), _p]
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
        bg: ["auto", "cover", "contain", xp]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Cp]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [i]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
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
        border: [...q(), "hidden"]
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
        divide: q()
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
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [n]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [n]
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
        outline: ["", ...q()]
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
        outline: [gt, Tt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [i]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: F()
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
        ring: [i]
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
        "ring-offset": [gt, Tt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [i]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Lt, kp]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Gr]
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
        "mix-blend": [...R(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": R()
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
        brightness: [r]
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
        "drop-shadow": ["", "none", Lt, K]
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
        sepia: [C]
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
        "backdrop-brightness": [r]
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
        "backdrop-sepia": [C]
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
        duration: V()
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
        delay: V()
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
        rotate: [Hr, K]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [y]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [y]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
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
        accent: ["auto", i]
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
        caret: [i]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        fill: [i, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [gt, Tt, Fn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [i, "none"]
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
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}, Bp = /* @__PURE__ */ cp(Ep);
function X(...i) {
  return Bp(Xd(i));
}
const Nn = crypto.randomUUID();
function On() {
  const i = "bm_window_id";
  let e = sessionStorage.getItem(i);
  return e || (e = crypto.randomUUID(), sessionStorage.setItem(i, e)), e;
}
const Tp = {
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
  constructor(e, t, r, n) {
    this._apiUrl = n ? window.location.origin + "/apps/proxy/api/" : e, this._apiKey = t ?? "", this._apiToken = r ?? "", this._apiType = n ? "shopify" : "bikematrix";
  }
  getEndpoint(e) {
    return Tp[this._apiType][e];
  }
  async getBikeBrands() {
    const e = this.getEndpoint("bikeBrands"), t = await this.makeRequest(e);
    return t.success ? { success: t.success, data: t.data } : {
      success: t.success,
      error: "error_generic GetBikeBrands",
      logError: t.error
    };
  }
  async getBikeModels(e) {
    if (!e)
      return { success: !1, error: "error_generic" };
    const t = this.getEndpoint("bikeModels"), r = await this.makeRequest(t, {
      params: {
        bikeBrandId: e
      }
    });
    return r.success ? { data: r.data, success: r.success } : {
      success: r.success,
      error: "error_generic GetBikeModels",
      logError: r.error
    };
  }
  async getBikeFrameSeries(e) {
    if (!e)
      return { error: "error_generic", success: !1 };
    const t = this.getEndpoint("framesSeries"), r = await this.makeRequest(t, {
      params: {
        bikeModelId: e
      }
    });
    return r.success ? { data: r.data, success: r.success } : {
      success: r.success,
      error: "error_generic GetBikeFrameSeries",
      logError: r.error
    };
  }
  async getBikeSpecs(e) {
    if (!e)
      return { success: !1, error: "error_generic GetBikeSpecs" };
    const t = this.getEndpoint("bikeSpecs"), r = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return r.success ? { data: r.data, success: r.success } : {
      success: r.success,
      error: "error_generic GetBikeSpecs",
      logError: r.error
    };
  }
  async getYears(e) {
    if (!e)
      return { error: "error_generic GetBikeYears", success: !1 };
    const t = this.getEndpoint("bikeSpecYears"), r = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return r.success ? { data: r.data, success: r.success } : {
      error: "error_generic GetBikeYears",
      success: !1,
      logError: r.success
    };
  }
  async getFrameSizes(e, t, r) {
    if (!e || !t)
      return { success: !1, error: "error_generic GetFrameSizes" };
    const n = this.getEndpoint("bikeSpecSizes"), s = await this.makeRequest(n, {
      params: {
        bikeModelSpecId: e,
        bikeSpec: t,
        year: r
      }
    });
    return s.success ? { data: s.data, success: s.success } : {
      success: s.success,
      error: "error_generic GetFrameSizes",
      logError: s.error
    };
  }
  async getBikes(e, t, r) {
    if (e && (t || r)) {
      const n = this.getEndpoint("bikeSpecs"), s = await this.makeRequest(n, {
        params: {
          bikeModelSpecId: e,
          bikeSpec: t,
          year: r
        }
      });
      return s.success ? { data: s.data, success: s.success } : {
        success: s.success,
        error: "error_generic GetBikes",
        logError: s.error
      };
    } else
      return { success: !1, error: "error_generic GetBikes" };
  }
  async getBrandProductCategories(e) {
    if (e) {
      const t = this.getEndpoint("bikeBrandProductCategories"), r = await this.makeRequest(t, {
        params: {
          bikeBrandId: e
        }
      });
      return r.success ? { data: r.data, success: !0 } : (console.error(r.error), {
        success: !1,
        error: "error_generic GetBrandProductCategories",
        logError: r.error
      });
    } else
      return {
        success: !1,
        error: "error_generic GetBrandProductCategories"
      };
  }
  async checkSkuCompatibility(e, t, r, n, s) {
    if (e && t) {
      const o = this.getEndpoint("checkSku") + `/${e}/${t}/${r}`, a = {
        "bm-caller": n,
        "bm-url": window.location.href,
        "bm-page-load-correlation-id": Nn,
        "bm-window-correlation-id": On()
      };
      s && (a["bm-collection-handle"] = s);
      const l = await this.makeRequest(o, {
        headers: a
      });
      return l.success ? { success: l.success, data: l.data } : {
        success: l.success,
        error: "error_generic CheckSkuCompatibility",
        logError: l.error
      };
    } else
      return { success: !1, error: "error_generic CheckSkuCompatibility" };
  }
  async checkSkusCompatibility(e, t, r, n, s) {
    if (e && t) {
      const o = this.getEndpoint("checkSkus") + `/${e}/${t}/${r}`, a = {
        "bm-caller": n,
        "bm-url": window.location.href,
        "bm-page-load-correlation-id": Nn,
        "bm-window-correlation-id": On()
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
      return { success: !1, error: "error_generic CheckSkusCompatibility" };
  }
  async checkSkusCompatibilityWithResults(e, t, r, n, s, o = {}) {
    if (e && t) {
      const a = this.getEndpoint("checkSkusWithResults") + `/${e}/${r}`, l = {
        "Content-Type": "application/json",
        "bm-caller": n,
        "bm-url": window.location.href,
        "bm-page-load-correlation-id": Nn,
        "bm-window-correlation-id": On()
      };
      s && (l["bm-collection-handle"] = s);
      const u = await this.makeRequest(a, {
        body: JSON.stringify(t),
        method: "POST",
        headers: l,
        ...o
      });
      return u.success ? { data: u.data, success: u.success } : {
        success: u.success,
        error: "error_compatiblelist",
        logError: u.error
      };
    } else
      return { success: !1, error: "error_compatiblelist" };
  }
  async getActiveSubscription(e) {
    if (this._apiType !== "shopify") {
      e({ activeSubscription: !0 });
      return;
    }
    var t = "activeSubscription";
    const r = await this.makeRequest(t);
    if (!r.success) {
      console.log(`getActiveSubscription Error: ${r.error}`);
      return;
    }
    e(r.data);
  }
  // == Virtual Workshop == //
  /**
   * Get Bike BOM data
   * @param bikeKey: string
   * @returns Bike BOM data
   */
  async getBikeBom(e) {
    if (!e)
      return { success: !1, error: "error_generic getBikeBom" };
    const t = this.getEndpoint("bikeBom"), r = await this.makeRequest(t, {
      params: {
        bikeKey: e
      }
    });
    return r.success ? { data: r.data, success: r.success } : {
      success: r.success,
      error: "error_get_bike_bom",
      logError: r.error
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
    const t = this.getEndpoint("customBike"), r = await this.makeRequest(t, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e
      }
    });
    return r.success ? { data: r.data, success: r.success } : {
      success: r.success,
      error: "error_add_custom_bike",
      logError: r.error
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
    const r = this.getEndpoint("findProducts"), n = await this.makeRequest(r, {
      params: {
        search: e,
        productCategoryId: t,
        recordCount: 500
      }
    });
    return n.success ? { data: n.data, success: n.success } : {
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
  async addComponent(e, t, r, n) {
    if (!e || !t || !r || !n)
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
        productId: r,
        bikeFieldName: n
      }
    });
    return o.success ? { data: o.data, success: o.success } : {
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
  async removeComponent(e, t, r) {
    if (!e || !t || !r)
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
        bikeFieldName: r
      }
    });
    return s.success ? { data: s.data, success: s.success } : {
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
  async revertComponent(e, t, r) {
    if (!e || !t || !r)
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
        bikeFieldName: r
      }
    });
    return s.success ? { data: s.data, success: s.success } : {
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
    const r = this.getEndpoint("saveCustomBike"), n = await this.makeRequest(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        email: t
      }
    });
    return n.success ? { data: n.data, success: n.success } : {
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
    const r = this.getEndpoint("updateCustomBike"), n = await this.makeRequest(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        productCategoryId: t
      }
    });
    return n.success ? { data: n.data, success: n.success } : {
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
    const r = this.getEndpoint("updateCustomBikeName"), n = await this.makeRequest(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        name: t
      }
    });
    return n.success ? { data: n.data, success: n.success } : {
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
    const r = this.getEndpoint("raceControl"), n = await this.makeRequest(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t),
      params: {
        id: e
      }
    });
    return n.success ? { data: n.data, success: n.success } : {
      success: n.success,
      error: "error_generic raceControl",
      logError: n.error
    };
  }
  async makeRequest(e, t = {}) {
    const r = new URL(e, this._apiUrl), n = {
      "Cache-Control": "no-cache",
      ...this._apiKey && { "bm-subscription-key": this._apiKey },
      ...this._apiToken && { "bm-app-token": this._apiToken },
      "bm-sdk-version": "1.3.6"
    };
    typeof t.params == "object" && (Object.keys(t.params).forEach((o) => {
      t.params[o] && r.searchParams.set(o, t.params[o]);
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
      const l = await fetch(r == null ? void 0 : r.href, a), u = await l.json().catch(() => {
        throw new Error(
          "Request failed: " + (l.statusText || "Status" + l.status)
        );
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
async function Gl(i) {
  var h;
  const {
    categories: e,
    collections: t,
    apiUrl: r,
    apiKey: n,
    apiToken: s,
    isShopify: o,
    logLevel: a
  } = window.BikeMatrix.getConfig(), l = JSON.parse(
    sessionStorage.getItem("bm_categories") || "null"
  ), u = JSON.parse(localStorage.getItem(Gs) || "null"), c = new Se(r, n, s, o);
  let d = [];
  if (a === "verbose" && console.log(
    "useCompatibleCollections sessionCollections",
    l
  ), !l || !(l != null && l.collections) || !(l != null && l.collections.length) || (l == null ? void 0 : l.key) !== (u == null ? void 0 : u.key)) {
    a === "verbose" && console.log("useCompatibleCollections fetching new collections");
    const f = await c.getBrandProductCategories(i);
    if (a === "verbose" && console.log(
      "useCompatibleCollections bikeBrandProductCategories",
      f
    ), !f.success)
      return console.log(f), a === "verbose" && console.error(f.error), d = { error: f.error }, d;
    if (a === "verbose" && (console.log("useCompatibleCollections categories", e), console.log("useCompatibleCollections collections", t)), ((h = f.data) == null ? void 0 : h.length) > 0) {
      let v = e.filter(
        (g) => {
          var w;
          return !!g.collection && ((w = f == null ? void 0 : f.data) == null ? void 0 : w.some(
            (m) => m.product_Category.toLowerCase() === g.title.toLowerCase()
          ));
        }
      );
      a === "verbose" && console.log(
        "useCompatibleCollections availableCategories",
        v
      ), d = v.map((g) => t.filter(
        (m) => g.collection.split(",").map((b) => b.trim().toLowerCase()).includes(m.title.toLowerCase())
      ).map((m) => ({
        title: m.title,
        text_id: g.text_id,
        handle: m.handle,
        url: m.url
      }))).flat(), a === "verbose" && console.log(
        "useCompatibleCollections compatibleCollections",
        d
      ), d = d == null ? void 0 : d.filter(
        (g, w, m) => w === m.findIndex(
          (b) => b.title === g.title && b.text_id === g.text_id && b.handle === g.handle && b.url === g.url
        )
      );
    }
    sessionStorage.setItem(
      "bm_categories",
      JSON.stringify({ key: u == null ? void 0 : u.key, collections: d })
    ), a === "verbose" && console.log(
      "useCompatibleCollections fetched collections",
      d
    );
  } else
    a === "verbose" && console.log("useCompatibleCollections using session collections"), d = l.collections;
  return d;
}
const W = (i) => typeof i == "string", Wr = () => {
  let i, e;
  const t = new Promise((r, n) => {
    i = r, e = n;
  });
  return t.resolve = i, t.reject = e, t;
}, Jo = (i) => i == null ? "" : "" + i, Lp = (i, e, t) => {
  i.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}, Fp = /###/g, Qo = (i) => i && i.indexOf("###") > -1 ? i.replace(Fp, ".") : i, ea = (i) => !i || W(i), oi = (i, e, t) => {
  const r = W(e) ? e.split(".") : e;
  let n = 0;
  for (; n < r.length - 1; ) {
    if (ea(i))
      return {};
    const s = Qo(r[n]);
    !i[s] && t && (i[s] = new t()), Object.prototype.hasOwnProperty.call(i, s) ? i = i[s] : i = {}, ++n;
  }
  return ea(i) ? {} : {
    obj: i,
    k: Qo(r[n])
  };
}, ta = (i, e, t) => {
  const {
    obj: r,
    k: n
  } = oi(i, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[n] = t;
    return;
  }
  let s = e[e.length - 1], o = e.slice(0, e.length - 1), a = oi(i, o, Object);
  for (; a.obj === void 0 && o.length; )
    s = `${o[o.length - 1]}.${s}`, o = o.slice(0, o.length - 1), a = oi(i, o, Object), a != null && a.obj && typeof a.obj[`${a.k}.${s}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${s}`] = t;
}, Np = (i, e, t, r) => {
  const {
    obj: n,
    k: s
  } = oi(i, e, Object);
  n[s] = n[s] || [], n[s].push(t);
}, Qi = (i, e) => {
  const {
    obj: t,
    k: r
  } = oi(i, e);
  if (t && Object.prototype.hasOwnProperty.call(t, r))
    return t[r];
}, Op = (i, e, t) => {
  const r = Qi(i, t);
  return r !== void 0 ? r : Qi(e, t);
}, Wl = (i, e, t) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in i ? W(i[r]) || i[r] instanceof String || W(e[r]) || e[r] instanceof String ? t && (i[r] = e[r]) : Wl(i[r], e[r], t) : i[r] = e[r]);
  return i;
}, cr = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Mp = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Pp = (i) => W(i) ? i.replace(/[&<>"'\/]/g, (e) => Mp[e]) : i;
class Ip {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const r = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r;
  }
}
const Rp = [" ", ",", "?", "!", ";"], zp = new Ip(20), qp = (i, e, t) => {
  e = e || "", t = t || "";
  const r = Rp.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (r.length === 0)
    return !0;
  const n = zp.getRegExp(`(${r.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let s = !n.test(i);
  if (!s) {
    const o = i.indexOf(t);
    o > 0 && !n.test(i.substring(0, o)) && (s = !0);
  }
  return s;
}, ps = function(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!i)
    return;
  if (i[e])
    return Object.prototype.hasOwnProperty.call(i, e) ? i[e] : void 0;
  const r = e.split(t);
  let n = i;
  for (let s = 0; s < r.length; ) {
    if (!n || typeof n != "object")
      return;
    let o, a = "";
    for (let l = s; l < r.length; ++l)
      if (l !== s && (a += t), a += r[l], o = n[a], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && l < r.length - 1)
          continue;
        s += l - s + 1;
        break;
      }
    n = o;
  }
  return n;
}, en = (i) => i == null ? void 0 : i.replace("_", "-"), $p = {
  type: "logger",
  log(i) {
    this.output("log", i);
  },
  warn(i) {
    this.output("warn", i);
  },
  error(i) {
    this.output("error", i);
  },
  output(i, e) {
    var t, r;
    (r = (t = console == null ? void 0 : console[i]) == null ? void 0 : t.apply) == null || r.call(t, console, e);
  }
};
class tn {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || $p, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, r, n) {
    return n && !this.debug ? null : (W(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new tn(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new tn(this.logger, e);
  }
}
var ut = new tn();
class yn {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const n = this.observers[r].get(t) || 0;
      this.observers[r].set(t, n + 1);
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
  emit(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((o) => {
      let [a, l] = o;
      for (let u = 0; u < l; u++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((o) => {
      let [a, l] = o;
      for (let u = 0; u < l; u++)
        a.apply(a, [e, ...r]);
    });
  }
}
class ra extends yn {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, r) {
    var u, c;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, o = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, t], r && (Array.isArray(r) ? a.push(...r) : W(r) && s ? a.push(...r.split(s)) : a.push(r)));
    const l = Qi(this.data, a);
    return !l && !t && !r && e.indexOf(".") > -1 && (e = a[0], t = a[1], r = a.slice(2).join(".")), l || !o || !W(r) ? l : ps((c = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : c[t], r, s);
  }
  addResource(e, t, r, n) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let a = [e, t];
    r && (a = a.concat(o ? r.split(o) : r)), e.indexOf(".") > -1 && (a = e.split("."), n = t, t = a[1]), this.addNamespaces(t), ta(this.data, a, n), s.silent || this.emit("added", e, t, r, n);
  }
  addResources(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const s in r)
      (W(r[s]) || Array.isArray(r[s])) && this.addResource(e, t, s, r[s], {
        silent: !0
      });
    n.silent || this.emit("added", e, t, r);
  }
  addResourceBundle(e, t, r, n, s) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [e, t];
    e.indexOf(".") > -1 && (a = e.split("."), n = r, r = t, t = a[1]), this.addNamespaces(t);
    let l = Qi(this.data, a) || {};
    o.skipCopy || (r = JSON.parse(JSON.stringify(r))), n ? Wl(l, r, s) : l = {
      ...l,
      ...r
    }, ta(this.data, a, l), o.silent || this.emit("added", e, t, r);
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
var Yl = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, r, n) {
    return i.forEach((s) => {
      var o;
      e = ((o = this.processors[s]) == null ? void 0 : o.process(e, t, r, n)) ?? e;
    }), e;
  }
};
const ia = {}, na = (i) => !W(i) && typeof i != "boolean" && typeof i != "number";
class rn extends yn {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Lp(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = ut.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const r = this.resolve(e, t);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  extractFromKey(e, t) {
    let r = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const n = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let s = t.ns || this.options.defaultNS || [];
    const o = r && e.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !qp(e, r, n);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: W(s) ? [s] : s
        };
      const u = e.split(r);
      (r !== n || r === n && this.options.ns.indexOf(u[0]) > -1) && (s = u.shift()), e = u.join(n);
    }
    return {
      key: e,
      namespaces: W(s) ? [s] : s
    };
  }
  translate(e, t, r) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null)
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const n = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, s = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: a
    } = this.extractFromKey(e[e.length - 1], t), l = a[a.length - 1], u = t.lng || this.language, c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((u == null ? void 0 : u.toLowerCase()) === "cimode") {
      if (c) {
        const L = t.nsSeparator || this.options.nsSeparator;
        return n ? {
          res: `${l}${L}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${L}${o}`;
      }
      return n ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(t)
      } : o;
    }
    const d = this.resolve(e, t);
    let h = d == null ? void 0 : d.res;
    const f = (d == null ? void 0 : d.usedKey) || o, v = (d == null ? void 0 : d.exactUsedKey) || o, g = ["[object Number]", "[object Function]", "[object RegExp]"], w = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, m = !this.i18nFormat || this.i18nFormat.handleAsObject, b = t.count !== void 0 && !W(t.count), x = rn.hasDefaultValue(t), _ = b ? this.pluralResolver.getSuffix(u, t.count, t) : "", C = t.ordinal && b ? this.pluralResolver.getSuffix(u, t.count, {
      ordinal: !1
    }) : "", A = b && !t.ordinal && t.count === 0, k = A && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${_}`] || t[`defaultValue${C}`] || t.defaultValue;
    let y = h;
    m && !h && x && (y = k);
    const D = na(y), E = Object.prototype.toString.apply(y);
    if (m && y && D && g.indexOf(E) < 0 && !(W(w) && Array.isArray(y))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const L = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, y, {
          ...t,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return n ? (d.res = L, d.usedParams = this.getUsedParamsDetails(t), d) : L;
      }
      if (s) {
        const L = Array.isArray(y), T = L ? [] : {}, F = L ? v : f;
        for (const N in y)
          if (Object.prototype.hasOwnProperty.call(y, N)) {
            const O = `${F}${s}${N}`;
            x && !h ? T[N] = this.translate(O, {
              ...t,
              defaultValue: na(k) ? k[N] : void 0,
              joinArrays: !1,
              ns: a
            }) : T[N] = this.translate(O, {
              ...t,
              joinArrays: !1,
              ns: a
            }), T[N] === O && (T[N] = y[N]);
          }
        h = T;
      }
    } else if (m && W(w) && Array.isArray(h))
      h = h.join(w), h && (h = this.extendTranslation(h, e, t, r));
    else {
      let L = !1, T = !1;
      !this.isValidLookup(h) && x && (L = !0, h = k), this.isValidLookup(h) || (T = !0, h = o);
      const N = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && T ? void 0 : h, O = x && k !== h && this.options.updateMissing;
      if (T || L || O) {
        if (this.logger.log(O ? "updateKey" : "missingKey", u, l, o, O ? k : h), s) {
          const B = this.resolve(o, {
            ...t,
            keySeparator: !1
          });
          B && B.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let q = [];
        const R = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && R && R[0])
          for (let B = 0; B < R.length; B++)
            q.push(R[B]);
        else
          this.options.saveMissingTo === "all" ? q = this.languageUtils.toResolveHierarchy(t.lng || this.language) : q.push(t.lng || this.language);
        const S = (B, P, V) => {
          var H;
          const U = x && V !== h ? V : N;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(B, l, P, U, O, t) : (H = this.backendConnector) != null && H.saveMissing && this.backendConnector.saveMissing(B, l, P, U, O, t), this.emit("missingKey", B, l, P, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && b ? q.forEach((B) => {
          const P = this.pluralResolver.getSuffixes(B, t);
          A && t[`defaultValue${this.options.pluralSeparator}zero`] && P.indexOf(`${this.options.pluralSeparator}zero`) < 0 && P.push(`${this.options.pluralSeparator}zero`), P.forEach((V) => {
            S([B], o + V, t[`defaultValue${V}`] || k);
          });
        }) : S(q, o, k));
      }
      h = this.extendTranslation(h, e, t, d, r), T && h === o && this.options.appendNamespaceToMissingKey && (h = `${l}:${o}`), (T || L) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, L ? h : void 0));
    }
    return n ? (d.res = h, d.usedParams = this.getUsedParamsDetails(t), d) : h;
  }
  extendTranslation(e, t, r, n, s) {
    var u, c;
    var o = this;
    if ((u = this.i18nFormat) != null && u.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || n.usedLng, n.usedNS, n.usedKey, {
        resolved: n
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const d = W(e) && (((c = r == null ? void 0 : r.interpolation) == null ? void 0 : c.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (d) {
        const v = e.match(this.interpolator.nestingRegexp);
        h = v && v.length;
      }
      let f = r.replace && !W(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), e = this.interpolator.interpolate(e, f, r.lng || this.language || n.usedLng, r), d) {
        const v = e.match(this.interpolator.nestingRegexp), g = v && v.length;
        h < g && (r.nest = !1);
      }
      !r.lng && n && n.res && (r.lng = this.language || n.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var v = arguments.length, g = new Array(v), w = 0; w < v; w++)
          g[w] = arguments[w];
        return (s == null ? void 0 : s[0]) === g[0] && !r.context ? (o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`), null) : o.translate(...g, t);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = W(a) ? [a] : a;
    return e != null && (l != null && l.length) && r.applyPostProcessor !== !1 && (e = Yl.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...n,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, n, s, o, a;
    return W(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(r))
        return;
      const u = this.extractFromKey(l, t), c = u.key;
      n = c;
      let d = u.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const h = t.count !== void 0 && !W(t.count), f = h && !t.ordinal && t.count === 0, v = t.context !== void 0 && (W(t.context) || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      d.forEach((w) => {
        var m, b;
        this.isValidLookup(r) || (a = w, !ia[`${g[0]}-${w}`] && ((m = this.utils) != null && m.hasLoadedNamespace) && !((b = this.utils) != null && b.hasLoadedNamespace(a)) && (ia[`${g[0]}-${w}`] = !0, this.logger.warn(`key "${n}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((x) => {
          var A;
          if (this.isValidLookup(r))
            return;
          o = x;
          const _ = [c];
          if ((A = this.i18nFormat) != null && A.addLookupKeys)
            this.i18nFormat.addLookupKeys(_, c, x, w, t);
          else {
            let k;
            h && (k = this.pluralResolver.getSuffix(x, t.count, t));
            const y = `${this.options.pluralSeparator}zero`, D = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (_.push(c + k), t.ordinal && k.indexOf(D) === 0 && _.push(c + k.replace(D, this.options.pluralSeparator)), f && _.push(c + y)), v) {
              const E = `${c}${this.options.contextSeparator}${t.context}`;
              _.push(E), h && (_.push(E + k), t.ordinal && k.indexOf(D) === 0 && _.push(E + k.replace(D, this.options.pluralSeparator)), f && _.push(E + y));
            }
          }
          let C;
          for (; C = _.pop(); )
            this.isValidLookup(r) || (s = C, r = this.getResource(x, w, C, t));
        }));
      });
    }), {
      res: r,
      usedKey: n,
      exactUsedKey: s,
      usedLng: o,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, r) {
    var s;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (s = this.i18nFormat) != null && s.getResource ? this.i18nFormat.getResource(e, t, r, n) : this.resourceStore.getResource(e, t, r, n);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && !W(e.replace);
    let n = r ? e.replace : e;
    if (r && typeof e.count < "u" && (n.count = e.count), this.options.interpolation.defaultVariables && (n = {
      ...this.options.interpolation.defaultVariables,
      ...n
    }), !r) {
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
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && e[r] !== void 0)
        return !0;
    return !1;
  }
}
class sa {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ut.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = en(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = en(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (W(e) && e.indexOf("-") > -1) {
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
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e)
      return null;
    let t;
    return e.forEach((r) => {
      if (t)
        return;
      const n = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
    }), !t && this.options.supportedLngs && e.forEach((r) => {
      if (t)
        return;
      const n = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(n))
        return t = n;
      t = this.options.supportedLngs.find((s) => {
        if (s === n)
          return s;
        if (!(s.indexOf("-") < 0 && n.indexOf("-") < 0) && (s.indexOf("-") > 0 && n.indexOf("-") < 0 && s.substring(0, s.indexOf("-")) === n || s.indexOf(n) === 0 && n.length > 1))
          return s;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e)
      return [];
    if (typeof e == "function" && (e = e(t)), W(e) && (e = [e]), Array.isArray(e))
      return e;
    if (!t)
      return e.default || [];
    let r = e[t];
    return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || [];
  }
  toResolveHierarchy(e, t) {
    const r = this.getFallbackCodes(t || this.options.fallbackLng || [], e), n = [], s = (o) => {
      o && (this.isSupportedCode(o) ? n.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return W(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : W(e) && s(this.formatLanguageCode(e)), r.forEach((o) => {
      n.indexOf(o) < 0 && s(this.formatLanguageCode(o));
    }), n;
  }
}
const oa = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, aa = {
  select: (i) => i === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Vp {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = ut.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = en(e === "dev" ? "en" : e), n = t.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
      cleanedCode: r,
      type: n
    });
    if (s in this.pluralRulesCache)
      return this.pluralRulesCache[s];
    let o;
    try {
      o = new Intl.PluralRules(r, {
        type: n
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), aa;
      if (!e.match(/-|_/))
        return aa;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      o = this.getRule(l, t);
    }
    return this.pluralRulesCache[s] = o, o;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, r).map((n) => `${t}${n}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), r ? r.resolvedOptions().pluralCategories.sort((n, s) => oa[n] - oa[s]).map((n) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : [];
  }
  getSuffix(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const n = this.getRule(e, r);
    return n ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, r));
  }
}
const la = function(i, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = Op(i, e, t);
  return !s && n && W(t) && (s = ps(i, t, r), s === void 0 && (s = ps(e, t, r))), s;
}, Mn = (i) => i.replace(/\$/g, "$$$$");
class jp {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ut.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((r) => r), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: r,
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
      nestingSuffix: v,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: w,
      maxReplaces: m,
      alwaysFormat: b
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Pp, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = s ? cr(s) : o || "{{", this.suffix = a ? cr(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = h ? cr(h) : f || cr("$t("), this.nestingSuffix = v ? cr(v) : g || cr(")"), this.nestingOptionsSeparator = w || ",", this.maxReplaces = m || 1e3, this.alwaysFormat = b !== void 0 ? b : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, r) => (t == null ? void 0 : t.source) === r ? (t.lastIndex = 0, t) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, r, n) {
    var f;
    let s, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const b = la(t, l, v, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(b, void 0, r, {
          ...n,
          ...t,
          interpolationkey: v
        }) : b;
      }
      const g = v.split(this.formatSeparator), w = g.shift().trim(), m = g.join(this.formatSeparator).trim();
      return this.format(la(t, l, w, this.options.keySeparator, this.options.ignoreJSONStructure), m, r, {
        ...n,
        ...t,
        interpolationkey: w
      });
    };
    this.resetRegExp();
    const c = (n == null ? void 0 : n.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((f = n == null ? void 0 : n.interpolation) == null ? void 0 : f.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (v) => Mn(v)
    }, {
      regex: this.regexp,
      safeValue: (v) => this.escapeValue ? Mn(this.escape(v)) : Mn(v)
    }].forEach((v) => {
      for (a = 0; s = v.regex.exec(e); ) {
        const g = s[1].trim();
        if (o = u(g), o === void 0)
          if (typeof c == "function") {
            const m = c(e, s, n);
            o = W(m) ? m : "";
          } else if (n && Object.prototype.hasOwnProperty.call(n, g))
            o = "";
          else if (d) {
            o = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), o = "";
        else
          !W(o) && !this.useRawValueToEscape && (o = Jo(o));
        const w = v.safeValue(o);
        if (e = e.replace(s[0], w), d ? (v.regex.lastIndex += o.length, v.regex.lastIndex -= s[0].length) : v.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, s, o;
    const a = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0)
        return l;
      const d = l.split(new RegExp(`${c}[ ]*{`));
      let h = `{${d[1]}`;
      l = d[0], h = this.interpolate(h, o);
      const f = h.match(/'/g), v = h.match(/"/g);
      (((f == null ? void 0 : f.length) ?? 0) % 2 === 0 && !v || v.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        o = JSON.parse(h), u && (o = {
          ...u,
          ...o
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, g), `${l}${c}${h}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    };
    for (; n = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...r
      }, o = o.replace && !W(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let u = !1;
      if (n[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(n[1])) {
        const c = n[1].split(this.formatSeparator).map((d) => d.trim());
        n[1] = c.shift(), l = c, u = !0;
      }
      if (s = t(a.call(this, n[1].trim(), o), o), s && n[0] === e && !W(s))
        return s;
      W(s) || (s = Jo(s)), s || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), s = ""), u && (s = l.reduce((c, d) => this.format(c, d, r.lng, {
        ...r,
        interpolationkey: n[1].trim()
      }), s.trim())), e = e.replace(n[0], s), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Up = (i) => {
  let e = i.toLowerCase().trim();
  const t = {};
  if (i.indexOf("(") > -1) {
    const r = i.split("(");
    e = r[0].toLowerCase().trim();
    const n = r[1].substring(0, r[1].length - 1);
    e === "currency" && n.indexOf(":") < 0 ? t.currency || (t.currency = n.trim()) : e === "relativetime" && n.indexOf(":") < 0 ? t.range || (t.range = n.trim()) : n.split(";").forEach((o) => {
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
}, dr = (i) => {
  const e = {};
  return (t, r, n) => {
    let s = n;
    n && n.interpolationkey && n.formatParams && n.formatParams[n.interpolationkey] && n[n.interpolationkey] && (s = {
      ...s,
      [n.interpolationkey]: void 0
    });
    const o = r + JSON.stringify(s);
    let a = e[o];
    return a || (a = i(en(r), n), e[o] = a), a(t);
  };
};
class Hp {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ut.create("formatter"), this.options = e, this.formats = {
      number: dr((t, r) => {
        const n = new Intl.NumberFormat(t, {
          ...r
        });
        return (s) => n.format(s);
      }),
      currency: dr((t, r) => {
        const n = new Intl.NumberFormat(t, {
          ...r,
          style: "currency"
        });
        return (s) => n.format(s);
      }),
      datetime: dr((t, r) => {
        const n = new Intl.DateTimeFormat(t, {
          ...r
        });
        return (s) => n.format(s);
      }),
      relativetime: dr((t, r) => {
        const n = new Intl.RelativeTimeFormat(t, {
          ...r
        });
        return (s) => n.format(s, r.range || "day");
      }),
      list: dr((t, r) => {
        const n = new Intl.ListFormat(t, {
          ...r
        });
        return (s) => n.format(s);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = dr(t);
  }
  format(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = t.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && s[0].indexOf(")") < 0 && s.find((a) => a.indexOf(")") > -1)) {
      const a = s.findIndex((l) => l.indexOf(")") > -1);
      s[0] = [s[0], ...s.splice(1, a)].join(this.formatSeparator);
    }
    return s.reduce((a, l) => {
      var d;
      const {
        formatName: u,
        formatOptions: c
      } = Up(l);
      if (this.formats[u]) {
        let h = a;
        try {
          const f = ((d = n == null ? void 0 : n.formatParams) == null ? void 0 : d[n.interpolationkey]) || {}, v = f.locale || f.lng || n.locale || n.lng || r;
          h = this.formats[u](a, v, {
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
const Gp = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class Wp extends yn {
  constructor(e, t, r) {
    var s, o;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = n, this.logger = ut.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], (o = (s = this.backend) == null ? void 0 : s.init) == null || o.call(s, r, n.backend, n);
  }
  queueLoad(e, t, r, n) {
    const s = {}, o = {}, a = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((d) => {
        const h = `${u}|${d}`;
        !r.reload && this.store.hasResourceBundle(u, d) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? o[h] === void 0 && (o[h] = !0) : (this.state[h] = 1, c = !1, o[h] === void 0 && (o[h] = !0), s[h] === void 0 && (s[h] = !0), l[d] === void 0 && (l[d] = !0)));
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
  loaded(e, t, r) {
    const n = e.split("|"), s = n[0], o = n[1];
    t && this.emit("failedLoading", s, o, t), !t && r && this.store.addResourceBundle(s, o, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && r && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      Np(l.loaded, [s], o), Gp(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        a[u] || (a[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((d) => {
          a[u][d] === void 0 && (a[u][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, o = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: r,
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
          this.read.call(this, e, t, r, n + 1, s * 2, o);
        }, s);
        return;
      }
      o(u, c);
    }, l = this.backend[r].bind(this.backend);
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
  prepareLoading(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
    W(e) && (e = this.languageUtils.toResolveHierarchy(e)), W(t) && (t = [t]);
    const s = this.queueLoad(e, t, r, n);
    if (!s.toLoad.length)
      return s.pending.length || n(), null;
    s.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, t, r) {
    this.prepareLoading(e, t, {}, r);
  }
  reload(e, t, r) {
    this.prepareLoading(e, t, {
      reload: !0
    }, r);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = e.split("|"), n = r[0], s = r[1];
    this.read(n, s, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${t}loading namespace ${s} for language ${n} failed`, o), !o && a && this.logger.log(`${t}loaded namespace ${s} for language ${n}`, a), this.loaded(e, o, a);
    });
  }
  saveMissing(e, t, r, n, s) {
    var l, u, c, d, h;
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((u = (l = this.services) == null ? void 0 : l.utils) != null && u.hasLoadedNamespace && !((d = (c = this.services) == null ? void 0 : c.utils) != null && d.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if ((h = this.backend) != null && h.create) {
        const f = {
          ...o,
          isUpdate: s
        }, v = this.backend.create.bind(this.backend);
        if (v.length < 6)
          try {
            let g;
            v.length === 5 ? g = v(e, t, r, n, f) : g = v(e, t, r, n), g && typeof g.then == "function" ? g.then((w) => a(null, w)).catch(a) : a(null, g);
          } catch (g) {
            a(g);
          }
        else
          v(e, t, r, n, a, f);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, n);
    }
  }
}
const ua = () => ({
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
  simplifyPluralSuffix: !0,
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
  overloadTranslationOptionHandler: (i) => {
    let e = {};
    if (typeof i[1] == "object" && (e = i[1]), W(i[1]) && (e.defaultValue = i[1]), W(i[2]) && (e.tDescription = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
      const t = i[3] || i[2];
      Object.keys(t).forEach((r) => {
        e[r] = t[r];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (i) => i,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), ca = (i) => {
  var e, t;
  return W(i.ns) && (i.ns = [i.ns]), W(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]), W(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]), ((t = (e = i.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), typeof i.initImmediate == "boolean" && (i.initAsync = i.initImmediate), i;
}, Fi = () => {
}, Yp = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
};
class fi extends yn {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = ca(e), this.services = {}, this.logger = ut, this.modules = {
      external: []
    }, Yp(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), t.defaultNS == null && t.ns && (W(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const n = ua();
    this.options = {
      ...n,
      ...this.options,
      ...ca(t)
    }, this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const s = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? ut.init(s(this.modules.logger), this.options) : ut.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = Hp;
      const d = new sa(this.options);
      this.store = new ra(this.options.resources, this.options);
      const h = this.services;
      h.logger = ut, h.resourceStore = this.store, h.languageUtils = d, h.pluralResolver = new Vp(d, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (h.formatter = s(c), h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new jp(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new Wp(s(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", function(f) {
        for (var v = arguments.length, g = new Array(v > 1 ? v - 1 : 0), w = 1; w < v; w++)
          g[w - 1] = arguments[w];
        e.emit(f, ...g);
      }), this.modules.languageDetector && (h.languageDetector = s(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = s(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new rn(this.services, this.options), this.translator.on("*", function(f) {
        for (var v = arguments.length, g = new Array(v > 1 ? v - 1 : 0), w = 1; w < v; w++)
          g[w - 1] = arguments[w];
        e.emit(f, ...g);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Fi), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments), e;
      };
    });
    const l = Wr(), u = () => {
      const c = (d, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(h), r(d, h);
      };
      if (this.languages && !this.isInitialized)
        return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), l;
  }
  loadResources(e) {
    var s, o;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fi;
    const n = W(e) ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((n == null ? void 0 : n.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const a = [], l = (u) => {
        if (!u || u === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((d) => {
          d !== "cimode" && a.indexOf(d) < 0 && a.push(d);
        });
      };
      n ? l(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => l(c)), (o = (s = this.options.preload) == null ? void 0 : s.forEach) == null || o.call(s, (u) => l(u)), this.services.backendConnector.load(a, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(u);
      });
    } else
      r(null);
  }
  reloadResources(e, t, r) {
    const n = Wr();
    return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = Fi), this.services.backendConnector.reload(e, t, (s) => {
      n.resolve(), r(s);
    }), n;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Yl.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const r = this.languages[t];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var r = this;
    this.isLanguageChangingTo = e;
    const n = Wr();
    this.emit("languageChanging", e);
    const s = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, u) => {
      u ? (s(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, n.resolve(function() {
        return r.t(...arguments);
      }), t && t(l, function() {
        return r.t(...arguments);
      });
    }, a = (l) => {
      var c, d;
      !e && !l && this.services.languageDetector && (l = []);
      const u = W(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || s(u), this.translator.language || this.translator.changeLanguage(u), (d = (c = this.services.languageDetector) == null ? void 0 : c.cacheUserLanguage) == null || d.call(c, u)), this.loadResources(u, (h) => {
        o(h, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), n;
  }
  getFixedT(e, t, r) {
    var n = this;
    const s = function(o, a) {
      let l;
      if (typeof a != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2; d < u; d++)
          c[d - 2] = arguments[d];
        l = n.options.overloadTranslationOptionHandler([o, a].concat(c));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || s.lng, l.lngs = l.lngs || s.lngs, l.ns = l.ns || s.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || s.keyPrefix);
      const h = n.options.keySeparator || ".";
      let f;
      return l.keyPrefix && Array.isArray(o) ? f = o.map((v) => `${l.keyPrefix}${h}${v}`) : f = l.keyPrefix ? `${l.keyPrefix}${h}${o}` : o, n.t(f, l);
    };
    return W(e) ? s.lng = e : s.lngs = e, s.ns = t, s.keyPrefix = r, s;
  }
  t() {
    var n;
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return (n = this.translator) == null ? void 0 : n.translate(...t);
  }
  exists() {
    var n;
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return (n = this.translator) == null ? void 0 : n.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = t.lng || this.resolvedLanguage || this.languages[0], n = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode")
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
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(r, e) && (!n || o(s, e)));
  }
  loadNamespaces(e, t) {
    const r = Wr();
    return this.options.ns ? (W(e) && (e = [e]), e.forEach((n) => {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }), this.loadResources((n) => {
      r.resolve(), t && t(n);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = Wr();
    W(e) && (e = [e]);
    const n = this.options.preload || [], s = e.filter((o) => n.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return s.length ? (this.options.preload = n.concat(s), this.loadResources((o) => {
      r.resolve(), t && t(o);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var n, s;
    if (e || (e = this.resolvedLanguage || (((n = this.languages) == null ? void 0 : n.length) > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = ((s = this.services) == null ? void 0 : s.languageUtils) || new sa(ua());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new fi(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fi;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const n = {
      ...this.options,
      ...e,
      isClone: !0
    }, s = new fi(n);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      s[a] = this[a];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, r) {
      const a = Object.keys(this.store.data).reduce((l, u) => (l[u] = {
        ...this.store.data[u]
      }, Object.keys(l[u]).reduce((c, d) => (c[d] = {
        ...l[u][d]
      }, c), {})), {});
      s.store = new ra(a, n), s.services.resourceStore = s.store;
    }
    return s.translator = new rn(s.services, n), s.translator.on("*", function(a) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        u[c - 1] = arguments[c];
      s.emit(a, ...u);
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
const we = fi.createInstance();
we.createInstance = fi.createInstance;
we.createInstance;
we.dir;
we.init;
we.loadResources;
we.reloadResources;
we.use;
we.changeLanguage;
we.getFixedT;
we.t;
we.exists;
we.setDefaultNamespace;
we.hasLoadedNamespace;
we.loadNamespaces;
we.loadLanguages;
const {
  slice: Kp,
  forEach: Zp
} = [];
function Xp(i) {
  return Zp.call(Kp.call(arguments, 1), (e) => {
    if (e)
      for (const t in e)
        i[t] === void 0 && (i[t] = e[t]);
  }), i;
}
function Jp(i) {
  return typeof i != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some((t) => t.test(i));
}
const da = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Qp = function(i, e) {
  const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    path: "/"
  }, n = encodeURIComponent(e);
  let s = `${i}=${n}`;
  if (r.maxAge > 0) {
    const o = r.maxAge - 0;
    if (Number.isNaN(o))
      throw new Error("maxAge should be a Number");
    s += `; Max-Age=${Math.floor(o)}`;
  }
  if (r.domain) {
    if (!da.test(r.domain))
      throw new TypeError("option domain is invalid");
    s += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!da.test(r.path))
      throw new TypeError("option path is invalid");
    s += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    s += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (s += "; HttpOnly"), r.secure && (s += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
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
  return r.partitioned && (s += "; Partitioned"), s;
}, pa = {
  create(i, e, t, r) {
    let n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    t && (n.expires = /* @__PURE__ */ new Date(), n.expires.setTime(n.expires.getTime() + t * 60 * 1e3)), r && (n.domain = r), document.cookie = Qp(i, e, n);
  },
  read(i) {
    const e = `${i}=`, t = document.cookie.split(";");
    for (let r = 0; r < t.length; r++) {
      let n = t[r];
      for (; n.charAt(0) === " "; )
        n = n.substring(1, n.length);
      if (n.indexOf(e) === 0)
        return n.substring(e.length, n.length);
    }
    return null;
  },
  remove(i, e) {
    this.create(i, "", -1, e);
  }
};
var e2 = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(i) {
    let {
      lookupCookie: e
    } = i;
    if (e && typeof document < "u")
      return pa.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(i, e) {
    let {
      lookupCookie: t,
      cookieMinutes: r,
      cookieDomain: n,
      cookieOptions: s
    } = e;
    t && typeof document < "u" && pa.create(t, i, r, n, s);
  }
}, t2 = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(i) {
    var r;
    let {
      lookupQuerystring: e
    } = i, t;
    if (typeof window < "u") {
      let {
        search: n
      } = window.location;
      !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
      const o = n.substring(1).split("&");
      for (let a = 0; a < o.length; a++) {
        const l = o[a].indexOf("=");
        l > 0 && o[a].substring(0, l) === e && (t = o[a].substring(l + 1));
      }
    }
    return t;
  }
}, r2 = {
  name: "hash",
  // Deconstruct the options object and extract the lookupHash property and the lookupFromHashIndex property
  lookup(i) {
    var n;
    let {
      lookupHash: e,
      lookupFromHashIndex: t
    } = i, r;
    if (typeof window < "u") {
      const {
        hash: s
      } = window.location;
      if (s && s.length > 2) {
        const o = s.substring(1);
        if (e) {
          const a = o.split("&");
          for (let l = 0; l < a.length; l++) {
            const u = a[l].indexOf("=");
            u > 0 && a[l].substring(0, u) === e && (r = a[l].substring(u + 1));
          }
        }
        if (r)
          return r;
        if (!r && t > -1) {
          const a = s.match(/\/([a-zA-Z-]*)/g);
          return Array.isArray(a) ? (n = a[typeof t == "number" ? t : 0]) == null ? void 0 : n.replace("/", "") : void 0;
        }
      }
    }
    return r;
  }
};
let pr = null;
const fa = () => {
  if (pr !== null)
    return pr;
  try {
    if (pr = typeof window < "u" && window.localStorage !== null, !pr)
      return !1;
    const i = "i18next.translate.boo";
    window.localStorage.setItem(i, "foo"), window.localStorage.removeItem(i);
  } catch {
    pr = !1;
  }
  return pr;
};
var i2 = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(i) {
    let {
      lookupLocalStorage: e
    } = i;
    if (e && fa())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(i, e) {
    let {
      lookupLocalStorage: t
    } = e;
    t && fa() && window.localStorage.setItem(t, i);
  }
};
let fr = null;
const ha = () => {
  if (fr !== null)
    return fr;
  try {
    if (fr = typeof window < "u" && window.sessionStorage !== null, !fr)
      return !1;
    const i = "i18next.translate.boo";
    window.sessionStorage.setItem(i, "foo"), window.sessionStorage.removeItem(i);
  } catch {
    fr = !1;
  }
  return fr;
};
var n2 = {
  name: "sessionStorage",
  lookup(i) {
    let {
      lookupSessionStorage: e
    } = i;
    if (e && ha())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(i, e) {
    let {
      lookupSessionStorage: t
    } = e;
    t && ha() && window.sessionStorage.setItem(t, i);
  }
}, s2 = {
  name: "navigator",
  lookup(i) {
    const e = [];
    if (typeof navigator < "u") {
      const {
        languages: t,
        userLanguage: r,
        language: n
      } = navigator;
      if (t)
        for (let s = 0; s < t.length; s++)
          e.push(t[s]);
      r && e.push(r), n && e.push(n);
    }
    return e.length > 0 ? e : void 0;
  }
}, o2 = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(i) {
    let {
      htmlTag: e
    } = i, t;
    const r = e || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, a2 = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(i) {
    var n;
    let {
      lookupFromPathIndex: e
    } = i;
    if (typeof window > "u")
      return;
    const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(t) ? (n = t[typeof e == "number" ? e : 0]) == null ? void 0 : n.replace("/", "") : void 0;
  }
}, l2 = {
  name: "subdomain",
  lookup(i) {
    var n, s;
    let {
      lookupFromSubdomainIndex: e
    } = i;
    const t = typeof e == "number" ? e + 1 : 1, r = typeof window < "u" && ((s = (n = window.location) == null ? void 0 : n.hostname) == null ? void 0 : s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (r)
      return r[t];
  }
};
let Kl = !1;
try {
  document.cookie, Kl = !0;
} catch {
}
const Zl = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Kl || Zl.splice(1, 1);
const u2 = () => ({
  order: Zl,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  // cache user language
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'
  convertDetectedLanguage: (i) => i
});
class Xl {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      languageUtils: {}
    }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e, this.options = Xp(t, this.options || {}, u2()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (n) => n.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(e2), this.addDetector(t2), this.addDetector(i2), this.addDetector(n2), this.addDetector(s2), this.addDetector(o2), this.addDetector(a2), this.addDetector(l2), this.addDetector(r2);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, t = [];
    return e.forEach((r) => {
      if (this.detectors[r]) {
        let n = this.detectors[r].lookup(this.options);
        n && typeof n == "string" && (n = [n]), n && (t = t.concat(n));
      }
    }), t = t.filter((r) => r != null && !Jp(r)).map((r) => this.options.convertDetectedLanguage(r)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
  }
  cacheUserLanguage(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(e, this.options);
    }));
  }
}
Xl.type = "languageDetector";
const c2 = Be(`bm_translation_${Zd}.json`), d2 = async () => {
  const i = await fetch(c2, {
    mode: "cors",
    credentials: "omit"
  });
  if (!i.ok)
    throw new Error(`Failed to fetch translations: ${i.status}`);
  const e = await i.json(), t = Object.fromEntries(
    Object.entries(e).map(([r, n]) => [r, n])
  );
  return await we.use(Xl).use(Pd).init({
    debug: !1,
    resources: t,
    supportedLngs: [
      "en",
      "en-GB",
      "en-US",
      "de",
      "fr",
      "es",
      "it",
      "nl",
      "fi",
      "pl"
    ],
    fallbackLng: "en-GB",
    ns: ["translation"],
    defaultNS: "translation",
    detection: {
      order: [
        "htmlTag",
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain"
      ]
    },
    nonExplicitSupportedLngs: !0,
    interpolation: {
      escapeValue: !1
    }
  }), we;
}, Jl = class Qr {
  constructor() {
    this.initialized = !1, this.compatibleListInitialized = !1, this.currentBike = null, this.activeSubscription = null, this.components = [], this.config = Ko;
  }
  // Initialize with optional config
  async initialize(e) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: initialize() called"), this.components = [], this.initialized && this.cleanup(), e && (this.config = { ...this.config, ...e }), this.initializeConfig(), this.service = new Se(
      this.config.apiUrl,
      this.config.apiKey,
      this.config.apiToken,
      this.config.isShopify
    ), this.initializeActiveSubscription(), localStorage.bm_currentBike && (this.currentBike = JSON.parse(localStorage.bm_currentBike)), await d2(), (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log(`Core: Resolved Language: ${we.resolvedLanguage}`), this.setupEventListeners(), this.registerComponents(), this.initialized = !0, cs.value = !0;
    const t = new Event("BM:Initialized");
    document.dispatchEvent(t), (this.config.logLevel === "verbose" || this.config.logLevel === "core") && (console.log("Core: BikeMatrix WebComponent Version: 1.3.6"), console.log("Core: BikeMatrixCore initialized"));
  }
  // Singleton pattern to ensure a single global instance
  static getInstance() {
    return Qr.instance || (Qr.instance = new Qr()), Qr.instance;
  }
  registerComponents() {
    const e = [
      "bikematrix-bikeselector",
      "bikematrix-productresult",
      "bikematrix-collectionresult",
      "bikematrix-compatibilitylabel",
      "bikematrix-compatiblelist",
      "bikematrix-bikeselectorbanner",
      "bikematrix-variantselector"
    ];
    this.components = [], e.forEach((t) => {
      const r = document.getElementsByTagName(t);
      Array.from(r).forEach((n) => {
        this.components.push(n);
      });
    }), (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log(`Core: Registered ${this.components.length} components`);
  }
  resetComponents() {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: resetComponents() called"), this.components.forEach((e) => {
      var t;
      try {
        const r = e.cloneNode(!1);
        e.querySelectorAll("template").forEach((s) => {
          r.appendChild(s.cloneNode(!0));
        }), (t = e.parentNode) == null || t.replaceChild(r, e);
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
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: updateConfig() called"), this.config = { ...this.config, ...e }, this.reload(!1);
  }
  // Cleanup without destroying instance
  cleanup() {
    this.removeEventListeners(), Wd();
  }
  // Full destroy for complete cleanup
  async destroy() {
    this.cleanup(), this.service = null, this.currentBike = null, this.activeSubscription = null, this.config = { ...Ko }, this.initialized = !1, cs.value = !1, this.resetComponents();
  }
  updateCompatibleList(e = !0) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log(
      "Core: updateCompatibleList showCompatibleList: ",
      e
    ), this.config.showCompatibleList = e, this.initializeConfig(), e && (Ee.value = !0, this.RefreshCompatibleSkus(!0)), this.compatibleListInitialized = !0;
  }
  refresh() {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: refresh() called"), this.ChangeBike();
  }
  reset() {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: reset() called"), this.destroy(), this.initialize();
  }
  reload(e = !0) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log(
      "Core: reload() called. shouldReloadConfig: ",
      e
    ), e && this.initializeConfig(), this.refresh(), this.registerComponents(), this.resetComponents();
  }
  initializeConfig() {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: initializeConfig called");
    const e = document.querySelectorAll(
      'script[type="application/json"][data-bikematrix-config]'
    ), t = JSON.parse(sessionStorage.getItem("bm_diagnostics"));
    e.forEach((r) => {
      if (r != null && r.textContent)
        try {
          this.config = {
            ...this.config,
            ...JSON.parse(r.textContent)
          };
        } catch {
          console.error("Core: Invalid BikeMatrix configuration"), console.log("Core: configScript ", r.textContent);
        }
    }), this.config.showCompatibleList && !this.config.delayCompatibleListInitialization ? this.compatibleListInitialized = !0 : this.config.showCompatibleList && this.config.delayCompatibleListInitialization && !this.compatibleListInitialized && (Ee.value = !0), t != null && t.includes("verbose") ? this.config.logLevel = "verbose" : t != null && t.includes("core") && (this.config.logLevel = "core"), t != null && t.includes("virtualWorkshop") && (this.config.virtualWorkshop = !0), t != null && t.includes("subscribtion") && (this.activeSubscription = !0), t != null && t.includes("all") && (this.config.logLevel = "verbose", this.config.virtualWorkshop = !0, this.activeSubscription = !0), this.config.logLevel === "verbose" && console.log("initializeConfig ", JSON.stringify(this.config, null, 2));
  }
  initializeActiveSubscription() {
    const e = sessionStorage.getItem(
      "bm_activeSubscription"
    );
    if ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && (console.log("Core: Not Shopify: ", !this.config.isShopify), console.log(
      "Core: Session Active Subscription: ",
      e
    ), console.log("Core: Design Mode: ", this.config.designMode)), !this.config.isShopify) {
      this.activeSubscription = !0;
      return;
    }
    this.activeSubscription = this.config.designMode || e === "true", e || this.service.getActiveSubscription(
      this.updateActiveSubscription.bind(this)
    );
  }
  setupEventListeners() {
    document.addEventListener("BikeMatrix:RefreshCompatibleSkus", (e) => {
      this.RefreshCompatibleSkus().then(() => {
        document.dispatchEvent(
          new Event("RefreshCompatibility", { bubbles: !0, composed: !0 })
        );
      });
    }), document.addEventListener(
      "on:facet-filters:updated",
      this.handleRefreshCompatibleSkus.bind(this)
    ), document.addEventListener(
      "BikeChanging",
      this.handleBikeChanging.bind(this)
    );
  }
  removeEventListeners() {
    document.removeEventListener(
      "BikeMatrix:RefreshCompatibleSkus",
      this.handleRefreshCompatibleSkus
    ), document.removeEventListener(
      "on:facet-filters:updated",
      this.handleRefreshCompatibleSkus
    ), document.removeEventListener("BikeChanging", this.handleBikeChanging);
  }
  async handleRefreshCompatibleSkus(e) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: Listener RefreshCompatibleSkus ..."), this.RefreshCompatibleSkus().then(() => {
      document.dispatchEvent(
        new Event("RefreshCompatibility", { bubbles: !0, composed: !0 })
      );
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
    const t = document.querySelector(
      "bikematrix-productresult[data-sku]"
    ), r = document.querySelector(
      "bikematrix-variantselector[data-sku]"
    );
    t && t.setAttribute("data-sku", e), r && r.setAttribute("data-sku", e), this.config.sku = e;
  }
  // ===== Legacy methods ===== //
  ResetSelectedBikeIndicator() {
    var e, t;
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: ResetSelectedBikeIndicator() Method Called"), this.currentBike === null ? (e = window.bm_selectBikeButton) == null || e.classList.remove("show-selected") : (t = window.bm_selectBikeButton) == null || t.classList.add("show-selected");
  }
  ChangeBike() {
    if ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: ChangeBike() Method Called"), mr.value === !0 || Qe.value === !0) {
      console.log("Core: ChangeBike loading, return");
      return;
    }
    mr.value = !0, Ee.value = !0, Qe.value = !0, _r.value = [], yr.value = [], (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: ChangeBike updateBikeSignal..."), this.updateBikeSignal().then(() => {
      this.config.logLevel === "verbose" ? console.log(
        "Core: Bike Signal Updated: ",
        JSON.stringify(Z.value, null, 2)
      ) : this.config.logLevel === "core" && console.log("Core: Bike Signal Updated"), this.ResetSelectedBikeIndicator(), this.RefreshCompatibleSkus().then(() => {
        document.dispatchEvent(
          new Event("RefreshCompatibility", { bubbles: !0, composed: !0 })
        ), document.dispatchEvent(
          new Event("BikeChanged", { bubbles: !0, composed: !0 })
        );
      });
    });
  }
  async RefreshCompatibleSkus(e = !1) {
    var r, n;
    const t = `${(r = Z.value) == null ? void 0 : r.key}:${this.config.currentCollectionHandle}:${Yd}`;
    switch ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log(
      "Core: RefreshCompatibleSkus() called. Current Collection Bike Key: ",
      t
    ), this.config.pageType) {
      case "collection":
        const s = !!Z.value && !Z.value.compatibleCollections.error && ((n = Z.value.compatibleCollections) == null ? void 0 : n.some(
          (a) => a.handle === this.config.currentCollectionHandle
        )), o = this.config.showCompatibleList && (this.compatibleListInitialized || e);
        (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log(
          "Core: RefreshCompatibleSkus. hasCompatibleCollection: ",
          s,
          " showCompatibleList: ",
          this.config.showCompatibleList,
          " compatibleListInitialized: ",
          this.compatibleListInitialized,
          " CompatibleListLoadingSignal: ",
          Ee.value,
          " onlyCompatibleList: ",
          e,
          " delayCompatibleListInitialization: ",
          this.config.delayCompatibleListInitialization,
          " shouldRefreshCompatibleListSkus: ",
          o
        ), s && (e || await this.RefreshCollectionPageSkus(t), o && ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log(
          "Core: RefreshCompatibleSkus refreshing compatible list skus for collection page..."
        ), await this.RefreshCollectionListSkus(t))), mr.value = !1, Qe.value = !1, o && (Ee.value = !1);
        break;
      case "search":
      case "index":
        mr.value = !1, Ee.value = !1, (this.config.pageType === "index" && this.config.showHomePageCollection || this.config.pageType === "search" && this.config.showSearchPageCollection) && await this.RefreshCollectionPageSkus(t), Qe.value = !1;
        break;
      default:
        mr.value = !1, Ee.value = !1, Qe.value = !1;
        break;
    }
  }
  async RefreshCollectionPageSkus(e) {
    var o, a;
    let t = document.getElementsByTagName(
      "bikematrix-collectionresult"
    ), n = Array.from(
      t
    ).map((l) => {
      const u = this.config.skuField === "barcode" ? l.getAttribute("data-product-barcodes") : this.config.skuField === "metafield" ? l.getAttribute("data-product-metafields") : l.getAttribute("data-product-skus") || "";
      return u == null ? void 0 : u.split(",").filter((c) => !!c);
    }).flat();
    this.config.logLevel === "verbose" && console.log(
      "Refresh Collection Page SKUs. SKUs: ",
      JSON.stringify(n),
      null,
      2
    );
    var s = ((o = Ut()) == null ? void 0 : o.language) || "en-GB";
    if (n && n.length > 0) {
      const l = await this.service.checkSkusCompatibilityWithResults(
        (a = Z.value) == null ? void 0 : a.key,
        n,
        s,
        "CollectionResult",
        this.config.currentCollectionHandle
      );
      l.success ? yr.value = l.data : (Ji.value = !0, this.config.logLevel === "verbose" && console.log("Compatible List Error: ", l.logError));
    } else
      yr.value = [];
  }
  async RefreshCollectionListSkus(e) {
    var n, s;
    var t = JSON.parse(
      sessionStorage.getItem(e)
    );
    if (t)
      this.config.logLevel === "verbose" && console.log(
        "Refresh Collection SKUs from Session: ",
        JSON.stringify(t),
        null,
        2
      ), _r.value = t;
    else {
      const o = Object.values(this.config.products || {}).map((c) => c.skus).flat();
      this.config.logLevel === "verbose" && console.log(
        "Refresh Collection SKUs from API. SKUs: ",
        JSON.stringify(o),
        null,
        2
      );
      var r = ((n = Ut()) == null ? void 0 : n.language) || "en-GB";
      const a = new AbortController(), l = a.signal, u = () => a.abort();
      window.addEventListener("beforeunload", u);
      try {
        if (!((s = Z.value) != null && s.key))
          throw new Error("BikeSignal key is undefined");
        const c = await this.service.checkSkusCompatibilityWithResults(
          Z.value.key,
          o,
          r,
          "CompatibleList",
          this.config.currentCollectionHandle,
          { signal: l }
        );
        if (this.config.logLevel === "verbose" && console.log(
          "Refresh Collection SKUs from API. SKUs: ",
          JSON.stringify(c)
        ), l.aborted) {
          this.config.logLevel === "verbose" && console.log("function RefreshCompatibleSkus() operation aborted");
          return;
        }
        c.success ? (sessionStorage.setItem(
          e,
          JSON.stringify(c.data)
        ), _r.value = c.data) : (Ji.value = !0, this.config.logLevel === "verbose" && console.log(
          "Compatible List Error: ",
          c.logError
        ));
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
    sessionStorage.setItem(
      "bm_activeSubscription",
      JSON.stringify(t)
    ), this.activeSubscription = t;
  }
  async updateBikeSignal() {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: updateBikeSignal() called");
    const e = localStorage.getItem(Gs) || "null", t = JSON.parse(e);
    if (this.currentBike = t, t == null) {
      Z.value = null;
      return;
    }
    const r = await Gl(t == null ? void 0 : t.brandId);
    !Array.isArray(r) && r.error ? (t.compatibleCollections = [], Z.value = t) : (t.compatibleCollections = r, Z.value = t), this.config.logLevel === "verbose" ? console.log(
      "Core: Bike Changed: ",
      JSON.stringify(Z.value, null, 2)
    ) : this.config.logLevel === "core" && console.log("Core: Bike Changed");
  }
};
Jl.instance = null;
let p2 = Jl;
const hi = (i) => /* @__PURE__ */ z("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M1.53553 8.60658L5.07107 5.07104M5.07107 5.07104L8.6066 1.53551M5.07107 5.07104L8.6066 8.60658M5.07107 5.07104L1.53553 1.53551", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" })), f2 = `:host .overlay{opacity:0;visibility:hidden}@media (min-width: 640px){:host .modal{opacity:0;transform:scale(.9);visibility:hidden}}@media not all and (min-width: 640px){:host .modal{transform:translateY(100%);visibility:hidden}}
`;
function wt(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function Ql(i, e) {
  i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.__proto__ = e;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ue = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Tr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Ys, _e, ae, Ke = 1e8, ne = 1 / Ke, fs = Math.PI * 2, h2 = fs / 4, g2 = 0, eu = Math.sqrt, m2 = Math.cos, b2 = Math.sin, xe = function(e) {
  return typeof e == "string";
}, fe = function(e) {
  return typeof e == "function";
}, Dt = function(e) {
  return typeof e == "number";
}, Ks = function(e) {
  return typeof e > "u";
}, ft = function(e) {
  return typeof e == "object";
}, Ne = function(e) {
  return e !== !1;
}, Zs = function() {
  return typeof window < "u";
}, Ni = function(e) {
  return fe(e) || xe(e);
}, tu = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, De = Array.isArray, v2 = /random\([^)]+\)/g, w2 = /,\s*/g, ga = /(?:-?\.?\d|\.)+/gi, ru = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, wr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Pn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, iu = /[+-]=-?[.\d]+/, x2 = /[^,'"\[\]\s]+/gi, _2 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ce, st, hs, Xs, He = {}, nn = {}, nu, su = function(e) {
  return (nn = Lr(e, He)) && Ie;
}, Js = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, gi = function(e, t) {
  return !t && console.warn(e);
}, ou = function(e, t) {
  return e && (He[e] = t) && nn && (nn[e] = t) || He;
}, mi = function() {
  return 0;
}, y2 = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, qi = {
  suppressEvents: !0,
  kill: !1
}, C2 = {
  suppressEvents: !0
}, Qs = {}, zt = [], gs = {}, au, ze = {}, In = {}, ma = 30, $i = [], eo = "", to = function(e) {
  var t = e[0], r, n;
  if (ft(t) || fe(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (n = $i.length; n-- && !$i[n].targetTest(t); )
      ;
    r = $i[n];
  }
  for (n = e.length; n--; )
    e[n] && (e[n]._gsap || (e[n]._gsap = new Lu(e[n], r))) || e.splice(n, 1);
  return e;
}, tr = function(e) {
  return e._gsap || to(Ze(e))[0]._gsap;
}, lu = function(e, t, r) {
  return (r = e[t]) && fe(r) ? e[t]() : Ks(r) && e.getAttribute && e.getAttribute(t) || r;
}, Oe = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, he = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, ue = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, kr = function(e, t) {
  var r = t.charAt(0), n = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + n : r === "-" ? e - n : r === "*" ? e * n : e / n;
}, k2 = function(e, t) {
  for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r; )
    ;
  return n < r;
}, sn = function() {
  var e = zt.length, t = zt.slice(0), r, n;
  for (gs = {}, zt.length = 0, r = 0; r < e; r++)
    n = t[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, ro = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, uu = function(e, t, r, n) {
  zt.length && !_e && sn(), e.render(t, r, n || !!(_e && t < 0 && ro(e))), zt.length && !_e && sn();
}, cu = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(x2).length < 2 ? t : xe(e) ? e.trim() : e;
}, du = function(e) {
  return e;
}, Ge = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, D2 = function(e) {
  return function(t, r) {
    for (var n in r)
      n in t || n === "duration" && e || n === "ease" || (t[n] = r[n]);
  };
}, Lr = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, ba = function i(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = ft(t[r]) ? i(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, on = function(e, t) {
  var r = {}, n;
  for (n in e)
    n in t || (r[n] = e[n]);
  return r;
}, ai = function(e) {
  var t = e.parent || ce, r = e.keyframes ? D2(De(e.keyframes)) : Ge;
  if (Ne(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, A2 = function(e, t) {
  for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, pu = function(e, t, r, n, s) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var o = e[n], a;
  if (s)
    for (a = t[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = o, t.parent = t._dp = e, t;
}, Cn = function(e, t, r, n) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var s = t._prev, o = t._next;
  s ? s._next = o : e[r] === t && (e[r] = o), o ? o._prev = s : e[n] === t && (e[n] = s), t._next = t._prev = t.parent = null;
}, Ht = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, rr = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, S2 = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, ms = function(e, t, r, n) {
  return e._startAt && (_e ? e._startAt.revert(qi) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n));
}, E2 = function i(e) {
  return !e || e._ts && i(e.parent);
}, va = function(e) {
  return e._repeat ? Fr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Fr = function(e, t) {
  var r = Math.floor(e = ue(e / t));
  return e && r === e ? r - 1 : r;
}, an = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, kn = function(e) {
  return e._end = ue(e._start + (e._tDur / Math.abs(e._ts || e._rts || ne) || 0));
}, Dn = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = ue(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), kn(e), r._dirty || rr(r, e)), e;
}, fu = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = an(e.rawTime(), t), (!t._dur || Ai(0, t.totalDuration(), r) - t._tTime > ne) && t.render(r, !0)), rr(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -ne;
  }
}, ot = function(e, t, r, n) {
  return t.parent && Ht(t), t._start = ue((Dt(r) ? r : r || e !== ce ? We(e, r, t) : e._time) + t._delay), t._end = ue(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), pu(e, t, "_first", "_last", e._sort ? "_start" : 0), bs(t) || (e._recent = t), n || fu(e, t), e._ts < 0 && Dn(e, e._tTime), e;
}, hu = function(e, t) {
  return (He.ScrollTrigger || Js("scrollTrigger", t)) && He.ScrollTrigger.create(t, e);
}, gu = function(e, t, r, n, s) {
  if (no(e, t, s), !e._initted)
    return 1;
  if (!r && e._pt && !_e && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && au !== $e.frame)
    return zt.push(e), e._lazy = [s, n], 1;
}, B2 = function i(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
}, bs = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, T2 = function(e, t, r, n) {
  var s = e.ratio, o = t < 0 || !t && (!e._start && B2(e) && !(!e._initted && bs(e)) || (e._ts < 0 || e._dp._ts < 0) && !bs(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, d;
  if (a && e._repeat && (l = Ai(0, e._tDur, t), c = Fr(l, a), e._yoyo && c & 1 && (o = 1 - o), c !== Fr(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || _e || n || e._zTime === ne || !t && e._zTime) {
    if (!e._initted && gu(e, t, n, r, l))
      return;
    for (d = e._zTime, e._zTime = t || (r ? ne : 0), r || (r = t && !d), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u; )
      u.r(o, u.d), u = u._next;
    t < 0 && ms(e, t, r, !0), e._onUpdate && !r && Ve(e, "onUpdate"), l && e._repeat && !r && e.parent && Ve(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Ht(e, 1), !r && !_e && (Ve(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = t);
}, L2 = function(e, t, r) {
  var n;
  if (r > t)
    for (n = e._first; n && n._start <= r; ) {
      if (n.data === "isPause" && n._start > t)
        return n;
      n = n._next;
    }
  else
    for (n = e._last; n && n._start >= r; ) {
      if (n.data === "isPause" && n._start < t)
        return n;
      n = n._prev;
    }
}, Nr = function(e, t, r, n) {
  var s = e._repeat, o = ue(t) || 0, a = e._tTime / e._tDur;
  return a && !n && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : ue(o * (s + 1) + e._rDelay * s) : o, a > 0 && !n && Dn(e, e._tTime = e._tDur * a), e.parent && kn(e), r || rr(e.parent, e), e;
}, wa = function(e) {
  return e instanceof Te ? rr(e) : Nr(e, e._dur);
}, F2 = {
  _start: 0,
  endTime: mi,
  totalDuration: mi
}, We = function i(e, t, r) {
  var n = e.labels, s = e._recent || F2, o = e.duration() >= Ke ? s.endTime(!1) : e._dur, a, l, u;
  return xe(t) && (isNaN(t) || t in n) ? (l = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (t in n || (n[t] = o), n[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && r && (l = l / 100 * (De(r) ? r[0] : r).totalDuration()), a > 1 ? i(e, t.substr(0, a - 1), r) + l : o + l)) : t == null ? o : +t;
}, li = function(e, t, r) {
  var n = Dt(t[1]), s = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
  if (n && (o.duration = t[1]), o.parent = r, e) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = Ne(l.vars.inherit) && l.parent;
    o.immediateRender = Ne(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
  }
  return new me(t[0], o, t[s + 1]);
}, Yt = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Ai = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, Ce = function(e, t) {
  return !xe(e) || !(t = _2.exec(e)) ? "" : t[1];
}, N2 = function(e, t, r) {
  return Yt(r, function(n) {
    return Ai(e, t, n);
  });
}, vs = [].slice, mu = function(e, t) {
  return e && ft(e) && "length" in e && (!t && !e.length || e.length - 1 in e && ft(e[0])) && !e.nodeType && e !== st;
}, O2 = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(n) {
    var s;
    return xe(n) && !t || mu(n, 1) ? (s = r).push.apply(s, Ze(n)) : r.push(n);
  }) || r;
}, Ze = function(e, t, r) {
  return ae && !t && ae.selector ? ae.selector(e) : xe(e) && !r && (hs || !Or()) ? vs.call((t || Xs).querySelectorAll(e), 0) : De(e) ? O2(e, r) : mu(e) ? vs.call(e, 0) : e ? [e] : [];
}, ws = function(e) {
  return e = Ze(e)[0] || gi("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return Ze(t, r.querySelectorAll ? r : r === e ? gi("Invalid scope") || Xs.createElement("div") : e);
  };
}, bu = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, vu = function(e) {
  if (fe(e))
    return e;
  var t = ft(e) ? e : {
    each: e
  }, r = ir(t.ease), n = t.from || 0, s = parseFloat(t.base) || 0, o = {}, a = n > 0 && n < 1, l = isNaN(n) || a, u = t.axis, c = n, d = n;
  return xe(n) ? c = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !a && l && (c = n[0], d = n[1]), function(h, f, v) {
    var g = (v || t).length, w = o[g], m, b, x, _, C, A, k, y, D;
    if (!w) {
      if (D = t.grid === "auto" ? 0 : (t.grid || [1, Ke])[1], !D) {
        for (k = -Ke; k < (k = v[D++].getBoundingClientRect().left) && D < g; )
          ;
        D < g && D--;
      }
      for (w = o[g] = [], m = l ? Math.min(D, g) * c - 0.5 : n % D, b = D === Ke ? 0 : l ? g * d / D - 0.5 : n / D | 0, k = 0, y = Ke, A = 0; A < g; A++)
        x = A % D - m, _ = b - (A / D | 0), w[A] = C = u ? Math.abs(u === "y" ? _ : x) : eu(x * x + _ * _), C > k && (k = C), C < y && (y = C);
      n === "random" && bu(w), w.max = k - y, w.min = y, w.v = g = (parseFloat(t.amount) || parseFloat(t.each) * (D > g ? g - 1 : u ? u === "y" ? g / D : D : Math.max(D, g / D)) || 0) * (n === "edges" ? -1 : 1), w.b = g < 0 ? s - g : s, w.u = Ce(t.amount || t.each) || 0, r = r && g < 0 ? Eu(r) : r;
    }
    return g = (w[h] - w.min) / w.max || 0, ue(w.b + (r ? r(g) : g) * w.v) + w.u;
  };
}, xs = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var n = ue(Math.round(parseFloat(r) / e) * e * t);
    return (n - n % 1) / t + (Dt(r) ? 0 : Ce(r));
  };
}, wu = function(e, t) {
  var r = De(e), n, s;
  return !r && ft(e) && (n = r = e.radius || Ke, e.values ? (e = Ze(e.values), (s = !Dt(e[0])) && (n *= n)) : e = xs(e.increment)), Yt(t, r ? fe(e) ? function(o) {
    return s = e(o), Math.abs(s - o) <= n ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = Ke, c = 0, d = e.length, h, f; d--; )
      s ? (h = e[d].x - a, f = e[d].y - l, h = h * h + f * f) : h = Math.abs(e[d] - a), h < u && (u = h, c = d);
    return c = !n || u <= n ? e[c] : o, s || c === o || Dt(o) ? c : c + Ce(o);
  } : xs(e));
}, xu = function(e, t, r, n) {
  return Yt(De(e) ? !t : r === !0 ? !!(r = 0) : !n, function() {
    return De(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * n) / n;
  });
}, M2 = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return t.reduce(function(s, o) {
      return o(s);
    }, n);
  };
}, P2 = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || Ce(r));
  };
}, I2 = function(e, t, r) {
  return yu(e, t, 0, 1, r);
}, _u = function(e, t, r) {
  return Yt(r, function(n) {
    return e[~~t(n)];
  });
}, R2 = function i(e, t, r) {
  var n = t - e;
  return De(e) ? _u(e, i(0, e.length), t) : Yt(r, function(s) {
    return (n + (s - e) % n) % n + e;
  });
}, z2 = function i(e, t, r) {
  var n = t - e, s = n * 2;
  return De(e) ? _u(e, i(0, e.length - 1), t) : Yt(r, function(o) {
    return o = (s + (o - e) % s) % s || 0, e + (o > n ? s - o : o);
  });
}, bi = function(e) {
  return e.replace(v2, function(t) {
    var r = t.indexOf("[") + 1, n = t.substring(r || 7, r ? t.indexOf("]") : t.length - 1).split(w2);
    return xu(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5);
  });
}, yu = function(e, t, r, n, s) {
  var o = t - e, a = n - r;
  return Yt(s, function(l) {
    return r + ((l - e) / o * a || 0);
  });
}, q2 = function i(e, t, r, n) {
  var s = isNaN(e + t) ? 0 : function(f) {
    return (1 - f) * e + f * t;
  };
  if (!s) {
    var o = xe(e), a = {}, l, u, c, d, h;
    if (r === !0 && (n = 1) && (r = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (De(e) && !De(t)) {
      for (c = [], d = e.length, h = d - 2, u = 1; u < d; u++)
        c.push(i(e[u - 1], e[u]));
      d--, s = function(v) {
        v *= d;
        var g = Math.min(h, ~~v);
        return c[g](v - g);
      }, r = t;
    } else
      n || (e = Lr(De(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        io.call(a, e, l, "get", t[l]);
      s = function(v) {
        return ao(v, a) || (o ? e.p : e);
      };
    }
  }
  return Yt(r, s);
}, xa = function(e, t, r) {
  var n = e.labels, s = Ke, o, a, l;
  for (o in n)
    a = n[o] - t, a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, Ve = function(e, t, r) {
  var n = e.vars, s = n[t], o = ae, a = e._ctx, l, u, c;
  if (s)
    return l = n[t + "Params"], u = n.callbackScope || e, r && zt.length && sn(), a && (ae = a), c = l ? s.apply(u, l) : s.call(u), ae = o, c;
}, ei = function(e) {
  return Ht(e), e.scrollTrigger && e.scrollTrigger.kill(!!_e), e.progress() < 1 && Ve(e, "onInterrupt"), e;
}, xr, Cu = [], ku = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Zs() || e.headless) {
      var t = e.name, r = fe(e), n = t && !r && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: mi,
        render: ao,
        add: io,
        kill: rf,
        modifier: tf,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: oo,
        aliases: {},
        register: 0
      };
      if (Or(), e !== n) {
        if (ze[t])
          return;
        Ge(n, Ge(on(e, s), o)), Lr(n.prototype, Lr(s, on(e, o))), ze[n.prop = t] = n, e.targetTest && ($i.push(n), Qs[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      ou(t, n), e.register && e.register(Ie, n, Me);
    } else
      Cu.push(e);
}, ie = 255, ti = {
  aqua: [0, ie, ie],
  lime: [0, ie, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ie],
  navy: [0, 0, 128],
  white: [ie, ie, ie],
  olive: [128, 128, 0],
  yellow: [ie, ie, 0],
  orange: [ie, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ie, 0, 0],
  pink: [ie, 192, 203],
  cyan: [0, ie, ie],
  transparent: [ie, ie, ie, 0]
}, Rn = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * ie + 0.5 | 0;
}, Du = function(e, t, r) {
  var n = e ? Dt(e) ? [e >> 16, e >> 8 & ie, e & ie] : 0 : ti.black, s, o, a, l, u, c, d, h, f, v;
  if (!n) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ti[e])
      n = ti[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & ie, n & ie, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & ie, e & ie];
    } else if (e.substr(0, 3) === "hsl") {
      if (n = v = e.match(ga), !t)
        l = +n[0] % 360 / 360, u = +n[1] / 100, c = +n[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, s = c * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = Rn(l + 1 / 3, s, o), n[1] = Rn(l, s, o), n[2] = Rn(l - 1 / 3, s, o);
      else if (~e.indexOf("="))
        return n = e.match(ru), r && n.length < 4 && (n[3] = 1), n;
    } else
      n = e.match(ga) || ti.transparent;
    n = n.map(Number);
  }
  return t && !v && (s = n[0] / ie, o = n[1] / ie, a = n[2] / ie, d = Math.max(s, o, a), h = Math.min(s, o, a), c = (d + h) / 2, d === h ? l = u = 0 : (f = d - h, u = c > 0.5 ? f / (2 - d - h) : f / (d + h), l = d === s ? (o - a) / f + (o < a ? 6 : 0) : d === o ? (a - s) / f + 2 : (s - o) / f + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(u * 100 + 0.5), n[2] = ~~(c * 100 + 0.5)), r && n.length < 4 && (n[3] = 1), n;
}, Au = function(e) {
  var t = [], r = [], n = -1;
  return e.split(qt).forEach(function(s) {
    var o = s.match(wr) || [];
    t.push.apply(t, o), r.push(n += o.length + 1);
  }), t.c = r, t;
}, _a = function(e, t, r) {
  var n = "", s = (e + n).match(qt), o = t ? "hsla(" : "rgba(", a = 0, l, u, c, d;
  if (!s)
    return e;
  if (s = s.map(function(h) {
    return (h = Du(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (c = Au(e), l = r.c, l.join(n) !== c.c.join(n)))
    for (u = e.replace(qt, "1").split(wr), d = u.length - 1; a < d; a++)
      n += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
  if (!u)
    for (u = e.split(qt), d = u.length - 1; a < d; a++)
      n += u[a] + s[a];
  return n + u[d];
}, qt = function() {
  var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in ti)
    i += "|" + e + "\\b";
  return new RegExp(i + ")", "gi");
}(), $2 = /hsl[a]?\(/, Su = function(e) {
  var t = e.join(" "), r;
  if (qt.lastIndex = 0, qt.test(t))
    return r = $2.test(t), e[1] = _a(e[1], r), e[0] = _a(e[0], r, Au(e[1])), !0;
}, vi, $e = function() {
  var i = Date.now, e = 500, t = 33, r = i(), n = r, s = 1e3 / 240, o = s, a = [], l, u, c, d, h, f, v = function g(w) {
    var m = i() - n, b = w === !0, x, _, C, A;
    if ((m > e || m < 0) && (r += m - t), n += m, C = n - r, x = C - o, (x > 0 || b) && (A = ++d.frame, h = C - d.time * 1e3, d.time = C = C / 1e3, o += x + (x >= s ? 4 : s - x), _ = 1), b || (l = u(g)), _)
      for (f = 0; f < a.length; f++)
        a[f](C, h, A, w);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      v(!0);
    },
    deltaRatio: function(w) {
      return h / (1e3 / (w || 60));
    },
    wake: function() {
      nu && (!hs && Zs() && (st = hs = window, Xs = st.document || {}, He.gsap = Ie, (st.gsapVersions || (st.gsapVersions = [])).push(Ie.version), su(nn || st.GreenSockGlobals || !st.gsap && st || {}), Cu.forEach(ku)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), u = c || function(w) {
        return setTimeout(w, o - d.time * 1e3 + 1 | 0);
      }, vi = 1, v(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), vi = 0, u = mi;
    },
    lagSmoothing: function(w, m) {
      e = w || 1 / 0, t = Math.min(m || 33, e);
    },
    fps: function(w) {
      s = 1e3 / (w || 240), o = d.time * 1e3 + s;
    },
    add: function(w, m, b) {
      var x = m ? function(_, C, A, k) {
        w(_, C, A, k), d.remove(x);
      } : w;
      return d.remove(w), a[b ? "unshift" : "push"](x), Or(), x;
    },
    remove: function(w, m) {
      ~(m = a.indexOf(w)) && a.splice(m, 1) && f >= m && f--;
    },
    _listeners: a
  }, d;
}(), Or = function() {
  return !vi && $e.wake();
}, J = {}, V2 = /^[\d.\-M][\d.\-,\s]/, j2 = /["']/g, U2 = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), n = r[0], s = 1, o = r.length, a, l, u; s < o; s++)
    l = r[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), t[n] = isNaN(u) ? u.replace(j2, "").trim() : +u, n = l.substr(a + 1).trim();
  return t;
}, H2 = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", t);
  return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r);
}, G2 = function(e) {
  var t = (e + "").split("("), r = J[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [U2(t[1])] : H2(e).split(",").map(cu)) : J._CE && V2.test(e) ? J._CE("", e) : r;
}, Eu = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Bu = function i(e, t) {
  for (var r = e._first, n; r; )
    r instanceof Te ? i(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? i(r.timeline, t) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = t)), r = r._next;
}, ir = function(e, t) {
  return e && (fe(e) ? e : J[e] || G2(e)) || t;
}, lr = function(e, t, r, n) {
  r === void 0 && (r = function(l) {
    return 1 - t(1 - l);
  }), n === void 0 && (n = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: t,
    easeOut: r,
    easeInOut: n
  }, o;
  return Oe(e, function(a) {
    J[a] = He[a] = s, J[o = a.toLowerCase()] = r;
    for (var l in s)
      J[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = J[a + "." + l] = s[l];
  }), s;
}, Tu = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, zn = function i(e, t, r) {
  var n = t >= 1 ? t : 1, s = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = s / fs * (Math.asin(1 / n) || 0), a = function(c) {
    return c === 1 ? 1 : n * Math.pow(2, -10 * c) * b2((c - o) * s) + 1;
  }, l = e === "out" ? a : e === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Tu(a);
  return s = fs / s, l.config = function(u, c) {
    return i(e, u, c);
  }, l;
}, qn = function i(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, n = e === "out" ? r : e === "in" ? function(s) {
    return 1 - r(1 - s);
  } : Tu(r);
  return n.config = function(s) {
    return i(e, s);
  }, n;
};
Oe("Linear,Quad,Cubic,Quart,Quint,Strong", function(i, e) {
  var t = e < 5 ? e + 1 : e;
  lr(i + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
J.Linear.easeNone = J.none = J.Linear.easeIn;
lr("Elastic", zn("in"), zn("out"), zn());
(function(i, e) {
  var t = 1 / e, r = 2 * t, n = 2.5 * t, s = function(a) {
    return a < t ? i * a * a : a < r ? i * Math.pow(a - 1.5 / e, 2) + 0.75 : a < n ? i * (a -= 2.25 / e) * a + 0.9375 : i * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  lr("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
lr("Expo", function(i) {
  return Math.pow(2, 10 * (i - 1)) * i + i * i * i * i * i * i * (1 - i);
});
lr("Circ", function(i) {
  return -(eu(1 - i * i) - 1);
});
lr("Sine", function(i) {
  return i === 1 ? 1 : -m2(i * h2) + 1;
});
lr("Back", qn("in"), qn("out"), qn());
J.SteppedEase = J.steps = He.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, n = e + (t ? 0 : 1), s = t ? 1 : 0, o = 1 - ne;
    return function(a) {
      return ((n * Ai(0, o, a) | 0) + s) * r;
    };
  }
};
Tr.ease = J["quad.out"];
Oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i) {
  return eo += i + "," + i + "Params,";
});
var Lu = function(e, t) {
  this.id = g2++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : lu, this.set = t ? t.getSetter : oo;
}, wi = /* @__PURE__ */ function() {
  function i(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Nr(this, +t.duration, 1, 1), this.data = t.data, ae && (this._ctx = ae, ae.data.push(this)), vi || $e.wake();
  }
  var e = i.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Nr(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, n) {
    if (Or(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Dn(this, r), !s._dp || s.parent || fu(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && ot(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === ne || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), uu(this, r, n)), this;
  }, e.time = function(r, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + va(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time;
  }, e.totalProgress = function(r, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + va(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, n) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * s, n) : this._repeat ? Fr(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(r, n) {
    if (!arguments.length)
      return this._rts === -ne ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var s = this.parent && this._ts ? an(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -ne ? 0 : this._rts, this.totalTime(Ai(-Math.abs(this._delay), this.totalDuration(), s), n !== !1), kn(this), S2(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Or(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ne && (this._tTime -= ne)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = ue(r);
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && ot(n, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (Ne(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var n = this.parent || this._dp;
    return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? an(n.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = C2);
    var n = _e;
    return _e = r, ro(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), _e = n, this;
  }, e.globalTime = function(r) {
    for (var n = this, s = arguments.length ? r : n.rawTime(); n; )
      s = n._start + s / (Math.abs(n._ts) || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : s;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, wa(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = r, wa(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, n) {
    return this.totalTime(We(this, r), Ne(n));
  }, e.restart = function(r, n) {
    return this.play().totalTime(r ? -this._delay : 0, Ne(n)), this._dur || (this._zTime = -ne), this;
  }, e.play = function(r, n) {
    return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, n) {
    return r != null && this.seek(r || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, e.pause = function(r, n) {
    return r != null && this.seek(r, n), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ne : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ne, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, n = this._start, s;
    return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= n && s < this.endTime(!0) - ne);
  }, e.eventCallback = function(r, n, s) {
    var o = this.vars;
    return arguments.length > 1 ? (n ? (o[r] = n, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = n)) : delete o[r], this) : o[r];
  }, e.then = function(r) {
    var n = this, s = n._prom;
    return new Promise(function(o) {
      var a = fe(r) ? r : du, l = function() {
        var c = n.then;
        n.then = null, s && s(), fe(a) && (a = a(n)) && (a.then || a === n) && (n.then = c), o(a), n.then = c;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? l() : n._prom = l;
    });
  }, e.kill = function() {
    ei(this);
  }, i;
}();
Ge(wi.prototype, {
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
  _zTime: -ne,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Te = /* @__PURE__ */ function(i) {
  Ql(e, i);
  function e(r, n) {
    var s;
    return r === void 0 && (r = {}), s = i.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = Ne(r.sortChildren), ce && ot(r.parent || ce, wt(s), n), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && hu(wt(s), r.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(n, s, o) {
    return li(0, arguments, this), this;
  }, t.from = function(n, s, o) {
    return li(1, arguments, this), this;
  }, t.fromTo = function(n, s, o, a) {
    return li(2, arguments, this), this;
  }, t.set = function(n, s, o) {
    return s.duration = 0, s.parent = this, ai(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new me(n, s, We(this, o), 1), this;
  }, t.call = function(n, s, o) {
    return ot(this, me.delayedCall(0, n, s), o);
  }, t.staggerTo = function(n, s, o, a, l, u, c) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new me(n, o, We(this, l)), this;
  }, t.staggerFrom = function(n, s, o, a, l, u, c) {
    return o.runBackwards = 1, ai(o).immediateRender = Ne(o.immediateRender), this.staggerTo(n, s, o, a, l, u, c);
  }, t.staggerFromTo = function(n, s, o, a, l, u, c, d) {
    return a.startAt = o, ai(a).immediateRender = Ne(a.immediateRender), this.staggerTo(n, s, a, l, u, c, d);
  }, t.render = function(n, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = n <= 0 ? 0 : ue(n), d = this._zTime < 0 != n < 0 && (this._initted || !u), h, f, v, g, w, m, b, x, _, C, A, k;
    if (this !== ce && c > l && n >= 0 && (c = l), c !== this._tTime || o || d) {
      if (a !== this._time && u && (c += this._time - a, n += this._time - a), h = c, _ = this._start, x = this._ts, m = !x, d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
        if (A = this._yoyo, w = u + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(w * 100 + n, s, o);
        if (h = ue(c % w), c === l ? (g = this._repeat, h = u) : (C = ue(c / w), g = ~~C, g && g === C && (h = u, g--), h > u && (h = u)), C = Fr(this._tTime, w), !a && this._tTime && C !== g && this._tTime - C * w - this._dur <= 0 && (C = g), A && g & 1 && (h = u - h, k = 1), g !== C && !this._lock) {
          var y = A && C & 1, D = y === (A && g & 1);
          if (g < C && (y = !y), a = y ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (k ? 0 : ue(g * w)), s, !u)._lock = 0, this._tTime = c, !s && this.parent && Ve(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1, C = g), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, D && (this._lock = 2, a = y ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          Bu(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (b = L2(this, ue(a), ue(h)), b && (c -= h - (h = b._start))), this._tTime = c, this._time = h, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && c && u && !s && !C && (Ve(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= a && n >= 0)
        for (f = this._first; f; ) {
          if (v = f._next, (f._act || h >= f._start) && f._ts && b !== f) {
            if (f.parent !== this)
              return this.render(n, s, o);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, s, o), h !== this._time || !this._ts && !m) {
              b = 0, v && (c += this._zTime = -ne);
              break;
            }
          }
          f = v;
        }
      else {
        f = this._last;
        for (var E = n < 0 ? n : h; f; ) {
          if (v = f._prev, (f._act || E <= f._end) && f._ts && b !== f) {
            if (f.parent !== this)
              return this.render(n, s, o);
            if (f.render(f._ts > 0 ? (E - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (E - f._start) * f._ts, s, o || _e && ro(f)), h !== this._time || !this._ts && !m) {
              b = 0, v && (c += this._zTime = E ? -ne : ne);
              break;
            }
          }
          f = v;
        }
      }
      if (b && !s && (this.pause(), b.render(h >= a ? 0 : -ne)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = _, kn(this), this.render(n, s, o);
      this._onUpdate && !s && Ve(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (_ === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((n || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Ht(this, 1), !s && !(n < 0 && !a) && (c || a || !l) && (Ve(this, c === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(n, s) {
    var o = this;
    if (Dt(s) || (s = We(this, s, n)), !(n instanceof wi)) {
      if (De(n))
        return n.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (xe(n))
        return this.addLabel(n, s);
      if (fe(n))
        n = me.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? ot(this, n, s) : this;
  }, t.getChildren = function(n, s, o, a) {
    n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -Ke);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof me ? s && l.push(u) : (o && l.push(u), n && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
    return l;
  }, t.getById = function(n) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === n)
        return s[o];
  }, t.remove = function(n) {
    return xe(n) ? this.removeLabel(n) : fe(n) ? this.killTweensOf(n) : (n.parent === this && Cn(this, n), n === this._recent && (this._recent = this._last), rr(this));
  }, t.totalTime = function(n, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ue($e.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), i.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(n, s) {
    return this.labels[n] = We(this, s), this;
  }, t.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, t.addPause = function(n, s, o) {
    var a = me.delayedCall(0, s || mi, o);
    return a.data = "isPause", this._hasPause = 1, ot(this, a, We(this, n));
  }, t.removePause = function(n) {
    var s = this._first;
    for (n = We(this, n); s; )
      s._start === n && s.data === "isPause" && Ht(s), s = s._next;
  }, t.killTweensOf = function(n, s, o) {
    for (var a = this.getTweensOf(n, o), l = a.length; l--; )
      Mt !== a[l] && a[l].kill(n, s);
    return this;
  }, t.getTweensOf = function(n, s) {
    for (var o = [], a = Ze(n), l = this._first, u = Dt(s), c; l; )
      l instanceof me ? k2(l._targets, a) && (u ? (!Mt || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, t.tweenTo = function(n, s) {
    s = s || {};
    var o = this, a = We(o, n), l = s, u = l.startAt, c = l.onStart, d = l.onStartParams, h = l.immediateRender, f, v = me.to(o, Ge({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || ne,
      onStart: function() {
        if (o.pause(), !f) {
          var w = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          v._dur !== w && Nr(v, w, 0, 1).render(v._time, !0, !0), f = 1;
        }
        c && c.apply(v, d || []);
      }
    }, s));
    return h ? v.render(0) : v;
  }, t.tweenFromTo = function(n, s, o) {
    return this.tweenTo(s, Ge({
      startAt: {
        time: We(this, n)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(n) {
    return n === void 0 && (n = this._time), xa(this, We(this, n));
  }, t.previousLabel = function(n) {
    return n === void 0 && (n = this._time), xa(this, We(this, n), 1);
  }, t.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + ne);
  }, t.shiftChildren = function(n, s, o) {
    o === void 0 && (o = 0);
    var a = this._first, l = this.labels, u;
    for (n = ue(n); a; )
      a._start >= o && (a._start += n, a._end += n), a = a._next;
    if (s)
      for (u in l)
        l[u] >= o && (l[u] += n);
    return rr(this);
  }, t.invalidate = function(n) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(n), s = s._next;
    return i.prototype.invalidate.call(this, n);
  }, t.clear = function(n) {
    n === void 0 && (n = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), rr(this);
  }, t.totalDuration = function(n) {
    var s = 0, o = this, a = o._last, l = Ke, u, c, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
    if (o._dirty) {
      for (d = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, ot(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (s -= c, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += ue(c / o._ts), o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
      Nr(o, o === ce && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(n) {
    if (ce._ts && (uu(ce, an(n, ce)), au = $e.frame), $e.frame >= ma) {
      ma += Ue.autoSleep || 120;
      var s = ce._first;
      if ((!s || !s._ts) && Ue.autoSleep && $e._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || $e.sleep();
      }
    }
  }, e;
}(wi);
Ge(Te.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var W2 = function(e, t, r, n, s, o, a) {
  var l = new Me(this._pt, e, t, 0, 1, Iu, null, s), u = 0, c = 0, d, h, f, v, g, w, m, b;
  for (l.b = r, l.e = n, r += "", n += "", (m = ~n.indexOf("random(")) && (n = bi(n)), o && (b = [r, n], o(b, e, t), r = b[0], n = b[1]), h = r.match(Pn) || []; d = Pn.exec(n); )
    v = d[0], g = n.substring(u, d.index), f ? f = (f + 1) % 5 : g.substr(-5) === "rgba(" && (f = 1), v !== h[c++] && (w = parseFloat(h[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: g || c === 1 ? g : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: w,
      c: v.charAt(1) === "=" ? kr(w, v) - w : parseFloat(v) - w,
      m: f && f < 4 ? Math.round : 0
    }, u = Pn.lastIndex);
  return l.c = u < n.length ? n.substring(u, n.length) : "", l.fp = a, (iu.test(n) || m) && (l.e = 0), this._pt = l, l;
}, io = function(e, t, r, n, s, o, a, l, u, c) {
  fe(n) && (n = n(s || 0, e, o));
  var d = e[t], h = r !== "get" ? r : fe(d) ? u ? e[t.indexOf("set") || !fe(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : d, f = fe(d) ? u ? J2 : Mu : so, v;
  if (xe(n) && (~n.indexOf("random(") && (n = bi(n)), n.charAt(1) === "=" && (v = kr(h, n) + (Ce(h) || 0), (v || v === 0) && (n = v))), !c || h !== n || _s)
    return !isNaN(h * n) && n !== "" ? (v = new Me(this._pt, e, t, +h || 0, n - (h || 0), typeof d == "boolean" ? ef : Pu, 0, f), u && (v.fp = u), a && v.modifier(a, this, e), this._pt = v) : (!d && !(t in e) && Js(t, n), W2.call(this, e, t, h, n, f, l || Ue.stringFilter, u));
}, Y2 = function(e, t, r, n, s) {
  if (fe(e) && (e = ui(e, s, t, r, n)), !ft(e) || e.style && e.nodeType || De(e) || tu(e))
    return xe(e) ? ui(e, s, t, r, n) : e;
  var o = {}, a;
  for (a in e)
    o[a] = ui(e[a], s, t, r, n);
  return o;
}, Fu = function(e, t, r, n, s, o) {
  var a, l, u, c;
  if (ze[e] && (a = new ze[e]()).init(s, a.rawVars ? t[e] : Y2(t[e], n, s, o, r), r, n, o) !== !1 && (r._pt = l = new Me(r._pt, s, e, 0, 1, a.render, a, 0, a.priority), r !== xr))
    for (u = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, Mt, _s, no = function i(e, t, r) {
  var n = e.vars, s = n.ease, o = n.startAt, a = n.immediateRender, l = n.lazy, u = n.onUpdate, c = n.runBackwards, d = n.yoyoEase, h = n.keyframes, f = n.autoRevert, v = e._dur, g = e._startAt, w = e._targets, m = e.parent, b = m && m.data === "nested" ? m.vars.targets : w, x = e._overwrite === "auto" && !Ys, _ = e.timeline, C, A, k, y, D, E, L, T, F, N, O, q, R;
  if (_ && (!h || !s) && (s = "none"), e._ease = ir(s, Tr.ease), e._yEase = d ? Eu(ir(d === !0 ? s : d, Tr.ease)) : 0, d && e._yoyo && !e._repeat && (d = e._yEase, e._yEase = e._ease, e._ease = d), e._from = !_ && !!n.runBackwards, !_ || h && !n.stagger) {
    if (T = w[0] ? tr(w[0]).harness : 0, q = T && n[T.prop], C = on(n, Qs), g && (g._zTime < 0 && g.progress(1), t < 0 && c && a && !f ? g.render(-1, !0) : g.revert(c && v ? qi : y2), g._lazy = 0), o) {
      if (Ht(e._startAt = me.set(w, Ge({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !g && Ne(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Ve(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (_e || !a && !f) && e._startAt.revert(qi), a && v && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && v && !g) {
      if (t && (a = !1), k = Ge({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !g && Ne(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, C), q && (k[T.prop] = q), Ht(e._startAt = me.set(w, k)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (_e ? e._startAt.revert(qi) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        i(e._startAt, ne, ne);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = v && Ne(l) || l && !v, A = 0; A < w.length; A++) {
      if (D = w[A], L = D._gsap || to(w)[A]._gsap, e._ptLookup[A] = N = {}, gs[L.id] && zt.length && sn(), O = b === w ? A : b.indexOf(D), T && (F = new T()).init(D, q || C, e, O, b) !== !1 && (e._pt = y = new Me(e._pt, D, F.name, 0, 1, F.render, F, 0, F.priority), F._props.forEach(function(S) {
        N[S] = y;
      }), F.priority && (E = 1)), !T || q)
        for (k in C)
          ze[k] && (F = Fu(k, C, e, O, D, b)) ? F.priority && (E = 1) : N[k] = y = io.call(e, D, k, "get", C[k], O, b, 0, n.stringFilter);
      e._op && e._op[A] && e.kill(D, e._op[A]), x && e._pt && (Mt = e, ce.killTweensOf(D, N, e.globalTime(t)), R = !e.parent, Mt = 0), e._pt && l && (gs[L.id] = 1);
    }
    E && Ru(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !R, h && t <= 0 && _.render(Ke, !0, !0);
}, K2 = function(e, t, r, n, s, o, a, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, d, h, f;
  if (!u)
    for (u = e._ptCache[t] = [], h = e._ptLookup, f = e._targets.length; f--; ) {
      if (c = h[f][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return _s = 1, e.vars[t] = "+=0", no(e, a), _s = 0, l ? gi(t + " not eligible for reset") : 1;
      u.push(c);
    }
  for (f = u.length; f--; )
    d = u[f], c = d._pt || d, c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + o * c.c, c.c = r - c.s, d.e && (d.e = he(r) + Ce(d.e)), d.b && (d.b = c.s + Ce(d.b));
}, Z2 = function(e, t) {
  var r = e[0] ? tr(e[0]).harness : 0, n = r && r.aliases, s, o, a, l;
  if (!n)
    return t;
  s = Lr({}, t);
  for (o in n)
    if (o in s)
      for (l = n[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, X2 = function(e, t, r, n) {
  var s = t.ease || n || "power1.inOut", o, a;
  if (De(t))
    a = r[e] || (r[e] = []), t.forEach(function(l, u) {
      return a.push({
        t: u / (t.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (o in t)
      a = r[o] || (r[o] = []), o === "ease" || a.push({
        t: parseFloat(e),
        v: t[o],
        e: s
      });
}, ui = function(e, t, r, n, s) {
  return fe(e) ? e.call(t, r, n, s) : xe(e) && ~e.indexOf("random(") ? bi(e) : e;
}, Nu = eo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ou = {};
Oe(Nu + ",id,stagger,delay,duration,paused,scrollTrigger", function(i) {
  return Ou[i] = 1;
});
var me = /* @__PURE__ */ function(i) {
  Ql(e, i);
  function e(r, n, s, o) {
    var a;
    typeof n == "number" && (s.duration = n, n = s, s = null), a = i.call(this, o ? n : ai(n)) || this;
    var l = a.vars, u = l.duration, c = l.delay, d = l.immediateRender, h = l.stagger, f = l.overwrite, v = l.keyframes, g = l.defaults, w = l.scrollTrigger, m = l.yoyoEase, b = n.parent || ce, x = (De(r) || tu(r) ? Dt(r[0]) : "length" in n) ? [r] : Ze(r), _, C, A, k, y, D, E, L;
    if (a._targets = x.length ? to(x) : gi("GSAP target " + r + " not found. https://gsap.com", !Ue.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, v || h || Ni(u) || Ni(c)) {
      if (n = a.vars, _ = a.timeline = new Te({
        data: "nested",
        defaults: g || {},
        targets: b && b.data === "nested" ? b.vars.targets : x
      }), _.kill(), _.parent = _._dp = wt(a), _._start = 0, h || Ni(u) || Ni(c)) {
        if (k = x.length, E = h && vu(h), ft(h))
          for (y in h)
            ~Nu.indexOf(y) && (L || (L = {}), L[y] = h[y]);
        for (C = 0; C < k; C++)
          A = on(n, Ou), A.stagger = 0, m && (A.yoyoEase = m), L && Lr(A, L), D = x[C], A.duration = +ui(u, wt(a), C, D, x), A.delay = (+ui(c, wt(a), C, D, x) || 0) - a._delay, !h && k === 1 && A.delay && (a._delay = c = A.delay, a._start += c, A.delay = 0), _.to(D, A, E ? E(C, D, x) : 0), _._ease = J.none;
        _.duration() ? u = c = 0 : a.timeline = 0;
      } else if (v) {
        ai(Ge(_.vars.defaults, {
          ease: "none"
        })), _._ease = ir(v.ease || n.ease || "none");
        var T = 0, F, N, O;
        if (De(v))
          v.forEach(function(q) {
            return _.to(x, q, ">");
          }), _.duration();
        else {
          A = {};
          for (y in v)
            y === "ease" || y === "easeEach" || X2(y, v[y], A, v.easeEach);
          for (y in A)
            for (F = A[y].sort(function(q, R) {
              return q.t - R.t;
            }), T = 0, C = 0; C < F.length; C++)
              N = F[C], O = {
                ease: N.e,
                duration: (N.t - (C ? F[C - 1].t : 0)) / 100 * u
              }, O[y] = N.v, _.to(x, O, T), T += O.duration;
          _.duration() < u && _.to({}, {
            duration: u - _.duration()
          });
        }
      }
      u || a.duration(u = _.duration());
    } else
      a.timeline = 0;
    return f === !0 && !Ys && (Mt = wt(a), ce.killTweensOf(x), Mt = 0), ot(b, wt(a), s), n.reversed && a.reverse(), n.paused && a.paused(!0), (d || !u && !v && a._start === ue(b._time) && Ne(d) && E2(wt(a)) && b.data !== "nested") && (a._tTime = -ne, a.render(Math.max(0, -c) || 0)), w && hu(wt(a), w), a;
  }
  var t = e.prototype;
  return t.render = function(n, s, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = n < 0, d = n > l - ne && !c ? l : n < ne ? 0 : n, h, f, v, g, w, m, b, x, _;
    if (!u)
      T2(this, n, s, o);
    else if (d !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = d, x = this.timeline, this._repeat) {
        if (g = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(g * 100 + n, s, o);
        if (h = ue(d % g), d === l ? (v = this._repeat, h = u) : (w = ue(d / g), v = ~~w, v && v === w ? (h = u, v--) : h > u && (h = u)), m = this._yoyo && v & 1, m && (_ = this._yEase, h = u - h), w = Fr(this._tTime, g), h === a && !o && this._initted && v === w)
          return this._tTime = d, this;
        v !== w && (x && this._yEase && Bu(x, m), this.vars.repeatRefresh && !m && !this._lock && h !== g && this._initted && (this._lock = o = 1, this.render(ue(g * v), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (gu(this, c ? n : h, o, s, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && v !== w))
          return this;
        if (u !== this._dur)
          return this.render(n, s, o);
      }
      if (this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = b = (_ || this._ease)(h / u), this._from && (this.ratio = b = 1 - b), !a && d && !s && !w && (Ve(this, "onStart"), this._tTime !== d))
        return this;
      for (f = this._pt; f; )
        f.r(b, f.d), f = f._next;
      x && x.render(n < 0 ? n : x._dur * x._ease(h / this._dur), s, o) || this._startAt && (this._zTime = n), this._onUpdate && !s && (c && ms(this, n, s, o), Ve(this, "onUpdate")), this._repeat && v !== w && this.vars.onRepeat && !s && this.parent && Ve(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (c && !this._onUpdate && ms(this, n, !0, !0), (n || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ht(this, 1), !s && !(c && !a) && (d || a || m) && (Ve(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), i.prototype.invalidate.call(this, n);
  }, t.resetTo = function(n, s, o, a, l) {
    vi || $e.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || no(this, u), c = this._ease(u / this._dur), K2(this, n, s, o, a, c, u, l) ? this.resetTo(n, s, o, a, 1) : (Dn(this, 0), this.parent || pu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(n, s) {
    if (s === void 0 && (s = "all"), !n && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? ei(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_e), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, s, Mt && Mt.vars.overwrite !== !0)._first || ei(this), this.parent && o !== this.timeline.totalDuration() && Nr(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = n ? Ze(n) : a, u = this._ptLookup, c = this._pt, d, h, f, v, g, w, m;
    if ((!s || s === "all") && A2(a, l))
      return s === "all" && (this._pt = 0), ei(this);
    for (d = this._op = this._op || [], s !== "all" && (xe(s) && (g = {}, Oe(s, function(b) {
      return g[b] = 1;
    }), s = g), s = Z2(a, s)), m = a.length; m--; )
      if (~l.indexOf(a[m])) {
        h = u[m], s === "all" ? (d[m] = s, v = h, f = {}) : (f = d[m] = d[m] || {}, v = s);
        for (g in v)
          w = h && h[g], w && ((!("kill" in w.d) || w.d.kill(g) === !0) && Cn(this, w, "_pt"), delete h[g]), f !== "all" && (f[g] = 1);
      }
    return this._initted && !this._pt && c && ei(this), this;
  }, e.to = function(n, s) {
    return new e(n, s, arguments[2]);
  }, e.from = function(n, s) {
    return li(1, arguments);
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
    return li(2, arguments);
  }, e.set = function(n, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(n, s);
  }, e.killTweensOf = function(n, s, o) {
    return ce.killTweensOf(n, s, o);
  }, e;
}(wi);
Ge(me.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Oe("staggerTo,staggerFrom,staggerFromTo", function(i) {
  me[i] = function() {
    var e = new Te(), t = vs.call(arguments, 0);
    return t.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), e[i].apply(e, t);
  };
});
var so = function(e, t, r) {
  return e[t] = r;
}, Mu = function(e, t, r) {
  return e[t](r);
}, J2 = function(e, t, r, n) {
  return e[t](n.fp, r);
}, Q2 = function(e, t, r) {
  return e.setAttribute(t, r);
}, oo = function(e, t) {
  return fe(e[t]) ? Mu : Ks(e[t]) && e.setAttribute ? Q2 : so;
}, Pu = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, ef = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Iu = function(e, t) {
  var r = t._pt, n = "";
  if (!e && t.b)
    n = t.b;
  else if (e === 1 && t.e)
    n = t.e;
  else {
    for (; r; )
      n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + n, r = r._next;
    n += t.c;
  }
  t.set(t.t, t.p, n, t);
}, ao = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, tf = function(e, t, r, n) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === n && s.modifier(e, t, r), s = o;
}, rf = function(e) {
  for (var t = this._pt, r, n; t; )
    n = t._next, t.p === e && !t.op || t.op === e ? Cn(this, t, "_pt") : t.dep || (r = 1), t = n;
  return !r;
}, nf = function(e, t, r, n) {
  n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
}, Ru = function(e) {
  for (var t = e._pt, r, n, s, o; t; ) {
    for (r = t._next, n = s; n && n.pr > t.pr; )
      n = n._next;
    (t._prev = n ? n._prev : o) ? t._prev._next = t : s = t, (t._next = n) ? n._prev = t : o = t, t = r;
  }
  e._pt = s;
}, Me = /* @__PURE__ */ function() {
  function i(t, r, n, s, o, a, l, u, c) {
    this.t = r, this.s = s, this.c = o, this.p = n, this.r = a || Pu, this.d = l || this, this.set = u || so, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = i.prototype;
  return e.modifier = function(r, n, s) {
    this.mSet = this.mSet || this.set, this.set = nf, this.m = r, this.mt = s, this.tween = n;
  }, i;
}();
Oe(eo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(i) {
  return Qs[i] = 1;
});
He.TweenMax = He.TweenLite = me;
He.TimelineLite = He.TimelineMax = Te;
ce = new Te({
  sortChildren: !1,
  defaults: Tr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Ue.stringFilter = Su;
var nr = [], Vi = {}, sf = [], ya = 0, of = 0, $n = function(e) {
  return (Vi[e] || sf).map(function(t) {
    return t();
  });
}, ys = function() {
  var e = Date.now(), t = [];
  e - ya > 2 && ($n("matchMediaInit"), nr.forEach(function(r) {
    var n = r.queries, s = r.conditions, o, a, l, u;
    for (a in n)
      o = st.matchMedia(n[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
    u && (r.revert(), l && t.push(r));
  }), $n("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(n) {
      return r.add(null, n);
    });
  }), ya = e, $n("matchMedia"));
}, zu = /* @__PURE__ */ function() {
  function i(t, r) {
    this.selector = r && ws(r), this.data = [], this._r = [], this.isReverted = !1, this.id = of++, t && this.add(t);
  }
  var e = i.prototype;
  return e.add = function(r, n, s) {
    fe(r) && (s = n, n = r, r = fe);
    var o = this, a = function() {
      var u = ae, c = o.selector, d;
      return u && u !== o && u.data.push(o), s && (o.selector = ws(s)), ae = o, d = n.apply(o, arguments), fe(d) && o._r.push(d), ae = u, o.selector = c, o.isReverted = !1, d;
    };
    return o.last = a, r === fe ? a(o, function(l) {
      return o.add(null, l);
    }) : r ? o[r] = a : a;
  }, e.ignore = function(r) {
    var n = ae;
    ae = null, r(this), ae = n;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(n) {
      return n instanceof i ? r.push.apply(r, n.getTweens()) : n instanceof me && !(n.parent && n.parent.data === "nested") && r.push(n);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, n) {
    var s = this;
    if (r ? function() {
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
        return c.t.revert(r);
      }), l = s.data.length; l--; )
        u = s.data[l], u instanceof Te ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof me) && u.revert && u.revert(r);
      s._r.forEach(function(c) {
        return c(r, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), n)
      for (var o = nr.length; o--; )
        nr[o].id === this.id && nr.splice(o, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, i;
}(), af = /* @__PURE__ */ function() {
  function i(t) {
    this.contexts = [], this.scope = t, ae && ae.data.push(this);
  }
  var e = i.prototype;
  return e.add = function(r, n, s) {
    ft(r) || (r = {
      matches: r
    });
    var o = new zu(0, s || this.scope), a = o.conditions = {}, l, u, c;
    ae && !o.selector && (o.selector = ae.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (l = st.matchMedia(r[u]), l && (nr.indexOf(o) < 0 && nr.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(ys) : l.addEventListener("change", ys)));
    return c && n(o, function(d) {
      return o.add(null, d);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(n) {
      return n.kill(r, !0);
    });
  }, i;
}(), ln = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(n) {
      return ku(n);
    });
  },
  timeline: function(e) {
    return new Te(e);
  },
  getTweensOf: function(e, t) {
    return ce.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, n) {
    xe(e) && (e = Ze(e)[0]);
    var s = tr(e || {}).get, o = r ? du : cu;
    return r === "native" && (r = ""), e && (t ? o((ze[t] && ze[t].get || s)(e, t, r, n)) : function(a, l, u) {
      return o((ze[a] && ze[a].get || s)(e, a, l, u));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = Ze(e), e.length > 1) {
      var n = e.map(function(c) {
        return Ie.quickSetter(c, t, r);
      }), s = n.length;
      return function(c) {
        for (var d = s; d--; )
          n[d](c);
      };
    }
    e = e[0] || {};
    var o = ze[t], a = tr(e), l = a.harness && (a.harness.aliases || {})[t] || t, u = o ? function(c) {
      var d = new o();
      xr._pt = 0, d.init(e, r ? c + r : c, xr, 0, [e]), d.render(1, d), xr._pt && ao(1, xr);
    } : a.set(e, l);
    return o ? u : function(c) {
      return u(e, l, r ? c + r : c, a, 1);
    };
  },
  quickTo: function(e, t, r) {
    var n, s = Ie.to(e, Ge((n = {}, n[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})), o = function(l, u, c) {
      return s.resetTo(t, l, u, c);
    };
    return o.tween = s, o;
  },
  isTweening: function(e) {
    return ce.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = ir(e.ease, Tr.ease)), ba(Tr, e || {});
  },
  config: function(e) {
    return ba(Ue, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, n = e.plugins, s = e.defaults, o = e.extendTimeline;
    (n || "").split(",").forEach(function(a) {
      return a && !ze[a] && !He[a] && gi(t + " effect requires " + a + " plugin.");
    }), In[t] = function(a, l, u) {
      return r(Ze(a), Ge(l || {}, s), u);
    }, o && (Te.prototype[t] = function(a, l, u) {
      return this.add(In[t](a, ft(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(e, t) {
    J[e] = ir(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? ir(e, t) : J;
  },
  getById: function(e) {
    return ce.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new Te(e), n, s;
    for (r.smoothChildTiming = Ne(e.smoothChildTiming), ce.remove(r), r._dp = 0, r._time = r._tTime = ce._time, n = ce._first; n; )
      s = n._next, (t || !(!n._dur && n instanceof me && n.vars.onComplete === n._targets[0])) && ot(r, n, n._start - n._delay), n = s;
    return ot(ce, r, 0), r;
  },
  context: function(e, t) {
    return e ? new zu(e, t) : ae;
  },
  matchMedia: function(e) {
    return new af(e);
  },
  matchMediaRefresh: function() {
    return nr.forEach(function(e) {
      var t = e.conditions, r, n;
      for (n in t)
        t[n] && (t[n] = !1, r = 1);
      r && e.revert();
    }) || ys();
  },
  addEventListener: function(e, t) {
    var r = Vi[e] || (Vi[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = Vi[e], n = r && r.indexOf(t);
    n >= 0 && r.splice(n, 1);
  },
  utils: {
    wrap: R2,
    wrapYoyo: z2,
    distribute: vu,
    random: xu,
    snap: wu,
    normalize: I2,
    getUnit: Ce,
    clamp: N2,
    splitColor: Du,
    toArray: Ze,
    selector: ws,
    mapRange: yu,
    pipe: M2,
    unitize: P2,
    interpolate: q2,
    shuffle: bu
  },
  install: su,
  effects: In,
  ticker: $e,
  updateRoot: Te.updateRoot,
  plugins: ze,
  globalTimeline: ce,
  core: {
    PropTween: Me,
    globals: ou,
    Tween: me,
    Timeline: Te,
    Animation: wi,
    getCache: tr,
    _removeLinkedListItem: Cn,
    reverting: function() {
      return _e;
    },
    context: function(e) {
      return e && ae && (ae.data.push(e), e._ctx = ae), ae;
    },
    suppressOverwrites: function(e) {
      return Ys = e;
    }
  }
};
Oe("to,from,fromTo,delayedCall,set,killTweensOf", function(i) {
  return ln[i] = me[i];
});
$e.add(Te.updateRoot);
xr = ln.to({}, {
  duration: 0
});
var lf = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, uf = function(e, t) {
  var r = e._targets, n, s, o;
  for (n in t)
    for (s = r.length; s--; )
      o = e._ptLookup[s][n], o && (o = o.d) && (o._pt && (o = lf(o, n)), o && o.modifier && o.modifier(t[n], e, r[s], n));
}, Vn = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, s, o) {
      o._onInit = function(a) {
        var l, u;
        if (xe(s) && (l = {}, Oe(s, function(c) {
          return l[c] = 1;
        }), s = l), t) {
          l = {};
          for (u in s)
            l[u] = t(s[u]);
          s = l;
        }
        uf(a, s);
      };
    }
  };
}, Ie = ln.registerPlugin({
  name: "attr",
  init: function(e, t, r, n, s) {
    var o, a, l;
    this.tween = r;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], n, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      _e ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, Vn("roundProps", xs), Vn("modifiers"), Vn("snap", wu)) || ln;
me.version = Te.version = Ie.version = "3.14.2";
nu = 1;
Zs() && Or();
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
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ca, Pt, Dr, lo, er, ka, uo, cf = function() {
  return typeof window < "u";
}, At = {}, Jt = 180 / Math.PI, Ar = Math.PI / 180, hr = Math.atan2, Da = 1e8, co = /([A-Z])/g, df = /(left|right|width|margin|padding|x)/i, pf = /[\s,\(]\S/, ct = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Cs = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, ff = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, hf = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, gf = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, mf = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, qu = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, $u = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, bf = function(e, t, r) {
  return e.style[t] = r;
}, vf = function(e, t, r) {
  return e.style.setProperty(t, r);
}, wf = function(e, t, r) {
  return e._gsap[t] = r;
}, xf = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, _f = function(e, t, r, n, s) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(s, o);
}, yf = function(e, t, r, n, s) {
  var o = e._gsap;
  o[t] = r, o.renderTransform(s, o);
}, de = "transform", Pe = de + "Origin", Cf = function i(e, t) {
  var r = this, n = this.target, s = n.style, o = n._gsap;
  if (e in At && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = ct[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = _t(n, a);
      }) : this.tfm[e] = o.x ? o[e] : _t(n, e), e === Pe && (this.tfm.zOrigin = o.zOrigin);
    else
      return ct.transform.split(",").forEach(function(a) {
        return i.call(r, a, t);
      });
    if (this.props.indexOf(de) >= 0)
      return;
    o.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Pe, t, "")), e = de;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, Vu = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, kf = function() {
  var e = this.props, t = this.target, r = t.style, n = t._gsap, s, o;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(co, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      n[o] = this.tfm[o];
    n.svg && (n.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = uo(), (!s || !s.isStart) && !r[de] && (Vu(r), n.zOrigin && r[Pe] && (r[Pe] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
  }
}, ju = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: kf,
    save: Cf
  };
  return e._gsap || Ie.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(n) {
    return r.save(n);
  }), r;
}, Uu, ks = function(e, t) {
  var r = Pt.createElementNS ? Pt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Pt.createElement(e);
  return r && r.style ? r : Pt.createElement(e);
}, je = function i(e, t, r) {
  var n = getComputedStyle(e);
  return n[t] || n.getPropertyValue(t.replace(co, "-$1").toLowerCase()) || n.getPropertyValue(t) || !r && i(e, Mr(t) || t, 1) || "";
}, Aa = "O,Moz,ms,Ms,Webkit".split(","), Mr = function(e, t, r) {
  var n = t || er, s = n.style, o = 5;
  if (e in s && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Aa[o] + e in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Aa[o] : "") + e;
}, Ds = function() {
  cf() && window.document && (Ca = window, Pt = Ca.document, Dr = Pt.documentElement, er = ks("div") || {
    style: {}
  }, ks("div"), de = Mr(de), Pe = de + "Origin", er.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Uu = !!Mr("perspective"), uo = Ie.core.reverting, lo = 1);
}, Sa = function(e) {
  var t = e.ownerSVGElement, r = ks("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = e.cloneNode(!0), s;
  n.style.display = "block", r.appendChild(n), Dr.appendChild(r);
  try {
    s = n.getBBox();
  } catch {
  }
  return r.removeChild(n), Dr.removeChild(r), s;
}, Ea = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, Hu = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = Sa(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = Sa(e)), t && !t.width && !t.x && !t.y ? {
    x: +Ea(e, ["x", "cx", "x1"]) || 0,
    y: +Ea(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Gu = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Hu(e));
}, Gt = function(e, t) {
  if (t) {
    var r = e.style, n;
    t in At && t !== Pe && (t = de), r.removeProperty ? (n = t.substr(0, 2), (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(n === "--" ? t : t.replace(co, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, It = function(e, t, r, n, s, o) {
  var a = new Me(e._pt, t, r, 0, 1, o ? $u : qu);
  return e._pt = a, a.b = n, a.e = s, e._props.push(r), a;
}, Ba = {
  deg: 1,
  rad: 1,
  turn: 1
}, Df = {
  grid: 1,
  flex: 1
}, Wt = function i(e, t, r, n) {
  var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = er.style, l = df.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = n === "px", f = n === "%", v, g, w, m;
  if (n === o || !s || Ba[n] || Ba[o])
    return s;
  if (o !== "px" && !h && (s = i(e, t, r, "px")), m = e.getCTM && Gu(e), (f || o === "%") && (At[t] || ~t.indexOf("adius")))
    return v = m ? e.getBBox()[l ? "width" : "height"] : e[c], he(f ? s / v * d : s / 100 * v);
  if (a[l ? "width" : "height"] = d + (h ? o : n), g = n !== "rem" && ~t.indexOf("adius") || n === "em" && e.appendChild && !u ? e : e.parentNode, m && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === Pt || !g.appendChild) && (g = Pt.body), w = g._gsap, w && f && w.width && l && w.time === $e.time && !w.uncache)
    return he(s / w.width * d);
  if (f && (t === "height" || t === "width")) {
    var b = e.style[t];
    e.style[t] = d + n, v = e[c], b ? e.style[t] = b : Gt(e, t);
  } else
    (f || o === "%") && !Df[je(g, "display")] && (a.position = je(e, "position")), g === e && (a.position = "static"), g.appendChild(er), v = er[c], g.removeChild(er), a.position = "absolute";
  return l && f && (w = tr(g), w.time = $e.time, w.width = g[c]), he(h ? v * s / d : v && s ? d / v * s : 0);
}, _t = function(e, t, r, n) {
  var s;
  return lo || Ds(), t in ct && t !== "transform" && (t = ct[t], ~t.indexOf(",") && (t = t.split(",")[0])), At[t] && t !== "transform" ? (s = _i(e, n), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : cn(je(e, Pe)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = un[t] && un[t](e, t, r) || je(e, t) || lu(e, t) || (t === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? Wt(e, t, s, r) + r : s;
}, Af = function(e, t, r, n) {
  if (!r || r === "none") {
    var s = Mr(t, e, 1), o = s && je(e, s, 1);
    o && o !== r ? (t = s, r = o) : t === "borderColor" && (r = je(e, "borderTopColor"));
  }
  var a = new Me(this._pt, e.style, t, 0, 1, Iu), l = 0, u = 0, c, d, h, f, v, g, w, m, b, x, _, C;
  if (a.b = r, a.e = n, r += "", n += "", n.substring(0, 6) === "var(--" && (n = je(e, n.substring(4, n.indexOf(")")))), n === "auto" && (g = e.style[t], e.style[t] = n, n = je(e, t) || n, g ? e.style[t] = g : Gt(e, t)), c = [r, n], Su(c), r = c[0], n = c[1], h = r.match(wr) || [], C = n.match(wr) || [], C.length) {
    for (; d = wr.exec(n); )
      w = d[0], b = n.substring(l, d.index), v ? v = (v + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (v = 1), w !== (g = h[u++] || "") && (f = parseFloat(g) || 0, _ = g.substr((f + "").length), w.charAt(1) === "=" && (w = kr(f, w) + _), m = parseFloat(w), x = w.substr((m + "").length), l = wr.lastIndex - x.length, x || (x = x || Ue.units[t] || _, l === n.length && (n += x, a.e += x)), _ !== x && (f = Wt(e, t, g, x) || 0), a._pt = {
        _next: a._pt,
        p: b || u === 1 ? b : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: m - f,
        m: v && v < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    a.r = t === "display" && n === "none" ? $u : qu;
  return iu.test(n) && (a.e = 0), this._pt = a, a;
}, Ta = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Sf = function(e) {
  var t = e.split(" "), r = t[0], n = t[1] || "50%";
  return (r === "top" || r === "bottom" || n === "left" || n === "right") && (e = r, r = n, n = e), t[0] = Ta[r] || r, t[1] = Ta[n] || n, t.join(" ");
}, Ef = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, n = r.style, s = t.u, o = r._gsap, a, l, u;
    if (s === "all" || s === !0)
      n.cssText = "", l = 1;
    else
      for (s = s.split(","), u = s.length; --u > -1; )
        a = s[u], At[a] && (l = 1, a = a === "transformOrigin" ? Pe : de), Gt(r, a);
    l && (Gt(r, de), o && (o.svg && r.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", _i(r, 1), o.uncache = 1, Vu(n)));
  }
}, un = {
  clearProps: function(e, t, r, n, s) {
    if (s.data !== "isFromStart") {
      var o = e._pt = new Me(e._pt, t, r, 0, 0, Ef);
      return o.u = n, o.pr = -10, o.tween = s, e._props.push(r), 1;
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
}, xi = [1, 0, 0, 1, 0, 0], Wu = {}, Yu = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, La = function(e) {
  var t = je(e, de);
  return Yu(t) ? xi : t.substr(7).match(ru).map(he);
}, po = function(e, t) {
  var r = e._gsap || tr(e), n = e.style, s = La(e), o, a, l, u;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? xi : s) : (s === xi && !e.offsetParent && e !== Dr && !r.svg && (l = n.display, n.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, a = e.nextElementSibling, Dr.appendChild(e)), s = La(e), l ? n.display = l : Gt(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Dr.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, As = function(e, t, r, n, s, o) {
  var a = e._gsap, l = s || po(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, f = l[0], v = l[1], g = l[2], w = l[3], m = l[4], b = l[5], x = t.split(" "), _ = parseFloat(x[0]) || 0, C = parseFloat(x[1]) || 0, A, k, y, D;
  r ? l !== xi && (k = f * w - v * g) && (y = _ * (w / k) + C * (-g / k) + (g * b - w * m) / k, D = _ * (-v / k) + C * (f / k) - (f * b - v * m) / k, _ = y, C = D) : (A = Hu(e), _ = A.x + (~x[0].indexOf("%") ? _ / 100 * A.width : _), C = A.y + (~(x[1] || x[0]).indexOf("%") ? C / 100 * A.height : C)), n || n !== !1 && a.smooth ? (m = _ - u, b = C - c, a.xOffset = d + (m * f + b * g) - m, a.yOffset = h + (m * v + b * w) - b) : a.xOffset = a.yOffset = 0, a.xOrigin = _, a.yOrigin = C, a.smooth = !!n, a.origin = t, a.originIsAbsolute = !!r, e.style[Pe] = "0px 0px", o && (It(o, a, "xOrigin", u, _), It(o, a, "yOrigin", c, C), It(o, a, "xOffset", d, a.xOffset), It(o, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", _ + " " + C);
}, _i = function(e, t) {
  var r = e._gsap || new Lu(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var n = e.style, s = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = je(e, Pe) || "0", c, d, h, f, v, g, w, m, b, x, _, C, A, k, y, D, E, L, T, F, N, O, q, R, S, B, P, V, U, H, pe, ge;
  return c = d = h = g = w = m = b = x = _ = 0, f = v = 1, r.svg = !!(e.getCTM && Gu(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[de] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[de] !== "none" ? l[de] : "")), n.scale = n.rotate = n.translate = "none"), k = po(e, r.svg), r.svg && (r.uncache ? (S = e.getBBox(), u = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px", R = "") : R = !t && e.getAttribute("data-svg-origin"), As(e, R || u, !!R || r.originIsAbsolute, r.smooth !== !1, k)), C = r.xOrigin || 0, A = r.yOrigin || 0, k !== xi && (L = k[0], T = k[1], F = k[2], N = k[3], c = O = k[4], d = q = k[5], k.length === 6 ? (f = Math.sqrt(L * L + T * T), v = Math.sqrt(N * N + F * F), g = L || T ? hr(T, L) * Jt : 0, b = F || N ? hr(F, N) * Jt + g : 0, b && (v *= Math.abs(Math.cos(b * Ar))), r.svg && (c -= C - (C * L + A * F), d -= A - (C * T + A * N))) : (ge = k[6], H = k[7], P = k[8], V = k[9], U = k[10], pe = k[11], c = k[12], d = k[13], h = k[14], y = hr(ge, U), w = y * Jt, y && (D = Math.cos(-y), E = Math.sin(-y), R = O * D + P * E, S = q * D + V * E, B = ge * D + U * E, P = O * -E + P * D, V = q * -E + V * D, U = ge * -E + U * D, pe = H * -E + pe * D, O = R, q = S, ge = B), y = hr(-F, U), m = y * Jt, y && (D = Math.cos(-y), E = Math.sin(-y), R = L * D - P * E, S = T * D - V * E, B = F * D - U * E, pe = N * E + pe * D, L = R, T = S, F = B), y = hr(T, L), g = y * Jt, y && (D = Math.cos(y), E = Math.sin(y), R = L * D + T * E, S = O * D + q * E, T = T * D - L * E, q = q * D - O * E, L = R, O = S), w && Math.abs(w) + Math.abs(g) > 359.9 && (w = g = 0, m = 180 - m), f = he(Math.sqrt(L * L + T * T + F * F)), v = he(Math.sqrt(q * q + ge * ge)), y = hr(O, q), b = Math.abs(y) > 2e-4 ? y * Jt : 0, _ = pe ? 1 / (pe < 0 ? -pe : pe) : 0), r.svg && (R = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Yu(je(e, de)), R && e.setAttribute("transform", R))), Math.abs(b) > 90 && Math.abs(b) < 270 && (s ? (f *= -1, b += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (v *= -1, b += b <= 0 ? 180 : -180)), t = t || r.uncache, r.x = c - ((r.xPercent = c && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = d - ((r.yPercent = d && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = he(f), r.scaleY = he(v), r.rotation = he(g) + a, r.rotationX = he(w) + a, r.rotationY = he(m) + a, r.skewX = b + a, r.skewY = x + a, r.transformPerspective = _ + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || !t && r.zOrigin || 0) && (n[Pe] = cn(u)), r.xOffset = r.yOffset = 0, r.force3D = Ue.force3D, r.renderTransform = r.svg ? Tf : Uu ? Ku : Bf, r.uncache = 0, r;
}, cn = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, jn = function(e, t, r) {
  var n = Ce(t);
  return he(parseFloat(t) + parseFloat(Wt(e, "x", r + "px", n))) + n;
}, Bf = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Ku(e, t);
}, Zt = "0deg", Yr = "0px", Xt = ") ", Ku = function(e, t) {
  var r = t || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.z, u = r.rotation, c = r.rotationY, d = r.rotationX, h = r.skewX, f = r.skewY, v = r.scaleX, g = r.scaleY, w = r.transformPerspective, m = r.force3D, b = r.target, x = r.zOrigin, _ = "", C = m === "auto" && e && e !== 1 || m === !0;
  if (x && (d !== Zt || c !== Zt)) {
    var A = parseFloat(c) * Ar, k = Math.sin(A), y = Math.cos(A), D;
    A = parseFloat(d) * Ar, D = Math.cos(A), o = jn(b, o, k * D * -x), a = jn(b, a, -Math.sin(A) * -x), l = jn(b, l, y * D * -x + x);
  }
  w !== Yr && (_ += "perspective(" + w + Xt), (n || s) && (_ += "translate(" + n + "%, " + s + "%) "), (C || o !== Yr || a !== Yr || l !== Yr) && (_ += l !== Yr || C ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Xt), u !== Zt && (_ += "rotate(" + u + Xt), c !== Zt && (_ += "rotateY(" + c + Xt), d !== Zt && (_ += "rotateX(" + d + Xt), (h !== Zt || f !== Zt) && (_ += "skew(" + h + ", " + f + Xt), (v !== 1 || g !== 1) && (_ += "scale(" + v + ", " + g + Xt), b.style[de] = _ || "translate(0, 0)";
}, Tf = function(e, t) {
  var r = t || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, d = r.scaleX, h = r.scaleY, f = r.target, v = r.xOrigin, g = r.yOrigin, w = r.xOffset, m = r.yOffset, b = r.forceCSS, x = parseFloat(o), _ = parseFloat(a), C, A, k, y, D;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= Ar, u *= Ar, C = Math.cos(l) * d, A = Math.sin(l) * d, k = Math.sin(l - u) * -h, y = Math.cos(l - u) * h, u && (c *= Ar, D = Math.tan(u - c), D = Math.sqrt(1 + D * D), k *= D, y *= D, c && (D = Math.tan(c), D = Math.sqrt(1 + D * D), C *= D, A *= D)), C = he(C), A = he(A), k = he(k), y = he(y)) : (C = d, y = h, A = k = 0), (x && !~(o + "").indexOf("px") || _ && !~(a + "").indexOf("px")) && (x = Wt(f, "x", o, "px"), _ = Wt(f, "y", a, "px")), (v || g || w || m) && (x = he(x + v - (v * C + g * k) + w), _ = he(_ + g - (v * A + g * y) + m)), (n || s) && (D = f.getBBox(), x = he(x + n / 100 * D.width), _ = he(_ + s / 100 * D.height)), D = "matrix(" + C + "," + A + "," + k + "," + y + "," + x + "," + _ + ")", f.setAttribute("transform", D), b && (f.style[de] = D);
}, Lf = function(e, t, r, n, s) {
  var o = 360, a = xe(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? Jt : 1), u = l - n, c = n + u + "deg", d, h;
  return a && (d = s.split("_")[1], d === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), d === "cw" && u < 0 ? u = (u + o * Da) % o - ~~(u / o) * o : d === "ccw" && u > 0 && (u = (u - o * Da) % o - ~~(u / o) * o)), e._pt = h = new Me(e._pt, t, r, n, u, ff), h.e = c, h.u = "deg", e._props.push(r), h;
}, Fa = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Ff = function(e, t, r) {
  var n = Fa({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, d, h, f, v;
  n.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[de] = t, a = _i(r, 1), Gt(r, de), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[de], o[de] = t, a = _i(r, 1), o[de] = u);
  for (l in At)
    u = n[l], c = a[l], u !== c && s.indexOf(l) < 0 && (f = Ce(u), v = Ce(c), d = f !== v ? Wt(r, l, u, v) : parseFloat(u), h = parseFloat(c), e._pt = new Me(e._pt, a, l, d, h - d, Cs), e._pt.u = v || 0, e._props.push(l));
  Fa(a, n);
};
Oe("padding,margin,Width,Radius", function(i, e) {
  var t = "Top", r = "Right", n = "Bottom", s = "Left", o = (e < 3 ? [t, r, n, s] : [t + s, t + r, n + r, n + s]).map(function(a) {
    return e < 2 ? i + a : "border" + a + i;
  });
  un[e > 1 ? "border" + i : i] = function(a, l, u, c, d) {
    var h, f;
    if (arguments.length < 4)
      return h = o.map(function(v) {
        return _t(a, v, u);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (c + "").split(" "), f = {}, o.forEach(function(v, g) {
      return f[v] = h[g] = h[g] || h[(g - 1) / 2 | 0];
    }), a.init(l, f, d);
  };
});
var Zu = {
  name: "css",
  register: Ds,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, n, s) {
    var o = this._props, a = e.style, l = r.vars.startAt, u, c, d, h, f, v, g, w, m, b, x, _, C, A, k, y, D;
    lo || Ds(), this.styles = this.styles || ju(e), y = this.styles.props, this.tween = r;
    for (g in t)
      if (g !== "autoRound" && (c = t[g], !(ze[g] && Fu(g, t, r, n, e, s)))) {
        if (f = typeof c, v = un[g], f === "function" && (c = c.call(r, n, e, s), f = typeof c), f === "string" && ~c.indexOf("random(") && (c = bi(c)), v)
          v(this, e, g, c, r) && (k = 1);
        else if (g.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(g) + "").trim(), c += "", qt.lastIndex = 0, qt.test(u) || (w = Ce(u), m = Ce(c), m ? w !== m && (u = Wt(e, g, u, m) + m) : w && (c += w)), this.add(a, "setProperty", u, c, n, s, 0, 0, g), o.push(g), y.push(g, 0, a[g]);
        else if (f !== "undefined") {
          if (l && g in l ? (u = typeof l[g] == "function" ? l[g].call(r, n, e, s) : l[g], xe(u) && ~u.indexOf("random(") && (u = bi(u)), Ce(u + "") || u === "auto" || (u += Ue.units[g] || Ce(_t(e, g)) || ""), (u + "").charAt(1) === "=" && (u = _t(e, g))) : u = _t(e, g), h = parseFloat(u), b = f === "string" && c.charAt(1) === "=" && c.substr(0, 2), b && (c = c.substr(2)), d = parseFloat(c), g in ct && (g === "autoAlpha" && (h === 1 && _t(e, "visibility") === "hidden" && d && (h = 0), y.push("visibility", 0, a.visibility), It(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), g !== "scale" && g !== "transform" && (g = ct[g], ~g.indexOf(",") && (g = g.split(",")[0]))), x = g in At, x) {
            if (this.styles.save(g), D = c, f === "string" && c.substring(0, 6) === "var(--") {
              if (c = je(e, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var E = e.style.perspective;
                e.style.perspective = c, c = je(e, "perspective"), E ? e.style.perspective = E : Gt(e, "perspective");
              }
              d = parseFloat(c);
            }
            if (_ || (C = e._gsap, C.renderTransform && !t.parseTransform || _i(e, t.parseTransform), A = t.smoothOrigin !== !1 && C.smooth, _ = this._pt = new Me(this._pt, a, de, 0, 1, C.renderTransform, C, 0, -1), _.dep = 1), g === "scale")
              this._pt = new Me(this._pt, C, "scaleY", C.scaleY, (b ? kr(C.scaleY, b + d) : d) - C.scaleY || 0, Cs), this._pt.u = 0, o.push("scaleY", g), g += "X";
            else if (g === "transformOrigin") {
              y.push(Pe, 0, a[Pe]), c = Sf(c), C.svg ? As(e, c, 0, A, 0, this) : (m = parseFloat(c.split(" ")[2]) || 0, m !== C.zOrigin && It(this, C, "zOrigin", C.zOrigin, m), It(this, a, g, cn(u), cn(c)));
              continue;
            } else if (g === "svgOrigin") {
              As(e, c, 1, A, 0, this);
              continue;
            } else if (g in Wu) {
              Lf(this, C, g, h, b ? kr(h, b + c) : c);
              continue;
            } else if (g === "smoothOrigin") {
              It(this, C, "smooth", C.smooth, c);
              continue;
            } else if (g === "force3D") {
              C[g] = c;
              continue;
            } else if (g === "transform") {
              Ff(this, c, e);
              continue;
            }
          } else
            g in a || (g = Mr(g) || g);
          if (x || (d || d === 0) && (h || h === 0) && !pf.test(c) && g in a)
            w = (u + "").substr((h + "").length), d || (d = 0), m = Ce(c) || (g in Ue.units ? Ue.units[g] : w), w !== m && (h = Wt(e, g, u, m)), this._pt = new Me(this._pt, x ? C : a, g, h, (b ? kr(h, b + d) : d) - h, !x && (m === "px" || g === "zIndex") && t.autoRound !== !1 ? mf : Cs), this._pt.u = m || 0, x && D !== c ? (this._pt.b = u, this._pt.e = D, this._pt.r = gf) : w !== m && m !== "%" && (this._pt.b = u, this._pt.r = hf);
          else if (g in a)
            Af.call(this, e, g, u, b ? b + c : c);
          else if (g in e)
            this.add(e, g, u || e[g], b ? b + c : c, n, s);
          else if (g !== "parseTransform") {
            Js(g, c);
            continue;
          }
          x || (g in a ? y.push(g, 0, a[g]) : typeof e[g] == "function" ? y.push(g, 2, e[g]()) : y.push(g, 1, u || e[g])), o.push(g);
        }
      }
    k && Ru(this);
  },
  render: function(e, t) {
    if (t.tween._time || !uo())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: _t,
  aliases: ct,
  getSetter: function(e, t, r) {
    var n = ct[t];
    return n && n.indexOf(",") < 0 && (t = n), t in At && t !== Pe && (e._gsap.x || _t(e, "x")) ? r && ka === r ? t === "scale" ? xf : wf : (ka = r || {}) && (t === "scale" ? _f : yf) : e.style && !Ks(e.style[t]) ? bf : ~t.indexOf("-") ? vf : oo(e, t);
  },
  core: {
    _removeProperty: Gt,
    _getMatrix: po
  }
};
Ie.utils.checkPrefix = Mr;
Ie.core.getStyleSaver = ju;
(function(i, e, t, r) {
  var n = Oe(i + "," + e + "," + t, function(s) {
    At[s] = 1;
  });
  Oe(e, function(s) {
    Ue.units[s] = "deg", Wu[s] = 1;
  }), ct[n[13]] = i + "," + e, Oe(r, function(s) {
    var o = s.split(":");
    ct[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i) {
  Ue.units[i] = "px";
});
Ie.registerPlugin(Zu);
var Q = Ie.registerPlugin(Zu) || Ie;
Q.core.Tween;
function Pr() {
  document.dispatchEvent(new Event("BmToggleModal"));
}
function Nf({ children: i }) {
  const e = Y(null), t = Y(null), r = () => {
    document.body.classList.toggle("bm-modal-active"), xt.value ? xt.value && (Q.to(e.current, {
      duration: 0.25,
      autoAlpha: 0
    }), window.innerWidth > 639 ? (Q.to(t.current, {
      duration: 0.25,
      autoAlpha: 0,
      transform: "scale(1)",
      onComplete: () => {
        xt.value = !1;
      }
    }), Q.set(document.body, { overflow: "auto" })) : (Q.to(t.current, {
      duration: 0.25,
      autoAlpha: 0,
      transform: "translateY(100%)",
      onComplete: () => {
        xt.value = !1;
      }
    }), Q.set(document.body, { overflow: "auto" }))) : (Q.to(e.current, {
      duration: 0.25,
      autoAlpha: 1
    }), window.innerWidth > 639 ? (Q.to(t.current, {
      duration: 0.25,
      autoAlpha: 1,
      transform: "scale(1)",
      onComplete: () => {
        xt.value = !0;
      }
    }), Q.set(document.body, { overflow: "hidden" })) : (Q.to(t.current, {
      duration: 0.25,
      autoAlpha: 1,
      transform: "translateY(0%)",
      onComplete: () => {
        xt.value = !0;
      }
    }), Q.set(document.body, { overflow: "hidden" })));
  };
  return j(() => {
    const n = document.getElementById("bm_selectBikeButton");
    return document.addEventListener("BmToggleModal", r), n == null || n.addEventListener("click", r), () => {
      document.removeEventListener("BmToggleModal", r), n == null || n.removeEventListener("click", r);
    };
  }, []), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: f2 }),
    /* @__PURE__ */ p(
      "div",
      {
        onClick: () => {
          Pr();
        },
        class: X(
          "overlay",
          "fixed cursor-pointer inset-0 z-[2147483645] bg-black/40 "
        ),
        ref: e
      }
    ),
    /* @__PURE__ */ p(
      "div",
      {
        className: X(
          "modal",
          "fixed pointer-events-none inset-0 mx-auto justify-end z-[2147483646] flex flex-col items-center outline-none ",
          "sm:justify-center"
        ),
        ref: t,
        children: /* @__PURE__ */ p("div", { className: "flex sm:px-2 pointer-events-auto max-sm:max-h-[96%] sm:max-h-[90%] max-sm:h-[89vh] max-w-lg sm:max-w-[640px] flex-col items-center max-sm:flex-1 w-full bg-white rounded-t-3xl sm:rounded-xl shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.06)]", children: [
          /* @__PURE__ */ p(
            "div",
            {
              className: "sm:hidden mx-auto mt-4 h-[6px] w-[100px] rounded-full bg-gray-400/50",
              onClick: Pr
            }
          ),
          /* @__PURE__ */ p("div", { className: "sm:hidden h-[10px]" }),
          /* @__PURE__ */ p("div", { className: "relative flex flex-col w-full sm:h-full max-sm:flex-none max-sm:grow", children: /* @__PURE__ */ p(
            "div",
            {
              class: "modal-content max-sm:absolute sm:h-full max-sm:inset-0 overflow-x-hidden overflow-y-auto  px-8 sm:px-6",
              children: i
            }
          ) })
        ] })
      }
    )
  ] });
}
const rt = (i) => /* @__PURE__ */ z("svg", { width: 7, height: 12, viewBox: "0 0 7 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M1 11L6 6L1 1", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Of = (i) => /* @__PURE__ */ z("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("circle", { cx: 15.5, cy: 15.5, r: 15.5, fill: "#030712" }), /* @__PURE__ */ z("path", { d: "M10.1974 17.1317L13.9955 20.4461L20.8639 10.8909", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Mf = (i) => /* @__PURE__ */ z("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("g", { clipPath: "url(#clip0_64_2)" }, /* @__PURE__ */ z("path", { d: "M30.5 15.5C30.5 23.7843 23.7843 30.5 15.5 30.5C7.21573 30.5 0.5 23.7843 0.5 15.5C0.5 7.21573 7.21573 0.5 15.5 0.5C23.7843 0.5 30.5 7.21573 30.5 15.5Z", fill: "white", stroke: "#D1D5DB" })), /* @__PURE__ */ z("path", { d: "M23.983 11.132C23.9699 10.9806 23.8699 10.8506 23.727 10.7988C23.5837 10.7466 23.4233 10.7822 23.3155 10.8894L21.1098 13.0866L18.6647 12.3153L17.8905 9.87937L20.0961 7.68201C20.2041 7.57458 20.2393 7.41475 20.1873 7.27224C20.1348 7.12945 20.0046 7.02999 19.8524 7.01688C18.5129 6.9019 17.2004 7.37836 16.2514 8.32387C14.9518 9.61873 14.6076 11.5096 15.217 13.1213C15.1504 13.1773 15.0847 13.2365 15.0199 13.3004L7.65736 20.2216C7.65476 20.2241 7.6522 20.2268 7.64939 20.2293C6.78354 21.092 6.78354 22.4955 7.64939 23.3583C8.51539 24.2209 9.91396 24.2104 10.7797 23.3477C10.7834 23.3443 10.7868 23.3408 10.7902 23.3369L17.677 15.945C17.7398 15.8822 17.798 15.8165 17.853 15.749C19.4713 16.3573 21.3705 16.0152 22.6713 14.7195C23.62 13.7739 24.0986 12.4663 23.983 11.132ZM9.67019 22.4264C9.35113 22.7442 8.83439 22.744 8.51536 22.4264C8.19644 22.1089 8.19644 21.5937 8.51536 21.2761C8.83439 20.9585 9.35113 20.9585 9.67019 21.2761C9.98911 21.5937 9.98911 22.1089 9.67019 22.4264Z", fill: "black" }), /* @__PURE__ */ z("defs", null, /* @__PURE__ */ z("clipPath", { id: "clip0_64_2" }, /* @__PURE__ */ z("rect", { width: 31, height: 31, fill: "white" })))), Pf = (i) => /* @__PURE__ */ z("svg", { width: 31, height: 31, viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M2 24.0437V22.6518C4.30404 21.9559 5.82929 20.347 6.17596 18.244C6.45967 16.523 5.87584 14.7802 4.66788 13.505L5.50401 12.1672C6.3441 12.2632 7.12499 12.2938 7.83019 12.2273C8.91308 12.1253 10.0603 11.7686 10.8965 10.814C11.7162 9.87828 11.9364 8.70751 11.9455 7.65019C11.9509 7.01984 11.882 6.33439 11.7615 5.60532L13.1089 4.93163C14.6862 6.27858 16.5967 7.00972 18.5085 6.50659C20.496 5.98355 21.7104 4.35171 22.2287 2.32023L23.4959 2.17943C23.7105 2.84427 23.9686 3.45839 24.2803 4.0055C24.8609 5.02453 25.7009 5.93317 26.8959 6.37534C28.1054 6.8229 29.35 6.6716 30.4872 6.21488C31.2478 5.9094 32.0092 5.4502 32.771 4.87155L33.84 5.40607C33.3102 7.17682 33.6407 8.97473 34.9205 10.3525C36.2854 11.8219 38.3837 12.4206 40.6053 12.1884L41.4091 13.3137C40.1484 14.904 39.5422 16.7943 40.0082 18.6621C40.4975 20.623 42.0098 21.9631 44 22.6091V23.6937C42.0295 24.646 40.407 25.9295 39.9934 27.9032C39.7449 29.089 40.0083 30.2272 40.4663 31.2395C40.7549 31.8775 41.1444 32.5183 41.6038 33.1622L41.0881 34.0648C39.1096 33.5569 37.1545 33.7409 35.7252 35.1442C34.3293 36.5148 34.0136 38.5186 34.2755 40.5318L32.7931 41.4583C31.191 40.0523 29.3504 39.2822 27.3831 40.0414C26.2841 40.4655 25.451 41.2846 24.816 42.1501C24.4114 42.7016 24.0463 43.3278 23.7127 44H22.6585C22.1786 42.2318 21.2165 40.6691 19.4091 40.0247C17.4936 39.3418 15.3888 40.0023 13.3765 41.2022L11.9877 40.5078C12.4255 38.6858 12.158 36.865 10.7918 35.5311C9.4171 34.1889 7.44044 33.8741 5.42929 34.2133L4.6584 32.9799C6.03869 31.6871 6.93069 30.0087 6.40539 28.071C6.07607 26.8563 5.24467 25.9088 4.25062 25.2068C3.60737 24.7526 2.85005 24.3664 2 24.0437Z", stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ z("circle", { cx: 23, cy: 23, r: 12, stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ z("path", { d: "M23 39.75C32.2508 39.75 39.75 32.2508 39.75 23C39.75 13.7492 32.2508 6.25 23 6.25C13.7492 6.25 6.25 13.7492 6.25 23C6.25 32.2508 13.7492 39.75 23 39.75Z", stroke: "black", strokeWidth: 3.5 })), If = `.shared-icon{background-color:#fba157;padding:5px 10px;border-radius:8px;font-size:12px;display:flex;justify-content:center;align-items:center;color:#fff}
`, Na = ({ text: i }) => /* @__PURE__ */ p($, { children: [
  /* @__PURE__ */ p("style", { type: "text/css", children: If }),
  /* @__PURE__ */ p("div", { className: "shared-icon", children: /* @__PURE__ */ p("p", { className: "text", children: i || "Shared with you" }) })
] });
function it({
  spanner: i,
  selected: e,
  settings: t,
  simple: r,
  bike: n,
  compact: s,
  readOnly: o,
  onClick: a,
  shared: l,
  custom: u,
  noSymbol: c,
  ...d
}) {
  var A;
  const h = (A = n.images) != null && A.length ? n.images : [Be("bike.png")], f = Y(null), [v, g] = M(0), w = Y(null);
  j(() => {
    const k = f == null ? void 0 : f.current;
    if (k) {
      var y = new IntersectionObserver(
        function(D) {
          var E = D.reduce(function(L, T) {
            return T.intersectionRatio > L.intersectionRatio ? T : L;
          });
          E.intersectionRatio > 0 && g(Number(E.target.getAttribute("data-slide")));
        },
        {
          root: k,
          threshold: 0.8
        }
      );
      return k.querySelectorAll("&>div").forEach((D) => {
        y.observe(D);
      }), () => {
        y.disconnect();
      };
    }
  }, [f]);
  function m(k) {
    if (!f.current)
      return;
    const y = f.current.querySelectorAll("&>div")[k];
    f.current.scrollLeft = y.clientWidth * k;
  }
  function b() {
    v != 0 && m(v - 1);
  }
  function x() {
    v != h.length - 1 && m(v + 1);
  }
  const _ = (h == null ? void 0 : h.length) && v !== h.length - 1, C = (h == null ? void 0 : h.length) && v !== 0;
  return /* @__PURE__ */ p(
    "div",
    {
      class: X(
        "rounded-xl select-none border  py-4 relative",
        e ? "border-gray-950" : "border-gray-300"
      ),
      ...d,
      onClick: (k) => {
        if (w.current && !w.current.contains(k.target))
          a(k);
        else {
          k.preventDefault();
          return;
        }
      },
      children: [
        !r && /* @__PURE__ */ p(
          "p",
          {
            class: "text-gray-950 px-4 text-base font-normal font-nunito leading-tight ",
            children: s ? /* @__PURE__ */ p($, { children: o ? `${n.bike_Brand} ${n.year} ${n.spec}` : n.name && n.isCustom ? n.name : `${n.brand} ${n.year} ${n.bikeSpec} ${n.variant ? n.variant : ""}` }) : /* @__PURE__ */ p($, { children: o ? n.bike_Name : n.name })
          }
        ),
        /* @__PURE__ */ p("div", { class: "relative mt-2", children: [
          /* @__PURE__ */ p(
            "div",
            {
              ref: f,
              class: X(
                "flex scroll-smooth snap-mandatory  no-scrollbar h-32 snap-x space-x-2 relative overflow-x-auto",
                "px-4"
              ),
              "data-active-slide": v,
              children: [
                !o && h.length && h.map((k, y) => /* @__PURE__ */ p(
                  "div",
                  {
                    "data-slide": y,
                    class: "w-full h-full snap-center flex items-center flex-none",
                    children: /* @__PURE__ */ p(
                      "img",
                      {
                        class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
                        src: k,
                        alt: k
                      }
                    )
                  },
                  y
                )),
                o && /* @__PURE__ */ p(
                  "div",
                  {
                    class: "w-full h-full snap-center flex items-center flex-none",
                    children: /* @__PURE__ */ p(
                      "img",
                      {
                        class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
                        src: `https://imagestore.bikematrix.io/${n.bike_Reference}/400-${n.bike_Thumbnail}`,
                        alt: n.bike_Reference
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ p($, { children: [
            /* @__PURE__ */ p(
              "div",
              {
                onClick: b,
                class: X(
                  "border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center left-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300",
                  C ? "" : "hidden"
                ),
                children: /* @__PURE__ */ p(rt, { class: "h-3 text-gray-500 -rotate-180" })
              }
            ),
            /* @__PURE__ */ p(
              "div",
              {
                onClick: x,
                class: X(
                  "border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center right-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300",
                  _ ? "" : "hidden"
                ),
                children: /* @__PURE__ */ p(rt, { class: "h-3 text-gray-500 translate-x-px" })
              }
            )
          ] })
        ] }),
        (h == null ? void 0 : h.length) > 1 && /* @__PURE__ */ p("div", { class: "space-x-2 flex items-center justify-center", children: h.map((k, y) => /* @__PURE__ */ p(
          "div",
          {
            class: X(
              "rounded-xl w-2 h-2 transition-all duration-300",
              y == v ? " bg-gray-950 scale-125" : " bg-gray-200"
            )
          },
          y
        )) }),
        (l || n.isShared) && /* @__PURE__ */ p("div", { className: "absolute left-4 bottom-4", children: /* @__PURE__ */ p(Na, {}) }),
        (u || n.isCustom) && /* @__PURE__ */ p("div", { className: "absolute left-4 bottom-4", children: /* @__PURE__ */ p(Na, { text: "Custom" }) }),
        /* @__PURE__ */ p(
          "div",
          {
            className: "spanner_wrapper absolute right-4 bottom-14 h-fit w-fit",
            ref: w,
            children: i && e && /* @__PURE__ */ p(
              Mf,
              {
                class: "cursor-pointer",
                onClick: (k) => {
                  k.preventDefault(), !(n != null && n.isCustom) && !(n != null && n.isShared) ? te("/workshop") : n != null && n.isShared ? te("/read-only") : te("/bom");
                }
              }
            )
          }
        ),
        e && !t ? /* @__PURE__ */ p(Of, { class: "absolute right-4 bottom-4 cursor-pointer" }) : t ? /* @__PURE__ */ p(
          Pf,
          {
            class: "absolute right-4 bottom-4 cursor-pointer",
            onClick: () => te("/settings")
          }
        ) : o ? /* @__PURE__ */ p("span", {}) : c ? /* @__PURE__ */ p("span", {}) : /* @__PURE__ */ p($, { children: /* @__PURE__ */ p(
          "span",
          {
            class: "border absolute right-4 bottom-4 rounded-full h-8 w-8 border-gray-300 bg-white/75"
          }
        ) })
      ]
    }
  );
}
function Oa(i, e) {
  const t = () => {
    try {
      const s = window.localStorage.getItem(i);
      return s ? JSON.parse(s) : e;
    } catch (s) {
      return console.error(s), e;
    }
  }, [r, n] = M(t);
  return j(() => {
    try {
      if (!r && i === "bm_currentBike")
        window.localStorage.setItem(i, null);
      else if (!r)
        window.localStorage.removeItem(i);
      else {
        const s = JSON.stringify(r);
        window.localStorage.setItem(i, s);
      }
    } catch (s) {
      console.error(s);
    }
  }, [i, r]), [r, n, t];
}
function Rf(i, e) {
  const t = () => {
    try {
      const s = window.sessionStorage.getItem(i);
      return s ? JSON.parse(s) : e;
    } catch (s) {
      return console.error(s), e;
    }
  }, [r, n] = M(t);
  return j(() => {
    try {
      if (!r)
        window.sessionStorage.removeItem(i);
      else {
        const s = JSON.stringify(r);
        window.sessionStorage.setItem(i, s);
      }
    } catch (s) {
      console.error(s);
    }
  }, [i, r]), [r, n, t];
}
const Un = {
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
}, Xu = ki(void 0), zf = ({ children: i }) => {
  var R;
  const e = window.BikeMatrix.getConfig(), [t, r] = Oa(
    Gs,
    null
  ), [n, s] = Oa("bm_lounge", []), o = new Se(
    e.apiUrl,
    e.apiKey,
    e.apiToken,
    e.isShopify
  ), [a, l] = M(Un), u = Y({}), [c, d] = M([]), [h, f] = M(!1), [v, g] = M(null);
  M(null), j(() => {
    (async () => {
      if (t != null && t.brandId) {
        const B = await Gl(t == null ? void 0 : t.brandId);
        g(B);
      }
    })();
  }, [t == null ? void 0 : t.brandId]);
  function w(S) {
    l((B) => {
      var P;
      return {
        ...B,
        [S]: { options: [], value: (P = Un[S]) == null ? void 0 : P.value }
      };
    });
  }
  function m(S, B) {
    l((P) => (P[S].value = B, { ...P }));
  }
  const b = () => {
    l((S) => {
      var B;
      return {
        ...Un,
        brand: {
          options: ((B = S.brand) == null ? void 0 : B.options) || [],
          error: S.brand.error || null
        }
      };
    });
  }, x = (S) => {
    r({ ...S }), s([
      ...(n || []).filter((B) => !!B.key && B.key !== S.key),
      S
    ]);
  }, _ = (S) => {
    (t == null ? void 0 : t.key) === S && r(null), s([...(n || []).filter((B) => !!B.key && B.key !== S)]);
  }, C = () => {
    e.logLevel === "verbose" && console.log("Dispatch BikeChanging (pre-change)..."), document.dispatchEvent(
      new Event("BikeChanging", { bubbles: !0, composed: !0 })
    );
  }, A = () => {
    setTimeout(() => {
      b(), te("/");
    }, 500);
  }, k = async () => {
    const S = await o.getBikeBrands();
    S.success ? (sessionStorage.setItem("bm_brands", JSON.stringify(S.data)), l((B) => (B.brand.options = S.data.map((P) => ({
      label: P.bike_Brand,
      value: P.bike_Brand_ID
    })), { ...B }))) : S.success || (l((B) => (B.brand.error = S.error, { ...B })), e.logLevel === "verbose" && console.error(S.logError));
  }, y = async () => {
    const S = await o.getBikeModels(a.brand.value);
    S.success ? l((B) => (B.model.options = S.data.map((P) => ({
      label: P.model_Family,
      value: P.model_Family_ID
    })), { ...B })) : S.success || (l((B) => (B.model.error = S.error, { ...B })), e.logLevel === "verbose" && console.error(S.logError));
  }, D = async () => {
    const S = await o.getBikeFrameSeries(a.model.value);
    S.success ? l((B) => {
      var V, U;
      const P = [];
      return B.frameSeries.options = S.data.reduce((H, pe) => {
        const ge = {
          label: pe.model_Spec,
          value: pe.model_Spec_ID
        };
        return P.includes(ge.value) || (P.push(ge.value), H.push(ge)), H;
      }, []), ((V = B.frameSeries.options) == null ? void 0 : V.length) === 1 && (B.frameSeries.value = (U = B.frameSeries.options[0]) == null ? void 0 : U.value), { ...B };
    }) : S.success || (l((B) => (B.frameSeries.error = S.error, { ...B })), e.logLevel === "verbose" && console.error(S.logError));
  }, E = async () => {
    const S = await o.getBikeSpecs(a.frameSeries.value);
    if (S.success) {
      const B = [], P = [], V = [], U = [];
      S.data.forEach((H) => {
        var ht, be;
        const pe = H.year + "-" + H.spec.replace(/[^0-9a-zA-Z]/g, "") + (H.bike_Variant ? "-" + H.bike_Variant.replace(/[^0-9a-zA-Z]/g, "") : ""), ge = {
          label: H.spec,
          value: H.spec
        };
        if (B.includes(ge.value) || (B.push(ge.value), V.push(ge)), !P.includes(pe)) {
          P.push(pe);
          const Kt = {
            _key: pe,
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
            images: [H.bike_Thumbnail, ...((ht = H == null ? void 0 : H.bike_Images) == null ? void 0 : ht.split(",")) || []].filter((Je) => !!Je).map(
              (Je) => `https://imagestore.bikematrix.io/${H.bike_Reference}/400-${Je}`
            )
          }, Bt = S.data.reduce((Je, Fe) => (Fe.year == H.year && Fe.spec === H.spec && Fe.model_Spec === H.model_Spec && Fe.bike_Variant === H.bike_Variant && Je.push({
            key: Fe.bike_Key,
            name: Fe.bike_Name,
            variant: Fe.bike_Variant,
            sizeId: Fe.bike_Size_ID,
            size: Fe.bike_Size
          }), Je), []);
          (be = Bt == null ? void 0 : Bt.filter((Je) => !!Je.sizeId)) != null && be.length && (Kt.sizes = Bt), U.push(Kt);
        }
        u.current[a.frameSeries.value] = Array.from(
          /* @__PURE__ */ new Set([
            ...u.current[a.frameSeries.value] || [],
            H.year
          ])
        );
      }), l((H) => (H.bikeSpec.options = V, { ...H })), d(U);
    } else
      S.success || (l((B) => (B.bikeSpec.error = S.error, { ...B })), e.logLevel === "verbose" && console.error(S.logError));
  }, L = async () => {
    l((S) => {
      const B = u.current[S.frameSeries.value] || [];
      return S.year.options = B.map((P) => ({
        label: P,
        value: P
      })), { ...S };
    });
  }, T = async () => {
    l((S) => {
      var B, P, V;
      if (S.frameSize.options = (B = a == null ? void 0 : a.value) != null && B.sizes ? a.value.sizes.filter((U) => !!U.size).map((U) => ({
        label: U.size,
        value: U.size
      })) : [], ((P = S.frameSize.options) == null ? void 0 : P.length) === 1) {
        const U = (V = S.frameSize.options[0]) == null ? void 0 : V.value;
        S.frameSize.value = U, S.value.frameSize = U;
      }
      return { ...S };
    });
  };
  j(() => (document.addEventListener("BmToggleModal", A), () => {
    document.removeEventListener("BmToggleModal", A);
  }), []);
  const [F, N] = Rf(
    "bm_diagnostics",
    []
  ), O = () => {
    const B = new URLSearchParams(window.location.search).get("diagnostics");
    JSON.parse(
      sessionStorage.getItem("bm_diagnostics")
    ).includes(B) || N([...F, B]), B === null && N([]);
  };
  j(() => {
    C(), O();
  }, [t]), j(() => {
    sessionStorage.getItem("bm_brands") ? l((S) => (S.brand.options = JSON.parse(
      sessionStorage.getItem("bm_brands")
    ).map((B) => ({
      label: B.bike_Brand,
      value: B.bike_Brand_ID
    })), { ...S })) : xt.value && k();
  }, [xt.value]), j(() => {
    a.brand.value && (w("model"), w("frameSeries"), y());
  }, [a.brand.value]), j(() => {
    a.model.value && (w("frameSeries"), D());
  }, [a.model.value]), j(() => {
    a.frameSeries.value && (w("bikeSpec"), w("year"), d([]), E().then(() => {
      L();
    }));
  }, [a.frameSeries.value]), j(() => {
    a.value._key && (w("frameSize"), T());
  }, [(R = a.value) == null ? void 0 : R._key]), j(() => {
    a.frameSize.value && l((S) => {
      var B, P;
      return S.value = {
        ...S.value,
        ...((P = (B = S == null ? void 0 : S.value) == null ? void 0 : B.sizes) == null ? void 0 : P.find(
          (V) => a.frameSize.value == V.size
        )) || {}
      }, delete S.value.sizes, S;
    });
  }, [a.frameSize.value]);
  const q = {
    // Wizard Bike
    bike: a,
    setBike: l,
    setBikeAttr: m,
    resetBike: b,
    // Search Results
    results: c,
    loading: h,
    setLoading: f,
    // Compatible Parts
    compatibleCollections: v,
    // Final Bike
    currentBike: t,
    setCurrentBike: r,
    removeBike: _,
    saveBike: x,
    // Bike Lounge
    lounge: n
  };
  return /* @__PURE__ */ p(Xu.Provider, { value: q, children: i });
}, Re = () => {
  const i = Di(Xu);
  if (!i)
    throw new Error("useBikeState must be used within a BikeProvider");
  return i;
};
function Et() {
  const { t: i } = ee(), t = window.BikeMatrix.getConfig(), [r, n] = M(null);
  return t.internalLink && n(t.internalLink), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p(
      "p",
      {
        class: "text-gray-600 max-w-sm mx-auto mt-4 text-center font-normal text-xs",
        children: i("bikeselector_home_footer_message")
      }
    ),
    /* @__PURE__ */ p(
      "a",
      {
        href: r || "https://bikematrix.io/landed-it",
        target: "_blank",
        class: "text-gray-950 block  underline  mb-4 font-bold mt-4 text-center text-xs",
        children: i("bikematrix_poweredby")
      }
    )
  ] });
}
const qf = (i) => /* @__PURE__ */ z("svg", { width: 17, height: 17, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M16.983 4.13197C16.9699 3.98064 16.8699 3.85064 16.727 3.7988C16.5837 3.74665 16.4233 3.78215 16.3155 3.88937L14.1098 6.08655L11.6647 5.31527L10.8905 2.87937L13.0961 0.682011C13.2041 0.574581 13.2393 0.414746 13.1873 0.272238C13.1348 0.129446 13.0046 0.0299881 12.8524 0.0168782C11.5129 -0.0980992 10.2004 0.378357 9.25142 1.32387C7.95176 2.61873 7.60759 4.50961 8.21705 6.12135C8.15043 6.17726 8.08471 6.2365 8.01987 6.30039L0.65736 13.2216C0.654763 13.2241 0.652203 13.2268 0.649393 13.2293C-0.216464 14.092 -0.216464 15.4955 0.649393 16.3583C1.51539 17.2209 2.91396 17.2104 3.77967 16.3477C3.78341 16.3443 3.78682 16.3408 3.79024 16.3369L10.677 8.94505C10.7398 8.88222 10.798 8.8165 10.853 8.74903C12.4713 9.3573 14.3705 9.01524 15.6713 7.71952C16.62 6.77394 17.0986 5.46628 16.983 4.13197ZM2.67019 15.4264C2.35113 15.7442 1.83439 15.744 1.51536 15.4264C1.19644 15.1089 1.19644 14.5937 1.51536 14.2761C1.83439 13.9585 2.35113 13.9585 2.67019 14.2761C2.98911 14.5937 2.98911 15.1089 2.67019 15.4264Z", fill: "black" })), I = {
  id: null,
  name: null,
  product_category_id: null,
  swap: !1,
  version_id: null,
  unsaved_changes: null,
  translation: null
}, Kr = {
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
    stem: I,
    handlebar: I,
    seat_Post: I,
    seat_Post_Clamp: I,
    dropper_Lever: I,
    lockout_Lever: I,
    grips: I,
    pedals: I,
    saddle: I
  },
  "frame_&_fork": {
    fork: I,
    rear_Shock: I,
    headseat: I
  },
  drivetrain: {
    chainguide: I,
    bottom_Bracket: I,
    crankset: I,
    largest_Chainring: I,
    second_Largest_Chainring: I,
    third_Largest_Chainring: I,
    chainring_Spider: I,
    chain: I,
    cassette: I,
    rear_Derailleur: I,
    front_Derailleur: I,
    shifter_RH: I,
    shifter_LH: I,
    shift_Brake_Combo_RH: I,
    shift_Brake_Combo_LH: I,
    shifter_Adapter_RH: I,
    shifter_Adapter_LH: I
  },
  brakes: {
    brake_Caliper_Front: I,
    brake_Caliper_Rear: I,
    brake_Lever_RH: I,
    brake_Lever_LH: I,
    brake_Pads_Front: I,
    brake_Pads_Rear: I,
    brake_Rotor_Front: I,
    brake_Rotor_Rear: I,
    brake_Adapter_Front: I,
    brake_Adapter_Rear: I
  },
  "wheels_&_tyres": {
    front_Wheel: I,
    front_Axle: I,
    rear_Wheel: I,
    rear_Axle: I,
    tyre_Front: I,
    tyre_Rear: I
  },
  is_E_Bike: null,
  eMotor_System_ID: null,
  eBattery_ID: null,
  eControl_Unit_ID: null,
  eCharger_ID: null,
  eInterconnects_ID: null
}, Zr = {
  cockpit: {
    stem: I,
    handlebar: I,
    seat_Post: I,
    seat_Post_Clamp: I,
    dropper_Lever: I,
    lockout_Lever: I,
    grips: I,
    pedals: I,
    saddle: I
  },
  "frame_&_fork": {
    headset: I,
    fork: I,
    rear_Shock: I
  },
  drivetrain: {
    chainguide: I,
    bottom_Bracket: I,
    crankset: I,
    largest_Chainring: I,
    second_Largest_Chainring: I,
    third_Largest_Chainring: I,
    chainring_Spider: I,
    chain: I,
    cassette: I,
    rear_Derailleur: I,
    front_Derailleur: I,
    shifter_RH: I,
    shifter_LH: I,
    shift_Brake_Combo_RH: I,
    shift_Brake_Combo_LH: I,
    shifter_Adapter_RH: I,
    shifter_Adapter_LH: I
  },
  brakes: {
    brake_Caliper_Front: I,
    brake_Caliper_Rear: I,
    brake_Lever_RH: I,
    brake_Lever_LH: I,
    brake_Pads_Front: I,
    brake_Pads_Rear: I,
    brake_Rotor_Front: I,
    brake_Rotor_Rear: I,
    brake_Adapter_Front: I,
    brake_Adapter_Rear: I
  },
  "wheels_&_tyres": {
    front_Wheel: I,
    front_Axle: I,
    rear_Wheel: I,
    rear_Axle: I,
    tyre_Front: I,
    tyre_Rear: I
  }
}, mt = {
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
}, Hn = (i, e) => Object.keys(i).includes(e), Ir = (i) => (Object.keys(mt).forEach((e) => {
  Object.keys(i).forEach((t) => {
    `${e}_ID` === t && (mt[e].id = i[t]), `${e}_Name` === t && (mt[e].name = i[t]), `${e}_Product_Category_ID` === t && (mt[e].product_category_id = i[t]), `${e}_Swap` === t && (mt[e].swap = i[t]), `${e}_Version_ID` === t && (mt[e].version_id = i[t]), `${e}_Unsaved_Changes` === t && (mt[e].unsaved_changes = i[t]);
  });
}), Object.keys(Zr).forEach((e) => {
  Object.keys(mt).forEach((t) => {
    Hn(Zr[e], t) && (Zr[e][t] = mt[t]);
  });
}), Object.keys(Zr).forEach((e) => {
  Hn(Kr, e) && (Kr[e] = Zr[e]);
}), Object.keys(i).forEach((e) => {
  Hn(Kr, e) && (Kr[e] = i[e]);
}), Kr), Ju = async (i) => {
  var t;
  return {
    bikeSpec: i.spec,
    brand: i.bike_Brand,
    brandId: i.bike_Brand_ID,
    frameSeries: i.spec,
    frameSeriesId: i.model_Spec_ID,
    frameSize: i.bike_Size,
    images: [
      `https://imagestore.bikematrix.io/${i.bike_Reference}/400-${i.bike_Thumbnail}`
    ],
    isCustom: i.bike_Type === "Custom_Bike",
    isShared: i.bike_Type === "Shared_Bike",
    key: i.bike_Type === "Shared_Bike" ? i.share_Bike_Key : i.bike_Key,
    model: i.model_Family,
    modelId: i.model_Family_ID,
    name: i.bike_Name,
    size: i.bike_Size,
    sizeId: i.bike_Size_ID,
    variant: i.bike_Variant,
    year: i.year,
    _key: `${i.year}-${(t = i.spec) == null ? void 0 : t.replace(" ", "")}`
  };
};
function $f() {
  const i = window.BikeMatrix.getConfig(), {
    bike: e,
    currentBike: t,
    setCurrentBike: r,
    lounge: n,
    removeBike: s,
    resetBike: o,
    saveBike: a
  } = Re(), { t: l } = ee(), { apiUrl: u, apiKey: c, apiToken: d, isShopify: h, virtualWorkshop: f } = window.BikeMatrix.getConfig();
  j(() => {
    ke.value = null;
  }, []);
  const v = new Se(u, c, d, h), g = async () => {
    const b = new URLSearchParams(window.location.search).get("bikematrixid"), x = sessionStorage.getItem("bm_passed_id");
    if (!(x && x !== null && b === x) && (!x || b !== x)) {
      const _ = n.find((C) => C.key === b);
      _ ? (r(_), sessionStorage.setItem("bm_passed_id", b)) : _ || (await w(b), sessionStorage.setItem("bm_passed_id", b));
    }
  }, w = async (m) => {
    const b = await v.getBikeBom(m);
    if (!(b != null && b.success)) {
      i.logLevel === "verbose" && console.error(b.logError);
      return;
    }
    const x = Ir(b.data);
    e.value = await Ju(x), a(e.value), r(e.value);
  };
  return g(), j(() => {
    n.map((m) => {
      m != null && m.isCustom && (_n.value = !1);
    });
  }, [n]), /* @__PURE__ */ p($, { children: [
    n != null && n.length ? n == null ? void 0 : n.filter((m) => !!m._key).map((m) => /* @__PURE__ */ p("div", { class: "mb-4 relative", children: [
      /* @__PURE__ */ p("p", { className: "opacity-0 absolute", children: m.key }),
      /* @__PURE__ */ p(
        "div",
        {
          onClick: () => s(m.key),
          class: "w-7 h-7 z-10 -right-2 -top-2 flex items-center justify-center absolute bg-gray-200 text-gray-800 rounded-full",
          children: /* @__PURE__ */ p(hi, { class: "h-3 w-3" })
        }
      ),
      /* @__PURE__ */ p(
        it,
        {
          compact: !0,
          onClick: (b) => {
            b.preventDefault(), r((t == null ? void 0 : t.key) === (m == null ? void 0 : m.key) ? null : { ...m });
          },
          bike: m,
          selected: (t == null ? void 0 : t.key) === (m == null ? void 0 : m.key),
          spanner: f,
          custom: m == null ? void 0 : m.isCustom
        }
      )
    ] }, m.key)) : /* @__PURE__ */ p("div", { class: X("relative mb-4 z-10 "), children: [
      /* @__PURE__ */ p(
        "div",
        {
          class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
          children: [
            /* @__PURE__ */ p("span", { class: "block rounded-lg h-6 w-1/2 bg-gray-200" }),
            /* @__PURE__ */ p(
              "img",
              {
                class: "w-auto mx-auto h-auto max-h-36 opacity-30",
                src: Be("bike.png")
              }
            ),
            /* @__PURE__ */ p(
              "span",
              {
                class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ p(
        "div",
        {
          class: X(
            "w-full relative bg-white border -z-10 border-b-0 border-gray-300 rounded-t-xl h-20  mb-4",
            "after:bottom-0 after:-inset-x-px after:-top-6 after:bg-gradient-to-t after:absolute after:from-white after:to-transparent"
          ),
          children: [
            /* @__PURE__ */ p(
              "span",
              {
                class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
              }
            ),
            /* @__PURE__ */ p(
              "span",
              {
                class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ p(
        "div",
        {
          class: " text-gray-800 text-center flex -mt-5 z-20 justify-center",
          children: [
            l("bikeselector_home_empty"),
            /* @__PURE__ */ p("br", {}),
            l("bikeselector_home_add_a_bike")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ p(
      "button",
      {
        onClick: (m) => {
          m.preventDefault(), o(), te("/add");
        },
        class: X(
          "duration-300 transition-colors sticky bottom-[128px] mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center",
          n.length && !(t != null && t.key) ? "bg-gray-950 text-white" : n.length ? "bg-gray-200 text-gray-800" : "bg-gray-950 text-white",
          !t && "bottom-0",
          t && f && "bottom-[128px]",
          t && !f && "bottom-[72px]"
        ),
        children: [
          l("bikeselector_home_add_btn"),
          /* @__PURE__ */ p(hi, { class: "h-3 absolute [&>path]:stroke-[2px] right-5 justify-self-end rotate-45" })
        ]
      }
    ),
    !!(n != null && n.length) && !!(t != null && t.key) && f && /* @__PURE__ */ p(
      "button",
      {
        onClick: (m) => {
          m.preventDefault(), !(t != null && t.isCustom) && !(t != null && t.isShared) ? te("/workshop") : t != null && t.isCustom && !(t != null && t.isShared) ? te("/bom") : !(t != null && t.isCustom) && (t != null && t.isShared) && te("/read-only");
        },
        class: X(
          "duration-300 sticky bottom-[72px] transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center",
          "bg-gray-200 text-gray-800"
        ),
        children: [
          l("virtualworkshop_title"),
          /* @__PURE__ */ p(qf, { class: "h-5 absolute right-5 justify-self-end" })
        ]
      }
    ),
    !!(n != null && n.length) && !!(t != null && t.key) && /* @__PURE__ */ p(
      "button",
      {
        onClick: (m) => {
          m.preventDefault(), !i.showBrowseCategoryButtons && i.browseCompatibilityUrl ? window.location.href = i.browseCompatibilityUrl : te("/browse");
        },
        class: X(
          "duration-300 sticky bottom-4 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center",
          n.length ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-800"
        ),
        children: l("bikeselector_home_browse_btn")
      }
    ),
    /* @__PURE__ */ p(Et, {})
  ] });
}
const Vf = (i) => /* @__PURE__ */ z("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("circle", { cx: 10, cy: 10, r: 10, fill: "#030712" }), /* @__PURE__ */ z("path", { d: "M6.57886 11.0526L9.02922 13.191L13.4604 7.02636", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), nt = ({
  messages: i,
  left: e,
  margin: t
}) => {
  const { t: r } = ee(), [n, s] = M(""), [o, a] = M("");
  return j(() => {
    i && i.indexOf(" ") >= 0 && (s(i.split(" ")[0]), a(i.split(" ")[1]));
  }, [i]), /* @__PURE__ */ p(
    "div",
    {
      className: `flex h-4 w-auto ${e ? "justify-start" : "justify-center"} ${t ? "mt-1" : ""}`,
      children: i && /* @__PURE__ */ p("p", { className: "message text-xs text-red-500", children: r(n || i, { endpoint_location: o }) })
    }
  );
};
function ci({
  type: i,
  title: e,
  placeholder: t,
  options: r = [],
  disabled: n = void 0,
  loading: s = !1,
  infoVisible: o = !1,
  children: a = void 0,
  error: l = null,
  ...u
}) {
  const { t: c } = ee(), d = (f) => {
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
  }, h = (f, v) => f === "framesize" && v === "One Size" ? c("bikeselector_size_framesize_one_size") : v;
  return /* @__PURE__ */ p($, { children: /* @__PURE__ */ p("div", { class: "w-full flex flex-col space-y-2", children: [
    /* @__PURE__ */ p("label", { class: "text-gray-800 font-bold text", children: e }),
    a && /* @__PURE__ */ p(
      "div",
      {
        class: X(
          "!my-0 overflow-hidden box-border transition-all duration-300",
          o ? "max-h-screen" : "h-0"
        ),
        children: [
          /* @__PURE__ */ p("p", { class: "text-gray-600 my-1 italic text-sm", children: d(i) }),
          /* @__PURE__ */ p(
            "div",
            {
              class: X(
                "rounded-xl overflow-hidden my-0 relative py-1 h-32 bg-gray-100 w-full"
              ),
              children: a
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ p("div", { class: "w-full flex items-center relative", children: [
      /* @__PURE__ */ p(
        "select",
        {
          class: X(
            "rounded-xl peer !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg bg-white placeholder:text-gray-700 text-gray-700",
            "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400",
            u.class
          ),
          disabled: n,
          ...u,
          children: [
            /* @__PURE__ */ p("option", { value: "", selected: !u.value, disabled: !0, children: t }),
            r.map((f) => /* @__PURE__ */ p("option", { value: f.value, disabled: f.disabled, children: h(i, f.label) }))
          ]
        }
      ),
      s ? /* @__PURE__ */ p("span", { class: "absolute block loader animate-spin right-4 w-5 h-5" }) : u.value && typeof n == "boolean" ? /* @__PURE__ */ p(Vf, { class: "right-3 absolute w-5 pointer-events-none" }) : /* @__PURE__ */ p(rt, { class: "absolute h-3 text-gray-700 pointer-events-none rotate-90 right-5 peer-disabled:text-gray-400" })
    ] }),
    l && /* @__PURE__ */ p(nt, { messages: l, left: !0, margin: 5 })
  ] }) });
}
const Qu = (i) => /* @__PURE__ */ z("svg", { width: 25, height: 25, viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("circle", { cx: 12.5, cy: 12.5, r: 12, fill: "white", stroke: "black" }), /* @__PURE__ */ z("path", { d: "M9 16.0711L12.5355 12.5355M12.5355 12.5355L16.0711 9M12.5355 12.5355L16.0711 16.0711M12.5355 12.5355L9 9", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" })), jf = `.input_container{display:flex;flex-direction:column}.input_wrapper{width:100%;border-radius:12px;padding:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:space-between}.input_wrapper input{width:100%}
`, ec = ({
  value: i,
  setValue: e,
  placeholder: t,
  type: r,
  error: n,
  submitInput: s,
  label: o,
  instructions: a
}) => /* @__PURE__ */ p($, { children: [
  /* @__PURE__ */ p("style", { type: "text/css", children: jf }),
  /* @__PURE__ */ p("div", { className: "input_container", children: [
    o && /* @__PURE__ */ p("label", { class: "text-gray-800 font-bold text", children: o }),
    a && /* @__PURE__ */ p("label", { class: "text-gray-600 my-1 italic text-sm", children: a }),
    /* @__PURE__ */ p("div", { className: "input_wrapper", children: [
      /* @__PURE__ */ p(
        "input",
        {
          placeholder: t,
          value: i,
          onChange: (l) => e(l.currentTarget.value),
          type: r,
          onKeyDown: (l) => {
            l.key === "Enter" && s();
          }
        }
      ),
      /* @__PURE__ */ p(
        Qu,
        {
          height: 20,
          width: 20,
          onClick: () => e(""),
          className: "cursor-pointer"
        }
      )
    ] }),
    /* @__PURE__ */ p(nt, { messages: n })
  ] })
] }), Uf = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`;
function St({ isLoading: i, colour: e }) {
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: Uf }),
    /* @__PURE__ */ p(
      "div",
      {
        class: "lds-ring",
        id: "bm-loading-spinner",
        style: {
          display: i ? "inline-block" : "none"
        },
        children: [
          /* @__PURE__ */ p(
            "div",
            {
              style: {
                border: `2px solid ${e}`,
                borderColor: `${e} transparent transparent transparent`
              }
            }
          ),
          /* @__PURE__ */ p(
            "div",
            {
              style: {
                border: `2px solid ${e}`,
                borderColor: `${e} transparent transparent transparent`
              }
            }
          ),
          /* @__PURE__ */ p(
            "div",
            {
              style: {
                border: `2px solid ${e}`,
                borderColor: `${e} transparent transparent transparent`
              }
            }
          ),
          /* @__PURE__ */ p(
            "div",
            {
              style: {
                border: `2px solid ${e}`,
                borderColor: `${e} transparent transparent transparent`
              }
            }
          )
        ]
      }
    )
  ] });
}
const pt = ({
  onClick: i,
  primary: e,
  text: t,
  loading: r,
  disabled: n,
  sticky: s,
  children: o,
  active: a = !0,
  noMargin: l = !1
}) => /* @__PURE__ */ p(
  "button",
  {
    onClick: (u) => {
      !n && !r && (u.preventDefault(), i());
    },
    class: X(
      "duration-300 bottom-4 transition-colors rounded-xl p-3 w-full flex justify-center items-center",
      `${e && a ? "bg-gray-950 text-white" : e && !a ? "bg-gray-200 text-gray-400 " : "bg-gray-200 text-gray-800"} ${s && "sticky"} ${!l && "mt-4"}`
    ),
    style: {
      cursor: n ? "not-allowed" : "pointer",
      opacity: n ? 0.5 : 1
    },
    children: r ? /* @__PURE__ */ p(
      St,
      {
        isLoading: r,
        colour: e ? "#fff" : "#000"
      }
    ) : /* @__PURE__ */ p($, { children: [
      /* @__PURE__ */ p("span", { className: o ? "ml-auto" : "", children: t }),
      o
    ] })
  }
);
function Hf() {
  const i = window.BikeMatrix.getConfig(), { bike: e, setBikeAttr: t } = Re(), { brand: r, model: n, frameSeries: s } = e, { t: o } = ee(), [a, l] = M([]), [u, c] = M(!1), d = new Se(
    i.apiUrl,
    i.apiKey,
    i.apiToken,
    i.isShopify
  ), [h, f] = M(null), [v, g] = M(""), w = r.value, m = r.value && n.value;
  j(() => {
    const x = i.bikeSelectorBrands ? i.bikeSelectorBrands.split(",").filter((_) => _ !== "") : [];
    if (x.length > 0 && r.options.length > 0) {
      let _ = [];
      r.options.forEach((C) => {
        x.includes(C.value.toString().trim()) && _.push(C);
      }), l(_);
    } else
      r.options.length > 0 && l(r.options);
  }, [i.bikeSelectorBrands, r.options]);
  const b = async () => {
    c(!0);
    const x = await d.getBikeBom(v);
    if (!(x != null && x.success)) {
      i.logLevel === "verbose" && console.error(x.logError), c(!1), f(x.error);
      return;
    }
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v)) {
      const C = await d.getBikeBom(v), A = Ir(C.data);
      ke.value = A, e.value = await Ju(A), c(!1), te("/confirm");
    } else
      f("error_get_bike_bom"), c(!1);
  };
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("div", { class: "space-y-5 relative w-full flex flex-col", children: [
      /* @__PURE__ */ p(
        ci,
        {
          type: "brand",
          title: o("bikeselector_addbike_brand_label"),
          placeholder: o("bikeselector_addbike_brand_select"),
          value: r.value,
          options: a,
          onChange: (x) => {
            t("brand", x.target.value);
          },
          loading: !r.options.length && !r.error,
          disabled: !r.options.length || r.error,
          info: !0,
          infoVisible: !r.value,
          error: r.error,
          children: /* @__PURE__ */ p("img", { src: Be("info-brand.svg"), class: "w-full h-full" })
        }
      ),
      /* @__PURE__ */ p(
        ci,
        {
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
          children: /* @__PURE__ */ p("img", { src: Be("info-model.svg"), class: "w-full h-full" })
        }
      ),
      /* @__PURE__ */ p(
        ci,
        {
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
          children: /* @__PURE__ */ p("img", { src: Be("info-frameseries.svg"), class: "w-full h-full" })
        }
      ),
      i.virtualWorkshop && /* @__PURE__ */ p($, { children: [
        /* @__PURE__ */ p("div", { className: "flex justify-center items-center gap-2", children: [
          /* @__PURE__ */ p("div", { className: "bg-gray-300 h-[1px] w-full" }),
          /* @__PURE__ */ p("p", { className: " font-semibold text-sm", children: o("bikeselector_or") }),
          /* @__PURE__ */ p("div", { className: "bg-gray-300 h-[1px] w-full" })
        ] }),
        /* @__PURE__ */ p(
          ec,
          {
            value: v,
            setValue: (x) => g(x),
            label: "Bike Matrix ID",
            placeholder: o("virtualworkshop_add_by_id"),
            type: "text",
            instructions: o("virtualworkshop_bm_id_text")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p(nt, { messages: h }),
    /* @__PURE__ */ p(
      pt,
      {
        noMargin: !0,
        primary: !0,
        text: o("bikeselector_addbike_find_btn"),
        onClick: () => {
          r.value && n.value && s.value ? te("/search") : v && b();
        },
        active: r.value && n.value && s.value || v,
        loading: u,
        children: /* @__PURE__ */ p(rt, { class: "h-3 ml-auto justify-self-end" })
      }
    )
  ] });
}
function Gf() {
  var v, g, w, m;
  const { bike: i, setBike: e, setBikeAttr: t, results: r, loading: n } = Re(), { year: s, bikeSpec: o } = i, { t: a } = ee(), [l, u] = [
    i.value,
    (b) => e((x) => ({ ...x, value: b }))
  ], c = tt(() => {
    const b = r == null ? void 0 : r.filter((x) => {
      var C;
      let _ = !0;
      return o.value && (_ = x.bikeSpec === o.value), _ && s.value.length && (_ = (C = s.value) == null ? void 0 : C.includes(x.year)), _;
    });
    return b.some((x) => x._key == l._key) || u({}), b;
  }, [r, o.value, s.value]), d = tt(() => o.value ? r.filter((x) => o.value == x.bikeSpec).map((x) => x.year) : s.options.map((x) => x.value), [o.value]), h = tt(() => {
    var x;
    if (!((x = s.value) != null && x.length))
      return o.options;
    const b = r.filter((_) => {
      var C;
      return (C = s.value) == null ? void 0 : C.includes(_.year);
    }).map((_) => _.bikeSpec);
    return o.options.map((_) => ({
      ..._,
      disabled: !b.includes(_.value)
    }));
  }, [o.options, s.value]), f = (b) => b === 0 ? a("bikeselector_search_no_bikes_found") : b === 1 ? a("bikeselector_search_one_bike_found") : a("bikeselector_search_number_bikes_found", { number_found: b });
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("div", { class: "space-y-3 mb-6 relative w-full flex flex-col", children: [
      (i.bikeSpec.error || i.frameSize.error || i.year.error) && /* @__PURE__ */ p(
        nt,
        {
          messages: i.bikeSpec.error || i.frameSize.error || i.year.error
        }
      ),
      /* @__PURE__ */ p(
        ci,
        {
          type: "bikespec",
          title: a("bikeselector_search_bikespec_label"),
          placeholder: a("bikeselector_search_bikespec_select"),
          value: o.value,
          options: [
            { label: a("bikeselector_search_bikespec_select_all"), value: "" },
            ...h
          ],
          onChange: (b) => {
            t("bikeSpec", b.target.value);
          },
          disabled: !((v = o.options) != null && v.length) || i.bikeSpec.error,
          loading: !((g = o.options) != null && g.length) && !i.bikeSpec.error
        }
      ),
      /* @__PURE__ */ p("div", { class: "w-full flex flex-col space-y-2", children: [
        /* @__PURE__ */ p("label", { class: "text-gray-800 font-bold text", children: a("bikeselector_search_year_label") }),
        /* @__PURE__ */ p(
          "div",
          {
            class: X(
              "flex space-x-2 overflow-x-auto",
              "-mx-8 w-[calc(100%_+_64px)] px-8 no-scrollbar"
            ),
            children: (w = s.options) != null && w.length ? (m = s.options) == null ? void 0 : m.map((b) => {
              var C;
              const x = o.value && !d.includes(b.value), _ = (C = s.value) == null ? void 0 : C.includes(b.value);
              return /* @__PURE__ */ p(
                "div",
                {
                  onClick: () => {
                    x || t(
                      "year",
                      _ ? s.value.filter((A) => A !== b.value) : [...s.value, b.value]
                    );
                  },
                  class: X(
                    "rounded-full cursor-pointer items-center flex border  py-2 px-4",
                    _ ? "pr-3 bg-gray-950 border-gray-950 text-white" : "border-gray-300 text-gray-700 ",
                    x && "hidden"
                  ),
                  children: [
                    b.label,
                    _ && /* @__PURE__ */ p(hi, { class: "w-3 h-3 ml-2" })
                  ]
                }
              );
            }) : Array(2).fill(0).map((b, x) => /* @__PURE__ */ p(
              "div",
              {
                class: "rounded-full items-center flex border py-2 bg-gray-100 px-4 bg-100 border-gray-300 animate-pulse",
                children: /* @__PURE__ */ p("span", { class: "rounded-lg bg-gray-100 w-9 h-5" })
              },
              x
            ))
          }
        )
      ] }),
      /* @__PURE__ */ p(
        "div",
        {
          class: X(
            "text-nowrap font-medium w-full flex",
            "[&>span]:text-gray-500 [&>span]:font-normal"
          ),
          children: [
            n ? (
              // "Searching..."
              /* @__PURE__ */ p($, { children: a("bikeselector_search_searching") })
            ) : /* @__PURE__ */ p($, { children: f(c.length) }),
            " ",
            (r == null ? void 0 : r.length) > 0 && /* @__PURE__ */ p($, { children: [
              /* @__PURE__ */ p("span", { children: "(" }),
              /* @__PURE__ */ p(
                "span",
                {
                  class: "whitespace-nowrap overflow-hidden text-ellipsis truncate",
                  children: [
                    r[0].brand,
                    " ",
                    r[0].frameSeries
                  ]
                }
              ),
              /* @__PURE__ */ p("span", { children: ")" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ p("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: c != null && c.length && !n ? c.map((b, x) => /* @__PURE__ */ p(
        it,
        {
          "data-key": b._key,
          bike: b,
          selected: b._key === l._key,
          onClick: (_) => {
            _.preventDefault(), u(b);
          },
          compact: !0
        },
        b._key
      )) : Array(n ? 2 : 1).fill(0).map((b, x) => /* @__PURE__ */ p(
        "div",
        {
          class: X(
            "w-full relative rounded-xl h-40 bg-white border border-gray-200 ",
            n && "animate-pulse"
          ),
          children: [
            /* @__PURE__ */ p(
              "span",
              {
                class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
              }
            ),
            /* @__PURE__ */ p(
              "span",
              {
                class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-200"
              }
            )
          ]
        },
        x
      )) })
    ] }),
    /* @__PURE__ */ p(
      "button",
      {
        onClick: (b) => {
          var x, _;
          if (b.preventDefault(), l._key) {
            const C = (x = this.base.querySelector(
              `[data-key="${l._key}"] [data-active-slide]`
            )) == null ? void 0 : x.getAttribute("data-active-slide"), k = [(_ = this.base.querySelector(
              `[data-key="${l._key}"] [data-slide="${C}"] img`
            )) == null ? void 0 : _.src].filter((y) => !!y);
            k != null && k.length && e((y) => (y.value = { ...y.value || {}, images: k }, { ...y })), te("/size");
          }
        },
        class: X(
          "duration-300 transition-colors sticky bottom-6 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center",
          l._key ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "
        ),
        children: [
          /* @__PURE__ */ p("span", { class: "ml-auto", children: a("bikeselector_search_confirm_btn") }),
          " ",
          /* @__PURE__ */ p(rt, { class: "h-3 ml-auto justify-self-end" })
        ]
      }
    )
  ] });
}
function Wf() {
  var s, o;
  const { bike: i, setBikeAttr: e, setBike: t } = Re(), { frameSize: r } = i, { t: n } = ee();
  return j(() => {
    var a;
    (a = r.options) != null && a.length || te("/confirm");
  }, []), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p(it, { bike: i.value, selected: !0, compact: !0 }),
    /* @__PURE__ */ p("div", { class: " mt-4 mb-6 relative w-full flex flex-col", children: /* @__PURE__ */ p(
      ci,
      {
        type: "framesize",
        instruction: !0,
        title: n("bikeselector_size_framesize_label"),
        placeholder: n("bikeselector_size_framesize_select"),
        value: r.value,
        options: r.options,
        onChange: (a) => {
          e("frameSize", a.target.value), t((l) => {
            var u;
            return l.value.frameSize = ((u = r.options.find((c) => c.value == a.target.value)) == null ? void 0 : u.label) || "", l;
          });
        },
        selected: !0,
        info: !0,
        infoVisible: !0,
        disabled: !((s = r.options) != null && s.length),
        loading: !((o = r.options) != null && o.length),
        children: /* @__PURE__ */ p("img", { src: Be("info-size.svg"), class: "w-full h-full" })
      }
    ) }),
    /* @__PURE__ */ p(
      "button",
      {
        onClick: (a) => {
          a.preventDefault(), r.value && te("/confirm");
        },
        class: X(
          "duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center",
          r.value ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "
        ),
        children: [
          /* @__PURE__ */ p("span", { class: "ml-auto", children: n("bikeselector_size_confirm_btn") }),
          " ",
          /* @__PURE__ */ p(rt, { class: "h-3 ml-auto justify-self-end" })
        ]
      }
    )
  ] });
}
const at = Ae({ title: "", step: 0, back: "" });
function Yf({ children: i }) {
  const { t: e } = ee();
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("div", { class: "relative flex items-center justify-center w-full h-10 my-5 sm:mt-8", children: [
      !!at.value.back && /* @__PURE__ */ p(
        "div",
        {
          onClick: () => te(at.value.back),
          class: " w-10 h-10 absolute left-0 rounded-xl self-start border-gray-200 border items-center justify-center flex",
          children: /* @__PURE__ */ p(rt, { class: "h-3 text-gray-500 -translate-x-px -rotate-180" })
        }
      ),
      /* @__PURE__ */ p(
        "h2",
        {
          class: "text-xl font-bold",
          style: { maxWidth: "70%", textAlign: "center" },
          children: e(at.value.title)
        }
      )
    ] }),
    i,
    typeof at.value.step < "u" && /* @__PURE__ */ p("div", { class: "space-x-2 my-6 flex items-center justify-center", children: [0, 1, 2, 3].map((t) => /* @__PURE__ */ p(
      "div",
      {
        class: X(
          "rounded-xl h-2 transition-all duration-300",
          t == at.value.step ? "w-6 bg-gray-950" : "w-2 bg-gray-200"
        )
      },
      t
    )) })
  ] });
}
function Kf() {
  const { bike: i, saveBike: e } = Re(), { apiUrl: t, apiKey: r, apiToken: n, isShopify: s } = window.BikeMatrix.getConfig(), { brand: o, model: a, frameSeries: l, frameSize: u, year: c, bikeSpec: d } = i.value, { t: h } = ee(), f = ke.value, v = new Se(t, r, n, s);
  return j(() => {
    !u && !f ? at.value.back = "/search" : f && (at.value.back = "/add");
  }, []), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p(it, { bike: i.value, selected: !0, compact: !0 }),
    /* @__PURE__ */ p("div", { class: " space-y-4 mt-4 mb-6 relative w-full flex flex-col", children: [
      {
        // title: "Brand, Model, Frame Series",
        title: h("bikeselector_confirm_brandmodelframespec_label"),
        value: [o, a, l].join(", "),
        path: "/add"
      },
      {
        // title: "Year, Bike Spec",
        title: h("bikeselector_confirm_yearbikespec_label"),
        value: [c, d].join(", "),
        path: "/search"
      },
      {
        // title: "Frame Size",
        title: h("bikeselector_confirm_framesize_label"),
        value: u,
        path: "/size"
      }
    ].filter((g) => !!g.value).map((g) => /* @__PURE__ */ p("div", { class: "w-full flex flex-col space-y-2", children: [
      /* @__PURE__ */ p("label", { class: "text-gray-800 font-bold", children: g.title }),
      /* @__PURE__ */ p(
        "div",
        {
          onClick: () => te(g.path),
          class: "w-full flex items-center relative cursor-pointer",
          children: [
            /* @__PURE__ */ p(
              "div",
              {
                class: X(
                  "rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-700"
                ),
                children: g.value
              }
            ),
            /* @__PURE__ */ p(rt, { class: "absolute h-3 text-gray-700 pointer-events-none right-4 peer-disabled:text-gray-400" })
          ]
        }
      )
    ] }, g.path)) }),
    /* @__PURE__ */ p(
      "button",
      {
        onClick: (g) => {
          g.preventDefault(), v.raceControl("AddBikeToLounge", { BikeKey: i.value.key }), e(i.value), te("/browse");
        },
        class: X(
          "duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 w-full flex justify-center items-center",
          "bg-gray-950 text-white"
        ),
        children: h("bikeselector_confirm_confirm_btn")
      }
    ),
    /* @__PURE__ */ p("p", { class: "text-gray-600 -mb-3 mt-2 text-center font-normal text-xs", children: h("bikeselector_confirm_notyourride_msg") })
  ] });
}
function Zf() {
  const { currentBike: i, compatibleCollections: e } = Re(), [t, r] = M(!0), [n, s] = M(), { t: o } = ee(), a = () => {
    if (e && e.length > 0) {
      let l = [];
      e.map((u) => {
        l.some((c) => c.text_id === u.text_id) || l.push(u);
      }), s(l);
    }
  };
  return j(() => {
    a();
  }, [e]), j(() => {
    n && r(!1);
  }, [n]), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p(it, { bike: i, selected: !0 }),
    !!(n != null && n.length) && !e.error && /* @__PURE__ */ p($, { children: [
      /* @__PURE__ */ p("p", { class: "text-gray-800 mt-4 font-bold", children: o("bikeselector_browse_products_label") }),
      /* @__PURE__ */ p("div", { class: "gap-3 mt-2 mb-6 relative w-full flex flex-wrap", children: n.map((l) => /* @__PURE__ */ p(
        "a",
        {
          href: l.url,
          class: "group flex items-center relative cursor-pointer",
          children: [
            /* @__PURE__ */ p(
              "div",
              {
                class: X(
                  "rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-950",
                  "group-disabled:bg-gray-100 group-disabled:border-gray-200 group-disabled:text-gray-400"
                ),
                children: o(l.text_id)
              }
            ),
            /* @__PURE__ */ p(rt, { class: "absolute h-3 pointer-events-none right-4 group-disabled:text-gray-400 text-gray-950" })
          ]
        },
        l.text_id
      )) })
    ] }),
    /* @__PURE__ */ p(
      "div",
      {
        style: {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem"
        },
        children: /* @__PURE__ */ p(St, { isLoading: t, colour: "#000" })
      }
    ),
    e && (e == null ? void 0 : e.error) && /* @__PURE__ */ p(nt, { messages: e.error, left: !0, margin: 20 }),
    /* @__PURE__ */ p(
      "button",
      {
        onClick: (l) => {
          l.preventDefault(), Pr();
        },
        class: X(
          "duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center",
          "bg-gray-950 text-white"
        ),
        children: o("bikeselector_browse_shop_btn")
      }
    ),
    /* @__PURE__ */ p(
      "button",
      {
        onClick: (l) => {
          l.preventDefault(), te("/");
        },
        class: X(
          "duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center",
          "bg-gray-200 text-gray-800"
        ),
        children: o("bikeselector_browse_back_btn")
      }
    ),
    /* @__PURE__ */ p(Et, {})
  ] });
}
const Ur = () => /* @__PURE__ */ p(
  "div",
  {
    class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
    children: [
      /* @__PURE__ */ p("span", { class: "block rounded-lg h-6 w-1/2 bg-gray-200" }),
      /* @__PURE__ */ p(
        "img",
        {
          class: "w-auto mx-auto h-auto max-h-36 opacity-30",
          src: Be("bike.png")
        }
      ),
      /* @__PURE__ */ p(
        "span",
        {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        }
      )
    ]
  }
);
function Xf() {
  const { t: i } = ee(), t = window.BikeMatrix.getConfig(), { currentBike: r, setCurrentBike: n, compatibleCollections: s } = Re(), o = new Se(
    t.apiUrl,
    t.apiKey,
    t.apiToken,
    t.isShopify
  ), [a, l] = M(!1), [u, c] = M(null), { saveBike: d } = Re(), h = async () => {
    l(!0);
    const f = await o.addCustomBike(r.key);
    if (f.success) {
      const v = await o.getBikeBom(f == null ? void 0 : f.data);
      if (!v.success) {
        c(v.error), l(!1), t.logLevel === "verbose" && console.error(v.logError);
        return;
      }
      const g = Ir(v.data);
      ke.value = g;
      const w = {
        ...r,
        key: g.bike_Key,
        isCustom: !0,
        shareId: g.share_Bike_Key
      };
      d(w), n(w), l(!1), te("/bom");
    } else {
      c(f.error), l(!1), t.logLevel === "verbose" && console.error(f.logError);
      return;
    }
  };
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("div", { style: { marginBottom: "1rem" }, children: [
      r ? /* @__PURE__ */ p(it, { bike: r, noSymbol: !0, compact: !0 }) : /* @__PURE__ */ p(Ur, {}),
      /* @__PURE__ */ p(
        "div",
        {
          class: " text-gray-800 text-center flex z-20 justify-center font-bold mt-6",
          children: !s.error && s.length > 1 ? i("virtualworkshop_intro_text") : i("virtualworkshop_do_not_pass")
        }
      )
    ] }),
    /* @__PURE__ */ p(nt, { messages: u || s.error }),
    /* @__PURE__ */ p(
      pt,
      {
        text: !s.error && s.length > 1 ? i("virtualworkshop_enter_button") : i("bikeselector_browse_back_btn"),
        onClick: !s.error && s.length > 1 ? () => h() : () => te("/"),
        loading: a,
        primary: !0
      }
    ),
    /* @__PURE__ */ p(Et, {})
  ] });
}
const Jf = `.overflowing{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;justify-content:flex-start}.flexend{justify-content:flex-end}
`, kt = ({
  paragraph: i,
  subheader: e,
  header: t,
  text: r,
  small: n,
  left: s,
  bold: o,
  capitalize: a,
  nowrap: l,
  flexend: u
}) => /* @__PURE__ */ p($, { children: [
  /* @__PURE__ */ p("style", { type: "text/css", children: Jf }),
  t ? /* @__PURE__ */ p("h2", { class: "text-xl font-bold", children: r }) : e ? /* @__PURE__ */ p(
    "h4",
    {
      className: `text-gray-800 text-center flex z-20 justify-center font-bold  ${a ? "capitalize" : ""}`,
      children: r
    }
  ) : /* @__PURE__ */ p(
    "p",
    {
      class: `text-gray-800  flex z-20 ${n ? "text-sm" : ""} ${s ? "text-start justify-start" : "text-center justify-center"} ${o ? "font-bold" : ""} ${a ? "capitalize" : ""} ${l ? "overflowing" : ""} ${u ? "flexend" : ""}`,
      children: r
    }
  )
] }), Qf = `.background-alert-wrapper{opacity:0;position:absolute;height:100%;width:100%;display:none;top:0;left:0;pointer-events:none}.alert-wrapper{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none}.alert{width:80%;padding:2rem;border-radius:12px;background-color:#fff;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:300}.text-wrapper{display:flex;flex-direction:column;align-items:center;gap:1rem}.button-wrapper{display:flex;gap:1rem;width:100%;margin-top:1rem}.translation-link-text a{text-decoration:underline}
`, fo = ({
  isOpen: i,
  toggleModal: e,
  content: t,
  title: r,
  onConfirm: n,
  onCancel: s,
  children: o,
  loading: a,
  secondary: l = !1,
  contentElement: u,
  confirmDisabled: c = !1
}) => {
  const { t: d } = ee(), h = Y(null), f = Y(null), v = () => {
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
  }, g = () => {
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
  return j(() => {
    i ? v() : g();
  }, [i]), /* @__PURE__ */ p("div", { ref: f, className: "background-alert-wrapper", children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: Qf }),
    /* @__PURE__ */ p("div", { className: "alert-wrapper", onClick: g, ref: h }),
    /* @__PURE__ */ p("div", { className: "alert", children: [
      /* @__PURE__ */ p("div", { className: "text-wrapper", children: [
        /* @__PURE__ */ p(kt, { text: r, header: !0 }),
        t && /* @__PURE__ */ p(kt, { text: t, paragraph: !0 }),
        u && /* @__PURE__ */ p("p", { className: "translation-link-text", children: u })
      ] }),
      o,
      l ? /* @__PURE__ */ p(
        pt,
        {
          text: "Done",
          onClick: n,
          primary: !0,
          disabled: c
        }
      ) : /* @__PURE__ */ p("div", { className: "button-wrapper", children: [
        /* @__PURE__ */ p(
          pt,
          {
            text: d("confirm"),
            onClick: n,
            primary: !0,
            loading: a,
            disabled: c
          }
        ),
        /* @__PURE__ */ p(pt, { text: d("cancel"), onClick: g })
      ] })
    ] })
  ] });
}, eh = `.bom-table{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.bom-table_unsaved-changes{display:flex;justify-content:space-between;align-items:center}.circle{background-color:#fba157;border-radius:100%;display:flex;justify-content:center;align-items:center;color:#fff;height:16px;width:16px;min-width:16px;min-height:16px;font-size:10px}.unsaved-changes{position:relative;width:50%}
`, th = `.unsaved-changes_wrapper{opacity:0}.title-section{display:flex;align-items:center;justify-content:flex-end;gap:.35rem;cursor:pointer;position:relative;z-index:23;padding-right:15px}.unsaved-content{display:flex;flex-direction:column;align-items:flex-start;width:100%;gap:1rem;border-radius:12px;background-color:#fff;border:1px solid transparent;position:absolute;z-index:21;right:0;height:0;width:0;overflow:hidden;top:-1rem}.animation-wrapper{padding:15px;margin-top:2rem;width:100%;opacity:0;display:flex;flex-direction:column;gap:1rem}.unsaved-part-wrapper{width:100%}.unsaved-part{display:flex;align-items:center;justify-content:space-between;gap:1rem}.revert-button{font-size:10px;padding:3px 10px;border:1px solid #d1d5db;border-radius:12px;transition:all ease-in-out .5s;cursor:pointer}.revert-button:hover{background-color:#000;color:#fff}.close-button{position:absolute;left:6px;top:6px;cursor:pointer}
`, rh = (i) => /* @__PURE__ */ z("svg", { width: 28, height: 28, viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("circle", { cx: 14, cy: 14, r: 14, fill: "white" }), /* @__PURE__ */ z("path", { d: "M11 17L14 14M14 14L17 11M14 14L17 17M14 14L11 11", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let Ma = typeof document < "u" ? or : j, Pa = (i) => i && !Array.isArray(i) && typeof i == "object", Oi = [], ih = {}, tc = Q;
const ho = (i, e = Oi) => {
  let t = ih;
  Pa(i) ? (t = i, i = null, e = "dependencies" in t ? t.dependencies : Oi) : Pa(e) && (t = e, e = "dependencies" in t ? t.dependencies : Oi), i && typeof i != "function" && console.warn("First parameter must be a function or config object");
  const { scope: r, revertOnUpdate: n } = t, s = Y(!1), o = Y(tc.context(() => {
  }, r)), a = Y((u) => o.current.add(null, u)), l = e && e.length && !n;
  return l && Ma(() => (s.current = !0, () => o.current.revert()), Oi), Ma(() => {
    if (i && o.current.add(i, r), !l || !s.current)
      return () => o.current.revert();
  }, e), { context: o.current, contextSafe: a.current };
};
ho.register = (i) => {
  tc = i;
};
ho.headless = !0;
const nh = () => {
  const [i, e] = M(window.innerWidth), [t, r] = M(window.innerHeight);
  return j(() => {
    const n = () => {
      e(window.innerWidth), r(window.innerHeight);
    };
    return window.addEventListener("resize", n), () => {
      window.removeEventListener("resize", n);
    };
  }, []), { width: i, height: t };
}, sh = ({
  unsavedParts: i,
  revertPart: e,
  readOnly: t
}) => {
  const { t: r } = ee(), n = Y(null), s = Y(), o = Y(null), a = Y({}), [l, u] = M(i), c = Y(null), { height: d, width: h } = nh(), { contextSafe: f } = ho(
    () => {
      s.current = Q.timeline({ paused: !0 }), s.current.to(n.current, {
        border: "1px solid #d1d5db",
        height: "auto",
        maxHeight: "150px",
        overflowY: "auto",
        width: h >= 640 ? "500px" : "366px"
      }).to(o.current, { opacity: 1 }, "-=.25").reverse(), l.length > 0 ? Q.to(c.current, { opacity: 1 }) : Q.to(c.current, { opacity: 0 });
    },
    { scope: c, dependencies: [l] }
  ), v = f(() => {
    s.current && s.current.reversed(!s.current.reversed());
  }), g = (w, m, b) => {
    u(l.filter((x) => x.part !== m)), Q.to(a.current[w], {
      opacity: 0,
      height: 0,
      onComplete: () => e(m, b)
    });
  };
  return j(() => {
    u(i);
  }, [i]), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: th }),
    /* @__PURE__ */ p(
      "div",
      {
        className: "unsaved-changes_wrapper",
        ref: c,
        onClick: v,
        children: [
          /* @__PURE__ */ p("div", { className: "title-section", children: [
            /* @__PURE__ */ p(
              kt,
              {
                text: r("virtualworkshop_unsaved_changes"),
                small: !0,
                bold: !0,
                nowrap: !0,
                flexend: !0
              }
            ),
            /* @__PURE__ */ p("div", { className: "circle", children: l.length })
          ] }),
          /* @__PURE__ */ p("div", { className: "unsaved-content", ref: n, children: [
            /* @__PURE__ */ p("div", { className: "close-button", children: /* @__PURE__ */ p(rh, {}) }),
            /* @__PURE__ */ p("div", { className: "animation-wrapper", ref: o, children: l.length > 0 && l.map((w, m) => {
              var b, x;
              return /* @__PURE__ */ p(
                "div",
                {
                  className: "unsaved-part-wrapper",
                  ref: (_) => {
                    a.current[w.type + m] = _;
                  },
                  children: [
                    /* @__PURE__ */ p(
                      kt,
                      {
                        text: (b = w.type) == null ? void 0 : b.replace(/_/g, " "),
                        small: !0,
                        left: !0,
                        bold: !0,
                        capitalize: !0
                      }
                    ),
                    /* @__PURE__ */ p("div", { className: "unsaved-part", children: [
                      /* @__PURE__ */ p(
                        kt,
                        {
                          text: (x = w.part) != null && x.name ? w.part.name : r("virtualworkshop_removed"),
                          small: !0,
                          left: !0
                        }
                      ),
                      /* @__PURE__ */ p(
                        "div",
                        {
                          className: "revert-button",
                          onClick: () => g(w.type + m, w.part, w.type),
                          children: r("virtualworkshop_revert_btn")
                        }
                      )
                    ] })
                  ]
                },
                w.type + m
              );
            }) })
          ] })
        ]
      }
    )
  ] });
}, go = () => {
  JSON.parse(sessionStorage.getItem("bm_categories")).collections.map((e) => {
    sessionStorage.removeItem(`${Z.value.key}:${e.handle}:v2`);
  });
}, mo = {
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
}, oh = `.type,.part{font-size:16px}.wrapper{display:flex;flex-direction:column;gap:.25rem}.part-wrapper{display:flex;justify-content:space-between;align-items:flex-start;padding:10px;transition:all ease-in-out .5s}.can-hover{cursor:pointer}.can-hover:hover{background-color:#d9d9d966;border-radius:12px}.type-wrapper{display:flex}.svg-wrapper{min-width:20px}.updating-spinner{position:absolute;top:2.5rem;right:1rem}
`, ah = (i) => /* @__PURE__ */ z("svg", { width: 20, height: 20, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M15.5 31C24.0605 31 31 24.0604 31 15.5C31 6.93958 24.0605 0 15.5 0C6.93945 0 0 6.93958 0 15.5C0 18.6947 0.966309 21.6637 2.62305 24.1305L8.62451 18.4889C8.74268 18.3724 8.86279 18.2644 8.98389 18.1625C7.87256 15.2234 8.50049 11.7754 10.8701 9.41406C12.6006 7.68994 14.9941 6.82117 17.4365 7.03076C17.5571 7.04114 17.6699 7.08105 17.7671 7.14429C17.8936 7.22681 17.9932 7.349 18.0474 7.49646C18.1226 7.70227 18.0977 7.92786 17.9868 8.11011C17.9575 8.15796 17.9224 8.20288 17.8813 8.24365L13.8589 12.2506L15.271 16.6925L19.7295 18.099L23.7515 14.0924C23.9482 13.8969 24.2407 13.8322 24.502 13.9272C24.7627 14.0217 24.9453 14.2588 24.9692 14.5348C25.1797 16.9679 24.3071 19.3524 22.5771 21.0768C20.2051 23.4396 16.7417 24.0634 13.7905 22.9541C13.6904 23.0771 13.5845 23.197 13.4697 23.3115L8.0708 29.1067C10.2769 30.3137 12.8081 31 15.5 31Z", fill: "#10B981" })), lh = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db;position:relative}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}
`, rc = ({
  title: i,
  children: e
}) => {
  const [t, r] = M(!1), n = Y(null), s = Y(null), o = Y(null), a = Y();
  return j(() => {
    a.current = Q.timeline({ paused: !0 });
    const l = Q.context(() => {
      a.current.to(n.current, {
        height: "auto",
        duration: 0.75
      }).to(o.current, { rotate: 270 }, "=").to(s.current, { opacity: 1 }, "-=.5").reverse();
    });
    return () => {
      l.revert();
    };
  }, []), j(() => {
    a.current.reversed(!t);
  }, [t, r]), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: lh }),
    /* @__PURE__ */ p("div", { className: "accordian-wrapper", ref: n, children: [
      /* @__PURE__ */ p("div", { className: "header-content", onClick: () => r(!t), children: [
        /* @__PURE__ */ p("h4", { className: "category font-semibold", children: i }),
        /* @__PURE__ */ p("div", { className: "chevron-wrapper", ref: o, children: /* @__PURE__ */ p(rt, {}) })
      ] }),
      /* @__PURE__ */ p("div", { className: "content", ref: s, children: e })
    ] })
  ] });
}, Ia = {
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
}, uh = ({
  bom: i,
  category: e,
  readOnly: t,
  loading: r
}) => {
  const { t: n } = ee(), s = (o, a, l) => {
    xn.value = { part: o, category: a, type: l }, o.id ? te("/part") : te("/update");
  };
  return /* @__PURE__ */ p(rc, { title: n(Ia[e]), children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: oh }),
    r && i && /* @__PURE__ */ p("div", { className: "updating-spinner", children: /* @__PURE__ */ p(St, { colour: "#000", isLoading: !0 }) }),
    i ? Object.keys(i || {}).map((o, a) => {
      if (e.toLocaleLowerCase() === o.replace(/_/g, " ").toLocaleLowerCase())
        return Object.keys(i[o] || {}).map((l) => {
          const u = i[o][l];
          return /* @__PURE__ */ p("div", { className: "wrapper", children: [
            /* @__PURE__ */ p("div", { className: "type-wrapper", children: /* @__PURE__ */ p("h4", { className: "type font-semibold capitalize", children: n(Ia[l]) }) }),
            /* @__PURE__ */ p(
              "div",
              {
                className: `part-wrapper ${u != null && u.swap && !t ? "can-hover" : ""}`,
                onClick: () => {
                  u != null && u.swap && !t && s(
                    u,
                    o == null ? void 0 : o.replace(/_/g, " "),
                    l == null ? void 0 : l.replace(/_/g, " ")
                  );
                },
                children: [
                  /* @__PURE__ */ p("p", { className: "part", children: u != null && u.name ? u.name : "—" }),
                  (u == null ? void 0 : u.swap) && !t && /* @__PURE__ */ p("div", { className: "svg-wrapper", children: /* @__PURE__ */ p(ah, {}) })
                ]
              },
              u == null ? void 0 : u.id
            )
          ] }, l);
        });
    }) : /* @__PURE__ */ p(St, { colour: "#000", isLoading: !0 })
  ] });
}, ic = ({
  categorisedBOM: i,
  bikeSave: e,
  refreshBomb: t,
  readOnly: r,
  loading: n,
  bomError: s
}) => {
  const { t: o } = ee(), l = window.BikeMatrix.getConfig(), [u, c] = M([]), { currentBike: d, setCurrentBike: h } = Re(), f = new Se(
    l.apiUrl,
    l.apiKey,
    l.apiToken,
    l.isShopify
  ), [v, g] = M(""), w = ke.value, m = [
    "Frame & Fork",
    "Drivetrain",
    "Brakes",
    "Cockpit",
    "Wheels & Tyres"
    // "EBike",
  ], b = async (_, C) => {
    go();
    const A = await f.revertComponent(
      d.key,
      _.product_category_id,
      mo[C.split(" ").join("_")]
    );
    if (A.success)
      t(), h({ ...d });
    else {
      g(A.error), l.logLevel === "verbose" && console.error(A.logError);
      return;
    }
  }, x = () => {
    let _ = [];
    w && Object.keys(i).forEach((C) => {
      typeof i[C] == "object" && i[C] !== null && Object.keys(i[C]).forEach((A) => {
        i[C][A].unsaved_changes && _.push({
          type: A,
          part: i[C][A]
        });
      });
    }), c(_);
  };
  return j(() => {
    x();
  }, [w, i]), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: eh }),
    /* @__PURE__ */ p("div", { class: "bom-table_unsaved-changes mt-8", children: [
      /* @__PURE__ */ p(kt, { subheader: !0, text: o("virtualworkshop_build_text") }),
      !r && /* @__PURE__ */ p("div", { className: "unsaved-changes", children: /* @__PURE__ */ p(
        sh,
        {
          readOnly: r,
          unsavedParts: u,
          revertPart: (_, C) => b(_, C)
        }
      ) }),
      !i && r && /* @__PURE__ */ p(St, { isLoading: !0, colour: "#000" }),
      (s || v) && /* @__PURE__ */ p(nt, { messages: s || v })
    ] }),
    /* @__PURE__ */ p("div", { className: "bom-table", children: m.map((_, C) => /* @__PURE__ */ p(
      uh,
      {
        category: _,
        bom: i,
        readOnly: r,
        loading: n
      },
      _ + C
    )) })
  ] });
}, ch = `:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.onboarding-wrapper{position:absolute;height:100%;width:100%;top:0;left:0}.onboarding-background{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px}@media screen and (max-width: 639px){.onboarding-background{background-color:#000000b3}}.onboarding-modal{background-color:#fff;border-radius:8px;width:90%;height:-moz-fit-content;height:fit-content;z-index:201;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:hidden}.heading{max-width:60%;text-align:center;margin-left:auto;margin-right:auto}.back-button{z-index:1;cursor:pointer;display:flex;justify-content:center;align-items:center;border-radius:12px;border:1px solid #d4d4d4;position:absolute;top:30px;left:30px;width:40px;height:40px;padding-right:2px}.back-button svg{transform:rotate(180deg);color:#6b7280}.button-wrapper{padding:30px}.swiper-pagination-bullet{width:7px;height:7px;opacity:1;background:rgba(0,0,0,.2)}.swiper-pagination-bullet-active{background:#000}.swiper-pagination-bullets.swiper-pagination-horizontal{--swiper-pagination-bottom: -2.5rem}.swiper{overflow:visible}
`, dh = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgMzFDMjQuMDYwNSAzMSAzMSAyNC4wNjA0IDMxIDE1LjVDMzEgNi45Mzk1OCAyNC4wNjA1IDAgMTUuNSAwQzYuOTM5NDUgMCAwIDYuOTM5NTggMCAxNS41QzAgMTguNjk0NyAwLjk2NjMwOSAyMS42NjM3IDIuNjIzMDUgMjQuMTMwNUw4LjYyNDUxIDE4LjQ4ODlDOC43NDI2OCAxOC4zNzI0IDguODYyNzkgMTguMjY0NCA4Ljk4Mzg5IDE4LjE2MjVDNy44NzI1NiAxNS4yMjM0IDguNTAwNDkgMTEuNzc1NCAxMC44NzAxIDkuNDE0MDZDMTIuNjAwNiA3LjY4OTk0IDE0Ljk5NDEgNi44MjExNyAxNy40MzY1IDcuMDMwNzZDMTcuNTU3MSA3LjA0MTE0IDE3LjY2OTkgNy4wODEwNSAxNy43NjcxIDcuMTQ0MjlDMTcuODkzNiA3LjIyNjgxIDE3Ljk5MzIgNy4zNDkgMTguMDQ3NCA3LjQ5NjQ2QzE4LjEyMjYgNy43MDIyNyAxOC4wOTc3IDcuOTI3ODYgMTcuOTg2OCA4LjExMDExQzE3Ljk1NzUgOC4xNTc5NiAxNy45MjI0IDguMjAyODggMTcuODgxMyA4LjI0MzY1TDEzLjg1ODkgMTIuMjUwNkwxNS4yNzEgMTYuNjkyNUwxOS43Mjk1IDE4LjA5OUwyMy43NTE1IDE0LjA5MjRDMjMuOTQ4MiAxMy44OTY5IDI0LjI0MDcgMTMuODMyMiAyNC41MDIgMTMuOTI3MkMyNC43NjI3IDE0LjAyMTcgMjQuOTQ1MyAxNC4yNTg4IDI0Ljk2OTIgMTQuNTM0OEMyNS4xNzk3IDE2Ljk2NzkgMjQuMzA3MSAxOS4zNTI0IDIyLjU3NzEgMjEuMDc2OEMyMC4yMDUxIDIzLjQzOTYgMTYuNzQxNyAyNC4wNjM0IDEzLjc5MDUgMjIuOTU0MUMxMy42OTA0IDIzLjA3NzEgMTMuNTg0NSAyMy4xOTcgMTMuNDY5NyAyMy4zMTE1TDguMDcwOCAyOS4xMDY3QzEwLjI3NjkgMzAuMzEzNyAxMi44MDgxIDMxIDE1LjUgMzFaIiBmaWxsPSIjMTBCOTgxIi8+Cjwvc3ZnPgo=", nc = [
  {
    number: 1,
    title: "virtualworkshop_title",
    content: "onboarding_vw_description",
    image: Be("onboarding-vw/build.png"),
    svg: ""
  },
  {
    number: 2,
    title: "onboarding_open_bike_build",
    content: "onboarding_open_bike_build_description",
    image: Be("onboarding-vw/build.png"),
    svg: ""
  },
  {
    number: 3,
    title: "onboarding_green_spanner",
    content: "onboarding_green_spanner_description",
    image: Be("onboarding-vw/green-spanner.png"),
    svg: dh
  },
  {
    number: 4,
    title: "onboarding_replacement",
    content: "onboarding_replacement_description",
    image: Be("onboarding-vw/compatible.png"),
    svg: ""
  },
  {
    number: 5,
    title: "onboarding_linked_components",
    content: "onboarding_linked_components_description",
    image: Be("onboarding-vw/not-compatible.png"),
    svg: ""
  },
  {
    number: 6,
    title: "onboarding_preview",
    content: "onboarding_preview_description",
    image: Be("onboarding-vw/unsaved-changes.png"),
    svg: ""
  },
  {
    number: 7,
    title: "onboarding_settings",
    content: "onboarding_settings_description",
    image: Be("onboarding-vw/settings.png"),
    svg: ""
  }
], ph = `.card-wrapper{width:100%;display:flex;flex-direction:column}.card-image-wrapper{border:1px solid #d4d4d4;border-radius:8px;overflow:hidden;width:100%;margin-bottom:1rem}.card-image-wrapper img{width:100%;height:auto}.card-content{color:#000;font-size:16px}
`, fh = ({
  title: i,
  src: e,
  content: t,
  number: r
}) => {
  const { t: n } = ee();
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: ph }),
    /* @__PURE__ */ p("div", { className: "card-wrapper", children: [
      /* @__PURE__ */ p("div", { className: "card-image-wrapper", children: /* @__PURE__ */ p("img", { src: e }) }),
      /* @__PURE__ */ p("h3", { class: "card-title", children: [
        r,
        ". ",
        n(`${i}`)
      ] }),
      /* @__PURE__ */ p("div", { className: "card-content", children: n(`${t}`) })
    ] })
  ] });
};
function Ra(i) {
  return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
}
function bo(i = {}, e = {}) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((r) => t.indexOf(r) < 0).forEach((r) => {
    typeof i[r] > "u" ? i[r] = e[r] : Ra(e[r]) && Ra(i[r]) && Object.keys(e[r]).length > 0 && bo(i[r], e[r]);
  });
}
const sc = {
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
function ur() {
  const i = typeof document < "u" ? document : {};
  return bo(i, sc), i;
}
const hh = {
  document: sc,
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
  requestAnimationFrame(i) {
    return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
  },
  cancelAnimationFrame(i) {
    typeof setTimeout > "u" || clearTimeout(i);
  }
};
function Le() {
  const i = typeof window < "u" ? window : {};
  return bo(i, hh), i;
}
function gh(i = "") {
  return i.trim().split(" ").filter((e) => !!e.trim());
}
function mh(i) {
  const e = i;
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
function oc(i, e = 0) {
  return setTimeout(i, e);
}
function dn() {
  return Date.now();
}
function bh(i) {
  const e = Le();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t;
}
function vh(i, e = "x") {
  const t = Le();
  let r, n, s;
  const o = bh(i);
  return t.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((a) => a.replace(",", ".")).join(", ")), s = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = s.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? n = s.m41 : r.length === 16 ? n = parseFloat(r[12]) : n = parseFloat(r[4])), e === "y" && (t.WebKitCSSMatrix ? n = s.m42 : r.length === 16 ? n = parseFloat(r[13]) : n = parseFloat(r[5])), n || 0;
}
function Mi(i) {
  return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object";
}
function wh(i) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11);
}
function qe(...i) {
  const e = Object(i[0]);
  for (let t = 1; t < i.length; t += 1) {
    const r = i[t];
    if (r != null && !wh(r)) {
      const n = Object.keys(Object(r)).filter((s) => s !== "__proto__" && s !== "constructor" && s !== "prototype");
      for (let s = 0, o = n.length; s < o; s += 1) {
        const a = n[s], l = Object.getOwnPropertyDescriptor(r, a);
        l !== void 0 && l.enumerable && (Mi(e[a]) && Mi(r[a]) ? r[a].__swiper__ ? e[a] = r[a] : qe(e[a], r[a]) : !Mi(e[a]) && Mi(r[a]) ? (e[a] = {}, r[a].__swiper__ ? e[a] = r[a] : qe(e[a], r[a])) : e[a] = r[a]);
      }
    }
  }
  return e;
}
function gr(i, e, t) {
  i.style.setProperty(e, t);
}
function ac({
  swiper: i,
  targetPosition: e,
  side: t
}) {
  const r = Le(), n = -i.translate;
  let s = null, o;
  const a = i.params.speed;
  i.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(i.cssModeFrameID);
  const l = e > n ? "next" : "prev", u = (d, h) => l === "next" && d >= h || l === "prev" && d <= h, c = () => {
    o = (/* @__PURE__ */ new Date()).getTime(), s === null && (s = o);
    const d = Math.max(Math.min((o - s) / a, 1), 0), h = 0.5 - Math.cos(d * Math.PI) / 2;
    let f = n + h * (e - n);
    if (u(f, e) && (f = e), i.wrapperEl.scrollTo({
      [t]: f
    }), u(f, e)) {
      i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
          [t]: f
        });
      }), r.cancelAnimationFrame(i.cssModeFrameID);
      return;
    }
    i.cssModeFrameID = r.requestAnimationFrame(c);
  };
  c();
}
function dt(i, e = "") {
  const t = Le(), r = [...i.children];
  return t.HTMLSlotElement && i instanceof HTMLSlotElement && r.push(...i.assignedElements()), e ? r.filter((n) => n.matches(e)) : r;
}
function xh(i, e) {
  const t = [e];
  for (; t.length > 0; ) {
    const r = t.shift();
    if (i === r)
      return !0;
    t.push(...r.children, ...r.shadowRoot ? r.shadowRoot.children : [], ...r.assignedElements ? r.assignedElements() : []);
  }
}
function _h(i, e) {
  const t = Le();
  let r = e.contains(i);
  return !r && t.HTMLSlotElement && e instanceof HTMLSlotElement && (r = [...e.assignedElements()].includes(i), r || (r = xh(i, e))), r;
}
function pn(i) {
  try {
    console.warn(i);
    return;
  } catch {
  }
}
function fn(i, e = []) {
  const t = document.createElement(i);
  return t.classList.add(...Array.isArray(e) ? e : gh(e)), t;
}
function yh(i, e) {
  const t = [];
  for (; i.previousElementSibling; ) {
    const r = i.previousElementSibling;
    e ? r.matches(e) && t.push(r) : t.push(r), i = r;
  }
  return t;
}
function Ch(i, e) {
  const t = [];
  for (; i.nextElementSibling; ) {
    const r = i.nextElementSibling;
    e ? r.matches(e) && t.push(r) : t.push(r), i = r;
  }
  return t;
}
function Rt(i, e) {
  return Le().getComputedStyle(i, null).getPropertyValue(e);
}
function hn(i) {
  let e = i, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function lc(i, e) {
  const t = [];
  let r = i.parentElement;
  for (; r; )
    e ? r.matches(e) && t.push(r) : t.push(r), r = r.parentElement;
  return t;
}
function Ss(i, e, t) {
  const r = Le();
  return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth;
}
function bt(i) {
  return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
}
function gn(i, e = "") {
  typeof trustedTypes < "u" ? i.innerHTML = trustedTypes.createPolicy("html", {
    createHTML: (t) => t
  }).createHTML(e) : i.innerHTML = e;
}
let Gn;
function kh() {
  const i = Le(), e = ur();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
  };
}
function uc() {
  return Gn || (Gn = kh()), Gn;
}
let Wn;
function Dh({
  userAgent: i
} = {}) {
  const e = uc(), t = Le(), r = t.navigator.platform, n = i || t.navigator.userAgent, s = {
    ios: !1,
    android: !1
  }, o = t.screen.width, a = t.screen.height, l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const c = n.match(/(iPod)(.*OS\s([\d_]+))?/), d = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = r === "Win32";
  let f = r === "MacIntel";
  const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !u && f && e.touch && v.indexOf(`${o}x${a}`) >= 0 && (u = n.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), f = !1), l && !h && (s.os = "android", s.android = !0), (u || d || c) && (s.os = "ios", s.ios = !0), s;
}
function cc(i = {}) {
  return Wn || (Wn = Dh(i)), Wn;
}
let Yn;
function Ah() {
  const i = Le(), e = cc();
  let t = !1;
  function r() {
    const a = i.navigator.userAgent.toLowerCase();
    return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0;
  }
  if (r()) {
    const a = String(i.navigator.userAgent);
    if (a.includes("Version/")) {
      const [l, u] = a.split("Version/")[1].split(" ")[0].split(".").map((c) => Number(c));
      t = l < 16 || l === 16 && u < 2;
    }
  }
  const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent), s = r(), o = s || n && e.ios;
  return {
    isSafari: t || s,
    needPerspectiveFix: t,
    need3dFix: o,
    isWebView: n
  };
}
function dc() {
  return Yn || (Yn = Ah()), Yn;
}
function Sh({
  swiper: i,
  on: e,
  emit: t
}) {
  const r = Le();
  let n = null, s = null;
  const o = () => {
    !i || i.destroyed || !i.initialized || (t("beforeResize"), t("resize"));
  }, a = () => {
    !i || i.destroyed || !i.initialized || (n = new ResizeObserver((c) => {
      s = r.requestAnimationFrame(() => {
        const {
          width: d,
          height: h
        } = i;
        let f = d, v = h;
        c.forEach(({
          contentBoxSize: g,
          contentRect: w,
          target: m
        }) => {
          m && m !== i.el || (f = w ? w.width : (g[0] || g).inlineSize, v = w ? w.height : (g[0] || g).blockSize);
        }), (f !== d || v !== h) && o();
      });
    }), n.observe(i.el));
  }, l = () => {
    s && r.cancelAnimationFrame(s), n && n.unobserve && i.el && (n.unobserve(i.el), n = null);
  }, u = () => {
    !i || i.destroyed || !i.initialized || t("orientationchange");
  };
  e("init", () => {
    if (i.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", o), r.addEventListener("orientationchange", u);
  }), e("destroy", () => {
    l(), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", u);
  });
}
function Eh({
  swiper: i,
  extendParams: e,
  on: t,
  emit: r
}) {
  const n = [], s = Le(), o = (u, c = {}) => {
    const d = s.MutationObserver || s.WebkitMutationObserver, h = new d((f) => {
      if (i.__preventObserver__)
        return;
      if (f.length === 1) {
        r("observerUpdate", f[0]);
        return;
      }
      const v = function() {
        r("observerUpdate", f[0]);
      };
      s.requestAnimationFrame ? s.requestAnimationFrame(v) : s.setTimeout(v, 0);
    });
    h.observe(u, {
      attributes: typeof c.attributes > "u" ? !0 : c.attributes,
      childList: i.isElement || (typeof c.childList > "u" ? !0 : c).childList,
      characterData: typeof c.characterData > "u" ? !0 : c.characterData
    }), n.push(h);
  }, a = () => {
    if (i.params.observer) {
      if (i.params.observeParents) {
        const u = lc(i.hostEl);
        for (let c = 0; c < u.length; c += 1)
          o(u[c]);
      }
      o(i.hostEl, {
        childList: i.params.observeSlideChildren
      }), o(i.wrapperEl, {
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
var Bh = {
  on(i, e, t) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function")
      return r;
    const n = t ? "unshift" : "push";
    return i.split(" ").forEach((s) => {
      r.eventsListeners[s] || (r.eventsListeners[s] = []), r.eventsListeners[s][n](e);
    }), r;
  },
  once(i, e, t) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function")
      return r;
    function n(...s) {
      r.off(i, n), n.__emitterProxy && delete n.__emitterProxy, e.apply(r, s);
    }
    return n.__emitterProxy = e, r.on(i, n, t);
  },
  onAny(i, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof i != "function")
      return t;
    const r = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[r](i), t;
  },
  offAny(i) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
      return e;
    const t = e.eventsAnyListeners.indexOf(i);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(i, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach((r) => {
      typeof e > "u" ? t.eventsListeners[r] = [] : t.eventsListeners[r] && t.eventsListeners[r].forEach((n, s) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && t.eventsListeners[r].splice(s, 1);
      });
    }), t;
  },
  emit(...i) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
      return e;
    let t, r, n;
    return typeof i[0] == "string" || Array.isArray(i[0]) ? (t = i[0], r = i.slice(1, i.length), n = e) : (t = i[0].events, r = i[0].data, n = i[0].context || e), r.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((a) => {
        a.apply(n, [o, ...r]);
      }), e.eventsListeners && e.eventsListeners[o] && e.eventsListeners[o].forEach((a) => {
        a.apply(n, r);
      });
    }), e;
  }
};
function Th() {
  const i = this;
  let e, t;
  const r = i.el;
  typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = r.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = r.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(Rt(r, "padding-left") || 0, 10) - parseInt(Rt(r, "padding-right") || 0, 10), t = t - parseInt(Rt(r, "padding-top") || 0, 10) - parseInt(Rt(r, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
    width: e,
    height: t,
    size: i.isHorizontal() ? e : t
  }));
}
function Lh() {
  const i = this;
  function e(E, L) {
    return parseFloat(E.getPropertyValue(i.getDirectionLabel(L)) || 0);
  }
  const t = i.params, {
    wrapperEl: r,
    slidesEl: n,
    rtlTranslate: s,
    wrongRTL: o
  } = i, a = i.virtual && t.virtual.enabled, l = a ? i.virtual.slides.length : i.slides.length, u = dt(n, `.${i.params.slideClass}, swiper-slide`), c = a ? i.virtual.slides.length : u.length;
  let d = [];
  const h = [], f = [];
  let v = t.slidesOffsetBefore;
  typeof v == "function" && (v = t.slidesOffsetBefore.call(i));
  let g = t.slidesOffsetAfter;
  typeof g == "function" && (g = t.slidesOffsetAfter.call(i));
  const w = i.snapGrid.length, m = i.slidesGrid.length, b = i.size - v - g;
  let x = t.spaceBetween, _ = -v, C = 0, A = 0;
  if (typeof b > "u")
    return;
  typeof x == "string" && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * b : typeof x == "string" && (x = parseFloat(x)), i.virtualSize = -x - v - g, u.forEach((E) => {
    s ? E.style.marginLeft = "" : E.style.marginRight = "", E.style.marginBottom = "", E.style.marginTop = "";
  }), t.centeredSlides && t.cssMode && (gr(r, "--swiper-centered-offset-before", ""), gr(r, "--swiper-centered-offset-after", "")), t.cssMode && (gr(r, "--swiper-slides-offset-before", `${v}px`), gr(r, "--swiper-slides-offset-after", `${g}px`));
  const k = t.grid && t.grid.rows > 1 && i.grid;
  k ? i.grid.initSlides(u) : i.grid && i.grid.unsetSlides();
  let y;
  const D = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((E) => typeof t.breakpoints[E].slidesPerView < "u").length > 0;
  for (let E = 0; E < c; E += 1) {
    y = 0;
    const L = u[E];
    if (!(L && (k && i.grid.updateSlide(E, L, u), Rt(L, "display") === "none"))) {
      if (a && t.slidesPerView === "auto")
        t.virtual.slidesPerViewAutoSlideSize && (y = t.virtual.slidesPerViewAutoSlideSize), y && L && (t.roundLengths && (y = Math.floor(y)), L.style[i.getDirectionLabel("width")] = `${y}px`);
      else if (t.slidesPerView === "auto") {
        D && (L.style[i.getDirectionLabel("width")] = "");
        const T = getComputedStyle(L), F = L.style.transform, N = L.style.webkitTransform;
        if (F && (L.style.transform = "none"), N && (L.style.webkitTransform = "none"), t.roundLengths)
          y = i.isHorizontal() ? Ss(L, "width", !0) : Ss(L, "height", !0);
        else {
          const O = e(T, "width"), q = e(T, "padding-left"), R = e(T, "padding-right"), S = e(T, "margin-left"), B = e(T, "margin-right"), P = T.getPropertyValue("box-sizing");
          if (P && P === "border-box")
            y = O + S + B;
          else {
            const {
              clientWidth: V,
              offsetWidth: U
            } = L;
            y = O + q + R + S + B + (U - V);
          }
        }
        F && (L.style.transform = F), N && (L.style.webkitTransform = N), t.roundLengths && (y = Math.floor(y));
      } else
        y = (b - (t.slidesPerView - 1) * x) / t.slidesPerView, t.roundLengths && (y = Math.floor(y)), L && (L.style[i.getDirectionLabel("width")] = `${y}px`);
      L && (L.swiperSlideSize = y), f.push(y), t.centeredSlides ? (_ = _ + y / 2 + C / 2 + x, C === 0 && E !== 0 && (_ = _ - b / 2 - x), E === 0 && (_ = _ - b / 2 - x), Math.abs(_) < 1 / 1e3 && (_ = 0), t.roundLengths && (_ = Math.floor(_)), A % t.slidesPerGroup === 0 && d.push(_), h.push(_)) : (t.roundLengths && (_ = Math.floor(_)), (A - Math.min(i.params.slidesPerGroupSkip, A)) % i.params.slidesPerGroup === 0 && d.push(_), h.push(_), _ = _ + y + x), i.virtualSize += y + x, C = y, A += 1;
    }
  }
  if (i.virtualSize = Math.max(i.virtualSize, b) + g, s && o && (t.effect === "slide" || t.effect === "coverflow") && (r.style.width = `${i.virtualSize + x}px`), t.setWrapperSize && (r.style[i.getDirectionLabel("width")] = `${i.virtualSize + x}px`), k && i.grid.updateWrapperSize(y, d), !t.centeredSlides) {
    const E = t.slidesPerView !== "auto" && t.slidesPerView % 1 !== 0, L = t.snapToSlideEdge && !t.loop && (t.slidesPerView === "auto" || E);
    let T = d.length;
    if (L) {
      let N;
      if (t.slidesPerView === "auto") {
        N = 1;
        let O = 0;
        for (let q = f.length - 1; q >= 0 && (O += f[q] + (q < f.length - 1 ? x : 0), O <= b); q -= 1)
          N = f.length - q;
      } else
        N = Math.floor(t.slidesPerView);
      T = Math.max(c - N, 0);
    }
    const F = [];
    for (let N = 0; N < d.length; N += 1) {
      let O = d[N];
      t.roundLengths && (O = Math.floor(O)), L ? N <= T && F.push(O) : d[N] <= i.virtualSize - b && F.push(O);
    }
    d = F, Math.floor(i.virtualSize - b) - Math.floor(d[d.length - 1]) > 1 && (L || d.push(i.virtualSize - b));
  }
  if (a && t.loop) {
    const E = f[0] + x;
    if (t.slidesPerGroup > 1) {
      const L = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup), T = E * t.slidesPerGroup;
      for (let F = 0; F < L; F += 1)
        d.push(d[d.length - 1] + T);
    }
    for (let L = 0; L < i.virtual.slidesBefore + i.virtual.slidesAfter; L += 1)
      t.slidesPerGroup === 1 && d.push(d[d.length - 1] + E), h.push(h[h.length - 1] + E), i.virtualSize += E;
  }
  if (d.length === 0 && (d = [0]), x !== 0) {
    const E = i.isHorizontal() && s ? "marginLeft" : i.getDirectionLabel("marginRight");
    u.filter((L, T) => !t.cssMode || t.loop ? !0 : T !== u.length - 1).forEach((L) => {
      L.style[E] = `${x}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let E = 0;
    f.forEach((T) => {
      E += T + (x || 0);
    }), E -= x;
    const L = E > b ? E - b : 0;
    d = d.map((T) => T <= 0 ? -v : T > L ? L + g : T);
  }
  if (t.centerInsufficientSlides) {
    let E = 0;
    if (f.forEach((L) => {
      E += L + (x || 0);
    }), E -= x, E < b) {
      const L = (b - E) / 2;
      d.forEach((T, F) => {
        d[F] = T - L;
      }), h.forEach((T, F) => {
        h[F] = T + L;
      });
    }
  }
  if (Object.assign(i, {
    slides: u,
    snapGrid: d,
    slidesGrid: h,
    slidesSizesGrid: f
  }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    gr(r, "--swiper-centered-offset-before", `${-d[0]}px`), gr(r, "--swiper-centered-offset-after", `${i.size / 2 - f[f.length - 1] / 2}px`);
    const E = -i.snapGrid[0], L = -i.slidesGrid[0];
    i.snapGrid = i.snapGrid.map((T) => T + E), i.slidesGrid = i.slidesGrid.map((T) => T + L);
  }
  if (c !== l && i.emit("slidesLengthChange"), d.length !== w && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), h.length !== m && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const E = `${t.containerModifierClass}backface-hidden`, L = i.el.classList.contains(E);
    c <= t.maxBackfaceHiddenSlides ? L || i.el.classList.add(E) : L && i.el.classList.remove(E);
  }
}
function Fh(i) {
  const e = this, t = [], r = e.virtual && e.params.virtual.enabled;
  let n = 0, s;
  typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
  const o = (a) => r ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((a) => {
        t.push(a);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const a = e.activeIndex + s;
        if (a > e.slides.length && !r)
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
function Nh() {
  const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
  for (let r = 0; r < e.length; r += 1)
    e[r].swiperSlideOffset = (i.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) - t - i.cssOverflowAdjustment();
}
const za = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function Oh(i = this && this.translate || 0) {
  const e = this, t = e.params, {
    slides: r,
    rtlTranslate: n,
    snapGrid: s
  } = e;
  if (r.length === 0)
    return;
  typeof r[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -i;
  n && (o = i), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let a = t.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
  for (let l = 0; l < r.length; l += 1) {
    const u = r[l];
    let c = u.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d = (o + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + a), h = (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + a), f = -(o - c), v = f + e.slidesSizesGrid[l], g = f >= 0 && f <= e.size - e.slidesSizesGrid[l], w = f >= 0 && f < e.size - 1 || v > 1 && v <= e.size || f <= 0 && v >= e.size;
    w && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)), za(u, w, t.slideVisibleClass), za(u, g, t.slideFullyVisibleClass), u.progress = n ? -d : d, u.originalProgress = n ? -h : h;
  }
}
function Mh(i) {
  const e = this;
  if (typeof i > "u") {
    const c = e.rtlTranslate ? -1 : 1;
    i = e && e.translate && e.translate * c || 0;
  }
  const t = e.params, r = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: s,
    isEnd: o,
    progressLoop: a
  } = e;
  const l = s, u = o;
  if (r === 0)
    n = 0, s = !0, o = !0;
  else {
    n = (i - e.minTranslate()) / r;
    const c = Math.abs(i - e.minTranslate()) < 1, d = Math.abs(i - e.maxTranslate()) < 1;
    s = c || n <= 0, o = d || n >= 1, c && (n = 0), d && (n = 1);
  }
  if (t.loop) {
    const c = e.getSlideIndexByData(0), d = e.getSlideIndexByData(e.slides.length - 1), h = e.slidesGrid[c], f = e.slidesGrid[d], v = e.slidesGrid[e.slidesGrid.length - 1], g = Math.abs(i);
    g >= h ? a = (g - h) / v : a = (g + v - f) / v, a > 1 && (a -= 1);
  }
  Object.assign(e, {
    progress: n,
    progressLoop: a,
    isBeginning: s,
    isEnd: o
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), s && !l && e.emit("reachBeginning toEdge"), o && !u && e.emit("reachEnd toEdge"), (l && !s || u && !o) && e.emit("fromEdge"), e.emit("progress", n);
}
const Kn = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function Ph() {
  const i = this, {
    slides: e,
    params: t,
    slidesEl: r,
    activeIndex: n
  } = i, s = i.virtual && t.virtual.enabled, o = i.grid && t.grid && t.grid.rows > 1, a = (d) => dt(r, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
  let l, u, c;
  if (s)
    if (t.loop) {
      let d = n - i.virtual.slidesBefore;
      d < 0 && (d = i.virtual.slides.length + d), d >= i.virtual.slides.length && (d -= i.virtual.slides.length), l = a(`[data-swiper-slide-index="${d}"]`);
    } else
      l = a(`[data-swiper-slide-index="${n}"]`);
  else
    o ? (l = e.find((d) => d.column === n), c = e.find((d) => d.column === n + 1), u = e.find((d) => d.column === n - 1)) : l = e[n];
  l && (o || (c = Ch(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c && (c = e[0]), u = yh(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !u === 0 && (u = e[e.length - 1]))), e.forEach((d) => {
    Kn(d, d === l, t.slideActiveClass), Kn(d, d === c, t.slideNextClass), Kn(d, d === u, t.slidePrevClass);
  }), i.emitSlidesClasses();
}
const ji = (i, e) => {
  if (!i || i.destroyed || !i.params)
    return;
  const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, r = e.closest(t());
  if (r) {
    let n = r.querySelector(`.${i.params.lazyPreloaderClass}`);
    !n && i.isElement && (r.shadowRoot ? n = r.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      r.shadowRoot && (n = r.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), n && !n.lazyPreloaderManaged && n.remove());
    })), n && !n.lazyPreloaderManaged && n.remove();
  }
}, Zn = (i, e) => {
  if (!i.slides[e])
    return;
  const t = i.slides[e].querySelector('[loading="lazy"]');
  t && t.removeAttribute("loading");
}, Es = (i) => {
  if (!i || i.destroyed || !i.params)
    return;
  let e = i.params.lazyPreloadPrevNext;
  const t = i.slides.length;
  if (!t || !e || e < 0)
    return;
  e = Math.min(e, t);
  const r = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView), n = i.activeIndex;
  if (i.params.grid && i.params.grid.rows > 1) {
    const o = n, a = [o - e];
    a.push(...Array.from({
      length: e
    }).map((l, u) => o + r + u)), i.slides.forEach((l, u) => {
      a.includes(l.column) && Zn(i, u);
    });
    return;
  }
  const s = n + r - 1;
  if (i.params.rewind || i.params.loop)
    for (let o = n - e; o <= s + e; o += 1) {
      const a = (o % t + t) % t;
      (a < n || a > s) && Zn(i, a);
    }
  else
    for (let o = Math.max(n - e, 0); o <= Math.min(s + e, t - 1); o += 1)
      o !== n && (o > s || o < n) && Zn(i, o);
};
function Ih(i) {
  const {
    slidesGrid: e,
    params: t
  } = i, r = i.rtlTranslate ? i.translate : -i.translate;
  let n;
  for (let s = 0; s < e.length; s += 1)
    typeof e[s + 1] < "u" ? r >= e[s] && r < e[s + 1] - (e[s + 1] - e[s]) / 2 ? n = s : r >= e[s] && r < e[s + 1] && (n = s + 1) : r >= e[s] && (n = s);
  return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function Rh(i) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: r,
    params: n,
    activeIndex: s,
    realIndex: o,
    snapIndex: a
  } = e;
  let l = i, u;
  const c = (f) => {
    let v = f - e.virtual.slidesBefore;
    return v < 0 && (v = e.virtual.slides.length + v), v >= e.virtual.slides.length && (v -= e.virtual.slides.length), v;
  };
  if (typeof l > "u" && (l = Ih(e)), r.indexOf(t) >= 0)
    u = r.indexOf(t);
  else {
    const f = Math.min(n.slidesPerGroupSkip, l);
    u = f + Math.floor((l - f) / n.slidesPerGroup);
  }
  if (u >= r.length && (u = r.length - 1), l === s && !e.params.loop) {
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
    const f = e.slides.find((g) => g.column === l);
    let v = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(v) && (v = Math.max(e.slides.indexOf(f), 0)), h = Math.floor(v / n.grid.rows);
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
  }), e.initialized && Es(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit("realIndexChange"), e.emit("slideChange"));
}
function zh(i, e) {
  const t = this, r = t.params;
  let n = i.closest(`.${r.slideClass}, swiper-slide`);
  !n && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach((a) => {
    !n && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (n = a);
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
  r.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var qh = {
  updateSize: Th,
  updateSlides: Lh,
  updateAutoHeight: Fh,
  updateSlidesOffset: Nh,
  updateSlidesProgress: Oh,
  updateProgress: Mh,
  updateSlidesClasses: Ph,
  updateActiveIndex: Rh,
  updateClickedSlide: zh
};
function $h(i = this.isHorizontal() ? "x" : "y") {
  const e = this, {
    params: t,
    rtlTranslate: r,
    translate: n,
    wrapperEl: s
  } = e;
  if (t.virtualTranslate)
    return r ? -n : n;
  if (t.cssMode)
    return n;
  let o = vh(s, i);
  return o += e.cssOverflowAdjustment(), r && (o = -o), o || 0;
}
function Vh(i, e) {
  const t = this, {
    rtlTranslate: r,
    params: n,
    wrapperEl: s,
    progress: o
  } = t;
  let a = 0, l = 0;
  const u = 0;
  t.isHorizontal() ? a = r ? -i : i : l = i, n.roundLengths && (a = Math.floor(a), l = Math.floor(l)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? a : l, n.cssMode ? s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -a : -l : n.virtualTranslate || (t.isHorizontal() ? a -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(), s.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`);
  let c;
  const d = t.maxTranslate() - t.minTranslate();
  d === 0 ? c = 0 : c = (i - t.minTranslate()) / d, c !== o && t.updateProgress(i), t.emit("setTranslate", t.translate, e);
}
function jh() {
  return -this.snapGrid[0];
}
function Uh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Hh(i = 0, e = this.params.speed, t = !0, r = !0, n) {
  const s = this, {
    params: o,
    wrapperEl: a
  } = s;
  if (s.animating && o.preventInteractionOnTransition)
    return !1;
  const l = s.minTranslate(), u = s.maxTranslate();
  let c;
  if (r && i > l ? c = l : r && i < u ? c = u : c = i, s.updateProgress(c), o.cssMode) {
    const d = s.isHorizontal();
    if (e === 0)
      a[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return ac({
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
var Gh = {
  getTranslate: $h,
  setTranslate: Vh,
  minTranslate: jh,
  maxTranslate: Uh,
  translateTo: Hh
};
function Wh(i, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e);
}
function pc({
  swiper: i,
  runCallbacks: e,
  direction: t,
  step: r
}) {
  const {
    activeIndex: n,
    previousIndex: s
  } = i;
  let o = t;
  o || (n > s ? o = "next" : n < s ? o = "prev" : o = "reset"), i.emit(`transition${r}`), e && o === "reset" ? i.emit(`slideResetTransition${r}`) : e && n !== s && (i.emit(`slideChangeTransition${r}`), o === "next" ? i.emit(`slideNextTransition${r}`) : i.emit(`slidePrevTransition${r}`));
}
function Yh(i = !0, e) {
  const t = this, {
    params: r
  } = t;
  r.cssMode || (r.autoHeight && t.updateAutoHeight(), pc({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "Start"
  }));
}
function Kh(i = !0, e) {
  const t = this, {
    params: r
  } = t;
  t.animating = !1, !r.cssMode && (t.setTransition(0), pc({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "End"
  }));
}
var Zh = {
  setTransition: Wh,
  transitionStart: Yh,
  transitionEnd: Kh
};
function Xh(i = 0, e, t = !0, r, n) {
  typeof i == "string" && (i = parseInt(i, 10));
  const s = this;
  let o = i;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: h,
    wrapperEl: f,
    enabled: v
  } = s;
  if (!v && !r && !n || s.destroyed || s.animating && a.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = s.params.speed);
  const g = Math.min(s.params.slidesPerGroupSkip, o);
  let w = g + Math.floor((o - g) / s.params.slidesPerGroup);
  w >= l.length && (w = l.length - 1);
  const m = -l[w];
  if (a.normalizeSlideIndex)
    for (let k = 0; k < u.length; k += 1) {
      const y = -Math.floor(m * 100), D = Math.floor(u[k] * 100), E = Math.floor(u[k + 1] * 100);
      typeof u[k + 1] < "u" ? y >= D && y < E - (E - D) / 2 ? o = k : y >= D && y < E && (o = k + 1) : y >= D && (o = k);
    }
  if (s.initialized && o !== d && (!s.allowSlideNext && (h ? m > s.translate && m > s.minTranslate() : m < s.translate && m < s.minTranslate()) || !s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (d || 0) !== o))
    return !1;
  o !== (c || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(m);
  let b;
  o > d ? b = "next" : o < d ? b = "prev" : b = "reset";
  const x = s.virtual && s.params.virtual.enabled;
  if (!(x && n) && (h && -m === s.translate || !h && m === s.translate))
    return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), a.effect !== "slide" && s.setTranslate(m), b !== "reset" && (s.transitionStart(t, b), s.transitionEnd(t, b)), !1;
  if (a.cssMode) {
    const k = s.isHorizontal(), y = h ? m : -m;
    if (e === 0)
      x && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        f[k ? "scrollLeft" : "scrollTop"] = y;
      })) : f[k ? "scrollLeft" : "scrollTop"] = y, x && requestAnimationFrame(() => {
        s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1;
      });
    else {
      if (!s.support.smoothScroll)
        return ac({
          swiper: s,
          targetPosition: y,
          side: k ? "left" : "top"
        }), !0;
      f.scrollTo({
        [k ? "left" : "top"]: y,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const A = dc().isSafari;
  return x && !n && A && s.isElement && s.virtual.update(!1, !1, o), s.setTransition(e), s.setTranslate(m), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, r), s.transitionStart(t, b), e === 0 ? s.transitionEnd(t, b) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(y) {
    !s || s.destroyed || y.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(t, b));
  }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0;
}
function Jh(i = 0, e, t = !0, r) {
  typeof i == "string" && (i = parseInt(i, 10));
  const n = this;
  if (n.destroyed)
    return;
  typeof e > "u" && (e = n.params.speed);
  const s = n.grid && n.params.grid && n.params.grid.rows > 1;
  let o = i;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled)
      o = o + n.virtual.slidesBefore;
    else {
      let a;
      if (s) {
        const g = o * n.params.grid.rows;
        a = n.slides.find((w) => w.getAttribute("data-swiper-slide-index") * 1 === g).column;
      } else
        a = n.getSlideIndexByData(o);
      const l = s ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, {
        centeredSlides: u,
        slidesOffsetBefore: c,
        slidesOffsetAfter: d
      } = n.params, h = u || !!c || !!d;
      let f = n.params.slidesPerView;
      f === "auto" ? f = n.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(n.params.slidesPerView, 10)), h && f % 2 === 0 && (f = f + 1));
      let v = l - a < f;
      if (h && (v = v || a < Math.ceil(f / 2)), r && h && n.params.slidesPerView !== "auto" && !s && (v = !1), v) {
        const g = h ? a < n.activeIndex ? "prev" : "next" : a - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === "next" ? a + 1 : a - l + 1,
          slideRealIndex: g === "next" ? n.realIndex : void 0
        });
      }
      if (s) {
        const g = o * n.params.grid.rows;
        o = n.slides.find((w) => w.getAttribute("data-swiper-slide-index") * 1 === g).column;
      } else
        o = n.getSlideIndexByData(o);
    }
  return requestAnimationFrame(() => {
    n.slideTo(o, e, t, r);
  }), n;
}
function Qh(i, e = !0, t) {
  const r = this, {
    enabled: n,
    params: s,
    animating: o
  } = r;
  if (!n || r.destroyed)
    return r;
  typeof i > "u" && (i = r.params.speed);
  let a = s.slidesPerGroup;
  s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : a, u = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !u && s.loopPreventsSliding)
      return !1;
    if (r.loopFix({
      direction: "next"
    }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && s.cssMode)
      return requestAnimationFrame(() => {
        r.slideTo(r.activeIndex + l, i, e, t);
      }), !0;
  }
  return s.rewind && r.isEnd ? r.slideTo(0, i, e, t) : r.slideTo(r.activeIndex + l, i, e, t);
}
function e1(i, e = !0, t) {
  const r = this, {
    params: n,
    snapGrid: s,
    slidesGrid: o,
    rtlTranslate: a,
    enabled: l,
    animating: u
  } = r;
  if (!l || r.destroyed)
    return r;
  typeof i > "u" && (i = r.params.speed);
  const c = r.virtual && n.virtual.enabled;
  if (n.loop) {
    if (u && !c && n.loopPreventsSliding)
      return !1;
    r.loopFix({
      direction: "prev"
    }), r._clientLeft = r.wrapperEl.clientLeft;
  }
  const d = a ? r.translate : -r.translate;
  function h(b) {
    return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b);
  }
  const f = h(d), v = s.map((b) => h(b)), g = n.freeMode && n.freeMode.enabled;
  let w = s[v.indexOf(f) - 1];
  if (typeof w > "u" && (n.cssMode || g)) {
    let b;
    s.forEach((x, _) => {
      f >= x && (b = _);
    }), typeof b < "u" && (w = g ? s[b] : s[b > 0 ? b - 1 : b]);
  }
  let m = 0;
  if (typeof w < "u" && (m = o.indexOf(w), m < 0 && (m = r.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (m = m - r.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), n.rewind && r.isBeginning) {
    const b = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
    return r.slideTo(b, i, e, t);
  } else if (n.loop && r.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      r.slideTo(m, i, e, t);
    }), !0;
  return r.slideTo(m, i, e, t);
}
function t1(i, e = !0, t) {
  const r = this;
  if (!r.destroyed)
    return typeof i > "u" && (i = r.params.speed), r.slideTo(r.activeIndex, i, e, t);
}
function r1(i, e = !0, t, r = 0.5) {
  const n = this;
  if (n.destroyed)
    return;
  typeof i > "u" && (i = n.params.speed);
  let s = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, s), a = o + Math.floor((s - o) / n.params.slidesPerGroup), l = n.rtlTranslate ? n.translate : -n.translate;
  if (l >= n.snapGrid[a]) {
    const u = n.snapGrid[a], c = n.snapGrid[a + 1];
    l - u > (c - u) * r && (s += n.params.slidesPerGroup);
  } else {
    const u = n.snapGrid[a - 1], c = n.snapGrid[a];
    l - u <= (c - u) * r && (s -= n.params.slidesPerGroup);
  }
  return s = Math.max(s, 0), s = Math.min(s, n.slidesGrid.length - 1), n.slideTo(s, i, e, t);
}
function i1() {
  const i = this;
  if (i.destroyed)
    return;
  const {
    params: e,
    slidesEl: t
  } = i, r = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
  let n = i.getSlideIndexWhenGrid(i.clickedIndex), s;
  const o = i.isElement ? "swiper-slide" : `.${e.slideClass}`, a = i.grid && i.params.grid && i.params.grid.rows > 1;
  if (e.loop) {
    if (i.animating)
      return;
    s = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? i.slideToLoop(s) : n > (a ? (i.slides.length - r) / 2 - (i.params.grid.rows - 1) : i.slides.length - r) ? (i.loopFix(), n = i.getSlideIndex(dt(t, `${o}[data-swiper-slide-index="${s}"]`)[0]), oc(() => {
      i.slideTo(n);
    })) : i.slideTo(n);
  } else
    i.slideTo(n);
}
var n1 = {
  slideTo: Xh,
  slideToLoop: Jh,
  slideNext: Qh,
  slidePrev: e1,
  slideReset: t1,
  slideToClosest: r1,
  slideToClickedSlide: i1
};
function s1(i, e) {
  const t = this, {
    params: r,
    slidesEl: n
  } = t;
  if (!r.loop || t.virtual && t.params.virtual.enabled)
    return;
  const s = () => {
    dt(n, `.${r.slideClass}, swiper-slide`).forEach((v, g) => {
      v.setAttribute("data-swiper-slide-index", g);
    });
  }, o = () => {
    const f = dt(n, `.${r.slideBlankClass}`);
    f.forEach((v) => {
      v.remove();
    }), f.length > 0 && (t.recalcSlides(), t.updateSlides());
  }, a = t.grid && r.grid && r.grid.rows > 1;
  r.loopAddBlankSlides && (r.slidesPerGroup > 1 || a) && o();
  const l = r.slidesPerGroup * (a ? r.grid.rows : 1), u = t.slides.length % l !== 0, c = a && t.slides.length % r.grid.rows !== 0, d = (f) => {
    for (let v = 0; v < f; v += 1) {
      const g = t.isElement ? fn("swiper-slide", [r.slideBlankClass]) : fn("div", [r.slideClass, r.slideBlankClass]);
      t.slidesEl.append(g);
    }
  };
  if (u) {
    if (r.loopAddBlankSlides) {
      const f = l - t.slides.length % l;
      d(f), t.recalcSlides(), t.updateSlides();
    } else
      pn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else if (c) {
    if (r.loopAddBlankSlides) {
      const f = r.grid.rows - t.slides.length % r.grid.rows;
      d(f), t.recalcSlides(), t.updateSlides();
    } else
      pn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else
    s();
  const h = r.centeredSlides || !!r.slidesOffsetBefore || !!r.slidesOffsetAfter;
  t.loopFix({
    slideRealIndex: i,
    direction: h ? void 0 : "next",
    initial: e
  });
}
function o1({
  slideRealIndex: i,
  slideTo: e = !0,
  direction: t,
  setTranslate: r,
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
    centeredSlides: v,
    slidesOffsetBefore: g,
    slidesOffsetAfter: w,
    initialSlide: m
  } = f, b = v || !!g || !!w;
  if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && f.virtual.enabled) {
    e && (!b && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : b && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)), l.allowSlidePrev = c, l.allowSlideNext = d, l.emit("loopFix");
    return;
  }
  let x = f.slidesPerView;
  x === "auto" ? x = l.slidesPerViewDynamic() : (x = Math.ceil(parseFloat(f.slidesPerView, 10)), b && x % 2 === 0 && (x = x + 1));
  const _ = f.slidesPerGroupAuto ? x : f.slidesPerGroup;
  let C = b ? Math.max(_, Math.ceil(x / 2)) : _;
  C % _ !== 0 && (C += _ - C % _), C += f.loopAdditionalSlides, l.loopedSlides = C;
  const A = l.grid && f.grid && f.grid.rows > 1;
  u.length < x + C || l.params.effect === "cards" && u.length < x + C * 2 ? pn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : A && f.grid.fill === "row" && pn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const k = [], y = [], D = A ? Math.ceil(u.length / f.grid.rows) : u.length, E = s && D - m < x && !b;
  let L = E ? m : l.activeIndex;
  typeof n > "u" ? n = l.getSlideIndex(u.find((S) => S.classList.contains(f.slideActiveClass))) : L = n;
  const T = t === "next" || !t, F = t === "prev" || !t;
  let N = 0, O = 0;
  const R = (A ? u[n].column : n) + (b && typeof r > "u" ? -x / 2 + 0.5 : 0);
  if (R < C) {
    N = Math.max(C - R, _);
    for (let S = 0; S < C - R; S += 1) {
      const B = S - Math.floor(S / D) * D;
      if (A) {
        const P = D - B - 1;
        for (let V = u.length - 1; V >= 0; V -= 1)
          u[V].column === P && k.push(V);
      } else
        k.push(D - B - 1);
    }
  } else if (R + x > D - C) {
    O = Math.max(R - (D - C * 2), _), E && (O = Math.max(O, x - D + m + 1));
    for (let S = 0; S < O; S += 1) {
      const B = S - Math.floor(S / D) * D;
      A ? u.forEach((P, V) => {
        P.column === B && y.push(V);
      }) : y.push(B);
    }
  }
  if (l.__preventObserver__ = !0, requestAnimationFrame(() => {
    l.__preventObserver__ = !1;
  }), l.params.effect === "cards" && u.length < x + C * 2 && (y.includes(n) && y.splice(y.indexOf(n), 1), k.includes(n) && k.splice(k.indexOf(n), 1)), F && k.forEach((S) => {
    u[S].swiperLoopMoveDOM = !0, h.prepend(u[S]), u[S].swiperLoopMoveDOM = !1;
  }), T && y.forEach((S) => {
    u[S].swiperLoopMoveDOM = !0, h.append(u[S]), u[S].swiperLoopMoveDOM = !1;
  }), l.recalcSlides(), f.slidesPerView === "auto" ? l.updateSlides() : A && (k.length > 0 && F || y.length > 0 && T) && l.slides.forEach((S, B) => {
    l.grid.updateSlide(B, S, l.slides);
  }), f.watchSlidesProgress && l.updateSlidesOffset(), e) {
    if (k.length > 0 && F) {
      if (typeof i > "u") {
        const S = l.slidesGrid[L], P = l.slidesGrid[L + N] - S;
        a ? l.setTranslate(l.translate - P) : (l.slideTo(L + Math.ceil(N), 0, !1, !0), r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - P, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - P));
      } else if (r) {
        const S = A ? k.length / f.grid.rows : k.length;
        l.slideTo(l.activeIndex + S, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate;
      }
    } else if (y.length > 0 && T)
      if (typeof i > "u") {
        const S = l.slidesGrid[L], P = l.slidesGrid[L - O] - S;
        a ? l.setTranslate(l.translate - P) : (l.slideTo(L - O, 0, !1, !0), r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - P, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - P));
      } else {
        const S = A ? y.length / f.grid.rows : y.length;
        l.slideTo(l.activeIndex - S, 0, !1, !0);
      }
  }
  if (l.allowSlidePrev = c, l.allowSlideNext = d, l.controller && l.controller.control && !o) {
    const S = {
      slideRealIndex: i,
      direction: t,
      setTranslate: r,
      activeSlideIndex: n,
      byController: !0
    };
    Array.isArray(l.controller.control) ? l.controller.control.forEach((B) => {
      !B.destroyed && B.params.loop && B.loopFix({
        ...S,
        slideTo: B.params.slidesPerView === f.slidesPerView ? e : !1
      });
    }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
      ...S,
      slideTo: l.controller.control.params.slidesPerView === f.slidesPerView ? e : !1
    });
  }
  l.emit("loopFix");
}
function a1() {
  const i = this, {
    params: e,
    slidesEl: t
  } = i;
  if (!e.loop || !t || i.virtual && i.params.virtual.enabled)
    return;
  i.recalcSlides();
  const r = [];
  i.slides.forEach((n) => {
    const s = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    r[s] = n;
  }), i.slides.forEach((n) => {
    n.removeAttribute("data-swiper-slide-index");
  }), r.forEach((n) => {
    t.append(n);
  }), i.recalcSlides(), i.slideTo(i.realIndex, 0);
}
var l1 = {
  loopCreate: s1,
  loopFix: o1,
  loopDestroy: a1
};
function u1(i) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function c1() {
  const i = this;
  i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
    i.__preventObserver__ = !1;
  }));
}
var d1 = {
  setGrabCursor: u1,
  unsetGrabCursor: c1
};
function p1(i, e = this) {
  function t(r) {
    if (!r || r === ur() || r === Le())
      return null;
    r.assignedSlot && (r = r.assignedSlot);
    const n = r.closest(i);
    return !n && !r.getRootNode ? null : n || t(r.getRootNode().host);
  }
  return t(e);
}
function qa(i, e, t) {
  const r = Le(), {
    params: n
  } = i, s = n.edgeSwipeDetection, o = n.edgeSwipeThreshold;
  return s && (t <= o || t >= r.innerWidth - o) ? s === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function f1(i) {
  const e = this, t = ur();
  let r = i;
  r.originalEvent && (r = r.originalEvent);
  const n = e.touchEventsData;
  if (r.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== r.pointerId)
      return;
    n.pointerId = r.pointerId;
  } else
    r.type === "touchstart" && r.targetTouches.length === 1 && (n.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    qa(e, r, r.targetTouches[0].pageX);
    return;
  }
  const {
    params: s,
    touches: o,
    enabled: a
  } = e;
  if (!a || !s.simulateTouch && r.pointerType === "mouse" || e.animating && s.preventInteractionOnTransition)
    return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = r.target;
  if (s.touchEventsTarget === "wrapper" && !_h(l, e.wrapperEl) || "which" in r && r.which === 3 || "button" in r && r.button > 0 || n.isTouched && n.isMoved)
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "", c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (l = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, h = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (h ? p1(d, l) : l.closest(d))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler))
    return;
  o.currentX = r.pageX, o.currentY = r.pageY;
  const f = o.currentX, v = o.currentY;
  if (!qa(e, r, f))
    return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = f, o.startY = v, n.touchStartTime = dn(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (n.allowThresholdMove = !1);
  let g = !0;
  l.matches(n.focusableElements) && (g = !1, l.nodeName === "SELECT" && (n.isTouched = !1)), t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== l && (r.pointerType === "mouse" || r.pointerType !== "mouse" && !l.matches(n.focusableElements)) && t.activeElement.blur();
  const w = g && e.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || w) && !l.isContentEditable && r.preventDefault(), s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", r);
}
function h1(i) {
  const e = ur(), t = this, r = t.touchEventsData, {
    params: n,
    touches: s,
    rtlTranslate: o,
    enabled: a
  } = t;
  if (!a || !n.simulateTouch && i.pointerType === "mouse")
    return;
  let l = i;
  if (l.originalEvent && (l = l.originalEvent), l.type === "pointermove" && (r.touchId !== null || l.pointerId !== r.pointerId))
    return;
  let u;
  if (l.type === "touchmove") {
    if (u = [...l.changedTouches].find((A) => A.identifier === r.touchId), !u || u.identifier !== r.touchId)
      return;
  } else
    u = l;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  const c = u.pageX, d = u.pageY;
  if (l.preventedByNestedSwiper) {
    s.startX = c, s.startY = d;
    return;
  }
  if (!t.allowTouchMove) {
    l.target.matches(r.focusableElements) || (t.allowClick = !1), r.isTouched && (Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d
    }), r.touchStartTime = dn());
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop)
    if (t.isVertical()) {
      if (d < s.startY && t.translate <= t.maxTranslate() || d > s.startY && t.translate >= t.minTranslate()) {
        r.isTouched = !1, r.isMoved = !1;
        return;
      }
    } else {
      if (o && (c > s.startX && -t.translate <= t.maxTranslate() || c < s.startX && -t.translate >= t.minTranslate()))
        return;
      if (!o && (c < s.startX && t.translate <= t.maxTranslate() || c > s.startX && t.translate >= t.minTranslate()))
        return;
    }
  if (e.activeElement && e.activeElement.matches(r.focusableElements) && e.activeElement !== l.target && l.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && l.target === e.activeElement && l.target.matches(r.focusableElements)) {
    r.isMoved = !0, t.allowClick = !1;
    return;
  }
  r.allowTouchCallbacks && t.emit("touchMove", l), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = c, s.currentY = d;
  const h = s.currentX - s.startX, f = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(h ** 2 + f ** 2) < t.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let A;
    t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : h * h + f * f >= 25 && (A = Math.atan2(Math.abs(f), Math.abs(h)) * 180 / Math.PI, r.isScrolling = t.isHorizontal() ? A > n.touchAngle : 90 - A > n.touchAngle);
  }
  if (r.isScrolling && t.emit("touchMoveOpposite", l), typeof r.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (r.startMoving = !0), r.isScrolling || l.type === "touchmove" && r.preventTouchMoveFromPointerMove) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving)
    return;
  t.allowClick = !1, !n.cssMode && l.cancelable && l.preventDefault(), n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
  let v = t.isHorizontal() ? h : f, g = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  n.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), g = Math.abs(g) * (o ? 1 : -1)), s.diff = v, v *= n.touchRatio, o && (v = -v, g = -g);
  const w = t.touchesDirection;
  t.swipeDirection = v > 0 ? "prev" : "next", t.touchesDirection = g > 0 ? "prev" : "next";
  const m = t.params.loop && !n.cssMode, b = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!r.isMoved) {
    if (m && b && t.loopFix({
      direction: t.swipeDirection
    }), r.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const A = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(A);
    }
    r.allowMomentumBounce = !1, n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", l);
  }
  let x;
  if ((/* @__PURE__ */ new Date()).getTime(), n._loopSwapReset !== !1 && r.isMoved && r.allowThresholdMove && w !== t.touchesDirection && m && b && Math.abs(v) >= 1) {
    Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: r.currentTranslate
    }), r.loopSwapReset = !0, r.startTranslate = r.currentTranslate;
    return;
  }
  t.emit("sliderMove", l), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
  let _ = !0, C = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (C = 0), v > 0 ? (m && b && !x && r.allowThresholdMove && r.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (n.slidesPerView !== "auto" && t.slides.length - n.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), r.currentTranslate > t.minTranslate() && (_ = !1, n.resistance && (r.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + r.startTranslate + v) ** C))) : v < 0 && (m && b && !x && r.allowThresholdMove && r.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (n.slidesPerView !== "auto" && t.slides.length - n.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
  }), r.currentTranslate < t.maxTranslate() && (_ = !1, n.resistance && (r.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - r.startTranslate - v) ** C))), _ && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (r.currentTranslate = r.startTranslate), n.threshold > 0)
    if (Math.abs(v) > n.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && t.freeMode || n.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(r.currentTranslate), t.setTranslate(r.currentTranslate));
}
function g1(i) {
  const e = this, t = e.touchEventsData;
  let r = i;
  r.originalEvent && (r = r.originalEvent);
  let n;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (n = [...r.changedTouches].find((C) => C.identifier === t.touchId), !n || n.identifier !== t.touchId)
      return;
  } else {
    if (t.touchId !== null || r.pointerId !== t.pointerId)
      return;
    n = r;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && !(["pointercancel", "contextmenu"].includes(r.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  t.pointerId = null, t.touchId = null;
  const {
    params: o,
    touches: a,
    rtlTranslate: l,
    slidesGrid: u,
    enabled: c
  } = e;
  if (!c || !o.simulateTouch && r.pointerType === "mouse")
    return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", r), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && o.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const d = dn(), h = d - t.touchStartTime;
  if (e.allowClick) {
    const C = r.path || r.composedPath && r.composedPath();
    e.updateClickedSlide(C && C[0] || r.target, C), e.emit("tap click", r), h < 300 && d - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", r);
  }
  if (t.lastClickTime = dn(), oc(() => {
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
  const v = f >= -e.maxTranslate() && !e.params.loop;
  let g = 0, w = e.slidesSizesGrid[0];
  for (let C = 0; C < u.length; C += C < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const A = C < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[C + A] < "u" ? (v || f >= u[C] && f < u[C + A]) && (g = C, w = u[C + A] - u[C]) : (v || f >= u[C]) && (g = C, w = u[u.length - 1] - u[u.length - 2]);
  }
  let m = null, b = null;
  o.rewind && (e.isBeginning ? b = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (m = 0));
  const x = (f - u[g]) / w, _ = g < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (h > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (x >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? m : g + _) : e.slideTo(g)), e.swipeDirection === "prev" && (x > 1 - o.longSwipesRatio ? e.slideTo(g + _) : b !== null && x < 0 && Math.abs(x) > o.longSwipesRatio ? e.slideTo(b) : e.slideTo(g));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (r.target === e.navigation.nextEl || r.target === e.navigation.prevEl) ? r.target === e.navigation.nextEl ? e.slideTo(g + _) : e.slideTo(g) : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : g + _), e.swipeDirection === "prev" && e.slideTo(b !== null ? b : g));
  }
}
function $a() {
  const i = this, {
    params: e,
    el: t
  } = i;
  if (t && t.offsetWidth === 0)
    return;
  e.breakpoints && i.setBreakpoint();
  const {
    allowSlideNext: r,
    allowSlidePrev: n,
    snapGrid: s
  } = i, o = i.virtual && i.params.virtual.enabled;
  i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
  const a = o && e.loop;
  if ((e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !a) {
    const l = o ? i.virtual.slides : i.slides;
    i.slideTo(l.length - 1, 0, !1, !0);
  } else
    i.params.loop && !o ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0);
  i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
    i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
  }, 500)), i.allowSlidePrev = n, i.allowSlideNext = r, i.params.watchOverflow && s !== i.snapGrid && i.checkOverflow();
}
function m1(i) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
}
function b1() {
  const i = this, {
    wrapperEl: e,
    rtlTranslate: t,
    enabled: r
  } = i;
  if (!r)
    return;
  i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
  let n;
  const s = i.maxTranslate() - i.minTranslate();
  s === 0 ? n = 0 : n = (i.translate - i.minTranslate()) / s, n !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1);
}
function v1(i) {
  const e = this;
  ji(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function w1() {
  const i = this;
  i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
}
const fc = (i, e) => {
  const t = ur(), {
    params: r,
    el: n,
    wrapperEl: s,
    device: o
  } = i, a = !!r.nested, l = e === "on" ? "addEventListener" : "removeEventListener", u = e;
  !n || typeof n == "string" || (t[l]("touchstart", i.onDocumentTouchStart, {
    passive: !1,
    capture: a
  }), n[l]("touchstart", i.onTouchStart, {
    passive: !1
  }), n[l]("pointerdown", i.onTouchStart, {
    passive: !1
  }), t[l]("touchmove", i.onTouchMove, {
    passive: !1,
    capture: a
  }), t[l]("pointermove", i.onTouchMove, {
    passive: !1,
    capture: a
  }), t[l]("touchend", i.onTouchEnd, {
    passive: !0
  }), t[l]("pointerup", i.onTouchEnd, {
    passive: !0
  }), t[l]("pointercancel", i.onTouchEnd, {
    passive: !0
  }), t[l]("touchcancel", i.onTouchEnd, {
    passive: !0
  }), t[l]("pointerout", i.onTouchEnd, {
    passive: !0
  }), t[l]("pointerleave", i.onTouchEnd, {
    passive: !0
  }), t[l]("contextmenu", i.onTouchEnd, {
    passive: !0
  }), (r.preventClicks || r.preventClicksPropagation) && n[l]("click", i.onClick, !0), r.cssMode && s[l]("scroll", i.onScroll), r.updateOnWindowResize ? i[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $a, !0) : i[u]("observerUpdate", $a, !0), n[l]("load", i.onLoad, {
    capture: !0
  }));
};
function x1() {
  const i = this, {
    params: e
  } = i;
  i.onTouchStart = f1.bind(i), i.onTouchMove = h1.bind(i), i.onTouchEnd = g1.bind(i), i.onDocumentTouchStart = w1.bind(i), e.cssMode && (i.onScroll = b1.bind(i)), i.onClick = m1.bind(i), i.onLoad = v1.bind(i), fc(i, "on");
}
function _1() {
  fc(this, "off");
}
var y1 = {
  attachEvents: x1,
  detachEvents: _1
};
const Va = (i, e) => i.grid && e.grid && e.grid.rows > 1;
function C1() {
  const i = this, {
    realIndex: e,
    initialized: t,
    params: r,
    el: n
  } = i, s = r.breakpoints;
  if (!s || s && Object.keys(s).length === 0)
    return;
  const o = ur(), a = r.breakpointsBase === "window" || !r.breakpointsBase ? r.breakpointsBase : "container", l = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? i.el : o.querySelector(r.breakpointsBase), u = i.getBreakpoint(s, a, l);
  if (!u || i.currentBreakpoint === u)
    return;
  const d = (u in s ? s[u] : void 0) || i.originalParams, h = Va(i, r), f = Va(i, d), v = i.params.grabCursor, g = d.grabCursor, w = r.enabled;
  h && !f ? (n.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), i.emitContainerClasses()) : !h && f && (n.classList.add(`${r.containerModifierClass}grid`), (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && r.grid.fill === "column") && n.classList.add(`${r.containerModifierClass}grid-column`), i.emitContainerClasses()), v && !g ? i.unsetGrabCursor() : !v && g && i.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((A) => {
    if (typeof d[A] > "u")
      return;
    const k = r[A] && r[A].enabled, y = d[A] && d[A].enabled;
    k && !y && i[A].disable(), !k && y && i[A].enable();
  });
  const m = d.direction && d.direction !== r.direction, b = r.loop && (d.slidesPerView !== r.slidesPerView || m), x = r.loop;
  m && t && i.changeDirection(), qe(i.params, d);
  const _ = i.params.enabled, C = i.params.loop;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev
  }), w && !_ ? i.disable() : !w && _ && i.enable(), i.currentBreakpoint = u, i.emit("_beforeBreakpoint", d), t && (b ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !x && C ? (i.loopCreate(e), i.updateSlides()) : x && !C && i.loopDestroy()), i.emit("breakpoint", d);
}
function k1(i, e = "window", t) {
  if (!i || e === "container" && !t)
    return;
  let r = !1;
  const n = Le(), s = e === "window" ? n.innerHeight : t.clientHeight, o = Object.keys(i).map((a) => {
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
    e === "window" ? n.matchMedia(`(min-width: ${u}px)`).matches && (r = l) : u <= t.clientWidth && (r = l);
  }
  return r || "max";
}
var D1 = {
  setBreakpoint: C1,
  getBreakpoint: k1
};
function A1(i, e) {
  const t = [];
  return i.forEach((r) => {
    typeof r == "object" ? Object.keys(r).forEach((n) => {
      r[n] && t.push(e + n);
    }) : typeof r == "string" && t.push(e + r);
  }), t;
}
function S1() {
  const i = this, {
    classNames: e,
    params: t,
    rtl: r,
    el: n,
    device: s
  } = i, o = A1(["initialized", t.direction, {
    "free-mode": i.params.freeMode && t.freeMode.enabled
  }, {
    autoheight: t.autoHeight
  }, {
    rtl: r
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
  e.push(...o), n.classList.add(...e), i.emitContainerClasses();
}
function E1() {
  const i = this, {
    el: e,
    classNames: t
  } = i;
  !e || typeof e == "string" || (e.classList.remove(...t), i.emitContainerClasses());
}
var B1 = {
  addClasses: S1,
  removeClasses: E1
};
function T1() {
  const i = this, {
    isLocked: e,
    params: t
  } = i, {
    slidesOffsetBefore: r
  } = t;
  if (r) {
    const n = i.slides.length - 1, s = i.slidesGrid[n] + i.slidesSizesGrid[n] + r * 2;
    i.isLocked = i.size > s;
  } else
    i.isLocked = i.snapGrid.length === 1;
  t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
}
var L1 = {
  checkOverflow: T1
}, Bs = {
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
function F1(i, e) {
  return function(r = {}) {
    const n = Object.keys(r)[0], s = r[n];
    if (typeof s != "object" || s === null) {
      qe(e, r);
      return;
    }
    if (i[n] === !0 && (i[n] = {
      enabled: !0
    }), n === "navigation" && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0), !(n in i && "enabled" in s)) {
      qe(e, r);
      return;
    }
    typeof i[n] == "object" && !("enabled" in i[n]) && (i[n].enabled = !0), i[n] || (i[n] = {
      enabled: !1
    }), qe(e, r);
  };
}
const Xn = {
  eventsEmitter: Bh,
  update: qh,
  translate: Gh,
  transition: Zh,
  slide: n1,
  loop: l1,
  grabCursor: d1,
  events: y1,
  breakpoints: D1,
  checkOverflow: L1,
  classes: B1
}, Jn = {};
let vo = class vt {
  constructor(...e) {
    let t, r;
    e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? r = e[0] : [t, r] = e, r || (r = {}), r = qe({}, r), t && !r.el && (r.el = t);
    const n = ur();
    if (r.el && typeof r.el == "string" && n.querySelectorAll(r.el).length > 1) {
      const l = [];
      return n.querySelectorAll(r.el).forEach((u) => {
        const c = qe({}, r, {
          el: u
        });
        l.push(new vt(c));
      }), l;
    }
    const s = this;
    s.__swiper__ = !0, s.support = uc(), s.device = cc({
      userAgent: r.userAgent
    }), s.browser = dc(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], r.modules && Array.isArray(r.modules) && r.modules.forEach((l) => {
      typeof l == "function" && s.modules.indexOf(l) < 0 && s.modules.push(l);
    });
    const o = {};
    s.modules.forEach((l) => {
      l({
        params: r,
        swiper: s,
        extendParams: F1(r, o),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s)
      });
    });
    const a = qe({}, Bs, o);
    return s.params = qe({}, a, Jn, r), s.originalParams = qe({}, s.params), s.passedParams = qe({}, r), s.params && s.params.on && Object.keys(s.params.on).forEach((l) => {
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
      params: r
    } = this, n = dt(t, `.${r.slideClass}, swiper-slide`), s = hn(n[0]);
    return hn(e) - s;
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
      params: r
    } = e;
    e.slides = dt(t, `.${r.slideClass}, swiper-slide`);
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
    const r = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = r.minTranslate(), o = (r.maxTranslate() - n) * e + n;
    r.translateTo(o, typeof t > "u" ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el)
      return;
    const t = e.el.className.split(" ").filter((r) => r.indexOf("swiper") === 0 || r.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed ? "" : e.className.split(" ").filter((r) => r.indexOf("swiper-slide") === 0 || r.indexOf(t.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el)
      return;
    const t = [];
    e.slides.forEach((r) => {
      const n = e.getSlideClasses(r);
      t.push({
        slideEl: r,
        classNames: n
      }), e.emit("_slideClass", r, n);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e = "current", t = !1) {
    const r = this, {
      params: n,
      slides: s,
      slidesGrid: o,
      slidesSizesGrid: a,
      size: l,
      activeIndex: u
    } = r;
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
      params: r
    } = e;
    r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
      o.complete && ji(e, o);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate, a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      n(), r.autoHeight && e.updateAutoHeight();
    else {
      if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
        const o = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
        s = e.slideTo(o.length - 1, 0, !1, !0);
      } else
        s = e.slideTo(e.activeIndex, 0, !1, !0);
      s || n();
    }
    r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t = !0) {
    const r = this, n = r.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((s) => {
      e === "vertical" ? s.style.width = "" : s.style.height = "";
    }), r.emit("changeDirection"), t && r.update()), r;
  }
  changeLanguageDirection(e) {
    const t = this;
    t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted)
      return !0;
    let r = e || t.params.el;
    if (typeof r == "string" && (r = document.querySelector(r)), !r)
      return !1;
    r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
    const n = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(n()) : dt(r, n())[0])();
    return !o && t.params.createElements && (o = fn("div", t.params.wrapperClass), r.append(o), dt(r, `.${t.params.slideClass}`).forEach((a) => {
      o.append(a);
    })), Object.assign(t, {
      el: r,
      wrapperEl: o,
      slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
      hostEl: t.isElement ? r.parentNode.host : r,
      mounted: !0,
      // RTL
      rtl: r.dir.toLowerCase() === "rtl" || Rt(r, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || Rt(r, "direction") === "rtl"),
      wrongRTL: Rt(o, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1)
      return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
    const n = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((s) => {
      s.complete ? ji(t, s) : s.addEventListener("load", (o) => {
        ji(t, o.target);
      });
    }), Es(t), t.initialized = !0, Es(t), t.emit("init"), t.emit("afterInit"), t;
  }
  destroy(e = !0, t = !0) {
    const r = this, {
      params: n,
      el: s,
      wrapperEl: o,
      slides: a
    } = r;
    return typeof r.params > "u" || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), s && typeof s != "string" && s.removeAttribute("style"), o && o.removeAttribute("style"), a && a.length && a.forEach((l) => {
      l.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index");
    })), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((l) => {
      r.off(l);
    }), e !== !1 && (r.el && typeof r.el != "string" && (r.el.swiper = null), mh(r)), r.destroyed = !0), null;
  }
  static extendDefaults(e) {
    qe(Jn, e);
  }
  static get extendedDefaults() {
    return Jn;
  }
  static get defaults() {
    return Bs;
  }
  static installModule(e) {
    vt.prototype.__modules__ || (vt.prototype.__modules__ = []);
    const t = vt.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => vt.installModule(t)), vt) : (vt.installModule(e), vt);
  }
};
Object.keys(Xn).forEach((i) => {
  Object.keys(Xn[i]).forEach((e) => {
    vo.prototype[e] = Xn[i][e];
  });
});
vo.use([Sh, Eh]);
const hc = [
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
function sr(i) {
  return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object" && !i.__swiper__;
}
function Sr(i, e) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((r) => t.indexOf(r) < 0).forEach((r) => {
    typeof i[r] > "u" ? i[r] = e[r] : sr(e[r]) && sr(i[r]) && Object.keys(e[r]).length > 0 ? e[r].__swiper__ ? i[r] = e[r] : Sr(i[r], e[r]) : i[r] = e[r];
  });
}
function gc(i = {}) {
  return i.navigation && typeof i.navigation.nextEl > "u" && typeof i.navigation.prevEl > "u";
}
function mc(i = {}) {
  return i.pagination && typeof i.pagination.el > "u";
}
function bc(i = {}) {
  return i.scrollbar && typeof i.scrollbar.el > "u";
}
function vc(i = "") {
  const e = i.split(" ").map((r) => r.trim()).filter((r) => !!r), t = [];
  return e.forEach((r) => {
    t.indexOf(r) < 0 && t.push(r);
  }), t.join(" ");
}
function N1(i = "") {
  return i ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper";
}
function O1({
  swiper: i,
  slides: e,
  passedParams: t,
  changedParams: r,
  nextEl: n,
  prevEl: s,
  scrollbarEl: o,
  paginationEl: a
}) {
  const l = r.filter((y) => y !== "children" && y !== "direction" && y !== "wrapperClass"), {
    params: u,
    pagination: c,
    navigation: d,
    scrollbar: h,
    virtual: f,
    thumbs: v
  } = i;
  let g, w, m, b, x, _, C, A;
  r.includes("thumbs") && t.thumbs && t.thumbs.swiper && !t.thumbs.swiper.destroyed && u.thumbs && (!u.thumbs.swiper || u.thumbs.swiper.destroyed) && (g = !0), r.includes("controller") && t.controller && t.controller.control && u.controller && !u.controller.control && (w = !0), r.includes("pagination") && t.pagination && (t.pagination.el || a) && (u.pagination || u.pagination === !1) && c && !c.el && (m = !0), r.includes("scrollbar") && t.scrollbar && (t.scrollbar.el || o) && (u.scrollbar || u.scrollbar === !1) && h && !h.el && (b = !0), r.includes("navigation") && t.navigation && (t.navigation.prevEl || s) && (t.navigation.nextEl || n) && (u.navigation || u.navigation === !1) && d && !d.prevEl && !d.nextEl && (x = !0);
  const k = (y) => {
    i[y] && (i[y].destroy(), y === "navigation" ? (i.isElement && (i[y].prevEl.remove(), i[y].nextEl.remove()), u[y].prevEl = void 0, u[y].nextEl = void 0, i[y].prevEl = void 0, i[y].nextEl = void 0) : (i.isElement && i[y].el.remove(), u[y].el = void 0, i[y].el = void 0));
  };
  r.includes("loop") && i.isElement && (u.loop && !t.loop ? _ = !0 : !u.loop && t.loop ? C = !0 : A = !0), l.forEach((y) => {
    if (sr(u[y]) && sr(t[y]))
      Object.assign(u[y], t[y]), (y === "navigation" || y === "pagination" || y === "scrollbar") && "enabled" in t[y] && !t[y].enabled && k(y);
    else {
      const D = t[y];
      (D === !0 || D === !1) && (y === "navigation" || y === "pagination" || y === "scrollbar") ? D === !1 && k(y) : u[y] = t[y];
    }
  }), l.includes("controller") && !w && i.controller && i.controller.control && u.controller && u.controller.control && (i.controller.control = u.controller.control), r.includes("children") && e && f && u.virtual.enabled ? (f.slides = e, f.update(!0)) : r.includes("virtual") && f && u.virtual.enabled && (e && (f.slides = e), f.update(!0)), r.includes("children") && e && u.loop && (A = !0), g && v.init() && v.update(!0), w && (i.controller.control = u.controller.control), m && (i.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-pagination"), a.part.add("pagination"), i.el.appendChild(a)), a && (u.pagination.el = a), c.init(), c.render(), c.update()), b && (i.isElement && (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), i.el.appendChild(o)), o && (u.scrollbar.el = o), h.init(), h.updateSize(), h.setTranslate()), x && (i.isElement && ((!n || typeof n == "string") && (n = document.createElement("div"), n.classList.add("swiper-button-next"), gn(n, i.navigation.arrowSvg), n.part.add("button-next"), i.el.appendChild(n)), (!s || typeof s == "string") && (s = document.createElement("div"), s.classList.add("swiper-button-prev"), gn(s, i.navigation.arrowSvg), s.part.add("button-prev"), i.el.appendChild(s))), n && (u.navigation.nextEl = n), s && (u.navigation.prevEl = s), d.init(), d.update()), r.includes("allowSlideNext") && (i.allowSlideNext = t.allowSlideNext), r.includes("allowSlidePrev") && (i.allowSlidePrev = t.allowSlidePrev), r.includes("direction") && i.changeDirection(t.direction, !1), (_ || A) && i.loopDestroy(), (C || A) && i.loopCreate(), i.update();
}
function M1(i = {}, e = !0) {
  const t = {
    on: {}
  }, r = {}, n = {};
  Sr(t, Bs), t._emitClasses = !0, t.init = !1;
  const s = {}, o = hc.map((l) => l.replace(/_/, "")), a = Object.assign({}, i);
  return Object.keys(a).forEach((l) => {
    typeof i[l] > "u" || (o.indexOf(l) >= 0 ? sr(i[l]) ? (t[l] = {}, n[l] = {}, Sr(t[l], i[l]), Sr(n[l], i[l])) : (t[l] = i[l], n[l] = i[l]) : l.search(/on[A-Z]/) === 0 && typeof i[l] == "function" ? e ? r[`${l[2].toLowerCase()}${l.substr(3)}`] = i[l] : t.on[`${l[2].toLowerCase()}${l.substr(3)}`] = i[l] : s[l] = i[l]);
  }), ["navigation", "pagination", "scrollbar"].forEach((l) => {
    t[l] === !0 && (t[l] = {}), t[l] === !1 && delete t[l];
  }), {
    params: t,
    passedParams: n,
    rest: s,
    events: r
  };
}
function P1({
  el: i,
  nextEl: e,
  prevEl: t,
  paginationEl: r,
  scrollbarEl: n,
  swiper: s
}, o) {
  gc(o) && e && t && (s.params.navigation.nextEl = e, s.originalParams.navigation.nextEl = e, s.params.navigation.prevEl = t, s.originalParams.navigation.prevEl = t), mc(o) && r && (s.params.pagination.el = r, s.originalParams.pagination.el = r), bc(o) && n && (s.params.scrollbar.el = n, s.originalParams.scrollbar.el = n), s.init(i);
}
function I1(i, e, t, r, n) {
  const s = [];
  if (!e)
    return s;
  const o = (l) => {
    s.indexOf(l) < 0 && s.push(l);
  };
  if (t && r) {
    const l = r.map(n), u = t.map(n);
    l.join("") !== u.join("") && o("children"), r.length !== t.length && o("children");
  }
  return hc.filter((l) => l[0] === "_").map((l) => l.replace(/_/, "")).forEach((l) => {
    if (l in i && l in e)
      if (sr(i[l]) && sr(e[l])) {
        const u = Object.keys(i[l]), c = Object.keys(e[l]);
        u.length !== c.length ? o(l) : (u.forEach((d) => {
          i[l][d] !== e[l][d] && o(l);
        }), c.forEach((d) => {
          i[l][d] !== e[l][d] && o(l);
        }));
      } else
        i[l] !== e[l] && o(l);
  }), s;
}
const R1 = (i) => {
  !i || i.destroyed || !i.params.virtual || i.params.virtual && !i.params.virtual.enabled || (i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.emit("_virtualUpdated"), i.parallax && i.params.parallax && i.params.parallax.enabled && i.parallax.setTranslate());
};
function mn() {
  return mn = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
    }
    return i;
  }, mn.apply(this, arguments);
}
function wc(i) {
  return i.type && i.type.displayName && i.type.displayName.includes("SwiperSlide");
}
function xc(i) {
  const e = [];
  return ve.Children.toArray(i).forEach((t) => {
    wc(t) ? e.push(t) : t.props && t.props.children && xc(t.props.children).forEach((r) => e.push(r));
  }), e;
}
function z1(i) {
  const e = [], t = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return ve.Children.toArray(i).forEach((r) => {
    if (wc(r))
      e.push(r);
    else if (r.props && r.props.slot && t[r.props.slot])
      t[r.props.slot].push(r);
    else if (r.props && r.props.children) {
      const n = xc(r.props.children);
      n.length > 0 ? n.forEach((s) => e.push(s)) : t["container-end"].push(r);
    } else
      t["container-end"].push(r);
  }), {
    slides: e,
    slots: t
  };
}
function q1(i, e, t) {
  if (!t)
    return null;
  const r = (c) => {
    let d = c;
    return c < 0 ? d = e.length + c : d >= e.length && (d = d - e.length), d;
  }, n = i.isHorizontal() ? {
    [i.rtlTranslate ? "right" : "left"]: `${t.offset}px`
  } : {
    top: `${t.offset}px`
  }, {
    from: s,
    to: o
  } = t, a = i.params.loop ? -e.length : 0, l = i.params.loop ? e.length * 2 : e.length, u = [];
  for (let c = a; c < l; c += 1)
    c >= s && c <= o && u.push(e[r(c)]);
  return u.map((c, d) => /* @__PURE__ */ ve.cloneElement(c, {
    swiper: i,
    style: n,
    key: c.props.virtualIndex || c.key || `slide-${d}`
  }));
}
function di(i, e) {
  return typeof window > "u" ? j(i, e) : or(i, e);
}
const ja = /* @__PURE__ */ ki(null), $1 = /* @__PURE__ */ ki(null), _c = /* @__PURE__ */ $s(({
  className: i,
  tag: e = "div",
  wrapperTag: t = "div",
  children: r,
  onSwiper: n,
  ...s
} = {}, o) => {
  let a = !1;
  const [l, u] = M("swiper"), [c, d] = M(null), [h, f] = M(!1), v = Y(!1), g = Y(null), w = Y(null), m = Y(null), b = Y(null), x = Y(null), _ = Y(null), C = Y(null), A = Y(null), {
    params: k,
    passedParams: y,
    rest: D,
    events: E
  } = M1(s), {
    slides: L,
    slots: T
  } = z1(r), F = () => {
    f(!h);
  };
  Object.assign(k.on, {
    _containerClasses(S, B) {
      u(B);
    }
  });
  const N = () => {
    Object.assign(k.on, E), a = !0;
    const S = {
      ...k
    };
    if (delete S.wrapperClass, w.current = new vo(S), w.current.virtual && w.current.params.virtual.enabled) {
      w.current.virtual.slides = L;
      const B = {
        cache: !1,
        slides: L,
        renderExternal: d,
        renderExternalUpdate: !1
      };
      Sr(w.current.params.virtual, B), Sr(w.current.originalParams.virtual, B);
    }
  };
  g.current || N(), w.current && w.current.on("_beforeBreakpoint", F);
  const O = () => {
    a || !E || !w.current || Object.keys(E).forEach((S) => {
      w.current.on(S, E[S]);
    });
  }, q = () => {
    !E || !w.current || Object.keys(E).forEach((S) => {
      w.current.off(S, E[S]);
    });
  };
  j(() => () => {
    w.current && w.current.off("_beforeBreakpoint", F);
  }), j(() => {
    !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0);
  }), di(() => {
    if (o && (o.current = g.current), !!g.current)
      return w.current.destroyed && N(), P1({
        el: g.current,
        nextEl: x.current,
        prevEl: _.current,
        paginationEl: C.current,
        scrollbarEl: A.current,
        swiper: w.current
      }, k), n && !w.current.destroyed && n(w.current), () => {
        w.current && !w.current.destroyed && w.current.destroy(!0, !1);
      };
  }, []), di(() => {
    O();
    const S = I1(y, m.current, L, b.current, (B) => B.key);
    return m.current = y, b.current = L, S.length && w.current && !w.current.destroyed && O1({
      swiper: w.current,
      slides: L,
      passedParams: y,
      changedParams: S,
      nextEl: x.current,
      prevEl: _.current,
      scrollbarEl: A.current,
      paginationEl: C.current
    }), () => {
      q();
    };
  }), di(() => {
    R1(w.current);
  }, [c]);
  function R() {
    return k.virtual ? q1(w.current, L, c) : L.map((S, B) => /* @__PURE__ */ ve.cloneElement(S, {
      swiper: w.current,
      swiperSlideIndex: B
    }));
  }
  return /* @__PURE__ */ ve.createElement(e, mn({
    ref: g,
    className: vc(`${l}${i ? ` ${i}` : ""}`)
  }, D), /* @__PURE__ */ ve.createElement($1.Provider, {
    value: w.current
  }, T["container-start"], /* @__PURE__ */ ve.createElement(t, {
    className: N1(k.wrapperClass)
  }, T["wrapper-start"], R(), T["wrapper-end"]), gc(k) && /* @__PURE__ */ ve.createElement(ve.Fragment, null, /* @__PURE__ */ ve.createElement("div", {
    ref: _,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ ve.createElement("div", {
    ref: x,
    className: "swiper-button-next"
  })), bc(k) && /* @__PURE__ */ ve.createElement("div", {
    ref: A,
    className: "swiper-scrollbar"
  }), mc(k) && /* @__PURE__ */ ve.createElement("div", {
    ref: C,
    className: "swiper-pagination"
  }), T["container-end"]));
});
_c.displayName = "Swiper";
const yc = /* @__PURE__ */ $s(({
  tag: i = "div",
  children: e,
  className: t = "",
  swiper: r,
  zoom: n,
  lazy: s,
  virtualIndex: o,
  swiperSlideIndex: a,
  ...l
} = {}, u) => {
  const c = Y(null), [d, h] = M("swiper-slide"), [f, v] = M(!1);
  function g(x, _, C) {
    _ === c.current && h(C);
  }
  di(() => {
    if (typeof a < "u" && (c.current.swiperSlideIndex = a), u && (u.current = c.current), !(!c.current || !r)) {
      if (r.destroyed) {
        d !== "swiper-slide" && h("swiper-slide");
        return;
      }
      return r.on("_slideClass", g), () => {
        r && r.off("_slideClass", g);
      };
    }
  }), di(() => {
    r && c.current && !r.destroyed && h(r.getSlideClasses(c.current));
  }, [r]);
  const w = {
    isActive: d.indexOf("swiper-slide-active") >= 0,
    isVisible: d.indexOf("swiper-slide-visible") >= 0,
    isPrev: d.indexOf("swiper-slide-prev") >= 0,
    isNext: d.indexOf("swiper-slide-next") >= 0
  }, m = () => typeof e == "function" ? e(w) : e, b = () => {
    v(!0);
  };
  return /* @__PURE__ */ ve.createElement(i, mn({
    ref: c,
    className: vc(`${d}${t ? ` ${t}` : ""}`),
    "data-swiper-slide-index": o,
    onLoad: b
  }, l), n && /* @__PURE__ */ ve.createElement(ja.Provider, {
    value: w
  }, /* @__PURE__ */ ve.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof n == "number" ? n : void 0
  }, m(), s && !f && /* @__PURE__ */ ve.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (x) => {
      x && (x.lazyPreloaderManaged = !0);
    }
  }))), !n && /* @__PURE__ */ ve.createElement(ja.Provider, {
    value: w
  }, m(), s && !f && /* @__PURE__ */ ve.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (x) => {
      x && (x.lazyPreloaderManaged = !0);
    }
  })));
});
yc.displayName = "SwiperSlide";
function V1(i, e, t, r) {
  return i.params.createElements && Object.keys(r).forEach((n) => {
    if (!t[n] && t.auto === !0) {
      let s = dt(i.el, `.${r[n]}`)[0];
      s || (s = fn("div", r[n]), s.className = r[n], i.el.append(s)), t[n] = s, e[n] = s;
    }
  }), t;
}
function Xr(i = "") {
  return `.${i.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
function j1({
  swiper: i,
  extendParams: e,
  on: t,
  emit: r
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
  }), i.pagination = {
    el: null,
    bullets: []
  };
  let s, o = 0;
  function a() {
    return !i.params.pagination.el || !i.pagination.el || Array.isArray(i.pagination.el) && i.pagination.el.length === 0;
  }
  function l(m, b) {
    const {
      bulletActiveClass: x
    } = i.params.pagination;
    m && (m = m[`${b === "prev" ? "previous" : "next"}ElementSibling`], m && (m.classList.add(`${x}-${b}`), m = m[`${b === "prev" ? "previous" : "next"}ElementSibling`], m && m.classList.add(`${x}-${b}-${b}`)));
  }
  function u(m, b, x) {
    if (m = m % x, b = b % x, b === m + 1)
      return "next";
    if (b === m - 1)
      return "previous";
  }
  function c(m) {
    const b = m.target.closest(Xr(i.params.pagination.bulletClass));
    if (!b)
      return;
    m.preventDefault();
    const x = hn(b) * i.params.slidesPerGroup;
    if (i.params.loop) {
      if (i.realIndex === x)
        return;
      const _ = u(i.realIndex, x, i.slides.length);
      _ === "next" ? i.slideNext() : _ === "previous" ? i.slidePrev() : i.slideToLoop(x);
    } else
      i.slideTo(x);
  }
  function d() {
    const m = i.rtl, b = i.params.pagination;
    if (a())
      return;
    let x = i.pagination.el;
    x = bt(x);
    let _, C;
    const A = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length, k = i.params.loop ? Math.ceil(A / i.params.slidesPerGroup) : i.snapGrid.length;
    if (i.params.loop ? (C = i.previousRealIndex || 0, _ = i.params.slidesPerGroup > 1 ? Math.floor(i.realIndex / i.params.slidesPerGroup) : i.realIndex) : typeof i.snapIndex < "u" ? (_ = i.snapIndex, C = i.previousSnapIndex) : (C = i.previousIndex || 0, _ = i.activeIndex || 0), b.type === "bullets" && i.pagination.bullets && i.pagination.bullets.length > 0) {
      const y = i.pagination.bullets;
      let D, E, L;
      if (b.dynamicBullets && (s = Ss(y[0], i.isHorizontal() ? "width" : "height", !0), x.forEach((T) => {
        T.style[i.isHorizontal() ? "width" : "height"] = `${s * (b.dynamicMainBullets + 4)}px`;
      }), b.dynamicMainBullets > 1 && C !== void 0 && (o += _ - (C || 0), o > b.dynamicMainBullets - 1 ? o = b.dynamicMainBullets - 1 : o < 0 && (o = 0)), D = Math.max(_ - o, 0), E = D + (Math.min(y.length, b.dynamicMainBullets) - 1), L = (E + D) / 2), y.forEach((T) => {
        const F = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((N) => `${b.bulletActiveClass}${N}`)].map((N) => typeof N == "string" && N.includes(" ") ? N.split(" ") : N).flat();
        T.classList.remove(...F);
      }), x.length > 1)
        y.forEach((T) => {
          const F = hn(T);
          F === _ ? T.classList.add(...b.bulletActiveClass.split(" ")) : i.isElement && T.setAttribute("part", "bullet"), b.dynamicBullets && (F >= D && F <= E && T.classList.add(...`${b.bulletActiveClass}-main`.split(" ")), F === D && l(T, "prev"), F === E && l(T, "next"));
        });
      else {
        const T = y[_];
        if (T && T.classList.add(...b.bulletActiveClass.split(" ")), i.isElement && y.forEach((F, N) => {
          F.setAttribute("part", N === _ ? "bullet-active" : "bullet");
        }), b.dynamicBullets) {
          const F = y[D], N = y[E];
          for (let O = D; O <= E; O += 1)
            y[O] && y[O].classList.add(...`${b.bulletActiveClass}-main`.split(" "));
          l(F, "prev"), l(N, "next");
        }
      }
      if (b.dynamicBullets) {
        const T = Math.min(y.length, b.dynamicMainBullets + 4), F = (s * T - s) / 2 - L * s, N = m ? "right" : "left";
        y.forEach((O) => {
          O.style[i.isHorizontal() ? N : "top"] = `${F}px`;
        });
      }
    }
    x.forEach((y, D) => {
      if (b.type === "fraction" && (y.querySelectorAll(Xr(b.currentClass)).forEach((E) => {
        E.textContent = b.formatFractionCurrent(_ + 1);
      }), y.querySelectorAll(Xr(b.totalClass)).forEach((E) => {
        E.textContent = b.formatFractionTotal(k);
      })), b.type === "progressbar") {
        let E;
        b.progressbarOpposite ? E = i.isHorizontal() ? "vertical" : "horizontal" : E = i.isHorizontal() ? "horizontal" : "vertical";
        const L = (_ + 1) / k;
        let T = 1, F = 1;
        E === "horizontal" ? T = L : F = L, y.querySelectorAll(Xr(b.progressbarFillClass)).forEach((N) => {
          N.style.transform = `translate3d(0,0,0) scaleX(${T}) scaleY(${F})`, N.style.transitionDuration = `${i.params.speed}ms`;
        });
      }
      b.type === "custom" && b.renderCustom ? (gn(y, b.renderCustom(i, _ + 1, k)), D === 0 && r("paginationRender", y)) : (D === 0 && r("paginationRender", y), r("paginationUpdate", y)), i.params.watchOverflow && i.enabled && y.classList[i.isLocked ? "add" : "remove"](b.lockClass);
    });
  }
  function h() {
    const m = i.params.pagination;
    if (a())
      return;
    const b = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.grid && i.params.grid.rows > 1 ? i.slides.length / Math.ceil(i.params.grid.rows) : i.slides.length;
    let x = i.pagination.el;
    x = bt(x);
    let _ = "";
    if (m.type === "bullets") {
      let C = i.params.loop ? Math.ceil(b / i.params.slidesPerGroup) : i.snapGrid.length;
      i.params.freeMode && i.params.freeMode.enabled && C > b && (C = b);
      for (let A = 0; A < C; A += 1)
        m.renderBullet ? _ += m.renderBullet.call(i, A, m.bulletClass) : _ += `<${m.bulletElement} ${i.isElement ? 'part="bullet"' : ""} class="${m.bulletClass}"></${m.bulletElement}>`;
    }
    m.type === "fraction" && (m.renderFraction ? _ = m.renderFraction.call(i, m.currentClass, m.totalClass) : _ = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`), m.type === "progressbar" && (m.renderProgressbar ? _ = m.renderProgressbar.call(i, m.progressbarFillClass) : _ = `<span class="${m.progressbarFillClass}"></span>`), i.pagination.bullets = [], x.forEach((C) => {
      m.type !== "custom" && gn(C, _ || ""), m.type === "bullets" && i.pagination.bullets.push(...C.querySelectorAll(Xr(m.bulletClass)));
    }), m.type !== "custom" && r("paginationRender", x[0]);
  }
  function f() {
    i.params.pagination = V1(i, i.originalParams.pagination, i.params.pagination, {
      el: "swiper-pagination"
    });
    const m = i.params.pagination;
    if (!m.el)
      return;
    let b;
    typeof m.el == "string" && i.isElement && (b = i.el.querySelector(m.el)), !b && typeof m.el == "string" && (b = [...document.querySelectorAll(m.el)]), b || (b = m.el), !(!b || b.length === 0) && (i.params.uniqueNavElements && typeof m.el == "string" && Array.isArray(b) && b.length > 1 && (b = [...i.el.querySelectorAll(m.el)], b.length > 1 && (b = b.find((x) => lc(x, ".swiper")[0] === i.el))), Array.isArray(b) && b.length === 1 && (b = b[0]), Object.assign(i.pagination, {
      el: b
    }), b = bt(b), b.forEach((x) => {
      m.type === "bullets" && m.clickable && x.classList.add(...(m.clickableClass || "").split(" ")), x.classList.add(m.modifierClass + m.type), x.classList.add(i.isHorizontal() ? m.horizontalClass : m.verticalClass), m.type === "bullets" && m.dynamicBullets && (x.classList.add(`${m.modifierClass}${m.type}-dynamic`), o = 0, m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)), m.type === "progressbar" && m.progressbarOpposite && x.classList.add(m.progressbarOppositeClass), m.clickable && x.addEventListener("click", c), i.enabled || x.classList.add(m.lockClass);
    }));
  }
  function v() {
    const m = i.params.pagination;
    if (a())
      return;
    let b = i.pagination.el;
    b && (b = bt(b), b.forEach((x) => {
      x.classList.remove(m.hiddenClass), x.classList.remove(m.modifierClass + m.type), x.classList.remove(i.isHorizontal() ? m.horizontalClass : m.verticalClass), m.clickable && (x.classList.remove(...(m.clickableClass || "").split(" ")), x.removeEventListener("click", c));
    })), i.pagination.bullets && i.pagination.bullets.forEach((x) => x.classList.remove(...m.bulletActiveClass.split(" ")));
  }
  t("changeDirection", () => {
    if (!i.pagination || !i.pagination.el)
      return;
    const m = i.params.pagination;
    let {
      el: b
    } = i.pagination;
    b = bt(b), b.forEach((x) => {
      x.classList.remove(m.horizontalClass, m.verticalClass), x.classList.add(i.isHorizontal() ? m.horizontalClass : m.verticalClass);
    });
  }), t("init", () => {
    i.params.pagination.enabled === !1 ? w() : (f(), h(), d());
  }), t("activeIndexChange", () => {
    typeof i.snapIndex > "u" && d();
  }), t("snapIndexChange", () => {
    d();
  }), t("snapGridLengthChange", () => {
    h(), d();
  }), t("destroy", () => {
    v();
  }), t("enable disable", () => {
    let {
      el: m
    } = i.pagination;
    m && (m = bt(m), m.forEach((b) => b.classList[i.enabled ? "remove" : "add"](i.params.pagination.lockClass)));
  }), t("lock unlock", () => {
    d();
  }), t("click", (m, b) => {
    const x = b.target, _ = bt(i.pagination.el);
    if (i.params.pagination.el && i.params.pagination.hideOnClick && _ && _.length > 0 && !x.classList.contains(i.params.pagination.bulletClass)) {
      if (i.navigation && (i.navigation.nextEl && x === i.navigation.nextEl || i.navigation.prevEl && x === i.navigation.prevEl))
        return;
      const C = _[0].classList.contains(i.params.pagination.hiddenClass);
      r(C === !0 ? "paginationShow" : "paginationHide"), _.forEach((A) => A.classList.toggle(i.params.pagination.hiddenClass));
    }
  });
  const g = () => {
    i.el.classList.remove(i.params.pagination.paginationDisabledClass);
    let {
      el: m
    } = i.pagination;
    m && (m = bt(m), m.forEach((b) => b.classList.remove(i.params.pagination.paginationDisabledClass))), f(), h(), d();
  }, w = () => {
    i.el.classList.add(i.params.pagination.paginationDisabledClass);
    let {
      el: m
    } = i.pagination;
    m && (m = bt(m), m.forEach((b) => b.classList.add(i.params.pagination.paginationDisabledClass))), v();
  };
  Object.assign(i.pagination, {
    enable: g,
    disable: w,
    render: h,
    update: d,
    init: f,
    destroy: v
  });
}
const U1 = () => {
  const i = Y(null), e = Y(null), t = nc, r = Y(null), [n, s] = M(0), [o, a] = M(!0), { t: l } = ee(), u = {
    clickable: !0,
    renderBullet: function(f, v) {
      return '<span class="' + v + ' "></span>';
    }
  }, c = () => {
    Q.to(i.current, {
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
    Q.to(i.current, {
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
    d(), _n.value = !1;
  };
  return j(() => {
    o ? c() : d();
  }, [o]), /* @__PURE__ */ p("div", { className: "onboarding-wrapper", ref: i, children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: ch }),
    /* @__PURE__ */ p("div", { className: "onboarding-background" }),
    /* @__PURE__ */ p("div", { className: "onboarding-modal", ref: e, children: [
      /* @__PURE__ */ p(
        "div",
        {
          className: "back-button",
          onClick: () => n > 0 ? r.current.slidePrev() : te("/workshop"),
          children: /* @__PURE__ */ p(rt, {})
        }
      ),
      /* @__PURE__ */ p("h2", { className: "heading relative flex items-center justify-center w-full h-10 my-5 sm:mt-8 text-xl", children: "Virtual Workshop - Quick Guide" }),
      /* @__PURE__ */ p(
        _c,
        {
          style: { padding: "0 30px" },
          spaceBetween: 30,
          onSwiper: (f) => r.current = f,
          pagination: u,
          modules: [j1],
          onSlideChange: (f) => s(f.activeIndex),
          children: t.map((f, v) => /* @__PURE__ */ p(yc, { children: /* @__PURE__ */ p(
            fh,
            {
              title: f.title,
              src: f.image,
              content: f.content,
              number: f.number
            }
          ) }, v))
        }
      ),
      /* @__PURE__ */ p("div", { className: "button-wrapper", children: /* @__PURE__ */ p(
        pt,
        {
          onClick: () => n < t.length - 1 ? r.current.slideNext() : h(),
          text: n < t.length - 1 ? l("onboarding_next") : l("onboarding_explore"),
          active: !0,
          primary: !0
        }
      ) })
    ] })
  ] });
};
function H1() {
  const { t: i } = ee(), { currentBike: e } = Re(), [t, r] = M(ke.value), s = window.BikeMatrix.getConfig(), [o, a] = M(!1), [l, u] = M(""), [c, d] = M(!1);
  j(() => {
    at.value.back = "/";
  }, []);
  const [h, f] = M(!1), [v, g] = M(!1), [w, m] = M(!1), [b, x] = M(""), [_, C] = M(""), [A, k] = M(!1), y = new Se(
    s.apiUrl,
    s.apiKey,
    s.apiToken,
    s.isShopify
  ), [D, E] = M(!1), L = async () => {
    if (!t)
      return;
    const O = await y.getBikeBom(t.bike_Key);
    if (!O.success) {
      u(O.error), s.logLevel === "verbose" && console.error(O.logError);
      return;
    }
    ke.value = Ir(O), f(!1), g(!0), te("/");
  }, T = (O) => {
    C(O), f(!1);
  }, F = async () => {
    if (f(!0), k(!0), t != null && t.owner_Email_Address) {
      const O = await y.saveCustomBike(
        e.key,
        t.owner_Email_Address
      );
      if (O.success)
        L();
      else {
        s.logLevel === "verbose" && console.error(O.logError), T(O.error);
        return;
      }
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(b)) {
      const O = await y.saveCustomBike(e.key, b);
      if (O.success)
        L();
      else {
        s.logLevel === "verbose" && console.error(O.logError), T(O.error);
        return;
      }
    }
  };
  j(() => {
    A && _ && C("");
  }, [b]);
  const N = async () => {
    a(!0);
    const O = await y.getBikeBom(e.key);
    if (!O.success) {
      u(O.error), s.logLevel === "verbose" && console.error(O.logError), a(!1);
      return;
    }
    const q = Ir(O.data);
    r(q), ke.value = q, a(!1);
  };
  return j(() => {
    ke.value || N();
  }, []), j(() => {
    d(!!(D && b));
  }, [D, b]), /* @__PURE__ */ p($, { children: [
    _n.value && /* @__PURE__ */ p(U1, {}),
    /* @__PURE__ */ p("div", { className: "mb-4", children: [
      e ? /* @__PURE__ */ p(
        it,
        {
          bike: e,
          selected: !0,
          settings: !0,
          compact: !0
        }
      ) : /* @__PURE__ */ p(Ur, {}),
      /* @__PURE__ */ p("div", { class: "mt-4 mb-8", children: /* @__PURE__ */ p(
        ic,
        {
          categorisedBOM: t,
          bikeSave: v,
          refreshBomb: N,
          loading: o,
          bomError: l
        }
      ) })
    ] }),
    /* @__PURE__ */ p(
      pt,
      {
        text: i("virtualworkshop_save_btn"),
        onClick: t != null && t.owner_Email_Address ? () => F() : () => m(!0),
        primary: !0,
        loading: !w && h
      }
    ),
    /* @__PURE__ */ p(Et, {}),
    /* @__PURE__ */ p(
      fo,
      {
        isOpen: w,
        toggleModal: () => m(!1),
        contentElement: /* @__PURE__ */ p(
          Yo,
          {
            i18nKey: "virtualworkshop_save_text",
            components: {
              privacyLink: /* @__PURE__ */ p(
                "a",
                {
                  href: "https://www.bikematrix.io/privacy-policy",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }
              )
            }
          }
        ),
        title: i("virtualworkshop_save_title"),
        onConfirm: F,
        onCancel: () => m(!1),
        loading: h,
        confirmDisabled: !c,
        children: [
          /* @__PURE__ */ p("div", { class: "mt-8", children: /* @__PURE__ */ p(
            ec,
            {
              value: b,
              setValue: (O) => x(O),
              placeholder: i("virtualworkshop_settings_email"),
              type: "email",
              error: _,
              submitInput: F
            }
          ) }),
          /* @__PURE__ */ p("div", { className: "mt-1 flex gap-2 items-start", children: [
            /* @__PURE__ */ p(
              "input",
              {
                type: "checkbox",
                onClick: () => E(!D),
                id: "privacyPolicy",
                className: "bike_matrix-checkbox"
              }
            ),
            /* @__PURE__ */ p("label", { for: "privacyPolicy", children: [
              " ",
              /* @__PURE__ */ p(
                Yo,
                {
                  i18nKey: "virtualworkshop_save_accept_text",
                  components: {
                    privacyLink: /* @__PURE__ */ p(
                      "a",
                      {
                        href: "https://www.bikematrix.io/privacy-policy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { textDecoration: "underline" }
                      }
                    )
                  }
                }
              )
            ] }),
            /* @__PURE__ */ p("br", {})
          ] }),
          /* @__PURE__ */ p(nt, { messages: l })
        ]
      }
    )
  ] });
}
function G1() {
  const { t: i } = ee(), e = xn.value, r = window.BikeMatrix.getConfig(), [n, s] = M(!1), [o, a] = M(null), l = ke.value, { currentBike: u, setCurrentBike: c } = Re(), d = new Se(
    r.apiUrl,
    r.apiKey,
    r.apiToken,
    r.isShopify
  ), [h, f] = M(!1);
  u.isShared && te("/");
  const v = async () => {
    f(!0), go();
    const g = await d.removeComponent(
      u.key,
      e.part.product_category_id,
      mo[e.type.split(" ").join("_")]
    );
    if (g.success)
      l[e.category.split(" ").join("_")][e.type.split(" ").join("_")] = {
        ...l[e.category.split(" ").join("_")][e.type.split(" ").join("_")],
        id: null,
        name: null,
        unsaved_changes: !0
      }, ke.value = l, c({ ...u }), f(!1), te("/bom");
    else {
      f(!1), s(!1), a(g.error + " - " + e.part.name), r.logLevel === "verbose" && console.error(g.logError);
      return;
    }
  };
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("div", { className: "mb-4", children: [
      u ? /* @__PURE__ */ p(it, { bike: u, selected: !0, settings: !0 }) : /* @__PURE__ */ p(Ur, {}),
      /* @__PURE__ */ p("div", { className: "part-wrapper mt-8 mb-8 relative", children: [
        /* @__PURE__ */ p(kt, { subheader: !0, text: e.part.name }),
        /* @__PURE__ */ p("p", { className: "absolute text-red-500 text-sm left-1/2 transform -translate-x-1/2", children: o })
      ] })
    ] }),
    /* @__PURE__ */ p(
      pt,
      {
        text: i("virtualworkshop_swap_btn"),
        onClick: () => te("/update"),
        primary: !0
      }
    ),
    /* @__PURE__ */ p(
      pt,
      {
        text: i("virtualworkshop_remove_btn"),
        onClick: () => s(!0)
      }
    ),
    /* @__PURE__ */ p(Et, {}),
    n && /* @__PURE__ */ p(
      fo,
      {
        isOpen: n,
        toggleModal: () => s(!1),
        content: i("virtualworkshop_remove_subtitle"),
        title: i("virtualworkshop_are_you_sure"),
        onConfirm: v,
        onCancel: () => s(!1),
        loading: h
      }
    )
  ] });
}
const W1 = `.search-wrapper{position:relative;margin-bottom:12rem}@media (max-width: 767px){.search-wrapper{margin-bottom:22rem}}.search_bar-wrapper{border:1px solid rgb(209 213 219);border-radius:12px;display:flex;align-items:center;z-index:2;width:100%;background-color:#fff;position:absolute;transition:all ease-in-out .5s;padding:12px}.input_icon-wrapper{display:flex;align-items:center;gap:1rem;width:100%}.input_icon-wrapper input{width:100%}.svg-wrapper{cursor:pointer}.compatibility-wrapper{height:110px;position:absolute;width:100%;border-radius:12px;overflow:hidden;top:0}.compatibility{position:absolute;width:100%;top:-75px;height:71px;border:1px solid;border-bottom-right-radius:12px;border-bottom-left-radius:12px}.compatibility-contents{position:relative;height:54px;display:flex;align-items:center;border-bottom-left-radius:12px;margin-top:16px;overflow:hidden}@media (max-width: 767px){.compatibility-contents p{font-size:16px}}.polygon{position:absolute}.bikon{margin-left:.75rem}.compatibility-background{height:108px;position:absolute;z-index:-1;border-bottom-left-radius:12px;left:-2px;top:-38px;width:59px}.compatibility-warning_button{margin-left:auto;border:1px solid rgb(245 158 11);color:#451a03;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 32px;height:75%;margin-right:5px;margin-bottom:1px;font-weight:600}.results-wrapper{top:40px;height:0;overflow:hidden;position:absolute;width:100%;border:1px solid black;border-bottom-left-radius:12px;border-bottom-right-radius:12px;max-height:190px;overflow-y:scroll;background-color:#fff;z-index:1}.results{width:100%;padding:12px;padding-top:2rem;display:flex;flex-direction:column;gap:.5rem}.result{background-color:#fff;transition:ease-in-out .2s;border-radius:8px;padding-left:10px;padding-top:5px;padding-bottom:5px;cursor:pointer}.result:hover{background-color:#d9d9d966}.notes-wrapper{display:flex;flex-direction:column;gap:.5rem;padding-top:1rem}
`, Y1 = (i) => /* @__PURE__ */ z("svg", { width: 23, height: 23, viewBox: "0 0 23 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M0 9.26199C0 7.98077 0.242061 6.78221 0.726184 5.66631C1.21031 4.5504 1.87806 3.57089 2.72945 2.72776C3.58919 1.87637 4.58247 1.21096 5.70931 0.731536C6.83615 0.243845 8.04228 0 9.32771 0C10.6215 0 11.8318 0.243845 12.9586 0.731536C14.0855 1.21096 15.0788 1.87637 15.9385 2.72776C16.7982 3.57089 17.4701 4.5504 17.9543 5.66631C18.4384 6.78221 18.6805 7.98077 18.6805 9.26199C18.6805 10.3283 18.5052 11.345 18.1546 12.3121C17.804 13.271 17.3199 14.1389 16.7022 14.9159L22.6369 20.8178C22.7538 20.9418 22.8414 21.0782 22.8998 21.227C22.9666 21.384 23 21.5452 23 21.7105C23 21.9585 22.9457 22.1775 22.8372 22.3677C22.7287 22.566 22.5785 22.719 22.3865 22.8264C22.1945 22.9421 21.9733 23 21.7229 23C21.556 23 21.389 22.9669 21.2221 22.9008C21.0635 22.8429 20.9216 22.7562 20.7964 22.6404L14.8367 16.7137C14.0604 17.2758 13.209 17.7181 12.2825 18.0404C11.356 18.3545 10.3711 18.5116 9.32771 18.5116C8.04228 18.5116 6.83615 18.2719 5.70931 17.7925C4.58247 17.313 3.58919 16.6476 2.72945 15.7962C1.87806 14.9448 1.21031 13.9612 0.726184 12.8453C0.242061 11.7294 0 10.535 0 9.26199ZM1.81546 9.26199C1.81546 10.287 2.01161 11.25 2.40392 12.1509C2.79623 13.0437 3.3346 13.8331 4.01905 14.5191C4.71185 15.1969 5.50898 15.7301 6.41045 16.1186C7.32027 16.4988 8.29269 16.6889 9.32771 16.6889C10.3711 16.6889 11.3435 16.4988 12.245 16.1186C13.1548 15.7301 13.9519 15.1969 14.6364 14.5191C15.3292 13.8331 15.8675 13.0437 16.2515 12.1509C16.6438 11.25 16.84 10.287 16.84 9.26199C16.84 8.22875 16.6438 7.26577 16.2515 6.37305C15.8675 5.47206 15.3292 4.68266 14.6364 4.00485C13.9519 3.31878 13.1548 2.78562 12.245 2.40539C11.3435 2.01689 10.3711 1.82264 9.32771 1.82264C8.29269 1.82264 7.32027 2.01689 6.41045 2.40539C5.50898 2.78562 4.71185 3.31878 4.01905 4.00485C3.3346 4.68266 2.79623 5.47206 2.40392 6.37305C2.01161 7.26577 1.81546 8.22875 1.81546 9.26199Z", fill: "black" })), wo = (i) => /* @__PURE__ */ z("svg", { width: 57, height: 40, viewBox: "0 0 57 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4343 1.80079C44.6538 2.54246 44.2342 3.3224 43.4943 3.54788L37.9829 5.22744L42.5437 17.3218C42.7699 17.2662 42.9979 17.2168 43.2272 17.1749C43.4564 17.1337 43.687 17.0993 43.9187 17.0724C44.1498 17.0449 44.3822 17.0256 44.6151 17.0131C44.8475 17.0012 45.0804 16.9962 45.3134 16.9987C45.547 17.0018 45.7794 17.0118 46.0117 17.0293C46.2441 17.0468 46.4758 17.0712 46.7069 17.1037C46.938 17.1356 47.1673 17.1756 47.396 17.2224C47.6246 17.2693 47.8508 17.3231 48.0764 17.3843C48.3013 17.4462 48.5244 17.5143 48.7451 17.5899C48.9657 17.6656 49.1839 17.7481 49.4002 17.8374C49.6159 17.9268 49.8286 18.0231 50.0381 18.1262C50.2477 18.2293 50.4541 18.3387 50.6575 18.4549C50.8603 18.5712 51.0594 18.6937 51.2547 18.8224C51.4501 18.9512 51.6412 19.0862 51.8285 19.2274C52.0153 19.3687 52.1977 19.5156 52.3758 19.6681C52.5539 19.8206 52.7265 19.9787 52.8948 20.1424C53.063 20.3062 53.2257 20.4749 53.3835 20.6493C53.5413 20.8237 53.6929 21.0024 53.8396 21.1862C53.9863 21.3699 54.1268 21.5581 54.2618 21.7512C54.3967 21.9437 54.5255 22.1406 54.6482 22.3418C54.7708 22.5424 54.8867 22.7474 54.997 22.9556C55.1067 23.1637 55.2103 23.3756 55.307 23.5906C55.4038 23.8056 55.4944 24.0237 55.5776 24.2443C55.6608 24.4649 55.7372 24.6881 55.8069 24.9137C55.8765 25.1393 55.9388 25.3668 55.9942 25.5962C56.0497 25.8262 56.0978 26.0568 56.1391 26.2899C56.1804 26.5224 56.2136 26.7562 56.2408 26.9912C56.2673 27.2256 56.2864 27.4612 56.2987 27.6974C56.3104 27.9331 56.3153 28.1693 56.3123 28.4056C56.3098 28.6418 56.2999 28.8781 56.2827 29.1137C56.2654 29.3493 56.2408 29.5843 56.2087 29.8187C56.1773 30.0524 56.1378 30.2856 56.0916 30.5174C56.0454 30.7487 55.9924 30.9787 55.932 31.2068C55.871 31.4356 55.8038 31.6612 55.7292 31.8856C55.6546 32.1093 55.5733 32.3306 55.4852 32.5493C55.3964 32.7681 55.3015 32.9837 55.2004 33.1968C55.0987 33.4093 54.9902 33.6187 54.8756 33.8243C54.761 34.0299 54.6402 34.2318 54.5132 34.4299C54.3863 34.6281 54.2531 34.8224 54.1138 35.0118C53.9746 35.2012 53.8297 35.3862 53.6793 35.5668C53.529 35.7474 53.3724 35.9224 53.2109 36.0931C53.0495 36.2637 52.8831 36.4287 52.7117 36.5887C52.5398 36.7481 52.3635 36.9024 52.1817 37.0512C52.0005 37.1993 51.815 37.3424 51.6251 37.4787C51.4347 37.6156 51.2406 37.7462 51.0427 37.8706C50.8443 37.9949 50.6427 38.1131 50.4369 38.2243C50.2316 38.3356 50.0227 38.4406 49.8107 38.5387C49.5987 38.6368 49.3836 38.7287 49.166 38.8131C48.9485 38.8974 48.7284 38.9749 48.506 39.0456C48.2835 39.1156 48.0591 39.1793 47.8323 39.2349C47.6061 39.2912 47.3781 39.3406 47.1488 39.3818C46.9195 39.4237 46.689 39.4581 46.4573 39.4849C46.2262 39.5118 45.9938 39.5312 45.7609 39.5431C45.5279 39.5556 45.2955 39.5599 45.062 39.5574C44.829 39.5549 44.5966 39.5449 44.3643 39.5268C44.1313 39.5093 43.9002 39.4843 43.6691 39.4524C43.438 39.4199 43.2087 39.3806 42.98 39.3337C42.7514 39.2862 42.5252 39.2324 42.2996 39.1706C42.0747 39.1093 41.8522 39.0412 41.6309 38.9656C41.4103 38.8899 41.1921 38.8074 40.9764 38.7174C40.7607 38.6281 40.548 38.5318 40.3379 38.4287C40.1283 38.3256 39.9219 38.2162 39.7191 38.0999C39.5163 37.9837 39.3172 37.8606 39.1219 37.7318C38.9265 37.6031 38.7354 37.4681 38.5481 37.3268C38.3613 37.1856 38.1789 37.0387 38.0008 36.8862C37.8233 36.7331 37.6501 36.5749 37.4825 36.4112C37.3142 36.2474 37.1515 36.0787 36.9937 35.9043C36.8359 35.7299 36.6843 35.5512 36.5376 35.3674C36.391 35.1837 36.2504 34.9949 36.1161 34.8024C35.9811 34.6093 35.8523 34.4124 35.7296 34.2118C35.607 34.0106 35.4911 33.8062 35.3808 33.5974C35.2711 33.3893 35.1676 33.1774 35.0708 32.9624C34.974 32.7474 34.8841 32.5293 34.8009 32.3087C34.7177 32.0881 34.6412 31.8649 34.5716 31.6393C34.5026 31.4137 34.4397 31.1862 34.3848 30.9562C34.3294 30.7268 34.2813 30.4956 34.24 30.2631C34.1993 30.0306 34.1654 29.7968 34.1389 29.5618C34.1124 29.3268 34.0933 29.0912 34.081 28.8556C34.0693 28.6193 34.0644 28.3831 34.0674 28.1468C34.0699 27.9106 34.0798 27.6743 34.0976 27.4387C34.1149 27.2031 34.1395 26.9681 34.171 26.7343C34.203 26.4999 34.2425 26.2668 34.2887 26.0356C34.3349 25.8037 34.3885 25.5737 34.4489 25.3456C34.5093 25.1174 34.5771 24.8912 34.6517 24.6674C34.7263 24.4437 34.8076 24.2224 34.8964 24.0037C34.9845 23.7849 35.0794 23.5693 35.1811 23.3562C35.2828 23.1437 35.3913 22.9343 35.5059 22.7287C35.6206 22.5231 35.7414 22.3212 35.8683 22.1231C35.9959 21.9249 36.129 21.7312 36.2683 21.5418C36.407 21.3518 36.5524 21.1668 36.7028 20.9868C36.8532 20.8062 37.0097 20.6312 37.1712 20.4606C37.3327 20.2906 37.4991 20.1249 37.6711 19.9656C37.843 19.8056 38.0193 19.6518 38.2005 19.5031C38.3817 19.3543 38.5678 19.2118 38.7576 19.0756C38.9481 18.9387 39.1422 18.8081 39.3407 18.6837C39.5385 18.5593 39.7407 18.4418 39.9459 18.3306L37.6544 12.2531L29.7544 28.8937C29.6977 29.0137 29.625 29.1224 29.5381 29.2218C29.4506 29.3206 29.3514 29.4049 29.2404 29.4756C29.1295 29.5462 29.0112 29.5993 28.8854 29.6362C28.7597 29.6724 28.6309 29.6906 28.5002 29.6906H22.8523C22.8085 30.0424 22.7481 30.3912 22.6717 30.7368C22.5947 31.0824 22.5022 31.4243 22.3943 31.7612C22.2859 32.0981 22.1626 32.4293 22.0233 32.7543C21.884 33.0793 21.7306 33.3974 21.5617 33.7074C21.3934 34.0181 21.211 34.3199 21.0144 34.6131C20.8178 34.9062 20.6076 35.1893 20.3845 35.4618C20.162 35.7349 19.9266 35.9968 19.6795 36.2474C19.4323 36.4974 19.1741 36.7362 18.9047 36.9618C18.6354 37.1874 18.3562 37.3999 18.0672 37.5993C17.7775 37.7981 17.4798 37.9831 17.1735 38.1537C16.8672 38.3243 16.5541 38.4799 16.233 38.6212C15.9125 38.7618 15.5859 38.8868 15.2531 38.9962C14.9209 39.1056 14.5843 39.1993 14.2429 39.2762C13.9021 39.3537 13.5582 39.4143 13.2112 39.4593C12.8648 39.5037 12.5166 39.5312 12.1671 39.5424C11.8177 39.5537 11.4689 39.5481 11.12 39.5262C10.7712 39.5037 10.4242 39.4649 10.0791 39.4093C9.73392 39.3543 9.39186 39.2824 9.0535 39.1943C8.71452 39.1062 8.38109 39.0024 8.05198 38.8824C7.72348 38.7624 7.40053 38.6274 7.08436 38.4762C6.76819 38.3256 6.45941 38.1599 6.15865 37.9799C5.85788 37.7999 5.56575 37.6056 5.28286 37.3974C4.99997 37.1893 4.72755 36.9681 4.465 36.7337C4.20245 36.4993 3.95161 36.2531 3.71248 35.9949C3.47273 35.7368 3.24592 35.4681 3.03144 35.1881C2.81696 34.9081 2.61604 34.6187 2.42868 34.3193C2.24132 34.0206 2.06814 33.7131 1.90913 33.3974C1.75011 33.0818 1.6059 32.7593 1.47709 32.4299C1.34827 32.1006 1.23487 31.7656 1.13688 31.4256C1.03888 31.0849 0.956912 30.7412 0.890966 30.3931C0.825636 30.0449 0.775714 29.6943 0.742433 29.3412C0.709152 28.9887 0.692511 28.6349 0.691895 28.2806C0.691895 27.9256 0.707919 27.5718 0.740584 27.2187C0.773249 26.8649 0.822554 26.5143 0.887884 26.1656C0.953214 25.8168 1.03457 25.4724 1.13195 25.1312C1.22933 24.7906 1.34211 24.4549 1.47092 24.1249C1.59973 23.7949 1.74334 23.4718 1.90173 23.1556C2.06074 22.8393 2.23393 22.5318 2.42129 22.2318C2.60865 21.9324 2.80957 21.6424 3.02343 21.3618C3.23791 21.0812 3.46472 20.8118 3.70446 20.5531C3.94421 20.2943 4.19505 20.0474 4.45761 19.8124C4.71954 19.5781 4.99257 19.3562 5.27546 19.1474C5.55835 18.9393 5.85049 18.7443 6.15187 18.5637C6.45325 18.3831 6.76202 18.2174 7.07881 18.0662C7.39498 17.9149 7.71794 17.7793 8.04705 17.6593C8.37678 17.5387 8.71083 17.4349 9.0498 17.3462C9.38878 17.2581 9.73083 17.1862 10.0766 17.1312C10.4217 17.0756 10.7693 17.0368 11.1188 17.0143C11.4676 16.9924 11.8177 16.9868 12.1671 16.9981C12.5166 17.0093 12.8654 17.0368 13.2124 17.0818C13.5594 17.1262 13.9039 17.1874 14.2454 17.2649C14.5868 17.3424 14.9239 17.4362 15.2568 17.5456C15.5896 17.6556 15.9162 17.7812 16.2373 17.9218C16.5584 18.0631 16.8721 18.2193 17.1791 18.3906C17.4854 18.5612 17.7837 18.7468 18.0727 18.9462C18.3618 19.1462 18.6416 19.3593 18.9109 19.5856C19.1802 19.8118 19.4385 20.0506 19.6862 20.3018C19.9334 20.5524 20.1682 20.8149 20.3913 21.0887C20.6138 21.3624 20.824 21.6456 21.02 21.9393C21.2166 22.2331 21.399 22.5356 21.5672 22.8468C21.7355 23.1574 21.889 23.4762 22.0276 23.8018C22.1663 24.1274 22.2896 24.4593 22.3974 24.7968C22.5053 25.1343 22.5971 25.4768 22.6729 25.8231C22.7493 26.1693 22.8091 26.5187 22.8523 26.8706H26.3283L19.5433 7.60432C19.489 7.45119 19.4625 7.29307 19.4625 7.13057H17.3769C17.2857 7.13057 17.1951 7.12182 17.1057 7.10369C17.0163 7.08557 16.9294 7.05869 16.845 7.02307C16.7606 6.98807 16.6805 6.94432 16.6046 6.89307C16.5282 6.84182 16.4586 6.78307 16.3939 6.71744C16.3292 6.65244 16.2712 6.58119 16.2207 6.50369C16.1701 6.42682 16.127 6.34557 16.0925 6.25994C16.0574 6.17494 16.0309 6.08682 16.013 5.99557C15.9951 5.90494 15.9865 5.81307 15.9865 5.72057C15.9865 5.62807 15.9951 5.53619 16.013 5.44557C16.0309 5.35494 16.0574 5.26682 16.0925 5.18119C16.127 5.09557 16.1701 5.01432 16.2207 4.93744C16.2712 4.86057 16.3292 4.78932 16.3939 4.72369C16.4586 4.65807 16.5282 4.59994 16.6046 4.54807C16.6805 4.49682 16.7606 4.45369 16.845 4.41807C16.9294 4.38244 17.0163 4.35557 17.1057 4.33744C17.1951 4.31994 17.2857 4.31057 17.3769 4.31057H23.6338C23.725 4.31057 23.8156 4.31994 23.9049 4.33744C23.9943 4.35557 24.0812 4.38244 24.1657 4.41807C24.2501 4.45369 24.3302 4.49682 24.406 4.54807C24.4824 4.59994 24.5521 4.65807 24.6168 4.72369C24.6815 4.78932 24.7388 4.86057 24.79 4.93744C24.8405 5.01432 24.8837 5.09557 24.9182 5.18119C24.9533 5.26682 24.9798 5.35494 24.9977 5.44557C25.0156 5.53619 25.0242 5.62807 25.0242 5.72057C25.0242 5.81307 25.0156 5.90494 24.9977 5.99557C24.9798 6.08682 24.9533 6.17494 24.9182 6.25994C24.8837 6.34557 24.8405 6.42682 24.79 6.50369C24.7388 6.58119 24.6815 6.65244 24.6168 6.71744C24.5521 6.78307 24.4824 6.84182 24.406 6.89307C24.3302 6.94432 24.2501 6.98807 24.1657 7.02307C24.0812 7.05869 23.9943 7.08557 23.9049 7.10369C23.8156 7.12182 23.725 7.13057 23.6338 7.13057H22.3296L24.8904 14.4018L36.1907 8.37119L34.8489 4.81432C34.8144 4.72369 34.7898 4.63057 34.775 4.53432C34.7596 4.43869 34.754 4.34244 34.7589 4.24557C34.7633 4.14869 34.7774 4.05307 34.8009 3.95932C34.8249 3.86557 34.8576 3.77494 34.9001 3.68807C34.942 3.60119 34.9925 3.51932 35.0517 3.44307C35.1102 3.36619 35.1762 3.29682 35.2495 3.23432C35.3223 3.17182 35.4012 3.11744 35.485 3.07119C35.5688 3.02494 35.6569 2.98744 35.7488 2.95994L42.6737 0.853036C43.4219 0.625398 44.2123 1.05089 44.4343 1.80079ZM25.8346 17.0849L28.5766 24.8687L34.4582 12.4831L25.8346 17.0849ZM43.8866 28.7843L40.9486 20.9912C40.8001 21.0799 40.6547 21.1731 40.5117 21.2712C40.3693 21.3693 40.2294 21.4712 40.0932 21.5781C39.9564 21.6849 39.8232 21.7956 39.6938 21.9112C39.5638 22.0262 39.438 22.1449 39.3154 22.2681C39.1934 22.3912 39.0744 22.5181 38.9598 22.6487C38.8451 22.7787 38.7348 22.9131 38.6282 23.0506C38.5216 23.1874 38.4193 23.3287 38.3213 23.4724C38.2239 23.6162 38.1302 23.7631 38.0415 23.9124C37.9521 24.0624 37.8683 24.2149 37.7888 24.3699C37.7087 24.5249 37.6341 24.6824 37.5638 24.8418C37.4942 25.0018 37.4288 25.1631 37.3691 25.3274C37.3087 25.4912 37.2538 25.6568 37.2039 25.8237C37.154 25.9912 37.109 26.1599 37.0695 26.3299C37.0295 26.4999 36.995 26.6712 36.966 26.8431C36.937 27.0156 36.913 27.1887 36.8945 27.3624C36.8754 27.5362 36.8624 27.7106 36.8544 27.8849C36.8464 28.0593 36.8433 28.2343 36.8464 28.4087C36.8489 28.5837 36.8569 28.7581 36.8705 28.9324C36.8834 29.1068 36.9025 29.2806 36.9265 29.4537C36.95 29.6268 36.9795 29.7987 37.0141 29.9699C37.0486 30.1412 37.088 30.3112 37.133 30.4799C37.178 30.6487 37.2279 30.8162 37.2828 30.9818C37.3382 31.1474 37.398 31.3112 37.4634 31.4731C37.5281 31.6349 37.5983 31.7943 37.6729 31.9518C37.7481 32.1093 37.8276 32.2643 37.912 32.4168C37.9965 32.5687 38.0852 32.7187 38.1789 32.8656C38.272 33.0124 38.37 33.1562 38.4723 33.2968C38.5746 33.4374 38.6812 33.5749 38.7915 33.7087C38.9025 33.8431 39.0171 33.9731 39.1354 34.0999C39.2544 34.2268 39.3764 34.3499 39.5028 34.4687C39.6291 34.5881 39.7585 34.7031 39.8917 34.8143C40.0248 34.9249 40.1616 35.0318 40.3009 35.1343C40.4408 35.2362 40.5832 35.3343 40.7292 35.4274C40.8747 35.5212 41.0232 35.6099 41.1742 35.6937C41.3252 35.7781 41.4787 35.8574 41.6346 35.9318C41.7905 36.0062 41.9489 36.0756 42.1092 36.1399C42.2694 36.2049 42.4315 36.2643 42.5948 36.3187C42.7588 36.3724 42.9239 36.4218 43.091 36.4656C43.258 36.5099 43.4256 36.5481 43.5951 36.5818C43.764 36.6149 43.9341 36.6431 44.1054 36.6656C44.2761 36.6887 44.4475 36.7056 44.6194 36.7174C44.7914 36.7293 44.9633 36.7362 45.1359 36.7374C45.3085 36.7381 45.4804 36.7337 45.6524 36.7243C45.825 36.7143 45.9963 36.6993 46.1676 36.6787C46.339 36.6581 46.5091 36.6324 46.6786 36.6012C46.8481 36.5699 47.0169 36.5337 47.1839 36.4918C47.3516 36.4499 47.5174 36.4024 47.6819 36.3506C47.8465 36.2981 48.0092 36.2406 48.1701 36.1781C48.3309 36.1156 48.4899 36.0487 48.6465 35.9762C48.8036 35.9037 48.9577 35.8262 49.1099 35.7437C49.2622 35.6618 49.4119 35.5749 49.5586 35.4831C49.7053 35.3918 49.8489 35.2956 49.9901 35.1949C50.1312 35.0943 50.2686 34.9893 50.4036 34.8799C50.538 34.7712 50.6686 34.6574 50.7968 34.5399C50.9244 34.4224 51.0483 34.3012 51.1684 34.1756C51.2886 34.0506 51.4045 33.9218 51.5167 33.7887C51.6288 33.6562 51.7373 33.5206 51.8415 33.3812C51.945 33.2418 52.0449 33.0993 52.1404 32.9531C52.2353 32.8074 52.3259 32.6593 52.4122 32.5081C52.4985 32.3562 52.5798 32.2024 52.6569 32.0462C52.7333 31.8893 52.8054 31.7306 52.8726 31.5699C52.9398 31.4087 53.002 31.2456 53.0587 31.0812C53.116 30.9162 53.1678 30.7493 53.2146 30.5812C53.2621 30.4131 53.3034 30.2437 53.3404 30.0731C53.3767 29.9018 53.4082 29.7299 53.434 29.5574C53.4605 29.3849 53.4809 29.2112 53.4963 29.0374C53.5123 28.8631 53.5222 28.6887 53.5271 28.5137C53.532 28.3393 53.5314 28.1643 53.5253 27.9899C53.5197 27.8149 53.5086 27.6406 53.492 27.4668C53.4753 27.2931 53.4538 27.1193 53.4266 26.9468C53.3995 26.7743 53.3669 26.6031 53.3293 26.4324C53.2917 26.2618 53.2491 26.0924 53.2011 25.9243C53.153 25.7568 53.1 25.5906 53.0421 25.4256C52.9841 25.2612 52.9206 25.0987 52.8529 24.9381C52.7851 24.7774 52.7117 24.6193 52.6341 24.4631C52.5564 24.3074 52.4744 24.1537 52.3869 24.0031C52.3 23.8518 52.2082 23.7043 52.112 23.5593C52.0159 23.4137 51.9154 23.2718 51.8107 23.1331C51.7059 22.9943 51.5974 22.8593 51.484 22.7274C51.3712 22.5956 51.2541 22.4668 51.1333 22.3424C51.0119 22.2181 50.8874 22.0974 50.7592 21.9806C50.631 21.8637 50.4991 21.7512 50.3642 21.6431C50.2292 21.5343 50.0905 21.4306 49.9494 21.3306C49.8076 21.2306 49.6634 21.1356 49.5155 21.0449C49.3682 20.9543 49.2184 20.8681 49.0656 20.7868C48.9133 20.7056 48.758 20.6293 48.6009 20.5581C48.4437 20.4862 48.2847 20.4199 48.1232 20.3581C47.9617 20.2968 47.7984 20.2406 47.6339 20.1893C47.4693 20.1381 47.3029 20.0918 47.1353 20.0512C46.9676 20.0106 46.7994 19.9749 46.6293 19.9443C46.4598 19.9143 46.2891 19.8893 46.1177 19.8699C45.9464 19.8506 45.775 19.8362 45.6025 19.8281C45.4305 19.8193 45.2579 19.8156 45.086 19.8181C44.9134 19.8199 44.7415 19.8274 44.5695 19.8406C44.3976 19.8537 44.2262 19.8718 44.0555 19.8956C43.8848 19.9193 43.7147 19.9487 43.5458 19.9831L46.4838 27.7774C46.5152 27.8637 46.5374 27.9518 46.5516 28.0424C46.5658 28.1331 46.5713 28.2243 46.5676 28.3162C46.5645 28.4074 46.5522 28.4981 46.5313 28.5874C46.5103 28.6768 46.4813 28.7631 46.4437 28.8468C46.4062 28.9299 46.3612 29.0093 46.3082 29.0837C46.2558 29.1581 46.1966 29.2268 46.1307 29.2899C46.0647 29.3524 45.9932 29.4087 45.9168 29.4574C45.8398 29.5056 45.759 29.5468 45.6746 29.5793C45.5901 29.6118 45.5032 29.6362 45.4145 29.6518C45.3251 29.6674 45.2351 29.6743 45.1445 29.6718C45.0546 29.6699 44.9652 29.6587 44.8764 29.6387C44.7883 29.6187 44.7026 29.5906 44.6201 29.5537C44.5369 29.5168 44.4586 29.4718 44.384 29.4199C44.3101 29.3674 44.241 29.3081 44.1782 29.2418C44.1153 29.1762 44.0598 29.1043 44.0105 29.0274C43.9612 28.9506 43.9199 28.8693 43.8866 28.7843ZM20.0425 26.8706H11.8152C11.724 26.8706 11.6334 26.8799 11.544 26.8974C11.4547 26.9156 11.3678 26.9424 11.2833 26.9781C11.1989 27.0137 11.1188 27.0568 11.043 27.1081C10.9666 27.1599 10.8969 27.2181 10.8322 27.2837C10.7675 27.3493 10.7095 27.4206 10.659 27.4974C10.6085 27.5743 10.5653 27.6556 10.5308 27.7412C10.4957 27.8268 10.4692 27.9149 10.4513 28.0056C10.4334 28.0962 10.4248 28.1881 10.4248 28.2806C10.4248 28.3731 10.4334 28.4649 10.4513 28.5556C10.4692 28.6468 10.4957 28.7349 10.5308 28.8199C10.5653 28.9056 10.6085 28.9868 10.659 29.0637C10.7095 29.1412 10.7675 29.2124 10.8322 29.2774C10.8969 29.3431 10.9666 29.4018 11.043 29.4531C11.1188 29.5043 11.1989 29.5481 11.2833 29.5831C11.3678 29.6187 11.4547 29.6456 11.544 29.6637C11.6334 29.6818 11.724 29.6906 11.8152 29.6906H20.0425C19.9987 29.9487 19.9432 30.2043 19.8761 30.4568C19.8089 30.7099 19.73 30.9587 19.64 31.2043C19.55 31.4499 19.449 31.6906 19.3374 31.9262C19.2252 32.1624 19.1026 32.3924 18.9695 32.6168C18.8363 32.8412 18.6934 33.0587 18.5405 33.2699C18.3877 33.4806 18.2249 33.6837 18.0536 33.8799C17.8817 34.0756 17.7017 34.2624 17.5131 34.4412C17.3245 34.6199 17.1279 34.7893 16.9233 34.9493C16.7193 35.1093 16.5079 35.2599 16.2903 35.3999C16.0721 35.5406 15.8484 35.6706 15.6185 35.7893C15.3886 35.9087 15.1538 36.0168 14.9141 36.1143C14.6743 36.2112 14.4303 36.2968 14.1825 36.3712C13.9354 36.4456 13.6845 36.5074 13.4312 36.5581C13.1779 36.6087 12.9228 36.6474 12.6657 36.6743C12.4094 36.7006 12.1517 36.7156 11.8935 36.7174C11.6353 36.7199 11.3776 36.7099 11.12 36.6881C10.863 36.6662 10.6072 36.6324 10.3527 36.5868C10.0988 36.5406 9.84732 36.4831 9.59833 36.4131C9.34933 36.3437 9.10404 36.2624 8.86244 36.1693C8.62146 36.0768 8.38479 35.9731 8.15244 35.8581C7.9207 35.7431 7.69452 35.6174 7.47387 35.4812C7.25323 35.3449 7.03937 35.1981 6.83228 35.0418C6.62582 34.8856 6.42613 34.7199 6.23384 34.5443C6.04216 34.3693 5.8585 34.1856 5.68347 33.9931C5.50843 33.8006 5.34264 33.5999 5.1861 33.3924C5.02955 33.1843 4.88225 32.9693 4.74543 32.7474C4.60799 32.5256 4.48164 32.2974 4.36516 32.0637C4.24929 31.8299 4.1439 31.5912 4.0496 31.3474C3.95531 31.1037 3.8721 30.8556 3.80061 30.6043C3.72912 30.3524 3.66872 30.0981 3.62064 29.8412C3.57195 29.5837 3.53559 29.3249 3.51094 29.0643C3.48629 28.8037 3.47334 28.5424 3.47273 28.2806C3.47273 28.0181 3.48444 27.7562 3.50786 27.4949C3.53189 27.2337 3.56764 26.9737 3.6151 26.7162C3.66255 26.4581 3.72234 26.2031 3.79321 25.9506C3.86409 25.6981 3.94668 25.4499 4.04036 25.2049C4.13465 24.9606 4.23943 24.7206 4.3553 24.4862C4.47116 24.2512 4.59751 24.0231 4.73433 23.7999C4.87116 23.5774 5.01784 23.3612 5.17439 23.1524C5.33093 22.9437 5.49672 22.7424 5.67176 22.5493C5.84679 22.3562 6.03045 22.1712 6.22274 21.9956C6.41442 21.8193 6.61411 21.6531 6.82181 21.4956C7.02889 21.3387 7.24275 21.1918 7.46401 21.0549C7.68465 20.9181 7.91146 20.7918 8.14381 20.6762C8.37616 20.5606 8.61345 20.4562 8.85504 20.3631C9.09726 20.2699 9.34255 20.1887 9.59216 20.1187C9.84177 20.0487 10.0938 19.9906 10.3484 19.9449C10.6035 19.8987 10.8599 19.8643 11.1176 19.8424C11.3758 19.8206 11.634 19.8106 11.8929 19.8131C12.1517 19.8156 12.4094 19.8306 12.667 19.8574C12.9246 19.8837 13.1804 19.9231 13.4343 19.9737C13.6876 20.0249 13.9391 20.0874 14.1868 20.1618C14.4352 20.2368 14.6793 20.3231 14.9196 20.4206C15.16 20.5181 15.3948 20.6268 15.6253 20.7468C15.8552 20.8668 16.0795 20.9968 16.2977 21.1381C16.5165 21.2793 16.7273 21.4299 16.9319 21.5912C17.1365 21.7518 17.3331 21.9224 17.5217 22.1018C17.7103 22.2812 17.8909 22.4693 18.0622 22.6656C18.2336 22.8624 18.3957 23.0668 18.5485 23.2781C18.7014 23.4899 18.8443 23.7087 18.9769 23.9343C19.11 24.1593 19.232 24.3906 19.3436 24.6274C19.4551 24.8643 19.5556 25.1056 19.6449 25.3518C19.7343 25.5981 19.812 25.8481 19.8785 26.1018C19.9445 26.3556 19.9993 26.6118 20.0425 26.8706Z", fill: "white" })), xo = (i) => /* @__PURE__ */ z("svg", { preserveAspectRatio: "none", width: 123, height: 82, viewBox: "0 0 123 82", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M120.365 37.1527C122.774 39.152 122.774 42.848 120.365 44.8473L76.9935 80.8473C76.0961 81.5923 74.9664 82 73.8001 82L0 82L0 0L73.8001 0C74.9664 0 76.0961 0.407744 76.9935 1.15267L120.365 37.1527Z", fill: "currentColor" })), K1 = (i, e) => {
  const [t, r] = M(i);
  return j(() => {
    const n = setTimeout(() => {
      r(i);
    }, e);
    return () => {
      clearTimeout(n);
    };
  }, [i, e]), t;
}, Ts = (i) => /* @__PURE__ */ z("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("circle", { cx: 16, cy: 16, r: 16, fill: "#030712" }), /* @__PURE__ */ z("path", { d: "M15.6047 20.0343C15.1 20.0343 14.6794 19.6137 14.6794 19.109V18.7389C14.6121 16.7203 15.9748 15.8455 16.9673 15.2062C18.0439 14.5165 18.6495 14.0623 18.6495 12.8343C18.6495 11.2698 17.5056 10.2604 15.7393 10.2604C15.3187 10.2773 13.3505 10.496 13.3505 12.8175C13.3505 13.3221 12.9299 13.7427 12.4252 13.7427C11.9206 13.7427 11.5 13.3221 11.5 12.8175C11.5 9.4025 14.2589 8.44362 15.7056 8.40997H15.7224C18.5318 8.40997 20.5 10.2268 20.5 12.8343C20.5 15.1389 19.0364 16.081 17.9766 16.7707C16.9841 17.41 16.5131 17.7632 16.5467 18.6885C16.5467 18.7053 16.5467 18.7053 16.5467 18.7221V19.109C16.5299 19.6305 16.1093 20.0343 15.6047 20.0343Z", fill: "white" }), /* @__PURE__ */ z("path", { d: "M15.6887 23.5838C16.274 23.5838 16.7485 23.1093 16.7485 22.524C16.7485 21.9387 16.274 21.4642 15.6887 21.4642C15.1034 21.4642 14.6289 21.9387 14.6289 22.524C14.6289 23.1093 15.1034 23.5838 15.6887 23.5838Z", fill: "white" })), Rr = (i) => /* @__PURE__ */ z("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("circle", { cx: 16, cy: 16, r: 16, fill: "#10B981" }), /* @__PURE__ */ z("path", { d: "M10.5261 17.6842L14.4467 21.1056L21.5366 11.2421", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), bn = (i) => /* @__PURE__ */ z("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("circle", { cx: 16, cy: 16, r: 16, fill: "#EF4444" }), /* @__PURE__ */ z("path", { d: "M10.913 21.0829L15.9959 16M15.9959 16L21.0789 10.9171M15.9959 16L21.0789 21.0829M15.9959 16L10.913 10.9171", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), zr = (i) => /* @__PURE__ */ z("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("circle", { cx: 16, cy: 16, r: 15.5, fill: "#F59E0B", stroke: "#F59E0B" }), /* @__PURE__ */ z("path", { d: "M18 23.9603C18 25.0648 17.1041 25.96 15.9997 25.96C14.8951 25.96 14 25.0648 14 23.9603C14 22.8548 14.8951 21.96 15.9997 21.96C17.1041 21.9602 18 22.8551 18 23.9603Z", fill: "white" }), /* @__PURE__ */ z("path", { d: "M18.222 8.13512C18.1818 7.67877 18.0044 7.24904 17.7339 6.89648C17.3204 6.35776 16.6887 5.99896 15.9949 6C15.3216 5.99917 14.7072 6.33675 14.2935 6.84864C14.0016 7.20973 13.8096 7.65776 13.7676 8.13512C13.7565 8.26117 13.7578 8.39783 13.7676 8.52034L14.6898 18.9815C14.7177 19.2972 14.8575 19.5762 15.0669 19.7837C15.3063 20.0211 15.6364 20.1652 15.9949 20.1648C16.3175 20.1652 16.6171 20.0483 16.8481 19.8522C17.0987 19.6396 17.2688 19.333 17.2998 18.9813L18.222 8.52013C18.232 8.39762 18.2331 8.26117 18.222 8.13512Z", fill: "white" })), ri = {
  unavailable: {
    icon: Ts,
    heading: "Compatibility Information Not Available",
    heading_code: "checksku_message_nocompatibilityinfo"
  },
  check: {
    icon: Ts,
    heading: "Check Compatibility",
    heading_code: "productcheck_nobikeselected_label",
    details: "Add your ride to check if this part fits",
    details_code: "productcheck_nobikeselected_message"
  },
  compatible: {
    icon: Rr,
    heading: "Compatible",
    heading_code: "compatible"
  },
  incompatible: {
    icon: bn,
    heading: "Not Compatible",
    heading_code: "not_compatible"
  },
  warning: {
    icon: zr,
    heading: "Compatible - Check Notes",
    heading_code: "compatible_check_notes"
  }
};
function Z1({
  type: i,
  onSelect: e,
  categoryId: t,
  removePart: r,
  notes: n,
  clearNotes: s,
  notesViewed: o,
  setNotesViewed: a
}) {
  var V;
  const u = window.BikeMatrix.getConfig(), c = new Se(
    u.apiUrl,
    u.apiKey,
    u.apiToken,
    u.isShopify
  ), [d, h] = M(!1), f = Y(null), v = Y(null), g = Y(null), [w, m] = M(""), [b, x] = M(null), [_, C] = M([]), [A, k] = M(!1), [y, D] = M(""), E = K1(w, 500), [L, T] = M(!1), { t: F } = ee(), N = async () => {
    k(!0);
    const U = await c.findProducts(w, t);
    U.success ? (k(!1), C(U.data)) : (k(!1), D(U.error), u.logLevel === "verbose" && console.error(U.logError));
  };
  j(() => {
    (E && !b && w.length > 2 || E && b && (b == null ? void 0 : b.display_Name) !== w) && N();
  }, [E]), j(() => {
    _.length > 0 && w.length > 2 && q();
  }, [_]);
  const O = (U) => {
    x(U), m(U.display_Name), e(U);
  };
  j(() => {
    b && w === b.display_Name && R();
  }, [w, b]);
  const q = () => {
    Q.to(f.current, { height: "auto" });
  }, R = () => {
    Q.to(f.current, {
      height: 0
    });
  }, S = () => {
    d && P(), m(""), C([]), R(), s();
  };
  j(() => {
    d || (x(null), r());
  }, [d]);
  const B = () => {
    Q.to(v.current, {
      transform: "translateY(112px)",
      duration: 1,
      onComplete: () => h(!0)
    });
  }, P = () => {
    Q.to(v.current, {
      transform: "translateY(0px)",
      duration: 1,
      onComplete: () => h(!1)
    });
  };
  return j(() => {
    i ? B() : !i && d && P();
  }, [i]), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("div", { className: "search-wrapper", children: [
      /* @__PURE__ */ p("style", { type: "text/css", children: W1 }),
      y && /* @__PURE__ */ p(nt, { messages: y }),
      /* @__PURE__ */ p(
        "div",
        {
          className: X("compatibility-wrapper"),
          ref: g,
          style: { height: i === "warning" ? "140px" : "110px" },
          children: /* @__PURE__ */ p(
            "div",
            {
              className: X(
                "compatibility ",
                {
                  compatible: "bg-emerald-50",
                  incompatible: "bg-red-50",
                  warning: "bg-amber-50",
                  "no-information": "bg-white"
                }[i]
              ),
              style: {
                borderColor: i === "compatible" ? "rgb(16 185 129)" : i == "incompatible" ? "rgb(239 68 68)" : i === "warning" ? "rgb(245 158 11)" : i === "no-information" ? "#000" : "transparent"
              },
              ref: v,
              children: [
                /* @__PURE__ */ p("div", { className: X("compatibility-contents"), children: [
                  /* @__PURE__ */ p(
                    xo,
                    {
                      class: X(
                        "self-start h-full w-[93px] polygon",
                        {
                          compatible: "text-emerald-500",
                          incompatible: "text-red-500",
                          warning: "text-amber-500",
                          "no-information": "text-black"
                        }[i]
                      )
                    }
                  ),
                  /* @__PURE__ */ p(wo, { class: "h-[26px] w-[37.5px] absolute bikon" }),
                  /* @__PURE__ */ p(
                    "p",
                    {
                      className: X(
                        "font-semibold text-lg ml-[105px]",
                        {
                          compatible: "text-emerald-500",
                          incompatible: "text-red-500",
                          warning: "text-amber-950",
                          "no-information": "text-black"
                        }[i]
                      ),
                      children: F((V = ri[i]) == null ? void 0 : V.heading_code)
                    }
                  ),
                  i === "warning" && /* @__PURE__ */ p(
                    "button",
                    {
                      className: "compatibility-warning_button",
                      onClick: () => T(!0),
                      children: "Notes"
                    }
                  )
                ] }),
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: X(
                      "compatibility-background ",
                      {
                        compatible: "bg-emerald-500",
                        incompatible: "bg-red-500",
                        warning: "bg-amber-500",
                        "no-information": "bg-black"
                      }[i]
                    )
                  }
                )
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ p(
        "div",
        {
          className: X(
            "search_bar-wrapper text-lg",
            {
              compatible: "bg-emerald-50 border-emerald-500",
              incompatible: "bg-red-50 border-red-500",
              warning: "bg-amber-50 border-amber-500",
              "no-information": "bg-white border-black-500"
            }[i]
          ),
          style: {
            borderColor: i === "compatible" ? "rgb(16 185 129)" : i == "incompatible" ? "rgb(239 68 68)" : i === "warning" ? "rgb(245 158 11)" : "rgb(0 0 0)"
          },
          children: [
            /* @__PURE__ */ p("div", { className: "input_icon-wrapper", children: [
              !A && /* @__PURE__ */ p("div", { className: "svg-wrapper", children: /* @__PURE__ */ p(Y1, {}) }),
              /* @__PURE__ */ p(St, { isLoading: A, colour: "#000" }),
              /* @__PURE__ */ p(
                "input",
                {
                  type: "text",
                  placeholder: F("virtualworkshop_search_text"),
                  value: w,
                  onChange: (U) => m(U.currentTarget.value)
                }
              )
            ] }),
            /* @__PURE__ */ p("div", { className: "svg-wrapper", onClick: S, children: /* @__PURE__ */ p(Qu, {}) })
          ]
        }
      ),
      /* @__PURE__ */ p("div", { className: "results-wrapper", ref: f, children: /* @__PURE__ */ p("div", { className: "results text-lg", children: _ && _.length > 0 ? _.map((U) => /* @__PURE__ */ p(
        "div",
        {
          className: "result",
          onClick: () => {
            O(U);
          },
          children: U.display_Name
        },
        U.product_ID
      )) : /* @__PURE__ */ p("div", { className: "result", children: F("error_find_products_no_results") }) }) })
    ] }),
    /* @__PURE__ */ p(
      fo,
      {
        isOpen: L,
        toggleModal: () => T(!1),
        title: "Notes",
        onConfirm: () => {
          a(), T(!1);
        },
        onCancel: () => T(!1),
        children: /* @__PURE__ */ p("div", { className: "notes-wrapper", children: [
          !!n.compatible && /* @__PURE__ */ p("p", { class: "text-sm flex", children: [
            /* @__PURE__ */ p(
              Rr,
              {
                class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
              }
            ),
            " ",
            n.compatible
          ] }),
          /* @__PURE__ */ p("p", { class: "text-sm flex", children: [
            /* @__PURE__ */ p(
              zr,
              {
                class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
              }
            ),
            " ",
            n.warning
          ] })
        ] })
      }
    )
  ] });
}
function X1() {
  const { t: i } = ee(), t = window.BikeMatrix.getConfig(), r = xn.value, n = ke.value, s = new Se(
    t.apiUrl,
    t.apiKey,
    t.apiToken,
    t.isShopify
  ), { currentBike: o, setCurrentBike: a } = Re(), [l, u] = M(!1), [c, d] = M(null), [h, f] = M(null), [v, g] = M(null), [w, m] = M({ compatible: "", warning: "" }), [b, x] = M(!1);
  o.isShared && te("/");
  const _ = async () => {
    u(!0), go(), n[r.category.split(" ").join("_")][r.type.split(" ").join("_")] = {
      ...n[r.category.split(" ").join("_")][r.type.split(" ").join("_")],
      id: h.product_ID,
      name: h.display_Name,
      unsaved_changes: !0
    }, ke.value = n;
    const A = await s.addComponent(
      o.key,
      h.product_Category_ID,
      h.product_ID,
      mo[r.type.split(" ").join("_")]
    );
    if (A.success)
      a({ ...o }), te("/bom");
    else {
      g(A.error), u(!1), t.logLevel === "verbose" && console.error(A.logError);
      return;
    }
  }, C = async (A) => {
    var k;
    if (m({ compatible: "", warning: "" }), !A.skU_EAN && !A.skU_UPC && !A.manufacturer_Part_Number)
      d("no-information");
    else {
      f(A);
      const y = ((k = Ut()) == null ? void 0 : k.language) || "en-GB", D = await s.checkSkuCompatibility(
        o.key,
        A.skU_EAN || A.skU_UPC || A.manufacturer_Part_Number,
        y,
        "WorkshopCheckPart",
        t.currentCollectionHandle
      );
      D.success || (t.logLevel === "verbose" && console.error(D.logError), g(D.error)), D.data.compatible && D.data.warning ? (x(!1), d("warning"), m({
        warning: D.data.warningMessage,
        compatible: D.data.compatibilityMessage
      })) : D.data.compatible ? (d("compatible"), x(!0)) : D.data.compatible || d("incompatible");
    }
  };
  return r ? /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("div", { children: [
      o ? /* @__PURE__ */ p(it, { bike: o, selected: !0, settings: !0 }) : /* @__PURE__ */ p(Ur, {}),
      /* @__PURE__ */ p("div", { className: "part-wrapper mt-8 mb-8", children: [
        /* @__PURE__ */ p(
          kt,
          {
            text: r != null && r.type ? i("virtualworkshop_current") + " " + i(
              `category_${r.type.replace(/[ &]/g, "").toLocaleLowerCase()}`
            ) + ":" : i(
              `category_${r.type.replace(/[ &]/g, "").toLocaleLowerCase()}`
            ),
            bold: !0,
            capitalize: !0
          }
        ),
        /* @__PURE__ */ p(kt, { subheader: !0, text: r == null ? void 0 : r.part.name })
      ] })
    ] }),
    /* @__PURE__ */ p(
      Z1,
      {
        notes: w,
        onSelect: (A) => C(A),
        type: c,
        categoryId: r.part.product_category_id,
        clearNotes: () => m({ compatible: "", warning: "" }),
        removePart: () => {
          d(null), f(null);
        },
        notesViewed: b,
        setNotesViewed: () => x(!0)
      }
    ),
    /* @__PURE__ */ p(nt, { messages: v }),
    /* @__PURE__ */ p(
      pt,
      {
        text: i("confirm"),
        onClick: _,
        primary: !0,
        disabled: c === "incompatible" || c === "no-information" || !b,
        loading: l
      }
    ),
    /* @__PURE__ */ p(Et, {})
  ] }) : /* @__PURE__ */ p($, {});
}
const J1 = `.edit-field__wrapper{position:relative}.edit-container{display:flex;align-items:center;gap:1rem;margin-top:8px}.edit-input_wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:flex;align-items:center;height:54px;transition:ease-in-out all .5s}.edit-input_content{display:flex;gap:.5rem;cursor:pointer}.input-wrapper{width:100%}.edit-input{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.edit-input_content{width:100%;display:grid}.svg{width:20px;height:20px;cursor:pointer}.icon-wrapper{display:flex;align-items:center;gap:.25rem}.generic-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.edit-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.edit-button:hover{background-color:#000}.edit-button:hover svg{color:#fff}.edit-button:hover .label-wrapper{opacity:1;top:-32px}.edit-button:hover .tick{stroke:#fff}.edit-button svg{width:16px;height:16px}.tick{stroke:#000}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}.edit-open-wrapper{display:flex;gap:1rem}.notice{position:absolute;right:0;bottom:-20px}
`, Q1 = (i) => /* @__PURE__ */ z("svg", { width: 13, height: 13, viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M1.19739 8.1317L4.99549 11.4461L11.8639 1.8909", stroke: "currentColour", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), e0 = (i) => /* @__PURE__ */ z("svg", { width: 16, height: 16, viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M1.71186 11C1.14322 11 0.714757 10.8578 0.426485 10.5733C0.142162 10.2889 0 9.86613 0 9.30512V2.85152C0 2.28656 0.142162 1.86382 0.426485 1.58332C0.714757 1.29886 1.14322 1.15663 1.71186 1.15663H8.12098L7.30355 1.97444H1.72371C1.43149 1.97444 1.2064 2.05148 1.04844 2.20557C0.894433 2.35965 0.817429 2.58879 0.817429 2.893V9.25771C0.817429 9.56192 0.894433 9.79106 1.04844 9.94514C1.2064 10.0992 1.43149 10.1763 1.72371 10.1763H8.2513C8.47639 10.1763 8.66001 10.0992 8.80217 9.94514C8.94828 9.79106 9.02134 9.56192 9.02134 9.25771V3.72859L9.83877 2.90485V9.30512C9.83877 9.86613 9.70055 10.2889 9.42413 10.5733C9.15165 10.8578 8.76663 11 8.26907 11H1.71186ZM3.80875 7.3317C3.76136 7.35541 3.71792 7.34553 3.67843 7.30207C3.63894 7.25861 3.63104 7.21318 3.65474 7.16577L4.13453 6.16425L9.35305 0.943291L10.0757 1.65443L4.85126 6.87539L3.80875 7.3317ZM10.4785 1.25738L9.76176 0.534386L10.1527 0.143259C10.2396 0.0563415 10.3403 0.0089322 10.4548 0.00103064C10.5693 -0.00687092 10.668 0.0306615 10.751 0.113628L10.8694 0.232151C10.9603 0.323019 11.0037 0.425739 10.9998 0.540312C10.9998 0.654885 10.9543 0.761556 10.8635 0.860325L10.4785 1.25738Z", fill: "currentColor" })), Ua = ({
  value: i,
  onSave: e,
  loading: t,
  label: r,
  success: n,
  error: s
}) => {
  const { t: o } = ee(), [a, l] = M(!1), [u, c] = M(i), d = Y(null), h = Y(null), [f, v] = M({ type: "", message: "" }), [g, w] = M(!1), m = () => {
    const x = Q.timeline();
    x.to(h.current, { opacity: 0 }), x.to(h.current, {
      width: "124px"
    }), x.to(h.current, { onStart: () => l(!0), opacity: 1 });
  }, b = () => {
    const x = Q.timeline();
    x.to(h.current, { opacity: 0 }), x.to(h.current, {
      width: "54px"
    }), x.to(h.current, {
      onStart: () => {
        l(!1);
      },
      opacity: 1
    });
  };
  return j(() => {
    a && d.current.focus();
  }, [a]), j(() => {
    n ? (b(), v({
      type: "success",
      message: o("virtualworkshop_saved", { label: r })
    })) : !n && n !== null && (b(), v({ type: "error", message: s }));
  }, [n]), /* @__PURE__ */ p("div", { className: "edit-field__wrapper", children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: J1 }),
    r && /* @__PURE__ */ p("label", { class: "text-gray-800 font-bold text", children: r }),
    /* @__PURE__ */ p("div", { className: "edit-container", children: [
      /* @__PURE__ */ p(
        "div",
        {
          className: "edit-input_wrapper",
          style: a && { border: "1px solid #000" },
          children: [
            a && /* @__PURE__ */ p("div", { className: "input-wrapper", children: /* @__PURE__ */ p(
              "input",
              {
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
              }
            ) }),
            !a && /* @__PURE__ */ p("div", { className: "edit-input_content", children: /* @__PURE__ */ p("p", { className: "generic-text", children: i }) })
          ]
        }
      ),
      /* @__PURE__ */ p("div", { className: "edit-save-cancel-wrapper", ref: h, children: [
        !a && /* @__PURE__ */ p("div", { className: "edit-button", onClick: m, children: [
          /* @__PURE__ */ p("div", { className: "label-wrapper", children: /* @__PURE__ */ p("div", { className: "button-label", children: o("edit") }) }),
          /* @__PURE__ */ p(e0, {})
        ] }),
        a && /* @__PURE__ */ p(
          "div",
          {
            className: "edit-open-wrapper",
            onMouseOver: () => w(!0),
            onMouseLeave: () => w(!1),
            children: [
              /* @__PURE__ */ p(
                "div",
                {
                  className: "edit-button",
                  onClick: () => {
                    t || e(u);
                  },
                  children: [
                    /* @__PURE__ */ p("div", { className: "label-wrapper", children: /* @__PURE__ */ p("div", { className: "button-label", children: o("save") }) }),
                    t ? /* @__PURE__ */ p(
                      St,
                      {
                        isLoading: t,
                        colour: g ? "#fff" : "#000"
                      }
                    ) : /* @__PURE__ */ p(Q1, { className: "tick" })
                  ]
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  className: "edit-button",
                  onClick: () => {
                    t || b();
                  },
                  children: [
                    /* @__PURE__ */ p("div", { className: "label-wrapper", children: /* @__PURE__ */ p("div", { className: "button-label", children: o("cancel") }) }),
                    /* @__PURE__ */ p(hi, {})
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] }),
    f.message && /* @__PURE__ */ p(
      "p",
      {
        class: "text-xs notice flex",
        style: { color: f.type === "success" ? "#10B981" : "#EF4444" },
        children: f.message
      }
    )
  ] });
}, t0 = `.copy-share_wrapper{display:flex;align-items:center;gap:1rem;margin-top:8px}.value-wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:grid;height:54px}.generic-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.share-button,.copy-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.share-button:hover,.copy-button:hover{background-color:#000}.share-button:hover svg,.copy-button:hover svg{color:#fff}.share-button:hover .label-wrapper,.copy-button:hover .label-wrapper{opacity:1;top:-32px}.share-button svg,.copy-button svg{width:16px}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}
`, r0 = (i) => /* @__PURE__ */ z("svg", { width: 22, height: 27, viewBox: "0 0 22 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M5.23701 5.89236V3.30519C5.23701 2.21106 5.51143 1.38666 6.06029 0.831997C6.61677 0.277332 7.43624 0 8.51871 0H12.738C13.2717 0 13.7481 0.0759814 14.1674 0.227944C14.5942 0.379907 14.9906 0.638244 15.3565 1.00295L20.9938 6.71296C21.3825 7.10806 21.6455 7.51836 21.7827 7.94386C21.9276 8.36176 22 8.87083 22 9.47108V18.3837C22 19.4778 21.7256 20.3022 21.1767 20.8569C20.6355 21.404 19.8198 21.6775 18.7297 21.6775H16.4314V20.1047H18.6497C19.2367 20.1047 19.6788 19.9527 19.9761 19.6488C20.2734 19.3449 20.422 18.9118 20.422 18.3495V9.0152H15.1965C14.6019 9.0152 14.1559 8.87463 13.8586 8.5935C13.5613 8.30477 13.4127 7.85268 13.4127 7.23723V1.58421H8.59875C8.01178 1.58421 7.56583 1.73618 7.26091 2.0401C6.96362 2.34403 6.81497 2.77712 6.81497 3.33938V5.89236H5.23701ZM14.8534 7.02068C14.8534 7.40059 15.044 7.59054 15.4252 7.59054H19.999L14.8534 2.39341V7.02068ZM0 23.6948V8.61629C0 7.52216 0.274428 6.70156 0.823285 6.1545C1.37214 5.59983 2.1878 5.3225 3.27027 5.3225H7.13514C7.71448 5.3225 8.18711 5.38328 8.55301 5.50485C8.92654 5.62642 9.30769 5.88476 9.69647 6.27986L15.8025 12.4686C16.2065 12.8789 16.4695 13.2664 16.5915 13.6311C16.7134 13.9958 16.7744 14.5049 16.7744 15.1583V23.6948C16.7744 24.7889 16.5 25.6133 15.9511 26.168C15.4023 26.7227 14.5866 27 13.5042 27H3.27027C2.1878 27 1.37214 26.7227 0.823285 26.168C0.274428 25.6133 0 24.7889 0 23.6948ZM1.5894 23.6606C1.5894 24.2305 1.73423 24.6636 2.02391 24.9599C2.32121 25.2638 2.75953 25.4158 3.33888 25.4158H13.4127C13.9997 25.4158 14.4418 25.2638 14.7391 24.9599C15.044 24.6636 15.1965 24.2305 15.1965 23.6606V15.1811H9.01039C8.36244 15.1811 7.87457 15.0215 7.54678 14.7024C7.21899 14.3833 7.05509 13.8932 7.05509 13.2322V6.90671H3.35031C2.77096 6.90671 2.33264 7.05867 2.03534 7.3626C1.73805 7.65893 1.5894 8.08442 1.5894 8.63909V23.6606ZM9.18191 13.7108H14.8763L8.54158 7.29422V13.0612C8.54158 13.2892 8.59113 13.4563 8.69023 13.5627C8.79695 13.6615 8.96085 13.7108 9.18191 13.7108Z", fill: "currentColor" })), i0 = (i) => /* @__PURE__ */ z("svg", { width: 16, height: 21.6, viewBox: "0 0 20 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M3.58702 27C2.40708 27 1.51426 26.682 0.908555 26.046C0.302851 25.4184 0 24.4812 0 23.2343V11.4728C0 10.2176 0.302851 9.27615 0.908555 8.64854C1.51426 8.01255 2.40708 7.69456 3.58702 7.69456H6.89086V9.82845H3.66962C3.13471 9.82845 2.72566 9.97908 2.44248 10.2803C2.15929 10.5732 2.0177 11.0209 2.0177 11.6234V23.0837C2.0177 23.6695 2.15929 24.113 2.44248 24.4142C2.72566 24.7155 3.13471 24.8661 3.66962 24.8661H16.3422C16.8692 24.8661 17.2783 24.7155 17.5693 24.4142C17.8604 24.113 18.0059 23.6695 18.0059 23.0837V11.6234C18.0059 11.0209 17.8604 10.5732 17.5693 10.2803C17.2783 9.97908 16.8692 9.82845 16.3422 9.82845H13.1209V7.69456H16.413C17.6087 7.69456 18.5054 8.01255 19.1032 8.64854C19.7011 9.28452 20 10.2259 20 11.4728V23.2343C20 24.4812 19.7011 25.4184 19.1032 26.046C18.5054 26.682 17.6087 27 16.413 27H3.58702ZM10.0059 17.6109C9.73845 17.6109 9.51032 17.5105 9.32153 17.3096C9.13274 17.1088 9.03835 16.8745 9.03835 16.6067V4.53138L9.10914 2.76151L8.38938 3.62762L6.77286 5.46025C6.5998 5.66946 6.37955 5.77406 6.11209 5.77406C5.86037 5.77406 5.65192 5.69038 5.48673 5.52301C5.3294 5.34728 5.25074 5.13389 5.25074 4.88285C5.25074 4.6318 5.3412 4.41004 5.52212 4.21757L9.28614 0.351464C9.40413 0.225941 9.52212 0.138075 9.64012 0.0878661C9.75811 0.0292887 9.88004 0 10.0059 0C10.1318 0 10.2498 0.0292887 10.3599 0.0878661C10.4779 0.138075 10.5959 0.225941 10.7139 0.351464L14.4779 4.21757C14.6667 4.41004 14.7611 4.6318 14.7611 4.88285C14.7611 5.13389 14.6745 5.34728 14.5015 5.52301C14.3363 5.69038 14.1318 5.77406 13.8879 5.77406C13.6205 5.77406 13.4041 5.66946 13.2389 5.46025L11.6106 3.62762L10.8909 2.77406L10.9735 4.53138V16.6067C10.9735 16.8745 10.8751 17.1088 10.6785 17.3096C10.4897 17.5105 10.2655 17.6109 10.0059 17.6109Z", fill: "currentColor" })), Ha = ({
  text: i,
  onShare: e,
  label: t,
  onCopy: r
}) => {
  const { t: n } = ee(), [s, o] = M(n("virtualworkshop_copy"));
  return /* @__PURE__ */ p("div", { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: t0 }),
    t && /* @__PURE__ */ p("label", { class: "text-gray-800 font-bold text", children: t }),
    /* @__PURE__ */ p("div", { className: "copy-share_wrapper", children: [
      /* @__PURE__ */ p("div", { className: "value-wrapper", children: /* @__PURE__ */ p("div", { className: "generic-text", children: i }) }),
      e && /* @__PURE__ */ p("div", { className: "share-button", onClick: () => e(i), children: [
        /* @__PURE__ */ p("div", { className: "label-wrapper", children: /* @__PURE__ */ p("div", { className: "button-label", children: n("share") }) }),
        /* @__PURE__ */ p(i0, {})
      ] }),
      /* @__PURE__ */ p(
        "div",
        {
          className: "copy-button",
          onClick: () => {
            r(i), o("Copied");
          },
          onMouseLeave: () => setTimeout(() => {
            o(n("copy"));
          }, 1e3),
          children: [
            /* @__PURE__ */ p("div", { className: "label-wrapper", children: /* @__PURE__ */ p("div", { className: "button-label", children: s }) }),
            /* @__PURE__ */ p(r0, {})
          ]
        }
      )
    ] })
  ] });
}, n0 = `.question-button{display:flex;justify-content:center;align-items:center;background-color:#000;border-radius:100%;height:31px;width:31px;color:#fff;position:absolute;top:36px;right:1.5rem;cursor:pointer}@media screen and (max-width: 639px){.question-button{top:24px;right:32px}}
`, Cc = (i) => /* @__PURE__ */ z("svg", { width: 8, height: 14, viewBox: "0 0 8 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z("path", { d: "M2.80272 10.0382V9.95794C2.81179 9.1058 2.90249 8.42766 3.07483 7.92352C3.24717 7.41938 3.49206 7.01115 3.80952 6.69885C4.12698 6.38655 4.50794 6.09879 4.95238 5.83556C5.21995 5.67495 5.46032 5.48534 5.67347 5.26673C5.88662 5.04366 6.05442 4.78713 6.17687 4.49713C6.30385 4.20714 6.36735 3.88591 6.36735 3.53346C6.36735 3.09624 6.26304 2.71702 6.05442 2.39579C5.8458 2.07457 5.56689 1.82696 5.21769 1.65296C4.86848 1.47897 4.48073 1.39197 4.05442 1.39197C3.68254 1.39197 3.32426 1.46781 2.97959 1.6195C2.63492 1.77119 2.34694 2.00988 2.11565 2.33556C1.88435 2.66125 1.75057 3.08732 1.71429 3.61377H0C0.0362812 2.85532 0.235828 2.20618 0.598639 1.66635C0.965986 1.12651 1.44898 0.71383 2.04762 0.428298C2.65079 0.142766 3.31973 0 4.05442 0C4.85261 0 5.54649 0.15615 6.13605 0.468451C6.73016 0.780752 7.18821 1.20905 7.5102 1.75335C7.83673 2.29764 8 2.91778 8 3.61377C8 4.10453 7.9229 4.54844 7.76871 4.94551C7.61905 5.34257 7.40136 5.69726 7.11565 6.00956C6.83447 6.32186 6.49433 6.59847 6.09524 6.83939C5.69615 7.08477 5.37642 7.34353 5.13605 7.61568C4.89569 7.88336 4.72109 8.20236 4.61224 8.57266C4.5034 8.94296 4.44444 9.40472 4.43537 9.95794V10.0382H2.80272ZM3.67347 14C3.33787 14 3.04989 13.8818 2.80952 13.6453C2.56916 13.4089 2.44898 13.1256 2.44898 12.7954C2.44898 12.4653 2.56916 12.182 2.80952 11.9455C3.04989 11.7091 3.33787 11.5908 3.67347 11.5908C4.00907 11.5908 4.29705 11.7091 4.53741 11.9455C4.77778 12.182 4.89796 12.4653 4.89796 12.7954C4.89796 13.014 4.84127 13.2148 4.72789 13.3977C4.61905 13.5806 4.47166 13.7279 4.28571 13.8394C4.10431 13.9465 3.90023 14 3.67347 14Z", fill: "white" })), s0 = ({ onClick: i }) => /* @__PURE__ */ p($, { children: [
  /* @__PURE__ */ p("style", { type: "text/css", children: n0 }),
  /* @__PURE__ */ p("div", { className: "question-button", onClick: i, children: /* @__PURE__ */ p(Cc, {}) })
] });
function o0() {
  const i = ke.value, t = window.BikeMatrix.getConfig(), { currentBike: r, saveBike: n } = Re(), [s, o] = M(i == null ? void 0 : i.owner_Email_Address), [a, l] = M(!1), [u, c] = M(null), [d, h] = M(null), [f, v] = M(r.name), [g, w] = M(null), [m, b] = M(null), [x, _] = M(null), C = new Se(
    t.apiUrl,
    t.apiKey,
    t.apiToken,
    t.isShopify
  ), { t: A } = ee(), k = async (D, E) => {
    if (E === "name") {
      v(D), w(!0), b(null), _(null);
      const L = await C.updateCustomBikeName(
        r.key,
        D
      );
      n({ ...r, name: D }), w(!1), L.success ? b(!0) : (_(L.error), t.logLevel === "verbose" && console.error(L.logError));
    }
    if (E === "email") {
      o(D), l(!0), c(null), h(null);
      const L = await C.saveCustomBike(
        r.key,
        D
      );
      l(!1), L.success ? c(!0) : (c(!1), h(L.error), t.logLevel === "verbose" && console.error(L.logError));
    }
  }, y = (D) => {
    navigator.share({
      title: A("virtualworkshop_settings_id"),
      text: D,
      url: window.location.href
    }).then(() => console.log("Successful share! 🎉")).catch((E) => console.error(E));
  };
  return i ? /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p(s0, { onClick: () => te("/quick-guide") }),
    /* @__PURE__ */ p("div", { className: "mb-4", children: r ? /* @__PURE__ */ p(it, { bike: r, selected: !0, simple: !0 }) : /* @__PURE__ */ p(Ur, {}) }),
    /* @__PURE__ */ p("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ p(
        Ua,
        {
          value: f,
          onSave: (D) => k(D, "name"),
          loading: g,
          label: A("virtualworkshop_settings_bike_name"),
          success: m,
          error: x
        }
      ),
      (i == null ? void 0 : i.owner_Email_Address) && /* @__PURE__ */ p(
        Ua,
        {
          value: s,
          onSave: (D) => k(D, "email"),
          loading: a,
          label: A("virtualworkshop_settings_email"),
          success: u,
          error: d
        }
      ),
      /* @__PURE__ */ p(
        Ha,
        {
          label: A("virtualworkshop_settings_id"),
          text: r.key,
          onCopy: (D) => navigator.clipboard.writeText(D)
        }
      ),
      /* @__PURE__ */ p(
        Ha,
        {
          label: A("virtualworkshop_settings_share_id"),
          text: r.shareId,
          onShare: (D) => y(D),
          onCopy: (D) => navigator.clipboard.writeText(D)
        }
      )
    ] }),
    /* @__PURE__ */ p(Et, {})
  ] }) : /* @__PURE__ */ p($, {});
}
function a0() {
  const e = window.BikeMatrix.getConfig();
  j(() => {
    at.value.back = "/";
  }, []);
  const t = new Se(
    e.apiUrl,
    e.apiKey,
    e.apiToken,
    e.isShopify
  ), { currentBike: r } = Re(), [n, s] = M(null), [o, a] = M(""), l = async () => {
    const u = await t.getBikeBom(r.key);
    if (!u.success)
      a(u.error), e.logLevel === "verbose" && console.error(u.logError);
    else {
      const c = Ir(u.data);
      s(c), ke.value = c;
    }
  };
  return j(() => {
    l();
  }, []), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("div", { className: "mb-4", children: [
      n ? /* @__PURE__ */ p(it, { bike: n, readOnly: !0, shared: !0 }) : /* @__PURE__ */ p(Ur, {}),
      /* @__PURE__ */ p("div", { class: "mt-4 mb-8", children: /* @__PURE__ */ p(ic, { categorisedBOM: n, readOnly: !0 }) })
    ] }),
    o,
    /* @__PURE__ */ p(Et, {})
  ] });
}
const l0 = `.onboarding-content-wrapper{display:flex;flex-direction:column;gap:1rem;padding-left:1rem;padding-right:1rem}@media screen and (max-width: 639px){.onboarding-content-wrapper{padding:0}}
`, u0 = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}.card-image-wrapper{border:1px solid #d4d4d4;border-radius:8px;overflow:hidden;width:100%;margin-bottom:1rem}.card-image-wrapper img{width:100%;height:auto}.card-content{color:#000;font-size:16px}
`, c0 = ({
  title: i,
  content: e,
  src: t,
  svg: r
}) => /* @__PURE__ */ p(rc, { title: i, children: [
  /* @__PURE__ */ p("style", { type: "text/css", children: u0 }),
  /* @__PURE__ */ p("div", { className: "card-image-wrapper", children: /* @__PURE__ */ p("img", { src: t }) }),
  /* @__PURE__ */ p("div", { className: "card-content", children: e })
] }), d0 = () => {
  const { t: i } = ee();
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: l0 }),
    /* @__PURE__ */ p("div", { className: "onboarding", children: /* @__PURE__ */ p("div", { className: "onboarding-content-wrapper", children: nc.map(
      (e, t) => /* @__PURE__ */ p(
        c0,
        {
          title: e.number + ". " + i(`${e.title}`),
          src: e.image,
          svg: e.svg,
          content: i(`${e.content}`)
        },
        t
      )
    ) }) })
  ] });
};
function p0() {
  return /* @__PURE__ */ p("div", { className: "quick-guide-page", children: [
    /* @__PURE__ */ p(d0, {}),
    /* @__PURE__ */ p(Et, {})
  ] });
}
const Ls = Ae("/"), te = (i) => {
  const e = Ls.peek();
  Ls.value = i, kc({ previous: e, path: i });
}, _o = [
  { title: "bikeselector_home_title", component: $f, path: "/" },
  { title: "bikeselector_addbike_title", component: Hf, path: "/add" },
  { title: "bikeselector_search_title", component: Gf, path: "/search" },
  { title: "bikeselector_size_title", component: Wf, path: "/size" },
  { title: "bikeselector_confirm_title", component: Kf, path: "/confirm" },
  { title: "bikeselector_browse_title", component: Zf, path: "/browse" },
  {
    title: "virtualworkshop_title",
    component: Xf,
    path: "/workshop"
  },
  { title: "virtualworkshop_title", component: H1, path: "/bom" },
  { title: "virtualworkshop_title", component: G1, path: "/part" },
  {
    title: "virtualworkshop_title",
    component: X1,
    path: "/update"
  },
  {
    title: "virtualworkshop_title",
    component: o0,
    path: "/settings"
  },
  {
    title: "virtualworkshop_bom_title",
    component: a0,
    path: "/read-only"
  },
  {
    title: "Virtual Workshop — Quick Guide",
    component: p0,
    path: "/quick-guide"
  }
], Qn = _o.map((i) => i.path), kc = (i) => {
  let e;
  const t = Qn.indexOf(i.path), r = _o[t], n = Qn.slice(1, 5).indexOf(r.path);
  t && (e = Qn[t - 1]), i.previous === "/" && i.path === "/browse" && (e = "/"), i.previous === "/" && i.path === "/workshop" && (e = "/"), i.path === "/settings" && (e = "/bom"), i.path === "/quick-guide" && (e = "/settings"), at.value = {
    title: r.title,
    step: n > -1 ? n : void 0,
    back: e
  };
};
function f0() {
  const e = tt(
    () => _o.reduce((t, r) => (t[r.path] = r.component, t), {}),
    []
  )[Ls.value];
  return j(() => {
    kc({ path: "/" });
  }, []), /* @__PURE__ */ p(e, {});
}
const yo = `@import"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap";*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-2{right:-8px}.-top-2{top:-8px}.bottom-0{bottom:0}.bottom-10{bottom:40px}.bottom-14{bottom:56px}.bottom-4{bottom:16px}.bottom-6{bottom:24px}.bottom-\\[128px\\]{bottom:128px}.bottom-\\[72px\\]{bottom:72px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:16px}.right-0{right:0}.right-3{right:12px}.right-4{right:16px}.right-5{right:20px}.top-0{top:0}.top-1\\/2{top:50%}.top-4{top:16px}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-\\[2147483645\\]{z-index:2147483645}.z-\\[2147483646\\]{z-index:2147483646}.\\!my-0{margin-top:0!important;margin-bottom:0!important}.-mx-8{margin-left:-32px;margin-right:-32px}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:4px;margin-bottom:4px}.my-5{margin-top:20px;margin-bottom:20px}.my-6{margin-top:24px;margin-bottom:24px}.my-\\[2px\\]{margin-top:2px;margin-bottom:2px}.my-px{margin-top:1px;margin-bottom:1px}.\\!ml-0{margin-left:0!important}.\\!ml-auto{margin-left:auto!important}.-mb-3{margin-bottom:-12px}.-mt-2{margin-top:-8px}.-mt-5{margin-top:-20px}.mb-4{margin-bottom:16px}.mb-6{margin-bottom:24px}.mb-8{margin-bottom:32px}.ml-2{margin-left:8px}.ml-\\[105px\\]{margin-left:105px}.ml-auto{margin-left:auto}.mr-\\[6px\\]{margin-right:6px}.mt-1{margin-top:4px}.mt-2{margin-top:8px}.mt-4{margin-top:16px}.mt-6{margin-top:24px}.mt-8{margin-top:32px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-0{height:0px}.h-10{height:40px}.h-2{height:8px}.h-20{height:80px}.h-3{height:12px}.h-32{height:128px}.h-4{height:16px}.h-40{height:160px}.h-5{height:20px}.h-6{height:24px}.h-7{height:28px}.h-8{height:32px}.h-9{height:36px}.h-\\[10px\\]{height:10px}.h-\\[18px\\]{height:18px}.h-\\[1px\\]{height:1px}.h-\\[26px\\]{height:26px}.h-\\[6px\\]{height:6px}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-36{max-height:144px}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.w-1\\/2{width:50%}.w-10{width:40px}.w-2{width:8px}.w-3{width:12px}.w-4{width:16px}.w-5{width:20px}.w-6{width:24px}.w-7{width:28px}.w-8{width:32px}.w-9{width:36px}.w-\\[100px\\]{width:100px}.w-\\[25px\\]{width:25px}.w-\\[37\\.5px\\]{width:37.5px}.w-\\[48px\\]{width:48px}.w-\\[93px\\]{width:93px}.w-\\[calc\\(100\\%_\\+_64px\\)\\]{width:calc(100% + 64px)}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.min-w-0{min-width:0px}.max-w-\\[220px\\]{max-width:220px}.max-w-full{max-width:100%}.max-w-lg{max-width:512px}.max-w-sm{max-width:384px}.flex-none{flex:none}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[20\\%\\]{--tw-translate-x: -20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-px{--tw-translate-x: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/3{--tw-translate-y: -33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/3{--tw-translate-x: 33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-px{--tw-translate-x: 1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-125{--tw-scale-x: 1.25;--tw-scale-y: 1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-center{scroll-snap-align:center}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:4px}.gap-2{gap:8px}.gap-3{gap:12px}.gap-4{gap:16px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(8px * var(--tw-space-x-reverse));margin-left:calc(8px * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(8px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(8px * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(12px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(12px * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(16px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(16px * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(20px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(20px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-nowrap{text-wrap:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-xl{border-radius:12px}.rounded-b-lg{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.rounded-t-3xl{border-top-left-radius:24px;border-top-right-radius:24px}.rounded-t-xl{border-top-left-radius:12px;border-top-right-radius:12px}.border{border-width:1px}.border-b-0{border-bottom-width:0px}.border-amber-500{--tw-border-opacity: 1;border-color:rgb(245 158 11 / var(--tw-border-opacity, 1))}.border-emerald-500{--tw-border-opacity: 1;border-color:rgb(16 185 129 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-gray-950{--tw-border-opacity: 1;border-color:rgb(3 7 18 / var(--tw-border-opacity, 1))}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity, 1))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity, 1))}.bg-amber-500{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity, 1))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-black\\/40{background-color:#0006}.bg-emerald-50{--tw-bg-opacity: 1;background-color:rgb(236 253 245 / var(--tw-bg-opacity, 1))}.bg-emerald-500{--tw-bg-opacity: 1;background-color:rgb(16 185 129 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-400\\/50{background-color:#9ca3af80}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-950{--tw-bg-opacity: 1;background-color:rgb(3 7 18 / var(--tw-bg-opacity, 1))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/75{background-color:#ffffffbf}.p-0{padding:0}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.px-4{padding-left:16px;padding-right:16px}.px-8{padding-left:32px;padding-right:32px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.\\!pr-8{padding-right:32px!important}.pl-1{padding-left:4px}.pl-3{padding-left:12px}.pr-3{padding-right:12px}.pr-5{padding-right:20px}.pr-6{padding-right:24px}.pt-4{padding-top:16px}.text-center{text-align:center}.text-start{text-align:start}.font-nunito{font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-base{font-size:16px;line-height:24px}.text-lg{font-size:18px;line-height:28px}.text-sm{font-size:14px;line-height:20px}.text-xl{font-size:20px;line-height:28px}.text-xs{font-size:12px;line-height:16px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-\\[18px\\]{line-height:18px}.leading-\\[22px\\]{line-height:22px}.leading-tight{line-height:1.25}.text-amber-500{--tw-text-opacity: 1;color:rgb(245 158 11 / var(--tw-text-opacity, 1))}.text-amber-950{--tw-text-opacity: 1;color:rgb(69 26 3 / var(--tw-text-opacity, 1))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-emerald-500{--tw-text-opacity: 1;color:rgb(16 185 129 / var(--tw-text-opacity, 1))}.text-emerald-950{--tw-text-opacity: 1;color:rgb(2 44 34 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-950{--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-950{--tw-text-opacity: 1;color:rgb(69 10 10 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-30{opacity:.3}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_-2px_10px_0px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\,0px_0px_0px_1px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\]{--tw-shadow: 0px -2px 10px 0px rgba(0,0,0,.04),0px 0px 0px 1px rgba(0,0,0,.06);--tw-shadow-colored: 0px -2px 10px 0px var(--tw-shadow-color), 0px 0px 0px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.bike-matrix-container{width:100%}@media (min-width: 640px){.bike-matrix-container{max-width:640px}}@media (min-width: 768px){.bike-matrix-container{max-width:768px}}@media (min-width: 1024px){.bike-matrix-container{max-width:1024px}}@media (min-width: 1280px){.bike-matrix-container{max-width:1280px}}@media (min-width: 1536px){.bike-matrix-container{max-width:1536px}}:root,:host{all:initial!important;font-size:16px!important;width:100%}input,select,button{outline:2px solid transparent;outline-offset:2px}h1,h2,h3,h4,h5,h6,label,button{margin-top:0;margin-bottom:0;font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h1,h2,h3,h4,h5,h6{font-weight:700;--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity, 1))}h1,h2,h3,h4,h5,h6,label,button,p,a,div{font-family:Nunito,sans-serif}select{appearance:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}select::-ms-expand{display:none}.loader{border-radius:100%;border-top:4px solid rgba(3,7,18,.2);border-right:4px solid rgba(3,7,18,.2);border-bottom:4px solid rgba(3,7,18,.2);border-left:4px solid rgb(3,7,18)}*::-webkit-scrollbar{height:12px;width:12px}*::-webkit-scrollbar-track{border-radius:12px;margin-block:8px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}*::-webkit-scrollbar-track:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}*::-webkit-scrollbar-track:active{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}*::-webkit-scrollbar-thumb{border-radius:8px;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}*::-webkit-scrollbar-thumb:hover{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity, 1))}@media not all and (min-width: 640px){*::-webkit-scrollbar{display:none}.modal-content{-ms-overflow-style:none;scrollbar-width:none}}@media only screen and (max-width: 450px){.compatibility-label-container .status{padding:7px 2px}}.bike_matrix-checkbox{height:14px;width:14px}input[type=checkbox]{margin-top:3px}input[type=checkbox]:checked{accent-color:#000}.placeholder\\:text-gray-700::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.placeholder\\:text-gray-700::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-inset-x-px:after{content:var(--tw-content);left:-1px;right:-1px}.after\\:-top-6:after{content:var(--tw-content);top:-24px}.after\\:bottom-0:after{content:var(--tw-content);bottom:0}.after\\:bg-gradient-to-t:after{content:var(--tw-content);background-image:linear-gradient(to top,var(--tw-gradient-stops))}.after\\:from-white:after{content:var(--tw-content);--tw-gradient-from: #fff var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:to-transparent:after{content:var(--tw-content);--tw-gradient-to: transparent var(--tw-gradient-to-position)}.disabled\\:border-gray-200:disabled{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.disabled\\:bg-gray-100:disabled{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.disabled\\:text-gray-400:disabled{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.group:disabled .group-disabled\\:border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.group:disabled .group-disabled\\:bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.group:disabled .group-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.peer:disabled~.peer-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}@media not all and (min-width: 640px){.max-sm\\:absolute{position:absolute}.max-sm\\:inset-0{top:0;right:0;bottom:0;left:0}.max-sm\\:h-\\[89vh\\]{height:89vh}.max-sm\\:max-h-\\[96\\%\\]{max-height:96%}.max-sm\\:flex-1{flex:1 1 0%}.max-sm\\:flex-none{flex:none}.max-sm\\:grow{flex-grow:1}}@media (max-width: 426px){.max-\\[426px\\]\\:w-\\[21px\\]{width:21px}.max-\\[426px\\]\\:w-\\[38px\\]{width:38px}.max-\\[426px\\]\\:text-xs{font-size:12px;line-height:16px}}@media (min-width: 640px){.sm\\:mt-8{margin-top:32px}.sm\\:hidden{display:none}.sm\\:h-full{height:100%}.sm\\:max-h-\\[90\\%\\]{max-height:90%}.sm\\:max-w-\\[640px\\]{max-width:640px}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:justify-center{justify-content:center}.sm\\:rounded-xl{border-radius:12px}.sm\\:px-2{padding-left:8px;padding-right:8px}.sm\\:px-6{padding-left:24px;padding-right:24px}}.\\[\\&\\>path\\]\\:stroke-\\[2px\\]>path{stroke-width:2px}.\\[\\&\\>span\\]\\:font-normal>span{font-weight:400}.\\[\\&\\>span\\]\\:text-gray-500>span{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}
`;
function h0() {
  return j(() => {
    const i = document.createElement("link");
    i.type = "text/css", i.rel = "stylesheet", i.href = "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap", document.head.appendChild(i);
  }, []), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: yo }),
    /* @__PURE__ */ p(Nf, { children: [
      /* @__PURE__ */ p(
        "div",
        {
          onClick: Pr,
          style: { right: "-36px", top: "-24px" },
          class: "w-7 h-7 z-10 flex items-center justify-center absolute bg-white text-gray-800 rounded-full cursor-pointer",
          children: /* @__PURE__ */ p(hi, { class: "h-3 w-3" })
        }
      ),
      /* @__PURE__ */ p(zf, { children: /* @__PURE__ */ p(Yf, { children: /* @__PURE__ */ p(f0, {}) }) })
    ] })
  ] });
}
const g0 = (i) => /* @__PURE__ */ z("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 500, zoomAndPan: "magnify", viewBox: "0 0 375 374.999991", height: 500, preserveAspectRatio: "xMidYMid meet", ...i }, /* @__PURE__ */ z("path", { fill: "#000000", d: "M 151.4375 131.65625 L 210.511719 259.050781 C 210.511719 252.984375 210.105469 242.875 210.105469 230.335938 L 197.160156 117.5 C 168.835938 117.90625 151.4375 131.65625 151.4375 131.65625 Z M 225.484375 117.097656 C 218.605469 116.691406 212.128906 116.691406 206.464844 117.097656 L 212.941406 181.804688 C 214.960938 160.773438 219.007812 138.125 225.484375 117.097656 Z M 80.222656 227.101562 C 90.746094 230.335938 101.265625 233.976562 113 238.425781 C 113 238.425781 146.988281 255.816406 173.285156 266.734375 L 104.097656 179.78125 C 93.980469 194.746094 86.292969 211.328125 80.222656 227.101562 Z M 35.714844 287.363281 C 37.738281 276.441406 40.167969 265.117188 43.808594 254.601562 C 34.90625 252.984375 26.003906 251.773438 17.507812 250.960938 C 21.957031 263.90625 28.433594 276.039062 35.714844 287.363281 Z M 195.945312 276.039062 C 195.945312 276.039062 204.441406 278.867188 208.488281 274.417969 L 142.535156 138.125 C 131.207031 146.621094 121.089844 156.324219 112.1875 167.648438 L 191.898438 274.417969 C 193.519531 275.230469 194.730469 275.632812 195.945312 276.039062 Z M 365.480469 146.214844 C 359.816406 122.351562 349.296875 100.109375 335.539062 81.101562 C 343.632812 101.726562 352.128906 124.375 358.199219 140.148438 C 360.625 141.765625 363.457031 144.191406 365.480469 146.214844 Z M 356.175781 170.886719 C 339.179688 157.539062 322.996094 147.023438 307.214844 138.933594 L 244.90625 157.539062 L 232.363281 189.085938 C 230.339844 208.902344 228.71875 233.976562 230.339844 254.601562 C 230.339844 254.601562 233.980469 294.640625 219.414062 299.496094 C 219.414062 299.496094 203.632812 314.863281 163.574219 295.855469 C 163.574219 295.855469 121.898438 274.015625 70.109375 260.265625 C 62.015625 291 59.992188 314.457031 59.992188 316.480469 C 92.363281 349.644531 138.085938 369.867188 188.257812 369.867188 C 288.605469 369.867188 370.335938 288.171875 370.335938 187.871094 C 370.335938 185.847656 370.335938 183.828125 370.335938 181.804688 C 363.054688 183.019531 356.175781 170.886719 356.175781 170.886719 Z M 233.980469 95.257812 C 237.621094 86.761719 242.476562 78.675781 247.332031 71.394531 C 247.332031 71.394531 261.089844 49.960938 281.726562 31.761719 C 254.617188 15.582031 222.246094 5.875 188.257812 5.875 C 87.507812 5.875 6.179688 87.570312 6.179688 187.871094 C 6.179688 197.578125 6.988281 206.476562 8.203125 215.371094 C 22.363281 215.777344 38.144531 217.394531 55.542969 220.628906 C 66.0625 195.152344 75.773438 177.761719 75.773438 177.761719 C 75.773438 177.761719 124.328125 87.976562 233.980469 95.257812 Z M 236.8125 147.429688 L 240.453125 146.214844 L 250.972656 120.332031 C 248.546875 119.925781 246.925781 119.523438 244.5 119.117188 C 241.261719 127.609375 238.429688 137.316406 236.8125 147.429688 Z M 259.066406 121.949219 L 250.164062 143.789062 L 292.648438 132.867188 C 281.320312 128.015625 269.992188 124.375 259.066406 121.949219 Z M 272.015625 76.25 C 266.347656 82.71875 260.683594 90 255.425781 98.085938 C 275.65625 101.726562 293.054688 106.582031 308.027344 112.242188 Z M 340.800781 128.015625 L 314.902344 57.238281 C 311.261719 53.601562 307.621094 50.363281 303.980469 47.128906 C 295.886719 52.792969 287.390625 59.667969 278.894531 68.160156 L 323.804688 119.117188 C 330.28125 122.351562 336.347656 125.589844 340.800781 128.015625 Z M 340.800781 128.015625 ", fillOpacity: 1, fillRule: "nonzero" }));
function m0({
  "data-sku": i,
  "data-padding-top": e,
  "data-padding-bottom": t
}) {
  var _;
  const r = window.BikeMatrix, n = r.getConfig(), [s, o] = M({}), [a, l] = M(!1), [u, c] = M({ compatible: "", warning: "" }), { t: d } = ee(), [h, f] = M(!1), v = i || n.sku, [g, w] = M(null);
  if (i === "*")
    return n.logLevel === "verbose" && console.log("Early return as prouduct is blacklisted"), /* @__PURE__ */ p($, {});
  n.internalLink && w(n.internalLink);
  const m = tt(
    () => Qe.value || h,
    [Qe.value, h]
  ), b = !!r.getActiveSubscription(), x = async () => {
    var A, k, y, D, E, L, T;
    if (f(!0), c({ compatible: "", warning: "" }), l(!1), n.logLevel === "verbose" && (console.log(
      "ProductResult updateCompatibility config: " + JSON.stringify(n)
    ), console.log(
      "ProductResult updateCompatibility BikeSignal.value: " + JSON.stringify(Z.value)
    )), Z.value) {
      for (let F = 0; F < n.productCollections.length; F++)
        if (!((k = (A = Z.value) == null ? void 0 : A.compatibleCollections) != null && k.error) && ((D = (y = Z.value) == null ? void 0 : y.compatibleCollections) != null && D.find(
          (N) => N.handle === n.productCollections[F]
        ))) {
          l(!0);
          break;
        }
    } else
      for (let F = 0; F < n.productCollections.length; F++)
        if ((E = n == null ? void 0 : n.collections) != null && E.map((N) => N.handle).includes(n == null ? void 0 : n.productCollections[F])) {
          l(!0);
          break;
        }
    if (Z.value) {
      if (v == "") {
        o({ type: "unavailable", ...ri.unavailable }), f(!1);
        return;
      }
      var C = ((L = Ut()) == null ? void 0 : L.language) || "en-GB";
      const N = await new Se(
        n.apiUrl,
        n.apiKey,
        n.apiToken,
        n.isShopify
      ).checkSkuCompatibility(
        (T = Z.value) == null ? void 0 : T.key,
        v,
        C,
        "ProductResult",
        n.currentCollectionHandle
      );
      if (f(!1), !N.success) {
        n.logLevel === "verbose" && console.error(N.logError), o({ type: "unavailable", ...ri.unavailable });
        return;
      }
      const O = (N == null ? void 0 : N.data.compatible) === null ? "unavailable" : N.data.warning ? "warning" : N != null && N.data.compatible ? "compatible" : "incompatible";
      c({
        warning: N.data.warningMessage,
        compatible: N.data.compatibilityMessage
      }), o({ type: O, ...ri[O] });
    } else
      f(!1), o({ type: "check", ...ri.check });
  };
  return j(() => {
    x();
  }, [Z.value, v]), j(() => (document.addEventListener("RefreshCompatibility", x), () => {
    document.removeEventListener("RefreshCompatibility", x);
  }), []), !b || !m && !(s != null && s.type) || !a ? /* @__PURE__ */ p($, {}) : /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: yo }),
    /* @__PURE__ */ p(
      "div",
      {
        class: "flex flex-col relative w-full mx-auto",
        style: {
          marginTop: `${e}px`,
          marginBottom: `${t}px`
        },
        children: [
          /* @__PURE__ */ p(
            "div",
            {
              onClick: (C) => {
                C.preventDefault(), document.dispatchEvent(
                  new Event("BmToggleModal", {
                    bubbles: !0,
                    composed: !0
                  })
                );
              },
              class: X(
                "rounded-lg relative z-20 border overflow-hidden w-full flex cursor-pointer",
                m ? "bg-gray-100 border-gray-300 text-gray-950" : {
                  unavailable: "bg-gray-50 border-gray-950 text-gray-950",
                  check: "bg-gray-50 border-gray-950 text-gray-950",
                  compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
                  incompatible: "bg-red-50 border-red-500 text-red-950",
                  warning: "bg-amber-50 border-amber-500 text-amber-950"
                }[s.type]
              ),
              children: m ? /* @__PURE__ */ p(
                "span",
                {
                  class: "loader self-center animate-spin justify-self-center justify-center w-9 my-5 mx-auto h-9",
                  style: { borderWidth: "6px" }
                }
              ) : /* @__PURE__ */ p($, { children: [
                /* @__PURE__ */ p(
                  "div",
                  {
                    class: "relative z-10 h-auto items-center justify-center flex",
                    children: [
                      /* @__PURE__ */ p(
                        xo,
                        {
                          class: X(
                            "self-start h-full w-[93px]",
                            {
                              unavailable: "text-gray-950",
                              check: "text-gray-950",
                              compatible: "text-emerald-500",
                              incompatible: "text-red-500",
                              warning: "text-amber-500"
                            }[s.type]
                          )
                        }
                      ),
                      /* @__PURE__ */ p(wo, { class: "h-[26px] absolute -translate-x-1/4" })
                    ]
                  }
                ),
                /* @__PURE__ */ p("div", { class: "flex flex-col pl-3 pr-6 py-[6px] min-w-0", children: [
                  /* @__PURE__ */ p("p", { class: "text-lg font-semibold", children: d(s == null ? void 0 : s.heading_code) }),
                  /* @__PURE__ */ p("p", { class: "flex w-full text-sm leading-[22px] font-normal", children: /* @__PURE__ */ p("span", { class: "truncate", children: s != null && s.details_code ? d(s == null ? void 0 : s.details_code) : (_ = Z.value) == null ? void 0 : _.name }) })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ p(
            "div",
            {
              class: "z-10 bg-gray-100 w-full -mt-2 pt-4 flex border justify-between flex-wrap gap-1 border-gray-300 rounded-b-lg p-3 py-2",
              children: [
                s.type !== "incompatible" && /* @__PURE__ */ p("div", { class: "space-y-2 my-[2px]", children: [
                  !!(u != null && u.compatible) && /* @__PURE__ */ p("p", { class: "text-sm flex", children: [
                    /* @__PURE__ */ p(
                      Rr,
                      {
                        class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
                      }
                    ),
                    " ",
                    u.compatible
                  ] }),
                  !!u.warning && /* @__PURE__ */ p("p", { class: "text-sm flex", children: [
                    /* @__PURE__ */ p(
                      zr,
                      {
                        class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
                      }
                    ),
                    " ",
                    u.warning
                  ] })
                ] }),
                /* @__PURE__ */ p(
                  "a",
                  {
                    class: "flex text-xs self-end font-semibold items-center underline ml-auto",
                    href: g || "https://bikematrix.io/landed-it",
                    target: "_blank",
                    children: [
                      d("bikematrix_poweredby"),
                      " ",
                      /* @__PURE__ */ p(g0, { class: "w-5 h-5 ml-2" })
                    ]
                  }
                )
              ]
            }
          ),
          !m && /* @__PURE__ */ p(
            s.icon,
            {
              class: "absolute top-0 z-30 right-0 w-6 translate-x-1/3 -translate-y-1/3"
            }
          )
        ]
      }
    )
  ] });
}
const b0 = `.wrapper{position:relative}.bm_collection_result{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.4rem;position:relative;margin-left:auto;margin-right:auto;font-size:14px;text-align:left;height:100%;line-height:1.3em}.bm_collection_result_iconLabel{display:inline-block;position:relative}.bm_collection_result_link{text-align:right;font-weight:500;font-size:.6em;margin-top:1px;text-decoration:underline;color:#000}.bm_collection_result_link:visited{color:#000}.bm_collection_result p{display:inline;padding:1px;margin:0;color:#000}.bm_collection_result_icon{padding:0 .1rem 0 0;position:absolute;left:-24px;top:-.25rem}.bm-hidden{display:none}.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`, Ga = {
  unavailable: {
    icon: Ts,
    heading: "",
    code: ""
  },
  compatible: {
    icon: Rr,
    heading: "Compatible",
    code: "compatible"
  },
  warning: {
    icon: zr,
    heading: "Compatible",
    code: "compatible"
  },
  incompatible: {
    icon: bn,
    heading: "Not Compatible",
    code: "not_compatible"
  }
};
function Dc({ "data-type": i }) {
  var r;
  const e = Ga[i], { t } = ee();
  return e ? /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: yo }),
    /* @__PURE__ */ p("div", { class: "flex z-0 flex-col relative  w-full mx-auto compatibility-label-container max-w-[220px]", children: [
      /* @__PURE__ */ p(
        "div",
        {
          class: X(
            "rounded-lg relative z-20 border overflow-hidden w-full flex",
            {
              unavailable: "bg-gray-50 border-gray-950 text-gray-950",
              compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
              incompatible: "bg-red-50 border-red-500 text-red-950",
              warning: "bg-amber-50 border-amber-500 text-amber-950"
            }[i]
          ),
          children: [
            /* @__PURE__ */ p("div", { class: "relative z-10 h-auto items-center justify-center flex", children: [
              /* @__PURE__ */ p(
                xo,
                {
                  class: X(
                    "self-start h-full w-[48px] max-[426px]:w-[38px]",
                    {
                      unavailable: "text-gray-950",
                      compatible: "text-emerald-500",
                      incompatible: "text-red-500",
                      warning: "text-amber-500"
                    }[i]
                  )
                }
              ),
              /* @__PURE__ */ p(
                wo,
                {
                  class: "h-[18px] max-[426px]:w-[21px] w-[25px] absolute -translate-x-[20%]"
                }
              )
            ] }),
            /* @__PURE__ */ p("div", { class: "status flex flex-col p-2 pl-1 w-full", children: /* @__PURE__ */ p(
              "p",
              {
                class: "max-[426px]:text-xs text-sm font-semibold p-0 leading-[18px] text-center",
                children: t((r = Ga[i]) == null ? void 0 : r.code)
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ p(
        e.icon,
        {
          class: "absolute top-0 z-30 right-0 w-4 h-4 translate-x-1/3 -translate-y-1/3"
        }
      )
    ] })
  ] }) : /* @__PURE__ */ p($, {});
}
const br = {
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
let Ye = {
  type: "unavailable",
  heading: ""
};
const v0 = async (i, e, t, r) => {
  var l;
  if (!t || !((l = yr.value) != null && l.length)) {
    Ye = { type: "unavailable", ...br.unavailable };
    return;
  }
  let n = [];
  for (const u of t.split(",").filter((c) => !!c)) {
    const c = yr.value.find(
      (d) => d.sku === u.trim()
    );
    n.push(c);
  }
  const s = n.some(
    (u) => (u == null ? void 0 : u.compatible) === !0 && !(u != null && u.warning)
  ), o = n.some((u) => (u == null ? void 0 : u.compatible) === !0 && (u == null ? void 0 : u.warning)), a = n.some((u) => (u == null ? void 0 : u.compatible) === !1);
  s ? Ye = { type: "compatible", ...br.compatible } : o ? Ye = { type: "warning", ...br.warning } : a ? Ye = { type: "incompatible", ...br.incompatible } : Ye = { type: "unavailable", ...br.unavailable }, r === "verbose" && console.log(
    "checkCollectionResult prodcutId: " + e + " bikeKey: " + i + " sku: " + t + " status: " + Ye.type
  );
}, w0 = function(i, e, t, r, n, s, o) {
  var l;
  const a = window.BikeMatrix.getConfig();
  if (i || e) {
    if ((i && t || e && r) && a.productsCollections[s]) {
      for (let u = 0; u < a.productsCollections[s].length; u++)
        if (a.collections.map((c) => c.handle).includes(a.productsCollections[s][u]))
          return !0;
    }
  } else
    return n ? !1 : !!Z.value && !Z.value.compatibleCollections.error && ((l = Z.value.compatibleCollections) == null ? void 0 : l.find(
      (c) => c.handle === o
    ));
  return !1;
};
function x0({
  "data-product-id": i,
  "data-product-skus": e,
  "data-product-barcodes": t,
  "data-product-metafields": r
}) {
  const n = window.BikeMatrix, s = n.getConfig(), [o, a] = M(!1), l = !!n.getActiveSubscription();
  Ye = { type: "unavailable", ...br.unavailable };
  const {
    currentCollectionHandle: u,
    isHomePage: c,
    isSearchPage: d,
    showSearchPageCollection: h,
    showHomePageCollection: f,
    logLevel: v,
    skuField: g
  } = s, w = !!s.pageType && s.pageType === "product", m = g === "barcode" ? t : g === "metafield" ? r : e || "";
  return v === "verbose" && (console.log(
    "CollectionResult currentCollectionHandle: ",
    u
  ), console.log("CollectionResult skuField: ", g), console.log("CollectionResult productId: ", i), console.log("CollectionResult skusToCheck: ", m), console.log(
    "CollectionResult BikeSignal.value: " + JSON.stringify(Z.value)
  )), Qe.value ? a(!0) : Z.value && w0(
    c,
    d,
    f,
    h,
    w,
    i,
    u
  ) ? v0(
    Z.value.key,
    i,
    m,
    s.logLevel
  ).then(() => {
    a(!0);
  }) : a(!1), v === "verbose" && console.log("CollectionResult status: ", Ye), /* @__PURE__ */ p($, { children: l && o && /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: b0 }),
    /* @__PURE__ */ p("div", { class: "bm_collection_result bm-wrapper", children: [
      /* @__PURE__ */ p(
        "div",
        {
          class: "lds-ring",
          id: "bm-loading-spinner",
          style: Qe.value ? "" : "display: none",
          children: [
            /* @__PURE__ */ p("div", {}),
            /* @__PURE__ */ p("div", {}),
            /* @__PURE__ */ p("div", {}),
            /* @__PURE__ */ p("div", {})
          ]
        }
      ),
      !Qe.value && (Ye == null ? void 0 : Ye.type) !== "unavailable" && /* @__PURE__ */ p(
        Dc,
        {
          "data-type": Ye.type
        }
      )
    ] })
  ] }) });
}
const _0 = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.bm-compatible-products-wrapper{display:block;width:100%;border-top:.5px solid lightgrey;border-bottom:.5px solid lightgrey;margin-top:10px}.bm-compatible-products-title>div{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none;display:flex;align-items:center;justify-content:space-between;padding:8px 0}.bm-compatible-products-title>div>span{font-weight:700}.bm-compatible-products-title svg{height:24px;width:24px;transition:transform .3s linear}.bm-compatible-products-title div.active svg{transform:rotate(180deg)}.bm-compatible-products-list{width:100%;max-width:100%;display:none;overflow:hidden}.bm-compatible-products-list ul{display:grid;gap:20px;grid-template-columns:repeat(4,minmax(0,1fr));padding:0;list-style:none}@media only screen and (max-width: 1000px){.bm-compatible-products-list ul{grid-template-columns:repeat(3,minmax(0,1fr))}}@media only screen and (max-width: 600px){.bm-compatible-products-list ul{gap:10px;grid-template-columns:repeat(2,minmax(0,1fr))}}.bm-compatible-products-list ul li{width:100%;display:flex}.bm-compatible-product-wrapper{display:block;width:100%;border:1px solid lightgrey;padding:5px;display:flex;flex-flow:column;flex:1}.bm-compatible-product-image{display:block;width:100%;max-width:100%;line-height:1;padding-top:100%;position:relative;margin-bottom:5px;overflow:hidden}.bm-compatible-product-image a,.bm-compatible-product-image a:hover,.bm-compatible-product-image a:focus{display:block;width:100%;max-width:100%;outline:none;text-decoration:none;width:auto;height:auto;line-height:1;border:none;border-radius:0}.bm-compatible-product-image img{display:inline-block;vertical-align:top;width:100%;max-width:100%;height:auto;line-height:1;position:absolute;left:0;right:0;bottom:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;top:50%;transform:translateY(-50%)}.bm-compatible-product-title{text-align:center;margin:0 0 1em;display:flex;flex-flow:column;flex:1}.bm-compatible-product-title a,.bm-compatible-product-title a:hover,.bm-compatible-product-title a:focus{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none}.bm-compatible-product-price{text-align:center;margin:0 0 1em}.bm-compatible-product-price p{font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;color:rgb(var(--text-color));padding:0;margin:0}.bm-compatible-product-price p strong{font-size:1.2em}.bm-compatible-product-compatibility{text-align:center;margin:0 .25em 1em}@media only screen and (max-width: 450px){.bm-compatible-product-compatibility{margin:0 0 1em}}.bm_result_link{justify-content:center;text-align:right;text-decoration:underline;font-size:12px;padding:10px 0}.bm_result_link a{text-align:right;font-weight:700;margin-top:10px;color:#000}
`;
var vn = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
vn.exports;
(function(i, e) {
  (function(t) {
    var r = e, n = i && i.exports == r && i, s = typeof Bn == "object" && Bn;
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
    }, f = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, v = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, g = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, w = { aacute: "á", Aacute: "Á", abreve: "ă", Abreve: "Ă", ac: "∾", acd: "∿", acE: "∾̳", acirc: "â", Acirc: "Â", acute: "´", acy: "а", Acy: "А", aelig: "æ", AElig: "Æ", af: "⁡", afr: "𝔞", Afr: "𝔄", agrave: "à", Agrave: "À", alefsym: "ℵ", aleph: "ℵ", alpha: "α", Alpha: "Α", amacr: "ā", Amacr: "Ā", amalg: "⨿", amp: "&", AMP: "&", and: "∧", And: "⩓", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", Aogon: "Ą", aopf: "𝕒", Aopf: "𝔸", ap: "≈", apacir: "⩯", ape: "≊", apE: "⩰", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", aring: "å", Aring: "Å", ascr: "𝒶", Ascr: "𝒜", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", Bcy: "Б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", beta: "β", Beta: "Β", beth: "ℶ", between: "≬", bfr: "𝔟", Bfr: "𝔅", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bNot: "⫭", bopf: "𝕓", Bopf: "𝔹", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxhD: "╥", boxHd: "╤", boxHD: "╦", boxhu: "┴", boxhU: "╨", boxHu: "╧", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpe: "≏", bumpE: "⪮", bumpeq: "≏", Bumpeq: "≎", cacute: "ć", Cacute: "Ć", cap: "∩", Cap: "⋒", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", ccaron: "č", Ccaron: "Č", ccedil: "ç", Ccedil: "Ç", ccirc: "ĉ", Ccirc: "Ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", Cdot: "Ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", chcy: "ч", CHcy: "Ч", check: "✓", checkmark: "✓", chi: "χ", Chi: "Χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cire: "≗", cirE: "⧃", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", colone: "≔", Colone: "⩴", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", cscr: "𝒸", Cscr: "𝒞", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", Cup: "⋓", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", dArr: "⇓", Darr: "↡", dash: "‐", dashv: "⊣", Dashv: "⫤", dbkarow: "⤏", dblac: "˝", dcaron: "ď", Dcaron: "Ď", dcy: "д", Dcy: "Д", dd: "ⅆ", DD: "ⅅ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", delta: "δ", Delta: "Δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", Dfr: "𝔇", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", DJcy: "Ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", Dopf: "𝔻", dot: "˙", Dot: "¨", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", downarrow: "↓", Downarrow: "⇓", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", Dscr: "𝒟", dscy: "ѕ", DScy: "Ѕ", dsol: "⧶", dstrok: "đ", Dstrok: "Đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", DZcy: "Џ", dzigrarr: "⟿", eacute: "é", Eacute: "É", easter: "⩮", ecaron: "ě", Ecaron: "Ě", ecir: "≖", ecirc: "ê", Ecirc: "Ê", ecolon: "≕", ecy: "э", Ecy: "Э", eDDot: "⩷", edot: "ė", eDot: "≑", Edot: "Ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", Efr: "𝔈", eg: "⪚", egrave: "è", Egrave: "È", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", Emacr: "Ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", eng: "ŋ", ENG: "Ŋ", ensp: " ", eogon: "ę", Eogon: "Ę", eopf: "𝕖", Eopf: "𝔼", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", Epsilon: "Ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", esim: "≂", Esim: "⩳", eta: "η", Eta: "Η", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", fcy: "ф", Fcy: "Ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", Ffr: "𝔉", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", Fopf: "𝔽", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", gamma: "γ", Gamma: "Γ", gammad: "ϝ", Gammad: "Ϝ", gap: "⪆", gbreve: "ğ", Gbreve: "Ğ", Gcedil: "Ģ", gcirc: "ĝ", Gcirc: "Ĝ", gcy: "г", Gcy: "Г", gdot: "ġ", Gdot: "Ġ", ge: "≥", gE: "≧", gel: "⋛", gEl: "⪌", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", Gfr: "𝔊", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", GJcy: "Ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", Gopf: "𝔾", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", gscr: "ℊ", Gscr: "𝒢", gsim: "≳", gsime: "⪎", gsiml: "⪐", gt: ">", Gt: "≫", GT: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", HARDcy: "Ъ", harr: "↔", hArr: "⇔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", hcirc: "ĥ", Hcirc: "Ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", hstrok: "ħ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", iacute: "í", Iacute: "Í", ic: "⁣", icirc: "î", Icirc: "Î", icy: "и", Icy: "И", Idot: "İ", iecy: "е", IEcy: "Е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", igrave: "ì", Igrave: "Ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", IJlig: "Ĳ", Im: "ℑ", imacr: "ī", Imacr: "Ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", Int: "∬", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", iocy: "ё", IOcy: "Ё", iogon: "į", Iogon: "Į", iopf: "𝕚", Iopf: "𝕀", iota: "ι", Iota: "Ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", Itilde: "Ĩ", iukcy: "і", Iukcy: "І", iuml: "ï", Iuml: "Ï", jcirc: "ĵ", Jcirc: "Ĵ", jcy: "й", Jcy: "Й", jfr: "𝔧", Jfr: "𝔍", jmath: "ȷ", jopf: "𝕛", Jopf: "𝕁", jscr: "𝒿", Jscr: "𝒥", jsercy: "ј", Jsercy: "Ј", jukcy: "є", Jukcy: "Є", kappa: "κ", Kappa: "Κ", kappav: "ϰ", kcedil: "ķ", Kcedil: "Ķ", kcy: "к", Kcy: "К", kfr: "𝔨", Kfr: "𝔎", kgreen: "ĸ", khcy: "х", KHcy: "Х", kjcy: "ќ", KJcy: "Ќ", kopf: "𝕜", Kopf: "𝕂", kscr: "𝓀", Kscr: "𝒦", lAarr: "⇚", lacute: "ĺ", Lacute: "Ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", Lambda: "Λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larr: "←", lArr: "⇐", Larr: "↞", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", lAtail: "⤛", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", Lcaron: "Ľ", lcedil: "ļ", Lcedil: "Ļ", lceil: "⌈", lcub: "{", lcy: "л", Lcy: "Л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", leftarrow: "←", Leftarrow: "⇐", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", Leftrightarrow: "⇔", LeftRightArrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", leg: "⋚", lEg: "⪋", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", Lfr: "𝔏", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", LJcy: "Љ", ll: "≪", Ll: "⋘", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", lmidot: "ŀ", Lmidot: "Ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", Longleftarrow: "⟸", LongLeftArrow: "⟵", longleftrightarrow: "⟷", Longleftrightarrow: "⟺", LongLeftRightArrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", Longrightarrow: "⟹", LongRightArrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", Lopf: "𝕃", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", Lstrok: "Ł", lt: "<", Lt: "≪", LT: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", Map: "⤅", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", Mcy: "М", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", mfr: "𝔪", Mfr: "𝔐", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", Mopf: "𝕄", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", mu: "μ", Mu: "Μ", multimap: "⊸", mumap: "⊸", nabla: "∇", nacute: "ń", Nacute: "Ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", Ncaron: "Ň", ncedil: "ņ", Ncedil: "Ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", Ncy: "Н", ndash: "–", ne: "≠", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", nfr: "𝔫", Nfr: "𝔑", nge: "≱", ngE: "≧̸", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", ngt: "≯", nGt: "≫⃒", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", NJcy: "Њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nle: "≰", nlE: "≦̸", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nlt: "≮", nLt: "≪⃒", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", not: "¬", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrarr: "↛", nrArr: "⇏", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", Nscr: "𝒩", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsube: "⊈", nsubE: "⫅̸", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupe: "⊉", nsupE: "⫆̸", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntilde: "ñ", Ntilde: "Ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", Nu: "Ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", oacute: "ó", Oacute: "Ó", oast: "⊛", ocir: "⊚", ocirc: "ô", Ocirc: "Ô", ocy: "о", Ocy: "О", odash: "⊝", odblac: "ő", Odblac: "Ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", OElig: "Œ", ofcir: "⦿", ofr: "𝔬", Ofr: "𝔒", ogon: "˛", ograve: "ò", Ograve: "Ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", Omacr: "Ō", omega: "ω", Omega: "Ω", omicron: "ο", Omicron: "Ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", Oopf: "𝕆", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", or: "∨", Or: "⩔", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", oscr: "ℴ", Oscr: "𝒪", oslash: "ø", Oslash: "Ø", osol: "⊘", otilde: "õ", Otilde: "Õ", otimes: "⊗", Otimes: "⨷", otimesas: "⨶", ouml: "ö", Ouml: "Ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", pcy: "п", Pcy: "П", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", Pfr: "𝔓", phi: "φ", Phi: "Φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", Pi: "Π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", pr: "≺", Pr: "⪻", prap: "⪷", prcue: "≼", pre: "⪯", prE: "⪳", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", Pscr: "𝒫", psi: "ψ", Psi: "Ψ", puncsp: " ", qfr: "𝔮", Qfr: "𝔔", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", qscr: "𝓆", Qscr: "𝒬", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", racute: "ŕ", Racute: "Ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarr: "→", rArr: "⇒", Rarr: "↠", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", Rarrtl: "⤖", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", Rcaron: "Ř", rcedil: "ŗ", Rcedil: "Ŗ", rceil: "⌉", rcub: "}", rcy: "р", Rcy: "Р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", Rho: "Ρ", rhov: "ϱ", RightAngleBracket: "⟩", rightarrow: "→", Rightarrow: "⇒", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", sacute: "ś", Sacute: "Ś", sbquo: "‚", sc: "≻", Sc: "⪼", scap: "⪸", scaron: "š", Scaron: "Š", sccue: "≽", sce: "⪰", scE: "⪴", scedil: "ş", Scedil: "Ş", scirc: "ŝ", Scirc: "Ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", Scy: "С", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", Sfr: "𝔖", sfrown: "⌢", sharp: "♯", shchcy: "щ", SHCHcy: "Щ", shcy: "ш", SHcy: "Ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", sigma: "σ", Sigma: "Σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", SOFTcy: "Ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", Sopf: "𝕊", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", Sscr: "𝒮", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", Star: "⋆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", sube: "⊆", subE: "⫅", subedot: "⫃", submult: "⫁", subne: "⊊", subnE: "⫋", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup: "⊃", Sup: "⋑", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supe: "⊇", supE: "⫆", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supne: "⊋", supnE: "⫌", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", tau: "τ", Tau: "Τ", tbrk: "⎴", tcaron: "ť", Tcaron: "Ť", tcedil: "ţ", Tcedil: "Ţ", tcy: "т", Tcy: "Т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", Tfr: "𝔗", there4: "∴", therefore: "∴", Therefore: "∴", theta: "θ", Theta: "Θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", thorn: "þ", THORN: "Þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", Topf: "𝕋", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", Tscr: "𝒯", tscy: "ц", TScy: "Ц", tshcy: "ћ", TSHcy: "Ћ", tstrok: "ŧ", Tstrok: "Ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uacute: "ú", Uacute: "Ú", uarr: "↑", uArr: "⇑", Uarr: "↟", Uarrocir: "⥉", ubrcy: "ў", Ubrcy: "Ў", ubreve: "ŭ", Ubreve: "Ŭ", ucirc: "û", Ucirc: "Û", ucy: "у", Ucy: "У", udarr: "⇅", udblac: "ű", Udblac: "Ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", Ufr: "𝔘", ugrave: "ù", Ugrave: "Ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", Umacr: "Ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", uogon: "ų", Uogon: "Ų", uopf: "𝕦", Uopf: "𝕌", uparrow: "↑", Uparrow: "⇑", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", updownarrow: "↕", Updownarrow: "⇕", UpDownArrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", upsilon: "υ", Upsilon: "Υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", Uring: "Ů", urtri: "◹", uscr: "𝓊", Uscr: "𝒰", utdot: "⋰", utilde: "ũ", Utilde: "Ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uuml: "ü", Uuml: "Ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", vcy: "в", Vcy: "В", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", vee: "∨", Vee: "⋁", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", vfr: "𝔳", Vfr: "𝔙", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", Vopf: "𝕍", vprop: "∝", vrtri: "⊳", vscr: "𝓋", Vscr: "𝒱", vsubne: "⊊︀", vsubnE: "⫋︀", vsupne: "⊋︀", vsupnE: "⫌︀", Vvdash: "⊪", vzigzag: "⦚", wcirc: "ŵ", Wcirc: "Ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", wfr: "𝔴", Wfr: "𝔚", wopf: "𝕨", Wopf: "𝕎", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", Wscr: "𝒲", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", Xfr: "𝔛", xharr: "⟷", xhArr: "⟺", xi: "ξ", Xi: "Ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", Xopf: "𝕏", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", xscr: "𝓍", Xscr: "𝒳", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacute: "ý", Yacute: "Ý", yacy: "я", YAcy: "Я", ycirc: "ŷ", Ycirc: "Ŷ", ycy: "ы", Ycy: "Ы", yen: "¥", yfr: "𝔶", Yfr: "𝔜", yicy: "ї", YIcy: "Ї", yopf: "𝕪", Yopf: "𝕐", yscr: "𝓎", Yscr: "𝒴", yucy: "ю", YUcy: "Ю", yuml: "ÿ", Yuml: "Ÿ", zacute: "ź", Zacute: "Ź", zcaron: "ž", Zcaron: "Ž", zcy: "з", Zcy: "З", zdot: "ż", Zdot: "Ż", zeetrf: "ℨ", ZeroWidthSpace: "​", zeta: "ζ", Zeta: "Ζ", zfr: "𝔷", Zfr: "ℨ", zhcy: "ж", ZHcy: "Ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", zscr: "𝓏", Zscr: "𝒵", zwj: "‍", zwnj: "‌" }, m = { aacute: "á", Aacute: "Á", acirc: "â", Acirc: "Â", acute: "´", aelig: "æ", AElig: "Æ", agrave: "à", Agrave: "À", amp: "&", AMP: "&", aring: "å", Aring: "Å", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", brvbar: "¦", ccedil: "ç", Ccedil: "Ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", Eacute: "É", ecirc: "ê", Ecirc: "Ê", egrave: "è", Egrave: "È", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", iacute: "í", Iacute: "Í", icirc: "î", Icirc: "Î", iexcl: "¡", igrave: "ì", Igrave: "Ì", iquest: "¿", iuml: "ï", Iuml: "Ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", Ntilde: "Ñ", oacute: "ó", Oacute: "Ó", ocirc: "ô", Ocirc: "Ô", ograve: "ò", Ograve: "Ò", ordf: "ª", ordm: "º", oslash: "ø", Oslash: "Ø", otilde: "õ", Otilde: "Õ", ouml: "ö", Ouml: "Ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", THORN: "Þ", times: "×", uacute: "ú", Uacute: "Ú", ucirc: "û", Ucirc: "Û", ugrave: "ù", Ugrave: "Ù", uml: "¨", uuml: "ü", Uuml: "Ü", yacute: "ý", Yacute: "Ý", yen: "¥", yuml: "ÿ" }, b = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" }, x = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111], _ = String.fromCharCode, C = {}, A = C.hasOwnProperty, k = function(B, P) {
      return A.call(B, P);
    }, y = function(B, P) {
      for (var V = -1, U = B.length; ++V < U; )
        if (B[V] == P)
          return !0;
      return !1;
    }, D = function(B, P) {
      if (!B)
        return P;
      var V = {}, U;
      for (U in P)
        V[U] = k(B, U) ? B[U] : P[U];
      return V;
    }, E = function(B, P) {
      var V = "";
      return B >= 55296 && B <= 57343 || B > 1114111 ? (P && F("character reference outside the permissible Unicode range"), "�") : k(b, B) ? (P && F("disallowed character reference"), b[B]) : (P && y(x, B) && F("disallowed character reference"), B > 65535 && (B -= 65536, V += _(B >>> 10 & 1023 | 55296), B = 56320 | B & 1023), V += _(B), V);
    }, L = function(B) {
      return "&#x" + B.toString(16).toUpperCase() + ";";
    }, T = function(B) {
      return "&#" + B + ";";
    }, F = function(B) {
      throw Error("Parse error: " + B);
    }, N = function(B, P) {
      P = D(P, N.options);
      var V = P.strict;
      V && v.test(B) && F("forbidden code point");
      var U = P.encodeEverything, H = P.useNamedReferences, pe = P.allowUnsafeSymbols, ge = P.decimal ? T : L, ht = function(be) {
        return ge(be.charCodeAt(0));
      };
      return U ? (B = B.replace(a, function(be) {
        return H && k(c, be) ? "&" + c[be] + ";" : ht(be);
      }), H && (B = B.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), H && (B = B.replace(u, function(be) {
        return "&" + c[be] + ";";
      }))) : H ? (pe || (B = B.replace(d, function(be) {
        return "&" + c[be] + ";";
      })), B = B.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), B = B.replace(u, function(be) {
        return "&" + c[be] + ";";
      })) : pe || (B = B.replace(d, ht)), B.replace(o, function(be) {
        var Kt = be.charCodeAt(0), Bt = be.charCodeAt(1), Je = (Kt - 55296) * 1024 + Bt - 56320 + 65536;
        return ge(Je);
      }).replace(l, ht);
    };
    N.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1
    };
    var O = function(B, P) {
      P = D(P, O.options);
      var V = P.strict;
      return V && f.test(B) && F("malformed character reference"), B.replace(g, function(U, H, pe, ge, ht, be, Kt, Bt, Je) {
        var Fe, Si, Co, ko, Ei, Bi;
        return H ? (Ei = H, w[Ei]) : pe ? (Ei = pe, Bi = ge, Bi && P.isAttributeValue ? (V && Bi == "=" && F("`&` did not start a character reference"), U) : (V && F(
          "named character reference was not terminated by a semicolon"
        ), m[Ei] + (Bi || ""))) : ht ? (Co = ht, Si = be, V && !Si && F("character reference was not terminated by a semicolon"), Fe = parseInt(Co, 10), E(Fe, V)) : Kt ? (ko = Kt, Si = Bt, V && !Si && F("character reference was not terminated by a semicolon"), Fe = parseInt(ko, 16), E(Fe, V)) : (V && F(
          "named character reference was not terminated by a semicolon"
        ), U);
      });
    };
    O.options = {
      isAttributeValue: !1,
      strict: !1
    };
    var q = function(B) {
      return B.replace(d, function(P) {
        return h[P];
      });
    }, R = {
      version: "1.2.0",
      encode: N,
      decode: O,
      escape: q,
      unescape: O
    };
    if (r && !r.nodeType)
      if (n)
        n.exports = R;
      else
        for (var S in R)
          k(R, S) && (r[S] = R[S]);
    else
      t.he = R;
  })(Bn);
})(vn, vn.exports);
var y0 = vn.exports;
const C0 = /* @__PURE__ */ kl(y0), Qt = {
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
}, k0 = (i) => {
  const e = i ? [...new Set(i.split(","))] : [], r = window.BikeMatrix.getConfig(), n = [];
  return Object.entries(r.products).reduce(
    (o, [a, l]) => (!n.includes(a) && l.skus.some(
      (u) => !!u && e.includes(u == null ? void 0 : u.trim())
    ) && (o.push(l), n.push(a)), o),
    []
  ).sort((o, a) => o["bm-sort"] - a["bm-sort"]);
}, D0 = (i) => {
  if (!(i != null && i.length))
    return [];
  const e = i.filter((t) => t.compatible).map((t) => t.sku).join(",");
  return k0(e);
}, A0 = (i, e) => Ee.value ? { type: "unknown", ...Qt.unknown } : i > 1 ? { type: "pageone", ...Qt.pageone } : (e == null ? void 0 : e.length) > 0 ? { type: "compatibleresults", ...Qt.compatibleresults } : Ji.value ? { type: "error", ...Qt.error } : { type: "noresults", ...Qt.noresults }, S0 = () => `
<div class="bm-compatible-product-wrapper">
  <div class="bm-compatible-product-image">
    <a href="{{productUrl}}">
      <img src="{{featuredImage}}" width="80px" alt="" loading="lazy"></img>
    </a>
  </div>
  <div class="bm-compatible-product-title">
    <a href="{{productUrl}}">{{productTitle}}{{bm-sort}}</a>
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
function E0({
  "data-title": i,
  "data-current-count": e,
  "data-total-count": t
}) {
  var y;
  const r = Y(null), n = window.BikeMatrix, s = n.getConfig(), [o, a] = M(!1), [l, u] = M(!0), [c, d] = M({
    type: "unknown",
    details: "",
    details_code: ""
  }), [h, f] = M([]), { t: v } = ee(), [g, w] = M(""), m = !!n.getActiveSubscription(), b = s.currentCollectionHandle || "", x = s.collectionUrl || "", _ = s.compatiblityListCurrentPage || 0, C = !!s.showCompatibleList || !1, A = s.logLevel || "none", k = (D) => {
    var N, O;
    if (!(r != null && r.current))
      return null;
    const E = (O = (N = r == null ? void 0 : r.current) == null ? void 0 : N.parentElement) == null ? void 0 : O.querySelector(
      'template[slot="product-card"]'
    );
    A === "verbose" && console.log("CompatibleList Product Card Template: ", E);
    const F = (E ? E.innerHTML : S0()).replace(
      s.isShopify ? /\@\@#if\s+(\w+)\@\@(.*?)\@\@\/if\@\@/gs : /\{\{#if\s+(\w+)\}\}(.*?)\{\{\/if\}\}/gs,
      (q, R, S) => D[R] ? S : ""
    ).replace(
      s.isShopify ? /\@\@\s*(\w+)\s*\@\@/g : /\{\{\s*(\w+)\s*\}\}/g,
      (q, R) => {
        if (R === "compatibility")
          return '<bikematrix-compatibilitylabel data-type="compatible"></bikematrix-compatibilitylabel>';
        const S = D[R];
        return R === "productTitle" ? C0.decode(S) : S || "";
      }
    );
    return A === "verbose" && console.log("CompatibleList Product Card: ", F), /* @__PURE__ */ p(
      "li",
      {
        dangerouslySetInnerHTML: { __html: F }
      },
      D.productId
    );
  };
  return j(() => {
    var F, N, O;
    const D = s.collections.map((q) => q.handle) || [];
    if (!C || !D.includes(b)) {
      d({ type: "unknown", ...Qt.unknown }), a(!1);
      return;
    }
    if (!Z.value) {
      d({ type: "selectbike", ...Qt.selectbike }), a(!Ee.value);
      return;
    }
    let E = !0;
    if ((F = Z.value) != null && F.compatibleCollections.error || (E = (O = (N = Z.value) == null ? void 0 : N.compatibleCollections) == null ? void 0 : O.find(
      (q) => q.handle === b
    )), !E) {
      a(!1);
      return;
    }
    const L = D0(
      _r.value
    ).map(k);
    f(L);
    const T = A0(_, L);
    d(T), a(!0);
  }, [
    b,
    Z.value,
    _r.value,
    Ee.value,
    _
  ]), j(() => {
    e === void 0 || t === void 0 || (parseInt(e) > parseInt(t) || parseInt(e) === parseInt(t) ? w(
      v("compatiblelist_waitstate_compatibility", { y: t })
    ) : w(
      v("compatiblelist_waitstate_count", { x: e, y: t })
    ));
  }, [e, t]), /* @__PURE__ */ p($, { children: m && o && /* @__PURE__ */ p("div", { ref: r, children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: _0 }),
    /* @__PURE__ */ p("div", { class: "bike-matrix-container", children: /* @__PURE__ */ p("div", { class: "bm-compatible-products-wrapper", children: [
      /* @__PURE__ */ p("div", { class: "bm-compatible-products-title", children: /* @__PURE__ */ p(
        "div",
        {
          id: "bm_customAccordion",
          class: l && "active",
          onClick: () => u(!l),
          children: [
            /* @__PURE__ */ p("span", { children: i || v("compatiblelist_header") }),
            /* @__PURE__ */ p(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                focusable: "false",
                role: "presentation",
                class: "icon",
                children: /* @__PURE__ */ p(
                  "path",
                  {
                    d: "M20 8.5 12.5 16 5 8.5",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    fill: "none"
                  }
                )
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ p(
        "div",
        {
          class: "bm-compatible-products-list",
          id: "bm_compatibleProductsListPanel",
          style: l ? "display: block" : "display: none",
          children: [
            /* @__PURE__ */ p(
              "div",
              {
                style: {
                  display: Ee.value ? "flex" : "none",
                  gap: "1rem"
                },
                children: [
                  /* @__PURE__ */ p(
                    "div",
                    {
                      class: "lds-ring",
                      id: "bm-loading-spinner",
                      style: Ee.value ? "" : "display: none",
                      children: [
                        /* @__PURE__ */ p("div", {}),
                        /* @__PURE__ */ p("div", {}),
                        /* @__PURE__ */ p("div", {}),
                        /* @__PURE__ */ p("div", {})
                      ]
                    }
                  ),
                  !!g && g
                ]
              }
            ),
            !Ee.value && {
              error: /* @__PURE__ */ p("p", { children: v(c == null ? void 0 : c.details_code) }),
              unknown: /* @__PURE__ */ p("p", { class: "bm-compatible-products-message" }),
              unavailable: /* @__PURE__ */ p("p", { class: "bm-compatible-products-message", children: v(c == null ? void 0 : c.details_code) }),
              selectbike: /* @__PURE__ */ p(
                "div",
                {
                  onClick: (D) => {
                    D.preventDefault(), document.dispatchEvent(
                      new Event("BmToggleModal", {
                        bubbles: !0,
                        composed: !0
                      })
                    );
                  },
                  style: "cursor: pointer;",
                  children: /* @__PURE__ */ p("p", { class: "bm-compatible-products-message", children: v(c == null ? void 0 : c.details_code) })
                }
              ),
              pageone: /* @__PURE__ */ p("p", { class: "bm-compatible-products-message", children: /* @__PURE__ */ p(
                "div",
                {
                  dangerouslySetInnerHTML: {
                    __html: (y = v(c == null ? void 0 : c.details_code)) == null ? void 0 : y.replace(
                      "<a>",
                      "<a href='" + x + "'>"
                    )
                  }
                }
              ) }),
              noresults: /* @__PURE__ */ p("p", { class: "bm-compatible-products-message", children: v(c == null ? void 0 : c.details_code) }),
              compatibleresults: /* @__PURE__ */ p($, {})
            }[c == null ? void 0 : c.type],
            /* @__PURE__ */ p("ul", { id: "bm_compatibleProductsList", children: !Ee.value && (c == null ? void 0 : c.type) === "compatibleresults" && h }),
            /* @__PURE__ */ p("div", { class: "bm_result_link", children: /* @__PURE__ */ p(
              "a",
              {
                rel: "noreferrer",
                href: "http://www.bikematrix.io/landed-it",
                target: "_blank",
                class: "link",
                children: v("bikematrix_poweredby")
              }
            ) })
          ]
        }
      )
    ] }) })
  ] }) });
}
const B0 = `.bike-selector-banner_wrapper{position:relative;height:40px}.bike-selector-banner{width:100%;height:40px;position:absolute;top:0;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-bottom:2rem}.floating{border-radius:12px;box-shadow:0 4px 4px #0000001f}.bike-selector-banner_title{color:#fff;text-transform:uppercase;padding-top:2px;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px}@media (width <= 991px){.bike-selector-banner_title{display:none}}.bike-selector-banner_title_mobile{display:none;text-transform:uppercase;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px;color:#fff;padding-top:2px}@media (width <= 991px){.bike-selector-banner_title_mobile{display:block}}.bike-selector-banner_svg{height:19px}.bike-selector-banner_icon-wrapper{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.bike-selector-banner_tick{width:12px;height:12px;position:absolute;right:6px;top:5px}
`, T0 = `.bm-button{cursor:pointer;border:none;font-weight:600}.bm-header-btn{display:inline-block;font-weight:200;background-color:#000;color:#fff;border-radius:5px;text-align:center;font-size:.75em;cursor:pointer}.bm-icon{display:inline-block;padding:6px;font-weight:200;border:none;text-align:center;font-size:.75em;background-color:transparent;height:44px;width:44px}.bm-icon svg{width:32px;height:32px}@media screen and (max-width: 991px){.bm-icon{padding:10px}.bm-icon svg{width:24px;height:24px}}.bm-bike-select-icon.show-selected,.bm-bike-select-icon.show-selected-banner{position:relative}.bm-bike-select-icon.show-selected:after{content:"";width:12px;height:12px;top:2px;right:2px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}.bm-bike-select-icon.show-selected-banner:after{content:"";width:12px;height:12px;top:6px;right:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}
`;
function Ac({
  "data-color": i,
  banner: e
}) {
  const t = Z.value;
  return window.BikeMatrix.getConfig(), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: T0 }),
    /* @__PURE__ */ p("div", { className: "bm-bikon-wrapper", children: /* @__PURE__ */ p(
      "button",
      {
        className: `p-2 !ml-auto header__icon bm-header-btn bm-icon bm-bike-select-icon ${t && !e ? "show-selected" : t && e ? "show-selected-banner" : ""}`,
        style: { color: i },
        onClick: e ? () => {
        } : () => Pr(),
        "aria-label": "Bike Matrix Bike Selector",
        children: /* @__PURE__ */ p(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            className: "w-full h-full",
            children: /* @__PURE__ */ p(
              "path",
              {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "m35.745 12.17l-4.925 1.48l3.28 8.578a8 8 0 1 1-1.868.715l-1.648-4.31l-5.682 11.802A1 1 0 0 1 24 31h-4.062A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A.998.998 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157l8.127-4.277l-.965-2.523a1 1 0 0 1 .647-1.315l5.957-1.787l.575 1.915Zm-13.662 9.89l1.972 5.52l4.23-8.784l-6.202 3.264Zm12.983 8.297l-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714ZM17.917 29H12a1 1 0 1 0 0 2h5.917A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1Z",
                clipRule: "evenodd"
              }
            )
          }
        )
      }
    ) })
  ] });
}
function L0({
  "data-title": i,
  "data-mobile-title": e,
  "data-color": t,
  "data-full-width": r,
  "data-font-color": n,
  "data-show": s
}) {
  const o = Z.value, { t: a } = ee();
  if (typeof s > "u" || s !== "true" && s !== "")
    return /* @__PURE__ */ p($, {});
  const l = n === "black" ? "#000" : n === "white" ? "#fff" : n;
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: B0 }),
    /* @__PURE__ */ p(
      "div",
      {
        onClick: () => {
          Pr();
        },
        class: "bike-selector-banner_wrapper",
        children: /* @__PURE__ */ p(
          "div",
          {
            class: `bike-selector-banner ${r === "false" ? "floating" : ""}`,
            style: {
              backgroundColor: t ?? "#000",
              maxWidth: r ?? null
            },
            children: /* @__PURE__ */ p($, { children: [
              /* @__PURE__ */ p(
                "h2",
                {
                  class: "bike-selector-banner_title",
                  style: { color: l },
                  children: o ? o.brand + " " + o.frameSeries : i || a("bikeselectorbanner_title")
                }
              ),
              /* @__PURE__ */ p(
                "h2",
                {
                  class: "bike-selector-banner_title_mobile",
                  style: { color: l },
                  children: o ? o.brand : e || a("bikeselectorbanner_mobiletitle")
                }
              ),
              /* @__PURE__ */ p(Ac, { "data-color": l, banner: !0 })
            ] })
          }
        )
      }
    )
  ] });
}
const F0 = `.variant-selector-wrapper{display:flex;flex-direction:column;border-radius:8px;gap:.25rem}.title{font-size:16px;line-height:20px;font-weight:600;padding-bottom:.25rem;color:#000;display:flex;align-items:center;justify-content:space-between;gap:1rem;font-family:nunito}.indicator-wrapper{display:grid;grid-template-columns:repeat(2,minmax(10px,1fr));row-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;grid-auto-columns:auto}@media screen and (max-width: 991px){.indicator-wrapper{grid-template-columns:minmax(10px,1fr)}}.full-width{grid-template-columns:minmax(10px,1fr)}.loading-wrapper{background-color:#f3f4f6;border:1px solid rgb(209 213 219);min-height:45px;border-radius:8px;display:flex;justify-content:center;align-items:center}
`, N0 = `.alt-indicator{border-radius:8px;border:1px solid #000;background-color:#fff;color:#000;font-weight:600;font-size:14px;display:flex;justify-content:space-between;align-items:center;gap:5px;padding:10px;text-decoration:none;transition:all ease-in-out .2s;font-family:nunito}.alt-indicator:hover{transform:scale(1.01)}.alt-is-active{box-shadow:0 3px 7px #00000040;font-weight:700}.variant-title{text-wrap:nowrap;text-overflow:ellipsis;white-space:nowrap;margin:0;overflow:hidden}
`, O0 = ({
  item: i,
  clickable: e,
  currentVariant: t
}) => {
  const [r, n] = M(!1);
  return j(() => {
    t === i.id ? n(!0) : n(!1);
  }, [t]), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: N0 }),
    /* @__PURE__ */ p("div", { className: "alt-indicator-wrapper", children: e && /* @__PURE__ */ p(
      "a",
      {
        href: window.location.pathname + `?variant=${i.id}`,
        className: `alt-indicator ${r ? "alt-is-active" : ""}`,
        style: {
          borderWidth: r ? "2px" : "1px"
        },
        children: /* @__PURE__ */ p("div", { className: "variant-title", children: i.title })
      }
    ) })
  ] });
}, M0 = `.question-button{cursor:pointer;display:flex;align-items:center;position:relative;background-color:#000;justify-content:center;height:24px;width:24px;border-radius:100%}.question-popup{position:absolute;border-radius:8px;background-color:#000;top:0;right:0;height:0;width:0;overflow:hidden;opacity:0;z-index:1}.question-popup .information{padding:12px;color:#fff;width:200px;font-size:12px}
`, P0 = ({
  showall: i,
  clickable: e
}) => {
  const t = Y(null), [r, n] = M(!1), { t: s } = ee();
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: M0 }),
    /* @__PURE__ */ p("div", { className: "question-button", onClick: () => {
      r ? r && Q.to(t.current, {
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
    }, children: [
      /* @__PURE__ */ p(Cc, { height: 12 }),
      /* @__PURE__ */ p("div", { className: "question-popup", ref: t, children: /* @__PURE__ */ p("div", { className: "information", children: [
        !i && s("variantselector_help_text"),
        " ",
        i && s("variantselector_help_text_showall"),
        " ",
        e && s("variantselector_help_text_clickable")
      ] }) })
    ] })
  ] });
}, I0 = `.indicator{border-radius:8px;border:1px solid #10b981;background-color:#ecfdf5;color:#022c22;font-weight:600;font-size:14px;display:flex;justify-content:space-between;align-items:center;gap:5px;padding:10px;text-decoration:none;transition:all ease-in-out .2s;font-family:nunito}.indicator:hover{transform:scale(1.01)}.is-active{box-shadow:0 3px 7px #00000040;font-weight:700;border-width:2px}.non-clickable-indicator{display:flex;justify-content:space-between;align-items:center;border-radius:8px;padding:10px;font-weight:600;font-size:14px}.icon-wrapper{min-height:24px;min-width:24px;display:flex;align-items:center}.variant-title{text-wrap:nowrap;text-overflow:ellipsis;white-space:nowrap;margin:0;overflow:hidden}
`, R0 = ({
  item: i,
  clickable: e,
  currentVariant: t,
  override: r
}) => {
  const [n, s] = M(!1);
  return j(() => {
    t === i.id ? s(!0) : s(!1);
  }, [t]), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: I0 }),
    (e || r) && /* @__PURE__ */ p(
      "a",
      {
        href: window.location.pathname + `?variant=${i.id}`,
        className: `indicator ${n ? "is-active" : ""}`,
        style: !i.warning && i.compatible ? {
          backgroundColor: "#ECFDF5",
          borderColor: "#10B981",
          borderStyle: "solid",
          color: "#022c22",
          borderWidth: n ? "2px" : "1px"
        } : i.warning && i.compatible ? {
          backgroundColor: "#FEFBEC",
          borderColor: "#FBA157",
          borderStyle: "solid",
          color: "#451a03",
          borderWidth: n ? "2px" : "1px"
        } : i.compatible === !1 ? {
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
        children: [
          /* @__PURE__ */ p("div", { className: "variant-title", children: i.title }),
          /* @__PURE__ */ p("div", { className: "icon-wrapper", children: i.warning && i.compatible ? /* @__PURE__ */ p(zr, { height: 23, width: 23 }) : !i.warning && i.compatible ? /* @__PURE__ */ p(Rr, { height: 23, width: 23, fill: "#10b981" }) : i.compatible === !1 ? /* @__PURE__ */ p(bn, { height: 23, width: 23, fill: "#10b981" }) : /* @__PURE__ */ p($, {}) })
        ]
      }
    ),
    !e && !r && /* @__PURE__ */ p(
      "div",
      {
        className: `non-clickable-indicator ${n ? "is-active" : ""}`,
        style: !i.warning && i.compatible ? {
          borderColor: "#10B981",
          borderStyle: "solid",
          color: "#022c22",
          borderWidth: n ? "2px" : "1px"
        } : i.warning && i.compatible ? {
          borderColor: "#FBA157",
          borderStyle: "solid",
          color: "#451a03",
          borderWidth: n ? "2px" : "1px"
        } : i.compatible === !1 ? {
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
        children: [
          /* @__PURE__ */ p("div", { className: "variant-title", children: i.title }),
          /* @__PURE__ */ p("div", { className: "icon-wrapper", children: i.warning && i.compatible ? /* @__PURE__ */ p(zr, { height: 23, width: 23 }) : !i.warning && i.compatible ? /* @__PURE__ */ p(Rr, { height: 23, width: 23, fill: "#10b981" }) : i.compatible === !1 ? /* @__PURE__ */ p(bn, { height: 23, width: 23, fill: "#10b981" }) : /* @__PURE__ */ p($, {}) })
        ]
      }
    )
  ] });
}, z0 = ({
  data: i,
  currentVariant: e,
  title: t,
  clickable: r,
  showall: n,
  override: s,
  fullWidth: o,
  sku: a,
  error: l
}) => {
  const [u, c] = M({
    type: "loading",
    display: !0
  }), [d, h] = M([]), [f, v] = M([]), w = window.BikeMatrix.getConfig(), { t: m } = ee(), b = () => {
    var A, k, y;
    c({ type: "loading", display: !0 });
    let _ = [];
    i.map((D) => {
      D.compatible && _.push(D);
    }), h(_);
    let C = [];
    (k = (A = Z.value) == null ? void 0 : A.compatibleCollections) != null && k.error || (y = Z.value) == null || y.compatibleCollections.map((D) => {
      w.productCollections.includes(D.handle) && C.push(D.handle);
    }), v(C);
  }, x = () => {
    c({ type: "loading", display: !0 }), !f.length && !d.length && !s && c({ type: "noInformation", display: !1 }), !f.length && !d.length && s && c({ type: "generic", display: !0 }), f.length && !d.length && s && c({ type: "compatible", display: !0 }), f.length && !d.length && !s && c({ type: "noCompatible", display: !0 }), f.length && d.length && c({ type: "compatible", display: !0 });
  };
  return j(() => {
    b();
  }, [Z.value, i, a]), j(() => {
    x();
  }, [Z.value, i, a, f, d]), /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ p("style", { type: "text/css", children: F0 }),
    u.display && /* @__PURE__ */ p("div", { className: "variant-selector-wrapper", children: /* @__PURE__ */ p("div", { className: "title", children: [
      t,
      /* @__PURE__ */ p(P0, { clickable: r, showall: n })
    ] }) }),
    l && /* @__PURE__ */ p(nt, { messages: l, left: !0, margin: 10 }),
    u.type === "loading" && u.display ? /* @__PURE__ */ p(
      "div",
      {
        className: `indicator-wrapper ${o || s ? "full-width" : ""}`,
        children: [
          /* @__PURE__ */ p("div", { className: "loading-wrapper", children: /* @__PURE__ */ p(St, { isLoading: !0, colour: "#d1d5db" }) }),
          /* @__PURE__ */ p("div", { className: "loading-wrapper", children: /* @__PURE__ */ p(St, { isLoading: !0, colour: "#d1d5db" }) })
        ]
      }
    ) : u.type === "generic" && u.display ? /* @__PURE__ */ p("div", { className: "indicator-wrapper", children: i.map((_, C) => /* @__PURE__ */ p(
      O0,
      {
        item: _,
        clickable: !0,
        currentVariant: e
      },
      C
    )) }) : u.type === "noCompatible" && u.display ? /* @__PURE__ */ p("div", { className: "indicator-wrapper full-width", children: /* @__PURE__ */ p("div", { className: "loading-wrapper", children: m("variantselector_no_compatible") }) }) : u.type === "compatible" && u.display ? /* @__PURE__ */ p(
      "div",
      {
        className: `indicator-wrapper ${o || s ? "full-width" : ""}`,
        children: i.map((_, C) => {
          if (!(!_.compatible && !s && !n))
            return /* @__PURE__ */ p(
              R0,
              {
                item: _,
                clickable: r,
                currentVariant: e,
                override: s
              },
              C
            );
        })
      }
    ) : u.type === "noInformation" && u.display ? /* @__PURE__ */ p("div", { className: "indicator-wrapper full-width", children: /* @__PURE__ */ p("div", { className: "loading-wrapper", children: m("variantselector_no_compatible_information") }) }) : /* @__PURE__ */ p($, {})
  ] });
}, q0 = ({
  "data-variants": i,
  "data-delimiter": e,
  "data-showall": t,
  "data-clickable": r,
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
  var T;
  const v = Z.value, w = window.BikeMatrix.getConfig(), [m, b] = M([]), [x, _] = M(null);
  let C = ((T = Ut()) == null ? void 0 : T.language) || "en-GB";
  const A = new Se(
    w.apiUrl,
    w.apiKey,
    w.apiToken,
    w.isShopify
  ), k = f || w.sku, [y, D] = M(""), { t: E } = ee(), L = async () => {
    const F = i.split("~");
    let N = [], O = [];
    if (F.map((q) => {
      let R = q.split(e || "|");
      N.push(R[0].length > 2 ? R[0] : R[2]), O.push({
        title: R[1],
        id: R[2],
        sku: R[0].length > 2 ? R[0] : R[2],
        index: parseInt(R[3])
      });
    }), v) {
      D("");
      const q = await A.checkSkusCompatibilityWithResults(
        v.key,
        N,
        C,
        "VariantSelector",
        w.currentCollectionHandle
      );
      if (!q.success) {
        D(q.error), w.logLevel === "verbose" && console.error(q.logError);
        return;
      }
      let R = [];
      q.data.map((S) => {
        O.map((B) => {
          S.sku === B.sku && R.push({
            bikeKey: S.bikeKey,
            sku: S.sku,
            compatible: S.compatible,
            compatibilityMessage: S.compatibilityMessage,
            warning: S.warning,
            warningMessage: S.warningMessage,
            compatibilityLogGuid: S.compatibilityLogGuid,
            title: B.title,
            id: B.id,
            index: B.index
          });
        });
      }), b(R.sort((S, B) => S.index - B.index));
    } else {
      let q = [];
      O.map((R) => {
        q.push({
          sku: R.sku,
          title: R.title,
          id: R.id,
          index: R.index
        });
      }), b(q.sort((R, S) => R.index - S.index));
    }
  };
  return j(() => {
    L();
  }, [v, k]), j(() => {
    const N = new URLSearchParams(window.location.search).get("variant"), O = window.location.href;
    if (m && u === "true" && !N) {
      let q = !1;
      O.charAt(O.length - 1) === "?" && (q = !0);
      for (let R = 0; R < m.length; R++)
        if (m[R].compatible) {
          window.location.href = window.location + (q ? "variant=" : "?variant=") + m[R].id;
          break;
        }
    }
    N ? _(N) : m.length && _(m[0].id);
  }, [m]), /* @__PURE__ */ p(
    "div",
    {
      style: {
        paddingTop: `${c}px`,
        paddingBottom: `${d}px`
      },
      children: a !== "true" && /* @__PURE__ */ p(
        z0,
        {
          data: m,
          currentVariant: x,
          showall: t === "true",
          override: h === "true",
          clickable: r === "true",
          fullWidth: s === "true" || h === "true",
          title: o || E("variantselector_title"),
          sku: k,
          error: y
        }
      )
    }
  );
}, $0 = typeof window < "u";
function Ft(i, e, t = [], r = null) {
  Ic((s) => cs.value ? /* @__PURE__ */ p(i, { ...s }) : /* @__PURE__ */ p($, {}), e, t, r);
}
function V0() {
  Ft(h0, "bikematrix-bikeselector", [], {
    shadow: !0
  }), Ft(m0, "bikematrix-productresult", ["data-sku"], {
    shadow: !0
  }), Ft(
    x0,
    "bikematrix-collectionresult",
    [
      "data-product-id",
      "data-product-skus",
      "data-padding-top",
      "data-padding-bottom"
    ],
    { shadow: !0 }
  ), Ft(Dc, "bikematrix-compatibilitylabel", ["data-type"], {
    shadow: !0
  }), Ft(E0, "bikematrix-compatiblelist", [
    "data-title",
    "data-current-count",
    "data-total-count"
  ]), Ft(
    L0,
    "bikematrix-bikeselectorbanner",
    [
      "data-title",
      "data-mobile-title",
      "data-color",
      "data-full-width",
      "data-font-color",
      "data-show"
    ],
    { shadow: !0 }
  ), Ft(Ac, "bikematrix-bikon", ["data-color"], { shadow: !0 }), Ft(
    q0,
    "bikematrix-variantselector",
    [
      "data-title",
      "data-variants",
      "data-delimiter",
      "data-showall",
      "data-clickable",
      "data-query-param",
      "data-full-width",
      "data-show",
      "data-route-variant",
      "data-padding-top",
      "data-padding-bottom",
      "data-override",
      "data-sku"
    ],
    {
      shadow: !0
    }
  );
}
function j0() {
  if (!$0)
    return null;
  const i = p2.getInstance(), e = {
    // Core instance methods
    isInitialized: () => i.isInitialized(),
    init: (t) => i.initialize(t),
    refresh: () => i.refresh(),
    destroy: () => i.destroy(),
    reload: (t = !0) => i.reload(t),
    reset: () => i.reset(),
    // Utility methods
    getConfig: () => i.getConfig(),
    getCurrentBike: () => i.getCurrentBike(),
    getActiveSubscription: () => i.getActiveSubscription(),
    updateConfig: (t) => i.updateConfig(t),
    updateSku: (t) => i.updateSku(t),
    updateCompatibleList: () => i.updateCompatibleList()
  };
  return typeof process < "u" && process.env.NODE_ENV === "development" && (e.core = i), window.BikeMatrix = e, V0(), document.currentScript && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => e.init()) : e.init()), e;
}
const U0 = j0();
export {
  U0 as default
};
