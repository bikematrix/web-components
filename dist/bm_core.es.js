var Fa, fe, U2, V2, Ri, Ep, H2, Wu, $2, _a = {}, j2 = [], y5 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, es = Array.isArray;
function Wr(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function K2(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function Y(n, e, t) {
  var i, a, s, u = {};
  for (s in e)
    s == "key" ? i = e[s] : s == "ref" ? a = e[s] : u[s] = e[s];
  if (arguments.length > 2 && (u.children = arguments.length > 3 ? Fa.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (s in n.defaultProps)
      u[s] === void 0 && (u[s] = n.defaultProps[s]);
  return ca(n, u, i, a, null);
}
function ca(n, e, t, i, a) {
  var s = { type: n, props: e, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: a ?? ++U2, __i: -1, __u: 0 };
  return a == null && fe.vnode != null && fe.vnode(s), s;
}
function ie(n) {
  return n.children;
}
function Er(n, e) {
  this.props = n, this.context = e;
}
function yn(n, e) {
  if (e == null)
    return n.__ ? yn(n.__, n.__i + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? yn(n) : null;
}
function W2(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return W2(n);
  }
}
function Gu(n) {
  (!n.__d && (n.__d = !0) && Ri.push(n) && !No.__r++ || Ep !== fe.debounceRendering) && ((Ep = fe.debounceRendering) || H2)(No);
}
function No() {
  var n, e, t, i, a, s, u, c, d;
  for (Ri.sort(Wu); n = Ri.shift(); )
    n.__d && (e = Ri.length, i = void 0, s = (a = (t = n).__v).__e, c = [], d = [], (u = t.__P) && ((i = Wr({}, a)).__v = a.__v + 1, fe.vnode && fe.vnode(i), yl(u, i, a, t.__n, u.ownerSVGElement !== void 0, 32 & a.__u ? [s] : null, c, s ?? yn(a), !!(32 & a.__u), d), i.__v = a.__v, i.__.__k[i.__i] = i, J2(c, i, d), i.__e != s && W2(i)), Ri.length > e && Ri.sort(Wu));
  No.__r = 0;
}
function G2(n, e, t, i, a, s, u, c, d, p, h) {
  var m, b, v, C, k, x = i && i.__k || j2, S = e.length;
  for (t.__d = d, k5(t, e, x), d = t.__d, m = 0; m < S; m++)
    (v = t.__k[m]) != null && typeof v != "boolean" && typeof v != "function" && (b = v.__i === -1 ? _a : x[v.__i] || _a, v.__i = m, yl(n, v, b, a, s, u, c, d, p, h), C = v.__e, v.ref && b.ref != v.ref && (b.ref && kl(b.ref, null, v), h.push(v.ref, v.__c || C, v)), k == null && C != null && (k = C), 65536 & v.__u || b.__k === v.__k ? d = Y2(v, d, n) : typeof v.type == "function" && v.__d !== void 0 ? d = v.__d : C && (d = C.nextSibling), v.__d = void 0, v.__u &= -196609);
  t.__d = d, t.__e = k;
}
function k5(n, e, t) {
  var i, a, s, u, c, d = e.length, p = t.length, h = p, m = 0;
  for (n.__k = [], i = 0; i < d; i++)
    u = i + m, (a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" || typeof a == "function" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? ca(null, a, null, null, null) : es(a) ? ca(ie, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? ca(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null ? (a.__ = n, a.__b = n.__b + 1, c = w5(a, t, u, h), a.__i = c, s = null, c !== -1 && (h--, (s = t[c]) && (s.__u |= 131072)), s == null || s.__v === null ? (c == -1 && m--, typeof a.type != "function" && (a.__u |= 65536)) : c !== u && (c === u + 1 ? m++ : c > u ? h > d - u ? m += c - u : m-- : c < u ? c == u - 1 && (m = c - u) : m = 0, c !== i + m && (a.__u |= 65536))) : (s = t[u]) && s.key == null && s.__e && !(131072 & s.__u) && (s.__e == n.__d && (n.__d = yn(s)), Yu(s, s, !1), t[u] = null, h--);
  if (h)
    for (i = 0; i < p; i++)
      (s = t[i]) != null && !(131072 & s.__u) && (s.__e == n.__d && (n.__d = yn(s)), Yu(s, s));
}
function Y2(n, e, t) {
  var i, a;
  if (typeof n.type == "function") {
    for (i = n.__k, a = 0; i && a < i.length; a++)
      i[a] && (i[a].__ = n, e = Y2(i[a], e, t));
    return e;
  }
  n.__e != e && (t.insertBefore(n.__e, e || null), e = n.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function Oo(n, e) {
  return e = e || [], n == null || typeof n == "boolean" || (es(n) ? n.some(function(t) {
    Oo(t, e);
  }) : e.push(n)), e;
}
function w5(n, e, t, i) {
  var a = n.key, s = n.type, u = t - 1, c = t + 1, d = e[t];
  if (d === null || d && a == d.key && s === d.type && !(131072 & d.__u))
    return t;
  if (i > (d != null && !(131072 & d.__u) ? 1 : 0))
    for (; u >= 0 || c < e.length; ) {
      if (u >= 0) {
        if ((d = e[u]) && !(131072 & d.__u) && a == d.key && s === d.type)
          return u;
        u--;
      }
      if (c < e.length) {
        if ((d = e[c]) && !(131072 & d.__u) && a == d.key && s === d.type)
          return c;
        c++;
      }
    }
  return -1;
}
function Bp(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t ?? "") : n[e] = t == null ? "" : typeof t != "number" || y5.test(e) ? t : t + "px";
}
function Do(n, e, t, i, a) {
  var s;
  e:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof i == "string" && (n.style.cssText = i = ""), i)
          for (e in i)
            t && e in t || Bp(n.style, e, "");
        if (t)
          for (e in t)
            i && t[e] === i[e] || Bp(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + s] = t, t ? i ? t.u = i.u : (t.u = Date.now(), n.addEventListener(e, s ? Lp : Fp, s)) : n.removeEventListener(e, s ? Lp : Fp, s);
    else {
      if (a)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in n)
        try {
          n[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? n.removeAttribute(e) : n.setAttribute(e, t));
    }
}
function Fp(n) {
  if (this.l) {
    var e = this.l[n.type + !1];
    if (n.t) {
      if (n.t <= e.u)
        return;
    } else
      n.t = Date.now();
    return e(fe.event ? fe.event(n) : n);
  }
}
function Lp(n) {
  if (this.l)
    return this.l[n.type + !0](fe.event ? fe.event(n) : n);
}
function yl(n, e, t, i, a, s, u, c, d, p) {
  var h, m, b, v, C, k, x, S, A, F, E, L, z, P, I, N = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & t.__u && (d = !!(32 & t.__u), s = [c = e.__e = t.__e]), (h = fe.__b) && h(e);
  e:
    if (typeof N == "function")
      try {
        if (S = e.props, A = (h = N.contextType) && i[h.__c], F = h ? A ? A.props.value : h.__ : i, t.__c ? x = (m = e.__c = t.__c).__ = m.__E : ("prototype" in N && N.prototype.render ? e.__c = m = new N(S, F) : (e.__c = m = new Er(S, F), m.constructor = N, m.render = C5), A && A.sub(m), m.props = S, m.state || (m.state = {}), m.context = F, m.__n = i, b = m.__d = !0, m.__h = [], m._sb = []), m.__s == null && (m.__s = m.state), N.getDerivedStateFromProps != null && (m.__s == m.state && (m.__s = Wr({}, m.__s)), Wr(m.__s, N.getDerivedStateFromProps(S, m.__s))), v = m.props, C = m.state, m.__v = e, b)
          N.getDerivedStateFromProps == null && m.componentWillMount != null && m.componentWillMount(), m.componentDidMount != null && m.__h.push(m.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && S !== v && m.componentWillReceiveProps != null && m.componentWillReceiveProps(S, F), !m.__e && (m.shouldComponentUpdate != null && m.shouldComponentUpdate(S, m.__s, F) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (m.props = S, m.state = m.__s, m.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(K) {
              K && (K.__ = e);
            }), E = 0; E < m._sb.length; E++)
              m.__h.push(m._sb[E]);
            m._sb = [], m.__h.length && u.push(m);
            break e;
          }
          m.componentWillUpdate != null && m.componentWillUpdate(S, m.__s, F), m.componentDidUpdate != null && m.__h.push(function() {
            m.componentDidUpdate(v, C, k);
          });
        }
        if (m.context = F, m.props = S, m.__P = n, m.__e = !1, L = fe.__r, z = 0, "prototype" in N && N.prototype.render) {
          for (m.state = m.__s, m.__d = !1, L && L(e), h = m.render(m.props, m.state, m.context), P = 0; P < m._sb.length; P++)
            m.__h.push(m._sb[P]);
          m._sb = [];
        } else
          do
            m.__d = !1, L && L(e), h = m.render(m.props, m.state, m.context), m.state = m.__s;
          while (m.__d && ++z < 25);
        m.state = m.__s, m.getChildContext != null && (i = Wr(Wr({}, i), m.getChildContext())), b || m.getSnapshotBeforeUpdate == null || (k = m.getSnapshotBeforeUpdate(v, C)), G2(n, es(I = h != null && h.type === ie && h.key == null ? h.props.children : h) ? I : [I], e, t, i, a, s, u, c, d, p), m.base = e.__e, e.__u &= -161, m.__h.length && u.push(m), x && (m.__E = m.__ = null);
      } catch (K) {
        e.__v = null, d || s != null ? (e.__e = c, e.__u |= d ? 160 : 32, s[s.indexOf(c)] = null) : (e.__e = t.__e, e.__k = t.__k), fe.__e(K, e, t);
      }
    else
      s == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = x5(t.__e, e, t, i, a, s, u, d, p);
  (h = fe.diffed) && h(e);
}
function J2(n, e, t) {
  e.__d = void 0;
  for (var i = 0; i < t.length; i++)
    kl(t[i], t[++i], t[++i]);
  fe.__c && fe.__c(e, n), n.some(function(a) {
    try {
      n = a.__h, a.__h = [], n.some(function(s) {
        s.call(a);
      });
    } catch (s) {
      fe.__e(s, a.__v);
    }
  });
}
function x5(n, e, t, i, a, s, u, c, d) {
  var p, h, m, b, v, C, k, x = t.props, S = e.props, A = e.type;
  if (A === "svg" && (a = !0), s != null) {
    for (p = 0; p < s.length; p++)
      if ((v = s[p]) && "setAttribute" in v == !!A && (A ? v.localName === A : v.nodeType === 3)) {
        n = v, s[p] = null;
        break;
      }
  }
  if (n == null) {
    if (A === null)
      return document.createTextNode(S);
    n = a ? document.createElementNS("http://www.w3.org/2000/svg", A) : document.createElement(A, S.is && S), s = null, c = !1;
  }
  if (A === null)
    x === S || c && n.data === S || (n.data = S);
  else {
    if (s = s && Fa.call(n.childNodes), x = t.props || _a, !c && s != null)
      for (x = {}, p = 0; p < n.attributes.length; p++)
        x[(v = n.attributes[p]).name] = v.value;
    for (p in x)
      v = x[p], p == "children" || (p == "dangerouslySetInnerHTML" ? m = v : p === "key" || p in S || Do(n, p, null, v, a));
    for (p in S)
      v = S[p], p == "children" ? b = v : p == "dangerouslySetInnerHTML" ? h = v : p == "value" ? C = v : p == "checked" ? k = v : p === "key" || c && typeof v != "function" || x[p] === v || Do(n, p, v, x[p], a);
    if (h)
      c || m && (h.__html === m.__html || h.__html === n.innerHTML) || (n.innerHTML = h.__html), e.__k = [];
    else if (m && (n.innerHTML = ""), G2(n, es(b) ? b : [b], e, t, i, a && A !== "foreignObject", s, u, s ? s[0] : t.__k && yn(t, 0), c, d), s != null)
      for (p = s.length; p--; )
        s[p] != null && K2(s[p]);
    c || (p = "value", C !== void 0 && (C !== n[p] || A === "progress" && !C || A === "option" && C !== x[p]) && Do(n, p, C, x[p], !1), p = "checked", k !== void 0 && k !== n[p] && Do(n, p, k, x[p], !1));
  }
  return n;
}
function kl(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (i) {
    fe.__e(i, t);
  }
}
function Yu(n, e, t) {
  var i, a;
  if (fe.unmount && fe.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || kl(i, null, e)), (i = n.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (s) {
        fe.__e(s, e);
      }
    i.base = i.__P = null, n.__c = void 0;
  }
  if (i = n.__k)
    for (a = 0; a < i.length; a++)
      i[a] && Yu(i[a], e, t || typeof n.type != "function");
  t || n.__e == null || K2(n.__e), n.__ = n.__e = n.__d = void 0;
}
function C5(n, e, t) {
  return this.constructor(n, t);
}
function ts(n, e, t) {
  var i, a, s, u;
  fe.__ && fe.__(n, e), a = (i = typeof t == "function") ? null : t && t.__k || e.__k, s = [], u = [], yl(e, n = (!i && t || e).__k = Y(ie, null, [n]), a || _a, _a, e.ownerSVGElement !== void 0, !i && t ? [t] : a ? null : e.firstChild ? Fa.call(e.childNodes) : null, s, !i && t ? t : a ? a.__e : e.firstChild, i, u), J2(s, n, u);
}
function Z2(n, e) {
  ts(n, e, Z2);
}
function X2(n, e, t) {
  var i, a, s, u, c = Wr({}, n.props);
  for (s in n.type && n.type.defaultProps && (u = n.type.defaultProps), e)
    s == "key" ? i = e[s] : s == "ref" ? a = e[s] : c[s] = e[s] === void 0 && u !== void 0 ? u[s] : e[s];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Fa.call(arguments, 2) : t), ca(n.type, c, i || n.key, a || n.ref, null);
}
function Q2(n, e) {
  var t = { __c: e = "__cC" + $2++, __: n, Consumer: function(i, a) {
    return i.children(a);
  }, Provider: function(i) {
    var a, s;
    return this.getChildContext || (a = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(u) {
      this.props.value !== u.value && a.some(function(c) {
        c.__e = !0, Gu(c);
      });
    }, this.sub = function(u) {
      a.push(u);
      var c = u.componentWillUnmount;
      u.componentWillUnmount = function() {
        a.splice(a.indexOf(u), 1), c && c.call(u);
      };
    }), i.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
Fa = j2.slice, fe = { __e: function(n, e, t, i) {
  for (var a, s, u; e = e.__; )
    if ((a = e.__c) && !a.__)
      try {
        if ((s = a.constructor) && s.getDerivedStateFromError != null && (a.setState(s.getDerivedStateFromError(n)), u = a.__d), a.componentDidCatch != null && (a.componentDidCatch(n, i || {}), u = a.__d), u)
          return a.__E = a;
      } catch (c) {
        n = c;
      }
  throw n;
} }, U2 = 0, V2 = function(n) {
  return n != null && n.constructor == null;
}, Er.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Wr({}, this.state), typeof n == "function" && (n = n(Wr({}, t), this.props)), n && Wr(t, n), n != null && this.__v && (e && this._sb.push(e), Gu(this));
}, Er.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Gu(this));
}, Er.prototype.render = ie, Ri = [], H2 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Wu = function(n, e) {
  return n.__v.__b - e.__v.__b;
}, No.__r = 0, $2 = 0;
function wl() {
  return (wl = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }).apply(this, arguments);
}
var D5 = ["context", "children"];
function A5(n) {
  this.getChildContext = function() {
    return n.context;
  };
  var e = n.children, t = function(i, a) {
    if (i == null)
      return {};
    var s, u, c = {}, d = Object.keys(i);
    for (u = 0; u < d.length; u++)
      a.indexOf(s = d[u]) >= 0 || (c[s] = i[s]);
    return c;
  }(n, D5);
  return X2(e, t);
}
function S5() {
  var n = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(n), this._vdom = Y(A5, wl({}, this._props, { context: n.detail.context }), function e(t, i) {
    if (t.nodeType === 3)
      return t.data;
    if (t.nodeType !== 1)
      return null;
    var a = [], s = {}, u = 0, c = t.attributes, d = t.childNodes;
    for (u = c.length; u--; )
      c[u].name !== "slot" && (s[c[u].name] = c[u].value, s[ef(c[u].name)] = c[u].value);
    for (u = d.length; u--; ) {
      var p = e(d[u], null), h = d[u].slot;
      h ? s[h] = Y(Tp, { name: h }, p) : a[u] = p;
    }
    var m = i ? Y(Tp, null, a) : a;
    return Y(i || t.nodeName.toLowerCase(), s, m);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Z2 : ts)(this._vdom, this._root);
}
function ef(n) {
  return n.replace(/-(\w)/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  });
}
function E5(n, e, t) {
  if (this._vdom) {
    var i = {};
    i[n] = t = t ?? void 0, i[ef(n)] = t, this._vdom = X2(this._vdom, i), ts(this._vdom, this._root);
  }
}
function B5() {
  ts(this._vdom = null, this._root);
}
function Tp(n, e) {
  var t = this;
  return Y("slot", wl({}, n, { ref: function(i) {
    i ? (t.ref = i, t._listener || (t._listener = function(a) {
      a.stopPropagation(), a.detail.context = e;
    }, i.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function F5(n, e, t, i) {
  function a() {
    var s = Reflect.construct(HTMLElement, [], a);
    return s._vdomComponent = n, s._root = i && i.shadow ? s.attachShadow({ mode: i.mode || "open" }) : s, s;
  }
  return (a.prototype = Object.create(HTMLElement.prototype)).constructor = a, a.prototype.connectedCallback = S5, a.prototype.attributeChangedCallback = E5, a.prototype.disconnectedCallback = B5, t = t || n.observedAttributes || Object.keys(n.propTypes || {}), a.observedAttributes = t, t.forEach(function(s) {
    Object.defineProperty(a.prototype, s, { get: function() {
      return this._vdom.props[s];
    }, set: function(u) {
      this._vdom ? this.attributeChangedCallback(s, null, u) : (this._props || (this._props = {}), this._props[s] = u, this.connectedCallback());
      var c = typeof u;
      u != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(s, u);
    } });
  }), customElements.define(e || n.tagName || n.displayName || n.name, a);
}
var Hi, Ve, Lu, Rp, ba = 0, tf = [], Lo = [], Qe = fe, Pp = Qe.__b, zp = Qe.__r, Np = Qe.diffed, Op = Qe.__c, Ip = Qe.unmount, qp = Qe.__;
function La(n, e) {
  Qe.__h && Qe.__h(Ve, n, ba || e), ba = 0;
  var t = Ve.__H || (Ve.__H = { __: [], __h: [] });
  return n >= t.__.length && t.__.push({ __V: Lo }), t.__[n];
}
function Q(n) {
  return ba = 1, L5(nf, n);
}
function L5(n, e, t) {
  var i = La(Hi++, 2);
  if (i.t = n, !i.__c && (i.__ = [t ? t(e) : nf(void 0, e), function(c) {
    var d = i.__N ? i.__N[0] : i.__[0], p = i.t(d, c);
    d !== p && (i.__N = [p, i.__[1]], i.__c.setState({}));
  }], i.__c = Ve, !Ve.u)) {
    var a = function(c, d, p) {
      if (!i.__c.__H)
        return !0;
      var h = i.__c.__H.__.filter(function(b) {
        return !!b.__c;
      });
      if (h.every(function(b) {
        return !b.__N;
      }))
        return !s || s.call(this, c, d, p);
      var m = !1;
      return h.forEach(function(b) {
        if (b.__N) {
          var v = b.__[0];
          b.__ = b.__N, b.__N = void 0, v !== b.__[0] && (m = !0);
        }
      }), !(!m && i.__c.props === c) && (!s || s.call(this, c, d, p));
    };
    Ve.u = !0;
    var s = Ve.shouldComponentUpdate, u = Ve.componentWillUpdate;
    Ve.componentWillUpdate = function(c, d, p) {
      if (this.__e) {
        var h = s;
        s = void 0, a(c, d, p), s = h;
      }
      u && u.call(this, c, d, p);
    }, Ve.shouldComponentUpdate = a;
  }
  return i.__N || i.__;
}
function le(n, e) {
  var t = La(Hi++, 3);
  !Qe.__s && xl(t.__H, e) && (t.__ = n, t.i = e, Ve.__H.__h.push(t));
}
function T5(n, e) {
  var t = La(Hi++, 4);
  !Qe.__s && xl(t.__H, e) && (t.__ = n, t.i = e, Ve.__h.push(t));
}
function Oe(n) {
  return ba = 5, Gr(function() {
    return { current: n };
  }, []);
}
function Gr(n, e) {
  var t = La(Hi++, 7);
  return xl(t.__H, e) ? (t.__V = n(), t.i = e, t.__h = n, t.__V) : t.__;
}
function R5(n, e) {
  return ba = 8, Gr(function() {
    return n;
  }, e);
}
function rf(n) {
  var e = Ve.context[n.__c], t = La(Hi++, 9);
  return t.c = n, e ? (t.__ == null && (t.__ = !0, e.sub(Ve)), e.props.value) : n.__;
}
function P5() {
  for (var n; n = tf.shift(); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(To), n.__H.__h.forEach(Ju), n.__H.__h = [];
      } catch (e) {
        n.__H.__h = [], Qe.__e(e, n.__v);
      }
}
Qe.__b = function(n) {
  Ve = null, Pp && Pp(n);
}, Qe.__ = function(n, e) {
  n && e.__k && e.__k.__m && (n.__m = e.__k.__m), qp && qp(n, e);
}, Qe.__r = function(n) {
  zp && zp(n), Hi = 0;
  var e = (Ve = n.__c).__H;
  e && (Lu === Ve ? (e.__h = [], Ve.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = Lo, t.__N = t.i = void 0;
  })) : (e.__h.forEach(To), e.__h.forEach(Ju), e.__h = [], Hi = 0)), Lu = Ve;
}, Qe.diffed = function(n) {
  Np && Np(n);
  var e = n.__c;
  e && e.__H && (e.__H.__h.length && (tf.push(e) !== 1 && Rp === Qe.requestAnimationFrame || ((Rp = Qe.requestAnimationFrame) || z5)(P5)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== Lo && (t.__ = t.__V), t.i = void 0, t.__V = Lo;
  })), Lu = Ve = null;
}, Qe.__c = function(n, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(To), t.__h = t.__h.filter(function(i) {
        return !i.__ || Ju(i);
      });
    } catch (i) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], Qe.__e(i, t.__v);
    }
  }), Op && Op(n, e);
}, Qe.unmount = function(n) {
  Ip && Ip(n);
  var e, t = n.__c;
  t && t.__H && (t.__H.__.forEach(function(i) {
    try {
      To(i);
    } catch (a) {
      e = a;
    }
  }), t.__H = void 0, e && Qe.__e(e, t.__v));
};
var Mp = typeof requestAnimationFrame == "function";
function z5(n) {
  var e, t = function() {
    clearTimeout(i), Mp && cancelAnimationFrame(e), setTimeout(n);
  }, i = setTimeout(t, 100);
  Mp && (e = requestAnimationFrame(t));
}
function To(n) {
  var e = Ve, t = n.__c;
  typeof t == "function" && (n.__c = void 0, t()), Ve = e;
}
function Ju(n) {
  var e = Ve;
  n.__c = n.__(), Ve = e;
}
function xl(n, e) {
  return !n || n.length !== e.length || e.some(function(t, i) {
    return t !== n[i];
  });
}
function nf(n, e) {
  return typeof e == "function" ? e(n) : e;
}
function N5(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function Up(n, e) {
  for (var t in n)
    if (t !== "__source" && !(t in e))
      return !0;
  for (var i in e)
    if (i !== "__source" && n[i] !== e[i])
      return !0;
  return !1;
}
function Vp(n, e) {
  this.props = n, this.context = e;
}
(Vp.prototype = new Er()).isPureReactComponent = !0, Vp.prototype.shouldComponentUpdate = function(n, e) {
  return Up(this.props, n) || Up(this.state, e);
};
var Hp = fe.__b;
fe.__b = function(n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), Hp && Hp(n);
};
var O5 = fe.__e;
fe.__e = function(n, e, t, i) {
  if (n.then) {
    for (var a, s = e; s = s.__; )
      if ((a = s.__c) && a.__c)
        return e.__e == null && (e.__e = t.__e, e.__k = t.__k), a.__c(n, e);
  }
  O5(n, e, t, i);
};
var $p = fe.unmount;
function af(n, e, t) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(i) {
    typeof i.__c == "function" && i.__c();
  }), n.__c.__H = null), (n = N5({}, n)).__c != null && (n.__c.__P === t && (n.__c.__P = e), n.__c = null), n.__k = n.__k && n.__k.map(function(i) {
    return af(i, e, t);
  })), n;
}
function of(n, e, t) {
  return n && t && (n.__v = null, n.__k = n.__k && n.__k.map(function(i) {
    return of(i, e, t);
  }), n.__c && n.__c.__P === e && (n.__e && t.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = t)), n;
}
function Tu() {
  this.__u = 0, this.t = null, this.__b = null;
}
function sf(n) {
  var e = n.__.__c;
  return e && e.__a && e.__a(n);
}
function Ao() {
  this.u = null, this.o = null;
}
fe.unmount = function(n) {
  var e = n.__c;
  e && e.__R && e.__R(), e && 32 & n.__u && (n.type = null), $p && $p(n);
}, (Tu.prototype = new Er()).__c = function(n, e) {
  var t = e.__c, i = this;
  i.t == null && (i.t = []), i.t.push(t);
  var a = sf(i.__v), s = !1, u = function() {
    s || (s = !0, t.__R = null, a ? a(c) : c());
  };
  t.__R = u;
  var c = function() {
    if (!--i.__u) {
      if (i.state.__a) {
        var d = i.state.__a;
        i.__v.__k[0] = of(d, d.__c.__P, d.__c.__O);
      }
      var p;
      for (i.setState({ __a: i.__b = null }); p = i.t.pop(); )
        p.forceUpdate();
    }
  };
  i.__u++ || 32 & e.__u || i.setState({ __a: i.__b = i.__v.__k[0] }), n.then(u, u);
}, Tu.prototype.componentWillUnmount = function() {
  this.t = [];
}, Tu.prototype.render = function(n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), i = this.__v.__k[0].__c;
      this.__v.__k[0] = af(this.__b, t, i.__O = i.__P);
    }
    this.__b = null;
  }
  var a = e.__a && Y(ie, null, n.fallback);
  return a && (a.__u &= -33), [Y(ie, null, e.__a ? null : n.children), a];
};
var jp = function(n, e, t) {
  if (++t[1] === t[0] && n.o.delete(e), n.props.revealOrder && (n.props.revealOrder[0] !== "t" || !n.o.size))
    for (t = n.u; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      n.u = t = t[2];
    }
};
(Ao.prototype = new Er()).__a = function(n) {
  var e = this, t = sf(e.__v), i = e.o.get(n);
  return i[0]++, function(a) {
    var s = function() {
      e.props.revealOrder ? (i.push(a), jp(e, n, i)) : a();
    };
    t ? t(s) : s();
  };
}, Ao.prototype.render = function(n) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Oo(n.children);
  n.revealOrder && n.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; )
    this.o.set(e[t], this.u = [1, 0, this.u]);
  return n.children;
}, Ao.prototype.componentDidUpdate = Ao.prototype.componentDidMount = function() {
  var n = this;
  this.o.forEach(function(e, t) {
    jp(n, t, e);
  });
};
var I5 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, q5 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, M5 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, U5 = /[A-Z0-9]/g, V5 = typeof document < "u", H5 = function(n) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(n);
};
Er.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n) {
  Object.defineProperty(Er.prototype, n, { configurable: !0, get: function() {
    return this["UNSAFE_" + n];
  }, set: function(e) {
    Object.defineProperty(this, n, { configurable: !0, writable: !0, value: e });
  } });
});
var Kp = fe.event;
function $5() {
}
function j5() {
  return this.cancelBubble;
}
function K5() {
  return this.defaultPrevented;
}
fe.event = function(n) {
  return Kp && (n = Kp(n)), n.persist = $5, n.isPropagationStopped = j5, n.isDefaultPrevented = K5, n.nativeEvent = n;
};
var W5 = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Wp = fe.vnode;
fe.vnode = function(n) {
  typeof n.type == "string" && function(e) {
    var t = e.props, i = e.type, a = {};
    for (var s in t) {
      var u = t[s];
      if (!(s === "value" && "defaultValue" in t && u == null || V5 && s === "children" && i === "noscript" || s === "class" || s === "className")) {
        var c = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && u === !0 ? u = "" : c === "translate" && u === "no" ? u = !1 : c === "ondoubleclick" ? s = "ondblclick" : c !== "onchange" || i !== "input" && i !== "textarea" || H5(t.type) ? c === "onfocus" ? s = "onfocusin" : c === "onblur" ? s = "onfocusout" : M5.test(s) ? s = c : i.indexOf("-") === -1 && q5.test(s) ? s = s.replace(U5, "-$&").toLowerCase() : u === null && (u = void 0) : c = s = "oninput", c === "oninput" && a[s = c] && (s = "oninputCapture"), a[s] = u;
      }
    }
    i == "select" && a.multiple && Array.isArray(a.value) && (a.value = Oo(t.children).forEach(function(d) {
      d.props.selected = a.value.indexOf(d.props.value) != -1;
    })), i == "select" && a.defaultValue != null && (a.value = Oo(t.children).forEach(function(d) {
      d.props.selected = a.multiple ? a.defaultValue.indexOf(d.props.value) != -1 : a.defaultValue == d.props.value;
    })), t.class && !t.className ? (a.class = t.class, Object.defineProperty(a, "className", W5)) : (t.className && !t.class || t.class && t.className) && (a.class = a.className = t.className), e.props = a;
  }(n), n.$$typeof = I5, Wp && Wp(n);
};
var Gp = fe.__r;
fe.__r = function(n) {
  Gp && Gp(n), n.__c;
};
var Yp = fe.diffed;
fe.diffed = function(n) {
  Yp && Yp(n);
  var e = n.props, t = n.__e;
  t != null && n.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value);
};
var ui = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function G5(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
const Y5 = (...n) => {
  console != null && console.warn && (Oi(n[0]) && (n[0] = `react-i18next:: ${n[0]}`), console.warn(...n));
}, Jp = {}, Zu = (...n) => {
  Oi(n[0]) && Jp[n[0]] || (Oi(n[0]) && (Jp[n[0]] = /* @__PURE__ */ new Date()), Y5(...n));
}, uf = (n, e) => () => {
  if (n.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        n.off("initialized", t);
      }, 0), e();
    };
    n.on("initialized", t);
  }
}, Zp = (n, e, t) => {
  n.loadNamespaces(e, uf(n, t));
}, Xp = (n, e, t, i) => {
  Oi(t) && (t = [t]), t.forEach((a) => {
    n.options.ns.indexOf(a) < 0 && n.options.ns.push(a);
  }), n.loadLanguages(e, uf(n, i));
}, J5 = (n, e, t = {}) => !e.languages || !e.languages.length ? (Zu("i18n.languages were undefined or empty", e.languages), !0) : e.hasLoadedNamespace(n, {
  lng: t.lng,
  precheck: (i, a) => {
    var s;
    if (((s = t.bindI18n) == null ? void 0 : s.indexOf("languageChanging")) > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !a(i.isLanguageChangingTo, n))
      return !1;
  }
}), Oi = (n) => typeof n == "string", Z5 = (n) => typeof n == "object" && n !== null, X5 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Q5 = {
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
}, ev = (n) => Q5[n], tv = (n) => n.replace(X5, ev);
let Xu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: tv
};
const rv = (n = {}) => {
  Xu = {
    ...Xu,
    ...n
  };
}, iv = () => Xu;
let lf;
const nv = (n) => {
  lf = n;
}, va = () => lf, av = {
  type: "3rdParty",
  init(n) {
    rv(n.options.react), nv(n);
  }
}, ov = Q2();
class sv {
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
const uv = (n, e) => {
  const t = Oe();
  return le(() => {
    t.current = e ? t.current : n;
  }, [n, e]), t.current;
}, cf = (n, e, t, i) => n.getFixedT(e, t, i), lv = (n, e, t, i) => R5(cf(n, e, t, i), [n, e, t, i]), We = (n, e = {}) => {
  var E, L, z, P;
  const {
    i18n: t
  } = e, {
    i18n: i,
    defaultNS: a
  } = rf(ov) || {}, s = t || i || va();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new sv()), !s) {
    Zu("You will need to pass in an i18next instance by using initReactI18next");
    const I = (K, J) => Oi(J) ? J : Z5(J) && Oi(J.defaultValue) ? J.defaultValue : Array.isArray(K) ? K[K.length - 1] : K, N = [I, {}, !1];
    return N.t = I, N.i18n = {}, N.ready = !1, N;
  }
  (E = s.options.react) != null && E.wait && Zu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const u = {
    ...iv(),
    ...s.options.react,
    ...e
  }, {
    useSuspense: c,
    keyPrefix: d
  } = u;
  let p = n || a || ((L = s.options) == null ? void 0 : L.defaultNS);
  p = Oi(p) ? [p] : p || ["translation"], (P = (z = s.reportNamespaces).addUsedNamespaces) == null || P.call(z, p);
  const h = (s.isInitialized || s.initializedStoreOnce) && p.every((I) => J5(I, s, u)), m = lv(s, e.lng || null, u.nsMode === "fallback" ? p : p[0], d), b = () => m, v = () => cf(s, e.lng || null, u.nsMode === "fallback" ? p : p[0], d), [C, k] = Q(b);
  let x = p.join();
  e.lng && (x = `${e.lng}${x}`);
  const S = uv(x), A = Oe(!0);
  le(() => {
    const {
      bindI18n: I,
      bindI18nStore: N
    } = u;
    A.current = !0, !h && !c && (e.lng ? Xp(s, e.lng, p, () => {
      A.current && k(v);
    }) : Zp(s, p, () => {
      A.current && k(v);
    })), h && S && S !== x && A.current && k(v);
    const K = () => {
      A.current && k(v);
    };
    return I && (s == null || s.on(I, K)), N && (s == null || s.store.on(N, K)), () => {
      A.current = !1, s && (I == null || I.split(" ").forEach((J) => s.off(J, K))), N && s && N.split(" ").forEach((J) => s.store.off(J, K));
    };
  }, [s, x]), le(() => {
    A.current && h && k(b);
  }, [s, d, h]);
  const F = [C, s, h];
  if (F.t = C, F.i18n = s, F.ready = h, h || !h && !c)
    return F;
  throw new Promise((I) => {
    e.lng ? Xp(s, e.lng, p, () => I()) : Zp(s, p, () => I());
  });
};
var cv = Symbol.for("preact-signals");
function rs() {
  if (pi > 1)
    pi--;
  else {
    for (var n, e = !1; da !== void 0; ) {
      var t = da;
      for (da = void 0, Qu++; t !== void 0; ) {
        var i = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && pf(t))
          try {
            t.c();
          } catch (a) {
            e || (n = a, e = !0);
          }
        t = i;
      }
    }
    if (Qu = 0, pi--, e)
      throw n;
  }
}
function dv(n) {
  if (pi > 0)
    return n();
  pi++;
  try {
    return n();
  } finally {
    rs();
  }
}
var Pe = void 0, da = void 0, pi = 0, Qu = 0, Io = 0;
function df(n) {
  if (Pe !== void 0) {
    var e = n.n;
    if (e === void 0 || e.t !== Pe)
      return e = { i: 0, S: n, p: Pe.s, n: void 0, t: Pe, e: void 0, x: void 0, r: e }, Pe.s !== void 0 && (Pe.s.n = e), Pe.s = e, n.n = e, 32 & Pe.f && n.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = Pe.s, e.n = void 0, Pe.s.n = e, Pe.s = e), e;
  }
}
function pt(n) {
  this.v = n, this.i = 0, this.n = void 0, this.t = void 0;
}
pt.prototype.brand = cv;
pt.prototype.h = function() {
  return !0;
};
pt.prototype.S = function(n) {
  this.t !== n && n.e === void 0 && (n.x = this.t, this.t !== void 0 && (this.t.e = n), this.t = n);
};
pt.prototype.U = function(n) {
  if (this.t !== void 0) {
    var e = n.e, t = n.x;
    e !== void 0 && (e.x = t, n.e = void 0), t !== void 0 && (t.e = e, n.x = void 0), n === this.t && (this.t = t);
  }
};
pt.prototype.subscribe = function(n) {
  var e = this;
  return Dl(function() {
    var t = e.value, i = Pe;
    Pe = void 0;
    try {
      n(t);
    } finally {
      Pe = i;
    }
  });
};
pt.prototype.valueOf = function() {
  return this.value;
};
pt.prototype.toString = function() {
  return this.value + "";
};
pt.prototype.toJSON = function() {
  return this.value;
};
pt.prototype.peek = function() {
  var n = Pe;
  Pe = void 0;
  try {
    return this.value;
  } finally {
    Pe = n;
  }
};
Object.defineProperty(pt.prototype, "value", { get: function() {
  var n = df(this);
  return n !== void 0 && (n.i = this.i), this.v;
}, set: function(n) {
  if (n !== this.v) {
    if (Qu > 100)
      throw new Error("Cycle detected");
    this.v = n, this.i++, Io++, pi++;
    try {
      for (var e = this.t; e !== void 0; e = e.x)
        e.t.N();
    } finally {
      rs();
    }
  }
} });
function Zt(n) {
  return new pt(n);
}
function pf(n) {
  for (var e = n.s; e !== void 0; e = e.n)
    if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
      return !0;
  return !1;
}
function ff(n) {
  for (var e = n.s; e !== void 0; e = e.n) {
    var t = e.S.n;
    if (t !== void 0 && (e.r = t), e.S.n = e, e.i = -1, e.n === void 0) {
      n.s = e;
      break;
    }
  }
}
function hf(n) {
  for (var e = n.s, t = void 0; e !== void 0; ) {
    var i = e.p;
    e.i === -1 ? (e.S.U(e), i !== void 0 && (i.n = e.n), e.n !== void 0 && (e.n.p = i)) : t = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = i;
  }
  n.s = t;
}
function En(n) {
  pt.call(this, void 0), this.x = n, this.s = void 0, this.g = Io - 1, this.f = 4;
}
(En.prototype = new pt()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Io))
    return !0;
  if (this.g = Io, this.f |= 1, this.i > 0 && !pf(this))
    return this.f &= -2, !0;
  var n = Pe;
  try {
    ff(this), Pe = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return Pe = n, hf(this), this.f &= -2, !0;
};
En.prototype.S = function(n) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.S(e);
  }
  pt.prototype.S.call(this, n);
};
En.prototype.U = function(n) {
  if (this.t !== void 0 && (pt.prototype.U.call(this, n), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n)
      e.S.U(e);
  }
};
En.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var n = this.t; n !== void 0; n = n.x)
      n.t.N();
  }
};
Object.defineProperty(En.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var n = df(this);
  if (this.h(), n !== void 0 && (n.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function pv(n) {
  return new En(n);
}
function gf(n) {
  var e = n.u;
  if (n.u = void 0, typeof e == "function") {
    pi++;
    var t = Pe;
    Pe = void 0;
    try {
      e();
    } catch (i) {
      throw n.f &= -2, n.f |= 8, Cl(n), i;
    } finally {
      Pe = t, rs();
    }
  }
}
function Cl(n) {
  for (var e = n.s; e !== void 0; e = e.n)
    e.S.U(e);
  n.x = void 0, n.s = void 0, gf(n);
}
function fv(n) {
  if (Pe !== this)
    throw new Error("Out-of-order effect");
  hf(this), Pe = n, this.f &= -2, 8 & this.f && Cl(this), rs();
}
function Ta(n) {
  this.x = n, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
Ta.prototype.c = function() {
  var n = this.S();
  try {
    if (8 & this.f || this.x === void 0)
      return;
    var e = this.x();
    typeof e == "function" && (this.u = e);
  } finally {
    n();
  }
};
Ta.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, gf(this), ff(this), pi++;
  var n = Pe;
  return Pe = this, fv.bind(this, n);
};
Ta.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = da, da = this);
};
Ta.prototype.d = function() {
  this.f |= 8, 1 & this.f || Cl(this);
};
function Dl(n) {
  var e = new Ta(n);
  try {
    e.c();
  } catch (t) {
    throw e.d(), t;
  }
  return e.d.bind(e);
}
var Ru;
function Bn(n, e) {
  fe[n] = e.bind(null, fe[n] || function() {
  });
}
function qo(n) {
  Ru && Ru(), Ru = n && n.S();
}
function mf(n) {
  var e = this, t = n.data, i = gv(t);
  i.value = t;
  var a = Gr(function() {
    for (var s = e.__v; s = s.__; )
      if (s.__c) {
        s.__c.__$f |= 4;
        break;
      }
    return e.__$u.c = function() {
      var u, c = e.__$u.S(), d = a.value;
      c(), V2(d) || ((u = e.base) == null ? void 0 : u.nodeType) !== 3 ? (e.__$f |= 1, e.setState({})) : e.base.data = d;
    }, pv(function() {
      var u = i.value.value;
      return u === 0 ? 0 : u === !0 ? "" : u || "";
    });
  }, []);
  return a.value;
}
mf.displayName = "_st";
Object.defineProperties(pt.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: mf }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
Bn("__b", function(n, e) {
  if (typeof e.type == "string") {
    var t, i = e.props;
    for (var a in i)
      if (a !== "children") {
        var s = i[a];
        s instanceof pt && (t || (e.__np = t = {}), t[a] = s, i[a] = s.peek());
      }
  }
  n(e);
});
Bn("__r", function(n, e) {
  qo();
  var t, i = e.__c;
  i && (i.__$f &= -2, (t = i.__$u) === void 0 && (i.__$u = t = function(a) {
    var s;
    return Dl(function() {
      s = this;
    }), s.c = function() {
      i.__$f |= 1, i.setState({});
    }, s;
  }())), qo(t), n(e);
});
Bn("__e", function(n, e, t, i) {
  qo(), n(e, t, i);
});
Bn("diffed", function(n, e) {
  qo();
  var t;
  if (typeof e.type == "string" && (t = e.__e)) {
    var i = e.__np, a = e.props;
    if (i) {
      var s = t.U;
      if (s)
        for (var u in s) {
          var c = s[u];
          c !== void 0 && !(u in i) && (c.d(), s[u] = void 0);
        }
      else
        t.U = s = {};
      for (var d in i) {
        var p = s[d], h = i[d];
        p === void 0 ? (p = hv(t, d, h, a), s[d] = p) : p.o(h, a);
      }
    }
  }
  n(e);
});
function hv(n, e, t, i) {
  var a = e in n && n.ownerSVGElement === void 0, s = Zt(t);
  return { o: function(u, c) {
    s.value = u, i = c;
  }, d: Dl(function() {
    var u = s.value.value;
    i[e] !== u && (i[e] = u, a ? n[e] = u : u ? n.setAttribute(e, u) : n.removeAttribute(e));
  }) };
}
Bn("unmount", function(n, e) {
  if (typeof e.type == "string") {
    var t = e.__e;
    if (t) {
      var i = t.U;
      if (i) {
        t.U = void 0;
        for (var a in i) {
          var s = i[a];
          s && s.d();
        }
      }
    }
  } else {
    var u = e.__c;
    if (u) {
      var c = u.__$u;
      c && (u.__$u = void 0, c.d());
    }
  }
  n(e);
});
Bn("__h", function(n, e, t, i) {
  (i < 3 || i === 9) && (e.__$f |= 2), n(e, t, i);
});
Er.prototype.shouldComponentUpdate = function(n, e) {
  var t = this.__$u;
  if (!(t && t.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
    return !0;
  for (var i in e)
    return !0;
  for (var a in n)
    if (a !== "__source" && n[a] !== this.props[a])
      return !0;
  for (var s in this.props)
    if (!(s in n))
      return !0;
  return !1;
};
function gv(n) {
  return Gr(function() {
    return Zt(n);
  }, []);
}
const el = Zt(!1), Ee = Zt(null), gn = Zt([]), jt = Zt(!1), mn = Zt([]), ur = Zt(!1), is = Zt(null), mt = Zt(null), Mo = Zt(!1), mv = () => {
  dv(() => {
    Ee.value = null, gn.value = [], jt.value = !1, mn.value = [], ur.value = !1, is.value = null, mt.value = null, Mo.value = !1;
  });
}, Al = "bm_currentBike", _v = "v2", bv = "https://cdn.bikematrix.io", Qp = {
  // Shopify specific
  isShopify: !1,
  skuField: "sku",
  // Bike Selector
  apiUrl: "https://bikematrix-20230522-1515-dev-apim.azure-api.net/proxy/v3/",
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
  virtualWorkshop: !0
}, Ii = function(n) {
  return new URL(n, bv).toString();
};
function _f(n) {
  var e, t, i = "";
  if (typeof n == "string" || typeof n == "number")
    i += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var a = n.length;
      for (e = 0; e < a; e++)
        n[e] && (t = _f(n[e])) && (i && (i += " "), i += t);
    } else
      for (t in n)
        n[t] && (i && (i += " "), i += t);
  return i;
}
function vv() {
  for (var n, e, t = 0, i = "", a = arguments.length; t < a; t++)
    (n = arguments[t]) && (e = _f(n)) && (i && (i += " "), i += e);
  return i;
}
const Sl = "-";
function yv(n) {
  const e = wv(n), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: i
  } = n;
  function a(u) {
    const c = u.split(Sl);
    return c[0] === "" && c.length !== 1 && c.shift(), bf(c, e) || kv(u);
  }
  function s(u, c) {
    const d = t[u] || [];
    return c && i[u] ? [...d, ...i[u]] : d;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: s
  };
}
function bf(n, e) {
  var u;
  if (n.length === 0)
    return e.classGroupId;
  const t = n[0], i = e.nextPart.get(t), a = i ? bf(n.slice(1), i) : void 0;
  if (a)
    return a;
  if (e.validators.length === 0)
    return;
  const s = n.join(Sl);
  return (u = e.validators.find(({
    validator: c
  }) => c(s))) == null ? void 0 : u.classGroupId;
}
const e2 = /^\[(.+)\]$/;
function kv(n) {
  if (e2.test(n)) {
    const e = e2.exec(n)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function wv(n) {
  const {
    theme: e,
    prefix: t
  } = n, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Cv(Object.entries(n.classGroups), t).forEach(([s, u]) => {
    tl(u, i, s, e);
  }), i;
}
function tl(n, e, t, i) {
  n.forEach((a) => {
    if (typeof a == "string") {
      const s = a === "" ? e : t2(e, a);
      s.classGroupId = t;
      return;
    }
    if (typeof a == "function") {
      if (xv(a)) {
        tl(a(i), e, t, i);
        return;
      }
      e.validators.push({
        validator: a,
        classGroupId: t
      });
      return;
    }
    Object.entries(a).forEach(([s, u]) => {
      tl(u, t2(e, s), t, i);
    });
  });
}
function t2(n, e) {
  let t = n;
  return e.split(Sl).forEach((i) => {
    t.nextPart.has(i) || t.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(i);
  }), t;
}
function xv(n) {
  return n.isThemeGetter;
}
function Cv(n, e) {
  return e ? n.map(([t, i]) => {
    const a = i.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([u, c]) => [e + u, c])) : s);
    return [t, a];
  }) : n;
}
function Dv(n) {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function a(s, u) {
    t.set(s, u), e++, e > n && (e = 0, i = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get(s) {
      let u = t.get(s);
      if (u !== void 0)
        return u;
      if ((u = i.get(s)) !== void 0)
        return a(s, u), u;
    },
    set(s, u) {
      t.has(s) ? t.set(s, u) : a(s, u);
    }
  };
}
const vf = "!";
function Av(n) {
  const e = n.separator, t = e.length === 1, i = e[0], a = e.length;
  return function(u) {
    const c = [];
    let d = 0, p = 0, h;
    for (let k = 0; k < u.length; k++) {
      let x = u[k];
      if (d === 0) {
        if (x === i && (t || u.slice(k, k + a) === e)) {
          c.push(u.slice(p, k)), p = k + a;
          continue;
        }
        if (x === "/") {
          h = k;
          continue;
        }
      }
      x === "[" ? d++ : x === "]" && d--;
    }
    const m = c.length === 0 ? u : u.substring(p), b = m.startsWith(vf), v = b ? m.substring(1) : m, C = h && h > p ? h - p : void 0;
    return {
      modifiers: c,
      hasImportantModifier: b,
      baseClassName: v,
      maybePostfixModifierPosition: C
    };
  };
}
function Sv(n) {
  if (n.length <= 1)
    return n;
  const e = [];
  let t = [];
  return n.forEach((i) => {
    i[0] === "[" ? (e.push(...t.sort(), i), t = []) : t.push(i);
  }), e.push(...t.sort()), e;
}
function Ev(n) {
  return {
    cache: Dv(n.cacheSize),
    splitModifiers: Av(n),
    ...yv(n)
  };
}
const Bv = /\s+/;
function Fv(n, e) {
  const {
    splitModifiers: t,
    getClassGroupId: i,
    getConflictingClassGroupIds: a
  } = e, s = /* @__PURE__ */ new Set();
  return n.trim().split(Bv).map((u) => {
    const {
      modifiers: c,
      hasImportantModifier: d,
      baseClassName: p,
      maybePostfixModifierPosition: h
    } = t(u);
    let m = i(h ? p.substring(0, h) : p), b = !!h;
    if (!m) {
      if (!h)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      if (m = i(p), !m)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      b = !1;
    }
    const v = Sv(c).join(":");
    return {
      isTailwindClass: !0,
      modifierId: d ? v + vf : v,
      classGroupId: m,
      originalClassName: u,
      hasPostfixModifier: b
    };
  }).reverse().filter((u) => {
    if (!u.isTailwindClass)
      return !0;
    const {
      modifierId: c,
      classGroupId: d,
      hasPostfixModifier: p
    } = u, h = c + d;
    return s.has(h) ? !1 : (s.add(h), a(d, p).forEach((m) => s.add(c + m)), !0);
  }).reverse().map((u) => u.originalClassName).join(" ");
}
function Lv() {
  let n = 0, e, t, i = "";
  for (; n < arguments.length; )
    (e = arguments[n++]) && (t = yf(e)) && (i && (i += " "), i += t);
  return i;
}
function yf(n) {
  if (typeof n == "string")
    return n;
  let e, t = "";
  for (let i = 0; i < n.length; i++)
    n[i] && (e = yf(n[i])) && (t && (t += " "), t += e);
  return t;
}
function Tv(n, ...e) {
  let t, i, a, s = u;
  function u(d) {
    const p = e.reduce((h, m) => m(h), n());
    return t = Ev(p), i = t.cache.get, a = t.cache.set, s = c, c(d);
  }
  function c(d) {
    const p = i(d);
    if (p)
      return p;
    const h = Fv(d, t);
    return a(d, h), h;
  }
  return function() {
    return s(Lv.apply(null, arguments));
  };
}
function qe(n) {
  const e = (t) => t[n] || [];
  return e.isThemeGetter = !0, e;
}
const kf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Rv = /^\d+\/\d+$/, Pv = /* @__PURE__ */ new Set(["px", "full", "screen"]), zv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ov = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Iv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Hr(n) {
  return zi(n) || Pv.has(n) || Rv.test(n);
}
function oi(n) {
  return Fn(n, "length", Wv);
}
function zi(n) {
  return !!n && !Number.isNaN(Number(n));
}
function So(n) {
  return Fn(n, "number", zi);
}
function Xn(n) {
  return !!n && Number.isInteger(Number(n));
}
function Mv(n) {
  return n.endsWith("%") && zi(n.slice(0, -1));
}
function me(n) {
  return kf.test(n);
}
function si(n) {
  return zv.test(n);
}
const Uv = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Vv(n) {
  return Fn(n, Uv, wf);
}
function Hv(n) {
  return Fn(n, "position", wf);
}
const $v = /* @__PURE__ */ new Set(["image", "url"]);
function jv(n) {
  return Fn(n, $v, Yv);
}
function Kv(n) {
  return Fn(n, "", Gv);
}
function Qn() {
  return !0;
}
function Fn(n, e, t) {
  const i = kf.exec(n);
  return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : t(i[2]) : !1;
}
function Wv(n) {
  return Nv.test(n) && !Ov.test(n);
}
function wf() {
  return !1;
}
function Gv(n) {
  return Iv.test(n);
}
function Yv(n) {
  return qv.test(n);
}
function Jv() {
  const n = qe("colors"), e = qe("spacing"), t = qe("blur"), i = qe("brightness"), a = qe("borderColor"), s = qe("borderRadius"), u = qe("borderSpacing"), c = qe("borderWidth"), d = qe("contrast"), p = qe("grayscale"), h = qe("hueRotate"), m = qe("invert"), b = qe("gap"), v = qe("gradientColorStops"), C = qe("gradientColorStopPositions"), k = qe("inset"), x = qe("margin"), S = qe("opacity"), A = qe("padding"), F = qe("saturate"), E = qe("scale"), L = qe("sepia"), z = qe("skew"), P = qe("space"), I = qe("translate"), N = () => ["auto", "contain", "none"], K = () => ["auto", "hidden", "clip", "visible", "scroll"], J = () => ["auto", me, e], X = () => [me, e], ne = () => ["", Hr, oi], ce = () => ["auto", zi, me], be = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ve = () => ["solid", "dashed", "dotted", "double", "none"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", me], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], te = () => [zi, So], he = () => [zi, me];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Qn],
      spacing: [Hr, oi],
      blur: ["none", "", si, me],
      brightness: te(),
      borderColor: [n],
      borderRadius: ["none", "", "full", si, me],
      borderSpacing: X(),
      borderWidth: ne(),
      contrast: te(),
      grayscale: M(),
      hueRotate: he(),
      invert: M(),
      gap: X(),
      gradientColorStops: [n],
      gradientColorStopPositions: [Mv, oi],
      inset: J(),
      margin: J(),
      opacity: te(),
      padding: X(),
      saturate: te(),
      scale: te(),
      sepia: M(),
      skew: he(),
      space: X(),
      translate: X()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", me]
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
        columns: [si]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
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
        object: [...be(), me]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: K()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": K()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": K()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
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
        z: ["auto", Xn, me]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: J()
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
        flex: ["1", "auto", "initial", "none", me]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Xn, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Qn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Xn, me]
        }, me]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ce()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ce()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Qn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Xn, me]
        }, me]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ce()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ce()
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
        "auto-cols": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...$()]
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
        content: ["normal", ...$(), "baseline"]
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
        "place-content": [...$(), "baseline"]
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
        p: [A]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [A]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [A]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [A]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [A]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [A]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [A]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [A]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [A]
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
        "space-x": [P]
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
        "space-y": [P]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", me, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [me, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [me, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [si]
        }, si]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [me, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [me, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [me, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [me, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", si, oi]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", So]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", zi, So]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Hr, me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", me]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", me]
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
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [S]
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
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [S]
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
        decoration: [...ve(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Hr, oi]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Hr, me]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
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
        indent: X()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me]
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
        content: ["none", me]
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
        "bg-opacity": [S]
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
        bg: [...be(), Hv]
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
        bg: ["auto", "cover", "contain", Vv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, jv]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [C]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v]
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
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ve(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
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
        "divide-y": [c]
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
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ve()
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
        outline: ["", ...ve()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Hr, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Hr, oi]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ne()
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
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Hr, oi]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", si, Kv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Qn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": re()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", si, me]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [F]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [L]
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
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [F]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [L]
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
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", me]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: he()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", me]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: he()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", me]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Xn, me]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [I]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [I]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [z]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", me]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
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
        "scroll-m": X()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": X()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": X()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": X()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": X()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": X()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": X()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": X()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": X()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": X()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": X()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": X()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": X()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": X()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": X()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": X()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": X()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": X()
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
        "will-change": ["auto", "scroll", "contents", "transform", me]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Hr, oi, So]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
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
const Zv = /* @__PURE__ */ Tv(Jv);
function ke(...n) {
  return Zv(vv(n));
}
const Xv = {
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
class Xt {
  constructor(e, t, i, a) {
    this._apiUrl = a ? window.location.origin + "/apps/proxy/api/" : e, this._apiKey = t ?? "", this._apiToken = i ?? "", this._apiType = a ? "shopify" : "bikematrix";
  }
  getEndpoint(e) {
    return Xv[this._apiType][e];
  }
  async getBikeBrands() {
    const e = this.getEndpoint("bikeBrands"), t = await this.makeRequest(e);
    return t.success ? t.data : (console.error(t.error), []);
  }
  async getBikeModels(e) {
    if (!e)
      return console.log("No bike brand selected."), [];
    const t = this.getEndpoint("bikeModels"), i = await this.makeRequest(t, {
      params: {
        bikeBrandId: e
      }
    });
    return i.success ? i.data : (console.error(i.error), []);
  }
  async getBikeFrameSeries(e) {
    if (!e)
      return console.log("No bike model selected."), [];
    const t = this.getEndpoint("framesSeries"), i = await this.makeRequest(t, {
      params: {
        bikeModelId: e
      }
    });
    return i.success ? i.data : (console.error(i.error), []);
  }
  async getBikeSpecs(e) {
    if (!e)
      return console.log("No bike frame series selected."), [];
    const t = this.getEndpoint("bikeSpecs"), i = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return i.success ? i.data : (console.error(i.error), []);
  }
  async getYears(e) {
    if (!e)
      return console.log("No bike frame series selected."), [];
    const t = this.getEndpoint("bikeSpecYears"), i = await this.makeRequest(t, {
      params: {
        bikeModelSpecId: e
      }
    });
    return i.success ? i.data : (console.error(i.error), []);
  }
  async getFrameSizes(e, t, i) {
    if (!e || !t)
      return console.log("No bike frame series or bike spec selected."), [];
    const a = this.getEndpoint("bikeSpecSizes"), s = await this.makeRequest(a, {
      params: {
        bikeModelSpecId: e,
        bikeSpec: t,
        year: i
      }
    });
    return s.success ? s.data : (console.error(s.error), []);
  }
  async getBikes(e, t, i) {
    if (e && (t || i)) {
      const a = this.getEndpoint("bikeSpecs"), s = await this.makeRequest(a, {
        params: {
          bikeModelSpecId: e,
          bikeSpec: t,
          year: i
        }
      });
      return s.success ? s.data : (console.error(s.error), []);
    } else
      return console.log("No bike frame series and bike spec or year selected."), [];
  }
  async getBrandProductCategories(e) {
    if (e) {
      const t = this.getEndpoint("bikeBrandProductCategories"), i = await this.makeRequest(t, {
        params: {
          bikeBrandId: e
        }
      });
      return i.success ? i.data : (console.error(i.error), []);
    } else
      return console.log("No brand selected."), [];
  }
  async checkSkuCompatibility(e, t, i) {
    if (e && t) {
      const a = this.getEndpoint("checkSku") + `/${e}/${t}/${i}`, s = await this.makeRequest(a);
      return s.success ? s.data : (console.error(s.error), []);
    } else
      return console.log("No bike key and sku passed."), [];
  }
  async checkSkusCompatibility(e, t, i) {
    if (e && t) {
      const a = this.getEndpoint("checkSkus") + `/${e}/${t}/${i}`, s = await this.makeRequest(a);
      return s.success ? s.data : (console.error(s.error), []);
    } else
      return console.log("No bike key and list of skus passed."), [];
  }
  async checkSkusCompatibilityWithResults(e, t, i, a = {}) {
    if (e && t) {
      const s = this.getEndpoint("checkSkusWithResults") + `/${e}/${i}`, u = await this.makeRequest(s, {
        body: JSON.stringify(t),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        ...a
      });
      return u.success ? {
        data: u.data,
        success: u.success
      } : {
        success: u.success,
        error: "error_compatiblelist"
      };
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
    console.log(e);
    const t = this.getEndpoint("bikeBom"), i = await this.makeRequest(t, {
      params: {
        bikeKey: e
      }
    });
    return i.success ? {
      data: i.data,
      success: i.success
    } : (console.error(i.error), {
      success: i.success,
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
    } : (console.error(i.error), {
      success: i.success,
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
    const i = this.getEndpoint("findProducts"), a = await this.makeRequest(i, {
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
   * @param bikeFieldName: number
   * @returns Success or fail
   */
  async addComponent(e, t, i, a) {
    if (!e || !t || !i || !a)
      return {
        success: !1,
        error: "error_generic addComponent"
      };
    const s = this.getEndpoint("addComponent"), u = await this.makeRequest(s, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        bikeKey: e,
        productCategoryId: t,
        productId: i,
        bikeFieldName: a
      }
    });
    return u.success ? {
      data: u.data,
      success: u.success
    } : (console.error(u.error), {
      success: u.success,
      error: "error_add_component"
    });
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
    const a = this.getEndpoint("removeComponent"), s = await this.makeRequest(a, {
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
    } : (console.error(s.error), {
      success: s.success,
      error: "error_remove_component"
    });
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
    const a = this.getEndpoint("revertComponent"), s = await this.makeRequest(a, {
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
    } : (console.error(s.error), {
      success: s.success,
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
    const i = this.getEndpoint("saveCustomBike"), a = await this.makeRequest(i, {
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
    const i = this.getEndpoint("updateCustomBike"), a = await this.makeRequest(i, {
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
    const i = this.getEndpoint("updateCustomBikeName"), a = await this.makeRequest(i, {
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
    const i = new URL(e, this._apiUrl), a = {
      "Cache-Control": "no-cache",
      ...this._apiKey && {
        "bm-subscription-key": this._apiKey
      },
      ...this._apiToken && {
        "bm-app-token": this._apiToken
      }
    };
    typeof t.params == "object" && (Object.keys(t.params).forEach((u) => {
      t.params[u] && i.searchParams.set(u, t.params[u]);
    }), delete t.params);
    let s;
    try {
      const u = {
        ...a,
        // Default headers
        ...t.headers || {}
        // Calling function headers
      }, c = {
        ...t,
        // Spread options first (with options.headers)
        headers: u
        // Explicitly set headers after spreading options (as mergedHeaders will override options.headers)
      };
      t.signal && (c.signal = t.signal);
      const d = await fetch(i, c);
      s = {
        success: !0,
        data: await d.json().catch(() => {
          throw new Error("Request failed: " + (d.statusText || "Status" + d.status));
        })
      };
    } catch (u) {
      s = {
        success: !1,
        error: u.message
      };
    }
    return s;
  }
}
async function xf(n) {
  const {
    categories: e,
    collections: t,
    apiUrl: i,
    apiKey: a,
    apiToken: s,
    isShopify: u
  } = window.BikeMatrix.getConfig(), c = JSON.parse(sessionStorage.getItem("bm_categories") || "null"), d = JSON.parse(localStorage.getItem(Al) || "null"), p = new Xt(i, a, s, u);
  let h = [];
  if (!c || (c == null ? void 0 : c.key) !== (d == null ? void 0 : d.key)) {
    const m = await p.getBrandProductCategories(n);
    h = e.filter((v) => !!v.collection && m.some((C) => C.product_Category.toLowerCase() === v.title.toLowerCase())).map((v) => t.filter((k) => v.collection.split(",").map((x) => x.trim().toLowerCase()).includes(k.title.toLowerCase())).map((k) => ({
      title: k.title,
      text_id: v.text_id,
      handle: k.handle,
      url: k.url
    }))).flat(), h = h.filter((v, C, k) => C === k.findIndex((x) => x.title === v.title && x.text_id === v.text_id && x.handle === v.handle && x.url === v.url)), sessionStorage.setItem("bm_categories", JSON.stringify({
      key: d == null ? void 0 : d.key,
      collections: h
    }));
  } else
    h = c.collections;
  return h;
}
const Cf = class oa {
  constructor() {
    this.initialized = !1, this.currentBike = null, this.activeSubscription = null, this.components = [], this.config = Qp;
  }
  // Initialize with optional config
  async initialize(e) {
    this.components = [], this.initialized && this.cleanup(), e && (this.config = {
      ...this.config,
      ...e
    }), this.initializeConfig(), this.service = new Xt(this.config.apiUrl, this.config.apiKey, this.config.apiToken, this.config.isShopify), this.initializeActiveSubscription(), localStorage.bm_currentBike && (this.currentBike = JSON.parse(localStorage.bm_currentBike)), this.setupEventListeners(), this.registerComponents(), this.initialized = !0, el.value = !0, this.config.logLevel === "verbose" && console.log("BikeMatrixCore initialized");
  }
  // Singleton pattern to ensure a single global instance
  static getInstance() {
    return oa.instance || (oa.instance = new oa()), oa.instance;
  }
  registerComponents() {
    const e = ["bikematrix-bikeselector", "bikematrix-productresult", "bikematrix-collectionresult", "bikematrix-compatibilitylabel", "bikematrix-compatiblelist", "bikematrix-bikeselectorbanner"];
    this.components = [], e.forEach((t) => {
      const i = document.getElementsByTagName(t);
      Array.from(i).forEach((a) => {
        this.components.push(a);
      });
    }), this.config.logLevel === "verbose" && console.log(`Registered ${this.components.length} components`);
  }
  resetComponents() {
    this.components.forEach((e) => {
      var t;
      try {
        const i = e.cloneNode(!1);
        e.querySelectorAll("template").forEach((s) => {
          i.appendChild(s.cloneNode(!0));
        }), (t = e.parentNode) == null || t.replaceChild(i, e);
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
    this.removeEventListeners(), mv();
  }
  // Full destroy for complete cleanup
  async destroy() {
    this.cleanup(), this.service = null, this.currentBike = null, this.activeSubscription = null, this.config = {
      ...Qp
    }, this.initialized = !1, el.value = !1, this.resetComponents();
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
    e.forEach((i) => {
      if (i != null && i.textContent)
        try {
          this.config = {
            ...this.config,
            ...JSON.parse(i.textContent)
          };
        } catch {
          console.error("Invalid BikeMatrix configuration"), console.log("configScript ", i.textContent);
        }
    }), t != null && t.includes("verbose") && (this.config.logLevel = "verbose"), t != null && t.includes("virtualWorkshop") && (this.config.virtualWorkshop = !0), t != null && t.includes("subscribtion") && (this.activeSubscription = !0), t != null && t.includes("all") && (this.config.logLevel = "verbose", this.config.virtualWorkshop = !0, this.activeSubscription = !0), this.config.logLevel === "verbose" && console.log("initializeConfig ", JSON.stringify(this.config, null, 2));
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
    this.config.logLevel === "verbose" && console.log("ChangeBike() Method Called"), !(jt.value === !0 || ur.value === !0) && (jt.value = !0, ur.value = !0, gn.value = [], mn.value = [], console.log("ChangeBike updateBikeSignal..."), this.updateBikeSignal().then(() => {
      this.config.logLevel === "verbose" && console.log("Bike Signal Updated: ", JSON.stringify(Ee.value, null, 2)), this.ResetSelectedBikeIndicator(), this.RefreshCompatibleSkus().then(() => {
        document.dispatchEvent(new Event("RefreshCompatibility", {
          bubbles: !0,
          composed: !0
        }));
      });
    }));
  }
  async RefreshCompatibleSkus() {
    var t, i;
    const e = `${(t = Ee.value) == null ? void 0 : t.key}:${this.config.currentCollectionHandle}:${_v}`;
    switch (this.config.pageType) {
      case "collection":
        const a = !!Ee.value && ((i = Ee.value.compatibleCollections) == null ? void 0 : i.find((s) => s.handle === this.config.currentCollectionHandle));
        this.config.logLevel === "verbose" && console.log("Refresh Compatible SKUs. hasCompatibleCollection: ", a), a ? (await this.RefreshCollectionPageSkus(e), await this.RefreshCollectionListSkus(e)) : (jt.value = !1, ur.value = !1);
        break;
      case "search":
      case "index":
        jt.value = !1, this.config.pageType === "index" && this.config.showHomePageCollection || this.config.pageType === "search" && this.config.showSearchPageCollection ? await this.RefreshCollectionPageSkus(e) : ur.value = !1;
        break;
      default:
        jt.value = !1, ur.value = !1;
        break;
    }
  }
  async RefreshCollectionPageSkus(e) {
    var u, c, d;
    let t = document.getElementsByTagName("bikematrix-collectionresult"), a = Array.from(t).map((p) => {
      const h = this.config.skuField === "barcode" ? p.getAttribute("data-product-barcodes") : this.config.skuField === "metafield" ? p.getAttribute("data-product-metafields") : p.getAttribute("data-product-skus") || "";
      return h == null ? void 0 : h.split(",").filter((m) => !!m);
    }).flat();
    this.config.logLevel === "verbose" && console.log("Refresh Collection Page SKUs. SKUs: ", JSON.stringify(a), null, 2);
    var s = ((u = va()) == null ? void 0 : u.language) || "en-GB";
    if (a) {
      const p = await this.service.checkSkusCompatibilityWithResults((c = Ee.value) == null ? void 0 : c.key, a, s);
      (d = p.data) != null && d.error ? (Mo.value = !0, this.config.logLevel === "verbose" && console.log("Compatible List Error: ", p.data.errors)) : mn.value = p.data;
    } else
      mn.value = [];
    ur.value = !1;
  }
  async RefreshCollectionListSkus(e) {
    var a, s, u;
    var t = JSON.parse(sessionStorage.getItem(e));
    if (t)
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from Session: ", JSON.stringify(t), null, 2), gn.value = t;
    else {
      const c = Object.values(this.config.products || {}).map((m) => m.skus).flat();
      this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(c), null, 2);
      var i = ((a = va()) == null ? void 0 : a.language) || "en-GB";
      const d = new AbortController(), p = d.signal, h = () => d.abort();
      window.addEventListener("beforeunload", h);
      try {
        if (!((s = Ee.value) != null && s.key))
          throw new Error("BikeSignal key is undefined");
        const m = await this.service.checkSkusCompatibilityWithResults(Ee.value.key, c, i, {
          signal: p
        });
        if (this.config.logLevel === "verbose" && console.log("Refresh Collection SKUs from API. SKUs: ", JSON.stringify(m)), console.log("function RefreshCompatibleSkus() operation aborted"), p.aborted) {
          console.log("function RefreshCompatibleSkus() operation aborted");
          return;
        }
        (u = m.data) != null && u.errors ? (Mo.value = !0, this.config.logLevel === "verbose" && console.log("Compatible List Error: ", m.data.errors)) : (sessionStorage.setItem(e, JSON.stringify(m.data)), gn.value = m.data);
      } catch (m) {
        m.name === "AbortError" ? console.log("function RefreshCompatibleSkus() fetch aborted") : console.error("function RefreshCompatibleSkus() fetch error", m);
      } finally {
        window.removeEventListener("beforeunload", h);
      }
    }
    jt.value = !1;
  }
  updateActiveSubscription(e) {
    const t = !!(e != null && e.activeSubscription);
    sessionStorage.setItem("bm_activeSubscription", JSON.stringify(t)), this.activeSubscription = t;
  }
  async updateBikeSignal() {
    const e = localStorage.getItem(Al) || "null", t = JSON.parse(e);
    if (this.currentBike = t, t == null) {
      Ee.value = null;
      return;
    }
    const i = await xf(t == null ? void 0 : t.brandId);
    t.compatibleCollections = i, Ee.value = t, this.config.logLevel === "verbose" && console.log("Bike Changed: ", JSON.stringify(Ee.value, null, 2));
  }
};
Cf.instance = null;
let Qv = Cf;
const ya = (n) => /* @__PURE__ */ Y("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M1.53553 8.60658L5.07107 5.07104M5.07107 5.07104L8.6066 1.53551M5.07107 5.07104L8.6066 8.60658M5.07107 5.07104L1.53553 1.53551", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
var e4 = 0;
function g(n, e, t, i, a, s) {
  var u, c, d = {};
  for (c in e)
    c == "ref" ? u = e[c] : d[c] = e[c];
  var p = { type: n, props: d, key: t, ref: u, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --e4, __i: -1, __u: 0, __source: a, __self: s };
  if (typeof n == "function" && (u = n.defaultProps))
    for (c in u)
      d[c] === void 0 && (d[c] = u[c]);
  return fe.vnode && fe.vnode(p), p;
}
function kn() {
  document.dispatchEvent(new Event("BmToggleModal"));
}
function t4({
  children: n
}) {
  return le(() => {
    var s;
    const e = document.body, t = document.getElementById("bm_selectBikeButton"), i = (s = document.getElementsByTagName("bikematrix-bikeselector")) == null ? void 0 : s[0], a = (u) => {
      u.preventDefault(), e.classList.toggle("bm-modal-active"), i.classList.toggle("active");
    };
    return document.addEventListener("BmToggleModal", a), t == null || t.addEventListener("click", a), () => {
      document.removeEventListener("BmToggleModal", a), t == null || t.removeEventListener("click", a);
    };
  }, []), g(ie, {
    children: [g("div", {
      onClick: () => {
        kn();
      },
      class: ke("overlay", "fixed cursor-pointer inset-0 z-[2147483645] bg-black/40 transition-all duration-500 sm:duration-200")
    }), g("div", {
      className: ke("modal", "fixed pointer-events-none inset-0 mx-auto justify-end z-[2147483646] flex flex-col items-center outline-none transition-all duration-500 sm:duration-200 ease-in-out", "sm:justify-center"),
      children: g("div", {
        className: "flex sm:px-2 pointer-events-auto max-sm:max-h-[96%] sm:max-h-[90%] max-sm:h-[89vh] max-w-lg sm:max-w-[640px] flex-col items-center max-sm:flex-1 w-full bg-white rounded-t-3xl sm:rounded-xl shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.06)]",
        children: [g("div", {
          className: "sm:hidden mx-auto mt-4 h-[6px] w-[100px] rounded-full bg-gray-400/50",
          onClick: kn
        }), g("div", {
          className: "sm:hidden h-[10px]"
        }), g("div", {
          className: "relative flex flex-col w-full sm:h-full max-sm:flex-none max-sm:grow",
          children: g("div", {
            class: "modal-content max-sm:absolute sm:h-full max-sm:inset-0 overflow-x-hidden overflow-y-auto  px-8 sm:px-6",
            children: n
          })
        })]
      })
    })]
  });
}
const Fr = (n) => /* @__PURE__ */ Y("svg", { width: 7, height: 12, viewBox: "0 0 7 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M1 11L6 6L1 1", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), r4 = (n) => /* @__PURE__ */ Y("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("circle", { cx: 15.5, cy: 15.5, r: 15.5, fill: "#030712" }), /* @__PURE__ */ Y("path", { d: "M10.1974 17.1317L13.9955 20.4461L20.8639 10.8909", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), i4 = (n) => /* @__PURE__ */ Y("svg", { width: 31, height: 31, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("g", { clipPath: "url(#clip0_64_2)" }, /* @__PURE__ */ Y("path", { d: "M30.5 15.5C30.5 23.7843 23.7843 30.5 15.5 30.5C7.21573 30.5 0.5 23.7843 0.5 15.5C0.5 7.21573 7.21573 0.5 15.5 0.5C23.7843 0.5 30.5 7.21573 30.5 15.5Z", fill: "white", stroke: "#D1D5DB" })), /* @__PURE__ */ Y("path", { d: "M23.983 11.132C23.9699 10.9806 23.8699 10.8506 23.727 10.7988C23.5837 10.7466 23.4233 10.7822 23.3155 10.8894L21.1098 13.0866L18.6647 12.3153L17.8905 9.87937L20.0961 7.68201C20.2041 7.57458 20.2393 7.41475 20.1873 7.27224C20.1348 7.12945 20.0046 7.02999 19.8524 7.01688C18.5129 6.9019 17.2004 7.37836 16.2514 8.32387C14.9518 9.61873 14.6076 11.5096 15.217 13.1213C15.1504 13.1773 15.0847 13.2365 15.0199 13.3004L7.65736 20.2216C7.65476 20.2241 7.6522 20.2268 7.64939 20.2293C6.78354 21.092 6.78354 22.4955 7.64939 23.3583C8.51539 24.2209 9.91396 24.2104 10.7797 23.3477C10.7834 23.3443 10.7868 23.3408 10.7902 23.3369L17.677 15.945C17.7398 15.8822 17.798 15.8165 17.853 15.749C19.4713 16.3573 21.3705 16.0152 22.6713 14.7195C23.62 13.7739 24.0986 12.4663 23.983 11.132ZM9.67019 22.4264C9.35113 22.7442 8.83439 22.744 8.51536 22.4264C8.19644 22.1089 8.19644 21.5937 8.51536 21.2761C8.83439 20.9585 9.35113 20.9585 9.67019 21.2761C9.98911 21.5937 9.98911 22.1089 9.67019 22.4264Z", fill: "black" }), /* @__PURE__ */ Y("defs", null, /* @__PURE__ */ Y("clipPath", { id: "clip0_64_2" }, /* @__PURE__ */ Y("rect", { width: 31, height: 31, fill: "white" })))), n4 = (n) => /* @__PURE__ */ Y("svg", { width: 31, height: 31, viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M2 24.0437V22.6518C4.30404 21.9559 5.82929 20.347 6.17596 18.244C6.45967 16.523 5.87584 14.7802 4.66788 13.505L5.50401 12.1672C6.3441 12.2632 7.12499 12.2938 7.83019 12.2273C8.91308 12.1253 10.0603 11.7686 10.8965 10.814C11.7162 9.87828 11.9364 8.70751 11.9455 7.65019C11.9509 7.01984 11.882 6.33439 11.7615 5.60532L13.1089 4.93163C14.6862 6.27858 16.5967 7.00972 18.5085 6.50659C20.496 5.98355 21.7104 4.35171 22.2287 2.32023L23.4959 2.17943C23.7105 2.84427 23.9686 3.45839 24.2803 4.0055C24.8609 5.02453 25.7009 5.93317 26.8959 6.37534C28.1054 6.8229 29.35 6.6716 30.4872 6.21488C31.2478 5.9094 32.0092 5.4502 32.771 4.87155L33.84 5.40607C33.3102 7.17682 33.6407 8.97473 34.9205 10.3525C36.2854 11.8219 38.3837 12.4206 40.6053 12.1884L41.4091 13.3137C40.1484 14.904 39.5422 16.7943 40.0082 18.6621C40.4975 20.623 42.0098 21.9631 44 22.6091V23.6937C42.0295 24.646 40.407 25.9295 39.9934 27.9032C39.7449 29.089 40.0083 30.2272 40.4663 31.2395C40.7549 31.8775 41.1444 32.5183 41.6038 33.1622L41.0881 34.0648C39.1096 33.5569 37.1545 33.7409 35.7252 35.1442C34.3293 36.5148 34.0136 38.5186 34.2755 40.5318L32.7931 41.4583C31.191 40.0523 29.3504 39.2822 27.3831 40.0414C26.2841 40.4655 25.451 41.2846 24.816 42.1501C24.4114 42.7016 24.0463 43.3278 23.7127 44H22.6585C22.1786 42.2318 21.2165 40.6691 19.4091 40.0247C17.4936 39.3418 15.3888 40.0023 13.3765 41.2022L11.9877 40.5078C12.4255 38.6858 12.158 36.865 10.7918 35.5311C9.4171 34.1889 7.44044 33.8741 5.42929 34.2133L4.6584 32.9799C6.03869 31.6871 6.93069 30.0087 6.40539 28.071C6.07607 26.8563 5.24467 25.9088 4.25062 25.2068C3.60737 24.7526 2.85005 24.3664 2 24.0437Z", stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ Y("circle", { cx: 23, cy: 23, r: 12, stroke: "black", strokeWidth: 4 }), /* @__PURE__ */ Y("path", { d: "M23 39.75C32.2508 39.75 39.75 32.2508 39.75 23C39.75 13.7492 32.2508 6.25 23 6.25C13.7492 6.25 6.25 13.7492 6.25 23C6.25 32.2508 13.7492 39.75 23 39.75Z", stroke: "black", strokeWidth: 3.5 })), a4 = `.shared-icon{background-color:#fba157;padding:5px 10px;border-radius:8px;font-size:12px;display:flex;justify-content:center;align-items:center;color:#fff}
`, r2 = ({
  text: n
}) => g(ie, {
  children: [g("style", {
    type: "text/css",
    children: a4
  }), g("div", {
    className: "shared-icon",
    children: g("p", {
      className: "text",
      children: n || "Shared with you"
    })
  })]
});
function br({
  spanner: n,
  selected: e,
  settings: t,
  simple: i,
  bike: a,
  compact: s,
  readOnly: u,
  onClick: c,
  shared: d,
  custom: p,
  noSymbol: h,
  ...m
}) {
  var z;
  const b = (z = a.images) != null && z.length ? a.images : [Ii("bike.png")], v = Oe(null), [C, k] = Q(0), x = Oe(null);
  le(() => {
    const P = v == null ? void 0 : v.current;
    if (P) {
      var I = new IntersectionObserver(function(N) {
        var K = N.reduce(function(J, X) {
          return X.intersectionRatio > J.intersectionRatio ? X : J;
        });
        K.intersectionRatio > 0 && k(Number(K.target.getAttribute("data-slide")));
      }, {
        root: P,
        threshold: 0.8
      });
      return P.querySelectorAll("&>div").forEach((N) => {
        I.observe(N);
      }), () => {
        I.disconnect();
      };
    }
  }, [v]);
  function S(P) {
    if (!v.current)
      return;
    const I = v.current.querySelectorAll("&>div")[P];
    v.current.scrollLeft = I.clientWidth * P;
  }
  function A() {
    C != 0 && S(C - 1);
  }
  function F() {
    C != b.length - 1 && S(C + 1);
  }
  const E = (b == null ? void 0 : b.length) && C !== b.length - 1, L = (b == null ? void 0 : b.length) && C !== 0;
  return g("div", {
    class: ke("rounded-xl select-none border  py-4 relative", e ? "border-gray-950" : "border-gray-300"),
    ...m,
    onClick: (P) => {
      if (x.current && !x.current.contains(P.target))
        c(P);
      else {
        P.preventDefault();
        return;
      }
    },
    children: [!i && g("p", {
      class: "text-gray-950 px-4 text-base font-normal font-nunito leading-tight ",
      children: s ? g(ie, {
        children: u ? `${a.bike_Brand} ${a.year} ${a.spec}` : a ? `${a.brand} ${a.year} ${a.bikeSpec} ${a.variant ? a.variant : ""}` : ""
      }) : g(ie, {
        children: u ? a.bike_Name : a.name
      })
    }), g("div", {
      class: "relative mt-2",
      children: [g("div", {
        ref: v,
        class: ke("flex scroll-smooth snap-mandatory  no-scrollbar h-32 snap-x space-x-2 relative overflow-x-auto", "px-4"),
        "data-active-slide": C,
        children: [!u && b.length && b.map((P, I) => g("div", {
          "data-slide": I,
          class: "w-full h-full snap-center flex items-center flex-none",
          children: g("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: P,
            alt: P
          })
        }, I)), u && g("div", {
          class: "w-full h-full snap-center flex items-center flex-none",
          children: g("img", {
            class: "max-w-full pointer-events-none mx-auto max-h-full h-auto w-auto",
            src: `https://imagestore.bikematrix.io/${a.bike_Reference}/400-${a.bike_Thumbnail}`,
            alt: a.bike_Reference
          })
        })]
      }), g(ie, {
        children: [g("div", {
          onClick: A,
          class: ke("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center left-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", L ? "" : "hidden"),
          children: g(Fr, {
            class: "h-3 text-gray-500 -rotate-180"
          })
        }), g("div", {
          onClick: F,
          class: ke("border !ml-0 bg-white absolute w-9 h-9 flex items-center justify-center right-4 top-1/2 -translate-y-1/2 rounded-xl border-gray-300", E ? "" : "hidden"),
          children: g(Fr, {
            class: "h-3 text-gray-500 translate-x-px"
          })
        })]
      })]
    }), (b == null ? void 0 : b.length) > 1 && g("div", {
      class: "space-x-2 flex items-center justify-center",
      children: b.map((P, I) => g("div", {
        class: ke("rounded-xl w-2 h-2 transition-all duration-300", I == C ? " bg-gray-950 scale-125" : " bg-gray-200")
      }, I))
    }), (d || a.isShared) && g("div", {
      className: "absolute left-4 bottom-4",
      children: g(r2, {})
    }), (p || a.isCustom) && g("div", {
      className: "absolute left-4 bottom-4",
      children: g(r2, {
        text: "Custom"
      })
    }), g("div", {
      className: "spanner_wrapper absolute right-4 bottom-14 h-fit w-fit",
      ref: x,
      children: n && e && g(i4, {
        class: "cursor-pointer",
        onClick: (P) => {
          P.preventDefault(), !(a != null && a.isCustom) && !(a != null && a.isShared) ? Fe("/workshop") : a != null && a.isShared ? Fe("/read-only") : Fe("/bom");
        }
      })
    }), e && !t ? g(r4, {
      class: "absolute right-4 bottom-4 cursor-pointer"
    }) : t ? g(n4, {
      class: "absolute right-4 bottom-4 cursor-pointer",
      onClick: () => Fe("/settings")
    }) : u ? g("span", {}) : h ? g("span", {}) : g(ie, {
      children: g("span", {
        class: "border absolute right-4 bottom-4 rounded-full h-8 w-8 border-gray-300 bg-white/75"
      })
    })]
  });
}
function i2(n, e) {
  const t = () => {
    try {
      const s = window.localStorage.getItem(n);
      return s ? JSON.parse(s) : e;
    } catch (s) {
      return console.error(s), e;
    }
  }, [i, a] = Q(t);
  return le(() => {
    try {
      if (!i)
        window.localStorage.removeItem(n);
      else {
        const s = JSON.stringify(i);
        window.localStorage.setItem(n, s);
      }
    } catch (s) {
      console.error(s);
    }
  }, [n, i]), [i, a, t];
}
function o4(n, e) {
  const t = () => {
    try {
      const s = window.sessionStorage.getItem(n);
      return s ? JSON.parse(s) : e;
    } catch (s) {
      return console.error(s), e;
    }
  }, [i, a] = Q(t);
  return le(() => {
    try {
      if (!i)
        window.sessionStorage.removeItem(n);
      else {
        const s = JSON.stringify(i);
        window.sessionStorage.setItem(n, s);
      }
    } catch (s) {
      console.error(s);
    }
  }, [n, i]), [i, a, t];
}
const Pu = {
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
}, Df = Q2(void 0), s4 = ({
  children: n
}) => {
  var re;
  const e = window.BikeMatrix.getConfig(), [t, i] = i2(Al, null), [a, s] = i2("bm_lounge", []), u = new Xt(e.apiUrl, e.apiKey, e.apiToken, e.isShopify), [c, d] = Q(Pu), p = Oe({}), [h, m] = Q([]), [b, v] = Q(!1), [C, k] = Q(null);
  le(() => {
    (async () => {
      const M = await xf(t == null ? void 0 : t.brandId);
      k(M);
    })();
  }, [t == null ? void 0 : t.brandId]);
  function x($) {
    d((M) => {
      var G;
      return {
        ...M,
        [$]: {
          options: [],
          value: (G = Pu[$]) == null ? void 0 : G.value
        }
      };
    });
  }
  function S($, M) {
    d((G) => (G[$].value = M, {
      ...G
    }));
  }
  const A = () => {
    d(($) => {
      var M;
      return {
        ...Pu,
        brand: {
          options: ((M = $.brand) == null ? void 0 : M.options) || []
        }
      };
    });
  }, F = ($) => {
    i({
      ...$
    }), s([...(a || []).filter((M) => !!M.key && M.key !== $.key), $]);
  }, E = ($) => {
    (t == null ? void 0 : t.key) === $ && i(null), s([...(a || []).filter((M) => !!M.key && M.key !== $)]);
  }, L = () => {
    e.logLevel === "verbose" && console.log("Dispatch BikeChanged..."), document.dispatchEvent(new Event("BikeChanged", {
      bubbles: !0,
      composed: !0
    }));
  }, z = () => {
    setTimeout(() => {
      A(), Fe("/");
    }, 500);
  }, P = async () => {
    const $ = await u.getBikeBrands();
    sessionStorage.setItem("bm_brands", JSON.stringify($)), d((M) => (M.brand.options = $.map((G) => ({
      label: G.bike_Brand,
      value: G.bike_Brand_ID
    })), {
      ...M
    }));
  }, I = async () => u.getBikeModels(c.brand.value).then(($) => {
    d((M) => (M.model.options = $.map((G) => ({
      label: G.model_Family,
      value: G.model_Family_ID
    })), {
      ...M
    }));
  }), N = async () => u.getBikeFrameSeries(c.model.value).then(($) => {
    d((M) => {
      var te, he;
      const G = [];
      return M.frameSeries.options = $.reduce((ue, Me) => {
        const Le = {
          label: Me.model_Spec,
          value: Me.model_Spec_ID
        };
        return G.includes(Le.value) || (G.push(Le.value), ue.push(Le)), ue;
      }, []), ((te = M.frameSeries.options) == null ? void 0 : te.length) === 1 && (M.frameSeries.value = (he = M.frameSeries.options[0]) == null ? void 0 : he.value), {
        ...M
      };
    });
  }), K = async () => u.getBikeSpecs(c.frameSeries.value).then(($) => {
    const M = [], G = [], te = [], he = [];
    $.forEach((ue) => {
      var xt, Je;
      const Me = ue.year + "-" + ue.spec.replace(/[^0-9a-zA-Z]/g, "") + (ue.bike_Variant ? "-" + ue.bike_Variant.replace(/[^0-9a-zA-Z]/g, "") : ""), Le = {
        label: ue.spec,
        value: ue.spec
      };
      if (M.includes(Le.value) || (M.push(Le.value), te.push(Le)), !G.includes(Me)) {
        G.push(Me);
        const Nt = {
          _key: Me,
          key: ue.bike_Key,
          name: ue.bike_Name,
          variant: ue.bike_Variant,
          brand: ue.bike_Brand,
          brandId: ue.bike_Brand_ID,
          model: ue.model_Family,
          modelId: ue.model_Family_ID,
          frameSeries: ue.model_Spec,
          frameSeriesId: ue.model_Spec_ID,
          bikeSpec: ue.spec,
          year: ue.year,
          images: [ue.bike_Thumbnail, ...((xt = ue == null ? void 0 : ue.bike_Images) == null ? void 0 : xt.split(",")) || []].filter((Ot) => !!Ot).map((Ot) => `https://imagestore.bikematrix.io/${ue.bike_Reference}/400-${Ot}`)
        }, Ct = $.reduce((Ot, nt) => (nt.year == ue.year && nt.spec === ue.spec && nt.model_Spec === ue.model_Spec && nt.bike_Variant === ue.bike_Variant && Ot.push({
          key: nt.bike_Key,
          name: nt.bike_Name,
          variant: nt.bike_Variant,
          sizeId: nt.bike_Size_ID,
          size: nt.bike_Size
        }), Ot), []);
        (Je = Ct == null ? void 0 : Ct.filter((Ot) => !!Ot.sizeId)) != null && Je.length && (Nt.sizes = Ct), he.push(Nt);
      }
      p.current[c.frameSeries.value] = Array.from(/* @__PURE__ */ new Set([...p.current[c.frameSeries.value] || [], ue.year]));
    }), d((ue) => (ue.bikeSpec.options = te, {
      ...ue
    })), m(he);
  }), J = async () => {
    d(($) => {
      const M = p.current[$.frameSeries.value] || [];
      return $.year.options = M.map((G) => ({
        label: G,
        value: G
      })), {
        ...$
      };
    });
  }, X = async () => {
    d(($) => {
      var M, G, te;
      if ($.frameSize.options = (M = c == null ? void 0 : c.value) != null && M.sizes ? c.value.sizes.filter((he) => !!he.size).map((he) => ({
        label: he.size,
        value: he.size
      })) : [], ((G = $.frameSize.options) == null ? void 0 : G.length) === 1) {
        const he = (te = $.frameSize.options[0]) == null ? void 0 : te.value;
        $.frameSize.value = he, $.value.frameSize = he;
      }
      return {
        ...$
      };
    });
  };
  le(() => (document.addEventListener("BmToggleModal", z), () => {
    document.removeEventListener("BmToggleModal", z);
  }), []);
  const [ne, ce] = o4("bm_diagnostics", []), be = () => {
    const M = new URLSearchParams(window.location.search).get("diagnostics");
    JSON.parse(sessionStorage.getItem("bm_diagnostics")).includes(M) || ce([...ne, M]), M === null && ce([]);
  };
  le(() => {
    L(), be();
  }, [t]), le(() => {
    sessionStorage.getItem("bm_brands") ? d(($) => ($.brand.options = JSON.parse(sessionStorage.getItem("bm_brands")).map((M) => ({
      label: M.bike_Brand,
      value: M.bike_Brand_ID
    })), {
      ...$
    })) : P();
  }, []), le(() => {
    c.brand.value && (x("model"), x("frameSeries"), I());
  }, [c.brand.value]), le(() => {
    c.model.value && (x("frameSeries"), N());
  }, [c.model.value]), le(() => {
    c.frameSeries.value && (x("bikeSpec"), x("year"), m([]), K().then(() => {
      J();
    }));
  }, [c.frameSeries.value]), le(() => {
    c.value._key && (x("frameSize"), X());
  }, [(re = c.value) == null ? void 0 : re._key]), le(() => {
    c.frameSize.value && d(($) => {
      var M, G;
      return $.value = {
        ...$.value,
        ...((G = (M = $ == null ? void 0 : $.value) == null ? void 0 : M.sizes) == null ? void 0 : G.find((te) => c.frameSize.value == te.size)) || {}
      }, delete $.value.sizes, $;
    });
  }, [c.frameSize.value]);
  const ve = {
    // Wizard Bike
    bike: c,
    setBike: d,
    setBikeAttr: S,
    resetBike: A,
    // Search Results
    results: h,
    loading: b,
    setLoading: v,
    // Compatible Parts
    compatibleCollections: C,
    // Final Bike
    currentBike: t,
    setCurrentBike: i,
    removeBike: E,
    saveBike: F,
    // Bike Lounge
    lounge: a
  };
  return g(Df.Provider, {
    value: ve,
    children: n
  });
}, Pt = () => {
  const n = rf(Df);
  if (!n)
    throw new Error("useBikeState must be used within a BikeProvider");
  return n;
};
function bi() {
  const {
    t: n
  } = We();
  return g(ie, {
    children: [g("p", {
      class: "text-gray-600 max-w-sm mx-auto mt-4 text-center font-normal text-xs",
      children: n("bikeselector_home_footer_message")
    }), g("a", {
      href: "https://bikematrix.io/landed-it",
      target: "_blank",
      class: "text-gray-950 block  underline  mb-4 font-bold mt-4 text-center text-xs",
      children: n("bikematrix_poweredby")
    })]
  });
}
const u4 = (n) => /* @__PURE__ */ Y("svg", { width: 17, height: 17, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M16.983 4.13197C16.9699 3.98064 16.8699 3.85064 16.727 3.7988C16.5837 3.74665 16.4233 3.78215 16.3155 3.88937L14.1098 6.08655L11.6647 5.31527L10.8905 2.87937L13.0961 0.682011C13.2041 0.574581 13.2393 0.414746 13.1873 0.272238C13.1348 0.129446 13.0046 0.0299881 12.8524 0.0168782C11.5129 -0.0980992 10.2004 0.378357 9.25142 1.32387C7.95176 2.61873 7.60759 4.50961 8.21705 6.12135C8.15043 6.17726 8.08471 6.2365 8.01987 6.30039L0.65736 13.2216C0.654763 13.2241 0.652203 13.2268 0.649393 13.2293C-0.216464 14.092 -0.216464 15.4955 0.649393 16.3583C1.51539 17.2209 2.91396 17.2104 3.77967 16.3477C3.78341 16.3443 3.78682 16.3408 3.79024 16.3369L10.677 8.94505C10.7398 8.88222 10.798 8.8165 10.853 8.74903C12.4713 9.3573 14.3705 9.01524 15.6713 7.71952C16.62 6.77394 17.0986 5.46628 16.983 4.13197ZM2.67019 15.4264C2.35113 15.7442 1.83439 15.744 1.51536 15.4264C1.19644 15.1089 1.19644 14.5937 1.51536 14.2761C1.83439 13.9585 2.35113 13.9585 2.67019 14.2761C2.98911 14.5937 2.98911 15.1089 2.67019 15.4264Z", fill: "black" }));
function l4() {
  const {
    currentBike: n,
    setCurrentBike: e,
    lounge: t,
    removeBike: i,
    resetBike: a
  } = Pt(), {
    t: s
  } = We(), {
    virtualWorkshop: u
  } = window.BikeMatrix.getConfig();
  return le(() => {
    mt.value = null;
  }, []), g(ie, {
    children: [t != null && t.length ? t == null ? void 0 : t.filter((c) => !!c._key).map((c) => g("div", {
      class: "mb-4 relative",
      children: [g("div", {
        onClick: () => i(c.key),
        class: "w-7 h-7 z-10 -right-2 -top-2 flex items-center justify-center absolute bg-gray-200 text-gray-800 rounded-full",
        children: g(ya, {
          class: "h-3 w-3"
        })
      }), g(br, {
        onClick: (d) => {
          d.preventDefault(), e((n == null ? void 0 : n.key) === (c == null ? void 0 : c.key) ? null : {
            ...c
          });
        },
        bike: c,
        selected: (n == null ? void 0 : n.key) === (c == null ? void 0 : c.key),
        spanner: u,
        custom: c == null ? void 0 : c.isCustom
      })]
    }, c.key)) : g("div", {
      class: ke("relative mb-4 z-10 "),
      children: [g("div", {
        class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
        children: [g("span", {
          class: "block rounded-lg h-6 w-1/2 bg-gray-200"
        }), g("img", {
          class: "w-auto mx-auto h-auto max-h-36 opacity-30",
          src: Ii("bike.png")
        }), g("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), g("div", {
        class: ke("w-full relative bg-white border -z-10 border-b-0 border-gray-300 rounded-t-xl h-20  mb-4", "after:bottom-0 after:-inset-x-px after:-top-6 after:bg-gradient-to-t after:absolute after:from-white after:to-transparent"),
        children: [g("span", {
          class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
        }), g("span", {
          class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
        })]
      }), g("div", {
        class: " text-gray-800 text-center flex -mt-5 z-20 justify-center",
        children: [s("bikeselector_home_empty"), g("br", {}), s("bikeselector_home_add_a_bike")]
      })]
    }), g("button", {
      onClick: (c) => {
        c.preventDefault(), a(), Fe("/add");
      },
      class: ke("duration-300 transition-colors sticky bottom-[128px] mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", t.length && !(n != null && n.key) ? "bg-gray-950 text-white" : t.length ? "bg-gray-200 text-gray-800" : "bg-gray-950 text-white", !n && "bottom-0", n && u && "bottom-[128px]", n && !u && "bottom-[72px]"),
      children: [s("bikeselector_home_add_btn"), g(ya, {
        class: "h-3 absolute [&>path]:stroke-[2px] right-5 justify-self-end rotate-45"
      })]
    }), !!(t != null && t.length) && !!(n != null && n.key) && u && g("button", {
      onClick: (c) => {
        c.preventDefault(), !(n != null && n.isCustom) && !(n != null && n.isShared) ? Fe("/workshop") : n != null && n.isCustom && !(n != null && n.isShared) ? Fe("/bom") : !(n != null && n.isCustom) && (n != null && n.isShared) && Fe("/read-only");
      },
      class: ke("duration-300 sticky bottom-[72px] transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: [s("virtualworkshop_title"), g(u4, {
        class: "h-5 absolute right-5 justify-self-end"
      })]
    }), !!(t != null && t.length) && !!(n != null && n.key) && g("button", {
      onClick: (c) => {
        c.preventDefault(), Fe("/browse");
      },
      class: ke("duration-300 sticky bottom-4 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", t.length ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-800"),
      children: s("bikeselector_home_browse_btn")
    }), g(bi, {})]
  });
}
const c4 = (n) => /* @__PURE__ */ Y("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("circle", { cx: 10, cy: 10, r: 10, fill: "#030712" }), /* @__PURE__ */ Y("path", { d: "M6.57886 11.0526L9.02922 13.191L13.4604 7.02636", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
function pa({
  type: n,
  title: e,
  placeholder: t,
  options: i = [],
  disabled: a = void 0,
  loading: s = !1,
  infoVisible: u = !1,
  children: c = void 0,
  ...d
}) {
  const {
    t: p
  } = We(), h = (b) => {
    switch (b) {
      case "brand":
        return p("bikeselector_addbike_brand_desc");
      case "model":
        return p("bikeselector_addbike_model_desc");
      case "framespec":
        return p("bikeselector_addbike_framespec_desc");
      case "framesize":
        return p("bikeselector_size_framesize_desc");
      default:
        return "";
    }
  }, m = (b, v) => b === "framesize" && v === "One Size" ? p("bikeselector_size_framesize_one_size") : v;
  return g(ie, {
    children: g("div", {
      class: "w-full flex flex-col space-y-2",
      children: [g("label", {
        class: "text-gray-800 font-bold text",
        children: e
      }), c && g("div", {
        class: ke("!my-0 overflow-hidden box-border transition-all duration-300", u ? "max-h-screen" : "h-0"),
        children: [g("p", {
          class: "text-gray-600 my-1 italic text-sm",
          children: h(n)
        }), g("div", {
          class: ke("rounded-xl overflow-hidden my-0 relative py-1 h-32 bg-gray-100 w-full"),
          children: c
        })]
      }), g("div", {
        class: "w-full flex items-center relative",
        children: [g("select", {
          placeholder: t,
          class: ke("rounded-xl peer !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg bg-white placeholder:text-gray-700 text-gray-700", "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400", d.class),
          disabled: a,
          ...d,
          children: [g("option", {
            value: "",
            selected: !d.value,
            disabled: !0,
            children: t
          }), i.map((b) => g("option", {
            value: b.value,
            disabled: b.disabled,
            children: m(n, b.label)
          }))]
        }), s ? g("span", {
          class: "absolute block loader animate-spin right-4 w-5 h-5"
        }) : d.value && typeof a == "boolean" ? g(c4, {
          class: "right-3 absolute w-5 pointer-events-none"
        }) : g(Fr, {
          class: "absolute h-3 text-gray-700 pointer-events-none rotate-90 right-5 peer-disabled:text-gray-400"
        })]
      })]
    })
  });
}
const j = {
  id: null,
  name: null,
  product_category_id: null,
  swap: !1,
  version_id: null,
  unsaved_changes: null
}, ea = {
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
    stem: j,
    handlebar: j,
    seat_Post: j,
    seat_Post_Clamp: j,
    dropper_Lever: j,
    lockout_Lever: j,
    grips: j,
    pedals: j,
    saddle: j
  },
  "frame_&_fork": {
    fork: j,
    rear_Shock: j,
    headseat: j
  },
  drivetrain: {
    chainguide: j,
    bottom_Bracket: j,
    crankset: j,
    largest_Chainring: j,
    second_Largest_Chainring: j,
    third_Largest_Chainring: j,
    chainring_Spider: j,
    chain: j,
    cassette: j,
    rear_Derailleur: j,
    front_Derailleur: j,
    shifter_RH: j,
    shifter_LH: j,
    shift_Brake_Combo_RH: j,
    shift_Brake_Combo_LH: j,
    brake_Lever_RH: j,
    brake_Lever_LH: j,
    shifter_Adapter_RH: j,
    shifter_Adapter_LH: j
  },
  brakes: {
    brake_Caliper_Front: j,
    brake_Caliper_Rear: j,
    brake_Pads_Front: j,
    brake_Pads_Rear: j,
    brake_Rotor_Front: j,
    brake_Rotor_Rear: j,
    brake_Adapter_Front: j,
    brake_Adapter_Rear: j
  },
  "wheels_&_tyres": {
    front_Wheel: j,
    front_Axle: j,
    rear_Wheel: j,
    rear_Axle: j,
    tyre_Front: j,
    tyre_Rear: j
  },
  is_E_Bike: null,
  eMotor_System_ID: null,
  eBattery_ID: null,
  eControl_Unit_ID: null,
  eCharger_ID: null,
  eInterconnects_ID: null
}, ta = {
  cockpit: {
    stem: j,
    handlebar: j,
    seat_Post: j,
    seat_Post_Clamp: j,
    dropper_Lever: j,
    lockout_Lever: j,
    grips: j,
    pedals: j,
    saddle: j
  },
  "frame_&_fork": {
    headset: j,
    fork: j,
    rear_Shock: j
  },
  drivetrain: {
    chainguide: j,
    bottom_Bracket: j,
    crankset: j,
    largest_Chainring: j,
    second_Largest_Chainring: j,
    third_Largest_Chainring: j,
    chainring_Spider: j,
    chain: j,
    cassette: j,
    rear_Derailleur: j,
    front_Derailleur: j,
    shifter_RH: j,
    shifter_LH: j,
    shift_Brake_Combo_RH: j,
    shift_Brake_Combo_LH: j,
    brake_Lever_RH: j,
    brake_Lever_LH: j,
    shifter_Adapter_RH: j,
    shifter_Adapter_LH: j
  },
  brakes: {
    brake_Caliper_Front: j,
    brake_Caliper_Rear: j,
    brake_Pads_Front: j,
    brake_Pads_Rear: j,
    brake_Rotor_Front: j,
    brake_Rotor_Rear: j,
    brake_Adapter_Front: j,
    brake_Adapter_Rear: j
  },
  "wheels_&_tyres": {
    front_Wheel: j,
    front_Axle: j,
    rear_Wheel: j,
    rear_Axle: j,
    tyre_Front: j,
    tyre_Rear: j
  }
}, $r = {
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
}, zu = (n, e) => Object.keys(n).includes(e), ka = (n) => (Object.keys($r).forEach((e) => {
  Object.keys(n).forEach((t) => {
    `${e}_ID` === t && ($r[e].id = n[t]), `${e}_Name` === t && ($r[e].name = n[t]), `${e}_Product_Category_ID` === t && ($r[e].product_category_id = n[t]), `${e}_Swap` === t && ($r[e].swap = n[t]), `${e}_Version_ID` === t && ($r[e].version_id = n[t]), `${e}_Unsaved_Changes` === t && ($r[e].unsaved_changes = n[t]);
  });
}), Object.keys(ta).forEach((e) => {
  Object.keys($r).forEach((t) => {
    zu(ta[e], t) && (ta[e][t] = $r[t]);
  });
}), Object.keys(ta).forEach((e) => {
  zu(ea, e) && (ea[e] = ta[e]);
}), Object.keys(n).forEach((e) => {
  zu(ea, e) && (ea[e] = n[e]);
}), ea), Af = (n) => /* @__PURE__ */ Y("svg", { width: 25, height: 25, viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("circle", { cx: 12.5, cy: 12.5, r: 12, fill: "white", stroke: "black" }), /* @__PURE__ */ Y("path", { d: "M9 16.0711L12.5355 12.5355M12.5355 12.5355L16.0711 9M12.5355 12.5355L16.0711 16.0711M12.5355 12.5355L9 9", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" })), d4 = `.input_container{display:flex;flex-direction:column}.input_wrapper{width:100%;border-radius:12px;padding:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:space-between}.input_wrapper input{width:100%}
`, Sf = ({
  value: n,
  setValue: e,
  placeholder: t,
  type: i,
  error: a,
  submitInput: s,
  label: u,
  instructions: c
}) => g(ie, {
  children: [g("style", {
    type: "text/css",
    children: d4
  }), g("div", {
    className: "input_container",
    children: [u && g("label", {
      class: "text-gray-800 font-bold text",
      children: u
    }), c && g("label", {
      class: "text-gray-600 my-1 italic text-sm",
      children: c
    }), g("div", {
      className: "input_wrapper",
      children: [g("input", {
        placeholder: t,
        value: n,
        onChange: (d) => e(d.currentTarget.value),
        type: i,
        onKeyDown: (d) => {
          d.key === "Enter" && s();
        }
      }), g(Af, {
        height: 20,
        width: 20,
        onClick: () => e(""),
        className: "cursor-pointer"
      })]
    }), a && g("p", {
      className: "text-red-500 text-xs pt-1",
      children: a
    })]
  })]
}), Ef = ({
  messages: n
}) => g("div", {
  className: "flex h-4 w-auto justify-center",
  children: n && g("p", {
    className: "message text-xs text-red-500",
    children: n
  })
}), p4 = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`;
function Ra({
  isLoading: n,
  colour: e
}) {
  return g(ie, {
    children: [g("style", {
      type: "text/css",
      children: p4
    }), g("div", {
      class: "lds-ring",
      id: "bm-loading-spinner",
      style: {
        display: n ? "inline-block" : "none"
      },
      children: [g("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      }), g("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      }), g("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      }), g("div", {
        style: {
          border: `2px solid ${e}`,
          borderColor: `${e} transparent transparent transparent`
        }
      })]
    })]
  });
}
const gi = ({
  onClick: n,
  primary: e,
  text: t,
  loading: i,
  disabled: a,
  sticky: s,
  children: u,
  active: c = !0
}) => g("button", {
  onClick: (d) => {
    !a && !i && (d.preventDefault(), n());
  },
  class: ke("duration-300 bottom-4 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", `${e && c ? "bg-gray-950 text-white" : e && !c ? "bg-gray-200 text-gray-400 " : "bg-gray-200 text-gray-800"} ${s && "sticky"} `),
  style: {
    cursor: a ? "not-allowed" : "pointer",
    opacity: a ? 0.5 : 1
  },
  children: i ? g(Ra, {
    isLoading: i,
    colour: e ? "#fff" : "#000"
  }) : g(ie, {
    children: [g("span", {
      className: u ? "ml-auto" : "",
      children: t
    }), u]
  })
});
function f4() {
  const n = window.BikeMatrix.getConfig(), {
    bike: e,
    setBikeAttr: t
  } = Pt(), {
    brand: i,
    model: a,
    frameSeries: s
  } = e, {
    t: u
  } = We(), [c, d] = Q([]), [p, h] = Q(!1), m = new Xt(n.apiUrl, n.apiKey, n.apiToken, n.isShopify), [b, v] = Q(null), [C, k] = Q(""), x = i.value, S = i.value && a.value;
  le(() => {
    const F = n.bikeSelectorBrands ? n.bikeSelectorBrands.split(",").filter((E) => E !== "") : [];
    if (F.length > 0 && i.options.length > 0) {
      let E = [];
      i.options.forEach((L) => {
        F.includes(L.value.toString().trim()) && E.push(L);
      }), d(E);
    } else
      d(i.options);
  }, [n.bikeSelectorBrands, i.options]);
  const A = async () => {
    var L;
    h(!0);
    const F = await m.getBikeBom(C);
    if (!(F != null && F.success)) {
      h(!1), v(F.error);
      return;
    }
    const E = ka(F.data);
    mt.value = E, e.value = {
      bikeSpec: E.spec,
      brand: E.bike_Brand,
      brandId: E.bike_Brand_ID,
      frameSeries: E.spec,
      frameSeriesId: E.model_Spec_ID,
      frameSize: E.bike_Size,
      images: [`https://imagestore.bikematrix.io/${E.bike_Reference}/400-${E.bike_Thumbnail}`],
      isCustom: E.bike_Type === "Custom_Bike",
      isShared: E.bike_Type === "Shared_Bike",
      key: E.bike_Type === "Shared_Bike" ? E.share_Bike_Key : E.bike_Key,
      model: E.model_Family,
      modelId: E.model_Family_ID,
      name: E.bike_Name,
      size: E.bike_Size,
      sizeId: E.bike_Size_ID,
      variant: E.bike_Variant,
      year: E.year,
      _key: `${E.year}-${(L = E.spec) == null ? void 0 : L.replace(" ", "")}`
    }, h(!1), Fe("/confirm");
  };
  return g(ie, {
    children: [g("div", {
      class: "space-y-5 mb-6 relative w-full flex flex-col",
      children: [n.virtualWorkshop && g(ie, {
        children: [g(Sf, {
          value: C,
          setValue: (F) => k(F),
          label: "Bike Matrix ID",
          placeholder: "Enter your Bike Matrix ID",
          type: "text",
          instructions: u("virtualworkshop_bm_id_text")
        }), g("div", {
          className: "flex justify-center items-center gap-2",
          children: [g("div", {
            className: "bg-gray-300 h-[1px] w-full"
          }), g("p", {
            className: " font-semibold text-sm",
            children: "OR"
          }), g("div", {
            className: "bg-gray-300 h-[1px] w-full"
          })]
        })]
      }), g(pa, {
        type: "brand",
        title: u("bikeselector_addbike_brand_label"),
        placeholder: u("bikeselector_addbike_brand_select"),
        value: i.value,
        options: c,
        onChange: (F) => {
          t("brand", F.target.value);
        },
        loading: !i.options.length,
        disabled: !i.options.length,
        info: !0,
        infoVisible: !i.value,
        children: g("img", {
          src: Ii("info-brand.svg"),
          class: "w-full h-full"
        })
      }), g(pa, {
        type: "model",
        title: u("bikeselector_addbike_model_label"),
        placeholder: u("bikeselector_addbike_model_select"),
        value: a.value,
        options: a.options,
        onChange: (F) => {
          t("model", F.target.value);
        },
        loading: x && !a.options.length,
        disabled: !x || !a.options.length,
        info: !0,
        infoVisible: x && !a.value,
        children: g("img", {
          src: Ii("info-model.svg"),
          class: "w-full h-full"
        })
      }), g(pa, {
        type: "framespec",
        title: u("bikeselector_addbike_framespec_label"),
        placeholder: u("bikeselector_addbike_framespec_select"),
        value: s.value,
        loading: S && !s.options.length,
        options: s.options,
        onChange: (F) => {
          t("frameSeries", F.target.value);
        },
        disabled: !S || !s.options.length,
        info: !0,
        infoVisible: S && !s.value,
        children: g("img", {
          src: Ii("info-frameseries.svg"),
          class: "w-full h-full"
        })
      })]
    }), g(Ef, {
      messages: b
    }), g(gi, {
      primary: !0,
      text: u("bikeselector_addbike_find_btn"),
      onClick: () => {
        i.value && a.value && s.value ? Fe("/search") : C && A();
      },
      active: i.value && a.value && s.value || C,
      loading: p,
      children: g(Fr, {
        class: "h-3 ml-auto justify-self-end"
      })
    })]
  });
}
function h4() {
  var C, k, x, S;
  const {
    bike: n,
    setBike: e,
    setBikeAttr: t,
    results: i,
    loading: a
  } = Pt(), {
    year: s,
    bikeSpec: u
  } = n, {
    t: c
  } = We(), [d, p] = [n.value, (A) => e((F) => ({
    ...F,
    value: A
  }))], h = Gr(() => {
    const A = i == null ? void 0 : i.filter((F) => {
      var L;
      let E = !0;
      return u.value && (E = F.bikeSpec === u.value), E && s.value.length && (E = (L = s.value) == null ? void 0 : L.includes(F.year)), E;
    });
    return A.some((F) => F._key == d._key) || p({}), A;
  }, [i, u.value, s.value]), m = Gr(() => u.value ? i.filter((F) => u.value == F.bikeSpec).map((F) => F.year) : s.options.map((F) => F.value), [u.value]), b = Gr(() => {
    var F;
    if (!((F = s.value) != null && F.length))
      return u.options;
    const A = i.filter((E) => {
      var L;
      return (L = s.value) == null ? void 0 : L.includes(E.year);
    }).map((E) => E.bikeSpec);
    return u.options.map((E) => ({
      ...E,
      disabled: !A.includes(E.value)
    }));
  }, [u.options, s.value]), v = (A) => A === 0 ? c("bikeselector_search_no_bikes_found") : A === 1 ? c("bikeselector_search_one_bike_found") : c("bikeselector_search_number_bikes_found", {
    number_found: A
  });
  return g(ie, {
    children: [g("div", {
      class: "space-y-3 mb-6 relative w-full flex flex-col",
      children: [g(pa, {
        type: "bikespec",
        title: c("bikeselector_search_bikespec_label"),
        placeholder: c("bikeselector_search_bikespec_select"),
        value: u.value,
        options: [{
          label: c("bikeselector_search_bikespec_select_all"),
          value: ""
        }, ...b],
        onChange: (A) => {
          t("bikeSpec", A.target.value);
        },
        disabled: !((C = u.options) != null && C.length),
        loading: !((k = u.options) != null && k.length)
      }), g("div", {
        class: "w-full flex flex-col space-y-2",
        children: [g("label", {
          class: "text-gray-800 font-bold text",
          children: c("bikeselector_search_year_label")
        }), g("div", {
          class: ke("flex space-x-2 overflow-x-auto", "-mx-8 w-[calc(100%_+_64px)] px-8 no-scrollbar"),
          children: (x = s.options) != null && x.length ? (S = s.options) == null ? void 0 : S.map((A) => {
            var L;
            const F = u.value && !m.includes(A.value), E = (L = s.value) == null ? void 0 : L.includes(A.value);
            return g("div", {
              onClick: () => {
                F || t("year", E ? s.value.filter((z) => z !== A.value) : [...s.value, A.value]);
              },
              class: ke("rounded-full cursor-pointer items-center flex border  py-2 px-4", E ? "pr-3 bg-gray-950 border-gray-950 text-white" : "border-gray-300 text-gray-700 ", F && "hidden"),
              children: [A.label, E && g(ya, {
                class: "w-3 h-3 ml-2"
              })]
            });
          }) : Array(2).fill(0).map((A, F) => g("div", {
            class: "rounded-full items-center flex border py-2 bg-gray-100 px-4 bg-100 border-gray-300 animate-pulse",
            children: g("span", {
              class: "rounded-lg bg-gray-100 w-9 h-5"
            })
          }, F))
        })]
      }), g("div", {
        class: ke("text-nowrap font-medium w-full flex", "[&>span]:text-gray-500 [&>span]:font-normal"),
        children: [a ? (
          // "Searching..."
          g(ie, {
            children: c("bikeselector_search_searching")
          })
        ) : g(ie, {
          children: v(h.length)
        }), " ", (i == null ? void 0 : i.length) > 0 && g(ie, {
          children: [g("span", {
            children: "("
          }), g("span", {
            class: "whitespace-nowrap overflow-hidden text-ellipsis truncate",
            children: [i[0].brand, " ", i[0].frameSeries]
          }), g("span", {
            children: ")"
          })]
        })]
      }), g("div", {
        class: "grid grid-cols-1 sm:grid-cols-2 gap-4",
        children: h != null && h.length && !a ? h.map((A, F) => g(br, {
          "data-key": A._key,
          bike: A,
          selected: A._key === d._key,
          onClick: (E) => {
            E.preventDefault(), p(A);
          },
          compact: !0
        }, A._key)) : Array(a ? 2 : 1).fill(0).map((A, F) => g("div", {
          class: ke("w-full relative rounded-xl h-40 bg-white border border-gray-200 ", a && "animate-pulse"),
          children: [g("span", {
            class: " absolute left-4 top-4 rounded-lg h-6 w-1/2 bg-gray-200"
          }), g("span", {
            class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-200"
          })]
        }, F))
      })]
    }), g("button", {
      onClick: (A) => {
        var F, E;
        if (A.preventDefault(), d._key) {
          const L = (F = this.base.querySelector(`[data-key="${d._key}"] [data-active-slide]`)) == null ? void 0 : F.getAttribute("data-active-slide"), P = [(E = this.base.querySelector(`[data-key="${d._key}"] [data-slide="${L}"] img`)) == null ? void 0 : E.src].filter((I) => !!I);
          P != null && P.length && e((I) => (I.value = {
            ...I.value || {},
            images: P
          }, {
            ...I
          })), Fe("/size");
        }
      },
      class: ke("duration-300 transition-colors sticky bottom-6 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", d._key ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [g("span", {
        class: "ml-auto",
        children: c("bikeselector_search_confirm_btn")
      }), " ", g(Fr, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
function g4() {
  var s, u;
  const {
    bike: n,
    setBikeAttr: e,
    setBike: t
  } = Pt(), {
    frameSize: i
  } = n, {
    t: a
  } = We();
  return le(() => {
    var c;
    (c = i.options) != null && c.length || Fe("/confirm");
  }, []), g(ie, {
    children: [g(br, {
      bike: n.value,
      selected: !0,
      compact: !0
    }), g("div", {
      class: " mt-4 mb-6 relative w-full flex flex-col",
      children: g(pa, {
        type: "framesize",
        instruction: !0,
        title: a("bikeselector_size_framesize_label"),
        placeholder: a("bikeselector_size_framesize_select"),
        value: i.value,
        options: i.options,
        onChange: (c) => {
          e("frameSize", c.target.value), t((d) => {
            var p;
            return d.value.frameSize = ((p = i.options.find((h) => h.value == c.target.value)) == null ? void 0 : p.label) || "", d;
          });
        },
        selected: !0,
        info: !0,
        infoVisible: !0,
        disabled: !((s = i.options) != null && s.length),
        loading: !((u = i.options) != null && u.length),
        children: g("img", {
          src: Ii("info-size.svg"),
          class: "w-full h-full"
        })
      })
    }), g("button", {
      onClick: (c) => {
        c.preventDefault(), i.value && Fe("/confirm");
      },
      class: ke("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 pr-5 w-full flex justify-center items-center", i.value ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-400 "),
      children: [g("span", {
        class: "ml-auto",
        children: a("bikeselector_size_confirm_btn")
      }), " ", g(Fr, {
        class: "h-3 ml-auto justify-self-end"
      })]
    })]
  });
}
const Cr = Zt({
  title: "",
  step: 0,
  back: ""
});
function m4({
  children: n
}) {
  const {
    t: e
  } = We();
  return g(ie, {
    children: [g("div", {
      class: "relative flex items-center justify-center w-full h-10 my-5 sm:mt-8",
      children: [!!Cr.value.back && g("div", {
        onClick: () => Fe(Cr.value.back),
        class: " w-10 h-10 absolute left-0 rounded-xl self-start border-gray-200 border items-center justify-center flex",
        children: g(Fr, {
          class: "h-3 text-gray-500 -translate-x-px -rotate-180"
        })
      }), g("h2", {
        class: "text-xl font-bold",
        children: e(Cr.value.title)
      })]
    }), n, typeof Cr.value.step < "u" && g("div", {
      class: "space-x-2 my-6 flex items-center justify-center",
      children: [0, 1, 2, 3].map((t) => g("div", {
        class: ke("rounded-xl h-2 transition-all duration-300", t == Cr.value.step ? "w-6 bg-gray-950" : "w-2 bg-gray-200")
      }, t))
    })]
  });
}
function _4() {
  const {
    bike: n,
    saveBike: e
  } = Pt(), {
    brand: t,
    model: i,
    frameSeries: a,
    frameSize: s,
    year: u,
    bikeSpec: c
  } = n.value, {
    t: d
  } = We(), p = mt.value;
  return le(() => {
    !s && !p ? Cr.value.back = "/search" : p && (Cr.value.back = "/add");
  }, []), g(ie, {
    children: [g(br, {
      bike: n.value,
      selected: !0,
      compact: !0
    }), g("div", {
      class: " space-y-4 mt-4 mb-6 relative w-full flex flex-col",
      children: [{
        // title: "Brand, Model, Frame Series",
        title: d("bikeselector_confirm_brandmodelframespec_label"),
        value: [t, i, a].join(", "),
        path: "/add"
      }, {
        // title: "Year, Bike Spec",
        title: d("bikeselector_confirm_yearbikespec_label"),
        value: [u, c].join(", "),
        path: "/search"
      }, {
        // title: "Frame Size",
        title: d("bikeselector_confirm_framesize_label"),
        value: s,
        path: "/size"
      }].filter((h) => !!h.value).map((h) => g("div", {
        class: "w-full flex flex-col space-y-2",
        children: [g("label", {
          class: "text-gray-800 font-bold",
          children: h.title
        }), g("div", {
          onClick: () => Fe(h.path),
          class: "w-full flex items-center relative cursor-pointer",
          children: [g("div", {
            class: ke("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-700"),
            children: h.value
          }), g(Fr, {
            class: "absolute h-3 text-gray-700 pointer-events-none right-4 peer-disabled:text-gray-400"
          })]
        })]
      }, h.path))
    }), g("button", {
      onClick: (h) => {
        h.preventDefault(), e(n.value), Fe("/browse");
      },
      class: ke("duration-300 transition-colors sticky bottom-10 mt-auto rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: d("bikeselector_confirm_confirm_btn")
    }), g("p", {
      class: "text-gray-600 -mb-3 mt-2 text-center font-normal text-xs",
      children: d("bikeselector_confirm_notyourride_msg")
    })]
  });
}
function b4() {
  const {
    currentBike: n,
    compatibleCollections: e
  } = Pt(), {
    t
  } = We();
  return g(ie, {
    children: [g(br, {
      bike: n,
      selected: !0
    }), !!(e != null && e.length) && g(ie, {
      children: [g("p", {
        class: "text-gray-800 mt-4 font-bold",
        children: t("bikeselector_browse_products_label")
      }), g("div", {
        class: "gap-3 mt-2 mb-6 relative w-full flex flex-wrap",
        children: e.map((i) => g("a", {
          href: i.url,
          class: "group flex items-center relative cursor-pointer",
          children: [g("div", {
            class: ke("rounded-xl peer whitespace-nowrap truncate !pr-8 flex w-full border-gray-300 border p-4 py-3 text-lg placeholder:text-gray-700 text-gray-950", "group-disabled:bg-gray-100 group-disabled:border-gray-200 group-disabled:text-gray-400"),
            children: t(i.text_id)
          }), g(Fr, {
            class: "absolute h-3 pointer-events-none right-4 group-disabled:text-gray-400 text-gray-950"
          })]
        }, i.text_id))
      })]
    }), g("button", {
      onClick: (i) => {
        i.preventDefault(), kn();
      },
      class: ke("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-950 text-white"),
      children: t("bikeselector_browse_shop_btn")
    }), g("button", {
      onClick: (i) => {
        i.preventDefault(), Fe("/");
      },
      class: ke("duration-300 transition-colors mt-4 rounded-xl p-3 w-full flex justify-center items-center", "bg-gray-200 text-gray-800"),
      children: t("bikeselector_browse_back_btn")
    }), g(bi, {})]
  });
}
const Ln = () => g("div", {
  class: "w-full p-4 relative rounded-xl bg-white border border-gray-300 mb-4",
  children: [g("span", {
    class: "block rounded-lg h-6 w-1/2 bg-gray-200"
  }), g("img", {
    class: "w-auto mx-auto h-auto max-h-36 opacity-30",
    src: Ii("bike.png")
  }), g("span", {
    class: " absolute right-4 bottom-4 rounded-full h-8 w-8 bg-gray-100"
  })]
});
function v4() {
  const {
    t: n
  } = We(), t = window.BikeMatrix.getConfig(), {
    currentBike: i,
    setCurrentBike: a
  } = Pt(), s = new Xt(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), [u, c] = Q(!1), [d, p] = Q(null), {
    saveBike: h
  } = Pt(), m = async () => {
    c(!0);
    const b = await s.addCustomBike(i.key);
    if (b.success) {
      const v = await s.getBikeBom(b == null ? void 0 : b.data);
      if (!v.success) {
        p(v.error), c(!1);
        return;
      }
      const C = ka(v.data);
      mt.value = C;
      const k = {
        ...i,
        key: C.bike_Key,
        isCustom: !0,
        shareId: C.share_Bike_Key
      };
      h(k), a(k), c(!1), Fe("/bom");
    } else {
      p(b.error), c(!1);
      return;
    }
  };
  return g(ie, {
    children: [g("div", {
      style: {
        marginBottom: "1rem"
      },
      children: [i ? g(br, {
        bike: i,
        noSymbol: !0
      }) : g(Ln, {}), g("div", {
        class: " text-gray-800 text-center flex z-20 justify-center font-bold mt-6",
        children: n("virtualworkshop_intro_text")
      })]
    }), g(Ef, {
      messages: d
    }), g(gi, {
      text: n("virtualworkshop_enter_button"),
      onClick: m,
      loading: u,
      primary: !0
    }), g(bi, {})]
  });
}
const _r = ({
  paragraph: n,
  subheader: e,
  header: t,
  text: i,
  small: a,
  left: s,
  bold: u,
  capitalize: c,
  nowrap: d
}) => t ? g("h2", {
  class: "text-xl font-bold",
  children: i
}) : e ? g("h4", {
  className: `text-gray-800 text-center flex z-20 justify-center font-bold  ${c ? "capitalize" : ""}`,
  children: i
}) : g("p", {
  class: `text-gray-800  flex z-20 ${a ? "text-sm" : ""} ${s ? "text-start justify-start" : "text-center justify-center"} ${u ? "font-bold" : ""} ${c ? "capitalize" : ""} ${d ? "whitespace-nowrap" : ""}`,
  children: i
}), y4 = `.background-alert-wrapper{opacity:0;position:absolute;height:100%;width:100%;display:none;top:0;left:0;pointer-events:none}.alert-wrapper{position:absolute;z-index:200;width:calc(100% + 16px);height:100%;background-color:#0003;top:0;left:-8px;border-radius:12px;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none}.alert{width:80%;padding:2rem;border-radius:12px;background-color:#fff;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:300}.text-wrapper{display:flex;flex-direction:column;align-items:center;gap:1rem}.button-wrapper{display:flex;gap:1rem;width:100%;margin-top:1rem}
`;
function jr(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Bf(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.__proto__ = e;
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
var Gt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, wn = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, El, dt, He, lr = 1e8, ze = 1 / lr, rl = Math.PI * 2, k4 = rl / 4, w4 = 0, Ff = Math.sqrt, x4 = Math.cos, C4 = Math.sin, ut = function(e) {
  return typeof e == "string";
}, Ye = function(e) {
  return typeof e == "function";
}, Yr = function(e) {
  return typeof e == "number";
}, Bl = function(e) {
  return typeof e > "u";
}, Lr = function(e) {
  return typeof e == "object";
}, Ft = function(e) {
  return e !== !1;
}, Fl = function() {
  return typeof window < "u";
}, Eo = function(e) {
  return Ye(e) || ut(e);
}, Lf = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, _t = Array.isArray, il = /(?:-?\.?\d|\.)+/gi, Tf = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, fn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Nu = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Rf = /[+-]=-?[.\d]+/, Pf = /[^,'"\[\]\s]+/gi, D4 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, je, xr, nl, Ll, Yt = {}, Uo = {}, zf, Nf = function(e) {
  return (Uo = xn(e, Yt)) && zt;
}, Tl = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, wa = function(e, t) {
  return !t && console.warn(e);
}, Of = function(e, t) {
  return e && (Yt[e] = t) && Uo && (Uo[e] = t) || Yt;
}, xa = function() {
  return 0;
}, A4 = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ro = {
  suppressEvents: !0,
  kill: !1
}, S4 = {
  suppressEvents: !0
}, Rl = {}, fi = [], al = {}, If, $t = {}, Ou = {}, n2 = 30, Po = [], Pl = "", zl = function(e) {
  var t = e[0], i, a;
  if (Lr(t) || Ye(t) || (e = [e]), !(i = (t._gsap || {}).harness)) {
    for (a = Po.length; a-- && !Po[a].targetTest(t); )
      ;
    i = Po[a];
  }
  for (a = e.length; a--; )
    e[a] && (e[a]._gsap || (e[a]._gsap = new uh(e[a], i))) || e.splice(a, 1);
  return e;
}, qi = function(e) {
  return e._gsap || zl(cr(e))[0]._gsap;
}, qf = function(e, t, i) {
  return (i = e[t]) && Ye(i) ? e[t]() : Bl(i) && e.getAttribute && e.getAttribute(t) || i;
}, Lt = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, et = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, rt = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, _n = function(e, t) {
  var i = t.charAt(0), a = parseFloat(t.substr(2));
  return e = parseFloat(e), i === "+" ? e + a : i === "-" ? e - a : i === "*" ? e * a : e / a;
}, E4 = function(e, t) {
  for (var i = t.length, a = 0; e.indexOf(t[a]) < 0 && ++a < i; )
    ;
  return a < i;
}, Vo = function() {
  var e = fi.length, t = fi.slice(0), i, a;
  for (al = {}, fi.length = 0, i = 0; i < e; i++)
    a = t[i], a && a._lazy && (a.render(a._lazy[0], a._lazy[1], !0)._lazy = 0);
}, Mf = function(e, t, i, a) {
  fi.length && !dt && Vo(), e.render(t, i, a || dt && t < 0 && (e._initted || e._startAt)), fi.length && !dt && Vo();
}, Uf = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Pf).length < 2 ? t : ut(e) ? e.trim() : e;
}, Vf = function(e) {
  return e;
}, Jt = function(e, t) {
  for (var i in t)
    i in e || (e[i] = t[i]);
  return e;
}, B4 = function(e) {
  return function(t, i) {
    for (var a in i)
      a in t || a === "duration" && e || a === "ease" || (t[a] = i[a]);
  };
}, xn = function(e, t) {
  for (var i in t)
    e[i] = t[i];
  return e;
}, a2 = function n(e, t) {
  for (var i in t)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = Lr(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
  return e;
}, Ho = function(e, t) {
  var i = {}, a;
  for (a in e)
    a in t || (i[a] = e[a]);
  return i;
}, fa = function(e) {
  var t = e.parent || je, i = e.keyframes ? B4(_t(e.keyframes)) : Jt;
  if (Ft(e.inherit))
    for (; t; )
      i(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, F4 = function(e, t) {
  for (var i = e.length, a = i === t.length; a && i-- && e[i] === t[i]; )
    ;
  return i < 0;
}, Hf = function(e, t, i, a, s) {
  i === void 0 && (i = "_first"), a === void 0 && (a = "_last");
  var u = e[a], c;
  if (s)
    for (c = t[s]; u && u[s] > c; )
      u = u._prev;
  return u ? (t._next = u._next, u._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[a] = t, t._prev = u, t.parent = t._dp = e, t;
}, ns = function(e, t, i, a) {
  i === void 0 && (i = "_first"), a === void 0 && (a = "_last");
  var s = t._prev, u = t._next;
  s ? s._next = u : e[i] === t && (e[i] = u), u ? u._prev = s : e[a] === t && (e[a] = s), t._next = t._prev = t.parent = null;
}, mi = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Mi = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var i = e; i; )
      i._dirty = 1, i = i.parent;
  return e;
}, L4 = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, ol = function(e, t, i, a) {
  return e._startAt && (dt ? e._startAt.revert(Ro) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, a));
}, T4 = function n(e) {
  return !e || e._ts && n(e.parent);
}, o2 = function(e) {
  return e._repeat ? Cn(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Cn = function(e, t) {
  var i = Math.floor(e = rt(e / t));
  return e && i === e ? i - 1 : i;
}, $o = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, as = function(e) {
  return e._end = rt(e._start + (e._tDur / Math.abs(e._ts || e._rts || ze) || 0));
}, os = function(e, t) {
  var i = e._dp;
  return i && i.smoothChildTiming && e._ts && (e._start = rt(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), as(e), i._dirty || Mi(i, e)), e;
}, $f = function(e, t) {
  var i;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = $o(e.rawTime(), t), (!t._dur || Pa(0, t.totalDuration(), i) - t._tTime > ze) && t.render(i, !0)), Mi(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (i = e; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    e._zTime = -ze;
  }
}, Dr = function(e, t, i, a) {
  return t.parent && mi(t), t._start = rt((Yr(i) ? i : i || e !== je ? sr(e, i, t) : e._time) + t._delay), t._end = rt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Hf(e, t, "_first", "_last", e._sort ? "_start" : 0), sl(t) || (e._recent = t), a || $f(e, t), e._ts < 0 && os(e, e._tTime), e;
}, jf = function(e, t) {
  return (Yt.ScrollTrigger || Tl("scrollTrigger", t)) && Yt.ScrollTrigger.create(t, e);
}, Kf = function(e, t, i, a, s) {
  if (Ol(e, t, s), !e._initted)
    return 1;
  if (!i && e._pt && !dt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && If !== Kt.frame)
    return fi.push(e), e._lazy = [s, a], 1;
}, R4 = function n(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
}, sl = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, P4 = function(e, t, i, a) {
  var s = e.ratio, u = t < 0 || !t && (!e._start && R4(e) && !(!e._initted && sl(e)) || (e._ts < 0 || e._dp._ts < 0) && !sl(e)) ? 0 : 1, c = e._rDelay, d = 0, p, h, m;
  if (c && e._repeat && (d = Pa(0, e._tDur, t), h = Cn(d, c), e._yoyo && h & 1 && (u = 1 - u), h !== Cn(e._tTime, c) && (s = 1 - u, e.vars.repeatRefresh && e._initted && e.invalidate())), u !== s || dt || a || e._zTime === ze || !t && e._zTime) {
    if (!e._initted && Kf(e, t, a, i, d))
      return;
    for (m = e._zTime, e._zTime = t || (i ? ze : 0), i || (i = t && !m), e.ratio = u, e._from && (u = 1 - u), e._time = 0, e._tTime = d, p = e._pt; p; )
      p.r(u, p.d), p = p._next;
    t < 0 && ol(e, t, i, !0), e._onUpdate && !i && Wt(e, "onUpdate"), d && e._repeat && !i && e.parent && Wt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === u && (u && mi(e, 1), !i && !dt && (Wt(e, u ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = t);
}, z4 = function(e, t, i) {
  var a;
  if (i > t)
    for (a = e._first; a && a._start <= i; ) {
      if (a.data === "isPause" && a._start > t)
        return a;
      a = a._next;
    }
  else
    for (a = e._last; a && a._start >= i; ) {
      if (a.data === "isPause" && a._start < t)
        return a;
      a = a._prev;
    }
}, Dn = function(e, t, i, a) {
  var s = e._repeat, u = rt(t) || 0, c = e._tTime / e._tDur;
  return c && !a && (e._time *= u / e._dur), e._dur = u, e._tDur = s ? s < 0 ? 1e10 : rt(u * (s + 1) + e._rDelay * s) : u, c > 0 && !a && os(e, e._tTime = e._tDur * c), e.parent && as(e), i || Mi(e.parent, e), e;
}, s2 = function(e) {
  return e instanceof wt ? Mi(e) : Dn(e, e._dur);
}, N4 = {
  _start: 0,
  endTime: xa,
  totalDuration: xa
}, sr = function n(e, t, i) {
  var a = e.labels, s = e._recent || N4, u = e.duration() >= lr ? s.endTime(!1) : e._dur, c, d, p;
  return ut(t) && (isNaN(t) || t in a) ? (d = t.charAt(0), p = t.substr(-1) === "%", c = t.indexOf("="), d === "<" || d === ">" ? (c >= 0 && (t = t.replace(/=/, "")), (d === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (p ? (c < 0 ? s : i).totalDuration() / 100 : 1)) : c < 0 ? (t in a || (a[t] = u), a[t]) : (d = parseFloat(t.charAt(c - 1) + t.substr(c + 1)), p && i && (d = d / 100 * (_t(i) ? i[0] : i).totalDuration()), c > 1 ? n(e, t.substr(0, c - 1), i) + d : u + d)) : t == null ? u : +t;
}, ha = function(e, t, i) {
  var a = Yr(t[1]), s = (a ? 2 : 1) + (e < 2 ? 0 : 1), u = t[s], c, d;
  if (a && (u.duration = t[1]), u.parent = i, e) {
    for (c = u, d = i; d && !("immediateRender" in c); )
      c = d.vars.defaults || {}, d = Ft(d.vars.inherit) && d.parent;
    u.immediateRender = Ft(c.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = t[s - 1];
  }
  return new tt(t[0], u, t[s + 1]);
}, vi = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Pa = function(e, t, i) {
  return i < e ? e : i > t ? t : i;
}, gt = function(e, t) {
  return !ut(e) || !(t = D4.exec(e)) ? "" : t[1];
}, O4 = function(e, t, i) {
  return vi(i, function(a) {
    return Pa(e, t, a);
  });
}, ul = [].slice, Wf = function(e, t) {
  return e && Lr(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Lr(e[0])) && !e.nodeType && e !== xr;
}, I4 = function(e, t, i) {
  return i === void 0 && (i = []), e.forEach(function(a) {
    var s;
    return ut(a) && !t || Wf(a, 1) ? (s = i).push.apply(s, cr(a)) : i.push(a);
  }) || i;
}, cr = function(e, t, i) {
  return He && !t && He.selector ? He.selector(e) : ut(e) && !i && (nl || !An()) ? ul.call((t || Ll).querySelectorAll(e), 0) : _t(e) ? I4(e, i) : Wf(e) ? ul.call(e, 0) : e ? [e] : [];
}, ll = function(e) {
  return e = cr(e)[0] || wa("Invalid scope") || {}, function(t) {
    var i = e.current || e.nativeElement || e;
    return cr(t, i.querySelectorAll ? i : i === e ? wa("Invalid scope") || Ll.createElement("div") : e);
  };
}, Gf = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Yf = function(e) {
  if (Ye(e))
    return e;
  var t = Lr(e) ? e : {
    each: e
  }, i = Ui(t.ease), a = t.from || 0, s = parseFloat(t.base) || 0, u = {}, c = a > 0 && a < 1, d = isNaN(a) || c, p = t.axis, h = a, m = a;
  return ut(a) ? h = m = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[a] || 0 : !c && d && (h = a[0], m = a[1]), function(b, v, C) {
    var k = (C || t).length, x = u[k], S, A, F, E, L, z, P, I, N;
    if (!x) {
      if (N = t.grid === "auto" ? 0 : (t.grid || [1, lr])[1], !N) {
        for (P = -lr; P < (P = C[N++].getBoundingClientRect().left) && N < k; )
          ;
        N < k && N--;
      }
      for (x = u[k] = [], S = d ? Math.min(N, k) * h - 0.5 : a % N, A = N === lr ? 0 : d ? k * m / N - 0.5 : a / N | 0, P = 0, I = lr, z = 0; z < k; z++)
        F = z % N - S, E = A - (z / N | 0), x[z] = L = p ? Math.abs(p === "y" ? E : F) : Ff(F * F + E * E), L > P && (P = L), L < I && (I = L);
      a === "random" && Gf(x), x.max = P - I, x.min = I, x.v = k = (parseFloat(t.amount) || parseFloat(t.each) * (N > k ? k - 1 : p ? p === "y" ? k / N : N : Math.max(N, k / N)) || 0) * (a === "edges" ? -1 : 1), x.b = k < 0 ? s - k : s, x.u = gt(t.amount || t.each) || 0, i = i && k < 0 ? ah(i) : i;
    }
    return k = (x[b] - x.min) / x.max || 0, rt(x.b + (i ? i(k) : k) * x.v) + x.u;
  };
}, cl = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(i) {
    var a = rt(Math.round(parseFloat(i) / e) * e * t);
    return (a - a % 1) / t + (Yr(i) ? 0 : gt(i));
  };
}, Jf = function(e, t) {
  var i = _t(e), a, s;
  return !i && Lr(e) && (a = i = e.radius || lr, e.values ? (e = cr(e.values), (s = !Yr(e[0])) && (a *= a)) : e = cl(e.increment)), vi(t, i ? Ye(e) ? function(u) {
    return s = e(u), Math.abs(s - u) <= a ? s : u;
  } : function(u) {
    for (var c = parseFloat(s ? u.x : u), d = parseFloat(s ? u.y : 0), p = lr, h = 0, m = e.length, b, v; m--; )
      s ? (b = e[m].x - c, v = e[m].y - d, b = b * b + v * v) : b = Math.abs(e[m] - c), b < p && (p = b, h = m);
    return h = !a || p <= a ? e[h] : u, s || h === u || Yr(u) ? h : h + gt(u);
  } : cl(e));
}, Zf = function(e, t, i, a) {
  return vi(_t(e) ? !t : i === !0 ? !!(i = 0) : !a, function() {
    return _t(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (a = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) * i * a) / a;
  });
}, q4 = function() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return function(a) {
    return t.reduce(function(s, u) {
      return u(s);
    }, a);
  };
}, M4 = function(e, t) {
  return function(i) {
    return e(parseFloat(i)) + (t || gt(i));
  };
}, U4 = function(e, t, i) {
  return Qf(e, t, 0, 1, i);
}, Xf = function(e, t, i) {
  return vi(i, function(a) {
    return e[~~t(a)];
  });
}, V4 = function n(e, t, i) {
  var a = t - e;
  return _t(e) ? Xf(e, n(0, e.length), t) : vi(i, function(s) {
    return (a + (s - e) % a) % a + e;
  });
}, H4 = function n(e, t, i) {
  var a = t - e, s = a * 2;
  return _t(e) ? Xf(e, n(0, e.length - 1), t) : vi(i, function(u) {
    return u = (s + (u - e) % s) % s || 0, e + (u > a ? s - u : u);
  });
}, Ca = function(e) {
  for (var t = 0, i = "", a, s, u, c; ~(a = e.indexOf("random(", t)); )
    u = e.indexOf(")", a), c = e.charAt(a + 7) === "[", s = e.substr(a + 7, u - a - 7).match(c ? Pf : il), i += e.substr(t, a - t) + Zf(c ? s : +s[0], c ? 0 : +s[1], +s[2] || 1e-5), t = u + 1;
  return i + e.substr(t, e.length - t);
}, Qf = function(e, t, i, a, s) {
  var u = t - e, c = a - i;
  return vi(s, function(d) {
    return i + ((d - e) / u * c || 0);
  });
}, $4 = function n(e, t, i, a) {
  var s = isNaN(e + t) ? 0 : function(v) {
    return (1 - v) * e + v * t;
  };
  if (!s) {
    var u = ut(e), c = {}, d, p, h, m, b;
    if (i === !0 && (a = 1) && (i = null), u)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (_t(e) && !_t(t)) {
      for (h = [], m = e.length, b = m - 2, p = 1; p < m; p++)
        h.push(n(e[p - 1], e[p]));
      m--, s = function(C) {
        C *= m;
        var k = Math.min(b, ~~C);
        return h[k](C - k);
      }, i = t;
    } else
      a || (e = xn(_t(e) ? [] : {}, e));
    if (!h) {
      for (d in t)
        Nl.call(c, e, d, "get", t[d]);
      s = function(C) {
        return Ml(C, c) || (u ? e.p : e);
      };
    }
  }
  return vi(i, s);
}, u2 = function(e, t, i) {
  var a = e.labels, s = lr, u, c, d;
  for (u in a)
    c = a[u] - t, c < 0 == !!i && c && s > (c = Math.abs(c)) && (d = u, s = c);
  return d;
}, Wt = function(e, t, i) {
  var a = e.vars, s = a[t], u = He, c = e._ctx, d, p, h;
  if (s)
    return d = a[t + "Params"], p = a.callbackScope || e, i && fi.length && Vo(), c && (He = c), h = d ? s.apply(p, d) : s.call(p), He = u, h;
}, sa = function(e) {
  return mi(e), e.scrollTrigger && e.scrollTrigger.kill(!!dt), e.progress() < 1 && Wt(e, "onInterrupt"), e;
}, hn, eh = [], th = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Fl() || e.headless) {
      var t = e.name, i = Ye(e), a = t && !i && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: xa,
        render: Ml,
        add: Nl,
        kill: oy,
        modifier: ay,
        rawVars: 0
      }, u = {
        targetTest: 0,
        get: 0,
        getSetter: ql,
        aliases: {},
        register: 0
      };
      if (An(), e !== a) {
        if ($t[t])
          return;
        Jt(a, Jt(Ho(e, s), u)), xn(a.prototype, xn(s, Ho(e, u))), $t[a.prop = t] = a, e.targetTest && (Po.push(a), Rl[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Of(t, a), e.register && e.register(zt, a, Tt);
    } else
      eh.push(e);
}, Re = 255, ua = {
  aqua: [0, Re, Re],
  lime: [0, Re, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Re],
  navy: [0, 0, 128],
  white: [Re, Re, Re],
  olive: [128, 128, 0],
  yellow: [Re, Re, 0],
  orange: [Re, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Re, 0, 0],
  pink: [Re, 192, 203],
  cyan: [0, Re, Re],
  transparent: [Re, Re, Re, 0]
}, Iu = function(e, t, i) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (i - t) * e * 6 : e < 0.5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * Re + 0.5 | 0;
}, rh = function(e, t, i) {
  var a = e ? Yr(e) ? [e >> 16, e >> 8 & Re, e & Re] : 0 : ua.black, s, u, c, d, p, h, m, b, v, C;
  if (!a) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ua[e])
      a = ua[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), u = e.charAt(2), c = e.charAt(3), e = "#" + s + s + u + u + c + c + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return a = parseInt(e.substr(1, 6), 16), [a >> 16, a >> 8 & Re, a & Re, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), a = [e >> 16, e >> 8 & Re, e & Re];
    } else if (e.substr(0, 3) === "hsl") {
      if (a = C = e.match(il), !t)
        d = +a[0] % 360 / 360, p = +a[1] / 100, h = +a[2] / 100, u = h <= 0.5 ? h * (p + 1) : h + p - h * p, s = h * 2 - u, a.length > 3 && (a[3] *= 1), a[0] = Iu(d + 1 / 3, s, u), a[1] = Iu(d, s, u), a[2] = Iu(d - 1 / 3, s, u);
      else if (~e.indexOf("="))
        return a = e.match(Tf), i && a.length < 4 && (a[3] = 1), a;
    } else
      a = e.match(il) || ua.transparent;
    a = a.map(Number);
  }
  return t && !C && (s = a[0] / Re, u = a[1] / Re, c = a[2] / Re, m = Math.max(s, u, c), b = Math.min(s, u, c), h = (m + b) / 2, m === b ? d = p = 0 : (v = m - b, p = h > 0.5 ? v / (2 - m - b) : v / (m + b), d = m === s ? (u - c) / v + (u < c ? 6 : 0) : m === u ? (c - s) / v + 2 : (s - u) / v + 4, d *= 60), a[0] = ~~(d + 0.5), a[1] = ~~(p * 100 + 0.5), a[2] = ~~(h * 100 + 0.5)), i && a.length < 4 && (a[3] = 1), a;
}, ih = function(e) {
  var t = [], i = [], a = -1;
  return e.split(hi).forEach(function(s) {
    var u = s.match(fn) || [];
    t.push.apply(t, u), i.push(a += u.length + 1);
  }), t.c = i, t;
}, l2 = function(e, t, i) {
  var a = "", s = (e + a).match(hi), u = t ? "hsla(" : "rgba(", c = 0, d, p, h, m;
  if (!s)
    return e;
  if (s = s.map(function(b) {
    return (b = rh(b, t, 1)) && u + (t ? b[0] + "," + b[1] + "%," + b[2] + "%," + b[3] : b.join(",")) + ")";
  }), i && (h = ih(e), d = i.c, d.join(a) !== h.c.join(a)))
    for (p = e.replace(hi, "1").split(fn), m = p.length - 1; c < m; c++)
      a += p[c] + (~d.indexOf(c) ? s.shift() || u + "0,0,0,0)" : (h.length ? h : s.length ? s : i).shift());
  if (!p)
    for (p = e.split(hi), m = p.length - 1; c < m; c++)
      a += p[c] + s[c];
  return a + p[m];
}, hi = function() {
  var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in ua)
    n += "|" + e + "\\b";
  return new RegExp(n + ")", "gi");
}(), j4 = /hsl[a]?\(/, nh = function(e) {
  var t = e.join(" "), i;
  if (hi.lastIndex = 0, hi.test(t))
    return i = j4.test(t), e[1] = l2(e[1], i), e[0] = l2(e[0], i, ih(e[1])), !0;
}, Da, Kt = function() {
  var n = Date.now, e = 500, t = 33, i = n(), a = i, s = 1e3 / 240, u = s, c = [], d, p, h, m, b, v, C = function k(x) {
    var S = n() - a, A = x === !0, F, E, L, z;
    if ((S > e || S < 0) && (i += S - t), a += S, L = a - i, F = L - u, (F > 0 || A) && (z = ++m.frame, b = L - m.time * 1e3, m.time = L = L / 1e3, u += F + (F >= s ? 4 : s - F), E = 1), A || (d = p(k)), E)
      for (v = 0; v < c.length; v++)
        c[v](L, b, z, x);
  };
  return m = {
    time: 0,
    frame: 0,
    tick: function() {
      C(!0);
    },
    deltaRatio: function(x) {
      return b / (1e3 / (x || 60));
    },
    wake: function() {
      zf && (!nl && Fl() && (xr = nl = window, Ll = xr.document || {}, Yt.gsap = zt, (xr.gsapVersions || (xr.gsapVersions = [])).push(zt.version), Nf(Uo || xr.GreenSockGlobals || !xr.gsap && xr || {}), eh.forEach(th)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, d && m.sleep(), p = h || function(x) {
        return setTimeout(x, u - m.time * 1e3 + 1 | 0);
      }, Da = 1, C(2));
    },
    sleep: function() {
      (h ? cancelAnimationFrame : clearTimeout)(d), Da = 0, p = xa;
    },
    lagSmoothing: function(x, S) {
      e = x || 1 / 0, t = Math.min(S || 33, e);
    },
    fps: function(x) {
      s = 1e3 / (x || 240), u = m.time * 1e3 + s;
    },
    add: function(x, S, A) {
      var F = S ? function(E, L, z, P) {
        x(E, L, z, P), m.remove(F);
      } : x;
      return m.remove(x), c[A ? "unshift" : "push"](F), An(), F;
    },
    remove: function(x, S) {
      ~(S = c.indexOf(x)) && c.splice(S, 1) && v >= S && v--;
    },
    _listeners: c
  }, m;
}(), An = function() {
  return !Da && Kt.wake();
}, De = {}, K4 = /^[\d.\-M][\d.\-,\s]/, W4 = /["']/g, G4 = function(e) {
  for (var t = {}, i = e.substr(1, e.length - 3).split(":"), a = i[0], s = 1, u = i.length, c, d, p; s < u; s++)
    d = i[s], c = s !== u - 1 ? d.lastIndexOf(",") : d.length, p = d.substr(0, c), t[a] = isNaN(p) ? p.replace(W4, "").trim() : +p, a = d.substr(c + 1).trim();
  return t;
}, Y4 = function(e) {
  var t = e.indexOf("(") + 1, i = e.indexOf(")"), a = e.indexOf("(", t);
  return e.substring(t, ~a && a < i ? e.indexOf(")", i + 1) : i);
}, J4 = function(e) {
  var t = (e + "").split("("), i = De[t[0]];
  return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [G4(t[1])] : Y4(e).split(",").map(Uf)) : De._CE && K4.test(e) ? De._CE("", e) : i;
}, ah = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, oh = function n(e, t) {
  for (var i = e._first, a; i; )
    i instanceof wt ? n(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? n(i.timeline, t) : (a = i._ease, i._ease = i._yEase, i._yEase = a, i._yoyo = t)), i = i._next;
}, Ui = function(e, t) {
  return e && (Ye(e) ? e : De[e] || J4(e)) || t;
}, ji = function(e, t, i, a) {
  i === void 0 && (i = function(d) {
    return 1 - t(1 - d);
  }), a === void 0 && (a = function(d) {
    return d < 0.5 ? t(d * 2) / 2 : 1 - t((1 - d) * 2) / 2;
  });
  var s = {
    easeIn: t,
    easeOut: i,
    easeInOut: a
  }, u;
  return Lt(e, function(c) {
    De[c] = Yt[c] = s, De[u = c.toLowerCase()] = i;
    for (var d in s)
      De[u + (d === "easeIn" ? ".in" : d === "easeOut" ? ".out" : ".inOut")] = De[c + "." + d] = s[d];
  }), s;
}, sh = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, qu = function n(e, t, i) {
  var a = t >= 1 ? t : 1, s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), u = s / rl * (Math.asin(1 / a) || 0), c = function(h) {
    return h === 1 ? 1 : a * Math.pow(2, -10 * h) * C4((h - u) * s) + 1;
  }, d = e === "out" ? c : e === "in" ? function(p) {
    return 1 - c(1 - p);
  } : sh(c);
  return s = rl / s, d.config = function(p, h) {
    return n(e, p, h);
  }, d;
}, Mu = function n(e, t) {
  t === void 0 && (t = 1.70158);
  var i = function(u) {
    return u ? --u * u * ((t + 1) * u + t) + 1 : 0;
  }, a = e === "out" ? i : e === "in" ? function(s) {
    return 1 - i(1 - s);
  } : sh(i);
  return a.config = function(s) {
    return n(e, s);
  }, a;
};
Lt("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, e) {
  var t = e < 5 ? e + 1 : e;
  ji(n + ",Power" + (t - 1), e ? function(i) {
    return Math.pow(i, t);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, t);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2;
  });
});
De.Linear.easeNone = De.none = De.Linear.easeIn;
ji("Elastic", qu("in"), qu("out"), qu());
(function(n, e) {
  var t = 1 / e, i = 2 * t, a = 2.5 * t, s = function(c) {
    return c < t ? n * c * c : c < i ? n * Math.pow(c - 1.5 / e, 2) + 0.75 : c < a ? n * (c -= 2.25 / e) * c + 0.9375 : n * Math.pow(c - 2.625 / e, 2) + 0.984375;
  };
  ji("Bounce", function(u) {
    return 1 - s(1 - u);
  }, s);
})(7.5625, 2.75);
ji("Expo", function(n) {
  return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
});
ji("Circ", function(n) {
  return -(Ff(1 - n * n) - 1);
});
ji("Sine", function(n) {
  return n === 1 ? 1 : -x4(n * k4) + 1;
});
ji("Back", Mu("in"), Mu("out"), Mu());
De.SteppedEase = De.steps = Yt.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var i = 1 / e, a = e + (t ? 0 : 1), s = t ? 1 : 0, u = 1 - ze;
    return function(c) {
      return ((a * Pa(0, u, c) | 0) + s) * i;
    };
  }
};
wn.ease = De["quad.out"];
Lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
  return Pl += n + "," + n + "Params,";
});
var uh = function(e, t) {
  this.id = w4++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : qf, this.set = t ? t.getSetter : ql;
}, Aa = /* @__PURE__ */ function() {
  function n(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Dn(this, +t.duration, 1, 1), this.data = t.data, He && (this._ctx = He, He.data.push(this)), Da || Kt.wake();
  }
  var e = n.prototype;
  return e.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, e.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Dn(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(i, a) {
    if (An(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (os(this, i), !s._dp || s.parent || $f(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Dr(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !a || this._initted && Math.abs(this._zTime) === ze || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Mf(this, i, a)), this;
  }, e.time = function(i, a) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + o2(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), a) : this._time;
  }, e.totalProgress = function(i, a) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, a) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(i, a) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + o2(this), a) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(i, a) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * s, a) : this._repeat ? Cn(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(i, a) {
    if (!arguments.length)
      return this._rts === -ze ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var s = this.parent && this._ts ? $o(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -ze ? 0 : this._rts, this.totalTime(Pa(-Math.abs(this._delay), this._tDur, s), a !== !1), as(this), L4(this);
  }, e.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (An(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ze && (this._tTime -= ze)))), this) : this._ps;
  }, e.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var a = this.parent || this._dp;
      return a && (a._sort || !this.parent) && Dr(a, this, i - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(i) {
    return this._start + (Ft(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(i) {
    var a = this.parent || this._dp;
    return a ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? $o(a.rawTime(i), this) : this._tTime : this._tTime;
  }, e.revert = function(i) {
    i === void 0 && (i = S4);
    var a = dt;
    return dt = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), dt = a, this;
  }, e.globalTime = function(i) {
    for (var a = this, s = arguments.length ? i : a.rawTime(); a; )
      s = a._start + s / (Math.abs(a._ts) || 1), a = a._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : s;
  }, e.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, s2(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(i) {
    if (arguments.length) {
      var a = this._time;
      return this._rDelay = i, s2(this), a ? this.time(a) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, e.seek = function(i, a) {
    return this.totalTime(sr(this, i), Ft(a));
  }, e.restart = function(i, a) {
    return this.play().totalTime(i ? -this._delay : 0, Ft(a)), this._dur || (this._zTime = -ze), this;
  }, e.play = function(i, a) {
    return i != null && this.seek(i, a), this.reversed(!1).paused(!1);
  }, e.reverse = function(i, a) {
    return i != null && this.seek(i || this.totalDuration(), a), this.reversed(!0).paused(!1);
  }, e.pause = function(i, a) {
    return i != null && this.seek(i, a), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -ze : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ze, this;
  }, e.isActive = function() {
    var i = this.parent || this._dp, a = this._start, s;
    return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(!0)) >= a && s < this.endTime(!0) - ze);
  }, e.eventCallback = function(i, a, s) {
    var u = this.vars;
    return arguments.length > 1 ? (a ? (u[i] = a, s && (u[i + "Params"] = s), i === "onUpdate" && (this._onUpdate = a)) : delete u[i], this) : u[i];
  }, e.then = function(i) {
    var a = this;
    return new Promise(function(s) {
      var u = Ye(i) ? i : Vf, c = function() {
        var p = a.then;
        a.then = null, Ye(u) && (u = u(a)) && (u.then || u === a) && (a.then = p), s(u), a.then = p;
      };
      a._initted && a.totalProgress() === 1 && a._ts >= 0 || !a._tTime && a._ts < 0 ? c() : a._prom = c;
    });
  }, e.kill = function() {
    sa(this);
  }, n;
}();
Jt(Aa.prototype, {
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
  _zTime: -ze,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var wt = /* @__PURE__ */ function(n) {
  Bf(e, n);
  function e(i, a) {
    var s;
    return i === void 0 && (i = {}), s = n.call(this, i) || this, s.labels = {}, s.smoothChildTiming = !!i.smoothChildTiming, s.autoRemoveChildren = !!i.autoRemoveChildren, s._sort = Ft(i.sortChildren), je && Dr(i.parent || je, jr(s), a), i.reversed && s.reverse(), i.paused && s.paused(!0), i.scrollTrigger && jf(jr(s), i.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(a, s, u) {
    return ha(0, arguments, this), this;
  }, t.from = function(a, s, u) {
    return ha(1, arguments, this), this;
  }, t.fromTo = function(a, s, u, c) {
    return ha(2, arguments, this), this;
  }, t.set = function(a, s, u) {
    return s.duration = 0, s.parent = this, fa(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new tt(a, s, sr(this, u), 1), this;
  }, t.call = function(a, s, u) {
    return Dr(this, tt.delayedCall(0, a, s), u);
  }, t.staggerTo = function(a, s, u, c, d, p, h) {
    return u.duration = s, u.stagger = u.stagger || c, u.onComplete = p, u.onCompleteParams = h, u.parent = this, new tt(a, u, sr(this, d)), this;
  }, t.staggerFrom = function(a, s, u, c, d, p, h) {
    return u.runBackwards = 1, fa(u).immediateRender = Ft(u.immediateRender), this.staggerTo(a, s, u, c, d, p, h);
  }, t.staggerFromTo = function(a, s, u, c, d, p, h, m) {
    return c.startAt = u, fa(c).immediateRender = Ft(c.immediateRender), this.staggerTo(a, s, c, d, p, h, m);
  }, t.render = function(a, s, u) {
    var c = this._time, d = this._dirty ? this.totalDuration() : this._tDur, p = this._dur, h = a <= 0 ? 0 : rt(a), m = this._zTime < 0 != a < 0 && (this._initted || !p), b, v, C, k, x, S, A, F, E, L, z, P;
    if (this !== je && h > d && a >= 0 && (h = d), h !== this._tTime || u || m) {
      if (c !== this._time && p && (h += this._time - c, a += this._time - c), b = h, E = this._start, F = this._ts, S = !F, m && (p || (c = this._zTime), (a || !s) && (this._zTime = a)), this._repeat) {
        if (z = this._yoyo, x = p + this._rDelay, this._repeat < -1 && a < 0)
          return this.totalTime(x * 100 + a, s, u);
        if (b = rt(h % x), h === d ? (k = this._repeat, b = p) : (L = rt(h / x), k = ~~L, k && k === L && (b = p, k--), b > p && (b = p)), L = Cn(this._tTime, x), !c && this._tTime && L !== k && this._tTime - L * x - this._dur <= 0 && (L = k), z && k & 1 && (b = p - b, P = 1), k !== L && !this._lock) {
          var I = z && L & 1, N = I === (z && k & 1);
          if (k < L && (I = !I), c = I ? 0 : h % p ? p : h, this._lock = 1, this.render(c || (P ? 0 : rt(k * x)), s, !p)._lock = 0, this._tTime = h, !s && this.parent && Wt(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), c && c !== this._time || S !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (p = this._dur, d = this._tDur, N && (this._lock = 2, c = I ? p : -1e-4, this.render(c, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !S)
            return this;
          oh(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (A = z4(this, rt(c), rt(b)), A && (h -= b - (b = A._start))), this._tTime = h, this._time = b, this._act = !F, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = a, c = 0), !c && b && !s && !k && (Wt(this, "onStart"), this._tTime !== h))
        return this;
      if (b >= c && a >= 0)
        for (v = this._first; v; ) {
          if (C = v._next, (v._act || b >= v._start) && v._ts && A !== v) {
            if (v.parent !== this)
              return this.render(a, s, u);
            if (v.render(v._ts > 0 ? (b - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + (b - v._start) * v._ts, s, u), b !== this._time || !this._ts && !S) {
              A = 0, C && (h += this._zTime = -ze);
              break;
            }
          }
          v = C;
        }
      else {
        v = this._last;
        for (var K = a < 0 ? a : b; v; ) {
          if (C = v._prev, (v._act || K <= v._end) && v._ts && A !== v) {
            if (v.parent !== this)
              return this.render(a, s, u);
            if (v.render(v._ts > 0 ? (K - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + (K - v._start) * v._ts, s, u || dt && (v._initted || v._startAt)), b !== this._time || !this._ts && !S) {
              A = 0, C && (h += this._zTime = K ? -ze : ze);
              break;
            }
          }
          v = C;
        }
      }
      if (A && !s && (this.pause(), A.render(b >= c ? 0 : -ze)._zTime = b >= c ? 1 : -1, this._ts))
        return this._start = E, as(this), this.render(a, s, u);
      this._onUpdate && !s && Wt(this, "onUpdate", !0), (h === d && this._tTime >= this.totalDuration() || !h && c) && (E === this._start || Math.abs(F) !== Math.abs(this._ts)) && (this._lock || ((a || !p) && (h === d && this._ts > 0 || !h && this._ts < 0) && mi(this, 1), !s && !(a < 0 && !c) && (h || c || !d) && (Wt(this, h === d && a >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < d && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(a, s) {
    var u = this;
    if (Yr(s) || (s = sr(this, s, a)), !(a instanceof Aa)) {
      if (_t(a))
        return a.forEach(function(c) {
          return u.add(c, s);
        }), this;
      if (ut(a))
        return this.addLabel(a, s);
      if (Ye(a))
        a = tt.delayedCall(0, a);
      else
        return this;
    }
    return this !== a ? Dr(this, a, s) : this;
  }, t.getChildren = function(a, s, u, c) {
    a === void 0 && (a = !0), s === void 0 && (s = !0), u === void 0 && (u = !0), c === void 0 && (c = -lr);
    for (var d = [], p = this._first; p; )
      p._start >= c && (p instanceof tt ? s && d.push(p) : (u && d.push(p), a && d.push.apply(d, p.getChildren(!0, s, u)))), p = p._next;
    return d;
  }, t.getById = function(a) {
    for (var s = this.getChildren(1, 1, 1), u = s.length; u--; )
      if (s[u].vars.id === a)
        return s[u];
  }, t.remove = function(a) {
    return ut(a) ? this.removeLabel(a) : Ye(a) ? this.killTweensOf(a) : (a.parent === this && ns(this, a), a === this._recent && (this._recent = this._last), Mi(this));
  }, t.totalTime = function(a, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = rt(Kt.time - (this._ts > 0 ? a / this._ts : (this.totalDuration() - a) / -this._ts))), n.prototype.totalTime.call(this, a, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(a, s) {
    return this.labels[a] = sr(this, s), this;
  }, t.removeLabel = function(a) {
    return delete this.labels[a], this;
  }, t.addPause = function(a, s, u) {
    var c = tt.delayedCall(0, s || xa, u);
    return c.data = "isPause", this._hasPause = 1, Dr(this, c, sr(this, a));
  }, t.removePause = function(a) {
    var s = this._first;
    for (a = sr(this, a); s; )
      s._start === a && s.data === "isPause" && mi(s), s = s._next;
  }, t.killTweensOf = function(a, s, u) {
    for (var c = this.getTweensOf(a, u), d = c.length; d--; )
      li !== c[d] && c[d].kill(a, s);
    return this;
  }, t.getTweensOf = function(a, s) {
    for (var u = [], c = cr(a), d = this._first, p = Yr(s), h; d; )
      d instanceof tt ? E4(d._targets, c) && (p ? (!li || d._initted && d._ts) && d.globalTime(0) <= s && d.globalTime(d.totalDuration()) > s : !s || d.isActive()) && u.push(d) : (h = d.getTweensOf(c, s)).length && u.push.apply(u, h), d = d._next;
    return u;
  }, t.tweenTo = function(a, s) {
    s = s || {};
    var u = this, c = sr(u, a), d = s, p = d.startAt, h = d.onStart, m = d.onStartParams, b = d.immediateRender, v, C = tt.to(u, Jt({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: c,
      overwrite: "auto",
      duration: s.duration || Math.abs((c - (p && "time" in p ? p.time : u._time)) / u.timeScale()) || ze,
      onStart: function() {
        if (u.pause(), !v) {
          var x = s.duration || Math.abs((c - (p && "time" in p ? p.time : u._time)) / u.timeScale());
          C._dur !== x && Dn(C, x, 0, 1).render(C._time, !0, !0), v = 1;
        }
        h && h.apply(C, m || []);
      }
    }, s));
    return b ? C.render(0) : C;
  }, t.tweenFromTo = function(a, s, u) {
    return this.tweenTo(s, Jt({
      startAt: {
        time: sr(this, a)
      }
    }, u));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(a) {
    return a === void 0 && (a = this._time), u2(this, sr(this, a));
  }, t.previousLabel = function(a) {
    return a === void 0 && (a = this._time), u2(this, sr(this, a), 1);
  }, t.currentLabel = function(a) {
    return arguments.length ? this.seek(a, !0) : this.previousLabel(this._time + ze);
  }, t.shiftChildren = function(a, s, u) {
    u === void 0 && (u = 0);
    for (var c = this._first, d = this.labels, p; c; )
      c._start >= u && (c._start += a, c._end += a), c = c._next;
    if (s)
      for (p in d)
        d[p] >= u && (d[p] += a);
    return Mi(this);
  }, t.invalidate = function(a) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(a), s = s._next;
    return n.prototype.invalidate.call(this, a);
  }, t.clear = function(a) {
    a === void 0 && (a = !0);
    for (var s = this._first, u; s; )
      u = s._next, this.remove(s), s = u;
    return this._dp && (this._time = this._tTime = this._pTime = 0), a && (this.labels = {}), Mi(this);
  }, t.totalDuration = function(a) {
    var s = 0, u = this, c = u._last, d = lr, p, h, m;
    if (arguments.length)
      return u.timeScale((u._repeat < 0 ? u.duration() : u.totalDuration()) / (u.reversed() ? -a : a));
    if (u._dirty) {
      for (m = u.parent; c; )
        p = c._prev, c._dirty && c.totalDuration(), h = c._start, h > d && u._sort && c._ts && !u._lock ? (u._lock = 1, Dr(u, c, h - c._delay, 1)._lock = 0) : d = h, h < 0 && c._ts && (s -= h, (!m && !u._dp || m && m.smoothChildTiming) && (u._start += h / u._ts, u._time -= h, u._tTime -= h), u.shiftChildren(-h, !1, -1 / 0), d = 0), c._end > s && c._ts && (s = c._end), c = p;
      Dn(u, u === je && u._time > s ? u._time : s, 1, 1), u._dirty = 0;
    }
    return u._tDur;
  }, e.updateRoot = function(a) {
    if (je._ts && (Mf(je, $o(a, je)), If = Kt.frame), Kt.frame >= n2) {
      n2 += Gt.autoSleep || 120;
      var s = je._first;
      if ((!s || !s._ts) && Gt.autoSleep && Kt._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || Kt.sleep();
      }
    }
  }, e;
}(Aa);
Jt(wt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Z4 = function(e, t, i, a, s, u, c) {
  var d = new Tt(this._pt, e, t, 0, 1, hh, null, s), p = 0, h = 0, m, b, v, C, k, x, S, A;
  for (d.b = i, d.e = a, i += "", a += "", (S = ~a.indexOf("random(")) && (a = Ca(a)), u && (A = [i, a], u(A, e, t), i = A[0], a = A[1]), b = i.match(Nu) || []; m = Nu.exec(a); )
    C = m[0], k = a.substring(p, m.index), v ? v = (v + 1) % 5 : k.substr(-5) === "rgba(" && (v = 1), C !== b[h++] && (x = parseFloat(b[h - 1]) || 0, d._pt = {
      _next: d._pt,
      p: k || h === 1 ? k : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: x,
      c: C.charAt(1) === "=" ? _n(x, C) - x : parseFloat(C) - x,
      m: v && v < 4 ? Math.round : 0
    }, p = Nu.lastIndex);
  return d.c = p < a.length ? a.substring(p, a.length) : "", d.fp = c, (Rf.test(a) || S) && (d.e = 0), this._pt = d, d;
}, Nl = function(e, t, i, a, s, u, c, d, p, h) {
  Ye(a) && (a = a(s || 0, e, u));
  var m = e[t], b = i !== "get" ? i : Ye(m) ? p ? e[t.indexOf("set") || !Ye(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](p) : e[t]() : m, v = Ye(m) ? p ? ry : ph : Il, C;
  if (ut(a) && (~a.indexOf("random(") && (a = Ca(a)), a.charAt(1) === "=" && (C = _n(b, a) + (gt(b) || 0), (C || C === 0) && (a = C))), !h || b !== a || dl)
    return !isNaN(b * a) && a !== "" ? (C = new Tt(this._pt, e, t, +b || 0, a - (b || 0), typeof m == "boolean" ? ny : fh, 0, v), p && (C.fp = p), c && C.modifier(c, this, e), this._pt = C) : (!m && !(t in e) && Tl(t, a), Z4.call(this, e, t, b, a, v, d || Gt.stringFilter, p));
}, X4 = function(e, t, i, a, s) {
  if (Ye(e) && (e = ga(e, s, t, i, a)), !Lr(e) || e.style && e.nodeType || _t(e) || Lf(e))
    return ut(e) ? ga(e, s, t, i, a) : e;
  var u = {}, c;
  for (c in e)
    u[c] = ga(e[c], s, t, i, a);
  return u;
}, lh = function(e, t, i, a, s, u) {
  var c, d, p, h;
  if ($t[e] && (c = new $t[e]()).init(s, c.rawVars ? t[e] : X4(t[e], a, s, u, i), i, a, u) !== !1 && (i._pt = d = new Tt(i._pt, s, e, 0, 1, c.render, c, 0, c.priority), i !== hn))
    for (p = i._ptLookup[i._targets.indexOf(s)], h = c._props.length; h--; )
      p[c._props[h]] = d;
  return c;
}, li, dl, Ol = function n(e, t, i) {
  var a = e.vars, s = a.ease, u = a.startAt, c = a.immediateRender, d = a.lazy, p = a.onUpdate, h = a.runBackwards, m = a.yoyoEase, b = a.keyframes, v = a.autoRevert, C = e._dur, k = e._startAt, x = e._targets, S = e.parent, A = S && S.data === "nested" ? S.vars.targets : x, F = e._overwrite === "auto" && !El, E = e.timeline, L, z, P, I, N, K, J, X, ne, ce, be, ve, re;
  if (E && (!b || !s) && (s = "none"), e._ease = Ui(s, wn.ease), e._yEase = m ? ah(Ui(m === !0 ? s : m, wn.ease)) : 0, m && e._yoyo && !e._repeat && (m = e._yEase, e._yEase = e._ease, e._ease = m), e._from = !E && !!a.runBackwards, !E || b && !a.stagger) {
    if (X = x[0] ? qi(x[0]).harness : 0, ve = X && a[X.prop], L = Ho(a, Rl), k && (k._zTime < 0 && k.progress(1), t < 0 && h && c && !v ? k.render(-1, !0) : k.revert(h && C ? Ro : A4), k._lazy = 0), u) {
      if (mi(e._startAt = tt.set(x, Jt({
        data: "isStart",
        overwrite: !1,
        parent: S,
        immediateRender: !0,
        lazy: !k && Ft(d),
        startAt: null,
        delay: 0,
        onUpdate: p && function() {
          return Wt(e, "onUpdate");
        },
        stagger: 0
      }, u))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (dt || !c && !v) && e._startAt.revert(Ro), c && C && t <= 0 && i <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (h && C && !k) {
      if (t && (c = !1), P = Jt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: c && !k && Ft(d),
        immediateRender: c,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: S
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, L), ve && (P[X.prop] = ve), mi(e._startAt = tt.set(x, P)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (dt ? e._startAt.revert(Ro) : e._startAt.render(-1, !0)), e._zTime = t, !c)
        n(e._startAt, ze, ze);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, d = C && Ft(d) || d && !C, z = 0; z < x.length; z++) {
      if (N = x[z], J = N._gsap || zl(x)[z]._gsap, e._ptLookup[z] = ce = {}, al[J.id] && fi.length && Vo(), be = A === x ? z : A.indexOf(N), X && (ne = new X()).init(N, ve || L, e, be, A) !== !1 && (e._pt = I = new Tt(e._pt, N, ne.name, 0, 1, ne.render, ne, 0, ne.priority), ne._props.forEach(function($) {
        ce[$] = I;
      }), ne.priority && (K = 1)), !X || ve)
        for (P in L)
          $t[P] && (ne = lh(P, L, e, be, N, A)) ? ne.priority && (K = 1) : ce[P] = I = Nl.call(e, N, P, "get", L[P], be, A, 0, a.stringFilter);
      e._op && e._op[z] && e.kill(N, e._op[z]), F && e._pt && (li = e, je.killTweensOf(N, ce, e.globalTime(t)), re = !e.parent, li = 0), e._pt && d && (al[J.id] = 1);
    }
    K && gh(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = p, e._initted = (!e._op || e._pt) && !re, b && t <= 0 && E.render(lr, !0, !0);
}, Q4 = function(e, t, i, a, s, u, c, d) {
  var p = (e._pt && e._ptCache || (e._ptCache = {}))[t], h, m, b, v;
  if (!p)
    for (p = e._ptCache[t] = [], b = e._ptLookup, v = e._targets.length; v--; ) {
      if (h = b[v][t], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== t && h.fp !== t; )
          h = h._next;
      if (!h)
        return dl = 1, e.vars[t] = "+=0", Ol(e, c), dl = 0, d ? wa(t + " not eligible for reset") : 1;
      p.push(h);
    }
  for (v = p.length; v--; )
    m = p[v], h = m._pt || m, h.s = (a || a === 0) && !s ? a : h.s + (a || 0) + u * h.c, h.c = i - h.s, m.e && (m.e = et(i) + gt(m.e)), m.b && (m.b = h.s + gt(m.b));
}, ey = function(e, t) {
  var i = e[0] ? qi(e[0]).harness : 0, a = i && i.aliases, s, u, c, d;
  if (!a)
    return t;
  s = xn({}, t);
  for (u in a)
    if (u in s)
      for (d = a[u].split(","), c = d.length; c--; )
        s[d[c]] = s[u];
  return s;
}, ty = function(e, t, i, a) {
  var s = t.ease || a || "power1.inOut", u, c;
  if (_t(t))
    c = i[e] || (i[e] = []), t.forEach(function(d, p) {
      return c.push({
        t: p / (t.length - 1) * 100,
        v: d,
        e: s
      });
    });
  else
    for (u in t)
      c = i[u] || (i[u] = []), u === "ease" || c.push({
        t: parseFloat(e),
        v: t[u],
        e: s
      });
}, ga = function(e, t, i, a, s) {
  return Ye(e) ? e.call(t, i, a, s) : ut(e) && ~e.indexOf("random(") ? Ca(e) : e;
}, ch = Pl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", dh = {};
Lt(ch + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
  return dh[n] = 1;
});
var tt = /* @__PURE__ */ function(n) {
  Bf(e, n);
  function e(i, a, s, u) {
    var c;
    typeof a == "number" && (s.duration = a, a = s, s = null), c = n.call(this, u ? a : fa(a)) || this;
    var d = c.vars, p = d.duration, h = d.delay, m = d.immediateRender, b = d.stagger, v = d.overwrite, C = d.keyframes, k = d.defaults, x = d.scrollTrigger, S = d.yoyoEase, A = a.parent || je, F = (_t(i) || Lf(i) ? Yr(i[0]) : "length" in a) ? [i] : cr(i), E, L, z, P, I, N, K, J;
    if (c._targets = F.length ? zl(F) : wa("GSAP target " + i + " not found. https://gsap.com", !Gt.nullTargetWarn) || [], c._ptLookup = [], c._overwrite = v, C || b || Eo(p) || Eo(h)) {
      if (a = c.vars, E = c.timeline = new wt({
        data: "nested",
        defaults: k || {},
        targets: A && A.data === "nested" ? A.vars.targets : F
      }), E.kill(), E.parent = E._dp = jr(c), E._start = 0, b || Eo(p) || Eo(h)) {
        if (P = F.length, K = b && Yf(b), Lr(b))
          for (I in b)
            ~ch.indexOf(I) && (J || (J = {}), J[I] = b[I]);
        for (L = 0; L < P; L++)
          z = Ho(a, dh), z.stagger = 0, S && (z.yoyoEase = S), J && xn(z, J), N = F[L], z.duration = +ga(p, jr(c), L, N, F), z.delay = (+ga(h, jr(c), L, N, F) || 0) - c._delay, !b && P === 1 && z.delay && (c._delay = h = z.delay, c._start += h, z.delay = 0), E.to(N, z, K ? K(L, N, F) : 0), E._ease = De.none;
        E.duration() ? p = h = 0 : c.timeline = 0;
      } else if (C) {
        fa(Jt(E.vars.defaults, {
          ease: "none"
        })), E._ease = Ui(C.ease || a.ease || "none");
        var X = 0, ne, ce, be;
        if (_t(C))
          C.forEach(function(ve) {
            return E.to(F, ve, ">");
          }), E.duration();
        else {
          z = {};
          for (I in C)
            I === "ease" || I === "easeEach" || ty(I, C[I], z, C.easeEach);
          for (I in z)
            for (ne = z[I].sort(function(ve, re) {
              return ve.t - re.t;
            }), X = 0, L = 0; L < ne.length; L++)
              ce = ne[L], be = {
                ease: ce.e,
                duration: (ce.t - (L ? ne[L - 1].t : 0)) / 100 * p
              }, be[I] = ce.v, E.to(F, be, X), X += be.duration;
          E.duration() < p && E.to({}, {
            duration: p - E.duration()
          });
        }
      }
      p || c.duration(p = E.duration());
    } else
      c.timeline = 0;
    return v === !0 && !El && (li = jr(c), je.killTweensOf(F), li = 0), Dr(A, jr(c), s), a.reversed && c.reverse(), a.paused && c.paused(!0), (m || !p && !C && c._start === rt(A._time) && Ft(m) && T4(jr(c)) && A.data !== "nested") && (c._tTime = -ze, c.render(Math.max(0, -h) || 0)), x && jf(jr(c), x), c;
  }
  var t = e.prototype;
  return t.render = function(a, s, u) {
    var c = this._time, d = this._tDur, p = this._dur, h = a < 0, m = a > d - ze && !h ? d : a < ze ? 0 : a, b, v, C, k, x, S, A, F, E;
    if (!p)
      P4(this, a, s, u);
    else if (m !== this._tTime || !a || u || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h || this._lazy) {
      if (b = m, F = this.timeline, this._repeat) {
        if (k = p + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(k * 100 + a, s, u);
        if (b = rt(m % k), m === d ? (C = this._repeat, b = p) : (x = rt(m / k), C = ~~x, C && C === x ? (b = p, C--) : b > p && (b = p)), S = this._yoyo && C & 1, S && (E = this._yEase, b = p - b), x = Cn(this._tTime, k), b === c && !u && this._initted && C === x)
          return this._tTime = m, this;
        C !== x && (F && this._yEase && oh(F, S), this.vars.repeatRefresh && !S && !this._lock && b !== k && this._initted && (this._lock = u = 1, this.render(rt(k * C), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Kf(this, h ? a : b, u, s, m))
          return this._tTime = 0, this;
        if (c !== this._time && !(u && this.vars.repeatRefresh && C !== x))
          return this;
        if (p !== this._dur)
          return this.render(a, s, u);
      }
      if (this._tTime = m, this._time = b, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = A = (E || this._ease)(b / p), this._from && (this.ratio = A = 1 - A), b && !c && !s && !C && (Wt(this, "onStart"), this._tTime !== m))
        return this;
      for (v = this._pt; v; )
        v.r(A, v.d), v = v._next;
      F && F.render(a < 0 ? a : F._dur * F._ease(b / this._dur), s, u) || this._startAt && (this._zTime = a), this._onUpdate && !s && (h && ol(this, a, s, u), Wt(this, "onUpdate")), this._repeat && C !== x && this.vars.onRepeat && !s && this.parent && Wt(this, "onRepeat"), (m === this._tDur || !m) && this._tTime === m && (h && !this._onUpdate && ol(this, a, !0, !0), (a || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && mi(this, 1), !s && !(h && !c) && (m || c || S) && (Wt(this, m === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < d && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(a) {
    return (!a || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(a), n.prototype.invalidate.call(this, a);
  }, t.resetTo = function(a, s, u, c, d) {
    Da || Kt.wake(), this._ts || this.play();
    var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || Ol(this, p), h = this._ease(p / this._dur), Q4(this, a, s, u, c, h, p, d) ? this.resetTo(a, s, u, c, 1) : (os(this, 0), this.parent || Hf(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(a, s) {
    if (s === void 0 && (s = "all"), !a && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? sa(this) : this.scrollTrigger && this.scrollTrigger.kill(!!dt), this;
    if (this.timeline) {
      var u = this.timeline.totalDuration();
      return this.timeline.killTweensOf(a, s, li && li.vars.overwrite !== !0)._first || sa(this), this.parent && u !== this.timeline.totalDuration() && Dn(this, this._dur * this.timeline._tDur / u, 0, 1), this;
    }
    var c = this._targets, d = a ? cr(a) : c, p = this._ptLookup, h = this._pt, m, b, v, C, k, x, S;
    if ((!s || s === "all") && F4(c, d))
      return s === "all" && (this._pt = 0), sa(this);
    for (m = this._op = this._op || [], s !== "all" && (ut(s) && (k = {}, Lt(s, function(A) {
      return k[A] = 1;
    }), s = k), s = ey(c, s)), S = c.length; S--; )
      if (~d.indexOf(c[S])) {
        b = p[S], s === "all" ? (m[S] = s, C = b, v = {}) : (v = m[S] = m[S] || {}, C = s);
        for (k in C)
          x = b && b[k], x && ((!("kill" in x.d) || x.d.kill(k) === !0) && ns(this, x, "_pt"), delete b[k]), v !== "all" && (v[k] = 1);
      }
    return this._initted && !this._pt && h && sa(this), this;
  }, e.to = function(a, s) {
    return new e(a, s, arguments[2]);
  }, e.from = function(a, s) {
    return ha(1, arguments);
  }, e.delayedCall = function(a, s, u, c) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: a,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: u,
      onReverseCompleteParams: u,
      callbackScope: c
    });
  }, e.fromTo = function(a, s, u) {
    return ha(2, arguments);
  }, e.set = function(a, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(a, s);
  }, e.killTweensOf = function(a, s, u) {
    return je.killTweensOf(a, s, u);
  }, e;
}(Aa);
Jt(tt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Lt("staggerTo,staggerFrom,staggerFromTo", function(n) {
  tt[n] = function() {
    var e = new wt(), t = ul.call(arguments, 0);
    return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
  };
});
var Il = function(e, t, i) {
  return e[t] = i;
}, ph = function(e, t, i) {
  return e[t](i);
}, ry = function(e, t, i, a) {
  return e[t](a.fp, i);
}, iy = function(e, t, i) {
  return e.setAttribute(t, i);
}, ql = function(e, t) {
  return Ye(e[t]) ? ph : Bl(e[t]) && e.setAttribute ? iy : Il;
}, fh = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, ny = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, hh = function(e, t) {
  var i = t._pt, a = "";
  if (!e && t.b)
    a = t.b;
  else if (e === 1 && t.e)
    a = t.e;
  else {
    for (; i; )
      a = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + a, i = i._next;
    a += t.c;
  }
  t.set(t.t, t.p, a, t);
}, Ml = function(e, t) {
  for (var i = t._pt; i; )
    i.r(e, i.d), i = i._next;
}, ay = function(e, t, i, a) {
  for (var s = this._pt, u; s; )
    u = s._next, s.p === a && s.modifier(e, t, i), s = u;
}, oy = function(e) {
  for (var t = this._pt, i, a; t; )
    a = t._next, t.p === e && !t.op || t.op === e ? ns(this, t, "_pt") : t.dep || (i = 1), t = a;
  return !i;
}, sy = function(e, t, i, a) {
  a.mSet(e, t, a.m.call(a.tween, i, a.mt), a);
}, gh = function(e) {
  for (var t = e._pt, i, a, s, u; t; ) {
    for (i = t._next, a = s; a && a.pr > t.pr; )
      a = a._next;
    (t._prev = a ? a._prev : u) ? t._prev._next = t : s = t, (t._next = a) ? a._prev = t : u = t, t = i;
  }
  e._pt = s;
}, Tt = /* @__PURE__ */ function() {
  function n(t, i, a, s, u, c, d, p, h) {
    this.t = i, this.s = s, this.c = u, this.p = a, this.r = c || fh, this.d = d || this, this.set = p || Il, this.pr = h || 0, this._next = t, t && (t._prev = this);
  }
  var e = n.prototype;
  return e.modifier = function(i, a, s) {
    this.mSet = this.mSet || this.set, this.set = sy, this.m = i, this.mt = s, this.tween = a;
  }, n;
}();
Lt(Pl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
  return Rl[n] = 1;
});
Yt.TweenMax = Yt.TweenLite = tt;
Yt.TimelineLite = Yt.TimelineMax = wt;
je = new wt({
  sortChildren: !1,
  defaults: wn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Gt.stringFilter = nh;
var Vi = [], zo = {}, uy = [], c2 = 0, ly = 0, Uu = function(e) {
  return (zo[e] || uy).map(function(t) {
    return t();
  });
}, pl = function() {
  var e = Date.now(), t = [];
  e - c2 > 2 && (Uu("matchMediaInit"), Vi.forEach(function(i) {
    var a = i.queries, s = i.conditions, u, c, d, p;
    for (c in a)
      u = xr.matchMedia(a[c]).matches, u && (d = 1), u !== s[c] && (s[c] = u, p = 1);
    p && (i.revert(), d && t.push(i));
  }), Uu("matchMediaRevert"), t.forEach(function(i) {
    return i.onMatch(i, function(a) {
      return i.add(null, a);
    });
  }), c2 = e, Uu("matchMedia"));
}, mh = /* @__PURE__ */ function() {
  function n(t, i) {
    this.selector = i && ll(i), this.data = [], this._r = [], this.isReverted = !1, this.id = ly++, t && this.add(t);
  }
  var e = n.prototype;
  return e.add = function(i, a, s) {
    Ye(i) && (s = a, a = i, i = Ye);
    var u = this, c = function() {
      var p = He, h = u.selector, m;
      return p && p !== u && p.data.push(u), s && (u.selector = ll(s)), He = u, m = a.apply(u, arguments), Ye(m) && u._r.push(m), He = p, u.selector = h, u.isReverted = !1, m;
    };
    return u.last = c, i === Ye ? c(u, function(d) {
      return u.add(null, d);
    }) : i ? u[i] = c : c;
  }, e.ignore = function(i) {
    var a = He;
    He = null, i(this), He = a;
  }, e.getTweens = function() {
    var i = [];
    return this.data.forEach(function(a) {
      return a instanceof n ? i.push.apply(i, a.getTweens()) : a instanceof tt && !(a.parent && a.parent.data === "nested") && i.push(a);
    }), i;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(i, a) {
    var s = this;
    if (i ? function() {
      for (var c = s.getTweens(), d = s.data.length, p; d--; )
        p = s.data[d], p.data === "isFlip" && (p.revert(), p.getChildren(!0, !0, !1).forEach(function(h) {
          return c.splice(c.indexOf(h), 1);
        }));
      for (c.map(function(h) {
        return {
          g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
          t: h
        };
      }).sort(function(h, m) {
        return m.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(i);
      }), d = s.data.length; d--; )
        p = s.data[d], p instanceof wt ? p.data !== "nested" && (p.scrollTrigger && p.scrollTrigger.revert(), p.kill()) : !(p instanceof tt) && p.revert && p.revert(i);
      s._r.forEach(function(h) {
        return h(i, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(c) {
      return c.kill && c.kill();
    }), this.clear(), a)
      for (var u = Vi.length; u--; )
        Vi[u].id === this.id && Vi.splice(u, 1);
  }, e.revert = function(i) {
    this.kill(i || {});
  }, n;
}(), cy = /* @__PURE__ */ function() {
  function n(t) {
    this.contexts = [], this.scope = t, He && He.data.push(this);
  }
  var e = n.prototype;
  return e.add = function(i, a, s) {
    Lr(i) || (i = {
      matches: i
    });
    var u = new mh(0, s || this.scope), c = u.conditions = {}, d, p, h;
    He && !u.selector && (u.selector = He.selector), this.contexts.push(u), a = u.add("onMatch", a), u.queries = i;
    for (p in i)
      p === "all" ? h = 1 : (d = xr.matchMedia(i[p]), d && (Vi.indexOf(u) < 0 && Vi.push(u), (c[p] = d.matches) && (h = 1), d.addListener ? d.addListener(pl) : d.addEventListener("change", pl)));
    return h && a(u, function(m) {
      return u.add(null, m);
    }), this;
  }, e.revert = function(i) {
    this.kill(i || {});
  }, e.kill = function(i) {
    this.contexts.forEach(function(a) {
      return a.kill(i, !0);
    });
  }, n;
}(), jo = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    t.forEach(function(a) {
      return th(a);
    });
  },
  timeline: function(e) {
    return new wt(e);
  },
  getTweensOf: function(e, t) {
    return je.getTweensOf(e, t);
  },
  getProperty: function(e, t, i, a) {
    ut(e) && (e = cr(e)[0]);
    var s = qi(e || {}).get, u = i ? Vf : Uf;
    return i === "native" && (i = ""), e && (t ? u(($t[t] && $t[t].get || s)(e, t, i, a)) : function(c, d, p) {
      return u(($t[c] && $t[c].get || s)(e, c, d, p));
    });
  },
  quickSetter: function(e, t, i) {
    if (e = cr(e), e.length > 1) {
      var a = e.map(function(h) {
        return zt.quickSetter(h, t, i);
      }), s = a.length;
      return function(h) {
        for (var m = s; m--; )
          a[m](h);
      };
    }
    e = e[0] || {};
    var u = $t[t], c = qi(e), d = c.harness && (c.harness.aliases || {})[t] || t, p = u ? function(h) {
      var m = new u();
      hn._pt = 0, m.init(e, i ? h + i : h, hn, 0, [e]), m.render(1, m), hn._pt && Ml(1, hn);
    } : c.set(e, d);
    return u ? p : function(h) {
      return p(e, d, i ? h + i : h, c, 1);
    };
  },
  quickTo: function(e, t, i) {
    var a, s = zt.to(e, Jt((a = {}, a[t] = "+=0.1", a.paused = !0, a.stagger = 0, a), i || {})), u = function(d, p, h) {
      return s.resetTo(t, d, p, h);
    };
    return u.tween = s, u;
  },
  isTweening: function(e) {
    return je.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Ui(e.ease, wn.ease)), a2(wn, e || {});
  },
  config: function(e) {
    return a2(Gt, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, i = e.effect, a = e.plugins, s = e.defaults, u = e.extendTimeline;
    (a || "").split(",").forEach(function(c) {
      return c && !$t[c] && !Yt[c] && wa(t + " effect requires " + c + " plugin.");
    }), Ou[t] = function(c, d, p) {
      return i(cr(c), Jt(d || {}, s), p);
    }, u && (wt.prototype[t] = function(c, d, p) {
      return this.add(Ou[t](c, Lr(d) ? d : (p = d) && {}, this), p);
    });
  },
  registerEase: function(e, t) {
    De[e] = Ui(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Ui(e, t) : De;
  },
  getById: function(e) {
    return je.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var i = new wt(e), a, s;
    for (i.smoothChildTiming = Ft(e.smoothChildTiming), je.remove(i), i._dp = 0, i._time = i._tTime = je._time, a = je._first; a; )
      s = a._next, (t || !(!a._dur && a instanceof tt && a.vars.onComplete === a._targets[0])) && Dr(i, a, a._start - a._delay), a = s;
    return Dr(je, i, 0), i;
  },
  context: function(e, t) {
    return e ? new mh(e, t) : He;
  },
  matchMedia: function(e) {
    return new cy(e);
  },
  matchMediaRefresh: function() {
    return Vi.forEach(function(e) {
      var t = e.conditions, i, a;
      for (a in t)
        t[a] && (t[a] = !1, i = 1);
      i && e.revert();
    }) || pl();
  },
  addEventListener: function(e, t) {
    var i = zo[e] || (zo[e] = []);
    ~i.indexOf(t) || i.push(t);
  },
  removeEventListener: function(e, t) {
    var i = zo[e], a = i && i.indexOf(t);
    a >= 0 && i.splice(a, 1);
  },
  utils: {
    wrap: V4,
    wrapYoyo: H4,
    distribute: Yf,
    random: Zf,
    snap: Jf,
    normalize: U4,
    getUnit: gt,
    clamp: O4,
    splitColor: rh,
    toArray: cr,
    selector: ll,
    mapRange: Qf,
    pipe: q4,
    unitize: M4,
    interpolate: $4,
    shuffle: Gf
  },
  install: Nf,
  effects: Ou,
  ticker: Kt,
  updateRoot: wt.updateRoot,
  plugins: $t,
  globalTimeline: je,
  core: {
    PropTween: Tt,
    globals: Of,
    Tween: tt,
    Timeline: wt,
    Animation: Aa,
    getCache: qi,
    _removeLinkedListItem: ns,
    reverting: function() {
      return dt;
    },
    context: function(e) {
      return e && He && (He.data.push(e), e._ctx = He), He;
    },
    suppressOverwrites: function(e) {
      return El = e;
    }
  }
};
Lt("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
  return jo[n] = tt[n];
});
Kt.add(wt.updateRoot);
hn = jo.to({}, {
  duration: 0
});
var dy = function(e, t) {
  for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
    i = i._next;
  return i;
}, py = function(e, t) {
  var i = e._targets, a, s, u;
  for (a in t)
    for (s = i.length; s--; )
      u = e._ptLookup[s][a], u && (u = u.d) && (u._pt && (u = dy(u, a)), u && u.modifier && u.modifier(t[a], e, i[s], a));
}, Vu = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(a, s, u) {
      u._onInit = function(c) {
        var d, p;
        if (ut(s) && (d = {}, Lt(s, function(h) {
          return d[h] = 1;
        }), s = d), t) {
          d = {};
          for (p in s)
            d[p] = t(s[p]);
          s = d;
        }
        py(c, s);
      };
    }
  };
}, zt = jo.registerPlugin({
  name: "attr",
  init: function(e, t, i, a, s) {
    var u, c, d;
    this.tween = i;
    for (u in t)
      d = e.getAttribute(u) || "", c = this.add(e, "setAttribute", (d || 0) + "", t[u], a, s, 0, 0, u), c.op = u, c.b = d, this._props.push(u);
  },
  render: function(e, t) {
    for (var i = t._pt; i; )
      dt ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var i = t.length; i--; )
      this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
  }
}, Vu("roundProps", cl), Vu("modifiers"), Vu("snap", Jf)) || jo;
tt.version = wt.version = zt.version = "3.12.7";
zf = 1;
Fl() && An();
De.Power0;
De.Power1;
De.Power2;
De.Power3;
De.Power4;
De.Linear;
De.Quad;
De.Cubic;
De.Quart;
De.Quint;
De.Strong;
De.Elastic;
De.Back;
De.SteppedEase;
De.Bounce;
De.Sine;
De.Expo;
De.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var d2, ci, bn, Ul, Ni, p2, Vl, fy = function() {
  return typeof window < "u";
}, Jr = {}, Ti = 180 / Math.PI, vn = Math.PI / 180, ln = Math.atan2, f2 = 1e8, Hl = /([A-Z])/g, hy = /(left|right|width|margin|padding|x)/i, gy = /[\s,\(]\S/, Ar = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, fl = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, my = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, _y = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, by = function(e, t) {
  var i = t.s + t.c * e;
  t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
}, _h = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, bh = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, vy = function(e, t, i) {
  return e.style[t] = i;
}, yy = function(e, t, i) {
  return e.style.setProperty(t, i);
}, ky = function(e, t, i) {
  return e._gsap[t] = i;
}, wy = function(e, t, i) {
  return e._gsap.scaleX = e._gsap.scaleY = i;
}, xy = function(e, t, i, a, s) {
  var u = e._gsap;
  u.scaleX = u.scaleY = i, u.renderTransform(s, u);
}, Cy = function(e, t, i, a, s) {
  var u = e._gsap;
  u[t] = i, u.renderTransform(s, u);
}, Ke = "transform", Rt = Ke + "Origin", Dy = function n(e, t) {
  var i = this, a = this.target, s = a.style, u = a._gsap;
  if (e in Jr && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Ar[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(c) {
        return i.tfm[c] = Kr(a, c);
      }) : this.tfm[e] = u.x ? u[e] : Kr(a, e), e === Rt && (this.tfm.zOrigin = u.zOrigin);
    else
      return Ar.transform.split(",").forEach(function(c) {
        return n.call(i, c, t);
      });
    if (this.props.indexOf(Ke) >= 0)
      return;
    u.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(Rt, t, "")), e = Ke;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, vh = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Ay = function() {
  var e = this.props, t = this.target, i = t.style, a = t._gsap, s, u;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? i[e[s]] = e[s + 2] : i.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Hl, "-$1").toLowerCase());
  if (this.tfm) {
    for (u in this.tfm)
      a[u] = this.tfm[u];
    a.svg && (a.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = Vl(), (!s || !s.isStart) && !i[Ke] && (vh(i), a.zOrigin && i[Rt] && (i[Rt] += " " + a.zOrigin + "px", a.zOrigin = 0, a.renderTransform()), a.uncache = 1);
  }
}, yh = function(e, t) {
  var i = {
    target: e,
    props: [],
    revert: Ay,
    save: Dy
  };
  return e._gsap || zt.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(a) {
    return i.save(a);
  }), i;
}, kh, hl = function(e, t) {
  var i = ci.createElementNS ? ci.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ci.createElement(e);
  return i && i.style ? i : ci.createElement(e);
}, Br = function n(e, t, i) {
  var a = getComputedStyle(e);
  return a[t] || a.getPropertyValue(t.replace(Hl, "-$1").toLowerCase()) || a.getPropertyValue(t) || !i && n(e, Sn(t) || t, 1) || "";
}, h2 = "O,Moz,ms,Ms,Webkit".split(","), Sn = function(e, t, i) {
  var a = t || Ni, s = a.style, u = 5;
  if (e in s && !i)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); u-- && !(h2[u] + e in s); )
    ;
  return u < 0 ? null : (u === 3 ? "ms" : u >= 0 ? h2[u] : "") + e;
}, gl = function() {
  fy() && window.document && (d2 = window, ci = d2.document, bn = ci.documentElement, Ni = hl("div") || {
    style: {}
  }, hl("div"), Ke = Sn(Ke), Rt = Ke + "Origin", Ni.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", kh = !!Sn("perspective"), Vl = zt.core.reverting, Ul = 1);
}, g2 = function(e) {
  var t = e.ownerSVGElement, i = hl("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), a = e.cloneNode(!0), s;
  a.style.display = "block", i.appendChild(a), bn.appendChild(i);
  try {
    s = a.getBBox();
  } catch {
  }
  return i.removeChild(a), bn.removeChild(i), s;
}, m2 = function(e, t) {
  for (var i = t.length; i--; )
    if (e.hasAttribute(t[i]))
      return e.getAttribute(t[i]);
}, wh = function(e) {
  var t, i;
  try {
    t = e.getBBox();
  } catch {
    t = g2(e), i = 1;
  }
  return t && (t.width || t.height) || i || (t = g2(e)), t && !t.width && !t.x && !t.y ? {
    x: +m2(e, ["x", "cx", "x1"]) || 0,
    y: +m2(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, xh = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && wh(e));
}, $i = function(e, t) {
  if (t) {
    var i = e.style, a;
    t in Jr && t !== Rt && (t = Ke), i.removeProperty ? (a = t.substr(0, 2), (a === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), i.removeProperty(a === "--" ? t : t.replace(Hl, "-$1").toLowerCase())) : i.removeAttribute(t);
  }
}, di = function(e, t, i, a, s, u) {
  var c = new Tt(e._pt, t, i, 0, 1, u ? bh : _h);
  return e._pt = c, c.b = a, c.e = s, e._props.push(i), c;
}, _2 = {
  deg: 1,
  rad: 1,
  turn: 1
}, Sy = {
  grid: 1,
  flex: 1
}, _i = function n(e, t, i, a) {
  var s = parseFloat(i) || 0, u = (i + "").trim().substr((s + "").length) || "px", c = Ni.style, d = hy.test(t), p = e.tagName.toLowerCase() === "svg", h = (p ? "client" : "offset") + (d ? "Width" : "Height"), m = 100, b = a === "px", v = a === "%", C, k, x, S;
  if (a === u || !s || _2[a] || _2[u])
    return s;
  if (u !== "px" && !b && (s = n(e, t, i, "px")), S = e.getCTM && xh(e), (v || u === "%") && (Jr[t] || ~t.indexOf("adius")))
    return C = S ? e.getBBox()[d ? "width" : "height"] : e[h], et(v ? s / C * m : s / 100 * C);
  if (c[d ? "width" : "height"] = m + (b ? u : a), k = a !== "rem" && ~t.indexOf("adius") || a === "em" && e.appendChild && !p ? e : e.parentNode, S && (k = (e.ownerSVGElement || {}).parentNode), (!k || k === ci || !k.appendChild) && (k = ci.body), x = k._gsap, x && v && x.width && d && x.time === Kt.time && !x.uncache)
    return et(s / x.width * m);
  if (v && (t === "height" || t === "width")) {
    var A = e.style[t];
    e.style[t] = m + a, C = e[h], A ? e.style[t] = A : $i(e, t);
  } else
    (v || u === "%") && !Sy[Br(k, "display")] && (c.position = Br(e, "position")), k === e && (c.position = "static"), k.appendChild(Ni), C = Ni[h], k.removeChild(Ni), c.position = "absolute";
  return d && v && (x = qi(k), x.time = Kt.time, x.width = k[h]), et(b ? C * s / m : C && s ? m / C * s : 0);
}, Kr = function(e, t, i, a) {
  var s;
  return Ul || gl(), t in Ar && t !== "transform" && (t = Ar[t], ~t.indexOf(",") && (t = t.split(",")[0])), Jr[t] && t !== "transform" ? (s = Ea(e, a), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Wo(Br(e, Rt)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || a || ~(s + "").indexOf("calc(")) && (s = Ko[t] && Ko[t](e, t, i) || Br(e, t) || qf(e, t) || (t === "opacity" ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? _i(e, t, s, i) + i : s;
}, Ey = function(e, t, i, a) {
  if (!i || i === "none") {
    var s = Sn(t, e, 1), u = s && Br(e, s, 1);
    u && u !== i ? (t = s, i = u) : t === "borderColor" && (i = Br(e, "borderTopColor"));
  }
  var c = new Tt(this._pt, e.style, t, 0, 1, hh), d = 0, p = 0, h, m, b, v, C, k, x, S, A, F, E, L;
  if (c.b = i, c.e = a, i += "", a += "", a === "auto" && (k = e.style[t], e.style[t] = a, a = Br(e, t) || a, k ? e.style[t] = k : $i(e, t)), h = [i, a], nh(h), i = h[0], a = h[1], b = i.match(fn) || [], L = a.match(fn) || [], L.length) {
    for (; m = fn.exec(a); )
      x = m[0], A = a.substring(d, m.index), C ? C = (C + 1) % 5 : (A.substr(-5) === "rgba(" || A.substr(-5) === "hsla(") && (C = 1), x !== (k = b[p++] || "") && (v = parseFloat(k) || 0, E = k.substr((v + "").length), x.charAt(1) === "=" && (x = _n(v, x) + E), S = parseFloat(x), F = x.substr((S + "").length), d = fn.lastIndex - F.length, F || (F = F || Gt.units[t] || E, d === a.length && (a += F, c.e += F)), E !== F && (v = _i(e, t, k, F) || 0), c._pt = {
        _next: c._pt,
        p: A || p === 1 ? A : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: v,
        c: S - v,
        m: C && C < 4 || t === "zIndex" ? Math.round : 0
      });
    c.c = d < a.length ? a.substring(d, a.length) : "";
  } else
    c.r = t === "display" && a === "none" ? bh : _h;
  return Rf.test(a) && (c.e = 0), this._pt = c, c;
}, b2 = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, By = function(e) {
  var t = e.split(" "), i = t[0], a = t[1] || "50%";
  return (i === "top" || i === "bottom" || a === "left" || a === "right") && (e = i, i = a, a = e), t[0] = b2[i] || i, t[1] = b2[a] || a, t.join(" ");
}, Fy = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var i = t.t, a = i.style, s = t.u, u = i._gsap, c, d, p;
    if (s === "all" || s === !0)
      a.cssText = "", d = 1;
    else
      for (s = s.split(","), p = s.length; --p > -1; )
        c = s[p], Jr[c] && (d = 1, c = c === "transformOrigin" ? Rt : Ke), $i(i, c);
    d && ($i(i, Ke), u && (u.svg && i.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", Ea(i, 1), u.uncache = 1, vh(a)));
  }
}, Ko = {
  clearProps: function(e, t, i, a, s) {
    if (s.data !== "isFromStart") {
      var u = e._pt = new Tt(e._pt, t, i, 0, 0, Fy);
      return u.u = a, u.pr = -10, u.tween = s, e._props.push(i), 1;
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
}, Sa = [1, 0, 0, 1, 0, 0], Ch = {}, Dh = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, v2 = function(e) {
  var t = Br(e, Ke);
  return Dh(t) ? Sa : t.substr(7).match(Tf).map(et);
}, $l = function(e, t) {
  var i = e._gsap || qi(e), a = e.style, s = v2(e), u, c, d, p;
  return i.svg && e.getAttribute("transform") ? (d = e.transform.baseVal.consolidate().matrix, s = [d.a, d.b, d.c, d.d, d.e, d.f], s.join(",") === "1,0,0,1,0,0" ? Sa : s) : (s === Sa && !e.offsetParent && e !== bn && !i.svg && (d = a.display, a.display = "block", u = e.parentNode, (!u || !e.offsetParent && !e.getBoundingClientRect().width) && (p = 1, c = e.nextElementSibling, bn.appendChild(e)), s = v2(e), d ? a.display = d : $i(e, "display"), p && (c ? u.insertBefore(e, c) : u ? u.appendChild(e) : bn.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, ml = function(e, t, i, a, s, u) {
  var c = e._gsap, d = s || $l(e, !0), p = c.xOrigin || 0, h = c.yOrigin || 0, m = c.xOffset || 0, b = c.yOffset || 0, v = d[0], C = d[1], k = d[2], x = d[3], S = d[4], A = d[5], F = t.split(" "), E = parseFloat(F[0]) || 0, L = parseFloat(F[1]) || 0, z, P, I, N;
  i ? d !== Sa && (P = v * x - C * k) && (I = E * (x / P) + L * (-k / P) + (k * A - x * S) / P, N = E * (-C / P) + L * (v / P) - (v * A - C * S) / P, E = I, L = N) : (z = wh(e), E = z.x + (~F[0].indexOf("%") ? E / 100 * z.width : E), L = z.y + (~(F[1] || F[0]).indexOf("%") ? L / 100 * z.height : L)), a || a !== !1 && c.smooth ? (S = E - p, A = L - h, c.xOffset = m + (S * v + A * k) - S, c.yOffset = b + (S * C + A * x) - A) : c.xOffset = c.yOffset = 0, c.xOrigin = E, c.yOrigin = L, c.smooth = !!a, c.origin = t, c.originIsAbsolute = !!i, e.style[Rt] = "0px 0px", u && (di(u, c, "xOrigin", p, E), di(u, c, "yOrigin", h, L), di(u, c, "xOffset", m, c.xOffset), di(u, c, "yOffset", b, c.yOffset)), e.setAttribute("data-svg-origin", E + " " + L);
}, Ea = function(e, t) {
  var i = e._gsap || new uh(e);
  if ("x" in i && !t && !i.uncache)
    return i;
  var a = e.style, s = i.scaleX < 0, u = "px", c = "deg", d = getComputedStyle(e), p = Br(e, Rt) || "0", h, m, b, v, C, k, x, S, A, F, E, L, z, P, I, N, K, J, X, ne, ce, be, ve, re, $, M, G, te, he, ue, Me, Le;
  return h = m = b = k = x = S = A = F = E = 0, v = C = 1, i.svg = !!(e.getCTM && xh(e)), d.translate && ((d.translate !== "none" || d.scale !== "none" || d.rotate !== "none") && (a[Ke] = (d.translate !== "none" ? "translate3d(" + (d.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (d.rotate !== "none" ? "rotate(" + d.rotate + ") " : "") + (d.scale !== "none" ? "scale(" + d.scale.split(" ").join(",") + ") " : "") + (d[Ke] !== "none" ? d[Ke] : "")), a.scale = a.rotate = a.translate = "none"), P = $l(e, i.svg), i.svg && (i.uncache ? ($ = e.getBBox(), p = i.xOrigin - $.x + "px " + (i.yOrigin - $.y) + "px", re = "") : re = !t && e.getAttribute("data-svg-origin"), ml(e, re || p, !!re || i.originIsAbsolute, i.smooth !== !1, P)), L = i.xOrigin || 0, z = i.yOrigin || 0, P !== Sa && (J = P[0], X = P[1], ne = P[2], ce = P[3], h = be = P[4], m = ve = P[5], P.length === 6 ? (v = Math.sqrt(J * J + X * X), C = Math.sqrt(ce * ce + ne * ne), k = J || X ? ln(X, J) * Ti : 0, A = ne || ce ? ln(ne, ce) * Ti + k : 0, A && (C *= Math.abs(Math.cos(A * vn))), i.svg && (h -= L - (L * J + z * ne), m -= z - (L * X + z * ce))) : (Le = P[6], ue = P[7], G = P[8], te = P[9], he = P[10], Me = P[11], h = P[12], m = P[13], b = P[14], I = ln(Le, he), x = I * Ti, I && (N = Math.cos(-I), K = Math.sin(-I), re = be * N + G * K, $ = ve * N + te * K, M = Le * N + he * K, G = be * -K + G * N, te = ve * -K + te * N, he = Le * -K + he * N, Me = ue * -K + Me * N, be = re, ve = $, Le = M), I = ln(-ne, he), S = I * Ti, I && (N = Math.cos(-I), K = Math.sin(-I), re = J * N - G * K, $ = X * N - te * K, M = ne * N - he * K, Me = ce * K + Me * N, J = re, X = $, ne = M), I = ln(X, J), k = I * Ti, I && (N = Math.cos(I), K = Math.sin(I), re = J * N + X * K, $ = be * N + ve * K, X = X * N - J * K, ve = ve * N - be * K, J = re, be = $), x && Math.abs(x) + Math.abs(k) > 359.9 && (x = k = 0, S = 180 - S), v = et(Math.sqrt(J * J + X * X + ne * ne)), C = et(Math.sqrt(ve * ve + Le * Le)), I = ln(be, ve), A = Math.abs(I) > 2e-4 ? I * Ti : 0, E = Me ? 1 / (Me < 0 ? -Me : Me) : 0), i.svg && (re = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !Dh(Br(e, Ke)), re && e.setAttribute("transform", re))), Math.abs(A) > 90 && Math.abs(A) < 270 && (s ? (v *= -1, A += k <= 0 ? 180 : -180, k += k <= 0 ? 180 : -180) : (C *= -1, A += A <= 0 ? 180 : -180)), t = t || i.uncache, i.x = h - ((i.xPercent = h && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + u, i.y = m - ((i.yPercent = m && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-m) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + u, i.z = b + u, i.scaleX = et(v), i.scaleY = et(C), i.rotation = et(k) + c, i.rotationX = et(x) + c, i.rotationY = et(S) + c, i.skewX = A + c, i.skewY = F + c, i.transformPerspective = E + u, (i.zOrigin = parseFloat(p.split(" ")[2]) || !t && i.zOrigin || 0) && (a[Rt] = Wo(p)), i.xOffset = i.yOffset = 0, i.force3D = Gt.force3D, i.renderTransform = i.svg ? Ty : kh ? Ah : Ly, i.uncache = 0, i;
}, Wo = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Hu = function(e, t, i) {
  var a = gt(t);
  return et(parseFloat(t) + parseFloat(_i(e, "x", i + "px", a))) + a;
}, Ly = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Ah(e, t);
}, Bi = "0deg", ra = "0px", Fi = ") ", Ah = function(e, t) {
  var i = t || this, a = i.xPercent, s = i.yPercent, u = i.x, c = i.y, d = i.z, p = i.rotation, h = i.rotationY, m = i.rotationX, b = i.skewX, v = i.skewY, C = i.scaleX, k = i.scaleY, x = i.transformPerspective, S = i.force3D, A = i.target, F = i.zOrigin, E = "", L = S === "auto" && e && e !== 1 || S === !0;
  if (F && (m !== Bi || h !== Bi)) {
    var z = parseFloat(h) * vn, P = Math.sin(z), I = Math.cos(z), N;
    z = parseFloat(m) * vn, N = Math.cos(z), u = Hu(A, u, P * N * -F), c = Hu(A, c, -Math.sin(z) * -F), d = Hu(A, d, I * N * -F + F);
  }
  x !== ra && (E += "perspective(" + x + Fi), (a || s) && (E += "translate(" + a + "%, " + s + "%) "), (L || u !== ra || c !== ra || d !== ra) && (E += d !== ra || L ? "translate3d(" + u + ", " + c + ", " + d + ") " : "translate(" + u + ", " + c + Fi), p !== Bi && (E += "rotate(" + p + Fi), h !== Bi && (E += "rotateY(" + h + Fi), m !== Bi && (E += "rotateX(" + m + Fi), (b !== Bi || v !== Bi) && (E += "skew(" + b + ", " + v + Fi), (C !== 1 || k !== 1) && (E += "scale(" + C + ", " + k + Fi), A.style[Ke] = E || "translate(0, 0)";
}, Ty = function(e, t) {
  var i = t || this, a = i.xPercent, s = i.yPercent, u = i.x, c = i.y, d = i.rotation, p = i.skewX, h = i.skewY, m = i.scaleX, b = i.scaleY, v = i.target, C = i.xOrigin, k = i.yOrigin, x = i.xOffset, S = i.yOffset, A = i.forceCSS, F = parseFloat(u), E = parseFloat(c), L, z, P, I, N;
  d = parseFloat(d), p = parseFloat(p), h = parseFloat(h), h && (h = parseFloat(h), p += h, d += h), d || p ? (d *= vn, p *= vn, L = Math.cos(d) * m, z = Math.sin(d) * m, P = Math.sin(d - p) * -b, I = Math.cos(d - p) * b, p && (h *= vn, N = Math.tan(p - h), N = Math.sqrt(1 + N * N), P *= N, I *= N, h && (N = Math.tan(h), N = Math.sqrt(1 + N * N), L *= N, z *= N)), L = et(L), z = et(z), P = et(P), I = et(I)) : (L = m, I = b, z = P = 0), (F && !~(u + "").indexOf("px") || E && !~(c + "").indexOf("px")) && (F = _i(v, "x", u, "px"), E = _i(v, "y", c, "px")), (C || k || x || S) && (F = et(F + C - (C * L + k * P) + x), E = et(E + k - (C * z + k * I) + S)), (a || s) && (N = v.getBBox(), F = et(F + a / 100 * N.width), E = et(E + s / 100 * N.height)), N = "matrix(" + L + "," + z + "," + P + "," + I + "," + F + "," + E + ")", v.setAttribute("transform", N), A && (v.style[Ke] = N);
}, Ry = function(e, t, i, a, s) {
  var u = 360, c = ut(s), d = parseFloat(s) * (c && ~s.indexOf("rad") ? Ti : 1), p = d - a, h = a + p + "deg", m, b;
  return c && (m = s.split("_")[1], m === "short" && (p %= u, p !== p % (u / 2) && (p += p < 0 ? u : -u)), m === "cw" && p < 0 ? p = (p + u * f2) % u - ~~(p / u) * u : m === "ccw" && p > 0 && (p = (p - u * f2) % u - ~~(p / u) * u)), e._pt = b = new Tt(e._pt, t, i, a, p, my), b.e = h, b.u = "deg", e._props.push(i), b;
}, y2 = function(e, t) {
  for (var i in t)
    e[i] = t[i];
  return e;
}, Py = function(e, t, i) {
  var a = y2({}, i._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", u = i.style, c, d, p, h, m, b, v, C;
  a.svg ? (p = i.getAttribute("transform"), i.setAttribute("transform", ""), u[Ke] = t, c = Ea(i, 1), $i(i, Ke), i.setAttribute("transform", p)) : (p = getComputedStyle(i)[Ke], u[Ke] = t, c = Ea(i, 1), u[Ke] = p);
  for (d in Jr)
    p = a[d], h = c[d], p !== h && s.indexOf(d) < 0 && (v = gt(p), C = gt(h), m = v !== C ? _i(i, d, p, C) : parseFloat(p), b = parseFloat(h), e._pt = new Tt(e._pt, c, d, m, b - m, fl), e._pt.u = C || 0, e._props.push(d));
  y2(c, a);
};
Lt("padding,margin,Width,Radius", function(n, e) {
  var t = "Top", i = "Right", a = "Bottom", s = "Left", u = (e < 3 ? [t, i, a, s] : [t + s, t + i, a + i, a + s]).map(function(c) {
    return e < 2 ? n + c : "border" + c + n;
  });
  Ko[e > 1 ? "border" + n : n] = function(c, d, p, h, m) {
    var b, v;
    if (arguments.length < 4)
      return b = u.map(function(C) {
        return Kr(c, C, p);
      }), v = b.join(" "), v.split(b[0]).length === 5 ? b[0] : v;
    b = (h + "").split(" "), v = {}, u.forEach(function(C, k) {
      return v[C] = b[k] = b[k] || b[(k - 1) / 2 | 0];
    }), c.init(d, v, m);
  };
});
var Sh = {
  name: "css",
  register: gl,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, i, a, s) {
    var u = this._props, c = e.style, d = i.vars.startAt, p, h, m, b, v, C, k, x, S, A, F, E, L, z, P, I;
    Ul || gl(), this.styles = this.styles || yh(e), I = this.styles.props, this.tween = i;
    for (k in t)
      if (k !== "autoRound" && (h = t[k], !($t[k] && lh(k, t, i, a, e, s)))) {
        if (v = typeof h, C = Ko[k], v === "function" && (h = h.call(i, a, e, s), v = typeof h), v === "string" && ~h.indexOf("random(") && (h = Ca(h)), C)
          C(this, e, k, h, i) && (P = 1);
        else if (k.substr(0, 2) === "--")
          p = (getComputedStyle(e).getPropertyValue(k) + "").trim(), h += "", hi.lastIndex = 0, hi.test(p) || (x = gt(p), S = gt(h)), S ? x !== S && (p = _i(e, k, p, S) + S) : x && (h += x), this.add(c, "setProperty", p, h, a, s, 0, 0, k), u.push(k), I.push(k, 0, c[k]);
        else if (v !== "undefined") {
          if (d && k in d ? (p = typeof d[k] == "function" ? d[k].call(i, a, e, s) : d[k], ut(p) && ~p.indexOf("random(") && (p = Ca(p)), gt(p + "") || p === "auto" || (p += Gt.units[k] || gt(Kr(e, k)) || ""), (p + "").charAt(1) === "=" && (p = Kr(e, k))) : p = Kr(e, k), b = parseFloat(p), A = v === "string" && h.charAt(1) === "=" && h.substr(0, 2), A && (h = h.substr(2)), m = parseFloat(h), k in Ar && (k === "autoAlpha" && (b === 1 && Kr(e, "visibility") === "hidden" && m && (b = 0), I.push("visibility", 0, c.visibility), di(this, c, "visibility", b ? "inherit" : "hidden", m ? "inherit" : "hidden", !m)), k !== "scale" && k !== "transform" && (k = Ar[k], ~k.indexOf(",") && (k = k.split(",")[0]))), F = k in Jr, F) {
            if (this.styles.save(k), E || (L = e._gsap, L.renderTransform && !t.parseTransform || Ea(e, t.parseTransform), z = t.smoothOrigin !== !1 && L.smooth, E = this._pt = new Tt(this._pt, c, Ke, 0, 1, L.renderTransform, L, 0, -1), E.dep = 1), k === "scale")
              this._pt = new Tt(this._pt, L, "scaleY", L.scaleY, (A ? _n(L.scaleY, A + m) : m) - L.scaleY || 0, fl), this._pt.u = 0, u.push("scaleY", k), k += "X";
            else if (k === "transformOrigin") {
              I.push(Rt, 0, c[Rt]), h = By(h), L.svg ? ml(e, h, 0, z, 0, this) : (S = parseFloat(h.split(" ")[2]) || 0, S !== L.zOrigin && di(this, L, "zOrigin", L.zOrigin, S), di(this, c, k, Wo(p), Wo(h)));
              continue;
            } else if (k === "svgOrigin") {
              ml(e, h, 1, z, 0, this);
              continue;
            } else if (k in Ch) {
              Ry(this, L, k, b, A ? _n(b, A + h) : h);
              continue;
            } else if (k === "smoothOrigin") {
              di(this, L, "smooth", L.smooth, h);
              continue;
            } else if (k === "force3D") {
              L[k] = h;
              continue;
            } else if (k === "transform") {
              Py(this, h, e);
              continue;
            }
          } else
            k in c || (k = Sn(k) || k);
          if (F || (m || m === 0) && (b || b === 0) && !gy.test(h) && k in c)
            x = (p + "").substr((b + "").length), m || (m = 0), S = gt(h) || (k in Gt.units ? Gt.units[k] : x), x !== S && (b = _i(e, k, p, S)), this._pt = new Tt(this._pt, F ? L : c, k, b, (A ? _n(b, A + m) : m) - b, !F && (S === "px" || k === "zIndex") && t.autoRound !== !1 ? by : fl), this._pt.u = S || 0, x !== S && S !== "%" && (this._pt.b = p, this._pt.r = _y);
          else if (k in c)
            Ey.call(this, e, k, p, A ? A + h : h);
          else if (k in e)
            this.add(e, k, p || e[k], A ? A + h : h, a, s);
          else if (k !== "parseTransform") {
            Tl(k, h);
            continue;
          }
          F || (k in c ? I.push(k, 0, c[k]) : typeof e[k] == "function" ? I.push(k, 2, e[k]()) : I.push(k, 1, p || e[k])), u.push(k);
        }
      }
    P && gh(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Vl())
      for (var i = t._pt; i; )
        i.r(e, i.d), i = i._next;
    else
      t.styles.revert();
  },
  get: Kr,
  aliases: Ar,
  getSetter: function(e, t, i) {
    var a = Ar[t];
    return a && a.indexOf(",") < 0 && (t = a), t in Jr && t !== Rt && (e._gsap.x || Kr(e, "x")) ? i && p2 === i ? t === "scale" ? wy : ky : (p2 = i || {}) && (t === "scale" ? xy : Cy) : e.style && !Bl(e.style[t]) ? vy : ~t.indexOf("-") ? yy : ql(e, t);
  },
  core: {
    _removeProperty: $i,
    _getMatrix: $l
  }
};
zt.utils.checkPrefix = Sn;
zt.core.getStyleSaver = yh;
(function(n, e, t, i) {
  var a = Lt(n + "," + e + "," + t, function(s) {
    Jr[s] = 1;
  });
  Lt(e, function(s) {
    Gt.units[s] = "deg", Ch[s] = 1;
  }), Ar[a[13]] = n + "," + e, Lt(i, function(s) {
    var u = s.split(":");
    Ar[u[1]] = a[u[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
  Gt.units[n] = "px";
});
zt.registerPlugin(Sh);
var it = zt.registerPlugin(Sh) || zt;
it.core.Tween;
const Eh = ({
  isOpen: n,
  toggleModal: e,
  content: t,
  title: i,
  onConfirm: a,
  onCancel: s,
  children: u,
  loading: c
}) => {
  const {
    t: d
  } = We(), p = Oe(null), h = Oe(null), m = () => {
    it.to(h.current, {
      opacity: 1,
      duration: 0.25,
      zIndex: 2e3,
      pointerEvents: "all",
      display: "block"
    }), it.to(p.current, {
      opacity: 1,
      duration: 0.5,
      pointerEvents: "all"
    });
  }, b = () => {
    it.to(h.current, {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
      display: "none"
    }), it.to(p.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
      onComplete: () => e()
    });
  };
  return le(() => {
    n ? m() : b();
  }, [n]), g("div", {
    ref: h,
    className: "background-alert-wrapper",
    children: [g("style", {
      type: "text/css",
      children: y4
    }), g("div", {
      className: "alert-wrapper",
      onClick: b,
      ref: p
    }), g("div", {
      className: "alert",
      children: [g("div", {
        className: "text-wrapper",
        children: [g(_r, {
          text: i,
          header: !0
        }), g(_r, {
          text: t,
          paragraph: !0
        })]
      }), u, g("div", {
        className: "button-wrapper",
        children: [g(gi, {
          text: d("confirm"),
          onClick: a,
          primary: !0,
          loading: c
        }), g(gi, {
          text: d("cancel"),
          onClick: b
        })]
      })]
    })]
  });
}, zy = `.accordian-wrapper{border-radius:12px;overflow:hidden;height:54px;border:1px solid #d1d5db}.header-content{display:flex;align-items:center;justify-content:space-between;cursor:pointer;margin-bottom:1rem;padding:16px 24px 16px 16px}.category{font-size:16px}.chevron-wrapper{transform:rotate(90deg)}.content{display:flex;flex-direction:column;gap:.25rem;opacity:0;padding:16px 24px 16px 16px}.type,.part{font-size:16px}.wrapper{display:flex;flex-direction:column;gap:.25rem}.part-wrapper{display:flex;justify-content:space-between;align-items:flex-start;padding:10px;transition:all ease-in-out .5s}.can-hover{cursor:pointer}.can-hover:hover{background-color:#d9d9d966;border-radius:12px}.type-wrapper{display:flex}.svg-wrapper{min-width:20px}
`, Ny = (n) => /* @__PURE__ */ Y("svg", { width: 20, height: 20, viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M15.5 31C24.0605 31 31 24.0604 31 15.5C31 6.93958 24.0605 0 15.5 0C6.93945 0 0 6.93958 0 15.5C0 18.6947 0.966309 21.6637 2.62305 24.1305L8.62451 18.4889C8.74268 18.3724 8.86279 18.2644 8.98389 18.1625C7.87256 15.2234 8.50049 11.7754 10.8701 9.41406C12.6006 7.68994 14.9941 6.82117 17.4365 7.03076C17.5571 7.04114 17.6699 7.08105 17.7671 7.14429C17.8936 7.22681 17.9932 7.349 18.0474 7.49646C18.1226 7.70227 18.0977 7.92786 17.9868 8.11011C17.9575 8.15796 17.9224 8.20288 17.8813 8.24365L13.8589 12.2506L15.271 16.6925L19.7295 18.099L23.7515 14.0924C23.9482 13.8969 24.2407 13.8322 24.502 13.9272C24.7627 14.0217 24.9453 14.2588 24.9692 14.5348C25.1797 16.9679 24.3071 19.3524 22.5771 21.0768C20.2051 23.4396 16.7417 24.0634 13.7905 22.9541C13.6904 23.0771 13.5845 23.197 13.4697 23.3115L8.0708 29.1067C10.2769 30.3137 12.8081 31 15.5 31Z", fill: "#10B981" })), Oy = ({
  bom: n,
  category: e,
  readOnly: t
}) => {
  const [i, a] = Q(!1), s = Oe(null), u = Oe(null), c = Oe(null), d = Oe(), p = (h, m, b) => {
    is.value = {
      part: h,
      category: m,
      type: b
    }, h.id ? Fe("/part") : Fe("/update");
  };
  return le(() => {
    d.current = it.timeline({
      paused: !0
    });
    const h = it.context(() => {
      d.current.to(s.current, {
        height: "auto",
        duration: 0.75
      }).to(c.current, {
        rotate: 270
      }, "=").to(u.current, {
        opacity: 1
      }, "-=.5").reverse();
    });
    return () => {
      h.revert();
    };
  }, []), le(() => {
    d.current.reversed(!i);
  }, [i, a]), g(ie, {
    children: [g("style", {
      type: "text/css",
      children: zy
    }), g("div", {
      className: "accordian-wrapper",
      ref: s,
      children: [g("div", {
        className: "header-content",
        onClick: () => a(!i),
        children: [g("h4", {
          className: "category font-semibold",
          children: e
        }), g("div", {
          className: "chevron-wrapper",
          ref: c,
          children: g(Fr, {})
        })]
      }), g("div", {
        className: "content",
        ref: u,
        children: n ? Object.keys(n || {}).map((h, m) => {
          if (e.toLocaleLowerCase() === h.replace(/_/g, " ").toLocaleLowerCase())
            return Object.keys(n[h] || {}).map((b) => {
              const v = n[h][b];
              return g("div", {
                className: "wrapper",
                children: [g("div", {
                  className: "type-wrapper",
                  children: g("h4", {
                    className: "type font-semibold capitalize",
                    children: b == null ? void 0 : b.replace(/_/g, " ")
                  })
                }), g("div", {
                  className: `part-wrapper ${v != null && v.swap && !t ? "can-hover" : ""}`,
                  onClick: () => {
                    v != null && v.swap && !t && p(v, h == null ? void 0 : h.replace(/_/g, " "), b == null ? void 0 : b.replace(/_/g, " "));
                  },
                  children: [g("p", {
                    className: "part",
                    children: v != null && v.name ? v == null ? void 0 : v.name : "—"
                  }), (v == null ? void 0 : v.swap) && !t && g("div", {
                    className: "svg-wrapper",
                    children: g(Ny, {})
                  })]
                }, v == null ? void 0 : v.id)]
              }, b);
            });
        }) : g(Ra, {
          colour: "#000",
          isLoading: !0
        })
      })]
    })]
  });
}, Iy = `.bom-table{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.bom-table_unsaved-changes{display:flex;justify-content:space-between;align-items:center}.circle{background-color:#fba157;border-radius:100%;display:flex;justify-content:center;align-items:center;color:#fff;height:16px;width:16px;min-width:16px;min-height:16px;font-size:10px}.unsaved-changes{position:relative;width:50%}
`, qy = `.unsaved-changes_wrapper{opacity:0}.title-section{display:flex;align-items:center;justify-content:flex-end;gap:.35rem;cursor:pointer;position:relative;z-index:23;padding-right:15px}.unsaved-content{display:flex;flex-direction:column;align-items:flex-start;width:100%;gap:1rem;border-radius:12px;background-color:#fff;border:1px solid transparent;position:absolute;z-index:21;right:0;height:0;width:0;overflow:hidden;top:-1rem}.animation-wrapper{padding:15px;margin-top:2rem;width:100%;opacity:0;display:flex;flex-direction:column;gap:1rem}.unsaved-part-wrapper{width:100%}.unsaved-part{display:flex;align-items:center;justify-content:space-between;gap:1rem}.revert-button{font-size:10px;padding:3px 10px;border:1px solid #d1d5db;border-radius:12px;transition:all ease-in-out .5s;cursor:pointer}.revert-button:hover{background-color:#000;color:#fff}.close-button{position:absolute;left:6px;top:6px;cursor:pointer}
`, My = (n) => /* @__PURE__ */ Y("svg", { width: 28, height: 28, viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("circle", { cx: 14, cy: 14, r: 14, fill: "white" }), /* @__PURE__ */ Y("path", { d: "M11 17L14 14M14 14L17 11M14 14L17 17M14 14L11 11", stroke: "black", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }));
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let k2 = typeof document < "u" ? T5 : le, w2 = (n) => n && !Array.isArray(n) && typeof n == "object", Bo = [], Uy = {}, Bh = it;
const jl = (n, e = Bo) => {
  let t = Uy;
  w2(n) ? (t = n, n = null, e = "dependencies" in t ? t.dependencies : Bo) : w2(e) && (t = e, e = "dependencies" in t ? t.dependencies : Bo), n && typeof n != "function" && console.warn("First parameter must be a function or config object");
  const { scope: i, revertOnUpdate: a } = t, s = Oe(!1), u = Oe(Bh.context(() => {
  }, i)), c = Oe((p) => u.current.add(null, p)), d = e && e.length && !a;
  return d && k2(() => (s.current = !0, () => u.current.revert()), Bo), k2(() => {
    if (n && u.current.add(n, i), !d || !s.current)
      return () => u.current.revert();
  }, e), { context: u.current, contextSafe: c.current };
};
jl.register = (n) => {
  Bh = n;
};
jl.headless = !0;
const Vy = () => {
  const [n, e] = Q(window.innerWidth), [t, i] = Q(window.innerHeight);
  return le(() => {
    const a = () => {
      e(window.innerWidth), i(window.innerHeight);
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), {
    width: n,
    height: t
  };
}, Hy = ({
  unsavedParts: n,
  revertPart: e,
  readOnly: t
}) => {
  const {
    t: i
  } = We(), a = Oe(null), s = Oe(), u = Oe(null), c = Oe([]), [d, p] = Q(n), h = Oe(null), {
    height: m,
    width: b
  } = Vy(), {
    contextSafe: v
  } = jl(() => {
    s.current = it.timeline({
      paused: !0
    }), s.current.to(a.current, {
      border: "1px solid #d1d5db",
      height: "auto",
      maxHeight: "150px",
      overflowY: "auto",
      width: b >= 640 ? "500px" : "366px"
    }).to(u.current, {
      opacity: 1
    }, "-=.25").reverse(), d.length > 0 ? it.to(h.current, {
      opacity: 1
    }) : it.to(h.current, {
      opacity: 0
    });
  }, {
    scope: h,
    dependencies: [d]
  }), C = v(() => {
    s.current.reversed(!s.current.reversed());
  }), k = (x, S, A) => {
    p(d.filter((F) => F.part !== S)), it.to(c.current[x], {
      opacity: 0,
      height: 0,
      onComplete: () => e(S, A)
    });
  };
  return le(() => {
    p(n);
  }, [n]), g(ie, {
    children: [g("style", {
      type: "text/css",
      children: qy
    }), g("div", {
      className: "unsaved-changes_wrapper",
      ref: h,
      onClick: C,
      children: [g("div", {
        className: "title-section",
        children: [g(_r, {
          text: i("virtualworkshop_unsaved_changes"),
          small: !0,
          bold: !0,
          nowrap: !0
        }), g("div", {
          className: "circle",
          children: d.length
        })]
      }), g("div", {
        className: "unsaved-content",
        ref: a,
        children: [g("div", {
          className: "close-button",
          children: g(My, {})
        }), g("div", {
          className: "animation-wrapper",
          ref: u,
          children: d.length > 0 && d.map((x, S) => {
            var A, F;
            return g("div", {
              className: "unsaved-part-wrapper",
              ref: (E) => c.current[x.type + S] = E,
              children: [g(_r, {
                text: (A = x.type) == null ? void 0 : A.replace(/_/g, " "),
                small: !0,
                left: !0,
                bold: !0,
                capitalize: !0
              }), g("div", {
                className: "unsaved-part",
                children: [g(_r, {
                  text: (F = x.part) != null && F.name ? x.part.name : "Removed",
                  small: !0,
                  left: !0
                }), g("div", {
                  className: "revert-button",
                  onClick: () => k(x.type + S, x.part, x.type),
                  children: i("virtualworkshop_revert_btn")
                })]
              })]
            }, x.type + S);
          })
        })]
      })]
    })]
  });
}, Kl = () => {
  JSON.parse(sessionStorage.getItem("bm_categories")).collections.map((e) => {
    console.log(`${Ee.value.key}:${e.handle}:v2`), sessionStorage.removeItem(`${Ee.value.key}:${e.handle}:v2`);
  });
}, Wl = {
  frame: "Frame_ID",
  headset: "Headset_ID",
  fork: "Fork_ID",
  stem: "Stem_ID",
  handlebar: "Handlebar_ID",
  chainguide: "Chainguide_ID",
  bottom_Bracket: "Bottom_Bracket_ID",
  crankset: "Crankset_ID",
  largest_Chainring: "Largest_Chainring_ID",
  second_Largest_Chainring: "2nd_Largest_Chainring_ID",
  third_Largest_Chainring: "3rd_Largest_Chainring_ID",
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
}, Fh = ({
  categorisedBOM: n,
  bikeSave: e,
  refreshBomb: t,
  readOnly: i
}) => {
  const {
    t: a
  } = We(), u = window.BikeMatrix.getConfig(), [c, d] = Q([]), {
    currentBike: p,
    setCurrentBike: h
  } = Pt(), m = new Xt(u.apiUrl, u.apiKey, u.apiToken, u.isShopify), b = mt.value, v = [
    "Frame & Fork",
    "Drivetrain",
    "Brakes",
    "Cockpit",
    "Wheels & Tyres"
    // "EBike",
  ], C = async (x, S) => {
    Kl();
    const A = await m.revertComponent(p.key, x.product_category_id, Wl[S.split(" ").join("_")]);
    A.success ? (h({
      ...p
    }), t()) : console.error(A.error);
  }, k = () => {
    let x = [];
    b && Object.keys(n).forEach((S) => {
      typeof n[S] == "object" && n[S] !== null && Object.keys(n[S]).forEach((A) => {
        n[S][A].unsaved_changes && x.push({
          type: A,
          part: n[S][A]
        });
      });
    }), d(x);
  };
  return le(() => {
    k();
  }, [b, n]), g(ie, {
    children: [g("style", {
      type: "text/css",
      children: Iy
    }), g("div", {
      class: "bom-table_unsaved-changes mt-8",
      children: [g(_r, {
        subheader: !0,
        text: a("virtualworkshop_build_text")
      }), !i && g("div", {
        className: "unsaved-changes",
        children: g(Hy, {
          readOnly: i,
          unsavedParts: c,
          revertPart: (x, S) => C(x, S)
        })
      }), !n && i && g(Ra, {
        isLoading: !0,
        colour: "#000"
      })]
    }), g("div", {
      className: "bom-table",
      children: v.map((x, S) => g(Oy, {
        category: x,
        bom: n,
        readOnly: i
      }, x + S))
    })]
  });
};
function $y() {
  const {
    t: n
  } = We(), {
    currentBike: e
  } = Pt(), t = mt.value, a = window.BikeMatrix.getConfig();
  le(() => {
    Cr.value.back = "/";
  }, []);
  const [s, u] = Q(!1), [c, d] = Q(!1), [p, h] = Q(!1), [m, b] = Q(""), [v, C] = Q(""), [k, x] = Q(!1), S = new Xt(a.apiUrl, a.apiKey, a.apiToken, a.isShopify), A = async () => {
    const z = await S.getBikeBom(t.bike_Key);
    mt.value = ka(z), u(!1), d(!0), Fe("/");
  }, F = (z) => {
    C(z), u(!1);
  }, E = async () => {
    if (u(!0), x(!0), t.owner_Email_Address) {
      const z = await S.saveCustomBike(e.key, t.owner_Email_Address);
      z.success ? A() : F(z.error);
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(m)) {
      const z = await S.saveCustomBike(e.key, m);
      z.success ? A() : F(z.error);
    }
  };
  le(() => {
    k && v && C("");
  }, [m]);
  const L = async () => {
    const z = await S.getBikeBom(e.key), P = ka(z.data);
    mt.value = P;
  };
  return le(() => {
    mt.value || L();
  }, []), g(ie, {
    children: [g("div", {
      className: "mb-4",
      children: [e ? g(br, {
        bike: e,
        selected: !0,
        settings: !0
      }) : g(Ln, {}), g("div", {
        class: "mt-4 mb-8",
        children: g(Fh, {
          categorisedBOM: t,
          bikeSave: c,
          refreshBomb: L
        })
      })]
    }), g(gi, {
      text: n("virtualworkshop_save_btn"),
      onClick: t != null && t.owner_Email_Address ? () => E() : () => h(!0),
      primary: !0,
      loading: !p && s
    }), g(bi, {}), g(Eh, {
      isOpen: p,
      toggleModal: () => h(!1),
      content: n("virtualworkshop_save_text"),
      title: n("virtualworkshop_save_title"),
      onConfirm: E,
      onCancel: () => h(!1),
      loading: s,
      children: g("div", {
        class: "mt-8",
        children: g(Sf, {
          value: m,
          setValue: (z) => b(z),
          placeholder: n("virtualworkshop_settings_email"),
          type: "email",
          error: v,
          submitInput: E
        })
      })
    })]
  });
}
function jy() {
  const {
    t: n
  } = We(), e = is.value, i = window.BikeMatrix.getConfig(), [a, s] = Q(!1), [u, c] = Q(null), d = mt.value, {
    currentBike: p,
    setCurrentBike: h
  } = Pt(), m = new Xt(i.apiUrl, i.apiKey, i.apiToken, i.isShopify), [b, v] = Q(!1);
  p.isShared && Fe("/");
  const C = async () => {
    v(!0), Kl();
    const k = await m.removeComponent(p.key, e.part.product_category_id, Wl[e.type.split(" ").join("_")]);
    k.success ? (d[e.category.split(" ").join("_")][e.type.split(" ").join("_")] = {
      ...d[e.category.split(" ").join("_")][e.type.split(" ").join("_")],
      id: null,
      name: null,
      unsaved_changes: !0
    }, mt.value = d, h({
      ...p
    }), v(!1), Fe("/bom")) : (v(!1), s(!1), c(k.error + " - " + e.part.name));
  };
  return g(ie, {
    children: [g("div", {
      className: "mb-4",
      children: [p ? g(br, {
        bike: p,
        selected: !0,
        settings: !0
      }) : g(Ln, {}), g("div", {
        className: "part-wrapper mt-8 mb-8 relative",
        children: [g(_r, {
          subheader: !0,
          text: e.part.name
        }), g("p", {
          className: "absolute text-red-500 text-sm left-1/2 transform -translate-x-1/2",
          children: u
        })]
      })]
    }), g(gi, {
      text: n("virtualworkshop_swap_btn"),
      onClick: () => Fe("/update"),
      primary: !0
    }), g(gi, {
      text: n("virtualworkshop_remove_btn"),
      onClick: () => s(!0)
    }), g(bi, {}), a && g(Eh, {
      isOpen: a,
      toggleModal: () => s(!1),
      content: n("virtualworkshop_remove_subtitle"),
      title: "Are you sure?",
      onConfirm: C,
      onCancel: () => s(!1),
      loading: b
    })]
  });
}
const Ky = `.search-wrapper{position:relative;margin-bottom:18rem}@media (max-width: 767px){.search-wrapper{margin-bottom:22rem}}.search_bar-wrapper{border:1px solid rgb(209 213 219);border-radius:12px;display:flex;align-items:center;z-index:2;width:100%;background-color:#fff;position:absolute;transition:all ease-in-out .5s;padding:12px}.input_icon-wrapper{display:flex;align-items:center;gap:1rem;width:100%}.input_icon-wrapper input{width:100%}.svg-wrapper{cursor:pointer}.compatibility-wrapper{height:110px;position:absolute;width:100%;border-radius:12px;overflow:hidden;top:0}.compatibility{position:absolute;width:100%;top:-75px;height:71px;border:1px solid;border-bottom-right-radius:12px;border-bottom-left-radius:12px}.compatibility-contents{position:relative;height:54px;display:flex;align-items:center;border-bottom-left-radius:12px;margin-top:16px;overflow:hidden}@media (max-width: 767px){.compatibility-contents p{font-size:16px}}.polygon{position:absolute}.bikon{margin-left:.75rem}.compatibility-background{height:108px;position:absolute;z-index:-1;border-bottom-left-radius:12px;left:-2px;top:-38px;width:59px}.results-wrapper{top:40px;height:0;overflow:hidden;position:absolute;width:100%;border:1px solid black;border-bottom-left-radius:12px;border-bottom-right-radius:12px;max-height:190px;overflow-y:scroll;background-color:#fff;z-index:1}.results{width:100%;padding:12px;padding-top:2rem;display:flex;flex-direction:column;gap:.5rem}.result{background-color:#fff;transition:ease-in-out .2s;border-radius:8px;padding-left:10px;padding-top:5px;padding-bottom:5px;cursor:pointer}.result:hover{background-color:#d9d9d966}.notes-wrapper{display:flex;gap:2rem;position:absolute;top:116px;opacity:0}@media (max-width: 767px){.notes-wrapper{flex-direction:column;gap:.5rem}}
`, Wy = (n) => /* @__PURE__ */ Y("svg", { width: 23, height: 23, viewBox: "0 0 23 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M0 9.26199C0 7.98077 0.242061 6.78221 0.726184 5.66631C1.21031 4.5504 1.87806 3.57089 2.72945 2.72776C3.58919 1.87637 4.58247 1.21096 5.70931 0.731536C6.83615 0.243845 8.04228 0 9.32771 0C10.6215 0 11.8318 0.243845 12.9586 0.731536C14.0855 1.21096 15.0788 1.87637 15.9385 2.72776C16.7982 3.57089 17.4701 4.5504 17.9543 5.66631C18.4384 6.78221 18.6805 7.98077 18.6805 9.26199C18.6805 10.3283 18.5052 11.345 18.1546 12.3121C17.804 13.271 17.3199 14.1389 16.7022 14.9159L22.6369 20.8178C22.7538 20.9418 22.8414 21.0782 22.8998 21.227C22.9666 21.384 23 21.5452 23 21.7105C23 21.9585 22.9457 22.1775 22.8372 22.3677C22.7287 22.566 22.5785 22.719 22.3865 22.8264C22.1945 22.9421 21.9733 23 21.7229 23C21.556 23 21.389 22.9669 21.2221 22.9008C21.0635 22.8429 20.9216 22.7562 20.7964 22.6404L14.8367 16.7137C14.0604 17.2758 13.209 17.7181 12.2825 18.0404C11.356 18.3545 10.3711 18.5116 9.32771 18.5116C8.04228 18.5116 6.83615 18.2719 5.70931 17.7925C4.58247 17.313 3.58919 16.6476 2.72945 15.7962C1.87806 14.9448 1.21031 13.9612 0.726184 12.8453C0.242061 11.7294 0 10.535 0 9.26199ZM1.81546 9.26199C1.81546 10.287 2.01161 11.25 2.40392 12.1509C2.79623 13.0437 3.3346 13.8331 4.01905 14.5191C4.71185 15.1969 5.50898 15.7301 6.41045 16.1186C7.32027 16.4988 8.29269 16.6889 9.32771 16.6889C10.3711 16.6889 11.3435 16.4988 12.245 16.1186C13.1548 15.7301 13.9519 15.1969 14.6364 14.5191C15.3292 13.8331 15.8675 13.0437 16.2515 12.1509C16.6438 11.25 16.84 10.287 16.84 9.26199C16.84 8.22875 16.6438 7.26577 16.2515 6.37305C15.8675 5.47206 15.3292 4.68266 14.6364 4.00485C13.9519 3.31878 13.1548 2.78562 12.245 2.40539C11.3435 2.01689 10.3711 1.82264 9.32771 1.82264C8.29269 1.82264 7.32027 2.01689 6.41045 2.40539C5.50898 2.78562 4.71185 3.31878 4.01905 4.00485C3.3346 4.68266 2.79623 5.47206 2.40392 6.37305C2.01161 7.26577 1.81546 8.22875 1.81546 9.26199Z", fill: "black" })), Gl = (n) => /* @__PURE__ */ Y("svg", { width: 57, height: 40, viewBox: "0 0 57 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4343 1.80079C44.6538 2.54246 44.2342 3.3224 43.4943 3.54788L37.9829 5.22744L42.5437 17.3218C42.7699 17.2662 42.9979 17.2168 43.2272 17.1749C43.4564 17.1337 43.687 17.0993 43.9187 17.0724C44.1498 17.0449 44.3822 17.0256 44.6151 17.0131C44.8475 17.0012 45.0804 16.9962 45.3134 16.9987C45.547 17.0018 45.7794 17.0118 46.0117 17.0293C46.2441 17.0468 46.4758 17.0712 46.7069 17.1037C46.938 17.1356 47.1673 17.1756 47.396 17.2224C47.6246 17.2693 47.8508 17.3231 48.0764 17.3843C48.3013 17.4462 48.5244 17.5143 48.7451 17.5899C48.9657 17.6656 49.1839 17.7481 49.4002 17.8374C49.6159 17.9268 49.8286 18.0231 50.0381 18.1262C50.2477 18.2293 50.4541 18.3387 50.6575 18.4549C50.8603 18.5712 51.0594 18.6937 51.2547 18.8224C51.4501 18.9512 51.6412 19.0862 51.8285 19.2274C52.0153 19.3687 52.1977 19.5156 52.3758 19.6681C52.5539 19.8206 52.7265 19.9787 52.8948 20.1424C53.063 20.3062 53.2257 20.4749 53.3835 20.6493C53.5413 20.8237 53.6929 21.0024 53.8396 21.1862C53.9863 21.3699 54.1268 21.5581 54.2618 21.7512C54.3967 21.9437 54.5255 22.1406 54.6482 22.3418C54.7708 22.5424 54.8867 22.7474 54.997 22.9556C55.1067 23.1637 55.2103 23.3756 55.307 23.5906C55.4038 23.8056 55.4944 24.0237 55.5776 24.2443C55.6608 24.4649 55.7372 24.6881 55.8069 24.9137C55.8765 25.1393 55.9388 25.3668 55.9942 25.5962C56.0497 25.8262 56.0978 26.0568 56.1391 26.2899C56.1804 26.5224 56.2136 26.7562 56.2408 26.9912C56.2673 27.2256 56.2864 27.4612 56.2987 27.6974C56.3104 27.9331 56.3153 28.1693 56.3123 28.4056C56.3098 28.6418 56.2999 28.8781 56.2827 29.1137C56.2654 29.3493 56.2408 29.5843 56.2087 29.8187C56.1773 30.0524 56.1378 30.2856 56.0916 30.5174C56.0454 30.7487 55.9924 30.9787 55.932 31.2068C55.871 31.4356 55.8038 31.6612 55.7292 31.8856C55.6546 32.1093 55.5733 32.3306 55.4852 32.5493C55.3964 32.7681 55.3015 32.9837 55.2004 33.1968C55.0987 33.4093 54.9902 33.6187 54.8756 33.8243C54.761 34.0299 54.6402 34.2318 54.5132 34.4299C54.3863 34.6281 54.2531 34.8224 54.1138 35.0118C53.9746 35.2012 53.8297 35.3862 53.6793 35.5668C53.529 35.7474 53.3724 35.9224 53.2109 36.0931C53.0495 36.2637 52.8831 36.4287 52.7117 36.5887C52.5398 36.7481 52.3635 36.9024 52.1817 37.0512C52.0005 37.1993 51.815 37.3424 51.6251 37.4787C51.4347 37.6156 51.2406 37.7462 51.0427 37.8706C50.8443 37.9949 50.6427 38.1131 50.4369 38.2243C50.2316 38.3356 50.0227 38.4406 49.8107 38.5387C49.5987 38.6368 49.3836 38.7287 49.166 38.8131C48.9485 38.8974 48.7284 38.9749 48.506 39.0456C48.2835 39.1156 48.0591 39.1793 47.8323 39.2349C47.6061 39.2912 47.3781 39.3406 47.1488 39.3818C46.9195 39.4237 46.689 39.4581 46.4573 39.4849C46.2262 39.5118 45.9938 39.5312 45.7609 39.5431C45.5279 39.5556 45.2955 39.5599 45.062 39.5574C44.829 39.5549 44.5966 39.5449 44.3643 39.5268C44.1313 39.5093 43.9002 39.4843 43.6691 39.4524C43.438 39.4199 43.2087 39.3806 42.98 39.3337C42.7514 39.2862 42.5252 39.2324 42.2996 39.1706C42.0747 39.1093 41.8522 39.0412 41.6309 38.9656C41.4103 38.8899 41.1921 38.8074 40.9764 38.7174C40.7607 38.6281 40.548 38.5318 40.3379 38.4287C40.1283 38.3256 39.9219 38.2162 39.7191 38.0999C39.5163 37.9837 39.3172 37.8606 39.1219 37.7318C38.9265 37.6031 38.7354 37.4681 38.5481 37.3268C38.3613 37.1856 38.1789 37.0387 38.0008 36.8862C37.8233 36.7331 37.6501 36.5749 37.4825 36.4112C37.3142 36.2474 37.1515 36.0787 36.9937 35.9043C36.8359 35.7299 36.6843 35.5512 36.5376 35.3674C36.391 35.1837 36.2504 34.9949 36.1161 34.8024C35.9811 34.6093 35.8523 34.4124 35.7296 34.2118C35.607 34.0106 35.4911 33.8062 35.3808 33.5974C35.2711 33.3893 35.1676 33.1774 35.0708 32.9624C34.974 32.7474 34.8841 32.5293 34.8009 32.3087C34.7177 32.0881 34.6412 31.8649 34.5716 31.6393C34.5026 31.4137 34.4397 31.1862 34.3848 30.9562C34.3294 30.7268 34.2813 30.4956 34.24 30.2631C34.1993 30.0306 34.1654 29.7968 34.1389 29.5618C34.1124 29.3268 34.0933 29.0912 34.081 28.8556C34.0693 28.6193 34.0644 28.3831 34.0674 28.1468C34.0699 27.9106 34.0798 27.6743 34.0976 27.4387C34.1149 27.2031 34.1395 26.9681 34.171 26.7343C34.203 26.4999 34.2425 26.2668 34.2887 26.0356C34.3349 25.8037 34.3885 25.5737 34.4489 25.3456C34.5093 25.1174 34.5771 24.8912 34.6517 24.6674C34.7263 24.4437 34.8076 24.2224 34.8964 24.0037C34.9845 23.7849 35.0794 23.5693 35.1811 23.3562C35.2828 23.1437 35.3913 22.9343 35.5059 22.7287C35.6206 22.5231 35.7414 22.3212 35.8683 22.1231C35.9959 21.9249 36.129 21.7312 36.2683 21.5418C36.407 21.3518 36.5524 21.1668 36.7028 20.9868C36.8532 20.8062 37.0097 20.6312 37.1712 20.4606C37.3327 20.2906 37.4991 20.1249 37.6711 19.9656C37.843 19.8056 38.0193 19.6518 38.2005 19.5031C38.3817 19.3543 38.5678 19.2118 38.7576 19.0756C38.9481 18.9387 39.1422 18.8081 39.3407 18.6837C39.5385 18.5593 39.7407 18.4418 39.9459 18.3306L37.6544 12.2531L29.7544 28.8937C29.6977 29.0137 29.625 29.1224 29.5381 29.2218C29.4506 29.3206 29.3514 29.4049 29.2404 29.4756C29.1295 29.5462 29.0112 29.5993 28.8854 29.6362C28.7597 29.6724 28.6309 29.6906 28.5002 29.6906H22.8523C22.8085 30.0424 22.7481 30.3912 22.6717 30.7368C22.5947 31.0824 22.5022 31.4243 22.3943 31.7612C22.2859 32.0981 22.1626 32.4293 22.0233 32.7543C21.884 33.0793 21.7306 33.3974 21.5617 33.7074C21.3934 34.0181 21.211 34.3199 21.0144 34.6131C20.8178 34.9062 20.6076 35.1893 20.3845 35.4618C20.162 35.7349 19.9266 35.9968 19.6795 36.2474C19.4323 36.4974 19.1741 36.7362 18.9047 36.9618C18.6354 37.1874 18.3562 37.3999 18.0672 37.5993C17.7775 37.7981 17.4798 37.9831 17.1735 38.1537C16.8672 38.3243 16.5541 38.4799 16.233 38.6212C15.9125 38.7618 15.5859 38.8868 15.2531 38.9962C14.9209 39.1056 14.5843 39.1993 14.2429 39.2762C13.9021 39.3537 13.5582 39.4143 13.2112 39.4593C12.8648 39.5037 12.5166 39.5312 12.1671 39.5424C11.8177 39.5537 11.4689 39.5481 11.12 39.5262C10.7712 39.5037 10.4242 39.4649 10.0791 39.4093C9.73392 39.3543 9.39186 39.2824 9.0535 39.1943C8.71452 39.1062 8.38109 39.0024 8.05198 38.8824C7.72348 38.7624 7.40053 38.6274 7.08436 38.4762C6.76819 38.3256 6.45941 38.1599 6.15865 37.9799C5.85788 37.7999 5.56575 37.6056 5.28286 37.3974C4.99997 37.1893 4.72755 36.9681 4.465 36.7337C4.20245 36.4993 3.95161 36.2531 3.71248 35.9949C3.47273 35.7368 3.24592 35.4681 3.03144 35.1881C2.81696 34.9081 2.61604 34.6187 2.42868 34.3193C2.24132 34.0206 2.06814 33.7131 1.90913 33.3974C1.75011 33.0818 1.6059 32.7593 1.47709 32.4299C1.34827 32.1006 1.23487 31.7656 1.13688 31.4256C1.03888 31.0849 0.956912 30.7412 0.890966 30.3931C0.825636 30.0449 0.775714 29.6943 0.742433 29.3412C0.709152 28.9887 0.692511 28.6349 0.691895 28.2806C0.691895 27.9256 0.707919 27.5718 0.740584 27.2187C0.773249 26.8649 0.822554 26.5143 0.887884 26.1656C0.953214 25.8168 1.03457 25.4724 1.13195 25.1312C1.22933 24.7906 1.34211 24.4549 1.47092 24.1249C1.59973 23.7949 1.74334 23.4718 1.90173 23.1556C2.06074 22.8393 2.23393 22.5318 2.42129 22.2318C2.60865 21.9324 2.80957 21.6424 3.02343 21.3618C3.23791 21.0812 3.46472 20.8118 3.70446 20.5531C3.94421 20.2943 4.19505 20.0474 4.45761 19.8124C4.71954 19.5781 4.99257 19.3562 5.27546 19.1474C5.55835 18.9393 5.85049 18.7443 6.15187 18.5637C6.45325 18.3831 6.76202 18.2174 7.07881 18.0662C7.39498 17.9149 7.71794 17.7793 8.04705 17.6593C8.37678 17.5387 8.71083 17.4349 9.0498 17.3462C9.38878 17.2581 9.73083 17.1862 10.0766 17.1312C10.4217 17.0756 10.7693 17.0368 11.1188 17.0143C11.4676 16.9924 11.8177 16.9868 12.1671 16.9981C12.5166 17.0093 12.8654 17.0368 13.2124 17.0818C13.5594 17.1262 13.9039 17.1874 14.2454 17.2649C14.5868 17.3424 14.9239 17.4362 15.2568 17.5456C15.5896 17.6556 15.9162 17.7812 16.2373 17.9218C16.5584 18.0631 16.8721 18.2193 17.1791 18.3906C17.4854 18.5612 17.7837 18.7468 18.0727 18.9462C18.3618 19.1462 18.6416 19.3593 18.9109 19.5856C19.1802 19.8118 19.4385 20.0506 19.6862 20.3018C19.9334 20.5524 20.1682 20.8149 20.3913 21.0887C20.6138 21.3624 20.824 21.6456 21.02 21.9393C21.2166 22.2331 21.399 22.5356 21.5672 22.8468C21.7355 23.1574 21.889 23.4762 22.0276 23.8018C22.1663 24.1274 22.2896 24.4593 22.3974 24.7968C22.5053 25.1343 22.5971 25.4768 22.6729 25.8231C22.7493 26.1693 22.8091 26.5187 22.8523 26.8706H26.3283L19.5433 7.60432C19.489 7.45119 19.4625 7.29307 19.4625 7.13057H17.3769C17.2857 7.13057 17.1951 7.12182 17.1057 7.10369C17.0163 7.08557 16.9294 7.05869 16.845 7.02307C16.7606 6.98807 16.6805 6.94432 16.6046 6.89307C16.5282 6.84182 16.4586 6.78307 16.3939 6.71744C16.3292 6.65244 16.2712 6.58119 16.2207 6.50369C16.1701 6.42682 16.127 6.34557 16.0925 6.25994C16.0574 6.17494 16.0309 6.08682 16.013 5.99557C15.9951 5.90494 15.9865 5.81307 15.9865 5.72057C15.9865 5.62807 15.9951 5.53619 16.013 5.44557C16.0309 5.35494 16.0574 5.26682 16.0925 5.18119C16.127 5.09557 16.1701 5.01432 16.2207 4.93744C16.2712 4.86057 16.3292 4.78932 16.3939 4.72369C16.4586 4.65807 16.5282 4.59994 16.6046 4.54807C16.6805 4.49682 16.7606 4.45369 16.845 4.41807C16.9294 4.38244 17.0163 4.35557 17.1057 4.33744C17.1951 4.31994 17.2857 4.31057 17.3769 4.31057H23.6338C23.725 4.31057 23.8156 4.31994 23.9049 4.33744C23.9943 4.35557 24.0812 4.38244 24.1657 4.41807C24.2501 4.45369 24.3302 4.49682 24.406 4.54807C24.4824 4.59994 24.5521 4.65807 24.6168 4.72369C24.6815 4.78932 24.7388 4.86057 24.79 4.93744C24.8405 5.01432 24.8837 5.09557 24.9182 5.18119C24.9533 5.26682 24.9798 5.35494 24.9977 5.44557C25.0156 5.53619 25.0242 5.62807 25.0242 5.72057C25.0242 5.81307 25.0156 5.90494 24.9977 5.99557C24.9798 6.08682 24.9533 6.17494 24.9182 6.25994C24.8837 6.34557 24.8405 6.42682 24.79 6.50369C24.7388 6.58119 24.6815 6.65244 24.6168 6.71744C24.5521 6.78307 24.4824 6.84182 24.406 6.89307C24.3302 6.94432 24.2501 6.98807 24.1657 7.02307C24.0812 7.05869 23.9943 7.08557 23.9049 7.10369C23.8156 7.12182 23.725 7.13057 23.6338 7.13057H22.3296L24.8904 14.4018L36.1907 8.37119L34.8489 4.81432C34.8144 4.72369 34.7898 4.63057 34.775 4.53432C34.7596 4.43869 34.754 4.34244 34.7589 4.24557C34.7633 4.14869 34.7774 4.05307 34.8009 3.95932C34.8249 3.86557 34.8576 3.77494 34.9001 3.68807C34.942 3.60119 34.9925 3.51932 35.0517 3.44307C35.1102 3.36619 35.1762 3.29682 35.2495 3.23432C35.3223 3.17182 35.4012 3.11744 35.485 3.07119C35.5688 3.02494 35.6569 2.98744 35.7488 2.95994L42.6737 0.853036C43.4219 0.625398 44.2123 1.05089 44.4343 1.80079ZM25.8346 17.0849L28.5766 24.8687L34.4582 12.4831L25.8346 17.0849ZM43.8866 28.7843L40.9486 20.9912C40.8001 21.0799 40.6547 21.1731 40.5117 21.2712C40.3693 21.3693 40.2294 21.4712 40.0932 21.5781C39.9564 21.6849 39.8232 21.7956 39.6938 21.9112C39.5638 22.0262 39.438 22.1449 39.3154 22.2681C39.1934 22.3912 39.0744 22.5181 38.9598 22.6487C38.8451 22.7787 38.7348 22.9131 38.6282 23.0506C38.5216 23.1874 38.4193 23.3287 38.3213 23.4724C38.2239 23.6162 38.1302 23.7631 38.0415 23.9124C37.9521 24.0624 37.8683 24.2149 37.7888 24.3699C37.7087 24.5249 37.6341 24.6824 37.5638 24.8418C37.4942 25.0018 37.4288 25.1631 37.3691 25.3274C37.3087 25.4912 37.2538 25.6568 37.2039 25.8237C37.154 25.9912 37.109 26.1599 37.0695 26.3299C37.0295 26.4999 36.995 26.6712 36.966 26.8431C36.937 27.0156 36.913 27.1887 36.8945 27.3624C36.8754 27.5362 36.8624 27.7106 36.8544 27.8849C36.8464 28.0593 36.8433 28.2343 36.8464 28.4087C36.8489 28.5837 36.8569 28.7581 36.8705 28.9324C36.8834 29.1068 36.9025 29.2806 36.9265 29.4537C36.95 29.6268 36.9795 29.7987 37.0141 29.9699C37.0486 30.1412 37.088 30.3112 37.133 30.4799C37.178 30.6487 37.2279 30.8162 37.2828 30.9818C37.3382 31.1474 37.398 31.3112 37.4634 31.4731C37.5281 31.6349 37.5983 31.7943 37.6729 31.9518C37.7481 32.1093 37.8276 32.2643 37.912 32.4168C37.9965 32.5687 38.0852 32.7187 38.1789 32.8656C38.272 33.0124 38.37 33.1562 38.4723 33.2968C38.5746 33.4374 38.6812 33.5749 38.7915 33.7087C38.9025 33.8431 39.0171 33.9731 39.1354 34.0999C39.2544 34.2268 39.3764 34.3499 39.5028 34.4687C39.6291 34.5881 39.7585 34.7031 39.8917 34.8143C40.0248 34.9249 40.1616 35.0318 40.3009 35.1343C40.4408 35.2362 40.5832 35.3343 40.7292 35.4274C40.8747 35.5212 41.0232 35.6099 41.1742 35.6937C41.3252 35.7781 41.4787 35.8574 41.6346 35.9318C41.7905 36.0062 41.9489 36.0756 42.1092 36.1399C42.2694 36.2049 42.4315 36.2643 42.5948 36.3187C42.7588 36.3724 42.9239 36.4218 43.091 36.4656C43.258 36.5099 43.4256 36.5481 43.5951 36.5818C43.764 36.6149 43.9341 36.6431 44.1054 36.6656C44.2761 36.6887 44.4475 36.7056 44.6194 36.7174C44.7914 36.7293 44.9633 36.7362 45.1359 36.7374C45.3085 36.7381 45.4804 36.7337 45.6524 36.7243C45.825 36.7143 45.9963 36.6993 46.1676 36.6787C46.339 36.6581 46.5091 36.6324 46.6786 36.6012C46.8481 36.5699 47.0169 36.5337 47.1839 36.4918C47.3516 36.4499 47.5174 36.4024 47.6819 36.3506C47.8465 36.2981 48.0092 36.2406 48.1701 36.1781C48.3309 36.1156 48.4899 36.0487 48.6465 35.9762C48.8036 35.9037 48.9577 35.8262 49.1099 35.7437C49.2622 35.6618 49.4119 35.5749 49.5586 35.4831C49.7053 35.3918 49.8489 35.2956 49.9901 35.1949C50.1312 35.0943 50.2686 34.9893 50.4036 34.8799C50.538 34.7712 50.6686 34.6574 50.7968 34.5399C50.9244 34.4224 51.0483 34.3012 51.1684 34.1756C51.2886 34.0506 51.4045 33.9218 51.5167 33.7887C51.6288 33.6562 51.7373 33.5206 51.8415 33.3812C51.945 33.2418 52.0449 33.0993 52.1404 32.9531C52.2353 32.8074 52.3259 32.6593 52.4122 32.5081C52.4985 32.3562 52.5798 32.2024 52.6569 32.0462C52.7333 31.8893 52.8054 31.7306 52.8726 31.5699C52.9398 31.4087 53.002 31.2456 53.0587 31.0812C53.116 30.9162 53.1678 30.7493 53.2146 30.5812C53.2621 30.4131 53.3034 30.2437 53.3404 30.0731C53.3767 29.9018 53.4082 29.7299 53.434 29.5574C53.4605 29.3849 53.4809 29.2112 53.4963 29.0374C53.5123 28.8631 53.5222 28.6887 53.5271 28.5137C53.532 28.3393 53.5314 28.1643 53.5253 27.9899C53.5197 27.8149 53.5086 27.6406 53.492 27.4668C53.4753 27.2931 53.4538 27.1193 53.4266 26.9468C53.3995 26.7743 53.3669 26.6031 53.3293 26.4324C53.2917 26.2618 53.2491 26.0924 53.2011 25.9243C53.153 25.7568 53.1 25.5906 53.0421 25.4256C52.9841 25.2612 52.9206 25.0987 52.8529 24.9381C52.7851 24.7774 52.7117 24.6193 52.6341 24.4631C52.5564 24.3074 52.4744 24.1537 52.3869 24.0031C52.3 23.8518 52.2082 23.7043 52.112 23.5593C52.0159 23.4137 51.9154 23.2718 51.8107 23.1331C51.7059 22.9943 51.5974 22.8593 51.484 22.7274C51.3712 22.5956 51.2541 22.4668 51.1333 22.3424C51.0119 22.2181 50.8874 22.0974 50.7592 21.9806C50.631 21.8637 50.4991 21.7512 50.3642 21.6431C50.2292 21.5343 50.0905 21.4306 49.9494 21.3306C49.8076 21.2306 49.6634 21.1356 49.5155 21.0449C49.3682 20.9543 49.2184 20.8681 49.0656 20.7868C48.9133 20.7056 48.758 20.6293 48.6009 20.5581C48.4437 20.4862 48.2847 20.4199 48.1232 20.3581C47.9617 20.2968 47.7984 20.2406 47.6339 20.1893C47.4693 20.1381 47.3029 20.0918 47.1353 20.0512C46.9676 20.0106 46.7994 19.9749 46.6293 19.9443C46.4598 19.9143 46.2891 19.8893 46.1177 19.8699C45.9464 19.8506 45.775 19.8362 45.6025 19.8281C45.4305 19.8193 45.2579 19.8156 45.086 19.8181C44.9134 19.8199 44.7415 19.8274 44.5695 19.8406C44.3976 19.8537 44.2262 19.8718 44.0555 19.8956C43.8848 19.9193 43.7147 19.9487 43.5458 19.9831L46.4838 27.7774C46.5152 27.8637 46.5374 27.9518 46.5516 28.0424C46.5658 28.1331 46.5713 28.2243 46.5676 28.3162C46.5645 28.4074 46.5522 28.4981 46.5313 28.5874C46.5103 28.6768 46.4813 28.7631 46.4437 28.8468C46.4062 28.9299 46.3612 29.0093 46.3082 29.0837C46.2558 29.1581 46.1966 29.2268 46.1307 29.2899C46.0647 29.3524 45.9932 29.4087 45.9168 29.4574C45.8398 29.5056 45.759 29.5468 45.6746 29.5793C45.5901 29.6118 45.5032 29.6362 45.4145 29.6518C45.3251 29.6674 45.2351 29.6743 45.1445 29.6718C45.0546 29.6699 44.9652 29.6587 44.8764 29.6387C44.7883 29.6187 44.7026 29.5906 44.6201 29.5537C44.5369 29.5168 44.4586 29.4718 44.384 29.4199C44.3101 29.3674 44.241 29.3081 44.1782 29.2418C44.1153 29.1762 44.0598 29.1043 44.0105 29.0274C43.9612 28.9506 43.9199 28.8693 43.8866 28.7843ZM20.0425 26.8706H11.8152C11.724 26.8706 11.6334 26.8799 11.544 26.8974C11.4547 26.9156 11.3678 26.9424 11.2833 26.9781C11.1989 27.0137 11.1188 27.0568 11.043 27.1081C10.9666 27.1599 10.8969 27.2181 10.8322 27.2837C10.7675 27.3493 10.7095 27.4206 10.659 27.4974C10.6085 27.5743 10.5653 27.6556 10.5308 27.7412C10.4957 27.8268 10.4692 27.9149 10.4513 28.0056C10.4334 28.0962 10.4248 28.1881 10.4248 28.2806C10.4248 28.3731 10.4334 28.4649 10.4513 28.5556C10.4692 28.6468 10.4957 28.7349 10.5308 28.8199C10.5653 28.9056 10.6085 28.9868 10.659 29.0637C10.7095 29.1412 10.7675 29.2124 10.8322 29.2774C10.8969 29.3431 10.9666 29.4018 11.043 29.4531C11.1188 29.5043 11.1989 29.5481 11.2833 29.5831C11.3678 29.6187 11.4547 29.6456 11.544 29.6637C11.6334 29.6818 11.724 29.6906 11.8152 29.6906H20.0425C19.9987 29.9487 19.9432 30.2043 19.8761 30.4568C19.8089 30.7099 19.73 30.9587 19.64 31.2043C19.55 31.4499 19.449 31.6906 19.3374 31.9262C19.2252 32.1624 19.1026 32.3924 18.9695 32.6168C18.8363 32.8412 18.6934 33.0587 18.5405 33.2699C18.3877 33.4806 18.2249 33.6837 18.0536 33.8799C17.8817 34.0756 17.7017 34.2624 17.5131 34.4412C17.3245 34.6199 17.1279 34.7893 16.9233 34.9493C16.7193 35.1093 16.5079 35.2599 16.2903 35.3999C16.0721 35.5406 15.8484 35.6706 15.6185 35.7893C15.3886 35.9087 15.1538 36.0168 14.9141 36.1143C14.6743 36.2112 14.4303 36.2968 14.1825 36.3712C13.9354 36.4456 13.6845 36.5074 13.4312 36.5581C13.1779 36.6087 12.9228 36.6474 12.6657 36.6743C12.4094 36.7006 12.1517 36.7156 11.8935 36.7174C11.6353 36.7199 11.3776 36.7099 11.12 36.6881C10.863 36.6662 10.6072 36.6324 10.3527 36.5868C10.0988 36.5406 9.84732 36.4831 9.59833 36.4131C9.34933 36.3437 9.10404 36.2624 8.86244 36.1693C8.62146 36.0768 8.38479 35.9731 8.15244 35.8581C7.9207 35.7431 7.69452 35.6174 7.47387 35.4812C7.25323 35.3449 7.03937 35.1981 6.83228 35.0418C6.62582 34.8856 6.42613 34.7199 6.23384 34.5443C6.04216 34.3693 5.8585 34.1856 5.68347 33.9931C5.50843 33.8006 5.34264 33.5999 5.1861 33.3924C5.02955 33.1843 4.88225 32.9693 4.74543 32.7474C4.60799 32.5256 4.48164 32.2974 4.36516 32.0637C4.24929 31.8299 4.1439 31.5912 4.0496 31.3474C3.95531 31.1037 3.8721 30.8556 3.80061 30.6043C3.72912 30.3524 3.66872 30.0981 3.62064 29.8412C3.57195 29.5837 3.53559 29.3249 3.51094 29.0643C3.48629 28.8037 3.47334 28.5424 3.47273 28.2806C3.47273 28.0181 3.48444 27.7562 3.50786 27.4949C3.53189 27.2337 3.56764 26.9737 3.6151 26.7162C3.66255 26.4581 3.72234 26.2031 3.79321 25.9506C3.86409 25.6981 3.94668 25.4499 4.04036 25.2049C4.13465 24.9606 4.23943 24.7206 4.3553 24.4862C4.47116 24.2512 4.59751 24.0231 4.73433 23.7999C4.87116 23.5774 5.01784 23.3612 5.17439 23.1524C5.33093 22.9437 5.49672 22.7424 5.67176 22.5493C5.84679 22.3562 6.03045 22.1712 6.22274 21.9956C6.41442 21.8193 6.61411 21.6531 6.82181 21.4956C7.02889 21.3387 7.24275 21.1918 7.46401 21.0549C7.68465 20.9181 7.91146 20.7918 8.14381 20.6762C8.37616 20.5606 8.61345 20.4562 8.85504 20.3631C9.09726 20.2699 9.34255 20.1887 9.59216 20.1187C9.84177 20.0487 10.0938 19.9906 10.3484 19.9449C10.6035 19.8987 10.8599 19.8643 11.1176 19.8424C11.3758 19.8206 11.634 19.8106 11.8929 19.8131C12.1517 19.8156 12.4094 19.8306 12.667 19.8574C12.9246 19.8837 13.1804 19.9231 13.4343 19.9737C13.6876 20.0249 13.9391 20.0874 14.1868 20.1618C14.4352 20.2368 14.6793 20.3231 14.9196 20.4206C15.16 20.5181 15.3948 20.6268 15.6253 20.7468C15.8552 20.8668 16.0795 20.9968 16.2977 21.1381C16.5165 21.2793 16.7273 21.4299 16.9319 21.5912C17.1365 21.7518 17.3331 21.9224 17.5217 22.1018C17.7103 22.2812 17.8909 22.4693 18.0622 22.6656C18.2336 22.8624 18.3957 23.0668 18.5485 23.2781C18.7014 23.4899 18.8443 23.7087 18.9769 23.9343C19.11 24.1593 19.232 24.3906 19.3436 24.6274C19.4551 24.8643 19.5556 25.1056 19.6449 25.3518C19.7343 25.5981 19.812 25.8481 19.8785 26.1018C19.9445 26.3556 19.9993 26.6118 20.0425 26.8706Z", fill: "white" })), Yl = (n) => /* @__PURE__ */ Y("svg", { preserveAspectRatio: "none", width: 123, height: 82, viewBox: "0 0 123 82", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M120.365 37.1527C122.774 39.152 122.774 42.848 120.365 44.8473L76.9935 80.8473C76.0961 81.5923 74.9664 82 73.8001 82L0 82L0 0L73.8001 0C74.9664 0 76.0961 0.407744 76.9935 1.15267L120.365 37.1527Z", fill: "currentColor" })), Gy = (n, e) => {
  const [t, i] = Q(n);
  return le(() => {
    const a = setTimeout(() => {
      i(n);
    }, e);
    return () => {
      clearTimeout(a);
    };
  }, [n, e]), t;
}, _l = (n) => /* @__PURE__ */ Y("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("circle", { cx: 16, cy: 16, r: 16, fill: "#030712" }), /* @__PURE__ */ Y("path", { d: "M15.6047 20.0343C15.1 20.0343 14.6794 19.6137 14.6794 19.109V18.7389C14.6121 16.7203 15.9748 15.8455 16.9673 15.2062C18.0439 14.5165 18.6495 14.0623 18.6495 12.8343C18.6495 11.2698 17.5056 10.2604 15.7393 10.2604C15.3187 10.2773 13.3505 10.496 13.3505 12.8175C13.3505 13.3221 12.9299 13.7427 12.4252 13.7427C11.9206 13.7427 11.5 13.3221 11.5 12.8175C11.5 9.4025 14.2589 8.44362 15.7056 8.40997H15.7224C18.5318 8.40997 20.5 10.2268 20.5 12.8343C20.5 15.1389 19.0364 16.081 17.9766 16.7707C16.9841 17.41 16.5131 17.7632 16.5467 18.6885C16.5467 18.7053 16.5467 18.7053 16.5467 18.7221V19.109C16.5299 19.6305 16.1093 20.0343 15.6047 20.0343Z", fill: "white" }), /* @__PURE__ */ Y("path", { d: "M15.6887 23.5838C16.274 23.5838 16.7485 23.1093 16.7485 22.524C16.7485 21.9387 16.274 21.4642 15.6887 21.4642C15.1034 21.4642 14.6289 21.9387 14.6289 22.524C14.6289 23.1093 15.1034 23.5838 15.6887 23.5838Z", fill: "white" })), ss = (n) => /* @__PURE__ */ Y("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("circle", { cx: 16, cy: 16, r: 16, fill: "#10B981" }), /* @__PURE__ */ Y("path", { d: "M10.5261 17.6842L14.4467 21.1056L21.5366 11.2421", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Lh = (n) => /* @__PURE__ */ Y("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("circle", { cx: 16, cy: 16, r: 16, fill: "#EF4444" }), /* @__PURE__ */ Y("path", { d: "M10.913 21.0829L15.9959 16M15.9959 16L21.0789 10.9171M15.9959 16L21.0789 21.0829M15.9959 16L10.913 10.9171", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), us = (n) => /* @__PURE__ */ Y("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("circle", { cx: 16, cy: 16, r: 15.5, fill: "#F59E0B", stroke: "#F59E0B" }), /* @__PURE__ */ Y("path", { d: "M18 23.9603C18 25.0648 17.1041 25.96 15.9997 25.96C14.8951 25.96 14 25.0648 14 23.9603C14 22.8548 14.8951 21.96 15.9997 21.96C17.1041 21.9602 18 22.8551 18 23.9603Z", fill: "white" }), /* @__PURE__ */ Y("path", { d: "M18.222 8.13512C18.1818 7.67877 18.0044 7.24904 17.7339 6.89648C17.3204 6.35776 16.6887 5.99896 15.9949 6C15.3216 5.99917 14.7072 6.33675 14.2935 6.84864C14.0016 7.20973 13.8096 7.65776 13.7676 8.13512C13.7565 8.26117 13.7578 8.39783 13.7676 8.52034L14.6898 18.9815C14.7177 19.2972 14.8575 19.5762 15.0669 19.7837C15.3063 20.0211 15.6364 20.1652 15.9949 20.1648C16.3175 20.1652 16.6171 20.0483 16.8481 19.8522C17.0987 19.6396 17.2688 19.333 17.2998 18.9813L18.222 8.52013C18.232 8.39762 18.2331 8.26117 18.222 8.13512Z", fill: "white" })), la = {
  unavailable: {
    icon: _l,
    heading: "Compatibility Information Not Available",
    heading_code: "checksku_message_nocompatibilityinfo"
  },
  check: {
    icon: _l,
    heading: "Check Compatibility",
    heading_code: "productcheck_nobikeselected_label",
    details: "Add your ride to check if this part fits",
    details_code: "productcheck_nobikeselected_message"
  },
  compatible: {
    icon: ss,
    heading: "Compatible",
    heading_code: "compatible"
  },
  incompatible: {
    icon: Lh,
    heading: "Not Compatible",
    heading_code: "not_compatible"
  },
  warning: {
    icon: us,
    heading: "Compatible - Check Notes",
    heading_code: "compatible_check_notes"
  }
};
function Yy({
  type: n,
  onSelect: e,
  categoryId: t,
  removePart: i,
  notes: a,
  clearNotes: s
}) {
  var ve;
  const c = window.BikeMatrix.getConfig(), d = new Xt(c.apiUrl, c.apiKey, c.apiToken, c.isShopify), [p, h] = Q(!1), m = Oe(null), b = Oe(null), v = Oe(null), C = Oe(null), [k, x] = Q(""), [S, A] = Q(null), [F, E] = Q([]), [L, z] = Q(!1), P = Gy(k, 500), {
    t: I
  } = We(), N = async () => {
    z(!0);
    const re = await d.findProducts(k, t);
    re.success ? (z(!1), E(re.data)) : (console.log(re.error), z(!1));
  };
  le(() => {
    (P && !S && k.length > 2 || P && S && (S == null ? void 0 : S.display_Name) !== k) && N();
  }, [P]), le(() => {
    F.length > 0 && k.length > 2 && J();
  }, [F]);
  const K = (re) => {
    A(re), x(re.display_Name), e(re);
  };
  le(() => {
    S && k === S.display_Name && X();
  }, [k, S]);
  const J = () => {
    it.to(m.current, {
      height: "auto"
    });
  }, X = () => {
    it.to(m.current, {
      height: 0
    });
  }, ne = () => {
    p && be(), x(""), E([]), X(), s();
  };
  le(() => {
    p || (A(null), i());
  }, [p]);
  const ce = () => {
    it.to(b.current, {
      transform: "translateY(112px)",
      duration: 1,
      onComplete: () => h(!0)
    });
  }, be = () => {
    it.to(b.current, {
      transform: "translateY(0px)",
      duration: 1,
      onComplete: () => h(!1)
    });
  };
  return le(() => {
    n ? ce() : !n && p && be();
  }, [n]), le(() => {
    a.warning || a.compatible ? it.to(C.current, {
      opacity: 1
    }) : it.to(C.current, {
      opacity: 0
    });
  }, [a]), g("div", {
    className: "search-wrapper",
    children: [g("style", {
      type: "text/css",
      children: Ky
    }), g("div", {
      className: ke("compatibility-wrapper"),
      ref: v,
      style: {
        height: n === "warning" ? "140px" : "110px"
      },
      children: g("div", {
        className: ke("compatibility ", {
          compatible: "bg-emerald-50",
          incompatible: "bg-red-50",
          warning: "bg-amber-50",
          "no-information": "bg-white"
        }[n]),
        style: {
          borderColor: n === "compatible" ? "rgb(16 185 129)" : n == "incompatible" ? "rgb(239 68 68)" : n === "warning" ? "rgb(245 158 11)" : n === "no-information" ? "#000" : "transparent"
        },
        ref: b,
        children: [g("div", {
          className: ke("compatibility-contents"),
          children: [g(Yl, {
            class: ke("self-start h-full w-[93px] polygon", {
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-500",
              "no-information": "text-black"
            }[n])
          }), g(Gl, {
            class: "h-[26px] w-[37.5px] absolute bikon"
          }), g("p", {
            className: ke("font-semibold text-lg ml-[105px]", {
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-950",
              "no-information": "text-black"
            }[n]),
            children: I((ve = la[n]) == null ? void 0 : ve.heading)
          })]
        }), g("div", {
          className: ke("compatibility-background ", {
            compatible: "bg-emerald-500",
            incompatible: "bg-red-500",
            warning: "bg-amber-500",
            "no-information": "bg-black"
          }[n])
        })]
      })
    }), g("div", {
      className: ke("search_bar-wrapper text-lg", {
        compatible: "bg-emerald-50 border-emerald-500",
        incompatible: "bg-red-50 border-red-500",
        warning: "bg-amber-50 border-amber-500",
        "no-information": "bg-white border-black-500"
      }[n]),
      style: {
        borderColor: n === "compatible" ? "rgb(16 185 129)" : n == "incompatible" ? "rgb(239 68 68)" : n === "warning" ? "rgb(245 158 11)" : "rgb(0 0 0)"
      },
      children: [g("div", {
        className: "input_icon-wrapper",
        children: [!L && g("div", {
          className: "svg-wrapper",
          children: g(Wy, {})
        }), g(Ra, {
          isLoading: L,
          colour: "#000"
        }), g("input", {
          type: "text",
          placeholder: "Enter Brand, Model, Barcode or part number...",
          value: k,
          onChange: (re) => x(re.currentTarget.value)
        })]
      }), g("div", {
        className: "svg-wrapper",
        onClick: ne,
        children: g(Af, {})
      })]
    }), g("div", {
      className: "results-wrapper",
      ref: m,
      children: g("div", {
        className: "results text-lg",
        children: F && F.length > 0 ? F.map((re) => g("div", {
          className: "result",
          onClick: () => {
            K(re);
          },
          children: re.display_Name
        }, re.product_ID)) : g("div", {
          className: "result",
          children: I("error_find_products_no_results")
        })
      })
    }), g("div", {
      className: "notes-wrapper",
      ref: C,
      children: [!!a.compatible && g("p", {
        class: "text-sm flex",
        children: [g(ss, {
          class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
        }), " ", a.compatible]
      }), !!a.warning && g("p", {
        class: "text-sm flex",
        children: [g(us, {
          class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
        }), " ", a.warning]
      })]
    })]
  });
}
function Jy() {
  const {
    t: n
  } = We(), t = window.BikeMatrix.getConfig(), i = is.value, a = mt.value, s = new Xt(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), {
    currentBike: u,
    setCurrentBike: c
  } = Pt(), [d, p] = Q(!1), [h, m] = Q(null), [b, v] = Q(null), [C, k] = Q(null), [x, S] = Q({
    compatible: "",
    warning: ""
  });
  u.isShared && Fe("/");
  const A = async () => {
    p(!0), Kl(), a[i.category.split(" ").join("_")][i.type.split(" ").join("_")] = {
      ...a[i.category.split(" ").join("_")][i.type.split(" ").join("_")],
      id: b.product_ID,
      name: b.display_Name,
      unsaved_changes: !0
    }, mt.value = a;
    const E = await s.addComponent(u.key, b.product_Category_ID, b.product_ID, Wl[i.type.split(" ").join("_")]);
    E.success ? (c({
      ...u
    }), Fe("/bom")) : (k(E.error), p(!1));
  }, F = async (E) => {
    var L;
    if (S({
      compatible: "",
      warning: ""
    }), !E.skU_EAN && !E.skU_UPC && !E.manufacturer_Part_Number)
      m("no-information");
    else {
      v(E);
      const z = ((L = va()) == null ? void 0 : L.language) || "en-GB", P = await s.checkSkuCompatibility(u.key, E.skU_EAN || E.skU_UPC || E.manufacturer_Part_Number, z);
      P.compatible && P.warning ? (m("warning"), S({
        warning: P.warningMessage,
        compatible: P.compatibilityMessage
      })) : P.compatible ? m("compatible") : P.compatible || m("incompatible");
    }
  };
  return i ? g(ie, {
    children: [g("div", {
      children: [u ? g(br, {
        bike: u,
        selected: !0,
        settings: !0
      }) : g(Ln, {}), g("div", {
        className: "part-wrapper mt-8 mb-8",
        children: [g(_r, {
          text: i != null && i.type ? "Current " + i.type + ":" : i.type,
          bold: !0,
          capitalize: !0
        }), g(_r, {
          subheader: !0,
          text: i == null ? void 0 : i.part.name
        })]
      })]
    }), g(Yy, {
      notes: x,
      onSelect: (E) => F(E),
      type: h,
      categoryId: i.part.product_category_id,
      clearNotes: () => S({
        compatible: "",
        warning: ""
      }),
      removePart: () => {
        m(null), v(null);
      }
    }), g("div", {
      className: "text-red-500 text-xs flex justify-center items-center",
      children: C
    }), g(gi, {
      text: n("confirm"),
      onClick: A,
      primary: !0,
      disabled: h === "incompatible" || h === "no-information",
      loading: d
    }), g(bi, {})]
  }) : g(ie, {});
}
const Zy = `.edit-field__wrapper{position:relative}.edit-container{display:flex;align-items:center;gap:1rem;margin-top:8px}.edit-input_wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:flex;align-items:center;height:54px;transition:ease-in-out all .5s}.edit-input_content{display:flex;gap:.5rem;cursor:pointer}.input-wrapper{width:100%}.edit-input{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.svg{width:20px;height:20px;cursor:pointer}.icon-wrapper{display:flex;align-items:center;gap:.25rem}.edit-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.edit-button:hover{background-color:#000}.edit-button:hover svg{color:#fff}.edit-button:hover .label-wrapper{opacity:1;top:-32px}.edit-button:hover .tick{stroke:#fff}.edit-button svg{width:16px;height:16px}.tick{stroke:#000}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}.edit-open-wrapper{display:flex;gap:1rem}.notice{position:absolute;right:0;bottom:-20px}
`, Xy = (n) => /* @__PURE__ */ Y("svg", { width: 13, height: 13, viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M1.19739 8.1317L4.99549 11.4461L11.8639 1.8909", stroke: "currentColour", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Qy = (n) => /* @__PURE__ */ Y("svg", { width: 16, height: 16, viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M1.71186 11C1.14322 11 0.714757 10.8578 0.426485 10.5733C0.142162 10.2889 0 9.86613 0 9.30512V2.85152C0 2.28656 0.142162 1.86382 0.426485 1.58332C0.714757 1.29886 1.14322 1.15663 1.71186 1.15663H8.12098L7.30355 1.97444H1.72371C1.43149 1.97444 1.2064 2.05148 1.04844 2.20557C0.894433 2.35965 0.817429 2.58879 0.817429 2.893V9.25771C0.817429 9.56192 0.894433 9.79106 1.04844 9.94514C1.2064 10.0992 1.43149 10.1763 1.72371 10.1763H8.2513C8.47639 10.1763 8.66001 10.0992 8.80217 9.94514C8.94828 9.79106 9.02134 9.56192 9.02134 9.25771V3.72859L9.83877 2.90485V9.30512C9.83877 9.86613 9.70055 10.2889 9.42413 10.5733C9.15165 10.8578 8.76663 11 8.26907 11H1.71186ZM3.80875 7.3317C3.76136 7.35541 3.71792 7.34553 3.67843 7.30207C3.63894 7.25861 3.63104 7.21318 3.65474 7.16577L4.13453 6.16425L9.35305 0.943291L10.0757 1.65443L4.85126 6.87539L3.80875 7.3317ZM10.4785 1.25738L9.76176 0.534386L10.1527 0.143259C10.2396 0.0563415 10.3403 0.0089322 10.4548 0.00103064C10.5693 -0.00687092 10.668 0.0306615 10.751 0.113628L10.8694 0.232151C10.9603 0.323019 11.0037 0.425739 10.9998 0.540312C10.9998 0.654885 10.9543 0.761556 10.8635 0.860325L10.4785 1.25738Z", fill: "currentColor" })), x2 = ({
  value: n,
  onSave: e,
  loading: t,
  label: i,
  success: a,
  error: s
}) => {
  const {
    t: u
  } = We(), [c, d] = Q(!1), [p, h] = Q(n), m = Oe(null), b = Oe(null), [v, C] = Q({
    type: "",
    message: ""
  }), [k, x] = Q(!1), S = () => {
    const F = it.timeline();
    F.to(b.current, {
      opacity: 0
    }), F.to(b.current, {
      width: "124px"
    }), F.to(b.current, {
      onStart: () => d(!0),
      opacity: 1
    });
  }, A = () => {
    const F = it.timeline();
    F.to(b.current, {
      opacity: 0
    }), F.to(b.current, {
      width: "54px"
    }), F.to(b.current, {
      onStart: () => {
        d(!1);
      },
      opacity: 1
    });
  };
  return le(() => {
    c && m.current.focus();
  }, [c]), le(() => {
    a ? (A(), C({
      type: "success",
      message: `Your ${i} has been saved`
    })) : !a && a !== null && (A(), C({
      type: "error",
      message: s
    }));
  }, [a]), g("div", {
    className: "edit-field__wrapper",
    children: [g("style", {
      type: "text/css",
      children: Zy
    }), i && g("label", {
      class: "text-gray-800 font-bold text",
      children: i
    }), g("div", {
      className: "edit-container",
      children: [g("div", {
        className: "edit-input_wrapper",
        style: c && {
          border: "1px solid #000"
        },
        children: [c && g("div", {
          className: "input-wrapper",
          children: g("input", {
            maxLength: 80,
            type: "text",
            className: "edit-input",
            placeholder: p,
            onChange: (F) => h(F.currentTarget.value),
            value: p,
            ref: m,
            onKeyDown: (F) => {
              F.key === "Enter" && e(p);
            }
          })
        }), !c && g("div", {
          className: "edit-input_content",
          children: g(_r, {
            text: n
          })
        })]
      }), g("div", {
        className: "edit-save-cancel-wrapper",
        ref: b,
        children: [!c && g("div", {
          className: "edit-button",
          onClick: S,
          children: [g("div", {
            className: "label-wrapper",
            children: g("div", {
              className: "button-label",
              children: u("edit")
            })
          }), g(Qy, {})]
        }), c && g("div", {
          className: "edit-open-wrapper",
          onMouseOver: () => x(!0),
          onMouseLeave: () => x(!1),
          children: [g("div", {
            className: "edit-button",
            onClick: () => {
              t || e(p);
            },
            children: [g("div", {
              className: "label-wrapper",
              children: g("div", {
                className: "button-label",
                children: u("save")
              })
            }), t ? g(Ra, {
              isLoading: t,
              colour: k ? "#fff" : "#000"
            }) : g(Xy, {
              className: "tick"
            })]
          }), g("div", {
            className: "edit-button",
            onClick: () => {
              t || A();
            },
            children: [g("div", {
              className: "label-wrapper",
              children: g("div", {
                className: "button-label",
                children: "save"
              })
            }), g(ya, {})]
          })]
        })]
      })]
    }), v.message && g("p", {
      class: "text-xs notice flex",
      style: {
        color: v.type === "success" ? "#10B981" : "#EF4444"
      },
      children: v.message
    })]
  });
}, ek = `.copy-share_wrapper{display:flex;align-items:center;gap:1rem;margin-top:8px}.value-wrapper{padding:12px;border-radius:12px;border:1px solid #d1d5db;width:100%;display:flex;justify-content:flex-start;align-items:center;height:54px}.share-button,.copy-button{border-radius:12px;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;height:54px;width:54px;min-width:54px;cursor:pointer;transition:all ease-in-out .5s;position:relative;z-index:1;background-color:#fff}.share-button:hover,.copy-button:hover{background-color:#000}.share-button:hover svg,.copy-button:hover svg{color:#fff}.share-button:hover .label-wrapper,.copy-button:hover .label-wrapper{opacity:1;top:-32px}.share-button svg,.copy-button svg{width:16px}.label-wrapper{position:absolute;top:0;transition:ease-in-out all .5s;opacity:0;height:32px;width:54px;padding-bottom:5px}.button-label{height:27px;border-radius:8px;width:54px;display:flex;border:1px solid #d1d5db;justify-content:center;align-items:center;font-size:10px;padding:4px}
`, tk = (n) => /* @__PURE__ */ Y("svg", { width: 22, height: 27, viewBox: "0 0 22 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M5.23701 5.89236V3.30519C5.23701 2.21106 5.51143 1.38666 6.06029 0.831997C6.61677 0.277332 7.43624 0 8.51871 0H12.738C13.2717 0 13.7481 0.0759814 14.1674 0.227944C14.5942 0.379907 14.9906 0.638244 15.3565 1.00295L20.9938 6.71296C21.3825 7.10806 21.6455 7.51836 21.7827 7.94386C21.9276 8.36176 22 8.87083 22 9.47108V18.3837C22 19.4778 21.7256 20.3022 21.1767 20.8569C20.6355 21.404 19.8198 21.6775 18.7297 21.6775H16.4314V20.1047H18.6497C19.2367 20.1047 19.6788 19.9527 19.9761 19.6488C20.2734 19.3449 20.422 18.9118 20.422 18.3495V9.0152H15.1965C14.6019 9.0152 14.1559 8.87463 13.8586 8.5935C13.5613 8.30477 13.4127 7.85268 13.4127 7.23723V1.58421H8.59875C8.01178 1.58421 7.56583 1.73618 7.26091 2.0401C6.96362 2.34403 6.81497 2.77712 6.81497 3.33938V5.89236H5.23701ZM14.8534 7.02068C14.8534 7.40059 15.044 7.59054 15.4252 7.59054H19.999L14.8534 2.39341V7.02068ZM0 23.6948V8.61629C0 7.52216 0.274428 6.70156 0.823285 6.1545C1.37214 5.59983 2.1878 5.3225 3.27027 5.3225H7.13514C7.71448 5.3225 8.18711 5.38328 8.55301 5.50485C8.92654 5.62642 9.30769 5.88476 9.69647 6.27986L15.8025 12.4686C16.2065 12.8789 16.4695 13.2664 16.5915 13.6311C16.7134 13.9958 16.7744 14.5049 16.7744 15.1583V23.6948C16.7744 24.7889 16.5 25.6133 15.9511 26.168C15.4023 26.7227 14.5866 27 13.5042 27H3.27027C2.1878 27 1.37214 26.7227 0.823285 26.168C0.274428 25.6133 0 24.7889 0 23.6948ZM1.5894 23.6606C1.5894 24.2305 1.73423 24.6636 2.02391 24.9599C2.32121 25.2638 2.75953 25.4158 3.33888 25.4158H13.4127C13.9997 25.4158 14.4418 25.2638 14.7391 24.9599C15.044 24.6636 15.1965 24.2305 15.1965 23.6606V15.1811H9.01039C8.36244 15.1811 7.87457 15.0215 7.54678 14.7024C7.21899 14.3833 7.05509 13.8932 7.05509 13.2322V6.90671H3.35031C2.77096 6.90671 2.33264 7.05867 2.03534 7.3626C1.73805 7.65893 1.5894 8.08442 1.5894 8.63909V23.6606ZM9.18191 13.7108H14.8763L8.54158 7.29422V13.0612C8.54158 13.2892 8.59113 13.4563 8.69023 13.5627C8.79695 13.6615 8.96085 13.7108 9.18191 13.7108Z", fill: "currentColor" })), rk = (n) => /* @__PURE__ */ Y("svg", { width: 16, height: 21.6, viewBox: "0 0 20 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ Y("path", { d: "M3.58702 27C2.40708 27 1.51426 26.682 0.908555 26.046C0.302851 25.4184 0 24.4812 0 23.2343V11.4728C0 10.2176 0.302851 9.27615 0.908555 8.64854C1.51426 8.01255 2.40708 7.69456 3.58702 7.69456H6.89086V9.82845H3.66962C3.13471 9.82845 2.72566 9.97908 2.44248 10.2803C2.15929 10.5732 2.0177 11.0209 2.0177 11.6234V23.0837C2.0177 23.6695 2.15929 24.113 2.44248 24.4142C2.72566 24.7155 3.13471 24.8661 3.66962 24.8661H16.3422C16.8692 24.8661 17.2783 24.7155 17.5693 24.4142C17.8604 24.113 18.0059 23.6695 18.0059 23.0837V11.6234C18.0059 11.0209 17.8604 10.5732 17.5693 10.2803C17.2783 9.97908 16.8692 9.82845 16.3422 9.82845H13.1209V7.69456H16.413C17.6087 7.69456 18.5054 8.01255 19.1032 8.64854C19.7011 9.28452 20 10.2259 20 11.4728V23.2343C20 24.4812 19.7011 25.4184 19.1032 26.046C18.5054 26.682 17.6087 27 16.413 27H3.58702ZM10.0059 17.6109C9.73845 17.6109 9.51032 17.5105 9.32153 17.3096C9.13274 17.1088 9.03835 16.8745 9.03835 16.6067V4.53138L9.10914 2.76151L8.38938 3.62762L6.77286 5.46025C6.5998 5.66946 6.37955 5.77406 6.11209 5.77406C5.86037 5.77406 5.65192 5.69038 5.48673 5.52301C5.3294 5.34728 5.25074 5.13389 5.25074 4.88285C5.25074 4.6318 5.3412 4.41004 5.52212 4.21757L9.28614 0.351464C9.40413 0.225941 9.52212 0.138075 9.64012 0.0878661C9.75811 0.0292887 9.88004 0 10.0059 0C10.1318 0 10.2498 0.0292887 10.3599 0.0878661C10.4779 0.138075 10.5959 0.225941 10.7139 0.351464L14.4779 4.21757C14.6667 4.41004 14.7611 4.6318 14.7611 4.88285C14.7611 5.13389 14.6745 5.34728 14.5015 5.52301C14.3363 5.69038 14.1318 5.77406 13.8879 5.77406C13.6205 5.77406 13.4041 5.66946 13.2389 5.46025L11.6106 3.62762L10.8909 2.77406L10.9735 4.53138V16.6067C10.9735 16.8745 10.8751 17.1088 10.6785 17.3096C10.4897 17.5105 10.2655 17.6109 10.0059 17.6109Z", fill: "currentColor" })), C2 = ({
  text: n,
  onShare: e,
  label: t,
  onCopy: i
}) => {
  const {
    t: a
  } = We(), [s, u] = Q("Copy");
  return g("div", {
    children: [g("style", {
      type: "text/css",
      children: ek
    }), t && g("label", {
      class: "text-gray-800 font-bold text",
      children: t
    }), g("div", {
      className: "copy-share_wrapper",
      children: [g("div", {
        className: "value-wrapper",
        children: g(_r, {
          text: n
        })
      }), e && g("div", {
        className: "share-button",
        onClick: () => e(n),
        children: [g("div", {
          className: "label-wrapper",
          children: g("div", {
            className: "button-label",
            children: a("share")
          })
        }), g(rk, {})]
      }), g("div", {
        className: "copy-button",
        onClick: () => {
          i(n), u("Copied");
        },
        onMouseLeave: () => setTimeout(() => {
          u(a("copy"));
        }, 1e3),
        children: [g("div", {
          className: "label-wrapper",
          children: g("div", {
            className: "button-label",
            children: s
          })
        }), g(tk, {})]
      })]
    })]
  });
};
function ik() {
  const n = mt.value, t = window.BikeMatrix.getConfig(), {
    currentBike: i,
    saveBike: a
  } = Pt(), [s, u] = Q(n == null ? void 0 : n.owner_Email_Address), [c, d] = Q(!1), [p, h] = Q(null), [m, b] = Q(null), [v, C] = Q(i.name), [k, x] = Q(null), [S, A] = Q(null), [F, E] = Q(null), L = new Xt(t.apiUrl, t.apiKey, t.apiToken, t.isShopify), {
    t: z
  } = We(), P = async (N, K) => {
    if (K === "name") {
      C(N), x(!0), A(null), E(null);
      const J = await L.updateCustomBikeName(i.key, N);
      a({
        ...i,
        name: N
      }), x(!1), J.success ? A(!0) : E(J.error);
    }
    if (K === "email") {
      u(N), d(!0), h(null), b(null);
      const J = await L.saveCustomBike(i.key, N);
      d(!1), J.success === !1 ? h(!0) : (h(!1), b(J.error));
    }
  }, I = (N) => {
    navigator.share({
      title: z("virtualworkshop_settings_id"),
      text: N,
      url: window.location.href
    }).then(() => console.log("Successful share! 🎉")).catch((K) => console.error(K));
  };
  return n ? g(ie, {
    children: [g("div", {
      className: "mb-4",
      children: i ? g(br, {
        bike: i,
        selected: !0,
        simple: !0
      }) : g(Ln, {})
    }), g("div", {
      className: "flex flex-col gap-4",
      children: [g(x2, {
        value: v,
        onSave: (N) => P(N, "name"),
        loading: k,
        label: z("virtualworkshop_settings_bike_name"),
        success: S,
        error: F
      }), (n == null ? void 0 : n.owner_Email_Address) && g(x2, {
        value: s,
        onSave: (N) => P(N, "email"),
        loading: c,
        label: z("virtualworkshop_settings_email"),
        success: p,
        error: m
      }), g(C2, {
        label: z("virtualworkshop_settings_id"),
        text: i.key,
        onCopy: (N) => navigator.clipboard.writeText(N)
      }), g(C2, {
        label: z("virtualworkshop_settings_share_id"),
        text: i.shareId,
        onShare: (N) => I(N),
        onCopy: (N) => navigator.clipboard.writeText(N)
      })]
    }), g(bi, {})]
  }) : g(ie, {});
}
function nk() {
  const e = window.BikeMatrix.getConfig();
  le(() => {
    Cr.value.back = "/";
  }, []);
  const t = new Xt(e.apiUrl, e.apiKey, e.apiToken, e.isShopify), {
    currentBike: i
  } = Pt(), [a, s] = Q(null), [u, c] = Q(""), d = async () => {
    const p = await t.getBikeBom(i.key);
    if (!p.success)
      c(p.error);
    else {
      const h = ka(p.data);
      s(h), mt.value = h;
    }
  };
  return le(() => {
    d();
  }, []), g(ie, {
    children: [g("div", {
      className: "mb-4",
      children: [a ? g(br, {
        bike: a,
        readOnly: !0,
        shared: !0
      }) : g(Ln, {}), g("div", {
        class: "mt-4 mb-8",
        children: g(Fh, {
          categorisedBOM: a,
          readOnly: !0
        })
      })]
    }), u, g(bi, {})]
  });
}
const bl = Zt("/"), Fe = (n) => {
  const e = bl.peek();
  bl.value = n, Th({
    previous: e,
    path: n
  });
}, Jl = [{
  title: "bikeselector_home_title",
  component: l4,
  path: "/"
}, {
  title: "bikeselector_addbike_title",
  component: f4,
  path: "/add"
}, {
  title: "bikeselector_search_title",
  component: h4,
  path: "/search"
}, {
  title: "bikeselector_size_title",
  component: g4,
  path: "/size"
}, {
  title: "bikeselector_confirm_title",
  component: _4,
  path: "/confirm"
}, {
  title: "bikeselector_browse_title",
  component: b4,
  path: "/browse"
}, {
  title: "virtualworkshop_title",
  component: v4,
  path: "/workshop"
}, {
  title: "virtualworkshop_title",
  component: $y,
  path: "/bom"
}, {
  title: "virtualworkshop_title",
  component: jy,
  path: "/part"
}, {
  title: "virtualworkshop_title",
  component: Jy,
  path: "/update"
}, {
  title: "virtualworkshop_title",
  component: ik,
  path: "/settings"
}, {
  title: "virtualworkshop_bom_title",
  component: nk,
  path: "/read-only"
}], $u = Jl.map((n) => n.path), Th = (n) => {
  let e;
  const t = $u.indexOf(n.path), i = Jl[t], a = $u.slice(1, 5).indexOf(i.path);
  t && (e = $u[t - 1]), n.previous === "/" && n.path === "/browse" && (e = "/"), n.previous === "/" && n.path === "/workshop" && (e = "/"), n.path === "/settings" && (e = n.previous), Cr.value = {
    title: i.title,
    step: a > -1 ? a : void 0,
    back: e
  };
};
function ak() {
  const e = Gr(() => Jl.reduce((t, i) => (t[i.path] = i.component, t), {}), [])[bl.value];
  return le(() => {
    Th({
      path: "/"
    });
  }, []), g(e, {});
}
const Zl = `@import"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-2{right:-8px}.-top-2{top:-8px}.bottom-0{bottom:0}.bottom-10{bottom:40px}.bottom-14{bottom:56px}.bottom-4{bottom:16px}.bottom-6{bottom:24px}.bottom-\\[128px\\]{bottom:128px}.bottom-\\[72px\\]{bottom:72px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:16px}.right-0{right:0}.right-3{right:12px}.right-4{right:16px}.right-5{right:20px}.top-0{top:0}.top-1\\/2{top:50%}.top-4{top:16px}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-\\[2147483645\\]{z-index:2147483645}.z-\\[2147483646\\]{z-index:2147483646}.\\!my-0{margin-top:0!important;margin-bottom:0!important}.-mx-8{margin-left:-32px;margin-right:-32px}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:4px;margin-bottom:4px}.my-5{margin-top:20px;margin-bottom:20px}.my-6{margin-top:24px;margin-bottom:24px}.my-\\[2px\\]{margin-top:2px;margin-bottom:2px}.my-px{margin-top:1px;margin-bottom:1px}.\\!ml-0{margin-left:0!important}.\\!ml-auto{margin-left:auto!important}.-mb-3{margin-bottom:-12px}.-mt-2{margin-top:-8px}.-mt-5{margin-top:-20px}.mb-4{margin-bottom:16px}.mb-6{margin-bottom:24px}.mb-8{margin-bottom:32px}.ml-2{margin-left:8px}.ml-\\[105px\\]{margin-left:105px}.ml-auto{margin-left:auto}.mr-\\[6px\\]{margin-right:6px}.mt-2{margin-top:8px}.mt-4{margin-top:16px}.mt-6{margin-top:24px}.mt-8{margin-top:32px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-0{height:0px}.h-10{height:40px}.h-2{height:8px}.h-20{height:80px}.h-3{height:12px}.h-32{height:128px}.h-4{height:16px}.h-40{height:160px}.h-5{height:20px}.h-6{height:24px}.h-7{height:28px}.h-8{height:32px}.h-9{height:36px}.h-\\[10px\\]{height:10px}.h-\\[18px\\]{height:18px}.h-\\[1px\\]{height:1px}.h-\\[26px\\]{height:26px}.h-\\[6px\\]{height:6px}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-36{max-height:144px}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.w-1\\/2{width:50%}.w-10{width:40px}.w-2{width:8px}.w-3{width:12px}.w-4{width:16px}.w-5{width:20px}.w-6{width:24px}.w-7{width:28px}.w-8{width:32px}.w-9{width:36px}.w-\\[100px\\]{width:100px}.w-\\[25px\\]{width:25px}.w-\\[37\\.5px\\]{width:37.5px}.w-\\[48px\\]{width:48px}.w-\\[93px\\]{width:93px}.w-\\[calc\\(100\\%_\\+_64px\\)\\]{width:calc(100% + 64px)}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.min-w-0{min-width:0px}.max-w-\\[220px\\]{max-width:220px}.max-w-full{max-width:100%}.max-w-lg{max-width:512px}.max-w-sm{max-width:384px}.flex-none{flex:none}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[20\\%\\]{--tw-translate-x: -20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-px{--tw-translate-x: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/3{--tw-translate-y: -33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/3{--tw-translate-x: 33.333333%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-px{--tw-translate-x: 1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-125{--tw-scale-x: 1.25;--tw-scale-y: 1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-center{scroll-snap-align:center}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:4px}.gap-2{gap:8px}.gap-3{gap:12px}.gap-4{gap:16px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(8px * var(--tw-space-x-reverse));margin-left:calc(8px * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(8px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(8px * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(12px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(12px * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(16px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(16px * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(20px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(20px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-nowrap{text-wrap:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-xl{border-radius:12px}.rounded-b-lg{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.rounded-t-3xl{border-top-left-radius:24px;border-top-right-radius:24px}.rounded-t-xl{border-top-left-radius:12px;border-top-right-radius:12px}.border{border-width:1px}.border-b-0{border-bottom-width:0px}.border-amber-500{--tw-border-opacity: 1;border-color:rgb(245 158 11 / var(--tw-border-opacity))}.border-emerald-500{--tw-border-opacity: 1;border-color:rgb(16 185 129 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-gray-950{--tw-border-opacity: 1;border-color:rgb(3 7 18 / var(--tw-border-opacity))}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity))}.bg-amber-500{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-black\\/40{background-color:#0006}.bg-emerald-50{--tw-bg-opacity: 1;background-color:rgb(236 253 245 / var(--tw-bg-opacity))}.bg-emerald-500{--tw-bg-opacity: 1;background-color:rgb(16 185 129 / var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-400\\/50{background-color:#9ca3af80}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-950{--tw-bg-opacity: 1;background-color:rgb(3 7 18 / var(--tw-bg-opacity))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/75{background-color:#ffffffbf}.p-0{padding:0}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.px-4{padding-left:16px;padding-right:16px}.px-8{padding-left:32px;padding-right:32px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.\\!pr-8{padding-right:32px!important}.pl-1{padding-left:4px}.pl-3{padding-left:12px}.pr-3{padding-right:12px}.pr-5{padding-right:20px}.pr-6{padding-right:24px}.pt-1{padding-top:4px}.pt-4{padding-top:16px}.text-center{text-align:center}.text-start{text-align:start}.font-nunito{font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-base{font-size:16px;line-height:24px}.text-lg{font-size:18px;line-height:28px}.text-sm{font-size:14px;line-height:20px}.text-xl{font-size:20px;line-height:28px}.text-xs{font-size:12px;line-height:16px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-\\[18px\\]{line-height:18px}.leading-\\[22px\\]{line-height:22px}.leading-tight{line-height:1.25}.text-amber-500{--tw-text-opacity: 1;color:rgb(245 158 11 / var(--tw-text-opacity))}.text-amber-950{--tw-text-opacity: 1;color:rgb(69 26 3 / var(--tw-text-opacity))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-emerald-500{--tw-text-opacity: 1;color:rgb(16 185 129 / var(--tw-text-opacity))}.text-emerald-950{--tw-text-opacity: 1;color:rgb(2 44 34 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-950{--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-950{--tw-text-opacity: 1;color:rgb(69 10 10 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-30{opacity:.3}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_-2px_10px_0px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\,0px_0px_0px_1px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\]{--tw-shadow: 0px -2px 10px 0px rgba(0,0,0,.04),0px 0px 0px 1px rgba(0,0,0,.06);--tw-shadow-colored: 0px -2px 10px 0px var(--tw-shadow-color), 0px 0px 0px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.bike-matrix-container{width:100%}@media (min-width: 640px){.bike-matrix-container{max-width:640px}}@media (min-width: 768px){.bike-matrix-container{max-width:768px}}@media (min-width: 1024px){.bike-matrix-container{max-width:1024px}}@media (min-width: 1280px){.bike-matrix-container{max-width:1280px}}@media (min-width: 1536px){.bike-matrix-container{max-width:1536px}}:host .overlay{opacity:0;visibility:hidden}:host(.active) .overlay{opacity:1;visibility:visible}@media (min-width: 640px){:host .modal{opacity:0;transform:scale(.9);visibility:hidden}:host(.active) .modal{opacity:1;transform:scale(1);visibility:visible}}@media not all and (min-width: 640px){:host .modal{transform:translateY(100%);visibility:hidden}:host(.active) .modal{transform:translateY(0);visibility:visible}}:root,:host{all:initial!important;font-size:16px!important;width:100%}input,select,button{outline:2px solid transparent;outline-offset:2px}h1,h2,h3,h4,h5,h6,label,button{margin-top:0;margin-bottom:0;font-family:Nunito,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h1,h2,h3,h4,h5,h6{font-weight:700;--tw-text-opacity: 1;color:rgb(3 7 18 / var(--tw-text-opacity))}h1,h2,h3,h4,h5,h6,label,button,p,a,div{font-family:Nunito,sans-serif}select{appearance:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}select::-ms-expand{display:none}.loader{border-radius:100%;border-top:4px solid rgba(3,7,18,.2);border-right:4px solid rgba(3,7,18,.2);border-bottom:4px solid rgba(3,7,18,.2);border-left:4px solid rgb(3,7,18)}*::-webkit-scrollbar{height:12px;width:12px}*::-webkit-scrollbar-track{border-radius:12px;margin-block:8px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-track:active{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb{border-radius:8px;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}*::-webkit-scrollbar-thumb:hover{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}@media not all and (min-width: 640px){*::-webkit-scrollbar{display:none}.modal-content{-ms-overflow-style:none;scrollbar-width:none}}@media only screen and (max-width: 450px){.compatibility-label-container .status{padding:7px 2px}}.placeholder\\:text-gray-700::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.placeholder\\:text-gray-700::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-inset-x-px:after{content:var(--tw-content);left:-1px;right:-1px}.after\\:-top-6:after{content:var(--tw-content);top:-24px}.after\\:bottom-0:after{content:var(--tw-content);bottom:0}.after\\:bg-gradient-to-t:after{content:var(--tw-content);background-image:linear-gradient(to top,var(--tw-gradient-stops))}.after\\:from-white:after{content:var(--tw-content);--tw-gradient-from: #fff var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:to-transparent:after{content:var(--tw-content);--tw-gradient-to: transparent var(--tw-gradient-to-position)}.disabled\\:border-gray-200:disabled{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.disabled\\:bg-gray-100:disabled{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.disabled\\:text-gray-400:disabled{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.group:disabled .group-disabled\\:border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.group:disabled .group-disabled\\:bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.group:disabled .group-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.peer:disabled~.peer-disabled\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media not all and (min-width: 640px){.max-sm\\:absolute{position:absolute}.max-sm\\:inset-0{top:0;right:0;bottom:0;left:0}.max-sm\\:h-\\[89vh\\]{height:89vh}.max-sm\\:max-h-\\[96\\%\\]{max-height:96%}.max-sm\\:flex-1{flex:1 1 0%}.max-sm\\:flex-none{flex:none}.max-sm\\:grow{flex-grow:1}}@media (max-width: 426px){.max-\\[426px\\]\\:w-\\[21px\\]{width:21px}.max-\\[426px\\]\\:w-\\[38px\\]{width:38px}.max-\\[426px\\]\\:text-xs{font-size:12px;line-height:16px}}@media (min-width: 640px){.sm\\:mt-8{margin-top:32px}.sm\\:hidden{display:none}.sm\\:h-full{height:100%}.sm\\:max-h-\\[90\\%\\]{max-height:90%}.sm\\:max-w-\\[640px\\]{max-width:640px}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:justify-center{justify-content:center}.sm\\:rounded-xl{border-radius:12px}.sm\\:px-2{padding-left:8px;padding-right:8px}.sm\\:px-6{padding-left:24px;padding-right:24px}.sm\\:duration-200{transition-duration:.2s}}.\\[\\&\\>path\\]\\:stroke-\\[2px\\]>path{stroke-width:2px}.\\[\\&\\>span\\]\\:font-normal>span{font-weight:400}.\\[\\&\\>span\\]\\:text-gray-500>span{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}
`;
function ok() {
  return le(() => {
    const n = document.createElement("link");
    n.type = "text/css", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap", document.head.appendChild(n);
  }, []), g(ie, {
    children: [g("style", {
      type: "text/css",
      children: Zl
    }), g(t4, {
      children: [g("div", {
        onClick: kn,
        style: {
          right: "-36px",
          top: "-24px"
        },
        class: "w-7 h-7 z-10 flex items-center justify-center absolute bg-white text-gray-800 rounded-full cursor-pointer",
        children: g(ya, {
          class: "h-3 w-3"
        })
      }), g(s4, {
        children: g(m4, {
          children: g(ak, {})
        })
      })]
    })]
  });
}
const sk = (n) => /* @__PURE__ */ Y("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 500, zoomAndPan: "magnify", viewBox: "0 0 375 374.999991", height: 500, preserveAspectRatio: "xMidYMid meet", ...n }, /* @__PURE__ */ Y("path", { fill: "#000000", d: "M 151.4375 131.65625 L 210.511719 259.050781 C 210.511719 252.984375 210.105469 242.875 210.105469 230.335938 L 197.160156 117.5 C 168.835938 117.90625 151.4375 131.65625 151.4375 131.65625 Z M 225.484375 117.097656 C 218.605469 116.691406 212.128906 116.691406 206.464844 117.097656 L 212.941406 181.804688 C 214.960938 160.773438 219.007812 138.125 225.484375 117.097656 Z M 80.222656 227.101562 C 90.746094 230.335938 101.265625 233.976562 113 238.425781 C 113 238.425781 146.988281 255.816406 173.285156 266.734375 L 104.097656 179.78125 C 93.980469 194.746094 86.292969 211.328125 80.222656 227.101562 Z M 35.714844 287.363281 C 37.738281 276.441406 40.167969 265.117188 43.808594 254.601562 C 34.90625 252.984375 26.003906 251.773438 17.507812 250.960938 C 21.957031 263.90625 28.433594 276.039062 35.714844 287.363281 Z M 195.945312 276.039062 C 195.945312 276.039062 204.441406 278.867188 208.488281 274.417969 L 142.535156 138.125 C 131.207031 146.621094 121.089844 156.324219 112.1875 167.648438 L 191.898438 274.417969 C 193.519531 275.230469 194.730469 275.632812 195.945312 276.039062 Z M 365.480469 146.214844 C 359.816406 122.351562 349.296875 100.109375 335.539062 81.101562 C 343.632812 101.726562 352.128906 124.375 358.199219 140.148438 C 360.625 141.765625 363.457031 144.191406 365.480469 146.214844 Z M 356.175781 170.886719 C 339.179688 157.539062 322.996094 147.023438 307.214844 138.933594 L 244.90625 157.539062 L 232.363281 189.085938 C 230.339844 208.902344 228.71875 233.976562 230.339844 254.601562 C 230.339844 254.601562 233.980469 294.640625 219.414062 299.496094 C 219.414062 299.496094 203.632812 314.863281 163.574219 295.855469 C 163.574219 295.855469 121.898438 274.015625 70.109375 260.265625 C 62.015625 291 59.992188 314.457031 59.992188 316.480469 C 92.363281 349.644531 138.085938 369.867188 188.257812 369.867188 C 288.605469 369.867188 370.335938 288.171875 370.335938 187.871094 C 370.335938 185.847656 370.335938 183.828125 370.335938 181.804688 C 363.054688 183.019531 356.175781 170.886719 356.175781 170.886719 Z M 233.980469 95.257812 C 237.621094 86.761719 242.476562 78.675781 247.332031 71.394531 C 247.332031 71.394531 261.089844 49.960938 281.726562 31.761719 C 254.617188 15.582031 222.246094 5.875 188.257812 5.875 C 87.507812 5.875 6.179688 87.570312 6.179688 187.871094 C 6.179688 197.578125 6.988281 206.476562 8.203125 215.371094 C 22.363281 215.777344 38.144531 217.394531 55.542969 220.628906 C 66.0625 195.152344 75.773438 177.761719 75.773438 177.761719 C 75.773438 177.761719 124.328125 87.976562 233.980469 95.257812 Z M 236.8125 147.429688 L 240.453125 146.214844 L 250.972656 120.332031 C 248.546875 119.925781 246.925781 119.523438 244.5 119.117188 C 241.261719 127.609375 238.429688 137.316406 236.8125 147.429688 Z M 259.066406 121.949219 L 250.164062 143.789062 L 292.648438 132.867188 C 281.320312 128.015625 269.992188 124.375 259.066406 121.949219 Z M 272.015625 76.25 C 266.347656 82.71875 260.683594 90 255.425781 98.085938 C 275.65625 101.726562 293.054688 106.582031 308.027344 112.242188 Z M 340.800781 128.015625 L 314.902344 57.238281 C 311.261719 53.601562 307.621094 50.363281 303.980469 47.128906 C 295.886719 52.792969 287.390625 59.667969 278.894531 68.160156 L 323.804688 119.117188 C 330.28125 122.351562 336.347656 125.589844 340.800781 128.015625 Z M 340.800781 128.015625 ", fillOpacity: 1, fillRule: "nonzero" }));
function uk({
  "data-sku": n
}) {
  var x;
  const e = window.BikeMatrix, t = e.getConfig(), [i, a] = Q({}), [s, u] = Q(!1), [c, d] = Q({
    compatible: "",
    warning: ""
  }), {
    t: p
  } = We(), [h, m] = Q(!1), b = n || t.sku, v = Gr(() => ur.value || h, [ur.value, h]), C = !!e.getActiveSubscription(), k = () => {
    var A, F, E;
    if (m(!0), d({
      compatible: "",
      warning: ""
    }), u(!1), t.logLevel === "verbose" && (console.log("ProductResult updateCompatibility config: " + JSON.stringify(t)), console.log("ProductResult updateCompatibility BikeSignal.value: " + JSON.stringify(Ee.value))), Ee.value) {
      for (let L = 0; L < t.productCollections.length; L++)
        if ((A = Ee.value) != null && A.compatibleCollections.find((z) => z.handle === t.productCollections[L])) {
          u(!0);
          break;
        }
    } else
      for (let L = 0; L < t.productCollections.length; L++)
        if (t.collections.map((z) => z.handle).includes(t.productCollections[L])) {
          u(!0);
          break;
        }
    if (Ee.value) {
      if (b == "") {
        a({
          type: "unavailable",
          ...la.unavailable
        }), m(!1);
        return;
      }
      var S = ((F = va()) == null ? void 0 : F.language) || "en-GB";
      new Xt(t.apiUrl, t.apiKey, t.apiToken, t.isShopify).checkSkuCompatibility((E = Ee.value) == null ? void 0 : E.key, b, S).then((z) => {
        if (m(!1), !z) {
          a({
            type: "unavailable",
            ...la.unavailable
          });
          return;
        }
        const P = (z == null ? void 0 : z.compatible) === null ? "unavailable" : z.warning ? "warning" : z != null && z.compatible ? "compatible" : "incompatible";
        d({
          warning: z.warningMessage,
          compatible: z.compatibilityMessage
        }), a({
          type: P,
          ...la[P]
        });
      });
    } else
      m(!1), a({
        type: "check",
        ...la.check
      });
  };
  return le(() => {
    k();
  }, [Ee.value, b]), le(() => (document.addEventListener("RefreshCompatibility", k), () => {
    document.removeEventListener("RefreshCompatibility", k);
  }), []), !C || !v && !(i != null && i.type) || !s ? g(ie, {}) : g(ie, {
    children: [g("style", {
      type: "text/css",
      children: Zl
    }), g("div", {
      class: "flex flex-col relative w-full mx-auto",
      children: [g("div", {
        // todo: check if there's any state that we don't want it to toggle and then remove the check
        onClick: (S) => {
          S.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
            bubbles: !0,
            composed: !0
          }));
        },
        class: ke("rounded-lg relative z-20 border overflow-hidden w-full flex cursor-pointer", v ? "bg-gray-100 border-gray-300 text-gray-950" : {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          check: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[i.type]),
        children: v ? g("span", {
          class: "loader self-center animate-spin justify-self-center justify-center w-9 my-5 mx-auto h-9",
          style: {
            borderWidth: "6px"
          }
        }) : g(ie, {
          children: [g("div", {
            class: "relative z-10 h-auto items-center justify-center flex",
            children: [g(Yl, {
              class: ke("self-start h-full w-[93px]", {
                unavailable: "text-gray-950",
                check: "text-gray-950",
                compatible: "text-emerald-500",
                incompatible: "text-red-500",
                warning: "text-amber-500"
              }[i.type])
            }), g(Gl, {
              class: "h-[26px] absolute -translate-x-1/4"
            })]
          }), g("div", {
            class: "flex flex-col pl-3 pr-6 py-[6px] min-w-0",
            children: [g("p", {
              class: "text-lg font-semibold",
              children: p(i == null ? void 0 : i.heading_code)
            }), g("p", {
              class: "flex w-full text-sm leading-[22px] font-normal",
              children: g("span", {
                class: "truncate",
                children: i != null && i.details_code ? p(i == null ? void 0 : i.details_code) : (x = Ee.value) == null ? void 0 : x.name
              })
            })]
          })]
        })
      }), g("div", {
        class: "z-10 bg-gray-100 w-full -mt-2 pt-4 flex border justify-between flex-wrap gap-1 border-gray-300 rounded-b-lg p-3 py-2",
        children: [i.type !== "incompatible" && g("div", {
          class: "space-y-2 my-[2px]",
          children: [!!(c != null && c.compatible) && g("p", {
            class: "text-sm flex",
            children: [g(ss, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-emerald-500"
            }), " ", c.compatible]
          }), !!c.warning && g("p", {
            class: "text-sm flex",
            children: [g(us, {
              class: "mr-[6px] flex-none my-px h-4 w-4 text-amber-500"
            }), " ", c.warning]
          })]
        }), g("a", {
          class: "flex text-xs self-end font-semibold items-center underline ml-auto",
          href: "https://bikematrix.io/landed-it",
          target: "_blank",
          children: [p("bikematrix_poweredby"), " ", g(sk, {
            class: "w-5 h-5 ml-2"
          })]
        })]
      }), !v && g(i.icon, {
        class: "absolute top-0 z-30 right-0 w-6 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  });
}
const lk = `.wrapper{position:relative}.bm_collection_result{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.4rem;position:relative;margin-left:auto;margin-right:auto;font-size:14px;text-align:left;height:100%;line-height:1.3em}.bm_collection_result_iconLabel{display:inline-block;position:relative}.bm_collection_result_link{text-align:right;font-weight:500;font-size:.6em;margin-top:1px;text-decoration:underline;color:#000}.bm_collection_result_link:visited{color:#000}.bm_collection_result p{display:inline;padding:1px;margin:0;color:#000}.bm_collection_result_icon{padding:0 .1rem 0 0;position:absolute;left:-24px;top:-.25rem}.bm-hidden{display:none}.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`, D2 = {
  unavailable: {
    icon: _l,
    heading: "",
    code: ""
  },
  compatible: {
    icon: ss,
    heading: "Compatible",
    code: "compatible"
  },
  warning: {
    icon: us,
    heading: "Compatible",
    code: "compatible"
  },
  incompatible: {
    icon: Lh,
    heading: "Not Compatible",
    code: "not_compatible"
  }
};
function Rh({
  "data-type": n
}) {
  var i;
  const e = D2[n], {
    t
  } = We();
  return e ? g(ie, {
    children: [g("style", {
      type: "text/css",
      children: Zl
    }), g("div", {
      class: "flex z-0 flex-col relative  w-full mx-auto compatibility-label-container max-w-[220px]",
      children: [g("div", {
        class: ke("rounded-lg relative z-20 border overflow-hidden w-full flex", {
          unavailable: "bg-gray-50 border-gray-950 text-gray-950",
          compatible: "bg-emerald-50 border-emerald-500 text-emerald-950",
          incompatible: "bg-red-50 border-red-500 text-red-950",
          warning: "bg-amber-50 border-amber-500 text-amber-950"
        }[n]),
        children: [g("div", {
          class: "relative z-10 h-auto items-center justify-center flex",
          children: [g(Yl, {
            class: ke("self-start h-full w-[48px] max-[426px]:w-[38px]", {
              unavailable: "text-gray-950",
              compatible: "text-emerald-500",
              incompatible: "text-red-500",
              warning: "text-amber-500"
            }[n])
          }), g(Gl, {
            class: "h-[18px] max-[426px]:w-[21px] w-[25px] absolute -translate-x-[20%]"
          })]
        }), g("div", {
          class: "status flex flex-col p-2 pl-1 w-full",
          children: g("p", {
            class: "max-[426px]:text-xs text-sm font-semibold p-0 leading-[18px] text-center",
            children: t((i = D2[n]) == null ? void 0 : i.code)
          })
        })]
      }), g(e.icon, {
        class: "absolute top-0 z-30 right-0 w-4 h-4 translate-x-1/3 -translate-y-1/3"
      })]
    })]
  }) : g(ie, {});
}
const pn = {
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
let mr = {
  type: "unavailable",
  heading: ""
};
const ck = async (n, e, t) => {
  if (!t || !mn.value.length) {
    mr = {
      type: "unavailable",
      ...pn.unavailable
    };
    return;
  }
  let i = [];
  for (const c of t.split(",").filter((d) => !!d)) {
    const d = mn.value.find((p) => p.sku === c.trim());
    i.push(d);
  }
  const a = i.some((c) => (c == null ? void 0 : c.compatible) === !0 && (c == null ? void 0 : c.warning) === !0), s = i.some((c) => (c == null ? void 0 : c.compatible) === !0), u = i.every((c) => (c == null ? void 0 : c.compatible) === null);
  a ? mr = {
    type: "warning",
    ...pn.warning
  } : s ? mr = {
    type: "compatible",
    ...pn.compatible
  } : u ? mr = {
    type: "unavailable",
    ...pn.unavailable
  } : mr = {
    type: "incompatible",
    ...pn.incompatible
  };
}, dk = function(n, e, t, i, a, s, u) {
  var d;
  const c = window.BikeMatrix.getConfig();
  if (n || e) {
    if ((n && t || e && i) && c.productsCollections[s]) {
      for (let p = 0; p < c.productsCollections[s].length; p++)
        if (c.collections.map((h) => h.handle).includes(c.productsCollections[s][p]))
          return !0;
    }
  } else
    return a ? !1 : !!Ee.value && ((d = Ee.value.compatibleCollections) == null ? void 0 : d.find((h) => h.handle === u));
  return !1;
};
function pk({
  "data-product-id": n,
  "data-product-skus": e,
  "data-product-barcodes": t,
  "data-product-metafields": i
}) {
  const a = window.BikeMatrix, s = a.getConfig(), [u, c] = Q(!1), d = !!a.getActiveSubscription();
  mr = {
    type: "unavailable",
    ...pn.unavailable
  };
  const {
    currentCollectionHandle: p,
    isHomePage: h,
    isSearchPage: m,
    showSearchPageCollection: b,
    showHomePageCollection: v,
    logLevel: C,
    skuField: k
  } = s, x = !!s.pageType && s.pageType === "product", S = k === "barcode" ? t : k === "metafield" ? i : e || "";
  return C === "verbose" && (console.log("CollectionResult currentCollectionHandle: ", p), console.log("CollectionResult skuField: ", k), console.log("CollectionResult productId: ", n), console.log("CollectionResult skusToCheck: ", S), console.log("CollectionResult BikeSignal.value: " + JSON.stringify(Ee.value))), ur.value ? c(!0) : Ee.value && dk(h, m, v, b, x, n, p) ? ck(Ee.value.key, n, S).then(() => {
    c(!0);
  }) : c(!1), C === "verbose" && console.log("CollectionResult status: ", mr), g(ie, {
    children: d && u && g(ie, {
      children: [g("style", {
        type: "text/css",
        children: lk
      }), g("div", {
        class: "bm_collection_result bm-wrapper",
        children: [g("div", {
          class: "lds-ring",
          id: "bm-loading-spinner",
          style: ur.value ? "" : "display: none",
          children: [g("div", {}), g("div", {}), g("div", {}), g("div", {})]
        }), !ur.value && (mr == null ? void 0 : mr.type) !== "unavailable" && g(Rh, {
          "data-type": mr.type
        })]
      })]
    })
  });
}
const fk = `.lds-ring{display:inline-block;position:relative;width:24px;height:24px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:19px;height:19px;margin:2px;border:2px solid #c4cdd5;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#c4cdd5 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.bm-compatible-products-wrapper{display:block;width:100%;border-top:.5px solid lightgrey;border-bottom:.5px solid lightgrey;margin-top:10px}.bm-compatible-products-title>div{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none;display:flex;align-items:center;justify-content:space-between;padding:8px 0}.bm-compatible-products-title>div>span{font-weight:700}.bm-compatible-products-title svg{height:24px;width:24px;transition:transform .3s linear}.bm-compatible-products-title div.active svg{transform:rotate(180deg)}.bm-compatible-products-list{width:100%;max-width:100%;display:none;overflow:hidden}.bm-compatible-products-list ul{display:grid;gap:20px;grid-template-columns:repeat(4,minmax(0,1fr));padding:0;list-style:none}@media only screen and (max-width: 1000px){.bm-compatible-products-list ul{grid-template-columns:repeat(3,minmax(0,1fr))}}@media only screen and (max-width: 600px){.bm-compatible-products-list ul{gap:10px;grid-template-columns:repeat(2,minmax(0,1fr))}}.bm-compatible-products-list ul li{width:100%;display:flex}.bm-compatible-product-wrapper{display:block;width:100%;border:1px solid lightgrey;padding:5px;display:flex;flex-flow:column;flex:1}.bm-compatible-product-image{display:block;width:100%;max-width:100%;line-height:1;padding-top:100%;position:relative;margin-bottom:5px;overflow:hidden}.bm-compatible-product-image a,.bm-compatible-product-image a:hover,.bm-compatible-product-image a:focus{display:block;width:100%;max-width:100%;outline:none;text-decoration:none;width:auto;height:auto;line-height:1;border:none;border-radius:0}.bm-compatible-product-image img{display:inline-block;vertical-align:top;width:100%;max-width:100%;height:auto;line-height:1;position:absolute;left:0;right:0;bottom:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;top:50%;transform:translateY(-50%)}.bm-compatible-product-title{text-align:center;margin:0 0 1em;display:flex;flex-flow:column;flex:1}.bm-compatible-product-title a,.bm-compatible-product-title a:hover,.bm-compatible-product-title a:focus{color:rgb(var(--text-color));font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;outline:none;text-decoration:none}.bm-compatible-product-price{text-align:center;margin:0 0 1em}.bm-compatible-product-price p{font-family:var(--body-font-family);font-size:calc(var(--body-font-size) * .1rem);font-style:var(--body-font-style);font-weight:var(--body-font-weight);line-height:1.5;color:rgb(var(--text-color));padding:0;margin:0}.bm-compatible-product-price p strong{font-size:1.2em}.bm-compatible-product-compatibility{text-align:center;margin:0 .25em 1em}@media only screen and (max-width: 450px){.bm-compatible-product-compatibility{margin:0 0 1em}}.bm_result_link{justify-content:center;text-align:right;text-decoration:underline;font-size:12px;padding:10px 0}.bm_result_link a{text-align:right;font-weight:700;margin-top:10px;color:#000}
`;
var Go = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
Go.exports;
(function(n, e) {
  (function(t) {
    var i = e, a = n && n.exports == i && n, s = typeof ui == "object" && ui;
    (s.global === s || s.window === s) && (t = s);
    var u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = /[\x01-\x7F]/g, d = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, p = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, h = { "­": "shy", "‌": "zwnj", "‍": "zwj", "‎": "lrm", "⁣": "ic", "⁢": "it", "⁡": "af", "‏": "rlm", "​": "ZeroWidthSpace", "⁠": "NoBreak", "̑": "DownBreve", "⃛": "tdot", "⃜": "DotDot", "	": "Tab", "\n": "NewLine", " ": "puncsp", " ": "MediumSpace", " ": "thinsp", " ": "hairsp", " ": "emsp13", " ": "ensp", " ": "emsp14", " ": "emsp", " ": "numsp", " ": "nbsp", "  ": "ThickSpace", "‾": "oline", _: "lowbar", "‐": "dash", "–": "ndash", "—": "mdash", "―": "horbar", ",": "comma", ";": "semi", "⁏": "bsemi", ":": "colon", "⩴": "Colone", "!": "excl", "¡": "iexcl", "?": "quest", "¿": "iquest", ".": "period", "‥": "nldr", "…": "mldr", "·": "middot", "'": "apos", "‘": "lsquo", "’": "rsquo", "‚": "sbquo", "‹": "lsaquo", "›": "rsaquo", '"': "quot", "“": "ldquo", "”": "rdquo", "„": "bdquo", "«": "laquo", "»": "raquo", "(": "lpar", ")": "rpar", "[": "lsqb", "]": "rsqb", "{": "lcub", "}": "rcub", "⌈": "lceil", "⌉": "rceil", "⌊": "lfloor", "⌋": "rfloor", "⦅": "lopar", "⦆": "ropar", "⦋": "lbrke", "⦌": "rbrke", "⦍": "lbrkslu", "⦎": "rbrksld", "⦏": "lbrksld", "⦐": "rbrkslu", "⦑": "langd", "⦒": "rangd", "⦓": "lparlt", "⦔": "rpargt", "⦕": "gtlPar", "⦖": "ltrPar", "⟦": "lobrk", "⟧": "robrk", "⟨": "lang", "⟩": "rang", "⟪": "Lang", "⟫": "Rang", "⟬": "loang", "⟭": "roang", "❲": "lbbrk", "❳": "rbbrk", "‖": "Vert", "§": "sect", "¶": "para", "@": "commat", "*": "ast", "/": "sol", undefined: null, "&": "amp", "#": "num", "%": "percnt", "‰": "permil", "‱": "pertenk", "†": "dagger", "‡": "Dagger", "•": "bull", "⁃": "hybull", "′": "prime", "″": "Prime", "‴": "tprime", "⁗": "qprime", "‵": "bprime", "⁁": "caret", "`": "grave", "´": "acute", "˜": "tilde", "^": "Hat", "¯": "macr", "˘": "breve", "˙": "dot", "¨": "die", "˚": "ring", "˝": "dblac", "¸": "cedil", "˛": "ogon", "ˆ": "circ", "ˇ": "caron", "°": "deg", "©": "copy", "®": "reg", "℗": "copysr", "℘": "wp", "℞": "rx", "℧": "mho", "℩": "iiota", "←": "larr", "↚": "nlarr", "→": "rarr", "↛": "nrarr", "↑": "uarr", "↓": "darr", "↔": "harr", "↮": "nharr", "↕": "varr", "↖": "nwarr", "↗": "nearr", "↘": "searr", "↙": "swarr", "↝": "rarrw", "↝̸": "nrarrw", "↞": "Larr", "↟": "Uarr", "↠": "Rarr", "↡": "Darr", "↢": "larrtl", "↣": "rarrtl", "↤": "mapstoleft", "↥": "mapstoup", "↦": "map", "↧": "mapstodown", "↩": "larrhk", "↪": "rarrhk", "↫": "larrlp", "↬": "rarrlp", "↭": "harrw", "↰": "lsh", "↱": "rsh", "↲": "ldsh", "↳": "rdsh", "↵": "crarr", "↶": "cularr", "↷": "curarr", "↺": "olarr", "↻": "orarr", "↼": "lharu", "↽": "lhard", "↾": "uharr", "↿": "uharl", "⇀": "rharu", "⇁": "rhard", "⇂": "dharr", "⇃": "dharl", "⇄": "rlarr", "⇅": "udarr", "⇆": "lrarr", "⇇": "llarr", "⇈": "uuarr", "⇉": "rrarr", "⇊": "ddarr", "⇋": "lrhar", "⇌": "rlhar", "⇐": "lArr", "⇍": "nlArr", "⇑": "uArr", "⇒": "rArr", "⇏": "nrArr", "⇓": "dArr", "⇔": "iff", "⇎": "nhArr", "⇕": "vArr", "⇖": "nwArr", "⇗": "neArr", "⇘": "seArr", "⇙": "swArr", "⇚": "lAarr", "⇛": "rAarr", "⇝": "zigrarr", "⇤": "larrb", "⇥": "rarrb", "⇵": "duarr", "⇽": "loarr", "⇾": "roarr", "⇿": "hoarr", "∀": "forall", "∁": "comp", "∂": "part", "∂̸": "npart", "∃": "exist", "∄": "nexist", "∅": "empty", "∇": "Del", "∈": "in", "∉": "notin", "∋": "ni", "∌": "notni", "϶": "bepsi", "∏": "prod", "∐": "coprod", "∑": "sum", "+": "plus", "±": "pm", "÷": "div", "×": "times", "<": "lt", "≮": "nlt", "<⃒": "nvlt", "=": "equals", "≠": "ne", "=⃥": "bne", "⩵": "Equal", ">": "gt", "≯": "ngt", ">⃒": "nvgt", "¬": "not", "|": "vert", "¦": "brvbar", "−": "minus", "∓": "mp", "∔": "plusdo", "⁄": "frasl", "∖": "setmn", "∗": "lowast", "∘": "compfn", "√": "Sqrt", "∝": "prop", "∞": "infin", "∟": "angrt", "∠": "ang", "∠⃒": "nang", "∡": "angmsd", "∢": "angsph", "∣": "mid", "∤": "nmid", "∥": "par", "∦": "npar", "∧": "and", "∨": "or", "∩": "cap", "∩︀": "caps", "∪": "cup", "∪︀": "cups", "∫": "int", "∬": "Int", "∭": "tint", "⨌": "qint", "∮": "oint", "∯": "Conint", "∰": "Cconint", "∱": "cwint", "∲": "cwconint", "∳": "awconint", "∴": "there4", "∵": "becaus", "∶": "ratio", "∷": "Colon", "∸": "minusd", "∺": "mDDot", "∻": "homtht", "∼": "sim", "≁": "nsim", "∼⃒": "nvsim", "∽": "bsim", "∽̱": "race", "∾": "ac", "∾̳": "acE", "∿": "acd", "≀": "wr", "≂": "esim", "≂̸": "nesim", "≃": "sime", "≄": "nsime", "≅": "cong", "≇": "ncong", "≆": "simne", "≈": "ap", "≉": "nap", "≊": "ape", "≋": "apid", "≋̸": "napid", "≌": "bcong", "≍": "CupCap", "≭": "NotCupCap", "≍⃒": "nvap", "≎": "bump", "≎̸": "nbump", "≏": "bumpe", "≏̸": "nbumpe", "≐": "doteq", "≐̸": "nedot", "≑": "eDot", "≒": "efDot", "≓": "erDot", "≔": "colone", "≕": "ecolon", "≖": "ecir", "≗": "cire", "≙": "wedgeq", "≚": "veeeq", "≜": "trie", "≟": "equest", "≡": "equiv", "≢": "nequiv", "≡⃥": "bnequiv", "≤": "le", "≰": "nle", "≤⃒": "nvle", "≥": "ge", "≱": "nge", "≥⃒": "nvge", "≦": "lE", "≦̸": "nlE", "≧": "gE", "≧̸": "ngE", "≨︀": "lvnE", "≨": "lnE", "≩": "gnE", "≩︀": "gvnE", "≪": "ll", "≪̸": "nLtv", "≪⃒": "nLt", "≫": "gg", "≫̸": "nGtv", "≫⃒": "nGt", "≬": "twixt", "≲": "lsim", "≴": "nlsim", "≳": "gsim", "≵": "ngsim", "≶": "lg", "≸": "ntlg", "≷": "gl", "≹": "ntgl", "≺": "pr", "⊀": "npr", "≻": "sc", "⊁": "nsc", "≼": "prcue", "⋠": "nprcue", "≽": "sccue", "⋡": "nsccue", "≾": "prsim", "≿": "scsim", "≿̸": "NotSucceedsTilde", "⊂": "sub", "⊄": "nsub", "⊂⃒": "vnsub", "⊃": "sup", "⊅": "nsup", "⊃⃒": "vnsup", "⊆": "sube", "⊈": "nsube", "⊇": "supe", "⊉": "nsupe", "⊊︀": "vsubne", "⊊": "subne", "⊋︀": "vsupne", "⊋": "supne", "⊍": "cupdot", "⊎": "uplus", "⊏": "sqsub", "⊏̸": "NotSquareSubset", "⊐": "sqsup", "⊐̸": "NotSquareSuperset", "⊑": "sqsube", "⋢": "nsqsube", "⊒": "sqsupe", "⋣": "nsqsupe", "⊓": "sqcap", "⊓︀": "sqcaps", "⊔": "sqcup", "⊔︀": "sqcups", "⊕": "oplus", "⊖": "ominus", "⊗": "otimes", "⊘": "osol", "⊙": "odot", "⊚": "ocir", "⊛": "oast", "⊝": "odash", "⊞": "plusb", "⊟": "minusb", "⊠": "timesb", "⊡": "sdotb", "⊢": "vdash", "⊬": "nvdash", "⊣": "dashv", "⊤": "top", "⊥": "bot", "⊧": "models", "⊨": "vDash", "⊭": "nvDash", "⊩": "Vdash", "⊮": "nVdash", "⊪": "Vvdash", "⊫": "VDash", "⊯": "nVDash", "⊰": "prurel", "⊲": "vltri", "⋪": "nltri", "⊳": "vrtri", "⋫": "nrtri", "⊴": "ltrie", "⋬": "nltrie", "⊴⃒": "nvltrie", "⊵": "rtrie", "⋭": "nrtrie", "⊵⃒": "nvrtrie", "⊶": "origof", "⊷": "imof", "⊸": "mumap", "⊹": "hercon", "⊺": "intcal", "⊻": "veebar", "⊽": "barvee", "⊾": "angrtvb", "⊿": "lrtri", "⋀": "Wedge", "⋁": "Vee", "⋂": "xcap", "⋃": "xcup", "⋄": "diam", "⋅": "sdot", "⋆": "Star", "⋇": "divonx", "⋈": "bowtie", "⋉": "ltimes", "⋊": "rtimes", "⋋": "lthree", "⋌": "rthree", "⋍": "bsime", "⋎": "cuvee", "⋏": "cuwed", "⋐": "Sub", "⋑": "Sup", "⋒": "Cap", "⋓": "Cup", "⋔": "fork", "⋕": "epar", "⋖": "ltdot", "⋗": "gtdot", "⋘": "Ll", "⋘̸": "nLl", "⋙": "Gg", "⋙̸": "nGg", "⋚︀": "lesg", "⋚": "leg", "⋛": "gel", "⋛︀": "gesl", "⋞": "cuepr", "⋟": "cuesc", "⋦": "lnsim", "⋧": "gnsim", "⋨": "prnsim", "⋩": "scnsim", "⋮": "vellip", "⋯": "ctdot", "⋰": "utdot", "⋱": "dtdot", "⋲": "disin", "⋳": "isinsv", "⋴": "isins", "⋵": "isindot", "⋵̸": "notindot", "⋶": "notinvc", "⋷": "notinvb", "⋹": "isinE", "⋹̸": "notinE", "⋺": "nisd", "⋻": "xnis", "⋼": "nis", "⋽": "notnivc", "⋾": "notnivb", "⌅": "barwed", "⌆": "Barwed", "⌌": "drcrop", "⌍": "dlcrop", "⌎": "urcrop", "⌏": "ulcrop", "⌐": "bnot", "⌒": "profline", "⌓": "profsurf", "⌕": "telrec", "⌖": "target", "⌜": "ulcorn", "⌝": "urcorn", "⌞": "dlcorn", "⌟": "drcorn", "⌢": "frown", "⌣": "smile", "⌭": "cylcty", "⌮": "profalar", "⌶": "topbot", "⌽": "ovbar", "⌿": "solbar", "⍼": "angzarr", "⎰": "lmoust", "⎱": "rmoust", "⎴": "tbrk", "⎵": "bbrk", "⎶": "bbrktbrk", "⏜": "OverParenthesis", "⏝": "UnderParenthesis", "⏞": "OverBrace", "⏟": "UnderBrace", "⏢": "trpezium", "⏧": "elinters", "␣": "blank", "─": "boxh", "│": "boxv", "┌": "boxdr", "┐": "boxdl", "└": "boxur", "┘": "boxul", "├": "boxvr", "┤": "boxvl", "┬": "boxhd", "┴": "boxhu", "┼": "boxvh", "═": "boxH", "║": "boxV", "╒": "boxdR", "╓": "boxDr", "╔": "boxDR", "╕": "boxdL", "╖": "boxDl", "╗": "boxDL", "╘": "boxuR", "╙": "boxUr", "╚": "boxUR", "╛": "boxuL", "╜": "boxUl", "╝": "boxUL", "╞": "boxvR", "╟": "boxVr", "╠": "boxVR", "╡": "boxvL", "╢": "boxVl", "╣": "boxVL", "╤": "boxHd", "╥": "boxhD", "╦": "boxHD", "╧": "boxHu", "╨": "boxhU", "╩": "boxHU", "╪": "boxvH", "╫": "boxVh", "╬": "boxVH", "▀": "uhblk", "▄": "lhblk", "█": "block", "░": "blk14", "▒": "blk12", "▓": "blk34", "□": "squ", "▪": "squf", "▫": "EmptyVerySmallSquare", "▭": "rect", "▮": "marker", "▱": "fltns", "△": "xutri", "▴": "utrif", "▵": "utri", "▸": "rtrif", "▹": "rtri", "▽": "xdtri", "▾": "dtrif", "▿": "dtri", "◂": "ltrif", "◃": "ltri", "◊": "loz", "○": "cir", "◬": "tridot", "◯": "xcirc", "◸": "ultri", "◹": "urtri", "◺": "lltri", "◻": "EmptySmallSquare", "◼": "FilledSmallSquare", "★": "starf", "☆": "star", "☎": "phone", "♀": "female", "♂": "male", "♠": "spades", "♣": "clubs", "♥": "hearts", "♦": "diams", "♪": "sung", "✓": "check", "✗": "cross", "✠": "malt", "✶": "sext", "❘": "VerticalSeparator", "⟈": "bsolhsub", "⟉": "suphsol", "⟵": "xlarr", "⟶": "xrarr", "⟷": "xharr", "⟸": "xlArr", "⟹": "xrArr", "⟺": "xhArr", "⟼": "xmap", "⟿": "dzigrarr", "⤂": "nvlArr", "⤃": "nvrArr", "⤄": "nvHarr", "⤅": "Map", "⤌": "lbarr", "⤍": "rbarr", "⤎": "lBarr", "⤏": "rBarr", "⤐": "RBarr", "⤑": "DDotrahd", "⤒": "UpArrowBar", "⤓": "DownArrowBar", "⤖": "Rarrtl", "⤙": "latail", "⤚": "ratail", "⤛": "lAtail", "⤜": "rAtail", "⤝": "larrfs", "⤞": "rarrfs", "⤟": "larrbfs", "⤠": "rarrbfs", "⤣": "nwarhk", "⤤": "nearhk", "⤥": "searhk", "⤦": "swarhk", "⤧": "nwnear", "⤨": "toea", "⤩": "tosa", "⤪": "swnwar", "⤳": "rarrc", "⤳̸": "nrarrc", "⤵": "cudarrr", "⤶": "ldca", "⤷": "rdca", "⤸": "cudarrl", "⤹": "larrpl", "⤼": "curarrm", "⤽": "cularrp", "⥅": "rarrpl", "⥈": "harrcir", "⥉": "Uarrocir", "⥊": "lurdshar", "⥋": "ldrushar", "⥎": "LeftRightVector", "⥏": "RightUpDownVector", "⥐": "DownLeftRightVector", "⥑": "LeftUpDownVector", "⥒": "LeftVectorBar", "⥓": "RightVectorBar", "⥔": "RightUpVectorBar", "⥕": "RightDownVectorBar", "⥖": "DownLeftVectorBar", "⥗": "DownRightVectorBar", "⥘": "LeftUpVectorBar", "⥙": "LeftDownVectorBar", "⥚": "LeftTeeVector", "⥛": "RightTeeVector", "⥜": "RightUpTeeVector", "⥝": "RightDownTeeVector", "⥞": "DownLeftTeeVector", "⥟": "DownRightTeeVector", "⥠": "LeftUpTeeVector", "⥡": "LeftDownTeeVector", "⥢": "lHar", "⥣": "uHar", "⥤": "rHar", "⥥": "dHar", "⥦": "luruhar", "⥧": "ldrdhar", "⥨": "ruluhar", "⥩": "rdldhar", "⥪": "lharul", "⥫": "llhard", "⥬": "rharul", "⥭": "lrhard", "⥮": "udhar", "⥯": "duhar", "⥰": "RoundImplies", "⥱": "erarr", "⥲": "simrarr", "⥳": "larrsim", "⥴": "rarrsim", "⥵": "rarrap", "⥶": "ltlarr", "⥸": "gtrarr", "⥹": "subrarr", "⥻": "suplarr", "⥼": "lfisht", "⥽": "rfisht", "⥾": "ufisht", "⥿": "dfisht", "⦚": "vzigzag", "⦜": "vangrt", "⦝": "angrtvbd", "⦤": "ange", "⦥": "range", "⦦": "dwangle", "⦧": "uwangle", "⦨": "angmsdaa", "⦩": "angmsdab", "⦪": "angmsdac", "⦫": "angmsdad", "⦬": "angmsdae", "⦭": "angmsdaf", "⦮": "angmsdag", "⦯": "angmsdah", "⦰": "bemptyv", "⦱": "demptyv", "⦲": "cemptyv", "⦳": "raemptyv", "⦴": "laemptyv", "⦵": "ohbar", "⦶": "omid", "⦷": "opar", "⦹": "operp", "⦻": "olcross", "⦼": "odsold", "⦾": "olcir", "⦿": "ofcir", "⧀": "olt", "⧁": "ogt", "⧂": "cirscir", "⧃": "cirE", "⧄": "solb", "⧅": "bsolb", "⧉": "boxbox", "⧍": "trisb", "⧎": "rtriltri", "⧏": "LeftTriangleBar", "⧏̸": "NotLeftTriangleBar", "⧐": "RightTriangleBar", "⧐̸": "NotRightTriangleBar", "⧜": "iinfin", "⧝": "infintie", "⧞": "nvinfin", "⧣": "eparsl", "⧤": "smeparsl", "⧥": "eqvparsl", "⧫": "lozf", "⧴": "RuleDelayed", "⧶": "dsol", "⨀": "xodot", "⨁": "xoplus", "⨂": "xotime", "⨄": "xuplus", "⨆": "xsqcup", "⨍": "fpartint", "⨐": "cirfnint", "⨑": "awint", "⨒": "rppolint", "⨓": "scpolint", "⨔": "npolint", "⨕": "pointint", "⨖": "quatint", "⨗": "intlarhk", "⨢": "pluscir", "⨣": "plusacir", "⨤": "simplus", "⨥": "plusdu", "⨦": "plussim", "⨧": "plustwo", "⨩": "mcomma", "⨪": "minusdu", "⨭": "loplus", "⨮": "roplus", "⨯": "Cross", "⨰": "timesd", "⨱": "timesbar", "⨳": "smashp", "⨴": "lotimes", "⨵": "rotimes", "⨶": "otimesas", "⨷": "Otimes", "⨸": "odiv", "⨹": "triplus", "⨺": "triminus", "⨻": "tritime", "⨼": "iprod", "⨿": "amalg", "⩀": "capdot", "⩂": "ncup", "⩃": "ncap", "⩄": "capand", "⩅": "cupor", "⩆": "cupcap", "⩇": "capcup", "⩈": "cupbrcap", "⩉": "capbrcup", "⩊": "cupcup", "⩋": "capcap", "⩌": "ccups", "⩍": "ccaps", "⩐": "ccupssm", "⩓": "And", "⩔": "Or", "⩕": "andand", "⩖": "oror", "⩗": "orslope", "⩘": "andslope", "⩚": "andv", "⩛": "orv", "⩜": "andd", "⩝": "ord", "⩟": "wedbar", "⩦": "sdote", "⩪": "simdot", "⩭": "congdot", "⩭̸": "ncongdot", "⩮": "easter", "⩯": "apacir", "⩰": "apE", "⩰̸": "napE", "⩱": "eplus", "⩲": "pluse", "⩳": "Esim", "⩷": "eDDot", "⩸": "equivDD", "⩹": "ltcir", "⩺": "gtcir", "⩻": "ltquest", "⩼": "gtquest", "⩽": "les", "⩽̸": "nles", "⩾": "ges", "⩾̸": "nges", "⩿": "lesdot", "⪀": "gesdot", "⪁": "lesdoto", "⪂": "gesdoto", "⪃": "lesdotor", "⪄": "gesdotol", "⪅": "lap", "⪆": "gap", "⪇": "lne", "⪈": "gne", "⪉": "lnap", "⪊": "gnap", "⪋": "lEg", "⪌": "gEl", "⪍": "lsime", "⪎": "gsime", "⪏": "lsimg", "⪐": "gsiml", "⪑": "lgE", "⪒": "glE", "⪓": "lesges", "⪔": "gesles", "⪕": "els", "⪖": "egs", "⪗": "elsdot", "⪘": "egsdot", "⪙": "el", "⪚": "eg", "⪝": "siml", "⪞": "simg", "⪟": "simlE", "⪠": "simgE", "⪡": "LessLess", "⪡̸": "NotNestedLessLess", "⪢": "GreaterGreater", "⪢̸": "NotNestedGreaterGreater", "⪤": "glj", "⪥": "gla", "⪦": "ltcc", "⪧": "gtcc", "⪨": "lescc", "⪩": "gescc", "⪪": "smt", "⪫": "lat", "⪬": "smte", "⪬︀": "smtes", "⪭": "late", "⪭︀": "lates", "⪮": "bumpE", "⪯": "pre", "⪯̸": "npre", "⪰": "sce", "⪰̸": "nsce", "⪳": "prE", "⪴": "scE", "⪵": "prnE", "⪶": "scnE", "⪷": "prap", "⪸": "scap", "⪹": "prnap", "⪺": "scnap", "⪻": "Pr", "⪼": "Sc", "⪽": "subdot", "⪾": "supdot", "⪿": "subplus", "⫀": "supplus", "⫁": "submult", "⫂": "supmult", "⫃": "subedot", "⫄": "supedot", "⫅": "subE", "⫅̸": "nsubE", "⫆": "supE", "⫆̸": "nsupE", "⫇": "subsim", "⫈": "supsim", "⫋︀": "vsubnE", "⫋": "subnE", "⫌︀": "vsupnE", "⫌": "supnE", "⫏": "csub", "⫐": "csup", "⫑": "csube", "⫒": "csupe", "⫓": "subsup", "⫔": "supsub", "⫕": "subsub", "⫖": "supsup", "⫗": "suphsub", "⫘": "supdsub", "⫙": "forkv", "⫚": "topfork", "⫛": "mlcp", "⫤": "Dashv", "⫦": "Vdashl", "⫧": "Barv", "⫨": "vBar", "⫩": "vBarv", "⫫": "Vbar", "⫬": "Not", "⫭": "bNot", "⫮": "rnmid", "⫯": "cirmid", "⫰": "midcir", "⫱": "topcir", "⫲": "nhpar", "⫳": "parsim", "⫽": "parsl", "⫽⃥": "nparsl", "♭": "flat", "♮": "natur", "♯": "sharp", "¤": "curren", "¢": "cent", $: "dollar", "£": "pound", "¥": "yen", "€": "euro", "¹": "sup1", "½": "half", "⅓": "frac13", "¼": "frac14", "⅕": "frac15", "⅙": "frac16", "⅛": "frac18", "²": "sup2", "⅔": "frac23", "⅖": "frac25", "³": "sup3", "¾": "frac34", "⅗": "frac35", "⅜": "frac38", "⅘": "frac45", "⅚": "frac56", "⅝": "frac58", "⅞": "frac78", "𝒶": "ascr", "𝕒": "aopf", "𝔞": "afr", "𝔸": "Aopf", "𝔄": "Afr", "𝒜": "Ascr", ª: "ordf", á: "aacute", Á: "Aacute", à: "agrave", À: "Agrave", ă: "abreve", Ă: "Abreve", â: "acirc", Â: "Acirc", å: "aring", Å: "angst", ä: "auml", Ä: "Auml", ã: "atilde", Ã: "Atilde", ą: "aogon", Ą: "Aogon", ā: "amacr", Ā: "Amacr", æ: "aelig", Æ: "AElig", "𝒷": "bscr", "𝕓": "bopf", "𝔟": "bfr", "𝔹": "Bopf", ℬ: "Bscr", "𝔅": "Bfr", "𝔠": "cfr", "𝒸": "cscr", "𝕔": "copf", ℭ: "Cfr", "𝒞": "Cscr", ℂ: "Copf", ć: "cacute", Ć: "Cacute", ĉ: "ccirc", Ĉ: "Ccirc", č: "ccaron", Č: "Ccaron", ċ: "cdot", Ċ: "Cdot", ç: "ccedil", Ç: "Ccedil", "℅": "incare", "𝔡": "dfr", "ⅆ": "dd", "𝕕": "dopf", "𝒹": "dscr", "𝒟": "Dscr", "𝔇": "Dfr", "ⅅ": "DD", "𝔻": "Dopf", ď: "dcaron", Ď: "Dcaron", đ: "dstrok", Đ: "Dstrok", ð: "eth", Ð: "ETH", "ⅇ": "ee", ℯ: "escr", "𝔢": "efr", "𝕖": "eopf", ℰ: "Escr", "𝔈": "Efr", "𝔼": "Eopf", é: "eacute", É: "Eacute", è: "egrave", È: "Egrave", ê: "ecirc", Ê: "Ecirc", ě: "ecaron", Ě: "Ecaron", ë: "euml", Ë: "Euml", ė: "edot", Ė: "Edot", ę: "eogon", Ę: "Eogon", ē: "emacr", Ē: "Emacr", "𝔣": "ffr", "𝕗": "fopf", "𝒻": "fscr", "𝔉": "Ffr", "𝔽": "Fopf", ℱ: "Fscr", ﬀ: "fflig", ﬃ: "ffilig", ﬄ: "ffllig", ﬁ: "filig", fj: "fjlig", ﬂ: "fllig", ƒ: "fnof", ℊ: "gscr", "𝕘": "gopf", "𝔤": "gfr", "𝒢": "Gscr", "𝔾": "Gopf", "𝔊": "Gfr", ǵ: "gacute", ğ: "gbreve", Ğ: "Gbreve", ĝ: "gcirc", Ĝ: "Gcirc", ġ: "gdot", Ġ: "Gdot", Ģ: "Gcedil", "𝔥": "hfr", ℎ: "planckh", "𝒽": "hscr", "𝕙": "hopf", ℋ: "Hscr", ℌ: "Hfr", ℍ: "Hopf", ĥ: "hcirc", Ĥ: "Hcirc", ℏ: "hbar", ħ: "hstrok", Ħ: "Hstrok", "𝕚": "iopf", "𝔦": "ifr", "𝒾": "iscr", "ⅈ": "ii", "𝕀": "Iopf", ℐ: "Iscr", ℑ: "Im", í: "iacute", Í: "Iacute", ì: "igrave", Ì: "Igrave", î: "icirc", Î: "Icirc", ï: "iuml", Ï: "Iuml", ĩ: "itilde", Ĩ: "Itilde", İ: "Idot", į: "iogon", Į: "Iogon", ī: "imacr", Ī: "Imacr", ĳ: "ijlig", Ĳ: "IJlig", ı: "imath", "𝒿": "jscr", "𝕛": "jopf", "𝔧": "jfr", "𝒥": "Jscr", "𝔍": "Jfr", "𝕁": "Jopf", ĵ: "jcirc", Ĵ: "Jcirc", "ȷ": "jmath", "𝕜": "kopf", "𝓀": "kscr", "𝔨": "kfr", "𝒦": "Kscr", "𝕂": "Kopf", "𝔎": "Kfr", ķ: "kcedil", Ķ: "Kcedil", "𝔩": "lfr", "𝓁": "lscr", ℓ: "ell", "𝕝": "lopf", ℒ: "Lscr", "𝔏": "Lfr", "𝕃": "Lopf", ĺ: "lacute", Ĺ: "Lacute", ľ: "lcaron", Ľ: "Lcaron", ļ: "lcedil", Ļ: "Lcedil", ł: "lstrok", Ł: "Lstrok", ŀ: "lmidot", Ŀ: "Lmidot", "𝔪": "mfr", "𝕞": "mopf", "𝓂": "mscr", "𝔐": "Mfr", "𝕄": "Mopf", ℳ: "Mscr", "𝔫": "nfr", "𝕟": "nopf", "𝓃": "nscr", ℕ: "Nopf", "𝒩": "Nscr", "𝔑": "Nfr", ń: "nacute", Ń: "Nacute", ň: "ncaron", Ň: "Ncaron", ñ: "ntilde", Ñ: "Ntilde", ņ: "ncedil", Ņ: "Ncedil", "№": "numero", ŋ: "eng", Ŋ: "ENG", "𝕠": "oopf", "𝔬": "ofr", ℴ: "oscr", "𝒪": "Oscr", "𝔒": "Ofr", "𝕆": "Oopf", º: "ordm", ó: "oacute", Ó: "Oacute", ò: "ograve", Ò: "Ograve", ô: "ocirc", Ô: "Ocirc", ö: "ouml", Ö: "Ouml", ő: "odblac", Ő: "Odblac", õ: "otilde", Õ: "Otilde", ø: "oslash", Ø: "Oslash", ō: "omacr", Ō: "Omacr", œ: "oelig", Œ: "OElig", "𝔭": "pfr", "𝓅": "pscr", "𝕡": "popf", ℙ: "Popf", "𝔓": "Pfr", "𝒫": "Pscr", "𝕢": "qopf", "𝔮": "qfr", "𝓆": "qscr", "𝒬": "Qscr", "𝔔": "Qfr", ℚ: "Qopf", ĸ: "kgreen", "𝔯": "rfr", "𝕣": "ropf", "𝓇": "rscr", ℛ: "Rscr", ℜ: "Re", ℝ: "Ropf", ŕ: "racute", Ŕ: "Racute", ř: "rcaron", Ř: "Rcaron", ŗ: "rcedil", Ŗ: "Rcedil", "𝕤": "sopf", "𝓈": "sscr", "𝔰": "sfr", "𝕊": "Sopf", "𝔖": "Sfr", "𝒮": "Sscr", "Ⓢ": "oS", ś: "sacute", Ś: "Sacute", ŝ: "scirc", Ŝ: "Scirc", š: "scaron", Š: "Scaron", ş: "scedil", Ş: "Scedil", ß: "szlig", "𝔱": "tfr", "𝓉": "tscr", "𝕥": "topf", "𝒯": "Tscr", "𝔗": "Tfr", "𝕋": "Topf", ť: "tcaron", Ť: "Tcaron", ţ: "tcedil", Ţ: "Tcedil", "™": "trade", ŧ: "tstrok", Ŧ: "Tstrok", "𝓊": "uscr", "𝕦": "uopf", "𝔲": "ufr", "𝕌": "Uopf", "𝔘": "Ufr", "𝒰": "Uscr", ú: "uacute", Ú: "Uacute", ù: "ugrave", Ù: "Ugrave", ŭ: "ubreve", Ŭ: "Ubreve", û: "ucirc", Û: "Ucirc", ů: "uring", Ů: "Uring", ü: "uuml", Ü: "Uuml", ű: "udblac", Ű: "Udblac", ũ: "utilde", Ũ: "Utilde", ų: "uogon", Ų: "Uogon", ū: "umacr", Ū: "Umacr", "𝔳": "vfr", "𝕧": "vopf", "𝓋": "vscr", "𝔙": "Vfr", "𝕍": "Vopf", "𝒱": "Vscr", "𝕨": "wopf", "𝓌": "wscr", "𝔴": "wfr", "𝒲": "Wscr", "𝕎": "Wopf", "𝔚": "Wfr", ŵ: "wcirc", Ŵ: "Wcirc", "𝔵": "xfr", "𝓍": "xscr", "𝕩": "xopf", "𝕏": "Xopf", "𝔛": "Xfr", "𝒳": "Xscr", "𝔶": "yfr", "𝓎": "yscr", "𝕪": "yopf", "𝒴": "Yscr", "𝔜": "Yfr", "𝕐": "Yopf", ý: "yacute", Ý: "Yacute", ŷ: "ycirc", Ŷ: "Ycirc", ÿ: "yuml", Ÿ: "Yuml", "𝓏": "zscr", "𝔷": "zfr", "𝕫": "zopf", ℨ: "Zfr", ℤ: "Zopf", "𝒵": "Zscr", ź: "zacute", Ź: "Zacute", ž: "zcaron", Ž: "Zcaron", ż: "zdot", Ż: "Zdot", Ƶ: "imped", þ: "thorn", Þ: "THORN", ŉ: "napos", α: "alpha", Α: "Alpha", β: "beta", Β: "Beta", γ: "gamma", Γ: "Gamma", δ: "delta", Δ: "Delta", ε: "epsi", "ϵ": "epsiv", Ε: "Epsilon", ϝ: "gammad", Ϝ: "Gammad", ζ: "zeta", Ζ: "Zeta", η: "eta", Η: "Eta", θ: "theta", ϑ: "thetav", Θ: "Theta", ι: "iota", Ι: "Iota", κ: "kappa", ϰ: "kappav", Κ: "Kappa", λ: "lambda", Λ: "Lambda", μ: "mu", µ: "micro", Μ: "Mu", ν: "nu", Ν: "Nu", ξ: "xi", Ξ: "Xi", ο: "omicron", Ο: "Omicron", π: "pi", ϖ: "piv", Π: "Pi", ρ: "rho", ϱ: "rhov", Ρ: "Rho", σ: "sigma", Σ: "Sigma", ς: "sigmaf", τ: "tau", Τ: "Tau", υ: "upsi", Υ: "Upsilon", ϒ: "Upsi", φ: "phi", ϕ: "phiv", Φ: "Phi", χ: "chi", Χ: "Chi", ψ: "psi", Ψ: "Psi", ω: "omega", Ω: "ohm", а: "acy", А: "Acy", б: "bcy", Б: "Bcy", в: "vcy", В: "Vcy", г: "gcy", Г: "Gcy", ѓ: "gjcy", Ѓ: "GJcy", д: "dcy", Д: "Dcy", ђ: "djcy", Ђ: "DJcy", е: "iecy", Е: "IEcy", ё: "iocy", Ё: "IOcy", є: "jukcy", Є: "Jukcy", ж: "zhcy", Ж: "ZHcy", з: "zcy", З: "Zcy", ѕ: "dscy", Ѕ: "DScy", и: "icy", И: "Icy", і: "iukcy", І: "Iukcy", ї: "yicy", Ї: "YIcy", й: "jcy", Й: "Jcy", ј: "jsercy", Ј: "Jsercy", к: "kcy", К: "Kcy", ќ: "kjcy", Ќ: "KJcy", л: "lcy", Л: "Lcy", љ: "ljcy", Љ: "LJcy", м: "mcy", М: "Mcy", н: "ncy", Н: "Ncy", њ: "njcy", Њ: "NJcy", о: "ocy", О: "Ocy", п: "pcy", П: "Pcy", р: "rcy", Р: "Rcy", с: "scy", С: "Scy", т: "tcy", Т: "Tcy", ћ: "tshcy", Ћ: "TSHcy", у: "ucy", У: "Ucy", ў: "ubrcy", Ў: "Ubrcy", ф: "fcy", Ф: "Fcy", х: "khcy", Х: "KHcy", ц: "tscy", Ц: "TScy", ч: "chcy", Ч: "CHcy", џ: "dzcy", Џ: "DZcy", ш: "shcy", Ш: "SHcy", щ: "shchcy", Щ: "SHCHcy", ъ: "hardcy", Ъ: "HARDcy", ы: "ycy", Ы: "Ycy", ь: "softcy", Ь: "SOFTcy", э: "ecy", Э: "Ecy", ю: "yucy", Ю: "YUcy", я: "yacy", Я: "YAcy", ℵ: "aleph", ℶ: "beth", ℷ: "gimel", ℸ: "daleth" }, m = /["&'<>`]/g, b = {
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
    }, v = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, C = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, k = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, x = { aacute: "á", Aacute: "Á", abreve: "ă", Abreve: "Ă", ac: "∾", acd: "∿", acE: "∾̳", acirc: "â", Acirc: "Â", acute: "´", acy: "а", Acy: "А", aelig: "æ", AElig: "Æ", af: "⁡", afr: "𝔞", Afr: "𝔄", agrave: "à", Agrave: "À", alefsym: "ℵ", aleph: "ℵ", alpha: "α", Alpha: "Α", amacr: "ā", Amacr: "Ā", amalg: "⨿", amp: "&", AMP: "&", and: "∧", And: "⩓", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", Aogon: "Ą", aopf: "𝕒", Aopf: "𝔸", ap: "≈", apacir: "⩯", ape: "≊", apE: "⩰", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", aring: "å", Aring: "Å", ascr: "𝒶", Ascr: "𝒜", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", Bcy: "Б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", beta: "β", Beta: "Β", beth: "ℶ", between: "≬", bfr: "𝔟", Bfr: "𝔅", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bNot: "⫭", bopf: "𝕓", Bopf: "𝔹", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxhD: "╥", boxHd: "╤", boxHD: "╦", boxhu: "┴", boxhU: "╨", boxHu: "╧", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpe: "≏", bumpE: "⪮", bumpeq: "≏", Bumpeq: "≎", cacute: "ć", Cacute: "Ć", cap: "∩", Cap: "⋒", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", ccaron: "č", Ccaron: "Č", ccedil: "ç", Ccedil: "Ç", ccirc: "ĉ", Ccirc: "Ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", Cdot: "Ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", chcy: "ч", CHcy: "Ч", check: "✓", checkmark: "✓", chi: "χ", Chi: "Χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cire: "≗", cirE: "⧃", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", colone: "≔", Colone: "⩴", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", cscr: "𝒸", Cscr: "𝒞", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", Cup: "⋓", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", dArr: "⇓", Darr: "↡", dash: "‐", dashv: "⊣", Dashv: "⫤", dbkarow: "⤏", dblac: "˝", dcaron: "ď", Dcaron: "Ď", dcy: "д", Dcy: "Д", dd: "ⅆ", DD: "ⅅ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", delta: "δ", Delta: "Δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", Dfr: "𝔇", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", DJcy: "Ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", Dopf: "𝔻", dot: "˙", Dot: "¨", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", downarrow: "↓", Downarrow: "⇓", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", Dscr: "𝒟", dscy: "ѕ", DScy: "Ѕ", dsol: "⧶", dstrok: "đ", Dstrok: "Đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", DZcy: "Џ", dzigrarr: "⟿", eacute: "é", Eacute: "É", easter: "⩮", ecaron: "ě", Ecaron: "Ě", ecir: "≖", ecirc: "ê", Ecirc: "Ê", ecolon: "≕", ecy: "э", Ecy: "Э", eDDot: "⩷", edot: "ė", eDot: "≑", Edot: "Ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", Efr: "𝔈", eg: "⪚", egrave: "è", Egrave: "È", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", Emacr: "Ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", eng: "ŋ", ENG: "Ŋ", ensp: " ", eogon: "ę", Eogon: "Ę", eopf: "𝕖", Eopf: "𝔼", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", Epsilon: "Ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", esim: "≂", Esim: "⩳", eta: "η", Eta: "Η", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", fcy: "ф", Fcy: "Ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", Ffr: "𝔉", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", Fopf: "𝔽", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", gamma: "γ", Gamma: "Γ", gammad: "ϝ", Gammad: "Ϝ", gap: "⪆", gbreve: "ğ", Gbreve: "Ğ", Gcedil: "Ģ", gcirc: "ĝ", Gcirc: "Ĝ", gcy: "г", Gcy: "Г", gdot: "ġ", Gdot: "Ġ", ge: "≥", gE: "≧", gel: "⋛", gEl: "⪌", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", Gfr: "𝔊", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", GJcy: "Ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", Gopf: "𝔾", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", gscr: "ℊ", Gscr: "𝒢", gsim: "≳", gsime: "⪎", gsiml: "⪐", gt: ">", Gt: "≫", GT: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", HARDcy: "Ъ", harr: "↔", hArr: "⇔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", hcirc: "ĥ", Hcirc: "Ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", hstrok: "ħ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", iacute: "í", Iacute: "Í", ic: "⁣", icirc: "î", Icirc: "Î", icy: "и", Icy: "И", Idot: "İ", iecy: "е", IEcy: "Е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", igrave: "ì", Igrave: "Ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", IJlig: "Ĳ", Im: "ℑ", imacr: "ī", Imacr: "Ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", Int: "∬", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", iocy: "ё", IOcy: "Ё", iogon: "į", Iogon: "Į", iopf: "𝕚", Iopf: "𝕀", iota: "ι", Iota: "Ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", Itilde: "Ĩ", iukcy: "і", Iukcy: "І", iuml: "ï", Iuml: "Ï", jcirc: "ĵ", Jcirc: "Ĵ", jcy: "й", Jcy: "Й", jfr: "𝔧", Jfr: "𝔍", jmath: "ȷ", jopf: "𝕛", Jopf: "𝕁", jscr: "𝒿", Jscr: "𝒥", jsercy: "ј", Jsercy: "Ј", jukcy: "є", Jukcy: "Є", kappa: "κ", Kappa: "Κ", kappav: "ϰ", kcedil: "ķ", Kcedil: "Ķ", kcy: "к", Kcy: "К", kfr: "𝔨", Kfr: "𝔎", kgreen: "ĸ", khcy: "х", KHcy: "Х", kjcy: "ќ", KJcy: "Ќ", kopf: "𝕜", Kopf: "𝕂", kscr: "𝓀", Kscr: "𝒦", lAarr: "⇚", lacute: "ĺ", Lacute: "Ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", Lambda: "Λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larr: "←", lArr: "⇐", Larr: "↞", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", lAtail: "⤛", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", Lcaron: "Ľ", lcedil: "ļ", Lcedil: "Ļ", lceil: "⌈", lcub: "{", lcy: "л", Lcy: "Л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", leftarrow: "←", Leftarrow: "⇐", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", Leftrightarrow: "⇔", LeftRightArrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", leg: "⋚", lEg: "⪋", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", Lfr: "𝔏", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", LJcy: "Љ", ll: "≪", Ll: "⋘", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", lmidot: "ŀ", Lmidot: "Ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", Longleftarrow: "⟸", LongLeftArrow: "⟵", longleftrightarrow: "⟷", Longleftrightarrow: "⟺", LongLeftRightArrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", Longrightarrow: "⟹", LongRightArrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", Lopf: "𝕃", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", Lstrok: "Ł", lt: "<", Lt: "≪", LT: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", Map: "⤅", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", Mcy: "М", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", mfr: "𝔪", Mfr: "𝔐", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", Mopf: "𝕄", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", mu: "μ", Mu: "Μ", multimap: "⊸", mumap: "⊸", nabla: "∇", nacute: "ń", Nacute: "Ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", Ncaron: "Ň", ncedil: "ņ", Ncedil: "Ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", Ncy: "Н", ndash: "–", ne: "≠", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", nfr: "𝔫", Nfr: "𝔑", nge: "≱", ngE: "≧̸", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", ngt: "≯", nGt: "≫⃒", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", NJcy: "Њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nle: "≰", nlE: "≦̸", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nlt: "≮", nLt: "≪⃒", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", not: "¬", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrarr: "↛", nrArr: "⇏", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", Nscr: "𝒩", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsube: "⊈", nsubE: "⫅̸", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupe: "⊉", nsupE: "⫆̸", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntilde: "ñ", Ntilde: "Ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", Nu: "Ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", oacute: "ó", Oacute: "Ó", oast: "⊛", ocir: "⊚", ocirc: "ô", Ocirc: "Ô", ocy: "о", Ocy: "О", odash: "⊝", odblac: "ő", Odblac: "Ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", OElig: "Œ", ofcir: "⦿", ofr: "𝔬", Ofr: "𝔒", ogon: "˛", ograve: "ò", Ograve: "Ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", Omacr: "Ō", omega: "ω", Omega: "Ω", omicron: "ο", Omicron: "Ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", Oopf: "𝕆", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", or: "∨", Or: "⩔", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", oscr: "ℴ", Oscr: "𝒪", oslash: "ø", Oslash: "Ø", osol: "⊘", otilde: "õ", Otilde: "Õ", otimes: "⊗", Otimes: "⨷", otimesas: "⨶", ouml: "ö", Ouml: "Ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", pcy: "п", Pcy: "П", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", Pfr: "𝔓", phi: "φ", Phi: "Φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", Pi: "Π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", pr: "≺", Pr: "⪻", prap: "⪷", prcue: "≼", pre: "⪯", prE: "⪳", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", Pscr: "𝒫", psi: "ψ", Psi: "Ψ", puncsp: " ", qfr: "𝔮", Qfr: "𝔔", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", qscr: "𝓆", Qscr: "𝒬", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", racute: "ŕ", Racute: "Ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarr: "→", rArr: "⇒", Rarr: "↠", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", Rarrtl: "⤖", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", Rcaron: "Ř", rcedil: "ŗ", Rcedil: "Ŗ", rceil: "⌉", rcub: "}", rcy: "р", Rcy: "Р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", Rho: "Ρ", rhov: "ϱ", RightAngleBracket: "⟩", rightarrow: "→", Rightarrow: "⇒", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", sacute: "ś", Sacute: "Ś", sbquo: "‚", sc: "≻", Sc: "⪼", scap: "⪸", scaron: "š", Scaron: "Š", sccue: "≽", sce: "⪰", scE: "⪴", scedil: "ş", Scedil: "Ş", scirc: "ŝ", Scirc: "Ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", Scy: "С", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", Sfr: "𝔖", sfrown: "⌢", sharp: "♯", shchcy: "щ", SHCHcy: "Щ", shcy: "ш", SHcy: "Ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", sigma: "σ", Sigma: "Σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", SOFTcy: "Ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", Sopf: "𝕊", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", Sscr: "𝒮", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", Star: "⋆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", sube: "⊆", subE: "⫅", subedot: "⫃", submult: "⫁", subne: "⊊", subnE: "⫋", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup: "⊃", Sup: "⋑", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supe: "⊇", supE: "⫆", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supne: "⊋", supnE: "⫌", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", tau: "τ", Tau: "Τ", tbrk: "⎴", tcaron: "ť", Tcaron: "Ť", tcedil: "ţ", Tcedil: "Ţ", tcy: "т", Tcy: "Т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", Tfr: "𝔗", there4: "∴", therefore: "∴", Therefore: "∴", theta: "θ", Theta: "Θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", thorn: "þ", THORN: "Þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", Topf: "𝕋", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", Tscr: "𝒯", tscy: "ц", TScy: "Ц", tshcy: "ћ", TSHcy: "Ћ", tstrok: "ŧ", Tstrok: "Ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uacute: "ú", Uacute: "Ú", uarr: "↑", uArr: "⇑", Uarr: "↟", Uarrocir: "⥉", ubrcy: "ў", Ubrcy: "Ў", ubreve: "ŭ", Ubreve: "Ŭ", ucirc: "û", Ucirc: "Û", ucy: "у", Ucy: "У", udarr: "⇅", udblac: "ű", Udblac: "Ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", Ufr: "𝔘", ugrave: "ù", Ugrave: "Ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", Umacr: "Ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", uogon: "ų", Uogon: "Ų", uopf: "𝕦", Uopf: "𝕌", uparrow: "↑", Uparrow: "⇑", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", updownarrow: "↕", Updownarrow: "⇕", UpDownArrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", upsilon: "υ", Upsilon: "Υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", Uring: "Ů", urtri: "◹", uscr: "𝓊", Uscr: "𝒰", utdot: "⋰", utilde: "ũ", Utilde: "Ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uuml: "ü", Uuml: "Ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", vcy: "в", Vcy: "В", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", vee: "∨", Vee: "⋁", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", vfr: "𝔳", Vfr: "𝔙", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", Vopf: "𝕍", vprop: "∝", vrtri: "⊳", vscr: "𝓋", Vscr: "𝒱", vsubne: "⊊︀", vsubnE: "⫋︀", vsupne: "⊋︀", vsupnE: "⫌︀", Vvdash: "⊪", vzigzag: "⦚", wcirc: "ŵ", Wcirc: "Ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", wfr: "𝔴", Wfr: "𝔚", wopf: "𝕨", Wopf: "𝕎", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", Wscr: "𝒲", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", Xfr: "𝔛", xharr: "⟷", xhArr: "⟺", xi: "ξ", Xi: "Ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", Xopf: "𝕏", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", xscr: "𝓍", Xscr: "𝒳", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacute: "ý", Yacute: "Ý", yacy: "я", YAcy: "Я", ycirc: "ŷ", Ycirc: "Ŷ", ycy: "ы", Ycy: "Ы", yen: "¥", yfr: "𝔶", Yfr: "𝔜", yicy: "ї", YIcy: "Ї", yopf: "𝕪", Yopf: "𝕐", yscr: "𝓎", Yscr: "𝒴", yucy: "ю", YUcy: "Ю", yuml: "ÿ", Yuml: "Ÿ", zacute: "ź", Zacute: "Ź", zcaron: "ž", Zcaron: "Ž", zcy: "з", Zcy: "З", zdot: "ż", Zdot: "Ż", zeetrf: "ℨ", ZeroWidthSpace: "​", zeta: "ζ", Zeta: "Ζ", zfr: "𝔷", Zfr: "ℨ", zhcy: "ж", ZHcy: "Ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", zscr: "𝓏", Zscr: "𝒵", zwj: "‍", zwnj: "‌" }, S = { aacute: "á", Aacute: "Á", acirc: "â", Acirc: "Â", acute: "´", aelig: "æ", AElig: "Æ", agrave: "à", Agrave: "À", amp: "&", AMP: "&", aring: "å", Aring: "Å", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", brvbar: "¦", ccedil: "ç", Ccedil: "Ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", Eacute: "É", ecirc: "ê", Ecirc: "Ê", egrave: "è", Egrave: "È", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", iacute: "í", Iacute: "Í", icirc: "î", Icirc: "Î", iexcl: "¡", igrave: "ì", Igrave: "Ì", iquest: "¿", iuml: "ï", Iuml: "Ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", Ntilde: "Ñ", oacute: "ó", Oacute: "Ó", ocirc: "ô", Ocirc: "Ô", ograve: "ò", Ograve: "Ò", ordf: "ª", ordm: "º", oslash: "ø", Oslash: "Ø", otilde: "õ", Otilde: "Õ", ouml: "ö", Ouml: "Ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", THORN: "Þ", times: "×", uacute: "ú", Uacute: "Ú", ucirc: "û", Ucirc: "Û", ugrave: "ù", Ugrave: "Ù", uml: "¨", uuml: "ü", Uuml: "Ü", yacute: "ý", Yacute: "Ý", yen: "¥", yuml: "ÿ" }, A = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" }, F = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111], E = String.fromCharCode, L = {}, z = L.hasOwnProperty, P = function(M, G) {
      return z.call(M, G);
    }, I = function(M, G) {
      for (var te = -1, he = M.length; ++te < he; )
        if (M[te] == G)
          return !0;
      return !1;
    }, N = function(M, G) {
      if (!M)
        return G;
      var te = {}, he;
      for (he in G)
        te[he] = P(M, he) ? M[he] : G[he];
      return te;
    }, K = function(M, G) {
      var te = "";
      return M >= 55296 && M <= 57343 || M > 1114111 ? (G && ne("character reference outside the permissible Unicode range"), "�") : P(A, M) ? (G && ne("disallowed character reference"), A[M]) : (G && I(F, M) && ne("disallowed character reference"), M > 65535 && (M -= 65536, te += E(M >>> 10 & 1023 | 55296), M = 56320 | M & 1023), te += E(M), te);
    }, J = function(M) {
      return "&#x" + M.toString(16).toUpperCase() + ";";
    }, X = function(M) {
      return "&#" + M + ";";
    }, ne = function(M) {
      throw Error("Parse error: " + M);
    }, ce = function(M, G) {
      G = N(G, ce.options);
      var te = G.strict;
      te && C.test(M) && ne("forbidden code point");
      var he = G.encodeEverything, ue = G.useNamedReferences, Me = G.allowUnsafeSymbols, Le = G.decimal ? X : J, xt = function(Je) {
        return Le(Je.charCodeAt(0));
      };
      return he ? (M = M.replace(c, function(Je) {
        return ue && P(h, Je) ? "&" + h[Je] + ";" : xt(Je);
      }), ue && (M = M.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), ue && (M = M.replace(p, function(Je) {
        return "&" + h[Je] + ";";
      }))) : ue ? (Me || (M = M.replace(m, function(Je) {
        return "&" + h[Je] + ";";
      })), M = M.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), M = M.replace(p, function(Je) {
        return "&" + h[Je] + ";";
      })) : Me || (M = M.replace(m, xt)), M.replace(u, function(Je) {
        var Nt = Je.charCodeAt(0), Ct = Je.charCodeAt(1), Ot = (Nt - 55296) * 1024 + Ct - 56320 + 65536;
        return Le(Ot);
      }).replace(d, xt);
    };
    ce.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1
    };
    var be = function(M, G) {
      G = N(G, be.options);
      var te = G.strict;
      return te && v.test(M) && ne("malformed character reference"), M.replace(k, function(he, ue, Me, Le, xt, Je, Nt, Ct, Ot) {
        var nt, Tr, Tn, Dt, vr, Ki;
        return ue ? (vr = ue, x[vr]) : Me ? (vr = Me, Ki = Le, Ki && G.isAttributeValue ? (te && Ki == "=" && ne("`&` did not start a character reference"), he) : (te && ne(
          "named character reference was not terminated by a semicolon"
        ), S[vr] + (Ki || ""))) : xt ? (Tn = xt, Tr = Je, te && !Tr && ne("character reference was not terminated by a semicolon"), nt = parseInt(Tn, 10), K(nt, te)) : Nt ? (Dt = Nt, Tr = Ct, te && !Tr && ne("character reference was not terminated by a semicolon"), nt = parseInt(Dt, 16), K(nt, te)) : (te && ne(
          "named character reference was not terminated by a semicolon"
        ), he);
      });
    };
    be.options = {
      isAttributeValue: !1,
      strict: !1
    };
    var ve = function(M) {
      return M.replace(m, function(G) {
        return b[G];
      });
    }, re = {
      version: "1.2.0",
      encode: ce,
      decode: be,
      escape: ve,
      unescape: be
    };
    if (i && !i.nodeType)
      if (a)
        a.exports = re;
      else
        for (var $ in re)
          P(re, $) && (i[$] = re[$]);
    else
      t.he = re;
  })(ui);
})(Go, Go.exports);
var hk = Go.exports;
const gk = /* @__PURE__ */ G5(hk);
var Yo = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Yo.exports;
(function(n, e) {
  (function() {
    var t, i = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", c = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", m = 1, b = 2, v = 4, C = 1, k = 2, x = 1, S = 2, A = 4, F = 8, E = 16, L = 32, z = 64, P = 128, I = 256, N = 512, K = 30, J = "...", X = 800, ne = 16, ce = 1, be = 2, ve = 3, re = 1 / 0, $ = 9007199254740991, M = 17976931348623157e292, G = 0 / 0, te = 4294967295, he = te - 1, ue = te >>> 1, Me = [
      ["ary", P],
      ["bind", x],
      ["bindKey", S],
      ["curry", F],
      ["curryRight", E],
      ["flip", N],
      ["partial", L],
      ["partialRight", z],
      ["rearg", I]
    ], Le = "[object Arguments]", xt = "[object Array]", Je = "[object AsyncFunction]", Nt = "[object Boolean]", Ct = "[object Date]", Ot = "[object DOMException]", nt = "[object Error]", Tr = "[object Function]", Tn = "[object GeneratorFunction]", Dt = "[object Map]", vr = "[object Number]", Ki = "[object Null]", Rr = "[object Object]", Xl = "[object Promise]", Ih = "[object Proxy]", Rn = "[object RegExp]", dr = "[object Set]", Pn = "[object String]", za = "[object Symbol]", qh = "[object Undefined]", zn = "[object WeakMap]", Mh = "[object WeakSet]", Nn = "[object ArrayBuffer]", Wi = "[object DataView]", cs = "[object Float32Array]", ds = "[object Float64Array]", ps = "[object Int8Array]", fs = "[object Int16Array]", hs = "[object Int32Array]", gs = "[object Uint8Array]", ms = "[object Uint8ClampedArray]", _s = "[object Uint16Array]", bs = "[object Uint32Array]", Uh = /\b__p \+= '';/g, Vh = /\b(__p \+=) '' \+/g, Hh = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ql = /&(?:amp|lt|gt|quot|#39);/g, ec = /[&<>"']/g, $h = RegExp(Ql.source), jh = RegExp(ec.source), Kh = /<%-([\s\S]+?)%>/g, Wh = /<%([\s\S]+?)%>/g, tc = /<%=([\s\S]+?)%>/g, Gh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Yh = /^\w*$/, Jh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vs = /[\\^$.*+?()[\]{}|]/g, Zh = RegExp(vs.source), ys = /^\s+/, Xh = /\s/, Qh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, e1 = /\{\n\/\* \[wrapped with (.+)\] \*/, t1 = /,? & /, r1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, i1 = /[()=,{}\[\]\/\s]/, n1 = /\\(\\)?/g, a1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, rc = /\w*$/, o1 = /^[-+]0x[0-9a-f]+$/i, s1 = /^0b[01]+$/i, u1 = /^\[object .+?Constructor\]$/, l1 = /^0o[0-7]+$/i, c1 = /^(?:0|[1-9]\d*)$/, d1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Na = /($^)/, p1 = /['\n\r\u2028\u2029\\]/g, Oa = "\\ud800-\\udfff", f1 = "\\u0300-\\u036f", h1 = "\\ufe20-\\ufe2f", g1 = "\\u20d0-\\u20ff", ic = f1 + h1 + g1, nc = "\\u2700-\\u27bf", ac = "a-z\\xdf-\\xf6\\xf8-\\xff", m1 = "\\xac\\xb1\\xd7\\xf7", _1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", b1 = "\\u2000-\\u206f", v1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", oc = "A-Z\\xc0-\\xd6\\xd8-\\xde", sc = "\\ufe0e\\ufe0f", uc = m1 + _1 + b1 + v1, ks = "['’]", y1 = "[" + Oa + "]", lc = "[" + uc + "]", Ia = "[" + ic + "]", cc = "\\d+", k1 = "[" + nc + "]", dc = "[" + ac + "]", pc = "[^" + Oa + uc + cc + nc + ac + oc + "]", ws = "\\ud83c[\\udffb-\\udfff]", w1 = "(?:" + Ia + "|" + ws + ")", fc = "[^" + Oa + "]", xs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Cs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Gi = "[" + oc + "]", hc = "\\u200d", gc = "(?:" + dc + "|" + pc + ")", x1 = "(?:" + Gi + "|" + pc + ")", mc = "(?:" + ks + "(?:d|ll|m|re|s|t|ve))?", _c = "(?:" + ks + "(?:D|LL|M|RE|S|T|VE))?", bc = w1 + "?", vc = "[" + sc + "]?", C1 = "(?:" + hc + "(?:" + [fc, xs, Cs].join("|") + ")" + vc + bc + ")*", D1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", A1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", yc = vc + bc + C1, S1 = "(?:" + [k1, xs, Cs].join("|") + ")" + yc, E1 = "(?:" + [fc + Ia + "?", Ia, xs, Cs, y1].join("|") + ")", B1 = RegExp(ks, "g"), F1 = RegExp(Ia, "g"), Ds = RegExp(ws + "(?=" + ws + ")|" + E1 + yc, "g"), L1 = RegExp([
      Gi + "?" + dc + "+" + mc + "(?=" + [lc, Gi, "$"].join("|") + ")",
      x1 + "+" + _c + "(?=" + [lc, Gi + gc, "$"].join("|") + ")",
      Gi + "?" + gc + "+" + mc,
      Gi + "+" + _c,
      A1,
      D1,
      cc,
      S1
    ].join("|"), "g"), T1 = RegExp("[" + hc + Oa + ic + sc + "]"), R1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, P1 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], z1 = -1, Ie = {};
    Ie[cs] = Ie[ds] = Ie[ps] = Ie[fs] = Ie[hs] = Ie[gs] = Ie[ms] = Ie[_s] = Ie[bs] = !0, Ie[Le] = Ie[xt] = Ie[Nn] = Ie[Nt] = Ie[Wi] = Ie[Ct] = Ie[nt] = Ie[Tr] = Ie[Dt] = Ie[vr] = Ie[Rr] = Ie[Rn] = Ie[dr] = Ie[Pn] = Ie[zn] = !1;
    var Ne = {};
    Ne[Le] = Ne[xt] = Ne[Nn] = Ne[Wi] = Ne[Nt] = Ne[Ct] = Ne[cs] = Ne[ds] = Ne[ps] = Ne[fs] = Ne[hs] = Ne[Dt] = Ne[vr] = Ne[Rr] = Ne[Rn] = Ne[dr] = Ne[Pn] = Ne[za] = Ne[gs] = Ne[ms] = Ne[_s] = Ne[bs] = !0, Ne[nt] = Ne[Tr] = Ne[zn] = !1;
    var N1 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, O1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, I1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, q1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, M1 = parseFloat, U1 = parseInt, kc = typeof ui == "object" && ui && ui.Object === Object && ui, V1 = typeof self == "object" && self && self.Object === Object && self, lt = kc || V1 || Function("return this")(), As = e && !e.nodeType && e, yi = As && !0 && n && !n.nodeType && n, wc = yi && yi.exports === As, Ss = wc && kc.process, Qt = function() {
      try {
        var T = yi && yi.require && yi.require("util").types;
        return T || Ss && Ss.binding && Ss.binding("util");
      } catch {
      }
    }(), xc = Qt && Qt.isArrayBuffer, Cc = Qt && Qt.isDate, Dc = Qt && Qt.isMap, Ac = Qt && Qt.isRegExp, Sc = Qt && Qt.isSet, Ec = Qt && Qt.isTypedArray;
    function It(T, q, O) {
      switch (O.length) {
        case 0:
          return T.call(q);
        case 1:
          return T.call(q, O[0]);
        case 2:
          return T.call(q, O[0], O[1]);
        case 3:
          return T.call(q, O[0], O[1], O[2]);
      }
      return T.apply(q, O);
    }
    function H1(T, q, O, Z) {
      for (var de = -1, Ae = T == null ? 0 : T.length; ++de < Ae; ) {
        var at = T[de];
        q(Z, at, O(at), T);
      }
      return Z;
    }
    function er(T, q) {
      for (var O = -1, Z = T == null ? 0 : T.length; ++O < Z && q(T[O], O, T) !== !1; )
        ;
      return T;
    }
    function $1(T, q) {
      for (var O = T == null ? 0 : T.length; O-- && q(T[O], O, T) !== !1; )
        ;
      return T;
    }
    function Bc(T, q) {
      for (var O = -1, Z = T == null ? 0 : T.length; ++O < Z; )
        if (!q(T[O], O, T))
          return !1;
      return !0;
    }
    function Zr(T, q) {
      for (var O = -1, Z = T == null ? 0 : T.length, de = 0, Ae = []; ++O < Z; ) {
        var at = T[O];
        q(at, O, T) && (Ae[de++] = at);
      }
      return Ae;
    }
    function qa(T, q) {
      var O = T == null ? 0 : T.length;
      return !!O && Yi(T, q, 0) > -1;
    }
    function Es(T, q, O) {
      for (var Z = -1, de = T == null ? 0 : T.length; ++Z < de; )
        if (O(q, T[Z]))
          return !0;
      return !1;
    }
    function Ue(T, q) {
      for (var O = -1, Z = T == null ? 0 : T.length, de = Array(Z); ++O < Z; )
        de[O] = q(T[O], O, T);
      return de;
    }
    function Xr(T, q) {
      for (var O = -1, Z = q.length, de = T.length; ++O < Z; )
        T[de + O] = q[O];
      return T;
    }
    function Bs(T, q, O, Z) {
      var de = -1, Ae = T == null ? 0 : T.length;
      for (Z && Ae && (O = T[++de]); ++de < Ae; )
        O = q(O, T[de], de, T);
      return O;
    }
    function j1(T, q, O, Z) {
      var de = T == null ? 0 : T.length;
      for (Z && de && (O = T[--de]); de--; )
        O = q(O, T[de], de, T);
      return O;
    }
    function Fs(T, q) {
      for (var O = -1, Z = T == null ? 0 : T.length; ++O < Z; )
        if (q(T[O], O, T))
          return !0;
      return !1;
    }
    var K1 = Ls("length");
    function W1(T) {
      return T.split("");
    }
    function G1(T) {
      return T.match(r1) || [];
    }
    function Fc(T, q, O) {
      var Z;
      return O(T, function(de, Ae, at) {
        if (q(de, Ae, at))
          return Z = Ae, !1;
      }), Z;
    }
    function Ma(T, q, O, Z) {
      for (var de = T.length, Ae = O + (Z ? 1 : -1); Z ? Ae-- : ++Ae < de; )
        if (q(T[Ae], Ae, T))
          return Ae;
      return -1;
    }
    function Yi(T, q, O) {
      return q === q ? og(T, q, O) : Ma(T, Lc, O);
    }
    function Y1(T, q, O, Z) {
      for (var de = O - 1, Ae = T.length; ++de < Ae; )
        if (Z(T[de], q))
          return de;
      return -1;
    }
    function Lc(T) {
      return T !== T;
    }
    function Tc(T, q) {
      var O = T == null ? 0 : T.length;
      return O ? Rs(T, q) / O : G;
    }
    function Ls(T) {
      return function(q) {
        return q == null ? t : q[T];
      };
    }
    function Ts(T) {
      return function(q) {
        return T == null ? t : T[q];
      };
    }
    function Rc(T, q, O, Z, de) {
      return de(T, function(Ae, at, Te) {
        O = Z ? (Z = !1, Ae) : q(O, Ae, at, Te);
      }), O;
    }
    function J1(T, q) {
      var O = T.length;
      for (T.sort(q); O--; )
        T[O] = T[O].value;
      return T;
    }
    function Rs(T, q) {
      for (var O, Z = -1, de = T.length; ++Z < de; ) {
        var Ae = q(T[Z]);
        Ae !== t && (O = O === t ? Ae : O + Ae);
      }
      return O;
    }
    function Ps(T, q) {
      for (var O = -1, Z = Array(T); ++O < T; )
        Z[O] = q(O);
      return Z;
    }
    function Z1(T, q) {
      return Ue(q, function(O) {
        return [O, T[O]];
      });
    }
    function Pc(T) {
      return T && T.slice(0, Ic(T) + 1).replace(ys, "");
    }
    function qt(T) {
      return function(q) {
        return T(q);
      };
    }
    function zs(T, q) {
      return Ue(q, function(O) {
        return T[O];
      });
    }
    function On(T, q) {
      return T.has(q);
    }
    function zc(T, q) {
      for (var O = -1, Z = T.length; ++O < Z && Yi(q, T[O], 0) > -1; )
        ;
      return O;
    }
    function Nc(T, q) {
      for (var O = T.length; O-- && Yi(q, T[O], 0) > -1; )
        ;
      return O;
    }
    function X1(T, q) {
      for (var O = T.length, Z = 0; O--; )
        T[O] === q && ++Z;
      return Z;
    }
    var Q1 = Ts(N1), eg = Ts(O1);
    function tg(T) {
      return "\\" + q1[T];
    }
    function rg(T, q) {
      return T == null ? t : T[q];
    }
    function Ji(T) {
      return T1.test(T);
    }
    function ig(T) {
      return R1.test(T);
    }
    function ng(T) {
      for (var q, O = []; !(q = T.next()).done; )
        O.push(q.value);
      return O;
    }
    function Ns(T) {
      var q = -1, O = Array(T.size);
      return T.forEach(function(Z, de) {
        O[++q] = [de, Z];
      }), O;
    }
    function Oc(T, q) {
      return function(O) {
        return T(q(O));
      };
    }
    function Qr(T, q) {
      for (var O = -1, Z = T.length, de = 0, Ae = []; ++O < Z; ) {
        var at = T[O];
        (at === q || at === h) && (T[O] = h, Ae[de++] = O);
      }
      return Ae;
    }
    function Ua(T) {
      var q = -1, O = Array(T.size);
      return T.forEach(function(Z) {
        O[++q] = Z;
      }), O;
    }
    function ag(T) {
      var q = -1, O = Array(T.size);
      return T.forEach(function(Z) {
        O[++q] = [Z, Z];
      }), O;
    }
    function og(T, q, O) {
      for (var Z = O - 1, de = T.length; ++Z < de; )
        if (T[Z] === q)
          return Z;
      return -1;
    }
    function sg(T, q, O) {
      for (var Z = O + 1; Z--; )
        if (T[Z] === q)
          return Z;
      return Z;
    }
    function Zi(T) {
      return Ji(T) ? lg(T) : K1(T);
    }
    function pr(T) {
      return Ji(T) ? cg(T) : W1(T);
    }
    function Ic(T) {
      for (var q = T.length; q-- && Xh.test(T.charAt(q)); )
        ;
      return q;
    }
    var ug = Ts(I1);
    function lg(T) {
      for (var q = Ds.lastIndex = 0; Ds.test(T); )
        ++q;
      return q;
    }
    function cg(T) {
      return T.match(Ds) || [];
    }
    function dg(T) {
      return T.match(L1) || [];
    }
    var pg = function T(q) {
      q = q == null ? lt : Xi.defaults(lt.Object(), q, Xi.pick(lt, P1));
      var O = q.Array, Z = q.Date, de = q.Error, Ae = q.Function, at = q.Math, Te = q.Object, Os = q.RegExp, fg = q.String, tr = q.TypeError, Va = O.prototype, hg = Ae.prototype, Qi = Te.prototype, Ha = q["__core-js_shared__"], $a = hg.toString, Be = Qi.hasOwnProperty, gg = 0, qc = function() {
        var r = /[^.]+$/.exec(Ha && Ha.keys && Ha.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), ja = Qi.toString, mg = $a.call(Te), _g = lt._, bg = Os(
        "^" + $a.call(Be).replace(vs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ka = wc ? q.Buffer : t, ei = q.Symbol, Wa = q.Uint8Array, Mc = Ka ? Ka.allocUnsafe : t, Ga = Oc(Te.getPrototypeOf, Te), Uc = Te.create, Vc = Qi.propertyIsEnumerable, Ya = Va.splice, Hc = ei ? ei.isConcatSpreadable : t, In = ei ? ei.iterator : t, ki = ei ? ei.toStringTag : t, Ja = function() {
        try {
          var r = Ai(Te, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), vg = q.clearTimeout !== lt.clearTimeout && q.clearTimeout, yg = Z && Z.now !== lt.Date.now && Z.now, kg = q.setTimeout !== lt.setTimeout && q.setTimeout, Za = at.ceil, Xa = at.floor, Is = Te.getOwnPropertySymbols, wg = Ka ? Ka.isBuffer : t, $c = q.isFinite, xg = Va.join, Cg = Oc(Te.keys, Te), ot = at.max, ft = at.min, Dg = Z.now, Ag = q.parseInt, jc = at.random, Sg = Va.reverse, qs = Ai(q, "DataView"), qn = Ai(q, "Map"), Ms = Ai(q, "Promise"), en = Ai(q, "Set"), Mn = Ai(q, "WeakMap"), Un = Ai(Te, "create"), Qa = Mn && new Mn(), tn = {}, Eg = Si(qs), Bg = Si(qn), Fg = Si(Ms), Lg = Si(en), Tg = Si(Mn), eo = ei ? ei.prototype : t, Vn = eo ? eo.valueOf : t, Kc = eo ? eo.toString : t;
      function y(r) {
        if (Ge(r) && !pe(r) && !(r instanceof xe)) {
          if (r instanceof rr)
            return r;
          if (Be.call(r, "__wrapped__"))
            return Wd(r);
        }
        return new rr(r);
      }
      var rn = function() {
        function r() {
        }
        return function(o) {
          if (!$e(o))
            return {};
          if (Uc)
            return Uc(o);
          r.prototype = o;
          var l = new r();
          return r.prototype = t, l;
        };
      }();
      function to() {
      }
      function rr(r, o) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = t;
      }
      y.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Kh,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Wh,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: tc,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: y
        }
      }, y.prototype = to.prototype, y.prototype.constructor = y, rr.prototype = rn(to.prototype), rr.prototype.constructor = rr;
      function xe(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = te, this.__views__ = [];
      }
      function Rg() {
        var r = new xe(this.__wrapped__);
        return r.__actions__ = At(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = At(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = At(this.__views__), r;
      }
      function Pg() {
        if (this.__filtered__) {
          var r = new xe(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function zg() {
        var r = this.__wrapped__.value(), o = this.__dir__, l = pe(r), f = o < 0, _ = l ? r.length : 0, w = W0(0, _, this.__views__), D = w.start, B = w.end, R = B - D, U = f ? B : D - 1, V = this.__iteratees__, H = V.length, W = 0, ee = ft(R, this.__takeCount__);
        if (!l || !f && _ == R && ee == R)
          return md(r, this.__actions__);
        var oe = [];
        e:
          for (; R-- && W < ee; ) {
            U += o;
            for (var _e = -1, se = r[U]; ++_e < H; ) {
              var we = V[_e], Ce = we.iteratee, Vt = we.type, kt = Ce(se);
              if (Vt == be)
                se = kt;
              else if (!kt) {
                if (Vt == ce)
                  continue e;
                break e;
              }
            }
            oe[W++] = se;
          }
        return oe;
      }
      xe.prototype = rn(to.prototype), xe.prototype.constructor = xe;
      function wi(r) {
        var o = -1, l = r == null ? 0 : r.length;
        for (this.clear(); ++o < l; ) {
          var f = r[o];
          this.set(f[0], f[1]);
        }
      }
      function Ng() {
        this.__data__ = Un ? Un(null) : {}, this.size = 0;
      }
      function Og(r) {
        var o = this.has(r) && delete this.__data__[r];
        return this.size -= o ? 1 : 0, o;
      }
      function Ig(r) {
        var o = this.__data__;
        if (Un) {
          var l = o[r];
          return l === d ? t : l;
        }
        return Be.call(o, r) ? o[r] : t;
      }
      function qg(r) {
        var o = this.__data__;
        return Un ? o[r] !== t : Be.call(o, r);
      }
      function Mg(r, o) {
        var l = this.__data__;
        return this.size += this.has(r) ? 0 : 1, l[r] = Un && o === t ? d : o, this;
      }
      wi.prototype.clear = Ng, wi.prototype.delete = Og, wi.prototype.get = Ig, wi.prototype.has = qg, wi.prototype.set = Mg;
      function Pr(r) {
        var o = -1, l = r == null ? 0 : r.length;
        for (this.clear(); ++o < l; ) {
          var f = r[o];
          this.set(f[0], f[1]);
        }
      }
      function Ug() {
        this.__data__ = [], this.size = 0;
      }
      function Vg(r) {
        var o = this.__data__, l = ro(o, r);
        if (l < 0)
          return !1;
        var f = o.length - 1;
        return l == f ? o.pop() : Ya.call(o, l, 1), --this.size, !0;
      }
      function Hg(r) {
        var o = this.__data__, l = ro(o, r);
        return l < 0 ? t : o[l][1];
      }
      function $g(r) {
        return ro(this.__data__, r) > -1;
      }
      function jg(r, o) {
        var l = this.__data__, f = ro(l, r);
        return f < 0 ? (++this.size, l.push([r, o])) : l[f][1] = o, this;
      }
      Pr.prototype.clear = Ug, Pr.prototype.delete = Vg, Pr.prototype.get = Hg, Pr.prototype.has = $g, Pr.prototype.set = jg;
      function zr(r) {
        var o = -1, l = r == null ? 0 : r.length;
        for (this.clear(); ++o < l; ) {
          var f = r[o];
          this.set(f[0], f[1]);
        }
      }
      function Kg() {
        this.size = 0, this.__data__ = {
          hash: new wi(),
          map: new (qn || Pr)(),
          string: new wi()
        };
      }
      function Wg(r) {
        var o = go(this, r).delete(r);
        return this.size -= o ? 1 : 0, o;
      }
      function Gg(r) {
        return go(this, r).get(r);
      }
      function Yg(r) {
        return go(this, r).has(r);
      }
      function Jg(r, o) {
        var l = go(this, r), f = l.size;
        return l.set(r, o), this.size += l.size == f ? 0 : 1, this;
      }
      zr.prototype.clear = Kg, zr.prototype.delete = Wg, zr.prototype.get = Gg, zr.prototype.has = Yg, zr.prototype.set = Jg;
      function xi(r) {
        var o = -1, l = r == null ? 0 : r.length;
        for (this.__data__ = new zr(); ++o < l; )
          this.add(r[o]);
      }
      function Zg(r) {
        return this.__data__.set(r, d), this;
      }
      function Xg(r) {
        return this.__data__.has(r);
      }
      xi.prototype.add = xi.prototype.push = Zg, xi.prototype.has = Xg;
      function fr(r) {
        var o = this.__data__ = new Pr(r);
        this.size = o.size;
      }
      function Qg() {
        this.__data__ = new Pr(), this.size = 0;
      }
      function e0(r) {
        var o = this.__data__, l = o.delete(r);
        return this.size = o.size, l;
      }
      function t0(r) {
        return this.__data__.get(r);
      }
      function r0(r) {
        return this.__data__.has(r);
      }
      function i0(r, o) {
        var l = this.__data__;
        if (l instanceof Pr) {
          var f = l.__data__;
          if (!qn || f.length < a - 1)
            return f.push([r, o]), this.size = ++l.size, this;
          l = this.__data__ = new zr(f);
        }
        return l.set(r, o), this.size = l.size, this;
      }
      fr.prototype.clear = Qg, fr.prototype.delete = e0, fr.prototype.get = t0, fr.prototype.has = r0, fr.prototype.set = i0;
      function Wc(r, o) {
        var l = pe(r), f = !l && Ei(r), _ = !l && !f && ai(r), w = !l && !f && !_ && sn(r), D = l || f || _ || w, B = D ? Ps(r.length, fg) : [], R = B.length;
        for (var U in r)
          (o || Be.call(r, U)) && !(D && // Safari 9 has enumerable `arguments.length` in strict mode.
          (U == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          _ && (U == "offset" || U == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          w && (U == "buffer" || U == "byteLength" || U == "byteOffset") || // Skip index properties.
          qr(U, R))) && B.push(U);
        return B;
      }
      function Gc(r) {
        var o = r.length;
        return o ? r[Zs(0, o - 1)] : t;
      }
      function n0(r, o) {
        return mo(At(r), Ci(o, 0, r.length));
      }
      function a0(r) {
        return mo(At(r));
      }
      function Us(r, o, l) {
        (l !== t && !hr(r[o], l) || l === t && !(o in r)) && Nr(r, o, l);
      }
      function Hn(r, o, l) {
        var f = r[o];
        (!(Be.call(r, o) && hr(f, l)) || l === t && !(o in r)) && Nr(r, o, l);
      }
      function ro(r, o) {
        for (var l = r.length; l--; )
          if (hr(r[l][0], o))
            return l;
        return -1;
      }
      function o0(r, o, l, f) {
        return ti(r, function(_, w, D) {
          o(f, _, l(_), D);
        }), f;
      }
      function Yc(r, o) {
        return r && kr(o, st(o), r);
      }
      function s0(r, o) {
        return r && kr(o, Et(o), r);
      }
      function Nr(r, o, l) {
        o == "__proto__" && Ja ? Ja(r, o, {
          configurable: !0,
          enumerable: !0,
          value: l,
          writable: !0
        }) : r[o] = l;
      }
      function Vs(r, o) {
        for (var l = -1, f = o.length, _ = O(f), w = r == null; ++l < f; )
          _[l] = w ? t : wu(r, o[l]);
        return _;
      }
      function Ci(r, o, l) {
        return r === r && (l !== t && (r = r <= l ? r : l), o !== t && (r = r >= o ? r : o)), r;
      }
      function ir(r, o, l, f, _, w) {
        var D, B = o & m, R = o & b, U = o & v;
        if (l && (D = _ ? l(r, f, _, w) : l(r)), D !== t)
          return D;
        if (!$e(r))
          return r;
        var V = pe(r);
        if (V) {
          if (D = Y0(r), !B)
            return At(r, D);
        } else {
          var H = ht(r), W = H == Tr || H == Tn;
          if (ai(r))
            return vd(r, B);
          if (H == Rr || H == Le || W && !_) {
            if (D = R || W ? {} : Id(r), !B)
              return R ? I0(r, s0(D, r)) : O0(r, Yc(D, r));
          } else {
            if (!Ne[H])
              return _ ? r : {};
            D = J0(r, H, B);
          }
        }
        w || (w = new fr());
        var ee = w.get(r);
        if (ee)
          return ee;
        w.set(r, D), fp(r) ? r.forEach(function(se) {
          D.add(ir(se, o, l, se, r, w));
        }) : dp(r) && r.forEach(function(se, we) {
          D.set(we, ir(se, o, l, we, r, w));
        });
        var oe = U ? R ? uu : su : R ? Et : st, _e = V ? t : oe(r);
        return er(_e || r, function(se, we) {
          _e && (we = se, se = r[we]), Hn(D, we, ir(se, o, l, we, r, w));
        }), D;
      }
      function u0(r) {
        var o = st(r);
        return function(l) {
          return Jc(l, r, o);
        };
      }
      function Jc(r, o, l) {
        var f = l.length;
        if (r == null)
          return !f;
        for (r = Te(r); f--; ) {
          var _ = l[f], w = o[_], D = r[_];
          if (D === t && !(_ in r) || !w(D))
            return !1;
        }
        return !0;
      }
      function Zc(r, o, l) {
        if (typeof r != "function")
          throw new tr(u);
        return Jn(function() {
          r.apply(t, l);
        }, o);
      }
      function $n(r, o, l, f) {
        var _ = -1, w = qa, D = !0, B = r.length, R = [], U = o.length;
        if (!B)
          return R;
        l && (o = Ue(o, qt(l))), f ? (w = Es, D = !1) : o.length >= a && (w = On, D = !1, o = new xi(o));
        e:
          for (; ++_ < B; ) {
            var V = r[_], H = l == null ? V : l(V);
            if (V = f || V !== 0 ? V : 0, D && H === H) {
              for (var W = U; W--; )
                if (o[W] === H)
                  continue e;
              R.push(V);
            } else
              w(o, H, f) || R.push(V);
          }
        return R;
      }
      var ti = Cd(yr), Xc = Cd($s, !0);
      function l0(r, o) {
        var l = !0;
        return ti(r, function(f, _, w) {
          return l = !!o(f, _, w), l;
        }), l;
      }
      function io(r, o, l) {
        for (var f = -1, _ = r.length; ++f < _; ) {
          var w = r[f], D = o(w);
          if (D != null && (B === t ? D === D && !Ut(D) : l(D, B)))
            var B = D, R = w;
        }
        return R;
      }
      function c0(r, o, l, f) {
        var _ = r.length;
        for (l = ge(l), l < 0 && (l = -l > _ ? 0 : _ + l), f = f === t || f > _ ? _ : ge(f), f < 0 && (f += _), f = l > f ? 0 : gp(f); l < f; )
          r[l++] = o;
        return r;
      }
      function Qc(r, o) {
        var l = [];
        return ti(r, function(f, _, w) {
          o(f, _, w) && l.push(f);
        }), l;
      }
      function ct(r, o, l, f, _) {
        var w = -1, D = r.length;
        for (l || (l = X0), _ || (_ = []); ++w < D; ) {
          var B = r[w];
          o > 0 && l(B) ? o > 1 ? ct(B, o - 1, l, f, _) : Xr(_, B) : f || (_[_.length] = B);
        }
        return _;
      }
      var Hs = Dd(), ed = Dd(!0);
      function yr(r, o) {
        return r && Hs(r, o, st);
      }
      function $s(r, o) {
        return r && ed(r, o, st);
      }
      function no(r, o) {
        return Zr(o, function(l) {
          return Mr(r[l]);
        });
      }
      function Di(r, o) {
        o = ii(o, r);
        for (var l = 0, f = o.length; r != null && l < f; )
          r = r[wr(o[l++])];
        return l && l == f ? r : t;
      }
      function td(r, o, l) {
        var f = o(r);
        return pe(r) ? f : Xr(f, l(r));
      }
      function vt(r) {
        return r == null ? r === t ? qh : Ki : ki && ki in Te(r) ? K0(r) : am(r);
      }
      function js(r, o) {
        return r > o;
      }
      function d0(r, o) {
        return r != null && Be.call(r, o);
      }
      function p0(r, o) {
        return r != null && o in Te(r);
      }
      function f0(r, o, l) {
        return r >= ft(o, l) && r < ot(o, l);
      }
      function Ks(r, o, l) {
        for (var f = l ? Es : qa, _ = r[0].length, w = r.length, D = w, B = O(w), R = 1 / 0, U = []; D--; ) {
          var V = r[D];
          D && o && (V = Ue(V, qt(o))), R = ft(V.length, R), B[D] = !l && (o || _ >= 120 && V.length >= 120) ? new xi(D && V) : t;
        }
        V = r[0];
        var H = -1, W = B[0];
        e:
          for (; ++H < _ && U.length < R; ) {
            var ee = V[H], oe = o ? o(ee) : ee;
            if (ee = l || ee !== 0 ? ee : 0, !(W ? On(W, oe) : f(U, oe, l))) {
              for (D = w; --D; ) {
                var _e = B[D];
                if (!(_e ? On(_e, oe) : f(r[D], oe, l)))
                  continue e;
              }
              W && W.push(oe), U.push(ee);
            }
          }
        return U;
      }
      function h0(r, o, l, f) {
        return yr(r, function(_, w, D) {
          o(f, l(_), w, D);
        }), f;
      }
      function jn(r, o, l) {
        o = ii(o, r), r = Vd(r, o);
        var f = r == null ? r : r[wr(ar(o))];
        return f == null ? t : It(f, r, l);
      }
      function rd(r) {
        return Ge(r) && vt(r) == Le;
      }
      function g0(r) {
        return Ge(r) && vt(r) == Nn;
      }
      function m0(r) {
        return Ge(r) && vt(r) == Ct;
      }
      function Kn(r, o, l, f, _) {
        return r === o ? !0 : r == null || o == null || !Ge(r) && !Ge(o) ? r !== r && o !== o : _0(r, o, l, f, Kn, _);
      }
      function _0(r, o, l, f, _, w) {
        var D = pe(r), B = pe(o), R = D ? xt : ht(r), U = B ? xt : ht(o);
        R = R == Le ? Rr : R, U = U == Le ? Rr : U;
        var V = R == Rr, H = U == Rr, W = R == U;
        if (W && ai(r)) {
          if (!ai(o))
            return !1;
          D = !0, V = !1;
        }
        if (W && !V)
          return w || (w = new fr()), D || sn(r) ? zd(r, o, l, f, _, w) : $0(r, o, R, l, f, _, w);
        if (!(l & C)) {
          var ee = V && Be.call(r, "__wrapped__"), oe = H && Be.call(o, "__wrapped__");
          if (ee || oe) {
            var _e = ee ? r.value() : r, se = oe ? o.value() : o;
            return w || (w = new fr()), _(_e, se, l, f, w);
          }
        }
        return W ? (w || (w = new fr()), j0(r, o, l, f, _, w)) : !1;
      }
      function b0(r) {
        return Ge(r) && ht(r) == Dt;
      }
      function Ws(r, o, l, f) {
        var _ = l.length, w = _, D = !f;
        if (r == null)
          return !w;
        for (r = Te(r); _--; ) {
          var B = l[_];
          if (D && B[2] ? B[1] !== r[B[0]] : !(B[0] in r))
            return !1;
        }
        for (; ++_ < w; ) {
          B = l[_];
          var R = B[0], U = r[R], V = B[1];
          if (D && B[2]) {
            if (U === t && !(R in r))
              return !1;
          } else {
            var H = new fr();
            if (f)
              var W = f(U, V, R, r, o, H);
            if (!(W === t ? Kn(V, U, C | k, f, H) : W))
              return !1;
          }
        }
        return !0;
      }
      function id(r) {
        if (!$e(r) || em(r))
          return !1;
        var o = Mr(r) ? bg : u1;
        return o.test(Si(r));
      }
      function v0(r) {
        return Ge(r) && vt(r) == Rn;
      }
      function y0(r) {
        return Ge(r) && ht(r) == dr;
      }
      function k0(r) {
        return Ge(r) && wo(r.length) && !!Ie[vt(r)];
      }
      function nd(r) {
        return typeof r == "function" ? r : r == null ? Bt : typeof r == "object" ? pe(r) ? sd(r[0], r[1]) : od(r) : Ap(r);
      }
      function Gs(r) {
        if (!Yn(r))
          return Cg(r);
        var o = [];
        for (var l in Te(r))
          Be.call(r, l) && l != "constructor" && o.push(l);
        return o;
      }
      function w0(r) {
        if (!$e(r))
          return nm(r);
        var o = Yn(r), l = [];
        for (var f in r)
          f == "constructor" && (o || !Be.call(r, f)) || l.push(f);
        return l;
      }
      function Ys(r, o) {
        return r < o;
      }
      function ad(r, o) {
        var l = -1, f = St(r) ? O(r.length) : [];
        return ti(r, function(_, w, D) {
          f[++l] = o(_, w, D);
        }), f;
      }
      function od(r) {
        var o = cu(r);
        return o.length == 1 && o[0][2] ? Md(o[0][0], o[0][1]) : function(l) {
          return l === r || Ws(l, r, o);
        };
      }
      function sd(r, o) {
        return pu(r) && qd(o) ? Md(wr(r), o) : function(l) {
          var f = wu(l, r);
          return f === t && f === o ? xu(l, r) : Kn(o, f, C | k);
        };
      }
      function ao(r, o, l, f, _) {
        r !== o && Hs(o, function(w, D) {
          if (_ || (_ = new fr()), $e(w))
            x0(r, o, D, l, ao, f, _);
          else {
            var B = f ? f(hu(r, D), w, D + "", r, o, _) : t;
            B === t && (B = w), Us(r, D, B);
          }
        }, Et);
      }
      function x0(r, o, l, f, _, w, D) {
        var B = hu(r, l), R = hu(o, l), U = D.get(R);
        if (U) {
          Us(r, l, U);
          return;
        }
        var V = w ? w(B, R, l + "", r, o, D) : t, H = V === t;
        if (H) {
          var W = pe(R), ee = !W && ai(R), oe = !W && !ee && sn(R);
          V = R, W || ee || oe ? pe(B) ? V = B : Ze(B) ? V = At(B) : ee ? (H = !1, V = vd(R, !0)) : oe ? (H = !1, V = yd(R, !0)) : V = [] : Zn(R) || Ei(R) ? (V = B, Ei(B) ? V = mp(B) : (!$e(B) || Mr(B)) && (V = Id(R))) : H = !1;
        }
        H && (D.set(R, V), _(V, R, f, w, D), D.delete(R)), Us(r, l, V);
      }
      function ud(r, o) {
        var l = r.length;
        if (l)
          return o += o < 0 ? l : 0, qr(o, l) ? r[o] : t;
      }
      function ld(r, o, l) {
        o.length ? o = Ue(o, function(w) {
          return pe(w) ? function(D) {
            return Di(D, w.length === 1 ? w[0] : w);
          } : w;
        }) : o = [Bt];
        var f = -1;
        o = Ue(o, qt(ae()));
        var _ = ad(r, function(w, D, B) {
          var R = Ue(o, function(U) {
            return U(w);
          });
          return { criteria: R, index: ++f, value: w };
        });
        return J1(_, function(w, D) {
          return N0(w, D, l);
        });
      }
      function C0(r, o) {
        return cd(r, o, function(l, f) {
          return xu(r, f);
        });
      }
      function cd(r, o, l) {
        for (var f = -1, _ = o.length, w = {}; ++f < _; ) {
          var D = o[f], B = Di(r, D);
          l(B, D) && Wn(w, ii(D, r), B);
        }
        return w;
      }
      function D0(r) {
        return function(o) {
          return Di(o, r);
        };
      }
      function Js(r, o, l, f) {
        var _ = f ? Y1 : Yi, w = -1, D = o.length, B = r;
        for (r === o && (o = At(o)), l && (B = Ue(r, qt(l))); ++w < D; )
          for (var R = 0, U = o[w], V = l ? l(U) : U; (R = _(B, V, R, f)) > -1; )
            B !== r && Ya.call(B, R, 1), Ya.call(r, R, 1);
        return r;
      }
      function dd(r, o) {
        for (var l = r ? o.length : 0, f = l - 1; l--; ) {
          var _ = o[l];
          if (l == f || _ !== w) {
            var w = _;
            qr(_) ? Ya.call(r, _, 1) : eu(r, _);
          }
        }
        return r;
      }
      function Zs(r, o) {
        return r + Xa(jc() * (o - r + 1));
      }
      function A0(r, o, l, f) {
        for (var _ = -1, w = ot(Za((o - r) / (l || 1)), 0), D = O(w); w--; )
          D[f ? w : ++_] = r, r += l;
        return D;
      }
      function Xs(r, o) {
        var l = "";
        if (!r || o < 1 || o > $)
          return l;
        do
          o % 2 && (l += r), o = Xa(o / 2), o && (r += r);
        while (o);
        return l;
      }
      function ye(r, o) {
        return gu(Ud(r, o, Bt), r + "");
      }
      function S0(r) {
        return Gc(un(r));
      }
      function E0(r, o) {
        var l = un(r);
        return mo(l, Ci(o, 0, l.length));
      }
      function Wn(r, o, l, f) {
        if (!$e(r))
          return r;
        o = ii(o, r);
        for (var _ = -1, w = o.length, D = w - 1, B = r; B != null && ++_ < w; ) {
          var R = wr(o[_]), U = l;
          if (R === "__proto__" || R === "constructor" || R === "prototype")
            return r;
          if (_ != D) {
            var V = B[R];
            U = f ? f(V, R, B) : t, U === t && (U = $e(V) ? V : qr(o[_ + 1]) ? [] : {});
          }
          Hn(B, R, U), B = B[R];
        }
        return r;
      }
      var pd = Qa ? function(r, o) {
        return Qa.set(r, o), r;
      } : Bt, B0 = Ja ? function(r, o) {
        return Ja(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Du(o),
          writable: !0
        });
      } : Bt;
      function F0(r) {
        return mo(un(r));
      }
      function nr(r, o, l) {
        var f = -1, _ = r.length;
        o < 0 && (o = -o > _ ? 0 : _ + o), l = l > _ ? _ : l, l < 0 && (l += _), _ = o > l ? 0 : l - o >>> 0, o >>>= 0;
        for (var w = O(_); ++f < _; )
          w[f] = r[f + o];
        return w;
      }
      function L0(r, o) {
        var l;
        return ti(r, function(f, _, w) {
          return l = o(f, _, w), !l;
        }), !!l;
      }
      function oo(r, o, l) {
        var f = 0, _ = r == null ? f : r.length;
        if (typeof o == "number" && o === o && _ <= ue) {
          for (; f < _; ) {
            var w = f + _ >>> 1, D = r[w];
            D !== null && !Ut(D) && (l ? D <= o : D < o) ? f = w + 1 : _ = w;
          }
          return _;
        }
        return Qs(r, o, Bt, l);
      }
      function Qs(r, o, l, f) {
        var _ = 0, w = r == null ? 0 : r.length;
        if (w === 0)
          return 0;
        o = l(o);
        for (var D = o !== o, B = o === null, R = Ut(o), U = o === t; _ < w; ) {
          var V = Xa((_ + w) / 2), H = l(r[V]), W = H !== t, ee = H === null, oe = H === H, _e = Ut(H);
          if (D)
            var se = f || oe;
          else
            U ? se = oe && (f || W) : B ? se = oe && W && (f || !ee) : R ? se = oe && W && !ee && (f || !_e) : ee || _e ? se = !1 : se = f ? H <= o : H < o;
          se ? _ = V + 1 : w = V;
        }
        return ft(w, he);
      }
      function fd(r, o) {
        for (var l = -1, f = r.length, _ = 0, w = []; ++l < f; ) {
          var D = r[l], B = o ? o(D) : D;
          if (!l || !hr(B, R)) {
            var R = B;
            w[_++] = D === 0 ? 0 : D;
          }
        }
        return w;
      }
      function hd(r) {
        return typeof r == "number" ? r : Ut(r) ? G : +r;
      }
      function Mt(r) {
        if (typeof r == "string")
          return r;
        if (pe(r))
          return Ue(r, Mt) + "";
        if (Ut(r))
          return Kc ? Kc.call(r) : "";
        var o = r + "";
        return o == "0" && 1 / r == -re ? "-0" : o;
      }
      function ri(r, o, l) {
        var f = -1, _ = qa, w = r.length, D = !0, B = [], R = B;
        if (l)
          D = !1, _ = Es;
        else if (w >= a) {
          var U = o ? null : V0(r);
          if (U)
            return Ua(U);
          D = !1, _ = On, R = new xi();
        } else
          R = o ? [] : B;
        e:
          for (; ++f < w; ) {
            var V = r[f], H = o ? o(V) : V;
            if (V = l || V !== 0 ? V : 0, D && H === H) {
              for (var W = R.length; W--; )
                if (R[W] === H)
                  continue e;
              o && R.push(H), B.push(V);
            } else
              _(R, H, l) || (R !== B && R.push(H), B.push(V));
          }
        return B;
      }
      function eu(r, o) {
        return o = ii(o, r), r = Vd(r, o), r == null || delete r[wr(ar(o))];
      }
      function gd(r, o, l, f) {
        return Wn(r, o, l(Di(r, o)), f);
      }
      function so(r, o, l, f) {
        for (var _ = r.length, w = f ? _ : -1; (f ? w-- : ++w < _) && o(r[w], w, r); )
          ;
        return l ? nr(r, f ? 0 : w, f ? w + 1 : _) : nr(r, f ? w + 1 : 0, f ? _ : w);
      }
      function md(r, o) {
        var l = r;
        return l instanceof xe && (l = l.value()), Bs(o, function(f, _) {
          return _.func.apply(_.thisArg, Xr([f], _.args));
        }, l);
      }
      function tu(r, o, l) {
        var f = r.length;
        if (f < 2)
          return f ? ri(r[0]) : [];
        for (var _ = -1, w = O(f); ++_ < f; )
          for (var D = r[_], B = -1; ++B < f; )
            B != _ && (w[_] = $n(w[_] || D, r[B], o, l));
        return ri(ct(w, 1), o, l);
      }
      function _d(r, o, l) {
        for (var f = -1, _ = r.length, w = o.length, D = {}; ++f < _; ) {
          var B = f < w ? o[f] : t;
          l(D, r[f], B);
        }
        return D;
      }
      function ru(r) {
        return Ze(r) ? r : [];
      }
      function iu(r) {
        return typeof r == "function" ? r : Bt;
      }
      function ii(r, o) {
        return pe(r) ? r : pu(r, o) ? [r] : Kd(Se(r));
      }
      var T0 = ye;
      function ni(r, o, l) {
        var f = r.length;
        return l = l === t ? f : l, !o && l >= f ? r : nr(r, o, l);
      }
      var bd = vg || function(r) {
        return lt.clearTimeout(r);
      };
      function vd(r, o) {
        if (o)
          return r.slice();
        var l = r.length, f = Mc ? Mc(l) : new r.constructor(l);
        return r.copy(f), f;
      }
      function nu(r) {
        var o = new r.constructor(r.byteLength);
        return new Wa(o).set(new Wa(r)), o;
      }
      function R0(r, o) {
        var l = o ? nu(r.buffer) : r.buffer;
        return new r.constructor(l, r.byteOffset, r.byteLength);
      }
      function P0(r) {
        var o = new r.constructor(r.source, rc.exec(r));
        return o.lastIndex = r.lastIndex, o;
      }
      function z0(r) {
        return Vn ? Te(Vn.call(r)) : {};
      }
      function yd(r, o) {
        var l = o ? nu(r.buffer) : r.buffer;
        return new r.constructor(l, r.byteOffset, r.length);
      }
      function kd(r, o) {
        if (r !== o) {
          var l = r !== t, f = r === null, _ = r === r, w = Ut(r), D = o !== t, B = o === null, R = o === o, U = Ut(o);
          if (!B && !U && !w && r > o || w && D && R && !B && !U || f && D && R || !l && R || !_)
            return 1;
          if (!f && !w && !U && r < o || U && l && _ && !f && !w || B && l && _ || !D && _ || !R)
            return -1;
        }
        return 0;
      }
      function N0(r, o, l) {
        for (var f = -1, _ = r.criteria, w = o.criteria, D = _.length, B = l.length; ++f < D; ) {
          var R = kd(_[f], w[f]);
          if (R) {
            if (f >= B)
              return R;
            var U = l[f];
            return R * (U == "desc" ? -1 : 1);
          }
        }
        return r.index - o.index;
      }
      function wd(r, o, l, f) {
        for (var _ = -1, w = r.length, D = l.length, B = -1, R = o.length, U = ot(w - D, 0), V = O(R + U), H = !f; ++B < R; )
          V[B] = o[B];
        for (; ++_ < D; )
          (H || _ < w) && (V[l[_]] = r[_]);
        for (; U--; )
          V[B++] = r[_++];
        return V;
      }
      function xd(r, o, l, f) {
        for (var _ = -1, w = r.length, D = -1, B = l.length, R = -1, U = o.length, V = ot(w - B, 0), H = O(V + U), W = !f; ++_ < V; )
          H[_] = r[_];
        for (var ee = _; ++R < U; )
          H[ee + R] = o[R];
        for (; ++D < B; )
          (W || _ < w) && (H[ee + l[D]] = r[_++]);
        return H;
      }
      function At(r, o) {
        var l = -1, f = r.length;
        for (o || (o = O(f)); ++l < f; )
          o[l] = r[l];
        return o;
      }
      function kr(r, o, l, f) {
        var _ = !l;
        l || (l = {});
        for (var w = -1, D = o.length; ++w < D; ) {
          var B = o[w], R = f ? f(l[B], r[B], B, l, r) : t;
          R === t && (R = r[B]), _ ? Nr(l, B, R) : Hn(l, B, R);
        }
        return l;
      }
      function O0(r, o) {
        return kr(r, du(r), o);
      }
      function I0(r, o) {
        return kr(r, Nd(r), o);
      }
      function uo(r, o) {
        return function(l, f) {
          var _ = pe(l) ? H1 : o0, w = o ? o() : {};
          return _(l, r, ae(f, 2), w);
        };
      }
      function nn(r) {
        return ye(function(o, l) {
          var f = -1, _ = l.length, w = _ > 1 ? l[_ - 1] : t, D = _ > 2 ? l[2] : t;
          for (w = r.length > 3 && typeof w == "function" ? (_--, w) : t, D && yt(l[0], l[1], D) && (w = _ < 3 ? t : w, _ = 1), o = Te(o); ++f < _; ) {
            var B = l[f];
            B && r(o, B, f, w);
          }
          return o;
        });
      }
      function Cd(r, o) {
        return function(l, f) {
          if (l == null)
            return l;
          if (!St(l))
            return r(l, f);
          for (var _ = l.length, w = o ? _ : -1, D = Te(l); (o ? w-- : ++w < _) && f(D[w], w, D) !== !1; )
            ;
          return l;
        };
      }
      function Dd(r) {
        return function(o, l, f) {
          for (var _ = -1, w = Te(o), D = f(o), B = D.length; B--; ) {
            var R = D[r ? B : ++_];
            if (l(w[R], R, w) === !1)
              break;
          }
          return o;
        };
      }
      function q0(r, o, l) {
        var f = o & x, _ = Gn(r);
        function w() {
          var D = this && this !== lt && this instanceof w ? _ : r;
          return D.apply(f ? l : this, arguments);
        }
        return w;
      }
      function Ad(r) {
        return function(o) {
          o = Se(o);
          var l = Ji(o) ? pr(o) : t, f = l ? l[0] : o.charAt(0), _ = l ? ni(l, 1).join("") : o.slice(1);
          return f[r]() + _;
        };
      }
      function an(r) {
        return function(o) {
          return Bs(Cp(xp(o).replace(B1, "")), r, "");
        };
      }
      function Gn(r) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new r();
            case 1:
              return new r(o[0]);
            case 2:
              return new r(o[0], o[1]);
            case 3:
              return new r(o[0], o[1], o[2]);
            case 4:
              return new r(o[0], o[1], o[2], o[3]);
            case 5:
              return new r(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new r(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new r(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var l = rn(r.prototype), f = r.apply(l, o);
          return $e(f) ? f : l;
        };
      }
      function M0(r, o, l) {
        var f = Gn(r);
        function _() {
          for (var w = arguments.length, D = O(w), B = w, R = on(_); B--; )
            D[B] = arguments[B];
          var U = w < 3 && D[0] !== R && D[w - 1] !== R ? [] : Qr(D, R);
          if (w -= U.length, w < l)
            return Ld(
              r,
              o,
              lo,
              _.placeholder,
              t,
              D,
              U,
              t,
              t,
              l - w
            );
          var V = this && this !== lt && this instanceof _ ? f : r;
          return It(V, this, D);
        }
        return _;
      }
      function Sd(r) {
        return function(o, l, f) {
          var _ = Te(o);
          if (!St(o)) {
            var w = ae(l, 3);
            o = st(o), l = function(B) {
              return w(_[B], B, _);
            };
          }
          var D = r(o, l, f);
          return D > -1 ? _[w ? o[D] : D] : t;
        };
      }
      function Ed(r) {
        return Ir(function(o) {
          var l = o.length, f = l, _ = rr.prototype.thru;
          for (r && o.reverse(); f--; ) {
            var w = o[f];
            if (typeof w != "function")
              throw new tr(u);
            if (_ && !D && ho(w) == "wrapper")
              var D = new rr([], !0);
          }
          for (f = D ? f : l; ++f < l; ) {
            w = o[f];
            var B = ho(w), R = B == "wrapper" ? lu(w) : t;
            R && fu(R[0]) && R[1] == (P | F | L | I) && !R[4].length && R[9] == 1 ? D = D[ho(R[0])].apply(D, R[3]) : D = w.length == 1 && fu(w) ? D[B]() : D.thru(w);
          }
          return function() {
            var U = arguments, V = U[0];
            if (D && U.length == 1 && pe(V))
              return D.plant(V).value();
            for (var H = 0, W = l ? o[H].apply(this, U) : V; ++H < l; )
              W = o[H].call(this, W);
            return W;
          };
        });
      }
      function lo(r, o, l, f, _, w, D, B, R, U) {
        var V = o & P, H = o & x, W = o & S, ee = o & (F | E), oe = o & N, _e = W ? t : Gn(r);
        function se() {
          for (var we = arguments.length, Ce = O(we), Vt = we; Vt--; )
            Ce[Vt] = arguments[Vt];
          if (ee)
            var kt = on(se), Ht = X1(Ce, kt);
          if (f && (Ce = wd(Ce, f, _, ee)), w && (Ce = xd(Ce, w, D, ee)), we -= Ht, ee && we < U) {
            var Xe = Qr(Ce, kt);
            return Ld(
              r,
              o,
              lo,
              se.placeholder,
              l,
              Ce,
              Xe,
              B,
              R,
              U - we
            );
          }
          var gr = H ? l : this, Vr = W ? gr[r] : r;
          return we = Ce.length, B ? Ce = om(Ce, B) : oe && we > 1 && Ce.reverse(), V && R < we && (Ce.length = R), this && this !== lt && this instanceof se && (Vr = _e || Gn(Vr)), Vr.apply(gr, Ce);
        }
        return se;
      }
      function Bd(r, o) {
        return function(l, f) {
          return h0(l, r, o(f), {});
        };
      }
      function co(r, o) {
        return function(l, f) {
          var _;
          if (l === t && f === t)
            return o;
          if (l !== t && (_ = l), f !== t) {
            if (_ === t)
              return f;
            typeof l == "string" || typeof f == "string" ? (l = Mt(l), f = Mt(f)) : (l = hd(l), f = hd(f)), _ = r(l, f);
          }
          return _;
        };
      }
      function au(r) {
        return Ir(function(o) {
          return o = Ue(o, qt(ae())), ye(function(l) {
            var f = this;
            return r(o, function(_) {
              return It(_, f, l);
            });
          });
        });
      }
      function po(r, o) {
        o = o === t ? " " : Mt(o);
        var l = o.length;
        if (l < 2)
          return l ? Xs(o, r) : o;
        var f = Xs(o, Za(r / Zi(o)));
        return Ji(o) ? ni(pr(f), 0, r).join("") : f.slice(0, r);
      }
      function U0(r, o, l, f) {
        var _ = o & x, w = Gn(r);
        function D() {
          for (var B = -1, R = arguments.length, U = -1, V = f.length, H = O(V + R), W = this && this !== lt && this instanceof D ? w : r; ++U < V; )
            H[U] = f[U];
          for (; R--; )
            H[U++] = arguments[++B];
          return It(W, _ ? l : this, H);
        }
        return D;
      }
      function Fd(r) {
        return function(o, l, f) {
          return f && typeof f != "number" && yt(o, l, f) && (l = f = t), o = Ur(o), l === t ? (l = o, o = 0) : l = Ur(l), f = f === t ? o < l ? 1 : -1 : Ur(f), A0(o, l, f, r);
        };
      }
      function fo(r) {
        return function(o, l) {
          return typeof o == "string" && typeof l == "string" || (o = or(o), l = or(l)), r(o, l);
        };
      }
      function Ld(r, o, l, f, _, w, D, B, R, U) {
        var V = o & F, H = V ? D : t, W = V ? t : D, ee = V ? w : t, oe = V ? t : w;
        o |= V ? L : z, o &= ~(V ? z : L), o & A || (o &= ~(x | S));
        var _e = [
          r,
          o,
          _,
          ee,
          H,
          oe,
          W,
          B,
          R,
          U
        ], se = l.apply(t, _e);
        return fu(r) && Hd(se, _e), se.placeholder = f, $d(se, r, o);
      }
      function ou(r) {
        var o = at[r];
        return function(l, f) {
          if (l = or(l), f = f == null ? 0 : ft(ge(f), 292), f && $c(l)) {
            var _ = (Se(l) + "e").split("e"), w = o(_[0] + "e" + (+_[1] + f));
            return _ = (Se(w) + "e").split("e"), +(_[0] + "e" + (+_[1] - f));
          }
          return o(l);
        };
      }
      var V0 = en && 1 / Ua(new en([, -0]))[1] == re ? function(r) {
        return new en(r);
      } : Eu;
      function Td(r) {
        return function(o) {
          var l = ht(o);
          return l == Dt ? Ns(o) : l == dr ? ag(o) : Z1(o, r(o));
        };
      }
      function Or(r, o, l, f, _, w, D, B) {
        var R = o & S;
        if (!R && typeof r != "function")
          throw new tr(u);
        var U = f ? f.length : 0;
        if (U || (o &= ~(L | z), f = _ = t), D = D === t ? D : ot(ge(D), 0), B = B === t ? B : ge(B), U -= _ ? _.length : 0, o & z) {
          var V = f, H = _;
          f = _ = t;
        }
        var W = R ? t : lu(r), ee = [
          r,
          o,
          l,
          f,
          _,
          V,
          H,
          w,
          D,
          B
        ];
        if (W && im(ee, W), r = ee[0], o = ee[1], l = ee[2], f = ee[3], _ = ee[4], B = ee[9] = ee[9] === t ? R ? 0 : r.length : ot(ee[9] - U, 0), !B && o & (F | E) && (o &= ~(F | E)), !o || o == x)
          var oe = q0(r, o, l);
        else
          o == F || o == E ? oe = M0(r, o, B) : (o == L || o == (x | L)) && !_.length ? oe = U0(r, o, l, f) : oe = lo.apply(t, ee);
        var _e = W ? pd : Hd;
        return $d(_e(oe, ee), r, o);
      }
      function Rd(r, o, l, f) {
        return r === t || hr(r, Qi[l]) && !Be.call(f, l) ? o : r;
      }
      function Pd(r, o, l, f, _, w) {
        return $e(r) && $e(o) && (w.set(o, r), ao(r, o, t, Pd, w), w.delete(o)), r;
      }
      function H0(r) {
        return Zn(r) ? t : r;
      }
      function zd(r, o, l, f, _, w) {
        var D = l & C, B = r.length, R = o.length;
        if (B != R && !(D && R > B))
          return !1;
        var U = w.get(r), V = w.get(o);
        if (U && V)
          return U == o && V == r;
        var H = -1, W = !0, ee = l & k ? new xi() : t;
        for (w.set(r, o), w.set(o, r); ++H < B; ) {
          var oe = r[H], _e = o[H];
          if (f)
            var se = D ? f(_e, oe, H, o, r, w) : f(oe, _e, H, r, o, w);
          if (se !== t) {
            if (se)
              continue;
            W = !1;
            break;
          }
          if (ee) {
            if (!Fs(o, function(we, Ce) {
              if (!On(ee, Ce) && (oe === we || _(oe, we, l, f, w)))
                return ee.push(Ce);
            })) {
              W = !1;
              break;
            }
          } else if (!(oe === _e || _(oe, _e, l, f, w))) {
            W = !1;
            break;
          }
        }
        return w.delete(r), w.delete(o), W;
      }
      function $0(r, o, l, f, _, w, D) {
        switch (l) {
          case Wi:
            if (r.byteLength != o.byteLength || r.byteOffset != o.byteOffset)
              return !1;
            r = r.buffer, o = o.buffer;
          case Nn:
            return !(r.byteLength != o.byteLength || !w(new Wa(r), new Wa(o)));
          case Nt:
          case Ct:
          case vr:
            return hr(+r, +o);
          case nt:
            return r.name == o.name && r.message == o.message;
          case Rn:
          case Pn:
            return r == o + "";
          case Dt:
            var B = Ns;
          case dr:
            var R = f & C;
            if (B || (B = Ua), r.size != o.size && !R)
              return !1;
            var U = D.get(r);
            if (U)
              return U == o;
            f |= k, D.set(r, o);
            var V = zd(B(r), B(o), f, _, w, D);
            return D.delete(r), V;
          case za:
            if (Vn)
              return Vn.call(r) == Vn.call(o);
        }
        return !1;
      }
      function j0(r, o, l, f, _, w) {
        var D = l & C, B = su(r), R = B.length, U = su(o), V = U.length;
        if (R != V && !D)
          return !1;
        for (var H = R; H--; ) {
          var W = B[H];
          if (!(D ? W in o : Be.call(o, W)))
            return !1;
        }
        var ee = w.get(r), oe = w.get(o);
        if (ee && oe)
          return ee == o && oe == r;
        var _e = !0;
        w.set(r, o), w.set(o, r);
        for (var se = D; ++H < R; ) {
          W = B[H];
          var we = r[W], Ce = o[W];
          if (f)
            var Vt = D ? f(Ce, we, W, o, r, w) : f(we, Ce, W, r, o, w);
          if (!(Vt === t ? we === Ce || _(we, Ce, l, f, w) : Vt)) {
            _e = !1;
            break;
          }
          se || (se = W == "constructor");
        }
        if (_e && !se) {
          var kt = r.constructor, Ht = o.constructor;
          kt != Ht && "constructor" in r && "constructor" in o && !(typeof kt == "function" && kt instanceof kt && typeof Ht == "function" && Ht instanceof Ht) && (_e = !1);
        }
        return w.delete(r), w.delete(o), _e;
      }
      function Ir(r) {
        return gu(Ud(r, t, Jd), r + "");
      }
      function su(r) {
        return td(r, st, du);
      }
      function uu(r) {
        return td(r, Et, Nd);
      }
      var lu = Qa ? function(r) {
        return Qa.get(r);
      } : Eu;
      function ho(r) {
        for (var o = r.name + "", l = tn[o], f = Be.call(tn, o) ? l.length : 0; f--; ) {
          var _ = l[f], w = _.func;
          if (w == null || w == r)
            return _.name;
        }
        return o;
      }
      function on(r) {
        var o = Be.call(y, "placeholder") ? y : r;
        return o.placeholder;
      }
      function ae() {
        var r = y.iteratee || Au;
        return r = r === Au ? nd : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function go(r, o) {
        var l = r.__data__;
        return Q0(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map;
      }
      function cu(r) {
        for (var o = st(r), l = o.length; l--; ) {
          var f = o[l], _ = r[f];
          o[l] = [f, _, qd(_)];
        }
        return o;
      }
      function Ai(r, o) {
        var l = rg(r, o);
        return id(l) ? l : t;
      }
      function K0(r) {
        var o = Be.call(r, ki), l = r[ki];
        try {
          r[ki] = t;
          var f = !0;
        } catch {
        }
        var _ = ja.call(r);
        return f && (o ? r[ki] = l : delete r[ki]), _;
      }
      var du = Is ? function(r) {
        return r == null ? [] : (r = Te(r), Zr(Is(r), function(o) {
          return Vc.call(r, o);
        }));
      } : Bu, Nd = Is ? function(r) {
        for (var o = []; r; )
          Xr(o, du(r)), r = Ga(r);
        return o;
      } : Bu, ht = vt;
      (qs && ht(new qs(new ArrayBuffer(1))) != Wi || qn && ht(new qn()) != Dt || Ms && ht(Ms.resolve()) != Xl || en && ht(new en()) != dr || Mn && ht(new Mn()) != zn) && (ht = function(r) {
        var o = vt(r), l = o == Rr ? r.constructor : t, f = l ? Si(l) : "";
        if (f)
          switch (f) {
            case Eg:
              return Wi;
            case Bg:
              return Dt;
            case Fg:
              return Xl;
            case Lg:
              return dr;
            case Tg:
              return zn;
          }
        return o;
      });
      function W0(r, o, l) {
        for (var f = -1, _ = l.length; ++f < _; ) {
          var w = l[f], D = w.size;
          switch (w.type) {
            case "drop":
              r += D;
              break;
            case "dropRight":
              o -= D;
              break;
            case "take":
              o = ft(o, r + D);
              break;
            case "takeRight":
              r = ot(r, o - D);
              break;
          }
        }
        return { start: r, end: o };
      }
      function G0(r) {
        var o = r.match(e1);
        return o ? o[1].split(t1) : [];
      }
      function Od(r, o, l) {
        o = ii(o, r);
        for (var f = -1, _ = o.length, w = !1; ++f < _; ) {
          var D = wr(o[f]);
          if (!(w = r != null && l(r, D)))
            break;
          r = r[D];
        }
        return w || ++f != _ ? w : (_ = r == null ? 0 : r.length, !!_ && wo(_) && qr(D, _) && (pe(r) || Ei(r)));
      }
      function Y0(r) {
        var o = r.length, l = new r.constructor(o);
        return o && typeof r[0] == "string" && Be.call(r, "index") && (l.index = r.index, l.input = r.input), l;
      }
      function Id(r) {
        return typeof r.constructor == "function" && !Yn(r) ? rn(Ga(r)) : {};
      }
      function J0(r, o, l) {
        var f = r.constructor;
        switch (o) {
          case Nn:
            return nu(r);
          case Nt:
          case Ct:
            return new f(+r);
          case Wi:
            return R0(r, l);
          case cs:
          case ds:
          case ps:
          case fs:
          case hs:
          case gs:
          case ms:
          case _s:
          case bs:
            return yd(r, l);
          case Dt:
            return new f();
          case vr:
          case Pn:
            return new f(r);
          case Rn:
            return P0(r);
          case dr:
            return new f();
          case za:
            return z0(r);
        }
      }
      function Z0(r, o) {
        var l = o.length;
        if (!l)
          return r;
        var f = l - 1;
        return o[f] = (l > 1 ? "& " : "") + o[f], o = o.join(l > 2 ? ", " : " "), r.replace(Qh, `{
/* [wrapped with ` + o + `] */
`);
      }
      function X0(r) {
        return pe(r) || Ei(r) || !!(Hc && r && r[Hc]);
      }
      function qr(r, o) {
        var l = typeof r;
        return o = o ?? $, !!o && (l == "number" || l != "symbol" && c1.test(r)) && r > -1 && r % 1 == 0 && r < o;
      }
      function yt(r, o, l) {
        if (!$e(l))
          return !1;
        var f = typeof o;
        return (f == "number" ? St(l) && qr(o, l.length) : f == "string" && o in l) ? hr(l[o], r) : !1;
      }
      function pu(r, o) {
        if (pe(r))
          return !1;
        var l = typeof r;
        return l == "number" || l == "symbol" || l == "boolean" || r == null || Ut(r) ? !0 : Yh.test(r) || !Gh.test(r) || o != null && r in Te(o);
      }
      function Q0(r) {
        var o = typeof r;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? r !== "__proto__" : r === null;
      }
      function fu(r) {
        var o = ho(r), l = y[o];
        if (typeof l != "function" || !(o in xe.prototype))
          return !1;
        if (r === l)
          return !0;
        var f = lu(l);
        return !!f && r === f[0];
      }
      function em(r) {
        return !!qc && qc in r;
      }
      var tm = Ha ? Mr : Fu;
      function Yn(r) {
        var o = r && r.constructor, l = typeof o == "function" && o.prototype || Qi;
        return r === l;
      }
      function qd(r) {
        return r === r && !$e(r);
      }
      function Md(r, o) {
        return function(l) {
          return l == null ? !1 : l[r] === o && (o !== t || r in Te(l));
        };
      }
      function rm(r) {
        var o = yo(r, function(f) {
          return l.size === p && l.clear(), f;
        }), l = o.cache;
        return o;
      }
      function im(r, o) {
        var l = r[1], f = o[1], _ = l | f, w = _ < (x | S | P), D = f == P && l == F || f == P && l == I && r[7].length <= o[8] || f == (P | I) && o[7].length <= o[8] && l == F;
        if (!(w || D))
          return r;
        f & x && (r[2] = o[2], _ |= l & x ? 0 : A);
        var B = o[3];
        if (B) {
          var R = r[3];
          r[3] = R ? wd(R, B, o[4]) : B, r[4] = R ? Qr(r[3], h) : o[4];
        }
        return B = o[5], B && (R = r[5], r[5] = R ? xd(R, B, o[6]) : B, r[6] = R ? Qr(r[5], h) : o[6]), B = o[7], B && (r[7] = B), f & P && (r[8] = r[8] == null ? o[8] : ft(r[8], o[8])), r[9] == null && (r[9] = o[9]), r[0] = o[0], r[1] = _, r;
      }
      function nm(r) {
        var o = [];
        if (r != null)
          for (var l in Te(r))
            o.push(l);
        return o;
      }
      function am(r) {
        return ja.call(r);
      }
      function Ud(r, o, l) {
        return o = ot(o === t ? r.length - 1 : o, 0), function() {
          for (var f = arguments, _ = -1, w = ot(f.length - o, 0), D = O(w); ++_ < w; )
            D[_] = f[o + _];
          _ = -1;
          for (var B = O(o + 1); ++_ < o; )
            B[_] = f[_];
          return B[o] = l(D), It(r, this, B);
        };
      }
      function Vd(r, o) {
        return o.length < 2 ? r : Di(r, nr(o, 0, -1));
      }
      function om(r, o) {
        for (var l = r.length, f = ft(o.length, l), _ = At(r); f--; ) {
          var w = o[f];
          r[f] = qr(w, l) ? _[w] : t;
        }
        return r;
      }
      function hu(r, o) {
        if (!(o === "constructor" && typeof r[o] == "function") && o != "__proto__")
          return r[o];
      }
      var Hd = jd(pd), Jn = kg || function(r, o) {
        return lt.setTimeout(r, o);
      }, gu = jd(B0);
      function $d(r, o, l) {
        var f = o + "";
        return gu(r, Z0(f, sm(G0(f), l)));
      }
      function jd(r) {
        var o = 0, l = 0;
        return function() {
          var f = Dg(), _ = ne - (f - l);
          if (l = f, _ > 0) {
            if (++o >= X)
              return arguments[0];
          } else
            o = 0;
          return r.apply(t, arguments);
        };
      }
      function mo(r, o) {
        var l = -1, f = r.length, _ = f - 1;
        for (o = o === t ? f : o; ++l < o; ) {
          var w = Zs(l, _), D = r[w];
          r[w] = r[l], r[l] = D;
        }
        return r.length = o, r;
      }
      var Kd = rm(function(r) {
        var o = [];
        return r.charCodeAt(0) === 46 && o.push(""), r.replace(Jh, function(l, f, _, w) {
          o.push(_ ? w.replace(n1, "$1") : f || l);
        }), o;
      });
      function wr(r) {
        if (typeof r == "string" || Ut(r))
          return r;
        var o = r + "";
        return o == "0" && 1 / r == -re ? "-0" : o;
      }
      function Si(r) {
        if (r != null) {
          try {
            return $a.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function sm(r, o) {
        return er(Me, function(l) {
          var f = "_." + l[0];
          o & l[1] && !qa(r, f) && r.push(f);
        }), r.sort();
      }
      function Wd(r) {
        if (r instanceof xe)
          return r.clone();
        var o = new rr(r.__wrapped__, r.__chain__);
        return o.__actions__ = At(r.__actions__), o.__index__ = r.__index__, o.__values__ = r.__values__, o;
      }
      function um(r, o, l) {
        (l ? yt(r, o, l) : o === t) ? o = 1 : o = ot(ge(o), 0);
        var f = r == null ? 0 : r.length;
        if (!f || o < 1)
          return [];
        for (var _ = 0, w = 0, D = O(Za(f / o)); _ < f; )
          D[w++] = nr(r, _, _ += o);
        return D;
      }
      function lm(r) {
        for (var o = -1, l = r == null ? 0 : r.length, f = 0, _ = []; ++o < l; ) {
          var w = r[o];
          w && (_[f++] = w);
        }
        return _;
      }
      function cm() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var o = O(r - 1), l = arguments[0], f = r; f--; )
          o[f - 1] = arguments[f];
        return Xr(pe(l) ? At(l) : [l], ct(o, 1));
      }
      var dm = ye(function(r, o) {
        return Ze(r) ? $n(r, ct(o, 1, Ze, !0)) : [];
      }), pm = ye(function(r, o) {
        var l = ar(o);
        return Ze(l) && (l = t), Ze(r) ? $n(r, ct(o, 1, Ze, !0), ae(l, 2)) : [];
      }), fm = ye(function(r, o) {
        var l = ar(o);
        return Ze(l) && (l = t), Ze(r) ? $n(r, ct(o, 1, Ze, !0), t, l) : [];
      });
      function hm(r, o, l) {
        var f = r == null ? 0 : r.length;
        return f ? (o = l || o === t ? 1 : ge(o), nr(r, o < 0 ? 0 : o, f)) : [];
      }
      function gm(r, o, l) {
        var f = r == null ? 0 : r.length;
        return f ? (o = l || o === t ? 1 : ge(o), o = f - o, nr(r, 0, o < 0 ? 0 : o)) : [];
      }
      function mm(r, o) {
        return r && r.length ? so(r, ae(o, 3), !0, !0) : [];
      }
      function _m(r, o) {
        return r && r.length ? so(r, ae(o, 3), !0) : [];
      }
      function bm(r, o, l, f) {
        var _ = r == null ? 0 : r.length;
        return _ ? (l && typeof l != "number" && yt(r, o, l) && (l = 0, f = _), c0(r, o, l, f)) : [];
      }
      function Gd(r, o, l) {
        var f = r == null ? 0 : r.length;
        if (!f)
          return -1;
        var _ = l == null ? 0 : ge(l);
        return _ < 0 && (_ = ot(f + _, 0)), Ma(r, ae(o, 3), _);
      }
      function Yd(r, o, l) {
        var f = r == null ? 0 : r.length;
        if (!f)
          return -1;
        var _ = f - 1;
        return l !== t && (_ = ge(l), _ = l < 0 ? ot(f + _, 0) : ft(_, f - 1)), Ma(r, ae(o, 3), _, !0);
      }
      function Jd(r) {
        var o = r == null ? 0 : r.length;
        return o ? ct(r, 1) : [];
      }
      function vm(r) {
        var o = r == null ? 0 : r.length;
        return o ? ct(r, re) : [];
      }
      function ym(r, o) {
        var l = r == null ? 0 : r.length;
        return l ? (o = o === t ? 1 : ge(o), ct(r, o)) : [];
      }
      function km(r) {
        for (var o = -1, l = r == null ? 0 : r.length, f = {}; ++o < l; ) {
          var _ = r[o];
          f[_[0]] = _[1];
        }
        return f;
      }
      function Zd(r) {
        return r && r.length ? r[0] : t;
      }
      function wm(r, o, l) {
        var f = r == null ? 0 : r.length;
        if (!f)
          return -1;
        var _ = l == null ? 0 : ge(l);
        return _ < 0 && (_ = ot(f + _, 0)), Yi(r, o, _);
      }
      function xm(r) {
        var o = r == null ? 0 : r.length;
        return o ? nr(r, 0, -1) : [];
      }
      var Cm = ye(function(r) {
        var o = Ue(r, ru);
        return o.length && o[0] === r[0] ? Ks(o) : [];
      }), Dm = ye(function(r) {
        var o = ar(r), l = Ue(r, ru);
        return o === ar(l) ? o = t : l.pop(), l.length && l[0] === r[0] ? Ks(l, ae(o, 2)) : [];
      }), Am = ye(function(r) {
        var o = ar(r), l = Ue(r, ru);
        return o = typeof o == "function" ? o : t, o && l.pop(), l.length && l[0] === r[0] ? Ks(l, t, o) : [];
      });
      function Sm(r, o) {
        return r == null ? "" : xg.call(r, o);
      }
      function ar(r) {
        var o = r == null ? 0 : r.length;
        return o ? r[o - 1] : t;
      }
      function Em(r, o, l) {
        var f = r == null ? 0 : r.length;
        if (!f)
          return -1;
        var _ = f;
        return l !== t && (_ = ge(l), _ = _ < 0 ? ot(f + _, 0) : ft(_, f - 1)), o === o ? sg(r, o, _) : Ma(r, Lc, _, !0);
      }
      function Bm(r, o) {
        return r && r.length ? ud(r, ge(o)) : t;
      }
      var Fm = ye(Xd);
      function Xd(r, o) {
        return r && r.length && o && o.length ? Js(r, o) : r;
      }
      function Lm(r, o, l) {
        return r && r.length && o && o.length ? Js(r, o, ae(l, 2)) : r;
      }
      function Tm(r, o, l) {
        return r && r.length && o && o.length ? Js(r, o, t, l) : r;
      }
      var Rm = Ir(function(r, o) {
        var l = r == null ? 0 : r.length, f = Vs(r, o);
        return dd(r, Ue(o, function(_) {
          return qr(_, l) ? +_ : _;
        }).sort(kd)), f;
      });
      function Pm(r, o) {
        var l = [];
        if (!(r && r.length))
          return l;
        var f = -1, _ = [], w = r.length;
        for (o = ae(o, 3); ++f < w; ) {
          var D = r[f];
          o(D, f, r) && (l.push(D), _.push(f));
        }
        return dd(r, _), l;
      }
      function mu(r) {
        return r == null ? r : Sg.call(r);
      }
      function zm(r, o, l) {
        var f = r == null ? 0 : r.length;
        return f ? (l && typeof l != "number" && yt(r, o, l) ? (o = 0, l = f) : (o = o == null ? 0 : ge(o), l = l === t ? f : ge(l)), nr(r, o, l)) : [];
      }
      function Nm(r, o) {
        return oo(r, o);
      }
      function Om(r, o, l) {
        return Qs(r, o, ae(l, 2));
      }
      function Im(r, o) {
        var l = r == null ? 0 : r.length;
        if (l) {
          var f = oo(r, o);
          if (f < l && hr(r[f], o))
            return f;
        }
        return -1;
      }
      function qm(r, o) {
        return oo(r, o, !0);
      }
      function Mm(r, o, l) {
        return Qs(r, o, ae(l, 2), !0);
      }
      function Um(r, o) {
        var l = r == null ? 0 : r.length;
        if (l) {
          var f = oo(r, o, !0) - 1;
          if (hr(r[f], o))
            return f;
        }
        return -1;
      }
      function Vm(r) {
        return r && r.length ? fd(r) : [];
      }
      function Hm(r, o) {
        return r && r.length ? fd(r, ae(o, 2)) : [];
      }
      function $m(r) {
        var o = r == null ? 0 : r.length;
        return o ? nr(r, 1, o) : [];
      }
      function jm(r, o, l) {
        return r && r.length ? (o = l || o === t ? 1 : ge(o), nr(r, 0, o < 0 ? 0 : o)) : [];
      }
      function Km(r, o, l) {
        var f = r == null ? 0 : r.length;
        return f ? (o = l || o === t ? 1 : ge(o), o = f - o, nr(r, o < 0 ? 0 : o, f)) : [];
      }
      function Wm(r, o) {
        return r && r.length ? so(r, ae(o, 3), !1, !0) : [];
      }
      function Gm(r, o) {
        return r && r.length ? so(r, ae(o, 3)) : [];
      }
      var Ym = ye(function(r) {
        return ri(ct(r, 1, Ze, !0));
      }), Jm = ye(function(r) {
        var o = ar(r);
        return Ze(o) && (o = t), ri(ct(r, 1, Ze, !0), ae(o, 2));
      }), Zm = ye(function(r) {
        var o = ar(r);
        return o = typeof o == "function" ? o : t, ri(ct(r, 1, Ze, !0), t, o);
      });
      function Xm(r) {
        return r && r.length ? ri(r) : [];
      }
      function Qm(r, o) {
        return r && r.length ? ri(r, ae(o, 2)) : [];
      }
      function e_(r, o) {
        return o = typeof o == "function" ? o : t, r && r.length ? ri(r, t, o) : [];
      }
      function _u(r) {
        if (!(r && r.length))
          return [];
        var o = 0;
        return r = Zr(r, function(l) {
          if (Ze(l))
            return o = ot(l.length, o), !0;
        }), Ps(o, function(l) {
          return Ue(r, Ls(l));
        });
      }
      function Qd(r, o) {
        if (!(r && r.length))
          return [];
        var l = _u(r);
        return o == null ? l : Ue(l, function(f) {
          return It(o, t, f);
        });
      }
      var t_ = ye(function(r, o) {
        return Ze(r) ? $n(r, o) : [];
      }), r_ = ye(function(r) {
        return tu(Zr(r, Ze));
      }), i_ = ye(function(r) {
        var o = ar(r);
        return Ze(o) && (o = t), tu(Zr(r, Ze), ae(o, 2));
      }), n_ = ye(function(r) {
        var o = ar(r);
        return o = typeof o == "function" ? o : t, tu(Zr(r, Ze), t, o);
      }), a_ = ye(_u);
      function o_(r, o) {
        return _d(r || [], o || [], Hn);
      }
      function s_(r, o) {
        return _d(r || [], o || [], Wn);
      }
      var u_ = ye(function(r) {
        var o = r.length, l = o > 1 ? r[o - 1] : t;
        return l = typeof l == "function" ? (r.pop(), l) : t, Qd(r, l);
      });
      function ep(r) {
        var o = y(r);
        return o.__chain__ = !0, o;
      }
      function l_(r, o) {
        return o(r), r;
      }
      function _o(r, o) {
        return o(r);
      }
      var c_ = Ir(function(r) {
        var o = r.length, l = o ? r[0] : 0, f = this.__wrapped__, _ = function(w) {
          return Vs(w, r);
        };
        return o > 1 || this.__actions__.length || !(f instanceof xe) || !qr(l) ? this.thru(_) : (f = f.slice(l, +l + (o ? 1 : 0)), f.__actions__.push({
          func: _o,
          args: [_],
          thisArg: t
        }), new rr(f, this.__chain__).thru(function(w) {
          return o && !w.length && w.push(t), w;
        }));
      });
      function d_() {
        return ep(this);
      }
      function p_() {
        return new rr(this.value(), this.__chain__);
      }
      function f_() {
        this.__values__ === t && (this.__values__ = hp(this.value()));
        var r = this.__index__ >= this.__values__.length, o = r ? t : this.__values__[this.__index__++];
        return { done: r, value: o };
      }
      function h_() {
        return this;
      }
      function g_(r) {
        for (var o, l = this; l instanceof to; ) {
          var f = Wd(l);
          f.__index__ = 0, f.__values__ = t, o ? _.__wrapped__ = f : o = f;
          var _ = f;
          l = l.__wrapped__;
        }
        return _.__wrapped__ = r, o;
      }
      function m_() {
        var r = this.__wrapped__;
        if (r instanceof xe) {
          var o = r;
          return this.__actions__.length && (o = new xe(this)), o = o.reverse(), o.__actions__.push({
            func: _o,
            args: [mu],
            thisArg: t
          }), new rr(o, this.__chain__);
        }
        return this.thru(mu);
      }
      function __() {
        return md(this.__wrapped__, this.__actions__);
      }
      var b_ = uo(function(r, o, l) {
        Be.call(r, l) ? ++r[l] : Nr(r, l, 1);
      });
      function v_(r, o, l) {
        var f = pe(r) ? Bc : l0;
        return l && yt(r, o, l) && (o = t), f(r, ae(o, 3));
      }
      function y_(r, o) {
        var l = pe(r) ? Zr : Qc;
        return l(r, ae(o, 3));
      }
      var k_ = Sd(Gd), w_ = Sd(Yd);
      function x_(r, o) {
        return ct(bo(r, o), 1);
      }
      function C_(r, o) {
        return ct(bo(r, o), re);
      }
      function D_(r, o, l) {
        return l = l === t ? 1 : ge(l), ct(bo(r, o), l);
      }
      function tp(r, o) {
        var l = pe(r) ? er : ti;
        return l(r, ae(o, 3));
      }
      function rp(r, o) {
        var l = pe(r) ? $1 : Xc;
        return l(r, ae(o, 3));
      }
      var A_ = uo(function(r, o, l) {
        Be.call(r, l) ? r[l].push(o) : Nr(r, l, [o]);
      });
      function S_(r, o, l, f) {
        r = St(r) ? r : un(r), l = l && !f ? ge(l) : 0;
        var _ = r.length;
        return l < 0 && (l = ot(_ + l, 0)), xo(r) ? l <= _ && r.indexOf(o, l) > -1 : !!_ && Yi(r, o, l) > -1;
      }
      var E_ = ye(function(r, o, l) {
        var f = -1, _ = typeof o == "function", w = St(r) ? O(r.length) : [];
        return ti(r, function(D) {
          w[++f] = _ ? It(o, D, l) : jn(D, o, l);
        }), w;
      }), B_ = uo(function(r, o, l) {
        Nr(r, l, o);
      });
      function bo(r, o) {
        var l = pe(r) ? Ue : ad;
        return l(r, ae(o, 3));
      }
      function F_(r, o, l, f) {
        return r == null ? [] : (pe(o) || (o = o == null ? [] : [o]), l = f ? t : l, pe(l) || (l = l == null ? [] : [l]), ld(r, o, l));
      }
      var L_ = uo(function(r, o, l) {
        r[l ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function T_(r, o, l) {
        var f = pe(r) ? Bs : Rc, _ = arguments.length < 3;
        return f(r, ae(o, 4), l, _, ti);
      }
      function R_(r, o, l) {
        var f = pe(r) ? j1 : Rc, _ = arguments.length < 3;
        return f(r, ae(o, 4), l, _, Xc);
      }
      function P_(r, o) {
        var l = pe(r) ? Zr : Qc;
        return l(r, ko(ae(o, 3)));
      }
      function z_(r) {
        var o = pe(r) ? Gc : S0;
        return o(r);
      }
      function N_(r, o, l) {
        (l ? yt(r, o, l) : o === t) ? o = 1 : o = ge(o);
        var f = pe(r) ? n0 : E0;
        return f(r, o);
      }
      function O_(r) {
        var o = pe(r) ? a0 : F0;
        return o(r);
      }
      function I_(r) {
        if (r == null)
          return 0;
        if (St(r))
          return xo(r) ? Zi(r) : r.length;
        var o = ht(r);
        return o == Dt || o == dr ? r.size : Gs(r).length;
      }
      function q_(r, o, l) {
        var f = pe(r) ? Fs : L0;
        return l && yt(r, o, l) && (o = t), f(r, ae(o, 3));
      }
      var M_ = ye(function(r, o) {
        if (r == null)
          return [];
        var l = o.length;
        return l > 1 && yt(r, o[0], o[1]) ? o = [] : l > 2 && yt(o[0], o[1], o[2]) && (o = [o[0]]), ld(r, ct(o, 1), []);
      }), vo = yg || function() {
        return lt.Date.now();
      };
      function U_(r, o) {
        if (typeof o != "function")
          throw new tr(u);
        return r = ge(r), function() {
          if (--r < 1)
            return o.apply(this, arguments);
        };
      }
      function ip(r, o, l) {
        return o = l ? t : o, o = r && o == null ? r.length : o, Or(r, P, t, t, t, t, o);
      }
      function np(r, o) {
        var l;
        if (typeof o != "function")
          throw new tr(u);
        return r = ge(r), function() {
          return --r > 0 && (l = o.apply(this, arguments)), r <= 1 && (o = t), l;
        };
      }
      var bu = ye(function(r, o, l) {
        var f = x;
        if (l.length) {
          var _ = Qr(l, on(bu));
          f |= L;
        }
        return Or(r, f, o, l, _);
      }), ap = ye(function(r, o, l) {
        var f = x | S;
        if (l.length) {
          var _ = Qr(l, on(ap));
          f |= L;
        }
        return Or(o, f, r, l, _);
      });
      function op(r, o, l) {
        o = l ? t : o;
        var f = Or(r, F, t, t, t, t, t, o);
        return f.placeholder = op.placeholder, f;
      }
      function sp(r, o, l) {
        o = l ? t : o;
        var f = Or(r, E, t, t, t, t, t, o);
        return f.placeholder = sp.placeholder, f;
      }
      function up(r, o, l) {
        var f, _, w, D, B, R, U = 0, V = !1, H = !1, W = !0;
        if (typeof r != "function")
          throw new tr(u);
        o = or(o) || 0, $e(l) && (V = !!l.leading, H = "maxWait" in l, w = H ? ot(or(l.maxWait) || 0, o) : w, W = "trailing" in l ? !!l.trailing : W);
        function ee(Xe) {
          var gr = f, Vr = _;
          return f = _ = t, U = Xe, D = r.apply(Vr, gr), D;
        }
        function oe(Xe) {
          return U = Xe, B = Jn(we, o), V ? ee(Xe) : D;
        }
        function _e(Xe) {
          var gr = Xe - R, Vr = Xe - U, Sp = o - gr;
          return H ? ft(Sp, w - Vr) : Sp;
        }
        function se(Xe) {
          var gr = Xe - R, Vr = Xe - U;
          return R === t || gr >= o || gr < 0 || H && Vr >= w;
        }
        function we() {
          var Xe = vo();
          if (se(Xe))
            return Ce(Xe);
          B = Jn(we, _e(Xe));
        }
        function Ce(Xe) {
          return B = t, W && f ? ee(Xe) : (f = _ = t, D);
        }
        function Vt() {
          B !== t && bd(B), U = 0, f = R = _ = B = t;
        }
        function kt() {
          return B === t ? D : Ce(vo());
        }
        function Ht() {
          var Xe = vo(), gr = se(Xe);
          if (f = arguments, _ = this, R = Xe, gr) {
            if (B === t)
              return oe(R);
            if (H)
              return bd(B), B = Jn(we, o), ee(R);
          }
          return B === t && (B = Jn(we, o)), D;
        }
        return Ht.cancel = Vt, Ht.flush = kt, Ht;
      }
      var V_ = ye(function(r, o) {
        return Zc(r, 1, o);
      }), H_ = ye(function(r, o, l) {
        return Zc(r, or(o) || 0, l);
      });
      function $_(r) {
        return Or(r, N);
      }
      function yo(r, o) {
        if (typeof r != "function" || o != null && typeof o != "function")
          throw new tr(u);
        var l = function() {
          var f = arguments, _ = o ? o.apply(this, f) : f[0], w = l.cache;
          if (w.has(_))
            return w.get(_);
          var D = r.apply(this, f);
          return l.cache = w.set(_, D) || w, D;
        };
        return l.cache = new (yo.Cache || zr)(), l;
      }
      yo.Cache = zr;
      function ko(r) {
        if (typeof r != "function")
          throw new tr(u);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, o[0]);
            case 2:
              return !r.call(this, o[0], o[1]);
            case 3:
              return !r.call(this, o[0], o[1], o[2]);
          }
          return !r.apply(this, o);
        };
      }
      function j_(r) {
        return np(2, r);
      }
      var K_ = T0(function(r, o) {
        o = o.length == 1 && pe(o[0]) ? Ue(o[0], qt(ae())) : Ue(ct(o, 1), qt(ae()));
        var l = o.length;
        return ye(function(f) {
          for (var _ = -1, w = ft(f.length, l); ++_ < w; )
            f[_] = o[_].call(this, f[_]);
          return It(r, this, f);
        });
      }), vu = ye(function(r, o) {
        var l = Qr(o, on(vu));
        return Or(r, L, t, o, l);
      }), lp = ye(function(r, o) {
        var l = Qr(o, on(lp));
        return Or(r, z, t, o, l);
      }), W_ = Ir(function(r, o) {
        return Or(r, I, t, t, t, o);
      });
      function G_(r, o) {
        if (typeof r != "function")
          throw new tr(u);
        return o = o === t ? o : ge(o), ye(r, o);
      }
      function Y_(r, o) {
        if (typeof r != "function")
          throw new tr(u);
        return o = o == null ? 0 : ot(ge(o), 0), ye(function(l) {
          var f = l[o], _ = ni(l, 0, o);
          return f && Xr(_, f), It(r, this, _);
        });
      }
      function J_(r, o, l) {
        var f = !0, _ = !0;
        if (typeof r != "function")
          throw new tr(u);
        return $e(l) && (f = "leading" in l ? !!l.leading : f, _ = "trailing" in l ? !!l.trailing : _), up(r, o, {
          leading: f,
          maxWait: o,
          trailing: _
        });
      }
      function Z_(r) {
        return ip(r, 1);
      }
      function X_(r, o) {
        return vu(iu(o), r);
      }
      function Q_() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return pe(r) ? r : [r];
      }
      function eb(r) {
        return ir(r, v);
      }
      function tb(r, o) {
        return o = typeof o == "function" ? o : t, ir(r, v, o);
      }
      function rb(r) {
        return ir(r, m | v);
      }
      function ib(r, o) {
        return o = typeof o == "function" ? o : t, ir(r, m | v, o);
      }
      function nb(r, o) {
        return o == null || Jc(r, o, st(o));
      }
      function hr(r, o) {
        return r === o || r !== r && o !== o;
      }
      var ab = fo(js), ob = fo(function(r, o) {
        return r >= o;
      }), Ei = rd(function() {
        return arguments;
      }()) ? rd : function(r) {
        return Ge(r) && Be.call(r, "callee") && !Vc.call(r, "callee");
      }, pe = O.isArray, sb = xc ? qt(xc) : g0;
      function St(r) {
        return r != null && wo(r.length) && !Mr(r);
      }
      function Ze(r) {
        return Ge(r) && St(r);
      }
      function ub(r) {
        return r === !0 || r === !1 || Ge(r) && vt(r) == Nt;
      }
      var ai = wg || Fu, lb = Cc ? qt(Cc) : m0;
      function cb(r) {
        return Ge(r) && r.nodeType === 1 && !Zn(r);
      }
      function db(r) {
        if (r == null)
          return !0;
        if (St(r) && (pe(r) || typeof r == "string" || typeof r.splice == "function" || ai(r) || sn(r) || Ei(r)))
          return !r.length;
        var o = ht(r);
        if (o == Dt || o == dr)
          return !r.size;
        if (Yn(r))
          return !Gs(r).length;
        for (var l in r)
          if (Be.call(r, l))
            return !1;
        return !0;
      }
      function pb(r, o) {
        return Kn(r, o);
      }
      function fb(r, o, l) {
        l = typeof l == "function" ? l : t;
        var f = l ? l(r, o) : t;
        return f === t ? Kn(r, o, t, l) : !!f;
      }
      function yu(r) {
        if (!Ge(r))
          return !1;
        var o = vt(r);
        return o == nt || o == Ot || typeof r.message == "string" && typeof r.name == "string" && !Zn(r);
      }
      function hb(r) {
        return typeof r == "number" && $c(r);
      }
      function Mr(r) {
        if (!$e(r))
          return !1;
        var o = vt(r);
        return o == Tr || o == Tn || o == Je || o == Ih;
      }
      function cp(r) {
        return typeof r == "number" && r == ge(r);
      }
      function wo(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= $;
      }
      function $e(r) {
        var o = typeof r;
        return r != null && (o == "object" || o == "function");
      }
      function Ge(r) {
        return r != null && typeof r == "object";
      }
      var dp = Dc ? qt(Dc) : b0;
      function gb(r, o) {
        return r === o || Ws(r, o, cu(o));
      }
      function mb(r, o, l) {
        return l = typeof l == "function" ? l : t, Ws(r, o, cu(o), l);
      }
      function _b(r) {
        return pp(r) && r != +r;
      }
      function bb(r) {
        if (tm(r))
          throw new de(s);
        return id(r);
      }
      function vb(r) {
        return r === null;
      }
      function yb(r) {
        return r == null;
      }
      function pp(r) {
        return typeof r == "number" || Ge(r) && vt(r) == vr;
      }
      function Zn(r) {
        if (!Ge(r) || vt(r) != Rr)
          return !1;
        var o = Ga(r);
        if (o === null)
          return !0;
        var l = Be.call(o, "constructor") && o.constructor;
        return typeof l == "function" && l instanceof l && $a.call(l) == mg;
      }
      var ku = Ac ? qt(Ac) : v0;
      function kb(r) {
        return cp(r) && r >= -$ && r <= $;
      }
      var fp = Sc ? qt(Sc) : y0;
      function xo(r) {
        return typeof r == "string" || !pe(r) && Ge(r) && vt(r) == Pn;
      }
      function Ut(r) {
        return typeof r == "symbol" || Ge(r) && vt(r) == za;
      }
      var sn = Ec ? qt(Ec) : k0;
      function wb(r) {
        return r === t;
      }
      function xb(r) {
        return Ge(r) && ht(r) == zn;
      }
      function Cb(r) {
        return Ge(r) && vt(r) == Mh;
      }
      var Db = fo(Ys), Ab = fo(function(r, o) {
        return r <= o;
      });
      function hp(r) {
        if (!r)
          return [];
        if (St(r))
          return xo(r) ? pr(r) : At(r);
        if (In && r[In])
          return ng(r[In]());
        var o = ht(r), l = o == Dt ? Ns : o == dr ? Ua : un;
        return l(r);
      }
      function Ur(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = or(r), r === re || r === -re) {
          var o = r < 0 ? -1 : 1;
          return o * M;
        }
        return r === r ? r : 0;
      }
      function ge(r) {
        var o = Ur(r), l = o % 1;
        return o === o ? l ? o - l : o : 0;
      }
      function gp(r) {
        return r ? Ci(ge(r), 0, te) : 0;
      }
      function or(r) {
        if (typeof r == "number")
          return r;
        if (Ut(r))
          return G;
        if ($e(r)) {
          var o = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = $e(o) ? o + "" : o;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = Pc(r);
        var l = s1.test(r);
        return l || l1.test(r) ? U1(r.slice(2), l ? 2 : 8) : o1.test(r) ? G : +r;
      }
      function mp(r) {
        return kr(r, Et(r));
      }
      function Sb(r) {
        return r ? Ci(ge(r), -$, $) : r === 0 ? r : 0;
      }
      function Se(r) {
        return r == null ? "" : Mt(r);
      }
      var Eb = nn(function(r, o) {
        if (Yn(o) || St(o)) {
          kr(o, st(o), r);
          return;
        }
        for (var l in o)
          Be.call(o, l) && Hn(r, l, o[l]);
      }), _p = nn(function(r, o) {
        kr(o, Et(o), r);
      }), Co = nn(function(r, o, l, f) {
        kr(o, Et(o), r, f);
      }), Bb = nn(function(r, o, l, f) {
        kr(o, st(o), r, f);
      }), Fb = Ir(Vs);
      function Lb(r, o) {
        var l = rn(r);
        return o == null ? l : Yc(l, o);
      }
      var Tb = ye(function(r, o) {
        r = Te(r);
        var l = -1, f = o.length, _ = f > 2 ? o[2] : t;
        for (_ && yt(o[0], o[1], _) && (f = 1); ++l < f; )
          for (var w = o[l], D = Et(w), B = -1, R = D.length; ++B < R; ) {
            var U = D[B], V = r[U];
            (V === t || hr(V, Qi[U]) && !Be.call(r, U)) && (r[U] = w[U]);
          }
        return r;
      }), Rb = ye(function(r) {
        return r.push(t, Pd), It(bp, t, r);
      });
      function Pb(r, o) {
        return Fc(r, ae(o, 3), yr);
      }
      function zb(r, o) {
        return Fc(r, ae(o, 3), $s);
      }
      function Nb(r, o) {
        return r == null ? r : Hs(r, ae(o, 3), Et);
      }
      function Ob(r, o) {
        return r == null ? r : ed(r, ae(o, 3), Et);
      }
      function Ib(r, o) {
        return r && yr(r, ae(o, 3));
      }
      function qb(r, o) {
        return r && $s(r, ae(o, 3));
      }
      function Mb(r) {
        return r == null ? [] : no(r, st(r));
      }
      function Ub(r) {
        return r == null ? [] : no(r, Et(r));
      }
      function wu(r, o, l) {
        var f = r == null ? t : Di(r, o);
        return f === t ? l : f;
      }
      function Vb(r, o) {
        return r != null && Od(r, o, d0);
      }
      function xu(r, o) {
        return r != null && Od(r, o, p0);
      }
      var Hb = Bd(function(r, o, l) {
        o != null && typeof o.toString != "function" && (o = ja.call(o)), r[o] = l;
      }, Du(Bt)), $b = Bd(function(r, o, l) {
        o != null && typeof o.toString != "function" && (o = ja.call(o)), Be.call(r, o) ? r[o].push(l) : r[o] = [l];
      }, ae), jb = ye(jn);
      function st(r) {
        return St(r) ? Wc(r) : Gs(r);
      }
      function Et(r) {
        return St(r) ? Wc(r, !0) : w0(r);
      }
      function Kb(r, o) {
        var l = {};
        return o = ae(o, 3), yr(r, function(f, _, w) {
          Nr(l, o(f, _, w), f);
        }), l;
      }
      function Wb(r, o) {
        var l = {};
        return o = ae(o, 3), yr(r, function(f, _, w) {
          Nr(l, _, o(f, _, w));
        }), l;
      }
      var Gb = nn(function(r, o, l) {
        ao(r, o, l);
      }), bp = nn(function(r, o, l, f) {
        ao(r, o, l, f);
      }), Yb = Ir(function(r, o) {
        var l = {};
        if (r == null)
          return l;
        var f = !1;
        o = Ue(o, function(w) {
          return w = ii(w, r), f || (f = w.length > 1), w;
        }), kr(r, uu(r), l), f && (l = ir(l, m | b | v, H0));
        for (var _ = o.length; _--; )
          eu(l, o[_]);
        return l;
      });
      function Jb(r, o) {
        return vp(r, ko(ae(o)));
      }
      var Zb = Ir(function(r, o) {
        return r == null ? {} : C0(r, o);
      });
      function vp(r, o) {
        if (r == null)
          return {};
        var l = Ue(uu(r), function(f) {
          return [f];
        });
        return o = ae(o), cd(r, l, function(f, _) {
          return o(f, _[0]);
        });
      }
      function Xb(r, o, l) {
        o = ii(o, r);
        var f = -1, _ = o.length;
        for (_ || (_ = 1, r = t); ++f < _; ) {
          var w = r == null ? t : r[wr(o[f])];
          w === t && (f = _, w = l), r = Mr(w) ? w.call(r) : w;
        }
        return r;
      }
      function Qb(r, o, l) {
        return r == null ? r : Wn(r, o, l);
      }
      function e3(r, o, l, f) {
        return f = typeof f == "function" ? f : t, r == null ? r : Wn(r, o, l, f);
      }
      var yp = Td(st), kp = Td(Et);
      function t3(r, o, l) {
        var f = pe(r), _ = f || ai(r) || sn(r);
        if (o = ae(o, 4), l == null) {
          var w = r && r.constructor;
          _ ? l = f ? new w() : [] : $e(r) ? l = Mr(w) ? rn(Ga(r)) : {} : l = {};
        }
        return (_ ? er : yr)(r, function(D, B, R) {
          return o(l, D, B, R);
        }), l;
      }
      function r3(r, o) {
        return r == null ? !0 : eu(r, o);
      }
      function i3(r, o, l) {
        return r == null ? r : gd(r, o, iu(l));
      }
      function n3(r, o, l, f) {
        return f = typeof f == "function" ? f : t, r == null ? r : gd(r, o, iu(l), f);
      }
      function un(r) {
        return r == null ? [] : zs(r, st(r));
      }
      function a3(r) {
        return r == null ? [] : zs(r, Et(r));
      }
      function o3(r, o, l) {
        return l === t && (l = o, o = t), l !== t && (l = or(l), l = l === l ? l : 0), o !== t && (o = or(o), o = o === o ? o : 0), Ci(or(r), o, l);
      }
      function s3(r, o, l) {
        return o = Ur(o), l === t ? (l = o, o = 0) : l = Ur(l), r = or(r), f0(r, o, l);
      }
      function u3(r, o, l) {
        if (l && typeof l != "boolean" && yt(r, o, l) && (o = l = t), l === t && (typeof o == "boolean" ? (l = o, o = t) : typeof r == "boolean" && (l = r, r = t)), r === t && o === t ? (r = 0, o = 1) : (r = Ur(r), o === t ? (o = r, r = 0) : o = Ur(o)), r > o) {
          var f = r;
          r = o, o = f;
        }
        if (l || r % 1 || o % 1) {
          var _ = jc();
          return ft(r + _ * (o - r + M1("1e-" + ((_ + "").length - 1))), o);
        }
        return Zs(r, o);
      }
      var l3 = an(function(r, o, l) {
        return o = o.toLowerCase(), r + (l ? wp(o) : o);
      });
      function wp(r) {
        return Cu(Se(r).toLowerCase());
      }
      function xp(r) {
        return r = Se(r), r && r.replace(d1, Q1).replace(F1, "");
      }
      function c3(r, o, l) {
        r = Se(r), o = Mt(o);
        var f = r.length;
        l = l === t ? f : Ci(ge(l), 0, f);
        var _ = l;
        return l -= o.length, l >= 0 && r.slice(l, _) == o;
      }
      function d3(r) {
        return r = Se(r), r && jh.test(r) ? r.replace(ec, eg) : r;
      }
      function p3(r) {
        return r = Se(r), r && Zh.test(r) ? r.replace(vs, "\\$&") : r;
      }
      var f3 = an(function(r, o, l) {
        return r + (l ? "-" : "") + o.toLowerCase();
      }), h3 = an(function(r, o, l) {
        return r + (l ? " " : "") + o.toLowerCase();
      }), g3 = Ad("toLowerCase");
      function m3(r, o, l) {
        r = Se(r), o = ge(o);
        var f = o ? Zi(r) : 0;
        if (!o || f >= o)
          return r;
        var _ = (o - f) / 2;
        return po(Xa(_), l) + r + po(Za(_), l);
      }
      function _3(r, o, l) {
        r = Se(r), o = ge(o);
        var f = o ? Zi(r) : 0;
        return o && f < o ? r + po(o - f, l) : r;
      }
      function b3(r, o, l) {
        r = Se(r), o = ge(o);
        var f = o ? Zi(r) : 0;
        return o && f < o ? po(o - f, l) + r : r;
      }
      function v3(r, o, l) {
        return l || o == null ? o = 0 : o && (o = +o), Ag(Se(r).replace(ys, ""), o || 0);
      }
      function y3(r, o, l) {
        return (l ? yt(r, o, l) : o === t) ? o = 1 : o = ge(o), Xs(Se(r), o);
      }
      function k3() {
        var r = arguments, o = Se(r[0]);
        return r.length < 3 ? o : o.replace(r[1], r[2]);
      }
      var w3 = an(function(r, o, l) {
        return r + (l ? "_" : "") + o.toLowerCase();
      });
      function x3(r, o, l) {
        return l && typeof l != "number" && yt(r, o, l) && (o = l = t), l = l === t ? te : l >>> 0, l ? (r = Se(r), r && (typeof o == "string" || o != null && !ku(o)) && (o = Mt(o), !o && Ji(r)) ? ni(pr(r), 0, l) : r.split(o, l)) : [];
      }
      var C3 = an(function(r, o, l) {
        return r + (l ? " " : "") + Cu(o);
      });
      function D3(r, o, l) {
        return r = Se(r), l = l == null ? 0 : Ci(ge(l), 0, r.length), o = Mt(o), r.slice(l, l + o.length) == o;
      }
      function A3(r, o, l) {
        var f = y.templateSettings;
        l && yt(r, o, l) && (o = t), r = Se(r), o = Co({}, o, f, Rd);
        var _ = Co({}, o.imports, f.imports, Rd), w = st(_), D = zs(_, w), B, R, U = 0, V = o.interpolate || Na, H = "__p += '", W = Os(
          (o.escape || Na).source + "|" + V.source + "|" + (V === tc ? a1 : Na).source + "|" + (o.evaluate || Na).source + "|$",
          "g"
        ), ee = "//# sourceURL=" + (Be.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++z1 + "]") + `
`;
        r.replace(W, function(se, we, Ce, Vt, kt, Ht) {
          return Ce || (Ce = Vt), H += r.slice(U, Ht).replace(p1, tg), we && (B = !0, H += `' +
__e(` + we + `) +
'`), kt && (R = !0, H += `';
` + kt + `;
__p += '`), Ce && (H += `' +
((__t = (` + Ce + `)) == null ? '' : __t) +
'`), U = Ht + se.length, se;
        }), H += `';
`;
        var oe = Be.call(o, "variable") && o.variable;
        if (!oe)
          H = `with (obj) {
` + H + `
}
`;
        else if (i1.test(oe))
          throw new de(c);
        H = (R ? H.replace(Uh, "") : H).replace(Vh, "$1").replace(Hh, "$1;"), H = "function(" + (oe || "obj") + `) {
` + (oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (B ? ", __e = _.escape" : "") + (R ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + H + `return __p
}`;
        var _e = Dp(function() {
          return Ae(w, ee + "return " + H).apply(t, D);
        });
        if (_e.source = H, yu(_e))
          throw _e;
        return _e;
      }
      function S3(r) {
        return Se(r).toLowerCase();
      }
      function E3(r) {
        return Se(r).toUpperCase();
      }
      function B3(r, o, l) {
        if (r = Se(r), r && (l || o === t))
          return Pc(r);
        if (!r || !(o = Mt(o)))
          return r;
        var f = pr(r), _ = pr(o), w = zc(f, _), D = Nc(f, _) + 1;
        return ni(f, w, D).join("");
      }
      function F3(r, o, l) {
        if (r = Se(r), r && (l || o === t))
          return r.slice(0, Ic(r) + 1);
        if (!r || !(o = Mt(o)))
          return r;
        var f = pr(r), _ = Nc(f, pr(o)) + 1;
        return ni(f, 0, _).join("");
      }
      function L3(r, o, l) {
        if (r = Se(r), r && (l || o === t))
          return r.replace(ys, "");
        if (!r || !(o = Mt(o)))
          return r;
        var f = pr(r), _ = zc(f, pr(o));
        return ni(f, _).join("");
      }
      function T3(r, o) {
        var l = K, f = J;
        if ($e(o)) {
          var _ = "separator" in o ? o.separator : _;
          l = "length" in o ? ge(o.length) : l, f = "omission" in o ? Mt(o.omission) : f;
        }
        r = Se(r);
        var w = r.length;
        if (Ji(r)) {
          var D = pr(r);
          w = D.length;
        }
        if (l >= w)
          return r;
        var B = l - Zi(f);
        if (B < 1)
          return f;
        var R = D ? ni(D, 0, B).join("") : r.slice(0, B);
        if (_ === t)
          return R + f;
        if (D && (B += R.length - B), ku(_)) {
          if (r.slice(B).search(_)) {
            var U, V = R;
            for (_.global || (_ = Os(_.source, Se(rc.exec(_)) + "g")), _.lastIndex = 0; U = _.exec(V); )
              var H = U.index;
            R = R.slice(0, H === t ? B : H);
          }
        } else if (r.indexOf(Mt(_), B) != B) {
          var W = R.lastIndexOf(_);
          W > -1 && (R = R.slice(0, W));
        }
        return R + f;
      }
      function R3(r) {
        return r = Se(r), r && $h.test(r) ? r.replace(Ql, ug) : r;
      }
      var P3 = an(function(r, o, l) {
        return r + (l ? " " : "") + o.toUpperCase();
      }), Cu = Ad("toUpperCase");
      function Cp(r, o, l) {
        return r = Se(r), o = l ? t : o, o === t ? ig(r) ? dg(r) : G1(r) : r.match(o) || [];
      }
      var Dp = ye(function(r, o) {
        try {
          return It(r, t, o);
        } catch (l) {
          return yu(l) ? l : new de(l);
        }
      }), z3 = Ir(function(r, o) {
        return er(o, function(l) {
          l = wr(l), Nr(r, l, bu(r[l], r));
        }), r;
      });
      function N3(r) {
        var o = r == null ? 0 : r.length, l = ae();
        return r = o ? Ue(r, function(f) {
          if (typeof f[1] != "function")
            throw new tr(u);
          return [l(f[0]), f[1]];
        }) : [], ye(function(f) {
          for (var _ = -1; ++_ < o; ) {
            var w = r[_];
            if (It(w[0], this, f))
              return It(w[1], this, f);
          }
        });
      }
      function O3(r) {
        return u0(ir(r, m));
      }
      function Du(r) {
        return function() {
          return r;
        };
      }
      function I3(r, o) {
        return r == null || r !== r ? o : r;
      }
      var q3 = Ed(), M3 = Ed(!0);
      function Bt(r) {
        return r;
      }
      function Au(r) {
        return nd(typeof r == "function" ? r : ir(r, m));
      }
      function U3(r) {
        return od(ir(r, m));
      }
      function V3(r, o) {
        return sd(r, ir(o, m));
      }
      var H3 = ye(function(r, o) {
        return function(l) {
          return jn(l, r, o);
        };
      }), $3 = ye(function(r, o) {
        return function(l) {
          return jn(r, l, o);
        };
      });
      function Su(r, o, l) {
        var f = st(o), _ = no(o, f);
        l == null && !($e(o) && (_.length || !f.length)) && (l = o, o = r, r = this, _ = no(o, st(o)));
        var w = !($e(l) && "chain" in l) || !!l.chain, D = Mr(r);
        return er(_, function(B) {
          var R = o[B];
          r[B] = R, D && (r.prototype[B] = function() {
            var U = this.__chain__;
            if (w || U) {
              var V = r(this.__wrapped__), H = V.__actions__ = At(this.__actions__);
              return H.push({ func: R, args: arguments, thisArg: r }), V.__chain__ = U, V;
            }
            return R.apply(r, Xr([this.value()], arguments));
          });
        }), r;
      }
      function j3() {
        return lt._ === this && (lt._ = _g), this;
      }
      function Eu() {
      }
      function K3(r) {
        return r = ge(r), ye(function(o) {
          return ud(o, r);
        });
      }
      var W3 = au(Ue), G3 = au(Bc), Y3 = au(Fs);
      function Ap(r) {
        return pu(r) ? Ls(wr(r)) : D0(r);
      }
      function J3(r) {
        return function(o) {
          return r == null ? t : Di(r, o);
        };
      }
      var Z3 = Fd(), X3 = Fd(!0);
      function Bu() {
        return [];
      }
      function Fu() {
        return !1;
      }
      function Q3() {
        return {};
      }
      function e5() {
        return "";
      }
      function t5() {
        return !0;
      }
      function r5(r, o) {
        if (r = ge(r), r < 1 || r > $)
          return [];
        var l = te, f = ft(r, te);
        o = ae(o), r -= te;
        for (var _ = Ps(f, o); ++l < r; )
          o(l);
        return _;
      }
      function i5(r) {
        return pe(r) ? Ue(r, wr) : Ut(r) ? [r] : At(Kd(Se(r)));
      }
      function n5(r) {
        var o = ++gg;
        return Se(r) + o;
      }
      var a5 = co(function(r, o) {
        return r + o;
      }, 0), o5 = ou("ceil"), s5 = co(function(r, o) {
        return r / o;
      }, 1), u5 = ou("floor");
      function l5(r) {
        return r && r.length ? io(r, Bt, js) : t;
      }
      function c5(r, o) {
        return r && r.length ? io(r, ae(o, 2), js) : t;
      }
      function d5(r) {
        return Tc(r, Bt);
      }
      function p5(r, o) {
        return Tc(r, ae(o, 2));
      }
      function f5(r) {
        return r && r.length ? io(r, Bt, Ys) : t;
      }
      function h5(r, o) {
        return r && r.length ? io(r, ae(o, 2), Ys) : t;
      }
      var g5 = co(function(r, o) {
        return r * o;
      }, 1), m5 = ou("round"), _5 = co(function(r, o) {
        return r - o;
      }, 0);
      function b5(r) {
        return r && r.length ? Rs(r, Bt) : 0;
      }
      function v5(r, o) {
        return r && r.length ? Rs(r, ae(o, 2)) : 0;
      }
      return y.after = U_, y.ary = ip, y.assign = Eb, y.assignIn = _p, y.assignInWith = Co, y.assignWith = Bb, y.at = Fb, y.before = np, y.bind = bu, y.bindAll = z3, y.bindKey = ap, y.castArray = Q_, y.chain = ep, y.chunk = um, y.compact = lm, y.concat = cm, y.cond = N3, y.conforms = O3, y.constant = Du, y.countBy = b_, y.create = Lb, y.curry = op, y.curryRight = sp, y.debounce = up, y.defaults = Tb, y.defaultsDeep = Rb, y.defer = V_, y.delay = H_, y.difference = dm, y.differenceBy = pm, y.differenceWith = fm, y.drop = hm, y.dropRight = gm, y.dropRightWhile = mm, y.dropWhile = _m, y.fill = bm, y.filter = y_, y.flatMap = x_, y.flatMapDeep = C_, y.flatMapDepth = D_, y.flatten = Jd, y.flattenDeep = vm, y.flattenDepth = ym, y.flip = $_, y.flow = q3, y.flowRight = M3, y.fromPairs = km, y.functions = Mb, y.functionsIn = Ub, y.groupBy = A_, y.initial = xm, y.intersection = Cm, y.intersectionBy = Dm, y.intersectionWith = Am, y.invert = Hb, y.invertBy = $b, y.invokeMap = E_, y.iteratee = Au, y.keyBy = B_, y.keys = st, y.keysIn = Et, y.map = bo, y.mapKeys = Kb, y.mapValues = Wb, y.matches = U3, y.matchesProperty = V3, y.memoize = yo, y.merge = Gb, y.mergeWith = bp, y.method = H3, y.methodOf = $3, y.mixin = Su, y.negate = ko, y.nthArg = K3, y.omit = Yb, y.omitBy = Jb, y.once = j_, y.orderBy = F_, y.over = W3, y.overArgs = K_, y.overEvery = G3, y.overSome = Y3, y.partial = vu, y.partialRight = lp, y.partition = L_, y.pick = Zb, y.pickBy = vp, y.property = Ap, y.propertyOf = J3, y.pull = Fm, y.pullAll = Xd, y.pullAllBy = Lm, y.pullAllWith = Tm, y.pullAt = Rm, y.range = Z3, y.rangeRight = X3, y.rearg = W_, y.reject = P_, y.remove = Pm, y.rest = G_, y.reverse = mu, y.sampleSize = N_, y.set = Qb, y.setWith = e3, y.shuffle = O_, y.slice = zm, y.sortBy = M_, y.sortedUniq = Vm, y.sortedUniqBy = Hm, y.split = x3, y.spread = Y_, y.tail = $m, y.take = jm, y.takeRight = Km, y.takeRightWhile = Wm, y.takeWhile = Gm, y.tap = l_, y.throttle = J_, y.thru = _o, y.toArray = hp, y.toPairs = yp, y.toPairsIn = kp, y.toPath = i5, y.toPlainObject = mp, y.transform = t3, y.unary = Z_, y.union = Ym, y.unionBy = Jm, y.unionWith = Zm, y.uniq = Xm, y.uniqBy = Qm, y.uniqWith = e_, y.unset = r3, y.unzip = _u, y.unzipWith = Qd, y.update = i3, y.updateWith = n3, y.values = un, y.valuesIn = a3, y.without = t_, y.words = Cp, y.wrap = X_, y.xor = r_, y.xorBy = i_, y.xorWith = n_, y.zip = a_, y.zipObject = o_, y.zipObjectDeep = s_, y.zipWith = u_, y.entries = yp, y.entriesIn = kp, y.extend = _p, y.extendWith = Co, Su(y, y), y.add = a5, y.attempt = Dp, y.camelCase = l3, y.capitalize = wp, y.ceil = o5, y.clamp = o3, y.clone = eb, y.cloneDeep = rb, y.cloneDeepWith = ib, y.cloneWith = tb, y.conformsTo = nb, y.deburr = xp, y.defaultTo = I3, y.divide = s5, y.endsWith = c3, y.eq = hr, y.escape = d3, y.escapeRegExp = p3, y.every = v_, y.find = k_, y.findIndex = Gd, y.findKey = Pb, y.findLast = w_, y.findLastIndex = Yd, y.findLastKey = zb, y.floor = u5, y.forEach = tp, y.forEachRight = rp, y.forIn = Nb, y.forInRight = Ob, y.forOwn = Ib, y.forOwnRight = qb, y.get = wu, y.gt = ab, y.gte = ob, y.has = Vb, y.hasIn = xu, y.head = Zd, y.identity = Bt, y.includes = S_, y.indexOf = wm, y.inRange = s3, y.invoke = jb, y.isArguments = Ei, y.isArray = pe, y.isArrayBuffer = sb, y.isArrayLike = St, y.isArrayLikeObject = Ze, y.isBoolean = ub, y.isBuffer = ai, y.isDate = lb, y.isElement = cb, y.isEmpty = db, y.isEqual = pb, y.isEqualWith = fb, y.isError = yu, y.isFinite = hb, y.isFunction = Mr, y.isInteger = cp, y.isLength = wo, y.isMap = dp, y.isMatch = gb, y.isMatchWith = mb, y.isNaN = _b, y.isNative = bb, y.isNil = yb, y.isNull = vb, y.isNumber = pp, y.isObject = $e, y.isObjectLike = Ge, y.isPlainObject = Zn, y.isRegExp = ku, y.isSafeInteger = kb, y.isSet = fp, y.isString = xo, y.isSymbol = Ut, y.isTypedArray = sn, y.isUndefined = wb, y.isWeakMap = xb, y.isWeakSet = Cb, y.join = Sm, y.kebabCase = f3, y.last = ar, y.lastIndexOf = Em, y.lowerCase = h3, y.lowerFirst = g3, y.lt = Db, y.lte = Ab, y.max = l5, y.maxBy = c5, y.mean = d5, y.meanBy = p5, y.min = f5, y.minBy = h5, y.stubArray = Bu, y.stubFalse = Fu, y.stubObject = Q3, y.stubString = e5, y.stubTrue = t5, y.multiply = g5, y.nth = Bm, y.noConflict = j3, y.noop = Eu, y.now = vo, y.pad = m3, y.padEnd = _3, y.padStart = b3, y.parseInt = v3, y.random = u3, y.reduce = T_, y.reduceRight = R_, y.repeat = y3, y.replace = k3, y.result = Xb, y.round = m5, y.runInContext = T, y.sample = z_, y.size = I_, y.snakeCase = w3, y.some = q_, y.sortedIndex = Nm, y.sortedIndexBy = Om, y.sortedIndexOf = Im, y.sortedLastIndex = qm, y.sortedLastIndexBy = Mm, y.sortedLastIndexOf = Um, y.startCase = C3, y.startsWith = D3, y.subtract = _5, y.sum = b5, y.sumBy = v5, y.template = A3, y.times = r5, y.toFinite = Ur, y.toInteger = ge, y.toLength = gp, y.toLower = S3, y.toNumber = or, y.toSafeInteger = Sb, y.toString = Se, y.toUpper = E3, y.trim = B3, y.trimEnd = F3, y.trimStart = L3, y.truncate = T3, y.unescape = R3, y.uniqueId = n5, y.upperCase = P3, y.upperFirst = Cu, y.each = tp, y.eachRight = rp, y.first = Zd, Su(y, function() {
        var r = {};
        return yr(y, function(o, l) {
          Be.call(y.prototype, l) || (r[l] = o);
        }), r;
      }(), { chain: !1 }), y.VERSION = i, er(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        y[r].placeholder = y;
      }), er(["drop", "take"], function(r, o) {
        xe.prototype[r] = function(l) {
          l = l === t ? 1 : ot(ge(l), 0);
          var f = this.__filtered__ && !o ? new xe(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = ft(l, f.__takeCount__) : f.__views__.push({
            size: ft(l, te),
            type: r + (f.__dir__ < 0 ? "Right" : "")
          }), f;
        }, xe.prototype[r + "Right"] = function(l) {
          return this.reverse()[r](l).reverse();
        };
      }), er(["filter", "map", "takeWhile"], function(r, o) {
        var l = o + 1, f = l == ce || l == ve;
        xe.prototype[r] = function(_) {
          var w = this.clone();
          return w.__iteratees__.push({
            iteratee: ae(_, 3),
            type: l
          }), w.__filtered__ = w.__filtered__ || f, w;
        };
      }), er(["head", "last"], function(r, o) {
        var l = "take" + (o ? "Right" : "");
        xe.prototype[r] = function() {
          return this[l](1).value()[0];
        };
      }), er(["initial", "tail"], function(r, o) {
        var l = "drop" + (o ? "" : "Right");
        xe.prototype[r] = function() {
          return this.__filtered__ ? new xe(this) : this[l](1);
        };
      }), xe.prototype.compact = function() {
        return this.filter(Bt);
      }, xe.prototype.find = function(r) {
        return this.filter(r).head();
      }, xe.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, xe.prototype.invokeMap = ye(function(r, o) {
        return typeof r == "function" ? new xe(this) : this.map(function(l) {
          return jn(l, r, o);
        });
      }), xe.prototype.reject = function(r) {
        return this.filter(ko(ae(r)));
      }, xe.prototype.slice = function(r, o) {
        r = ge(r);
        var l = this;
        return l.__filtered__ && (r > 0 || o < 0) ? new xe(l) : (r < 0 ? l = l.takeRight(-r) : r && (l = l.drop(r)), o !== t && (o = ge(o), l = o < 0 ? l.dropRight(-o) : l.take(o - r)), l);
      }, xe.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, xe.prototype.toArray = function() {
        return this.take(te);
      }, yr(xe.prototype, function(r, o) {
        var l = /^(?:filter|find|map|reject)|While$/.test(o), f = /^(?:head|last)$/.test(o), _ = y[f ? "take" + (o == "last" ? "Right" : "") : o], w = f || /^find/.test(o);
        _ && (y.prototype[o] = function() {
          var D = this.__wrapped__, B = f ? [1] : arguments, R = D instanceof xe, U = B[0], V = R || pe(D), H = function(we) {
            var Ce = _.apply(y, Xr([we], B));
            return f && W ? Ce[0] : Ce;
          };
          V && l && typeof U == "function" && U.length != 1 && (R = V = !1);
          var W = this.__chain__, ee = !!this.__actions__.length, oe = w && !W, _e = R && !ee;
          if (!w && V) {
            D = _e ? D : new xe(this);
            var se = r.apply(D, B);
            return se.__actions__.push({ func: _o, args: [H], thisArg: t }), new rr(se, W);
          }
          return oe && _e ? r.apply(this, B) : (se = this.thru(H), oe ? f ? se.value()[0] : se.value() : se);
        });
      }), er(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var o = Va[r], l = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(r);
        y.prototype[r] = function() {
          var _ = arguments;
          if (f && !this.__chain__) {
            var w = this.value();
            return o.apply(pe(w) ? w : [], _);
          }
          return this[l](function(D) {
            return o.apply(pe(D) ? D : [], _);
          });
        };
      }), yr(xe.prototype, function(r, o) {
        var l = y[o];
        if (l) {
          var f = l.name + "";
          Be.call(tn, f) || (tn[f] = []), tn[f].push({ name: o, func: l });
        }
      }), tn[lo(t, S).name] = [{
        name: "wrapper",
        func: t
      }], xe.prototype.clone = Rg, xe.prototype.reverse = Pg, xe.prototype.value = zg, y.prototype.at = c_, y.prototype.chain = d_, y.prototype.commit = p_, y.prototype.next = f_, y.prototype.plant = g_, y.prototype.reverse = m_, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = __, y.prototype.first = y.prototype.head, In && (y.prototype[In] = h_), y;
    }, Xi = pg();
    yi ? ((yi.exports = Xi)._ = Xi, As._ = Xi) : lt._ = Xi;
  }).call(ui);
})(Yo, Yo.exports);
var mk = Yo.exports;
const Pi = {
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
}, _k = (n) => {
  const e = n ? [...new Set(n.split(","))] : [], i = window.BikeMatrix.getConfig(), a = [], s = Object.entries(i.products).reduce((u, [c, d]) => (!a.includes(c) && d.skus.some((p) => e.includes(p.trim())) && (u.push(d), a.push(c)), u), []);
  return mk.sortBy(s, (u) => u["bm-sort"] || u);
}, bk = (n) => {
  if (!(n != null && n.length))
    return [];
  const e = n.filter((t) => t.compatible).map((t) => t.sku).join(",");
  return _k(e);
}, vk = (n, e) => jt.value ? {
  type: "unknown",
  ...Pi.unknown
} : n > 1 ? {
  type: "pageone",
  ...Pi.pageone
} : (e == null ? void 0 : e.length) > 0 ? {
  type: "compatibleresults",
  ...Pi.compatibleresults
} : Mo.value ? {
  type: "error",
  ...Pi.error
} : {
  type: "noresults",
  ...Pi.noresults
}, yk = () => `
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
function kk({
  "data-title": n
}) {
  var E;
  const e = Oe(null), t = window.BikeMatrix, i = t.getConfig(), [a, s] = Q(!1), [u, c] = Q(!0), [d, p] = Q({
    type: "unknown",
    details: "",
    details_code: ""
  }), [h, m] = Q([]), {
    t: b
  } = We(), v = !!t.getActiveSubscription(), C = i.currentCollectionHandle || "", k = i.collectionUrl || "", x = i.compatiblityListCurrentPage || 0, S = !!i.showCompatibleList || !1, A = i.logLevel || "none", F = (L) => {
    var K, J;
    if (!(e != null && e.current))
      return null;
    const z = (J = (K = e == null ? void 0 : e.current) == null ? void 0 : K.parentElement) == null ? void 0 : J.querySelector('template[slot="product-card"]');
    A === "verbose" && console.log("CompatibleList Product Card Template: ", z);
    const N = (z ? z.innerHTML : yk()).replace(i.isShopify ? /\@\@#if\s+(\w+)\@\@(.*?)\@\@\/if\@\@/gs : /\{\{#if\s+(\w+)\}\}(.*?)\{\{\/if\}\}/gs, (X, ne, ce) => L[ne] ? ce : "").replace(i.isShopify ? /\@\@\s*(\w+)\s*\@\@/g : /\{\{\s*(\w+)\s*\}\}/g, (X, ne) => {
      if (ne === "compatibility")
        return '<bikematrix-compatibilitylabel data-type="compatible"></bikematrix-compatibilitylabel>';
      const ce = L[ne];
      return ne === "productTitle" ? gk.decode(ce) : ce || "";
    });
    return A === "verbose" && console.log("CompatibleList Product Card: ", N), g("li", {
      dangerouslySetInnerHTML: {
        __html: N
      }
    }, L.productId);
  };
  return le(() => {
    var N, K;
    const L = i.collections.map((J) => J.handle) || [];
    if (!S || !L.includes(C)) {
      p({
        type: "unknown",
        ...Pi.unknown
      }), s(!1);
      return;
    }
    if (!Ee.value) {
      p({
        type: "selectbike",
        ...Pi.selectbike
      }), s(!jt.value);
      return;
    }
    if (!((K = (N = Ee.value) == null ? void 0 : N.compatibleCollections) == null ? void 0 : K.find((J) => J.handle === C))) {
      s(!1);
      return;
    }
    const P = bk(gn.value).map(F);
    m(P);
    const I = vk(x, P);
    p(I), s(!0);
  }, [C, Ee.value, gn.value, jt.value, x]), g(ie, {
    children: v && a && g("div", {
      ref: e,
      children: [g("style", {
        type: "text/css",
        children: fk
      }), g("div", {
        class: "bike-matrix-container",
        children: g("div", {
          class: "bm-compatible-products-wrapper",
          children: [g("div", {
            class: "bm-compatible-products-title",
            children: g("div", {
              id: "bm_customAccordion",
              class: u && "active",
              onClick: () => c(!u),
              children: [g("span", {
                children: n || b("compatiblelist_header")
              }), g("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                focusable: "false",
                role: "presentation",
                class: "icon",
                children: g("path", {
                  d: "M20 8.5 12.5 16 5 8.5",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  fill: "none"
                })
              })]
            })
          }), g("div", {
            class: "bm-compatible-products-list",
            id: "bm_compatibleProductsListPanel",
            style: u ? "display: block" : "display: none",
            children: [g("div", {
              class: "lds-ring",
              id: "bm-loading-spinner",
              style: jt.value ? "" : "display: none",
              children: [g("div", {}), g("div", {}), g("div", {}), g("div", {})]
            }), !jt.value && {
              error: g("p", {
                children: d.details
              }),
              unknown: g("p", {
                class: "bm-compatible-products-message"
              }),
              unavailable: g("p", {
                class: "bm-compatible-products-message",
                children: b(d == null ? void 0 : d.details_code)
              }),
              selectbike: g("div", {
                onClick: (L) => {
                  L.preventDefault(), document.dispatchEvent(new Event("BmToggleModal", {
                    bubbles: !0,
                    composed: !0
                  }));
                },
                style: "cursor: pointer;",
                children: g("p", {
                  class: "bm-compatible-products-message",
                  children: b(d == null ? void 0 : d.details_code)
                })
              }),
              pageone: g("p", {
                class: "bm-compatible-products-message",
                children: g("div", {
                  dangerouslySetInnerHTML: {
                    __html: (E = b(d == null ? void 0 : d.details_code)) == null ? void 0 : E.replace("<a>", "<a href='" + k + "'>")
                  }
                })
              }),
              noresults: g("p", {
                class: "bm-compatible-products-message",
                children: b(d == null ? void 0 : d.details_code)
              }),
              compatibleresults: g(ie, {})
            }[d == null ? void 0 : d.type], g("ul", {
              id: "bm_compatibleProductsList",
              children: !jt.value && (d == null ? void 0 : d.type) === "compatibleresults" && h
            }), g("div", {
              class: "bm_result_link",
              children: g("a", {
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
const wk = `.bike-selector-banner_wrapper{position:relative;height:40px}.bike-selector-banner{width:100%;height:40px;position:absolute;top:0;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-bottom:2rem}.floating{border-radius:12px;box-shadow:0 4px 4px #0000001f}.bike-selector-banner_title{color:#fff;text-transform:uppercase;padding-top:2px;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px}@media (width <= 991px){.bike-selector-banner_title{display:none}}.bike-selector-banner_title_mobile{display:none;text-transform:uppercase;font:var(--heading-font-family);font-style:var(--heading-font-style);font-weight:var(--heading-font-weight);font-size:18px;color:#fff;padding-top:2px}@media (width <= 991px){.bike-selector-banner_title_mobile{display:block}}.bike-selector-banner_svg{height:19px}.bike-selector-banner_icon-wrapper{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.bike-selector-banner_tick{width:12px;height:12px;position:absolute;right:6px;top:5px}
`, xk = `.bm-button{cursor:pointer;border:none;font-weight:600}.bm-header-btn{display:inline-block;font-weight:200;background-color:#000;color:#fff;border-radius:5px;text-align:center;font-size:.75em;cursor:pointer}.bm-icon{display:inline-block;padding:6px;font-weight:200;border:none;text-align:center;font-size:.75em;background-color:transparent;height:44px;width:44px}.bm-icon svg{width:32px;height:32px}@media screen and (max-width: 991px){.bm-icon{padding:10px}.bm-icon svg{width:24px;height:24px}}.bm-bike-select-icon.show-selected,.bm-bike-select-icon.show-selected-banner{position:relative}.bm-bike-select-icon.show-selected:after{content:"";width:12px;height:12px;top:2px;right:2px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}.bm-bike-select-icon.show-selected-banner:after{content:"";width:12px;height:12px;top:6px;right:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='512' height='512' x='0' y='0' viewBox='0 0 191.667 191.667' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cpath d='M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646-60.207 60.207a13.463 13.463 0 0 1-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 0 1-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 0 1 9.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 0 1 9.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z' fill='%2300ab04' opacity='1' data-original='%23000000' class=''%3E%3C/path%3E%3C/g%3E%3C/svg%3E");position:absolute;background-size:contain}
`;
function Ph({
  "data-color": n,
  banner: e
}) {
  const t = Ee.value;
  return window.BikeMatrix.getConfig(), g(ie, {
    children: [g("style", {
      type: "text/css",
      children: xk
    }), g("div", {
      className: "bm-bikon-wrapper",
      children: g("button", {
        className: `p-2 !ml-auto header__icon bm-header-btn bm-icon bm-bike-select-icon ${t && !e ? "show-selected" : t && e ? "show-selected-banner" : ""}`,
        style: {
          color: n
        },
        onClick: e ? () => {
        } : () => kn(),
        children: g("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 48 48",
          className: "w-full h-full",
          children: g("path", {
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
function Ck({
  "data-title": n,
  "data-color": e,
  "data-full-width": t,
  "data-font-color": i,
  "data-show": a
}) {
  const s = Ee.value;
  return typeof a > "u" || a !== "true" && a !== "" ? g(ie, {}) : g(ie, {
    children: [g("style", {
      type: "text/css",
      children: wk
    }), g("div", {
      onClick: () => {
        kn();
      },
      class: "bike-selector-banner_wrapper",
      children: g("div", {
        class: `bike-selector-banner ${t === "false" ? "floating" : ""}`,
        style: {
          backgroundColor: e ?? "#000",
          maxWidth: t ?? null
        },
        children: g(ie, {
          children: [g("h2", {
            class: "bike-selector-banner_title",
            style: {
              color: i === "black" ? "#000" : "#fff"
            },
            children: s ? s.brand + " " + s.frameSeries : n
          }), g("h2", {
            class: "bike-selector-banner_title_mobile",
            style: {
              color: i === "black" ? "#000" : "#fff"
            },
            children: s ? s.brand : "Check Compatibility"
          }), g(Ph, {
            "data-color": "#fff",
            banner: !0
          })]
        })
      })
    })]
  });
}
const Dk = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, e) {
    console && console[n] && console[n].apply(console, e);
  }
};
class Jo {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Dk, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, i, a) {
    return a && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Jo(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Jo(this.logger, e);
  }
}
var Sr = new Jo();
class ls {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((i) => {
      this.observers[i] || (this.observers[i] = /* @__PURE__ */ new Map());
      const a = this.observers[i].get(t) || 0;
      this.observers[i].set(t, a + 1);
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
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      i[a - 1] = arguments[a];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((u) => {
      let [c, d] = u;
      for (let p = 0; p < d; p++)
        c(...i);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((u) => {
      let [c, d] = u;
      for (let p = 0; p < d; p++)
        c.apply(c, [e, ...i]);
    });
  }
}
const ia = () => {
  let n, e;
  const t = new Promise((i, a) => {
    n = i, e = a;
  });
  return t.resolve = n, t.reject = e, t;
}, A2 = (n) => n == null ? "" : "" + n, Ak = (n, e, t) => {
  n.forEach((i) => {
    e[i] && (t[i] = e[i]);
  });
}, Sk = /###/g, S2 = (n) => n && n.indexOf("###") > -1 ? n.replace(Sk, ".") : n, E2 = (n) => !n || typeof n == "string", ma = (n, e, t) => {
  const i = typeof e != "string" ? e : e.split(".");
  let a = 0;
  for (; a < i.length - 1; ) {
    if (E2(n))
      return {};
    const s = S2(i[a]);
    !n[s] && t && (n[s] = new t()), Object.prototype.hasOwnProperty.call(n, s) ? n = n[s] : n = {}, ++a;
  }
  return E2(n) ? {} : {
    obj: n,
    k: S2(i[a])
  };
}, B2 = (n, e, t) => {
  const {
    obj: i,
    k: a
  } = ma(n, e, Object);
  if (i !== void 0 || e.length === 1) {
    i[a] = t;
    return;
  }
  let s = e[e.length - 1], u = e.slice(0, e.length - 1), c = ma(n, u, Object);
  for (; c.obj === void 0 && u.length; )
    s = `${u[u.length - 1]}.${s}`, u = u.slice(0, u.length - 1), c = ma(n, u, Object), c && c.obj && typeof c.obj[`${c.k}.${s}`] < "u" && (c.obj = void 0);
  c.obj[`${c.k}.${s}`] = t;
}, Ek = (n, e, t, i) => {
  const {
    obj: a,
    k: s
  } = ma(n, e, Object);
  a[s] = a[s] || [], a[s].push(t);
}, Zo = (n, e) => {
  const {
    obj: t,
    k: i
  } = ma(n, e);
  if (t)
    return t[i];
}, Bk = (n, e, t) => {
  const i = Zo(n, t);
  return i !== void 0 ? i : Zo(e, t);
}, zh = (n, e, t) => {
  for (const i in e)
    i !== "__proto__" && i !== "constructor" && (i in n ? typeof n[i] == "string" || n[i] instanceof String || typeof e[i] == "string" || e[i] instanceof String ? t && (n[i] = e[i]) : zh(n[i], e[i], t) : n[i] = e[i]);
  return n;
}, cn = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Fk = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Lk = (n) => typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => Fk[e]) : n;
class Tk {
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
const Rk = [" ", ",", "?", "!", ";"], Pk = new Tk(20), zk = (n, e, t) => {
  e = e || "", t = t || "";
  const i = Rk.filter((u) => e.indexOf(u) < 0 && t.indexOf(u) < 0);
  if (i.length === 0)
    return !0;
  const a = Pk.getRegExp(`(${i.map((u) => u === "?" ? "\\?" : u).join("|")})`);
  let s = !a.test(n);
  if (!s) {
    const u = n.indexOf(t);
    u > 0 && !a.test(n.substring(0, u)) && (s = !0);
  }
  return s;
}, vl = function(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n)
    return;
  if (n[e])
    return n[e];
  const i = e.split(t);
  let a = n;
  for (let s = 0; s < i.length; ) {
    if (!a || typeof a != "object")
      return;
    let u, c = "";
    for (let d = s; d < i.length; ++d)
      if (d !== s && (c += t), c += i[d], u = a[c], u !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof u) > -1 && d < i.length - 1)
          continue;
        s += d - s + 1;
        break;
      }
    a = u;
  }
  return a;
}, Xo = (n) => n && n.replace("_", "-");
class F2 extends ls {
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
  getResource(e, t, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, u = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let c;
    e.indexOf(".") > -1 ? c = e.split(".") : (c = [e, t], i && (Array.isArray(i) ? c.push(...i) : typeof i == "string" && s ? c.push(...i.split(s)) : c.push(i)));
    const d = Zo(this.data, c);
    return !d && !t && !i && e.indexOf(".") > -1 && (e = c[0], t = c[1], i = c.slice(2).join(".")), d || !u || typeof i != "string" ? d : vl(this.data && this.data[e] && this.data[e][t], i, s);
  }
  addResource(e, t, i, a) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let c = [e, t];
    i && (c = c.concat(u ? i.split(u) : i)), e.indexOf(".") > -1 && (c = e.split("."), a = t, t = c[1]), this.addNamespaces(t), B2(this.data, c, a), s.silent || this.emit("added", e, t, i, a);
  }
  addResources(e, t, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const s in i)
      (typeof i[s] == "string" || Array.isArray(i[s])) && this.addResource(e, t, s, i[s], {
        silent: !0
      });
    a.silent || this.emit("added", e, t, i);
  }
  addResourceBundle(e, t, i, a, s) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, c = [e, t];
    e.indexOf(".") > -1 && (c = e.split("."), a = i, i = t, t = c[1]), this.addNamespaces(t);
    let d = Zo(this.data, c) || {};
    u.skipCopy || (i = JSON.parse(JSON.stringify(i))), a ? zh(d, i, s) : d = {
      ...d,
      ...i
    }, B2(this.data, c, d), u.silent || this.emit("added", e, t, i);
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
var Nh = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, i, a) {
    return n.forEach((s) => {
      this.processors[s] && (e = this.processors[s].process(e, t, i, a));
    }), e;
  }
};
const L2 = {};
class Qo extends ls {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Ak(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Sr.create("translator");
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
    const i = this.resolve(e, t);
    return i && i.res !== void 0;
  }
  extractFromKey(e, t) {
    let i = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const a = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let s = t.ns || this.options.defaultNS || [];
    const u = i && e.indexOf(i) > -1, c = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !zk(e, i, a);
    if (u && !c) {
      const d = e.match(this.interpolator.nestingRegexp);
      if (d && d.length > 0)
        return {
          key: e,
          namespaces: s
        };
      const p = e.split(i);
      (i !== a || i === a && this.options.ns.indexOf(p[0]) > -1) && (s = p.shift()), e = p.join(a);
    }
    return typeof s == "string" && (s = [s]), {
      key: e,
      namespaces: s
    };
  }
  translate(e, t, i) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null)
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const a = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, s = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: u,
      namespaces: c
    } = this.extractFromKey(e[e.length - 1], t), d = c[c.length - 1], p = t.lng || this.language, h = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p && p.toLowerCase() === "cimode") {
      if (h) {
        const E = t.nsSeparator || this.options.nsSeparator;
        return a ? {
          res: `${d}${E}${u}`,
          usedKey: u,
          exactUsedKey: u,
          usedLng: p,
          usedNS: d,
          usedParams: this.getUsedParamsDetails(t)
        } : `${d}${E}${u}`;
      }
      return a ? {
        res: u,
        usedKey: u,
        exactUsedKey: u,
        usedLng: p,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(t)
      } : u;
    }
    const m = this.resolve(e, t);
    let b = m && m.res;
    const v = m && m.usedKey || u, C = m && m.exactUsedKey || u, k = Object.prototype.toString.apply(b), x = ["[object Number]", "[object Function]", "[object RegExp]"], S = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, A = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (A && b && (typeof b != "string" && typeof b != "boolean" && typeof b != "number") && x.indexOf(k) < 0 && !(typeof S == "string" && Array.isArray(b))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const E = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, b, {
          ...t,
          ns: c
        }) : `key '${u} (${this.language})' returned an object instead of string.`;
        return a ? (m.res = E, m.usedParams = this.getUsedParamsDetails(t), m) : E;
      }
      if (s) {
        const E = Array.isArray(b), L = E ? [] : {}, z = E ? C : v;
        for (const P in b)
          if (Object.prototype.hasOwnProperty.call(b, P)) {
            const I = `${z}${s}${P}`;
            L[P] = this.translate(I, {
              ...t,
              joinArrays: !1,
              ns: c
            }), L[P] === I && (L[P] = b[P]);
          }
        b = L;
      }
    } else if (A && typeof S == "string" && Array.isArray(b))
      b = b.join(S), b && (b = this.extendTranslation(b, e, t, i));
    else {
      let E = !1, L = !1;
      const z = t.count !== void 0 && typeof t.count != "string", P = Qo.hasDefaultValue(t), I = z ? this.pluralResolver.getSuffix(p, t.count, t) : "", N = t.ordinal && z ? this.pluralResolver.getSuffix(p, t.count, {
        ordinal: !1
      }) : "", K = z && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), J = K && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${I}`] || t[`defaultValue${N}`] || t.defaultValue;
      !this.isValidLookup(b) && P && (E = !0, b = J), this.isValidLookup(b) || (L = !0, b = u);
      const ne = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && L ? void 0 : b, ce = P && J !== b && this.options.updateMissing;
      if (L || E || ce) {
        if (this.logger.log(ce ? "updateKey" : "missingKey", p, d, u, ce ? J : b), s) {
          const $ = this.resolve(u, {
            ...t,
            keySeparator: !1
          });
          $ && $.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let be = [];
        const ve = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && ve && ve[0])
          for (let $ = 0; $ < ve.length; $++)
            be.push(ve[$]);
        else
          this.options.saveMissingTo === "all" ? be = this.languageUtils.toResolveHierarchy(t.lng || this.language) : be.push(t.lng || this.language);
        const re = ($, M, G) => {
          const te = P && G !== b ? G : ne;
          this.options.missingKeyHandler ? this.options.missingKeyHandler($, d, M, te, ce, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing($, d, M, te, ce, t), this.emit("missingKey", $, d, M, b);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && z ? be.forEach(($) => {
          const M = this.pluralResolver.getSuffixes($, t);
          K && t[`defaultValue${this.options.pluralSeparator}zero`] && M.indexOf(`${this.options.pluralSeparator}zero`) < 0 && M.push(`${this.options.pluralSeparator}zero`), M.forEach((G) => {
            re([$], u + G, t[`defaultValue${G}`] || J);
          });
        }) : re(be, u, J));
      }
      b = this.extendTranslation(b, e, t, m, i), L && b === u && this.options.appendNamespaceToMissingKey && (b = `${d}:${u}`), (L || E) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? b = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${d}:${u}` : u, E ? b : void 0) : b = this.options.parseMissingKeyHandler(b));
    }
    return a ? (m.res = b, m.usedParams = this.getUsedParamsDetails(t), m) : b;
  }
  extendTranslation(e, t, i, a, s) {
    var u = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...i
      }, i.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
        resolved: a
      });
    else if (!i.skipInterpolation) {
      i.interpolation && this.interpolator.init({
        ...i,
        interpolation: {
          ...this.options.interpolation,
          ...i.interpolation
        }
      });
      const p = typeof e == "string" && (i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (p) {
        const b = e.match(this.interpolator.nestingRegexp);
        h = b && b.length;
      }
      let m = i.replace && typeof i.replace != "string" ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (m = {
        ...this.options.interpolation.defaultVariables,
        ...m
      }), e = this.interpolator.interpolate(e, m, i.lng || this.language || a.usedLng, i), p) {
        const b = e.match(this.interpolator.nestingRegexp), v = b && b.length;
        h < v && (i.nest = !1);
      }
      !i.lng && this.options.compatibilityAPI !== "v1" && a && a.res && (i.lng = this.language || a.usedLng), i.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var b = arguments.length, v = new Array(b), C = 0; C < b; C++)
          v[C] = arguments[C];
        return s && s[0] === v[0] && !i.context ? (u.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${t[0]}`), null) : u.translate(...v, t);
      }, i)), i.interpolation && this.interpolator.reset();
    }
    const c = i.postProcess || this.options.postProcess, d = typeof c == "string" ? [c] : c;
    return e != null && d && d.length && i.applyPostProcessor !== !1 && (e = Nh.handle(d, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i, a, s, u, c;
    return typeof e == "string" && (e = [e]), e.forEach((d) => {
      if (this.isValidLookup(i))
        return;
      const p = this.extractFromKey(d, t), h = p.key;
      a = h;
      let m = p.namespaces;
      this.options.fallbackNS && (m = m.concat(this.options.fallbackNS));
      const b = t.count !== void 0 && typeof t.count != "string", v = b && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), C = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", k = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      m.forEach((x) => {
        this.isValidLookup(i) || (c = x, !L2[`${k[0]}-${x}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(c) && (L2[`${k[0]}-${x}`] = !0, this.logger.warn(`key "${a}" for languages "${k.join(", ")}" won't get resolved as namespace "${c}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), k.forEach((S) => {
          if (this.isValidLookup(i))
            return;
          u = S;
          const A = [h];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(A, h, S, x, t);
          else {
            let E;
            b && (E = this.pluralResolver.getSuffix(S, t.count, t));
            const L = `${this.options.pluralSeparator}zero`, z = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (b && (A.push(h + E), t.ordinal && E.indexOf(z) === 0 && A.push(h + E.replace(z, this.options.pluralSeparator)), v && A.push(h + L)), C) {
              const P = `${h}${this.options.contextSeparator}${t.context}`;
              A.push(P), b && (A.push(P + E), t.ordinal && E.indexOf(z) === 0 && A.push(P + E.replace(z, this.options.pluralSeparator)), v && A.push(P + L));
            }
          }
          let F;
          for (; F = A.pop(); )
            this.isValidLookup(i) || (s = F, i = this.getResource(S, x, F, t));
        }));
      });
    }), {
      res: i,
      usedKey: a,
      exactUsedKey: s,
      usedLng: u,
      usedNS: c
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, i, a) : this.resourceStore.getResource(e, t, i, a);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = e.replace && typeof e.replace != "string";
    let a = i ? e.replace : e;
    if (i && typeof e.count < "u" && (a.count = e.count), this.options.interpolation.defaultVariables && (a = {
      ...this.options.interpolation.defaultVariables,
      ...a
    }), !i) {
      a = {
        ...a
      };
      for (const s of t)
        delete a[s];
    }
    return a;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i) && t === i.substring(0, t.length) && e[i] !== void 0)
        return !0;
    return !1;
  }
}
const ju = (n) => n.charAt(0).toUpperCase() + n.slice(1);
class T2 {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Sr.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Xo(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Xo(e), !e || e.indexOf("-") < 0)
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
      let i = e.split("-");
      return this.options.lowerCaseLng ? i = i.map((a) => a.toLowerCase()) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), t.indexOf(i[1].toLowerCase()) > -1 && (i[1] = ju(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), t.indexOf(i[1].toLowerCase()) > -1 && (i[1] = ju(i[1].toLowerCase())), t.indexOf(i[2].toLowerCase()) > -1 && (i[2] = ju(i[2].toLowerCase()))), i.join("-");
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
    return e.forEach((i) => {
      if (t)
        return;
      const a = this.formatLanguageCode(i);
      (!this.options.supportedLngs || this.isSupportedCode(a)) && (t = a);
    }), !t && this.options.supportedLngs && e.forEach((i) => {
      if (t)
        return;
      const a = this.getLanguagePartFromCode(i);
      if (this.isSupportedCode(a))
        return t = a;
      t = this.options.supportedLngs.find((s) => {
        if (s === a)
          return s;
        if (!(s.indexOf("-") < 0 && a.indexOf("-") < 0) && (s.indexOf("-") > 0 && a.indexOf("-") < 0 && s.substring(0, s.indexOf("-")) === a || s.indexOf(a) === 0 && a.length > 1))
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
    let i = e[t];
    return i || (i = e[this.getScriptPartFromCode(t)]), i || (i = e[this.formatLanguageCode(t)]), i || (i = e[this.getLanguagePartFromCode(t)]), i || (i = e.default), i || [];
  }
  toResolveHierarchy(e, t) {
    const i = this.getFallbackCodes(t || this.options.fallbackLng || [], e), a = [], s = (u) => {
      u && (this.isSupportedCode(u) ? a.push(u) : this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : typeof e == "string" && s(this.formatLanguageCode(e)), i.forEach((u) => {
      a.indexOf(u) < 0 && s(this.formatLanguageCode(u));
    }), a;
  }
}
let Nk = [{
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
}], Ok = {
  1: (n) => +(n > 1),
  2: (n) => +(n != 1),
  3: (n) => 0,
  4: (n) => n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,
  5: (n) => n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5,
  6: (n) => n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2,
  7: (n) => n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,
  8: (n) => n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3,
  9: (n) => +(n >= 2),
  10: (n) => n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4,
  11: (n) => n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3,
  12: (n) => +(n % 10 != 1 || n % 100 == 11),
  13: (n) => +(n !== 0),
  14: (n) => n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3,
  15: (n) => n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,
  16: (n) => n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2,
  17: (n) => n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1,
  18: (n) => n == 0 ? 0 : n == 1 ? 1 : 2,
  19: (n) => n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3,
  20: (n) => n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2,
  21: (n) => n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0,
  22: (n) => n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3
};
const Ik = ["v1", "v2", "v3"], qk = ["v4"], R2 = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Mk = () => {
  const n = {};
  return Nk.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: Ok[e.fc]
      };
    });
  }), n;
};
class Uk {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = Sr.create("pluralResolver"), (!this.options.compatibilityJSON || qk.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Mk(), this.pluralRulesCache = {};
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
        const i = Xo(e === "dev" ? "en" : e), a = t.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
          cleanedCode: i,
          type: a
        });
        if (s in this.pluralRulesCache)
          return this.pluralRulesCache[s];
        const u = new Intl.PluralRules(i, {
          type: a
        });
        return this.pluralRulesCache[s] = u, u;
      } catch {
        return;
      }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = this.getRule(e, t);
    return this.shouldUseIntlApi() ? i && i.resolvedOptions().pluralCategories.length > 1 : i && i.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, i).map((a) => `${t}${a}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = this.getRule(e, t);
    return i ? this.shouldUseIntlApi() ? i.resolvedOptions().pluralCategories.sort((a, s) => R2[a] - R2[s]).map((a) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : i.numbers.map((a) => this.getSuffix(e, a, t)) : [];
  }
  getSuffix(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(e, i);
    return a ? this.shouldUseIntlApi() ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${a.select(t)}` : this.getSuffixRetroCompatible(a, t) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const i = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let a = e.numbers[i];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
    const s = () => this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? `_plural_${a.toString()}` : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? s() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
  }
  shouldUseIntlApi() {
    return !Ik.includes(this.options.compatibilityJSON);
  }
}
const P2 = function(n, e, t) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = Bk(n, e, t);
  return !s && a && typeof t == "string" && (s = vl(n, t, i), s === void 0 && (s = vl(e, t, i))), s;
}, Ku = (n) => n.replace(/\$/g, "$$$$");
class Vk {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Sr.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: i,
      useRawValueToEscape: a,
      prefix: s,
      prefixEscaped: u,
      suffix: c,
      suffixEscaped: d,
      formatSeparator: p,
      unescapeSuffix: h,
      unescapePrefix: m,
      nestingPrefix: b,
      nestingPrefixEscaped: v,
      nestingSuffix: C,
      nestingSuffixEscaped: k,
      nestingOptionsSeparator: x,
      maxReplaces: S,
      alwaysFormat: A
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Lk, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = a !== void 0 ? a : !1, this.prefix = s ? cn(s) : u || "{{", this.suffix = c ? cn(c) : d || "}}", this.formatSeparator = p || ",", this.unescapePrefix = h ? "" : m || "-", this.unescapeSuffix = this.unescapePrefix ? "" : h || "", this.nestingPrefix = b ? cn(b) : v || cn("$t("), this.nestingSuffix = C ? cn(C) : k || cn(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = S || 1e3, this.alwaysFormat = A !== void 0 ? A : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, i) => t && t.source === i ? (t.lastIndex = 0, t) : new RegExp(i, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, i, a) {
    let s, u, c;
    const d = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, p = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const S = P2(t, d, v, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(S, void 0, i, {
          ...a,
          ...t,
          interpolationkey: v
        }) : S;
      }
      const C = v.split(this.formatSeparator), k = C.shift().trim(), x = C.join(this.formatSeparator).trim();
      return this.format(P2(t, d, k, this.options.keySeparator, this.options.ignoreJSONStructure), x, i, {
        ...a,
        ...t,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const h = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, m = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (v) => Ku(v)
    }, {
      regex: this.regexp,
      safeValue: (v) => this.escapeValue ? Ku(this.escape(v)) : Ku(v)
    }].forEach((v) => {
      for (c = 0; s = v.regex.exec(e); ) {
        const C = s[1].trim();
        if (u = p(C), u === void 0)
          if (typeof h == "function") {
            const x = h(e, s, a);
            u = typeof x == "string" ? x : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, C))
            u = "";
          else if (m) {
            u = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${C} for interpolating ${e}`), u = "";
        else
          typeof u != "string" && !this.useRawValueToEscape && (u = A2(u));
        const k = v.safeValue(u);
        if (e = e.replace(s[0], k), m ? (v.regex.lastIndex += u.length, v.regex.lastIndex -= s[0].length) : v.regex.lastIndex = 0, c++, c >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, s, u;
    const c = (d, p) => {
      const h = this.nestingOptionsSeparator;
      if (d.indexOf(h) < 0)
        return d;
      const m = d.split(new RegExp(`${h}[ ]*{`));
      let b = `{${m[1]}`;
      d = m[0], b = this.interpolate(b, u);
      const v = b.match(/'/g), C = b.match(/"/g);
      (v && v.length % 2 === 0 && !C || C.length % 2 !== 0) && (b = b.replace(/'/g, '"'));
      try {
        u = JSON.parse(b), p && (u = {
          ...p,
          ...u
        });
      } catch (k) {
        return this.logger.warn(`failed parsing options string in nesting for key ${d}`, k), `${d}${h}${b}`;
      }
      return u.defaultValue && u.defaultValue.indexOf(this.prefix) > -1 && delete u.defaultValue, d;
    };
    for (; a = this.nestingRegexp.exec(e); ) {
      let d = [];
      u = {
        ...i
      }, u = u.replace && typeof u.replace != "string" ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
      let p = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const h = a[1].split(this.formatSeparator).map((m) => m.trim());
        a[1] = h.shift(), d = h, p = !0;
      }
      if (s = t(c.call(this, a[1].trim(), u), u), s && a[0] === e && typeof s != "string")
        return s;
      typeof s != "string" && (s = A2(s)), s || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`), s = ""), p && (s = d.reduce((h, m) => this.format(h, m, i.lng, {
        ...i,
        interpolationkey: a[1].trim()
      }), s.trim())), e = e.replace(a[0], s), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Hk = (n) => {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const i = n.split("(");
    e = i[0].toLowerCase().trim();
    const a = i[1].substring(0, i[1].length - 1);
    e === "currency" && a.indexOf(":") < 0 ? t.currency || (t.currency = a.trim()) : e === "relativetime" && a.indexOf(":") < 0 ? t.range || (t.range = a.trim()) : a.split(";").forEach((u) => {
      if (u) {
        const [c, ...d] = u.split(":"), p = d.join(":").trim().replace(/^'+|'+$/g, ""), h = c.trim();
        t[h] || (t[h] = p), p === "false" && (t[h] = !1), p === "true" && (t[h] = !0), isNaN(p) || (t[h] = parseInt(p, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, dn = (n) => {
  const e = {};
  return (t, i, a) => {
    let s = a;
    a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (s = {
      ...s,
      [a.interpolationkey]: void 0
    });
    const u = i + JSON.stringify(s);
    let c = e[u];
    return c || (c = n(Xo(i), a), e[u] = c), c(t);
  };
};
class $k {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Sr.create("formatter"), this.options = e, this.formats = {
      number: dn((t, i) => {
        const a = new Intl.NumberFormat(t, {
          ...i
        });
        return (s) => a.format(s);
      }),
      currency: dn((t, i) => {
        const a = new Intl.NumberFormat(t, {
          ...i,
          style: "currency"
        });
        return (s) => a.format(s);
      }),
      datetime: dn((t, i) => {
        const a = new Intl.DateTimeFormat(t, {
          ...i
        });
        return (s) => a.format(s);
      }),
      relativetime: dn((t, i) => {
        const a = new Intl.RelativeTimeFormat(t, {
          ...i
        });
        return (s) => a.format(s, i.range || "day");
      }),
      list: dn((t, i) => {
        const a = new Intl.ListFormat(t, {
          ...i
        });
        return (s) => a.format(s);
      })
    }, this.init(e);
  }
  init(e) {
    const i = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = i.formatSeparator ? i.formatSeparator : i.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = dn(t);
  }
  format(e, t, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = t.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && s[0].indexOf(")") < 0 && s.find((c) => c.indexOf(")") > -1)) {
      const c = s.findIndex((d) => d.indexOf(")") > -1);
      s[0] = [s[0], ...s.splice(1, c)].join(this.formatSeparator);
    }
    return s.reduce((c, d) => {
      const {
        formatName: p,
        formatOptions: h
      } = Hk(d);
      if (this.formats[p]) {
        let m = c;
        try {
          const b = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, v = b.locale || b.lng || a.locale || a.lng || i;
          m = this.formats[p](c, v, {
            ...h,
            ...a,
            ...b
          });
        } catch (b) {
          this.logger.warn(b);
        }
        return m;
      } else
        this.logger.warn(`there was no format function for ${p}`);
      return c;
    }, e);
  }
}
const jk = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class Kk extends ls {
  constructor(e, t, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = i, this.languageUtils = i.languageUtils, this.options = a, this.logger = Sr.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(i, a.backend, a);
  }
  queueLoad(e, t, i, a) {
    const s = {}, u = {}, c = {}, d = {};
    return e.forEach((p) => {
      let h = !0;
      t.forEach((m) => {
        const b = `${p}|${m}`;
        !i.reload && this.store.hasResourceBundle(p, m) ? this.state[b] = 2 : this.state[b] < 0 || (this.state[b] === 1 ? u[b] === void 0 && (u[b] = !0) : (this.state[b] = 1, h = !1, u[b] === void 0 && (u[b] = !0), s[b] === void 0 && (s[b] = !0), d[m] === void 0 && (d[m] = !0)));
      }), h || (c[p] = !0);
    }), (Object.keys(s).length || Object.keys(u).length) && this.queue.push({
      pending: u,
      pendingCount: Object.keys(u).length,
      loaded: {},
      errors: [],
      callback: a
    }), {
      toLoad: Object.keys(s),
      pending: Object.keys(u),
      toLoadLanguages: Object.keys(c),
      toLoadNamespaces: Object.keys(d)
    };
  }
  loaded(e, t, i) {
    const a = e.split("|"), s = a[0], u = a[1];
    t && this.emit("failedLoading", s, u, t), !t && i && this.store.addResourceBundle(s, u, i, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && i && (this.state[e] = 0);
    const c = {};
    this.queue.forEach((d) => {
      Ek(d.loaded, [s], u), jk(d, e), t && d.errors.push(t), d.pendingCount === 0 && !d.done && (Object.keys(d.loaded).forEach((p) => {
        c[p] || (c[p] = {});
        const h = d.loaded[p];
        h.length && h.forEach((m) => {
          c[p][m] === void 0 && (c[p][m] = !0);
        });
      }), d.done = !0, d.errors.length ? d.callback(d.errors) : d.callback());
    }), this.emit("loaded", c), this.queue = this.queue.filter((d) => !d.done);
  }
  read(e, t, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, u = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return u(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: i,
        tried: a,
        wait: s,
        callback: u
      });
      return;
    }
    this.readingCalls++;
    const c = (p, h) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const m = this.waitingReads.shift();
        this.read(m.lng, m.ns, m.fcName, m.tried, m.wait, m.callback);
      }
      if (p && h && a < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, i, a + 1, s * 2, u);
        }, s);
        return;
      }
      u(p, h);
    }, d = this.backend[i].bind(this.backend);
    if (d.length === 2) {
      try {
        const p = d(e, t);
        p && typeof p.then == "function" ? p.then((h) => c(null, h)).catch(c) : c(null, p);
      } catch (p) {
        c(p);
      }
      return;
    }
    return d(e, t, c);
  }
  prepareLoading(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
    const s = this.queueLoad(e, t, i, a);
    if (!s.toLoad.length)
      return s.pending.length || a(), null;
    s.toLoad.forEach((u) => {
      this.loadOne(u);
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
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const i = e.split("|"), a = i[0], s = i[1];
    this.read(a, s, "read", void 0, void 0, (u, c) => {
      u && this.logger.warn(`${t}loading namespace ${s} for language ${a} failed`, u), !u && c && this.logger.log(`${t}loaded namespace ${s} for language ${a}`, c), this.loaded(e, u, c);
    });
  }
  saveMissing(e, t, i, a, s) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if (this.backend && this.backend.create) {
        const d = {
          ...u,
          isUpdate: s
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let h;
            p.length === 5 ? h = p(e, t, i, a, d) : h = p(e, t, i, a), h && typeof h.then == "function" ? h.then((m) => c(null, m)).catch(c) : c(null, h);
          } catch (h) {
            c(h);
          }
        else
          p(e, t, i, a, c, d);
      }
      !e || !e[0] || this.store.addResource(e[0], t, i, a);
    }
  }
}
const z2 = () => ({
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
  overloadTranslationOptionHandler: (n) => {
    let e = {};
    if (typeof n[1] == "object" && (e = n[1]), typeof n[1] == "string" && (e.defaultValue = n[1]), typeof n[2] == "string" && (e.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
      const t = n[3] || n[2];
      Object.keys(t).forEach((i) => {
        e[i] = t[i];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (n) => n,
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
}), N2 = (n) => (typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n), Fo = () => {
}, Wk = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
};
class Ba extends ls {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = N2(e), this.services = {}, this.logger = Sr, this.modules = {
      external: []
    }, Wk(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (i = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const a = z2();
    this.options = {
      ...a,
      ...this.options,
      ...N2(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const s = (h) => h ? typeof h == "function" ? new h() : h : null;
    if (!this.options.isClone) {
      this.modules.logger ? Sr.init(s(this.modules.logger), this.options) : Sr.init(null, this.options);
      let h;
      this.modules.formatter ? h = this.modules.formatter : typeof Intl < "u" && (h = $k);
      const m = new T2(this.options);
      this.store = new F2(this.options.resources, this.options);
      const b = this.services;
      b.logger = Sr, b.resourceStore = this.store, b.languageUtils = m, b.pluralResolver = new Uk(m, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), h && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (b.formatter = s(h), b.formatter.init(b, this.options), this.options.interpolation.format = b.formatter.format.bind(b.formatter)), b.interpolator = new Vk(this.options), b.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, b.backendConnector = new Kk(s(this.modules.backend), b.resourceStore, b, this.options), b.backendConnector.on("*", function(v) {
        for (var C = arguments.length, k = new Array(C > 1 ? C - 1 : 0), x = 1; x < C; x++)
          k[x - 1] = arguments[x];
        e.emit(v, ...k);
      }), this.modules.languageDetector && (b.languageDetector = s(this.modules.languageDetector), b.languageDetector.init && b.languageDetector.init(b, this.options.detection, this.options)), this.modules.i18nFormat && (b.i18nFormat = s(this.modules.i18nFormat), b.i18nFormat.init && b.i18nFormat.init(this)), this.translator = new Qo(this.services, this.options), this.translator.on("*", function(v) {
        for (var C = arguments.length, k = new Array(C > 1 ? C - 1 : 0), x = 1; x < C; x++)
          k[x - 1] = arguments[x];
        e.emit(v, ...k);
      }), this.modules.external.forEach((v) => {
        v.init && v.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, i || (i = Fo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((h) => {
      this[h] = function() {
        return e.store[h](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((h) => {
      this[h] = function() {
        return e.store[h](...arguments), e;
      };
    });
    const d = ia(), p = () => {
      const h = (m, b) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), d.resolve(b), i(m, b);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return h(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, h);
    };
    return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), d;
  }
  loadResources(e) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fo;
    const a = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (a && a.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return i();
      const s = [], u = (c) => {
        if (!c || c === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(c).forEach((p) => {
          p !== "cimode" && s.indexOf(p) < 0 && s.push(p);
        });
      };
      a ? u(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((d) => u(d)), this.options.preload && this.options.preload.forEach((c) => u(c)), this.services.backendConnector.load(s, this.options.ns, (c) => {
        !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(c);
      });
    } else
      i(null);
  }
  reloadResources(e, t, i) {
    const a = ia();
    return typeof e == "function" && (i = e, e = void 0), typeof t == "function" && (i = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), i || (i = Fo), this.services.backendConnector.reload(e, t, (s) => {
      a.resolve(), i(s);
    }), a;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Nh.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const i = this.languages[t];
        if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var i = this;
    this.isLanguageChangingTo = e;
    const a = ia();
    this.emit("languageChanging", e);
    const s = (d) => {
      this.language = d, this.languages = this.services.languageUtils.toResolveHierarchy(d), this.resolvedLanguage = void 0, this.setResolvedLanguage(d);
    }, u = (d, p) => {
      p ? (s(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
        return i.t(...arguments);
      }), t && t(d, function() {
        return i.t(...arguments);
      });
    }, c = (d) => {
      !e && !d && this.services.languageDetector && (d = []);
      const p = typeof d == "string" ? d : this.services.languageUtils.getBestMatchFromCodes(d);
      p && (this.language || s(p), this.translator.language || this.translator.changeLanguage(p), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(p)), this.loadResources(p, (h) => {
        u(h, p);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? c(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(c) : this.services.languageDetector.detect(c) : c(e), a;
  }
  getFixedT(e, t, i) {
    var a = this;
    const s = function(u, c) {
      let d;
      if (typeof c != "object") {
        for (var p = arguments.length, h = new Array(p > 2 ? p - 2 : 0), m = 2; m < p; m++)
          h[m - 2] = arguments[m];
        d = a.options.overloadTranslationOptionHandler([u, c].concat(h));
      } else
        d = {
          ...c
        };
      d.lng = d.lng || s.lng, d.lngs = d.lngs || s.lngs, d.ns = d.ns || s.ns, d.keyPrefix !== "" && (d.keyPrefix = d.keyPrefix || i || s.keyPrefix);
      const b = a.options.keySeparator || ".";
      let v;
      return d.keyPrefix && Array.isArray(u) ? v = u.map((C) => `${d.keyPrefix}${b}${C}`) : v = d.keyPrefix ? `${d.keyPrefix}${b}${u}` : u, a.t(v, d);
    };
    return typeof e == "string" ? s.lng = e : s.lngs = e, s.ns = t, s.keyPrefix = i, s;
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
    const i = t.lng || this.resolvedLanguage || this.languages[0], a = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode")
      return !0;
    const u = (c, d) => {
      const p = this.services.backendConnector.state[`${c}|${d}`];
      return p === -1 || p === 0 || p === 2;
    };
    if (t.precheck) {
      const c = t.precheck(this, u);
      if (c !== void 0)
        return c;
    }
    return !!(this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || u(i, e) && (!a || u(s, e)));
  }
  loadNamespaces(e, t) {
    const i = ia();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((a) => {
      this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
    }), this.loadResources((a) => {
      i.resolve(), t && t(a);
    }), i) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const i = ia();
    typeof e == "string" && (e = [e]);
    const a = this.options.preload || [], s = e.filter((u) => a.indexOf(u) < 0 && this.services.languageUtils.isSupportedCode(u));
    return s.length ? (this.options.preload = a.concat(s), this.loadResources((u) => {
      i.resolve(), t && t(u);
    }), i) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = this.services && this.services.languageUtils || new T2(z2());
    return t.indexOf(i.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new Ba(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fo;
    const i = e.forkResourceStore;
    i && delete e.forkResourceStore;
    const a = {
      ...this.options,
      ...e,
      isClone: !0
    }, s = new Ba(a);
    return (e.debug !== void 0 || e.prefix !== void 0) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach((c) => {
      s[c] = this[c];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, i && (s.store = new F2(this.store.data, a), s.services.resourceStore = s.store), s.translator = new Qo(s.services, a), s.translator.on("*", function(c) {
      for (var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), h = 1; h < d; h++)
        p[h - 1] = arguments[h];
      s.emit(c, ...p);
    }), s.init(a, t), s.translator.options = a, s.translator.backendConnector.services.utils = {
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
const bt = Ba.createInstance();
bt.createInstance = Ba.createInstance;
bt.createInstance;
bt.dir;
bt.init;
bt.loadResources;
bt.reloadResources;
bt.use;
bt.changeLanguage;
bt.getFixedT;
bt.t;
bt.exists;
bt.setDefaultNamespace;
bt.hasLoadedNamespace;
bt.loadNamespaces;
bt.loadLanguages;
const Gk = {
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
}, Yk = {
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
}, Jk = {
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
}, Zk = {
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
}, Xk = {
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
}, Qk = {
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
}, e9 = {
  de: Gk,
  it: Yk,
  nl: Jk,
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
  fr: Zk,
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
  es: Xk,
  fi: Qk
}, {
  slice: t9,
  forEach: r9
} = [];
function i9(n) {
  return r9.call(t9.call(arguments, 1), (e) => {
    if (e)
      for (const t in e)
        n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
const O2 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, n9 = (n, e, t) => {
  const i = t || {};
  i.path = i.path || "/";
  const a = encodeURIComponent(e);
  let s = `${n}=${a}`;
  if (i.maxAge > 0) {
    const u = i.maxAge - 0;
    if (Number.isNaN(u))
      throw new Error("maxAge should be a Number");
    s += `; Max-Age=${Math.floor(u)}`;
  }
  if (i.domain) {
    if (!O2.test(i.domain))
      throw new TypeError("option domain is invalid");
    s += `; Domain=${i.domain}`;
  }
  if (i.path) {
    if (!O2.test(i.path))
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
}, I2 = {
  create(n, e, t, i) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    t && (a.expires = /* @__PURE__ */ new Date(), a.expires.setTime(a.expires.getTime() + t * 60 * 1e3)), i && (a.domain = i), document.cookie = n9(n, encodeURIComponent(e), a);
  },
  read(n) {
    const e = `${n}=`, t = document.cookie.split(";");
    for (let i = 0; i < t.length; i++) {
      let a = t[i];
      for (; a.charAt(0) === " "; )
        a = a.substring(1, a.length);
      if (a.indexOf(e) === 0)
        return a.substring(e.length, a.length);
    }
    return null;
  },
  remove(n) {
    this.create(n, "", -1);
  }
};
var a9 = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(n) {
    let {
      lookupCookie: e
    } = n;
    if (e && typeof document < "u")
      return I2.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(n, e) {
    let {
      lookupCookie: t,
      cookieMinutes: i,
      cookieDomain: a,
      cookieOptions: s
    } = e;
    t && typeof document < "u" && I2.create(t, n, i, a, s);
  }
}, o9 = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(n) {
    var i;
    let {
      lookupQuerystring: e
    } = n, t;
    if (typeof window < "u") {
      let {
        search: a
      } = window.location;
      !window.location.search && ((i = window.location.hash) == null ? void 0 : i.indexOf("?")) > -1 && (a = window.location.hash.substring(window.location.hash.indexOf("?")));
      const u = a.substring(1).split("&");
      for (let c = 0; c < u.length; c++) {
        const d = u[c].indexOf("=");
        d > 0 && u[c].substring(0, d) === e && (t = u[c].substring(d + 1));
      }
    }
    return t;
  }
};
let na = null;
const q2 = () => {
  if (na !== null)
    return na;
  try {
    na = window !== "undefined" && window.localStorage !== null;
    const n = "i18next.translate.boo";
    window.localStorage.setItem(n, "foo"), window.localStorage.removeItem(n);
  } catch {
    na = !1;
  }
  return na;
};
var s9 = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(n) {
    let {
      lookupLocalStorage: e
    } = n;
    if (e && q2())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(n, e) {
    let {
      lookupLocalStorage: t
    } = e;
    t && q2() && window.localStorage.setItem(t, n);
  }
};
let aa = null;
const M2 = () => {
  if (aa !== null)
    return aa;
  try {
    aa = window !== "undefined" && window.sessionStorage !== null;
    const n = "i18next.translate.boo";
    window.sessionStorage.setItem(n, "foo"), window.sessionStorage.removeItem(n);
  } catch {
    aa = !1;
  }
  return aa;
};
var u9 = {
  name: "sessionStorage",
  lookup(n) {
    let {
      lookupSessionStorage: e
    } = n;
    if (e && M2())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(n, e) {
    let {
      lookupSessionStorage: t
    } = e;
    t && M2() && window.sessionStorage.setItem(t, n);
  }
}, l9 = {
  name: "navigator",
  lookup(n) {
    const e = [];
    if (typeof navigator < "u") {
      const {
        languages: t,
        userLanguage: i,
        language: a
      } = navigator;
      if (t)
        for (let s = 0; s < t.length; s++)
          e.push(t[s]);
      i && e.push(i), a && e.push(a);
    }
    return e.length > 0 ? e : void 0;
  }
}, c9 = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(n) {
    let {
      htmlTag: e
    } = n, t;
    const i = e || (typeof document < "u" ? document.documentElement : null);
    return i && typeof i.getAttribute == "function" && (t = i.getAttribute("lang")), t;
  }
}, d9 = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(n) {
    var a;
    let {
      lookupFromPathIndex: e
    } = n;
    if (typeof window > "u")
      return;
    const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(t) ? (a = t[typeof e == "number" ? e : 0]) == null ? void 0 : a.replace("/", "") : void 0;
  }
}, p9 = {
  name: "subdomain",
  lookup(n) {
    var a, s;
    let {
      lookupFromSubdomainIndex: e
    } = n;
    const t = typeof e == "number" ? e + 1 : 1, i = typeof window < "u" && ((s = (a = window.location) == null ? void 0 : a.hostname) == null ? void 0 : s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (i)
      return i[t];
  }
};
function f9() {
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
    convertDetectedLanguage: (n) => n
  };
}
class Oh {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e || {
      languageUtils: {}
    }, this.options = i9(t, this.options || {}, f9()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (a) => a.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(a9), this.addDetector(o9), this.addDetector(s9), this.addDetector(u9), this.addDetector(l9), this.addDetector(c9), this.addDetector(d9), this.addDetector(p9);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect(e) {
    e || (e = this.options.order);
    let t = [];
    return e.forEach((i) => {
      if (this.detectors[i]) {
        let a = this.detectors[i].lookup(this.options);
        a && typeof a == "string" && (a = [a]), a && (t = t.concat(a));
      }
    }), t = t.map((i) => this.options.convertDetectedLanguage(i)), this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
  }
  cacheUserLanguage(e, t) {
    t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((i) => {
      this.detectors[i] && this.detectors[i].cacheUserLanguage(e, this.options);
    }));
  }
}
Oh.type = "languageDetector";
bt.use(av).use(Oh).init({
  debug: !1,
  resources: e9,
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
const h9 = typeof window < "u";
function Li(n, e, t = [], i = null) {
  F5((s) => el.value ? g(n, {
    ...s
  }) : g(ie, {}), e, t, i);
}
function g9() {
  Li(ok, "bikematrix-bikeselector", [], {
    shadow: !0
  }), Li(uk, "bikematrix-productresult", ["data-sku"], {
    shadow: !0
  }), Li(pk, "bikematrix-collectionresult", ["data-product-id", "data-product-skus"], {
    shadow: !0
  }), Li(Rh, "bikematrix-compatibilitylabel", ["data-type"], {
    shadow: !0
  }), Li(kk, "bikematrix-compatiblelist", ["data-title"]), Li(Ck, "bikematrix-bikeselectorbanner", ["data-title", "data-color", "data-full-width", "data-font-color", "data-show"], {
    shadow: !0
  }), Li(Ph, "bikematrix-bikon", ["data-color"], {
    shadow: !0
  });
}
function m9() {
  if (!h9)
    return null;
  const n = Qv.getInstance(), e = {
    // Core instance methods
    isInitialized: () => n.isInitialized(),
    init: (t) => n.initialize(t),
    refresh: () => n.refresh(),
    destroy: () => n.destroy(),
    reload: (t = !0) => n.reload(t),
    reset: () => n.reset(),
    // Utility methods
    getConfig: () => n.getConfig(),
    getCurrentBike: () => n.getCurrentBike(),
    getActiveSubscription: () => n.getActiveSubscription(),
    updateConfig: (t) => n.updateConfig(t),
    updateSku: (t) => n.updateSku(t)
  };
  return typeof process < "u" && process.env.NODE_ENV === "development" && (e.core = n), window.BikeMatrix = e, g9(), document.currentScript && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => e.init()) : e.init()), e;
}
const _9 = m9();
export {
  _9 as default
};
