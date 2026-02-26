var di, U, _s, bs, Vt, Jo, vs, Ta, ys, Qr = {}, ks = [], Mc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Zi = Array.isArray;
function gt(i, e) {
  for (var t in e)
    i[t] = e[t];
  return i;
}
function ws(i) {
  var e = i.parentNode;
  e && e.removeChild(i);
}
function R(i, e, t) {
  var r, a, o, n = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? a = e[o] : n[o] = e[o];
  if (arguments.length > 2 && (n.children = arguments.length > 3 ? di.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps)
      n[o] === void 0 && (n[o] = i.defaultProps[o]);
  return Gr(i, n, r, a, null);
}
function Gr(i, e, t, r, a) {
  var o = { type: i, props: e, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: a ?? ++_s, __i: -1, __u: 0 };
  return a == null && U.vnode != null && U.vnode(o), o;
}
function Bc() {
  return { current: null };
}
function F(i) {
  return i.children;
}
function Ye(i, e) {
  this.props = i, this.context = e;
}
function pr(i, e) {
  if (e == null)
    return i.__ ? pr(i.__, i.__i + 1) : null;
  for (var t; e < i.__k.length; e++)
    if ((t = i.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof i.type == "function" ? pr(i) : null;
}
function xs(i) {
  var e, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, e = 0; e < i.__k.length; e++)
      if ((t = i.__k[e]) != null && t.__e != null) {
        i.__e = i.__c.base = t.__e;
        break;
      }
    return xs(i);
  }
}
function Pa(i) {
  (!i.__d && (i.__d = !0) && Vt.push(i) && !Pi.__r++ || Jo !== U.debounceRendering) && ((Jo = U.debounceRendering) || vs)(Pi);
}
function Pi() {
  var i, e, t, r, a, o, n, s, l;
  for (Vt.sort(Ta); i = Vt.shift(); )
    i.__d && (e = Vt.length, r = void 0, o = (a = (t = i).__v).__e, s = [], l = [], (n = t.__P) && ((r = gt({}, a)).__v = a.__v + 1, U.vnode && U.vnode(r), so(n, r, a, t.__n, n.ownerSVGElement !== void 0, 32 & a.__u ? [o] : null, s, o ?? pr(a), !!(32 & a.__u), l), r.__v = a.__v, r.__.__k[r.__i] = r, zs(s, r, l), r.__e != o && xs(r)), Vt.length > e && Vt.sort(Ta));
  Pi.__r = 0;
}
function Cs(i, e, t, r, a, o, n, s, l, c, d) {
  var u, f, h, _, m, y = r && r.__k || ks, v = e.length;
  for (t.__d = l, Nc(t, e, y), l = t.__d, u = 0; u < v; u++)
    (h = t.__k[u]) != null && typeof h != "boolean" && typeof h != "function" && (f = h.__i === -1 ? Qr : y[h.__i] || Qr, h.__i = u, so(i, h, f, a, o, n, s, l, c, d), _ = h.__e, h.ref && f.ref != h.ref && (f.ref && lo(f.ref, null, h), d.push(h.ref, h.__c || _, h)), m == null && _ != null && (m = _), 65536 & h.__u || f.__k === h.__k ? l = Ss(h, l, i) : typeof h.type == "function" && h.__d !== void 0 ? l = h.__d : _ && (l = _.nextSibling), h.__d = void 0, h.__u &= -196609);
  t.__d = l, t.__e = m;
}
function Nc(i, e, t) {
  var r, a, o, n, s, l = e.length, c = t.length, d = c, u = 0;
  for (i.__k = [], r = 0; r < l; r++)
    n = r + u, (a = i.__k[r] = (a = e[r]) == null || typeof a == "boolean" || typeof a == "function" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? Gr(null, a, null, null, null) : Zi(a) ? Gr(F, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? Gr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null ? (a.__ = i, a.__b = i.__b + 1, s = Oc(a, t, n, d), a.__i = s, o = null, s !== -1 && (d--, (o = t[s]) && (o.__u |= 131072)), o == null || o.__v === null ? (s == -1 && u--, typeof a.type != "function" && (a.__u |= 65536)) : s !== n && (s === n + 1 ? u++ : s > n ? d > l - n ? u += s - n : u-- : s < n ? s == n - 1 && (u = s - n) : u = 0, s !== r + u && (a.__u |= 65536))) : (o = t[n]) && o.key == null && o.__e && !(131072 & o.__u) && (o.__e == i.__d && (i.__d = pr(o)), Ea(o, o, !1), t[n] = null, d--);
  if (d)
    for (r = 0; r < c; r++)
      (o = t[r]) != null && !(131072 & o.__u) && (o.__e == i.__d && (i.__d = pr(o)), Ea(o, o));
}
function Ss(i, e, t) {
  var r, a;
  if (typeof i.type == "function") {
    for (r = i.__k, a = 0; r && a < r.length; a++)
      r[a] && (r[a].__ = i, e = Ss(r[a], e, t));
    return e;
  }
  i.__e != e && (t.insertBefore(i.__e, e || null), e = i.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function mt(i, e) {
  return e = e || [], i == null || typeof i == "boolean" || (Zi(i) ? i.some(function(t) {
    mt(t, e);
  }) : e.push(i)), e;
}
function Oc(i, e, t, r) {
  var a = i.key, o = i.type, n = t - 1, s = t + 1, l = e[t];
  if (l === null || l && a == l.key && o === l.type && !(131072 & l.__u))
    return t;
  if (r > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; n >= 0 || s < e.length; ) {
      if (n >= 0) {
        if ((l = e[n]) && !(131072 & l.__u) && a == l.key && o === l.type)
          return n;
        n--;
      }
      if (s < e.length) {
        if ((l = e[s]) && !(131072 & l.__u) && a == l.key && o === l.type)
          return s;
        s++;
      }
    }
  return -1;
}
function Xo(i, e, t) {
  e[0] === "-" ? i.setProperty(e, t ?? "") : i[e] = t == null ? "" : typeof t != "number" || Mc.test(e) ? t : t + "px";
}
function gi(i, e, t, r, a) {
  var o;
  e:
    if (e === "style")
      if (typeof t == "string")
        i.style.cssText = t;
      else {
        if (typeof r == "string" && (i.style.cssText = r = ""), r)
          for (e in r)
            t && e in t || Xo(i.style, e, "");
        if (t)
          for (e in t)
            r && t[e] === r[e] || Xo(i.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in i ? e.toLowerCase().slice(2) : e.slice(2), i.l || (i.l = {}), i.l[e + o] = t, t ? r ? t.u = r.u : (t.u = Date.now(), i.addEventListener(e, o ? en : Qo, o)) : i.removeEventListener(e, o ? en : Qo, o);
    else {
      if (a)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in i)
        try {
          i[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? i.removeAttribute(e) : i.setAttribute(e, t));
    }
}
function Qo(i) {
  if (this.l) {
    var e = this.l[i.type + !1];
    if (i.t) {
      if (i.t <= e.u)
        return;
    } else
      i.t = Date.now();
    return e(U.event ? U.event(i) : i);
  }
}
function en(i) {
  if (this.l)
    return this.l[i.type + !0](U.event ? U.event(i) : i);
}
function so(i, e, t, r, a, o, n, s, l, c) {
  var d, u, f, h, _, m, y, v, g, b, k, w, C, S, z, x = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & t.__u && (l = !!(32 & t.__u), o = [s = e.__e = t.__e]), (d = U.__b) && d(e);
  e:
    if (typeof x == "function")
      try {
        if (v = e.props, g = (d = x.contextType) && r[d.__c], b = d ? g ? g.props.value : d.__ : r, t.__c ? y = (u = e.__c = t.__c).__ = u.__E : ("prototype" in x && x.prototype.render ? e.__c = u = new x(v, b) : (e.__c = u = new Ye(v, b), u.constructor = x, u.render = Rc), g && g.sub(u), u.props = v, u.state || (u.state = {}), u.context = b, u.__n = r, f = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), x.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = gt({}, u.__s)), gt(u.__s, x.getDerivedStateFromProps(v, u.__s))), h = u.props, _ = u.state, u.__v = e, f)
          x.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && v !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(v, b), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(v, u.__s, b) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (u.props = v, u.state = u.__s, u.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(T) {
              T && (T.__ = e);
            }), k = 0; k < u._sb.length; k++)
              u.__h.push(u._sb[k]);
            u._sb = [], u.__h.length && n.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, b), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(h, _, m);
          });
        }
        if (u.context = b, u.props = v, u.__P = i, u.__e = !1, w = U.__r, C = 0, "prototype" in x && x.prototype.render) {
          for (u.state = u.__s, u.__d = !1, w && w(e), d = u.render(u.props, u.state, u.context), S = 0; S < u._sb.length; S++)
            u.__h.push(u._sb[S]);
          u._sb = [];
        } else
          do
            u.__d = !1, w && w(e), d = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++C < 25);
        u.state = u.__s, u.getChildContext != null && (r = gt(gt({}, r), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (m = u.getSnapshotBeforeUpdate(h, _)), Cs(i, Zi(z = d != null && d.type === F && d.key == null ? d.props.children : d) ? z : [z], e, t, r, a, o, n, s, l, c), u.base = e.__e, e.__u &= -161, u.__h.length && n.push(u), y && (u.__E = u.__ = null);
      } catch (T) {
        e.__v = null, l || o != null ? (e.__e = s, e.__u |= l ? 160 : 32, o[o.indexOf(s)] = null) : (e.__e = t.__e, e.__k = t.__k), U.__e(T, e, t);
      }
    else
      o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Ic(t.__e, e, t, r, a, o, n, l, c);
  (d = U.diffed) && d(e);
}
function zs(i, e, t) {
  e.__d = void 0;
  for (var r = 0; r < t.length; r++)
    lo(t[r], t[++r], t[++r]);
  U.__c && U.__c(e, i), i.some(function(a) {
    try {
      i = a.__h, a.__h = [], i.some(function(o) {
        o.call(a);
      });
    } catch (o) {
      U.__e(o, a.__v);
    }
  });
}
function Ic(i, e, t, r, a, o, n, s, l) {
  var c, d, u, f, h, _, m, y = t.props, v = e.props, g = e.type;
  if (g === "svg" && (a = !0), o != null) {
    for (c = 0; c < o.length; c++)
      if ((h = o[c]) && "setAttribute" in h == !!g && (g ? h.localName === g : h.nodeType === 3)) {
        i = h, o[c] = null;
        break;
      }
  }
  if (i == null) {
    if (g === null)
      return document.createTextNode(v);
    i = a ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, v.is && v), o = null, s = !1;
  }
  if (g === null)
    y === v || s && i.data === v || (i.data = v);
  else {
    if (o = o && di.call(i.childNodes), y = t.props || Qr, !s && o != null)
      for (y = {}, c = 0; c < i.attributes.length; c++)
        y[(h = i.attributes[c]).name] = h.value;
    for (c in y)
      h = y[c], c == "children" || (c == "dangerouslySetInnerHTML" ? u = h : c === "key" || c in v || gi(i, c, null, h, a));
    for (c in v)
      h = v[c], c == "children" ? f = h : c == "dangerouslySetInnerHTML" ? d = h : c == "value" ? _ = h : c == "checked" ? m = h : c === "key" || s && typeof h != "function" || y[c] === h || gi(i, c, h, y[c], a);
    if (d)
      s || u && (d.__html === u.__html || d.__html === i.innerHTML) || (i.innerHTML = d.__html), e.__k = [];
    else if (u && (i.innerHTML = ""), Cs(i, Zi(f) ? f : [f], e, t, r, a && g !== "foreignObject", o, n, o ? o[0] : t.__k && pr(t, 0), s, l), o != null)
      for (c = o.length; c--; )
        o[c] != null && ws(o[c]);
    s || (c = "value", _ !== void 0 && (_ !== i[c] || g === "progress" && !_ || g === "option" && _ !== y[c]) && gi(i, c, _, y[c], !1), c = "checked", m !== void 0 && m !== i[c] && gi(i, c, m, y[c], !1));
  }
  return i;
}
function lo(i, e, t) {
  try {
    typeof i == "function" ? i(e) : i.current = e;
  } catch (r) {
    U.__e(r, t);
  }
}
function Ea(i, e, t) {
  var r, a;
  if (U.unmount && U.unmount(i), (r = i.ref) && (r.current && r.current !== i.__e || lo(r, null, e)), (r = i.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        U.__e(o, e);
      }
    r.base = r.__P = null, i.__c = void 0;
  }
  if (r = i.__k)
    for (a = 0; a < r.length; a++)
      r[a] && Ea(r[a], e, t || typeof i.type != "function");
  t || i.__e == null || ws(i.__e), i.__ = i.__e = i.__d = void 0;
}
function Rc(i, e, t) {
  return this.constructor(i, t);
}
function Bt(i, e, t) {
  var r, a, o, n;
  U.__ && U.__(i, e), a = (r = typeof t == "function") ? null : t && t.__k || e.__k, o = [], n = [], so(e, i = (!r && t || e).__k = R(F, null, [i]), a || Qr, Qr, e.ownerSVGElement !== void 0, !r && t ? [t] : a ? null : e.firstChild ? di.call(e.childNodes) : null, o, !r && t ? t : a ? a.__e : e.firstChild, r, n), zs(o, i, n);
}
function co(i, e) {
  Bt(i, e, co);
}
function uo(i, e, t) {
  var r, a, o, n, s = gt({}, i.props);
  for (o in i.type && i.type.defaultProps && (n = i.type.defaultProps), e)
    o == "key" ? r = e[o] : o == "ref" ? a = e[o] : s[o] = e[o] === void 0 && n !== void 0 ? n[o] : e[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? di.call(arguments, 2) : t), Gr(i.type, s, r || i.key, a || i.ref, null);
}
function ui(i, e) {
  var t = { __c: e = "__cC" + ys++, __: i, Consumer: function(r, a) {
    return r.children(a);
  }, Provider: function(r) {
    var a, o;
    return this.getChildContext || (a = [], (o = {})[e] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && a.some(function(s) {
        s.__e = !0, Pa(s);
      });
    }, this.sub = function(n) {
      a.push(n);
      var s = n.componentWillUnmount;
      n.componentWillUnmount = function() {
        a.splice(a.indexOf(n), 1), s && s.call(n);
      };
    }), r.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
di = ks.slice, U = { __e: function(i, e, t, r) {
  for (var a, o, n; e = e.__; )
    if ((a = e.__c) && !a.__)
      try {
        if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(i)), n = a.__d), a.componentDidCatch != null && (a.componentDidCatch(i, r || {}), n = a.__d), n)
          return a.__E = a;
      } catch (s) {
        i = s;
      }
  throw i;
} }, _s = 0, bs = function(i) {
  return i != null && i.constructor == null;
}, Ye.prototype.setState = function(i, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = gt({}, this.state), typeof i == "function" && (i = i(gt({}, t), this.props)), i && gt(t, i), i != null && this.__v && (e && this._sb.push(e), Pa(this));
}, Ye.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), Pa(this));
}, Ye.prototype.render = F, Vt = [], vs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ta = function(i, e) {
  return i.__v.__b - e.__v.__b;
}, Pi.__r = 0, ys = 0;
function po() {
  return (po = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
    }
    return i;
  }).apply(this, arguments);
}
var Dc = ["context", "children"];
function jc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var e = i.children, t = function(r, a) {
    if (r == null)
      return {};
    var o, n, s = {}, l = Object.keys(r);
    for (n = 0; n < l.length; n++)
      a.indexOf(o = l[n]) >= 0 || (s[o] = r[o]);
    return s;
  }(i, Dc);
  return uo(e, t);
}
function Fc() {
  var i = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(i), this._vdom = R(jc, po({}, this._props, { context: i.detail.context }), function e(t, r) {
    if (t.nodeType === 3)
      return t.data;
    if (t.nodeType !== 1)
      return null;
    var a = [], o = {}, n = 0, s = t.attributes, l = t.childNodes;
    for (n = s.length; n--; )
      s[n].name !== "slot" && (o[s[n].name] = s[n].value, o[As(s[n].name)] = s[n].value);
    for (n = l.length; n--; ) {
      var c = e(l[n], null), d = l[n].slot;
      d ? o[d] = R(tn, { name: d }, c) : a[n] = c;
    }
    var u = r ? R(tn, null, a) : a;
    return R(r || t.nodeName.toLowerCase(), o, u);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? co : Bt)(this._vdom, this._root);
}
function As(i) {
  return i.replace(/-(\w)/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Vc(i, e, t) {
  if (this._vdom) {
    var r = {};
    r[i] = t = t ?? void 0, r[As(i)] = t, this._vdom = uo(this._vdom, r), Bt(this._vdom, this._root);
  }
}
function $c() {
  Bt(this._vdom = null, this._root);
}
function tn(i, e) {
  var t = this;
  return R("slot", po({}, i, { ref: function(r) {
    r ? (t.ref = r, t._listener || (t._listener = function(a) {
      a.stopPropagation(), a.detail.context = e;
    }, r.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Hc(i, e, t, r) {
  function a() {
    var o = Reflect.construct(HTMLElement, [], a);
    return o._vdomComponent = i, o._root = r && r.shadow ? o.attachShadow({ mode: r.mode || "open" }) : o, o;
  }
  return (a.prototype = Object.create(HTMLElement.prototype)).constructor = a, a.prototype.connectedCallback = Fc, a.prototype.attributeChangedCallback = Vc, a.prototype.disconnectedCallback = $c, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), a.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(a.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(o, null, n) : (this._props || (this._props = {}), this._props[o] = n, this.connectedCallback());
      var s = typeof n;
      n != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(o, n);
    } });
  }), customElements.define(e || i.tagName || i.displayName || i.name, a);
}
var Nt, ae, oa, rn, fr = 0, Ts = [], wi = [], se = U, an = se.__b, on = se.__r, nn = se.diffed, sn = se.__c, ln = se.unmount, cn = se.__;
function Sr(i, e) {
  se.__h && se.__h(ae, i, fr || e), fr = 0;
  var t = ae.__H || (ae.__H = { __: [], __h: [] });
  return i >= t.__.length && t.__.push({ __V: wi }), t.__[i];
}
function B(i) {
  return fr = 1, Ps(Ls, i);
}
function Ps(i, e, t) {
  var r = Sr(Nt++, 2);
  if (r.t = i, !r.__c && (r.__ = [t ? t(e) : Ls(void 0, e), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], c = r.t(l, s);
    l !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = ae, !ae.u)) {
    var a = function(s, l, c) {
      if (!r.__c.__H)
        return !0;
      var d = r.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (d.every(function(f) {
        return !f.__N;
      }))
        return !o || o.call(this, s, l, c);
      var u = !1;
      return d.forEach(function(f) {
        if (f.__N) {
          var h = f.__[0];
          f.__ = f.__N, f.__N = void 0, h !== f.__[0] && (u = !0);
        }
      }), !(!u && r.__c.props === s) && (!o || o.call(this, s, l, c));
    };
    ae.u = !0;
    var o = ae.shouldComponentUpdate, n = ae.componentWillUpdate;
    ae.componentWillUpdate = function(s, l, c) {
      if (this.__e) {
        var d = o;
        o = void 0, a(s, l, c), o = d;
      }
      n && n.call(this, s, l, c);
    }, ae.shouldComponentUpdate = a;
  }
  return r.__N || r.__;
}
function V(i, e) {
  var t = Sr(Nt++, 3);
  !se.__s && ho(t.__H, e) && (t.__ = i, t.i = e, ae.__H.__h.push(t));
}
function zr(i, e) {
  var t = Sr(Nt++, 4);
  !se.__s && ho(t.__H, e) && (t.__ = i, t.i = e, ae.__h.push(t));
}
function K(i) {
  return fr = 5, at(function() {
    return { current: i };
  }, []);
}
function Uc(i, e, t) {
  fr = 6, zr(function() {
    return typeof i == "function" ? (i(e()), function() {
      return i(null);
    }) : i ? (i.current = e(), function() {
      return i.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(i));
}
function at(i, e) {
  var t = Sr(Nt++, 7);
  return ho(t.__H, e) ? (t.__V = i(), t.i = e, t.__h = i, t.__V) : t.__;
}
function Es(i, e) {
  return fr = 8, at(function() {
    return i;
  }, e);
}
function fo(i) {
  var e = ae.context[i.__c], t = Sr(Nt++, 9);
  return t.c = i, e ? (t.__ == null && (t.__ = !0, e.sub(ae)), e.props.value) : i.__;
}
function Gc(i, e) {
  se.useDebugValue && se.useDebugValue(e ? e(i) : i);
}
function Kc() {
  var i = Sr(Nt++, 11);
  if (!i.__) {
    for (var e = ae.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    i.__ = "P" + t[0] + "-" + t[1]++;
  }
  return i.__;
}
function Wc() {
  for (var i; i = Ts.shift(); )
    if (i.__P && i.__H)
      try {
        i.__H.__h.forEach(xi), i.__H.__h.forEach(La), i.__H.__h = [];
      } catch (e) {
        i.__H.__h = [], se.__e(e, i.__v);
      }
}
se.__b = function(i) {
  ae = null, an && an(i);
}, se.__ = function(i, e) {
  i && e.__k && e.__k.__m && (i.__m = e.__k.__m), cn && cn(i, e);
}, se.__r = function(i) {
  on && on(i), Nt = 0;
  var e = (ae = i.__c).__H;
  e && (oa === ae ? (e.__h = [], ae.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = wi, t.__N = t.i = void 0;
  })) : (e.__h.forEach(xi), e.__h.forEach(La), e.__h = [], Nt = 0)), oa = ae;
}, se.diffed = function(i) {
  nn && nn(i);
  var e = i.__c;
  e && e.__H && (e.__H.__h.length && (Ts.push(e) !== 1 && rn === se.requestAnimationFrame || ((rn = se.requestAnimationFrame) || Yc)(Wc)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== wi && (t.__ = t.__V), t.i = void 0, t.__V = wi;
  })), oa = ae = null;
}, se.__c = function(i, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(xi), t.__h = t.__h.filter(function(r) {
        return !r.__ || La(r);
      });
    } catch (r) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], se.__e(r, t.__v);
    }
  }), sn && sn(i, e);
}, se.unmount = function(i) {
  ln && ln(i);
  var e, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      xi(r);
    } catch (a) {
      e = a;
    }
  }), t.__H = void 0, e && se.__e(e, t.__v));
};
var dn = typeof requestAnimationFrame == "function";
function Yc(i) {
  var e, t = function() {
    clearTimeout(r), dn && cancelAnimationFrame(e), setTimeout(i);
  }, r = setTimeout(t, 100);
  dn && (e = requestAnimationFrame(t));
}
function xi(i) {
  var e = ae, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), ae = e;
}
function La(i) {
  var e = ae;
  i.__c = i.__(), ae = e;
}
function ho(i, e) {
  return !i || i.length !== e.length || e.some(function(t, r) {
    return t !== i[r];
  });
}
function Ls(i, e) {
  return typeof e == "function" ? e(i) : e;
}
function Ms(i, e) {
  for (var t in e)
    i[t] = e[t];
  return i;
}
function Ma(i, e) {
  for (var t in i)
    if (t !== "__source" && !(t in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && i[r] !== e[r])
      return !0;
  return !1;
}
function Ba(i, e) {
  this.props = i, this.context = e;
}
function qc(i, e) {
  function t(a) {
    var o = this.props.ref, n = o == a.ref;
    return !n && o && (o.call ? o(null) : o.current = null), e ? !e(this.props, a) || !n : Ma(this.props, a);
  }
  function r(a) {
    return this.shouldComponentUpdate = t, R(i, a);
  }
  return r.displayName = "Memo(" + (i.displayName || i.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Ba.prototype = new Ye()).isPureReactComponent = !0, Ba.prototype.shouldComponentUpdate = function(i, e) {
  return Ma(this.props, i) || Ma(this.state, e);
};
var un = U.__b;
U.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), un && un(i);
};
var Zc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function go(i) {
  function e(t) {
    var r = Ms({}, t);
    return delete r.ref, i(r, t.ref || null);
  }
  return e.$$typeof = Zc, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", e;
}
var pn = function(i, e) {
  return i == null ? null : mt(mt(i).map(e));
}, Jc = { map: pn, forEach: pn, count: function(i) {
  return i ? mt(i).length : 0;
}, only: function(i) {
  var e = mt(i);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: mt }, Xc = U.__e;
U.__e = function(i, e, t, r) {
  if (i.then) {
    for (var a, o = e; o = o.__; )
      if ((a = o.__c) && a.__c)
        return e.__e == null && (e.__e = t.__e, e.__k = t.__k), a.__c(i, e);
  }
  Xc(i, e, t, r);
};
var fn = U.unmount;
function Bs(i, e, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), i.__c.__H = null), (i = Ms({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = e), i.__c = null), i.__k = i.__k && i.__k.map(function(r) {
    return Bs(r, e, t);
  })), i;
}
function Ns(i, e, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(r) {
    return Ns(r, e, t);
  }), i.__c && i.__c.__P === e && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function Ci() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Os(i) {
  var e = i.__.__c;
  return e && e.__a && e.__a(i);
}
function Qc(i) {
  var e, t, r;
  function a(o) {
    if (e || (e = i()).then(function(n) {
      t = n.default || n;
    }, function(n) {
      r = n;
    }), r)
      throw r;
    if (!t)
      throw e;
    return R(t, o);
  }
  return a.displayName = "Lazy", a.__f = !0, a;
}
function Fr() {
  this.u = null, this.o = null;
}
U.unmount = function(i) {
  var e = i.__c;
  e && e.__R && e.__R(), e && 32 & i.__u && (i.type = null), fn && fn(i);
}, (Ci.prototype = new Ye()).__c = function(i, e) {
  var t = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(t);
  var a = Os(r.__v), o = !1, n = function() {
    o || (o = !0, t.__R = null, a ? a(s) : s());
  };
  t.__R = n;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = Ns(l, l.__c.__P, l.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), i.then(n, n);
}, Ci.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ci.prototype.render = function(i, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Bs(this.__b, t, r.__O = r.__P);
    }
    this.__b = null;
  }
  var a = e.__a && R(F, null, i.fallback);
  return a && (a.__u &= -33), [R(F, null, e.__a ? null : i.children), a];
};
var hn = function(i, e, t) {
  if (++t[1] === t[0] && i.o.delete(e), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.o.size))
    for (t = i.u; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      i.u = t = t[2];
    }
};
function ed(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function td(i) {
  var e = this, t = i.i;
  e.componentWillUnmount = function() {
    Bt(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== t && e.componentWillUnmount(), e.l || (e.i = t, e.l = { nodeType: 1, parentNode: t, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, a) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), Bt(R(ed, { context: e.context }, i.__v), e.l);
}
function rd(i, e) {
  var t = R(td, { __v: i, i: e });
  return t.containerInfo = e, t;
}
(Fr.prototype = new Ye()).__a = function(i) {
  var e = this, t = Os(e.__v), r = e.o.get(i);
  return r[0]++, function(a) {
    var o = function() {
      e.props.revealOrder ? (r.push(a), hn(e, i, r)) : a();
    };
    t ? t(o) : o();
  };
}, Fr.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = mt(i.children);
  i.revealOrder && i.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; )
    this.o.set(e[t], this.u = [1, 0, this.u]);
  return i.children;
}, Fr.prototype.componentDidUpdate = Fr.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(e, t) {
    hn(i, t, e);
  });
};
var Is = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, id = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ad = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, od = /[A-Z0-9]/g, nd = typeof document < "u", sd = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function ld(i, e, t) {
  return e.__k == null && (e.textContent = ""), Bt(i, e), typeof t == "function" && t(), i ? i.__c : null;
}
function cd(i, e, t) {
  return co(i, e), typeof t == "function" && t(), i ? i.__c : null;
}
Ye.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(Ye.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(e) {
    Object.defineProperty(this, i, { configurable: !0, writable: !0, value: e });
  } });
});
var gn = U.event;
function dd() {
}
function ud() {
  return this.cancelBubble;
}
function pd() {
  return this.defaultPrevented;
}
U.event = function(i) {
  return gn && (i = gn(i)), i.persist = dd, i.isPropagationStopped = ud, i.isDefaultPrevented = pd, i.nativeEvent = i;
};
var mo, fd = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, mn = U.vnode;
U.vnode = function(i) {
  typeof i.type == "string" && function(e) {
    var t = e.props, r = e.type, a = {};
    for (var o in t) {
      var n = t[o];
      if (!(o === "value" && "defaultValue" in t && n == null || nd && o === "children" && r === "noscript" || o === "class" || o === "className")) {
        var s = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && n === !0 ? n = "" : s === "translate" && n === "no" ? n = !1 : s === "ondoubleclick" ? o = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || sd(t.type) ? s === "onfocus" ? o = "onfocusin" : s === "onblur" ? o = "onfocusout" : ad.test(o) ? o = s : r.indexOf("-") === -1 && id.test(o) ? o = o.replace(od, "-$&").toLowerCase() : n === null && (n = void 0) : s = o = "oninput", s === "oninput" && a[o = s] && (o = "oninputCapture"), a[o] = n;
      }
    }
    r == "select" && a.multiple && Array.isArray(a.value) && (a.value = mt(t.children).forEach(function(l) {
      l.props.selected = a.value.indexOf(l.props.value) != -1;
    })), r == "select" && a.defaultValue != null && (a.value = mt(t.children).forEach(function(l) {
      l.props.selected = a.multiple ? a.defaultValue.indexOf(l.props.value) != -1 : a.defaultValue == l.props.value;
    })), t.class && !t.className ? (a.class = t.class, Object.defineProperty(a, "className", fd)) : (t.className && !t.class || t.class && t.className) && (a.class = a.className = t.className), e.props = a;
  }(i), i.$$typeof = Is, mn && mn(i);
};
var _n = U.__r;
U.__r = function(i) {
  _n && _n(i), mo = i.__c;
};
var bn = U.diffed;
U.diffed = function(i) {
  bn && bn(i);
  var e = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value), mo = null;
};
var hd = { ReactCurrentDispatcher: { current: { readContext: function(i) {
  return mo.__n[i.__c].props.value;
} } } };
function gd(i) {
  return R.bind(null, i);
}
function Ji(i) {
  return !!i && i.$$typeof === Is;
}
function md(i) {
  return Ji(i) && i.type === F;
}
function _d(i) {
  return Ji(i) ? uo.apply(null, arguments) : i;
}
function bd(i) {
  return !!i.__k && (Bt(null, i), !0);
}
function vd(i) {
  return i && (i.base || i.nodeType === 1 && i) || null;
}
var yd = function(i, e) {
  return i(e);
}, kd = function(i, e) {
  return i(e);
}, wd = F;
function Rs(i) {
  i();
}
function xd(i) {
  return i;
}
function Cd() {
  return [!1, Rs];
}
var Sd = zr, zd = Ji;
function Ad(i, e) {
  var t = e(), r = B({ h: { __: t, v: e } }), a = r[0].h, o = r[1];
  return zr(function() {
    a.__ = t, a.v = e, na(a) && o({ h: a });
  }, [i, t, e]), V(function() {
    return na(a) && o({ h: a }), i(function() {
      na(a) && o({ h: a });
    });
  }, [i]), t;
}
function na(i) {
  var e, t, r = i.v, a = i.__;
  try {
    var o = r();
    return !((e = a) === (t = o) && (e !== 0 || 1 / e == 1 / t) || e != e && t != t);
  } catch {
    return !0;
  }
}
var he = { useState: B, useId: Kc, useReducer: Ps, useEffect: V, useLayoutEffect: zr, useInsertionEffect: Sd, useTransition: Cd, useDeferredValue: xd, useSyncExternalStore: Ad, startTransition: Rs, useRef: K, useImperativeHandle: Uc, useMemo: at, useCallback: Es, useContext: fo, useDebugValue: Gc, version: "17.0.2", Children: Jc, render: ld, hydrate: cd, unmountComponentAtNode: bd, createPortal: rd, createElement: R, createContext: ui, createFactory: gd, cloneElement: _d, createRef: Bc, Fragment: F, isValidElement: Ji, isElement: zd, isFragment: md, findDOMNode: vd, Component: Ye, PureComponent: Ba, memo: qc, forwardRef: go, flushSync: kd, unstable_batchedUpdates: yd, StrictMode: wd, Suspense: Ci, SuspenseList: Fr, lazy: Qc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hd };
const Td = (...i) => {
  console != null && console.warn && (Gt(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), console.warn(...i));
}, vn = {}, Na = (...i) => {
  Gt(i[0]) && vn[i[0]] || (Gt(i[0]) && (vn[i[0]] = /* @__PURE__ */ new Date()), Td(...i));
}, Ds = (i, e) => () => {
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
}, yn = (i, e, t) => {
  i.loadNamespaces(e, Ds(i, t));
}, kn = (i, e, t, r) => {
  Gt(t) && (t = [t]), t.forEach((a) => {
    i.options.ns.indexOf(a) < 0 && i.options.ns.push(a);
  }), i.loadLanguages(e, Ds(i, r));
}, Pd = (i, e, t = {}) => !e.languages || !e.languages.length ? (Na("i18n.languages were undefined or empty", e.languages), !0) : e.hasLoadedNamespace(i, {
  lng: t.lng,
  precheck: (r, a) => {
    var o;
    if (((o = t.bindI18n) == null ? void 0 : o.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !a(r.isLanguageChangingTo, i))
      return !1;
  }
}), Gt = (i) => typeof i == "string", Ed = (i) => typeof i == "object" && i !== null, Ld = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Md = {
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
}, Bd = (i) => Md[i], Nd = (i) => i.replace(Ld, Bd);
let Oa = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Nd
};
const Od = (i = {}) => {
  Oa = {
    ...Oa,
    ...i
  };
}, Id = () => Oa;
let js;
const Rd = (i) => {
  js = i;
}, hr = () => js, Dd = {
  type: "3rdParty",
  init(i) {
    Od(i.options.react), Rd(i);
  }
}, jd = ui();
class Fd {
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
const Vd = (i, e) => {
  const t = K();
  return V(() => {
    t.current = e ? t.current : i;
  }, [i, e]), t.current;
}, Fs = (i, e, t, r) => i.getFixedT(e, t, r), $d = (i, e, t, r) => Es(Fs(i, e, t, r), [i, e, t, r]), J = (i, e = {}) => {
  var k, w, C, S;
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: a
  } = fo(jd) || {}, o = t || r || hr();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new Fd()), !o) {
    Na("You will need to pass in an i18next instance by using initReactI18next");
    const z = (T, A) => Gt(A) ? A : Ed(A) && Gt(A.defaultValue) ? A.defaultValue : Array.isArray(T) ? T[T.length - 1] : T, x = [z, {}, !1];
    return x.t = z, x.i18n = {}, x.ready = !1, x;
  }
  (k = o.options.react) != null && k.wait && Na("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const n = {
    ...Id(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: s,
    keyPrefix: l
  } = n;
  let c = i || a || ((w = o.options) == null ? void 0 : w.defaultNS);
  c = Gt(c) ? [c] : c || ["translation"], (S = (C = o.reportNamespaces).addUsedNamespaces) == null || S.call(C, c);
  const d = (o.isInitialized || o.initializedStoreOnce) && c.every((z) => Pd(z, o, n)), u = $d(o, e.lng || null, n.nsMode === "fallback" ? c : c[0], l), f = () => u, h = () => Fs(o, e.lng || null, n.nsMode === "fallback" ? c : c[0], l), [_, m] = B(f);
  let y = c.join();
  e.lng && (y = `${e.lng}${y}`);
  const v = Vd(y), g = K(!0);
  V(() => {
    const {
      bindI18n: z,
      bindI18nStore: x
    } = n;
    g.current = !0, !d && !s && (e.lng ? kn(o, e.lng, c, () => {
      g.current && m(h);
    }) : yn(o, c, () => {
      g.current && m(h);
    })), d && v && v !== y && g.current && m(h);
    const T = () => {
      g.current && m(h);
    };
    return z && (o == null || o.on(z, T)), x && (o == null || o.store.on(x, T)), () => {
      g.current = !1, o && (z == null || z.split(" ").forEach((A) => o.off(A, T))), x && o && x.split(" ").forEach((A) => o.store.off(A, T));
    };
  }, [o, y]), V(() => {
    g.current && d && m(f);
  }, [o, l, d]);
  const b = [_, o, d];
  if (b.t = _, b.i18n = o, b.ready = d, d || !d && !s)
    return b;
  throw new Promise((z) => {
    e.lng ? kn(o, e.lng, c, () => z()) : yn(o, c, () => z());
  });
};
var Hd = Symbol.for("preact-signals");
function Xi() {
  if (Et > 1)
    Et--;
  else {
    for (var i, e = !1; Kr !== void 0; ) {
      var t = Kr;
      for (Kr = void 0, Ia++; t !== void 0; ) {
        var r = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && $s(t))
          try {
            t.c();
          } catch (a) {
            e || (i = a, e = !0);
          }
        t = r;
      }
    }
    if (Ia = 0, Et--, e)
      throw i;
  }
}
function Ud(i) {
  if (Et > 0)
    return i();
  Et++;
  try {
    return i();
  } finally {
    Xi();
  }
}
var te = void 0, Kr = void 0, Et = 0, Ia = 0, Ei = 0;
function Vs(i) {
  if (te !== void 0) {
    var e = i.n;
    if (e === void 0 || e.t !== te)
      return e = { i: 0, S: i, p: te.s, n: void 0, t: te, e: void 0, x: void 0, r: e }, te.s !== void 0 && (te.s.n = e), te.s = e, i.n = e, 32 & te.f && i.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = te.s, e.n = void 0, te.s.n = e, te.s = e), e;
  }
}
function _e(i) {
  this.v = i, this.i = 0, this.n = void 0, this.t = void 0;
}
_e.prototype.brand = Hd;
_e.prototype.h = function() {
  return !0;
};
_e.prototype.S = function(i) {
  this.t !== i && i.e === void 0 && (i.x = this.t, this.t !== void 0 && (this.t.e = i), this.t = i);
};
_e.prototype.U = function(i) {
  if (this.t !== void 0) {
    var e = i.e, t = i.x;
    e !== void 0 && (e.x = t, i.e = void 0), t !== void 0 && (t.e = e, i.x = void 0), i === this.t && (this.t = t);
  }
};
_e.prototype.subscribe = function(i) {
  var e = this;
  return bo(function() {
    var t = e.value, r = te;
    te = void 0;
    try {
      i(t);
    } finally {
      te = r;
    }
  });
};
_e.prototype.valueOf = function() {
  return this.value;
};
_e.prototype.toString = function() {
  return this.value + "";
};
_e.prototype.toJSON = function() {
  return this.value;
};
_e.prototype.peek = function() {
  var i = te;
  te = void 0;
  try {
    return this.value;
  } finally {
    te = i;
  }
};
Object.defineProperty(_e.prototype, "value", { get: function() {
  var i = Vs(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Ia > 100)
      throw new Error("Cycle detected");
    this.v = i, this.i++, Ei++, Et++;
    try {
      for (var e = this.t; e !== void 0; e = e.x)
        e.t.N();
    } finally {
      Xi();
    }
  }
} });
function Se(i) {
  return new _e(i);
}
function $s(i) {
  for (var e = i.s; e !== void 0; e = e.n)
    if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
      return !0;
  return !1;
}
function Hs(i) {
  for (var e = i.s; e !== void 0; e = e.n) {
    var t = e.S.n;
    if (t !== void 0 && (e.r = t), e.S.n = e, e.i = -1, e.n === void 0) {
      i.s = e;
      break;
    }
  }
}
function Us(i) {
  for (var e = i.s, t = void 0; e !== void 0; ) {
    var r = e.p;
    e.i === -1 ? (e.S.U(e), r !== void 0 && (r.n = e.n), e.n !== void 0 && (e.n.p = r)) : t = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = r;
  }
  i.s = t;
}
function Ar(i) {
  _e.call(this, void 0), this.x = i, this.s = void 0, this.g = Ei - 1, this.f = 4;
}
(Ar.prototype = new _e()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ei))
    return !0;
  if (this.g = Ei, this.f |= 1, this.i > 0 && !$s(this))
    return this.f &= -2, !0;
  var i = te;
  try {
    Hs(this), te = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return te = i, Us(this), this.f &= -2, !0;
};
Ar.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.S(e);
  }
  _e.prototype.S.call(this, i);
};
Ar.prototype.U = function(i) {
  if (this.t !== void 0 && (_e.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.U(e);
  }
};
Ar.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i = this.t; i !== void 0; i = i.x)
      i.t.N();
  }
};
Object.defineProperty(Ar.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var i = Vs(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function Gd(i) {
  return new Ar(i);
}
function Gs(i) {
  var e = i.u;
  if (i.u = void 0, typeof e == "function") {
    Et++;
    var t = te;
    te = void 0;
    try {
      e();
    } catch (r) {
      throw i.f &= -2, i.f |= 8, _o(i), r;
    } finally {
      te = t, Xi();
    }
  }
}
function _o(i) {
  for (var e = i.s; e !== void 0; e = e.n)
    e.S.U(e);
  i.x = void 0, i.s = void 0, Gs(i);
}
function Kd(i) {
  if (te !== this)
    throw new Error("Out-of-order effect");
  Us(this), te = i, this.f &= -2, 8 & this.f && _o(this), Xi();
}
function pi(i) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
pi.prototype.c = function() {
  var i = this.S();
  try {
    if (8 & this.f || this.x === void 0)
      return;
    var e = this.x();
    typeof e == "function" && (this.u = e);
  } finally {
    i();
  }
};
pi.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Gs(this), Hs(this), Et++;
  var i = te;
  return te = this, Kd.bind(this, i);
};
pi.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Kr, Kr = this);
};
pi.prototype.d = function() {
  this.f |= 8, 1 & this.f || _o(this);
};
function bo(i) {
  var e = new pi(i);
  try {
    e.c();
  } catch (t) {
    throw e.d(), t;
  }
  return e.d.bind(e);
}
var sa;
function Tr(i, e) {
  U[i] = e.bind(null, U[i] || function() {
  });
}
function Li(i) {
  sa && sa(), sa = i && i.S();
}
function Ks(i) {
  var e = this, t = i.data, r = Yd(t);
  r.value = t;
  var a = at(function() {
    for (var o = e.__v; o = o.__; )
      if (o.__c) {
        o.__c.__$f |= 4;
        break;
      }
    return e.__$u.c = function() {
      var n, s = e.__$u.S(), l = a.value;
      s(), bs(l) || ((n = e.base) == null ? void 0 : n.nodeType) !== 3 ? (e.__$f |= 1, e.setState({})) : e.base.data = l;
    }, Gd(function() {
      var n = r.value.value;
      return n === 0 ? 0 : n === !0 ? "" : n || "";
    });
  }, []);
  return a.value;
}
Ks.displayName = "_st";
Object.defineProperties(_e.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: Ks }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
Tr("__b", function(i, e) {
  if (typeof e.type == "string") {
    var t, r = e.props;
    for (var a in r)
      if (a !== "children") {
        var o = r[a];
        o instanceof _e && (t || (e.__np = t = {}), t[a] = o, r[a] = o.peek());
      }
  }
  i(e);
});
Tr("__r", function(i, e) {
  Li();
  var t, r = e.__c;
  r && (r.__$f &= -2, (t = r.__$u) === void 0 && (r.__$u = t = function(a) {
    var o;
    return bo(function() {
      o = this;
    }), o.c = function() {
      r.__$f |= 1, r.setState({});
    }, o;
  }())), Li(t), i(e);
});
Tr("__e", function(i, e, t, r) {
  Li(), i(e, t, r);
});
Tr("diffed", function(i, e) {
  Li();
  var t;
  if (typeof e.type == "string" && (t = e.__e)) {
    var r = e.__np, a = e.props;
    if (r) {
      var o = t.U;
      if (o)
        for (var n in o) {
          var s = o[n];
          s !== void 0 && !(n in r) && (s.d(), o[n] = void 0);
        }
      else
        t.U = o = {};
      for (var l in r) {
        var c = o[l], d = r[l];
        c === void 0 ? (c = Wd(t, l, d, a), o[l] = c) : c.o(d, a);
      }
    }
  }
  i(e);
});
function Wd(i, e, t, r) {
  var a = e in i && i.ownerSVGElement === void 0, o = Se(t);
  return { o: function(n, s) {
    o.value = n, r = s;
  }, d: bo(function() {
    var n = o.value.value;
    r[e] !== n && (r[e] = n, a ? i[e] = n : n ? i.setAttribute(e, n) : i.removeAttribute(e));
  }) };
}
Tr("unmount", function(i, e) {
  if (typeof e.type == "string") {
    var t = e.__e;
    if (t) {
      var r = t.U;
      if (r) {
        t.U = void 0;
        for (var a in r) {
          var o = r[a];
          o && o.d();
        }
      }
    }
  } else {
    var n = e.__c;
    if (n) {
      var s = n.__$u;
      s && (n.__$u = void 0, s.d());
    }
  }
  i(e);
});
Tr("__h", function(i, e, t, r) {
  (r < 3 || r === 9) && (e.__$f |= 2), i(e, t, r);
});
Ye.prototype.shouldComponentUpdate = function(i, e) {
  var t = this.__$u;
  if (!(t && t.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
    return !0;
  for (var r in e)
    return !0;
  for (var a in i)
    if (a !== "__source" && i[a] !== this.props[a])
      return !0;
  for (var o in this.props)
    if (!(o in i))
      return !0;
  return !1;
};
function Yd(i) {
  return at(function() {
    return Se(i);
  }, []);
}
const Ra = Se(!1), W = Se(null), nr = Se([]), Ue = Se(!1), sr = Se([]), We = Se(!1), Qi = Se(null), ye = Se(null), Mi = Se(!1), ea = Se(!0), ei = Se(!1), qd = () => {
  Ud(() => {
    W.value = null, nr.value = [], Ue.value = !1, sr.value = [], We.value = !1, Qi.value = null, ye.value = null, Mi.value = !1, ea.value = !0, ei.value = !1;
  });
}, vo = "bm_currentBike", Zd = "v2", Jd = "https://cdn.bikematrix.io", wn = {
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
  // Product Result Config
  sku: "",
  productCollections: [],
  logLevel: "none",
  // Virtual Workshop
  virtualWorkshop: !0,
  // Internal shop link
  internalLink: ""
}, Te = function(i) {
  return new URL(i, Jd).toString();
};
function Ws(i) {
  var e, t, r = "";
  if (typeof i == "string" || typeof i == "number")
    r += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var a = i.length;
      for (e = 0; e < a; e++)
        i[e] && (t = Ws(i[e])) && (r && (r += " "), r += t);
    } else
      for (t in i)
        i[t] && (r && (r += " "), r += t);
  return r;
}
function Xd() {
  for (var i, e, t = 0, r = "", a = arguments.length; t < a; t++)
    (i = arguments[t]) && (e = Ws(i)) && (r && (r += " "), r += e);
  return r;
}
const yo = "-";
function Qd(i) {
  const e = tu(i), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = i;
  function a(n) {
    const s = n.split(yo);
    return s[0] === "" && s.length !== 1 && s.shift(), Ys(s, e) || eu(n);
  }
  function o(n, s) {
    const l = t[n] || [];
    return s && r[n] ? [...l, ...r[n]] : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  };
}
function Ys(i, e) {
  var n;
  if (i.length === 0)
    return e.classGroupId;
  const t = i[0], r = e.nextPart.get(t), a = r ? Ys(i.slice(1), r) : void 0;
  if (a)
    return a;
  if (e.validators.length === 0)
    return;
  const o = i.join(yo);
  return (n = e.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : n.classGroupId;
}
const xn = /^\[(.+)\]$/;
function eu(i) {
  if (xn.test(i)) {
    const e = xn.exec(i)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function tu(i) {
  const {
    theme: e,
    prefix: t
  } = i, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return iu(Object.entries(i.classGroups), t).forEach(([o, n]) => {
    Da(n, r, o, e);
  }), r;
}
function Da(i, e, t, r) {
  i.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? e : Cn(e, a);
      o.classGroupId = t;
      return;
    }
    if (typeof a == "function") {
      if (ru(a)) {
        Da(a(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: a,
        classGroupId: t
      });
      return;
    }
    Object.entries(a).forEach(([o, n]) => {
      Da(n, Cn(e, o), t, r);
    });
  });
}
function Cn(i, e) {
  let t = i;
  return e.split(yo).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}
function ru(i) {
  return i.isThemeGetter;
}
function iu(i, e) {
  return e ? i.map(([t, r]) => {
    const a = r.map((o) => typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([n, s]) => [e + n, s])) : o);
    return [t, a];
  }) : i;
}
function au(i) {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function a(o, n) {
    t.set(o, n), e++, e > i && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get(o) {
      let n = t.get(o);
      if (n !== void 0)
        return n;
      if ((n = r.get(o)) !== void 0)
        return a(o, n), n;
    },
    set(o, n) {
      t.has(o) ? t.set(o, n) : a(o, n);
    }
  };
}
const qs = "!";
function ou(i) {
  const e = i.separator, t = e.length === 1, r = e[0], a = e.length;
  return function(n) {
    const s = [];
    let l = 0, c = 0, d;
    for (let m = 0; m < n.length; m++) {
      let y = n[m];
      if (l === 0) {
        if (y === r && (t || n.slice(m, m + a) === e)) {
          s.push(n.slice(c, m)), c = m + a;
          continue;
        }
        if (y === "/") {
          d = m;
          continue;
        }
      }
      y === "[" ? l++ : y === "]" && l--;
    }
    const u = s.length === 0 ? n : n.substring(c), f = u.startsWith(qs), h = f ? u.substring(1) : u, _ = d && d > c ? d - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: _
    };
  };
}
function nu(i) {
  if (i.length <= 1)
    return i;
  const e = [];
  let t = [];
  return i.forEach((r) => {
    r[0] === "[" ? (e.push(...t.sort(), r), t = []) : t.push(r);
  }), e.push(...t.sort()), e;
}
function su(i) {
  return {
    cache: au(i.cacheSize),
    splitModifiers: ou(i),
    ...Qd(i)
  };
}
const lu = /\s+/;
function cu(i, e) {
  const {
    splitModifiers: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = e, o = /* @__PURE__ */ new Set();
  return i.trim().split(lu).map((n) => {
    const {
      modifiers: s,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: d
    } = t(n);
    let u = r(d ? c.substring(0, d) : c), f = !!d;
    if (!u) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: n
        };
      if (u = r(c), !u)
        return {
          isTailwindClass: !1,
          originalClassName: n
        };
      f = !1;
    }
    const h = nu(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? h + qs : h,
      classGroupId: u,
      originalClassName: n,
      hasPostfixModifier: f
    };
  }).reverse().filter((n) => {
    if (!n.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: l,
      hasPostfixModifier: c
    } = n, d = s + l;
    return o.has(d) ? !1 : (o.add(d), a(l, c).forEach((u) => o.add(s + u)), !0);
  }).reverse().map((n) => n.originalClassName).join(" ");
}
function du() {
  let i = 0, e, t, r = "";
  for (; i < arguments.length; )
    (e = arguments[i++]) && (t = Zs(e)) && (r && (r += " "), r += t);
  return r;
}
function Zs(i) {
  if (typeof i == "string")
    return i;
  let e, t = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (e = Zs(i[r])) && (t && (t += " "), t += e);
  return t;
}
function uu(i, ...e) {
  let t, r, a, o = n;
  function n(l) {
    const c = e.reduce((d, u) => u(d), i());
    return t = su(c), r = t.cache.get, a = t.cache.set, o = s, s(l);
  }
  function s(l) {
    const c = r(l);
    if (c)
      return c;
    const d = cu(l, t);
    return a(l, d), d;
  }
  return function() {
    return o(du.apply(null, arguments));
  };
}
function ie(i) {
  const e = (t) => t[i] || [];
  return e.isThemeGetter = !0, e;
}
const Js = /^\[(?:([a-z-]+):)?(.+)\]$/i, pu = /^\d+\/\d+$/, fu = /* @__PURE__ */ new Set(["px", "full", "screen"]), hu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, mu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, _u = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ct(i) {
  return Ht(i) || fu.has(i) || pu.test(i);
}
function xt(i) {
  return Pr(i, "length", zu);
}
function Ht(i) {
  return !!i && !Number.isNaN(Number(i));
}
function mi(i) {
  return Pr(i, "number", Ht);
}
function Lr(i) {
  return !!i && Number.isInteger(Number(i));
}
function vu(i) {
  return i.endsWith("%") && Ht(i.slice(0, -1));
}
function G(i) {
  return Js.test(i);
}
function Ct(i) {
  return hu.test(i);
}
const yu = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function ku(i) {
  return Pr(i, yu, Xs);
}
function wu(i) {
  return Pr(i, "position", Xs);
}
const xu = /* @__PURE__ */ new Set(["image", "url"]);
function Cu(i) {
  return Pr(i, xu, Tu);
}
function Su(i) {
  return Pr(i, "", Au);
}
function Mr() {
  return !0;
}
function Pr(i, e, t) {
  const r = Js.exec(i);
  return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : t(r[2]) : !1;
}
function zu(i) {
  return gu.test(i) && !mu.test(i);
}
function Xs() {
  return !1;
}
function Au(i) {
  return _u.test(i);
}
function Tu(i) {
  return bu.test(i);
}
function Pu() {
  const i = ie("colors"), e = ie("spacing"), t = ie("blur"), r = ie("brightness"), a = ie("borderColor"), o = ie("borderRadius"), n = ie("borderSpacing"), s = ie("borderWidth"), l = ie("contrast"), c = ie("grayscale"), d = ie("hueRotate"), u = ie("invert"), f = ie("gap"), h = ie("gradientColorStops"), _ = ie("gradientColorStopPositions"), m = ie("inset"), y = ie("margin"), v = ie("opacity"), g = ie("padding"), b = ie("saturate"), k = ie("scale"), w = ie("sepia"), C = ie("skew"), S = ie("space"), z = ie("translate"), x = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", G, e], E = () => [G, e], M = () => ["", ct, xt], O = () => ["auto", Ht, G], j = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], N = () => ["solid", "dashed", "dotted", "double", "none"], D = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", G], $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [Ht, mi], H = () => [Ht, G];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Mr],
      spacing: [ct, xt],
      blur: ["none", "", Ct, G],
      brightness: Q(),
      borderColor: [i],
      borderRadius: ["none", "", "full", Ct, G],
      borderSpacing: E(),
      borderWidth: M(),
      contrast: Q(),
      grayscale: L(),
      hueRotate: H(),
      invert: L(),
      gap: E(),
      gradientColorStops: [i],
      gradientColorStopPositions: [vu, xt],
      inset: A(),
      margin: A(),
      opacity: Q(),
      padding: E(),
      saturate: Q(),
      scale: Q(),
      sepia: L(),
      skew: H(),
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
        aspect: ["auto", "square", "video", G]
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
        columns: [Ct]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $()
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
        object: [...j(), G]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: x()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": x()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": x()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", Lr, G]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: A()
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
        flex: ["1", "auto", "initial", "none", G]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Lr, G]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Mr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Lr, G]
        }, G]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Mr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Lr, G]
        }, G]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        "auto-cols": ["auto", "min", "max", "fr", G]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", G]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...P()]
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
        content: ["normal", ...P(), "baseline"]
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
        "place-content": [...P(), "baseline"]
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
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [S]
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
        "space-y": [S]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [G, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [G, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ct]
        }, Ct]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [G, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [G, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [G, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [G, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ct, xt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", mi]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ht, mi]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ct, G]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", G]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", G]
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
        "placeholder-opacity": [v]
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
        "text-opacity": [v]
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
        decoration: [...N(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ct, xt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ct, G]
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
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
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
        content: ["none", G]
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
        "bg-opacity": [v]
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
        bg: [...j(), wu]
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
        bg: ["auto", "cover", "contain", ku]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Cu]
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
        from: [_]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [_]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...N(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
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
        "divide-y": [s]
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
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: N()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...N()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ct, G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ct, xt]
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
        ring: M()
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
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ct, xt]
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
        shadow: ["", "inner", "none", Ct, Su]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Mr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": D()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": D()
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
        "drop-shadow": ["", "none", Ct, G]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
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
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
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
        "border-spacing": [n]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [n]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [n]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", G]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: H()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", G]
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
        scale: [k]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [k]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [k]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Lr, G]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [z]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
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
        "will-change": ["auto", "scroll", "contents", "transform", G]
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
        stroke: [ct, xt, mi]
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
const Eu = /* @__PURE__ */ uu(Pu);
function Y(...i) {
  return Eu(Xd(i));
}
const Lu = {
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
    updateCustomBikeName: "workshop/updateCustomBikeName"
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
    updateCustomBikeName: "UpdateCustomBikeName"
  }
};
class ze {
  constructor(e, t, r, a) {
    this._apiUrl = a ? window.location.origin + "/apps/proxy/api/" : e, this._apiKey = t ?? "", this._apiToken = r ?? "", this._apiType = a ? "shopify" : "bikematrix";
  }
  getEndpoint(e) {
    return Lu[this._apiType][e];
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
    const t = this.getEndpoint("bikeModels"), r = await this.makeRequest(t, {
      params: {
        bikeBrandId: e
      }
    });
    return r.success ? {
      data: r.data,
      success: r.success
    } : {
      success: r.success,
      error: "error_generic GetBikeModels",
      logError: r.error
    };
  }
  async getBikeFrameSeries(e) {
    if (!e)
      return {
        error: "error_generic",
        success: !1
      };
    const t = this.getEndpoint("framesSeries"), r = await this.makeRequest(t, {
      params: {
        bikeModelId: e
      }
    });
    return r.success ? {
      data: r.data,
      success: r.success
    } : {
      success: r.success,
      error: "error_generic GetBikeFrameSeries",
      logError: r.error
    };
  }
  async getBikeSpecs(e) {
    if (!e)
      return {
        success: !1,
        error: "error_generic GetBikeSpecs"
      };
    const t = this.getEndpoint("bikeSpecs"), r = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return r.success ? {
      data: r.data,
      success: r.success
    } : {
      success: r.success,
      error: "error_generic GetBikeSpecs",
      logError: r.error
    };
  }
  async getYears(e) {
    if (!e)
      return {
        error: "error_generic GetBikeYears",
        success: !1
      };
    const t = this.getEndpoint("bikeSpecYears"), r = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return r.success ? {
      data: r.data,
      success: r.success
    } : {
      error: "error_generic GetBikeYears",
      success: !1,
      logError: r.success
    };
  }
  async getFrameSizes(e, t, r) {
    if (!e || !t)
      return {
        success: !1,
        error: "error_generic GetFrameSizes"
      };
    const a = this.getEndpoint("bikeSpecSizes"), o = await this.makeRequest(a, {
      params: {
        bikeModelSpecId: e,
        bikeSpec: t,
        year: r
      }
    });
    return o.success ? {
      data: o.data,
      success: o.success
    } : {
      success: o.success,
      error: "error_generic GetFrameSizes",
      logError: o.error
    };
  }
  async getBikes(e, t, r) {
    if (e && (t || r)) {
      const a = this.getEndpoint("bikeSpecs"), o = await this.makeRequest(a, {
        params: {
          bikeModelSpecId: e,
          bikeSpec: t,
          year: r
        }
      });
      return o.success ? {
        data: o.data,
        success: o.success
      } : {
        success: o.success,
        error: "error_generic GetBikes",
        logError: o.error
      };
    } else
      return {
        success: !1,
        error: "error_generic GetBikes"
      };
  }
  async getBrandProductCategories(e) {
    if (e) {
      const t = this.getEndpoint("bikeBrandProductCategories"), r = await this.makeRequest(t, {
        params: {
          bikeBrandId: e
        }
      });
      return r.success ? {
        data: r.data,
        success: !0
      } : (console.error(r.error), {
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
  async checkSkuCompatibility(e, t, r) {
    if (e && t) {
      const a = this.getEndpoint("checkSku") + `/${e}/${t}/${r}`, o = await this.makeRequest(a);
      return o.success ? {
        success: o.success,
        data: o.data
      } : {
        success: o.success,
        error: "error_generic CheckSkuCompatibility",
        logError: o.error
      };
    } else
      return {
        success: !1,
        error: "error_generic CheckSkuCompatibility"
      };
  }
  async checkSkusCompatibility(e, t, r) {
    if (e && t) {
      const a = this.getEndpoint("checkSkus") + `/${e}/${t}/${r}`, o = await this.makeRequest(a);
      return o.success ? {
        data: o.data,
        success: o.success,
        logError: o.error
      } : {
        success: o.success,
        error: "error_generic CheckSkusCompatibility",
        logError: o.error
      };
    } else
      return {
        success: !1,
        error: "error_generic CheckSkusCompatibility"
      };
  }
  async checkSkusCompatibilityWithResults(e, t, r, a = {}) {
    if (e && t) {
      const o = this.getEndpoint("checkSkusWithResults") + `/${e}/${r}`, n = await this.makeRequest(o, {
        body: JSON.stringify(t),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        ...a
      });
      return n.success ? {
        data: n.data,
        success: n.success
      } : {
        success: n.success,
        error: "error_compatiblelist",
        logError: n.error
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
      return {
        success: !1,
        error: "error_generic getBikeBom"
      };
    const t = this.getEndpoint("bikeBom"), r = await this.makeRequest(t, {
      params: {
        bikeKey: e
      }
    });
    return r.success ? {
      data: r.data,
      success: r.success
    } : {
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
    return r.success ? {
      data: r.data,
      success: r.success
    } : {
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
    const r = this.getEndpoint("findProducts"), a = await this.makeRequest(r, {
      params: {
        search: e,
        productCategoryId: t,
        recordCount: 20
      }
    });
    return a.success ? {
      data: a.data,
      success: a.success
    } : {
      success: a.success,
      error: "error_find_products",
      logError: a.error
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
  async addComponent(e, t, r, a) {
    if (!e || !t || !r || !a)
      return {
        success: !1,
        error: "error_generic addComponent"
      };
    const o = this.getEndpoint("addComponent"), n = await this.makeRequest(o, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        productCategoryId: t,
        productId: r,
        bikeFieldName: a
      }
    });
    return n.success ? {
      data: n.data,
      success: n.success
    } : {
      success: n.success,
      error: "error_add_component",
      logError: n.error
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
    const a = this.getEndpoint("removeComponent"), o = await this.makeRequest(a, {
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
    return o.success ? {
      data: o.data,
      success: o.success
    } : {
      success: o.success,
      error: "error_remove_component",
      logError: o.error
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
    const a = this.getEndpoint("revertComponent"), o = await this.makeRequest(a, {
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
    return o.success ? {
      data: o.data,
      success: o.success
    } : {
      success: o.success,
      error: "error_revert_component",
      logError: o.error
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
    const r = this.getEndpoint("saveCustomBike"), a = await this.makeRequest(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        email: t
      }
    });
    return a.success ? {
      data: a.data,
      success: a.success
    } : {
      success: a.success,
      error: "error_save_custom_bike",
      logError: a.error
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
    const r = this.getEndpoint("updateCustomBike"), a = await this.makeRequest(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        productCategoryId: t
      }
    });
    return a.success ? {
      data: a.data,
      success: a.success
    } : {
      success: a.success,
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
    const r = this.getEndpoint("updateCustomBikeName"), a = await this.makeRequest(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        name: t
      }
    });
    return a.success ? {
      data: a.data,
      success: a.success
    } : {
      success: a.success,
      error: "error_update_custom_bike_name",
      logError: a.error
    };
  }
  async makeRequest(e, t = {}) {
    const r = new URL(e, this._apiUrl), a = {
      "Cache-Control": "no-cache",
      ...this._apiKey && {
        "bm-subscription-key": this._apiKey
      },
      ...this._apiToken && {
        "bm-app-token": this._apiToken
      }
    };
    typeof t.params == "object" && (Object.keys(t.params).forEach((n) => {
      t.params[n] && r.searchParams.set(n, t.params[n]);
    }), delete t.params);
    let o;
    try {
      const n = {
        ...a,
        // Default headers
        ...t.headers || {}
        // Calling function headers
      }, s = {
        ...t,
        // Spread options first (with options.headers)
        headers: n
        // Explicitly set headers after spreading options (as mergedHeaders will override options.headers)
      };
      t.signal && (s.signal = t.signal);
      const l = await fetch(r == null ? void 0 : r.href, s), c = await l.json().catch(() => {
        throw new Error("Request failed: " + (l.statusText || "Status" + l.status));
      });
      c.status === 400 || c.statusCode === 404 ? o = {
        success: !1,
        data: c
      } : o = {
        success: !0,
        data: c
      };
    } catch (n) {
      o = {
        success: !1,
        error: n.message
      };
    }
    return o;
  }
}
async function Qs(i) {
  var f;
  const {
    categories: e,
    collections: t,
    apiUrl: r,
    apiKey: a,
    apiToken: o,
    isShopify: n,
    logLevel: s
  } = window.BikeMatrix.getConfig(), l = JSON.parse(sessionStorage.getItem("bm_categories") || "null"), c = JSON.parse(localStorage.getItem(vo) || "null"), d = new ze(r, a, o, n);
  let u = [];
  if (s === "verbose" && console.log("useCompatibleCollections sessionCollections", l), !l || !(l != null && l.collections) || !(l != null && l.collections.length) || (l == null ? void 0 : l.key) !== (c == null ? void 0 : c.key)) {
    s === "verbose" && console.log("useCompatibleCollections fetching new collections");
    const h = await d.getBrandProductCategories(i);
    if (s === "verbose" && console.log("useCompatibleCollections bikeBrandProductCategories", h), !h.success)
      return console.log(h), s === "verbose" && console.error(h.error), u = {
        error: h.error
      }, u;
    if (s === "verbose" && (console.log("useCompatibleCollections categories", e), console.log("useCompatibleCollections collections", t)), ((f = h.data) == null ? void 0 : f.length) > 0) {
      let _ = e.filter((m) => {
        var y;
        return !!m.collection && ((y = h == null ? void 0 : h.data) == null ? void 0 : y.some((v) => v.product_Category.toLowerCase() === m.title.toLowerCase()));
      });
      s === "verbose" && console.log("useCompatibleCollections availableCategories", _), u = _.map((m) => t.filter((v) => m.collection.split(",").map((g) => g.trim().toLowerCase()).includes(v.title.toLowerCase())).map((v) => ({
        title: v.title,
        text_id: m.text_id,
        handle: v.handle,
        url: v.url
      }))).flat(), s === "verbose" && console.log("useCompatibleCollections compatibleCollections", u), u = u == null ? void 0 : u.filter((m, y, v) => y === v.findIndex((g) => g.title === m.title && g.text_id === m.text_id && g.handle === m.handle && g.url === m.url));
    }
    sessionStorage.setItem("bm_categories", JSON.stringify({
      key: c == null ? void 0 : c.key,
      collections: u
    })), s === "verbose" && console.log("useCompatibleCollections fetched collections", u);
  } else
    s === "verbose" && console.log("useCompatibleCollections using session collections"), u = l.collections;
  return u;
}
const el = class Vr {
  constructor() {
    this.initialized = !1, this.currentBike = null, this.activeSubscription = null, this.components = [], this.config = wn;
  }
  // Initialize with optional config
  async initialize(e) {
    this.components = [], this.initialized && this.cleanup(), e && (this.config = {
      ...this.config,
      ...e
    }), this.initializeConfig(), this.service = new ze(this.config.apiUrl, this.config.apiKey, this.config.apiToken, this.config.isShopify), this.initializeActiveSubscription(), localStorage.bm_currentBike && (this.currentBike = JSON.parse(localStorage.bm_currentBike)), this.setupEventListeners(), this.registerComponents(), this.initialized = !0, Ra.value = !0;
    const t = new Event("BM:Initialized");
    document.dispatchEvent(t), this.config.logLevel === "verbose" && (console.log("BikeMatrix WebComponent Version: 1.2.8"), console.log("BikeMatrixCore initialized"));
  }
  // Singleton pattern to ensure a single global instance
  static getInstance() {
    return Vr.instance || (Vr.instance = new Vr()), Vr.instance;
  }
  registerComponents() {
    const e = ["bikematrix-bikeselector", "bikematrix-productresult", "bikematrix-collectionresult", "bikematrix-compatibilitylabel", "bikematrix-compatiblelist", "bikematrix-bikeselectorbanner", "bikematrix-variantselector"];
    this.components = [], e.forEach((t) => {
      const r = document.getElementsByTagName(t);
      Array.from(r).forEach((a) => {
        this.components.push(a);
      });
    }), this.config.logLevel === "verbose" && console.log(`Registered ${this.components.length} components`);
  }
  resetComponents() {
    this.components.forEach((e) => {
      var t;
      try {
        const r = e.cloneNode(!1);
        e.querySelectorAll("template").forEach((o) => {
          r.appendChild(o.cloneNode(!0));
        }), (t = e.parentNode) == null || t.replaceChild(r, e);
      } catch {
        console.error("Error resetting component", e);
      }
    });
  }
  isInitialized() {
    return this.initialized;
  }
  // Update config without full reinitialization
  updateConfig(e) {
    this.config = {
      ...this.config,
      ...e
    }, this.reload(!1);
  }
  // Cleanup without destroying instance
  cleanup() {
    this.removeEventListeners(), qd();
  }
  // Full destroy for complete cleanup
  async destroy() {
    this.cleanup(), this.service = null, this.currentBike = null, this.activeSubscription = null, this.config = {
      ...wn
    }, this.initialized = !1, Ra.value = !1, this.resetComponents();
  }
  updateCompatibleList(e = !0) {
    this.config.logLevel === "verbose" && console.log("updateCompatibleList showCompatibleList: ", e), this.config.showCompatibleList = e, e && this.RefreshCompatibleSkus();
  }
  refresh() {
    this.ChangeBike();
  }
  reset() {
    this.destroy(), this.initialize();
  }
  reload(e = !0) {
    e && this.initializeConfig(), this.refresh(), this.registerComponents(), this.resetComponents();
  }
  initializeConfig() {
    const e = document.querySelectorAll('script[type="application/json"][data-bikematrix-config]'), t = JSON.parse(sessionStorage.getItem("bm_diagnostics"));
    e.forEach((r) => {
      if (r != null && r.textContent)
        try {
          this.config = {
            ...this.config,
            ...JSON.parse(r.textContent)
          };
        } catch {
          console.error("Invalid BikeMatrix configuration"), console.log("configScript ", r.textContent);
        }
    }), t != null && t.includes("verbose") && (this.config.logLevel = "verbose"), t != null && t.includes("virtualWorkshop") && (this.config.virtualWorkshop = !0), t != null && t.includes("subscribtion") && (this.activeSubscription = !0), t != null && t.includes("all") && (this.config.logLevel = "verbose", this.config.virtualWorkshop = !0, this.activeSubscription = !0), this.config.logLevel === "verbose" && console.log("initializeConfig ", JSON.stringify(this.config, null, 2));
  }
  initializeActiveSubscription() {
    const e = sessionStorage.getItem("bm_activeSubscription");
    if (this.config.logLevel === "verbose" && (console.log("Not Shopify: ", !this.config.isShopify), console.log("Session Active Subscription: ", e), console.log("Design Mode: ", this.config.designMode)), !this.config.isShopify) {
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
    this.RefreshCompatibleSkus().then(() => {
      document.dispatchEvent(new Event("RefreshCompatibility", {
        bubbles: !0,
        composed: !0
      }));
    });
  }
  async handleBikeChanging(e) {
    this.config.logLevel === "verbose" && console.log("Listener BikeChanging (pre) ..."), this.ChangeBike();
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
    const t = document.querySelector("bikematrix-productresult[data-sku]"), r = document.querySelector("bikematrix-variantselector[data-sku]");
    t && t.setAttribute("data-sku", e), r && r.setAttribute("data-sku", e), this.config.sku = e;
  }
  // ===== Legacy methods ===== //
  ResetSelectedBikeIndicator() {
    var e, t;
    this.currentBike === null ? (e = window.bm_selectBikeButton) == null || e.classList.remove("show-selected") : (t = window.bm_selectBikeButton) == null || t.classList.add("show-selected");
  }
  ChangeBike() {
    this.config.logLevel === "verbose" && console.log("ChangeBike() Method Called"), !(Ue.value === !0 || We.value === !0) && (Ue.value = !0, We.value = !0, nr.value = [], sr.value = [], this.config.logLevel === "verbose" && console.log("ChangeBike updateBikeSignal..."), this.updateBikeSignal().then(() => {
      this.config.logLevel === "verbose" && console.log("Bike Signal Updated: ", JSON.stringify(W.value, null, 2)), this.ResetSelectedBikeIndicator(), this.RefreshCompatibleSkus().then(() => {
        document.dispatchEvent(new Event("RefreshCompatibility", {
          bubbles: !0,
          composed: !0
        })), document.dispatchEvent(new Event("BikeChanged", {
          bubbles: !0,
          composed: !0
        }));
      });
    }));
  }
  async RefreshCompatibleSkus() {
    var t, r;
    const e = `${(t = W.value) == null ? void 0 : t.key}:${this.config.currentCollectionHandle}:${Zd}`;
    switch (this.config.pageType) {
      case "collection":
        const a = !!W.value && !W.value.compatibleCollections.error && ((r = W.value.compatibleCollections) == null ? void 0 : r.find((o) => o.handle === this.config.currentCollectionHandle));
        this.config.logLevel === "verbose" && console.log("Refresh Compatible SKUs. hasCompatibleCollection: ", a), this.config.logLevel === "verbose" && console.log("showCompatibleList: ", this.config.showCompatibleList), a && (await this.RefreshCollectionPageSkus(e), this.config.showCompatibleList && await this.RefreshCollectionListSkus(e)), Ue.value = !1, We.value = !1;
        break;
      case "search":
      case "index":
        Ue.value = !1, (this.config.pageType === "index" && this.config.showHomePageCollection || this.config.pageType === "search" && this.config.showSearchPageCollection) && await this.RefreshCollectionPageSkus(e), We.value = !1;
        break;
      default:
        Ue.value = !1, We.value = !1;
        break;
    }
  }
  async RefreshCollectionPageSkus(e) {
    var n, s;
    let t = document.getElementsByTagName("bikematrix-collectionresult"), a = Array.from(t).map((l) => {
      const c = this.config.skuField === "barcode" ? l.getAttribute("data-product-barcodes") : this.config.skuField === "metafield" ? l.getAttribute("data-product-metafields") : l.getAttribute("data-product-skus") || "";
      return c == null ? void 0 : c.split(",").filter((d) => !!d);
    }).flat();
    this.config.logLevel === "verbose" && console.log("Refresh Collection Page SKUs. SKUs: ", JSON.stringify(a), null, 2);
    var o = ((n = hr()) == null ? void 0 : n.language) || "en-GB";
    if (a && a.length > 0) {
      const l = await this.service.checkSkusCompatibilityWithResults((s = W.value) == null ? void 0 : s.key, a, o);
      l.success ? sr.value = l.data : (Mi.value = !0, this.config.logLevel === "verbose" && console.log("Compatible List Error: ", l.logError));
    } else
      sr.value = [];
  }
  async RefreshCollectionListSkus(e) {
    var a, o;
    var t = JSON.parse(sessionStorage.getItem(e));
    if (t)
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from Session: ", JSON.stringify(t), null, 2), nr.value = t;
    else {
      const n = Object.values(this.config.products || {}).map((d) => d.skus).flat();
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(n), null, 2);
      var r = ((a = hr()) == null ? void 0 : a.language) || "en-GB";
      const s = new AbortController(), l = s.signal, c = () => s.abort();
      window.addEventListener("beforeunload", c);
      try {
        if (!((o = W.value) != null && o.key))
          throw new Error("BikeSignal key is undefined");
        const d = await this.service.checkSkusCompatibilityWithResults(W.value.key, n, r, {
          signal: l
        });
        if (this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(d)), l.aborted) {
          this.config.logLevel === "verbose" && console.log("function RefreshCompatibleSkus() operation aborted");
          return;
        }
        d.success ? (sessionStorage.setItem(e, JSON.stringify(d.data)), nr.value = d.data) : (Mi.value = !0, this.config.logLevel === "verbose" && console.log("Compatible List Error: ", d.logError));
      } catch (d) {
        d.name === "AbortError" ? console.log("function RefreshCompatibleSkus() fetch aborted") : console.error("function RefreshCompatibleSkus() fetch error", d);
      } finally {
        window.removeEventListener("beforeunload", c);
      }
    }
  }
  updateActiveSubscription(e) {
    this.config.logLevel === "verbose" && console.log("updateActiveSubscription data: ", e);
    const t = !!(e != null && e.activeSubscription);
    sessionStorage.setItem("bm_activeSubscription", JSON.stringify(t)), this.activeSubscription = t;
  }
  async updateBikeSignal() {
    const e = localStorage.getItem(vo) || "null", t = JSON.parse(e);
    if (this.currentBike = t, t == null) {
      W.value = null;
      return;
    }
    const r = await Qs(t == null ? void 0 : t.brandId);
    !Array.isArray(r) && r.error ? (t.compatibleCollections = [], W.value = t) : (t.compatibleCollections = r, W.value = t), this.config.logLevel === "verbose" && console.log("Bike Changed: ", JSON.stringify(W.value, null, 2));
  }
};
el.instance = null;
let Mu = el;
const ti = (i) => /* @__PURE__ */ R("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M1.53553 8.60658L5.07107 5.07104M5.07107 5.07104L8.6066 1.53551M5.07107 5.07104L8.6066 8.60658M5.07107 5.07104L1.53553 1.53551", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
var Bu = 0;
function p(i, e, t, r, a, o) {
  var n, s, l = {};
  for (s in e)
    s == "ref" ? n = e[s] : l[s] = e[s];
  var c = { type: i, props: l, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Bu, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof i == "function" && (n = i.defaultProps))
    for (s in n)
      l[s] === void 0 && (l[s] = n[s]);
  return U.vnode && U.vnode(c), c;
}
function gr() {
  document.dispatchEvent(new Event("BmToggleModal"));
}
function Nu({
  children: i
}) {
  return V(() => {
    var o;
    const e = document.body, t = document.getElementById("bm_selectBikeButton"), r = (o = document.getElementsByTagName("bikematrix-bikeselector")) == null ? void 0 : o[0], a = (n) => {
      n.preventDefault(), e.classList.toggle("bm-modal-active"), r.classList.toggle("active"), ei.value = !ei.value;
    };
    return document.addEventListener("BmToggleModal", a), t == null || t.addEventListener("click", a), () => {
      document.removeEventListener("BmToggleModal", a), t == null || t.removeEventListener("click", a);
    };
  }, []), p(F, {
    children: [p("div", {
      onClick: () => {
        gr();
      },
      class: Y("overlay", "fixed cursor-pointer inset-0 z-[2147483645] bg-black/40 transition-all duration-500 sm:duration-200")
    }), p("div", {
      className: Y("modal", "fixed pointer-events-none inset-0 mx-auto justify-end z-[2147483646] flex flex-col items-center outline-none transition-all duration-500 sm:duration-200 ease-in-out", "sm:justify-center"),
      children: p("div", {
        className: "flex sm:px-2 pointer-events-auto max-sm:max-h-[96%] sm:max-h-[90%] max-sm:h-[89vh] max-w-lg sm:max-w-[640px] flex-col items-center max-sm:flex-1 w-full bg-white rounded-t-3xl sm:rounded-xl shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.06)]",
        children: [p("div", {
          className: "sm:hidden mx-auto mt-4 h-[6px] w-[100px] rounded-full bg-gray-400/50",
          onClick: gr
        }), p("div", {
          className: "sm:hidden h-[10px]"
        }), p("div", {
          className: "relative flex flex-col w-full sm:h-full max-sm:flex-none max-sm:grow",
          children: p("div", {
            class: "modal-content max-sm:absolute sm:h-full max-sm:inset-0 overflow-x-hidden overflow-y-auto  px-8 sm:px-6",
            children: i
          })
        })]
      })
    })]
  });
}
const qe = (i) => /* @__PURE__ */ R("svg", { width: 7, height: 12, viewBox: "0 0 7 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M1 11L6 6L1 1", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Ou = (i) => /* @__PURE__ */ R("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("circle", { cx: 15.5, cy: 15.5, r: 15.5, fill: "#030712" }), /* @__PURE__ */ R("path", { d: "M10.1974 17.1317L13.9955 20.4461L20.8639 10.8909", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Iu = (i) => /* @__PURE__ */ R("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("g", { clipPath: "url(#clip0_64_2)" }, /* @__PURE__ */ R("path", { d: "M30.5 15.5C30.5 23.7843 23.7843 30.5 15.5 30.5C7.21573 30.5 0.5 23.7843 0.5 15.5C0.5 7.21573 7.21573 0.5 15.5 0.5C23.7843 0.5 30.5 7.21573 30.5 15.5Z", fill: "white", stroke: "#D1D5DB" })), /* @__PURE__ */ R("path", { d: "M23.983 11.132C23.9699 10.9806 23.8699 10.8506 23.727 10.7988C23.5837 10.7466 23.4233 10.7822 23.3155 10.8894L21.1098 13.0866L18.6647 12.3153L17.8905 9.87937L20.0961 7.68201C20.2041 7.57458 20.2393 7.41475 20.1873 7.27224C20.1348 7.12945 20.0046 7.02999 19.8524 7.01688C18.5129 6.9019 17.2004 7.37836 16.2514 8.32387C14.9518 9.61873 14.6076 11.5096 15.217 13.1213C15.1504 13.1773 15.0847 13.2365 15.0199 13.3004L7.65736 20.2216C7.65476 20.2241 7.6522 20.2268 7.64939 20.2293C6.78354 21.092 6.78354 22.4955 7.64939 23.3583C8.51539 24.2209 9.91396 24.2104 10.7797 23.3477C10.7834 23.3443 10.7868 23.3408 10.7902 23.3369L17.677 15.945C17.7398 15.8822 17.798 15.8165 17.853 15.749C19.4713 16.3573 21.3705 16.0152 22.6713 14.7195C23.62 13.7739 24.0986 12.4663 23.983 11.132ZM9.67019 22.4264C9.35113 22.7442 8.83439 22.744 8.51536 22.4264C8.19644 22.1089 8.19644 21.5937 8.51536 21.2761C8.83439 20.9585 9.35113 20.9585 9.67019 21.2761C9.98911 21.5937 9.98911 22.1089 9.67019 22.4264Z", fill: "black" }), /* @__PURE__ */ R("defs", null, /* @__PURE__ */ R("clipPath", { id: "clip0_64_2" }, /* @__PURE__ */ R("rect", { width: 31, height: 31, fill: "white" })))), Ru = (i) => /* @__PURE__ */ R("svg", { width: 31, height: 31, viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M2 24.0437V22.6518C4.30404 21.9559 5.82929 20.347 6.17596 18.244C6.45967 16.523 5.87584 14.7802 4.66788 13.505L5.50401 12.1672C6.3441 12.2632 7.12499 12.2938 7.83019 12.2273C8.91308 12.1253 10.0603 11.7686 10.8965 10.814C11.7162 9.87828 11.9364 8.70751 11.9455 7.65019C11.9509 7.01984 11.882 6.33439 11.7615 5.60532L13.1089 4.93163C14.6862 6.27858 16.5967 7.00972 18.5085 6.50659C20.496 5.98355 21.7104 4.35171 22.2287 2.32023L23.4959 2.17943C23.7105 2.84427 23.9686 3.45839 24.2803 4.0055C24.8609 5.02453 25.7009 5.93317 26.8959 6.37534C28.1054 6.8229 29.35 6.6716 30.4872 6.21488C31.2478 5.9094 32.0092 5.4502 32.771 4.87155L33.84 5.40607C33.3102 7.17682 33.6407 8.97473 34.9205 10.3525C36.2854 11.8219 38.3837 12.4206 40.6053 12.1884L41.4091 13.3137C40.1484 14.904 39.5422 16.7943 40.0082 18.6621C40.4975 20.623 42.0098 21.9631 44 22.6091V23.6937C42.0295 24.646 40.407 25.9295 39.9934 27.9032C39.7449 29.089 40.0083 30.2272 40.4663 31.2395C40.7549 31.8775 41.1444 32.5183 41.6038 33.1622L41.0881 34.0648C39.1096 33.5569 37.1545 33.7409 35.7252 35.1442C34.3293 36.5148 34.0136 38.5186 34.2755 40.5318L32.7931 41.4583C31.191 40.0523 29.3504 39.2822 27.3831 40.0414C26.2841 40.4655 25.451 41.2846 24.816 42.1501C24.4114 42.7016 24.0463 43.3278 23.7127 44H22.6585C22.1786 42.2318 21.2165 40.6691 19.4091 40.0247C17.4936 39.3418 15.3888 40.0023 13.3765 41.2022L11.9877 40.5078C12.4255 38.6858 12.158 36.865 10.7918 35.5311C9.4171 34.1889 7.44044 33.8741 5.42929 34.2133L4.6584 32.9799C6.03869 31.6871 6.93069 30.0087 6.40539 28.071C6.07607 26.8563 5.24467 25.9088 4.25062 25.2068C3.60737 24.7526 2.85005 24.3664 2 24.0437Z", stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ R("circle", { cx: 23, cy: 23, r: 12, stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ R("path", { d: "M23 39.75C32.2508 39.75 39.75 32.2508 39.75 23C39.75 13.7492 32.2508 6.25 23 6.25C13.7492 6.25 6.25 13.7492 6.25 23C6.25 32.2508 13.7492 39.75 23 39.75Z", stroke: "black", strokeWidth: 3.5 })), Du = `.shared-icon{background-color:#fba157;padding:5px 10px;border-radius:8px;font-size:12px;display:flex;justify-content:center;align-items:center;color:#fff}
`, Sn = ({
  text: i
}) => p(F, {
  children: [p("style", {
    type: "text/css",
    children: Du
  }), p("div", {
    className: "shared-icon",
    children: p("p", {
      className: "text",
      children: i || "Shared with you"
    })
  })]
});
function Ze({
  spanner: i,
  selected: e,
  settings: t,
  simple: r,
  bike: a,
  compact: o,
  readOnly: n,
  onClick: s,
  shared: l,
  custom: c,
  noSymbol: d,
  ...u
}) {
  var C;
  const f = (C = a.images) != null && C.length ? a.images : [Te("bike.png")], h = K(null), [_, m] = B(0), y = K(null);
  V(() => {
    const S = h == null ? void 0 : h.current;
    if (S) {
      var z = new IntersectionObserver(function(x) {
        var T = x.reduce(function(A, E) {
          return E.intersectionRatio > A.intersectionRatio ? E : A;
        });
        T.intersectionRatio > 0 && m(Number(T.target.getAttribute("data-slide")));
      }, {
        root: S,
        threshold: 0.8
      });
      return S.querySelectorAll("&>div").forEach((x) => {
        z.observe(x);
      }), () => {
        z.disconnect();
      };
    }
  }, [h]);
  function v(S) {
    if (!h.current)
      return;
    const z = h.current.querySelectorAll("&>div")[S];
    h.current.scrollLeft = z.clientWidth * S;
  }
  function g() {
    _ != 0 && v(_ - 1);
  }
  function b() {
    _ != f.length - 1 && v(_ + 1);
  }
  const k = (f == null ? void 0 : f.length) && _ !== f.length - 1, w = (f == null ? void 0 : f.length) && _ !== 0;
  return p("div", {
    class: Y("rounded-xl select-none border  py-4 relative", e ? "border-gray-950" : "border-gray-300"),
    ...u,
    onClick: (S) => {
      if (y.current && !y.current.contains(S.target))
        s(S);
      else {
        S.preventDefault();
        return;
      }
    },
    children: [!r && p("p", {
      class: "text-gray-950 px-4 text-base font-normal font-nunito leading-tight ",
      children: o ? p(F, {
        children: n ? `${a.bike_Brand} ${a.year} ${a.spec}` : a.name ? a.name : `${a.brand} ${a.year} ${a.bikeSpec} ${a.variant ? a.variant : ""}`
      }) : p(F, {
        children: n ? a.bike_Name : a.name
      })
    }), p("div", {
      class: "relative mt-2",
      children: [p("div", {
        ref: h,
        class: Y("flex scroll-smooth snap-mandatory  no-scrollbar h-32 snap-x space-x-2 relative overflow-x-auto", "px-4"),
        "data-active-slide": _,
        children: [!n && f.length && f.map((S, z) => p("div", {
          "data-slide": z,
          class: "w-full h-full snap-center flex items-center flex-none",
          children: p("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: S,
            alt: S
          })
        }, z)), n && p("div", {
          class: "w-full h-full snap-center flex items-center flex-none",
          children: p("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: `https://imagestore.bikematrix.io/${a.bike_Reference}/400-${a.bike_Thumbnail}`,
            alt: a.bike_Reference
          })
        })]
      }), p(F, {
        children: [p("div", {
          onClick: g,
          class: Y("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center left-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", w ? "" : "hidden"),
          children: p(qe, {
            class: "h-3 text-gray-500 -rotate-180"
          })
        }), p("div", {
          onClick: b,
          class: Y("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center right-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", k ? "" : "hidden"),
          children: p(qe, {
            class: "h-3 text-gray-500 translate-x-px"
          })
        })]
      })]
    }), (f == null ? void 0 : f.length) > 1 && p("div", {
      class: "space-x-2 flex items-center justify-center",
      children: f.map((S, z) => p("div", {
        class: Y("rounded-xl w-2 h-2 transition-all duration-300", z == _ ? " bg-gray-950 scale-125" : " bg-gray-200")
      }, z))
    }), (l || a.isShared) && p("div", {
      className: "absolute left-4 bottom-4",
      children: p(Sn, {})
    }), (c || a.isCustom) && p("div", {
      className: "absolute left-4 bottom-4",
      children: p(Sn, {
        text: "Custom"
      })
    }), p("div", {
      className: "spanner_wrapper absolute right-4 bottom-14 h-fit w-fit",
      ref: y,
      children: i && e && p(Iu, {
        class: "cursor-pointer",
        onClick: (S) => {
          S.preventDefault(), !(a != null && a.isCustom) && !(a != null && a.isShared) ? X("/workshop") : a != null && a.isShared ? X("/read-only") : X("/bom");
        }
      })
    }), e && !t ? p(Ou, {
      class: "absolute right-4 bottom-4 cursor-pointer"
    }) : t ? p(Ru, {
      class: "absolute right-4 bottom-4 cursor-pointer",
      onClick: () => X("/settings")
    }) : n ? p("span", {}) : d ? p("span", {}) : p(F, {
      children: p("span", {
        class: "border absolute right-4 bottom-4 rounded-full h-8 w-8 border-gray-300 bg-white/75"
      })
    })]
  });
}
function zn(i, e) {
  const t = () => {
    try {
      const o = window.localStorage.getItem(i);
      return o ? JSON.parse(o) : e;
    } catch (o) {
      return console.error(o), e;
    }
  }, [r, a] = B(t);
  return V(() => {
    try {
      if (!r && i === "bm_currentBike")
        window.localStorage.setItem(i, null);
      else if (!r)
        window.localStorage.removeItem(i);
      else {
        const o = JSON.stringify(r);
        window.localStorage.setItem(i, o);
      }
    } catch (o) {
      console.error(o);
    }
  }, [i, r]), [r, a, t];
}
function ju(i, e) {
  const t = () => {
    try {
      const o = window.sessionStorage.getItem(i);
      return o ? JSON.parse(o) : e;
    } catch (o) {
      return console.error(o), e;
    }
  }, [r, a] = B(t);
  return V(() => {
    try {
      if (!r)
        window.sessionStorage.removeItem(i);
      else {
        const o = JSON.stringify(r);
        window.sessionStorage.setItem(i, o);
      }
    } catch (o) {
      console.error(o);
    }
  }, [i, r]), [r, a, t];
}
const la = {
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
}, tl = ui(void 0), Fu = ({
  children: i
}) => {
  var D;
  const e = window.BikeMatrix.getConfig(), [t, r] = zn(vo, null), [a, o] = zn("bm_lounge", []), n = new ze(e.apiUrl, e.apiKey, e.apiToken, e.isShopify), [s, l] = B(la), c = K({}), [d, u] = B([]), [f, h] = B(!1), [_, m] = B(null);
  B(null), V(() => {
    (async () => {
      if (t != null && t.brandId) {
        const L = await Qs(t == null ? void 0 : t.brandId);
        m(L);
      }
    })();
  }, [t == null ? void 0 : t.brandId]);
  function y(P) {
    l((L) => {
      var $;
      return {
        ...L,
        [P]: {
          options: [],
          value: ($ = la[P]) == null ? void 0 : $.value
        }
      };
    });
  }
  function v(P, L) {
    l(($) => ($[P].value = L, {
      ...$
    }));
  }
  const g = () => {
    l((P) => {
      var L;
      return {
        ...la,
        brand: {
          options: ((L = P.brand) == null ? void 0 : L.options) || [],
          error: P.brand.error || null
        }
      };
    });
  }, b = (P) => {
    r({
      ...P
    }), o([...(a || []).filter((L) => !!L.key && L.key !== P.key), P]);
  }, k = (P) => {
    (t == null ? void 0 : t.key) === P && r(null), o([...(a || []).filter((L) => !!L.key && L.key !== P)]);
  }, w = () => {
    e.logLevel === "verbose" && console.log("Dispatch BikeChanging (pre-change)..."), document.dispatchEvent(new Event("BikeChanging", {
      bubbles: !0,
      composed: !0
    }));
  }, C = () => {
    setTimeout(() => {
      g(), X("/");
    }, 500);
  }, S = async () => {
    const P = await n.getBikeBrands();
    P.success ? (sessionStorage.setItem("bm_brands", JSON.stringify(P.data)), l((L) => (L.brand.options = P.data.map(($) => ({
      label: $.bike_Brand,
      value: $.bike_Brand_ID
    })), {
      ...L
    }))) : P.success || (l((L) => (L.brand.error = P.error, {
      ...L
    })), e.logLevel === "verbose" && console.error(P.logError));
  }, z = async () => {
    const P = await n.getBikeModels(s.brand.value);
    P.success ? l((L) => (L.model.options = P.data.map(($) => ({
      label: $.model_Family,
      value: $.model_Family_ID
    })), {
      ...L
    })) : P.success || (l((L) => (L.model.error = P.error, {
      ...L
    })), e.logLevel === "verbose" && console.error(P.logError));
  }, x = async () => {
    const P = await n.getBikeFrameSeries(s.model.value);
    P.success ? l((L) => {
      var Q, H;
      const $ = [];
      return L.frameSeries.options = P.data.reduce((q, be) => {
        const xe = {
          label: be.model_Spec,
          value: be.model_Spec_ID
        };
        return $.includes(xe.value) || ($.push(xe.value), q.push(xe)), q;
      }, []), ((Q = L.frameSeries.options) == null ? void 0 : Q.length) === 1 && (L.frameSeries.value = (H = L.frameSeries.options[0]) == null ? void 0 : H.value), {
        ...L
      };
    }) : P.success || (l((L) => (L.frameSeries.error = P.error, {
      ...L
    })), e.logLevel === "verbose" && console.error(P.logError));
  }, T = async () => {
    const P = await n.getBikeSpecs(s.frameSeries.value);
    if (P.success) {
      const L = [], $ = [], Q = [], H = [];
      P.data.forEach((q) => {
        var Yo, qo;
        const be = q.year + "-" + q.spec.replace(/[^0-9a-zA-Z]/g, "") + (q.bike_Variant ? "-" + q.bike_Variant.replace(/[^0-9a-zA-Z]/g, "") : ""), xe = {
          label: q.spec,
          value: q.spec
        };
        if (L.includes(xe.value) || (L.push(xe.value), Q.push(xe)), !$.includes(be)) {
          $.push(be);
          const Zo = {
            _key: be,
            key: q.bike_Key,
            name: q.bike_Name,
            variant: q.bike_Variant,
            brand: q.bike_Brand,
            brandId: q.bike_Brand_ID,
            model: q.model_Family,
            modelId: q.model_Family_ID,
            frameSeries: q.model_Spec,
            frameSeriesId: q.model_Spec_ID,
            bikeSpec: q.spec,
            year: q.year,
            images: [q.bike_Thumbnail, ...((Yo = q == null ? void 0 : q.bike_Images) == null ? void 0 : Yo.split(",")) || []].filter((wt) => !!wt).map((wt) => `https://imagestore.bikematrix.io/${q.bike_Reference}/400-${wt}`)
          }, hi = P.data.reduce((wt, lt) => (lt.year == q.year && lt.spec === q.spec && lt.model_Spec === q.model_Spec && lt.bike_Variant === q.bike_Variant && wt.push({
            key: lt.bike_Key,
            name: lt.bike_Name,
            variant: lt.bike_Variant,
            sizeId: lt.bike_Size_ID,
            size: lt.bike_Size
          }), wt), []);
          (qo = hi == null ? void 0 : hi.filter((wt) => !!wt.sizeId)) != null && qo.length && (Zo.sizes = hi), H.push(Zo);
        }
        c.current[s.frameSeries.value] = Array.from(/* @__PURE__ */ new Set([...c.current[s.frameSeries.value] || [], q.year]));
      }), l((q) => (q.bikeSpec.options = Q, {
        ...q
      })), u(H);
    } else
      P.success || (l((L) => (L.bikeSpec.error = P.error, {
        ...L
      })), e.logLevel === "verbose" && console.error(P.logError));
  }, A = async () => {
    l((P) => {
      const L = c.current[P.frameSeries.value] || [];
      return P.year.options = L.map(($) => ({
        label: $,
        value: $
      })), {
        ...P
      };
    });
  }, E = async () => {
    l((P) => {
      var L, $, Q;
      if (P.frameSize.options = (L = s == null ? void 0 : s.value) != null && L.sizes ? s.value.sizes.filter((H) => !!H.size).map((H) => ({
        label: H.size,
        value: H.size
      })) : [], (($ = P.frameSize.options) == null ? void 0 : $.length) === 1) {
        const H = (Q = P.frameSize.options[0]) == null ? void 0 : Q.value;
        P.frameSize.value = H, P.value.frameSize = H;
      }
      return {
        ...P
      };
    });
  };
  V(() => (document.addEventListener("BmToggleModal", C), () => {
    document.removeEventListener("BmToggleModal", C);
  }), []);
  const [M, O] = ju("bm_diagnostics", []), j = () => {
    const L = new URLSearchParams(window.location.search).get("diagnostics");
    JSON.parse(sessionStorage.getItem("bm_diagnostics")).includes(L) || O([...M, L]), L === null && O([]);
  };
  V(() => {
    w(), j();
  }, [t]), V(() => {
    sessionStorage.getItem("bm_brands") ? l((P) => (P.brand.options = JSON.parse(sessionStorage.getItem("bm_brands")).map((L) => ({
      label: L.bike_Brand,
      value: L.bike_Brand_ID
    })), {
      ...P
    })) : ei.value && S();
  }, [ei.value]), V(() => {
    s.brand.value && (y("model"), y("frameSeries"), z());
  }, [s.brand.value]), V(() => {
    s.model.value && (y("frameSeries"), x());
  }, [s.model.value]), V(() => {
    s.frameSeries.value && (y("bikeSpec"), y("year"), u([]), T().then(() => {
      A();
    }));
  }, [s.frameSeries.value]), V(() => {
    s.value._key && (y("frameSize"), E());
  }, [(D = s.value) == null ? void 0 : D._key]), V(() => {
    s.frameSize.value && l((P) => {
      var L, $;
      return P.value = {
        ...P.value,
        ...(($ = (L = P == null ? void 0 : P.value) == null ? void 0 : L.sizes) == null ? void 0 : $.find((Q) => s.frameSize.value == Q.size)) || {}
      }, delete P.value.sizes, P;
    });
  }, [s.frameSize.value]);
  const N = {
    // Wizard Bike
    bike: s,
    setBike: l,
    setBikeAttr: v,
    resetBike: g,
    // Search Results
    results: d,
    loading: f,
    setLoading: h,
    // Compatible Parts
    compatibleCollections: _,
    // Final Bike
    currentBike: t,
    setCurrentBike: r,
    removeBike: k,
    saveBike: b,
    // Bike Lounge
    lounge: a
  };
  return p(tl.Provider, {
    value: N,
    children: i
  });
}, Be = () => {
  const i = fo(tl);
  if (!i)
    throw new Error("useBikeState must be used within a BikeProvider");
  return i;
};
function kt() {
  const {
    t: i
  } = J(), t = window.BikeMatrix.getConfig(), [r, a] = B(null);
  return t.internalLink && a(t.internalLink), p(F, {
    children: [p("p", {
      class: "text-gray-600 max-w-sm mx-auto mt-4 text-center font-normal text-xs",
      children: i("bikeselector_home_footer_message")
    }), p("a", {
      href: r || "https://bikematrix.io/landed-it",
      target: "_blank",
      class: "text-gray-950 block  underline  mb-4 font-bold mt-4 text-center text-xs",
      children: i("bikematrix_poweredby")
    })]
  });
}
const Vu = (i) => /* @__PURE__ */ R("svg", { width: 17, height: 17, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M16.983 4.13197C16.9699 3.98064 16.8699 3.85064 16.727 3.7988C16.5837 3.74665 16.4233 3.78215 16.3155 3.88937L14.1098 6.08655L11.6647 5.31527L10.8905 2.87937L13.0961 0.682011C13.2041 0.574581 13.2393 0.414746 13.1873 0.272238C13.1348 0.129446 13.0046 0.0299881 12.8524 0.0168782C11.5129 -0.0980992 10.2004 0.378357 9.25142 1.32387C7.95176 2.61873 7.60759 4.50961 8.21705 6.12135C8.15043 6.17726 8.08471 6.2365 8.01987 6.30039L0.65736 13.2216C0.654763 13.2241 0.652203 13.2268 0.649393 13.2293C-0.216464 14.092 -0.216464 15.4955 0.649393 16.3583C1.51539 17.2209 2.91396 17.2104 3.77967 16.3477C3.78341 16.3443 3.78682 16.3408 3.79024 16.3369L10.677 8.94505C10.7398 8.88222 10.798 8.8165 10.853 8.74903C12.4713 9.3573 14.3705 9.01524 15.6713 7.71952C16.62 6.77394 17.0986 5.46628 16.983 4.13197ZM2.67019 15.4264C2.35113 15.7442 1.83439 15.744 1.51536 15.4264C1.19644 15.1089 1.19644 14.5937 1.51536 14.2761C1.83439 13.9585 2.35113 13.9585 2.67019 14.2761C2.98911 14.5937 2.98911 15.1089 2.67019 15.4264Z", fill: "black" })), I = {
  id: null,
  name: null,
  product_category_id: null,
  swap: !1,
  version_id: null,
  unsaved_changes: null,
  translation: null
}, Br = {
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
}, Nr = {
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
}, dt = {
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
}, ca = (i, e) => Object.keys(i).includes(e), mr = (i) => (Object.keys(dt).forEach((e) => {
  Object.keys(i).forEach((t) => {
    `${e}_ID` === t && (dt[e].id = i[t]), `${e}_Name` === t && (dt[e].name = i[t]), `${e}_Product_Category_ID` === t && (dt[e].product_category_id = i[t]), `${e}_Swap` === t && (dt[e].swap = i[t]), `${e}_Version_ID` === t && (dt[e].version_id = i[t]), `${e}_Unsaved_Changes` === t && (dt[e].unsaved_changes = i[t]);
  });
}), Object.keys(Nr).forEach((e) => {
  Object.keys(dt).forEach((t) => {
    ca(Nr[e], t) && (Nr[e][t] = dt[t]);
  });
}), Object.keys(Nr).forEach((e) => {
  ca(Br, e) && (Br[e] = Nr[e]);
}), Object.keys(i).forEach((e) => {
  ca(Br, e) && (Br[e] = i[e]);
}), Br), rl = async (i) => {
  var t;
  return {
    bikeSpec: i.spec,
    brand: i.bike_Brand,
    brandId: i.bike_Brand_ID,
    frameSeries: i.spec,
    frameSeriesId: i.model_Spec_ID,
    frameSize: i.bike_Size,
    images: [`https://imagestore.bikematrix.io/${i.bike_Reference}/400-${i.bike_Thumbnail}`],
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
function $u() {
  const i = window.BikeMatrix.getConfig(), {
    bike: e,
    currentBike: t,
    setCurrentBike: r,
    lounge: a,
    removeBike: o,
    resetBike: n,
    saveBike: s
  } = Be(), {
    t: l
  } = J(), {
    apiUrl: c,
    apiKey: d,
    apiToken: u,
    isShopify: f,
    virtualWorkshop: h
  } = window.BikeMatrix.getConfig();
  V(() => {
    ye.value = null;
  }, []);
  const _ = new ze(c, d, u, f), m = async () => {
    const g = new URLSearchParams(window.location.search).get("bikematrixid"), b = sessionStorage.getItem("bm_passed_id");
    if (!(b && b !== null && g === b) && (!b || g !== b)) {
      const k = a.find((w) => w.key === g);
      k ? (r(k), sessionStorage.setItem("bm_passed_id", g)) : k || (await y(g), sessionStorage.setItem("bm_passed_id", g));
    }
  }, y = async (v) => {
    const g = await _.getBikeBom(v);
    if (!(g != null && g.success)) {
      i.logLevel === "verbose" && console.error(g.logError);
      return;
    }
    const b = mr(g.data);
    e.value = await rl(b), s(e.value), r(e.value);
  };
  return m(), V(() => {
    a.map((v) => {
      v != null && v.isCustom && (ea.value = !1);
    });
  }, [a]), p(F, {
    children: [a != null && a.length ? a == null ? void 0 : a.filter((v) => !!v._key).map((v) => p("div", {
      class: "mb-4 relative",
      children: [p("p", {
        className: "opacity-0 absolute",
        children: v.key
      }), p("div", {
        onClick: () => o(v.key),
        class: "w-7 h-7 z-10 -right-2 -top-2 flex items-center justify-center absolute bg-gray-200 text-gray-800 rounded-full",
        children: p(ti, {
          class: "h-3 w-3"
        })
      }), p(Ze, {
        compact: !0,
        onClick: (g) => {
          g.preventDefault(), r((t == null ? void 0 : t.key) === (v == null ? void 0 : v.key) ? null : {
            ...v
          });
        },
        bike: v,
        selected: (t == null ? void 0 : t.key) === (v == null ? void 0 : v.key),
        spanner: h,
        custom: v == null ? void 0 : v.isCustom
      })]
    }, v.key)) : p("div", {
      class: Y("relative mb-4 z-10 "),
      children: [p("div", {
        class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
        children: [p("span", {
          class: "block rounded-lg h-6 w-1/2 bg-gray-200"
        }), p("img", {
          class: "w-auto mx-auto h-auto max-h-36 opacity-30",
          src: Te("bike.png")
        }), p("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), p("div", {
        class: Y("w-full relative bg-white border -z-10 border-b-0 border-gray-300 rounded-t-xl h-20  mb-4", "after:bottom-0 after:-inset-x-px after:-top-6 after:bg-gradient-to-t after:absolute after:from-white after:to-transparent"),
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
      onClick: (v) => {
        v.preventDefault(), n(), X("/add");
      },
      class: Y("duration-300 transition-colors sticky bottom-[128px] mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", a.length && !(t != null && t.key) ? "bg-gray-950 text-white" : a.length ? "bg-gray-200 text-gray-800" : "bg-gray-950 text-white", !t && "bottom-0", t && h && "bottom-[128px]", t && !h && "bottom-[72px]"),
      children: [l("bikeselector_home_add_btn"), p(ti, {
        class: "h-3 absolute [&>path]:stroke-[2px] right-5 justify-self-end rotate-45"
      })]
    }), !!(a != null && a.length) && !!(t != null && t.key) && h && p("button", {
      onClick: (v) => {
        v.preventDefault(), !(t != null && t.isCustom) && !(t != null && t.isShared) ? X("/workshop") : t != null && t.isCustom && !(t != null && t.isShared) ? X("/bom") : !(t != null && t.isCustom) && (t != null && t.isShared) && X("/read-only");
      },
      class: Y("duration-300 sticky bottom-[72px] transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: [l("virtualworkshop_title"), p(Vu, {
        class: "h-5 absolute right-5 justify-self-end"
      })]
    }), !!(a != null && a.length) && !!(t != null && t.key) && p("button", {
      onClick: (v) => {
        v.preventDefault(), X("/browse");
      },
      class: Y("duration-300 sticky bottom-4 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", a.length ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-800"),
      children: l("bikeselector_home_browse_btn")
    }), p(kt, {})]
  });
}
const Hu = (i) => /* @__PURE__ */ R("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("circle", { cx: 10, cy: 10, r: 10, fill: "#030712" }), /* @__PURE__ */ R("path", { d: "M6.57886 11.0526L9.02922 13.191L13.4604 7.02636", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Je = ({
  messages: i,
  left: e,
  margin: t
}) => {
  const {
    t: r
  } = J(), [a, o] = B(""), [n, s] = B("");
  return V(() => {
    i && i.indexOf(" ") >= 0 && (o(i.split(" ")[0]), s(i.split(" ")[1]));
  }, [i]), p("div", {
    className: `flex h-4 w-auto ${e ? "justify-start" : "justify-center"} ${t ? "mt-1" : ""}`,
    children: i && p("p", {
      className: "message text-xs text-red-500",
      children: r(a || i, {
        endpoint_location: n
      })
    })
  });
};
function Wr({
  type: i,
  title: e,
  placeholder: t,
  options: r = [],
  disabled: a = void 0,
  loading: o = !1,
  infoVisible: n = !1,
  children: s = void 0,
  error: l = null,
  ...c
}) {
  const {
    t: d
  } = J(), u = (h) => {
    switch (h) {
      case "brand":
        return d("bikeselector_addbike_brand_desc");
      case "model":
        return d("bikeselector_addbike_model_desc");
      case "framespec":
        return d("bikeselector_addbike_framespec_desc");
      case "framesize":
        return d("bikeselector_size_framesize_desc");
      default:
        return "";
    }
  }, f = (h, _) => h === "framesize" && _ === "One Size" ? d("bikeselector_size_framesize_one_size") : _;
  return p(F, {
    children: p("div", {
      class: "w-full flex flex-col space-y-2",
      children: [p("label", {
        class: "text-gray-800 font-bold text",
        children: e
      }), s && p("div", {
        class: Y("!my-0 overflow-hidden box-border transition-all duration-300", n ? "max-h-screen" : "h-0"),
        children: [p("p", {
          class: "text-gray-600 my-1 italic text-sm",
          children: u(i)
        }), p("div", {
          class: Y("rounded-xl overflow-hidden my-0 relative py-1 h-32 bg-gray-100 w-full"),
          children: s
        })]
      }), p("div", {
        class: "w-full flex items-center relative",
        children: [p("select", {
          class: Y("rounded-xl peer !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg bg-white placeholder:text-gray-700 text-gray-700", "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400", c.class),
          disabled: a,
          ...c,
          children: [p("option", {
            value: "",
            selected: !c.value,
            disabled: !0,
            children: t
          }), r.map((h) => p("option", {
            value: h.value,
            disabled: h.disabled,
            children: f(i, h.label)
          }))]
        }), o ? p("span", {
          class: "absolute block loader animate-spin right-4 w-5 h-5"
        }) : c.value && typeof a == "boolean" ? p(Hu, {
          class: "right-3 absolute w-5 pointer-events-none"
        }) : p(qe, {
          class: "absolute h-3 text-gray-700 pointer-events-none rotate-90 right-5 peer-disabled:text-gray-400"
        })]
      }), l && p(Je, {
        messages: l,
        left: !0,
        margin: 5
      })]
    })
  });
}
const il = (i) => /* @__PURE__ */ R("svg", { width: 25, height: 25, viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("circle", { cx: 12.5, cy: 12.5, r: 12, fill: "white", stroke: "black" }), /* @__PURE__ */ R("path", { d: "M9 16.0711L12.5355 12.5355M12.5355 12.5355L16.0711 9M12.5355 12.5355L16.0711 16.0711M12.5355 12.5355L9 9", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" })), Uu = `.input_container{display:flex;flex-direction:column}.input_wrapper{width:100%;border-radius:12px;padding:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:space-between}.input_wrapper input{width:100%}
`, al = ({
  value: i,
  setValue: e,
  placeholder: t,
  type: r,
  error: a,
  submitInput: o,
  label: n,
  instructions: s
}) => p(F, {
  children: [p("style", {
    type: "text/css",
    children: Uu
  }), p("div", {
    className: "input_container",
    children: [n && p("label", {
      class: "text-gray-800 font-bold text",
      children: n
    }), s && p("label", {
      class: "text-gray-600 my-1 italic text-sm",
      children: s
    }), p("div", {
      className: "input_wrapper",
      children: [p("input", {
        placeholder: t,
        value: i,
        onChange: (l) => e(l.currentTarget.value),
        type: r,
        onKeyDown: (l) => {
          l.key === "Enter" && o();
        }
      }), p(il, {
        height: 20,
        width: 20,
        onClick: () => e(""),
        className: "cursor-pointer"
      })]
    }), p(Je, {
      messages: a
    })]
  })]
}), Gu = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`;
function bt({
  isLoading: i,
  colour: e
}) {
  return p(F, {
    children: [p("style", {
      type: "text/css",
      children: Gu
    }), p("div", {
      class: "lds-ring",
      id: "bm-loading-spinner",
      style: {
        display: i ? "inline-block" : "none"
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
const ot = ({
  onClick: i,
  primary: e,
  text: t,
  loading: r,
  disabled: a,
  sticky: o,
  children: n,
  active: s = !0,
  noMargin: l = !1
}) => p("button", {
  onClick: (c) => {
    !a && !r && (c.preventDefault(), i());
  },
  class: Y("duration-300 bottom-4 transition-colors rounded-xl p-3 w-full flex justify-center items-center", `${e && s ? "bg-gray-950 text-white" : e && !s ? "bg-gray-200 text-gray-400 " : "bg-gray-200 text-gray-800"} ${o && "sticky"} ${!l && "mt-4"}`),
  style: {
    cursor: a ? "not-allowed" : "pointer",
    opacity: a ? 0.5 : 1
  },
  children: r ? p(bt, {
    isLoading: r,
    colour: e ? "#fff" : "#000"
  }) : p(F, {
    children: [p("span", {
      className: n ? "ml-auto" : "",
      children: t
    }), n]
  })
});
function Ku() {
  const i = window.BikeMatrix.getConfig(), {
    bike: e,
    setBikeAttr: t
  } = Be(), {
    brand: r,
    model: a,
    frameSeries: o
  } = e, {
    t: n
  } = J(), [s, l] = B([]), [c, d] = B(!1), u = new ze(i.apiUrl, i.apiKey, i.apiToken, i.isShopify), [f, h] = B(null), [_, m] = B(""), y = r.value, v = r.value && a.value;
  V(() => {
    const b = i.bikeSelectorBrands ? i.bikeSelectorBrands.split(",").filter((k) => k !== "") : [];
    if (b.length > 0 && r.options.length > 0) {
      let k = [];
      r.options.forEach((w) => {
        b.includes(w.value.toString().trim()) && k.push(w);
      }), l(k);
    } else
      r.options.length > 0 && l(r.options);
  }, [i.bikeSelectorBrands, r.options]);
  const g = async () => {
    d(!0);
    const b = await u.getBikeBom(_);
    if (!(b != null && b.success)) {
      i.logLevel === "verbose" && console.error(b.logError), d(!1), h(b.error);
      return;
    }
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_)) {
      const w = await u.getBikeBom(_), C = mr(w.data);
      ye.value = C, e.value = await rl(C), d(!1), X("/confirm");
    } else
      h("error_get_bike_bom"), d(!1);
  };
  return p(F, {
    children: [p("div", {
      class: "space-y-5 relative w-full flex flex-col",
      children: [p(Wr, {
        type: "brand",
        title: n("bikeselector_addbike_brand_label"),
        placeholder: n("bikeselector_addbike_brand_select"),
        value: r.value,
        options: s,
        onChange: (b) => {
          t("brand", b.target.value);
        },
        loading: !r.options.length && !r.error,
        disabled: !r.options.length || r.error,
        info: !0,
        infoVisible: !r.value,
        error: r.error,
        children: p("img", {
          src: Te("info-brand.svg"),
          class: "w-full h-full"
        })
      }), p(Wr, {
        type: "model",
        title: n("bikeselector_addbike_model_label"),
        placeholder: n("bikeselector_addbike_model_select"),
        value: a.value,
        options: a.options,
        onChange: (b) => {
          t("model", b.target.value);
        },
        loading: y && !a.options.length && !a.error,
        disabled: !y || !a.options.length,
        info: !0,
        infoVisible: y && !a.value,
        error: a.error,
        children: p("img", {
          src: Te("info-model.svg"),
          class: "w-full h-full"
        })
      }), p(Wr, {
        type: "framespec",
        title: n("bikeselector_addbike_framespec_label"),
        placeholder: n("bikeselector_addbike_framespec_select"),
        value: o.value,
        loading: v && !o.options.length && !o.error,
        options: o.options,
        onChange: (b) => {
          t("frameSeries", b.target.value);
        },
        disabled: !v || !o.options.length || o.error,
        info: !0,
        infoVisible: v && !o.value,
        error: o.error,
        children: p("img", {
          src: Te("info-frameseries.svg"),
          class: "w-full h-full"
        })
      }), i.virtualWorkshop && p(F, {
        children: [p("div", {
          className: "flex justify-center items-center gap-2",
          children: [p("div", {
            className: "bg-gray-300 h-[1px] w-full"
          }), p("p", {
            className: " font-semibold text-sm",
            children: n("bikeselector_or")
          }), p("div", {
            className: "bg-gray-300 h-[1px] w-full"
          })]
        }), p(al, {
          value: _,
          setValue: (b) => m(b),
          label: "Bike Matrix ID",
          placeholder: n("virtualworkshop_add_by_id"),
          type: "text",
          instructions: n("virtualworkshop_bm_id_text")
        })]
      })]
    }), p(Je, {
      messages: f
    }), p(ot, {
      noMargin: !0,
      primary: !0,
      text: n("bikeselector_addbike_find_btn"),
      onClick: () => {
        r.value && a.value && o.value ? X("/search") : _ && g();
      },
      active: r.value && a.value && o.value || _,
      loading: c,
      children: p(qe, {
        class: "h-3 ml-auto justify-self-end"
      })
    })]
  });
}
function Wu() {
  var _, m, y, v;
  const {
    bike: i,
    setBike: e,
    setBikeAttr: t,
    results: r,
    loading: a
  } = Be(), {
    year: o,
    bikeSpec: n
  } = i, {
    t: s
  } = J(), [l, c] = [i.value, (g) => e((b) => ({
    ...b,
    value: g
  }))], d = at(() => {
    const g = r == null ? void 0 : r.filter((b) => {
      var w;
      let k = !0;
      return n.value && (k = b.bikeSpec === n.value), k && o.value.length && (k = (w = o.value) == null ? void 0 : w.includes(b.year)), k;
    });
    return g.some((b) => b._key == l._key) || c({}), g;
  }, [r, n.value, o.value]), u = at(() => n.value ? r.filter((b) => n.value == b.bikeSpec).map((b) => b.year) : o.options.map((b) => b.value), [n.value]), f = at(() => {
    var b;
    if (!((b = o.value) != null && b.length))
      return n.options;
    const g = r.filter((k) => {
      var w;
      return (w = o.value) == null ? void 0 : w.includes(k.year);
    }).map((k) => k.bikeSpec);
    return n.options.map((k) => ({
      ...k,
      disabled: !g.includes(k.value)
    }));
  }, [n.options, o.value]), h = (g) => g === 0 ? s("bikeselector_search_no_bikes_found") : g === 1 ? s("bikeselector_search_one_bike_found") : s("bikeselector_search_number_bikes_found", {
    number_found: g
  });
  return p(F, {
    children: [p("div", {
      class: "space-y-3 mb-6 relative w-full flex flex-col",
      children: [(i.bikeSpec.error || i.frameSize.error || i.year.error) && p(Je, {
        messages: i.bikeSpec.error || i.frameSize.error || i.year.error
      }), p(Wr, {
        type: "bikespec",
        title: s("bikeselector_search_bikespec_label"),
        placeholder: s("bikeselector_search_bikespec_select"),
        value: n.value,
        options: [{
          label: s("bikeselector_search_bikespec_select_all"),
          value: ""
        }, ...f],
        onChange: (g) => {
          t("bikeSpec", g.target.value);
        },
        disabled: !((_ = n.options) != null && _.length) || i.bikeSpec.error,
        loading: !((m = n.options) != null && m.length) && !i.bikeSpec.error
      }), p("div", {
        class: "w-full flex flex-col space-y-2",
        children: [p("label", {
          class: "text-gray-800 font-bold text",
          children: s("bikeselector_search_year_label")
        }), p("div", {
          class: Y("flex space-x-2 overflow-x-auto", "-mx-8 w-[calc(100%_+_64px)] px-8 no-scrollbar"),
          children: (y = o.options) != null && y.length ? (v = o.options) == null ? void 0 : v.map((g) => {
            var w;
            const b = n.value && !u.includes(g.value), k = (w = o.value) == null ? void 0 : w.includes(g.value);
            return p("div", {
              onClick: () => {
                b || t("year", k ? o.value.filter((C) => C !== g.value) : [...o.value, g.value]);
              },
              class: Y("rounded-full cursor-pointer items-center flex border  py-2 px-4", k ? "pr-3 bg-gray-950 border-gray-950 text-white" : "border-gray-300 text-gray-700 ", b && "hidden"),
              children: [g.label, k && p(ti, {
                class: "w-3 h-3 ml-2"
              })]
            });
          }) : Array(2).fill(0).map((g, b) => p("div", {
            class: "rounded-full items-center flex border py-2 bg-gray-100 px-4 bg-100 border-gray-300 animate-pulse",
            children: p("span", {
              class: "rounded-lg bg-gray-100 w-9 h-5"
            })
          }, b))
        })]
      }), p("div", {
        class: Y("text-nowrap font-medium w-full flex", "[&>span]:text-gray-500 [&>span]:font-normal"),
        children: [a ? (
          // "Searching..."
          p(F, {
            children: s("bikeselector_search_searching")
          })
        ) : p(F, {
          children: h(d.length)
        }), " ", (r == null ? void 0 : r.length) > 0 && p(F, {
          children: [p("span", {
            children: "("
          }), p("span", {
            class: "whitespace-nowrap overflow-hidden text-ellipsis truncate",
            children: [r[0].brand, " ", r[0].frameSeries]
          }), p("span", {
            children: ")"
          })]
        })]
      }), p("div", {
        class: "grid grid-cols-1 sm:grid-cols-2 gap-4",
        children: d != null && d.length && !a ? d.map((g, b) => p(Ze, {
          "data-key": g._key,
          bike: g,
          selected: g._key === l._key,
          onClick: (k) => {
            k.preventDefault(), c(g);
          },
          compact: !0
        }, g._key)) : Array(a ? 2 : 1).fill(0).map((g, b) => p("div", {
          class: Y("w-full relative rounded-xl h-40 bg-white border border-gray-200 ", a && "animate-pulse"),
          children: [p("span", {
            class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
          }), p("span", {
            class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-200"
          })]
        }, b))
      })]
    }), p("button", {
      onClick: (g) => {
        var b, k;
        if (g.preventDefault(), l._key) {
          const w = (b = this.base.querySelector(`[data-key="${l._key}"] [data-active-slide]`)) == null ? void 0 : b.getAttribute("data-active-slide"), S = [(k = this.base.querySelector(`[data-key="${l._key}"] [data-slide="${w}"] img`)) == null ? void 0 : k.src].filter((z) => !!z);
          S != null && S.length && e((z) => (z.value = {
            ...z.value || {},
            images: S
          }, {
            ...z
          })), X("/size");
        }
      },
      class: Y("duration-300 transition-colors sticky bottom-6 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", l._key ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [p("span", {
        class: "ml-auto",
        children: s("bikeselector_search_confirm_btn")
      }), " ", p(qe, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
function Yu() {
  var o, n;
  const {
    bike: i,
    setBikeAttr: e,
    setBike: t
  } = Be(), {
    frameSize: r
  } = i, {
    t: a
  } = J();
  return V(() => {
    var s;
    (s = r.options) != null && s.length || X("/confirm");
  }, []), p(F, {
    children: [p(Ze, {
      bike: i.value,
      selected: !0,
      compact: !0
    }), p("div", {
      class: " mt-4 mb-6 relative w-full flex flex-col",
      children: p(Wr, {
        type: "framesize",
        instruction: !0,
        title: a("bikeselector_size_framesize_label"),
        placeholder: a("bikeselector_size_framesize_select"),
        value: r.value,
        options: r.options,
        onChange: (s) => {
          e("frameSize", s.target.value), t((l) => {
            var c;
            return l.value.frameSize = ((c = r.options.find((d) => d.value == s.target.value)) == null ? void 0 : c.label) || "", l;
          });
        },
        selected: !0,
        info: !0,
        infoVisible: !0,
        disabled: !((o = r.options) != null && o.length),
        loading: !((n = r.options) != null && n.length),
        children: p("img", {
          src: Te("info-size.svg"),
          class: "w-full h-full"
        })
      })
    }), p("button", {
      onClick: (s) => {
        s.preventDefault(), r.value && X("/confirm");
      },
      class: Y("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", r.value ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [p("span", {
        class: "ml-auto",
        children: a("bikeselector_size_confirm_btn")
      }), " ", p(qe, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
const Qe = Se({
  title: "",
  step: 0,
  back: ""
});
function qu({
  children: i
}) {
  const {
    t: e
  } = J();
  return p(F, {
    children: [p("div", {
      class: "relative flex items-center justify-center w-full h-10 my-5 sm:mt-8",
      children: [!!Qe.value.back && p("div", {
        onClick: () => X(Qe.value.back),
        class: " w-10 h-10 absolute left-0 rounded-xl self-start border-gray-200 border items-center justify-center flex",
        children: p(qe, {
          class: "h-3 text-gray-500 -translate-x-px -rotate-180"
        })
      }), p("h2", {
        class: "text-xl font-bold",
        style: {
          maxWidth: "70%",
          textAlign: "center"
        },
        children: e(Qe.value.title)
      })]
    }), i, typeof Qe.value.step < "u" && p("div", {
      class: "space-x-2 my-6 flex items-center justify-center",
      children: [0, 1, 2, 3].map((t) => p("div", {
        class: Y("rounded-xl h-2 transition-all duration-300", t == Qe.value.step ? "w-6 bg-gray-950" : "w-2 bg-gray-200")
      }, t))
    })]
  });
}
function Zu() {
  const {
    bike: i,
    saveBike: e
  } = Be(), {
    brand: t,
    model: r,
    frameSeries: a,
    frameSize: o,
    year: n,
    bikeSpec: s
  } = i.value, {
    t: l
  } = J(), c = ye.value;
  return V(() => {
    !o && !c ? Qe.value.back = "/search" : c && (Qe.value.back = "/add");
  }, []), p(F, {
    children: [p(Ze, {
      bike: i.value,
      selected: !0,
      compact: !0
    }), p("div", {
      class: " space-y-4 mt-4 mb-6 relative w-full flex flex-col",
      children: [{
        // title: "Brand, Model, Frame Series",
        title: l("bikeselector_confirm_brandmodelframespec_label"),
        value: [t, r, a].join(", "),
        path: "/add"
      }, {
        // title: "Year, Bike Spec",
        title: l("bikeselector_confirm_yearbikespec_label"),
        value: [n, s].join(", "),
        path: "/search"
      }, {
        // title: "Frame Size",
        title: l("bikeselector_confirm_framesize_label"),
        value: o,
        path: "/size"
      }].filter((d) => !!d.value).map((d) => p("div", {
        class: "w-full flex flex-col space-y-2",
        children: [p("label", {
          class: "text-gray-800 font-bold",
          children: d.title
        }), p("div", {
          onClick: () => X(d.path),
          class: "w-full flex items-center relative cursor-pointer",
          children: [p("div", {
            class: Y("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-700"),
            children: d.value
          }), p(qe, {
            class: "absolute h-3 text-gray-700 pointer-events-none right-4 peer-disabled:text-gray-400"
          })]
        })]
      }, d.path))
    }), p("button", {
      onClick: (d) => {
        d.preventDefault(), e(i.value), X("/browse");
      },
      class: Y("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: l("bikeselector_confirm_confirm_btn")
    }), p("p", {
      class: "text-gray-600 -mb-3 mt-2 text-center font-normal text-xs",
      children: l("bikeselector_confirm_notyourride_msg")
    })]
  });
}
function Ju() {
  const {
    currentBike: i,
    compatibleCollections: e
  } = Be(), [t, r] = B(!0), [a, o] = B(), {
    t: n
  } = J(), s = () => {
    if (e && e.length > 0) {
      let l = [];
      e.map((c) => {
        l.some((d) => d.text_id === c.text_id) || l.push(c);
      }), o(l);
    }
  };
  return V(() => {
    s();
  }, [e]), V(() => {
    a && r(!1);
  }, [a]), p(F, {
    children: [p(Ze, {
      bike: i,
      selected: !0
    }), !!(a != null && a.length) && !e.error && p(F, {
      children: [p("p", {
        class: "text-gray-800 mt-4 font-bold",
        children: n("bikeselector_browse_products_label")
      }), p("div", {
        class: "gap-3 mt-2 mb-6 relative w-full flex flex-wrap",
        children: a.map((l) => p("a", {
          href: l.url,
          class: "group flex items-center relative cursor-pointer",
          children: [p("div", {
            class: Y("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-950", "group-disabled:bg-gray-100 group-disabled:border-gray-200 group-disabled:text-gray-400"),
            children: n(l.text_id)
          }), p(qe, {
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
      children: p(bt, {
        isLoading: t,
        colour: "#000"
      })
    }), e && (e == null ? void 0 : e.error) && p(Je, {
      messages: e.error,
      left: !0,
      margin: 20
    }), p("button", {
      onClick: (l) => {
        l.preventDefault(), gr();
      },
      class: Y("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: n("bikeselector_browse_shop_btn")
    }), p("button", {
      onClick: (l) => {
        l.preventDefault(), X("/");
      },
      class: Y("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: n("bikeselector_browse_back_btn")
    }), p(kt, {})]
  });
}
const Er = () => p("div", {
  class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
  children: [p("span", {
    class: "block rounded-lg h-6 w-1/2 bg-gray-200"
  }), p("img", {
    class: "w-auto mx-auto h-auto max-h-36 opacity-30",
    src: Te("bike.png")
  }), p("span", {
    class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
  })]
});
function Xu() {
  const {
    t: i
  } = J(), t = window.BikeMatrix.getConfig(), {
    currentBike: r,
    setCurrentBike: a,
    compatibleCollections: o
  } = Be(), n = new ze(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), [s, l] = B(!1), [c, d] = B(null), {
    saveBike: u
  } = Be(), f = async () => {
    l(!0);
    const h = await n.addCustomBike(r.key);
    if (h.success) {
      const _ = await n.getBikeBom(h == null ? void 0 : h.data);
      if (!_.success) {
        d(_.error), l(!1), t.logLevel === "verbose" && console.error(_.logError);
        return;
      }
      const m = mr(_.data);
      ye.value = m;
      const y = {
        ...r,
        key: m.bike_Key,
        isCustom: !0,
        shareId: m.share_Bike_Key
      };
      u(y), a(y), l(!1), X("/bom");
    } else {
      d(h.error), l(!1), t.logLevel === "verbose" && console.error(h.logError);
      return;
    }
  };
  return p(F, {
    children: [p("div", {
      style: {
        marginBottom: "1rem"
      },
      children: [r ? p(Ze, {
        bike: r,
        noSymbol: !0,
        compact: !0
      }) : p(Er, {}), p("div", {
        class: " text-gray-800 text-center flex z-20 justify-center font-bold mt-6",
        children: !o.error && o.length > 1 ? i("virtualworkshop_intro_text") : i("virtualworkshop_do_not_pass")
      })]
    }), p(Je, {
      messages: c || o.error
    }), p(ot, {
      text: !o.error && o.length > 1 ? i("virtualworkshop_enter_button") : i("bikeselector_browse_back_btn"),
      onClick: !o.error && o.length > 1 ? () => f() : () => X("/"),
      loading: s,
      primary: !0
    }), p(kt, {})]
  });
}
const Qu = `.overflowing{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;justify-content:flex-start}.flexend{justify-content:flex-end}
`, _t = ({
  paragraph: i,
  subheader: e,
  header: t,
  text: r,
  small: a,
  left: o,
  bold: n,
  capitalize: s,
  nowrap: l,
  flexend: c
}) => p(F, {
  children: [p("style", {
    type: "text/css",
    children: Qu
  }), t ? p("h2", {
    class: "text-xl font-bold",
    children: r
  }) : e ? p("h4", {
    className: `text-gray-800 text-center flex z-20 justify-center font-bold  ${s ? "capitalize" : ""}`,
    children: r
  }) : p("p", {
    class: `text-gray-800  flex z-20 ${a ? "text-sm" : ""} ${o ? "text-start justify-start" : "text-center justify-center"} ${n ? "font-bold" : ""} ${s ? "capitalize" : ""} ${l ? "overflowing" : ""} ${c ? "flexend" : ""}`,
    children: r
  })]
}), ep = `.background-alert-wrapper{opacity:0;position:absolute;height:100%;width:100%;display:none;top:0;left:0;pointer-events:none}.alert-wrapper{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none}.alert{width:80%;padding:2rem;border-radius:12px;background-color:#fff;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:300}.text-wrapper{display:flex;flex-direction:column;align-items:center;gap:1rem}.button-wrapper{display:flex;gap:1rem;width:100%;margin-top:1rem}
`;
function ft(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function ol(i, e) {
  i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.__proto__ = e;
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
var je = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, _r = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, ko, me, oe, Ge = 1e8, re = 1 / Ge, ja = Math.PI * 2, tp = ja / 4, rp = 0, nl = Math.sqrt, ip = Math.cos, ap = Math.sin, ge = function(e) {
  return typeof e == "string";
}, de = function(e) {
  return typeof e == "function";
}, vt = function(e) {
  return typeof e == "number";
}, wo = function(e) {
  return typeof e > "u";
}, st = function(e) {
  return typeof e == "object";
}, Pe = function(e) {
  return e !== !1;
}, xo = function() {
  return typeof window < "u";
}, _i = function(e) {
  return de(e) || ge(e);
}, sl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ke = Array.isArray, Fa = /(?:-?\.?\d|\.)+/gi, ll = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ar = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, da = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, cl = /[+-]=-?[.\d]+/, dl = /[^,'"\[\]\s]+/gi, op = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, le, Xe, Va, Co, Fe = {}, Bi = {}, ul, pl = function(e) {
  return (Bi = br(e, Fe)) && Ne;
}, So = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, ri = function(e, t) {
  return !t && console.warn(e);
}, fl = function(e, t) {
  return e && (Fe[e] = t) && Bi && (Bi[e] = t) || Fe;
}, ii = function() {
  return 0;
}, np = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Si = {
  suppressEvents: !0,
  kill: !1
}, sp = {
  suppressEvents: !0
}, zo = {}, Lt = [], $a = {}, hl, Oe = {}, ua = {}, An = 30, zi = [], Ao = "", To = function(e) {
  var t = e[0], r, a;
  if (st(t) || de(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (a = zi.length; a-- && !zi[a].targetTest(t); )
      ;
    r = zi[a];
  }
  for (a = e.length; a--; )
    e[a] && (e[a]._gsap || (e[a]._gsap = new Dl(e[a], r))) || e.splice(a, 1);
  return e;
}, Kt = function(e) {
  return e._gsap || To(Ke(e))[0]._gsap;
}, gl = function(e, t, r) {
  return (r = e[t]) && de(r) ? e[t]() : wo(r) && e.getAttribute && e.getAttribute(t) || r;
}, Ee = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, ue = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, fe = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, lr = function(e, t) {
  var r = t.charAt(0), a = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + a : r === "-" ? e - a : r === "*" ? e * a : e / a;
}, lp = function(e, t) {
  for (var r = t.length, a = 0; e.indexOf(t[a]) < 0 && ++a < r; )
    ;
  return a < r;
}, Ni = function() {
  var e = Lt.length, t = Lt.slice(0), r, a;
  for ($a = {}, Lt.length = 0, r = 0; r < e; r++)
    a = t[r], a && a._lazy && (a.render(a._lazy[0], a._lazy[1], !0)._lazy = 0);
}, ml = function(e, t, r, a) {
  Lt.length && !me && Ni(), e.render(t, r, a || me && t < 0 && (e._initted || e._startAt)), Lt.length && !me && Ni();
}, _l = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(dl).length < 2 ? t : ge(e) ? e.trim() : e;
}, bl = function(e) {
  return e;
}, Ve = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, cp = function(e) {
  return function(t, r) {
    for (var a in r)
      a in t || a === "duration" && e || a === "ease" || (t[a] = r[a]);
  };
}, br = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Tn = function i(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = st(t[r]) ? i(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, Oi = function(e, t) {
  var r = {}, a;
  for (a in e)
    a in t || (r[a] = e[a]);
  return r;
}, Yr = function(e) {
  var t = e.parent || le, r = e.keyframes ? cp(ke(e.keyframes)) : Ve;
  if (Pe(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, dp = function(e, t) {
  for (var r = e.length, a = r === t.length; a && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, vl = function(e, t, r, a, o) {
  r === void 0 && (r = "_first"), a === void 0 && (a = "_last");
  var n = e[a], s;
  if (o)
    for (s = t[o]; n && n[o] > s; )
      n = n._prev;
  return n ? (t._next = n._next, n._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[a] = t, t._prev = n, t.parent = t._dp = e, t;
}, ta = function(e, t, r, a) {
  r === void 0 && (r = "_first"), a === void 0 && (a = "_last");
  var o = t._prev, n = t._next;
  o ? o._next = n : e[r] === t && (e[r] = n), n ? n._prev = o : e[a] === t && (e[a] = o), t._next = t._prev = t.parent = null;
}, Ot = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Wt = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, up = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Ha = function(e, t, r, a) {
  return e._startAt && (me ? e._startAt.revert(Si) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, a));
}, pp = function i(e) {
  return !e || e._ts && i(e.parent);
}, Pn = function(e) {
  return e._repeat ? vr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, vr = function(e, t) {
  var r = Math.floor(e = fe(e / t));
  return e && r === e ? r - 1 : r;
}, Ii = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, ra = function(e) {
  return e._end = fe(e._start + (e._tDur / Math.abs(e._ts || e._rts || re) || 0));
}, ia = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = fe(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ra(e), r._dirty || Wt(r, e)), e;
}, yl = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Ii(e.rawTime(), t), (!t._dur || fi(0, t.totalDuration(), r) - t._tTime > re) && t.render(r, !0)), Wt(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -re;
  }
}, et = function(e, t, r, a) {
  return t.parent && Ot(t), t._start = fe((vt(r) ? r : r || e !== le ? $e(e, r, t) : e._time) + t._delay), t._end = fe(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), vl(e, t, "_first", "_last", e._sort ? "_start" : 0), Ua(t) || (e._recent = t), a || yl(e, t), e._ts < 0 && ia(e, e._tTime), e;
}, kl = function(e, t) {
  return (Fe.ScrollTrigger || So("scrollTrigger", t)) && Fe.ScrollTrigger.create(t, e);
}, wl = function(e, t, r, a, o) {
  if (Eo(e, t, o), !e._initted)
    return 1;
  if (!r && e._pt && !me && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && hl !== Re.frame)
    return Lt.push(e), e._lazy = [o, a], 1;
}, fp = function i(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
}, Ua = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, hp = function(e, t, r, a) {
  var o = e.ratio, n = t < 0 || !t && (!e._start && fp(e) && !(!e._initted && Ua(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ua(e)) ? 0 : 1, s = e._rDelay, l = 0, c, d, u;
  if (s && e._repeat && (l = fi(0, e._tDur, t), d = vr(l, s), e._yoyo && d & 1 && (n = 1 - n), d !== vr(e._tTime, s) && (o = 1 - n, e.vars.repeatRefresh && e._initted && e.invalidate())), n !== o || me || a || e._zTime === re || !t && e._zTime) {
    if (!e._initted && wl(e, t, a, r, l))
      return;
    for (u = e._zTime, e._zTime = t || (r ? re : 0), r || (r = t && !u), e.ratio = n, e._from && (n = 1 - n), e._time = 0, e._tTime = l, c = e._pt; c; )
      c.r(n, c.d), c = c._next;
    t < 0 && Ha(e, t, r, !0), e._onUpdate && !r && De(e, "onUpdate"), l && e._repeat && !r && e.parent && De(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === n && (n && Ot(e, 1), !r && !me && (De(e, n ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = t);
}, gp = function(e, t, r) {
  var a;
  if (r > t)
    for (a = e._first; a && a._start <= r; ) {
      if (a.data === "isPause" && a._start > t)
        return a;
      a = a._next;
    }
  else
    for (a = e._last; a && a._start >= r; ) {
      if (a.data === "isPause" && a._start < t)
        return a;
      a = a._prev;
    }
}, yr = function(e, t, r, a) {
  var o = e._repeat, n = fe(t) || 0, s = e._tTime / e._tDur;
  return s && !a && (e._time *= n / e._dur), e._dur = n, e._tDur = o ? o < 0 ? 1e10 : fe(n * (o + 1) + e._rDelay * o) : n, s > 0 && !a && ia(e, e._tTime = e._tDur * s), e.parent && ra(e), r || Wt(e.parent, e), e;
}, En = function(e) {
  return e instanceof Ce ? Wt(e) : yr(e, e._dur);
}, mp = {
  _start: 0,
  endTime: ii,
  totalDuration: ii
}, $e = function i(e, t, r) {
  var a = e.labels, o = e._recent || mp, n = e.duration() >= Ge ? o.endTime(!1) : e._dur, s, l, c;
  return ge(t) && (isNaN(t) || t in a) ? (l = t.charAt(0), c = t.substr(-1) === "%", s = t.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (t = t.replace(/=/, "")), (l === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (s < 0 ? o : r).totalDuration() / 100 : 1)) : s < 0 ? (t in a || (a[t] = n), a[t]) : (l = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), c && r && (l = l / 100 * (ke(r) ? r[0] : r).totalDuration()), s > 1 ? i(e, t.substr(0, s - 1), r) + l : n + l)) : t == null ? n : +t;
}, qr = function(e, t, r) {
  var a = vt(t[1]), o = (a ? 2 : 1) + (e < 2 ? 0 : 1), n = t[o], s, l;
  if (a && (n.duration = t[1]), n.parent = r, e) {
    for (s = n, l = r; l && !("immediateRender" in s); )
      s = l.vars.defaults || {}, l = Pe(l.vars.inherit) && l.parent;
    n.immediateRender = Pe(s.immediateRender), e < 2 ? n.runBackwards = 1 : n.startAt = t[o - 1];
  }
  return new pe(t[0], n, t[o + 1]);
}, Rt = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, fi = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, ve = function(e, t) {
  return !ge(e) || !(t = op.exec(e)) ? "" : t[1];
}, _p = function(e, t, r) {
  return Rt(r, function(a) {
    return fi(e, t, a);
  });
}, Ga = [].slice, xl = function(e, t) {
  return e && st(e) && "length" in e && (!t && !e.length || e.length - 1 in e && st(e[0])) && !e.nodeType && e !== Xe;
}, bp = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(a) {
    var o;
    return ge(a) && !t || xl(a, 1) ? (o = r).push.apply(o, Ke(a)) : r.push(a);
  }) || r;
}, Ke = function(e, t, r) {
  return oe && !t && oe.selector ? oe.selector(e) : ge(e) && !r && (Va || !kr()) ? Ga.call((t || Co).querySelectorAll(e), 0) : ke(e) ? bp(e, r) : xl(e) ? Ga.call(e, 0) : e ? [e] : [];
}, Ka = function(e) {
  return e = Ke(e)[0] || ri("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return Ke(t, r.querySelectorAll ? r : r === e ? ri("Invalid scope") || Co.createElement("div") : e);
  };
}, Cl = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Sl = function(e) {
  if (de(e))
    return e;
  var t = st(e) ? e : {
    each: e
  }, r = Yt(t.ease), a = t.from || 0, o = parseFloat(t.base) || 0, n = {}, s = a > 0 && a < 1, l = isNaN(a) || s, c = t.axis, d = a, u = a;
  return ge(a) ? d = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[a] || 0 : !s && l && (d = a[0], u = a[1]), function(f, h, _) {
    var m = (_ || t).length, y = n[m], v, g, b, k, w, C, S, z, x;
    if (!y) {
      if (x = t.grid === "auto" ? 0 : (t.grid || [1, Ge])[1], !x) {
        for (S = -Ge; S < (S = _[x++].getBoundingClientRect().left) && x < m; )
          ;
        x < m && x--;
      }
      for (y = n[m] = [], v = l ? Math.min(x, m) * d - 0.5 : a % x, g = x === Ge ? 0 : l ? m * u / x - 0.5 : a / x | 0, S = 0, z = Ge, C = 0; C < m; C++)
        b = C % x - v, k = g - (C / x | 0), y[C] = w = c ? Math.abs(c === "y" ? k : b) : nl(b * b + k * k), w > S && (S = w), w < z && (z = w);
      a === "random" && Cl(y), y.max = S - z, y.min = z, y.v = m = (parseFloat(t.amount) || parseFloat(t.each) * (x > m ? m - 1 : c ? c === "y" ? m / x : x : Math.max(x, m / x)) || 0) * (a === "edges" ? -1 : 1), y.b = m < 0 ? o - m : o, y.u = ve(t.amount || t.each) || 0, r = r && m < 0 ? Ol(r) : r;
    }
    return m = (y[f] - y.min) / y.max || 0, fe(y.b + (r ? r(m) : m) * y.v) + y.u;
  };
}, Wa = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var a = fe(Math.round(parseFloat(r) / e) * e * t);
    return (a - a % 1) / t + (vt(r) ? 0 : ve(r));
  };
}, zl = function(e, t) {
  var r = ke(e), a, o;
  return !r && st(e) && (a = r = e.radius || Ge, e.values ? (e = Ke(e.values), (o = !vt(e[0])) && (a *= a)) : e = Wa(e.increment)), Rt(t, r ? de(e) ? function(n) {
    return o = e(n), Math.abs(o - n) <= a ? o : n;
  } : function(n) {
    for (var s = parseFloat(o ? n.x : n), l = parseFloat(o ? n.y : 0), c = Ge, d = 0, u = e.length, f, h; u--; )
      o ? (f = e[u].x - s, h = e[u].y - l, f = f * f + h * h) : f = Math.abs(e[u] - s), f < c && (c = f, d = u);
    return d = !a || c <= a ? e[d] : n, o || d === n || vt(n) ? d : d + ve(n);
  } : Wa(e));
}, Al = function(e, t, r, a) {
  return Rt(ke(e) ? !t : r === !0 ? !!(r = 0) : !a, function() {
    return ke(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (a = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * a) / a;
  });
}, vp = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(a) {
    return t.reduce(function(o, n) {
      return n(o);
    }, a);
  };
}, yp = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || ve(r));
  };
}, kp = function(e, t, r) {
  return Pl(e, t, 0, 1, r);
}, Tl = function(e, t, r) {
  return Rt(r, function(a) {
    return e[~~t(a)];
  });
}, wp = function i(e, t, r) {
  var a = t - e;
  return ke(e) ? Tl(e, i(0, e.length), t) : Rt(r, function(o) {
    return (a + (o - e) % a) % a + e;
  });
}, xp = function i(e, t, r) {
  var a = t - e, o = a * 2;
  return ke(e) ? Tl(e, i(0, e.length - 1), t) : Rt(r, function(n) {
    return n = (o + (n - e) % o) % o || 0, e + (n > a ? o - n : n);
  });
}, ai = function(e) {
  for (var t = 0, r = "", a, o, n, s; ~(a = e.indexOf("random(", t)); )
    n = e.indexOf(")", a), s = e.charAt(a + 7) === "[", o = e.substr(a + 7, n - a - 7).match(s ? dl : Fa), r += e.substr(t, a - t) + Al(s ? o : +o[0], s ? 0 : +o[1], +o[2] || 1e-5), t = n + 1;
  return r + e.substr(t, e.length - t);
}, Pl = function(e, t, r, a, o) {
  var n = t - e, s = a - r;
  return Rt(o, function(l) {
    return r + ((l - e) / n * s || 0);
  });
}, Cp = function i(e, t, r, a) {
  var o = isNaN(e + t) ? 0 : function(h) {
    return (1 - h) * e + h * t;
  };
  if (!o) {
    var n = ge(e), s = {}, l, c, d, u, f;
    if (r === !0 && (a = 1) && (r = null), n)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (ke(e) && !ke(t)) {
      for (d = [], u = e.length, f = u - 2, c = 1; c < u; c++)
        d.push(i(e[c - 1], e[c]));
      u--, o = function(_) {
        _ *= u;
        var m = Math.min(f, ~~_);
        return d[m](_ - m);
      }, r = t;
    } else
      a || (e = br(ke(e) ? [] : {}, e));
    if (!d) {
      for (l in t)
        Po.call(s, e, l, "get", t[l]);
      o = function(_) {
        return Bo(_, s) || (n ? e.p : e);
      };
    }
  }
  return Rt(r, o);
}, Ln = function(e, t, r) {
  var a = e.labels, o = Ge, n, s, l;
  for (n in a)
    s = a[n] - t, s < 0 == !!r && s && o > (s = Math.abs(s)) && (l = n, o = s);
  return l;
}, De = function(e, t, r) {
  var a = e.vars, o = a[t], n = oe, s = e._ctx, l, c, d;
  if (o)
    return l = a[t + "Params"], c = a.callbackScope || e, r && Lt.length && Ni(), s && (oe = s), d = l ? o.apply(c, l) : o.call(c), oe = n, d;
}, $r = function(e) {
  return Ot(e), e.scrollTrigger && e.scrollTrigger.kill(!!me), e.progress() < 1 && De(e, "onInterrupt"), e;
}, or, El = [], Ll = function(e) {
  if (e)
    if (e = !e.name && e.default || e, xo() || e.headless) {
      var t = e.name, r = de(e), a = t && !r && e.init ? function() {
        this._props = [];
      } : e, o = {
        init: ii,
        render: Bo,
        add: Po,
        kill: Fp,
        modifier: jp,
        rawVars: 0
      }, n = {
        targetTest: 0,
        get: 0,
        getSetter: Mo,
        aliases: {},
        register: 0
      };
      if (kr(), e !== a) {
        if (Oe[t])
          return;
        Ve(a, Ve(Oi(e, o), n)), br(a.prototype, br(o, Oi(e, n))), Oe[a.prop = t] = a, e.targetTest && (zi.push(a), zo[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      fl(t, a), e.register && e.register(Ne, a, Le);
    } else
      El.push(e);
}, ee = 255, Hr = {
  aqua: [0, ee, ee],
  lime: [0, ee, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ee],
  navy: [0, 0, 128],
  white: [ee, ee, ee],
  olive: [128, 128, 0],
  yellow: [ee, ee, 0],
  orange: [ee, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ee, 0, 0],
  pink: [ee, 192, 203],
  cyan: [0, ee, ee],
  transparent: [ee, ee, ee, 0]
}, pa = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * ee + 0.5 | 0;
}, Ml = function(e, t, r) {
  var a = e ? vt(e) ? [e >> 16, e >> 8 & ee, e & ee] : 0 : Hr.black, o, n, s, l, c, d, u, f, h, _;
  if (!a) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Hr[e])
      a = Hr[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (o = e.charAt(1), n = e.charAt(2), s = e.charAt(3), e = "#" + o + o + n + n + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return a = parseInt(e.substr(1, 6), 16), [a >> 16, a >> 8 & ee, a & ee, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), a = [e >> 16, e >> 8 & ee, e & ee];
    } else if (e.substr(0, 3) === "hsl") {
      if (a = _ = e.match(Fa), !t)
        l = +a[0] % 360 / 360, c = +a[1] / 100, d = +a[2] / 100, n = d <= 0.5 ? d * (c + 1) : d + c - d * c, o = d * 2 - n, a.length > 3 && (a[3] *= 1), a[0] = pa(l + 1 / 3, o, n), a[1] = pa(l, o, n), a[2] = pa(l - 1 / 3, o, n);
      else if (~e.indexOf("="))
        return a = e.match(ll), r && a.length < 4 && (a[3] = 1), a;
    } else
      a = e.match(Fa) || Hr.transparent;
    a = a.map(Number);
  }
  return t && !_ && (o = a[0] / ee, n = a[1] / ee, s = a[2] / ee, u = Math.max(o, n, s), f = Math.min(o, n, s), d = (u + f) / 2, u === f ? l = c = 0 : (h = u - f, c = d > 0.5 ? h / (2 - u - f) : h / (u + f), l = u === o ? (n - s) / h + (n < s ? 6 : 0) : u === n ? (s - o) / h + 2 : (o - n) / h + 4, l *= 60), a[0] = ~~(l + 0.5), a[1] = ~~(c * 100 + 0.5), a[2] = ~~(d * 100 + 0.5)), r && a.length < 4 && (a[3] = 1), a;
}, Bl = function(e) {
  var t = [], r = [], a = -1;
  return e.split(Mt).forEach(function(o) {
    var n = o.match(ar) || [];
    t.push.apply(t, n), r.push(a += n.length + 1);
  }), t.c = r, t;
}, Mn = function(e, t, r) {
  var a = "", o = (e + a).match(Mt), n = t ? "hsla(" : "rgba(", s = 0, l, c, d, u;
  if (!o)
    return e;
  if (o = o.map(function(f) {
    return (f = Ml(f, t, 1)) && n + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), r && (d = Bl(e), l = r.c, l.join(a) !== d.c.join(a)))
    for (c = e.replace(Mt, "1").split(ar), u = c.length - 1; s < u; s++)
      a += c[s] + (~l.indexOf(s) ? o.shift() || n + "0,0,0,0)" : (d.length ? d : o.length ? o : r).shift());
  if (!c)
    for (c = e.split(Mt), u = c.length - 1; s < u; s++)
      a += c[s] + o[s];
  return a + c[u];
}, Mt = function() {
  var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Hr)
    i += "|" + e + "\\b";
  return new RegExp(i + ")", "gi");
}(), Sp = /hsl[a]?\(/, Nl = function(e) {
  var t = e.join(" "), r;
  if (Mt.lastIndex = 0, Mt.test(t))
    return r = Sp.test(t), e[1] = Mn(e[1], r), e[0] = Mn(e[0], r, Bl(e[1])), !0;
}, oi, Re = function() {
  var i = Date.now, e = 500, t = 33, r = i(), a = r, o = 1e3 / 240, n = o, s = [], l, c, d, u, f, h, _ = function m(y) {
    var v = i() - a, g = y === !0, b, k, w, C;
    if ((v > e || v < 0) && (r += v - t), a += v, w = a - r, b = w - n, (b > 0 || g) && (C = ++u.frame, f = w - u.time * 1e3, u.time = w = w / 1e3, n += b + (b >= o ? 4 : o - b), k = 1), g || (l = c(m)), k)
      for (h = 0; h < s.length; h++)
        s[h](w, f, C, y);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      _(!0);
    },
    deltaRatio: function(y) {
      return f / (1e3 / (y || 60));
    },
    wake: function() {
      ul && (!Va && xo() && (Xe = Va = window, Co = Xe.document || {}, Fe.gsap = Ne, (Xe.gsapVersions || (Xe.gsapVersions = [])).push(Ne.version), pl(Bi || Xe.GreenSockGlobals || !Xe.gsap && Xe || {}), El.forEach(Ll)), d = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), c = d || function(y) {
        return setTimeout(y, n - u.time * 1e3 + 1 | 0);
      }, oi = 1, _(2));
    },
    sleep: function() {
      (d ? cancelAnimationFrame : clearTimeout)(l), oi = 0, c = ii;
    },
    lagSmoothing: function(y, v) {
      e = y || 1 / 0, t = Math.min(v || 33, e);
    },
    fps: function(y) {
      o = 1e3 / (y || 240), n = u.time * 1e3 + o;
    },
    add: function(y, v, g) {
      var b = v ? function(k, w, C, S) {
        y(k, w, C, S), u.remove(b);
      } : y;
      return u.remove(y), s[g ? "unshift" : "push"](b), kr(), b;
    },
    remove: function(y, v) {
      ~(v = s.indexOf(y)) && s.splice(v, 1) && h >= v && h--;
    },
    _listeners: s
  }, u;
}(), kr = function() {
  return !oi && Re.wake();
}, Z = {}, zp = /^[\d.\-M][\d.\-,\s]/, Ap = /["']/g, Tp = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), a = r[0], o = 1, n = r.length, s, l, c; o < n; o++)
    l = r[o], s = o !== n - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, s), t[a] = isNaN(c) ? c.replace(Ap, "").trim() : +c, a = l.substr(s + 1).trim();
  return t;
}, Pp = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), a = e.indexOf("(", t);
  return e.substring(t, ~a && a < r ? e.indexOf(")", r + 1) : r);
}, Ep = function(e) {
  var t = (e + "").split("("), r = Z[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Tp(t[1])] : Pp(e).split(",").map(_l)) : Z._CE && zp.test(e) ? Z._CE("", e) : r;
}, Ol = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Il = function i(e, t) {
  for (var r = e._first, a; r; )
    r instanceof Ce ? i(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? i(r.timeline, t) : (a = r._ease, r._ease = r._yEase, r._yEase = a, r._yoyo = t)), r = r._next;
}, Yt = function(e, t) {
  return e && (de(e) ? e : Z[e] || Ep(e)) || t;
}, Xt = function(e, t, r, a) {
  r === void 0 && (r = function(l) {
    return 1 - t(1 - l);
  }), a === void 0 && (a = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var o = {
    easeIn: t,
    easeOut: r,
    easeInOut: a
  }, n;
  return Ee(e, function(s) {
    Z[s] = Fe[s] = o, Z[n = s.toLowerCase()] = r;
    for (var l in o)
      Z[n + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Z[s + "." + l] = o[l];
  }), o;
}, Rl = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, fa = function i(e, t, r) {
  var a = t >= 1 ? t : 1, o = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), n = o / ja * (Math.asin(1 / a) || 0), s = function(d) {
    return d === 1 ? 1 : a * Math.pow(2, -10 * d) * ap((d - n) * o) + 1;
  }, l = e === "out" ? s : e === "in" ? function(c) {
    return 1 - s(1 - c);
  } : Rl(s);
  return o = ja / o, l.config = function(c, d) {
    return i(e, c, d);
  }, l;
}, ha = function i(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(n) {
    return n ? --n * n * ((t + 1) * n + t) + 1 : 0;
  }, a = e === "out" ? r : e === "in" ? function(o) {
    return 1 - r(1 - o);
  } : Rl(r);
  return a.config = function(o) {
    return i(e, o);
  }, a;
};
Ee("Linear,Quad,Cubic,Quart,Quint,Strong", function(i, e) {
  var t = e < 5 ? e + 1 : e;
  Xt(i + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
Z.Linear.easeNone = Z.none = Z.Linear.easeIn;
Xt("Elastic", fa("in"), fa("out"), fa());
(function(i, e) {
  var t = 1 / e, r = 2 * t, a = 2.5 * t, o = function(s) {
    return s < t ? i * s * s : s < r ? i * Math.pow(s - 1.5 / e, 2) + 0.75 : s < a ? i * (s -= 2.25 / e) * s + 0.9375 : i * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  Xt("Bounce", function(n) {
    return 1 - o(1 - n);
  }, o);
})(7.5625, 2.75);
Xt("Expo", function(i) {
  return Math.pow(2, 10 * (i - 1)) * i + i * i * i * i * i * i * (1 - i);
});
Xt("Circ", function(i) {
  return -(nl(1 - i * i) - 1);
});
Xt("Sine", function(i) {
  return i === 1 ? 1 : -ip(i * tp) + 1;
});
Xt("Back", ha("in"), ha("out"), ha());
Z.SteppedEase = Z.steps = Fe.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, a = e + (t ? 0 : 1), o = t ? 1 : 0, n = 1 - re;
    return function(s) {
      return ((a * fi(0, n, s) | 0) + o) * r;
    };
  }
};
_r.ease = Z["quad.out"];
Ee("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i) {
  return Ao += i + "," + i + "Params,";
});
var Dl = function(e, t) {
  this.id = rp++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : gl, this.set = t ? t.getSetter : Mo;
}, ni = /* @__PURE__ */ function() {
  function i(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, yr(this, +t.duration, 1, 1), this.data = t.data, oe && (this._ctx = oe, oe.data.push(this)), oi || Re.wake();
  }
  var e = i.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, yr(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, a) {
    if (kr(), !arguments.length)
      return this._tTime;
    var o = this._dp;
    if (o && o.smoothChildTiming && this._ts) {
      for (ia(this, r), !o._dp || o.parent || yl(o, this); o && o.parent; )
        o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && et(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !a || this._initted && Math.abs(this._zTime) === re || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), ml(this, r, a)), this;
  }, e.time = function(r, a) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Pn(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), a) : this._time;
  }, e.totalProgress = function(r, a) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, a) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, a) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Pn(this), a) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, a) {
    var o = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * o, a) : this._repeat ? vr(this._tTime, o) + 1 : 1;
  }, e.timeScale = function(r, a) {
    if (!arguments.length)
      return this._rts === -re ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var o = this.parent && this._ts ? Ii(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -re ? 0 : this._rts, this.totalTime(fi(-Math.abs(this._delay), this._tDur, o), a !== !1), ra(this), up(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (kr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== re && (this._tTime -= re)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var a = this.parent || this._dp;
      return a && (a._sort || !this.parent) && et(a, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (Pe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var a = this.parent || this._dp;
    return a ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ii(a.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = sp);
    var a = me;
    return me = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), me = a, this;
  }, e.globalTime = function(r) {
    for (var a = this, o = arguments.length ? r : a.rawTime(); a; )
      o = a._start + o / (Math.abs(a._ts) || 1), a = a._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : o;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, En(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var a = this._time;
      return this._rDelay = r, En(this), a ? this.time(a) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, a) {
    return this.totalTime($e(this, r), Pe(a));
  }, e.restart = function(r, a) {
    return this.play().totalTime(r ? -this._delay : 0, Pe(a)), this._dur || (this._zTime = -re), this;
  }, e.play = function(r, a) {
    return r != null && this.seek(r, a), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, a) {
    return r != null && this.seek(r || this.totalDuration(), a), this.reversed(!0).paused(!1);
  }, e.pause = function(r, a) {
    return r != null && this.seek(r, a), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -re : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -re, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, a = this._start, o;
    return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= a && o < this.endTime(!0) - re);
  }, e.eventCallback = function(r, a, o) {
    var n = this.vars;
    return arguments.length > 1 ? (a ? (n[r] = a, o && (n[r + "Params"] = o), r === "onUpdate" && (this._onUpdate = a)) : delete n[r], this) : n[r];
  }, e.then = function(r) {
    var a = this;
    return new Promise(function(o) {
      var n = de(r) ? r : bl, s = function() {
        var c = a.then;
        a.then = null, de(n) && (n = n(a)) && (n.then || n === a) && (a.then = c), o(n), a.then = c;
      };
      a._initted && a.totalProgress() === 1 && a._ts >= 0 || !a._tTime && a._ts < 0 ? s() : a._prom = s;
    });
  }, e.kill = function() {
    $r(this);
  }, i;
}();
Ve(ni.prototype, {
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
  _zTime: -re,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Ce = /* @__PURE__ */ function(i) {
  ol(e, i);
  function e(r, a) {
    var o;
    return r === void 0 && (r = {}), o = i.call(this, r) || this, o.labels = {}, o.smoothChildTiming = !!r.smoothChildTiming, o.autoRemoveChildren = !!r.autoRemoveChildren, o._sort = Pe(r.sortChildren), le && et(r.parent || le, ft(o), a), r.reversed && o.reverse(), r.paused && o.paused(!0), r.scrollTrigger && kl(ft(o), r.scrollTrigger), o;
  }
  var t = e.prototype;
  return t.to = function(a, o, n) {
    return qr(0, arguments, this), this;
  }, t.from = function(a, o, n) {
    return qr(1, arguments, this), this;
  }, t.fromTo = function(a, o, n, s) {
    return qr(2, arguments, this), this;
  }, t.set = function(a, o, n) {
    return o.duration = 0, o.parent = this, Yr(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new pe(a, o, $e(this, n), 1), this;
  }, t.call = function(a, o, n) {
    return et(this, pe.delayedCall(0, a, o), n);
  }, t.staggerTo = function(a, o, n, s, l, c, d) {
    return n.duration = o, n.stagger = n.stagger || s, n.onComplete = c, n.onCompleteParams = d, n.parent = this, new pe(a, n, $e(this, l)), this;
  }, t.staggerFrom = function(a, o, n, s, l, c, d) {
    return n.runBackwards = 1, Yr(n).immediateRender = Pe(n.immediateRender), this.staggerTo(a, o, n, s, l, c, d);
  }, t.staggerFromTo = function(a, o, n, s, l, c, d, u) {
    return s.startAt = n, Yr(s).immediateRender = Pe(s.immediateRender), this.staggerTo(a, o, s, l, c, d, u);
  }, t.render = function(a, o, n) {
    var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, d = a <= 0 ? 0 : fe(a), u = this._zTime < 0 != a < 0 && (this._initted || !c), f, h, _, m, y, v, g, b, k, w, C, S;
    if (this !== le && d > l && a >= 0 && (d = l), d !== this._tTime || n || u) {
      if (s !== this._time && c && (d += this._time - s, a += this._time - s), f = d, k = this._start, b = this._ts, v = !b, u && (c || (s = this._zTime), (a || !o) && (this._zTime = a)), this._repeat) {
        if (C = this._yoyo, y = c + this._rDelay, this._repeat < -1 && a < 0)
          return this.totalTime(y * 100 + a, o, n);
        if (f = fe(d % y), d === l ? (m = this._repeat, f = c) : (w = fe(d / y), m = ~~w, m && m === w && (f = c, m--), f > c && (f = c)), w = vr(this._tTime, y), !s && this._tTime && w !== m && this._tTime - w * y - this._dur <= 0 && (w = m), C && m & 1 && (f = c - f, S = 1), m !== w && !this._lock) {
          var z = C && w & 1, x = z === (C && m & 1);
          if (m < w && (z = !z), s = z ? 0 : d % c ? c : d, this._lock = 1, this.render(s || (S ? 0 : fe(m * y)), o, !c)._lock = 0, this._tTime = d, !o && this.parent && De(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1), s && s !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, x && (this._lock = 2, s = z ? c : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          Il(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (g = gp(this, fe(s), fe(f)), g && (d -= f - (f = g._start))), this._tTime = d, this._time = f, this._act = !b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = a, s = 0), !s && f && !o && !m && (De(this, "onStart"), this._tTime !== d))
        return this;
      if (f >= s && a >= 0)
        for (h = this._first; h; ) {
          if (_ = h._next, (h._act || f >= h._start) && h._ts && g !== h) {
            if (h.parent !== this)
              return this.render(a, o, n);
            if (h.render(h._ts > 0 ? (f - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (f - h._start) * h._ts, o, n), f !== this._time || !this._ts && !v) {
              g = 0, _ && (d += this._zTime = -re);
              break;
            }
          }
          h = _;
        }
      else {
        h = this._last;
        for (var T = a < 0 ? a : f; h; ) {
          if (_ = h._prev, (h._act || T <= h._end) && h._ts && g !== h) {
            if (h.parent !== this)
              return this.render(a, o, n);
            if (h.render(h._ts > 0 ? (T - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (T - h._start) * h._ts, o, n || me && (h._initted || h._startAt)), f !== this._time || !this._ts && !v) {
              g = 0, _ && (d += this._zTime = T ? -re : re);
              break;
            }
          }
          h = _;
        }
      }
      if (g && !o && (this.pause(), g.render(f >= s ? 0 : -re)._zTime = f >= s ? 1 : -1, this._ts))
        return this._start = k, ra(this), this.render(a, o, n);
      this._onUpdate && !o && De(this, "onUpdate", !0), (d === l && this._tTime >= this.totalDuration() || !d && s) && (k === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((a || !c) && (d === l && this._ts > 0 || !d && this._ts < 0) && Ot(this, 1), !o && !(a < 0 && !s) && (d || s || !l) && (De(this, d === l && a >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(a, o) {
    var n = this;
    if (vt(o) || (o = $e(this, o, a)), !(a instanceof ni)) {
      if (ke(a))
        return a.forEach(function(s) {
          return n.add(s, o);
        }), this;
      if (ge(a))
        return this.addLabel(a, o);
      if (de(a))
        a = pe.delayedCall(0, a);
      else
        return this;
    }
    return this !== a ? et(this, a, o) : this;
  }, t.getChildren = function(a, o, n, s) {
    a === void 0 && (a = !0), o === void 0 && (o = !0), n === void 0 && (n = !0), s === void 0 && (s = -Ge);
    for (var l = [], c = this._first; c; )
      c._start >= s && (c instanceof pe ? o && l.push(c) : (n && l.push(c), a && l.push.apply(l, c.getChildren(!0, o, n)))), c = c._next;
    return l;
  }, t.getById = function(a) {
    for (var o = this.getChildren(1, 1, 1), n = o.length; n--; )
      if (o[n].vars.id === a)
        return o[n];
  }, t.remove = function(a) {
    return ge(a) ? this.removeLabel(a) : de(a) ? this.killTweensOf(a) : (a.parent === this && ta(this, a), a === this._recent && (this._recent = this._last), Wt(this));
  }, t.totalTime = function(a, o) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = fe(Re.time - (this._ts > 0 ? a / this._ts : (this.totalDuration() - a) / -this._ts))), i.prototype.totalTime.call(this, a, o), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(a, o) {
    return this.labels[a] = $e(this, o), this;
  }, t.removeLabel = function(a) {
    return delete this.labels[a], this;
  }, t.addPause = function(a, o, n) {
    var s = pe.delayedCall(0, o || ii, n);
    return s.data = "isPause", this._hasPause = 1, et(this, s, $e(this, a));
  }, t.removePause = function(a) {
    var o = this._first;
    for (a = $e(this, a); o; )
      o._start === a && o.data === "isPause" && Ot(o), o = o._next;
  }, t.killTweensOf = function(a, o, n) {
    for (var s = this.getTweensOf(a, n), l = s.length; l--; )
      zt !== s[l] && s[l].kill(a, o);
    return this;
  }, t.getTweensOf = function(a, o) {
    for (var n = [], s = Ke(a), l = this._first, c = vt(o), d; l; )
      l instanceof pe ? lp(l._targets, s) && (c ? (!zt || l._initted && l._ts) && l.globalTime(0) <= o && l.globalTime(l.totalDuration()) > o : !o || l.isActive()) && n.push(l) : (d = l.getTweensOf(s, o)).length && n.push.apply(n, d), l = l._next;
    return n;
  }, t.tweenTo = function(a, o) {
    o = o || {};
    var n = this, s = $e(n, a), l = o, c = l.startAt, d = l.onStart, u = l.onStartParams, f = l.immediateRender, h, _ = pe.to(n, Ve({
      ease: o.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: o.duration || Math.abs((s - (c && "time" in c ? c.time : n._time)) / n.timeScale()) || re,
      onStart: function() {
        if (n.pause(), !h) {
          var y = o.duration || Math.abs((s - (c && "time" in c ? c.time : n._time)) / n.timeScale());
          _._dur !== y && yr(_, y, 0, 1).render(_._time, !0, !0), h = 1;
        }
        d && d.apply(_, u || []);
      }
    }, o));
    return f ? _.render(0) : _;
  }, t.tweenFromTo = function(a, o, n) {
    return this.tweenTo(o, Ve({
      startAt: {
        time: $e(this, a)
      }
    }, n));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(a) {
    return a === void 0 && (a = this._time), Ln(this, $e(this, a));
  }, t.previousLabel = function(a) {
    return a === void 0 && (a = this._time), Ln(this, $e(this, a), 1);
  }, t.currentLabel = function(a) {
    return arguments.length ? this.seek(a, !0) : this.previousLabel(this._time + re);
  }, t.shiftChildren = function(a, o, n) {
    n === void 0 && (n = 0);
    for (var s = this._first, l = this.labels, c; s; )
      s._start >= n && (s._start += a, s._end += a), s = s._next;
    if (o)
      for (c in l)
        l[c] >= n && (l[c] += a);
    return Wt(this);
  }, t.invalidate = function(a) {
    var o = this._first;
    for (this._lock = 0; o; )
      o.invalidate(a), o = o._next;
    return i.prototype.invalidate.call(this, a);
  }, t.clear = function(a) {
    a === void 0 && (a = !0);
    for (var o = this._first, n; o; )
      n = o._next, this.remove(o), o = n;
    return this._dp && (this._time = this._tTime = this._pTime = 0), a && (this.labels = {}), Wt(this);
  }, t.totalDuration = function(a) {
    var o = 0, n = this, s = n._last, l = Ge, c, d, u;
    if (arguments.length)
      return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -a : a));
    if (n._dirty) {
      for (u = n.parent; s; )
        c = s._prev, s._dirty && s.totalDuration(), d = s._start, d > l && n._sort && s._ts && !n._lock ? (n._lock = 1, et(n, s, d - s._delay, 1)._lock = 0) : l = d, d < 0 && s._ts && (o -= d, (!u && !n._dp || u && u.smoothChildTiming) && (n._start += d / n._ts, n._time -= d, n._tTime -= d), n.shiftChildren(-d, !1, -1 / 0), l = 0), s._end > o && s._ts && (o = s._end), s = c;
      yr(n, n === le && n._time > o ? n._time : o, 1, 1), n._dirty = 0;
    }
    return n._tDur;
  }, e.updateRoot = function(a) {
    if (le._ts && (ml(le, Ii(a, le)), hl = Re.frame), Re.frame >= An) {
      An += je.autoSleep || 120;
      var o = le._first;
      if ((!o || !o._ts) && je.autoSleep && Re._listeners.length < 2) {
        for (; o && !o._ts; )
          o = o._next;
        o || Re.sleep();
      }
    }
  }, e;
}(ni);
Ve(Ce.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Lp = function(e, t, r, a, o, n, s) {
  var l = new Le(this._pt, e, t, 0, 1, Ul, null, o), c = 0, d = 0, u, f, h, _, m, y, v, g;
  for (l.b = r, l.e = a, r += "", a += "", (v = ~a.indexOf("random(")) && (a = ai(a)), n && (g = [r, a], n(g, e, t), r = g[0], a = g[1]), f = r.match(da) || []; u = da.exec(a); )
    _ = u[0], m = a.substring(c, u.index), h ? h = (h + 1) % 5 : m.substr(-5) === "rgba(" && (h = 1), _ !== f[d++] && (y = parseFloat(f[d - 1]) || 0, l._pt = {
      _next: l._pt,
      p: m || d === 1 ? m : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: y,
      c: _.charAt(1) === "=" ? lr(y, _) - y : parseFloat(_) - y,
      m: h && h < 4 ? Math.round : 0
    }, c = da.lastIndex);
  return l.c = c < a.length ? a.substring(c, a.length) : "", l.fp = s, (cl.test(a) || v) && (l.e = 0), this._pt = l, l;
}, Po = function(e, t, r, a, o, n, s, l, c, d) {
  de(a) && (a = a(o || 0, e, n));
  var u = e[t], f = r !== "get" ? r : de(u) ? c ? e[t.indexOf("set") || !de(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u, h = de(u) ? c ? Ip : $l : Lo, _;
  if (ge(a) && (~a.indexOf("random(") && (a = ai(a)), a.charAt(1) === "=" && (_ = lr(f, a) + (ve(f) || 0), (_ || _ === 0) && (a = _))), !d || f !== a || Ya)
    return !isNaN(f * a) && a !== "" ? (_ = new Le(this._pt, e, t, +f || 0, a - (f || 0), typeof u == "boolean" ? Dp : Hl, 0, h), c && (_.fp = c), s && _.modifier(s, this, e), this._pt = _) : (!u && !(t in e) && So(t, a), Lp.call(this, e, t, f, a, h, l || je.stringFilter, c));
}, Mp = function(e, t, r, a, o) {
  if (de(e) && (e = Zr(e, o, t, r, a)), !st(e) || e.style && e.nodeType || ke(e) || sl(e))
    return ge(e) ? Zr(e, o, t, r, a) : e;
  var n = {}, s;
  for (s in e)
    n[s] = Zr(e[s], o, t, r, a);
  return n;
}, jl = function(e, t, r, a, o, n) {
  var s, l, c, d;
  if (Oe[e] && (s = new Oe[e]()).init(o, s.rawVars ? t[e] : Mp(t[e], a, o, n, r), r, a, n) !== !1 && (r._pt = l = new Le(r._pt, o, e, 0, 1, s.render, s, 0, s.priority), r !== or))
    for (c = r._ptLookup[r._targets.indexOf(o)], d = s._props.length; d--; )
      c[s._props[d]] = l;
  return s;
}, zt, Ya, Eo = function i(e, t, r) {
  var a = e.vars, o = a.ease, n = a.startAt, s = a.immediateRender, l = a.lazy, c = a.onUpdate, d = a.runBackwards, u = a.yoyoEase, f = a.keyframes, h = a.autoRevert, _ = e._dur, m = e._startAt, y = e._targets, v = e.parent, g = v && v.data === "nested" ? v.vars.targets : y, b = e._overwrite === "auto" && !ko, k = e.timeline, w, C, S, z, x, T, A, E, M, O, j, N, D;
  if (k && (!f || !o) && (o = "none"), e._ease = Yt(o, _r.ease), e._yEase = u ? Ol(Yt(u === !0 ? o : u, _r.ease)) : 0, u && e._yoyo && !e._repeat && (u = e._yEase, e._yEase = e._ease, e._ease = u), e._from = !k && !!a.runBackwards, !k || f && !a.stagger) {
    if (E = y[0] ? Kt(y[0]).harness : 0, N = E && a[E.prop], w = Oi(a, zo), m && (m._zTime < 0 && m.progress(1), t < 0 && d && s && !h ? m.render(-1, !0) : m.revert(d && _ ? Si : np), m._lazy = 0), n) {
      if (Ot(e._startAt = pe.set(y, Ve({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !m && Pe(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return De(e, "onUpdate");
        },
        stagger: 0
      }, n))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (me || !s && !h) && e._startAt.revert(Si), s && _ && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (d && _ && !m) {
      if (t && (s = !1), S = Ve({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !m && Pe(l),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), N && (S[E.prop] = N), Ot(e._startAt = pe.set(y, S)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (me ? e._startAt.revert(Si) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        i(e._startAt, re, re);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = _ && Pe(l) || l && !_, C = 0; C < y.length; C++) {
      if (x = y[C], A = x._gsap || To(y)[C]._gsap, e._ptLookup[C] = O = {}, $a[A.id] && Lt.length && Ni(), j = g === y ? C : g.indexOf(x), E && (M = new E()).init(x, N || w, e, j, g) !== !1 && (e._pt = z = new Le(e._pt, x, M.name, 0, 1, M.render, M, 0, M.priority), M._props.forEach(function(P) {
        O[P] = z;
      }), M.priority && (T = 1)), !E || N)
        for (S in w)
          Oe[S] && (M = jl(S, w, e, j, x, g)) ? M.priority && (T = 1) : O[S] = z = Po.call(e, x, S, "get", w[S], j, g, 0, a.stringFilter);
      e._op && e._op[C] && e.kill(x, e._op[C]), b && e._pt && (zt = e, le.killTweensOf(x, O, e.globalTime(t)), D = !e.parent, zt = 0), e._pt && l && ($a[A.id] = 1);
    }
    T && Gl(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !D, f && t <= 0 && k.render(Ge, !0, !0);
}, Bp = function(e, t, r, a, o, n, s, l) {
  var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], d, u, f, h;
  if (!c)
    for (c = e._ptCache[t] = [], f = e._ptLookup, h = e._targets.length; h--; ) {
      if (d = f[h][t], d && d.d && d.d._pt)
        for (d = d.d._pt; d && d.p !== t && d.fp !== t; )
          d = d._next;
      if (!d)
        return Ya = 1, e.vars[t] = "+=0", Eo(e, s), Ya = 0, l ? ri(t + " not eligible for reset") : 1;
      c.push(d);
    }
  for (h = c.length; h--; )
    u = c[h], d = u._pt || u, d.s = (a || a === 0) && !o ? a : d.s + (a || 0) + n * d.c, d.c = r - d.s, u.e && (u.e = ue(r) + ve(u.e)), u.b && (u.b = d.s + ve(u.b));
}, Np = function(e, t) {
  var r = e[0] ? Kt(e[0]).harness : 0, a = r && r.aliases, o, n, s, l;
  if (!a)
    return t;
  o = br({}, t);
  for (n in a)
    if (n in o)
      for (l = a[n].split(","), s = l.length; s--; )
        o[l[s]] = o[n];
  return o;
}, Op = function(e, t, r, a) {
  var o = t.ease || a || "power1.inOut", n, s;
  if (ke(t))
    s = r[e] || (r[e] = []), t.forEach(function(l, c) {
      return s.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: o
      });
    });
  else
    for (n in t)
      s = r[n] || (r[n] = []), n === "ease" || s.push({
        t: parseFloat(e),
        v: t[n],
        e: o
      });
}, Zr = function(e, t, r, a, o) {
  return de(e) ? e.call(t, r, a, o) : ge(e) && ~e.indexOf("random(") ? ai(e) : e;
}, Fl = Ao + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Vl = {};
Ee(Fl + ",id,stagger,delay,duration,paused,scrollTrigger", function(i) {
  return Vl[i] = 1;
});
var pe = /* @__PURE__ */ function(i) {
  ol(e, i);
  function e(r, a, o, n) {
    var s;
    typeof a == "number" && (o.duration = a, a = o, o = null), s = i.call(this, n ? a : Yr(a)) || this;
    var l = s.vars, c = l.duration, d = l.delay, u = l.immediateRender, f = l.stagger, h = l.overwrite, _ = l.keyframes, m = l.defaults, y = l.scrollTrigger, v = l.yoyoEase, g = a.parent || le, b = (ke(r) || sl(r) ? vt(r[0]) : "length" in a) ? [r] : Ke(r), k, w, C, S, z, x, T, A;
    if (s._targets = b.length ? To(b) : ri("GSAP target " + r + " not found. https://gsap.com", !je.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = h, _ || f || _i(c) || _i(d)) {
      if (a = s.vars, k = s.timeline = new Ce({
        data: "nested",
        defaults: m || {},
        targets: g && g.data === "nested" ? g.vars.targets : b
      }), k.kill(), k.parent = k._dp = ft(s), k._start = 0, f || _i(c) || _i(d)) {
        if (S = b.length, T = f && Sl(f), st(f))
          for (z in f)
            ~Fl.indexOf(z) && (A || (A = {}), A[z] = f[z]);
        for (w = 0; w < S; w++)
          C = Oi(a, Vl), C.stagger = 0, v && (C.yoyoEase = v), A && br(C, A), x = b[w], C.duration = +Zr(c, ft(s), w, x, b), C.delay = (+Zr(d, ft(s), w, x, b) || 0) - s._delay, !f && S === 1 && C.delay && (s._delay = d = C.delay, s._start += d, C.delay = 0), k.to(x, C, T ? T(w, x, b) : 0), k._ease = Z.none;
        k.duration() ? c = d = 0 : s.timeline = 0;
      } else if (_) {
        Yr(Ve(k.vars.defaults, {
          ease: "none"
        })), k._ease = Yt(_.ease || a.ease || "none");
        var E = 0, M, O, j;
        if (ke(_))
          _.forEach(function(N) {
            return k.to(b, N, ">");
          }), k.duration();
        else {
          C = {};
          for (z in _)
            z === "ease" || z === "easeEach" || Op(z, _[z], C, _.easeEach);
          for (z in C)
            for (M = C[z].sort(function(N, D) {
              return N.t - D.t;
            }), E = 0, w = 0; w < M.length; w++)
              O = M[w], j = {
                ease: O.e,
                duration: (O.t - (w ? M[w - 1].t : 0)) / 100 * c
              }, j[z] = O.v, k.to(b, j, E), E += j.duration;
          k.duration() < c && k.to({}, {
            duration: c - k.duration()
          });
        }
      }
      c || s.duration(c = k.duration());
    } else
      s.timeline = 0;
    return h === !0 && !ko && (zt = ft(s), le.killTweensOf(b), zt = 0), et(g, ft(s), o), a.reversed && s.reverse(), a.paused && s.paused(!0), (u || !c && !_ && s._start === fe(g._time) && Pe(u) && pp(ft(s)) && g.data !== "nested") && (s._tTime = -re, s.render(Math.max(0, -d) || 0)), y && kl(ft(s), y), s;
  }
  var t = e.prototype;
  return t.render = function(a, o, n) {
    var s = this._time, l = this._tDur, c = this._dur, d = a < 0, u = a > l - re && !d ? l : a < re ? 0 : a, f, h, _, m, y, v, g, b, k;
    if (!c)
      hp(this, a, o, n);
    else if (u !== this._tTime || !a || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d || this._lazy) {
      if (f = u, b = this.timeline, this._repeat) {
        if (m = c + this._rDelay, this._repeat < -1 && d)
          return this.totalTime(m * 100 + a, o, n);
        if (f = fe(u % m), u === l ? (_ = this._repeat, f = c) : (y = fe(u / m), _ = ~~y, _ && _ === y ? (f = c, _--) : f > c && (f = c)), v = this._yoyo && _ & 1, v && (k = this._yEase, f = c - f), y = vr(this._tTime, m), f === s && !n && this._initted && _ === y)
          return this._tTime = u, this;
        _ !== y && (b && this._yEase && Il(b, v), this.vars.repeatRefresh && !v && !this._lock && f !== m && this._initted && (this._lock = n = 1, this.render(fe(m * _), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (wl(this, d ? a : f, n, o, u))
          return this._tTime = 0, this;
        if (s !== this._time && !(n && this.vars.repeatRefresh && _ !== y))
          return this;
        if (c !== this._dur)
          return this.render(a, o, n);
      }
      if (this._tTime = u, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = g = (k || this._ease)(f / c), this._from && (this.ratio = g = 1 - g), f && !s && !o && !_ && (De(this, "onStart"), this._tTime !== u))
        return this;
      for (h = this._pt; h; )
        h.r(g, h.d), h = h._next;
      b && b.render(a < 0 ? a : b._dur * b._ease(f / this._dur), o, n) || this._startAt && (this._zTime = a), this._onUpdate && !o && (d && Ha(this, a, o, n), De(this, "onUpdate")), this._repeat && _ !== y && this.vars.onRepeat && !o && this.parent && De(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (d && !this._onUpdate && Ha(this, a, !0, !0), (a || !c) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && Ot(this, 1), !o && !(d && !s) && (u || s || v) && (De(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(a) {
    return (!a || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(a), i.prototype.invalidate.call(this, a);
  }, t.resetTo = function(a, o, n, s, l) {
    oi || Re.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), d;
    return this._initted || Eo(this, c), d = this._ease(c / this._dur), Bp(this, a, o, n, s, d, c, l) ? this.resetTo(a, o, n, s, 1) : (ia(this, 0), this.parent || vl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(a, o) {
    if (o === void 0 && (o = "all"), !a && (!o || o === "all"))
      return this._lazy = this._pt = 0, this.parent ? $r(this) : this.scrollTrigger && this.scrollTrigger.kill(!!me), this;
    if (this.timeline) {
      var n = this.timeline.totalDuration();
      return this.timeline.killTweensOf(a, o, zt && zt.vars.overwrite !== !0)._first || $r(this), this.parent && n !== this.timeline.totalDuration() && yr(this, this._dur * this.timeline._tDur / n, 0, 1), this;
    }
    var s = this._targets, l = a ? Ke(a) : s, c = this._ptLookup, d = this._pt, u, f, h, _, m, y, v;
    if ((!o || o === "all") && dp(s, l))
      return o === "all" && (this._pt = 0), $r(this);
    for (u = this._op = this._op || [], o !== "all" && (ge(o) && (m = {}, Ee(o, function(g) {
      return m[g] = 1;
    }), o = m), o = Np(s, o)), v = s.length; v--; )
      if (~l.indexOf(s[v])) {
        f = c[v], o === "all" ? (u[v] = o, _ = f, h = {}) : (h = u[v] = u[v] || {}, _ = o);
        for (m in _)
          y = f && f[m], y && ((!("kill" in y.d) || y.d.kill(m) === !0) && ta(this, y, "_pt"), delete f[m]), h !== "all" && (h[m] = 1);
      }
    return this._initted && !this._pt && d && $r(this), this;
  }, e.to = function(a, o) {
    return new e(a, o, arguments[2]);
  }, e.from = function(a, o) {
    return qr(1, arguments);
  }, e.delayedCall = function(a, o, n, s) {
    return new e(o, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: a,
      onComplete: o,
      onReverseComplete: o,
      onCompleteParams: n,
      onReverseCompleteParams: n,
      callbackScope: s
    });
  }, e.fromTo = function(a, o, n) {
    return qr(2, arguments);
  }, e.set = function(a, o) {
    return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(a, o);
  }, e.killTweensOf = function(a, o, n) {
    return le.killTweensOf(a, o, n);
  }, e;
}(ni);
Ve(pe.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ee("staggerTo,staggerFrom,staggerFromTo", function(i) {
  pe[i] = function() {
    var e = new Ce(), t = Ga.call(arguments, 0);
    return t.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), e[i].apply(e, t);
  };
});
var Lo = function(e, t, r) {
  return e[t] = r;
}, $l = function(e, t, r) {
  return e[t](r);
}, Ip = function(e, t, r, a) {
  return e[t](a.fp, r);
}, Rp = function(e, t, r) {
  return e.setAttribute(t, r);
}, Mo = function(e, t) {
  return de(e[t]) ? $l : wo(e[t]) && e.setAttribute ? Rp : Lo;
}, Hl = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Dp = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Ul = function(e, t) {
  var r = t._pt, a = "";
  if (!e && t.b)
    a = t.b;
  else if (e === 1 && t.e)
    a = t.e;
  else {
    for (; r; )
      a = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + a, r = r._next;
    a += t.c;
  }
  t.set(t.t, t.p, a, t);
}, Bo = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, jp = function(e, t, r, a) {
  for (var o = this._pt, n; o; )
    n = o._next, o.p === a && o.modifier(e, t, r), o = n;
}, Fp = function(e) {
  for (var t = this._pt, r, a; t; )
    a = t._next, t.p === e && !t.op || t.op === e ? ta(this, t, "_pt") : t.dep || (r = 1), t = a;
  return !r;
}, Vp = function(e, t, r, a) {
  a.mSet(e, t, a.m.call(a.tween, r, a.mt), a);
}, Gl = function(e) {
  for (var t = e._pt, r, a, o, n; t; ) {
    for (r = t._next, a = o; a && a.pr > t.pr; )
      a = a._next;
    (t._prev = a ? a._prev : n) ? t._prev._next = t : o = t, (t._next = a) ? a._prev = t : n = t, t = r;
  }
  e._pt = o;
}, Le = /* @__PURE__ */ function() {
  function i(t, r, a, o, n, s, l, c, d) {
    this.t = r, this.s = o, this.c = n, this.p = a, this.r = s || Hl, this.d = l || this, this.set = c || Lo, this.pr = d || 0, this._next = t, t && (t._prev = this);
  }
  var e = i.prototype;
  return e.modifier = function(r, a, o) {
    this.mSet = this.mSet || this.set, this.set = Vp, this.m = r, this.mt = o, this.tween = a;
  }, i;
}();
Ee(Ao + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(i) {
  return zo[i] = 1;
});
Fe.TweenMax = Fe.TweenLite = pe;
Fe.TimelineLite = Fe.TimelineMax = Ce;
le = new Ce({
  sortChildren: !1,
  defaults: _r,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
je.stringFilter = Nl;
var qt = [], Ai = {}, $p = [], Bn = 0, Hp = 0, ga = function(e) {
  return (Ai[e] || $p).map(function(t) {
    return t();
  });
}, qa = function() {
  var e = Date.now(), t = [];
  e - Bn > 2 && (ga("matchMediaInit"), qt.forEach(function(r) {
    var a = r.queries, o = r.conditions, n, s, l, c;
    for (s in a)
      n = Xe.matchMedia(a[s]).matches, n && (l = 1), n !== o[s] && (o[s] = n, c = 1);
    c && (r.revert(), l && t.push(r));
  }), ga("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(a) {
      return r.add(null, a);
    });
  }), Bn = e, ga("matchMedia"));
}, Kl = /* @__PURE__ */ function() {
  function i(t, r) {
    this.selector = r && Ka(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Hp++, t && this.add(t);
  }
  var e = i.prototype;
  return e.add = function(r, a, o) {
    de(r) && (o = a, a = r, r = de);
    var n = this, s = function() {
      var c = oe, d = n.selector, u;
      return c && c !== n && c.data.push(n), o && (n.selector = Ka(o)), oe = n, u = a.apply(n, arguments), de(u) && n._r.push(u), oe = c, n.selector = d, n.isReverted = !1, u;
    };
    return n.last = s, r === de ? s(n, function(l) {
      return n.add(null, l);
    }) : r ? n[r] = s : s;
  }, e.ignore = function(r) {
    var a = oe;
    oe = null, r(this), oe = a;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(a) {
      return a instanceof i ? r.push.apply(r, a.getTweens()) : a instanceof pe && !(a.parent && a.parent.data === "nested") && r.push(a);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, a) {
    var o = this;
    if (r ? function() {
      for (var s = o.getTweens(), l = o.data.length, c; l--; )
        c = o.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(d) {
          return s.splice(s.indexOf(d), 1);
        }));
      for (s.map(function(d) {
        return {
          g: d._dur || d._delay || d._sat && !d._sat.vars.immediateRender ? d.globalTime(0) : -1 / 0,
          t: d
        };
      }).sort(function(d, u) {
        return u.g - d.g || -1 / 0;
      }).forEach(function(d) {
        return d.t.revert(r);
      }), l = o.data.length; l--; )
        c = o.data[l], c instanceof Ce ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof pe) && c.revert && c.revert(r);
      o._r.forEach(function(d) {
        return d(r, o);
      }), o.isReverted = !0;
    }() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), a)
      for (var n = qt.length; n--; )
        qt[n].id === this.id && qt.splice(n, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, i;
}(), Up = /* @__PURE__ */ function() {
  function i(t) {
    this.contexts = [], this.scope = t, oe && oe.data.push(this);
  }
  var e = i.prototype;
  return e.add = function(r, a, o) {
    st(r) || (r = {
      matches: r
    });
    var n = new Kl(0, o || this.scope), s = n.conditions = {}, l, c, d;
    oe && !n.selector && (n.selector = oe.selector), this.contexts.push(n), a = n.add("onMatch", a), n.queries = r;
    for (c in r)
      c === "all" ? d = 1 : (l = Xe.matchMedia(r[c]), l && (qt.indexOf(n) < 0 && qt.push(n), (s[c] = l.matches) && (d = 1), l.addListener ? l.addListener(qa) : l.addEventListener("change", qa)));
    return d && a(n, function(u) {
      return n.add(null, u);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(a) {
      return a.kill(r, !0);
    });
  }, i;
}(), Ri = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(a) {
      return Ll(a);
    });
  },
  timeline: function(e) {
    return new Ce(e);
  },
  getTweensOf: function(e, t) {
    return le.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, a) {
    ge(e) && (e = Ke(e)[0]);
    var o = Kt(e || {}).get, n = r ? bl : _l;
    return r === "native" && (r = ""), e && (t ? n((Oe[t] && Oe[t].get || o)(e, t, r, a)) : function(s, l, c) {
      return n((Oe[s] && Oe[s].get || o)(e, s, l, c));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = Ke(e), e.length > 1) {
      var a = e.map(function(d) {
        return Ne.quickSetter(d, t, r);
      }), o = a.length;
      return function(d) {
        for (var u = o; u--; )
          a[u](d);
      };
    }
    e = e[0] || {};
    var n = Oe[t], s = Kt(e), l = s.harness && (s.harness.aliases || {})[t] || t, c = n ? function(d) {
      var u = new n();
      or._pt = 0, u.init(e, r ? d + r : d, or, 0, [e]), u.render(1, u), or._pt && Bo(1, or);
    } : s.set(e, l);
    return n ? c : function(d) {
      return c(e, l, r ? d + r : d, s, 1);
    };
  },
  quickTo: function(e, t, r) {
    var a, o = Ne.to(e, Ve((a = {}, a[t] = "+=0.1", a.paused = !0, a.stagger = 0, a), r || {})), n = function(l, c, d) {
      return o.resetTo(t, l, c, d);
    };
    return n.tween = o, n;
  },
  isTweening: function(e) {
    return le.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Yt(e.ease, _r.ease)), Tn(_r, e || {});
  },
  config: function(e) {
    return Tn(je, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, a = e.plugins, o = e.defaults, n = e.extendTimeline;
    (a || "").split(",").forEach(function(s) {
      return s && !Oe[s] && !Fe[s] && ri(t + " effect requires " + s + " plugin.");
    }), ua[t] = function(s, l, c) {
      return r(Ke(s), Ve(l || {}, o), c);
    }, n && (Ce.prototype[t] = function(s, l, c) {
      return this.add(ua[t](s, st(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    Z[e] = Yt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Yt(e, t) : Z;
  },
  getById: function(e) {
    return le.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new Ce(e), a, o;
    for (r.smoothChildTiming = Pe(e.smoothChildTiming), le.remove(r), r._dp = 0, r._time = r._tTime = le._time, a = le._first; a; )
      o = a._next, (t || !(!a._dur && a instanceof pe && a.vars.onComplete === a._targets[0])) && et(r, a, a._start - a._delay), a = o;
    return et(le, r, 0), r;
  },
  context: function(e, t) {
    return e ? new Kl(e, t) : oe;
  },
  matchMedia: function(e) {
    return new Up(e);
  },
  matchMediaRefresh: function() {
    return qt.forEach(function(e) {
      var t = e.conditions, r, a;
      for (a in t)
        t[a] && (t[a] = !1, r = 1);
      r && e.revert();
    }) || qa();
  },
  addEventListener: function(e, t) {
    var r = Ai[e] || (Ai[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = Ai[e], a = r && r.indexOf(t);
    a >= 0 && r.splice(a, 1);
  },
  utils: {
    wrap: wp,
    wrapYoyo: xp,
    distribute: Sl,
    random: Al,
    snap: zl,
    normalize: kp,
    getUnit: ve,
    clamp: _p,
    splitColor: Ml,
    toArray: Ke,
    selector: Ka,
    mapRange: Pl,
    pipe: vp,
    unitize: yp,
    interpolate: Cp,
    shuffle: Cl
  },
  install: pl,
  effects: ua,
  ticker: Re,
  updateRoot: Ce.updateRoot,
  plugins: Oe,
  globalTimeline: le,
  core: {
    PropTween: Le,
    globals: fl,
    Tween: pe,
    Timeline: Ce,
    Animation: ni,
    getCache: Kt,
    _removeLinkedListItem: ta,
    reverting: function() {
      return me;
    },
    context: function(e) {
      return e && oe && (oe.data.push(e), e._ctx = oe), oe;
    },
    suppressOverwrites: function(e) {
      return ko = e;
    }
  }
};
Ee("to,from,fromTo,delayedCall,set,killTweensOf", function(i) {
  return Ri[i] = pe[i];
});
Re.add(Ce.updateRoot);
or = Ri.to({}, {
  duration: 0
});
var Gp = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, Kp = function(e, t) {
  var r = e._targets, a, o, n;
  for (a in t)
    for (o = r.length; o--; )
      n = e._ptLookup[o][a], n && (n = n.d) && (n._pt && (n = Gp(n, a)), n && n.modifier && n.modifier(t[a], e, r[o], a));
}, ma = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(a, o, n) {
      n._onInit = function(s) {
        var l, c;
        if (ge(o) && (l = {}, Ee(o, function(d) {
          return l[d] = 1;
        }), o = l), t) {
          l = {};
          for (c in o)
            l[c] = t(o[c]);
          o = l;
        }
        Kp(s, o);
      };
    }
  };
}, Ne = Ri.registerPlugin({
  name: "attr",
  init: function(e, t, r, a, o) {
    var n, s, l;
    this.tween = r;
    for (n in t)
      l = e.getAttribute(n) || "", s = this.add(e, "setAttribute", (l || 0) + "", t[n], a, o, 0, 0, n), s.op = n, s.b = l, this._props.push(n);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      me ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, ma("roundProps", Wa), ma("modifiers"), ma("snap", zl)) || Ri;
pe.version = Ce.version = Ne.version = "3.12.7";
ul = 1;
xo() && kr();
Z.Power0;
Z.Power1;
Z.Power2;
Z.Power3;
Z.Power4;
Z.Linear;
Z.Quad;
Z.Cubic;
Z.Quart;
Z.Quint;
Z.Strong;
Z.Elastic;
Z.Back;
Z.SteppedEase;
Z.Bounce;
Z.Sine;
Z.Expo;
Z.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Nn, At, cr, No, Ut, On, Oo, Wp = function() {
  return typeof window < "u";
}, yt = {}, Ft = 180 / Math.PI, dr = Math.PI / 180, er = Math.atan2, In = 1e8, Io = /([A-Z])/g, Yp = /(left|right|width|margin|padding|x)/i, qp = /[\s,\(]\S/, tt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Za = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Zp = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Jp = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Xp = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, Wl = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Yl = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Qp = function(e, t, r) {
  return e.style[t] = r;
}, ef = function(e, t, r) {
  return e.style.setProperty(t, r);
}, tf = function(e, t, r) {
  return e._gsap[t] = r;
}, rf = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, af = function(e, t, r, a, o) {
  var n = e._gsap;
  n.scaleX = n.scaleY = r, n.renderTransform(o, n);
}, of = function(e, t, r, a, o) {
  var n = e._gsap;
  n[t] = r, n.renderTransform(o, n);
}, ce = "transform", Me = ce + "Origin", nf = function i(e, t) {
  var r = this, a = this.target, o = a.style, n = a._gsap;
  if (e in yt && o) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = tt[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return r.tfm[s] = ht(a, s);
      }) : this.tfm[e] = n.x ? n[e] : ht(a, e), e === Me && (this.tfm.zOrigin = n.zOrigin);
    else
      return tt.transform.split(",").forEach(function(s) {
        return i.call(r, s, t);
      });
    if (this.props.indexOf(ce) >= 0)
      return;
    n.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(Me, t, "")), e = ce;
  }
  (o || t) && this.props.push(e, t, o[e]);
}, ql = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, sf = function() {
  var e = this.props, t = this.target, r = t.style, a = t._gsap, o, n;
  for (o = 0; o < e.length; o += 3)
    e[o + 1] ? e[o + 1] === 2 ? t[e[o]](e[o + 2]) : t[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(Io, "-$1").toLowerCase());
  if (this.tfm) {
    for (n in this.tfm)
      a[n] = this.tfm[n];
    a.svg && (a.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), o = Oo(), (!o || !o.isStart) && !r[ce] && (ql(r), a.zOrigin && r[Me] && (r[Me] += " " + a.zOrigin + "px", a.zOrigin = 0, a.renderTransform()), a.uncache = 1);
  }
}, Zl = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: sf,
    save: nf
  };
  return e._gsap || Ne.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(a) {
    return r.save(a);
  }), r;
}, Jl, Ja = function(e, t) {
  var r = At.createElementNS ? At.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : At.createElement(e);
  return r && r.style ? r : At.createElement(e);
}, nt = function i(e, t, r) {
  var a = getComputedStyle(e);
  return a[t] || a.getPropertyValue(t.replace(Io, "-$1").toLowerCase()) || a.getPropertyValue(t) || !r && i(e, wr(t) || t, 1) || "";
}, Rn = "O,Moz,ms,Ms,Webkit".split(","), wr = function(e, t, r) {
  var a = t || Ut, o = a.style, n = 5;
  if (e in o && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(Rn[n] + e in o); )
    ;
  return n < 0 ? null : (n === 3 ? "ms" : n >= 0 ? Rn[n] : "") + e;
}, Xa = function() {
  Wp() && window.document && (Nn = window, At = Nn.document, cr = At.documentElement, Ut = Ja("div") || {
    style: {}
  }, Ja("div"), ce = wr(ce), Me = ce + "Origin", Ut.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Jl = !!wr("perspective"), Oo = Ne.core.reverting, No = 1);
}, Dn = function(e) {
  var t = e.ownerSVGElement, r = Ja("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), a = e.cloneNode(!0), o;
  a.style.display = "block", r.appendChild(a), cr.appendChild(r);
  try {
    o = a.getBBox();
  } catch {
  }
  return r.removeChild(a), cr.removeChild(r), o;
}, jn = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, Xl = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = Dn(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = Dn(e)), t && !t.width && !t.x && !t.y ? {
    x: +jn(e, ["x", "cx", "x1"]) || 0,
    y: +jn(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Ql = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Xl(e));
}, Zt = function(e, t) {
  if (t) {
    var r = e.style, a;
    t in yt && t !== Me && (t = ce), r.removeProperty ? (a = t.substr(0, 2), (a === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(a === "--" ? t : t.replace(Io, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, Tt = function(e, t, r, a, o, n) {
  var s = new Le(e._pt, t, r, 0, 1, n ? Yl : Wl);
  return e._pt = s, s.b = a, s.e = o, e._props.push(r), s;
}, Fn = {
  deg: 1,
  rad: 1,
  turn: 1
}, lf = {
  grid: 1,
  flex: 1
}, It = function i(e, t, r, a) {
  var o = parseFloat(r) || 0, n = (r + "").trim().substr((o + "").length) || "px", s = Ut.style, l = Yp.test(t), c = e.tagName.toLowerCase() === "svg", d = (c ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, f = a === "px", h = a === "%", _, m, y, v;
  if (a === n || !o || Fn[a] || Fn[n])
    return o;
  if (n !== "px" && !f && (o = i(e, t, r, "px")), v = e.getCTM && Ql(e), (h || n === "%") && (yt[t] || ~t.indexOf("adius")))
    return _ = v ? e.getBBox()[l ? "width" : "height"] : e[d], ue(h ? o / _ * u : o / 100 * _);
  if (s[l ? "width" : "height"] = u + (f ? n : a), m = a !== "rem" && ~t.indexOf("adius") || a === "em" && e.appendChild && !c ? e : e.parentNode, v && (m = (e.ownerSVGElement || {}).parentNode), (!m || m === At || !m.appendChild) && (m = At.body), y = m._gsap, y && h && y.width && l && y.time === Re.time && !y.uncache)
    return ue(o / y.width * u);
  if (h && (t === "height" || t === "width")) {
    var g = e.style[t];
    e.style[t] = u + a, _ = e[d], g ? e.style[t] = g : Zt(e, t);
  } else
    (h || n === "%") && !lf[nt(m, "display")] && (s.position = nt(e, "position")), m === e && (s.position = "static"), m.appendChild(Ut), _ = Ut[d], m.removeChild(Ut), s.position = "absolute";
  return l && h && (y = Kt(m), y.time = Re.time, y.width = m[d]), ue(f ? _ * o / u : _ && o ? u / _ * o : 0);
}, ht = function(e, t, r, a) {
  var o;
  return No || Xa(), t in tt && t !== "transform" && (t = tt[t], ~t.indexOf(",") && (t = t.split(",")[0])), yt[t] && t !== "transform" ? (o = li(e, a), o = t !== "transformOrigin" ? o[t] : o.svg ? o.origin : ji(nt(e, Me)) + " " + o.zOrigin + "px") : (o = e.style[t], (!o || o === "auto" || a || ~(o + "").indexOf("calc(")) && (o = Di[t] && Di[t](e, t, r) || nt(e, t) || gl(e, t) || (t === "opacity" ? 1 : 0))), r && !~(o + "").trim().indexOf(" ") ? It(e, t, o, r) + r : o;
}, cf = function(e, t, r, a) {
  if (!r || r === "none") {
    var o = wr(t, e, 1), n = o && nt(e, o, 1);
    n && n !== r ? (t = o, r = n) : t === "borderColor" && (r = nt(e, "borderTopColor"));
  }
  var s = new Le(this._pt, e.style, t, 0, 1, Ul), l = 0, c = 0, d, u, f, h, _, m, y, v, g, b, k, w;
  if (s.b = r, s.e = a, r += "", a += "", a === "auto" && (m = e.style[t], e.style[t] = a, a = nt(e, t) || a, m ? e.style[t] = m : Zt(e, t)), d = [r, a], Nl(d), r = d[0], a = d[1], f = r.match(ar) || [], w = a.match(ar) || [], w.length) {
    for (; u = ar.exec(a); )
      y = u[0], g = a.substring(l, u.index), _ ? _ = (_ + 1) % 5 : (g.substr(-5) === "rgba(" || g.substr(-5) === "hsla(") && (_ = 1), y !== (m = f[c++] || "") && (h = parseFloat(m) || 0, k = m.substr((h + "").length), y.charAt(1) === "=" && (y = lr(h, y) + k), v = parseFloat(y), b = y.substr((v + "").length), l = ar.lastIndex - b.length, b || (b = b || je.units[t] || k, l === a.length && (a += b, s.e += b)), k !== b && (h = It(e, t, m, b) || 0), s._pt = {
        _next: s._pt,
        p: g || c === 1 ? g : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: h,
        c: v - h,
        m: _ && _ < 4 || t === "zIndex" ? Math.round : 0
      });
    s.c = l < a.length ? a.substring(l, a.length) : "";
  } else
    s.r = t === "display" && a === "none" ? Yl : Wl;
  return cl.test(a) && (s.e = 0), this._pt = s, s;
}, Vn = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, df = function(e) {
  var t = e.split(" "), r = t[0], a = t[1] || "50%";
  return (r === "top" || r === "bottom" || a === "left" || a === "right") && (e = r, r = a, a = e), t[0] = Vn[r] || r, t[1] = Vn[a] || a, t.join(" ");
}, uf = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, a = r.style, o = t.u, n = r._gsap, s, l, c;
    if (o === "all" || o === !0)
      a.cssText = "", l = 1;
    else
      for (o = o.split(","), c = o.length; --c > -1; )
        s = o[c], yt[s] && (l = 1, s = s === "transformOrigin" ? Me : ce), Zt(r, s);
    l && (Zt(r, ce), n && (n.svg && r.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", li(r, 1), n.uncache = 1, ql(a)));
  }
}, Di = {
  clearProps: function(e, t, r, a, o) {
    if (o.data !== "isFromStart") {
      var n = e._pt = new Le(e._pt, t, r, 0, 0, uf);
      return n.u = a, n.pr = -10, n.tween = o, e._props.push(r), 1;
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
}, si = [1, 0, 0, 1, 0, 0], ec = {}, tc = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, $n = function(e) {
  var t = nt(e, ce);
  return tc(t) ? si : t.substr(7).match(ll).map(ue);
}, Ro = function(e, t) {
  var r = e._gsap || Kt(e), a = e.style, o = $n(e), n, s, l, c;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, o = [l.a, l.b, l.c, l.d, l.e, l.f], o.join(",") === "1,0,0,1,0,0" ? si : o) : (o === si && !e.offsetParent && e !== cr && !r.svg && (l = a.display, a.display = "block", n = e.parentNode, (!n || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, s = e.nextElementSibling, cr.appendChild(e)), o = $n(e), l ? a.display = l : Zt(e, "display"), c && (s ? n.insertBefore(e, s) : n ? n.appendChild(e) : cr.removeChild(e))), t && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
}, Qa = function(e, t, r, a, o, n) {
  var s = e._gsap, l = o || Ro(e, !0), c = s.xOrigin || 0, d = s.yOrigin || 0, u = s.xOffset || 0, f = s.yOffset || 0, h = l[0], _ = l[1], m = l[2], y = l[3], v = l[4], g = l[5], b = t.split(" "), k = parseFloat(b[0]) || 0, w = parseFloat(b[1]) || 0, C, S, z, x;
  r ? l !== si && (S = h * y - _ * m) && (z = k * (y / S) + w * (-m / S) + (m * g - y * v) / S, x = k * (-_ / S) + w * (h / S) - (h * g - _ * v) / S, k = z, w = x) : (C = Xl(e), k = C.x + (~b[0].indexOf("%") ? k / 100 * C.width : k), w = C.y + (~(b[1] || b[0]).indexOf("%") ? w / 100 * C.height : w)), a || a !== !1 && s.smooth ? (v = k - c, g = w - d, s.xOffset = u + (v * h + g * m) - v, s.yOffset = f + (v * _ + g * y) - g) : s.xOffset = s.yOffset = 0, s.xOrigin = k, s.yOrigin = w, s.smooth = !!a, s.origin = t, s.originIsAbsolute = !!r, e.style[Me] = "0px 0px", n && (Tt(n, s, "xOrigin", c, k), Tt(n, s, "yOrigin", d, w), Tt(n, s, "xOffset", u, s.xOffset), Tt(n, s, "yOffset", f, s.yOffset)), e.setAttribute("data-svg-origin", k + " " + w);
}, li = function(e, t) {
  var r = e._gsap || new Dl(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var a = e.style, o = r.scaleX < 0, n = "px", s = "deg", l = getComputedStyle(e), c = nt(e, Me) || "0", d, u, f, h, _, m, y, v, g, b, k, w, C, S, z, x, T, A, E, M, O, j, N, D, P, L, $, Q, H, q, be, xe;
  return d = u = f = m = y = v = g = b = k = 0, h = _ = 1, r.svg = !!(e.getCTM && Ql(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (a[ce] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ce] !== "none" ? l[ce] : "")), a.scale = a.rotate = a.translate = "none"), S = Ro(e, r.svg), r.svg && (r.uncache ? (P = e.getBBox(), c = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", D = "") : D = !t && e.getAttribute("data-svg-origin"), Qa(e, D || c, !!D || r.originIsAbsolute, r.smooth !== !1, S)), w = r.xOrigin || 0, C = r.yOrigin || 0, S !== si && (A = S[0], E = S[1], M = S[2], O = S[3], d = j = S[4], u = N = S[5], S.length === 6 ? (h = Math.sqrt(A * A + E * E), _ = Math.sqrt(O * O + M * M), m = A || E ? er(E, A) * Ft : 0, g = M || O ? er(M, O) * Ft + m : 0, g && (_ *= Math.abs(Math.cos(g * dr))), r.svg && (d -= w - (w * A + C * M), u -= C - (w * E + C * O))) : (xe = S[6], q = S[7], $ = S[8], Q = S[9], H = S[10], be = S[11], d = S[12], u = S[13], f = S[14], z = er(xe, H), y = z * Ft, z && (x = Math.cos(-z), T = Math.sin(-z), D = j * x + $ * T, P = N * x + Q * T, L = xe * x + H * T, $ = j * -T + $ * x, Q = N * -T + Q * x, H = xe * -T + H * x, be = q * -T + be * x, j = D, N = P, xe = L), z = er(-M, H), v = z * Ft, z && (x = Math.cos(-z), T = Math.sin(-z), D = A * x - $ * T, P = E * x - Q * T, L = M * x - H * T, be = O * T + be * x, A = D, E = P, M = L), z = er(E, A), m = z * Ft, z && (x = Math.cos(z), T = Math.sin(z), D = A * x + E * T, P = j * x + N * T, E = E * x - A * T, N = N * x - j * T, A = D, j = P), y && Math.abs(y) + Math.abs(m) > 359.9 && (y = m = 0, v = 180 - v), h = ue(Math.sqrt(A * A + E * E + M * M)), _ = ue(Math.sqrt(N * N + xe * xe)), z = er(j, N), g = Math.abs(z) > 2e-4 ? z * Ft : 0, k = be ? 1 / (be < 0 ? -be : be) : 0), r.svg && (D = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !tc(nt(e, ce)), D && e.setAttribute("transform", D))), Math.abs(g) > 90 && Math.abs(g) < 270 && (o ? (h *= -1, g += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (_ *= -1, g += g <= 0 ? 180 : -180)), t = t || r.uncache, r.x = d - ((r.xPercent = d && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + n, r.y = u - ((r.yPercent = u && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + n, r.z = f + n, r.scaleX = ue(h), r.scaleY = ue(_), r.rotation = ue(m) + s, r.rotationX = ue(y) + s, r.rotationY = ue(v) + s, r.skewX = g + s, r.skewY = b + s, r.transformPerspective = k + n, (r.zOrigin = parseFloat(c.split(" ")[2]) || !t && r.zOrigin || 0) && (a[Me] = ji(c)), r.xOffset = r.yOffset = 0, r.force3D = je.force3D, r.renderTransform = r.svg ? ff : Jl ? rc : pf, r.uncache = 0, r;
}, ji = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, _a = function(e, t, r) {
  var a = ve(t);
  return ue(parseFloat(t) + parseFloat(It(e, "x", r + "px", a))) + a;
}, pf = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, rc(e, t);
}, Dt = "0deg", Or = "0px", jt = ") ", rc = function(e, t) {
  var r = t || this, a = r.xPercent, o = r.yPercent, n = r.x, s = r.y, l = r.z, c = r.rotation, d = r.rotationY, u = r.rotationX, f = r.skewX, h = r.skewY, _ = r.scaleX, m = r.scaleY, y = r.transformPerspective, v = r.force3D, g = r.target, b = r.zOrigin, k = "", w = v === "auto" && e && e !== 1 || v === !0;
  if (b && (u !== Dt || d !== Dt)) {
    var C = parseFloat(d) * dr, S = Math.sin(C), z = Math.cos(C), x;
    C = parseFloat(u) * dr, x = Math.cos(C), n = _a(g, n, S * x * -b), s = _a(g, s, -Math.sin(C) * -b), l = _a(g, l, z * x * -b + b);
  }
  y !== Or && (k += "perspective(" + y + jt), (a || o) && (k += "translate(" + a + "%, " + o + "%) "), (w || n !== Or || s !== Or || l !== Or) && (k += l !== Or || w ? "translate3d(" + n + ", " + s + ", " + l + ") " : "translate(" + n + ", " + s + jt), c !== Dt && (k += "rotate(" + c + jt), d !== Dt && (k += "rotateY(" + d + jt), u !== Dt && (k += "rotateX(" + u + jt), (f !== Dt || h !== Dt) && (k += "skew(" + f + ", " + h + jt), (_ !== 1 || m !== 1) && (k += "scale(" + _ + ", " + m + jt), g.style[ce] = k || "translate(0, 0)";
}, ff = function(e, t) {
  var r = t || this, a = r.xPercent, o = r.yPercent, n = r.x, s = r.y, l = r.rotation, c = r.skewX, d = r.skewY, u = r.scaleX, f = r.scaleY, h = r.target, _ = r.xOrigin, m = r.yOrigin, y = r.xOffset, v = r.yOffset, g = r.forceCSS, b = parseFloat(n), k = parseFloat(s), w, C, S, z, x;
  l = parseFloat(l), c = parseFloat(c), d = parseFloat(d), d && (d = parseFloat(d), c += d, l += d), l || c ? (l *= dr, c *= dr, w = Math.cos(l) * u, C = Math.sin(l) * u, S = Math.sin(l - c) * -f, z = Math.cos(l - c) * f, c && (d *= dr, x = Math.tan(c - d), x = Math.sqrt(1 + x * x), S *= x, z *= x, d && (x = Math.tan(d), x = Math.sqrt(1 + x * x), w *= x, C *= x)), w = ue(w), C = ue(C), S = ue(S), z = ue(z)) : (w = u, z = f, C = S = 0), (b && !~(n + "").indexOf("px") || k && !~(s + "").indexOf("px")) && (b = It(h, "x", n, "px"), k = It(h, "y", s, "px")), (_ || m || y || v) && (b = ue(b + _ - (_ * w + m * S) + y), k = ue(k + m - (_ * C + m * z) + v)), (a || o) && (x = h.getBBox(), b = ue(b + a / 100 * x.width), k = ue(k + o / 100 * x.height)), x = "matrix(" + w + "," + C + "," + S + "," + z + "," + b + "," + k + ")", h.setAttribute("transform", x), g && (h.style[ce] = x);
}, hf = function(e, t, r, a, o) {
  var n = 360, s = ge(o), l = parseFloat(o) * (s && ~o.indexOf("rad") ? Ft : 1), c = l - a, d = a + c + "deg", u, f;
  return s && (u = o.split("_")[1], u === "short" && (c %= n, c !== c % (n / 2) && (c += c < 0 ? n : -n)), u === "cw" && c < 0 ? c = (c + n * In) % n - ~~(c / n) * n : u === "ccw" && c > 0 && (c = (c - n * In) % n - ~~(c / n) * n)), e._pt = f = new Le(e._pt, t, r, a, c, Zp), f.e = d, f.u = "deg", e._props.push(r), f;
}, Hn = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, gf = function(e, t, r) {
  var a = Hn({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", n = r.style, s, l, c, d, u, f, h, _;
  a.svg ? (c = r.getAttribute("transform"), r.setAttribute("transform", ""), n[ce] = t, s = li(r, 1), Zt(r, ce), r.setAttribute("transform", c)) : (c = getComputedStyle(r)[ce], n[ce] = t, s = li(r, 1), n[ce] = c);
  for (l in yt)
    c = a[l], d = s[l], c !== d && o.indexOf(l) < 0 && (h = ve(c), _ = ve(d), u = h !== _ ? It(r, l, c, _) : parseFloat(c), f = parseFloat(d), e._pt = new Le(e._pt, s, l, u, f - u, Za), e._pt.u = _ || 0, e._props.push(l));
  Hn(s, a);
};
Ee("padding,margin,Width,Radius", function(i, e) {
  var t = "Top", r = "Right", a = "Bottom", o = "Left", n = (e < 3 ? [t, r, a, o] : [t + o, t + r, a + r, a + o]).map(function(s) {
    return e < 2 ? i + s : "border" + s + i;
  });
  Di[e > 1 ? "border" + i : i] = function(s, l, c, d, u) {
    var f, h;
    if (arguments.length < 4)
      return f = n.map(function(_) {
        return ht(s, _, c);
      }), h = f.join(" "), h.split(f[0]).length === 5 ? f[0] : h;
    f = (d + "").split(" "), h = {}, n.forEach(function(_, m) {
      return h[_] = f[m] = f[m] || f[(m - 1) / 2 | 0];
    }), s.init(l, h, u);
  };
});
var ic = {
  name: "css",
  register: Xa,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, a, o) {
    var n = this._props, s = e.style, l = r.vars.startAt, c, d, u, f, h, _, m, y, v, g, b, k, w, C, S, z;
    No || Xa(), this.styles = this.styles || Zl(e), z = this.styles.props, this.tween = r;
    for (m in t)
      if (m !== "autoRound" && (d = t[m], !(Oe[m] && jl(m, t, r, a, e, o)))) {
        if (h = typeof d, _ = Di[m], h === "function" && (d = d.call(r, a, e, o), h = typeof d), h === "string" && ~d.indexOf("random(") && (d = ai(d)), _)
          _(this, e, m, d, r) && (S = 1);
        else if (m.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(m) + "").trim(), d += "", Mt.lastIndex = 0, Mt.test(c) || (y = ve(c), v = ve(d)), v ? y !== v && (c = It(e, m, c, v) + v) : y && (d += y), this.add(s, "setProperty", c, d, a, o, 0, 0, m), n.push(m), z.push(m, 0, s[m]);
        else if (h !== "undefined") {
          if (l && m in l ? (c = typeof l[m] == "function" ? l[m].call(r, a, e, o) : l[m], ge(c) && ~c.indexOf("random(") && (c = ai(c)), ve(c + "") || c === "auto" || (c += je.units[m] || ve(ht(e, m)) || ""), (c + "").charAt(1) === "=" && (c = ht(e, m))) : c = ht(e, m), f = parseFloat(c), g = h === "string" && d.charAt(1) === "=" && d.substr(0, 2), g && (d = d.substr(2)), u = parseFloat(d), m in tt && (m === "autoAlpha" && (f === 1 && ht(e, "visibility") === "hidden" && u && (f = 0), z.push("visibility", 0, s.visibility), Tt(this, s, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), m !== "scale" && m !== "transform" && (m = tt[m], ~m.indexOf(",") && (m = m.split(",")[0]))), b = m in yt, b) {
            if (this.styles.save(m), k || (w = e._gsap, w.renderTransform && !t.parseTransform || li(e, t.parseTransform), C = t.smoothOrigin !== !1 && w.smooth, k = this._pt = new Le(this._pt, s, ce, 0, 1, w.renderTransform, w, 0, -1), k.dep = 1), m === "scale")
              this._pt = new Le(this._pt, w, "scaleY", w.scaleY, (g ? lr(w.scaleY, g + u) : u) - w.scaleY || 0, Za), this._pt.u = 0, n.push("scaleY", m), m += "X";
            else if (m === "transformOrigin") {
              z.push(Me, 0, s[Me]), d = df(d), w.svg ? Qa(e, d, 0, C, 0, this) : (v = parseFloat(d.split(" ")[2]) || 0, v !== w.zOrigin && Tt(this, w, "zOrigin", w.zOrigin, v), Tt(this, s, m, ji(c), ji(d)));
              continue;
            } else if (m === "svgOrigin") {
              Qa(e, d, 1, C, 0, this);
              continue;
            } else if (m in ec) {
              hf(this, w, m, f, g ? lr(f, g + d) : d);
              continue;
            } else if (m === "smoothOrigin") {
              Tt(this, w, "smooth", w.smooth, d);
              continue;
            } else if (m === "force3D") {
              w[m] = d;
              continue;
            } else if (m === "transform") {
              gf(this, d, e);
              continue;
            }
          } else
            m in s || (m = wr(m) || m);
          if (b || (u || u === 0) && (f || f === 0) && !qp.test(d) && m in s)
            y = (c + "").substr((f + "").length), u || (u = 0), v = ve(d) || (m in je.units ? je.units[m] : y), y !== v && (f = It(e, m, c, v)), this._pt = new Le(this._pt, b ? w : s, m, f, (g ? lr(f, g + u) : u) - f, !b && (v === "px" || m === "zIndex") && t.autoRound !== !1 ? Xp : Za), this._pt.u = v || 0, y !== v && v !== "%" && (this._pt.b = c, this._pt.r = Jp);
          else if (m in s)
            cf.call(this, e, m, c, g ? g + d : d);
          else if (m in e)
            this.add(e, m, c || e[m], g ? g + d : d, a, o);
          else if (m !== "parseTransform") {
            So(m, d);
            continue;
          }
          b || (m in s ? z.push(m, 0, s[m]) : typeof e[m] == "function" ? z.push(m, 2, e[m]()) : z.push(m, 1, c || e[m])), n.push(m);
        }
      }
    S && Gl(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Oo())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: ht,
  aliases: tt,
  getSetter: function(e, t, r) {
    var a = tt[t];
    return a && a.indexOf(",") < 0 && (t = a), t in yt && t !== Me && (e._gsap.x || ht(e, "x")) ? r && On === r ? t === "scale" ? rf : tf : (On = r || {}) && (t === "scale" ? af : of) : e.style && !wo(e.style[t]) ? Qp : ~t.indexOf("-") ? ef : Mo(e, t);
  },
  core: {
    _removeProperty: Zt,
    _getMatrix: Ro
  }
};
Ne.utils.checkPrefix = wr;
Ne.core.getStyleSaver = Zl;
(function(i, e, t, r) {
  var a = Ee(i + "," + e + "," + t, function(o) {
    yt[o] = 1;
  });
  Ee(e, function(o) {
    je.units[o] = "deg", ec[o] = 1;
  }), tt[a[13]] = i + "," + e, Ee(r, function(o) {
    var n = o.split(":");
    tt[n[1]] = a[n[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ee("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i) {
  je.units[i] = "px";
});
Ne.registerPlugin(ic);
var ne = Ne.registerPlugin(ic) || Ne;
ne.core.Tween;
const Do = ({
  isOpen: i,
  toggleModal: e,
  content: t,
  title: r,
  onConfirm: a,
  onCancel: o,
  children: n,
  loading: s,
  secondary: l = !1
}) => {
  const {
    t: c
  } = J(), d = K(null), u = K(null), f = () => {
    ne.to(u.current, {
      opacity: 1,
      duration: 0.25,
      zIndex: 2e3,
      pointerEvents: "all",
      display: "block"
    }), ne.to(d.current, {
      opacity: 1,
      duration: 0.5,
      pointerEvents: "all"
    });
  }, h = () => {
    ne.to(u.current, {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
      display: "none"
    }), ne.to(d.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
      onComplete: () => e()
    });
  };
  return V(() => {
    i ? f() : h();
  }, [i]), p("div", {
    ref: u,
    className: "background-alert-wrapper",
    children: [p("style", {
      type: "text/css",
      children: ep
    }), p("div", {
      className: "alert-wrapper",
      onClick: h,
      ref: d
    }), p("div", {
      className: "alert",
      children: [p("div", {
        className: "text-wrapper",
        children: [p(_t, {
          text: r,
          header: !0
        }), t && p(_t, {
          text: t,
          paragraph: !0
        })]
      }), n, l ? p(ot, {
        text: "Done",
        onClick: a,
        primary: !0
      }) : p("div", {
        className: "button-wrapper",
        children: [p(ot, {
          text: c("confirm"),
          onClick: a,
          primary: !0,
          loading: s
        }), p(ot, {
          text: c("cancel"),
          onClick: h
        })]
      })]
    })]
  });
}, mf = `.bom-table{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.bom-table_unsaved-changes{display:flex;justify-content:space-between;align-items:center}.circle{background-color:#fba157;border-radius:100%;display:flex;justify-content:center;align-items:center;color:#fff;height:16px;width:16px;min-width:16px;min-height:16px;font-size:10px}.unsaved-changes{position:relative;width:50%}
`, _f = `.unsaved-changes_wrapper{opacity:0}.title-section{display:flex;align-items:center;justify-content:flex-end;gap:.35rem;cursor:pointer;position:relative;z-index:23;padding-right:15px}.unsaved-content{display:flex;flex-direction:column;align-items:flex-start;width:100%;gap:1rem;border-radius:12px;background-color:#fff;border:1px solid transparent;position:absolute;z-index:21;right:0;height:0;width:0;overflow:hidden;top:-1rem}.animation-wrapper{padding:15px;margin-top:2rem;width:100%;opacity:0;display:flex;flex-direction:column;gap:1rem}.unsaved-part-wrapper{width:100%}.unsaved-part{display:flex;align-items:center;justify-content:space-between;gap:1rem}.revert-button{font-size:10px;padding:3px 10px;border:1px solid #d1d5db;border-radius:12px;transition:all ease-in-out .5s;cursor:pointer}.revert-button:hover{background-color:#000;color:#fff}.close-button{position:absolute;left:6px;top:6px;cursor:pointer}
`, bf = (i) => /* @__PURE__ */ R("svg", { width: 28, height: 28, viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("circle", { cx: 14, cy: 14, r: 14, fill: "white" }), /* @__PURE__ */ R("path", { d: "M11 17L14 14M14 14L17 11M14 14L17 17M14 14L11 11", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let Un = typeof document < "u" ? zr : V, Gn = (i) => i && !Array.isArray(i) && typeof i == "object", bi = [], vf = {}, ac = ne;
const jo = (i, e = bi) => {
  let t = vf;
  Gn(i) ? (t = i, i = null, e = "dependencies" in t ? t.dependencies : bi) : Gn(e) && (t = e, e = "dependencies" in t ? t.dependencies : bi), i && typeof i != "function" && console.warn("First parameter must be a function or config object");
  const { scope: r, revertOnUpdate: a } = t, o = K(!1), n = K(ac.context(() => {
  }, r)), s = K((c) => n.current.add(null, c)), l = e && e.length && !a;
  return l && Un(() => (o.current = !0, () => n.current.revert()), bi), Un(() => {
    if (i && n.current.add(i, r), !l || !o.current)
      return () => n.current.revert();
  }, e), { context: n.current, contextSafe: s.current };
};
jo.register = (i) => {
  ac = i;
};
jo.headless = !0;
const yf = () => {
  const [i, e] = B(window.innerWidth), [t, r] = B(window.innerHeight);
  return V(() => {
    const a = () => {
      e(window.innerWidth), r(window.innerHeight);
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), {
    width: i,
    height: t
  };
}, kf = ({
  unsavedParts: i,
  revertPart: e,
  readOnly: t
}) => {
  const {
    t: r
  } = J(), a = K(null), o = K(), n = K(null), s = K([]), [l, c] = B(i), d = K(null), {
    height: u,
    width: f
  } = yf(), {
    contextSafe: h
  } = jo(() => {
    o.current = ne.timeline({
      paused: !0
    }), o.current.to(a.current, {
      border: "1px solid #d1d5db",
      height: "auto",
      maxHeight: "150px",
      overflowY: "auto",
      width: f >= 640 ? "500px" : "366px"
    }).to(n.current, {
      opacity: 1
    }, "-=.25").reverse(), l.length > 0 ? ne.to(d.current, {
      opacity: 1
    }) : ne.to(d.current, {
      opacity: 0
    });
  }, {
    scope: d,
    dependencies: [l]
  }), _ = h(() => {
    o.current.reversed(!o.current.reversed());
  }), m = (y, v, g) => {
    c(l.filter((b) => b.part !== v)), ne.to(s.current[y], {
      opacity: 0,
      height: 0,
      onComplete: () => e(v, g)
    });
  };
  return V(() => {
    c(i);
  }, [i]), p(F, {
    children: [p("style", {
      type: "text/css",
      children: _f
    }), p("div", {
      className: "unsaved-changes_wrapper",
      ref: d,
      onClick: _,
      children: [p("div", {
        className: "title-section",
        children: [p(_t, {
          text: r("virtualworkshop_unsaved_changes"),
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
        ref: a,
        children: [p("div", {
          className: "close-button",
          children: p(bf, {})
        }), p("div", {
          className: "animation-wrapper",
          ref: n,
          children: l.length > 0 && l.map((y, v) => {
            var g, b;
            return p("div", {
              className: "unsaved-part-wrapper",
              ref: (k) => s.current[y.type + v] = k,
              children: [p(_t, {
                text: (g = y.type) == null ? void 0 : g.replace(/_/g, " "),
                small: !0,
                left: !0,
                bold: !0,
                capitalize: !0
              }), p("div", {
                className: "unsaved-part",
                children: [p(_t, {
                  text: (b = y.part) != null && b.name ? y.part.name : r("virtualworkshop_removed"),
                  small: !0,
                  left: !0
                }), p("div", {
                  className: "revert-button",
                  onClick: () => m(y.type + v, y.part, y.type),
                  children: r("virtualworkshop_revert_btn")
                })]
              })]
            }, y.type + v);
          })
        })]
      })]
    })]
  });
}, Fo = () => {
  JSON.parse(sessionStorage.getItem("bm_categories")).collections.map((e) => {
    sessionStorage.removeItem(`${W.value.key}:${e.handle}:v2`);
  });
}, Vo = {
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
}, wf = `.type,.part{font-size:16px}.wrapper{display:flex;flex-direction:column;gap:.25rem}.part-wrapper{display:flex;justify-content:space-between;align-items:flex-start;padding:10px;transition:all ease-in-out .5s}.can-hover{cursor:pointer}.can-hover:hover{background-color:#d9d9d966;border-radius:12px}.type-wrapper{display:flex}.svg-wrapper{min-width:20px}.updating-spinner{position:absolute;top:2.5rem;right:1rem}
`, xf = (i) => /* @__PURE__ */ R("svg", { width: 20, height: 20, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M15.5 31C24.0605 31 31 24.0604 31 15.5C31 6.93958 24.0605 0 15.5 0C6.93945 0 0 6.93958 0 15.5C0 18.6947 0.966309 21.6637 2.62305 24.1305L8.62451 18.4889C8.74268 18.3724 8.86279 18.2644 8.98389 18.1625C7.87256 15.2234 8.50049 11.7754 10.8701 9.41406C12.6006 7.68994 14.9941 6.82117 17.4365 7.03076C17.5571 7.04114 17.6699 7.08105 17.7671 7.14429C17.8936 7.22681 17.9932 7.349 18.0474 7.49646C18.1226 7.70227 18.0977 7.92786 17.9868 8.11011C17.9575 8.15796 17.9224 8.20288 17.8813 8.24365L13.8589 12.2506L15.271 16.6925L19.7295 18.099L23.7515 14.0924C23.9482 13.8969 24.2407 13.8322 24.502 13.9272C24.7627 14.0217 24.9453 14.2588 24.9692 14.5348C25.1797 16.9679 24.3071 19.3524 22.5771 21.0768C20.2051 23.4396 16.7417 24.0634 13.7905 22.9541C13.6904 23.0771 13.5845 23.197 13.4697 23.3115L8.0708 29.1067C10.2769 30.3137 12.8081 31 15.5 31Z", fill: "#10B981" })), Cf = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db;position:relative}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}
`, oc = ({
  title: i,
  children: e
}) => {
  const [t, r] = B(!1), a = K(null), o = K(null), n = K(null), s = K();
  return V(() => {
    s.current = ne.timeline({
      paused: !0
    });
    const l = ne.context(() => {
      s.current.to(a.current, {
        height: "auto",
        duration: 0.75
      }).to(n.current, {
        rotate: 270
      }, "=").to(o.current, {
        opacity: 1
      }, "-=.5").reverse();
    });
    return () => {
      l.revert();
    };
  }, []), V(() => {
    s.current.reversed(!t);
  }, [t, r]), p(F, {
    children: [p("style", {
      type: "text/css",
      children: Cf
    }), p("div", {
      className: "accordian-wrapper",
      ref: a,
      children: [p("div", {
        className: "header-content",
        onClick: () => r(!t),
        children: [p("h4", {
          className: "category font-semibold",
          children: i
        }), p("div", {
          className: "chevron-wrapper",
          ref: n,
          children: p(qe, {})
        })]
      }), p("div", {
        className: "content",
        ref: o,
        children: e
      })]
    })]
  });
}, Kn = {
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
}, Sf = ({
  bom: i,
  category: e,
  readOnly: t,
  loading: r
}) => {
  const {
    t: a
  } = J(), o = (n, s, l) => {
    Qi.value = {
      part: n,
      category: s,
      type: l
    }, n.id ? X("/part") : X("/update");
  };
  return p(oc, {
    title: a(Kn[e]),
    children: [p("style", {
      type: "text/css",
      children: wf
    }), r && i && p("div", {
      className: "updating-spinner",
      children: p(bt, {
        colour: "#000",
        isLoading: !0
      })
    }), i ? Object.keys(i || {}).map((n, s) => {
      if (e.toLocaleLowerCase() === n.replace(/_/g, " ").toLocaleLowerCase())
        return Object.keys(i[n] || {}).map((l) => {
          const c = i[n][l];
          return p("div", {
            className: "wrapper",
            children: [p("div", {
              className: "type-wrapper",
              children: p("h4", {
                className: "type font-semibold capitalize",
                children: a(Kn[l])
              })
            }), p("div", {
              className: `part-wrapper ${c != null && c.swap && !t ? "can-hover" : ""}`,
              onClick: () => {
                c != null && c.swap && !t && o(c, n == null ? void 0 : n.replace(/_/g, " "), l == null ? void 0 : l.replace(/_/g, " "));
              },
              children: [p("p", {
                className: "part",
                children: c != null && c.name ? c.name : "—"
              }), (c == null ? void 0 : c.swap) && !t && p("div", {
                className: "svg-wrapper",
                children: p(xf, {})
              })]
            }, c == null ? void 0 : c.id)]
          }, l);
        });
    }) : p(bt, {
      colour: "#000",
      isLoading: !0
    })]
  });
}, nc = ({
  categorisedBOM: i,
  bikeSave: e,
  refreshBomb: t,
  readOnly: r,
  loading: a,
  bomError: o
}) => {
  const {
    t: n
  } = J(), l = window.BikeMatrix.getConfig(), [c, d] = B([]), {
    currentBike: u,
    setCurrentBike: f
  } = Be(), h = new ze(l.apiUrl, l.apiKey, l.apiToken, l.isShopify), [_, m] = B(""), y = ye.value, v = [
    "Frame & Fork",
    "Drivetrain",
    "Brakes",
    "Cockpit",
    "Wheels & Tyres"
    // "EBike",
  ], g = async (k, w) => {
    Fo();
    const C = await h.revertComponent(u.key, k.product_category_id, Vo[w.split(" ").join("_")]);
    if (C.success)
      t(), f({
        ...u
      });
    else {
      m(C.error), l.logLevel === "verbose" && console.error(C.logError);
      return;
    }
  }, b = () => {
    let k = [];
    y && Object.keys(i).forEach((w) => {
      typeof i[w] == "object" && i[w] !== null && Object.keys(i[w]).forEach((C) => {
        i[w][C].unsaved_changes && k.push({
          type: C,
          part: i[w][C]
        });
      });
    }), d(k);
  };
  return V(() => {
    b();
  }, [y, i]), p(F, {
    children: [p("style", {
      type: "text/css",
      children: mf
    }), p("div", {
      class: "bom-table_unsaved-changes mt-8",
      children: [p(_t, {
        subheader: !0,
        text: n("virtualworkshop_build_text")
      }), !r && p("div", {
        className: "unsaved-changes",
        children: p(kf, {
          readOnly: r,
          unsavedParts: c,
          revertPart: (k, w) => g(k, w)
        })
      }), !i && r && p(bt, {
        isLoading: !0,
        colour: "#000"
      }), (o || _) && p(Je, {
        messages: o || _
      })]
    }), p("div", {
      className: "bom-table",
      children: v.map((k, w) => p(Sf, {
        category: k,
        bom: i,
        readOnly: r,
        loading: a
      }, k + w))
    })]
  });
}, zf = `@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.onboarding-wrapper{position:absolute;height:100%;width:100%;top:0;left:0}.onboarding-background{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px}@media screen and (max-width: 639px){.onboarding-background{background-color:#000000b3}}.onboarding-modal{background-color:#fff;border-radius:8px;width:90%;height:-moz-fit-content;height:fit-content;z-index:201;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:hidden}.heading{max-width:60%;text-align:center;margin-left:auto;margin-right:auto}.back-button{z-index:1;cursor:pointer;display:flex;justify-content:center;align-items:center;border-radius:12px;border:1px solid #d4d4d4;position:absolute;top:30px;left:30px;width:40px;height:40px;padding-right:2px}.back-button svg{transform:rotate(180deg);color:#6b7280}.button-wrapper{padding:30px}.swiper-pagination-bullet{width:7px;height:7px;opacity:1;background:rgba(0,0,0,.2)}.swiper-pagination-bullet-active{background:#000}.swiper-pagination-bullets.swiper-pagination-horizontal{--swiper-pagination-bottom: -2.5rem}.swiper{overflow:visible}
`, Af = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgMzFDMjQuMDYwNSAzMSAzMSAyNC4wNjA0IDMxIDE1LjVDMzEgNi45Mzk1OCAyNC4wNjA1IDAgMTUuNSAwQzYuOTM5NDUgMCAwIDYuOTM5NTggMCAxNS41QzAgMTguNjk0NyAwLjk2NjMwOSAyMS42NjM3IDIuNjIzMDUgMjQuMTMwNUw4LjYyNDUxIDE4LjQ4ODlDOC43NDI2OCAxOC4zNzI0IDguODYyNzkgMTguMjY0NCA4Ljk4Mzg5IDE4LjE2MjVDNy44NzI1NiAxNS4yMjM0IDguNTAwNDkgMTEuNzc1NCAxMC44NzAxIDkuNDE0MDZDMTIuNjAwNiA3LjY4OTk0IDE0Ljk5NDEgNi44MjExNyAxNy40MzY1IDcuMDMwNzZDMTcuNTU3MSA3LjA0MTE0IDE3LjY2OTkgNy4wODEwNSAxNy43NjcxIDcuMTQ0MjlDMTcuODkzNiA3LjIyNjgxIDE3Ljk5MzIgNy4zNDkgMTguMDQ3NCA3LjQ5NjQ2QzE4LjEyMjYgNy43MDIyNyAxOC4wOTc3IDcuOTI3ODYgMTcuOTg2OCA4LjExMDExQzE3Ljk1NzUgOC4xNTc5NiAxNy45MjI0IDguMjAyODggMTcuODgxMyA4LjI0MzY1TDEzLjg1ODkgMTIuMjUwNkwxNS4yNzEgMTYuNjkyNUwxOS43Mjk1IDE4LjA5OUwyMy43NTE1IDE0LjA5MjRDMjMuOTQ4MiAxMy44OTY5IDI0LjI0MDcgMTMuODMyMiAyNC41MDIgMTMuOTI3MkMyNC43NjI3IDE0LjAyMTcgMjQuOTQ1MyAxNC4yNTg4IDI0Ljk2OTIgMTQuNTM0OEMyNS4xNzk3IDE2Ljk2NzkgMjQuMzA3MSAxOS4zNTI0IDIyLjU3NzEgMjEuMDc2OEMyMC4yMDUxIDIzLjQzOTYgMTYuNzQxNyAyNC4wNjM0IDEzLjc5MDUgMjIuOTU0MUMxMy42OTA0IDIzLjA3NzEgMTMuNTg0NSAyMy4xOTcgMTMuNDY5NyAyMy4zMTE1TDguMDcwOCAyOS4xMDY3QzEwLjI3NjkgMzAuMzEzNyAxMi44MDgxIDMxIDE1LjUgMzFaIiBmaWxsPSIjMTBCOTgxIi8+Cjwvc3ZnPgo=", sc = [{
  number: 1,
  title: "virtualworkshop_title",
  content: "onboarding_vw_description",
  image: Te("onboarding-vw/build.png"),
  svg: ""
}, {
  number: 2,
  title: "onboarding_open_bike_build",
  content: "onboarding_open_bike_build_description",
  image: Te("onboarding-vw/build.png"),
  svg: ""
}, {
  number: 3,
  title: "onboarding_green_spanner",
  content: "onboarding_green_spanner_description",
  image: Te("onboarding-vw/green-spanner.png"),
  svg: Af
}, {
  number: 4,
  title: "onboarding_replacement",
  content: "onboarding_replacement_description",
  image: Te("onboarding-vw/compatible.png"),
  svg: ""
}, {
  number: 5,
  title: "onboarding_linked_components",
  content: "onboarding_linked_components_description",
  image: Te("onboarding-vw/not-compatible.png"),
  svg: ""
}, {
  number: 6,
  title: "onboarding_preview",
  content: "onboarding_preview_description",
  image: Te("onboarding-vw/unsaved-changes.png"),
  svg: ""
}, {
  number: 7,
  title: "onboarding_settings",
  content: "onboarding_settings_description",
  image: Te("onboarding-vw/settings.png"),
  svg: ""
}], Tf = `.card-wrapper{width:100%;display:flex;flex-direction:column}.card-image-wrapper{border:1px solid #d4d4d4;border-radius:8px;overflow:hidden;width:100%;margin-bottom:1rem}.card-image-wrapper img{width:100%;height:auto}.card-content{color:#000;font-size:16px}
`, Pf = ({
  title: i,
  src: e,
  content: t,
  number: r
}) => {
  const {
    t: a
  } = J();
  return p(F, {
    children: [p("style", {
      type: "text/css",
      children: Tf
    }), p("div", {
      className: "card-wrapper",
      children: [p("div", {
        className: "card-image-wrapper",
        children: p("img", {
          src: e
        })
      }), p("h3", {
        class: "card-title",
        children: [r, ". ", a(`${i}`)]
      }), p("div", {
        className: "card-content",
        children: a(`${t}`)
      })]
    })]
  });
};
function Wn(i) {
  return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
}
function $o(i, e) {
  i === void 0 && (i = {}), e === void 0 && (e = {});
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((r) => t.indexOf(r) < 0).forEach((r) => {
    typeof i[r] > "u" ? i[r] = e[r] : Wn(e[r]) && Wn(i[r]) && Object.keys(e[r]).length > 0 && $o(i[r], e[r]);
  });
}
const lc = {
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
function Qt() {
  const i = typeof document < "u" ? document : {};
  return $o(i, lc), i;
}
const Ef = {
  document: lc,
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
function Ae() {
  const i = typeof window < "u" ? window : {};
  return $o(i, Ef), i;
}
function Lf(i) {
  return i === void 0 && (i = ""), i.trim().split(" ").filter((e) => !!e.trim());
}
function Mf(i) {
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
function eo(i, e) {
  return e === void 0 && (e = 0), setTimeout(i, e);
}
function Fi() {
  return Date.now();
}
function Bf(i) {
  const e = Ae();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t;
}
function Nf(i, e) {
  e === void 0 && (e = "x");
  const t = Ae();
  let r, a, o;
  const n = Bf(i);
  return t.WebKitCSSMatrix ? (a = n.transform || n.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((s) => s.replace(",", ".")).join(", ")), o = new t.WebKitCSSMatrix(a === "none" ? "" : a)) : (o = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = o.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? a = o.m41 : r.length === 16 ? a = parseFloat(r[12]) : a = parseFloat(r[4])), e === "y" && (t.WebKitCSSMatrix ? a = o.m42 : r.length === 16 ? a = parseFloat(r[13]) : a = parseFloat(r[5])), a || 0;
}
function vi(i) {
  return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object";
}
function Of(i) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11);
}
function Ie() {
  const i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const r = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (r != null && !Of(r)) {
      const a = Object.keys(Object(r)).filter((o) => e.indexOf(o) < 0);
      for (let o = 0, n = a.length; o < n; o += 1) {
        const s = a[o], l = Object.getOwnPropertyDescriptor(r, s);
        l !== void 0 && l.enumerable && (vi(i[s]) && vi(r[s]) ? r[s].__swiper__ ? i[s] = r[s] : Ie(i[s], r[s]) : !vi(i[s]) && vi(r[s]) ? (i[s] = {}, r[s].__swiper__ ? i[s] = r[s] : Ie(i[s], r[s])) : i[s] = r[s]);
      }
    }
  }
  return i;
}
function yi(i, e, t) {
  i.style.setProperty(e, t);
}
function cc(i) {
  let {
    swiper: e,
    targetPosition: t,
    side: r
  } = i;
  const a = Ae(), o = -e.translate;
  let n = null, s;
  const l = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
  const c = t > o ? "next" : "prev", d = (f, h) => c === "next" && f >= h || c === "prev" && f <= h, u = () => {
    s = (/* @__PURE__ */ new Date()).getTime(), n === null && (n = s);
    const f = Math.max(Math.min((s - n) / l, 1), 0), h = 0.5 - Math.cos(f * Math.PI) / 2;
    let _ = o + h * (t - o);
    if (d(_, t) && (_ = t), e.wrapperEl.scrollTo({
      [r]: _
    }), d(_, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [r]: _
        });
      }), a.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = a.requestAnimationFrame(u);
  };
  u();
}
function rt(i, e) {
  e === void 0 && (e = "");
  const t = Ae(), r = [...i.children];
  return t.HTMLSlotElement && i instanceof HTMLSlotElement && r.push(...i.assignedElements()), e ? r.filter((a) => a.matches(e)) : r;
}
function If(i, e) {
  const t = [e];
  for (; t.length > 0; ) {
    const r = t.shift();
    if (i === r)
      return !0;
    t.push(...r.children, ...r.shadowRoot ? r.shadowRoot.children : [], ...r.assignedElements ? r.assignedElements() : []);
  }
}
function Rf(i, e) {
  const t = Ae();
  let r = e.contains(i);
  return !r && t.HTMLSlotElement && e instanceof HTMLSlotElement && (r = [...e.assignedElements()].includes(i), r || (r = If(i, e))), r;
}
function Vi(i) {
  try {
    console.warn(i);
    return;
  } catch {
  }
}
function $i(i, e) {
  e === void 0 && (e = []);
  const t = document.createElement(i);
  return t.classList.add(...Array.isArray(e) ? e : Lf(e)), t;
}
function Df(i, e) {
  const t = [];
  for (; i.previousElementSibling; ) {
    const r = i.previousElementSibling;
    e ? r.matches(e) && t.push(r) : t.push(r), i = r;
  }
  return t;
}
function jf(i, e) {
  const t = [];
  for (; i.nextElementSibling; ) {
    const r = i.nextElementSibling;
    e ? r.matches(e) && t.push(r) : t.push(r), i = r;
  }
  return t;
}
function Pt(i, e) {
  return Ae().getComputedStyle(i, null).getPropertyValue(e);
}
function Hi(i) {
  let e = i, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function dc(i, e) {
  const t = [];
  let r = i.parentElement;
  for (; r; )
    e ? r.matches(e) && t.push(r) : t.push(r), r = r.parentElement;
  return t;
}
function to(i, e, t) {
  const r = Ae();
  return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth;
}
function ut(i) {
  return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
}
let ba;
function Ff() {
  const i = Ae(), e = Qt();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
  };
}
function uc() {
  return ba || (ba = Ff()), ba;
}
let va;
function Vf(i) {
  let {
    userAgent: e
  } = i === void 0 ? {} : i;
  const t = uc(), r = Ae(), a = r.navigator.platform, o = e || r.navigator.userAgent, n = {
    ios: !1,
    android: !1
  }, s = r.screen.width, l = r.screen.height, c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = o.match(/(iPad).*OS\s([\d_]+)/);
  const u = o.match(/(iPod)(.*OS\s([\d_]+))?/), f = !d && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = a === "Win32";
  let _ = a === "MacIntel";
  const m = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && _ && t.touch && m.indexOf(`${s}x${l}`) >= 0 && (d = o.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), _ = !1), c && !h && (n.os = "android", n.android = !0), (d || f || u) && (n.os = "ios", n.ios = !0), n;
}
function pc(i) {
  return i === void 0 && (i = {}), va || (va = Vf(i)), va;
}
let ya;
function $f() {
  const i = Ae(), e = pc();
  let t = !1;
  function r() {
    const s = i.navigator.userAgent.toLowerCase();
    return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0;
  }
  if (r()) {
    const s = String(i.navigator.userAgent);
    if (s.includes("Version/")) {
      const [l, c] = s.split("Version/")[1].split(" ")[0].split(".").map((d) => Number(d));
      t = l < 16 || l === 16 && c < 2;
    }
  }
  const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent), o = r(), n = o || a && e.ios;
  return {
    isSafari: t || o,
    needPerspectiveFix: t,
    need3dFix: n,
    isWebView: a
  };
}
function fc() {
  return ya || (ya = $f()), ya;
}
function Hf(i) {
  let {
    swiper: e,
    on: t,
    emit: r
  } = i;
  const a = Ae();
  let o = null, n = null;
  const s = () => {
    !e || e.destroyed || !e.initialized || (r("beforeResize"), r("resize"));
  }, l = () => {
    !e || e.destroyed || !e.initialized || (o = new ResizeObserver((u) => {
      n = a.requestAnimationFrame(() => {
        const {
          width: f,
          height: h
        } = e;
        let _ = f, m = h;
        u.forEach((y) => {
          let {
            contentBoxSize: v,
            contentRect: g,
            target: b
          } = y;
          b && b !== e.el || (_ = g ? g.width : (v[0] || v).inlineSize, m = g ? g.height : (v[0] || v).blockSize);
        }), (_ !== f || m !== h) && s();
      });
    }), o.observe(e.el));
  }, c = () => {
    n && a.cancelAnimationFrame(n), o && o.unobserve && e.el && (o.unobserve(e.el), o = null);
  }, d = () => {
    !e || e.destroyed || !e.initialized || r("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof a.ResizeObserver < "u") {
      l();
      return;
    }
    a.addEventListener("resize", s), a.addEventListener("orientationchange", d);
  }), t("destroy", () => {
    c(), a.removeEventListener("resize", s), a.removeEventListener("orientationchange", d);
  });
}
function Uf(i) {
  let {
    swiper: e,
    extendParams: t,
    on: r,
    emit: a
  } = i;
  const o = [], n = Ae(), s = function(d, u) {
    u === void 0 && (u = {});
    const f = n.MutationObserver || n.WebkitMutationObserver, h = new f((_) => {
      if (e.__preventObserver__)
        return;
      if (_.length === 1) {
        a("observerUpdate", _[0]);
        return;
      }
      const m = function() {
        a("observerUpdate", _[0]);
      };
      n.requestAnimationFrame ? n.requestAnimationFrame(m) : n.setTimeout(m, 0);
    });
    h.observe(d, {
      attributes: typeof u.attributes > "u" ? !0 : u.attributes,
      childList: e.isElement || (typeof u.childList > "u" ? !0 : u).childList,
      characterData: typeof u.characterData > "u" ? !0 : u.characterData
    }), o.push(h);
  }, l = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = dc(e.hostEl);
        for (let u = 0; u < d.length; u += 1)
          s(d[u]);
      }
      s(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), s(e.wrapperEl, {
        attributes: !1
      });
    }
  }, c = () => {
    o.forEach((d) => {
      d.disconnect();
    }), o.splice(0, o.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), r("init", l), r("destroy", c);
}
var Gf = {
  on(i, e, t) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function")
      return r;
    const a = t ? "unshift" : "push";
    return i.split(" ").forEach((o) => {
      r.eventsListeners[o] || (r.eventsListeners[o] = []), r.eventsListeners[o][a](e);
    }), r;
  },
  once(i, e, t) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function")
      return r;
    function a() {
      r.off(i, a), a.__emitterProxy && delete a.__emitterProxy;
      for (var o = arguments.length, n = new Array(o), s = 0; s < o; s++)
        n[s] = arguments[s];
      e.apply(r, n);
    }
    return a.__emitterProxy = e, r.on(i, a, t);
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
      typeof e > "u" ? t.eventsListeners[r] = [] : t.eventsListeners[r] && t.eventsListeners[r].forEach((a, o) => {
        (a === e || a.__emitterProxy && a.__emitterProxy === e) && t.eventsListeners[r].splice(o, 1);
      });
    }), t;
  },
  emit() {
    const i = this;
    if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
      return i;
    let e, t, r;
    for (var a = arguments.length, o = new Array(a), n = 0; n < a; n++)
      o[n] = arguments[n];
    return typeof o[0] == "string" || Array.isArray(o[0]) ? (e = o[0], t = o.slice(1, o.length), r = i) : (e = o[0].events, t = o[0].data, r = o[0].context || i), t.unshift(r), (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
      i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((c) => {
        c.apply(r, [l, ...t]);
      }), i.eventsListeners && i.eventsListeners[l] && i.eventsListeners[l].forEach((c) => {
        c.apply(r, t);
      });
    }), i;
  }
};
function Kf() {
  const i = this;
  let e, t;
  const r = i.el;
  typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = r.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = r.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(Pt(r, "padding-left") || 0, 10) - parseInt(Pt(r, "padding-right") || 0, 10), t = t - parseInt(Pt(r, "padding-top") || 0, 10) - parseInt(Pt(r, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
    width: e,
    height: t,
    size: i.isHorizontal() ? e : t
  }));
}
function Wf() {
  const i = this;
  function e(T, A) {
    return parseFloat(T.getPropertyValue(i.getDirectionLabel(A)) || 0);
  }
  const t = i.params, {
    wrapperEl: r,
    slidesEl: a,
    size: o,
    rtlTranslate: n,
    wrongRTL: s
  } = i, l = i.virtual && t.virtual.enabled, c = l ? i.virtual.slides.length : i.slides.length, d = rt(a, `.${i.params.slideClass}, swiper-slide`), u = l ? i.virtual.slides.length : d.length;
  let f = [];
  const h = [], _ = [];
  let m = t.slidesOffsetBefore;
  typeof m == "function" && (m = t.slidesOffsetBefore.call(i));
  let y = t.slidesOffsetAfter;
  typeof y == "function" && (y = t.slidesOffsetAfter.call(i));
  const v = i.snapGrid.length, g = i.slidesGrid.length;
  let b = t.spaceBetween, k = -m, w = 0, C = 0;
  if (typeof o > "u")
    return;
  typeof b == "string" && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * o : typeof b == "string" && (b = parseFloat(b)), i.virtualSize = -b, d.forEach((T) => {
    n ? T.style.marginLeft = "" : T.style.marginRight = "", T.style.marginBottom = "", T.style.marginTop = "";
  }), t.centeredSlides && t.cssMode && (yi(r, "--swiper-centered-offset-before", ""), yi(r, "--swiper-centered-offset-after", ""));
  const S = t.grid && t.grid.rows > 1 && i.grid;
  S ? i.grid.initSlides(d) : i.grid && i.grid.unsetSlides();
  let z;
  const x = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((T) => typeof t.breakpoints[T].slidesPerView < "u").length > 0;
  for (let T = 0; T < u; T += 1) {
    z = 0;
    let A;
    if (d[T] && (A = d[T]), S && i.grid.updateSlide(T, A, d), !(d[T] && Pt(A, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        x && (d[T].style[i.getDirectionLabel("width")] = "");
        const E = getComputedStyle(A), M = A.style.transform, O = A.style.webkitTransform;
        if (M && (A.style.transform = "none"), O && (A.style.webkitTransform = "none"), t.roundLengths)
          z = i.isHorizontal() ? to(A, "width", !0) : to(A, "height", !0);
        else {
          const j = e(E, "width"), N = e(E, "padding-left"), D = e(E, "padding-right"), P = e(E, "margin-left"), L = e(E, "margin-right"), $ = E.getPropertyValue("box-sizing");
          if ($ && $ === "border-box")
            z = j + P + L;
          else {
            const {
              clientWidth: Q,
              offsetWidth: H
            } = A;
            z = j + N + D + P + L + (H - Q);
          }
        }
        M && (A.style.transform = M), O && (A.style.webkitTransform = O), t.roundLengths && (z = Math.floor(z));
      } else
        z = (o - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (z = Math.floor(z)), d[T] && (d[T].style[i.getDirectionLabel("width")] = `${z}px`);
      d[T] && (d[T].swiperSlideSize = z), _.push(z), t.centeredSlides ? (k = k + z / 2 + w / 2 + b, w === 0 && T !== 0 && (k = k - o / 2 - b), T === 0 && (k = k - o / 2 - b), Math.abs(k) < 1 / 1e3 && (k = 0), t.roundLengths && (k = Math.floor(k)), C % t.slidesPerGroup === 0 && f.push(k), h.push(k)) : (t.roundLengths && (k = Math.floor(k)), (C - Math.min(i.params.slidesPerGroupSkip, C)) % i.params.slidesPerGroup === 0 && f.push(k), h.push(k), k = k + z + b), i.virtualSize += z + b, w = z, C += 1;
    }
  }
  if (i.virtualSize = Math.max(i.virtualSize, o) + y, n && s && (t.effect === "slide" || t.effect === "coverflow") && (r.style.width = `${i.virtualSize + b}px`), t.setWrapperSize && (r.style[i.getDirectionLabel("width")] = `${i.virtualSize + b}px`), S && i.grid.updateWrapperSize(z, f), !t.centeredSlides) {
    const T = [];
    for (let A = 0; A < f.length; A += 1) {
      let E = f[A];
      t.roundLengths && (E = Math.floor(E)), f[A] <= i.virtualSize - o && T.push(E);
    }
    f = T, Math.floor(i.virtualSize - o) - Math.floor(f[f.length - 1]) > 1 && f.push(i.virtualSize - o);
  }
  if (l && t.loop) {
    const T = _[0] + b;
    if (t.slidesPerGroup > 1) {
      const A = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup), E = T * t.slidesPerGroup;
      for (let M = 0; M < A; M += 1)
        f.push(f[f.length - 1] + E);
    }
    for (let A = 0; A < i.virtual.slidesBefore + i.virtual.slidesAfter; A += 1)
      t.slidesPerGroup === 1 && f.push(f[f.length - 1] + T), h.push(h[h.length - 1] + T), i.virtualSize += T;
  }
  if (f.length === 0 && (f = [0]), b !== 0) {
    const T = i.isHorizontal() && n ? "marginLeft" : i.getDirectionLabel("marginRight");
    d.filter((A, E) => !t.cssMode || t.loop ? !0 : E !== d.length - 1).forEach((A) => {
      A.style[T] = `${b}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let T = 0;
    _.forEach((E) => {
      T += E + (b || 0);
    }), T -= b;
    const A = T > o ? T - o : 0;
    f = f.map((E) => E <= 0 ? -m : E > A ? A + y : E);
  }
  if (t.centerInsufficientSlides) {
    let T = 0;
    _.forEach((E) => {
      T += E + (b || 0);
    }), T -= b;
    const A = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (T + A < o) {
      const E = (o - T - A) / 2;
      f.forEach((M, O) => {
        f[O] = M - E;
      }), h.forEach((M, O) => {
        h[O] = M + E;
      });
    }
  }
  if (Object.assign(i, {
    slides: d,
    snapGrid: f,
    slidesGrid: h,
    slidesSizesGrid: _
  }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    yi(r, "--swiper-centered-offset-before", `${-f[0]}px`), yi(r, "--swiper-centered-offset-after", `${i.size / 2 - _[_.length - 1] / 2}px`);
    const T = -i.snapGrid[0], A = -i.slidesGrid[0];
    i.snapGrid = i.snapGrid.map((E) => E + T), i.slidesGrid = i.slidesGrid.map((E) => E + A);
  }
  if (u !== c && i.emit("slidesLengthChange"), f.length !== v && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), h.length !== g && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const T = `${t.containerModifierClass}backface-hidden`, A = i.el.classList.contains(T);
    u <= t.maxBackfaceHiddenSlides ? A || i.el.classList.add(T) : A && i.el.classList.remove(T);
  }
}
function Yf(i) {
  const e = this, t = [], r = e.virtual && e.params.virtual.enabled;
  let a = 0, o;
  typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
  const n = (s) => r ? e.slides[e.getSlideIndexByData(s)] : e.slides[s];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((s) => {
        t.push(s);
      });
    else
      for (o = 0; o < Math.ceil(e.params.slidesPerView); o += 1) {
        const s = e.activeIndex + o;
        if (s > e.slides.length && !r)
          break;
        t.push(n(s));
      }
  else
    t.push(n(e.activeIndex));
  for (o = 0; o < t.length; o += 1)
    if (typeof t[o] < "u") {
      const s = t[o].offsetHeight;
      a = s > a ? s : a;
    }
  (a || a === 0) && (e.wrapperEl.style.height = `${a}px`);
}
function qf() {
  const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
  for (let r = 0; r < e.length; r += 1)
    e[r].swiperSlideOffset = (i.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) - t - i.cssOverflowAdjustment();
}
const Yn = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function Zf(i) {
  i === void 0 && (i = this && this.translate || 0);
  const e = this, t = e.params, {
    slides: r,
    rtlTranslate: a,
    snapGrid: o
  } = e;
  if (r.length === 0)
    return;
  typeof r[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let n = -i;
  a && (n = i), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let s = t.spaceBetween;
  typeof s == "string" && s.indexOf("%") >= 0 ? s = parseFloat(s.replace("%", "")) / 100 * e.size : typeof s == "string" && (s = parseFloat(s));
  for (let l = 0; l < r.length; l += 1) {
    const c = r[l];
    let d = c.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (d -= r[0].swiperSlideOffset);
    const u = (n + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + s), f = (n - o[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + s), h = -(n - d), _ = h + e.slidesSizesGrid[l], m = h >= 0 && h <= e.size - e.slidesSizesGrid[l], y = h >= 0 && h < e.size - 1 || _ > 1 && _ <= e.size || h <= 0 && _ >= e.size;
    y && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(l)), Yn(c, y, t.slideVisibleClass), Yn(c, m, t.slideFullyVisibleClass), c.progress = a ? -u : u, c.originalProgress = a ? -f : f;
  }
}
function Jf(i) {
  const e = this;
  if (typeof i > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    i = e && e.translate && e.translate * d || 0;
  }
  const t = e.params, r = e.maxTranslate() - e.minTranslate();
  let {
    progress: a,
    isBeginning: o,
    isEnd: n,
    progressLoop: s
  } = e;
  const l = o, c = n;
  if (r === 0)
    a = 0, o = !0, n = !0;
  else {
    a = (i - e.minTranslate()) / r;
    const d = Math.abs(i - e.minTranslate()) < 1, u = Math.abs(i - e.maxTranslate()) < 1;
    o = d || a <= 0, n = u || a >= 1, d && (a = 0), u && (a = 1);
  }
  if (t.loop) {
    const d = e.getSlideIndexByData(0), u = e.getSlideIndexByData(e.slides.length - 1), f = e.slidesGrid[d], h = e.slidesGrid[u], _ = e.slidesGrid[e.slidesGrid.length - 1], m = Math.abs(i);
    m >= f ? s = (m - f) / _ : s = (m + _ - h) / _, s > 1 && (s -= 1);
  }
  Object.assign(e, {
    progress: a,
    progressLoop: s,
    isBeginning: o,
    isEnd: n
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), o && !l && e.emit("reachBeginning toEdge"), n && !c && e.emit("reachEnd toEdge"), (l && !o || c && !n) && e.emit("fromEdge"), e.emit("progress", a);
}
const ka = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function Xf() {
  const i = this, {
    slides: e,
    params: t,
    slidesEl: r,
    activeIndex: a
  } = i, o = i.virtual && t.virtual.enabled, n = i.grid && t.grid && t.grid.rows > 1, s = (u) => rt(r, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
  let l, c, d;
  if (o)
    if (t.loop) {
      let u = a - i.virtual.slidesBefore;
      u < 0 && (u = i.virtual.slides.length + u), u >= i.virtual.slides.length && (u -= i.virtual.slides.length), l = s(`[data-swiper-slide-index="${u}"]`);
    } else
      l = s(`[data-swiper-slide-index="${a}"]`);
  else
    n ? (l = e.find((u) => u.column === a), d = e.find((u) => u.column === a + 1), c = e.find((u) => u.column === a - 1)) : l = e[a];
  l && (n || (d = jf(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d && (d = e[0]), c = Df(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c === 0 && (c = e[e.length - 1]))), e.forEach((u) => {
    ka(u, u === l, t.slideActiveClass), ka(u, u === d, t.slideNextClass), ka(u, u === c, t.slidePrevClass);
  }), i.emitSlidesClasses();
}
const Ti = (i, e) => {
  if (!i || i.destroyed || !i.params)
    return;
  const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, r = e.closest(t());
  if (r) {
    let a = r.querySelector(`.${i.params.lazyPreloaderClass}`);
    !a && i.isElement && (r.shadowRoot ? a = r.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      r.shadowRoot && (a = r.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), a && a.remove());
    })), a && a.remove();
  }
}, wa = (i, e) => {
  if (!i.slides[e])
    return;
  const t = i.slides[e].querySelector('[loading="lazy"]');
  t && t.removeAttribute("loading");
}, ro = (i) => {
  if (!i || i.destroyed || !i.params)
    return;
  let e = i.params.lazyPreloadPrevNext;
  const t = i.slides.length;
  if (!t || !e || e < 0)
    return;
  e = Math.min(e, t);
  const r = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView), a = i.activeIndex;
  if (i.params.grid && i.params.grid.rows > 1) {
    const n = a, s = [n - e];
    s.push(...Array.from({
      length: e
    }).map((l, c) => n + r + c)), i.slides.forEach((l, c) => {
      s.includes(l.column) && wa(i, c);
    });
    return;
  }
  const o = a + r - 1;
  if (i.params.rewind || i.params.loop)
    for (let n = a - e; n <= o + e; n += 1) {
      const s = (n % t + t) % t;
      (s < a || s > o) && wa(i, s);
    }
  else
    for (let n = Math.max(a - e, 0); n <= Math.min(o + e, t - 1); n += 1)
      n !== a && (n > o || n < a) && wa(i, n);
};
function Qf(i) {
  const {
    slidesGrid: e,
    params: t
  } = i, r = i.rtlTranslate ? i.translate : -i.translate;
  let a;
  for (let o = 0; o < e.length; o += 1)
    typeof e[o + 1] < "u" ? r >= e[o] && r < e[o + 1] - (e[o + 1] - e[o]) / 2 ? a = o : r >= e[o] && r < e[o + 1] && (a = o + 1) : r >= e[o] && (a = o);
  return t.normalizeSlideIndex && (a < 0 || typeof a > "u") && (a = 0), a;
}
function eh(i) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: r,
    params: a,
    activeIndex: o,
    realIndex: n,
    snapIndex: s
  } = e;
  let l = i, c;
  const d = (h) => {
    let _ = h - e.virtual.slidesBefore;
    return _ < 0 && (_ = e.virtual.slides.length + _), _ >= e.virtual.slides.length && (_ -= e.virtual.slides.length), _;
  };
  if (typeof l > "u" && (l = Qf(e)), r.indexOf(t) >= 0)
    c = r.indexOf(t);
  else {
    const h = Math.min(a.slidesPerGroupSkip, l);
    c = h + Math.floor((l - h) / a.slidesPerGroup);
  }
  if (c >= r.length && (c = r.length - 1), l === o && !e.params.loop) {
    c !== s && (e.snapIndex = c, e.emit("snapIndexChange"));
    return;
  }
  if (l === o && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(l);
    return;
  }
  const u = e.grid && a.grid && a.grid.rows > 1;
  let f;
  if (e.virtual && a.virtual.enabled && a.loop)
    f = d(l);
  else if (u) {
    const h = e.slides.find((m) => m.column === l);
    let _ = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(_) && (_ = Math.max(e.slides.indexOf(h), 0)), f = Math.floor(_ / a.grid.rows);
  } else if (e.slides[l]) {
    const h = e.slides[l].getAttribute("data-swiper-slide-index");
    h ? f = parseInt(h, 10) : f = l;
  } else
    f = l;
  Object.assign(e, {
    previousSnapIndex: s,
    snapIndex: c,
    previousRealIndex: n,
    realIndex: f,
    previousIndex: o,
    activeIndex: l
  }), e.initialized && ro(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (n !== f && e.emit("realIndexChange"), e.emit("slideChange"));
}
function th(i, e) {
  const t = this, r = t.params;
  let a = i.closest(`.${r.slideClass}, swiper-slide`);
  !a && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach((s) => {
    !a && s.matches && s.matches(`.${r.slideClass}, swiper-slide`) && (a = s);
  });
  let o = !1, n;
  if (a) {
    for (let s = 0; s < t.slides.length; s += 1)
      if (t.slides[s] === a) {
        o = !0, n = s;
        break;
      }
  }
  if (a && o)
    t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = n;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  r.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var rh = {
  updateSize: Kf,
  updateSlides: Wf,
  updateAutoHeight: Yf,
  updateSlidesOffset: qf,
  updateSlidesProgress: Zf,
  updateProgress: Jf,
  updateSlidesClasses: Xf,
  updateActiveIndex: eh,
  updateClickedSlide: th
};
function ih(i) {
  i === void 0 && (i = this.isHorizontal() ? "x" : "y");
  const e = this, {
    params: t,
    rtlTranslate: r,
    translate: a,
    wrapperEl: o
  } = e;
  if (t.virtualTranslate)
    return r ? -a : a;
  if (t.cssMode)
    return a;
  let n = Nf(o, i);
  return n += e.cssOverflowAdjustment(), r && (n = -n), n || 0;
}
function ah(i, e) {
  const t = this, {
    rtlTranslate: r,
    params: a,
    wrapperEl: o,
    progress: n
  } = t;
  let s = 0, l = 0;
  const c = 0;
  t.isHorizontal() ? s = r ? -i : i : l = i, a.roundLengths && (s = Math.floor(s), l = Math.floor(l)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? s : l, a.cssMode ? o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -s : -l : a.virtualTranslate || (t.isHorizontal() ? s -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(), o.style.transform = `translate3d(${s}px, ${l}px, ${c}px)`);
  let d;
  const u = t.maxTranslate() - t.minTranslate();
  u === 0 ? d = 0 : d = (i - t.minTranslate()) / u, d !== n && t.updateProgress(i), t.emit("setTranslate", t.translate, e);
}
function oh() {
  return -this.snapGrid[0];
}
function nh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function sh(i, e, t, r, a) {
  i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = !0);
  const o = this, {
    params: n,
    wrapperEl: s
  } = o;
  if (o.animating && n.preventInteractionOnTransition)
    return !1;
  const l = o.minTranslate(), c = o.maxTranslate();
  let d;
  if (r && i > l ? d = l : r && i < c ? d = c : d = i, o.updateProgress(d), n.cssMode) {
    const u = o.isHorizontal();
    if (e === 0)
      s[u ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!o.support.smoothScroll)
        return cc({
          swiper: o,
          targetPosition: -d,
          side: u ? "left" : "top"
        }), !0;
      s.scrollTo({
        [u ? "left" : "top"]: -d,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (o.setTransition(0), o.setTranslate(d), t && (o.emit("beforeTransitionStart", e, a), o.emit("transitionEnd"))) : (o.setTransition(e), o.setTranslate(d), t && (o.emit("beforeTransitionStart", e, a), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(f) {
    !o || o.destroyed || f.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, o.animating = !1, t && o.emit("transitionEnd"));
  }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0;
}
var lh = {
  getTranslate: ih,
  setTranslate: ah,
  minTranslate: oh,
  maxTranslate: nh,
  translateTo: sh
};
function ch(i, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e);
}
function hc(i) {
  let {
    swiper: e,
    runCallbacks: t,
    direction: r,
    step: a
  } = i;
  const {
    activeIndex: o,
    previousIndex: n
  } = e;
  let s = r;
  if (s || (o > n ? s = "next" : o < n ? s = "prev" : s = "reset"), e.emit(`transition${a}`), t && o !== n) {
    if (s === "reset") {
      e.emit(`slideResetTransition${a}`);
      return;
    }
    e.emit(`slideChangeTransition${a}`), s === "next" ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`);
  }
}
function dh(i, e) {
  i === void 0 && (i = !0);
  const t = this, {
    params: r
  } = t;
  r.cssMode || (r.autoHeight && t.updateAutoHeight(), hc({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "Start"
  }));
}
function uh(i, e) {
  i === void 0 && (i = !0);
  const t = this, {
    params: r
  } = t;
  t.animating = !1, !r.cssMode && (t.setTransition(0), hc({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "End"
  }));
}
var ph = {
  setTransition: ch,
  transitionStart: dh,
  transitionEnd: uh
};
function fh(i, e, t, r, a) {
  i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
  const o = this;
  let n = i;
  n < 0 && (n = 0);
  const {
    params: s,
    snapGrid: l,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: u,
    rtlTranslate: f,
    wrapperEl: h,
    enabled: _
  } = o;
  if (!_ && !r && !a || o.destroyed || o.animating && s.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = o.params.speed);
  const m = Math.min(o.params.slidesPerGroupSkip, n);
  let y = m + Math.floor((n - m) / o.params.slidesPerGroup);
  y >= l.length && (y = l.length - 1);
  const v = -l[y];
  if (s.normalizeSlideIndex)
    for (let S = 0; S < c.length; S += 1) {
      const z = -Math.floor(v * 100), x = Math.floor(c[S] * 100), T = Math.floor(c[S + 1] * 100);
      typeof c[S + 1] < "u" ? z >= x && z < T - (T - x) / 2 ? n = S : z >= x && z < T && (n = S + 1) : z >= x && (n = S);
    }
  if (o.initialized && n !== u && (!o.allowSlideNext && (f ? v > o.translate && v > o.minTranslate() : v < o.translate && v < o.minTranslate()) || !o.allowSlidePrev && v > o.translate && v > o.maxTranslate() && (u || 0) !== n))
    return !1;
  n !== (d || 0) && t && o.emit("beforeSlideChangeStart"), o.updateProgress(v);
  let g;
  n > u ? g = "next" : n < u ? g = "prev" : g = "reset";
  const b = o.virtual && o.params.virtual.enabled;
  if (!(b && a) && (f && -v === o.translate || !f && v === o.translate))
    return o.updateActiveIndex(n), s.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), s.effect !== "slide" && o.setTranslate(v), g !== "reset" && (o.transitionStart(t, g), o.transitionEnd(t, g)), !1;
  if (s.cssMode) {
    const S = o.isHorizontal(), z = f ? v : -v;
    if (e === 0)
      b && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), b && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        h[S ? "scrollLeft" : "scrollTop"] = z;
      })) : h[S ? "scrollLeft" : "scrollTop"] = z, b && requestAnimationFrame(() => {
        o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1;
      });
    else {
      if (!o.support.smoothScroll)
        return cc({
          swiper: o,
          targetPosition: z,
          side: S ? "left" : "top"
        }), !0;
      h.scrollTo({
        [S ? "left" : "top"]: z,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const C = fc().isSafari;
  return b && !a && C && o.isElement && o.virtual.update(!1, !1, n), o.setTransition(e), o.setTranslate(v), o.updateActiveIndex(n), o.updateSlidesClasses(), o.emit("beforeTransitionStart", e, r), o.transitionStart(t, g), e === 0 ? o.transitionEnd(t, g) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(z) {
    !o || o.destroyed || z.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(t, g));
  }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0;
}
function hh(i, e, t, r) {
  i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
  const a = this;
  if (a.destroyed)
    return;
  typeof e > "u" && (e = a.params.speed);
  const o = a.grid && a.params.grid && a.params.grid.rows > 1;
  let n = i;
  if (a.params.loop)
    if (a.virtual && a.params.virtual.enabled)
      n = n + a.virtual.slidesBefore;
    else {
      let s;
      if (o) {
        const f = n * a.params.grid.rows;
        s = a.slides.find((h) => h.getAttribute("data-swiper-slide-index") * 1 === f).column;
      } else
        s = a.getSlideIndexByData(n);
      const l = o ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length, {
        centeredSlides: c
      } = a.params;
      let d = a.params.slidesPerView;
      d === "auto" ? d = a.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(a.params.slidesPerView, 10)), c && d % 2 === 0 && (d = d + 1));
      let u = l - s < d;
      if (c && (u = u || s < Math.ceil(d / 2)), r && c && a.params.slidesPerView !== "auto" && !o && (u = !1), u) {
        const f = c ? s < a.activeIndex ? "prev" : "next" : s - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
        a.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? s + 1 : s - l + 1,
          slideRealIndex: f === "next" ? a.realIndex : void 0
        });
      }
      if (o) {
        const f = n * a.params.grid.rows;
        n = a.slides.find((h) => h.getAttribute("data-swiper-slide-index") * 1 === f).column;
      } else
        n = a.getSlideIndexByData(n);
    }
  return requestAnimationFrame(() => {
    a.slideTo(n, e, t, r);
  }), a;
}
function gh(i, e, t) {
  e === void 0 && (e = !0);
  const r = this, {
    enabled: a,
    params: o,
    animating: n
  } = r;
  if (!a || r.destroyed)
    return r;
  typeof i > "u" && (i = r.params.speed);
  let s = o.slidesPerGroup;
  o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (s = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : s, c = r.virtual && o.virtual.enabled;
  if (o.loop) {
    if (n && !c && o.loopPreventsSliding)
      return !1;
    if (r.loopFix({
      direction: "next"
    }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && o.cssMode)
      return requestAnimationFrame(() => {
        r.slideTo(r.activeIndex + l, i, e, t);
      }), !0;
  }
  return o.rewind && r.isEnd ? r.slideTo(0, i, e, t) : r.slideTo(r.activeIndex + l, i, e, t);
}
function mh(i, e, t) {
  e === void 0 && (e = !0);
  const r = this, {
    params: a,
    snapGrid: o,
    slidesGrid: n,
    rtlTranslate: s,
    enabled: l,
    animating: c
  } = r;
  if (!l || r.destroyed)
    return r;
  typeof i > "u" && (i = r.params.speed);
  const d = r.virtual && a.virtual.enabled;
  if (a.loop) {
    if (c && !d && a.loopPreventsSliding)
      return !1;
    r.loopFix({
      direction: "prev"
    }), r._clientLeft = r.wrapperEl.clientLeft;
  }
  const u = s ? r.translate : -r.translate;
  function f(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const h = f(u), _ = o.map((g) => f(g)), m = a.freeMode && a.freeMode.enabled;
  let y = o[_.indexOf(h) - 1];
  if (typeof y > "u" && (a.cssMode || m)) {
    let g;
    o.forEach((b, k) => {
      h >= b && (g = k);
    }), typeof g < "u" && (y = m ? o[g] : o[g > 0 ? g - 1 : g]);
  }
  let v = 0;
  if (typeof y < "u" && (v = n.indexOf(y), v < 0 && (v = r.activeIndex - 1), a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (v = v - r.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), a.rewind && r.isBeginning) {
    const g = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
    return r.slideTo(g, i, e, t);
  } else if (a.loop && r.activeIndex === 0 && a.cssMode)
    return requestAnimationFrame(() => {
      r.slideTo(v, i, e, t);
    }), !0;
  return r.slideTo(v, i, e, t);
}
function _h(i, e, t) {
  e === void 0 && (e = !0);
  const r = this;
  if (!r.destroyed)
    return typeof i > "u" && (i = r.params.speed), r.slideTo(r.activeIndex, i, e, t);
}
function bh(i, e, t, r) {
  e === void 0 && (e = !0), r === void 0 && (r = 0.5);
  const a = this;
  if (a.destroyed)
    return;
  typeof i > "u" && (i = a.params.speed);
  let o = a.activeIndex;
  const n = Math.min(a.params.slidesPerGroupSkip, o), s = n + Math.floor((o - n) / a.params.slidesPerGroup), l = a.rtlTranslate ? a.translate : -a.translate;
  if (l >= a.snapGrid[s]) {
    const c = a.snapGrid[s], d = a.snapGrid[s + 1];
    l - c > (d - c) * r && (o += a.params.slidesPerGroup);
  } else {
    const c = a.snapGrid[s - 1], d = a.snapGrid[s];
    l - c <= (d - c) * r && (o -= a.params.slidesPerGroup);
  }
  return o = Math.max(o, 0), o = Math.min(o, a.slidesGrid.length - 1), a.slideTo(o, i, e, t);
}
function vh() {
  const i = this;
  if (i.destroyed)
    return;
  const {
    params: e,
    slidesEl: t
  } = i, r = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
  let a = i.clickedIndex, o;
  const n = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (i.animating)
      return;
    o = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? a < i.loopedSlides - r / 2 || a > i.slides.length - i.loopedSlides + r / 2 ? (i.loopFix(), a = i.getSlideIndex(rt(t, `${n}[data-swiper-slide-index="${o}"]`)[0]), eo(() => {
      i.slideTo(a);
    })) : i.slideTo(a) : a > i.slides.length - r ? (i.loopFix(), a = i.getSlideIndex(rt(t, `${n}[data-swiper-slide-index="${o}"]`)[0]), eo(() => {
      i.slideTo(a);
    })) : i.slideTo(a);
  } else
    i.slideTo(a);
}
var yh = {
  slideTo: fh,
  slideToLoop: hh,
  slideNext: gh,
  slidePrev: mh,
  slideReset: _h,
  slideToClosest: bh,
  slideToClickedSlide: vh
};
function kh(i, e) {
  const t = this, {
    params: r,
    slidesEl: a
  } = t;
  if (!r.loop || t.virtual && t.params.virtual.enabled)
    return;
  const o = () => {
    rt(a, `.${r.slideClass}, swiper-slide`).forEach((f, h) => {
      f.setAttribute("data-swiper-slide-index", h);
    });
  }, n = t.grid && r.grid && r.grid.rows > 1, s = r.slidesPerGroup * (n ? r.grid.rows : 1), l = t.slides.length % s !== 0, c = n && t.slides.length % r.grid.rows !== 0, d = (u) => {
    for (let f = 0; f < u; f += 1) {
      const h = t.isElement ? $i("swiper-slide", [r.slideBlankClass]) : $i("div", [r.slideClass, r.slideBlankClass]);
      t.slidesEl.append(h);
    }
  };
  if (l) {
    if (r.loopAddBlankSlides) {
      const u = s - t.slides.length % s;
      d(u), t.recalcSlides(), t.updateSlides();
    } else
      Vi("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    o();
  } else if (c) {
    if (r.loopAddBlankSlides) {
      const u = r.grid.rows - t.slides.length % r.grid.rows;
      d(u), t.recalcSlides(), t.updateSlides();
    } else
      Vi("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    o();
  } else
    o();
  t.loopFix({
    slideRealIndex: i,
    direction: r.centeredSlides ? void 0 : "next",
    initial: e
  });
}
function wh(i) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: r,
    setTranslate: a,
    activeSlideIndex: o,
    initial: n,
    byController: s,
    byMousewheel: l
  } = i === void 0 ? {} : i;
  const c = this;
  if (!c.params.loop)
    return;
  c.emit("beforeLoopFix");
  const {
    slides: d,
    allowSlidePrev: u,
    allowSlideNext: f,
    slidesEl: h,
    params: _
  } = c, {
    centeredSlides: m,
    initialSlide: y
  } = _;
  if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && _.virtual.enabled) {
    t && (!_.centeredSlides && c.snapIndex === 0 ? c.slideTo(c.virtual.slides.length, 0, !1, !0) : _.centeredSlides && c.snapIndex < _.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0)), c.allowSlidePrev = u, c.allowSlideNext = f, c.emit("loopFix");
    return;
  }
  let v = _.slidesPerView;
  v === "auto" ? v = c.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(_.slidesPerView, 10)), m && v % 2 === 0 && (v = v + 1));
  const g = _.slidesPerGroupAuto ? v : _.slidesPerGroup;
  let b = g;
  b % g !== 0 && (b += g - b % g), b += _.loopAdditionalSlides, c.loopedSlides = b;
  const k = c.grid && _.grid && _.grid.rows > 1;
  d.length < v + b || c.params.effect === "cards" && d.length < v + b * 2 ? Vi("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : k && _.grid.fill === "row" && Vi("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const w = [], C = [], S = k ? Math.ceil(d.length / _.grid.rows) : d.length, z = n && S - y < v && !m;
  let x = z ? y : c.activeIndex;
  typeof o > "u" ? o = c.getSlideIndex(d.find((N) => N.classList.contains(_.slideActiveClass))) : x = o;
  const T = r === "next" || !r, A = r === "prev" || !r;
  let E = 0, M = 0;
  const j = (k ? d[o].column : o) + (m && typeof a > "u" ? -v / 2 + 0.5 : 0);
  if (j < b) {
    E = Math.max(b - j, g);
    for (let N = 0; N < b - j; N += 1) {
      const D = N - Math.floor(N / S) * S;
      if (k) {
        const P = S - D - 1;
        for (let L = d.length - 1; L >= 0; L -= 1)
          d[L].column === P && w.push(L);
      } else
        w.push(S - D - 1);
    }
  } else if (j + v > S - b) {
    M = Math.max(j - (S - b * 2), g), z && (M = Math.max(M, v - S + y + 1));
    for (let N = 0; N < M; N += 1) {
      const D = N - Math.floor(N / S) * S;
      k ? d.forEach((P, L) => {
        P.column === D && C.push(L);
      }) : C.push(D);
    }
  }
  if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
    c.__preventObserver__ = !1;
  }), c.params.effect === "cards" && d.length < v + b * 2 && (C.includes(o) && C.splice(C.indexOf(o), 1), w.includes(o) && w.splice(w.indexOf(o), 1)), A && w.forEach((N) => {
    d[N].swiperLoopMoveDOM = !0, h.prepend(d[N]), d[N].swiperLoopMoveDOM = !1;
  }), T && C.forEach((N) => {
    d[N].swiperLoopMoveDOM = !0, h.append(d[N]), d[N].swiperLoopMoveDOM = !1;
  }), c.recalcSlides(), _.slidesPerView === "auto" ? c.updateSlides() : k && (w.length > 0 && A || C.length > 0 && T) && c.slides.forEach((N, D) => {
    c.grid.updateSlide(D, N, c.slides);
  }), _.watchSlidesProgress && c.updateSlidesOffset(), t) {
    if (w.length > 0 && A) {
      if (typeof e > "u") {
        const N = c.slidesGrid[x], P = c.slidesGrid[x + E] - N;
        l ? c.setTranslate(c.translate - P) : (c.slideTo(x + Math.ceil(E), 0, !1, !0), a && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - P, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - P));
      } else if (a) {
        const N = k ? w.length / _.grid.rows : w.length;
        c.slideTo(c.activeIndex + N, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate;
      }
    } else if (C.length > 0 && T)
      if (typeof e > "u") {
        const N = c.slidesGrid[x], P = c.slidesGrid[x - M] - N;
        l ? c.setTranslate(c.translate - P) : (c.slideTo(x - M, 0, !1, !0), a && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - P, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - P));
      } else {
        const N = k ? C.length / _.grid.rows : C.length;
        c.slideTo(c.activeIndex - N, 0, !1, !0);
      }
  }
  if (c.allowSlidePrev = u, c.allowSlideNext = f, c.controller && c.controller.control && !s) {
    const N = {
      slideRealIndex: e,
      direction: r,
      setTranslate: a,
      activeSlideIndex: o,
      byController: !0
    };
    Array.isArray(c.controller.control) ? c.controller.control.forEach((D) => {
      !D.destroyed && D.params.loop && D.loopFix({
        ...N,
        slideTo: D.params.slidesPerView === _.slidesPerView ? t : !1
      });
    }) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
      ...N,
      slideTo: c.controller.control.params.slidesPerView === _.slidesPerView ? t : !1
    });
  }
  c.emit("loopFix");
}
function xh() {
  const i = this, {
    params: e,
    slidesEl: t
  } = i;
  if (!e.loop || !t || i.virtual && i.params.virtual.enabled)
    return;
  i.recalcSlides();
  const r = [];
  i.slides.forEach((a) => {
    const o = typeof a.swiperSlideIndex > "u" ? a.getAttribute("data-swiper-slide-index") * 1 : a.swiperSlideIndex;
    r[o] = a;
  }), i.slides.forEach((a) => {
    a.removeAttribute("data-swiper-slide-index");
  }), r.forEach((a) => {
    t.append(a);
  }), i.recalcSlides(), i.slideTo(i.realIndex, 0);
}
var Ch = {
  loopCreate: kh,
  loopFix: wh,
  loopDestroy: xh
};
function Sh(i) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function zh() {
  const i = this;
  i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
    i.__preventObserver__ = !1;
  }));
}
var Ah = {
  setGrabCursor: Sh,
  unsetGrabCursor: zh
};
function Th(i, e) {
  e === void 0 && (e = this);
  function t(r) {
    if (!r || r === Qt() || r === Ae())
      return null;
    r.assignedSlot && (r = r.assignedSlot);
    const a = r.closest(i);
    return !a && !r.getRootNode ? null : a || t(r.getRootNode().host);
  }
  return t(e);
}
function qn(i, e, t) {
  const r = Ae(), {
    params: a
  } = i, o = a.edgeSwipeDetection, n = a.edgeSwipeThreshold;
  return o && (t <= n || t >= r.innerWidth - n) ? o === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function Ph(i) {
  const e = this, t = Qt();
  let r = i;
  r.originalEvent && (r = r.originalEvent);
  const a = e.touchEventsData;
  if (r.type === "pointerdown") {
    if (a.pointerId !== null && a.pointerId !== r.pointerId)
      return;
    a.pointerId = r.pointerId;
  } else
    r.type === "touchstart" && r.targetTouches.length === 1 && (a.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    qn(e, r, r.targetTouches[0].pageX);
    return;
  }
  const {
    params: o,
    touches: n,
    enabled: s
  } = e;
  if (!s || !o.simulateTouch && r.pointerType === "mouse" || e.animating && o.preventInteractionOnTransition)
    return;
  !e.animating && o.cssMode && o.loop && e.loopFix();
  let l = r.target;
  if (o.touchEventsTarget === "wrapper" && !Rf(l, e.wrapperEl) || "which" in r && r.which === 3 || "button" in r && r.button > 0 || a.isTouched && a.isMoved)
    return;
  const c = !!o.noSwipingClass && o.noSwipingClass !== "", d = r.composedPath ? r.composedPath() : r.path;
  c && r.target && r.target.shadowRoot && d && (l = d[0]);
  const u = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`, f = !!(r.target && r.target.shadowRoot);
  if (o.noSwiping && (f ? Th(u, l) : l.closest(u))) {
    e.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !l.closest(o.swipeHandler))
    return;
  n.currentX = r.pageX, n.currentY = r.pageY;
  const h = n.currentX, _ = n.currentY;
  if (!qn(e, r, h))
    return;
  Object.assign(a, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), n.startX = h, n.startY = _, a.touchStartTime = Fi(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
  let m = !0;
  l.matches(a.focusableElements) && (m = !1, l.nodeName === "SELECT" && (a.isTouched = !1)), t.activeElement && t.activeElement.matches(a.focusableElements) && t.activeElement !== l && (r.pointerType === "mouse" || r.pointerType !== "mouse" && !l.matches(a.focusableElements)) && t.activeElement.blur();
  const y = m && e.allowTouchMove && o.touchStartPreventDefault;
  (o.touchStartForcePreventDefault || y) && !l.isContentEditable && r.preventDefault(), o.freeMode && o.freeMode.enabled && e.freeMode && e.animating && !o.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", r);
}
function Eh(i) {
  const e = Qt(), t = this, r = t.touchEventsData, {
    params: a,
    touches: o,
    rtlTranslate: n,
    enabled: s
  } = t;
  if (!s || !a.simulateTouch && i.pointerType === "mouse")
    return;
  let l = i;
  if (l.originalEvent && (l = l.originalEvent), l.type === "pointermove" && (r.touchId !== null || l.pointerId !== r.pointerId))
    return;
  let c;
  if (l.type === "touchmove") {
    if (c = [...l.changedTouches].find((C) => C.identifier === r.touchId), !c || c.identifier !== r.touchId)
      return;
  } else
    c = l;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  const d = c.pageX, u = c.pageY;
  if (l.preventedByNestedSwiper) {
    o.startX = d, o.startY = u;
    return;
  }
  if (!t.allowTouchMove) {
    l.target.matches(r.focusableElements) || (t.allowClick = !1), r.isTouched && (Object.assign(o, {
      startX: d,
      startY: u,
      currentX: d,
      currentY: u
    }), r.touchStartTime = Fi());
    return;
  }
  if (a.touchReleaseOnEdges && !a.loop)
    if (t.isVertical()) {
      if (u < o.startY && t.translate <= t.maxTranslate() || u > o.startY && t.translate >= t.minTranslate()) {
        r.isTouched = !1, r.isMoved = !1;
        return;
      }
    } else {
      if (n && (d > o.startX && -t.translate <= t.maxTranslate() || d < o.startX && -t.translate >= t.minTranslate()))
        return;
      if (!n && (d < o.startX && t.translate <= t.maxTranslate() || d > o.startX && t.translate >= t.minTranslate()))
        return;
    }
  if (e.activeElement && e.activeElement.matches(r.focusableElements) && e.activeElement !== l.target && l.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && l.target === e.activeElement && l.target.matches(r.focusableElements)) {
    r.isMoved = !0, t.allowClick = !1;
    return;
  }
  r.allowTouchCallbacks && t.emit("touchMove", l), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = d, o.currentY = u;
  const f = o.currentX - o.startX, h = o.currentY - o.startY;
  if (t.params.threshold && Math.sqrt(f ** 2 + h ** 2) < t.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let C;
    t.isHorizontal() && o.currentY === o.startY || t.isVertical() && o.currentX === o.startX ? r.isScrolling = !1 : f * f + h * h >= 25 && (C = Math.atan2(Math.abs(h), Math.abs(f)) * 180 / Math.PI, r.isScrolling = t.isHorizontal() ? C > a.touchAngle : 90 - C > a.touchAngle);
  }
  if (r.isScrolling && t.emit("touchMoveOpposite", l), typeof r.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (r.startMoving = !0), r.isScrolling || l.type === "touchmove" && r.preventTouchMoveFromPointerMove) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving)
    return;
  t.allowClick = !1, !a.cssMode && l.cancelable && l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation();
  let _ = t.isHorizontal() ? f : h, m = t.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
  a.oneWayMovement && (_ = Math.abs(_) * (n ? 1 : -1), m = Math.abs(m) * (n ? 1 : -1)), o.diff = _, _ *= a.touchRatio, n && (_ = -_, m = -m);
  const y = t.touchesDirection;
  t.swipeDirection = _ > 0 ? "prev" : "next", t.touchesDirection = m > 0 ? "prev" : "next";
  const v = t.params.loop && !a.cssMode, g = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!r.isMoved) {
    if (v && g && t.loopFix({
      direction: t.swipeDirection
    }), r.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const C = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(C);
    }
    r.allowMomentumBounce = !1, a.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", l);
  }
  let b;
  if ((/* @__PURE__ */ new Date()).getTime(), a._loopSwapReset !== !1 && r.isMoved && r.allowThresholdMove && y !== t.touchesDirection && v && g && Math.abs(_) >= 1) {
    Object.assign(o, {
      startX: d,
      startY: u,
      currentX: d,
      currentY: u,
      startTranslate: r.currentTranslate
    }), r.loopSwapReset = !0, r.startTranslate = r.currentTranslate;
    return;
  }
  t.emit("sliderMove", l), r.isMoved = !0, r.currentTranslate = _ + r.startTranslate;
  let k = !0, w = a.resistanceRatio;
  if (a.touchReleaseOnEdges && (w = 0), _ > 0 ? (v && g && !b && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), r.currentTranslate > t.minTranslate() && (k = !1, a.resistance && (r.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + r.startTranslate + _) ** w))) : _ < 0 && (v && g && !b && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (a.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
  }), r.currentTranslate < t.maxTranslate() && (k = !1, a.resistance && (r.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - r.startTranslate - _) ** w))), k && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (r.currentTranslate = r.startTranslate), a.threshold > 0)
    if (Math.abs(_) > a.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        r.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, r.currentTranslate = r.startTranslate, o.diff = t.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !a.followFinger || a.cssMode || ((a.freeMode && a.freeMode.enabled && t.freeMode || a.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(r.currentTranslate), t.setTranslate(r.currentTranslate));
}
function Lh(i) {
  const e = this, t = e.touchEventsData;
  let r = i;
  r.originalEvent && (r = r.originalEvent);
  let a;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (a = [...r.changedTouches].find((w) => w.identifier === t.touchId), !a || a.identifier !== t.touchId)
      return;
  } else {
    if (t.touchId !== null || r.pointerId !== t.pointerId)
      return;
    a = r;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && !(["pointercancel", "contextmenu"].includes(r.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  t.pointerId = null, t.touchId = null;
  const {
    params: n,
    touches: s,
    rtlTranslate: l,
    slidesGrid: c,
    enabled: d
  } = e;
  if (!d || !n.simulateTouch && r.pointerType === "mouse")
    return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", r), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && n.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  n.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const u = Fi(), f = u - t.touchStartTime;
  if (e.allowClick) {
    const w = r.path || r.composedPath && r.composedPath();
    e.updateClickedSlide(w && w[0] || r.target, w), e.emit("tap click", r), f < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", r);
  }
  if (t.lastClickTime = Fi(), eo(() => {
    e.destroyed || (e.allowClick = !0);
  }), !t.isTouched || !t.isMoved || !e.swipeDirection || s.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let h;
  if (n.followFinger ? h = l ? e.translate : -e.translate : h = -t.currentTranslate, n.cssMode)
    return;
  if (n.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: h
    });
    return;
  }
  const _ = h >= -e.maxTranslate() && !e.params.loop;
  let m = 0, y = e.slidesSizesGrid[0];
  for (let w = 0; w < c.length; w += w < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
    const C = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof c[w + C] < "u" ? (_ || h >= c[w] && h < c[w + C]) && (m = w, y = c[w + C] - c[w]) : (_ || h >= c[w]) && (m = w, y = c[c.length - 1] - c[c.length - 2]);
  }
  let v = null, g = null;
  n.rewind && (e.isBeginning ? g = n.virtual && n.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (v = 0));
  const b = (h - c[m]) / y, k = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (f > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (b >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? v : m + k) : e.slideTo(m)), e.swipeDirection === "prev" && (b > 1 - n.longSwipesRatio ? e.slideTo(m + k) : g !== null && b < 0 && Math.abs(b) > n.longSwipesRatio ? e.slideTo(g) : e.slideTo(m));
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (r.target === e.navigation.nextEl || r.target === e.navigation.prevEl) ? r.target === e.navigation.nextEl ? e.slideTo(m + k) : e.slideTo(m) : (e.swipeDirection === "next" && e.slideTo(v !== null ? v : m + k), e.swipeDirection === "prev" && e.slideTo(g !== null ? g : m));
  }
}
function Zn() {
  const i = this, {
    params: e,
    el: t
  } = i;
  if (t && t.offsetWidth === 0)
    return;
  e.breakpoints && i.setBreakpoint();
  const {
    allowSlideNext: r,
    allowSlidePrev: a,
    snapGrid: o
  } = i, n = i.virtual && i.params.virtual.enabled;
  i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
  const s = n && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !s ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !n ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
    i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
  }, 500)), i.allowSlidePrev = a, i.allowSlideNext = r, i.params.watchOverflow && o !== i.snapGrid && i.checkOverflow();
}
function Mh(i) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
}
function Bh() {
  const i = this, {
    wrapperEl: e,
    rtlTranslate: t,
    enabled: r
  } = i;
  if (!r)
    return;
  i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
  let a;
  const o = i.maxTranslate() - i.minTranslate();
  o === 0 ? a = 0 : a = (i.translate - i.minTranslate()) / o, a !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1);
}
function Nh(i) {
  const e = this;
  Ti(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function Oh() {
  const i = this;
  i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
}
const gc = (i, e) => {
  const t = Qt(), {
    params: r,
    el: a,
    wrapperEl: o,
    device: n
  } = i, s = !!r.nested, l = e === "on" ? "addEventListener" : "removeEventListener", c = e;
  !a || typeof a == "string" || (t[l]("touchstart", i.onDocumentTouchStart, {
    passive: !1,
    capture: s
  }), a[l]("touchstart", i.onTouchStart, {
    passive: !1
  }), a[l]("pointerdown", i.onTouchStart, {
    passive: !1
  }), t[l]("touchmove", i.onTouchMove, {
    passive: !1,
    capture: s
  }), t[l]("pointermove", i.onTouchMove, {
    passive: !1,
    capture: s
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
  }), (r.preventClicks || r.preventClicksPropagation) && a[l]("click", i.onClick, !0), r.cssMode && o[l]("scroll", i.onScroll), r.updateOnWindowResize ? i[c](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Zn, !0) : i[c]("observerUpdate", Zn, !0), a[l]("load", i.onLoad, {
    capture: !0
  }));
};
function Ih() {
  const i = this, {
    params: e
  } = i;
  i.onTouchStart = Ph.bind(i), i.onTouchMove = Eh.bind(i), i.onTouchEnd = Lh.bind(i), i.onDocumentTouchStart = Oh.bind(i), e.cssMode && (i.onScroll = Bh.bind(i)), i.onClick = Mh.bind(i), i.onLoad = Nh.bind(i), gc(i, "on");
}
function Rh() {
  gc(this, "off");
}
var Dh = {
  attachEvents: Ih,
  detachEvents: Rh
};
const Jn = (i, e) => i.grid && e.grid && e.grid.rows > 1;
function jh() {
  const i = this, {
    realIndex: e,
    initialized: t,
    params: r,
    el: a
  } = i, o = r.breakpoints;
  if (!o || o && Object.keys(o).length === 0)
    return;
  const n = Qt(), s = r.breakpointsBase === "window" || !r.breakpointsBase ? r.breakpointsBase : "container", l = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? i.el : n.querySelector(r.breakpointsBase), c = i.getBreakpoint(o, s, l);
  if (!c || i.currentBreakpoint === c)
    return;
  const u = (c in o ? o[c] : void 0) || i.originalParams, f = Jn(i, r), h = Jn(i, u), _ = i.params.grabCursor, m = u.grabCursor, y = r.enabled;
  f && !h ? (a.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), i.emitContainerClasses()) : !f && h && (a.classList.add(`${r.containerModifierClass}grid`), (u.grid.fill && u.grid.fill === "column" || !u.grid.fill && r.grid.fill === "column") && a.classList.add(`${r.containerModifierClass}grid-column`), i.emitContainerClasses()), _ && !m ? i.unsetGrabCursor() : !_ && m && i.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((C) => {
    if (typeof u[C] > "u")
      return;
    const S = r[C] && r[C].enabled, z = u[C] && u[C].enabled;
    S && !z && i[C].disable(), !S && z && i[C].enable();
  });
  const v = u.direction && u.direction !== r.direction, g = r.loop && (u.slidesPerView !== r.slidesPerView || v), b = r.loop;
  v && t && i.changeDirection(), Ie(i.params, u);
  const k = i.params.enabled, w = i.params.loop;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev
  }), y && !k ? i.disable() : !y && k && i.enable(), i.currentBreakpoint = c, i.emit("_beforeBreakpoint", u), t && (g ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !b && w ? (i.loopCreate(e), i.updateSlides()) : b && !w && i.loopDestroy()), i.emit("breakpoint", u);
}
function Fh(i, e, t) {
  if (e === void 0 && (e = "window"), !i || e === "container" && !t)
    return;
  let r = !1;
  const a = Ae(), o = e === "window" ? a.innerHeight : t.clientHeight, n = Object.keys(i).map((s) => {
    if (typeof s == "string" && s.indexOf("@") === 0) {
      const l = parseFloat(s.substr(1));
      return {
        value: o * l,
        point: s
      };
    }
    return {
      value: s,
      point: s
    };
  });
  n.sort((s, l) => parseInt(s.value, 10) - parseInt(l.value, 10));
  for (let s = 0; s < n.length; s += 1) {
    const {
      point: l,
      value: c
    } = n[s];
    e === "window" ? a.matchMedia(`(min-width: ${c}px)`).matches && (r = l) : c <= t.clientWidth && (r = l);
  }
  return r || "max";
}
var Vh = {
  setBreakpoint: jh,
  getBreakpoint: Fh
};
function $h(i, e) {
  const t = [];
  return i.forEach((r) => {
    typeof r == "object" ? Object.keys(r).forEach((a) => {
      r[a] && t.push(e + a);
    }) : typeof r == "string" && t.push(e + r);
  }), t;
}
function Hh() {
  const i = this, {
    classNames: e,
    params: t,
    rtl: r,
    el: a,
    device: o
  } = i, n = $h(["initialized", t.direction, {
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
    android: o.android
  }, {
    ios: o.ios
  }, {
    "css-mode": t.cssMode
  }, {
    centered: t.cssMode && t.centeredSlides
  }, {
    "watch-progress": t.watchSlidesProgress
  }], t.containerModifierClass);
  e.push(...n), a.classList.add(...e), i.emitContainerClasses();
}
function Uh() {
  const i = this, {
    el: e,
    classNames: t
  } = i;
  !e || typeof e == "string" || (e.classList.remove(...t), i.emitContainerClasses());
}
var Gh = {
  addClasses: Hh,
  removeClasses: Uh
};
function Kh() {
  const i = this, {
    isLocked: e,
    params: t
  } = i, {
    slidesOffsetBefore: r
  } = t;
  if (r) {
    const a = i.slides.length - 1, o = i.slidesGrid[a] + i.slidesSizesGrid[a] + r * 2;
    i.isLocked = i.size > o;
  } else
    i.isLocked = i.snapGrid.length === 1;
  t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
}
var Wh = {
  checkOverflow: Kh
}, io = {
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
function Yh(i, e) {
  return function(r) {
    r === void 0 && (r = {});
    const a = Object.keys(r)[0], o = r[a];
    if (typeof o != "object" || o === null) {
      Ie(e, r);
      return;
    }
    if (i[a] === !0 && (i[a] = {
      enabled: !0
    }), a === "navigation" && i[a] && i[a].enabled && !i[a].prevEl && !i[a].nextEl && (i[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && i[a] && i[a].enabled && !i[a].el && (i[a].auto = !0), !(a in i && "enabled" in o)) {
      Ie(e, r);
      return;
    }
    typeof i[a] == "object" && !("enabled" in i[a]) && (i[a].enabled = !0), i[a] || (i[a] = {
      enabled: !1
    }), Ie(e, r);
  };
}
const xa = {
  eventsEmitter: Gf,
  update: rh,
  translate: lh,
  transition: ph,
  slide: yh,
  loop: Ch,
  grabCursor: Ah,
  events: Dh,
  breakpoints: Vh,
  checkOverflow: Wh,
  classes: Gh
}, Ca = {};
let Ho = class pt {
  constructor() {
    let e, t;
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    a.length === 1 && a[0].constructor && Object.prototype.toString.call(a[0]).slice(8, -1) === "Object" ? t = a[0] : [e, t] = a, t || (t = {}), t = Ie({}, t), e && !t.el && (t.el = e);
    const n = Qt();
    if (t.el && typeof t.el == "string" && n.querySelectorAll(t.el).length > 1) {
      const d = [];
      return n.querySelectorAll(t.el).forEach((u) => {
        const f = Ie({}, t, {
          el: u
        });
        d.push(new pt(f));
      }), d;
    }
    const s = this;
    s.__swiper__ = !0, s.support = uc(), s.device = pc({
      userAgent: t.userAgent
    }), s.browser = fc(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], t.modules && Array.isArray(t.modules) && s.modules.push(...t.modules);
    const l = {};
    s.modules.forEach((d) => {
      d({
        params: t,
        swiper: s,
        extendParams: Yh(t, l),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s)
      });
    });
    const c = Ie({}, io, l);
    return s.params = Ie({}, c, Ca, t), s.originalParams = Ie({}, s.params), s.passedParams = Ie({}, t), s.params && s.params.on && Object.keys(s.params.on).forEach((d) => {
      s.on(d, s.params.on[d]);
    }), s.params && s.params.onAny && s.onAny(s.params.onAny), Object.assign(s, {
      enabled: s.params.enabled,
      el: e,
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
    } = this, a = rt(t, `.${r.slideClass}, swiper-slide`), o = Hi(a[0]);
    return Hi(e) - o;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.find((t) => t.getAttribute("data-swiper-slide-index") * 1 === e));
  }
  recalcSlides() {
    const e = this, {
      slidesEl: t,
      params: r
    } = e;
    e.slides = rt(t, `.${r.slideClass}, swiper-slide`);
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
    const a = r.minTranslate(), n = (r.maxTranslate() - a) * e + a;
    r.translateTo(n, typeof t > "u" ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses();
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
      const a = e.getSlideClasses(r);
      t.push({
        slideEl: r,
        classNames: a
      }), e.emit("_slideClass", r, a);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const r = this, {
      params: a,
      slides: o,
      slidesGrid: n,
      slidesSizesGrid: s,
      size: l,
      activeIndex: c
    } = r;
    let d = 1;
    if (typeof a.slidesPerView == "number")
      return a.slidesPerView;
    if (a.centeredSlides) {
      let u = o[c] ? Math.ceil(o[c].swiperSlideSize) : 0, f;
      for (let h = c + 1; h < o.length; h += 1)
        o[h] && !f && (u += Math.ceil(o[h].swiperSlideSize), d += 1, u > l && (f = !0));
      for (let h = c - 1; h >= 0; h -= 1)
        o[h] && !f && (u += o[h].swiperSlideSize, d += 1, u > l && (f = !0));
    } else if (e === "current")
      for (let u = c + 1; u < o.length; u += 1)
        (t ? n[u] + s[u] - n[c] < l : n[u] - n[c] < l) && (d += 1);
    else
      for (let u = c - 1; u >= 0; u -= 1)
        n[c] - n[u] < l && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed)
      return;
    const {
      snapGrid: t,
      params: r
    } = e;
    r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((n) => {
      n.complete && Ti(e, n);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function a() {
      const n = e.rtlTranslate ? e.translate * -1 : e.translate, s = Math.min(Math.max(n, e.maxTranslate()), e.minTranslate());
      e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let o;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      a(), r.autoHeight && e.updateAutoHeight();
    else {
      if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
        const n = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
        o = e.slideTo(n.length - 1, 0, !1, !0);
      } else
        o = e.slideTo(e.activeIndex, 0, !1, !0);
      o || a();
    }
    r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const r = this, a = r.params.direction;
    return e || (e = a === "horizontal" ? "vertical" : "horizontal"), e === a || e !== "horizontal" && e !== "vertical" || (r.el.classList.remove(`${r.params.containerModifierClass}${a}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((o) => {
      e === "vertical" ? o.style.width = "" : o.style.height = "";
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
    const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let n = (() => r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(a()) : rt(r, a())[0])();
    return !n && t.params.createElements && (n = $i("div", t.params.wrapperClass), r.append(n), rt(r, `.${t.params.slideClass}`).forEach((s) => {
      n.append(s);
    })), Object.assign(t, {
      el: r,
      wrapperEl: n,
      slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : n,
      hostEl: t.isElement ? r.parentNode.host : r,
      mounted: !0,
      // RTL
      rtl: r.dir.toLowerCase() === "rtl" || Pt(r, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || Pt(r, "direction") === "rtl"),
      wrongRTL: Pt(n, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1)
      return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
    const a = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && a.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), a.forEach((o) => {
      o.complete ? Ti(t, o) : o.addEventListener("load", (n) => {
        Ti(t, n.target);
      });
    }), ro(t), t.initialized = !0, ro(t), t.emit("init"), t.emit("afterInit"), t;
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const r = this, {
      params: a,
      el: o,
      wrapperEl: n,
      slides: s
    } = r;
    return typeof r.params > "u" || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), a.loop && r.loopDestroy(), t && (r.removeClasses(), o && typeof o != "string" && o.removeAttribute("style"), n && n.removeAttribute("style"), s && s.length && s.forEach((l) => {
      l.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index");
    })), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((l) => {
      r.off(l);
    }), e !== !1 && (r.el && typeof r.el != "string" && (r.el.swiper = null), Mf(r)), r.destroyed = !0), null;
  }
  static extendDefaults(e) {
    Ie(Ca, e);
  }
  static get extendedDefaults() {
    return Ca;
  }
  static get defaults() {
    return io;
  }
  static installModule(e) {
    pt.prototype.__modules__ || (pt.prototype.__modules__ = []);
    const t = pt.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => pt.installModule(t)), pt) : (pt.installModule(e), pt);
  }
};
Object.keys(xa).forEach((i) => {
  Object.keys(xa[i]).forEach((e) => {
    Ho.prototype[e] = xa[i][e];
  });
});
Ho.use([Hf, Uf]);
const mc = [
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
function Jt(i) {
  return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object" && !i.__swiper__;
}
function ur(i, e) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((r) => t.indexOf(r) < 0).forEach((r) => {
    typeof i[r] > "u" ? i[r] = e[r] : Jt(e[r]) && Jt(i[r]) && Object.keys(e[r]).length > 0 ? e[r].__swiper__ ? i[r] = e[r] : ur(i[r], e[r]) : i[r] = e[r];
  });
}
function _c(i) {
  return i === void 0 && (i = {}), i.navigation && typeof i.navigation.nextEl > "u" && typeof i.navigation.prevEl > "u";
}
function bc(i) {
  return i === void 0 && (i = {}), i.pagination && typeof i.pagination.el > "u";
}
function vc(i) {
  return i === void 0 && (i = {}), i.scrollbar && typeof i.scrollbar.el > "u";
}
function yc(i) {
  i === void 0 && (i = "");
  const e = i.split(" ").map((r) => r.trim()).filter((r) => !!r), t = [];
  return e.forEach((r) => {
    t.indexOf(r) < 0 && t.push(r);
  }), t.join(" ");
}
function qh(i) {
  return i === void 0 && (i = ""), i ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper";
}
function Zh(i) {
  let {
    swiper: e,
    slides: t,
    passedParams: r,
    changedParams: a,
    nextEl: o,
    prevEl: n,
    scrollbarEl: s,
    paginationEl: l
  } = i;
  const c = a.filter((x) => x !== "children" && x !== "direction" && x !== "wrapperClass"), {
    params: d,
    pagination: u,
    navigation: f,
    scrollbar: h,
    virtual: _,
    thumbs: m
  } = e;
  let y, v, g, b, k, w, C, S;
  a.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && d.thumbs && (!d.thumbs.swiper || d.thumbs.swiper.destroyed) && (y = !0), a.includes("controller") && r.controller && r.controller.control && d.controller && !d.controller.control && (v = !0), a.includes("pagination") && r.pagination && (r.pagination.el || l) && (d.pagination || d.pagination === !1) && u && !u.el && (g = !0), a.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || s) && (d.scrollbar || d.scrollbar === !1) && h && !h.el && (b = !0), a.includes("navigation") && r.navigation && (r.navigation.prevEl || n) && (r.navigation.nextEl || o) && (d.navigation || d.navigation === !1) && f && !f.prevEl && !f.nextEl && (k = !0);
  const z = (x) => {
    e[x] && (e[x].destroy(), x === "navigation" ? (e.isElement && (e[x].prevEl.remove(), e[x].nextEl.remove()), d[x].prevEl = void 0, d[x].nextEl = void 0, e[x].prevEl = void 0, e[x].nextEl = void 0) : (e.isElement && e[x].el.remove(), d[x].el = void 0, e[x].el = void 0));
  };
  a.includes("loop") && e.isElement && (d.loop && !r.loop ? w = !0 : !d.loop && r.loop ? C = !0 : S = !0), c.forEach((x) => {
    if (Jt(d[x]) && Jt(r[x]))
      Object.assign(d[x], r[x]), (x === "navigation" || x === "pagination" || x === "scrollbar") && "enabled" in r[x] && !r[x].enabled && z(x);
    else {
      const T = r[x];
      (T === !0 || T === !1) && (x === "navigation" || x === "pagination" || x === "scrollbar") ? T === !1 && z(x) : d[x] = r[x];
    }
  }), c.includes("controller") && !v && e.controller && e.controller.control && d.controller && d.controller.control && (e.controller.control = d.controller.control), a.includes("children") && t && _ && d.virtual.enabled ? (_.slides = t, _.update(!0)) : a.includes("virtual") && _ && d.virtual.enabled && (t && (_.slides = t), _.update(!0)), a.includes("children") && t && d.loop && (S = !0), y && m.init() && m.update(!0), v && (e.controller.control = d.controller.control), g && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), e.el.appendChild(l)), l && (d.pagination.el = l), u.init(), u.render(), u.update()), b && (e.isElement && (!s || typeof s == "string") && (s = document.createElement("div"), s.classList.add("swiper-scrollbar"), s.part.add("scrollbar"), e.el.appendChild(s)), s && (d.scrollbar.el = s), h.init(), h.updateSize(), h.setTranslate()), k && (e.isElement && ((!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-next"), o.innerHTML = e.hostEl.constructor.nextButtonSvg, o.part.add("button-next"), e.el.appendChild(o)), (!n || typeof n == "string") && (n = document.createElement("div"), n.classList.add("swiper-button-prev"), n.innerHTML = e.hostEl.constructor.prevButtonSvg, n.part.add("button-prev"), e.el.appendChild(n))), o && (d.navigation.nextEl = o), n && (d.navigation.prevEl = n), f.init(), f.update()), a.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext), a.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev), a.includes("direction") && e.changeDirection(r.direction, !1), (w || S) && e.loopDestroy(), (C || S) && e.loopCreate(), e.update();
}
function Jh(i, e) {
  i === void 0 && (i = {}), e === void 0 && (e = !0);
  const t = {
    on: {}
  }, r = {}, a = {};
  ur(t, io), t._emitClasses = !0, t.init = !1;
  const o = {}, n = mc.map((l) => l.replace(/_/, "")), s = Object.assign({}, i);
  return Object.keys(s).forEach((l) => {
    typeof i[l] > "u" || (n.indexOf(l) >= 0 ? Jt(i[l]) ? (t[l] = {}, a[l] = {}, ur(t[l], i[l]), ur(a[l], i[l])) : (t[l] = i[l], a[l] = i[l]) : l.search(/on[A-Z]/) === 0 && typeof i[l] == "function" ? e ? r[`${l[2].toLowerCase()}${l.substr(3)}`] = i[l] : t.on[`${l[2].toLowerCase()}${l.substr(3)}`] = i[l] : o[l] = i[l]);
  }), ["navigation", "pagination", "scrollbar"].forEach((l) => {
    t[l] === !0 && (t[l] = {}), t[l] === !1 && delete t[l];
  }), {
    params: t,
    passedParams: a,
    rest: o,
    events: r
  };
}
function Xh(i, e) {
  let {
    el: t,
    nextEl: r,
    prevEl: a,
    paginationEl: o,
    scrollbarEl: n,
    swiper: s
  } = i;
  _c(e) && r && a && (s.params.navigation.nextEl = r, s.originalParams.navigation.nextEl = r, s.params.navigation.prevEl = a, s.originalParams.navigation.prevEl = a), bc(e) && o && (s.params.pagination.el = o, s.originalParams.pagination.el = o), vc(e) && n && (s.params.scrollbar.el = n, s.originalParams.scrollbar.el = n), s.init(t);
}
function Qh(i, e, t, r, a) {
  const o = [];
  if (!e)
    return o;
  const n = (l) => {
    o.indexOf(l) < 0 && o.push(l);
  };
  if (t && r) {
    const l = r.map(a), c = t.map(a);
    l.join("") !== c.join("") && n("children"), r.length !== t.length && n("children");
  }
  return mc.filter((l) => l[0] === "_").map((l) => l.replace(/_/, "")).forEach((l) => {
    if (l in i && l in e)
      if (Jt(i[l]) && Jt(e[l])) {
        const c = Object.keys(i[l]), d = Object.keys(e[l]);
        c.length !== d.length ? n(l) : (c.forEach((u) => {
          i[l][u] !== e[l][u] && n(l);
        }), d.forEach((u) => {
          i[l][u] !== e[l][u] && n(l);
        }));
      } else
        i[l] !== e[l] && n(l);
  }), o;
}
const eg = (i) => {
  !i || i.destroyed || !i.params.virtual || i.params.virtual && !i.params.virtual.enabled || (i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.parallax && i.params.parallax && i.params.parallax.enabled && i.parallax.setTranslate());
};
function Ui() {
  return Ui = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
    }
    return i;
  }, Ui.apply(this, arguments);
}
function kc(i) {
  return i.type && i.type.displayName && i.type.displayName.includes("SwiperSlide");
}
function wc(i) {
  const e = [];
  return he.Children.toArray(i).forEach((t) => {
    kc(t) ? e.push(t) : t.props && t.props.children && wc(t.props.children).forEach((r) => e.push(r));
  }), e;
}
function tg(i) {
  const e = [], t = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return he.Children.toArray(i).forEach((r) => {
    if (kc(r))
      e.push(r);
    else if (r.props && r.props.slot && t[r.props.slot])
      t[r.props.slot].push(r);
    else if (r.props && r.props.children) {
      const a = wc(r.props.children);
      a.length > 0 ? a.forEach((o) => e.push(o)) : t["container-end"].push(r);
    } else
      t["container-end"].push(r);
  }), {
    slides: e,
    slots: t
  };
}
function rg(i, e, t) {
  if (!t)
    return null;
  const r = (d) => {
    let u = d;
    return d < 0 ? u = e.length + d : u >= e.length && (u = u - e.length), u;
  }, a = i.isHorizontal() ? {
    [i.rtlTranslate ? "right" : "left"]: `${t.offset}px`
  } : {
    top: `${t.offset}px`
  }, {
    from: o,
    to: n
  } = t, s = i.params.loop ? -e.length : 0, l = i.params.loop ? e.length * 2 : e.length, c = [];
  for (let d = s; d < l; d += 1)
    d >= o && d <= n && c.push(e[r(d)]);
  return c.map((d, u) => /* @__PURE__ */ he.cloneElement(d, {
    swiper: i,
    style: a,
    key: d.props.virtualIndex || d.key || `slide-${u}`
  }));
}
function Jr(i, e) {
  return typeof window > "u" ? V(i, e) : zr(i, e);
}
const Xn = /* @__PURE__ */ ui(null), ig = /* @__PURE__ */ ui(null), xc = /* @__PURE__ */ go(function(i, e) {
  let {
    className: t,
    tag: r = "div",
    wrapperTag: a = "div",
    children: o,
    onSwiper: n,
    ...s
  } = i === void 0 ? {} : i, l = !1;
  const [c, d] = B("swiper"), [u, f] = B(null), [h, _] = B(!1), m = K(!1), y = K(null), v = K(null), g = K(null), b = K(null), k = K(null), w = K(null), C = K(null), S = K(null), {
    params: z,
    passedParams: x,
    rest: T,
    events: A
  } = Jh(s), {
    slides: E,
    slots: M
  } = tg(o), O = () => {
    _(!h);
  };
  Object.assign(z.on, {
    _containerClasses(L, $) {
      d($);
    }
  });
  const j = () => {
    Object.assign(z.on, A), l = !0;
    const L = {
      ...z
    };
    if (delete L.wrapperClass, v.current = new Ho(L), v.current.virtual && v.current.params.virtual.enabled) {
      v.current.virtual.slides = E;
      const $ = {
        cache: !1,
        slides: E,
        renderExternal: f,
        renderExternalUpdate: !1
      };
      ur(v.current.params.virtual, $), ur(v.current.originalParams.virtual, $);
    }
  };
  y.current || j(), v.current && v.current.on("_beforeBreakpoint", O);
  const N = () => {
    l || !A || !v.current || Object.keys(A).forEach((L) => {
      v.current.on(L, A[L]);
    });
  }, D = () => {
    !A || !v.current || Object.keys(A).forEach((L) => {
      v.current.off(L, A[L]);
    });
  };
  V(() => () => {
    v.current && v.current.off("_beforeBreakpoint", O);
  }), V(() => {
    !m.current && v.current && (v.current.emitSlidesClasses(), m.current = !0);
  }), Jr(() => {
    if (e && (e.current = y.current), !!y.current)
      return v.current.destroyed && j(), Xh({
        el: y.current,
        nextEl: k.current,
        prevEl: w.current,
        paginationEl: C.current,
        scrollbarEl: S.current,
        swiper: v.current
      }, z), n && !v.current.destroyed && n(v.current), () => {
        v.current && !v.current.destroyed && v.current.destroy(!0, !1);
      };
  }, []), Jr(() => {
    N();
    const L = Qh(x, g.current, E, b.current, ($) => $.key);
    return g.current = x, b.current = E, L.length && v.current && !v.current.destroyed && Zh({
      swiper: v.current,
      slides: E,
      passedParams: x,
      changedParams: L,
      nextEl: k.current,
      prevEl: w.current,
      scrollbarEl: S.current,
      paginationEl: C.current
    }), () => {
      D();
    };
  }), Jr(() => {
    eg(v.current);
  }, [u]);
  function P() {
    return z.virtual ? rg(v.current, E, u) : E.map((L, $) => /* @__PURE__ */ he.cloneElement(L, {
      swiper: v.current,
      swiperSlideIndex: $
    }));
  }
  return /* @__PURE__ */ he.createElement(r, Ui({
    ref: y,
    className: yc(`${c}${t ? ` ${t}` : ""}`)
  }, T), /* @__PURE__ */ he.createElement(ig.Provider, {
    value: v.current
  }, M["container-start"], /* @__PURE__ */ he.createElement(a, {
    className: qh(z.wrapperClass)
  }, M["wrapper-start"], P(), M["wrapper-end"]), _c(z) && /* @__PURE__ */ he.createElement(he.Fragment, null, /* @__PURE__ */ he.createElement("div", {
    ref: w,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ he.createElement("div", {
    ref: k,
    className: "swiper-button-next"
  })), vc(z) && /* @__PURE__ */ he.createElement("div", {
    ref: S,
    className: "swiper-scrollbar"
  }), bc(z) && /* @__PURE__ */ he.createElement("div", {
    ref: C,
    className: "swiper-pagination"
  }), M["container-end"]));
});
xc.displayName = "Swiper";
const Cc = /* @__PURE__ */ go(function(i, e) {
  let {
    tag: t = "div",
    children: r,
    className: a = "",
    swiper: o,
    zoom: n,
    lazy: s,
    virtualIndex: l,
    swiperSlideIndex: c,
    ...d
  } = i === void 0 ? {} : i;
  const u = K(null), [f, h] = B("swiper-slide"), [_, m] = B(!1);
  function y(k, w, C) {
    w === u.current && h(C);
  }
  Jr(() => {
    if (typeof c < "u" && (u.current.swiperSlideIndex = c), e && (e.current = u.current), !(!u.current || !o)) {
      if (o.destroyed) {
        f !== "swiper-slide" && h("swiper-slide");
        return;
      }
      return o.on("_slideClass", y), () => {
        o && o.off("_slideClass", y);
      };
    }
  }), Jr(() => {
    o && u.current && !o.destroyed && h(o.getSlideClasses(u.current));
  }, [o]);
  const v = {
    isActive: f.indexOf("swiper-slide-active") >= 0,
    isVisible: f.indexOf("swiper-slide-visible") >= 0,
    isPrev: f.indexOf("swiper-slide-prev") >= 0,
    isNext: f.indexOf("swiper-slide-next") >= 0
  }, g = () => typeof r == "function" ? r(v) : r, b = () => {
    m(!0);
  };
  return /* @__PURE__ */ he.createElement(t, Ui({
    ref: u,
    className: yc(`${f}${a ? ` ${a}` : ""}`),
    "data-swiper-slide-index": l,
    onLoad: b
  }, d), n && /* @__PURE__ */ he.createElement(Xn.Provider, {
    value: v
  }, /* @__PURE__ */ he.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof n == "number" ? n : void 0
  }, g(), s && !_ && /* @__PURE__ */ he.createElement("div", {
    className: "swiper-lazy-preloader"
  }))), !n && /* @__PURE__ */ he.createElement(Xn.Provider, {
    value: v
  }, g(), s && !_ && /* @__PURE__ */ he.createElement("div", {
    className: "swiper-lazy-preloader"
  })));
});
Cc.displayName = "SwiperSlide";
function ag(i, e, t, r) {
  return i.params.createElements && Object.keys(r).forEach((a) => {
    if (!t[a] && t.auto === !0) {
      let o = rt(i.el, `.${r[a]}`)[0];
      o || (o = $i("div", r[a]), o.className = r[a], i.el.append(o)), t[a] = o, e[a] = o;
    }
  }), t;
}
function Ir(i) {
  return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function og(i) {
  let {
    swiper: e,
    extendParams: t,
    on: r,
    emit: a
  } = i;
  const o = "swiper-pagination";
  t({
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
      formatFractionCurrent: (g) => g,
      formatFractionTotal: (g) => g,
      bulletClass: `${o}-bullet`,
      bulletActiveClass: `${o}-bullet-active`,
      modifierClass: `${o}-`,
      currentClass: `${o}-current`,
      totalClass: `${o}-total`,
      hiddenClass: `${o}-hidden`,
      progressbarFillClass: `${o}-progressbar-fill`,
      progressbarOppositeClass: `${o}-progressbar-opposite`,
      clickableClass: `${o}-clickable`,
      lockClass: `${o}-lock`,
      horizontalClass: `${o}-horizontal`,
      verticalClass: `${o}-vertical`,
      paginationDisabledClass: `${o}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let n, s = 0;
  function l() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function c(g, b) {
    const {
      bulletActiveClass: k
    } = e.params.pagination;
    g && (g = g[`${b === "prev" ? "previous" : "next"}ElementSibling`], g && (g.classList.add(`${k}-${b}`), g = g[`${b === "prev" ? "previous" : "next"}ElementSibling`], g && g.classList.add(`${k}-${b}-${b}`)));
  }
  function d(g, b, k) {
    if (g = g % k, b = b % k, b === g + 1)
      return "next";
    if (b === g - 1)
      return "previous";
  }
  function u(g) {
    const b = g.target.closest(Ir(e.params.pagination.bulletClass));
    if (!b)
      return;
    g.preventDefault();
    const k = Hi(b) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === k)
        return;
      const w = d(e.realIndex, k, e.slides.length);
      w === "next" ? e.slideNext() : w === "previous" ? e.slidePrev() : e.slideToLoop(k);
    } else
      e.slideTo(k);
  }
  function f() {
    const g = e.rtl, b = e.params.pagination;
    if (l())
      return;
    let k = e.pagination.el;
    k = ut(k);
    let w, C;
    const S = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, z = e.params.loop ? Math.ceil(S / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (C = e.previousRealIndex || 0, w = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (w = e.snapIndex, C = e.previousSnapIndex) : (C = e.previousIndex || 0, w = e.activeIndex || 0), b.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const x = e.pagination.bullets;
      let T, A, E;
      if (b.dynamicBullets && (n = to(x[0], e.isHorizontal() ? "width" : "height", !0), k.forEach((M) => {
        M.style[e.isHorizontal() ? "width" : "height"] = `${n * (b.dynamicMainBullets + 4)}px`;
      }), b.dynamicMainBullets > 1 && C !== void 0 && (s += w - (C || 0), s > b.dynamicMainBullets - 1 ? s = b.dynamicMainBullets - 1 : s < 0 && (s = 0)), T = Math.max(w - s, 0), A = T + (Math.min(x.length, b.dynamicMainBullets) - 1), E = (A + T) / 2), x.forEach((M) => {
        const O = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((j) => `${b.bulletActiveClass}${j}`)].map((j) => typeof j == "string" && j.includes(" ") ? j.split(" ") : j).flat();
        M.classList.remove(...O);
      }), k.length > 1)
        x.forEach((M) => {
          const O = Hi(M);
          O === w ? M.classList.add(...b.bulletActiveClass.split(" ")) : e.isElement && M.setAttribute("part", "bullet"), b.dynamicBullets && (O >= T && O <= A && M.classList.add(...`${b.bulletActiveClass}-main`.split(" ")), O === T && c(M, "prev"), O === A && c(M, "next"));
        });
      else {
        const M = x[w];
        if (M && M.classList.add(...b.bulletActiveClass.split(" ")), e.isElement && x.forEach((O, j) => {
          O.setAttribute("part", j === w ? "bullet-active" : "bullet");
        }), b.dynamicBullets) {
          const O = x[T], j = x[A];
          for (let N = T; N <= A; N += 1)
            x[N] && x[N].classList.add(...`${b.bulletActiveClass}-main`.split(" "));
          c(O, "prev"), c(j, "next");
        }
      }
      if (b.dynamicBullets) {
        const M = Math.min(x.length, b.dynamicMainBullets + 4), O = (n * M - n) / 2 - E * n, j = g ? "right" : "left";
        x.forEach((N) => {
          N.style[e.isHorizontal() ? j : "top"] = `${O}px`;
        });
      }
    }
    k.forEach((x, T) => {
      if (b.type === "fraction" && (x.querySelectorAll(Ir(b.currentClass)).forEach((A) => {
        A.textContent = b.formatFractionCurrent(w + 1);
      }), x.querySelectorAll(Ir(b.totalClass)).forEach((A) => {
        A.textContent = b.formatFractionTotal(z);
      })), b.type === "progressbar") {
        let A;
        b.progressbarOpposite ? A = e.isHorizontal() ? "vertical" : "horizontal" : A = e.isHorizontal() ? "horizontal" : "vertical";
        const E = (w + 1) / z;
        let M = 1, O = 1;
        A === "horizontal" ? M = E : O = E, x.querySelectorAll(Ir(b.progressbarFillClass)).forEach((j) => {
          j.style.transform = `translate3d(0,0,0) scaleX(${M}) scaleY(${O})`, j.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      b.type === "custom" && b.renderCustom ? (x.innerHTML = b.renderCustom(e, w + 1, z), T === 0 && a("paginationRender", x)) : (T === 0 && a("paginationRender", x), a("paginationUpdate", x)), e.params.watchOverflow && e.enabled && x.classList[e.isLocked ? "add" : "remove"](b.lockClass);
    });
  }
  function h() {
    const g = e.params.pagination;
    if (l())
      return;
    const b = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let k = e.pagination.el;
    k = ut(k);
    let w = "";
    if (g.type === "bullets") {
      let C = e.params.loop ? Math.ceil(b / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && C > b && (C = b);
      for (let S = 0; S < C; S += 1)
        g.renderBullet ? w += g.renderBullet.call(e, S, g.bulletClass) : w += `<${g.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${g.bulletClass}"></${g.bulletElement}>`;
    }
    g.type === "fraction" && (g.renderFraction ? w = g.renderFraction.call(e, g.currentClass, g.totalClass) : w = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`), g.type === "progressbar" && (g.renderProgressbar ? w = g.renderProgressbar.call(e, g.progressbarFillClass) : w = `<span class="${g.progressbarFillClass}"></span>`), e.pagination.bullets = [], k.forEach((C) => {
      g.type !== "custom" && (C.innerHTML = w || ""), g.type === "bullets" && e.pagination.bullets.push(...C.querySelectorAll(Ir(g.bulletClass)));
    }), g.type !== "custom" && a("paginationRender", k[0]);
  }
  function _() {
    e.params.pagination = ag(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const g = e.params.pagination;
    if (!g.el)
      return;
    let b;
    typeof g.el == "string" && e.isElement && (b = e.el.querySelector(g.el)), !b && typeof g.el == "string" && (b = [...document.querySelectorAll(g.el)]), b || (b = g.el), !(!b || b.length === 0) && (e.params.uniqueNavElements && typeof g.el == "string" && Array.isArray(b) && b.length > 1 && (b = [...e.el.querySelectorAll(g.el)], b.length > 1 && (b = b.find((k) => dc(k, ".swiper")[0] === e.el))), Array.isArray(b) && b.length === 1 && (b = b[0]), Object.assign(e.pagination, {
      el: b
    }), b = ut(b), b.forEach((k) => {
      g.type === "bullets" && g.clickable && k.classList.add(...(g.clickableClass || "").split(" ")), k.classList.add(g.modifierClass + g.type), k.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.type === "bullets" && g.dynamicBullets && (k.classList.add(`${g.modifierClass}${g.type}-dynamic`), s = 0, g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)), g.type === "progressbar" && g.progressbarOpposite && k.classList.add(g.progressbarOppositeClass), g.clickable && k.addEventListener("click", u), e.enabled || k.classList.add(g.lockClass);
    }));
  }
  function m() {
    const g = e.params.pagination;
    if (l())
      return;
    let b = e.pagination.el;
    b && (b = ut(b), b.forEach((k) => {
      k.classList.remove(g.hiddenClass), k.classList.remove(g.modifierClass + g.type), k.classList.remove(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.clickable && (k.classList.remove(...(g.clickableClass || "").split(" ")), k.removeEventListener("click", u));
    })), e.pagination.bullets && e.pagination.bullets.forEach((k) => k.classList.remove(...g.bulletActiveClass.split(" ")));
  }
  r("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const g = e.params.pagination;
    let {
      el: b
    } = e.pagination;
    b = ut(b), b.forEach((k) => {
      k.classList.remove(g.horizontalClass, g.verticalClass), k.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass);
    });
  }), r("init", () => {
    e.params.pagination.enabled === !1 ? v() : (_(), h(), f());
  }), r("activeIndexChange", () => {
    typeof e.snapIndex > "u" && f();
  }), r("snapIndexChange", () => {
    f();
  }), r("snapGridLengthChange", () => {
    h(), f();
  }), r("destroy", () => {
    m();
  }), r("enable disable", () => {
    let {
      el: g
    } = e.pagination;
    g && (g = ut(g), g.forEach((b) => b.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), r("lock unlock", () => {
    f();
  }), r("click", (g, b) => {
    const k = b.target, w = ut(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && w && w.length > 0 && !k.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && k === e.navigation.nextEl || e.navigation.prevEl && k === e.navigation.prevEl))
        return;
      const C = w[0].classList.contains(e.params.pagination.hiddenClass);
      a(C === !0 ? "paginationShow" : "paginationHide"), w.forEach((S) => S.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const y = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: g
    } = e.pagination;
    g && (g = ut(g), g.forEach((b) => b.classList.remove(e.params.pagination.paginationDisabledClass))), _(), h(), f();
  }, v = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: g
    } = e.pagination;
    g && (g = ut(g), g.forEach((b) => b.classList.add(e.params.pagination.paginationDisabledClass))), m();
  };
  Object.assign(e.pagination, {
    enable: y,
    disable: v,
    render: h,
    update: f,
    init: _,
    destroy: m
  });
}
const ng = () => {
  const i = K(null), e = K(null), t = sc, r = K(null), [a, o] = B(0), [n, s] = B(!0), {
    t: l
  } = J(), c = {
    clickable: !0,
    renderBullet: function(h, _) {
      return '<span class="' + _ + ' "></span>';
    }
  }, d = () => {
    ne.to(i.current, {
      opacity: 1,
      duration: 0.25,
      zIndex: 2e3,
      pointerEvents: "all",
      display: "block"
    }), ne.to(e.current, {
      opacity: 1,
      duration: 0.5,
      pointerEvents: "all"
    });
  }, u = () => {
    ne.to(i.current, {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
      display: "none"
    }), ne.to(e.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
      onComplete: () => s(!1)
    });
  }, f = () => {
    u(), ea.value = !1;
  };
  return V(() => {
    n ? d() : u();
  }, [n]), p("div", {
    className: "onboarding-wrapper",
    ref: i,
    children: [p("style", {
      type: "text/css",
      children: zf
    }), p("div", {
      className: "onboarding-background"
    }), p("div", {
      className: "onboarding-modal",
      ref: e,
      children: [p("div", {
        className: "back-button",
        onClick: () => a > 0 ? r.current.slidePrev() : X("/workshop"),
        children: p(qe, {})
      }), p("h2", {
        className: "heading relative flex items-center justify-center w-full h-10 my-5 sm:mt-8 text-xl",
        children: "Virtual Workshop - Quick Guide"
      }), p(xc, {
        style: {
          padding: "0 30px"
        },
        spaceBetween: 30,
        onSwiper: (h) => r.current = h,
        pagination: c,
        modules: [og],
        onSlideChange: (h) => o(h.activeIndex),
        children: t.map((h, _) => p(Cc, {
          children: p(Pf, {
            title: h.title,
            src: h.image,
            content: h.content,
            number: h.number
          })
        }, _))
      }), p("div", {
        className: "button-wrapper",
        children: p(ot, {
          onClick: () => a < t.length - 1 ? r.current.slideNext() : f(),
          text: a < t.length - 1 ? l("onboarding_next") : l("onboarding_explore"),
          active: !0,
          primary: !0
        })
      })]
    })]
  });
};
function sg() {
  const {
    t: i
  } = J(), {
    currentBike: e
  } = Be(), [t, r] = B(ye.value), o = window.BikeMatrix.getConfig(), [n, s] = B(!1), [l, c] = B("");
  V(() => {
    Qe.value.back = "/";
  }, []);
  const [d, u] = B(!1), [f, h] = B(!1), [_, m] = B(!1), [y, v] = B(""), [g, b] = B(""), [k, w] = B(!1), C = new ze(o.apiUrl, o.apiKey, o.apiToken, o.isShopify), S = async () => {
    const A = await C.getBikeBom(t.bike_Key);
    if (!A.success) {
      c(A.error), o.logLevel === "verbose" && console.error(A.logError);
      return;
    }
    ye.value = mr(A), u(!1), h(!0), X("/");
  }, z = (A) => {
    b(A), u(!1);
  }, x = async () => {
    if (u(!0), w(!0), t.owner_Email_Address) {
      const A = await C.saveCustomBike(e.key, t.owner_Email_Address);
      if (A.success)
        S();
      else {
        o.logLevel === "verbose" && console.error(A.logError), z(A.error);
        return;
      }
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(y)) {
      const A = await C.saveCustomBike(e.key, y);
      if (A.success)
        S();
      else {
        o.logLevel === "verbose" && console.error(A.logError), z(A.error);
        return;
      }
    }
  };
  V(() => {
    k && g && b("");
  }, [y]);
  const T = async () => {
    s(!0);
    const A = await C.getBikeBom(e.key);
    if (!A.success) {
      c(A.error), o.logLevel === "verbose" && console.error(A.logError), s(!1);
      return;
    }
    const E = mr(A.data);
    r(E), ye.value = E, s(!1);
  };
  return V(() => {
    ye.value || T();
  }, []), p(F, {
    children: [ea.value && p(ng, {}), p("div", {
      className: "mb-4",
      children: [e ? p(Ze, {
        bike: e,
        selected: !0,
        settings: !0,
        compact: !0
      }) : p(Er, {}), p("div", {
        class: "mt-4 mb-8",
        children: p(nc, {
          categorisedBOM: t,
          bikeSave: f,
          refreshBomb: T,
          loading: n,
          bomError: l
        })
      })]
    }), p(ot, {
      text: i("virtualworkshop_save_btn"),
      onClick: t != null && t.owner_Email_Address ? () => x() : () => m(!0),
      primary: !0,
      loading: !_ && d
    }), p(kt, {}), p(Do, {
      isOpen: _,
      toggleModal: () => m(!1),
      content: i("virtualworkshop_save_text"),
      title: i("virtualworkshop_save_title"),
      onConfirm: x,
      onCancel: () => m(!1),
      loading: d,
      children: [p("div", {
        class: "mt-8",
        children: p(al, {
          value: y,
          setValue: (A) => v(A),
          placeholder: i("virtualworkshop_settings_email"),
          type: "email",
          error: g,
          submitInput: x
        })
      }), p(Je, {
        messages: l
      })]
    })]
  });
}
function lg() {
  const {
    t: i
  } = J(), e = Qi.value, r = window.BikeMatrix.getConfig(), [a, o] = B(!1), [n, s] = B(null), l = ye.value, {
    currentBike: c,
    setCurrentBike: d
  } = Be(), u = new ze(r.apiUrl, r.apiKey, r.apiToken, r.isShopify), [f, h] = B(!1);
  c.isShared && X("/");
  const _ = async () => {
    h(!0), Fo();
    const m = await u.removeComponent(c.key, e.part.product_category_id, Vo[e.type.split(" ").join("_")]);
    if (m.success)
      l[e.category.split(" ").join("_")][e.type.split(" ").join("_")] = {
        ...l[e.category.split(" ").join("_")][e.type.split(" ").join("_")],
        id: null,
        name: null,
        unsaved_changes: !0
      }, ye.value = l, d({
        ...c
      }), h(!1), X("/bom");
    else {
      h(!1), o(!1), s(m.error + " - " + e.part.name), r.logLevel === "verbose" && console.error(m.logError);
      return;
    }
  };
  return p(F, {
    children: [p("div", {
      className: "mb-4",
      children: [c ? p(Ze, {
        bike: c,
        selected: !0,
        settings: !0
      }) : p(Er, {}), p("div", {
        className: "part-wrapper mt-8 mb-8 relative",
        children: [p(_t, {
          subheader: !0,
          text: e.part.name
        }), p("p", {
          className: "absolute text-red-500 text-sm left-1/2 transform -translate-x-1/2",
          children: n
        })]
      })]
    }), p(ot, {
      text: i("virtualworkshop_swap_btn"),
      onClick: () => X("/update"),
      primary: !0
    }), p(ot, {
      text: i("virtualworkshop_remove_btn"),
      onClick: () => o(!0)
    }), p(kt, {}), a && p(Do, {
      isOpen: a,
      toggleModal: () => o(!1),
      content: i("virtualworkshop_remove_subtitle"),
      title: i("virtualworkshop_are_you_sure"),
      onConfirm: _,
      onCancel: () => o(!1),
      loading: f
    })]
  });
}
const cg = `.search-wrapper{position:relative;margin-bottom:12rem}@media (max-width: 767px){.search-wrapper{margin-bottom:22rem}}.search_bar-wrapper{border:1px solid rgb(209 213 219);border-radius:12px;display:flex;align-items:center;z-index:2;width:100%;background-color:#fff;position:absolute;transition:all ease-in-out .5s;padding:12px}.input_icon-wrapper{display:flex;align-items:center;gap:1rem;width:100%}.input_icon-wrapper input{width:100%}.svg-wrapper{cursor:pointer}.compatibility-wrapper{height:110px;position:absolute;width:100%;border-radius:12px;overflow:hidden;top:0}.compatibility{position:absolute;width:100%;top:-75px;height:71px;border:1px solid;border-bottom-right-radius:12px;border-bottom-left-radius:12px}.compatibility-contents{position:relative;height:54px;display:flex;align-items:center;border-bottom-left-radius:12px;margin-top:16px;overflow:hidden}@media (max-width: 767px){.compatibility-contents p{font-size:16px}}.polygon{position:absolute}.bikon{margin-left:.75rem}.compatibility-background{height:108px;position:absolute;z-index:-1;border-bottom-left-radius:12px;left:-2px;top:-38px;width:59px}.compatibility-warning_button{margin-left:auto;border:1px solid rgb(245 158 11);color:#451a03;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 32px;height:75%;margin-right:5px;margin-bottom:1px;font-weight:600}.results-wrapper{top:40px;height:0;overflow:hidden;position:absolute;width:100%;border:1px solid black;border-bottom-left-radius:12px;border-bottom-right-radius:12px;max-height:190px;overflow-y:scroll;background-color:#fff;z-index:1}.results{width:100%;padding:12px;padding-top:2rem;display:flex;flex-direction:column;gap:.5rem}.result{background-color:#fff;transition:ease-in-out .2s;border-radius:8px;padding-left:10px;padding-top:5px;padding-bottom:5px;cursor:pointer}.result:hover{background-color:#d9d9d966}.notes-wrapper{display:flex;flex-direction:column;gap:.5rem;padding-top:1rem}
`, dg = (i) => /* @__PURE__ */ R("svg", { width: 23, height: 23, viewBox: "0 0 23 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M0 9.26199C0 7.98077 0.242061 6.78221 0.726184 5.66631C1.21031 4.5504 1.87806 3.57089 2.72945 2.72776C3.58919 1.87637 4.58247 1.21096 5.70931 0.731536C6.83615 0.243845 8.04228 0 9.32771 0C10.6215 0 11.8318 0.243845 12.9586 0.731536C14.0855 1.21096 15.0788 1.87637 15.9385 2.72776C16.7982 3.57089 17.4701 4.5504 17.9543 5.66631C18.4384 6.78221 18.6805 7.98077 18.6805 9.26199C18.6805 10.3283 18.5052 11.345 18.1546 12.3121C17.804 13.271 17.3199 14.1389 16.7022 14.9159L22.6369 20.8178C22.7538 20.9418 22.8414 21.0782 22.8998 21.227C22.9666 21.384 23 21.5452 23 21.7105C23 21.9585 22.9457 22.1775 22.8372 22.3677C22.7287 22.566 22.5785 22.719 22.3865 22.8264C22.1945 22.9421 21.9733 23 21.7229 23C21.556 23 21.389 22.9669 21.2221 22.9008C21.0635 22.8429 20.9216 22.7562 20.7964 22.6404L14.8367 16.7137C14.0604 17.2758 13.209 17.7181 12.2825 18.0404C11.356 18.3545 10.3711 18.5116 9.32771 18.5116C8.04228 18.5116 6.83615 18.2719 5.70931 17.7925C4.58247 17.313 3.58919 16.6476 2.72945 15.7962C1.87806 14.9448 1.21031 13.9612 0.726184 12.8453C0.242061 11.7294 0 10.535 0 9.26199ZM1.81546 9.26199C1.81546 10.287 2.01161 11.25 2.40392 12.1509C2.79623 13.0437 3.3346 13.8331 4.01905 14.5191C4.71185 15.1969 5.50898 15.7301 6.41045 16.1186C7.32027 16.4988 8.29269 16.6889 9.32771 16.6889C10.3711 16.6889 11.3435 16.4988 12.245 16.1186C13.1548 15.7301 13.9519 15.1969 14.6364 14.5191C15.3292 13.8331 15.8675 13.0437 16.2515 12.1509C16.6438 11.25 16.84 10.287 16.84 9.26199C16.84 8.22875 16.6438 7.26577 16.2515 6.37305C15.8675 5.47206 15.3292 4.68266 14.6364 4.00485C13.9519 3.31878 13.1548 2.78562 12.245 2.40539C11.3435 2.01689 10.3711 1.82264 9.32771 1.82264C8.29269 1.82264 7.32027 2.01689 6.41045 2.40539C5.50898 2.78562 4.71185 3.31878 4.01905 4.00485C3.3346 4.68266 2.79623 5.47206 2.40392 6.37305C2.01161 7.26577 1.81546 8.22875 1.81546 9.26199Z", fill: "black" })), Uo = (i) => /* @__PURE__ */ R("svg", { width: 57, height: 40, viewBox: "0 0 57 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4343 1.80079C44.6538 2.54246 44.2342 3.3224 43.4943 3.54788L37.9829 5.22744L42.5437 17.3218C42.7699 17.2662 42.9979 17.2168 43.2272 17.1749C43.4564 17.1337 43.687 17.0993 43.9187 17.0724C44.1498 17.0449 44.3822 17.0256 44.6151 17.0131C44.8475 17.0012 45.0804 16.9962 45.3134 16.9987C45.547 17.0018 45.7794 17.0118 46.0117 17.0293C46.2441 17.0468 46.4758 17.0712 46.7069 17.1037C46.938 17.1356 47.1673 17.1756 47.396 17.2224C47.6246 17.2693 47.8508 17.3231 48.0764 17.3843C48.3013 17.4462 48.5244 17.5143 48.7451 17.5899C48.9657 17.6656 49.1839 17.7481 49.4002 17.8374C49.6159 17.9268 49.8286 18.0231 50.0381 18.1262C50.2477 18.2293 50.4541 18.3387 50.6575 18.4549C50.8603 18.5712 51.0594 18.6937 51.2547 18.8224C51.4501 18.9512 51.6412 19.0862 51.8285 19.2274C52.0153 19.3687 52.1977 19.5156 52.3758 19.6681C52.5539 19.8206 52.7265 19.9787 52.8948 20.1424C53.063 20.3062 53.2257 20.4749 53.3835 20.6493C53.5413 20.8237 53.6929 21.0024 53.8396 21.1862C53.9863 21.3699 54.1268 21.5581 54.2618 21.7512C54.3967 21.9437 54.5255 22.1406 54.6482 22.3418C54.7708 22.5424 54.8867 22.7474 54.997 22.9556C55.1067 23.1637 55.2103 23.3756 55.307 23.5906C55.4038 23.8056 55.4944 24.0237 55.5776 24.2443C55.6608 24.4649 55.7372 24.6881 55.8069 24.9137C55.8765 25.1393 55.9388 25.3668 55.9942 25.5962C56.0497 25.8262 56.0978 26.0568 56.1391 26.2899C56.1804 26.5224 56.2136 26.7562 56.2408 26.9912C56.2673 27.2256 56.2864 27.4612 56.2987 27.6974C56.3104 27.9331 56.3153 28.1693 56.3123 28.4056C56.3098 28.6418 56.2999 28.8781 56.2827 29.1137C56.2654 29.3493 56.2408 29.5843 56.2087 29.8187C56.1773 30.0524 56.1378 30.2856 56.0916 30.5174C56.0454 30.7487 55.9924 30.9787 55.932 31.2068C55.871 31.4356 55.8038 31.6612 55.7292 31.8856C55.6546 32.1093 55.5733 32.3306 55.4852 32.5493C55.3964 32.7681 55.3015 32.9837 55.2004 33.1968C55.0987 33.4093 54.9902 33.6187 54.8756 33.8243C54.761 34.0299 54.6402 34.2318 54.5132 34.4299C54.3863 34.6281 54.2531 34.8224 54.1138 35.0118C53.9746 35.2012 53.8297 35.3862 53.6793 35.5668C53.529 35.7474 53.3724 35.9224 53.2109 36.0931C53.0495 36.2637 52.8831 36.4287 52.7117 36.5887C52.5398 36.7481 52.3635 36.9024 52.1817 37.0512C52.0005 37.1993 51.815 37.3424 51.6251 37.4787C51.4347 37.6156 51.2406 37.7462 51.0427 37.8706C50.8443 37.9949 50.6427 38.1131 50.4369 38.2243C50.2316 38.3356 50.0227 38.4406 49.8107 38.5387C49.5987 38.6368 49.3836 38.7287 49.166 38.8131C48.9485 38.8974 48.7284 38.9749 48.506 39.0456C48.2835 39.1156 48.0591 39.1793 47.8323 39.2349C47.6061 39.2912 47.3781 39.3406 47.1488 39.3818C46.9195 39.4237 46.689 39.4581 46.4573 39.4849C46.2262 39.5118 45.9938 39.5312 45.7609 39.5431C45.5279 39.5556 45.2955 39.5599 45.062 39.5574C44.829 39.5549 44.5966 39.5449 44.3643 39.5268C44.1313 39.5093 43.9002 39.4843 43.6691 39.4524C43.438 39.4199 43.2087 39.3806 42.98 39.3337C42.7514 39.2862 42.5252 39.2324 42.2996 39.1706C42.0747 39.1093 41.8522 39.0412 41.6309 38.9656C41.4103 38.8899 41.1921 38.8074 40.9764 38.7174C40.7607 38.6281 40.548 38.5318 40.3379 38.4287C40.1283 38.3256 39.9219 38.2162 39.7191 38.0999C39.5163 37.9837 39.3172 37.8606 39.1219 37.7318C38.9265 37.6031 38.7354 37.4681 38.5481 37.3268C38.3613 37.1856 38.1789 37.0387 38.0008 36.8862C37.8233 36.7331 37.6501 36.5749 37.4825 36.4112C37.3142 36.2474 37.1515 36.0787 36.9937 35.9043C36.8359 35.7299 36.6843 35.5512 36.5376 35.3674C36.391 35.1837 36.2504 34.9949 36.1161 34.8024C35.9811 34.6093 35.8523 34.4124 35.7296 34.2118C35.607 34.0106 35.4911 33.8062 35.3808 33.5974C35.2711 33.3893 35.1676 33.1774 35.0708 32.9624C34.974 32.7474 34.8841 32.5293 34.8009 32.3087C34.7177 32.0881 34.6412 31.8649 34.5716 31.6393C34.5026 31.4137 34.4397 31.1862 34.3848 30.9562C34.3294 30.7268 34.2813 30.4956 34.24 30.2631C34.1993 30.0306 34.1654 29.7968 34.1389 29.5618C34.1124 29.3268 34.0933 29.0912 34.081 28.8556C34.0693 28.6193 34.0644 28.3831 34.0674 28.1468C34.0699 27.9106 34.0798 27.6743 34.0976 27.4387C34.1149 27.2031 34.1395 26.9681 34.171 26.7343C34.203 26.4999 34.2425 26.2668 34.2887 26.0356C34.3349 25.8037 34.3885 25.5737 34.4489 25.3456C34.5093 25.1174 34.5771 24.8912 34.6517 24.6674C34.7263 24.4437 34.8076 24.2224 34.8964 24.0037C34.9845 23.7849 35.0794 23.5693 35.1811 23.3562C35.2828 23.1437 35.3913 22.9343 35.5059 22.7287C35.6206 22.5231 35.7414 22.3212 35.8683 22.1231C35.9959 21.9249 36.129 21.7312 36.2683 21.5418C36.407 21.3518 36.5524 21.1668 36.7028 20.9868C36.8532 20.8062 37.0097 20.6312 37.1712 20.4606C37.3327 20.2906 37.4991 20.1249 37.6711 19.9656C37.843 19.8056 38.0193 19.6518 38.2005 19.5031C38.3817 19.3543 38.5678 19.2118 38.7576 19.0756C38.9481 18.9387 39.1422 18.8081 39.3407 18.6837C39.5385 18.5593 39.7407 18.4418 39.9459 18.3306L37.6544 12.2531L29.7544 28.8937C29.6977 29.0137 29.625 29.1224 29.5381 29.2218C29.4506 29.3206 29.3514 29.4049 29.2404 29.4756C29.1295 29.5462 29.0112 29.5993 28.8854 29.6362C28.7597 29.6724 28.6309 29.6906 28.5002 29.6906H22.8523C22.8085 30.0424 22.7481 30.3912 22.6717 30.7368C22.5947 31.0824 22.5022 31.4243 22.3943 31.7612C22.2859 32.0981 22.1626 32.4293 22.0233 32.7543C21.884 33.0793 21.7306 33.3974 21.5617 33.7074C21.3934 34.0181 21.211 34.3199 21.0144 34.6131C20.8178 34.9062 20.6076 35.1893 20.3845 35.4618C20.162 35.7349 19.9266 35.9968 19.6795 36.2474C19.4323 36.4974 19.1741 36.7362 18.9047 36.9618C18.6354 37.1874 18.3562 37.3999 18.0672 37.5993C17.7775 37.7981 17.4798 37.9831 17.1735 38.1537C16.8672 38.3243 16.5541 38.4799 16.233 38.6212C15.9125 38.7618 15.5859 38.8868 15.2531 38.9962C14.9209 39.1056 14.5843 39.1993 14.2429 39.2762C13.9021 39.3537 13.5582 39.4143 13.2112 39.4593C12.8648 39.5037 12.5166 39.5312 12.1671 39.5424C11.8177 39.5537 11.4689 39.5481 11.12 39.5262C10.7712 39.5037 10.4242 39.4649 10.0791 39.4093C9.73392 39.3543 9.39186 39.2824 9.0535 39.1943C8.71452 39.1062 8.38109 39.0024 8.05198 38.8824C7.72348 38.7624 7.40053 38.6274 7.08436 38.4762C6.76819 38.3256 6.45941 38.1599 6.15865 37.9799C5.85788 37.7999 5.56575 37.6056 5.28286 37.3974C4.99997 37.1893 4.72755 36.9681 4.465 36.7337C4.20245 36.4993 3.95161 36.2531 3.71248 35.9949C3.47273 35.7368 3.24592 35.4681 3.03144 35.1881C2.81696 34.9081 2.61604 34.6187 2.42868 34.3193C2.24132 34.0206 2.06814 33.7131 1.90913 33.3974C1.75011 33.0818 1.6059 32.7593 1.47709 32.4299C1.34827 32.1006 1.23487 31.7656 1.13688 31.4256C1.03888 31.0849 0.956912 30.7412 0.890966 30.3931C0.825636 30.0449 0.775714 29.6943 0.742433 29.3412C0.709152 28.9887 0.692511 28.6349 0.691895 28.2806C0.691895 27.9256 0.707919 27.5718 0.740584 27.2187C0.773249 26.8649 0.822554 26.5143 0.887884 26.1656C0.953214 25.8168 1.03457 25.4724 1.13195 25.1312C1.22933 24.7906 1.34211 24.4549 1.47092 24.1249C1.59973 23.7949 1.74334 23.4718 1.90173 23.1556C2.06074 22.8393 2.23393 22.5318 2.42129 22.2318C2.60865 21.9324 2.80957 21.6424 3.02343 21.3618C3.23791 21.0812 3.46472 20.8118 3.70446 20.5531C3.94421 20.2943 4.19505 20.0474 4.45761 19.8124C4.71954 19.5781 4.99257 19.3562 5.27546 19.1474C5.55835 18.9393 5.85049 18.7443 6.15187 18.5637C6.45325 18.3831 6.76202 18.2174 7.07881 18.0662C7.39498 17.9149 7.71794 17.7793 8.04705 17.6593C8.37678 17.5387 8.71083 17.4349 9.0498 17.3462C9.38878 17.2581 9.73083 17.1862 10.0766 17.1312C10.4217 17.0756 10.7693 17.0368 11.1188 17.0143C11.4676 16.9924 11.8177 16.9868 12.1671 16.9981C12.5166 17.0093 12.8654 17.0368 13.2124 17.0818C13.5594 17.1262 13.9039 17.1874 14.2454 17.2649C14.5868 17.3424 14.9239 17.4362 15.2568 17.5456C15.5896 17.6556 15.9162 17.7812 16.2373 17.9218C16.5584 18.0631 16.8721 18.2193 17.1791 18.3906C17.4854 18.5612 17.7837 18.7468 18.0727 18.9462C18.3618 19.1462 18.6416 19.3593 18.9109 19.5856C19.1802 19.8118 19.4385 20.0506 19.6862 20.3018C19.9334 20.5524 20.1682 20.8149 20.3913 21.0887C20.6138 21.3624 20.824 21.6456 21.02 21.9393C21.2166 22.2331 21.399 22.5356 21.5672 22.8468C21.7355 23.1574 21.889 23.4762 22.0276 23.8018C22.1663 24.1274 22.2896 24.4593 22.3974 24.7968C22.5053 25.1343 22.5971 25.4768 22.6729 25.8231C22.7493 26.1693 22.8091 26.5187 22.8523 26.8706H26.3283L19.5433 7.60432C19.489 7.45119 19.4625 7.29307 19.4625 7.13057H17.3769C17.2857 7.13057 17.1951 7.12182 17.1057 7.10369C17.0163 7.08557 16.9294 7.05869 16.845 7.02307C16.7606 6.98807 16.6805 6.94432 16.6046 6.89307C16.5282 6.84182 16.4586 6.78307 16.3939 6.71744C16.3292 6.65244 16.2712 6.58119 16.2207 6.50369C16.1701 6.42682 16.127 6.34557 16.0925 6.25994C16.0574 6.17494 16.0309 6.08682 16.013 5.99557C15.9951 5.90494 15.9865 5.81307 15.9865 5.72057C15.9865 5.62807 15.9951 5.53619 16.013 5.44557C16.0309 5.35494 16.0574 5.26682 16.0925 5.18119C16.127 5.09557 16.1701 5.01432 16.2207 4.93744C16.2712 4.86057 16.3292 4.78932 16.3939 4.72369C16.4586 4.65807 16.5282 4.59994 16.6046 4.54807C16.6805 4.49682 16.7606 4.45369 16.845 4.41807C16.9294 4.38244 17.0163 4.35557 17.1057 4.33744C17.1951 4.31994 17.2857 4.31057 17.3769 4.31057H23.6338C23.725 4.31057 23.8156 4.31994 23.9049 4.33744C23.9943 4.35557 24.0812 4.38244 24.1657 4.41807C24.2501 4.45369 24.3302 4.49682 24.406 4.54807C24.4824 4.59994 24.5521 4.65807 24.6168 4.72369C24.6815 4.78932 24.7388 4.86057 24.79 4.93744C24.8405 5.01432 24.8837 5.09557 24.9182 5.18119C24.9533 5.26682 24.9798 5.35494 24.9977 5.44557C25.0156 5.53619 25.0242 5.62807 25.0242 5.72057C25.0242 5.81307 25.0156 5.90494 24.9977 5.99557C24.9798 6.08682 24.9533 6.17494 24.9182 6.25994C24.8837 6.34557 24.8405 6.42682 24.79 6.50369C24.7388 6.58119 24.6815 6.65244 24.6168 6.71744C24.5521 6.78307 24.4824 6.84182 24.406 6.89307C24.3302 6.94432 24.2501 6.98807 24.1657 7.02307C24.0812 7.05869 23.9943 7.08557 23.9049 7.10369C23.8156 7.12182 23.725 7.13057 23.6338 7.13057H22.3296L24.8904 14.4018L36.1907 8.37119L34.8489 4.81432C34.8144 4.72369 34.7898 4.63057 34.775 4.53432C34.7596 4.43869 34.754 4.34244 34.7589 4.24557C34.7633 4.14869 34.7774 4.05307 34.8009 3.95932C34.8249 3.86557 34.8576 3.77494 34.9001 3.68807C34.942 3.60119 34.9925 3.51932 35.0517 3.44307C35.1102 3.36619 35.1762 3.29682 35.2495 3.23432C35.3223 3.17182 35.4012 3.11744 35.485 3.07119C35.5688 3.02494 35.6569 2.98744 35.7488 2.95994L42.6737 0.853036C43.4219 0.625398 44.2123 1.05089 44.4343 1.80079ZM25.8346 17.0849L28.5766 24.8687L34.4582 12.4831L25.8346 17.0849ZM43.8866 28.7843L40.9486 20.9912C40.8001 21.0799 40.6547 21.1731 40.5117 21.2712C40.3693 21.3693 40.2294 21.4712 40.0932 21.5781C39.9564 21.6849 39.8232 21.7956 39.6938 21.9112C39.5638 22.0262 39.438 22.1449 39.3154 22.2681C39.1934 22.3912 39.0744 22.5181 38.9598 22.6487C38.8451 22.7787 38.7348 22.9131 38.6282 23.0506C38.5216 23.1874 38.4193 23.3287 38.3213 23.4724C38.2239 23.6162 38.1302 23.7631 38.0415 23.9124C37.9521 24.0624 37.8683 24.2149 37.7888 24.3699C37.7087 24.5249 37.6341 24.6824 37.5638 24.8418C37.4942 25.0018 37.4288 25.1631 37.3691 25.3274C37.3087 25.4912 37.2538 25.6568 37.2039 25.8237C37.154 25.9912 37.109 26.1599 37.0695 26.3299C37.0295 26.4999 36.995 26.6712 36.966 26.8431C36.937 27.0156 36.913 27.1887 36.8945 27.3624C36.8754 27.5362 36.8624 27.7106 36.8544 27.8849C36.8464 28.0593 36.8433 28.2343 36.8464 28.4087C36.8489 28.5837 36.8569 28.7581 36.8705 28.9324C36.8834 29.1068 36.9025 29.2806 36.9265 29.4537C36.95 29.6268 36.9795 29.7987 37.0141 29.9699C37.0486 30.1412 37.088 30.3112 37.133 30.4799C37.178 30.6487 37.2279 30.8162 37.2828 30.9818C37.3382 31.1474 37.398 31.3112 37.4634 31.4731C37.5281 31.6349 37.5983 31.7943 37.6729 31.9518C37.7481 32.1093 37.8276 32.2643 37.912 32.4168C37.9965 32.5687 38.0852 32.7187 38.1789 32.8656C38.272 33.0124 38.37 33.1562 38.4723 33.2968C38.5746 33.4374 38.6812 33.5749 38.7915 33.7087C38.9025 33.8431 39.0171 33.9731 39.1354 34.0999C39.2544 34.2268 39.3764 34.3499 39.5028 34.4687C39.6291 34.5881 39.7585 34.7031 39.8917 34.8143C40.0248 34.9249 40.1616 35.0318 40.3009 35.1343C40.4408 35.2362 40.5832 35.3343 40.7292 35.4274C40.8747 35.5212 41.0232 35.6099 41.1742 35.6937C41.3252 35.7781 41.4787 35.8574 41.6346 35.9318C41.7905 36.0062 41.9489 36.0756 42.1092 36.1399C42.2694 36.2049 42.4315 36.2643 42.5948 36.3187C42.7588 36.3724 42.9239 36.4218 43.091 36.4656C43.258 36.5099 43.4256 36.5481 43.5951 36.5818C43.764 36.6149 43.9341 36.6431 44.1054 36.6656C44.2761 36.6887 44.4475 36.7056 44.6194 36.7174C44.7914 36.7293 44.9633 36.7362 45.1359 36.7374C45.3085 36.7381 45.4804 36.7337 45.6524 36.7243C45.825 36.7143 45.9963 36.6993 46.1676 36.6787C46.339 36.6581 46.5091 36.6324 46.6786 36.6012C46.8481 36.5699 47.0169 36.5337 47.1839 36.4918C47.3516 36.4499 47.5174 36.4024 47.6819 36.3506C47.8465 36.2981 48.0092 36.2406 48.1701 36.1781C48.3309 36.1156 48.4899 36.0487 48.6465 35.9762C48.8036 35.9037 48.9577 35.8262 49.1099 35.7437C49.2622 35.6618 49.4119 35.5749 49.5586 35.4831C49.7053 35.3918 49.8489 35.2956 49.9901 35.1949C50.1312 35.0943 50.2686 34.9893 50.4036 34.8799C50.538 34.7712 50.6686 34.6574 50.7968 34.5399C50.9244 34.4224 51.0483 34.3012 51.1684 34.1756C51.2886 34.0506 51.4045 33.9218 51.5167 33.7887C51.6288 33.6562 51.7373 33.5206 51.8415 33.3812C51.945 33.2418 52.0449 33.0993 52.1404 32.9531C52.2353 32.8074 52.3259 32.6593 52.4122 32.5081C52.4985 32.3562 52.5798 32.2024 52.6569 32.0462C52.7333 31.8893 52.8054 31.7306 52.8726 31.5699C52.9398 31.4087 53.002 31.2456 53.0587 31.0812C53.116 30.9162 53.1678 30.7493 53.2146 30.5812C53.2621 30.4131 53.3034 30.2437 53.3404 30.0731C53.3767 29.9018 53.4082 29.7299 53.434 29.5574C53.4605 29.3849 53.4809 29.2112 53.4963 29.0374C53.5123 28.8631 53.5222 28.6887 53.5271 28.5137C53.532 28.3393 53.5314 28.1643 53.5253 27.9899C53.5197 27.8149 53.5086 27.6406 53.492 27.4668C53.4753 27.2931 53.4538 27.1193 53.4266 26.9468C53.3995 26.7743 53.3669 26.6031 53.3293 26.4324C53.2917 26.2618 53.2491 26.0924 53.2011 25.9243C53.153 25.7568 53.1 25.5906 53.0421 25.4256C52.9841 25.2612 52.9206 25.0987 52.8529 24.9381C52.7851 24.7774 52.7117 24.6193 52.6341 24.4631C52.5564 24.3074 52.4744 24.1537 52.3869 24.0031C52.3 23.8518 52.2082 23.7043 52.112 23.5593C52.0159 23.4137 51.9154 23.2718 51.8107 23.1331C51.7059 22.9943 51.5974 22.8593 51.484 22.7274C51.3712 22.5956 51.2541 22.4668 51.1333 22.3424C51.0119 22.2181 50.8874 22.0974 50.7592 21.9806C50.631 21.8637 50.4991 21.7512 50.3642 21.6431C50.2292 21.5343 50.0905 21.4306 49.9494 21.3306C49.8076 21.2306 49.6634 21.1356 49.5155 21.0449C49.3682 20.9543 49.2184 20.8681 49.0656 20.7868C48.9133 20.7056 48.758 20.6293 48.6009 20.5581C48.4437 20.4862 48.2847 20.4199 48.1232 20.3581C47.9617 20.2968 47.7984 20.2406 47.6339 20.1893C47.4693 20.1381 47.3029 20.0918 47.1353 20.0512C46.9676 20.0106 46.7994 19.9749 46.6293 19.9443C46.4598 19.9143 46.2891 19.8893 46.1177 19.8699C45.9464 19.8506 45.775 19.8362 45.6025 19.8281C45.4305 19.8193 45.2579 19.8156 45.086 19.8181C44.9134 19.8199 44.7415 19.8274 44.5695 19.8406C44.3976 19.8537 44.2262 19.8718 44.0555 19.8956C43.8848 19.9193 43.7147 19.9487 43.5458 19.9831L46.4838 27.7774C46.5152 27.8637 46.5374 27.9518 46.5516 28.0424C46.5658 28.1331 46.5713 28.2243 46.5676 28.3162C46.5645 28.4074 46.5522 28.4981 46.5313 28.5874C46.5103 28.6768 46.4813 28.7631 46.4437 28.8468C46.4062 28.9299 46.3612 29.0093 46.3082 29.0837C46.2558 29.1581 46.1966 29.2268 46.1307 29.2899C46.0647 29.3524 45.9932 29.4087 45.9168 29.4574C45.8398 29.5056 45.759 29.5468 45.6746 29.5793C45.5901 29.6118 45.5032 29.6362 45.4145 29.6518C45.3251 29.6674 45.2351 29.6743 45.1445 29.6718C45.0546 29.6699 44.9652 29.6587 44.8764 29.6387C44.7883 29.6187 44.7026 29.5906 44.6201 29.5537C44.5369 29.5168 44.4586 29.4718 44.384 29.4199C44.3101 29.3674 44.241 29.3081 44.1782 29.2418C44.1153 29.1762 44.0598 29.1043 44.0105 29.0274C43.9612 28.9506 43.9199 28.8693 43.8866 28.7843ZM20.0425 26.8706H11.8152C11.724 26.8706 11.6334 26.8799 11.544 26.8974C11.4547 26.9156 11.3678 26.9424 11.2833 26.9781C11.1989 27.0137 11.1188 27.0568 11.043 27.1081C10.9666 27.1599 10.8969 27.2181 10.8322 27.2837C10.7675 27.3493 10.7095 27.4206 10.659 27.4974C10.6085 27.5743 10.5653 27.6556 10.5308 27.7412C10.4957 27.8268 10.4692 27.9149 10.4513 28.0056C10.4334 28.0962 10.4248 28.1881 10.4248 28.2806C10.4248 28.3731 10.4334 28.4649 10.4513 28.5556C10.4692 28.6468 10.4957 28.7349 10.5308 28.8199C10.5653 28.9056 10.6085 28.9868 10.659 29.0637C10.7095 29.1412 10.7675 29.2124 10.8322 29.2774C10.8969 29.3431 10.9666 29.4018 11.043 29.4531C11.1188 29.5043 11.1989 29.5481 11.2833 29.5831C11.3678 29.6187 11.4547 29.6456 11.544 29.6637C11.6334 29.6818 11.724 29.6906 11.8152 29.6906H20.0425C19.9987 29.9487 19.9432 30.2043 19.8761 30.4568C19.8089 30.7099 19.73 30.9587 19.64 31.2043C19.55 31.4499 19.449 31.6906 19.3374 31.9262C19.2252 32.1624 19.1026 32.3924 18.9695 32.6168C18.8363 32.8412 18.6934 33.0587 18.5405 33.2699C18.3877 33.4806 18.2249 33.6837 18.0536 33.8799C17.8817 34.0756 17.7017 34.2624 17.5131 34.4412C17.3245 34.6199 17.1279 34.7893 16.9233 34.9493C16.7193 35.1093 16.5079 35.2599 16.2903 35.3999C16.0721 35.5406 15.8484 35.6706 15.6185 35.7893C15.3886 35.9087 15.1538 36.0168 14.9141 36.1143C14.6743 36.2112 14.4303 36.2968 14.1825 36.3712C13.9354 36.4456 13.6845 36.5074 13.4312 36.5581C13.1779 36.6087 12.9228 36.6474 12.6657 36.6743C12.4094 36.7006 12.1517 36.7156 11.8935 36.7174C11.6353 36.7199 11.3776 36.7099 11.12 36.6881C10.863 36.6662 10.6072 36.6324 10.3527 36.5868C10.0988 36.5406 9.84732 36.4831 9.59833 36.4131C9.34933 36.3437 9.10404 36.2624 8.86244 36.1693C8.62146 36.0768 8.38479 35.9731 8.15244 35.8581C7.9207 35.7431 7.69452 35.6174 7.47387 35.4812C7.25323 35.3449 7.03937 35.1981 6.83228 35.0418C6.62582 34.8856 6.42613 34.7199 6.23384 34.5443C6.04216 34.3693 5.8585 34.1856 5.68347 33.9931C5.50843 33.8006 5.34264 33.5999 5.1861 33.3924C5.02955 33.1843 4.88225 32.9693 4.74543 32.7474C4.60799 32.5256 4.48164 32.2974 4.36516 32.0637C4.24929 31.8299 4.1439 31.5912 4.0496 31.3474C3.95531 31.1037 3.8721 30.8556 3.80061 30.6043C3.72912 30.3524 3.66872 30.0981 3.62064 29.8412C3.57195 29.5837 3.53559 29.3249 3.51094 29.0643C3.48629 28.8037 3.47334 28.5424 3.47273 28.2806C3.47273 28.0181 3.48444 27.7562 3.50786 27.4949C3.53189 27.2337 3.56764 26.9737 3.6151 26.7162C3.66255 26.4581 3.72234 26.2031 3.79321 25.9506C3.86409 25.6981 3.94668 25.4499 4.04036 25.2049C4.13465 24.9606 4.23943 24.7206 4.3553 24.4862C4.47116 24.2512 4.59751 24.0231 4.73433 23.7999C4.87116 23.5774 5.01784 23.3612 5.17439 23.1524C5.33093 22.9437 5.49672 22.7424 5.67176 22.5493C5.84679 22.3562 6.03045 22.1712 6.22274 21.9956C6.41442 21.8193 6.61411 21.6531 6.82181 21.4956C7.02889 21.3387 7.24275 21.1918 7.46401 21.0549C7.68465 20.9181 7.91146 20.7918 8.14381 20.6762C8.37616 20.5606 8.61345 20.4562 8.85504 20.3631C9.09726 20.2699 9.34255 20.1887 9.59216 20.1187C9.84177 20.0487 10.0938 19.9906 10.3484 19.9449C10.6035 19.8987 10.8599 19.8643 11.1176 19.8424C11.3758 19.8206 11.634 19.8106 11.8929 19.8131C12.1517 19.8156 12.4094 19.8306 12.667 19.8574C12.9246 19.8837 13.1804 19.9231 13.4343 19.9737C13.6876 20.0249 13.9391 20.0874 14.1868 20.1618C14.4352 20.2368 14.6793 20.3231 14.9196 20.4206C15.16 20.5181 15.3948 20.6268 15.6253 20.7468C15.8552 20.8668 16.0795 20.9968 16.2977 21.1381C16.5165 21.2793 16.7273 21.4299 16.9319 21.5912C17.1365 21.7518 17.3331 21.9224 17.5217 22.1018C17.7103 22.2812 17.8909 22.4693 18.0622 22.6656C18.2336 22.8624 18.3957 23.0668 18.5485 23.2781C18.7014 23.4899 18.8443 23.7087 18.9769 23.9343C19.11 24.1593 19.232 24.3906 19.3436 24.6274C19.4551 24.8643 19.5556 25.1056 19.6449 25.3518C19.7343 25.5981 19.812 25.8481 19.8785 26.1018C19.9445 26.3556 19.9993 26.6118 20.0425 26.8706Z", fill: "white" })), Go = (i) => /* @__PURE__ */ R("svg", { preserveAspectRatio: "none", width: 123, height: 82, viewBox: "0 0 123 82", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M120.365 37.1527C122.774 39.152 122.774 42.848 120.365 44.8473L76.9935 80.8473C76.0961 81.5923 74.9664 82 73.8001 82L0 82L0 0L73.8001 0C74.9664 0 76.0961 0.407744 76.9935 1.15267L120.365 37.1527Z", fill: "currentColor" })), ug = (i, e) => {
  const [t, r] = B(i);
  return V(() => {
    const a = setTimeout(() => {
      r(i);
    }, e);
    return () => {
      clearTimeout(a);
    };
  }, [i, e]), t;
}, ao = (i) => /* @__PURE__ */ R("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("circle", { cx: 16, cy: 16, r: 16, fill: "#030712" }), /* @__PURE__ */ R("path", { d: "M15.6047 20.0343C15.1 20.0343 14.6794 19.6137 14.6794 19.109V18.7389C14.6121 16.7203 15.9748 15.8455 16.9673 15.2062C18.0439 14.5165 18.6495 14.0623 18.6495 12.8343C18.6495 11.2698 17.5056 10.2604 15.7393 10.2604C15.3187 10.2773 13.3505 10.496 13.3505 12.8175C13.3505 13.3221 12.9299 13.7427 12.4252 13.7427C11.9206 13.7427 11.5 13.3221 11.5 12.8175C11.5 9.4025 14.2589 8.44362 15.7056 8.40997H15.7224C18.5318 8.40997 20.5 10.2268 20.5 12.8343C20.5 15.1389 19.0364 16.081 17.9766 16.7707C16.9841 17.41 16.5131 17.7632 16.5467 18.6885C16.5467 18.7053 16.5467 18.7053 16.5467 18.7221V19.109C16.5299 19.6305 16.1093 20.0343 15.6047 20.0343Z", fill: "white" }), /* @__PURE__ */ R("path", { d: "M15.6887 23.5838C16.274 23.5838 16.7485 23.1093 16.7485 22.524C16.7485 21.9387 16.274 21.4642 15.6887 21.4642C15.1034 21.4642 14.6289 21.9387 14.6289 22.524C14.6289 23.1093 15.1034 23.5838 15.6887 23.5838Z", fill: "white" })), xr = (i) => /* @__PURE__ */ R("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("circle", { cx: 16, cy: 16, r: 16, fill: "#10B981" }), /* @__PURE__ */ R("path", { d: "M10.5261 17.6842L14.4467 21.1056L21.5366 11.2421", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Gi = (i) => /* @__PURE__ */ R("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("circle", { cx: 16, cy: 16, r: 16, fill: "#EF4444" }), /* @__PURE__ */ R("path", { d: "M10.913 21.0829L15.9959 16M15.9959 16L21.0789 10.9171M15.9959 16L21.0789 21.0829M15.9959 16L10.913 10.9171", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Cr = (i) => /* @__PURE__ */ R("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("circle", { cx: 16, cy: 16, r: 15.5, fill: "#F59E0B", stroke: "#F59E0B" }), /* @__PURE__ */ R("path", { d: "M18 23.9603C18 25.0648 17.1041 25.96 15.9997 25.96C14.8951 25.96 14 25.0648 14 23.9603C14 22.8548 14.8951 21.96 15.9997 21.96C17.1041 21.9602 18 22.8551 18 23.9603Z", fill: "white" }), /* @__PURE__ */ R("path", { d: "M18.222 8.13512C18.1818 7.67877 18.0044 7.24904 17.7339 6.89648C17.3204 6.35776 16.6887 5.99896 15.9949 6C15.3216 5.99917 14.7072 6.33675 14.2935 6.84864C14.0016 7.20973 13.8096 7.65776 13.7676 8.13512C13.7565 8.26117 13.7578 8.39783 13.7676 8.52034L14.6898 18.9815C14.7177 19.2972 14.8575 19.5762 15.0669 19.7837C15.3063 20.0211 15.6364 20.1652 15.9949 20.1648C16.3175 20.1652 16.6171 20.0483 16.8481 19.8522C17.0987 19.6396 17.2688 19.333 17.2998 18.9813L18.222 8.52013C18.232 8.39762 18.2331 8.26117 18.222 8.13512Z", fill: "white" })), Ur = {
  unavailable: {
    icon: ao,
    heading: "Compatibility Information Not Available",
    heading_code: "checksku_message_nocompatibilityinfo"
  },
  check: {
    icon: ao,
    heading: "Check Compatibility",
    heading_code: "productcheck_nobikeselected_label",
    details: "Add your ride to check if this part fits",
    details_code: "productcheck_nobikeselected_message"
  },
  compatible: {
    icon: xr,
    heading: "Compatible",
    heading_code: "compatible"
  },
  incompatible: {
    icon: Gi,
    heading: "Not Compatible",
    heading_code: "not_compatible"
  },
  warning: {
    icon: Cr,
    heading: "Compatible - Check Notes",
    heading_code: "compatible_check_notes"
  }
};
function pg({
  type: i,
  onSelect: e,
  categoryId: t,
  removePart: r,
  notes: a,
  clearNotes: o,
  notesViewed: n,
  setNotesViewed: s
}) {
  var Q;
  const c = window.BikeMatrix.getConfig(), d = new ze(c.apiUrl, c.apiKey, c.apiToken, c.isShopify), [u, f] = B(!1), h = K(null), _ = K(null), m = K(null), [y, v] = B(""), [g, b] = B(null), [k, w] = B([]), [C, S] = B(!1), [z, x] = B(""), T = ug(y, 500), [A, E] = B(!1), {
    t: M
  } = J(), O = async () => {
    S(!0);
    const H = await d.findProducts(y, t);
    H.success ? (S(!1), w(H.data)) : (S(!1), x(H.error), c.logLevel === "verbose" && console.error(H.logError));
  };
  V(() => {
    (T && !g && y.length > 2 || T && g && (g == null ? void 0 : g.display_Name) !== y) && O();
  }, [T]), V(() => {
    k.length > 0 && y.length > 2 && N();
  }, [k]);
  const j = (H) => {
    b(H), v(H.display_Name), e(H);
  };
  V(() => {
    g && y === g.display_Name && D();
  }, [y, g]);
  const N = () => {
    ne.to(h.current, {
      height: "auto"
    });
  }, D = () => {
    ne.to(h.current, {
      height: 0
    });
  }, P = () => {
    u && $(), v(""), w([]), D(), o();
  };
  V(() => {
    u || (b(null), r());
  }, [u]);
  const L = () => {
    ne.to(_.current, {
      transform: "translateY(112px)",
      duration: 1,
      onComplete: () => f(!0)
    });
  }, $ = () => {
    ne.to(_.current, {
      transform: "translateY(0px)",
      duration: 1,
      onComplete: () => f(!1)
    });
  };
  return V(() => {
    i ? L() : !i && u && $();
  }, [i]), p(F, {
    children: [p("div", {
      className: "search-wrapper",
      children: [p("style", {
        type: "text/css",
        children: cg
      }), z && p(Je, {
        messages: z
      }), p("div", {
        className: Y("compatibility-wrapper"),
        ref: m,
        style: {
          height: i === "warning" ? "140px" : "110px"
        },
        children: p("div", {
          className: Y("compatibility ", {
            compatible: "bg-emerald-50",
            incompatible: "bg-red-50",
            warning: "bg-amber-50",
            "no-information": "bg-white"
          }[i]),
          style: {
            borderColor: i === "compatible" ? "rgb(16 185 129)" : i == "incompatible" ? "rgb(239 68 68)" : i === "warning" ? "rgb(245 158 11)" : i === "no-information" ? "#000" : "transparent"
          },
          ref: _,
          children: [p("div", {
            className: Y("compatibility-contents"),
            children: [p(Go, {
              class: Y("self-start h-full w-[93px] polygon", {
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-500",
                "no-information": "text-black"
              }[i])
            }), p(Uo, {
              class: "h-[26px] w-[37.5px] absolute bikon"
            }), p("p", {
              className: Y("font-semibold text-lg ml-[105px]", {
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-950",
                "no-information": "text-black"
              }[i]),
              children: M((Q = Ur[i]) == null ? void 0 : Q.heading_code)
            }), i === "warning" && p("button", {
              className: "compatibility-warning_button",
              onClick: () => E(!0),
              children: "Notes"
            })]
          }), p("div", {
            className: Y("compatibility-background ", {
              compatible: "bg-emerald-500",
              incompatible: "bg-red-500",
              warning: "bg-amber-500",
              "no-information": "bg-black"
            }[i])
          })]
        })
      }), p("div", {
        className: Y("search_bar-wrapper text-lg", {
          compatible: "bg-emerald-50 border-emerald-500",
          incompatible: "bg-red-50 border-red-500",
          warning: "bg-amber-50 border-amber-500",
          "no-information": "bg-white border-black-500"
        }[i]),
        style: {
          borderColor: i === "compatible" ? "rgb(16 185 129)" : i == "incompatible" ? "rgb(239 68 68)" : i === "warning" ? "rgb(245 158 11)" : "rgb(0 0 0)"
        },
        children: [p("div", {
          className: "input_icon-wrapper",
          children: [!C && p("div", {
            className: "svg-wrapper",
            children: p(dg, {})
          }), p(bt, {
            isLoading: C,
            colour: "#000"
          }), p("input", {
            type: "text",
            placeholder: M("virtualworkshop_search_text"),
            value: y,
            onChange: (H) => v(H.currentTarget.value)
          })]
        }), p("div", {
          className: "svg-wrapper",
          onClick: P,
          children: p(il, {})
        })]
      }), p("div", {
        className: "results-wrapper",
        ref: h,
        children: p("div", {
          className: "results text-lg",
          children: k && k.length > 0 ? k.map((H) => p("div", {
            className: "result",
            onClick: () => {
              j(H);
            },
            children: H.display_Name
          }, H.product_ID)) : p("div", {
            className: "result",
            children: M("error_find_products_no_results")
          })
        })
      })]
    }), p(Do, {
      isOpen: A,
      toggleModal: () => E(!1),
      title: "Notes",
      onConfirm: () => {
        s(), E(!1);
      },
      onCancel: () => E(!1),
      children: p("div", {
        className: "notes-wrapper",
        children: [!!a.compatible && p("p", {
          class: "text-sm flex",
          children: [p(xr, {
            class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
          }), " ", a.compatible]
        }), p("p", {
          class: "text-sm flex",
          children: [p(Cr, {
            class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
          }), " ", a.warning]
        })]
      })
    })]
  });
}
function fg() {
  const {
    t: i
  } = J(), t = window.BikeMatrix.getConfig(), r = Qi.value, a = ye.value, o = new ze(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), {
    currentBike: n,
    setCurrentBike: s
  } = Be(), [l, c] = B(!1), [d, u] = B(null), [f, h] = B(null), [_, m] = B(null), [y, v] = B({
    compatible: "",
    warning: ""
  }), [g, b] = B(!1);
  n.isShared && X("/");
  const k = async () => {
    c(!0), Fo(), a[r.category.split(" ").join("_")][r.type.split(" ").join("_")] = {
      ...a[r.category.split(" ").join("_")][r.type.split(" ").join("_")],
      id: f.product_ID,
      name: f.display_Name,
      unsaved_changes: !0
    }, ye.value = a;
    const C = await o.addComponent(n.key, f.product_Category_ID, f.product_ID, Vo[r.type.split(" ").join("_")]);
    if (C.success)
      s({
        ...n
      }), X("/bom");
    else {
      m(C.error), c(!1), t.logLevel === "verbose" && console.error(C.logError);
      return;
    }
  }, w = async (C) => {
    var S;
    if (v({
      compatible: "",
      warning: ""
    }), !C.skU_EAN && !C.skU_UPC && !C.manufacturer_Part_Number)
      u("no-information");
    else {
      h(C);
      const z = ((S = hr()) == null ? void 0 : S.language) || "en-GB", x = await o.checkSkuCompatibility(n.key, C.skU_EAN || C.skU_UPC || C.manufacturer_Part_Number, z);
      x.success || (t.logLevel === "verbose" && console.error(x.logError), m(x.error)), x.data.compatible && x.data.warning ? (b(!1), u("warning"), v({
        warning: x.data.warningMessage,
        compatible: x.data.compatibilityMessage
      })) : x.data.compatible ? (u("compatible"), b(!0)) : x.data.compatible || u("incompatible");
    }
  };
  return r ? p(F, {
    children: [p("div", {
      children: [n ? p(Ze, {
        bike: n,
        selected: !0,
        settings: !0
      }) : p(Er, {}), p("div", {
        className: "part-wrapper mt-8 mb-8",
        children: [p(_t, {
          text: r != null && r.type ? i("virtualworkshop_current") + " " + i(`category_${r.type.replace(/[ &]/g, "").toLocaleLowerCase()}`) + ":" : i(`category_${r.type.replace(/[ &]/g, "").toLocaleLowerCase()}`),
          bold: !0,
          capitalize: !0
        }), p(_t, {
          subheader: !0,
          text: r == null ? void 0 : r.part.name
        })]
      })]
    }), p(pg, {
      notes: y,
      onSelect: (C) => w(C),
      type: d,
      categoryId: r.part.product_category_id,
      clearNotes: () => v({
        compatible: "",
        warning: ""
      }),
      removePart: () => {
        u(null), h(null);
      },
      notesViewed: g,
      setNotesViewed: () => b(!0)
    }), p(Je, {
      messages: _
    }), p(ot, {
      text: i("confirm"),
      onClick: k,
      primary: !0,
      disabled: d === "incompatible" || d === "no-information" || !g,
      loading: l
    }), p(kt, {})]
  }) : p(F, {});
}
const hg = `.edit-field__wrapper{position:relative}.edit-container{display:flex;align-items:center;gap:1rem;margin-top:8px}.edit-input_wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:flex;align-items:center;height:54px;transition:ease-in-out all .5s}.edit-input_content{display:flex;gap:.5rem;cursor:pointer}.input-wrapper{width:100%}.edit-input{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.edit-input_content{width:100%;display:grid}.svg{width:20px;height:20px;cursor:pointer}.icon-wrapper{display:flex;align-items:center;gap:.25rem}.generic-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.edit-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.edit-button:hover{background-color:#000}.edit-button:hover svg{color:#fff}.edit-button:hover .label-wrapper{opacity:1;top:-32px}.edit-button:hover .tick{stroke:#fff}.edit-button svg{width:16px;height:16px}.tick{stroke:#000}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}.edit-open-wrapper{display:flex;gap:1rem}.notice{position:absolute;right:0;bottom:-20px}
`, gg = (i) => /* @__PURE__ */ R("svg", { width: 13, height: 13, viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M1.19739 8.1317L4.99549 11.4461L11.8639 1.8909", stroke: "currentColour", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), mg = (i) => /* @__PURE__ */ R("svg", { width: 16, height: 16, viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M1.71186 11C1.14322 11 0.714757 10.8578 0.426485 10.5733C0.142162 10.2889 0 9.86613 0 9.30512V2.85152C0 2.28656 0.142162 1.86382 0.426485 1.58332C0.714757 1.29886 1.14322 1.15663 1.71186 1.15663H8.12098L7.30355 1.97444H1.72371C1.43149 1.97444 1.2064 2.05148 1.04844 2.20557C0.894433 2.35965 0.817429 2.58879 0.817429 2.893V9.25771C0.817429 9.56192 0.894433 9.79106 1.04844 9.94514C1.2064 10.0992 1.43149 10.1763 1.72371 10.1763H8.2513C8.47639 10.1763 8.66001 10.0992 8.80217 9.94514C8.94828 9.79106 9.02134 9.56192 9.02134 9.25771V3.72859L9.83877 2.90485V9.30512C9.83877 9.86613 9.70055 10.2889 9.42413 10.5733C9.15165 10.8578 8.76663 11 8.26907 11H1.71186ZM3.80875 7.3317C3.76136 7.35541 3.71792 7.34553 3.67843 7.30207C3.63894 7.25861 3.63104 7.21318 3.65474 7.16577L4.13453 6.16425L9.35305 0.943291L10.0757 1.65443L4.85126 6.87539L3.80875 7.3317ZM10.4785 1.25738L9.76176 0.534386L10.1527 0.143259C10.2396 0.0563415 10.3403 0.0089322 10.4548 0.00103064C10.5693 -0.00687092 10.668 0.0306615 10.751 0.113628L10.8694 0.232151C10.9603 0.323019 11.0037 0.425739 10.9998 0.540312C10.9998 0.654885 10.9543 0.761556 10.8635 0.860325L10.4785 1.25738Z", fill: "currentColor" })), Qn = ({
  value: i,
  onSave: e,
  loading: t,
  label: r,
  success: a,
  error: o
}) => {
  const {
    t: n
  } = J(), [s, l] = B(!1), [c, d] = B(i), u = K(null), f = K(null), [h, _] = B({
    type: "",
    message: ""
  }), [m, y] = B(!1), v = () => {
    const b = ne.timeline();
    b.to(f.current, {
      opacity: 0
    }), b.to(f.current, {
      width: "124px"
    }), b.to(f.current, {
      onStart: () => l(!0),
      opacity: 1
    });
  }, g = () => {
    const b = ne.timeline();
    b.to(f.current, {
      opacity: 0
    }), b.to(f.current, {
      width: "54px"
    }), b.to(f.current, {
      onStart: () => {
        l(!1);
      },
      opacity: 1
    });
  };
  return V(() => {
    s && u.current.focus();
  }, [s]), V(() => {
    a ? (g(), _({
      type: "success",
      message: n("virtualworkshop_saved", {
        label: r
      })
    })) : !a && a !== null && (g(), _({
      type: "error",
      message: o
    }));
  }, [a]), p("div", {
    className: "edit-field__wrapper",
    children: [p("style", {
      type: "text/css",
      children: hg
    }), r && p("label", {
      class: "text-gray-800 font-bold text",
      children: r
    }), p("div", {
      className: "edit-container",
      children: [p("div", {
        className: "edit-input_wrapper",
        style: s && {
          border: "1px solid #000"
        },
        children: [s && p("div", {
          className: "input-wrapper",
          children: p("input", {
            maxLength: 80,
            type: "text",
            className: "edit-input",
            placeholder: c,
            onChange: (b) => d(b.currentTarget.value),
            value: c,
            ref: u,
            onKeyDown: (b) => {
              b.key === "Enter" && e(c);
            }
          })
        }), !s && p("div", {
          className: "edit-input_content",
          children: p("p", {
            className: "generic-text",
            children: i
          })
        })]
      }), p("div", {
        className: "edit-save-cancel-wrapper",
        ref: f,
        children: [!s && p("div", {
          className: "edit-button",
          onClick: v,
          children: [p("div", {
            className: "label-wrapper",
            children: p("div", {
              className: "button-label",
              children: n("edit")
            })
          }), p(mg, {})]
        }), s && p("div", {
          className: "edit-open-wrapper",
          onMouseOver: () => y(!0),
          onMouseLeave: () => y(!1),
          children: [p("div", {
            className: "edit-button",
            onClick: () => {
              t || e(c);
            },
            children: [p("div", {
              className: "label-wrapper",
              children: p("div", {
                className: "button-label",
                children: n("save")
              })
            }), t ? p(bt, {
              isLoading: t,
              colour: m ? "#fff" : "#000"
            }) : p(gg, {
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
                children: n("cancel")
              })
            }), p(ti, {})]
          })]
        })]
      })]
    }), h.message && p("p", {
      class: "text-xs notice flex",
      style: {
        color: h.type === "success" ? "#10B981" : "#EF4444"
      },
      children: h.message
    })]
  });
}, _g = `.copy-share_wrapper{display:flex;align-items:center;gap:1rem;margin-top:8px}.value-wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:grid;height:54px}.generic-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.share-button,.copy-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.share-button:hover,.copy-button:hover{background-color:#000}.share-button:hover svg,.copy-button:hover svg{color:#fff}.share-button:hover .label-wrapper,.copy-button:hover .label-wrapper{opacity:1;top:-32px}.share-button svg,.copy-button svg{width:16px}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}
`, bg = (i) => /* @__PURE__ */ R("svg", { width: 22, height: 27, viewBox: "0 0 22 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M5.23701 5.89236V3.30519C5.23701 2.21106 5.51143 1.38666 6.06029 0.831997C6.61677 0.277332 7.43624 0 8.51871 0H12.738C13.2717 0 13.7481 0.0759814 14.1674 0.227944C14.5942 0.379907 14.9906 0.638244 15.3565 1.00295L20.9938 6.71296C21.3825 7.10806 21.6455 7.51836 21.7827 7.94386C21.9276 8.36176 22 8.87083 22 9.47108V18.3837C22 19.4778 21.7256 20.3022 21.1767 20.8569C20.6355 21.404 19.8198 21.6775 18.7297 21.6775H16.4314V20.1047H18.6497C19.2367 20.1047 19.6788 19.9527 19.9761 19.6488C20.2734 19.3449 20.422 18.9118 20.422 18.3495V9.0152H15.1965C14.6019 9.0152 14.1559 8.87463 13.8586 8.5935C13.5613 8.30477 13.4127 7.85268 13.4127 7.23723V1.58421H8.59875C8.01178 1.58421 7.56583 1.73618 7.26091 2.0401C6.96362 2.34403 6.81497 2.77712 6.81497 3.33938V5.89236H5.23701ZM14.8534 7.02068C14.8534 7.40059 15.044 7.59054 15.4252 7.59054H19.999L14.8534 2.39341V7.02068ZM0 23.6948V8.61629C0 7.52216 0.274428 6.70156 0.823285 6.1545C1.37214 5.59983 2.1878 5.3225 3.27027 5.3225H7.13514C7.71448 5.3225 8.18711 5.38328 8.55301 5.50485C8.92654 5.62642 9.30769 5.88476 9.69647 6.27986L15.8025 12.4686C16.2065 12.8789 16.4695 13.2664 16.5915 13.6311C16.7134 13.9958 16.7744 14.5049 16.7744 15.1583V23.6948C16.7744 24.7889 16.5 25.6133 15.9511 26.168C15.4023 26.7227 14.5866 27 13.5042 27H3.27027C2.1878 27 1.37214 26.7227 0.823285 26.168C0.274428 25.6133 0 24.7889 0 23.6948ZM1.5894 23.6606C1.5894 24.2305 1.73423 24.6636 2.02391 24.9599C2.32121 25.2638 2.75953 25.4158 3.33888 25.4158H13.4127C13.9997 25.4158 14.4418 25.2638 14.7391 24.9599C15.044 24.6636 15.1965 24.2305 15.1965 23.6606V15.1811H9.01039C8.36244 15.1811 7.87457 15.0215 7.54678 14.7024C7.21899 14.3833 7.05509 13.8932 7.05509 13.2322V6.90671H3.35031C2.77096 6.90671 2.33264 7.05867 2.03534 7.3626C1.73805 7.65893 1.5894 8.08442 1.5894 8.63909V23.6606ZM9.18191 13.7108H14.8763L8.54158 7.29422V13.0612C8.54158 13.2892 8.59113 13.4563 8.69023 13.5627C8.79695 13.6615 8.96085 13.7108 9.18191 13.7108Z", fill: "currentColor" })), vg = (i) => /* @__PURE__ */ R("svg", { width: 16, height: 21.6, viewBox: "0 0 20 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M3.58702 27C2.40708 27 1.51426 26.682 0.908555 26.046C0.302851 25.4184 0 24.4812 0 23.2343V11.4728C0 10.2176 0.302851 9.27615 0.908555 8.64854C1.51426 8.01255 2.40708 7.69456 3.58702 7.69456H6.89086V9.82845H3.66962C3.13471 9.82845 2.72566 9.97908 2.44248 10.2803C2.15929 10.5732 2.0177 11.0209 2.0177 11.6234V23.0837C2.0177 23.6695 2.15929 24.113 2.44248 24.4142C2.72566 24.7155 3.13471 24.8661 3.66962 24.8661H16.3422C16.8692 24.8661 17.2783 24.7155 17.5693 24.4142C17.8604 24.113 18.0059 23.6695 18.0059 23.0837V11.6234C18.0059 11.0209 17.8604 10.5732 17.5693 10.2803C17.2783 9.97908 16.8692 9.82845 16.3422 9.82845H13.1209V7.69456H16.413C17.6087 7.69456 18.5054 8.01255 19.1032 8.64854C19.7011 9.28452 20 10.2259 20 11.4728V23.2343C20 24.4812 19.7011 25.4184 19.1032 26.046C18.5054 26.682 17.6087 27 16.413 27H3.58702ZM10.0059 17.6109C9.73845 17.6109 9.51032 17.5105 9.32153 17.3096C9.13274 17.1088 9.03835 16.8745 9.03835 16.6067V4.53138L9.10914 2.76151L8.38938 3.62762L6.77286 5.46025C6.5998 5.66946 6.37955 5.77406 6.11209 5.77406C5.86037 5.77406 5.65192 5.69038 5.48673 5.52301C5.3294 5.34728 5.25074 5.13389 5.25074 4.88285C5.25074 4.6318 5.3412 4.41004 5.52212 4.21757L9.28614 0.351464C9.40413 0.225941 9.52212 0.138075 9.64012 0.0878661C9.75811 0.0292887 9.88004 0 10.0059 0C10.1318 0 10.2498 0.0292887 10.3599 0.0878661C10.4779 0.138075 10.5959 0.225941 10.7139 0.351464L14.4779 4.21757C14.6667 4.41004 14.7611 4.6318 14.7611 4.88285C14.7611 5.13389 14.6745 5.34728 14.5015 5.52301C14.3363 5.69038 14.1318 5.77406 13.8879 5.77406C13.6205 5.77406 13.4041 5.66946 13.2389 5.46025L11.6106 3.62762L10.8909 2.77406L10.9735 4.53138V16.6067C10.9735 16.8745 10.8751 17.1088 10.6785 17.3096C10.4897 17.5105 10.2655 17.6109 10.0059 17.6109Z", fill: "currentColor" })), es = ({
  text: i,
  onShare: e,
  label: t,
  onCopy: r
}) => {
  const {
    t: a
  } = J(), [o, n] = B(a("virtualworkshop_copy"));
  return p("div", {
    children: [p("style", {
      type: "text/css",
      children: _g
    }), t && p("label", {
      class: "text-gray-800 font-bold text",
      children: t
    }), p("div", {
      className: "copy-share_wrapper",
      children: [p("div", {
        className: "value-wrapper",
        children: p("div", {
          className: "generic-text",
          children: i
        })
      }), e && p("div", {
        className: "share-button",
        onClick: () => e(i),
        children: [p("div", {
          className: "label-wrapper",
          children: p("div", {
            className: "button-label",
            children: a("share")
          })
        }), p(vg, {})]
      }), p("div", {
        className: "copy-button",
        onClick: () => {
          r(i), n("Copied");
        },
        onMouseLeave: () => setTimeout(() => {
          n(a("copy"));
        }, 1e3),
        children: [p("div", {
          className: "label-wrapper",
          children: p("div", {
            className: "button-label",
            children: o
          })
        }), p(bg, {})]
      })]
    })]
  });
}, yg = `.question-button{display:flex;justify-content:center;align-items:center;background-color:#000;border-radius:100%;height:31px;width:31px;color:#fff;position:absolute;top:36px;right:1.5rem;cursor:pointer}@media screen and (max-width: 639px){.question-button{top:24px;right:32px}}
`, Sc = (i) => /* @__PURE__ */ R("svg", { width: 8, height: 14, viewBox: "0 0 8 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ R("path", { d: "M2.80272 10.0382V9.95794C2.81179 9.1058 2.90249 8.42766 3.07483 7.92352C3.24717 7.41938 3.49206 7.01115 3.80952 6.69885C4.12698 6.38655 4.50794 6.09879 4.95238 5.83556C5.21995 5.67495 5.46032 5.48534 5.67347 5.26673C5.88662 5.04366 6.05442 4.78713 6.17687 4.49713C6.30385 4.20714 6.36735 3.88591 6.36735 3.53346C6.36735 3.09624 6.26304 2.71702 6.05442 2.39579C5.8458 2.07457 5.56689 1.82696 5.21769 1.65296C4.86848 1.47897 4.48073 1.39197 4.05442 1.39197C3.68254 1.39197 3.32426 1.46781 2.97959 1.6195C2.63492 1.77119 2.34694 2.00988 2.11565 2.33556C1.88435 2.66125 1.75057 3.08732 1.71429 3.61377H0C0.0362812 2.85532 0.235828 2.20618 0.598639 1.66635C0.965986 1.12651 1.44898 0.71383 2.04762 0.428298C2.65079 0.142766 3.31973 0 4.05442 0C4.85261 0 5.54649 0.15615 6.13605 0.468451C6.73016 0.780752 7.18821 1.20905 7.5102 1.75335C7.83673 2.29764 8 2.91778 8 3.61377C8 4.10453 7.9229 4.54844 7.76871 4.94551C7.61905 5.34257 7.40136 5.69726 7.11565 6.00956C6.83447 6.32186 6.49433 6.59847 6.09524 6.83939C5.69615 7.08477 5.37642 7.34353 5.13605 7.61568C4.89569 7.88336 4.72109 8.20236 4.61224 8.57266C4.5034 8.94296 4.44444 9.40472 4.43537 9.95794V10.0382H2.80272ZM3.67347 14C3.33787 14 3.04989 13.8818 2.80952 13.6453C2.56916 13.4089 2.44898 13.1256 2.44898 12.7954C2.44898 12.4653 2.56916 12.182 2.80952 11.9455C3.04989 11.7091 3.33787 11.5908 3.67347 11.5908C4.00907 11.5908 4.29705 11.7091 4.53741 11.9455C4.77778 12.182 4.89796 12.4653 4.89796 12.7954C4.89796 13.014 4.84127 13.2148 4.72789 13.3977C4.61905 13.5806 4.47166 13.7279 4.28571 13.8394C4.10431 13.9465 3.90023 14 3.67347 14Z", fill: "white" })), kg = ({
  onClick: i
}) => p(F, {
  children: [p("style", {
    type: "text/css",
    children: yg
  }), p("div", {
    className: "question-button",
    onClick: i,
    children: p(Sc, {})
  })]
});
function wg() {
  const i = ye.value, t = window.BikeMatrix.getConfig(), {
    currentBike: r,
    saveBike: a
  } = Be(), [o, n] = B(i == null ? void 0 : i.owner_Email_Address), [s, l] = B(!1), [c, d] = B(null), [u, f] = B(null), [h, _] = B(r.name), [m, y] = B(null), [v, g] = B(null), [b, k] = B(null), w = new ze(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), {
    t: C
  } = J(), S = async (x, T) => {
    if (T === "name") {
      _(x), y(!0), g(null), k(null);
      const A = await w.updateCustomBikeName(r.key, x);
      a({
        ...r,
        name: x
      }), y(!1), A.success ? g(!0) : (k(A.error), t.logLevel === "verbose" && console.error(A.logError));
    }
    if (T === "email") {
      n(x), l(!0), d(null), f(null);
      const A = await w.saveCustomBike(r.key, x);
      l(!1), A.success ? d(!0) : (d(!1), f(A.error), t.logLevel === "verbose" && console.error(A.logError));
    }
  }, z = (x) => {
    navigator.share({
      title: C("virtualworkshop_settings_id"),
      text: x,
      url: window.location.href
    }).then(() => console.log("Successful share! 🎉")).catch((T) => console.error(T));
  };
  return i ? p(F, {
    children: [p(kg, {
      onClick: () => X("/quick-guide")
    }), p("div", {
      className: "mb-4",
      children: r ? p(Ze, {
        bike: r,
        selected: !0,
        simple: !0
      }) : p(Er, {})
    }), p("div", {
      className: "flex flex-col gap-4",
      children: [p(Qn, {
        value: h,
        onSave: (x) => S(x, "name"),
        loading: m,
        label: C("virtualworkshop_settings_bike_name"),
        success: v,
        error: b
      }), (i == null ? void 0 : i.owner_Email_Address) && p(Qn, {
        value: o,
        onSave: (x) => S(x, "email"),
        loading: s,
        label: C("virtualworkshop_settings_email"),
        success: c,
        error: u
      }), p(es, {
        label: C("virtualworkshop_settings_id"),
        text: r.key,
        onCopy: (x) => navigator.clipboard.writeText(x)
      }), p(es, {
        label: C("virtualworkshop_settings_share_id"),
        text: r.shareId,
        onShare: (x) => z(x),
        onCopy: (x) => navigator.clipboard.writeText(x)
      })]
    }), p(kt, {})]
  }) : p(F, {});
}
function xg() {
  const e = window.BikeMatrix.getConfig();
  V(() => {
    Qe.value.back = "/";
  }, []);
  const t = new ze(e.apiUrl, e.apiKey, e.apiToken, e.isShopify), {
    currentBike: r
  } = Be(), [a, o] = B(null), [n, s] = B(""), l = async () => {
    const c = await t.getBikeBom(r.key);
    if (!c.success)
      s(c.error), e.logLevel === "verbose" && console.error(c.logError);
    else {
      const d = mr(c.data);
      o(d), ye.value = d;
    }
  };
  return V(() => {
    l();
  }, []), p(F, {
    children: [p("div", {
      className: "mb-4",
      children: [a ? p(Ze, {
        bike: a,
        readOnly: !0,
        shared: !0
      }) : p(Er, {}), p("div", {
        class: "mt-4 mb-8",
        children: p(nc, {
          categorisedBOM: a,
          readOnly: !0
        })
      })]
    }), n, p(kt, {})]
  });
}
const Cg = `.onboarding-content-wrapper{display:flex;flex-direction:column;gap:1rem;padding-left:1rem;padding-right:1rem}@media screen and (max-width: 639px){.onboarding-content-wrapper{padding:0}}
`, Sg = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}.card-image-wrapper{border:1px solid #d4d4d4;border-radius:8px;overflow:hidden;width:100%;margin-bottom:1rem}.card-image-wrapper img{width:100%;height:auto}.card-content{color:#000;font-size:16px}
`, zg = ({
  title: i,
  content: e,
  src: t,
  svg: r
}) => p(oc, {
  title: i,
  children: [p("style", {
    type: "text/css",
    children: Sg
  }), p("div", {
    className: "card-image-wrapper",
    children: p("img", {
      src: t
    })
  }), p("div", {
    className: "card-content",
    children: e
  })]
}), Ag = () => {
  const {
    t: i
  } = J();
  return p(F, {
    children: [p("style", {
      type: "text/css",
      children: Cg
    }), p("div", {
      className: "onboarding",
      children: p("div", {
        className: "onboarding-content-wrapper",
        children: sc.map((e, t) => p(zg, {
          title: e.number + ". " + i(`${e.title}`),
          src: e.image,
          svg: e.svg,
          content: i(`${e.content}`)
        }, t))
      })
    })]
  });
};
function Tg() {
  return p("div", {
    className: "quick-guide-page",
    children: [p(Ag, {}), p(kt, {})]
  });
}
const oo = Se("/"), X = (i) => {
  const e = oo.peek();
  oo.value = i, zc({
    previous: e,
    path: i
  });
}, Ko = [{
  title: "bikeselector_home_title",
  component: $u,
  path: "/"
}, {
  title: "bikeselector_addbike_title",
  component: Ku,
  path: "/add"
}, {
  title: "bikeselector_search_title",
  component: Wu,
  path: "/search"
}, {
  title: "bikeselector_size_title",
  component: Yu,
  path: "/size"
}, {
  title: "bikeselector_confirm_title",
  component: Zu,
  path: "/confirm"
}, {
  title: "bikeselector_browse_title",
  component: Ju,
  path: "/browse"
}, {
  title: "virtualworkshop_title",
  component: Xu,
  path: "/workshop"
}, {
  title: "virtualworkshop_title",
  component: sg,
  path: "/bom"
}, {
  title: "virtualworkshop_title",
  component: lg,
  path: "/part"
}, {
  title: "virtualworkshop_title",
  component: fg,
  path: "/update"
}, {
  title: "virtualworkshop_title",
  component: wg,
  path: "/settings"
}, {
  title: "virtualworkshop_bom_title",
  component: xg,
  path: "/read-only"
}, {
  title: "Virtual Workshop — Quick Guide",
  component: Tg,
  path: "/quick-guide"
}], Sa = Ko.map((i) => i.path), zc = (i) => {
  let e;
  const t = Sa.indexOf(i.path), r = Ko[t], a = Sa.slice(1, 5).indexOf(r.path);
  t && (e = Sa[t - 1]), i.previous === "/" && i.path === "/browse" && (e = "/"), i.previous === "/" && i.path === "/workshop" && (e = "/"), i.path === "/settings" && (e = "/bom"), i.path === "/quick-guide" && (e = "/settings"), Qe.value = {
    title: r.title,
    step: a > -1 ? a : void 0,
    back: e
  };
};
function Pg() {
  const e = at(() => Ko.reduce((t, r) => (t[r.path] = r.component, t), {}), [])[oo.value];
  return V(() => {
    zc({
      path: "/"
    });
  }, []), p(e, {});
}
const Wo = `@import"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-2{right:-8px}.-top-2{top:-8px}.bottom-0{bottom:0}.bottom-10{bottom:40px}.bottom-14{bottom:56px}.bottom-4{bottom:16px}.bottom-6{bottom:24px}.bottom-\\[128px\\]{bottom:128px}.bottom-\\[72px\\]{bottom:72px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:16px}.right-0{right:0}.right-3{right:12px}.right-4{right:16px}.right-5{right:20px}.top-0{top:0}.top-1\\/2{top:50%}.top-4{top:16px}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-\\[2147483645\\]{z-index:2147483645}.z-\\[2147483646\\]{z-index:2147483646}.\\!my-0{margin-top:0!important;margin-bottom:0!important}.-mx-8{margin-left:-32px;margin-right:-32px}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:4px;margin-bottom:4px}.my-5{margin-top:20px;margin-bottom:20px}.my-6{margin-top:24px;margin-bottom:24px}.my-\\[2px\\]{margin-top:2px;margin-bottom:2px}.my-px{margin-top:1px;margin-bottom:1px}.\\!ml-0{margin-left:0!important}.\\!ml-auto{margin-left:auto!important}.-mb-3{margin-bottom:-12px}.-mt-2{margin-top:-8px}.-mt-5{margin-top:-20px}.mb-4{margin-bottom:16px}.mb-6{margin-bottom:24px}.mb-8{margin-bottom:32px}.ml-2{margin-left:8px}.ml-\\[105px\\]{margin-left:105px}.ml-auto{margin-left:auto}.mr-\\[6px\\]{margin-right:6px}.mt-1{margin-top:4px}.mt-2{margin-top:8px}.mt-4{margin-top:16px}.mt-6{margin-top:24px}.mt-8{margin-top:32px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-0{height:0px}.h-10{height:40px}.h-2{height:8px}.h-20{height:80px}.h-3{height:12px}.h-32{height:128px}.h-4{height:16px}.h-40{height:160px}.h-5{height:20px}.h-6{height:24px}.h-7{height:28px}.h-8{height:32px}.h-9{height:36px}.h-\\[10px\\]{height:10px}.h-\\[18px\\]{height:18px}.h-\\[1px\\]{height:1px}.h-\\[26px\\]{height:26px}.h-\\[6px\\]{height:6px}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-36{max-height:144px}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.w-1\\/2{width:50%}.w-10{width:40px}.w-2{width:8px}.w-3{width:12px}.w-4{width:16px}.w-5{width:20px}.w-6{width:24px}.w-7{width:28px}.w-8{width:32px}.w-9{width:36px}.w-\\[100px\\]{width:100px}.w-\\[25px\\]{width:25px}.w-\\[37\\.5px\\]{width:37.5px}.w-\\[48px\\]{width:48px}.w-\\[93px\\]{width:93px}.w-\\[calc\\(100\\%_\\+_64px\\)\\]{width:calc(100% + 64px)}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.min-w-0{min-width:0px}.max-w-\\[220px\\]{max-width:220px}.max-w-full{max-width:100%}.max-w-lg{max-width:512px}.max-w-sm{max-width:384px}.flex-none{flex:none}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[20\\%\\]{--tw-translate-x: -20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-px{--tw-translate-x: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/3{--tw-translate-y: -33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/3{--tw-translate-x: 33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-px{--tw-translate-x: 1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-125{--tw-scale-x: 1.25;--tw-scale-y: 1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-center{scroll-snap-align:center}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:4px}.gap-2{gap:8px}.gap-3{gap:12px}.gap-4{gap:16px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(8px * var(--tw-space-x-reverse));margin-left:calc(8px * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(8px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(8px * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(12px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(12px * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(16px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(16px * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(20px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(20px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-nowrap{text-wrap:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-xl{border-radius:12px}.rounded-b-lg{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.rounded-t-3xl{border-top-left-radius:24px;border-top-right-radius:24px}.rounded-t-xl{border-top-left-radius:12px;border-top-right-radius:12px}.border{border-width:1px}.border-b-0{border-bottom-width:0px}.border-amber-500{--tw-border-opacity: 1;border-color:rgb(245 158 11 / var(--tw-border-opacity))}.border-emerald-500{--tw-border-opacity: 1;border-color:rgb(16 185 129 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-gray-950{--tw-border-opacity: 1;border-color:rgb(3 7 18 / var(--tw-border-opacity))}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity))}.bg-amber-500{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-black\\/40{background-color:#0006}.bg-emerald-50{--tw-bg-opacity: 1;background-color:rgb(236 253 245 / var(--tw-bg-opacity))}.bg-emerald-500{--tw-bg-opacity: 1;background-color:rgb(16 185 129 / var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-400\\/50{background-color:#9ca3af80}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-950{--tw-bg-opacity: 1;background-color:rgb(3 7 18 / var(--tw-bg-opacity))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/75{background-color:#ffffffbf}.p-0{padding:0}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.px-4{padding-left:16px;padding-right:16px}.px-8{padding-left:32px;padding-right:32px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.\\!pr-8{padding-right:32px!important}.pl-1{padding-left:4px}.pl-3{padding-left:12px}.pr-3{padding-right:12px}.pr-5{padding-right:20px}.pr-6{padding-right:24px}.pt-4{padding-top:16px}.text-center{text-align:center}.text-start{text-align:start}.font-nunito{font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-base{font-size:16px;line-height:24px}.text-lg{font-size:18px;line-height:28px}.text-sm{font-size:14px;line-height:20px}.text-xl{font-size:20px;line-height:28px}.text-xs{font-size:12px;line-height:16px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-\\[18px\\]{line-height:18px}.leading-\\[22px\\]{line-height:22px}.leading-tight{line-height:1.25}.text-amber-500{--tw-text-opacity: 1;color:rgb(245 158 11 / var(--tw-text-opacity))}.text-amber-950{--tw-text-opacity: 1;color:rgb(69 26 3 / var(--tw-text-opacity))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-emerald-500{--tw-text-opacity: 1;color:rgb(16 185 129 / var(--tw-text-opacity))}.text-emerald-950{--tw-text-opacity: 1;color:rgb(2 44 34 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-950{--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-950{--tw-text-opacity: 1;color:rgb(69 10 10 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-30{opacity:.3}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_-2px_10px_0px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\,0px_0px_0px_1px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\]{--tw-shadow: 0px -2px 10px 0px rgba(0,0,0,.04),0px 0px 0px 1px rgba(0,0,0,.06);--tw-shadow-colored: 0px -2px 10px 0px var(--tw-shadow-color), 0px 0px 0px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.bike-matrix-container{width:100%}@media (min-width: 640px){.bike-matrix-container{max-width:640px}}@media (min-width: 768px){.bike-matrix-container{max-width:768px}}@media (min-width: 1024px){.bike-matrix-container{max-width:1024px}}@media (min-width: 1280px){.bike-matrix-container{max-width:1280px}}@media (min-width: 1536px){.bike-matrix-container{max-width:1536px}}:host .overlay{opacity:0;visibility:hidden}:host(.active) .overlay{opacity:1;visibility:visible}@media (min-width: 640px){:host .modal{opacity:0;transform:scale(.9);visibility:hidden}:host(.active) .modal{opacity:1;transform:scale(1);visibility:visible}}@media not all and (min-width: 640px){:host .modal{transform:translateY(100%);visibility:hidden}:host(.active) .modal{transform:translateY(0);visibility:visible}}:root,:host{all:initial!important;font-size:16px!important;width:100%}input,select,button{outline:2px solid transparent;outline-offset:2px}h1,h2,h3,h4,h5,h6,label,button{margin-top:0;margin-bottom:0;font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h1,h2,h3,h4,h5,h6{font-weight:700;--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}h1,h2,h3,h4,h5,h6,label,button,p,a,div{font-family:Nunito,sans-serif}select{appearance:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}select::-ms-expand{display:none}.loader{border-radius:100%;border-top:4px solid rgba(3,7,18,.2);border-right:4px solid rgba(3,7,18,.2);border-bottom:4px solid rgba(3,7,18,.2);border-left:4px solid rgb(3,7,18)}*::-webkit-scrollbar{height:12px;width:12px}*::-webkit-scrollbar-track{border-radius:12px;margin-block:8px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:active{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb{border-radius:8px;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb:hover{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}@media not all and (min-width: 640px){*::-webkit-scrollbar{display:none}.modal-content{-ms-overflow-style:none;scrollbar-width:none}}@media only screen and (max-width: 450px){.compatibility-label-container .status{padding:7px 2px}}.placeholder\\:text-gray-700::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.placeholder\\:text-gray-700::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-inset-x-px:after{content:var(--tw-content);left:-1px;right:-1px}.after\\:-top-6:after{content:var(--tw-content);top:-24px}.after\\:bottom-0:after{content:var(--tw-content);bottom:0}.after\\:bg-gradient-to-t:after{content:var(--tw-content);background-image:linear-gradient(to top,var(--tw-gradient-stops))}.after\\:from-white:after{content:var(--tw-content);--tw-gradient-from: #fff var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:to-transparent:after{content:var(--tw-content);--tw-gradient-to: transparent var(--tw-gradient-to-position)}.disabled\\:border-gray-200:disabled{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.disabled\\:bg-gray-100:disabled{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.disabled\\:text-gray-400:disabled{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.group:disabled .group-disabled\\:border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.group:disabled .group-disabled\\:bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.group:disabled .group-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.peer:disabled~.peer-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media not all and (min-width: 640px){.max-sm\\:absolute{position:absolute}.max-sm\\:inset-0{top:0;right:0;bottom:0;left:0}.max-sm\\:h-\\[89vh\\]{height:89vh}.max-sm\\:max-h-\\[96\\%\\]{max-height:96%}.max-sm\\:flex-1{flex:1 1 0%}.max-sm\\:flex-none{flex:none}.max-sm\\:grow{flex-grow:1}}@media (max-width: 426px){.max-\\[426px\\]\\:w-\\[21px\\]{width:21px}.max-\\[426px\\]\\:w-\\[38px\\]{width:38px}.max-\\[426px\\]\\:text-xs{font-size:12px;line-height:16px}}@media (min-width: 640px){.sm\\:mt-8{margin-top:32px}.sm\\:hidden{display:none}.sm\\:h-full{height:100%}.sm\\:max-h-\\[90\\%\\]{max-height:90%}.sm\\:max-w-\\[640px\\]{max-width:640px}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:justify-center{justify-content:center}.sm\\:rounded-xl{border-radius:12px}.sm\\:px-2{padding-left:8px;padding-right:8px}.sm\\:px-6{padding-left:24px;padding-right:24px}.sm\\:duration-200{transition-duration:.2s}}.\\[\\&\\>path\\]\\:stroke-\\[2px\\]>path{stroke-width:2px}.\\[\\&\\>span\\]\\:font-normal>span{font-weight:400}.\\[\\&\\>span\\]\\:text-gray-500>span{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}
`;
function Eg() {
  return V(() => {
    const i = document.createElement("link");
    i.type = "text/css", i.rel = "stylesheet", i.href = "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap", document.head.appendChild(i);
  }, []), p(F, {
    children: [p("style", {
      type: "text/css",
      children: Wo
    }), p(Nu, {
      children: [p("div", {
        onClick: gr,
        style: {
          right: "-36px",
          top: "-24px"
        },
        class: "w-7 h-7 z-10 flex items-center justify-center absolute bg-white text-gray-800 rounded-full cursor-pointer",
        children: p(ti, {
          class: "h-3 w-3"
        })
      }), p(Fu, {
        children: p(qu, {
          children: p(Pg, {})
        })
      })]
    })]
  });
}
const Lg = (i) => /* @__PURE__ */ R("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 500, zoomAndPan: "magnify", viewBox: "0 0 375 374.999991", height: 500, preserveAspectRatio: "xMidYMid meet", ...i }, /* @__PURE__ */ R("path", { fill: "#000000", d: "M 151.4375 131.65625 L 210.511719 259.050781 C 210.511719 252.984375 210.105469 242.875 210.105469 230.335938 L 197.160156 117.5 C 168.835938 117.90625 151.4375 131.65625 151.4375 131.65625 Z M 225.484375 117.097656 C 218.605469 116.691406 212.128906 116.691406 206.464844 117.097656 L 212.941406 181.804688 C 214.960938 160.773438 219.007812 138.125 225.484375 117.097656 Z M 80.222656 227.101562 C 90.746094 230.335938 101.265625 233.976562 113 238.425781 C 113 238.425781 146.988281 255.816406 173.285156 266.734375 L 104.097656 179.78125 C 93.980469 194.746094 86.292969 211.328125 80.222656 227.101562 Z M 35.714844 287.363281 C 37.738281 276.441406 40.167969 265.117188 43.808594 254.601562 C 34.90625 252.984375 26.003906 251.773438 17.507812 250.960938 C 21.957031 263.90625 28.433594 276.039062 35.714844 287.363281 Z M 195.945312 276.039062 C 195.945312 276.039062 204.441406 278.867188 208.488281 274.417969 L 142.535156 138.125 C 131.207031 146.621094 121.089844 156.324219 112.1875 167.648438 L 191.898438 274.417969 C 193.519531 275.230469 194.730469 275.632812 195.945312 276.039062 Z M 365.480469 146.214844 C 359.816406 122.351562 349.296875 100.109375 335.539062 81.101562 C 343.632812 101.726562 352.128906 124.375 358.199219 140.148438 C 360.625 141.765625 363.457031 144.191406 365.480469 146.214844 Z M 356.175781 170.886719 C 339.179688 157.539062 322.996094 147.023438 307.214844 138.933594 L 244.90625 157.539062 L 232.363281 189.085938 C 230.339844 208.902344 228.71875 233.976562 230.339844 254.601562 C 230.339844 254.601562 233.980469 294.640625 219.414062 299.496094 C 219.414062 299.496094 203.632812 314.863281 163.574219 295.855469 C 163.574219 295.855469 121.898438 274.015625 70.109375 260.265625 C 62.015625 291 59.992188 314.457031 59.992188 316.480469 C 92.363281 349.644531 138.085938 369.867188 188.257812 369.867188 C 288.605469 369.867188 370.335938 288.171875 370.335938 187.871094 C 370.335938 185.847656 370.335938 183.828125 370.335938 181.804688 C 363.054688 183.019531 356.175781 170.886719 356.175781 170.886719 Z M 233.980469 95.257812 C 237.621094 86.761719 242.476562 78.675781 247.332031 71.394531 C 247.332031 71.394531 261.089844 49.960938 281.726562 31.761719 C 254.617188 15.582031 222.246094 5.875 188.257812 5.875 C 87.507812 5.875 6.179688 87.570312 6.179688 187.871094 C 6.179688 197.578125 6.988281 206.476562 8.203125 215.371094 C 22.363281 215.777344 38.144531 217.394531 55.542969 220.628906 C 66.0625 195.152344 75.773438 177.761719 75.773438 177.761719 C 75.773438 177.761719 124.328125 87.976562 233.980469 95.257812 Z M 236.8125 147.429688 L 240.453125 146.214844 L 250.972656 120.332031 C 248.546875 119.925781 246.925781 119.523438 244.5 119.117188 C 241.261719 127.609375 238.429688 137.316406 236.8125 147.429688 Z M 259.066406 121.949219 L 250.164062 143.789062 L 292.648438 132.867188 C 281.320312 128.015625 269.992188 124.375 259.066406 121.949219 Z M 272.015625 76.25 C 266.347656 82.71875 260.683594 90 255.425781 98.085938 C 275.65625 101.726562 293.054688 106.582031 308.027344 112.242188 Z M 340.800781 128.015625 L 314.902344 57.238281 C 311.261719 53.601562 307.621094 50.363281 303.980469 47.128906 C 295.886719 52.792969 287.390625 59.667969 278.894531 68.160156 L 323.804688 119.117188 C 330.28125 122.351562 336.347656 125.589844 340.800781 128.015625 Z M 340.800781 128.015625 ", fillOpacity: 1, fillRule: "nonzero" }));
function Mg({
  "data-sku": i,
  "data-padding-top": e,
  "data-padding-bottom": t
}) {
  var k;
  const r = window.BikeMatrix, a = r.getConfig(), [o, n] = B({}), [s, l] = B(!1), [c, d] = B({
    compatible: "",
    warning: ""
  }), {
    t: u
  } = J(), [f, h] = B(!1), _ = i || a.sku, [m, y] = B(null);
  if (i === "*")
    return a.logLevel === "verbose" && console.log("Early return as prouduct is blacklisted"), p(F, {});
  a.internalLink && y(a.internalLink);
  const v = at(() => We.value || f, [We.value, f]), g = !!r.getActiveSubscription(), b = async () => {
    var C, S, z, x, T, A, E;
    if (h(!0), d({
      compatible: "",
      warning: ""
    }), l(!1), a.logLevel === "verbose" && (console.log("ProductResult updateCompatibility config: " + JSON.stringify(a)), console.log("ProductResult updateCompatibility BikeSignal.value: " + JSON.stringify(W.value))), W.value) {
      for (let M = 0; M < a.productCollections.length; M++)
        if (!((S = (C = W.value) == null ? void 0 : C.compatibleCollections) != null && S.error) && ((x = (z = W.value) == null ? void 0 : z.compatibleCollections) != null && x.find((O) => O.handle === a.productCollections[M]))) {
          l(!0);
          break;
        }
    } else
      for (let M = 0; M < a.productCollections.length; M++)
        if ((T = a == null ? void 0 : a.collections) != null && T.map((O) => O.handle).includes(a == null ? void 0 : a.productCollections[M])) {
          l(!0);
          break;
        }
    if (W.value) {
      if (_ == "") {
        n({
          type: "unavailable",
          ...Ur.unavailable
        }), h(!1);
        return;
      }
      var w = ((A = hr()) == null ? void 0 : A.language) || "en-GB";
      const O = await new ze(a.apiUrl, a.apiKey, a.apiToken, a.isShopify).checkSkuCompatibility((E = W.value) == null ? void 0 : E.key, _, w);
      if (h(!1), !O.success) {
        a.logLevel === "verbose" && console.error(O.logError), n({
          type: "unavailable",
          ...Ur.unavailable
        });
        return;
      }
      const j = (O == null ? void 0 : O.data.compatible) === null ? "unavailable" : O.data.warning ? "warning" : O != null && O.data.compatible ? "compatible" : "incompatible";
      d({
        warning: O.data.warningMessage,
        compatible: O.data.compatibilityMessage
      }), n({
        type: j,
        ...Ur[j]
      });
    } else
      h(!1), n({
        type: "check",
        ...Ur.check
      });
  };
  return V(() => {
    b();
  }, [W.value, _]), V(() => (document.addEventListener("RefreshCompatibility", b), () => {
    document.removeEventListener("RefreshCompatibility", b);
  }), []), !g || !v && !(o != null && o.type) || !s ? p(F, {}) : p(F, {
    children: [p("style", {
      type: "text/css",
      children: Wo
    }), p("div", {
      class: "flex flex-col relative w-full mx-auto",
      style: {
        marginTop: `${e}px`,
        marginBottom: `${t}px`
      },
      children: [p("div", {
        // todo: check if there's any state that we don't want it to toggle and then remove the check
        onClick: (w) => {
          w.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
            bubbles: !0,
            composed: !0
          }));
        },
        class: Y("rounded-lg relative z-20 border overflow-hidden w-full flex cursor-pointer", v ? "bg-gray-100 border-gray-300 text-gray-950" : {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          check: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[o.type]),
        children: v ? p("span", {
          class: "loader self-center animate-spin justify-self-center justify-center w-9 my-5 mx-auto h-9",
          style: {
            borderWidth: "6px"
          }
        }) : p(F, {
          children: [p("div", {
            class: "relative z-10 h-auto items-center justify-center flex",
            children: [p(Go, {
              class: Y("self-start h-full w-[93px]", {
                unavailable: "text-gray-950",
                check: "text-gray-950",
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-500"
              }[o.type])
            }), p(Uo, {
              class: "h-[26px] absolute -translate-x-1/4"
            })]
          }), p("div", {
            class: "flex flex-col pl-3 pr-6 py-[6px] min-w-0",
            children: [p("p", {
              class: "text-lg font-semibold",
              children: u(o == null ? void 0 : o.heading_code)
            }), p("p", {
              class: "flex w-full text-sm leading-[22px] font-normal",
              children: p("span", {
                class: "truncate",
                children: o != null && o.details_code ? u(o == null ? void 0 : o.details_code) : (k = W.value) == null ? void 0 : k.name
              })
            })]
          })]
        })
      }), p("div", {
        class: "z-10 bg-gray-100 w-full -mt-2 pt-4 flex border justify-between flex-wrap gap-1 border-gray-300 rounded-b-lg p-3 py-2",
        children: [o.type !== "incompatible" && p("div", {
          class: "space-y-2 my-[2px]",
          children: [!!(c != null && c.compatible) && p("p", {
            class: "text-sm flex",
            children: [p(xr, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
            }), " ", c.compatible]
          }), !!c.warning && p("p", {
            class: "text-sm flex",
            children: [p(Cr, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
            }), " ", c.warning]
          })]
        }), p("a", {
          class: "flex text-xs self-end font-semibold items-center underline ml-auto",
          href: m || "https://bikematrix.io/landed-it",
          target: "_blank",
          children: [u("bikematrix_poweredby"), " ", p(Lg, {
            class: "w-5 h-5 ml-2"
          })]
        })]
      }), !v && p(o.icon, {
        class: "absolute top-0 z-30 right-0 w-6 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  });
}
const Bg = `.wrapper{position:relative}.bm_collection_result{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.4rem;position:relative;margin-left:auto;margin-right:auto;font-size:14px;text-align:left;height:100%;line-height:1.3em}.bm_collection_result_iconLabel{display:inline-block;position:relative}.bm_collection_result_link{text-align:right;font-weight:500;font-size:.6em;margin-top:1px;text-decoration:underline;color:#000}.bm_collection_result_link:visited{color:#000}.bm_collection_result p{display:inline;padding:1px;margin:0;color:#000}.bm_collection_result_icon{padding:0 .1rem 0 0;position:absolute;left:-24px;top:-.25rem}.bm-hidden{display:none}.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`, ts = {
  unavailable: {
    icon: ao,
    heading: "",
    code: ""
  },
  compatible: {
    icon: xr,
    heading: "Compatible",
    code: "compatible"
  },
  warning: {
    icon: Cr,
    heading: "Compatible",
    code: "compatible"
  },
  incompatible: {
    icon: Gi,
    heading: "Not Compatible",
    code: "not_compatible"
  }
};
function Ac({
  "data-type": i
}) {
  var r;
  const e = ts[i], {
    t
  } = J();
  return e ? p(F, {
    children: [p("style", {
      type: "text/css",
      children: Wo
    }), p("div", {
      class: "flex z-0 flex-col relative  w-full mx-auto compatibility-label-container max-w-[220px]",
      children: [p("div", {
        class: Y("rounded-lg relative z-20 border overflow-hidden w-full flex", {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[i]),
        children: [p("div", {
          class: "relative z-10 h-auto items-center justify-center flex",
          children: [p(Go, {
            class: Y("self-start h-full w-[48px] max-[426px]:w-[38px]", {
              unavailable: "text-gray-950",
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-500"
            }[i])
          }), p(Uo, {
            class: "h-[18px] max-[426px]:w-[21px] w-[25px] absolute -translate-x-[20%]"
          })]
        }), p("div", {
          class: "status flex flex-col p-2 pl-1 w-full",
          children: p("p", {
            class: "max-[426px]:text-xs text-sm font-semibold p-0 leading-[18px] text-center",
            children: t((r = ts[i]) == null ? void 0 : r.code)
          })
        })]
      }), p(e.icon, {
        class: "absolute top-0 z-30 right-0 w-4 h-4 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  }) : p(F, {});
}
const ir = {
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
let He = {
  type: "unavailable",
  heading: ""
};
const Ng = async (i, e, t, r) => {
  var l;
  if (!t || !((l = sr.value) != null && l.length)) {
    He = {
      type: "unavailable",
      ...ir.unavailable
    };
    return;
  }
  let a = [];
  for (const c of t.split(",").filter((d) => !!d)) {
    const d = sr.value.find((u) => u.sku === c.trim());
    a.push(d);
  }
  const o = a.some((c) => (c == null ? void 0 : c.compatible) === !0 && !(c != null && c.warning)), n = a.some((c) => (c == null ? void 0 : c.compatible) === !0 && (c == null ? void 0 : c.warning)), s = a.some((c) => (c == null ? void 0 : c.compatible) === !1);
  o ? He = {
    type: "compatible",
    ...ir.compatible
  } : n ? He = {
    type: "warning",
    ...ir.warning
  } : s ? He = {
    type: "incompatible",
    ...ir.incompatible
  } : He = {
    type: "unavailable",
    ...ir.unavailable
  }, r === "verbose" && console.log("checkCollectionResult prodcutId: " + e + " bikeKey: " + i + " sku: " + t + " status: " + He.type);
}, Og = function(i, e, t, r, a, o, n) {
  var l;
  const s = window.BikeMatrix.getConfig();
  if (i || e) {
    if ((i && t || e && r) && s.productsCollections[o]) {
      for (let c = 0; c < s.productsCollections[o].length; c++)
        if (s.collections.map((d) => d.handle).includes(s.productsCollections[o][c]))
          return !0;
    }
  } else
    return a ? !1 : !!W.value && !W.value.compatibleCollections.error && ((l = W.value.compatibleCollections) == null ? void 0 : l.find((d) => d.handle === n));
  return !1;
};
function Ig({
  "data-product-id": i,
  "data-product-skus": e,
  "data-product-barcodes": t,
  "data-product-metafields": r
}) {
  const a = window.BikeMatrix, o = a.getConfig(), [n, s] = B(!1), l = !!a.getActiveSubscription();
  He = {
    type: "unavailable",
    ...ir.unavailable
  };
  const {
    currentCollectionHandle: c,
    isHomePage: d,
    isSearchPage: u,
    showSearchPageCollection: f,
    showHomePageCollection: h,
    logLevel: _,
    skuField: m
  } = o, y = !!o.pageType && o.pageType === "product", v = m === "barcode" ? t : m === "metafield" ? r : e || "";
  return _ === "verbose" && (console.log("CollectionResult currentCollectionHandle: ", c), console.log("CollectionResult skuField: ", m), console.log("CollectionResult productId: ", i), console.log("CollectionResult skusToCheck: ", v), console.log("CollectionResult BikeSignal.value: " + JSON.stringify(W.value))), We.value ? s(!0) : W.value && Og(d, u, h, f, y, i, c) ? Ng(W.value.key, i, v, o.logLevel).then(() => {
    s(!0);
  }) : s(!1), _ === "verbose" && console.log("CollectionResult status: ", He), p(F, {
    children: l && n && p(F, {
      children: [p("style", {
        type: "text/css",
        children: Bg
      }), p("div", {
        class: "bm_collection_result bm-wrapper",
        children: [p("div", {
          class: "lds-ring",
          id: "bm-loading-spinner",
          style: We.value ? "" : "display: none",
          children: [p("div", {}), p("div", {}), p("div", {}), p("div", {})]
        }), !We.value && (He == null ? void 0 : He.type) !== "unavailable" && p(Ac, {
          "data-type": He.type
        })]
      })]
    })
  });
}
const Rg = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.bm-compatible-products-wrapper{display:block;width:100%;border-top:.5px solid lightgrey;border-bottom:.5px solid lightgrey;margin-top:10px}.bm-compatible-products-title>div{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none;display:flex;align-items:center;justify-content:space-between;padding:8px 0}.bm-compatible-products-title>div>span{font-weight:700}.bm-compatible-products-title svg{height:24px;width:24px;transition:transform .3s linear}.bm-compatible-products-title div.active svg{transform:rotate(180deg)}.bm-compatible-products-list{width:100%;max-width:100%;display:none;overflow:hidden}.bm-compatible-products-list ul{display:grid;gap:20px;grid-template-columns:repeat(4,minmax(0,1fr));padding:0;list-style:none}@media only screen and (max-width: 1000px){.bm-compatible-products-list ul{grid-template-columns:repeat(3,minmax(0,1fr))}}@media only screen and (max-width: 600px){.bm-compatible-products-list ul{gap:10px;grid-template-columns:repeat(2,minmax(0,1fr))}}.bm-compatible-products-list ul li{width:100%;display:flex}.bm-compatible-product-wrapper{display:block;width:100%;border:1px solid lightgrey;padding:5px;display:flex;flex-flow:column;flex:1}.bm-compatible-product-image{display:block;width:100%;max-width:100%;line-height:1;padding-top:100%;position:relative;margin-bottom:5px;overflow:hidden}.bm-compatible-product-image a,.bm-compatible-product-image a:hover,.bm-compatible-product-image a:focus{display:block;width:100%;max-width:100%;outline:none;text-decoration:none;width:auto;height:auto;line-height:1;border:none;border-radius:0}.bm-compatible-product-image img{display:inline-block;vertical-align:top;width:100%;max-width:100%;height:auto;line-height:1;position:absolute;left:0;right:0;bottom:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;top:50%;transform:translateY(-50%)}.bm-compatible-product-title{text-align:center;margin:0 0 1em;display:flex;flex-flow:column;flex:1}.bm-compatible-product-title a,.bm-compatible-product-title a:hover,.bm-compatible-product-title a:focus{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none}.bm-compatible-product-price{text-align:center;margin:0 0 1em}.bm-compatible-product-price p{font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;color:rgb(var(--text-color));padding:0;margin:0}.bm-compatible-product-price p strong{font-size:1.2em}.bm-compatible-product-compatibility{text-align:center;margin:0 .25em 1em}@media only screen and (max-width: 450px){.bm-compatible-product-compatibility{margin:0 0 1em}}.bm_result_link{justify-content:center;text-align:right;text-decoration:underline;font-size:12px;padding:10px 0}.bm_result_link a{text-align:right;font-weight:700;margin-top:10px;color:#000}
`, $t = {
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
}, Dg = (i) => {
  const e = i ? [...new Set(i.split(","))] : [], r = window.BikeMatrix.getConfig(), a = [];
  return Object.entries(r.products).reduce((n, [s, l]) => (!a.includes(s) && l.skus.some((c) => !!c && e.includes(c == null ? void 0 : c.trim())) && (n.push(l), a.push(s)), n), []).sort((n, s) => n["bm-sort"] - s["bm-sort"]);
}, jg = (i) => {
  if (!(i != null && i.length))
    return [];
  const e = i.filter((t) => t.compatible).map((t) => t.sku).join(",");
  return Dg(e);
}, Fg = (i, e) => Ue.value ? {
  type: "unknown",
  ...$t.unknown
} : i > 1 ? {
  type: "pageone",
  ...$t.pageone
} : (e == null ? void 0 : e.length) > 0 ? {
  type: "compatibleresults",
  ...$t.compatibleresults
} : Mi.value ? {
  type: "error",
  ...$t.error
} : {
  type: "noresults",
  ...$t.noresults
}, Vg = () => `
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
function $g({
  "data-title": i
}) {
  var k;
  const e = K(null), t = window.BikeMatrix, r = t.getConfig(), [a, o] = B(!1), [n, s] = B(!0), [l, c] = B({
    type: "unknown",
    details: "",
    details_code: ""
  }), [d, u] = B([]), {
    t: f
  } = J(), h = !!t.getActiveSubscription(), _ = r.currentCollectionHandle || "", m = r.collectionUrl || "", y = r.compatiblityListCurrentPage || 0, v = !!r.showCompatibleList || !1, g = r.logLevel || "none", b = (w) => {
    var T, A;
    if (!(e != null && e.current))
      return null;
    const C = (A = (T = e == null ? void 0 : e.current) == null ? void 0 : T.parentElement) == null ? void 0 : A.querySelector('template[slot="product-card"]');
    g === "verbose" && console.log("CompatibleList Product Card Template: ", C);
    const x = (C ? C.innerHTML : Vg()).replace(r.isShopify ? /\@\@#if\s+(\w+)\@\@(.*?)\@\@\/if\@\@/gs : /\{\{#if\s+(\w+)\}\}(.*?)\{\{\/if\}\}/gs, (E, M, O) => w[M] ? O : "").replace(r.isShopify ? /\@\@\s*(\w+)\s*\@\@/g : /\{\{\s*(\w+)\s*\}\}/g, (E, M) => {
      if (M === "compatibility")
        return '<bikematrix-compatibilitylabel data-type="compatible"></bikematrix-compatibilitylabel>';
      const O = w[M];
      if (M === "productTitle") {
        const j = document.createElement("textarea");
        return j.innerHTML = O, j.value;
      }
      return O || "";
    });
    return g === "verbose" && console.log("CompatibleList Product Card: ", x), p("li", {
      dangerouslySetInnerHTML: {
        __html: x
      }
    }, w.productId);
  };
  return V(() => {
    var x, T, A;
    const w = r.collections.map((E) => E.handle) || [];
    if (!v || !w.includes(_)) {
      c({
        type: "unknown",
        ...$t.unknown
      }), o(!1);
      return;
    }
    if (!W.value) {
      c({
        type: "selectbike",
        ...$t.selectbike
      }), o(!Ue.value);
      return;
    }
    let C = !0;
    if ((x = W.value) != null && x.compatibleCollections.error || (C = (A = (T = W.value) == null ? void 0 : T.compatibleCollections) == null ? void 0 : A.find((E) => E.handle === _)), !C) {
      o(!1);
      return;
    }
    const S = jg(nr.value).map(b);
    u(S);
    const z = Fg(y, S);
    c(z), o(!0);
  }, [_, W.value, nr.value, Ue.value, y]), p(F, {
    children: h && a && p("div", {
      ref: e,
      children: [p("style", {
        type: "text/css",
        children: Rg
      }), p("div", {
        class: "bike-matrix-container",
        children: p("div", {
          class: "bm-compatible-products-wrapper",
          children: [p("div", {
            class: "bm-compatible-products-title",
            children: p("div", {
              id: "bm_customAccordion",
              class: n && "active",
              onClick: () => s(!n),
              children: [p("span", {
                children: i || f("compatiblelist_header")
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
            style: n ? "display: block" : "display: none",
            children: [p("div", {
              class: "lds-ring",
              id: "bm-loading-spinner",
              style: Ue.value ? "" : "display: none",
              children: [p("div", {}), p("div", {}), p("div", {}), p("div", {})]
            }), !Ue.value && {
              error: p("p", {
                children: f(l == null ? void 0 : l.details_code)
              }),
              unknown: p("p", {
                class: "bm-compatible-products-message"
              }),
              unavailable: p("p", {
                class: "bm-compatible-products-message",
                children: f(l == null ? void 0 : l.details_code)
              }),
              selectbike: p("div", {
                onClick: (w) => {
                  w.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
                    bubbles: !0,
                    composed: !0
                  }));
                },
                style: "cursor: pointer;",
                children: p("p", {
                  class: "bm-compatible-products-message",
                  children: f(l == null ? void 0 : l.details_code)
                })
              }),
              pageone: p("p", {
                class: "bm-compatible-products-message",
                children: p("div", {
                  dangerouslySetInnerHTML: {
                    __html: (k = f(l == null ? void 0 : l.details_code)) == null ? void 0 : k.replace("<a>", "<a href='" + m + "'>")
                  }
                })
              }),
              noresults: p("p", {
                class: "bm-compatible-products-message",
                children: f(l == null ? void 0 : l.details_code)
              }),
              compatibleresults: p(F, {})
            }[l == null ? void 0 : l.type], p("ul", {
              id: "bm_compatibleProductsList",
              children: !Ue.value && (l == null ? void 0 : l.type) === "compatibleresults" && d
            }), p("div", {
              class: "bm_result_link",
              children: p("a", {
                rel: "noreferrer",
                href: "http://www.bikematrix.io/landed-it",
                target: "_blank",
                class: "link",
                children: f("bikematrix_poweredby")
              })
            })]
          })]
        })
      })]
    })
  });
}
const Hg = `.bike-selector-banner_wrapper{position:relative;height:40px}.bike-selector-banner{width:100%;height:40px;position:absolute;top:0;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-bottom:2rem}.floating{border-radius:12px;box-shadow:0 4px 4px #0000001f}.bike-selector-banner_title{color:#fff;text-transform:uppercase;padding-top:2px;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px}@media (width <= 991px){.bike-selector-banner_title{display:none}}.bike-selector-banner_title_mobile{display:none;text-transform:uppercase;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px;color:#fff;padding-top:2px}@media (width <= 991px){.bike-selector-banner_title_mobile{display:block}}.bike-selector-banner_svg{height:19px}.bike-selector-banner_icon-wrapper{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.bike-selector-banner_tick{width:12px;height:12px;position:absolute;right:6px;top:5px}
`, Ug = `.bm-button{cursor:pointer;border:none;font-weight:600}.bm-header-btn{display:inline-block;font-weight:200;background-color:#000;color:#fff;border-radius:5px;text-align:center;font-size:.75em;cursor:pointer}.bm-icon{display:inline-block;padding:6px;font-weight:200;border:none;text-align:center;font-size:.75em;background-color:transparent;height:44px;width:44px}.bm-icon svg{width:32px;height:32px}@media screen and (max-width: 991px){.bm-icon{padding:10px}.bm-icon svg{width:24px;height:24px}}.bm-bike-select-icon.show-selected,.bm-bike-select-icon.show-selected-banner{position:relative}.bm-bike-select-icon.show-selected:after{content:"";width:12px;height:12px;top:2px;right:2px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}.bm-bike-select-icon.show-selected-banner:after{content:"";width:12px;height:12px;top:6px;right:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}
`;
function Tc({
  "data-color": i,
  banner: e
}) {
  const t = W.value;
  return window.BikeMatrix.getConfig(), p(F, {
    children: [p("style", {
      type: "text/css",
      children: Ug
    }), p("div", {
      className: "bm-bikon-wrapper",
      children: p("button", {
        className: `p-2 !ml-auto header__icon bm-header-btn bm-icon bm-bike-select-icon ${t && !e ? "show-selected" : t && e ? "show-selected-banner" : ""}`,
        style: {
          color: i
        },
        onClick: e ? () => {
        } : () => gr(),
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
function Gg({
  "data-title": i,
  "data-mobile-title": e,
  "data-color": t,
  "data-full-width": r,
  "data-font-color": a,
  "data-show": o
}) {
  const n = W.value, {
    t: s
  } = J();
  if (typeof o > "u" || o !== "true" && o !== "")
    return p(F, {});
  const l = a === "black" ? "#000" : a === "white" ? "#fff" : a;
  return p(F, {
    children: [p("style", {
      type: "text/css",
      children: Hg
    }), p("div", {
      onClick: () => {
        gr();
      },
      class: "bike-selector-banner_wrapper",
      children: p("div", {
        class: `bike-selector-banner ${r === "false" ? "floating" : ""}`,
        style: {
          backgroundColor: t ?? "#000",
          maxWidth: r ?? null
        },
        children: p(F, {
          children: [p("h2", {
            class: "bike-selector-banner_title",
            style: {
              color: l
            },
            children: n ? n.brand + " " + n.frameSeries : i || s("bikeselectorbanner_title")
          }), p("h2", {
            class: "bike-selector-banner_title_mobile",
            style: {
              color: l
            },
            children: n ? n.brand : e || s("bikeselectorbanner_mobiletitle")
          }), p(Tc, {
            "data-color": l,
            banner: !0
          })]
        })
      })
    })]
  });
}
const Kg = {
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
    console && console[i] && console[i].apply(console, e);
  }
};
class Ki {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Kg, this.options = t, this.debug = t.debug;
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
  forward(e, t, r, a) {
    return a && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e));
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
var it = new Ki();
class aa {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const a = this.observers[r].get(t) || 0;
      this.observers[r].set(t, a + 1);
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
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      r[a - 1] = arguments[a];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((n) => {
      let [s, l] = n;
      for (let c = 0; c < l; c++)
        s(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((n) => {
      let [s, l] = n;
      for (let c = 0; c < l; c++)
        s.apply(s, [e, ...r]);
    });
  }
}
const Rr = () => {
  let i, e;
  const t = new Promise((r, a) => {
    i = r, e = a;
  });
  return t.resolve = i, t.reject = e, t;
}, rs = (i) => i == null ? "" : "" + i, Wg = (i, e, t) => {
  i.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}, Yg = /###/g, is = (i) => i && i.indexOf("###") > -1 ? i.replace(Yg, ".") : i, as = (i) => !i || typeof i == "string", Xr = (i, e, t) => {
  const r = typeof e != "string" ? e : e.split(".");
  let a = 0;
  for (; a < r.length - 1; ) {
    if (as(i))
      return {};
    const o = is(r[a]);
    !i[o] && t && (i[o] = new t()), Object.prototype.hasOwnProperty.call(i, o) ? i = i[o] : i = {}, ++a;
  }
  return as(i) ? {} : {
    obj: i,
    k: is(r[a])
  };
}, os = (i, e, t) => {
  const {
    obj: r,
    k: a
  } = Xr(i, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[a] = t;
    return;
  }
  let o = e[e.length - 1], n = e.slice(0, e.length - 1), s = Xr(i, n, Object);
  for (; s.obj === void 0 && n.length; )
    o = `${n[n.length - 1]}.${o}`, n = n.slice(0, n.length - 1), s = Xr(i, n, Object), s && s.obj && typeof s.obj[`${s.k}.${o}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${o}`] = t;
}, qg = (i, e, t, r) => {
  const {
    obj: a,
    k: o
  } = Xr(i, e, Object);
  a[o] = a[o] || [], a[o].push(t);
}, Wi = (i, e) => {
  const {
    obj: t,
    k: r
  } = Xr(i, e);
  if (t)
    return t[r];
}, Zg = (i, e, t) => {
  const r = Wi(i, t);
  return r !== void 0 ? r : Wi(e, t);
}, Pc = (i, e, t) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in i ? typeof i[r] == "string" || i[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (i[r] = e[r]) : Pc(i[r], e[r], t) : i[r] = e[r]);
  return i;
}, tr = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Jg = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Xg = (i) => typeof i == "string" ? i.replace(/[&<>"'\/]/g, (e) => Jg[e]) : i;
class Qg {
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
const em = [" ", ",", "?", "!", ";"], tm = new Qg(20), rm = (i, e, t) => {
  e = e || "", t = t || "";
  const r = em.filter((n) => e.indexOf(n) < 0 && t.indexOf(n) < 0);
  if (r.length === 0)
    return !0;
  const a = tm.getRegExp(`(${r.map((n) => n === "?" ? "\\?" : n).join("|")})`);
  let o = !a.test(i);
  if (!o) {
    const n = i.indexOf(t);
    n > 0 && !a.test(i.substring(0, n)) && (o = !0);
  }
  return o;
}, no = function(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!i)
    return;
  if (i[e])
    return i[e];
  const r = e.split(t);
  let a = i;
  for (let o = 0; o < r.length; ) {
    if (!a || typeof a != "object")
      return;
    let n, s = "";
    for (let l = o; l < r.length; ++l)
      if (l !== o && (s += t), s += r[l], n = a[s], n !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof n) > -1 && l < r.length - 1)
          continue;
        o += l - o + 1;
        break;
      }
    a = n;
  }
  return a;
}, Yi = (i) => i && i.replace("_", "-");
class ns extends aa {
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
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, n = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    e.indexOf(".") > -1 ? s = e.split(".") : (s = [e, t], r && (Array.isArray(r) ? s.push(...r) : typeof r == "string" && o ? s.push(...r.split(o)) : s.push(r)));
    const l = Wi(this.data, s);
    return !l && !t && !r && e.indexOf(".") > -1 && (e = s[0], t = s[1], r = s.slice(2).join(".")), l || !n || typeof r != "string" ? l : no(this.data && this.data[e] && this.data[e][t], r, o);
  }
  addResource(e, t, r, a) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const n = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let s = [e, t];
    r && (s = s.concat(n ? r.split(n) : r)), e.indexOf(".") > -1 && (s = e.split("."), a = t, t = s[1]), this.addNamespaces(t), os(this.data, s, a), o.silent || this.emit("added", e, t, r, a);
  }
  addResources(e, t, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in r)
      (typeof r[o] == "string" || Array.isArray(r[o])) && this.addResource(e, t, o, r[o], {
        silent: !0
      });
    a.silent || this.emit("added", e, t, r);
  }
  addResourceBundle(e, t, r, a, o) {
    let n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, s = [e, t];
    e.indexOf(".") > -1 && (s = e.split("."), a = r, r = t, t = s[1]), this.addNamespaces(t);
    let l = Wi(this.data, s) || {};
    n.skipCopy || (r = JSON.parse(JSON.stringify(r))), a ? Pc(l, r, o) : l = {
      ...l,
      ...r
    }, os(this.data, s, l), n.silent || this.emit("added", e, t, r);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(e, t)
    } : this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((a) => t[a] && Object.keys(t[a]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Ec = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, r, a) {
    return i.forEach((o) => {
      this.processors[o] && (e = this.processors[o].process(e, t, r, a));
    }), e;
  }
};
const ss = {};
class qi extends aa {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Wg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = it.create("translator");
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
    return r && r.res !== void 0;
  }
  extractFromKey(e, t) {
    let r = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const a = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let o = t.ns || this.options.defaultNS || [];
    const n = r && e.indexOf(r) > -1, s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !rm(e, r, a);
    if (n && !s) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: o
        };
      const c = e.split(r);
      (r !== a || r === a && this.options.ns.indexOf(c[0]) > -1) && (o = c.shift()), e = c.join(a);
    }
    return typeof o == "string" && (o = [o]), {
      key: e,
      namespaces: o
    };
  }
  translate(e, t, r) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null)
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const a = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: n,
      namespaces: s
    } = this.extractFromKey(e[e.length - 1], t), l = s[s.length - 1], c = t.lng || this.language, d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (d) {
        const k = t.nsSeparator || this.options.nsSeparator;
        return a ? {
          res: `${l}${k}${n}`,
          usedKey: n,
          exactUsedKey: n,
          usedLng: c,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${k}${n}`;
      }
      return a ? {
        res: n,
        usedKey: n,
        exactUsedKey: n,
        usedLng: c,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(t)
      } : n;
    }
    const u = this.resolve(e, t);
    let f = u && u.res;
    const h = u && u.usedKey || n, _ = u && u.exactUsedKey || n, m = Object.prototype.toString.apply(f), y = ["[object Number]", "[object Function]", "[object RegExp]"], v = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, g = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (g && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && y.indexOf(m) < 0 && !(typeof v == "string" && Array.isArray(f))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const k = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, f, {
          ...t,
          ns: s
        }) : `key '${n} (${this.language})' returned an object instead of string.`;
        return a ? (u.res = k, u.usedParams = this.getUsedParamsDetails(t), u) : k;
      }
      if (o) {
        const k = Array.isArray(f), w = k ? [] : {}, C = k ? _ : h;
        for (const S in f)
          if (Object.prototype.hasOwnProperty.call(f, S)) {
            const z = `${C}${o}${S}`;
            w[S] = this.translate(z, {
              ...t,
              joinArrays: !1,
              ns: s
            }), w[S] === z && (w[S] = f[S]);
          }
        f = w;
      }
    } else if (g && typeof v == "string" && Array.isArray(f))
      f = f.join(v), f && (f = this.extendTranslation(f, e, t, r));
    else {
      let k = !1, w = !1;
      const C = t.count !== void 0 && typeof t.count != "string", S = qi.hasDefaultValue(t), z = C ? this.pluralResolver.getSuffix(c, t.count, t) : "", x = t.ordinal && C ? this.pluralResolver.getSuffix(c, t.count, {
        ordinal: !1
      }) : "", T = C && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), A = T && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${z}`] || t[`defaultValue${x}`] || t.defaultValue;
      !this.isValidLookup(f) && S && (k = !0, f = A), this.isValidLookup(f) || (w = !0, f = n);
      const M = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && w ? void 0 : f, O = S && A !== f && this.options.updateMissing;
      if (w || k || O) {
        if (this.logger.log(O ? "updateKey" : "missingKey", c, l, n, O ? A : f), o) {
          const P = this.resolve(n, {
            ...t,
            keySeparator: !1
          });
          P && P.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let j = [];
        const N = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && N && N[0])
          for (let P = 0; P < N.length; P++)
            j.push(N[P]);
        else
          this.options.saveMissingTo === "all" ? j = this.languageUtils.toResolveHierarchy(t.lng || this.language) : j.push(t.lng || this.language);
        const D = (P, L, $) => {
          const Q = S && $ !== f ? $ : M;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(P, l, L, Q, O, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(P, l, L, Q, O, t), this.emit("missingKey", P, l, L, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? j.forEach((P) => {
          const L = this.pluralResolver.getSuffixes(P, t);
          T && t[`defaultValue${this.options.pluralSeparator}zero`] && L.indexOf(`${this.options.pluralSeparator}zero`) < 0 && L.push(`${this.options.pluralSeparator}zero`), L.forEach(($) => {
            D([P], n + $, t[`defaultValue${$}`] || A);
          });
        }) : D(j, n, A));
      }
      f = this.extendTranslation(f, e, t, u, r), w && f === n && this.options.appendNamespaceToMissingKey && (f = `${l}:${n}`), (w || k) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${n}` : n, k ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return a ? (u.res = f, u.usedParams = this.getUsedParamsDetails(t), u) : f;
  }
  extendTranslation(e, t, r, a, o) {
    var n = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
        resolved: a
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const c = typeof e == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (c) {
        const f = e.match(this.interpolator.nestingRegexp);
        d = f && f.length;
      }
      let u = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (u = {
        ...this.options.interpolation.defaultVariables,
        ...u
      }), e = this.interpolator.interpolate(e, u, r.lng || this.language || a.usedLng, r), c) {
        const f = e.match(this.interpolator.nestingRegexp), h = f && f.length;
        d < h && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && a && a.res && (r.lng = this.language || a.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, h = new Array(f), _ = 0; _ < f; _++)
          h[_] = arguments[_];
        return o && o[0] === h[0] && !r.context ? (n.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${t[0]}`), null) : n.translate(...h, t);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess, l = typeof s == "string" ? [s] : s;
    return e != null && l && l.length && r.applyPostProcessor !== !1 && (e = Ec.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, o, n, s;
    return typeof e == "string" && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(r))
        return;
      const c = this.extractFromKey(l, t), d = c.key;
      a = d;
      let u = c.namespaces;
      this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && typeof t.count != "string", h = f && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), _ = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      u.forEach((y) => {
        this.isValidLookup(r) || (s = y, !ss[`${m[0]}-${y}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (ss[`${m[0]}-${y}`] = !0, this.logger.warn(`key "${a}" for languages "${m.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((v) => {
          if (this.isValidLookup(r))
            return;
          n = v;
          const g = [d];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(g, d, v, y, t);
          else {
            let k;
            f && (k = this.pluralResolver.getSuffix(v, t.count, t));
            const w = `${this.options.pluralSeparator}zero`, C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (g.push(d + k), t.ordinal && k.indexOf(C) === 0 && g.push(d + k.replace(C, this.options.pluralSeparator)), h && g.push(d + w)), _) {
              const S = `${d}${this.options.contextSeparator}${t.context}`;
              g.push(S), f && (g.push(S + k), t.ordinal && k.indexOf(C) === 0 && g.push(S + k.replace(C, this.options.pluralSeparator)), h && g.push(S + w));
            }
          }
          let b;
          for (; b = g.pop(); )
            this.isValidLookup(r) || (o = b, r = this.getResource(v, y, b, t));
        }));
      });
    }), {
      res: r,
      usedKey: a,
      exactUsedKey: o,
      usedLng: n,
      usedNS: s
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, r, a) : this.resourceStore.getResource(e, t, r, a);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && typeof e.replace != "string";
    let a = r ? e.replace : e;
    if (r && typeof e.count < "u" && (a.count = e.count), this.options.interpolation.defaultVariables && (a = {
      ...this.options.interpolation.defaultVariables,
      ...a
    }), !r) {
      a = {
        ...a
      };
      for (const o of t)
        delete a[o];
    }
    return a;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && e[r] !== void 0)
        return !0;
    return !1;
  }
}
const za = (i) => i.charAt(0).toUpperCase() + i.slice(1);
class ls {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = it.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Yi(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Yi(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let a = Intl.getCanonicalLocales(e)[0];
          if (a && this.options.lowerCaseLng && (a = a.toLowerCase()), a)
            return a;
        } catch {
        }
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = e.split("-");
      return this.options.lowerCaseLng ? r = r.map((a) => a.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = za(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = za(r[1].toLowerCase())), t.indexOf(r[2].toLowerCase()) > -1 && (r[2] = za(r[2].toLowerCase()))), r.join("-");
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
      const a = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(a)) && (t = a);
    }), !t && this.options.supportedLngs && e.forEach((r) => {
      if (t)
        return;
      const a = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(a))
        return t = a;
      t = this.options.supportedLngs.find((o) => {
        if (o === a)
          return o;
        if (!(o.indexOf("-") < 0 && a.indexOf("-") < 0) && (o.indexOf("-") > 0 && a.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === a || o.indexOf(a) === 0 && a.length > 1))
          return o;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e)
      return [];
    if (typeof e == "function" && (e = e(t)), typeof e == "string" && (e = [e]), Array.isArray(e))
      return e;
    if (!t)
      return e.default || [];
    let r = e[t];
    return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || [];
  }
  toResolveHierarchy(e, t) {
    const r = this.getFallbackCodes(t || this.options.fallbackLng || [], e), a = [], o = (n) => {
      n && (this.isSupportedCode(n) ? a.push(n) : this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : typeof e == "string" && o(this.formatLanguageCode(e)), r.forEach((n) => {
      a.indexOf(n) < 0 && o(this.formatLanguageCode(n));
    }), a;
  }
}
let im = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], am = {
  1: (i) => +(i > 1),
  2: (i) => +(i != 1),
  3: (i) => 0,
  4: (i) => i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2,
  5: (i) => i == 0 ? 0 : i == 1 ? 1 : i == 2 ? 2 : i % 100 >= 3 && i % 100 <= 10 ? 3 : i % 100 >= 11 ? 4 : 5,
  6: (i) => i == 1 ? 0 : i >= 2 && i <= 4 ? 1 : 2,
  7: (i) => i == 1 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2,
  8: (i) => i == 1 ? 0 : i == 2 ? 1 : i != 8 && i != 11 ? 2 : 3,
  9: (i) => +(i >= 2),
  10: (i) => i == 1 ? 0 : i == 2 ? 1 : i < 7 ? 2 : i < 11 ? 3 : 4,
  11: (i) => i == 1 || i == 11 ? 0 : i == 2 || i == 12 ? 1 : i > 2 && i < 20 ? 2 : 3,
  12: (i) => +(i % 10 != 1 || i % 100 == 11),
  13: (i) => +(i !== 0),
  14: (i) => i == 1 ? 0 : i == 2 ? 1 : i == 3 ? 2 : 3,
  15: (i) => i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2,
  16: (i) => i % 10 == 1 && i % 100 != 11 ? 0 : i !== 0 ? 1 : 2,
  17: (i) => i == 1 || i % 10 == 1 && i % 100 != 11 ? 0 : 1,
  18: (i) => i == 0 ? 0 : i == 1 ? 1 : 2,
  19: (i) => i == 1 ? 0 : i == 0 || i % 100 > 1 && i % 100 < 11 ? 1 : i % 100 > 10 && i % 100 < 20 ? 2 : 3,
  20: (i) => i == 1 ? 0 : i == 0 || i % 100 > 0 && i % 100 < 20 ? 1 : 2,
  21: (i) => i % 100 == 1 ? 1 : i % 100 == 2 ? 2 : i % 100 == 3 || i % 100 == 4 ? 3 : 0,
  22: (i) => i == 1 ? 0 : i == 2 ? 1 : (i < 0 || i > 10) && i % 10 == 0 ? 2 : 3
};
const om = ["v1", "v2", "v3"], nm = ["v4"], cs = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, sm = () => {
  const i = {};
  return im.forEach((e) => {
    e.lngs.forEach((t) => {
      i[t] = {
        numbers: e.nr,
        plurals: am[e.fc]
      };
    });
  }), i;
};
class lm {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = it.create("pluralResolver"), (!this.options.compatibilityJSON || nm.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = sm(), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const r = Yi(e === "dev" ? "en" : e), a = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
          cleanedCode: r,
          type: a
        });
        if (o in this.pluralRulesCache)
          return this.pluralRulesCache[o];
        const n = new Intl.PluralRules(r, {
          type: a
        });
        return this.pluralRulesCache[o] = n, n;
      } catch {
        return;
      }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, t);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, r).map((a) => `${t}${a}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, t);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((a, o) => cs[a] - cs[o]).map((a) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : r.numbers.map((a) => this.getSuffix(e, a, t)) : [];
  }
  getSuffix(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(e, r);
    return a ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${a.select(t)}` : this.getSuffixRetroCompatible(a, t) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let a = e.numbers[r];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
    const o = () => this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? `_plural_${a.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !om.includes(this.options.compatibilityJSON);
  }
}
const ds = function(i, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = Zg(i, e, t);
  return !o && a && typeof t == "string" && (o = no(i, t, r), o === void 0 && (o = no(e, t, r))), o;
}, Aa = (i) => i.replace(/\$/g, "$$$$");
class cm {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = it.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: r,
      useRawValueToEscape: a,
      prefix: o,
      prefixEscaped: n,
      suffix: s,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: d,
      unescapePrefix: u,
      nestingPrefix: f,
      nestingPrefixEscaped: h,
      nestingSuffix: _,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: y,
      maxReplaces: v,
      alwaysFormat: g
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Xg, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = a !== void 0 ? a : !1, this.prefix = o ? tr(o) : n || "{{", this.suffix = s ? tr(s) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = d ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : d || "", this.nestingPrefix = f ? tr(f) : h || tr("$t("), this.nestingSuffix = _ ? tr(_) : m || tr(")"), this.nestingOptionsSeparator = y || ",", this.maxReplaces = v || 1e3, this.alwaysFormat = g !== void 0 ? g : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, r) => t && t.source === r ? (t.lastIndex = 0, t) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, r, a) {
    let o, n, s;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const v = ds(t, l, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(v, void 0, r, {
          ...a,
          ...t,
          interpolationkey: h
        }) : v;
      }
      const _ = h.split(this.formatSeparator), m = _.shift().trim(), y = _.join(this.formatSeparator).trim();
      return this.format(ds(t, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), y, r, {
        ...a,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const d = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, u = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => Aa(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? Aa(this.escape(h)) : Aa(h)
    }].forEach((h) => {
      for (s = 0; o = h.regex.exec(e); ) {
        const _ = o[1].trim();
        if (n = c(_), n === void 0)
          if (typeof d == "function") {
            const y = d(e, o, a);
            n = typeof y == "string" ? y : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, _))
            n = "";
          else if (u) {
            n = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${_} for interpolating ${e}`), n = "";
        else
          typeof n != "string" && !this.useRawValueToEscape && (n = rs(n));
        const m = h.safeValue(n);
        if (e = e.replace(o[0], m), u ? (h.regex.lastIndex += n.length, h.regex.lastIndex -= o[0].length) : h.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, o, n;
    const s = (l, c) => {
      const d = this.nestingOptionsSeparator;
      if (l.indexOf(d) < 0)
        return l;
      const u = l.split(new RegExp(`${d}[ ]*{`));
      let f = `{${u[1]}`;
      l = u[0], f = this.interpolate(f, n);
      const h = f.match(/'/g), _ = f.match(/"/g);
      (h && h.length % 2 === 0 && !_ || _.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        n = JSON.parse(f), c && (n = {
          ...c,
          ...n
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${d}${f}`;
      }
      return n.defaultValue && n.defaultValue.indexOf(this.prefix) > -1 && delete n.defaultValue, l;
    };
    for (; a = this.nestingRegexp.exec(e); ) {
      let l = [];
      n = {
        ...r
      }, n = n.replace && typeof n.replace != "string" ? n.replace : n, n.applyPostProcessor = !1, delete n.defaultValue;
      let c = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const d = a[1].split(this.formatSeparator).map((u) => u.trim());
        a[1] = d.shift(), l = d, c = !0;
      }
      if (o = t(s.call(this, a[1].trim(), n), n), o && a[0] === e && typeof o != "string")
        return o;
      typeof o != "string" && (o = rs(o)), o || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`), o = ""), c && (o = l.reduce((d, u) => this.format(d, u, r.lng, {
        ...r,
        interpolationkey: a[1].trim()
      }), o.trim())), e = e.replace(a[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const dm = (i) => {
  let e = i.toLowerCase().trim();
  const t = {};
  if (i.indexOf("(") > -1) {
    const r = i.split("(");
    e = r[0].toLowerCase().trim();
    const a = r[1].substring(0, r[1].length - 1);
    e === "currency" && a.indexOf(":") < 0 ? t.currency || (t.currency = a.trim()) : e === "relativetime" && a.indexOf(":") < 0 ? t.range || (t.range = a.trim()) : a.split(";").forEach((n) => {
      if (n) {
        const [s, ...l] = n.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), d = s.trim();
        t[d] || (t[d] = c), c === "false" && (t[d] = !1), c === "true" && (t[d] = !0), isNaN(c) || (t[d] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, rr = (i) => {
  const e = {};
  return (t, r, a) => {
    let o = a;
    a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (o = {
      ...o,
      [a.interpolationkey]: void 0
    });
    const n = r + JSON.stringify(o);
    let s = e[n];
    return s || (s = i(Yi(r), a), e[n] = s), s(t);
  };
};
class um {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = it.create("formatter"), this.options = e, this.formats = {
      number: rr((t, r) => {
        const a = new Intl.NumberFormat(t, {
          ...r
        });
        return (o) => a.format(o);
      }),
      currency: rr((t, r) => {
        const a = new Intl.NumberFormat(t, {
          ...r,
          style: "currency"
        });
        return (o) => a.format(o);
      }),
      datetime: rr((t, r) => {
        const a = new Intl.DateTimeFormat(t, {
          ...r
        });
        return (o) => a.format(o);
      }),
      relativetime: rr((t, r) => {
        const a = new Intl.RelativeTimeFormat(t, {
          ...r
        });
        return (o) => a.format(o, r.range || "day");
      }),
      list: rr((t, r) => {
        const a = new Intl.ListFormat(t, {
          ...r
        });
        return (o) => a.format(o);
      })
    }, this.init(e);
  }
  init(e) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = rr(t);
  }
  format(e, t, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = t.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((s) => s.indexOf(")") > -1)) {
      const s = o.findIndex((l) => l.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, s)].join(this.formatSeparator);
    }
    return o.reduce((s, l) => {
      const {
        formatName: c,
        formatOptions: d
      } = dm(l);
      if (this.formats[c]) {
        let u = s;
        try {
          const f = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, h = f.locale || f.lng || a.locale || a.lng || r;
          u = this.formats[c](s, h, {
            ...d,
            ...a,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return u;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return s;
    }, e);
  }
}
const pm = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class fm extends aa {
  constructor(e, t, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = a, this.logger = it.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, a.backend, a);
  }
  queueLoad(e, t, r, a) {
    const o = {}, n = {}, s = {}, l = {};
    return e.forEach((c) => {
      let d = !0;
      t.forEach((u) => {
        const f = `${c}|${u}`;
        !r.reload && this.store.hasResourceBundle(c, u) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? n[f] === void 0 && (n[f] = !0) : (this.state[f] = 1, d = !1, n[f] === void 0 && (n[f] = !0), o[f] === void 0 && (o[f] = !0), l[u] === void 0 && (l[u] = !0)));
      }), d || (s[c] = !0);
    }), (Object.keys(o).length || Object.keys(n).length) && this.queue.push({
      pending: n,
      pendingCount: Object.keys(n).length,
      loaded: {},
      errors: [],
      callback: a
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(n),
      toLoadLanguages: Object.keys(s),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, r) {
    const a = e.split("|"), o = a[0], n = a[1];
    t && this.emit("failedLoading", o, n, t), !t && r && this.store.addResourceBundle(o, n, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && r && (this.state[e] = 0);
    const s = {};
    this.queue.forEach((l) => {
      qg(l.loaded, [o], n), pm(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        s[c] || (s[c] = {});
        const d = l.loaded[c];
        d.length && d.forEach((u) => {
          s[c][u] === void 0 && (s[c][u] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, n = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return n(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: r,
        tried: a,
        wait: o,
        callback: n
      });
      return;
    }
    this.readingCalls++;
    const s = (c, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const u = this.waitingReads.shift();
        this.read(u.lng, u.ns, u.fcName, u.tried, u.wait, u.callback);
      }
      if (c && d && a < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, r, a + 1, o * 2, n);
        }, o);
        return;
      }
      n(c, d);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, t);
        c && typeof c.then == "function" ? c.then((d) => s(null, d)).catch(s) : s(null, c);
      } catch (c) {
        s(c);
      }
      return;
    }
    return l(e, t, s);
  }
  prepareLoading(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
    const o = this.queueLoad(e, t, r, a);
    if (!o.toLoad.length)
      return o.pending.length || a(), null;
    o.toLoad.forEach((n) => {
      this.loadOne(n);
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
    const r = e.split("|"), a = r[0], o = r[1];
    this.read(a, o, "read", void 0, void 0, (n, s) => {
      n && this.logger.warn(`${t}loading namespace ${o} for language ${a} failed`, n), !n && s && this.logger.log(`${t}loaded namespace ${o} for language ${a}`, s), this.loaded(e, n, s);
    });
  }
  saveMissing(e, t, r, a, o) {
    let n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...n,
          isUpdate: o
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let d;
            c.length === 5 ? d = c(e, t, r, a, l) : d = c(e, t, r, a), d && typeof d.then == "function" ? d.then((u) => s(null, u)).catch(s) : s(null, d);
          } catch (d) {
            s(d);
          }
        else
          c(e, t, r, a, s, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, a);
    }
  }
}
const us = () => ({
  debug: !1,
  initImmediate: !0,
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
    if (typeof i[1] == "object" && (e = i[1]), typeof i[1] == "string" && (e.defaultValue = i[1]), typeof i[2] == "string" && (e.tDescription = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
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
}), ps = (i) => (typeof i.ns == "string" && (i.ns = [i.ns]), typeof i.fallbackLng == "string" && (i.fallbackLng = [i.fallbackLng]), typeof i.fallbackNS == "string" && (i.fallbackNS = [i.fallbackNS]), i.supportedLngs && i.supportedLngs.indexOf("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), i), ki = () => {
}, hm = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
};
class ci extends aa {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = ps(e), this.services = {}, this.logger = it, this.modules = {
      external: []
    }, hm(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const a = us();
    this.options = {
      ...a,
      ...this.options,
      ...ps(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const o = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? it.init(o(this.modules.logger), this.options) : it.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : typeof Intl < "u" && (d = um);
      const u = new ls(this.options);
      this.store = new ns(this.options.resources, this.options);
      const f = this.services;
      f.logger = it, f.resourceStore = this.store, f.languageUtils = u, f.pluralResolver = new lm(u, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), d && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (f.formatter = o(d), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new cm(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new fm(o(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(h) {
        for (var _ = arguments.length, m = new Array(_ > 1 ? _ - 1 : 0), y = 1; y < _; y++)
          m[y - 1] = arguments[y];
        e.emit(h, ...m);
      }), this.modules.languageDetector && (f.languageDetector = o(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = o(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new qi(this.services, this.options), this.translator.on("*", function(h) {
        for (var _ = arguments.length, m = new Array(_ > 1 ? _ - 1 : 0), y = 1; y < _; y++)
          m[y - 1] = arguments[y];
        e.emit(h, ...m);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = ki), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = function() {
        return e.store[d](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = function() {
        return e.store[d](...arguments), e;
      };
    });
    const l = Rr(), c = () => {
      const d = (u, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(u, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l;
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ki;
    const a = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (a && a.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const o = [], n = (s) => {
        if (!s || s === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(s).forEach((c) => {
          c !== "cimode" && o.indexOf(c) < 0 && o.push(c);
        });
      };
      a ? n(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => n(l)), this.options.preload && this.options.preload.forEach((s) => n(s)), this.services.backendConnector.load(o, this.options.ns, (s) => {
        !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(s);
      });
    } else
      r(null);
  }
  reloadResources(e, t, r) {
    const a = Rr();
    return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = ki), this.services.backendConnector.reload(e, t, (o) => {
      a.resolve(), r(o);
    }), a;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Ec.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const a = Rr();
    this.emit("languageChanging", e);
    const o = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, n = (l, c) => {
      c ? (o(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
        return r.t(...arguments);
      }), t && t(l, function() {
        return r.t(...arguments);
      });
    }, s = (l) => {
      !e && !l && this.services.languageDetector && (l = []);
      const c = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      c && (this.language || o(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, (d) => {
        n(d, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(e), a;
  }
  getFixedT(e, t, r) {
    var a = this;
    const o = function(n, s) {
      let l;
      if (typeof s != "object") {
        for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), u = 2; u < c; u++)
          d[u - 2] = arguments[u];
        l = a.options.overloadTranslationOptionHandler([n, s].concat(d));
      } else
        l = {
          ...s
        };
      l.lng = l.lng || o.lng, l.lngs = l.lngs || o.lngs, l.ns = l.ns || o.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || o.keyPrefix);
      const f = a.options.keySeparator || ".";
      let h;
      return l.keyPrefix && Array.isArray(n) ? h = n.map((_) => `${l.keyPrefix}${f}${_}`) : h = l.keyPrefix ? `${l.keyPrefix}${f}${n}` : n, a.t(h, l);
    };
    return typeof e == "string" ? o.lng = e : o.lngs = e, o.ns = t, o.keyPrefix = r, o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
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
    const r = t.lng || this.resolvedLanguage || this.languages[0], a = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode")
      return !0;
    const n = (s, l) => {
      const c = this.services.backendConnector.state[`${s}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const s = t.precheck(this, n);
      if (s !== void 0)
        return s;
    }
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || n(r, e) && (!a || n(o, e)));
  }
  loadNamespaces(e, t) {
    const r = Rr();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((a) => {
      this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
    }), this.loadResources((a) => {
      r.resolve(), t && t(a);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = Rr();
    typeof e == "string" && (e = [e]);
    const a = this.options.preload || [], o = e.filter((n) => a.indexOf(n) < 0 && this.services.languageUtils.isSupportedCode(n));
    return o.length ? (this.options.preload = a.concat(o), this.loadResources((n) => {
      r.resolve(), t && t(n);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new ls(us());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new ci(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ki;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const a = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new ci(a);
    return (e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((s) => {
      o[s] = this[s];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r && (o.store = new ns(this.store.data, a), o.services.resourceStore = o.store), o.translator = new qi(o.services, a), o.translator.on("*", function(s) {
      for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
        c[d - 1] = arguments[d];
      o.emit(s, ...c);
    }), o.init(a, t), o.translator.options = a, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
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
const we = ci.createInstance();
we.createInstance = ci.createInstance;
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
const gm = {
  translation: {
    bikematrix_poweredby: "Angetrieben von Bike Matrix",
    bikeselector_addbike_brand_desc: "Die Marke deines Fahrrads ist normalerweise in den unten hervorgehobenen Bereichen zu finden.",
    bikeselector_addbike_brand_label: "Marke",
    bikeselector_addbike_brand_select: "Deine Fahrradmarke auswählen",
    bikeselector_addbike_find_btn: "Mein Fahrrad finden",
    bikeselector_addbike_framespec_desc: "Deine Rahmenspezifikation ist normalerweise in den unten hervorgehobenen Bereichen zu finden.",
    bikeselector_addbike_framespec_label: "Rahmenspezifikation",
    bikeselector_addbike_framespec_select: "Die Rahmenspezifikation deines Fahrrads auswählen",
    bikeselector_addbike_model_desc: "Dein Fahrradmodell ist normalerweise in den unten hervorgehobenen Bereichen zu finden.",
    bikeselector_addbike_model_label: "Modell",
    bikeselector_addbike_model_select: "Dein Fahrradmodell auswählen",
    bikeselector_addbike_title: "Fahrrad hinzufügen",
    bikeselector_browse_back_btn: "Zurück zur Bike-Lounge",
    bikeselector_browse_products_label: "Kompatible Produkte shoppen",
    bikeselector_browse_shop_btn: "Produkte shoppen",
    bikeselector_browse_title: "Mit dem Einkauf beginnen!",
    bikeselector_confirm_brandmodelframespec_label: "Marke, Modell, Rahmenspezifikation",
    bikeselector_confirm_confirm_btn: "Ja, das ist mein Fahrrad!",
    bikeselector_confirm_framesize_label: "Rahmengröße",
    bikeselector_confirm_notyourride_msg: "Nicht dein Fahrrad? Um eine Änderung vorzunehmen, wähle oben ein Feld aus.",
    bikeselector_confirm_title: "Dein Fahrrad bestätigen",
    bikeselector_confirm_yearbikespec_label: "Jahr, Ausstattungsvariante",
    bikeselector_home_add_a_bike: "Fügen Sie unten ein Fahrrad hinzu, um kompatible Teile anzuzeigen.",
    bikeselector_home_add_btn: "Fahrrad hinzufügen",
    bikeselector_home_browse_btn: "Kompatibilität prüfen",
    bikeselector_home_close_btn: "Schließen",
    bikeselector_home_empty: "Deine Lounge ist leer!",
    bikeselector_home_footer_message: "Fahrradhersteller können die Spezifikationen ihrer Fahrräder ohne vorherige Ankündigung ändern. Abweichungen gegenüber der Serienausstattung können Auswirkungen auf die Kompatibilität haben.",
    bikeselector_home_title: "Meine Bike-Lounge",
    bikeselector_or: "Oder",
    bikeselector_price_from: "Ab",
    bikeselector_search_bikespec_label: "Ausstattungsvariante",
    bikeselector_search_bikespec_select: "Ausstattungsvariante wählen",
    bikeselector_search_bikespec_select_all: "Alle",
    bikeselector_search_confirm_btn: "Auswahl bestätigen",
    bikeselector_search_no_bikes_found: "Keine Fahrräder gefunden",
    bikeselector_search_number_bikes_found: "{{number_found}} Fahrräder gefunden",
    bikeselector_search_one_bike_found: "1 Fahrrad gefunden",
    bikeselector_search_searching: "Suche läuft …",
    bikeselector_search_title: "Fahrradsuche",
    bikeselector_search_year_label: "Jahr",
    bikeselector_size_confirm_btn: "Größe bestätigen",
    bikeselector_size_framesize_desc: "Die Rahmengröße deines Fahrrads ist normalerweise in den unten hervorgehobenen Bereichen zu finden.",
    bikeselector_size_framesize_label: "Rahmengröße",
    bikeselector_size_framesize_one_size: "Einheitsgröße",
    bikeselector_size_framesize_select: "Deine Rahmengröße wählen",
    bikeselector_size_title: "Deine Größe wählen",
    bikeselectorbanner_mobiletitle: "Kompatibilität prüfen",
    bikeselectorbanner_title: "Wählen Sie Ihr Fahrrad aus, um die Kompatibilität zu prüfen",
    cancel: "Abbrechen",
    category_bike: "Fahrrad",
    category_bottombracket: "Tretlager",
    category_bottombracketpart: "Tretlager-Ersatzteile",
    category_brakeadapter: "Bremsadapter",
    category_brakeadapterfront: "Bremsadapter vorne",
    category_brakeadapterpart: "Bremsadapter-Ersatzteile",
    category_brakeadapterrear: "Bremsadapter hinten",
    category_brakecaliper: "Bremssattel",
    category_brakecaliperfront: "Bremssattel vorne",
    category_brakecaliperpart: "Bremssattel-Ersatzteile",
    category_brakecaliperrear: "Bremssattel hinten",
    category_brakecaliperservicekit: "Bremssattel-Servicekit",
    category_brakelever: "Bremshebel",
    category_brakeleverlh: "Bremshebel links",
    category_brakeleverpart: "Bremshebel-Ersatzteile",
    category_brakeleverrh: "Bremshebel rechts",
    category_brakeleverservicekit: "Bremshebel-Servicekit",
    category_brakepads: "Bremsbeläge",
    category_brakepadsfront: "Bremsbeläge vorne",
    category_brakepadsrear: "Bremsbeläge hinten",
    category_brakerotor: "Bremsscheibe",
    category_brakerotorfront: "Bremsscheibe vorne",
    category_brakerotorpart: "Bremsscheiben-Ersatzteile",
    category_brakerotorrear: "Bremsscheibe hinten",
    category_brakes: "Bremsen",
    category_brakesystem: "Bremssystem",
    category_brakesystempart: "Bremssystem-Ersatzteile",
    category_cassette: "Kassette",
    category_cassettepart: "Kassetten-Ersatzteile",
    category_chain: "Kette",
    category_chainguide: "Kettenführung",
    category_chainguidepart: "Kettenführung-Ersatzteile",
    category_chainjoiner: "Kettenschloss/-nietstift",
    category_chainring: "Kettenblatt",
    category_chainringbolt: "Kettenblattschrauben",
    category_chainringspider: "Kettenblatt-Spider",
    category_cockpit: "Cockpit",
    category_crankpart: "Kurbelgarnitur-Ersatzteile",
    category_crankset: "Kurbelgarnitur",
    category_drivetrain: "Antriebsstrang",
    category_dropperlever: "Variosattelstützenhebel",
    category_dropperleverpart: "Variosattelstützenhebel-Ersatzteile",
    category_ebikebattery: "E-Bike Akku",
    category_ebikebatterypart: "E-Bike Akku-Ersatzteile",
    category_ebikecharger: "E-Bike Ladegerät",
    category_ebikechargerpart: "E-Bike Ladegerät-Ersatzteile",
    category_ebikecontrolunit: "E-Bike Bedieneinheit",
    category_ebikecontrolunitpart: "E-Bike Bedieneinheit-Ersatzteile",
    category_ebikeinterconnect: "E-Bike Kabelstrang",
    category_ebikeinterconnectpart: "E-Bike Kabelstrang-Ersatzteile",
    category_ebikemotorsystem: "E-Bike Antriebssystem",
    category_ebikemotorsystempart: "E-Bike Antriebssystem-Ersatzteile",
    category_fork: "Gabel",
    category_forkpart: "Gabel-Ersatzteile",
    category_forkservicekit: "Gabel-Servicekit",
    category_frame: "Rahmen",
    category_framefork: "Rahmen und Gabel",
    category_framepart: "Rahmen-Ersatzteile",
    category_frontaxle: "Vorderradachse",
    category_frontaxlepart: "Vorderradachsen-Ersatzteile",
    category_frontderailleur: "Umwerfer",
    category_frontderailleurpart: "Umwerfer-Ersatzteile",
    category_fronthub: "Vorderradnabe",
    category_fronthubpart: "Vorderradnaben-Ersatzteile",
    category_frontwheel: "Vorderrad",
    category_grips: "Griffe",
    category_gripspart: "Griff-Ersatzteile",
    category_handlebar: "Lenker",
    category_headset: "Steuersatz",
    category_headsetpart: "Steuersatz-Ersatzteile",
    category_largestchainring: "Größtes Kettenblatt",
    category_nipple: "Speichennippel",
    category_pedals: "Pedale",
    category_pedalspart: "Pedal-Ersatzteil",
    category_rearaxle: "Hinterradachse",
    category_rearaxlepart: "Hinterradachsen-Ersatzteile",
    category_rearderailleur: "Schaltwerk",
    category_rearderailleurpart: "Schaltwerk-Ersatzteile",
    category_rearhub: "Hinterradnabe",
    category_rearhubpart: "Hinterradnaben-Ersatzteile",
    category_rearshock: "Hinterbaudämpfer",
    category_rearshockpart: "Hinterbaudämpfer-Ersatzteile",
    category_rearshockservicekit: "Hinterbaudämpfer-Servicekit",
    category_rearwheel: "Hinterrad",
    category_rim: "Felge",
    category_saddle: "Sattel",
    category_seatpost: "Sattelstütze",
    category_seatpostclamp: "Sattelstützenklemme",
    category_seatpostclamppart: "Sattelstützenklemmen-Ersatzteile",
    category_seatpostpart: "Sattelstützen-Ersatzteile",
    category_seatpostservicekit: "Sattelstützen-Servicekit",
    category_secondlargestchainring: "Zweitgrößtes Kettenblatt",
    category_shiftadapter: "Schaltadapter",
    category_shiftadapterpart: "Schaltadapter-Ersatzteile",
    category_shiftbrakecombo: "Schalt-/Bremshebel",
    category_shiftbrakecombopart: "Schalt-/Bremshebel-Ersatzteile",
    category_shifter: "Schalthebel",
    category_shifteradapterlh: "Schalthebeladapter für die linke Hand",
    category_shifteradapterrh: "Schalthebeladapter rechts",
    category_shifterbrakecombolh: "Schalthebel-Bremskombination links",
    category_shifterbrakecomborh: "Schalthebel-Bremskombination rechts",
    category_shifterlh: "Schalthebel für die linke Hand",
    category_shifterpart: "Schalthebel-Ersatzteile",
    category_shifterrh: "Schalthebel rechts",
    category_spoke: "Speiche",
    category_stem: "Vorbau",
    category_stempart: "Vorbau-Ersatzteile",
    category_thirdlargestchainring: "Drittgrößtes Kettenblatt",
    category_tube: "Schlauch",
    category_tyre: "Reifen",
    category_tyrefront: "Reifen vorne",
    category_tyrerear: "Reifen hinten",
    category_wheelset: "Laufradsatz",
    category_wheelstyres: "Räder und Reifen",
    checksku_message_nobikefound: "Es konnte kein Fahrrad mit der angegebenen Fahrradschlüsselnummer gefunden werden",
    checksku_message_nocompatibilityinfo: "Keine Informationen zur Kompatibilität",
    checksku_message_noproductfound: "Es konnte kein Teil mit der angegebenen SKU-/Teile-Nr. oder dem Barcode gefunden werden",
    checksku_message_notcompatible: "Nicht kompatibel",
    checksku_warning_unabletoperformcheck: "Es konnte keine Prüfung der Kompatibilität durchgeführt werden. Die Kompatibilität muss persönlich überprüft werden.",
    compatible: "Kompatibel",
    compatible_check_notes: "Kompatibel – Notizen prüfen",
    compatiblelist_header: "Kompatible Produkte",
    compatiblelist_nobikeselected: "Kein Fahrrad ausgewählt. Hier klicken, um dein Fahrrad zur Suche nach kompatiblen Teilen hinzuzufügen",
    compatiblelist_noresults: "Keine kompatiblen Produkte gefunden",
    compatiblelist_pageone: "Alle für dein Fahrrad kompatiblen Produkte können <a>hier</a> eingesehen werden.",
    compatiblelist_unavailable: "Kompatibilität für diese Produktkategorie ist für deine gewählte Fahrradmarke demnächst verfügbar!",
    confirm: "Bestätigen",
    copy: "Kopieren",
    edit: "Bearbeiten",
    error_add_component: "Die Komponente wurde vom Fahrrad wohl abgelehnt. Versuche es erneut, aber dieses Mal mit mehr Nachdruck.",
    error_add_custom_bike: "Ups! Wir konnten dein Custom-Bike nicht erstellen. Bitte klicke auf „Aktualisieren“ und versuche es erneut.",
    error_find_products: "Hmmm … Heute ist bei uns wohl ein wenig Sand im Getriebe. Bitte klicke auf „Aktualisieren“ und versuche es erneut.",
    error_find_products_no_results: "Hmmm … Wir können das Produkt nicht finden. Versuche eine andere Modellnummer und korrigiere die Schreibweise.",
    error_generic: "Es gab einen Fehler am Endpunkt – {{endpoint_location}}",
    error_get_bike_bom: "Das ist uns peinlich! Leider konnte deine Fahrradkonfiguration nicht abgerufen werden. Bitte klicke auf „Aktualisieren“ und versuche es erneut.",
    error_invalid_email: "Dies ist scheinbar keine gültige E-Mail-Adresse. Hast du eine andere Option?",
    error_remove_component: "Diese Komponente will anscheinend am Fahrrad bleiben. Bitte klicke auf „Aktualisieren“ und versuche es erneut.",
    error_revert_component: "Diese Komponente will anscheinend am Fahrrad bleiben. Bitte klicke auf „Aktualisieren“ und versuche es erneut.",
    error_save_custom_bike: "Leider wurde dein Fahrrad nicht gespeichert. Versuche es erneut und tritt diesmal etwas kräftiger in die Pedale.",
    error_update_custom_bike: "Oh, das hat nicht geklappt. Sorry! Bitte klicke auf „Aktualisieren“ und versuche es erneut.",
    error_update_custom_bike_name: "Der Name deines Fahrrads konnte nicht geändert werden. Vielleicht mag es den neuen Namen nicht. Bitte klicke auf „Aktualisieren“ und versuche es erneut.",
    not_compatible: "Nicht kompatibel",
    onboarding_explore: "Gehen Sie entdecken",
    onboarding_green_spanner: "Suchen Sie nach dem Grünen Schraubenschlüssel",
    onboarding_green_spanner_description: "Wenn eine Komponente einen grünen Schraubenschlüssel hat, kann sie ausgetauscht oder komplett aus dem Build entfernt werden.",
    onboarding_linked_components: "Verknüpfte Komponenten verstehen",
    onboarding_linked_components_description: "Einige Teile (z. B. Kurbelgarnitur + Tretlager) sind miteinander verbunden. Um eines auszutauschen, müssen Sie möglicherweise beide entfernen – andernfalls markiert das System es möglicherweise als inkompatibel.",
    onboarding_next: "Nächste",
    onboarding_open_bike_build: "Öffnen Sie Ihren Fahrradaufbau",
    onboarding_open_bike_build_description: "Erweitern Sie beim Anzeigen Ihres Fahrradaufbaus die Komponentengruppen, um die Komponenten anzuzeigen, die für Ihr Fahrrad gelten.",
    onboarding_preview: "Vorschau anzeigen oder Änderungen speichern",
    onboarding_preview_description: "Sie können Komponenten austauschen/entfernen und Änderungen bestätigen, um Upgrades zu erkunden. Diese können vor dem Speichern jederzeit rückgängig gemacht werden. Nach dem Speichern können Änderungen nicht mehr rückgängig gemacht, sondern nur entfernt oder erneut ersetzt werden.",
    onboarding_replacement: "Wählen Sie den richtigen Ersatz",
    onboarding_replacement_description: "Verwenden Sie zur Suche den Barcode oder die Teilenummer des Herstellers (auf der Verpackung oder Ihrer Rechnung). Sie können auch die Modellnummer verwenden, überprüfen Sie dies jedoch noch einmal – einige Nummern gelten für mehrere Versionen.",
    onboarding_settings: "Einstellungsseite anzeigen",
    onboarding_settings_description: "Auf Ihrer Einstellungsseite können Sie den Namen Ihres Fahrrads ändern, Ihre E-Mail-Adresse aktualisieren und dort finden Sie Ihre Bike Matrix-ID sowie Ihre Share-ID.",
    onboarding_title: "Virtueller Workshop – Kurzanleitung",
    onboarding_vw_description: "Ändern Sie die digitale Aufzeichnung Ihres Fahrrads entsprechend den von Ihnen vorgenommenen Upgrades, um sicherzustellen, dass die Kompatibilitätsprüfungen so genau wie möglich sind.",
    productcheck_nobikeselected_label: "Kompatibilität prüfen",
    productcheck_nobikeselected_message: "Dein Fahrrad hinzufügen, um die Kompatibilität dieses Teils zu prüfen",
    productcheck_questionmark: "?",
    save: "Speichern",
    share: "Teilen",
    variantselector_help_text: "Das sind die Varianten des Produkts, die mit deinem Fahrrad kompatibel sind.",
    variantselector_help_text_clickable: "Klicke auf eine Variante, um zu dieser zu wechseln.",
    variantselector_help_text_showall: "Zeigt die Kompatibilität jeder Produktvariante.",
    variantselector_no_compatible: "Keine kompatiblen Varianten",
    variantselector_no_compatible_information: "Keine Kompatibilitätsinformationen",
    variantselector_title: "Kompatible Varianten",
    virtualworkshop_add_bike_text: "Deine Bike Matrix ID findest du auf der Seite Einstellungen in der virtuellen Werkstatt",
    virtualworkshop_add_by_error: "Keine gültige Bike Matrix ID",
    virtualworkshop_add_by_id: "Geben Sie Ihre Bike Matrix ID ein",
    virtualworkshop_are_you_sure: "Bist du sicher?",
    virtualworkshop_bm_id_text: "Du kannst entweder die Bike Matrix ID verwenden, die du in den Einstellungen der virtuellen Werkstatt findest, oder die geteilte ID, die dir von einer anderen Person mitgeteilt wurde.",
    virtualworkshop_bom_title: "Materialliste",
    virtualworkshop_build_text: "Details zur Konfiguration",
    virtualworkshop_cockpit: "Cockpit",
    virtualworkshop_copy: "Kopie",
    virtualworkshop_current: "Aktuell",
    virtualworkshop_disclaimer: "Bei der Aktualisierung ihres Fahrrad-Datensatzes übernehmen Nutzer die volle Verantwortung für die richtige Zusammenstellung der Komponenten und sind sich bewusst, dass sich Änderungen auf die Kompatibilität auswirken können.",
    virtualworkshop_do_not_pass: "Der virtuelle Workshop ist noch nicht für alle Fahrradmarken verfügbar.",
    virtualworkshop_drivetrain: "Antrieb",
    virtualworkshop_e_drive: "E-Antrieb",
    virtualworkshop_enter_button: "Virtuelle Werkstatt betreten",
    virtualworkshop_frame_fork: "Rahmen und Gabel",
    virtualworkshop_intro_text: "Optimiere deine Fahrradkonfiguration mit neuen Komponenten und speichere dein Fahrrad durch die Angabe einer E-Mail-Adresse. Betrachte geteilte Fahrradkonfigurationen und greife auf deine Fahrrad-IDs zu.",
    virtualworkshop_other_parts: "Sonstige Teile",
    virtualworkshop_remove_btn: "Komponente entfernen",
    virtualworkshop_remove_subtitle: "Das Entfernen einer Komponente führt dazu, dass sie aus deiner Fahrradkonfiguration gelöscht wird. Dies kann die Kompatibilität mit anderen Teilen beeinträchtigen.",
    virtualworkshop_remove_title: "Bist du sicher?",
    virtualworkshop_removed: "Entfernt",
    virtualworkshop_revert_btn: "Rückgängig machen",
    virtualworkshop_save_btn: "Fahrrad speichern",
    virtualworkshop_save_text: "Um dein Custom-Bike zu speichern, benötigen wir deine E-Mail-Adresse.",
    virtualworkshop_save_title: "E-Mail-Adresse eingeben",
    virtualworkshop_saved: "Ihr {{label}} wurde gespeichert!",
    virtualworkshop_search_text: "Barcode eingeben oder nach Marke, Modell, Teilenummer etc. suchen",
    virtualworkshop_settings_bike_name: "Name des Fahrrads",
    virtualworkshop_settings_email: "E-Mail",
    virtualworkshop_settings_id: "Bike Matrix ID",
    virtualworkshop_settings_share_id: "Geteilte ID",
    virtualworkshop_shared_icon: "Mit dir geteilt",
    virtualworkshop_swap_btn: "Komponente tauschen",
    virtualworkshop_title: "Virtuelle Werkstatt",
    virtualworkshop_unsaved_changes: "Ungespeicherte Änderungen betrachten",
    virtualworkshop_wheels_tyres: "Laufräder & Reifen"
  }
}, mm = {
  translation: {
    bikematrix_poweredby: "Offerto da Bike Matrix",
    bikeselector_addbike_brand_desc: "In genere, la marca della tua bici si trova nelle aree evidenziate di seguito.",
    bikeselector_addbike_brand_label: "Marca",
    bikeselector_addbike_brand_select: "Seleziona la marca della tua bici",
    bikeselector_addbike_find_btn: "Trova la mia bici",
    bikeselector_addbike_framespec_desc: "In genere, le informazioni sulla serie del telaio della tua bici si trovano nelle aree evidenziate di seguito.",
    bikeselector_addbike_framespec_label: "Serie del telaio",
    bikeselector_addbike_framespec_select: "Seleziona la serie del telaio della tua bici",
    bikeselector_addbike_model_desc: "In genere, il modello della tua bici si trova nelle aree evidenziate di seguito.",
    bikeselector_addbike_model_label: "Modello",
    bikeselector_addbike_model_select: "Seleziona il modello della tua bici",
    bikeselector_addbike_title: "Aggiungi una bici",
    bikeselector_browse_back_btn: "Torna alla pagina Le mie bici",
    bikeselector_browse_products_label: "Acquista i prodotti compatibili",
    bikeselector_browse_shop_btn: "Acquista i prodotti",
    bikeselector_browse_title: "Inizia l’acquisto!",
    bikeselector_confirm_brandmodelframespec_label: "Marca, modello, serie del telaio",
    bikeselector_confirm_confirm_btn: "Sì, questa è la mia bici!",
    bikeselector_confirm_framesize_label: "Misura del telaio",
    bikeselector_confirm_notyourride_msg: "Non è la tua bici? Seleziona un campo sopra per apportare una modifica.",
    bikeselector_confirm_title: "Conferma la tua bici",
    bikeselector_confirm_yearbikespec_label: "Anno, versione della bici",
    bikeselector_home_add_a_bike: "Aggiungi una bici qui sotto per vedere i pezzi compatibili.",
    bikeselector_home_add_btn: "Aggiungi una bici",
    bikeselector_home_browse_btn: "Sfoglia compatibilità",
    bikeselector_home_close_btn: "Chiudi",
    bikeselector_home_empty: "La tua Bike Lounge è vuota!",
    bikeselector_home_footer_message: "I produttori delle bici possono modificare le specifiche senza preavviso. Eventuali differenze rispetto alle specifiche di serie possono condizionare la compatibilità.",
    bikeselector_home_title: "Le mie bici",
    bikeselector_or: "O",
    bikeselector_price_from: "Da",
    bikeselector_search_bikespec_label: "Versione della bici",
    bikeselector_search_bikespec_select: "Seleziona la versione della bici",
    bikeselector_search_bikespec_select_all: "Tutti",
    bikeselector_search_confirm_btn: "Conferma la scelta",
    bikeselector_search_no_bikes_found: "Nessuna bici trovata",
    bikeselector_search_number_bikes_found: "{{number_found}} bici trovate",
    bikeselector_search_one_bike_found: "1 bici trovata",
    bikeselector_search_searching: "Ricerca in corso...",
    bikeselector_search_title: "Ricerca bici",
    bikeselector_search_year_label: "Anno",
    bikeselector_size_confirm_btn: "Conferma la misura",
    bikeselector_size_framesize_desc: "In genere, la misura del telaio della tua bici si trova nelle aree evidenziate di seguito.",
    bikeselector_size_framesize_label: "Misura del telaio",
    bikeselector_size_framesize_one_size: "Misura unica",
    bikeselector_size_framesize_select: "Seleziona la misura del tuo telaio",
    bikeselector_size_title: "Seleziona la tua misura",
    bikeselectorbanner_mobiletitle: "Controlla la compatibilità",
    bikeselectorbanner_title: "Seleziona la tua bici per verificarne la compatibilità",
    cancel: "Cancella",
    category_bike: "Bici",
    category_bottombracket: "Movimento centrale",
    category_bottombracketpart: "Componente movimento centrale",
    category_brakeadapter: "Adattatore freno",
    category_brakeadapterfront: "Adattatore freno anteriore",
    category_brakeadapterpart: "Componente adattatore freno",
    category_brakeadapterrear: "Adattatore freno posteriore",
    category_brakecaliper: "Pinza freno",
    category_brakecaliperfront: "Pinza freno anteriore",
    category_brakecaliperpart: "Componente pinza freno",
    category_brakecaliperrear: "Pinza freno posteriore",
    category_brakecaliperservicekit: "Kit manutenzione pinza freno",
    category_brakelever: "Leva freno",
    category_brakeleverlh: "Leva del freno sinistra",
    category_brakeleverpart: "Componente leva freno",
    category_brakeleverrh: "Leva del freno destra",
    category_brakeleverservicekit: "Kit manutenzione leva freno",
    category_brakepads: "Pastiglie/pattini freno",
    category_brakepadsfront: "Pastiglie Freno Anteriori",
    category_brakepadsrear: "Pastiglie Freno Posteriori",
    category_brakerotor: "Rotore freno",
    category_brakerotorfront: "Rotore del freno anteriore",
    category_brakerotorpart: "Componente rotore freno",
    category_brakerotorrear: "Rotore freno posteriore",
    category_brakes: "Freni",
    category_brakesystem: "Impianto frenante",
    category_brakesystempart: "Componente impianto frenante",
    category_cassette: "Cassetta",
    category_cassettepart: "Componente cassetta",
    category_chain: "Catena",
    category_chainguide: "Guidacatena",
    category_chainguidepart: "Componente guidacatena",
    category_chainjoiner: "Falsamaglia",
    category_chainring: "Corona",
    category_chainringbolt: "Vite corona",
    category_chainringspider: "Ragno della corona",
    category_cockpit: "Pozzetto",
    category_crankpart: "Componente guarnitura",
    category_crankset: "Guarnitura",
    category_drivetrain: "Trasmissione",
    category_dropperlever: "Leva reggisella telescopico",
    category_dropperleverpart: "Componente leva reggisella telescopico",
    category_ebikebattery: "Batteria eBike",
    category_ebikebatterypart: "Componente batteria eBike",
    category_ebikecharger: "Caricabatteria eBike",
    category_ebikechargerpart: "Componente caricabatteria eBike",
    category_ebikecontrolunit: "Unità di controllo eBike",
    category_ebikecontrolunitpart: "Componente unità di controllo eBike",
    category_ebikeinterconnect: "Interconnessione eBike",
    category_ebikeinterconnectpart: "Componente interconnessione eBike",
    category_ebikemotorsystem: "Sistema motore eBike",
    category_ebikemotorsystempart: "Componente sistema motore eBike",
    category_fork: "Forcella",
    category_forkpart: "Componente forcella",
    category_forkservicekit: "Kit di manutenzione forcella",
    category_frame: "Telaio",
    category_framefork: "Telaio e forcella",
    category_framepart: "Componente telaio",
    category_frontaxle: "Perno anteriore",
    category_frontaxlepart: "Componente perno anteriore",
    category_frontderailleur: "Deragliatore anteriore",
    category_frontderailleurpart: "Componente deragliatore anteriore",
    category_fronthub: "Mozzo anteriore",
    category_fronthubpart: "Componente mozzo anteriore",
    category_frontwheel: "Ruota anteriore",
    category_grips: "Manopole",
    category_gripspart: "Componente manopole",
    category_handlebar: "Manubrio",
    category_headset: "Serie sterzo",
    category_headsetpart: "Componente serie sterzo",
    category_largestchainring: "Corona più grande",
    category_nipple: "Nipplo",
    category_pedals: "Pedali",
    category_pedalspart: "Componente pedali",
    category_rearaxle: "Perno posteriore",
    category_rearaxlepart: "Componente perno posteriore",
    category_rearderailleur: "Deragliatore posteriore",
    category_rearderailleurpart: "Componente deragliatore posteriore",
    category_rearhub: "Mozzo posteriore",
    category_rearhubpart: "Componente mozzo posteriore",
    category_rearshock: "Sospensione posteriore",
    category_rearshockpart: "Componente sospensione posteriore",
    category_rearshockservicekit: "Kit manutenzione sospensione posteriore",
    category_rearwheel: "Ruota posteriore",
    category_rim: "Cerchio",
    category_saddle: "Sella",
    category_seatpost: "Reggisella",
    category_seatpostclamp: "Morsetto reggisella",
    category_seatpostclamppart: "Componente morsetto reggisella",
    category_seatpostpart: "Componente reggisella",
    category_seatpostservicekit: "Kit manutenzione reggisella",
    category_secondlargestchainring: "Seconda corona più grande",
    category_shiftadapter: "Adattatore cambio",
    category_shiftadapterpart: "Componente adattatore cambio",
    category_shiftbrakecombo: "Comando integrato freno/cambio",
    category_shiftbrakecombopart: "Componente comando integrato freno/cambio",
    category_shifter: "Comando cambio",
    category_shifteradapterlh: "Adattatore del cambio per mano sinistra",
    category_shifteradapterrh: "Adattatore del cambio destro",
    category_shifterbrakecombolh: "Combinazione freno cambio mano sinistra",
    category_shifterbrakecomborh: "Combinazione freno cambio mano destra",
    category_shifterlh: "Mano sinistra del cambio",
    category_shifterpart: "Componente comando cambio",
    category_shifterrh: "Mano destra del cambio",
    category_spoke: "Raggio",
    category_stem: "Attacco manubrio",
    category_stempart: "Componente attacco manubrio",
    category_thirdlargestchainring: "Terzo corona più grande",
    category_tube: "Camera d'aria",
    category_tyre: "Pneumatico",
    category_tyrefront: "Pneumatico anteriore",
    category_tyrerear: "Pneumatico posteriore",
    category_wheelset: "Set ruote",
    category_wheelstyres: "Ruote e pneumatici",
    checksku_message_nobikefound: "Impossibile trovare una bici con la chiave di ricerca fornita",
    checksku_message_nocompatibilityinfo: "Nessuna informazione sulla compatibilità",
    checksku_message_noproductfound: "Impossibile trovare il componente con lo SKU/codice a barre/codice componente fornito",
    checksku_message_notcompatible: "Non compatibile",
    checksku_warning_unabletoperformcheck: "Impossibile eseguire il controllo di compatibilità. Verificare manualmente la compatibilità.",
    compatible: "Compatibile",
    compatible_check_notes: "Compatibile - Controlla le note",
    compatiblelist_header: "Prodotti compatibili",
    compatiblelist_nobikeselected: "Nessuna bici selezionata. Clicca qui per aggiungere la tua bici e verificare la compatibilità dei componenti",
    compatiblelist_noresults: "Nessun prodotto compatibile trovato",
    compatiblelist_pageone: "Puoi vedere tutti i prodotti compatibili con la tua bici <a>qui</a>.",
    compatiblelist_unavailable: "I dati sulla compatibilità per questa categoria di prodotto e per la marca di bici selezionata saranno disponibili a breve!",
    confirm: "Conferma",
    copy: "Copia",
    edit: "Modifica",
    error_add_component: "Il componente non è stato installato. Riprova e questa volta pedala un po' più forte.",
    error_add_custom_bike: "Ops... Non siamo riusciti a creare la tua bici personalizzata. Aggiorna e riprova.",
    error_find_products: "Uhm... Sembra che le nostre ruote non girino bene. Aggiorna e riprova.",
    error_find_products_no_results: "Uhm... Non riusciamo a trovare il prodotto. Prova un codice prodotto diverso o prova a scriverlo in un altro modo.",
    error_generic: "Si è verificato un errore in un punto terminale - {{endpoint_location}}",
    error_get_bike_bom: "Siamo spiacenti! Non è stato possibile recuperare la configurazione della tua bici. Aggiorna e riprova.",
    error_invalid_email: "Sembra che l'indirizzo email non sia valido: sono disponibili altre opzioni?",
    error_remove_component: "Questo componente vuole davvero restare sulla bici. Aggiorna e riprova.",
    error_revert_component: "Questo componente vuole davvero restare sulla bici. Aggiorna e riprova.",
    error_save_custom_bike: "Colpa nostra, la tua bici non è stata salvata. Riprova e questa volta pedala un po' più forte.",
    error_update_custom_bike: "Oh, non ha funzionato. Ci spiace! Aggiorna e riprova.",
    error_update_custom_bike_name: "Non è stato possibile cambiare il nome della tua bici. Forse non le piace! Aggiorna e riprova",
    not_compatible: "Non compatibile",
    onboarding_explore: "Gehen Sie entdecken",
    onboarding_green_spanner: "Cerca la chiave inglese verde",
    onboarding_green_spanner_description: "Se un componente ha una chiave inglese verde, può essere scambiato o rimosso completamente dalla build.",
    onboarding_linked_components: "Comprendere i componenti collegati",
    onboarding_linked_components_description: "Alcune parti (ad esempio guarnitura + movimento centrale) sono collegate. Per scambiarne uno, potrebbe essere necessario rimuoverli entrambi, altrimenti il ??sistema potrebbe contrassegnarlo come incompatibile.",
    onboarding_next: "Nächste",
    onboarding_open_bike_build: "Apri la costruzione della tua bici",
    onboarding_open_bike_build_description: "Quando visualizzi la costruzione della tua bici, espandi i gruppi di componenti per visualizzare i componenti che si applicano alla tua bici.",
    onboarding_preview: "Anteprima o salvataggio delle modifiche",
    onboarding_preview_description: "Puoi scambiare/rimuovere componenti e confermare le modifiche per esplorare gli aggiornamenti. Queste operazioni possono essere annullate in qualsiasi momento prima del salvataggio. Una volta salvate, le modifiche non possono essere annullate, ma solo rimosse o sostituite di nuovo.",
    onboarding_replacement: "Scegli il sostituto giusto",
    onboarding_replacement_description: "Utilizza il codice a barre o il codice articolo del produttore (trovato sulla confezione o sulla fattura) per effettuare la ricerca. Puoi anche utilizzare il numero del modello, ma ricontrolla: alcuni numeri si applicano a più versioni.",
    onboarding_settings: "Visualizza la pagina Impostazioni",
    onboarding_settings_description: "La pagina delle impostazioni è dove puoi cambiare il nome della tua bicicletta, aggiornare la tua email e dove troverai il tuo ID Bike Matrix e il tuo ID di condivisione.",
    onboarding_title: "Workshop virtuale – Guida rapida",
    onboarding_vw_description: "Modifica il profilo digitale della tua bici per riflettere le modifiche apportate, assicurando che i controlli di compatibilità siano il più precisi possibile.",
    productcheck_nobikeselected_label: "Controlla compatibilità",
    productcheck_nobikeselected_message: "Aggiungi la tua bici per verificare se questo componente è idoneo",
    productcheck_questionmark: "?",
    save: "Salva",
    share: "Condividi",
    variantselector_help_text: "Ecco le varianti del prodotto compatibili con la tua bici.",
    variantselector_help_text_clickable: "Fare clic su una variante per passare a quella variante.",
    variantselector_help_text_showall: "Mostra la compatibilità di ciascuna variante del prodotto.",
    variantselector_no_compatible: "Nessuna variante compatibile",
    variantselector_no_compatible_information: "Nessuna informazione sulla compatibilità",
    variantselector_title: "Varianti compatibili",
    virtualworkshop_add_bike_text: "Il tuo ID Bike Matrix può essere trovato nella pagina Impostazioni all'interno dell'Officina virtuale",
    virtualworkshop_add_by_error: "ID Bike Matrix non valido",
    virtualworkshop_add_by_id: "Inserisci il tuo ID Bike Matrix",
    virtualworkshop_are_you_sure: "Sei sicuro?",
    virtualworkshop_bm_id_text: "Puoi utilizzare l'ID Bike Matrix, presente nella sezione delle impostazioni dell'Officina virtuale, oppure l'ID condiviso con te da qualcun altro.",
    virtualworkshop_bom_title: "Elenco materiali",
    virtualworkshop_build_text: "Dettagli configurazione",
    virtualworkshop_cockpit: "Cockpit",
    virtualworkshop_copy: "Copia",
    virtualworkshop_current: "Attuale",
    virtualworkshop_disclaimer: "Aggiornando l'allestimento delle proprie bici, l'utente si assume la piena responsabilità di verificare che i componenti siano corretti, consapevole del fatto che eventuali differenze possono condizionare la compatibilità.",
    virtualworkshop_do_not_pass: "L'officina virtuale non è disponibile per tutte le marche di biciclette.",
    virtualworkshop_drivetrain: "Trasmissione",
    virtualworkshop_e_drive: "eDrive",
    virtualworkshop_enter_button: "Accedi all'Officina virtuale",
    virtualworkshop_frame_fork: "Telaio e forcella",
    virtualworkshop_intro_text: "Aggiorna la configurazione della tua bici con nuovi componenti e salvala fornendo un indirizzo email. Visualizza le configurazioni condivise e accedi agli ID delle tue bici",
    virtualworkshop_other_parts: "Altre parti",
    virtualworkshop_remove_btn: "Rimuovi componente",
    virtualworkshop_remove_subtitle: "Rimuovendo un componente, verrà eliminato dalla configurazione della tua bici. Ciò può condizionare la compatibilità con altre parti.",
    virtualworkshop_remove_title: "Confermi?",
    virtualworkshop_removed: "Rimosso",
    virtualworkshop_revert_btn: "Ripristina",
    virtualworkshop_save_btn: "Salva la bici",
    virtualworkshop_save_text: "Per poter memorizzare una bici personalizzata dobbiamo salvarla associandola al tuo indirizzo email",
    virtualworkshop_save_title: "Inserisci la tua email",
    virtualworkshop_saved: "La tua {{label}} è stata salvata!",
    virtualworkshop_search_text: "Inserisci il codice a barre o cerca per marca, modello, codice prodotto...",
    virtualworkshop_settings_bike_name: "Nome della bici",
    virtualworkshop_settings_email: "Email",
    virtualworkshop_settings_id: "ID Bike Matrix",
    virtualworkshop_settings_share_id: "Condividi ID",
    virtualworkshop_shared_icon: "Condiviso con te",
    virtualworkshop_swap_btn: "Sostituisci il componente",
    virtualworkshop_title: "Officina virtuale",
    virtualworkshop_unsaved_changes: "Visualizza le modifiche non salvate",
    virtualworkshop_wheels_tyres: "Ruote e pneumatici"
  }
}, _m = {
  translation: {
    bikematrix_poweredby: "Mogelijk gemaakt door Bike Matrix",
    bikeselector_addbike_brand_desc: "Het merk van uw fiets kunt u meestal vinden in de hieronder gemarkeerde gebieden.",
    bikeselector_addbike_brand_label: "Merk",
    bikeselector_addbike_brand_select: "Selecteer het merk van uw fiets",
    bikeselector_addbike_find_btn: "Vind mijn fiets",
    bikeselector_addbike_framespec_desc: "De framespecificaties van uw fiets kunt u meestal vinden in de hieronder gemarkeerde gebieden.",
    bikeselector_addbike_framespec_label: "Framespecificaties",
    bikeselector_addbike_framespec_select: "Selecteer de framespecificaties van uw fiets",
    bikeselector_addbike_model_desc: "Het model van uw fiets kunt u meestal vinden in de hieronder gemarkeerde gebieden.",
    bikeselector_addbike_model_label: "Model",
    bikeselector_addbike_model_select: "Selecteer het model van uw fiets",
    bikeselector_addbike_title: "Fiets toevoegen",
    bikeselector_browse_back_btn: "Terug naar Fietsenrek",
    bikeselector_browse_products_label: "Bekijk compatibele producten",
    bikeselector_browse_shop_btn: "Bekijk producten",
    bikeselector_browse_title: "Begin met winkelen!",
    bikeselector_confirm_brandmodelframespec_label: "Merk, model, framespecificaties",
    bikeselector_confirm_confirm_btn: "Ja, dat is mijn fiets!",
    bikeselector_confirm_framesize_label: "Framemaat",
    bikeselector_confirm_notyourride_msg: "Niet uw fiets? Selecteer hierboven een veld om te wijzigen.",
    bikeselector_confirm_title: "Bevestig uw fiets",
    bikeselector_confirm_yearbikespec_label: "Jaar, fietsspecificaties",
    bikeselector_home_add_a_bike: "Voeg hieronder een fiets toe om compatibele onderdelen te bekijken.",
    bikeselector_home_add_btn: "Fiets toevoegen",
    bikeselector_home_browse_btn: "Compatibiliteit bekijken",
    bikeselector_home_close_btn: "Sluiten",
    bikeselector_home_empty: "Uw fietsenrek is leeg!",
    bikeselector_home_footer_message: "Fietsfabrikanten kunnen de specificaties van fietsen zonder kennisgeving wijzigen. De compatibiliteit kan veranderen door verschillen in de specificaties van de voorraad.",
    bikeselector_home_title: "Mijn Fietsenrek",
    bikeselector_or: "Of",
    bikeselector_price_from: "Van",
    bikeselector_search_bikespec_label: "Fietsspecificaties",
    bikeselector_search_bikespec_select: "Specificatieniveau selecteren",
    bikeselector_search_bikespec_select_all: "Alles",
    bikeselector_search_confirm_btn: "Selectie bevestigen",
    bikeselector_search_no_bikes_found: "Geen fietsen gevonden",
    bikeselector_search_number_bikes_found: "{{number_found}} fietsen gevonden",
    bikeselector_search_one_bike_found: "1 fiets gevonden",
    bikeselector_search_searching: "Zoeken...",
    bikeselector_search_title: "Fiets zoeken",
    bikeselector_search_year_label: "Jaar",
    bikeselector_size_confirm_btn: "Maat bevestigen",
    bikeselector_size_framesize_desc: "De framemaat van uw fiets kunt u meestal vinden in de hieronder gemarkeerde gebieden.",
    bikeselector_size_framesize_label: "Framemaat",
    bikeselector_size_framesize_one_size: "Eén maat",
    bikeselector_size_framesize_select: "Selecteer uw framemaat",
    bikeselector_size_title: "Selecteer de maat",
    bikeselectorbanner_mobiletitle: "Controleer compatibiliteit",
    bikeselectorbanner_title: "Selecteer uw fiets om de compatibiliteit te controleren",
    cancel: "Annuleren",
    category_bike: "Fiets",
    category_bottombracket: "Trapas",
    category_bottombracketpart: "Trapasonderdeel",
    category_brakeadapter: "Remadapter",
    category_brakeadapterfront: "Remadapter voorzijde",
    category_brakeadapterpart: "Remadapteronderdeel",
    category_brakeadapterrear: "Remadapter achter",
    category_brakecaliper: "Remklauw",
    category_brakecaliperfront: "Remklauw voorzijde",
    category_brakecaliperpart: "Remklauwonderdeel",
    category_brakecaliperrear: "Remklauw achter",
    category_brakecaliperservicekit: "Servicekit remklauw",
    category_brakelever: "Remhendel",
    category_brakeleverlh: "Remhendel links",
    category_brakeleverpart: "Remhendelonderdeel",
    category_brakeleverrh: "Remhendel Rechts",
    category_brakeleverservicekit: "Servicekit remhendel",
    category_brakepads: "Remblokken",
    category_brakepadsfront: "Remblokken voorzijde",
    category_brakepadsrear: "Remblokken Achter",
    category_brakerotor: "Remschijf",
    category_brakerotorfront: "Remrotor voorzijde",
    category_brakerotorpart: "Remschijfonderdeel",
    category_brakerotorrear: "Remrotor achter",
    category_brakes: "Remmen",
    category_brakesystem: "Remsysteem",
    category_brakesystempart: "Remsysteemonderdeel",
    category_cassette: "Cassette",
    category_cassettepart: "Cassetteonderdeel",
    category_chain: "Ketting",
    category_chainguide: "Kettinggeleider",
    category_chainguidepart: "Kettinggeleideronderdeel",
    category_chainjoiner: "Verbindingsschakel",
    category_chainring: "Kettingblad",
    category_chainringbolt: "Kettingbladbout",
    category_chainringspider: "Kettingblad Spider",
    category_cockpit: "Kuip",
    category_crankpart: "Crankonderdeel",
    category_crankset: "Crankset",
    category_drivetrain: "Aandrijflijn",
    category_dropperlever: "Dropperhendel",
    category_dropperleverpart: "Dropperhendelonderdeel",
    category_ebikebattery: "Batterij elektrische fiets",
    category_ebikebatterypart: "Batterijonderdeel van elektrische fiets",
    category_ebikecharger: "Oplader elektrische fiets",
    category_ebikechargerpart: "Opladeronderdeel van elektrische fiets",
    category_ebikecontrolunit: "Bediening elektrische fiets",
    category_ebikecontrolunitpart: "Bedieningsonderdeel van elektrische fiets",
    category_ebikeinterconnect: "Verbinding elektrische fiets",
    category_ebikeinterconnectpart: "Verbindingsonderdeel van elektrische fiets",
    category_ebikemotorsystem: "Motor elektrische fiets",
    category_ebikemotorsystempart: "Motoronderdeel van elektrische fiets",
    category_fork: "Voorvork",
    category_forkpart: "Voorvorkonderdeel",
    category_forkservicekit: "Servicekit voorvork",
    category_frame: "Frame",
    category_framefork: "Frame en vork",
    category_framepart: "Frameonderdeel",
    category_frontaxle: "Vooras",
    category_frontaxlepart: "Voorasonderdeel",
    category_frontderailleur: "Voorderailleur",
    category_frontderailleurpart: "Voorderailleuronderdeel",
    category_fronthub: "Voornaaf",
    category_fronthubpart: "Voornaafonderdeel",
    category_frontwheel: "Voorwiel",
    category_grips: "Handvatten",
    category_gripspart: "Handvatonderdeel",
    category_handlebar: "Stuur",
    category_headset: "Balhoofdstel",
    category_headsetpart: "Balhoofdonderdeel",
    category_largestchainring: "Grootste kettingblad",
    category_nipple: "Spaaknippel",
    category_pedals: "Pedalen",
    category_pedalspart: "Pedaalonderdeel",
    category_rearaxle: "Achteras",
    category_rearaxlepart: "Achterasonderdeel",
    category_rearderailleur: "Achterderailleur",
    category_rearderailleurpart: "Achterderailleuronderdeel",
    category_rearhub: "Achternaaf",
    category_rearhubpart: "Achternaafonderdeel",
    category_rearshock: "Schokdemper voor achterwiel",
    category_rearshockpart: "Schokdemperonderdeel voor achterwiel",
    category_rearshockservicekit: "Servicekit schokdemper voor achterwiel",
    category_rearwheel: "Achterwiel",
    category_rim: "Velg",
    category_saddle: "Zadel",
    category_seatpost: "Zadelpen",
    category_seatpostclamp: "Zadelpenklem",
    category_seatpostclamppart: "Zadelpenklemonderdeel",
    category_seatpostpart: "Zadelpenonderdeel",
    category_seatpostservicekit: "Servicekit zadelpen",
    category_secondlargestchainring: "Op een na grootste kettingblad",
    category_shiftadapter: "Versnellingsadapter",
    category_shiftadapterpart: "Versnellingsadapteronderdeel",
    category_shiftbrakecombo: "Schakel-/remhendel",
    category_shiftbrakecombopart: "Schakel-/remhendelonderdeel",
    category_shifter: "Shifter",
    category_shifteradapterlh: "Verstelleradapter links",
    category_shifteradapterrh: "Versnellingsadapter Rechts",
    category_shifterbrakecombolh: "Shifter Brake Combinatie Linkerhand",
    category_shifterbrakecomborh: "Shifter Brake Combinatie Rechterhand",
    category_shifterlh: "Shifter linkerhand",
    category_shifterpart: "Shifteronderdeel",
    category_shifterrh: "Shifter rechterhand",
    category_spoke: "Spaak",
    category_stem: "Stuurpen",
    category_stempart: "Stuurpenonderdeel",
    category_thirdlargestchainring: "Derde grootste kettingblad",
    category_tube: "Binnenband",
    category_tyre: "Buitenband",
    category_tyrefront: "Buitenband voorkant",
    category_tyrerear: "Buitenband achterkant",
    category_wheelset: "Wielset",
    category_wheelstyres: "Wielen en banden",
    checksku_message_nobikefound: "Kan geen fiets vinden met het opgegeven Fietsnummer",
    checksku_message_nocompatibilityinfo: "Geen informatie over compatibiliteit",
    checksku_message_noproductfound: "Kan geen onderdeel vinden met de opgegeven SKU/Barcode/Onderdeelnummer",
    checksku_message_notcompatible: "Niet compatibel",
    checksku_warning_unabletoperformcheck: "Kan de compatibiliteitscontrole niet uitvoeren. Controleer de compatibiliteit handmatig.",
    compatible: "Compatibel",
    compatible_check_notes: "Compatibel (zie notities)",
    compatiblelist_header: "Compatibele producten",
    compatiblelist_nobikeselected: "Geen fiets geselecteerd. Klik hier om uw fiets toe te voegen voor het opzoeken van compatibele onderdelen",
    compatiblelist_noresults: "Geen compatibele producten gevonden",
    compatiblelist_pageone: "Alle producten die compatibel zijn met uw fiets vindt u <a>hier</a>.",
    compatiblelist_unavailable: "Voor het geselecteerde fietsmerk zijn er in deze categorie binnenkort compatibele producten beschikbaar.",
    confirm: "Bevestigen",
    copy: "Kopiëren",
    edit: "Bewerken",
    error_add_component: "Dat onderdeel bleef niet zitten. Probeer het nu eens wat harder op de fiets te gooien.",
    error_add_custom_bike: "Helaas... We kunnen uw aangepaste fiets niet maken. Vernieuw de pagina en probeer het nog een keer.",
    error_find_products: "Hm... het lijkt erop dat onze wielen vastlopen. Vernieuw de pagina en probeer het opnieuw.",
    error_find_products_no_results: "Hm... Dat product kunnen we niet vinden. Probeer een ander modelnummer of een andere spelling.",
    error_generic: "Er is een fout opgetreden bij het eindpunt {{endpoint_location}}",
    error_get_bike_bom: "Dat valt tegen! We kunnen uw fietsmontage niet ophalen. Vernieuw de pagina en probeer het opnieuw.",
    error_invalid_email: "Dat ziet er niet uit als een geldig e-mailadres. Kunt u iets anders proberen?",
    error_remove_component: "Dit onderdeel wil blijkbaar graag op de fiets blijven zitten. Vernieuw de pagina en probeer het opnieuw.",
    error_revert_component: "Dit onderdeel wil blijkbaar graag op de fiets blijven zitten. Vernieuw de pagina en probeer het opnieuw.",
    error_save_custom_bike: "Sorry, we hebben uw fiets niet opgeslagen. Probeer nu eens wat harder te trappen.",
    error_update_custom_bike: "O, dat werkte niet. Sorry! Vernieuw de pagina en probeer het opnieuw.",
    error_update_custom_bike_name: "Het is niet gelukt om de naam van uw fiets te veranderen. Misschien vindt uw fiets het geen mooie naam. Vernieuw de pagina en probeer het opnieuw",
    not_compatible: "Niet compatibel",
    onboarding_explore: "Ga verkennen",
    onboarding_green_spanner: "Zoek naar de groene moersleutel",
    onboarding_green_spanner_description: "Als een component een groene moersleutel heeft, kan deze volledig worden verwisseld of uit de constructie worden verwijderd.",
    onboarding_linked_components: "Begrijp gekoppelde componenten",
    onboarding_linked_components_description: "Sommige onderdelen (bijvoorbeeld crankstel + trapas) zijn met elkaar verbonden. Als u er één wilt verwisselen, moet u mogelijk beide verwijderen. Anders markeert het systeem deze mogelijk als incompatibel.",
    onboarding_next: "Volgende",
    onboarding_open_bike_build: "Open je fietsbuild",
    onboarding_open_bike_build_description: "Wanneer u uw fietsopbouw bekijkt, vouwt u de componentgroepen uit om de componenten te bekijken die op uw fiets van toepassing zijn.",
    onboarding_preview: "Bekijk een voorbeeld of sla wijzigingen op",
    onboarding_preview_description: "U kunt componenten verwisselen/verwijderen en wijzigingen bevestigen om upgrades te verkennen. Deze kunnen op elk moment ongedaan worden gemaakt voordat ze worden opgeslagen. Nadat u de wijzigingen heeft opgeslagen, kunnen ze niet meer worden teruggedraaid, maar alleen worden verwijderd of opnieuw vervangen.",
    onboarding_replacement: "Kies de juiste vervanging",
    onboarding_replacement_description: "Gebruik de streepjescode of het onderdeelnummer van de fabrikant (te vinden op de verpakking of uw factuur) om te zoeken. U kunt ook het modelnummer gebruiken, maar controleer dit nogmaals: sommige nummers gelden voor meerdere versies.",
    onboarding_settings: "Bekijk de instellingenpagina",
    onboarding_settings_description: "Op uw instellingenpagina kunt u de naam van uw fiets wijzigen, uw e-mailadres bijwerken en waar u zowel uw Bike Matrix ID als uw Share ID kunt vinden.",
    onboarding_title: "Virtuele workshop – Beknopte handleiding",
    onboarding_vw_description: "Pas het digitale bestand van uw fiets aan zodat deze overeenkomt met de upgrades die u heeft uitgevoerd, zodat de compatibiliteitscontroles zo nauwkeurig mogelijk zijn.",
    productcheck_nobikeselected_label: "Compatibiliteit controleren",
    productcheck_nobikeselected_message: "Voeg uw fiets toe om te controleren of dit onderdeel erop past",
    productcheck_questionmark: "?",
    save: "Opslaan",
    share: "Delen",
    variantselector_help_text: "Dit zijn de productvarianten die compatibel zijn met uw fiets.",
    variantselector_help_text_clickable: "Klik op een variant om naar die variant over te schakelen.",
    variantselector_help_text_showall: "Geeft de compatibiliteit van elke variant van het product weer.",
    variantselector_no_compatible: "Geen compatibele varianten",
    variantselector_no_compatible_information: "Geen compatibiliteitsinformatie",
    variantselector_title: "Compatibele varianten",
    virtualworkshop_add_bike_text: "Uw Bike Matrix-ID vindt u op de pagina Instellingen van de Virtuele werkplaats.",
    virtualworkshop_add_by_error: "Geen geldige Bike Matrix-ID",
    virtualworkshop_add_by_id: "Voer uw Bike Matrix-ID in",
    virtualworkshop_are_you_sure: "Weet je het zeker?",
    virtualworkshop_bm_id_text: "U kunt uw Bike Matrix-ID gebruiken (die vindt u in de Instellingen van de Virtuele werkplaats) of een Deel-ID die u van iemand anders heeft gekregen.",
    virtualworkshop_bom_title: "Stuklijst",
    virtualworkshop_build_text: "Montagedetails",
    virtualworkshop_cockpit: "Cockpit",
    virtualworkshop_copy: "Kopiëren",
    virtualworkshop_current: "Huidig",
    virtualworkshop_disclaimer: "Door gegevens voor een fiets aan te passen, aanvaardt de gebruiker de volledige verantwoordelijkheid om de juiste onderdelen te selecteren, in de wetenschap dat wijzigingen gevolgen hebben voor de compatibiliteit.",
    virtualworkshop_do_not_pass: "Virtuele Workshop is nog niet voor alle fietsmerken beschikbaar.",
    virtualworkshop_drivetrain: "Aandrijving",
    virtualworkshop_e_drive: "Elektrische aandrijving",
    virtualworkshop_enter_button: "Virtuele werkplaats openen",
    virtualworkshop_frame_fork: "Frame en voorvork",
    virtualworkshop_intro_text: "Pas uw fietsmontage aan met nieuwe onderdelen en sla uw fiets op door een e-mailadres in te voeren. Bekijk gedeelde fietsmontages en vindt uw fiets-ID's",
    virtualworkshop_other_parts: "Andere onderdelen",
    virtualworkshop_remove_btn: "Onderdeel verwijderen",
    virtualworkshop_remove_subtitle: "Als u een onderdeel verwijdert, wordt het uit uw fietsmontage gehaald. Dit kan gevolgen hebben voor de compatibiliteit van andere onderdelen.",
    virtualworkshop_remove_title: "Weet u het zeker?",
    virtualworkshop_removed: "Verwijderd",
    virtualworkshop_revert_btn: "Terugdraaien",
    virtualworkshop_save_btn: "Fiets opslaan",
    virtualworkshop_save_text: "We hebben uw e-mailadres nodig om uw aangepaste fiets op te slaan.",
    virtualworkshop_save_title: "Voer uw e-mailadres in",
    virtualworkshop_saved: "Uw {{label}} is opgeslagen!",
    virtualworkshop_search_text: "Voer barcode in of zoek op merk, model, onderdeelnummer...",
    virtualworkshop_settings_bike_name: "Naam fiets",
    virtualworkshop_settings_email: "E-mailadres",
    virtualworkshop_settings_id: "Bike Matrix-ID",
    virtualworkshop_settings_share_id: "Deel-ID",
    virtualworkshop_shared_icon: "Met u gedeeld",
    virtualworkshop_swap_btn: "Onderdeel vervangen",
    virtualworkshop_title: "Virtuele werkplaats",
    virtualworkshop_unsaved_changes: "Niet-opgeslagen wijzigingen bekijken",
    virtualworkshop_wheels_tyres: "Wielen en banden"
  }
}, bm = {
  translation: {
    bikematrix_poweredby: "Une solution Bike Matrix",
    bikeselector_addbike_brand_desc: "Votre marque de vélo se trouve généralement dans les zones mises en évidence ci-dessous.",
    bikeselector_addbike_brand_label: "Marque",
    bikeselector_addbike_brand_select: "Sélectionnez la marque de votre vélo",
    bikeselector_addbike_find_btn: "Trouver mon vélo",
    bikeselector_addbike_framespec_desc: "Votre version de cadre de vélo se trouve généralement dans les zones mises en évidence ci-dessous.",
    bikeselector_addbike_framespec_label: "Version du cadre",
    bikeselector_addbike_framespec_select: "Sélectionnez votre version de cadre",
    bikeselector_addbike_model_desc: "Votre modèle de vélo se trouve généralement dans les zones mises en évidence ci-dessous.",
    bikeselector_addbike_model_label: "Modèle",
    bikeselector_addbike_model_select: "Sélectionnez votre modèle de vélo",
    bikeselector_addbike_title: "Ajouter un vélo",
    bikeselector_browse_back_btn: "Retourner à mes vélos",
    bikeselector_browse_products_label: "Voir les produits compatibles",
    bikeselector_browse_shop_btn: "Voir les produits",
    bikeselector_browse_title: "Commencer vos achats",
    bikeselector_confirm_brandmodelframespec_label: "Marque, modèle, version du cadre",
    bikeselector_confirm_confirm_btn: "Oui, c’est mon vélo !",
    bikeselector_confirm_framesize_label: "Taille du cadre",
    bikeselector_confirm_notyourride_msg: "Ce n’est pas votre vélo ? Sélectionnez un champ ci-dessus pour effectuer une modification.",
    bikeselector_confirm_title: "Confirmer votre vélo",
    bikeselector_confirm_yearbikespec_label: "Année, version du vélo",
    bikeselector_home_add_a_bike: "Ajoutez un vélo ci-dessous pour voir les pièces compatibles.",
    bikeselector_home_add_btn: "Ajouter un vélo",
    bikeselector_home_browse_btn: "Parcourir les compatibilités",
    bikeselector_home_close_btn: "Fermer",
    bikeselector_home_empty: "L’espace Mes vélos est vide !",
    bikeselector_home_footer_message: "Les fabricants de vélo peuvent changer les caractéristiques des vélos sans préavis. Les différences par rapport aux spécifications d’origine peuvent avoir un impact sur les résultats de compatibilité.",
    bikeselector_home_title: "Mes vélos",
    bikeselector_or: "Ou",
    bikeselector_price_from: "Depuis",
    bikeselector_search_bikespec_label: "Version du vélo",
    bikeselector_search_bikespec_select: "Sélectionnez la version du vélo",
    bikeselector_search_bikespec_select_all: "Tous",
    bikeselector_search_confirm_btn: "Confirmer la sélection",
    bikeselector_search_no_bikes_found: "Nous n’avons pas trouvé de vélo",
    bikeselector_search_number_bikes_found: "{{number_found}} vélos trouvés",
    bikeselector_search_one_bike_found: "1 vélo trouvé",
    bikeselector_search_searching: "Recherche...",
    bikeselector_search_title: "Recherche du vélo",
    bikeselector_search_year_label: "Année",
    bikeselector_size_confirm_btn: "Confirmer la taille",
    bikeselector_size_framesize_desc: "La taille de votre cadre se trouve généralement dans les zones mises en évidence ci-dessous.",
    bikeselector_size_framesize_label: "Taille du cadre",
    bikeselector_size_framesize_one_size: "Taille unique",
    bikeselector_size_framesize_select: "Sélectionnez votre taille de cadre",
    bikeselector_size_title: "Sélectionnez votre taille",
    bikeselectorbanner_mobiletitle: "Vérifier la compatibilité",
    bikeselectorbanner_title: "Sélectionnez votre vélo pour vérifier la compatibilité",
    cancel: "Annuler",
    category_bike: "Vélo",
    category_bottombracket: "Boîtier de pédalier",
    category_bottombracketpart: "Pièce de boîtier de pédalier",
    category_brakeadapter: "Adaptateur pour frein",
    category_brakeadapterfront: "Adaptateur De Frein Avant",
    category_brakeadapterpart: "Pièce d’adaptateur pour frein",
    category_brakeadapterrear: "Adaptateur de frein arrière",
    category_brakecaliper: "Étrier de frein",
    category_brakecaliperfront: "Etrier De Frein Avant",
    category_brakecaliperpart: "Pièce d’étrier de frein",
    category_brakecaliperrear: "Étrier De Frein Arrière",
    category_brakecaliperservicekit: "Kit d’entretien d’étrier de frein",
    category_brakelever: "Levier de frein",
    category_brakeleverlh: "Levier De Frein Main Gauche",
    category_brakeleverpart: "Pièce de levier de frein",
    category_brakeleverrh: "Levier De Frein Main Droite",
    category_brakeleverservicekit: "Kit d’entretien de levier de frein",
    category_brakepads: "Patins/plaquettes de frein",
    category_brakepadsfront: "Plaquettes De Frein Avant",
    category_brakepadsrear: "Plaquettes De Frein Arrière",
    category_brakerotor: "Disque de frein",
    category_brakerotorfront: "Disque De Frein Avant",
    category_brakerotorpart: "Pièce de disque de frein",
    category_brakerotorrear: "Disque De Frein Arrière",
    category_brakes: "Freins",
    category_brakesystem: "Système de freinage",
    category_brakesystempart: "Pièce de système de freinage",
    category_cassette: "Cassette",
    category_cassettepart: "Pièce de cassette",
    category_chain: "Chaîne",
    category_chainguide: "Guide-chaîne",
    category_chainguidepart: "Pièce de guide-chaîne",
    category_chainjoiner: "Attache rapide",
    category_chainring: "Plateau",
    category_chainringbolt: "Écrou de plateau",
    category_chainringspider: "Étoile de Plateau",
    category_cockpit: "Poste de pilotage",
    category_crankpart: "Pièce de pédalier",
    category_crankset: "Pédalier",
    category_drivetrain: "Transmission",
    category_dropperlever: "Levier de tige de selle télescopique",
    category_dropperleverpart: "Pièce de levier de tige de selle télescopique",
    category_ebikebattery: "Batterie ebike",
    category_ebikebatterypart: "Pièce batterie ebike",
    category_ebikecharger: "Chargeur ebike",
    category_ebikechargerpart: "Pièce de chargeur ebike",
    category_ebikecontrolunit: "Commande de contrôle ebike",
    category_ebikecontrolunitpart: "Pièce de commande de contrôle ebike",
    category_ebikeinterconnect: "Câbles de connexion ebike",
    category_ebikeinterconnectpart: "Pièce de câbles connexion ebike",
    category_ebikemotorsystem: "Système moteur ebike",
    category_ebikemotorsystempart: "Pièce système moteur ebike",
    category_fork: "Fourche",
    category_forkpart: "Pièce de fourche",
    category_forkservicekit: "Kit d’entretien de fourche",
    category_frame: "Cadre",
    category_framefork: "Cadre et Fourche",
    category_framepart: "Pièce de cadre",
    category_frontaxle: "Axe avant",
    category_frontaxlepart: "Pièce d’axe avant",
    category_frontderailleur: "Dérailleur avant",
    category_frontderailleurpart: "Pièce de dérailleur avant",
    category_fronthub: "Moyeu avant",
    category_fronthubpart: "Pièce de moyeu avant",
    category_frontwheel: "Roue avant",
    category_grips: "Poignées",
    category_gripspart: "Pièce de poignées",
    category_handlebar: "Guidon",
    category_headset: "Jeu de direction",
    category_headsetpart: "Pièce de jeu de direction",
    category_largestchainring: "Plus Grand Plateau",
    category_nipple: "Écrou de rayon",
    category_pedals: "Pédales",
    category_pedalspart: "Pièce de pédales",
    category_rearaxle: "Axe arrière",
    category_rearaxlepart: "Pièce d’axe arrière",
    category_rearderailleur: "Dérailleur arrière",
    category_rearderailleurpart: "Pièce de dérailleur arrière",
    category_rearhub: "Moyeu arrière",
    category_rearhubpart: "Pièce de moyeu arrière",
    category_rearshock: "Amortisseur arrière",
    category_rearshockpart: "Pièce d’amortisseur arrière",
    category_rearshockservicekit: "Kit d’entretien pour amortisseur arrière",
    category_rearwheel: "Roue arrière",
    category_rim: "Jante",
    category_saddle: "Selle",
    category_seatpost: "Tige de selle",
    category_seatpostclamp: "Collier de serrage pour tige de selle",
    category_seatpostclamppart: "Pièce de collier de serrage pour tige de selle",
    category_seatpostpart: "Pièce de tige de selle",
    category_seatpostservicekit: "Kit d’entretien de tige de selle",
    category_secondlargestchainring: "Deuxième Plus Grand Plateau",
    category_shiftadapter: "Adaptateur de commande de vitesse",
    category_shiftadapterpart: "Pièce d’adaptateur de commande de vitesse",
    category_shiftbrakecombo: "Combo levier manette",
    category_shiftbrakecombopart: "Pièce de combo levier manette",
    category_shifter: "Commande de vitesse",
    category_shifteradapterlh: "Adaptateur de levier de vitesse, main gauche",
    category_shifteradapterrh: "Adaptateur de levier de vitesse, main droite",
    category_shifterbrakecombolh: "Manette De Vitesse Et Frein Combo Main Gauche",
    category_shifterbrakecomborh: "Combo frein de levier de vitesse, main droite",
    category_shifterlh: "Manette De Vitesse Gauche",
    category_shifterpart: "Pièce de commande de vitesse",
    category_shifterrh: "Manette De Vitesse Main Droite",
    category_spoke: "Rayon",
    category_stem: "Potence",
    category_stempart: "Pièce de potence",
    category_thirdlargestchainring: "Troisième Plus Grand Plateau",
    category_tube: "Chambre à air",
    category_tyre: "Pneu",
    category_tyrefront: "Pneu Avant",
    category_tyrerear: "Pneu arrière",
    category_wheelset: "Paire de roues",
    category_wheelstyres: "Roues et pneus",
    checksku_message_nobikefound: "Nous n’avons pas pu trouver de vélo avec le Code Vélo fourni",
    checksku_message_nocompatibilityinfo: "Pas d’information concernant la compatibilité",
    checksku_message_noproductfound: "Nous n’avons pas pu trouver de composant avec le code produit/code-barre/numéro de composant fourni",
    checksku_message_notcompatible: "Non compatible",
    checksku_warning_unabletoperformcheck: "Impossible de vérifier la compatibilité. Veuillez vérifier la compatibilité manuellement.",
    compatible: "Compatible",
    compatible_check_notes: "Compatible - Consultez les notes",
    compatiblelist_header: "Produits compatibles",
    compatiblelist_nobikeselected: "Aucun vélo sélectionné. Cliquez ici pour ajouter votre vélo et voir les composants compatibles",
    compatiblelist_noresults: "Nous n’avons pas trouvé de produits compatibles",
    compatiblelist_pageone: "Tous les produits compatibles avec votre vélo peuvent être consultés <a>ici</a>.",
    compatiblelist_unavailable: "Nous proposerons bientôt des pièces compatibles de cette catégorie de produits pour la marque de vélo que vous avez sélectionnée.",
    confirm: "Confirmer",
    copy: "Copier",
    edit: "Modifier",
    error_add_component: "Cette pièce n’a pas pu être ajoutée. Essayez à nouveau, cette fois-ci sera la bonne.",
    error_add_custom_bike: "Oups... Nous n’avons pas pu créer votre vélo personnalisé. Actualisez la page et réessayez.",
    error_find_products: "Hum... Nous avons du mal à monter la côte... Actualisez la page et réessayez.",
    error_find_products_no_results: "Hum... Nous ne trouvons pas ce produit. Essayez un autre numéro de modèle ou épelez différemment.",
    error_generic: "Une erreur s’est produite dans le sprint final - {{endpoint_location}}",
    error_get_bike_bom: "C’est embarrassant ! Votre configuration de vélo n’a pas pu être récupérée. Actualisez la page et réessayez.",
    error_invalid_email: "Cet e-mail n’a pas l’air valide. Avez-vous une autre option ?",
    error_remove_component: "Cette pièce veut vraiment rester sur votre vélo. Actualisez la page et réessayez.",
    error_revert_component: "Cette pièce veut vraiment rester sur votre vélo. Actualisez la page et réessayez.",
    error_save_custom_bike: "Désolés, votre vélo n’a pas été enregistré. Essayez à nouveau, en pédalant plus vite cette fois.",
    error_update_custom_bike: "Oh, cela n’a pas marché. Désolés ! Actualisez la page et réessayez.",
    error_update_custom_bike_name: "Nous n’avons pas pu changer le nom de votre vélo. Peut-être qu’il en préfère un autre. Actualisez la page et réessayez",
    not_compatible: "Non compatible",
    onboarding_explore: "Allez explorer",
    onboarding_green_spanner: "Recherchez l'icône d'outil verte",
    onboarding_green_spanner_description: "Si un composant a un outil vert, il peut être échangé ou supprimé complètement de la construction",
    onboarding_linked_components: "Comprendre les composants liés",
    onboarding_linked_components_description: "Certaines pièces (ex : pédalier + pédalier) sont liées. Pour en échanger un, vous devrez peut-être supprimer les deux, sinon le système pourrait le signaler comme incompatible.",
    onboarding_next: "Suivante",
    onboarding_open_bike_build: "Ouvrez votre construction de vélo",
    onboarding_open_bike_build_description: "Lorsque vous visualisez la construction de votre vélo, développez les groupes de composants pour afficher les composants qui s'appliquent à votre vélo.",
    onboarding_preview: "Prévisualiser ou enregistrer les modifications",
    onboarding_preview_description: "Vous pouvez échanger/supprimer des composants et confirmer les modifications pour explorer les mises à niveau. Ceux-ci peuvent être annulés à tout moment avant d’enregistrer. Une fois enregistrées, les modifications ne peuvent pas être annulées : elles sont uniquement supprimées ou remplacées à nouveau.",
    onboarding_replacement: "Choisissez le bon remplacement",
    onboarding_replacement_description: "Utilisez le code-barres ou le numéro de pièce du fabricant (trouvé sur l’emballage ou sur votre facture) pour effectuer une recherche. Vous pouvez également utiliser le numéro de modèle, mais vérifiez bien : certains numéros s'appliquent à plusieurs versions.",
    onboarding_settings: "Afficher la page des paramètres",
    onboarding_settings_description: "Votre page de paramètres est l’endroit où vous pouvez modifier le nom de votre vélo, mettre à jour votre adresse e-mail, et où vous trouverez votre identifiant Bike Matrix ainsi que votre identifiant de partage.",
    onboarding_title: "Atelier virtuel – Guide rapide",
    onboarding_vw_description: "Mettez à jour les informations numériques de votre vélo pour refléter les changements apportés et garantir des vérifications de compatibilité aussi précises que possible.",
    productcheck_nobikeselected_label: "Vérifier la compatibilité",
    productcheck_nobikeselected_message: "Ajoutez votre vélo pour vérifier si ce composant est compatible",
    productcheck_questionmark: "?",
    save: "Enregistrer",
    share: "Partager",
    variantselector_help_text: "Voici les variantes du produit qui sont compatibles avec votre vélo.",
    variantselector_help_text_clickable: "Cliquez sur une variante pour passer à cette variante.",
    variantselector_help_text_showall: "Affiche la compatibilité de chaque variante du produit.",
    variantselector_no_compatible: "Aucune variante compatible",
    variantselector_no_compatible_information: "Aucune information de compatibilité",
    variantselector_title: "Variantes compatibles",
    virtualworkshop_add_bike_text: "Votre identificateur Bike Matrix peut être trouvé dans la page de configuration de votre Atelier virtuel",
    virtualworkshop_add_by_error: "Ce n'est pas un identifiant Bike Matrix valide",
    virtualworkshop_add_by_id: "Entrez votre identifiant Bike Matrix",
    virtualworkshop_are_you_sure: "Es-tu sûr?",
    virtualworkshop_bm_id_text: "Vous pouvez utiliser l’identificateur Bike Matrix qui se trouve dans la page de configuration de votre Atelier virtuel, ou un identificateur de partage qui vous a été donné par quelqu’un d’autre.",
    virtualworkshop_bom_title: "Liste des pièces",
    virtualworkshop_build_text: "Détails de configuration",
    virtualworkshop_cockpit: "Poste de pilotage",
    virtualworkshop_copy: "Copie",
    virtualworkshop_current: "Actuel",
    virtualworkshop_disclaimer: "Lors de l’actualisation de la configuration de son vélo, la personne utilisatrice doit s’assurer que les composants sont corrects, sachant que les modifications affecteront les résultats de compatibilité.",
    virtualworkshop_do_not_pass: "Der virtuelle Workshop ist noch nicht für alle Fahrradmarken verfügbar.",
    virtualworkshop_drivetrain: "Groupe de transmission",
    virtualworkshop_e_drive: "Transmission électrique",
    virtualworkshop_enter_button: "Entrer dans l’Atelier virtuel",
    virtualworkshop_frame_fork: "Cadre et fourche",
    virtualworkshop_intro_text: "Actualisez votre configuration de vélo avec de nouveaux composants et enregistrez votre vélo en fournissant une adresse e-mail. Voir les configurations de vélo partagées et accéder aux identificateurs de vos vélos",
    virtualworkshop_other_parts: "Autres pièces",
    virtualworkshop_remove_btn: "Retirer le composant",
    virtualworkshop_remove_subtitle: "Retirer un composant le supprimera de la configuration de votre vélo. Cela peut affecter la compatibilité avec d’autres pièces.",
    virtualworkshop_remove_title: "Êtes-vous sûr·e ?",
    virtualworkshop_removed: "Supprimé",
    virtualworkshop_revert_btn: "Rétablir",
    virtualworkshop_save_btn: "Sauvegarder le vélo",
    virtualworkshop_save_text: "Afin de sauvegarder votre vélo personnalisé, nous devons l’enregistrer avec votre adresse e-mail",
    virtualworkshop_save_title: "Saisir votre e-mail",
    virtualworkshop_saved: "Votre {{label}} a été enregistré !",
    virtualworkshop_search_text: "Saisir un code-barre ou chercher par marque, modèle, numéro de pièce...",
    virtualworkshop_settings_bike_name: "Nom du vélo",
    virtualworkshop_settings_email: "Adresse e-mail",
    virtualworkshop_settings_id: "Identificateur Bike Matrix",
    virtualworkshop_settings_share_id: "Identificateur de partage",
    virtualworkshop_shared_icon: "Partagé avec vous",
    virtualworkshop_swap_btn: "Échanger le composant",
    virtualworkshop_title: "Atelier virtuel",
    virtualworkshop_unsaved_changes: "Voir les changements non sauvegardés",
    virtualworkshop_wheels_tyres: "Roues et pneus"
  }
}, vm = {
  translation: {
    bikematrix_poweredby: "Con tecnología de Bike Matrix",
    bikeselector_addbike_brand_desc: "La marca de la bicicleta suele indicarse en los lugares resaltados a continuación.",
    bikeselector_addbike_brand_label: "Marca",
    bikeselector_addbike_brand_select: "Selecciona la marca de la bicicleta",
    bikeselector_addbike_find_btn: "Buscar mi bicicleta",
    bikeselector_addbike_framespec_desc: "La versión del cuadro de la bicicleta suele indicarse en los lugares resaltados a continuación.",
    bikeselector_addbike_framespec_label: "Versión del cuadro",
    bikeselector_addbike_framespec_select: "Selecciona la versión del cuadro de la bicicleta",
    bikeselector_addbike_model_desc: "El modelo de la bicicleta suele indicarse en los lugares resaltados a continuación.",
    bikeselector_addbike_model_label: "Modelo",
    bikeselector_addbike_model_select: "Selecciona el modelo de la bicicleta",
    bikeselector_addbike_title: "Añadir una bicicleta",
    bikeselector_browse_back_btn: "Volver a mi rincón ciclista",
    bikeselector_browse_products_label: "Comprar productos compatibles",
    bikeselector_browse_shop_btn: "Comprar productos",
    bikeselector_browse_title: "¡A comprar!",
    bikeselector_confirm_brandmodelframespec_label: "Marca, modelo y versión del cuadro",
    bikeselector_confirm_confirm_btn: "¡Ahí está mi bici!",
    bikeselector_confirm_framesize_label: "Talla del cuadro",
    bikeselector_confirm_notyourride_msg: "¿No es la que buscas? Selecciona uno de los campos de arriba para modificarlo.",
    bikeselector_confirm_title: "Confirmación de la bicicleta",
    bikeselector_confirm_yearbikespec_label: "Año y versión de la bicicleta",
    bikeselector_home_add_a_bike: "Agregue una bicicleta a continuación para ver las piezas compatibles.",
    bikeselector_home_add_btn: "Añadir una bicicleta",
    bikeselector_home_browse_btn: "Ver compatibilidad",
    bikeselector_home_close_btn: "Cerrar",
    bikeselector_home_empty: "¡Tu rincón ciclista está vacío!",
    bikeselector_home_footer_message: "Los fabricantes pueden modificar la versión de la bicicleta sin previo aviso. Las diferencias con la versión de las unidades en existencias pueden afectar a la compatibilidad.",
    bikeselector_home_title: "Mi rincón ciclista",
    bikeselector_or: "O",
    bikeselector_price_from: "De",
    bikeselector_search_bikespec_label: "Versión de la bicicleta",
    bikeselector_search_bikespec_select: "Selecciona la versión",
    bikeselector_search_bikespec_select_all: "Todos",
    bikeselector_search_confirm_btn: "Confirmar selección",
    bikeselector_search_no_bikes_found: "No se han encontrado bicicletas",
    bikeselector_search_number_bikes_found: "Se han encontrado {{number_found}} bicicletas",
    bikeselector_search_one_bike_found: "Se ha encontrado 1 bicicleta",
    bikeselector_search_searching: "Buscando...",
    bikeselector_search_title: "Búsqueda de bicicletas",
    bikeselector_search_year_label: "Año",
    bikeselector_size_confirm_btn: "Confirmar talla",
    bikeselector_size_framesize_desc: "La talla del cuadro de la bicicleta suele indicarse en los lugares resaltados a continuación.",
    bikeselector_size_framesize_label: "Talla del cuadro",
    bikeselector_size_framesize_one_size: "Talla única",
    bikeselector_size_framesize_select: "Selecciona la talla del cuadro",
    bikeselector_size_title: "Selecciona la talla",
    bikeselectorbanner_mobiletitle: "Comprobar compatibilidad",
    bikeselectorbanner_title: "Seleccione su bicicleta para comprobar la compatibilidad",
    cancel: "Cancelar",
    category_bike: "Bicicleta",
    category_bottombracket: "Pedalier",
    category_bottombracketpart: "Componente del pedalier",
    category_brakeadapter: "Adaptador de freno",
    category_brakeadapterfront: "Adaptador de freno delantero",
    category_brakeadapterpart: "Componente del adaptador de freno",
    category_brakeadapterrear: "Adaptador de freno trasero",
    category_brakecaliper: "Pinza de freno",
    category_brakecaliperfront: "Pinza de freno delantera",
    category_brakecaliperpart: "Componente de la pinza de freno",
    category_brakecaliperrear: "Pinza de freno trasera",
    category_brakecaliperservicekit: "Kit de mantenimiento de las pinzas de freno",
    category_brakelever: "Maneta de freno",
    category_brakeleverlh: "Palanca de freno izquierda",
    category_brakeleverpart: "Componente de la maneta de freno",
    category_brakeleverrh: "Palanca de freno derecha",
    category_brakeleverservicekit: "Kit de mantenimiento de la maneta de freno",
    category_brakepads: "Pastillas de freno",
    category_brakepadsfront: "Pastillas de freno delanteras",
    category_brakepadsrear: "Pastillas de freno traseras",
    category_brakerotor: "Disco de freno",
    category_brakerotorfront: "Rotor de freno delantero",
    category_brakerotorpart: "Componente del disco de freno",
    category_brakerotorrear: "Rotor de freno trasero",
    category_brakes: "Frenos",
    category_brakesystem: "Sistema de frenos",
    category_brakesystempart: "Componente del sistema de frenos",
    category_cassette: "Cassette",
    category_cassettepart: "Componente del cassette",
    category_chain: "Cadena",
    category_chainguide: "Guiacadenas",
    category_chainguidepart: "Componente del guiacadenas",
    category_chainjoiner: "Enlace de cadena",
    category_chainring: "Plato",
    category_chainringbolt: "Tornillo para plato",
    category_chainringspider: "Araña de plato",
    category_cockpit: "Carlinga",
    category_crankpart: "Componente de la biela",
    category_crankset: "Juego de bielas",
    category_drivetrain: "Transmisión",
    category_dropperlever: "Palanca de tija telescópica",
    category_dropperleverpart: "Componente de la palanca de tija telescópica",
    category_ebikebattery: "Batería para bicicleta eléctrica",
    category_ebikebatterypart: "Componente de la batería para bicicleta eléctrica",
    category_ebikecharger: "Cargador para bicicleta eléctrica",
    category_ebikechargerpart: "Componente del cargador para bicicleta eléctrica",
    category_ebikecontrolunit: "Unidad de control para bicicleta eléctrica",
    category_ebikecontrolunitpart: "Componente de la unidad de control para bicicleta eléctrica",
    category_ebikeinterconnect: "Sistema de conexión para bicicleta eléctrica",
    category_ebikeinterconnectpart: "Componente del sistema de conexión para bicicleta eléctrica",
    category_ebikemotorsystem: "Motor para bicicleta eléctrica",
    category_ebikemotorsystempart: "Componente del motor para bicicleta eléctrica",
    category_fork: "Horquilla",
    category_forkpart: "Componente de la horquilla",
    category_forkservicekit: "Kit de mantenimiento de la horquilla",
    category_frame: "Cuadro",
    category_framefork: "Cuadro y horquilla",
    category_framepart: "Componente del cuadro",
    category_frontaxle: "Eje delantero",
    category_frontaxlepart: "Componente del eje delantero",
    category_frontderailleur: "Desviador delantero",
    category_frontderailleurpart: "Componente del desviador delantero",
    category_fronthub: "Buje delantero",
    category_fronthubpart: "Componente del buje delantero",
    category_frontwheel: "Rueda delantera",
    category_grips: "Puños",
    category_gripspart: "Componente de los puños",
    category_handlebar: "Manillar",
    category_headset: "Dirección",
    category_headsetpart: "Componente de la dirección",
    category_largestchainring: "Plato más grande",
    category_nipple: "Válvula",
    category_pedals: "Pedales",
    category_pedalspart: "Componente de los pedales",
    category_rearaxle: "Eje trasero",
    category_rearaxlepart: "Componente del eje trasero",
    category_rearderailleur: "Desviador trasero",
    category_rearderailleurpart: "Componente del desviador trasero",
    category_rearhub: "Buje trasero",
    category_rearhubpart: "Componente del buje trasero",
    category_rearshock: "Amortiguador trasero",
    category_rearshockpart: "Componente del amortiguador trasero",
    category_rearshockservicekit: "Kit de mantenimiento del amortiguador trasero",
    category_rearwheel: "Rueda trasera",
    category_rim: "Llanta",
    category_saddle: "Sillín",
    category_seatpost: "Tija del sillín",
    category_seatpostclamp: "Abrazadera de la tija del sillín",
    category_seatpostclamppart: "Componente de la abrazadera de la tija del sillín",
    category_seatpostpart: "Componente de la tija del sillín",
    category_seatpostservicekit: "Kit de mantenimiento de la tija del sillín",
    category_secondlargestchainring: "Segundo plato más grande",
    category_shiftadapter: "Adaptador del cambio",
    category_shiftadapterpart: "Componente del adaptador del cambio",
    category_shiftbrakecombo: "Maneta de cambio/freno",
    category_shiftbrakecombopart: "Componente de la maneta de cambio/freno",
    category_shifter: "Mando de cambio",
    category_shifteradapterlh: "Adaptador de palanca de cambios mano izquierda",
    category_shifteradapterrh: "Adaptador de cambio de mano derecha",
    category_shifterbrakecombolh: "Combinación de freno de palanca de cambios mano izquierda",
    category_shifterbrakecomborh: "Combo de freno de palanca de cambios mano derecha",
    category_shifterlh: "Palanca de cambios mano izquierda",
    category_shifterpart: "Componente del mando de cambio",
    category_shifterrh: "Palanca de cambios mano derecha",
    category_spoke: "Radio",
    category_stem: "Potencia",
    category_stempart: "Componente de la potencia",
    category_thirdlargestchainring: "Tercero plato más grande",
    category_tube: "Cámara",
    category_tyre: "Neumático",
    category_tyrefront: "Neumático delantero",
    category_tyrerear: "Neumático trasero",
    category_wheelset: "Juego de ruedas",
    category_wheelstyres: "Ruedas y neumáticos",
    checksku_message_nobikefound: "No se ha encontrado ninguna bicicleta con la clave indicada",
    checksku_message_nocompatibilityinfo: "No hay información sobre la compatibilidad",
    checksku_message_noproductfound: "No se ha encontrado ningún componente con la referencia, el código de barras o el número de pieza indicado",
    checksku_message_notcompatible: "No compatible",
    checksku_warning_unabletoperformcheck: "No se puede comprobar la compatibilidad. Comprueba la compatibilidad de forma manual.",
    compatible: "Compatible",
    compatible_check_notes: "Compatible - Consulta las notas",
    compatiblelist_header: "Productos compatibles",
    compatiblelist_nobikeselected: "No se ha seleccionado ninguna bicicleta. Haz clic aquí para añadir tu bicicleta y buscar componentes compatibles",
    compatiblelist_noresults: "No se han encontrado productos compatibles",
    compatiblelist_pageone: "Puedes consultar todos los productos compatibles con tu bicicleta <a>aquí</a>.",
    compatiblelist_unavailable: "Muy pronto podrás consultar la compatibilidad de esta categoría de productos con la marca de bicicleta que has seleccionado.",
    confirm: "Confirmar",
    copy: "Copiar",
    edit: "Editar",
    error_add_component: "El componente no ha cuajado. Inténtalo de nuevo y presta un poco más de atención esta vez.",
    error_add_custom_bike: "Vaya... No hemos podido crear tu bicicleta personalizada. Actualiza la página e inténtalo de nuevo.",
    error_find_products: "Vaya… Parece que tenemos problemas. Actualiza la página e inténtalo de nuevo.",
    error_find_products_no_results: "Vaya... No encontramos el producto. Prueba con otro número de modelo o intenta escribirlo de otra manera.",
    error_generic: "Se ha producido un error en el extremo: {{endpoint_location}}",
    error_get_bike_bom: "¡Menuda faena! No se ha podido recuperar la configuración de tu bicicleta. Actualiza la página e inténtalo de nuevo.",
    error_invalid_email: "Parece que este correo electrónico no es válido. ¿Puedes probar con otro?",
    error_remove_component: "Este componente no quiere bajarse de la bicicleta. Actualiza la página e inténtalo de nuevo.",
    error_revert_component: "Este componente no quiere bajarse de la bicicleta. Actualiza la página e inténtalo de nuevo.",
    error_save_custom_bike: "¡Oh, no! La bicicleta no se ha guardado. Inténtalo de nuevo y dale con más ganas esta vez.",
    error_update_custom_bike: "Vaya, las cosas no han salido bien. ¡Lo sentimos! Actualiza la página e inténtalo de nuevo.",
    error_update_custom_bike_name: "No hemos podido cambiar el nombre de la bicicleta. Puede que no le guste. Actualiza la página e inténtalo de nuevo",
    not_compatible: "No compatible",
    onboarding_explore: "Ir a explorar",
    onboarding_green_spanner: "Busca la llave inglesa verde",
    onboarding_green_spanner_description: "Si un componente tiene una llave verde, se puede cambiar o eliminar completamente de la compilación.",
    onboarding_linked_components: "Comprender los componentes vinculados",
    onboarding_linked_components_description: "Algunas piezas (por ejemplo, juego de bielas + pedalier) están vinculadas. Para intercambiar uno, es posible que tengas que eliminar ambos; de lo contrario, el sistema puede marcarlo como incompatible.",
    onboarding_next: "Próximo",
    onboarding_open_bike_build: "Abre tu construcción de bicicletas",
    onboarding_open_bike_build_description: "Al ver la construcción de su bicicleta, expanda los grupos de componentes para ver los componentes que se aplican a su bicicleta.",
    onboarding_preview: "Vista previa o guardar cambios",
    onboarding_preview_description: "Puede intercambiar/eliminar componentes y confirmar cambios para explorar actualizaciones. Estos se pueden deshacer en cualquier momento antes de guardarlos. Una vez que guardes, los cambios no se pueden revertir, solo eliminarlos o reemplazarlos nuevamente.",
    onboarding_replacement: "Elija el reemplazo adecuado",
    onboarding_replacement_description: "Utilice el código de barras o el número de pieza del fabricante (que se encuentra en el paquete o en su factura) para buscar. También puedes usar el número de modelo, pero vuelve a verificar: algunos números se aplican a varias versiones.",
    onboarding_settings: "Ver la página de configuración",
    onboarding_settings_description: "Su página de configuración es donde puede cambiar el nombre de su bicicleta, actualizar su correo electrónico y donde encontrará su ID de Bike Matrix y su ID de Share.",
    onboarding_title: "Taller Virtual – Guía Rápida",
    onboarding_vw_description: "Modifica el registro digital de tu bicicleta para reflejar las mejoras que has realizado y asegurar que las comprobaciones de compatibilidad sean lo más precisas posible.",
    productcheck_nobikeselected_label: "Comprobar compatibilidad",
    productcheck_nobikeselected_message: "Quieres añadir la bicicleta para comprobar si este componente es adecuado",
    productcheck_questionmark: "?",
    save: "Guardar",
    share: "Compartir",
    variantselector_help_text: "Estas son las variantes del producto que son compatibles con tu bicicleta.",
    variantselector_help_text_clickable: "Haga clic en una variante para cambiar a esa variante.",
    variantselector_help_text_showall: "Muestra la compatibilidad de cada variante del producto.",
    variantselector_no_compatible: "No hay variantes compatibles",
    variantselector_no_compatible_information: "No hay información de compatibilidad",
    variantselector_title: "Variantes compatibles",
    virtualworkshop_add_bike_text: "Puedes consultar tu ID de Bike Matrix en la página Ajustes del Taller virtual",
    virtualworkshop_add_by_error: "No es una identificación válida de Bike Matrix",
    virtualworkshop_add_by_id: "Ingresa tu ID de Bike Matrix",
    virtualworkshop_are_you_sure: "¿Está seguro?",
    virtualworkshop_bm_id_text: "Puedes usar el ID de Bike Matrix (que está disponible en la sección Ajustes del Taller virtual) o el ID de uso compartido que alguien haya compartido contigo.",
    virtualworkshop_bom_title: "Lista de materiales",
    virtualworkshop_build_text: "Detalles de la configuración",
    virtualworkshop_cockpit: "Cockpit",
    virtualworkshop_copy: "Copiar",
    virtualworkshop_current: "Actual",
    virtualworkshop_disclaimer: "Siempre que se modifique el registro de la bicicleta, el usuario será el responsable final de comprobar que los componentes sean correctos, y deberá tener en cuenta que cualquier cambio que realice afectará a la compatibilidad.",
    virtualworkshop_do_not_pass: "El Taller Virtual aún no está disponible para todas las Marcas de Bicicletas.",
    virtualworkshop_drivetrain: "Sistema de transmisión",
    virtualworkshop_e_drive: "eDrive",
    virtualworkshop_enter_button: "Acceder al Taller virtual",
    virtualworkshop_frame_fork: "Cuadro y horquilla",
    virtualworkshop_intro_text: "Renueva la configuración de tu bicicleta con nuevos componentes e indica una dirección de correo electrónico para guardarla. Consulta las configuraciones de bicicleta compartidas contigo y accede a los ID de tus bicicletas.",
    virtualworkshop_other_parts: "Otros componentes",
    virtualworkshop_remove_btn: "Quitar componente",
    virtualworkshop_remove_subtitle: "Si quitas un componente, se eliminará de la configuración de la bicicleta. Esta acción puede afectar a la compatibilidad de otros componentes.",
    virtualworkshop_remove_title: "¿Seguro?",
    virtualworkshop_removed: "Remoto",
    virtualworkshop_revert_btn: "Deshacer",
    virtualworkshop_save_btn: "Guardar bicicleta",
    virtualworkshop_save_text: "Para guardar tu bicicleta personalizada, debemos vincularla con tu dirección de correo electrónico",
    virtualworkshop_save_title: "Introduce tu correo electrónico",
    virtualworkshop_saved: "¡Tu {{label}} ha sido guardado!",
    virtualworkshop_search_text: "Introduce un código de barras o busca por marca, modelo, número de referencia...",
    virtualworkshop_settings_bike_name: "Nombre de la bicicleta",
    virtualworkshop_settings_email: "Correo electrónico",
    virtualworkshop_settings_id: "ID de Bike Matrix",
    virtualworkshop_settings_share_id: "ID de uso compartido",
    virtualworkshop_shared_icon: "Compartido contigo",
    virtualworkshop_swap_btn: "Cambiar componente",
    virtualworkshop_title: "Taller virtual",
    virtualworkshop_unsaved_changes: "Ver los cambios sin guardar",
    virtualworkshop_wheels_tyres: "Ruedas y neumáticos"
  }
}, ym = {
  translation: {
    bikematrix_poweredby: "Powered by Bike Matrix",
    bikeselector_addbike_brand_desc: "Pyörän valmistaja löytyy yleensä korostetulta alueelta",
    bikeselector_addbike_brand_label: "Valmistaja",
    bikeselector_addbike_brand_select: "Valitse pyörän valmistaja",
    bikeselector_addbike_find_btn: "Etsi pyörä",
    bikeselector_addbike_framespec_desc: "Pyöräsi runkokoko löytyy yleensä alta korostetuilta alueilta",
    bikeselector_addbike_framespec_label: "Rungon mallitarkennus",
    bikeselector_addbike_framespec_select: "Valitse pyöräsi rungon tiedot",
    bikeselector_addbike_model_desc: "Pyöräsi malli löytyy yleensä alta korostetuilta alueilta",
    bikeselector_addbike_model_label: "Malli",
    bikeselector_addbike_model_select: "Valitse pyöräsi malli",
    bikeselector_addbike_title: "Lisää pyörä",
    bikeselector_browse_back_btn: "Takaisin Bike Loungeen",
    bikeselector_browse_products_label: "Osta yhteensopivia tuotteita",
    bikeselector_browse_shop_btn: "Osta tuotteita",
    bikeselector_browse_title: "Aloita ostokset!",
    bikeselector_confirm_brandmodelframespec_label: "Tuotemerkki, malli, runkosarja",
    bikeselector_confirm_confirm_btn: "Kyllä, tämä on pyöräni",
    bikeselector_confirm_framesize_label: "Rungon koko",
    bikeselector_confirm_notyourride_msg: "Tämä ei ole pyöräsi? Valitse ylhäältä muuttaaksesi hakua",
    bikeselector_confirm_title: "Vahvista pyöräsi",
    bikeselector_confirm_yearbikespec_label: "Vuosi, Pyörän kokoonpano",
    bikeselector_home_add_a_bike: "Lisää pyörä alle nähdäksesi yhteensopivat osat.",
    bikeselector_home_add_btn: "Lisää pyörä",
    bikeselector_home_browse_btn: "Selaa yhteensopivuuksia",
    bikeselector_home_close_btn: "Sulje",
    bikeselector_home_empty: "Bike Lounge on tyhjä!",
    bikeselector_home_footer_message: "Pyörän valmistaja voi muuttaa pyörän teknisiä tietoja ilman erillistä ilmoitusta. Teknisten tietojen erot voivat vaikuttaa yhteensopivuustuloksiin.",
    bikeselector_home_title: "Minun Bike Lounge",
    bikeselector_or: "Tai",
    bikeselector_price_from: "From",
    bikeselector_search_bikespec_label: "Pyörän mallitarkennus",
    bikeselector_search_bikespec_select: "Valitse pyörän kokoonpano",
    bikeselector_search_bikespec_select_all: "Kaikki",
    bikeselector_search_confirm_btn: "Vahvista valinta",
    bikeselector_search_no_bikes_found: "Pyöriä ei löytynyt",
    bikeselector_search_number_bikes_found: "{{number_found}} pyörää löydetty",
    bikeselector_search_one_bike_found: "1 pyörä löydetty",
    bikeselector_search_searching: "Etsii...",
    bikeselector_search_title: "Pyörähaku",
    bikeselector_search_year_btn: "Tietoja ei vaadita",
    bikeselector_search_year_label: "Vuosi",
    bikeselector_size_confirm_btn: "Vahvista koko",
    bikeselector_size_framesize_desc: "Pyöräsi runkokoko löytyy yleensä korostetuilta alueelta",
    bikeselector_size_framesize_label: "Rungon koko",
    bikeselector_size_framesize_one_size: "Yksi koko",
    bikeselector_size_framesize_select: "Valitse rungon koko",
    bikeselector_size_title: "Valitse kokosi",
    bikeselectorbanner_mobiletitle: "Tarkista yhteensopivuus",
    bikeselectorbanner_title: "Valitse pyöräsi yhteensopivuuden tarkistamiseksi",
    cancel: "Peruuta",
    category_bike: "Pyörä",
    category_bottombracket: "Keskiö",
    category_bottombracketpart: "Keskiön osa",
    category_brakeadapter: "Jarruadapteri",
    category_brakeadapterfront: "Jarru adapteri edessä",
    category_brakeadapterpart: "Jarruadapterin osa",
    category_brakeadapterrear: "Jarru adapteri takana",
    category_brakecaliper: "Jarrusatula",
    category_brakecaliperfront: "Jarrusatula Edessä",
    category_brakecaliperpart: "Jarrusatulan osa",
    category_brakecaliperrear: "Jarrusatula Taka",
    category_brakecaliperservicekit: "Jarrusatulan huoltosarja",
    category_brakelever: "Jarrukahva",
    category_brakeleverlh: "Jarruvipu vasen käsi",
    category_brakeleverpart: "Jarrukahvan osa",
    category_brakeleverrh: "Jarruvipu Oikea käsi",
    category_brakeleverservicekit: "Jarrukahvan huoltosarja",
    category_brakepads: "Jarrupalat",
    category_brakepadsfront: "Jarrupalat edessä",
    category_brakepadsrear: "Jarrupalat Taka",
    category_brakerotor: "Jarrulevy",
    category_brakerotorfront: "Jarru roottori edessä",
    category_brakerotorpart: "Jarrulevyn osa",
    category_brakerotorrear: "Jarru roottori takana",
    category_brakes: "Jarrut",
    category_brakesystem: "Jarrujärjestelmä",
    category_brakesystempart: "Jarrujärjestelmän osa",
    category_cassette: "Takapakka",
    category_cassettepart: "Takapakan osa",
    category_chain: "Ketju",
    category_chainguide: "Ketjusuoja",
    category_chainguidepart: "Ketjusuojan osa",
    category_chainjoiner: "Ketjuliitin",
    category_chainring: "Eturatas",
    category_chainringbolt: "Eturattaan pultti",
    category_chainringspider: "Eturattaan Hämähäkki",
    category_cockpit: "Ohjaamo",
    category_crankpart: "Kammen osa",
    category_crankset: "Kampisarja",
    category_drivetrain: "Voimansiirto",
    category_dropperlever: "Hissitolpan vipu",
    category_dropperleverpart: "Hissitolpan vivun osa",
    category_ebikebattery: "Sähköpyörän akku",
    category_ebikebatterypart: "Sähköpyörän akun osa",
    category_ebikecharger: "Sähköpyörän laturi",
    category_ebikechargerpart: "Sähköpyörän laturin osa",
    category_ebikecontrolunit: "Sähköpyörän ohjausyksikkö",
    category_ebikecontrolunitpart: "Sähköpyörän ohjausyksikön osa",
    category_ebikeinterconnect: "eBike-liitin",
    category_ebikeinterconnectpart: "eBike-liittimen osa",
    category_ebikemotorsystem: "Sähköpyörän moottorijärjestelmä",
    category_ebikemotorsystempart: "Sähköpyörän moottorijärjestelmän osa",
    category_fork: "Keula",
    category_forkpart: "Keulan osa",
    category_forkservicekit: "Keulan huoltosarja",
    category_frame: "Runko",
    category_framefork: "Runko & haarukka",
    category_framepart: "Rungon osa",
    category_frontaxle: "Etuakseli",
    category_frontaxlepart: "Etuakselin osa",
    category_frontderailleur: "Etuvaihtaja",
    category_frontderailleurpart: "Etuvaihtajan osa",
    category_fronthub: "Etunapa",
    category_fronthubpart: "Etunavan osa",
    category_frontwheel: "Etukiekko",
    category_grips: "Kädensijat",
    category_gripspart: "Kädensijojen osa",
    category_handlebar: "Ohjaustanko",
    category_headset: "Ohjainlaakeri",
    category_headsetpart: "Ohjainlaakerin osa",
    category_largestchainring: "Suurin ketjurengas",
    category_nipple: "Nippeli",
    category_pedals: "Polkimet",
    category_pedalspart: "Polkimien osa",
    category_rearaxle: "Taka-akseli",
    category_rearaxlepart: "Taka-akselin osa",
    category_rearderailleur: "Takavaihtaja",
    category_rearderailleurpart: "Takavaihtajan osa",
    category_rearhub: "Takanapa",
    category_rearhubpart: "Takanavan osa",
    category_rearshock: "Takaiskari",
    category_rearshockpart: "Takaiskarin osa",
    category_rearshockservicekit: "Takaiskarin huoltosarja",
    category_rearwheel: "Takakiekko",
    category_rim: "Vanne",
    category_saddle: "Satula",
    category_seatpost: "Satulaputki",
    category_seatpostclamp: "Satulaputken kiristin",
    category_seatpostclamppart: "Satulaputken kiristimen osa",
    category_seatpostpart: "Satulaputken osa",
    category_seatpostservicekit: "Hissitolpan huoltosarja",
    category_secondlargestchainring: "Toiseksi suurin ketjurengas",
    category_shiftadapter: "Vaihtajan adapteri",
    category_shiftadapterpart: "Vaihtajan adapterin osa",
    category_shiftbrakecombo: "Vaihdevipu-jarrukahva yhdistelmä",
    category_shiftbrakecombopart: "Vaihdevipu-jarrukahva yhdistelmän osa",
    category_shifter: "Vaihdevipu",
    category_shifteradapterlh: "Vaihteensovitin vasen käsi",
    category_shifteradapterrh: "Vaihteensovitin Oikea käsi",
    category_shifterbrakecombolh: "Vaihdejarruyhdistelmä vasen käsi",
    category_shifterbrakecomborh: "Vaihdejarruyhdistelmä oikea käsi",
    category_shifterlh: "Vaihteisto vasen käsi",
    category_shifterpart: "Vaihdevivun osa",
    category_shifterrh: "Vaihteisto Oikea käsi",
    category_spoke: "Pinna",
    category_stem: "Ohjainkannatin",
    category_stempart: "Ohjainkannattimen osa",
    category_thirdlargestchainring: "Kolmanneksi suurin ketjurengas",
    category_tube: "Sisärengas",
    category_tyre: "Ulkorengas",
    category_tyrefront: "Rengas Etu",
    category_tyrerear: "Rengas Taka",
    category_wheelset: "Kiekkosarja",
    category_wheelstyres: "Pyörät & Renkaat",
    checksku_message_nobikefound: "Pöyrää ei löytynyt annetulla Bike Key:llä.",
    checksku_message_nocompatibilityinfo: "Ei yhteensopivuus tietoja",
    checksku_message_noproductfound: "Osaa ei löytynyt annetulla SKU:lla/Viivakoodilla/Osanumerolla",
    checksku_message_notcompatible: "Ei yhteensopiva",
    checksku_warning_unabletoperformcheck: "Yhteensopivuuden tarkistusta ei voitu suorittaa. Pyydämme tarkistamaan yhteensopivuuden manuaalisesti.",
    compatible: "Yhteensopiva",
    compatible_check_notes: "Yhteensopiva - tarkista lisätiedot",
    compatiblelist_header: "Yhteensopivat tuotteet",
    compatiblelist_nobikeselected: "Pyörää ei ole valittu. Klikkaa tästä lisätäksesi pyörän yhteensopivien osien tarkistamiseksi.",
    compatiblelist_noresults: "Yhteensopivia tuotteita ei löytynyt",
    compatiblelist_pageone: "Kaikki pyöräsi kanssa yhteensopivat tuotteet näet tässä",
    compatiblelist_unavailable: "Yhteensopivat tuotteet tämän tuotekategorian ja valitsemasi pyörätuotemerkin kanssa on tulossa pian!",
    confirm: "Vahvista",
    copy: "Kopioi",
    edit: "Muokkaa",
    error_add_component: "Se komponentti ei ottanut tarttuakseen. Kokeile uudestaan ja heitä tällä kertaa vähän kovemmin.",
    error_add_custom_bike: "Oops... Emme pystyneet luomaan kustomoitua pyörääsi. Päivitä ja kokeile uudestaan.",
    error_find_products: "Hmmm... Näyttää siltä, että pyörämme eivät oikein pyöri. Päivitä ja kokeile uudestaan.",
    error_find_products_no_results: "Hmmm... Emme löytäneet etsimääsi tuotetta. Kokeile toista mallinumeroa tai muokkaa hakusanaa.",
    error_generic: "Päätepisteessä oli virhe - {{endpoint_location}}",
    error_get_bike_bom: "Onpa noloa! Emme löytäneet pyöräkokoonpanoasi. Päivitä ja kokeile uudestaan.",
    error_invalid_email: "Sähköpostiosoitteesi ei vaikuta olevan voimassa, olisiko jotain toista vaihtoehtoa?",
    error_remove_component: "Tämä komponenti haluaa tosissaan pysyä pyörässäsi. Päivitä ja kokeile uudestaan.",
    error_revert_component: "Tämä komponenti haluaa tosissaan pysyä pyörässäsi. Päivitä ja kokeile uudestaan.",
    error_save_custom_bike: "Meidän moka ettei pyöräsi ollut tallennettu. Kokeile uudestaan ja polje tällä kertaa vähän kovemmin.",
    error_update_custom_bike: "Oho, se ei toiminut. Pahoittelut! Päivitä ja kokeile uudestaan.",
    error_update_custom_bike_name: "Emme voineet vaihtaa pyöräsi nimeä. Ehkä se ei pidä siitä? Päivitä ja kokeile uudestaan.",
    not_compatible: "Yhteensopimaton",
    onboarding_explore: "Mene Tutkimaan",
    onboarding_green_spanner: "Etsi vihreä jakoavain",
    onboarding_green_spanner_description: "Jos komponentissa on vihreä jakoavain, se voidaan vaihtaa tai poistaa kokonaan.",
    onboarding_linked_components: "Ymmärrä linkitetyt komponentit",
    onboarding_linked_components_description: "Jotkut osat (esim. kampi + alakiinnike) on linkitetty. Jos haluat vaihtaa toisen, saatat joutua poistamaan molemmat – muuten järjestelmä voi merkitä sen yhteensopimattomaksi.",
    onboarding_next: "Seuraavaksi",
    onboarding_open_bike_build: "Avaa tekniset tiedot",
    onboarding_open_bike_build_description: "Kun tarkastelet pyörääsi, laajenna komponenttiryhmät nähdäksesi pyörääsi koskevat komponentit.",
    onboarding_preview: "Esikatsele tai tallenna muutokset",
    onboarding_preview_description: "Voit vaihtaa/poistaa komponentteja ja vahvistaa muutokset tutkiaksesi päivityksiä. Nämä voidaan peruuttaa milloin tahansa ennen tallentamista. Kun olet tallentanut, muutoksia ei voi peruuttaa – ne voidaan vain poistaa tai korvata uudelleen.",
    onboarding_replacement: "Valitse oikea korvike",
    onboarding_replacement_description: "Käytä hakuun viivakoodia tai valmistajan osanumeroa (löytyy pakkauksesta tai laskusta). Voit myös käyttää mallinumeroa, mutta tarkista vielä kerran – jotkin numerot koskevat useita versioita.",
    onboarding_settings: "Näytä asetussivu",
    onboarding_settings_description: "Asetussivullasi voit muuttaa pyöräsi nimeä, päivittää sähköpostiosoitteesi ja sieltä löydät Bike Matrix -tunnuksesi sekä jakotunnuksesi.",
    onboarding_title: "Virtuaalinen työpaja – Pikaopas",
    onboarding_vw_description: "Muokkaa pyöräsi digitaalista tietuetta vastaamaan tekemiäsi päivityksiä ja varmista, että yhteensopivuustarkastukset ovat mahdollisimman tarkkoja.",
    productcheck_nobikeselected_label: "Tarkista yhteensopivuus",
    productcheck_nobikeselected_message: "Lisää pyörä tarkistaaksesi yhteensopivuus",
    productcheck_questionmark: "?",
    save: "Tallenna",
    share: "Jaa",
    variantselector_help_text: "Nämä ovat tuotteen muunnelmia, jotka ovat yhteensopivia pyöräsi kanssa.",
    variantselector_help_text_clickable: "Napsauta muunnelmaa vaihtaaksesi siihen.",
    variantselector_help_text_showall: "Näyttää kunkin tuoteversion yhteensopivuuden.",
    variantselector_no_compatible: "Ei yhteensopivia variantteja",
    variantselector_no_compatible_information: "Ei yhteensopivuustietoja",
    variantselector_title: "Yhteensopivat vaihtoehdot",
    virtualworkshop_add_bike_text: "Sinun Bike Matrix ID löytyy Virtual Workshopin asetukset -sivuilta",
    virtualworkshop_add_by_error: "Ei kelvollinen Bike Matrix -tunnus",
    virtualworkshop_add_by_id: "Anna Bike Matrix -tunnuksesi",
    virtualworkshop_are_you_sure: "Oletko varma?",
    virtualworkshop_bm_id_text: "Voit käyttää Bike Matrix ID:tä, joka löytyy Virtual Workshopin asetukset -sivuilta tai Share Id:tä, joka on jaettu sinulle toisen henkilön toimesta.",
    virtualworkshop_bom_title: "Materiaaliluoettelo",
    virtualworkshop_build_text: "Kokoonpanotiedot",
    virtualworkshop_cockpit: "Ohjaamo",
    virtualworkshop_copy: "Kopioida",
    virtualworkshop_current: "Nykyinen",
    virtualworkshop_disclaimer: "Päivitessään pyörän tietoja käyttäjä on vastuussa siitä, että komponentit ovat oikein merkitty ymmärtäen, että muutokset vaikuttavat yhteensopivuustuloksiin.",
    virtualworkshop_do_not_pass: "Virtuaalityöpaja ei ole vielä saatavilla kaikille pyörämerkeille.",
    virtualworkshop_drivetrain: "Voimansiirto",
    virtualworkshop_e_drive: "eDrive",
    virtualworkshop_enter_button: "Virtuaaliseen Workshopiin",
    virtualworkshop_frame_fork: "Runko & etuhaarukka",
    virtualworkshop_intro_text: "Päivitä pyörääsi uusilla komponenteilla ja tallenna pyöräsi antamalla sähköpostiosoitteesi. Tarkastele jaettuja pyöriä ja pääse käsiksi pyöräsi tunnuksiin.",
    virtualworkshop_other_parts: "Muut osat",
    virtualworkshop_remove_btn: "Poista komponentti",
    virtualworkshop_remove_subtitle: "Komponentin poistaminen poistaa sen pyöräsi kokoonpanosta. Tämä voi vaikuttaa muiden osien yhteensopivuuteen.",
    virtualworkshop_remove_title: "Oletko varma?",
    virtualworkshop_removed: "Poistettu",
    virtualworkshop_revert_btn: "Palaa",
    virtualworkshop_save_btn: "Tallenna pyörä",
    virtualworkshop_save_text: "Voidaksemme tallentaa kustomoidun pyöräsi, se on tallennettava sähköpostiosoitteellasi",
    virtualworkshop_save_title: "Syötä sähköpostiosoitteesi",
    virtualworkshop_saved: "{{label}} on tallennettu!",
    virtualworkshop_search_text: "Syötä viivakoodi tai hae tuotemerkillä, mallilla, osanumerolla...",
    virtualworkshop_settings_bike_name: "Pyörän nimi",
    virtualworkshop_settings_email: "Sähköpostiosoite",
    virtualworkshop_settings_id: "Bike Matrix ID",
    virtualworkshop_settings_share_id: "Jaa ID",
    virtualworkshop_shared_icon: "Jaettu sinulle",
    virtualworkshop_swap_btn: "Vaihda komponenttia",
    virtualworkshop_title: "Virtuaalinen Workshop",
    virtualworkshop_unsaved_changes: "Katsele tallentamattomia muutoksia",
    virtualworkshop_wheels_tyres: "Vanteet & renkaat"
  }
}, km = {
  translation: {
    bikematrix_poweredby: "Zasilane przez Bike Matrix",
    bikeselector_addbike_brand_desc: "Marke Twojego roweru zazwyczaj znajdziesz w obszarach zaznaczonych ponizej.",
    bikeselector_addbike_brand_label: "Marka",
    bikeselector_addbike_brand_select: "Wybierz marke swojego roweru",
    bikeselector_addbike_find_btn: "Znajdz mój rower",
    bikeselector_addbike_framespec_desc: "Dane techniczne ramy roweru zazwyczaj mozna znalezc w obszarach zaznaczonych ponizej.",
    bikeselector_addbike_framespec_label: "Specyfikacja ramy",
    bikeselector_addbike_framespec_select: "Wybierz specyfikacje ramy swojego roweru",
    bikeselector_addbike_model_desc: "Model Twojego roweru zazwyczaj znajdziesz w obszarach zaznaczonych ponizej.",
    bikeselector_addbike_model_label: "Model",
    bikeselector_addbike_model_select: "Wybierz model swojego roweru",
    bikeselector_addbike_title: "Dodaj rower",
    bikeselector_browse_back_btn: "Powrót do Bike Lounge",
    bikeselector_browse_products_label: "Kup kompatybilne produkty",
    bikeselector_browse_shop_btn: "Produkty sklepowe",
    bikeselector_browse_title: "Zacznij zakupy!",
    bikeselector_confirm_brandmodelframespec_label: "Marka, Model, Seria Ramek",
    bikeselector_confirm_confirm_btn: "Tak, to mój rower!",
    bikeselector_confirm_framesize_label: "Rozmiar ramki",
    bikeselector_confirm_notyourride_msg: "Nie twój rower? Wybierz pole powyzej, aby dokonac zmiany.",
    bikeselector_confirm_title: "Potwierdz swój rower",
    bikeselector_confirm_yearbikespec_label: "Rok, Specyfikacja roweru",
    bikeselector_home_add_a_bike: "Dodaj rower ponizej, aby zobaczyc kompatybilne czesci.",
    bikeselector_home_add_btn: "Dodaj rower",
    bikeselector_home_browse_btn: "Przegladaj zgodnosc",
    bikeselector_home_close_btn: "Zamknac",
    bikeselector_home_empty: "Twój salonik jest pusty!",
    bikeselector_home_footer_message: "Producenci rowerów moga zmieniac specyfikacje rowerów bez powiadomienia. Róznice w stosunku do specyfikacji standardowych moga miec wplyw na wyniki zgodnosci.",
    bikeselector_home_title: "Mój salon rowerowy",
    bikeselector_or: "Lub",
    bikeselector_price_from: "Z",
    bikeselector_search_bikespec_label: "Specyfikacja roweru",
    bikeselector_search_bikespec_select: "Wybierz poziom specyfikacji",
    bikeselector_search_bikespec_select_all: "Wszystko",
    bikeselector_search_confirm_btn: "Potwierdz wybór",
    bikeselector_search_no_bikes_found: "Nie znaleziono rowerów",
    bikeselector_search_number_bikes_found: "Znaleziono {{number_found}} rowerów",
    bikeselector_search_one_bike_found: "Znaleziono 1 rower",
    bikeselector_search_searching: "Badawczy...",
    bikeselector_search_title: "Poszukiwanie roweru",
    bikeselector_search_year_btn: "*Nic nie jest wymagane*",
    bikeselector_search_year_label: "Rok",
    bikeselector_size_confirm_btn: "Potwierdz rozmiar",
    bikeselector_size_framesize_desc: "Rozmiar ramy roweru zazwyczaj znajduje sie w obszarach zaznaczonych ponizej.",
    bikeselector_size_framesize_label: "Rozmiar ramki",
    bikeselector_size_framesize_one_size: "Jeden rozmiar",
    bikeselector_size_framesize_select: "Wybierz rozmiar ramki",
    bikeselector_size_title: "Wybierz swój rozmiar",
    bikeselectorbanner_mobiletitle: "Sprawdz zgodnosc",
    bikeselectorbanner_title: "Wybierz swój rower, aby sprawdzic jego kompatybilnosc",
    cancel: "Anulowac",
    category_bike: "Rower",
    category_bottombracket: "Suport",
    category_bottombracketpart: "Czesc suportu",
    category_brakeadapter: "Adapter hamulcowy",
    category_brakeadapterfront: "Adapter hamulca przedniego",
    category_brakeadapterpart: "Czesc adaptera hamulcowego",
    category_brakeadapterrear: "Adapter hamulca tylnego",
    category_brakecaliper: "Zacisk hamulcowy",
    category_brakecaliperfront: "Zacisk hamulca przedniego",
    category_brakecaliperpart: "Czesc zacisku hamulcowego",
    category_brakecaliperrear: "Zacisk hamulca tylnego",
    category_brakecaliperservicekit: "Zestaw serwisowy zacisku hamulcowego",
    category_brakelever: "Dzwignia hamulca",
    category_brakeleverlh: "Dzwignia hamulca lewa",
    category_brakeleverpart: "Czesc dzwigni hamulca",
    category_brakeleverrh: "Dzwignia hamulca prawa",
    category_brakeleverservicekit: "Zestaw serwisowy dzwigni hamulca",
    category_brakepads: "Klocki hamulcowe",
    category_brakepadsfront: "Klocki hamulcowe przód",
    category_brakepadsrear: "Klocki hamulcowe tylne",
    category_brakerotor: "Tarcza hamulcowa",
    category_brakerotorfront: "Tarcza hamulcowa przód",
    category_brakerotorpart: "Czesc tarczy hamulcowej",
    category_brakerotorrear: "Tarcza hamulcowa tylna",
    category_brakes: "Hamulce",
    category_brakesystem: "Uklad hamulcowy",
    category_brakesystempart: "Czesc ukladu hamulcowego",
    category_cassette: "Kaseta",
    category_cassettepart: "Czesc kasety",
    category_chain: "Lancuch",
    category_chainguide: "Prowadnica lancucha",
    category_chainguidepart: "Czesc prowadnicy lancucha",
    category_chainjoiner: "Lacznik lancuchowy",
    category_chainring: "Tarcza lancuchowa",
    category_chainringbolt: "Sruba tarczy lancuchowej",
    category_chainringspider: "Pajak tarczy lancuchowej",
    category_cockpit: "Kabina pilota",
    category_crankpart: "Czesc korbowa",
    category_crankset: "Korba",
    category_drivetrain: "Uklad napedowy",
    category_dropperlever: "Dzwignia kroplujaca",
    category_dropperleverpart: "Czesc dzwigni kroplownika",
    category_ebikebattery: "Akumulator do roweru elektrycznego",
    category_ebikebatterypart: "Czesc baterii eBike",
    category_ebikecharger: "Ladowarka do roweru elektrycznego",
    category_ebikechargerpart: "Czesc ladowarki eBike",
    category_ebikecontrolunit: "Jednostka sterujaca eBike",
    category_ebikecontrolunitpart: "Czesc jednostki sterujacej eBike",
    category_ebikeinterconnect: "Polaczenie eBike",
    category_ebikeinterconnectpart: "Czesc laczaca eBike",
    category_ebikemotorsystem: "System silnika eBike",
    category_ebikemotorsystempart: "Czesc ukladu silnika eBike",
    category_fork: "Widelec",
    category_forkpart: "Czesc widelca",
    category_forkservicekit: "Zestaw serwisowy widelca",
    category_frame: "Rama",
    category_framefork: "Rama i widelec",
    category_framepart: "Czesc ramy",
    category_frontaxle: "Os przednia",
    category_frontaxlepart: "Czesc osi przedniej",
    category_frontderailleur: "Przerzutka przednia",
    category_frontderailleurpart: "Czesc przedniej przerzutki",
    category_fronthub: "Piasta przednia",
    category_fronthubpart: "Czesc piasty przedniej",
    category_frontwheel: "Kolo przednie",
    category_grips: "Uchwyty",
    category_gripspart: "Czesc uchwytów",
    category_handlebar: "Kierownica",
    category_headset: "Zestaw sluchawkowy",
    category_headsetpart: "Czesc zestawu sluchawkowego",
    category_largestchainring: "Najwieksza tarcza lancuchowa",
    category_nipple: "Sutek",
    category_pedals: "Pedaly",
    category_pedalspart: "Czesc pedalów",
    category_rearaxle: "Os tylna",
    category_rearaxlepart: "Czesc tylnej osi",
    category_rearderailleur: "Przerzutka tylna",
    category_rearderailleurpart: "Czesc tylnej przerzutki",
    category_rearhub: "Piasta tylna",
    category_rearhubpart: "Czesc piasty tylnej",
    category_rearshock: "Amortyzator tylny",
    category_rearshockpart: "Czesc tylnego amortyzatora",
    category_rearshockservicekit: "Zestaw serwisowy tylnego amortyzatora",
    category_rearwheel: "Kolo tylne",
    category_rim: "Obrzeze",
    category_saddle: "Siodlo",
    category_seatpost: "Sztyca siodelka",
    category_seatpostclamp: "Zacisk sztycy",
    category_seatpostclamppart: "Czesc zacisku sztycy",
    category_seatpostpart: "Czesc sztycy siodelka",
    category_seatpostservicekit: "Zestaw serwisowy poczty morskiej",
    category_secondlargestchainring: "Druga co do wielkosci tarcza lancuchowa",
    category_shiftadapter: "Adapter zmiany biegów",
    category_shiftadapterpart: "Czesc adaptera zmiany biegów",
    category_shiftbrakecombo: "Kombinacja dzwigni zmiany biegów i hamulca",
    category_shiftbrakecombopart: "Czesc kombinacji hamulca zmiany biegów",
    category_shifter: "Zmieniacz",
    category_shifteradapterlh: "Adapter zmiany biegów lewy",
    category_shifteradapterrh: "Adapter zmiany biegów prawy",
    category_shifterbrakecombolh: "Kombinacja dzwigni zmiany biegów i hamulca lewa",
    category_shifterbrakecomborh: "Kombinacja dzwigni zmiany biegów i hamulca po prawej stronie",
    category_shifterlh: "Dzwignia zmiany biegów lewa",
    category_shifterpart: "Czesc dzwigni zmiany biegów",
    category_shifterrh: "Dzwignia zmiany biegów prawa",
    category_spoke: "Szprycha",
    category_stem: "Trzon",
    category_stempart: "Czesc lodygi",
    category_thirdlargestchainring: "Trzecia co do wielkosci tarcza lancuchowa",
    category_tube: "Rura",
    category_tyre: "Opona",
    category_tyrefront: "Opona przednia",
    category_tyrerear: "Opona tylna",
    category_wheelset: "Zestaw kolowy",
    category_wheelstyres: "Kola i opony",
    checksku_message_nobikefound: "Nie mozna znalezc roweru z dostarczonym kluczem rowerowym",
    checksku_message_nocompatibilityinfo: "Brak informacji o zgodnosci",
    checksku_message_noproductfound: "Nie znaleziono czesci o podanym numerze SKU/kodzie kreskowym/nr. czesci",
    checksku_message_notcompatible: "Niezgodne",
    checksku_warning_unabletoperformcheck: "Nie mozna wykonac sprawdzenia zgodnosci. Prosze sprawdzic zgodnosc recznie.",
    compatible: "Zgodny",
    compatible_check_notes: "Zgodne - Sprawdz notatki",
    compatiblelist_header: "Produkty kompatybilne",
    compatiblelist_nobikeselected: "Nie wybrano roweru. Kliknij tutaj, aby dodac rower i sprawdzic, czy sa kompatybilne czesci",
    compatiblelist_noresults: "Nie znaleziono zgodnych produktów",
    compatiblelist_pageone: "Wszystkie produkty kompatybilne z Twoim rowerem mozesz zobaczyc <a>tutaj</a>.",
    compatiblelist_unavailable: "Juz wkrótce ta kategoria produktów bedzie kompatybilna z wybrana przez Ciebie marka roweru!",
    confirm: "Potwierdzac",
    copy: "Kopia",
    edit: "Redagowac",
    error_add_component: "Ten element nie przykleil sie. Spróbuj jeszcze raz i tym razem rzuc troche mocniej.",
    error_add_custom_bike: "Ups... Nie moglismy stworzyc Twojego roweru. Odswiez i spróbuj jeszcze raz.",
    error_find_products: "Hmmm… Wyglada na to, ze nasze kola nie kreca sie zbyt dobrze. Odswiez i spróbuj ponownie.",
    error_find_products_no_results: "Hmmm... Nie mozemy znalezc tego produktu. Spróbuj innego numeru modelu lub popraw pisownie.",
    error_generic: "Wystapil blad w punkcie koncowym - {{endpoint_location}}",
    error_get_bike_bom: "To zenujace! Nie mozna odzyskac Twojego roweru. Odswiez i spróbuj ponownie.",
    error_invalid_email: "Wyglada na to, ze to nie jest prawidlowy adres e-mail. Masz jakies inne opcje?",
    error_remove_component: "Ten komponent naprawde chce pozostac na rowerze. Odswiez i spróbuj ponownie.",
    error_revert_component: "Ten komponent naprawde chce pozostac na rowerze. Odswiez i spróbuj ponownie.",
    error_save_custom_bike: "Nasz blad, twój rower nie zostal uratowany. Spróbuj ponownie i pedaluj troche mocniej tym razem.",
    error_update_custom_bike: "Och, to nie zadzialalo. Przepraszam! Odswiez i spróbuj ponownie.",
    error_update_custom_bike_name: "Nie mozna zmienic nazwy roweru. Moze nie podoba mu sie ta nazwa. Odswiez i spróbuj ponownie",
    not_compatible: "Niezgodne",
    onboarding_explore: "Idz i odkryj",
    onboarding_green_spanner: "Szukaj Zielonego Klucza",
    onboarding_green_spanner_description: "Jesli komponent ma zielony klucz, mozna go zamienic lub calkowicie usunac z kompilacji.",
    onboarding_linked_components: "Zrozumiec powiazane komponenty",
    onboarding_linked_components_description: "Niektóre czesci (np. korba + suport) sa polaczone. Aby zamienic jedna, moze byc konieczne usuniecie obu — w przeciwnym razie system moze oznaczyc je jako niezgodne.",
    onboarding_next: "Nastepny",
    onboarding_open_bike_build: "Otwórz swój rower",
    onboarding_open_bike_build_description: "Podczas przegladania konfiguracji swojego roweru rozwin grupy komponentów, aby wyswietlic komponenty, które maja zastosowanie w Twoim rowerze.",
    onboarding_preview: "Podglad lub zapisywanie zmian",
    onboarding_preview_description: "Mozesz zamieniac/usuwac komponenty i potwierdzac zmiany, aby eksplorowac ulepszenia. Mozna je cofnac w dowolnym momencie przed zapisaniem. Po zapisaniu zmian nie mozna ich cofnac — mozna je jedynie usunac lub ponownie wymienic.",
    onboarding_replacement: "Wybierz odpowiednia wymiane",
    onboarding_replacement_description: "Uzyj kodu kreskowego lub numeru czesci producenta (znajdujacego sie na opakowaniu lub fakturze), aby wyszukac. Mozesz równiez uzyc numeru modelu, ale sprawdz to dokladnie — niektóre numery dotycza wielu wersji.",
    onboarding_settings: "Wyswietl strone ustawien",
    onboarding_settings_description: "Na stronie ustawien mozesz zmienic nazwe swojego roweru, zaktualizowac swój adres e-mail, a takze znajdziesz swój identyfikator Bike Matrix i Share ID.",
    onboarding_title: "Warsztaty wirtualne – krótki przewodnik",
    onboarding_vw_description: "Zmodyfikuj cyfrowy zapis swojego roweru, aby odpowiadal dokonanym ulepszeniom. Dzieki temu kontrole zgodnosci beda tak dokladne, jak to tylko mozliwe.",
    productcheck_nobikeselected_label: "Sprawdz zgodnosc",
    productcheck_nobikeselected_message: "Dodaj swój rower, aby sprawdzic, czy ta czesc pasuje",
    productcheck_questionmark: "?",
    save: "Ratowac",
    share: "Udzial",
    variantselector_help_text: "Ponizej znajduja sie warianty produktu, które sa kompatybilne z Twoim rowerem.",
    variantselector_help_text_clickable: "Kliknij wariant, aby przelaczyc sie na ten wariant.",
    variantselector_help_text_showall: "Pokazuje kompatybilnosc poszczególnych wariantów produktu.",
    variantselector_no_compatible: "Brak kompatybilnych wariantów",
    variantselector_no_compatible_information: "Brak informacji o zgodnosci",
    variantselector_title: "Kompatybilne warianty",
    virtualworkshop_add_bike_text: "Twój identyfikator Bike Matrix mozna znalezc na stronie Ustawienia w wirtualnym warsztacie",
    virtualworkshop_add_by_error: "Nieprawidlowy identyfikator Bike Matrix",
    virtualworkshop_add_by_id: "Wprowadz swój identyfikator Bike Matrix",
    virtualworkshop_are_you_sure: "Jestes pewien?",
    virtualworkshop_bm_id_text: "Mozesz uzyc identyfikatora Bike Matrix ID, który znajdziesz w sekcji ustawien Wirtualnego warsztatu, lub identyfikatora Share ID udostepnionego Ci przez kogos innego.",
    virtualworkshop_bom_title: "Wykaz materialów",
    virtualworkshop_build_text: "Szczególy kompilacji",
    virtualworkshop_cockpit: "Kabina pilota",
    virtualworkshop_copy: "Kopia",
    virtualworkshop_current: "Aktualny",
    virtualworkshop_disclaimer: "Aktualizujac dane swojego roweru, uzytkownik bierze na siebie pelna odpowiedzialnosc za zapewnienie, ze komponenty sa prawidlowe, majac swiadomosc, ze zmiany wplyna na wyniki dotyczace kompatybilnosci.",
    virtualworkshop_do_not_pass: "Wirtualny warsztat nie jest jeszcze dostepny dla wszystkich marek rowerów.",
    virtualworkshop_drivetrain: "Uklad napedowy",
    virtualworkshop_e_drive: "Naped elektryczny",
    virtualworkshop_enter_button: "Wejdz do wirtualnego warsztatu",
    virtualworkshop_frame_fork: "Rama i widelec",
    virtualworkshop_intro_text: "Zaktualizuj swój rower o nowe komponenty i zapisz swój rower, podajac adres e-mail. Przegladaj udostepnione rowery i uzyskaj dostep do swoich identyfikatorów rowerów",
    virtualworkshop_other_parts: "Inne czesci",
    virtualworkshop_remove_btn: "Usun komponent",
    virtualworkshop_remove_subtitle: "Usuniecie komponentu spowoduje usuniecie go z Twojego roweru. Moze to wplynac na kompatybilnosc z innymi czesciami.",
    virtualworkshop_remove_title: "Jestes pewien?",
    virtualworkshop_removed: "Removed",
    virtualworkshop_revert_btn: "Odwracac",
    virtualworkshop_save_btn: "Zapisz rower",
    virtualworkshop_save_text: "Aby zapisac Twój spersonalizowany rower, musimy go zapisac na Twoim adresie e-mail",
    virtualworkshop_save_title: "Wpisz swój adres e-mail",
    virtualworkshop_saved: "Twoja {{label}} zostala zapisana!",
    virtualworkshop_search_text: "Wprowadz kod kreskowy lub wyszukaj wedlug marki, modelu, numeru czesci...",
    virtualworkshop_settings_bike_name: "Nazwa roweru",
    virtualworkshop_settings_email: "E-mail",
    virtualworkshop_settings_id: "Identyfikator macierzy rowerowej",
    virtualworkshop_settings_share_id: "Udostepnij ID",
    virtualworkshop_shared_icon: "Udostepniono Ci",
    virtualworkshop_swap_btn: "Zamien komponent",
    virtualworkshop_title: "Warsztat wirtualny",
    virtualworkshop_unsaved_changes: "Wyswietl niezapisane zmiany",
    virtualworkshop_wheels_tyres: "Kola i opony"
  }
}, wm = {
  de: gm,
  it: mm,
  nl: _m,
  "en-GB": {
    translation: {
      bikematrix_poweredby: "Powered by Bike Matrix",
      bikeselector_addbike_brand_desc: "Your bike brand is typically found in the areas highlighted below.",
      bikeselector_addbike_brand_label: "Brand",
      bikeselector_addbike_brand_select: "Select your bike brand",
      bikeselector_addbike_find_btn: "Find my ride",
      bikeselector_addbike_framespec_desc: "Your bike frame spec is typically found in the areas highlighted below.",
      bikeselector_addbike_framespec_label: "Frame Spec",
      bikeselector_addbike_framespec_select: "Select your bike's frame spec",
      bikeselector_addbike_model_desc: "Your bike model is typically found in the areas highlighted below.",
      bikeselector_addbike_model_label: "Model",
      bikeselector_addbike_model_select: "Select your bike model",
      bikeselector_addbike_title: "Add A Bike",
      bikeselector_browse_back_btn: "Back to bike Lounge",
      bikeselector_browse_products_label: "Shop for compatible products",
      bikeselector_browse_shop_btn: "Shop Products",
      bikeselector_browse_title: "Start Shopping!",
      bikeselector_confirm_brandmodelframespec_label: "Brand, Model, Frame Series",
      bikeselector_confirm_confirm_btn: "Yep, that's my ride!",
      bikeselector_confirm_framesize_label: "Frame Size",
      bikeselector_confirm_notyourride_msg: "Not your ride? Select a field above to make a change.",
      bikeselector_confirm_title: "Confirm Your Ride",
      bikeselector_confirm_yearbikespec_label: "Year, Bike Spec",
      bikeselector_home_add_a_bike: "Add a bike below to see compatible parts.",
      bikeselector_home_add_btn: "Add A Bike",
      bikeselector_home_browse_btn: "Browse Compatiblity",
      bikeselector_home_close_btn: "Close",
      bikeselector_home_empty: "Your lounge is empty!",
      bikeselector_home_footer_message: "Bike manufacturers may change bike specifications without notice. Differences from stock specifications can impact compatibility results.",
      bikeselector_home_title: "My Bike Lounge",
      bikeselector_or: "Or",
      bikeselector_price_from: "From",
      bikeselector_search_bikespec_label: "Bike Spec",
      bikeselector_search_bikespec_select: "Select spec level",
      bikeselector_search_bikespec_select_all: "All",
      bikeselector_search_confirm_btn: "Confirm Selection",
      bikeselector_search_no_bikes_found: "No bikes found",
      bikeselector_search_number_bikes_found: "{{number_found}} bikes found",
      bikeselector_search_one_bike_found: "1 bike found",
      bikeselector_search_searching: "Searching...",
      bikeselector_search_title: "Bike Search",
      bikeselector_search_year_label: "Year",
      bikeselector_size_confirm_btn: "Confirm Size",
      bikeselector_size_framesize_desc: "Your bike frame size is typically found in the areas highlighted below.",
      bikeselector_size_framesize_label: "Frame Size",
      bikeselector_size_framesize_one_size: "One Size",
      bikeselector_size_framesize_select: "Select your frame size",
      bikeselector_size_title: "Select Your Size",
      bikeselectorbanner_mobiletitle: "Check Compatibility",
      bikeselectorbanner_title: "Select Your Bike To Check Compatibility",
      cancel: "Cancel",
      category_bike: "Bike",
      category_bottombracket: "Bottom Bracket",
      category_bottombracketpart: "Bottom Bracket Part",
      category_brakeadapter: "Brake Adapter",
      category_brakeadapterfront: "Brake Adapter Front",
      category_brakeadapterpart: "Brake Adapter Part",
      category_brakeadapterrear: "Brake Adapter Rear",
      category_brakecaliper: "Brake Caliper",
      category_brakecaliperfront: "Brake Caliper Front",
      category_brakecaliperpart: "Brake Caliper Part",
      category_brakecaliperrear: "Brake Caliper Rear",
      category_brakecaliperservicekit: "Brake Caliper Service Kit",
      category_brakelever: "Brake Lever",
      category_brakeleverlh: "Brake Lever LH",
      category_brakeleverpart: "Brake Lever Part",
      category_brakeleverrh: "Brake Lever RH",
      category_brakeleverservicekit: "Brake Lever Service Kit",
      category_brakepads: "Brake Pads",
      category_brakepadsfront: "Brake Pads Front",
      category_brakepadsrear: "Brake Pads Rear",
      category_brakerotor: "Brake Rotor",
      category_brakerotorfront: "Brake Rotor Front",
      category_brakerotorpart: "Brake Rotor Part",
      category_brakerotorrear: "Brake Rotor Rear",
      category_brakes: "Brakes",
      category_brakesystem: "Brake System",
      category_brakesystempart: "Brake System Part",
      category_cassette: "Cassette",
      category_cassettepart: "Cassette Part",
      category_chain: "Chain",
      category_chainguide: "Chainguide",
      category_chainguidepart: "Chainguide Part",
      category_chainjoiner: "Chain Joiner",
      category_chainring: "Chainring",
      category_chainringbolt: "Chainring Bolt",
      category_chainringspider: "Chainring Spider",
      category_cockpit: "Cockpit",
      category_crankpart: "Crank Part",
      category_crankset: "Crankset",
      category_drivetrain: "Drivetrain",
      category_dropperlever: "Dropper Lever",
      category_dropperleverpart: "Dropper Lever Part",
      category_ebikebattery: "eBike Battery",
      category_ebikebatterypart: "eBike Battery Part",
      category_ebikecharger: "eBike Charger",
      category_ebikechargerpart: "eBike Charger Part",
      category_ebikecontrolunit: "eBike Control Unit",
      category_ebikecontrolunitpart: "eBike Control Unit Part",
      category_ebikeinterconnect: "eBike Interconnect",
      category_ebikeinterconnectpart: "eBike Interconnect Part",
      category_ebikemotorsystem: "eBike Motor System",
      category_ebikemotorsystempart: "eBike Motor System Part",
      category_fork: "Fork",
      category_forkpart: "Fork Part",
      category_forkservicekit: "Fork Service Kit",
      category_frame: "Frame",
      category_framefork: "Frame & Fork",
      category_framepart: "Frame Part",
      category_frontaxle: "Front Axle",
      category_frontaxlepart: "Front Axle Part",
      category_frontderailleur: "Front Derailleur",
      category_frontderailleurpart: "Front Derailleur Part",
      category_fronthub: "Front Hub",
      category_fronthubpart: "Front Hub Part",
      category_frontwheel: "Front Wheel",
      category_grips: "Grips",
      category_gripspart: "Grips Part",
      category_handlebar: "Handlebar",
      category_headset: "Headset",
      category_headsetpart: "Headset Part",
      category_largestchainring: "Largest Chainring",
      category_nipple: "Nipple",
      category_pedals: "Pedals",
      category_pedalspart: "Pedals Part",
      category_rearaxle: "Rear Axle",
      category_rearaxlepart: "Rear Axle Part",
      category_rearderailleur: "Rear Derailleur",
      category_rearderailleurpart: "Rear Derailleur Part",
      category_rearhub: "Rear Hub",
      category_rearhubpart: "Rear Hub Part",
      category_rearshock: "Rear Shock",
      category_rearshockpart: "Rear Shock Part",
      category_rearshockservicekit: "Rear Shock Service Kit",
      category_rearwheel: "Rear Wheel",
      category_rim: "Rim",
      category_saddle: "Saddle",
      category_seatpost: "Seat Post",
      category_seatpostclamp: "Seat Post Clamp",
      category_seatpostclamppart: "Seat Post Clamp Part",
      category_seatpostpart: "Seat Post Part",
      category_seatpostservicekit: "Seat Post Service Kit",
      category_secondlargestchainring: "Second Largest Chainring",
      category_shiftadapter: "Shift Adapter",
      category_shiftadapterpart: "Shift Adapter Part",
      category_shiftbrakecombo: "Shift Brake Combo",
      category_shiftbrakecombopart: "Shift Brake Combo Part",
      category_shifter: "Shifter",
      category_shifteradapterlh: "Shifter Adapter LH",
      category_shifteradapterrh: "Shifter Adapter RH",
      category_shifterbrakecombolh: "Shifter Brake Combo LH",
      category_shifterbrakecomborh: "Shifter Brake Combo RH",
      category_shifterlh: "Shifter LH",
      category_shifterpart: "Shifter Part",
      category_shifterrh: "Shifter RH",
      category_spoke: "Spoke",
      category_stem: "Stem",
      category_stempart: "Stem Part",
      category_thirdlargestchainring: "Third Largest Chainring",
      category_tube: "Tube",
      category_tyre: "Tyre",
      category_tyrefront: "Tyre Front",
      category_tyrerear: "Tyre Rear",
      category_wheelset: "Wheelset",
      category_wheelstyres: "Wheels & Tyres",
      checksku_message_nobikefound: "Could not find a bike with the provided Bike Key",
      checksku_message_nocompatibilityinfo: "No Compatibility Information",
      checksku_message_noproductfound: "Could not find a part with the provided SKU/Barcode/Part No",
      checksku_message_notcompatible: "Not Compatible",
      checksku_warning_unabletoperformcheck: "Unable to perform compatibility check. Please check the compatibility manually.",
      compatible: "Compatible",
      compatible_check_notes: "Compatible - Check Notes",
      compatiblelist_header: "Compatible Products",
      compatiblelist_nobikeselected: "No bike selected. Click here to add your ride to check for compatible parts",
      compatiblelist_noresults: "No compatible products found",
      compatiblelist_pageone: "All products compatible with your bike can be seen <a>here</a>.",
      compatiblelist_unavailable: "Compatibility for this product category for your selected bike brand is coming soon!",
      confirm: "Confirm",
      copy: "Copy",
      edit: "Edit",
      error_add_component: "That component didn't stick. Try again and throw it a little harder this time.",
      error_add_custom_bike: "Oops... We couldn't create your custom bike. Refresh and give it another try.",
      error_find_products: "Hmmm… It looks like our wheels aren’t quite spinning. Refresh and try again.",
      error_find_products_no_results: "Hmmm... We can’t find that product. Try a different model number or adjust your spelling.",
      error_generic: "There was an error on the endpoint - {{endpoint_location}}",
      error_get_bike_bom: "That's embarrassing! Your bike build could not be retrieved. Refresh and try again.",
      error_invalid_email: "It doesn’t look like that’s a valid email, any other options?",
      error_remove_component: "This component really wants to stay on the bike. Refresh and try again.",
      error_revert_component: "This component really wants to stay on the bike. Refresh and try again.",
      error_save_custom_bike: "Our bad, your bike wasn’t saved. Try again and pedal a bit harder this time.",
      error_update_custom_bike: "Oh, that didn't work. Sorry! Refresh and try again.",
      error_update_custom_bike_name: "Couldn’t change your bike's name. Maybe it doesn't like that one. Refresh and try again",
      not_compatible: "Not Compatible",
      onboarding_explore: "Go Explore",
      onboarding_green_spanner: "Look for the Green Spanner",
      onboarding_green_spanner_description: "If a component has a green spanner, it can be swapped or removed from the build completely.",
      onboarding_linked_components: "Understand Linked Components",
      onboarding_linked_components_description: "Some parts (e.g. crankset + bottom bracket) are linked. To swap one, you may need to remove both—otherwise, the system may flag it as incompatible.",
      onboarding_next: "Next",
      onboarding_open_bike_build: "Open Your Bike Build",
      onboarding_open_bike_build_description: "When viewing your bike build expand the component groups to view the components that apply to your bike.",
      onboarding_preview: "Preview or Save Changes",
      onboarding_preview_description: "You can swap/remove components and confirm changes to explore upgrades. These can be undone anytime before saving. Once you save, changes can’t be reverted—only removed or replaced again.",
      onboarding_replacement: "Choose the Right Replacement",
      onboarding_replacement_description: "Use the barcode or manufacturer’s part number (found on packaging or your invoice) to search. You can also use the model number, but double-check—some numbers apply to multiple versions.",
      onboarding_settings: "View Settings Page",
      onboarding_settings_description: "Your settings page is where you can change the name of your bike, update your email, and where you'll find your Bike Matrix ID as well as your Share ID.",
      onboarding_title: "Virtual Workshop – Quick Guide",
      onboarding_vw_description: "Modify the digital record of your bike to match upgrades you’ve made, ensuring compatibility checks are as accurate as possible.",
      productcheck_nobikeselected_label: "Check Compatiblity",
      productcheck_nobikeselected_message: "Add your ride to check if this part fits",
      productcheck_questionmark: "?",
      save: "Save",
      share: "Share",
      variantselector_help_text: "These are the variants of the product which are compatible with your bike.",
      variantselector_help_text_clickable: "Click a variant to switch to that variant.",
      variantselector_help_text_showall: "Shows the compatibility of each variant of the product.",
      variantselector_no_compatible: "No compatible variants",
      variantselector_no_compatible_information: "No compatibility information",
      variantselector_title: "Compatible Variants",
      virtualworkshop_add_bike_text: "Your Bike Matrix ID can be found in the Settings page inside the Virtual Workshop",
      virtualworkshop_add_by_error: "Not a valid Bike Matrix ID",
      virtualworkshop_add_by_id: "Enter your Bike Matrix ID",
      virtualworkshop_are_you_sure: "Are you sure?",
      virtualworkshop_bm_id_text: "You can use either the Bike Matrix ID—found in the settings section of the Virtual Workshop—or Share ID which has been shared with you by someone else.",
      virtualworkshop_bom_title: "Bill Of Materials",
      virtualworkshop_build_text: "Build details",
      virtualworkshop_cockpit: "Cockpit",
      virtualworkshop_copy: "Copy",
      virtualworkshop_current: "Current",
      virtualworkshop_disclaimer: "When updating their bike record, the user takes full responsibility for ensuring components are correct, understanding that changes will affect compatibility results.",
      virtualworkshop_do_not_pass: "Virtual Workshop is not yet available for all Bike Brands.",
      virtualworkshop_drivetrain: "Drivetrain",
      virtualworkshop_e_drive: "eDrive",
      virtualworkshop_enter_button: "Enter Virtual Workshop",
      virtualworkshop_frame_fork: "Frame & Fork",
      virtualworkshop_intro_text: "Update your bike build with new components and save your bike by providing an email address. View shared bike builds and access your bike IDs",
      virtualworkshop_other_parts: "Other Parts",
      virtualworkshop_remove_btn: "Remove Component",
      virtualworkshop_remove_subtitle: "Removing a component will delete it from your bike build. This can affect compatibility for other parts.",
      virtualworkshop_remove_title: "Are you sure?",
      virtualworkshop_removed: "Removed",
      virtualworkshop_revert_btn: "Revert",
      virtualworkshop_save_btn: "Save Bike",
      virtualworkshop_save_text: "In order to store your custom bike we need to save it against your email address",
      virtualworkshop_save_title: "Enter your email",
      virtualworkshop_saved: "Your {{label}} has been saved!",
      virtualworkshop_search_text: "Enter Barcode or Search by Brand, Model, Part Number...",
      virtualworkshop_settings_bike_name: "Bike Name",
      virtualworkshop_settings_email: "Email",
      virtualworkshop_settings_id: "Bike Matrix ID",
      virtualworkshop_settings_share_id: "Share ID",
      virtualworkshop_shared_icon: "Shared with you",
      virtualworkshop_swap_btn: "Swap Component",
      virtualworkshop_title: "Virtual Workshop",
      virtualworkshop_unsaved_changes: "View unsaved changes",
      virtualworkshop_wheels_tyres: "Wheels & Tyres"
    }
  },
  fr: bm,
  "en-US": {
    translation: {
      bikematrix_poweredby: "Powered by Bike Matrix",
      bikeselector_addbike_brand_desc: "Your bike brand is typically found in the areas highlighted below.",
      bikeselector_addbike_brand_label: "Brand",
      bikeselector_addbike_brand_select: "Select your bike brand",
      bikeselector_addbike_find_btn: "Find my ride",
      bikeselector_addbike_framespec_desc: "Your bike frame spec is typically found in the areas highlighted below.",
      bikeselector_addbike_framespec_label: "Frame Spec",
      bikeselector_addbike_framespec_select: "Select your bike's frame spec",
      bikeselector_addbike_model_desc: "Your bike model is typically found in the areas highlighted below.",
      bikeselector_addbike_model_label: "Model",
      bikeselector_addbike_model_select: "Select your bike model",
      bikeselector_addbike_title: "Add A Bike",
      bikeselector_browse_back_btn: "Back to bike Lounge",
      bikeselector_browse_products_label: "Shop for compatible products",
      bikeselector_browse_shop_btn: "Shop Products",
      bikeselector_browse_title: "Start Shopping!",
      bikeselector_confirm_brandmodelframespec_label: "Brand, Model, Frame Series",
      bikeselector_confirm_confirm_btn: "Yep, that's my ride!",
      bikeselector_confirm_framesize_label: "Frame Size",
      bikeselector_confirm_notyourride_msg: "Not your ride? Select a field above to make a change.",
      bikeselector_confirm_title: "Confirm Your Ride",
      bikeselector_confirm_yearbikespec_label: "Year, Bike Spec",
      bikeselector_home_add_a_bike: "Add a bike below to see compatible parts.",
      bikeselector_home_add_btn: "Add A Bike",
      bikeselector_home_browse_btn: "Browse Compatiblity",
      bikeselector_home_close_btn: "Close",
      bikeselector_home_empty: "Your lounge is empty!",
      bikeselector_home_footer_message: "Bike manufacturers may change bike specifications without notice. Differences from stock specifications can impact compatibility results.",
      bikeselector_home_title: "My Bike Lounge",
      bikeselector_or: "Or",
      bikeselector_price_from: "From",
      bikeselector_search_bikespec_label: "Bike Spec",
      bikeselector_search_bikespec_select: "Select spec level",
      bikeselector_search_bikespec_select_all: "All",
      bikeselector_search_confirm_btn: "Confirm Selection",
      bikeselector_search_no_bikes_found: "No bikes found",
      bikeselector_search_number_bikes_found: "{{number_found}} bikes found",
      bikeselector_search_one_bike_found: "1 bike found",
      bikeselector_search_searching: "Searching...",
      bikeselector_search_title: "Bike Search",
      bikeselector_search_year_label: "Year",
      bikeselector_size_confirm_btn: "Confirm Size",
      bikeselector_size_framesize_desc: "Your bike frame size is typically found in the areas highlighted below.",
      bikeselector_size_framesize_label: "Frame Size",
      bikeselector_size_framesize_one_size: "One Size",
      bikeselector_size_framesize_select: "Select your frame size",
      bikeselector_size_title: "Select Your Size",
      bikeselectorbanner_mobiletitle: "Check Compatibility",
      bikeselectorbanner_title: "Select Your Bike To Check Compatibility",
      cancel: "Cancel",
      category_bike: "Bike",
      category_bottombracket: "Bottom Bracket",
      category_bottombracketpart: "Bottom Bracket Part",
      category_brakeadapter: "Brake Adapter",
      category_brakeadapterfront: "Brake Adapter Front",
      category_brakeadapterpart: "Brake Adapter Part",
      category_brakeadapterrear: "Brake Adapter Rear",
      category_brakecaliper: "Brake Caliper",
      category_brakecaliperfront: "Brake Caliper Front",
      category_brakecaliperpart: "Brake Caliper Part",
      category_brakecaliperrear: "Brake Caliper Rear",
      category_brakecaliperservicekit: "Brake Caliper Service Kit",
      category_brakelever: "Brake Lever",
      category_brakeleverlh: "Brake Lever LH",
      category_brakeleverpart: "Brake Lever Part",
      category_brakeleverrh: "Brake Lever RH",
      category_brakeleverservicekit: "Brake Lever Service Kit",
      category_brakepads: "Brake Pads",
      category_brakepadsfront: "Brake Pads Front",
      category_brakepadsrear: "Brake Pads Rear",
      category_brakerotor: "Brake Rotor",
      category_brakerotorfront: "Brake Rotor Front",
      category_brakerotorpart: "Brake Rotor Part",
      category_brakerotorrear: "Brake Rotor Rear",
      category_brakes: "Brakes",
      category_brakesystem: "Brake System",
      category_brakesystempart: "Brake System Part",
      category_cassette: "Cassette",
      category_cassettepart: "Cassette Part",
      category_chain: "Chain",
      category_chainguide: "Chainguide",
      category_chainguidepart: "Chainguide Part",
      category_chainjoiner: "Chain Joiner",
      category_chainring: "Chainring",
      category_chainringbolt: "Chainring Bolt",
      category_chainringspider: "Chainring Spider",
      category_cockpit: "Cockpit",
      category_crankpart: "Crank Part",
      category_crankset: "Crankset",
      category_drivetrain: "Drivetrain",
      category_dropperlever: "Dropper Lever",
      category_dropperleverpart: "Dropper Lever Part",
      category_ebikebattery: "eBike Battery",
      category_ebikebatterypart: "eBike Battery Part",
      category_ebikecharger: "eBike Charger",
      category_ebikechargerpart: "eBike Charger Part",
      category_ebikecontrolunit: "eBike Control Unit",
      category_ebikecontrolunitpart: "eBike Control Unit Part",
      category_ebikeinterconnect: "eBike Interconnect",
      category_ebikeinterconnectpart: "eBike Interconnect Part",
      category_ebikemotorsystem: "eBike Motor System",
      category_ebikemotorsystempart: "eBike Motor System Part",
      category_fork: "Fork",
      category_forkpart: "Fork Part",
      category_forkservicekit: "Fork Service Kit",
      category_frame: "Frame",
      category_framefork: "Frame & Fork",
      category_framepart: "Frame Part",
      category_frontaxle: "Front Axle",
      category_frontaxlepart: "Front Axle Part",
      category_frontderailleur: "Front Derailleur",
      category_frontderailleurpart: "Front Derailleur Part",
      category_fronthub: "Front Hub",
      category_fronthubpart: "Front Hub Part",
      category_frontwheel: "Front Wheel",
      category_grips: "Grips",
      category_gripspart: "Grips Part",
      category_handlebar: "Handlebar",
      category_headset: "Headset",
      category_headsetpart: "Headset Part",
      category_largestchainring: "Largest Chainring",
      category_nipple: "Nipple",
      category_pedals: "Pedals",
      category_pedalspart: "Pedals Part",
      category_rearaxle: "Rear Axle",
      category_rearaxlepart: "Rear Axle Part",
      category_rearderailleur: "Rear Derailleur",
      category_rearderailleurpart: "Rear Derailleur Part",
      category_rearhub: "Rear Hub",
      category_rearhubpart: "Rear Hub Part",
      category_rearshock: "Rear Shock",
      category_rearshockpart: "Rear Shock Part",
      category_rearshockservicekit: "Rear Shock Service Kit",
      category_rearwheel: "Rear Wheel",
      category_rim: "Rim",
      category_saddle: "Saddle",
      category_seatpost: "Seat Post",
      category_seatpostclamp: "Seat Post Clamp",
      category_seatpostclamppart: "Seat Post Clamp Part",
      category_seatpostpart: "Seat Post Part",
      category_seatpostservicekit: "Seat Post Service Kit",
      category_secondlargestchainring: "Second Largest Chainring",
      category_shiftadapter: "Shift Adapter",
      category_shiftadapterpart: "Shift Adapter Part",
      category_shiftbrakecombo: "Shift Brake Combo",
      category_shiftbrakecombopart: "Shift Brake Combo Part",
      category_shifter: "Shifter",
      category_shifteradapterlh: "Shifter Adapter LH",
      category_shifteradapterrh: "Shifter Adapter RH",
      category_shifterbrakecombolh: "Shifter Brake Combo LH",
      category_shifterbrakecomborh: "Shifter Brake Combo RH",
      category_shifterlh: "Shifter LH",
      category_shifterpart: "Shifter Part",
      category_shifterrh: "Shifter RH",
      category_spoke: "Spoke",
      category_stem: "Stem",
      category_stempart: "Stem Part",
      category_thirdlargestchainring: "Third Largest Chainring",
      category_tube: "Tube",
      category_tyre: "Tire",
      category_tyrefront: "Tyre Front",
      category_tyrerear: "Tyre Rear",
      category_wheelset: "Wheelset",
      category_wheelstyres: "Wheels & Tires",
      checksku_message_nobikefound: "Could not find a bike with the provided Bike Key",
      checksku_message_nocompatibilityinfo: "No Compatibility Information",
      checksku_message_noproductfound: "Could not find a part with the provided SKU/Barcode/Part No",
      checksku_message_notcompatible: "Not Compatible",
      checksku_warning_unabletoperformcheck: "Unable to perform compatibility check. Please check the compatibility manually",
      compatible: "Compatible",
      compatible_check_notes: "Compatible - Check Notes",
      compatiblelist_header: "Compatible Products",
      compatiblelist_nobikeselected: "No bike selected. Click here to add your ride to check for compatible parts",
      compatiblelist_noresults: "No compatible products found",
      compatiblelist_pageone: "All products compatible with your bike can be seen <a>here</a>.",
      compatiblelist_unavailable: "Compatibility for this product category for your selected bike brand is coming soon!",
      confirm: "Confirm",
      copy: "Copy",
      edit: "Edit",
      error_add_component: "That component didn't stick. Try again and throw it a little harder this time.",
      error_add_custom_bike: "Oops... We couldn't create your custom bike. Refresh and give it another try.",
      error_find_products: "Hmmm… It looks like our wheels aren’t quite spinning. Refresh and try again.",
      error_find_products_no_results: "Hmmm... We can’t find that product. Try a different model number or adjust your spelling.",
      error_generic: "There was an error on the endpoint - {{endpoint_location}}",
      error_get_bike_bom: "That's embarrassing! Your bike build could not be retrieved. Refresh and try again.",
      error_invalid_email: "It doesn’t look like that’s a valid email, any other options?",
      error_remove_component: "This component really wants to stay on the bike. Refresh and try again.",
      error_revert_component: "This component really wants to stay on the bike. Refresh and try again.",
      error_save_custom_bike: "Our bad, your bike wasn’t saved. Try again and pedal a bit harder this time.",
      error_update_custom_bike: "Oh, that didn't work. Sorry! Refresh and try again.",
      error_update_custom_bike_name: "Couldn’t change your bike's name. Maybe it doesn't like that one. Refresh and try again",
      not_compatible: "Not Compatible",
      onboarding_explore: "Go Explore",
      onboarding_green_spanner: "Look for the Green Spanner ",
      onboarding_green_spanner_description: "If a component has a green spanner, it can be swapped or removed from the build completely.",
      onboarding_linked_components: "Understand Linked Components",
      onboarding_linked_components_description: "Some parts (e.g. crankset + bottom bracket) are linked. To swap one, you may need to remove both—otherwise, the system may flag it as incompatible.",
      onboarding_next: "Next",
      onboarding_open_bike_build: "Open Your Bike Build",
      onboarding_open_bike_build_description: "When viewing your bike build expand the component groups to view the components that apply to your bike.",
      onboarding_preview: "Preview or Save Changes",
      onboarding_preview_description: "You can swap/remove components and confirm changes to explore upgrades. These can be undone anytime before saving. Once you save, changes can’t be reverted—only removed or replaced again.",
      onboarding_replacement: "Choose the Right Replacement",
      onboarding_replacement_description: "Use the barcode or manufacturer’s part number (found on packaging or your invoice) to search. You can also use the model number, but double-check—some numbers apply to multiple versions.",
      onboarding_settings: "View Settings Page",
      onboarding_settings_description: "Your settings page is where you can change the name of your bike, update your email, and where you'll find your Bike Matrix ID as well as your Share ID.",
      onboarding_title: "Virtual Workshop – Quick Guide",
      onboarding_vw_description: "Modify the digital record of your bike to match upgrades you’ve made, ensuring compatibility checks are as accurate as possible.",
      productcheck_nobikeselected_label: "Check Compatiblity",
      productcheck_nobikeselected_message: "Add your ride to check if this part fits",
      productcheck_questionmark: "?",
      save: "Save",
      share: "Share",
      variantselector_help_text: "These are the variants of the product which are compatible with your bike.",
      variantselector_help_text_clickable: "Click a variant to switch to that variant.",
      variantselector_help_text_showall: "Shows the compatibility of each variant of the product.",
      variantselector_no_compatible: "No compatible variants",
      variantselector_no_compatible_information: "No compatibility information",
      variantselector_title: "Compatible Variants",
      virtualworkshop_add_bike_text: "Your Bike Matrix ID can be found in the Settings page inside the Virtual Workshop",
      virtualworkshop_add_by_error: "Not a valid Bike Matrix ID",
      virtualworkshop_add_by_id: "Enter your Bike Matrix ID",
      virtualworkshop_are_you_sure: "Are you sure?",
      virtualworkshop_bm_id_text: "You can use either the Bike Matrix ID—found in the settings section of the Virtual Workshop—or Share ID which has been shared with you by someone else.",
      virtualworkshop_bom_title: "Bill Of Materials",
      virtualworkshop_build_text: "Build details",
      virtualworkshop_cockpit: "Cockpit",
      virtualworkshop_copy: "Copy",
      virtualworkshop_current: "Current",
      virtualworkshop_disclaimer: "When updating their bike record, the user takes full responsibility for ensuring components are correct, understanding that changes will affect compatibility results.",
      virtualworkshop_do_not_pass: "Virtual Workshop is not yet available for all Bike Brands.",
      virtualworkshop_drivetrain: "Drivetrain",
      virtualworkshop_e_drive: "eDrive",
      virtualworkshop_enter_button: "Enter Virtual Workshop",
      virtualworkshop_frame_fork: "Frame & Fork",
      virtualworkshop_intro_text: "Update your bike build with new components and save your bike by providing an email address. View shared bike builds and access your bike IDs",
      virtualworkshop_other_parts: "Other Parts",
      virtualworkshop_remove_btn: "Remove Component",
      virtualworkshop_remove_subtitle: "Removing a component will delete it from your bike build. This can affect compatibility for other parts.",
      virtualworkshop_remove_title: "Are you sure?",
      virtualworkshop_removed: "Removed",
      virtualworkshop_revert_btn: "Revert",
      virtualworkshop_save_btn: "Save Bike",
      virtualworkshop_save_text: "In order to store your custom bike we need to save it against your email address",
      virtualworkshop_save_title: "Enter your email",
      virtualworkshop_saved: "Your {{label}} has been saved!",
      virtualworkshop_search_text: "Enter Barcode or Search by Brand, Model, Part Number...",
      virtualworkshop_settings_bike_name: "Bike Name",
      virtualworkshop_settings_email: "Email",
      virtualworkshop_settings_id: "Bike Matrix ID",
      virtualworkshop_settings_share_id: "Share ID",
      virtualworkshop_shared_icon: "Shared with you",
      virtualworkshop_swap_btn: "Swap Component",
      virtualworkshop_title: "Virtual Workshop",
      virtualworkshop_unsaved_changes: "View unsaved changes",
      virtualworkshop_wheels_tyres: "Wheels & Tyres"
    }
  },
  es: vm,
  fi: ym,
  pl: km
}, {
  slice: xm,
  forEach: Cm
} = [];
function Sm(i) {
  return Cm.call(xm.call(arguments, 1), (e) => {
    if (e)
      for (const t in e)
        i[t] === void 0 && (i[t] = e[t]);
  }), i;
}
const fs = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, zm = (i, e, t) => {
  const r = t || {};
  r.path = r.path || "/";
  const a = encodeURIComponent(e);
  let o = `${i}=${a}`;
  if (r.maxAge > 0) {
    const n = r.maxAge - 0;
    if (Number.isNaN(n))
      throw new Error("maxAge should be a Number");
    o += `; Max-Age=${Math.floor(n)}`;
  }
  if (r.domain) {
    if (!fs.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!fs.test(r.path))
      throw new TypeError("option path is invalid");
    o += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}, hs = {
  create(i, e, t, r) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    t && (a.expires = /* @__PURE__ */ new Date(), a.expires.setTime(a.expires.getTime() + t * 60 * 1e3)), r && (a.domain = r), document.cookie = zm(i, encodeURIComponent(e), a);
  },
  read(i) {
    const e = `${i}=`, t = document.cookie.split(";");
    for (let r = 0; r < t.length; r++) {
      let a = t[r];
      for (; a.charAt(0) === " "; )
        a = a.substring(1, a.length);
      if (a.indexOf(e) === 0)
        return a.substring(e.length, a.length);
    }
    return null;
  },
  remove(i) {
    this.create(i, "", -1);
  }
};
var Am = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(i) {
    let {
      lookupCookie: e
    } = i;
    if (e && typeof document < "u")
      return hs.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(i, e) {
    let {
      lookupCookie: t,
      cookieMinutes: r,
      cookieDomain: a,
      cookieOptions: o
    } = e;
    t && typeof document < "u" && hs.create(t, i, r, a, o);
  }
}, Tm = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(i) {
    var r;
    let {
      lookupQuerystring: e
    } = i, t;
    if (typeof window < "u") {
      let {
        search: a
      } = window.location;
      !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (a = window.location.hash.substring(window.location.hash.indexOf("?")));
      const n = a.substring(1).split("&");
      for (let s = 0; s < n.length; s++) {
        const l = n[s].indexOf("=");
        l > 0 && n[s].substring(0, l) === e && (t = n[s].substring(l + 1));
      }
    }
    return t;
  }
};
let Dr = null;
const gs = () => {
  if (Dr !== null)
    return Dr;
  try {
    Dr = window !== "undefined" && window.localStorage !== null;
    const i = "i18next.translate.boo";
    window.localStorage.setItem(i, "foo"), window.localStorage.removeItem(i);
  } catch {
    Dr = !1;
  }
  return Dr;
};
var Pm = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(i) {
    let {
      lookupLocalStorage: e
    } = i;
    if (e && gs())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(i, e) {
    let {
      lookupLocalStorage: t
    } = e;
    t && gs() && window.localStorage.setItem(t, i);
  }
};
let jr = null;
const ms = () => {
  if (jr !== null)
    return jr;
  try {
    jr = window !== "undefined" && window.sessionStorage !== null;
    const i = "i18next.translate.boo";
    window.sessionStorage.setItem(i, "foo"), window.sessionStorage.removeItem(i);
  } catch {
    jr = !1;
  }
  return jr;
};
var Em = {
  name: "sessionStorage",
  lookup(i) {
    let {
      lookupSessionStorage: e
    } = i;
    if (e && ms())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(i, e) {
    let {
      lookupSessionStorage: t
    } = e;
    t && ms() && window.sessionStorage.setItem(t, i);
  }
}, Lm = {
  name: "navigator",
  lookup(i) {
    const e = [];
    if (typeof navigator < "u") {
      const {
        languages: t,
        userLanguage: r,
        language: a
      } = navigator;
      if (t)
        for (let o = 0; o < t.length; o++)
          e.push(t[o]);
      r && e.push(r), a && e.push(a);
    }
    return e.length > 0 ? e : void 0;
  }
}, Mm = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(i) {
    let {
      htmlTag: e
    } = i, t;
    const r = e || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, Bm = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(i) {
    var a;
    let {
      lookupFromPathIndex: e
    } = i;
    if (typeof window > "u")
      return;
    const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(t) ? (a = t[typeof e == "number" ? e : 0]) == null ? void 0 : a.replace("/", "") : void 0;
  }
}, Nm = {
  name: "subdomain",
  lookup(i) {
    var a, o;
    let {
      lookupFromSubdomainIndex: e
    } = i;
    const t = typeof e == "number" ? e + 1 : 1, r = typeof window < "u" && ((o = (a = window.location) == null ? void 0 : a.hostname) == null ? void 0 : o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (r)
      return r[t];
  }
};
function Om() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
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
  };
}
class Lc {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e || {
      languageUtils: {}
    }, this.options = Sm(t, this.options || {}, Om()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (a) => a.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(Am), this.addDetector(Tm), this.addDetector(Pm), this.addDetector(Em), this.addDetector(Lm), this.addDetector(Mm), this.addDetector(Bm), this.addDetector(Nm);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect(e) {
    e || (e = this.options.order);
    let t = [];
    return e.forEach((r) => {
      if (this.detectors[r]) {
        let a = this.detectors[r].lookup(this.options);
        a && typeof a == "string" && (a = [a]), a && (t = t.concat(a));
      }
    }), t = t.map((r) => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
  }
  cacheUserLanguage(e, t) {
    t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(e, this.options);
    }));
  }
}
Lc.type = "languageDetector";
we.use(Dd).use(Lc).init({
  debug: !1,
  resources: wm,
  detection: {
    // order and from where user language should be detected
    order: ["htmlTag", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "path", "subdomain"]
  },
  supportedLngs: ["en", "en-GB", "en-US", "de", "fr", "es", "it", "nl", "fi", "pl"],
  fallbackLng: "en-GB",
  interpolation: {
    escapeValue: !1
    // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
});
const Im = `.variant-selector-wrapper{display:flex;flex-direction:column;border-radius:8px;gap:.25rem}.title{font-size:16px;line-height:20px;font-weight:600;padding-bottom:.25rem;color:#000;display:flex;align-items:center;justify-content:space-between;gap:1rem;font-family:nunito}.indicator-wrapper{display:grid;grid-template-columns:repeat(2,minmax(10px,1fr));row-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;grid-auto-columns:auto}@media screen and (max-width: 991px){.indicator-wrapper{grid-template-columns:minmax(10px,1fr)}}.full-width{grid-template-columns:minmax(10px,1fr)}.loading-wrapper{background-color:#f3f4f6;border:1px solid rgb(209 213 219);min-height:45px;border-radius:8px;display:flex;justify-content:center;align-items:center}
`, Rm = `.alt-indicator{border-radius:8px;border:1px solid #000;background-color:#fff;color:#000;font-weight:600;font-size:14px;display:flex;justify-content:space-between;align-items:center;gap:5px;padding:10px;text-decoration:none;transition:all ease-in-out .2s;font-family:nunito}.alt-indicator:hover{transform:scale(1.01)}.alt-is-active{box-shadow:0 3px 7px #00000040;font-weight:700}.variant-title{text-wrap:nowrap;text-overflow:ellipsis;white-space:nowrap;margin:0;overflow:hidden}
`, Dm = ({
  item: i,
  clickable: e,
  currentVariant: t
}) => {
  const [r, a] = B(!1);
  return V(() => {
    t === i.id ? a(!0) : a(!1);
  }, [t]), p(F, {
    children: [p("style", {
      type: "text/css",
      children: Rm
    }), p("div", {
      className: "alt-indicator-wrapper",
      children: e && p("a", {
        href: window.location.pathname + `?variant=${i.id}`,
        className: `alt-indicator ${r ? "alt-is-active" : ""}`,
        style: {
          borderWidth: r ? "2px" : "1px"
        },
        children: p("div", {
          className: "variant-title",
          children: i.title
        })
      })
    })]
  });
}, jm = `.question-button{cursor:pointer;display:flex;align-items:center;position:relative;background-color:#000;justify-content:center;height:24px;width:24px;border-radius:100%}.question-popup{position:absolute;border-radius:8px;background-color:#000;top:0;right:0;height:0;width:0;overflow:hidden;opacity:0;z-index:1}.question-popup .information{padding:12px;color:#fff;width:200px;font-size:12px}
`, Fm = ({
  showall: i,
  clickable: e
}) => {
  const t = K(null), [r, a] = B(!1), {
    t: o
  } = J(), n = () => {
    r ? r && ne.to(t.current, {
      width: 0,
      height: 0,
      opacity: 0,
      onComplete: () => a(!1)
    }) : ne.to(t.current, {
      height: "auto",
      width: "auto",
      opacity: 1,
      onComplete: () => a(!0)
    });
  };
  return p(F, {
    children: [p("style", {
      type: "text/css",
      children: jm
    }), p("div", {
      className: "question-button",
      onClick: n,
      children: [p(Sc, {
        height: 12
      }), p("div", {
        className: "question-popup",
        ref: t,
        children: p("div", {
          className: "information",
          children: [!i && o("variantselector_help_text"), " ", i && o("variantselector_help_text_showall"), " ", e && o("variantselector_help_text_clickable")]
        })
      })]
    })]
  });
}, Vm = `.indicator{border-radius:8px;border:1px solid #10b981;background-color:#ecfdf5;color:#022c22;font-weight:600;font-size:14px;display:flex;justify-content:space-between;align-items:center;gap:5px;padding:10px;text-decoration:none;transition:all ease-in-out .2s;font-family:nunito}.indicator:hover{transform:scale(1.01)}.is-active{box-shadow:0 3px 7px #00000040;font-weight:700;border-width:2px}.non-clickable-indicator{display:flex;justify-content:space-between;align-items:center;border-radius:8px;padding:10px;font-weight:600;font-size:14px}.icon-wrapper{min-height:24px;min-width:24px;display:flex;align-items:center}.variant-title{text-wrap:nowrap;text-overflow:ellipsis;white-space:nowrap;margin:0;overflow:hidden}
`, $m = ({
  item: i,
  clickable: e,
  currentVariant: t,
  override: r
}) => {
  const [a, o] = B(!1);
  return V(() => {
    t === i.id ? o(!0) : o(!1);
  }, [t]), p(F, {
    children: [p("style", {
      type: "text/css",
      children: Vm
    }), (e || r) && p("a", {
      href: window.location.pathname + `?variant=${i.id}`,
      className: `indicator ${a ? "is-active" : ""}`,
      style: !i.warning && i.compatible ? {
        backgroundColor: "#ECFDF5",
        borderColor: "#10B981",
        borderStyle: "solid",
        color: "#022c22",
        borderWidth: a ? "2px" : "1px"
      } : i.warning && i.compatible ? {
        backgroundColor: "#FEFBEC",
        borderColor: "#FBA157",
        borderStyle: "solid",
        color: "#451a03",
        borderWidth: a ? "2px" : "1px"
      } : i.compatible === !1 ? {
        backgroundColor: "#FCF3F2",
        borderColor: "#EF4444",
        borderStyle: "solid",
        color: "#450a0a",
        borderWidth: a ? "2px" : "1px"
      } : {
        backgroundColor: "#fff",
        borderColor: "#000",
        borderStyle: "solid",
        color: "#000",
        borderWidth: a ? "2px" : "1px"
      },
      children: [p("div", {
        className: "variant-title",
        children: i.title
      }), p("div", {
        className: "icon-wrapper",
        children: i.warning && i.compatible ? p(Cr, {
          height: 23,
          width: 23
        }) : !i.warning && i.compatible ? p(xr, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : i.compatible === !1 ? p(Gi, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : p(F, {})
      })]
    }), !e && !r && p("div", {
      className: `non-clickable-indicator ${a ? "is-active" : ""}`,
      style: !i.warning && i.compatible ? {
        borderColor: "#10B981",
        borderStyle: "solid",
        color: "#022c22",
        borderWidth: a ? "2px" : "1px"
      } : i.warning && i.compatible ? {
        borderColor: "#FBA157",
        borderStyle: "solid",
        color: "#451a03",
        borderWidth: a ? "2px" : "1px"
      } : i.compatible === !1 ? {
        borderColor: "#EF4444",
        borderStyle: "solid",
        color: "#450a0a",
        borderWidth: a ? "2px" : "1px"
      } : {
        backgroundColor: "#fff",
        borderColor: "#000",
        borderStyle: "solid",
        color: "#000",
        borderWidth: a ? "2px" : "1px"
      },
      children: [p("div", {
        className: "variant-title",
        children: i.title
      }), p("div", {
        className: "icon-wrapper",
        children: i.warning && i.compatible ? p(Cr, {
          height: 23,
          width: 23
        }) : !i.warning && i.compatible ? p(xr, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : i.compatible === !1 ? p(Gi, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : p(F, {})
      })]
    })]
  });
}, Hm = ({
  data: i,
  currentVariant: e,
  title: t,
  clickable: r,
  showall: a,
  override: o,
  fullWidth: n,
  sku: s,
  error: l
}) => {
  const [c, d] = B({
    type: "loading",
    display: !0
  }), [u, f] = B([]), [h, _] = B([]), y = window.BikeMatrix.getConfig(), {
    t: v
  } = J(), g = () => {
    var C, S, z;
    d({
      type: "loading",
      display: !0
    });
    let k = [];
    i.map((x) => {
      x.compatible && k.push(x);
    }), f(k);
    let w = [];
    (S = (C = W.value) == null ? void 0 : C.compatibleCollections) != null && S.error || (z = W.value) == null || z.compatibleCollections.map((x) => {
      y.productCollections.includes(x.handle) && w.push(x.handle);
    }), _(w);
  }, b = () => {
    d({
      type: "loading",
      display: !0
    }), !h.length && !u.length && !o && d({
      type: "noInformation",
      display: !1
    }), !h.length && !u.length && o && d({
      type: "generic",
      display: !0
    }), h.length && !u.length && o && d({
      type: "compatible",
      display: !0
    }), h.length && !u.length && !o && d({
      type: "noCompatible",
      display: !0
    }), h.length && u.length && d({
      type: "compatible",
      display: !0
    });
  };
  return V(() => {
    g();
  }, [W.value, i, s]), V(() => {
    b();
  }, [W.value, i, s, h, u]), p(F, {
    children: [p("style", {
      type: "text/css",
      children: Im
    }), c.display && p("div", {
      className: "variant-selector-wrapper",
      children: p("div", {
        className: "title",
        children: [t, p(Fm, {
          clickable: r,
          showall: a
        })]
      })
    }), l && p(Je, {
      messages: l,
      left: !0,
      margin: 10
    }), c.type === "loading" && c.display ? p("div", {
      className: `indicator-wrapper ${n || o ? "full-width" : ""}`,
      children: [p("div", {
        className: "loading-wrapper",
        children: p(bt, {
          isLoading: !0,
          colour: "#d1d5db"
        })
      }), p("div", {
        className: "loading-wrapper",
        children: p(bt, {
          isLoading: !0,
          colour: "#d1d5db"
        })
      })]
    }) : c.type === "generic" && c.display ? p("div", {
      className: "indicator-wrapper",
      children: i.map((k, w) => p(Dm, {
        item: k,
        clickable: !0,
        currentVariant: e
      }, w))
    }) : c.type === "noCompatible" && c.display ? p("div", {
      className: "indicator-wrapper full-width",
      children: p("div", {
        className: "loading-wrapper",
        children: v("variantselector_no_compatible")
      })
    }) : c.type === "compatible" && c.display ? p("div", {
      className: `indicator-wrapper ${n || o ? "full-width" : ""}`,
      children: i.map((k, w) => {
        if (!(!k.compatible && !o && !a))
          return p($m, {
            item: k,
            clickable: r,
            currentVariant: e,
            override: o
          }, w);
      })
    }) : c.type === "noInformation" && c.display ? p("div", {
      className: "indicator-wrapper full-width",
      children: p("div", {
        className: "loading-wrapper",
        children: v("variantselector_no_compatible_information")
      })
    }) : p(F, {})]
  });
}, Um = ({
  "data-variants": i,
  "data-delimiter": e,
  "data-showall": t,
  "data-clickable": r,
  "data-query-param": a,
  "data-full-width": o,
  "data-title": n,
  "data-no-variants": s,
  "data-show": l,
  "data-route-variant": c,
  "data-padding-top": d,
  "data-padding-bottom": u,
  "data-override": f,
  "data-sku": h
}) => {
  var E;
  const _ = W.value, y = window.BikeMatrix.getConfig(), [v, g] = B([]), [b, k] = B(null);
  let w = ((E = hr()) == null ? void 0 : E.language) || "en-GB";
  const C = new ze(y.apiUrl, y.apiKey, y.apiToken, y.isShopify), S = h || y.sku, [z, x] = B(""), {
    t: T
  } = J(), A = async () => {
    const M = i.split("~");
    let O = [], j = [];
    if (M.map((N) => {
      let D = N.split(e || "|");
      O.push(D[0].length > 2 ? D[0] : D[2]), j.push({
        title: D[1],
        id: D[2],
        sku: D[0].length > 2 ? D[0] : D[2],
        index: parseInt(D[3])
      });
    }), _) {
      x("");
      const N = await C.checkSkusCompatibilityWithResults(_.key, O, w);
      if (!N.success) {
        x(N.error), y.logLevel === "verbose" && console.error(N.logError);
        return;
      }
      let D = [];
      N.data.map((P) => {
        j.map((L) => {
          P.sku === L.sku && D.push({
            bikeKey: P.bikeKey,
            sku: P.sku,
            compatible: P.compatible,
            compatibilityMessage: P.compatibilityMessage,
            warning: P.warning,
            warningMessage: P.warningMessage,
            compatibilityLogGuid: P.compatibilityLogGuid,
            title: L.title,
            id: L.id,
            index: L.index
          });
        });
      }), g(D.sort((P, L) => P.index - L.index));
    } else {
      let N = [];
      j.map((D) => {
        N.push({
          sku: D.sku,
          title: D.title,
          id: D.id,
          index: D.index
        });
      }), g(N.sort((D, P) => D.index - P.index));
    }
  };
  return V(() => {
    A();
  }, [_, S]), V(() => {
    const O = new URLSearchParams(window.location.search).get("variant"), j = window.location.href;
    if (v && c === "true" && !O) {
      let N = !1;
      j.charAt(j.length - 1) === "?" && (N = !0);
      for (let D = 0; D < v.length; D++)
        if (v[D].compatible) {
          window.location.href = window.location + (N ? "variant=" : "?variant=") + v[D].id;
          break;
        }
    }
    O ? k(O) : v.length && k(v[0].id);
  }, [v]), p("div", {
    style: {
      paddingTop: `${d}px`,
      paddingBottom: `${u}px`
    },
    children: s !== "true" && p(Hm, {
      data: v,
      currentVariant: b,
      showall: t === "true",
      override: f === "true",
      clickable: r === "true",
      fullWidth: o === "true" || f === "true",
      title: n || T("variantselector_title"),
      sku: S,
      error: z
    })
  });
}, Gm = typeof window < "u";
function St(i, e, t = [], r = null) {
  Hc((o) => Ra.value ? p(i, {
    ...o
  }) : p(F, {}), e, t, r);
}
function Km() {
  St(Eg, "bikematrix-bikeselector", [], {
    shadow: !0
  }), St(Mg, "bikematrix-productresult", ["data-sku"], {
    shadow: !0
  }), St(Ig, "bikematrix-collectionresult", ["data-product-id", "data-product-skus", "data-padding-top", "data-padding-bottom"], {
    shadow: !0
  }), St(Ac, "bikematrix-compatibilitylabel", ["data-type"], {
    shadow: !0
  }), St($g, "bikematrix-compatiblelist", ["data-title"]), St(Gg, "bikematrix-bikeselectorbanner", ["data-title", "data-mobile-title", "data-color", "data-full-width", "data-font-color", "data-show"], {
    shadow: !0
  }), St(Tc, "bikematrix-bikon", ["data-color"], {
    shadow: !0
  }), St(Um, "bikematrix-variantselector", ["data-title", "data-variants", "data-delimiter", "data-showall", "data-clickable", "data-query-param", "data-full-width", "data-show", "data-route-variant", "data-padding-top", "data-padding-bottom", "data-override", "data-sku"], {
    shadow: !0
  });
}
function Wm() {
  if (!Gm)
    return null;
  const i = Mu.getInstance(), e = {
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
  return typeof process < "u" && process.env.NODE_ENV === "development" && (e.core = i), window.BikeMatrix = e, Km(), document.currentScript && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => e.init()) : e.init()), e;
}
const Ym = Wm();
export {
  Ym as default
};
