var Ze, S, ro, oo, ve, dr, ao, Ut, io, Je = {}, no = [], Qo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, wt = Array.isArray;
function fe(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function so(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function N(t, e, r) {
  var o, a, i, n = {};
  for (i in e)
    i == "key" ? o = e[i] : i == "ref" ? a = e[i] : n[i] = e[i];
  if (arguments.length > 2 && (n.children = arguments.length > 3 ? Ze.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      n[i] === void 0 && (n[i] = t.defaultProps[i]);
  return je(t, n, o, a, null);
}
function je(t, e, r, o, a) {
  var i = { type: t, props: e, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: a ?? ++ro, __i: -1, __u: 0 };
  return a == null && S.vnode != null && S.vnode(i), i;
}
function q(t) {
  return t.children;
}
function le(t, e) {
  this.props = t, this.context = e;
}
function Le(t, e) {
  if (e == null)
    return t.__ ? Le(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? Le(t) : null;
}
function uo(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return uo(t);
  }
}
function It(t) {
  (!t.__d && (t.__d = !0) && ve.push(t) && !ft.__r++ || dr !== S.debounceRendering) && ((dr = S.debounceRendering) || ao)(ft);
}
function ft() {
  var t, e, r, o, a, i, n, s, u;
  for (ve.sort(Ut); t = ve.shift(); )
    t.__d && (e = ve.length, o = void 0, i = (a = (r = t).__v).__e, s = [], u = [], (n = r.__P) && ((o = fe({}, a)).__v = a.__v + 1, S.vnode && S.vnode(o), Qt(n, o, a, r.__n, n.ownerSVGElement !== void 0, 32 & a.__u ? [i] : null, s, i ?? Le(a), !!(32 & a.__u), u), o.__v = a.__v, o.__.__k[o.__i] = o, po(s, o, u), o.__e != i && uo(o)), ve.length > e && ve.sort(Ut));
  ft.__r = 0;
}
function lo(t, e, r, o, a, i, n, s, u, l, p) {
  var c, g, f, _, m, y = o && o.__k || no, k = e.length;
  for (r.__d = u, Xo(r, e, y), u = r.__d, c = 0; c < k; c++)
    (f = r.__k[c]) != null && typeof f != "boolean" && typeof f != "function" && (g = f.__i === -1 ? Je : y[f.__i] || Je, f.__i = c, Qt(t, f, g, a, i, n, s, u, l, p), _ = f.__e, f.ref && g.ref != f.ref && (g.ref && Xt(g.ref, null, f), p.push(f.ref, f.__c || _, f)), m == null && _ != null && (m = _), 65536 & f.__u || g.__k === f.__k ? u = co(f, u, t) : typeof f.type == "function" && f.__d !== void 0 ? u = f.__d : _ && (u = _.nextSibling), f.__d = void 0, f.__u &= -196609);
  r.__d = u, r.__e = m;
}
function Xo(t, e, r) {
  var o, a, i, n, s, u = e.length, l = r.length, p = l, c = 0;
  for (t.__k = [], o = 0; o < u; o++)
    n = o + c, (a = t.__k[o] = (a = e[o]) == null || typeof a == "boolean" || typeof a == "function" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? je(null, a, null, null, null) : wt(a) ? je(q, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? je(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null ? (a.__ = t, a.__b = t.__b + 1, s = ea(a, r, n, p), a.__i = s, i = null, s !== -1 && (p--, (i = r[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && c--, typeof a.type != "function" && (a.__u |= 65536)) : s !== n && (s === n + 1 ? c++ : s > n ? p > u - n ? c += s - n : c-- : s < n ? s == n - 1 && (c = s - n) : c = 0, s !== o + c && (a.__u |= 65536))) : (i = r[n]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = Le(i)), Vt(i, i, !1), r[n] = null, p--);
  if (p)
    for (o = 0; o < l; o++)
      (i = r[o]) != null && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = Le(i)), Vt(i, i));
}
function co(t, e, r) {
  var o, a;
  if (typeof t.type == "function") {
    for (o = t.__k, a = 0; o && a < o.length; a++)
      o[a] && (o[a].__ = t, e = co(o[a], e, r));
    return e;
  }
  t.__e != e && (r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function ht(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (wt(t) ? t.some(function(r) {
    ht(r, e);
  }) : e.push(t)), e;
}
function ea(t, e, r, o) {
  var a = t.key, i = t.type, n = r - 1, s = r + 1, u = e[r];
  if (u === null || u && a == u.key && i === u.type && !(131072 & u.__u))
    return r;
  if (o > (u != null && !(131072 & u.__u) ? 1 : 0))
    for (; n >= 0 || s < e.length; ) {
      if (n >= 0) {
        if ((u = e[n]) && !(131072 & u.__u) && a == u.key && i === u.type)
          return n;
        n--;
      }
      if (s < e.length) {
        if ((u = e[s]) && !(131072 & u.__u) && a == u.key && i === u.type)
          return s;
        s++;
      }
    }
  return -1;
}
function pr(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || Qo.test(e) ? r : r + "px";
}
function st(t, e, r, o, a) {
  var i;
  e:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            r && e in r || pr(t.style, e, "");
        if (r)
          for (e in r)
            o && r[e] === o[e] || pr(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? o ? r.u = o.u : (r.u = Date.now(), t.addEventListener(e, i ? fr : gr, i)) : t.removeEventListener(e, i ? fr : gr, i);
    else {
      if (a)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in t)
        try {
          t[e] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, r));
    }
}
function gr(t) {
  if (this.l) {
    var e = this.l[t.type + !1];
    if (t.t) {
      if (t.t <= e.u)
        return;
    } else
      t.t = Date.now();
    return e(S.event ? S.event(t) : t);
  }
}
function fr(t) {
  if (this.l)
    return this.l[t.type + !0](S.event ? S.event(t) : t);
}
function Qt(t, e, r, o, a, i, n, s, u, l) {
  var p, c, g, f, _, m, y, k, b, x, v, w, A, B, z, L = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & r.__u && (u = !!(32 & r.__u), i = [s = e.__e = r.__e]), (p = S.__b) && p(e);
  e:
    if (typeof L == "function")
      try {
        if (k = e.props, b = (p = L.contextType) && o[p.__c], x = p ? b ? b.props.value : p.__ : o, r.__c ? y = (c = e.__c = r.__c).__ = c.__E : ("prototype" in L && L.prototype.render ? e.__c = c = new L(k, x) : (e.__c = c = new le(k, x), c.constructor = L, c.render = ra), b && b.sub(c), c.props = k, c.state || (c.state = {}), c.context = x, c.__n = o, g = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), L.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = fe({}, c.__s)), fe(c.__s, L.getDerivedStateFromProps(k, c.__s))), f = c.props, _ = c.state, c.__v = e, g)
          L.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (L.getDerivedStateFromProps == null && k !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(k, x), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(k, c.__s, x) === !1 || e.__v === r.__v)) {
            for (e.__v !== r.__v && (c.props = k, c.state = c.__s, c.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(O) {
              O && (O.__ = e);
            }), v = 0; v < c._sb.length; v++)
              c.__h.push(c._sb[v]);
            c._sb = [], c.__h.length && n.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(k, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, _, m);
          });
        }
        if (c.context = x, c.props = k, c.__P = t, c.__e = !1, w = S.__r, A = 0, "prototype" in L && L.prototype.render) {
          for (c.state = c.__s, c.__d = !1, w && w(e), p = c.render(c.props, c.state, c.context), B = 0; B < c._sb.length; B++)
            c.__h.push(c._sb[B]);
          c._sb = [];
        } else
          do
            c.__d = !1, w && w(e), p = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++A < 25);
        c.state = c.__s, c.getChildContext != null && (o = fe(fe({}, o), c.getChildContext())), g || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(f, _)), lo(t, wt(z = p != null && p.type === q && p.key == null ? p.props.children : p) ? z : [z], e, r, o, a, i, n, s, u, l), c.base = e.__e, e.__u &= -161, c.__h.length && n.push(c), y && (c.__E = c.__ = null);
      } catch (O) {
        e.__v = null, u || i != null ? (e.__e = s, e.__u |= u ? 160 : 32, i[i.indexOf(s)] = null) : (e.__e = r.__e, e.__k = r.__k), S.__e(O, e, r);
      }
    else
      i == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = ta(r.__e, e, r, o, a, i, n, u, l);
  (p = S.diffed) && p(e);
}
function po(t, e, r) {
  e.__d = void 0;
  for (var o = 0; o < r.length; o++)
    Xt(r[o], r[++o], r[++o]);
  S.__c && S.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(i) {
        i.call(a);
      });
    } catch (i) {
      S.__e(i, a.__v);
    }
  });
}
function ta(t, e, r, o, a, i, n, s, u) {
  var l, p, c, g, f, _, m, y = r.props, k = e.props, b = e.type;
  if (b === "svg" && (a = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((f = i[l]) && "setAttribute" in f == !!b && (b ? f.localName === b : f.nodeType === 3)) {
        t = f, i[l] = null;
        break;
      }
  }
  if (t == null) {
    if (b === null)
      return document.createTextNode(k);
    t = a ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, k.is && k), i = null, s = !1;
  }
  if (b === null)
    y === k || s && t.data === k || (t.data = k);
  else {
    if (i = i && Ze.call(t.childNodes), y = r.props || Je, !s && i != null)
      for (y = {}, l = 0; l < t.attributes.length; l++)
        y[(f = t.attributes[l]).name] = f.value;
    for (l in y)
      f = y[l], l == "children" || (l == "dangerouslySetInnerHTML" ? c = f : l === "key" || l in k || st(t, l, null, f, a));
    for (l in k)
      f = k[l], l == "children" ? g = f : l == "dangerouslySetInnerHTML" ? p = f : l == "value" ? _ = f : l == "checked" ? m = f : l === "key" || s && typeof f != "function" || y[l] === f || st(t, l, f, y[l], a);
    if (p)
      s || c && (p.__html === c.__html || p.__html === t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
    else if (c && (t.innerHTML = ""), lo(t, wt(g) ? g : [g], e, r, o, a && b !== "foreignObject", i, n, i ? i[0] : r.__k && Le(r, 0), s, u), i != null)
      for (l = i.length; l--; )
        i[l] != null && so(i[l]);
    s || (l = "value", _ !== void 0 && (_ !== t[l] || b === "progress" && !_ || b === "option" && _ !== y[l]) && st(t, l, _, y[l], !1), l = "checked", m !== void 0 && m !== t[l] && st(t, l, m, y[l], !1));
  }
  return t;
}
function Xt(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    S.__e(o, r);
  }
}
function Vt(t, e, r) {
  var o, a;
  if (S.unmount && S.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Xt(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (i) {
        S.__e(i, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (a = 0; a < o.length; a++)
      o[a] && Vt(o[a], e, r || typeof t.type != "function");
  r || t.__e == null || so(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ra(t, e, r) {
  return this.constructor(t, r);
}
function Dt(t, e, r) {
  var o, a, i, n;
  S.__ && S.__(t, e), a = (o = typeof r == "function") ? null : r && r.__k || e.__k, i = [], n = [], Qt(e, t = (!o && r || e).__k = N(q, null, [t]), a || Je, Je, e.ownerSVGElement !== void 0, !o && r ? [r] : a ? null : e.firstChild ? Ze.call(e.childNodes) : null, i, !o && r ? r : a ? a.__e : e.firstChild, o, n), po(i, t, n);
}
function go(t, e) {
  Dt(t, e, go);
}
function fo(t, e, r) {
  var o, a, i, n, s = fe({}, t.props);
  for (i in t.type && t.type.defaultProps && (n = t.type.defaultProps), e)
    i == "key" ? o = e[i] : i == "ref" ? a = e[i] : s[i] = e[i] === void 0 && n !== void 0 ? n[i] : e[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : r), je(t.type, s, o || t.key, a || t.ref, null);
}
function ho(t, e) {
  var r = { __c: e = "__cC" + io++, __: t, Consumer: function(o, a) {
    return o.children(a);
  }, Provider: function(o) {
    var a, i;
    return this.getChildContext || (a = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && a.some(function(s) {
        s.__e = !0, It(s);
      });
    }, this.sub = function(n) {
      a.push(n);
      var s = n.componentWillUnmount;
      n.componentWillUnmount = function() {
        a.splice(a.indexOf(n), 1), s && s.call(n);
      };
    }), o.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
Ze = no.slice, S = { __e: function(t, e, r, o) {
  for (var a, i, n; e = e.__; )
    if ((a = e.__c) && !a.__)
      try {
        if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(t)), n = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, o || {}), n = a.__d), n)
          return a.__E = a;
      } catch (s) {
        t = s;
      }
  throw t;
} }, ro = 0, oo = function(t) {
  return t != null && t.constructor == null;
}, le.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = fe({}, this.state), typeof t == "function" && (t = t(fe({}, r), this.props)), t && fe(r, t), t != null && this.__v && (e && this._sb.push(e), It(this));
}, le.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), It(this));
}, le.prototype.render = q, ve = [], ao = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ut = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, ft.__r = 0, io = 0;
function er() {
  return (er = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }).apply(this, arguments);
}
var oa = ["context", "children"];
function aa(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, r = function(o, a) {
    if (o == null)
      return {};
    var i, n, s = {}, u = Object.keys(o);
    for (n = 0; n < u.length; n++)
      a.indexOf(i = u[n]) >= 0 || (s[i] = o[i]);
    return s;
  }(t, oa);
  return fo(e, r);
}
function ia() {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = N(aa, er({}, this._props, { context: t.detail.context }), function e(r, o) {
    if (r.nodeType === 3)
      return r.data;
    if (r.nodeType !== 1)
      return null;
    var a = [], i = {}, n = 0, s = r.attributes, u = r.childNodes;
    for (n = s.length; n--; )
      s[n].name !== "slot" && (i[s[n].name] = s[n].value, i[bo(s[n].name)] = s[n].value);
    for (n = u.length; n--; ) {
      var l = e(u[n], null), p = u[n].slot;
      p ? i[p] = N(hr, { name: p }, l) : a[n] = l;
    }
    var c = o ? N(hr, null, a) : a;
    return N(o || r.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? go : Dt)(this._vdom, this._root);
}
function bo(t) {
  return t.replace(/-(\w)/g, function(e, r) {
    return r ? r.toUpperCase() : "";
  });
}
function na(t, e, r) {
  if (this._vdom) {
    var o = {};
    o[t] = r = r ?? void 0, o[bo(t)] = r, this._vdom = fo(this._vdom, o), Dt(this._vdom, this._root);
  }
}
function sa() {
  Dt(this._vdom = null, this._root);
}
function hr(t, e) {
  var r = this;
  return N("slot", er({}, t, { ref: function(o) {
    o ? (r.ref = o, r._listener || (r._listener = function(a) {
      a.stopPropagation(), a.detail.context = e;
    }, o.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function ua(t, e, r, o) {
  function a() {
    var i = Reflect.construct(HTMLElement, [], a);
    return i._vdomComponent = t, i._root = o && o.shadow ? i.attachShadow({ mode: o.mode || "open" }) : i, i;
  }
  return (a.prototype = Object.create(HTMLElement.prototype)).constructor = a, a.prototype.connectedCallback = ia, a.prototype.attributeChangedCallback = na, a.prototype.disconnectedCallback = sa, r = r || t.observedAttributes || Object.keys(t.propTypes || {}), a.observedAttributes = r, r.forEach(function(i) {
    Object.defineProperty(a.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(i, null, n) : (this._props || (this._props = {}), this._props[i] = n, this.connectedCallback());
      var s = typeof n;
      n != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, n);
    } });
  }), customElements.define(e || t.tagName || t.displayName || t.name, a);
}
var qe, K, Lt, br, Ye = 0, mo = [], pt = [], Z = S, mr = Z.__b, _r = Z.__r, yr = Z.diffed, kr = Z.__c, vr = Z.unmount, xr = Z.__;
function At(t, e) {
  Z.__h && Z.__h(K, t, Ye || e), Ye = 0;
  var r = K.__H || (K.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({ __V: pt }), r.__[t];
}
function Q(t) {
  return Ye = 1, la(ko, t);
}
function la(t, e, r) {
  var o = At(qe++, 2);
  if (o.t = t, !o.__c && (o.__ = [r ? r(e) : ko(void 0, e), function(s) {
    var u = o.__N ? o.__N[0] : o.__[0], l = o.t(u, s);
    u !== l && (o.__N = [l, o.__[1]], o.__c.setState({}));
  }], o.__c = K, !K.u)) {
    var a = function(s, u, l) {
      if (!o.__c.__H)
        return !0;
      var p = o.__c.__H.__.filter(function(g) {
        return !!g.__c;
      });
      if (p.every(function(g) {
        return !g.__N;
      }))
        return !i || i.call(this, s, u, l);
      var c = !1;
      return p.forEach(function(g) {
        if (g.__N) {
          var f = g.__[0];
          g.__ = g.__N, g.__N = void 0, f !== g.__[0] && (c = !0);
        }
      }), !(!c && o.__c.props === s) && (!i || i.call(this, s, u, l));
    };
    K.u = !0;
    var i = K.shouldComponentUpdate, n = K.componentWillUpdate;
    K.componentWillUpdate = function(s, u, l) {
      if (this.__e) {
        var p = i;
        i = void 0, a(s, u, l), i = p;
      }
      n && n.call(this, s, u, l);
    }, K.shouldComponentUpdate = a;
  }
  return o.__N || o.__;
}
function Y(t, e) {
  var r = At(qe++, 3);
  !Z.__s && yo(r.__H, e) && (r.__ = t, r.i = e, K.__H.__h.push(r));
}
function Qe(t) {
  return Ye = 5, ce(function() {
    return { current: t };
  }, []);
}
function ce(t, e) {
  var r = At(qe++, 7);
  return yo(r.__H, e) ? (r.__V = t(), r.i = e, r.__h = t, r.__V) : r.__;
}
function ca(t, e) {
  return Ye = 8, ce(function() {
    return t;
  }, e);
}
function _o(t) {
  var e = K.context[t.__c], r = At(qe++, 9);
  return r.c = t, e ? (r.__ == null && (r.__ = !0, e.sub(K)), e.props.value) : t.__;
}
function da() {
  for (var t; t = mo.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(gt), t.__H.__h.forEach(Mt), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], Z.__e(e, t.__v);
      }
}
Z.__b = function(t) {
  K = null, mr && mr(t);
}, Z.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), xr && xr(t, e);
}, Z.__r = function(t) {
  _r && _r(t), qe = 0;
  var e = (K = t.__c).__H;
  e && (Lt === K ? (e.__h = [], K.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = pt, r.__N = r.i = void 0;
  })) : (e.__h.forEach(gt), e.__h.forEach(Mt), e.__h = [], qe = 0)), Lt = K;
}, Z.diffed = function(t) {
  yr && yr(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (mo.push(e) !== 1 && br === Z.requestAnimationFrame || ((br = Z.requestAnimationFrame) || pa)(da)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== pt && (r.__ = r.__V), r.i = void 0, r.__V = pt;
  })), Lt = K = null;
}, Z.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(gt), r.__h = r.__h.filter(function(o) {
        return !o.__ || Mt(o);
      });
    } catch (o) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], Z.__e(o, r.__v);
    }
  }), kr && kr(t, e);
}, Z.unmount = function(t) {
  vr && vr(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(o) {
    try {
      gt(o);
    } catch (a) {
      e = a;
    }
  }), r.__H = void 0, e && Z.__e(e, r.__v));
};
var Cr = typeof requestAnimationFrame == "function";
function pa(t) {
  var e, r = function() {
    clearTimeout(o), Cr && cancelAnimationFrame(e), setTimeout(t);
  }, o = setTimeout(r, 100);
  Cr && (e = requestAnimationFrame(r));
}
function gt(t) {
  var e = K, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), K = e;
}
function Mt(t) {
  var e = K;
  t.__c = t.__(), K = e;
}
function yo(t, e) {
  return !t || t.length !== e.length || e.some(function(r, o) {
    return r !== t[o];
  });
}
function ko(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function ga(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function wr(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var o in e)
    if (o !== "__source" && t[o] !== e[o])
      return !0;
  return !1;
}
function Dr(t, e) {
  this.props = t, this.context = e;
}
(Dr.prototype = new le()).isPureReactComponent = !0, Dr.prototype.shouldComponentUpdate = function(t, e) {
  return wr(this.props, t) || wr(this.state, e);
};
var Ar = S.__b;
S.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Ar && Ar(t);
};
var fa = S.__e;
S.__e = function(t, e, r, o) {
  if (t.then) {
    for (var a, i = e; i = i.__; )
      if ((a = i.__c) && a.__c)
        return e.__e == null && (e.__e = r.__e, e.__k = r.__k), a.__c(t, e);
  }
  fa(t, e, r, o);
};
var Br = S.unmount;
function vo(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(o) {
    typeof o.__c == "function" && o.__c();
  }), t.__c.__H = null), (t = ga({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(o) {
    return vo(o, e, r);
  })), t;
}
function xo(t, e, r) {
  return t && r && (t.__v = null, t.__k = t.__k && t.__k.map(function(o) {
    return xo(o, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = r)), t;
}
function qt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Co(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function ut() {
  this.u = null, this.o = null;
}
S.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Br && Br(t);
}, (qt.prototype = new le()).__c = function(t, e) {
  var r = e.__c, o = this;
  o.t == null && (o.t = []), o.t.push(r);
  var a = Co(o.__v), i = !1, n = function() {
    i || (i = !0, r.__R = null, a ? a(s) : s());
  };
  r.__R = n;
  var s = function() {
    if (!--o.__u) {
      if (o.state.__a) {
        var u = o.state.__a;
        o.__v.__k[0] = xo(u, u.__c.__P, u.__c.__O);
      }
      var l;
      for (o.setState({ __a: o.__b = null }); l = o.t.pop(); )
        l.forceUpdate();
    }
  };
  o.__u++ || 32 & e.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), t.then(n, n);
}, qt.prototype.componentWillUnmount = function() {
  this.t = [];
}, qt.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = vo(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var a = e.__a && N(q, null, t.fallback);
  return a && (a.__u &= -33), [N(q, null, e.__a ? null : t.children), a];
};
var Sr = function(t, e, r) {
  if (++r[1] === r[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (r = t.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.u = r = r[2];
    }
};
(ut.prototype = new le()).__a = function(t) {
  var e = this, r = Co(e.__v), o = e.o.get(t);
  return o[0]++, function(a) {
    var i = function() {
      e.props.revealOrder ? (o.push(a), Sr(e, t, o)) : a();
    };
    r ? r(i) : i();
  };
}, ut.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = ht(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.o.set(e[r], this.u = [1, 0, this.u]);
  return t.children;
}, ut.prototype.componentDidUpdate = ut.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, r) {
    Sr(t, r, e);
  });
};
var ha = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ba = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ma = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, _a = /[A-Z0-9]/g, ya = typeof document < "u", ka = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
le.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(le.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Er = S.event;
function va() {
}
function xa() {
  return this.cancelBubble;
}
function Ca() {
  return this.defaultPrevented;
}
S.event = function(t) {
  return Er && (t = Er(t)), t.persist = va, t.isPropagationStopped = xa, t.isDefaultPrevented = Ca, t.nativeEvent = t;
};
var wa = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Fr = S.vnode;
S.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var r = e.props, o = e.type, a = {};
    for (var i in r) {
      var n = r[i];
      if (!(i === "value" && "defaultValue" in r && n == null || ya && i === "children" && o === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && n === !0 ? n = "" : s === "translate" && n === "no" ? n = !1 : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || o !== "input" && o !== "textarea" || ka(r.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : ma.test(i) ? i = s : o.indexOf("-") === -1 && ba.test(i) ? i = i.replace(_a, "-$&").toLowerCase() : n === null && (n = void 0) : s = i = "oninput", s === "oninput" && a[i = s] && (i = "oninputCapture"), a[i] = n;
      }
    }
    o == "select" && a.multiple && Array.isArray(a.value) && (a.value = ht(r.children).forEach(function(u) {
      u.props.selected = a.value.indexOf(u.props.value) != -1;
    })), o == "select" && a.defaultValue != null && (a.value = ht(r.children).forEach(function(u) {
      u.props.selected = a.multiple ? a.defaultValue.indexOf(u.props.value) != -1 : a.defaultValue == u.props.value;
    })), r.class && !r.className ? (a.class = r.class, Object.defineProperty(a, "className", wa)) : (r.className && !r.class || r.class && r.className) && (a.class = a.className = r.className), e.props = a;
  }(t), t.$$typeof = ha, Fr && Fr(t);
};
var Lr = S.__r;
S.__r = function(t) {
  Lr && Lr(t), t.__c;
};
var qr = S.diffed;
S.diffed = function(t) {
  qr && qr(t);
  var e = t.props, r = t.__e;
  r != null && t.type === "textarea" && "value" in e && e.value !== r.value && (r.value = e.value == null ? "" : e.value);
};
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Da(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
const Aa = (...t) => {
  console != null && console.warn && (we(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t));
}, zr = {}, jt = (...t) => {
  we(t[0]) && zr[t[0]] || (we(t[0]) && (zr[t[0]] = /* @__PURE__ */ new Date()), Aa(...t));
}, wo = (t, e) => () => {
  if (t.isInitialized)
    e();
  else {
    const r = () => {
      setTimeout(() => {
        t.off("initialized", r);
      }, 0), e();
    };
    t.on("initialized", r);
  }
}, Rr = (t, e, r) => {
  t.loadNamespaces(e, wo(t, r));
}, Nr = (t, e, r, o) => {
  we(r) && (r = [r]), r.forEach((a) => {
    t.options.ns.indexOf(a) < 0 && t.options.ns.push(a);
  }), t.loadLanguages(e, wo(t, o));
}, Ba = (t, e, r = {}) => !e.languages || !e.languages.length ? (jt("i18n.languages were undefined or empty", e.languages), !0) : e.hasLoadedNamespace(t, {
  lng: r.lng,
  precheck: (o, a) => {
    var i;
    if (((i = r.bindI18n) == null ? void 0 : i.indexOf("languageChanging")) > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, t))
      return !1;
  }
}), we = (t) => typeof t == "string", Sa = (t) => typeof t == "object" && t !== null, Ea = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Fa = {
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
}, La = (t) => Fa[t], qa = (t) => t.replace(Ea, La);
let $t = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: qa
};
const za = (t = {}) => {
  $t = {
    ...$t,
    ...t
  };
}, Ra = () => $t;
let Do;
const Na = (t) => {
  Do = t;
}, bt = () => Do, Pa = {
  type: "3rdParty",
  init(t) {
    za(t.options.react), Na(t);
  }
}, Ta = ho();
class Oa {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Ua = (t, e) => {
  const r = Qe();
  return Y(() => {
    r.current = e ? r.current : t;
  }, [t, e]), r.current;
}, Ao = (t, e, r, o) => t.getFixedT(e, r, o), Ia = (t, e, r, o) => ca(Ao(t, e, r, o), [t, e, r, o]), ae = (t, e = {}) => {
  var v, w, A, B;
  const {
    i18n: r
  } = e, {
    i18n: o,
    defaultNS: a
  } = _o(Ta) || {}, i = r || o || bt();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new Oa()), !i) {
    jt("You will need to pass in an i18next instance by using initReactI18next");
    const z = (O, V) => we(V) ? V : Sa(V) && we(V.defaultValue) ? V.defaultValue : Array.isArray(O) ? O[O.length - 1] : O, L = [z, {}, !1];
    return L.t = z, L.i18n = {}, L.ready = !1, L;
  }
  (v = i.options.react) != null && v.wait && jt("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const n = {
    ...Ra(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: s,
    keyPrefix: u
  } = n;
  let l = t || a || ((w = i.options) == null ? void 0 : w.defaultNS);
  l = we(l) ? [l] : l || ["translation"], (B = (A = i.reportNamespaces).addUsedNamespaces) == null || B.call(A, l);
  const p = (i.isInitialized || i.initializedStoreOnce) && l.every((z) => Ba(z, i, n)), c = Ia(i, e.lng || null, n.nsMode === "fallback" ? l : l[0], u), g = () => c, f = () => Ao(i, e.lng || null, n.nsMode === "fallback" ? l : l[0], u), [_, m] = Q(g);
  let y = l.join();
  e.lng && (y = `${e.lng}${y}`);
  const k = Ua(y), b = Qe(!0);
  Y(() => {
    const {
      bindI18n: z,
      bindI18nStore: L
    } = n;
    b.current = !0, !p && !s && (e.lng ? Nr(i, e.lng, l, () => {
      b.current && m(f);
    }) : Rr(i, l, () => {
      b.current && m(f);
    })), p && k && k !== y && b.current && m(f);
    const O = () => {
      b.current && m(f);
    };
    return z && (i == null || i.on(z, O)), L && (i == null || i.store.on(L, O)), () => {
      b.current = !1, i && (z == null || z.split(" ").forEach((V) => i.off(V, O))), L && i && L.split(" ").forEach((V) => i.store.off(V, O));
    };
  }, [i, y]), Y(() => {
    b.current && p && m(g);
  }, [i, u, p]);
  const x = [_, i, p];
  if (x.t = _, x.i18n = i, x.ready = p, p || !p && !s)
    return x;
  throw new Promise((z) => {
    e.lng ? Nr(i, e.lng, l, () => z()) : Rr(i, l, () => z());
  });
};
var Va = Symbol.for("preact-signals");
function Bt() {
  if (ye > 1)
    ye--;
  else {
    for (var t, e = !1; $e !== void 0; ) {
      var r = $e;
      for ($e = void 0, Ht++; r !== void 0; ) {
        var o = r.o;
        if (r.o = void 0, r.f &= -3, !(8 & r.f) && So(r))
          try {
            r.c();
          } catch (a) {
            e || (t = a, e = !0);
          }
        r = o;
      }
    }
    if (Ht = 0, ye--, e)
      throw t;
  }
}
function Ma(t) {
  if (ye > 0)
    return t();
  ye++;
  try {
    return t();
  } finally {
    Bt();
  }
}
var j = void 0, $e = void 0, ye = 0, Ht = 0, mt = 0;
function Bo(t) {
  if (j !== void 0) {
    var e = t.n;
    if (e === void 0 || e.t !== j)
      return e = { i: 0, S: t, p: j.s, n: void 0, t: j, e: void 0, x: void 0, r: e }, j.s !== void 0 && (j.s.n = e), j.s = e, t.n = e, 32 & j.f && t.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = j.s, e.n = void 0, j.s.n = e, j.s = e), e;
  }
}
function X(t) {
  this.v = t, this.i = 0, this.n = void 0, this.t = void 0;
}
X.prototype.brand = Va;
X.prototype.h = function() {
  return !0;
};
X.prototype.S = function(t) {
  this.t !== t && t.e === void 0 && (t.x = this.t, this.t !== void 0 && (this.t.e = t), this.t = t);
};
X.prototype.U = function(t) {
  if (this.t !== void 0) {
    var e = t.e, r = t.x;
    e !== void 0 && (e.x = r, t.e = void 0), r !== void 0 && (r.e = e, t.x = void 0), t === this.t && (this.t = r);
  }
};
X.prototype.subscribe = function(t) {
  var e = this;
  return rr(function() {
    var r = e.value, o = j;
    j = void 0;
    try {
      t(r);
    } finally {
      j = o;
    }
  });
};
X.prototype.valueOf = function() {
  return this.value;
};
X.prototype.toString = function() {
  return this.value + "";
};
X.prototype.toJSON = function() {
  return this.value;
};
X.prototype.peek = function() {
  var t = j;
  j = void 0;
  try {
    return this.value;
  } finally {
    j = t;
  }
};
Object.defineProperty(X.prototype, "value", { get: function() {
  var t = Bo(this);
  return t !== void 0 && (t.i = this.i), this.v;
}, set: function(t) {
  if (t !== this.v) {
    if (Ht > 100)
      throw new Error("Cycle detected");
    this.v = t, this.i++, mt++, ye++;
    try {
      for (var e = this.t; e !== void 0; e = e.x)
        e.t.N();
    } finally {
      Bt();
    }
  }
} });
function de(t) {
  return new X(t);
}
function So(t) {
  for (var e = t.s; e !== void 0; e = e.n)
    if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
      return !0;
  return !1;
}
function Eo(t) {
  for (var e = t.s; e !== void 0; e = e.n) {
    var r = e.S.n;
    if (r !== void 0 && (e.r = r), e.S.n = e, e.i = -1, e.n === void 0) {
      t.s = e;
      break;
    }
  }
}
function Fo(t) {
  for (var e = t.s, r = void 0; e !== void 0; ) {
    var o = e.p;
    e.i === -1 ? (e.S.U(e), o !== void 0 && (o.n = e.n), e.n !== void 0 && (e.n.p = o)) : r = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = o;
  }
  t.s = r;
}
function ze(t) {
  X.call(this, void 0), this.x = t, this.s = void 0, this.g = mt - 1, this.f = 4;
}
(ze.prototype = new X()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === mt))
    return !0;
  if (this.g = mt, this.f |= 1, this.i > 0 && !So(this))
    return this.f &= -2, !0;
  var t = j;
  try {
    Eo(this), j = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (r) {
    this.v = r, this.f |= 16, this.i++;
  }
  return j = t, Fo(this), this.f &= -2, !0;
};
ze.prototype.S = function(t) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.S(e);
  }
  X.prototype.S.call(this, t);
};
ze.prototype.U = function(t) {
  if (this.t !== void 0 && (X.prototype.U.call(this, t), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.U(e);
  }
};
ze.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var t = this.t; t !== void 0; t = t.x)
      t.t.N();
  }
};
Object.defineProperty(ze.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var t = Bo(this);
  if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function ja(t) {
  return new ze(t);
}
function Lo(t) {
  var e = t.u;
  if (t.u = void 0, typeof e == "function") {
    ye++;
    var r = j;
    j = void 0;
    try {
      e();
    } catch (o) {
      throw t.f &= -2, t.f |= 8, tr(t), o;
    } finally {
      j = r, Bt();
    }
  }
}
function tr(t) {
  for (var e = t.s; e !== void 0; e = e.n)
    e.S.U(e);
  t.x = void 0, t.s = void 0, Lo(t);
}
function $a(t) {
  if (j !== this)
    throw new Error("Out-of-order effect");
  Fo(this), j = t, this.f &= -2, 8 & this.f && tr(this), Bt();
}
function Xe(t) {
  this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
Xe.prototype.c = function() {
  var t = this.S();
  try {
    if (8 & this.f || this.x === void 0)
      return;
    var e = this.x();
    typeof e == "function" && (this.u = e);
  } finally {
    t();
  }
};
Xe.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Lo(this), Eo(this), ye++;
  var t = j;
  return j = this, $a.bind(this, t);
};
Xe.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = $e, $e = this);
};
Xe.prototype.d = function() {
  this.f |= 8, 1 & this.f || tr(this);
};
function rr(t) {
  var e = new Xe(t);
  try {
    e.c();
  } catch (r) {
    throw e.d(), r;
  }
  return e.d.bind(e);
}
var Rt;
function Re(t, e) {
  S[t] = e.bind(null, S[t] || function() {
  });
}
function _t(t) {
  Rt && Rt(), Rt = t && t.S();
}
function qo(t) {
  var e = this, r = t.data, o = Ga(r);
  o.value = r;
  var a = ce(function() {
    for (var i = e.__v; i = i.__; )
      if (i.__c) {
        i.__c.__$f |= 4;
        break;
      }
    return e.__$u.c = function() {
      var n, s = e.__$u.S(), u = a.value;
      s(), oo(u) || ((n = e.base) == null ? void 0 : n.nodeType) !== 3 ? (e.__$f |= 1, e.setState({})) : e.base.data = u;
    }, ja(function() {
      var n = o.value.value;
      return n === 0 ? 0 : n === !0 ? "" : n || "";
    });
  }, []);
  return a.value;
}
qo.displayName = "_st";
Object.defineProperties(X.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: qo }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
Re("__b", function(t, e) {
  if (typeof e.type == "string") {
    var r, o = e.props;
    for (var a in o)
      if (a !== "children") {
        var i = o[a];
        i instanceof X && (r || (e.__np = r = {}), r[a] = i, o[a] = i.peek());
      }
  }
  t(e);
});
Re("__r", function(t, e) {
  _t();
  var r, o = e.__c;
  o && (o.__$f &= -2, (r = o.__$u) === void 0 && (o.__$u = r = function(a) {
    var i;
    return rr(function() {
      i = this;
    }), i.c = function() {
      o.__$f |= 1, o.setState({});
    }, i;
  }())), _t(r), t(e);
});
Re("__e", function(t, e, r, o) {
  _t(), t(e, r, o);
});
Re("diffed", function(t, e) {
  _t();
  var r;
  if (typeof e.type == "string" && (r = e.__e)) {
    var o = e.__np, a = e.props;
    if (o) {
      var i = r.U;
      if (i)
        for (var n in i) {
          var s = i[n];
          s !== void 0 && !(n in o) && (s.d(), i[n] = void 0);
        }
      else
        r.U = i = {};
      for (var u in o) {
        var l = i[u], p = o[u];
        l === void 0 ? (l = Ha(r, u, p, a), i[u] = l) : l.o(p, a);
      }
    }
  }
  t(e);
});
function Ha(t, e, r, o) {
  var a = e in t && t.ownerSVGElement === void 0, i = de(r);
  return { o: function(n, s) {
    i.value = n, o = s;
  }, d: rr(function() {
    var n = i.value.value;
    o[e] !== n && (o[e] = n, a ? t[e] = n : n ? t.setAttribute(e, n) : t.removeAttribute(e));
  }) };
}
Re("unmount", function(t, e) {
  if (typeof e.type == "string") {
    var r = e.__e;
    if (r) {
      var o = r.U;
      if (o) {
        r.U = void 0;
        for (var a in o) {
          var i = o[a];
          i && i.d();
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
  t(e);
});
Re("__h", function(t, e, r, o) {
  (o < 3 || o === 9) && (e.__$f |= 2), t(e, r, o);
});
le.prototype.shouldComponentUpdate = function(t, e) {
  var r = this.__$u;
  if (!(r && r.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
    return !0;
  for (var o in e)
    return !0;
  for (var a in t)
    if (a !== "__source" && t[a] !== this.props[a])
      return !0;
  for (var i in this.props)
    if (!(i in t))
      return !0;
  return !1;
};
function Ga(t) {
  return ce(function() {
    return de(t);
  }, []);
}
const Gt = de(!1), M = de(null), De = de([]), re = de(!1), Ee = de([]), oe = de(!1), Ka = () => {
  Ma(() => {
    M.value = null, De.value = [], re.value = !1, Ee.value = [], oe.value = !1;
  });
}, zo = "bm_currentBike", Ja = "v2", Ya = "https://cdn.bikematrix.io", Pr = {
  // Shopify specific
  isShopify: !1,
  skuField: "sku",
  // Bike Selector
  apiUrl: "https://api.bikematrix.io/",
  apiKey: "",
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
  logLevel: "none"
}, Fe = function(t) {
  return new URL(t, Ya).toString();
};
function Ro(t) {
  var e, r, o = "";
  if (typeof t == "string" || typeof t == "number")
    o += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var a = t.length;
      for (e = 0; e < a; e++)
        t[e] && (r = Ro(t[e])) && (o && (o += " "), o += r);
    } else
      for (r in t)
        t[r] && (o && (o += " "), o += r);
  return o;
}
function Wa() {
  for (var t, e, r = 0, o = "", a = arguments.length; r < a; r++)
    (t = arguments[r]) && (e = Ro(t)) && (o && (o += " "), o += e);
  return o;
}
const or = "-";
function Za(t) {
  const e = Xa(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = t;
  function a(n) {
    const s = n.split(or);
    return s[0] === "" && s.length !== 1 && s.shift(), No(s, e) || Qa(n);
  }
  function i(n, s) {
    const u = r[n] || [];
    return s && o[n] ? [...u, ...o[n]] : u;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  };
}
function No(t, e) {
  var n;
  if (t.length === 0)
    return e.classGroupId;
  const r = t[0], o = e.nextPart.get(r), a = o ? No(t.slice(1), o) : void 0;
  if (a)
    return a;
  if (e.validators.length === 0)
    return;
  const i = t.join(or);
  return (n = e.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : n.classGroupId;
}
const Tr = /^\[(.+)\]$/;
function Qa(t) {
  if (Tr.test(t)) {
    const e = Tr.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Xa(t) {
  const {
    theme: e,
    prefix: r
  } = t, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ti(Object.entries(t.classGroups), r).forEach(([i, n]) => {
    Kt(n, o, i, e);
  }), o;
}
function Kt(t, e, r, o) {
  t.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? e : Or(e, a);
      i.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (ei(a)) {
        Kt(a(o), e, r, o);
        return;
      }
      e.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([i, n]) => {
      Kt(n, Or(e, i), r, o);
    });
  });
}
function Or(t, e) {
  let r = t;
  return e.split(or).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}
function ei(t) {
  return t.isThemeGetter;
}
function ti(t, e) {
  return e ? t.map(([r, o]) => {
    const a = o.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([n, s]) => [e + n, s])) : i);
    return [r, a];
  }) : t;
}
function ri(t) {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function a(i, n) {
    r.set(i, n), e++, e > t && (e = 0, o = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let n = r.get(i);
      if (n !== void 0)
        return n;
      if ((n = o.get(i)) !== void 0)
        return a(i, n), n;
    },
    set(i, n) {
      r.has(i) ? r.set(i, n) : a(i, n);
    }
  };
}
const Po = "!";
function oi(t) {
  const e = t.separator, r = e.length === 1, o = e[0], a = e.length;
  return function(n) {
    const s = [];
    let u = 0, l = 0, p;
    for (let m = 0; m < n.length; m++) {
      let y = n[m];
      if (u === 0) {
        if (y === o && (r || n.slice(m, m + a) === e)) {
          s.push(n.slice(l, m)), l = m + a;
          continue;
        }
        if (y === "/") {
          p = m;
          continue;
        }
      }
      y === "[" ? u++ : y === "]" && u--;
    }
    const c = s.length === 0 ? n : n.substring(l), g = c.startsWith(Po), f = g ? c.substring(1) : c, _ = p && p > l ? p - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: f,
      maybePostfixModifierPosition: _
    };
  };
}
function ai(t) {
  if (t.length <= 1)
    return t;
  const e = [];
  let r = [];
  return t.forEach((o) => {
    o[0] === "[" ? (e.push(...r.sort(), o), r = []) : r.push(o);
  }), e.push(...r.sort()), e;
}
function ii(t) {
  return {
    cache: ri(t.cacheSize),
    splitModifiers: oi(t),
    ...Za(t)
  };
}
const ni = /\s+/;
function si(t, e) {
  const {
    splitModifiers: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = e, i = /* @__PURE__ */ new Set();
  return t.trim().split(ni).map((n) => {
    const {
      modifiers: s,
      hasImportantModifier: u,
      baseClassName: l,
      maybePostfixModifierPosition: p
    } = r(n);
    let c = o(p ? l.substring(0, p) : l), g = !!p;
    if (!c) {
      if (!p)
        return {
          isTailwindClass: !1,
          originalClassName: n
        };
      if (c = o(l), !c)
        return {
          isTailwindClass: !1,
          originalClassName: n
        };
      g = !1;
    }
    const f = ai(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: u ? f + Po : f,
      classGroupId: c,
      originalClassName: n,
      hasPostfixModifier: g
    };
  }).reverse().filter((n) => {
    if (!n.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: u,
      hasPostfixModifier: l
    } = n, p = s + u;
    return i.has(p) ? !1 : (i.add(p), a(u, l).forEach((c) => i.add(s + c)), !0);
  }).reverse().map((n) => n.originalClassName).join(" ");
}
function ui() {
  let t = 0, e, r, o = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = To(e)) && (o && (o += " "), o += r);
  return o;
}
function To(t) {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let o = 0; o < t.length; o++)
    t[o] && (e = To(t[o])) && (r && (r += " "), r += e);
  return r;
}
function li(t, ...e) {
  let r, o, a, i = n;
  function n(u) {
    const l = e.reduce((p, c) => c(p), t());
    return r = ii(l), o = r.cache.get, a = r.cache.set, i = s, s(u);
  }
  function s(u) {
    const l = o(u);
    if (l)
      return l;
    const p = si(u, r);
    return a(u, p), p;
  }
  return function() {
    return i(ui.apply(null, arguments));
  };
}
function H(t) {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}
const Oo = /^\[(?:([a-z-]+):)?(.+)\]$/i, ci = /^\d+\/\d+$/, di = /* @__PURE__ */ new Set(["px", "full", "screen"]), pi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, fi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, hi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ge(t) {
  return Ce(t) || di.has(t) || ci.test(t);
}
function me(t) {
  return Ne(t, "length", wi);
}
function Ce(t) {
  return !!t && !Number.isNaN(Number(t));
}
function lt(t) {
  return Ne(t, "number", Ce);
}
function Te(t) {
  return !!t && Number.isInteger(Number(t));
}
function mi(t) {
  return t.endsWith("%") && Ce(t.slice(0, -1));
}
function F(t) {
  return Oo.test(t);
}
function _e(t) {
  return pi.test(t);
}
const _i = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function yi(t) {
  return Ne(t, _i, Uo);
}
function ki(t) {
  return Ne(t, "position", Uo);
}
const vi = /* @__PURE__ */ new Set(["image", "url"]);
function xi(t) {
  return Ne(t, vi, Ai);
}
function Ci(t) {
  return Ne(t, "", Di);
}
function Oe() {
  return !0;
}
function Ne(t, e, r) {
  const o = Oo.exec(t);
  return o ? o[1] ? typeof e == "string" ? o[1] === e : e.has(o[1]) : r(o[2]) : !1;
}
function wi(t) {
  return gi.test(t) && !fi.test(t);
}
function Uo() {
  return !1;
}
function Di(t) {
  return hi.test(t);
}
function Ai(t) {
  return bi.test(t);
}
function Bi() {
  const t = H("colors"), e = H("spacing"), r = H("blur"), o = H("brightness"), a = H("borderColor"), i = H("borderRadius"), n = H("borderSpacing"), s = H("borderWidth"), u = H("contrast"), l = H("grayscale"), p = H("hueRotate"), c = H("invert"), g = H("gap"), f = H("gradientColorStops"), _ = H("gradientColorStopPositions"), m = H("inset"), y = H("margin"), k = H("opacity"), b = H("padding"), x = H("saturate"), v = H("scale"), w = H("sepia"), A = H("skew"), B = H("space"), z = H("translate"), L = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", F, e], I = () => [F, e], G = () => ["", ge, me], C = () => ["auto", Ce, F], D = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], h = () => ["", "0", F], E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [Ce, lt], W = () => [Ce, F];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Oe],
      spacing: [ge, me],
      blur: ["none", "", _e, F],
      brightness: P(),
      borderColor: [t],
      borderRadius: ["none", "", "full", _e, F],
      borderSpacing: I(),
      borderWidth: G(),
      contrast: P(),
      grayscale: h(),
      hueRotate: W(),
      invert: h(),
      gap: I(),
      gradientColorStops: [t],
      gradientColorStopPositions: [mi, me],
      inset: V(),
      margin: V(),
      opacity: P(),
      padding: I(),
      saturate: P(),
      scale: P(),
      sepia: h(),
      skew: W(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", F]
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
        columns: [_e]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
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
        object: [...D(), F]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        z: ["auto", Te, F]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: V()
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
        flex: ["1", "auto", "initial", "none", F]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: h()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: h()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Te, F]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Oe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Te, F]
        }, F]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": C()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": C()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Oe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Te, F]
        }, F]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": C()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": C()
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
        "auto-cols": ["auto", "min", "max", "fr", F]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", F]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...T()]
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
        content: ["normal", ...T(), "baseline"]
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
        "place-content": [...T(), "baseline"]
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
        "space-x": [B]
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
        "space-y": [B]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [F, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [F, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [_e]
        }, _e]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [F, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [F, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [F, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [F, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", _e, me]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", lt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Oe]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", F]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ce, lt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ge, F]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", F]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", F]
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
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
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
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
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
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ge, me]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ge, F]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
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
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", F]
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
        content: ["none", F]
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
        "bg-opacity": [k]
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
        bg: [...D(), ki]
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
        bg: ["auto", "cover", "contain", yi]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
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
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
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
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...R(), "hidden"]
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
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: R()
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
        outline: ["", ...R()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ge, F]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ge, me]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: G()
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
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ge, me]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", _e, Ci]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Oe]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": J()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", _e, F]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", F]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", F]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: W()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", F]
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
        scale: [v]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [v]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [v]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Te, F]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", F]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", F]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        "will-change": ["auto", "scroll", "contents", "transform", F]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ge, me, lt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
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
const Si = /* @__PURE__ */ li(Bi);
function U(...t) {
  return Si(Wa(t));
}
const Ei = {
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
    checkSkusWithResults: "compatibility/checkSkusWithResults"
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
    checkSkusWithResults: "Compatibility_CheckSkusWithResults"
  }
};
class St {
  constructor(e, r, o) {
    this._apiUrl = o ? window.location.origin + "/apps/proxy/api/" : e, this._apiKey = r ?? "", this._apiType = o ? "shopify" : "bikematrix";
  }
  getEndpoint(e) {
    return Ei[this._apiType][e];
  }
  async getBikeBrands() {
    const e = this.getEndpoint("bikeBrands"), r = await this.makeRequest(e);
    return r.success ? r.data : (console.error(r.error), []);
  }
  async getBikeModels(e) {
    if (!e)
      return console.log("No bike brand selected."), [];
    const r = this.getEndpoint("bikeModels"), o = await this.makeRequest(r, {
      params: {
        bikeBrandId: e
      }
    });
    return o.success ? o.data : (console.error(o.error), []);
  }
  async getBikeFrameSeries(e) {
    if (!e)
      return console.log("No bike model selected."), [];
    const r = this.getEndpoint("framesSeries"), o = await this.makeRequest(r, {
      params: {
        bikeModelId: e
      }
    });
    return o.success ? o.data : (console.error(o.error), []);
  }
  async getBikeSpecs(e) {
    if (!e)
      return console.log("No bike frame series selected."), [];
    const r = this.getEndpoint("bikeSpecs"), o = await this.makeRequest(r, {
      params: {
        bikeModelSpecId: e
      }
    });
    return o.success ? o.data : (console.error(o.error), []);
  }
  async getYears(e) {
    if (!e)
      return console.log("No bike frame series selected."), [];
    const r = this.getEndpoint("bikeSpecYears"), o = await this.makeRequest(r, {
      params: {
        bikeModelSpecId: e
      }
    });
    return o.success ? o.data : (console.error(o.error), []);
  }
  async getFrameSizes(e, r, o) {
    if (!e || !r)
      return console.log("No bike frame series or bike spec selected."), [];
    const a = this.getEndpoint("bikeSpecSizes"), i = await this.makeRequest(a, {
      params: {
        bikeModelSpecId: e,
        bikeSpec: r,
        year: o
      }
    });
    return i.success ? i.data : (console.error(i.error), []);
  }
  async getBikes(e, r, o) {
    if (e && (r || o)) {
      const a = this.getEndpoint("bikeSpecs"), i = await this.makeRequest(a, {
        params: {
          bikeModelSpecId: e,
          bikeSpec: r,
          year: o
        }
      });
      return i.success ? i.data : (console.error(i.error), []);
    } else
      return console.log("No bike frame series and bike spec or year selected."), [];
  }
  async getBrandProductCategories(e) {
    if (e) {
      const r = this.getEndpoint("bikeBrandProductCategories"), o = await this.makeRequest(r, {
        params: {
          bikeBrandId: e
        }
      });
      return o.success ? o.data : (console.error(o.error), []);
    } else
      return console.log("No brand selected."), [];
  }
  async checkSkuCompatibility(e, r, o) {
    if (e && r) {
      const a = this.getEndpoint("checkSku") + `/${e}/${r}/${o}`, i = await this.makeRequest(a);
      return i.success ? i.data : (console.error(i.error), []);
    } else
      return console.log("No bike key and sku passed."), [];
  }
  async checkSkusCompatibility(e, r, o) {
    if (e && r) {
      const a = this.getEndpoint("checkSkus") + `/${e}/${r}/${o}`, i = await this.makeRequest(a);
      return i.success ? i.data : (console.error(i.error), []);
    } else
      return console.log("No bike key and list of skus passed."), [];
  }
  async checkSkusCompatibilityWithResults(e, r, o, a = {}) {
    if (e && r) {
      const i = this.getEndpoint("checkSkusWithResults") + `/${e}/${o}`, n = await this.makeRequest(i, {
        body: JSON.stringify(r),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        ...a
      });
      return n.success ? n.data : (console.error(n.error), []);
    } else
      return console.log("No bike key and list of skus passed."), [];
  }
  async getActiveSubscription(e) {
    if (this._apiType === "shopify") {
      e({
        activeSubscription: !0
      });
      return;
    }
    var r = "activeSubscription";
    const o = await this.makeRequest(r);
    if (!o.success) {
      console.log(`getActiveSubscription Error: ${o.error}`);
      return;
    }
    e(o.data);
  }
  async makeRequest(e, r = {}) {
    const o = new URL(e, this._apiUrl), a = {
      "Cache-Control": "no-cache",
      ...this._apiKey && {
        "bm-subscription-key": this._apiKey
      }
    };
    typeof r.params == "object" && (Object.keys(r.params).forEach((n) => {
      r.params[n] && o.searchParams.set(n, r.params[n]);
    }), delete r.params);
    let i;
    try {
      const n = {
        headers: a,
        ...r
      };
      r.signal && (n.signal = r.signal);
      const s = await fetch(o, n);
      i = {
        success: !0,
        data: await s.json().catch(() => {
          throw new Error("Request failed: " + (s.statusText || "Status" + s.status));
        })
      };
    } catch (n) {
      i = {
        success: !1,
        error: n.message
      };
    }
    return i;
  }
}
const Io = class Me {
  constructor() {
    this.initialized = !1, this.currentBike = null, this.activeSubscription = null, this.components = [], this.config = Pr;
  }
  // Initialize with optional config
  async initialize(e) {
    this.components = [], this.initialized && this.cleanup(), e && (this.config = {
      ...this.config,
      ...e
    }), this.initializeConfig(), this.service = new St(this.config.apiUrl, this.config.apiKey, this.config.isShopify), this.initializeActiveSubscription(), localStorage.bm_currentBike && (this.currentBike = JSON.parse(localStorage.bm_currentBike)), this.setupEventListeners(), this.registerComponents(), this.initialized = !0, Gt.value = !0, this.config.logLevel === "verbose" && console.log("BikeMatrixCore initialized");
  }
  // Singleton pattern to ensure a single global instance
  static getInstance() {
    return Me.instance || (Me.instance = new Me()), Me.instance;
  }
  registerComponents() {
    const e = ["bikematrix-bikeselector", "bikematrix-productresult", "bikematrix-collectionresult", "bikematrix-compatibilitylabel", "bikematrix-compatiblelist", "bikematrix-bikeselectorbanner"];
    this.components = [], e.forEach((r) => {
      const o = document.getElementsByTagName(r);
      Array.from(o).forEach((a) => {
        this.components.push(a);
      });
    }), this.config.logLevel === "verbose" && console.log(`Registered ${this.components.length} components`);
  }
  resetComponents() {
    this.components.forEach((e) => {
      var r;
      try {
        const o = e.cloneNode(!1);
        e.querySelectorAll("template").forEach((i) => {
          o.appendChild(i.cloneNode(!0));
        }), (r = e.parentNode) == null || r.replaceChild(o, e);
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
    this.removeEventListeners(), Ka();
  }
  // Full destroy for complete cleanup
  async destroy() {
    this.cleanup(), this.service = null, this.currentBike = null, this.activeSubscription = null, this.config = {
      ...Pr
    }, this.initialized = !1, Gt.value = !1, this.resetComponents();
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
    document.querySelectorAll('script[type="application/json"][data-bikematrix-config]').forEach((r) => {
      if (r != null && r.textContent)
        try {
          this.config = {
            ...this.config,
            ...JSON.parse(r.textContent)
          };
        } catch {
          console.error("Invalid BikeMatrix configuration"), console.log("configScript ", r.textContent);
        }
    }), this.config.logLevel === "verbose" && console.log("initializeConfig ", JSON.stringify(this.config, null, 2));
  }
  initializeActiveSubscription() {
    const e = sessionStorage.getItem("bm_activeSubscription");
    if (!this.config.isShopify) {
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
    }), document.addEventListener("on:facet-filters:updated", this.handleRefreshCompatibleSkus.bind(this)), document.addEventListener("BikeChanged", this.handleBikeChanged.bind(this));
  }
  removeEventListeners() {
    document.removeEventListener("BikeMatrix:RefreshCompatibleSkus", this.handleRefreshCompatibleSkus), document.removeEventListener("on:facet-filters:updated", this.handleRefreshCompatibleSkus), document.removeEventListener("BikeChanged", this.handleBikeChanged);
  }
  async handleRefreshCompatibleSkus(e) {
    this.RefreshCompatibleSkus().then(() => {
      document.dispatchEvent(new Event("RefreshCompatibility", {
        bubbles: !0,
        composed: !0
      }));
    });
  }
  async handleBikeChanged(e) {
    this.config.logLevel === "verbose" && console.log("Listener BikeChanged..."), this.ChangeBike();
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
    const r = document.querySelector("bikematrix-productresult[data-sku]");
    r && r.setAttribute("data-sku", e), this.config.sku = e;
  }
  // ===== Legacy methods ===== //
  ResetSelectedBikeIndicator() {
    var e, r;
    this.currentBike === null ? (e = window.bm_selectBikeButton) == null || e.classList.remove("show-selected") : (r = window.bm_selectBikeButton) == null || r.classList.add("show-selected");
  }
  ChangeBike() {
    this.config.logLevel === "verbose" && console.log("ChangeBike() Method Called"), !(re.value === !0 || oe.value === !0) && (re.value = !0, oe.value = !0, De.value = [], Ee.value = [], console.log("ChangeBike updateBikeSignal..."), this.updateBikeSignal().then(() => {
      this.config.logLevel === "verbose" && console.log("Bike Signal Updated: ", JSON.stringify(M.value, null, 2)), this.ResetSelectedBikeIndicator(), this.RefreshCompatibleSkus().then(() => {
        document.dispatchEvent(new Event("RefreshCompatibility", {
          bubbles: !0,
          composed: !0
        }));
      });
    }));
  }
  async RefreshCompatibleSkus() {
    var r, o;
    const e = `${(r = M.value) == null ? void 0 : r.key}:${this.config.currentCollectionHandle}:${Ja}`;
    switch (this.config.pageType) {
      case "collection":
        const a = !!M.value && ((o = M.value.compatibleCollections) == null ? void 0 : o.find((i) => i.handle === this.config.currentCollectionHandle));
        this.config.logLevel === "verbose" && console.log("Refresh Compatible SKUs. hasCompatibleCollection: ", a), a ? (await this.RefreshCollectionPageSkus(e), await this.RefreshCollectionListSkus(e)) : (re.value = !1, oe.value = !1);
        break;
      case "search":
      case "index":
        re.value = !1, this.config.pageType === "index" && this.config.showHomePageCollection || this.config.pageType === "search" && this.config.showSearchPageCollection ? await this.RefreshCollectionPageSkus(e) : oe.value = !1;
        break;
      default:
        re.value = !1, oe.value = !1;
        break;
    }
  }
  async RefreshCollectionPageSkus(e) {
    var n, s;
    let r = document.getElementsByTagName("bikematrix-collectionresult"), a = Array.from(r).map((u) => {
      const l = u.getAttribute("data-product-skus") || "";
      return l == null ? void 0 : l.split(",").filter((p) => !!p);
    }).flat();
    this.config.logLevel === "verbose" && console.log("Refresh Collection Page SKUs. SKUs: ", JSON.stringify(a), null, 2);
    var i = ((n = bt()) == null ? void 0 : n.language) || "en-GB";
    if (a) {
      const u = await this.service.checkSkusCompatibilityWithResults((s = M.value) == null ? void 0 : s.key, a, i);
      Ee.value = u;
    } else
      Ee.value = [];
    oe.value = !1;
  }
  async RefreshCollectionListSkus(e) {
    var a, i;
    var r = JSON.parse(sessionStorage.getItem(e));
    if (r)
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from Session: ", JSON.stringify(r), null, 2), De.value = r;
    else {
      const n = Object.values(this.config.products || {}).map((p) => p.skus).flat();
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(n), null, 2);
      var o = ((a = bt()) == null ? void 0 : a.language) || "en-GB";
      const s = new AbortController(), u = s.signal, l = () => s.abort();
      window.addEventListener("beforeunload", l);
      try {
        if (!((i = M.value) != null && i.key))
          throw new Error("BikeSignal key is undefined");
        const p = await this.service.checkSkusCompatibilityWithResults(M.value.key, n, o, {
          signal: u
        });
        if (this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(p)), console.log("function RefreshCompatibleSkus() operation aborted"), u.aborted) {
          console.log("function RefreshCompatibleSkus() operation aborted");
          return;
        }
        sessionStorage.setItem(e, JSON.stringify(p)), De.value = p;
      } catch (p) {
        p.name === "AbortError" ? console.log("function RefreshCompatibleSkus() fetch aborted") : console.error("function RefreshCompatibleSkus() fetch error", p);
      } finally {
        window.removeEventListener("beforeunload", l);
      }
    }
    re.value = !1;
  }
  updateActiveSubscription(e) {
    const r = !!(e != null && e.activeSubscription);
    sessionStorage.setItem("bm_activeSubscription", JSON.stringify(r)), this.activeSubscription = r;
  }
  async updateBikeSignal() {
    const e = localStorage.getItem(zo) || "null", r = JSON.parse(e);
    if (this.currentBike = r, r == null) {
      M.value = null;
      return;
    }
    const o = await this.getBikeBrandProductCategories(r == null ? void 0 : r.brandId), a = this.getBikeBrandCompatibleCollections(o, this.config.collections, this.config.categories);
    r.compatibleCollections = a, M.value = r, this.config.logLevel === "verbose" && console.log("Bike Changed: ", JSON.stringify(M.value, null, 2));
  }
  async getBikeBrandProductCategories(e) {
    return e == null ? [] : this.service.getBrandProductCategories(e);
  }
  getBikeBrandCompatibleCollections(e, r, o) {
    let a = [];
    return a = o.filter((n) => !!n.collection && e.some((s) => s.product_Category.toLowerCase() === n.title.toLowerCase())).map((n) => r.filter((u) => n.collection.split(",").map((l) => l.trim().toLowerCase()).includes(u.title.toLowerCase())).map((u) => ({
      title: u.title,
      text_id: n.text_id,
      handle: u.handle,
      url: u.url
    }))).flat(), a = a.filter((n, s, u) => s === u.findIndex((l) => l.title === n.title && l.text_id === n.text_id && l.handle === n.handle && l.url === n.url)), a;
  }
};
Io.instance = null;
let Fi = Io;
var Li = 0;
function d(t, e, r, o, a, i) {
  var n, s, u = {};
  for (s in e)
    s == "ref" ? n = e[s] : u[s] = e[s];
  var l = { type: t, props: u, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Li, __i: -1, __u: 0, __source: a, __self: i };
  if (typeof t == "function" && (n = t.defaultProps))
    for (s in n)
      u[s] === void 0 && (u[s] = n[s]);
  return S.vnode && S.vnode(l), l;
}
function et() {
  document.dispatchEvent(new Event("BmToggleModal"));
}
function qi({
  children: t
}) {
  return Y(() => {
    var n;
    const e = document.body, r = document.getElementById("bm_selectBikeButton"), o = (n = document.getElementsByTagName("bikematrix-bikeselector")) == null ? void 0 : n[0], a = document.getElementById("bm_bikeSelectorBannerHost"), i = (s) => {
      s.preventDefault(), e.classList.toggle("bm-modal-active"), o.classList.toggle("active");
    };
    return document.addEventListener("BmToggleModal", i), r == null || r.addEventListener("click", i), a == null || a.addEventListener("click", i), () => {
      document.removeEventListener("BmToggleModal", i), r == null || r.removeEventListener("click", i), a == null || a.removeEventListener("click", i);
    };
  }, []), d(q, {
    children: [d("div", {
      onClick: () => {
        et();
      },
      class: U("overlay", "fixed cursor-pointer inset-0 z-[2147483645] bg-black/40 transition-all duration-500 sm:duration-200")
    }), d("div", {
      className: U("modal", "fixed pointer-events-none inset-0 mx-auto justify-end z-[2147483646] flex flex-col items-center outline-none transition-all duration-500 sm:duration-200 ease-in-out", "sm:justify-center"),
      children: d("div", {
        className: "flex sm:px-2 pointer-events-auto max-sm:max-h-[96%] sm:max-h-[90%] max-sm:h-[89vh] max-w-lg sm:max-w-[640px] flex-col items-center max-sm:flex-1 w-full bg-white rounded-t-3xl sm:rounded-xl shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.06)]",
        children: [d("div", {
          className: "sm:hidden mx-auto mt-4 h-[6px] w-[100px] rounded-full bg-gray-400/50"
        }), d("div", {
          className: "sm:hidden h-[10px]"
        }), d("div", {
          className: "relative flex flex-col w-full sm:h-full max-sm:flex-none max-sm:grow",
          children: d("div", {
            class: "modal-content max-sm:absolute sm:h-full max-sm:inset-0 overflow-x-hidden overflow-y-auto  px-8 sm:px-6 font-nunito",
            children: t
          })
        })]
      })
    })]
  });
}
const he = (t) => /* @__PURE__ */ N("svg", { width: 7, height: 12, viewBox: "0 0 7 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("path", { d: "M1 11L6 6L1 1", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), zi = (t) => /* @__PURE__ */ N("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("circle", { cx: 15.5, cy: 15.5, r: 15.5, fill: "#030712" }), /* @__PURE__ */ N("path", { d: "M10.1974 17.1317L13.9955 20.4461L20.8639 10.8909", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
function tt({
  selected: t = !1,
  bike: e,
  compact: r = !1,
  ...o
}) {
  var f;
  const a = (f = e.images) != null && f.length ? e.images : [Fe("bike.png")], i = Qe(null), [n, s] = Q(0);
  Y(() => {
    const _ = i == null ? void 0 : i.current;
    if (_) {
      var m = new IntersectionObserver(function(y) {
        var k = y.reduce(function(b, x) {
          return x.intersectionRatio > b.intersectionRatio ? x : b;
        });
        k.intersectionRatio > 0 && s(Number(k.target.getAttribute("data-slide")));
      }, {
        root: _,
        threshold: 0.8
      });
      return _.querySelectorAll("&>div").forEach((y) => {
        m.observe(y);
      }), () => {
        m.disconnect();
      };
    }
  }, [i]);
  function u(_) {
    if (!i.current)
      return;
    const m = i.current.querySelectorAll("&>div")[_];
    i.current.scrollLeft = m.clientWidth * _;
  }
  function l() {
    n != 0 && u(n - 1);
  }
  function p() {
    n != a.length - 1 && u(n + 1);
  }
  const c = (a == null ? void 0 : a.length) && n !== a.length - 1, g = (a == null ? void 0 : a.length) && n !== 0;
  return d("div", {
    class: U("rounded-xl select-none border  py-4 relative", t ? "border-gray-950" : "border-gray-300"),
    ...o,
    children: [d("p", {
      class: "text-gray-950 px-4 text-base font-normal font-nunito leading-tight ",
      children: r ? d(q, {
        children: [e.brand, " ", e.year, " ", e.bikeSpec, " ", e.variant || ""]
      }) : d(q, {
        children: e.name
      })
    }), d("div", {
      class: "relative mt-2",
      children: [d("div", {
        ref: i,
        class: U("flex scroll-smooth snap-mandatory  no-scrollbar h-32 snap-x space-x-2 relative overflow-x-auto", "px-4"),
        "data-active-slide": n,
        children: a.map((_, m) => d("div", {
          "data-slide": m,
          class: "w-full h-full snap-center flex items-center flex-none",
          children: d("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: _
          })
        }, m))
      }), d(q, {
        children: [d("div", {
          onClick: l,
          class: U("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center left-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", g ? "" : "hidden"),
          children: d(he, {
            class: "h-3 text-gray-500 -rotate-180"
          })
        }), d("div", {
          onClick: p,
          class: U("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center right-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", c ? "" : "hidden"),
          children: d(he, {
            class: "h-3 text-gray-500 translate-x-px"
          })
        })]
      })]
    }), (a == null ? void 0 : a.length) > 1 && d("div", {
      class: "space-x-2 flex items-center justify-center",
      children: a.map((_, m) => d("div", {
        class: U("rounded-xl w-2 h-2 transition-all duration-300", m == n ? " bg-gray-950 scale-125" : " bg-gray-200")
      }, m))
    }), t ? d(zi, {
      class: "absolute right-4 bottom-4"
    }) : d(q, {
      children: d("span", {
        class: "border absolute right-4 bottom-4 rounded-full h-8 w-8 border-gray-300 bg-white/75"
      })
    })]
  });
}
function Vo() {
  const {
    t
  } = ae();
  return d(q, {
    children: [d("p", {
      class: "text-gray-600 max-w-sm mx-auto mt-4 text-center font-normal text-xs",
      children: t("bikeselector_home_footer_message")
    }), d("a", {
      href: "https://bikematrix.io/landed-it",
      target: "_blank",
      class: "text-gray-950 block  underline  mb-4 font-bold mt-4 text-center text-xs",
      children: t("bikematrix_poweredby")
    })]
  });
}
function Ur(t, e) {
  const r = () => {
    try {
      const i = window.localStorage.getItem(t);
      return i ? JSON.parse(i) : e;
    } catch (i) {
      return console.error(i), e;
    }
  }, [o, a] = Q(r);
  return Y(() => {
    try {
      if (!o)
        window.localStorage.removeItem(t);
      else {
        const i = JSON.stringify(o);
        window.localStorage.setItem(t, i);
      }
    } catch (i) {
      console.error(i);
    }
  }, [t, o]), [o, a, r];
}
function Ri(t) {
  const {
    categories: e,
    collections: r,
    apiUrl: o,
    apiKey: a,
    isShopify: i
  } = window.BikeMatrix.getConfig(), [n, s] = Q([]), u = ce(() => e.filter((l) => !!l.collection && n.includes(l.title)).flatMap((l) => {
    const p = r.find((c) => !!l.collection && l.collection.split(",").includes(c.title));
    return p ? {
      title: l.title,
      text_id: l.text_id,
      handle: p.handle,
      url: p.url
    } : [];
  }), [n]);
  return Y(() => {
    t && new St(o, a, i).getBrandProductCategories(t).then((p) => s(p.map((c) => c.product_Category)));
  }, [t]), u;
}
const Nt = {
  brand: {
    options: [],
    value: null
  },
  model: {
    options: [],
    value: null
  },
  frameSeries: {
    options: [],
    value: null
  },
  year: {
    options: [],
    value: []
  },
  bikeSpec: {
    options: [],
    value: null
  },
  frameSize: {
    options: [],
    value: null
  },
  options: [],
  value: {}
}, Mo = ho(void 0), Ni = ({
  children: t
}) => {
  var G;
  const e = window.BikeMatrix.getConfig(), [r, o] = Ur(zo, null), [a, i] = Ur("bm_lounge", []), n = new St(e.apiUrl, e.apiKey, e.isShopify), [s, u] = Q(Nt), l = Qe({}), [p, c] = Q([]), [g, f] = Q(!1), _ = Ri(r == null ? void 0 : r.brandId);
  function m(C) {
    u((D) => {
      var R;
      return {
        ...D,
        [C]: {
          options: [],
          value: (R = Nt[C]) == null ? void 0 : R.value
        }
      };
    });
  }
  function y(C, D) {
    u((R) => (R[C].value = D, {
      ...R
    }));
  }
  const k = () => {
    u((C) => {
      var D;
      return {
        ...Nt,
        brand: {
          options: ((D = C.brand) == null ? void 0 : D.options) || []
        }
      };
    });
  }, b = (C) => {
    o({
      ...C
    }), i([...(a || []).filter((D) => !!D.key && D.key !== C.key), C]);
  }, x = (C) => {
    (r == null ? void 0 : r.key) === C && o(null), i([...(a || []).filter((D) => !!D.key && D.key !== C)]);
  }, v = () => {
    e.logLevel === "verbose" && console.log("Dispatch BikeChanged..."), document.dispatchEvent(new Event("BikeChanged", {
      bubbles: !0,
      composed: !0
    }));
  }, w = () => {
    setTimeout(() => {
      k(), ne("/");
    }, 500);
  }, A = async () => n.getBikeBrands().then((C) => {
    u((D) => (D.brand.options = C.map((R) => ({
      label: R.bike_Brand,
      value: R.bike_Brand_ID
    })), {
      ...D
    }));
  }), B = async () => n.getBikeModels(s.brand.value).then((C) => {
    u((D) => (D.model.options = C.map((R) => ({
      label: R.model_Family,
      value: R.model_Family_ID
    })), {
      ...D
    }));
  }), z = async () => n.getBikeFrameSeries(s.model.value).then((C) => {
    u((D) => {
      var J, T;
      const R = [];
      return D.frameSeries.options = C.reduce((h, E) => {
        const P = {
          label: E.model_Spec,
          value: E.model_Spec_ID
        };
        return R.includes(P.value) || (R.push(P.value), h.push(P)), h;
      }, []), ((J = D.frameSeries.options) == null ? void 0 : J.length) === 1 && (D.frameSeries.value = (T = D.frameSeries.options[0]) == null ? void 0 : T.value), {
        ...D
      };
    });
  }), L = async () => n.getBikeSpecs(s.frameSeries.value).then((C) => {
    const D = [], R = [], J = [], T = [];
    C.forEach((h) => {
      var W, se;
      const E = h.year + "-" + h.spec.replace(/[^0-9a-zA-Z]/g, "") + (h.bike_Variant ? "-" + h.bike_Variant.replace(/[^0-9a-zA-Z]/g, "") : ""), P = {
        label: h.spec,
        value: h.spec
      };
      if (D.includes(P.value) || (D.push(P.value), J.push(P)), !R.includes(E)) {
        R.push(E);
        const be = {
          _key: E,
          key: h.bike_Key,
          name: h.bike_Name,
          variant: h.bike_Variant,
          brand: h.bike_Brand,
          brandId: h.bike_Brand_ID,
          model: h.model_Family,
          modelId: h.model_Family_ID,
          frameSeries: h.model_Spec,
          frameSeriesId: h.model_Spec_ID,
          bikeSpec: h.spec,
          year: h.year,
          images: [h.bike_Thumbnail, ...((W = h == null ? void 0 : h.bike_Images) == null ? void 0 : W.split(",")) || []].filter((te) => !!te).map((te) => `https://imagestore.bikematrix.io/${h.bike_Reference}/400-${te}`)
        }, pe = C.reduce((te, $) => ($.year == h.year && $.spec === h.spec && $.model_Spec === h.model_Spec && $.bike_Variant === h.bike_Variant && te.push({
          key: $.bike_Key,
          name: $.bike_Name,
          variant: $.bike_Variant,
          sizeId: $.bike_Size_ID,
          size: $.bike_Size
        }), te), []);
        (se = pe == null ? void 0 : pe.filter((te) => !!te.sizeId)) != null && se.length && (be.sizes = pe), T.push(be);
      }
      l.current[s.frameSeries.value] = Array.from(/* @__PURE__ */ new Set([...l.current[s.frameSeries.value] || [], h.year]));
    }), u((h) => (h.bikeSpec.options = J, {
      ...h
    })), c(T);
  }), O = async () => {
    u((C) => {
      const D = l.current[C.frameSeries.value] || [];
      return C.year.options = D.map((R) => ({
        label: R,
        value: R
      })), {
        ...C
      };
    });
  }, V = async () => {
    u((C) => {
      var D, R, J;
      if (C.frameSize.options = (D = s == null ? void 0 : s.value) != null && D.sizes ? s.value.sizes.filter((T) => !!T.size).map((T) => ({
        label: T.size,
        value: T.size
      })) : [], ((R = C.frameSize.options) == null ? void 0 : R.length) === 1) {
        const T = (J = C.frameSize.options[0]) == null ? void 0 : J.value;
        C.frameSize.value = T, C.value.frameSize = T;
      }
      return {
        ...C
      };
    });
  };
  Y(() => (document.addEventListener("BmToggleModal", w), () => {
    document.removeEventListener("BmToggleModal", w);
  }), []), Y(() => {
    v();
  }, [r]), Y(() => {
    A();
  }, []), Y(() => {
    s.brand.value && (m("model"), m("frameSeries"), B());
  }, [s.brand.value]), Y(() => {
    s.model.value && (m("frameSeries"), z());
  }, [s.model.value]), Y(() => {
    s.frameSeries.value && (m("bikeSpec"), m("year"), c([]), L().then(() => {
      O();
    }));
  }, [s.frameSeries.value]), Y(() => {
    s.value._key && (m("frameSize"), V());
  }, [(G = s.value) == null ? void 0 : G._key]), Y(() => {
    s.frameSize.value && u((C) => {
      var D, R;
      return C.value = {
        ...C.value,
        ...((R = (D = C == null ? void 0 : C.value) == null ? void 0 : D.sizes) == null ? void 0 : R.find((J) => s.frameSize.value == J.size)) || {}
      }, delete C.value.sizes, C;
    });
  }, [s.frameSize.value]);
  const I = {
    // Wizard Bike
    bike: s,
    setBike: u,
    setBikeAttr: y,
    resetBike: k,
    // Search Results
    results: p,
    loading: g,
    setLoading: f,
    // Compatible Parts
    compatibleCollections: _,
    // Final Bike
    currentBike: r,
    setCurrentBike: o,
    removeBike: x,
    saveBike: b,
    // Bike Lounge
    lounge: a
  };
  return d(Mo.Provider, {
    value: I,
    children: t
  });
}, Pe = () => {
  const t = _o(Mo);
  if (!t)
    throw new Error("useBikeState must be used within a BikeProvider");
  return t;
}, Jt = (t) => /* @__PURE__ */ N("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("path", { d: "M1.53553 8.60658L5.07107 5.07104M5.07107 5.07104L8.6066 1.53551M5.07107 5.07104L8.6066 8.60658M5.07107 5.07104L1.53553 1.53551", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
function Pi() {
  const {
    currentBike: t,
    setCurrentBike: e,
    lounge: r,
    removeBike: o,
    resetBike: a
  } = Pe(), {
    t: i
  } = ae();
  return d(q, {
    children: [r != null && r.length ? r == null ? void 0 : r.filter((n) => !!n._key).map((n) => d("div", {
      class: "mb-4 relative",
      children: [d("div", {
        onClick: () => o(n.key),
        class: "w-7 h-7 z-10 -right-2 -top-2 flex items-center justify-center absolute bg-gray-200 text-gray-800 rounded-full",
        children: d(Jt, {
          class: "h-3 w-3"
        })
      }), d(tt, {
        onClick: (s) => {
          s.preventDefault(), e((t == null ? void 0 : t.key) === (n == null ? void 0 : n.key) ? null : {
            ...n
          });
        },
        bike: n,
        selected: (t == null ? void 0 : t.key) === (n == null ? void 0 : n.key)
      })]
    }, n._key)) : d("div", {
      class: U("relative mb-4 z-10 "),
      children: [d("div", {
        class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
        children: [d("span", {
          class: "block rounded-lg h-6 w-1/2 bg-gray-200"
        }), d("img", {
          class: "w-auto mx-auto h-auto max-h-36 opacity-30",
          src: Fe("bike.png")
        }), d("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), d("div", {
        class: U("w-full relative bg-white border -z-10 border-b-0 border-gray-300 rounded-t-xl h-20  mb-4", "after:bottom-0 after:-inset-x-px after:-top-6 after:bg-gradient-to-t after:absolute after:from-white after:to-transparent"),
        children: [d("span", {
          class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
        }), d("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), d("div", {
        class: " text-gray-800 text-center flex -mt-5 z-20 justify-center",
        children: [i("bikeselector_home_empty"), d("br", {}), i("bikeselector_home_add_a_bike")]
      })]
    }), d("button", {
      onClick: (n) => {
        n.preventDefault(), a(), ne("/add");
      },
      class: U("duration-300 transition-colors sticky bottom-[72px] mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: [i("bikeselector_home_add_btn"), d(Jt, {
        class: "h-3 absolute [&>path]:stroke-[2px] right-5 justify-self-end rotate-45"
      })]
    }), !!(r != null && r.length) && !!(t != null && t.key) && d("button", {
      onClick: (n) => {
        n.preventDefault(), ne("/browse");
      },
      class: U("duration-300 sticky bottom-4 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: i("bikeselector_home_browse_btn")
    }), d("button", {
      onClick: (n) => {
        n.preventDefault(), et();
      },
      class: U("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: i("bikeselector_home_close_btn")
    }), d(Vo, {})]
  });
}
const Ti = (t) => /* @__PURE__ */ N("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("circle", { cx: 10, cy: 10, r: 10, fill: "#030712" }), /* @__PURE__ */ N("path", { d: "M6.57886 11.0526L9.02922 13.191L13.4604 7.02636", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
function He({
  type: t,
  title: e,
  placeholder: r,
  options: o = [],
  disabled: a = void 0,
  loading: i = !1,
  infoVisible: n = !1,
  children: s = void 0,
  ...u
}) {
  const {
    t: l
  } = ae(), p = (g) => {
    switch (g) {
      case "brand":
        return l("bikeselector_addbike_brand_desc");
      case "model":
        return l("bikeselector_addbike_model_desc");
      case "framespec":
        return l("bikeselector_addbike_framespec_desc");
      case "framesize":
        return l("bikeselector_size_framesize_desc");
      default:
        return "";
    }
  }, c = (g, f) => g === "framesize" && f === "One Size" ? l("bikeselector_size_framesize_one_size") : f;
  return d(q, {
    children: d("div", {
      class: "w-full flex flex-col space-y-2",
      children: [d("label", {
        class: "text-gray-800 font-bold text",
        children: e
      }), s && d("div", {
        class: U("!my-0 overflow-hidden box-border transition-all duration-300", n ? "max-h-screen" : "h-0"),
        children: [d("p", {
          class: "text-gray-600 my-1 italic text-sm",
          children: p(t)
        }), d("div", {
          class: U("rounded-xl overflow-hidden my-0 relative py-1 h-32 bg-gray-100 w-full"),
          children: s
        })]
      }), d("div", {
        class: "w-full flex items-center relative",
        children: [d("select", {
          placeholder: r,
          class: U("rounded-xl peer !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg bg-white placeholder:text-gray-700 text-gray-700", "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400", u.class),
          disabled: a,
          ...u,
          children: [d("option", {
            value: "",
            selected: !u.value,
            disabled: !0,
            children: r
          }), o.map((g) => d("option", {
            value: g.value,
            disabled: g.disabled,
            children: c(t, g.label)
          }))]
        }), i ? d("span", {
          class: "absolute block loader animate-spin right-4 w-5 h-5"
        }) : u.value && typeof a == "boolean" ? d(Ti, {
          class: "right-3 absolute w-5 pointer-events-none"
        }) : d(he, {
          class: "absolute h-3 text-gray-700 pointer-events-none rotate-90 right-5 peer-disabled:text-gray-400"
        })]
      })]
    })
  });
}
function Oi() {
  const t = window.BikeMatrix.getConfig(), {
    bike: e,
    setBikeAttr: r
  } = Pe(), {
    brand: o,
    model: a,
    frameSeries: i
  } = e, {
    t: n
  } = ae(), [s, u] = Q([]), l = o.value, p = o.value && a.value;
  return Y(() => {
    const c = t.bikeSelectorBrands ? t.bikeSelectorBrands.split(",").filter((g) => g !== "") : [];
    if (c.length > 0 && o.options.length > 0) {
      let g = [];
      o.options.forEach((f) => {
        c.includes(f.value.toString().trim()) && g.push(f);
      }), u(g);
    } else
      u(o.options);
  }, [t.bikeSelectorBrands, o.options]), d(q, {
    children: [d("div", {
      class: "space-y-5 mb-6 relative w-full flex flex-col",
      children: [d(He, {
        type: "brand",
        title: n("bikeselector_addbike_brand_label"),
        placeholder: n("bikeselector_addbike_brand_select"),
        value: o.value,
        options: s,
        onChange: (c) => {
          r("brand", c.target.value);
        },
        loading: !o.options.length,
        disabled: !o.options.length,
        info: !0,
        infoVisible: !o.value,
        children: d("img", {
          src: Fe("info-brand.svg"),
          class: "w-full h-full"
        })
      }), d(He, {
        type: "model",
        title: n("bikeselector_addbike_model_label"),
        placeholder: n("bikeselector_addbike_model_select"),
        value: a.value,
        options: a.options,
        onChange: (c) => {
          r("model", c.target.value);
        },
        loading: l && !a.options.length,
        disabled: !l || !a.options.length,
        info: !0,
        infoVisible: l && !a.value,
        children: d("img", {
          src: Fe("info-model.svg"),
          class: "w-full h-full"
        })
      }), d(He, {
        type: "framespec",
        title: n("bikeselector_addbike_framespec_label"),
        placeholder: n("bikeselector_addbike_framespec_select"),
        value: i.value,
        loading: p && !i.options.length,
        options: i.options,
        onChange: (c) => {
          r("frameSeries", c.target.value);
        },
        disabled: !p || !i.options.length,
        info: !0,
        infoVisible: p && !i.value,
        children: d("img", {
          src: Fe("info-frameseries.svg"),
          class: "w-full h-full"
        })
      })]
    }), d("button", {
      onClick: (c) => {
        c.preventDefault(), o.value && a.value && i.value && ne("/search");
      },
      class: U("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", o.value && a.value && i.value ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [d("span", {
        class: "ml-auto",
        children: n("bikeselector_addbike_find_btn")
      }), " ", d(he, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
function Ui() {
  var _, m, y, k;
  const {
    bike: t,
    setBike: e,
    setBikeAttr: r,
    results: o,
    loading: a
  } = Pe(), {
    year: i,
    bikeSpec: n
  } = t, {
    t: s
  } = ae(), [u, l] = [t.value, (b) => e((x) => ({
    ...x,
    value: b
  }))], p = ce(() => {
    const b = o == null ? void 0 : o.filter((x) => {
      var w;
      let v = !0;
      return n.value && (v = x.bikeSpec === n.value), v && i.value.length && (v = (w = i.value) == null ? void 0 : w.includes(x.year)), v;
    });
    return b.some((x) => x._key == u._key) || l({}), b;
  }, [o, n.value, i.value]), c = ce(() => n.value ? o.filter((x) => n.value == x.bikeSpec).map((x) => x.year) : i.options.map((x) => x.value), [n.value]), g = ce(() => {
    var x;
    if (!((x = i.value) != null && x.length))
      return n.options;
    const b = o.filter((v) => {
      var w;
      return (w = i.value) == null ? void 0 : w.includes(v.year);
    }).map((v) => v.bikeSpec);
    return n.options.map((v) => ({
      ...v,
      disabled: !b.includes(v.value)
    }));
  }, [n.options, i.value]), f = (b) => b === 0 ? s("bikeselector_search_no_bikes_found") : b === 1 ? s("bikeselector_search_one_bike_found") : s("bikeselector_search_number_bikes_found", {
    number_found: b
  });
  return d(q, {
    children: [d("div", {
      class: "space-y-3 mb-6 relative w-full flex flex-col",
      children: [d(He, {
        type: "bikespec",
        title: s("bikeselector_search_bikespec_label"),
        placeholder: s("bikeselector_search_bikespec_select"),
        value: n.value,
        options: [{
          label: s("bikeselector_search_bikespec_select_all"),
          value: ""
        }, ...g],
        onChange: (b) => {
          r("bikeSpec", b.target.value);
        },
        disabled: !((_ = n.options) != null && _.length),
        loading: !((m = n.options) != null && m.length)
      }), d("div", {
        class: "w-full flex flex-col space-y-2",
        children: [d("label", {
          class: "text-gray-800 font-bold text",
          children: s("bikeselector_search_year_label")
        }), d("div", {
          class: U("flex space-x-2 overflow-x-auto", "-mx-8 w-[calc(100%_+_64px)] px-8 no-scrollbar"),
          children: (y = i.options) != null && y.length ? (k = i.options) == null ? void 0 : k.map((b) => {
            var w;
            const x = n.value && !c.includes(b.value), v = (w = i.value) == null ? void 0 : w.includes(b.value);
            return d("div", {
              onClick: () => {
                x || r("year", v ? i.value.filter((A) => A !== b.value) : [...i.value, b.value]);
              },
              class: U("rounded-full cursor-pointer items-center flex border  py-2 px-4", v ? "pr-3 bg-gray-950 border-gray-950 text-white" : "border-gray-300 text-gray-700 ", x && "hidden"),
              children: [b.label, v && d(Jt, {
                class: "w-3 h-3 ml-2"
              })]
            });
          }) : Array(2).fill(0).map((b, x) => d("div", {
            class: "rounded-full items-center flex border py-2 bg-gray-100 px-4 bg-100 border-gray-300 animate-pulse",
            children: d("span", {
              class: "rounded-lg bg-gray-100 w-9 h-5"
            })
          }, x))
        })]
      }), d("div", {
        class: U("text-nowrap font-medium w-full flex font-nunito", "[&>span]:text-gray-500 [&>span]:font-normal"),
        children: [a ? (
          // "Searching..."
          d(q, {
            children: s("bikeselector_search_searching")
          })
        ) : d(q, {
          children: f(p.length)
        }), " ", (o == null ? void 0 : o.length) > 0 && d(q, {
          children: [d("span", {
            children: "("
          }), d("span", {
            class: "whitespace-nowrap overflow-hidden text-ellipsis truncate",
            children: [o[0].brand, " ", o[0].frameSeries]
          }), d("span", {
            children: ")"
          })]
        })]
      }), d("div", {
        class: "grid grid-cols-1 sm:grid-cols-2 gap-4",
        children: p != null && p.length && !a ? p.map((b, x) => d(tt, {
          "data-key": b._key,
          bike: b,
          selected: b._key === u._key,
          onClick: (v) => {
            v.preventDefault(), l(b);
          },
          compact: !0
        }, b._key)) : Array(a ? 2 : 1).fill(0).map((b, x) => d("div", {
          class: U("w-full relative rounded-xl h-40 bg-white border border-gray-200 ", a && "animate-pulse"),
          children: [d("span", {
            class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
          }), d("span", {
            class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-200"
          })]
        }, x))
      })]
    }), d("button", {
      onClick: (b) => {
        var x, v;
        if (b.preventDefault(), u._key) {
          const w = (x = this.base.querySelector(`[data-key="${u._key}"] [data-active-slide]`)) == null ? void 0 : x.getAttribute("data-active-slide"), B = [(v = this.base.querySelector(`[data-key="${u._key}"] [data-slide="${w}"] img`)) == null ? void 0 : v.src].filter((z) => !!z);
          B != null && B.length && e((z) => (z.value = {
            ...z.value || {},
            images: B
          }, {
            ...z
          })), ne("/size");
        }
      },
      class: U("duration-300 transition-colors sticky bottom-6 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", u._key ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [d("span", {
        class: "ml-auto",
        children: s("bikeselector_search_confirm_btn")
      }), " ", d(he, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
function Ii() {
  var i, n;
  const {
    bike: t,
    setBikeAttr: e,
    setBike: r
  } = Pe(), {
    frameSize: o
  } = t, {
    t: a
  } = ae();
  return Y(() => {
    var s;
    (s = o.options) != null && s.length || ne("/confirm");
  }, []), d(q, {
    children: [d(tt, {
      bike: t.value,
      selected: !0,
      compact: !0
    }), d("div", {
      class: " mt-4 mb-6 relative w-full flex flex-col",
      children: d(He, {
        type: "framesize",
        instruction: !0,
        title: a("bikeselector_size_framesize_label"),
        placeholder: a("bikeselector_size_framesize_select"),
        value: o.value,
        options: o.options,
        onChange: (s) => {
          e("frameSize", s.target.value), r((u) => {
            var l;
            return u.value.frameSize = ((l = o.options.find((p) => p.value == s.target.value)) == null ? void 0 : l.label) || "", u;
          });
        },
        selected: !0,
        info: !0,
        infoVisible: !0,
        disabled: !((i = o.options) != null && i.length),
        loading: !((n = o.options) != null && n.length),
        children: d("img", {
          src: Fe("info-size.svg"),
          class: "w-full h-full"
        })
      })
    }), d("button", {
      onClick: (s) => {
        s.preventDefault(), o.value && ne("/confirm");
      },
      class: U("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", o.value ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [d("span", {
        class: "ml-auto",
        children: a("bikeselector_size_confirm_btn")
      }), " ", d(he, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
const xe = de({
  title: "",
  step: 0,
  back: ""
});
function Vi({
  children: t
}) {
  const {
    t: e
  } = ae();
  return d(q, {
    children: [d("div", {
      class: "relative flex items-center justify-center w-full h-10 my-5 sm:mt-8",
      children: [!!xe.value.back && d("div", {
        onClick: () => ne(xe.value.back),
        class: " w-10 h-10 absolute left-0 rounded-xl self-start border-gray-200 border items-center justify-center flex",
        children: d(he, {
          class: "h-3 text-gray-500 -translate-x-px -rotate-180"
        })
      }), d("h2", {
        class: "text-xl font-bold",
        children: e(xe.value.title)
      })]
    }), t, typeof xe.value.step < "u" && d("div", {
      class: "space-x-2 my-6 flex items-center justify-center",
      children: [0, 1, 2, 3].map((r) => d("div", {
        class: U("rounded-xl h-2 transition-all duration-300", r == xe.value.step ? "w-6 bg-gray-950" : "w-2 bg-gray-200")
      }, r))
    })]
  });
}
function Mi() {
  const {
    bike: t,
    saveBike: e
  } = Pe(), {
    brand: r,
    model: o,
    frameSeries: a,
    frameSize: i,
    year: n,
    bikeSpec: s
  } = t.value, {
    t: u
  } = ae();
  return Y(() => {
    i || (xe.value.back = "/search");
  }, []), d(q, {
    children: [d(tt, {
      bike: t.value,
      selected: !0,
      compact: !0
    }), d("div", {
      class: " space-y-4 mt-4 mb-6 relative w-full flex flex-col",
      children: [{
        // title: "Brand, Model, Frame Series",
        title: u("bikeselector_confirm_brandmodelframespec_label"),
        value: [r, o, a].join(", "),
        path: "/add"
      }, {
        // title: "Year, Bike Spec",
        title: u("bikeselector_confirm_yearbikespec_label"),
        value: [n, s].join(", "),
        path: "/search"
      }, {
        // title: "Frame Size",
        title: u("bikeselector_confirm_framesize_label"),
        value: i,
        path: "/size"
      }].filter((l) => !!l.value).map((l) => d("div", {
        class: "w-full flex flex-col space-y-2",
        children: [d("label", {
          class: "text-gray-800 font-bold",
          children: l.title
        }), d("div", {
          onClick: () => ne(l.path),
          class: "w-full flex items-center relative cursor-pointer",
          children: [d("div", {
            class: U("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-700"),
            children: l.value
          }), d(he, {
            class: "absolute h-3 text-gray-700 pointer-events-none right-4 peer-disabled:text-gray-400"
          })]
        })]
      }, l.path))
    }), d("button", {
      onClick: (l) => {
        l.preventDefault(), e(t.value), ne("/browse");
      },
      class: U("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: u("bikeselector_confirm_confirm_btn")
    }), d("p", {
      class: "text-gray-600 -mb-3 mt-2 text-center font-normal text-xs",
      children: u("bikeselector_confirm_notyourride_msg")
    })]
  });
}
function ji() {
  const {
    currentBike: t,
    compatibleCollections: e
  } = Pe(), {
    t: r
  } = ae();
  return d(q, {
    children: [d(tt, {
      bike: t,
      selected: !0
    }), !!(e != null && e.length) && d(q, {
      children: [d("p", {
        class: "text-gray-800 mt-4 font-bold",
        children: r("bikeselector_browse_products_label")
      }), d("div", {
        class: "gap-3 mt-2 mb-6 relative w-full flex flex-wrap",
        children: e.map((o) => d("a", {
          href: o.url,
          class: "group flex items-center relative cursor-pointer",
          children: [d("div", {
            class: U("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-950", "group-disabled:bg-gray-100 group-disabled:border-gray-200 group-disabled:text-gray-400"),
            children: r(o.text_id)
          }), d(he, {
            class: "absolute h-3 pointer-events-none right-4 group-disabled:text-gray-400 text-gray-950"
          })]
        }, o.text_id))
      })]
    }), d("button", {
      onClick: (o) => {
        o.preventDefault(), et();
      },
      class: U("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: r("bikeselector_browse_shop_btn")
    }), d("button", {
      onClick: (o) => {
        o.preventDefault(), ne("/");
      },
      class: U("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: r("bikeselector_browse_back_btn")
    }), d(Vo, {})]
  });
}
const Yt = de("/"), ne = (t) => {
  const e = Yt.peek();
  Yt.value = t, jo({
    previous: e,
    path: t
  });
}, ar = [{
  title: "bikeselector_home_title",
  component: Pi,
  path: "/"
}, {
  title: "bikeselector_addbike_title",
  component: Oi,
  path: "/add"
}, {
  title: "bikeselector_search_title",
  component: Ui,
  path: "/search"
}, {
  title: "bikeselector_size_title",
  component: Ii,
  path: "/size"
}, {
  title: "bikeselector_confirm_title",
  component: Mi,
  path: "/confirm"
}, {
  title: "bikeselector_browse_title",
  component: ji,
  path: "/browse"
}], Pt = ar.map((t) => t.path), jo = (t) => {
  let e;
  const r = Pt.indexOf(t.path), o = ar[r], a = Pt.slice(1, 5).indexOf(o.path);
  r && (e = Pt[r - 1]), t.previous === "/" && t.path === "/browse" && (e = "/"), xe.value = {
    title: o.title,
    step: a > -1 ? a : void 0,
    back: e
  };
};
function $i() {
  const e = ce(() => ar.reduce((r, o) => (r[o.path] = o.component, r), {}), [])[Yt.value];
  return Y(() => {
    jo({
      path: "/"
    });
  }, []), d(e, {});
}
const ir = `@import"//fonts.googleapis.com/css2?family=Inter&family=Nunito:ital,wght@0,200..700;1,200..700&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-2{right:-8px}.-top-2{top:-8px}.bottom-10{bottom:40px}.bottom-4{bottom:16px}.bottom-6{bottom:24px}.bottom-\\[72px\\]{bottom:72px}.left-0{left:0}.left-4{left:16px}.right-0{right:0}.right-3{right:12px}.right-4{right:16px}.right-5{right:20px}.top-0{top:0}.top-1\\/2{top:50%}.top-4{top:16px}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-\\[2147483645\\]{z-index:2147483645}.z-\\[2147483646\\]{z-index:2147483646}.\\!my-0{margin-top:0!important;margin-bottom:0!important}.-mx-8{margin-left:-32px;margin-right:-32px}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:4px;margin-bottom:4px}.my-5{margin-top:20px;margin-bottom:20px}.my-6{margin-top:24px;margin-bottom:24px}.my-\\[2px\\]{margin-top:2px;margin-bottom:2px}.my-px{margin-top:1px;margin-bottom:1px}.\\!ml-0{margin-left:0!important}.\\!ml-auto{margin-left:auto!important}.-mb-3{margin-bottom:-12px}.-mt-2{margin-top:-8px}.-mt-5{margin-top:-20px}.mb-4{margin-bottom:16px}.mb-6{margin-bottom:24px}.ml-2{margin-left:8px}.ml-auto{margin-left:auto}.mr-\\[6px\\]{margin-right:6px}.mt-2{margin-top:8px}.mt-4{margin-top:16px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-0{height:0px}.h-10{height:40px}.h-2{height:8px}.h-20{height:80px}.h-3{height:12px}.h-32{height:128px}.h-4{height:16px}.h-40{height:160px}.h-5{height:20px}.h-6{height:24px}.h-7{height:28px}.h-8{height:32px}.h-9{height:36px}.h-\\[10px\\]{height:10px}.h-\\[18px\\]{height:18px}.h-\\[26px\\]{height:26px}.h-\\[6px\\]{height:6px}.h-auto{height:auto}.h-full{height:100%}.max-h-36{max-height:144px}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.w-1\\/2{width:50%}.w-10{width:40px}.w-2{width:8px}.w-3{width:12px}.w-4{width:16px}.w-5{width:20px}.w-6{width:24px}.w-7{width:28px}.w-8{width:32px}.w-9{width:36px}.w-\\[100px\\]{width:100px}.w-\\[25px\\]{width:25px}.w-\\[48px\\]{width:48px}.w-\\[93px\\]{width:93px}.w-\\[calc\\(100\\%_\\+_64px\\)\\]{width:calc(100% + 64px)}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:0px}.max-w-\\[220px\\]{max-width:220px}.max-w-full{max-width:100%}.max-w-lg{max-width:512px}.max-w-sm{max-width:384px}.flex-none{flex:none}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[20\\%\\]{--tw-translate-x: -20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-px{--tw-translate-x: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/3{--tw-translate-y: -33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/3{--tw-translate-x: 33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-px{--tw-translate-x: 1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-125{--tw-scale-x: 1.25;--tw-scale-y: 1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-center{scroll-snap-align:center}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:4px}.gap-3{gap:12px}.gap-4{gap:16px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(8px * var(--tw-space-x-reverse));margin-left:calc(8px * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(8px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(8px * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(12px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(12px * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(16px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(16px * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(20px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(20px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-nowrap{text-wrap:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-xl{border-radius:12px}.rounded-b-lg{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.rounded-t-3xl{border-top-left-radius:24px;border-top-right-radius:24px}.rounded-t-xl{border-top-left-radius:12px;border-top-right-radius:12px}.border{border-width:1px}.border-b-0{border-bottom-width:0px}.border-amber-500{--tw-border-opacity: 1;border-color:rgb(245 158 11 / var(--tw-border-opacity))}.border-emerald-500{--tw-border-opacity: 1;border-color:rgb(16 185 129 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-gray-950{--tw-border-opacity: 1;border-color:rgb(3 7 18 / var(--tw-border-opacity))}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity))}.bg-black\\/40{background-color:#0006}.bg-emerald-50{--tw-bg-opacity: 1;background-color:rgb(236 253 245 / var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-400\\/50{background-color:#9ca3af80}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-950{--tw-bg-opacity: 1;background-color:rgb(3 7 18 / var(--tw-bg-opacity))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/75{background-color:#ffffffbf}.p-0{padding:0}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.px-4{padding-left:16px;padding-right:16px}.px-8{padding-left:32px;padding-right:32px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.\\!pr-8{padding-right:32px!important}.pl-1{padding-left:4px}.pl-3{padding-left:12px}.pr-3{padding-right:12px}.pr-5{padding-right:20px}.pr-6{padding-right:24px}.pt-4{padding-top:16px}.text-center{text-align:center}.font-nunito{font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-base{font-size:16px;line-height:24px}.text-lg{font-size:18px;line-height:28px}.text-sm{font-size:14px;line-height:20px}.text-xl{font-size:20px;line-height:28px}.text-xs{font-size:12px;line-height:16px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-\\[18px\\]{line-height:18px}.leading-\\[22px\\]{line-height:22px}.leading-tight{line-height:1.25}.text-amber-500{--tw-text-opacity: 1;color:rgb(245 158 11 / var(--tw-text-opacity))}.text-amber-950{--tw-text-opacity: 1;color:rgb(69 26 3 / var(--tw-text-opacity))}.text-emerald-500{--tw-text-opacity: 1;color:rgb(16 185 129 / var(--tw-text-opacity))}.text-emerald-950{--tw-text-opacity: 1;color:rgb(2 44 34 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-950{--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-950{--tw-text-opacity: 1;color:rgb(69 10 10 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-30{opacity:.3}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_-2px_10px_0px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\,0px_0px_0px_1px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\]{--tw-shadow: 0px -2px 10px 0px rgba(0,0,0,.04),0px 0px 0px 1px rgba(0,0,0,.06);--tw-shadow-colored: 0px -2px 10px 0px var(--tw-shadow-color), 0px 0px 0px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}:host .overlay{opacity:0;visibility:hidden}:host(.active) .overlay{opacity:1;visibility:visible}@media (min-width: 640px){:host .modal{opacity:0;transform:scale(.9);visibility:hidden}:host(.active) .modal{opacity:1;transform:scale(1);visibility:visible}}@media not all and (min-width: 640px){:host .modal{transform:translateY(100%);visibility:hidden}:host(.active) .modal{transform:translateY(0);visibility:visible}}:root,:host{all:initial;font-size:16px!important;width:100%}input,select,button{outline:2px solid transparent;outline-offset:2px}h1,h2,h3,h4,h5,h6,label,button{margin-top:0;margin-bottom:0;font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h1,h2,h3,h4,h5,h6{font-weight:700;--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}select{appearance:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}select::-ms-expand{display:none}.loader{border-radius:100%;border-top:4px solid rgba(3,7,18,.2);border-right:4px solid rgba(3,7,18,.2);border-bottom:4px solid rgba(3,7,18,.2);border-left:4px solid rgb(3,7,18)}*::-webkit-scrollbar{height:12px;width:12px}*::-webkit-scrollbar-track{border-radius:12px;margin-block:8px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:active{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb{border-radius:8px;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb:hover{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}@media not all and (min-width: 640px){*::-webkit-scrollbar{display:none}.modal-content{-ms-overflow-style:none;scrollbar-width:none}}@media only screen and (max-width: 450px){.compatibility-label-container .status{padding:7px 2px}}.placeholder\\:text-gray-700::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.placeholder\\:text-gray-700::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-inset-x-px:after{content:var(--tw-content);left:-1px;right:-1px}.after\\:-top-6:after{content:var(--tw-content);top:-24px}.after\\:bottom-0:after{content:var(--tw-content);bottom:0}.after\\:bg-gradient-to-t:after{content:var(--tw-content);background-image:linear-gradient(to top,var(--tw-gradient-stops))}.after\\:from-white:after{content:var(--tw-content);--tw-gradient-from: #fff var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:to-transparent:after{content:var(--tw-content);--tw-gradient-to: transparent var(--tw-gradient-to-position)}.disabled\\:border-gray-200:disabled{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.disabled\\:bg-gray-100:disabled{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.disabled\\:text-gray-400:disabled{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.group:disabled .group-disabled\\:border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.group:disabled .group-disabled\\:bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.group:disabled .group-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.peer:disabled~.peer-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media not all and (min-width: 640px){.max-sm\\:absolute{position:absolute}.max-sm\\:inset-0{top:0;right:0;bottom:0;left:0}.max-sm\\:h-\\[89vh\\]{height:89vh}.max-sm\\:max-h-\\[96\\%\\]{max-height:96%}.max-sm\\:flex-1{flex:1 1 0%}.max-sm\\:flex-none{flex:none}.max-sm\\:grow{flex-grow:1}}@media (max-width: 426px){.max-\\[426px\\]\\:w-\\[21px\\]{width:21px}.max-\\[426px\\]\\:w-\\[38px\\]{width:38px}.max-\\[426px\\]\\:text-xs{font-size:12px;line-height:16px}}@media (min-width: 640px){.sm\\:mt-8{margin-top:32px}.sm\\:hidden{display:none}.sm\\:h-full{height:100%}.sm\\:max-h-\\[90\\%\\]{max-height:90%}.sm\\:max-w-\\[640px\\]{max-width:640px}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:justify-center{justify-content:center}.sm\\:rounded-xl{border-radius:12px}.sm\\:px-2{padding-left:8px;padding-right:8px}.sm\\:px-6{padding-left:24px;padding-right:24px}.sm\\:duration-200{transition-duration:.2s}}.\\[\\&\\>path\\]\\:stroke-\\[2px\\]>path{stroke-width:2px}.\\[\\&\\>span\\]\\:font-normal>span{font-weight:400}.\\[\\&\\>span\\]\\:text-gray-500>span{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}
`;
function Hi() {
  return d(q, {
    children: [d("style", {
      type: "text/css",
      children: ir
    }), d(qi, {
      children: d(Ni, {
        children: d(Vi, {
          children: d($i, {})
        })
      })
    })]
  });
}
const $o = (t) => /* @__PURE__ */ N("svg", { width: 57, height: 40, viewBox: "0 0 57 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4343 1.80079C44.6538 2.54246 44.2342 3.3224 43.4943 3.54788L37.9829 5.22744L42.5437 17.3218C42.7699 17.2662 42.9979 17.2168 43.2272 17.1749C43.4564 17.1337 43.687 17.0993 43.9187 17.0724C44.1498 17.0449 44.3822 17.0256 44.6151 17.0131C44.8475 17.0012 45.0804 16.9962 45.3134 16.9987C45.547 17.0018 45.7794 17.0118 46.0117 17.0293C46.2441 17.0468 46.4758 17.0712 46.7069 17.1037C46.938 17.1356 47.1673 17.1756 47.396 17.2224C47.6246 17.2693 47.8508 17.3231 48.0764 17.3843C48.3013 17.4462 48.5244 17.5143 48.7451 17.5899C48.9657 17.6656 49.1839 17.7481 49.4002 17.8374C49.6159 17.9268 49.8286 18.0231 50.0381 18.1262C50.2477 18.2293 50.4541 18.3387 50.6575 18.4549C50.8603 18.5712 51.0594 18.6937 51.2547 18.8224C51.4501 18.9512 51.6412 19.0862 51.8285 19.2274C52.0153 19.3687 52.1977 19.5156 52.3758 19.6681C52.5539 19.8206 52.7265 19.9787 52.8948 20.1424C53.063 20.3062 53.2257 20.4749 53.3835 20.6493C53.5413 20.8237 53.6929 21.0024 53.8396 21.1862C53.9863 21.3699 54.1268 21.5581 54.2618 21.7512C54.3967 21.9437 54.5255 22.1406 54.6482 22.3418C54.7708 22.5424 54.8867 22.7474 54.997 22.9556C55.1067 23.1637 55.2103 23.3756 55.307 23.5906C55.4038 23.8056 55.4944 24.0237 55.5776 24.2443C55.6608 24.4649 55.7372 24.6881 55.8069 24.9137C55.8765 25.1393 55.9388 25.3668 55.9942 25.5962C56.0497 25.8262 56.0978 26.0568 56.1391 26.2899C56.1804 26.5224 56.2136 26.7562 56.2408 26.9912C56.2673 27.2256 56.2864 27.4612 56.2987 27.6974C56.3104 27.9331 56.3153 28.1693 56.3123 28.4056C56.3098 28.6418 56.2999 28.8781 56.2827 29.1137C56.2654 29.3493 56.2408 29.5843 56.2087 29.8187C56.1773 30.0524 56.1378 30.2856 56.0916 30.5174C56.0454 30.7487 55.9924 30.9787 55.932 31.2068C55.871 31.4356 55.8038 31.6612 55.7292 31.8856C55.6546 32.1093 55.5733 32.3306 55.4852 32.5493C55.3964 32.7681 55.3015 32.9837 55.2004 33.1968C55.0987 33.4093 54.9902 33.6187 54.8756 33.8243C54.761 34.0299 54.6402 34.2318 54.5132 34.4299C54.3863 34.6281 54.2531 34.8224 54.1138 35.0118C53.9746 35.2012 53.8297 35.3862 53.6793 35.5668C53.529 35.7474 53.3724 35.9224 53.2109 36.0931C53.0495 36.2637 52.8831 36.4287 52.7117 36.5887C52.5398 36.7481 52.3635 36.9024 52.1817 37.0512C52.0005 37.1993 51.815 37.3424 51.6251 37.4787C51.4347 37.6156 51.2406 37.7462 51.0427 37.8706C50.8443 37.9949 50.6427 38.1131 50.4369 38.2243C50.2316 38.3356 50.0227 38.4406 49.8107 38.5387C49.5987 38.6368 49.3836 38.7287 49.166 38.8131C48.9485 38.8974 48.7284 38.9749 48.506 39.0456C48.2835 39.1156 48.0591 39.1793 47.8323 39.2349C47.6061 39.2912 47.3781 39.3406 47.1488 39.3818C46.9195 39.4237 46.689 39.4581 46.4573 39.4849C46.2262 39.5118 45.9938 39.5312 45.7609 39.5431C45.5279 39.5556 45.2955 39.5599 45.062 39.5574C44.829 39.5549 44.5966 39.5449 44.3643 39.5268C44.1313 39.5093 43.9002 39.4843 43.6691 39.4524C43.438 39.4199 43.2087 39.3806 42.98 39.3337C42.7514 39.2862 42.5252 39.2324 42.2996 39.1706C42.0747 39.1093 41.8522 39.0412 41.6309 38.9656C41.4103 38.8899 41.1921 38.8074 40.9764 38.7174C40.7607 38.6281 40.548 38.5318 40.3379 38.4287C40.1283 38.3256 39.9219 38.2162 39.7191 38.0999C39.5163 37.9837 39.3172 37.8606 39.1219 37.7318C38.9265 37.6031 38.7354 37.4681 38.5481 37.3268C38.3613 37.1856 38.1789 37.0387 38.0008 36.8862C37.8233 36.7331 37.6501 36.5749 37.4825 36.4112C37.3142 36.2474 37.1515 36.0787 36.9937 35.9043C36.8359 35.7299 36.6843 35.5512 36.5376 35.3674C36.391 35.1837 36.2504 34.9949 36.1161 34.8024C35.9811 34.6093 35.8523 34.4124 35.7296 34.2118C35.607 34.0106 35.4911 33.8062 35.3808 33.5974C35.2711 33.3893 35.1676 33.1774 35.0708 32.9624C34.974 32.7474 34.8841 32.5293 34.8009 32.3087C34.7177 32.0881 34.6412 31.8649 34.5716 31.6393C34.5026 31.4137 34.4397 31.1862 34.3848 30.9562C34.3294 30.7268 34.2813 30.4956 34.24 30.2631C34.1993 30.0306 34.1654 29.7968 34.1389 29.5618C34.1124 29.3268 34.0933 29.0912 34.081 28.8556C34.0693 28.6193 34.0644 28.3831 34.0674 28.1468C34.0699 27.9106 34.0798 27.6743 34.0976 27.4387C34.1149 27.2031 34.1395 26.9681 34.171 26.7343C34.203 26.4999 34.2425 26.2668 34.2887 26.0356C34.3349 25.8037 34.3885 25.5737 34.4489 25.3456C34.5093 25.1174 34.5771 24.8912 34.6517 24.6674C34.7263 24.4437 34.8076 24.2224 34.8964 24.0037C34.9845 23.7849 35.0794 23.5693 35.1811 23.3562C35.2828 23.1437 35.3913 22.9343 35.5059 22.7287C35.6206 22.5231 35.7414 22.3212 35.8683 22.1231C35.9959 21.9249 36.129 21.7312 36.2683 21.5418C36.407 21.3518 36.5524 21.1668 36.7028 20.9868C36.8532 20.8062 37.0097 20.6312 37.1712 20.4606C37.3327 20.2906 37.4991 20.1249 37.6711 19.9656C37.843 19.8056 38.0193 19.6518 38.2005 19.5031C38.3817 19.3543 38.5678 19.2118 38.7576 19.0756C38.9481 18.9387 39.1422 18.8081 39.3407 18.6837C39.5385 18.5593 39.7407 18.4418 39.9459 18.3306L37.6544 12.2531L29.7544 28.8937C29.6977 29.0137 29.625 29.1224 29.5381 29.2218C29.4506 29.3206 29.3514 29.4049 29.2404 29.4756C29.1295 29.5462 29.0112 29.5993 28.8854 29.6362C28.7597 29.6724 28.6309 29.6906 28.5002 29.6906H22.8523C22.8085 30.0424 22.7481 30.3912 22.6717 30.7368C22.5947 31.0824 22.5022 31.4243 22.3943 31.7612C22.2859 32.0981 22.1626 32.4293 22.0233 32.7543C21.884 33.0793 21.7306 33.3974 21.5617 33.7074C21.3934 34.0181 21.211 34.3199 21.0144 34.6131C20.8178 34.9062 20.6076 35.1893 20.3845 35.4618C20.162 35.7349 19.9266 35.9968 19.6795 36.2474C19.4323 36.4974 19.1741 36.7362 18.9047 36.9618C18.6354 37.1874 18.3562 37.3999 18.0672 37.5993C17.7775 37.7981 17.4798 37.9831 17.1735 38.1537C16.8672 38.3243 16.5541 38.4799 16.233 38.6212C15.9125 38.7618 15.5859 38.8868 15.2531 38.9962C14.9209 39.1056 14.5843 39.1993 14.2429 39.2762C13.9021 39.3537 13.5582 39.4143 13.2112 39.4593C12.8648 39.5037 12.5166 39.5312 12.1671 39.5424C11.8177 39.5537 11.4689 39.5481 11.12 39.5262C10.7712 39.5037 10.4242 39.4649 10.0791 39.4093C9.73392 39.3543 9.39186 39.2824 9.0535 39.1943C8.71452 39.1062 8.38109 39.0024 8.05198 38.8824C7.72348 38.7624 7.40053 38.6274 7.08436 38.4762C6.76819 38.3256 6.45941 38.1599 6.15865 37.9799C5.85788 37.7999 5.56575 37.6056 5.28286 37.3974C4.99997 37.1893 4.72755 36.9681 4.465 36.7337C4.20245 36.4993 3.95161 36.2531 3.71248 35.9949C3.47273 35.7368 3.24592 35.4681 3.03144 35.1881C2.81696 34.9081 2.61604 34.6187 2.42868 34.3193C2.24132 34.0206 2.06814 33.7131 1.90913 33.3974C1.75011 33.0818 1.6059 32.7593 1.47709 32.4299C1.34827 32.1006 1.23487 31.7656 1.13688 31.4256C1.03888 31.0849 0.956912 30.7412 0.890966 30.3931C0.825636 30.0449 0.775714 29.6943 0.742433 29.3412C0.709152 28.9887 0.692511 28.6349 0.691895 28.2806C0.691895 27.9256 0.707919 27.5718 0.740584 27.2187C0.773249 26.8649 0.822554 26.5143 0.887884 26.1656C0.953214 25.8168 1.03457 25.4724 1.13195 25.1312C1.22933 24.7906 1.34211 24.4549 1.47092 24.1249C1.59973 23.7949 1.74334 23.4718 1.90173 23.1556C2.06074 22.8393 2.23393 22.5318 2.42129 22.2318C2.60865 21.9324 2.80957 21.6424 3.02343 21.3618C3.23791 21.0812 3.46472 20.8118 3.70446 20.5531C3.94421 20.2943 4.19505 20.0474 4.45761 19.8124C4.71954 19.5781 4.99257 19.3562 5.27546 19.1474C5.55835 18.9393 5.85049 18.7443 6.15187 18.5637C6.45325 18.3831 6.76202 18.2174 7.07881 18.0662C7.39498 17.9149 7.71794 17.7793 8.04705 17.6593C8.37678 17.5387 8.71083 17.4349 9.0498 17.3462C9.38878 17.2581 9.73083 17.1862 10.0766 17.1312C10.4217 17.0756 10.7693 17.0368 11.1188 17.0143C11.4676 16.9924 11.8177 16.9868 12.1671 16.9981C12.5166 17.0093 12.8654 17.0368 13.2124 17.0818C13.5594 17.1262 13.9039 17.1874 14.2454 17.2649C14.5868 17.3424 14.9239 17.4362 15.2568 17.5456C15.5896 17.6556 15.9162 17.7812 16.2373 17.9218C16.5584 18.0631 16.8721 18.2193 17.1791 18.3906C17.4854 18.5612 17.7837 18.7468 18.0727 18.9462C18.3618 19.1462 18.6416 19.3593 18.9109 19.5856C19.1802 19.8118 19.4385 20.0506 19.6862 20.3018C19.9334 20.5524 20.1682 20.8149 20.3913 21.0887C20.6138 21.3624 20.824 21.6456 21.02 21.9393C21.2166 22.2331 21.399 22.5356 21.5672 22.8468C21.7355 23.1574 21.889 23.4762 22.0276 23.8018C22.1663 24.1274 22.2896 24.4593 22.3974 24.7968C22.5053 25.1343 22.5971 25.4768 22.6729 25.8231C22.7493 26.1693 22.8091 26.5187 22.8523 26.8706H26.3283L19.5433 7.60432C19.489 7.45119 19.4625 7.29307 19.4625 7.13057H17.3769C17.2857 7.13057 17.1951 7.12182 17.1057 7.10369C17.0163 7.08557 16.9294 7.05869 16.845 7.02307C16.7606 6.98807 16.6805 6.94432 16.6046 6.89307C16.5282 6.84182 16.4586 6.78307 16.3939 6.71744C16.3292 6.65244 16.2712 6.58119 16.2207 6.50369C16.1701 6.42682 16.127 6.34557 16.0925 6.25994C16.0574 6.17494 16.0309 6.08682 16.013 5.99557C15.9951 5.90494 15.9865 5.81307 15.9865 5.72057C15.9865 5.62807 15.9951 5.53619 16.013 5.44557C16.0309 5.35494 16.0574 5.26682 16.0925 5.18119C16.127 5.09557 16.1701 5.01432 16.2207 4.93744C16.2712 4.86057 16.3292 4.78932 16.3939 4.72369C16.4586 4.65807 16.5282 4.59994 16.6046 4.54807C16.6805 4.49682 16.7606 4.45369 16.845 4.41807C16.9294 4.38244 17.0163 4.35557 17.1057 4.33744C17.1951 4.31994 17.2857 4.31057 17.3769 4.31057H23.6338C23.725 4.31057 23.8156 4.31994 23.9049 4.33744C23.9943 4.35557 24.0812 4.38244 24.1657 4.41807C24.2501 4.45369 24.3302 4.49682 24.406 4.54807C24.4824 4.59994 24.5521 4.65807 24.6168 4.72369C24.6815 4.78932 24.7388 4.86057 24.79 4.93744C24.8405 5.01432 24.8837 5.09557 24.9182 5.18119C24.9533 5.26682 24.9798 5.35494 24.9977 5.44557C25.0156 5.53619 25.0242 5.62807 25.0242 5.72057C25.0242 5.81307 25.0156 5.90494 24.9977 5.99557C24.9798 6.08682 24.9533 6.17494 24.9182 6.25994C24.8837 6.34557 24.8405 6.42682 24.79 6.50369C24.7388 6.58119 24.6815 6.65244 24.6168 6.71744C24.5521 6.78307 24.4824 6.84182 24.406 6.89307C24.3302 6.94432 24.2501 6.98807 24.1657 7.02307C24.0812 7.05869 23.9943 7.08557 23.9049 7.10369C23.8156 7.12182 23.725 7.13057 23.6338 7.13057H22.3296L24.8904 14.4018L36.1907 8.37119L34.8489 4.81432C34.8144 4.72369 34.7898 4.63057 34.775 4.53432C34.7596 4.43869 34.754 4.34244 34.7589 4.24557C34.7633 4.14869 34.7774 4.05307 34.8009 3.95932C34.8249 3.86557 34.8576 3.77494 34.9001 3.68807C34.942 3.60119 34.9925 3.51932 35.0517 3.44307C35.1102 3.36619 35.1762 3.29682 35.2495 3.23432C35.3223 3.17182 35.4012 3.11744 35.485 3.07119C35.5688 3.02494 35.6569 2.98744 35.7488 2.95994L42.6737 0.853036C43.4219 0.625398 44.2123 1.05089 44.4343 1.80079ZM25.8346 17.0849L28.5766 24.8687L34.4582 12.4831L25.8346 17.0849ZM43.8866 28.7843L40.9486 20.9912C40.8001 21.0799 40.6547 21.1731 40.5117 21.2712C40.3693 21.3693 40.2294 21.4712 40.0932 21.5781C39.9564 21.6849 39.8232 21.7956 39.6938 21.9112C39.5638 22.0262 39.438 22.1449 39.3154 22.2681C39.1934 22.3912 39.0744 22.5181 38.9598 22.6487C38.8451 22.7787 38.7348 22.9131 38.6282 23.0506C38.5216 23.1874 38.4193 23.3287 38.3213 23.4724C38.2239 23.6162 38.1302 23.7631 38.0415 23.9124C37.9521 24.0624 37.8683 24.2149 37.7888 24.3699C37.7087 24.5249 37.6341 24.6824 37.5638 24.8418C37.4942 25.0018 37.4288 25.1631 37.3691 25.3274C37.3087 25.4912 37.2538 25.6568 37.2039 25.8237C37.154 25.9912 37.109 26.1599 37.0695 26.3299C37.0295 26.4999 36.995 26.6712 36.966 26.8431C36.937 27.0156 36.913 27.1887 36.8945 27.3624C36.8754 27.5362 36.8624 27.7106 36.8544 27.8849C36.8464 28.0593 36.8433 28.2343 36.8464 28.4087C36.8489 28.5837 36.8569 28.7581 36.8705 28.9324C36.8834 29.1068 36.9025 29.2806 36.9265 29.4537C36.95 29.6268 36.9795 29.7987 37.0141 29.9699C37.0486 30.1412 37.088 30.3112 37.133 30.4799C37.178 30.6487 37.2279 30.8162 37.2828 30.9818C37.3382 31.1474 37.398 31.3112 37.4634 31.4731C37.5281 31.6349 37.5983 31.7943 37.6729 31.9518C37.7481 32.1093 37.8276 32.2643 37.912 32.4168C37.9965 32.5687 38.0852 32.7187 38.1789 32.8656C38.272 33.0124 38.37 33.1562 38.4723 33.2968C38.5746 33.4374 38.6812 33.5749 38.7915 33.7087C38.9025 33.8431 39.0171 33.9731 39.1354 34.0999C39.2544 34.2268 39.3764 34.3499 39.5028 34.4687C39.6291 34.5881 39.7585 34.7031 39.8917 34.8143C40.0248 34.9249 40.1616 35.0318 40.3009 35.1343C40.4408 35.2362 40.5832 35.3343 40.7292 35.4274C40.8747 35.5212 41.0232 35.6099 41.1742 35.6937C41.3252 35.7781 41.4787 35.8574 41.6346 35.9318C41.7905 36.0062 41.9489 36.0756 42.1092 36.1399C42.2694 36.2049 42.4315 36.2643 42.5948 36.3187C42.7588 36.3724 42.9239 36.4218 43.091 36.4656C43.258 36.5099 43.4256 36.5481 43.5951 36.5818C43.764 36.6149 43.9341 36.6431 44.1054 36.6656C44.2761 36.6887 44.4475 36.7056 44.6194 36.7174C44.7914 36.7293 44.9633 36.7362 45.1359 36.7374C45.3085 36.7381 45.4804 36.7337 45.6524 36.7243C45.825 36.7143 45.9963 36.6993 46.1676 36.6787C46.339 36.6581 46.5091 36.6324 46.6786 36.6012C46.8481 36.5699 47.0169 36.5337 47.1839 36.4918C47.3516 36.4499 47.5174 36.4024 47.6819 36.3506C47.8465 36.2981 48.0092 36.2406 48.1701 36.1781C48.3309 36.1156 48.4899 36.0487 48.6465 35.9762C48.8036 35.9037 48.9577 35.8262 49.1099 35.7437C49.2622 35.6618 49.4119 35.5749 49.5586 35.4831C49.7053 35.3918 49.8489 35.2956 49.9901 35.1949C50.1312 35.0943 50.2686 34.9893 50.4036 34.8799C50.538 34.7712 50.6686 34.6574 50.7968 34.5399C50.9244 34.4224 51.0483 34.3012 51.1684 34.1756C51.2886 34.0506 51.4045 33.9218 51.5167 33.7887C51.6288 33.6562 51.7373 33.5206 51.8415 33.3812C51.945 33.2418 52.0449 33.0993 52.1404 32.9531C52.2353 32.8074 52.3259 32.6593 52.4122 32.5081C52.4985 32.3562 52.5798 32.2024 52.6569 32.0462C52.7333 31.8893 52.8054 31.7306 52.8726 31.5699C52.9398 31.4087 53.002 31.2456 53.0587 31.0812C53.116 30.9162 53.1678 30.7493 53.2146 30.5812C53.2621 30.4131 53.3034 30.2437 53.3404 30.0731C53.3767 29.9018 53.4082 29.7299 53.434 29.5574C53.4605 29.3849 53.4809 29.2112 53.4963 29.0374C53.5123 28.8631 53.5222 28.6887 53.5271 28.5137C53.532 28.3393 53.5314 28.1643 53.5253 27.9899C53.5197 27.8149 53.5086 27.6406 53.492 27.4668C53.4753 27.2931 53.4538 27.1193 53.4266 26.9468C53.3995 26.7743 53.3669 26.6031 53.3293 26.4324C53.2917 26.2618 53.2491 26.0924 53.2011 25.9243C53.153 25.7568 53.1 25.5906 53.0421 25.4256C52.9841 25.2612 52.9206 25.0987 52.8529 24.9381C52.7851 24.7774 52.7117 24.6193 52.6341 24.4631C52.5564 24.3074 52.4744 24.1537 52.3869 24.0031C52.3 23.8518 52.2082 23.7043 52.112 23.5593C52.0159 23.4137 51.9154 23.2718 51.8107 23.1331C51.7059 22.9943 51.5974 22.8593 51.484 22.7274C51.3712 22.5956 51.2541 22.4668 51.1333 22.3424C51.0119 22.2181 50.8874 22.0974 50.7592 21.9806C50.631 21.8637 50.4991 21.7512 50.3642 21.6431C50.2292 21.5343 50.0905 21.4306 49.9494 21.3306C49.8076 21.2306 49.6634 21.1356 49.5155 21.0449C49.3682 20.9543 49.2184 20.8681 49.0656 20.7868C48.9133 20.7056 48.758 20.6293 48.6009 20.5581C48.4437 20.4862 48.2847 20.4199 48.1232 20.3581C47.9617 20.2968 47.7984 20.2406 47.6339 20.1893C47.4693 20.1381 47.3029 20.0918 47.1353 20.0512C46.9676 20.0106 46.7994 19.9749 46.6293 19.9443C46.4598 19.9143 46.2891 19.8893 46.1177 19.8699C45.9464 19.8506 45.775 19.8362 45.6025 19.8281C45.4305 19.8193 45.2579 19.8156 45.086 19.8181C44.9134 19.8199 44.7415 19.8274 44.5695 19.8406C44.3976 19.8537 44.2262 19.8718 44.0555 19.8956C43.8848 19.9193 43.7147 19.9487 43.5458 19.9831L46.4838 27.7774C46.5152 27.8637 46.5374 27.9518 46.5516 28.0424C46.5658 28.1331 46.5713 28.2243 46.5676 28.3162C46.5645 28.4074 46.5522 28.4981 46.5313 28.5874C46.5103 28.6768 46.4813 28.7631 46.4437 28.8468C46.4062 28.9299 46.3612 29.0093 46.3082 29.0837C46.2558 29.1581 46.1966 29.2268 46.1307 29.2899C46.0647 29.3524 45.9932 29.4087 45.9168 29.4574C45.8398 29.5056 45.759 29.5468 45.6746 29.5793C45.5901 29.6118 45.5032 29.6362 45.4145 29.6518C45.3251 29.6674 45.2351 29.6743 45.1445 29.6718C45.0546 29.6699 44.9652 29.6587 44.8764 29.6387C44.7883 29.6187 44.7026 29.5906 44.6201 29.5537C44.5369 29.5168 44.4586 29.4718 44.384 29.4199C44.3101 29.3674 44.241 29.3081 44.1782 29.2418C44.1153 29.1762 44.0598 29.1043 44.0105 29.0274C43.9612 28.9506 43.9199 28.8693 43.8866 28.7843ZM20.0425 26.8706H11.8152C11.724 26.8706 11.6334 26.8799 11.544 26.8974C11.4547 26.9156 11.3678 26.9424 11.2833 26.9781C11.1989 27.0137 11.1188 27.0568 11.043 27.1081C10.9666 27.1599 10.8969 27.2181 10.8322 27.2837C10.7675 27.3493 10.7095 27.4206 10.659 27.4974C10.6085 27.5743 10.5653 27.6556 10.5308 27.7412C10.4957 27.8268 10.4692 27.9149 10.4513 28.0056C10.4334 28.0962 10.4248 28.1881 10.4248 28.2806C10.4248 28.3731 10.4334 28.4649 10.4513 28.5556C10.4692 28.6468 10.4957 28.7349 10.5308 28.8199C10.5653 28.9056 10.6085 28.9868 10.659 29.0637C10.7095 29.1412 10.7675 29.2124 10.8322 29.2774C10.8969 29.3431 10.9666 29.4018 11.043 29.4531C11.1188 29.5043 11.1989 29.5481 11.2833 29.5831C11.3678 29.6187 11.4547 29.6456 11.544 29.6637C11.6334 29.6818 11.724 29.6906 11.8152 29.6906H20.0425C19.9987 29.9487 19.9432 30.2043 19.8761 30.4568C19.8089 30.7099 19.73 30.9587 19.64 31.2043C19.55 31.4499 19.449 31.6906 19.3374 31.9262C19.2252 32.1624 19.1026 32.3924 18.9695 32.6168C18.8363 32.8412 18.6934 33.0587 18.5405 33.2699C18.3877 33.4806 18.2249 33.6837 18.0536 33.8799C17.8817 34.0756 17.7017 34.2624 17.5131 34.4412C17.3245 34.6199 17.1279 34.7893 16.9233 34.9493C16.7193 35.1093 16.5079 35.2599 16.2903 35.3999C16.0721 35.5406 15.8484 35.6706 15.6185 35.7893C15.3886 35.9087 15.1538 36.0168 14.9141 36.1143C14.6743 36.2112 14.4303 36.2968 14.1825 36.3712C13.9354 36.4456 13.6845 36.5074 13.4312 36.5581C13.1779 36.6087 12.9228 36.6474 12.6657 36.6743C12.4094 36.7006 12.1517 36.7156 11.8935 36.7174C11.6353 36.7199 11.3776 36.7099 11.12 36.6881C10.863 36.6662 10.6072 36.6324 10.3527 36.5868C10.0988 36.5406 9.84732 36.4831 9.59833 36.4131C9.34933 36.3437 9.10404 36.2624 8.86244 36.1693C8.62146 36.0768 8.38479 35.9731 8.15244 35.8581C7.9207 35.7431 7.69452 35.6174 7.47387 35.4812C7.25323 35.3449 7.03937 35.1981 6.83228 35.0418C6.62582 34.8856 6.42613 34.7199 6.23384 34.5443C6.04216 34.3693 5.8585 34.1856 5.68347 33.9931C5.50843 33.8006 5.34264 33.5999 5.1861 33.3924C5.02955 33.1843 4.88225 32.9693 4.74543 32.7474C4.60799 32.5256 4.48164 32.2974 4.36516 32.0637C4.24929 31.8299 4.1439 31.5912 4.0496 31.3474C3.95531 31.1037 3.8721 30.8556 3.80061 30.6043C3.72912 30.3524 3.66872 30.0981 3.62064 29.8412C3.57195 29.5837 3.53559 29.3249 3.51094 29.0643C3.48629 28.8037 3.47334 28.5424 3.47273 28.2806C3.47273 28.0181 3.48444 27.7562 3.50786 27.4949C3.53189 27.2337 3.56764 26.9737 3.6151 26.7162C3.66255 26.4581 3.72234 26.2031 3.79321 25.9506C3.86409 25.6981 3.94668 25.4499 4.04036 25.2049C4.13465 24.9606 4.23943 24.7206 4.3553 24.4862C4.47116 24.2512 4.59751 24.0231 4.73433 23.7999C4.87116 23.5774 5.01784 23.3612 5.17439 23.1524C5.33093 22.9437 5.49672 22.7424 5.67176 22.5493C5.84679 22.3562 6.03045 22.1712 6.22274 21.9956C6.41442 21.8193 6.61411 21.6531 6.82181 21.4956C7.02889 21.3387 7.24275 21.1918 7.46401 21.0549C7.68465 20.9181 7.91146 20.7918 8.14381 20.6762C8.37616 20.5606 8.61345 20.4562 8.85504 20.3631C9.09726 20.2699 9.34255 20.1887 9.59216 20.1187C9.84177 20.0487 10.0938 19.9906 10.3484 19.9449C10.6035 19.8987 10.8599 19.8643 11.1176 19.8424C11.3758 19.8206 11.634 19.8106 11.8929 19.8131C12.1517 19.8156 12.4094 19.8306 12.667 19.8574C12.9246 19.8837 13.1804 19.9231 13.4343 19.9737C13.6876 20.0249 13.9391 20.0874 14.1868 20.1618C14.4352 20.2368 14.6793 20.3231 14.9196 20.4206C15.16 20.5181 15.3948 20.6268 15.6253 20.7468C15.8552 20.8668 16.0795 20.9968 16.2977 21.1381C16.5165 21.2793 16.7273 21.4299 16.9319 21.5912C17.1365 21.7518 17.3331 21.9224 17.5217 22.1018C17.7103 22.2812 17.8909 22.4693 18.0622 22.6656C18.2336 22.8624 18.3957 23.0668 18.5485 23.2781C18.7014 23.4899 18.8443 23.7087 18.9769 23.9343C19.11 24.1593 19.232 24.3906 19.3436 24.6274C19.4551 24.8643 19.5556 25.1056 19.6449 25.3518C19.7343 25.5981 19.812 25.8481 19.8785 26.1018C19.9445 26.3556 19.9993 26.6118 20.0425 26.8706Z", fill: "white" })), Ho = (t) => /* @__PURE__ */ N("svg", { preserveAspectRatio: "none", width: 123, height: 82, viewBox: "0 0 123 82", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("path", { d: "M120.365 37.1527C122.774 39.152 122.774 42.848 120.365 44.8473L76.9935 80.8473C76.0961 81.5923 74.9664 82 73.8001 82L0 82L0 0L73.8001 0C74.9664 0 76.0961 0.407744 76.9935 1.15267L120.365 37.1527Z", fill: "currentColor" })), nr = (t) => /* @__PURE__ */ N("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("circle", { cx: 16, cy: 16, r: 15.5, fill: "#F59E0B", stroke: "#F59E0B" }), /* @__PURE__ */ N("path", { d: "M18 23.9603C18 25.0648 17.1041 25.96 15.9997 25.96C14.8951 25.96 14 25.0648 14 23.9603C14 22.8548 14.8951 21.96 15.9997 21.96C17.1041 21.9602 18 22.8551 18 23.9603Z", fill: "white" }), /* @__PURE__ */ N("path", { d: "M18.222 8.13512C18.1818 7.67877 18.0044 7.24904 17.7339 6.89648C17.3204 6.35776 16.6887 5.99896 15.9949 6C15.3216 5.99917 14.7072 6.33675 14.2935 6.84864C14.0016 7.20973 13.8096 7.65776 13.7676 8.13512C13.7565 8.26117 13.7578 8.39783 13.7676 8.52034L14.6898 18.9815C14.7177 19.2972 14.8575 19.5762 15.0669 19.7837C15.3063 20.0211 15.6364 20.1652 15.9949 20.1648C16.3175 20.1652 16.6171 20.0483 16.8481 19.8522C17.0987 19.6396 17.2688 19.333 17.2998 18.9813L18.222 8.52013C18.232 8.39762 18.2331 8.26117 18.222 8.13512Z", fill: "white" })), Wt = (t) => /* @__PURE__ */ N("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("circle", { cx: 16, cy: 16, r: 16, fill: "#030712" }), /* @__PURE__ */ N("path", { d: "M15.6047 20.0343C15.1 20.0343 14.6794 19.6137 14.6794 19.109V18.7389C14.6121 16.7203 15.9748 15.8455 16.9673 15.2062C18.0439 14.5165 18.6495 14.0623 18.6495 12.8343C18.6495 11.2698 17.5056 10.2604 15.7393 10.2604C15.3187 10.2773 13.3505 10.496 13.3505 12.8175C13.3505 13.3221 12.9299 13.7427 12.4252 13.7427C11.9206 13.7427 11.5 13.3221 11.5 12.8175C11.5 9.4025 14.2589 8.44362 15.7056 8.40997H15.7224C18.5318 8.40997 20.5 10.2268 20.5 12.8343C20.5 15.1389 19.0364 16.081 17.9766 16.7707C16.9841 17.41 16.5131 17.7632 16.5467 18.6885C16.5467 18.7053 16.5467 18.7053 16.5467 18.7221V19.109C16.5299 19.6305 16.1093 20.0343 15.6047 20.0343Z", fill: "white" }), /* @__PURE__ */ N("path", { d: "M15.6887 23.5838C16.274 23.5838 16.7485 23.1093 16.7485 22.524C16.7485 21.9387 16.274 21.4642 15.6887 21.4642C15.1034 21.4642 14.6289 21.9387 14.6289 22.524C14.6289 23.1093 15.1034 23.5838 15.6887 23.5838Z", fill: "white" })), sr = (t) => /* @__PURE__ */ N("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("circle", { cx: 16, cy: 16, r: 16, fill: "#10B981" }), /* @__PURE__ */ N("path", { d: "M10.5261 17.6842L14.4467 21.1056L21.5366 11.2421", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Go = (t) => /* @__PURE__ */ N("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ N("circle", { cx: 16, cy: 16, r: 16, fill: "#EF4444" }), /* @__PURE__ */ N("path", { d: "M10.913 21.0829L15.9959 16M15.9959 16L21.0789 10.9171M15.9959 16L21.0789 21.0829M15.9959 16L10.913 10.9171", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), ct = {
  unavailable: {
    icon: Wt,
    heading: "Compatibility Information Not Available",
    heading_code: "checksku_message_nocompatibilityinfo"
  },
  check: {
    icon: Wt,
    heading: "Check Compatibility",
    heading_code: "productcheck_nobikeselected_label",
    details: "Add your ride to check if this part fits",
    details_code: "productcheck_nobikeselected_message"
  },
  compatible: {
    icon: sr,
    heading: "Compatible",
    heading_code: "compatible"
  },
  incompatible: {
    icon: Go,
    heading: "Not Compatible",
    heading_code: "not_compatible"
  },
  warning: {
    icon: nr,
    heading: "Compatible - Check Notes",
    heading_code: "compatible_check_notes"
  }
}, Gi = (t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 500, zoomAndPan: "magnify", viewBox: "0 0 375 374.999991", height: 500, preserveAspectRatio: "xMidYMid meet", ...t }, /* @__PURE__ */ N("path", { fill: "#000000", d: "M 151.4375 131.65625 L 210.511719 259.050781 C 210.511719 252.984375 210.105469 242.875 210.105469 230.335938 L 197.160156 117.5 C 168.835938 117.90625 151.4375 131.65625 151.4375 131.65625 Z M 225.484375 117.097656 C 218.605469 116.691406 212.128906 116.691406 206.464844 117.097656 L 212.941406 181.804688 C 214.960938 160.773438 219.007812 138.125 225.484375 117.097656 Z M 80.222656 227.101562 C 90.746094 230.335938 101.265625 233.976562 113 238.425781 C 113 238.425781 146.988281 255.816406 173.285156 266.734375 L 104.097656 179.78125 C 93.980469 194.746094 86.292969 211.328125 80.222656 227.101562 Z M 35.714844 287.363281 C 37.738281 276.441406 40.167969 265.117188 43.808594 254.601562 C 34.90625 252.984375 26.003906 251.773438 17.507812 250.960938 C 21.957031 263.90625 28.433594 276.039062 35.714844 287.363281 Z M 195.945312 276.039062 C 195.945312 276.039062 204.441406 278.867188 208.488281 274.417969 L 142.535156 138.125 C 131.207031 146.621094 121.089844 156.324219 112.1875 167.648438 L 191.898438 274.417969 C 193.519531 275.230469 194.730469 275.632812 195.945312 276.039062 Z M 365.480469 146.214844 C 359.816406 122.351562 349.296875 100.109375 335.539062 81.101562 C 343.632812 101.726562 352.128906 124.375 358.199219 140.148438 C 360.625 141.765625 363.457031 144.191406 365.480469 146.214844 Z M 356.175781 170.886719 C 339.179688 157.539062 322.996094 147.023438 307.214844 138.933594 L 244.90625 157.539062 L 232.363281 189.085938 C 230.339844 208.902344 228.71875 233.976562 230.339844 254.601562 C 230.339844 254.601562 233.980469 294.640625 219.414062 299.496094 C 219.414062 299.496094 203.632812 314.863281 163.574219 295.855469 C 163.574219 295.855469 121.898438 274.015625 70.109375 260.265625 C 62.015625 291 59.992188 314.457031 59.992188 316.480469 C 92.363281 349.644531 138.085938 369.867188 188.257812 369.867188 C 288.605469 369.867188 370.335938 288.171875 370.335938 187.871094 C 370.335938 185.847656 370.335938 183.828125 370.335938 181.804688 C 363.054688 183.019531 356.175781 170.886719 356.175781 170.886719 Z M 233.980469 95.257812 C 237.621094 86.761719 242.476562 78.675781 247.332031 71.394531 C 247.332031 71.394531 261.089844 49.960938 281.726562 31.761719 C 254.617188 15.582031 222.246094 5.875 188.257812 5.875 C 87.507812 5.875 6.179688 87.570312 6.179688 187.871094 C 6.179688 197.578125 6.988281 206.476562 8.203125 215.371094 C 22.363281 215.777344 38.144531 217.394531 55.542969 220.628906 C 66.0625 195.152344 75.773438 177.761719 75.773438 177.761719 C 75.773438 177.761719 124.328125 87.976562 233.980469 95.257812 Z M 236.8125 147.429688 L 240.453125 146.214844 L 250.972656 120.332031 C 248.546875 119.925781 246.925781 119.523438 244.5 119.117188 C 241.261719 127.609375 238.429688 137.316406 236.8125 147.429688 Z M 259.066406 121.949219 L 250.164062 143.789062 L 292.648438 132.867188 C 281.320312 128.015625 269.992188 124.375 259.066406 121.949219 Z M 272.015625 76.25 C 266.347656 82.71875 260.683594 90 255.425781 98.085938 C 275.65625 101.726562 293.054688 106.582031 308.027344 112.242188 Z M 340.800781 128.015625 L 314.902344 57.238281 C 311.261719 53.601562 307.621094 50.363281 303.980469 47.128906 C 295.886719 52.792969 287.390625 59.667969 278.894531 68.160156 L 323.804688 119.117188 C 330.28125 122.351562 336.347656 125.589844 340.800781 128.015625 Z M 340.800781 128.015625 ", fillOpacity: 1, fillRule: "nonzero" }));
function Ki({
  "data-sku": t
}) {
  var y;
  const e = window.BikeMatrix, r = e.getConfig(), [o, a] = Q({}), [i, n] = Q(!1), [s, u] = Q({
    compatible: "",
    warning: ""
  }), {
    t: l
  } = ae(), [p, c] = Q(!1), g = t || r.sku, f = ce(() => oe.value || p, [oe.value, p]), _ = !!e.getActiveSubscription(), m = () => {
    var b, x, v;
    if (c(!0), u({
      compatible: "",
      warning: ""
    }), n(!1), r.logLevel === "verbose" && (console.log("ProductResult updateCompatibility config: " + JSON.stringify(r)), console.log("ProductResult updateCompatibility BikeSignal.value: " + JSON.stringify(M.value))), M.value) {
      for (let w = 0; w < r.productCollections.length; w++)
        if ((b = M.value) != null && b.compatibleCollections.find((A) => A.handle === r.productCollections[w])) {
          n(!0);
          break;
        }
    } else
      for (let w = 0; w < r.productCollections.length; w++)
        if (r.collections.map((A) => A.handle).includes(r.productCollections[w])) {
          n(!0);
          break;
        }
    if (M.value) {
      if (g == "") {
        a({
          type: "unavailable",
          ...ct.unavailable
        }), c(!1);
        return;
      }
      var k = ((x = bt()) == null ? void 0 : x.language) || "en-GB";
      new St(r.apiUrl, r.apiKey, r.isShopify).checkSkuCompatibility((v = M.value) == null ? void 0 : v.key, g, k).then((A) => {
        if (c(!1), !A) {
          a({
            type: "unavailable",
            ...ct.unavailable
          });
          return;
        }
        const B = (A == null ? void 0 : A.compatible) === null ? "unavailable" : A.warning ? "warning" : A != null && A.compatible ? "compatible" : "incompatible";
        u({
          warning: A.warningMessage,
          compatible: A.compatibilityMessage
        }), a({
          type: B,
          ...ct[B]
        });
      });
    } else
      c(!1), a({
        type: "check",
        ...ct.check
      });
  };
  return Y(() => {
    m();
  }, [M.value, g]), Y(() => (document.addEventListener("RefreshCompatibility", m), () => {
    document.removeEventListener("RefreshCompatibility", m);
  }), []), !_ || !f && !(o != null && o.type) || !i ? d(q, {}) : d(q, {
    children: [d("style", {
      type: "text/css",
      children: ir
    }), d("div", {
      class: "flex flex-col relative font-nunito w-full mx-auto",
      children: [d("div", {
        // todo: check if there's any state that we don't want it to toggle and then remove the check
        onClick: (k) => {
          k.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
            bubbles: !0,
            composed: !0
          }));
        },
        class: U("rounded-lg relative z-20 border overflow-hidden w-full flex cursor-pointer", f ? "bg-gray-100 border-gray-300 text-gray-950" : {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          check: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[o.type]),
        children: f ? d("span", {
          class: "loader self-center animate-spin justify-self-center justify-center w-9 my-5 mx-auto h-9",
          style: {
            borderWidth: "6px"
          }
        }) : d(q, {
          children: [d("div", {
            class: "relative z-10 h-auto items-center justify-center flex",
            children: [d(Ho, {
              class: U("self-start h-full w-[93px]", {
                unavailable: "text-gray-950",
                check: "text-gray-950",
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-500"
              }[o.type])
            }), d($o, {
              class: "h-[26px] absolute -translate-x-1/4"
            })]
          }), d("div", {
            class: "flex flex-col pl-3 pr-6 py-[6px] min-w-0",
            children: [d("p", {
              class: "text-lg font-semibold",
              children: l(o == null ? void 0 : o.heading_code)
            }), d("p", {
              class: "flex w-full text-sm leading-[22px] font-normal",
              children: d("span", {
                class: "truncate",
                children: o != null && o.details_code ? l(o == null ? void 0 : o.details_code) : (y = M.value) == null ? void 0 : y.name
              })
            })]
          })]
        })
      }), d("div", {
        class: "z-10 bg-gray-100 w-full -mt-2 pt-4 flex border justify-between flex-wrap gap-1 border-gray-300 rounded-b-lg p-3 py-2",
        children: [o.type !== "incompatible" && d("div", {
          class: "space-y-2 my-[2px]",
          children: [!!(s != null && s.compatible) && d("p", {
            class: "text-sm flex",
            children: [d(sr, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
            }), " ", s.compatible]
          }), !!s.warning && d("p", {
            class: "text-sm flex",
            children: [d(nr, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
            }), " ", s.warning]
          })]
        }), d("a", {
          class: "flex text-xs self-end font-semibold items-center underline ml-auto",
          href: "https://bikematrix.io/landed-it",
          target: "_blank",
          children: [l("bikematrix_poweredby"), " ", d(Gi, {
            class: "w-5 h-5 ml-2"
          })]
        })]
      }), !f && d(o.icon, {
        class: "absolute top-0 z-30 right-0 w-6 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  });
}
const Ji = `.wrapper{position:relative}.bm_collection_result{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.4rem;position:relative;margin-left:auto;margin-right:auto;font-size:14px;text-align:left;height:100%;line-height:1.3em}.bm_collection_result_iconLabel{display:inline-block;position:relative}.bm_collection_result_link{text-align:right;font-weight:500;font-size:.6em;margin-top:1px;text-decoration:underline;color:#000}.bm_collection_result_link:visited{color:#000}.bm_collection_result p{display:inline;padding:1px;margin:0;color:#000}.bm_collection_result_icon{padding:0 .1rem 0 0;position:absolute;left:-24px;top:-.25rem}.bm-hidden{display:none}.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`, Ir = {
  unavailable: {
    icon: Wt,
    heading: "",
    code: ""
  },
  compatible: {
    icon: sr,
    heading: "Compatible",
    code: "compatible"
  },
  warning: {
    icon: nr,
    heading: "Compatible",
    code: "compatible"
  },
  incompatible: {
    icon: Go,
    heading: "Not Compatible",
    code: "not_compatible"
  }
};
function Ko({
  "data-type": t
}) {
  var o;
  const e = Ir[t], {
    t: r
  } = ae();
  return e ? d(q, {
    children: [d("style", {
      type: "text/css",
      children: ir
    }), d("div", {
      class: "flex z-0 flex-col relative font-nunito w-full mx-auto compatibility-label-container max-w-[220px]",
      children: [d("div", {
        class: U("rounded-lg relative z-20 border overflow-hidden w-full flex", {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[t]),
        children: [d("div", {
          class: "relative z-10 h-auto items-center justify-center flex",
          children: [d(Ho, {
            class: U("self-start h-full w-[48px] max-[426px]:w-[38px]", {
              unavailable: "text-gray-950",
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-500"
            }[t])
          }), d($o, {
            class: "h-[18px] max-[426px]:w-[21px] w-[25px] absolute -translate-x-[20%]"
          })]
        }), d("div", {
          class: "status flex flex-col p-2 pl-1 w-full",
          children: d("p", {
            class: "max-[426px]:text-xs text-sm font-semibold p-0 leading-[18px] text-center",
            children: r((o = Ir[t]) == null ? void 0 : o.code)
          })
        })]
      }), d(e.icon, {
        class: "absolute top-0 z-30 right-0 w-4 h-4 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  }) : d(q, {});
}
const Se = {
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
let ie = {
  type: "unavailable",
  heading: ""
};
const Yi = async (t, e, r) => {
  if (!r || !Ee.value) {
    ie = {
      type: "unavailable",
      ...Se.unavailable
    };
    return;
  }
  let o = [];
  for (const s of r.split(",").filter((u) => !!u)) {
    const u = Ee.value.find((l) => l.sku === s.trim());
    o.push(u);
  }
  o.every((s) => (s == null ? void 0 : s.compatible) === !0);
  const a = o.every((s) => (s == null ? void 0 : s.compatible) === !1), i = o.some((s) => (s == null ? void 0 : s.compatible) === !0 && s.warning === !0), n = o.some((s) => (s == null ? void 0 : s.compatible) === !0);
  o.some((s) => (s == null ? void 0 : s.compatible) === null), i ? ie = {
    type: "warning",
    ...Se.warning
  } : n ? ie = {
    type: "compatible",
    ...Se.compatible
  } : a ? ie = {
    type: "incompatible",
    ...Se.incompatible
  } : ie = {
    type: "unavailable",
    ...Se.unavailable
  };
}, Wi = function(t, e, r, o, a, i, n) {
  var u;
  const s = window.BikeMatrix.getConfig();
  if (t || e) {
    if ((t && r || e && o) && s.productsCollections[i]) {
      for (let l = 0; l < s.productsCollections[i].length; l++)
        if (s.collections.map((p) => p.handle).includes(s.productsCollections[i][l]))
          return !0;
    }
  } else
    return a ? !1 : !!M.value && ((u = M.value.compatibleCollections) == null ? void 0 : u.find((p) => p.handle === n));
  return !1;
};
function Zi({
  "data-product-id": t,
  "data-product-skus": e,
  "data-product-barcodes": r,
  "data-product-metafields": o
}) {
  const a = window.BikeMatrix, i = a.getConfig(), [n, s] = Q(!1), u = !!a.getActiveSubscription();
  ie = {
    type: "unavailable",
    ...Se.unavailable
  };
  const {
    currentCollectionHandle: l,
    isHomePage: p,
    isSearchPage: c,
    showSearchPageCollection: g,
    showHomePageCollection: f,
    logLevel: _,
    skuField: m
  } = i, y = !!i.pageType && i.pageType === "product", k = m === "barcode" ? r : m === "metafield" ? o : e || "";
  return _ === "verbose" && (console.log("CollectionResult currentCollectionHandle: ", l), console.log("CollectionResult productId: ", t), console.log("CollectionResult productVariantsSkus: ", e), console.log("CollectionResult skusToCheck: ", k), console.log("CollectionResult BikeSignal.value: " + JSON.stringify(M.value))), oe.value ? s(!0) : M.value && Wi(p, c, f, g, y, t, l) ? Yi(M.value.key, t, k).then(() => {
    s(!0);
  }) : s(!1), _ === "verbose" && console.log("CollectionResult status: ", ie), d(q, {
    children: u && n && d(q, {
      children: [d("style", {
        type: "text/css",
        children: Ji
      }), d("div", {
        class: "bm_collection_result bm-wrapper",
        children: [d("div", {
          class: "lds-ring",
          id: "bm-loading-spinner",
          style: oe.value ? "" : "display: none",
          children: [d("div", {}), d("div", {}), d("div", {}), d("div", {})]
        }), !oe.value && (ie == null ? void 0 : ie.type) !== "unavailable" && d(Ko, {
          "data-type": ie.type
        })]
      })]
    })
  });
}
const Qi = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.bm-compatible-products-wrapper{display:block;width:100%;border-top:.5px solid lightgrey;border-bottom:.5px solid lightgrey;margin-top:10px}.bm-compatible-products-title>div{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none;display:flex;align-items:center;justify-content:space-between;padding:8px 0}.bm-compatible-products-title>div>span{font-weight:700}.bm-compatible-products-title svg{height:24px;width:24px;transition:transform .3s linear}.bm-compatible-products-title div.active svg{transform:rotate(180deg)}.bm-compatible-products-list{width:100%;max-width:100%;display:none;overflow:hidden}.bm-compatible-products-list ul{display:grid;gap:20px;grid-template-columns:repeat(4,minmax(0,1fr));padding:0;list-style:none}@media only screen and (max-width: 1000px){.bm-compatible-products-list ul{grid-template-columns:repeat(3,minmax(0,1fr))}}@media only screen and (max-width: 600px){.bm-compatible-products-list ul{gap:10px;grid-template-columns:repeat(2,minmax(0,1fr))}}.bm-compatible-products-list ul li{width:100%;display:flex}.bm-compatible-product-wrapper{display:block;width:100%;border:1px solid lightgrey;padding:5px;display:flex;flex-flow:column;flex:1}.bm-compatible-product-image{display:block;width:100%;max-width:100%;line-height:1;padding-top:100%;position:relative;margin-bottom:5px;overflow:hidden}.bm-compatible-product-image a,.bm-compatible-product-image a:hover,.bm-compatible-product-image a:focus{display:block;width:100%;max-width:100%;outline:none;text-decoration:none;width:auto;height:auto;line-height:1;border:none;border-radius:0}.bm-compatible-product-image img{display:inline-block;vertical-align:top;width:100%;max-width:100%;height:auto;line-height:1;position:absolute;left:0;right:0;bottom:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;top:50%;transform:translateY(-50%)}.bm-compatible-product-title{text-align:center;margin:0 0 1em;display:flex;flex-flow:column;flex:1}.bm-compatible-product-title a,.bm-compatible-product-title a:hover,.bm-compatible-product-title a:focus{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none}.bm-compatible-product-price{text-align:center;margin:0 0 1em}.bm-compatible-product-price p{font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;color:rgb(var(--text-color));padding:0;margin:0}.bm-compatible-product-price p strong{font-size:1.2em}.bm-compatible-product-compatibility{text-align:center;margin:0 .25em 1em}@media only screen and (max-width: 450px){.bm-compatible-product-compatibility{margin:0 0 1em}}.bm_result_link{justify-content:center;text-align:right;text-decoration:underline;font-size:12px}.bm_result_link a{text-align:right;font-weight:700;margin-top:10px;color:#000}
`;
var yt = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
yt.exports;
(function(t, e) {
  (function(r) {
    var o = e, a = t && t.exports == o && t, i = typeof zt == "object" && zt;
    (i.global === i || i.window === i) && (r = i);
    var n = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, s = /[\x01-\x7F]/g, u = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, l = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, p = { "­": "shy", "‌": "zwnj", "‍": "zwj", "‎": "lrm", "⁣": "ic", "⁢": "it", "⁡": "af", "‏": "rlm", "​": "ZeroWidthSpace", "⁠": "NoBreak", "̑": "DownBreve", "⃛": "tdot", "⃜": "DotDot", "	": "Tab", "\n": "NewLine", " ": "puncsp", " ": "MediumSpace", " ": "thinsp", " ": "hairsp", " ": "emsp13", " ": "ensp", " ": "emsp14", " ": "emsp", " ": "numsp", " ": "nbsp", "  ": "ThickSpace", "‾": "oline", _: "lowbar", "‐": "dash", "–": "ndash", "—": "mdash", "―": "horbar", ",": "comma", ";": "semi", "⁏": "bsemi", ":": "colon", "⩴": "Colone", "!": "excl", "¡": "iexcl", "?": "quest", "¿": "iquest", ".": "period", "‥": "nldr", "…": "mldr", "·": "middot", "'": "apos", "‘": "lsquo", "’": "rsquo", "‚": "sbquo", "‹": "lsaquo", "›": "rsaquo", '"': "quot", "“": "ldquo", "”": "rdquo", "„": "bdquo", "«": "laquo", "»": "raquo", "(": "lpar", ")": "rpar", "[": "lsqb", "]": "rsqb", "{": "lcub", "}": "rcub", "⌈": "lceil", "⌉": "rceil", "⌊": "lfloor", "⌋": "rfloor", "⦅": "lopar", "⦆": "ropar", "⦋": "lbrke", "⦌": "rbrke", "⦍": "lbrkslu", "⦎": "rbrksld", "⦏": "lbrksld", "⦐": "rbrkslu", "⦑": "langd", "⦒": "rangd", "⦓": "lparlt", "⦔": "rpargt", "⦕": "gtlPar", "⦖": "ltrPar", "⟦": "lobrk", "⟧": "robrk", "⟨": "lang", "⟩": "rang", "⟪": "Lang", "⟫": "Rang", "⟬": "loang", "⟭": "roang", "❲": "lbbrk", "❳": "rbbrk", "‖": "Vert", "§": "sect", "¶": "para", "@": "commat", "*": "ast", "/": "sol", undefined: null, "&": "amp", "#": "num", "%": "percnt", "‰": "permil", "‱": "pertenk", "†": "dagger", "‡": "Dagger", "•": "bull", "⁃": "hybull", "′": "prime", "″": "Prime", "‴": "tprime", "⁗": "qprime", "‵": "bprime", "⁁": "caret", "`": "grave", "´": "acute", "˜": "tilde", "^": "Hat", "¯": "macr", "˘": "breve", "˙": "dot", "¨": "die", "˚": "ring", "˝": "dblac", "¸": "cedil", "˛": "ogon", "ˆ": "circ", "ˇ": "caron", "°": "deg", "©": "copy", "®": "reg", "℗": "copysr", "℘": "wp", "℞": "rx", "℧": "mho", "℩": "iiota", "←": "larr", "↚": "nlarr", "→": "rarr", "↛": "nrarr", "↑": "uarr", "↓": "darr", "↔": "harr", "↮": "nharr", "↕": "varr", "↖": "nwarr", "↗": "nearr", "↘": "searr", "↙": "swarr", "↝": "rarrw", "↝̸": "nrarrw", "↞": "Larr", "↟": "Uarr", "↠": "Rarr", "↡": "Darr", "↢": "larrtl", "↣": "rarrtl", "↤": "mapstoleft", "↥": "mapstoup", "↦": "map", "↧": "mapstodown", "↩": "larrhk", "↪": "rarrhk", "↫": "larrlp", "↬": "rarrlp", "↭": "harrw", "↰": "lsh", "↱": "rsh", "↲": "ldsh", "↳": "rdsh", "↵": "crarr", "↶": "cularr", "↷": "curarr", "↺": "olarr", "↻": "orarr", "↼": "lharu", "↽": "lhard", "↾": "uharr", "↿": "uharl", "⇀": "rharu", "⇁": "rhard", "⇂": "dharr", "⇃": "dharl", "⇄": "rlarr", "⇅": "udarr", "⇆": "lrarr", "⇇": "llarr", "⇈": "uuarr", "⇉": "rrarr", "⇊": "ddarr", "⇋": "lrhar", "⇌": "rlhar", "⇐": "lArr", "⇍": "nlArr", "⇑": "uArr", "⇒": "rArr", "⇏": "nrArr", "⇓": "dArr", "⇔": "iff", "⇎": "nhArr", "⇕": "vArr", "⇖": "nwArr", "⇗": "neArr", "⇘": "seArr", "⇙": "swArr", "⇚": "lAarr", "⇛": "rAarr", "⇝": "zigrarr", "⇤": "larrb", "⇥": "rarrb", "⇵": "duarr", "⇽": "loarr", "⇾": "roarr", "⇿": "hoarr", "∀": "forall", "∁": "comp", "∂": "part", "∂̸": "npart", "∃": "exist", "∄": "nexist", "∅": "empty", "∇": "Del", "∈": "in", "∉": "notin", "∋": "ni", "∌": "notni", "϶": "bepsi", "∏": "prod", "∐": "coprod", "∑": "sum", "+": "plus", "±": "pm", "÷": "div", "×": "times", "<": "lt", "≮": "nlt", "<⃒": "nvlt", "=": "equals", "≠": "ne", "=⃥": "bne", "⩵": "Equal", ">": "gt", "≯": "ngt", ">⃒": "nvgt", "¬": "not", "|": "vert", "¦": "brvbar", "−": "minus", "∓": "mp", "∔": "plusdo", "⁄": "frasl", "∖": "setmn", "∗": "lowast", "∘": "compfn", "√": "Sqrt", "∝": "prop", "∞": "infin", "∟": "angrt", "∠": "ang", "∠⃒": "nang", "∡": "angmsd", "∢": "angsph", "∣": "mid", "∤": "nmid", "∥": "par", "∦": "npar", "∧": "and", "∨": "or", "∩": "cap", "∩︀": "caps", "∪": "cup", "∪︀": "cups", "∫": "int", "∬": "Int", "∭": "tint", "⨌": "qint", "∮": "oint", "∯": "Conint", "∰": "Cconint", "∱": "cwint", "∲": "cwconint", "∳": "awconint", "∴": "there4", "∵": "becaus", "∶": "ratio", "∷": "Colon", "∸": "minusd", "∺": "mDDot", "∻": "homtht", "∼": "sim", "≁": "nsim", "∼⃒": "nvsim", "∽": "bsim", "∽̱": "race", "∾": "ac", "∾̳": "acE", "∿": "acd", "≀": "wr", "≂": "esim", "≂̸": "nesim", "≃": "sime", "≄": "nsime", "≅": "cong", "≇": "ncong", "≆": "simne", "≈": "ap", "≉": "nap", "≊": "ape", "≋": "apid", "≋̸": "napid", "≌": "bcong", "≍": "CupCap", "≭": "NotCupCap", "≍⃒": "nvap", "≎": "bump", "≎̸": "nbump", "≏": "bumpe", "≏̸": "nbumpe", "≐": "doteq", "≐̸": "nedot", "≑": "eDot", "≒": "efDot", "≓": "erDot", "≔": "colone", "≕": "ecolon", "≖": "ecir", "≗": "cire", "≙": "wedgeq", "≚": "veeeq", "≜": "trie", "≟": "equest", "≡": "equiv", "≢": "nequiv", "≡⃥": "bnequiv", "≤": "le", "≰": "nle", "≤⃒": "nvle", "≥": "ge", "≱": "nge", "≥⃒": "nvge", "≦": "lE", "≦̸": "nlE", "≧": "gE", "≧̸": "ngE", "≨︀": "lvnE", "≨": "lnE", "≩": "gnE", "≩︀": "gvnE", "≪": "ll", "≪̸": "nLtv", "≪⃒": "nLt", "≫": "gg", "≫̸": "nGtv", "≫⃒": "nGt", "≬": "twixt", "≲": "lsim", "≴": "nlsim", "≳": "gsim", "≵": "ngsim", "≶": "lg", "≸": "ntlg", "≷": "gl", "≹": "ntgl", "≺": "pr", "⊀": "npr", "≻": "sc", "⊁": "nsc", "≼": "prcue", "⋠": "nprcue", "≽": "sccue", "⋡": "nsccue", "≾": "prsim", "≿": "scsim", "≿̸": "NotSucceedsTilde", "⊂": "sub", "⊄": "nsub", "⊂⃒": "vnsub", "⊃": "sup", "⊅": "nsup", "⊃⃒": "vnsup", "⊆": "sube", "⊈": "nsube", "⊇": "supe", "⊉": "nsupe", "⊊︀": "vsubne", "⊊": "subne", "⊋︀": "vsupne", "⊋": "supne", "⊍": "cupdot", "⊎": "uplus", "⊏": "sqsub", "⊏̸": "NotSquareSubset", "⊐": "sqsup", "⊐̸": "NotSquareSuperset", "⊑": "sqsube", "⋢": "nsqsube", "⊒": "sqsupe", "⋣": "nsqsupe", "⊓": "sqcap", "⊓︀": "sqcaps", "⊔": "sqcup", "⊔︀": "sqcups", "⊕": "oplus", "⊖": "ominus", "⊗": "otimes", "⊘": "osol", "⊙": "odot", "⊚": "ocir", "⊛": "oast", "⊝": "odash", "⊞": "plusb", "⊟": "minusb", "⊠": "timesb", "⊡": "sdotb", "⊢": "vdash", "⊬": "nvdash", "⊣": "dashv", "⊤": "top", "⊥": "bot", "⊧": "models", "⊨": "vDash", "⊭": "nvDash", "⊩": "Vdash", "⊮": "nVdash", "⊪": "Vvdash", "⊫": "VDash", "⊯": "nVDash", "⊰": "prurel", "⊲": "vltri", "⋪": "nltri", "⊳": "vrtri", "⋫": "nrtri", "⊴": "ltrie", "⋬": "nltrie", "⊴⃒": "nvltrie", "⊵": "rtrie", "⋭": "nrtrie", "⊵⃒": "nvrtrie", "⊶": "origof", "⊷": "imof", "⊸": "mumap", "⊹": "hercon", "⊺": "intcal", "⊻": "veebar", "⊽": "barvee", "⊾": "angrtvb", "⊿": "lrtri", "⋀": "Wedge", "⋁": "Vee", "⋂": "xcap", "⋃": "xcup", "⋄": "diam", "⋅": "sdot", "⋆": "Star", "⋇": "divonx", "⋈": "bowtie", "⋉": "ltimes", "⋊": "rtimes", "⋋": "lthree", "⋌": "rthree", "⋍": "bsime", "⋎": "cuvee", "⋏": "cuwed", "⋐": "Sub", "⋑": "Sup", "⋒": "Cap", "⋓": "Cup", "⋔": "fork", "⋕": "epar", "⋖": "ltdot", "⋗": "gtdot", "⋘": "Ll", "⋘̸": "nLl", "⋙": "Gg", "⋙̸": "nGg", "⋚︀": "lesg", "⋚": "leg", "⋛": "gel", "⋛︀": "gesl", "⋞": "cuepr", "⋟": "cuesc", "⋦": "lnsim", "⋧": "gnsim", "⋨": "prnsim", "⋩": "scnsim", "⋮": "vellip", "⋯": "ctdot", "⋰": "utdot", "⋱": "dtdot", "⋲": "disin", "⋳": "isinsv", "⋴": "isins", "⋵": "isindot", "⋵̸": "notindot", "⋶": "notinvc", "⋷": "notinvb", "⋹": "isinE", "⋹̸": "notinE", "⋺": "nisd", "⋻": "xnis", "⋼": "nis", "⋽": "notnivc", "⋾": "notnivb", "⌅": "barwed", "⌆": "Barwed", "⌌": "drcrop", "⌍": "dlcrop", "⌎": "urcrop", "⌏": "ulcrop", "⌐": "bnot", "⌒": "profline", "⌓": "profsurf", "⌕": "telrec", "⌖": "target", "⌜": "ulcorn", "⌝": "urcorn", "⌞": "dlcorn", "⌟": "drcorn", "⌢": "frown", "⌣": "smile", "⌭": "cylcty", "⌮": "profalar", "⌶": "topbot", "⌽": "ovbar", "⌿": "solbar", "⍼": "angzarr", "⎰": "lmoust", "⎱": "rmoust", "⎴": "tbrk", "⎵": "bbrk", "⎶": "bbrktbrk", "⏜": "OverParenthesis", "⏝": "UnderParenthesis", "⏞": "OverBrace", "⏟": "UnderBrace", "⏢": "trpezium", "⏧": "elinters", "␣": "blank", "─": "boxh", "│": "boxv", "┌": "boxdr", "┐": "boxdl", "└": "boxur", "┘": "boxul", "├": "boxvr", "┤": "boxvl", "┬": "boxhd", "┴": "boxhu", "┼": "boxvh", "═": "boxH", "║": "boxV", "╒": "boxdR", "╓": "boxDr", "╔": "boxDR", "╕": "boxdL", "╖": "boxDl", "╗": "boxDL", "╘": "boxuR", "╙": "boxUr", "╚": "boxUR", "╛": "boxuL", "╜": "boxUl", "╝": "boxUL", "╞": "boxvR", "╟": "boxVr", "╠": "boxVR", "╡": "boxvL", "╢": "boxVl", "╣": "boxVL", "╤": "boxHd", "╥": "boxhD", "╦": "boxHD", "╧": "boxHu", "╨": "boxhU", "╩": "boxHU", "╪": "boxvH", "╫": "boxVh", "╬": "boxVH", "▀": "uhblk", "▄": "lhblk", "█": "block", "░": "blk14", "▒": "blk12", "▓": "blk34", "□": "squ", "▪": "squf", "▫": "EmptyVerySmallSquare", "▭": "rect", "▮": "marker", "▱": "fltns", "△": "xutri", "▴": "utrif", "▵": "utri", "▸": "rtrif", "▹": "rtri", "▽": "xdtri", "▾": "dtrif", "▿": "dtri", "◂": "ltrif", "◃": "ltri", "◊": "loz", "○": "cir", "◬": "tridot", "◯": "xcirc", "◸": "ultri", "◹": "urtri", "◺": "lltri", "◻": "EmptySmallSquare", "◼": "FilledSmallSquare", "★": "starf", "☆": "star", "☎": "phone", "♀": "female", "♂": "male", "♠": "spades", "♣": "clubs", "♥": "hearts", "♦": "diams", "♪": "sung", "✓": "check", "✗": "cross", "✠": "malt", "✶": "sext", "❘": "VerticalSeparator", "⟈": "bsolhsub", "⟉": "suphsol", "⟵": "xlarr", "⟶": "xrarr", "⟷": "xharr", "⟸": "xlArr", "⟹": "xrArr", "⟺": "xhArr", "⟼": "xmap", "⟿": "dzigrarr", "⤂": "nvlArr", "⤃": "nvrArr", "⤄": "nvHarr", "⤅": "Map", "⤌": "lbarr", "⤍": "rbarr", "⤎": "lBarr", "⤏": "rBarr", "⤐": "RBarr", "⤑": "DDotrahd", "⤒": "UpArrowBar", "⤓": "DownArrowBar", "⤖": "Rarrtl", "⤙": "latail", "⤚": "ratail", "⤛": "lAtail", "⤜": "rAtail", "⤝": "larrfs", "⤞": "rarrfs", "⤟": "larrbfs", "⤠": "rarrbfs", "⤣": "nwarhk", "⤤": "nearhk", "⤥": "searhk", "⤦": "swarhk", "⤧": "nwnear", "⤨": "toea", "⤩": "tosa", "⤪": "swnwar", "⤳": "rarrc", "⤳̸": "nrarrc", "⤵": "cudarrr", "⤶": "ldca", "⤷": "rdca", "⤸": "cudarrl", "⤹": "larrpl", "⤼": "curarrm", "⤽": "cularrp", "⥅": "rarrpl", "⥈": "harrcir", "⥉": "Uarrocir", "⥊": "lurdshar", "⥋": "ldrushar", "⥎": "LeftRightVector", "⥏": "RightUpDownVector", "⥐": "DownLeftRightVector", "⥑": "LeftUpDownVector", "⥒": "LeftVectorBar", "⥓": "RightVectorBar", "⥔": "RightUpVectorBar", "⥕": "RightDownVectorBar", "⥖": "DownLeftVectorBar", "⥗": "DownRightVectorBar", "⥘": "LeftUpVectorBar", "⥙": "LeftDownVectorBar", "⥚": "LeftTeeVector", "⥛": "RightTeeVector", "⥜": "RightUpTeeVector", "⥝": "RightDownTeeVector", "⥞": "DownLeftTeeVector", "⥟": "DownRightTeeVector", "⥠": "LeftUpTeeVector", "⥡": "LeftDownTeeVector", "⥢": "lHar", "⥣": "uHar", "⥤": "rHar", "⥥": "dHar", "⥦": "luruhar", "⥧": "ldrdhar", "⥨": "ruluhar", "⥩": "rdldhar", "⥪": "lharul", "⥫": "llhard", "⥬": "rharul", "⥭": "lrhard", "⥮": "udhar", "⥯": "duhar", "⥰": "RoundImplies", "⥱": "erarr", "⥲": "simrarr", "⥳": "larrsim", "⥴": "rarrsim", "⥵": "rarrap", "⥶": "ltlarr", "⥸": "gtrarr", "⥹": "subrarr", "⥻": "suplarr", "⥼": "lfisht", "⥽": "rfisht", "⥾": "ufisht", "⥿": "dfisht", "⦚": "vzigzag", "⦜": "vangrt", "⦝": "angrtvbd", "⦤": "ange", "⦥": "range", "⦦": "dwangle", "⦧": "uwangle", "⦨": "angmsdaa", "⦩": "angmsdab", "⦪": "angmsdac", "⦫": "angmsdad", "⦬": "angmsdae", "⦭": "angmsdaf", "⦮": "angmsdag", "⦯": "angmsdah", "⦰": "bemptyv", "⦱": "demptyv", "⦲": "cemptyv", "⦳": "raemptyv", "⦴": "laemptyv", "⦵": "ohbar", "⦶": "omid", "⦷": "opar", "⦹": "operp", "⦻": "olcross", "⦼": "odsold", "⦾": "olcir", "⦿": "ofcir", "⧀": "olt", "⧁": "ogt", "⧂": "cirscir", "⧃": "cirE", "⧄": "solb", "⧅": "bsolb", "⧉": "boxbox", "⧍": "trisb", "⧎": "rtriltri", "⧏": "LeftTriangleBar", "⧏̸": "NotLeftTriangleBar", "⧐": "RightTriangleBar", "⧐̸": "NotRightTriangleBar", "⧜": "iinfin", "⧝": "infintie", "⧞": "nvinfin", "⧣": "eparsl", "⧤": "smeparsl", "⧥": "eqvparsl", "⧫": "lozf", "⧴": "RuleDelayed", "⧶": "dsol", "⨀": "xodot", "⨁": "xoplus", "⨂": "xotime", "⨄": "xuplus", "⨆": "xsqcup", "⨍": "fpartint", "⨐": "cirfnint", "⨑": "awint", "⨒": "rppolint", "⨓": "scpolint", "⨔": "npolint", "⨕": "pointint", "⨖": "quatint", "⨗": "intlarhk", "⨢": "pluscir", "⨣": "plusacir", "⨤": "simplus", "⨥": "plusdu", "⨦": "plussim", "⨧": "plustwo", "⨩": "mcomma", "⨪": "minusdu", "⨭": "loplus", "⨮": "roplus", "⨯": "Cross", "⨰": "timesd", "⨱": "timesbar", "⨳": "smashp", "⨴": "lotimes", "⨵": "rotimes", "⨶": "otimesas", "⨷": "Otimes", "⨸": "odiv", "⨹": "triplus", "⨺": "triminus", "⨻": "tritime", "⨼": "iprod", "⨿": "amalg", "⩀": "capdot", "⩂": "ncup", "⩃": "ncap", "⩄": "capand", "⩅": "cupor", "⩆": "cupcap", "⩇": "capcup", "⩈": "cupbrcap", "⩉": "capbrcup", "⩊": "cupcup", "⩋": "capcap", "⩌": "ccups", "⩍": "ccaps", "⩐": "ccupssm", "⩓": "And", "⩔": "Or", "⩕": "andand", "⩖": "oror", "⩗": "orslope", "⩘": "andslope", "⩚": "andv", "⩛": "orv", "⩜": "andd", "⩝": "ord", "⩟": "wedbar", "⩦": "sdote", "⩪": "simdot", "⩭": "congdot", "⩭̸": "ncongdot", "⩮": "easter", "⩯": "apacir", "⩰": "apE", "⩰̸": "napE", "⩱": "eplus", "⩲": "pluse", "⩳": "Esim", "⩷": "eDDot", "⩸": "equivDD", "⩹": "ltcir", "⩺": "gtcir", "⩻": "ltquest", "⩼": "gtquest", "⩽": "les", "⩽̸": "nles", "⩾": "ges", "⩾̸": "nges", "⩿": "lesdot", "⪀": "gesdot", "⪁": "lesdoto", "⪂": "gesdoto", "⪃": "lesdotor", "⪄": "gesdotol", "⪅": "lap", "⪆": "gap", "⪇": "lne", "⪈": "gne", "⪉": "lnap", "⪊": "gnap", "⪋": "lEg", "⪌": "gEl", "⪍": "lsime", "⪎": "gsime", "⪏": "lsimg", "⪐": "gsiml", "⪑": "lgE", "⪒": "glE", "⪓": "lesges", "⪔": "gesles", "⪕": "els", "⪖": "egs", "⪗": "elsdot", "⪘": "egsdot", "⪙": "el", "⪚": "eg", "⪝": "siml", "⪞": "simg", "⪟": "simlE", "⪠": "simgE", "⪡": "LessLess", "⪡̸": "NotNestedLessLess", "⪢": "GreaterGreater", "⪢̸": "NotNestedGreaterGreater", "⪤": "glj", "⪥": "gla", "⪦": "ltcc", "⪧": "gtcc", "⪨": "lescc", "⪩": "gescc", "⪪": "smt", "⪫": "lat", "⪬": "smte", "⪬︀": "smtes", "⪭": "late", "⪭︀": "lates", "⪮": "bumpE", "⪯": "pre", "⪯̸": "npre", "⪰": "sce", "⪰̸": "nsce", "⪳": "prE", "⪴": "scE", "⪵": "prnE", "⪶": "scnE", "⪷": "prap", "⪸": "scap", "⪹": "prnap", "⪺": "scnap", "⪻": "Pr", "⪼": "Sc", "⪽": "subdot", "⪾": "supdot", "⪿": "subplus", "⫀": "supplus", "⫁": "submult", "⫂": "supmult", "⫃": "subedot", "⫄": "supedot", "⫅": "subE", "⫅̸": "nsubE", "⫆": "supE", "⫆̸": "nsupE", "⫇": "subsim", "⫈": "supsim", "⫋︀": "vsubnE", "⫋": "subnE", "⫌︀": "vsupnE", "⫌": "supnE", "⫏": "csub", "⫐": "csup", "⫑": "csube", "⫒": "csupe", "⫓": "subsup", "⫔": "supsub", "⫕": "subsub", "⫖": "supsup", "⫗": "suphsub", "⫘": "supdsub", "⫙": "forkv", "⫚": "topfork", "⫛": "mlcp", "⫤": "Dashv", "⫦": "Vdashl", "⫧": "Barv", "⫨": "vBar", "⫩": "vBarv", "⫫": "Vbar", "⫬": "Not", "⫭": "bNot", "⫮": "rnmid", "⫯": "cirmid", "⫰": "midcir", "⫱": "topcir", "⫲": "nhpar", "⫳": "parsim", "⫽": "parsl", "⫽⃥": "nparsl", "♭": "flat", "♮": "natur", "♯": "sharp", "¤": "curren", "¢": "cent", $: "dollar", "£": "pound", "¥": "yen", "€": "euro", "¹": "sup1", "½": "half", "⅓": "frac13", "¼": "frac14", "⅕": "frac15", "⅙": "frac16", "⅛": "frac18", "²": "sup2", "⅔": "frac23", "⅖": "frac25", "³": "sup3", "¾": "frac34", "⅗": "frac35", "⅜": "frac38", "⅘": "frac45", "⅚": "frac56", "⅝": "frac58", "⅞": "frac78", "𝒶": "ascr", "𝕒": "aopf", "𝔞": "afr", "𝔸": "Aopf", "𝔄": "Afr", "𝒜": "Ascr", ª: "ordf", á: "aacute", Á: "Aacute", à: "agrave", À: "Agrave", ă: "abreve", Ă: "Abreve", â: "acirc", Â: "Acirc", å: "aring", Å: "angst", ä: "auml", Ä: "Auml", ã: "atilde", Ã: "Atilde", ą: "aogon", Ą: "Aogon", ā: "amacr", Ā: "Amacr", æ: "aelig", Æ: "AElig", "𝒷": "bscr", "𝕓": "bopf", "𝔟": "bfr", "𝔹": "Bopf", ℬ: "Bscr", "𝔅": "Bfr", "𝔠": "cfr", "𝒸": "cscr", "𝕔": "copf", ℭ: "Cfr", "𝒞": "Cscr", ℂ: "Copf", ć: "cacute", Ć: "Cacute", ĉ: "ccirc", Ĉ: "Ccirc", č: "ccaron", Č: "Ccaron", ċ: "cdot", Ċ: "Cdot", ç: "ccedil", Ç: "Ccedil", "℅": "incare", "𝔡": "dfr", "ⅆ": "dd", "𝕕": "dopf", "𝒹": "dscr", "𝒟": "Dscr", "𝔇": "Dfr", "ⅅ": "DD", "𝔻": "Dopf", ď: "dcaron", Ď: "Dcaron", đ: "dstrok", Đ: "Dstrok", ð: "eth", Ð: "ETH", "ⅇ": "ee", ℯ: "escr", "𝔢": "efr", "𝕖": "eopf", ℰ: "Escr", "𝔈": "Efr", "𝔼": "Eopf", é: "eacute", É: "Eacute", è: "egrave", È: "Egrave", ê: "ecirc", Ê: "Ecirc", ě: "ecaron", Ě: "Ecaron", ë: "euml", Ë: "Euml", ė: "edot", Ė: "Edot", ę: "eogon", Ę: "Eogon", ē: "emacr", Ē: "Emacr", "𝔣": "ffr", "𝕗": "fopf", "𝒻": "fscr", "𝔉": "Ffr", "𝔽": "Fopf", ℱ: "Fscr", ﬀ: "fflig", ﬃ: "ffilig", ﬄ: "ffllig", ﬁ: "filig", fj: "fjlig", ﬂ: "fllig", ƒ: "fnof", ℊ: "gscr", "𝕘": "gopf", "𝔤": "gfr", "𝒢": "Gscr", "𝔾": "Gopf", "𝔊": "Gfr", ǵ: "gacute", ğ: "gbreve", Ğ: "Gbreve", ĝ: "gcirc", Ĝ: "Gcirc", ġ: "gdot", Ġ: "Gdot", Ģ: "Gcedil", "𝔥": "hfr", ℎ: "planckh", "𝒽": "hscr", "𝕙": "hopf", ℋ: "Hscr", ℌ: "Hfr", ℍ: "Hopf", ĥ: "hcirc", Ĥ: "Hcirc", ℏ: "hbar", ħ: "hstrok", Ħ: "Hstrok", "𝕚": "iopf", "𝔦": "ifr", "𝒾": "iscr", "ⅈ": "ii", "𝕀": "Iopf", ℐ: "Iscr", ℑ: "Im", í: "iacute", Í: "Iacute", ì: "igrave", Ì: "Igrave", î: "icirc", Î: "Icirc", ï: "iuml", Ï: "Iuml", ĩ: "itilde", Ĩ: "Itilde", İ: "Idot", į: "iogon", Į: "Iogon", ī: "imacr", Ī: "Imacr", ĳ: "ijlig", Ĳ: "IJlig", ı: "imath", "𝒿": "jscr", "𝕛": "jopf", "𝔧": "jfr", "𝒥": "Jscr", "𝔍": "Jfr", "𝕁": "Jopf", ĵ: "jcirc", Ĵ: "Jcirc", "ȷ": "jmath", "𝕜": "kopf", "𝓀": "kscr", "𝔨": "kfr", "𝒦": "Kscr", "𝕂": "Kopf", "𝔎": "Kfr", ķ: "kcedil", Ķ: "Kcedil", "𝔩": "lfr", "𝓁": "lscr", ℓ: "ell", "𝕝": "lopf", ℒ: "Lscr", "𝔏": "Lfr", "𝕃": "Lopf", ĺ: "lacute", Ĺ: "Lacute", ľ: "lcaron", Ľ: "Lcaron", ļ: "lcedil", Ļ: "Lcedil", ł: "lstrok", Ł: "Lstrok", ŀ: "lmidot", Ŀ: "Lmidot", "𝔪": "mfr", "𝕞": "mopf", "𝓂": "mscr", "𝔐": "Mfr", "𝕄": "Mopf", ℳ: "Mscr", "𝔫": "nfr", "𝕟": "nopf", "𝓃": "nscr", ℕ: "Nopf", "𝒩": "Nscr", "𝔑": "Nfr", ń: "nacute", Ń: "Nacute", ň: "ncaron", Ň: "Ncaron", ñ: "ntilde", Ñ: "Ntilde", ņ: "ncedil", Ņ: "Ncedil", "№": "numero", ŋ: "eng", Ŋ: "ENG", "𝕠": "oopf", "𝔬": "ofr", ℴ: "oscr", "𝒪": "Oscr", "𝔒": "Ofr", "𝕆": "Oopf", º: "ordm", ó: "oacute", Ó: "Oacute", ò: "ograve", Ò: "Ograve", ô: "ocirc", Ô: "Ocirc", ö: "ouml", Ö: "Ouml", ő: "odblac", Ő: "Odblac", õ: "otilde", Õ: "Otilde", ø: "oslash", Ø: "Oslash", ō: "omacr", Ō: "Omacr", œ: "oelig", Œ: "OElig", "𝔭": "pfr", "𝓅": "pscr", "𝕡": "popf", ℙ: "Popf", "𝔓": "Pfr", "𝒫": "Pscr", "𝕢": "qopf", "𝔮": "qfr", "𝓆": "qscr", "𝒬": "Qscr", "𝔔": "Qfr", ℚ: "Qopf", ĸ: "kgreen", "𝔯": "rfr", "𝕣": "ropf", "𝓇": "rscr", ℛ: "Rscr", ℜ: "Re", ℝ: "Ropf", ŕ: "racute", Ŕ: "Racute", ř: "rcaron", Ř: "Rcaron", ŗ: "rcedil", Ŗ: "Rcedil", "𝕤": "sopf", "𝓈": "sscr", "𝔰": "sfr", "𝕊": "Sopf", "𝔖": "Sfr", "𝒮": "Sscr", "Ⓢ": "oS", ś: "sacute", Ś: "Sacute", ŝ: "scirc", Ŝ: "Scirc", š: "scaron", Š: "Scaron", ş: "scedil", Ş: "Scedil", ß: "szlig", "𝔱": "tfr", "𝓉": "tscr", "𝕥": "topf", "𝒯": "Tscr", "𝔗": "Tfr", "𝕋": "Topf", ť: "tcaron", Ť: "Tcaron", ţ: "tcedil", Ţ: "Tcedil", "™": "trade", ŧ: "tstrok", Ŧ: "Tstrok", "𝓊": "uscr", "𝕦": "uopf", "𝔲": "ufr", "𝕌": "Uopf", "𝔘": "Ufr", "𝒰": "Uscr", ú: "uacute", Ú: "Uacute", ù: "ugrave", Ù: "Ugrave", ŭ: "ubreve", Ŭ: "Ubreve", û: "ucirc", Û: "Ucirc", ů: "uring", Ů: "Uring", ü: "uuml", Ü: "Uuml", ű: "udblac", Ű: "Udblac", ũ: "utilde", Ũ: "Utilde", ų: "uogon", Ų: "Uogon", ū: "umacr", Ū: "Umacr", "𝔳": "vfr", "𝕧": "vopf", "𝓋": "vscr", "𝔙": "Vfr", "𝕍": "Vopf", "𝒱": "Vscr", "𝕨": "wopf", "𝓌": "wscr", "𝔴": "wfr", "𝒲": "Wscr", "𝕎": "Wopf", "𝔚": "Wfr", ŵ: "wcirc", Ŵ: "Wcirc", "𝔵": "xfr", "𝓍": "xscr", "𝕩": "xopf", "𝕏": "Xopf", "𝔛": "Xfr", "𝒳": "Xscr", "𝔶": "yfr", "𝓎": "yscr", "𝕪": "yopf", "𝒴": "Yscr", "𝔜": "Yfr", "𝕐": "Yopf", ý: "yacute", Ý: "Yacute", ŷ: "ycirc", Ŷ: "Ycirc", ÿ: "yuml", Ÿ: "Yuml", "𝓏": "zscr", "𝔷": "zfr", "𝕫": "zopf", ℨ: "Zfr", ℤ: "Zopf", "𝒵": "Zscr", ź: "zacute", Ź: "Zacute", ž: "zcaron", Ž: "Zcaron", ż: "zdot", Ż: "Zdot", Ƶ: "imped", þ: "thorn", Þ: "THORN", ŉ: "napos", α: "alpha", Α: "Alpha", β: "beta", Β: "Beta", γ: "gamma", Γ: "Gamma", δ: "delta", Δ: "Delta", ε: "epsi", "ϵ": "epsiv", Ε: "Epsilon", ϝ: "gammad", Ϝ: "Gammad", ζ: "zeta", Ζ: "Zeta", η: "eta", Η: "Eta", θ: "theta", ϑ: "thetav", Θ: "Theta", ι: "iota", Ι: "Iota", κ: "kappa", ϰ: "kappav", Κ: "Kappa", λ: "lambda", Λ: "Lambda", μ: "mu", µ: "micro", Μ: "Mu", ν: "nu", Ν: "Nu", ξ: "xi", Ξ: "Xi", ο: "omicron", Ο: "Omicron", π: "pi", ϖ: "piv", Π: "Pi", ρ: "rho", ϱ: "rhov", Ρ: "Rho", σ: "sigma", Σ: "Sigma", ς: "sigmaf", τ: "tau", Τ: "Tau", υ: "upsi", Υ: "Upsilon", ϒ: "Upsi", φ: "phi", ϕ: "phiv", Φ: "Phi", χ: "chi", Χ: "Chi", ψ: "psi", Ψ: "Psi", ω: "omega", Ω: "ohm", а: "acy", А: "Acy", б: "bcy", Б: "Bcy", в: "vcy", В: "Vcy", г: "gcy", Г: "Gcy", ѓ: "gjcy", Ѓ: "GJcy", д: "dcy", Д: "Dcy", ђ: "djcy", Ђ: "DJcy", е: "iecy", Е: "IEcy", ё: "iocy", Ё: "IOcy", є: "jukcy", Є: "Jukcy", ж: "zhcy", Ж: "ZHcy", з: "zcy", З: "Zcy", ѕ: "dscy", Ѕ: "DScy", и: "icy", И: "Icy", і: "iukcy", І: "Iukcy", ї: "yicy", Ї: "YIcy", й: "jcy", Й: "Jcy", ј: "jsercy", Ј: "Jsercy", к: "kcy", К: "Kcy", ќ: "kjcy", Ќ: "KJcy", л: "lcy", Л: "Lcy", љ: "ljcy", Љ: "LJcy", м: "mcy", М: "Mcy", н: "ncy", Н: "Ncy", њ: "njcy", Њ: "NJcy", о: "ocy", О: "Ocy", п: "pcy", П: "Pcy", р: "rcy", Р: "Rcy", с: "scy", С: "Scy", т: "tcy", Т: "Tcy", ћ: "tshcy", Ћ: "TSHcy", у: "ucy", У: "Ucy", ў: "ubrcy", Ў: "Ubrcy", ф: "fcy", Ф: "Fcy", х: "khcy", Х: "KHcy", ц: "tscy", Ц: "TScy", ч: "chcy", Ч: "CHcy", џ: "dzcy", Џ: "DZcy", ш: "shcy", Ш: "SHcy", щ: "shchcy", Щ: "SHCHcy", ъ: "hardcy", Ъ: "HARDcy", ы: "ycy", Ы: "Ycy", ь: "softcy", Ь: "SOFTcy", э: "ecy", Э: "Ecy", ю: "yucy", Ю: "YUcy", я: "yacy", Я: "YAcy", ℵ: "aleph", ℶ: "beth", ℷ: "gimel", ℸ: "daleth" }, c = /["&'<>`]/g, g = {
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
    }, f = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, _ = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, m = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, y = { aacute: "á", Aacute: "Á", abreve: "ă", Abreve: "Ă", ac: "∾", acd: "∿", acE: "∾̳", acirc: "â", Acirc: "Â", acute: "´", acy: "а", Acy: "А", aelig: "æ", AElig: "Æ", af: "⁡", afr: "𝔞", Afr: "𝔄", agrave: "à", Agrave: "À", alefsym: "ℵ", aleph: "ℵ", alpha: "α", Alpha: "Α", amacr: "ā", Amacr: "Ā", amalg: "⨿", amp: "&", AMP: "&", and: "∧", And: "⩓", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", Aogon: "Ą", aopf: "𝕒", Aopf: "𝔸", ap: "≈", apacir: "⩯", ape: "≊", apE: "⩰", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", aring: "å", Aring: "Å", ascr: "𝒶", Ascr: "𝒜", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", Bcy: "Б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", beta: "β", Beta: "Β", beth: "ℶ", between: "≬", bfr: "𝔟", Bfr: "𝔅", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bNot: "⫭", bopf: "𝕓", Bopf: "𝔹", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxhD: "╥", boxHd: "╤", boxHD: "╦", boxhu: "┴", boxhU: "╨", boxHu: "╧", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpe: "≏", bumpE: "⪮", bumpeq: "≏", Bumpeq: "≎", cacute: "ć", Cacute: "Ć", cap: "∩", Cap: "⋒", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", ccaron: "č", Ccaron: "Č", ccedil: "ç", Ccedil: "Ç", ccirc: "ĉ", Ccirc: "Ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", Cdot: "Ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", chcy: "ч", CHcy: "Ч", check: "✓", checkmark: "✓", chi: "χ", Chi: "Χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cire: "≗", cirE: "⧃", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", colone: "≔", Colone: "⩴", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", cscr: "𝒸", Cscr: "𝒞", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", Cup: "⋓", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", dArr: "⇓", Darr: "↡", dash: "‐", dashv: "⊣", Dashv: "⫤", dbkarow: "⤏", dblac: "˝", dcaron: "ď", Dcaron: "Ď", dcy: "д", Dcy: "Д", dd: "ⅆ", DD: "ⅅ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", delta: "δ", Delta: "Δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", Dfr: "𝔇", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", DJcy: "Ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", Dopf: "𝔻", dot: "˙", Dot: "¨", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", downarrow: "↓", Downarrow: "⇓", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", Dscr: "𝒟", dscy: "ѕ", DScy: "Ѕ", dsol: "⧶", dstrok: "đ", Dstrok: "Đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", DZcy: "Џ", dzigrarr: "⟿", eacute: "é", Eacute: "É", easter: "⩮", ecaron: "ě", Ecaron: "Ě", ecir: "≖", ecirc: "ê", Ecirc: "Ê", ecolon: "≕", ecy: "э", Ecy: "Э", eDDot: "⩷", edot: "ė", eDot: "≑", Edot: "Ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", Efr: "𝔈", eg: "⪚", egrave: "è", Egrave: "È", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", Emacr: "Ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", eng: "ŋ", ENG: "Ŋ", ensp: " ", eogon: "ę", Eogon: "Ę", eopf: "𝕖", Eopf: "𝔼", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", Epsilon: "Ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", esim: "≂", Esim: "⩳", eta: "η", Eta: "Η", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", fcy: "ф", Fcy: "Ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", Ffr: "𝔉", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", Fopf: "𝔽", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", gamma: "γ", Gamma: "Γ", gammad: "ϝ", Gammad: "Ϝ", gap: "⪆", gbreve: "ğ", Gbreve: "Ğ", Gcedil: "Ģ", gcirc: "ĝ", Gcirc: "Ĝ", gcy: "г", Gcy: "Г", gdot: "ġ", Gdot: "Ġ", ge: "≥", gE: "≧", gel: "⋛", gEl: "⪌", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", Gfr: "𝔊", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", GJcy: "Ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", Gopf: "𝔾", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", gscr: "ℊ", Gscr: "𝒢", gsim: "≳", gsime: "⪎", gsiml: "⪐", gt: ">", Gt: "≫", GT: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", HARDcy: "Ъ", harr: "↔", hArr: "⇔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", hcirc: "ĥ", Hcirc: "Ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", hstrok: "ħ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", iacute: "í", Iacute: "Í", ic: "⁣", icirc: "î", Icirc: "Î", icy: "и", Icy: "И", Idot: "İ", iecy: "е", IEcy: "Е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", igrave: "ì", Igrave: "Ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", IJlig: "Ĳ", Im: "ℑ", imacr: "ī", Imacr: "Ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", Int: "∬", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", iocy: "ё", IOcy: "Ё", iogon: "į", Iogon: "Į", iopf: "𝕚", Iopf: "𝕀", iota: "ι", Iota: "Ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", Itilde: "Ĩ", iukcy: "і", Iukcy: "І", iuml: "ï", Iuml: "Ï", jcirc: "ĵ", Jcirc: "Ĵ", jcy: "й", Jcy: "Й", jfr: "𝔧", Jfr: "𝔍", jmath: "ȷ", jopf: "𝕛", Jopf: "𝕁", jscr: "𝒿", Jscr: "𝒥", jsercy: "ј", Jsercy: "Ј", jukcy: "є", Jukcy: "Є", kappa: "κ", Kappa: "Κ", kappav: "ϰ", kcedil: "ķ", Kcedil: "Ķ", kcy: "к", Kcy: "К", kfr: "𝔨", Kfr: "𝔎", kgreen: "ĸ", khcy: "х", KHcy: "Х", kjcy: "ќ", KJcy: "Ќ", kopf: "𝕜", Kopf: "𝕂", kscr: "𝓀", Kscr: "𝒦", lAarr: "⇚", lacute: "ĺ", Lacute: "Ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", Lambda: "Λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larr: "←", lArr: "⇐", Larr: "↞", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", lAtail: "⤛", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", Lcaron: "Ľ", lcedil: "ļ", Lcedil: "Ļ", lceil: "⌈", lcub: "{", lcy: "л", Lcy: "Л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", leftarrow: "←", Leftarrow: "⇐", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", Leftrightarrow: "⇔", LeftRightArrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", leg: "⋚", lEg: "⪋", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", Lfr: "𝔏", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", LJcy: "Љ", ll: "≪", Ll: "⋘", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", lmidot: "ŀ", Lmidot: "Ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", Longleftarrow: "⟸", LongLeftArrow: "⟵", longleftrightarrow: "⟷", Longleftrightarrow: "⟺", LongLeftRightArrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", Longrightarrow: "⟹", LongRightArrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", Lopf: "𝕃", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", Lstrok: "Ł", lt: "<", Lt: "≪", LT: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", Map: "⤅", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", Mcy: "М", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", mfr: "𝔪", Mfr: "𝔐", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", Mopf: "𝕄", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", mu: "μ", Mu: "Μ", multimap: "⊸", mumap: "⊸", nabla: "∇", nacute: "ń", Nacute: "Ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", Ncaron: "Ň", ncedil: "ņ", Ncedil: "Ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", Ncy: "Н", ndash: "–", ne: "≠", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", nfr: "𝔫", Nfr: "𝔑", nge: "≱", ngE: "≧̸", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", ngt: "≯", nGt: "≫⃒", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", NJcy: "Њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nle: "≰", nlE: "≦̸", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nlt: "≮", nLt: "≪⃒", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", not: "¬", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrarr: "↛", nrArr: "⇏", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", Nscr: "𝒩", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsube: "⊈", nsubE: "⫅̸", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupe: "⊉", nsupE: "⫆̸", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntilde: "ñ", Ntilde: "Ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", Nu: "Ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", oacute: "ó", Oacute: "Ó", oast: "⊛", ocir: "⊚", ocirc: "ô", Ocirc: "Ô", ocy: "о", Ocy: "О", odash: "⊝", odblac: "ő", Odblac: "Ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", OElig: "Œ", ofcir: "⦿", ofr: "𝔬", Ofr: "𝔒", ogon: "˛", ograve: "ò", Ograve: "Ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", Omacr: "Ō", omega: "ω", Omega: "Ω", omicron: "ο", Omicron: "Ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", Oopf: "𝕆", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", or: "∨", Or: "⩔", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", oscr: "ℴ", Oscr: "𝒪", oslash: "ø", Oslash: "Ø", osol: "⊘", otilde: "õ", Otilde: "Õ", otimes: "⊗", Otimes: "⨷", otimesas: "⨶", ouml: "ö", Ouml: "Ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", pcy: "п", Pcy: "П", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", Pfr: "𝔓", phi: "φ", Phi: "Φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", Pi: "Π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", pr: "≺", Pr: "⪻", prap: "⪷", prcue: "≼", pre: "⪯", prE: "⪳", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", Pscr: "𝒫", psi: "ψ", Psi: "Ψ", puncsp: " ", qfr: "𝔮", Qfr: "𝔔", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", qscr: "𝓆", Qscr: "𝒬", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", racute: "ŕ", Racute: "Ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarr: "→", rArr: "⇒", Rarr: "↠", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", Rarrtl: "⤖", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", Rcaron: "Ř", rcedil: "ŗ", Rcedil: "Ŗ", rceil: "⌉", rcub: "}", rcy: "р", Rcy: "Р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", Rho: "Ρ", rhov: "ϱ", RightAngleBracket: "⟩", rightarrow: "→", Rightarrow: "⇒", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", sacute: "ś", Sacute: "Ś", sbquo: "‚", sc: "≻", Sc: "⪼", scap: "⪸", scaron: "š", Scaron: "Š", sccue: "≽", sce: "⪰", scE: "⪴", scedil: "ş", Scedil: "Ş", scirc: "ŝ", Scirc: "Ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", Scy: "С", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", Sfr: "𝔖", sfrown: "⌢", sharp: "♯", shchcy: "щ", SHCHcy: "Щ", shcy: "ш", SHcy: "Ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", sigma: "σ", Sigma: "Σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", SOFTcy: "Ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", Sopf: "𝕊", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", Sscr: "𝒮", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", Star: "⋆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", sube: "⊆", subE: "⫅", subedot: "⫃", submult: "⫁", subne: "⊊", subnE: "⫋", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup: "⊃", Sup: "⋑", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supe: "⊇", supE: "⫆", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supne: "⊋", supnE: "⫌", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", tau: "τ", Tau: "Τ", tbrk: "⎴", tcaron: "ť", Tcaron: "Ť", tcedil: "ţ", Tcedil: "Ţ", tcy: "т", Tcy: "Т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", Tfr: "𝔗", there4: "∴", therefore: "∴", Therefore: "∴", theta: "θ", Theta: "Θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", thorn: "þ", THORN: "Þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", Topf: "𝕋", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", Tscr: "𝒯", tscy: "ц", TScy: "Ц", tshcy: "ћ", TSHcy: "Ћ", tstrok: "ŧ", Tstrok: "Ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uacute: "ú", Uacute: "Ú", uarr: "↑", uArr: "⇑", Uarr: "↟", Uarrocir: "⥉", ubrcy: "ў", Ubrcy: "Ў", ubreve: "ŭ", Ubreve: "Ŭ", ucirc: "û", Ucirc: "Û", ucy: "у", Ucy: "У", udarr: "⇅", udblac: "ű", Udblac: "Ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", Ufr: "𝔘", ugrave: "ù", Ugrave: "Ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", Umacr: "Ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", uogon: "ų", Uogon: "Ų", uopf: "𝕦", Uopf: "𝕌", uparrow: "↑", Uparrow: "⇑", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", updownarrow: "↕", Updownarrow: "⇕", UpDownArrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", upsilon: "υ", Upsilon: "Υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", Uring: "Ů", urtri: "◹", uscr: "𝓊", Uscr: "𝒰", utdot: "⋰", utilde: "ũ", Utilde: "Ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uuml: "ü", Uuml: "Ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", vcy: "в", Vcy: "В", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", vee: "∨", Vee: "⋁", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", vfr: "𝔳", Vfr: "𝔙", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", Vopf: "𝕍", vprop: "∝", vrtri: "⊳", vscr: "𝓋", Vscr: "𝒱", vsubne: "⊊︀", vsubnE: "⫋︀", vsupne: "⊋︀", vsupnE: "⫌︀", Vvdash: "⊪", vzigzag: "⦚", wcirc: "ŵ", Wcirc: "Ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", wfr: "𝔴", Wfr: "𝔚", wopf: "𝕨", Wopf: "𝕎", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", Wscr: "𝒲", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", Xfr: "𝔛", xharr: "⟷", xhArr: "⟺", xi: "ξ", Xi: "Ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", Xopf: "𝕏", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", xscr: "𝓍", Xscr: "𝒳", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacute: "ý", Yacute: "Ý", yacy: "я", YAcy: "Я", ycirc: "ŷ", Ycirc: "Ŷ", ycy: "ы", Ycy: "Ы", yen: "¥", yfr: "𝔶", Yfr: "𝔜", yicy: "ї", YIcy: "Ї", yopf: "𝕪", Yopf: "𝕐", yscr: "𝓎", Yscr: "𝒴", yucy: "ю", YUcy: "Ю", yuml: "ÿ", Yuml: "Ÿ", zacute: "ź", Zacute: "Ź", zcaron: "ž", Zcaron: "Ž", zcy: "з", Zcy: "З", zdot: "ż", Zdot: "Ż", zeetrf: "ℨ", ZeroWidthSpace: "​", zeta: "ζ", Zeta: "Ζ", zfr: "𝔷", Zfr: "ℨ", zhcy: "ж", ZHcy: "Ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", zscr: "𝓏", Zscr: "𝒵", zwj: "‍", zwnj: "‌" }, k = { aacute: "á", Aacute: "Á", acirc: "â", Acirc: "Â", acute: "´", aelig: "æ", AElig: "Æ", agrave: "à", Agrave: "À", amp: "&", AMP: "&", aring: "å", Aring: "Å", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", brvbar: "¦", ccedil: "ç", Ccedil: "Ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", Eacute: "É", ecirc: "ê", Ecirc: "Ê", egrave: "è", Egrave: "È", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", iacute: "í", Iacute: "Í", icirc: "î", Icirc: "Î", iexcl: "¡", igrave: "ì", Igrave: "Ì", iquest: "¿", iuml: "ï", Iuml: "Ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", Ntilde: "Ñ", oacute: "ó", Oacute: "Ó", ocirc: "ô", Ocirc: "Ô", ograve: "ò", Ograve: "Ò", ordf: "ª", ordm: "º", oslash: "ø", Oslash: "Ø", otilde: "õ", Otilde: "Õ", ouml: "ö", Ouml: "Ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", THORN: "Þ", times: "×", uacute: "ú", Uacute: "Ú", ucirc: "û", Ucirc: "Û", ugrave: "ù", Ugrave: "Ù", uml: "¨", uuml: "ü", Uuml: "Ü", yacute: "ý", Yacute: "Ý", yen: "¥", yuml: "ÿ" }, b = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" }, x = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111], v = String.fromCharCode, w = {}, A = w.hasOwnProperty, B = function(h, E) {
      return A.call(h, E);
    }, z = function(h, E) {
      for (var P = -1, W = h.length; ++P < W; )
        if (h[P] == E)
          return !0;
      return !1;
    }, L = function(h, E) {
      if (!h)
        return E;
      var P = {}, W;
      for (W in E)
        P[W] = B(h, W) ? h[W] : E[W];
      return P;
    }, O = function(h, E) {
      var P = "";
      return h >= 55296 && h <= 57343 || h > 1114111 ? (E && G("character reference outside the permissible Unicode range"), "�") : B(b, h) ? (E && G("disallowed character reference"), b[h]) : (E && z(x, h) && G("disallowed character reference"), h > 65535 && (h -= 65536, P += v(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), P += v(h), P);
    }, V = function(h) {
      return "&#x" + h.toString(16).toUpperCase() + ";";
    }, I = function(h) {
      return "&#" + h + ";";
    }, G = function(h) {
      throw Error("Parse error: " + h);
    }, C = function(h, E) {
      E = L(E, C.options);
      var P = E.strict;
      P && _.test(h) && G("forbidden code point");
      var W = E.encodeEverything, se = E.useNamedReferences, be = E.allowUnsafeSymbols, pe = E.decimal ? I : V, te = function($) {
        return pe($.charCodeAt(0));
      };
      return W ? (h = h.replace(s, function($) {
        return se && B(p, $) ? "&" + p[$] + ";" : te($);
      }), se && (h = h.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), se && (h = h.replace(l, function($) {
        return "&" + p[$] + ";";
      }))) : se ? (be || (h = h.replace(c, function($) {
        return "&" + p[$] + ";";
      })), h = h.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), h = h.replace(l, function($) {
        return "&" + p[$] + ";";
      })) : be || (h = h.replace(c, te)), h.replace(n, function($) {
        var rt = $.charCodeAt(0), Ft = $.charCodeAt(1), ur = (rt - 55296) * 1024 + Ft - 56320 + 65536;
        return pe(ur);
      }).replace(u, te);
    };
    C.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1
    };
    var D = function(h, E) {
      E = L(E, D.options);
      var P = E.strict;
      return P && f.test(h) && G("malformed character reference"), h.replace(m, function(W, se, be, pe, te, $, rt, Ft, ur) {
        var ot, at, lr, cr, it, nt;
        return se ? (it = se, y[it]) : be ? (it = be, nt = pe, nt && E.isAttributeValue ? (P && nt == "=" && G("`&` did not start a character reference"), W) : (P && G(
          "named character reference was not terminated by a semicolon"
        ), k[it] + (nt || ""))) : te ? (lr = te, at = $, P && !at && G("character reference was not terminated by a semicolon"), ot = parseInt(lr, 10), O(ot, P)) : rt ? (cr = rt, at = Ft, P && !at && G("character reference was not terminated by a semicolon"), ot = parseInt(cr, 16), O(ot, P)) : (P && G(
          "named character reference was not terminated by a semicolon"
        ), W);
      });
    };
    D.options = {
      isAttributeValue: !1,
      strict: !1
    };
    var R = function(h) {
      return h.replace(c, function(E) {
        return g[E];
      });
    }, J = {
      version: "1.2.0",
      encode: C,
      decode: D,
      escape: R,
      unescape: D
    };
    if (o && !o.nodeType)
      if (a)
        a.exports = J;
      else
        for (var T in J)
          B(J, T) && (o[T] = J[T]);
    else
      r.he = J;
  })(zt);
})(yt, yt.exports);
var Xi = yt.exports;
const en = /* @__PURE__ */ Da(Xi), Ge = {
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
  }
}, tn = (t) => {
  const e = [...new Set(t.split(","))], o = window.BikeMatrix.getConfig(), a = [];
  return Object.entries(o.products).reduce((n, [s, u]) => (!a.includes(s) && u.skus.some((l) => e.includes(l.trim())) && (n.push(u), a.push(s)), n), []);
}, rn = (t) => {
  if (!(t != null && t.length))
    return [];
  const e = t.filter((r) => r.compatible).map((r) => r.sku).join(",");
  return tn(e);
}, on = (t, e) => t > 1 ? {
  type: "pageone",
  ...Ge.pageone
} : (e == null ? void 0 : e.length) > 0 ? {
  type: "compatibleresults",
  ...Ge.compatibleresults
} : {
  type: "noresults",
  ...Ge.noresults
}, an = () => `
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
    <a href="{{productUrl}}" style="text-decoration: none; color: 'black'">
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
function nn({
  "data-title": t
}) {
  var v;
  const e = Qe(null), r = window.BikeMatrix, o = r.getConfig(), [a, i] = Q(!1), [n, s] = Q(!0), [u, l] = Q({
    type: "unknown",
    details: "",
    details_code: ""
  }), [p, c] = Q([]), {
    t: g
  } = ae(), f = !!r.getActiveSubscription(), _ = o.currentCollectionHandle || "", m = o.collectionUrl || "", y = o.compatiblityListCurrentPage || 0, k = !!o.showCompatibleList || !1, b = o.logLevel || "none", x = (w) => {
    var O, V;
    if (!(e != null && e.current))
      return null;
    const A = (V = (O = e == null ? void 0 : e.current) == null ? void 0 : O.parentElement) == null ? void 0 : V.querySelector('template[slot="product-card"]');
    b === "verbose" && console.log("CompatibleList Product Card Template: ", A);
    const L = (A ? A.innerHTML : an()).replace(o.isShopify ? /\@\@#if\s+(\w+)\@\@(.*?)\@\@\/if\@\@/gs : /\{\{#if\s+(\w+)\}\}(.*?)\{\{\/if\}\}/gs, (I, G, C) => w[G] ? C : "").replace(o.isShopify ? /\@\@\s*(\w+)\s*\@\@/g : /\{\{\s*(\w+)\s*\}\}/g, (I, G) => {
      if (G === "compatibility")
        return '<bikematrix-compatibilitylabel data-type="compatible"></bikematrix-compatibilitylabel>';
      const C = w[G];
      return G === "productTitle" ? en.decode(C) : C || "";
    });
    return b === "verbose" && console.log("CompatibleList Product Card: ", L), d("li", {
      dangerouslySetInnerHTML: {
        __html: L
      }
    }, w.productId);
  };
  return Y(() => {
    var L, O;
    const w = o.collections.map((V) => V.handle) || [];
    if (!k || !w.includes(_)) {
      l({
        type: "unknown",
        ...Ge.unknown
      }), i(!1);
      return;
    }
    if (!M.value) {
      l({
        type: "selectbike",
        ...Ge.selectbike
      }), i(!re.value);
      return;
    }
    if (!((O = (L = M.value) == null ? void 0 : L.compatibleCollections) == null ? void 0 : O.find((V) => V.handle === _))) {
      i(!1);
      return;
    }
    console.log("CompatibleCollectionSkusSignal.value", De.value);
    const B = rn(De.value).map(x);
    c(B);
    const z = on(y, B);
    l(z), i(!0);
  }, [
    _,
    M.value,
    De.value,
    re.value,
    // compatibleProducts,
    y
  ]), d(q, {
    children: f && a && d("div", {
      ref: e,
      children: [d("style", {
        type: "text/css",
        children: Qi
      }), d("div", {
        class: "container",
        children: d("div", {
          class: "bm-compatible-products-wrapper",
          children: [d("div", {
            class: "bm-compatible-products-title",
            children: d("div", {
              id: "bm_customAccordion",
              class: n && "active",
              onClick: () => s(!n),
              children: [d("span", {
                children: t || g("compatiblelist_header")
              }), d("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                focusable: "false",
                role: "presentation",
                class: "icon",
                children: d("path", {
                  d: "M20 8.5 12.5 16 5 8.5",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  fill: "none"
                })
              })]
            })
          }), d("div", {
            class: "bm-compatible-products-list",
            id: "bm_compatibleProductsListPanel",
            style: n ? "display: block" : "display: none",
            children: [d("div", {
              class: "lds-ring",
              id: "bm-loading-spinner",
              style: re.value ? "" : "display: none",
              children: [d("div", {}), d("div", {}), d("div", {}), d("div", {})]
            }), !re.value && {
              unknown: d("p", {
                class: "bm-compatible-products-message"
              }),
              unavailable: d("p", {
                class: "bm-compatible-products-message",
                children: g(u == null ? void 0 : u.details_code)
              }),
              selectbike: d("div", {
                onClick: (w) => {
                  w.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
                    bubbles: !0,
                    composed: !0
                  }));
                },
                style: "cursor: pointer;",
                children: d("p", {
                  class: "bm-compatible-products-message",
                  children: g(u == null ? void 0 : u.details_code)
                })
              }),
              pageone: d("p", {
                class: "bm-compatible-products-message",
                children: d("div", {
                  dangerouslySetInnerHTML: {
                    __html: (v = g(u == null ? void 0 : u.details_code)) == null ? void 0 : v.replace("<a>", "<a href='" + m + "'>")
                  }
                })
              }),
              noresults: d("p", {
                class: "bm-compatible-products-message",
                children: g(u == null ? void 0 : u.details_code)
              }),
              compatibleresults: d(q, {})
            }[u == null ? void 0 : u.type], d("ul", {
              id: "bm_compatibleProductsList",
              children: !re.value && (u == null ? void 0 : u.type) === "compatibleresults" && p
            }), d("div", {
              class: "bm_result_link",
              children: d("a", {
                rel: "noreferrer",
                href: "http://www.bikematrix.io/landed-it",
                target: "_blank",
                class: "link",
                children: g("bikematrix_poweredby")
              })
            })]
          })]
        })
      })]
    })
  });
}
const sn = `.bike-selector-banner_wrapper{position:relative;height:40px}.bike-selector-banner{width:100%;height:40px;position:absolute;top:0;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-bottom:2rem}.floating{border-radius:12px;box-shadow:0 4px 4px #0000001f}.bike-selector-banner_title{color:#fff;text-transform:uppercase;padding-top:2px;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px}@media (width <= 991px){.bike-selector-banner_title{display:none}}.bike-selector-banner_title_mobile{display:none;text-transform:uppercase;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px;color:#fff;padding-top:2px}@media (width <= 991px){.bike-selector-banner_title_mobile{display:block}}.bike-selector-banner_svg{height:19px}.bike-selector-banner_icon-wrapper{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.bike-selector-banner_tick{width:12px;height:12px;position:absolute;right:6px;top:5px}
`, un = `.bm-button{cursor:pointer;border:none;font-weight:600}.bm-header-btn{display:inline-block;font-weight:200;background-color:#000;color:#fff;border-radius:5px;text-align:center;font-size:.75em;cursor:pointer}.bm-icon{display:inline-block;padding:6px;font-weight:200;border:none;text-align:center;font-size:.75em;background-color:transparent;height:44px;width:44px;svg {width: 32px; height: 32px;} @media screen and (max-width: 991px) {padding: 10px; svg {width: 24px; height: 24px;}}}.bm-bike-select-icon.show-selected,.bm-bike-select-icon.show-selected-banner{position:relative}.bm-bike-select-icon.show-selected:after{content:"";width:12px;height:12px;top:2px;right:2px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}.bm-bike-select-icon.show-selected-banner:after{content:"";width:12px;height:12px;top:6px;right:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}
`;
function Jo({
  "data-color": t,
  banner: e
}) {
  const r = M.value;
  return d(q, {
    children: [d("style", {
      type: "text/css",
      children: un
    }), d("div", {
      className: "bm-bikon-wrapper",
      children: d("button", {
        id: "bm_selectBikeButton",
        className: `p-2 !ml-auto header__icon bm-header-btn bm-icon bm-bike-select-icon ${r && !e ? "show-selected" : r && e ? "show-selected-banner" : ""}`,
        style: {
          color: t
        },
        onClick: e ? () => {
        } : () => et(),
        children: d("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 48 48",
          className: "w-full h-full",
          children: d("path", {
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
function ln({
  "data-title": t,
  "data-color": e,
  "data-full-width": r,
  "data-font-color": o,
  "data-show": a
}) {
  const i = M.value;
  return typeof a > "u" || a !== "true" && a !== "" ? d(q, {}) : d(q, {
    children: [d("style", {
      type: "text/css",
      children: sn
    }), d("div", {
      onClick: () => {
        et();
      },
      class: "bike-selector-banner_wrapper",
      children: d("div", {
        class: `bike-selector-banner ${r === "false" ? "floating" : ""}`,
        style: {
          backgroundColor: e ?? "#000",
          maxWidth: r ?? null
        },
        children: d(q, {
          children: [d("h2", {
            class: "bike-selector-banner_title",
            style: {
              color: o === "black" ? "#000" : "#fff"
            },
            children: i ? i.brand + " " + i.frameSeries : t
          }), d("h2", {
            class: "bike-selector-banner_title_mobile",
            style: {
              color: o === "black" ? "#000" : "#fff"
            },
            children: i ? i.brand : "Check Compatibility"
          }), d(Jo, {
            "data-color": "#fff",
            banner: !0
          })]
        })
      })
    })]
  });
}
const cn = {
  type: "logger",
  log(t) {
    this.output("log", t);
  },
  warn(t) {
    this.output("warn", t);
  },
  error(t) {
    this.output("error", t);
  },
  output(t, e) {
    console && console[t] && console[t].apply(console, e);
  }
};
class kt {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, r);
  }
  init(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = r.prefix || "i18next:", this.logger = e || cn, this.options = r, this.debug = r.debug;
  }
  log() {
    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = arguments[o];
    return this.forward(r, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = arguments[o];
    return this.forward(r, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = arguments[o];
    return this.forward(r, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = arguments[o];
    return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, r, o, a) {
    return a && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${o}${this.prefix} ${e[0]}`), this.logger[r](e));
  }
  create(e) {
    return new kt(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new kt(this.logger, e);
  }
}
var ue = new kt();
class Et {
  constructor() {
    this.observers = {};
  }
  on(e, r) {
    return e.split(" ").forEach((o) => {
      this.observers[o] || (this.observers[o] = /* @__PURE__ */ new Map());
      const a = this.observers[o].get(r) || 0;
      this.observers[o].set(r, a + 1);
    }), this;
  }
  off(e, r) {
    if (this.observers[e]) {
      if (!r) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(r);
    }
  }
  emit(e) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      o[a - 1] = arguments[a];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((n) => {
      let [s, u] = n;
      for (let l = 0; l < u; l++)
        s(...o);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((n) => {
      let [s, u] = n;
      for (let l = 0; l < u; l++)
        s.apply(s, [e, ...o]);
    });
  }
}
const Ue = () => {
  let t, e;
  const r = new Promise((o, a) => {
    t = o, e = a;
  });
  return r.resolve = t, r.reject = e, r;
}, Vr = (t) => t == null ? "" : "" + t, dn = (t, e, r) => {
  t.forEach((o) => {
    e[o] && (r[o] = e[o]);
  });
}, pn = /###/g, Mr = (t) => t && t.indexOf("###") > -1 ? t.replace(pn, ".") : t, jr = (t) => !t || typeof t == "string", Ke = (t, e, r) => {
  const o = typeof e != "string" ? e : e.split(".");
  let a = 0;
  for (; a < o.length - 1; ) {
    if (jr(t))
      return {};
    const i = Mr(o[a]);
    !t[i] && r && (t[i] = new r()), Object.prototype.hasOwnProperty.call(t, i) ? t = t[i] : t = {}, ++a;
  }
  return jr(t) ? {} : {
    obj: t,
    k: Mr(o[a])
  };
}, $r = (t, e, r) => {
  const {
    obj: o,
    k: a
  } = Ke(t, e, Object);
  if (o !== void 0 || e.length === 1) {
    o[a] = r;
    return;
  }
  let i = e[e.length - 1], n = e.slice(0, e.length - 1), s = Ke(t, n, Object);
  for (; s.obj === void 0 && n.length; )
    i = `${n[n.length - 1]}.${i}`, n = n.slice(0, n.length - 1), s = Ke(t, n, Object), s && s.obj && typeof s.obj[`${s.k}.${i}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${i}`] = r;
}, gn = (t, e, r, o) => {
  const {
    obj: a,
    k: i
  } = Ke(t, e, Object);
  a[i] = a[i] || [], a[i].push(r);
}, vt = (t, e) => {
  const {
    obj: r,
    k: o
  } = Ke(t, e);
  if (r)
    return r[o];
}, fn = (t, e, r) => {
  const o = vt(t, r);
  return o !== void 0 ? o : vt(e, r);
}, Yo = (t, e, r) => {
  for (const o in e)
    o !== "__proto__" && o !== "constructor" && (o in t ? typeof t[o] == "string" || t[o] instanceof String || typeof e[o] == "string" || e[o] instanceof String ? r && (t[o] = e[o]) : Yo(t[o], e[o], r) : t[o] = e[o]);
  return t;
}, Ae = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var hn = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const bn = (t) => typeof t == "string" ? t.replace(/[&<>"'\/]/g, (e) => hn[e]) : t;
class mn {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const r = this.regExpMap.get(e);
    if (r !== void 0)
      return r;
    const o = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, o), this.regExpQueue.push(e), o;
  }
}
const _n = [" ", ",", "?", "!", ";"], yn = new mn(20), kn = (t, e, r) => {
  e = e || "", r = r || "";
  const o = _n.filter((n) => e.indexOf(n) < 0 && r.indexOf(n) < 0);
  if (o.length === 0)
    return !0;
  const a = yn.getRegExp(`(${o.map((n) => n === "?" ? "\\?" : n).join("|")})`);
  let i = !a.test(t);
  if (!i) {
    const n = t.indexOf(r);
    n > 0 && !a.test(t.substring(0, n)) && (i = !0);
  }
  return i;
}, Zt = function(t, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!t)
    return;
  if (t[e])
    return t[e];
  const o = e.split(r);
  let a = t;
  for (let i = 0; i < o.length; ) {
    if (!a || typeof a != "object")
      return;
    let n, s = "";
    for (let u = i; u < o.length; ++u)
      if (u !== i && (s += r), s += o[u], n = a[s], n !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof n) > -1 && u < o.length - 1)
          continue;
        i += u - i + 1;
        break;
      }
    a = n;
  }
  return a;
}, xt = (t) => t && t.replace("_", "-");
class Hr extends Et {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const r = this.options.ns.indexOf(e);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(e, r, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, n = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    e.indexOf(".") > -1 ? s = e.split(".") : (s = [e, r], o && (Array.isArray(o) ? s.push(...o) : typeof o == "string" && i ? s.push(...o.split(i)) : s.push(o)));
    const u = vt(this.data, s);
    return !u && !r && !o && e.indexOf(".") > -1 && (e = s[0], r = s[1], o = s.slice(2).join(".")), u || !n || typeof o != "string" ? u : Zt(this.data && this.data[e] && this.data[e][r], o, i);
  }
  addResource(e, r, o, a) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const n = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [e, r];
    o && (s = s.concat(n ? o.split(n) : o)), e.indexOf(".") > -1 && (s = e.split("."), a = r, r = s[1]), this.addNamespaces(r), $r(this.data, s, a), i.silent || this.emit("added", e, r, o, a);
  }
  addResources(e, r, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in o)
      (typeof o[i] == "string" || Array.isArray(o[i])) && this.addResource(e, r, i, o[i], {
        silent: !0
      });
    a.silent || this.emit("added", e, r, o);
  }
  addResourceBundle(e, r, o, a, i) {
    let n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, s = [e, r];
    e.indexOf(".") > -1 && (s = e.split("."), a = o, o = r, r = s[1]), this.addNamespaces(r);
    let u = vt(this.data, s) || {};
    n.skipCopy || (o = JSON.parse(JSON.stringify(o))), a ? Yo(u, o, i) : u = {
      ...u,
      ...o
    }, $r(this.data, s, u), n.silent || this.emit("added", e, r, o);
  }
  removeResourceBundle(e, r) {
    this.hasResourceBundle(e, r) && delete this.data[e][r], this.removeNamespaces(r), this.emit("removed", e, r);
  }
  hasResourceBundle(e, r) {
    return this.getResource(e, r) !== void 0;
  }
  getResourceBundle(e, r) {
    return r || (r = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(e, r)
    } : this.getResource(e, r);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const r = this.getDataByLanguage(e);
    return !!(r && Object.keys(r) || []).find((a) => r[a] && Object.keys(r[a]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Wo = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, r, o, a) {
    return t.forEach((i) => {
      this.processors[i] && (e = this.processors[i].process(e, r, o, a));
    }), e;
  }
};
const Gr = {};
class Ct extends Et {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), dn(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = ue.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const o = this.resolve(e, r);
    return o && o.res !== void 0;
  }
  extractFromKey(e, r) {
    let o = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    o === void 0 && (o = ":");
    const a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let i = r.ns || this.options.defaultNS || [];
    const n = o && e.indexOf(o) > -1, s = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !kn(e, o, a);
    if (n && !s) {
      const u = e.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: e,
          namespaces: i
        };
      const l = e.split(o);
      (o !== a || o === a && this.options.ns.indexOf(l[0]) > -1) && (i = l.shift()), e = l.join(a);
    }
    return typeof i == "string" && (i = [i]), {
      key: e,
      namespaces: i
    };
  }
  translate(e, r, o) {
    if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof r == "object" && (r = {
      ...r
    }), r || (r = {}), e == null)
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const a = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails, i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, {
      key: n,
      namespaces: s
    } = this.extractFromKey(e[e.length - 1], r), u = s[s.length - 1], l = r.lng || this.language, p = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l && l.toLowerCase() === "cimode") {
      if (p) {
        const v = r.nsSeparator || this.options.nsSeparator;
        return a ? {
          res: `${u}${v}${n}`,
          usedKey: n,
          exactUsedKey: n,
          usedLng: l,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(r)
        } : `${u}${v}${n}`;
      }
      return a ? {
        res: n,
        usedKey: n,
        exactUsedKey: n,
        usedLng: l,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(r)
      } : n;
    }
    const c = this.resolve(e, r);
    let g = c && c.res;
    const f = c && c.usedKey || n, _ = c && c.exactUsedKey || n, m = Object.prototype.toString.apply(g), y = ["[object Number]", "[object Function]", "[object RegExp]"], k = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (b && g && (typeof g != "string" && typeof g != "boolean" && typeof g != "number") && y.indexOf(m) < 0 && !(typeof k == "string" && Array.isArray(g))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const v = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, g, {
          ...r,
          ns: s
        }) : `key '${n} (${this.language})' returned an object instead of string.`;
        return a ? (c.res = v, c.usedParams = this.getUsedParamsDetails(r), c) : v;
      }
      if (i) {
        const v = Array.isArray(g), w = v ? [] : {}, A = v ? _ : f;
        for (const B in g)
          if (Object.prototype.hasOwnProperty.call(g, B)) {
            const z = `${A}${i}${B}`;
            w[B] = this.translate(z, {
              ...r,
              joinArrays: !1,
              ns: s
            }), w[B] === z && (w[B] = g[B]);
          }
        g = w;
      }
    } else if (b && typeof k == "string" && Array.isArray(g))
      g = g.join(k), g && (g = this.extendTranslation(g, e, r, o));
    else {
      let v = !1, w = !1;
      const A = r.count !== void 0 && typeof r.count != "string", B = Ct.hasDefaultValue(r), z = A ? this.pluralResolver.getSuffix(l, r.count, r) : "", L = r.ordinal && A ? this.pluralResolver.getSuffix(l, r.count, {
        ordinal: !1
      }) : "", O = A && !r.ordinal && r.count === 0 && this.pluralResolver.shouldUseIntlApi(), V = O && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${z}`] || r[`defaultValue${L}`] || r.defaultValue;
      !this.isValidLookup(g) && B && (v = !0, g = V), this.isValidLookup(g) || (w = !0, g = n);
      const G = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && w ? void 0 : g, C = B && V !== g && this.options.updateMissing;
      if (w || v || C) {
        if (this.logger.log(C ? "updateKey" : "missingKey", l, u, n, C ? V : g), i) {
          const T = this.resolve(n, {
            ...r,
            keySeparator: !1
          });
          T && T.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let D = [];
        const R = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && R && R[0])
          for (let T = 0; T < R.length; T++)
            D.push(R[T]);
        else
          this.options.saveMissingTo === "all" ? D = this.languageUtils.toResolveHierarchy(r.lng || this.language) : D.push(r.lng || this.language);
        const J = (T, h, E) => {
          const P = B && E !== g ? E : G;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(T, u, h, P, C, r) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(T, u, h, P, C, r), this.emit("missingKey", T, u, h, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && A ? D.forEach((T) => {
          const h = this.pluralResolver.getSuffixes(T, r);
          O && r[`defaultValue${this.options.pluralSeparator}zero`] && h.indexOf(`${this.options.pluralSeparator}zero`) < 0 && h.push(`${this.options.pluralSeparator}zero`), h.forEach((E) => {
            J([T], n + E, r[`defaultValue${E}`] || V);
          });
        }) : J(D, n, V));
      }
      g = this.extendTranslation(g, e, r, c, o), w && g === n && this.options.appendNamespaceToMissingKey && (g = `${u}:${n}`), (w || v) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${n}` : n, v ? g : void 0) : g = this.options.parseMissingKeyHandler(g));
    }
    return a ? (c.res = g, c.usedParams = this.getUsedParamsDetails(r), c) : g;
  }
  extendTranslation(e, r, o, a, i) {
    var n = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...o
      }, o.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
        resolved: a
      });
    else if (!o.skipInterpolation) {
      o.interpolation && this.interpolator.init({
        ...o,
        interpolation: {
          ...this.options.interpolation,
          ...o.interpolation
        }
      });
      const l = typeof e == "string" && (o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let p;
      if (l) {
        const g = e.match(this.interpolator.nestingRegexp);
        p = g && g.length;
      }
      let c = o.replace && typeof o.replace != "string" ? o.replace : o;
      if (this.options.interpolation.defaultVariables && (c = {
        ...this.options.interpolation.defaultVariables,
        ...c
      }), e = this.interpolator.interpolate(e, c, o.lng || this.language || a.usedLng, o), l) {
        const g = e.match(this.interpolator.nestingRegexp), f = g && g.length;
        p < f && (o.nest = !1);
      }
      !o.lng && this.options.compatibilityAPI !== "v1" && a && a.res && (o.lng = this.language || a.usedLng), o.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var g = arguments.length, f = new Array(g), _ = 0; _ < g; _++)
          f[_] = arguments[_];
        return i && i[0] === f[0] && !o.context ? (n.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${r[0]}`), null) : n.translate(...f, r);
      }, o)), o.interpolation && this.interpolator.reset();
    }
    const s = o.postProcess || this.options.postProcess, u = typeof s == "string" ? [s] : s;
    return e != null && u && u.length && o.applyPostProcessor !== !1 && (e = Wo.handle(u, e, r, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(o)
      },
      ...o
    } : o, this)), e;
  }
  resolve(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o, a, i, n, s;
    return typeof e == "string" && (e = [e]), e.forEach((u) => {
      if (this.isValidLookup(o))
        return;
      const l = this.extractFromKey(u, r), p = l.key;
      a = p;
      let c = l.namespaces;
      this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
      const g = r.count !== void 0 && typeof r.count != "string", f = g && !r.ordinal && r.count === 0 && this.pluralResolver.shouldUseIntlApi(), _ = r.context !== void 0 && (typeof r.context == "string" || typeof r.context == "number") && r.context !== "", m = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
      c.forEach((y) => {
        this.isValidLookup(o) || (s = y, !Gr[`${m[0]}-${y}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (Gr[`${m[0]}-${y}`] = !0, this.logger.warn(`key "${a}" for languages "${m.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((k) => {
          if (this.isValidLookup(o))
            return;
          n = k;
          const b = [p];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(b, p, k, y, r);
          else {
            let v;
            g && (v = this.pluralResolver.getSuffix(k, r.count, r));
            const w = `${this.options.pluralSeparator}zero`, A = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (b.push(p + v), r.ordinal && v.indexOf(A) === 0 && b.push(p + v.replace(A, this.options.pluralSeparator)), f && b.push(p + w)), _) {
              const B = `${p}${this.options.contextSeparator}${r.context}`;
              b.push(B), g && (b.push(B + v), r.ordinal && v.indexOf(A) === 0 && b.push(B + v.replace(A, this.options.pluralSeparator)), f && b.push(B + w));
            }
          }
          let x;
          for (; x = b.pop(); )
            this.isValidLookup(o) || (i = x, o = this.getResource(k, y, x, r));
        }));
      });
    }), {
      res: o,
      usedKey: a,
      exactUsedKey: i,
      usedLng: n,
      usedNS: s
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, r, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, r, o, a) : this.resourceStore.getResource(e, r, o, a);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], o = e.replace && typeof e.replace != "string";
    let a = o ? e.replace : e;
    if (o && typeof e.count < "u" && (a.count = e.count), this.options.interpolation.defaultVariables && (a = {
      ...this.options.interpolation.defaultVariables,
      ...a
    }), !o) {
      a = {
        ...a
      };
      for (const i of r)
        delete a[i];
    }
    return a;
  }
  static hasDefaultValue(e) {
    const r = "defaultValue";
    for (const o in e)
      if (Object.prototype.hasOwnProperty.call(e, o) && r === o.substring(0, r.length) && e[o] !== void 0)
        return !0;
    return !1;
  }
}
const Tt = (t) => t.charAt(0).toUpperCase() + t.slice(1);
class Kr {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ue.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = xt(e), !e || e.indexOf("-") < 0)
      return null;
    const r = e.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = xt(e), !e || e.indexOf("-") < 0)
      return e;
    const r = e.split("-");
    return this.formatLanguageCode(r[0]);
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
      const r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let o = e.split("-");
      return this.options.lowerCaseLng ? o = o.map((a) => a.toLowerCase()) : o.length === 2 ? (o[0] = o[0].toLowerCase(), o[1] = o[1].toUpperCase(), r.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Tt(o[1].toLowerCase()))) : o.length === 3 && (o[0] = o[0].toLowerCase(), o[1].length === 2 && (o[1] = o[1].toUpperCase()), o[0] !== "sgn" && o[2].length === 2 && (o[2] = o[2].toUpperCase()), r.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Tt(o[1].toLowerCase())), r.indexOf(o[2].toLowerCase()) > -1 && (o[2] = Tt(o[2].toLowerCase()))), o.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e)
      return null;
    let r;
    return e.forEach((o) => {
      if (r)
        return;
      const a = this.formatLanguageCode(o);
      (!this.options.supportedLngs || this.isSupportedCode(a)) && (r = a);
    }), !r && this.options.supportedLngs && e.forEach((o) => {
      if (r)
        return;
      const a = this.getLanguagePartFromCode(o);
      if (this.isSupportedCode(a))
        return r = a;
      r = this.options.supportedLngs.find((i) => {
        if (i === a)
          return i;
        if (!(i.indexOf("-") < 0 && a.indexOf("-") < 0) && (i.indexOf("-") > 0 && a.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === a || i.indexOf(a) === 0 && a.length > 1))
          return i;
      });
    }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r;
  }
  getFallbackCodes(e, r) {
    if (!e)
      return [];
    if (typeof e == "function" && (e = e(r)), typeof e == "string" && (e = [e]), Array.isArray(e))
      return e;
    if (!r)
      return e.default || [];
    let o = e[r];
    return o || (o = e[this.getScriptPartFromCode(r)]), o || (o = e[this.formatLanguageCode(r)]), o || (o = e[this.getLanguagePartFromCode(r)]), o || (o = e.default), o || [];
  }
  toResolveHierarchy(e, r) {
    const o = this.getFallbackCodes(r || this.options.fallbackLng || [], e), a = [], i = (n) => {
      n && (this.isSupportedCode(n) ? a.push(n) : this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : typeof e == "string" && i(this.formatLanguageCode(e)), o.forEach((n) => {
      a.indexOf(n) < 0 && i(this.formatLanguageCode(n));
    }), a;
  }
}
let vn = [{
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
}], xn = {
  1: (t) => +(t > 1),
  2: (t) => +(t != 1),
  3: (t) => 0,
  4: (t) => t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
  5: (t) => t == 0 ? 0 : t == 1 ? 1 : t == 2 ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5,
  6: (t) => t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2,
  7: (t) => t == 1 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
  8: (t) => t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3,
  9: (t) => +(t >= 2),
  10: (t) => t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4,
  11: (t) => t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3,
  12: (t) => +(t % 10 != 1 || t % 100 == 11),
  13: (t) => +(t !== 0),
  14: (t) => t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3,
  15: (t) => t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
  16: (t) => t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2,
  17: (t) => t == 1 || t % 10 == 1 && t % 100 != 11 ? 0 : 1,
  18: (t) => t == 0 ? 0 : t == 1 ? 1 : 2,
  19: (t) => t == 1 ? 0 : t == 0 || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3,
  20: (t) => t == 1 ? 0 : t == 0 || t % 100 > 0 && t % 100 < 20 ? 1 : 2,
  21: (t) => t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0,
  22: (t) => t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3
};
const Cn = ["v1", "v2", "v3"], wn = ["v4"], Jr = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Dn = () => {
  const t = {};
  return vn.forEach((e) => {
    e.lngs.forEach((r) => {
      t[r] = {
        numbers: e.nr,
        plurals: xn[e.fc]
      };
    });
  }), t;
};
class An {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = r, this.logger = ue.create("pluralResolver"), (!this.options.compatibilityJSON || wn.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Dn(), this.pluralRulesCache = {};
  }
  addRule(e, r) {
    this.rules[e] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const o = xt(e === "dev" ? "en" : e), a = r.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
          cleanedCode: o,
          type: a
        });
        if (i in this.pluralRulesCache)
          return this.pluralRulesCache[i];
        const n = new Intl.PluralRules(o, {
          type: a
        });
        return this.pluralRulesCache[i] = n, n;
      } catch {
        return;
      }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const o = this.getRule(e, r);
    return this.shouldUseIntlApi() ? o && o.resolvedOptions().pluralCategories.length > 1 : o && o.numbers.length > 1;
  }
  getPluralFormsOfKey(e, r) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, o).map((a) => `${r}${a}`);
  }
  getSuffixes(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const o = this.getRule(e, r);
    return o ? this.shouldUseIntlApi() ? o.resolvedOptions().pluralCategories.sort((a, i) => Jr[a] - Jr[i]).map((a) => `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : o.numbers.map((a) => this.getSuffix(e, a, r)) : [];
  }
  getSuffix(e, r) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(e, o);
    return a ? this.shouldUseIntlApi() ? `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${a.select(r)}` : this.getSuffixRetroCompatible(a, r) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, r) {
    const o = e.noAbs ? e.plurals(r) : e.plurals(Math.abs(r));
    let a = e.numbers[o];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
    const i = () => this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? `_plural_${a.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? i() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
  }
  shouldUseIntlApi() {
    return !Cn.includes(this.options.compatibilityJSON);
  }
}
const Yr = function(t, e, r) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = fn(t, e, r);
  return !i && a && typeof r == "string" && (i = Zt(t, r, o), i === void 0 && (i = Zt(e, r, o))), i;
}, Ot = (t) => t.replace(/\$/g, "$$$$");
class Bn {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ue.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((r) => r), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: r,
      escapeValue: o,
      useRawValueToEscape: a,
      prefix: i,
      prefixEscaped: n,
      suffix: s,
      suffixEscaped: u,
      formatSeparator: l,
      unescapeSuffix: p,
      unescapePrefix: c,
      nestingPrefix: g,
      nestingPrefixEscaped: f,
      nestingSuffix: _,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: y,
      maxReplaces: k,
      alwaysFormat: b
    } = e.interpolation;
    this.escape = r !== void 0 ? r : bn, this.escapeValue = o !== void 0 ? o : !0, this.useRawValueToEscape = a !== void 0 ? a : !1, this.prefix = i ? Ae(i) : n || "{{", this.suffix = s ? Ae(s) : u || "}}", this.formatSeparator = l || ",", this.unescapePrefix = p ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : p || "", this.nestingPrefix = g ? Ae(g) : f || Ae("$t("), this.nestingSuffix = _ ? Ae(_) : m || Ae(")"), this.nestingOptionsSeparator = y || ",", this.maxReplaces = k || 1e3, this.alwaysFormat = b !== void 0 ? b : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (r, o) => r && r.source === o ? (r.lastIndex = 0, r) : new RegExp(o, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, r, o, a) {
    let i, n, s;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, l = (f) => {
      if (f.indexOf(this.formatSeparator) < 0) {
        const k = Yr(r, u, f, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(k, void 0, o, {
          ...a,
          ...r,
          interpolationkey: f
        }) : k;
      }
      const _ = f.split(this.formatSeparator), m = _.shift().trim(), y = _.join(this.formatSeparator).trim();
      return this.format(Yr(r, u, m, this.options.keySeparator, this.options.ignoreJSONStructure), y, o, {
        ...a,
        ...r,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const p = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, c = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (f) => Ot(f)
    }, {
      regex: this.regexp,
      safeValue: (f) => this.escapeValue ? Ot(this.escape(f)) : Ot(f)
    }].forEach((f) => {
      for (s = 0; i = f.regex.exec(e); ) {
        const _ = i[1].trim();
        if (n = l(_), n === void 0)
          if (typeof p == "function") {
            const y = p(e, i, a);
            n = typeof y == "string" ? y : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, _))
            n = "";
          else if (c) {
            n = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${_} for interpolating ${e}`), n = "";
        else
          typeof n != "string" && !this.useRawValueToEscape && (n = Vr(n));
        const m = f.safeValue(n);
        if (e = e.replace(i[0], m), c ? (f.regex.lastIndex += n.length, f.regex.lastIndex -= i[0].length) : f.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, r) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, i, n;
    const s = (u, l) => {
      const p = this.nestingOptionsSeparator;
      if (u.indexOf(p) < 0)
        return u;
      const c = u.split(new RegExp(`${p}[ ]*{`));
      let g = `{${c[1]}`;
      u = c[0], g = this.interpolate(g, n);
      const f = g.match(/'/g), _ = g.match(/"/g);
      (f && f.length % 2 === 0 && !_ || _.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
      try {
        n = JSON.parse(g), l && (n = {
          ...l,
          ...n
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, m), `${u}${p}${g}`;
      }
      return n.defaultValue && n.defaultValue.indexOf(this.prefix) > -1 && delete n.defaultValue, u;
    };
    for (; a = this.nestingRegexp.exec(e); ) {
      let u = [];
      n = {
        ...o
      }, n = n.replace && typeof n.replace != "string" ? n.replace : n, n.applyPostProcessor = !1, delete n.defaultValue;
      let l = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const p = a[1].split(this.formatSeparator).map((c) => c.trim());
        a[1] = p.shift(), u = p, l = !0;
      }
      if (i = r(s.call(this, a[1].trim(), n), n), i && a[0] === e && typeof i != "string")
        return i;
      typeof i != "string" && (i = Vr(i)), i || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`), i = ""), l && (i = u.reduce((p, c) => this.format(p, c, o.lng, {
        ...o,
        interpolationkey: a[1].trim()
      }), i.trim())), e = e.replace(a[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Sn = (t) => {
  let e = t.toLowerCase().trim();
  const r = {};
  if (t.indexOf("(") > -1) {
    const o = t.split("(");
    e = o[0].toLowerCase().trim();
    const a = o[1].substring(0, o[1].length - 1);
    e === "currency" && a.indexOf(":") < 0 ? r.currency || (r.currency = a.trim()) : e === "relativetime" && a.indexOf(":") < 0 ? r.range || (r.range = a.trim()) : a.split(";").forEach((n) => {
      if (n) {
        const [s, ...u] = n.split(":"), l = u.join(":").trim().replace(/^'+|'+$/g, ""), p = s.trim();
        r[p] || (r[p] = l), l === "false" && (r[p] = !1), l === "true" && (r[p] = !0), isNaN(l) || (r[p] = parseInt(l, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: r
  };
}, Be = (t) => {
  const e = {};
  return (r, o, a) => {
    let i = a;
    a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (i = {
      ...i,
      [a.interpolationkey]: void 0
    });
    const n = o + JSON.stringify(i);
    let s = e[n];
    return s || (s = t(xt(o), a), e[n] = s), s(r);
  };
};
class En {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ue.create("formatter"), this.options = e, this.formats = {
      number: Be((r, o) => {
        const a = new Intl.NumberFormat(r, {
          ...o
        });
        return (i) => a.format(i);
      }),
      currency: Be((r, o) => {
        const a = new Intl.NumberFormat(r, {
          ...o,
          style: "currency"
        });
        return (i) => a.format(i);
      }),
      datetime: Be((r, o) => {
        const a = new Intl.DateTimeFormat(r, {
          ...o
        });
        return (i) => a.format(i);
      }),
      relativetime: Be((r, o) => {
        const a = new Intl.RelativeTimeFormat(r, {
          ...o
        });
        return (i) => a.format(i, o.range || "day");
      }),
      list: Be((r, o) => {
        const a = new Intl.ListFormat(r, {
          ...o
        });
        return (i) => a.format(i);
      })
    }, this.init(e);
  }
  init(e) {
    const o = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = o.formatSeparator ? o.formatSeparator : o.formatSeparator || ",";
  }
  add(e, r) {
    this.formats[e.toLowerCase().trim()] = r;
  }
  addCached(e, r) {
    this.formats[e.toLowerCase().trim()] = Be(r);
  }
  format(e, r, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = r.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((s) => s.indexOf(")") > -1)) {
      const s = i.findIndex((u) => u.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, s)].join(this.formatSeparator);
    }
    return i.reduce((s, u) => {
      const {
        formatName: l,
        formatOptions: p
      } = Sn(u);
      if (this.formats[l]) {
        let c = s;
        try {
          const g = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, f = g.locale || g.lng || a.locale || a.lng || o;
          c = this.formats[l](s, f, {
            ...p,
            ...a,
            ...g
          });
        } catch (g) {
          this.logger.warn(g);
        }
        return c;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return s;
    }, e);
  }
}
const Fn = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class Ln extends Et {
  constructor(e, r, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = r, this.services = o, this.languageUtils = o.languageUtils, this.options = a, this.logger = ue.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(o, a.backend, a);
  }
  queueLoad(e, r, o, a) {
    const i = {}, n = {}, s = {}, u = {};
    return e.forEach((l) => {
      let p = !0;
      r.forEach((c) => {
        const g = `${l}|${c}`;
        !o.reload && this.store.hasResourceBundle(l, c) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? n[g] === void 0 && (n[g] = !0) : (this.state[g] = 1, p = !1, n[g] === void 0 && (n[g] = !0), i[g] === void 0 && (i[g] = !0), u[c] === void 0 && (u[c] = !0)));
      }), p || (s[l] = !0);
    }), (Object.keys(i).length || Object.keys(n).length) && this.queue.push({
      pending: n,
      pendingCount: Object.keys(n).length,
      loaded: {},
      errors: [],
      callback: a
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(n),
      toLoadLanguages: Object.keys(s),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(e, r, o) {
    const a = e.split("|"), i = a[0], n = a[1];
    r && this.emit("failedLoading", i, n, r), !r && o && this.store.addResourceBundle(i, n, o, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = r ? -1 : 2, r && o && (this.state[e] = 0);
    const s = {};
    this.queue.forEach((u) => {
      gn(u.loaded, [i], n), Fn(u, e), r && u.errors.push(r), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((l) => {
        s[l] || (s[l] = {});
        const p = u.loaded[l];
        p.length && p.forEach((c) => {
          s[l][c] === void 0 && (s[l][c] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((u) => !u.done);
  }
  read(e, r, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, n = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return n(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: r,
        fcName: o,
        tried: a,
        wait: i,
        callback: n
      });
      return;
    }
    this.readingCalls++;
    const s = (l, p) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const c = this.waitingReads.shift();
        this.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback);
      }
      if (l && p && a < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, r, o, a + 1, i * 2, n);
        }, i);
        return;
      }
      n(l, p);
    }, u = this.backend[o].bind(this.backend);
    if (u.length === 2) {
      try {
        const l = u(e, r);
        l && typeof l.then == "function" ? l.then((p) => s(null, p)).catch(s) : s(null, l);
      } catch (l) {
        s(l);
      }
      return;
    }
    return u(e, r, s);
  }
  prepareLoading(e, r) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof r == "string" && (r = [r]);
    const i = this.queueLoad(e, r, o, a);
    if (!i.toLoad.length)
      return i.pending.length || a(), null;
    i.toLoad.forEach((n) => {
      this.loadOne(n);
    });
  }
  load(e, r, o) {
    this.prepareLoading(e, r, {}, o);
  }
  reload(e, r, o) {
    this.prepareLoading(e, r, {
      reload: !0
    }, o);
  }
  loadOne(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const o = e.split("|"), a = o[0], i = o[1];
    this.read(a, i, "read", void 0, void 0, (n, s) => {
      n && this.logger.warn(`${r}loading namespace ${i} for language ${a} failed`, n), !n && s && this.logger.log(`${r}loaded namespace ${i} for language ${a}`, s), this.loaded(e, n, s);
    });
  }
  saveMissing(e, r, o, a, i) {
    let n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(r)) {
      this.logger.warn(`did not save key "${o}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(o == null || o === "")) {
      if (this.backend && this.backend.create) {
        const u = {
          ...n,
          isUpdate: i
        }, l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let p;
            l.length === 5 ? p = l(e, r, o, a, u) : p = l(e, r, o, a), p && typeof p.then == "function" ? p.then((c) => s(null, c)).catch(s) : s(null, p);
          } catch (p) {
            s(p);
          }
        else
          l(e, r, o, a, s, u);
      }
      !e || !e[0] || this.store.addResource(e[0], r, o, a);
    }
  }
}
const Wr = () => ({
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
  overloadTranslationOptionHandler: (t) => {
    let e = {};
    if (typeof t[1] == "object" && (e = t[1]), typeof t[1] == "string" && (e.defaultValue = t[1]), typeof t[2] == "string" && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
      const r = t[3] || t[2];
      Object.keys(r).forEach((o) => {
        e[o] = r[o];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (t) => t,
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
}), Zr = (t) => (typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t), dt = () => {
}, qn = (t) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((r) => {
    typeof t[r] == "function" && (t[r] = t[r].bind(t));
  });
};
class We extends Et {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Zr(e), this.services = {}, this.logger = ue, this.modules = {
      external: []
    }, qn(this), r && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, r), this;
      setTimeout(() => {
        this.init(e, r);
      }, 0);
    }
  }
  init() {
    var e = this;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof r == "function" && (o = r, r = {}), !r.defaultNS && r.defaultNS !== !1 && r.ns && (typeof r.ns == "string" ? r.defaultNS = r.ns : r.ns.indexOf("translation") < 0 && (r.defaultNS = r.ns[0]));
    const a = Wr();
    this.options = {
      ...a,
      ...this.options,
      ...Zr(r)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }), r.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = r.keySeparator), r.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = r.nsSeparator);
    const i = (p) => p ? typeof p == "function" ? new p() : p : null;
    if (!this.options.isClone) {
      this.modules.logger ? ue.init(i(this.modules.logger), this.options) : ue.init(null, this.options);
      let p;
      this.modules.formatter ? p = this.modules.formatter : typeof Intl < "u" && (p = En);
      const c = new Kr(this.options);
      this.store = new Hr(this.options.resources, this.options);
      const g = this.services;
      g.logger = ue, g.resourceStore = this.store, g.languageUtils = c, g.pluralResolver = new An(c, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), p && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (g.formatter = i(p), g.formatter.init(g, this.options), this.options.interpolation.format = g.formatter.format.bind(g.formatter)), g.interpolator = new Bn(this.options), g.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, g.backendConnector = new Ln(i(this.modules.backend), g.resourceStore, g, this.options), g.backendConnector.on("*", function(f) {
        for (var _ = arguments.length, m = new Array(_ > 1 ? _ - 1 : 0), y = 1; y < _; y++)
          m[y - 1] = arguments[y];
        e.emit(f, ...m);
      }), this.modules.languageDetector && (g.languageDetector = i(this.modules.languageDetector), g.languageDetector.init && g.languageDetector.init(g, this.options.detection, this.options)), this.modules.i18nFormat && (g.i18nFormat = i(this.modules.i18nFormat), g.i18nFormat.init && g.i18nFormat.init(this)), this.translator = new Ct(this.services, this.options), this.translator.on("*", function(f) {
        for (var _ = arguments.length, m = new Array(_ > 1 ? _ - 1 : 0), y = 1; y < _; y++)
          m[y - 1] = arguments[y];
        e.emit(f, ...m);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, o || (o = dt), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const p = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      p.length > 0 && p[0] !== "dev" && (this.options.lng = p[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((p) => {
      this[p] = function() {
        return e.store[p](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((p) => {
      this[p] = function() {
        return e.store[p](...arguments), e;
      };
    });
    const u = Ue(), l = () => {
      const p = (c, g) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(g), o(c, g);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return p(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, p);
    };
    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), u;
  }
  loadResources(e) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dt;
    const a = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (o = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (a && a.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return o();
      const i = [], n = (s) => {
        if (!s || s === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(s).forEach((l) => {
          l !== "cimode" && i.indexOf(l) < 0 && i.push(l);
        });
      };
      a ? n(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => n(u)), this.options.preload && this.options.preload.forEach((s) => n(s)), this.services.backendConnector.load(i, this.options.ns, (s) => {
        !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), o(s);
      });
    } else
      o(null);
  }
  reloadResources(e, r, o) {
    const a = Ue();
    return typeof e == "function" && (o = e, e = void 0), typeof r == "function" && (o = r, r = void 0), e || (e = this.languages), r || (r = this.options.ns), o || (o = dt), this.services.backendConnector.reload(e, r, (i) => {
      a.resolve(), o(i);
    }), a;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Wo.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let r = 0; r < this.languages.length; r++) {
        const o = this.languages[r];
        if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
          this.resolvedLanguage = o;
          break;
        }
      }
  }
  changeLanguage(e, r) {
    var o = this;
    this.isLanguageChangingTo = e;
    const a = Ue();
    this.emit("languageChanging", e);
    const i = (u) => {
      this.language = u, this.languages = this.services.languageUtils.toResolveHierarchy(u), this.resolvedLanguage = void 0, this.setResolvedLanguage(u);
    }, n = (u, l) => {
      l ? (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
        return o.t(...arguments);
      }), r && r(u, function() {
        return o.t(...arguments);
      });
    }, s = (u) => {
      !e && !u && this.services.languageDetector && (u = []);
      const l = typeof u == "string" ? u : this.services.languageUtils.getBestMatchFromCodes(u);
      l && (this.language || i(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(l)), this.loadResources(l, (p) => {
        n(p, l);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(e), a;
  }
  getFixedT(e, r, o) {
    var a = this;
    const i = function(n, s) {
      let u;
      if (typeof s != "object") {
        for (var l = arguments.length, p = new Array(l > 2 ? l - 2 : 0), c = 2; c < l; c++)
          p[c - 2] = arguments[c];
        u = a.options.overloadTranslationOptionHandler([n, s].concat(p));
      } else
        u = {
          ...s
        };
      u.lng = u.lng || i.lng, u.lngs = u.lngs || i.lngs, u.ns = u.ns || i.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || o || i.keyPrefix);
      const g = a.options.keySeparator || ".";
      let f;
      return u.keyPrefix && Array.isArray(n) ? f = n.map((_) => `${u.keyPrefix}${g}${_}`) : f = u.keyPrefix ? `${u.keyPrefix}${g}${n}` : n, a.t(f, u);
    };
    return typeof e == "string" ? i.lng = e : i.lngs = e, i.ns = r, i.keyPrefix = o, i;
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
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const o = r.lng || this.resolvedLanguage || this.languages[0], a = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (o.toLowerCase() === "cimode")
      return !0;
    const n = (s, u) => {
      const l = this.services.backendConnector.state[`${s}|${u}`];
      return l === -1 || l === 0 || l === 2;
    };
    if (r.precheck) {
      const s = r.precheck(this, n);
      if (s !== void 0)
        return s;
    }
    return !!(this.hasResourceBundle(o, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || n(o, e) && (!a || n(i, e)));
  }
  loadNamespaces(e, r) {
    const o = Ue();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((a) => {
      this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
    }), this.loadResources((a) => {
      o.resolve(), r && r(a);
    }), o) : (r && r(), Promise.resolve());
  }
  loadLanguages(e, r) {
    const o = Ue();
    typeof e == "string" && (e = [e]);
    const a = this.options.preload || [], i = e.filter((n) => a.indexOf(n) < 0 && this.services.languageUtils.isSupportedCode(n));
    return i.length ? (this.options.preload = a.concat(i), this.loadResources((n) => {
      o.resolve(), r && r(n);
    }), o) : (r && r(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], o = this.services && this.services.languageUtils || new Kr(Wr());
    return r.indexOf(o.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    return new We(e, r);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dt;
    const o = e.forkResourceStore;
    o && delete e.forkResourceStore;
    const a = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new We(a);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((s) => {
      i[s] = this[s];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, o && (i.store = new Hr(this.store.data, a), i.services.resourceStore = i.store), i.translator = new Ct(i.services, a), i.translator.on("*", function(s) {
      for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
        l[p - 1] = arguments[p];
      i.emit(s, ...l);
    }), i.init(a, r), i.translator.options = a, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
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
const ee = We.createInstance();
ee.createInstance = We.createInstance;
ee.createInstance;
ee.dir;
ee.init;
ee.loadResources;
ee.reloadResources;
ee.use;
ee.changeLanguage;
ee.getFixedT;
ee.t;
ee.exists;
ee.setDefaultNamespace;
ee.hasLoadedNamespace;
ee.loadNamespaces;
ee.loadLanguages;
const zn = {
  translation: {
    bikematrix_poweredby: "Unterstützt von Bike Matrix",
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
    bikeselector_home_add_a_bike: "Fügen Sie unten ein Fahrrad hinzu, um loszulegen ...",
    bikeselector_home_add_btn: "Fahrrad hinzufügen",
    bikeselector_home_browse_btn: "Kompatibilität prüfen",
    bikeselector_home_close_btn: "Schließen",
    bikeselector_home_empty: "Deine Lounge ist leer!",
    bikeselector_home_footer_message: "Fahrradhersteller können die Spezifikationen ihrer Fahrräder ohne vorherige Ankündigung ändern. Abweichungen gegenüber der Serienausstattung können Auswirkungen auf die Kompatibilität haben.",
    bikeselector_home_title: "Meine Bike-Lounge",
    bikeselector_search_bikespec_label: "Ausstattungsvariante",
    bikeselector_search_bikespec_select: "Ausstattungsvariante wählen",
    bikeselector_search_bikespec_select_all: "Alle",
    bikeselector_search_confirm_btn: "Auswahl bestätigen",
    bikeselector_search_no_bikes_found: "Keine Fahrräder gefunden",
    bikeselector_search_number_bikes_found: "{{number_found}} Fahrräder gefunden",
    bikeselector_search_one_bike_found: "1 Fahrrad gefunden",
    bikeselector_search_searching: "Suche...",
    bikeselector_search_title: "Fahrradsuche",
    bikeselector_search_year_label: "Jahr",
    bikeselector_size_confirm_btn: "Größe bestätigen",
    bikeselector_size_framesize_desc: "Die Rahmengröße deines Fahrrads ist normalerweise in den unten hervorgehobenen Bereichen zu finden.",
    bikeselector_size_framesize_label: "Rahmengröße",
    bikeselector_size_framesize_one_size: "Einheitsgröße",
    bikeselector_size_framesize_select: "Deine Rahmengröße wählen",
    bikeselector_size_title: "Deine Größe wählen",
    compatible: "Kompatibel",
    compatible_check_notes: "Kompatibel – Hinweise prüfen",
    compatiblelist_header: "Kompatible Produkte",
    compatiblelist_nobikeselected: "Kein Fahrrad ausgewählt. Hier klicken, um dein Fahrrad zur Suche nach kompatiblen Teilen hinzuzufügen",
    compatiblelist_noresults: "Keine kompatiblen Produkte gefunden",
    compatiblelist_pageone: "Alle mit Ihrem Fahrrad kompatiblen Produkte finden Sie <a>hier</a>",
    compatiblelist_unavailable: "Die Kompatibilität für diese Produktkategorie und die von Ihnen ausgewählte Fahrradmarke ist in Kürze verfügbar!",
    not_compatible: "Nicht kompatibel",
    productcheck_nobikeselected_label: "Kompatibilität prüfen",
    productcheck_nobikeselected_message: "Dein Fahrrad hinzufügen, um die Kompatibilität dieses Teils zu prüfen",
    productcheck_questionmark: "?",
    category_bike: "Fahrrad",
    category_bottombracket: "Tretlager",
    category_bottombracketpart: "Tretlager-Ersatzteile",
    category_brakeadapter: "Bremsadapter",
    category_brakeadapterpart: "Bremsadapter-Ersatzteile",
    category_brakecaliper: "Bremssattel",
    category_brakecaliperpart: "Bremssattel-Ersatzteile",
    category_brakecaliperservicekit: "Bremssattel-Servicekit",
    category_brakelever: "Bremshebel",
    category_brakeleverpart: "Bremshebel-Ersatzteile",
    category_brakeleverservicekit: "Bremshebel-Servicekit",
    category_brakepads: "Bremsbeläge",
    category_brakerotor: "Bremsscheibe",
    category_brakerotorpart: "Bremsscheiben-Ersatzteile",
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
    category_crankpart: "Kurbelgarnitur-Ersatzteile",
    category_crankset: "Kurbelgarnitur",
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
    category_shiftadapter: "Schaltadapter",
    category_shiftadapterpart: "Schaltadapter-Ersatzteile",
    category_shiftbrakecombo: "Schalt-/Bremshebel",
    category_shiftbrakecombopart: "Schalt-/Bremshebel-Ersatzteile",
    category_shifter: "Schalthebel",
    category_shifterpart: "Schalthebel-Ersatzteile",
    category_spoke: "Speiche",
    category_stem: "Vorbau",
    category_stempart: "Vorbau-Ersatzteile",
    category_tube: "Schlauch",
    category_tyre: "Reifen",
    category_wheelset: "Laufradsatz",
    checksku_message_nobikefound: "Es konnte kein Fahrrad mit der angegebenen Fahrradschlüsselnummer gefunden werden",
    checksku_message_nocompatibilityinfo: "Keine Informationen zur Kompatibilität",
    checksku_message_noproductfound: "Nous n’avons pas pu trouver de composant avec le code produit/code-barre/numéro de composant fourni",
    checksku_message_notcompatible: "Nicht kompatibel",
    checksku_warning_unabletoperformcheck: "Es konnte keine Prüfung der Kompatibilität durchgeführt werden. Die Kompatibilität muss persönlich überprüft werden."
  }
}, Rn = {
  translation: {
    bikematrix_poweredby: "Alimentato da Bike Matrix",
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
    bikeselector_home_add_a_bike: "Aggiungi una bici qui sotto per iniziare...",
    bikeselector_home_add_btn: "Aggiungi una bici",
    bikeselector_home_browse_btn: "Sfoglia compatibilità",
    bikeselector_home_close_btn: "Chiudi",
    bikeselector_home_empty: "Il tuo salotto è vuoto!",
    bikeselector_home_footer_message: "I produttori delle bici possono modificare le specifiche senza preavviso. Eventuali differenze rispetto alle specifiche di serie possono condizionare la compatibilità.",
    bikeselector_home_title: "Le mie bici",
    bikeselector_search_bikespec_label: "Versione della bici",
    bikeselector_search_bikespec_select: "Seleziona la versione della bici",
    bikeselector_search_bikespec_select_all: "Tutti",
    bikeselector_search_confirm_btn: "Conferma la scelta",
    bikeselector_search_no_bikes_found: "Nessuna bici trovata",
    bikeselector_search_number_bikes_found: "{{number_found}} bici trovate",
    bikeselector_search_one_bike_found: "1 bici trovata",
    bikeselector_search_searching: "Ricerca...",
    bikeselector_search_title: "Ricerca bici",
    bikeselector_search_year_label: "Anno",
    bikeselector_size_confirm_btn: "Conferma la misura",
    bikeselector_size_framesize_desc: "In genere, la misura del telaio della tua bici si trova nelle aree evidenziate di seguito.",
    bikeselector_size_framesize_label: "Misura del telaio",
    bikeselector_size_framesize_one_size: "Taglia unica",
    bikeselector_size_framesize_select: "Seleziona la misura del tuo telaio",
    bikeselector_size_title: "Seleziona la tua misura",
    compatible: "Compatibile",
    compatible_check_notes: "Compatibile: controlla le note",
    compatiblelist_header: "Prodotti compatibili",
    compatiblelist_nobikeselected: "Nessuna bici selezionata. Clicca qui per aggiungere la tua bici e verificare la compatibilità dei componenti",
    compatiblelist_noresults: "Nessun prodotto compatibile trovato",
    compatiblelist_pageone: "Tutti i prodotti compatibili con la tua bici possono essere visualizzati <a>qui</a>",
    compatiblelist_unavailable: "La compatibilità per questa categoria di prodotto, per la marca di bici selezionata, sarà presto disponibile!",
    not_compatible: "Non compatibile",
    productcheck_nobikeselected_label: "Controlla compatibilità",
    productcheck_nobikeselected_message: "Aggiungi la tua bici per verificare se questo componente è idoneo",
    productcheck_questionmark: "?",
    category_bike: "Bici",
    category_bottombracket: "Movimento centrale",
    category_bottombracketpart: "Componente movimento centrale",
    category_brakeadapter: "Adattatore freno",
    category_brakeadapterpart: "Componente adattatore freno",
    category_brakecaliper: "Pinza freno",
    category_brakecaliperpart: "Componente pinza freno",
    category_brakecaliperservicekit: "Kit manutenzione pinza freno",
    category_brakelever: "Leva freno",
    category_brakeleverpart: "Componente leva freno",
    category_brakeleverservicekit: "Kit manutenzione leva freno",
    category_brakepads: "Pastiglie/pattini freno",
    category_brakerotor: "Rotore freno",
    category_brakerotorpart: "Componente rotore freno",
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
    category_crankpart: "Componente guarnitura",
    category_crankset: "Guarnitura",
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
    category_shiftadapter: "Adattatore cambio",
    category_shiftadapterpart: "Componente adattatore cambio",
    category_shiftbrakecombo: "Comando integrato freno/cambio",
    category_shiftbrakecombopart: "Componente comando integrato freno/cambio",
    category_shifter: "Comando cambio",
    category_shifterpart: "Componente comando cambio",
    category_spoke: "Raggio",
    category_stem: "Attacco manubrio",
    category_stempart: "Componente attacco manubrio",
    category_tube: "Camera d'aria",
    category_tyre: "Pneumatico",
    category_wheelset: "Set ruote",
    checksku_message_nobikefound: "Impossibile trovare una bici con la chiave di ricerca fornita",
    checksku_message_nocompatibilityinfo: "Nessuna informazione sulla compatibilità",
    checksku_message_noproductfound: "Impossibile trovare il componente con lo SKU/codice a barre/codice componente fornito",
    checksku_message_notcompatible: "Non compatibile",
    checksku_warning_unabletoperformcheck: "Impossibile eseguire il controllo di compatibilità. Verificare manualmente la compatibilità."
  }
}, Nn = {
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
    bikeselector_home_add_a_bike: "Voeg hieronder een fiets toe om aan de slag te gaan...",
    bikeselector_home_add_btn: "Fiets toevoegen",
    bikeselector_home_browse_btn: "Compatibiliteit bekijken",
    bikeselector_home_close_btn: "Sluiten",
    bikeselector_home_empty: "Je lounge is leeg!",
    bikeselector_home_footer_message: "Fietsfabrikanten kunnen de specificaties van fietsen zonder kennisgeving wijzigen. De compatibiliteit kan veranderen door verschillen in de specificaties van de voorraad.",
    bikeselector_home_title: "Mijn Fietsenrek",
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
    compatible: "Compatibel",
    compatible_check_notes: "Compatibel - Controleer opmerkingen",
    compatiblelist_header: "Compatibele producten",
    compatiblelist_nobikeselected: "Geen fiets geselecteerd. Klik hier om uw fiets toe te voegen voor het opzoeken van compatibele onderdelen",
    compatiblelist_noresults: "Geen compatibele producten gevonden",
    compatiblelist_pageone: "Alle producten die compatibel zijn met uw fiets kunt u <a>hier</a> bekijken.",
    compatiblelist_unavailable: "Compatibiliteit voor deze productcategorie, voor het door u geselecteerde fietsmerk, komt binnenkort!",
    not_compatible: "Niet compatibel",
    productcheck_nobikeselected_label: "Compatibiliteit controleren",
    productcheck_nobikeselected_message: "Voeg uw fiets toe om te controleren of dit onderdeel erop past",
    productcheck_questionmark: "?",
    category_bike: "Fiets",
    category_bottombracket: "Trapas",
    category_bottombracketpart: "Trapasonderdeel",
    category_brakeadapter: "Remadapter",
    category_brakeadapterpart: "Remadapteronderdeel",
    category_brakecaliper: "Remklauw",
    category_brakecaliperpart: "Remklauwonderdeel",
    category_brakecaliperservicekit: "Servicekit remklauw",
    category_brakelever: "Remhendel",
    category_brakeleverpart: "Remhendelonderdeel",
    category_brakeleverservicekit: "Servicekit remhendel",
    category_brakepads: "Remblokken",
    category_brakerotor: "Remschijf",
    category_brakerotorpart: "Remschijfonderdeel",
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
    category_crankpart: "Crankonderdeel",
    category_crankset: "Crankset",
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
    category_shiftadapter: "Versnellingsadapter",
    category_shiftadapterpart: "Versnellingsadapteronderdeel",
    category_shiftbrakecombo: "Schakel-/remhendel",
    category_shiftbrakecombopart: "Schakel-/remhendelonderdeel",
    category_shifter: "Shifter",
    category_shifterpart: "Shifteronderdeel",
    category_spoke: "Spaak",
    category_stem: "Stuurpen",
    category_stempart: "Stuurpenonderdeel",
    category_tube: "Binnenband",
    category_tyre: "Buitenband",
    category_wheelset: "Wielset",
    checksku_message_nobikefound: "Kan geen fiets vinden met het opgegeven Fietsnummer",
    checksku_message_nocompatibilityinfo: "Geen informatie over compatibiliteit",
    checksku_message_noproductfound: "Kan geen onderdeel vinden met de opgegeven SKU/Barcode/Onderdeelnummer",
    checksku_message_notcompatible: "Niet compatibel",
    checksku_warning_unabletoperformcheck: "Kan de compatibiliteitscontrole niet uitvoeren. Controleer de compatibiliteit handmatig."
  }
}, Pn = {
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
    bikeselector_home_add_a_bike: "Ajoutez un vélo ci-dessous pour commencer...",
    bikeselector_home_add_btn: "Ajouter un vélo",
    bikeselector_home_browse_btn: "Parcourir les compatibilités",
    bikeselector_home_close_btn: "Fermer",
    bikeselector_home_empty: "Votre salon est vide !",
    bikeselector_home_footer_message: "Les fabricants de vélo peuvent changer les caractéristiques des vélos sans préavis. Les différences par rapport aux spécifications d’origine peuvent avoir un impact sur les résultats de compatibilité.",
    bikeselector_home_title: "Mes vélos",
    bikeselector_search_bikespec_label: "Version du vélo",
    bikeselector_search_bikespec_select: "Sélectionnez la version du vélo",
    bikeselector_search_bikespec_select_all: "Tous",
    bikeselector_search_confirm_btn: "Confirmer la sélection",
    bikeselector_search_no_bikes_found: "Aucun vélo trouvé",
    bikeselector_search_number_bikes_found: "{{number_found}} bikes found",
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
    compatible: "Compatible",
    compatible_check_notes: "Compatible-vérifier les notes",
    compatiblelist_header: "Produits compatibles",
    compatiblelist_nobikeselected: "Aucun vélo sélectionné. Cliquez ici pour ajouter votre vélo et voir les composants compatibles",
    compatiblelist_noresults: "Aucun produit compatible trouvé",
    compatiblelist_pageone: "Tous les produits compatibles avec votre vélo peuvent être consultés <a>ici</a>",
    compatiblelist_unavailable: "La compatibilité pour cette catégorie de produits, pour la marque de vélo que vous avez sélectionnée, sera bientôt disponible !",
    not_compatible: "Non compatible",
    productcheck_nobikeselected_label: "Vérifier la compatibilité",
    productcheck_nobikeselected_message: "Ajoutez votre vélo pour vérifier si ce composant est compatible",
    productcheck_questionmark: "?",
    category_bike: "Vélo",
    category_bottombracket: "Boîtier de pédalier",
    category_bottombracketpart: "Pièce de boîtier de pédalier",
    category_brakeadapter: "Adaptateur pour frein",
    category_brakeadapterpart: "Pièce d’adaptateur pour frein",
    category_brakecaliper: "Étrier de frein",
    category_brakecaliperpart: "Pièce d’étrier de frein",
    category_brakecaliperservicekit: "Kit d’entretien d’étrier de frein",
    category_brakelever: "Levier de frein",
    category_brakeleverpart: "Pièce de levier de frein",
    category_brakeleverservicekit: "Kit d’entretien de levier de frein",
    category_brakepads: "Patins/plaquettes de frein",
    category_brakerotor: "Disque de frein",
    category_brakerotorpart: "Pièce de disque de frein",
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
    category_crankpart: "Pièce de pédalier",
    category_crankset: "Pédalier",
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
    category_shiftadapter: "Adaptateur de commande de vitesse",
    category_shiftadapterpart: "Pièce d’adaptateur de commande de vitesse",
    category_shiftbrakecombo: "Combo levier manette",
    category_shiftbrakecombopart: "Pièce de combo levier manette",
    category_shifter: "Commande de vitesse",
    category_shifterpart: "Pièce de commande de vitesse",
    category_spoke: "Rayon",
    category_stem: "Potence",
    category_stempart: "Pièce de potence",
    category_tube: "Chambre à air",
    category_tyre: "Pneu",
    category_wheelset: "Paire de roues",
    checksku_message_nobikefound: "Nous n’avons pas pu trouver de vélo avec le Code Vélo fourni",
    checksku_message_nocompatibilityinfo: "Pas d’information concernant la compatibilité",
    checksku_message_noproductfound: "Nous n’avons pas pu trouver de composant avec le code produit/code-barre/numéro de composant fourni",
    checksku_message_notcompatible: "Non compatible",
    checksku_warning_unabletoperformcheck: "Impossible de vérifier la compatibilité. Veuillez vérifier la compatibilité manuellement."
  }
}, Tn = {
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
    bikeselector_home_add_a_bike: "Agregue una bicicleta a continuación para comenzar...",
    bikeselector_home_add_btn: "Añadir una bicicleta",
    bikeselector_home_browse_btn: "Ver compatibilidad",
    bikeselector_home_close_btn: "Cerrar",
    bikeselector_home_empty: "¡Tu salón está vacío!",
    bikeselector_home_footer_message: "Los fabricantes pueden modificar la versión de la bicicleta sin previo aviso. Las diferencias con la versión de las unidades en existencias pueden afectar a la compatibilidad.",
    bikeselector_home_title: "Mi rincón ciclista",
    bikeselector_search_bikespec_label: "Versión de la bicicleta",
    bikeselector_search_bikespec_select: "Selecciona la versión",
    bikeselector_search_bikespec_select_all: "Todos",
    bikeselector_search_confirm_btn: "Confirmar selección",
    bikeselector_search_no_bikes_found: "No se encontraron bicicletas",
    bikeselector_search_number_bikes_found: "{{number_found}} bicicletas encontradas",
    bikeselector_search_one_bike_found: "1 bicicleta encontrada",
    bikeselector_search_searching: "Búsqueda...",
    bikeselector_search_title: "Búsqueda de bicicletas",
    bikeselector_search_year_label: "Año",
    bikeselector_size_confirm_btn: "Confirmar talla",
    bikeselector_size_framesize_desc: "La talla del cuadro de la bicicleta suele indicarse en los lugares resaltados a continuación.",
    bikeselector_size_framesize_label: "Talla del cuadro",
    bikeselector_size_framesize_one_size: "Talla única",
    bikeselector_size_framesize_select: "Selecciona la talla del cuadro",
    bikeselector_size_title: "Selecciona la talla",
    compatible: "Compatible",
    compatible_check_notes: "Compatible - Ver notas",
    compatiblelist_header: "Productos compatibles",
    compatiblelist_nobikeselected: "No se ha seleccionado ninguna bicicleta. Haz clic aquí para añadir tu bicicleta y buscar componentes compatibles",
    compatiblelist_noresults: "No se encontraron productos compatibles",
    compatiblelist_pageone: "Todos los productos compatibles con tu bicicleta los puedes ver <a>aquí</a>",
    compatiblelist_unavailable: "¡La compatibilidad para esta categoría de producto, para la marca de bicicleta seleccionada, estará disponible próximamente!",
    not_compatible: "No compatible",
    productcheck_nobikeselected_label: "Comprobar compatibilidad",
    productcheck_nobikeselected_message: "Quieres añadir la bicicleta para comprobar si este componente es adecuado",
    productcheck_questionmark: "?",
    category_bike: "Bicicleta",
    category_bottombracket: "Pedalier",
    category_bottombracketpart: "Componente del pedalier",
    category_brakeadapter: "Adaptador de freno",
    category_brakeadapterpart: "Componente del adaptador de freno",
    category_brakecaliper: "Pinza de freno",
    category_brakecaliperpart: "Componente de la pinza de freno",
    category_brakecaliperservicekit: "Kit de mantenimiento de las pinzas de freno",
    category_brakelever: "Maneta de freno",
    category_brakeleverpart: "Componente de la maneta de freno",
    category_brakeleverservicekit: "Kit de mantenimiento de la maneta de freno",
    category_brakepads: "Pastillas de freno",
    category_brakerotor: "Disco de freno",
    category_brakerotorpart: "Componente del disco de freno",
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
    category_crankpart: "Componente de la biela",
    category_crankset: "Juego de bielas",
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
    category_shiftadapter: "Adaptador del cambio",
    category_shiftadapterpart: "Componente del adaptador del cambio",
    category_shiftbrakecombo: "Maneta de cambio/freno",
    category_shiftbrakecombopart: "Componente de la maneta de cambio/freno",
    category_shifter: "Mando de cambio",
    category_shifterpart: "Componente del mando de cambio",
    category_spoke: "Radio",
    category_stem: "Potencia",
    category_stempart: "Componente de la potencia",
    category_tube: "Cámara",
    category_tyre: "Neumático",
    category_wheelset: "Juego de ruedas",
    checksku_message_nobikefound: "No se ha encontrado ninguna bicicleta con la clave indicada",
    checksku_message_nocompatibilityinfo: "No hay información sobre la compatibilidad",
    checksku_message_noproductfound: "No se ha encontrado ningún componente con la referencia, el código de barras o el número de pieza indicado",
    checksku_message_notcompatible: "No compatible",
    checksku_warning_unabletoperformcheck: "No se puede comprobar la compatibilidad. Comprueba la compatibilidad de forma manual."
  }
}, On = {
  de: zn,
  it: Rn,
  nl: Nn,
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
      bikeselector_home_add_a_bike: "Add a bike below to get started...",
      bikeselector_home_add_btn: "Add A Bike",
      bikeselector_home_browse_btn: "Browse Compatiblity",
      bikeselector_home_close_btn: "Close",
      bikeselector_home_empty: "Your lounge is empty!",
      bikeselector_home_footer_message: "Bike manufacturers may change bike specifications without notice. Differences from stock specifications can impact compatibility results.",
      bikeselector_home_title: "My Bike Lounge",
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
      compatible: "Compatible",
      compatible_check_notes: "Compatible - Check Notes",
      compatiblelist_header: "Compatible Products",
      compatiblelist_nobikeselected: "No bike selected. Click here to add your ride to check for compatible parts",
      compatiblelist_noresults: "No compatible products found",
      compatiblelist_pageone: "All products compatible with your bike can be seen <a>here</a>.",
      compatiblelist_unavailable: "Compatibility for this product category for your selected bike brand is coming soon!",
      not_compatible: "Not Compatible",
      productcheck_nobikeselected_label: "Check Compatiblity",
      productcheck_nobikeselected_message: "Add your ride to check if this part fits",
      productcheck_questionmark: "?",
      category_bike: "Bike",
      category_bottombracket: "Bottom Bracket",
      category_bottombracketpart: "Bottom Bracket Part",
      category_brakeadapter: "Brake Adapter",
      category_brakeadapterpart: "Brake Adapter Part",
      category_brakecaliper: "Brake Caliper",
      category_brakecaliperpart: "Brake Caliper Part",
      category_brakecaliperservicekit: "Brake Caliper Service Kit",
      category_brakelever: "Brake Lever",
      category_brakeleverpart: "Brake Lever Part",
      category_brakeleverservicekit: "Brake Lever Service Kit",
      category_brakepads: "Brake Pads",
      category_brakerotor: "Brake Rotor",
      category_brakerotorpart: "Brake Rotor Part",
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
      category_crankpart: "Crank Part",
      category_crankset: "Crankset",
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
      category_shiftadapter: "Shift Adapter",
      category_shiftadapterpart: "Shift Adapter Part",
      category_shiftbrakecombo: "Shift Brake Combo",
      category_shiftbrakecombopart: "Shift Brake Combo Part",
      category_shifter: "Shifter",
      category_shifterpart: "Shifter Part",
      category_spoke: "Spoke",
      category_stem: "Stem",
      category_stempart: "Stem Part",
      category_tube: "Tube",
      category_tyre: "Tyre",
      category_wheelset: "Wheelset",
      checksku_message_nobikefound: "Could not find a bike with the provided Bike Key",
      checksku_message_nocompatibilityinfo: "No Compatibility Information",
      checksku_message_noproductfound: "Could not find a part with the provided SKU/Barcode/Part No",
      checksku_message_notcompatible: "Not Compatible",
      checksku_warning_unabletoperformcheck: "Unable to perform compatibility check. Please check the compatibility manually."
    }
  },
  fr: Pn,
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
      bikeselector_home_add_a_bike: "Add a bike below to get started...",
      bikeselector_home_add_btn: "Add A Bike",
      bikeselector_home_browse_btn: "Browse Compatiblity",
      bikeselector_home_close_btn: "Close",
      bikeselector_home_empty: "Your lounge is empty!",
      bikeselector_home_footer_message: "Bike manufacturers may change bike specifications without notice. Differences from stock specifications can impact compatibility results.",
      bikeselector_home_title: "My Bike Lounge",
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
      compatible: "Compatible",
      compatible_check_notes: "Compatible - Check Notes",
      compatiblelist_header: "Compatible Products",
      compatiblelist_nobikeselected: "No bike selected. Click here to add your ride to check for compatible parts",
      compatiblelist_noresults: "No compatible products found",
      compatiblelist_pageone: "All products compatible with your bike can be seen <a>here</a>.",
      compatiblelist_unavailable: "Compatibility for this product category for your selected bike brand is coming soon!",
      not_compatible: "Not Compatible",
      productcheck_nobikeselected_label: "Check Compatiblity",
      productcheck_nobikeselected_message: "Add your ride to check if this part fits",
      productcheck_questionmark: "?",
      category_bike: "Bike",
      category_bottombracket: "Bottom Bracket",
      category_bottombracketpart: "Bottom Bracket Part",
      category_brakeadapter: "Brake Adapter",
      category_brakeadapterpart: "Brake Adapter Part",
      category_brakecaliper: "Brake Caliper",
      category_brakecaliperpart: "Brake Caliper Part",
      category_brakecaliperservicekit: "Brake Caliper Service Kit",
      category_brakelever: "Brake Lever",
      category_brakeleverpart: "Brake Lever Part",
      category_brakeleverservicekit: "Brake Lever Service Kit",
      category_brakepads: "Brake Pads",
      category_brakerotor: "Brake Rotor",
      category_brakerotorpart: "Brake Rotor Part",
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
      category_crankpart: "Crank Part",
      category_crankset: "Crankset",
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
      category_shiftadapter: "Shift Adapter",
      category_shiftadapterpart: "Shift Adapter Part",
      category_shiftbrakecombo: "Shift Brake Combo",
      category_shiftbrakecombopart: "Shift Brake Combo Part",
      category_shifter: "Shifter",
      category_shifterpart: "Shifter Part",
      category_spoke: "Spoke",
      category_stem: "Stem",
      category_stempart: "Stem Part",
      category_tube: "Tube",
      category_tyre: "Tire",
      category_wheelset: "Wheelset",
      checksku_message_nobikefound: "Could not find a bike with the provided Bike Key",
      checksku_message_nocompatibilityinfo: "No Compatibility Information",
      checksku_message_noproductfound: "Could not find a part with the provided SKU/Barcode/Part No",
      checksku_message_notcompatible: "Not Compatible",
      checksku_warning_unabletoperformcheck: "Unable to perform compatibility check. Please check the compatibility manually"
    }
  },
  es: Tn
}, {
  slice: Un,
  forEach: In
} = [];
function Vn(t) {
  return In.call(Un.call(arguments, 1), (e) => {
    if (e)
      for (const r in e)
        t[r] === void 0 && (t[r] = e[r]);
  }), t;
}
const Qr = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Mn = (t, e, r) => {
  const o = r || {};
  o.path = o.path || "/";
  const a = encodeURIComponent(e);
  let i = `${t}=${a}`;
  if (o.maxAge > 0) {
    const n = o.maxAge - 0;
    if (Number.isNaN(n))
      throw new Error("maxAge should be a Number");
    i += `; Max-Age=${Math.floor(n)}`;
  }
  if (o.domain) {
    if (!Qr.test(o.domain))
      throw new TypeError("option domain is invalid");
    i += `; Domain=${o.domain}`;
  }
  if (o.path) {
    if (!Qr.test(o.path))
      throw new TypeError("option path is invalid");
    i += `; Path=${o.path}`;
  }
  if (o.expires) {
    if (typeof o.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    i += `; Expires=${o.expires.toUTCString()}`;
  }
  if (o.httpOnly && (i += "; HttpOnly"), o.secure && (i += "; Secure"), o.sameSite)
    switch (typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite) {
      case !0:
        i += "; SameSite=Strict";
        break;
      case "lax":
        i += "; SameSite=Lax";
        break;
      case "strict":
        i += "; SameSite=Strict";
        break;
      case "none":
        i += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return i;
}, Xr = {
  create(t, e, r, o) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    r && (a.expires = /* @__PURE__ */ new Date(), a.expires.setTime(a.expires.getTime() + r * 60 * 1e3)), o && (a.domain = o), document.cookie = Mn(t, encodeURIComponent(e), a);
  },
  read(t) {
    const e = `${t}=`, r = document.cookie.split(";");
    for (let o = 0; o < r.length; o++) {
      let a = r[o];
      for (; a.charAt(0) === " "; )
        a = a.substring(1, a.length);
      if (a.indexOf(e) === 0)
        return a.substring(e.length, a.length);
    }
    return null;
  },
  remove(t) {
    this.create(t, "", -1);
  }
};
var jn = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(t) {
    let {
      lookupCookie: e
    } = t;
    if (e && typeof document < "u")
      return Xr.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(t, e) {
    let {
      lookupCookie: r,
      cookieMinutes: o,
      cookieDomain: a,
      cookieOptions: i
    } = e;
    r && typeof document < "u" && Xr.create(r, t, o, a, i);
  }
}, $n = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(t) {
    var o;
    let {
      lookupQuerystring: e
    } = t, r;
    if (typeof window < "u") {
      let {
        search: a
      } = window.location;
      !window.location.search && ((o = window.location.hash) == null ? void 0 : o.indexOf("?")) > -1 && (a = window.location.hash.substring(window.location.hash.indexOf("?")));
      const n = a.substring(1).split("&");
      for (let s = 0; s < n.length; s++) {
        const u = n[s].indexOf("=");
        u > 0 && n[s].substring(0, u) === e && (r = n[s].substring(u + 1));
      }
    }
    return r;
  }
};
let Ie = null;
const eo = () => {
  if (Ie !== null)
    return Ie;
  try {
    Ie = window !== "undefined" && window.localStorage !== null;
    const t = "i18next.translate.boo";
    window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t);
  } catch {
    Ie = !1;
  }
  return Ie;
};
var Hn = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(t) {
    let {
      lookupLocalStorage: e
    } = t;
    if (e && eo())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(t, e) {
    let {
      lookupLocalStorage: r
    } = e;
    r && eo() && window.localStorage.setItem(r, t);
  }
};
let Ve = null;
const to = () => {
  if (Ve !== null)
    return Ve;
  try {
    Ve = window !== "undefined" && window.sessionStorage !== null;
    const t = "i18next.translate.boo";
    window.sessionStorage.setItem(t, "foo"), window.sessionStorage.removeItem(t);
  } catch {
    Ve = !1;
  }
  return Ve;
};
var Gn = {
  name: "sessionStorage",
  lookup(t) {
    let {
      lookupSessionStorage: e
    } = t;
    if (e && to())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(t, e) {
    let {
      lookupSessionStorage: r
    } = e;
    r && to() && window.sessionStorage.setItem(r, t);
  }
}, Kn = {
  name: "navigator",
  lookup(t) {
    const e = [];
    if (typeof navigator < "u") {
      const {
        languages: r,
        userLanguage: o,
        language: a
      } = navigator;
      if (r)
        for (let i = 0; i < r.length; i++)
          e.push(r[i]);
      o && e.push(o), a && e.push(a);
    }
    return e.length > 0 ? e : void 0;
  }
}, Jn = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(t) {
    let {
      htmlTag: e
    } = t, r;
    const o = e || (typeof document < "u" ? document.documentElement : null);
    return o && typeof o.getAttribute == "function" && (r = o.getAttribute("lang")), r;
  }
}, Yn = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(t) {
    var a;
    let {
      lookupFromPathIndex: e
    } = t;
    if (typeof window > "u")
      return;
    const r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(r) ? (a = r[typeof e == "number" ? e : 0]) == null ? void 0 : a.replace("/", "") : void 0;
  }
}, Wn = {
  name: "subdomain",
  lookup(t) {
    var a, i;
    let {
      lookupFromSubdomainIndex: e
    } = t;
    const r = typeof e == "number" ? e + 1 : 1, o = typeof window < "u" && ((i = (a = window.location) == null ? void 0 : a.hostname) == null ? void 0 : i.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (o)
      return o[r];
  }
};
function Zn() {
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
    convertDetectedLanguage: (t) => t
  };
}
class Zo {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, r);
  }
  init(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e || {
      languageUtils: {}
    }, this.options = Vn(r, this.options || {}, Zn()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (a) => a.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = o, this.addDetector(jn), this.addDetector($n), this.addDetector(Hn), this.addDetector(Gn), this.addDetector(Kn), this.addDetector(Jn), this.addDetector(Yn), this.addDetector(Wn);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect(e) {
    e || (e = this.options.order);
    let r = [];
    return e.forEach((o) => {
      if (this.detectors[o]) {
        let a = this.detectors[o].lookup(this.options);
        a && typeof a == "string" && (a = [a]), a && (r = r.concat(a));
      }
    }), r = r.map((o) => this.options.convertDetectedLanguage(o)), this.services.languageUtils.getBestMatchFromCodes ? r : r.length > 0 ? r[0] : null;
  }
  cacheUserLanguage(e, r) {
    r || (r = this.options.caches), r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || r.forEach((o) => {
      this.detectors[o] && this.detectors[o].cacheUserLanguage(e, this.options);
    }));
  }
}
Zo.type = "languageDetector";
ee.use(Pa).use(Zo).init({
  debug: !1,
  resources: On,
  detection: {
    // order and from where user language should be detected
    order: ["htmlTag", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "path", "subdomain"]
  },
  supportedLngs: ["en", "en-GB", "en-US", "de", "fr", "es", "it", "nl"],
  fallbackLng: "en-GB",
  interpolation: {
    escapeValue: !1
    // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
});
const Qn = typeof window < "u";
function ke(t, e, r = [], o = null) {
  ua((i) => Gt.value ? d(t, {
    ...i
  }) : d(q, {}), e, r, o);
}
function Xn() {
  ke(Hi, "bikematrix-bikeselector", [], {
    shadow: !0
  }), ke(Ki, "bikematrix-productresult", ["data-sku"], {
    shadow: !0
  }), ke(Zi, "bikematrix-collectionresult", ["data-product-id", "data-product-skus"], {
    shadow: !0
  }), ke(Ko, "bikematrix-compatibilitylabel", ["data-type"], {
    shadow: !0
  }), ke(nn, "bikematrix-compatiblelist", ["data-title"]), ke(ln, "bikematrix-bikeselectorbanner", ["data-title", "data-color", "data-full-width", "data-font-color", "data-show"], {
    shadow: !0
  }), ke(Jo, "bikematrix-bikon", ["data-color"], {
    shadow: !0
  });
}
function es() {
  if (!Qn)
    return null;
  const t = Fi.getInstance(), e = {
    // Core instance methods
    isInitialized: () => t.isInitialized(),
    init: (r) => t.initialize(r),
    refresh: () => t.refresh(),
    destroy: () => t.destroy(),
    reload: (r = !0) => t.reload(r),
    reset: () => t.reset(),
    // Utility methods
    getConfig: () => t.getConfig(),
    getCurrentBike: () => t.getCurrentBike(),
    getActiveSubscription: () => t.getActiveSubscription(),
    updateConfig: (r) => t.updateConfig(r),
    updateSku: (r) => t.updateSku(r)
  };
  return typeof process < "u" && process.env.NODE_ENV === "development" && (e.core = t), window.BikeMatrix = e, Xn(), document.currentScript && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => e.init()) : e.init()), e;
}
const ts = es();
export {
  ts as default
};
