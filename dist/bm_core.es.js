var gi, G, ka, Sa, Gt, so, Ea, Rn, Ba, si = {}, La = [], Vu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, sn = Array.isArray;
function wt(i, e) {
  for (var t in e)
    i[t] = e[t];
  return i;
}
function Ta(i) {
  var e = i.parentNode;
  e && e.removeChild(i);
}
function q(i, e, t) {
  var r, n, s, o = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? n = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? gi.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null)
    for (s in i.defaultProps)
      o[s] === void 0 && (o[s] = i.defaultProps[s]);
  return Jr(i, o, r, n, null);
}
function Jr(i, e, t, r, n) {
  var s = { type: i, props: e, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n ?? ++ka, __i: -1, __u: 0 };
  return n == null && G.vnode != null && G.vnode(s), s;
}
function $u() {
  return { current: null };
}
function V(i) {
  return i.children;
}
function Je(i, e) {
  this.props = i, this.context = e;
}
function vr(i, e) {
  if (e == null)
    return i.__ ? vr(i.__, i.__i + 1) : null;
  for (var t; e < i.__k.length; e++)
    if ((t = i.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof i.type == "function" ? vr(i) : null;
}
function Fa(i) {
  var e, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, e = 0; e < i.__k.length; e++)
      if ((t = i.__k[e]) != null && t.__e != null) {
        i.__e = i.__c.base = t.__e;
        break;
      }
    return Fa(i);
  }
}
function zn(i) {
  (!i.__d && (i.__d = !0) && Gt.push(i) && !Oi.__r++ || so !== G.debounceRendering) && ((so = G.debounceRendering) || Ea)(Oi);
}
function Oi() {
  var i, e, t, r, n, s, o, a, l;
  for (Gt.sort(Rn); i = Gt.shift(); )
    i.__d && (e = Gt.length, r = void 0, s = (n = (t = i).__v).__e, a = [], l = [], (o = t.__P) && ((r = wt({}, n)).__v = n.__v + 1, G.vnode && G.vnode(r), bs(o, r, n, t.__n, o.ownerSVGElement !== void 0, 32 & n.__u ? [s] : null, a, s ?? vr(n), !!(32 & n.__u), l), r.__v = n.__v, r.__.__k[r.__i] = r, Ma(a, r, l), r.__e != s && Fa(r)), Gt.length > e && Gt.sort(Rn));
  Oi.__r = 0;
}
function Na(i, e, t, r, n, s, o, a, l, u, c) {
  var d, f, h, b, m, x = r && r.__k || La, w = e.length;
  for (t.__d = l, ju(t, e, x), l = t.__d, d = 0; d < w; d++)
    (h = t.__k[d]) != null && typeof h != "boolean" && typeof h != "function" && (f = h.__i === -1 ? si : x[h.__i] || si, h.__i = d, bs(i, h, f, n, s, o, a, l, u, c), b = h.__e, h.ref && f.ref != h.ref && (f.ref && vs(f.ref, null, h), c.push(h.ref, h.__c || b, h)), m == null && b != null && (m = b), 65536 & h.__u || f.__k === h.__k ? l = Pa(h, l, i) : typeof h.type == "function" && h.__d !== void 0 ? l = h.__d : b && (l = b.nextSibling), h.__d = void 0, h.__u &= -196609);
  t.__d = l, t.__e = m;
}
function ju(i, e, t) {
  var r, n, s, o, a, l = e.length, u = t.length, c = u, d = 0;
  for (i.__k = [], r = 0; r < l; r++)
    o = r + d, (n = i.__k[r] = (n = e[r]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? Jr(null, n, null, null, null) : sn(n) ? Jr(V, { children: n }, null, null, null) : n.constructor === void 0 && n.__b > 0 ? Jr(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = i, n.__b = i.__b + 1, a = Uu(n, t, o, c), n.__i = a, s = null, a !== -1 && (c--, (s = t[a]) && (s.__u |= 131072)), s == null || s.__v === null ? (a == -1 && d--, typeof n.type != "function" && (n.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? c > l - o ? d += a - o : d-- : a < o ? a == o - 1 && (d = a - o) : d = 0, a !== r + d && (n.__u |= 65536))) : (s = t[o]) && s.key == null && s.__e && !(131072 & s.__u) && (s.__e == i.__d && (i.__d = vr(s)), qn(s, s, !1), t[o] = null, c--);
  if (c)
    for (r = 0; r < u; r++)
      (s = t[r]) != null && !(131072 & s.__u) && (s.__e == i.__d && (i.__d = vr(s)), qn(s, s));
}
function Pa(i, e, t) {
  var r, n;
  if (typeof i.type == "function") {
    for (r = i.__k, n = 0; r && n < r.length; n++)
      r[n] && (r[n].__ = i, e = Pa(r[n], e, t));
    return e;
  }
  i.__e != e && (t.insertBefore(i.__e, e || null), e = i.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function xt(i, e) {
  return e = e || [], i == null || typeof i == "boolean" || (sn(i) ? i.some(function(t) {
    xt(t, e);
  }) : e.push(i)), e;
}
function Uu(i, e, t, r) {
  var n = i.key, s = i.type, o = t - 1, a = t + 1, l = e[t];
  if (l === null || l && n == l.key && s === l.type && !(131072 & l.__u))
    return t;
  if (r > (l != null && !(131072 & l.__u) ? 1 : 0))
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
function oo(i, e, t) {
  e[0] === "-" ? i.setProperty(e, t ?? "") : i[e] = t == null ? "" : typeof t != "number" || Vu.test(e) ? t : t + "px";
}
function _i(i, e, t, r, n) {
  var s;
  e:
    if (e === "style")
      if (typeof t == "string")
        i.style.cssText = t;
      else {
        if (typeof r == "string" && (i.style.cssText = r = ""), r)
          for (e in r)
            t && e in t || oo(i.style, e, "");
        if (t)
          for (e in t)
            r && t[e] === r[e] || oo(i.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in i ? e.toLowerCase().slice(2) : e.slice(2), i.l || (i.l = {}), i.l[e + s] = t, t ? r ? t.u = r.u : (t.u = Date.now(), i.addEventListener(e, s ? lo : ao, s)) : i.removeEventListener(e, s ? lo : ao, s);
    else {
      if (n)
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
function ao(i) {
  if (this.l) {
    var e = this.l[i.type + !1];
    if (i.t) {
      if (i.t <= e.u)
        return;
    } else
      i.t = Date.now();
    return e(G.event ? G.event(i) : i);
  }
}
function lo(i) {
  if (this.l)
    return this.l[i.type + !0](G.event ? G.event(i) : i);
}
function bs(i, e, t, r, n, s, o, a, l, u) {
  var c, d, f, h, b, m, x, w, g, v, y, _, A, D, k, C = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & t.__u && (l = !!(32 & t.__u), s = [a = e.__e = t.__e]), (c = G.__b) && c(e);
  e:
    if (typeof C == "function")
      try {
        if (w = e.props, g = (c = C.contextType) && r[c.__c], v = c ? g ? g.props.value : c.__ : r, t.__c ? x = (d = e.__c = t.__c).__ = d.__E : ("prototype" in C && C.prototype.render ? e.__c = d = new C(w, v) : (e.__c = d = new Je(w, v), d.constructor = C, d.render = Gu), g && g.sub(d), d.props = w, d.state || (d.state = {}), d.context = v, d.__n = r, f = d.__d = !0, d.__h = [], d._sb = []), d.__s == null && (d.__s = d.state), C.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = wt({}, d.__s)), wt(d.__s, C.getDerivedStateFromProps(w, d.__s))), h = d.props, b = d.state, d.__v = e, f)
          C.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
          if (C.getDerivedStateFromProps == null && w !== h && d.componentWillReceiveProps != null && d.componentWillReceiveProps(w, v), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(w, d.__s, v) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (d.props = w, d.state = d.__s, d.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(S) {
              S && (S.__ = e);
            }), y = 0; y < d._sb.length; y++)
              d.__h.push(d._sb[y]);
            d._sb = [], d.__h.length && o.push(d);
            break e;
          }
          d.componentWillUpdate != null && d.componentWillUpdate(w, d.__s, v), d.componentDidUpdate != null && d.__h.push(function() {
            d.componentDidUpdate(h, b, m);
          });
        }
        if (d.context = v, d.props = w, d.__P = i, d.__e = !1, _ = G.__r, A = 0, "prototype" in C && C.prototype.render) {
          for (d.state = d.__s, d.__d = !1, _ && _(e), c = d.render(d.props, d.state, d.context), D = 0; D < d._sb.length; D++)
            d.__h.push(d._sb[D]);
          d._sb = [];
        } else
          do
            d.__d = !1, _ && _(e), c = d.render(d.props, d.state, d.context), d.state = d.__s;
          while (d.__d && ++A < 25);
        d.state = d.__s, d.getChildContext != null && (r = wt(wt({}, r), d.getChildContext())), f || d.getSnapshotBeforeUpdate == null || (m = d.getSnapshotBeforeUpdate(h, b)), Na(i, sn(k = c != null && c.type === V && c.key == null ? c.props.children : c) ? k : [k], e, t, r, n, s, o, a, l, u), d.base = e.__e, e.__u &= -161, d.__h.length && o.push(d), x && (d.__E = d.__ = null);
      } catch (S) {
        e.__v = null, l || s != null ? (e.__e = a, e.__u |= l ? 160 : 32, s[s.indexOf(a)] = null) : (e.__e = t.__e, e.__k = t.__k), G.__e(S, e, t);
      }
    else
      s == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Hu(t.__e, e, t, r, n, s, o, l, u);
  (c = G.diffed) && c(e);
}
function Ma(i, e, t) {
  e.__d = void 0;
  for (var r = 0; r < t.length; r++)
    vs(t[r], t[++r], t[++r]);
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
function Hu(i, e, t, r, n, s, o, a, l) {
  var u, c, d, f, h, b, m, x = t.props, w = e.props, g = e.type;
  if (g === "svg" && (n = !0), s != null) {
    for (u = 0; u < s.length; u++)
      if ((h = s[u]) && "setAttribute" in h == !!g && (g ? h.localName === g : h.nodeType === 3)) {
        i = h, s[u] = null;
        break;
      }
  }
  if (i == null) {
    if (g === null)
      return document.createTextNode(w);
    i = n ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, w.is && w), s = null, a = !1;
  }
  if (g === null)
    x === w || a && i.data === w || (i.data = w);
  else {
    if (s = s && gi.call(i.childNodes), x = t.props || si, !a && s != null)
      for (x = {}, u = 0; u < i.attributes.length; u++)
        x[(h = i.attributes[u]).name] = h.value;
    for (u in x)
      h = x[u], u == "children" || (u == "dangerouslySetInnerHTML" ? d = h : u === "key" || u in w || _i(i, u, null, h, n));
    for (u in w)
      h = w[u], u == "children" ? f = h : u == "dangerouslySetInnerHTML" ? c = h : u == "value" ? b = h : u == "checked" ? m = h : u === "key" || a && typeof h != "function" || x[u] === h || _i(i, u, h, x[u], n);
    if (c)
      a || d && (c.__html === d.__html || c.__html === i.innerHTML) || (i.innerHTML = c.__html), e.__k = [];
    else if (d && (i.innerHTML = ""), Na(i, sn(f) ? f : [f], e, t, r, n && g !== "foreignObject", s, o, s ? s[0] : t.__k && vr(t, 0), a, l), s != null)
      for (u = s.length; u--; )
        s[u] != null && Ta(s[u]);
    a || (u = "value", b !== void 0 && (b !== i[u] || g === "progress" && !b || g === "option" && b !== x[u]) && _i(i, u, b, x[u], !1), u = "checked", m !== void 0 && m !== i[u] && _i(i, u, m, x[u], !1));
  }
  return i;
}
function vs(i, e, t) {
  try {
    typeof i == "function" ? i(e) : i.current = e;
  } catch (r) {
    G.__e(r, t);
  }
}
function qn(i, e, t) {
  var r, n;
  if (G.unmount && G.unmount(i), (r = i.ref) && (r.current && r.current !== i.__e || vs(r, null, e)), (r = i.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        G.__e(s, e);
      }
    r.base = r.__P = null, i.__c = void 0;
  }
  if (r = i.__k)
    for (n = 0; n < r.length; n++)
      r[n] && qn(r[n], e, t || typeof i.type != "function");
  t || i.__e == null || Ta(i.__e), i.__ = i.__e = i.__d = void 0;
}
function Gu(i, e, t) {
  return this.constructor(i, t);
}
function It(i, e, t) {
  var r, n, s, o;
  G.__ && G.__(i, e), n = (r = typeof t == "function") ? null : t && t.__k || e.__k, s = [], o = [], bs(e, i = (!r && t || e).__k = q(V, null, [i]), n || si, si, e.ownerSVGElement !== void 0, !r && t ? [t] : n ? null : e.firstChild ? gi.call(e.childNodes) : null, s, !r && t ? t : n ? n.__e : e.firstChild, r, o), Ma(s, i, o);
}
function ws(i, e) {
  It(i, e, ws);
}
function xs(i, e, t) {
  var r, n, s, o, a = wt({}, i.props);
  for (s in i.type && i.type.defaultProps && (o = i.type.defaultProps), e)
    s == "key" ? r = e[s] : s == "ref" ? n = e[s] : a[s] = e[s] === void 0 && o !== void 0 ? o[s] : e[s];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? gi.call(arguments, 2) : t), Jr(i.type, a, r || i.key, n || i.ref, null);
}
function mi(i, e) {
  var t = { __c: e = "__cC" + Ba++, __: i, Consumer: function(r, n) {
    return r.children(n);
  }, Provider: function(r) {
    var n, s;
    return this.getChildContext || (n = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && n.some(function(a) {
        a.__e = !0, zn(a);
      });
    }, this.sub = function(o) {
      n.push(o);
      var a = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        n.splice(n.indexOf(o), 1), a && a.call(o);
      };
    }), r.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
gi = La.slice, G = { __e: function(i, e, t, r) {
  for (var n, s, o; e = e.__; )
    if ((n = e.__c) && !n.__)
      try {
        if ((s = n.constructor) && s.getDerivedStateFromError != null && (n.setState(s.getDerivedStateFromError(i)), o = n.__d), n.componentDidCatch != null && (n.componentDidCatch(i, r || {}), o = n.__d), o)
          return n.__E = n;
      } catch (a) {
        i = a;
      }
  throw i;
} }, ka = 0, Sa = function(i) {
  return i != null && i.constructor == null;
}, Je.prototype.setState = function(i, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = wt({}, this.state), typeof i == "function" && (i = i(wt({}, t), this.props)), i && wt(t, i), i != null && this.__v && (e && this._sb.push(e), zn(this));
}, Je.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), zn(this));
}, Je.prototype.render = V, Gt = [], Ea = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Rn = function(i, e) {
  return i.__v.__b - e.__v.__b;
}, Oi.__r = 0, Ba = 0;
function ys() {
  return (ys = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
    }
    return i;
  }).apply(this, arguments);
}
var Yu = ["context", "children"];
function Wu(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var e = i.children, t = function(r, n) {
    if (r == null)
      return {};
    var s, o, a = {}, l = Object.keys(r);
    for (o = 0; o < l.length; o++)
      n.indexOf(s = l[o]) >= 0 || (a[s] = r[s]);
    return a;
  }(i, Yu);
  return xs(e, t);
}
function Ku() {
  var i = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(i), this._vdom = q(Wu, ys({}, this._props, { context: i.detail.context }), function e(t, r) {
    if (t.nodeType === 3)
      return t.data;
    if (t.nodeType !== 1)
      return null;
    var n = [], s = {}, o = 0, a = t.attributes, l = t.childNodes;
    for (o = a.length; o--; )
      a[o].name !== "slot" && (s[a[o].name] = a[o].value, s[Oa(a[o].name)] = a[o].value);
    for (o = l.length; o--; ) {
      var u = e(l[o], null), c = l[o].slot;
      c ? s[c] = q(uo, { name: c }, u) : n[o] = u;
    }
    var d = r ? q(uo, null, n) : n;
    return q(r || t.nodeName.toLowerCase(), s, d);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? ws : It)(this._vdom, this._root);
}
function Oa(i) {
  return i.replace(/-(\w)/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Zu(i, e, t) {
  if (this._vdom) {
    var r = {};
    r[i] = t = t ?? void 0, r[Oa(i)] = t, this._vdom = xs(this._vdom, r), It(this._vdom, this._root);
  }
}
function Ju() {
  It(this._vdom = null, this._root);
}
function uo(i, e) {
  var t = this;
  return q("slot", ys({}, i, { ref: function(r) {
    r ? (t.ref = r, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = e;
    }, r.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Xu(i, e, t, r) {
  function n() {
    var s = Reflect.construct(HTMLElement, [], n);
    return s._vdomComponent = i, s._root = r && r.shadow ? s.attachShadow({ mode: r.mode || "open" }) : s, s;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = Ku, n.prototype.attributeChangedCallback = Zu, n.prototype.disconnectedCallback = Ju, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), n.observedAttributes = t, t.forEach(function(s) {
    Object.defineProperty(n.prototype, s, { get: function() {
      return this._vdom.props[s];
    }, set: function(o) {
      this._vdom ? this.attributeChangedCallback(s, null, o) : (this._props || (this._props = {}), this._props[s] = o, this.connectedCallback());
      var a = typeof o;
      o != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(s, o);
    } });
  }), customElements.define(e || i.tagName || i.displayName || i.name, n);
}
var Rt, se, hn, co, wr = 0, Ia = [], Bi = [], ae = G, po = ae.__b, fo = ae.__r, ho = ae.diffed, go = ae.__c, mo = ae.unmount, bo = ae.__;
function Tr(i, e) {
  ae.__h && ae.__h(se, i, wr || e), wr = 0;
  var t = se.__H || (se.__H = { __: [], __h: [] });
  return i >= t.__.length && t.__.push({ __V: Bi }), t.__[i];
}
function M(i) {
  return wr = 1, Ra(qa, i);
}
function Ra(i, e, t) {
  var r = Tr(Rt++, 2);
  if (r.t = i, !r.__c && (r.__ = [t ? t(e) : qa(void 0, e), function(a) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, a);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = se, !se.u)) {
    var n = function(a, l, u) {
      if (!r.__c.__H)
        return !0;
      var c = r.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (c.every(function(f) {
        return !f.__N;
      }))
        return !s || s.call(this, a, l, u);
      var d = !1;
      return c.forEach(function(f) {
        if (f.__N) {
          var h = f.__[0];
          f.__ = f.__N, f.__N = void 0, h !== f.__[0] && (d = !0);
        }
      }), !(!d && r.__c.props === a) && (!s || s.call(this, a, l, u));
    };
    se.u = !0;
    var s = se.shouldComponentUpdate, o = se.componentWillUpdate;
    se.componentWillUpdate = function(a, l, u) {
      if (this.__e) {
        var c = s;
        s = void 0, n(a, l, u), s = c;
      }
      o && o.call(this, a, l, u);
    }, se.shouldComponentUpdate = n;
  }
  return r.__N || r.__;
}
function $(i, e) {
  var t = Tr(Rt++, 3);
  !ae.__s && Cs(t.__H, e) && (t.__ = i, t.i = e, se.__H.__h.push(t));
}
function Fr(i, e) {
  var t = Tr(Rt++, 4);
  !ae.__s && Cs(t.__H, e) && (t.__ = i, t.i = e, se.__h.push(t));
}
function Y(i) {
  return wr = 5, at(function() {
    return { current: i };
  }, []);
}
function Qu(i, e, t) {
  wr = 6, Fr(function() {
    return typeof i == "function" ? (i(e()), function() {
      return i(null);
    }) : i ? (i.current = e(), function() {
      return i.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(i));
}
function at(i, e) {
  var t = Tr(Rt++, 7);
  return Cs(t.__H, e) ? (t.__V = i(), t.i = e, t.__h = i, t.__V) : t.__;
}
function za(i, e) {
  return wr = 8, at(function() {
    return i;
  }, e);
}
function _s(i) {
  var e = se.context[i.__c], t = Tr(Rt++, 9);
  return t.c = i, e ? (t.__ == null && (t.__ = !0, e.sub(se)), e.props.value) : i.__;
}
function ec(i, e) {
  ae.useDebugValue && ae.useDebugValue(e ? e(i) : i);
}
function tc() {
  var i = Tr(Rt++, 11);
  if (!i.__) {
    for (var e = se.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    i.__ = "P" + t[0] + "-" + t[1]++;
  }
  return i.__;
}
function rc() {
  for (var i; i = Ia.shift(); )
    if (i.__P && i.__H)
      try {
        i.__H.__h.forEach(Li), i.__H.__h.forEach(Vn), i.__H.__h = [];
      } catch (e) {
        i.__H.__h = [], ae.__e(e, i.__v);
      }
}
ae.__b = function(i) {
  se = null, po && po(i);
}, ae.__ = function(i, e) {
  i && e.__k && e.__k.__m && (i.__m = e.__k.__m), bo && bo(i, e);
}, ae.__r = function(i) {
  fo && fo(i), Rt = 0;
  var e = (se = i.__c).__H;
  e && (hn === se ? (e.__h = [], se.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = Bi, t.__N = t.i = void 0;
  })) : (e.__h.forEach(Li), e.__h.forEach(Vn), e.__h = [], Rt = 0)), hn = se;
}, ae.diffed = function(i) {
  ho && ho(i);
  var e = i.__c;
  e && e.__H && (e.__H.__h.length && (Ia.push(e) !== 1 && co === ae.requestAnimationFrame || ((co = ae.requestAnimationFrame) || ic)(rc)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== Bi && (t.__ = t.__V), t.i = void 0, t.__V = Bi;
  })), hn = se = null;
}, ae.__c = function(i, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(Li), t.__h = t.__h.filter(function(r) {
        return !r.__ || Vn(r);
      });
    } catch (r) {
      e.some(function(n) {
        n.__h && (n.__h = []);
      }), e = [], ae.__e(r, t.__v);
    }
  }), go && go(i, e);
}, ae.unmount = function(i) {
  mo && mo(i);
  var e, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      Li(r);
    } catch (n) {
      e = n;
    }
  }), t.__H = void 0, e && ae.__e(e, t.__v));
};
var vo = typeof requestAnimationFrame == "function";
function ic(i) {
  var e, t = function() {
    clearTimeout(r), vo && cancelAnimationFrame(e), setTimeout(i);
  }, r = setTimeout(t, 100);
  vo && (e = requestAnimationFrame(t));
}
function Li(i) {
  var e = se, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), se = e;
}
function Vn(i) {
  var e = se;
  i.__c = i.__(), se = e;
}
function Cs(i, e) {
  return !i || i.length !== e.length || e.some(function(t, r) {
    return t !== i[r];
  });
}
function qa(i, e) {
  return typeof e == "function" ? e(i) : e;
}
function Va(i, e) {
  for (var t in e)
    i[t] = e[t];
  return i;
}
function $n(i, e) {
  for (var t in i)
    if (t !== "__source" && !(t in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && i[r] !== e[r])
      return !0;
  return !1;
}
function jn(i, e) {
  this.props = i, this.context = e;
}
function nc(i, e) {
  function t(n) {
    var s = this.props.ref, o = s == n.ref;
    return !o && s && (s.call ? s(null) : s.current = null), e ? !e(this.props, n) || !o : $n(this.props, n);
  }
  function r(n) {
    return this.shouldComponentUpdate = t, q(i, n);
  }
  return r.displayName = "Memo(" + (i.displayName || i.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(jn.prototype = new Je()).isPureReactComponent = !0, jn.prototype.shouldComponentUpdate = function(i, e) {
  return $n(this.props, i) || $n(this.state, e);
};
var wo = G.__b;
G.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), wo && wo(i);
};
var sc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function As(i) {
  function e(t) {
    var r = Va({}, t);
    return delete r.ref, i(r, t.ref || null);
  }
  return e.$$typeof = sc, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", e;
}
var xo = function(i, e) {
  return i == null ? null : xt(xt(i).map(e));
}, oc = { map: xo, forEach: xo, count: function(i) {
  return i ? xt(i).length : 0;
}, only: function(i) {
  var e = xt(i);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: xt }, ac = G.__e;
G.__e = function(i, e, t, r) {
  if (i.then) {
    for (var n, s = e; s = s.__; )
      if ((n = s.__c) && n.__c)
        return e.__e == null && (e.__e = t.__e, e.__k = t.__k), n.__c(i, e);
  }
  ac(i, e, t, r);
};
var yo = G.unmount;
function $a(i, e, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), i.__c.__H = null), (i = Va({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = e), i.__c = null), i.__k = i.__k && i.__k.map(function(r) {
    return $a(r, e, t);
  })), i;
}
function ja(i, e, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(r) {
    return ja(r, e, t);
  }), i.__c && i.__c.__P === e && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function Ti() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ua(i) {
  var e = i.__.__c;
  return e && e.__a && e.__a(i);
}
function lc(i) {
  var e, t, r;
  function n(s) {
    if (e || (e = i()).then(function(o) {
      t = o.default || o;
    }, function(o) {
      r = o;
    }), r)
      throw r;
    if (!t)
      throw e;
    return q(t, s);
  }
  return n.displayName = "Lazy", n.__f = !0, n;
}
function Gr() {
  this.u = null, this.o = null;
}
G.unmount = function(i) {
  var e = i.__c;
  e && e.__R && e.__R(), e && 32 & i.__u && (i.type = null), yo && yo(i);
}, (Ti.prototype = new Je()).__c = function(i, e) {
  var t = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(t);
  var n = Ua(r.__v), s = !1, o = function() {
    s || (s = !0, t.__R = null, n ? n(a) : a());
  };
  t.__R = o;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = ja(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), i.then(o, o);
}, Ti.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ti.prototype.render = function(i, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = $a(this.__b, t, r.__O = r.__P);
    }
    this.__b = null;
  }
  var n = e.__a && q(V, null, i.fallback);
  return n && (n.__u &= -33), [q(V, null, e.__a ? null : i.children), n];
};
var _o = function(i, e, t) {
  if (++t[1] === t[0] && i.o.delete(e), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.o.size))
    for (t = i.u; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      i.u = t = t[2];
    }
};
function uc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function cc(i) {
  var e = this, t = i.i;
  e.componentWillUnmount = function() {
    It(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== t && e.componentWillUnmount(), e.l || (e.i = t, e.l = { nodeType: 1, parentNode: t, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, n) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), It(q(uc, { context: e.context }, i.__v), e.l);
}
function dc(i, e) {
  var t = q(cc, { __v: i, i: e });
  return t.containerInfo = e, t;
}
(Gr.prototype = new Je()).__a = function(i) {
  var e = this, t = Ua(e.__v), r = e.o.get(i);
  return r[0]++, function(n) {
    var s = function() {
      e.props.revealOrder ? (r.push(n), _o(e, i, r)) : n();
    };
    t ? t(s) : s();
  };
}, Gr.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = xt(i.children);
  i.revealOrder && i.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; )
    this.o.set(e[t], this.u = [1, 0, this.u]);
  return i.children;
}, Gr.prototype.componentDidUpdate = Gr.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(e, t) {
    _o(i, t, e);
  });
};
var Ha = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, pc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, fc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, hc = /[A-Z0-9]/g, gc = typeof document < "u", mc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function bc(i, e, t) {
  return e.__k == null && (e.textContent = ""), It(i, e), typeof t == "function" && t(), i ? i.__c : null;
}
function vc(i, e, t) {
  return ws(i, e), typeof t == "function" && t(), i ? i.__c : null;
}
Je.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(Je.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(e) {
    Object.defineProperty(this, i, { configurable: !0, writable: !0, value: e });
  } });
});
var Co = G.event;
function wc() {
}
function xc() {
  return this.cancelBubble;
}
function yc() {
  return this.defaultPrevented;
}
G.event = function(i) {
  return Co && (i = Co(i)), i.persist = wc, i.isPropagationStopped = xc, i.isDefaultPrevented = yc, i.nativeEvent = i;
};
var Ds, _c = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ao = G.vnode;
G.vnode = function(i) {
  typeof i.type == "string" && function(e) {
    var t = e.props, r = e.type, n = {};
    for (var s in t) {
      var o = t[s];
      if (!(s === "value" && "defaultValue" in t && o == null || gc && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var a = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : a === "translate" && o === "no" ? o = !1 : a === "ondoubleclick" ? s = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || mc(t.type) ? a === "onfocus" ? s = "onfocusin" : a === "onblur" ? s = "onfocusout" : fc.test(s) ? s = a : r.indexOf("-") === -1 && pc.test(s) ? s = s.replace(hc, "-$&").toLowerCase() : o === null && (o = void 0) : a = s = "oninput", a === "oninput" && n[s = a] && (s = "oninputCapture"), n[s] = o;
      }
    }
    r == "select" && n.multiple && Array.isArray(n.value) && (n.value = xt(t.children).forEach(function(l) {
      l.props.selected = n.value.indexOf(l.props.value) != -1;
    })), r == "select" && n.defaultValue != null && (n.value = xt(t.children).forEach(function(l) {
      l.props.selected = n.multiple ? n.defaultValue.indexOf(l.props.value) != -1 : n.defaultValue == l.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", _c)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), e.props = n;
  }(i), i.$$typeof = Ha, Ao && Ao(i);
};
var Do = G.__r;
G.__r = function(i) {
  Do && Do(i), Ds = i.__c;
};
var ko = G.diffed;
G.diffed = function(i) {
  ko && ko(i);
  var e = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value), Ds = null;
};
var Cc = { ReactCurrentDispatcher: { current: { readContext: function(i) {
  return Ds.__n[i.__c].props.value;
} } } };
function Ac(i) {
  return q.bind(null, i);
}
function on(i) {
  return !!i && i.$$typeof === Ha;
}
function Dc(i) {
  return on(i) && i.type === V;
}
function kc(i) {
  return on(i) ? xs.apply(null, arguments) : i;
}
function Sc(i) {
  return !!i.__k && (It(null, i), !0);
}
function Ec(i) {
  return i && (i.base || i.nodeType === 1 && i) || null;
}
var Bc = function(i, e) {
  return i(e);
}, Lc = function(i, e) {
  return i(e);
}, Tc = V;
function Ga(i) {
  i();
}
function Fc(i) {
  return i;
}
function Nc() {
  return [!1, Ga];
}
var Pc = Fr, Mc = on;
function Oc(i, e) {
  var t = e(), r = M({ h: { __: t, v: e } }), n = r[0].h, s = r[1];
  return Fr(function() {
    n.__ = t, n.v = e, gn(n) && s({ h: n });
  }, [i, t, e]), $(function() {
    return gn(n) && s({ h: n }), i(function() {
      gn(n) && s({ h: n });
    });
  }, [i]), t;
}
function gn(i) {
  var e, t, r = i.v, n = i.__;
  try {
    var s = r();
    return !((e = n) === (t = s) && (e !== 0 || 1 / e == 1 / t) || e != e && t != t);
  } catch {
    return !0;
  }
}
var be = { useState: M, useId: tc, useReducer: Ra, useEffect: $, useLayoutEffect: Fr, useInsertionEffect: Pc, useTransition: Nc, useDeferredValue: Fc, useSyncExternalStore: Oc, startTransition: Ga, useRef: Y, useImperativeHandle: Qu, useMemo: at, useCallback: za, useContext: _s, useDebugValue: ec, version: "17.0.2", Children: oc, render: bc, hydrate: vc, unmountComponentAtNode: Sc, createPortal: dc, createElement: q, createContext: mi, createFactory: Ac, cloneElement: kc, createRef: $u, Fragment: V, isValidElement: on, isElement: Mc, isFragment: Dc, findDOMNode: Ec, Component: Je, PureComponent: jn, memo: nc, forwardRef: As, flushSync: Lc, unstable_batchedUpdates: Bc, StrictMode: Tc, Suspense: Ti, SuspenseList: Gr, lazy: lc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Cc }, mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ic(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
const Rc = (...i) => {
  console != null && console.warn && (Zt(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), console.warn(...i));
}, So = {}, Un = (...i) => {
  Zt(i[0]) && So[i[0]] || (Zt(i[0]) && (So[i[0]] = /* @__PURE__ */ new Date()), Rc(...i));
}, Ya = (i, e) => () => {
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
}, Eo = (i, e, t) => {
  i.loadNamespaces(e, Ya(i, t));
}, Bo = (i, e, t, r) => {
  Zt(t) && (t = [t]), t.forEach((n) => {
    i.options.ns.indexOf(n) < 0 && i.options.ns.push(n);
  }), i.loadLanguages(e, Ya(i, r));
}, zc = (i, e, t = {}) => !e.languages || !e.languages.length ? (Un("i18n.languages were undefined or empty", e.languages), !0) : e.hasLoadedNamespace(i, {
  lng: t.lng,
  precheck: (r, n) => {
    var s;
    if (((s = t.bindI18n) == null ? void 0 : s.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !n(r.isLanguageChangingTo, i))
      return !1;
  }
}), Zt = (i) => typeof i == "string", qc = (i) => typeof i == "object" && i !== null, Vc = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, $c = {
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
}, jc = (i) => $c[i], Uc = (i) => i.replace(Vc, jc);
let Hn = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Uc
};
const Hc = (i = {}) => {
  Hn = {
    ...Hn,
    ...i
  };
}, Gc = () => Hn;
let Wa;
const Yc = (i) => {
  Wa = i;
}, xr = () => Wa, Wc = {
  type: "3rdParty",
  init(i) {
    Hc(i.options.react), Yc(i);
  }
}, Kc = mi();
class Zc {
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
const Jc = (i, e) => {
  const t = Y();
  return $(() => {
    t.current = e ? t.current : i;
  }, [i, e]), t.current;
}, Ka = (i, e, t, r) => i.getFixedT(e, t, r), Xc = (i, e, t, r) => za(Ka(i, e, t, r), [i, e, t, r]), X = (i, e = {}) => {
  var y, _, A, D;
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: n
  } = _s(Kc) || {}, s = t || r || xr();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new Zc()), !s) {
    Un("You will need to pass in an i18next instance by using initReactI18next");
    const k = (S, E) => Zt(E) ? E : qc(E) && Zt(E.defaultValue) ? E.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, C = [k, {}, !1];
    return C.t = k, C.i18n = {}, C.ready = !1, C;
  }
  (y = s.options.react) != null && y.wait && Un("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...Gc(),
    ...s.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: l
  } = o;
  let u = i || n || ((_ = s.options) == null ? void 0 : _.defaultNS);
  u = Zt(u) ? [u] : u || ["translation"], (D = (A = s.reportNamespaces).addUsedNamespaces) == null || D.call(A, u);
  const c = (s.isInitialized || s.initializedStoreOnce) && u.every((k) => zc(k, s, o)), d = Xc(s, e.lng || null, o.nsMode === "fallback" ? u : u[0], l), f = () => d, h = () => Ka(s, e.lng || null, o.nsMode === "fallback" ? u : u[0], l), [b, m] = M(f);
  let x = u.join();
  e.lng && (x = `${e.lng}${x}`);
  const w = Jc(x), g = Y(!0);
  $(() => {
    const {
      bindI18n: k,
      bindI18nStore: C
    } = o;
    g.current = !0, !c && !a && (e.lng ? Bo(s, e.lng, u, () => {
      g.current && m(h);
    }) : Eo(s, u, () => {
      g.current && m(h);
    })), c && w && w !== x && g.current && m(h);
    const S = () => {
      g.current && m(h);
    };
    return k && (s == null || s.on(k, S)), C && (s == null || s.store.on(C, S)), () => {
      g.current = !1, s && (k == null || k.split(" ").forEach((E) => s.off(E, S))), C && s && C.split(" ").forEach((E) => s.store.off(E, S));
    };
  }, [s, x]), $(() => {
    g.current && c && m(f);
  }, [s, l, c]);
  const v = [b, s, c];
  if (v.t = b, v.i18n = s, v.ready = c, c || !c && !a)
    return v;
  throw new Promise((k) => {
    e.lng ? Bo(s, e.lng, u, () => k()) : Eo(s, u, () => k());
  });
};
var Qc = Symbol.for("preact-signals");
function an() {
  if (Pt > 1)
    Pt--;
  else {
    for (var i, e = !1; Xr !== void 0; ) {
      var t = Xr;
      for (Xr = void 0, Gn++; t !== void 0; ) {
        var r = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && Ja(t))
          try {
            t.c();
          } catch (n) {
            e || (i = n, e = !0);
          }
        t = r;
      }
    }
    if (Gn = 0, Pt--, e)
      throw i;
  }
}
function ed(i) {
  if (Pt > 0)
    return i();
  Pt++;
  try {
    return i();
  } finally {
    an();
  }
}
var re = void 0, Xr = void 0, Pt = 0, Gn = 0, Ii = 0;
function Za(i) {
  if (re !== void 0) {
    var e = i.n;
    if (e === void 0 || e.t !== re)
      return e = { i: 0, S: i, p: re.s, n: void 0, t: re, e: void 0, x: void 0, r: e }, re.s !== void 0 && (re.s.n = e), re.s = e, i.n = e, 32 & re.f && i.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = re.s, e.n = void 0, re.s.n = e, re.s = e), e;
  }
}
function ye(i) {
  this.v = i, this.i = 0, this.n = void 0, this.t = void 0;
}
ye.prototype.brand = Qc;
ye.prototype.h = function() {
  return !0;
};
ye.prototype.S = function(i) {
  this.t !== i && i.e === void 0 && (i.x = this.t, this.t !== void 0 && (this.t.e = i), this.t = i);
};
ye.prototype.U = function(i) {
  if (this.t !== void 0) {
    var e = i.e, t = i.x;
    e !== void 0 && (e.x = t, i.e = void 0), t !== void 0 && (t.e = e, i.x = void 0), i === this.t && (this.t = t);
  }
};
ye.prototype.subscribe = function(i) {
  var e = this;
  return Ss(function() {
    var t = e.value, r = re;
    re = void 0;
    try {
      i(t);
    } finally {
      re = r;
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
  var i = re;
  re = void 0;
  try {
    return this.value;
  } finally {
    re = i;
  }
};
Object.defineProperty(ye.prototype, "value", { get: function() {
  var i = Za(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Gn > 100)
      throw new Error("Cycle detected");
    this.v = i, this.i++, Ii++, Pt++;
    try {
      for (var e = this.t; e !== void 0; e = e.x)
        e.t.N();
    } finally {
      an();
    }
  }
} });
function De(i) {
  return new ye(i);
}
function Ja(i) {
  for (var e = i.s; e !== void 0; e = e.n)
    if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
      return !0;
  return !1;
}
function Xa(i) {
  for (var e = i.s; e !== void 0; e = e.n) {
    var t = e.S.n;
    if (t !== void 0 && (e.r = t), e.S.n = e, e.i = -1, e.n === void 0) {
      i.s = e;
      break;
    }
  }
}
function Qa(i) {
  for (var e = i.s, t = void 0; e !== void 0; ) {
    var r = e.p;
    e.i === -1 ? (e.S.U(e), r !== void 0 && (r.n = e.n), e.n !== void 0 && (e.n.p = r)) : t = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = r;
  }
  i.s = t;
}
function Nr(i) {
  ye.call(this, void 0), this.x = i, this.s = void 0, this.g = Ii - 1, this.f = 4;
}
(Nr.prototype = new ye()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ii))
    return !0;
  if (this.g = Ii, this.f |= 1, this.i > 0 && !Ja(this))
    return this.f &= -2, !0;
  var i = re;
  try {
    Xa(this), re = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return re = i, Qa(this), this.f &= -2, !0;
};
Nr.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.S(e);
  }
  ye.prototype.S.call(this, i);
};
Nr.prototype.U = function(i) {
  if (this.t !== void 0 && (ye.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.U(e);
  }
};
Nr.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i = this.t; i !== void 0; i = i.x)
      i.t.N();
  }
};
Object.defineProperty(Nr.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var i = Za(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function td(i) {
  return new Nr(i);
}
function el(i) {
  var e = i.u;
  if (i.u = void 0, typeof e == "function") {
    Pt++;
    var t = re;
    re = void 0;
    try {
      e();
    } catch (r) {
      throw i.f &= -2, i.f |= 8, ks(i), r;
    } finally {
      re = t, an();
    }
  }
}
function ks(i) {
  for (var e = i.s; e !== void 0; e = e.n)
    e.S.U(e);
  i.x = void 0, i.s = void 0, el(i);
}
function rd(i) {
  if (re !== this)
    throw new Error("Out-of-order effect");
  Qa(this), re = i, this.f &= -2, 8 & this.f && ks(this), an();
}
function bi(i) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
bi.prototype.c = function() {
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
bi.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, el(this), Xa(this), Pt++;
  var i = re;
  return re = this, rd.bind(this, i);
};
bi.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Xr, Xr = this);
};
bi.prototype.d = function() {
  this.f |= 8, 1 & this.f || ks(this);
};
function Ss(i) {
  var e = new bi(i);
  try {
    e.c();
  } catch (t) {
    throw e.d(), t;
  }
  return e.d.bind(e);
}
var bn;
function Pr(i, e) {
  G[i] = e.bind(null, G[i] || function() {
  });
}
function Ri(i) {
  bn && bn(), bn = i && i.S();
}
function tl(i) {
  var e = this, t = i.data, r = nd(t);
  r.value = t;
  var n = at(function() {
    for (var s = e.__v; s = s.__; )
      if (s.__c) {
        s.__c.__$f |= 4;
        break;
      }
    return e.__$u.c = function() {
      var o, a = e.__$u.S(), l = n.value;
      a(), Sa(l) || ((o = e.base) == null ? void 0 : o.nodeType) !== 3 ? (e.__$f |= 1, e.setState({})) : e.base.data = l;
    }, td(function() {
      var o = r.value.value;
      return o === 0 ? 0 : o === !0 ? "" : o || "";
    });
  }, []);
  return n.value;
}
tl.displayName = "_st";
Object.defineProperties(ye.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: tl }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
Pr("__b", function(i, e) {
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
Pr("__r", function(i, e) {
  Ri();
  var t, r = e.__c;
  r && (r.__$f &= -2, (t = r.__$u) === void 0 && (r.__$u = t = function(n) {
    var s;
    return Ss(function() {
      s = this;
    }), s.c = function() {
      r.__$f |= 1, r.setState({});
    }, s;
  }())), Ri(t), i(e);
});
Pr("__e", function(i, e, t, r) {
  Ri(), i(e, t, r);
});
Pr("diffed", function(i, e) {
  Ri();
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
        u === void 0 ? (u = id(t, l, c, n), s[l] = u) : u.o(c, n);
      }
    }
  }
  i(e);
});
function id(i, e, t, r) {
  var n = e in i && i.ownerSVGElement === void 0, s = De(t);
  return { o: function(o, a) {
    s.value = o, r = a;
  }, d: Ss(function() {
    var o = s.value.value;
    r[e] !== o && (r[e] = o, n ? i[e] = o : o ? i.setAttribute(e, o) : i.removeAttribute(e));
  }) };
}
Pr("unmount", function(i, e) {
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
Pr("__h", function(i, e, t, r) {
  (r < 3 || r === 9) && (e.__$f |= 2), i(e, t, r);
});
Je.prototype.shouldComponentUpdate = function(i, e) {
  var t = this.__$u;
  if (!(t && t.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
    return !0;
  for (var r in e)
    return !0;
  for (var n in i)
    if (n !== "__source" && i[n] !== this.props[n])
      return !0;
  for (var s in this.props)
    if (!(s in i))
      return !0;
  return !1;
};
function nd(i) {
  return at(function() {
    return De(i);
  }, []);
}
const Yn = De(!1), K = De(null), pr = De([]), lr = De(!1), ke = De(!1), fr = De([]), Ze = De(!1), ln = De(null), Ce = De(null), zi = De(!1), un = De(!0), bt = De(!1), sd = () => {
  ed(() => {
    K.value = null, pr.value = [], lr.value = !1, ke.value = !1, fr.value = [], Ze.value = !1, ln.value = null, Ce.value = null, zi.value = !1, un.value = !0, bt.value = !1;
  });
}, Es = "bm_currentBike", od = "v2", ad = "https://cdn.bikematrix.io", ld = "1.0.1", Lo = {
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
}, Se = function(i) {
  return new URL(i, ad).toString();
};
function rl(i) {
  var e, t, r = "";
  if (typeof i == "string" || typeof i == "number")
    r += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var n = i.length;
      for (e = 0; e < n; e++)
        i[e] && (t = rl(i[e])) && (r && (r += " "), r += t);
    } else
      for (t in i)
        i[t] && (r && (r += " "), r += t);
  return r;
}
function ud() {
  for (var i, e, t = 0, r = "", n = arguments.length; t < n; t++)
    (i = arguments[t]) && (e = rl(i)) && (r && (r += " "), r += e);
  return r;
}
const Bs = "-";
function cd(i) {
  const e = pd(i), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = i;
  function n(o) {
    const a = o.split(Bs);
    return a[0] === "" && a.length !== 1 && a.shift(), il(a, e) || dd(o);
  }
  function s(o, a) {
    const l = t[o] || [];
    return a && r[o] ? [...l, ...r[o]] : l;
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  };
}
function il(i, e) {
  var o;
  if (i.length === 0)
    return e.classGroupId;
  const t = i[0], r = e.nextPart.get(t), n = r ? il(i.slice(1), r) : void 0;
  if (n)
    return n;
  if (e.validators.length === 0)
    return;
  const s = i.join(Bs);
  return (o = e.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : o.classGroupId;
}
const To = /^\[(.+)\]$/;
function dd(i) {
  if (To.test(i)) {
    const e = To.exec(i)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function pd(i) {
  const {
    theme: e,
    prefix: t
  } = i, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return hd(Object.entries(i.classGroups), t).forEach(([s, o]) => {
    Wn(o, r, s, e);
  }), r;
}
function Wn(i, e, t, r) {
  i.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? e : Fo(e, n);
      s.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (fd(n)) {
        Wn(n(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([s, o]) => {
      Wn(o, Fo(e, s), t, r);
    });
  });
}
function Fo(i, e) {
  let t = i;
  return e.split(Bs).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}
function fd(i) {
  return i.isThemeGetter;
}
function hd(i, e) {
  return e ? i.map(([t, r]) => {
    const n = r.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, a]) => [e + o, a])) : s);
    return [t, n];
  }) : i;
}
function gd(i) {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function n(s, o) {
    t.set(s, o), e++, e > i && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  }
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
}
const nl = "!";
function md(i) {
  const e = i.separator, t = e.length === 1, r = e[0], n = e.length;
  return function(o) {
    const a = [];
    let l = 0, u = 0, c;
    for (let m = 0; m < o.length; m++) {
      let x = o[m];
      if (l === 0) {
        if (x === r && (t || o.slice(m, m + n) === e)) {
          a.push(o.slice(u, m)), u = m + n;
          continue;
        }
        if (x === "/") {
          c = m;
          continue;
        }
      }
      x === "[" ? l++ : x === "]" && l--;
    }
    const d = a.length === 0 ? o : o.substring(u), f = d.startsWith(nl), h = f ? d.substring(1) : d, b = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: b
    };
  };
}
function bd(i) {
  if (i.length <= 1)
    return i;
  const e = [];
  let t = [];
  return i.forEach((r) => {
    r[0] === "[" ? (e.push(...t.sort(), r), t = []) : t.push(r);
  }), e.push(...t.sort()), e;
}
function vd(i) {
  return {
    cache: gd(i.cacheSize),
    splitModifiers: md(i),
    ...cd(i)
  };
}
const wd = /\s+/;
function xd(i, e) {
  const {
    splitModifiers: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: n
  } = e, s = /* @__PURE__ */ new Set();
  return i.trim().split(wd).map((o) => {
    const {
      modifiers: a,
      hasImportantModifier: l,
      baseClassName: u,
      maybePostfixModifierPosition: c
    } = t(o);
    let d = r(c ? u.substring(0, c) : u), f = !!c;
    if (!d) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (d = r(u), !d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      f = !1;
    }
    const h = bd(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? h + nl : h,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: f
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
function yd() {
  let i = 0, e, t, r = "";
  for (; i < arguments.length; )
    (e = arguments[i++]) && (t = sl(e)) && (r && (r += " "), r += t);
  return r;
}
function sl(i) {
  if (typeof i == "string")
    return i;
  let e, t = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (e = sl(i[r])) && (t && (t += " "), t += e);
  return t;
}
function _d(i, ...e) {
  let t, r, n, s = o;
  function o(l) {
    const u = e.reduce((c, d) => d(c), i());
    return t = vd(u), r = t.cache.get, n = t.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = xd(l, t);
    return n(l, c), c;
  }
  return function() {
    return s(yd.apply(null, arguments));
  };
}
function ne(i) {
  const e = (t) => t[i] || [];
  return e.isThemeGetter = !0, e;
}
const ol = /^\[(?:([a-z-]+):)?(.+)\]$/i, Cd = /^\d+\/\d+$/, Ad = /* @__PURE__ */ new Set(["px", "full", "screen"]), Dd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Sd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ed = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Bd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function pt(i) {
  return Wt(i) || Ad.has(i) || Cd.test(i);
}
function St(i) {
  return Mr(i, "length", Id);
}
function Wt(i) {
  return !!i && !Number.isNaN(Number(i));
}
function Ci(i) {
  return Mr(i, "number", Wt);
}
function Ir(i) {
  return !!i && Number.isInteger(Number(i));
}
function Ld(i) {
  return i.endsWith("%") && Wt(i.slice(0, -1));
}
function W(i) {
  return ol.test(i);
}
function Et(i) {
  return Dd.test(i);
}
const Td = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Fd(i) {
  return Mr(i, Td, al);
}
function Nd(i) {
  return Mr(i, "position", al);
}
const Pd = /* @__PURE__ */ new Set(["image", "url"]);
function Md(i) {
  return Mr(i, Pd, zd);
}
function Od(i) {
  return Mr(i, "", Rd);
}
function Rr() {
  return !0;
}
function Mr(i, e, t) {
  const r = ol.exec(i);
  return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : t(r[2]) : !1;
}
function Id(i) {
  return kd.test(i) && !Sd.test(i);
}
function al() {
  return !1;
}
function Rd(i) {
  return Ed.test(i);
}
function zd(i) {
  return Bd.test(i);
}
function qd() {
  const i = ne("colors"), e = ne("spacing"), t = ne("blur"), r = ne("brightness"), n = ne("borderColor"), s = ne("borderRadius"), o = ne("borderSpacing"), a = ne("borderWidth"), l = ne("contrast"), u = ne("grayscale"), c = ne("hueRotate"), d = ne("invert"), f = ne("gap"), h = ne("gradientColorStops"), b = ne("gradientColorStopPositions"), m = ne("inset"), x = ne("margin"), w = ne("opacity"), g = ne("padding"), v = ne("saturate"), y = ne("scale"), _ = ne("sepia"), A = ne("skew"), D = ne("space"), k = ne("translate"), C = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", W, e], T = () => [W, e], F = () => ["", pt, St], P = () => ["auto", Wt, W], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], N = () => ["solid", "dashed", "dotted", "double", "none"], I = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], B = () => ["", "0", W], R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [Wt, Ci], j = () => [Wt, W];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Rr],
      spacing: [pt, St],
      blur: ["none", "", Et, W],
      brightness: U(),
      borderColor: [i],
      borderRadius: ["none", "", "full", Et, W],
      borderSpacing: T(),
      borderWidth: F(),
      contrast: U(),
      grayscale: B(),
      hueRotate: j(),
      invert: B(),
      gap: T(),
      gradientColorStops: [i],
      gradientColorStopPositions: [Ld, St],
      inset: E(),
      margin: E(),
      opacity: U(),
      padding: T(),
      saturate: U(),
      scale: U(),
      sepia: B(),
      skew: j(),
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
        aspect: ["auto", "square", "video", W]
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
        columns: [Et]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": R()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": R()
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
        object: [...z(), W]
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
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
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
        z: ["auto", Ir, W]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: E()
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
        flex: ["1", "auto", "initial", "none", W]
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
        order: ["first", "last", "none", Ir, W]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Rr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ir, W]
        }, W]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Rr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ir, W]
        }, W]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
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
        "auto-cols": ["auto", "min", "max", "fr", W]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", W]
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
        justify: ["normal", ...L()]
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
        content: ["normal", ...L(), "baseline"]
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
        "place-content": [...L(), "baseline"]
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
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
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
        "space-y": [D]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [W, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [W, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Et]
        }, Et]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [W, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [W, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [W, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [W, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Et, St]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ci]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Rr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Wt, Ci]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pt, W]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", W]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", W]
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
        "placeholder-opacity": [w]
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
        "text-opacity": [w]
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
        decoration: ["auto", "from-font", pt, St]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", pt, W]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
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
        content: ["none", W]
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
        "bg-opacity": [w]
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
        bg: [...z(), Nd]
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
        bg: ["auto", "cover", "contain", Fd]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Md]
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
        "border-opacity": [w]
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
        "divide-opacity": [w]
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
        outline: ["", ...N()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [pt, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [pt, St]
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
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [pt, St]
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
        shadow: ["", "inner", "none", Et, Od]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Rr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
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
        "drop-shadow": ["", "none", Et, W]
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
        saturate: [v]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
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
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [v]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: j()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", W]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: j()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", W]
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
        scale: [y]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [y]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [y]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ir, W]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
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
        "will-change": ["auto", "scroll", "contents", "transform", W]
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
        stroke: [pt, St, Ci]
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
const Vd = /* @__PURE__ */ _d(qd);
function Z(...i) {
  return Vd(ud(i));
}
const $d = {
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
class Be {
  constructor(e, t, r, n) {
    this._apiUrl = n ? window.location.origin + "/apps/proxy/api/" : e, this._apiKey = t ?? "", this._apiToken = r ?? "", this._apiType = n ? "shopify" : "bikematrix";
  }
  getEndpoint(e) {
    return $d[this._apiType][e];
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
    const n = this.getEndpoint("bikeSpecSizes"), s = await this.makeRequest(n, {
      params: {
        bikeModelSpecId: e,
        bikeSpec: t,
        year: r
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
  async getBikes(e, t, r) {
    if (e && (t || r)) {
      const n = this.getEndpoint("bikeSpecs"), s = await this.makeRequest(n, {
        params: {
          bikeModelSpecId: e,
          bikeSpec: t,
          year: r
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
      const n = this.getEndpoint("checkSku") + `/${e}/${t}/${r}`, s = await this.makeRequest(n);
      return s.success ? {
        success: s.success,
        data: s.data
      } : {
        success: s.success,
        error: "error_generic CheckSkuCompatibility",
        logError: s.error
      };
    } else
      return {
        success: !1,
        error: "error_generic CheckSkuCompatibility"
      };
  }
  async checkSkusCompatibility(e, t, r) {
    if (e && t) {
      const n = this.getEndpoint("checkSkus") + `/${e}/${t}/${r}`, s = await this.makeRequest(n);
      return s.success ? {
        data: s.data,
        success: s.success,
        logError: s.error
      } : {
        success: s.success,
        error: "error_generic CheckSkusCompatibility",
        logError: s.error
      };
    } else
      return {
        success: !1,
        error: "error_generic CheckSkusCompatibility"
      };
  }
  async checkSkusCompatibilityWithResults(e, t, r, n = {}) {
    if (e && t) {
      const s = this.getEndpoint("checkSkusWithResults") + `/${e}/${r}`, o = await this.makeRequest(s, {
        body: JSON.stringify(t),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        ...n
      });
      return o.success ? {
        data: o.data,
        success: o.success
      } : {
        success: o.success,
        error: "error_compatiblelist",
        logError: o.error
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
    const r = this.getEndpoint("findProducts"), n = await this.makeRequest(r, {
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
    return n.success ? {
      data: n.data,
      success: n.success
    } : {
      success: n.success,
      error: "error_update_custom_bike_name",
      logError: n.error
    };
  }
  async makeRequest(e, t = {}) {
    const r = new URL(e, this._apiUrl), n = {
      "Cache-Control": "no-cache",
      ...this._apiKey && {
        "bm-subscription-key": this._apiKey
      },
      ...this._apiToken && {
        "bm-app-token": this._apiToken
      }
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
async function ll(i) {
  var f;
  const {
    categories: e,
    collections: t,
    apiUrl: r,
    apiKey: n,
    apiToken: s,
    isShopify: o,
    logLevel: a
  } = window.BikeMatrix.getConfig(), l = JSON.parse(sessionStorage.getItem("bm_categories") || "null"), u = JSON.parse(localStorage.getItem(Es) || "null"), c = new Be(r, n, s, o);
  let d = [];
  if (a === "verbose" && console.log("useCompatibleCollections sessionCollections", l), !l || !(l != null && l.collections) || !(l != null && l.collections.length) || (l == null ? void 0 : l.key) !== (u == null ? void 0 : u.key)) {
    a === "verbose" && console.log("useCompatibleCollections fetching new collections");
    const h = await c.getBrandProductCategories(i);
    if (a === "verbose" && console.log("useCompatibleCollections bikeBrandProductCategories", h), !h.success)
      return console.log(h), a === "verbose" && console.error(h.error), d = {
        error: h.error
      }, d;
    if (a === "verbose" && (console.log("useCompatibleCollections categories", e), console.log("useCompatibleCollections collections", t)), ((f = h.data) == null ? void 0 : f.length) > 0) {
      let b = e.filter((m) => {
        var x;
        return !!m.collection && ((x = h == null ? void 0 : h.data) == null ? void 0 : x.some((w) => w.product_Category.toLowerCase() === m.title.toLowerCase()));
      });
      a === "verbose" && console.log("useCompatibleCollections availableCategories", b), d = b.map((m) => t.filter((w) => m.collection.split(",").map((g) => g.trim().toLowerCase()).includes(w.title.toLowerCase())).map((w) => ({
        title: w.title,
        text_id: m.text_id,
        handle: w.handle,
        url: w.url
      }))).flat(), a === "verbose" && console.log("useCompatibleCollections compatibleCollections", d), d = d == null ? void 0 : d.filter((m, x, w) => x === w.findIndex((g) => g.title === m.title && g.text_id === m.text_id && g.handle === m.handle && g.url === m.url));
    }
    sessionStorage.setItem("bm_categories", JSON.stringify({
      key: u == null ? void 0 : u.key,
      collections: d
    })), a === "verbose" && console.log("useCompatibleCollections fetched collections", d);
  } else
    a === "verbose" && console.log("useCompatibleCollections using session collections"), d = l.collections;
  return d;
}
const jd = {
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
class qi {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || jd, this.options = t, this.debug = t.debug;
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
    return n && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new qi(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new qi(this.logger, e);
  }
}
var nt = new qi();
class cn {
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
const zr = () => {
  let i, e;
  const t = new Promise((r, n) => {
    i = r, e = n;
  });
  return t.resolve = i, t.reject = e, t;
}, No = (i) => i == null ? "" : "" + i, Ud = (i, e, t) => {
  i.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}, Hd = /###/g, Po = (i) => i && i.indexOf("###") > -1 ? i.replace(Hd, ".") : i, Mo = (i) => !i || typeof i == "string", Qr = (i, e, t) => {
  const r = typeof e != "string" ? e : e.split(".");
  let n = 0;
  for (; n < r.length - 1; ) {
    if (Mo(i))
      return {};
    const s = Po(r[n]);
    !i[s] && t && (i[s] = new t()), Object.prototype.hasOwnProperty.call(i, s) ? i = i[s] : i = {}, ++n;
  }
  return Mo(i) ? {} : {
    obj: i,
    k: Po(r[n])
  };
}, Oo = (i, e, t) => {
  const {
    obj: r,
    k: n
  } = Qr(i, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[n] = t;
    return;
  }
  let s = e[e.length - 1], o = e.slice(0, e.length - 1), a = Qr(i, o, Object);
  for (; a.obj === void 0 && o.length; )
    s = `${o[o.length - 1]}.${s}`, o = o.slice(0, o.length - 1), a = Qr(i, o, Object), a && a.obj && typeof a.obj[`${a.k}.${s}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${s}`] = t;
}, Gd = (i, e, t, r) => {
  const {
    obj: n,
    k: s
  } = Qr(i, e, Object);
  n[s] = n[s] || [], n[s].push(t);
}, Vi = (i, e) => {
  const {
    obj: t,
    k: r
  } = Qr(i, e);
  if (t)
    return t[r];
}, Yd = (i, e, t) => {
  const r = Vi(i, t);
  return r !== void 0 ? r : Vi(e, t);
}, ul = (i, e, t) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in i ? typeof i[r] == "string" || i[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (i[r] = e[r]) : ul(i[r], e[r], t) : i[r] = e[r]);
  return i;
}, sr = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Wd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Kd = (i) => typeof i == "string" ? i.replace(/[&<>"'\/]/g, (e) => Wd[e]) : i;
class Zd {
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
const Jd = [" ", ",", "?", "!", ";"], Xd = new Zd(20), Qd = (i, e, t) => {
  e = e || "", t = t || "";
  const r = Jd.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (r.length === 0)
    return !0;
  const n = Xd.getRegExp(`(${r.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let s = !n.test(i);
  if (!s) {
    const o = i.indexOf(t);
    o > 0 && !n.test(i.substring(0, o)) && (s = !0);
  }
  return s;
}, Kn = function(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!i)
    return;
  if (i[e])
    return i[e];
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
}, $i = (i) => i && i.replace("_", "-");
class Io extends cn {
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
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, o = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, t], r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && s ? a.push(...r.split(s)) : a.push(r)));
    const l = Vi(this.data, a);
    return !l && !t && !r && e.indexOf(".") > -1 && (e = a[0], t = a[1], r = a.slice(2).join(".")), l || !o || typeof r != "string" ? l : Kn(this.data && this.data[e] && this.data[e][t], r, s);
  }
  addResource(e, t, r, n) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let a = [e, t];
    r && (a = a.concat(o ? r.split(o) : r)), e.indexOf(".") > -1 && (a = e.split("."), n = t, t = a[1]), this.addNamespaces(t), Oo(this.data, a, n), s.silent || this.emit("added", e, t, r, n);
  }
  addResources(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const s in r)
      (typeof r[s] == "string" || Array.isArray(r[s])) && this.addResource(e, t, s, r[s], {
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
    let l = Vi(this.data, a) || {};
    o.skipCopy || (r = JSON.parse(JSON.stringify(r))), n ? ul(l, r, s) : l = {
      ...l,
      ...r
    }, Oo(this.data, a, l), o.silent || this.emit("added", e, t, r);
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
    return !!(t && Object.keys(t) || []).find((n) => t[n] && Object.keys(t[n]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var cl = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, r, n) {
    return i.forEach((s) => {
      this.processors[s] && (e = this.processors[s].process(e, t, r, n));
    }), e;
  }
};
const Ro = {};
class ji extends cn {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Ud(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = nt.create("translator");
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
    const n = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let s = t.ns || this.options.defaultNS || [];
    const o = r && e.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Qd(e, r, n);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: s
        };
      const u = e.split(r);
      (r !== n || r === n && this.options.ns.indexOf(u[0]) > -1) && (s = u.shift()), e = u.join(n);
    }
    return typeof s == "string" && (s = [s]), {
      key: e,
      namespaces: s
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
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const y = t.nsSeparator || this.options.nsSeparator;
        return n ? {
          res: `${l}${y}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${y}${o}`;
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
    let f = d && d.res;
    const h = d && d.usedKey || o, b = d && d.exactUsedKey || o, m = Object.prototype.toString.apply(f), x = ["[object Number]", "[object Function]", "[object RegExp]"], w = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, g = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (g && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && x.indexOf(m) < 0 && !(typeof w == "string" && Array.isArray(f))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const y = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, f, {
          ...t,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return n ? (d.res = y, d.usedParams = this.getUsedParamsDetails(t), d) : y;
      }
      if (s) {
        const y = Array.isArray(f), _ = y ? [] : {}, A = y ? b : h;
        for (const D in f)
          if (Object.prototype.hasOwnProperty.call(f, D)) {
            const k = `${A}${s}${D}`;
            _[D] = this.translate(k, {
              ...t,
              joinArrays: !1,
              ns: a
            }), _[D] === k && (_[D] = f[D]);
          }
        f = _;
      }
    } else if (g && typeof w == "string" && Array.isArray(f))
      f = f.join(w), f && (f = this.extendTranslation(f, e, t, r));
    else {
      let y = !1, _ = !1;
      const A = t.count !== void 0 && typeof t.count != "string", D = ji.hasDefaultValue(t), k = A ? this.pluralResolver.getSuffix(u, t.count, t) : "", C = t.ordinal && A ? this.pluralResolver.getSuffix(u, t.count, {
        ordinal: !1
      }) : "", S = A && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), E = S && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${k}`] || t[`defaultValue${C}`] || t.defaultValue;
      !this.isValidLookup(f) && D && (y = !0, f = E), this.isValidLookup(f) || (_ = !0, f = o);
      const F = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && _ ? void 0 : f, P = D && E !== f && this.options.updateMissing;
      if (_ || y || P) {
        if (this.logger.log(P ? "updateKey" : "missingKey", u, l, o, P ? E : f), s) {
          const L = this.resolve(o, {
            ...t,
            keySeparator: !1
          });
          L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let z = [];
        const N = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && N && N[0])
          for (let L = 0; L < N.length; L++)
            z.push(N[L]);
        else
          this.options.saveMissingTo === "all" ? z = this.languageUtils.toResolveHierarchy(t.lng || this.language) : z.push(t.lng || this.language);
        const I = (L, B, R) => {
          const U = D && R !== f ? R : F;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(L, l, B, U, P, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(L, l, B, U, P, t), this.emit("missingKey", L, l, B, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && A ? z.forEach((L) => {
          const B = this.pluralResolver.getSuffixes(L, t);
          S && t[`defaultValue${this.options.pluralSeparator}zero`] && B.indexOf(`${this.options.pluralSeparator}zero`) < 0 && B.push(`${this.options.pluralSeparator}zero`), B.forEach((R) => {
            I([L], o + R, t[`defaultValue${R}`] || E);
          });
        }) : I(z, o, E));
      }
      f = this.extendTranslation(f, e, t, d, r), _ && f === o && this.options.appendNamespaceToMissingKey && (f = `${l}:${o}`), (_ || y) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, y ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return n ? (d.res = f, d.usedParams = this.getUsedParamsDetails(t), d) : f;
  }
  extendTranslation(e, t, r, n, s) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
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
      const u = typeof e == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = e.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), e = this.interpolator.interpolate(e, d, r.lng || this.language || n.usedLng, r), u) {
        const f = e.match(this.interpolator.nestingRegexp), h = f && f.length;
        c < h && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && n && n.res && (r.lng = this.language || n.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, h = new Array(f), b = 0; b < f; b++)
          h[b] = arguments[b];
        return s && s[0] === h[0] && !r.context ? (o.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${t[0]}`), null) : o.translate(...h, t);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = typeof a == "string" ? [a] : a;
    return e != null && l && l.length && r.applyPostProcessor !== !1 && (e = cl.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...n,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, n, s, o, a;
    return typeof e == "string" && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(r))
        return;
      const u = this.extractFromKey(l, t), c = u.key;
      n = c;
      let d = u.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && typeof t.count != "string", h = f && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), b = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      d.forEach((x) => {
        this.isValidLookup(r) || (a = x, !Ro[`${m[0]}-${x}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Ro[`${m[0]}-${x}`] = !0, this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((w) => {
          if (this.isValidLookup(r))
            return;
          o = w;
          const g = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(g, c, w, x, t);
          else {
            let y;
            f && (y = this.pluralResolver.getSuffix(w, t.count, t));
            const _ = `${this.options.pluralSeparator}zero`, A = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (g.push(c + y), t.ordinal && y.indexOf(A) === 0 && g.push(c + y.replace(A, this.options.pluralSeparator)), h && g.push(c + _)), b) {
              const D = `${c}${this.options.contextSeparator}${t.context}`;
              g.push(D), f && (g.push(D + y), t.ordinal && y.indexOf(A) === 0 && g.push(D + y.replace(A, this.options.pluralSeparator)), h && g.push(D + _));
            }
          }
          let v;
          for (; v = g.pop(); )
            this.isValidLookup(r) || (s = v, r = this.getResource(w, x, v, t));
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
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, r, n) : this.resourceStore.getResource(e, t, r, n);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && typeof e.replace != "string";
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
const vn = (i) => i.charAt(0).toUpperCase() + i.slice(1);
class zo {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = nt.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = $i(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = $i(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let n = Intl.getCanonicalLocales(e)[0];
          if (n && this.options.lowerCaseLng && (n = n.toLowerCase()), n)
            return n;
        } catch {
        }
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = e.split("-");
      return this.options.lowerCaseLng ? r = r.map((n) => n.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = vn(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = vn(r[1].toLowerCase())), t.indexOf(r[2].toLowerCase()) > -1 && (r[2] = vn(r[2].toLowerCase()))), r.join("-");
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
    if (typeof e == "function" && (e = e(t)), typeof e == "string" && (e = [e]), Array.isArray(e))
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
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : typeof e == "string" && s(this.formatLanguageCode(e)), r.forEach((o) => {
      n.indexOf(o) < 0 && s(this.formatLanguageCode(o));
    }), n;
  }
}
let ep = [{
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
}], tp = {
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
const rp = ["v1", "v2", "v3"], ip = ["v4"], qo = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, np = () => {
  const i = {};
  return ep.forEach((e) => {
    e.lngs.forEach((t) => {
      i[t] = {
        numbers: e.nr,
        plurals: tp[e.fc]
      };
    });
  }), i;
};
class sp {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = nt.create("pluralResolver"), (!this.options.compatibilityJSON || ip.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = np(), this.pluralRulesCache = {};
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
        const r = $i(e === "dev" ? "en" : e), n = t.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
          cleanedCode: r,
          type: n
        });
        if (s in this.pluralRulesCache)
          return this.pluralRulesCache[s];
        const o = new Intl.PluralRules(r, {
          type: n
        });
        return this.pluralRulesCache[s] = o, o;
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
    return this.getSuffixes(e, r).map((n) => `${t}${n}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, t);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((n, s) => qo[n] - qo[s]).map((n) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : r.numbers.map((n) => this.getSuffix(e, n, t)) : [];
  }
  getSuffix(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const n = this.getRule(e, r);
    return n ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(t)}` : this.getSuffixRetroCompatible(n, t) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let n = e.numbers[r];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (n === 2 ? n = "plural" : n === 1 && (n = ""));
    const s = () => this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString();
    return this.options.compatibilityJSON === "v1" ? n === 1 ? "" : typeof n == "number" ? `_plural_${n.toString()}` : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? s() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !rp.includes(this.options.compatibilityJSON);
  }
}
const Vo = function(i, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = Yd(i, e, t);
  return !s && n && typeof t == "string" && (s = Kn(i, t, r), s === void 0 && (s = Kn(e, t, r))), s;
}, wn = (i) => i.replace(/\$/g, "$$$$");
class op {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = nt.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
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
      nestingPrefix: f,
      nestingPrefixEscaped: h,
      nestingSuffix: b,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: x,
      maxReplaces: w,
      alwaysFormat: g
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Kd, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = s ? sr(s) : o || "{{", this.suffix = a ? sr(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? sr(f) : h || sr("$t("), this.nestingSuffix = b ? sr(b) : m || sr(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = w || 1e3, this.alwaysFormat = g !== void 0 ? g : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, r) => t && t.source === r ? (t.lastIndex = 0, t) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, r, n) {
    let s, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const w = Vo(t, l, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(w, void 0, r, {
          ...n,
          ...t,
          interpolationkey: h
        }) : w;
      }
      const b = h.split(this.formatSeparator), m = b.shift().trim(), x = b.join(this.formatSeparator).trim();
      return this.format(Vo(t, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), x, r, {
        ...n,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const c = n && n.missingInterpolationHandler || this.options.missingInterpolationHandler, d = n && n.interpolation && n.interpolation.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => wn(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? wn(this.escape(h)) : wn(h)
    }].forEach((h) => {
      for (a = 0; s = h.regex.exec(e); ) {
        const b = s[1].trim();
        if (o = u(b), o === void 0)
          if (typeof c == "function") {
            const x = c(e, s, n);
            o = typeof x == "string" ? x : "";
          } else if (n && Object.prototype.hasOwnProperty.call(n, b))
            o = "";
          else if (d) {
            o = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${b} for interpolating ${e}`), o = "";
        else
          typeof o != "string" && !this.useRawValueToEscape && (o = No(o));
        const m = h.safeValue(o);
        if (e = e.replace(s[0], m), d ? (h.regex.lastIndex += o.length, h.regex.lastIndex -= s[0].length) : h.regex.lastIndex = 0, a++, a >= this.maxReplaces)
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
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, o);
      const h = f.match(/'/g), b = f.match(/"/g);
      (h && h.length % 2 === 0 && !b || b.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        o = JSON.parse(f), u && (o = {
          ...u,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${c}${f}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    };
    for (; n = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...r
      }, o = o.replace && typeof o.replace != "string" ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let u = !1;
      if (n[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(n[1])) {
        const c = n[1].split(this.formatSeparator).map((d) => d.trim());
        n[1] = c.shift(), l = c, u = !0;
      }
      if (s = t(a.call(this, n[1].trim(), o), o), s && n[0] === e && typeof s != "string")
        return s;
      typeof s != "string" && (s = No(s)), s || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), s = ""), u && (s = l.reduce((c, d) => this.format(c, d, r.lng, {
        ...r,
        interpolationkey: n[1].trim()
      }), s.trim())), e = e.replace(n[0], s), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const ap = (i) => {
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
}, or = (i) => {
  const e = {};
  return (t, r, n) => {
    let s = n;
    n && n.interpolationkey && n.formatParams && n.formatParams[n.interpolationkey] && n[n.interpolationkey] && (s = {
      ...s,
      [n.interpolationkey]: void 0
    });
    const o = r + JSON.stringify(s);
    let a = e[o];
    return a || (a = i($i(r), n), e[o] = a), a(t);
  };
};
class lp {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = nt.create("formatter"), this.options = e, this.formats = {
      number: or((t, r) => {
        const n = new Intl.NumberFormat(t, {
          ...r
        });
        return (s) => n.format(s);
      }),
      currency: or((t, r) => {
        const n = new Intl.NumberFormat(t, {
          ...r,
          style: "currency"
        });
        return (s) => n.format(s);
      }),
      datetime: or((t, r) => {
        const n = new Intl.DateTimeFormat(t, {
          ...r
        });
        return (s) => n.format(s);
      }),
      relativetime: or((t, r) => {
        const n = new Intl.RelativeTimeFormat(t, {
          ...r
        });
        return (s) => n.format(s, r.range || "day");
      }),
      list: or((t, r) => {
        const n = new Intl.ListFormat(t, {
          ...r
        });
        return (s) => n.format(s);
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
    this.formats[e.toLowerCase().trim()] = or(t);
  }
  format(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = t.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && s[0].indexOf(")") < 0 && s.find((a) => a.indexOf(")") > -1)) {
      const a = s.findIndex((l) => l.indexOf(")") > -1);
      s[0] = [s[0], ...s.splice(1, a)].join(this.formatSeparator);
    }
    return s.reduce((a, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = ap(l);
      if (this.formats[u]) {
        let d = a;
        try {
          const f = n && n.formatParams && n.formatParams[n.interpolationkey] || {}, h = f.locale || f.lng || n.locale || n.lng || r;
          d = this.formats[u](a, h, {
            ...c,
            ...n,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, e);
  }
}
const up = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class cp extends cn {
  constructor(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = n, this.logger = nt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, n.backend, n);
  }
  queueLoad(e, t, r, n) {
    const s = {}, o = {}, a = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((d) => {
        const f = `${u}|${d}`;
        !r.reload && this.store.hasResourceBundle(u, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? o[f] === void 0 && (o[f] = !0) : (this.state[f] = 1, c = !1, o[f] === void 0 && (o[f] = !0), s[f] === void 0 && (s[f] = !0), l[d] === void 0 && (l[d] = !0)));
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
      Gd(l.loaded, [s], o), up(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
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
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
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
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...o,
          isUpdate: s
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(e, t, r, n, l) : c = u(e, t, r, n), c && typeof c.then == "function" ? c.then((d) => a(null, d)).catch(a) : a(null, c);
          } catch (c) {
            a(c);
          }
        else
          u(e, t, r, n, a, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, n);
    }
  }
}
const $o = () => ({
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
}), jo = (i) => (typeof i.ns == "string" && (i.ns = [i.ns]), typeof i.fallbackLng == "string" && (i.fallbackLng = [i.fallbackLng]), typeof i.fallbackNS == "string" && (i.fallbackNS = [i.fallbackNS]), i.supportedLngs && i.supportedLngs.indexOf("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), i), Ai = () => {
}, dp = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
};
class oi extends cn {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = jo(e), this.services = {}, this.logger = nt, this.modules = {
      external: []
    }, dp(this), t && !this.isInitialized && !e.isClone) {
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
    const n = $o();
    this.options = {
      ...n,
      ...this.options,
      ...jo(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const s = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? nt.init(s(this.modules.logger), this.options) : nt.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = lp);
      const d = new zo(this.options);
      this.store = new Io(this.options.resources, this.options);
      const f = this.services;
      f.logger = nt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new sp(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (f.formatter = s(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new op(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new cp(s(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(h) {
        for (var b = arguments.length, m = new Array(b > 1 ? b - 1 : 0), x = 1; x < b; x++)
          m[x - 1] = arguments[x];
        e.emit(h, ...m);
      }), this.modules.languageDetector && (f.languageDetector = s(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = s(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new ji(this.services, this.options), this.translator.on("*", function(h) {
        for (var b = arguments.length, m = new Array(b > 1 ? b - 1 : 0), x = 1; x < b; x++)
          m[x - 1] = arguments[x];
        e.emit(h, ...m);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Ai), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const l = zr(), u = () => {
      const c = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ai;
    const n = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (n && n.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const s = [], o = (a) => {
        if (!a || a === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
          u !== "cimode" && s.indexOf(u) < 0 && s.push(u);
        });
      };
      n ? o(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), this.options.preload && this.options.preload.forEach((a) => o(a)), this.services.backendConnector.load(s, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(e, t, r) {
    const n = zr();
    return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = Ai), this.services.backendConnector.reload(e, t, (s) => {
      n.resolve(), r(s);
    }), n;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && cl.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const n = zr();
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
      !e && !l && this.services.languageDetector && (l = []);
      const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || s(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, (c) => {
        o(c, u);
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
      const f = n.options.keySeparator || ".";
      let h;
      return l.keyPrefix && Array.isArray(o) ? h = o.map((b) => `${l.keyPrefix}${f}${b}`) : h = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o, n.t(h, l);
    };
    return typeof e == "string" ? s.lng = e : s.lngs = e, s.ns = t, s.keyPrefix = r, s;
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
    const r = zr();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((n) => {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }), this.loadResources((n) => {
      r.resolve(), t && t(n);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = zr();
    typeof e == "string" && (e = [e]);
    const n = this.options.preload || [], s = e.filter((o) => n.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return s.length ? (this.options.preload = n.concat(s), this.loadResources((o) => {
      r.resolve(), t && t(o);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new zo($o());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new oi(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ai;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const n = {
      ...this.options,
      ...e,
      isClone: !0
    }, s = new oi(n);
    return (e.debug !== void 0 || e.prefix !== void 0) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      s[a] = this[a];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, r && (s.store = new Io(this.store.data, n), s.services.resourceStore = s.store), s.translator = new ji(s.services, n), s.translator.on("*", function(a) {
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
const xe = oi.createInstance();
xe.createInstance = oi.createInstance;
xe.createInstance;
xe.dir;
xe.init;
xe.loadResources;
xe.reloadResources;
xe.use;
xe.changeLanguage;
xe.getFixedT;
xe.t;
xe.exists;
xe.setDefaultNamespace;
xe.hasLoadedNamespace;
xe.loadNamespaces;
xe.loadLanguages;
const {
  slice: pp,
  forEach: fp
} = [];
function hp(i) {
  return fp.call(pp.call(arguments, 1), (e) => {
    if (e)
      for (const t in e)
        i[t] === void 0 && (i[t] = e[t]);
  }), i;
}
const Uo = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, gp = (i, e, t) => {
  const r = t || {};
  r.path = r.path || "/";
  const n = encodeURIComponent(e);
  let s = `${i}=${n}`;
  if (r.maxAge > 0) {
    const o = r.maxAge - 0;
    if (Number.isNaN(o))
      throw new Error("maxAge should be a Number");
    s += `; Max-Age=${Math.floor(o)}`;
  }
  if (r.domain) {
    if (!Uo.test(r.domain))
      throw new TypeError("option domain is invalid");
    s += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!Uo.test(r.path))
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
  return s;
}, Ho = {
  create(i, e, t, r) {
    let n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    t && (n.expires = /* @__PURE__ */ new Date(), n.expires.setTime(n.expires.getTime() + t * 60 * 1e3)), r && (n.domain = r), document.cookie = gp(i, encodeURIComponent(e), n);
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
  remove(i) {
    this.create(i, "", -1);
  }
};
var mp = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(i) {
    let {
      lookupCookie: e
    } = i;
    if (e && typeof document < "u")
      return Ho.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(i, e) {
    let {
      lookupCookie: t,
      cookieMinutes: r,
      cookieDomain: n,
      cookieOptions: s
    } = e;
    t && typeof document < "u" && Ho.create(t, i, r, n, s);
  }
}, bp = {
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
};
let qr = null;
const Go = () => {
  if (qr !== null)
    return qr;
  try {
    qr = window !== "undefined" && window.localStorage !== null;
    const i = "i18next.translate.boo";
    window.localStorage.setItem(i, "foo"), window.localStorage.removeItem(i);
  } catch {
    qr = !1;
  }
  return qr;
};
var vp = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(i) {
    let {
      lookupLocalStorage: e
    } = i;
    if (e && Go())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(i, e) {
    let {
      lookupLocalStorage: t
    } = e;
    t && Go() && window.localStorage.setItem(t, i);
  }
};
let Vr = null;
const Yo = () => {
  if (Vr !== null)
    return Vr;
  try {
    Vr = window !== "undefined" && window.sessionStorage !== null;
    const i = "i18next.translate.boo";
    window.sessionStorage.setItem(i, "foo"), window.sessionStorage.removeItem(i);
  } catch {
    Vr = !1;
  }
  return Vr;
};
var wp = {
  name: "sessionStorage",
  lookup(i) {
    let {
      lookupSessionStorage: e
    } = i;
    if (e && Yo())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(i, e) {
    let {
      lookupSessionStorage: t
    } = e;
    t && Yo() && window.sessionStorage.setItem(t, i);
  }
}, xp = {
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
}, yp = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(i) {
    let {
      htmlTag: e
    } = i, t;
    const r = e || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, _p = {
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
}, Cp = {
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
function Ap() {
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
class dl {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e || {
      languageUtils: {}
    }, this.options = hp(t, this.options || {}, Ap()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (n) => n.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(mp), this.addDetector(bp), this.addDetector(vp), this.addDetector(wp), this.addDetector(xp), this.addDetector(yp), this.addDetector(_p), this.addDetector(Cp);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect(e) {
    e || (e = this.options.order);
    let t = [];
    return e.forEach((r) => {
      if (this.detectors[r]) {
        let n = this.detectors[r].lookup(this.options);
        n && typeof n == "string" && (n = [n]), n && (t = t.concat(n));
      }
    }), t = t.map((r) => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
  }
  cacheUserLanguage(e, t) {
    t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(e, this.options);
    }));
  }
}
dl.type = "languageDetector";
const Wo = Se(`bm_translation_${ld}.json`), Dp = async () => {
  console.log(Wo);
  const i = await fetch(Wo, {
    mode: "cors",
    credentials: "omit"
  });
  if (!i.ok)
    throw new Error(`Failed to fetch translations: ${i.status}`);
  const e = await i.json(), t = Object.fromEntries(Object.entries(e).map(([r, n]) => [r, n]));
  return console.log(t), await xe.use(dl).use(Wc).init({
    debug: !1,
    resources: t,
    supportedLngs: ["en-GB", "en-US", "de", "fr", "es", "it", "nl", "fi", "pl"],
    fallbackLng: "en-GB",
    ns: ["translation"],
    defaultNS: "translation",
    detection: {
      order: ["htmlTag", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "path", "subdomain"]
    },
    interpolation: {
      escapeValue: !1
    }
  }), xe;
}, pl = class Yr {
  constructor() {
    this.initialized = !1, this.compatibleListInitialized = !1, this.currentBike = null, this.activeSubscription = null, this.components = [], this.config = Lo;
  }
  // Initialize with optional config
  async initialize(e) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: initialize() called"), this.components = [], this.initialized && this.cleanup(), e && (this.config = {
      ...this.config,
      ...e
    }), this.initializeConfig(), this.service = new Be(this.config.apiUrl, this.config.apiKey, this.config.apiToken, this.config.isShopify), this.initializeActiveSubscription(), localStorage.bm_currentBike && (this.currentBike = JSON.parse(localStorage.bm_currentBike)), await Dp(), this.setupEventListeners(), this.registerComponents(), this.initialized = !0, Yn.value = !0;
    const t = new Event("BM:Initialized");
    document.dispatchEvent(t), (this.config.logLevel === "verbose" || this.config.logLevel === "core") && (console.log("Core: BikeMatrix WebComponent Version: 1.3.4"), console.log("Core: BikeMatrixCore initialized"));
  }
  // Singleton pattern to ensure a single global instance
  static getInstance() {
    return Yr.instance || (Yr.instance = new Yr()), Yr.instance;
  }
  registerComponents() {
    const e = ["bikematrix-bikeselector", "bikematrix-productresult", "bikematrix-collectionresult", "bikematrix-compatibilitylabel", "bikematrix-compatiblelist", "bikematrix-bikeselectorbanner", "bikematrix-variantselector"];
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
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: updateConfig() called"), this.config = {
      ...this.config,
      ...e
    }, this.reload(!1);
  }
  // Cleanup without destroying instance
  cleanup() {
    this.removeEventListeners(), sd();
  }
  // Full destroy for complete cleanup
  async destroy() {
    this.cleanup(), this.service = null, this.currentBike = null, this.activeSubscription = null, this.config = {
      ...Lo
    }, this.initialized = !1, Yn.value = !1, this.resetComponents();
  }
  updateCompatibleList(e = !0) {
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: updateCompatibleList showCompatibleList: ", e), this.config.showCompatibleList = e, this.initializeConfig(), e && (ke.value = !0, this.RefreshCompatibleSkus(!0)), this.compatibleListInitialized = !0;
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
    }), this.config.showCompatibleList && !this.config.delayCompatibleListInitialization ? this.compatibleListInitialized = !0 : this.config.showCompatibleList && this.config.delayCompatibleListInitialization && !this.compatibleListInitialized && (ke.value = !0), t != null && t.includes("verbose") ? this.config.logLevel = "verbose" : t != null && t.includes("core") && (this.config.logLevel = "core"), t != null && t.includes("virtualWorkshop") && (this.config.virtualWorkshop = !0), t != null && t.includes("subscribtion") && (this.activeSubscription = !0), t != null && t.includes("all") && (this.config.logLevel = "verbose", this.config.virtualWorkshop = !0, this.activeSubscription = !0), this.config.logLevel === "verbose" && console.log("initializeConfig ", JSON.stringify(this.config, null, 2));
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
    const t = document.querySelector("bikematrix-productresult[data-sku]"), r = document.querySelector("bikematrix-variantselector[data-sku]");
    t && t.setAttribute("data-sku", e), r && r.setAttribute("data-sku", e), this.config.sku = e;
  }
  // ===== Legacy methods ===== //
  ResetSelectedBikeIndicator() {
    var e, t;
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: ResetSelectedBikeIndicator() Method Called"), this.currentBike === null ? (e = window.bm_selectBikeButton) == null || e.classList.remove("show-selected") : (t = window.bm_selectBikeButton) == null || t.classList.add("show-selected");
  }
  ChangeBike() {
    if ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: ChangeBike() Method Called"), lr.value === !0 || Ze.value === !0) {
      console.log("Core: ChangeBike loading, return");
      return;
    }
    lr.value = !0, ke.value = !0, Ze.value = !0, pr.value = [], fr.value = [], (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: ChangeBike updateBikeSignal..."), this.updateBikeSignal().then(() => {
      this.config.logLevel === "verbose" ? console.log("Core: Bike Signal Updated: ", JSON.stringify(K.value, null, 2)) : this.config.logLevel === "core" && console.log("Core: Bike Signal Updated"), this.ResetSelectedBikeIndicator(), this.RefreshCompatibleSkus().then(() => {
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
    var r, n;
    const t = `${(r = K.value) == null ? void 0 : r.key}:${this.config.currentCollectionHandle}:${od}`;
    switch ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: RefreshCompatibleSkus() called. Current Collection Bike Key: ", t), this.config.pageType) {
      case "collection":
        const s = !!K.value && !K.value.compatibleCollections.error && ((n = K.value.compatibleCollections) == null ? void 0 : n.some((a) => a.handle === this.config.currentCollectionHandle)), o = this.config.showCompatibleList && (this.compatibleListInitialized || e);
        (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: RefreshCompatibleSkus. hasCompatibleCollection: ", s, " showCompatibleList: ", this.config.showCompatibleList, " compatibleListInitialized: ", this.compatibleListInitialized, " CompatibleListLoadingSignal: ", ke.value, " onlyCompatibleList: ", e, " delayCompatibleListInitialization: ", this.config.delayCompatibleListInitialization, " shouldRefreshCompatibleListSkus: ", o), s && (e || await this.RefreshCollectionPageSkus(t), o && ((this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: RefreshCompatibleSkus refreshing compatible list skus for collection page..."), await this.RefreshCollectionListSkus(t))), lr.value = !1, Ze.value = !1, o && (ke.value = !1);
        break;
      case "search":
      case "index":
        lr.value = !1, ke.value = !1, (this.config.pageType === "index" && this.config.showHomePageCollection || this.config.pageType === "search" && this.config.showSearchPageCollection) && await this.RefreshCollectionPageSkus(t), Ze.value = !1;
        break;
      default:
        lr.value = !1, ke.value = !1, Ze.value = !1;
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
    var s = ((o = xr()) == null ? void 0 : o.language) || "en-GB";
    if (n && n.length > 0) {
      const l = await this.service.checkSkusCompatibilityWithResults((a = K.value) == null ? void 0 : a.key, n, s);
      l.success ? fr.value = l.data : (zi.value = !0, this.config.logLevel === "verbose" && console.log("Compatible List Error: ", l.logError));
    } else
      fr.value = [];
  }
  async RefreshCollectionListSkus(e) {
    var n, s;
    var t = JSON.parse(sessionStorage.getItem(e));
    if (t)
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from Session: ", JSON.stringify(t), null, 2), pr.value = t;
    else {
      const o = Object.values(this.config.products || {}).map((c) => c.skus).flat();
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(o), null, 2);
      var r = ((n = xr()) == null ? void 0 : n.language) || "en-GB";
      const a = new AbortController(), l = a.signal, u = () => a.abort();
      window.addEventListener("beforeunload", u);
      try {
        if (!((s = K.value) != null && s.key))
          throw new Error("BikeSignal key is undefined");
        const c = await this.service.checkSkusCompatibilityWithResults(K.value.key, o, r, {
          signal: l
        });
        if (this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(c)), l.aborted) {
          this.config.logLevel === "verbose" && console.log("function RefreshCompatibleSkus() operation aborted");
          return;
        }
        c.success ? (sessionStorage.setItem(e, JSON.stringify(c.data)), pr.value = c.data) : (zi.value = !0, this.config.logLevel === "verbose" && console.log("Compatible List Error: ", c.logError));
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
    (this.config.logLevel === "verbose" || this.config.logLevel === "core") && console.log("Core: updateBikeSignal() called");
    const e = localStorage.getItem(Es) || "null", t = JSON.parse(e);
    if (this.currentBike = t, t == null) {
      K.value = null;
      return;
    }
    const r = await ll(t == null ? void 0 : t.brandId);
    !Array.isArray(r) && r.error ? (t.compatibleCollections = [], K.value = t) : (t.compatibleCollections = r, K.value = t), this.config.logLevel === "verbose" ? console.log("Core: Bike Changed: ", JSON.stringify(K.value, null, 2)) : this.config.logLevel === "core" && console.log("Core: Bike Changed");
  }
};
pl.instance = null;
let kp = pl;
const ai = (i) => /* @__PURE__ */ q("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M1.53553 8.60658L5.07107 5.07104M5.07107 5.07104L8.6066 1.53551M5.07107 5.07104L8.6066 8.60658M5.07107 5.07104L1.53553 1.53551", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" })), Sp = `:host .overlay{opacity:0;visibility:hidden}@media (min-width: 640px){:host .modal{opacity:0;transform:scale(.9);visibility:hidden}}@media not all and (min-width: 640px){:host .modal{transform:translateY(100%);visibility:hidden}}
`;
function mt(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function fl(i, e) {
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
var $e = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, yr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Ls, we, oe, Ye = 1e8, ie = 1 / Ye, Zn = Math.PI * 2, Ep = Zn / 4, Bp = 0, hl = Math.sqrt, Lp = Math.cos, Tp = Math.sin, ve = function(e) {
  return typeof e == "string";
}, de = function(e) {
  return typeof e == "function";
}, _t = function(e) {
  return typeof e == "number";
}, Ts = function(e) {
  return typeof e > "u";
}, ct = function(e) {
  return typeof e == "object";
}, Fe = function(e) {
  return e !== !1;
}, Fs = function() {
  return typeof window < "u";
}, Di = function(e) {
  return de(e) || ve(e);
}, gl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Ae = Array.isArray, Jn = /(?:-?\.?\d|\.)+/gi, ml = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, cr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, xn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, bl = /[+-]=-?[.\d]+/, vl = /[^,'"\[\]\s]+/gi, Fp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, le, tt, Xn, Ns, je = {}, Ui = {}, wl, xl = function(e) {
  return (Ui = _r(e, je)) && Oe;
}, Ps = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, li = function(e, t) {
  return !t && console.warn(e);
}, yl = function(e, t) {
  return e && (je[e] = t) && Ui && (Ui[e] = t) || je;
}, ui = function() {
  return 0;
}, Np = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Fi = {
  suppressEvents: !0,
  kill: !1
}, Pp = {
  suppressEvents: !0
}, Ms = {}, Mt = [], Qn = {}, _l, Re = {}, yn = {}, Ko = 30, Ni = [], Os = "", Is = function(e) {
  var t = e[0], r, n;
  if (ct(t) || de(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (n = Ni.length; n-- && !Ni[n].targetTest(t); )
      ;
    r = Ni[n];
  }
  for (n = e.length; n--; )
    e[n] && (e[n]._gsap || (e[n]._gsap = new Gl(e[n], r))) || e.splice(n, 1);
  return e;
}, Jt = function(e) {
  return e._gsap || Is(We(e))[0]._gsap;
}, Cl = function(e, t, r) {
  return (r = e[t]) && de(r) ? e[t]() : Ts(r) && e.getAttribute && e.getAttribute(t) || r;
}, Ne = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, pe = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, ge = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, hr = function(e, t) {
  var r = t.charAt(0), n = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + n : r === "-" ? e - n : r === "*" ? e * n : e / n;
}, Mp = function(e, t) {
  for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r; )
    ;
  return n < r;
}, Hi = function() {
  var e = Mt.length, t = Mt.slice(0), r, n;
  for (Qn = {}, Mt.length = 0, r = 0; r < e; r++)
    n = t[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, Al = function(e, t, r, n) {
  Mt.length && !we && Hi(), e.render(t, r, n || we && t < 0 && (e._initted || e._startAt)), Mt.length && !we && Hi();
}, Dl = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(vl).length < 2 ? t : ve(e) ? e.trim() : e;
}, kl = function(e) {
  return e;
}, Ue = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, Op = function(e) {
  return function(t, r) {
    for (var n in r)
      n in t || n === "duration" && e || n === "ease" || (t[n] = r[n]);
  };
}, _r = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Zo = function i(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = ct(t[r]) ? i(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, Gi = function(e, t) {
  var r = {}, n;
  for (n in e)
    n in t || (r[n] = e[n]);
  return r;
}, ei = function(e) {
  var t = e.parent || le, r = e.keyframes ? Op(Ae(e.keyframes)) : Ue;
  if (Fe(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, Ip = function(e, t) {
  for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, Sl = function(e, t, r, n, s) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var o = e[n], a;
  if (s)
    for (a = t[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = o, t.parent = t._dp = e, t;
}, dn = function(e, t, r, n) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var s = t._prev, o = t._next;
  s ? s._next = o : e[r] === t && (e[r] = o), o ? o._prev = s : e[n] === t && (e[n] = s), t._next = t._prev = t.parent = null;
}, zt = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Xt = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, Rp = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, es = function(e, t, r, n) {
  return e._startAt && (we ? e._startAt.revert(Fi) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n));
}, zp = function i(e) {
  return !e || e._ts && i(e.parent);
}, Jo = function(e) {
  return e._repeat ? Cr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Cr = function(e, t) {
  var r = Math.floor(e = ge(e / t));
  return e && r === e ? r - 1 : r;
}, Yi = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, pn = function(e) {
  return e._end = ge(e._start + (e._tDur / Math.abs(e._ts || e._rts || ie) || 0));
}, fn = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = ge(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), pn(e), r._dirty || Xt(r, e)), e;
}, El = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Yi(e.rawTime(), t), (!t._dur || vi(0, t.totalDuration(), r) - t._tTime > ie) && t.render(r, !0)), Xt(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -ie;
  }
}, rt = function(e, t, r, n) {
  return t.parent && zt(t), t._start = ge((_t(r) ? r : r || e !== le ? He(e, r, t) : e._time) + t._delay), t._end = ge(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Sl(e, t, "_first", "_last", e._sort ? "_start" : 0), ts(t) || (e._recent = t), n || El(e, t), e._ts < 0 && fn(e, e._tTime), e;
}, Bl = function(e, t) {
  return (je.ScrollTrigger || Ps("scrollTrigger", t)) && je.ScrollTrigger.create(t, e);
}, Ll = function(e, t, r, n, s) {
  if (zs(e, t, s), !e._initted)
    return 1;
  if (!r && e._pt && !we && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && _l !== qe.frame)
    return Mt.push(e), e._lazy = [s, n], 1;
}, qp = function i(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
}, ts = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, Vp = function(e, t, r, n) {
  var s = e.ratio, o = t < 0 || !t && (!e._start && qp(e) && !(!e._initted && ts(e)) || (e._ts < 0 || e._dp._ts < 0) && !ts(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, d;
  if (a && e._repeat && (l = vi(0, e._tDur, t), c = Cr(l, a), e._yoyo && c & 1 && (o = 1 - o), c !== Cr(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || we || n || e._zTime === ie || !t && e._zTime) {
    if (!e._initted && Ll(e, t, n, r, l))
      return;
    for (d = e._zTime, e._zTime = t || (r ? ie : 0), r || (r = t && !d), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u; )
      u.r(o, u.d), u = u._next;
    t < 0 && es(e, t, r, !0), e._onUpdate && !r && Ve(e, "onUpdate"), l && e._repeat && !r && e.parent && Ve(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && zt(e, 1), !r && !we && (Ve(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = t);
}, $p = function(e, t, r) {
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
}, Ar = function(e, t, r, n) {
  var s = e._repeat, o = ge(t) || 0, a = e._tTime / e._tDur;
  return a && !n && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : ge(o * (s + 1) + e._rDelay * s) : o, a > 0 && !n && fn(e, e._tTime = e._tDur * a), e.parent && pn(e), r || Xt(e.parent, e), e;
}, Xo = function(e) {
  return e instanceof Ee ? Xt(e) : Ar(e, e._dur);
}, jp = {
  _start: 0,
  endTime: ui,
  totalDuration: ui
}, He = function i(e, t, r) {
  var n = e.labels, s = e._recent || jp, o = e.duration() >= Ye ? s.endTime(!1) : e._dur, a, l, u;
  return ve(t) && (isNaN(t) || t in n) ? (l = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (t in n || (n[t] = o), n[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && r && (l = l / 100 * (Ae(r) ? r[0] : r).totalDuration()), a > 1 ? i(e, t.substr(0, a - 1), r) + l : o + l)) : t == null ? o : +t;
}, ti = function(e, t, r) {
  var n = _t(t[1]), s = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
  if (n && (o.duration = t[1]), o.parent = r, e) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = Fe(l.vars.inherit) && l.parent;
    o.immediateRender = Fe(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
  }
  return new he(t[0], o, t[s + 1]);
}, Vt = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, vi = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, _e = function(e, t) {
  return !ve(e) || !(t = Fp.exec(e)) ? "" : t[1];
}, Up = function(e, t, r) {
  return Vt(r, function(n) {
    return vi(e, t, n);
  });
}, rs = [].slice, Tl = function(e, t) {
  return e && ct(e) && "length" in e && (!t && !e.length || e.length - 1 in e && ct(e[0])) && !e.nodeType && e !== tt;
}, Hp = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(n) {
    var s;
    return ve(n) && !t || Tl(n, 1) ? (s = r).push.apply(s, We(n)) : r.push(n);
  }) || r;
}, We = function(e, t, r) {
  return oe && !t && oe.selector ? oe.selector(e) : ve(e) && !r && (Xn || !Dr()) ? rs.call((t || Ns).querySelectorAll(e), 0) : Ae(e) ? Hp(e, r) : Tl(e) ? rs.call(e, 0) : e ? [e] : [];
}, is = function(e) {
  return e = We(e)[0] || li("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return We(t, r.querySelectorAll ? r : r === e ? li("Invalid scope") || Ns.createElement("div") : e);
  };
}, Fl = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Nl = function(e) {
  if (de(e))
    return e;
  var t = ct(e) ? e : {
    each: e
  }, r = Qt(t.ease), n = t.from || 0, s = parseFloat(t.base) || 0, o = {}, a = n > 0 && n < 1, l = isNaN(n) || a, u = t.axis, c = n, d = n;
  return ve(n) ? c = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !a && l && (c = n[0], d = n[1]), function(f, h, b) {
    var m = (b || t).length, x = o[m], w, g, v, y, _, A, D, k, C;
    if (!x) {
      if (C = t.grid === "auto" ? 0 : (t.grid || [1, Ye])[1], !C) {
        for (D = -Ye; D < (D = b[C++].getBoundingClientRect().left) && C < m; )
          ;
        C < m && C--;
      }
      for (x = o[m] = [], w = l ? Math.min(C, m) * c - 0.5 : n % C, g = C === Ye ? 0 : l ? m * d / C - 0.5 : n / C | 0, D = 0, k = Ye, A = 0; A < m; A++)
        v = A % C - w, y = g - (A / C | 0), x[A] = _ = u ? Math.abs(u === "y" ? y : v) : hl(v * v + y * y), _ > D && (D = _), _ < k && (k = _);
      n === "random" && Fl(x), x.max = D - k, x.min = k, x.v = m = (parseFloat(t.amount) || parseFloat(t.each) * (C > m ? m - 1 : u ? u === "y" ? m / C : C : Math.max(C, m / C)) || 0) * (n === "edges" ? -1 : 1), x.b = m < 0 ? s - m : s, x.u = _e(t.amount || t.each) || 0, r = r && m < 0 ? jl(r) : r;
    }
    return m = (x[f] - x.min) / x.max || 0, ge(x.b + (r ? r(m) : m) * x.v) + x.u;
  };
}, ns = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var n = ge(Math.round(parseFloat(r) / e) * e * t);
    return (n - n % 1) / t + (_t(r) ? 0 : _e(r));
  };
}, Pl = function(e, t) {
  var r = Ae(e), n, s;
  return !r && ct(e) && (n = r = e.radius || Ye, e.values ? (e = We(e.values), (s = !_t(e[0])) && (n *= n)) : e = ns(e.increment)), Vt(t, r ? de(e) ? function(o) {
    return s = e(o), Math.abs(s - o) <= n ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = Ye, c = 0, d = e.length, f, h; d--; )
      s ? (f = e[d].x - a, h = e[d].y - l, f = f * f + h * h) : f = Math.abs(e[d] - a), f < u && (u = f, c = d);
    return c = !n || u <= n ? e[c] : o, s || c === o || _t(o) ? c : c + _e(o);
  } : ns(e));
}, Ml = function(e, t, r, n) {
  return Vt(Ae(e) ? !t : r === !0 ? !!(r = 0) : !n, function() {
    return Ae(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * n) / n;
  });
}, Gp = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return t.reduce(function(s, o) {
      return o(s);
    }, n);
  };
}, Yp = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || _e(r));
  };
}, Wp = function(e, t, r) {
  return Il(e, t, 0, 1, r);
}, Ol = function(e, t, r) {
  return Vt(r, function(n) {
    return e[~~t(n)];
  });
}, Kp = function i(e, t, r) {
  var n = t - e;
  return Ae(e) ? Ol(e, i(0, e.length), t) : Vt(r, function(s) {
    return (n + (s - e) % n) % n + e;
  });
}, Zp = function i(e, t, r) {
  var n = t - e, s = n * 2;
  return Ae(e) ? Ol(e, i(0, e.length - 1), t) : Vt(r, function(o) {
    return o = (s + (o - e) % s) % s || 0, e + (o > n ? s - o : o);
  });
}, ci = function(e) {
  for (var t = 0, r = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
    o = e.indexOf(")", n), a = e.charAt(n + 7) === "[", s = e.substr(n + 7, o - n - 7).match(a ? vl : Jn), r += e.substr(t, n - t) + Ml(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), t = o + 1;
  return r + e.substr(t, e.length - t);
}, Il = function(e, t, r, n, s) {
  var o = t - e, a = n - r;
  return Vt(s, function(l) {
    return r + ((l - e) / o * a || 0);
  });
}, Jp = function i(e, t, r, n) {
  var s = isNaN(e + t) ? 0 : function(h) {
    return (1 - h) * e + h * t;
  };
  if (!s) {
    var o = ve(e), a = {}, l, u, c, d, f;
    if (r === !0 && (n = 1) && (r = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Ae(e) && !Ae(t)) {
      for (c = [], d = e.length, f = d - 2, u = 1; u < d; u++)
        c.push(i(e[u - 1], e[u]));
      d--, s = function(b) {
        b *= d;
        var m = Math.min(f, ~~b);
        return c[m](b - m);
      }, r = t;
    } else
      n || (e = _r(Ae(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        Rs.call(a, e, l, "get", t[l]);
      s = function(b) {
        return $s(b, a) || (o ? e.p : e);
      };
    }
  }
  return Vt(r, s);
}, Qo = function(e, t, r) {
  var n = e.labels, s = Ye, o, a, l;
  for (o in n)
    a = n[o] - t, a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, Ve = function(e, t, r) {
  var n = e.vars, s = n[t], o = oe, a = e._ctx, l, u, c;
  if (s)
    return l = n[t + "Params"], u = n.callbackScope || e, r && Mt.length && Hi(), a && (oe = a), c = l ? s.apply(u, l) : s.call(u), oe = o, c;
}, Wr = function(e) {
  return zt(e), e.scrollTrigger && e.scrollTrigger.kill(!!we), e.progress() < 1 && Ve(e, "onInterrupt"), e;
}, dr, Rl = [], zl = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Fs() || e.headless) {
      var t = e.name, r = de(e), n = t && !r && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: ui,
        render: $s,
        add: Rs,
        kill: f2,
        modifier: p2,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Vs,
        aliases: {},
        register: 0
      };
      if (Dr(), e !== n) {
        if (Re[t])
          return;
        Ue(n, Ue(Gi(e, s), o)), _r(n.prototype, _r(s, Gi(e, o))), Re[n.prop = t] = n, e.targetTest && (Ni.push(n), Ms[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      yl(t, n), e.register && e.register(Oe, n, Pe);
    } else
      Rl.push(e);
}, te = 255, Kr = {
  aqua: [0, te, te],
  lime: [0, te, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, te],
  navy: [0, 0, 128],
  white: [te, te, te],
  olive: [128, 128, 0],
  yellow: [te, te, 0],
  orange: [te, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [te, 0, 0],
  pink: [te, 192, 203],
  cyan: [0, te, te],
  transparent: [te, te, te, 0]
}, _n = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * te + 0.5 | 0;
}, ql = function(e, t, r) {
  var n = e ? _t(e) ? [e >> 16, e >> 8 & te, e & te] : 0 : Kr.black, s, o, a, l, u, c, d, f, h, b;
  if (!n) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Kr[e])
      n = Kr[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & te, n & te, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & te, e & te];
    } else if (e.substr(0, 3) === "hsl") {
      if (n = b = e.match(Jn), !t)
        l = +n[0] % 360 / 360, u = +n[1] / 100, c = +n[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, s = c * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = _n(l + 1 / 3, s, o), n[1] = _n(l, s, o), n[2] = _n(l - 1 / 3, s, o);
      else if (~e.indexOf("="))
        return n = e.match(ml), r && n.length < 4 && (n[3] = 1), n;
    } else
      n = e.match(Jn) || Kr.transparent;
    n = n.map(Number);
  }
  return t && !b && (s = n[0] / te, o = n[1] / te, a = n[2] / te, d = Math.max(s, o, a), f = Math.min(s, o, a), c = (d + f) / 2, d === f ? l = u = 0 : (h = d - f, u = c > 0.5 ? h / (2 - d - f) : h / (d + f), l = d === s ? (o - a) / h + (o < a ? 6 : 0) : d === o ? (a - s) / h + 2 : (s - o) / h + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(u * 100 + 0.5), n[2] = ~~(c * 100 + 0.5)), r && n.length < 4 && (n[3] = 1), n;
}, Vl = function(e) {
  var t = [], r = [], n = -1;
  return e.split(Ot).forEach(function(s) {
    var o = s.match(cr) || [];
    t.push.apply(t, o), r.push(n += o.length + 1);
  }), t.c = r, t;
}, ea = function(e, t, r) {
  var n = "", s = (e + n).match(Ot), o = t ? "hsla(" : "rgba(", a = 0, l, u, c, d;
  if (!s)
    return e;
  if (s = s.map(function(f) {
    return (f = ql(f, t, 1)) && o + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), r && (c = Vl(e), l = r.c, l.join(n) !== c.c.join(n)))
    for (u = e.replace(Ot, "1").split(cr), d = u.length - 1; a < d; a++)
      n += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
  if (!u)
    for (u = e.split(Ot), d = u.length - 1; a < d; a++)
      n += u[a] + s[a];
  return n + u[d];
}, Ot = function() {
  var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Kr)
    i += "|" + e + "\\b";
  return new RegExp(i + ")", "gi");
}(), Xp = /hsl[a]?\(/, $l = function(e) {
  var t = e.join(" "), r;
  if (Ot.lastIndex = 0, Ot.test(t))
    return r = Xp.test(t), e[1] = ea(e[1], r), e[0] = ea(e[0], r, Vl(e[1])), !0;
}, di, qe = function() {
  var i = Date.now, e = 500, t = 33, r = i(), n = r, s = 1e3 / 240, o = s, a = [], l, u, c, d, f, h, b = function m(x) {
    var w = i() - n, g = x === !0, v, y, _, A;
    if ((w > e || w < 0) && (r += w - t), n += w, _ = n - r, v = _ - o, (v > 0 || g) && (A = ++d.frame, f = _ - d.time * 1e3, d.time = _ = _ / 1e3, o += v + (v >= s ? 4 : s - v), y = 1), g || (l = u(m)), y)
      for (h = 0; h < a.length; h++)
        a[h](_, f, A, x);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      b(!0);
    },
    deltaRatio: function(x) {
      return f / (1e3 / (x || 60));
    },
    wake: function() {
      wl && (!Xn && Fs() && (tt = Xn = window, Ns = tt.document || {}, je.gsap = Oe, (tt.gsapVersions || (tt.gsapVersions = [])).push(Oe.version), xl(Ui || tt.GreenSockGlobals || !tt.gsap && tt || {}), Rl.forEach(zl)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), u = c || function(x) {
        return setTimeout(x, o - d.time * 1e3 + 1 | 0);
      }, di = 1, b(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), di = 0, u = ui;
    },
    lagSmoothing: function(x, w) {
      e = x || 1 / 0, t = Math.min(w || 33, e);
    },
    fps: function(x) {
      s = 1e3 / (x || 240), o = d.time * 1e3 + s;
    },
    add: function(x, w, g) {
      var v = w ? function(y, _, A, D) {
        x(y, _, A, D), d.remove(v);
      } : x;
      return d.remove(x), a[g ? "unshift" : "push"](v), Dr(), v;
    },
    remove: function(x, w) {
      ~(w = a.indexOf(x)) && a.splice(w, 1) && h >= w && h--;
    },
    _listeners: a
  }, d;
}(), Dr = function() {
  return !di && qe.wake();
}, J = {}, Qp = /^[\d.\-M][\d.\-,\s]/, e2 = /["']/g, t2 = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), n = r[0], s = 1, o = r.length, a, l, u; s < o; s++)
    l = r[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), t[n] = isNaN(u) ? u.replace(e2, "").trim() : +u, n = l.substr(a + 1).trim();
  return t;
}, r2 = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", t);
  return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r);
}, i2 = function(e) {
  var t = (e + "").split("("), r = J[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [t2(t[1])] : r2(e).split(",").map(Dl)) : J._CE && Qp.test(e) ? J._CE("", e) : r;
}, jl = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Ul = function i(e, t) {
  for (var r = e._first, n; r; )
    r instanceof Ee ? i(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? i(r.timeline, t) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = t)), r = r._next;
}, Qt = function(e, t) {
  return e && (de(e) ? e : J[e] || i2(e)) || t;
}, ir = function(e, t, r, n) {
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
  return Ne(e, function(a) {
    J[a] = je[a] = s, J[o = a.toLowerCase()] = r;
    for (var l in s)
      J[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = J[a + "." + l] = s[l];
  }), s;
}, Hl = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Cn = function i(e, t, r) {
  var n = t >= 1 ? t : 1, s = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = s / Zn * (Math.asin(1 / n) || 0), a = function(c) {
    return c === 1 ? 1 : n * Math.pow(2, -10 * c) * Tp((c - o) * s) + 1;
  }, l = e === "out" ? a : e === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Hl(a);
  return s = Zn / s, l.config = function(u, c) {
    return i(e, u, c);
  }, l;
}, An = function i(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, n = e === "out" ? r : e === "in" ? function(s) {
    return 1 - r(1 - s);
  } : Hl(r);
  return n.config = function(s) {
    return i(e, s);
  }, n;
};
Ne("Linear,Quad,Cubic,Quart,Quint,Strong", function(i, e) {
  var t = e < 5 ? e + 1 : e;
  ir(i + ",Power" + (t - 1), e ? function(r) {
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
ir("Elastic", Cn("in"), Cn("out"), Cn());
(function(i, e) {
  var t = 1 / e, r = 2 * t, n = 2.5 * t, s = function(a) {
    return a < t ? i * a * a : a < r ? i * Math.pow(a - 1.5 / e, 2) + 0.75 : a < n ? i * (a -= 2.25 / e) * a + 0.9375 : i * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  ir("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
ir("Expo", function(i) {
  return Math.pow(2, 10 * (i - 1)) * i + i * i * i * i * i * i * (1 - i);
});
ir("Circ", function(i) {
  return -(hl(1 - i * i) - 1);
});
ir("Sine", function(i) {
  return i === 1 ? 1 : -Lp(i * Ep) + 1;
});
ir("Back", An("in"), An("out"), An());
J.SteppedEase = J.steps = je.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, n = e + (t ? 0 : 1), s = t ? 1 : 0, o = 1 - ie;
    return function(a) {
      return ((n * vi(0, o, a) | 0) + s) * r;
    };
  }
};
yr.ease = J["quad.out"];
Ne("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i) {
  return Os += i + "," + i + "Params,";
});
var Gl = function(e, t) {
  this.id = Bp++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Cl, this.set = t ? t.getSetter : Vs;
}, pi = /* @__PURE__ */ function() {
  function i(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ar(this, +t.duration, 1, 1), this.data = t.data, oe && (this._ctx = oe, oe.data.push(this)), di || qe.wake();
  }
  var e = i.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Ar(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, n) {
    if (Dr(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (fn(this, r), !s._dp || s.parent || El(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && rt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === ie || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Al(this, r, n)), this;
  }, e.time = function(r, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Jo(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time;
  }, e.totalProgress = function(r, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Jo(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, n) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * s, n) : this._repeat ? Cr(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(r, n) {
    if (!arguments.length)
      return this._rts === -ie ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var s = this.parent && this._ts ? Yi(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -ie ? 0 : this._rts, this.totalTime(vi(-Math.abs(this._delay), this._tDur, s), n !== !1), pn(this), Rp(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Dr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ie && (this._tTime -= ie)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && rt(n, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (Fe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var n = this.parent || this._dp;
    return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Yi(n.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = Pp);
    var n = we;
    return we = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), we = n, this;
  }, e.globalTime = function(r) {
    for (var n = this, s = arguments.length ? r : n.rawTime(); n; )
      s = n._start + s / (Math.abs(n._ts) || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : s;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Xo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = r, Xo(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, n) {
    return this.totalTime(He(this, r), Fe(n));
  }, e.restart = function(r, n) {
    return this.play().totalTime(r ? -this._delay : 0, Fe(n)), this._dur || (this._zTime = -ie), this;
  }, e.play = function(r, n) {
    return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, n) {
    return r != null && this.seek(r || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, e.pause = function(r, n) {
    return r != null && this.seek(r, n), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ie : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ie, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, n = this._start, s;
    return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= n && s < this.endTime(!0) - ie);
  }, e.eventCallback = function(r, n, s) {
    var o = this.vars;
    return arguments.length > 1 ? (n ? (o[r] = n, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = n)) : delete o[r], this) : o[r];
  }, e.then = function(r) {
    var n = this;
    return new Promise(function(s) {
      var o = de(r) ? r : kl, a = function() {
        var u = n.then;
        n.then = null, de(o) && (o = o(n)) && (o.then || o === n) && (n.then = u), s(o), n.then = u;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a;
    });
  }, e.kill = function() {
    Wr(this);
  }, i;
}();
Ue(pi.prototype, {
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
  _zTime: -ie,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Ee = /* @__PURE__ */ function(i) {
  fl(e, i);
  function e(r, n) {
    var s;
    return r === void 0 && (r = {}), s = i.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = Fe(r.sortChildren), le && rt(r.parent || le, mt(s), n), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && Bl(mt(s), r.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(n, s, o) {
    return ti(0, arguments, this), this;
  }, t.from = function(n, s, o) {
    return ti(1, arguments, this), this;
  }, t.fromTo = function(n, s, o, a) {
    return ti(2, arguments, this), this;
  }, t.set = function(n, s, o) {
    return s.duration = 0, s.parent = this, ei(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new he(n, s, He(this, o), 1), this;
  }, t.call = function(n, s, o) {
    return rt(this, he.delayedCall(0, n, s), o);
  }, t.staggerTo = function(n, s, o, a, l, u, c) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new he(n, o, He(this, l)), this;
  }, t.staggerFrom = function(n, s, o, a, l, u, c) {
    return o.runBackwards = 1, ei(o).immediateRender = Fe(o.immediateRender), this.staggerTo(n, s, o, a, l, u, c);
  }, t.staggerFromTo = function(n, s, o, a, l, u, c, d) {
    return a.startAt = o, ei(a).immediateRender = Fe(a.immediateRender), this.staggerTo(n, s, a, l, u, c, d);
  }, t.render = function(n, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = n <= 0 ? 0 : ge(n), d = this._zTime < 0 != n < 0 && (this._initted || !u), f, h, b, m, x, w, g, v, y, _, A, D;
    if (this !== le && c > l && n >= 0 && (c = l), c !== this._tTime || o || d) {
      if (a !== this._time && u && (c += this._time - a, n += this._time - a), f = c, y = this._start, v = this._ts, w = !v, d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
        if (A = this._yoyo, x = u + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(x * 100 + n, s, o);
        if (f = ge(c % x), c === l ? (m = this._repeat, f = u) : (_ = ge(c / x), m = ~~_, m && m === _ && (f = u, m--), f > u && (f = u)), _ = Cr(this._tTime, x), !a && this._tTime && _ !== m && this._tTime - _ * x - this._dur <= 0 && (_ = m), A && m & 1 && (f = u - f, D = 1), m !== _ && !this._lock) {
          var k = A && _ & 1, C = k === (A && m & 1);
          if (m < _ && (k = !k), a = k ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (D ? 0 : ge(m * x)), s, !u)._lock = 0, this._tTime = c, !s && this.parent && Ve(this, "onRepeat"), this.vars.repeatRefresh && !D && (this.invalidate()._lock = 1), a && a !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, C && (this._lock = 2, a = k ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !D && this.invalidate()), this._lock = 0, !this._ts && !w)
            return this;
          Ul(this, D);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (g = $p(this, ge(a), ge(f)), g && (c -= f - (f = g._start))), this._tTime = c, this._time = f, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && f && !s && !m && (Ve(this, "onStart"), this._tTime !== c))
        return this;
      if (f >= a && n >= 0)
        for (h = this._first; h; ) {
          if (b = h._next, (h._act || f >= h._start) && h._ts && g !== h) {
            if (h.parent !== this)
              return this.render(n, s, o);
            if (h.render(h._ts > 0 ? (f - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (f - h._start) * h._ts, s, o), f !== this._time || !this._ts && !w) {
              g = 0, b && (c += this._zTime = -ie);
              break;
            }
          }
          h = b;
        }
      else {
        h = this._last;
        for (var S = n < 0 ? n : f; h; ) {
          if (b = h._prev, (h._act || S <= h._end) && h._ts && g !== h) {
            if (h.parent !== this)
              return this.render(n, s, o);
            if (h.render(h._ts > 0 ? (S - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (S - h._start) * h._ts, s, o || we && (h._initted || h._startAt)), f !== this._time || !this._ts && !w) {
              g = 0, b && (c += this._zTime = S ? -ie : ie);
              break;
            }
          }
          h = b;
        }
      }
      if (g && !s && (this.pause(), g.render(f >= a ? 0 : -ie)._zTime = f >= a ? 1 : -1, this._ts))
        return this._start = y, pn(this), this.render(n, s, o);
      this._onUpdate && !s && Ve(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (y === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((n || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && zt(this, 1), !s && !(n < 0 && !a) && (c || a || !l) && (Ve(this, c === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(n, s) {
    var o = this;
    if (_t(s) || (s = He(this, s, n)), !(n instanceof pi)) {
      if (Ae(n))
        return n.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (ve(n))
        return this.addLabel(n, s);
      if (de(n))
        n = he.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? rt(this, n, s) : this;
  }, t.getChildren = function(n, s, o, a) {
    n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -Ye);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof he ? s && l.push(u) : (o && l.push(u), n && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
    return l;
  }, t.getById = function(n) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === n)
        return s[o];
  }, t.remove = function(n) {
    return ve(n) ? this.removeLabel(n) : de(n) ? this.killTweensOf(n) : (n.parent === this && dn(this, n), n === this._recent && (this._recent = this._last), Xt(this));
  }, t.totalTime = function(n, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ge(qe.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), i.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(n, s) {
    return this.labels[n] = He(this, s), this;
  }, t.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, t.addPause = function(n, s, o) {
    var a = he.delayedCall(0, s || ui, o);
    return a.data = "isPause", this._hasPause = 1, rt(this, a, He(this, n));
  }, t.removePause = function(n) {
    var s = this._first;
    for (n = He(this, n); s; )
      s._start === n && s.data === "isPause" && zt(s), s = s._next;
  }, t.killTweensOf = function(n, s, o) {
    for (var a = this.getTweensOf(n, o), l = a.length; l--; )
      Lt !== a[l] && a[l].kill(n, s);
    return this;
  }, t.getTweensOf = function(n, s) {
    for (var o = [], a = We(n), l = this._first, u = _t(s), c; l; )
      l instanceof he ? Mp(l._targets, a) && (u ? (!Lt || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, t.tweenTo = function(n, s) {
    s = s || {};
    var o = this, a = He(o, n), l = s, u = l.startAt, c = l.onStart, d = l.onStartParams, f = l.immediateRender, h, b = he.to(o, Ue({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || ie,
      onStart: function() {
        if (o.pause(), !h) {
          var x = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          b._dur !== x && Ar(b, x, 0, 1).render(b._time, !0, !0), h = 1;
        }
        c && c.apply(b, d || []);
      }
    }, s));
    return f ? b.render(0) : b;
  }, t.tweenFromTo = function(n, s, o) {
    return this.tweenTo(s, Ue({
      startAt: {
        time: He(this, n)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(n) {
    return n === void 0 && (n = this._time), Qo(this, He(this, n));
  }, t.previousLabel = function(n) {
    return n === void 0 && (n = this._time), Qo(this, He(this, n), 1);
  }, t.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + ie);
  }, t.shiftChildren = function(n, s, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, u; a; )
      a._start >= o && (a._start += n, a._end += n), a = a._next;
    if (s)
      for (u in l)
        l[u] >= o && (l[u] += n);
    return Xt(this);
  }, t.invalidate = function(n) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(n), s = s._next;
    return i.prototype.invalidate.call(this, n);
  }, t.clear = function(n) {
    n === void 0 && (n = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), Xt(this);
  }, t.totalDuration = function(n) {
    var s = 0, o = this, a = o._last, l = Ye, u, c, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
    if (o._dirty) {
      for (d = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, rt(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (s -= c, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
      Ar(o, o === le && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(n) {
    if (le._ts && (Al(le, Yi(n, le)), _l = qe.frame), qe.frame >= Ko) {
      Ko += $e.autoSleep || 120;
      var s = le._first;
      if ((!s || !s._ts) && $e.autoSleep && qe._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || qe.sleep();
      }
    }
  }, e;
}(pi);
Ue(Ee.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var n2 = function(e, t, r, n, s, o, a) {
  var l = new Pe(this._pt, e, t, 0, 1, Xl, null, s), u = 0, c = 0, d, f, h, b, m, x, w, g;
  for (l.b = r, l.e = n, r += "", n += "", (w = ~n.indexOf("random(")) && (n = ci(n)), o && (g = [r, n], o(g, e, t), r = g[0], n = g[1]), f = r.match(xn) || []; d = xn.exec(n); )
    b = d[0], m = n.substring(u, d.index), h ? h = (h + 1) % 5 : m.substr(-5) === "rgba(" && (h = 1), b !== f[c++] && (x = parseFloat(f[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: m || c === 1 ? m : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: x,
      c: b.charAt(1) === "=" ? hr(x, b) - x : parseFloat(b) - x,
      m: h && h < 4 ? Math.round : 0
    }, u = xn.lastIndex);
  return l.c = u < n.length ? n.substring(u, n.length) : "", l.fp = a, (bl.test(n) || w) && (l.e = 0), this._pt = l, l;
}, Rs = function(e, t, r, n, s, o, a, l, u, c) {
  de(n) && (n = n(s || 0, e, o));
  var d = e[t], f = r !== "get" ? r : de(d) ? u ? e[t.indexOf("set") || !de(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : d, h = de(d) ? u ? u2 : Zl : qs, b;
  if (ve(n) && (~n.indexOf("random(") && (n = ci(n)), n.charAt(1) === "=" && (b = hr(f, n) + (_e(f) || 0), (b || b === 0) && (n = b))), !c || f !== n || ss)
    return !isNaN(f * n) && n !== "" ? (b = new Pe(this._pt, e, t, +f || 0, n - (f || 0), typeof d == "boolean" ? d2 : Jl, 0, h), u && (b.fp = u), a && b.modifier(a, this, e), this._pt = b) : (!d && !(t in e) && Ps(t, n), n2.call(this, e, t, f, n, h, l || $e.stringFilter, u));
}, s2 = function(e, t, r, n, s) {
  if (de(e) && (e = ri(e, s, t, r, n)), !ct(e) || e.style && e.nodeType || Ae(e) || gl(e))
    return ve(e) ? ri(e, s, t, r, n) : e;
  var o = {}, a;
  for (a in e)
    o[a] = ri(e[a], s, t, r, n);
  return o;
}, Yl = function(e, t, r, n, s, o) {
  var a, l, u, c;
  if (Re[e] && (a = new Re[e]()).init(s, a.rawVars ? t[e] : s2(t[e], n, s, o, r), r, n, o) !== !1 && (r._pt = l = new Pe(r._pt, s, e, 0, 1, a.render, a, 0, a.priority), r !== dr))
    for (u = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, Lt, ss, zs = function i(e, t, r) {
  var n = e.vars, s = n.ease, o = n.startAt, a = n.immediateRender, l = n.lazy, u = n.onUpdate, c = n.runBackwards, d = n.yoyoEase, f = n.keyframes, h = n.autoRevert, b = e._dur, m = e._startAt, x = e._targets, w = e.parent, g = w && w.data === "nested" ? w.vars.targets : x, v = e._overwrite === "auto" && !Ls, y = e.timeline, _, A, D, k, C, S, E, T, F, P, z, N, I;
  if (y && (!f || !s) && (s = "none"), e._ease = Qt(s, yr.ease), e._yEase = d ? jl(Qt(d === !0 ? s : d, yr.ease)) : 0, d && e._yoyo && !e._repeat && (d = e._yEase, e._yEase = e._ease, e._ease = d), e._from = !y && !!n.runBackwards, !y || f && !n.stagger) {
    if (T = x[0] ? Jt(x[0]).harness : 0, N = T && n[T.prop], _ = Gi(n, Ms), m && (m._zTime < 0 && m.progress(1), t < 0 && c && a && !h ? m.render(-1, !0) : m.revert(c && b ? Fi : Np), m._lazy = 0), o) {
      if (zt(e._startAt = he.set(x, Ue({
        data: "isStart",
        overwrite: !1,
        parent: w,
        immediateRender: !0,
        lazy: !m && Fe(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Ve(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (we || !a && !h) && e._startAt.revert(Fi), a && b && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && b && !m) {
      if (t && (a = !1), D = Ue({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !m && Fe(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: w
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, _), N && (D[T.prop] = N), zt(e._startAt = he.set(x, D)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (we ? e._startAt.revert(Fi) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        i(e._startAt, ie, ie);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = b && Fe(l) || l && !b, A = 0; A < x.length; A++) {
      if (C = x[A], E = C._gsap || Is(x)[A]._gsap, e._ptLookup[A] = P = {}, Qn[E.id] && Mt.length && Hi(), z = g === x ? A : g.indexOf(C), T && (F = new T()).init(C, N || _, e, z, g) !== !1 && (e._pt = k = new Pe(e._pt, C, F.name, 0, 1, F.render, F, 0, F.priority), F._props.forEach(function(L) {
        P[L] = k;
      }), F.priority && (S = 1)), !T || N)
        for (D in _)
          Re[D] && (F = Yl(D, _, e, z, C, g)) ? F.priority && (S = 1) : P[D] = k = Rs.call(e, C, D, "get", _[D], z, g, 0, n.stringFilter);
      e._op && e._op[A] && e.kill(C, e._op[A]), v && e._pt && (Lt = e, le.killTweensOf(C, P, e.globalTime(t)), I = !e.parent, Lt = 0), e._pt && l && (Qn[E.id] = 1);
    }
    S && Ql(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !I, f && t <= 0 && y.render(Ye, !0, !0);
}, o2 = function(e, t, r, n, s, o, a, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, d, f, h;
  if (!u)
    for (u = e._ptCache[t] = [], f = e._ptLookup, h = e._targets.length; h--; ) {
      if (c = f[h][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return ss = 1, e.vars[t] = "+=0", zs(e, a), ss = 0, l ? li(t + " not eligible for reset") : 1;
      u.push(c);
    }
  for (h = u.length; h--; )
    d = u[h], c = d._pt || d, c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + o * c.c, c.c = r - c.s, d.e && (d.e = pe(r) + _e(d.e)), d.b && (d.b = c.s + _e(d.b));
}, a2 = function(e, t) {
  var r = e[0] ? Jt(e[0]).harness : 0, n = r && r.aliases, s, o, a, l;
  if (!n)
    return t;
  s = _r({}, t);
  for (o in n)
    if (o in s)
      for (l = n[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, l2 = function(e, t, r, n) {
  var s = t.ease || n || "power1.inOut", o, a;
  if (Ae(t))
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
}, ri = function(e, t, r, n, s) {
  return de(e) ? e.call(t, r, n, s) : ve(e) && ~e.indexOf("random(") ? ci(e) : e;
}, Wl = Os + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Kl = {};
Ne(Wl + ",id,stagger,delay,duration,paused,scrollTrigger", function(i) {
  return Kl[i] = 1;
});
var he = /* @__PURE__ */ function(i) {
  fl(e, i);
  function e(r, n, s, o) {
    var a;
    typeof n == "number" && (s.duration = n, n = s, s = null), a = i.call(this, o ? n : ei(n)) || this;
    var l = a.vars, u = l.duration, c = l.delay, d = l.immediateRender, f = l.stagger, h = l.overwrite, b = l.keyframes, m = l.defaults, x = l.scrollTrigger, w = l.yoyoEase, g = n.parent || le, v = (Ae(r) || gl(r) ? _t(r[0]) : "length" in n) ? [r] : We(r), y, _, A, D, k, C, S, E;
    if (a._targets = v.length ? Is(v) : li("GSAP target " + r + " not found. https://gsap.com", !$e.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = h, b || f || Di(u) || Di(c)) {
      if (n = a.vars, y = a.timeline = new Ee({
        data: "nested",
        defaults: m || {},
        targets: g && g.data === "nested" ? g.vars.targets : v
      }), y.kill(), y.parent = y._dp = mt(a), y._start = 0, f || Di(u) || Di(c)) {
        if (D = v.length, S = f && Nl(f), ct(f))
          for (k in f)
            ~Wl.indexOf(k) && (E || (E = {}), E[k] = f[k]);
        for (_ = 0; _ < D; _++)
          A = Gi(n, Kl), A.stagger = 0, w && (A.yoyoEase = w), E && _r(A, E), C = v[_], A.duration = +ri(u, mt(a), _, C, v), A.delay = (+ri(c, mt(a), _, C, v) || 0) - a._delay, !f && D === 1 && A.delay && (a._delay = c = A.delay, a._start += c, A.delay = 0), y.to(C, A, S ? S(_, C, v) : 0), y._ease = J.none;
        y.duration() ? u = c = 0 : a.timeline = 0;
      } else if (b) {
        ei(Ue(y.vars.defaults, {
          ease: "none"
        })), y._ease = Qt(b.ease || n.ease || "none");
        var T = 0, F, P, z;
        if (Ae(b))
          b.forEach(function(N) {
            return y.to(v, N, ">");
          }), y.duration();
        else {
          A = {};
          for (k in b)
            k === "ease" || k === "easeEach" || l2(k, b[k], A, b.easeEach);
          for (k in A)
            for (F = A[k].sort(function(N, I) {
              return N.t - I.t;
            }), T = 0, _ = 0; _ < F.length; _++)
              P = F[_], z = {
                ease: P.e,
                duration: (P.t - (_ ? F[_ - 1].t : 0)) / 100 * u
              }, z[k] = P.v, y.to(v, z, T), T += z.duration;
          y.duration() < u && y.to({}, {
            duration: u - y.duration()
          });
        }
      }
      u || a.duration(u = y.duration());
    } else
      a.timeline = 0;
    return h === !0 && !Ls && (Lt = mt(a), le.killTweensOf(v), Lt = 0), rt(g, mt(a), s), n.reversed && a.reverse(), n.paused && a.paused(!0), (d || !u && !b && a._start === ge(g._time) && Fe(d) && zp(mt(a)) && g.data !== "nested") && (a._tTime = -ie, a.render(Math.max(0, -c) || 0)), x && Bl(mt(a), x), a;
  }
  var t = e.prototype;
  return t.render = function(n, s, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = n < 0, d = n > l - ie && !c ? l : n < ie ? 0 : n, f, h, b, m, x, w, g, v, y;
    if (!u)
      Vp(this, n, s, o);
    else if (d !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (f = d, v = this.timeline, this._repeat) {
        if (m = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(m * 100 + n, s, o);
        if (f = ge(d % m), d === l ? (b = this._repeat, f = u) : (x = ge(d / m), b = ~~x, b && b === x ? (f = u, b--) : f > u && (f = u)), w = this._yoyo && b & 1, w && (y = this._yEase, f = u - f), x = Cr(this._tTime, m), f === a && !o && this._initted && b === x)
          return this._tTime = d, this;
        b !== x && (v && this._yEase && Ul(v, w), this.vars.repeatRefresh && !w && !this._lock && f !== m && this._initted && (this._lock = o = 1, this.render(ge(m * b), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Ll(this, c ? n : f, o, s, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && b !== x))
          return this;
        if (u !== this._dur)
          return this.render(n, s, o);
      }
      if (this._tTime = d, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = g = (y || this._ease)(f / u), this._from && (this.ratio = g = 1 - g), f && !a && !s && !b && (Ve(this, "onStart"), this._tTime !== d))
        return this;
      for (h = this._pt; h; )
        h.r(g, h.d), h = h._next;
      v && v.render(n < 0 ? n : v._dur * v._ease(f / this._dur), s, o) || this._startAt && (this._zTime = n), this._onUpdate && !s && (c && es(this, n, s, o), Ve(this, "onUpdate")), this._repeat && b !== x && this.vars.onRepeat && !s && this.parent && Ve(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (c && !this._onUpdate && es(this, n, !0, !0), (n || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && zt(this, 1), !s && !(c && !a) && (d || a || w) && (Ve(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), i.prototype.invalidate.call(this, n);
  }, t.resetTo = function(n, s, o, a, l) {
    di || qe.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || zs(this, u), c = this._ease(u / this._dur), o2(this, n, s, o, a, c, u, l) ? this.resetTo(n, s, o, a, 1) : (fn(this, 0), this.parent || Sl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(n, s) {
    if (s === void 0 && (s = "all"), !n && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? Wr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!we), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, s, Lt && Lt.vars.overwrite !== !0)._first || Wr(this), this.parent && o !== this.timeline.totalDuration() && Ar(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = n ? We(n) : a, u = this._ptLookup, c = this._pt, d, f, h, b, m, x, w;
    if ((!s || s === "all") && Ip(a, l))
      return s === "all" && (this._pt = 0), Wr(this);
    for (d = this._op = this._op || [], s !== "all" && (ve(s) && (m = {}, Ne(s, function(g) {
      return m[g] = 1;
    }), s = m), s = a2(a, s)), w = a.length; w--; )
      if (~l.indexOf(a[w])) {
        f = u[w], s === "all" ? (d[w] = s, b = f, h = {}) : (h = d[w] = d[w] || {}, b = s);
        for (m in b)
          x = f && f[m], x && ((!("kill" in x.d) || x.d.kill(m) === !0) && dn(this, x, "_pt"), delete f[m]), h !== "all" && (h[m] = 1);
      }
    return this._initted && !this._pt && c && Wr(this), this;
  }, e.to = function(n, s) {
    return new e(n, s, arguments[2]);
  }, e.from = function(n, s) {
    return ti(1, arguments);
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
    return ti(2, arguments);
  }, e.set = function(n, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(n, s);
  }, e.killTweensOf = function(n, s, o) {
    return le.killTweensOf(n, s, o);
  }, e;
}(pi);
Ue(he.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ne("staggerTo,staggerFrom,staggerFromTo", function(i) {
  he[i] = function() {
    var e = new Ee(), t = rs.call(arguments, 0);
    return t.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), e[i].apply(e, t);
  };
});
var qs = function(e, t, r) {
  return e[t] = r;
}, Zl = function(e, t, r) {
  return e[t](r);
}, u2 = function(e, t, r, n) {
  return e[t](n.fp, r);
}, c2 = function(e, t, r) {
  return e.setAttribute(t, r);
}, Vs = function(e, t) {
  return de(e[t]) ? Zl : Ts(e[t]) && e.setAttribute ? c2 : qs;
}, Jl = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, d2 = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Xl = function(e, t) {
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
}, $s = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, p2 = function(e, t, r, n) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === n && s.modifier(e, t, r), s = o;
}, f2 = function(e) {
  for (var t = this._pt, r, n; t; )
    n = t._next, t.p === e && !t.op || t.op === e ? dn(this, t, "_pt") : t.dep || (r = 1), t = n;
  return !r;
}, h2 = function(e, t, r, n) {
  n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
}, Ql = function(e) {
  for (var t = e._pt, r, n, s, o; t; ) {
    for (r = t._next, n = s; n && n.pr > t.pr; )
      n = n._next;
    (t._prev = n ? n._prev : o) ? t._prev._next = t : s = t, (t._next = n) ? n._prev = t : o = t, t = r;
  }
  e._pt = s;
}, Pe = /* @__PURE__ */ function() {
  function i(t, r, n, s, o, a, l, u, c) {
    this.t = r, this.s = s, this.c = o, this.p = n, this.r = a || Jl, this.d = l || this, this.set = u || qs, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = i.prototype;
  return e.modifier = function(r, n, s) {
    this.mSet = this.mSet || this.set, this.set = h2, this.m = r, this.mt = s, this.tween = n;
  }, i;
}();
Ne(Os + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(i) {
  return Ms[i] = 1;
});
je.TweenMax = je.TweenLite = he;
je.TimelineLite = je.TimelineMax = Ee;
le = new Ee({
  sortChildren: !1,
  defaults: yr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
$e.stringFilter = $l;
var er = [], Pi = {}, g2 = [], ta = 0, m2 = 0, Dn = function(e) {
  return (Pi[e] || g2).map(function(t) {
    return t();
  });
}, os = function() {
  var e = Date.now(), t = [];
  e - ta > 2 && (Dn("matchMediaInit"), er.forEach(function(r) {
    var n = r.queries, s = r.conditions, o, a, l, u;
    for (a in n)
      o = tt.matchMedia(n[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
    u && (r.revert(), l && t.push(r));
  }), Dn("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(n) {
      return r.add(null, n);
    });
  }), ta = e, Dn("matchMedia"));
}, eu = /* @__PURE__ */ function() {
  function i(t, r) {
    this.selector = r && is(r), this.data = [], this._r = [], this.isReverted = !1, this.id = m2++, t && this.add(t);
  }
  var e = i.prototype;
  return e.add = function(r, n, s) {
    de(r) && (s = n, n = r, r = de);
    var o = this, a = function() {
      var u = oe, c = o.selector, d;
      return u && u !== o && u.data.push(o), s && (o.selector = is(s)), oe = o, d = n.apply(o, arguments), de(d) && o._r.push(d), oe = u, o.selector = c, o.isReverted = !1, d;
    };
    return o.last = a, r === de ? a(o, function(l) {
      return o.add(null, l);
    }) : r ? o[r] = a : a;
  }, e.ignore = function(r) {
    var n = oe;
    oe = null, r(this), oe = n;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(n) {
      return n instanceof i ? r.push.apply(r, n.getTweens()) : n instanceof he && !(n.parent && n.parent.data === "nested") && r.push(n);
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
        u = s.data[l], u instanceof Ee ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof he) && u.revert && u.revert(r);
      s._r.forEach(function(c) {
        return c(r, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), n)
      for (var o = er.length; o--; )
        er[o].id === this.id && er.splice(o, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, i;
}(), b2 = /* @__PURE__ */ function() {
  function i(t) {
    this.contexts = [], this.scope = t, oe && oe.data.push(this);
  }
  var e = i.prototype;
  return e.add = function(r, n, s) {
    ct(r) || (r = {
      matches: r
    });
    var o = new eu(0, s || this.scope), a = o.conditions = {}, l, u, c;
    oe && !o.selector && (o.selector = oe.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (l = tt.matchMedia(r[u]), l && (er.indexOf(o) < 0 && er.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(os) : l.addEventListener("change", os)));
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
}(), Wi = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(n) {
      return zl(n);
    });
  },
  timeline: function(e) {
    return new Ee(e);
  },
  getTweensOf: function(e, t) {
    return le.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, n) {
    ve(e) && (e = We(e)[0]);
    var s = Jt(e || {}).get, o = r ? kl : Dl;
    return r === "native" && (r = ""), e && (t ? o((Re[t] && Re[t].get || s)(e, t, r, n)) : function(a, l, u) {
      return o((Re[a] && Re[a].get || s)(e, a, l, u));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = We(e), e.length > 1) {
      var n = e.map(function(c) {
        return Oe.quickSetter(c, t, r);
      }), s = n.length;
      return function(c) {
        for (var d = s; d--; )
          n[d](c);
      };
    }
    e = e[0] || {};
    var o = Re[t], a = Jt(e), l = a.harness && (a.harness.aliases || {})[t] || t, u = o ? function(c) {
      var d = new o();
      dr._pt = 0, d.init(e, r ? c + r : c, dr, 0, [e]), d.render(1, d), dr._pt && $s(1, dr);
    } : a.set(e, l);
    return o ? u : function(c) {
      return u(e, l, r ? c + r : c, a, 1);
    };
  },
  quickTo: function(e, t, r) {
    var n, s = Oe.to(e, Ue((n = {}, n[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})), o = function(l, u, c) {
      return s.resetTo(t, l, u, c);
    };
    return o.tween = s, o;
  },
  isTweening: function(e) {
    return le.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Qt(e.ease, yr.ease)), Zo(yr, e || {});
  },
  config: function(e) {
    return Zo($e, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, n = e.plugins, s = e.defaults, o = e.extendTimeline;
    (n || "").split(",").forEach(function(a) {
      return a && !Re[a] && !je[a] && li(t + " effect requires " + a + " plugin.");
    }), yn[t] = function(a, l, u) {
      return r(We(a), Ue(l || {}, s), u);
    }, o && (Ee.prototype[t] = function(a, l, u) {
      return this.add(yn[t](a, ct(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(e, t) {
    J[e] = Qt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Qt(e, t) : J;
  },
  getById: function(e) {
    return le.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new Ee(e), n, s;
    for (r.smoothChildTiming = Fe(e.smoothChildTiming), le.remove(r), r._dp = 0, r._time = r._tTime = le._time, n = le._first; n; )
      s = n._next, (t || !(!n._dur && n instanceof he && n.vars.onComplete === n._targets[0])) && rt(r, n, n._start - n._delay), n = s;
    return rt(le, r, 0), r;
  },
  context: function(e, t) {
    return e ? new eu(e, t) : oe;
  },
  matchMedia: function(e) {
    return new b2(e);
  },
  matchMediaRefresh: function() {
    return er.forEach(function(e) {
      var t = e.conditions, r, n;
      for (n in t)
        t[n] && (t[n] = !1, r = 1);
      r && e.revert();
    }) || os();
  },
  addEventListener: function(e, t) {
    var r = Pi[e] || (Pi[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = Pi[e], n = r && r.indexOf(t);
    n >= 0 && r.splice(n, 1);
  },
  utils: {
    wrap: Kp,
    wrapYoyo: Zp,
    distribute: Nl,
    random: Ml,
    snap: Pl,
    normalize: Wp,
    getUnit: _e,
    clamp: Up,
    splitColor: ql,
    toArray: We,
    selector: is,
    mapRange: Il,
    pipe: Gp,
    unitize: Yp,
    interpolate: Jp,
    shuffle: Fl
  },
  install: xl,
  effects: yn,
  ticker: qe,
  updateRoot: Ee.updateRoot,
  plugins: Re,
  globalTimeline: le,
  core: {
    PropTween: Pe,
    globals: yl,
    Tween: he,
    Timeline: Ee,
    Animation: pi,
    getCache: Jt,
    _removeLinkedListItem: dn,
    reverting: function() {
      return we;
    },
    context: function(e) {
      return e && oe && (oe.data.push(e), e._ctx = oe), oe;
    },
    suppressOverwrites: function(e) {
      return Ls = e;
    }
  }
};
Ne("to,from,fromTo,delayedCall,set,killTweensOf", function(i) {
  return Wi[i] = he[i];
});
qe.add(Ee.updateRoot);
dr = Wi.to({}, {
  duration: 0
});
var v2 = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, w2 = function(e, t) {
  var r = e._targets, n, s, o;
  for (n in t)
    for (s = r.length; s--; )
      o = e._ptLookup[s][n], o && (o = o.d) && (o._pt && (o = v2(o, n)), o && o.modifier && o.modifier(t[n], e, r[s], n));
}, kn = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, s, o) {
      o._onInit = function(a) {
        var l, u;
        if (ve(s) && (l = {}, Ne(s, function(c) {
          return l[c] = 1;
        }), s = l), t) {
          l = {};
          for (u in s)
            l[u] = t(s[u]);
          s = l;
        }
        w2(a, s);
      };
    }
  };
}, Oe = Wi.registerPlugin({
  name: "attr",
  init: function(e, t, r, n, s) {
    var o, a, l;
    this.tween = r;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], n, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      we ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, kn("roundProps", ns), kn("modifiers"), kn("snap", Pl)) || Wi;
he.version = Ee.version = Oe.version = "3.12.7";
wl = 1;
Fs() && Dr();
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
var ra, Tt, gr, js, Kt, ia, Us, x2 = function() {
  return typeof window < "u";
}, Ct = {}, Ht = 180 / Math.PI, mr = Math.PI / 180, ar = Math.atan2, na = 1e8, Hs = /([A-Z])/g, y2 = /(left|right|width|margin|padding|x)/i, _2 = /[\s,\(]\S/, st = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, as = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, C2 = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, A2 = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, D2 = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, tu = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, ru = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, k2 = function(e, t, r) {
  return e.style[t] = r;
}, S2 = function(e, t, r) {
  return e.style.setProperty(t, r);
}, E2 = function(e, t, r) {
  return e._gsap[t] = r;
}, B2 = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, L2 = function(e, t, r, n, s) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(s, o);
}, T2 = function(e, t, r, n, s) {
  var o = e._gsap;
  o[t] = r, o.renderTransform(s, o);
}, ue = "transform", Me = ue + "Origin", F2 = function i(e, t) {
  var r = this, n = this.target, s = n.style, o = n._gsap;
  if (e in Ct && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = st[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = vt(n, a);
      }) : this.tfm[e] = o.x ? o[e] : vt(n, e), e === Me && (this.tfm.zOrigin = o.zOrigin);
    else
      return st.transform.split(",").forEach(function(a) {
        return i.call(r, a, t);
      });
    if (this.props.indexOf(ue) >= 0)
      return;
    o.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Me, t, "")), e = ue;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, iu = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, N2 = function() {
  var e = this.props, t = this.target, r = t.style, n = t._gsap, s, o;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Hs, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      n[o] = this.tfm[o];
    n.svg && (n.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = Us(), (!s || !s.isStart) && !r[ue] && (iu(r), n.zOrigin && r[Me] && (r[Me] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
  }
}, nu = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: N2,
    save: F2
  };
  return e._gsap || Oe.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(n) {
    return r.save(n);
  }), r;
}, su, ls = function(e, t) {
  var r = Tt.createElementNS ? Tt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Tt.createElement(e);
  return r && r.style ? r : Tt.createElement(e);
}, lt = function i(e, t, r) {
  var n = getComputedStyle(e);
  return n[t] || n.getPropertyValue(t.replace(Hs, "-$1").toLowerCase()) || n.getPropertyValue(t) || !r && i(e, kr(t) || t, 1) || "";
}, sa = "O,Moz,ms,Ms,Webkit".split(","), kr = function(e, t, r) {
  var n = t || Kt, s = n.style, o = 5;
  if (e in s && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(sa[o] + e in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? sa[o] : "") + e;
}, us = function() {
  x2() && window.document && (ra = window, Tt = ra.document, gr = Tt.documentElement, Kt = ls("div") || {
    style: {}
  }, ls("div"), ue = kr(ue), Me = ue + "Origin", Kt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", su = !!kr("perspective"), Us = Oe.core.reverting, js = 1);
}, oa = function(e) {
  var t = e.ownerSVGElement, r = ls("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = e.cloneNode(!0), s;
  n.style.display = "block", r.appendChild(n), gr.appendChild(r);
  try {
    s = n.getBBox();
  } catch {
  }
  return r.removeChild(n), gr.removeChild(r), s;
}, aa = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, ou = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = oa(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = oa(e)), t && !t.width && !t.x && !t.y ? {
    x: +aa(e, ["x", "cx", "x1"]) || 0,
    y: +aa(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, au = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ou(e));
}, tr = function(e, t) {
  if (t) {
    var r = e.style, n;
    t in Ct && t !== Me && (t = ue), r.removeProperty ? (n = t.substr(0, 2), (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(n === "--" ? t : t.replace(Hs, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, Ft = function(e, t, r, n, s, o) {
  var a = new Pe(e._pt, t, r, 0, 1, o ? ru : tu);
  return e._pt = a, a.b = n, a.e = s, e._props.push(r), a;
}, la = {
  deg: 1,
  rad: 1,
  turn: 1
}, P2 = {
  grid: 1,
  flex: 1
}, qt = function i(e, t, r, n) {
  var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = Kt.style, l = y2.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, f = n === "px", h = n === "%", b, m, x, w;
  if (n === o || !s || la[n] || la[o])
    return s;
  if (o !== "px" && !f && (s = i(e, t, r, "px")), w = e.getCTM && au(e), (h || o === "%") && (Ct[t] || ~t.indexOf("adius")))
    return b = w ? e.getBBox()[l ? "width" : "height"] : e[c], pe(h ? s / b * d : s / 100 * b);
  if (a[l ? "width" : "height"] = d + (f ? o : n), m = n !== "rem" && ~t.indexOf("adius") || n === "em" && e.appendChild && !u ? e : e.parentNode, w && (m = (e.ownerSVGElement || {}).parentNode), (!m || m === Tt || !m.appendChild) && (m = Tt.body), x = m._gsap, x && h && x.width && l && x.time === qe.time && !x.uncache)
    return pe(s / x.width * d);
  if (h && (t === "height" || t === "width")) {
    var g = e.style[t];
    e.style[t] = d + n, b = e[c], g ? e.style[t] = g : tr(e, t);
  } else
    (h || o === "%") && !P2[lt(m, "display")] && (a.position = lt(e, "position")), m === e && (a.position = "static"), m.appendChild(Kt), b = Kt[c], m.removeChild(Kt), a.position = "absolute";
  return l && h && (x = Jt(m), x.time = qe.time, x.width = m[c]), pe(f ? b * s / d : b && s ? d / b * s : 0);
}, vt = function(e, t, r, n) {
  var s;
  return js || us(), t in st && t !== "transform" && (t = st[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ct[t] && t !== "transform" ? (s = hi(e, n), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Zi(lt(e, Me)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = Ki[t] && Ki[t](e, t, r) || lt(e, t) || Cl(e, t) || (t === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? qt(e, t, s, r) + r : s;
}, M2 = function(e, t, r, n) {
  if (!r || r === "none") {
    var s = kr(t, e, 1), o = s && lt(e, s, 1);
    o && o !== r ? (t = s, r = o) : t === "borderColor" && (r = lt(e, "borderTopColor"));
  }
  var a = new Pe(this._pt, e.style, t, 0, 1, Xl), l = 0, u = 0, c, d, f, h, b, m, x, w, g, v, y, _;
  if (a.b = r, a.e = n, r += "", n += "", n === "auto" && (m = e.style[t], e.style[t] = n, n = lt(e, t) || n, m ? e.style[t] = m : tr(e, t)), c = [r, n], $l(c), r = c[0], n = c[1], f = r.match(cr) || [], _ = n.match(cr) || [], _.length) {
    for (; d = cr.exec(n); )
      x = d[0], g = n.substring(l, d.index), b ? b = (b + 1) % 5 : (g.substr(-5) === "rgba(" || g.substr(-5) === "hsla(") && (b = 1), x !== (m = f[u++] || "") && (h = parseFloat(m) || 0, y = m.substr((h + "").length), x.charAt(1) === "=" && (x = hr(h, x) + y), w = parseFloat(x), v = x.substr((w + "").length), l = cr.lastIndex - v.length, v || (v = v || $e.units[t] || y, l === n.length && (n += v, a.e += v)), y !== v && (h = qt(e, t, m, v) || 0), a._pt = {
        _next: a._pt,
        p: g || u === 1 ? g : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: h,
        c: w - h,
        m: b && b < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    a.r = t === "display" && n === "none" ? ru : tu;
  return bl.test(n) && (a.e = 0), this._pt = a, a;
}, ua = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, O2 = function(e) {
  var t = e.split(" "), r = t[0], n = t[1] || "50%";
  return (r === "top" || r === "bottom" || n === "left" || n === "right") && (e = r, r = n, n = e), t[0] = ua[r] || r, t[1] = ua[n] || n, t.join(" ");
}, I2 = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, n = r.style, s = t.u, o = r._gsap, a, l, u;
    if (s === "all" || s === !0)
      n.cssText = "", l = 1;
    else
      for (s = s.split(","), u = s.length; --u > -1; )
        a = s[u], Ct[a] && (l = 1, a = a === "transformOrigin" ? Me : ue), tr(r, a);
    l && (tr(r, ue), o && (o.svg && r.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", hi(r, 1), o.uncache = 1, iu(n)));
  }
}, Ki = {
  clearProps: function(e, t, r, n, s) {
    if (s.data !== "isFromStart") {
      var o = e._pt = new Pe(e._pt, t, r, 0, 0, I2);
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
}, fi = [1, 0, 0, 1, 0, 0], lu = {}, uu = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, ca = function(e) {
  var t = lt(e, ue);
  return uu(t) ? fi : t.substr(7).match(ml).map(pe);
}, Gs = function(e, t) {
  var r = e._gsap || Jt(e), n = e.style, s = ca(e), o, a, l, u;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? fi : s) : (s === fi && !e.offsetParent && e !== gr && !r.svg && (l = n.display, n.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, a = e.nextElementSibling, gr.appendChild(e)), s = ca(e), l ? n.display = l : tr(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : gr.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, cs = function(e, t, r, n, s, o) {
  var a = e._gsap, l = s || Gs(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, d = a.xOffset || 0, f = a.yOffset || 0, h = l[0], b = l[1], m = l[2], x = l[3], w = l[4], g = l[5], v = t.split(" "), y = parseFloat(v[0]) || 0, _ = parseFloat(v[1]) || 0, A, D, k, C;
  r ? l !== fi && (D = h * x - b * m) && (k = y * (x / D) + _ * (-m / D) + (m * g - x * w) / D, C = y * (-b / D) + _ * (h / D) - (h * g - b * w) / D, y = k, _ = C) : (A = ou(e), y = A.x + (~v[0].indexOf("%") ? y / 100 * A.width : y), _ = A.y + (~(v[1] || v[0]).indexOf("%") ? _ / 100 * A.height : _)), n || n !== !1 && a.smooth ? (w = y - u, g = _ - c, a.xOffset = d + (w * h + g * m) - w, a.yOffset = f + (w * b + g * x) - g) : a.xOffset = a.yOffset = 0, a.xOrigin = y, a.yOrigin = _, a.smooth = !!n, a.origin = t, a.originIsAbsolute = !!r, e.style[Me] = "0px 0px", o && (Ft(o, a, "xOrigin", u, y), Ft(o, a, "yOrigin", c, _), Ft(o, a, "xOffset", d, a.xOffset), Ft(o, a, "yOffset", f, a.yOffset)), e.setAttribute("data-svg-origin", y + " " + _);
}, hi = function(e, t) {
  var r = e._gsap || new Gl(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var n = e.style, s = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = lt(e, Me) || "0", c, d, f, h, b, m, x, w, g, v, y, _, A, D, k, C, S, E, T, F, P, z, N, I, L, B, R, U, j, H, ce, fe;
  return c = d = f = m = x = w = g = v = y = 0, h = b = 1, r.svg = !!(e.getCTM && au(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[ue] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ue] !== "none" ? l[ue] : "")), n.scale = n.rotate = n.translate = "none"), D = Gs(e, r.svg), r.svg && (r.uncache ? (L = e.getBBox(), u = r.xOrigin - L.x + "px " + (r.yOrigin - L.y) + "px", I = "") : I = !t && e.getAttribute("data-svg-origin"), cs(e, I || u, !!I || r.originIsAbsolute, r.smooth !== !1, D)), _ = r.xOrigin || 0, A = r.yOrigin || 0, D !== fi && (E = D[0], T = D[1], F = D[2], P = D[3], c = z = D[4], d = N = D[5], D.length === 6 ? (h = Math.sqrt(E * E + T * T), b = Math.sqrt(P * P + F * F), m = E || T ? ar(T, E) * Ht : 0, g = F || P ? ar(F, P) * Ht + m : 0, g && (b *= Math.abs(Math.cos(g * mr))), r.svg && (c -= _ - (_ * E + A * F), d -= A - (_ * T + A * P))) : (fe = D[6], H = D[7], R = D[8], U = D[9], j = D[10], ce = D[11], c = D[12], d = D[13], f = D[14], k = ar(fe, j), x = k * Ht, k && (C = Math.cos(-k), S = Math.sin(-k), I = z * C + R * S, L = N * C + U * S, B = fe * C + j * S, R = z * -S + R * C, U = N * -S + U * C, j = fe * -S + j * C, ce = H * -S + ce * C, z = I, N = L, fe = B), k = ar(-F, j), w = k * Ht, k && (C = Math.cos(-k), S = Math.sin(-k), I = E * C - R * S, L = T * C - U * S, B = F * C - j * S, ce = P * S + ce * C, E = I, T = L, F = B), k = ar(T, E), m = k * Ht, k && (C = Math.cos(k), S = Math.sin(k), I = E * C + T * S, L = z * C + N * S, T = T * C - E * S, N = N * C - z * S, E = I, z = L), x && Math.abs(x) + Math.abs(m) > 359.9 && (x = m = 0, w = 180 - w), h = pe(Math.sqrt(E * E + T * T + F * F)), b = pe(Math.sqrt(N * N + fe * fe)), k = ar(z, N), g = Math.abs(k) > 2e-4 ? k * Ht : 0, y = ce ? 1 / (ce < 0 ? -ce : ce) : 0), r.svg && (I = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !uu(lt(e, ue)), I && e.setAttribute("transform", I))), Math.abs(g) > 90 && Math.abs(g) < 270 && (s ? (h *= -1, g += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (b *= -1, g += g <= 0 ? 180 : -180)), t = t || r.uncache, r.x = c - ((r.xPercent = c && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = d - ((r.yPercent = d && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = f + o, r.scaleX = pe(h), r.scaleY = pe(b), r.rotation = pe(m) + a, r.rotationX = pe(x) + a, r.rotationY = pe(w) + a, r.skewX = g + a, r.skewY = v + a, r.transformPerspective = y + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || !t && r.zOrigin || 0) && (n[Me] = Zi(u)), r.xOffset = r.yOffset = 0, r.force3D = $e.force3D, r.renderTransform = r.svg ? z2 : su ? cu : R2, r.uncache = 0, r;
}, Zi = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Sn = function(e, t, r) {
  var n = _e(t);
  return pe(parseFloat(t) + parseFloat(qt(e, "x", r + "px", n))) + n;
}, R2 = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, cu(e, t);
}, jt = "0deg", $r = "0px", Ut = ") ", cu = function(e, t) {
  var r = t || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.z, u = r.rotation, c = r.rotationY, d = r.rotationX, f = r.skewX, h = r.skewY, b = r.scaleX, m = r.scaleY, x = r.transformPerspective, w = r.force3D, g = r.target, v = r.zOrigin, y = "", _ = w === "auto" && e && e !== 1 || w === !0;
  if (v && (d !== jt || c !== jt)) {
    var A = parseFloat(c) * mr, D = Math.sin(A), k = Math.cos(A), C;
    A = parseFloat(d) * mr, C = Math.cos(A), o = Sn(g, o, D * C * -v), a = Sn(g, a, -Math.sin(A) * -v), l = Sn(g, l, k * C * -v + v);
  }
  x !== $r && (y += "perspective(" + x + Ut), (n || s) && (y += "translate(" + n + "%, " + s + "%) "), (_ || o !== $r || a !== $r || l !== $r) && (y += l !== $r || _ ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Ut), u !== jt && (y += "rotate(" + u + Ut), c !== jt && (y += "rotateY(" + c + Ut), d !== jt && (y += "rotateX(" + d + Ut), (f !== jt || h !== jt) && (y += "skew(" + f + ", " + h + Ut), (b !== 1 || m !== 1) && (y += "scale(" + b + ", " + m + Ut), g.style[ue] = y || "translate(0, 0)";
}, z2 = function(e, t) {
  var r = t || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, d = r.scaleX, f = r.scaleY, h = r.target, b = r.xOrigin, m = r.yOrigin, x = r.xOffset, w = r.yOffset, g = r.forceCSS, v = parseFloat(o), y = parseFloat(a), _, A, D, k, C;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= mr, u *= mr, _ = Math.cos(l) * d, A = Math.sin(l) * d, D = Math.sin(l - u) * -f, k = Math.cos(l - u) * f, u && (c *= mr, C = Math.tan(u - c), C = Math.sqrt(1 + C * C), D *= C, k *= C, c && (C = Math.tan(c), C = Math.sqrt(1 + C * C), _ *= C, A *= C)), _ = pe(_), A = pe(A), D = pe(D), k = pe(k)) : (_ = d, k = f, A = D = 0), (v && !~(o + "").indexOf("px") || y && !~(a + "").indexOf("px")) && (v = qt(h, "x", o, "px"), y = qt(h, "y", a, "px")), (b || m || x || w) && (v = pe(v + b - (b * _ + m * D) + x), y = pe(y + m - (b * A + m * k) + w)), (n || s) && (C = h.getBBox(), v = pe(v + n / 100 * C.width), y = pe(y + s / 100 * C.height)), C = "matrix(" + _ + "," + A + "," + D + "," + k + "," + v + "," + y + ")", h.setAttribute("transform", C), g && (h.style[ue] = C);
}, q2 = function(e, t, r, n, s) {
  var o = 360, a = ve(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? Ht : 1), u = l - n, c = n + u + "deg", d, f;
  return a && (d = s.split("_")[1], d === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), d === "cw" && u < 0 ? u = (u + o * na) % o - ~~(u / o) * o : d === "ccw" && u > 0 && (u = (u - o * na) % o - ~~(u / o) * o)), e._pt = f = new Pe(e._pt, t, r, n, u, C2), f.e = c, f.u = "deg", e._props.push(r), f;
}, da = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, V2 = function(e, t, r) {
  var n = da({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, d, f, h, b;
  n.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[ue] = t, a = hi(r, 1), tr(r, ue), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[ue], o[ue] = t, a = hi(r, 1), o[ue] = u);
  for (l in Ct)
    u = n[l], c = a[l], u !== c && s.indexOf(l) < 0 && (h = _e(u), b = _e(c), d = h !== b ? qt(r, l, u, b) : parseFloat(u), f = parseFloat(c), e._pt = new Pe(e._pt, a, l, d, f - d, as), e._pt.u = b || 0, e._props.push(l));
  da(a, n);
};
Ne("padding,margin,Width,Radius", function(i, e) {
  var t = "Top", r = "Right", n = "Bottom", s = "Left", o = (e < 3 ? [t, r, n, s] : [t + s, t + r, n + r, n + s]).map(function(a) {
    return e < 2 ? i + a : "border" + a + i;
  });
  Ki[e > 1 ? "border" + i : i] = function(a, l, u, c, d) {
    var f, h;
    if (arguments.length < 4)
      return f = o.map(function(b) {
        return vt(a, b, u);
      }), h = f.join(" "), h.split(f[0]).length === 5 ? f[0] : h;
    f = (c + "").split(" "), h = {}, o.forEach(function(b, m) {
      return h[b] = f[m] = f[m] || f[(m - 1) / 2 | 0];
    }), a.init(l, h, d);
  };
});
var du = {
  name: "css",
  register: us,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, n, s) {
    var o = this._props, a = e.style, l = r.vars.startAt, u, c, d, f, h, b, m, x, w, g, v, y, _, A, D, k;
    js || us(), this.styles = this.styles || nu(e), k = this.styles.props, this.tween = r;
    for (m in t)
      if (m !== "autoRound" && (c = t[m], !(Re[m] && Yl(m, t, r, n, e, s)))) {
        if (h = typeof c, b = Ki[m], h === "function" && (c = c.call(r, n, e, s), h = typeof c), h === "string" && ~c.indexOf("random(") && (c = ci(c)), b)
          b(this, e, m, c, r) && (D = 1);
        else if (m.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(m) + "").trim(), c += "", Ot.lastIndex = 0, Ot.test(u) || (x = _e(u), w = _e(c)), w ? x !== w && (u = qt(e, m, u, w) + w) : x && (c += x), this.add(a, "setProperty", u, c, n, s, 0, 0, m), o.push(m), k.push(m, 0, a[m]);
        else if (h !== "undefined") {
          if (l && m in l ? (u = typeof l[m] == "function" ? l[m].call(r, n, e, s) : l[m], ve(u) && ~u.indexOf("random(") && (u = ci(u)), _e(u + "") || u === "auto" || (u += $e.units[m] || _e(vt(e, m)) || ""), (u + "").charAt(1) === "=" && (u = vt(e, m))) : u = vt(e, m), f = parseFloat(u), g = h === "string" && c.charAt(1) === "=" && c.substr(0, 2), g && (c = c.substr(2)), d = parseFloat(c), m in st && (m === "autoAlpha" && (f === 1 && vt(e, "visibility") === "hidden" && d && (f = 0), k.push("visibility", 0, a.visibility), Ft(this, a, "visibility", f ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), m !== "scale" && m !== "transform" && (m = st[m], ~m.indexOf(",") && (m = m.split(",")[0]))), v = m in Ct, v) {
            if (this.styles.save(m), y || (_ = e._gsap, _.renderTransform && !t.parseTransform || hi(e, t.parseTransform), A = t.smoothOrigin !== !1 && _.smooth, y = this._pt = new Pe(this._pt, a, ue, 0, 1, _.renderTransform, _, 0, -1), y.dep = 1), m === "scale")
              this._pt = new Pe(this._pt, _, "scaleY", _.scaleY, (g ? hr(_.scaleY, g + d) : d) - _.scaleY || 0, as), this._pt.u = 0, o.push("scaleY", m), m += "X";
            else if (m === "transformOrigin") {
              k.push(Me, 0, a[Me]), c = O2(c), _.svg ? cs(e, c, 0, A, 0, this) : (w = parseFloat(c.split(" ")[2]) || 0, w !== _.zOrigin && Ft(this, _, "zOrigin", _.zOrigin, w), Ft(this, a, m, Zi(u), Zi(c)));
              continue;
            } else if (m === "svgOrigin") {
              cs(e, c, 1, A, 0, this);
              continue;
            } else if (m in lu) {
              q2(this, _, m, f, g ? hr(f, g + c) : c);
              continue;
            } else if (m === "smoothOrigin") {
              Ft(this, _, "smooth", _.smooth, c);
              continue;
            } else if (m === "force3D") {
              _[m] = c;
              continue;
            } else if (m === "transform") {
              V2(this, c, e);
              continue;
            }
          } else
            m in a || (m = kr(m) || m);
          if (v || (d || d === 0) && (f || f === 0) && !_2.test(c) && m in a)
            x = (u + "").substr((f + "").length), d || (d = 0), w = _e(c) || (m in $e.units ? $e.units[m] : x), x !== w && (f = qt(e, m, u, w)), this._pt = new Pe(this._pt, v ? _ : a, m, f, (g ? hr(f, g + d) : d) - f, !v && (w === "px" || m === "zIndex") && t.autoRound !== !1 ? D2 : as), this._pt.u = w || 0, x !== w && w !== "%" && (this._pt.b = u, this._pt.r = A2);
          else if (m in a)
            M2.call(this, e, m, u, g ? g + c : c);
          else if (m in e)
            this.add(e, m, u || e[m], g ? g + c : c, n, s);
          else if (m !== "parseTransform") {
            Ps(m, c);
            continue;
          }
          v || (m in a ? k.push(m, 0, a[m]) : typeof e[m] == "function" ? k.push(m, 2, e[m]()) : k.push(m, 1, u || e[m])), o.push(m);
        }
      }
    D && Ql(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Us())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: vt,
  aliases: st,
  getSetter: function(e, t, r) {
    var n = st[t];
    return n && n.indexOf(",") < 0 && (t = n), t in Ct && t !== Me && (e._gsap.x || vt(e, "x")) ? r && ia === r ? t === "scale" ? B2 : E2 : (ia = r || {}) && (t === "scale" ? L2 : T2) : e.style && !Ts(e.style[t]) ? k2 : ~t.indexOf("-") ? S2 : Vs(e, t);
  },
  core: {
    _removeProperty: tr,
    _getMatrix: Gs
  }
};
Oe.utils.checkPrefix = kr;
Oe.core.getStyleSaver = nu;
(function(i, e, t, r) {
  var n = Ne(i + "," + e + "," + t, function(s) {
    Ct[s] = 1;
  });
  Ne(e, function(s) {
    $e.units[s] = "deg", lu[s] = 1;
  }), st[n[13]] = i + "," + e, Ne(r, function(s) {
    var o = s.split(":");
    st[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ne("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i) {
  $e.units[i] = "px";
});
Oe.registerPlugin(du);
var ee = Oe.registerPlugin(du) || Oe;
ee.core.Tween;
var $2 = 0;
function p(i, e, t, r, n, s) {
  var o, a, l = {};
  for (a in e)
    a == "ref" ? o = e[a] : l[a] = e[a];
  var u = { type: i, props: l, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --$2, __i: -1, __u: 0, __source: n, __self: s };
  if (typeof i == "function" && (o = i.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return G.vnode && G.vnode(u), u;
}
function Sr() {
  document.dispatchEvent(new Event("BmToggleModal"));
}
function j2({
  children: i
}) {
  const e = Y(null), t = Y(null), r = () => {
    document.body.classList.toggle("bm-modal-active"), bt.value ? bt.value && (ee.to(e.current, {
      duration: 0.25,
      autoAlpha: 0
    }), window.innerWidth > 639 ? ee.to(t.current, {
      duration: 0.25,
      autoAlpha: 0,
      transform: "scale(1)",
      onComplete: () => bt.value = !1
    }) : ee.to(t.current, {
      duration: 0.25,
      autoAlpha: 0,
      transform: "translateY(100%)",
      onComplete: () => bt.value = !1
    })) : (ee.to(e.current, {
      duration: 0.25,
      autoAlpha: 1
    }), window.innerWidth > 639 ? ee.to(t.current, {
      duration: 0.25,
      autoAlpha: 1,
      transform: "scale(1)",
      onComplete: () => bt.value = !0
    }) : ee.to(t.current, {
      duration: 0.25,
      autoAlpha: 1,
      transform: "translateY(0%)",
      onComplete: () => bt.value = !0
    }));
  };
  return $(() => {
    const n = document.getElementById("bm_selectBikeButton");
    return document.addEventListener("BmToggleModal", r), n == null || n.addEventListener("click", r), () => {
      document.removeEventListener("BmToggleModal", r), n == null || n.removeEventListener("click", r);
    };
  }, []), p(V, {
    children: [p("style", {
      type: "text/css",
      children: Sp
    }), p("div", {
      onClick: () => {
        Sr();
      },
      class: Z("overlay", "fixed cursor-pointer inset-0 z-[2147483645] bg-black/40 "),
      ref: e
    }), p("div", {
      className: Z("modal", "fixed pointer-events-none inset-0 mx-auto justify-end z-[2147483646] flex flex-col items-center outline-none ", "sm:justify-center"),
      ref: t,
      children: p("div", {
        className: "flex sm:px-2 pointer-events-auto max-sm:max-h-[96%] sm:max-h-[90%] max-sm:h-[89vh] max-w-lg sm:max-w-[640px] flex-col items-center max-sm:flex-1 w-full bg-white rounded-t-3xl sm:rounded-xl shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.06)]",
        children: [p("div", {
          className: "sm:hidden mx-auto mt-4 h-[6px] w-[100px] rounded-full bg-gray-400/50",
          onClick: Sr
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
const Xe = (i) => /* @__PURE__ */ q("svg", { width: 7, height: 12, viewBox: "0 0 7 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M1 11L6 6L1 1", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), U2 = (i) => /* @__PURE__ */ q("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("circle", { cx: 15.5, cy: 15.5, r: 15.5, fill: "#030712" }), /* @__PURE__ */ q("path", { d: "M10.1974 17.1317L13.9955 20.4461L20.8639 10.8909", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), H2 = (i) => /* @__PURE__ */ q("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("g", { clipPath: "url(#clip0_64_2)" }, /* @__PURE__ */ q("path", { d: "M30.5 15.5C30.5 23.7843 23.7843 30.5 15.5 30.5C7.21573 30.5 0.5 23.7843 0.5 15.5C0.5 7.21573 7.21573 0.5 15.5 0.5C23.7843 0.5 30.5 7.21573 30.5 15.5Z", fill: "white", stroke: "#D1D5DB" })), /* @__PURE__ */ q("path", { d: "M23.983 11.132C23.9699 10.9806 23.8699 10.8506 23.727 10.7988C23.5837 10.7466 23.4233 10.7822 23.3155 10.8894L21.1098 13.0866L18.6647 12.3153L17.8905 9.87937L20.0961 7.68201C20.2041 7.57458 20.2393 7.41475 20.1873 7.27224C20.1348 7.12945 20.0046 7.02999 19.8524 7.01688C18.5129 6.9019 17.2004 7.37836 16.2514 8.32387C14.9518 9.61873 14.6076 11.5096 15.217 13.1213C15.1504 13.1773 15.0847 13.2365 15.0199 13.3004L7.65736 20.2216C7.65476 20.2241 7.6522 20.2268 7.64939 20.2293C6.78354 21.092 6.78354 22.4955 7.64939 23.3583C8.51539 24.2209 9.91396 24.2104 10.7797 23.3477C10.7834 23.3443 10.7868 23.3408 10.7902 23.3369L17.677 15.945C17.7398 15.8822 17.798 15.8165 17.853 15.749C19.4713 16.3573 21.3705 16.0152 22.6713 14.7195C23.62 13.7739 24.0986 12.4663 23.983 11.132ZM9.67019 22.4264C9.35113 22.7442 8.83439 22.744 8.51536 22.4264C8.19644 22.1089 8.19644 21.5937 8.51536 21.2761C8.83439 20.9585 9.35113 20.9585 9.67019 21.2761C9.98911 21.5937 9.98911 22.1089 9.67019 22.4264Z", fill: "black" }), /* @__PURE__ */ q("defs", null, /* @__PURE__ */ q("clipPath", { id: "clip0_64_2" }, /* @__PURE__ */ q("rect", { width: 31, height: 31, fill: "white" })))), G2 = (i) => /* @__PURE__ */ q("svg", { width: 31, height: 31, viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M2 24.0437V22.6518C4.30404 21.9559 5.82929 20.347 6.17596 18.244C6.45967 16.523 5.87584 14.7802 4.66788 13.505L5.50401 12.1672C6.3441 12.2632 7.12499 12.2938 7.83019 12.2273C8.91308 12.1253 10.0603 11.7686 10.8965 10.814C11.7162 9.87828 11.9364 8.70751 11.9455 7.65019C11.9509 7.01984 11.882 6.33439 11.7615 5.60532L13.1089 4.93163C14.6862 6.27858 16.5967 7.00972 18.5085 6.50659C20.496 5.98355 21.7104 4.35171 22.2287 2.32023L23.4959 2.17943C23.7105 2.84427 23.9686 3.45839 24.2803 4.0055C24.8609 5.02453 25.7009 5.93317 26.8959 6.37534C28.1054 6.8229 29.35 6.6716 30.4872 6.21488C31.2478 5.9094 32.0092 5.4502 32.771 4.87155L33.84 5.40607C33.3102 7.17682 33.6407 8.97473 34.9205 10.3525C36.2854 11.8219 38.3837 12.4206 40.6053 12.1884L41.4091 13.3137C40.1484 14.904 39.5422 16.7943 40.0082 18.6621C40.4975 20.623 42.0098 21.9631 44 22.6091V23.6937C42.0295 24.646 40.407 25.9295 39.9934 27.9032C39.7449 29.089 40.0083 30.2272 40.4663 31.2395C40.7549 31.8775 41.1444 32.5183 41.6038 33.1622L41.0881 34.0648C39.1096 33.5569 37.1545 33.7409 35.7252 35.1442C34.3293 36.5148 34.0136 38.5186 34.2755 40.5318L32.7931 41.4583C31.191 40.0523 29.3504 39.2822 27.3831 40.0414C26.2841 40.4655 25.451 41.2846 24.816 42.1501C24.4114 42.7016 24.0463 43.3278 23.7127 44H22.6585C22.1786 42.2318 21.2165 40.6691 19.4091 40.0247C17.4936 39.3418 15.3888 40.0023 13.3765 41.2022L11.9877 40.5078C12.4255 38.6858 12.158 36.865 10.7918 35.5311C9.4171 34.1889 7.44044 33.8741 5.42929 34.2133L4.6584 32.9799C6.03869 31.6871 6.93069 30.0087 6.40539 28.071C6.07607 26.8563 5.24467 25.9088 4.25062 25.2068C3.60737 24.7526 2.85005 24.3664 2 24.0437Z", stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ q("circle", { cx: 23, cy: 23, r: 12, stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ q("path", { d: "M23 39.75C32.2508 39.75 39.75 32.2508 39.75 23C39.75 13.7492 32.2508 6.25 23 6.25C13.7492 6.25 6.25 13.7492 6.25 23C6.25 32.2508 13.7492 39.75 23 39.75Z", stroke: "black", strokeWidth: 3.5 })), Y2 = `.shared-icon{background-color:#fba157;padding:5px 10px;border-radius:8px;font-size:12px;display:flex;justify-content:center;align-items:center;color:#fff}
`, pa = ({
  text: i
}) => p(V, {
  children: [p("style", {
    type: "text/css",
    children: Y2
  }), p("div", {
    className: "shared-icon",
    children: p("p", {
      className: "text",
      children: i || "Shared with you"
    })
  })]
});
function Qe({
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
  const f = (A = n.images) != null && A.length ? n.images : [Se("bike.png")], h = Y(null), [b, m] = M(0), x = Y(null);
  $(() => {
    const D = h == null ? void 0 : h.current;
    if (D) {
      var k = new IntersectionObserver(function(C) {
        var S = C.reduce(function(E, T) {
          return T.intersectionRatio > E.intersectionRatio ? T : E;
        });
        S.intersectionRatio > 0 && m(Number(S.target.getAttribute("data-slide")));
      }, {
        root: D,
        threshold: 0.8
      });
      return D.querySelectorAll("&>div").forEach((C) => {
        k.observe(C);
      }), () => {
        k.disconnect();
      };
    }
  }, [h]);
  function w(D) {
    if (!h.current)
      return;
    const k = h.current.querySelectorAll("&>div")[D];
    h.current.scrollLeft = k.clientWidth * D;
  }
  function g() {
    b != 0 && w(b - 1);
  }
  function v() {
    b != f.length - 1 && w(b + 1);
  }
  const y = (f == null ? void 0 : f.length) && b !== f.length - 1, _ = (f == null ? void 0 : f.length) && b !== 0;
  return p("div", {
    class: Z("rounded-xl select-none border  py-4 relative", e ? "border-gray-950" : "border-gray-300"),
    ...d,
    onClick: (D) => {
      if (x.current && !x.current.contains(D.target))
        a(D);
      else {
        D.preventDefault();
        return;
      }
    },
    children: [!r && p("p", {
      class: "text-gray-950 px-4 text-base font-normal font-nunito leading-tight ",
      children: s ? p(V, {
        children: o ? `${n.bike_Brand} ${n.year} ${n.spec}` : n.name && n.isCustom ? n.name : `${n.brand} ${n.year} ${n.bikeSpec} ${n.variant ? n.variant : ""}`
      }) : p(V, {
        children: o ? n.bike_Name : n.name
      })
    }), p("div", {
      class: "relative mt-2",
      children: [p("div", {
        ref: h,
        class: Z("flex scroll-smooth snap-mandatory  no-scrollbar h-32 snap-x space-x-2 relative overflow-x-auto", "px-4"),
        "data-active-slide": b,
        children: [!o && f.length && f.map((D, k) => p("div", {
          "data-slide": k,
          class: "w-full h-full snap-center flex items-center flex-none",
          children: p("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: D,
            alt: D
          })
        }, k)), o && p("div", {
          class: "w-full h-full snap-center flex items-center flex-none",
          children: p("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: `https://imagestore.bikematrix.io/${n.bike_Reference}/400-${n.bike_Thumbnail}`,
            alt: n.bike_Reference
          })
        })]
      }), p(V, {
        children: [p("div", {
          onClick: g,
          class: Z("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center left-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", _ ? "" : "hidden"),
          children: p(Xe, {
            class: "h-3 text-gray-500 -rotate-180"
          })
        }), p("div", {
          onClick: v,
          class: Z("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center right-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", y ? "" : "hidden"),
          children: p(Xe, {
            class: "h-3 text-gray-500 translate-x-px"
          })
        })]
      })]
    }), (f == null ? void 0 : f.length) > 1 && p("div", {
      class: "space-x-2 flex items-center justify-center",
      children: f.map((D, k) => p("div", {
        class: Z("rounded-xl w-2 h-2 transition-all duration-300", k == b ? " bg-gray-950 scale-125" : " bg-gray-200")
      }, k))
    }), (l || n.isShared) && p("div", {
      className: "absolute left-4 bottom-4",
      children: p(pa, {})
    }), (u || n.isCustom) && p("div", {
      className: "absolute left-4 bottom-4",
      children: p(pa, {
        text: "Custom"
      })
    }), p("div", {
      className: "spanner_wrapper absolute right-4 bottom-14 h-fit w-fit",
      ref: x,
      children: i && e && p(H2, {
        class: "cursor-pointer",
        onClick: (D) => {
          D.preventDefault(), !(n != null && n.isCustom) && !(n != null && n.isShared) ? Q("/workshop") : n != null && n.isShared ? Q("/read-only") : Q("/bom");
        }
      })
    }), e && !t ? p(U2, {
      class: "absolute right-4 bottom-4 cursor-pointer"
    }) : t ? p(G2, {
      class: "absolute right-4 bottom-4 cursor-pointer",
      onClick: () => Q("/settings")
    }) : o ? p("span", {}) : c ? p("span", {}) : p(V, {
      children: p("span", {
        class: "border absolute right-4 bottom-4 rounded-full h-8 w-8 border-gray-300 bg-white/75"
      })
    })]
  });
}
function fa(i, e) {
  const t = () => {
    try {
      const s = window.localStorage.getItem(i);
      return s ? JSON.parse(s) : e;
    } catch (s) {
      return console.error(s), e;
    }
  }, [r, n] = M(t);
  return $(() => {
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
function W2(i, e) {
  const t = () => {
    try {
      const s = window.sessionStorage.getItem(i);
      return s ? JSON.parse(s) : e;
    } catch (s) {
      return console.error(s), e;
    }
  }, [r, n] = M(t);
  return $(() => {
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
const En = {
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
}, pu = mi(void 0), K2 = ({
  children: i
}) => {
  var I;
  const e = window.BikeMatrix.getConfig(), [t, r] = fa(Es, null), [n, s] = fa("bm_lounge", []), o = new Be(e.apiUrl, e.apiKey, e.apiToken, e.isShopify), [a, l] = M(En), u = Y({}), [c, d] = M([]), [f, h] = M(!1), [b, m] = M(null);
  M(null), $(() => {
    (async () => {
      if (t != null && t.brandId) {
        const B = await ll(t == null ? void 0 : t.brandId);
        m(B);
      }
    })();
  }, [t == null ? void 0 : t.brandId]);
  function x(L) {
    l((B) => {
      var R;
      return {
        ...B,
        [L]: {
          options: [],
          value: (R = En[L]) == null ? void 0 : R.value
        }
      };
    });
  }
  function w(L, B) {
    l((R) => (R[L].value = B, {
      ...R
    }));
  }
  const g = () => {
    l((L) => {
      var B;
      return {
        ...En,
        brand: {
          options: ((B = L.brand) == null ? void 0 : B.options) || [],
          error: L.brand.error || null
        }
      };
    });
  }, v = (L) => {
    r({
      ...L
    }), s([...(n || []).filter((B) => !!B.key && B.key !== L.key), L]);
  }, y = (L) => {
    (t == null ? void 0 : t.key) === L && r(null), s([...(n || []).filter((B) => !!B.key && B.key !== L)]);
  }, _ = () => {
    e.logLevel === "verbose" && console.log("Dispatch BikeChanging (pre-change)..."), document.dispatchEvent(new Event("BikeChanging", {
      bubbles: !0,
      composed: !0
    }));
  }, A = () => {
    setTimeout(() => {
      g(), Q("/");
    }, 500);
  }, D = async () => {
    const L = await o.getBikeBrands();
    L.success ? (sessionStorage.setItem("bm_brands", JSON.stringify(L.data)), l((B) => (B.brand.options = L.data.map((R) => ({
      label: R.bike_Brand,
      value: R.bike_Brand_ID
    })), {
      ...B
    }))) : L.success || (l((B) => (B.brand.error = L.error, {
      ...B
    })), e.logLevel === "verbose" && console.error(L.logError));
  }, k = async () => {
    const L = await o.getBikeModels(a.brand.value);
    L.success ? l((B) => (B.model.options = L.data.map((R) => ({
      label: R.model_Family,
      value: R.model_Family_ID
    })), {
      ...B
    })) : L.success || (l((B) => (B.model.error = L.error, {
      ...B
    })), e.logLevel === "verbose" && console.error(L.logError));
  }, C = async () => {
    const L = await o.getBikeFrameSeries(a.model.value);
    L.success ? l((B) => {
      var U, j;
      const R = [];
      return B.frameSeries.options = L.data.reduce((H, ce) => {
        const fe = {
          label: ce.model_Spec,
          value: ce.model_Spec_ID
        };
        return R.includes(fe.value) || (R.push(fe.value), H.push(fe)), H;
      }, []), ((U = B.frameSeries.options) == null ? void 0 : U.length) === 1 && (B.frameSeries.value = (j = B.frameSeries.options[0]) == null ? void 0 : j.value), {
        ...B
      };
    }) : L.success || (l((B) => (B.frameSeries.error = L.error, {
      ...B
    })), e.logLevel === "verbose" && console.error(L.logError));
  }, S = async () => {
    const L = await o.getBikeSpecs(a.frameSeries.value);
    if (L.success) {
      const B = [], R = [], U = [], j = [];
      L.data.forEach((H) => {
        var dt, me;
        const ce = H.year + "-" + H.spec.replace(/[^0-9a-zA-Z]/g, "") + (H.bike_Variant ? "-" + H.bike_Variant.replace(/[^0-9a-zA-Z]/g, "") : ""), fe = {
          label: H.spec,
          value: H.spec
        };
        if (B.includes(fe.value) || (B.push(fe.value), U.push(fe)), !R.includes(ce)) {
          R.push(ce);
          const $t = {
            _key: ce,
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
            images: [H.bike_Thumbnail, ...((dt = H == null ? void 0 : H.bike_Images) == null ? void 0 : dt.split(",")) || []].filter((Ke) => !!Ke).map((Ke) => `https://imagestore.bikematrix.io/${H.bike_Reference}/400-${Ke}`)
          }, kt = L.data.reduce((Ke, Te) => (Te.year == H.year && Te.spec === H.spec && Te.model_Spec === H.model_Spec && Te.bike_Variant === H.bike_Variant && Ke.push({
            key: Te.bike_Key,
            name: Te.bike_Name,
            variant: Te.bike_Variant,
            sizeId: Te.bike_Size_ID,
            size: Te.bike_Size
          }), Ke), []);
          (me = kt == null ? void 0 : kt.filter((Ke) => !!Ke.sizeId)) != null && me.length && ($t.sizes = kt), j.push($t);
        }
        u.current[a.frameSeries.value] = Array.from(/* @__PURE__ */ new Set([...u.current[a.frameSeries.value] || [], H.year]));
      }), l((H) => (H.bikeSpec.options = U, {
        ...H
      })), d(j);
    } else
      L.success || (l((B) => (B.bikeSpec.error = L.error, {
        ...B
      })), e.logLevel === "verbose" && console.error(L.logError));
  }, E = async () => {
    l((L) => {
      const B = u.current[L.frameSeries.value] || [];
      return L.year.options = B.map((R) => ({
        label: R,
        value: R
      })), {
        ...L
      };
    });
  }, T = async () => {
    l((L) => {
      var B, R, U;
      if (L.frameSize.options = (B = a == null ? void 0 : a.value) != null && B.sizes ? a.value.sizes.filter((j) => !!j.size).map((j) => ({
        label: j.size,
        value: j.size
      })) : [], ((R = L.frameSize.options) == null ? void 0 : R.length) === 1) {
        const j = (U = L.frameSize.options[0]) == null ? void 0 : U.value;
        L.frameSize.value = j, L.value.frameSize = j;
      }
      return {
        ...L
      };
    });
  };
  $(() => (document.addEventListener("BmToggleModal", A), () => {
    document.removeEventListener("BmToggleModal", A);
  }), []);
  const [F, P] = W2("bm_diagnostics", []), z = () => {
    const B = new URLSearchParams(window.location.search).get("diagnostics");
    JSON.parse(sessionStorage.getItem("bm_diagnostics")).includes(B) || P([...F, B]), B === null && P([]);
  };
  $(() => {
    _(), z();
  }, [t]), $(() => {
    sessionStorage.getItem("bm_brands") ? l((L) => (L.brand.options = JSON.parse(sessionStorage.getItem("bm_brands")).map((B) => ({
      label: B.bike_Brand,
      value: B.bike_Brand_ID
    })), {
      ...L
    })) : bt.value && D();
  }, [bt.value]), $(() => {
    a.brand.value && (x("model"), x("frameSeries"), k());
  }, [a.brand.value]), $(() => {
    a.model.value && (x("frameSeries"), C());
  }, [a.model.value]), $(() => {
    a.frameSeries.value && (x("bikeSpec"), x("year"), d([]), S().then(() => {
      E();
    }));
  }, [a.frameSeries.value]), $(() => {
    a.value._key && (x("frameSize"), T());
  }, [(I = a.value) == null ? void 0 : I._key]), $(() => {
    a.frameSize.value && l((L) => {
      var B, R;
      return L.value = {
        ...L.value,
        ...((R = (B = L == null ? void 0 : L.value) == null ? void 0 : B.sizes) == null ? void 0 : R.find((U) => a.frameSize.value == U.size)) || {}
      }, delete L.value.sizes, L;
    });
  }, [a.frameSize.value]);
  const N = {
    // Wizard Bike
    bike: a,
    setBike: l,
    setBikeAttr: w,
    resetBike: g,
    // Search Results
    results: c,
    loading: f,
    setLoading: h,
    // Compatible Parts
    compatibleCollections: b,
    // Final Bike
    currentBike: t,
    setCurrentBike: r,
    removeBike: y,
    saveBike: v,
    // Bike Lounge
    lounge: n
  };
  return p(pu.Provider, {
    value: N,
    children: i
  });
}, Ie = () => {
  const i = _s(pu);
  if (!i)
    throw new Error("useBikeState must be used within a BikeProvider");
  return i;
};
function Dt() {
  const {
    t: i
  } = X(), t = window.BikeMatrix.getConfig(), [r, n] = M(null);
  return t.internalLink && n(t.internalLink), p(V, {
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
const Z2 = (i) => /* @__PURE__ */ q("svg", { width: 17, height: 17, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M16.983 4.13197C16.9699 3.98064 16.8699 3.85064 16.727 3.7988C16.5837 3.74665 16.4233 3.78215 16.3155 3.88937L14.1098 6.08655L11.6647 5.31527L10.8905 2.87937L13.0961 0.682011C13.2041 0.574581 13.2393 0.414746 13.1873 0.272238C13.1348 0.129446 13.0046 0.0299881 12.8524 0.0168782C11.5129 -0.0980992 10.2004 0.378357 9.25142 1.32387C7.95176 2.61873 7.60759 4.50961 8.21705 6.12135C8.15043 6.17726 8.08471 6.2365 8.01987 6.30039L0.65736 13.2216C0.654763 13.2241 0.652203 13.2268 0.649393 13.2293C-0.216464 14.092 -0.216464 15.4955 0.649393 16.3583C1.51539 17.2209 2.91396 17.2104 3.77967 16.3477C3.78341 16.3443 3.78682 16.3408 3.79024 16.3369L10.677 8.94505C10.7398 8.88222 10.798 8.8165 10.853 8.74903C12.4713 9.3573 14.3705 9.01524 15.6713 7.71952C16.62 6.77394 17.0986 5.46628 16.983 4.13197ZM2.67019 15.4264C2.35113 15.7442 1.83439 15.744 1.51536 15.4264C1.19644 15.1089 1.19644 14.5937 1.51536 14.2761C1.83439 13.9585 2.35113 13.9585 2.67019 14.2761C2.98911 14.5937 2.98911 15.1089 2.67019 15.4264Z", fill: "black" })), O = {
  id: null,
  name: null,
  product_category_id: null,
  swap: !1,
  version_id: null,
  unsaved_changes: null,
  translation: null
}, jr = {
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
    stem: O,
    handlebar: O,
    seat_Post: O,
    seat_Post_Clamp: O,
    dropper_Lever: O,
    lockout_Lever: O,
    grips: O,
    pedals: O,
    saddle: O
  },
  "frame_&_fork": {
    fork: O,
    rear_Shock: O,
    headseat: O
  },
  drivetrain: {
    chainguide: O,
    bottom_Bracket: O,
    crankset: O,
    largest_Chainring: O,
    second_Largest_Chainring: O,
    third_Largest_Chainring: O,
    chainring_Spider: O,
    chain: O,
    cassette: O,
    rear_Derailleur: O,
    front_Derailleur: O,
    shifter_RH: O,
    shifter_LH: O,
    shift_Brake_Combo_RH: O,
    shift_Brake_Combo_LH: O,
    shifter_Adapter_RH: O,
    shifter_Adapter_LH: O
  },
  brakes: {
    brake_Caliper_Front: O,
    brake_Caliper_Rear: O,
    brake_Lever_RH: O,
    brake_Lever_LH: O,
    brake_Pads_Front: O,
    brake_Pads_Rear: O,
    brake_Rotor_Front: O,
    brake_Rotor_Rear: O,
    brake_Adapter_Front: O,
    brake_Adapter_Rear: O
  },
  "wheels_&_tyres": {
    front_Wheel: O,
    front_Axle: O,
    rear_Wheel: O,
    rear_Axle: O,
    tyre_Front: O,
    tyre_Rear: O
  },
  is_E_Bike: null,
  eMotor_System_ID: null,
  eBattery_ID: null,
  eControl_Unit_ID: null,
  eCharger_ID: null,
  eInterconnects_ID: null
}, Ur = {
  cockpit: {
    stem: O,
    handlebar: O,
    seat_Post: O,
    seat_Post_Clamp: O,
    dropper_Lever: O,
    lockout_Lever: O,
    grips: O,
    pedals: O,
    saddle: O
  },
  "frame_&_fork": {
    headset: O,
    fork: O,
    rear_Shock: O
  },
  drivetrain: {
    chainguide: O,
    bottom_Bracket: O,
    crankset: O,
    largest_Chainring: O,
    second_Largest_Chainring: O,
    third_Largest_Chainring: O,
    chainring_Spider: O,
    chain: O,
    cassette: O,
    rear_Derailleur: O,
    front_Derailleur: O,
    shifter_RH: O,
    shifter_LH: O,
    shift_Brake_Combo_RH: O,
    shift_Brake_Combo_LH: O,
    shifter_Adapter_RH: O,
    shifter_Adapter_LH: O
  },
  brakes: {
    brake_Caliper_Front: O,
    brake_Caliper_Rear: O,
    brake_Lever_RH: O,
    brake_Lever_LH: O,
    brake_Pads_Front: O,
    brake_Pads_Rear: O,
    brake_Rotor_Front: O,
    brake_Rotor_Rear: O,
    brake_Adapter_Front: O,
    brake_Adapter_Rear: O
  },
  "wheels_&_tyres": {
    front_Wheel: O,
    front_Axle: O,
    rear_Wheel: O,
    rear_Axle: O,
    tyre_Front: O,
    tyre_Rear: O
  }
}, ft = {
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
}, Bn = (i, e) => Object.keys(i).includes(e), Er = (i) => (Object.keys(ft).forEach((e) => {
  Object.keys(i).forEach((t) => {
    `${e}_ID` === t && (ft[e].id = i[t]), `${e}_Name` === t && (ft[e].name = i[t]), `${e}_Product_Category_ID` === t && (ft[e].product_category_id = i[t]), `${e}_Swap` === t && (ft[e].swap = i[t]), `${e}_Version_ID` === t && (ft[e].version_id = i[t]), `${e}_Unsaved_Changes` === t && (ft[e].unsaved_changes = i[t]);
  });
}), Object.keys(Ur).forEach((e) => {
  Object.keys(ft).forEach((t) => {
    Bn(Ur[e], t) && (Ur[e][t] = ft[t]);
  });
}), Object.keys(Ur).forEach((e) => {
  Bn(jr, e) && (jr[e] = Ur[e]);
}), Object.keys(i).forEach((e) => {
  Bn(jr, e) && (jr[e] = i[e]);
}), jr), fu = async (i) => {
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
function J2() {
  const i = window.BikeMatrix.getConfig(), {
    bike: e,
    currentBike: t,
    setCurrentBike: r,
    lounge: n,
    removeBike: s,
    resetBike: o,
    saveBike: a
  } = Ie(), {
    t: l
  } = X(), {
    apiUrl: u,
    apiKey: c,
    apiToken: d,
    isShopify: f,
    virtualWorkshop: h
  } = window.BikeMatrix.getConfig();
  $(() => {
    Ce.value = null;
  }, []);
  const b = new Be(u, c, d, f), m = async () => {
    const g = new URLSearchParams(window.location.search).get("bikematrixid"), v = sessionStorage.getItem("bm_passed_id");
    if (!(v && v !== null && g === v) && (!v || g !== v)) {
      const y = n.find((_) => _.key === g);
      y ? (r(y), sessionStorage.setItem("bm_passed_id", g)) : y || (await x(g), sessionStorage.setItem("bm_passed_id", g));
    }
  }, x = async (w) => {
    const g = await b.getBikeBom(w);
    if (!(g != null && g.success)) {
      i.logLevel === "verbose" && console.error(g.logError);
      return;
    }
    const v = Er(g.data);
    e.value = await fu(v), a(e.value), r(e.value);
  };
  return m(), $(() => {
    n.map((w) => {
      w != null && w.isCustom && (un.value = !1);
    });
  }, [n]), p(V, {
    children: [n != null && n.length ? n == null ? void 0 : n.filter((w) => !!w._key).map((w) => p("div", {
      class: "mb-4 relative",
      children: [p("p", {
        className: "opacity-0 absolute",
        children: w.key
      }), p("div", {
        onClick: () => s(w.key),
        class: "w-7 h-7 z-10 -right-2 -top-2 flex items-center justify-center absolute bg-gray-200 text-gray-800 rounded-full",
        children: p(ai, {
          class: "h-3 w-3"
        })
      }), p(Qe, {
        compact: !0,
        onClick: (g) => {
          g.preventDefault(), r((t == null ? void 0 : t.key) === (w == null ? void 0 : w.key) ? null : {
            ...w
          });
        },
        bike: w,
        selected: (t == null ? void 0 : t.key) === (w == null ? void 0 : w.key),
        spanner: h,
        custom: w == null ? void 0 : w.isCustom
      })]
    }, w.key)) : p("div", {
      class: Z("relative mb-4 z-10 "),
      children: [p("div", {
        class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
        children: [p("span", {
          class: "block rounded-lg h-6 w-1/2 bg-gray-200"
        }), p("img", {
          class: "w-auto mx-auto h-auto max-h-36 opacity-30",
          src: Se("bike.png")
        }), p("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), p("div", {
        class: Z("w-full relative bg-white border -z-10 border-b-0 border-gray-300 rounded-t-xl h-20  mb-4", "after:bottom-0 after:-inset-x-px after:-top-6 after:bg-gradient-to-t after:absolute after:from-white after:to-transparent"),
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
      onClick: (w) => {
        w.preventDefault(), o(), Q("/add");
      },
      class: Z("duration-300 transition-colors sticky bottom-[128px] mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", n.length && !(t != null && t.key) ? "bg-gray-950 text-white" : n.length ? "bg-gray-200 text-gray-800" : "bg-gray-950 text-white", !t && "bottom-0", t && h && "bottom-[128px]", t && !h && "bottom-[72px]"),
      children: [l("bikeselector_home_add_btn"), p(ai, {
        class: "h-3 absolute [&>path]:stroke-[2px] right-5 justify-self-end rotate-45"
      })]
    }), !!(n != null && n.length) && !!(t != null && t.key) && h && p("button", {
      onClick: (w) => {
        w.preventDefault(), !(t != null && t.isCustom) && !(t != null && t.isShared) ? Q("/workshop") : t != null && t.isCustom && !(t != null && t.isShared) ? Q("/bom") : !(t != null && t.isCustom) && (t != null && t.isShared) && Q("/read-only");
      },
      class: Z("duration-300 sticky bottom-[72px] transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: [l("virtualworkshop_title"), p(Z2, {
        class: "h-5 absolute right-5 justify-self-end"
      })]
    }), !!(n != null && n.length) && !!(t != null && t.key) && p("button", {
      onClick: (w) => {
        w.preventDefault(), !i.showBrowseCategoryButtons && i.browseCompatibilityUrl ? window.location.href = i.browseCompatibilityUrl : Q("/browse");
      },
      class: Z("duration-300 sticky bottom-4 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", n.length ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-800"),
      children: l("bikeselector_home_browse_btn")
    }), p(Dt, {})]
  });
}
const X2 = (i) => /* @__PURE__ */ q("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("circle", { cx: 10, cy: 10, r: 10, fill: "#030712" }), /* @__PURE__ */ q("path", { d: "M6.57886 11.0526L9.02922 13.191L13.4604 7.02636", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), et = ({
  messages: i,
  left: e,
  margin: t
}) => {
  const {
    t: r
  } = X(), [n, s] = M(""), [o, a] = M("");
  return $(() => {
    i && i.indexOf(" ") >= 0 && (s(i.split(" ")[0]), a(i.split(" ")[1]));
  }, [i]), p("div", {
    className: `flex h-4 w-auto ${e ? "justify-start" : "justify-center"} ${t ? "mt-1" : ""}`,
    children: i && p("p", {
      className: "message text-xs text-red-500",
      children: r(n || i, {
        endpoint_location: o
      })
    })
  });
};
function ii({
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
  const {
    t: c
  } = X(), d = (h) => {
    switch (h) {
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
  }, f = (h, b) => h === "framesize" && b === "One Size" ? c("bikeselector_size_framesize_one_size") : b;
  return p(V, {
    children: p("div", {
      class: "w-full flex flex-col space-y-2",
      children: [p("label", {
        class: "text-gray-800 font-bold text",
        children: e
      }), a && p("div", {
        class: Z("!my-0 overflow-hidden box-border transition-all duration-300", o ? "max-h-screen" : "h-0"),
        children: [p("p", {
          class: "text-gray-600 my-1 italic text-sm",
          children: d(i)
        }), p("div", {
          class: Z("rounded-xl overflow-hidden my-0 relative py-1 h-32 bg-gray-100 w-full"),
          children: a
        })]
      }), p("div", {
        class: "w-full flex items-center relative",
        children: [p("select", {
          class: Z("rounded-xl peer !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg bg-white placeholder:text-gray-700 text-gray-700", "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400", u.class),
          disabled: n,
          ...u,
          children: [p("option", {
            value: "",
            selected: !u.value,
            disabled: !0,
            children: t
          }), r.map((h) => p("option", {
            value: h.value,
            disabled: h.disabled,
            children: f(i, h.label)
          }))]
        }), s ? p("span", {
          class: "absolute block loader animate-spin right-4 w-5 h-5"
        }) : u.value && typeof n == "boolean" ? p(X2, {
          class: "right-3 absolute w-5 pointer-events-none"
        }) : p(Xe, {
          class: "absolute h-3 text-gray-700 pointer-events-none rotate-90 right-5 peer-disabled:text-gray-400"
        })]
      }), l && p(et, {
        messages: l,
        left: !0,
        margin: 5
      })]
    })
  });
}
const hu = (i) => /* @__PURE__ */ q("svg", { width: 25, height: 25, viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("circle", { cx: 12.5, cy: 12.5, r: 12, fill: "white", stroke: "black" }), /* @__PURE__ */ q("path", { d: "M9 16.0711L12.5355 12.5355M12.5355 12.5355L16.0711 9M12.5355 12.5355L16.0711 16.0711M12.5355 12.5355L9 9", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" })), Q2 = `.input_container{display:flex;flex-direction:column}.input_wrapper{width:100%;border-radius:12px;padding:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:space-between}.input_wrapper input{width:100%}
`, gu = ({
  value: i,
  setValue: e,
  placeholder: t,
  type: r,
  error: n,
  submitInput: s,
  label: o,
  instructions: a
}) => p(V, {
  children: [p("style", {
    type: "text/css",
    children: Q2
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
        value: i,
        onChange: (l) => e(l.currentTarget.value),
        type: r,
        onKeyDown: (l) => {
          l.key === "Enter" && s();
        }
      }), p(hu, {
        height: 20,
        width: 20,
        onClick: () => e(""),
        className: "cursor-pointer"
      })]
    }), p(et, {
      messages: n
    })]
  })]
}), ef = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`;
function At({
  isLoading: i,
  colour: e
}) {
  return p(V, {
    children: [p("style", {
      type: "text/css",
      children: ef
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
const ut = ({
  onClick: i,
  primary: e,
  text: t,
  loading: r,
  disabled: n,
  sticky: s,
  children: o,
  active: a = !0,
  noMargin: l = !1
}) => p("button", {
  onClick: (u) => {
    !n && !r && (u.preventDefault(), i());
  },
  class: Z("duration-300 bottom-4 transition-colors rounded-xl p-3 w-full flex justify-center items-center", `${e && a ? "bg-gray-950 text-white" : e && !a ? "bg-gray-200 text-gray-400 " : "bg-gray-200 text-gray-800"} ${s && "sticky"} ${!l && "mt-4"}`),
  style: {
    cursor: n ? "not-allowed" : "pointer",
    opacity: n ? 0.5 : 1
  },
  children: r ? p(At, {
    isLoading: r,
    colour: e ? "#fff" : "#000"
  }) : p(V, {
    children: [p("span", {
      className: o ? "ml-auto" : "",
      children: t
    }), o]
  })
});
function tf() {
  const i = window.BikeMatrix.getConfig(), {
    bike: e,
    setBikeAttr: t
  } = Ie(), {
    brand: r,
    model: n,
    frameSeries: s
  } = e, {
    t: o
  } = X(), [a, l] = M([]), [u, c] = M(!1), d = new Be(i.apiUrl, i.apiKey, i.apiToken, i.isShopify), [f, h] = M(null), [b, m] = M(""), x = r.value, w = r.value && n.value;
  $(() => {
    const v = i.bikeSelectorBrands ? i.bikeSelectorBrands.split(",").filter((y) => y !== "") : [];
    if (v.length > 0 && r.options.length > 0) {
      let y = [];
      r.options.forEach((_) => {
        v.includes(_.value.toString().trim()) && y.push(_);
      }), l(y);
    } else
      r.options.length > 0 && l(r.options);
  }, [i.bikeSelectorBrands, r.options]);
  const g = async () => {
    c(!0);
    const v = await d.getBikeBom(b);
    if (!(v != null && v.success)) {
      i.logLevel === "verbose" && console.error(v.logError), c(!1), h(v.error);
      return;
    }
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(b)) {
      const _ = await d.getBikeBom(b), A = Er(_.data);
      Ce.value = A, e.value = await fu(A), c(!1), Q("/confirm");
    } else
      h("error_get_bike_bom"), c(!1);
  };
  return p(V, {
    children: [p("div", {
      class: "space-y-5 relative w-full flex flex-col",
      children: [p(ii, {
        type: "brand",
        title: o("bikeselector_addbike_brand_label"),
        placeholder: o("bikeselector_addbike_brand_select"),
        value: r.value,
        options: a,
        onChange: (v) => {
          t("brand", v.target.value);
        },
        loading: !r.options.length && !r.error,
        disabled: !r.options.length || r.error,
        info: !0,
        infoVisible: !r.value,
        error: r.error,
        children: p("img", {
          src: Se("info-brand.svg"),
          class: "w-full h-full"
        })
      }), p(ii, {
        type: "model",
        title: o("bikeselector_addbike_model_label"),
        placeholder: o("bikeselector_addbike_model_select"),
        value: n.value,
        options: n.options,
        onChange: (v) => {
          t("model", v.target.value);
        },
        loading: x && !n.options.length && !n.error,
        disabled: !x || !n.options.length,
        info: !0,
        infoVisible: x && !n.value,
        error: n.error,
        children: p("img", {
          src: Se("info-model.svg"),
          class: "w-full h-full"
        })
      }), p(ii, {
        type: "framespec",
        title: o("bikeselector_addbike_framespec_label"),
        placeholder: o("bikeselector_addbike_framespec_select"),
        value: s.value,
        loading: w && !s.options.length && !s.error,
        options: s.options,
        onChange: (v) => {
          t("frameSeries", v.target.value);
        },
        disabled: !w || !s.options.length || s.error,
        info: !0,
        infoVisible: w && !s.value,
        error: s.error,
        children: p("img", {
          src: Se("info-frameseries.svg"),
          class: "w-full h-full"
        })
      }), i.virtualWorkshop && p(V, {
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
        }), p(gu, {
          value: b,
          setValue: (v) => m(v),
          label: "Bike Matrix ID",
          placeholder: o("virtualworkshop_add_by_id"),
          type: "text",
          instructions: o("virtualworkshop_bm_id_text")
        })]
      })]
    }), p(et, {
      messages: f
    }), p(ut, {
      noMargin: !0,
      primary: !0,
      text: o("bikeselector_addbike_find_btn"),
      onClick: () => {
        r.value && n.value && s.value ? Q("/search") : b && g();
      },
      active: r.value && n.value && s.value || b,
      loading: u,
      children: p(Xe, {
        class: "h-3 ml-auto justify-self-end"
      })
    })]
  });
}
function rf() {
  var b, m, x, w;
  const {
    bike: i,
    setBike: e,
    setBikeAttr: t,
    results: r,
    loading: n
  } = Ie(), {
    year: s,
    bikeSpec: o
  } = i, {
    t: a
  } = X(), [l, u] = [i.value, (g) => e((v) => ({
    ...v,
    value: g
  }))], c = at(() => {
    const g = r == null ? void 0 : r.filter((v) => {
      var _;
      let y = !0;
      return o.value && (y = v.bikeSpec === o.value), y && s.value.length && (y = (_ = s.value) == null ? void 0 : _.includes(v.year)), y;
    });
    return g.some((v) => v._key == l._key) || u({}), g;
  }, [r, o.value, s.value]), d = at(() => o.value ? r.filter((v) => o.value == v.bikeSpec).map((v) => v.year) : s.options.map((v) => v.value), [o.value]), f = at(() => {
    var v;
    if (!((v = s.value) != null && v.length))
      return o.options;
    const g = r.filter((y) => {
      var _;
      return (_ = s.value) == null ? void 0 : _.includes(y.year);
    }).map((y) => y.bikeSpec);
    return o.options.map((y) => ({
      ...y,
      disabled: !g.includes(y.value)
    }));
  }, [o.options, s.value]), h = (g) => g === 0 ? a("bikeselector_search_no_bikes_found") : g === 1 ? a("bikeselector_search_one_bike_found") : a("bikeselector_search_number_bikes_found", {
    number_found: g
  });
  return p(V, {
    children: [p("div", {
      class: "space-y-3 mb-6 relative w-full flex flex-col",
      children: [(i.bikeSpec.error || i.frameSize.error || i.year.error) && p(et, {
        messages: i.bikeSpec.error || i.frameSize.error || i.year.error
      }), p(ii, {
        type: "bikespec",
        title: a("bikeselector_search_bikespec_label"),
        placeholder: a("bikeselector_search_bikespec_select"),
        value: o.value,
        options: [{
          label: a("bikeselector_search_bikespec_select_all"),
          value: ""
        }, ...f],
        onChange: (g) => {
          t("bikeSpec", g.target.value);
        },
        disabled: !((b = o.options) != null && b.length) || i.bikeSpec.error,
        loading: !((m = o.options) != null && m.length) && !i.bikeSpec.error
      }), p("div", {
        class: "w-full flex flex-col space-y-2",
        children: [p("label", {
          class: "text-gray-800 font-bold text",
          children: a("bikeselector_search_year_label")
        }), p("div", {
          class: Z("flex space-x-2 overflow-x-auto", "-mx-8 w-[calc(100%_+_64px)] px-8 no-scrollbar"),
          children: (x = s.options) != null && x.length ? (w = s.options) == null ? void 0 : w.map((g) => {
            var _;
            const v = o.value && !d.includes(g.value), y = (_ = s.value) == null ? void 0 : _.includes(g.value);
            return p("div", {
              onClick: () => {
                v || t("year", y ? s.value.filter((A) => A !== g.value) : [...s.value, g.value]);
              },
              class: Z("rounded-full cursor-pointer items-center flex border  py-2 px-4", y ? "pr-3 bg-gray-950 border-gray-950 text-white" : "border-gray-300 text-gray-700 ", v && "hidden"),
              children: [g.label, y && p(ai, {
                class: "w-3 h-3 ml-2"
              })]
            });
          }) : Array(2).fill(0).map((g, v) => p("div", {
            class: "rounded-full items-center flex border py-2 bg-gray-100 px-4 bg-100 border-gray-300 animate-pulse",
            children: p("span", {
              class: "rounded-lg bg-gray-100 w-9 h-5"
            })
          }, v))
        })]
      }), p("div", {
        class: Z("text-nowrap font-medium w-full flex", "[&>span]:text-gray-500 [&>span]:font-normal"),
        children: [n ? (
          // "Searching..."
          p(V, {
            children: a("bikeselector_search_searching")
          })
        ) : p(V, {
          children: h(c.length)
        }), " ", (r == null ? void 0 : r.length) > 0 && p(V, {
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
        children: c != null && c.length && !n ? c.map((g, v) => p(Qe, {
          "data-key": g._key,
          bike: g,
          selected: g._key === l._key,
          onClick: (y) => {
            y.preventDefault(), u(g);
          },
          compact: !0
        }, g._key)) : Array(n ? 2 : 1).fill(0).map((g, v) => p("div", {
          class: Z("w-full relative rounded-xl h-40 bg-white border border-gray-200 ", n && "animate-pulse"),
          children: [p("span", {
            class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
          }), p("span", {
            class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-200"
          })]
        }, v))
      })]
    }), p("button", {
      onClick: (g) => {
        var v, y;
        if (g.preventDefault(), l._key) {
          const _ = (v = this.base.querySelector(`[data-key="${l._key}"] [data-active-slide]`)) == null ? void 0 : v.getAttribute("data-active-slide"), D = [(y = this.base.querySelector(`[data-key="${l._key}"] [data-slide="${_}"] img`)) == null ? void 0 : y.src].filter((k) => !!k);
          D != null && D.length && e((k) => (k.value = {
            ...k.value || {},
            images: D
          }, {
            ...k
          })), Q("/size");
        }
      },
      class: Z("duration-300 transition-colors sticky bottom-6 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", l._key ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [p("span", {
        class: "ml-auto",
        children: a("bikeselector_search_confirm_btn")
      }), " ", p(Xe, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
function nf() {
  var s, o;
  const {
    bike: i,
    setBikeAttr: e,
    setBike: t
  } = Ie(), {
    frameSize: r
  } = i, {
    t: n
  } = X();
  return $(() => {
    var a;
    (a = r.options) != null && a.length || Q("/confirm");
  }, []), p(V, {
    children: [p(Qe, {
      bike: i.value,
      selected: !0,
      compact: !0
    }), p("div", {
      class: " mt-4 mb-6 relative w-full flex flex-col",
      children: p(ii, {
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
        children: p("img", {
          src: Se("info-size.svg"),
          class: "w-full h-full"
        })
      })
    }), p("button", {
      onClick: (a) => {
        a.preventDefault(), r.value && Q("/confirm");
      },
      class: Z("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", r.value ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [p("span", {
        class: "ml-auto",
        children: n("bikeselector_size_confirm_btn")
      }), " ", p(Xe, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
const it = De({
  title: "",
  step: 0,
  back: ""
});
function sf({
  children: i
}) {
  const {
    t: e
  } = X();
  return p(V, {
    children: [p("div", {
      class: "relative flex items-center justify-center w-full h-10 my-5 sm:mt-8",
      children: [!!it.value.back && p("div", {
        onClick: () => Q(it.value.back),
        class: " w-10 h-10 absolute left-0 rounded-xl self-start border-gray-200 border items-center justify-center flex",
        children: p(Xe, {
          class: "h-3 text-gray-500 -translate-x-px -rotate-180"
        })
      }), p("h2", {
        class: "text-xl font-bold",
        style: {
          maxWidth: "70%",
          textAlign: "center"
        },
        children: e(it.value.title)
      })]
    }), i, typeof it.value.step < "u" && p("div", {
      class: "space-x-2 my-6 flex items-center justify-center",
      children: [0, 1, 2, 3].map((t) => p("div", {
        class: Z("rounded-xl h-2 transition-all duration-300", t == it.value.step ? "w-6 bg-gray-950" : "w-2 bg-gray-200")
      }, t))
    })]
  });
}
function of() {
  const {
    bike: i,
    saveBike: e
  } = Ie(), {
    brand: t,
    model: r,
    frameSeries: n,
    frameSize: s,
    year: o,
    bikeSpec: a
  } = i.value, {
    t: l
  } = X(), u = Ce.value;
  return $(() => {
    !s && !u ? it.value.back = "/search" : u && (it.value.back = "/add");
  }, []), p(V, {
    children: [p(Qe, {
      bike: i.value,
      selected: !0,
      compact: !0
    }), p("div", {
      class: " space-y-4 mt-4 mb-6 relative w-full flex flex-col",
      children: [{
        // title: "Brand, Model, Frame Series",
        title: l("bikeselector_confirm_brandmodelframespec_label"),
        value: [t, r, n].join(", "),
        path: "/add"
      }, {
        // title: "Year, Bike Spec",
        title: l("bikeselector_confirm_yearbikespec_label"),
        value: [o, a].join(", "),
        path: "/search"
      }, {
        // title: "Frame Size",
        title: l("bikeselector_confirm_framesize_label"),
        value: s,
        path: "/size"
      }].filter((c) => !!c.value).map((c) => p("div", {
        class: "w-full flex flex-col space-y-2",
        children: [p("label", {
          class: "text-gray-800 font-bold",
          children: c.title
        }), p("div", {
          onClick: () => Q(c.path),
          class: "w-full flex items-center relative cursor-pointer",
          children: [p("div", {
            class: Z("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-700"),
            children: c.value
          }), p(Xe, {
            class: "absolute h-3 text-gray-700 pointer-events-none right-4 peer-disabled:text-gray-400"
          })]
        })]
      }, c.path))
    }), p("button", {
      onClick: (c) => {
        c.preventDefault(), e(i.value), Q("/browse");
      },
      class: Z("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: l("bikeselector_confirm_confirm_btn")
    }), p("p", {
      class: "text-gray-600 -mb-3 mt-2 text-center font-normal text-xs",
      children: l("bikeselector_confirm_notyourride_msg")
    })]
  });
}
function af() {
  const {
    currentBike: i,
    compatibleCollections: e
  } = Ie(), [t, r] = M(!0), [n, s] = M(), {
    t: o
  } = X(), a = () => {
    if (e && e.length > 0) {
      let l = [];
      e.map((u) => {
        l.some((c) => c.text_id === u.text_id) || l.push(u);
      }), s(l);
    }
  };
  return $(() => {
    a();
  }, [e]), $(() => {
    n && r(!1);
  }, [n]), p(V, {
    children: [p(Qe, {
      bike: i,
      selected: !0
    }), !!(n != null && n.length) && !e.error && p(V, {
      children: [p("p", {
        class: "text-gray-800 mt-4 font-bold",
        children: o("bikeselector_browse_products_label")
      }), p("div", {
        class: "gap-3 mt-2 mb-6 relative w-full flex flex-wrap",
        children: n.map((l) => p("a", {
          href: l.url,
          class: "group flex items-center relative cursor-pointer",
          children: [p("div", {
            class: Z("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-950", "group-disabled:bg-gray-100 group-disabled:border-gray-200 group-disabled:text-gray-400"),
            children: o(l.text_id)
          }), p(Xe, {
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
      children: p(At, {
        isLoading: t,
        colour: "#000"
      })
    }), e && (e == null ? void 0 : e.error) && p(et, {
      messages: e.error,
      left: !0,
      margin: 20
    }), p("button", {
      onClick: (l) => {
        l.preventDefault(), Sr();
      },
      class: Z("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: o("bikeselector_browse_shop_btn")
    }), p("button", {
      onClick: (l) => {
        l.preventDefault(), Q("/");
      },
      class: Z("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: o("bikeselector_browse_back_btn")
    }), p(Dt, {})]
  });
}
const Or = () => p("div", {
  class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
  children: [p("span", {
    class: "block rounded-lg h-6 w-1/2 bg-gray-200"
  }), p("img", {
    class: "w-auto mx-auto h-auto max-h-36 opacity-30",
    src: Se("bike.png")
  }), p("span", {
    class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
  })]
});
function lf() {
  const {
    t: i
  } = X(), t = window.BikeMatrix.getConfig(), {
    currentBike: r,
    setCurrentBike: n,
    compatibleCollections: s
  } = Ie(), o = new Be(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), [a, l] = M(!1), [u, c] = M(null), {
    saveBike: d
  } = Ie(), f = async () => {
    l(!0);
    const h = await o.addCustomBike(r.key);
    if (h.success) {
      const b = await o.getBikeBom(h == null ? void 0 : h.data);
      if (!b.success) {
        c(b.error), l(!1), t.logLevel === "verbose" && console.error(b.logError);
        return;
      }
      const m = Er(b.data);
      Ce.value = m;
      const x = {
        ...r,
        key: m.bike_Key,
        isCustom: !0,
        shareId: m.share_Bike_Key
      };
      d(x), n(x), l(!1), Q("/bom");
    } else {
      c(h.error), l(!1), t.logLevel === "verbose" && console.error(h.logError);
      return;
    }
  };
  return p(V, {
    children: [p("div", {
      style: {
        marginBottom: "1rem"
      },
      children: [r ? p(Qe, {
        bike: r,
        noSymbol: !0,
        compact: !0
      }) : p(Or, {}), p("div", {
        class: " text-gray-800 text-center flex z-20 justify-center font-bold mt-6",
        children: !s.error && s.length > 1 ? i("virtualworkshop_intro_text") : i("virtualworkshop_do_not_pass")
      })]
    }), p(et, {
      messages: u || s.error
    }), p(ut, {
      text: !s.error && s.length > 1 ? i("virtualworkshop_enter_button") : i("bikeselector_browse_back_btn"),
      onClick: !s.error && s.length > 1 ? () => f() : () => Q("/"),
      loading: a,
      primary: !0
    }), p(Dt, {})]
  });
}
const uf = `.overflowing{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;justify-content:flex-start}.flexend{justify-content:flex-end}
`, yt = ({
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
}) => p(V, {
  children: [p("style", {
    type: "text/css",
    children: uf
  }), t ? p("h2", {
    class: "text-xl font-bold",
    children: r
  }) : e ? p("h4", {
    className: `text-gray-800 text-center flex z-20 justify-center font-bold  ${a ? "capitalize" : ""}`,
    children: r
  }) : p("p", {
    class: `text-gray-800  flex z-20 ${n ? "text-sm" : ""} ${s ? "text-start justify-start" : "text-center justify-center"} ${o ? "font-bold" : ""} ${a ? "capitalize" : ""} ${l ? "overflowing" : ""} ${u ? "flexend" : ""}`,
    children: r
  })]
}), cf = `.background-alert-wrapper{opacity:0;position:absolute;height:100%;width:100%;display:none;top:0;left:0;pointer-events:none}.alert-wrapper{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none}.alert{width:80%;padding:2rem;border-radius:12px;background-color:#fff;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:300}.text-wrapper{display:flex;flex-direction:column;align-items:center;gap:1rem}.button-wrapper{display:flex;gap:1rem;width:100%;margin-top:1rem}
`, Ys = ({
  isOpen: i,
  toggleModal: e,
  content: t,
  title: r,
  onConfirm: n,
  onCancel: s,
  children: o,
  loading: a,
  secondary: l = !1
}) => {
  const {
    t: u
  } = X(), c = Y(null), d = Y(null), f = () => {
    ee.to(d.current, {
      opacity: 1,
      duration: 0.25,
      zIndex: 2e3,
      pointerEvents: "all",
      display: "block"
    }), ee.to(c.current, {
      opacity: 1,
      duration: 0.5,
      pointerEvents: "all"
    });
  }, h = () => {
    ee.to(d.current, {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
      display: "none"
    }), ee.to(c.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
      onComplete: () => e()
    });
  };
  return $(() => {
    i ? f() : h();
  }, [i]), p("div", {
    ref: d,
    className: "background-alert-wrapper",
    children: [p("style", {
      type: "text/css",
      children: cf
    }), p("div", {
      className: "alert-wrapper",
      onClick: h,
      ref: c
    }), p("div", {
      className: "alert",
      children: [p("div", {
        className: "text-wrapper",
        children: [p(yt, {
          text: r,
          header: !0
        }), t && p(yt, {
          text: t,
          paragraph: !0
        })]
      }), o, l ? p(ut, {
        text: "Done",
        onClick: n,
        primary: !0
      }) : p("div", {
        className: "button-wrapper",
        children: [p(ut, {
          text: u("confirm"),
          onClick: n,
          primary: !0,
          loading: a
        }), p(ut, {
          text: u("cancel"),
          onClick: h
        })]
      })]
    })]
  });
}, df = `.bom-table{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.bom-table_unsaved-changes{display:flex;justify-content:space-between;align-items:center}.circle{background-color:#fba157;border-radius:100%;display:flex;justify-content:center;align-items:center;color:#fff;height:16px;width:16px;min-width:16px;min-height:16px;font-size:10px}.unsaved-changes{position:relative;width:50%}
`, pf = `.unsaved-changes_wrapper{opacity:0}.title-section{display:flex;align-items:center;justify-content:flex-end;gap:.35rem;cursor:pointer;position:relative;z-index:23;padding-right:15px}.unsaved-content{display:flex;flex-direction:column;align-items:flex-start;width:100%;gap:1rem;border-radius:12px;background-color:#fff;border:1px solid transparent;position:absolute;z-index:21;right:0;height:0;width:0;overflow:hidden;top:-1rem}.animation-wrapper{padding:15px;margin-top:2rem;width:100%;opacity:0;display:flex;flex-direction:column;gap:1rem}.unsaved-part-wrapper{width:100%}.unsaved-part{display:flex;align-items:center;justify-content:space-between;gap:1rem}.revert-button{font-size:10px;padding:3px 10px;border:1px solid #d1d5db;border-radius:12px;transition:all ease-in-out .5s;cursor:pointer}.revert-button:hover{background-color:#000;color:#fff}.close-button{position:absolute;left:6px;top:6px;cursor:pointer}
`, ff = (i) => /* @__PURE__ */ q("svg", { width: 28, height: 28, viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("circle", { cx: 14, cy: 14, r: 14, fill: "white" }), /* @__PURE__ */ q("path", { d: "M11 17L14 14M14 14L17 11M14 14L17 17M14 14L11 11", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let ha = typeof document < "u" ? Fr : $, ga = (i) => i && !Array.isArray(i) && typeof i == "object", ki = [], hf = {}, mu = ee;
const Ws = (i, e = ki) => {
  let t = hf;
  ga(i) ? (t = i, i = null, e = "dependencies" in t ? t.dependencies : ki) : ga(e) && (t = e, e = "dependencies" in t ? t.dependencies : ki), i && typeof i != "function" && console.warn("First parameter must be a function or config object");
  const { scope: r, revertOnUpdate: n } = t, s = Y(!1), o = Y(mu.context(() => {
  }, r)), a = Y((u) => o.current.add(null, u)), l = e && e.length && !n;
  return l && ha(() => (s.current = !0, () => o.current.revert()), ki), ha(() => {
    if (i && o.current.add(i, r), !l || !s.current)
      return () => o.current.revert();
  }, e), { context: o.current, contextSafe: a.current };
};
Ws.register = (i) => {
  mu = i;
};
Ws.headless = !0;
const gf = () => {
  const [i, e] = M(window.innerWidth), [t, r] = M(window.innerHeight);
  return $(() => {
    const n = () => {
      e(window.innerWidth), r(window.innerHeight);
    };
    return window.addEventListener("resize", n), () => {
      window.removeEventListener("resize", n);
    };
  }, []), {
    width: i,
    height: t
  };
}, mf = ({
  unsavedParts: i,
  revertPart: e,
  readOnly: t
}) => {
  const {
    t: r
  } = X(), n = Y(null), s = Y(), o = Y(null), a = Y([]), [l, u] = M(i), c = Y(null), {
    height: d,
    width: f
  } = gf(), {
    contextSafe: h
  } = Ws(() => {
    s.current = ee.timeline({
      paused: !0
    }), s.current.to(n.current, {
      border: "1px solid #d1d5db",
      height: "auto",
      maxHeight: "150px",
      overflowY: "auto",
      width: f >= 640 ? "500px" : "366px"
    }).to(o.current, {
      opacity: 1
    }, "-=.25").reverse(), l.length > 0 ? ee.to(c.current, {
      opacity: 1
    }) : ee.to(c.current, {
      opacity: 0
    });
  }, {
    scope: c,
    dependencies: [l]
  }), b = h(() => {
    s.current.reversed(!s.current.reversed());
  }), m = (x, w, g) => {
    u(l.filter((v) => v.part !== w)), ee.to(a.current[x], {
      opacity: 0,
      height: 0,
      onComplete: () => e(w, g)
    });
  };
  return $(() => {
    u(i);
  }, [i]), p(V, {
    children: [p("style", {
      type: "text/css",
      children: pf
    }), p("div", {
      className: "unsaved-changes_wrapper",
      ref: c,
      onClick: b,
      children: [p("div", {
        className: "title-section",
        children: [p(yt, {
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
        ref: n,
        children: [p("div", {
          className: "close-button",
          children: p(ff, {})
        }), p("div", {
          className: "animation-wrapper",
          ref: o,
          children: l.length > 0 && l.map((x, w) => {
            var g, v;
            return p("div", {
              className: "unsaved-part-wrapper",
              ref: (y) => a.current[x.type + w] = y,
              children: [p(yt, {
                text: (g = x.type) == null ? void 0 : g.replace(/_/g, " "),
                small: !0,
                left: !0,
                bold: !0,
                capitalize: !0
              }), p("div", {
                className: "unsaved-part",
                children: [p(yt, {
                  text: (v = x.part) != null && v.name ? x.part.name : r("virtualworkshop_removed"),
                  small: !0,
                  left: !0
                }), p("div", {
                  className: "revert-button",
                  onClick: () => m(x.type + w, x.part, x.type),
                  children: r("virtualworkshop_revert_btn")
                })]
              })]
            }, x.type + w);
          })
        })]
      })]
    })]
  });
}, Ks = () => {
  JSON.parse(sessionStorage.getItem("bm_categories")).collections.map((e) => {
    sessionStorage.removeItem(`${K.value.key}:${e.handle}:v2`);
  });
}, Zs = {
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
}, bf = `.type,.part{font-size:16px}.wrapper{display:flex;flex-direction:column;gap:.25rem}.part-wrapper{display:flex;justify-content:space-between;align-items:flex-start;padding:10px;transition:all ease-in-out .5s}.can-hover{cursor:pointer}.can-hover:hover{background-color:#d9d9d966;border-radius:12px}.type-wrapper{display:flex}.svg-wrapper{min-width:20px}.updating-spinner{position:absolute;top:2.5rem;right:1rem}
`, vf = (i) => /* @__PURE__ */ q("svg", { width: 20, height: 20, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M15.5 31C24.0605 31 31 24.0604 31 15.5C31 6.93958 24.0605 0 15.5 0C6.93945 0 0 6.93958 0 15.5C0 18.6947 0.966309 21.6637 2.62305 24.1305L8.62451 18.4889C8.74268 18.3724 8.86279 18.2644 8.98389 18.1625C7.87256 15.2234 8.50049 11.7754 10.8701 9.41406C12.6006 7.68994 14.9941 6.82117 17.4365 7.03076C17.5571 7.04114 17.6699 7.08105 17.7671 7.14429C17.8936 7.22681 17.9932 7.349 18.0474 7.49646C18.1226 7.70227 18.0977 7.92786 17.9868 8.11011C17.9575 8.15796 17.9224 8.20288 17.8813 8.24365L13.8589 12.2506L15.271 16.6925L19.7295 18.099L23.7515 14.0924C23.9482 13.8969 24.2407 13.8322 24.502 13.9272C24.7627 14.0217 24.9453 14.2588 24.9692 14.5348C25.1797 16.9679 24.3071 19.3524 22.5771 21.0768C20.2051 23.4396 16.7417 24.0634 13.7905 22.9541C13.6904 23.0771 13.5845 23.197 13.4697 23.3115L8.0708 29.1067C10.2769 30.3137 12.8081 31 15.5 31Z", fill: "#10B981" })), wf = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db;position:relative}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}
`, bu = ({
  title: i,
  children: e
}) => {
  const [t, r] = M(!1), n = Y(null), s = Y(null), o = Y(null), a = Y();
  return $(() => {
    a.current = ee.timeline({
      paused: !0
    });
    const l = ee.context(() => {
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
  }, []), $(() => {
    a.current.reversed(!t);
  }, [t, r]), p(V, {
    children: [p("style", {
      type: "text/css",
      children: wf
    }), p("div", {
      className: "accordian-wrapper",
      ref: n,
      children: [p("div", {
        className: "header-content",
        onClick: () => r(!t),
        children: [p("h4", {
          className: "category font-semibold",
          children: i
        }), p("div", {
          className: "chevron-wrapper",
          ref: o,
          children: p(Xe, {})
        })]
      }), p("div", {
        className: "content",
        ref: s,
        children: e
      })]
    })]
  });
}, ma = {
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
}, xf = ({
  bom: i,
  category: e,
  readOnly: t,
  loading: r
}) => {
  const {
    t: n
  } = X(), s = (o, a, l) => {
    ln.value = {
      part: o,
      category: a,
      type: l
    }, o.id ? Q("/part") : Q("/update");
  };
  return p(bu, {
    title: n(ma[e]),
    children: [p("style", {
      type: "text/css",
      children: bf
    }), r && i && p("div", {
      className: "updating-spinner",
      children: p(At, {
        colour: "#000",
        isLoading: !0
      })
    }), i ? Object.keys(i || {}).map((o, a) => {
      if (e.toLocaleLowerCase() === o.replace(/_/g, " ").toLocaleLowerCase())
        return Object.keys(i[o] || {}).map((l) => {
          const u = i[o][l];
          return p("div", {
            className: "wrapper",
            children: [p("div", {
              className: "type-wrapper",
              children: p("h4", {
                className: "type font-semibold capitalize",
                children: n(ma[l])
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
                children: p(vf, {})
              })]
            }, u == null ? void 0 : u.id)]
          }, l);
        });
    }) : p(At, {
      colour: "#000",
      isLoading: !0
    })]
  });
}, vu = ({
  categorisedBOM: i,
  bikeSave: e,
  refreshBomb: t,
  readOnly: r,
  loading: n,
  bomError: s
}) => {
  const {
    t: o
  } = X(), l = window.BikeMatrix.getConfig(), [u, c] = M([]), {
    currentBike: d,
    setCurrentBike: f
  } = Ie(), h = new Be(l.apiUrl, l.apiKey, l.apiToken, l.isShopify), [b, m] = M(""), x = Ce.value, w = [
    "Frame & Fork",
    "Drivetrain",
    "Brakes",
    "Cockpit",
    "Wheels & Tyres"
    // "EBike",
  ], g = async (y, _) => {
    Ks();
    const A = await h.revertComponent(d.key, y.product_category_id, Zs[_.split(" ").join("_")]);
    if (A.success)
      t(), f({
        ...d
      });
    else {
      m(A.error), l.logLevel === "verbose" && console.error(A.logError);
      return;
    }
  }, v = () => {
    let y = [];
    x && Object.keys(i).forEach((_) => {
      typeof i[_] == "object" && i[_] !== null && Object.keys(i[_]).forEach((A) => {
        i[_][A].unsaved_changes && y.push({
          type: A,
          part: i[_][A]
        });
      });
    }), c(y);
  };
  return $(() => {
    v();
  }, [x, i]), p(V, {
    children: [p("style", {
      type: "text/css",
      children: df
    }), p("div", {
      class: "bom-table_unsaved-changes mt-8",
      children: [p(yt, {
        subheader: !0,
        text: o("virtualworkshop_build_text")
      }), !r && p("div", {
        className: "unsaved-changes",
        children: p(mf, {
          readOnly: r,
          unsavedParts: u,
          revertPart: (y, _) => g(y, _)
        })
      }), !i && r && p(At, {
        isLoading: !0,
        colour: "#000"
      }), (s || b) && p(et, {
        messages: s || b
      })]
    }), p("div", {
      className: "bom-table",
      children: w.map((y, _) => p(xf, {
        category: y,
        bom: i,
        readOnly: r,
        loading: n
      }, y + _))
    })]
  });
}, yf = `@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.onboarding-wrapper{position:absolute;height:100%;width:100%;top:0;left:0}.onboarding-background{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px}@media screen and (max-width: 639px){.onboarding-background{background-color:#000000b3}}.onboarding-modal{background-color:#fff;border-radius:8px;width:90%;height:-moz-fit-content;height:fit-content;z-index:201;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:hidden}.heading{max-width:60%;text-align:center;margin-left:auto;margin-right:auto}.back-button{z-index:1;cursor:pointer;display:flex;justify-content:center;align-items:center;border-radius:12px;border:1px solid #d4d4d4;position:absolute;top:30px;left:30px;width:40px;height:40px;padding-right:2px}.back-button svg{transform:rotate(180deg);color:#6b7280}.button-wrapper{padding:30px}.swiper-pagination-bullet{width:7px;height:7px;opacity:1;background:rgba(0,0,0,.2)}.swiper-pagination-bullet-active{background:#000}.swiper-pagination-bullets.swiper-pagination-horizontal{--swiper-pagination-bottom: -2.5rem}.swiper{overflow:visible}
`, _f = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgMzFDMjQuMDYwNSAzMSAzMSAyNC4wNjA0IDMxIDE1LjVDMzEgNi45Mzk1OCAyNC4wNjA1IDAgMTUuNSAwQzYuOTM5NDUgMCAwIDYuOTM5NTggMCAxNS41QzAgMTguNjk0NyAwLjk2NjMwOSAyMS42NjM3IDIuNjIzMDUgMjQuMTMwNUw4LjYyNDUxIDE4LjQ4ODlDOC43NDI2OCAxOC4zNzI0IDguODYyNzkgMTguMjY0NCA4Ljk4Mzg5IDE4LjE2MjVDNy44NzI1NiAxNS4yMjM0IDguNTAwNDkgMTEuNzc1NCAxMC44NzAxIDkuNDE0MDZDMTIuNjAwNiA3LjY4OTk0IDE0Ljk5NDEgNi44MjExNyAxNy40MzY1IDcuMDMwNzZDMTcuNTU3MSA3LjA0MTE0IDE3LjY2OTkgNy4wODEwNSAxNy43NjcxIDcuMTQ0MjlDMTcuODkzNiA3LjIyNjgxIDE3Ljk5MzIgNy4zNDkgMTguMDQ3NCA3LjQ5NjQ2QzE4LjEyMjYgNy43MDIyNyAxOC4wOTc3IDcuOTI3ODYgMTcuOTg2OCA4LjExMDExQzE3Ljk1NzUgOC4xNTc5NiAxNy45MjI0IDguMjAyODggMTcuODgxMyA4LjI0MzY1TDEzLjg1ODkgMTIuMjUwNkwxNS4yNzEgMTYuNjkyNUwxOS43Mjk1IDE4LjA5OUwyMy43NTE1IDE0LjA5MjRDMjMuOTQ4MiAxMy44OTY5IDI0LjI0MDcgMTMuODMyMiAyNC41MDIgMTMuOTI3MkMyNC43NjI3IDE0LjAyMTcgMjQuOTQ1MyAxNC4yNTg4IDI0Ljk2OTIgMTQuNTM0OEMyNS4xNzk3IDE2Ljk2NzkgMjQuMzA3MSAxOS4zNTI0IDIyLjU3NzEgMjEuMDc2OEMyMC4yMDUxIDIzLjQzOTYgMTYuNzQxNyAyNC4wNjM0IDEzLjc5MDUgMjIuOTU0MUMxMy42OTA0IDIzLjA3NzEgMTMuNTg0NSAyMy4xOTcgMTMuNDY5NyAyMy4zMTE1TDguMDcwOCAyOS4xMDY3QzEwLjI3NjkgMzAuMzEzNyAxMi44MDgxIDMxIDE1LjUgMzFaIiBmaWxsPSIjMTBCOTgxIi8+Cjwvc3ZnPgo=", wu = [{
  number: 1,
  title: "virtualworkshop_title",
  content: "onboarding_vw_description",
  image: Se("onboarding-vw/build.png"),
  svg: ""
}, {
  number: 2,
  title: "onboarding_open_bike_build",
  content: "onboarding_open_bike_build_description",
  image: Se("onboarding-vw/build.png"),
  svg: ""
}, {
  number: 3,
  title: "onboarding_green_spanner",
  content: "onboarding_green_spanner_description",
  image: Se("onboarding-vw/green-spanner.png"),
  svg: _f
}, {
  number: 4,
  title: "onboarding_replacement",
  content: "onboarding_replacement_description",
  image: Se("onboarding-vw/compatible.png"),
  svg: ""
}, {
  number: 5,
  title: "onboarding_linked_components",
  content: "onboarding_linked_components_description",
  image: Se("onboarding-vw/not-compatible.png"),
  svg: ""
}, {
  number: 6,
  title: "onboarding_preview",
  content: "onboarding_preview_description",
  image: Se("onboarding-vw/unsaved-changes.png"),
  svg: ""
}, {
  number: 7,
  title: "onboarding_settings",
  content: "onboarding_settings_description",
  image: Se("onboarding-vw/settings.png"),
  svg: ""
}], Cf = `.card-wrapper{width:100%;display:flex;flex-direction:column}.card-image-wrapper{border:1px solid #d4d4d4;border-radius:8px;overflow:hidden;width:100%;margin-bottom:1rem}.card-image-wrapper img{width:100%;height:auto}.card-content{color:#000;font-size:16px}
`, Af = ({
  title: i,
  src: e,
  content: t,
  number: r
}) => {
  const {
    t: n
  } = X();
  return p(V, {
    children: [p("style", {
      type: "text/css",
      children: Cf
    }), p("div", {
      className: "card-wrapper",
      children: [p("div", {
        className: "card-image-wrapper",
        children: p("img", {
          src: e
        })
      }), p("h3", {
        class: "card-title",
        children: [r, ". ", n(`${i}`)]
      }), p("div", {
        className: "card-content",
        children: n(`${t}`)
      })]
    })]
  });
};
function ba(i) {
  return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
}
function Js(i, e) {
  i === void 0 && (i = {}), e === void 0 && (e = {});
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((r) => t.indexOf(r) < 0).forEach((r) => {
    typeof i[r] > "u" ? i[r] = e[r] : ba(e[r]) && ba(i[r]) && Object.keys(e[r]).length > 0 && Js(i[r], e[r]);
  });
}
const xu = {
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
function nr() {
  const i = typeof document < "u" ? document : {};
  return Js(i, xu), i;
}
const Df = {
  document: xu,
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
  return Js(i, Df), i;
}
function kf(i) {
  return i === void 0 && (i = ""), i.trim().split(" ").filter((e) => !!e.trim());
}
function Sf(i) {
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
function ds(i, e) {
  return e === void 0 && (e = 0), setTimeout(i, e);
}
function Ji() {
  return Date.now();
}
function Ef(i) {
  const e = Le();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t;
}
function Bf(i, e) {
  e === void 0 && (e = "x");
  const t = Le();
  let r, n, s;
  const o = Ef(i);
  return t.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((a) => a.replace(",", ".")).join(", ")), s = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = s.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? n = s.m41 : r.length === 16 ? n = parseFloat(r[12]) : n = parseFloat(r[4])), e === "y" && (t.WebKitCSSMatrix ? n = s.m42 : r.length === 16 ? n = parseFloat(r[13]) : n = parseFloat(r[5])), n || 0;
}
function Si(i) {
  return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object";
}
function Lf(i) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11);
}
function ze() {
  const i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const r = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (r != null && !Lf(r)) {
      const n = Object.keys(Object(r)).filter((s) => e.indexOf(s) < 0);
      for (let s = 0, o = n.length; s < o; s += 1) {
        const a = n[s], l = Object.getOwnPropertyDescriptor(r, a);
        l !== void 0 && l.enumerable && (Si(i[a]) && Si(r[a]) ? r[a].__swiper__ ? i[a] = r[a] : ze(i[a], r[a]) : !Si(i[a]) && Si(r[a]) ? (i[a] = {}, r[a].__swiper__ ? i[a] = r[a] : ze(i[a], r[a])) : i[a] = r[a]);
      }
    }
  }
  return i;
}
function Ei(i, e, t) {
  i.style.setProperty(e, t);
}
function yu(i) {
  let {
    swiper: e,
    targetPosition: t,
    side: r
  } = i;
  const n = Le(), s = -e.translate;
  let o = null, a;
  const l = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const u = t > s ? "next" : "prev", c = (f, h) => u === "next" && f >= h || u === "prev" && f <= h, d = () => {
    a = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = a);
    const f = Math.max(Math.min((a - o) / l, 1), 0), h = 0.5 - Math.cos(f * Math.PI) / 2;
    let b = s + h * (t - s);
    if (c(b, t) && (b = t), e.wrapperEl.scrollTo({
      [r]: b
    }), c(b, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [r]: b
        });
      }), n.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = n.requestAnimationFrame(d);
  };
  d();
}
function ot(i, e) {
  e === void 0 && (e = "");
  const t = Le(), r = [...i.children];
  return t.HTMLSlotElement && i instanceof HTMLSlotElement && r.push(...i.assignedElements()), e ? r.filter((n) => n.matches(e)) : r;
}
function Tf(i, e) {
  const t = [e];
  for (; t.length > 0; ) {
    const r = t.shift();
    if (i === r)
      return !0;
    t.push(...r.children, ...r.shadowRoot ? r.shadowRoot.children : [], ...r.assignedElements ? r.assignedElements() : []);
  }
}
function Ff(i, e) {
  const t = Le();
  let r = e.contains(i);
  return !r && t.HTMLSlotElement && e instanceof HTMLSlotElement && (r = [...e.assignedElements()].includes(i), r || (r = Tf(i, e))), r;
}
function Xi(i) {
  try {
    console.warn(i);
    return;
  } catch {
  }
}
function Qi(i, e) {
  e === void 0 && (e = []);
  const t = document.createElement(i);
  return t.classList.add(...Array.isArray(e) ? e : kf(e)), t;
}
function Nf(i, e) {
  const t = [];
  for (; i.previousElementSibling; ) {
    const r = i.previousElementSibling;
    e ? r.matches(e) && t.push(r) : t.push(r), i = r;
  }
  return t;
}
function Pf(i, e) {
  const t = [];
  for (; i.nextElementSibling; ) {
    const r = i.nextElementSibling;
    e ? r.matches(e) && t.push(r) : t.push(r), i = r;
  }
  return t;
}
function Nt(i, e) {
  return Le().getComputedStyle(i, null).getPropertyValue(e);
}
function en(i) {
  let e = i, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function _u(i, e) {
  const t = [];
  let r = i.parentElement;
  for (; r; )
    e ? r.matches(e) && t.push(r) : t.push(r), r = r.parentElement;
  return t;
}
function ps(i, e, t) {
  const r = Le();
  return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth;
}
function ht(i) {
  return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
}
let Ln;
function Mf() {
  const i = Le(), e = nr();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
  };
}
function Cu() {
  return Ln || (Ln = Mf()), Ln;
}
let Tn;
function Of(i) {
  let {
    userAgent: e
  } = i === void 0 ? {} : i;
  const t = Cu(), r = Le(), n = r.navigator.platform, s = e || r.navigator.userAgent, o = {
    ios: !1,
    android: !1
  }, a = r.screen.width, l = r.screen.height, u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/), f = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = n === "Win32";
  let b = n === "MacIntel";
  const m = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !c && b && t.touch && m.indexOf(`${a}x${l}`) >= 0 && (c = s.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), b = !1), u && !h && (o.os = "android", o.android = !0), (c || f || d) && (o.os = "ios", o.ios = !0), o;
}
function Au(i) {
  return i === void 0 && (i = {}), Tn || (Tn = Of(i)), Tn;
}
let Fn;
function If() {
  const i = Le(), e = Au();
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
function Du() {
  return Fn || (Fn = If()), Fn;
}
function Rf(i) {
  let {
    swiper: e,
    on: t,
    emit: r
  } = i;
  const n = Le();
  let s = null, o = null;
  const a = () => {
    !e || e.destroyed || !e.initialized || (r("beforeResize"), r("resize"));
  }, l = () => {
    !e || e.destroyed || !e.initialized || (s = new ResizeObserver((d) => {
      o = n.requestAnimationFrame(() => {
        const {
          width: f,
          height: h
        } = e;
        let b = f, m = h;
        d.forEach((x) => {
          let {
            contentBoxSize: w,
            contentRect: g,
            target: v
          } = x;
          v && v !== e.el || (b = g ? g.width : (w[0] || w).inlineSize, m = g ? g.height : (w[0] || w).blockSize);
        }), (b !== f || m !== h) && a();
      });
    }), s.observe(e.el));
  }, u = () => {
    o && n.cancelAnimationFrame(o), s && s.unobserve && e.el && (s.unobserve(e.el), s = null);
  }, c = () => {
    !e || e.destroyed || !e.initialized || r("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      l();
      return;
    }
    n.addEventListener("resize", a), n.addEventListener("orientationchange", c);
  }), t("destroy", () => {
    u(), n.removeEventListener("resize", a), n.removeEventListener("orientationchange", c);
  });
}
function zf(i) {
  let {
    swiper: e,
    extendParams: t,
    on: r,
    emit: n
  } = i;
  const s = [], o = Le(), a = function(c, d) {
    d === void 0 && (d = {});
    const f = o.MutationObserver || o.WebkitMutationObserver, h = new f((b) => {
      if (e.__preventObserver__)
        return;
      if (b.length === 1) {
        n("observerUpdate", b[0]);
        return;
      }
      const m = function() {
        n("observerUpdate", b[0]);
      };
      o.requestAnimationFrame ? o.requestAnimationFrame(m) : o.setTimeout(m, 0);
    });
    h.observe(c, {
      attributes: typeof d.attributes > "u" ? !0 : d.attributes,
      childList: e.isElement || (typeof d.childList > "u" ? !0 : d).childList,
      characterData: typeof d.characterData > "u" ? !0 : d.characterData
    }), s.push(h);
  }, l = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const c = _u(e.hostEl);
        for (let d = 0; d < c.length; d += 1)
          a(c[d]);
      }
      a(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), a(e.wrapperEl, {
        attributes: !1
      });
    }
  }, u = () => {
    s.forEach((c) => {
      c.disconnect();
    }), s.splice(0, s.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), r("init", l), r("destroy", u);
}
var qf = {
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
    function n() {
      r.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
        o[a] = arguments[a];
      e.apply(r, o);
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
  emit() {
    const i = this;
    if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
      return i;
    let e, t, r;
    for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
      s[o] = arguments[o];
    return typeof s[0] == "string" || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), r = i) : (e = s[0].events, t = s[0].data, r = s[0].context || i), t.unshift(r), (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
      i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((u) => {
        u.apply(r, [l, ...t]);
      }), i.eventsListeners && i.eventsListeners[l] && i.eventsListeners[l].forEach((u) => {
        u.apply(r, t);
      });
    }), i;
  }
};
function Vf() {
  const i = this;
  let e, t;
  const r = i.el;
  typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = r.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = r.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(Nt(r, "padding-left") || 0, 10) - parseInt(Nt(r, "padding-right") || 0, 10), t = t - parseInt(Nt(r, "padding-top") || 0, 10) - parseInt(Nt(r, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
    width: e,
    height: t,
    size: i.isHorizontal() ? e : t
  }));
}
function $f() {
  const i = this;
  function e(S, E) {
    return parseFloat(S.getPropertyValue(i.getDirectionLabel(E)) || 0);
  }
  const t = i.params, {
    wrapperEl: r,
    slidesEl: n,
    size: s,
    rtlTranslate: o,
    wrongRTL: a
  } = i, l = i.virtual && t.virtual.enabled, u = l ? i.virtual.slides.length : i.slides.length, c = ot(n, `.${i.params.slideClass}, swiper-slide`), d = l ? i.virtual.slides.length : c.length;
  let f = [];
  const h = [], b = [];
  let m = t.slidesOffsetBefore;
  typeof m == "function" && (m = t.slidesOffsetBefore.call(i));
  let x = t.slidesOffsetAfter;
  typeof x == "function" && (x = t.slidesOffsetAfter.call(i));
  const w = i.snapGrid.length, g = i.slidesGrid.length;
  let v = t.spaceBetween, y = -m, _ = 0, A = 0;
  if (typeof s > "u")
    return;
  typeof v == "string" && v.indexOf("%") >= 0 ? v = parseFloat(v.replace("%", "")) / 100 * s : typeof v == "string" && (v = parseFloat(v)), i.virtualSize = -v, c.forEach((S) => {
    o ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = "";
  }), t.centeredSlides && t.cssMode && (Ei(r, "--swiper-centered-offset-before", ""), Ei(r, "--swiper-centered-offset-after", ""));
  const D = t.grid && t.grid.rows > 1 && i.grid;
  D ? i.grid.initSlides(c) : i.grid && i.grid.unsetSlides();
  let k;
  const C = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((S) => typeof t.breakpoints[S].slidesPerView < "u").length > 0;
  for (let S = 0; S < d; S += 1) {
    k = 0;
    let E;
    if (c[S] && (E = c[S]), D && i.grid.updateSlide(S, E, c), !(c[S] && Nt(E, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        C && (c[S].style[i.getDirectionLabel("width")] = "");
        const T = getComputedStyle(E), F = E.style.transform, P = E.style.webkitTransform;
        if (F && (E.style.transform = "none"), P && (E.style.webkitTransform = "none"), t.roundLengths)
          k = i.isHorizontal() ? ps(E, "width", !0) : ps(E, "height", !0);
        else {
          const z = e(T, "width"), N = e(T, "padding-left"), I = e(T, "padding-right"), L = e(T, "margin-left"), B = e(T, "margin-right"), R = T.getPropertyValue("box-sizing");
          if (R && R === "border-box")
            k = z + L + B;
          else {
            const {
              clientWidth: U,
              offsetWidth: j
            } = E;
            k = z + N + I + L + B + (j - U);
          }
        }
        F && (E.style.transform = F), P && (E.style.webkitTransform = P), t.roundLengths && (k = Math.floor(k));
      } else
        k = (s - (t.slidesPerView - 1) * v) / t.slidesPerView, t.roundLengths && (k = Math.floor(k)), c[S] && (c[S].style[i.getDirectionLabel("width")] = `${k}px`);
      c[S] && (c[S].swiperSlideSize = k), b.push(k), t.centeredSlides ? (y = y + k / 2 + _ / 2 + v, _ === 0 && S !== 0 && (y = y - s / 2 - v), S === 0 && (y = y - s / 2 - v), Math.abs(y) < 1 / 1e3 && (y = 0), t.roundLengths && (y = Math.floor(y)), A % t.slidesPerGroup === 0 && f.push(y), h.push(y)) : (t.roundLengths && (y = Math.floor(y)), (A - Math.min(i.params.slidesPerGroupSkip, A)) % i.params.slidesPerGroup === 0 && f.push(y), h.push(y), y = y + k + v), i.virtualSize += k + v, _ = k, A += 1;
    }
  }
  if (i.virtualSize = Math.max(i.virtualSize, s) + x, o && a && (t.effect === "slide" || t.effect === "coverflow") && (r.style.width = `${i.virtualSize + v}px`), t.setWrapperSize && (r.style[i.getDirectionLabel("width")] = `${i.virtualSize + v}px`), D && i.grid.updateWrapperSize(k, f), !t.centeredSlides) {
    const S = [];
    for (let E = 0; E < f.length; E += 1) {
      let T = f[E];
      t.roundLengths && (T = Math.floor(T)), f[E] <= i.virtualSize - s && S.push(T);
    }
    f = S, Math.floor(i.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 && f.push(i.virtualSize - s);
  }
  if (l && t.loop) {
    const S = b[0] + v;
    if (t.slidesPerGroup > 1) {
      const E = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup), T = S * t.slidesPerGroup;
      for (let F = 0; F < E; F += 1)
        f.push(f[f.length - 1] + T);
    }
    for (let E = 0; E < i.virtual.slidesBefore + i.virtual.slidesAfter; E += 1)
      t.slidesPerGroup === 1 && f.push(f[f.length - 1] + S), h.push(h[h.length - 1] + S), i.virtualSize += S;
  }
  if (f.length === 0 && (f = [0]), v !== 0) {
    const S = i.isHorizontal() && o ? "marginLeft" : i.getDirectionLabel("marginRight");
    c.filter((E, T) => !t.cssMode || t.loop ? !0 : T !== c.length - 1).forEach((E) => {
      E.style[S] = `${v}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let S = 0;
    b.forEach((T) => {
      S += T + (v || 0);
    }), S -= v;
    const E = S > s ? S - s : 0;
    f = f.map((T) => T <= 0 ? -m : T > E ? E + x : T);
  }
  if (t.centerInsufficientSlides) {
    let S = 0;
    b.forEach((T) => {
      S += T + (v || 0);
    }), S -= v;
    const E = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (S + E < s) {
      const T = (s - S - E) / 2;
      f.forEach((F, P) => {
        f[P] = F - T;
      }), h.forEach((F, P) => {
        h[P] = F + T;
      });
    }
  }
  if (Object.assign(i, {
    slides: c,
    snapGrid: f,
    slidesGrid: h,
    slidesSizesGrid: b
  }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    Ei(r, "--swiper-centered-offset-before", `${-f[0]}px`), Ei(r, "--swiper-centered-offset-after", `${i.size / 2 - b[b.length - 1] / 2}px`);
    const S = -i.snapGrid[0], E = -i.slidesGrid[0];
    i.snapGrid = i.snapGrid.map((T) => T + S), i.slidesGrid = i.slidesGrid.map((T) => T + E);
  }
  if (d !== u && i.emit("slidesLengthChange"), f.length !== w && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), h.length !== g && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const S = `${t.containerModifierClass}backface-hidden`, E = i.el.classList.contains(S);
    d <= t.maxBackfaceHiddenSlides ? E || i.el.classList.add(S) : E && i.el.classList.remove(S);
  }
}
function jf(i) {
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
function Uf() {
  const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
  for (let r = 0; r < e.length; r += 1)
    e[r].swiperSlideOffset = (i.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) - t - i.cssOverflowAdjustment();
}
const va = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function Hf(i) {
  i === void 0 && (i = this && this.translate || 0);
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
    const d = (o + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + a), f = (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + a), h = -(o - c), b = h + e.slidesSizesGrid[l], m = h >= 0 && h <= e.size - e.slidesSizesGrid[l], x = h >= 0 && h < e.size - 1 || b > 1 && b <= e.size || h <= 0 && b >= e.size;
    x && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)), va(u, x, t.slideVisibleClass), va(u, m, t.slideFullyVisibleClass), u.progress = n ? -d : d, u.originalProgress = n ? -f : f;
  }
}
function Gf(i) {
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
    const c = e.getSlideIndexByData(0), d = e.getSlideIndexByData(e.slides.length - 1), f = e.slidesGrid[c], h = e.slidesGrid[d], b = e.slidesGrid[e.slidesGrid.length - 1], m = Math.abs(i);
    m >= f ? a = (m - f) / b : a = (m + b - h) / b, a > 1 && (a -= 1);
  }
  Object.assign(e, {
    progress: n,
    progressLoop: a,
    isBeginning: s,
    isEnd: o
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), s && !l && e.emit("reachBeginning toEdge"), o && !u && e.emit("reachEnd toEdge"), (l && !s || u && !o) && e.emit("fromEdge"), e.emit("progress", n);
}
const Nn = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function Yf() {
  const i = this, {
    slides: e,
    params: t,
    slidesEl: r,
    activeIndex: n
  } = i, s = i.virtual && t.virtual.enabled, o = i.grid && t.grid && t.grid.rows > 1, a = (d) => ot(r, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
  let l, u, c;
  if (s)
    if (t.loop) {
      let d = n - i.virtual.slidesBefore;
      d < 0 && (d = i.virtual.slides.length + d), d >= i.virtual.slides.length && (d -= i.virtual.slides.length), l = a(`[data-swiper-slide-index="${d}"]`);
    } else
      l = a(`[data-swiper-slide-index="${n}"]`);
  else
    o ? (l = e.find((d) => d.column === n), c = e.find((d) => d.column === n + 1), u = e.find((d) => d.column === n - 1)) : l = e[n];
  l && (o || (c = Pf(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c && (c = e[0]), u = Nf(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !u === 0 && (u = e[e.length - 1]))), e.forEach((d) => {
    Nn(d, d === l, t.slideActiveClass), Nn(d, d === c, t.slideNextClass), Nn(d, d === u, t.slidePrevClass);
  }), i.emitSlidesClasses();
}
const Mi = (i, e) => {
  if (!i || i.destroyed || !i.params)
    return;
  const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, r = e.closest(t());
  if (r) {
    let n = r.querySelector(`.${i.params.lazyPreloaderClass}`);
    !n && i.isElement && (r.shadowRoot ? n = r.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      r.shadowRoot && (n = r.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), n && n.remove());
    })), n && n.remove();
  }
}, Pn = (i, e) => {
  if (!i.slides[e])
    return;
  const t = i.slides[e].querySelector('[loading="lazy"]');
  t && t.removeAttribute("loading");
}, fs = (i) => {
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
      a.includes(l.column) && Pn(i, u);
    });
    return;
  }
  const s = n + r - 1;
  if (i.params.rewind || i.params.loop)
    for (let o = n - e; o <= s + e; o += 1) {
      const a = (o % t + t) % t;
      (a < n || a > s) && Pn(i, a);
    }
  else
    for (let o = Math.max(n - e, 0); o <= Math.min(s + e, t - 1); o += 1)
      o !== n && (o > s || o < n) && Pn(i, o);
};
function Wf(i) {
  const {
    slidesGrid: e,
    params: t
  } = i, r = i.rtlTranslate ? i.translate : -i.translate;
  let n;
  for (let s = 0; s < e.length; s += 1)
    typeof e[s + 1] < "u" ? r >= e[s] && r < e[s + 1] - (e[s + 1] - e[s]) / 2 ? n = s : r >= e[s] && r < e[s + 1] && (n = s + 1) : r >= e[s] && (n = s);
  return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function Kf(i) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: r,
    params: n,
    activeIndex: s,
    realIndex: o,
    snapIndex: a
  } = e;
  let l = i, u;
  const c = (h) => {
    let b = h - e.virtual.slidesBefore;
    return b < 0 && (b = e.virtual.slides.length + b), b >= e.virtual.slides.length && (b -= e.virtual.slides.length), b;
  };
  if (typeof l > "u" && (l = Wf(e)), r.indexOf(t) >= 0)
    u = r.indexOf(t);
  else {
    const h = Math.min(n.slidesPerGroupSkip, l);
    u = h + Math.floor((l - h) / n.slidesPerGroup);
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
  let f;
  if (e.virtual && n.virtual.enabled && n.loop)
    f = c(l);
  else if (d) {
    const h = e.slides.find((m) => m.column === l);
    let b = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(b) && (b = Math.max(e.slides.indexOf(h), 0)), f = Math.floor(b / n.grid.rows);
  } else if (e.slides[l]) {
    const h = e.slides[l].getAttribute("data-swiper-slide-index");
    h ? f = parseInt(h, 10) : f = l;
  } else
    f = l;
  Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: f,
    previousIndex: s,
    activeIndex: l
  }), e.initialized && fs(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== f && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Zf(i, e) {
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
var Jf = {
  updateSize: Vf,
  updateSlides: $f,
  updateAutoHeight: jf,
  updateSlidesOffset: Uf,
  updateSlidesProgress: Hf,
  updateProgress: Gf,
  updateSlidesClasses: Yf,
  updateActiveIndex: Kf,
  updateClickedSlide: Zf
};
function Xf(i) {
  i === void 0 && (i = this.isHorizontal() ? "x" : "y");
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
  let o = Bf(s, i);
  return o += e.cssOverflowAdjustment(), r && (o = -o), o || 0;
}
function Qf(i, e) {
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
function e1() {
  return -this.snapGrid[0];
}
function t1() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function r1(i, e, t, r, n) {
  i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = !0);
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
        return yu({
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
  return e === 0 ? (s.setTransition(0), s.setTranslate(c), t && (s.emit("beforeTransitionStart", e, n), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(c), t && (s.emit("beforeTransitionStart", e, n), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(f) {
    !s || s.destroyed || f.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, t && s.emit("transitionEnd"));
  }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0;
}
var i1 = {
  getTranslate: Xf,
  setTranslate: Qf,
  minTranslate: e1,
  maxTranslate: t1,
  translateTo: r1
};
function n1(i, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e);
}
function ku(i) {
  let {
    swiper: e,
    runCallbacks: t,
    direction: r,
    step: n
  } = i;
  const {
    activeIndex: s,
    previousIndex: o
  } = e;
  let a = r;
  if (a || (s > o ? a = "next" : s < o ? a = "prev" : a = "reset"), e.emit(`transition${n}`), t && s !== o) {
    if (a === "reset") {
      e.emit(`slideResetTransition${n}`);
      return;
    }
    e.emit(`slideChangeTransition${n}`), a === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`);
  }
}
function s1(i, e) {
  i === void 0 && (i = !0);
  const t = this, {
    params: r
  } = t;
  r.cssMode || (r.autoHeight && t.updateAutoHeight(), ku({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "Start"
  }));
}
function o1(i, e) {
  i === void 0 && (i = !0);
  const t = this, {
    params: r
  } = t;
  t.animating = !1, !r.cssMode && (t.setTransition(0), ku({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "End"
  }));
}
var a1 = {
  setTransition: n1,
  transitionStart: s1,
  transitionEnd: o1
};
function l1(i, e, t, r, n) {
  i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
  const s = this;
  let o = i;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: h,
    enabled: b
  } = s;
  if (!b && !r && !n || s.destroyed || s.animating && a.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = s.params.speed);
  const m = Math.min(s.params.slidesPerGroupSkip, o);
  let x = m + Math.floor((o - m) / s.params.slidesPerGroup);
  x >= l.length && (x = l.length - 1);
  const w = -l[x];
  if (a.normalizeSlideIndex)
    for (let D = 0; D < u.length; D += 1) {
      const k = -Math.floor(w * 100), C = Math.floor(u[D] * 100), S = Math.floor(u[D + 1] * 100);
      typeof u[D + 1] < "u" ? k >= C && k < S - (S - C) / 2 ? o = D : k >= C && k < S && (o = D + 1) : k >= C && (o = D);
    }
  if (s.initialized && o !== d && (!s.allowSlideNext && (f ? w > s.translate && w > s.minTranslate() : w < s.translate && w < s.minTranslate()) || !s.allowSlidePrev && w > s.translate && w > s.maxTranslate() && (d || 0) !== o))
    return !1;
  o !== (c || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(w);
  let g;
  o > d ? g = "next" : o < d ? g = "prev" : g = "reset";
  const v = s.virtual && s.params.virtual.enabled;
  if (!(v && n) && (f && -w === s.translate || !f && w === s.translate))
    return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), a.effect !== "slide" && s.setTranslate(w), g !== "reset" && (s.transitionStart(t, g), s.transitionEnd(t, g)), !1;
  if (a.cssMode) {
    const D = s.isHorizontal(), k = f ? w : -w;
    if (e === 0)
      v && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), v && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        h[D ? "scrollLeft" : "scrollTop"] = k;
      })) : h[D ? "scrollLeft" : "scrollTop"] = k, v && requestAnimationFrame(() => {
        s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1;
      });
    else {
      if (!s.support.smoothScroll)
        return yu({
          swiper: s,
          targetPosition: k,
          side: D ? "left" : "top"
        }), !0;
      h.scrollTo({
        [D ? "left" : "top"]: k,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const A = Du().isSafari;
  return v && !n && A && s.isElement && s.virtual.update(!1, !1, o), s.setTransition(e), s.setTranslate(w), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, r), s.transitionStart(t, g), e === 0 ? s.transitionEnd(t, g) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(k) {
    !s || s.destroyed || k.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(t, g));
  }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0;
}
function u1(i, e, t, r) {
  i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
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
        const f = o * n.params.grid.rows;
        a = n.slides.find((h) => h.getAttribute("data-swiper-slide-index") * 1 === f).column;
      } else
        a = n.getSlideIndexByData(o);
      const l = s ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, {
        centeredSlides: u
      } = n.params;
      let c = n.params.slidesPerView;
      c === "auto" ? c = n.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(n.params.slidesPerView, 10)), u && c % 2 === 0 && (c = c + 1));
      let d = l - a < c;
      if (u && (d = d || a < Math.ceil(c / 2)), r && u && n.params.slidesPerView !== "auto" && !s && (d = !1), d) {
        const f = u ? a < n.activeIndex ? "prev" : "next" : a - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? a + 1 : a - l + 1,
          slideRealIndex: f === "next" ? n.realIndex : void 0
        });
      }
      if (s) {
        const f = o * n.params.grid.rows;
        o = n.slides.find((h) => h.getAttribute("data-swiper-slide-index") * 1 === f).column;
      } else
        o = n.getSlideIndexByData(o);
    }
  return requestAnimationFrame(() => {
    n.slideTo(o, e, t, r);
  }), n;
}
function c1(i, e, t) {
  e === void 0 && (e = !0);
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
function d1(i, e, t) {
  e === void 0 && (e = !0);
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
  function f(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const h = f(d), b = s.map((g) => f(g)), m = n.freeMode && n.freeMode.enabled;
  let x = s[b.indexOf(h) - 1];
  if (typeof x > "u" && (n.cssMode || m)) {
    let g;
    s.forEach((v, y) => {
      h >= v && (g = y);
    }), typeof g < "u" && (x = m ? s[g] : s[g > 0 ? g - 1 : g]);
  }
  let w = 0;
  if (typeof x < "u" && (w = o.indexOf(x), w < 0 && (w = r.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (w = w - r.slidesPerViewDynamic("previous", !0) + 1, w = Math.max(w, 0))), n.rewind && r.isBeginning) {
    const g = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
    return r.slideTo(g, i, e, t);
  } else if (n.loop && r.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      r.slideTo(w, i, e, t);
    }), !0;
  return r.slideTo(w, i, e, t);
}
function p1(i, e, t) {
  e === void 0 && (e = !0);
  const r = this;
  if (!r.destroyed)
    return typeof i > "u" && (i = r.params.speed), r.slideTo(r.activeIndex, i, e, t);
}
function f1(i, e, t, r) {
  e === void 0 && (e = !0), r === void 0 && (r = 0.5);
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
function h1() {
  const i = this;
  if (i.destroyed)
    return;
  const {
    params: e,
    slidesEl: t
  } = i, r = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
  let n = i.clickedIndex, s;
  const o = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (i.animating)
      return;
    s = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < i.loopedSlides - r / 2 || n > i.slides.length - i.loopedSlides + r / 2 ? (i.loopFix(), n = i.getSlideIndex(ot(t, `${o}[data-swiper-slide-index="${s}"]`)[0]), ds(() => {
      i.slideTo(n);
    })) : i.slideTo(n) : n > i.slides.length - r ? (i.loopFix(), n = i.getSlideIndex(ot(t, `${o}[data-swiper-slide-index="${s}"]`)[0]), ds(() => {
      i.slideTo(n);
    })) : i.slideTo(n);
  } else
    i.slideTo(n);
}
var g1 = {
  slideTo: l1,
  slideToLoop: u1,
  slideNext: c1,
  slidePrev: d1,
  slideReset: p1,
  slideToClosest: f1,
  slideToClickedSlide: h1
};
function m1(i, e) {
  const t = this, {
    params: r,
    slidesEl: n
  } = t;
  if (!r.loop || t.virtual && t.params.virtual.enabled)
    return;
  const s = () => {
    ot(n, `.${r.slideClass}, swiper-slide`).forEach((f, h) => {
      f.setAttribute("data-swiper-slide-index", h);
    });
  }, o = t.grid && r.grid && r.grid.rows > 1, a = r.slidesPerGroup * (o ? r.grid.rows : 1), l = t.slides.length % a !== 0, u = o && t.slides.length % r.grid.rows !== 0, c = (d) => {
    for (let f = 0; f < d; f += 1) {
      const h = t.isElement ? Qi("swiper-slide", [r.slideBlankClass]) : Qi("div", [r.slideClass, r.slideBlankClass]);
      t.slidesEl.append(h);
    }
  };
  if (l) {
    if (r.loopAddBlankSlides) {
      const d = a - t.slides.length % a;
      c(d), t.recalcSlides(), t.updateSlides();
    } else
      Xi("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else if (u) {
    if (r.loopAddBlankSlides) {
      const d = r.grid.rows - t.slides.length % r.grid.rows;
      c(d), t.recalcSlides(), t.updateSlides();
    } else
      Xi("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else
    s();
  t.loopFix({
    slideRealIndex: i,
    direction: r.centeredSlides ? void 0 : "next",
    initial: e
  });
}
function b1(i) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: r,
    setTranslate: n,
    activeSlideIndex: s,
    initial: o,
    byController: a,
    byMousewheel: l
  } = i === void 0 ? {} : i;
  const u = this;
  if (!u.params.loop)
    return;
  u.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: d,
    allowSlideNext: f,
    slidesEl: h,
    params: b
  } = u, {
    centeredSlides: m,
    initialSlide: x
  } = b;
  if (u.allowSlidePrev = !0, u.allowSlideNext = !0, u.virtual && b.virtual.enabled) {
    t && (!b.centeredSlides && u.snapIndex === 0 ? u.slideTo(u.virtual.slides.length, 0, !1, !0) : b.centeredSlides && u.snapIndex < b.slidesPerView ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0) : u.snapIndex === u.snapGrid.length - 1 && u.slideTo(u.virtual.slidesBefore, 0, !1, !0)), u.allowSlidePrev = d, u.allowSlideNext = f, u.emit("loopFix");
    return;
  }
  let w = b.slidesPerView;
  w === "auto" ? w = u.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(b.slidesPerView, 10)), m && w % 2 === 0 && (w = w + 1));
  const g = b.slidesPerGroupAuto ? w : b.slidesPerGroup;
  let v = g;
  v % g !== 0 && (v += g - v % g), v += b.loopAdditionalSlides, u.loopedSlides = v;
  const y = u.grid && b.grid && b.grid.rows > 1;
  c.length < w + v || u.params.effect === "cards" && c.length < w + v * 2 ? Xi("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : y && b.grid.fill === "row" && Xi("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const _ = [], A = [], D = y ? Math.ceil(c.length / b.grid.rows) : c.length, k = o && D - x < w && !m;
  let C = k ? x : u.activeIndex;
  typeof s > "u" ? s = u.getSlideIndex(c.find((N) => N.classList.contains(b.slideActiveClass))) : C = s;
  const S = r === "next" || !r, E = r === "prev" || !r;
  let T = 0, F = 0;
  const z = (y ? c[s].column : s) + (m && typeof n > "u" ? -w / 2 + 0.5 : 0);
  if (z < v) {
    T = Math.max(v - z, g);
    for (let N = 0; N < v - z; N += 1) {
      const I = N - Math.floor(N / D) * D;
      if (y) {
        const L = D - I - 1;
        for (let B = c.length - 1; B >= 0; B -= 1)
          c[B].column === L && _.push(B);
      } else
        _.push(D - I - 1);
    }
  } else if (z + w > D - v) {
    F = Math.max(z - (D - v * 2), g), k && (F = Math.max(F, w - D + x + 1));
    for (let N = 0; N < F; N += 1) {
      const I = N - Math.floor(N / D) * D;
      y ? c.forEach((L, B) => {
        L.column === I && A.push(B);
      }) : A.push(I);
    }
  }
  if (u.__preventObserver__ = !0, requestAnimationFrame(() => {
    u.__preventObserver__ = !1;
  }), u.params.effect === "cards" && c.length < w + v * 2 && (A.includes(s) && A.splice(A.indexOf(s), 1), _.includes(s) && _.splice(_.indexOf(s), 1)), E && _.forEach((N) => {
    c[N].swiperLoopMoveDOM = !0, h.prepend(c[N]), c[N].swiperLoopMoveDOM = !1;
  }), S && A.forEach((N) => {
    c[N].swiperLoopMoveDOM = !0, h.append(c[N]), c[N].swiperLoopMoveDOM = !1;
  }), u.recalcSlides(), b.slidesPerView === "auto" ? u.updateSlides() : y && (_.length > 0 && E || A.length > 0 && S) && u.slides.forEach((N, I) => {
    u.grid.updateSlide(I, N, u.slides);
  }), b.watchSlidesProgress && u.updateSlidesOffset(), t) {
    if (_.length > 0 && E) {
      if (typeof e > "u") {
        const N = u.slidesGrid[C], L = u.slidesGrid[C + T] - N;
        l ? u.setTranslate(u.translate - L) : (u.slideTo(C + Math.ceil(T), 0, !1, !0), n && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - L, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - L));
      } else if (n) {
        const N = y ? _.length / b.grid.rows : _.length;
        u.slideTo(u.activeIndex + N, 0, !1, !0), u.touchEventsData.currentTranslate = u.translate;
      }
    } else if (A.length > 0 && S)
      if (typeof e > "u") {
        const N = u.slidesGrid[C], L = u.slidesGrid[C - F] - N;
        l ? u.setTranslate(u.translate - L) : (u.slideTo(C - F, 0, !1, !0), n && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - L, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - L));
      } else {
        const N = y ? A.length / b.grid.rows : A.length;
        u.slideTo(u.activeIndex - N, 0, !1, !0);
      }
  }
  if (u.allowSlidePrev = d, u.allowSlideNext = f, u.controller && u.controller.control && !a) {
    const N = {
      slideRealIndex: e,
      direction: r,
      setTranslate: n,
      activeSlideIndex: s,
      byController: !0
    };
    Array.isArray(u.controller.control) ? u.controller.control.forEach((I) => {
      !I.destroyed && I.params.loop && I.loopFix({
        ...N,
        slideTo: I.params.slidesPerView === b.slidesPerView ? t : !1
      });
    }) : u.controller.control instanceof u.constructor && u.controller.control.params.loop && u.controller.control.loopFix({
      ...N,
      slideTo: u.controller.control.params.slidesPerView === b.slidesPerView ? t : !1
    });
  }
  u.emit("loopFix");
}
function v1() {
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
var w1 = {
  loopCreate: m1,
  loopFix: b1,
  loopDestroy: v1
};
function x1(i) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function y1() {
  const i = this;
  i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
    i.__preventObserver__ = !1;
  }));
}
var _1 = {
  setGrabCursor: x1,
  unsetGrabCursor: y1
};
function C1(i, e) {
  e === void 0 && (e = this);
  function t(r) {
    if (!r || r === nr() || r === Le())
      return null;
    r.assignedSlot && (r = r.assignedSlot);
    const n = r.closest(i);
    return !n && !r.getRootNode ? null : n || t(r.getRootNode().host);
  }
  return t(e);
}
function wa(i, e, t) {
  const r = Le(), {
    params: n
  } = i, s = n.edgeSwipeDetection, o = n.edgeSwipeThreshold;
  return s && (t <= o || t >= r.innerWidth - o) ? s === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function A1(i) {
  const e = this, t = nr();
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
    wa(e, r, r.targetTouches[0].pageX);
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
  if (s.touchEventsTarget === "wrapper" && !Ff(l, e.wrapperEl) || "which" in r && r.which === 3 || "button" in r && r.button > 0 || n.isTouched && n.isMoved)
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "", c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (l = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, f = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (f ? C1(d, l) : l.closest(d))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler))
    return;
  o.currentX = r.pageX, o.currentY = r.pageY;
  const h = o.currentX, b = o.currentY;
  if (!wa(e, r, h))
    return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = h, o.startY = b, n.touchStartTime = Ji(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (n.allowThresholdMove = !1);
  let m = !0;
  l.matches(n.focusableElements) && (m = !1, l.nodeName === "SELECT" && (n.isTouched = !1)), t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== l && (r.pointerType === "mouse" || r.pointerType !== "mouse" && !l.matches(n.focusableElements)) && t.activeElement.blur();
  const x = m && e.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || x) && !l.isContentEditable && r.preventDefault(), s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", r);
}
function D1(i) {
  const e = nr(), t = this, r = t.touchEventsData, {
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
    }), r.touchStartTime = Ji());
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
  const f = s.currentX - s.startX, h = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(f ** 2 + h ** 2) < t.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let A;
    t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : f * f + h * h >= 25 && (A = Math.atan2(Math.abs(h), Math.abs(f)) * 180 / Math.PI, r.isScrolling = t.isHorizontal() ? A > n.touchAngle : 90 - A > n.touchAngle);
  }
  if (r.isScrolling && t.emit("touchMoveOpposite", l), typeof r.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (r.startMoving = !0), r.isScrolling || l.type === "touchmove" && r.preventTouchMoveFromPointerMove) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving)
    return;
  t.allowClick = !1, !n.cssMode && l.cancelable && l.preventDefault(), n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
  let b = t.isHorizontal() ? f : h, m = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  n.oneWayMovement && (b = Math.abs(b) * (o ? 1 : -1), m = Math.abs(m) * (o ? 1 : -1)), s.diff = b, b *= n.touchRatio, o && (b = -b, m = -m);
  const x = t.touchesDirection;
  t.swipeDirection = b > 0 ? "prev" : "next", t.touchesDirection = m > 0 ? "prev" : "next";
  const w = t.params.loop && !n.cssMode, g = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!r.isMoved) {
    if (w && g && t.loopFix({
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
  let v;
  if ((/* @__PURE__ */ new Date()).getTime(), n._loopSwapReset !== !1 && r.isMoved && r.allowThresholdMove && x !== t.touchesDirection && w && g && Math.abs(b) >= 1) {
    Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: r.currentTranslate
    }), r.loopSwapReset = !0, r.startTranslate = r.currentTranslate;
    return;
  }
  t.emit("sliderMove", l), r.isMoved = !0, r.currentTranslate = b + r.startTranslate;
  let y = !0, _ = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (_ = 0), b > 0 ? (w && g && !v && r.allowThresholdMove && r.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (n.slidesPerView !== "auto" && t.slides.length - n.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), r.currentTranslate > t.minTranslate() && (y = !1, n.resistance && (r.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + r.startTranslate + b) ** _))) : b < 0 && (w && g && !v && r.allowThresholdMove && r.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (n.slidesPerView !== "auto" && t.slides.length - n.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
  }), r.currentTranslate < t.maxTranslate() && (y = !1, n.resistance && (r.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - r.startTranslate - b) ** _))), y && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (r.currentTranslate = r.startTranslate), n.threshold > 0)
    if (Math.abs(b) > n.threshold || r.allowThresholdMove) {
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
function k1(i) {
  const e = this, t = e.touchEventsData;
  let r = i;
  r.originalEvent && (r = r.originalEvent);
  let n;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (n = [...r.changedTouches].find((_) => _.identifier === t.touchId), !n || n.identifier !== t.touchId)
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
  const d = Ji(), f = d - t.touchStartTime;
  if (e.allowClick) {
    const _ = r.path || r.composedPath && r.composedPath();
    e.updateClickedSlide(_ && _[0] || r.target, _), e.emit("tap click", r), f < 300 && d - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", r);
  }
  if (t.lastClickTime = Ji(), ds(() => {
    e.destroyed || (e.allowClick = !0);
  }), !t.isTouched || !t.isMoved || !e.swipeDirection || a.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let h;
  if (o.followFinger ? h = l ? e.translate : -e.translate : h = -t.currentTranslate, o.cssMode)
    return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: h
    });
    return;
  }
  const b = h >= -e.maxTranslate() && !e.params.loop;
  let m = 0, x = e.slidesSizesGrid[0];
  for (let _ = 0; _ < u.length; _ += _ < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const A = _ < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[_ + A] < "u" ? (b || h >= u[_] && h < u[_ + A]) && (m = _, x = u[_ + A] - u[_]) : (b || h >= u[_]) && (m = _, x = u[u.length - 1] - u[u.length - 2]);
  }
  let w = null, g = null;
  o.rewind && (e.isBeginning ? g = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (w = 0));
  const v = (h - u[m]) / x, y = m < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (f > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (v >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? w : m + y) : e.slideTo(m)), e.swipeDirection === "prev" && (v > 1 - o.longSwipesRatio ? e.slideTo(m + y) : g !== null && v < 0 && Math.abs(v) > o.longSwipesRatio ? e.slideTo(g) : e.slideTo(m));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (r.target === e.navigation.nextEl || r.target === e.navigation.prevEl) ? r.target === e.navigation.nextEl ? e.slideTo(m + y) : e.slideTo(m) : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : m + y), e.swipeDirection === "prev" && e.slideTo(g !== null ? g : m));
  }
}
function xa() {
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
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !a ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !o ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
    i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
  }, 500)), i.allowSlidePrev = n, i.allowSlideNext = r, i.params.watchOverflow && s !== i.snapGrid && i.checkOverflow();
}
function S1(i) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
}
function E1() {
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
function B1(i) {
  const e = this;
  Mi(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function L1() {
  const i = this;
  i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
}
const Su = (i, e) => {
  const t = nr(), {
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
  }), (r.preventClicks || r.preventClicksPropagation) && n[l]("click", i.onClick, !0), r.cssMode && s[l]("scroll", i.onScroll), r.updateOnWindowResize ? i[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", xa, !0) : i[u]("observerUpdate", xa, !0), n[l]("load", i.onLoad, {
    capture: !0
  }));
};
function T1() {
  const i = this, {
    params: e
  } = i;
  i.onTouchStart = A1.bind(i), i.onTouchMove = D1.bind(i), i.onTouchEnd = k1.bind(i), i.onDocumentTouchStart = L1.bind(i), e.cssMode && (i.onScroll = E1.bind(i)), i.onClick = S1.bind(i), i.onLoad = B1.bind(i), Su(i, "on");
}
function F1() {
  Su(this, "off");
}
var N1 = {
  attachEvents: T1,
  detachEvents: F1
};
const ya = (i, e) => i.grid && e.grid && e.grid.rows > 1;
function P1() {
  const i = this, {
    realIndex: e,
    initialized: t,
    params: r,
    el: n
  } = i, s = r.breakpoints;
  if (!s || s && Object.keys(s).length === 0)
    return;
  const o = nr(), a = r.breakpointsBase === "window" || !r.breakpointsBase ? r.breakpointsBase : "container", l = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? i.el : o.querySelector(r.breakpointsBase), u = i.getBreakpoint(s, a, l);
  if (!u || i.currentBreakpoint === u)
    return;
  const d = (u in s ? s[u] : void 0) || i.originalParams, f = ya(i, r), h = ya(i, d), b = i.params.grabCursor, m = d.grabCursor, x = r.enabled;
  f && !h ? (n.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), i.emitContainerClasses()) : !f && h && (n.classList.add(`${r.containerModifierClass}grid`), (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && r.grid.fill === "column") && n.classList.add(`${r.containerModifierClass}grid-column`), i.emitContainerClasses()), b && !m ? i.unsetGrabCursor() : !b && m && i.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((A) => {
    if (typeof d[A] > "u")
      return;
    const D = r[A] && r[A].enabled, k = d[A] && d[A].enabled;
    D && !k && i[A].disable(), !D && k && i[A].enable();
  });
  const w = d.direction && d.direction !== r.direction, g = r.loop && (d.slidesPerView !== r.slidesPerView || w), v = r.loop;
  w && t && i.changeDirection(), ze(i.params, d);
  const y = i.params.enabled, _ = i.params.loop;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev
  }), x && !y ? i.disable() : !x && y && i.enable(), i.currentBreakpoint = u, i.emit("_beforeBreakpoint", d), t && (g ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !v && _ ? (i.loopCreate(e), i.updateSlides()) : v && !_ && i.loopDestroy()), i.emit("breakpoint", d);
}
function M1(i, e, t) {
  if (e === void 0 && (e = "window"), !i || e === "container" && !t)
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
var O1 = {
  setBreakpoint: P1,
  getBreakpoint: M1
};
function I1(i, e) {
  const t = [];
  return i.forEach((r) => {
    typeof r == "object" ? Object.keys(r).forEach((n) => {
      r[n] && t.push(e + n);
    }) : typeof r == "string" && t.push(e + r);
  }), t;
}
function R1() {
  const i = this, {
    classNames: e,
    params: t,
    rtl: r,
    el: n,
    device: s
  } = i, o = I1(["initialized", t.direction, {
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
function z1() {
  const i = this, {
    el: e,
    classNames: t
  } = i;
  !e || typeof e == "string" || (e.classList.remove(...t), i.emitContainerClasses());
}
var q1 = {
  addClasses: R1,
  removeClasses: z1
};
function V1() {
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
var $1 = {
  checkOverflow: V1
}, hs = {
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
function j1(i, e) {
  return function(r) {
    r === void 0 && (r = {});
    const n = Object.keys(r)[0], s = r[n];
    if (typeof s != "object" || s === null) {
      ze(e, r);
      return;
    }
    if (i[n] === !0 && (i[n] = {
      enabled: !0
    }), n === "navigation" && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0), !(n in i && "enabled" in s)) {
      ze(e, r);
      return;
    }
    typeof i[n] == "object" && !("enabled" in i[n]) && (i[n].enabled = !0), i[n] || (i[n] = {
      enabled: !1
    }), ze(e, r);
  };
}
const Mn = {
  eventsEmitter: qf,
  update: Jf,
  translate: i1,
  transition: a1,
  slide: g1,
  loop: w1,
  grabCursor: _1,
  events: N1,
  breakpoints: O1,
  checkOverflow: $1,
  classes: q1
}, On = {};
let Xs = class gt {
  constructor() {
    let e, t;
    for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++)
      n[s] = arguments[s];
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? t = n[0] : [e, t] = n, t || (t = {}), t = ze({}, t), e && !t.el && (t.el = e);
    const o = nr();
    if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
      const c = [];
      return o.querySelectorAll(t.el).forEach((d) => {
        const f = ze({}, t, {
          el: d
        });
        c.push(new gt(f));
      }), c;
    }
    const a = this;
    a.__swiper__ = !0, a.support = Cu(), a.device = Au({
      userAgent: t.userAgent
    }), a.browser = Du(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
    const l = {};
    a.modules.forEach((c) => {
      c({
        params: t,
        swiper: a,
        extendParams: j1(t, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a)
      });
    });
    const u = ze({}, hs, l);
    return a.params = ze({}, u, On, t), a.originalParams = ze({}, a.params), a.passedParams = ze({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((c) => {
      a.on(c, a.params.on[c]);
    }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
      enabled: a.params.enabled,
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
        return a.params.direction === "horizontal";
      },
      isVertical() {
        return a.params.direction === "vertical";
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
      allowSlideNext: a.params.allowSlideNext,
      allowSlidePrev: a.params.allowSlidePrev,
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
        focusableElements: a.params.focusableElements,
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
      allowTouchMove: a.params.allowTouchMove,
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
    }), a.emit("_swiper"), a.params.init && a.init(), a;
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
    } = this, n = ot(t, `.${r.slideClass}, swiper-slide`), s = en(n[0]);
    return en(e) - s;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.find((t) => t.getAttribute("data-swiper-slide-index") * 1 === e));
  }
  recalcSlides() {
    const e = this, {
      slidesEl: t,
      params: r
    } = e;
    e.slides = ot(t, `.${r.slideClass}, swiper-slide`);
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
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
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
      let d = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0, f;
      for (let h = u + 1; h < s.length; h += 1)
        s[h] && !f && (d += Math.ceil(s[h].swiperSlideSize), c += 1, d > l && (f = !0));
      for (let h = u - 1; h >= 0; h -= 1)
        s[h] && !f && (d += s[h].swiperSlideSize, c += 1, d > l && (f = !0));
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
      o.complete && Mi(e, o);
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
  changeDirection(e, t) {
    t === void 0 && (t = !0);
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
    let o = (() => r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(n()) : ot(r, n())[0])();
    return !o && t.params.createElements && (o = Qi("div", t.params.wrapperClass), r.append(o), ot(r, `.${t.params.slideClass}`).forEach((a) => {
      o.append(a);
    })), Object.assign(t, {
      el: r,
      wrapperEl: o,
      slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
      hostEl: t.isElement ? r.parentNode.host : r,
      mounted: !0,
      // RTL
      rtl: r.dir.toLowerCase() === "rtl" || Nt(r, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || Nt(r, "direction") === "rtl"),
      wrongRTL: Nt(o, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1)
      return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
    const n = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((s) => {
      s.complete ? Mi(t, s) : s.addEventListener("load", (o) => {
        Mi(t, o.target);
      });
    }), fs(t), t.initialized = !0, fs(t), t.emit("init"), t.emit("afterInit"), t;
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
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
    }), e !== !1 && (r.el && typeof r.el != "string" && (r.el.swiper = null), Sf(r)), r.destroyed = !0), null;
  }
  static extendDefaults(e) {
    ze(On, e);
  }
  static get extendedDefaults() {
    return On;
  }
  static get defaults() {
    return hs;
  }
  static installModule(e) {
    gt.prototype.__modules__ || (gt.prototype.__modules__ = []);
    const t = gt.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => gt.installModule(t)), gt) : (gt.installModule(e), gt);
  }
};
Object.keys(Mn).forEach((i) => {
  Object.keys(Mn[i]).forEach((e) => {
    Xs.prototype[e] = Mn[i][e];
  });
});
Xs.use([Rf, zf]);
const Eu = [
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
function rr(i) {
  return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object" && !i.__swiper__;
}
function br(i, e) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((r) => t.indexOf(r) < 0).forEach((r) => {
    typeof i[r] > "u" ? i[r] = e[r] : rr(e[r]) && rr(i[r]) && Object.keys(e[r]).length > 0 ? e[r].__swiper__ ? i[r] = e[r] : br(i[r], e[r]) : i[r] = e[r];
  });
}
function Bu(i) {
  return i === void 0 && (i = {}), i.navigation && typeof i.navigation.nextEl > "u" && typeof i.navigation.prevEl > "u";
}
function Lu(i) {
  return i === void 0 && (i = {}), i.pagination && typeof i.pagination.el > "u";
}
function Tu(i) {
  return i === void 0 && (i = {}), i.scrollbar && typeof i.scrollbar.el > "u";
}
function Fu(i) {
  i === void 0 && (i = "");
  const e = i.split(" ").map((r) => r.trim()).filter((r) => !!r), t = [];
  return e.forEach((r) => {
    t.indexOf(r) < 0 && t.push(r);
  }), t.join(" ");
}
function U1(i) {
  return i === void 0 && (i = ""), i ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper";
}
function H1(i) {
  let {
    swiper: e,
    slides: t,
    passedParams: r,
    changedParams: n,
    nextEl: s,
    prevEl: o,
    scrollbarEl: a,
    paginationEl: l
  } = i;
  const u = n.filter((C) => C !== "children" && C !== "direction" && C !== "wrapperClass"), {
    params: c,
    pagination: d,
    navigation: f,
    scrollbar: h,
    virtual: b,
    thumbs: m
  } = e;
  let x, w, g, v, y, _, A, D;
  n.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (x = !0), n.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (w = !0), n.includes("pagination") && r.pagination && (r.pagination.el || l) && (c.pagination || c.pagination === !1) && d && !d.el && (g = !0), n.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || a) && (c.scrollbar || c.scrollbar === !1) && h && !h.el && (v = !0), n.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || s) && (c.navigation || c.navigation === !1) && f && !f.prevEl && !f.nextEl && (y = !0);
  const k = (C) => {
    e[C] && (e[C].destroy(), C === "navigation" ? (e.isElement && (e[C].prevEl.remove(), e[C].nextEl.remove()), c[C].prevEl = void 0, c[C].nextEl = void 0, e[C].prevEl = void 0, e[C].nextEl = void 0) : (e.isElement && e[C].el.remove(), c[C].el = void 0, e[C].el = void 0));
  };
  n.includes("loop") && e.isElement && (c.loop && !r.loop ? _ = !0 : !c.loop && r.loop ? A = !0 : D = !0), u.forEach((C) => {
    if (rr(c[C]) && rr(r[C]))
      Object.assign(c[C], r[C]), (C === "navigation" || C === "pagination" || C === "scrollbar") && "enabled" in r[C] && !r[C].enabled && k(C);
    else {
      const S = r[C];
      (S === !0 || S === !1) && (C === "navigation" || C === "pagination" || C === "scrollbar") ? S === !1 && k(C) : c[C] = r[C];
    }
  }), u.includes("controller") && !w && e.controller && e.controller.control && c.controller && c.controller.control && (e.controller.control = c.controller.control), n.includes("children") && t && b && c.virtual.enabled ? (b.slides = t, b.update(!0)) : n.includes("virtual") && b && c.virtual.enabled && (t && (b.slides = t), b.update(!0)), n.includes("children") && t && c.loop && (D = !0), x && m.init() && m.update(!0), w && (e.controller.control = c.controller.control), g && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), e.el.appendChild(l)), l && (c.pagination.el = l), d.init(), d.render(), d.update()), v && (e.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), e.el.appendChild(a)), a && (c.scrollbar.el = a), h.init(), h.updateSize(), h.setTranslate()), y && (e.isElement && ((!s || typeof s == "string") && (s = document.createElement("div"), s.classList.add("swiper-button-next"), s.innerHTML = e.hostEl.constructor.nextButtonSvg, s.part.add("button-next"), e.el.appendChild(s)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = e.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), e.el.appendChild(o))), s && (c.navigation.nextEl = s), o && (c.navigation.prevEl = o), f.init(), f.update()), n.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev), n.includes("direction") && e.changeDirection(r.direction, !1), (_ || D) && e.loopDestroy(), (A || D) && e.loopCreate(), e.update();
}
function G1(i, e) {
  i === void 0 && (i = {}), e === void 0 && (e = !0);
  const t = {
    on: {}
  }, r = {}, n = {};
  br(t, hs), t._emitClasses = !0, t.init = !1;
  const s = {}, o = Eu.map((l) => l.replace(/_/, "")), a = Object.assign({}, i);
  return Object.keys(a).forEach((l) => {
    typeof i[l] > "u" || (o.indexOf(l) >= 0 ? rr(i[l]) ? (t[l] = {}, n[l] = {}, br(t[l], i[l]), br(n[l], i[l])) : (t[l] = i[l], n[l] = i[l]) : l.search(/on[A-Z]/) === 0 && typeof i[l] == "function" ? e ? r[`${l[2].toLowerCase()}${l.substr(3)}`] = i[l] : t.on[`${l[2].toLowerCase()}${l.substr(3)}`] = i[l] : s[l] = i[l]);
  }), ["navigation", "pagination", "scrollbar"].forEach((l) => {
    t[l] === !0 && (t[l] = {}), t[l] === !1 && delete t[l];
  }), {
    params: t,
    passedParams: n,
    rest: s,
    events: r
  };
}
function Y1(i, e) {
  let {
    el: t,
    nextEl: r,
    prevEl: n,
    paginationEl: s,
    scrollbarEl: o,
    swiper: a
  } = i;
  Bu(e) && r && n && (a.params.navigation.nextEl = r, a.originalParams.navigation.nextEl = r, a.params.navigation.prevEl = n, a.originalParams.navigation.prevEl = n), Lu(e) && s && (a.params.pagination.el = s, a.originalParams.pagination.el = s), Tu(e) && o && (a.params.scrollbar.el = o, a.originalParams.scrollbar.el = o), a.init(t);
}
function W1(i, e, t, r, n) {
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
  return Eu.filter((l) => l[0] === "_").map((l) => l.replace(/_/, "")).forEach((l) => {
    if (l in i && l in e)
      if (rr(i[l]) && rr(e[l])) {
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
const K1 = (i) => {
  !i || i.destroyed || !i.params.virtual || i.params.virtual && !i.params.virtual.enabled || (i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.parallax && i.params.parallax && i.params.parallax.enabled && i.parallax.setTranslate());
};
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
    }
    return i;
  }, tn.apply(this, arguments);
}
function Nu(i) {
  return i.type && i.type.displayName && i.type.displayName.includes("SwiperSlide");
}
function Pu(i) {
  const e = [];
  return be.Children.toArray(i).forEach((t) => {
    Nu(t) ? e.push(t) : t.props && t.props.children && Pu(t.props.children).forEach((r) => e.push(r));
  }), e;
}
function Z1(i) {
  const e = [], t = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return be.Children.toArray(i).forEach((r) => {
    if (Nu(r))
      e.push(r);
    else if (r.props && r.props.slot && t[r.props.slot])
      t[r.props.slot].push(r);
    else if (r.props && r.props.children) {
      const n = Pu(r.props.children);
      n.length > 0 ? n.forEach((s) => e.push(s)) : t["container-end"].push(r);
    } else
      t["container-end"].push(r);
  }), {
    slides: e,
    slots: t
  };
}
function J1(i, e, t) {
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
  return u.map((c, d) => /* @__PURE__ */ be.cloneElement(c, {
    swiper: i,
    style: n,
    key: c.props.virtualIndex || c.key || `slide-${d}`
  }));
}
function ni(i, e) {
  return typeof window > "u" ? $(i, e) : Fr(i, e);
}
const _a = /* @__PURE__ */ mi(null), X1 = /* @__PURE__ */ mi(null), Mu = /* @__PURE__ */ As(function(i, e) {
  let {
    className: t,
    tag: r = "div",
    wrapperTag: n = "div",
    children: s,
    onSwiper: o,
    ...a
  } = i === void 0 ? {} : i, l = !1;
  const [u, c] = M("swiper"), [d, f] = M(null), [h, b] = M(!1), m = Y(!1), x = Y(null), w = Y(null), g = Y(null), v = Y(null), y = Y(null), _ = Y(null), A = Y(null), D = Y(null), {
    params: k,
    passedParams: C,
    rest: S,
    events: E
  } = G1(a), {
    slides: T,
    slots: F
  } = Z1(s), P = () => {
    b(!h);
  };
  Object.assign(k.on, {
    _containerClasses(B, R) {
      c(R);
    }
  });
  const z = () => {
    Object.assign(k.on, E), l = !0;
    const B = {
      ...k
    };
    if (delete B.wrapperClass, w.current = new Xs(B), w.current.virtual && w.current.params.virtual.enabled) {
      w.current.virtual.slides = T;
      const R = {
        cache: !1,
        slides: T,
        renderExternal: f,
        renderExternalUpdate: !1
      };
      br(w.current.params.virtual, R), br(w.current.originalParams.virtual, R);
    }
  };
  x.current || z(), w.current && w.current.on("_beforeBreakpoint", P);
  const N = () => {
    l || !E || !w.current || Object.keys(E).forEach((B) => {
      w.current.on(B, E[B]);
    });
  }, I = () => {
    !E || !w.current || Object.keys(E).forEach((B) => {
      w.current.off(B, E[B]);
    });
  };
  $(() => () => {
    w.current && w.current.off("_beforeBreakpoint", P);
  }), $(() => {
    !m.current && w.current && (w.current.emitSlidesClasses(), m.current = !0);
  }), ni(() => {
    if (e && (e.current = x.current), !!x.current)
      return w.current.destroyed && z(), Y1({
        el: x.current,
        nextEl: y.current,
        prevEl: _.current,
        paginationEl: A.current,
        scrollbarEl: D.current,
        swiper: w.current
      }, k), o && !w.current.destroyed && o(w.current), () => {
        w.current && !w.current.destroyed && w.current.destroy(!0, !1);
      };
  }, []), ni(() => {
    N();
    const B = W1(C, g.current, T, v.current, (R) => R.key);
    return g.current = C, v.current = T, B.length && w.current && !w.current.destroyed && H1({
      swiper: w.current,
      slides: T,
      passedParams: C,
      changedParams: B,
      nextEl: y.current,
      prevEl: _.current,
      scrollbarEl: D.current,
      paginationEl: A.current
    }), () => {
      I();
    };
  }), ni(() => {
    K1(w.current);
  }, [d]);
  function L() {
    return k.virtual ? J1(w.current, T, d) : T.map((B, R) => /* @__PURE__ */ be.cloneElement(B, {
      swiper: w.current,
      swiperSlideIndex: R
    }));
  }
  return /* @__PURE__ */ be.createElement(r, tn({
    ref: x,
    className: Fu(`${u}${t ? ` ${t}` : ""}`)
  }, S), /* @__PURE__ */ be.createElement(X1.Provider, {
    value: w.current
  }, F["container-start"], /* @__PURE__ */ be.createElement(n, {
    className: U1(k.wrapperClass)
  }, F["wrapper-start"], L(), F["wrapper-end"]), Bu(k) && /* @__PURE__ */ be.createElement(be.Fragment, null, /* @__PURE__ */ be.createElement("div", {
    ref: _,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ be.createElement("div", {
    ref: y,
    className: "swiper-button-next"
  })), Tu(k) && /* @__PURE__ */ be.createElement("div", {
    ref: D,
    className: "swiper-scrollbar"
  }), Lu(k) && /* @__PURE__ */ be.createElement("div", {
    ref: A,
    className: "swiper-pagination"
  }), F["container-end"]));
});
Mu.displayName = "Swiper";
const Ou = /* @__PURE__ */ As(function(i, e) {
  let {
    tag: t = "div",
    children: r,
    className: n = "",
    swiper: s,
    zoom: o,
    lazy: a,
    virtualIndex: l,
    swiperSlideIndex: u,
    ...c
  } = i === void 0 ? {} : i;
  const d = Y(null), [f, h] = M("swiper-slide"), [b, m] = M(!1);
  function x(y, _, A) {
    _ === d.current && h(A);
  }
  ni(() => {
    if (typeof u < "u" && (d.current.swiperSlideIndex = u), e && (e.current = d.current), !(!d.current || !s)) {
      if (s.destroyed) {
        f !== "swiper-slide" && h("swiper-slide");
        return;
      }
      return s.on("_slideClass", x), () => {
        s && s.off("_slideClass", x);
      };
    }
  }), ni(() => {
    s && d.current && !s.destroyed && h(s.getSlideClasses(d.current));
  }, [s]);
  const w = {
    isActive: f.indexOf("swiper-slide-active") >= 0,
    isVisible: f.indexOf("swiper-slide-visible") >= 0,
    isPrev: f.indexOf("swiper-slide-prev") >= 0,
    isNext: f.indexOf("swiper-slide-next") >= 0
  }, g = () => typeof r == "function" ? r(w) : r, v = () => {
    m(!0);
  };
  return /* @__PURE__ */ be.createElement(t, tn({
    ref: d,
    className: Fu(`${f}${n ? ` ${n}` : ""}`),
    "data-swiper-slide-index": l,
    onLoad: v
  }, c), o && /* @__PURE__ */ be.createElement(_a.Provider, {
    value: w
  }, /* @__PURE__ */ be.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof o == "number" ? o : void 0
  }, g(), a && !b && /* @__PURE__ */ be.createElement("div", {
    className: "swiper-lazy-preloader"
  }))), !o && /* @__PURE__ */ be.createElement(_a.Provider, {
    value: w
  }, g(), a && !b && /* @__PURE__ */ be.createElement("div", {
    className: "swiper-lazy-preloader"
  })));
});
Ou.displayName = "SwiperSlide";
function Q1(i, e, t, r) {
  return i.params.createElements && Object.keys(r).forEach((n) => {
    if (!t[n] && t.auto === !0) {
      let s = ot(i.el, `.${r[n]}`)[0];
      s || (s = Qi("div", r[n]), s.className = r[n], i.el.append(s)), t[n] = s, e[n] = s;
    }
  }), t;
}
function Hr(i) {
  return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function eh(i) {
  let {
    swiper: e,
    extendParams: t,
    on: r,
    emit: n
  } = i;
  const s = "swiper-pagination";
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
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let o, a = 0;
  function l() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function u(g, v) {
    const {
      bulletActiveClass: y
    } = e.params.pagination;
    g && (g = g[`${v === "prev" ? "previous" : "next"}ElementSibling`], g && (g.classList.add(`${y}-${v}`), g = g[`${v === "prev" ? "previous" : "next"}ElementSibling`], g && g.classList.add(`${y}-${v}-${v}`)));
  }
  function c(g, v, y) {
    if (g = g % y, v = v % y, v === g + 1)
      return "next";
    if (v === g - 1)
      return "previous";
  }
  function d(g) {
    const v = g.target.closest(Hr(e.params.pagination.bulletClass));
    if (!v)
      return;
    g.preventDefault();
    const y = en(v) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === y)
        return;
      const _ = c(e.realIndex, y, e.slides.length);
      _ === "next" ? e.slideNext() : _ === "previous" ? e.slidePrev() : e.slideToLoop(y);
    } else
      e.slideTo(y);
  }
  function f() {
    const g = e.rtl, v = e.params.pagination;
    if (l())
      return;
    let y = e.pagination.el;
    y = ht(y);
    let _, A;
    const D = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, k = e.params.loop ? Math.ceil(D / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (A = e.previousRealIndex || 0, _ = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (_ = e.snapIndex, A = e.previousSnapIndex) : (A = e.previousIndex || 0, _ = e.activeIndex || 0), v.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const C = e.pagination.bullets;
      let S, E, T;
      if (v.dynamicBullets && (o = ps(C[0], e.isHorizontal() ? "width" : "height", !0), y.forEach((F) => {
        F.style[e.isHorizontal() ? "width" : "height"] = `${o * (v.dynamicMainBullets + 4)}px`;
      }), v.dynamicMainBullets > 1 && A !== void 0 && (a += _ - (A || 0), a > v.dynamicMainBullets - 1 ? a = v.dynamicMainBullets - 1 : a < 0 && (a = 0)), S = Math.max(_ - a, 0), E = S + (Math.min(C.length, v.dynamicMainBullets) - 1), T = (E + S) / 2), C.forEach((F) => {
        const P = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((z) => `${v.bulletActiveClass}${z}`)].map((z) => typeof z == "string" && z.includes(" ") ? z.split(" ") : z).flat();
        F.classList.remove(...P);
      }), y.length > 1)
        C.forEach((F) => {
          const P = en(F);
          P === _ ? F.classList.add(...v.bulletActiveClass.split(" ")) : e.isElement && F.setAttribute("part", "bullet"), v.dynamicBullets && (P >= S && P <= E && F.classList.add(...`${v.bulletActiveClass}-main`.split(" ")), P === S && u(F, "prev"), P === E && u(F, "next"));
        });
      else {
        const F = C[_];
        if (F && F.classList.add(...v.bulletActiveClass.split(" ")), e.isElement && C.forEach((P, z) => {
          P.setAttribute("part", z === _ ? "bullet-active" : "bullet");
        }), v.dynamicBullets) {
          const P = C[S], z = C[E];
          for (let N = S; N <= E; N += 1)
            C[N] && C[N].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
          u(P, "prev"), u(z, "next");
        }
      }
      if (v.dynamicBullets) {
        const F = Math.min(C.length, v.dynamicMainBullets + 4), P = (o * F - o) / 2 - T * o, z = g ? "right" : "left";
        C.forEach((N) => {
          N.style[e.isHorizontal() ? z : "top"] = `${P}px`;
        });
      }
    }
    y.forEach((C, S) => {
      if (v.type === "fraction" && (C.querySelectorAll(Hr(v.currentClass)).forEach((E) => {
        E.textContent = v.formatFractionCurrent(_ + 1);
      }), C.querySelectorAll(Hr(v.totalClass)).forEach((E) => {
        E.textContent = v.formatFractionTotal(k);
      })), v.type === "progressbar") {
        let E;
        v.progressbarOpposite ? E = e.isHorizontal() ? "vertical" : "horizontal" : E = e.isHorizontal() ? "horizontal" : "vertical";
        const T = (_ + 1) / k;
        let F = 1, P = 1;
        E === "horizontal" ? F = T : P = T, C.querySelectorAll(Hr(v.progressbarFillClass)).forEach((z) => {
          z.style.transform = `translate3d(0,0,0) scaleX(${F}) scaleY(${P})`, z.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      v.type === "custom" && v.renderCustom ? (C.innerHTML = v.renderCustom(e, _ + 1, k), S === 0 && n("paginationRender", C)) : (S === 0 && n("paginationRender", C), n("paginationUpdate", C)), e.params.watchOverflow && e.enabled && C.classList[e.isLocked ? "add" : "remove"](v.lockClass);
    });
  }
  function h() {
    const g = e.params.pagination;
    if (l())
      return;
    const v = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let y = e.pagination.el;
    y = ht(y);
    let _ = "";
    if (g.type === "bullets") {
      let A = e.params.loop ? Math.ceil(v / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && A > v && (A = v);
      for (let D = 0; D < A; D += 1)
        g.renderBullet ? _ += g.renderBullet.call(e, D, g.bulletClass) : _ += `<${g.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${g.bulletClass}"></${g.bulletElement}>`;
    }
    g.type === "fraction" && (g.renderFraction ? _ = g.renderFraction.call(e, g.currentClass, g.totalClass) : _ = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`), g.type === "progressbar" && (g.renderProgressbar ? _ = g.renderProgressbar.call(e, g.progressbarFillClass) : _ = `<span class="${g.progressbarFillClass}"></span>`), e.pagination.bullets = [], y.forEach((A) => {
      g.type !== "custom" && (A.innerHTML = _ || ""), g.type === "bullets" && e.pagination.bullets.push(...A.querySelectorAll(Hr(g.bulletClass)));
    }), g.type !== "custom" && n("paginationRender", y[0]);
  }
  function b() {
    e.params.pagination = Q1(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const g = e.params.pagination;
    if (!g.el)
      return;
    let v;
    typeof g.el == "string" && e.isElement && (v = e.el.querySelector(g.el)), !v && typeof g.el == "string" && (v = [...document.querySelectorAll(g.el)]), v || (v = g.el), !(!v || v.length === 0) && (e.params.uniqueNavElements && typeof g.el == "string" && Array.isArray(v) && v.length > 1 && (v = [...e.el.querySelectorAll(g.el)], v.length > 1 && (v = v.find((y) => _u(y, ".swiper")[0] === e.el))), Array.isArray(v) && v.length === 1 && (v = v[0]), Object.assign(e.pagination, {
      el: v
    }), v = ht(v), v.forEach((y) => {
      g.type === "bullets" && g.clickable && y.classList.add(...(g.clickableClass || "").split(" ")), y.classList.add(g.modifierClass + g.type), y.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.type === "bullets" && g.dynamicBullets && (y.classList.add(`${g.modifierClass}${g.type}-dynamic`), a = 0, g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)), g.type === "progressbar" && g.progressbarOpposite && y.classList.add(g.progressbarOppositeClass), g.clickable && y.addEventListener("click", d), e.enabled || y.classList.add(g.lockClass);
    }));
  }
  function m() {
    const g = e.params.pagination;
    if (l())
      return;
    let v = e.pagination.el;
    v && (v = ht(v), v.forEach((y) => {
      y.classList.remove(g.hiddenClass), y.classList.remove(g.modifierClass + g.type), y.classList.remove(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.clickable && (y.classList.remove(...(g.clickableClass || "").split(" ")), y.removeEventListener("click", d));
    })), e.pagination.bullets && e.pagination.bullets.forEach((y) => y.classList.remove(...g.bulletActiveClass.split(" ")));
  }
  r("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const g = e.params.pagination;
    let {
      el: v
    } = e.pagination;
    v = ht(v), v.forEach((y) => {
      y.classList.remove(g.horizontalClass, g.verticalClass), y.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass);
    });
  }), r("init", () => {
    e.params.pagination.enabled === !1 ? w() : (b(), h(), f());
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
    g && (g = ht(g), g.forEach((v) => v.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), r("lock unlock", () => {
    f();
  }), r("click", (g, v) => {
    const y = v.target, _ = ht(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && _ && _.length > 0 && !y.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && y === e.navigation.nextEl || e.navigation.prevEl && y === e.navigation.prevEl))
        return;
      const A = _[0].classList.contains(e.params.pagination.hiddenClass);
      n(A === !0 ? "paginationShow" : "paginationHide"), _.forEach((D) => D.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const x = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: g
    } = e.pagination;
    g && (g = ht(g), g.forEach((v) => v.classList.remove(e.params.pagination.paginationDisabledClass))), b(), h(), f();
  }, w = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: g
    } = e.pagination;
    g && (g = ht(g), g.forEach((v) => v.classList.add(e.params.pagination.paginationDisabledClass))), m();
  };
  Object.assign(e.pagination, {
    enable: x,
    disable: w,
    render: h,
    update: f,
    init: b,
    destroy: m
  });
}
const th = () => {
  const i = Y(null), e = Y(null), t = wu, r = Y(null), [n, s] = M(0), [o, a] = M(!0), {
    t: l
  } = X(), u = {
    clickable: !0,
    renderBullet: function(h, b) {
      return '<span class="' + b + ' "></span>';
    }
  }, c = () => {
    ee.to(i.current, {
      opacity: 1,
      duration: 0.25,
      zIndex: 2e3,
      pointerEvents: "all",
      display: "block"
    }), ee.to(e.current, {
      opacity: 1,
      duration: 0.5,
      pointerEvents: "all"
    });
  }, d = () => {
    ee.to(i.current, {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
      display: "none"
    }), ee.to(e.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
      onComplete: () => a(!1)
    });
  }, f = () => {
    d(), un.value = !1;
  };
  return $(() => {
    o ? c() : d();
  }, [o]), p("div", {
    className: "onboarding-wrapper",
    ref: i,
    children: [p("style", {
      type: "text/css",
      children: yf
    }), p("div", {
      className: "onboarding-background"
    }), p("div", {
      className: "onboarding-modal",
      ref: e,
      children: [p("div", {
        className: "back-button",
        onClick: () => n > 0 ? r.current.slidePrev() : Q("/workshop"),
        children: p(Xe, {})
      }), p("h2", {
        className: "heading relative flex items-center justify-center w-full h-10 my-5 sm:mt-8 text-xl",
        children: "Virtual Workshop - Quick Guide"
      }), p(Mu, {
        style: {
          padding: "0 30px"
        },
        spaceBetween: 30,
        onSwiper: (h) => r.current = h,
        pagination: u,
        modules: [eh],
        onSlideChange: (h) => s(h.activeIndex),
        children: t.map((h, b) => p(Ou, {
          children: p(Af, {
            title: h.title,
            src: h.image,
            content: h.content,
            number: h.number
          })
        }, b))
      }), p("div", {
        className: "button-wrapper",
        children: p(ut, {
          onClick: () => n < t.length - 1 ? r.current.slideNext() : f(),
          text: n < t.length - 1 ? l("onboarding_next") : l("onboarding_explore"),
          active: !0,
          primary: !0
        })
      })]
    })]
  });
};
function rh() {
  const {
    t: i
  } = X(), {
    currentBike: e
  } = Ie(), [t, r] = M(Ce.value), s = window.BikeMatrix.getConfig(), [o, a] = M(!1), [l, u] = M("");
  $(() => {
    it.value.back = "/";
  }, []);
  const [c, d] = M(!1), [f, h] = M(!1), [b, m] = M(!1), [x, w] = M(""), [g, v] = M(""), [y, _] = M(!1), A = new Be(s.apiUrl, s.apiKey, s.apiToken, s.isShopify), D = async () => {
    const E = await A.getBikeBom(t.bike_Key);
    if (!E.success) {
      u(E.error), s.logLevel === "verbose" && console.error(E.logError);
      return;
    }
    Ce.value = Er(E), d(!1), h(!0), Q("/");
  }, k = (E) => {
    v(E), d(!1);
  }, C = async () => {
    if (d(!0), _(!0), t.owner_Email_Address) {
      const E = await A.saveCustomBike(e.key, t.owner_Email_Address);
      if (E.success)
        D();
      else {
        s.logLevel === "verbose" && console.error(E.logError), k(E.error);
        return;
      }
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(x)) {
      const E = await A.saveCustomBike(e.key, x);
      if (E.success)
        D();
      else {
        s.logLevel === "verbose" && console.error(E.logError), k(E.error);
        return;
      }
    }
  };
  $(() => {
    y && g && v("");
  }, [x]);
  const S = async () => {
    a(!0);
    const E = await A.getBikeBom(e.key);
    if (!E.success) {
      u(E.error), s.logLevel === "verbose" && console.error(E.logError), a(!1);
      return;
    }
    const T = Er(E.data);
    r(T), Ce.value = T, a(!1);
  };
  return $(() => {
    Ce.value || S();
  }, []), p(V, {
    children: [un.value && p(th, {}), p("div", {
      className: "mb-4",
      children: [e ? p(Qe, {
        bike: e,
        selected: !0,
        settings: !0,
        compact: !0
      }) : p(Or, {}), p("div", {
        class: "mt-4 mb-8",
        children: p(vu, {
          categorisedBOM: t,
          bikeSave: f,
          refreshBomb: S,
          loading: o,
          bomError: l
        })
      })]
    }), p(ut, {
      text: i("virtualworkshop_save_btn"),
      onClick: t != null && t.owner_Email_Address ? () => C() : () => m(!0),
      primary: !0,
      loading: !b && c
    }), p(Dt, {}), p(Ys, {
      isOpen: b,
      toggleModal: () => m(!1),
      content: i("virtualworkshop_save_text"),
      title: i("virtualworkshop_save_title"),
      onConfirm: C,
      onCancel: () => m(!1),
      loading: c,
      children: [p("div", {
        class: "mt-8",
        children: p(gu, {
          value: x,
          setValue: (E) => w(E),
          placeholder: i("virtualworkshop_settings_email"),
          type: "email",
          error: g,
          submitInput: C
        })
      }), p(et, {
        messages: l
      })]
    })]
  });
}
function ih() {
  const {
    t: i
  } = X(), e = ln.value, r = window.BikeMatrix.getConfig(), [n, s] = M(!1), [o, a] = M(null), l = Ce.value, {
    currentBike: u,
    setCurrentBike: c
  } = Ie(), d = new Be(r.apiUrl, r.apiKey, r.apiToken, r.isShopify), [f, h] = M(!1);
  u.isShared && Q("/");
  const b = async () => {
    h(!0), Ks();
    const m = await d.removeComponent(u.key, e.part.product_category_id, Zs[e.type.split(" ").join("_")]);
    if (m.success)
      l[e.category.split(" ").join("_")][e.type.split(" ").join("_")] = {
        ...l[e.category.split(" ").join("_")][e.type.split(" ").join("_")],
        id: null,
        name: null,
        unsaved_changes: !0
      }, Ce.value = l, c({
        ...u
      }), h(!1), Q("/bom");
    else {
      h(!1), s(!1), a(m.error + " - " + e.part.name), r.logLevel === "verbose" && console.error(m.logError);
      return;
    }
  };
  return p(V, {
    children: [p("div", {
      className: "mb-4",
      children: [u ? p(Qe, {
        bike: u,
        selected: !0,
        settings: !0
      }) : p(Or, {}), p("div", {
        className: "part-wrapper mt-8 mb-8 relative",
        children: [p(yt, {
          subheader: !0,
          text: e.part.name
        }), p("p", {
          className: "absolute text-red-500 text-sm left-1/2 transform -translate-x-1/2",
          children: o
        })]
      })]
    }), p(ut, {
      text: i("virtualworkshop_swap_btn"),
      onClick: () => Q("/update"),
      primary: !0
    }), p(ut, {
      text: i("virtualworkshop_remove_btn"),
      onClick: () => s(!0)
    }), p(Dt, {}), n && p(Ys, {
      isOpen: n,
      toggleModal: () => s(!1),
      content: i("virtualworkshop_remove_subtitle"),
      title: i("virtualworkshop_are_you_sure"),
      onConfirm: b,
      onCancel: () => s(!1),
      loading: f
    })]
  });
}
const nh = `.search-wrapper{position:relative;margin-bottom:12rem}@media (max-width: 767px){.search-wrapper{margin-bottom:22rem}}.search_bar-wrapper{border:1px solid rgb(209 213 219);border-radius:12px;display:flex;align-items:center;z-index:2;width:100%;background-color:#fff;position:absolute;transition:all ease-in-out .5s;padding:12px}.input_icon-wrapper{display:flex;align-items:center;gap:1rem;width:100%}.input_icon-wrapper input{width:100%}.svg-wrapper{cursor:pointer}.compatibility-wrapper{height:110px;position:absolute;width:100%;border-radius:12px;overflow:hidden;top:0}.compatibility{position:absolute;width:100%;top:-75px;height:71px;border:1px solid;border-bottom-right-radius:12px;border-bottom-left-radius:12px}.compatibility-contents{position:relative;height:54px;display:flex;align-items:center;border-bottom-left-radius:12px;margin-top:16px;overflow:hidden}@media (max-width: 767px){.compatibility-contents p{font-size:16px}}.polygon{position:absolute}.bikon{margin-left:.75rem}.compatibility-background{height:108px;position:absolute;z-index:-1;border-bottom-left-radius:12px;left:-2px;top:-38px;width:59px}.compatibility-warning_button{margin-left:auto;border:1px solid rgb(245 158 11);color:#451a03;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 32px;height:75%;margin-right:5px;margin-bottom:1px;font-weight:600}.results-wrapper{top:40px;height:0;overflow:hidden;position:absolute;width:100%;border:1px solid black;border-bottom-left-radius:12px;border-bottom-right-radius:12px;max-height:190px;overflow-y:scroll;background-color:#fff;z-index:1}.results{width:100%;padding:12px;padding-top:2rem;display:flex;flex-direction:column;gap:.5rem}.result{background-color:#fff;transition:ease-in-out .2s;border-radius:8px;padding-left:10px;padding-top:5px;padding-bottom:5px;cursor:pointer}.result:hover{background-color:#d9d9d966}.notes-wrapper{display:flex;flex-direction:column;gap:.5rem;padding-top:1rem}
`, sh = (i) => /* @__PURE__ */ q("svg", { width: 23, height: 23, viewBox: "0 0 23 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M0 9.26199C0 7.98077 0.242061 6.78221 0.726184 5.66631C1.21031 4.5504 1.87806 3.57089 2.72945 2.72776C3.58919 1.87637 4.58247 1.21096 5.70931 0.731536C6.83615 0.243845 8.04228 0 9.32771 0C10.6215 0 11.8318 0.243845 12.9586 0.731536C14.0855 1.21096 15.0788 1.87637 15.9385 2.72776C16.7982 3.57089 17.4701 4.5504 17.9543 5.66631C18.4384 6.78221 18.6805 7.98077 18.6805 9.26199C18.6805 10.3283 18.5052 11.345 18.1546 12.3121C17.804 13.271 17.3199 14.1389 16.7022 14.9159L22.6369 20.8178C22.7538 20.9418 22.8414 21.0782 22.8998 21.227C22.9666 21.384 23 21.5452 23 21.7105C23 21.9585 22.9457 22.1775 22.8372 22.3677C22.7287 22.566 22.5785 22.719 22.3865 22.8264C22.1945 22.9421 21.9733 23 21.7229 23C21.556 23 21.389 22.9669 21.2221 22.9008C21.0635 22.8429 20.9216 22.7562 20.7964 22.6404L14.8367 16.7137C14.0604 17.2758 13.209 17.7181 12.2825 18.0404C11.356 18.3545 10.3711 18.5116 9.32771 18.5116C8.04228 18.5116 6.83615 18.2719 5.70931 17.7925C4.58247 17.313 3.58919 16.6476 2.72945 15.7962C1.87806 14.9448 1.21031 13.9612 0.726184 12.8453C0.242061 11.7294 0 10.535 0 9.26199ZM1.81546 9.26199C1.81546 10.287 2.01161 11.25 2.40392 12.1509C2.79623 13.0437 3.3346 13.8331 4.01905 14.5191C4.71185 15.1969 5.50898 15.7301 6.41045 16.1186C7.32027 16.4988 8.29269 16.6889 9.32771 16.6889C10.3711 16.6889 11.3435 16.4988 12.245 16.1186C13.1548 15.7301 13.9519 15.1969 14.6364 14.5191C15.3292 13.8331 15.8675 13.0437 16.2515 12.1509C16.6438 11.25 16.84 10.287 16.84 9.26199C16.84 8.22875 16.6438 7.26577 16.2515 6.37305C15.8675 5.47206 15.3292 4.68266 14.6364 4.00485C13.9519 3.31878 13.1548 2.78562 12.245 2.40539C11.3435 2.01689 10.3711 1.82264 9.32771 1.82264C8.29269 1.82264 7.32027 2.01689 6.41045 2.40539C5.50898 2.78562 4.71185 3.31878 4.01905 4.00485C3.3346 4.68266 2.79623 5.47206 2.40392 6.37305C2.01161 7.26577 1.81546 8.22875 1.81546 9.26199Z", fill: "black" })), Qs = (i) => /* @__PURE__ */ q("svg", { width: 57, height: 40, viewBox: "0 0 57 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4343 1.80079C44.6538 2.54246 44.2342 3.3224 43.4943 3.54788L37.9829 5.22744L42.5437 17.3218C42.7699 17.2662 42.9979 17.2168 43.2272 17.1749C43.4564 17.1337 43.687 17.0993 43.9187 17.0724C44.1498 17.0449 44.3822 17.0256 44.6151 17.0131C44.8475 17.0012 45.0804 16.9962 45.3134 16.9987C45.547 17.0018 45.7794 17.0118 46.0117 17.0293C46.2441 17.0468 46.4758 17.0712 46.7069 17.1037C46.938 17.1356 47.1673 17.1756 47.396 17.2224C47.6246 17.2693 47.8508 17.3231 48.0764 17.3843C48.3013 17.4462 48.5244 17.5143 48.7451 17.5899C48.9657 17.6656 49.1839 17.7481 49.4002 17.8374C49.6159 17.9268 49.8286 18.0231 50.0381 18.1262C50.2477 18.2293 50.4541 18.3387 50.6575 18.4549C50.8603 18.5712 51.0594 18.6937 51.2547 18.8224C51.4501 18.9512 51.6412 19.0862 51.8285 19.2274C52.0153 19.3687 52.1977 19.5156 52.3758 19.6681C52.5539 19.8206 52.7265 19.9787 52.8948 20.1424C53.063 20.3062 53.2257 20.4749 53.3835 20.6493C53.5413 20.8237 53.6929 21.0024 53.8396 21.1862C53.9863 21.3699 54.1268 21.5581 54.2618 21.7512C54.3967 21.9437 54.5255 22.1406 54.6482 22.3418C54.7708 22.5424 54.8867 22.7474 54.997 22.9556C55.1067 23.1637 55.2103 23.3756 55.307 23.5906C55.4038 23.8056 55.4944 24.0237 55.5776 24.2443C55.6608 24.4649 55.7372 24.6881 55.8069 24.9137C55.8765 25.1393 55.9388 25.3668 55.9942 25.5962C56.0497 25.8262 56.0978 26.0568 56.1391 26.2899C56.1804 26.5224 56.2136 26.7562 56.2408 26.9912C56.2673 27.2256 56.2864 27.4612 56.2987 27.6974C56.3104 27.9331 56.3153 28.1693 56.3123 28.4056C56.3098 28.6418 56.2999 28.8781 56.2827 29.1137C56.2654 29.3493 56.2408 29.5843 56.2087 29.8187C56.1773 30.0524 56.1378 30.2856 56.0916 30.5174C56.0454 30.7487 55.9924 30.9787 55.932 31.2068C55.871 31.4356 55.8038 31.6612 55.7292 31.8856C55.6546 32.1093 55.5733 32.3306 55.4852 32.5493C55.3964 32.7681 55.3015 32.9837 55.2004 33.1968C55.0987 33.4093 54.9902 33.6187 54.8756 33.8243C54.761 34.0299 54.6402 34.2318 54.5132 34.4299C54.3863 34.6281 54.2531 34.8224 54.1138 35.0118C53.9746 35.2012 53.8297 35.3862 53.6793 35.5668C53.529 35.7474 53.3724 35.9224 53.2109 36.0931C53.0495 36.2637 52.8831 36.4287 52.7117 36.5887C52.5398 36.7481 52.3635 36.9024 52.1817 37.0512C52.0005 37.1993 51.815 37.3424 51.6251 37.4787C51.4347 37.6156 51.2406 37.7462 51.0427 37.8706C50.8443 37.9949 50.6427 38.1131 50.4369 38.2243C50.2316 38.3356 50.0227 38.4406 49.8107 38.5387C49.5987 38.6368 49.3836 38.7287 49.166 38.8131C48.9485 38.8974 48.7284 38.9749 48.506 39.0456C48.2835 39.1156 48.0591 39.1793 47.8323 39.2349C47.6061 39.2912 47.3781 39.3406 47.1488 39.3818C46.9195 39.4237 46.689 39.4581 46.4573 39.4849C46.2262 39.5118 45.9938 39.5312 45.7609 39.5431C45.5279 39.5556 45.2955 39.5599 45.062 39.5574C44.829 39.5549 44.5966 39.5449 44.3643 39.5268C44.1313 39.5093 43.9002 39.4843 43.6691 39.4524C43.438 39.4199 43.2087 39.3806 42.98 39.3337C42.7514 39.2862 42.5252 39.2324 42.2996 39.1706C42.0747 39.1093 41.8522 39.0412 41.6309 38.9656C41.4103 38.8899 41.1921 38.8074 40.9764 38.7174C40.7607 38.6281 40.548 38.5318 40.3379 38.4287C40.1283 38.3256 39.9219 38.2162 39.7191 38.0999C39.5163 37.9837 39.3172 37.8606 39.1219 37.7318C38.9265 37.6031 38.7354 37.4681 38.5481 37.3268C38.3613 37.1856 38.1789 37.0387 38.0008 36.8862C37.8233 36.7331 37.6501 36.5749 37.4825 36.4112C37.3142 36.2474 37.1515 36.0787 36.9937 35.9043C36.8359 35.7299 36.6843 35.5512 36.5376 35.3674C36.391 35.1837 36.2504 34.9949 36.1161 34.8024C35.9811 34.6093 35.8523 34.4124 35.7296 34.2118C35.607 34.0106 35.4911 33.8062 35.3808 33.5974C35.2711 33.3893 35.1676 33.1774 35.0708 32.9624C34.974 32.7474 34.8841 32.5293 34.8009 32.3087C34.7177 32.0881 34.6412 31.8649 34.5716 31.6393C34.5026 31.4137 34.4397 31.1862 34.3848 30.9562C34.3294 30.7268 34.2813 30.4956 34.24 30.2631C34.1993 30.0306 34.1654 29.7968 34.1389 29.5618C34.1124 29.3268 34.0933 29.0912 34.081 28.8556C34.0693 28.6193 34.0644 28.3831 34.0674 28.1468C34.0699 27.9106 34.0798 27.6743 34.0976 27.4387C34.1149 27.2031 34.1395 26.9681 34.171 26.7343C34.203 26.4999 34.2425 26.2668 34.2887 26.0356C34.3349 25.8037 34.3885 25.5737 34.4489 25.3456C34.5093 25.1174 34.5771 24.8912 34.6517 24.6674C34.7263 24.4437 34.8076 24.2224 34.8964 24.0037C34.9845 23.7849 35.0794 23.5693 35.1811 23.3562C35.2828 23.1437 35.3913 22.9343 35.5059 22.7287C35.6206 22.5231 35.7414 22.3212 35.8683 22.1231C35.9959 21.9249 36.129 21.7312 36.2683 21.5418C36.407 21.3518 36.5524 21.1668 36.7028 20.9868C36.8532 20.8062 37.0097 20.6312 37.1712 20.4606C37.3327 20.2906 37.4991 20.1249 37.6711 19.9656C37.843 19.8056 38.0193 19.6518 38.2005 19.5031C38.3817 19.3543 38.5678 19.2118 38.7576 19.0756C38.9481 18.9387 39.1422 18.8081 39.3407 18.6837C39.5385 18.5593 39.7407 18.4418 39.9459 18.3306L37.6544 12.2531L29.7544 28.8937C29.6977 29.0137 29.625 29.1224 29.5381 29.2218C29.4506 29.3206 29.3514 29.4049 29.2404 29.4756C29.1295 29.5462 29.0112 29.5993 28.8854 29.6362C28.7597 29.6724 28.6309 29.6906 28.5002 29.6906H22.8523C22.8085 30.0424 22.7481 30.3912 22.6717 30.7368C22.5947 31.0824 22.5022 31.4243 22.3943 31.7612C22.2859 32.0981 22.1626 32.4293 22.0233 32.7543C21.884 33.0793 21.7306 33.3974 21.5617 33.7074C21.3934 34.0181 21.211 34.3199 21.0144 34.6131C20.8178 34.9062 20.6076 35.1893 20.3845 35.4618C20.162 35.7349 19.9266 35.9968 19.6795 36.2474C19.4323 36.4974 19.1741 36.7362 18.9047 36.9618C18.6354 37.1874 18.3562 37.3999 18.0672 37.5993C17.7775 37.7981 17.4798 37.9831 17.1735 38.1537C16.8672 38.3243 16.5541 38.4799 16.233 38.6212C15.9125 38.7618 15.5859 38.8868 15.2531 38.9962C14.9209 39.1056 14.5843 39.1993 14.2429 39.2762C13.9021 39.3537 13.5582 39.4143 13.2112 39.4593C12.8648 39.5037 12.5166 39.5312 12.1671 39.5424C11.8177 39.5537 11.4689 39.5481 11.12 39.5262C10.7712 39.5037 10.4242 39.4649 10.0791 39.4093C9.73392 39.3543 9.39186 39.2824 9.0535 39.1943C8.71452 39.1062 8.38109 39.0024 8.05198 38.8824C7.72348 38.7624 7.40053 38.6274 7.08436 38.4762C6.76819 38.3256 6.45941 38.1599 6.15865 37.9799C5.85788 37.7999 5.56575 37.6056 5.28286 37.3974C4.99997 37.1893 4.72755 36.9681 4.465 36.7337C4.20245 36.4993 3.95161 36.2531 3.71248 35.9949C3.47273 35.7368 3.24592 35.4681 3.03144 35.1881C2.81696 34.9081 2.61604 34.6187 2.42868 34.3193C2.24132 34.0206 2.06814 33.7131 1.90913 33.3974C1.75011 33.0818 1.6059 32.7593 1.47709 32.4299C1.34827 32.1006 1.23487 31.7656 1.13688 31.4256C1.03888 31.0849 0.956912 30.7412 0.890966 30.3931C0.825636 30.0449 0.775714 29.6943 0.742433 29.3412C0.709152 28.9887 0.692511 28.6349 0.691895 28.2806C0.691895 27.9256 0.707919 27.5718 0.740584 27.2187C0.773249 26.8649 0.822554 26.5143 0.887884 26.1656C0.953214 25.8168 1.03457 25.4724 1.13195 25.1312C1.22933 24.7906 1.34211 24.4549 1.47092 24.1249C1.59973 23.7949 1.74334 23.4718 1.90173 23.1556C2.06074 22.8393 2.23393 22.5318 2.42129 22.2318C2.60865 21.9324 2.80957 21.6424 3.02343 21.3618C3.23791 21.0812 3.46472 20.8118 3.70446 20.5531C3.94421 20.2943 4.19505 20.0474 4.45761 19.8124C4.71954 19.5781 4.99257 19.3562 5.27546 19.1474C5.55835 18.9393 5.85049 18.7443 6.15187 18.5637C6.45325 18.3831 6.76202 18.2174 7.07881 18.0662C7.39498 17.9149 7.71794 17.7793 8.04705 17.6593C8.37678 17.5387 8.71083 17.4349 9.0498 17.3462C9.38878 17.2581 9.73083 17.1862 10.0766 17.1312C10.4217 17.0756 10.7693 17.0368 11.1188 17.0143C11.4676 16.9924 11.8177 16.9868 12.1671 16.9981C12.5166 17.0093 12.8654 17.0368 13.2124 17.0818C13.5594 17.1262 13.9039 17.1874 14.2454 17.2649C14.5868 17.3424 14.9239 17.4362 15.2568 17.5456C15.5896 17.6556 15.9162 17.7812 16.2373 17.9218C16.5584 18.0631 16.8721 18.2193 17.1791 18.3906C17.4854 18.5612 17.7837 18.7468 18.0727 18.9462C18.3618 19.1462 18.6416 19.3593 18.9109 19.5856C19.1802 19.8118 19.4385 20.0506 19.6862 20.3018C19.9334 20.5524 20.1682 20.8149 20.3913 21.0887C20.6138 21.3624 20.824 21.6456 21.02 21.9393C21.2166 22.2331 21.399 22.5356 21.5672 22.8468C21.7355 23.1574 21.889 23.4762 22.0276 23.8018C22.1663 24.1274 22.2896 24.4593 22.3974 24.7968C22.5053 25.1343 22.5971 25.4768 22.6729 25.8231C22.7493 26.1693 22.8091 26.5187 22.8523 26.8706H26.3283L19.5433 7.60432C19.489 7.45119 19.4625 7.29307 19.4625 7.13057H17.3769C17.2857 7.13057 17.1951 7.12182 17.1057 7.10369C17.0163 7.08557 16.9294 7.05869 16.845 7.02307C16.7606 6.98807 16.6805 6.94432 16.6046 6.89307C16.5282 6.84182 16.4586 6.78307 16.3939 6.71744C16.3292 6.65244 16.2712 6.58119 16.2207 6.50369C16.1701 6.42682 16.127 6.34557 16.0925 6.25994C16.0574 6.17494 16.0309 6.08682 16.013 5.99557C15.9951 5.90494 15.9865 5.81307 15.9865 5.72057C15.9865 5.62807 15.9951 5.53619 16.013 5.44557C16.0309 5.35494 16.0574 5.26682 16.0925 5.18119C16.127 5.09557 16.1701 5.01432 16.2207 4.93744C16.2712 4.86057 16.3292 4.78932 16.3939 4.72369C16.4586 4.65807 16.5282 4.59994 16.6046 4.54807C16.6805 4.49682 16.7606 4.45369 16.845 4.41807C16.9294 4.38244 17.0163 4.35557 17.1057 4.33744C17.1951 4.31994 17.2857 4.31057 17.3769 4.31057H23.6338C23.725 4.31057 23.8156 4.31994 23.9049 4.33744C23.9943 4.35557 24.0812 4.38244 24.1657 4.41807C24.2501 4.45369 24.3302 4.49682 24.406 4.54807C24.4824 4.59994 24.5521 4.65807 24.6168 4.72369C24.6815 4.78932 24.7388 4.86057 24.79 4.93744C24.8405 5.01432 24.8837 5.09557 24.9182 5.18119C24.9533 5.26682 24.9798 5.35494 24.9977 5.44557C25.0156 5.53619 25.0242 5.62807 25.0242 5.72057C25.0242 5.81307 25.0156 5.90494 24.9977 5.99557C24.9798 6.08682 24.9533 6.17494 24.9182 6.25994C24.8837 6.34557 24.8405 6.42682 24.79 6.50369C24.7388 6.58119 24.6815 6.65244 24.6168 6.71744C24.5521 6.78307 24.4824 6.84182 24.406 6.89307C24.3302 6.94432 24.2501 6.98807 24.1657 7.02307C24.0812 7.05869 23.9943 7.08557 23.9049 7.10369C23.8156 7.12182 23.725 7.13057 23.6338 7.13057H22.3296L24.8904 14.4018L36.1907 8.37119L34.8489 4.81432C34.8144 4.72369 34.7898 4.63057 34.775 4.53432C34.7596 4.43869 34.754 4.34244 34.7589 4.24557C34.7633 4.14869 34.7774 4.05307 34.8009 3.95932C34.8249 3.86557 34.8576 3.77494 34.9001 3.68807C34.942 3.60119 34.9925 3.51932 35.0517 3.44307C35.1102 3.36619 35.1762 3.29682 35.2495 3.23432C35.3223 3.17182 35.4012 3.11744 35.485 3.07119C35.5688 3.02494 35.6569 2.98744 35.7488 2.95994L42.6737 0.853036C43.4219 0.625398 44.2123 1.05089 44.4343 1.80079ZM25.8346 17.0849L28.5766 24.8687L34.4582 12.4831L25.8346 17.0849ZM43.8866 28.7843L40.9486 20.9912C40.8001 21.0799 40.6547 21.1731 40.5117 21.2712C40.3693 21.3693 40.2294 21.4712 40.0932 21.5781C39.9564 21.6849 39.8232 21.7956 39.6938 21.9112C39.5638 22.0262 39.438 22.1449 39.3154 22.2681C39.1934 22.3912 39.0744 22.5181 38.9598 22.6487C38.8451 22.7787 38.7348 22.9131 38.6282 23.0506C38.5216 23.1874 38.4193 23.3287 38.3213 23.4724C38.2239 23.6162 38.1302 23.7631 38.0415 23.9124C37.9521 24.0624 37.8683 24.2149 37.7888 24.3699C37.7087 24.5249 37.6341 24.6824 37.5638 24.8418C37.4942 25.0018 37.4288 25.1631 37.3691 25.3274C37.3087 25.4912 37.2538 25.6568 37.2039 25.8237C37.154 25.9912 37.109 26.1599 37.0695 26.3299C37.0295 26.4999 36.995 26.6712 36.966 26.8431C36.937 27.0156 36.913 27.1887 36.8945 27.3624C36.8754 27.5362 36.8624 27.7106 36.8544 27.8849C36.8464 28.0593 36.8433 28.2343 36.8464 28.4087C36.8489 28.5837 36.8569 28.7581 36.8705 28.9324C36.8834 29.1068 36.9025 29.2806 36.9265 29.4537C36.95 29.6268 36.9795 29.7987 37.0141 29.9699C37.0486 30.1412 37.088 30.3112 37.133 30.4799C37.178 30.6487 37.2279 30.8162 37.2828 30.9818C37.3382 31.1474 37.398 31.3112 37.4634 31.4731C37.5281 31.6349 37.5983 31.7943 37.6729 31.9518C37.7481 32.1093 37.8276 32.2643 37.912 32.4168C37.9965 32.5687 38.0852 32.7187 38.1789 32.8656C38.272 33.0124 38.37 33.1562 38.4723 33.2968C38.5746 33.4374 38.6812 33.5749 38.7915 33.7087C38.9025 33.8431 39.0171 33.9731 39.1354 34.0999C39.2544 34.2268 39.3764 34.3499 39.5028 34.4687C39.6291 34.5881 39.7585 34.7031 39.8917 34.8143C40.0248 34.9249 40.1616 35.0318 40.3009 35.1343C40.4408 35.2362 40.5832 35.3343 40.7292 35.4274C40.8747 35.5212 41.0232 35.6099 41.1742 35.6937C41.3252 35.7781 41.4787 35.8574 41.6346 35.9318C41.7905 36.0062 41.9489 36.0756 42.1092 36.1399C42.2694 36.2049 42.4315 36.2643 42.5948 36.3187C42.7588 36.3724 42.9239 36.4218 43.091 36.4656C43.258 36.5099 43.4256 36.5481 43.5951 36.5818C43.764 36.6149 43.9341 36.6431 44.1054 36.6656C44.2761 36.6887 44.4475 36.7056 44.6194 36.7174C44.7914 36.7293 44.9633 36.7362 45.1359 36.7374C45.3085 36.7381 45.4804 36.7337 45.6524 36.7243C45.825 36.7143 45.9963 36.6993 46.1676 36.6787C46.339 36.6581 46.5091 36.6324 46.6786 36.6012C46.8481 36.5699 47.0169 36.5337 47.1839 36.4918C47.3516 36.4499 47.5174 36.4024 47.6819 36.3506C47.8465 36.2981 48.0092 36.2406 48.1701 36.1781C48.3309 36.1156 48.4899 36.0487 48.6465 35.9762C48.8036 35.9037 48.9577 35.8262 49.1099 35.7437C49.2622 35.6618 49.4119 35.5749 49.5586 35.4831C49.7053 35.3918 49.8489 35.2956 49.9901 35.1949C50.1312 35.0943 50.2686 34.9893 50.4036 34.8799C50.538 34.7712 50.6686 34.6574 50.7968 34.5399C50.9244 34.4224 51.0483 34.3012 51.1684 34.1756C51.2886 34.0506 51.4045 33.9218 51.5167 33.7887C51.6288 33.6562 51.7373 33.5206 51.8415 33.3812C51.945 33.2418 52.0449 33.0993 52.1404 32.9531C52.2353 32.8074 52.3259 32.6593 52.4122 32.5081C52.4985 32.3562 52.5798 32.2024 52.6569 32.0462C52.7333 31.8893 52.8054 31.7306 52.8726 31.5699C52.9398 31.4087 53.002 31.2456 53.0587 31.0812C53.116 30.9162 53.1678 30.7493 53.2146 30.5812C53.2621 30.4131 53.3034 30.2437 53.3404 30.0731C53.3767 29.9018 53.4082 29.7299 53.434 29.5574C53.4605 29.3849 53.4809 29.2112 53.4963 29.0374C53.5123 28.8631 53.5222 28.6887 53.5271 28.5137C53.532 28.3393 53.5314 28.1643 53.5253 27.9899C53.5197 27.8149 53.5086 27.6406 53.492 27.4668C53.4753 27.2931 53.4538 27.1193 53.4266 26.9468C53.3995 26.7743 53.3669 26.6031 53.3293 26.4324C53.2917 26.2618 53.2491 26.0924 53.2011 25.9243C53.153 25.7568 53.1 25.5906 53.0421 25.4256C52.9841 25.2612 52.9206 25.0987 52.8529 24.9381C52.7851 24.7774 52.7117 24.6193 52.6341 24.4631C52.5564 24.3074 52.4744 24.1537 52.3869 24.0031C52.3 23.8518 52.2082 23.7043 52.112 23.5593C52.0159 23.4137 51.9154 23.2718 51.8107 23.1331C51.7059 22.9943 51.5974 22.8593 51.484 22.7274C51.3712 22.5956 51.2541 22.4668 51.1333 22.3424C51.0119 22.2181 50.8874 22.0974 50.7592 21.9806C50.631 21.8637 50.4991 21.7512 50.3642 21.6431C50.2292 21.5343 50.0905 21.4306 49.9494 21.3306C49.8076 21.2306 49.6634 21.1356 49.5155 21.0449C49.3682 20.9543 49.2184 20.8681 49.0656 20.7868C48.9133 20.7056 48.758 20.6293 48.6009 20.5581C48.4437 20.4862 48.2847 20.4199 48.1232 20.3581C47.9617 20.2968 47.7984 20.2406 47.6339 20.1893C47.4693 20.1381 47.3029 20.0918 47.1353 20.0512C46.9676 20.0106 46.7994 19.9749 46.6293 19.9443C46.4598 19.9143 46.2891 19.8893 46.1177 19.8699C45.9464 19.8506 45.775 19.8362 45.6025 19.8281C45.4305 19.8193 45.2579 19.8156 45.086 19.8181C44.9134 19.8199 44.7415 19.8274 44.5695 19.8406C44.3976 19.8537 44.2262 19.8718 44.0555 19.8956C43.8848 19.9193 43.7147 19.9487 43.5458 19.9831L46.4838 27.7774C46.5152 27.8637 46.5374 27.9518 46.5516 28.0424C46.5658 28.1331 46.5713 28.2243 46.5676 28.3162C46.5645 28.4074 46.5522 28.4981 46.5313 28.5874C46.5103 28.6768 46.4813 28.7631 46.4437 28.8468C46.4062 28.9299 46.3612 29.0093 46.3082 29.0837C46.2558 29.1581 46.1966 29.2268 46.1307 29.2899C46.0647 29.3524 45.9932 29.4087 45.9168 29.4574C45.8398 29.5056 45.759 29.5468 45.6746 29.5793C45.5901 29.6118 45.5032 29.6362 45.4145 29.6518C45.3251 29.6674 45.2351 29.6743 45.1445 29.6718C45.0546 29.6699 44.9652 29.6587 44.8764 29.6387C44.7883 29.6187 44.7026 29.5906 44.6201 29.5537C44.5369 29.5168 44.4586 29.4718 44.384 29.4199C44.3101 29.3674 44.241 29.3081 44.1782 29.2418C44.1153 29.1762 44.0598 29.1043 44.0105 29.0274C43.9612 28.9506 43.9199 28.8693 43.8866 28.7843ZM20.0425 26.8706H11.8152C11.724 26.8706 11.6334 26.8799 11.544 26.8974C11.4547 26.9156 11.3678 26.9424 11.2833 26.9781C11.1989 27.0137 11.1188 27.0568 11.043 27.1081C10.9666 27.1599 10.8969 27.2181 10.8322 27.2837C10.7675 27.3493 10.7095 27.4206 10.659 27.4974C10.6085 27.5743 10.5653 27.6556 10.5308 27.7412C10.4957 27.8268 10.4692 27.9149 10.4513 28.0056C10.4334 28.0962 10.4248 28.1881 10.4248 28.2806C10.4248 28.3731 10.4334 28.4649 10.4513 28.5556C10.4692 28.6468 10.4957 28.7349 10.5308 28.8199C10.5653 28.9056 10.6085 28.9868 10.659 29.0637C10.7095 29.1412 10.7675 29.2124 10.8322 29.2774C10.8969 29.3431 10.9666 29.4018 11.043 29.4531C11.1188 29.5043 11.1989 29.5481 11.2833 29.5831C11.3678 29.6187 11.4547 29.6456 11.544 29.6637C11.6334 29.6818 11.724 29.6906 11.8152 29.6906H20.0425C19.9987 29.9487 19.9432 30.2043 19.8761 30.4568C19.8089 30.7099 19.73 30.9587 19.64 31.2043C19.55 31.4499 19.449 31.6906 19.3374 31.9262C19.2252 32.1624 19.1026 32.3924 18.9695 32.6168C18.8363 32.8412 18.6934 33.0587 18.5405 33.2699C18.3877 33.4806 18.2249 33.6837 18.0536 33.8799C17.8817 34.0756 17.7017 34.2624 17.5131 34.4412C17.3245 34.6199 17.1279 34.7893 16.9233 34.9493C16.7193 35.1093 16.5079 35.2599 16.2903 35.3999C16.0721 35.5406 15.8484 35.6706 15.6185 35.7893C15.3886 35.9087 15.1538 36.0168 14.9141 36.1143C14.6743 36.2112 14.4303 36.2968 14.1825 36.3712C13.9354 36.4456 13.6845 36.5074 13.4312 36.5581C13.1779 36.6087 12.9228 36.6474 12.6657 36.6743C12.4094 36.7006 12.1517 36.7156 11.8935 36.7174C11.6353 36.7199 11.3776 36.7099 11.12 36.6881C10.863 36.6662 10.6072 36.6324 10.3527 36.5868C10.0988 36.5406 9.84732 36.4831 9.59833 36.4131C9.34933 36.3437 9.10404 36.2624 8.86244 36.1693C8.62146 36.0768 8.38479 35.9731 8.15244 35.8581C7.9207 35.7431 7.69452 35.6174 7.47387 35.4812C7.25323 35.3449 7.03937 35.1981 6.83228 35.0418C6.62582 34.8856 6.42613 34.7199 6.23384 34.5443C6.04216 34.3693 5.8585 34.1856 5.68347 33.9931C5.50843 33.8006 5.34264 33.5999 5.1861 33.3924C5.02955 33.1843 4.88225 32.9693 4.74543 32.7474C4.60799 32.5256 4.48164 32.2974 4.36516 32.0637C4.24929 31.8299 4.1439 31.5912 4.0496 31.3474C3.95531 31.1037 3.8721 30.8556 3.80061 30.6043C3.72912 30.3524 3.66872 30.0981 3.62064 29.8412C3.57195 29.5837 3.53559 29.3249 3.51094 29.0643C3.48629 28.8037 3.47334 28.5424 3.47273 28.2806C3.47273 28.0181 3.48444 27.7562 3.50786 27.4949C3.53189 27.2337 3.56764 26.9737 3.6151 26.7162C3.66255 26.4581 3.72234 26.2031 3.79321 25.9506C3.86409 25.6981 3.94668 25.4499 4.04036 25.2049C4.13465 24.9606 4.23943 24.7206 4.3553 24.4862C4.47116 24.2512 4.59751 24.0231 4.73433 23.7999C4.87116 23.5774 5.01784 23.3612 5.17439 23.1524C5.33093 22.9437 5.49672 22.7424 5.67176 22.5493C5.84679 22.3562 6.03045 22.1712 6.22274 21.9956C6.41442 21.8193 6.61411 21.6531 6.82181 21.4956C7.02889 21.3387 7.24275 21.1918 7.46401 21.0549C7.68465 20.9181 7.91146 20.7918 8.14381 20.6762C8.37616 20.5606 8.61345 20.4562 8.85504 20.3631C9.09726 20.2699 9.34255 20.1887 9.59216 20.1187C9.84177 20.0487 10.0938 19.9906 10.3484 19.9449C10.6035 19.8987 10.8599 19.8643 11.1176 19.8424C11.3758 19.8206 11.634 19.8106 11.8929 19.8131C12.1517 19.8156 12.4094 19.8306 12.667 19.8574C12.9246 19.8837 13.1804 19.9231 13.4343 19.9737C13.6876 20.0249 13.9391 20.0874 14.1868 20.1618C14.4352 20.2368 14.6793 20.3231 14.9196 20.4206C15.16 20.5181 15.3948 20.6268 15.6253 20.7468C15.8552 20.8668 16.0795 20.9968 16.2977 21.1381C16.5165 21.2793 16.7273 21.4299 16.9319 21.5912C17.1365 21.7518 17.3331 21.9224 17.5217 22.1018C17.7103 22.2812 17.8909 22.4693 18.0622 22.6656C18.2336 22.8624 18.3957 23.0668 18.5485 23.2781C18.7014 23.4899 18.8443 23.7087 18.9769 23.9343C19.11 24.1593 19.232 24.3906 19.3436 24.6274C19.4551 24.8643 19.5556 25.1056 19.6449 25.3518C19.7343 25.5981 19.812 25.8481 19.8785 26.1018C19.9445 26.3556 19.9993 26.6118 20.0425 26.8706Z", fill: "white" })), eo = (i) => /* @__PURE__ */ q("svg", { preserveAspectRatio: "none", width: 123, height: 82, viewBox: "0 0 123 82", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M120.365 37.1527C122.774 39.152 122.774 42.848 120.365 44.8473L76.9935 80.8473C76.0961 81.5923 74.9664 82 73.8001 82L0 82L0 0L73.8001 0C74.9664 0 76.0961 0.407744 76.9935 1.15267L120.365 37.1527Z", fill: "currentColor" })), oh = (i, e) => {
  const [t, r] = M(i);
  return $(() => {
    const n = setTimeout(() => {
      r(i);
    }, e);
    return () => {
      clearTimeout(n);
    };
  }, [i, e]), t;
}, gs = (i) => /* @__PURE__ */ q("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("circle", { cx: 16, cy: 16, r: 16, fill: "#030712" }), /* @__PURE__ */ q("path", { d: "M15.6047 20.0343C15.1 20.0343 14.6794 19.6137 14.6794 19.109V18.7389C14.6121 16.7203 15.9748 15.8455 16.9673 15.2062C18.0439 14.5165 18.6495 14.0623 18.6495 12.8343C18.6495 11.2698 17.5056 10.2604 15.7393 10.2604C15.3187 10.2773 13.3505 10.496 13.3505 12.8175C13.3505 13.3221 12.9299 13.7427 12.4252 13.7427C11.9206 13.7427 11.5 13.3221 11.5 12.8175C11.5 9.4025 14.2589 8.44362 15.7056 8.40997H15.7224C18.5318 8.40997 20.5 10.2268 20.5 12.8343C20.5 15.1389 19.0364 16.081 17.9766 16.7707C16.9841 17.41 16.5131 17.7632 16.5467 18.6885C16.5467 18.7053 16.5467 18.7053 16.5467 18.7221V19.109C16.5299 19.6305 16.1093 20.0343 15.6047 20.0343Z", fill: "white" }), /* @__PURE__ */ q("path", { d: "M15.6887 23.5838C16.274 23.5838 16.7485 23.1093 16.7485 22.524C16.7485 21.9387 16.274 21.4642 15.6887 21.4642C15.1034 21.4642 14.6289 21.9387 14.6289 22.524C14.6289 23.1093 15.1034 23.5838 15.6887 23.5838Z", fill: "white" })), Br = (i) => /* @__PURE__ */ q("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("circle", { cx: 16, cy: 16, r: 16, fill: "#10B981" }), /* @__PURE__ */ q("path", { d: "M10.5261 17.6842L14.4467 21.1056L21.5366 11.2421", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), rn = (i) => /* @__PURE__ */ q("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("circle", { cx: 16, cy: 16, r: 16, fill: "#EF4444" }), /* @__PURE__ */ q("path", { d: "M10.913 21.0829L15.9959 16M15.9959 16L21.0789 10.9171M15.9959 16L21.0789 21.0829M15.9959 16L10.913 10.9171", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Lr = (i) => /* @__PURE__ */ q("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("circle", { cx: 16, cy: 16, r: 15.5, fill: "#F59E0B", stroke: "#F59E0B" }), /* @__PURE__ */ q("path", { d: "M18 23.9603C18 25.0648 17.1041 25.96 15.9997 25.96C14.8951 25.96 14 25.0648 14 23.9603C14 22.8548 14.8951 21.96 15.9997 21.96C17.1041 21.9602 18 22.8551 18 23.9603Z", fill: "white" }), /* @__PURE__ */ q("path", { d: "M18.222 8.13512C18.1818 7.67877 18.0044 7.24904 17.7339 6.89648C17.3204 6.35776 16.6887 5.99896 15.9949 6C15.3216 5.99917 14.7072 6.33675 14.2935 6.84864C14.0016 7.20973 13.8096 7.65776 13.7676 8.13512C13.7565 8.26117 13.7578 8.39783 13.7676 8.52034L14.6898 18.9815C14.7177 19.2972 14.8575 19.5762 15.0669 19.7837C15.3063 20.0211 15.6364 20.1652 15.9949 20.1648C16.3175 20.1652 16.6171 20.0483 16.8481 19.8522C17.0987 19.6396 17.2688 19.333 17.2998 18.9813L18.222 8.52013C18.232 8.39762 18.2331 8.26117 18.222 8.13512Z", fill: "white" })), Zr = {
  unavailable: {
    icon: gs,
    heading: "Compatibility Information Not Available",
    heading_code: "checksku_message_nocompatibilityinfo"
  },
  check: {
    icon: gs,
    heading: "Check Compatibility",
    heading_code: "productcheck_nobikeselected_label",
    details: "Add your ride to check if this part fits",
    details_code: "productcheck_nobikeselected_message"
  },
  compatible: {
    icon: Br,
    heading: "Compatible",
    heading_code: "compatible"
  },
  incompatible: {
    icon: rn,
    heading: "Not Compatible",
    heading_code: "not_compatible"
  },
  warning: {
    icon: Lr,
    heading: "Compatible - Check Notes",
    heading_code: "compatible_check_notes"
  }
};
function ah({
  type: i,
  onSelect: e,
  categoryId: t,
  removePart: r,
  notes: n,
  clearNotes: s,
  notesViewed: o,
  setNotesViewed: a
}) {
  var U;
  const u = window.BikeMatrix.getConfig(), c = new Be(u.apiUrl, u.apiKey, u.apiToken, u.isShopify), [d, f] = M(!1), h = Y(null), b = Y(null), m = Y(null), [x, w] = M(""), [g, v] = M(null), [y, _] = M([]), [A, D] = M(!1), [k, C] = M(""), S = oh(x, 500), [E, T] = M(!1), {
    t: F
  } = X(), P = async () => {
    D(!0);
    const j = await c.findProducts(x, t);
    j.success ? (D(!1), _(j.data)) : (D(!1), C(j.error), u.logLevel === "verbose" && console.error(j.logError));
  };
  $(() => {
    (S && !g && x.length > 2 || S && g && (g == null ? void 0 : g.display_Name) !== x) && P();
  }, [S]), $(() => {
    y.length > 0 && x.length > 2 && N();
  }, [y]);
  const z = (j) => {
    v(j), w(j.display_Name), e(j);
  };
  $(() => {
    g && x === g.display_Name && I();
  }, [x, g]);
  const N = () => {
    ee.to(h.current, {
      height: "auto"
    });
  }, I = () => {
    ee.to(h.current, {
      height: 0
    });
  }, L = () => {
    d && R(), w(""), _([]), I(), s();
  };
  $(() => {
    d || (v(null), r());
  }, [d]);
  const B = () => {
    ee.to(b.current, {
      transform: "translateY(112px)",
      duration: 1,
      onComplete: () => f(!0)
    });
  }, R = () => {
    ee.to(b.current, {
      transform: "translateY(0px)",
      duration: 1,
      onComplete: () => f(!1)
    });
  };
  return $(() => {
    i ? B() : !i && d && R();
  }, [i]), p(V, {
    children: [p("div", {
      className: "search-wrapper",
      children: [p("style", {
        type: "text/css",
        children: nh
      }), k && p(et, {
        messages: k
      }), p("div", {
        className: Z("compatibility-wrapper"),
        ref: m,
        style: {
          height: i === "warning" ? "140px" : "110px"
        },
        children: p("div", {
          className: Z("compatibility ", {
            compatible: "bg-emerald-50",
            incompatible: "bg-red-50",
            warning: "bg-amber-50",
            "no-information": "bg-white"
          }[i]),
          style: {
            borderColor: i === "compatible" ? "rgb(16 185 129)" : i == "incompatible" ? "rgb(239 68 68)" : i === "warning" ? "rgb(245 158 11)" : i === "no-information" ? "#000" : "transparent"
          },
          ref: b,
          children: [p("div", {
            className: Z("compatibility-contents"),
            children: [p(eo, {
              class: Z("self-start h-full w-[93px] polygon", {
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-500",
                "no-information": "text-black"
              }[i])
            }), p(Qs, {
              class: "h-[26px] w-[37.5px] absolute bikon"
            }), p("p", {
              className: Z("font-semibold text-lg ml-[105px]", {
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-950",
                "no-information": "text-black"
              }[i]),
              children: F((U = Zr[i]) == null ? void 0 : U.heading_code)
            }), i === "warning" && p("button", {
              className: "compatibility-warning_button",
              onClick: () => T(!0),
              children: "Notes"
            })]
          }), p("div", {
            className: Z("compatibility-background ", {
              compatible: "bg-emerald-500",
              incompatible: "bg-red-500",
              warning: "bg-amber-500",
              "no-information": "bg-black"
            }[i])
          })]
        })
      }), p("div", {
        className: Z("search_bar-wrapper text-lg", {
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
          children: [!A && p("div", {
            className: "svg-wrapper",
            children: p(sh, {})
          }), p(At, {
            isLoading: A,
            colour: "#000"
          }), p("input", {
            type: "text",
            placeholder: F("virtualworkshop_search_text"),
            value: x,
            onChange: (j) => w(j.currentTarget.value)
          })]
        }), p("div", {
          className: "svg-wrapper",
          onClick: L,
          children: p(hu, {})
        })]
      }), p("div", {
        className: "results-wrapper",
        ref: h,
        children: p("div", {
          className: "results text-lg",
          children: y && y.length > 0 ? y.map((j) => p("div", {
            className: "result",
            onClick: () => {
              z(j);
            },
            children: j.display_Name
          }, j.product_ID)) : p("div", {
            className: "result",
            children: F("error_find_products_no_results")
          })
        })
      })]
    }), p(Ys, {
      isOpen: E,
      toggleModal: () => T(!1),
      title: "Notes",
      onConfirm: () => {
        a(), T(!1);
      },
      onCancel: () => T(!1),
      children: p("div", {
        className: "notes-wrapper",
        children: [!!n.compatible && p("p", {
          class: "text-sm flex",
          children: [p(Br, {
            class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
          }), " ", n.compatible]
        }), p("p", {
          class: "text-sm flex",
          children: [p(Lr, {
            class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
          }), " ", n.warning]
        })]
      })
    })]
  });
}
function lh() {
  const {
    t: i
  } = X(), t = window.BikeMatrix.getConfig(), r = ln.value, n = Ce.value, s = new Be(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), {
    currentBike: o,
    setCurrentBike: a
  } = Ie(), [l, u] = M(!1), [c, d] = M(null), [f, h] = M(null), [b, m] = M(null), [x, w] = M({
    compatible: "",
    warning: ""
  }), [g, v] = M(!1);
  o.isShared && Q("/");
  const y = async () => {
    u(!0), Ks(), n[r.category.split(" ").join("_")][r.type.split(" ").join("_")] = {
      ...n[r.category.split(" ").join("_")][r.type.split(" ").join("_")],
      id: f.product_ID,
      name: f.display_Name,
      unsaved_changes: !0
    }, Ce.value = n;
    const A = await s.addComponent(o.key, f.product_Category_ID, f.product_ID, Zs[r.type.split(" ").join("_")]);
    if (A.success)
      a({
        ...o
      }), Q("/bom");
    else {
      m(A.error), u(!1), t.logLevel === "verbose" && console.error(A.logError);
      return;
    }
  }, _ = async (A) => {
    var D;
    if (w({
      compatible: "",
      warning: ""
    }), !A.skU_EAN && !A.skU_UPC && !A.manufacturer_Part_Number)
      d("no-information");
    else {
      h(A);
      const k = ((D = xr()) == null ? void 0 : D.language) || "en-GB", C = await s.checkSkuCompatibility(o.key, A.skU_EAN || A.skU_UPC || A.manufacturer_Part_Number, k);
      C.success || (t.logLevel === "verbose" && console.error(C.logError), m(C.error)), C.data.compatible && C.data.warning ? (v(!1), d("warning"), w({
        warning: C.data.warningMessage,
        compatible: C.data.compatibilityMessage
      })) : C.data.compatible ? (d("compatible"), v(!0)) : C.data.compatible || d("incompatible");
    }
  };
  return r ? p(V, {
    children: [p("div", {
      children: [o ? p(Qe, {
        bike: o,
        selected: !0,
        settings: !0
      }) : p(Or, {}), p("div", {
        className: "part-wrapper mt-8 mb-8",
        children: [p(yt, {
          text: r != null && r.type ? i("virtualworkshop_current") + " " + i(`category_${r.type.replace(/[ &]/g, "").toLocaleLowerCase()}`) + ":" : i(`category_${r.type.replace(/[ &]/g, "").toLocaleLowerCase()}`),
          bold: !0,
          capitalize: !0
        }), p(yt, {
          subheader: !0,
          text: r == null ? void 0 : r.part.name
        })]
      })]
    }), p(ah, {
      notes: x,
      onSelect: (A) => _(A),
      type: c,
      categoryId: r.part.product_category_id,
      clearNotes: () => w({
        compatible: "",
        warning: ""
      }),
      removePart: () => {
        d(null), h(null);
      },
      notesViewed: g,
      setNotesViewed: () => v(!0)
    }), p(et, {
      messages: b
    }), p(ut, {
      text: i("confirm"),
      onClick: y,
      primary: !0,
      disabled: c === "incompatible" || c === "no-information" || !g,
      loading: l
    }), p(Dt, {})]
  }) : p(V, {});
}
const uh = `.edit-field__wrapper{position:relative}.edit-container{display:flex;align-items:center;gap:1rem;margin-top:8px}.edit-input_wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:flex;align-items:center;height:54px;transition:ease-in-out all .5s}.edit-input_content{display:flex;gap:.5rem;cursor:pointer}.input-wrapper{width:100%}.edit-input{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.edit-input_content{width:100%;display:grid}.svg{width:20px;height:20px;cursor:pointer}.icon-wrapper{display:flex;align-items:center;gap:.25rem}.generic-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.edit-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.edit-button:hover{background-color:#000}.edit-button:hover svg{color:#fff}.edit-button:hover .label-wrapper{opacity:1;top:-32px}.edit-button:hover .tick{stroke:#fff}.edit-button svg{width:16px;height:16px}.tick{stroke:#000}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}.edit-open-wrapper{display:flex;gap:1rem}.notice{position:absolute;right:0;bottom:-20px}
`, ch = (i) => /* @__PURE__ */ q("svg", { width: 13, height: 13, viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M1.19739 8.1317L4.99549 11.4461L11.8639 1.8909", stroke: "currentColour", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), dh = (i) => /* @__PURE__ */ q("svg", { width: 16, height: 16, viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M1.71186 11C1.14322 11 0.714757 10.8578 0.426485 10.5733C0.142162 10.2889 0 9.86613 0 9.30512V2.85152C0 2.28656 0.142162 1.86382 0.426485 1.58332C0.714757 1.29886 1.14322 1.15663 1.71186 1.15663H8.12098L7.30355 1.97444H1.72371C1.43149 1.97444 1.2064 2.05148 1.04844 2.20557C0.894433 2.35965 0.817429 2.58879 0.817429 2.893V9.25771C0.817429 9.56192 0.894433 9.79106 1.04844 9.94514C1.2064 10.0992 1.43149 10.1763 1.72371 10.1763H8.2513C8.47639 10.1763 8.66001 10.0992 8.80217 9.94514C8.94828 9.79106 9.02134 9.56192 9.02134 9.25771V3.72859L9.83877 2.90485V9.30512C9.83877 9.86613 9.70055 10.2889 9.42413 10.5733C9.15165 10.8578 8.76663 11 8.26907 11H1.71186ZM3.80875 7.3317C3.76136 7.35541 3.71792 7.34553 3.67843 7.30207C3.63894 7.25861 3.63104 7.21318 3.65474 7.16577L4.13453 6.16425L9.35305 0.943291L10.0757 1.65443L4.85126 6.87539L3.80875 7.3317ZM10.4785 1.25738L9.76176 0.534386L10.1527 0.143259C10.2396 0.0563415 10.3403 0.0089322 10.4548 0.00103064C10.5693 -0.00687092 10.668 0.0306615 10.751 0.113628L10.8694 0.232151C10.9603 0.323019 11.0037 0.425739 10.9998 0.540312C10.9998 0.654885 10.9543 0.761556 10.8635 0.860325L10.4785 1.25738Z", fill: "currentColor" })), Ca = ({
  value: i,
  onSave: e,
  loading: t,
  label: r,
  success: n,
  error: s
}) => {
  const {
    t: o
  } = X(), [a, l] = M(!1), [u, c] = M(i), d = Y(null), f = Y(null), [h, b] = M({
    type: "",
    message: ""
  }), [m, x] = M(!1), w = () => {
    const v = ee.timeline();
    v.to(f.current, {
      opacity: 0
    }), v.to(f.current, {
      width: "124px"
    }), v.to(f.current, {
      onStart: () => l(!0),
      opacity: 1
    });
  }, g = () => {
    const v = ee.timeline();
    v.to(f.current, {
      opacity: 0
    }), v.to(f.current, {
      width: "54px"
    }), v.to(f.current, {
      onStart: () => {
        l(!1);
      },
      opacity: 1
    });
  };
  return $(() => {
    a && d.current.focus();
  }, [a]), $(() => {
    n ? (g(), b({
      type: "success",
      message: o("virtualworkshop_saved", {
        label: r
      })
    })) : !n && n !== null && (g(), b({
      type: "error",
      message: s
    }));
  }, [n]), p("div", {
    className: "edit-field__wrapper",
    children: [p("style", {
      type: "text/css",
      children: uh
    }), r && p("label", {
      class: "text-gray-800 font-bold text",
      children: r
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
            onChange: (v) => c(v.currentTarget.value),
            value: u,
            ref: d,
            onKeyDown: (v) => {
              v.key === "Enter" && e(u);
            }
          })
        }), !a && p("div", {
          className: "edit-input_content",
          children: p("p", {
            className: "generic-text",
            children: i
          })
        })]
      }), p("div", {
        className: "edit-save-cancel-wrapper",
        ref: f,
        children: [!a && p("div", {
          className: "edit-button",
          onClick: w,
          children: [p("div", {
            className: "label-wrapper",
            children: p("div", {
              className: "button-label",
              children: o("edit")
            })
          }), p(dh, {})]
        }), a && p("div", {
          className: "edit-open-wrapper",
          onMouseOver: () => x(!0),
          onMouseLeave: () => x(!1),
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
            }), t ? p(At, {
              isLoading: t,
              colour: m ? "#fff" : "#000"
            }) : p(ch, {
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
            }), p(ai, {})]
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
}, ph = `.copy-share_wrapper{display:flex;align-items:center;gap:1rem;margin-top:8px}.value-wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:grid;height:54px}.generic-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.share-button,.copy-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.share-button:hover,.copy-button:hover{background-color:#000}.share-button:hover svg,.copy-button:hover svg{color:#fff}.share-button:hover .label-wrapper,.copy-button:hover .label-wrapper{opacity:1;top:-32px}.share-button svg,.copy-button svg{width:16px}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}
`, fh = (i) => /* @__PURE__ */ q("svg", { width: 22, height: 27, viewBox: "0 0 22 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M5.23701 5.89236V3.30519C5.23701 2.21106 5.51143 1.38666 6.06029 0.831997C6.61677 0.277332 7.43624 0 8.51871 0H12.738C13.2717 0 13.7481 0.0759814 14.1674 0.227944C14.5942 0.379907 14.9906 0.638244 15.3565 1.00295L20.9938 6.71296C21.3825 7.10806 21.6455 7.51836 21.7827 7.94386C21.9276 8.36176 22 8.87083 22 9.47108V18.3837C22 19.4778 21.7256 20.3022 21.1767 20.8569C20.6355 21.404 19.8198 21.6775 18.7297 21.6775H16.4314V20.1047H18.6497C19.2367 20.1047 19.6788 19.9527 19.9761 19.6488C20.2734 19.3449 20.422 18.9118 20.422 18.3495V9.0152H15.1965C14.6019 9.0152 14.1559 8.87463 13.8586 8.5935C13.5613 8.30477 13.4127 7.85268 13.4127 7.23723V1.58421H8.59875C8.01178 1.58421 7.56583 1.73618 7.26091 2.0401C6.96362 2.34403 6.81497 2.77712 6.81497 3.33938V5.89236H5.23701ZM14.8534 7.02068C14.8534 7.40059 15.044 7.59054 15.4252 7.59054H19.999L14.8534 2.39341V7.02068ZM0 23.6948V8.61629C0 7.52216 0.274428 6.70156 0.823285 6.1545C1.37214 5.59983 2.1878 5.3225 3.27027 5.3225H7.13514C7.71448 5.3225 8.18711 5.38328 8.55301 5.50485C8.92654 5.62642 9.30769 5.88476 9.69647 6.27986L15.8025 12.4686C16.2065 12.8789 16.4695 13.2664 16.5915 13.6311C16.7134 13.9958 16.7744 14.5049 16.7744 15.1583V23.6948C16.7744 24.7889 16.5 25.6133 15.9511 26.168C15.4023 26.7227 14.5866 27 13.5042 27H3.27027C2.1878 27 1.37214 26.7227 0.823285 26.168C0.274428 25.6133 0 24.7889 0 23.6948ZM1.5894 23.6606C1.5894 24.2305 1.73423 24.6636 2.02391 24.9599C2.32121 25.2638 2.75953 25.4158 3.33888 25.4158H13.4127C13.9997 25.4158 14.4418 25.2638 14.7391 24.9599C15.044 24.6636 15.1965 24.2305 15.1965 23.6606V15.1811H9.01039C8.36244 15.1811 7.87457 15.0215 7.54678 14.7024C7.21899 14.3833 7.05509 13.8932 7.05509 13.2322V6.90671H3.35031C2.77096 6.90671 2.33264 7.05867 2.03534 7.3626C1.73805 7.65893 1.5894 8.08442 1.5894 8.63909V23.6606ZM9.18191 13.7108H14.8763L8.54158 7.29422V13.0612C8.54158 13.2892 8.59113 13.4563 8.69023 13.5627C8.79695 13.6615 8.96085 13.7108 9.18191 13.7108Z", fill: "currentColor" })), hh = (i) => /* @__PURE__ */ q("svg", { width: 16, height: 21.6, viewBox: "0 0 20 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M3.58702 27C2.40708 27 1.51426 26.682 0.908555 26.046C0.302851 25.4184 0 24.4812 0 23.2343V11.4728C0 10.2176 0.302851 9.27615 0.908555 8.64854C1.51426 8.01255 2.40708 7.69456 3.58702 7.69456H6.89086V9.82845H3.66962C3.13471 9.82845 2.72566 9.97908 2.44248 10.2803C2.15929 10.5732 2.0177 11.0209 2.0177 11.6234V23.0837C2.0177 23.6695 2.15929 24.113 2.44248 24.4142C2.72566 24.7155 3.13471 24.8661 3.66962 24.8661H16.3422C16.8692 24.8661 17.2783 24.7155 17.5693 24.4142C17.8604 24.113 18.0059 23.6695 18.0059 23.0837V11.6234C18.0059 11.0209 17.8604 10.5732 17.5693 10.2803C17.2783 9.97908 16.8692 9.82845 16.3422 9.82845H13.1209V7.69456H16.413C17.6087 7.69456 18.5054 8.01255 19.1032 8.64854C19.7011 9.28452 20 10.2259 20 11.4728V23.2343C20 24.4812 19.7011 25.4184 19.1032 26.046C18.5054 26.682 17.6087 27 16.413 27H3.58702ZM10.0059 17.6109C9.73845 17.6109 9.51032 17.5105 9.32153 17.3096C9.13274 17.1088 9.03835 16.8745 9.03835 16.6067V4.53138L9.10914 2.76151L8.38938 3.62762L6.77286 5.46025C6.5998 5.66946 6.37955 5.77406 6.11209 5.77406C5.86037 5.77406 5.65192 5.69038 5.48673 5.52301C5.3294 5.34728 5.25074 5.13389 5.25074 4.88285C5.25074 4.6318 5.3412 4.41004 5.52212 4.21757L9.28614 0.351464C9.40413 0.225941 9.52212 0.138075 9.64012 0.0878661C9.75811 0.0292887 9.88004 0 10.0059 0C10.1318 0 10.2498 0.0292887 10.3599 0.0878661C10.4779 0.138075 10.5959 0.225941 10.7139 0.351464L14.4779 4.21757C14.6667 4.41004 14.7611 4.6318 14.7611 4.88285C14.7611 5.13389 14.6745 5.34728 14.5015 5.52301C14.3363 5.69038 14.1318 5.77406 13.8879 5.77406C13.6205 5.77406 13.4041 5.66946 13.2389 5.46025L11.6106 3.62762L10.8909 2.77406L10.9735 4.53138V16.6067C10.9735 16.8745 10.8751 17.1088 10.6785 17.3096C10.4897 17.5105 10.2655 17.6109 10.0059 17.6109Z", fill: "currentColor" })), Aa = ({
  text: i,
  onShare: e,
  label: t,
  onCopy: r
}) => {
  const {
    t: n
  } = X(), [s, o] = M(n("virtualworkshop_copy"));
  return p("div", {
    children: [p("style", {
      type: "text/css",
      children: ph
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
            children: n("share")
          })
        }), p(hh, {})]
      }), p("div", {
        className: "copy-button",
        onClick: () => {
          r(i), o("Copied");
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
        }), p(fh, {})]
      })]
    })]
  });
}, gh = `.question-button{display:flex;justify-content:center;align-items:center;background-color:#000;border-radius:100%;height:31px;width:31px;color:#fff;position:absolute;top:36px;right:1.5rem;cursor:pointer}@media screen and (max-width: 639px){.question-button{top:24px;right:32px}}
`, Iu = (i) => /* @__PURE__ */ q("svg", { width: 8, height: 14, viewBox: "0 0 8 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ q("path", { d: "M2.80272 10.0382V9.95794C2.81179 9.1058 2.90249 8.42766 3.07483 7.92352C3.24717 7.41938 3.49206 7.01115 3.80952 6.69885C4.12698 6.38655 4.50794 6.09879 4.95238 5.83556C5.21995 5.67495 5.46032 5.48534 5.67347 5.26673C5.88662 5.04366 6.05442 4.78713 6.17687 4.49713C6.30385 4.20714 6.36735 3.88591 6.36735 3.53346C6.36735 3.09624 6.26304 2.71702 6.05442 2.39579C5.8458 2.07457 5.56689 1.82696 5.21769 1.65296C4.86848 1.47897 4.48073 1.39197 4.05442 1.39197C3.68254 1.39197 3.32426 1.46781 2.97959 1.6195C2.63492 1.77119 2.34694 2.00988 2.11565 2.33556C1.88435 2.66125 1.75057 3.08732 1.71429 3.61377H0C0.0362812 2.85532 0.235828 2.20618 0.598639 1.66635C0.965986 1.12651 1.44898 0.71383 2.04762 0.428298C2.65079 0.142766 3.31973 0 4.05442 0C4.85261 0 5.54649 0.15615 6.13605 0.468451C6.73016 0.780752 7.18821 1.20905 7.5102 1.75335C7.83673 2.29764 8 2.91778 8 3.61377C8 4.10453 7.9229 4.54844 7.76871 4.94551C7.61905 5.34257 7.40136 5.69726 7.11565 6.00956C6.83447 6.32186 6.49433 6.59847 6.09524 6.83939C5.69615 7.08477 5.37642 7.34353 5.13605 7.61568C4.89569 7.88336 4.72109 8.20236 4.61224 8.57266C4.5034 8.94296 4.44444 9.40472 4.43537 9.95794V10.0382H2.80272ZM3.67347 14C3.33787 14 3.04989 13.8818 2.80952 13.6453C2.56916 13.4089 2.44898 13.1256 2.44898 12.7954C2.44898 12.4653 2.56916 12.182 2.80952 11.9455C3.04989 11.7091 3.33787 11.5908 3.67347 11.5908C4.00907 11.5908 4.29705 11.7091 4.53741 11.9455C4.77778 12.182 4.89796 12.4653 4.89796 12.7954C4.89796 13.014 4.84127 13.2148 4.72789 13.3977C4.61905 13.5806 4.47166 13.7279 4.28571 13.8394C4.10431 13.9465 3.90023 14 3.67347 14Z", fill: "white" })), mh = ({
  onClick: i
}) => p(V, {
  children: [p("style", {
    type: "text/css",
    children: gh
  }), p("div", {
    className: "question-button",
    onClick: i,
    children: p(Iu, {})
  })]
});
function bh() {
  const i = Ce.value, t = window.BikeMatrix.getConfig(), {
    currentBike: r,
    saveBike: n
  } = Ie(), [s, o] = M(i == null ? void 0 : i.owner_Email_Address), [a, l] = M(!1), [u, c] = M(null), [d, f] = M(null), [h, b] = M(r.name), [m, x] = M(null), [w, g] = M(null), [v, y] = M(null), _ = new Be(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), {
    t: A
  } = X(), D = async (C, S) => {
    if (S === "name") {
      b(C), x(!0), g(null), y(null);
      const E = await _.updateCustomBikeName(r.key, C);
      n({
        ...r,
        name: C
      }), x(!1), E.success ? g(!0) : (y(E.error), t.logLevel === "verbose" && console.error(E.logError));
    }
    if (S === "email") {
      o(C), l(!0), c(null), f(null);
      const E = await _.saveCustomBike(r.key, C);
      l(!1), E.success ? c(!0) : (c(!1), f(E.error), t.logLevel === "verbose" && console.error(E.logError));
    }
  }, k = (C) => {
    navigator.share({
      title: A("virtualworkshop_settings_id"),
      text: C,
      url: window.location.href
    }).then(() => console.log("Successful share! 🎉")).catch((S) => console.error(S));
  };
  return i ? p(V, {
    children: [p(mh, {
      onClick: () => Q("/quick-guide")
    }), p("div", {
      className: "mb-4",
      children: r ? p(Qe, {
        bike: r,
        selected: !0,
        simple: !0
      }) : p(Or, {})
    }), p("div", {
      className: "flex flex-col gap-4",
      children: [p(Ca, {
        value: h,
        onSave: (C) => D(C, "name"),
        loading: m,
        label: A("virtualworkshop_settings_bike_name"),
        success: w,
        error: v
      }), (i == null ? void 0 : i.owner_Email_Address) && p(Ca, {
        value: s,
        onSave: (C) => D(C, "email"),
        loading: a,
        label: A("virtualworkshop_settings_email"),
        success: u,
        error: d
      }), p(Aa, {
        label: A("virtualworkshop_settings_id"),
        text: r.key,
        onCopy: (C) => navigator.clipboard.writeText(C)
      }), p(Aa, {
        label: A("virtualworkshop_settings_share_id"),
        text: r.shareId,
        onShare: (C) => k(C),
        onCopy: (C) => navigator.clipboard.writeText(C)
      })]
    }), p(Dt, {})]
  }) : p(V, {});
}
function vh() {
  const e = window.BikeMatrix.getConfig();
  $(() => {
    it.value.back = "/";
  }, []);
  const t = new Be(e.apiUrl, e.apiKey, e.apiToken, e.isShopify), {
    currentBike: r
  } = Ie(), [n, s] = M(null), [o, a] = M(""), l = async () => {
    const u = await t.getBikeBom(r.key);
    if (!u.success)
      a(u.error), e.logLevel === "verbose" && console.error(u.logError);
    else {
      const c = Er(u.data);
      s(c), Ce.value = c;
    }
  };
  return $(() => {
    l();
  }, []), p(V, {
    children: [p("div", {
      className: "mb-4",
      children: [n ? p(Qe, {
        bike: n,
        readOnly: !0,
        shared: !0
      }) : p(Or, {}), p("div", {
        class: "mt-4 mb-8",
        children: p(vu, {
          categorisedBOM: n,
          readOnly: !0
        })
      })]
    }), o, p(Dt, {})]
  });
}
const wh = `.onboarding-content-wrapper{display:flex;flex-direction:column;gap:1rem;padding-left:1rem;padding-right:1rem}@media screen and (max-width: 639px){.onboarding-content-wrapper{padding:0}}
`, xh = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}.card-image-wrapper{border:1px solid #d4d4d4;border-radius:8px;overflow:hidden;width:100%;margin-bottom:1rem}.card-image-wrapper img{width:100%;height:auto}.card-content{color:#000;font-size:16px}
`, yh = ({
  title: i,
  content: e,
  src: t,
  svg: r
}) => p(bu, {
  title: i,
  children: [p("style", {
    type: "text/css",
    children: xh
  }), p("div", {
    className: "card-image-wrapper",
    children: p("img", {
      src: t
    })
  }), p("div", {
    className: "card-content",
    children: e
  })]
}), _h = () => {
  const {
    t: i
  } = X();
  return p(V, {
    children: [p("style", {
      type: "text/css",
      children: wh
    }), p("div", {
      className: "onboarding",
      children: p("div", {
        className: "onboarding-content-wrapper",
        children: wu.map((e, t) => p(yh, {
          title: e.number + ". " + i(`${e.title}`),
          src: e.image,
          svg: e.svg,
          content: i(`${e.content}`)
        }, t))
      })
    })]
  });
};
function Ch() {
  return p("div", {
    className: "quick-guide-page",
    children: [p(_h, {}), p(Dt, {})]
  });
}
const ms = De("/"), Q = (i) => {
  const e = ms.peek();
  ms.value = i, Ru({
    previous: e,
    path: i
  });
}, to = [{
  title: "bikeselector_home_title",
  component: J2,
  path: "/"
}, {
  title: "bikeselector_addbike_title",
  component: tf,
  path: "/add"
}, {
  title: "bikeselector_search_title",
  component: rf,
  path: "/search"
}, {
  title: "bikeselector_size_title",
  component: nf,
  path: "/size"
}, {
  title: "bikeselector_confirm_title",
  component: of,
  path: "/confirm"
}, {
  title: "bikeselector_browse_title",
  component: af,
  path: "/browse"
}, {
  title: "virtualworkshop_title",
  component: lf,
  path: "/workshop"
}, {
  title: "virtualworkshop_title",
  component: rh,
  path: "/bom"
}, {
  title: "virtualworkshop_title",
  component: ih,
  path: "/part"
}, {
  title: "virtualworkshop_title",
  component: lh,
  path: "/update"
}, {
  title: "virtualworkshop_title",
  component: bh,
  path: "/settings"
}, {
  title: "virtualworkshop_bom_title",
  component: vh,
  path: "/read-only"
}, {
  title: "Virtual Workshop — Quick Guide",
  component: Ch,
  path: "/quick-guide"
}], In = to.map((i) => i.path), Ru = (i) => {
  let e;
  const t = In.indexOf(i.path), r = to[t], n = In.slice(1, 5).indexOf(r.path);
  t && (e = In[t - 1]), i.previous === "/" && i.path === "/browse" && (e = "/"), i.previous === "/" && i.path === "/workshop" && (e = "/"), i.path === "/settings" && (e = "/bom"), i.path === "/quick-guide" && (e = "/settings"), it.value = {
    title: r.title,
    step: n > -1 ? n : void 0,
    back: e
  };
};
function Ah() {
  const e = at(() => to.reduce((t, r) => (t[r.path] = r.component, t), {}), [])[ms.value];
  return $(() => {
    Ru({
      path: "/"
    });
  }, []), p(e, {});
}
const ro = `@import"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-2{right:-8px}.-top-2{top:-8px}.bottom-0{bottom:0}.bottom-10{bottom:40px}.bottom-14{bottom:56px}.bottom-4{bottom:16px}.bottom-6{bottom:24px}.bottom-\\[128px\\]{bottom:128px}.bottom-\\[72px\\]{bottom:72px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:16px}.right-0{right:0}.right-3{right:12px}.right-4{right:16px}.right-5{right:20px}.top-0{top:0}.top-1\\/2{top:50%}.top-4{top:16px}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-\\[2147483645\\]{z-index:2147483645}.z-\\[2147483646\\]{z-index:2147483646}.\\!my-0{margin-top:0!important;margin-bottom:0!important}.-mx-8{margin-left:-32px;margin-right:-32px}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:4px;margin-bottom:4px}.my-5{margin-top:20px;margin-bottom:20px}.my-6{margin-top:24px;margin-bottom:24px}.my-\\[2px\\]{margin-top:2px;margin-bottom:2px}.my-px{margin-top:1px;margin-bottom:1px}.\\!ml-0{margin-left:0!important}.\\!ml-auto{margin-left:auto!important}.-mb-3{margin-bottom:-12px}.-mt-2{margin-top:-8px}.-mt-5{margin-top:-20px}.mb-4{margin-bottom:16px}.mb-6{margin-bottom:24px}.mb-8{margin-bottom:32px}.ml-2{margin-left:8px}.ml-\\[105px\\]{margin-left:105px}.ml-auto{margin-left:auto}.mr-\\[6px\\]{margin-right:6px}.mt-1{margin-top:4px}.mt-2{margin-top:8px}.mt-4{margin-top:16px}.mt-6{margin-top:24px}.mt-8{margin-top:32px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-0{height:0px}.h-10{height:40px}.h-2{height:8px}.h-20{height:80px}.h-3{height:12px}.h-32{height:128px}.h-4{height:16px}.h-40{height:160px}.h-5{height:20px}.h-6{height:24px}.h-7{height:28px}.h-8{height:32px}.h-9{height:36px}.h-\\[10px\\]{height:10px}.h-\\[18px\\]{height:18px}.h-\\[1px\\]{height:1px}.h-\\[26px\\]{height:26px}.h-\\[6px\\]{height:6px}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-36{max-height:144px}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.w-1\\/2{width:50%}.w-10{width:40px}.w-2{width:8px}.w-3{width:12px}.w-4{width:16px}.w-5{width:20px}.w-6{width:24px}.w-7{width:28px}.w-8{width:32px}.w-9{width:36px}.w-\\[100px\\]{width:100px}.w-\\[25px\\]{width:25px}.w-\\[37\\.5px\\]{width:37.5px}.w-\\[48px\\]{width:48px}.w-\\[93px\\]{width:93px}.w-\\[calc\\(100\\%_\\+_64px\\)\\]{width:calc(100% + 64px)}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.min-w-0{min-width:0px}.max-w-\\[220px\\]{max-width:220px}.max-w-full{max-width:100%}.max-w-lg{max-width:512px}.max-w-sm{max-width:384px}.flex-none{flex:none}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[20\\%\\]{--tw-translate-x: -20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-px{--tw-translate-x: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/3{--tw-translate-y: -33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/3{--tw-translate-x: 33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-px{--tw-translate-x: 1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-125{--tw-scale-x: 1.25;--tw-scale-y: 1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-center{scroll-snap-align:center}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:4px}.gap-2{gap:8px}.gap-3{gap:12px}.gap-4{gap:16px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(8px * var(--tw-space-x-reverse));margin-left:calc(8px * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(8px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(8px * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(12px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(12px * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(16px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(16px * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(20px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(20px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-nowrap{text-wrap:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-xl{border-radius:12px}.rounded-b-lg{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.rounded-t-3xl{border-top-left-radius:24px;border-top-right-radius:24px}.rounded-t-xl{border-top-left-radius:12px;border-top-right-radius:12px}.border{border-width:1px}.border-b-0{border-bottom-width:0px}.border-amber-500{--tw-border-opacity: 1;border-color:rgb(245 158 11 / var(--tw-border-opacity))}.border-emerald-500{--tw-border-opacity: 1;border-color:rgb(16 185 129 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-gray-950{--tw-border-opacity: 1;border-color:rgb(3 7 18 / var(--tw-border-opacity))}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity))}.bg-amber-500{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-black\\/40{background-color:#0006}.bg-emerald-50{--tw-bg-opacity: 1;background-color:rgb(236 253 245 / var(--tw-bg-opacity))}.bg-emerald-500{--tw-bg-opacity: 1;background-color:rgb(16 185 129 / var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-400\\/50{background-color:#9ca3af80}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-950{--tw-bg-opacity: 1;background-color:rgb(3 7 18 / var(--tw-bg-opacity))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/75{background-color:#ffffffbf}.p-0{padding:0}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.px-4{padding-left:16px;padding-right:16px}.px-8{padding-left:32px;padding-right:32px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.\\!pr-8{padding-right:32px!important}.pl-1{padding-left:4px}.pl-3{padding-left:12px}.pr-3{padding-right:12px}.pr-5{padding-right:20px}.pr-6{padding-right:24px}.pt-4{padding-top:16px}.text-center{text-align:center}.text-start{text-align:start}.font-nunito{font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-base{font-size:16px;line-height:24px}.text-lg{font-size:18px;line-height:28px}.text-sm{font-size:14px;line-height:20px}.text-xl{font-size:20px;line-height:28px}.text-xs{font-size:12px;line-height:16px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-\\[18px\\]{line-height:18px}.leading-\\[22px\\]{line-height:22px}.leading-tight{line-height:1.25}.text-amber-500{--tw-text-opacity: 1;color:rgb(245 158 11 / var(--tw-text-opacity))}.text-amber-950{--tw-text-opacity: 1;color:rgb(69 26 3 / var(--tw-text-opacity))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-emerald-500{--tw-text-opacity: 1;color:rgb(16 185 129 / var(--tw-text-opacity))}.text-emerald-950{--tw-text-opacity: 1;color:rgb(2 44 34 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-950{--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-950{--tw-text-opacity: 1;color:rgb(69 10 10 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-30{opacity:.3}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_-2px_10px_0px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\,0px_0px_0px_1px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\]{--tw-shadow: 0px -2px 10px 0px rgba(0,0,0,.04),0px 0px 0px 1px rgba(0,0,0,.06);--tw-shadow-colored: 0px -2px 10px 0px var(--tw-shadow-color), 0px 0px 0px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.bike-matrix-container{width:100%}@media (min-width: 640px){.bike-matrix-container{max-width:640px}}@media (min-width: 768px){.bike-matrix-container{max-width:768px}}@media (min-width: 1024px){.bike-matrix-container{max-width:1024px}}@media (min-width: 1280px){.bike-matrix-container{max-width:1280px}}@media (min-width: 1536px){.bike-matrix-container{max-width:1536px}}:root,:host{all:initial!important;font-size:16px!important;width:100%}input,select,button{outline:2px solid transparent;outline-offset:2px}h1,h2,h3,h4,h5,h6,label,button{margin-top:0;margin-bottom:0;font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h1,h2,h3,h4,h5,h6{font-weight:700;--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}h1,h2,h3,h4,h5,h6,label,button,p,a,div{font-family:Nunito,sans-serif}select{appearance:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}select::-ms-expand{display:none}.loader{border-radius:100%;border-top:4px solid rgba(3,7,18,.2);border-right:4px solid rgba(3,7,18,.2);border-bottom:4px solid rgba(3,7,18,.2);border-left:4px solid rgb(3,7,18)}*::-webkit-scrollbar{height:12px;width:12px}*::-webkit-scrollbar-track{border-radius:12px;margin-block:8px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:active{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb{border-radius:8px;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb:hover{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}@media not all and (min-width: 640px){*::-webkit-scrollbar{display:none}.modal-content{-ms-overflow-style:none;scrollbar-width:none}}@media only screen and (max-width: 450px){.compatibility-label-container .status{padding:7px 2px}}.placeholder\\:text-gray-700::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.placeholder\\:text-gray-700::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-inset-x-px:after{content:var(--tw-content);left:-1px;right:-1px}.after\\:-top-6:after{content:var(--tw-content);top:-24px}.after\\:bottom-0:after{content:var(--tw-content);bottom:0}.after\\:bg-gradient-to-t:after{content:var(--tw-content);background-image:linear-gradient(to top,var(--tw-gradient-stops))}.after\\:from-white:after{content:var(--tw-content);--tw-gradient-from: #fff var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:to-transparent:after{content:var(--tw-content);--tw-gradient-to: transparent var(--tw-gradient-to-position)}.disabled\\:border-gray-200:disabled{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.disabled\\:bg-gray-100:disabled{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.disabled\\:text-gray-400:disabled{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.group:disabled .group-disabled\\:border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.group:disabled .group-disabled\\:bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.group:disabled .group-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.peer:disabled~.peer-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media not all and (min-width: 640px){.max-sm\\:absolute{position:absolute}.max-sm\\:inset-0{top:0;right:0;bottom:0;left:0}.max-sm\\:h-\\[89vh\\]{height:89vh}.max-sm\\:max-h-\\[96\\%\\]{max-height:96%}.max-sm\\:flex-1{flex:1 1 0%}.max-sm\\:flex-none{flex:none}.max-sm\\:grow{flex-grow:1}}@media (max-width: 426px){.max-\\[426px\\]\\:w-\\[21px\\]{width:21px}.max-\\[426px\\]\\:w-\\[38px\\]{width:38px}.max-\\[426px\\]\\:text-xs{font-size:12px;line-height:16px}}@media (min-width: 640px){.sm\\:mt-8{margin-top:32px}.sm\\:hidden{display:none}.sm\\:h-full{height:100%}.sm\\:max-h-\\[90\\%\\]{max-height:90%}.sm\\:max-w-\\[640px\\]{max-width:640px}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:justify-center{justify-content:center}.sm\\:rounded-xl{border-radius:12px}.sm\\:px-2{padding-left:8px;padding-right:8px}.sm\\:px-6{padding-left:24px;padding-right:24px}}.\\[\\&\\>path\\]\\:stroke-\\[2px\\]>path{stroke-width:2px}.\\[\\&\\>span\\]\\:font-normal>span{font-weight:400}.\\[\\&\\>span\\]\\:text-gray-500>span{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}
`;
function Dh() {
  return $(() => {
    const i = document.createElement("link");
    i.type = "text/css", i.rel = "stylesheet", i.href = "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap", document.head.appendChild(i);
  }, []), p(V, {
    children: [p("style", {
      type: "text/css",
      children: ro
    }), p(j2, {
      children: [p("div", {
        onClick: Sr,
        style: {
          right: "-36px",
          top: "-24px"
        },
        class: "w-7 h-7 z-10 flex items-center justify-center absolute bg-white text-gray-800 rounded-full cursor-pointer",
        children: p(ai, {
          class: "h-3 w-3"
        })
      }), p(K2, {
        children: p(sf, {
          children: p(Ah, {})
        })
      })]
    })]
  });
}
const kh = (i) => /* @__PURE__ */ q("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 500, zoomAndPan: "magnify", viewBox: "0 0 375 374.999991", height: 500, preserveAspectRatio: "xMidYMid meet", ...i }, /* @__PURE__ */ q("path", { fill: "#000000", d: "M 151.4375 131.65625 L 210.511719 259.050781 C 210.511719 252.984375 210.105469 242.875 210.105469 230.335938 L 197.160156 117.5 C 168.835938 117.90625 151.4375 131.65625 151.4375 131.65625 Z M 225.484375 117.097656 C 218.605469 116.691406 212.128906 116.691406 206.464844 117.097656 L 212.941406 181.804688 C 214.960938 160.773438 219.007812 138.125 225.484375 117.097656 Z M 80.222656 227.101562 C 90.746094 230.335938 101.265625 233.976562 113 238.425781 C 113 238.425781 146.988281 255.816406 173.285156 266.734375 L 104.097656 179.78125 C 93.980469 194.746094 86.292969 211.328125 80.222656 227.101562 Z M 35.714844 287.363281 C 37.738281 276.441406 40.167969 265.117188 43.808594 254.601562 C 34.90625 252.984375 26.003906 251.773438 17.507812 250.960938 C 21.957031 263.90625 28.433594 276.039062 35.714844 287.363281 Z M 195.945312 276.039062 C 195.945312 276.039062 204.441406 278.867188 208.488281 274.417969 L 142.535156 138.125 C 131.207031 146.621094 121.089844 156.324219 112.1875 167.648438 L 191.898438 274.417969 C 193.519531 275.230469 194.730469 275.632812 195.945312 276.039062 Z M 365.480469 146.214844 C 359.816406 122.351562 349.296875 100.109375 335.539062 81.101562 C 343.632812 101.726562 352.128906 124.375 358.199219 140.148438 C 360.625 141.765625 363.457031 144.191406 365.480469 146.214844 Z M 356.175781 170.886719 C 339.179688 157.539062 322.996094 147.023438 307.214844 138.933594 L 244.90625 157.539062 L 232.363281 189.085938 C 230.339844 208.902344 228.71875 233.976562 230.339844 254.601562 C 230.339844 254.601562 233.980469 294.640625 219.414062 299.496094 C 219.414062 299.496094 203.632812 314.863281 163.574219 295.855469 C 163.574219 295.855469 121.898438 274.015625 70.109375 260.265625 C 62.015625 291 59.992188 314.457031 59.992188 316.480469 C 92.363281 349.644531 138.085938 369.867188 188.257812 369.867188 C 288.605469 369.867188 370.335938 288.171875 370.335938 187.871094 C 370.335938 185.847656 370.335938 183.828125 370.335938 181.804688 C 363.054688 183.019531 356.175781 170.886719 356.175781 170.886719 Z M 233.980469 95.257812 C 237.621094 86.761719 242.476562 78.675781 247.332031 71.394531 C 247.332031 71.394531 261.089844 49.960938 281.726562 31.761719 C 254.617188 15.582031 222.246094 5.875 188.257812 5.875 C 87.507812 5.875 6.179688 87.570312 6.179688 187.871094 C 6.179688 197.578125 6.988281 206.476562 8.203125 215.371094 C 22.363281 215.777344 38.144531 217.394531 55.542969 220.628906 C 66.0625 195.152344 75.773438 177.761719 75.773438 177.761719 C 75.773438 177.761719 124.328125 87.976562 233.980469 95.257812 Z M 236.8125 147.429688 L 240.453125 146.214844 L 250.972656 120.332031 C 248.546875 119.925781 246.925781 119.523438 244.5 119.117188 C 241.261719 127.609375 238.429688 137.316406 236.8125 147.429688 Z M 259.066406 121.949219 L 250.164062 143.789062 L 292.648438 132.867188 C 281.320312 128.015625 269.992188 124.375 259.066406 121.949219 Z M 272.015625 76.25 C 266.347656 82.71875 260.683594 90 255.425781 98.085938 C 275.65625 101.726562 293.054688 106.582031 308.027344 112.242188 Z M 340.800781 128.015625 L 314.902344 57.238281 C 311.261719 53.601562 307.621094 50.363281 303.980469 47.128906 C 295.886719 52.792969 287.390625 59.667969 278.894531 68.160156 L 323.804688 119.117188 C 330.28125 122.351562 336.347656 125.589844 340.800781 128.015625 Z M 340.800781 128.015625 ", fillOpacity: 1, fillRule: "nonzero" }));
function Sh({
  "data-sku": i,
  "data-padding-top": e,
  "data-padding-bottom": t
}) {
  var y;
  const r = window.BikeMatrix, n = r.getConfig(), [s, o] = M({}), [a, l] = M(!1), [u, c] = M({
    compatible: "",
    warning: ""
  }), {
    t: d
  } = X(), [f, h] = M(!1), b = i || n.sku, [m, x] = M(null);
  if (i === "*")
    return n.logLevel === "verbose" && console.log("Early return as prouduct is blacklisted"), p(V, {});
  n.internalLink && x(n.internalLink);
  const w = at(() => Ze.value || f, [Ze.value, f]), g = !!r.getActiveSubscription(), v = async () => {
    var A, D, k, C, S, E, T;
    if (h(!0), c({
      compatible: "",
      warning: ""
    }), l(!1), n.logLevel === "verbose" && (console.log("ProductResult updateCompatibility config: " + JSON.stringify(n)), console.log("ProductResult updateCompatibility BikeSignal.value: " + JSON.stringify(K.value))), K.value) {
      for (let F = 0; F < n.productCollections.length; F++)
        if (!((D = (A = K.value) == null ? void 0 : A.compatibleCollections) != null && D.error) && ((C = (k = K.value) == null ? void 0 : k.compatibleCollections) != null && C.find((P) => P.handle === n.productCollections[F]))) {
          l(!0);
          break;
        }
    } else
      for (let F = 0; F < n.productCollections.length; F++)
        if ((S = n == null ? void 0 : n.collections) != null && S.map((P) => P.handle).includes(n == null ? void 0 : n.productCollections[F])) {
          l(!0);
          break;
        }
    if (K.value) {
      if (b == "") {
        o({
          type: "unavailable",
          ...Zr.unavailable
        }), h(!1);
        return;
      }
      var _ = ((E = xr()) == null ? void 0 : E.language) || "en-GB";
      const P = await new Be(n.apiUrl, n.apiKey, n.apiToken, n.isShopify).checkSkuCompatibility((T = K.value) == null ? void 0 : T.key, b, _);
      if (h(!1), !P.success) {
        n.logLevel === "verbose" && console.error(P.logError), o({
          type: "unavailable",
          ...Zr.unavailable
        });
        return;
      }
      const z = (P == null ? void 0 : P.data.compatible) === null ? "unavailable" : P.data.warning ? "warning" : P != null && P.data.compatible ? "compatible" : "incompatible";
      c({
        warning: P.data.warningMessage,
        compatible: P.data.compatibilityMessage
      }), o({
        type: z,
        ...Zr[z]
      });
    } else
      h(!1), o({
        type: "check",
        ...Zr.check
      });
  };
  return $(() => {
    v();
  }, [K.value, b]), $(() => (document.addEventListener("RefreshCompatibility", v), () => {
    document.removeEventListener("RefreshCompatibility", v);
  }), []), !g || !w && !(s != null && s.type) || !a ? p(V, {}) : p(V, {
    children: [p("style", {
      type: "text/css",
      children: ro
    }), p("div", {
      class: "flex flex-col relative w-full mx-auto",
      style: {
        marginTop: `${e}px`,
        marginBottom: `${t}px`
      },
      children: [p("div", {
        // todo: check if there's any state that we don't want it to toggle and then remove the check
        onClick: (_) => {
          _.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
            bubbles: !0,
            composed: !0
          }));
        },
        class: Z("rounded-lg relative z-20 border overflow-hidden w-full flex cursor-pointer", w ? "bg-gray-100 border-gray-300 text-gray-950" : {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          check: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[s.type]),
        children: w ? p("span", {
          class: "loader self-center animate-spin justify-self-center justify-center w-9 my-5 mx-auto h-9",
          style: {
            borderWidth: "6px"
          }
        }) : p(V, {
          children: [p("div", {
            class: "relative z-10 h-auto items-center justify-center flex",
            children: [p(eo, {
              class: Z("self-start h-full w-[93px]", {
                unavailable: "text-gray-950",
                check: "text-gray-950",
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-500"
              }[s.type])
            }), p(Qs, {
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
                children: s != null && s.details_code ? d(s == null ? void 0 : s.details_code) : (y = K.value) == null ? void 0 : y.name
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
            children: [p(Br, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
            }), " ", u.compatible]
          }), !!u.warning && p("p", {
            class: "text-sm flex",
            children: [p(Lr, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
            }), " ", u.warning]
          })]
        }), p("a", {
          class: "flex text-xs self-end font-semibold items-center underline ml-auto",
          href: m || "https://bikematrix.io/landed-it",
          target: "_blank",
          children: [d("bikematrix_poweredby"), " ", p(kh, {
            class: "w-5 h-5 ml-2"
          })]
        })]
      }), !w && p(s.icon, {
        class: "absolute top-0 z-30 right-0 w-6 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  });
}
const Eh = `.wrapper{position:relative}.bm_collection_result{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.4rem;position:relative;margin-left:auto;margin-right:auto;font-size:14px;text-align:left;height:100%;line-height:1.3em}.bm_collection_result_iconLabel{display:inline-block;position:relative}.bm_collection_result_link{text-align:right;font-weight:500;font-size:.6em;margin-top:1px;text-decoration:underline;color:#000}.bm_collection_result_link:visited{color:#000}.bm_collection_result p{display:inline;padding:1px;margin:0;color:#000}.bm_collection_result_icon{padding:0 .1rem 0 0;position:absolute;left:-24px;top:-.25rem}.bm-hidden{display:none}.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`, Da = {
  unavailable: {
    icon: gs,
    heading: "",
    code: ""
  },
  compatible: {
    icon: Br,
    heading: "Compatible",
    code: "compatible"
  },
  warning: {
    icon: Lr,
    heading: "Compatible",
    code: "compatible"
  },
  incompatible: {
    icon: rn,
    heading: "Not Compatible",
    code: "not_compatible"
  }
};
function zu({
  "data-type": i
}) {
  var r;
  const e = Da[i], {
    t
  } = X();
  return e ? p(V, {
    children: [p("style", {
      type: "text/css",
      children: ro
    }), p("div", {
      class: "flex z-0 flex-col relative  w-full mx-auto compatibility-label-container max-w-[220px]",
      children: [p("div", {
        class: Z("rounded-lg relative z-20 border overflow-hidden w-full flex", {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[i]),
        children: [p("div", {
          class: "relative z-10 h-auto items-center justify-center flex",
          children: [p(eo, {
            class: Z("self-start h-full w-[48px] max-[426px]:w-[38px]", {
              unavailable: "text-gray-950",
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-500"
            }[i])
          }), p(Qs, {
            class: "h-[18px] max-[426px]:w-[21px] w-[25px] absolute -translate-x-[20%]"
          })]
        }), p("div", {
          class: "status flex flex-col p-2 pl-1 w-full",
          children: p("p", {
            class: "max-[426px]:text-xs text-sm font-semibold p-0 leading-[18px] text-center",
            children: t((r = Da[i]) == null ? void 0 : r.code)
          })
        })]
      }), p(e.icon, {
        class: "absolute top-0 z-30 right-0 w-4 h-4 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  }) : p(V, {});
}
const ur = {
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
let Ge = {
  type: "unavailable",
  heading: ""
};
const Bh = async (i, e, t, r) => {
  var l;
  if (!t || !((l = fr.value) != null && l.length)) {
    Ge = {
      type: "unavailable",
      ...ur.unavailable
    };
    return;
  }
  let n = [];
  for (const u of t.split(",").filter((c) => !!c)) {
    const c = fr.value.find((d) => d.sku === u.trim());
    n.push(c);
  }
  const s = n.some((u) => (u == null ? void 0 : u.compatible) === !0 && !(u != null && u.warning)), o = n.some((u) => (u == null ? void 0 : u.compatible) === !0 && (u == null ? void 0 : u.warning)), a = n.some((u) => (u == null ? void 0 : u.compatible) === !1);
  s ? Ge = {
    type: "compatible",
    ...ur.compatible
  } : o ? Ge = {
    type: "warning",
    ...ur.warning
  } : a ? Ge = {
    type: "incompatible",
    ...ur.incompatible
  } : Ge = {
    type: "unavailable",
    ...ur.unavailable
  }, r === "verbose" && console.log("checkCollectionResult prodcutId: " + e + " bikeKey: " + i + " sku: " + t + " status: " + Ge.type);
}, Lh = function(i, e, t, r, n, s, o) {
  var l;
  const a = window.BikeMatrix.getConfig();
  if (i || e) {
    if ((i && t || e && r) && a.productsCollections[s]) {
      for (let u = 0; u < a.productsCollections[s].length; u++)
        if (a.collections.map((c) => c.handle).includes(a.productsCollections[s][u]))
          return !0;
    }
  } else
    return n ? !1 : !!K.value && !K.value.compatibleCollections.error && ((l = K.value.compatibleCollections) == null ? void 0 : l.find((c) => c.handle === o));
  return !1;
};
function Th({
  "data-product-id": i,
  "data-product-skus": e,
  "data-product-barcodes": t,
  "data-product-metafields": r
}) {
  const n = window.BikeMatrix, s = n.getConfig(), [o, a] = M(!1), l = !!n.getActiveSubscription();
  Ge = {
    type: "unavailable",
    ...ur.unavailable
  };
  const {
    currentCollectionHandle: u,
    isHomePage: c,
    isSearchPage: d,
    showSearchPageCollection: f,
    showHomePageCollection: h,
    logLevel: b,
    skuField: m
  } = s, x = !!s.pageType && s.pageType === "product", w = m === "barcode" ? t : m === "metafield" ? r : e || "";
  return b === "verbose" && (console.log("CollectionResult currentCollectionHandle: ", u), console.log("CollectionResult skuField: ", m), console.log("CollectionResult productId: ", i), console.log("CollectionResult skusToCheck: ", w), console.log("CollectionResult BikeSignal.value: " + JSON.stringify(K.value))), Ze.value ? a(!0) : K.value && Lh(c, d, h, f, x, i, u) ? Bh(K.value.key, i, w, s.logLevel).then(() => {
    a(!0);
  }) : a(!1), b === "verbose" && console.log("CollectionResult status: ", Ge), p(V, {
    children: l && o && p(V, {
      children: [p("style", {
        type: "text/css",
        children: Eh
      }), p("div", {
        class: "bm_collection_result bm-wrapper",
        children: [p("div", {
          class: "lds-ring",
          id: "bm-loading-spinner",
          style: Ze.value ? "" : "display: none",
          children: [p("div", {}), p("div", {}), p("div", {}), p("div", {})]
        }), !Ze.value && (Ge == null ? void 0 : Ge.type) !== "unavailable" && p(zu, {
          "data-type": Ge.type
        })]
      })]
    })
  });
}
const Fh = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.bm-compatible-products-wrapper{display:block;width:100%;border-top:.5px solid lightgrey;border-bottom:.5px solid lightgrey;margin-top:10px}.bm-compatible-products-title>div{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none;display:flex;align-items:center;justify-content:space-between;padding:8px 0}.bm-compatible-products-title>div>span{font-weight:700}.bm-compatible-products-title svg{height:24px;width:24px;transition:transform .3s linear}.bm-compatible-products-title div.active svg{transform:rotate(180deg)}.bm-compatible-products-list{width:100%;max-width:100%;display:none;overflow:hidden}.bm-compatible-products-list ul{display:grid;gap:20px;grid-template-columns:repeat(4,minmax(0,1fr));padding:0;list-style:none}@media only screen and (max-width: 1000px){.bm-compatible-products-list ul{grid-template-columns:repeat(3,minmax(0,1fr))}}@media only screen and (max-width: 600px){.bm-compatible-products-list ul{gap:10px;grid-template-columns:repeat(2,minmax(0,1fr))}}.bm-compatible-products-list ul li{width:100%;display:flex}.bm-compatible-product-wrapper{display:block;width:100%;border:1px solid lightgrey;padding:5px;display:flex;flex-flow:column;flex:1}.bm-compatible-product-image{display:block;width:100%;max-width:100%;line-height:1;padding-top:100%;position:relative;margin-bottom:5px;overflow:hidden}.bm-compatible-product-image a,.bm-compatible-product-image a:hover,.bm-compatible-product-image a:focus{display:block;width:100%;max-width:100%;outline:none;text-decoration:none;width:auto;height:auto;line-height:1;border:none;border-radius:0}.bm-compatible-product-image img{display:inline-block;vertical-align:top;width:100%;max-width:100%;height:auto;line-height:1;position:absolute;left:0;right:0;bottom:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;top:50%;transform:translateY(-50%)}.bm-compatible-product-title{text-align:center;margin:0 0 1em;display:flex;flex-flow:column;flex:1}.bm-compatible-product-title a,.bm-compatible-product-title a:hover,.bm-compatible-product-title a:focus{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none}.bm-compatible-product-price{text-align:center;margin:0 0 1em}.bm-compatible-product-price p{font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;color:rgb(var(--text-color));padding:0;margin:0}.bm-compatible-product-price p strong{font-size:1.2em}.bm-compatible-product-compatibility{text-align:center;margin:0 .25em 1em}@media only screen and (max-width: 450px){.bm-compatible-product-compatibility{margin:0 0 1em}}.bm_result_link{justify-content:center;text-align:right;text-decoration:underline;font-size:12px;padding:10px 0}.bm_result_link a{text-align:right;font-weight:700;margin-top:10px;color:#000}
`;
var nn = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
nn.exports;
(function(i, e) {
  (function(t) {
    var r = e, n = i && i.exports == r && i, s = typeof mn == "object" && mn;
    (s.global === s || s.window === s) && (t = s);
    var o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, a = /[\x01-\x7F]/g, l = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, u = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, c = { "­": "shy", "‌": "zwnj", "‍": "zwj", "‎": "lrm", "⁣": "ic", "⁢": "it", "⁡": "af", "‏": "rlm", "​": "ZeroWidthSpace", "⁠": "NoBreak", "̑": "DownBreve", "⃛": "tdot", "⃜": "DotDot", "	": "Tab", "\n": "NewLine", " ": "puncsp", " ": "MediumSpace", " ": "thinsp", " ": "hairsp", " ": "emsp13", " ": "ensp", " ": "emsp14", " ": "emsp", " ": "numsp", " ": "nbsp", "  ": "ThickSpace", "‾": "oline", _: "lowbar", "‐": "dash", "–": "ndash", "—": "mdash", "―": "horbar", ",": "comma", ";": "semi", "⁏": "bsemi", ":": "colon", "⩴": "Colone", "!": "excl", "¡": "iexcl", "?": "quest", "¿": "iquest", ".": "period", "‥": "nldr", "…": "mldr", "·": "middot", "'": "apos", "‘": "lsquo", "’": "rsquo", "‚": "sbquo", "‹": "lsaquo", "›": "rsaquo", '"': "quot", "“": "ldquo", "”": "rdquo", "„": "bdquo", "«": "laquo", "»": "raquo", "(": "lpar", ")": "rpar", "[": "lsqb", "]": "rsqb", "{": "lcub", "}": "rcub", "⌈": "lceil", "⌉": "rceil", "⌊": "lfloor", "⌋": "rfloor", "⦅": "lopar", "⦆": "ropar", "⦋": "lbrke", "⦌": "rbrke", "⦍": "lbrkslu", "⦎": "rbrksld", "⦏": "lbrksld", "⦐": "rbrkslu", "⦑": "langd", "⦒": "rangd", "⦓": "lparlt", "⦔": "rpargt", "⦕": "gtlPar", "⦖": "ltrPar", "⟦": "lobrk", "⟧": "robrk", "⟨": "lang", "⟩": "rang", "⟪": "Lang", "⟫": "Rang", "⟬": "loang", "⟭": "roang", "❲": "lbbrk", "❳": "rbbrk", "‖": "Vert", "§": "sect", "¶": "para", "@": "commat", "*": "ast", "/": "sol", undefined: null, "&": "amp", "#": "num", "%": "percnt", "‰": "permil", "‱": "pertenk", "†": "dagger", "‡": "Dagger", "•": "bull", "⁃": "hybull", "′": "prime", "″": "Prime", "‴": "tprime", "⁗": "qprime", "‵": "bprime", "⁁": "caret", "`": "grave", "´": "acute", "˜": "tilde", "^": "Hat", "¯": "macr", "˘": "breve", "˙": "dot", "¨": "die", "˚": "ring", "˝": "dblac", "¸": "cedil", "˛": "ogon", "ˆ": "circ", "ˇ": "caron", "°": "deg", "©": "copy", "®": "reg", "℗": "copysr", "℘": "wp", "℞": "rx", "℧": "mho", "℩": "iiota", "←": "larr", "↚": "nlarr", "→": "rarr", "↛": "nrarr", "↑": "uarr", "↓": "darr", "↔": "harr", "↮": "nharr", "↕": "varr", "↖": "nwarr", "↗": "nearr", "↘": "searr", "↙": "swarr", "↝": "rarrw", "↝̸": "nrarrw", "↞": "Larr", "↟": "Uarr", "↠": "Rarr", "↡": "Darr", "↢": "larrtl", "↣": "rarrtl", "↤": "mapstoleft", "↥": "mapstoup", "↦": "map", "↧": "mapstodown", "↩": "larrhk", "↪": "rarrhk", "↫": "larrlp", "↬": "rarrlp", "↭": "harrw", "↰": "lsh", "↱": "rsh", "↲": "ldsh", "↳": "rdsh", "↵": "crarr", "↶": "cularr", "↷": "curarr", "↺": "olarr", "↻": "orarr", "↼": "lharu", "↽": "lhard", "↾": "uharr", "↿": "uharl", "⇀": "rharu", "⇁": "rhard", "⇂": "dharr", "⇃": "dharl", "⇄": "rlarr", "⇅": "udarr", "⇆": "lrarr", "⇇": "llarr", "⇈": "uuarr", "⇉": "rrarr", "⇊": "ddarr", "⇋": "lrhar", "⇌": "rlhar", "⇐": "lArr", "⇍": "nlArr", "⇑": "uArr", "⇒": "rArr", "⇏": "nrArr", "⇓": "dArr", "⇔": "iff", "⇎": "nhArr", "⇕": "vArr", "⇖": "nwArr", "⇗": "neArr", "⇘": "seArr", "⇙": "swArr", "⇚": "lAarr", "⇛": "rAarr", "⇝": "zigrarr", "⇤": "larrb", "⇥": "rarrb", "⇵": "duarr", "⇽": "loarr", "⇾": "roarr", "⇿": "hoarr", "∀": "forall", "∁": "comp", "∂": "part", "∂̸": "npart", "∃": "exist", "∄": "nexist", "∅": "empty", "∇": "Del", "∈": "in", "∉": "notin", "∋": "ni", "∌": "notni", "϶": "bepsi", "∏": "prod", "∐": "coprod", "∑": "sum", "+": "plus", "±": "pm", "÷": "div", "×": "times", "<": "lt", "≮": "nlt", "<⃒": "nvlt", "=": "equals", "≠": "ne", "=⃥": "bne", "⩵": "Equal", ">": "gt", "≯": "ngt", ">⃒": "nvgt", "¬": "not", "|": "vert", "¦": "brvbar", "−": "minus", "∓": "mp", "∔": "plusdo", "⁄": "frasl", "∖": "setmn", "∗": "lowast", "∘": "compfn", "√": "Sqrt", "∝": "prop", "∞": "infin", "∟": "angrt", "∠": "ang", "∠⃒": "nang", "∡": "angmsd", "∢": "angsph", "∣": "mid", "∤": "nmid", "∥": "par", "∦": "npar", "∧": "and", "∨": "or", "∩": "cap", "∩︀": "caps", "∪": "cup", "∪︀": "cups", "∫": "int", "∬": "Int", "∭": "tint", "⨌": "qint", "∮": "oint", "∯": "Conint", "∰": "Cconint", "∱": "cwint", "∲": "cwconint", "∳": "awconint", "∴": "there4", "∵": "becaus", "∶": "ratio", "∷": "Colon", "∸": "minusd", "∺": "mDDot", "∻": "homtht", "∼": "sim", "≁": "nsim", "∼⃒": "nvsim", "∽": "bsim", "∽̱": "race", "∾": "ac", "∾̳": "acE", "∿": "acd", "≀": "wr", "≂": "esim", "≂̸": "nesim", "≃": "sime", "≄": "nsime", "≅": "cong", "≇": "ncong", "≆": "simne", "≈": "ap", "≉": "nap", "≊": "ape", "≋": "apid", "≋̸": "napid", "≌": "bcong", "≍": "CupCap", "≭": "NotCupCap", "≍⃒": "nvap", "≎": "bump", "≎̸": "nbump", "≏": "bumpe", "≏̸": "nbumpe", "≐": "doteq", "≐̸": "nedot", "≑": "eDot", "≒": "efDot", "≓": "erDot", "≔": "colone", "≕": "ecolon", "≖": "ecir", "≗": "cire", "≙": "wedgeq", "≚": "veeeq", "≜": "trie", "≟": "equest", "≡": "equiv", "≢": "nequiv", "≡⃥": "bnequiv", "≤": "le", "≰": "nle", "≤⃒": "nvle", "≥": "ge", "≱": "nge", "≥⃒": "nvge", "≦": "lE", "≦̸": "nlE", "≧": "gE", "≧̸": "ngE", "≨︀": "lvnE", "≨": "lnE", "≩": "gnE", "≩︀": "gvnE", "≪": "ll", "≪̸": "nLtv", "≪⃒": "nLt", "≫": "gg", "≫̸": "nGtv", "≫⃒": "nGt", "≬": "twixt", "≲": "lsim", "≴": "nlsim", "≳": "gsim", "≵": "ngsim", "≶": "lg", "≸": "ntlg", "≷": "gl", "≹": "ntgl", "≺": "pr", "⊀": "npr", "≻": "sc", "⊁": "nsc", "≼": "prcue", "⋠": "nprcue", "≽": "sccue", "⋡": "nsccue", "≾": "prsim", "≿": "scsim", "≿̸": "NotSucceedsTilde", "⊂": "sub", "⊄": "nsub", "⊂⃒": "vnsub", "⊃": "sup", "⊅": "nsup", "⊃⃒": "vnsup", "⊆": "sube", "⊈": "nsube", "⊇": "supe", "⊉": "nsupe", "⊊︀": "vsubne", "⊊": "subne", "⊋︀": "vsupne", "⊋": "supne", "⊍": "cupdot", "⊎": "uplus", "⊏": "sqsub", "⊏̸": "NotSquareSubset", "⊐": "sqsup", "⊐̸": "NotSquareSuperset", "⊑": "sqsube", "⋢": "nsqsube", "⊒": "sqsupe", "⋣": "nsqsupe", "⊓": "sqcap", "⊓︀": "sqcaps", "⊔": "sqcup", "⊔︀": "sqcups", "⊕": "oplus", "⊖": "ominus", "⊗": "otimes", "⊘": "osol", "⊙": "odot", "⊚": "ocir", "⊛": "oast", "⊝": "odash", "⊞": "plusb", "⊟": "minusb", "⊠": "timesb", "⊡": "sdotb", "⊢": "vdash", "⊬": "nvdash", "⊣": "dashv", "⊤": "top", "⊥": "bot", "⊧": "models", "⊨": "vDash", "⊭": "nvDash", "⊩": "Vdash", "⊮": "nVdash", "⊪": "Vvdash", "⊫": "VDash", "⊯": "nVDash", "⊰": "prurel", "⊲": "vltri", "⋪": "nltri", "⊳": "vrtri", "⋫": "nrtri", "⊴": "ltrie", "⋬": "nltrie", "⊴⃒": "nvltrie", "⊵": "rtrie", "⋭": "nrtrie", "⊵⃒": "nvrtrie", "⊶": "origof", "⊷": "imof", "⊸": "mumap", "⊹": "hercon", "⊺": "intcal", "⊻": "veebar", "⊽": "barvee", "⊾": "angrtvb", "⊿": "lrtri", "⋀": "Wedge", "⋁": "Vee", "⋂": "xcap", "⋃": "xcup", "⋄": "diam", "⋅": "sdot", "⋆": "Star", "⋇": "divonx", "⋈": "bowtie", "⋉": "ltimes", "⋊": "rtimes", "⋋": "lthree", "⋌": "rthree", "⋍": "bsime", "⋎": "cuvee", "⋏": "cuwed", "⋐": "Sub", "⋑": "Sup", "⋒": "Cap", "⋓": "Cup", "⋔": "fork", "⋕": "epar", "⋖": "ltdot", "⋗": "gtdot", "⋘": "Ll", "⋘̸": "nLl", "⋙": "Gg", "⋙̸": "nGg", "⋚︀": "lesg", "⋚": "leg", "⋛": "gel", "⋛︀": "gesl", "⋞": "cuepr", "⋟": "cuesc", "⋦": "lnsim", "⋧": "gnsim", "⋨": "prnsim", "⋩": "scnsim", "⋮": "vellip", "⋯": "ctdot", "⋰": "utdot", "⋱": "dtdot", "⋲": "disin", "⋳": "isinsv", "⋴": "isins", "⋵": "isindot", "⋵̸": "notindot", "⋶": "notinvc", "⋷": "notinvb", "⋹": "isinE", "⋹̸": "notinE", "⋺": "nisd", "⋻": "xnis", "⋼": "nis", "⋽": "notnivc", "⋾": "notnivb", "⌅": "barwed", "⌆": "Barwed", "⌌": "drcrop", "⌍": "dlcrop", "⌎": "urcrop", "⌏": "ulcrop", "⌐": "bnot", "⌒": "profline", "⌓": "profsurf", "⌕": "telrec", "⌖": "target", "⌜": "ulcorn", "⌝": "urcorn", "⌞": "dlcorn", "⌟": "drcorn", "⌢": "frown", "⌣": "smile", "⌭": "cylcty", "⌮": "profalar", "⌶": "topbot", "⌽": "ovbar", "⌿": "solbar", "⍼": "angzarr", "⎰": "lmoust", "⎱": "rmoust", "⎴": "tbrk", "⎵": "bbrk", "⎶": "bbrktbrk", "⏜": "OverParenthesis", "⏝": "UnderParenthesis", "⏞": "OverBrace", "⏟": "UnderBrace", "⏢": "trpezium", "⏧": "elinters", "␣": "blank", "─": "boxh", "│": "boxv", "┌": "boxdr", "┐": "boxdl", "└": "boxur", "┘": "boxul", "├": "boxvr", "┤": "boxvl", "┬": "boxhd", "┴": "boxhu", "┼": "boxvh", "═": "boxH", "║": "boxV", "╒": "boxdR", "╓": "boxDr", "╔": "boxDR", "╕": "boxdL", "╖": "boxDl", "╗": "boxDL", "╘": "boxuR", "╙": "boxUr", "╚": "boxUR", "╛": "boxuL", "╜": "boxUl", "╝": "boxUL", "╞": "boxvR", "╟": "boxVr", "╠": "boxVR", "╡": "boxvL", "╢": "boxVl", "╣": "boxVL", "╤": "boxHd", "╥": "boxhD", "╦": "boxHD", "╧": "boxHu", "╨": "boxhU", "╩": "boxHU", "╪": "boxvH", "╫": "boxVh", "╬": "boxVH", "▀": "uhblk", "▄": "lhblk", "█": "block", "░": "blk14", "▒": "blk12", "▓": "blk34", "□": "squ", "▪": "squf", "▫": "EmptyVerySmallSquare", "▭": "rect", "▮": "marker", "▱": "fltns", "△": "xutri", "▴": "utrif", "▵": "utri", "▸": "rtrif", "▹": "rtri", "▽": "xdtri", "▾": "dtrif", "▿": "dtri", "◂": "ltrif", "◃": "ltri", "◊": "loz", "○": "cir", "◬": "tridot", "◯": "xcirc", "◸": "ultri", "◹": "urtri", "◺": "lltri", "◻": "EmptySmallSquare", "◼": "FilledSmallSquare", "★": "starf", "☆": "star", "☎": "phone", "♀": "female", "♂": "male", "♠": "spades", "♣": "clubs", "♥": "hearts", "♦": "diams", "♪": "sung", "✓": "check", "✗": "cross", "✠": "malt", "✶": "sext", "❘": "VerticalSeparator", "⟈": "bsolhsub", "⟉": "suphsol", "⟵": "xlarr", "⟶": "xrarr", "⟷": "xharr", "⟸": "xlArr", "⟹": "xrArr", "⟺": "xhArr", "⟼": "xmap", "⟿": "dzigrarr", "⤂": "nvlArr", "⤃": "nvrArr", "⤄": "nvHarr", "⤅": "Map", "⤌": "lbarr", "⤍": "rbarr", "⤎": "lBarr", "⤏": "rBarr", "⤐": "RBarr", "⤑": "DDotrahd", "⤒": "UpArrowBar", "⤓": "DownArrowBar", "⤖": "Rarrtl", "⤙": "latail", "⤚": "ratail", "⤛": "lAtail", "⤜": "rAtail", "⤝": "larrfs", "⤞": "rarrfs", "⤟": "larrbfs", "⤠": "rarrbfs", "⤣": "nwarhk", "⤤": "nearhk", "⤥": "searhk", "⤦": "swarhk", "⤧": "nwnear", "⤨": "toea", "⤩": "tosa", "⤪": "swnwar", "⤳": "rarrc", "⤳̸": "nrarrc", "⤵": "cudarrr", "⤶": "ldca", "⤷": "rdca", "⤸": "cudarrl", "⤹": "larrpl", "⤼": "curarrm", "⤽": "cularrp", "⥅": "rarrpl", "⥈": "harrcir", "⥉": "Uarrocir", "⥊": "lurdshar", "⥋": "ldrushar", "⥎": "LeftRightVector", "⥏": "RightUpDownVector", "⥐": "DownLeftRightVector", "⥑": "LeftUpDownVector", "⥒": "LeftVectorBar", "⥓": "RightVectorBar", "⥔": "RightUpVectorBar", "⥕": "RightDownVectorBar", "⥖": "DownLeftVectorBar", "⥗": "DownRightVectorBar", "⥘": "LeftUpVectorBar", "⥙": "LeftDownVectorBar", "⥚": "LeftTeeVector", "⥛": "RightTeeVector", "⥜": "RightUpTeeVector", "⥝": "RightDownTeeVector", "⥞": "DownLeftTeeVector", "⥟": "DownRightTeeVector", "⥠": "LeftUpTeeVector", "⥡": "LeftDownTeeVector", "⥢": "lHar", "⥣": "uHar", "⥤": "rHar", "⥥": "dHar", "⥦": "luruhar", "⥧": "ldrdhar", "⥨": "ruluhar", "⥩": "rdldhar", "⥪": "lharul", "⥫": "llhard", "⥬": "rharul", "⥭": "lrhard", "⥮": "udhar", "⥯": "duhar", "⥰": "RoundImplies", "⥱": "erarr", "⥲": "simrarr", "⥳": "larrsim", "⥴": "rarrsim", "⥵": "rarrap", "⥶": "ltlarr", "⥸": "gtrarr", "⥹": "subrarr", "⥻": "suplarr", "⥼": "lfisht", "⥽": "rfisht", "⥾": "ufisht", "⥿": "dfisht", "⦚": "vzigzag", "⦜": "vangrt", "⦝": "angrtvbd", "⦤": "ange", "⦥": "range", "⦦": "dwangle", "⦧": "uwangle", "⦨": "angmsdaa", "⦩": "angmsdab", "⦪": "angmsdac", "⦫": "angmsdad", "⦬": "angmsdae", "⦭": "angmsdaf", "⦮": "angmsdag", "⦯": "angmsdah", "⦰": "bemptyv", "⦱": "demptyv", "⦲": "cemptyv", "⦳": "raemptyv", "⦴": "laemptyv", "⦵": "ohbar", "⦶": "omid", "⦷": "opar", "⦹": "operp", "⦻": "olcross", "⦼": "odsold", "⦾": "olcir", "⦿": "ofcir", "⧀": "olt", "⧁": "ogt", "⧂": "cirscir", "⧃": "cirE", "⧄": "solb", "⧅": "bsolb", "⧉": "boxbox", "⧍": "trisb", "⧎": "rtriltri", "⧏": "LeftTriangleBar", "⧏̸": "NotLeftTriangleBar", "⧐": "RightTriangleBar", "⧐̸": "NotRightTriangleBar", "⧜": "iinfin", "⧝": "infintie", "⧞": "nvinfin", "⧣": "eparsl", "⧤": "smeparsl", "⧥": "eqvparsl", "⧫": "lozf", "⧴": "RuleDelayed", "⧶": "dsol", "⨀": "xodot", "⨁": "xoplus", "⨂": "xotime", "⨄": "xuplus", "⨆": "xsqcup", "⨍": "fpartint", "⨐": "cirfnint", "⨑": "awint", "⨒": "rppolint", "⨓": "scpolint", "⨔": "npolint", "⨕": "pointint", "⨖": "quatint", "⨗": "intlarhk", "⨢": "pluscir", "⨣": "plusacir", "⨤": "simplus", "⨥": "plusdu", "⨦": "plussim", "⨧": "plustwo", "⨩": "mcomma", "⨪": "minusdu", "⨭": "loplus", "⨮": "roplus", "⨯": "Cross", "⨰": "timesd", "⨱": "timesbar", "⨳": "smashp", "⨴": "lotimes", "⨵": "rotimes", "⨶": "otimesas", "⨷": "Otimes", "⨸": "odiv", "⨹": "triplus", "⨺": "triminus", "⨻": "tritime", "⨼": "iprod", "⨿": "amalg", "⩀": "capdot", "⩂": "ncup", "⩃": "ncap", "⩄": "capand", "⩅": "cupor", "⩆": "cupcap", "⩇": "capcup", "⩈": "cupbrcap", "⩉": "capbrcup", "⩊": "cupcup", "⩋": "capcap", "⩌": "ccups", "⩍": "ccaps", "⩐": "ccupssm", "⩓": "And", "⩔": "Or", "⩕": "andand", "⩖": "oror", "⩗": "orslope", "⩘": "andslope", "⩚": "andv", "⩛": "orv", "⩜": "andd", "⩝": "ord", "⩟": "wedbar", "⩦": "sdote", "⩪": "simdot", "⩭": "congdot", "⩭̸": "ncongdot", "⩮": "easter", "⩯": "apacir", "⩰": "apE", "⩰̸": "napE", "⩱": "eplus", "⩲": "pluse", "⩳": "Esim", "⩷": "eDDot", "⩸": "equivDD", "⩹": "ltcir", "⩺": "gtcir", "⩻": "ltquest", "⩼": "gtquest", "⩽": "les", "⩽̸": "nles", "⩾": "ges", "⩾̸": "nges", "⩿": "lesdot", "⪀": "gesdot", "⪁": "lesdoto", "⪂": "gesdoto", "⪃": "lesdotor", "⪄": "gesdotol", "⪅": "lap", "⪆": "gap", "⪇": "lne", "⪈": "gne", "⪉": "lnap", "⪊": "gnap", "⪋": "lEg", "⪌": "gEl", "⪍": "lsime", "⪎": "gsime", "⪏": "lsimg", "⪐": "gsiml", "⪑": "lgE", "⪒": "glE", "⪓": "lesges", "⪔": "gesles", "⪕": "els", "⪖": "egs", "⪗": "elsdot", "⪘": "egsdot", "⪙": "el", "⪚": "eg", "⪝": "siml", "⪞": "simg", "⪟": "simlE", "⪠": "simgE", "⪡": "LessLess", "⪡̸": "NotNestedLessLess", "⪢": "GreaterGreater", "⪢̸": "NotNestedGreaterGreater", "⪤": "glj", "⪥": "gla", "⪦": "ltcc", "⪧": "gtcc", "⪨": "lescc", "⪩": "gescc", "⪪": "smt", "⪫": "lat", "⪬": "smte", "⪬︀": "smtes", "⪭": "late", "⪭︀": "lates", "⪮": "bumpE", "⪯": "pre", "⪯̸": "npre", "⪰": "sce", "⪰̸": "nsce", "⪳": "prE", "⪴": "scE", "⪵": "prnE", "⪶": "scnE", "⪷": "prap", "⪸": "scap", "⪹": "prnap", "⪺": "scnap", "⪻": "Pr", "⪼": "Sc", "⪽": "subdot", "⪾": "supdot", "⪿": "subplus", "⫀": "supplus", "⫁": "submult", "⫂": "supmult", "⫃": "subedot", "⫄": "supedot", "⫅": "subE", "⫅̸": "nsubE", "⫆": "supE", "⫆̸": "nsupE", "⫇": "subsim", "⫈": "supsim", "⫋︀": "vsubnE", "⫋": "subnE", "⫌︀": "vsupnE", "⫌": "supnE", "⫏": "csub", "⫐": "csup", "⫑": "csube", "⫒": "csupe", "⫓": "subsup", "⫔": "supsub", "⫕": "subsub", "⫖": "supsup", "⫗": "suphsub", "⫘": "supdsub", "⫙": "forkv", "⫚": "topfork", "⫛": "mlcp", "⫤": "Dashv", "⫦": "Vdashl", "⫧": "Barv", "⫨": "vBar", "⫩": "vBarv", "⫫": "Vbar", "⫬": "Not", "⫭": "bNot", "⫮": "rnmid", "⫯": "cirmid", "⫰": "midcir", "⫱": "topcir", "⫲": "nhpar", "⫳": "parsim", "⫽": "parsl", "⫽⃥": "nparsl", "♭": "flat", "♮": "natur", "♯": "sharp", "¤": "curren", "¢": "cent", $: "dollar", "£": "pound", "¥": "yen", "€": "euro", "¹": "sup1", "½": "half", "⅓": "frac13", "¼": "frac14", "⅕": "frac15", "⅙": "frac16", "⅛": "frac18", "²": "sup2", "⅔": "frac23", "⅖": "frac25", "³": "sup3", "¾": "frac34", "⅗": "frac35", "⅜": "frac38", "⅘": "frac45", "⅚": "frac56", "⅝": "frac58", "⅞": "frac78", "𝒶": "ascr", "𝕒": "aopf", "𝔞": "afr", "𝔸": "Aopf", "𝔄": "Afr", "𝒜": "Ascr", ª: "ordf", á: "aacute", Á: "Aacute", à: "agrave", À: "Agrave", ă: "abreve", Ă: "Abreve", â: "acirc", Â: "Acirc", å: "aring", Å: "angst", ä: "auml", Ä: "Auml", ã: "atilde", Ã: "Atilde", ą: "aogon", Ą: "Aogon", ā: "amacr", Ā: "Amacr", æ: "aelig", Æ: "AElig", "𝒷": "bscr", "𝕓": "bopf", "𝔟": "bfr", "𝔹": "Bopf", ℬ: "Bscr", "𝔅": "Bfr", "𝔠": "cfr", "𝒸": "cscr", "𝕔": "copf", ℭ: "Cfr", "𝒞": "Cscr", ℂ: "Copf", ć: "cacute", Ć: "Cacute", ĉ: "ccirc", Ĉ: "Ccirc", č: "ccaron", Č: "Ccaron", ċ: "cdot", Ċ: "Cdot", ç: "ccedil", Ç: "Ccedil", "℅": "incare", "𝔡": "dfr", "ⅆ": "dd", "𝕕": "dopf", "𝒹": "dscr", "𝒟": "Dscr", "𝔇": "Dfr", "ⅅ": "DD", "𝔻": "Dopf", ď: "dcaron", Ď: "Dcaron", đ: "dstrok", Đ: "Dstrok", ð: "eth", Ð: "ETH", "ⅇ": "ee", ℯ: "escr", "𝔢": "efr", "𝕖": "eopf", ℰ: "Escr", "𝔈": "Efr", "𝔼": "Eopf", é: "eacute", É: "Eacute", è: "egrave", È: "Egrave", ê: "ecirc", Ê: "Ecirc", ě: "ecaron", Ě: "Ecaron", ë: "euml", Ë: "Euml", ė: "edot", Ė: "Edot", ę: "eogon", Ę: "Eogon", ē: "emacr", Ē: "Emacr", "𝔣": "ffr", "𝕗": "fopf", "𝒻": "fscr", "𝔉": "Ffr", "𝔽": "Fopf", ℱ: "Fscr", ﬀ: "fflig", ﬃ: "ffilig", ﬄ: "ffllig", ﬁ: "filig", fj: "fjlig", ﬂ: "fllig", ƒ: "fnof", ℊ: "gscr", "𝕘": "gopf", "𝔤": "gfr", "𝒢": "Gscr", "𝔾": "Gopf", "𝔊": "Gfr", ǵ: "gacute", ğ: "gbreve", Ğ: "Gbreve", ĝ: "gcirc", Ĝ: "Gcirc", ġ: "gdot", Ġ: "Gdot", Ģ: "Gcedil", "𝔥": "hfr", ℎ: "planckh", "𝒽": "hscr", "𝕙": "hopf", ℋ: "Hscr", ℌ: "Hfr", ℍ: "Hopf", ĥ: "hcirc", Ĥ: "Hcirc", ℏ: "hbar", ħ: "hstrok", Ħ: "Hstrok", "𝕚": "iopf", "𝔦": "ifr", "𝒾": "iscr", "ⅈ": "ii", "𝕀": "Iopf", ℐ: "Iscr", ℑ: "Im", í: "iacute", Í: "Iacute", ì: "igrave", Ì: "Igrave", î: "icirc", Î: "Icirc", ï: "iuml", Ï: "Iuml", ĩ: "itilde", Ĩ: "Itilde", İ: "Idot", į: "iogon", Į: "Iogon", ī: "imacr", Ī: "Imacr", ĳ: "ijlig", Ĳ: "IJlig", ı: "imath", "𝒿": "jscr", "𝕛": "jopf", "𝔧": "jfr", "𝒥": "Jscr", "𝔍": "Jfr", "𝕁": "Jopf", ĵ: "jcirc", Ĵ: "Jcirc", "ȷ": "jmath", "𝕜": "kopf", "𝓀": "kscr", "𝔨": "kfr", "𝒦": "Kscr", "𝕂": "Kopf", "𝔎": "Kfr", ķ: "kcedil", Ķ: "Kcedil", "𝔩": "lfr", "𝓁": "lscr", ℓ: "ell", "𝕝": "lopf", ℒ: "Lscr", "𝔏": "Lfr", "𝕃": "Lopf", ĺ: "lacute", Ĺ: "Lacute", ľ: "lcaron", Ľ: "Lcaron", ļ: "lcedil", Ļ: "Lcedil", ł: "lstrok", Ł: "Lstrok", ŀ: "lmidot", Ŀ: "Lmidot", "𝔪": "mfr", "𝕞": "mopf", "𝓂": "mscr", "𝔐": "Mfr", "𝕄": "Mopf", ℳ: "Mscr", "𝔫": "nfr", "𝕟": "nopf", "𝓃": "nscr", ℕ: "Nopf", "𝒩": "Nscr", "𝔑": "Nfr", ń: "nacute", Ń: "Nacute", ň: "ncaron", Ň: "Ncaron", ñ: "ntilde", Ñ: "Ntilde", ņ: "ncedil", Ņ: "Ncedil", "№": "numero", ŋ: "eng", Ŋ: "ENG", "𝕠": "oopf", "𝔬": "ofr", ℴ: "oscr", "𝒪": "Oscr", "𝔒": "Ofr", "𝕆": "Oopf", º: "ordm", ó: "oacute", Ó: "Oacute", ò: "ograve", Ò: "Ograve", ô: "ocirc", Ô: "Ocirc", ö: "ouml", Ö: "Ouml", ő: "odblac", Ő: "Odblac", õ: "otilde", Õ: "Otilde", ø: "oslash", Ø: "Oslash", ō: "omacr", Ō: "Omacr", œ: "oelig", Œ: "OElig", "𝔭": "pfr", "𝓅": "pscr", "𝕡": "popf", ℙ: "Popf", "𝔓": "Pfr", "𝒫": "Pscr", "𝕢": "qopf", "𝔮": "qfr", "𝓆": "qscr", "𝒬": "Qscr", "𝔔": "Qfr", ℚ: "Qopf", ĸ: "kgreen", "𝔯": "rfr", "𝕣": "ropf", "𝓇": "rscr", ℛ: "Rscr", ℜ: "Re", ℝ: "Ropf", ŕ: "racute", Ŕ: "Racute", ř: "rcaron", Ř: "Rcaron", ŗ: "rcedil", Ŗ: "Rcedil", "𝕤": "sopf", "𝓈": "sscr", "𝔰": "sfr", "𝕊": "Sopf", "𝔖": "Sfr", "𝒮": "Sscr", "Ⓢ": "oS", ś: "sacute", Ś: "Sacute", ŝ: "scirc", Ŝ: "Scirc", š: "scaron", Š: "Scaron", ş: "scedil", Ş: "Scedil", ß: "szlig", "𝔱": "tfr", "𝓉": "tscr", "𝕥": "topf", "𝒯": "Tscr", "𝔗": "Tfr", "𝕋": "Topf", ť: "tcaron", Ť: "Tcaron", ţ: "tcedil", Ţ: "Tcedil", "™": "trade", ŧ: "tstrok", Ŧ: "Tstrok", "𝓊": "uscr", "𝕦": "uopf", "𝔲": "ufr", "𝕌": "Uopf", "𝔘": "Ufr", "𝒰": "Uscr", ú: "uacute", Ú: "Uacute", ù: "ugrave", Ù: "Ugrave", ŭ: "ubreve", Ŭ: "Ubreve", û: "ucirc", Û: "Ucirc", ů: "uring", Ů: "Uring", ü: "uuml", Ü: "Uuml", ű: "udblac", Ű: "Udblac", ũ: "utilde", Ũ: "Utilde", ų: "uogon", Ų: "Uogon", ū: "umacr", Ū: "Umacr", "𝔳": "vfr", "𝕧": "vopf", "𝓋": "vscr", "𝔙": "Vfr", "𝕍": "Vopf", "𝒱": "Vscr", "𝕨": "wopf", "𝓌": "wscr", "𝔴": "wfr", "𝒲": "Wscr", "𝕎": "Wopf", "𝔚": "Wfr", ŵ: "wcirc", Ŵ: "Wcirc", "𝔵": "xfr", "𝓍": "xscr", "𝕩": "xopf", "𝕏": "Xopf", "𝔛": "Xfr", "𝒳": "Xscr", "𝔶": "yfr", "𝓎": "yscr", "𝕪": "yopf", "𝒴": "Yscr", "𝔜": "Yfr", "𝕐": "Yopf", ý: "yacute", Ý: "Yacute", ŷ: "ycirc", Ŷ: "Ycirc", ÿ: "yuml", Ÿ: "Yuml", "𝓏": "zscr", "𝔷": "zfr", "𝕫": "zopf", ℨ: "Zfr", ℤ: "Zopf", "𝒵": "Zscr", ź: "zacute", Ź: "Zacute", ž: "zcaron", Ž: "Zcaron", ż: "zdot", Ż: "Zdot", Ƶ: "imped", þ: "thorn", Þ: "THORN", ŉ: "napos", α: "alpha", Α: "Alpha", β: "beta", Β: "Beta", γ: "gamma", Γ: "Gamma", δ: "delta", Δ: "Delta", ε: "epsi", "ϵ": "epsiv", Ε: "Epsilon", ϝ: "gammad", Ϝ: "Gammad", ζ: "zeta", Ζ: "Zeta", η: "eta", Η: "Eta", θ: "theta", ϑ: "thetav", Θ: "Theta", ι: "iota", Ι: "Iota", κ: "kappa", ϰ: "kappav", Κ: "Kappa", λ: "lambda", Λ: "Lambda", μ: "mu", µ: "micro", Μ: "Mu", ν: "nu", Ν: "Nu", ξ: "xi", Ξ: "Xi", ο: "omicron", Ο: "Omicron", π: "pi", ϖ: "piv", Π: "Pi", ρ: "rho", ϱ: "rhov", Ρ: "Rho", σ: "sigma", Σ: "Sigma", ς: "sigmaf", τ: "tau", Τ: "Tau", υ: "upsi", Υ: "Upsilon", ϒ: "Upsi", φ: "phi", ϕ: "phiv", Φ: "Phi", χ: "chi", Χ: "Chi", ψ: "psi", Ψ: "Psi", ω: "omega", Ω: "ohm", а: "acy", А: "Acy", б: "bcy", Б: "Bcy", в: "vcy", В: "Vcy", г: "gcy", Г: "Gcy", ѓ: "gjcy", Ѓ: "GJcy", д: "dcy", Д: "Dcy", ђ: "djcy", Ђ: "DJcy", е: "iecy", Е: "IEcy", ё: "iocy", Ё: "IOcy", є: "jukcy", Є: "Jukcy", ж: "zhcy", Ж: "ZHcy", з: "zcy", З: "Zcy", ѕ: "dscy", Ѕ: "DScy", и: "icy", И: "Icy", і: "iukcy", І: "Iukcy", ї: "yicy", Ї: "YIcy", й: "jcy", Й: "Jcy", ј: "jsercy", Ј: "Jsercy", к: "kcy", К: "Kcy", ќ: "kjcy", Ќ: "KJcy", л: "lcy", Л: "Lcy", љ: "ljcy", Љ: "LJcy", м: "mcy", М: "Mcy", н: "ncy", Н: "Ncy", њ: "njcy", Њ: "NJcy", о: "ocy", О: "Ocy", п: "pcy", П: "Pcy", р: "rcy", Р: "Rcy", с: "scy", С: "Scy", т: "tcy", Т: "Tcy", ћ: "tshcy", Ћ: "TSHcy", у: "ucy", У: "Ucy", ў: "ubrcy", Ў: "Ubrcy", ф: "fcy", Ф: "Fcy", х: "khcy", Х: "KHcy", ц: "tscy", Ц: "TScy", ч: "chcy", Ч: "CHcy", џ: "dzcy", Џ: "DZcy", ш: "shcy", Ш: "SHcy", щ: "shchcy", Щ: "SHCHcy", ъ: "hardcy", Ъ: "HARDcy", ы: "ycy", Ы: "Ycy", ь: "softcy", Ь: "SOFTcy", э: "ecy", Э: "Ecy", ю: "yucy", Ю: "YUcy", я: "yacy", Я: "YAcy", ℵ: "aleph", ℶ: "beth", ℷ: "gimel", ℸ: "daleth" }, d = /["&'<>`]/g, f = {
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
    }, h = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, b = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, m = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, x = { aacute: "á", Aacute: "Á", abreve: "ă", Abreve: "Ă", ac: "∾", acd: "∿", acE: "∾̳", acirc: "â", Acirc: "Â", acute: "´", acy: "а", Acy: "А", aelig: "æ", AElig: "Æ", af: "⁡", afr: "𝔞", Afr: "𝔄", agrave: "à", Agrave: "À", alefsym: "ℵ", aleph: "ℵ", alpha: "α", Alpha: "Α", amacr: "ā", Amacr: "Ā", amalg: "⨿", amp: "&", AMP: "&", and: "∧", And: "⩓", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", Aogon: "Ą", aopf: "𝕒", Aopf: "𝔸", ap: "≈", apacir: "⩯", ape: "≊", apE: "⩰", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", aring: "å", Aring: "Å", ascr: "𝒶", Ascr: "𝒜", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", Bcy: "Б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", beta: "β", Beta: "Β", beth: "ℶ", between: "≬", bfr: "𝔟", Bfr: "𝔅", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bNot: "⫭", bopf: "𝕓", Bopf: "𝔹", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxhD: "╥", boxHd: "╤", boxHD: "╦", boxhu: "┴", boxhU: "╨", boxHu: "╧", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpe: "≏", bumpE: "⪮", bumpeq: "≏", Bumpeq: "≎", cacute: "ć", Cacute: "Ć", cap: "∩", Cap: "⋒", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", ccaron: "č", Ccaron: "Č", ccedil: "ç", Ccedil: "Ç", ccirc: "ĉ", Ccirc: "Ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", Cdot: "Ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", chcy: "ч", CHcy: "Ч", check: "✓", checkmark: "✓", chi: "χ", Chi: "Χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cire: "≗", cirE: "⧃", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", colone: "≔", Colone: "⩴", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", cscr: "𝒸", Cscr: "𝒞", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", Cup: "⋓", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", dArr: "⇓", Darr: "↡", dash: "‐", dashv: "⊣", Dashv: "⫤", dbkarow: "⤏", dblac: "˝", dcaron: "ď", Dcaron: "Ď", dcy: "д", Dcy: "Д", dd: "ⅆ", DD: "ⅅ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", delta: "δ", Delta: "Δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", Dfr: "𝔇", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", DJcy: "Ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", Dopf: "𝔻", dot: "˙", Dot: "¨", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", downarrow: "↓", Downarrow: "⇓", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", Dscr: "𝒟", dscy: "ѕ", DScy: "Ѕ", dsol: "⧶", dstrok: "đ", Dstrok: "Đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", DZcy: "Џ", dzigrarr: "⟿", eacute: "é", Eacute: "É", easter: "⩮", ecaron: "ě", Ecaron: "Ě", ecir: "≖", ecirc: "ê", Ecirc: "Ê", ecolon: "≕", ecy: "э", Ecy: "Э", eDDot: "⩷", edot: "ė", eDot: "≑", Edot: "Ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", Efr: "𝔈", eg: "⪚", egrave: "è", Egrave: "È", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", Emacr: "Ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", eng: "ŋ", ENG: "Ŋ", ensp: " ", eogon: "ę", Eogon: "Ę", eopf: "𝕖", Eopf: "𝔼", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", Epsilon: "Ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", esim: "≂", Esim: "⩳", eta: "η", Eta: "Η", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", fcy: "ф", Fcy: "Ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", Ffr: "𝔉", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", Fopf: "𝔽", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", gamma: "γ", Gamma: "Γ", gammad: "ϝ", Gammad: "Ϝ", gap: "⪆", gbreve: "ğ", Gbreve: "Ğ", Gcedil: "Ģ", gcirc: "ĝ", Gcirc: "Ĝ", gcy: "г", Gcy: "Г", gdot: "ġ", Gdot: "Ġ", ge: "≥", gE: "≧", gel: "⋛", gEl: "⪌", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", Gfr: "𝔊", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", GJcy: "Ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", Gopf: "𝔾", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", gscr: "ℊ", Gscr: "𝒢", gsim: "≳", gsime: "⪎", gsiml: "⪐", gt: ">", Gt: "≫", GT: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", HARDcy: "Ъ", harr: "↔", hArr: "⇔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", hcirc: "ĥ", Hcirc: "Ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", hstrok: "ħ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", iacute: "í", Iacute: "Í", ic: "⁣", icirc: "î", Icirc: "Î", icy: "и", Icy: "И", Idot: "İ", iecy: "е", IEcy: "Е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", igrave: "ì", Igrave: "Ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", IJlig: "Ĳ", Im: "ℑ", imacr: "ī", Imacr: "Ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", Int: "∬", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", iocy: "ё", IOcy: "Ё", iogon: "į", Iogon: "Į", iopf: "𝕚", Iopf: "𝕀", iota: "ι", Iota: "Ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", Itilde: "Ĩ", iukcy: "і", Iukcy: "І", iuml: "ï", Iuml: "Ï", jcirc: "ĵ", Jcirc: "Ĵ", jcy: "й", Jcy: "Й", jfr: "𝔧", Jfr: "𝔍", jmath: "ȷ", jopf: "𝕛", Jopf: "𝕁", jscr: "𝒿", Jscr: "𝒥", jsercy: "ј", Jsercy: "Ј", jukcy: "є", Jukcy: "Є", kappa: "κ", Kappa: "Κ", kappav: "ϰ", kcedil: "ķ", Kcedil: "Ķ", kcy: "к", Kcy: "К", kfr: "𝔨", Kfr: "𝔎", kgreen: "ĸ", khcy: "х", KHcy: "Х", kjcy: "ќ", KJcy: "Ќ", kopf: "𝕜", Kopf: "𝕂", kscr: "𝓀", Kscr: "𝒦", lAarr: "⇚", lacute: "ĺ", Lacute: "Ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", Lambda: "Λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larr: "←", lArr: "⇐", Larr: "↞", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", lAtail: "⤛", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", Lcaron: "Ľ", lcedil: "ļ", Lcedil: "Ļ", lceil: "⌈", lcub: "{", lcy: "л", Lcy: "Л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", leftarrow: "←", Leftarrow: "⇐", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", Leftrightarrow: "⇔", LeftRightArrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", leg: "⋚", lEg: "⪋", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", Lfr: "𝔏", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", LJcy: "Љ", ll: "≪", Ll: "⋘", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", lmidot: "ŀ", Lmidot: "Ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", Longleftarrow: "⟸", LongLeftArrow: "⟵", longleftrightarrow: "⟷", Longleftrightarrow: "⟺", LongLeftRightArrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", Longrightarrow: "⟹", LongRightArrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", Lopf: "𝕃", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", Lstrok: "Ł", lt: "<", Lt: "≪", LT: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", Map: "⤅", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", Mcy: "М", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", mfr: "𝔪", Mfr: "𝔐", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", Mopf: "𝕄", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", mu: "μ", Mu: "Μ", multimap: "⊸", mumap: "⊸", nabla: "∇", nacute: "ń", Nacute: "Ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", Ncaron: "Ň", ncedil: "ņ", Ncedil: "Ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", Ncy: "Н", ndash: "–", ne: "≠", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", nfr: "𝔫", Nfr: "𝔑", nge: "≱", ngE: "≧̸", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", ngt: "≯", nGt: "≫⃒", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", NJcy: "Њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nle: "≰", nlE: "≦̸", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nlt: "≮", nLt: "≪⃒", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", not: "¬", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrarr: "↛", nrArr: "⇏", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", Nscr: "𝒩", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsube: "⊈", nsubE: "⫅̸", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupe: "⊉", nsupE: "⫆̸", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntilde: "ñ", Ntilde: "Ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", Nu: "Ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", oacute: "ó", Oacute: "Ó", oast: "⊛", ocir: "⊚", ocirc: "ô", Ocirc: "Ô", ocy: "о", Ocy: "О", odash: "⊝", odblac: "ő", Odblac: "Ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", OElig: "Œ", ofcir: "⦿", ofr: "𝔬", Ofr: "𝔒", ogon: "˛", ograve: "ò", Ograve: "Ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", Omacr: "Ō", omega: "ω", Omega: "Ω", omicron: "ο", Omicron: "Ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", Oopf: "𝕆", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", or: "∨", Or: "⩔", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", oscr: "ℴ", Oscr: "𝒪", oslash: "ø", Oslash: "Ø", osol: "⊘", otilde: "õ", Otilde: "Õ", otimes: "⊗", Otimes: "⨷", otimesas: "⨶", ouml: "ö", Ouml: "Ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", pcy: "п", Pcy: "П", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", Pfr: "𝔓", phi: "φ", Phi: "Φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", Pi: "Π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", pr: "≺", Pr: "⪻", prap: "⪷", prcue: "≼", pre: "⪯", prE: "⪳", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", Pscr: "𝒫", psi: "ψ", Psi: "Ψ", puncsp: " ", qfr: "𝔮", Qfr: "𝔔", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", qscr: "𝓆", Qscr: "𝒬", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", racute: "ŕ", Racute: "Ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarr: "→", rArr: "⇒", Rarr: "↠", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", Rarrtl: "⤖", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", Rcaron: "Ř", rcedil: "ŗ", Rcedil: "Ŗ", rceil: "⌉", rcub: "}", rcy: "р", Rcy: "Р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", Rho: "Ρ", rhov: "ϱ", RightAngleBracket: "⟩", rightarrow: "→", Rightarrow: "⇒", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", sacute: "ś", Sacute: "Ś", sbquo: "‚", sc: "≻", Sc: "⪼", scap: "⪸", scaron: "š", Scaron: "Š", sccue: "≽", sce: "⪰", scE: "⪴", scedil: "ş", Scedil: "Ş", scirc: "ŝ", Scirc: "Ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", Scy: "С", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", Sfr: "𝔖", sfrown: "⌢", sharp: "♯", shchcy: "щ", SHCHcy: "Щ", shcy: "ш", SHcy: "Ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", sigma: "σ", Sigma: "Σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", SOFTcy: "Ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", Sopf: "𝕊", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", Sscr: "𝒮", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", Star: "⋆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", sube: "⊆", subE: "⫅", subedot: "⫃", submult: "⫁", subne: "⊊", subnE: "⫋", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup: "⊃", Sup: "⋑", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supe: "⊇", supE: "⫆", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supne: "⊋", supnE: "⫌", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", tau: "τ", Tau: "Τ", tbrk: "⎴", tcaron: "ť", Tcaron: "Ť", tcedil: "ţ", Tcedil: "Ţ", tcy: "т", Tcy: "Т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", Tfr: "𝔗", there4: "∴", therefore: "∴", Therefore: "∴", theta: "θ", Theta: "Θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", thorn: "þ", THORN: "Þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", Topf: "𝕋", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", Tscr: "𝒯", tscy: "ц", TScy: "Ц", tshcy: "ћ", TSHcy: "Ћ", tstrok: "ŧ", Tstrok: "Ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uacute: "ú", Uacute: "Ú", uarr: "↑", uArr: "⇑", Uarr: "↟", Uarrocir: "⥉", ubrcy: "ў", Ubrcy: "Ў", ubreve: "ŭ", Ubreve: "Ŭ", ucirc: "û", Ucirc: "Û", ucy: "у", Ucy: "У", udarr: "⇅", udblac: "ű", Udblac: "Ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", Ufr: "𝔘", ugrave: "ù", Ugrave: "Ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", Umacr: "Ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", uogon: "ų", Uogon: "Ų", uopf: "𝕦", Uopf: "𝕌", uparrow: "↑", Uparrow: "⇑", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", updownarrow: "↕", Updownarrow: "⇕", UpDownArrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", upsilon: "υ", Upsilon: "Υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", Uring: "Ů", urtri: "◹", uscr: "𝓊", Uscr: "𝒰", utdot: "⋰", utilde: "ũ", Utilde: "Ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uuml: "ü", Uuml: "Ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", vcy: "в", Vcy: "В", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", vee: "∨", Vee: "⋁", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", vfr: "𝔳", Vfr: "𝔙", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", Vopf: "𝕍", vprop: "∝", vrtri: "⊳", vscr: "𝓋", Vscr: "𝒱", vsubne: "⊊︀", vsubnE: "⫋︀", vsupne: "⊋︀", vsupnE: "⫌︀", Vvdash: "⊪", vzigzag: "⦚", wcirc: "ŵ", Wcirc: "Ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", wfr: "𝔴", Wfr: "𝔚", wopf: "𝕨", Wopf: "𝕎", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", Wscr: "𝒲", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", Xfr: "𝔛", xharr: "⟷", xhArr: "⟺", xi: "ξ", Xi: "Ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", Xopf: "𝕏", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", xscr: "𝓍", Xscr: "𝒳", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacute: "ý", Yacute: "Ý", yacy: "я", YAcy: "Я", ycirc: "ŷ", Ycirc: "Ŷ", ycy: "ы", Ycy: "Ы", yen: "¥", yfr: "𝔶", Yfr: "𝔜", yicy: "ї", YIcy: "Ї", yopf: "𝕪", Yopf: "𝕐", yscr: "𝓎", Yscr: "𝒴", yucy: "ю", YUcy: "Ю", yuml: "ÿ", Yuml: "Ÿ", zacute: "ź", Zacute: "Ź", zcaron: "ž", Zcaron: "Ž", zcy: "з", Zcy: "З", zdot: "ż", Zdot: "Ż", zeetrf: "ℨ", ZeroWidthSpace: "​", zeta: "ζ", Zeta: "Ζ", zfr: "𝔷", Zfr: "ℨ", zhcy: "ж", ZHcy: "Ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", zscr: "𝓏", Zscr: "𝒵", zwj: "‍", zwnj: "‌" }, w = { aacute: "á", Aacute: "Á", acirc: "â", Acirc: "Â", acute: "´", aelig: "æ", AElig: "Æ", agrave: "à", Agrave: "À", amp: "&", AMP: "&", aring: "å", Aring: "Å", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", brvbar: "¦", ccedil: "ç", Ccedil: "Ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", Eacute: "É", ecirc: "ê", Ecirc: "Ê", egrave: "è", Egrave: "È", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", iacute: "í", Iacute: "Í", icirc: "î", Icirc: "Î", iexcl: "¡", igrave: "ì", Igrave: "Ì", iquest: "¿", iuml: "ï", Iuml: "Ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", Ntilde: "Ñ", oacute: "ó", Oacute: "Ó", ocirc: "ô", Ocirc: "Ô", ograve: "ò", Ograve: "Ò", ordf: "ª", ordm: "º", oslash: "ø", Oslash: "Ø", otilde: "õ", Otilde: "Õ", ouml: "ö", Ouml: "Ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", THORN: "Þ", times: "×", uacute: "ú", Uacute: "Ú", ucirc: "û", Ucirc: "Û", ugrave: "ù", Ugrave: "Ù", uml: "¨", uuml: "ü", Uuml: "Ü", yacute: "ý", Yacute: "Ý", yen: "¥", yuml: "ÿ" }, g = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" }, v = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111], y = String.fromCharCode, _ = {}, A = _.hasOwnProperty, D = function(B, R) {
      return A.call(B, R);
    }, k = function(B, R) {
      for (var U = -1, j = B.length; ++U < j; )
        if (B[U] == R)
          return !0;
      return !1;
    }, C = function(B, R) {
      if (!B)
        return R;
      var U = {}, j;
      for (j in R)
        U[j] = D(B, j) ? B[j] : R[j];
      return U;
    }, S = function(B, R) {
      var U = "";
      return B >= 55296 && B <= 57343 || B > 1114111 ? (R && F("character reference outside the permissible Unicode range"), "�") : D(g, B) ? (R && F("disallowed character reference"), g[B]) : (R && k(v, B) && F("disallowed character reference"), B > 65535 && (B -= 65536, U += y(B >>> 10 & 1023 | 55296), B = 56320 | B & 1023), U += y(B), U);
    }, E = function(B) {
      return "&#x" + B.toString(16).toUpperCase() + ";";
    }, T = function(B) {
      return "&#" + B + ";";
    }, F = function(B) {
      throw Error("Parse error: " + B);
    }, P = function(B, R) {
      R = C(R, P.options);
      var U = R.strict;
      U && b.test(B) && F("forbidden code point");
      var j = R.encodeEverything, H = R.useNamedReferences, ce = R.allowUnsafeSymbols, fe = R.decimal ? T : E, dt = function(me) {
        return fe(me.charCodeAt(0));
      };
      return j ? (B = B.replace(a, function(me) {
        return H && D(c, me) ? "&" + c[me] + ";" : dt(me);
      }), H && (B = B.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), H && (B = B.replace(u, function(me) {
        return "&" + c[me] + ";";
      }))) : H ? (ce || (B = B.replace(d, function(me) {
        return "&" + c[me] + ";";
      })), B = B.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), B = B.replace(u, function(me) {
        return "&" + c[me] + ";";
      })) : ce || (B = B.replace(d, dt)), B.replace(o, function(me) {
        var $t = me.charCodeAt(0), kt = me.charCodeAt(1), Ke = ($t - 55296) * 1024 + kt - 56320 + 65536;
        return fe(Ke);
      }).replace(l, dt);
    };
    P.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1
    };
    var z = function(B, R) {
      R = C(R, z.options);
      var U = R.strict;
      return U && h.test(B) && F("malformed character reference"), B.replace(m, function(j, H, ce, fe, dt, me, $t, kt, Ke) {
        var Te, wi, io, no, xi, yi;
        return H ? (xi = H, x[xi]) : ce ? (xi = ce, yi = fe, yi && R.isAttributeValue ? (U && yi == "=" && F("`&` did not start a character reference"), j) : (U && F(
          "named character reference was not terminated by a semicolon"
        ), w[xi] + (yi || ""))) : dt ? (io = dt, wi = me, U && !wi && F("character reference was not terminated by a semicolon"), Te = parseInt(io, 10), S(Te, U)) : $t ? (no = $t, wi = kt, U && !wi && F("character reference was not terminated by a semicolon"), Te = parseInt(no, 16), S(Te, U)) : (U && F(
          "named character reference was not terminated by a semicolon"
        ), j);
      });
    };
    z.options = {
      isAttributeValue: !1,
      strict: !1
    };
    var N = function(B) {
      return B.replace(d, function(R) {
        return f[R];
      });
    }, I = {
      version: "1.2.0",
      encode: P,
      decode: z,
      escape: N,
      unescape: z
    };
    if (r && !r.nodeType)
      if (n)
        n.exports = I;
      else
        for (var L in I)
          D(I, L) && (r[L] = I[L]);
    else
      t.he = I;
  })(mn);
})(nn, nn.exports);
var Nh = nn.exports;
const Ph = /* @__PURE__ */ Ic(Nh), Yt = {
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
}, Mh = (i) => {
  const e = i ? [...new Set(i.split(","))] : [], r = window.BikeMatrix.getConfig(), n = [];
  return Object.entries(r.products).reduce((o, [a, l]) => (!n.includes(a) && l.skus.some((u) => !!u && e.includes(u == null ? void 0 : u.trim())) && (o.push(l), n.push(a)), o), []).sort((o, a) => o["bm-sort"] - a["bm-sort"]);
}, Oh = (i) => {
  if (!(i != null && i.length))
    return [];
  const e = i.filter((t) => t.compatible).map((t) => t.sku).join(",");
  return Mh(e);
}, Ih = (i, e) => ke.value ? {
  type: "unknown",
  ...Yt.unknown
} : i > 1 ? {
  type: "pageone",
  ...Yt.pageone
} : (e == null ? void 0 : e.length) > 0 ? {
  type: "compatibleresults",
  ...Yt.compatibleresults
} : zi.value ? {
  type: "error",
  ...Yt.error
} : {
  type: "noresults",
  ...Yt.noresults
}, Rh = () => `
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
function zh({
  "data-title": i,
  "data-current-count": e,
  "data-total-count": t
}) {
  var k;
  const r = Y(null), n = window.BikeMatrix, s = n.getConfig(), [o, a] = M(!1), [l, u] = M(!0), [c, d] = M({
    type: "unknown",
    details: "",
    details_code: ""
  }), [f, h] = M([]), {
    t: b
  } = X(), [m, x] = M(""), w = !!n.getActiveSubscription(), g = s.currentCollectionHandle || "", v = s.collectionUrl || "", y = s.compatiblityListCurrentPage || 0, _ = !!s.showCompatibleList || !1, A = s.logLevel || "none", D = (C) => {
    var P, z;
    if (!(r != null && r.current))
      return null;
    const S = (z = (P = r == null ? void 0 : r.current) == null ? void 0 : P.parentElement) == null ? void 0 : z.querySelector('template[slot="product-card"]');
    A === "verbose" && console.log("CompatibleList Product Card Template: ", S);
    const F = (S ? S.innerHTML : Rh()).replace(s.isShopify ? /\@\@#if\s+(\w+)\@\@(.*?)\@\@\/if\@\@/gs : /\{\{#if\s+(\w+)\}\}(.*?)\{\{\/if\}\}/gs, (N, I, L) => C[I] ? L : "").replace(s.isShopify ? /\@\@\s*(\w+)\s*\@\@/g : /\{\{\s*(\w+)\s*\}\}/g, (N, I) => {
      if (I === "compatibility")
        return '<bikematrix-compatibilitylabel data-type="compatible"></bikematrix-compatibilitylabel>';
      const L = C[I];
      return I === "productTitle" ? Ph.decode(L) : L || "";
    });
    return A === "verbose" && console.log("CompatibleList Product Card: ", F), p("li", {
      dangerouslySetInnerHTML: {
        __html: F
      }
    }, C.productId);
  };
  return $(() => {
    var F, P, z;
    const C = s.collections.map((N) => N.handle) || [];
    if (!_ || !C.includes(g)) {
      d({
        type: "unknown",
        ...Yt.unknown
      }), a(!1);
      return;
    }
    if (!K.value) {
      d({
        type: "selectbike",
        ...Yt.selectbike
      }), a(!ke.value);
      return;
    }
    let S = !0;
    if ((F = K.value) != null && F.compatibleCollections.error || (S = (z = (P = K.value) == null ? void 0 : P.compatibleCollections) == null ? void 0 : z.find((N) => N.handle === g)), !S) {
      a(!1);
      return;
    }
    const E = Oh(pr.value).map(D);
    h(E);
    const T = Ih(y, E);
    d(T), a(!0);
  }, [g, K.value, pr.value, ke.value, y]), $(() => {
    e === void 0 || t === void 0 || (parseInt(e) > parseInt(t) || parseInt(e) === parseInt(t) ? x(b("compatiblelist_waitstate_compatibility", {
      y: t
    })) : x(b("compatiblelist_waitstate_count", {
      x: e,
      y: t
    })));
  }, [e, t]), p(V, {
    children: w && o && p("div", {
      ref: r,
      children: [p("style", {
        type: "text/css",
        children: Fh
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
                children: i || b("compatiblelist_header")
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
                display: ke.value ? "flex" : "none",
                gap: "1rem"
              },
              children: [p("div", {
                class: "lds-ring",
                id: "bm-loading-spinner",
                style: ke.value ? "" : "display: none",
                children: [p("div", {}), p("div", {}), p("div", {}), p("div", {})]
              }), !!m && m]
            }), !ke.value && {
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
                onClick: (C) => {
                  C.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
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
                    __html: (k = b(c == null ? void 0 : c.details_code)) == null ? void 0 : k.replace("<a>", "<a href='" + v + "'>")
                  }
                })
              }),
              noresults: p("p", {
                class: "bm-compatible-products-message",
                children: b(c == null ? void 0 : c.details_code)
              }),
              compatibleresults: p(V, {})
            }[c == null ? void 0 : c.type], p("ul", {
              id: "bm_compatibleProductsList",
              children: !ke.value && (c == null ? void 0 : c.type) === "compatibleresults" && f
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
const qh = `.bike-selector-banner_wrapper{position:relative;height:40px}.bike-selector-banner{width:100%;height:40px;position:absolute;top:0;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-bottom:2rem}.floating{border-radius:12px;box-shadow:0 4px 4px #0000001f}.bike-selector-banner_title{color:#fff;text-transform:uppercase;padding-top:2px;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px}@media (width <= 991px){.bike-selector-banner_title{display:none}}.bike-selector-banner_title_mobile{display:none;text-transform:uppercase;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px;color:#fff;padding-top:2px}@media (width <= 991px){.bike-selector-banner_title_mobile{display:block}}.bike-selector-banner_svg{height:19px}.bike-selector-banner_icon-wrapper{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.bike-selector-banner_tick{width:12px;height:12px;position:absolute;right:6px;top:5px}
`, Vh = `.bm-button{cursor:pointer;border:none;font-weight:600}.bm-header-btn{display:inline-block;font-weight:200;background-color:#000;color:#fff;border-radius:5px;text-align:center;font-size:.75em;cursor:pointer}.bm-icon{display:inline-block;padding:6px;font-weight:200;border:none;text-align:center;font-size:.75em;background-color:transparent;height:44px;width:44px}.bm-icon svg{width:32px;height:32px}@media screen and (max-width: 991px){.bm-icon{padding:10px}.bm-icon svg{width:24px;height:24px}}.bm-bike-select-icon.show-selected,.bm-bike-select-icon.show-selected-banner{position:relative}.bm-bike-select-icon.show-selected:after{content:"";width:12px;height:12px;top:2px;right:2px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}.bm-bike-select-icon.show-selected-banner:after{content:"";width:12px;height:12px;top:6px;right:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}
`;
function qu({
  "data-color": i,
  banner: e
}) {
  const t = K.value;
  return window.BikeMatrix.getConfig(), p(V, {
    children: [p("style", {
      type: "text/css",
      children: Vh
    }), p("div", {
      className: "bm-bikon-wrapper",
      children: p("button", {
        className: `p-2 !ml-auto header__icon bm-header-btn bm-icon bm-bike-select-icon ${t && !e ? "show-selected" : t && e ? "show-selected-banner" : ""}`,
        style: {
          color: i
        },
        onClick: e ? () => {
        } : () => Sr(),
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
function $h({
  "data-title": i,
  "data-mobile-title": e,
  "data-color": t,
  "data-full-width": r,
  "data-font-color": n,
  "data-show": s
}) {
  const o = K.value, {
    t: a
  } = X();
  if (typeof s > "u" || s !== "true" && s !== "")
    return p(V, {});
  const l = n === "black" ? "#000" : n === "white" ? "#fff" : n;
  return p(V, {
    children: [p("style", {
      type: "text/css",
      children: qh
    }), p("div", {
      onClick: () => {
        Sr();
      },
      class: "bike-selector-banner_wrapper",
      children: p("div", {
        class: `bike-selector-banner ${r === "false" ? "floating" : ""}`,
        style: {
          backgroundColor: t ?? "#000",
          maxWidth: r ?? null
        },
        children: p(V, {
          children: [p("h2", {
            class: "bike-selector-banner_title",
            style: {
              color: l
            },
            children: o ? o.brand + " " + o.frameSeries : i || a("bikeselectorbanner_title")
          }), p("h2", {
            class: "bike-selector-banner_title_mobile",
            style: {
              color: l
            },
            children: o ? o.brand : e || a("bikeselectorbanner_mobiletitle")
          }), p(qu, {
            "data-color": l,
            banner: !0
          })]
        })
      })
    })]
  });
}
const jh = `.variant-selector-wrapper{display:flex;flex-direction:column;border-radius:8px;gap:.25rem}.title{font-size:16px;line-height:20px;font-weight:600;padding-bottom:.25rem;color:#000;display:flex;align-items:center;justify-content:space-between;gap:1rem;font-family:nunito}.indicator-wrapper{display:grid;grid-template-columns:repeat(2,minmax(10px,1fr));row-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;grid-auto-columns:auto}@media screen and (max-width: 991px){.indicator-wrapper{grid-template-columns:minmax(10px,1fr)}}.full-width{grid-template-columns:minmax(10px,1fr)}.loading-wrapper{background-color:#f3f4f6;border:1px solid rgb(209 213 219);min-height:45px;border-radius:8px;display:flex;justify-content:center;align-items:center}
`, Uh = `.alt-indicator{border-radius:8px;border:1px solid #000;background-color:#fff;color:#000;font-weight:600;font-size:14px;display:flex;justify-content:space-between;align-items:center;gap:5px;padding:10px;text-decoration:none;transition:all ease-in-out .2s;font-family:nunito}.alt-indicator:hover{transform:scale(1.01)}.alt-is-active{box-shadow:0 3px 7px #00000040;font-weight:700}.variant-title{text-wrap:nowrap;text-overflow:ellipsis;white-space:nowrap;margin:0;overflow:hidden}
`, Hh = ({
  item: i,
  clickable: e,
  currentVariant: t
}) => {
  const [r, n] = M(!1);
  return $(() => {
    t === i.id ? n(!0) : n(!1);
  }, [t]), p(V, {
    children: [p("style", {
      type: "text/css",
      children: Uh
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
}, Gh = `.question-button{cursor:pointer;display:flex;align-items:center;position:relative;background-color:#000;justify-content:center;height:24px;width:24px;border-radius:100%}.question-popup{position:absolute;border-radius:8px;background-color:#000;top:0;right:0;height:0;width:0;overflow:hidden;opacity:0;z-index:1}.question-popup .information{padding:12px;color:#fff;width:200px;font-size:12px}
`, Yh = ({
  showall: i,
  clickable: e
}) => {
  const t = Y(null), [r, n] = M(!1), {
    t: s
  } = X(), o = () => {
    r ? r && ee.to(t.current, {
      width: 0,
      height: 0,
      opacity: 0,
      onComplete: () => n(!1)
    }) : ee.to(t.current, {
      height: "auto",
      width: "auto",
      opacity: 1,
      onComplete: () => n(!0)
    });
  };
  return p(V, {
    children: [p("style", {
      type: "text/css",
      children: Gh
    }), p("div", {
      className: "question-button",
      onClick: o,
      children: [p(Iu, {
        height: 12
      }), p("div", {
        className: "question-popup",
        ref: t,
        children: p("div", {
          className: "information",
          children: [!i && s("variantselector_help_text"), " ", i && s("variantselector_help_text_showall"), " ", e && s("variantselector_help_text_clickable")]
        })
      })]
    })]
  });
}, Wh = `.indicator{border-radius:8px;border:1px solid #10b981;background-color:#ecfdf5;color:#022c22;font-weight:600;font-size:14px;display:flex;justify-content:space-between;align-items:center;gap:5px;padding:10px;text-decoration:none;transition:all ease-in-out .2s;font-family:nunito}.indicator:hover{transform:scale(1.01)}.is-active{box-shadow:0 3px 7px #00000040;font-weight:700;border-width:2px}.non-clickable-indicator{display:flex;justify-content:space-between;align-items:center;border-radius:8px;padding:10px;font-weight:600;font-size:14px}.icon-wrapper{min-height:24px;min-width:24px;display:flex;align-items:center}.variant-title{text-wrap:nowrap;text-overflow:ellipsis;white-space:nowrap;margin:0;overflow:hidden}
`, Kh = ({
  item: i,
  clickable: e,
  currentVariant: t,
  override: r
}) => {
  const [n, s] = M(!1);
  return $(() => {
    t === i.id ? s(!0) : s(!1);
  }, [t]), p(V, {
    children: [p("style", {
      type: "text/css",
      children: Wh
    }), (e || r) && p("a", {
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
      children: [p("div", {
        className: "variant-title",
        children: i.title
      }), p("div", {
        className: "icon-wrapper",
        children: i.warning && i.compatible ? p(Lr, {
          height: 23,
          width: 23
        }) : !i.warning && i.compatible ? p(Br, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : i.compatible === !1 ? p(rn, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : p(V, {})
      })]
    }), !e && !r && p("div", {
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
      children: [p("div", {
        className: "variant-title",
        children: i.title
      }), p("div", {
        className: "icon-wrapper",
        children: i.warning && i.compatible ? p(Lr, {
          height: 23,
          width: 23
        }) : !i.warning && i.compatible ? p(Br, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : i.compatible === !1 ? p(rn, {
          height: 23,
          width: 23,
          fill: "#10b981"
        }) : p(V, {})
      })]
    })]
  });
}, Zh = ({
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
  }), [d, f] = M([]), [h, b] = M([]), x = window.BikeMatrix.getConfig(), {
    t: w
  } = X(), g = () => {
    var A, D, k;
    c({
      type: "loading",
      display: !0
    });
    let y = [];
    i.map((C) => {
      C.compatible && y.push(C);
    }), f(y);
    let _ = [];
    (D = (A = K.value) == null ? void 0 : A.compatibleCollections) != null && D.error || (k = K.value) == null || k.compatibleCollections.map((C) => {
      x.productCollections.includes(C.handle) && _.push(C.handle);
    }), b(_);
  }, v = () => {
    c({
      type: "loading",
      display: !0
    }), !h.length && !d.length && !s && c({
      type: "noInformation",
      display: !1
    }), !h.length && !d.length && s && c({
      type: "generic",
      display: !0
    }), h.length && !d.length && s && c({
      type: "compatible",
      display: !0
    }), h.length && !d.length && !s && c({
      type: "noCompatible",
      display: !0
    }), h.length && d.length && c({
      type: "compatible",
      display: !0
    });
  };
  return $(() => {
    g();
  }, [K.value, i, a]), $(() => {
    v();
  }, [K.value, i, a, h, d]), p(V, {
    children: [p("style", {
      type: "text/css",
      children: jh
    }), u.display && p("div", {
      className: "variant-selector-wrapper",
      children: p("div", {
        className: "title",
        children: [t, p(Yh, {
          clickable: r,
          showall: n
        })]
      })
    }), l && p(et, {
      messages: l,
      left: !0,
      margin: 10
    }), u.type === "loading" && u.display ? p("div", {
      className: `indicator-wrapper ${o || s ? "full-width" : ""}`,
      children: [p("div", {
        className: "loading-wrapper",
        children: p(At, {
          isLoading: !0,
          colour: "#d1d5db"
        })
      }), p("div", {
        className: "loading-wrapper",
        children: p(At, {
          isLoading: !0,
          colour: "#d1d5db"
        })
      })]
    }) : u.type === "generic" && u.display ? p("div", {
      className: "indicator-wrapper",
      children: i.map((y, _) => p(Hh, {
        item: y,
        clickable: !0,
        currentVariant: e
      }, _))
    }) : u.type === "noCompatible" && u.display ? p("div", {
      className: "indicator-wrapper full-width",
      children: p("div", {
        className: "loading-wrapper",
        children: w("variantselector_no_compatible")
      })
    }) : u.type === "compatible" && u.display ? p("div", {
      className: `indicator-wrapper ${o || s ? "full-width" : ""}`,
      children: i.map((y, _) => {
        if (!(!y.compatible && !s && !n))
          return p(Kh, {
            item: y,
            clickable: r,
            currentVariant: e,
            override: s
          }, _);
      })
    }) : u.type === "noInformation" && u.display ? p("div", {
      className: "indicator-wrapper full-width",
      children: p("div", {
        className: "loading-wrapper",
        children: w("variantselector_no_compatible_information")
      })
    }) : p(V, {})]
  });
}, Jh = ({
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
  "data-override": f,
  "data-sku": h
}) => {
  var T;
  const b = K.value, x = window.BikeMatrix.getConfig(), [w, g] = M([]), [v, y] = M(null);
  let _ = ((T = xr()) == null ? void 0 : T.language) || "en-GB";
  const A = new Be(x.apiUrl, x.apiKey, x.apiToken, x.isShopify), D = h || x.sku, [k, C] = M(""), {
    t: S
  } = X(), E = async () => {
    const F = i.split("~");
    let P = [], z = [];
    if (F.map((N) => {
      let I = N.split(e || "|");
      P.push(I[0].length > 2 ? I[0] : I[2]), z.push({
        title: I[1],
        id: I[2],
        sku: I[0].length > 2 ? I[0] : I[2],
        index: parseInt(I[3])
      });
    }), b) {
      C("");
      const N = await A.checkSkusCompatibilityWithResults(b.key, P, _);
      if (!N.success) {
        C(N.error), x.logLevel === "verbose" && console.error(N.logError);
        return;
      }
      let I = [];
      N.data.map((L) => {
        z.map((B) => {
          L.sku === B.sku && I.push({
            bikeKey: L.bikeKey,
            sku: L.sku,
            compatible: L.compatible,
            compatibilityMessage: L.compatibilityMessage,
            warning: L.warning,
            warningMessage: L.warningMessage,
            compatibilityLogGuid: L.compatibilityLogGuid,
            title: B.title,
            id: B.id,
            index: B.index
          });
        });
      }), g(I.sort((L, B) => L.index - B.index));
    } else {
      let N = [];
      z.map((I) => {
        N.push({
          sku: I.sku,
          title: I.title,
          id: I.id,
          index: I.index
        });
      }), g(N.sort((I, L) => I.index - L.index));
    }
  };
  return $(() => {
    E();
  }, [b, D]), $(() => {
    const P = new URLSearchParams(window.location.search).get("variant"), z = window.location.href;
    if (w && u === "true" && !P) {
      let N = !1;
      z.charAt(z.length - 1) === "?" && (N = !0);
      for (let I = 0; I < w.length; I++)
        if (w[I].compatible) {
          window.location.href = window.location + (N ? "variant=" : "?variant=") + w[I].id;
          break;
        }
    }
    P ? y(P) : w.length && y(w[0].id);
  }, [w]), p("div", {
    style: {
      paddingTop: `${c}px`,
      paddingBottom: `${d}px`
    },
    children: a !== "true" && p(Zh, {
      data: w,
      currentVariant: v,
      showall: t === "true",
      override: f === "true",
      clickable: r === "true",
      fullWidth: s === "true" || f === "true",
      title: o || S("variantselector_title"),
      sku: D,
      error: k
    })
  });
}, Xh = typeof window < "u";
function Bt(i, e, t = [], r = null) {
  Xu((s) => Yn.value ? p(i, {
    ...s
  }) : p(V, {}), e, t, r);
}
function Qh() {
  Bt(Dh, "bikematrix-bikeselector", [], {
    shadow: !0
  }), Bt(Sh, "bikematrix-productresult", ["data-sku"], {
    shadow: !0
  }), Bt(Th, "bikematrix-collectionresult", ["data-product-id", "data-product-skus", "data-padding-top", "data-padding-bottom"], {
    shadow: !0
  }), Bt(zu, "bikematrix-compatibilitylabel", ["data-type"], {
    shadow: !0
  }), Bt(zh, "bikematrix-compatiblelist", ["data-title", "data-current-count", "data-total-count"]), Bt($h, "bikematrix-bikeselectorbanner", ["data-title", "data-mobile-title", "data-color", "data-full-width", "data-font-color", "data-show"], {
    shadow: !0
  }), Bt(qu, "bikematrix-bikon", ["data-color"], {
    shadow: !0
  }), Bt(Jh, "bikematrix-variantselector", ["data-title", "data-variants", "data-delimiter", "data-showall", "data-clickable", "data-query-param", "data-full-width", "data-show", "data-route-variant", "data-padding-top", "data-padding-bottom", "data-override", "data-sku"], {
    shadow: !0
  });
}
function e0() {
  if (!Xh)
    return null;
  const i = kp.getInstance(), e = {
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
  return typeof process < "u" && process.env.NODE_ENV === "development" && (e.core = i), window.BikeMatrix = e, Qh(), document.currentScript && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => e.init()) : e.init()), e;
}
const t0 = e0();
export {
  t0 as default
};
