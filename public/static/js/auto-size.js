/* eslint-disable no-sequences */
!(function (e) {
  function t (a) {
    if (i[a]) return i[a].exports
    var n = i[a] = {
      exports: {},
      id: a,
      loaded: !1
    }
    return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
  }
  var i = {}
  return t.m = e, t.c = i, t.p = '', t(0)
}([function (e, t) {
  'use strict'
  Object.defineProperty(t, '__esModule', {
    value: !0
  })
  var i = window
  t['default'] = i.flex = function (e, t) {
    var a = e || 100
    var n = t || 1
    var r = i.document
    var o = navigator.userAgent
    var d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)
    var l = o.match(/U3\/((\d+|\.){5,})/i)
    var c = l && parseInt(l[1].split('.').join(''), 10) >= 80
    var p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi)
    var s = i.devicePixelRatio || 1
    p || d && d[1] > 534 || c || (s = 1)
    var u = 1 / s
    var m = r.querySelector('meta[name="viewport"]')
    m || (m = r.createElement('meta'), m.setAttribute('name', 'viewport'), r.head.appendChild(m)), m.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + u + ',maximum-scale=' + u + ',minimum-scale=' + u), r.documentElement.style.fontSize = a / 2 * s * n + 'px'
  }, e.exports = t['default']
}]))
window.flex(100, 1)
