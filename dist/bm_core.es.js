var Ur, j, kn, vn, Et, oo, wn, Qi, xn, Fr = {}, Cn = [], ml = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Di = Array.isArray;
function lt(i, e) {
  for (var t in e)
    i[t] = e[t];
  return i;
}
function Dn(i) {
  var e = i.parentNode;
  e && e.removeChild(i);
}
function P(i, e, t) {
  var r, a, o, n = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? a = e[o] : n[o] = e[o];
  if (arguments.length > 2 && (n.children = arguments.length > 3 ? Ur.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps)
      n[o] === void 0 && (n[o] = i.defaultProps[o]);
  return wr(i, n, r, a, null);
}
function wr(i, e, t, r, a) {
  var o = { type: i, props: e, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: a ?? ++kn, __i: -1, __u: 0 };
  return a == null && j.vnode != null && j.vnode(o), o;
}
function O(i) {
  return i.children;
}
function et(i, e) {
  this.props = i, this.context = e;
}
function Xt(i, e) {
  if (e == null)
    return i.__ ? Xt(i.__, i.__i + 1) : null;
  for (var t; e < i.__k.length; e++)
    if ((t = i.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof i.type == "function" ? Xt(i) : null;
}
function An(i) {
  var e, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, e = 0; e < i.__k.length; e++)
      if ((t = i.__k[e]) != null && t.__e != null) {
        i.__e = i.__c.base = t.__e;
        break;
      }
    return An(i);
  }
}
function ea(i) {
  (!i.__d && (i.__d = !0) && Et.push(i) && !ui.__r++ || oo !== j.debounceRendering) && ((oo = j.debounceRendering) || wn)(ui);
}
function ui() {
  var i, e, t, r, a, o, n, s, l;
  for (Et.sort(Qi); i = Et.shift(); )
    i.__d && (e = Et.length, r = void 0, o = (a = (t = i).__v).__e, s = [], l = [], (n = t.__P) && ((r = lt({}, a)).__v = a.__v + 1, j.vnode && j.vnode(r), Aa(n, r, a, t.__n, n.ownerSVGElement !== void 0, 32 & a.__u ? [o] : null, s, o ?? Xt(a), !!(32 & a.__u), l), r.__v = a.__v, r.__.__k[r.__i] = r, En(s, r, l), r.__e != o && An(r)), Et.length > e && Et.sort(Qi));
  ui.__r = 0;
}
function Sn(i, e, t, r, a, o, n, s, l, u, c) {
  var p, h, f, b, g, m = r && r.__k || Cn, k = e.length;
  for (t.__d = l, bl(t, e, m), l = t.__d, p = 0; p < k; p++)
    (f = t.__k[p]) != null && typeof f != "boolean" && typeof f != "function" && (h = f.__i === -1 ? Fr : m[f.__i] || Fr, f.__i = p, Aa(i, f, h, a, o, n, s, l, u, c), b = f.__e, f.ref && h.ref != f.ref && (h.ref && Sa(h.ref, null, f), c.push(f.ref, f.__c || b, f)), g == null && b != null && (g = b), 65536 & f.__u || h.__k === f.__k ? l = Bn(f, l, i) : typeof f.type == "function" && f.__d !== void 0 ? l = f.__d : b && (l = b.nextSibling), f.__d = void 0, f.__u &= -196609);
  t.__d = l, t.__e = g;
}
function bl(i, e, t) {
  var r, a, o, n, s, l = e.length, u = t.length, c = u, p = 0;
  for (i.__k = [], r = 0; r < l; r++)
    n = r + p, (a = i.__k[r] = (a = e[r]) == null || typeof a == "boolean" || typeof a == "function" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? wr(null, a, null, null, null) : Di(a) ? wr(O, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? wr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null ? (a.__ = i, a.__b = i.__b + 1, s = _l(a, t, n, c), a.__i = s, o = null, s !== -1 && (c--, (o = t[s]) && (o.__u |= 131072)), o == null || o.__v === null ? (s == -1 && p--, typeof a.type != "function" && (a.__u |= 65536)) : s !== n && (s === n + 1 ? p++ : s > n ? c > l - n ? p += s - n : p-- : s < n ? s == n - 1 && (p = s - n) : p = 0, s !== r + p && (a.__u |= 65536))) : (o = t[n]) && o.key == null && o.__e && !(131072 & o.__u) && (o.__e == i.__d && (i.__d = Xt(o)), ta(o, o, !1), t[n] = null, c--);
  if (c)
    for (r = 0; r < u; r++)
      (o = t[r]) != null && !(131072 & o.__u) && (o.__e == i.__d && (i.__d = Xt(o)), ta(o, o));
}
function Bn(i, e, t) {
  var r, a;
  if (typeof i.type == "function") {
    for (r = i.__k, a = 0; r && a < r.length; a++)
      r[a] && (r[a].__ = i, e = Bn(r[a], e, t));
    return e;
  }
  i.__e != e && (t.insertBefore(i.__e, e || null), e = i.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function ci(i, e) {
  return e = e || [], i == null || typeof i == "boolean" || (Di(i) ? i.some(function(t) {
    ci(t, e);
  }) : e.push(i)), e;
}
function _l(i, e, t, r) {
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
function no(i, e, t) {
  e[0] === "-" ? i.setProperty(e, t ?? "") : i[e] = t == null ? "" : typeof t != "number" || ml.test(e) ? t : t + "px";
}
function Xr(i, e, t, r, a) {
  var o;
  e:
    if (e === "style")
      if (typeof t == "string")
        i.style.cssText = t;
      else {
        if (typeof r == "string" && (i.style.cssText = r = ""), r)
          for (e in r)
            t && e in t || no(i.style, e, "");
        if (t)
          for (e in t)
            r && t[e] === r[e] || no(i.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in i ? e.toLowerCase().slice(2) : e.slice(2), i.l || (i.l = {}), i.l[e + o] = t, t ? r ? t.u = r.u : (t.u = Date.now(), i.addEventListener(e, o ? lo : so, o)) : i.removeEventListener(e, o ? lo : so, o);
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
function so(i) {
  if (this.l) {
    var e = this.l[i.type + !1];
    if (i.t) {
      if (i.t <= e.u)
        return;
    } else
      i.t = Date.now();
    return e(j.event ? j.event(i) : i);
  }
}
function lo(i) {
  if (this.l)
    return this.l[i.type + !0](j.event ? j.event(i) : i);
}
function Aa(i, e, t, r, a, o, n, s, l, u) {
  var c, p, h, f, b, g, m, k, _, y, v, w, x, D, A, C = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & t.__u && (l = !!(32 & t.__u), o = [s = e.__e = t.__e]), (c = j.__b) && c(e);
  e:
    if (typeof C == "function")
      try {
        if (k = e.props, _ = (c = C.contextType) && r[c.__c], y = c ? _ ? _.props.value : c.__ : r, t.__c ? m = (p = e.__c = t.__c).__ = p.__E : ("prototype" in C && C.prototype.render ? e.__c = p = new C(k, y) : (e.__c = p = new et(k, y), p.constructor = C, p.render = kl), _ && _.sub(p), p.props = k, p.state || (p.state = {}), p.context = y, p.__n = r, h = p.__d = !0, p.__h = [], p._sb = []), p.__s == null && (p.__s = p.state), C.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = lt({}, p.__s)), lt(p.__s, C.getDerivedStateFromProps(k, p.__s))), f = p.props, b = p.state, p.__v = e, h)
          C.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), p.componentDidMount != null && p.__h.push(p.componentDidMount);
        else {
          if (C.getDerivedStateFromProps == null && k !== f && p.componentWillReceiveProps != null && p.componentWillReceiveProps(k, y), !p.__e && (p.shouldComponentUpdate != null && p.shouldComponentUpdate(k, p.__s, y) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (p.props = k, p.state = p.__s, p.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(z) {
              z && (z.__ = e);
            }), v = 0; v < p._sb.length; v++)
              p.__h.push(p._sb[v]);
            p._sb = [], p.__h.length && n.push(p);
            break e;
          }
          p.componentWillUpdate != null && p.componentWillUpdate(k, p.__s, y), p.componentDidUpdate != null && p.__h.push(function() {
            p.componentDidUpdate(f, b, g);
          });
        }
        if (p.context = y, p.props = k, p.__P = i, p.__e = !1, w = j.__r, x = 0, "prototype" in C && C.prototype.render) {
          for (p.state = p.__s, p.__d = !1, w && w(e), c = p.render(p.props, p.state, p.context), D = 0; D < p._sb.length; D++)
            p.__h.push(p._sb[D]);
          p._sb = [];
        } else
          do
            p.__d = !1, w && w(e), c = p.render(p.props, p.state, p.context), p.state = p.__s;
          while (p.__d && ++x < 25);
        p.state = p.__s, p.getChildContext != null && (r = lt(lt({}, r), p.getChildContext())), h || p.getSnapshotBeforeUpdate == null || (g = p.getSnapshotBeforeUpdate(f, b)), Sn(i, Di(A = c != null && c.type === O && c.key == null ? c.props.children : c) ? A : [A], e, t, r, a, o, n, s, l, u), p.base = e.__e, e.__u &= -161, p.__h.length && n.push(p), m && (p.__E = p.__ = null);
      } catch (z) {
        e.__v = null, l || o != null ? (e.__e = s, e.__u |= l ? 160 : 32, o[o.indexOf(s)] = null) : (e.__e = t.__e, e.__k = t.__k), j.__e(z, e, t);
      }
    else
      o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = yl(t.__e, e, t, r, a, o, n, l, u);
  (c = j.diffed) && c(e);
}
function En(i, e, t) {
  e.__d = void 0;
  for (var r = 0; r < t.length; r++)
    Sa(t[r], t[++r], t[++r]);
  j.__c && j.__c(e, i), i.some(function(a) {
    try {
      i = a.__h, a.__h = [], i.some(function(o) {
        o.call(a);
      });
    } catch (o) {
      j.__e(o, a.__v);
    }
  });
}
function yl(i, e, t, r, a, o, n, s, l) {
  var u, c, p, h, f, b, g, m = t.props, k = e.props, _ = e.type;
  if (_ === "svg" && (a = !0), o != null) {
    for (u = 0; u < o.length; u++)
      if ((f = o[u]) && "setAttribute" in f == !!_ && (_ ? f.localName === _ : f.nodeType === 3)) {
        i = f, o[u] = null;
        break;
      }
  }
  if (i == null) {
    if (_ === null)
      return document.createTextNode(k);
    i = a ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, k.is && k), o = null, s = !1;
  }
  if (_ === null)
    m === k || s && i.data === k || (i.data = k);
  else {
    if (o = o && Ur.call(i.childNodes), m = t.props || Fr, !s && o != null)
      for (m = {}, u = 0; u < i.attributes.length; u++)
        m[(f = i.attributes[u]).name] = f.value;
    for (u in m)
      f = m[u], u == "children" || (u == "dangerouslySetInnerHTML" ? p = f : u === "key" || u in k || Xr(i, u, null, f, a));
    for (u in k)
      f = k[u], u == "children" ? h = f : u == "dangerouslySetInnerHTML" ? c = f : u == "value" ? b = f : u == "checked" ? g = f : u === "key" || s && typeof f != "function" || m[u] === f || Xr(i, u, f, m[u], a);
    if (c)
      s || p && (c.__html === p.__html || c.__html === i.innerHTML) || (i.innerHTML = c.__html), e.__k = [];
    else if (p && (i.innerHTML = ""), Sn(i, Di(h) ? h : [h], e, t, r, a && _ !== "foreignObject", o, n, o ? o[0] : t.__k && Xt(t, 0), s, l), o != null)
      for (u = o.length; u--; )
        o[u] != null && Dn(o[u]);
    s || (u = "value", b !== void 0 && (b !== i[u] || _ === "progress" && !b || _ === "option" && b !== m[u]) && Xr(i, u, b, m[u], !1), u = "checked", g !== void 0 && g !== i[u] && Xr(i, u, g, m[u], !1));
  }
  return i;
}
function Sa(i, e, t) {
  try {
    typeof i == "function" ? i(e) : i.current = e;
  } catch (r) {
    j.__e(r, t);
  }
}
function ta(i, e, t) {
  var r, a;
  if (j.unmount && j.unmount(i), (r = i.ref) && (r.current && r.current !== i.__e || Sa(r, null, e)), (r = i.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        j.__e(o, e);
      }
    r.base = r.__P = null, i.__c = void 0;
  }
  if (r = i.__k)
    for (a = 0; a < r.length; a++)
      r[a] && ta(r[a], e, t || typeof i.type != "function");
  t || i.__e == null || Dn(i.__e), i.__ = i.__e = i.__d = void 0;
}
function kl(i, e, t) {
  return this.constructor(i, t);
}
function Ai(i, e, t) {
  var r, a, o, n;
  j.__ && j.__(i, e), a = (r = typeof t == "function") ? null : t && t.__k || e.__k, o = [], n = [], Aa(e, i = (!r && t || e).__k = P(O, null, [i]), a || Fr, Fr, e.ownerSVGElement !== void 0, !r && t ? [t] : a ? null : e.firstChild ? Ur.call(e.childNodes) : null, o, !r && t ? t : a ? a.__e : e.firstChild, r, n), En(o, i, n);
}
function Fn(i, e) {
  Ai(i, e, Fn);
}
function Ln(i, e, t) {
  var r, a, o, n, s = lt({}, i.props);
  for (o in i.type && i.type.defaultProps && (n = i.type.defaultProps), e)
    o == "key" ? r = e[o] : o == "ref" ? a = e[o] : s[o] = e[o] === void 0 && n !== void 0 ? n[o] : e[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ur.call(arguments, 2) : t), wr(i.type, s, r || i.key, a || i.ref, null);
}
function zn(i, e) {
  var t = { __c: e = "__cC" + xn++, __: i, Consumer: function(r, a) {
    return r.children(a);
  }, Provider: function(r) {
    var a, o;
    return this.getChildContext || (a = [], (o = {})[e] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && a.some(function(s) {
        s.__e = !0, ea(s);
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
Ur = Cn.slice, j = { __e: function(i, e, t, r) {
  for (var a, o, n; e = e.__; )
    if ((a = e.__c) && !a.__)
      try {
        if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(i)), n = a.__d), a.componentDidCatch != null && (a.componentDidCatch(i, r || {}), n = a.__d), n)
          return a.__E = a;
      } catch (s) {
        i = s;
      }
  throw i;
} }, kn = 0, vn = function(i) {
  return i != null && i.constructor == null;
}, et.prototype.setState = function(i, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = lt({}, this.state), typeof i == "function" && (i = i(lt({}, t), this.props)), i && lt(t, i), i != null && this.__v && (e && this._sb.push(e), ea(this));
}, et.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), ea(this));
}, et.prototype.render = O, Et = [], wn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Qi = function(i, e) {
  return i.__v.__b - e.__v.__b;
}, ui.__r = 0, xn = 0;
function Ba() {
  return (Ba = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
    }
    return i;
  }).apply(this, arguments);
}
var vl = ["context", "children"];
function wl(i) {
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
  }(i, vl);
  return Ln(e, t);
}
function xl() {
  var i = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(i), this._vdom = P(wl, Ba({}, this._props, { context: i.detail.context }), function e(t, r) {
    if (t.nodeType === 3)
      return t.data;
    if (t.nodeType !== 1)
      return null;
    var a = [], o = {}, n = 0, s = t.attributes, l = t.childNodes;
    for (n = s.length; n--; )
      s[n].name !== "slot" && (o[s[n].name] = s[n].value, o[Tn(s[n].name)] = s[n].value);
    for (n = l.length; n--; ) {
      var u = e(l[n], null), c = l[n].slot;
      c ? o[c] = P(uo, { name: c }, u) : a[n] = u;
    }
    var p = r ? P(uo, null, a) : a;
    return P(r || t.nodeName.toLowerCase(), o, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Fn : Ai)(this._vdom, this._root);
}
function Tn(i) {
  return i.replace(/-(\w)/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Cl(i, e, t) {
  if (this._vdom) {
    var r = {};
    r[i] = t = t ?? void 0, r[Tn(i)] = t, this._vdom = Ln(this._vdom, r), Ai(this._vdom, this._root);
  }
}
function Dl() {
  Ai(this._vdom = null, this._root);
}
function uo(i, e) {
  var t = this;
  return P("slot", Ba({}, i, { ref: function(r) {
    r ? (t.ref = r, t._listener || (t._listener = function(a) {
      a.stopPropagation(), a.detail.context = e;
    }, r.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Al(i, e, t, r) {
  function a() {
    var o = Reflect.construct(HTMLElement, [], a);
    return o._vdomComponent = i, o._root = r && r.shadow ? o.attachShadow({ mode: r.mode || "open" }) : o, o;
  }
  return (a.prototype = Object.create(HTMLElement.prototype)).constructor = a, a.prototype.connectedCallback = xl, a.prototype.attributeChangedCallback = Cl, a.prototype.disconnectedCallback = Dl, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), a.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(a.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(o, null, n) : (this._props || (this._props = {}), this._props[o] = n, this.connectedCallback());
      var s = typeof n;
      n != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(o, n);
    } });
  }), customElements.define(e || i.tagName || i.displayName || i.name, a);
}
var Ot, ie, Ni, co, Lr = 0, Pn = [], ai = [], ue = j, po = ue.__b, ho = ue.__r, fo = ue.diffed, go = ue.__c, mo = ue.unmount, bo = ue.__;
function $r(i, e) {
  ue.__h && ue.__h(ie, i, Lr || e), Lr = 0;
  var t = ie.__H || (ie.__H = { __: [], __h: [] });
  return i >= t.__.length && t.__.push({ __V: ai }), t.__[i];
}
function q(i) {
  return Lr = 1, Sl(Nn, i);
}
function Sl(i, e, t) {
  var r = $r(Ot++, 2);
  if (r.t = i, !r.__c && (r.__ = [t ? t(e) : Nn(void 0, e), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = ie, !ie.u)) {
    var a = function(s, l, u) {
      if (!r.__c.__H)
        return !0;
      var c = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (c.every(function(h) {
        return !h.__N;
      }))
        return !o || o.call(this, s, l, u);
      var p = !1;
      return c.forEach(function(h) {
        if (h.__N) {
          var f = h.__[0];
          h.__ = h.__N, h.__N = void 0, f !== h.__[0] && (p = !0);
        }
      }), !(!p && r.__c.props === s) && (!o || o.call(this, s, l, u));
    };
    ie.u = !0;
    var o = ie.shouldComponentUpdate, n = ie.componentWillUpdate;
    ie.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var c = o;
        o = void 0, a(s, l, u), o = c;
      }
      n && n.call(this, s, l, u);
    }, ie.shouldComponentUpdate = a;
  }
  return r.__N || r.__;
}
function I(i, e) {
  var t = $r(Ot++, 3);
  !ue.__s && Ea(t.__H, e) && (t.__ = i, t.i = e, ie.__H.__h.push(t));
}
function Bl(i, e) {
  var t = $r(Ot++, 4);
  !ue.__s && Ea(t.__H, e) && (t.__ = i, t.i = e, ie.__h.push(t));
}
function ee(i) {
  return Lr = 5, ut(function() {
    return { current: i };
  }, []);
}
function ut(i, e) {
  var t = $r(Ot++, 7);
  return Ea(t.__H, e) ? (t.__V = i(), t.i = e, t.__h = i, t.__V) : t.__;
}
function El(i, e) {
  return Lr = 8, ut(function() {
    return i;
  }, e);
}
function Rn(i) {
  var e = ie.context[i.__c], t = $r(Ot++, 9);
  return t.c = i, e ? (t.__ == null && (t.__ = !0, e.sub(ie)), e.props.value) : i.__;
}
function Fl() {
  for (var i; i = Pn.shift(); )
    if (i.__P && i.__H)
      try {
        i.__H.__h.forEach(oi), i.__H.__h.forEach(ra), i.__H.__h = [];
      } catch (e) {
        i.__H.__h = [], ue.__e(e, i.__v);
      }
}
ue.__b = function(i) {
  ie = null, po && po(i);
}, ue.__ = function(i, e) {
  i && e.__k && e.__k.__m && (i.__m = e.__k.__m), bo && bo(i, e);
}, ue.__r = function(i) {
  ho && ho(i), Ot = 0;
  var e = (ie = i.__c).__H;
  e && (Ni === ie ? (e.__h = [], ie.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = ai, t.__N = t.i = void 0;
  })) : (e.__h.forEach(oi), e.__h.forEach(ra), e.__h = [], Ot = 0)), Ni = ie;
}, ue.diffed = function(i) {
  fo && fo(i);
  var e = i.__c;
  e && e.__H && (e.__H.__h.length && (Pn.push(e) !== 1 && co === ue.requestAnimationFrame || ((co = ue.requestAnimationFrame) || Ll)(Fl)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== ai && (t.__ = t.__V), t.i = void 0, t.__V = ai;
  })), Ni = ie = null;
}, ue.__c = function(i, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(oi), t.__h = t.__h.filter(function(r) {
        return !r.__ || ra(r);
      });
    } catch (r) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], ue.__e(r, t.__v);
    }
  }), go && go(i, e);
}, ue.unmount = function(i) {
  mo && mo(i);
  var e, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      oi(r);
    } catch (a) {
      e = a;
    }
  }), t.__H = void 0, e && ue.__e(e, t.__v));
};
var _o = typeof requestAnimationFrame == "function";
function Ll(i) {
  var e, t = function() {
    clearTimeout(r), _o && cancelAnimationFrame(e), setTimeout(i);
  }, r = setTimeout(t, 100);
  _o && (e = requestAnimationFrame(t));
}
function oi(i) {
  var e = ie, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), ie = e;
}
function ra(i) {
  var e = ie;
  i.__c = i.__(), ie = e;
}
function Ea(i, e) {
  return !i || i.length !== e.length || e.some(function(t, r) {
    return t !== i[r];
  });
}
function Nn(i, e) {
  return typeof e == "function" ? e(i) : e;
}
function zl(i, e) {
  for (var t in e)
    i[t] = e[t];
  return i;
}
function yo(i, e) {
  for (var t in i)
    if (t !== "__source" && !(t in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && i[r] !== e[r])
      return !0;
  return !1;
}
function ko(i, e) {
  this.props = i, this.context = e;
}
(ko.prototype = new et()).isPureReactComponent = !0, ko.prototype.shouldComponentUpdate = function(i, e) {
  return yo(this.props, i) || yo(this.state, e);
};
var vo = j.__b;
j.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), vo && vo(i);
};
var Tl = j.__e;
j.__e = function(i, e, t, r) {
  if (i.then) {
    for (var a, o = e; o = o.__; )
      if ((a = o.__c) && a.__c)
        return e.__e == null && (e.__e = t.__e, e.__k = t.__k), a.__c(i, e);
  }
  Tl(i, e, t, r);
};
var wo = j.unmount;
function qn(i, e, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), i.__c.__H = null), (i = zl({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = e), i.__c = null), i.__k = i.__k && i.__k.map(function(r) {
    return qn(r, e, t);
  })), i;
}
function On(i, e, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(r) {
    return On(r, e, t);
  }), i.__c && i.__c.__P === e && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function qi() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Mn(i) {
  var e = i.__.__c;
  return e && e.__a && e.__a(i);
}
function Qr() {
  this.u = null, this.o = null;
}
j.unmount = function(i) {
  var e = i.__c;
  e && e.__R && e.__R(), e && 32 & i.__u && (i.type = null), wo && wo(i);
}, (qi.prototype = new et()).__c = function(i, e) {
  var t = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(t);
  var a = Mn(r.__v), o = !1, n = function() {
    o || (o = !0, t.__R = null, a ? a(s) : s());
  };
  t.__R = n;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = On(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), i.then(n, n);
}, qi.prototype.componentWillUnmount = function() {
  this.t = [];
}, qi.prototype.render = function(i, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = qn(this.__b, t, r.__O = r.__P);
    }
    this.__b = null;
  }
  var a = e.__a && P(O, null, i.fallback);
  return a && (a.__u &= -33), [P(O, null, e.__a ? null : i.children), a];
};
var xo = function(i, e, t) {
  if (++t[1] === t[0] && i.o.delete(e), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.o.size))
    for (t = i.u; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      i.u = t = t[2];
    }
};
(Qr.prototype = new et()).__a = function(i) {
  var e = this, t = Mn(e.__v), r = e.o.get(i);
  return r[0]++, function(a) {
    var o = function() {
      e.props.revealOrder ? (r.push(a), xo(e, i, r)) : a();
    };
    t ? t(o) : o();
  };
}, Qr.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = ci(i.children);
  i.revealOrder && i.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; )
    this.o.set(e[t], this.u = [1, 0, this.u]);
  return i.children;
}, Qr.prototype.componentDidUpdate = Qr.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(e, t) {
    xo(i, t, e);
  });
};
var Pl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Rl = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Nl = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ql = /[A-Z0-9]/g, Ol = typeof document < "u", Ml = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
et.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(et.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(e) {
    Object.defineProperty(this, i, { configurable: !0, writable: !0, value: e });
  } });
});
var Co = j.event;
function Il() {
}
function Vl() {
  return this.cancelBubble;
}
function jl() {
  return this.defaultPrevented;
}
j.event = function(i) {
  return Co && (i = Co(i)), i.persist = Il, i.isPropagationStopped = Vl, i.isDefaultPrevented = jl, i.nativeEvent = i;
};
var Ul = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Do = j.vnode;
j.vnode = function(i) {
  typeof i.type == "string" && function(e) {
    var t = e.props, r = e.type, a = {};
    for (var o in t) {
      var n = t[o];
      if (!(o === "value" && "defaultValue" in t && n == null || Ol && o === "children" && r === "noscript" || o === "class" || o === "className")) {
        var s = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && n === !0 ? n = "" : s === "translate" && n === "no" ? n = !1 : s === "ondoubleclick" ? o = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || Ml(t.type) ? s === "onfocus" ? o = "onfocusin" : s === "onblur" ? o = "onfocusout" : Nl.test(o) ? o = s : r.indexOf("-") === -1 && Rl.test(o) ? o = o.replace(ql, "-$&").toLowerCase() : n === null && (n = void 0) : s = o = "oninput", s === "oninput" && a[o = s] && (o = "oninputCapture"), a[o] = n;
      }
    }
    r == "select" && a.multiple && Array.isArray(a.value) && (a.value = ci(t.children).forEach(function(l) {
      l.props.selected = a.value.indexOf(l.props.value) != -1;
    })), r == "select" && a.defaultValue != null && (a.value = ci(t.children).forEach(function(l) {
      l.props.selected = a.multiple ? a.defaultValue.indexOf(l.props.value) != -1 : a.defaultValue == l.props.value;
    })), t.class && !t.className ? (a.class = t.class, Object.defineProperty(a, "className", Ul)) : (t.className && !t.class || t.class && t.className) && (a.class = a.className = t.className), e.props = a;
  }(i), i.$$typeof = Pl, Do && Do(i);
};
var Ao = j.__r;
j.__r = function(i) {
  Ao && Ao(i), i.__c;
};
var So = j.diffed;
j.diffed = function(i) {
  So && So(i);
  var e = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value);
};
var Oi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $l(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
const Hl = (...i) => {
  console != null && console.warn && (zt(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), console.warn(...i));
}, Bo = {}, ia = (...i) => {
  zt(i[0]) && Bo[i[0]] || (zt(i[0]) && (Bo[i[0]] = /* @__PURE__ */ new Date()), Hl(...i));
}, In = (i, e) => () => {
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
  i.loadNamespaces(e, In(i, t));
}, Fo = (i, e, t, r) => {
  zt(t) && (t = [t]), t.forEach((a) => {
    i.options.ns.indexOf(a) < 0 && i.options.ns.push(a);
  }), i.loadLanguages(e, In(i, r));
}, Kl = (i, e, t = {}) => !e.languages || !e.languages.length ? (ia("i18n.languages were undefined or empty", e.languages), !0) : e.hasLoadedNamespace(i, {
  lng: t.lng,
  precheck: (r, a) => {
    var o;
    if (((o = t.bindI18n) == null ? void 0 : o.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !a(r.isLanguageChangingTo, i))
      return !1;
  }
}), zt = (i) => typeof i == "string", Gl = (i) => typeof i == "object" && i !== null, Wl = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Yl = {
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
}, Jl = (i) => Yl[i], Zl = (i) => i.replace(Wl, Jl);
let aa = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Zl
};
const Xl = (i = {}) => {
  aa = {
    ...aa,
    ...i
  };
}, Ql = () => aa;
let Vn;
const eu = (i) => {
  Vn = i;
}, zr = () => Vn, tu = {
  type: "3rdParty",
  init(i) {
    Xl(i.options.react), eu(i);
  }
}, ru = zn();
class iu {
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
const au = (i, e) => {
  const t = ee();
  return I(() => {
    t.current = e ? t.current : i;
  }, [i, e]), t.current;
}, jn = (i, e, t, r) => i.getFixedT(e, t, r), ou = (i, e, t, r) => El(jn(i, e, t, r), [i, e, t, r]), se = (i, e = {}) => {
  var v, w, x, D;
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: a
  } = Rn(ru) || {}, o = t || r || zr();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new iu()), !o) {
    ia("You will need to pass in an i18next instance by using initReactI18next");
    const A = (z, R) => zt(R) ? R : Gl(R) && zt(R.defaultValue) ? R.defaultValue : Array.isArray(z) ? z[z.length - 1] : z, C = [A, {}, !1];
    return C.t = A, C.i18n = {}, C.ready = !1, C;
  }
  (v = o.options.react) != null && v.wait && ia("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const n = {
    ...Ql(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: s,
    keyPrefix: l
  } = n;
  let u = i || a || ((w = o.options) == null ? void 0 : w.defaultNS);
  u = zt(u) ? [u] : u || ["translation"], (D = (x = o.reportNamespaces).addUsedNamespaces) == null || D.call(x, u);
  const c = (o.isInitialized || o.initializedStoreOnce) && u.every((A) => Kl(A, o, n)), p = ou(o, e.lng || null, n.nsMode === "fallback" ? u : u[0], l), h = () => p, f = () => jn(o, e.lng || null, n.nsMode === "fallback" ? u : u[0], l), [b, g] = q(h);
  let m = u.join();
  e.lng && (m = `${e.lng}${m}`);
  const k = au(m), _ = ee(!0);
  I(() => {
    const {
      bindI18n: A,
      bindI18nStore: C
    } = n;
    _.current = !0, !c && !s && (e.lng ? Fo(o, e.lng, u, () => {
      _.current && g(f);
    }) : Eo(o, u, () => {
      _.current && g(f);
    })), c && k && k !== m && _.current && g(f);
    const z = () => {
      _.current && g(f);
    };
    return A && (o == null || o.on(A, z)), C && (o == null || o.store.on(C, z)), () => {
      _.current = !1, o && (A == null || A.split(" ").forEach((R) => o.off(R, z))), C && o && C.split(" ").forEach((R) => o.store.off(R, z));
    };
  }, [o, m]), I(() => {
    _.current && c && g(h);
  }, [o, l, c]);
  const y = [b, o, c];
  if (y.t = b, y.i18n = o, y.ready = c, c || !c && !s)
    return y;
  throw new Promise((A) => {
    e.lng ? Fo(o, e.lng, u, () => A()) : Eo(o, u, () => A());
  });
};
var nu = Symbol.for("preact-signals");
function Si() {
  if (bt > 1)
    bt--;
  else {
    for (var i, e = !1; xr !== void 0; ) {
      var t = xr;
      for (xr = void 0, oa++; t !== void 0; ) {
        var r = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && $n(t))
          try {
            t.c();
          } catch (a) {
            e || (i = a, e = !0);
          }
        t = r;
      }
    }
    if (oa = 0, bt--, e)
      throw i;
  }
}
function su(i) {
  if (bt > 0)
    return i();
  bt++;
  try {
    return i();
  } finally {
    Si();
  }
}
var X = void 0, xr = void 0, bt = 0, oa = 0, di = 0;
function Un(i) {
  if (X !== void 0) {
    var e = i.n;
    if (e === void 0 || e.t !== X)
      return e = { i: 0, S: i, p: X.s, n: void 0, t: X, e: void 0, x: void 0, r: e }, X.s !== void 0 && (X.s.n = e), X.s = e, i.n = e, 32 & X.f && i.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = X.s, e.n = void 0, X.s.n = e, X.s = e), e;
  }
}
function be(i) {
  this.v = i, this.i = 0, this.n = void 0, this.t = void 0;
}
be.prototype.brand = nu;
be.prototype.h = function() {
  return !0;
};
be.prototype.S = function(i) {
  this.t !== i && i.e === void 0 && (i.x = this.t, this.t !== void 0 && (this.t.e = i), this.t = i);
};
be.prototype.U = function(i) {
  if (this.t !== void 0) {
    var e = i.e, t = i.x;
    e !== void 0 && (e.x = t, i.e = void 0), t !== void 0 && (t.e = e, i.x = void 0), i === this.t && (this.t = t);
  }
};
be.prototype.subscribe = function(i) {
  var e = this;
  return La(function() {
    var t = e.value, r = X;
    X = void 0;
    try {
      i(t);
    } finally {
      X = r;
    }
  });
};
be.prototype.valueOf = function() {
  return this.value;
};
be.prototype.toString = function() {
  return this.value + "";
};
be.prototype.toJSON = function() {
  return this.value;
};
be.prototype.peek = function() {
  var i = X;
  X = void 0;
  try {
    return this.value;
  } finally {
    X = i;
  }
};
Object.defineProperty(be.prototype, "value", { get: function() {
  var i = Un(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (oa > 100)
      throw new Error("Cycle detected");
    this.v = i, this.i++, di++, bt++;
    try {
      for (var e = this.t; e !== void 0; e = e.x)
        e.t.N();
    } finally {
      Si();
    }
  }
} });
function $e(i) {
  return new be(i);
}
function $n(i) {
  for (var e = i.s; e !== void 0; e = e.n)
    if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
      return !0;
  return !1;
}
function Hn(i) {
  for (var e = i.s; e !== void 0; e = e.n) {
    var t = e.S.n;
    if (t !== void 0 && (e.r = t), e.S.n = e, e.i = -1, e.n === void 0) {
      i.s = e;
      break;
    }
  }
}
function Kn(i) {
  for (var e = i.s, t = void 0; e !== void 0; ) {
    var r = e.p;
    e.i === -1 ? (e.S.U(e), r !== void 0 && (r.n = e.n), e.n !== void 0 && (e.n.p = r)) : t = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = r;
  }
  i.s = t;
}
function nr(i) {
  be.call(this, void 0), this.x = i, this.s = void 0, this.g = di - 1, this.f = 4;
}
(nr.prototype = new be()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === di))
    return !0;
  if (this.g = di, this.f |= 1, this.i > 0 && !$n(this))
    return this.f &= -2, !0;
  var i = X;
  try {
    Hn(this), X = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return X = i, Kn(this), this.f &= -2, !0;
};
nr.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.S(e);
  }
  be.prototype.S.call(this, i);
};
nr.prototype.U = function(i) {
  if (this.t !== void 0 && (be.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.U(e);
  }
};
nr.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i = this.t; i !== void 0; i = i.x)
      i.t.N();
  }
};
Object.defineProperty(nr.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var i = Un(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function lu(i) {
  return new nr(i);
}
function Gn(i) {
  var e = i.u;
  if (i.u = void 0, typeof e == "function") {
    bt++;
    var t = X;
    X = void 0;
    try {
      e();
    } catch (r) {
      throw i.f &= -2, i.f |= 8, Fa(i), r;
    } finally {
      X = t, Si();
    }
  }
}
function Fa(i) {
  for (var e = i.s; e !== void 0; e = e.n)
    e.S.U(e);
  i.x = void 0, i.s = void 0, Gn(i);
}
function uu(i) {
  if (X !== this)
    throw new Error("Out-of-order effect");
  Kn(this), X = i, this.f &= -2, 8 & this.f && Fa(this), Si();
}
function Hr(i) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
Hr.prototype.c = function() {
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
Hr.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Gn(this), Hn(this), bt++;
  var i = X;
  return X = this, uu.bind(this, i);
};
Hr.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = xr, xr = this);
};
Hr.prototype.d = function() {
  this.f |= 8, 1 & this.f || Fa(this);
};
function La(i) {
  var e = new Hr(i);
  try {
    e.c();
  } catch (t) {
    throw e.d(), t;
  }
  return e.d.bind(e);
}
var Mi;
function sr(i, e) {
  j[i] = e.bind(null, j[i] || function() {
  });
}
function pi(i) {
  Mi && Mi(), Mi = i && i.S();
}
function Wn(i) {
  var e = this, t = i.data, r = du(t);
  r.value = t;
  var a = ut(function() {
    for (var o = e.__v; o = o.__; )
      if (o.__c) {
        o.__c.__$f |= 4;
        break;
      }
    return e.__$u.c = function() {
      var n, s = e.__$u.S(), l = a.value;
      s(), vn(l) || ((n = e.base) == null ? void 0 : n.nodeType) !== 3 ? (e.__$f |= 1, e.setState({})) : e.base.data = l;
    }, lu(function() {
      var n = r.value.value;
      return n === 0 ? 0 : n === !0 ? "" : n || "";
    });
  }, []);
  return a.value;
}
Wn.displayName = "_st";
Object.defineProperties(be.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: Wn }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
sr("__b", function(i, e) {
  if (typeof e.type == "string") {
    var t, r = e.props;
    for (var a in r)
      if (a !== "children") {
        var o = r[a];
        o instanceof be && (t || (e.__np = t = {}), t[a] = o, r[a] = o.peek());
      }
  }
  i(e);
});
sr("__r", function(i, e) {
  pi();
  var t, r = e.__c;
  r && (r.__$f &= -2, (t = r.__$u) === void 0 && (r.__$u = t = function(a) {
    var o;
    return La(function() {
      o = this;
    }), o.c = function() {
      r.__$f |= 1, r.setState({});
    }, o;
  }())), pi(t), i(e);
});
sr("__e", function(i, e, t, r) {
  pi(), i(e, t, r);
});
sr("diffed", function(i, e) {
  pi();
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
        var u = o[l], c = r[l];
        u === void 0 ? (u = cu(t, l, c, a), o[l] = u) : u.o(c, a);
      }
    }
  }
  i(e);
});
function cu(i, e, t, r) {
  var a = e in i && i.ownerSVGElement === void 0, o = $e(t);
  return { o: function(n, s) {
    o.value = n, r = s;
  }, d: La(function() {
    var n = o.value.value;
    r[e] !== n && (r[e] = n, a ? i[e] = n : n ? i.setAttribute(e, n) : i.removeAttribute(e));
  }) };
}
sr("unmount", function(i, e) {
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
sr("__h", function(i, e, t, r) {
  (r < 3 || r === 9) && (e.__$f |= 2), i(e, t, r);
});
et.prototype.shouldComponentUpdate = function(i, e) {
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
function du(i) {
  return ut(function() {
    return $e(i);
  }, []);
}
const na = $e(!1), Y = $e(null), Gt = $e([]), Ie = $e(!1), Wt = $e([]), Ve = $e(!1), Bi = $e(null), ye = $e(null), pu = () => {
  su(() => {
    Y.value = null, Gt.value = [], Ie.value = !1, Wt.value = [], Ve.value = !1, Bi.value = null, ye.value = null;
  });
}, za = "bm_currentBike", hu = "v2", fu = "https://cdn.bikematrix.io", Lo = {
  // Shopify specific
  isShopify: !1,
  skuField: "sku",
  // Bike Selector
  apiUrl: "https://bikematrix-20230522-1515-dev-apim.azure-api.net/proxy/v3/",
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
  logLevel: "none",
  // Virtual Workshop
  virtualWorkshop: !0
}, Tt = function(i) {
  return new URL(i, fu).toString();
};
function Yn(i) {
  var e, t, r = "";
  if (typeof i == "string" || typeof i == "number")
    r += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var a = i.length;
      for (e = 0; e < a; e++)
        i[e] && (t = Yn(i[e])) && (r && (r += " "), r += t);
    } else
      for (t in i)
        i[t] && (r && (r += " "), r += t);
  return r;
}
function gu() {
  for (var i, e, t = 0, r = "", a = arguments.length; t < a; t++)
    (i = arguments[t]) && (e = Yn(i)) && (r && (r += " "), r += e);
  return r;
}
const Ta = "-";
function mu(i) {
  const e = _u(i), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = i;
  function a(n) {
    const s = n.split(Ta);
    return s[0] === "" && s.length !== 1 && s.shift(), Jn(s, e) || bu(n);
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
function Jn(i, e) {
  var n;
  if (i.length === 0)
    return e.classGroupId;
  const t = i[0], r = e.nextPart.get(t), a = r ? Jn(i.slice(1), r) : void 0;
  if (a)
    return a;
  if (e.validators.length === 0)
    return;
  const o = i.join(Ta);
  return (n = e.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : n.classGroupId;
}
const zo = /^\[(.+)\]$/;
function bu(i) {
  if (zo.test(i)) {
    const e = zo.exec(i)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function _u(i) {
  const {
    theme: e,
    prefix: t
  } = i, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ku(Object.entries(i.classGroups), t).forEach(([o, n]) => {
    sa(n, r, o, e);
  }), r;
}
function sa(i, e, t, r) {
  i.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? e : To(e, a);
      o.classGroupId = t;
      return;
    }
    if (typeof a == "function") {
      if (yu(a)) {
        sa(a(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: a,
        classGroupId: t
      });
      return;
    }
    Object.entries(a).forEach(([o, n]) => {
      sa(n, To(e, o), t, r);
    });
  });
}
function To(i, e) {
  let t = i;
  return e.split(Ta).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}
function yu(i) {
  return i.isThemeGetter;
}
function ku(i, e) {
  return e ? i.map(([t, r]) => {
    const a = r.map((o) => typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([n, s]) => [e + n, s])) : o);
    return [t, a];
  }) : i;
}
function vu(i) {
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
const Zn = "!";
function wu(i) {
  const e = i.separator, t = e.length === 1, r = e[0], a = e.length;
  return function(n) {
    const s = [];
    let l = 0, u = 0, c;
    for (let g = 0; g < n.length; g++) {
      let m = n[g];
      if (l === 0) {
        if (m === r && (t || n.slice(g, g + a) === e)) {
          s.push(n.slice(u, g)), u = g + a;
          continue;
        }
        if (m === "/") {
          c = g;
          continue;
        }
      }
      m === "[" ? l++ : m === "]" && l--;
    }
    const p = s.length === 0 ? n : n.substring(u), h = p.startsWith(Zn), f = h ? p.substring(1) : p, b = c && c > u ? c - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: f,
      maybePostfixModifierPosition: b
    };
  };
}
function xu(i) {
  if (i.length <= 1)
    return i;
  const e = [];
  let t = [];
  return i.forEach((r) => {
    r[0] === "[" ? (e.push(...t.sort(), r), t = []) : t.push(r);
  }), e.push(...t.sort()), e;
}
function Cu(i) {
  return {
    cache: vu(i.cacheSize),
    splitModifiers: wu(i),
    ...mu(i)
  };
}
const Du = /\s+/;
function Au(i, e) {
  const {
    splitModifiers: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = e, o = /* @__PURE__ */ new Set();
  return i.trim().split(Du).map((n) => {
    const {
      modifiers: s,
      hasImportantModifier: l,
      baseClassName: u,
      maybePostfixModifierPosition: c
    } = t(n);
    let p = r(c ? u.substring(0, c) : u), h = !!c;
    if (!p) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: n
        };
      if (p = r(u), !p)
        return {
          isTailwindClass: !1,
          originalClassName: n
        };
      h = !1;
    }
    const f = xu(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? f + Zn : f,
      classGroupId: p,
      originalClassName: n,
      hasPostfixModifier: h
    };
  }).reverse().filter((n) => {
    if (!n.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: l,
      hasPostfixModifier: u
    } = n, c = s + l;
    return o.has(c) ? !1 : (o.add(c), a(l, u).forEach((p) => o.add(s + p)), !0);
  }).reverse().map((n) => n.originalClassName).join(" ");
}
function Su() {
  let i = 0, e, t, r = "";
  for (; i < arguments.length; )
    (e = arguments[i++]) && (t = Xn(e)) && (r && (r += " "), r += t);
  return r;
}
function Xn(i) {
  if (typeof i == "string")
    return i;
  let e, t = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (e = Xn(i[r])) && (t && (t += " "), t += e);
  return t;
}
function Bu(i, ...e) {
  let t, r, a, o = n;
  function n(l) {
    const u = e.reduce((c, p) => p(c), i());
    return t = Cu(u), r = t.cache.get, a = t.cache.set, o = s, s(l);
  }
  function s(l) {
    const u = r(l);
    if (u)
      return u;
    const c = Au(l, t);
    return a(l, c), c;
  }
  return function() {
    return o(Su.apply(null, arguments));
  };
}
function re(i) {
  const e = (t) => t[i] || [];
  return e.isThemeGetter = !0, e;
}
const Qn = /^\[(?:([a-z-]+):)?(.+)\]$/i, Eu = /^\d+\/\d+$/, Fu = /* @__PURE__ */ new Set(["px", "full", "screen"]), Lu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Pu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ru = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function at(i) {
  return Ft(i) || Fu.has(i) || Eu.test(i);
}
function pt(i) {
  return lr(i, "length", Uu);
}
function Ft(i) {
  return !!i && !Number.isNaN(Number(i));
}
function ei(i) {
  return lr(i, "number", Ft);
}
function cr(i) {
  return !!i && Number.isInteger(Number(i));
}
function Nu(i) {
  return i.endsWith("%") && Ft(i.slice(0, -1));
}
function H(i) {
  return Qn.test(i);
}
function ht(i) {
  return Lu.test(i);
}
const qu = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Ou(i) {
  return lr(i, qu, es);
}
function Mu(i) {
  return lr(i, "position", es);
}
const Iu = /* @__PURE__ */ new Set(["image", "url"]);
function Vu(i) {
  return lr(i, Iu, Hu);
}
function ju(i) {
  return lr(i, "", $u);
}
function dr() {
  return !0;
}
function lr(i, e, t) {
  const r = Qn.exec(i);
  return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : t(r[2]) : !1;
}
function Uu(i) {
  return zu.test(i) && !Tu.test(i);
}
function es() {
  return !1;
}
function $u(i) {
  return Pu.test(i);
}
function Hu(i) {
  return Ru.test(i);
}
function Ku() {
  const i = re("colors"), e = re("spacing"), t = re("blur"), r = re("brightness"), a = re("borderColor"), o = re("borderRadius"), n = re("borderSpacing"), s = re("borderWidth"), l = re("contrast"), u = re("grayscale"), c = re("hueRotate"), p = re("invert"), h = re("gap"), f = re("gradientColorStops"), b = re("gradientColorStopPositions"), g = re("inset"), m = re("margin"), k = re("opacity"), _ = re("padding"), y = re("saturate"), v = re("scale"), w = re("sepia"), x = re("skew"), D = re("space"), A = re("translate"), C = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", H, e], N = () => [H, e], M = () => ["", at, pt], U = () => ["auto", Ft, H], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], F = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], E = () => ["", "0", H], L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [Ft, ei], W = () => [Ft, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [dr],
      spacing: [at, pt],
      blur: ["none", "", ht, H],
      brightness: $(),
      borderColor: [i],
      borderRadius: ["none", "", "full", ht, H],
      borderSpacing: N(),
      borderWidth: M(),
      contrast: $(),
      grayscale: E(),
      hueRotate: W(),
      invert: E(),
      gap: N(),
      gradientColorStops: [i],
      gradientColorStopPositions: [Nu, pt],
      inset: R(),
      margin: R(),
      opacity: $(),
      padding: N(),
      saturate: $(),
      scale: $(),
      sepia: E(),
      skew: W(),
      space: N(),
      translate: N()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", H]
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
        columns: [ht]
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
        object: [...B(), H]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
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
        z: ["auto", cr, H]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: R()
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
        flex: ["1", "auto", "initial", "none", H]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: E()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: E()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", cr, H]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [dr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", cr, H]
        }, H]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [dr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [cr, H]
        }, H]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        "auto-cols": ["auto", "min", "max", "fr", H]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", H]
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
        justify: ["normal", ...V()]
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
        content: ["normal", ...V(), "baseline"]
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
        "place-content": [...V(), "baseline"]
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
        p: [_]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [_]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [_]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [_]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [_]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [_]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [_]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [_]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [_]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [H, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [H, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [ht]
        }, ht]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [H, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [H, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [H, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [H, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ht, pt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ei]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [dr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ft, ei]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", at, H]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", H]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", H]
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
        text: [i]
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
        decoration: [...F(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", at, pt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", at, H]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
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
        content: ["none", H]
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
        bg: [...B(), Mu]
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
        bg: ["auto", "cover", "contain", Ou]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Vu]
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
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...F(), "hidden"]
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
        divide: F()
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
        outline: ["", ...F()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [at, H]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [at, pt]
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
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [at, pt]
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
        shadow: ["", "inner", "none", ht, ju]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [dr]
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
        "mix-blend": T()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
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
        "drop-shadow": ["", "none", ht, H]
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
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y]
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
        "backdrop-invert": [p]
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
        "backdrop-saturate": [y]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
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
        ease: ["linear", "in", "out", "in-out", H]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", H]
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
        rotate: [cr, H]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [x]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [x]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", H]
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
        stroke: [at, pt, ei]
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
const Gu = /* @__PURE__ */ Bu(Ku);
function K(...i) {
  return Gu(gu(i));
}
const Wu = {
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
    revertComponent: "workshop/reverComponent",
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
class Oe {
  constructor(e, t, r) {
    this._apiUrl = r ? window.location.origin + "/apps/proxy/api/" : e, this._apiKey = t ?? "", this._apiType = r ? "shopify" : "bikematrix";
  }
  getEndpoint(e) {
    return Wu[this._apiType][e];
  }
  async getBikeBrands() {
    const e = this.getEndpoint("bikeBrands"), t = await this.makeRequest(e);
    return t.success ? t.data : (console.error(t.error), []);
  }
  async getBikeModels(e) {
    if (!e)
      return console.log("No bike brand selected."), [];
    const t = this.getEndpoint("bikeModels"), r = await this.makeRequest(t, {
      params: {
        bikeBrandId: e
      }
    });
    return r.success ? r.data : (console.error(r.error), []);
  }
  async getBikeFrameSeries(e) {
    if (!e)
      return console.log("No bike model selected."), [];
    const t = this.getEndpoint("framesSeries"), r = await this.makeRequest(t, {
      params: {
        bikeModelId: e
      }
    });
    return r.success ? r.data : (console.error(r.error), []);
  }
  async getBikeSpecs(e) {
    if (!e)
      return console.log("No bike frame series selected."), [];
    const t = this.getEndpoint("bikeSpecs"), r = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return r.success ? r.data : (console.error(r.error), []);
  }
  async getYears(e) {
    if (!e)
      return console.log("No bike frame series selected."), [];
    const t = this.getEndpoint("bikeSpecYears"), r = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return r.success ? r.data : (console.error(r.error), []);
  }
  async getFrameSizes(e, t, r) {
    if (!e || !t)
      return console.log("No bike frame series or bike spec selected."), [];
    const a = this.getEndpoint("bikeSpecSizes"), o = await this.makeRequest(a, {
      params: {
        bikeModelSpecId: e,
        bikeSpec: t,
        year: r
      }
    });
    return o.success ? o.data : (console.error(o.error), []);
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
      return o.success ? o.data : (console.error(o.error), []);
    } else
      return console.log("No bike frame series and bike spec or year selected."), [];
  }
  async getBrandProductCategories(e) {
    if (e) {
      const t = this.getEndpoint("bikeBrandProductCategories"), r = await this.makeRequest(t, {
        params: {
          bikeBrandId: e
        }
      });
      return r.success ? r.data : (console.error(r.error), []);
    } else
      return console.log("No brand selected."), [];
  }
  async checkSkuCompatibility(e, t, r) {
    if (e && t) {
      const a = this.getEndpoint("checkSku") + `/${e}/${t}/${r}`, o = await this.makeRequest(a);
      return o.success ? o.data : (console.error(o.error), []);
    } else
      return console.log("No bike key and sku passed."), [];
  }
  async checkSkusCompatibility(e, t, r) {
    if (e && t) {
      const a = this.getEndpoint("checkSkus") + `/${e}/${t}/${r}`, o = await this.makeRequest(a);
      return o.success ? o.data : (console.error(o.error), []);
    } else
      return console.log("No bike key and list of skus passed."), [];
  }
  async checkSkusCompatibilityWithResults(e, t, r, a = {}) {
    if (e && t) {
      const o = this.getEndpoint("checkSkusWithResults") + `/${e}/${r}`, n = await this.makeRequest(o, {
        body: JSON.stringify(t),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...this._apiKey && {
            "bm-subscription-key": this._apiKey
          }
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
    console.log(e);
    const t = this.getEndpoint("bikeBom"), r = await this.makeRequest(t, {
      params: {
        bikeKey: e
      }
    });
    return r.success ? {
      data: r.data,
      success: r.success
    } : (console.error(r.error), {
      success: r.success,
      error: "error_get_bike_bom"
    });
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
    } : (console.error(r.error), {
      success: r.success,
      error: "error_add_custom_bike"
    });
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
    } : (console.error(a.error), {
      success: a.success,
      error: "error_find_products"
    });
  }
  /**
   * Add a component to a custom bike
   * @param _bikeKey: string
   * @param _productCategoryId: number
   * @param productId: number
   * @returns Success or fail
   */
  async addComponent(e, t, r) {
    if (!e || !t || !r)
      return {
        success: !1,
        error: "error_generic addComponent"
      };
    const a = this.getEndpoint("addComponent"), o = await this.makeRequest(a, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        productCategoryId: t,
        productId: r
      }
    });
    return o.success ? {
      data: o.data,
      success: o.success
    } : (console.error(o.error), {
      success: o.success,
      error: "error_add_component"
    });
  }
  /**
   * Remove component from a custom bike
   * @param _bikeKey: string
   * @param _productCategoryId: number
   * @returns Success or fail
   */
  async removeComponent(e, t) {
    if (!e || !t)
      return {
        success: !1,
        error: "error_generic removeComponent"
      };
    const r = this.getEndpoint("removeComponent"), a = await this.makeRequest(r, {
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
    } : (console.error(a.error), {
      success: a.success,
      error: "error_remove_component"
    });
  }
  /**
   * Revert the changes a user has made to a component
   * @param _bikeKey: string
   * @param _productCategoryId: number
   * @returns Success or fail
   */
  async revertComponent(e, t) {
    if (!e || !t)
      return {
        success: !1,
        error: "error_generic revertComponent"
      };
    const r = this.getEndpoint("revertComponent"), a = await this.makeRequest(r, {
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
    } : (console.error(a.error), {
      success: a.success,
      error: "error_revert_component"
    });
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
    } : (console.error(a.error), {
      success: a.success,
      error: "error_save_custom_bike"
    });
  }
  /**
   * I actually don't know what this request is for..
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
    } : (console.error(a.error), {
      success: a.success,
      error: "error_update_custom_bike"
    });
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
    } : (console.error(a.error), {
      success: a.success,
      error: "error_update_custom_bike_name"
    });
  }
  async makeRequest(e, t = {}) {
    console.log(e, this._apiType, this._apiUrl);
    const r = new URL(e, this._apiUrl), a = {
      "Cache-Control": "no-cache",
      ...this._apiKey && {
        "bm-subscription-key": this._apiKey
      }
    };
    typeof t.params == "object" && (Object.keys(t.params).forEach((n) => {
      t.params[n] && r.searchParams.set(n, t.params[n]);
    }), delete t.params);
    let o;
    try {
      const n = {
        headers: a,
        ...t
      };
      t.signal && (n.signal = t.signal);
      const s = await fetch(r, n);
      o = {
        success: !0,
        data: await s.json().catch(() => {
          throw new Error("Request failed: " + (s.statusText || "Status" + s.status));
        })
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
async function ts(i) {
  const {
    categories: e,
    collections: t,
    apiUrl: r,
    apiKey: a,
    isShopify: o
  } = window.BikeMatrix.getConfig(), n = JSON.parse(sessionStorage.getItem("bm_categories") || "null"), s = JSON.parse(localStorage.getItem(za) || "null"), l = new Oe(r, a, o);
  let u = [];
  if (!n || (n == null ? void 0 : n.key) !== (s == null ? void 0 : s.key)) {
    const c = await l.getBrandProductCategories(i);
    u = e.filter((h) => !!h.collection && c.some((f) => f.product_Category.toLowerCase() === h.title.toLowerCase())).map((h) => t.filter((b) => h.collection.split(",").map((g) => g.trim().toLowerCase()).includes(b.title.toLowerCase())).map((b) => ({
      title: b.title,
      text_id: h.text_id,
      handle: b.handle,
      url: b.url
    }))).flat(), u = u.filter((h, f, b) => f === b.findIndex((g) => g.title === h.title && g.text_id === h.text_id && g.handle === h.handle && g.url === h.url)), sessionStorage.setItem("bm_categories", JSON.stringify({
      key: s == null ? void 0 : s.key,
      collections: u
    }));
  } else
    u = n.collections;
  return u;
}
const rs = class _r {
  constructor() {
    this.initialized = !1, this.currentBike = null, this.activeSubscription = null, this.components = [], this.config = Lo;
  }
  // Initialize with optional config
  async initialize(e) {
    this.components = [], this.initialized && this.cleanup(), e && (this.config = {
      ...this.config,
      ...e
    }), this.initializeConfig(), this.service = new Oe(this.config.apiUrl, this.config.apiKey, this.config.isShopify), this.initializeActiveSubscription(), localStorage.bm_currentBike && (this.currentBike = JSON.parse(localStorage.bm_currentBike)), this.setupEventListeners(), this.registerComponents(), this.initialized = !0, na.value = !0, this.config.logLevel === "verbose" && console.log("BikeMatrixCore initialized");
  }
  // Singleton pattern to ensure a single global instance
  static getInstance() {
    return _r.instance || (_r.instance = new _r()), _r.instance;
  }
  registerComponents() {
    const e = ["bikematrix-bikeselector", "bikematrix-productresult", "bikematrix-collectionresult", "bikematrix-compatibilitylabel", "bikematrix-compatiblelist", "bikematrix-bikeselectorbanner"];
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
    this.removeEventListeners(), pu();
  }
  // Full destroy for complete cleanup
  async destroy() {
    this.cleanup(), this.service = null, this.currentBike = null, this.activeSubscription = null, this.config = {
      ...Lo
    }, this.initialized = !1, na.value = !1, this.resetComponents();
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
    document.querySelectorAll('script[type="application/json"][data-bikematrix-config]').forEach((t) => {
      if (t != null && t.textContent)
        try {
          this.config = {
            ...this.config,
            ...JSON.parse(t.textContent)
          };
        } catch {
          console.error("Invalid BikeMatrix configuration"), console.log("configScript ", t.textContent);
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
    const t = document.querySelector("bikematrix-productresult[data-sku]");
    t && t.setAttribute("data-sku", e), this.config.sku = e;
  }
  // ===== Legacy methods ===== //
  ResetSelectedBikeIndicator() {
    var e, t;
    this.currentBike === null ? (e = window.bm_selectBikeButton) == null || e.classList.remove("show-selected") : (t = window.bm_selectBikeButton) == null || t.classList.add("show-selected");
  }
  ChangeBike() {
    this.config.logLevel === "verbose" && console.log("ChangeBike() Method Called"), !(Ie.value === !0 || Ve.value === !0) && (Ie.value = !0, Ve.value = !0, Gt.value = [], Wt.value = [], console.log("ChangeBike updateBikeSignal..."), this.updateBikeSignal().then(() => {
      this.config.logLevel === "verbose" && console.log("Bike Signal Updated: ", JSON.stringify(Y.value, null, 2)), this.ResetSelectedBikeIndicator(), this.RefreshCompatibleSkus().then(() => {
        document.dispatchEvent(new Event("RefreshCompatibility", {
          bubbles: !0,
          composed: !0
        }));
      });
    }));
  }
  async RefreshCompatibleSkus() {
    var t, r;
    const e = `${(t = Y.value) == null ? void 0 : t.key}:${this.config.currentCollectionHandle}:${hu}`;
    switch (this.config.pageType) {
      case "collection":
        const a = !!Y.value && ((r = Y.value.compatibleCollections) == null ? void 0 : r.find((o) => o.handle === this.config.currentCollectionHandle));
        this.config.logLevel === "verbose" && console.log("Refresh Compatible SKUs. hasCompatibleCollection: ", a), a ? (await this.RefreshCollectionPageSkus(e), await this.RefreshCollectionListSkus(e)) : (Ie.value = !1, Ve.value = !1);
        break;
      case "search":
      case "index":
        Ie.value = !1, this.config.pageType === "index" && this.config.showHomePageCollection || this.config.pageType === "search" && this.config.showSearchPageCollection ? await this.RefreshCollectionPageSkus(e) : Ve.value = !1;
        break;
      default:
        Ie.value = !1, Ve.value = !1;
        break;
    }
  }
  async RefreshCollectionPageSkus(e) {
    var n, s;
    let t = document.getElementsByTagName("bikematrix-collectionresult"), a = Array.from(t).map((l) => {
      const u = this.config.skuField === "barcode" ? l.getAttribute("data-product-barcodes") : this.config.skuField === "metafield" ? l.getAttribute("data-product-metafields") : l.getAttribute("data-product-skus") || "";
      return u == null ? void 0 : u.split(",").filter((c) => !!c);
    }).flat();
    this.config.logLevel === "verbose" && console.log("Refresh Collection Page SKUs. SKUs: ", JSON.stringify(a), null, 2);
    var o = ((n = zr()) == null ? void 0 : n.language) || "en-GB";
    if (a) {
      const l = await this.service.checkSkusCompatibilityWithResults((s = Y.value) == null ? void 0 : s.key, a, o);
      Wt.value = l;
    } else
      Wt.value = [];
    Ve.value = !1;
  }
  async RefreshCollectionListSkus(e) {
    var a, o;
    var t = JSON.parse(sessionStorage.getItem(e));
    if (t)
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from Session: ", JSON.stringify(t), null, 2), Gt.value = t;
    else {
      const n = Object.values(this.config.products || {}).map((c) => c.skus).flat();
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(n), null, 2);
      var r = ((a = zr()) == null ? void 0 : a.language) || "en-GB";
      const s = new AbortController(), l = s.signal, u = () => s.abort();
      window.addEventListener("beforeunload", u);
      try {
        if (!((o = Y.value) != null && o.key))
          throw new Error("BikeSignal key is undefined");
        const c = await this.service.checkSkusCompatibilityWithResults(Y.value.key, n, r, {
          signal: l
        });
        if (this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(c)), console.log("function RefreshCompatibleSkus() operation aborted"), l.aborted) {
          console.log("function RefreshCompatibleSkus() operation aborted");
          return;
        }
        sessionStorage.setItem(e, JSON.stringify(c)), Gt.value = c;
      } catch (c) {
        c.name === "AbortError" ? console.log("function RefreshCompatibleSkus() fetch aborted") : console.error("function RefreshCompatibleSkus() fetch error", c);
      } finally {
        window.removeEventListener("beforeunload", u);
      }
    }
    Ie.value = !1;
  }
  updateActiveSubscription(e) {
    const t = !!(e != null && e.activeSubscription);
    sessionStorage.setItem("bm_activeSubscription", JSON.stringify(t)), this.activeSubscription = t;
  }
  async updateBikeSignal() {
    const e = localStorage.getItem(za) || "null", t = JSON.parse(e);
    if (this.currentBike = t, t == null) {
      Y.value = null;
      return;
    }
    const r = await ts(t == null ? void 0 : t.brandId);
    t.compatibleCollections = r, Y.value = t, this.config.logLevel === "verbose" && console.log("Bike Changed: ", JSON.stringify(Y.value, null, 2));
  }
};
rs.instance = null;
let Yu = rs;
const Tr = (i) => /* @__PURE__ */ P("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M1.53553 8.60658L5.07107 5.07104M5.07107 5.07104L8.6066 1.53551M5.07107 5.07104L8.6066 8.60658M5.07107 5.07104L1.53553 1.53551", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
var Ju = 0;
function d(i, e, t, r, a, o) {
  var n, s, l = {};
  for (s in e)
    s == "ref" ? n = e[s] : l[s] = e[s];
  var u = { type: i, props: l, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Ju, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof i == "function" && (n = i.defaultProps))
    for (s in n)
      l[s] === void 0 && (l[s] = n[s]);
  return j.vnode && j.vnode(u), u;
}
function Qt() {
  document.dispatchEvent(new Event("BmToggleModal"));
}
function Zu({
  children: i
}) {
  return I(() => {
    var o;
    const e = document.body, t = document.getElementById("bm_selectBikeButton"), r = (o = document.getElementsByTagName("bikematrix-bikeselector")) == null ? void 0 : o[0], a = (n) => {
      n.preventDefault(), e.classList.toggle("bm-modal-active"), r.classList.toggle("active");
    };
    return document.addEventListener("BmToggleModal", a), t == null || t.addEventListener("click", a), () => {
      document.removeEventListener("BmToggleModal", a), t == null || t.removeEventListener("click", a);
    };
  }, []), d(O, {
    children: [d("div", {
      onClick: () => {
        Qt();
      },
      class: K("overlay", "fixed cursor-pointer inset-0 z-[2147483645] bg-black/40 transition-all duration-500 sm:duration-200")
    }), d("div", {
      className: K("modal", "fixed pointer-events-none inset-0 mx-auto justify-end z-[2147483646] flex flex-col items-center outline-none transition-all duration-500 sm:duration-200 ease-in-out", "sm:justify-center"),
      children: d("div", {
        className: "flex sm:px-2 pointer-events-auto max-sm:max-h-[96%] sm:max-h-[90%] max-sm:h-[89vh] max-w-lg sm:max-w-[640px] flex-col items-center max-sm:flex-1 w-full bg-white rounded-t-3xl sm:rounded-xl shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.06)]",
        children: [d("div", {
          className: "sm:hidden mx-auto mt-4 h-[6px] w-[100px] rounded-full bg-gray-400/50",
          onClick: Qt
        }), d("div", {
          className: "sm:hidden h-[10px]"
        }), d("div", {
          className: "relative flex flex-col w-full sm:h-full max-sm:flex-none max-sm:grow",
          children: d("div", {
            class: "modal-content max-sm:absolute sm:h-full max-sm:inset-0 overflow-x-hidden overflow-y-auto  px-8 sm:px-6",
            children: i
          })
        })]
      })
    })]
  });
}
const rt = (i) => /* @__PURE__ */ P("svg", { width: 7, height: 12, viewBox: "0 0 7 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M1 11L6 6L1 1", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Xu = (i) => /* @__PURE__ */ P("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("circle", { cx: 15.5, cy: 15.5, r: 15.5, fill: "#030712" }), /* @__PURE__ */ P("path", { d: "M10.1974 17.1317L13.9955 20.4461L20.8639 10.8909", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Qu = (i) => /* @__PURE__ */ P("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("g", { clipPath: "url(#clip0_64_2)" }, /* @__PURE__ */ P("path", { d: "M30.5 15.5C30.5 23.7843 23.7843 30.5 15.5 30.5C7.21573 30.5 0.5 23.7843 0.5 15.5C0.5 7.21573 7.21573 0.5 15.5 0.5C23.7843 0.5 30.5 7.21573 30.5 15.5Z", fill: "white", stroke: "#D1D5DB" })), /* @__PURE__ */ P("path", { d: "M23.983 11.132C23.9699 10.9806 23.8699 10.8506 23.727 10.7988C23.5837 10.7466 23.4233 10.7822 23.3155 10.8894L21.1098 13.0866L18.6647 12.3153L17.8905 9.87937L20.0961 7.68201C20.2041 7.57458 20.2393 7.41475 20.1873 7.27224C20.1348 7.12945 20.0046 7.02999 19.8524 7.01688C18.5129 6.9019 17.2004 7.37836 16.2514 8.32387C14.9518 9.61873 14.6076 11.5096 15.217 13.1213C15.1504 13.1773 15.0847 13.2365 15.0199 13.3004L7.65736 20.2216C7.65476 20.2241 7.6522 20.2268 7.64939 20.2293C6.78354 21.092 6.78354 22.4955 7.64939 23.3583C8.51539 24.2209 9.91396 24.2104 10.7797 23.3477C10.7834 23.3443 10.7868 23.3408 10.7902 23.3369L17.677 15.945C17.7398 15.8822 17.798 15.8165 17.853 15.749C19.4713 16.3573 21.3705 16.0152 22.6713 14.7195C23.62 13.7739 24.0986 12.4663 23.983 11.132ZM9.67019 22.4264C9.35113 22.7442 8.83439 22.744 8.51536 22.4264C8.19644 22.1089 8.19644 21.5937 8.51536 21.2761C8.83439 20.9585 9.35113 20.9585 9.67019 21.2761C9.98911 21.5937 9.98911 22.1089 9.67019 22.4264Z", fill: "black" }), /* @__PURE__ */ P("defs", null, /* @__PURE__ */ P("clipPath", { id: "clip0_64_2" }, /* @__PURE__ */ P("rect", { width: 31, height: 31, fill: "white" })))), ec = (i) => /* @__PURE__ */ P("svg", { width: 31, height: 31, viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M2 24.0437V22.6518C4.30404 21.9559 5.82929 20.347 6.17596 18.244C6.45967 16.523 5.87584 14.7802 4.66788 13.505L5.50401 12.1672C6.3441 12.2632 7.12499 12.2938 7.83019 12.2273C8.91308 12.1253 10.0603 11.7686 10.8965 10.814C11.7162 9.87828 11.9364 8.70751 11.9455 7.65019C11.9509 7.01984 11.882 6.33439 11.7615 5.60532L13.1089 4.93163C14.6862 6.27858 16.5967 7.00972 18.5085 6.50659C20.496 5.98355 21.7104 4.35171 22.2287 2.32023L23.4959 2.17943C23.7105 2.84427 23.9686 3.45839 24.2803 4.0055C24.8609 5.02453 25.7009 5.93317 26.8959 6.37534C28.1054 6.8229 29.35 6.6716 30.4872 6.21488C31.2478 5.9094 32.0092 5.4502 32.771 4.87155L33.84 5.40607C33.3102 7.17682 33.6407 8.97473 34.9205 10.3525C36.2854 11.8219 38.3837 12.4206 40.6053 12.1884L41.4091 13.3137C40.1484 14.904 39.5422 16.7943 40.0082 18.6621C40.4975 20.623 42.0098 21.9631 44 22.6091V23.6937C42.0295 24.646 40.407 25.9295 39.9934 27.9032C39.7449 29.089 40.0083 30.2272 40.4663 31.2395C40.7549 31.8775 41.1444 32.5183 41.6038 33.1622L41.0881 34.0648C39.1096 33.5569 37.1545 33.7409 35.7252 35.1442C34.3293 36.5148 34.0136 38.5186 34.2755 40.5318L32.7931 41.4583C31.191 40.0523 29.3504 39.2822 27.3831 40.0414C26.2841 40.4655 25.451 41.2846 24.816 42.1501C24.4114 42.7016 24.0463 43.3278 23.7127 44H22.6585C22.1786 42.2318 21.2165 40.6691 19.4091 40.0247C17.4936 39.3418 15.3888 40.0023 13.3765 41.2022L11.9877 40.5078C12.4255 38.6858 12.158 36.865 10.7918 35.5311C9.4171 34.1889 7.44044 33.8741 5.42929 34.2133L4.6584 32.9799C6.03869 31.6871 6.93069 30.0087 6.40539 28.071C6.07607 26.8563 5.24467 25.9088 4.25062 25.2068C3.60737 24.7526 2.85005 24.3664 2 24.0437Z", stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ P("circle", { cx: 23, cy: 23, r: 12, stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ P("path", { d: "M23 39.75C32.2508 39.75 39.75 32.2508 39.75 23C39.75 13.7492 32.2508 6.25 23 6.25C13.7492 6.25 6.25 13.7492 6.25 23C6.25 32.2508 13.7492 39.75 23 39.75Z", stroke: "black", strokeWidth: 3.5 })), tc = `.shared-icon{background-color:#fba157;padding:5px 10px;border-radius:8px;font-size:12px;display:flex;justify-content:center;align-items:center;color:#fff}
`, Po = ({
  text: i
}) => d(O, {
  children: [d("style", {
    type: "text/css",
    children: tc
  }), d("div", {
    className: "shared-icon",
    children: d("p", {
      className: "text",
      children: i || "Shared with you"
    })
  })]
});
function We({
  spanner: i,
  selected: e,
  settings: t,
  simple: r,
  bike: a,
  compact: o,
  readOnly: n,
  onClick: s,
  shared: l,
  custom: u,
  noSymbol: c,
  ...p
}) {
  var x;
  const h = (x = a.images) != null && x.length ? a.images : [Tt("bike.png")], f = ee(null), [b, g] = q(0), m = ee(null);
  I(() => {
    const D = f == null ? void 0 : f.current;
    if (D) {
      var A = new IntersectionObserver(function(C) {
        var z = C.reduce(function(R, N) {
          return N.intersectionRatio > R.intersectionRatio ? N : R;
        });
        z.intersectionRatio > 0 && g(Number(z.target.getAttribute("data-slide")));
      }, {
        root: D,
        threshold: 0.8
      });
      return D.querySelectorAll("&>div").forEach((C) => {
        A.observe(C);
      }), () => {
        A.disconnect();
      };
    }
  }, [f]);
  function k(D) {
    if (!f.current)
      return;
    const A = f.current.querySelectorAll("&>div")[D];
    f.current.scrollLeft = A.clientWidth * D;
  }
  function _() {
    b != 0 && k(b - 1);
  }
  function y() {
    b != h.length - 1 && k(b + 1);
  }
  const v = (h == null ? void 0 : h.length) && b !== h.length - 1, w = (h == null ? void 0 : h.length) && b !== 0;
  return d("div", {
    class: K("rounded-xl select-none border  py-4 relative", e ? "border-gray-950" : "border-gray-300"),
    ...p,
    onClick: (D) => {
      if (m.current && !m.current.contains(D.target))
        s(D);
      else {
        D.preventDefault();
        return;
      }
    },
    children: [!r && d("p", {
      class: "text-gray-950 px-4 text-base font-normal font-nunito leading-tight ",
      children: o ? d(O, {
        children: n ? `${a.bike_Brand} ${a.year} ${a.spec}` : a ? `${a.brand} ${a.year} ${a.bikeSpec} ${a.variant ? a.variant : ""}` : ""
      }) : d(O, {
        children: n ? a.bike_Name : a.name
      })
    }), d("div", {
      class: "relative mt-2",
      children: [d("div", {
        ref: f,
        class: K("flex scroll-smooth snap-mandatory  no-scrollbar h-32 snap-x space-x-2 relative overflow-x-auto", "px-4"),
        "data-active-slide": b,
        children: [!n && h.length && h.map((D, A) => d("div", {
          "data-slide": A,
          class: "w-full h-full snap-center flex items-center flex-none",
          children: d("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: D,
            alt: D
          })
        }, A)), n && d("div", {
          class: "w-full h-full snap-center flex items-center flex-none",
          children: d("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: `https://imagestore.bikematrix.io/${a.bike_Reference}/400-${a.bike_Thumbnail}`,
            alt: a.bike_Reference
          })
        })]
      }), d(O, {
        children: [d("div", {
          onClick: _,
          class: K("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center left-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", w ? "" : "hidden"),
          children: d(rt, {
            class: "h-3 text-gray-500 -rotate-180"
          })
        }), d("div", {
          onClick: y,
          class: K("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center right-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", v ? "" : "hidden"),
          children: d(rt, {
            class: "h-3 text-gray-500 translate-x-px"
          })
        })]
      })]
    }), (h == null ? void 0 : h.length) > 1 && d("div", {
      class: "space-x-2 flex items-center justify-center",
      children: h.map((D, A) => d("div", {
        class: K("rounded-xl w-2 h-2 transition-all duration-300", A == b ? " bg-gray-950 scale-125" : " bg-gray-200")
      }, A))
    }), (l || a.isShared) && d("div", {
      className: "absolute left-4 bottom-4",
      children: d(Po, {})
    }), (u || a.isCustom) && d("div", {
      className: "absolute left-4 bottom-4",
      children: d(Po, {
        text: "Custom"
      })
    }), d("div", {
      className: "spanner_wrapper absolute right-4 bottom-14 h-fit w-fit",
      ref: m,
      children: i && e && d(Qu, {
        class: "cursor-pointer",
        onClick: (D) => {
          D.preventDefault(), !(a != null && a.isCustom) && !(a != null && a.isShared) ? J("/workshop") : a != null && a.isShared ? J("/read-only") : J("/bom");
        }
      })
    }), e && !t ? d(Xu, {
      class: "absolute right-4 bottom-4 cursor-pointer"
    }) : t ? d(ec, {
      class: "absolute right-4 bottom-4 cursor-pointer",
      onClick: () => J("/settings")
    }) : n ? d("span", {}) : c ? d("span", {}) : d(O, {
      children: d("span", {
        class: "border absolute right-4 bottom-4 rounded-full h-8 w-8 border-gray-300 bg-white/75"
      })
    })]
  });
}
function Ro(i, e) {
  const t = () => {
    try {
      const o = window.localStorage.getItem(i);
      return o ? JSON.parse(o) : e;
    } catch (o) {
      return console.error(o), e;
    }
  }, [r, a] = q(t);
  return I(() => {
    try {
      if (!r)
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
const Ii = {
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
}, is = zn(void 0), rc = ({
  children: i
}) => {
  var U;
  const e = window.BikeMatrix.getConfig(), [t, r] = Ro(za, null), [a, o] = Ro("bm_lounge", []), n = new Oe(e.apiUrl, e.apiKey, e.isShopify), [s, l] = q(Ii), u = ee({}), [c, p] = q([]), [h, f] = q(!1), [b, g] = q(null);
  I(() => {
    (async () => {
      const F = await ts(t == null ? void 0 : t.brandId);
      g(F);
    })();
  }, [t == null ? void 0 : t.brandId]);
  function m(B) {
    l((F) => {
      var T;
      return {
        ...F,
        [B]: {
          options: [],
          value: (T = Ii[B]) == null ? void 0 : T.value
        }
      };
    });
  }
  function k(B, F) {
    l((T) => (T[B].value = F, {
      ...T
    }));
  }
  const _ = () => {
    l((B) => {
      var F;
      return {
        ...Ii,
        brand: {
          options: ((F = B.brand) == null ? void 0 : F.options) || []
        }
      };
    });
  }, y = (B) => {
    r({
      ...B
    }), o([...(a || []).filter((F) => !!F.key && F.key !== B.key), B]);
  }, v = (B) => {
    (t == null ? void 0 : t.key) === B && r(null), o([...(a || []).filter((F) => !!F.key && F.key !== B)]);
  }, w = () => {
    e.logLevel === "verbose" && console.log("Dispatch BikeChanged..."), document.dispatchEvent(new Event("BikeChanged", {
      bubbles: !0,
      composed: !0
    }));
  }, x = () => {
    setTimeout(() => {
      _(), J("/");
    }, 500);
  }, D = async () => {
    const B = await n.getBikeBrands();
    sessionStorage.setItem("bm_brands", JSON.stringify(B)), l((F) => (F.brand.options = B.map((T) => ({
      label: T.bike_Brand,
      value: T.bike_Brand_ID
    })), {
      ...F
    }));
  }, A = async () => n.getBikeModels(s.brand.value).then((B) => {
    l((F) => (F.model.options = B.map((T) => ({
      label: T.model_Family,
      value: T.model_Family_ID
    })), {
      ...F
    }));
  }), C = async () => n.getBikeFrameSeries(s.model.value).then((B) => {
    l((F) => {
      var V, E;
      const T = [];
      return F.frameSeries.options = B.reduce((L, $) => {
        const W = {
          label: $.model_Spec,
          value: $.model_Spec_ID
        };
        return T.includes(W.value) || (T.push(W.value), L.push(W)), L;
      }, []), ((V = F.frameSeries.options) == null ? void 0 : V.length) === 1 && (F.frameSeries.value = (E = F.frameSeries.options[0]) == null ? void 0 : E.value), {
        ...F
      };
    });
  }), z = async () => n.getBikeSpecs(s.frameSeries.value).then((B) => {
    const F = [], T = [], V = [], E = [];
    B.forEach((L) => {
      var Le, fe;
      const $ = L.year + "-" + L.spec.replace(/[^0-9a-zA-Z]/g, "") + (L.bike_Variant ? "-" + L.bike_Variant.replace(/[^0-9a-zA-Z]/g, "") : ""), W = {
        label: L.spec,
        value: L.spec
      };
      if (F.includes(W.value) || (F.push(W.value), V.push(W)), !T.includes($)) {
        T.push($);
        const we = {
          _key: $,
          key: L.bike_Key,
          name: L.bike_Name,
          variant: L.bike_Variant,
          brand: L.bike_Brand,
          brandId: L.bike_Brand_ID,
          model: L.model_Family,
          modelId: L.model_Family_ID,
          frameSeries: L.model_Spec,
          frameSeriesId: L.model_Spec_ID,
          bikeSpec: L.spec,
          year: L.year,
          images: [L.bike_Thumbnail, ...((Le = L == null ? void 0 : L.bike_Images) == null ? void 0 : Le.split(",")) || []].filter((te) => !!te).map((te) => `https://imagestore.bikematrix.io/${L.bike_Reference}/400-${te}`)
        }, He = B.reduce((te, Ce) => (Ce.year == L.year && Ce.spec === L.spec && Ce.model_Spec === L.model_Spec && Ce.bike_Variant === L.bike_Variant && te.push({
          key: Ce.bike_Key,
          name: Ce.bike_Name,
          variant: Ce.bike_Variant,
          sizeId: Ce.bike_Size_ID,
          size: Ce.bike_Size
        }), te), []);
        (fe = He == null ? void 0 : He.filter((te) => !!te.sizeId)) != null && fe.length && (we.sizes = He), E.push(we);
      }
      u.current[s.frameSeries.value] = Array.from(/* @__PURE__ */ new Set([...u.current[s.frameSeries.value] || [], L.year]));
    }), l((L) => (L.bikeSpec.options = V, {
      ...L
    })), p(E);
  }), R = async () => {
    l((B) => {
      const F = u.current[B.frameSeries.value] || [];
      return B.year.options = F.map((T) => ({
        label: T,
        value: T
      })), {
        ...B
      };
    });
  }, N = async () => {
    l((B) => {
      var F, T, V;
      if (B.frameSize.options = (F = s == null ? void 0 : s.value) != null && F.sizes ? s.value.sizes.filter((E) => !!E.size).map((E) => ({
        label: E.size,
        value: E.size
      })) : [], ((T = B.frameSize.options) == null ? void 0 : T.length) === 1) {
        const E = (V = B.frameSize.options[0]) == null ? void 0 : V.value;
        B.frameSize.value = E, B.value.frameSize = E;
      }
      return {
        ...B
      };
    });
  };
  I(() => (document.addEventListener("BmToggleModal", x), () => {
    document.removeEventListener("BmToggleModal", x);
  }), []), I(() => {
    w();
  }, [t]), I(() => {
    sessionStorage.getItem("bm_brands") ? l((B) => (B.brand.options = JSON.parse(sessionStorage.getItem("bm_brands")).map((F) => ({
      label: F.bike_Brand,
      value: F.bike_Brand_ID
    })), {
      ...B
    })) : D();
  }, []), I(() => {
    s.brand.value && (m("model"), m("frameSeries"), A());
  }, [s.brand.value]), I(() => {
    s.model.value && (m("frameSeries"), C());
  }, [s.model.value]), I(() => {
    s.frameSeries.value && (m("bikeSpec"), m("year"), p([]), z().then(() => {
      R();
    }));
  }, [s.frameSeries.value]), I(() => {
    s.value._key && (m("frameSize"), N());
  }, [(U = s.value) == null ? void 0 : U._key]), I(() => {
    s.frameSize.value && l((B) => {
      var F, T;
      return B.value = {
        ...B.value,
        ...((T = (F = B == null ? void 0 : B.value) == null ? void 0 : F.sizes) == null ? void 0 : T.find((V) => s.frameSize.value == V.size)) || {}
      }, delete B.value.sizes, B;
    });
  }, [s.frameSize.value]);
  const M = {
    // Wizard Bike
    bike: s,
    setBike: l,
    setBikeAttr: k,
    resetBike: _,
    // Search Results
    results: c,
    loading: h,
    setLoading: f,
    // Compatible Parts
    compatibleCollections: b,
    // Final Bike
    currentBike: t,
    setCurrentBike: r,
    removeBike: v,
    saveBike: y,
    // Bike Lounge
    lounge: a
  };
  return d(is.Provider, {
    value: M,
    children: i
  });
}, Ee = () => {
  const i = Rn(is);
  if (!i)
    throw new Error("useBikeState must be used within a BikeProvider");
  return i;
};
function xt() {
  const {
    t: i
  } = se();
  return d(O, {
    children: [d("p", {
      class: "text-gray-600 max-w-sm mx-auto mt-4 text-center font-normal text-xs",
      children: i("bikeselector_home_footer_message")
    }), d("a", {
      href: "https://bikematrix.io/landed-it",
      target: "_blank",
      class: "text-gray-950 block  underline  mb-4 font-bold mt-4 text-center text-xs",
      children: i("bikematrix_poweredby")
    })]
  });
}
const ic = (i) => /* @__PURE__ */ P("svg", { width: 17, height: 17, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M16.983 4.13197C16.9699 3.98064 16.8699 3.85064 16.727 3.7988C16.5837 3.74665 16.4233 3.78215 16.3155 3.88937L14.1098 6.08655L11.6647 5.31527L10.8905 2.87937L13.0961 0.682011C13.2041 0.574581 13.2393 0.414746 13.1873 0.272238C13.1348 0.129446 13.0046 0.0299881 12.8524 0.0168782C11.5129 -0.0980992 10.2004 0.378357 9.25142 1.32387C7.95176 2.61873 7.60759 4.50961 8.21705 6.12135C8.15043 6.17726 8.08471 6.2365 8.01987 6.30039L0.65736 13.2216C0.654763 13.2241 0.652203 13.2268 0.649393 13.2293C-0.216464 14.092 -0.216464 15.4955 0.649393 16.3583C1.51539 17.2209 2.91396 17.2104 3.77967 16.3477C3.78341 16.3443 3.78682 16.3408 3.79024 16.3369L10.677 8.94505C10.7398 8.88222 10.798 8.8165 10.853 8.74903C12.4713 9.3573 14.3705 9.01524 15.6713 7.71952C16.62 6.77394 17.0986 5.46628 16.983 4.13197ZM2.67019 15.4264C2.35113 15.7442 1.83439 15.744 1.51536 15.4264C1.19644 15.1089 1.19644 14.5937 1.51536 14.2761C1.83439 13.9585 2.35113 13.9585 2.67019 14.2761C2.98911 14.5937 2.98911 15.1089 2.67019 15.4264Z", fill: "black" }));
function ac() {
  const {
    currentBike: i,
    setCurrentBike: e,
    lounge: t,
    removeBike: r,
    resetBike: a
  } = Ee(), {
    t: o
  } = se(), {
    virtualWorkshop: n
  } = window.BikeMatrix.getConfig();
  return I(() => {
    ye.value = null;
  }, []), d(O, {
    children: [t != null && t.length ? t == null ? void 0 : t.filter((s) => !!s._key).map((s) => d("div", {
      class: "mb-4 relative",
      children: [d("div", {
        onClick: () => r(s.key),
        class: "w-7 h-7 z-10 -right-2 -top-2 flex items-center justify-center absolute bg-gray-200 text-gray-800 rounded-full",
        children: d(Tr, {
          class: "h-3 w-3"
        })
      }), d(We, {
        onClick: (l) => {
          l.preventDefault(), e((i == null ? void 0 : i.key) === (s == null ? void 0 : s.key) ? null : {
            ...s
          });
        },
        bike: s,
        selected: (i == null ? void 0 : i.key) === (s == null ? void 0 : s.key),
        spanner: n,
        custom: s == null ? void 0 : s.isCustom
      })]
    }, s.key)) : d("div", {
      class: K("relative mb-4 z-10 "),
      children: [d("div", {
        class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
        children: [d("span", {
          class: "block rounded-lg h-6 w-1/2 bg-gray-200"
        }), d("img", {
          class: "w-auto mx-auto h-auto max-h-36 opacity-30",
          src: Tt("bike.png")
        }), d("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), d("div", {
        class: K("w-full relative bg-white border -z-10 border-b-0 border-gray-300 rounded-t-xl h-20  mb-4", "after:bottom-0 after:-inset-x-px after:-top-6 after:bg-gradient-to-t after:absolute after:from-white after:to-transparent"),
        children: [d("span", {
          class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
        }), d("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), d("div", {
        class: " text-gray-800 text-center flex -mt-5 z-20 justify-center",
        children: [o("bikeselector_home_empty"), d("br", {}), o("bikeselector_home_add_a_bike")]
      })]
    }), d("button", {
      onClick: (s) => {
        s.preventDefault(), a(), J("/add");
      },
      class: K("duration-300 transition-colors sticky bottom-[128px] mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", t.length && !(i != null && i.key) ? "bg-gray-950 text-white" : t.length ? "bg-gray-200 text-gray-800" : "bg-gray-950 text-white", !i && "bottom-0", i && n && "bottom-[128px]", i && !n && "bottom-[72px]"),
      children: [o("bikeselector_home_add_btn"), d(Tr, {
        class: "h-3 absolute [&>path]:stroke-[2px] right-5 justify-self-end rotate-45"
      })]
    }), !!(t != null && t.length) && !!(i != null && i.key) && n && d("button", {
      onClick: (s) => {
        s.preventDefault(), !(i != null && i.isCustom) && !(i != null && i.isShared) ? J("/workshop") : i != null && i.isCustom && !(i != null && i.isShared) ? J("/bom") : !(i != null && i.isCustom) && (i != null && i.isShared) && J("/read-only");
      },
      class: K("duration-300 sticky bottom-[72px] transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: [o("virtualworkshop_title"), d(ic, {
        class: "h-5 absolute right-5 justify-self-end"
      })]
    }), !!(t != null && t.length) && !!(i != null && i.key) && d("button", {
      onClick: (s) => {
        s.preventDefault(), J("/browse");
      },
      class: K("duration-300 sticky bottom-4 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", t.length ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-800"),
      children: o("bikeselector_home_browse_btn")
    }), d(xt, {})]
  });
}
const oc = (i) => /* @__PURE__ */ P("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("circle", { cx: 10, cy: 10, r: 10, fill: "#030712" }), /* @__PURE__ */ P("path", { d: "M6.57886 11.0526L9.02922 13.191L13.4604 7.02636", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
function Cr({
  type: i,
  title: e,
  placeholder: t,
  options: r = [],
  disabled: a = void 0,
  loading: o = !1,
  infoVisible: n = !1,
  children: s = void 0,
  ...l
}) {
  const {
    t: u
  } = se(), c = (h) => {
    switch (h) {
      case "brand":
        return u("bikeselector_addbike_brand_desc");
      case "model":
        return u("bikeselector_addbike_model_desc");
      case "framespec":
        return u("bikeselector_addbike_framespec_desc");
      case "framesize":
        return u("bikeselector_size_framesize_desc");
      default:
        return "";
    }
  }, p = (h, f) => h === "framesize" && f === "One Size" ? u("bikeselector_size_framesize_one_size") : f;
  return d(O, {
    children: d("div", {
      class: "w-full flex flex-col space-y-2",
      children: [d("label", {
        class: "text-gray-800 font-bold text",
        children: e
      }), s && d("div", {
        class: K("!my-0 overflow-hidden box-border transition-all duration-300", n ? "max-h-screen" : "h-0"),
        children: [d("p", {
          class: "text-gray-600 my-1 italic text-sm",
          children: c(i)
        }), d("div", {
          class: K("rounded-xl overflow-hidden my-0 relative py-1 h-32 bg-gray-100 w-full"),
          children: s
        })]
      }), d("div", {
        class: "w-full flex items-center relative",
        children: [d("select", {
          placeholder: t,
          class: K("rounded-xl peer !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg bg-white placeholder:text-gray-700 text-gray-700", "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400", l.class),
          disabled: a,
          ...l,
          children: [d("option", {
            value: "",
            selected: !l.value,
            disabled: !0,
            children: t
          }), r.map((h) => d("option", {
            value: h.value,
            disabled: h.disabled,
            children: p(i, h.label)
          }))]
        }), o ? d("span", {
          class: "absolute block loader animate-spin right-4 w-5 h-5"
        }) : l.value && typeof a == "boolean" ? d(oc, {
          class: "right-3 absolute w-5 pointer-events-none"
        }) : d(rt, {
          class: "absolute h-3 text-gray-700 pointer-events-none rotate-90 right-5 peer-disabled:text-gray-400"
        })]
      })]
    })
  });
}
const S = {
  id: null,
  name: null,
  product_category_id: null,
  swap: !1,
  version_id: null,
  unsaved_changes: null
}, pr = {
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
    stem: S,
    handlebar: S,
    seat_Post: S,
    seat_Post_Clamp: S,
    dropper_Lever: S,
    lockout_Lever: S,
    grips: S,
    pedals: S,
    saddle: S
  },
  "frame_&_fork": {
    fork: S,
    rear_Shock: S,
    headseat: S
  },
  drivetrain: {
    chainguide: S,
    bottom_Bracket: S,
    crankset: S,
    largest_Chainring: S,
    second_Largest_Chainring: S,
    third_Largest_Chainring: S,
    chainring_Spider: S,
    chain: S,
    cassette: S,
    rear_Derailleur: S,
    front_Derailleur: S,
    shifter_RH: S,
    shifter_LH: S,
    shift_Brake_Combo_RH: S,
    shift_Brake_Combo_LH: S,
    brake_Lever_RH: S,
    brake_Lever_LH: S,
    shifter_Adapter_RH: S,
    shifter_Adapter_LH: S
  },
  brakes: {
    brake_Caliper_Front: S,
    brake_Caliper_Rear: S,
    brake_Pads_Front: S,
    brake_Pads_Rear: S,
    brake_Rotor_Front: S,
    brake_Rotor_Rear: S,
    brake_Adapter_Front: S,
    brake_Adapter_Rear: S
  },
  "wheels_&_tyres": {
    front_Wheel: S,
    front_Axle: S,
    rear_Wheel: S,
    rear_Axle: S,
    tyre_Front: S,
    tyre_Rear: S
  },
  is_E_Bike: null,
  eMotor_System_ID: null,
  eBattery_ID: null,
  eControl_Unit_ID: null,
  eCharger_ID: null,
  eInterconnects_ID: null
}, hr = {
  cockpit: {
    stem: S,
    handlebar: S,
    seat_Post: S,
    seat_Post_Clamp: S,
    dropper_Lever: S,
    lockout_Lever: S,
    grips: S,
    pedals: S,
    saddle: S
  },
  "frame_&_fork": {
    headset: S,
    fork: S,
    rear_Shock: S
  },
  drivetrain: {
    chainguide: S,
    bottom_Bracket: S,
    crankset: S,
    largest_Chainring: S,
    second_Largest_Chainring: S,
    third_Largest_Chainring: S,
    chainring_Spider: S,
    chain: S,
    cassette: S,
    rear_Derailleur: S,
    front_Derailleur: S,
    shifter_RH: S,
    shifter_LH: S,
    shift_Brake_Combo_RH: S,
    shift_Brake_Combo_LH: S,
    brake_Lever_RH: S,
    brake_Lever_LH: S,
    shifter_Adapter_RH: S,
    shifter_Adapter_LH: S
  },
  brakes: {
    brake_Caliper_Front: S,
    brake_Caliper_Rear: S,
    brake_Pads_Front: S,
    brake_Pads_Rear: S,
    brake_Rotor_Front: S,
    brake_Rotor_Rear: S,
    brake_Adapter_Front: S,
    brake_Adapter_Rear: S
  },
  "wheels_&_tyres": {
    front_Wheel: S,
    front_Axle: S,
    rear_Wheel: S,
    rear_Axle: S,
    tyre_Front: S,
    tyre_Rear: S
  }
}, ot = {
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
}, Vi = (i, e) => Object.keys(i).includes(e), Pr = (i) => (Object.keys(ot).forEach((e) => {
  Object.keys(i).forEach((t) => {
    `${e}_ID` === t && (ot[e].id = i[t]), `${e}_Name` === t && (ot[e].name = i[t]), `${e}_Product_Category_ID` === t && (ot[e].product_category_id = i[t]), `${e}_Swap` === t && (ot[e].swap = i[t]), `${e}_Version_ID` === t && (ot[e].version_id = i[t]), `${e}_Unsaved_Changes` === t && (ot[e].unsaved_changes = i[t]);
  });
}), Object.keys(hr).forEach((e) => {
  Object.keys(ot).forEach((t) => {
    Vi(hr[e], t) && (hr[e][t] = ot[t]);
  });
}), Object.keys(hr).forEach((e) => {
  Vi(pr, e) && (pr[e] = hr[e]);
}), Object.keys(i).forEach((e) => {
  Vi(pr, e) && (pr[e] = i[e]);
}), pr), as = (i) => /* @__PURE__ */ P("svg", { width: 25, height: 25, viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("circle", { cx: 12.5, cy: 12.5, r: 12, fill: "white", stroke: "black" }), /* @__PURE__ */ P("path", { d: "M9 16.0711L12.5355 12.5355M12.5355 12.5355L16.0711 9M12.5355 12.5355L16.0711 16.0711M12.5355 12.5355L9 9", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" })), nc = `.input_container{display:flex;flex-direction:column}.input_wrapper{width:100%;border-radius:12px;padding:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:space-between}.input_wrapper input{width:100%}
`, os = ({
  value: i,
  setValue: e,
  placeholder: t,
  type: r,
  error: a,
  submitInput: o,
  label: n,
  instructions: s
}) => d(O, {
  children: [d("style", {
    type: "text/css",
    children: nc
  }), d("div", {
    className: "input_container",
    children: [n && d("label", {
      class: "text-gray-800 font-bold text",
      children: n
    }), s && d("label", {
      class: "text-gray-600 my-1 italic text-sm",
      children: s
    }), d("div", {
      className: "input_wrapper",
      children: [d("input", {
        placeholder: t,
        value: i,
        onChange: (l) => e(l.currentTarget.value),
        type: r,
        onKeyDown: (l) => {
          l.key === "Enter" && o();
        }
      }), d(as, {
        height: 20,
        width: 20,
        onClick: () => e(""),
        className: "cursor-pointer"
      })]
    }), a && d("p", {
      className: "text-red-500 text-xs pt-1",
      children: a
    })]
  })]
}), ns = ({
  messages: i
}) => d("div", {
  className: "flex h-4 w-auto justify-center",
  children: i && d("p", {
    className: "message text-xs text-red-500",
    children: i
  })
}), sc = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`;
function Kr({
  isLoading: i,
  colour: e
}) {
  return d(O, {
    children: [d("style", {
      type: "text/css",
      children: sc
    }), d("div", {
      class: "lds-ring",
      id: "bm-loading-spinner",
      style: {
        display: i ? "inline-block" : "none"
      },
      children: [d("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      }), d("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      }), d("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      }), d("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      })]
    })]
  });
}
const kt = ({
  onClick: i,
  primary: e,
  text: t,
  loading: r,
  disabled: a,
  sticky: o,
  children: n,
  active: s = !0
}) => d("button", {
  onClick: (l) => {
    !a && !r && (l.preventDefault(), i());
  },
  class: K("duration-300 bottom-4 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", `${e && s ? "bg-gray-950 text-white" : e && !s ? "bg-gray-200 text-gray-400 " : "bg-gray-200 text-gray-800"} ${o && "sticky"} `),
  style: {
    cursor: a ? "not-allowed" : "pointer",
    opacity: a ? 0.5 : 1
  },
  children: r ? d(Kr, {
    isLoading: r,
    colour: e ? "#fff" : "#000"
  }) : d(O, {
    children: [d("span", {
      className: n ? "ml-auto" : "",
      children: t
    }), n]
  })
});
function lc() {
  const i = window.BikeMatrix.getConfig(), {
    bike: e,
    setBikeAttr: t
  } = Ee(), {
    brand: r,
    model: a,
    frameSeries: o
  } = e, {
    t: n
  } = se(), [s, l] = q([]), [u, c] = q(!1), p = new Oe(i.apiUrl, i.apiKey, i.isShopify), [h, f] = q(null), [b, g] = q(""), m = r.value, k = r.value && a.value;
  I(() => {
    const y = i.bikeSelectorBrands ? i.bikeSelectorBrands.split(",").filter((v) => v !== "") : [];
    if (y.length > 0 && r.options.length > 0) {
      let v = [];
      r.options.forEach((w) => {
        y.includes(w.value.toString().trim()) && v.push(w);
      }), l(v);
    } else
      l(r.options);
  }, [i.bikeSelectorBrands, r.options]);
  const _ = async () => {
    var w;
    c(!0), console.log("id", b);
    const y = await p.getBikeBom(b);
    if (!(y != null && y.success)) {
      c(!1), f(y.error);
      return;
    }
    const v = Pr(y.data);
    ye.value = v, e.value = {
      bikeSpec: v.spec,
      brand: v.bike_Brand,
      brandId: v.bike_Brand_ID,
      frameSeries: v.spec,
      frameSeriesId: v.model_Spec_ID,
      frameSize: v.bike_Size,
      images: [`https://imagestore.bikematrix.io/${v.bike_Reference}/400-${v.bike_Thumbnail}`],
      isCustom: v.bike_Type === "Custom_Bike",
      isShared: v.bike_Type === "Shared_Bike",
      key: v.bike_Type === "Shared_Bike" ? v.share_Bike_Key : v.bike_Key,
      model: v.model_Family,
      modelId: v.model_Family_ID,
      name: v.bike_Name,
      size: v.bike_Size,
      sizeId: v.bike_Size_ID,
      variant: v.bike_Variant,
      year: v.year,
      _key: `${v.year}-${(w = v.spec) == null ? void 0 : w.replace(" ", "")}`
    }, c(!1), J("/confirm");
  };
  return d(O, {
    children: [d("div", {
      class: "space-y-5 mb-6 relative w-full flex flex-col",
      children: [i.virtualWorkshop && d(O, {
        children: [d(os, {
          value: b,
          setValue: (y) => g(y),
          label: "Bike Matrix ID",
          placeholder: "Enter your Bike Matrix ID",
          type: "text",
          instructions: n("virtualworkshop_bm_id_text")
        }), d("div", {
          className: "flex justify-center items-center gap-2",
          children: [d("div", {
            className: "bg-gray-300 h-[1px] w-full"
          }), d("p", {
            className: " font-semibold text-sm",
            children: "OR"
          }), d("div", {
            className: "bg-gray-300 h-[1px] w-full"
          })]
        })]
      }), d(Cr, {
        type: "brand",
        title: n("bikeselector_addbike_brand_label"),
        placeholder: n("bikeselector_addbike_brand_select"),
        value: r.value,
        options: s,
        onChange: (y) => {
          t("brand", y.target.value);
        },
        loading: !r.options.length,
        disabled: !r.options.length,
        info: !0,
        infoVisible: !r.value,
        children: d("img", {
          src: Tt("info-brand.svg"),
          class: "w-full h-full"
        })
      }), d(Cr, {
        type: "model",
        title: n("bikeselector_addbike_model_label"),
        placeholder: n("bikeselector_addbike_model_select"),
        value: a.value,
        options: a.options,
        onChange: (y) => {
          t("model", y.target.value);
        },
        loading: m && !a.options.length,
        disabled: !m || !a.options.length,
        info: !0,
        infoVisible: m && !a.value,
        children: d("img", {
          src: Tt("info-model.svg"),
          class: "w-full h-full"
        })
      }), d(Cr, {
        type: "framespec",
        title: n("bikeselector_addbike_framespec_label"),
        placeholder: n("bikeselector_addbike_framespec_select"),
        value: o.value,
        loading: k && !o.options.length,
        options: o.options,
        onChange: (y) => {
          t("frameSeries", y.target.value);
        },
        disabled: !k || !o.options.length,
        info: !0,
        infoVisible: k && !o.value,
        children: d("img", {
          src: Tt("info-frameseries.svg"),
          class: "w-full h-full"
        })
      })]
    }), d(ns, {
      messages: h
    }), d(kt, {
      primary: !0,
      text: n("bikeselector_addbike_find_btn"),
      onClick: () => {
        r.value && a.value && o.value ? J("/search") : b && _();
      },
      active: r.value && a.value && o.value || b,
      loading: u,
      children: d(rt, {
        class: "h-3 ml-auto justify-self-end"
      })
    })]
  });
}
function uc() {
  var b, g, m, k;
  const {
    bike: i,
    setBike: e,
    setBikeAttr: t,
    results: r,
    loading: a
  } = Ee(), {
    year: o,
    bikeSpec: n
  } = i, {
    t: s
  } = se(), [l, u] = [i.value, (_) => e((y) => ({
    ...y,
    value: _
  }))], c = ut(() => {
    const _ = r == null ? void 0 : r.filter((y) => {
      var w;
      let v = !0;
      return n.value && (v = y.bikeSpec === n.value), v && o.value.length && (v = (w = o.value) == null ? void 0 : w.includes(y.year)), v;
    });
    return _.some((y) => y._key == l._key) || u({}), _;
  }, [r, n.value, o.value]), p = ut(() => n.value ? r.filter((y) => n.value == y.bikeSpec).map((y) => y.year) : o.options.map((y) => y.value), [n.value]), h = ut(() => {
    var y;
    if (!((y = o.value) != null && y.length))
      return n.options;
    const _ = r.filter((v) => {
      var w;
      return (w = o.value) == null ? void 0 : w.includes(v.year);
    }).map((v) => v.bikeSpec);
    return n.options.map((v) => ({
      ...v,
      disabled: !_.includes(v.value)
    }));
  }, [n.options, o.value]), f = (_) => _ === 0 ? s("bikeselector_search_no_bikes_found") : _ === 1 ? s("bikeselector_search_one_bike_found") : s("bikeselector_search_number_bikes_found", {
    number_found: _
  });
  return d(O, {
    children: [d("div", {
      class: "space-y-3 mb-6 relative w-full flex flex-col",
      children: [d(Cr, {
        type: "bikespec",
        title: s("bikeselector_search_bikespec_label"),
        placeholder: s("bikeselector_search_bikespec_select"),
        value: n.value,
        options: [{
          label: s("bikeselector_search_bikespec_select_all"),
          value: ""
        }, ...h],
        onChange: (_) => {
          t("bikeSpec", _.target.value);
        },
        disabled: !((b = n.options) != null && b.length),
        loading: !((g = n.options) != null && g.length)
      }), d("div", {
        class: "w-full flex flex-col space-y-2",
        children: [d("label", {
          class: "text-gray-800 font-bold text",
          children: s("bikeselector_search_year_label")
        }), d("div", {
          class: K("flex space-x-2 overflow-x-auto", "-mx-8 w-[calc(100%_+_64px)] px-8 no-scrollbar"),
          children: (m = o.options) != null && m.length ? (k = o.options) == null ? void 0 : k.map((_) => {
            var w;
            const y = n.value && !p.includes(_.value), v = (w = o.value) == null ? void 0 : w.includes(_.value);
            return d("div", {
              onClick: () => {
                y || t("year", v ? o.value.filter((x) => x !== _.value) : [...o.value, _.value]);
              },
              class: K("rounded-full cursor-pointer items-center flex border  py-2 px-4", v ? "pr-3 bg-gray-950 border-gray-950 text-white" : "border-gray-300 text-gray-700 ", y && "hidden"),
              children: [_.label, v && d(Tr, {
                class: "w-3 h-3 ml-2"
              })]
            });
          }) : Array(2).fill(0).map((_, y) => d("div", {
            class: "rounded-full items-center flex border py-2 bg-gray-100 px-4 bg-100 border-gray-300 animate-pulse",
            children: d("span", {
              class: "rounded-lg bg-gray-100 w-9 h-5"
            })
          }, y))
        })]
      }), d("div", {
        class: K("text-nowrap font-medium w-full flex", "[&>span]:text-gray-500 [&>span]:font-normal"),
        children: [a ? (
          // "Searching..."
          d(O, {
            children: s("bikeselector_search_searching")
          })
        ) : d(O, {
          children: f(c.length)
        }), " ", (r == null ? void 0 : r.length) > 0 && d(O, {
          children: [d("span", {
            children: "("
          }), d("span", {
            class: "whitespace-nowrap overflow-hidden text-ellipsis truncate",
            children: [r[0].brand, " ", r[0].frameSeries]
          }), d("span", {
            children: ")"
          })]
        })]
      }), d("div", {
        class: "grid grid-cols-1 sm:grid-cols-2 gap-4",
        children: c != null && c.length && !a ? c.map((_, y) => d(We, {
          "data-key": _._key,
          bike: _,
          selected: _._key === l._key,
          onClick: (v) => {
            v.preventDefault(), u(_);
          },
          compact: !0
        }, _._key)) : Array(a ? 2 : 1).fill(0).map((_, y) => d("div", {
          class: K("w-full relative rounded-xl h-40 bg-white border border-gray-200 ", a && "animate-pulse"),
          children: [d("span", {
            class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
          }), d("span", {
            class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-200"
          })]
        }, y))
      })]
    }), d("button", {
      onClick: (_) => {
        var y, v;
        if (_.preventDefault(), l._key) {
          const w = (y = this.base.querySelector(`[data-key="${l._key}"] [data-active-slide]`)) == null ? void 0 : y.getAttribute("data-active-slide"), D = [(v = this.base.querySelector(`[data-key="${l._key}"] [data-slide="${w}"] img`)) == null ? void 0 : v.src].filter((A) => !!A);
          D != null && D.length && e((A) => (A.value = {
            ...A.value || {},
            images: D
          }, {
            ...A
          })), J("/size");
        }
      },
      class: K("duration-300 transition-colors sticky bottom-6 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", l._key ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [d("span", {
        class: "ml-auto",
        children: s("bikeselector_search_confirm_btn")
      }), " ", d(rt, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
function cc() {
  var o, n;
  const {
    bike: i,
    setBikeAttr: e,
    setBike: t
  } = Ee(), {
    frameSize: r
  } = i, {
    t: a
  } = se();
  return I(() => {
    var s;
    (s = r.options) != null && s.length || J("/confirm");
  }, []), d(O, {
    children: [d(We, {
      bike: i.value,
      selected: !0,
      compact: !0
    }), d("div", {
      class: " mt-4 mb-6 relative w-full flex flex-col",
      children: d(Cr, {
        type: "framesize",
        instruction: !0,
        title: a("bikeselector_size_framesize_label"),
        placeholder: a("bikeselector_size_framesize_select"),
        value: r.value,
        options: r.options,
        onChange: (s) => {
          e("frameSize", s.target.value), t((l) => {
            var u;
            return l.value.frameSize = ((u = r.options.find((c) => c.value == s.target.value)) == null ? void 0 : u.label) || "", l;
          });
        },
        selected: !0,
        info: !0,
        infoVisible: !0,
        disabled: !((o = r.options) != null && o.length),
        loading: !((n = r.options) != null && n.length),
        children: d("img", {
          src: Tt("info-size.svg"),
          class: "w-full h-full"
        })
      })
    }), d("button", {
      onClick: (s) => {
        s.preventDefault(), r.value && J("/confirm");
      },
      class: K("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", r.value ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [d("span", {
        class: "ml-auto",
        children: a("bikeselector_size_confirm_btn")
      }), " ", d(rt, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
const Je = $e({
  title: "",
  step: 0,
  back: ""
});
function dc({
  children: i
}) {
  const {
    t: e
  } = se();
  return d(O, {
    children: [d("div", {
      class: "relative flex items-center justify-center w-full h-10 my-5 sm:mt-8",
      children: [!!Je.value.back && d("div", {
        onClick: () => J(Je.value.back),
        class: " w-10 h-10 absolute left-0 rounded-xl self-start border-gray-200 border items-center justify-center flex",
        children: d(rt, {
          class: "h-3 text-gray-500 -translate-x-px -rotate-180"
        })
      }), d("h2", {
        class: "text-xl font-bold",
        children: e(Je.value.title)
      })]
    }), i, typeof Je.value.step < "u" && d("div", {
      class: "space-x-2 my-6 flex items-center justify-center",
      children: [0, 1, 2, 3].map((t) => d("div", {
        class: K("rounded-xl h-2 transition-all duration-300", t == Je.value.step ? "w-6 bg-gray-950" : "w-2 bg-gray-200")
      }, t))
    })]
  });
}
function pc() {
  const {
    bike: i,
    saveBike: e
  } = Ee(), {
    brand: t,
    model: r,
    frameSeries: a,
    frameSize: o,
    year: n,
    bikeSpec: s
  } = i.value, {
    t: l
  } = se(), u = ye.value;
  return I(() => {
    !o && !u ? Je.value.back = "/search" : u && (Je.value.back = "/add");
  }, []), d(O, {
    children: [d(We, {
      bike: i.value,
      selected: !0,
      compact: !0
    }), d("div", {
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
      }].filter((c) => !!c.value).map((c) => d("div", {
        class: "w-full flex flex-col space-y-2",
        children: [d("label", {
          class: "text-gray-800 font-bold",
          children: c.title
        }), d("div", {
          onClick: () => J(c.path),
          class: "w-full flex items-center relative cursor-pointer",
          children: [d("div", {
            class: K("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-700"),
            children: c.value
          }), d(rt, {
            class: "absolute h-3 text-gray-700 pointer-events-none right-4 peer-disabled:text-gray-400"
          })]
        })]
      }, c.path))
    }), d("button", {
      onClick: (c) => {
        c.preventDefault(), e(i.value), J("/browse");
      },
      class: K("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: l("bikeselector_confirm_confirm_btn")
    }), d("p", {
      class: "text-gray-600 -mb-3 mt-2 text-center font-normal text-xs",
      children: l("bikeselector_confirm_notyourride_msg")
    })]
  });
}
function hc() {
  const {
    currentBike: i,
    compatibleCollections: e
  } = Ee(), {
    t
  } = se();
  return d(O, {
    children: [d(We, {
      bike: i,
      selected: !0
    }), !!(e != null && e.length) && d(O, {
      children: [d("p", {
        class: "text-gray-800 mt-4 font-bold",
        children: t("bikeselector_browse_products_label")
      }), d("div", {
        class: "gap-3 mt-2 mb-6 relative w-full flex flex-wrap",
        children: e.map((r) => d("a", {
          href: r.url,
          class: "group flex items-center relative cursor-pointer",
          children: [d("div", {
            class: K("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-950", "group-disabled:bg-gray-100 group-disabled:border-gray-200 group-disabled:text-gray-400"),
            children: t(r.text_id)
          }), d(rt, {
            class: "absolute h-3 pointer-events-none right-4 group-disabled:text-gray-400 text-gray-950"
          })]
        }, r.text_id))
      })]
    }), d("button", {
      onClick: (r) => {
        r.preventDefault(), Qt();
      },
      class: K("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: t("bikeselector_browse_shop_btn")
    }), d("button", {
      onClick: (r) => {
        r.preventDefault(), J("/");
      },
      class: K("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: t("bikeselector_browse_back_btn")
    }), d(xt, {})]
  });
}
const ur = () => d("div", {
  class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
  children: [d("span", {
    class: "block rounded-lg h-6 w-1/2 bg-gray-200"
  }), d("img", {
    class: "w-auto mx-auto h-auto max-h-36 opacity-30",
    src: Tt("bike.png")
  }), d("span", {
    class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
  })]
});
function fc() {
  const {
    t: i
  } = se(), t = window.BikeMatrix.getConfig(), {
    currentBike: r,
    setCurrentBike: a
  } = Ee(), o = new Oe(t.apiUrl, t.apiKey, t.isShopify), [n, s] = q(!1), [l, u] = q(null), {
    saveBike: c
  } = Ee(), p = async () => {
    s(!0);
    const h = await o.addCustomBike(r.key);
    if (!h.success)
      u(h.error), s(!1);
    else {
      const f = await o.getBikeBom(h == null ? void 0 : h.data);
      f.success || (u(f.error), s(!1));
      const b = Pr(f.data);
      ye.value = b;
      const g = {
        ...r,
        key: b.bike_Key,
        isCustom: !0,
        shareId: b.share_Bike_Key
      };
      c(g), a(g), s(!1), J("/bom");
    }
  };
  return d(O, {
    children: [d("div", {
      style: {
        marginBottom: "1rem"
      },
      children: [r ? d(We, {
        bike: r,
        noSymbol: !0
      }) : d(ur, {}), d("div", {
        class: " text-gray-800 text-center flex z-20 justify-center font-bold mt-6",
        children: i("virtualworkshop_intro_text")
      })]
    }), d(ns, {
      messages: l
    }), d(kt, {
      text: i("virtualworkshop_enter_button"),
      onClick: p,
      loading: n,
      primary: !0
    }), d(xt, {})]
  });
}
const Ge = ({
  paragraph: i,
  subheader: e,
  header: t,
  text: r,
  small: a,
  left: o,
  bold: n,
  capitalize: s,
  nowrap: l
}) => t ? d("h2", {
  class: "text-xl font-bold",
  children: r
}) : e ? d("h4", {
  className: `text-gray-800 text-center flex z-20 justify-center font-bold  ${s ? "capitalize" : ""}`,
  children: r
}) : d("p", {
  class: `text-gray-800  flex z-20 ${a ? "text-sm" : ""} ${o ? "text-start justify-start" : "text-center justify-center"} ${n ? "font-bold" : ""} ${s ? "capitalize" : ""} ${l ? "whitespace-nowrap" : ""}`,
  children: r
}), gc = `.background-alert-wrapper{opacity:0;position:absolute;height:100%;width:100%;display:none;top:0;left:0;pointer-events:none}.alert-wrapper{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none}.alert{width:80%;padding:2rem;border-radius:12px;background-color:#fff;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:300}.text-wrapper{display:flex;flex-direction:column;align-items:center;gap:1rem}.button-wrapper{display:flex;gap:1rem;width:100%;margin-top:1rem}
`;
function nt(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function ss(i, e) {
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
var Re = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, er = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Pa, me, ae, je = 1e8, Q = 1 / je, la = Math.PI * 2, mc = la / 4, bc = 0, ls = Math.sqrt, _c = Math.cos, yc = Math.sin, ge = function(e) {
  return typeof e == "string";
}, le = function(e) {
  return typeof e == "function";
}, ct = function(e) {
  return typeof e == "number";
}, Ra = function(e) {
  return typeof e > "u";
}, it = function(e) {
  return typeof e == "object";
}, De = function(e) {
  return e !== !1;
}, Na = function() {
  return typeof window < "u";
}, ti = function(e) {
  return le(e) || ge(e);
}, us = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ke = Array.isArray, ua = /(?:-?\.?\d|\.)+/gi, cs = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ht = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ji = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ds = /[+-]=-?[.\d]+/, ps = /[^,'"\[\]\s]+/gi, kc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, oe, Ye, ca, qa, Ne = {}, hi = {}, hs, fs = function(e) {
  return (hi = tr(e, Ne)) && Fe;
}, Oa = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Rr = function(e, t) {
  return !t && console.warn(e);
}, gs = function(e, t) {
  return e && (Ne[e] = t) && hi && (hi[e] = t) || Ne;
}, Nr = function() {
  return 0;
}, vc = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ni = {
  suppressEvents: !0,
  kill: !1
}, wc = {
  suppressEvents: !0
}, Ma = {}, _t = [], da = {}, ms, ze = {}, Ui = {}, No = 30, si = [], Ia = "", Va = function(e) {
  var t = e[0], r, a;
  if (it(t) || le(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (a = si.length; a-- && !si[a].targetTest(t); )
      ;
    r = si[a];
  }
  for (a = e.length; a--; )
    e[a] && (e[a]._gsap || (e[a]._gsap = new Is(e[a], r))) || e.splice(a, 1);
  return e;
}, Pt = function(e) {
  return e._gsap || Va(Ue(e))[0]._gsap;
}, bs = function(e, t, r) {
  return (r = e[t]) && le(r) ? e[t]() : Ra(r) && e.getAttribute && e.getAttribute(t) || r;
}, Ae = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, ce = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, pe = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Yt = function(e, t) {
  var r = t.charAt(0), a = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + a : r === "-" ? e - a : r === "*" ? e * a : e / a;
}, xc = function(e, t) {
  for (var r = t.length, a = 0; e.indexOf(t[a]) < 0 && ++a < r; )
    ;
  return a < r;
}, fi = function() {
  var e = _t.length, t = _t.slice(0), r, a;
  for (da = {}, _t.length = 0, r = 0; r < e; r++)
    a = t[r], a && a._lazy && (a.render(a._lazy[0], a._lazy[1], !0)._lazy = 0);
}, _s = function(e, t, r, a) {
  _t.length && !me && fi(), e.render(t, r, a || me && t < 0 && (e._initted || e._startAt)), _t.length && !me && fi();
}, ys = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(ps).length < 2 ? t : ge(e) ? e.trim() : e;
}, ks = function(e) {
  return e;
}, qe = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, Cc = function(e) {
  return function(t, r) {
    for (var a in r)
      a in t || a === "duration" && e || a === "ease" || (t[a] = r[a]);
  };
}, tr = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, qo = function i(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = it(t[r]) ? i(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, gi = function(e, t) {
  var r = {}, a;
  for (a in e)
    a in t || (r[a] = e[a]);
  return r;
}, Dr = function(e) {
  var t = e.parent || oe, r = e.keyframes ? Cc(ke(e.keyframes)) : qe;
  if (De(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, Dc = function(e, t) {
  for (var r = e.length, a = r === t.length; a && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, vs = function(e, t, r, a, o) {
  r === void 0 && (r = "_first"), a === void 0 && (a = "_last");
  var n = e[a], s;
  if (o)
    for (s = t[o]; n && n[o] > s; )
      n = n._prev;
  return n ? (t._next = n._next, n._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[a] = t, t._prev = n, t.parent = t._dp = e, t;
}, Ei = function(e, t, r, a) {
  r === void 0 && (r = "_first"), a === void 0 && (a = "_last");
  var o = t._prev, n = t._next;
  o ? o._next = n : e[r] === t && (e[r] = n), n ? n._prev = o : e[a] === t && (e[a] = o), t._next = t._prev = t.parent = null;
}, vt = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Rt = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, Ac = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, pa = function(e, t, r, a) {
  return e._startAt && (me ? e._startAt.revert(ni) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, a));
}, Sc = function i(e) {
  return !e || e._ts && i(e.parent);
}, Oo = function(e) {
  return e._repeat ? rr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, rr = function(e, t) {
  var r = Math.floor(e = pe(e / t));
  return e && r === e ? r - 1 : r;
}, mi = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Fi = function(e) {
  return e._end = pe(e._start + (e._tDur / Math.abs(e._ts || e._rts || Q) || 0));
}, Li = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = pe(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Fi(e), r._dirty || Rt(r, e)), e;
}, ws = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = mi(e.rawTime(), t), (!t._dur || Gr(0, t.totalDuration(), r) - t._tTime > Q) && t.render(r, !0)), Rt(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -Q;
  }
}, Ze = function(e, t, r, a) {
  return t.parent && vt(t), t._start = pe((ct(r) ? r : r || e !== oe ? Me(e, r, t) : e._time) + t._delay), t._end = pe(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), vs(e, t, "_first", "_last", e._sort ? "_start" : 0), ha(t) || (e._recent = t), a || ws(e, t), e._ts < 0 && Li(e, e._tTime), e;
}, xs = function(e, t) {
  return (Ne.ScrollTrigger || Oa("scrollTrigger", t)) && Ne.ScrollTrigger.create(t, e);
}, Cs = function(e, t, r, a, o) {
  if (Ua(e, t, o), !e._initted)
    return 1;
  if (!r && e._pt && !me && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && ms !== Te.frame)
    return _t.push(e), e._lazy = [o, a], 1;
}, Bc = function i(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
}, ha = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, Ec = function(e, t, r, a) {
  var o = e.ratio, n = t < 0 || !t && (!e._start && Bc(e) && !(!e._initted && ha(e)) || (e._ts < 0 || e._dp._ts < 0) && !ha(e)) ? 0 : 1, s = e._rDelay, l = 0, u, c, p;
  if (s && e._repeat && (l = Gr(0, e._tDur, t), c = rr(l, s), e._yoyo && c & 1 && (n = 1 - n), c !== rr(e._tTime, s) && (o = 1 - n, e.vars.repeatRefresh && e._initted && e.invalidate())), n !== o || me || a || e._zTime === Q || !t && e._zTime) {
    if (!e._initted && Cs(e, t, a, r, l))
      return;
    for (p = e._zTime, e._zTime = t || (r ? Q : 0), r || (r = t && !p), e.ratio = n, e._from && (n = 1 - n), e._time = 0, e._tTime = l, u = e._pt; u; )
      u.r(n, u.d), u = u._next;
    t < 0 && pa(e, t, r, !0), e._onUpdate && !r && Pe(e, "onUpdate"), l && e._repeat && !r && e.parent && Pe(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === n && (n && vt(e, 1), !r && !me && (Pe(e, n ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = t);
}, Fc = function(e, t, r) {
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
}, ir = function(e, t, r, a) {
  var o = e._repeat, n = pe(t) || 0, s = e._tTime / e._tDur;
  return s && !a && (e._time *= n / e._dur), e._dur = n, e._tDur = o ? o < 0 ? 1e10 : pe(n * (o + 1) + e._rDelay * o) : n, s > 0 && !a && Li(e, e._tTime = e._tDur * s), e.parent && Fi(e), r || Rt(e.parent, e), e;
}, Mo = function(e) {
  return e instanceof xe ? Rt(e) : ir(e, e._dur);
}, Lc = {
  _start: 0,
  endTime: Nr,
  totalDuration: Nr
}, Me = function i(e, t, r) {
  var a = e.labels, o = e._recent || Lc, n = e.duration() >= je ? o.endTime(!1) : e._dur, s, l, u;
  return ge(t) && (isNaN(t) || t in a) ? (l = t.charAt(0), u = t.substr(-1) === "%", s = t.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (t = t.replace(/=/, "")), (l === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (s < 0 ? o : r).totalDuration() / 100 : 1)) : s < 0 ? (t in a || (a[t] = n), a[t]) : (l = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), u && r && (l = l / 100 * (ke(r) ? r[0] : r).totalDuration()), s > 1 ? i(e, t.substr(0, s - 1), r) + l : n + l)) : t == null ? n : +t;
}, Ar = function(e, t, r) {
  var a = ct(t[1]), o = (a ? 2 : 1) + (e < 2 ? 0 : 1), n = t[o], s, l;
  if (a && (n.duration = t[1]), n.parent = r, e) {
    for (s = n, l = r; l && !("immediateRender" in s); )
      s = l.vars.defaults || {}, l = De(l.vars.inherit) && l.parent;
    n.immediateRender = De(s.immediateRender), e < 2 ? n.runBackwards = 1 : n.startAt = t[o - 1];
  }
  return new de(t[0], n, t[o + 1]);
}, Ct = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Gr = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, _e = function(e, t) {
  return !ge(e) || !(t = kc.exec(e)) ? "" : t[1];
}, zc = function(e, t, r) {
  return Ct(r, function(a) {
    return Gr(e, t, a);
  });
}, fa = [].slice, Ds = function(e, t) {
  return e && it(e) && "length" in e && (!t && !e.length || e.length - 1 in e && it(e[0])) && !e.nodeType && e !== Ye;
}, Tc = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(a) {
    var o;
    return ge(a) && !t || Ds(a, 1) ? (o = r).push.apply(o, Ue(a)) : r.push(a);
  }) || r;
}, Ue = function(e, t, r) {
  return ae && !t && ae.selector ? ae.selector(e) : ge(e) && !r && (ca || !ar()) ? fa.call((t || qa).querySelectorAll(e), 0) : ke(e) ? Tc(e, r) : Ds(e) ? fa.call(e, 0) : e ? [e] : [];
}, ga = function(e) {
  return e = Ue(e)[0] || Rr("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return Ue(t, r.querySelectorAll ? r : r === e ? Rr("Invalid scope") || qa.createElement("div") : e);
  };
}, As = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Ss = function(e) {
  if (le(e))
    return e;
  var t = it(e) ? e : {
    each: e
  }, r = Nt(t.ease), a = t.from || 0, o = parseFloat(t.base) || 0, n = {}, s = a > 0 && a < 1, l = isNaN(a) || s, u = t.axis, c = a, p = a;
  return ge(a) ? c = p = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[a] || 0 : !s && l && (c = a[0], p = a[1]), function(h, f, b) {
    var g = (b || t).length, m = n[g], k, _, y, v, w, x, D, A, C;
    if (!m) {
      if (C = t.grid === "auto" ? 0 : (t.grid || [1, je])[1], !C) {
        for (D = -je; D < (D = b[C++].getBoundingClientRect().left) && C < g; )
          ;
        C < g && C--;
      }
      for (m = n[g] = [], k = l ? Math.min(C, g) * c - 0.5 : a % C, _ = C === je ? 0 : l ? g * p / C - 0.5 : a / C | 0, D = 0, A = je, x = 0; x < g; x++)
        y = x % C - k, v = _ - (x / C | 0), m[x] = w = u ? Math.abs(u === "y" ? v : y) : ls(y * y + v * v), w > D && (D = w), w < A && (A = w);
      a === "random" && As(m), m.max = D - A, m.min = A, m.v = g = (parseFloat(t.amount) || parseFloat(t.each) * (C > g ? g - 1 : u ? u === "y" ? g / C : C : Math.max(C, g / C)) || 0) * (a === "edges" ? -1 : 1), m.b = g < 0 ? o - g : o, m.u = _e(t.amount || t.each) || 0, r = r && g < 0 ? qs(r) : r;
    }
    return g = (m[h] - m.min) / m.max || 0, pe(m.b + (r ? r(g) : g) * m.v) + m.u;
  };
}, ma = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var a = pe(Math.round(parseFloat(r) / e) * e * t);
    return (a - a % 1) / t + (ct(r) ? 0 : _e(r));
  };
}, Bs = function(e, t) {
  var r = ke(e), a, o;
  return !r && it(e) && (a = r = e.radius || je, e.values ? (e = Ue(e.values), (o = !ct(e[0])) && (a *= a)) : e = ma(e.increment)), Ct(t, r ? le(e) ? function(n) {
    return o = e(n), Math.abs(o - n) <= a ? o : n;
  } : function(n) {
    for (var s = parseFloat(o ? n.x : n), l = parseFloat(o ? n.y : 0), u = je, c = 0, p = e.length, h, f; p--; )
      o ? (h = e[p].x - s, f = e[p].y - l, h = h * h + f * f) : h = Math.abs(e[p] - s), h < u && (u = h, c = p);
    return c = !a || u <= a ? e[c] : n, o || c === n || ct(n) ? c : c + _e(n);
  } : ma(e));
}, Es = function(e, t, r, a) {
  return Ct(ke(e) ? !t : r === !0 ? !!(r = 0) : !a, function() {
    return ke(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (a = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * a) / a;
  });
}, Pc = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(a) {
    return t.reduce(function(o, n) {
      return n(o);
    }, a);
  };
}, Rc = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || _e(r));
  };
}, Nc = function(e, t, r) {
  return Ls(e, t, 0, 1, r);
}, Fs = function(e, t, r) {
  return Ct(r, function(a) {
    return e[~~t(a)];
  });
}, qc = function i(e, t, r) {
  var a = t - e;
  return ke(e) ? Fs(e, i(0, e.length), t) : Ct(r, function(o) {
    return (a + (o - e) % a) % a + e;
  });
}, Oc = function i(e, t, r) {
  var a = t - e, o = a * 2;
  return ke(e) ? Fs(e, i(0, e.length - 1), t) : Ct(r, function(n) {
    return n = (o + (n - e) % o) % o || 0, e + (n > a ? o - n : n);
  });
}, qr = function(e) {
  for (var t = 0, r = "", a, o, n, s; ~(a = e.indexOf("random(", t)); )
    n = e.indexOf(")", a), s = e.charAt(a + 7) === "[", o = e.substr(a + 7, n - a - 7).match(s ? ps : ua), r += e.substr(t, a - t) + Es(s ? o : +o[0], s ? 0 : +o[1], +o[2] || 1e-5), t = n + 1;
  return r + e.substr(t, e.length - t);
}, Ls = function(e, t, r, a, o) {
  var n = t - e, s = a - r;
  return Ct(o, function(l) {
    return r + ((l - e) / n * s || 0);
  });
}, Mc = function i(e, t, r, a) {
  var o = isNaN(e + t) ? 0 : function(f) {
    return (1 - f) * e + f * t;
  };
  if (!o) {
    var n = ge(e), s = {}, l, u, c, p, h;
    if (r === !0 && (a = 1) && (r = null), n)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (ke(e) && !ke(t)) {
      for (c = [], p = e.length, h = p - 2, u = 1; u < p; u++)
        c.push(i(e[u - 1], e[u]));
      p--, o = function(b) {
        b *= p;
        var g = Math.min(h, ~~b);
        return c[g](b - g);
      }, r = t;
    } else
      a || (e = tr(ke(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        ja.call(s, e, l, "get", t[l]);
      o = function(b) {
        return Ka(b, s) || (n ? e.p : e);
      };
    }
  }
  return Ct(r, o);
}, Io = function(e, t, r) {
  var a = e.labels, o = je, n, s, l;
  for (n in a)
    s = a[n] - t, s < 0 == !!r && s && o > (s = Math.abs(s)) && (l = n, o = s);
  return l;
}, Pe = function(e, t, r) {
  var a = e.vars, o = a[t], n = ae, s = e._ctx, l, u, c;
  if (o)
    return l = a[t + "Params"], u = a.callbackScope || e, r && _t.length && fi(), s && (ae = s), c = l ? o.apply(u, l) : o.call(u), ae = n, c;
}, yr = function(e) {
  return vt(e), e.scrollTrigger && e.scrollTrigger.kill(!!me), e.progress() < 1 && Pe(e, "onInterrupt"), e;
}, Kt, zs = [], Ts = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Na() || e.headless) {
      var t = e.name, r = le(e), a = t && !r && e.init ? function() {
        this._props = [];
      } : e, o = {
        init: Nr,
        render: Ka,
        add: ja,
        kill: td,
        modifier: ed,
        rawVars: 0
      }, n = {
        targetTest: 0,
        get: 0,
        getSetter: Ha,
        aliases: {},
        register: 0
      };
      if (ar(), e !== a) {
        if (ze[t])
          return;
        qe(a, qe(gi(e, o), n)), tr(a.prototype, tr(o, gi(e, n))), ze[a.prop = t] = a, e.targetTest && (si.push(a), Ma[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      gs(t, a), e.register && e.register(Fe, a, Se);
    } else
      zs.push(e);
}, Z = 255, kr = {
  aqua: [0, Z, Z],
  lime: [0, Z, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Z],
  navy: [0, 0, 128],
  white: [Z, Z, Z],
  olive: [128, 128, 0],
  yellow: [Z, Z, 0],
  orange: [Z, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Z, 0, 0],
  pink: [Z, 192, 203],
  cyan: [0, Z, Z],
  transparent: [Z, Z, Z, 0]
}, $i = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * Z + 0.5 | 0;
}, Ps = function(e, t, r) {
  var a = e ? ct(e) ? [e >> 16, e >> 8 & Z, e & Z] : 0 : kr.black, o, n, s, l, u, c, p, h, f, b;
  if (!a) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), kr[e])
      a = kr[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (o = e.charAt(1), n = e.charAt(2), s = e.charAt(3), e = "#" + o + o + n + n + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return a = parseInt(e.substr(1, 6), 16), [a >> 16, a >> 8 & Z, a & Z, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), a = [e >> 16, e >> 8 & Z, e & Z];
    } else if (e.substr(0, 3) === "hsl") {
      if (a = b = e.match(ua), !t)
        l = +a[0] % 360 / 360, u = +a[1] / 100, c = +a[2] / 100, n = c <= 0.5 ? c * (u + 1) : c + u - c * u, o = c * 2 - n, a.length > 3 && (a[3] *= 1), a[0] = $i(l + 1 / 3, o, n), a[1] = $i(l, o, n), a[2] = $i(l - 1 / 3, o, n);
      else if (~e.indexOf("="))
        return a = e.match(cs), r && a.length < 4 && (a[3] = 1), a;
    } else
      a = e.match(ua) || kr.transparent;
    a = a.map(Number);
  }
  return t && !b && (o = a[0] / Z, n = a[1] / Z, s = a[2] / Z, p = Math.max(o, n, s), h = Math.min(o, n, s), c = (p + h) / 2, p === h ? l = u = 0 : (f = p - h, u = c > 0.5 ? f / (2 - p - h) : f / (p + h), l = p === o ? (n - s) / f + (n < s ? 6 : 0) : p === n ? (s - o) / f + 2 : (o - n) / f + 4, l *= 60), a[0] = ~~(l + 0.5), a[1] = ~~(u * 100 + 0.5), a[2] = ~~(c * 100 + 0.5)), r && a.length < 4 && (a[3] = 1), a;
}, Rs = function(e) {
  var t = [], r = [], a = -1;
  return e.split(yt).forEach(function(o) {
    var n = o.match(Ht) || [];
    t.push.apply(t, n), r.push(a += n.length + 1);
  }), t.c = r, t;
}, Vo = function(e, t, r) {
  var a = "", o = (e + a).match(yt), n = t ? "hsla(" : "rgba(", s = 0, l, u, c, p;
  if (!o)
    return e;
  if (o = o.map(function(h) {
    return (h = Ps(h, t, 1)) && n + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (c = Rs(e), l = r.c, l.join(a) !== c.c.join(a)))
    for (u = e.replace(yt, "1").split(Ht), p = u.length - 1; s < p; s++)
      a += u[s] + (~l.indexOf(s) ? o.shift() || n + "0,0,0,0)" : (c.length ? c : o.length ? o : r).shift());
  if (!u)
    for (u = e.split(yt), p = u.length - 1; s < p; s++)
      a += u[s] + o[s];
  return a + u[p];
}, yt = function() {
  var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in kr)
    i += "|" + e + "\\b";
  return new RegExp(i + ")", "gi");
}(), Ic = /hsl[a]?\(/, Ns = function(e) {
  var t = e.join(" "), r;
  if (yt.lastIndex = 0, yt.test(t))
    return r = Ic.test(t), e[1] = Vo(e[1], r), e[0] = Vo(e[0], r, Rs(e[1])), !0;
}, Or, Te = function() {
  var i = Date.now, e = 500, t = 33, r = i(), a = r, o = 1e3 / 240, n = o, s = [], l, u, c, p, h, f, b = function g(m) {
    var k = i() - a, _ = m === !0, y, v, w, x;
    if ((k > e || k < 0) && (r += k - t), a += k, w = a - r, y = w - n, (y > 0 || _) && (x = ++p.frame, h = w - p.time * 1e3, p.time = w = w / 1e3, n += y + (y >= o ? 4 : o - y), v = 1), _ || (l = u(g)), v)
      for (f = 0; f < s.length; f++)
        s[f](w, h, x, m);
  };
  return p = {
    time: 0,
    frame: 0,
    tick: function() {
      b(!0);
    },
    deltaRatio: function(m) {
      return h / (1e3 / (m || 60));
    },
    wake: function() {
      hs && (!ca && Na() && (Ye = ca = window, qa = Ye.document || {}, Ne.gsap = Fe, (Ye.gsapVersions || (Ye.gsapVersions = [])).push(Fe.version), fs(hi || Ye.GreenSockGlobals || !Ye.gsap && Ye || {}), zs.forEach(Ts)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && p.sleep(), u = c || function(m) {
        return setTimeout(m, n - p.time * 1e3 + 1 | 0);
      }, Or = 1, b(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), Or = 0, u = Nr;
    },
    lagSmoothing: function(m, k) {
      e = m || 1 / 0, t = Math.min(k || 33, e);
    },
    fps: function(m) {
      o = 1e3 / (m || 240), n = p.time * 1e3 + o;
    },
    add: function(m, k, _) {
      var y = k ? function(v, w, x, D) {
        m(v, w, x, D), p.remove(y);
      } : m;
      return p.remove(m), s[_ ? "unshift" : "push"](y), ar(), y;
    },
    remove: function(m, k) {
      ~(k = s.indexOf(m)) && s.splice(k, 1) && f >= k && f--;
    },
    _listeners: s
  }, p;
}(), ar = function() {
  return !Or && Te.wake();
}, G = {}, Vc = /^[\d.\-M][\d.\-,\s]/, jc = /["']/g, Uc = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), a = r[0], o = 1, n = r.length, s, l, u; o < n; o++)
    l = r[o], s = o !== n - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, s), t[a] = isNaN(u) ? u.replace(jc, "").trim() : +u, a = l.substr(s + 1).trim();
  return t;
}, $c = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), a = e.indexOf("(", t);
  return e.substring(t, ~a && a < r ? e.indexOf(")", r + 1) : r);
}, Hc = function(e) {
  var t = (e + "").split("("), r = G[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Uc(t[1])] : $c(e).split(",").map(ys)) : G._CE && Vc.test(e) ? G._CE("", e) : r;
}, qs = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Os = function i(e, t) {
  for (var r = e._first, a; r; )
    r instanceof xe ? i(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? i(r.timeline, t) : (a = r._ease, r._ease = r._yEase, r._yEase = a, r._yoyo = t)), r = r._next;
}, Nt = function(e, t) {
  return e && (le(e) ? e : G[e] || Hc(e)) || t;
}, It = function(e, t, r, a) {
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
  return Ae(e, function(s) {
    G[s] = Ne[s] = o, G[n = s.toLowerCase()] = r;
    for (var l in o)
      G[n + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = G[s + "." + l] = o[l];
  }), o;
}, Ms = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Hi = function i(e, t, r) {
  var a = t >= 1 ? t : 1, o = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), n = o / la * (Math.asin(1 / a) || 0), s = function(c) {
    return c === 1 ? 1 : a * Math.pow(2, -10 * c) * yc((c - n) * o) + 1;
  }, l = e === "out" ? s : e === "in" ? function(u) {
    return 1 - s(1 - u);
  } : Ms(s);
  return o = la / o, l.config = function(u, c) {
    return i(e, u, c);
  }, l;
}, Ki = function i(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(n) {
    return n ? --n * n * ((t + 1) * n + t) + 1 : 0;
  }, a = e === "out" ? r : e === "in" ? function(o) {
    return 1 - r(1 - o);
  } : Ms(r);
  return a.config = function(o) {
    return i(e, o);
  }, a;
};
Ae("Linear,Quad,Cubic,Quart,Quint,Strong", function(i, e) {
  var t = e < 5 ? e + 1 : e;
  It(i + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
G.Linear.easeNone = G.none = G.Linear.easeIn;
It("Elastic", Hi("in"), Hi("out"), Hi());
(function(i, e) {
  var t = 1 / e, r = 2 * t, a = 2.5 * t, o = function(s) {
    return s < t ? i * s * s : s < r ? i * Math.pow(s - 1.5 / e, 2) + 0.75 : s < a ? i * (s -= 2.25 / e) * s + 0.9375 : i * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  It("Bounce", function(n) {
    return 1 - o(1 - n);
  }, o);
})(7.5625, 2.75);
It("Expo", function(i) {
  return Math.pow(2, 10 * (i - 1)) * i + i * i * i * i * i * i * (1 - i);
});
It("Circ", function(i) {
  return -(ls(1 - i * i) - 1);
});
It("Sine", function(i) {
  return i === 1 ? 1 : -_c(i * mc) + 1;
});
It("Back", Ki("in"), Ki("out"), Ki());
G.SteppedEase = G.steps = Ne.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, a = e + (t ? 0 : 1), o = t ? 1 : 0, n = 1 - Q;
    return function(s) {
      return ((a * Gr(0, n, s) | 0) + o) * r;
    };
  }
};
er.ease = G["quad.out"];
Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i) {
  return Ia += i + "," + i + "Params,";
});
var Is = function(e, t) {
  this.id = bc++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : bs, this.set = t ? t.getSetter : Ha;
}, Mr = /* @__PURE__ */ function() {
  function i(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ir(this, +t.duration, 1, 1), this.data = t.data, ae && (this._ctx = ae, ae.data.push(this)), Or || Te.wake();
  }
  var e = i.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, ir(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, a) {
    if (ar(), !arguments.length)
      return this._tTime;
    var o = this._dp;
    if (o && o.smoothChildTiming && this._ts) {
      for (Li(this, r), !o._dp || o.parent || ws(o, this); o && o.parent; )
        o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Ze(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !a || this._initted && Math.abs(this._zTime) === Q || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), _s(this, r, a)), this;
  }, e.time = function(r, a) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Oo(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), a) : this._time;
  }, e.totalProgress = function(r, a) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, a) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, a) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Oo(this), a) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, a) {
    var o = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * o, a) : this._repeat ? rr(this._tTime, o) + 1 : 1;
  }, e.timeScale = function(r, a) {
    if (!arguments.length)
      return this._rts === -Q ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var o = this.parent && this._ts ? mi(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -Q ? 0 : this._rts, this.totalTime(Gr(-Math.abs(this._delay), this._tDur, o), a !== !1), Fi(this), Ac(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ar(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Q && (this._tTime -= Q)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var a = this.parent || this._dp;
      return a && (a._sort || !this.parent) && Ze(a, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (De(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var a = this.parent || this._dp;
    return a ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? mi(a.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = wc);
    var a = me;
    return me = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), me = a, this;
  }, e.globalTime = function(r) {
    for (var a = this, o = arguments.length ? r : a.rawTime(); a; )
      o = a._start + o / (Math.abs(a._ts) || 1), a = a._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : o;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Mo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var a = this._time;
      return this._rDelay = r, Mo(this), a ? this.time(a) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, a) {
    return this.totalTime(Me(this, r), De(a));
  }, e.restart = function(r, a) {
    return this.play().totalTime(r ? -this._delay : 0, De(a)), this._dur || (this._zTime = -Q), this;
  }, e.play = function(r, a) {
    return r != null && this.seek(r, a), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, a) {
    return r != null && this.seek(r || this.totalDuration(), a), this.reversed(!0).paused(!1);
  }, e.pause = function(r, a) {
    return r != null && this.seek(r, a), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -Q : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -Q, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, a = this._start, o;
    return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= a && o < this.endTime(!0) - Q);
  }, e.eventCallback = function(r, a, o) {
    var n = this.vars;
    return arguments.length > 1 ? (a ? (n[r] = a, o && (n[r + "Params"] = o), r === "onUpdate" && (this._onUpdate = a)) : delete n[r], this) : n[r];
  }, e.then = function(r) {
    var a = this;
    return new Promise(function(o) {
      var n = le(r) ? r : ks, s = function() {
        var u = a.then;
        a.then = null, le(n) && (n = n(a)) && (n.then || n === a) && (a.then = u), o(n), a.then = u;
      };
      a._initted && a.totalProgress() === 1 && a._ts >= 0 || !a._tTime && a._ts < 0 ? s() : a._prom = s;
    });
  }, e.kill = function() {
    yr(this);
  }, i;
}();
qe(Mr.prototype, {
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
  _zTime: -Q,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var xe = /* @__PURE__ */ function(i) {
  ss(e, i);
  function e(r, a) {
    var o;
    return r === void 0 && (r = {}), o = i.call(this, r) || this, o.labels = {}, o.smoothChildTiming = !!r.smoothChildTiming, o.autoRemoveChildren = !!r.autoRemoveChildren, o._sort = De(r.sortChildren), oe && Ze(r.parent || oe, nt(o), a), r.reversed && o.reverse(), r.paused && o.paused(!0), r.scrollTrigger && xs(nt(o), r.scrollTrigger), o;
  }
  var t = e.prototype;
  return t.to = function(a, o, n) {
    return Ar(0, arguments, this), this;
  }, t.from = function(a, o, n) {
    return Ar(1, arguments, this), this;
  }, t.fromTo = function(a, o, n, s) {
    return Ar(2, arguments, this), this;
  }, t.set = function(a, o, n) {
    return o.duration = 0, o.parent = this, Dr(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new de(a, o, Me(this, n), 1), this;
  }, t.call = function(a, o, n) {
    return Ze(this, de.delayedCall(0, a, o), n);
  }, t.staggerTo = function(a, o, n, s, l, u, c) {
    return n.duration = o, n.stagger = n.stagger || s, n.onComplete = u, n.onCompleteParams = c, n.parent = this, new de(a, n, Me(this, l)), this;
  }, t.staggerFrom = function(a, o, n, s, l, u, c) {
    return n.runBackwards = 1, Dr(n).immediateRender = De(n.immediateRender), this.staggerTo(a, o, n, s, l, u, c);
  }, t.staggerFromTo = function(a, o, n, s, l, u, c, p) {
    return s.startAt = n, Dr(s).immediateRender = De(s.immediateRender), this.staggerTo(a, o, s, l, u, c, p);
  }, t.render = function(a, o, n) {
    var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = a <= 0 ? 0 : pe(a), p = this._zTime < 0 != a < 0 && (this._initted || !u), h, f, b, g, m, k, _, y, v, w, x, D;
    if (this !== oe && c > l && a >= 0 && (c = l), c !== this._tTime || n || p) {
      if (s !== this._time && u && (c += this._time - s, a += this._time - s), h = c, v = this._start, y = this._ts, k = !y, p && (u || (s = this._zTime), (a || !o) && (this._zTime = a)), this._repeat) {
        if (x = this._yoyo, m = u + this._rDelay, this._repeat < -1 && a < 0)
          return this.totalTime(m * 100 + a, o, n);
        if (h = pe(c % m), c === l ? (g = this._repeat, h = u) : (w = pe(c / m), g = ~~w, g && g === w && (h = u, g--), h > u && (h = u)), w = rr(this._tTime, m), !s && this._tTime && w !== g && this._tTime - w * m - this._dur <= 0 && (w = g), x && g & 1 && (h = u - h, D = 1), g !== w && !this._lock) {
          var A = x && w & 1, C = A === (x && g & 1);
          if (g < w && (A = !A), s = A ? 0 : c % u ? u : c, this._lock = 1, this.render(s || (D ? 0 : pe(g * m)), o, !u)._lock = 0, this._tTime = c, !o && this.parent && Pe(this, "onRepeat"), this.vars.repeatRefresh && !D && (this.invalidate()._lock = 1), s && s !== this._time || k !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, C && (this._lock = 2, s = A ? u : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !D && this.invalidate()), this._lock = 0, !this._ts && !k)
            return this;
          Os(this, D);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (_ = Fc(this, pe(s), pe(h)), _ && (c -= h - (h = _._start))), this._tTime = c, this._time = h, this._act = !y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = a, s = 0), !s && h && !o && !g && (Pe(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= s && a >= 0)
        for (f = this._first; f; ) {
          if (b = f._next, (f._act || h >= f._start) && f._ts && _ !== f) {
            if (f.parent !== this)
              return this.render(a, o, n);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, o, n), h !== this._time || !this._ts && !k) {
              _ = 0, b && (c += this._zTime = -Q);
              break;
            }
          }
          f = b;
        }
      else {
        f = this._last;
        for (var z = a < 0 ? a : h; f; ) {
          if (b = f._prev, (f._act || z <= f._end) && f._ts && _ !== f) {
            if (f.parent !== this)
              return this.render(a, o, n);
            if (f.render(f._ts > 0 ? (z - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (z - f._start) * f._ts, o, n || me && (f._initted || f._startAt)), h !== this._time || !this._ts && !k) {
              _ = 0, b && (c += this._zTime = z ? -Q : Q);
              break;
            }
          }
          f = b;
        }
      }
      if (_ && !o && (this.pause(), _.render(h >= s ? 0 : -Q)._zTime = h >= s ? 1 : -1, this._ts))
        return this._start = v, Fi(this), this.render(a, o, n);
      this._onUpdate && !o && Pe(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && s) && (v === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((a || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && vt(this, 1), !o && !(a < 0 && !s) && (c || s || !l) && (Pe(this, c === l && a >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(a, o) {
    var n = this;
    if (ct(o) || (o = Me(this, o, a)), !(a instanceof Mr)) {
      if (ke(a))
        return a.forEach(function(s) {
          return n.add(s, o);
        }), this;
      if (ge(a))
        return this.addLabel(a, o);
      if (le(a))
        a = de.delayedCall(0, a);
      else
        return this;
    }
    return this !== a ? Ze(this, a, o) : this;
  }, t.getChildren = function(a, o, n, s) {
    a === void 0 && (a = !0), o === void 0 && (o = !0), n === void 0 && (n = !0), s === void 0 && (s = -je);
    for (var l = [], u = this._first; u; )
      u._start >= s && (u instanceof de ? o && l.push(u) : (n && l.push(u), a && l.push.apply(l, u.getChildren(!0, o, n)))), u = u._next;
    return l;
  }, t.getById = function(a) {
    for (var o = this.getChildren(1, 1, 1), n = o.length; n--; )
      if (o[n].vars.id === a)
        return o[n];
  }, t.remove = function(a) {
    return ge(a) ? this.removeLabel(a) : le(a) ? this.killTweensOf(a) : (a.parent === this && Ei(this, a), a === this._recent && (this._recent = this._last), Rt(this));
  }, t.totalTime = function(a, o) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = pe(Te.time - (this._ts > 0 ? a / this._ts : (this.totalDuration() - a) / -this._ts))), i.prototype.totalTime.call(this, a, o), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(a, o) {
    return this.labels[a] = Me(this, o), this;
  }, t.removeLabel = function(a) {
    return delete this.labels[a], this;
  }, t.addPause = function(a, o, n) {
    var s = de.delayedCall(0, o || Nr, n);
    return s.data = "isPause", this._hasPause = 1, Ze(this, s, Me(this, a));
  }, t.removePause = function(a) {
    var o = this._first;
    for (a = Me(this, a); o; )
      o._start === a && o.data === "isPause" && vt(o), o = o._next;
  }, t.killTweensOf = function(a, o, n) {
    for (var s = this.getTweensOf(a, n), l = s.length; l--; )
      ft !== s[l] && s[l].kill(a, o);
    return this;
  }, t.getTweensOf = function(a, o) {
    for (var n = [], s = Ue(a), l = this._first, u = ct(o), c; l; )
      l instanceof de ? xc(l._targets, s) && (u ? (!ft || l._initted && l._ts) && l.globalTime(0) <= o && l.globalTime(l.totalDuration()) > o : !o || l.isActive()) && n.push(l) : (c = l.getTweensOf(s, o)).length && n.push.apply(n, c), l = l._next;
    return n;
  }, t.tweenTo = function(a, o) {
    o = o || {};
    var n = this, s = Me(n, a), l = o, u = l.startAt, c = l.onStart, p = l.onStartParams, h = l.immediateRender, f, b = de.to(n, qe({
      ease: o.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: o.duration || Math.abs((s - (u && "time" in u ? u.time : n._time)) / n.timeScale()) || Q,
      onStart: function() {
        if (n.pause(), !f) {
          var m = o.duration || Math.abs((s - (u && "time" in u ? u.time : n._time)) / n.timeScale());
          b._dur !== m && ir(b, m, 0, 1).render(b._time, !0, !0), f = 1;
        }
        c && c.apply(b, p || []);
      }
    }, o));
    return h ? b.render(0) : b;
  }, t.tweenFromTo = function(a, o, n) {
    return this.tweenTo(o, qe({
      startAt: {
        time: Me(this, a)
      }
    }, n));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(a) {
    return a === void 0 && (a = this._time), Io(this, Me(this, a));
  }, t.previousLabel = function(a) {
    return a === void 0 && (a = this._time), Io(this, Me(this, a), 1);
  }, t.currentLabel = function(a) {
    return arguments.length ? this.seek(a, !0) : this.previousLabel(this._time + Q);
  }, t.shiftChildren = function(a, o, n) {
    n === void 0 && (n = 0);
    for (var s = this._first, l = this.labels, u; s; )
      s._start >= n && (s._start += a, s._end += a), s = s._next;
    if (o)
      for (u in l)
        l[u] >= n && (l[u] += a);
    return Rt(this);
  }, t.invalidate = function(a) {
    var o = this._first;
    for (this._lock = 0; o; )
      o.invalidate(a), o = o._next;
    return i.prototype.invalidate.call(this, a);
  }, t.clear = function(a) {
    a === void 0 && (a = !0);
    for (var o = this._first, n; o; )
      n = o._next, this.remove(o), o = n;
    return this._dp && (this._time = this._tTime = this._pTime = 0), a && (this.labels = {}), Rt(this);
  }, t.totalDuration = function(a) {
    var o = 0, n = this, s = n._last, l = je, u, c, p;
    if (arguments.length)
      return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -a : a));
    if (n._dirty) {
      for (p = n.parent; s; )
        u = s._prev, s._dirty && s.totalDuration(), c = s._start, c > l && n._sort && s._ts && !n._lock ? (n._lock = 1, Ze(n, s, c - s._delay, 1)._lock = 0) : l = c, c < 0 && s._ts && (o -= c, (!p && !n._dp || p && p.smoothChildTiming) && (n._start += c / n._ts, n._time -= c, n._tTime -= c), n.shiftChildren(-c, !1, -1 / 0), l = 0), s._end > o && s._ts && (o = s._end), s = u;
      ir(n, n === oe && n._time > o ? n._time : o, 1, 1), n._dirty = 0;
    }
    return n._tDur;
  }, e.updateRoot = function(a) {
    if (oe._ts && (_s(oe, mi(a, oe)), ms = Te.frame), Te.frame >= No) {
      No += Re.autoSleep || 120;
      var o = oe._first;
      if ((!o || !o._ts) && Re.autoSleep && Te._listeners.length < 2) {
        for (; o && !o._ts; )
          o = o._next;
        o || Te.sleep();
      }
    }
  }, e;
}(Mr);
qe(xe.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Kc = function(e, t, r, a, o, n, s) {
  var l = new Se(this._pt, e, t, 0, 1, Ks, null, o), u = 0, c = 0, p, h, f, b, g, m, k, _;
  for (l.b = r, l.e = a, r += "", a += "", (k = ~a.indexOf("random(")) && (a = qr(a)), n && (_ = [r, a], n(_, e, t), r = _[0], a = _[1]), h = r.match(ji) || []; p = ji.exec(a); )
    b = p[0], g = a.substring(u, p.index), f ? f = (f + 1) % 5 : g.substr(-5) === "rgba(" && (f = 1), b !== h[c++] && (m = parseFloat(h[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: g || c === 1 ? g : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: b.charAt(1) === "=" ? Yt(m, b) - m : parseFloat(b) - m,
      m: f && f < 4 ? Math.round : 0
    }, u = ji.lastIndex);
  return l.c = u < a.length ? a.substring(u, a.length) : "", l.fp = s, (ds.test(a) || k) && (l.e = 0), this._pt = l, l;
}, ja = function(e, t, r, a, o, n, s, l, u, c) {
  le(a) && (a = a(o || 0, e, n));
  var p = e[t], h = r !== "get" ? r : le(p) ? u ? e[t.indexOf("set") || !le(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : p, f = le(p) ? u ? Zc : $s : $a, b;
  if (ge(a) && (~a.indexOf("random(") && (a = qr(a)), a.charAt(1) === "=" && (b = Yt(h, a) + (_e(h) || 0), (b || b === 0) && (a = b))), !c || h !== a || ba)
    return !isNaN(h * a) && a !== "" ? (b = new Se(this._pt, e, t, +h || 0, a - (h || 0), typeof p == "boolean" ? Qc : Hs, 0, f), u && (b.fp = u), s && b.modifier(s, this, e), this._pt = b) : (!p && !(t in e) && Oa(t, a), Kc.call(this, e, t, h, a, f, l || Re.stringFilter, u));
}, Gc = function(e, t, r, a, o) {
  if (le(e) && (e = Sr(e, o, t, r, a)), !it(e) || e.style && e.nodeType || ke(e) || us(e))
    return ge(e) ? Sr(e, o, t, r, a) : e;
  var n = {}, s;
  for (s in e)
    n[s] = Sr(e[s], o, t, r, a);
  return n;
}, Vs = function(e, t, r, a, o, n) {
  var s, l, u, c;
  if (ze[e] && (s = new ze[e]()).init(o, s.rawVars ? t[e] : Gc(t[e], a, o, n, r), r, a, n) !== !1 && (r._pt = l = new Se(r._pt, o, e, 0, 1, s.render, s, 0, s.priority), r !== Kt))
    for (u = r._ptLookup[r._targets.indexOf(o)], c = s._props.length; c--; )
      u[s._props[c]] = l;
  return s;
}, ft, ba, Ua = function i(e, t, r) {
  var a = e.vars, o = a.ease, n = a.startAt, s = a.immediateRender, l = a.lazy, u = a.onUpdate, c = a.runBackwards, p = a.yoyoEase, h = a.keyframes, f = a.autoRevert, b = e._dur, g = e._startAt, m = e._targets, k = e.parent, _ = k && k.data === "nested" ? k.vars.targets : m, y = e._overwrite === "auto" && !Pa, v = e.timeline, w, x, D, A, C, z, R, N, M, U, B, F, T;
  if (v && (!h || !o) && (o = "none"), e._ease = Nt(o, er.ease), e._yEase = p ? qs(Nt(p === !0 ? o : p, er.ease)) : 0, p && e._yoyo && !e._repeat && (p = e._yEase, e._yEase = e._ease, e._ease = p), e._from = !v && !!a.runBackwards, !v || h && !a.stagger) {
    if (N = m[0] ? Pt(m[0]).harness : 0, F = N && a[N.prop], w = gi(a, Ma), g && (g._zTime < 0 && g.progress(1), t < 0 && c && s && !f ? g.render(-1, !0) : g.revert(c && b ? ni : vc), g._lazy = 0), n) {
      if (vt(e._startAt = de.set(m, qe({
        data: "isStart",
        overwrite: !1,
        parent: k,
        immediateRender: !0,
        lazy: !g && De(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Pe(e, "onUpdate");
        },
        stagger: 0
      }, n))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (me || !s && !f) && e._startAt.revert(ni), s && b && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && b && !g) {
      if (t && (s = !1), D = qe({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !g && De(l),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: k
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), F && (D[N.prop] = F), vt(e._startAt = de.set(m, D)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (me ? e._startAt.revert(ni) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        i(e._startAt, Q, Q);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = b && De(l) || l && !b, x = 0; x < m.length; x++) {
      if (C = m[x], R = C._gsap || Va(m)[x]._gsap, e._ptLookup[x] = U = {}, da[R.id] && _t.length && fi(), B = _ === m ? x : _.indexOf(C), N && (M = new N()).init(C, F || w, e, B, _) !== !1 && (e._pt = A = new Se(e._pt, C, M.name, 0, 1, M.render, M, 0, M.priority), M._props.forEach(function(V) {
        U[V] = A;
      }), M.priority && (z = 1)), !N || F)
        for (D in w)
          ze[D] && (M = Vs(D, w, e, B, C, _)) ? M.priority && (z = 1) : U[D] = A = ja.call(e, C, D, "get", w[D], B, _, 0, a.stringFilter);
      e._op && e._op[x] && e.kill(C, e._op[x]), y && e._pt && (ft = e, oe.killTweensOf(C, U, e.globalTime(t)), T = !e.parent, ft = 0), e._pt && l && (da[R.id] = 1);
    }
    z && Gs(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !T, h && t <= 0 && v.render(je, !0, !0);
}, Wc = function(e, t, r, a, o, n, s, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, p, h, f;
  if (!u)
    for (u = e._ptCache[t] = [], h = e._ptLookup, f = e._targets.length; f--; ) {
      if (c = h[f][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return ba = 1, e.vars[t] = "+=0", Ua(e, s), ba = 0, l ? Rr(t + " not eligible for reset") : 1;
      u.push(c);
    }
  for (f = u.length; f--; )
    p = u[f], c = p._pt || p, c.s = (a || a === 0) && !o ? a : c.s + (a || 0) + n * c.c, c.c = r - c.s, p.e && (p.e = ce(r) + _e(p.e)), p.b && (p.b = c.s + _e(p.b));
}, Yc = function(e, t) {
  var r = e[0] ? Pt(e[0]).harness : 0, a = r && r.aliases, o, n, s, l;
  if (!a)
    return t;
  o = tr({}, t);
  for (n in a)
    if (n in o)
      for (l = a[n].split(","), s = l.length; s--; )
        o[l[s]] = o[n];
  return o;
}, Jc = function(e, t, r, a) {
  var o = t.ease || a || "power1.inOut", n, s;
  if (ke(t))
    s = r[e] || (r[e] = []), t.forEach(function(l, u) {
      return s.push({
        t: u / (t.length - 1) * 100,
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
}, Sr = function(e, t, r, a, o) {
  return le(e) ? e.call(t, r, a, o) : ge(e) && ~e.indexOf("random(") ? qr(e) : e;
}, js = Ia + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Us = {};
Ae(js + ",id,stagger,delay,duration,paused,scrollTrigger", function(i) {
  return Us[i] = 1;
});
var de = /* @__PURE__ */ function(i) {
  ss(e, i);
  function e(r, a, o, n) {
    var s;
    typeof a == "number" && (o.duration = a, a = o, o = null), s = i.call(this, n ? a : Dr(a)) || this;
    var l = s.vars, u = l.duration, c = l.delay, p = l.immediateRender, h = l.stagger, f = l.overwrite, b = l.keyframes, g = l.defaults, m = l.scrollTrigger, k = l.yoyoEase, _ = a.parent || oe, y = (ke(r) || us(r) ? ct(r[0]) : "length" in a) ? [r] : Ue(r), v, w, x, D, A, C, z, R;
    if (s._targets = y.length ? Va(y) : Rr("GSAP target " + r + " not found. https://gsap.com", !Re.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = f, b || h || ti(u) || ti(c)) {
      if (a = s.vars, v = s.timeline = new xe({
        data: "nested",
        defaults: g || {},
        targets: _ && _.data === "nested" ? _.vars.targets : y
      }), v.kill(), v.parent = v._dp = nt(s), v._start = 0, h || ti(u) || ti(c)) {
        if (D = y.length, z = h && Ss(h), it(h))
          for (A in h)
            ~js.indexOf(A) && (R || (R = {}), R[A] = h[A]);
        for (w = 0; w < D; w++)
          x = gi(a, Us), x.stagger = 0, k && (x.yoyoEase = k), R && tr(x, R), C = y[w], x.duration = +Sr(u, nt(s), w, C, y), x.delay = (+Sr(c, nt(s), w, C, y) || 0) - s._delay, !h && D === 1 && x.delay && (s._delay = c = x.delay, s._start += c, x.delay = 0), v.to(C, x, z ? z(w, C, y) : 0), v._ease = G.none;
        v.duration() ? u = c = 0 : s.timeline = 0;
      } else if (b) {
        Dr(qe(v.vars.defaults, {
          ease: "none"
        })), v._ease = Nt(b.ease || a.ease || "none");
        var N = 0, M, U, B;
        if (ke(b))
          b.forEach(function(F) {
            return v.to(y, F, ">");
          }), v.duration();
        else {
          x = {};
          for (A in b)
            A === "ease" || A === "easeEach" || Jc(A, b[A], x, b.easeEach);
          for (A in x)
            for (M = x[A].sort(function(F, T) {
              return F.t - T.t;
            }), N = 0, w = 0; w < M.length; w++)
              U = M[w], B = {
                ease: U.e,
                duration: (U.t - (w ? M[w - 1].t : 0)) / 100 * u
              }, B[A] = U.v, v.to(y, B, N), N += B.duration;
          v.duration() < u && v.to({}, {
            duration: u - v.duration()
          });
        }
      }
      u || s.duration(u = v.duration());
    } else
      s.timeline = 0;
    return f === !0 && !Pa && (ft = nt(s), oe.killTweensOf(y), ft = 0), Ze(_, nt(s), o), a.reversed && s.reverse(), a.paused && s.paused(!0), (p || !u && !b && s._start === pe(_._time) && De(p) && Sc(nt(s)) && _.data !== "nested") && (s._tTime = -Q, s.render(Math.max(0, -c) || 0)), m && xs(nt(s), m), s;
  }
  var t = e.prototype;
  return t.render = function(a, o, n) {
    var s = this._time, l = this._tDur, u = this._dur, c = a < 0, p = a > l - Q && !c ? l : a < Q ? 0 : a, h, f, b, g, m, k, _, y, v;
    if (!u)
      Ec(this, a, o, n);
    else if (p !== this._tTime || !a || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = p, y = this.timeline, this._repeat) {
        if (g = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(g * 100 + a, o, n);
        if (h = pe(p % g), p === l ? (b = this._repeat, h = u) : (m = pe(p / g), b = ~~m, b && b === m ? (h = u, b--) : h > u && (h = u)), k = this._yoyo && b & 1, k && (v = this._yEase, h = u - h), m = rr(this._tTime, g), h === s && !n && this._initted && b === m)
          return this._tTime = p, this;
        b !== m && (y && this._yEase && Os(y, k), this.vars.repeatRefresh && !k && !this._lock && h !== g && this._initted && (this._lock = n = 1, this.render(pe(g * b), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Cs(this, c ? a : h, n, o, p))
          return this._tTime = 0, this;
        if (s !== this._time && !(n && this.vars.repeatRefresh && b !== m))
          return this;
        if (u !== this._dur)
          return this.render(a, o, n);
      }
      if (this._tTime = p, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = _ = (v || this._ease)(h / u), this._from && (this.ratio = _ = 1 - _), h && !s && !o && !b && (Pe(this, "onStart"), this._tTime !== p))
        return this;
      for (f = this._pt; f; )
        f.r(_, f.d), f = f._next;
      y && y.render(a < 0 ? a : y._dur * y._ease(h / this._dur), o, n) || this._startAt && (this._zTime = a), this._onUpdate && !o && (c && pa(this, a, o, n), Pe(this, "onUpdate")), this._repeat && b !== m && this.vars.onRepeat && !o && this.parent && Pe(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (c && !this._onUpdate && pa(this, a, !0, !0), (a || !u) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && vt(this, 1), !o && !(c && !s) && (p || s || k) && (Pe(this, p === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(a) {
    return (!a || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(a), i.prototype.invalidate.call(this, a);
  }, t.resetTo = function(a, o, n, s, l) {
    Or || Te.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Ua(this, u), c = this._ease(u / this._dur), Wc(this, a, o, n, s, c, u, l) ? this.resetTo(a, o, n, s, 1) : (Li(this, 0), this.parent || vs(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(a, o) {
    if (o === void 0 && (o = "all"), !a && (!o || o === "all"))
      return this._lazy = this._pt = 0, this.parent ? yr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!me), this;
    if (this.timeline) {
      var n = this.timeline.totalDuration();
      return this.timeline.killTweensOf(a, o, ft && ft.vars.overwrite !== !0)._first || yr(this), this.parent && n !== this.timeline.totalDuration() && ir(this, this._dur * this.timeline._tDur / n, 0, 1), this;
    }
    var s = this._targets, l = a ? Ue(a) : s, u = this._ptLookup, c = this._pt, p, h, f, b, g, m, k;
    if ((!o || o === "all") && Dc(s, l))
      return o === "all" && (this._pt = 0), yr(this);
    for (p = this._op = this._op || [], o !== "all" && (ge(o) && (g = {}, Ae(o, function(_) {
      return g[_] = 1;
    }), o = g), o = Yc(s, o)), k = s.length; k--; )
      if (~l.indexOf(s[k])) {
        h = u[k], o === "all" ? (p[k] = o, b = h, f = {}) : (f = p[k] = p[k] || {}, b = o);
        for (g in b)
          m = h && h[g], m && ((!("kill" in m.d) || m.d.kill(g) === !0) && Ei(this, m, "_pt"), delete h[g]), f !== "all" && (f[g] = 1);
      }
    return this._initted && !this._pt && c && yr(this), this;
  }, e.to = function(a, o) {
    return new e(a, o, arguments[2]);
  }, e.from = function(a, o) {
    return Ar(1, arguments);
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
    return Ar(2, arguments);
  }, e.set = function(a, o) {
    return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(a, o);
  }, e.killTweensOf = function(a, o, n) {
    return oe.killTweensOf(a, o, n);
  }, e;
}(Mr);
qe(de.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ae("staggerTo,staggerFrom,staggerFromTo", function(i) {
  de[i] = function() {
    var e = new xe(), t = fa.call(arguments, 0);
    return t.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), e[i].apply(e, t);
  };
});
var $a = function(e, t, r) {
  return e[t] = r;
}, $s = function(e, t, r) {
  return e[t](r);
}, Zc = function(e, t, r, a) {
  return e[t](a.fp, r);
}, Xc = function(e, t, r) {
  return e.setAttribute(t, r);
}, Ha = function(e, t) {
  return le(e[t]) ? $s : Ra(e[t]) && e.setAttribute ? Xc : $a;
}, Hs = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Qc = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Ks = function(e, t) {
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
}, Ka = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, ed = function(e, t, r, a) {
  for (var o = this._pt, n; o; )
    n = o._next, o.p === a && o.modifier(e, t, r), o = n;
}, td = function(e) {
  for (var t = this._pt, r, a; t; )
    a = t._next, t.p === e && !t.op || t.op === e ? Ei(this, t, "_pt") : t.dep || (r = 1), t = a;
  return !r;
}, rd = function(e, t, r, a) {
  a.mSet(e, t, a.m.call(a.tween, r, a.mt), a);
}, Gs = function(e) {
  for (var t = e._pt, r, a, o, n; t; ) {
    for (r = t._next, a = o; a && a.pr > t.pr; )
      a = a._next;
    (t._prev = a ? a._prev : n) ? t._prev._next = t : o = t, (t._next = a) ? a._prev = t : n = t, t = r;
  }
  e._pt = o;
}, Se = /* @__PURE__ */ function() {
  function i(t, r, a, o, n, s, l, u, c) {
    this.t = r, this.s = o, this.c = n, this.p = a, this.r = s || Hs, this.d = l || this, this.set = u || $a, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = i.prototype;
  return e.modifier = function(r, a, o) {
    this.mSet = this.mSet || this.set, this.set = rd, this.m = r, this.mt = o, this.tween = a;
  }, i;
}();
Ae(Ia + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(i) {
  return Ma[i] = 1;
});
Ne.TweenMax = Ne.TweenLite = de;
Ne.TimelineLite = Ne.TimelineMax = xe;
oe = new xe({
  sortChildren: !1,
  defaults: er,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Re.stringFilter = Ns;
var qt = [], li = {}, id = [], jo = 0, ad = 0, Gi = function(e) {
  return (li[e] || id).map(function(t) {
    return t();
  });
}, _a = function() {
  var e = Date.now(), t = [];
  e - jo > 2 && (Gi("matchMediaInit"), qt.forEach(function(r) {
    var a = r.queries, o = r.conditions, n, s, l, u;
    for (s in a)
      n = Ye.matchMedia(a[s]).matches, n && (l = 1), n !== o[s] && (o[s] = n, u = 1);
    u && (r.revert(), l && t.push(r));
  }), Gi("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(a) {
      return r.add(null, a);
    });
  }), jo = e, Gi("matchMedia"));
}, Ws = /* @__PURE__ */ function() {
  function i(t, r) {
    this.selector = r && ga(r), this.data = [], this._r = [], this.isReverted = !1, this.id = ad++, t && this.add(t);
  }
  var e = i.prototype;
  return e.add = function(r, a, o) {
    le(r) && (o = a, a = r, r = le);
    var n = this, s = function() {
      var u = ae, c = n.selector, p;
      return u && u !== n && u.data.push(n), o && (n.selector = ga(o)), ae = n, p = a.apply(n, arguments), le(p) && n._r.push(p), ae = u, n.selector = c, n.isReverted = !1, p;
    };
    return n.last = s, r === le ? s(n, function(l) {
      return n.add(null, l);
    }) : r ? n[r] = s : s;
  }, e.ignore = function(r) {
    var a = ae;
    ae = null, r(this), ae = a;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(a) {
      return a instanceof i ? r.push.apply(r, a.getTweens()) : a instanceof de && !(a.parent && a.parent.data === "nested") && r.push(a);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, a) {
    var o = this;
    if (r ? function() {
      for (var s = o.getTweens(), l = o.data.length, u; l--; )
        u = o.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
          return s.splice(s.indexOf(c), 1);
        }));
      for (s.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, p) {
        return p.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(r);
      }), l = o.data.length; l--; )
        u = o.data[l], u instanceof xe ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof de) && u.revert && u.revert(r);
      o._r.forEach(function(c) {
        return c(r, o);
      }), o.isReverted = !0;
    }() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), a)
      for (var n = qt.length; n--; )
        qt[n].id === this.id && qt.splice(n, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, i;
}(), od = /* @__PURE__ */ function() {
  function i(t) {
    this.contexts = [], this.scope = t, ae && ae.data.push(this);
  }
  var e = i.prototype;
  return e.add = function(r, a, o) {
    it(r) || (r = {
      matches: r
    });
    var n = new Ws(0, o || this.scope), s = n.conditions = {}, l, u, c;
    ae && !n.selector && (n.selector = ae.selector), this.contexts.push(n), a = n.add("onMatch", a), n.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (l = Ye.matchMedia(r[u]), l && (qt.indexOf(n) < 0 && qt.push(n), (s[u] = l.matches) && (c = 1), l.addListener ? l.addListener(_a) : l.addEventListener("change", _a)));
    return c && a(n, function(p) {
      return n.add(null, p);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(a) {
      return a.kill(r, !0);
    });
  }, i;
}(), bi = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(a) {
      return Ts(a);
    });
  },
  timeline: function(e) {
    return new xe(e);
  },
  getTweensOf: function(e, t) {
    return oe.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, a) {
    ge(e) && (e = Ue(e)[0]);
    var o = Pt(e || {}).get, n = r ? ks : ys;
    return r === "native" && (r = ""), e && (t ? n((ze[t] && ze[t].get || o)(e, t, r, a)) : function(s, l, u) {
      return n((ze[s] && ze[s].get || o)(e, s, l, u));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = Ue(e), e.length > 1) {
      var a = e.map(function(c) {
        return Fe.quickSetter(c, t, r);
      }), o = a.length;
      return function(c) {
        for (var p = o; p--; )
          a[p](c);
      };
    }
    e = e[0] || {};
    var n = ze[t], s = Pt(e), l = s.harness && (s.harness.aliases || {})[t] || t, u = n ? function(c) {
      var p = new n();
      Kt._pt = 0, p.init(e, r ? c + r : c, Kt, 0, [e]), p.render(1, p), Kt._pt && Ka(1, Kt);
    } : s.set(e, l);
    return n ? u : function(c) {
      return u(e, l, r ? c + r : c, s, 1);
    };
  },
  quickTo: function(e, t, r) {
    var a, o = Fe.to(e, qe((a = {}, a[t] = "+=0.1", a.paused = !0, a.stagger = 0, a), r || {})), n = function(l, u, c) {
      return o.resetTo(t, l, u, c);
    };
    return n.tween = o, n;
  },
  isTweening: function(e) {
    return oe.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Nt(e.ease, er.ease)), qo(er, e || {});
  },
  config: function(e) {
    return qo(Re, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, a = e.plugins, o = e.defaults, n = e.extendTimeline;
    (a || "").split(",").forEach(function(s) {
      return s && !ze[s] && !Ne[s] && Rr(t + " effect requires " + s + " plugin.");
    }), Ui[t] = function(s, l, u) {
      return r(Ue(s), qe(l || {}, o), u);
    }, n && (xe.prototype[t] = function(s, l, u) {
      return this.add(Ui[t](s, it(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(e, t) {
    G[e] = Nt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Nt(e, t) : G;
  },
  getById: function(e) {
    return oe.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new xe(e), a, o;
    for (r.smoothChildTiming = De(e.smoothChildTiming), oe.remove(r), r._dp = 0, r._time = r._tTime = oe._time, a = oe._first; a; )
      o = a._next, (t || !(!a._dur && a instanceof de && a.vars.onComplete === a._targets[0])) && Ze(r, a, a._start - a._delay), a = o;
    return Ze(oe, r, 0), r;
  },
  context: function(e, t) {
    return e ? new Ws(e, t) : ae;
  },
  matchMedia: function(e) {
    return new od(e);
  },
  matchMediaRefresh: function() {
    return qt.forEach(function(e) {
      var t = e.conditions, r, a;
      for (a in t)
        t[a] && (t[a] = !1, r = 1);
      r && e.revert();
    }) || _a();
  },
  addEventListener: function(e, t) {
    var r = li[e] || (li[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = li[e], a = r && r.indexOf(t);
    a >= 0 && r.splice(a, 1);
  },
  utils: {
    wrap: qc,
    wrapYoyo: Oc,
    distribute: Ss,
    random: Es,
    snap: Bs,
    normalize: Nc,
    getUnit: _e,
    clamp: zc,
    splitColor: Ps,
    toArray: Ue,
    selector: ga,
    mapRange: Ls,
    pipe: Pc,
    unitize: Rc,
    interpolate: Mc,
    shuffle: As
  },
  install: fs,
  effects: Ui,
  ticker: Te,
  updateRoot: xe.updateRoot,
  plugins: ze,
  globalTimeline: oe,
  core: {
    PropTween: Se,
    globals: gs,
    Tween: de,
    Timeline: xe,
    Animation: Mr,
    getCache: Pt,
    _removeLinkedListItem: Ei,
    reverting: function() {
      return me;
    },
    context: function(e) {
      return e && ae && (ae.data.push(e), e._ctx = ae), ae;
    },
    suppressOverwrites: function(e) {
      return Pa = e;
    }
  }
};
Ae("to,from,fromTo,delayedCall,set,killTweensOf", function(i) {
  return bi[i] = de[i];
});
Te.add(xe.updateRoot);
Kt = bi.to({}, {
  duration: 0
});
var nd = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, sd = function(e, t) {
  var r = e._targets, a, o, n;
  for (a in t)
    for (o = r.length; o--; )
      n = e._ptLookup[o][a], n && (n = n.d) && (n._pt && (n = nd(n, a)), n && n.modifier && n.modifier(t[a], e, r[o], a));
}, Wi = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(a, o, n) {
      n._onInit = function(s) {
        var l, u;
        if (ge(o) && (l = {}, Ae(o, function(c) {
          return l[c] = 1;
        }), o = l), t) {
          l = {};
          for (u in o)
            l[u] = t(o[u]);
          o = l;
        }
        sd(s, o);
      };
    }
  };
}, Fe = bi.registerPlugin({
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
}, Wi("roundProps", ma), Wi("modifiers"), Wi("snap", Bs)) || bi;
de.version = xe.version = Fe.version = "3.12.7";
hs = 1;
Na() && ar();
G.Power0;
G.Power1;
G.Power2;
G.Power3;
G.Power4;
G.Linear;
G.Quad;
G.Cubic;
G.Quart;
G.Quint;
G.Strong;
G.Elastic;
G.Back;
G.SteppedEase;
G.Bounce;
G.Sine;
G.Expo;
G.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Uo, gt, Jt, Ga, Lt, $o, Wa, ld = function() {
  return typeof window < "u";
}, dt = {}, Bt = 180 / Math.PI, Zt = Math.PI / 180, Vt = Math.atan2, Ho = 1e8, Ya = /([A-Z])/g, ud = /(left|right|width|margin|padding|x)/i, cd = /[\s,\(]\S/, Xe = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ya = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, dd = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, pd = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, hd = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, Ys = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Js = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, fd = function(e, t, r) {
  return e.style[t] = r;
}, gd = function(e, t, r) {
  return e.style.setProperty(t, r);
}, md = function(e, t, r) {
  return e._gsap[t] = r;
}, bd = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, _d = function(e, t, r, a, o) {
  var n = e._gsap;
  n.scaleX = n.scaleY = r, n.renderTransform(o, n);
}, yd = function(e, t, r, a, o) {
  var n = e._gsap;
  n[t] = r, n.renderTransform(o, n);
}, ne = "transform", Be = ne + "Origin", kd = function i(e, t) {
  var r = this, a = this.target, o = a.style, n = a._gsap;
  if (e in dt && o) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Xe[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return r.tfm[s] = st(a, s);
      }) : this.tfm[e] = n.x ? n[e] : st(a, e), e === Be && (this.tfm.zOrigin = n.zOrigin);
    else
      return Xe.transform.split(",").forEach(function(s) {
        return i.call(r, s, t);
      });
    if (this.props.indexOf(ne) >= 0)
      return;
    n.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(Be, t, "")), e = ne;
  }
  (o || t) && this.props.push(e, t, o[e]);
}, Zs = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, vd = function() {
  var e = this.props, t = this.target, r = t.style, a = t._gsap, o, n;
  for (o = 0; o < e.length; o += 3)
    e[o + 1] ? e[o + 1] === 2 ? t[e[o]](e[o + 2]) : t[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(Ya, "-$1").toLowerCase());
  if (this.tfm) {
    for (n in this.tfm)
      a[n] = this.tfm[n];
    a.svg && (a.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), o = Wa(), (!o || !o.isStart) && !r[ne] && (Zs(r), a.zOrigin && r[Be] && (r[Be] += " " + a.zOrigin + "px", a.zOrigin = 0, a.renderTransform()), a.uncache = 1);
  }
}, Xs = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: vd,
    save: kd
  };
  return e._gsap || Fe.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(a) {
    return r.save(a);
  }), r;
}, Qs, ka = function(e, t) {
  var r = gt.createElementNS ? gt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : gt.createElement(e);
  return r && r.style ? r : gt.createElement(e);
}, tt = function i(e, t, r) {
  var a = getComputedStyle(e);
  return a[t] || a.getPropertyValue(t.replace(Ya, "-$1").toLowerCase()) || a.getPropertyValue(t) || !r && i(e, or(t) || t, 1) || "";
}, Ko = "O,Moz,ms,Ms,Webkit".split(","), or = function(e, t, r) {
  var a = t || Lt, o = a.style, n = 5;
  if (e in o && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(Ko[n] + e in o); )
    ;
  return n < 0 ? null : (n === 3 ? "ms" : n >= 0 ? Ko[n] : "") + e;
}, va = function() {
  ld() && window.document && (Uo = window, gt = Uo.document, Jt = gt.documentElement, Lt = ka("div") || {
    style: {}
  }, ka("div"), ne = or(ne), Be = ne + "Origin", Lt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Qs = !!or("perspective"), Wa = Fe.core.reverting, Ga = 1);
}, Go = function(e) {
  var t = e.ownerSVGElement, r = ka("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), a = e.cloneNode(!0), o;
  a.style.display = "block", r.appendChild(a), Jt.appendChild(r);
  try {
    o = a.getBBox();
  } catch {
  }
  return r.removeChild(a), Jt.removeChild(r), o;
}, Wo = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, el = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = Go(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = Go(e)), t && !t.width && !t.x && !t.y ? {
    x: +Wo(e, ["x", "cx", "x1"]) || 0,
    y: +Wo(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, tl = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && el(e));
}, Mt = function(e, t) {
  if (t) {
    var r = e.style, a;
    t in dt && t !== Be && (t = ne), r.removeProperty ? (a = t.substr(0, 2), (a === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(a === "--" ? t : t.replace(Ya, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, mt = function(e, t, r, a, o, n) {
  var s = new Se(e._pt, t, r, 0, 1, n ? Js : Ys);
  return e._pt = s, s.b = a, s.e = o, e._props.push(r), s;
}, Yo = {
  deg: 1,
  rad: 1,
  turn: 1
}, wd = {
  grid: 1,
  flex: 1
}, wt = function i(e, t, r, a) {
  var o = parseFloat(r) || 0, n = (r + "").trim().substr((o + "").length) || "px", s = Lt.style, l = ud.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), p = 100, h = a === "px", f = a === "%", b, g, m, k;
  if (a === n || !o || Yo[a] || Yo[n])
    return o;
  if (n !== "px" && !h && (o = i(e, t, r, "px")), k = e.getCTM && tl(e), (f || n === "%") && (dt[t] || ~t.indexOf("adius")))
    return b = k ? e.getBBox()[l ? "width" : "height"] : e[c], ce(f ? o / b * p : o / 100 * b);
  if (s[l ? "width" : "height"] = p + (h ? n : a), g = a !== "rem" && ~t.indexOf("adius") || a === "em" && e.appendChild && !u ? e : e.parentNode, k && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === gt || !g.appendChild) && (g = gt.body), m = g._gsap, m && f && m.width && l && m.time === Te.time && !m.uncache)
    return ce(o / m.width * p);
  if (f && (t === "height" || t === "width")) {
    var _ = e.style[t];
    e.style[t] = p + a, b = e[c], _ ? e.style[t] = _ : Mt(e, t);
  } else
    (f || n === "%") && !wd[tt(g, "display")] && (s.position = tt(e, "position")), g === e && (s.position = "static"), g.appendChild(Lt), b = Lt[c], g.removeChild(Lt), s.position = "absolute";
  return l && f && (m = Pt(g), m.time = Te.time, m.width = g[c]), ce(h ? b * o / p : b && o ? p / b * o : 0);
}, st = function(e, t, r, a) {
  var o;
  return Ga || va(), t in Xe && t !== "transform" && (t = Xe[t], ~t.indexOf(",") && (t = t.split(",")[0])), dt[t] && t !== "transform" ? (o = Vr(e, a), o = t !== "transformOrigin" ? o[t] : o.svg ? o.origin : yi(tt(e, Be)) + " " + o.zOrigin + "px") : (o = e.style[t], (!o || o === "auto" || a || ~(o + "").indexOf("calc(")) && (o = _i[t] && _i[t](e, t, r) || tt(e, t) || bs(e, t) || (t === "opacity" ? 1 : 0))), r && !~(o + "").trim().indexOf(" ") ? wt(e, t, o, r) + r : o;
}, xd = function(e, t, r, a) {
  if (!r || r === "none") {
    var o = or(t, e, 1), n = o && tt(e, o, 1);
    n && n !== r ? (t = o, r = n) : t === "borderColor" && (r = tt(e, "borderTopColor"));
  }
  var s = new Se(this._pt, e.style, t, 0, 1, Ks), l = 0, u = 0, c, p, h, f, b, g, m, k, _, y, v, w;
  if (s.b = r, s.e = a, r += "", a += "", a === "auto" && (g = e.style[t], e.style[t] = a, a = tt(e, t) || a, g ? e.style[t] = g : Mt(e, t)), c = [r, a], Ns(c), r = c[0], a = c[1], h = r.match(Ht) || [], w = a.match(Ht) || [], w.length) {
    for (; p = Ht.exec(a); )
      m = p[0], _ = a.substring(l, p.index), b ? b = (b + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (b = 1), m !== (g = h[u++] || "") && (f = parseFloat(g) || 0, v = g.substr((f + "").length), m.charAt(1) === "=" && (m = Yt(f, m) + v), k = parseFloat(m), y = m.substr((k + "").length), l = Ht.lastIndex - y.length, y || (y = y || Re.units[t] || v, l === a.length && (a += y, s.e += y)), v !== y && (f = wt(e, t, g, y) || 0), s._pt = {
        _next: s._pt,
        p: _ || u === 1 ? _ : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: k - f,
        m: b && b < 4 || t === "zIndex" ? Math.round : 0
      });
    s.c = l < a.length ? a.substring(l, a.length) : "";
  } else
    s.r = t === "display" && a === "none" ? Js : Ys;
  return ds.test(a) && (s.e = 0), this._pt = s, s;
}, Jo = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Cd = function(e) {
  var t = e.split(" "), r = t[0], a = t[1] || "50%";
  return (r === "top" || r === "bottom" || a === "left" || a === "right") && (e = r, r = a, a = e), t[0] = Jo[r] || r, t[1] = Jo[a] || a, t.join(" ");
}, Dd = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, a = r.style, o = t.u, n = r._gsap, s, l, u;
    if (o === "all" || o === !0)
      a.cssText = "", l = 1;
    else
      for (o = o.split(","), u = o.length; --u > -1; )
        s = o[u], dt[s] && (l = 1, s = s === "transformOrigin" ? Be : ne), Mt(r, s);
    l && (Mt(r, ne), n && (n.svg && r.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", Vr(r, 1), n.uncache = 1, Zs(a)));
  }
}, _i = {
  clearProps: function(e, t, r, a, o) {
    if (o.data !== "isFromStart") {
      var n = e._pt = new Se(e._pt, t, r, 0, 0, Dd);
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
}, Ir = [1, 0, 0, 1, 0, 0], rl = {}, il = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Zo = function(e) {
  var t = tt(e, ne);
  return il(t) ? Ir : t.substr(7).match(cs).map(ce);
}, Ja = function(e, t) {
  var r = e._gsap || Pt(e), a = e.style, o = Zo(e), n, s, l, u;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, o = [l.a, l.b, l.c, l.d, l.e, l.f], o.join(",") === "1,0,0,1,0,0" ? Ir : o) : (o === Ir && !e.offsetParent && e !== Jt && !r.svg && (l = a.display, a.display = "block", n = e.parentNode, (!n || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, s = e.nextElementSibling, Jt.appendChild(e)), o = Zo(e), l ? a.display = l : Mt(e, "display"), u && (s ? n.insertBefore(e, s) : n ? n.appendChild(e) : Jt.removeChild(e))), t && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
}, wa = function(e, t, r, a, o, n) {
  var s = e._gsap, l = o || Ja(e, !0), u = s.xOrigin || 0, c = s.yOrigin || 0, p = s.xOffset || 0, h = s.yOffset || 0, f = l[0], b = l[1], g = l[2], m = l[3], k = l[4], _ = l[5], y = t.split(" "), v = parseFloat(y[0]) || 0, w = parseFloat(y[1]) || 0, x, D, A, C;
  r ? l !== Ir && (D = f * m - b * g) && (A = v * (m / D) + w * (-g / D) + (g * _ - m * k) / D, C = v * (-b / D) + w * (f / D) - (f * _ - b * k) / D, v = A, w = C) : (x = el(e), v = x.x + (~y[0].indexOf("%") ? v / 100 * x.width : v), w = x.y + (~(y[1] || y[0]).indexOf("%") ? w / 100 * x.height : w)), a || a !== !1 && s.smooth ? (k = v - u, _ = w - c, s.xOffset = p + (k * f + _ * g) - k, s.yOffset = h + (k * b + _ * m) - _) : s.xOffset = s.yOffset = 0, s.xOrigin = v, s.yOrigin = w, s.smooth = !!a, s.origin = t, s.originIsAbsolute = !!r, e.style[Be] = "0px 0px", n && (mt(n, s, "xOrigin", u, v), mt(n, s, "yOrigin", c, w), mt(n, s, "xOffset", p, s.xOffset), mt(n, s, "yOffset", h, s.yOffset)), e.setAttribute("data-svg-origin", v + " " + w);
}, Vr = function(e, t) {
  var r = e._gsap || new Is(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var a = e.style, o = r.scaleX < 0, n = "px", s = "deg", l = getComputedStyle(e), u = tt(e, Be) || "0", c, p, h, f, b, g, m, k, _, y, v, w, x, D, A, C, z, R, N, M, U, B, F, T, V, E, L, $, W, Le, fe, we;
  return c = p = h = g = m = k = _ = y = v = 0, f = b = 1, r.svg = !!(e.getCTM && tl(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (a[ne] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ne] !== "none" ? l[ne] : "")), a.scale = a.rotate = a.translate = "none"), D = Ja(e, r.svg), r.svg && (r.uncache ? (V = e.getBBox(), u = r.xOrigin - V.x + "px " + (r.yOrigin - V.y) + "px", T = "") : T = !t && e.getAttribute("data-svg-origin"), wa(e, T || u, !!T || r.originIsAbsolute, r.smooth !== !1, D)), w = r.xOrigin || 0, x = r.yOrigin || 0, D !== Ir && (R = D[0], N = D[1], M = D[2], U = D[3], c = B = D[4], p = F = D[5], D.length === 6 ? (f = Math.sqrt(R * R + N * N), b = Math.sqrt(U * U + M * M), g = R || N ? Vt(N, R) * Bt : 0, _ = M || U ? Vt(M, U) * Bt + g : 0, _ && (b *= Math.abs(Math.cos(_ * Zt))), r.svg && (c -= w - (w * R + x * M), p -= x - (w * N + x * U))) : (we = D[6], Le = D[7], L = D[8], $ = D[9], W = D[10], fe = D[11], c = D[12], p = D[13], h = D[14], A = Vt(we, W), m = A * Bt, A && (C = Math.cos(-A), z = Math.sin(-A), T = B * C + L * z, V = F * C + $ * z, E = we * C + W * z, L = B * -z + L * C, $ = F * -z + $ * C, W = we * -z + W * C, fe = Le * -z + fe * C, B = T, F = V, we = E), A = Vt(-M, W), k = A * Bt, A && (C = Math.cos(-A), z = Math.sin(-A), T = R * C - L * z, V = N * C - $ * z, E = M * C - W * z, fe = U * z + fe * C, R = T, N = V, M = E), A = Vt(N, R), g = A * Bt, A && (C = Math.cos(A), z = Math.sin(A), T = R * C + N * z, V = B * C + F * z, N = N * C - R * z, F = F * C - B * z, R = T, B = V), m && Math.abs(m) + Math.abs(g) > 359.9 && (m = g = 0, k = 180 - k), f = ce(Math.sqrt(R * R + N * N + M * M)), b = ce(Math.sqrt(F * F + we * we)), A = Vt(B, F), _ = Math.abs(A) > 2e-4 ? A * Bt : 0, v = fe ? 1 / (fe < 0 ? -fe : fe) : 0), r.svg && (T = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !il(tt(e, ne)), T && e.setAttribute("transform", T))), Math.abs(_) > 90 && Math.abs(_) < 270 && (o ? (f *= -1, _ += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (b *= -1, _ += _ <= 0 ? 180 : -180)), t = t || r.uncache, r.x = c - ((r.xPercent = c && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + n, r.y = p - ((r.yPercent = p && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + n, r.z = h + n, r.scaleX = ce(f), r.scaleY = ce(b), r.rotation = ce(g) + s, r.rotationX = ce(m) + s, r.rotationY = ce(k) + s, r.skewX = _ + s, r.skewY = y + s, r.transformPerspective = v + n, (r.zOrigin = parseFloat(u.split(" ")[2]) || !t && r.zOrigin || 0) && (a[Be] = yi(u)), r.xOffset = r.yOffset = 0, r.force3D = Re.force3D, r.renderTransform = r.svg ? Sd : Qs ? al : Ad, r.uncache = 0, r;
}, yi = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Yi = function(e, t, r) {
  var a = _e(t);
  return ce(parseFloat(t) + parseFloat(wt(e, "x", r + "px", a))) + a;
}, Ad = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, al(e, t);
}, Dt = "0deg", fr = "0px", At = ") ", al = function(e, t) {
  var r = t || this, a = r.xPercent, o = r.yPercent, n = r.x, s = r.y, l = r.z, u = r.rotation, c = r.rotationY, p = r.rotationX, h = r.skewX, f = r.skewY, b = r.scaleX, g = r.scaleY, m = r.transformPerspective, k = r.force3D, _ = r.target, y = r.zOrigin, v = "", w = k === "auto" && e && e !== 1 || k === !0;
  if (y && (p !== Dt || c !== Dt)) {
    var x = parseFloat(c) * Zt, D = Math.sin(x), A = Math.cos(x), C;
    x = parseFloat(p) * Zt, C = Math.cos(x), n = Yi(_, n, D * C * -y), s = Yi(_, s, -Math.sin(x) * -y), l = Yi(_, l, A * C * -y + y);
  }
  m !== fr && (v += "perspective(" + m + At), (a || o) && (v += "translate(" + a + "%, " + o + "%) "), (w || n !== fr || s !== fr || l !== fr) && (v += l !== fr || w ? "translate3d(" + n + ", " + s + ", " + l + ") " : "translate(" + n + ", " + s + At), u !== Dt && (v += "rotate(" + u + At), c !== Dt && (v += "rotateY(" + c + At), p !== Dt && (v += "rotateX(" + p + At), (h !== Dt || f !== Dt) && (v += "skew(" + h + ", " + f + At), (b !== 1 || g !== 1) && (v += "scale(" + b + ", " + g + At), _.style[ne] = v || "translate(0, 0)";
}, Sd = function(e, t) {
  var r = t || this, a = r.xPercent, o = r.yPercent, n = r.x, s = r.y, l = r.rotation, u = r.skewX, c = r.skewY, p = r.scaleX, h = r.scaleY, f = r.target, b = r.xOrigin, g = r.yOrigin, m = r.xOffset, k = r.yOffset, _ = r.forceCSS, y = parseFloat(n), v = parseFloat(s), w, x, D, A, C;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= Zt, u *= Zt, w = Math.cos(l) * p, x = Math.sin(l) * p, D = Math.sin(l - u) * -h, A = Math.cos(l - u) * h, u && (c *= Zt, C = Math.tan(u - c), C = Math.sqrt(1 + C * C), D *= C, A *= C, c && (C = Math.tan(c), C = Math.sqrt(1 + C * C), w *= C, x *= C)), w = ce(w), x = ce(x), D = ce(D), A = ce(A)) : (w = p, A = h, x = D = 0), (y && !~(n + "").indexOf("px") || v && !~(s + "").indexOf("px")) && (y = wt(f, "x", n, "px"), v = wt(f, "y", s, "px")), (b || g || m || k) && (y = ce(y + b - (b * w + g * D) + m), v = ce(v + g - (b * x + g * A) + k)), (a || o) && (C = f.getBBox(), y = ce(y + a / 100 * C.width), v = ce(v + o / 100 * C.height)), C = "matrix(" + w + "," + x + "," + D + "," + A + "," + y + "," + v + ")", f.setAttribute("transform", C), _ && (f.style[ne] = C);
}, Bd = function(e, t, r, a, o) {
  var n = 360, s = ge(o), l = parseFloat(o) * (s && ~o.indexOf("rad") ? Bt : 1), u = l - a, c = a + u + "deg", p, h;
  return s && (p = o.split("_")[1], p === "short" && (u %= n, u !== u % (n / 2) && (u += u < 0 ? n : -n)), p === "cw" && u < 0 ? u = (u + n * Ho) % n - ~~(u / n) * n : p === "ccw" && u > 0 && (u = (u - n * Ho) % n - ~~(u / n) * n)), e._pt = h = new Se(e._pt, t, r, a, u, dd), h.e = c, h.u = "deg", e._props.push(r), h;
}, Xo = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Ed = function(e, t, r) {
  var a = Xo({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", n = r.style, s, l, u, c, p, h, f, b;
  a.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), n[ne] = t, s = Vr(r, 1), Mt(r, ne), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[ne], n[ne] = t, s = Vr(r, 1), n[ne] = u);
  for (l in dt)
    u = a[l], c = s[l], u !== c && o.indexOf(l) < 0 && (f = _e(u), b = _e(c), p = f !== b ? wt(r, l, u, b) : parseFloat(u), h = parseFloat(c), e._pt = new Se(e._pt, s, l, p, h - p, ya), e._pt.u = b || 0, e._props.push(l));
  Xo(s, a);
};
Ae("padding,margin,Width,Radius", function(i, e) {
  var t = "Top", r = "Right", a = "Bottom", o = "Left", n = (e < 3 ? [t, r, a, o] : [t + o, t + r, a + r, a + o]).map(function(s) {
    return e < 2 ? i + s : "border" + s + i;
  });
  _i[e > 1 ? "border" + i : i] = function(s, l, u, c, p) {
    var h, f;
    if (arguments.length < 4)
      return h = n.map(function(b) {
        return st(s, b, u);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (c + "").split(" "), f = {}, n.forEach(function(b, g) {
      return f[b] = h[g] = h[g] || h[(g - 1) / 2 | 0];
    }), s.init(l, f, p);
  };
});
var ol = {
  name: "css",
  register: va,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, a, o) {
    var n = this._props, s = e.style, l = r.vars.startAt, u, c, p, h, f, b, g, m, k, _, y, v, w, x, D, A;
    Ga || va(), this.styles = this.styles || Xs(e), A = this.styles.props, this.tween = r;
    for (g in t)
      if (g !== "autoRound" && (c = t[g], !(ze[g] && Vs(g, t, r, a, e, o)))) {
        if (f = typeof c, b = _i[g], f === "function" && (c = c.call(r, a, e, o), f = typeof c), f === "string" && ~c.indexOf("random(") && (c = qr(c)), b)
          b(this, e, g, c, r) && (D = 1);
        else if (g.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(g) + "").trim(), c += "", yt.lastIndex = 0, yt.test(u) || (m = _e(u), k = _e(c)), k ? m !== k && (u = wt(e, g, u, k) + k) : m && (c += m), this.add(s, "setProperty", u, c, a, o, 0, 0, g), n.push(g), A.push(g, 0, s[g]);
        else if (f !== "undefined") {
          if (l && g in l ? (u = typeof l[g] == "function" ? l[g].call(r, a, e, o) : l[g], ge(u) && ~u.indexOf("random(") && (u = qr(u)), _e(u + "") || u === "auto" || (u += Re.units[g] || _e(st(e, g)) || ""), (u + "").charAt(1) === "=" && (u = st(e, g))) : u = st(e, g), h = parseFloat(u), _ = f === "string" && c.charAt(1) === "=" && c.substr(0, 2), _ && (c = c.substr(2)), p = parseFloat(c), g in Xe && (g === "autoAlpha" && (h === 1 && st(e, "visibility") === "hidden" && p && (h = 0), A.push("visibility", 0, s.visibility), mt(this, s, "visibility", h ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), g !== "scale" && g !== "transform" && (g = Xe[g], ~g.indexOf(",") && (g = g.split(",")[0]))), y = g in dt, y) {
            if (this.styles.save(g), v || (w = e._gsap, w.renderTransform && !t.parseTransform || Vr(e, t.parseTransform), x = t.smoothOrigin !== !1 && w.smooth, v = this._pt = new Se(this._pt, s, ne, 0, 1, w.renderTransform, w, 0, -1), v.dep = 1), g === "scale")
              this._pt = new Se(this._pt, w, "scaleY", w.scaleY, (_ ? Yt(w.scaleY, _ + p) : p) - w.scaleY || 0, ya), this._pt.u = 0, n.push("scaleY", g), g += "X";
            else if (g === "transformOrigin") {
              A.push(Be, 0, s[Be]), c = Cd(c), w.svg ? wa(e, c, 0, x, 0, this) : (k = parseFloat(c.split(" ")[2]) || 0, k !== w.zOrigin && mt(this, w, "zOrigin", w.zOrigin, k), mt(this, s, g, yi(u), yi(c)));
              continue;
            } else if (g === "svgOrigin") {
              wa(e, c, 1, x, 0, this);
              continue;
            } else if (g in rl) {
              Bd(this, w, g, h, _ ? Yt(h, _ + c) : c);
              continue;
            } else if (g === "smoothOrigin") {
              mt(this, w, "smooth", w.smooth, c);
              continue;
            } else if (g === "force3D") {
              w[g] = c;
              continue;
            } else if (g === "transform") {
              Ed(this, c, e);
              continue;
            }
          } else
            g in s || (g = or(g) || g);
          if (y || (p || p === 0) && (h || h === 0) && !cd.test(c) && g in s)
            m = (u + "").substr((h + "").length), p || (p = 0), k = _e(c) || (g in Re.units ? Re.units[g] : m), m !== k && (h = wt(e, g, u, k)), this._pt = new Se(this._pt, y ? w : s, g, h, (_ ? Yt(h, _ + p) : p) - h, !y && (k === "px" || g === "zIndex") && t.autoRound !== !1 ? hd : ya), this._pt.u = k || 0, m !== k && k !== "%" && (this._pt.b = u, this._pt.r = pd);
          else if (g in s)
            xd.call(this, e, g, u, _ ? _ + c : c);
          else if (g in e)
            this.add(e, g, u || e[g], _ ? _ + c : c, a, o);
          else if (g !== "parseTransform") {
            Oa(g, c);
            continue;
          }
          y || (g in s ? A.push(g, 0, s[g]) : typeof e[g] == "function" ? A.push(g, 2, e[g]()) : A.push(g, 1, u || e[g])), n.push(g);
        }
      }
    D && Gs(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Wa())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: st,
  aliases: Xe,
  getSetter: function(e, t, r) {
    var a = Xe[t];
    return a && a.indexOf(",") < 0 && (t = a), t in dt && t !== Be && (e._gsap.x || st(e, "x")) ? r && $o === r ? t === "scale" ? bd : md : ($o = r || {}) && (t === "scale" ? _d : yd) : e.style && !Ra(e.style[t]) ? fd : ~t.indexOf("-") ? gd : Ha(e, t);
  },
  core: {
    _removeProperty: Mt,
    _getMatrix: Ja
  }
};
Fe.utils.checkPrefix = or;
Fe.core.getStyleSaver = Xs;
(function(i, e, t, r) {
  var a = Ae(i + "," + e + "," + t, function(o) {
    dt[o] = 1;
  });
  Ae(e, function(o) {
    Re.units[o] = "deg", rl[o] = 1;
  }), Xe[a[13]] = i + "," + e, Ae(r, function(o) {
    var n = o.split(":");
    Xe[n[1]] = a[n[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i) {
  Re.units[i] = "px";
});
Fe.registerPlugin(ol);
var he = Fe.registerPlugin(ol) || Fe;
he.core.Tween;
const nl = ({
  isOpen: i,
  toggleModal: e,
  content: t,
  title: r,
  onConfirm: a,
  onCancel: o,
  children: n,
  loading: s
}) => {
  const {
    t: l
  } = se(), u = ee(null), c = ee(null), p = () => {
    he.to(c.current, {
      opacity: 1,
      duration: 0.25,
      zIndex: 2e3,
      pointerEvents: "all",
      display: "block"
    }), he.to(u.current, {
      opacity: 1,
      duration: 0.5,
      pointerEvents: "all"
    });
  }, h = () => {
    he.to(c.current, {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
      display: "none"
    }), he.to(u.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
      onComplete: () => e()
    });
  };
  return I(() => {
    i ? p() : h();
  }, [i]), d("div", {
    ref: c,
    className: "background-alert-wrapper",
    children: [d("style", {
      type: "text/css",
      children: gc
    }), d("div", {
      className: "alert-wrapper",
      onClick: h,
      ref: u
    }), d("div", {
      className: "alert",
      children: [d("div", {
        className: "text-wrapper",
        children: [d(Ge, {
          text: r,
          header: !0
        }), d(Ge, {
          text: t,
          paragraph: !0
        })]
      }), n, d("div", {
        className: "button-wrapper",
        children: [d(kt, {
          text: l("confirm"),
          onClick: a,
          primary: !0,
          loading: s
        }), d(kt, {
          text: l("cancel"),
          onClick: h
        })]
      })]
    })]
  });
}, Fd = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;margin-bottom:1rem;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}.type,.part{font-size:16px}.wrapper{display:flex;flex-direction:column;gap:.25rem}.part-wrapper{display:flex;justify-content:space-between;align-items:flex-start;padding:10px;transition:all ease-in-out .5s}.can-hover{cursor:pointer}.can-hover:hover{background-color:#d9d9d966;border-radius:12px}.type-wrapper{display:flex}.svg-wrapper{min-width:20px}
`, Ld = (i) => /* @__PURE__ */ P("svg", { width: 20, height: 20, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M15.5 31C24.0605 31 31 24.0604 31 15.5C31 6.93958 24.0605 0 15.5 0C6.93945 0 0 6.93958 0 15.5C0 18.6947 0.966309 21.6637 2.62305 24.1305L8.62451 18.4889C8.74268 18.3724 8.86279 18.2644 8.98389 18.1625C7.87256 15.2234 8.50049 11.7754 10.8701 9.41406C12.6006 7.68994 14.9941 6.82117 17.4365 7.03076C17.5571 7.04114 17.6699 7.08105 17.7671 7.14429C17.8936 7.22681 17.9932 7.349 18.0474 7.49646C18.1226 7.70227 18.0977 7.92786 17.9868 8.11011C17.9575 8.15796 17.9224 8.20288 17.8813 8.24365L13.8589 12.2506L15.271 16.6925L19.7295 18.099L23.7515 14.0924C23.9482 13.8969 24.2407 13.8322 24.502 13.9272C24.7627 14.0217 24.9453 14.2588 24.9692 14.5348C25.1797 16.9679 24.3071 19.3524 22.5771 21.0768C20.2051 23.4396 16.7417 24.0634 13.7905 22.9541C13.6904 23.0771 13.5845 23.197 13.4697 23.3115L8.0708 29.1067C10.2769 30.3137 12.8081 31 15.5 31Z", fill: "#10B981" })), zd = ({
  bom: i,
  category: e,
  readOnly: t
}) => {
  const [r, a] = q(!1), o = ee(null), n = ee(null), s = ee(null), l = ee(), u = (c, p, h) => {
    Bi.value = {
      part: c,
      category: p,
      type: h
    }, c.id ? J("/part") : J("/update");
  };
  return I(() => {
    l.current = he.timeline({
      paused: !0
    });
    const c = he.context(() => {
      l.current.to(o.current, {
        height: "auto",
        duration: 0.75
      }).to(s.current, {
        rotate: 270
      }, "=").to(n.current, {
        opacity: 1
      }, "-=.5").reverse();
    });
    return () => {
      c.revert();
    };
  }, []), I(() => {
    l.current.reversed(!r);
  }, [r, a]), d(O, {
    children: [d("style", {
      type: "text/css",
      children: Fd
    }), d("div", {
      className: "accordian-wrapper",
      ref: o,
      children: [d("div", {
        className: "header-content",
        onClick: () => a(!r),
        children: [d("h4", {
          className: "category font-semibold",
          children: e
        }), d("div", {
          className: "chevron-wrapper",
          ref: s,
          children: d(rt, {})
        })]
      }), d("div", {
        className: "content",
        ref: n,
        children: i ? Object.keys(i || {}).map((c, p) => {
          if (e.toLocaleLowerCase() === c.replace(/_/g, " ").toLocaleLowerCase())
            return Object.keys(i[c] || {}).map((h) => {
              const f = i[c][h];
              return d("div", {
                className: "wrapper",
                children: [d("div", {
                  className: "type-wrapper",
                  children: d("h4", {
                    className: "type font-semibold capitalize",
                    children: h == null ? void 0 : h.replace(/_/g, " ")
                  })
                }), d("div", {
                  className: `part-wrapper ${f != null && f.swap && !t ? "can-hover" : ""}`,
                  onClick: () => {
                    f != null && f.swap && !t && u(f, c == null ? void 0 : c.replace(/_/g, " "), h == null ? void 0 : h.replace(/_/g, " "));
                  },
                  children: [d("p", {
                    className: "part",
                    children: f != null && f.name ? f == null ? void 0 : f.name : "—"
                  }), (f == null ? void 0 : f.swap) && !t && d("div", {
                    className: "svg-wrapper",
                    children: d(Ld, {})
                  })]
                }, f == null ? void 0 : f.id)]
              }, h);
            });
        }) : d(Kr, {
          colour: "#000",
          isLoading: !0
        })
      })]
    })]
  });
}, Td = `.bom-table{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.bom-table_unsaved-changes{display:flex;justify-content:space-between;align-items:center}.circle{background-color:#fba157;border-radius:100%;display:flex;justify-content:center;align-items:center;color:#fff;height:16px;width:16px;min-width:16px;min-height:16px;font-size:10px}.unsaved-changes{position:relative;width:50%}
`, Pd = `.unsaved-changes_wrapper{opacity:0}.title-section{display:flex;align-items:center;justify-content:flex-end;gap:.35rem;cursor:pointer;position:relative;z-index:23;padding-right:15px}.unsaved-content{display:flex;flex-direction:column;align-items:flex-start;width:100%;gap:1rem;border-radius:12px;background-color:#fff;border:1px solid transparent;position:absolute;z-index:21;right:0;height:0;width:0;overflow:hidden;top:-1rem}.animation-wrapper{padding:15px;margin-top:2rem;width:100%;opacity:0;display:flex;flex-direction:column;gap:1rem}.unsaved-part-wrapper{width:100%}.unsaved-part{display:flex;align-items:center;justify-content:space-between;gap:1rem}.revert-button{font-size:10px;padding:3px 10px;border:1px solid #d1d5db;border-radius:12px;transition:all ease-in-out .5s;cursor:pointer}.revert-button:hover{background-color:#000;color:#fff}.close-button{position:absolute;left:6px;top:6px;cursor:pointer}
`, Rd = (i) => /* @__PURE__ */ P("svg", { width: 28, height: 28, viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("circle", { cx: 14, cy: 14, r: 14, fill: "white" }), /* @__PURE__ */ P("path", { d: "M11 17L14 14M14 14L17 11M14 14L17 17M14 14L11 11", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let Qo = typeof document < "u" ? Bl : I, en = (i) => i && !Array.isArray(i) && typeof i == "object", ri = [], Nd = {}, sl = he;
const Za = (i, e = ri) => {
  let t = Nd;
  en(i) ? (t = i, i = null, e = "dependencies" in t ? t.dependencies : ri) : en(e) && (t = e, e = "dependencies" in t ? t.dependencies : ri), i && typeof i != "function" && console.warn("First parameter must be a function or config object");
  const { scope: r, revertOnUpdate: a } = t, o = ee(!1), n = ee(sl.context(() => {
  }, r)), s = ee((u) => n.current.add(null, u)), l = e && e.length && !a;
  return l && Qo(() => (o.current = !0, () => n.current.revert()), ri), Qo(() => {
    if (i && n.current.add(i, r), !l || !o.current)
      return () => n.current.revert();
  }, e), { context: n.current, contextSafe: s.current };
};
Za.register = (i) => {
  sl = i;
};
Za.headless = !0;
const qd = () => {
  const [i, e] = q(window.innerWidth), [t, r] = q(window.innerHeight);
  return I(() => {
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
}, Od = ({
  unsavedParts: i,
  revertPart: e,
  readOnly: t
}) => {
  const {
    t: r
  } = se(), a = ee(null), o = ee(), n = ee(null), s = ee([]), [l, u] = q(i), c = ee(null), {
    height: p,
    width: h
  } = qd();
  console.log(h);
  const {
    contextSafe: f
  } = Za(() => {
    o.current = he.timeline({
      paused: !0
    }), o.current.to(a.current, {
      border: "1px solid #d1d5db",
      height: "auto",
      maxHeight: "150px",
      overflowY: "auto",
      width: h >= 640 ? "500px" : "366px"
    }).to(n.current, {
      opacity: 1
    }, "-=.25").reverse(), l.length > 0 ? he.to(c.current, {
      opacity: 1
    }) : he.to(c.current, {
      opacity: 0
    });
  }, {
    scope: c,
    dependencies: [l]
  }), b = f(() => {
    o.current.reversed(!o.current.reversed());
  }), g = (m, k) => {
    u(l.filter((_) => _.part !== k)), he.to(s.current[m], {
      opacity: 0,
      height: 0,
      onComplete: () => e(k)
    });
  };
  return I(() => {
    u(i);
  }, [i]), d(O, {
    children: [d("style", {
      type: "text/css",
      children: Pd
    }), d("div", {
      className: "unsaved-changes_wrapper",
      ref: c,
      onClick: b,
      children: [d("div", {
        className: "title-section",
        children: [d(Ge, {
          text: r("virtualworkshop_unsaved_changes"),
          small: !0,
          bold: !0,
          nowrap: !0
        }), d("div", {
          className: "circle",
          children: l.length
        })]
      }), d("div", {
        className: "unsaved-content",
        ref: a,
        children: [d("div", {
          className: "close-button",
          children: d(Rd, {})
        }), d("div", {
          className: "animation-wrapper",
          ref: n,
          children: l.length > 0 && l.map((m, k) => {
            var _;
            return d("div", {
              className: "unsaved-part-wrapper",
              ref: (y) => s.current[m.type + k] = y,
              children: [d(Ge, {
                text: m.type.replace("_", " "),
                small: !0,
                left: !0,
                bold: !0,
                capitalize: !0
              }), d("div", {
                className: "unsaved-part",
                children: [d(Ge, {
                  text: (_ = m.part) != null && _.name ? m.part.name : "Removed",
                  small: !0,
                  left: !0
                }), d("div", {
                  className: "revert-button",
                  onClick: () => g(m.type + k, m.part),
                  children: r("virtualworkshop_revert_btn")
                })]
              })]
            }, m.type + k);
          })
        })]
      })]
    })]
  });
}, ll = ({
  categorisedBOM: i,
  bikeSave: e,
  refreshBomb: t,
  readOnly: r
}) => {
  const {
    t: a
  } = se(), n = window.BikeMatrix.getConfig(), [s, l] = q([]), {
    currentBike: u
  } = Ee();
  console.log(n);
  const c = new Oe(n.apiUrl, n.apiKey, n.isShopify), p = ye.value, h = [
    "Frame & Fork",
    "Drivetrain",
    "Brakes",
    "Cockpit",
    "Wheels & Tyres"
    // "EBike",
  ], f = async (g) => {
    const m = await c.revertComponent(u.key, g.product_category_id);
    m.success ? t() : console.error(m.error);
  }, b = () => {
    let g = [];
    p && Object.keys(i).forEach((m) => {
      typeof i[m] == "object" && i[m] !== null && Object.keys(i[m]).forEach((k) => {
        i[m][k].unsaved_changes && g.push({
          type: k,
          part: i[m][k]
        });
      });
    }), l(g);
  };
  return I(() => {
    b();
  }, [p, i]), d(O, {
    children: [d("style", {
      type: "text/css",
      children: Td
    }), d("div", {
      class: "bom-table_unsaved-changes mt-8",
      children: [d(Ge, {
        subheader: !0,
        text: a("virtualworkshop_build_text")
      }), !r && d("div", {
        className: "unsaved-changes",
        children: d(Od, {
          readOnly: r,
          unsavedParts: s,
          revertPart: (g) => f(g)
        })
      }), !i && r && d(Kr, {
        isLoading: !0,
        colour: "#000"
      })]
    }), d("div", {
      className: "bom-table",
      children: h.map((g, m) => d(zd, {
        category: g,
        bom: i,
        readOnly: r
      }, g + m))
    })]
  });
};
function Md() {
  const {
    t: i
  } = se(), {
    currentBike: e
  } = Ee(), t = ye.value, a = window.BikeMatrix.getConfig();
  I(() => {
    Je.value.back = "/";
  }, []);
  const [o, n] = q(!1), [s, l] = q(!1), [u, c] = q(!1), [p, h] = q(""), [f, b] = q(""), [g, m] = q(!1), k = new Oe(a.apiUrl, a.apiKey, a.isShopify), _ = async () => {
    const x = await k.getBikeBom(t.bike_Key);
    ye.value = Pr(x), n(!1), l(!0), J("/");
  }, y = (x) => {
    b(x), n(!1);
  }, v = async () => {
    if (n(!0), m(!0), t.owner_Email_Address) {
      const x = await k.saveCustomBike(e.key, t.owner_Email_Address);
      x.success ? _() : y(x.error);
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(p)) {
      const x = await k.saveCustomBike(e.key, p);
      x.success ? _() : y(x.error);
    }
  };
  I(() => {
    g && f && b("");
  }, [p]);
  const w = async () => {
    const x = await k.getBikeBom(e.key), D = Pr(x.data);
    ye.value = D;
  };
  return I(() => {
    ye.value || w();
  }, []), d(O, {
    children: [d("div", {
      className: "mb-4",
      children: [e ? d(We, {
        bike: e,
        selected: !0,
        settings: !0
      }) : d(ur, {}), d("div", {
        class: "mt-4 mb-8",
        children: d(ll, {
          categorisedBOM: t,
          bikeSave: s,
          refreshBomb: w
        })
      })]
    }), d(kt, {
      text: i("virtualworkshop_save_btn"),
      onClick: t != null && t.owner_Email_Address ? () => v() : () => c(!0),
      primary: !0,
      loading: !u && o
    }), d(xt, {}), d(nl, {
      isOpen: u,
      toggleModal: () => c(!1),
      content: i("virtualworkshop_save_text"),
      title: i("virtualworkshop_save_title"),
      onConfirm: v,
      onCancel: () => c(!1),
      loading: o,
      children: d("div", {
        class: "mt-8",
        children: d(os, {
          value: p,
          setValue: (x) => h(x),
          placeholder: i("virtualworkshop_settings_email"),
          type: "email",
          error: f,
          submitInput: v
        })
      })
    })]
  });
}
function Id() {
  const {
    t: i
  } = se(), e = Bi.value, r = window.BikeMatrix.getConfig(), [a, o] = q(!1), [n, s] = q(null), l = ye.value, {
    currentBike: u
  } = Ee(), c = new Oe(r.apiUrl, r.apiKey, r.isShopify), [p, h] = q(!1);
  u.isShared && J("/");
  const f = async () => {
    h(!0);
    const b = await c.removeComponent(u.key, e.part.product_category_id);
    b.success ? (l[e.category.split(" ").join("_")][e.type.split(" ").join("_")] = {
      ...l[e.category.split(" ").join("_")][e.type.split(" ").join("_")],
      id: null,
      name: null,
      unsaved_changes: !0
    }, ye.value = l, h(!1), J("/bom")) : (h(!1), o(!1), s(b.error + " - " + e.part.name));
  };
  return d(O, {
    children: [d("div", {
      className: "mb-4",
      children: [u ? d(We, {
        bike: u,
        selected: !0,
        settings: !0
      }) : d(ur, {}), d("div", {
        className: "part-wrapper mt-8 mb-8 relative",
        children: [d(Ge, {
          subheader: !0,
          text: e.part.name
        }), d("p", {
          className: "absolute text-red-500 text-sm left-1/2 transform -translate-x-1/2",
          children: n
        })]
      })]
    }), d(kt, {
      text: i("virtualworkshop_swap_btn"),
      onClick: () => J("/update"),
      primary: !0
    }), d(kt, {
      text: i("virtualworkshop_remove_btn"),
      onClick: () => o(!0)
    }), d(xt, {}), a && d(nl, {
      isOpen: a,
      toggleModal: () => o(!1),
      content: i("virtualworkshop_remove_subtitle"),
      title: "Are you sure?",
      onConfirm: f,
      onCancel: () => o(!1),
      loading: p
    })]
  });
}
const Vd = `.search-wrapper{position:relative;margin-bottom:18rem}@media (max-width: 767px){.search-wrapper{margin-bottom:22rem}}.search_bar-wrapper{border:1px solid rgb(209 213 219);border-radius:12px;display:flex;align-items:center;z-index:2;width:100%;background-color:#fff;position:absolute;transition:all ease-in-out .5s;padding:12px}.input_icon-wrapper{display:flex;align-items:center;gap:1rem;width:100%}.input_icon-wrapper input{width:100%}.svg-wrapper{cursor:pointer}.compatibility-wrapper{height:110px;position:absolute;width:100%;border-radius:12px;overflow:hidden;top:0}.compatibility{position:absolute;width:100%;top:-75px;height:71px;border:1px solid;border-bottom-right-radius:12px;border-bottom-left-radius:12px}.compatibility-contents{position:relative;height:54px;display:flex;align-items:center;border-bottom-left-radius:12px;margin-top:16px;overflow:hidden}@media (max-width: 767px){.compatibility-contents p{font-size:16px}}.polygon{position:absolute}.bikon{margin-left:.75rem}.compatibility-background{height:108px;position:absolute;z-index:-1;border-bottom-left-radius:12px;left:-2px;top:-38px;width:59px}.results-wrapper{top:40px;height:0;overflow:hidden;position:absolute;width:100%;border:1px solid black;border-bottom-left-radius:12px;border-bottom-right-radius:12px;max-height:190px;overflow-y:scroll;background-color:#fff;z-index:1}.results{width:100%;padding:12px;padding-top:2rem;display:flex;flex-direction:column;gap:.5rem}.result{background-color:#fff;transition:ease-in-out .2s;border-radius:8px;padding-left:10px;padding-top:5px;padding-bottom:5px;cursor:pointer}.result:hover{background-color:#d9d9d966}.notes-wrapper{display:flex;gap:2rem;position:absolute;top:116px;opacity:0}@media (max-width: 767px){.notes-wrapper{flex-direction:column;gap:.5rem}}
`, jd = (i) => /* @__PURE__ */ P("svg", { width: 23, height: 23, viewBox: "0 0 23 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M0 9.26199C0 7.98077 0.242061 6.78221 0.726184 5.66631C1.21031 4.5504 1.87806 3.57089 2.72945 2.72776C3.58919 1.87637 4.58247 1.21096 5.70931 0.731536C6.83615 0.243845 8.04228 0 9.32771 0C10.6215 0 11.8318 0.243845 12.9586 0.731536C14.0855 1.21096 15.0788 1.87637 15.9385 2.72776C16.7982 3.57089 17.4701 4.5504 17.9543 5.66631C18.4384 6.78221 18.6805 7.98077 18.6805 9.26199C18.6805 10.3283 18.5052 11.345 18.1546 12.3121C17.804 13.271 17.3199 14.1389 16.7022 14.9159L22.6369 20.8178C22.7538 20.9418 22.8414 21.0782 22.8998 21.227C22.9666 21.384 23 21.5452 23 21.7105C23 21.9585 22.9457 22.1775 22.8372 22.3677C22.7287 22.566 22.5785 22.719 22.3865 22.8264C22.1945 22.9421 21.9733 23 21.7229 23C21.556 23 21.389 22.9669 21.2221 22.9008C21.0635 22.8429 20.9216 22.7562 20.7964 22.6404L14.8367 16.7137C14.0604 17.2758 13.209 17.7181 12.2825 18.0404C11.356 18.3545 10.3711 18.5116 9.32771 18.5116C8.04228 18.5116 6.83615 18.2719 5.70931 17.7925C4.58247 17.313 3.58919 16.6476 2.72945 15.7962C1.87806 14.9448 1.21031 13.9612 0.726184 12.8453C0.242061 11.7294 0 10.535 0 9.26199ZM1.81546 9.26199C1.81546 10.287 2.01161 11.25 2.40392 12.1509C2.79623 13.0437 3.3346 13.8331 4.01905 14.5191C4.71185 15.1969 5.50898 15.7301 6.41045 16.1186C7.32027 16.4988 8.29269 16.6889 9.32771 16.6889C10.3711 16.6889 11.3435 16.4988 12.245 16.1186C13.1548 15.7301 13.9519 15.1969 14.6364 14.5191C15.3292 13.8331 15.8675 13.0437 16.2515 12.1509C16.6438 11.25 16.84 10.287 16.84 9.26199C16.84 8.22875 16.6438 7.26577 16.2515 6.37305C15.8675 5.47206 15.3292 4.68266 14.6364 4.00485C13.9519 3.31878 13.1548 2.78562 12.245 2.40539C11.3435 2.01689 10.3711 1.82264 9.32771 1.82264C8.29269 1.82264 7.32027 2.01689 6.41045 2.40539C5.50898 2.78562 4.71185 3.31878 4.01905 4.00485C3.3346 4.68266 2.79623 5.47206 2.40392 6.37305C2.01161 7.26577 1.81546 8.22875 1.81546 9.26199Z", fill: "black" })), Xa = (i) => /* @__PURE__ */ P("svg", { width: 57, height: 40, viewBox: "0 0 57 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4343 1.80079C44.6538 2.54246 44.2342 3.3224 43.4943 3.54788L37.9829 5.22744L42.5437 17.3218C42.7699 17.2662 42.9979 17.2168 43.2272 17.1749C43.4564 17.1337 43.687 17.0993 43.9187 17.0724C44.1498 17.0449 44.3822 17.0256 44.6151 17.0131C44.8475 17.0012 45.0804 16.9962 45.3134 16.9987C45.547 17.0018 45.7794 17.0118 46.0117 17.0293C46.2441 17.0468 46.4758 17.0712 46.7069 17.1037C46.938 17.1356 47.1673 17.1756 47.396 17.2224C47.6246 17.2693 47.8508 17.3231 48.0764 17.3843C48.3013 17.4462 48.5244 17.5143 48.7451 17.5899C48.9657 17.6656 49.1839 17.7481 49.4002 17.8374C49.6159 17.9268 49.8286 18.0231 50.0381 18.1262C50.2477 18.2293 50.4541 18.3387 50.6575 18.4549C50.8603 18.5712 51.0594 18.6937 51.2547 18.8224C51.4501 18.9512 51.6412 19.0862 51.8285 19.2274C52.0153 19.3687 52.1977 19.5156 52.3758 19.6681C52.5539 19.8206 52.7265 19.9787 52.8948 20.1424C53.063 20.3062 53.2257 20.4749 53.3835 20.6493C53.5413 20.8237 53.6929 21.0024 53.8396 21.1862C53.9863 21.3699 54.1268 21.5581 54.2618 21.7512C54.3967 21.9437 54.5255 22.1406 54.6482 22.3418C54.7708 22.5424 54.8867 22.7474 54.997 22.9556C55.1067 23.1637 55.2103 23.3756 55.307 23.5906C55.4038 23.8056 55.4944 24.0237 55.5776 24.2443C55.6608 24.4649 55.7372 24.6881 55.8069 24.9137C55.8765 25.1393 55.9388 25.3668 55.9942 25.5962C56.0497 25.8262 56.0978 26.0568 56.1391 26.2899C56.1804 26.5224 56.2136 26.7562 56.2408 26.9912C56.2673 27.2256 56.2864 27.4612 56.2987 27.6974C56.3104 27.9331 56.3153 28.1693 56.3123 28.4056C56.3098 28.6418 56.2999 28.8781 56.2827 29.1137C56.2654 29.3493 56.2408 29.5843 56.2087 29.8187C56.1773 30.0524 56.1378 30.2856 56.0916 30.5174C56.0454 30.7487 55.9924 30.9787 55.932 31.2068C55.871 31.4356 55.8038 31.6612 55.7292 31.8856C55.6546 32.1093 55.5733 32.3306 55.4852 32.5493C55.3964 32.7681 55.3015 32.9837 55.2004 33.1968C55.0987 33.4093 54.9902 33.6187 54.8756 33.8243C54.761 34.0299 54.6402 34.2318 54.5132 34.4299C54.3863 34.6281 54.2531 34.8224 54.1138 35.0118C53.9746 35.2012 53.8297 35.3862 53.6793 35.5668C53.529 35.7474 53.3724 35.9224 53.2109 36.0931C53.0495 36.2637 52.8831 36.4287 52.7117 36.5887C52.5398 36.7481 52.3635 36.9024 52.1817 37.0512C52.0005 37.1993 51.815 37.3424 51.6251 37.4787C51.4347 37.6156 51.2406 37.7462 51.0427 37.8706C50.8443 37.9949 50.6427 38.1131 50.4369 38.2243C50.2316 38.3356 50.0227 38.4406 49.8107 38.5387C49.5987 38.6368 49.3836 38.7287 49.166 38.8131C48.9485 38.8974 48.7284 38.9749 48.506 39.0456C48.2835 39.1156 48.0591 39.1793 47.8323 39.2349C47.6061 39.2912 47.3781 39.3406 47.1488 39.3818C46.9195 39.4237 46.689 39.4581 46.4573 39.4849C46.2262 39.5118 45.9938 39.5312 45.7609 39.5431C45.5279 39.5556 45.2955 39.5599 45.062 39.5574C44.829 39.5549 44.5966 39.5449 44.3643 39.5268C44.1313 39.5093 43.9002 39.4843 43.6691 39.4524C43.438 39.4199 43.2087 39.3806 42.98 39.3337C42.7514 39.2862 42.5252 39.2324 42.2996 39.1706C42.0747 39.1093 41.8522 39.0412 41.6309 38.9656C41.4103 38.8899 41.1921 38.8074 40.9764 38.7174C40.7607 38.6281 40.548 38.5318 40.3379 38.4287C40.1283 38.3256 39.9219 38.2162 39.7191 38.0999C39.5163 37.9837 39.3172 37.8606 39.1219 37.7318C38.9265 37.6031 38.7354 37.4681 38.5481 37.3268C38.3613 37.1856 38.1789 37.0387 38.0008 36.8862C37.8233 36.7331 37.6501 36.5749 37.4825 36.4112C37.3142 36.2474 37.1515 36.0787 36.9937 35.9043C36.8359 35.7299 36.6843 35.5512 36.5376 35.3674C36.391 35.1837 36.2504 34.9949 36.1161 34.8024C35.9811 34.6093 35.8523 34.4124 35.7296 34.2118C35.607 34.0106 35.4911 33.8062 35.3808 33.5974C35.2711 33.3893 35.1676 33.1774 35.0708 32.9624C34.974 32.7474 34.8841 32.5293 34.8009 32.3087C34.7177 32.0881 34.6412 31.8649 34.5716 31.6393C34.5026 31.4137 34.4397 31.1862 34.3848 30.9562C34.3294 30.7268 34.2813 30.4956 34.24 30.2631C34.1993 30.0306 34.1654 29.7968 34.1389 29.5618C34.1124 29.3268 34.0933 29.0912 34.081 28.8556C34.0693 28.6193 34.0644 28.3831 34.0674 28.1468C34.0699 27.9106 34.0798 27.6743 34.0976 27.4387C34.1149 27.2031 34.1395 26.9681 34.171 26.7343C34.203 26.4999 34.2425 26.2668 34.2887 26.0356C34.3349 25.8037 34.3885 25.5737 34.4489 25.3456C34.5093 25.1174 34.5771 24.8912 34.6517 24.6674C34.7263 24.4437 34.8076 24.2224 34.8964 24.0037C34.9845 23.7849 35.0794 23.5693 35.1811 23.3562C35.2828 23.1437 35.3913 22.9343 35.5059 22.7287C35.6206 22.5231 35.7414 22.3212 35.8683 22.1231C35.9959 21.9249 36.129 21.7312 36.2683 21.5418C36.407 21.3518 36.5524 21.1668 36.7028 20.9868C36.8532 20.8062 37.0097 20.6312 37.1712 20.4606C37.3327 20.2906 37.4991 20.1249 37.6711 19.9656C37.843 19.8056 38.0193 19.6518 38.2005 19.5031C38.3817 19.3543 38.5678 19.2118 38.7576 19.0756C38.9481 18.9387 39.1422 18.8081 39.3407 18.6837C39.5385 18.5593 39.7407 18.4418 39.9459 18.3306L37.6544 12.2531L29.7544 28.8937C29.6977 29.0137 29.625 29.1224 29.5381 29.2218C29.4506 29.3206 29.3514 29.4049 29.2404 29.4756C29.1295 29.5462 29.0112 29.5993 28.8854 29.6362C28.7597 29.6724 28.6309 29.6906 28.5002 29.6906H22.8523C22.8085 30.0424 22.7481 30.3912 22.6717 30.7368C22.5947 31.0824 22.5022 31.4243 22.3943 31.7612C22.2859 32.0981 22.1626 32.4293 22.0233 32.7543C21.884 33.0793 21.7306 33.3974 21.5617 33.7074C21.3934 34.0181 21.211 34.3199 21.0144 34.6131C20.8178 34.9062 20.6076 35.1893 20.3845 35.4618C20.162 35.7349 19.9266 35.9968 19.6795 36.2474C19.4323 36.4974 19.1741 36.7362 18.9047 36.9618C18.6354 37.1874 18.3562 37.3999 18.0672 37.5993C17.7775 37.7981 17.4798 37.9831 17.1735 38.1537C16.8672 38.3243 16.5541 38.4799 16.233 38.6212C15.9125 38.7618 15.5859 38.8868 15.2531 38.9962C14.9209 39.1056 14.5843 39.1993 14.2429 39.2762C13.9021 39.3537 13.5582 39.4143 13.2112 39.4593C12.8648 39.5037 12.5166 39.5312 12.1671 39.5424C11.8177 39.5537 11.4689 39.5481 11.12 39.5262C10.7712 39.5037 10.4242 39.4649 10.0791 39.4093C9.73392 39.3543 9.39186 39.2824 9.0535 39.1943C8.71452 39.1062 8.38109 39.0024 8.05198 38.8824C7.72348 38.7624 7.40053 38.6274 7.08436 38.4762C6.76819 38.3256 6.45941 38.1599 6.15865 37.9799C5.85788 37.7999 5.56575 37.6056 5.28286 37.3974C4.99997 37.1893 4.72755 36.9681 4.465 36.7337C4.20245 36.4993 3.95161 36.2531 3.71248 35.9949C3.47273 35.7368 3.24592 35.4681 3.03144 35.1881C2.81696 34.9081 2.61604 34.6187 2.42868 34.3193C2.24132 34.0206 2.06814 33.7131 1.90913 33.3974C1.75011 33.0818 1.6059 32.7593 1.47709 32.4299C1.34827 32.1006 1.23487 31.7656 1.13688 31.4256C1.03888 31.0849 0.956912 30.7412 0.890966 30.3931C0.825636 30.0449 0.775714 29.6943 0.742433 29.3412C0.709152 28.9887 0.692511 28.6349 0.691895 28.2806C0.691895 27.9256 0.707919 27.5718 0.740584 27.2187C0.773249 26.8649 0.822554 26.5143 0.887884 26.1656C0.953214 25.8168 1.03457 25.4724 1.13195 25.1312C1.22933 24.7906 1.34211 24.4549 1.47092 24.1249C1.59973 23.7949 1.74334 23.4718 1.90173 23.1556C2.06074 22.8393 2.23393 22.5318 2.42129 22.2318C2.60865 21.9324 2.80957 21.6424 3.02343 21.3618C3.23791 21.0812 3.46472 20.8118 3.70446 20.5531C3.94421 20.2943 4.19505 20.0474 4.45761 19.8124C4.71954 19.5781 4.99257 19.3562 5.27546 19.1474C5.55835 18.9393 5.85049 18.7443 6.15187 18.5637C6.45325 18.3831 6.76202 18.2174 7.07881 18.0662C7.39498 17.9149 7.71794 17.7793 8.04705 17.6593C8.37678 17.5387 8.71083 17.4349 9.0498 17.3462C9.38878 17.2581 9.73083 17.1862 10.0766 17.1312C10.4217 17.0756 10.7693 17.0368 11.1188 17.0143C11.4676 16.9924 11.8177 16.9868 12.1671 16.9981C12.5166 17.0093 12.8654 17.0368 13.2124 17.0818C13.5594 17.1262 13.9039 17.1874 14.2454 17.2649C14.5868 17.3424 14.9239 17.4362 15.2568 17.5456C15.5896 17.6556 15.9162 17.7812 16.2373 17.9218C16.5584 18.0631 16.8721 18.2193 17.1791 18.3906C17.4854 18.5612 17.7837 18.7468 18.0727 18.9462C18.3618 19.1462 18.6416 19.3593 18.9109 19.5856C19.1802 19.8118 19.4385 20.0506 19.6862 20.3018C19.9334 20.5524 20.1682 20.8149 20.3913 21.0887C20.6138 21.3624 20.824 21.6456 21.02 21.9393C21.2166 22.2331 21.399 22.5356 21.5672 22.8468C21.7355 23.1574 21.889 23.4762 22.0276 23.8018C22.1663 24.1274 22.2896 24.4593 22.3974 24.7968C22.5053 25.1343 22.5971 25.4768 22.6729 25.8231C22.7493 26.1693 22.8091 26.5187 22.8523 26.8706H26.3283L19.5433 7.60432C19.489 7.45119 19.4625 7.29307 19.4625 7.13057H17.3769C17.2857 7.13057 17.1951 7.12182 17.1057 7.10369C17.0163 7.08557 16.9294 7.05869 16.845 7.02307C16.7606 6.98807 16.6805 6.94432 16.6046 6.89307C16.5282 6.84182 16.4586 6.78307 16.3939 6.71744C16.3292 6.65244 16.2712 6.58119 16.2207 6.50369C16.1701 6.42682 16.127 6.34557 16.0925 6.25994C16.0574 6.17494 16.0309 6.08682 16.013 5.99557C15.9951 5.90494 15.9865 5.81307 15.9865 5.72057C15.9865 5.62807 15.9951 5.53619 16.013 5.44557C16.0309 5.35494 16.0574 5.26682 16.0925 5.18119C16.127 5.09557 16.1701 5.01432 16.2207 4.93744C16.2712 4.86057 16.3292 4.78932 16.3939 4.72369C16.4586 4.65807 16.5282 4.59994 16.6046 4.54807C16.6805 4.49682 16.7606 4.45369 16.845 4.41807C16.9294 4.38244 17.0163 4.35557 17.1057 4.33744C17.1951 4.31994 17.2857 4.31057 17.3769 4.31057H23.6338C23.725 4.31057 23.8156 4.31994 23.9049 4.33744C23.9943 4.35557 24.0812 4.38244 24.1657 4.41807C24.2501 4.45369 24.3302 4.49682 24.406 4.54807C24.4824 4.59994 24.5521 4.65807 24.6168 4.72369C24.6815 4.78932 24.7388 4.86057 24.79 4.93744C24.8405 5.01432 24.8837 5.09557 24.9182 5.18119C24.9533 5.26682 24.9798 5.35494 24.9977 5.44557C25.0156 5.53619 25.0242 5.62807 25.0242 5.72057C25.0242 5.81307 25.0156 5.90494 24.9977 5.99557C24.9798 6.08682 24.9533 6.17494 24.9182 6.25994C24.8837 6.34557 24.8405 6.42682 24.79 6.50369C24.7388 6.58119 24.6815 6.65244 24.6168 6.71744C24.5521 6.78307 24.4824 6.84182 24.406 6.89307C24.3302 6.94432 24.2501 6.98807 24.1657 7.02307C24.0812 7.05869 23.9943 7.08557 23.9049 7.10369C23.8156 7.12182 23.725 7.13057 23.6338 7.13057H22.3296L24.8904 14.4018L36.1907 8.37119L34.8489 4.81432C34.8144 4.72369 34.7898 4.63057 34.775 4.53432C34.7596 4.43869 34.754 4.34244 34.7589 4.24557C34.7633 4.14869 34.7774 4.05307 34.8009 3.95932C34.8249 3.86557 34.8576 3.77494 34.9001 3.68807C34.942 3.60119 34.9925 3.51932 35.0517 3.44307C35.1102 3.36619 35.1762 3.29682 35.2495 3.23432C35.3223 3.17182 35.4012 3.11744 35.485 3.07119C35.5688 3.02494 35.6569 2.98744 35.7488 2.95994L42.6737 0.853036C43.4219 0.625398 44.2123 1.05089 44.4343 1.80079ZM25.8346 17.0849L28.5766 24.8687L34.4582 12.4831L25.8346 17.0849ZM43.8866 28.7843L40.9486 20.9912C40.8001 21.0799 40.6547 21.1731 40.5117 21.2712C40.3693 21.3693 40.2294 21.4712 40.0932 21.5781C39.9564 21.6849 39.8232 21.7956 39.6938 21.9112C39.5638 22.0262 39.438 22.1449 39.3154 22.2681C39.1934 22.3912 39.0744 22.5181 38.9598 22.6487C38.8451 22.7787 38.7348 22.9131 38.6282 23.0506C38.5216 23.1874 38.4193 23.3287 38.3213 23.4724C38.2239 23.6162 38.1302 23.7631 38.0415 23.9124C37.9521 24.0624 37.8683 24.2149 37.7888 24.3699C37.7087 24.5249 37.6341 24.6824 37.5638 24.8418C37.4942 25.0018 37.4288 25.1631 37.3691 25.3274C37.3087 25.4912 37.2538 25.6568 37.2039 25.8237C37.154 25.9912 37.109 26.1599 37.0695 26.3299C37.0295 26.4999 36.995 26.6712 36.966 26.8431C36.937 27.0156 36.913 27.1887 36.8945 27.3624C36.8754 27.5362 36.8624 27.7106 36.8544 27.8849C36.8464 28.0593 36.8433 28.2343 36.8464 28.4087C36.8489 28.5837 36.8569 28.7581 36.8705 28.9324C36.8834 29.1068 36.9025 29.2806 36.9265 29.4537C36.95 29.6268 36.9795 29.7987 37.0141 29.9699C37.0486 30.1412 37.088 30.3112 37.133 30.4799C37.178 30.6487 37.2279 30.8162 37.2828 30.9818C37.3382 31.1474 37.398 31.3112 37.4634 31.4731C37.5281 31.6349 37.5983 31.7943 37.6729 31.9518C37.7481 32.1093 37.8276 32.2643 37.912 32.4168C37.9965 32.5687 38.0852 32.7187 38.1789 32.8656C38.272 33.0124 38.37 33.1562 38.4723 33.2968C38.5746 33.4374 38.6812 33.5749 38.7915 33.7087C38.9025 33.8431 39.0171 33.9731 39.1354 34.0999C39.2544 34.2268 39.3764 34.3499 39.5028 34.4687C39.6291 34.5881 39.7585 34.7031 39.8917 34.8143C40.0248 34.9249 40.1616 35.0318 40.3009 35.1343C40.4408 35.2362 40.5832 35.3343 40.7292 35.4274C40.8747 35.5212 41.0232 35.6099 41.1742 35.6937C41.3252 35.7781 41.4787 35.8574 41.6346 35.9318C41.7905 36.0062 41.9489 36.0756 42.1092 36.1399C42.2694 36.2049 42.4315 36.2643 42.5948 36.3187C42.7588 36.3724 42.9239 36.4218 43.091 36.4656C43.258 36.5099 43.4256 36.5481 43.5951 36.5818C43.764 36.6149 43.9341 36.6431 44.1054 36.6656C44.2761 36.6887 44.4475 36.7056 44.6194 36.7174C44.7914 36.7293 44.9633 36.7362 45.1359 36.7374C45.3085 36.7381 45.4804 36.7337 45.6524 36.7243C45.825 36.7143 45.9963 36.6993 46.1676 36.6787C46.339 36.6581 46.5091 36.6324 46.6786 36.6012C46.8481 36.5699 47.0169 36.5337 47.1839 36.4918C47.3516 36.4499 47.5174 36.4024 47.6819 36.3506C47.8465 36.2981 48.0092 36.2406 48.1701 36.1781C48.3309 36.1156 48.4899 36.0487 48.6465 35.9762C48.8036 35.9037 48.9577 35.8262 49.1099 35.7437C49.2622 35.6618 49.4119 35.5749 49.5586 35.4831C49.7053 35.3918 49.8489 35.2956 49.9901 35.1949C50.1312 35.0943 50.2686 34.9893 50.4036 34.8799C50.538 34.7712 50.6686 34.6574 50.7968 34.5399C50.9244 34.4224 51.0483 34.3012 51.1684 34.1756C51.2886 34.0506 51.4045 33.9218 51.5167 33.7887C51.6288 33.6562 51.7373 33.5206 51.8415 33.3812C51.945 33.2418 52.0449 33.0993 52.1404 32.9531C52.2353 32.8074 52.3259 32.6593 52.4122 32.5081C52.4985 32.3562 52.5798 32.2024 52.6569 32.0462C52.7333 31.8893 52.8054 31.7306 52.8726 31.5699C52.9398 31.4087 53.002 31.2456 53.0587 31.0812C53.116 30.9162 53.1678 30.7493 53.2146 30.5812C53.2621 30.4131 53.3034 30.2437 53.3404 30.0731C53.3767 29.9018 53.4082 29.7299 53.434 29.5574C53.4605 29.3849 53.4809 29.2112 53.4963 29.0374C53.5123 28.8631 53.5222 28.6887 53.5271 28.5137C53.532 28.3393 53.5314 28.1643 53.5253 27.9899C53.5197 27.8149 53.5086 27.6406 53.492 27.4668C53.4753 27.2931 53.4538 27.1193 53.4266 26.9468C53.3995 26.7743 53.3669 26.6031 53.3293 26.4324C53.2917 26.2618 53.2491 26.0924 53.2011 25.9243C53.153 25.7568 53.1 25.5906 53.0421 25.4256C52.9841 25.2612 52.9206 25.0987 52.8529 24.9381C52.7851 24.7774 52.7117 24.6193 52.6341 24.4631C52.5564 24.3074 52.4744 24.1537 52.3869 24.0031C52.3 23.8518 52.2082 23.7043 52.112 23.5593C52.0159 23.4137 51.9154 23.2718 51.8107 23.1331C51.7059 22.9943 51.5974 22.8593 51.484 22.7274C51.3712 22.5956 51.2541 22.4668 51.1333 22.3424C51.0119 22.2181 50.8874 22.0974 50.7592 21.9806C50.631 21.8637 50.4991 21.7512 50.3642 21.6431C50.2292 21.5343 50.0905 21.4306 49.9494 21.3306C49.8076 21.2306 49.6634 21.1356 49.5155 21.0449C49.3682 20.9543 49.2184 20.8681 49.0656 20.7868C48.9133 20.7056 48.758 20.6293 48.6009 20.5581C48.4437 20.4862 48.2847 20.4199 48.1232 20.3581C47.9617 20.2968 47.7984 20.2406 47.6339 20.1893C47.4693 20.1381 47.3029 20.0918 47.1353 20.0512C46.9676 20.0106 46.7994 19.9749 46.6293 19.9443C46.4598 19.9143 46.2891 19.8893 46.1177 19.8699C45.9464 19.8506 45.775 19.8362 45.6025 19.8281C45.4305 19.8193 45.2579 19.8156 45.086 19.8181C44.9134 19.8199 44.7415 19.8274 44.5695 19.8406C44.3976 19.8537 44.2262 19.8718 44.0555 19.8956C43.8848 19.9193 43.7147 19.9487 43.5458 19.9831L46.4838 27.7774C46.5152 27.8637 46.5374 27.9518 46.5516 28.0424C46.5658 28.1331 46.5713 28.2243 46.5676 28.3162C46.5645 28.4074 46.5522 28.4981 46.5313 28.5874C46.5103 28.6768 46.4813 28.7631 46.4437 28.8468C46.4062 28.9299 46.3612 29.0093 46.3082 29.0837C46.2558 29.1581 46.1966 29.2268 46.1307 29.2899C46.0647 29.3524 45.9932 29.4087 45.9168 29.4574C45.8398 29.5056 45.759 29.5468 45.6746 29.5793C45.5901 29.6118 45.5032 29.6362 45.4145 29.6518C45.3251 29.6674 45.2351 29.6743 45.1445 29.6718C45.0546 29.6699 44.9652 29.6587 44.8764 29.6387C44.7883 29.6187 44.7026 29.5906 44.6201 29.5537C44.5369 29.5168 44.4586 29.4718 44.384 29.4199C44.3101 29.3674 44.241 29.3081 44.1782 29.2418C44.1153 29.1762 44.0598 29.1043 44.0105 29.0274C43.9612 28.9506 43.9199 28.8693 43.8866 28.7843ZM20.0425 26.8706H11.8152C11.724 26.8706 11.6334 26.8799 11.544 26.8974C11.4547 26.9156 11.3678 26.9424 11.2833 26.9781C11.1989 27.0137 11.1188 27.0568 11.043 27.1081C10.9666 27.1599 10.8969 27.2181 10.8322 27.2837C10.7675 27.3493 10.7095 27.4206 10.659 27.4974C10.6085 27.5743 10.5653 27.6556 10.5308 27.7412C10.4957 27.8268 10.4692 27.9149 10.4513 28.0056C10.4334 28.0962 10.4248 28.1881 10.4248 28.2806C10.4248 28.3731 10.4334 28.4649 10.4513 28.5556C10.4692 28.6468 10.4957 28.7349 10.5308 28.8199C10.5653 28.9056 10.6085 28.9868 10.659 29.0637C10.7095 29.1412 10.7675 29.2124 10.8322 29.2774C10.8969 29.3431 10.9666 29.4018 11.043 29.4531C11.1188 29.5043 11.1989 29.5481 11.2833 29.5831C11.3678 29.6187 11.4547 29.6456 11.544 29.6637C11.6334 29.6818 11.724 29.6906 11.8152 29.6906H20.0425C19.9987 29.9487 19.9432 30.2043 19.8761 30.4568C19.8089 30.7099 19.73 30.9587 19.64 31.2043C19.55 31.4499 19.449 31.6906 19.3374 31.9262C19.2252 32.1624 19.1026 32.3924 18.9695 32.6168C18.8363 32.8412 18.6934 33.0587 18.5405 33.2699C18.3877 33.4806 18.2249 33.6837 18.0536 33.8799C17.8817 34.0756 17.7017 34.2624 17.5131 34.4412C17.3245 34.6199 17.1279 34.7893 16.9233 34.9493C16.7193 35.1093 16.5079 35.2599 16.2903 35.3999C16.0721 35.5406 15.8484 35.6706 15.6185 35.7893C15.3886 35.9087 15.1538 36.0168 14.9141 36.1143C14.6743 36.2112 14.4303 36.2968 14.1825 36.3712C13.9354 36.4456 13.6845 36.5074 13.4312 36.5581C13.1779 36.6087 12.9228 36.6474 12.6657 36.6743C12.4094 36.7006 12.1517 36.7156 11.8935 36.7174C11.6353 36.7199 11.3776 36.7099 11.12 36.6881C10.863 36.6662 10.6072 36.6324 10.3527 36.5868C10.0988 36.5406 9.84732 36.4831 9.59833 36.4131C9.34933 36.3437 9.10404 36.2624 8.86244 36.1693C8.62146 36.0768 8.38479 35.9731 8.15244 35.8581C7.9207 35.7431 7.69452 35.6174 7.47387 35.4812C7.25323 35.3449 7.03937 35.1981 6.83228 35.0418C6.62582 34.8856 6.42613 34.7199 6.23384 34.5443C6.04216 34.3693 5.8585 34.1856 5.68347 33.9931C5.50843 33.8006 5.34264 33.5999 5.1861 33.3924C5.02955 33.1843 4.88225 32.9693 4.74543 32.7474C4.60799 32.5256 4.48164 32.2974 4.36516 32.0637C4.24929 31.8299 4.1439 31.5912 4.0496 31.3474C3.95531 31.1037 3.8721 30.8556 3.80061 30.6043C3.72912 30.3524 3.66872 30.0981 3.62064 29.8412C3.57195 29.5837 3.53559 29.3249 3.51094 29.0643C3.48629 28.8037 3.47334 28.5424 3.47273 28.2806C3.47273 28.0181 3.48444 27.7562 3.50786 27.4949C3.53189 27.2337 3.56764 26.9737 3.6151 26.7162C3.66255 26.4581 3.72234 26.2031 3.79321 25.9506C3.86409 25.6981 3.94668 25.4499 4.04036 25.2049C4.13465 24.9606 4.23943 24.7206 4.3553 24.4862C4.47116 24.2512 4.59751 24.0231 4.73433 23.7999C4.87116 23.5774 5.01784 23.3612 5.17439 23.1524C5.33093 22.9437 5.49672 22.7424 5.67176 22.5493C5.84679 22.3562 6.03045 22.1712 6.22274 21.9956C6.41442 21.8193 6.61411 21.6531 6.82181 21.4956C7.02889 21.3387 7.24275 21.1918 7.46401 21.0549C7.68465 20.9181 7.91146 20.7918 8.14381 20.6762C8.37616 20.5606 8.61345 20.4562 8.85504 20.3631C9.09726 20.2699 9.34255 20.1887 9.59216 20.1187C9.84177 20.0487 10.0938 19.9906 10.3484 19.9449C10.6035 19.8987 10.8599 19.8643 11.1176 19.8424C11.3758 19.8206 11.634 19.8106 11.8929 19.8131C12.1517 19.8156 12.4094 19.8306 12.667 19.8574C12.9246 19.8837 13.1804 19.9231 13.4343 19.9737C13.6876 20.0249 13.9391 20.0874 14.1868 20.1618C14.4352 20.2368 14.6793 20.3231 14.9196 20.4206C15.16 20.5181 15.3948 20.6268 15.6253 20.7468C15.8552 20.8668 16.0795 20.9968 16.2977 21.1381C16.5165 21.2793 16.7273 21.4299 16.9319 21.5912C17.1365 21.7518 17.3331 21.9224 17.5217 22.1018C17.7103 22.2812 17.8909 22.4693 18.0622 22.6656C18.2336 22.8624 18.3957 23.0668 18.5485 23.2781C18.7014 23.4899 18.8443 23.7087 18.9769 23.9343C19.11 24.1593 19.232 24.3906 19.3436 24.6274C19.4551 24.8643 19.5556 25.1056 19.6449 25.3518C19.7343 25.5981 19.812 25.8481 19.8785 26.1018C19.9445 26.3556 19.9993 26.6118 20.0425 26.8706Z", fill: "white" })), Qa = (i) => /* @__PURE__ */ P("svg", { preserveAspectRatio: "none", width: 123, height: 82, viewBox: "0 0 123 82", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M120.365 37.1527C122.774 39.152 122.774 42.848 120.365 44.8473L76.9935 80.8473C76.0961 81.5923 74.9664 82 73.8001 82L0 82L0 0L73.8001 0C74.9664 0 76.0961 0.407744 76.9935 1.15267L120.365 37.1527Z", fill: "currentColor" })), Ud = (i, e) => {
  const [t, r] = q(i);
  return I(() => {
    const a = setTimeout(() => {
      r(i);
    }, e);
    return () => {
      clearTimeout(a);
    };
  }, [i, e]), t;
}, xa = (i) => /* @__PURE__ */ P("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("circle", { cx: 16, cy: 16, r: 16, fill: "#030712" }), /* @__PURE__ */ P("path", { d: "M15.6047 20.0343C15.1 20.0343 14.6794 19.6137 14.6794 19.109V18.7389C14.6121 16.7203 15.9748 15.8455 16.9673 15.2062C18.0439 14.5165 18.6495 14.0623 18.6495 12.8343C18.6495 11.2698 17.5056 10.2604 15.7393 10.2604C15.3187 10.2773 13.3505 10.496 13.3505 12.8175C13.3505 13.3221 12.9299 13.7427 12.4252 13.7427C11.9206 13.7427 11.5 13.3221 11.5 12.8175C11.5 9.4025 14.2589 8.44362 15.7056 8.40997H15.7224C18.5318 8.40997 20.5 10.2268 20.5 12.8343C20.5 15.1389 19.0364 16.081 17.9766 16.7707C16.9841 17.41 16.5131 17.7632 16.5467 18.6885C16.5467 18.7053 16.5467 18.7053 16.5467 18.7221V19.109C16.5299 19.6305 16.1093 20.0343 15.6047 20.0343Z", fill: "white" }), /* @__PURE__ */ P("path", { d: "M15.6887 23.5838C16.274 23.5838 16.7485 23.1093 16.7485 22.524C16.7485 21.9387 16.274 21.4642 15.6887 21.4642C15.1034 21.4642 14.6289 21.9387 14.6289 22.524C14.6289 23.1093 15.1034 23.5838 15.6887 23.5838Z", fill: "white" })), zi = (i) => /* @__PURE__ */ P("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("circle", { cx: 16, cy: 16, r: 16, fill: "#10B981" }), /* @__PURE__ */ P("path", { d: "M10.5261 17.6842L14.4467 21.1056L21.5366 11.2421", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), ul = (i) => /* @__PURE__ */ P("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("circle", { cx: 16, cy: 16, r: 16, fill: "#EF4444" }), /* @__PURE__ */ P("path", { d: "M10.913 21.0829L15.9959 16M15.9959 16L21.0789 10.9171M15.9959 16L21.0789 21.0829M15.9959 16L10.913 10.9171", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Ti = (i) => /* @__PURE__ */ P("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("circle", { cx: 16, cy: 16, r: 15.5, fill: "#F59E0B", stroke: "#F59E0B" }), /* @__PURE__ */ P("path", { d: "M18 23.9603C18 25.0648 17.1041 25.96 15.9997 25.96C14.8951 25.96 14 25.0648 14 23.9603C14 22.8548 14.8951 21.96 15.9997 21.96C17.1041 21.9602 18 22.8551 18 23.9603Z", fill: "white" }), /* @__PURE__ */ P("path", { d: "M18.222 8.13512C18.1818 7.67877 18.0044 7.24904 17.7339 6.89648C17.3204 6.35776 16.6887 5.99896 15.9949 6C15.3216 5.99917 14.7072 6.33675 14.2935 6.84864C14.0016 7.20973 13.8096 7.65776 13.7676 8.13512C13.7565 8.26117 13.7578 8.39783 13.7676 8.52034L14.6898 18.9815C14.7177 19.2972 14.8575 19.5762 15.0669 19.7837C15.3063 20.0211 15.6364 20.1652 15.9949 20.1648C16.3175 20.1652 16.6171 20.0483 16.8481 19.8522C17.0987 19.6396 17.2688 19.333 17.2998 18.9813L18.222 8.52013C18.232 8.39762 18.2331 8.26117 18.222 8.13512Z", fill: "white" })), vr = {
  unavailable: {
    icon: xa,
    heading: "Compatibility Information Not Available",
    heading_code: "checksku_message_nocompatibilityinfo"
  },
  check: {
    icon: xa,
    heading: "Check Compatibility",
    heading_code: "productcheck_nobikeselected_label",
    details: "Add your ride to check if this part fits",
    details_code: "productcheck_nobikeselected_message"
  },
  compatible: {
    icon: zi,
    heading: "Compatible",
    heading_code: "compatible"
  },
  incompatible: {
    icon: ul,
    heading: "Not Compatible",
    heading_code: "not_compatible"
  },
  warning: {
    icon: Ti,
    heading: "Compatible - Check Notes",
    heading_code: "compatible_check_notes"
  }
};
function $d({
  type: i,
  onSelect: e,
  categoryId: t,
  removePart: r,
  notes: a,
  clearNotes: o
}) {
  var F;
  const s = window.BikeMatrix.getConfig(), l = new Oe(s.apiUrl, s.apiKey, s.isShopify), [u, c] = q(!1), p = ee(null), h = ee(null), f = ee(null), b = ee(null), [g, m] = q(""), [k, _] = q(null), [y, v] = q([]), [w, x] = q(!1), D = Ud(g, 500), {
    t: A
  } = se(), C = async () => {
    x(!0);
    const T = await l.findProducts(g, t);
    T.success ? (x(!1), v(T.data)) : (console.log(T.error), x(!1));
  };
  I(() => {
    (D && !k && g.length > 2 || D && k && (k == null ? void 0 : k.display_Name) !== g) && C();
  }, [D]), I(() => {
    y.length > 0 && g.length > 2 && R();
  }, [y]);
  const z = (T) => {
    _(T), m(T.display_Name), e(T);
  };
  I(() => {
    k && g === k.display_Name && N();
  }, [g, k]);
  const R = () => {
    he.to(p.current, {
      height: "auto"
    });
  }, N = () => {
    he.to(p.current, {
      height: 0
    });
  }, M = () => {
    u && B(), m(""), v([]), N(), o();
  };
  I(() => {
    u || (_(null), r());
  }, [u]);
  const U = () => {
    he.to(h.current, {
      transform: "translateY(112px)",
      duration: 1,
      onComplete: () => c(!0)
    });
  }, B = () => {
    he.to(h.current, {
      transform: "translateY(0px)",
      duration: 1,
      onComplete: () => c(!1)
    });
  };
  return I(() => {
    i ? U() : !i && u && B();
  }, [i]), I(() => {
    a.warning || a.compatible ? he.to(b.current, {
      opacity: 1
    }) : he.to(b.current, {
      opacity: 0
    });
  }, [a]), d("div", {
    className: "search-wrapper",
    children: [d("style", {
      type: "text/css",
      children: Vd
    }), d("div", {
      className: K("compatibility-wrapper"),
      ref: f,
      style: {
        height: i === "warning" ? "140px" : "110px"
      },
      children: d("div", {
        className: K("compatibility ", {
          compatible: "bg-emerald-50",
          incompatible: "bg-red-50",
          warning: "bg-amber-50",
          "no-information": "bg-white"
        }[i]),
        style: {
          borderColor: i === "compatible" ? "rgb(16 185 129)" : i == "incompatible" ? "rgb(239 68 68)" : i === "warning" ? "rgb(245 158 11)" : i === "no-information" ? "#000" : "transparent"
        },
        ref: h,
        children: [d("div", {
          className: K("compatibility-contents"),
          children: [d(Qa, {
            class: K("self-start h-full w-[93px] polygon", {
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-500",
              "no-information": "text-black"
            }[i])
          }), d(Xa, {
            class: "h-[26px] w-[37.5px] absolute bikon"
          }), d("p", {
            className: K("font-semibold text-lg ml-[105px]", {
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-950",
              "no-information": "text-black"
            }[i]),
            children: A((F = vr[i]) == null ? void 0 : F.heading)
          })]
        }), d("div", {
          className: K("compatibility-background ", {
            compatible: "bg-emerald-500",
            incompatible: "bg-red-500",
            warning: "bg-amber-500",
            "no-information": "bg-black"
          }[i])
        })]
      })
    }), d("div", {
      className: K("search_bar-wrapper text-lg", {
        compatible: "bg-emerald-50 border-emerald-500",
        incompatible: "bg-red-50 border-red-500",
        warning: "bg-amber-50 border-amber-500",
        "no-information": "bg-white border-black-500"
      }[i]),
      style: {
        borderColor: i === "compatible" ? "rgb(16 185 129)" : i == "incompatible" ? "rgb(239 68 68)" : i === "warning" ? "rgb(245 158 11)" : "rgb(0 0 0)"
      },
      children: [d("div", {
        className: "input_icon-wrapper",
        children: [!w && d("div", {
          className: "svg-wrapper",
          children: d(jd, {})
        }), d(Kr, {
          isLoading: w,
          colour: "#000"
        }), d("input", {
          type: "text",
          placeholder: "Enter Brand, Model, Barcode or part number...",
          value: g,
          onChange: (T) => m(T.currentTarget.value)
        })]
      }), d("div", {
        className: "svg-wrapper",
        onClick: M,
        children: d(as, {})
      })]
    }), d("div", {
      className: "results-wrapper",
      ref: p,
      children: d("div", {
        className: "results text-lg",
        children: y && y.length > 0 ? y.map((T) => d("div", {
          className: "result",
          onClick: () => {
            z(T);
          },
          children: T.display_Name
        }, T.product_ID)) : d("div", {
          className: "result",
          children: A("error_find_products_no_results")
        })
      })
    }), d("div", {
      className: "notes-wrapper",
      ref: b,
      children: [!!a.compatible && d("p", {
        class: "text-sm flex",
        children: [d(zi, {
          class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
        }), " ", a.compatible]
      }), !!a.warning && d("p", {
        class: "text-sm flex",
        children: [d(Ti, {
          class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
        }), " ", a.warning]
      })]
    })]
  });
}
function Hd() {
  const {
    t: i
  } = se(), t = window.BikeMatrix.getConfig(), r = Bi.value, a = ye.value, o = new Oe(t.apiUrl, t.apiKey, t.isShopify), {
    currentBike: n
  } = Ee(), [s, l] = q(!1), [u, c] = q(null), [p, h] = q(null), [f, b] = q(null), [g, m] = q({
    compatible: "",
    warning: ""
  });
  n.isShared && J("/");
  const k = async () => {
    l(!0), a[r.category.split(" ").join("_")][r.type.split(" ").join("_")] = {
      ...a[r.category.split(" ").join("_")][r.type.split(" ").join("_")],
      id: p.product_ID,
      name: p.display_Name,
      unsaved_changes: !0
    }, ye.value = a;
    const y = await o.addComponent(n.key, p.product_Category_ID, p.product_ID);
    y.success ? J("/bom") : (b(y.error), l(!1));
  }, _ = async (y) => {
    var v;
    if (m({
      compatible: "",
      warning: ""
    }), !y.skU_EAN && !y.skU_UPC && !y.manufacturer_Part_Number)
      c("no-information");
    else {
      h(y);
      const w = ((v = zr()) == null ? void 0 : v.language) || "en-GB", x = await o.checkSkuCompatibility(n.key, y.skU_EAN || y.skU_UPC || y.manufacturer_Part_Number, w);
      x.compatible && x.warning ? (c("warning"), m({
        warning: x.warningMessage,
        compatible: x.compatibilityMessage
      })) : x.compatible ? c("compatible") : x.compatible || c("incompatible");
    }
  };
  return r ? d(O, {
    children: [d("div", {
      children: [n ? d(We, {
        bike: n,
        selected: !0,
        settings: !0
      }) : d(ur, {}), d("div", {
        className: "part-wrapper mt-8 mb-8",
        children: [d(Ge, {
          text: r != null && r.type ? "Current " + r.type + ":" : r.type,
          bold: !0,
          capitalize: !0
        }), d(Ge, {
          subheader: !0,
          text: r == null ? void 0 : r.part.name
        })]
      })]
    }), d($d, {
      notes: g,
      onSelect: (y) => _(y),
      type: u,
      categoryId: r.part.product_category_id,
      clearNotes: () => m({
        compatible: "",
        warning: ""
      }),
      removePart: () => {
        c(null), h(null);
      }
    }), d("div", {
      className: "text-red-500 text-xs flex justify-center items-center",
      children: f
    }), d(kt, {
      text: i("confirm"),
      onClick: k,
      primary: !0,
      disabled: u === "incompatible" || u === "no-information",
      loading: s
    }), d(xt, {})]
  }) : d(O, {});
}
const Kd = `.edit-field__wrapper{position:relative}.edit-container{display:flex;align-items:center;gap:1rem;margin-top:8px}.edit-input_wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:flex;align-items:center;height:54px;transition:ease-in-out all .5s}.edit-input_content{display:flex;gap:.5rem;cursor:pointer}.input-wrapper{width:100%}.edit-input{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.svg{width:20px;height:20px;cursor:pointer}.icon-wrapper{display:flex;align-items:center;gap:.25rem}.edit-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.edit-button:hover{background-color:#000}.edit-button:hover svg{color:#fff}.edit-button:hover .label-wrapper{opacity:1;top:-32px}.edit-button:hover .tick{stroke:#fff}.edit-button svg{width:16px;height:16px}.tick{stroke:#000}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}.edit-open-wrapper{display:flex;gap:1rem}.notice{position:absolute;right:0;bottom:-20px}
`, Gd = (i) => /* @__PURE__ */ P("svg", { width: 13, height: 13, viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M1.19739 8.1317L4.99549 11.4461L11.8639 1.8909", stroke: "currentColour", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Wd = (i) => /* @__PURE__ */ P("svg", { width: 16, height: 16, viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M1.71186 11C1.14322 11 0.714757 10.8578 0.426485 10.5733C0.142162 10.2889 0 9.86613 0 9.30512V2.85152C0 2.28656 0.142162 1.86382 0.426485 1.58332C0.714757 1.29886 1.14322 1.15663 1.71186 1.15663H8.12098L7.30355 1.97444H1.72371C1.43149 1.97444 1.2064 2.05148 1.04844 2.20557C0.894433 2.35965 0.817429 2.58879 0.817429 2.893V9.25771C0.817429 9.56192 0.894433 9.79106 1.04844 9.94514C1.2064 10.0992 1.43149 10.1763 1.72371 10.1763H8.2513C8.47639 10.1763 8.66001 10.0992 8.80217 9.94514C8.94828 9.79106 9.02134 9.56192 9.02134 9.25771V3.72859L9.83877 2.90485V9.30512C9.83877 9.86613 9.70055 10.2889 9.42413 10.5733C9.15165 10.8578 8.76663 11 8.26907 11H1.71186ZM3.80875 7.3317C3.76136 7.35541 3.71792 7.34553 3.67843 7.30207C3.63894 7.25861 3.63104 7.21318 3.65474 7.16577L4.13453 6.16425L9.35305 0.943291L10.0757 1.65443L4.85126 6.87539L3.80875 7.3317ZM10.4785 1.25738L9.76176 0.534386L10.1527 0.143259C10.2396 0.0563415 10.3403 0.0089322 10.4548 0.00103064C10.5693 -0.00687092 10.668 0.0306615 10.751 0.113628L10.8694 0.232151C10.9603 0.323019 11.0037 0.425739 10.9998 0.540312C10.9998 0.654885 10.9543 0.761556 10.8635 0.860325L10.4785 1.25738Z", fill: "currentColor" })), tn = ({
  value: i,
  onSave: e,
  loading: t,
  label: r,
  success: a,
  error: o
}) => {
  const {
    t: n
  } = se(), [s, l] = q(!1), [u, c] = q(i), p = ee(null), h = ee(null), [f, b] = q({
    type: "",
    message: ""
  }), [g, m] = q(!1), k = () => {
    const y = he.timeline();
    y.to(h.current, {
      opacity: 0
    }), y.to(h.current, {
      width: "124px"
    }), y.to(h.current, {
      onStart: () => l(!0),
      opacity: 1
    });
  }, _ = () => {
    const y = he.timeline();
    y.to(h.current, {
      opacity: 0
    }), y.to(h.current, {
      width: "54px"
    }), y.to(h.current, {
      onStart: () => {
        l(!1);
      },
      opacity: 1
    });
  };
  return I(() => {
    s && p.current.focus();
  }, [s]), I(() => {
    a ? (_(), b({
      type: "success",
      message: `Your ${r} has been saved`
    })) : !a && a !== null && (_(), b({
      type: "error",
      message: o
    }));
  }, [a]), d("div", {
    className: "edit-field__wrapper",
    children: [d("style", {
      type: "text/css",
      children: Kd
    }), r && d("label", {
      class: "text-gray-800 font-bold text",
      children: r
    }), d("div", {
      className: "edit-container",
      children: [d("div", {
        className: "edit-input_wrapper",
        style: s && {
          border: "1px solid #000"
        },
        children: [s && d("div", {
          className: "input-wrapper",
          children: d("input", {
            maxLength: 80,
            type: "text",
            className: "edit-input",
            placeholder: u,
            onChange: (y) => c(y.currentTarget.value),
            value: u,
            ref: p,
            onKeyDown: (y) => {
              y.key === "Enter" && e(u);
            }
          })
        }), !s && d("div", {
          className: "edit-input_content",
          children: d(Ge, {
            text: i
          })
        })]
      }), d("div", {
        className: "edit-save-cancel-wrapper",
        ref: h,
        children: [!s && d("div", {
          className: "edit-button",
          onClick: k,
          children: [d("div", {
            className: "label-wrapper",
            children: d("div", {
              className: "button-label",
              children: n("edit")
            })
          }), d(Wd, {})]
        }), s && d("div", {
          className: "edit-open-wrapper",
          onMouseOver: () => m(!0),
          onMouseLeave: () => m(!1),
          children: [d("div", {
            className: "edit-button",
            onClick: () => {
              t || e(u);
            },
            children: [d("div", {
              className: "label-wrapper",
              children: d("div", {
                className: "button-label",
                children: n("save")
              })
            }), t ? d(Kr, {
              isLoading: t,
              colour: g ? "#fff" : "#000"
            }) : d(Gd, {
              className: "tick"
            })]
          }), d("div", {
            className: "edit-button",
            onClick: () => {
              t || _();
            },
            children: [d("div", {
              className: "label-wrapper",
              children: d("div", {
                className: "button-label",
                children: "save"
              })
            }), d(Tr, {})]
          })]
        })]
      })]
    }), f.message && d("p", {
      class: "text-xs notice flex",
      style: {
        color: f.type === "success" ? "#10B981" : "#EF4444"
      },
      children: f.message
    })]
  });
}, Yd = `.copy-share_wrapper{display:flex;align-items:center;gap:1rem;margin-top:8px}.value-wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:flex;justify-content:flex-start;align-items:center;height:54px}.share-button,.copy-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.share-button:hover,.copy-button:hover{background-color:#000}.share-button:hover svg,.copy-button:hover svg{color:#fff}.share-button:hover .label-wrapper,.copy-button:hover .label-wrapper{opacity:1;top:-32px}.share-button svg,.copy-button svg{width:16px}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}
`, Jd = (i) => /* @__PURE__ */ P("svg", { width: 22, height: 27, viewBox: "0 0 22 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M5.23701 5.89236V3.30519C5.23701 2.21106 5.51143 1.38666 6.06029 0.831997C6.61677 0.277332 7.43624 0 8.51871 0H12.738C13.2717 0 13.7481 0.0759814 14.1674 0.227944C14.5942 0.379907 14.9906 0.638244 15.3565 1.00295L20.9938 6.71296C21.3825 7.10806 21.6455 7.51836 21.7827 7.94386C21.9276 8.36176 22 8.87083 22 9.47108V18.3837C22 19.4778 21.7256 20.3022 21.1767 20.8569C20.6355 21.404 19.8198 21.6775 18.7297 21.6775H16.4314V20.1047H18.6497C19.2367 20.1047 19.6788 19.9527 19.9761 19.6488C20.2734 19.3449 20.422 18.9118 20.422 18.3495V9.0152H15.1965C14.6019 9.0152 14.1559 8.87463 13.8586 8.5935C13.5613 8.30477 13.4127 7.85268 13.4127 7.23723V1.58421H8.59875C8.01178 1.58421 7.56583 1.73618 7.26091 2.0401C6.96362 2.34403 6.81497 2.77712 6.81497 3.33938V5.89236H5.23701ZM14.8534 7.02068C14.8534 7.40059 15.044 7.59054 15.4252 7.59054H19.999L14.8534 2.39341V7.02068ZM0 23.6948V8.61629C0 7.52216 0.274428 6.70156 0.823285 6.1545C1.37214 5.59983 2.1878 5.3225 3.27027 5.3225H7.13514C7.71448 5.3225 8.18711 5.38328 8.55301 5.50485C8.92654 5.62642 9.30769 5.88476 9.69647 6.27986L15.8025 12.4686C16.2065 12.8789 16.4695 13.2664 16.5915 13.6311C16.7134 13.9958 16.7744 14.5049 16.7744 15.1583V23.6948C16.7744 24.7889 16.5 25.6133 15.9511 26.168C15.4023 26.7227 14.5866 27 13.5042 27H3.27027C2.1878 27 1.37214 26.7227 0.823285 26.168C0.274428 25.6133 0 24.7889 0 23.6948ZM1.5894 23.6606C1.5894 24.2305 1.73423 24.6636 2.02391 24.9599C2.32121 25.2638 2.75953 25.4158 3.33888 25.4158H13.4127C13.9997 25.4158 14.4418 25.2638 14.7391 24.9599C15.044 24.6636 15.1965 24.2305 15.1965 23.6606V15.1811H9.01039C8.36244 15.1811 7.87457 15.0215 7.54678 14.7024C7.21899 14.3833 7.05509 13.8932 7.05509 13.2322V6.90671H3.35031C2.77096 6.90671 2.33264 7.05867 2.03534 7.3626C1.73805 7.65893 1.5894 8.08442 1.5894 8.63909V23.6606ZM9.18191 13.7108H14.8763L8.54158 7.29422V13.0612C8.54158 13.2892 8.59113 13.4563 8.69023 13.5627C8.79695 13.6615 8.96085 13.7108 9.18191 13.7108Z", fill: "currentColor" })), Zd = (i) => /* @__PURE__ */ P("svg", { width: 16, height: 21.6, viewBox: "0 0 20 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ P("path", { d: "M3.58702 27C2.40708 27 1.51426 26.682 0.908555 26.046C0.302851 25.4184 0 24.4812 0 23.2343V11.4728C0 10.2176 0.302851 9.27615 0.908555 8.64854C1.51426 8.01255 2.40708 7.69456 3.58702 7.69456H6.89086V9.82845H3.66962C3.13471 9.82845 2.72566 9.97908 2.44248 10.2803C2.15929 10.5732 2.0177 11.0209 2.0177 11.6234V23.0837C2.0177 23.6695 2.15929 24.113 2.44248 24.4142C2.72566 24.7155 3.13471 24.8661 3.66962 24.8661H16.3422C16.8692 24.8661 17.2783 24.7155 17.5693 24.4142C17.8604 24.113 18.0059 23.6695 18.0059 23.0837V11.6234C18.0059 11.0209 17.8604 10.5732 17.5693 10.2803C17.2783 9.97908 16.8692 9.82845 16.3422 9.82845H13.1209V7.69456H16.413C17.6087 7.69456 18.5054 8.01255 19.1032 8.64854C19.7011 9.28452 20 10.2259 20 11.4728V23.2343C20 24.4812 19.7011 25.4184 19.1032 26.046C18.5054 26.682 17.6087 27 16.413 27H3.58702ZM10.0059 17.6109C9.73845 17.6109 9.51032 17.5105 9.32153 17.3096C9.13274 17.1088 9.03835 16.8745 9.03835 16.6067V4.53138L9.10914 2.76151L8.38938 3.62762L6.77286 5.46025C6.5998 5.66946 6.37955 5.77406 6.11209 5.77406C5.86037 5.77406 5.65192 5.69038 5.48673 5.52301C5.3294 5.34728 5.25074 5.13389 5.25074 4.88285C5.25074 4.6318 5.3412 4.41004 5.52212 4.21757L9.28614 0.351464C9.40413 0.225941 9.52212 0.138075 9.64012 0.0878661C9.75811 0.0292887 9.88004 0 10.0059 0C10.1318 0 10.2498 0.0292887 10.3599 0.0878661C10.4779 0.138075 10.5959 0.225941 10.7139 0.351464L14.4779 4.21757C14.6667 4.41004 14.7611 4.6318 14.7611 4.88285C14.7611 5.13389 14.6745 5.34728 14.5015 5.52301C14.3363 5.69038 14.1318 5.77406 13.8879 5.77406C13.6205 5.77406 13.4041 5.66946 13.2389 5.46025L11.6106 3.62762L10.8909 2.77406L10.9735 4.53138V16.6067C10.9735 16.8745 10.8751 17.1088 10.6785 17.3096C10.4897 17.5105 10.2655 17.6109 10.0059 17.6109Z", fill: "currentColor" })), rn = ({
  text: i,
  onShare: e,
  label: t,
  onCopy: r
}) => {
  const {
    t: a
  } = se(), [o, n] = q("Copy");
  return d("div", {
    children: [d("style", {
      type: "text/css",
      children: Yd
    }), t && d("label", {
      class: "text-gray-800 font-bold text",
      children: t
    }), d("div", {
      className: "copy-share_wrapper",
      children: [d("div", {
        className: "value-wrapper",
        children: d(Ge, {
          text: i
        })
      }), e && d("div", {
        className: "share-button",
        onClick: () => e(i),
        children: [d("div", {
          className: "label-wrapper",
          children: d("div", {
            className: "button-label",
            children: a("share")
          })
        }), d(Zd, {})]
      }), d("div", {
        className: "copy-button",
        onClick: () => {
          r(i), n("Copied");
        },
        onMouseLeave: () => setTimeout(() => {
          n(a("copy"));
        }, 1e3),
        children: [d("div", {
          className: "label-wrapper",
          children: d("div", {
            className: "button-label",
            children: o
          })
        }), d(Jd, {})]
      })]
    })]
  });
};
function Xd() {
  const i = ye.value, t = window.BikeMatrix.getConfig(), {
    currentBike: r,
    saveBike: a
  } = Ee(), [o, n] = q(i == null ? void 0 : i.owner_Email_Address), [s, l] = q(!1), [u, c] = q(null), [p, h] = q(null), [f, b] = q(r.name), [g, m] = q(null), [k, _] = q(null), [y, v] = q(null), w = new Oe(t.apiUrl, t.apiKey, t.isShopify), {
    t: x
  } = se(), D = async (C, z) => {
    if (z === "name") {
      b(C), m(!0), _(null), v(null);
      const R = await w.updateCustomBikeName(r.key, C);
      a({
        ...r,
        name: C
      }), m(!1), R.success ? _(!0) : v(R.error);
    }
    if (z === "email") {
      n(C), l(!0), c(null), h(null);
      const R = await w.saveCustomBike(r.key, C);
      l(!1), R.success === !1 ? c(!0) : (c(!1), h(R.error));
    }
  }, A = (C) => {
    navigator.share({
      title: x("virtualworkshop_settings_id"),
      text: C,
      url: window.location.href
    }).then(() => console.log("Successful share! 🎉")).catch((z) => console.error(z));
  };
  return i ? d(O, {
    children: [d("div", {
      className: "mb-4",
      children: r ? d(We, {
        bike: r,
        selected: !0,
        simple: !0
      }) : d(ur, {})
    }), d("div", {
      className: "flex flex-col gap-4",
      children: [d(tn, {
        value: f,
        onSave: (C) => D(C, "name"),
        loading: g,
        label: x("virtualworkshop_settings_bike_name"),
        success: k,
        error: y
      }), (i == null ? void 0 : i.owner_Email_Address) && d(tn, {
        value: o,
        onSave: (C) => D(C, "email"),
        loading: s,
        label: x("virtualworkshop_settings_email"),
        success: u,
        error: p
      }), d(rn, {
        label: x("virtualworkshop_settings_id"),
        text: r.key,
        onCopy: (C) => navigator.clipboard.writeText(C)
      }), d(rn, {
        label: x("virtualworkshop_settings_share_id"),
        text: r.shareId,
        onShare: (C) => A(C),
        onCopy: (C) => navigator.clipboard.writeText(C)
      })]
    }), d(xt, {})]
  }) : d(O, {});
}
function Qd() {
  const e = window.BikeMatrix.getConfig();
  I(() => {
    Je.value.back = "/";
  }, []);
  const t = new Oe(e.apiUrl, e.apiKey, e.isShopify), {
    currentBike: r
  } = Ee(), [a, o] = q(null), [n, s] = q(""), l = async () => {
    const u = await t.getBikeBom(r.key);
    if (!u.success)
      s(u.error);
    else {
      const c = Pr(u.data);
      o(c), ye.value = c;
    }
  };
  return I(() => {
    l();
  }, []), d(O, {
    children: [d("div", {
      className: "mb-4",
      children: [a ? d(We, {
        bike: a,
        readOnly: !0,
        shared: !0
      }) : d(ur, {}), d("div", {
        class: "mt-4 mb-8",
        children: d(ll, {
          categorisedBOM: a,
          readOnly: !0
        })
      })]
    }), n, d(xt, {})]
  });
}
const Ca = $e("/"), J = (i) => {
  const e = Ca.peek();
  Ca.value = i, cl({
    previous: e,
    path: i
  });
}, eo = [{
  title: "bikeselector_home_title",
  component: ac,
  path: "/"
}, {
  title: "bikeselector_addbike_title",
  component: lc,
  path: "/add"
}, {
  title: "bikeselector_search_title",
  component: uc,
  path: "/search"
}, {
  title: "bikeselector_size_title",
  component: cc,
  path: "/size"
}, {
  title: "bikeselector_confirm_title",
  component: pc,
  path: "/confirm"
}, {
  title: "bikeselector_browse_title",
  component: hc,
  path: "/browse"
}, {
  title: "virtualworkshop_title",
  component: fc,
  path: "/workshop"
}, {
  title: "virtualworkshop_title",
  component: Md,
  path: "/bom"
}, {
  title: "virtualworkshop_title",
  component: Id,
  path: "/part"
}, {
  title: "virtualworkshop_title",
  component: Hd,
  path: "/update"
}, {
  title: "virtualworkshop_title",
  component: Xd,
  path: "/settings"
}, {
  title: "virtualworkshop_bom_title",
  component: Qd,
  path: "/read-only"
}], Ji = eo.map((i) => i.path), cl = (i) => {
  let e;
  const t = Ji.indexOf(i.path), r = eo[t], a = Ji.slice(1, 5).indexOf(r.path);
  t && (e = Ji[t - 1]), i.previous === "/" && i.path === "/browse" && (e = "/"), i.previous === "/" && i.path === "/workshop" && (e = "/"), i.path === "/settings" && (e = i.previous), Je.value = {
    title: r.title,
    step: a > -1 ? a : void 0,
    back: e
  };
};
function ep() {
  const e = ut(() => eo.reduce((t, r) => (t[r.path] = r.component, t), {}), [])[Ca.value];
  return I(() => {
    cl({
      path: "/"
    });
  }, []), d(e, {});
}
const to = `@import"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-2{right:-8px}.-top-2{top:-8px}.bottom-0{bottom:0}.bottom-10{bottom:40px}.bottom-14{bottom:56px}.bottom-4{bottom:16px}.bottom-6{bottom:24px}.bottom-\\[128px\\]{bottom:128px}.bottom-\\[72px\\]{bottom:72px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:16px}.right-0{right:0}.right-3{right:12px}.right-4{right:16px}.right-5{right:20px}.top-0{top:0}.top-1\\/2{top:50%}.top-4{top:16px}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-\\[2147483645\\]{z-index:2147483645}.z-\\[2147483646\\]{z-index:2147483646}.\\!my-0{margin-top:0!important;margin-bottom:0!important}.-mx-8{margin-left:-32px;margin-right:-32px}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:4px;margin-bottom:4px}.my-5{margin-top:20px;margin-bottom:20px}.my-6{margin-top:24px;margin-bottom:24px}.my-\\[2px\\]{margin-top:2px;margin-bottom:2px}.my-px{margin-top:1px;margin-bottom:1px}.\\!ml-0{margin-left:0!important}.\\!ml-auto{margin-left:auto!important}.-mb-3{margin-bottom:-12px}.-mt-2{margin-top:-8px}.-mt-5{margin-top:-20px}.mb-4{margin-bottom:16px}.mb-6{margin-bottom:24px}.mb-8{margin-bottom:32px}.ml-2{margin-left:8px}.ml-\\[105px\\]{margin-left:105px}.ml-auto{margin-left:auto}.mr-\\[6px\\]{margin-right:6px}.mt-2{margin-top:8px}.mt-4{margin-top:16px}.mt-6{margin-top:24px}.mt-8{margin-top:32px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-0{height:0px}.h-10{height:40px}.h-2{height:8px}.h-20{height:80px}.h-3{height:12px}.h-32{height:128px}.h-4{height:16px}.h-40{height:160px}.h-5{height:20px}.h-6{height:24px}.h-7{height:28px}.h-8{height:32px}.h-9{height:36px}.h-\\[10px\\]{height:10px}.h-\\[18px\\]{height:18px}.h-\\[1px\\]{height:1px}.h-\\[26px\\]{height:26px}.h-\\[6px\\]{height:6px}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-36{max-height:144px}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.w-1\\/2{width:50%}.w-10{width:40px}.w-2{width:8px}.w-3{width:12px}.w-4{width:16px}.w-5{width:20px}.w-6{width:24px}.w-7{width:28px}.w-8{width:32px}.w-9{width:36px}.w-\\[100px\\]{width:100px}.w-\\[25px\\]{width:25px}.w-\\[37\\.5px\\]{width:37.5px}.w-\\[48px\\]{width:48px}.w-\\[93px\\]{width:93px}.w-\\[calc\\(100\\%_\\+_64px\\)\\]{width:calc(100% + 64px)}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.min-w-0{min-width:0px}.max-w-\\[220px\\]{max-width:220px}.max-w-full{max-width:100%}.max-w-lg{max-width:512px}.max-w-sm{max-width:384px}.flex-none{flex:none}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[20\\%\\]{--tw-translate-x: -20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-px{--tw-translate-x: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/3{--tw-translate-y: -33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/3{--tw-translate-x: 33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-px{--tw-translate-x: 1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-125{--tw-scale-x: 1.25;--tw-scale-y: 1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-center{scroll-snap-align:center}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:4px}.gap-2{gap:8px}.gap-3{gap:12px}.gap-4{gap:16px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(8px * var(--tw-space-x-reverse));margin-left:calc(8px * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(8px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(8px * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(12px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(12px * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(16px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(16px * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(20px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(20px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-nowrap{text-wrap:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-xl{border-radius:12px}.rounded-b-lg{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.rounded-t-3xl{border-top-left-radius:24px;border-top-right-radius:24px}.rounded-t-xl{border-top-left-radius:12px;border-top-right-radius:12px}.border{border-width:1px}.border-b-0{border-bottom-width:0px}.border-amber-500{--tw-border-opacity: 1;border-color:rgb(245 158 11 / var(--tw-border-opacity))}.border-emerald-500{--tw-border-opacity: 1;border-color:rgb(16 185 129 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-gray-950{--tw-border-opacity: 1;border-color:rgb(3 7 18 / var(--tw-border-opacity))}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity))}.bg-amber-500{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-black\\/40{background-color:#0006}.bg-emerald-50{--tw-bg-opacity: 1;background-color:rgb(236 253 245 / var(--tw-bg-opacity))}.bg-emerald-500{--tw-bg-opacity: 1;background-color:rgb(16 185 129 / var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-400\\/50{background-color:#9ca3af80}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-950{--tw-bg-opacity: 1;background-color:rgb(3 7 18 / var(--tw-bg-opacity))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/75{background-color:#ffffffbf}.p-0{padding:0}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.px-4{padding-left:16px;padding-right:16px}.px-8{padding-left:32px;padding-right:32px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.\\!pr-8{padding-right:32px!important}.pl-1{padding-left:4px}.pl-3{padding-left:12px}.pr-3{padding-right:12px}.pr-5{padding-right:20px}.pr-6{padding-right:24px}.pt-1{padding-top:4px}.pt-4{padding-top:16px}.text-center{text-align:center}.text-start{text-align:start}.font-nunito{font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-base{font-size:16px;line-height:24px}.text-lg{font-size:18px;line-height:28px}.text-sm{font-size:14px;line-height:20px}.text-xl{font-size:20px;line-height:28px}.text-xs{font-size:12px;line-height:16px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-\\[18px\\]{line-height:18px}.leading-\\[22px\\]{line-height:22px}.leading-tight{line-height:1.25}.text-amber-500{--tw-text-opacity: 1;color:rgb(245 158 11 / var(--tw-text-opacity))}.text-amber-950{--tw-text-opacity: 1;color:rgb(69 26 3 / var(--tw-text-opacity))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-emerald-500{--tw-text-opacity: 1;color:rgb(16 185 129 / var(--tw-text-opacity))}.text-emerald-950{--tw-text-opacity: 1;color:rgb(2 44 34 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-950{--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-950{--tw-text-opacity: 1;color:rgb(69 10 10 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-30{opacity:.3}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_-2px_10px_0px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\,0px_0px_0px_1px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\]{--tw-shadow: 0px -2px 10px 0px rgba(0,0,0,.04),0px 0px 0px 1px rgba(0,0,0,.06);--tw-shadow-colored: 0px -2px 10px 0px var(--tw-shadow-color), 0px 0px 0px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.bike-matrix-container{width:100%}@media (min-width: 640px){.bike-matrix-container{max-width:640px}}@media (min-width: 768px){.bike-matrix-container{max-width:768px}}@media (min-width: 1024px){.bike-matrix-container{max-width:1024px}}@media (min-width: 1280px){.bike-matrix-container{max-width:1280px}}@media (min-width: 1536px){.bike-matrix-container{max-width:1536px}}:host .overlay{opacity:0;visibility:hidden}:host(.active) .overlay{opacity:1;visibility:visible}@media (min-width: 640px){:host .modal{opacity:0;transform:scale(.9);visibility:hidden}:host(.active) .modal{opacity:1;transform:scale(1);visibility:visible}}@media not all and (min-width: 640px){:host .modal{transform:translateY(100%);visibility:hidden}:host(.active) .modal{transform:translateY(0);visibility:visible}}:root,:host{all:initial!important;font-size:16px!important;width:100%}input,select,button{outline:2px solid transparent;outline-offset:2px}h1,h2,h3,h4,h5,h6,label,button{margin-top:0;margin-bottom:0;font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h1,h2,h3,h4,h5,h6{font-weight:700;--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}h1,h2,h3,h4,h5,h6,label,button,p,a,div{font-family:Nunito,sans-serif}select{appearance:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}select::-ms-expand{display:none}.loader{border-radius:100%;border-top:4px solid rgba(3,7,18,.2);border-right:4px solid rgba(3,7,18,.2);border-bottom:4px solid rgba(3,7,18,.2);border-left:4px solid rgb(3,7,18)}*::-webkit-scrollbar{height:12px;width:12px}*::-webkit-scrollbar-track{border-radius:12px;margin-block:8px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:active{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb{border-radius:8px;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb:hover{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}@media not all and (min-width: 640px){*::-webkit-scrollbar{display:none}.modal-content{-ms-overflow-style:none;scrollbar-width:none}}@media only screen and (max-width: 450px){.compatibility-label-container .status{padding:7px 2px}}.placeholder\\:text-gray-700::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.placeholder\\:text-gray-700::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-inset-x-px:after{content:var(--tw-content);left:-1px;right:-1px}.after\\:-top-6:after{content:var(--tw-content);top:-24px}.after\\:bottom-0:after{content:var(--tw-content);bottom:0}.after\\:bg-gradient-to-t:after{content:var(--tw-content);background-image:linear-gradient(to top,var(--tw-gradient-stops))}.after\\:from-white:after{content:var(--tw-content);--tw-gradient-from: #fff var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:to-transparent:after{content:var(--tw-content);--tw-gradient-to: transparent var(--tw-gradient-to-position)}.disabled\\:border-gray-200:disabled{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.disabled\\:bg-gray-100:disabled{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.disabled\\:text-gray-400:disabled{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.group:disabled .group-disabled\\:border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.group:disabled .group-disabled\\:bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.group:disabled .group-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.peer:disabled~.peer-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media not all and (min-width: 640px){.max-sm\\:absolute{position:absolute}.max-sm\\:inset-0{top:0;right:0;bottom:0;left:0}.max-sm\\:h-\\[89vh\\]{height:89vh}.max-sm\\:max-h-\\[96\\%\\]{max-height:96%}.max-sm\\:flex-1{flex:1 1 0%}.max-sm\\:flex-none{flex:none}.max-sm\\:grow{flex-grow:1}}@media (max-width: 426px){.max-\\[426px\\]\\:w-\\[21px\\]{width:21px}.max-\\[426px\\]\\:w-\\[38px\\]{width:38px}.max-\\[426px\\]\\:text-xs{font-size:12px;line-height:16px}}@media (min-width: 640px){.sm\\:mt-8{margin-top:32px}.sm\\:hidden{display:none}.sm\\:h-full{height:100%}.sm\\:max-h-\\[90\\%\\]{max-height:90%}.sm\\:max-w-\\[640px\\]{max-width:640px}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:justify-center{justify-content:center}.sm\\:rounded-xl{border-radius:12px}.sm\\:px-2{padding-left:8px;padding-right:8px}.sm\\:px-6{padding-left:24px;padding-right:24px}.sm\\:duration-200{transition-duration:.2s}}.\\[\\&\\>path\\]\\:stroke-\\[2px\\]>path{stroke-width:2px}.\\[\\&\\>span\\]\\:font-normal>span{font-weight:400}.\\[\\&\\>span\\]\\:text-gray-500>span{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}
`;
function tp() {
  return I(() => {
    const i = document.createElement("link");
    i.type = "text/css", i.rel = "stylesheet", i.href = "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap", document.head.appendChild(i);
  }, []), d(O, {
    children: [d("style", {
      type: "text/css",
      children: to
    }), d(Zu, {
      children: [d("div", {
        onClick: Qt,
        style: {
          right: "-36px",
          top: "-24px"
        },
        class: "w-7 h-7 z-10 flex items-center justify-center absolute bg-white text-gray-800 rounded-full cursor-pointer",
        children: d(Tr, {
          class: "h-3 w-3"
        })
      }), d(rc, {
        children: d(dc, {
          children: d(ep, {})
        })
      })]
    })]
  });
}
const rp = (i) => /* @__PURE__ */ P("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 500, zoomAndPan: "magnify", viewBox: "0 0 375 374.999991", height: 500, preserveAspectRatio: "xMidYMid meet", ...i }, /* @__PURE__ */ P("path", { fill: "#000000", d: "M 151.4375 131.65625 L 210.511719 259.050781 C 210.511719 252.984375 210.105469 242.875 210.105469 230.335938 L 197.160156 117.5 C 168.835938 117.90625 151.4375 131.65625 151.4375 131.65625 Z M 225.484375 117.097656 C 218.605469 116.691406 212.128906 116.691406 206.464844 117.097656 L 212.941406 181.804688 C 214.960938 160.773438 219.007812 138.125 225.484375 117.097656 Z M 80.222656 227.101562 C 90.746094 230.335938 101.265625 233.976562 113 238.425781 C 113 238.425781 146.988281 255.816406 173.285156 266.734375 L 104.097656 179.78125 C 93.980469 194.746094 86.292969 211.328125 80.222656 227.101562 Z M 35.714844 287.363281 C 37.738281 276.441406 40.167969 265.117188 43.808594 254.601562 C 34.90625 252.984375 26.003906 251.773438 17.507812 250.960938 C 21.957031 263.90625 28.433594 276.039062 35.714844 287.363281 Z M 195.945312 276.039062 C 195.945312 276.039062 204.441406 278.867188 208.488281 274.417969 L 142.535156 138.125 C 131.207031 146.621094 121.089844 156.324219 112.1875 167.648438 L 191.898438 274.417969 C 193.519531 275.230469 194.730469 275.632812 195.945312 276.039062 Z M 365.480469 146.214844 C 359.816406 122.351562 349.296875 100.109375 335.539062 81.101562 C 343.632812 101.726562 352.128906 124.375 358.199219 140.148438 C 360.625 141.765625 363.457031 144.191406 365.480469 146.214844 Z M 356.175781 170.886719 C 339.179688 157.539062 322.996094 147.023438 307.214844 138.933594 L 244.90625 157.539062 L 232.363281 189.085938 C 230.339844 208.902344 228.71875 233.976562 230.339844 254.601562 C 230.339844 254.601562 233.980469 294.640625 219.414062 299.496094 C 219.414062 299.496094 203.632812 314.863281 163.574219 295.855469 C 163.574219 295.855469 121.898438 274.015625 70.109375 260.265625 C 62.015625 291 59.992188 314.457031 59.992188 316.480469 C 92.363281 349.644531 138.085938 369.867188 188.257812 369.867188 C 288.605469 369.867188 370.335938 288.171875 370.335938 187.871094 C 370.335938 185.847656 370.335938 183.828125 370.335938 181.804688 C 363.054688 183.019531 356.175781 170.886719 356.175781 170.886719 Z M 233.980469 95.257812 C 237.621094 86.761719 242.476562 78.675781 247.332031 71.394531 C 247.332031 71.394531 261.089844 49.960938 281.726562 31.761719 C 254.617188 15.582031 222.246094 5.875 188.257812 5.875 C 87.507812 5.875 6.179688 87.570312 6.179688 187.871094 C 6.179688 197.578125 6.988281 206.476562 8.203125 215.371094 C 22.363281 215.777344 38.144531 217.394531 55.542969 220.628906 C 66.0625 195.152344 75.773438 177.761719 75.773438 177.761719 C 75.773438 177.761719 124.328125 87.976562 233.980469 95.257812 Z M 236.8125 147.429688 L 240.453125 146.214844 L 250.972656 120.332031 C 248.546875 119.925781 246.925781 119.523438 244.5 119.117188 C 241.261719 127.609375 238.429688 137.316406 236.8125 147.429688 Z M 259.066406 121.949219 L 250.164062 143.789062 L 292.648438 132.867188 C 281.320312 128.015625 269.992188 124.375 259.066406 121.949219 Z M 272.015625 76.25 C 266.347656 82.71875 260.683594 90 255.425781 98.085938 C 275.65625 101.726562 293.054688 106.582031 308.027344 112.242188 Z M 340.800781 128.015625 L 314.902344 57.238281 C 311.261719 53.601562 307.621094 50.363281 303.980469 47.128906 C 295.886719 52.792969 287.390625 59.667969 278.894531 68.160156 L 323.804688 119.117188 C 330.28125 122.351562 336.347656 125.589844 340.800781 128.015625 Z M 340.800781 128.015625 ", fillOpacity: 1, fillRule: "nonzero" }));
function ip({
  "data-sku": i
}) {
  var m;
  const e = window.BikeMatrix, t = e.getConfig(), [r, a] = q({}), [o, n] = q(!1), [s, l] = q({
    compatible: "",
    warning: ""
  }), {
    t: u
  } = se(), [c, p] = q(!1), h = i || t.sku, f = ut(() => Ve.value || c, [Ve.value, c]), b = !!e.getActiveSubscription(), g = () => {
    var _, y, v;
    if (p(!0), l({
      compatible: "",
      warning: ""
    }), n(!1), t.logLevel === "verbose" && (console.log("ProductResult updateCompatibility config: " + JSON.stringify(t)), console.log("ProductResult updateCompatibility BikeSignal.value: " + JSON.stringify(Y.value))), Y.value) {
      for (let w = 0; w < t.productCollections.length; w++)
        if ((_ = Y.value) != null && _.compatibleCollections.find((x) => x.handle === t.productCollections[w])) {
          n(!0);
          break;
        }
    } else
      for (let w = 0; w < t.productCollections.length; w++)
        if (t.collections.map((x) => x.handle).includes(t.productCollections[w])) {
          n(!0);
          break;
        }
    if (Y.value) {
      if (h == "") {
        a({
          type: "unavailable",
          ...vr.unavailable
        }), p(!1);
        return;
      }
      var k = ((y = zr()) == null ? void 0 : y.language) || "en-GB";
      new Oe(t.apiUrl, t.apiKey, t.isShopify).checkSkuCompatibility((v = Y.value) == null ? void 0 : v.key, h, k).then((x) => {
        if (p(!1), !x) {
          a({
            type: "unavailable",
            ...vr.unavailable
          });
          return;
        }
        const D = (x == null ? void 0 : x.compatible) === null ? "unavailable" : x.warning ? "warning" : x != null && x.compatible ? "compatible" : "incompatible";
        l({
          warning: x.warningMessage,
          compatible: x.compatibilityMessage
        }), a({
          type: D,
          ...vr[D]
        });
      });
    } else
      p(!1), a({
        type: "check",
        ...vr.check
      });
  };
  return I(() => {
    g();
  }, [Y.value, h]), I(() => (document.addEventListener("RefreshCompatibility", g), () => {
    document.removeEventListener("RefreshCompatibility", g);
  }), []), !b || !f && !(r != null && r.type) || !o ? d(O, {}) : d(O, {
    children: [d("style", {
      type: "text/css",
      children: to
    }), d("div", {
      class: "flex flex-col relative w-full mx-auto",
      children: [d("div", {
        // todo: check if there's any state that we don't want it to toggle and then remove the check
        onClick: (k) => {
          k.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
            bubbles: !0,
            composed: !0
          }));
        },
        class: K("rounded-lg relative z-20 border overflow-hidden w-full flex cursor-pointer", f ? "bg-gray-100 border-gray-300 text-gray-950" : {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          check: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[r.type]),
        children: f ? d("span", {
          class: "loader self-center animate-spin justify-self-center justify-center w-9 my-5 mx-auto h-9",
          style: {
            borderWidth: "6px"
          }
        }) : d(O, {
          children: [d("div", {
            class: "relative z-10 h-auto items-center justify-center flex",
            children: [d(Qa, {
              class: K("self-start h-full w-[93px]", {
                unavailable: "text-gray-950",
                check: "text-gray-950",
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-500"
              }[r.type])
            }), d(Xa, {
              class: "h-[26px] absolute -translate-x-1/4"
            })]
          }), d("div", {
            class: "flex flex-col pl-3 pr-6 py-[6px] min-w-0",
            children: [d("p", {
              class: "text-lg font-semibold",
              children: u(r == null ? void 0 : r.heading_code)
            }), d("p", {
              class: "flex w-full text-sm leading-[22px] font-normal",
              children: d("span", {
                class: "truncate",
                children: r != null && r.details_code ? u(r == null ? void 0 : r.details_code) : (m = Y.value) == null ? void 0 : m.name
              })
            })]
          })]
        })
      }), d("div", {
        class: "z-10 bg-gray-100 w-full -mt-2 pt-4 flex border justify-between flex-wrap gap-1 border-gray-300 rounded-b-lg p-3 py-2",
        children: [r.type !== "incompatible" && d("div", {
          class: "space-y-2 my-[2px]",
          children: [!!(s != null && s.compatible) && d("p", {
            class: "text-sm flex",
            children: [d(zi, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
            }), " ", s.compatible]
          }), !!s.warning && d("p", {
            class: "text-sm flex",
            children: [d(Ti, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
            }), " ", s.warning]
          })]
        }), d("a", {
          class: "flex text-xs self-end font-semibold items-center underline ml-auto",
          href: "https://bikematrix.io/landed-it",
          target: "_blank",
          children: [u("bikematrix_poweredby"), " ", d(rp, {
            class: "w-5 h-5 ml-2"
          })]
        })]
      }), !f && d(r.icon, {
        class: "absolute top-0 z-30 right-0 w-6 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  });
}
const ap = `.wrapper{position:relative}.bm_collection_result{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.4rem;position:relative;margin-left:auto;margin-right:auto;font-size:14px;text-align:left;height:100%;line-height:1.3em}.bm_collection_result_iconLabel{display:inline-block;position:relative}.bm_collection_result_link{text-align:right;font-weight:500;font-size:.6em;margin-top:1px;text-decoration:underline;color:#000}.bm_collection_result_link:visited{color:#000}.bm_collection_result p{display:inline;padding:1px;margin:0;color:#000}.bm_collection_result_icon{padding:0 .1rem 0 0;position:absolute;left:-24px;top:-.25rem}.bm-hidden{display:none}.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`, an = {
  unavailable: {
    icon: xa,
    heading: "",
    code: ""
  },
  compatible: {
    icon: zi,
    heading: "Compatible",
    code: "compatible"
  },
  warning: {
    icon: Ti,
    heading: "Compatible",
    code: "compatible"
  },
  incompatible: {
    icon: ul,
    heading: "Not Compatible",
    code: "not_compatible"
  }
};
function dl({
  "data-type": i
}) {
  var r;
  const e = an[i], {
    t
  } = se();
  return e ? d(O, {
    children: [d("style", {
      type: "text/css",
      children: to
    }), d("div", {
      class: "flex z-0 flex-col relative  w-full mx-auto compatibility-label-container max-w-[220px]",
      children: [d("div", {
        class: K("rounded-lg relative z-20 border overflow-hidden w-full flex", {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[i]),
        children: [d("div", {
          class: "relative z-10 h-auto items-center justify-center flex",
          children: [d(Qa, {
            class: K("self-start h-full w-[48px] max-[426px]:w-[38px]", {
              unavailable: "text-gray-950",
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-500"
            }[i])
          }), d(Xa, {
            class: "h-[18px] max-[426px]:w-[21px] w-[25px] absolute -translate-x-[20%]"
          })]
        }), d("div", {
          class: "status flex flex-col p-2 pl-1 w-full",
          children: d("p", {
            class: "max-[426px]:text-xs text-sm font-semibold p-0 leading-[18px] text-center",
            children: t((r = an[i]) == null ? void 0 : r.code)
          })
        })]
      }), d(e.icon, {
        class: "absolute top-0 z-30 right-0 w-4 h-4 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  }) : d(O, {});
}
const $t = {
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
const op = async (i, e, t) => {
  if (!t || !Wt.value) {
    Ke = {
      type: "unavailable",
      ...$t.unavailable
    };
    return;
  }
  let r = [];
  for (const s of t.split(",").filter((l) => !!l)) {
    console.log(s);
    const l = Wt.value.find((u) => u.sku === s.trim());
    r.push(l);
  }
  const a = r.some((s) => (s == null ? void 0 : s.compatible) === !0 && (s == null ? void 0 : s.warning) === !0), o = r.some((s) => (s == null ? void 0 : s.compatible) === !0), n = r.every((s) => (s == null ? void 0 : s.compatible) === null);
  a ? Ke = {
    type: "warning",
    ...$t.warning
  } : o ? Ke = {
    type: "compatible",
    ...$t.compatible
  } : n ? Ke = {
    type: "unavailable",
    ...$t.unavailable
  } : Ke = {
    type: "incompatible",
    ...$t.incompatible
  };
}, np = function(i, e, t, r, a, o, n) {
  var l;
  const s = window.BikeMatrix.getConfig();
  if (i || e) {
    if ((i && t || e && r) && s.productsCollections[o]) {
      for (let u = 0; u < s.productsCollections[o].length; u++)
        if (s.collections.map((c) => c.handle).includes(s.productsCollections[o][u]))
          return !0;
    }
  } else
    return a ? !1 : !!Y.value && ((l = Y.value.compatibleCollections) == null ? void 0 : l.find((c) => c.handle === n));
  return !1;
};
function sp({
  "data-product-id": i,
  "data-product-skus": e,
  "data-product-barcodes": t,
  "data-product-metafields": r
}) {
  const a = window.BikeMatrix, o = a.getConfig(), [n, s] = q(!1), l = !!a.getActiveSubscription();
  Ke = {
    type: "unavailable",
    ...$t.unavailable
  };
  const {
    currentCollectionHandle: u,
    isHomePage: c,
    isSearchPage: p,
    showSearchPageCollection: h,
    showHomePageCollection: f,
    logLevel: b,
    skuField: g
  } = o, m = !!o.pageType && o.pageType === "product", k = g === "barcode" ? t : g === "metafield" ? r : e || "";
  return b === "verbose" && (console.log("CollectionResult currentCollectionHandle: ", u), console.log("CollectionResult skuField: ", g), console.log("CollectionResult productId: ", i), console.log("CollectionResult skusToCheck: ", k), console.log("CollectionResult BikeSignal.value: " + JSON.stringify(Y.value))), Ve.value ? s(!0) : Y.value && np(c, p, f, h, m, i, u) ? op(Y.value.key, i, k).then(() => {
    s(!0);
  }) : s(!1), b === "verbose" && console.log("CollectionResult status: ", Ke), d(O, {
    children: l && n && d(O, {
      children: [d("style", {
        type: "text/css",
        children: ap
      }), d("div", {
        class: "bm_collection_result bm-wrapper",
        children: [d("div", {
          class: "lds-ring",
          id: "bm-loading-spinner",
          style: Ve.value ? "" : "display: none",
          children: [d("div", {}), d("div", {}), d("div", {}), d("div", {})]
        }), !Ve.value && (Ke == null ? void 0 : Ke.type) !== "unavailable" && d(dl, {
          "data-type": Ke.type
        })]
      })]
    })
  });
}
const lp = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.bm-compatible-products-wrapper{display:block;width:100%;border-top:.5px solid lightgrey;border-bottom:.5px solid lightgrey;margin-top:10px}.bm-compatible-products-title>div{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none;display:flex;align-items:center;justify-content:space-between;padding:8px 0}.bm-compatible-products-title>div>span{font-weight:700}.bm-compatible-products-title svg{height:24px;width:24px;transition:transform .3s linear}.bm-compatible-products-title div.active svg{transform:rotate(180deg)}.bm-compatible-products-list{width:100%;max-width:100%;display:none;overflow:hidden}.bm-compatible-products-list ul{display:grid;gap:20px;grid-template-columns:repeat(4,minmax(0,1fr));padding:0;list-style:none}@media only screen and (max-width: 1000px){.bm-compatible-products-list ul{grid-template-columns:repeat(3,minmax(0,1fr))}}@media only screen and (max-width: 600px){.bm-compatible-products-list ul{gap:10px;grid-template-columns:repeat(2,minmax(0,1fr))}}.bm-compatible-products-list ul li{width:100%;display:flex}.bm-compatible-product-wrapper{display:block;width:100%;border:1px solid lightgrey;padding:5px;display:flex;flex-flow:column;flex:1}.bm-compatible-product-image{display:block;width:100%;max-width:100%;line-height:1;padding-top:100%;position:relative;margin-bottom:5px;overflow:hidden}.bm-compatible-product-image a,.bm-compatible-product-image a:hover,.bm-compatible-product-image a:focus{display:block;width:100%;max-width:100%;outline:none;text-decoration:none;width:auto;height:auto;line-height:1;border:none;border-radius:0}.bm-compatible-product-image img{display:inline-block;vertical-align:top;width:100%;max-width:100%;height:auto;line-height:1;position:absolute;left:0;right:0;bottom:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;top:50%;transform:translateY(-50%)}.bm-compatible-product-title{text-align:center;margin:0 0 1em;display:flex;flex-flow:column;flex:1}.bm-compatible-product-title a,.bm-compatible-product-title a:hover,.bm-compatible-product-title a:focus{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none}.bm-compatible-product-price{text-align:center;margin:0 0 1em}.bm-compatible-product-price p{font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;color:rgb(var(--text-color));padding:0;margin:0}.bm-compatible-product-price p strong{font-size:1.2em}.bm-compatible-product-compatibility{text-align:center;margin:0 .25em 1em}@media only screen and (max-width: 450px){.bm-compatible-product-compatibility{margin:0 0 1em}}.bm_result_link{justify-content:center;text-align:right;text-decoration:underline;font-size:12px;padding:10px 0}.bm_result_link a{text-align:right;font-weight:700;margin-top:10px;color:#000}
`;
var ki = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
ki.exports;
(function(i, e) {
  (function(t) {
    var r = e, a = i && i.exports == r && i, o = typeof Oi == "object" && Oi;
    (o.global === o || o.window === o) && (t = o);
    var n = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, s = /[\x01-\x7F]/g, l = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, u = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, c = { "­": "shy", "‌": "zwnj", "‍": "zwj", "‎": "lrm", "⁣": "ic", "⁢": "it", "⁡": "af", "‏": "rlm", "​": "ZeroWidthSpace", "⁠": "NoBreak", "̑": "DownBreve", "⃛": "tdot", "⃜": "DotDot", "	": "Tab", "\n": "NewLine", " ": "puncsp", " ": "MediumSpace", " ": "thinsp", " ": "hairsp", " ": "emsp13", " ": "ensp", " ": "emsp14", " ": "emsp", " ": "numsp", " ": "nbsp", "  ": "ThickSpace", "‾": "oline", _: "lowbar", "‐": "dash", "–": "ndash", "—": "mdash", "―": "horbar", ",": "comma", ";": "semi", "⁏": "bsemi", ":": "colon", "⩴": "Colone", "!": "excl", "¡": "iexcl", "?": "quest", "¿": "iquest", ".": "period", "‥": "nldr", "…": "mldr", "·": "middot", "'": "apos", "‘": "lsquo", "’": "rsquo", "‚": "sbquo", "‹": "lsaquo", "›": "rsaquo", '"': "quot", "“": "ldquo", "”": "rdquo", "„": "bdquo", "«": "laquo", "»": "raquo", "(": "lpar", ")": "rpar", "[": "lsqb", "]": "rsqb", "{": "lcub", "}": "rcub", "⌈": "lceil", "⌉": "rceil", "⌊": "lfloor", "⌋": "rfloor", "⦅": "lopar", "⦆": "ropar", "⦋": "lbrke", "⦌": "rbrke", "⦍": "lbrkslu", "⦎": "rbrksld", "⦏": "lbrksld", "⦐": "rbrkslu", "⦑": "langd", "⦒": "rangd", "⦓": "lparlt", "⦔": "rpargt", "⦕": "gtlPar", "⦖": "ltrPar", "⟦": "lobrk", "⟧": "robrk", "⟨": "lang", "⟩": "rang", "⟪": "Lang", "⟫": "Rang", "⟬": "loang", "⟭": "roang", "❲": "lbbrk", "❳": "rbbrk", "‖": "Vert", "§": "sect", "¶": "para", "@": "commat", "*": "ast", "/": "sol", undefined: null, "&": "amp", "#": "num", "%": "percnt", "‰": "permil", "‱": "pertenk", "†": "dagger", "‡": "Dagger", "•": "bull", "⁃": "hybull", "′": "prime", "″": "Prime", "‴": "tprime", "⁗": "qprime", "‵": "bprime", "⁁": "caret", "`": "grave", "´": "acute", "˜": "tilde", "^": "Hat", "¯": "macr", "˘": "breve", "˙": "dot", "¨": "die", "˚": "ring", "˝": "dblac", "¸": "cedil", "˛": "ogon", "ˆ": "circ", "ˇ": "caron", "°": "deg", "©": "copy", "®": "reg", "℗": "copysr", "℘": "wp", "℞": "rx", "℧": "mho", "℩": "iiota", "←": "larr", "↚": "nlarr", "→": "rarr", "↛": "nrarr", "↑": "uarr", "↓": "darr", "↔": "harr", "↮": "nharr", "↕": "varr", "↖": "nwarr", "↗": "nearr", "↘": "searr", "↙": "swarr", "↝": "rarrw", "↝̸": "nrarrw", "↞": "Larr", "↟": "Uarr", "↠": "Rarr", "↡": "Darr", "↢": "larrtl", "↣": "rarrtl", "↤": "mapstoleft", "↥": "mapstoup", "↦": "map", "↧": "mapstodown", "↩": "larrhk", "↪": "rarrhk", "↫": "larrlp", "↬": "rarrlp", "↭": "harrw", "↰": "lsh", "↱": "rsh", "↲": "ldsh", "↳": "rdsh", "↵": "crarr", "↶": "cularr", "↷": "curarr", "↺": "olarr", "↻": "orarr", "↼": "lharu", "↽": "lhard", "↾": "uharr", "↿": "uharl", "⇀": "rharu", "⇁": "rhard", "⇂": "dharr", "⇃": "dharl", "⇄": "rlarr", "⇅": "udarr", "⇆": "lrarr", "⇇": "llarr", "⇈": "uuarr", "⇉": "rrarr", "⇊": "ddarr", "⇋": "lrhar", "⇌": "rlhar", "⇐": "lArr", "⇍": "nlArr", "⇑": "uArr", "⇒": "rArr", "⇏": "nrArr", "⇓": "dArr", "⇔": "iff", "⇎": "nhArr", "⇕": "vArr", "⇖": "nwArr", "⇗": "neArr", "⇘": "seArr", "⇙": "swArr", "⇚": "lAarr", "⇛": "rAarr", "⇝": "zigrarr", "⇤": "larrb", "⇥": "rarrb", "⇵": "duarr", "⇽": "loarr", "⇾": "roarr", "⇿": "hoarr", "∀": "forall", "∁": "comp", "∂": "part", "∂̸": "npart", "∃": "exist", "∄": "nexist", "∅": "empty", "∇": "Del", "∈": "in", "∉": "notin", "∋": "ni", "∌": "notni", "϶": "bepsi", "∏": "prod", "∐": "coprod", "∑": "sum", "+": "plus", "±": "pm", "÷": "div", "×": "times", "<": "lt", "≮": "nlt", "<⃒": "nvlt", "=": "equals", "≠": "ne", "=⃥": "bne", "⩵": "Equal", ">": "gt", "≯": "ngt", ">⃒": "nvgt", "¬": "not", "|": "vert", "¦": "brvbar", "−": "minus", "∓": "mp", "∔": "plusdo", "⁄": "frasl", "∖": "setmn", "∗": "lowast", "∘": "compfn", "√": "Sqrt", "∝": "prop", "∞": "infin", "∟": "angrt", "∠": "ang", "∠⃒": "nang", "∡": "angmsd", "∢": "angsph", "∣": "mid", "∤": "nmid", "∥": "par", "∦": "npar", "∧": "and", "∨": "or", "∩": "cap", "∩︀": "caps", "∪": "cup", "∪︀": "cups", "∫": "int", "∬": "Int", "∭": "tint", "⨌": "qint", "∮": "oint", "∯": "Conint", "∰": "Cconint", "∱": "cwint", "∲": "cwconint", "∳": "awconint", "∴": "there4", "∵": "becaus", "∶": "ratio", "∷": "Colon", "∸": "minusd", "∺": "mDDot", "∻": "homtht", "∼": "sim", "≁": "nsim", "∼⃒": "nvsim", "∽": "bsim", "∽̱": "race", "∾": "ac", "∾̳": "acE", "∿": "acd", "≀": "wr", "≂": "esim", "≂̸": "nesim", "≃": "sime", "≄": "nsime", "≅": "cong", "≇": "ncong", "≆": "simne", "≈": "ap", "≉": "nap", "≊": "ape", "≋": "apid", "≋̸": "napid", "≌": "bcong", "≍": "CupCap", "≭": "NotCupCap", "≍⃒": "nvap", "≎": "bump", "≎̸": "nbump", "≏": "bumpe", "≏̸": "nbumpe", "≐": "doteq", "≐̸": "nedot", "≑": "eDot", "≒": "efDot", "≓": "erDot", "≔": "colone", "≕": "ecolon", "≖": "ecir", "≗": "cire", "≙": "wedgeq", "≚": "veeeq", "≜": "trie", "≟": "equest", "≡": "equiv", "≢": "nequiv", "≡⃥": "bnequiv", "≤": "le", "≰": "nle", "≤⃒": "nvle", "≥": "ge", "≱": "nge", "≥⃒": "nvge", "≦": "lE", "≦̸": "nlE", "≧": "gE", "≧̸": "ngE", "≨︀": "lvnE", "≨": "lnE", "≩": "gnE", "≩︀": "gvnE", "≪": "ll", "≪̸": "nLtv", "≪⃒": "nLt", "≫": "gg", "≫̸": "nGtv", "≫⃒": "nGt", "≬": "twixt", "≲": "lsim", "≴": "nlsim", "≳": "gsim", "≵": "ngsim", "≶": "lg", "≸": "ntlg", "≷": "gl", "≹": "ntgl", "≺": "pr", "⊀": "npr", "≻": "sc", "⊁": "nsc", "≼": "prcue", "⋠": "nprcue", "≽": "sccue", "⋡": "nsccue", "≾": "prsim", "≿": "scsim", "≿̸": "NotSucceedsTilde", "⊂": "sub", "⊄": "nsub", "⊂⃒": "vnsub", "⊃": "sup", "⊅": "nsup", "⊃⃒": "vnsup", "⊆": "sube", "⊈": "nsube", "⊇": "supe", "⊉": "nsupe", "⊊︀": "vsubne", "⊊": "subne", "⊋︀": "vsupne", "⊋": "supne", "⊍": "cupdot", "⊎": "uplus", "⊏": "sqsub", "⊏̸": "NotSquareSubset", "⊐": "sqsup", "⊐̸": "NotSquareSuperset", "⊑": "sqsube", "⋢": "nsqsube", "⊒": "sqsupe", "⋣": "nsqsupe", "⊓": "sqcap", "⊓︀": "sqcaps", "⊔": "sqcup", "⊔︀": "sqcups", "⊕": "oplus", "⊖": "ominus", "⊗": "otimes", "⊘": "osol", "⊙": "odot", "⊚": "ocir", "⊛": "oast", "⊝": "odash", "⊞": "plusb", "⊟": "minusb", "⊠": "timesb", "⊡": "sdotb", "⊢": "vdash", "⊬": "nvdash", "⊣": "dashv", "⊤": "top", "⊥": "bot", "⊧": "models", "⊨": "vDash", "⊭": "nvDash", "⊩": "Vdash", "⊮": "nVdash", "⊪": "Vvdash", "⊫": "VDash", "⊯": "nVDash", "⊰": "prurel", "⊲": "vltri", "⋪": "nltri", "⊳": "vrtri", "⋫": "nrtri", "⊴": "ltrie", "⋬": "nltrie", "⊴⃒": "nvltrie", "⊵": "rtrie", "⋭": "nrtrie", "⊵⃒": "nvrtrie", "⊶": "origof", "⊷": "imof", "⊸": "mumap", "⊹": "hercon", "⊺": "intcal", "⊻": "veebar", "⊽": "barvee", "⊾": "angrtvb", "⊿": "lrtri", "⋀": "Wedge", "⋁": "Vee", "⋂": "xcap", "⋃": "xcup", "⋄": "diam", "⋅": "sdot", "⋆": "Star", "⋇": "divonx", "⋈": "bowtie", "⋉": "ltimes", "⋊": "rtimes", "⋋": "lthree", "⋌": "rthree", "⋍": "bsime", "⋎": "cuvee", "⋏": "cuwed", "⋐": "Sub", "⋑": "Sup", "⋒": "Cap", "⋓": "Cup", "⋔": "fork", "⋕": "epar", "⋖": "ltdot", "⋗": "gtdot", "⋘": "Ll", "⋘̸": "nLl", "⋙": "Gg", "⋙̸": "nGg", "⋚︀": "lesg", "⋚": "leg", "⋛": "gel", "⋛︀": "gesl", "⋞": "cuepr", "⋟": "cuesc", "⋦": "lnsim", "⋧": "gnsim", "⋨": "prnsim", "⋩": "scnsim", "⋮": "vellip", "⋯": "ctdot", "⋰": "utdot", "⋱": "dtdot", "⋲": "disin", "⋳": "isinsv", "⋴": "isins", "⋵": "isindot", "⋵̸": "notindot", "⋶": "notinvc", "⋷": "notinvb", "⋹": "isinE", "⋹̸": "notinE", "⋺": "nisd", "⋻": "xnis", "⋼": "nis", "⋽": "notnivc", "⋾": "notnivb", "⌅": "barwed", "⌆": "Barwed", "⌌": "drcrop", "⌍": "dlcrop", "⌎": "urcrop", "⌏": "ulcrop", "⌐": "bnot", "⌒": "profline", "⌓": "profsurf", "⌕": "telrec", "⌖": "target", "⌜": "ulcorn", "⌝": "urcorn", "⌞": "dlcorn", "⌟": "drcorn", "⌢": "frown", "⌣": "smile", "⌭": "cylcty", "⌮": "profalar", "⌶": "topbot", "⌽": "ovbar", "⌿": "solbar", "⍼": "angzarr", "⎰": "lmoust", "⎱": "rmoust", "⎴": "tbrk", "⎵": "bbrk", "⎶": "bbrktbrk", "⏜": "OverParenthesis", "⏝": "UnderParenthesis", "⏞": "OverBrace", "⏟": "UnderBrace", "⏢": "trpezium", "⏧": "elinters", "␣": "blank", "─": "boxh", "│": "boxv", "┌": "boxdr", "┐": "boxdl", "└": "boxur", "┘": "boxul", "├": "boxvr", "┤": "boxvl", "┬": "boxhd", "┴": "boxhu", "┼": "boxvh", "═": "boxH", "║": "boxV", "╒": "boxdR", "╓": "boxDr", "╔": "boxDR", "╕": "boxdL", "╖": "boxDl", "╗": "boxDL", "╘": "boxuR", "╙": "boxUr", "╚": "boxUR", "╛": "boxuL", "╜": "boxUl", "╝": "boxUL", "╞": "boxvR", "╟": "boxVr", "╠": "boxVR", "╡": "boxvL", "╢": "boxVl", "╣": "boxVL", "╤": "boxHd", "╥": "boxhD", "╦": "boxHD", "╧": "boxHu", "╨": "boxhU", "╩": "boxHU", "╪": "boxvH", "╫": "boxVh", "╬": "boxVH", "▀": "uhblk", "▄": "lhblk", "█": "block", "░": "blk14", "▒": "blk12", "▓": "blk34", "□": "squ", "▪": "squf", "▫": "EmptyVerySmallSquare", "▭": "rect", "▮": "marker", "▱": "fltns", "△": "xutri", "▴": "utrif", "▵": "utri", "▸": "rtrif", "▹": "rtri", "▽": "xdtri", "▾": "dtrif", "▿": "dtri", "◂": "ltrif", "◃": "ltri", "◊": "loz", "○": "cir", "◬": "tridot", "◯": "xcirc", "◸": "ultri", "◹": "urtri", "◺": "lltri", "◻": "EmptySmallSquare", "◼": "FilledSmallSquare", "★": "starf", "☆": "star", "☎": "phone", "♀": "female", "♂": "male", "♠": "spades", "♣": "clubs", "♥": "hearts", "♦": "diams", "♪": "sung", "✓": "check", "✗": "cross", "✠": "malt", "✶": "sext", "❘": "VerticalSeparator", "⟈": "bsolhsub", "⟉": "suphsol", "⟵": "xlarr", "⟶": "xrarr", "⟷": "xharr", "⟸": "xlArr", "⟹": "xrArr", "⟺": "xhArr", "⟼": "xmap", "⟿": "dzigrarr", "⤂": "nvlArr", "⤃": "nvrArr", "⤄": "nvHarr", "⤅": "Map", "⤌": "lbarr", "⤍": "rbarr", "⤎": "lBarr", "⤏": "rBarr", "⤐": "RBarr", "⤑": "DDotrahd", "⤒": "UpArrowBar", "⤓": "DownArrowBar", "⤖": "Rarrtl", "⤙": "latail", "⤚": "ratail", "⤛": "lAtail", "⤜": "rAtail", "⤝": "larrfs", "⤞": "rarrfs", "⤟": "larrbfs", "⤠": "rarrbfs", "⤣": "nwarhk", "⤤": "nearhk", "⤥": "searhk", "⤦": "swarhk", "⤧": "nwnear", "⤨": "toea", "⤩": "tosa", "⤪": "swnwar", "⤳": "rarrc", "⤳̸": "nrarrc", "⤵": "cudarrr", "⤶": "ldca", "⤷": "rdca", "⤸": "cudarrl", "⤹": "larrpl", "⤼": "curarrm", "⤽": "cularrp", "⥅": "rarrpl", "⥈": "harrcir", "⥉": "Uarrocir", "⥊": "lurdshar", "⥋": "ldrushar", "⥎": "LeftRightVector", "⥏": "RightUpDownVector", "⥐": "DownLeftRightVector", "⥑": "LeftUpDownVector", "⥒": "LeftVectorBar", "⥓": "RightVectorBar", "⥔": "RightUpVectorBar", "⥕": "RightDownVectorBar", "⥖": "DownLeftVectorBar", "⥗": "DownRightVectorBar", "⥘": "LeftUpVectorBar", "⥙": "LeftDownVectorBar", "⥚": "LeftTeeVector", "⥛": "RightTeeVector", "⥜": "RightUpTeeVector", "⥝": "RightDownTeeVector", "⥞": "DownLeftTeeVector", "⥟": "DownRightTeeVector", "⥠": "LeftUpTeeVector", "⥡": "LeftDownTeeVector", "⥢": "lHar", "⥣": "uHar", "⥤": "rHar", "⥥": "dHar", "⥦": "luruhar", "⥧": "ldrdhar", "⥨": "ruluhar", "⥩": "rdldhar", "⥪": "lharul", "⥫": "llhard", "⥬": "rharul", "⥭": "lrhard", "⥮": "udhar", "⥯": "duhar", "⥰": "RoundImplies", "⥱": "erarr", "⥲": "simrarr", "⥳": "larrsim", "⥴": "rarrsim", "⥵": "rarrap", "⥶": "ltlarr", "⥸": "gtrarr", "⥹": "subrarr", "⥻": "suplarr", "⥼": "lfisht", "⥽": "rfisht", "⥾": "ufisht", "⥿": "dfisht", "⦚": "vzigzag", "⦜": "vangrt", "⦝": "angrtvbd", "⦤": "ange", "⦥": "range", "⦦": "dwangle", "⦧": "uwangle", "⦨": "angmsdaa", "⦩": "angmsdab", "⦪": "angmsdac", "⦫": "angmsdad", "⦬": "angmsdae", "⦭": "angmsdaf", "⦮": "angmsdag", "⦯": "angmsdah", "⦰": "bemptyv", "⦱": "demptyv", "⦲": "cemptyv", "⦳": "raemptyv", "⦴": "laemptyv", "⦵": "ohbar", "⦶": "omid", "⦷": "opar", "⦹": "operp", "⦻": "olcross", "⦼": "odsold", "⦾": "olcir", "⦿": "ofcir", "⧀": "olt", "⧁": "ogt", "⧂": "cirscir", "⧃": "cirE", "⧄": "solb", "⧅": "bsolb", "⧉": "boxbox", "⧍": "trisb", "⧎": "rtriltri", "⧏": "LeftTriangleBar", "⧏̸": "NotLeftTriangleBar", "⧐": "RightTriangleBar", "⧐̸": "NotRightTriangleBar", "⧜": "iinfin", "⧝": "infintie", "⧞": "nvinfin", "⧣": "eparsl", "⧤": "smeparsl", "⧥": "eqvparsl", "⧫": "lozf", "⧴": "RuleDelayed", "⧶": "dsol", "⨀": "xodot", "⨁": "xoplus", "⨂": "xotime", "⨄": "xuplus", "⨆": "xsqcup", "⨍": "fpartint", "⨐": "cirfnint", "⨑": "awint", "⨒": "rppolint", "⨓": "scpolint", "⨔": "npolint", "⨕": "pointint", "⨖": "quatint", "⨗": "intlarhk", "⨢": "pluscir", "⨣": "plusacir", "⨤": "simplus", "⨥": "plusdu", "⨦": "plussim", "⨧": "plustwo", "⨩": "mcomma", "⨪": "minusdu", "⨭": "loplus", "⨮": "roplus", "⨯": "Cross", "⨰": "timesd", "⨱": "timesbar", "⨳": "smashp", "⨴": "lotimes", "⨵": "rotimes", "⨶": "otimesas", "⨷": "Otimes", "⨸": "odiv", "⨹": "triplus", "⨺": "triminus", "⨻": "tritime", "⨼": "iprod", "⨿": "amalg", "⩀": "capdot", "⩂": "ncup", "⩃": "ncap", "⩄": "capand", "⩅": "cupor", "⩆": "cupcap", "⩇": "capcup", "⩈": "cupbrcap", "⩉": "capbrcup", "⩊": "cupcup", "⩋": "capcap", "⩌": "ccups", "⩍": "ccaps", "⩐": "ccupssm", "⩓": "And", "⩔": "Or", "⩕": "andand", "⩖": "oror", "⩗": "orslope", "⩘": "andslope", "⩚": "andv", "⩛": "orv", "⩜": "andd", "⩝": "ord", "⩟": "wedbar", "⩦": "sdote", "⩪": "simdot", "⩭": "congdot", "⩭̸": "ncongdot", "⩮": "easter", "⩯": "apacir", "⩰": "apE", "⩰̸": "napE", "⩱": "eplus", "⩲": "pluse", "⩳": "Esim", "⩷": "eDDot", "⩸": "equivDD", "⩹": "ltcir", "⩺": "gtcir", "⩻": "ltquest", "⩼": "gtquest", "⩽": "les", "⩽̸": "nles", "⩾": "ges", "⩾̸": "nges", "⩿": "lesdot", "⪀": "gesdot", "⪁": "lesdoto", "⪂": "gesdoto", "⪃": "lesdotor", "⪄": "gesdotol", "⪅": "lap", "⪆": "gap", "⪇": "lne", "⪈": "gne", "⪉": "lnap", "⪊": "gnap", "⪋": "lEg", "⪌": "gEl", "⪍": "lsime", "⪎": "gsime", "⪏": "lsimg", "⪐": "gsiml", "⪑": "lgE", "⪒": "glE", "⪓": "lesges", "⪔": "gesles", "⪕": "els", "⪖": "egs", "⪗": "elsdot", "⪘": "egsdot", "⪙": "el", "⪚": "eg", "⪝": "siml", "⪞": "simg", "⪟": "simlE", "⪠": "simgE", "⪡": "LessLess", "⪡̸": "NotNestedLessLess", "⪢": "GreaterGreater", "⪢̸": "NotNestedGreaterGreater", "⪤": "glj", "⪥": "gla", "⪦": "ltcc", "⪧": "gtcc", "⪨": "lescc", "⪩": "gescc", "⪪": "smt", "⪫": "lat", "⪬": "smte", "⪬︀": "smtes", "⪭": "late", "⪭︀": "lates", "⪮": "bumpE", "⪯": "pre", "⪯̸": "npre", "⪰": "sce", "⪰̸": "nsce", "⪳": "prE", "⪴": "scE", "⪵": "prnE", "⪶": "scnE", "⪷": "prap", "⪸": "scap", "⪹": "prnap", "⪺": "scnap", "⪻": "Pr", "⪼": "Sc", "⪽": "subdot", "⪾": "supdot", "⪿": "subplus", "⫀": "supplus", "⫁": "submult", "⫂": "supmult", "⫃": "subedot", "⫄": "supedot", "⫅": "subE", "⫅̸": "nsubE", "⫆": "supE", "⫆̸": "nsupE", "⫇": "subsim", "⫈": "supsim", "⫋︀": "vsubnE", "⫋": "subnE", "⫌︀": "vsupnE", "⫌": "supnE", "⫏": "csub", "⫐": "csup", "⫑": "csube", "⫒": "csupe", "⫓": "subsup", "⫔": "supsub", "⫕": "subsub", "⫖": "supsup", "⫗": "suphsub", "⫘": "supdsub", "⫙": "forkv", "⫚": "topfork", "⫛": "mlcp", "⫤": "Dashv", "⫦": "Vdashl", "⫧": "Barv", "⫨": "vBar", "⫩": "vBarv", "⫫": "Vbar", "⫬": "Not", "⫭": "bNot", "⫮": "rnmid", "⫯": "cirmid", "⫰": "midcir", "⫱": "topcir", "⫲": "nhpar", "⫳": "parsim", "⫽": "parsl", "⫽⃥": "nparsl", "♭": "flat", "♮": "natur", "♯": "sharp", "¤": "curren", "¢": "cent", $: "dollar", "£": "pound", "¥": "yen", "€": "euro", "¹": "sup1", "½": "half", "⅓": "frac13", "¼": "frac14", "⅕": "frac15", "⅙": "frac16", "⅛": "frac18", "²": "sup2", "⅔": "frac23", "⅖": "frac25", "³": "sup3", "¾": "frac34", "⅗": "frac35", "⅜": "frac38", "⅘": "frac45", "⅚": "frac56", "⅝": "frac58", "⅞": "frac78", "𝒶": "ascr", "𝕒": "aopf", "𝔞": "afr", "𝔸": "Aopf", "𝔄": "Afr", "𝒜": "Ascr", ª: "ordf", á: "aacute", Á: "Aacute", à: "agrave", À: "Agrave", ă: "abreve", Ă: "Abreve", â: "acirc", Â: "Acirc", å: "aring", Å: "angst", ä: "auml", Ä: "Auml", ã: "atilde", Ã: "Atilde", ą: "aogon", Ą: "Aogon", ā: "amacr", Ā: "Amacr", æ: "aelig", Æ: "AElig", "𝒷": "bscr", "𝕓": "bopf", "𝔟": "bfr", "𝔹": "Bopf", ℬ: "Bscr", "𝔅": "Bfr", "𝔠": "cfr", "𝒸": "cscr", "𝕔": "copf", ℭ: "Cfr", "𝒞": "Cscr", ℂ: "Copf", ć: "cacute", Ć: "Cacute", ĉ: "ccirc", Ĉ: "Ccirc", č: "ccaron", Č: "Ccaron", ċ: "cdot", Ċ: "Cdot", ç: "ccedil", Ç: "Ccedil", "℅": "incare", "𝔡": "dfr", "ⅆ": "dd", "𝕕": "dopf", "𝒹": "dscr", "𝒟": "Dscr", "𝔇": "Dfr", "ⅅ": "DD", "𝔻": "Dopf", ď: "dcaron", Ď: "Dcaron", đ: "dstrok", Đ: "Dstrok", ð: "eth", Ð: "ETH", "ⅇ": "ee", ℯ: "escr", "𝔢": "efr", "𝕖": "eopf", ℰ: "Escr", "𝔈": "Efr", "𝔼": "Eopf", é: "eacute", É: "Eacute", è: "egrave", È: "Egrave", ê: "ecirc", Ê: "Ecirc", ě: "ecaron", Ě: "Ecaron", ë: "euml", Ë: "Euml", ė: "edot", Ė: "Edot", ę: "eogon", Ę: "Eogon", ē: "emacr", Ē: "Emacr", "𝔣": "ffr", "𝕗": "fopf", "𝒻": "fscr", "𝔉": "Ffr", "𝔽": "Fopf", ℱ: "Fscr", ﬀ: "fflig", ﬃ: "ffilig", ﬄ: "ffllig", ﬁ: "filig", fj: "fjlig", ﬂ: "fllig", ƒ: "fnof", ℊ: "gscr", "𝕘": "gopf", "𝔤": "gfr", "𝒢": "Gscr", "𝔾": "Gopf", "𝔊": "Gfr", ǵ: "gacute", ğ: "gbreve", Ğ: "Gbreve", ĝ: "gcirc", Ĝ: "Gcirc", ġ: "gdot", Ġ: "Gdot", Ģ: "Gcedil", "𝔥": "hfr", ℎ: "planckh", "𝒽": "hscr", "𝕙": "hopf", ℋ: "Hscr", ℌ: "Hfr", ℍ: "Hopf", ĥ: "hcirc", Ĥ: "Hcirc", ℏ: "hbar", ħ: "hstrok", Ħ: "Hstrok", "𝕚": "iopf", "𝔦": "ifr", "𝒾": "iscr", "ⅈ": "ii", "𝕀": "Iopf", ℐ: "Iscr", ℑ: "Im", í: "iacute", Í: "Iacute", ì: "igrave", Ì: "Igrave", î: "icirc", Î: "Icirc", ï: "iuml", Ï: "Iuml", ĩ: "itilde", Ĩ: "Itilde", İ: "Idot", į: "iogon", Į: "Iogon", ī: "imacr", Ī: "Imacr", ĳ: "ijlig", Ĳ: "IJlig", ı: "imath", "𝒿": "jscr", "𝕛": "jopf", "𝔧": "jfr", "𝒥": "Jscr", "𝔍": "Jfr", "𝕁": "Jopf", ĵ: "jcirc", Ĵ: "Jcirc", "ȷ": "jmath", "𝕜": "kopf", "𝓀": "kscr", "𝔨": "kfr", "𝒦": "Kscr", "𝕂": "Kopf", "𝔎": "Kfr", ķ: "kcedil", Ķ: "Kcedil", "𝔩": "lfr", "𝓁": "lscr", ℓ: "ell", "𝕝": "lopf", ℒ: "Lscr", "𝔏": "Lfr", "𝕃": "Lopf", ĺ: "lacute", Ĺ: "Lacute", ľ: "lcaron", Ľ: "Lcaron", ļ: "lcedil", Ļ: "Lcedil", ł: "lstrok", Ł: "Lstrok", ŀ: "lmidot", Ŀ: "Lmidot", "𝔪": "mfr", "𝕞": "mopf", "𝓂": "mscr", "𝔐": "Mfr", "𝕄": "Mopf", ℳ: "Mscr", "𝔫": "nfr", "𝕟": "nopf", "𝓃": "nscr", ℕ: "Nopf", "𝒩": "Nscr", "𝔑": "Nfr", ń: "nacute", Ń: "Nacute", ň: "ncaron", Ň: "Ncaron", ñ: "ntilde", Ñ: "Ntilde", ņ: "ncedil", Ņ: "Ncedil", "№": "numero", ŋ: "eng", Ŋ: "ENG", "𝕠": "oopf", "𝔬": "ofr", ℴ: "oscr", "𝒪": "Oscr", "𝔒": "Ofr", "𝕆": "Oopf", º: "ordm", ó: "oacute", Ó: "Oacute", ò: "ograve", Ò: "Ograve", ô: "ocirc", Ô: "Ocirc", ö: "ouml", Ö: "Ouml", ő: "odblac", Ő: "Odblac", õ: "otilde", Õ: "Otilde", ø: "oslash", Ø: "Oslash", ō: "omacr", Ō: "Omacr", œ: "oelig", Œ: "OElig", "𝔭": "pfr", "𝓅": "pscr", "𝕡": "popf", ℙ: "Popf", "𝔓": "Pfr", "𝒫": "Pscr", "𝕢": "qopf", "𝔮": "qfr", "𝓆": "qscr", "𝒬": "Qscr", "𝔔": "Qfr", ℚ: "Qopf", ĸ: "kgreen", "𝔯": "rfr", "𝕣": "ropf", "𝓇": "rscr", ℛ: "Rscr", ℜ: "Re", ℝ: "Ropf", ŕ: "racute", Ŕ: "Racute", ř: "rcaron", Ř: "Rcaron", ŗ: "rcedil", Ŗ: "Rcedil", "𝕤": "sopf", "𝓈": "sscr", "𝔰": "sfr", "𝕊": "Sopf", "𝔖": "Sfr", "𝒮": "Sscr", "Ⓢ": "oS", ś: "sacute", Ś: "Sacute", ŝ: "scirc", Ŝ: "Scirc", š: "scaron", Š: "Scaron", ş: "scedil", Ş: "Scedil", ß: "szlig", "𝔱": "tfr", "𝓉": "tscr", "𝕥": "topf", "𝒯": "Tscr", "𝔗": "Tfr", "𝕋": "Topf", ť: "tcaron", Ť: "Tcaron", ţ: "tcedil", Ţ: "Tcedil", "™": "trade", ŧ: "tstrok", Ŧ: "Tstrok", "𝓊": "uscr", "𝕦": "uopf", "𝔲": "ufr", "𝕌": "Uopf", "𝔘": "Ufr", "𝒰": "Uscr", ú: "uacute", Ú: "Uacute", ù: "ugrave", Ù: "Ugrave", ŭ: "ubreve", Ŭ: "Ubreve", û: "ucirc", Û: "Ucirc", ů: "uring", Ů: "Uring", ü: "uuml", Ü: "Uuml", ű: "udblac", Ű: "Udblac", ũ: "utilde", Ũ: "Utilde", ų: "uogon", Ų: "Uogon", ū: "umacr", Ū: "Umacr", "𝔳": "vfr", "𝕧": "vopf", "𝓋": "vscr", "𝔙": "Vfr", "𝕍": "Vopf", "𝒱": "Vscr", "𝕨": "wopf", "𝓌": "wscr", "𝔴": "wfr", "𝒲": "Wscr", "𝕎": "Wopf", "𝔚": "Wfr", ŵ: "wcirc", Ŵ: "Wcirc", "𝔵": "xfr", "𝓍": "xscr", "𝕩": "xopf", "𝕏": "Xopf", "𝔛": "Xfr", "𝒳": "Xscr", "𝔶": "yfr", "𝓎": "yscr", "𝕪": "yopf", "𝒴": "Yscr", "𝔜": "Yfr", "𝕐": "Yopf", ý: "yacute", Ý: "Yacute", ŷ: "ycirc", Ŷ: "Ycirc", ÿ: "yuml", Ÿ: "Yuml", "𝓏": "zscr", "𝔷": "zfr", "𝕫": "zopf", ℨ: "Zfr", ℤ: "Zopf", "𝒵": "Zscr", ź: "zacute", Ź: "Zacute", ž: "zcaron", Ž: "Zcaron", ż: "zdot", Ż: "Zdot", Ƶ: "imped", þ: "thorn", Þ: "THORN", ŉ: "napos", α: "alpha", Α: "Alpha", β: "beta", Β: "Beta", γ: "gamma", Γ: "Gamma", δ: "delta", Δ: "Delta", ε: "epsi", "ϵ": "epsiv", Ε: "Epsilon", ϝ: "gammad", Ϝ: "Gammad", ζ: "zeta", Ζ: "Zeta", η: "eta", Η: "Eta", θ: "theta", ϑ: "thetav", Θ: "Theta", ι: "iota", Ι: "Iota", κ: "kappa", ϰ: "kappav", Κ: "Kappa", λ: "lambda", Λ: "Lambda", μ: "mu", µ: "micro", Μ: "Mu", ν: "nu", Ν: "Nu", ξ: "xi", Ξ: "Xi", ο: "omicron", Ο: "Omicron", π: "pi", ϖ: "piv", Π: "Pi", ρ: "rho", ϱ: "rhov", Ρ: "Rho", σ: "sigma", Σ: "Sigma", ς: "sigmaf", τ: "tau", Τ: "Tau", υ: "upsi", Υ: "Upsilon", ϒ: "Upsi", φ: "phi", ϕ: "phiv", Φ: "Phi", χ: "chi", Χ: "Chi", ψ: "psi", Ψ: "Psi", ω: "omega", Ω: "ohm", а: "acy", А: "Acy", б: "bcy", Б: "Bcy", в: "vcy", В: "Vcy", г: "gcy", Г: "Gcy", ѓ: "gjcy", Ѓ: "GJcy", д: "dcy", Д: "Dcy", ђ: "djcy", Ђ: "DJcy", е: "iecy", Е: "IEcy", ё: "iocy", Ё: "IOcy", є: "jukcy", Є: "Jukcy", ж: "zhcy", Ж: "ZHcy", з: "zcy", З: "Zcy", ѕ: "dscy", Ѕ: "DScy", и: "icy", И: "Icy", і: "iukcy", І: "Iukcy", ї: "yicy", Ї: "YIcy", й: "jcy", Й: "Jcy", ј: "jsercy", Ј: "Jsercy", к: "kcy", К: "Kcy", ќ: "kjcy", Ќ: "KJcy", л: "lcy", Л: "Lcy", љ: "ljcy", Љ: "LJcy", м: "mcy", М: "Mcy", н: "ncy", Н: "Ncy", њ: "njcy", Њ: "NJcy", о: "ocy", О: "Ocy", п: "pcy", П: "Pcy", р: "rcy", Р: "Rcy", с: "scy", С: "Scy", т: "tcy", Т: "Tcy", ћ: "tshcy", Ћ: "TSHcy", у: "ucy", У: "Ucy", ў: "ubrcy", Ў: "Ubrcy", ф: "fcy", Ф: "Fcy", х: "khcy", Х: "KHcy", ц: "tscy", Ц: "TScy", ч: "chcy", Ч: "CHcy", џ: "dzcy", Џ: "DZcy", ш: "shcy", Ш: "SHcy", щ: "shchcy", Щ: "SHCHcy", ъ: "hardcy", Ъ: "HARDcy", ы: "ycy", Ы: "Ycy", ь: "softcy", Ь: "SOFTcy", э: "ecy", Э: "Ecy", ю: "yucy", Ю: "YUcy", я: "yacy", Я: "YAcy", ℵ: "aleph", ℶ: "beth", ℷ: "gimel", ℸ: "daleth" }, p = /["&'<>`]/g, h = {
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
    }, f = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, b = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, g = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, m = { aacute: "á", Aacute: "Á", abreve: "ă", Abreve: "Ă", ac: "∾", acd: "∿", acE: "∾̳", acirc: "â", Acirc: "Â", acute: "´", acy: "а", Acy: "А", aelig: "æ", AElig: "Æ", af: "⁡", afr: "𝔞", Afr: "𝔄", agrave: "à", Agrave: "À", alefsym: "ℵ", aleph: "ℵ", alpha: "α", Alpha: "Α", amacr: "ā", Amacr: "Ā", amalg: "⨿", amp: "&", AMP: "&", and: "∧", And: "⩓", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", Aogon: "Ą", aopf: "𝕒", Aopf: "𝔸", ap: "≈", apacir: "⩯", ape: "≊", apE: "⩰", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", aring: "å", Aring: "Å", ascr: "𝒶", Ascr: "𝒜", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", Bcy: "Б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", beta: "β", Beta: "Β", beth: "ℶ", between: "≬", bfr: "𝔟", Bfr: "𝔅", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bNot: "⫭", bopf: "𝕓", Bopf: "𝔹", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxhD: "╥", boxHd: "╤", boxHD: "╦", boxhu: "┴", boxhU: "╨", boxHu: "╧", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpe: "≏", bumpE: "⪮", bumpeq: "≏", Bumpeq: "≎", cacute: "ć", Cacute: "Ć", cap: "∩", Cap: "⋒", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", ccaron: "č", Ccaron: "Č", ccedil: "ç", Ccedil: "Ç", ccirc: "ĉ", Ccirc: "Ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", Cdot: "Ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", chcy: "ч", CHcy: "Ч", check: "✓", checkmark: "✓", chi: "χ", Chi: "Χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cire: "≗", cirE: "⧃", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", colone: "≔", Colone: "⩴", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", cscr: "𝒸", Cscr: "𝒞", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", Cup: "⋓", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", dArr: "⇓", Darr: "↡", dash: "‐", dashv: "⊣", Dashv: "⫤", dbkarow: "⤏", dblac: "˝", dcaron: "ď", Dcaron: "Ď", dcy: "д", Dcy: "Д", dd: "ⅆ", DD: "ⅅ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", delta: "δ", Delta: "Δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", Dfr: "𝔇", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", DJcy: "Ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", Dopf: "𝔻", dot: "˙", Dot: "¨", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", downarrow: "↓", Downarrow: "⇓", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", Dscr: "𝒟", dscy: "ѕ", DScy: "Ѕ", dsol: "⧶", dstrok: "đ", Dstrok: "Đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", DZcy: "Џ", dzigrarr: "⟿", eacute: "é", Eacute: "É", easter: "⩮", ecaron: "ě", Ecaron: "Ě", ecir: "≖", ecirc: "ê", Ecirc: "Ê", ecolon: "≕", ecy: "э", Ecy: "Э", eDDot: "⩷", edot: "ė", eDot: "≑", Edot: "Ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", Efr: "𝔈", eg: "⪚", egrave: "è", Egrave: "È", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", Emacr: "Ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", eng: "ŋ", ENG: "Ŋ", ensp: " ", eogon: "ę", Eogon: "Ę", eopf: "𝕖", Eopf: "𝔼", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", Epsilon: "Ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", esim: "≂", Esim: "⩳", eta: "η", Eta: "Η", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", fcy: "ф", Fcy: "Ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", Ffr: "𝔉", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", Fopf: "𝔽", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", gamma: "γ", Gamma: "Γ", gammad: "ϝ", Gammad: "Ϝ", gap: "⪆", gbreve: "ğ", Gbreve: "Ğ", Gcedil: "Ģ", gcirc: "ĝ", Gcirc: "Ĝ", gcy: "г", Gcy: "Г", gdot: "ġ", Gdot: "Ġ", ge: "≥", gE: "≧", gel: "⋛", gEl: "⪌", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", Gfr: "𝔊", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", GJcy: "Ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", Gopf: "𝔾", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", gscr: "ℊ", Gscr: "𝒢", gsim: "≳", gsime: "⪎", gsiml: "⪐", gt: ">", Gt: "≫", GT: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", HARDcy: "Ъ", harr: "↔", hArr: "⇔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", hcirc: "ĥ", Hcirc: "Ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", hstrok: "ħ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", iacute: "í", Iacute: "Í", ic: "⁣", icirc: "î", Icirc: "Î", icy: "и", Icy: "И", Idot: "İ", iecy: "е", IEcy: "Е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", igrave: "ì", Igrave: "Ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", IJlig: "Ĳ", Im: "ℑ", imacr: "ī", Imacr: "Ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", Int: "∬", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", iocy: "ё", IOcy: "Ё", iogon: "į", Iogon: "Į", iopf: "𝕚", Iopf: "𝕀", iota: "ι", Iota: "Ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", Itilde: "Ĩ", iukcy: "і", Iukcy: "І", iuml: "ï", Iuml: "Ï", jcirc: "ĵ", Jcirc: "Ĵ", jcy: "й", Jcy: "Й", jfr: "𝔧", Jfr: "𝔍", jmath: "ȷ", jopf: "𝕛", Jopf: "𝕁", jscr: "𝒿", Jscr: "𝒥", jsercy: "ј", Jsercy: "Ј", jukcy: "є", Jukcy: "Є", kappa: "κ", Kappa: "Κ", kappav: "ϰ", kcedil: "ķ", Kcedil: "Ķ", kcy: "к", Kcy: "К", kfr: "𝔨", Kfr: "𝔎", kgreen: "ĸ", khcy: "х", KHcy: "Х", kjcy: "ќ", KJcy: "Ќ", kopf: "𝕜", Kopf: "𝕂", kscr: "𝓀", Kscr: "𝒦", lAarr: "⇚", lacute: "ĺ", Lacute: "Ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", Lambda: "Λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larr: "←", lArr: "⇐", Larr: "↞", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", lAtail: "⤛", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", Lcaron: "Ľ", lcedil: "ļ", Lcedil: "Ļ", lceil: "⌈", lcub: "{", lcy: "л", Lcy: "Л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", leftarrow: "←", Leftarrow: "⇐", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", Leftrightarrow: "⇔", LeftRightArrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", leg: "⋚", lEg: "⪋", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", Lfr: "𝔏", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", LJcy: "Љ", ll: "≪", Ll: "⋘", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", lmidot: "ŀ", Lmidot: "Ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", Longleftarrow: "⟸", LongLeftArrow: "⟵", longleftrightarrow: "⟷", Longleftrightarrow: "⟺", LongLeftRightArrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", Longrightarrow: "⟹", LongRightArrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", Lopf: "𝕃", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", Lstrok: "Ł", lt: "<", Lt: "≪", LT: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", Map: "⤅", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", Mcy: "М", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", mfr: "𝔪", Mfr: "𝔐", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", Mopf: "𝕄", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", mu: "μ", Mu: "Μ", multimap: "⊸", mumap: "⊸", nabla: "∇", nacute: "ń", Nacute: "Ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", Ncaron: "Ň", ncedil: "ņ", Ncedil: "Ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", Ncy: "Н", ndash: "–", ne: "≠", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", nfr: "𝔫", Nfr: "𝔑", nge: "≱", ngE: "≧̸", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", ngt: "≯", nGt: "≫⃒", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", NJcy: "Њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nle: "≰", nlE: "≦̸", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nlt: "≮", nLt: "≪⃒", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", not: "¬", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrarr: "↛", nrArr: "⇏", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", Nscr: "𝒩", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsube: "⊈", nsubE: "⫅̸", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupe: "⊉", nsupE: "⫆̸", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntilde: "ñ", Ntilde: "Ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", Nu: "Ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", oacute: "ó", Oacute: "Ó", oast: "⊛", ocir: "⊚", ocirc: "ô", Ocirc: "Ô", ocy: "о", Ocy: "О", odash: "⊝", odblac: "ő", Odblac: "Ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", OElig: "Œ", ofcir: "⦿", ofr: "𝔬", Ofr: "𝔒", ogon: "˛", ograve: "ò", Ograve: "Ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", Omacr: "Ō", omega: "ω", Omega: "Ω", omicron: "ο", Omicron: "Ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", Oopf: "𝕆", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", or: "∨", Or: "⩔", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", oscr: "ℴ", Oscr: "𝒪", oslash: "ø", Oslash: "Ø", osol: "⊘", otilde: "õ", Otilde: "Õ", otimes: "⊗", Otimes: "⨷", otimesas: "⨶", ouml: "ö", Ouml: "Ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", pcy: "п", Pcy: "П", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", Pfr: "𝔓", phi: "φ", Phi: "Φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", Pi: "Π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", pr: "≺", Pr: "⪻", prap: "⪷", prcue: "≼", pre: "⪯", prE: "⪳", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", Pscr: "𝒫", psi: "ψ", Psi: "Ψ", puncsp: " ", qfr: "𝔮", Qfr: "𝔔", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", qscr: "𝓆", Qscr: "𝒬", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", racute: "ŕ", Racute: "Ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarr: "→", rArr: "⇒", Rarr: "↠", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", Rarrtl: "⤖", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", Rcaron: "Ř", rcedil: "ŗ", Rcedil: "Ŗ", rceil: "⌉", rcub: "}", rcy: "р", Rcy: "Р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", Rho: "Ρ", rhov: "ϱ", RightAngleBracket: "⟩", rightarrow: "→", Rightarrow: "⇒", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", sacute: "ś", Sacute: "Ś", sbquo: "‚", sc: "≻", Sc: "⪼", scap: "⪸", scaron: "š", Scaron: "Š", sccue: "≽", sce: "⪰", scE: "⪴", scedil: "ş", Scedil: "Ş", scirc: "ŝ", Scirc: "Ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", Scy: "С", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", Sfr: "𝔖", sfrown: "⌢", sharp: "♯", shchcy: "щ", SHCHcy: "Щ", shcy: "ш", SHcy: "Ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", sigma: "σ", Sigma: "Σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", SOFTcy: "Ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", Sopf: "𝕊", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", Sscr: "𝒮", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", Star: "⋆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", sube: "⊆", subE: "⫅", subedot: "⫃", submult: "⫁", subne: "⊊", subnE: "⫋", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup: "⊃", Sup: "⋑", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supe: "⊇", supE: "⫆", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supne: "⊋", supnE: "⫌", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", tau: "τ", Tau: "Τ", tbrk: "⎴", tcaron: "ť", Tcaron: "Ť", tcedil: "ţ", Tcedil: "Ţ", tcy: "т", Tcy: "Т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", Tfr: "𝔗", there4: "∴", therefore: "∴", Therefore: "∴", theta: "θ", Theta: "Θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", thorn: "þ", THORN: "Þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", Topf: "𝕋", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", Tscr: "𝒯", tscy: "ц", TScy: "Ц", tshcy: "ћ", TSHcy: "Ћ", tstrok: "ŧ", Tstrok: "Ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uacute: "ú", Uacute: "Ú", uarr: "↑", uArr: "⇑", Uarr: "↟", Uarrocir: "⥉", ubrcy: "ў", Ubrcy: "Ў", ubreve: "ŭ", Ubreve: "Ŭ", ucirc: "û", Ucirc: "Û", ucy: "у", Ucy: "У", udarr: "⇅", udblac: "ű", Udblac: "Ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", Ufr: "𝔘", ugrave: "ù", Ugrave: "Ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", Umacr: "Ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", uogon: "ų", Uogon: "Ų", uopf: "𝕦", Uopf: "𝕌", uparrow: "↑", Uparrow: "⇑", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", updownarrow: "↕", Updownarrow: "⇕", UpDownArrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", upsilon: "υ", Upsilon: "Υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", Uring: "Ů", urtri: "◹", uscr: "𝓊", Uscr: "𝒰", utdot: "⋰", utilde: "ũ", Utilde: "Ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uuml: "ü", Uuml: "Ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", vcy: "в", Vcy: "В", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", vee: "∨", Vee: "⋁", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", vfr: "𝔳", Vfr: "𝔙", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", Vopf: "𝕍", vprop: "∝", vrtri: "⊳", vscr: "𝓋", Vscr: "𝒱", vsubne: "⊊︀", vsubnE: "⫋︀", vsupne: "⊋︀", vsupnE: "⫌︀", Vvdash: "⊪", vzigzag: "⦚", wcirc: "ŵ", Wcirc: "Ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", wfr: "𝔴", Wfr: "𝔚", wopf: "𝕨", Wopf: "𝕎", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", Wscr: "𝒲", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", Xfr: "𝔛", xharr: "⟷", xhArr: "⟺", xi: "ξ", Xi: "Ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", Xopf: "𝕏", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", xscr: "𝓍", Xscr: "𝒳", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacute: "ý", Yacute: "Ý", yacy: "я", YAcy: "Я", ycirc: "ŷ", Ycirc: "Ŷ", ycy: "ы", Ycy: "Ы", yen: "¥", yfr: "𝔶", Yfr: "𝔜", yicy: "ї", YIcy: "Ї", yopf: "𝕪", Yopf: "𝕐", yscr: "𝓎", Yscr: "𝒴", yucy: "ю", YUcy: "Ю", yuml: "ÿ", Yuml: "Ÿ", zacute: "ź", Zacute: "Ź", zcaron: "ž", Zcaron: "Ž", zcy: "з", Zcy: "З", zdot: "ż", Zdot: "Ż", zeetrf: "ℨ", ZeroWidthSpace: "​", zeta: "ζ", Zeta: "Ζ", zfr: "𝔷", Zfr: "ℨ", zhcy: "ж", ZHcy: "Ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", zscr: "𝓏", Zscr: "𝒵", zwj: "‍", zwnj: "‌" }, k = { aacute: "á", Aacute: "Á", acirc: "â", Acirc: "Â", acute: "´", aelig: "æ", AElig: "Æ", agrave: "à", Agrave: "À", amp: "&", AMP: "&", aring: "å", Aring: "Å", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", brvbar: "¦", ccedil: "ç", Ccedil: "Ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", Eacute: "É", ecirc: "ê", Ecirc: "Ê", egrave: "è", Egrave: "È", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", iacute: "í", Iacute: "Í", icirc: "î", Icirc: "Î", iexcl: "¡", igrave: "ì", Igrave: "Ì", iquest: "¿", iuml: "ï", Iuml: "Ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", Ntilde: "Ñ", oacute: "ó", Oacute: "Ó", ocirc: "ô", Ocirc: "Ô", ograve: "ò", Ograve: "Ò", ordf: "ª", ordm: "º", oslash: "ø", Oslash: "Ø", otilde: "õ", Otilde: "Õ", ouml: "ö", Ouml: "Ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", THORN: "Þ", times: "×", uacute: "ú", Uacute: "Ú", ucirc: "û", Ucirc: "Û", ugrave: "ù", Ugrave: "Ù", uml: "¨", uuml: "ü", Uuml: "Ü", yacute: "ý", Yacute: "Ý", yen: "¥", yuml: "ÿ" }, _ = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" }, y = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111], v = String.fromCharCode, w = {}, x = w.hasOwnProperty, D = function(E, L) {
      return x.call(E, L);
    }, A = function(E, L) {
      for (var $ = -1, W = E.length; ++$ < W; )
        if (E[$] == L)
          return !0;
      return !1;
    }, C = function(E, L) {
      if (!E)
        return L;
      var $ = {}, W;
      for (W in L)
        $[W] = D(E, W) ? E[W] : L[W];
      return $;
    }, z = function(E, L) {
      var $ = "";
      return E >= 55296 && E <= 57343 || E > 1114111 ? (L && M("character reference outside the permissible Unicode range"), "�") : D(_, E) ? (L && M("disallowed character reference"), _[E]) : (L && A(y, E) && M("disallowed character reference"), E > 65535 && (E -= 65536, $ += v(E >>> 10 & 1023 | 55296), E = 56320 | E & 1023), $ += v(E), $);
    }, R = function(E) {
      return "&#x" + E.toString(16).toUpperCase() + ";";
    }, N = function(E) {
      return "&#" + E + ";";
    }, M = function(E) {
      throw Error("Parse error: " + E);
    }, U = function(E, L) {
      L = C(L, U.options);
      var $ = L.strict;
      $ && b.test(E) && M("forbidden code point");
      var W = L.encodeEverything, Le = L.useNamedReferences, fe = L.allowUnsafeSymbols, we = L.decimal ? N : R, He = function(te) {
        return we(te.charCodeAt(0));
      };
      return W ? (E = E.replace(s, function(te) {
        return Le && D(c, te) ? "&" + c[te] + ";" : He(te);
      }), Le && (E = E.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), Le && (E = E.replace(u, function(te) {
        return "&" + c[te] + ";";
      }))) : Le ? (fe || (E = E.replace(p, function(te) {
        return "&" + c[te] + ";";
      })), E = E.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), E = E.replace(u, function(te) {
        return "&" + c[te] + ";";
      })) : fe || (E = E.replace(p, He)), E.replace(n, function(te) {
        var Ce = te.charCodeAt(0), Ri = te.charCodeAt(1), ro = (Ce - 55296) * 1024 + Ri - 56320 + 65536;
        return we(ro);
      }).replace(l, He);
    };
    U.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1
    };
    var B = function(E, L) {
      L = C(L, B.options);
      var $ = L.strict;
      return $ && f.test(E) && M("malformed character reference"), E.replace(g, function(W, Le, fe, we, He, te, Ce, Ri, ro) {
        var Wr, Yr, io, ao, Jr, Zr;
        return Le ? (Jr = Le, m[Jr]) : fe ? (Jr = fe, Zr = we, Zr && L.isAttributeValue ? ($ && Zr == "=" && M("`&` did not start a character reference"), W) : ($ && M(
          "named character reference was not terminated by a semicolon"
        ), k[Jr] + (Zr || ""))) : He ? (io = He, Yr = te, $ && !Yr && M("character reference was not terminated by a semicolon"), Wr = parseInt(io, 10), z(Wr, $)) : Ce ? (ao = Ce, Yr = Ri, $ && !Yr && M("character reference was not terminated by a semicolon"), Wr = parseInt(ao, 16), z(Wr, $)) : ($ && M(
          "named character reference was not terminated by a semicolon"
        ), W);
      });
    };
    B.options = {
      isAttributeValue: !1,
      strict: !1
    };
    var F = function(E) {
      return E.replace(p, function(L) {
        return h[L];
      });
    }, T = {
      version: "1.2.0",
      encode: U,
      decode: B,
      escape: F,
      unescape: B
    };
    if (r && !r.nodeType)
      if (a)
        a.exports = T;
      else
        for (var V in T)
          D(T, V) && (r[V] = T[V]);
    else
      t.he = T;
  })(Oi);
})(ki, ki.exports);
var up = ki.exports;
const cp = /* @__PURE__ */ $l(up), Br = {
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
}, dp = (i) => {
  const e = i ? [...new Set(i.split(","))] : [], r = window.BikeMatrix.getConfig(), a = [];
  return Object.entries(r.products).reduce((n, [s, l]) => (!a.includes(s) && l.skus.some((u) => e.includes(u.trim())) && (n.push(l), a.push(s)), n), []);
}, pp = (i) => {
  if (!(i != null && i.length))
    return [];
  const e = i.filter((t) => t.compatible).map((t) => t.sku).join(",");
  return dp(e);
}, hp = (i, e) => i > 1 ? {
  type: "pageone",
  ...Br.pageone
} : (e == null ? void 0 : e.length) > 0 ? {
  type: "compatibleresults",
  ...Br.compatibleresults
} : {
  type: "noresults",
  ...Br.noresults
}, fp = () => `
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
function gp({
  "data-title": i
}) {
  var v;
  const e = ee(null), t = window.BikeMatrix, r = t.getConfig(), [a, o] = q(!1), [n, s] = q(!0), [l, u] = q({
    type: "unknown",
    details: "",
    details_code: ""
  }), [c, p] = q([]), {
    t: h
  } = se(), f = !!t.getActiveSubscription(), b = r.currentCollectionHandle || "", g = r.collectionUrl || "", m = r.compatiblityListCurrentPage || 0, k = !!r.showCompatibleList || !1, _ = r.logLevel || "none", y = (w) => {
    var z, R;
    if (!(e != null && e.current))
      return null;
    const x = (R = (z = e == null ? void 0 : e.current) == null ? void 0 : z.parentElement) == null ? void 0 : R.querySelector('template[slot="product-card"]');
    _ === "verbose" && console.log("CompatibleList Product Card Template: ", x);
    const C = (x ? x.innerHTML : fp()).replace(r.isShopify ? /\@\@#if\s+(\w+)\@\@(.*?)\@\@\/if\@\@/gs : /\{\{#if\s+(\w+)\}\}(.*?)\{\{\/if\}\}/gs, (N, M, U) => w[M] ? U : "").replace(r.isShopify ? /\@\@\s*(\w+)\s*\@\@/g : /\{\{\s*(\w+)\s*\}\}/g, (N, M) => {
      if (M === "compatibility")
        return '<bikematrix-compatibilitylabel data-type="compatible"></bikematrix-compatibilitylabel>';
      const U = w[M];
      return M === "productTitle" ? cp.decode(U) : U || "";
    });
    return _ === "verbose" && console.log("CompatibleList Product Card: ", C), d("li", {
      dangerouslySetInnerHTML: {
        __html: C
      }
    }, w.productId);
  };
  return I(() => {
    var C, z;
    const w = r.collections.map((R) => R.handle) || [];
    if (!k || !w.includes(b)) {
      u({
        type: "unknown",
        ...Br.unknown
      }), o(!1);
      return;
    }
    if (!Y.value) {
      u({
        type: "selectbike",
        ...Br.selectbike
      }), o(!Ie.value);
      return;
    }
    if (!((z = (C = Y.value) == null ? void 0 : C.compatibleCollections) == null ? void 0 : z.find((R) => R.handle === b))) {
      o(!1);
      return;
    }
    const D = pp(Gt.value).map(y);
    p(D);
    const A = hp(m, D);
    u(A), o(!0);
  }, [
    b,
    Y.value,
    Gt.value,
    Ie.value,
    // compatibleProducts,
    m
  ]), d(O, {
    children: f && a && d("div", {
      ref: e,
      children: [d("style", {
        type: "text/css",
        children: lp
      }), d("div", {
        class: "bike-matrix-container",
        children: d("div", {
          class: "bm-compatible-products-wrapper",
          children: [d("div", {
            class: "bm-compatible-products-title",
            children: d("div", {
              id: "bm_customAccordion",
              class: n && "active",
              onClick: () => s(!n),
              children: [d("span", {
                children: i || h("compatiblelist_header")
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
              style: Ie.value ? "" : "display: none",
              children: [d("div", {}), d("div", {}), d("div", {}), d("div", {})]
            }), !Ie.value && {
              unknown: d("p", {
                class: "bm-compatible-products-message"
              }),
              unavailable: d("p", {
                class: "bm-compatible-products-message",
                children: h(l == null ? void 0 : l.details_code)
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
                  children: h(l == null ? void 0 : l.details_code)
                })
              }),
              pageone: d("p", {
                class: "bm-compatible-products-message",
                children: d("div", {
                  dangerouslySetInnerHTML: {
                    __html: (v = h(l == null ? void 0 : l.details_code)) == null ? void 0 : v.replace("<a>", "<a href='" + g + "'>")
                  }
                })
              }),
              noresults: d("p", {
                class: "bm-compatible-products-message",
                children: h(l == null ? void 0 : l.details_code)
              }),
              compatibleresults: d(O, {})
            }[l == null ? void 0 : l.type], d("ul", {
              id: "bm_compatibleProductsList",
              children: !Ie.value && (l == null ? void 0 : l.type) === "compatibleresults" && c
            }), d("div", {
              class: "bm_result_link",
              children: d("a", {
                rel: "noreferrer",
                href: "http://www.bikematrix.io/landed-it",
                target: "_blank",
                class: "link",
                children: h("bikematrix_poweredby")
              })
            })]
          })]
        })
      })]
    })
  });
}
const mp = `.bike-selector-banner_wrapper{position:relative;height:40px}.bike-selector-banner{width:100%;height:40px;position:absolute;top:0;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-bottom:2rem}.floating{border-radius:12px;box-shadow:0 4px 4px #0000001f}.bike-selector-banner_title{color:#fff;text-transform:uppercase;padding-top:2px;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px}@media (width <= 991px){.bike-selector-banner_title{display:none}}.bike-selector-banner_title_mobile{display:none;text-transform:uppercase;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px;color:#fff;padding-top:2px}@media (width <= 991px){.bike-selector-banner_title_mobile{display:block}}.bike-selector-banner_svg{height:19px}.bike-selector-banner_icon-wrapper{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.bike-selector-banner_tick{width:12px;height:12px;position:absolute;right:6px;top:5px}
`, bp = `.bm-button{cursor:pointer;border:none;font-weight:600}.bm-header-btn{display:inline-block;font-weight:200;background-color:#000;color:#fff;border-radius:5px;text-align:center;font-size:.75em;cursor:pointer}.bm-icon{display:inline-block;padding:6px;font-weight:200;border:none;text-align:center;font-size:.75em;background-color:transparent;height:44px;width:44px}.bm-icon svg{width:32px;height:32px}@media screen and (max-width: 991px){.bm-icon{padding:10px}.bm-icon svg{width:24px;height:24px}}.bm-bike-select-icon.show-selected,.bm-bike-select-icon.show-selected-banner{position:relative}.bm-bike-select-icon.show-selected:after{content:"";width:12px;height:12px;top:2px;right:2px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}.bm-bike-select-icon.show-selected-banner:after{content:"";width:12px;height:12px;top:6px;right:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}
`;
function pl({
  "data-color": i,
  banner: e
}) {
  const t = Y.value;
  return window.BikeMatrix.getConfig(), d(O, {
    children: [d("style", {
      type: "text/css",
      children: bp
    }), d("div", {
      className: "bm-bikon-wrapper",
      children: d("button", {
        className: `p-2 !ml-auto header__icon bm-header-btn bm-icon bm-bike-select-icon ${t && !e ? "show-selected" : t && e ? "show-selected-banner" : ""}`,
        style: {
          color: i
        },
        onClick: e ? () => {
        } : () => Qt(),
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
function _p({
  "data-title": i,
  "data-color": e,
  "data-full-width": t,
  "data-font-color": r,
  "data-show": a
}) {
  const o = Y.value;
  return typeof a > "u" || a !== "true" && a !== "" ? d(O, {}) : d(O, {
    children: [d("style", {
      type: "text/css",
      children: mp
    }), d("div", {
      onClick: () => {
        Qt();
      },
      class: "bike-selector-banner_wrapper",
      children: d("div", {
        class: `bike-selector-banner ${t === "false" ? "floating" : ""}`,
        style: {
          backgroundColor: e ?? "#000",
          maxWidth: t ?? null
        },
        children: d(O, {
          children: [d("h2", {
            class: "bike-selector-banner_title",
            style: {
              color: r === "black" ? "#000" : "#fff"
            },
            children: o ? o.brand + " " + o.frameSeries : i
          }), d("h2", {
            class: "bike-selector-banner_title_mobile",
            style: {
              color: r === "black" ? "#000" : "#fff"
            },
            children: o ? o.brand : "Check Compatibility"
          }), d(pl, {
            "data-color": "#fff",
            banner: !0
          })]
        })
      })
    })]
  });
}
const yp = {
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
class vi {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || yp, this.options = t, this.debug = t.debug;
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
    return new vi(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new vi(this.logger, e);
  }
}
var Qe = new vi();
class Pi {
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
      for (let u = 0; u < l; u++)
        s(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((n) => {
      let [s, l] = n;
      for (let u = 0; u < l; u++)
        s.apply(s, [e, ...r]);
    });
  }
}
const gr = () => {
  let i, e;
  const t = new Promise((r, a) => {
    i = r, e = a;
  });
  return t.resolve = i, t.reject = e, t;
}, on = (i) => i == null ? "" : "" + i, kp = (i, e, t) => {
  i.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}, vp = /###/g, nn = (i) => i && i.indexOf("###") > -1 ? i.replace(vp, ".") : i, sn = (i) => !i || typeof i == "string", Er = (i, e, t) => {
  const r = typeof e != "string" ? e : e.split(".");
  let a = 0;
  for (; a < r.length - 1; ) {
    if (sn(i))
      return {};
    const o = nn(r[a]);
    !i[o] && t && (i[o] = new t()), Object.prototype.hasOwnProperty.call(i, o) ? i = i[o] : i = {}, ++a;
  }
  return sn(i) ? {} : {
    obj: i,
    k: nn(r[a])
  };
}, ln = (i, e, t) => {
  const {
    obj: r,
    k: a
  } = Er(i, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[a] = t;
    return;
  }
  let o = e[e.length - 1], n = e.slice(0, e.length - 1), s = Er(i, n, Object);
  for (; s.obj === void 0 && n.length; )
    o = `${n[n.length - 1]}.${o}`, n = n.slice(0, n.length - 1), s = Er(i, n, Object), s && s.obj && typeof s.obj[`${s.k}.${o}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${o}`] = t;
}, wp = (i, e, t, r) => {
  const {
    obj: a,
    k: o
  } = Er(i, e, Object);
  a[o] = a[o] || [], a[o].push(t);
}, wi = (i, e) => {
  const {
    obj: t,
    k: r
  } = Er(i, e);
  if (t)
    return t[r];
}, xp = (i, e, t) => {
  const r = wi(i, t);
  return r !== void 0 ? r : wi(e, t);
}, hl = (i, e, t) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in i ? typeof i[r] == "string" || i[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (i[r] = e[r]) : hl(i[r], e[r], t) : i[r] = e[r]);
  return i;
}, jt = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Cp = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Dp = (i) => typeof i == "string" ? i.replace(/[&<>"'\/]/g, (e) => Cp[e]) : i;
class Ap {
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
const Sp = [" ", ",", "?", "!", ";"], Bp = new Ap(20), Ep = (i, e, t) => {
  e = e || "", t = t || "";
  const r = Sp.filter((n) => e.indexOf(n) < 0 && t.indexOf(n) < 0);
  if (r.length === 0)
    return !0;
  const a = Bp.getRegExp(`(${r.map((n) => n === "?" ? "\\?" : n).join("|")})`);
  let o = !a.test(i);
  if (!o) {
    const n = i.indexOf(t);
    n > 0 && !a.test(i.substring(0, n)) && (o = !0);
  }
  return o;
}, Da = function(i, e) {
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
}, xi = (i) => i && i.replace("_", "-");
class un extends Pi {
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
    const l = wi(this.data, s);
    return !l && !t && !r && e.indexOf(".") > -1 && (e = s[0], t = s[1], r = s.slice(2).join(".")), l || !n || typeof r != "string" ? l : Da(this.data && this.data[e] && this.data[e][t], r, o);
  }
  addResource(e, t, r, a) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const n = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let s = [e, t];
    r && (s = s.concat(n ? r.split(n) : r)), e.indexOf(".") > -1 && (s = e.split("."), a = t, t = s[1]), this.addNamespaces(t), ln(this.data, s, a), o.silent || this.emit("added", e, t, r, a);
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
    let l = wi(this.data, s) || {};
    n.skipCopy || (r = JSON.parse(JSON.stringify(r))), a ? hl(l, r, o) : l = {
      ...l,
      ...r
    }, ln(this.data, s, l), n.silent || this.emit("added", e, t, r);
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
var fl = {
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
const cn = {};
class Ci extends Pi {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), kp(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Qe.create("translator");
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
    const n = r && e.indexOf(r) > -1, s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Ep(e, r, a);
    if (n && !s) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: o
        };
      const u = e.split(r);
      (r !== a || r === a && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), e = u.join(a);
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
    } = this.extractFromKey(e[e.length - 1], t), l = s[s.length - 1], u = t.lng || this.language, c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const v = t.nsSeparator || this.options.nsSeparator;
        return a ? {
          res: `${l}${v}${n}`,
          usedKey: n,
          exactUsedKey: n,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${v}${n}`;
      }
      return a ? {
        res: n,
        usedKey: n,
        exactUsedKey: n,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(t)
      } : n;
    }
    const p = this.resolve(e, t);
    let h = p && p.res;
    const f = p && p.usedKey || n, b = p && p.exactUsedKey || n, g = Object.prototype.toString.apply(h), m = ["[object Number]", "[object Function]", "[object RegExp]"], k = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, _ = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (_ && h && (typeof h != "string" && typeof h != "boolean" && typeof h != "number") && m.indexOf(g) < 0 && !(typeof k == "string" && Array.isArray(h))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const v = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, h, {
          ...t,
          ns: s
        }) : `key '${n} (${this.language})' returned an object instead of string.`;
        return a ? (p.res = v, p.usedParams = this.getUsedParamsDetails(t), p) : v;
      }
      if (o) {
        const v = Array.isArray(h), w = v ? [] : {}, x = v ? b : f;
        for (const D in h)
          if (Object.prototype.hasOwnProperty.call(h, D)) {
            const A = `${x}${o}${D}`;
            w[D] = this.translate(A, {
              ...t,
              joinArrays: !1,
              ns: s
            }), w[D] === A && (w[D] = h[D]);
          }
        h = w;
      }
    } else if (_ && typeof k == "string" && Array.isArray(h))
      h = h.join(k), h && (h = this.extendTranslation(h, e, t, r));
    else {
      let v = !1, w = !1;
      const x = t.count !== void 0 && typeof t.count != "string", D = Ci.hasDefaultValue(t), A = x ? this.pluralResolver.getSuffix(u, t.count, t) : "", C = t.ordinal && x ? this.pluralResolver.getSuffix(u, t.count, {
        ordinal: !1
      }) : "", z = x && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), R = z && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${A}`] || t[`defaultValue${C}`] || t.defaultValue;
      !this.isValidLookup(h) && D && (v = !0, h = R), this.isValidLookup(h) || (w = !0, h = n);
      const M = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && w ? void 0 : h, U = D && R !== h && this.options.updateMissing;
      if (w || v || U) {
        if (this.logger.log(U ? "updateKey" : "missingKey", u, l, n, U ? R : h), o) {
          const V = this.resolve(n, {
            ...t,
            keySeparator: !1
          });
          V && V.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let B = [];
        const F = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && F && F[0])
          for (let V = 0; V < F.length; V++)
            B.push(F[V]);
        else
          this.options.saveMissingTo === "all" ? B = this.languageUtils.toResolveHierarchy(t.lng || this.language) : B.push(t.lng || this.language);
        const T = (V, E, L) => {
          const $ = D && L !== h ? L : M;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(V, l, E, $, U, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(V, l, E, $, U, t), this.emit("missingKey", V, l, E, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && x ? B.forEach((V) => {
          const E = this.pluralResolver.getSuffixes(V, t);
          z && t[`defaultValue${this.options.pluralSeparator}zero`] && E.indexOf(`${this.options.pluralSeparator}zero`) < 0 && E.push(`${this.options.pluralSeparator}zero`), E.forEach((L) => {
            T([V], n + L, t[`defaultValue${L}`] || R);
          });
        }) : T(B, n, R));
      }
      h = this.extendTranslation(h, e, t, p, r), w && h === n && this.options.appendNamespaceToMissingKey && (h = `${l}:${n}`), (w || v) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${n}` : n, v ? h : void 0) : h = this.options.parseMissingKeyHandler(h));
    }
    return a ? (p.res = h, p.usedParams = this.getUsedParamsDetails(t), p) : h;
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
      const u = typeof e == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const h = e.match(this.interpolator.nestingRegexp);
        c = h && h.length;
      }
      let p = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, r.lng || this.language || a.usedLng, r), u) {
        const h = e.match(this.interpolator.nestingRegexp), f = h && h.length;
        c < f && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && a && a.res && (r.lng = this.language || a.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var h = arguments.length, f = new Array(h), b = 0; b < h; b++)
          f[b] = arguments[b];
        return o && o[0] === f[0] && !r.context ? (n.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`), null) : n.translate(...f, t);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess, l = typeof s == "string" ? [s] : s;
    return e != null && l && l.length && r.applyPostProcessor !== !1 && (e = fl.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
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
      const u = this.extractFromKey(l, t), c = u.key;
      a = c;
      let p = u.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const h = t.count !== void 0 && typeof t.count != "string", f = h && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), b = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((m) => {
        this.isValidLookup(r) || (s = m, !cn[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (cn[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${a}" for languages "${g.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((k) => {
          if (this.isValidLookup(r))
            return;
          n = k;
          const _ = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(_, c, k, m, t);
          else {
            let v;
            h && (v = this.pluralResolver.getSuffix(k, t.count, t));
            const w = `${this.options.pluralSeparator}zero`, x = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (_.push(c + v), t.ordinal && v.indexOf(x) === 0 && _.push(c + v.replace(x, this.options.pluralSeparator)), f && _.push(c + w)), b) {
              const D = `${c}${this.options.contextSeparator}${t.context}`;
              _.push(D), h && (_.push(D + v), t.ordinal && v.indexOf(x) === 0 && _.push(D + v.replace(x, this.options.pluralSeparator)), f && _.push(D + w));
            }
          }
          let y;
          for (; y = _.pop(); )
            this.isValidLookup(r) || (o = y, r = this.getResource(k, m, y, t));
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
const Zi = (i) => i.charAt(0).toUpperCase() + i.slice(1);
class dn {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Qe.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = xi(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = xi(e), !e || e.indexOf("-") < 0)
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
      return this.options.lowerCaseLng ? r = r.map((a) => a.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Zi(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Zi(r[1].toLowerCase())), t.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Zi(r[2].toLowerCase()))), r.join("-");
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
let Fp = [{
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
}], Lp = {
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
const zp = ["v1", "v2", "v3"], Tp = ["v4"], pn = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Pp = () => {
  const i = {};
  return Fp.forEach((e) => {
    e.lngs.forEach((t) => {
      i[t] = {
        numbers: e.nr,
        plurals: Lp[e.fc]
      };
    });
  }), i;
};
class Rp {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = Qe.create("pluralResolver"), (!this.options.compatibilityJSON || Tp.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Pp(), this.pluralRulesCache = {};
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
        const r = xi(e === "dev" ? "en" : e), a = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((a, o) => pn[a] - pn[o]).map((a) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : r.numbers.map((a) => this.getSuffix(e, a, t)) : [];
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
    return !zp.includes(this.options.compatibilityJSON);
  }
}
const hn = function(i, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = xp(i, e, t);
  return !o && a && typeof t == "string" && (o = Da(i, t, r), o === void 0 && (o = Da(e, t, r))), o;
}, Xi = (i) => i.replace(/\$/g, "$$$$");
class Np {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Qe.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
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
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: p,
      nestingPrefix: h,
      nestingPrefixEscaped: f,
      nestingSuffix: b,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: m,
      maxReplaces: k,
      alwaysFormat: _
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Dp, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = a !== void 0 ? a : !1, this.prefix = o ? jt(o) : n || "{{", this.suffix = s ? jt(s) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = h ? jt(h) : f || jt("$t("), this.nestingSuffix = b ? jt(b) : g || jt(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = k || 1e3, this.alwaysFormat = _ !== void 0 ? _ : !1, this.resetRegExp();
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
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (f) => {
      if (f.indexOf(this.formatSeparator) < 0) {
        const k = hn(t, l, f, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(k, void 0, r, {
          ...a,
          ...t,
          interpolationkey: f
        }) : k;
      }
      const b = f.split(this.formatSeparator), g = b.shift().trim(), m = b.join(this.formatSeparator).trim();
      return this.format(hn(t, l, g, this.options.keySeparator, this.options.ignoreJSONStructure), m, r, {
        ...a,
        ...t,
        interpolationkey: g
      });
    };
    this.resetRegExp();
    const c = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, p = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (f) => Xi(f)
    }, {
      regex: this.regexp,
      safeValue: (f) => this.escapeValue ? Xi(this.escape(f)) : Xi(f)
    }].forEach((f) => {
      for (s = 0; o = f.regex.exec(e); ) {
        const b = o[1].trim();
        if (n = u(b), n === void 0)
          if (typeof c == "function") {
            const m = c(e, o, a);
            n = typeof m == "string" ? m : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, b))
            n = "";
          else if (p) {
            n = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${b} for interpolating ${e}`), n = "";
        else
          typeof n != "string" && !this.useRawValueToEscape && (n = on(n));
        const g = f.safeValue(n);
        if (e = e.replace(o[0], g), p ? (f.regex.lastIndex += n.length, f.regex.lastIndex -= o[0].length) : f.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, o, n;
    const s = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0)
        return l;
      const p = l.split(new RegExp(`${c}[ ]*{`));
      let h = `{${p[1]}`;
      l = p[0], h = this.interpolate(h, n);
      const f = h.match(/'/g), b = h.match(/"/g);
      (f && f.length % 2 === 0 && !b || b.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        n = JSON.parse(h), u && (n = {
          ...u,
          ...n
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, g), `${l}${c}${h}`;
      }
      return n.defaultValue && n.defaultValue.indexOf(this.prefix) > -1 && delete n.defaultValue, l;
    };
    for (; a = this.nestingRegexp.exec(e); ) {
      let l = [];
      n = {
        ...r
      }, n = n.replace && typeof n.replace != "string" ? n.replace : n, n.applyPostProcessor = !1, delete n.defaultValue;
      let u = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const c = a[1].split(this.formatSeparator).map((p) => p.trim());
        a[1] = c.shift(), l = c, u = !0;
      }
      if (o = t(s.call(this, a[1].trim(), n), n), o && a[0] === e && typeof o != "string")
        return o;
      typeof o != "string" && (o = on(o)), o || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`), o = ""), u && (o = l.reduce((c, p) => this.format(c, p, r.lng, {
        ...r,
        interpolationkey: a[1].trim()
      }), o.trim())), e = e.replace(a[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const qp = (i) => {
  let e = i.toLowerCase().trim();
  const t = {};
  if (i.indexOf("(") > -1) {
    const r = i.split("(");
    e = r[0].toLowerCase().trim();
    const a = r[1].substring(0, r[1].length - 1);
    e === "currency" && a.indexOf(":") < 0 ? t.currency || (t.currency = a.trim()) : e === "relativetime" && a.indexOf(":") < 0 ? t.range || (t.range = a.trim()) : a.split(";").forEach((n) => {
      if (n) {
        const [s, ...l] = n.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = s.trim();
        t[c] || (t[c] = u), u === "false" && (t[c] = !1), u === "true" && (t[c] = !0), isNaN(u) || (t[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, Ut = (i) => {
  const e = {};
  return (t, r, a) => {
    let o = a;
    a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (o = {
      ...o,
      [a.interpolationkey]: void 0
    });
    const n = r + JSON.stringify(o);
    let s = e[n];
    return s || (s = i(xi(r), a), e[n] = s), s(t);
  };
};
class Op {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Qe.create("formatter"), this.options = e, this.formats = {
      number: Ut((t, r) => {
        const a = new Intl.NumberFormat(t, {
          ...r
        });
        return (o) => a.format(o);
      }),
      currency: Ut((t, r) => {
        const a = new Intl.NumberFormat(t, {
          ...r,
          style: "currency"
        });
        return (o) => a.format(o);
      }),
      datetime: Ut((t, r) => {
        const a = new Intl.DateTimeFormat(t, {
          ...r
        });
        return (o) => a.format(o);
      }),
      relativetime: Ut((t, r) => {
        const a = new Intl.RelativeTimeFormat(t, {
          ...r
        });
        return (o) => a.format(o, r.range || "day");
      }),
      list: Ut((t, r) => {
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
    this.formats[e.toLowerCase().trim()] = Ut(t);
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
        formatName: u,
        formatOptions: c
      } = qp(l);
      if (this.formats[u]) {
        let p = s;
        try {
          const h = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, f = h.locale || h.lng || a.locale || a.lng || r;
          p = this.formats[u](s, f, {
            ...c,
            ...a,
            ...h
          });
        } catch (h) {
          this.logger.warn(h);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, e);
  }
}
const Mp = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class Ip extends Pi {
  constructor(e, t, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = a, this.logger = Qe.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, a.backend, a);
  }
  queueLoad(e, t, r, a) {
    const o = {}, n = {}, s = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((p) => {
        const h = `${u}|${p}`;
        !r.reload && this.store.hasResourceBundle(u, p) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? n[h] === void 0 && (n[h] = !0) : (this.state[h] = 1, c = !1, n[h] === void 0 && (n[h] = !0), o[h] === void 0 && (o[h] = !0), l[p] === void 0 && (l[p] = !0)));
      }), c || (s[u] = !0);
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
      wp(l.loaded, [o], n), Mp(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        s[u] || (s[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((p) => {
          s[u][p] === void 0 && (s[u][p] = !0);
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
    const s = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (u && c && a < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, r, a + 1, o * 2, n);
        }, o);
        return;
      }
      n(u, c);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, t);
        u && typeof u.then == "function" ? u.then((c) => s(null, c)).catch(s) : s(null, u);
      } catch (u) {
        s(u);
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
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(e, t, r, a, l) : c = u(e, t, r, a), c && typeof c.then == "function" ? c.then((p) => s(null, p)).catch(s) : s(null, c);
          } catch (c) {
            s(c);
          }
        else
          u(e, t, r, a, s, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, a);
    }
  }
}
const fn = () => ({
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
}), gn = (i) => (typeof i.ns == "string" && (i.ns = [i.ns]), typeof i.fallbackLng == "string" && (i.fallbackLng = [i.fallbackLng]), typeof i.fallbackNS == "string" && (i.fallbackNS = [i.fallbackNS]), i.supportedLngs && i.supportedLngs.indexOf("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), i), ii = () => {
}, Vp = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
};
class jr extends Pi {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = gn(e), this.services = {}, this.logger = Qe, this.modules = {
      external: []
    }, Vp(this), t && !this.isInitialized && !e.isClone) {
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
    const a = fn();
    this.options = {
      ...a,
      ...this.options,
      ...gn(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const o = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? Qe.init(o(this.modules.logger), this.options) : Qe.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = Op);
      const p = new dn(this.options);
      this.store = new un(this.options.resources, this.options);
      const h = this.services;
      h.logger = Qe, h.resourceStore = this.store, h.languageUtils = p, h.pluralResolver = new Rp(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (h.formatter = o(c), h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new Np(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new Ip(o(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", function(f) {
        for (var b = arguments.length, g = new Array(b > 1 ? b - 1 : 0), m = 1; m < b; m++)
          g[m - 1] = arguments[m];
        e.emit(f, ...g);
      }), this.modules.languageDetector && (h.languageDetector = o(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = o(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Ci(this.services, this.options), this.translator.on("*", function(f) {
        for (var b = arguments.length, g = new Array(b > 1 ? b - 1 : 0), m = 1; m < b; m++)
          g[m - 1] = arguments[m];
        e.emit(f, ...g);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = ii), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const l = gr(), u = () => {
      const c = (p, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(h), r(p, h);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ii;
    const a = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (a && a.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const o = [], n = (s) => {
        if (!s || s === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(s).forEach((u) => {
          u !== "cimode" && o.indexOf(u) < 0 && o.push(u);
        });
      };
      a ? n(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => n(l)), this.options.preload && this.options.preload.forEach((s) => n(s)), this.services.backendConnector.load(o, this.options.ns, (s) => {
        !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(s);
      });
    } else
      r(null);
  }
  reloadResources(e, t, r) {
    const a = gr();
    return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = ii), this.services.backendConnector.reload(e, t, (o) => {
      a.resolve(), r(o);
    }), a;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && fl.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const a = gr();
    this.emit("languageChanging", e);
    const o = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, n = (l, u) => {
      u ? (o(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
        return r.t(...arguments);
      }), t && t(l, function() {
        return r.t(...arguments);
      });
    }, s = (l) => {
      !e && !l && this.services.languageDetector && (l = []);
      const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, (c) => {
        n(c, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(e), a;
  }
  getFixedT(e, t, r) {
    var a = this;
    const o = function(n, s) {
      let l;
      if (typeof s != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), p = 2; p < u; p++)
          c[p - 2] = arguments[p];
        l = a.options.overloadTranslationOptionHandler([n, s].concat(c));
      } else
        l = {
          ...s
        };
      l.lng = l.lng || o.lng, l.lngs = l.lngs || o.lngs, l.ns = l.ns || o.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || o.keyPrefix);
      const h = a.options.keySeparator || ".";
      let f;
      return l.keyPrefix && Array.isArray(n) ? f = n.map((b) => `${l.keyPrefix}${h}${b}`) : f = l.keyPrefix ? `${l.keyPrefix}${h}${n}` : n, a.t(f, l);
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
      const u = this.services.backendConnector.state[`${s}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const s = t.precheck(this, n);
      if (s !== void 0)
        return s;
    }
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || n(r, e) && (!a || n(o, e)));
  }
  loadNamespaces(e, t) {
    const r = gr();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((a) => {
      this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
    }), this.loadResources((a) => {
      r.resolve(), t && t(a);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = gr();
    typeof e == "string" && (e = [e]);
    const a = this.options.preload || [], o = e.filter((n) => a.indexOf(n) < 0 && this.services.languageUtils.isSupportedCode(n));
    return o.length ? (this.options.preload = a.concat(o), this.loadResources((n) => {
      r.resolve(), t && t(n);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new dn(fn());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new jr(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ii;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const a = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new jr(a);
    return (e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((s) => {
      o[s] = this[s];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r && (o.store = new un(this.store.data, a), o.services.resourceStore = o.store), o.translator = new Ci(o.services, a), o.translator.on("*", function(s) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        u[c - 1] = arguments[c];
      o.emit(s, ...u);
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
const ve = jr.createInstance();
ve.createInstance = jr.createInstance;
ve.createInstance;
ve.dir;
ve.init;
ve.loadResources;
ve.reloadResources;
ve.use;
ve.changeLanguage;
ve.getFixedT;
ve.t;
ve.exists;
ve.setDefaultNamespace;
ve.hasLoadedNamespace;
ve.loadNamespaces;
ve.loadLanguages;
const jp = {
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
    bikeselector_home_add_a_bike: "Füge zunächst unten ein Fahrrad hinzu …",
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
    bikeselector_search_searching: "Suche läuft …",
    bikeselector_search_title: "Fahrradsuche",
    bikeselector_search_year_label: "Jahr",
    bikeselector_size_confirm_btn: "Größe bestätigen",
    bikeselector_size_framesize_desc: "Die Rahmengröße deines Fahrrads ist normalerweise in den unten hervorgehobenen Bereichen zu finden.",
    bikeselector_size_framesize_label: "Rahmengröße",
    bikeselector_size_framesize_one_size: "Einheitsgröße",
    bikeselector_size_framesize_select: "Deine Rahmengröße wählen",
    bikeselector_size_title: "Deine Größe wählen",
    cancel: "Abbrechen",
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
    productcheck_nobikeselected_label: "Kompatibilität prüfen",
    productcheck_nobikeselected_message: "Dein Fahrrad hinzufügen, um die Kompatibilität dieses Teils zu prüfen",
    productcheck_questionmark: "?",
    save: "Speichern",
    share: "Teilen",
    virtualworkshop_add_bike_text: "Deine Bike Matrix ID findest du auf der Seite Einstellungen in der virtuellen Werkstatt",
    virtualworkshop_bm_id_text: "Du kannst entweder die Bike Matrix ID verwenden, die du in den Einstellungen der virtuellen Werkstatt findest, oder die geteilte ID, die dir von einer anderen Person mitgeteilt wurde.",
    virtualworkshop_bom_title: "Materialliste",
    virtualworkshop_build_text: "Details zur Konfiguration",
    virtualworkshop_cockpit: "Cockpit",
    virtualworkshop_disclaimer: "Bei der Aktualisierung ihres Fahrrad-Datensatzes übernehmen Nutzer die volle Verantwortung für die richtige Zusammenstellung der Komponenten und sind sich bewusst, dass sich Änderungen auf die Kompatibilität auswirken können.",
    virtualworkshop_drivetrain: "Antrieb",
    virtualworkshop_e_drive: "E-Antrieb",
    virtualworkshop_enter_button: "Virtuelle Werkstatt betreten",
    virtualworkshop_frame_fork: "Rahmen und Gabel",
    virtualworkshop_intro_text: "Optimiere deine Fahrradkonfiguration mit neuen Komponenten und speichere dein Fahrrad durch die Angabe einer E-Mail-Adresse. Betrachte geteilte Fahrradkonfigurationen und greife auf deine Fahrrad-IDs zu.",
    virtualworkshop_other_parts: "Sonstige Teile",
    virtualworkshop_remove_btn: "Komponente entfernen",
    virtualworkshop_remove_subtitle: "Das Entfernen einer Komponente führt dazu, dass sie aus deiner Fahrradkonfiguration gelöscht wird. Dies kann die Kompatibilität mit anderen Teilen beeinträchtigen.",
    virtualworkshop_remove_title: "Bist du sicher?",
    virtualworkshop_revert_btn: "Rückgängig machen",
    virtualworkshop_save_btn: "Fahrrad speichern",
    virtualworkshop_save_text: "Um dein Custom-Bike zu speichern, benötigen wir deine E-Mail-Adresse.",
    virtualworkshop_save_title: "E-Mail-Adresse eingeben",
    virtualworkshop_search_text: "Barcode eingeben oder nach Marke, Modell, Teilenummer etc. suchen",
    virtualworkshop_settings_bike_name: "Name des Fahrrads",
    virtualworkshop_settings_email: "E-Mail",
    virtualworkshop_settings_id: "Bike Matrix ID",
    virtualworkshop_settings_share_id: "Geteilte ID",
    virtualworkshop_shared_icon: "Mit dir geteilt",
    virtualworkshop_swap_btn: "Komponente tauschen",
    virtualworkshop_title: "Virtuelle Werkstatt",
    virtualworkshop_unsaved_changes: "Ungespeicherte Änderungen betrachten",
    virtualworkshop_wheels_tyres: "Laufräder & Reifen",
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
    checksku_message_noproductfound: "Es konnte kein Teil mit der angegebenen SKU-/Teile-Nr. oder dem Barcode gefunden werden",
    checksku_message_notcompatible: "Nicht kompatibel",
    checksku_warning_unabletoperformcheck: "Es konnte keine Prüfung der Kompatibilität durchgeführt werden. Die Kompatibilität muss persönlich überprüft werden."
  }
}, Up = {
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
    bikeselector_home_add_a_bike: "Aggiungi una bici qui sotto per iniziare...",
    bikeselector_home_add_btn: "Aggiungi una bici",
    bikeselector_home_browse_btn: "Sfoglia compatibilità",
    bikeselector_home_close_btn: "Chiudi",
    bikeselector_home_empty: "La tua Bike Lounge è vuota!",
    bikeselector_home_footer_message: "I produttori delle bici possono modificare le specifiche senza preavviso. Eventuali differenze rispetto alle specifiche di serie possono condizionare la compatibilità.",
    bikeselector_home_title: "Le mie bici",
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
    cancel: "Cancella",
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
    productcheck_nobikeselected_label: "Controlla compatibilità",
    productcheck_nobikeselected_message: "Aggiungi la tua bici per verificare se questo componente è idoneo",
    productcheck_questionmark: "?",
    save: "Salva",
    share: "Condividi",
    virtualworkshop_add_bike_text: "Il tuo ID Bike Matrix può essere trovato nella pagina Impostazioni all'interno dell'Officina virtuale",
    virtualworkshop_bm_id_text: "Puoi utilizzare l'ID Bike Matrix, presente nella sezione delle impostazioni dell'Officina virtuale, oppure l'ID condiviso con te da qualcun altro.",
    virtualworkshop_bom_title: "Elenco materiali",
    virtualworkshop_build_text: "Dettagli configurazione",
    virtualworkshop_cockpit: "Cockpit",
    virtualworkshop_disclaimer: "Aggiornando l'allestimento delle proprie bici, l'utente si assume la piena responsabilità di verificare che i componenti siano corretti, consapevole del fatto che eventuali differenze possono condizionare la compatibilità.",
    virtualworkshop_drivetrain: "Trasmissione",
    virtualworkshop_e_drive: "eDrive",
    virtualworkshop_enter_button: "Accedi all'Officina virtuale",
    virtualworkshop_frame_fork: "Telaio e forcella",
    virtualworkshop_intro_text: "Aggiorna la configurazione della tua bici con nuovi componenti e salvala fornendo un indirizzo email. Visualizza le configurazioni condivise e accedi agli ID delle tue bici",
    virtualworkshop_other_parts: "Altre parti",
    virtualworkshop_remove_btn: "Rimuovi componente",
    virtualworkshop_remove_subtitle: "Rimuovendo un componente, verrà eliminato dalla configurazione della tua bici. Ciò può condizionare la compatibilità con altre parti.",
    virtualworkshop_remove_title: "Confermi?",
    virtualworkshop_revert_btn: "Ripristina",
    virtualworkshop_save_btn: "Salva la bici",
    virtualworkshop_save_text: "Per poter memorizzare una bici personalizzata dobbiamo salvarla associandola al tuo indirizzo email",
    virtualworkshop_save_title: "Inserisci la tua email",
    virtualworkshop_search_text: "Inserisci il codice a barre o cerca per marca, modello, codice prodotto...",
    virtualworkshop_settings_bike_name: "Nome della bici",
    virtualworkshop_settings_email: "Email",
    virtualworkshop_settings_id: "ID Bike Matrix",
    virtualworkshop_settings_share_id: "Condividi ID",
    virtualworkshop_shared_icon: "Condiviso con te",
    virtualworkshop_swap_btn: "Sostituisci il componente",
    virtualworkshop_title: "Officina virtuale",
    virtualworkshop_unsaved_changes: "Visualizza le modifiche non salvate",
    virtualworkshop_wheels_tyres: "Ruote e pneumatici",
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
}, $p = {
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
    bikeselector_home_add_a_bike: "Voeg hieronder een fiets toe om te beginnen...",
    bikeselector_home_add_btn: "Fiets toevoegen",
    bikeselector_home_browse_btn: "Compatibiliteit bekijken",
    bikeselector_home_close_btn: "Sluiten",
    bikeselector_home_empty: "Uw fietsenrek is leeg!",
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
    cancel: "Annuleren",
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
    productcheck_nobikeselected_label: "Compatibiliteit controleren",
    productcheck_nobikeselected_message: "Voeg uw fiets toe om te controleren of dit onderdeel erop past",
    productcheck_questionmark: "?",
    save: "Opslaan",
    share: "Delen",
    virtualworkshop_add_bike_text: "Uw Bike Matrix-ID vindt u op de pagina Instellingen van de Virtuele werkplaats.",
    virtualworkshop_bm_id_text: "U kunt uw Bike Matrix-ID gebruiken (die vindt u in de Instellingen van de Virtuele werkplaats) of een Deel-ID die u van iemand anders heeft gekregen.",
    virtualworkshop_bom_title: "Stuklijst",
    virtualworkshop_build_text: "Montagedetails",
    virtualworkshop_cockpit: "Cockpit",
    virtualworkshop_disclaimer: "Door gegevens voor een fiets aan te passen, aanvaardt de gebruiker de volledige verantwoordelijkheid om de juiste onderdelen te selecteren, in de wetenschap dat wijzigingen gevolgen hebben voor de compatibiliteit.",
    virtualworkshop_drivetrain: "Aandrijving",
    virtualworkshop_e_drive: "Elektrische aandrijving",
    virtualworkshop_enter_button: "Virtuele werkplaats openen",
    virtualworkshop_frame_fork: "Frame en voorvork",
    virtualworkshop_intro_text: "Pas uw fietsmontage aan met nieuwe onderdelen en sla uw fiets op door een e-mailadres in te voeren. Bekijk gedeelde fietsmontages en vindt uw fiets-ID's",
    virtualworkshop_other_parts: "Andere onderdelen",
    virtualworkshop_remove_btn: "Onderdeel verwijderen",
    virtualworkshop_remove_subtitle: "Als u een onderdeel verwijdert, wordt het uit uw fietsmontage gehaald. Dit kan gevolgen hebben voor de compatibiliteit van andere onderdelen.",
    virtualworkshop_remove_title: "Weet u het zeker?",
    virtualworkshop_revert_btn: "Terugdraaien",
    virtualworkshop_save_btn: "Fiets opslaan",
    virtualworkshop_save_text: "We hebben uw e-mailadres nodig om uw aangepaste fiets op te slaan.",
    virtualworkshop_save_title: "Voer uw e-mailadres in",
    virtualworkshop_search_text: "Voer barcode in of zoek op merk, model, onderdeelnummer...",
    virtualworkshop_settings_bike_name: "Naam fiets",
    virtualworkshop_settings_email: "E-mailadres",
    virtualworkshop_settings_id: "Bike Matrix-ID",
    virtualworkshop_settings_share_id: "Deel-ID",
    virtualworkshop_shared_icon: "Met u gedeeld",
    virtualworkshop_swap_btn: "Onderdeel vervangen",
    virtualworkshop_title: "Virtuele werkplaats",
    virtualworkshop_unsaved_changes: "Niet-opgeslagen wijzigingen bekijken",
    virtualworkshop_wheels_tyres: "Wielen en banden",
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
}, Hp = {
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
    bikeselector_home_add_a_bike: "Ajoutez un vélo ci-dessous pour démarrer...",
    bikeselector_home_add_btn: "Ajouter un vélo",
    bikeselector_home_browse_btn: "Parcourir les compatibilités",
    bikeselector_home_close_btn: "Fermer",
    bikeselector_home_empty: "L’espace Mes vélos est vide !",
    bikeselector_home_footer_message: "Les fabricants de vélo peuvent changer les caractéristiques des vélos sans préavis. Les différences par rapport aux spécifications d’origine peuvent avoir un impact sur les résultats de compatibilité.",
    bikeselector_home_title: "Mes vélos",
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
    cancel: "Annuler",
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
    productcheck_nobikeselected_label: "Vérifier la compatibilité",
    productcheck_nobikeselected_message: "Ajoutez votre vélo pour vérifier si ce composant est compatible",
    productcheck_questionmark: "?",
    save: "Enregistrer",
    share: "Partager",
    virtualworkshop_add_bike_text: "Votre identificateur Bike Matrix peut être trouvé dans la page de configuration de votre Atelier virtuel",
    virtualworkshop_bm_id_text: "Vous pouvez utiliser l’identificateur Bike Matrix qui se trouve dans la page de configuration de votre Atelier virtuel, ou un identificateur de partage qui vous a été donné par quelqu’un d’autre.",
    virtualworkshop_bom_title: "Liste des pièces",
    virtualworkshop_build_text: "Détails de configuration",
    virtualworkshop_cockpit: "Poste de pilotage",
    virtualworkshop_disclaimer: "Lors de l’actualisation de la configuration de son vélo, la personne utilisatrice doit s’assurer que les composants sont corrects, sachant que les modifications affecteront les résultats de compatibilité.",
    virtualworkshop_drivetrain: "Groupe de transmission",
    virtualworkshop_e_drive: "Transmission électrique",
    virtualworkshop_enter_button: "Entrer dans l’Atelier virtuel",
    virtualworkshop_frame_fork: "Cadre et fourche",
    virtualworkshop_intro_text: "Actualisez votre configuration de vélo avec de nouveaux composants et enregistrez votre vélo en fournissant une adresse e-mail. Voir les configurations de vélo partagées et accéder aux identificateurs de vos vélos",
    virtualworkshop_other_parts: "Autres pièces",
    virtualworkshop_remove_btn: "Retirer le composant",
    virtualworkshop_remove_subtitle: "Retirer un composant le supprimera de la configuration de votre vélo. Cela peut affecter la compatibilité avec d’autres pièces.",
    virtualworkshop_remove_title: "Êtes-vous sûr·e ?",
    virtualworkshop_revert_btn: "Rétablir",
    virtualworkshop_save_btn: "Sauvegarder le vélo",
    virtualworkshop_save_text: "Afin de sauvegarder votre vélo personnalisé, nous devons l’enregistrer avec votre adresse e-mail",
    virtualworkshop_save_title: "Saisir votre e-mail",
    virtualworkshop_search_text: "Saisir un code-barre ou chercher par marque, modèle, numéro de pièce...",
    virtualworkshop_settings_bike_name: "Nom du vélo",
    virtualworkshop_settings_email: "Adresse e-mail",
    virtualworkshop_settings_id: "Identificateur Bike Matrix",
    virtualworkshop_settings_share_id: "Identificateur de partage",
    virtualworkshop_shared_icon: "Partagé avec vous",
    virtualworkshop_swap_btn: "Échanger le composant",
    virtualworkshop_title: "Atelier virtuel",
    virtualworkshop_unsaved_changes: "Voir les changements non sauvegardés",
    virtualworkshop_wheels_tyres: "Roues et pneus",
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
}, Kp = {
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
    bikeselector_home_add_a_bike: "Añade una bicicleta a continuación para empezar.",
    bikeselector_home_add_btn: "Añadir una bicicleta",
    bikeselector_home_browse_btn: "Ver compatibilidad",
    bikeselector_home_close_btn: "Cerrar",
    bikeselector_home_empty: "¡Tu rincón ciclista está vacío!",
    bikeselector_home_footer_message: "Los fabricantes pueden modificar la versión de la bicicleta sin previo aviso. Las diferencias con la versión de las unidades en existencias pueden afectar a la compatibilidad.",
    bikeselector_home_title: "Mi rincón ciclista",
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
    cancel: "Cancelar",
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
    productcheck_nobikeselected_label: "Comprobar compatibilidad",
    productcheck_nobikeselected_message: "Quieres añadir la bicicleta para comprobar si este componente es adecuado",
    productcheck_questionmark: "?",
    save: "Guardar",
    share: "Compartir",
    virtualworkshop_add_bike_text: "Puedes consultar tu ID de Bike Matrix en la página Ajustes del Taller virtual",
    virtualworkshop_bm_id_text: "Puedes usar el ID de Bike Matrix (que está disponible en la sección Ajustes del Taller virtual) o el ID de uso compartido que alguien haya compartido contigo.",
    virtualworkshop_bom_title: "Lista de materiales",
    virtualworkshop_build_text: "Detalles de la configuración",
    virtualworkshop_cockpit: "Cockpit",
    virtualworkshop_disclaimer: "Siempre que se modifique el registro de la bicicleta, el usuario será el responsable final de comprobar que los componentes sean correctos, y deberá tener en cuenta que cualquier cambio que realice afectará a la compatibilidad.",
    virtualworkshop_drivetrain: "Sistema de transmisión",
    virtualworkshop_e_drive: "eDrive",
    virtualworkshop_enter_button: "Acceder al Taller virtual",
    virtualworkshop_frame_fork: "Cuadro y horquilla",
    virtualworkshop_intro_text: "Renueva la configuración de tu bicicleta con nuevos componentes e indica una dirección de correo electrónico para guardarla. Consulta las configuraciones de bicicleta compartidas contigo y accede a los ID de tus bicicletas.",
    virtualworkshop_other_parts: "Otros componentes",
    virtualworkshop_remove_btn: "Quitar componente",
    virtualworkshop_remove_subtitle: "Si quitas un componente, se eliminará de la configuración de la bicicleta. Esta acción puede afectar a la compatibilidad de otros componentes.",
    virtualworkshop_remove_title: "¿Seguro?",
    virtualworkshop_revert_btn: "Deshacer",
    virtualworkshop_save_btn: "Guardar bicicleta",
    virtualworkshop_save_text: "Para guardar tu bicicleta personalizada, debemos vincularla con tu dirección de correo electrónico",
    virtualworkshop_save_title: "Introduce tu correo electrónico",
    virtualworkshop_search_text: "Introduce un código de barras o busca por marca, modelo, número de referencia...",
    virtualworkshop_settings_bike_name: "Nombre de la bicicleta",
    virtualworkshop_settings_email: "Correo electrónico",
    virtualworkshop_settings_id: "ID de Bike Matrix",
    virtualworkshop_settings_share_id: "ID de uso compartido",
    virtualworkshop_shared_icon: "Compartido contigo",
    virtualworkshop_swap_btn: "Cambiar componente",
    virtualworkshop_title: "Taller virtual",
    virtualworkshop_unsaved_changes: "Ver los cambios sin guardar",
    virtualworkshop_wheels_tyres: "Ruedas y neumáticos",
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
}, Gp = {
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
    bikeselector_home_add_a_bike: "Lisää pyörä aloittaaksesi",
    bikeselector_home_add_btn: "Lisää pyörä",
    bikeselector_home_browse_btn: "Selaa yhteensopivuuksia",
    bikeselector_home_close_btn: "Sulje",
    bikeselector_home_empty: "Bike Lounge on tyhjä!",
    bikeselector_home_footer_message: "Pyörän valmistaja voi muuttaa pyörän teknisiä tietoja ilman erillistä ilmoitusta. Teknisten tietojen erot voivat vaikuttaa yhteensopivuustuloksiin.",
    bikeselector_home_title: "Minun Bike Lounge",
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
    cancel: "Peruuta",
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
    productcheck_nobikeselected_label: "Tarkista yhteensopivuus",
    productcheck_nobikeselected_message: "Lisää pyörä tarkistaaksesi yhteensopivuus",
    productcheck_questionmark: "?",
    save: "Tallenna",
    share: "Jaa",
    virtualworkshop_add_bike_text: "Sinun Bike Matrix ID löytyy Virtual Workshopin asetukset -sivuilta",
    virtualworkshop_bm_id_text: "Voit käyttää Bike Matrix ID:tä, joka löytyy Virtual Workshopin asetukset -sivuilta tai Share Id:tä, joka on jaettu sinulle toisen henkilön toimesta.",
    virtualworkshop_bom_title: "Materiaaliluoettelo",
    virtualworkshop_build_text: "Kokoonpanotiedot",
    virtualworkshop_cockpit: "Ohjaamo",
    virtualworkshop_disclaimer: "Päivitessään pyörän tietoja käyttäjä on vastuussa siitä, että komponentit ovat oikein merkitty ymmärtäen, että muutokset vaikuttavat yhteensopivuustuloksiin.",
    virtualworkshop_drivetrain: "Voimansiirto",
    virtualworkshop_e_drive: "eDrive",
    virtualworkshop_enter_button: "Virtuaaliseen Workshopiin",
    virtualworkshop_frame_fork: "Runko & etuhaarukka",
    virtualworkshop_intro_text: "Päivitä pyörääsi uusilla komponenteilla ja tallenna pyöräsi antamalla sähköpostiosoitteesi. Tarkastele jaettuja pyöriä ja pääse käsiksi pyöräsi tunnuksiin.",
    virtualworkshop_other_parts: "Muut osat",
    virtualworkshop_remove_btn: "Poista komponentti",
    virtualworkshop_remove_subtitle: "Komponentin poistaminen poistaa sen pyöräsi kokoonpanosta. Tämä voi vaikuttaa muiden osien yhteensopivuuteen.",
    virtualworkshop_remove_title: "Oletko varma?",
    virtualworkshop_revert_btn: "Palaa",
    virtualworkshop_save_btn: "Tallenna pyörä",
    virtualworkshop_save_text: "Voidaksemme tallentaa kustomoidun pyöräsi, se on tallennettava sähköpostiosoitteellasi",
    virtualworkshop_save_title: "Syötä sähköpostiosoitteesi",
    virtualworkshop_search_text: "Syötä viivakoodi tai hae tuotemerkillä, mallilla, osanumerolla...",
    virtualworkshop_settings_bike_name: "Pyörän nimi",
    virtualworkshop_settings_email: "Sähköpostiosoite",
    virtualworkshop_settings_id: "Bike Matrix ID",
    virtualworkshop_settings_share_id: "Jaa ID",
    virtualworkshop_shared_icon: "Jaettu sinulle",
    virtualworkshop_swap_btn: "Vaihda komponenttia",
    virtualworkshop_title: "Virtuaalinen Workshop",
    virtualworkshop_unsaved_changes: "Katsele tallentamattomia muutoksia",
    virtualworkshop_wheels_tyres: "Vanteet & renkaat",
    category_bike: "Pyörä",
    category_bottombracket: "Keskiö",
    category_bottombracketpart: "Keskiön osa",
    category_brakeadapter: "Jarruadapteri",
    category_brakeadapterpart: "Jarruadapterin osa",
    category_brakecaliper: "Jarrusatula",
    category_brakecaliperpart: "Jarrusatulan osa",
    category_brakecaliperservicekit: "Jarrusatulan huoltosarja",
    category_brakelever: "Jarrukahva",
    category_brakeleverpart: "Jarrukahvan osa",
    category_brakeleverservicekit: "Jarrukahvan huoltosarja",
    category_brakepads: "Jarrupalat",
    category_brakerotor: "Jarrulevy",
    category_brakerotorpart: "Jarrulevyn osa",
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
    category_crankpart: "Kammen osa",
    category_crankset: "Kampisarja",
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
    category_shiftadapter: "Vaihtajan adapteri",
    category_shiftadapterpart: "Vaihtajan adapterin osa",
    category_shiftbrakecombo: "Vaihdevipu-jarrukahva yhdistelmä",
    category_shiftbrakecombopart: "Vaihdevipu-jarrukahva yhdistelmän osa",
    category_shifter: "Vaihdevipu",
    category_shifterpart: "Vaihdevivun osa",
    category_spoke: "Pinna",
    category_stem: "Ohjainkannatin",
    category_stempart: "Ohjainkannattimen osa",
    category_tube: "Sisärengas",
    category_tyre: "Ulkorengas",
    category_wheelset: "Kiekkosarja",
    checksku_message_nobikefound: "Pöyrää ei löytynyt annetulla Bike Key:llä.",
    checksku_message_nocompatibilityinfo: "Ei yhteensopivuus tietoja",
    checksku_message_noproductfound: "Osaa ei löytynyt annetulla SKU:lla/Viivakoodilla/Osanumerolla",
    checksku_message_notcompatible: "Ei yhteensopiva",
    checksku_warning_unabletoperformcheck: "Yhteensopivuuden tarkistusta ei voitu suorittaa. Pyydämme tarkistamaan yhteensopivuuden manuaalisesti."
  }
}, Wp = {
  de: jp,
  it: Up,
  nl: $p,
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
      cancel: "Cancel",
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
      productcheck_nobikeselected_label: "Check Compatiblity",
      productcheck_nobikeselected_message: "Add your ride to check if this part fits",
      productcheck_questionmark: "?",
      save: "Save",
      share: "Share",
      virtualworkshop_add_bike_text: "Your Bike Matrix ID can be found in the Settings page inside the Virtual Workshop",
      virtualworkshop_bm_id_text: "You can use either the Bike Matrix ID—found in the settings section of the Virtual Workshop—or Share ID which has been shared with you by someone else.",
      virtualworkshop_bom_title: "Bill Of Materials",
      virtualworkshop_build_text: "Build details",
      virtualworkshop_cockpit: "Cockpit",
      virtualworkshop_disclaimer: "When updating their bike record, the user takes full responsibility for ensuring components are correct, understanding that changes will affect compatibility results.",
      virtualworkshop_drivetrain: "Drivetrain",
      virtualworkshop_e_drive: "eDrive",
      virtualworkshop_enter_button: "Enter Virtual Workshop",
      virtualworkshop_frame_fork: "Frame & Fork",
      virtualworkshop_intro_text: "Update your bike build with new components and save your bike by providing an email address. View shared bike builds and access your bike IDs",
      virtualworkshop_other_parts: "Other Parts",
      virtualworkshop_remove_btn: "Remove Component",
      virtualworkshop_remove_subtitle: "Removing a component will delete it from your bike build. This can affect compatibility for other parts.",
      virtualworkshop_remove_title: "Are you sure?",
      virtualworkshop_revert_btn: "Revert",
      virtualworkshop_save_btn: "Save Bike",
      virtualworkshop_save_text: "In order to store your custom bike we need to save it against your email address",
      virtualworkshop_save_title: "Enter your email",
      virtualworkshop_search_text: "Enter Barcode or Search by Brand, Model, Part Number...",
      virtualworkshop_settings_bike_name: "Bike Name",
      virtualworkshop_settings_email: "Email",
      virtualworkshop_settings_id: "Bike Matrix ID",
      virtualworkshop_settings_share_id: "Share ID",
      virtualworkshop_shared_icon: "Shared with you",
      virtualworkshop_swap_btn: "Swap Component",
      virtualworkshop_title: "Virtual Workshop",
      virtualworkshop_unsaved_changes: "View unsaved changes",
      virtualworkshop_wheels_tyres: "Wheels & Tyres",
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
  fr: Hp,
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
      cancel: "Cancel",
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
      productcheck_nobikeselected_label: "Check Compatiblity",
      productcheck_nobikeselected_message: "Add your ride to check if this part fits",
      productcheck_questionmark: "?",
      save: "Save",
      share: "Share",
      virtualworkshop_add_bike_text: "Your Bike Matrix ID can be found in the Settings page inside the Virtual Workshop",
      virtualworkshop_bm_id_text: "You can use either the Bike Matrix ID—found in the settings section of the Virtual Workshop—or Share ID which has been shared with you by someone else.",
      virtualworkshop_bom_title: "Bill Of Materials",
      virtualworkshop_build_text: "Build details",
      virtualworkshop_cockpit: "Cockpit",
      virtualworkshop_disclaimer: "When updating their bike record, the user takes full responsibility for ensuring components are correct, understanding that changes will affect compatibility results.",
      virtualworkshop_drivetrain: "Drivetrain",
      virtualworkshop_e_drive: "eDrive",
      virtualworkshop_enter_button: "Enter Virtual Workshop",
      virtualworkshop_frame_fork: "Frame & Fork",
      virtualworkshop_intro_text: "Update your bike build with new components and save your bike by providing an email address. View shared bike builds and access your bike IDs",
      virtualworkshop_other_parts: "Other Parts",
      virtualworkshop_remove_btn: "Remove Component",
      virtualworkshop_remove_subtitle: "Removing a component will delete it from your bike build. This can affect compatibility for other parts.",
      virtualworkshop_remove_title: "Are you sure?",
      virtualworkshop_revert_btn: "Revert",
      virtualworkshop_save_btn: "Save Bike",
      virtualworkshop_save_text: "In order to store your custom bike we need to save it against your email address",
      virtualworkshop_save_title: "Enter your email",
      virtualworkshop_search_text: "Enter Barcode or Search by Brand, Model, Part Number...",
      virtualworkshop_settings_bike_name: "Bike Name",
      virtualworkshop_settings_email: "Email",
      virtualworkshop_settings_id: "Bike Matrix ID",
      virtualworkshop_settings_share_id: "Share ID",
      virtualworkshop_shared_icon: "Shared with you",
      virtualworkshop_swap_btn: "Swap Component",
      virtualworkshop_title: "Virtual Workshop",
      virtualworkshop_unsaved_changes: "View unsaved changes",
      virtualworkshop_wheels_tyres: "Wheels & Tyres",
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
  es: Kp,
  fi: Gp
}, {
  slice: Yp,
  forEach: Jp
} = [];
function Zp(i) {
  return Jp.call(Yp.call(arguments, 1), (e) => {
    if (e)
      for (const t in e)
        i[t] === void 0 && (i[t] = e[t]);
  }), i;
}
const mn = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Xp = (i, e, t) => {
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
    if (!mn.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!mn.test(r.path))
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
}, bn = {
  create(i, e, t, r) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    t && (a.expires = /* @__PURE__ */ new Date(), a.expires.setTime(a.expires.getTime() + t * 60 * 1e3)), r && (a.domain = r), document.cookie = Xp(i, encodeURIComponent(e), a);
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
var Qp = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(i) {
    let {
      lookupCookie: e
    } = i;
    if (e && typeof document < "u")
      return bn.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(i, e) {
    let {
      lookupCookie: t,
      cookieMinutes: r,
      cookieDomain: a,
      cookieOptions: o
    } = e;
    t && typeof document < "u" && bn.create(t, i, r, a, o);
  }
}, e2 = {
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
let mr = null;
const _n = () => {
  if (mr !== null)
    return mr;
  try {
    mr = window !== "undefined" && window.localStorage !== null;
    const i = "i18next.translate.boo";
    window.localStorage.setItem(i, "foo"), window.localStorage.removeItem(i);
  } catch {
    mr = !1;
  }
  return mr;
};
var t2 = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(i) {
    let {
      lookupLocalStorage: e
    } = i;
    if (e && _n())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(i, e) {
    let {
      lookupLocalStorage: t
    } = e;
    t && _n() && window.localStorage.setItem(t, i);
  }
};
let br = null;
const yn = () => {
  if (br !== null)
    return br;
  try {
    br = window !== "undefined" && window.sessionStorage !== null;
    const i = "i18next.translate.boo";
    window.sessionStorage.setItem(i, "foo"), window.sessionStorage.removeItem(i);
  } catch {
    br = !1;
  }
  return br;
};
var r2 = {
  name: "sessionStorage",
  lookup(i) {
    let {
      lookupSessionStorage: e
    } = i;
    if (e && yn())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(i, e) {
    let {
      lookupSessionStorage: t
    } = e;
    t && yn() && window.sessionStorage.setItem(t, i);
  }
}, i2 = {
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
}, a2 = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(i) {
    let {
      htmlTag: e
    } = i, t;
    const r = e || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, o2 = {
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
}, n2 = {
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
function s2() {
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
class gl {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e || {
      languageUtils: {}
    }, this.options = Zp(t, this.options || {}, s2()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (a) => a.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(Qp), this.addDetector(e2), this.addDetector(t2), this.addDetector(r2), this.addDetector(i2), this.addDetector(a2), this.addDetector(o2), this.addDetector(n2);
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
gl.type = "languageDetector";
ve.use(tu).use(gl).init({
  debug: !1,
  resources: Wp,
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
const l2 = typeof window < "u";
function St(i, e, t = [], r = null) {
  Al((o) => na.value ? d(i, {
    ...o
  }) : d(O, {}), e, t, r);
}
function u2() {
  St(tp, "bikematrix-bikeselector", [], {
    shadow: !0
  }), St(ip, "bikematrix-productresult", ["data-sku"], {
    shadow: !0
  }), St(sp, "bikematrix-collectionresult", ["data-product-id", "data-product-skus"], {
    shadow: !0
  }), St(dl, "bikematrix-compatibilitylabel", ["data-type"], {
    shadow: !0
  }), St(gp, "bikematrix-compatiblelist", ["data-title"]), St(_p, "bikematrix-bikeselectorbanner", ["data-title", "data-color", "data-full-width", "data-font-color", "data-show"], {
    shadow: !0
  }), St(pl, "bikematrix-bikon", ["data-color"], {
    shadow: !0
  });
}
function c2() {
  if (!l2)
    return null;
  const i = Yu.getInstance(), e = {
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
    updateSku: (t) => i.updateSku(t)
  };
  return typeof process < "u" && process.env.NODE_ENV === "development" && (e.core = i), window.BikeMatrix = e, u2(), document.currentScript && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => e.init()) : e.init()), e;
}
const d2 = c2();
export {
  d2 as default
};
