'3.0.5';
(function(h, k, m, r) {
    'undefined' == typeof h.easyXDM &&
        (function(a, b, c, d, e, f) {
            function h(a, b) {
                var g = typeof a[b];
                return 'function' == g || !('object' != g || !a[b]) || 'unknown' == g;
            }
            function k() {
                if (!y(m.plugins) && 'object' == typeof m.plugins['Shockwave Flash']) {
                    var a = m.plugins['Shockwave Flash'].description;
                    a &&
                        !y(m.mimeTypes) &&
                        m.mimeTypes['application/x-shockwave-flash'] &&
                        m.mimeTypes['application/x-shockwave-flash'].enabledPlugin &&
                        (E = a.match(/\d+/g));
                }
                if (!E)
                    try {
                        var b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                        E = Array.prototype.slice.call(
                            b.GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/),
                            1,
                        );
                    } catch (ja) {}
                if (!E) return !1;
                a = parseInt(E[0], 10);
                b = parseInt(E[1], 10);
                T = 9 < a && 0 < b;
                return !0;
            }
            function N() {
                if (!F) {
                    F = !0;
                    for (var a = 0; a < O.length; a++) O[a]();
                    O.length = 0;
                }
            }
            function n(a, b) {
                F
                    ? a.call(b)
                    : O.push(function() {
                          a.call(b);
                      });
            }
            function r() {
                var a = parent;
                if ('' !== J) for (var b = 0, c = J.split('.'); b < c.length; b++) a = a[c[b]];
                return a.easyXDM;
            }
            function t(a) {
                var b = a.toLowerCase().match(P);
                a = b[2];
                var g = b[3];
                b = b[4] || '';
                if (('http:' == a && ':80' == b) || ('https:' == a && ':443' == b)) b = '';
                return a + '//' + g + b;
            }
            function C(a) {
                a = a.replace(ea, '$1/');
                if (!a.match(/^(http||https):\/\//)) {
                    var b = '/' === a.substring(0, 1) ? '' : c.pathname;
                    '/' !== b.substring(b.length - 1) &&
                        (b = b.substring(0, b.lastIndexOf('/') + 1));
                    a = c.protocol + '//' + c.host + b + a;
                }
                for (; X.test(a); ) a = a.replace(X, '');
                return a;
            }
            function z(a, b) {
                var g = '',
                    c = a.indexOf('#');
                -1 !== c && ((g = a.substring(c)), (a = a.substring(0, c)));
                c = [];
                for (var d in b) b.hasOwnProperty(d) && c.push(d + '=' + f(b[d]));
                return a + (Y ? '#' : -1 == a.indexOf('?') ? '?' : '&') + c.join('&') + g;
            }
            function y(a) {
                return 'undefined' === typeof a;
            }
            function u(a, b, c) {
                var g;
                for (g in b)
                    if (b.hasOwnProperty(g))
                        if (g in a) {
                            var d = b[g];
                            'object' === typeof d ? u(a[g], d, c) : c || (a[g] = b[g]);
                        } else a[g] = b[g];
                return a;
            }
            function D(a) {
                if (y(Q)) {
                    var c = b.body.appendChild(b.createElement('form')),
                        g = c.appendChild(b.createElement('input'));
                    g.name = x + 'TEST' + Z;
                    Q = g !== c.elements[g.name];
                    b.body.removeChild(c);
                }
                Q
                    ? (c = b.createElement('<iframe name="' + a.props.name + '"/>'))
                    : ((c = b.createElement('IFRAME')), (c.name = a.props.name));
                c.id = c.name = a.props.name;
                delete a.props.name;
                'string' == typeof a.container && (a.container = b.getElementById(a.container));
                a.container ||
                    (u(c.style, { position: 'absolute', top: '-2000px', left: '0px' }),
                    (a.container = b.body));
                g = a.props.src;
                a.props.src = 'javascript:false';
                u(c, a.props);
                c.border = c.frameBorder = 0;
                c.allowTransparency = !0;
                a.container.appendChild(c);
                a.onLoad && A(c, 'load', a.onLoad);
                if (a.usePost) {
                    var d = a.container.appendChild(b.createElement('form'));
                    d.target = c.name;
                    d.action = g;
                    d.method = 'POST';
                    if ('object' === typeof a.usePost)
                        for (var f in a.usePost)
                            if (a.usePost.hasOwnProperty(f)) {
                                if (Q) var e = b.createElement('<input name="' + f + '"/>');
                                else (e = b.createElement('INPUT')), (e.name = f);
                                e.value = a.usePost[f];
                                d.appendChild(e);
                            }
                    d.submit();
                    d.parentNode.removeChild(d);
                } else c.src = g;
                a.props.src = g;
                return c;
            }
            function aa(g) {
                var d = g.protocol;
                g.isHost = g.isHost || y(w.xdm_p);
                Y = g.hash || !1;
                g.props || (g.props = {});
                if (g.isHost)
                    (g.remote = C(g.remote)),
                        (g.channel = g.channel || 'default' + Z++),
                        (g.secret = Math.random()
                            .toString(16)
                            .substring(2)),
                        y(d) &&
                            (d =
                                t(c.href) == t(g.remote)
                                    ? '4'
                                    : h(a, 'postMessage') || h(b, 'postMessage')
                                    ? '1'
                                    : g.swf && h(a, 'ActiveXObject') && k()
                                    ? '6'
                                    : 'Gecko' === m.product &&
                                      'frameElement' in a &&
                                      -1 == m.userAgent.indexOf('WebKit')
                                    ? '5'
                                    : g.remoteHelper
                                    ? '2'
                                    : '0');
                else {
                    g.channel = w.xdm_c.replace(/["'<>\\]/g, '');
                    g.secret = w.xdm_s;
                    g.remote = w.xdm_e.replace(/["'<>\\]/g, '');
                    d = w.xdm_p;
                    var f;
                    if ((f = g.acl)) {
                        a: {
                            f = g.acl;
                            var e = g.remote;
                            'string' == typeof f && (f = [f]);
                            for (var H, G = f.length; G--; )
                                if (
                                    ((H = f[G]),
                                    (H = new RegExp(
                                        '^' == H.substr(0, 1)
                                            ? H
                                            : '^' +
                                              H.replace(/(\*)/g, '.$1').replace(/\?/g, '.') +
                                              '$',
                                    )),
                                    H.test(e))
                                ) {
                                    f = !0;
                                    break a;
                                }
                            f = !1;
                        }
                        f = !f;
                    }
                    if (f) throw Error('Access denied for ' + g.remote);
                }
                g.protocol = d;
                switch (d) {
                    case '0':
                        u(
                            g,
                            {
                                interval: 100,
                                delay: 2e3,
                                useResize: !0,
                                useParent: !1,
                                usePolling: !1,
                            },
                            !0,
                        );
                        if (g.isHost) {
                            if (!g.local) {
                                d = c.protocol + '//' + c.host;
                                var q = b.body.getElementsByTagName('img');
                                for (e = q.length; e--; )
                                    if (((f = q[e]), f.src.substring(0, d.length) === d)) {
                                        g.local = f.src;
                                        break;
                                    }
                                g.local || (g.local = a);
                            }
                            d = { xdm_c: g.channel, xdm_p: 0 };
                            g.local === a
                                ? ((g.usePolling = !0),
                                  (g.useParent = !0),
                                  (g.local = c.protocol + '//' + c.host + c.pathname + c.search),
                                  (d.xdm_e = g.local),
                                  (d.xdm_pa = 1))
                                : (d.xdm_e = C(g.local));
                            g.container && ((g.useResize = !1), (d.xdm_po = 1));
                            g.remote = z(g.remote, d);
                        } else
                            u(g, {
                                channel: w.xdm_c,
                                remote: w.xdm_e,
                                useParent: !y(w.xdm_pa),
                                usePolling: !y(w.xdm_po),
                                useResize: g.useParent ? !1 : g.useResize,
                            });
                        q = [
                            new l.stack.HashTransport(g),
                            new l.stack.ReliableBehavior({}),
                            new l.stack.QueueBehavior({
                                encode: !0,
                                maxLength: 4e3 - g.remote.length,
                            }),
                            new l.stack.VerifyBehavior({ initiate: g.isHost }),
                        ];
                        break;
                    case '1':
                        q = [new l.stack.PostMessageTransport(g)];
                        break;
                    case '2':
                        g.isHost && (g.remoteHelper = C(g.remoteHelper));
                        q = [
                            new l.stack.NameTransport(g),
                            new l.stack.QueueBehavior(),
                            new l.stack.VerifyBehavior({ initiate: g.isHost }),
                        ];
                        break;
                    case '3':
                        q = [new l.stack.NixTransport(g)];
                        break;
                    case '4':
                        q = [new l.stack.SameOriginTransport(g)];
                        break;
                    case '5':
                        q = [new l.stack.FrameElementTransport(g)];
                        break;
                    case '6':
                        E || k(), (q = [new l.stack.FlashTransport(g)]);
                }
                q.push(new l.stack.QueueBehavior({ lazy: g.lazy, remove: !0 }));
                return q;
            }
            function ba(a) {
                for (
                    var b,
                        c = {
                            incoming: function(a, b) {
                                this.up.incoming(a, b);
                            },
                            outgoing: function(a, b) {
                                this.down.outgoing(a, b);
                            },
                            callback: function(a) {
                                this.up.callback(a);
                            },
                            init: function() {
                                this.down.init();
                            },
                            destroy: function() {
                                this.down.destroy();
                            },
                        },
                        g = 0,
                        d = a.length;
                    g < d;
                    g++
                )
                    (b = a[g]),
                        u(b, c, !0),
                        0 !== g && (b.down = a[g - 1]),
                        g !== d - 1 && (b.up = a[g + 1]);
                return b;
            }
            function fa(a) {
                a.up.down = a.down;
                a.down.up = a.up;
                a.up = a.down = null;
            }
            var R = this,
                Z = Math.floor(1e4 * Math.random()),
                U = Function.prototype,
                P = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
                X = /[\-\w]+\/\.\.\//,
                ea = /([^:])\/\//g,
                J = '',
                l = {},
                ha = a.easyXDM,
                x = 'easyXDM_',
                Q,
                Y = !1,
                E,
                T;
            if (h(a, 'addEventListener')) {
                var A = function(a, b, c) {
                    a.addEventListener(b, c, !1);
                };
                var K = function(a, b, c) {
                    a.removeEventListener(b, c, !1);
                };
            } else if (h(a, 'attachEvent'))
                (A = function(a, b, c) {
                    a.attachEvent('on' + b, c);
                }),
                    (K = function(a, b, c) {
                        a.detachEvent('on' + b, c);
                    });
            else throw Error('Browser not supported');
            var F = !1,
                O = [];
            if ('readyState' in b) {
                var V = b.readyState;
                F =
                    'complete' == V ||
                    (~m.userAgent.indexOf('AppleWebKit/') && ('loaded' == V || 'interactive' == V));
            } else F = !!b.body;
            if (!F) {
                if (h(a, 'addEventListener')) A(b, 'DOMContentLoaded', N);
                else if (
                    (A(b, 'readystatechange', function() {
                        'complete' == b.readyState && N();
                    }),
                    b.documentElement.doScroll && a === top)
                ) {
                    var ca = function() {
                        if (!F) {
                            try {
                                b.documentElement.doScroll('left');
                            } catch (g) {
                                d(ca, 1);
                                return;
                            }
                            N();
                        }
                    };
                    ca();
                }
                A(a, 'load', N);
            }
            var w = (function(a) {
                    a = a.substring(1).split('&');
                    for (var b = {}, c, g = a.length; g--; )
                        (c = a[g].split('=')), (b[c[0]] = e(c[1]));
                    return b;
                })(/xdm_e=/.test(c.search) ? c.search : c.hash),
                W = function() {
                    var a = {},
                        b = { a: [1, 2, 3] };
                    if (
                        'undefined' != typeof JSON &&
                        'function' === typeof JSON.stringify &&
                        '{"a":[1,2,3]}' === JSON.stringify(b).replace(/\s/g, '')
                    )
                        return JSON;
                    Object.toJSON &&
                        '{"a":[1,2,3]}' === Object.toJSON(b).replace(/\s/g, '') &&
                        (a.stringify = Object.toJSON);
                    'function' === typeof String.prototype.evalJSON &&
                        ((b = '{"a":[1,2,3]}'.evalJSON()),
                        b.a &&
                            3 === b.a.length &&
                            3 === b.a[2] &&
                            (a.parse = function(a) {
                                return a.evalJSON();
                            }));
                    return a.stringify && a.parse
                        ? ((W = function() {
                              return a;
                          }),
                          a)
                        : null;
                };
            u(l, {
                version: '2.4.19.0',
                query: w,
                stack: {},
                apply: u,
                getJSONObject: W,
                whenReady: n,
                noConflict: function(b) {
                    a.easyXDM = ha;
                    (J = b) && (x = 'easyXDM_' + J.replace('.', '_') + '_');
                    return l;
                },
            });
            l.DomHelper = {
                on: A,
                un: K,
                requiresJSON: function(c) {
                    ('object' == typeof a.JSON && a.JSON) ||
                        b.write('<script type="text/javascript" src="' + c + '">\x3c/script>');
                },
            };
            (function() {
                var a = {};
                l.Fn = {
                    set: function(b, c) {
                        a[b] = c;
                    },
                    get: function(b, c) {
                        if (a.hasOwnProperty(b)) {
                            var g = a[b];
                            c && delete a[b];
                            return g;
                        }
                    },
                };
            })();
            l.Socket = function(a) {
                var b = ba(
                        aa(a).concat([
                            {
                                incoming: function(b, c) {
                                    a.onMessage(b, c);
                                },
                                callback: function(b) {
                                    if (a.onReady) a.onReady(b);
                                },
                            },
                        ]),
                    ),
                    c = t(a.remote);
                this.origin = t(a.remote);
                this.destroy = function() {
                    b.destroy();
                };
                this.postMessage = function(a) {
                    b.outgoing(a, c);
                };
                b.init();
            };
            l.Rpc = function(a, b) {
                if (b.local)
                    for (var c in b.local)
                        if (b.local.hasOwnProperty(c)) {
                            var g = b.local[c];
                            'function' === typeof g && (b.local[c] = { method: g });
                        }
                var d = ba(
                    aa(a).concat([
                        new l.stack.RpcBehavior(this, b),
                        {
                            callback: function(b) {
                                if (a.onReady) a.onReady(b);
                            },
                        },
                    ]),
                );
                this.origin = t(a.remote);
                this.destroy = function() {
                    d.destroy();
                };
                d.init();
            };
            l.stack.SameOriginTransport = function(a) {
                var b, g, f, e;
                return (b = {
                    outgoing: function(a, b, c) {
                        f(a);
                        c && c();
                    },
                    destroy: function() {
                        g && (g.parentNode.removeChild(g), (g = null));
                    },
                    onDOMReady: function() {
                        e = t(a.remote);
                        a.isHost
                            ? (u(a.props, {
                                  src: z(a.remote, {
                                      xdm_e: c.protocol + '//' + c.host + c.pathname,
                                      xdm_c: a.channel,
                                      xdm_p: 4,
                                  }),
                                  name: x + a.channel + '_provider',
                              }),
                              (g = D(a)),
                              l.Fn.set(a.channel, function(a) {
                                  f = a;
                                  d(function() {
                                      b.up.callback(!0);
                                  }, 0);
                                  return function(a) {
                                      b.up.incoming(a, e);
                                  };
                              }))
                            : ((f = r().Fn.get(a.channel)(function(a) {
                                  b.up.incoming(a, e);
                              })),
                              d(function() {
                                  b.up.callback(!0);
                              }, 0));
                    },
                    init: function() {
                        n(b.onDOMReady, b);
                    },
                });
            };
            l.stack.FlashTransport = function(a) {
                function g(a, b) {
                    d(function() {
                        h.up.incoming(a, G);
                    }, 0);
                }
                function e(c) {
                    var d = a.swf + '?host=' + a.isHost,
                        g = 'easyXDM_swf_' + Math.floor(1e4 * Math.random());
                    l.Fn.set('flash_loaded' + c.replace(/[\-.]/g, '_'), function() {
                        l.stack.FlashTransport[c].swf = q = I.firstChild;
                        for (var a = l.stack.FlashTransport[c].queue, b = 0; b < a.length; b++)
                            a[b]();
                        a.length = 0;
                    });
                    a.swfContainer
                        ? (I =
                              'string' == typeof a.swfContainer
                                  ? b.getElementById(a.swfContainer)
                                  : a.swfContainer)
                        : ((I = b.createElement('div')),
                          u(
                              I.style,
                              T && a.swfNoThrottle
                                  ? {
                                        height: '20px',
                                        width: '20px',
                                        position: 'fixed',
                                        right: 0,
                                        top: 0,
                                    }
                                  : {
                                        height: '1px',
                                        width: '1px',
                                        position: 'absolute',
                                        overflow: 'hidden',
                                        right: 0,
                                        top: 0,
                                    },
                          ),
                          b.body.appendChild(I));
                    var e =
                        'callback=flash_loaded' +
                        f(c.replace(/[\-.]/g, '_')) +
                        '&proto=' +
                        R.location.protocol +
                        '&domain=' +
                        f(R.location.href.match(P)[3]) +
                        '&port=' +
                        f(R.location.href.match(P)[4] || '') +
                        '&ns=' +
                        f(J);
                    I.innerHTML =
                        "<object height='20' width='20' type='application/x-shockwave-flash' id='" +
                        g +
                        "' data='" +
                        d +
                        "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" +
                        d +
                        "'></param><param name='flashvars' value='" +
                        e +
                        "'></param><embed type='application/x-shockwave-flash' FlashVars='" +
                        e +
                        "' allowScriptAccess='always' wmode='transparent' src='" +
                        d +
                        "' height='1' width='1'></embed></object>";
                }
                var h, k, G, q, I;
                return (h = {
                    outgoing: function(b, c, d) {
                        q.postMessage(a.channel, b.toString());
                        d && d();
                    },
                    destroy: function() {
                        try {
                            q.destroyChannel(a.channel);
                        } catch (ka) {}
                        q = null;
                        k && (k.parentNode.removeChild(k), (k = null));
                    },
                    onDOMReady: function() {
                        G = a.remote;
                        l.Fn.set('flash_' + a.channel + '_init', function() {
                            d(function() {
                                h.up.callback(!0);
                            });
                        });
                        l.Fn.set('flash_' + a.channel + '_onMessage', g);
                        a.swf = C(a.swf);
                        var b = a.swf.match(P)[3],
                            f = function() {
                                l.stack.FlashTransport[b].init = !0;
                                q = l.stack.FlashTransport[b].swf;
                                q.createChannel(a.channel, a.secret, t(a.remote), a.isHost);
                                a.isHost &&
                                    (T &&
                                        a.swfNoThrottle &&
                                        u(a.props, {
                                            position: 'fixed',
                                            right: 0,
                                            top: 0,
                                            height: '20px',
                                            width: '20px',
                                        }),
                                    u(a.props, {
                                        src: z(a.remote, {
                                            xdm_e: t(c.href),
                                            xdm_c: a.channel,
                                            xdm_p: 6,
                                            xdm_s: a.secret,
                                        }),
                                        name: x + a.channel + '_provider',
                                    }),
                                    (k = D(a)));
                            };
                        l.stack.FlashTransport[b] && l.stack.FlashTransport[b].init
                            ? f()
                            : l.stack.FlashTransport[b]
                            ? l.stack.FlashTransport[b].queue.push(f)
                            : ((l.stack.FlashTransport[b] = { queue: [f] }), e(b));
                    },
                    init: function() {
                        n(h.onDOMReady, h);
                    },
                });
            };
            l.stack.PostMessageTransport = function(b) {
                function g(a) {
                    if (a.origin) var d = t(a.origin);
                    else if (a.uri) d = t(a.uri);
                    else if (a.domain) d = c.protocol + '//' + a.domain;
                    else throw 'Unable to retrieve the origin of the event';
                    d == k &&
                        a.data &&
                        a.data.substring &&
                        a.data.substring(0, b.channel.length + 1) == b.channel + ' ' &&
                        f.up.incoming(a.data.substring(b.channel.length + 1), d);
                }
                var f, e, h, k;
                return (f = {
                    outgoing: function(a, c, d) {
                        h.postMessage(b.channel + ' ' + a, c || k);
                        d && d();
                    },
                    destroy: function() {
                        K(a, 'message', g);
                        e && ((h = null), e.parentNode.removeChild(e), (e = null));
                    },
                    onDOMReady: function() {
                        k = t(b.remote);
                        if (b.isHost) {
                            var q = function(c) {
                                c.data == b.channel + '-ready' &&
                                    ((h =
                                        'postMessage' in e.contentWindow
                                            ? e.contentWindow
                                            : e.contentWindow.document),
                                    K(a, 'message', q),
                                    A(a, 'message', g),
                                    d(function() {
                                        f.up.callback(!0);
                                    }, 0));
                            };
                            A(a, 'message', q);
                            u(b.props, {
                                src: z(b.remote, { xdm_e: t(c.href), xdm_c: b.channel, xdm_p: 1 }),
                                name: x + b.channel + '_provider',
                            });
                            e = D(b);
                        } else
                            A(a, 'message', g),
                                (h = 'postMessage' in a.parent ? a.parent : a.parent.document),
                                h.postMessage(b.channel + '-ready', k),
                                d(function() {
                                    f.up.callback(!0);
                                }, 0);
                    },
                    init: function() {
                        n(f.onDOMReady, f);
                    },
                });
            };
            l.stack.FrameElementTransport = function(g) {
                var f, e, h, k;
                return (f = {
                    outgoing: function(a, b, c) {
                        h.call(this, a);
                        c && c();
                    },
                    destroy: function() {
                        e && (e.parentNode.removeChild(e), (e = null));
                    },
                    onDOMReady: function() {
                        k = t(g.remote);
                        g.isHost
                            ? (u(g.props, {
                                  src: z(g.remote, {
                                      xdm_e: t(c.href),
                                      xdm_c: g.channel,
                                      xdm_p: 5,
                                  }),
                                  name: x + g.channel + '_provider',
                              }),
                              (e = D(g)),
                              (e.fn = function(a) {
                                  delete e.fn;
                                  h = a;
                                  d(function() {
                                      f.up.callback(!0);
                                  }, 0);
                                  return function(a) {
                                      f.up.incoming(a, k);
                                  };
                              }))
                            : (b.referrer && t(b.referrer) != w.xdm_e && (a.top.location = w.xdm_e),
                              (h = a.frameElement.fn(function(a) {
                                  f.up.incoming(a, k);
                              })),
                              f.up.callback(!0));
                    },
                    init: function() {
                        n(f.onDOMReady, f);
                    },
                });
            };
            l.stack.NameTransport = function(a) {
                function b(b) {
                    k.contentWindow.sendMessage(
                        b,
                        a.remoteHelper + (h ? '#_3' : '#_2') + a.channel,
                    );
                }
                function c() {
                    h ? (2 !== ++v && h) || e.up.callback(!0) : (b('ready'), e.up.callback(!0));
                }
                function f(a) {
                    e.up.incoming(a, L);
                }
                function g() {
                    B &&
                        d(function() {
                            B(!0);
                        }, 0);
                }
                var e, h, k, p, v, B, L, da;
                return (e = {
                    outgoing: function(a, c, d) {
                        B = d;
                        b(a);
                    },
                    destroy: function() {
                        k.parentNode.removeChild(k);
                        k = null;
                        h && (p.parentNode.removeChild(p), (p = null));
                    },
                    onDOMReady: function() {
                        h = a.isHost;
                        v = 0;
                        L = t(a.remote);
                        a.local = C(a.local);
                        h
                            ? (l.Fn.set(a.channel, function(b) {
                                  h && 'ready' === b && (l.Fn.set(a.channel, f), c());
                              }),
                              (da = z(a.remote, { xdm_e: a.local, xdm_c: a.channel, xdm_p: 2 })),
                              u(a.props, {
                                  src: da + '#' + a.channel,
                                  name: x + a.channel + '_provider',
                              }),
                              (p = D(a)))
                            : ((a.remoteHelper = a.remote), l.Fn.set(a.channel, f));
                        var b = function() {
                            var f = k || this;
                            K(f, 'load', b);
                            l.Fn.set(a.channel + '_load', g);
                            (function S() {
                                'function' == typeof f.contentWindow.sendMessage ? c() : d(S, 50);
                            })();
                        };
                        k = D({ props: { src: a.local + '#_4' + a.channel }, onLoad: b });
                    },
                    init: function() {
                        n(e.onDOMReady, e);
                    },
                });
            };
            l.stack.HashTransport = function(b) {
                function c() {
                    if (p) {
                        var a = p.location.href,
                            b = '',
                            c = a.indexOf('#');
                        -1 != c && (b = a.substring(c));
                        b && b != k && ((k = b), f.up.incoming(k.substring(k.indexOf('_') + 1), L));
                    }
                }
                var f, g, e, h, k, l, p, v, B, L;
                return (f = {
                    outgoing: function(a, c) {
                        if (v) {
                            var d = b.remote + '#' + l++ + '_' + a;
                            (g || !B ? v.contentWindow : v).location = d;
                        }
                    },
                    destroy: function() {
                        a.clearInterval(e);
                        (!g && B) || v.parentNode.removeChild(v);
                        v = null;
                    },
                    onDOMReady: function() {
                        g = b.isHost;
                        h = b.interval;
                        k = '#' + b.channel;
                        l = 0;
                        B = b.useParent;
                        L = t(b.remote);
                        if (g) {
                            u(b.props, { src: b.remote, name: x + b.channel + '_provider' });
                            if (B)
                                b.onLoad = function() {
                                    p = a;
                                    e = setInterval(c, h);
                                    f.up.callback(!0);
                                };
                            else {
                                var q = 0,
                                    G = b.delay / 50;
                                (function ia() {
                                    if (++q > G) throw Error('Unable to reference listenerwindow');
                                    try {
                                        p = v.contentWindow.frames[x + b.channel + '_consumer'];
                                    } catch (S) {}
                                    p ? ((e = setInterval(c, h)), f.up.callback(!0)) : d(ia, 50);
                                })();
                            }
                            v = D(b);
                        } else
                            (p = a),
                                (e = setInterval(c, h)),
                                B
                                    ? ((v = parent), f.up.callback(!0))
                                    : (u(b, {
                                          props: {
                                              src: b.remote + '#' + b.channel + new Date(),
                                              name: x + b.channel + '_consumer',
                                          },
                                          onLoad: function() {
                                              f.up.callback(!0);
                                          },
                                      }),
                                      (v = D(b)));
                    },
                    init: function() {
                        n(f.onDOMReady, f);
                    },
                });
            };
            l.stack.ReliableBehavior = function(a) {
                var b,
                    c,
                    d = 0,
                    f = 0,
                    g = '';
                return (b = {
                    incoming: function(a, e) {
                        var h = a.indexOf('_'),
                            k = a.substring(0, h).split(',');
                        a = a.substring(h + 1);
                        k[0] == d && ((g = ''), c && c(!0));
                        0 < a.length &&
                            (b.down.outgoing(k[1] + ',' + d + '_' + g, e),
                            f != k[1] && ((f = k[1]), b.up.incoming(a, e)));
                    },
                    outgoing: function(a, e, h) {
                        g = a;
                        c = h;
                        b.down.outgoing(f + ',' + ++d + '_' + a, e);
                    },
                });
            };
            l.stack.QueueBehavior = function(a) {
                function b() {
                    if (a.remove && 0 === g.length) fa(c);
                    else if (!h && 0 !== g.length && !p) {
                        h = !0;
                        var f = g.shift();
                        c.down.outgoing(f.data, f.origin, function(a) {
                            h = !1;
                            f.callback &&
                                d(function() {
                                    f.callback(a);
                                }, 0);
                            b();
                        });
                    }
                }
                var c,
                    g = [],
                    h = !0,
                    k = '',
                    p,
                    l = 0,
                    n = !1,
                    v = !1;
                return (c = {
                    init: function() {
                        y(a) && (a = {});
                        a.maxLength && ((l = a.maxLength), (v = !0));
                        a.lazy ? (n = !0) : c.down.init();
                    },
                    callback: function(a) {
                        h = !1;
                        var d = c.up;
                        b();
                        d.callback(a);
                    },
                    incoming: function(b, d) {
                        if (v) {
                            var f = b.indexOf('_'),
                                g = parseInt(b.substring(0, f), 10);
                            k += b.substring(f + 1);
                            0 === g && (a.encode && (k = e(k)), c.up.incoming(k, d), (k = ''));
                        } else c.up.incoming(b, d);
                    },
                    outgoing: function(d, e, h) {
                        a.encode && (d = f(d));
                        var k = [];
                        if (v) {
                            for (; 0 !== d.length; ) {
                                var p = d.substring(0, l);
                                d = d.substring(p.length);
                                k.push(p);
                            }
                            for (; (p = k.shift()); )
                                g.push({
                                    data: k.length + '_' + p,
                                    origin: e,
                                    callback: 0 === k.length ? h : null,
                                });
                        } else g.push({ data: d, origin: e, callback: h });
                        n ? c.down.init() : b();
                    },
                    destroy: function() {
                        p = !0;
                        c.down.destroy();
                    },
                });
            };
            l.stack.VerifyBehavior = function(a) {
                function b() {
                    d = Math.random()
                        .toString(16)
                        .substring(2);
                    c.down.outgoing(d);
                }
                var c, d, f;
                return (c = {
                    incoming: function(e, g) {
                        var h = e.indexOf('_');
                        -1 === h
                            ? e === d
                                ? c.up.callback(!0)
                                : f || ((f = e), a.initiate || b(), c.down.outgoing(e))
                            : e.substring(0, h) === f && c.up.incoming(e.substring(h + 1), g);
                    },
                    outgoing: function(a, b, f) {
                        c.down.outgoing(d + '_' + a, b, f);
                    },
                    callback: function(c) {
                        a.initiate && b();
                    },
                });
            };
            l.stack.RpcBehavior = function(a, b) {
                function c(a) {
                    a.jsonrpc = '2.0';
                    e.down.outgoing(g.stringify(a));
                }
                function d(a, b) {
                    var d = Array.prototype.slice;
                    return function() {
                        var f = arguments.length,
                            e = { method: b };
                        if (0 < f && 'function' === typeof arguments[f - 1]) {
                            if (1 < f && 'function' === typeof arguments[f - 2]) {
                                var g = { success: arguments[f - 2], error: arguments[f - 1] };
                                e.params = d.call(arguments, 0, f - 2);
                            } else
                                (g = { success: arguments[f - 1] }),
                                    (e.params = d.call(arguments, 0, f - 1));
                            k['' + ++h] = g;
                            e.id = h;
                        } else e.params = d.call(arguments, 0);
                        a.namedParams && 1 === e.params.length && (e.params = e.params[0]);
                        c(e);
                    };
                }
                function f(a, b, d, f) {
                    if (d) {
                        if (b) {
                            var e = function(a) {
                                e = U;
                                c({ id: b, result: a });
                            };
                            var g = function(a, d) {
                                g = U;
                                var f = { id: b, error: { code: -32099, message: a } };
                                d && (f.error.data = d);
                                c(f);
                            };
                        } else e = g = U;
                        '[object Array]' !== Object.prototype.toString.call(f) && (f = [f]);
                        try {
                            var h = d.method.apply(d.scope, f.concat([e, g]));
                            y(h) || e(h);
                        } catch (S) {
                            g(S.message);
                        }
                    } else
                        b && c({ id: b, error: { code: -32601, message: 'Procedure not found.' } });
                }
                var e,
                    g = b.serializer || W(),
                    h = 0,
                    k = {};
                return (e = {
                    incoming: function(a, d) {
                        var e = g.parse(a);
                        if (e.method)
                            b.handle
                                ? b.handle(e, c)
                                : f(e.method, e.id, b.local[e.method], e.params);
                        else {
                            var h = k[e.id];
                            e.error
                                ? h.error && h.error(e.error)
                                : h.success && h.success(e.result);
                            delete k[e.id];
                        }
                    },
                    init: function() {
                        if (b.remote)
                            for (var c in b.remote)
                                b.remote.hasOwnProperty(c) && (a[c] = d(b.remote[c], c));
                        e.down.init();
                    },
                    destroy: function() {
                        for (var c in b.remote)
                            b.remote.hasOwnProperty(c) && a.hasOwnProperty(c) && delete a[c];
                        e.down.destroy();
                    },
                });
            };
            R.easyXDM = l;
        })(h, k, location, h.setTimeout, decodeURIComponent, encodeURIComponent);
    ('undefined' != typeof h.uLogin && h.uLogin.uLoginHost) ||
        (Array.prototype.indexOf ||
            (Array.prototype.indexOf = function(a) {
                try {
                    for (var b = 0; b < this.length; b++) if (this[b] == a) return b;
                } catch (c) {}
                return -1;
            }),
        String.prototype.trim ||
            (String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, '');
            }),
        'undefined' === typeof h.console &&
            (h.console = {
                log: function() {},
                error: function() {},
                info: function() {},
                assert: function() {},
            }),
        (h.uLogin = {
            uLoginHost: (function(a) {
                var b;
                for (b in a)
                    if (b in a && a[b].src && /^https?:\/\/(.*?)\/js\/ulogin\.js/.test(a[b].src)) {
                        var c = a[b].src.match(/^https?:\/\/([^/]+)/)[1].replace(/^www\./, '');
                        break;
                    }
                return 'u-login.com' === c ? 'u-login.com' : 'ulogin.ru';
            })(k.getElementsByTagName('script')),
        }),
        (h.uLogin = {
            version: '3',
            protocol: location.href.match(/^https/i) ? 'https' : 'http',
            host: encodeURIComponent(location.host),
            uLoginHost: uLogin.uLoginHost,
            supportStorage: !!(
                'localStorage' in window &&
                null !== window.localStorage &&
                'JSON' in window &&
                null !== window.JSON &&
                'undefined' !== typeof window.JSON.parse &&
                'undefined' !== typeof window.JSON.stringify
            ),
            supportHistory: !(!window.history || !history.pushState),
            ids: [],
            timeouts: {},
            listeners: {},
            lang: (m.language || m.systemLanguage || m.userLanguage || 'en')
                .substr(0, 2)
                .toLowerCase(),
            langs: 'en ru uk fr de uz'.split(' '),
            dialog: !1,
            close: !1,
            lightbox: !1,
            dialogSocket: !1,
            pixel: !1,
            providerCodes: 'vkontakte odnoklassniki mailru facebook twitter google yandex livejournal openid flickr lastfm linkedin liveid soundcloud steam webmoney youtube foursquare tumblr googleplus instagram wargaming'.split(
                ' ',
            ),
            providerNames: 'VK Odnoklassniki Mail.ru Facebook Twitter Google Yandex LiveJournal OpenID Flickr Last.FM LinkedIn LiveID SoundCloud Steam WebMoney YouTube foursquare tumblr Google+ Instagram Wargaming.net'.split(
                ' ',
            ),
            states: ['ready', 'open', 'receive', 'close', 'fill'],
            themes: ['classic', 'flat'],
            widgetSettings: {},
            findTimer: 0,
            waitGetWidget: {},
            altwayCalled: [],
            rc: !1,
            page: null,
            altway: (function(a) {
                a = a.toLowerCase();
                return !!/iPhone|iPad/i.test(a);
            })(m.userAgent || m.vendor || h.opera),
            m: !!/(ip(ad|od|hone)|android)/i.test(m.userAgent || m.vendor || h.opera),
            mobile: (function(a) {
                if (/_utl_t=vk/.test(location.href) || /_utl_t=vk/.test(document.referrer))
                    return !1;
                a = a.toLowerCase();
                return !!/(ip(ad|od|hone)|android)/i.test(a);
            })(m.userAgent || m.vendor || h.opera),
            openFromSocket: !1,
            ppi: null,
            authSocket: !1,
            availableParams: {
                id: 1,
                redirect_uri: 1,
                page: 1,
                callback: 1,
                fields: 1,
                force_fields: 1,
                popup_css: 1,
                optional: 1,
                protocol: 1,
                host: 1,
                lang: 1,
                verify: 1,
                sort: 1,
                othprov: 1,
                providers: 1,
                altway: 1,
                m: 1,
                icons_32: 1,
                icons_16: 1,
            },
            cancelClick: !1,
            postMessageIsAvailable: 'undefined' !== typeof h.postMessage,
            init: function(a) {
                if (k.body) {
                    this.mobile && (this.altway = !0);
                    this.page = encodeURIComponent(location.href);
                    this.openFromSocket &&
                        (this.authSocket = this.initSocket(
                            this.buildUrl('/version/3.0/html/buttons_receiver.html', {
                                four: '',
                                r: parseInt(1e5 * Math.random()),
                            }),
                            this.getRC(),
                            { background: 'transparent' },
                        ));
                    '' == a &&
                        ((a = k.getElementsByTagName('script')),
                        (a = a[a.length - 1].src),
                        -1 == a.indexOf('?') && (a += '?'),
                        (a = a.substr(a.indexOf('?') + 1)));
                    if ('' != a) {
                        var b = this.parse(a);
                        b.version && (this.version = b.version);
                        if (b.display) {
                            var c = b.id || 'uLogin';
                            if (this.get(c)) {
                                a = !0;
                                for (var d = 0; d < this.ids.length; d++)
                                    c == this.ids[d].id && (a = !1);
                                a && this.setProp(b.id || 'uLogin', this.ids.length, b);
                            } else r('uLogin.init("' + a + '")', 1e3);
                        }
                    }
                    this.add(k.body, 'touchmove', this.touchMove);
                    uLogin.timeouts.search_all = r(function f() {
                        uLogin.findWidgets();
                        if (
                            'complete' === k.readyState &&
                            (0 === uLogin.findTimer && (uLogin.findTimer = +new Date()),
                            1e4 < new Date() - uLogin.findTimer)
                        )
                            return !1;
                        uLogin.timeouts.all = r(f, 50);
                    }, 50);
                    this.findWidgets();
                    uLogin.timeouts.search_ulogin = r(function p() {
                        uLogin.checkAsyncWidgets();
                        uLogin.timeouts.search_ulogin = r(p, 50);
                    }, 50);
                    this.checkAsyncWidgets();
                    uLogin.timeouts.check_widgets = r(function M() {
                        uLogin.checkCurrentWidgets();
                        uLogin.timeouts.check_widgets = r(M, 300);
                    }, 30);
                    this.checkCurrentWidgets();
                    this.sendPixel();
                    uLogin.postMessageIsAvailable &&
                        (window.addEventListener
                            ? window.addEventListener('message', uLogin.onMessage)
                            : window.attachEvent('onmessage', uLogin.onMessage));
                } else
                    r(function() {
                        uLogin.init();
                    }, 20);
                this.callbackReceived();
            },
            onMessage: function(a) {
                a.origin == 'https://' + uLogin.uLoginHost &&
                    a.data &&
                    a.data.mine &&
                    a.data.func &&
                    ('object' === typeof a.data.func && (a.data.func = a.data.func[0]),
                    'to_window' === a.data.func
                        ? ((src = uLogin.buildUrl(a.data.args[2], {
                              fields: a.data.args[0],
                              filled: a.data.args[1],
                              set: encodeURIComponent('{window:1}'),
                          })),
                          console.log(src),
                          uLogin.loadWindow(src))
                        : h[a.data.func] && h[a.data.func].apply(uLogin, a.data.args || []));
            },
            get: function(a) {
                return k.getElementById(a);
            },
            exists: function(a) {
                return 'undefined' != typeof a;
            },
            add: function(a, b, c) {
                a.addEventListener
                    ? a.addEventListener(
                          b,
                          function(d) {
                              ('click' === b && uLogin.cancelClick) || c(a, d);
                          },
                          !1,
                      )
                    : a.attachEvent
                    ? a.attachEvent('on' + b, function(d) {
                          ('click' === b && uLogin.cancelClick) || c(a, d);
                      })
                    : (a['on' + b] = function(d) {
                          ('click' === b && uLogin.cancelClick) || c(a, d);
                      });
                'click' === b &&
                    (this.add(a, 'touchstart', this.touchStart),
                    this.add(
                        a,
                        'touchend',
                        (function(a, b) {
                            return function(c, d) {
                                uLogin.cancelClick ||
                                    ((uLogin.cancelClick = !0), b.call(this, a, d));
                            };
                        })(a, c),
                    ));
            },
            touchStart: function() {
                uLogin.cancelClick = !1;
            },
            touchMove: function() {
                uLogin.cancelClick = !0;
            },
            is_encoded: function(a) {
                return decodeURIComponent(a) != a;
            },
            genID: function() {
                for (
                    var a = new Date(), b = a.getTime() + Math.floor(1e5 * Math.random());
                    this.get('ul_' + b);

                )
                    b = a.getTime() + Math.floor(1e5 * Math.random());
                return 'ul_' + b;
            },
            show: function(a) {
                this.exists(a) && (a.style.display = 'block');
            },
            hide: function(a) {
                a && this.exists(a) && (a.style.display = 'none');
            },
            parse: function(a) {
                var b = {};
                if (!a) return b;
                if ('object' === typeof a) return a;
                var c = a.split('&');
                c = 1 < c.length ? c : a.split(';');
                for (a = 0; a < c.length; a++) {
                    var d = c[a].split('=');
                    d[0] && (d[0] = d[0].trim());
                    d[1] && (d[1] = d[1].trim());
                    b[d[0]] = d[1];
                }
                return b;
            },
            scrollTop: function() {
                return h.pageYOffset || k.documentElement.scrollTop || k.body.scrollTop;
            },
            scrollLeft: function() {
                return h.pageXOffset || k.documentElement.scrollLeft || k.body.scrollLeft;
            },
            dialogHeight: function() {
                return 358;
            },
            dialogWidth: function() {
                return 564;
            },
            clientWidth: function() {
                var a = 0;
                '[object Opera]' == Object.prototype.toString.call(h.opera) &&
                9.5 > h.parseFloat(h.opera.version())
                    ? (a = k.body.clientWidth)
                    : h.innerWidth && (a = h.innerWidth);
                this.isIE() && (a = k.documentElement.clientWidth);
                return a;
            },
            clientHeight: function() {
                var a = 0;
                '[object Opera]' == Object.prototype.toString.call(h.opera) &&
                9.5 > h.parseFloat(h.opera.version())
                    ? (a = k.body.clientHeight)
                    : h.innerHeight && (a = h.innerHeight);
                this.isIE() && (a = k.documentElement.clientHeight);
                return a;
            },
            isIE: function() {
                if (/MSIE (\d+\.\d+);/.test(m.userAgent)) {
                    var a = Number(RegExp.$1);
                    if (9 > a) return a;
                }
                return !1;
            },
            getPPI: function() {
                if (null === this.ppi)
                    try {
                        var a = window.devicePixelRatio || 1,
                            b = document.getElementsByTagName('body')[0],
                            c = document.createElement('div');
                        c.style =
                            'height: 1in; left: -100%; position: absolute; top: -100%; width: 1in;';
                        b.appendChild(c);
                        var d = c.offsetWidth * a;
                        b.removeChild(c);
                        this.ppi = d;
                    } catch (e) {
                        this.ppi = 96;
                    }
                return this.ppi;
            },
            inArray: function(a, b) {
                if (!a || !b) return !1;
                for (var c = 0, d = b.length; c < d; c++) if (a == b[c]) return c;
                return -1;
            },
            findWidgets: function() {
                for (
                    var a = 0,
                        b = [],
                        c = [],
                        d = k.getElementsByTagName('div'),
                        e = k.getElementsByTagName('a');
                    e[a];

                )
                    e[a] && (b[a] = e[a]), a++;
                for (a = 0; d[a]; ) d[a] && (c[a] = d[a]), a++;
                for (a = 0; c[a] || b[a]; )
                    c[a] && this.addWidget(c[a]), b[a] && this.addWidget(b[a]), a++;
            },
            addWidget: function(a, b) {
                var c = a.id,
                    d = a.getAttribute('data-uloginid'),
                    e = {},
                    f = !1;
                'undefined' !== typeof h.uLoginParams &&
                    (h.uLoginParams[c]
                        ? (e = h.uLoginParams[c])
                        : h.uLoginParams[d]
                        ? (e = h.uLoginParams[d])
                        : 0 < this.arrayIntersectKey(h.uLoginParams, this.availableParams).length &&
                          ((e = h.uLoginParams), (f = !0)));
                b && (e = this.extend(e, b));
                var k = a.getAttribute('data-ulogin') || a.getAttribute('x-ulogin-params');
                f =
                    null !== k ||
                    (!f && 0 < this.arrayIntersectKey(e, this.availableParams).length);
                b = this.extend(this.parse(k), e);
                (!d && !f) || c || ((c = this.genID()), a.setAttribute('id', c));
                d ? this.getWidget(d, c) : f && this.setProp(c, this.ids.length, b);
            },
            inited: function(a) {
                for (var b = 0; b < this.ids.length; b++) if (a == this.ids[b].id) return !0;
                return !1;
            },
            initWidget: function(a) {
                if (a) {
                    var b = this.get(a);
                    if (
                        b &&
                        (b = b.getAttribute('data-ulogin') || b.getAttribute('x-ulogin-params')) &&
                        !this.inited(a)
                    ) {
                        b = this.parse(b);
                        var c = this.getWidgetNumber(a);
                        isNaN(c) ? (c = this.ids.length) : (this.ids[c] = {});
                        this.setProp(a, c, b);
                    }
                }
            },
            setProp: function(a, b, c) {
                if (this.waitGetWidget[a] || this.inited(a)) return !1;
                this.ids[b] = {
                    id: a,
                    dropTimer: !1,
                    initCheck: !1,
                    type: c.display || '',
                    providers: c.providers || '',
                    hidden: c.hidden || '',
                    redirect_uri: c.redirect_uri || '',
                    page: this.page,
                    callback: c.callback || '',
                    fields: c.fields || 'first_name,last_name,email',
                    force_fields: c.force_fields || '',
                    popup_css: c.popup_css || '',
                    optional: c.optional || '',
                    color: c.color || 'fff',
                    opacity: c.opacity || '75',
                    verify: c.verify || '',
                    m: 'undefined' !== typeof c.m ? c.m : this.m,
                    lang: c.lang || this.lang,
                    altway: 'undefined' !== typeof c.altway ? parseInt(c.altway) : this.altway,
                    sort: 'default' === c.sort ? 'default' : 'relevant',
                    state: '',
                    hidden_button: c.hidden_button || 'inset',
                    dropdown_container: c.dropdown_container || 'body',
                    icons_32: c.icons_32 || '',
                    icons_16: c.icons_16 || '',
                    theme: c.theme || 'classic',
                    client: c.client || '',
                    event: c.event || 'click',
                };
                -1 == this.inArray(this.ids[b].theme, this.themes) &&
                    (this.ids[b].theme = this.themes[0]);
                this.ids[b].providers || this.ids[b].other || (this.ids[b].hidden = 'other');
                var d;
                if (this.ids[b].providers) {
                    var e = this.ids[b].providers.split(',');
                    var f = [];
                    for (d in e) {
                        var h = e[d];
                        -1 < this.inArray(h, this.providerCodes) && f.push(h);
                    }
                    this.ids[b].providers = f.join(',');
                }
                if (this.ids[b].hidden && 'other' !== this.ids[b].hidden) {
                    e = this.ids[b].hidden.split(',');
                    f = [];
                    for (d in e) (h = e[d]), -1 < this.inArray(h, this.providerCodes) && f.push(h);
                    this.ids[b].hidden = f.join(',');
                }
                ('small' !== this.ids[b].type && 'panel' !== this.ids[b].type) ||
                    this.sendStats({ type: this.ids[b].type });
                'window' == this.ids[b].type &&
                    !this.ids[b].providers &&
                    this.ids[b].hidden &&
                    (this.ids[b].providers = this.providerCodes.join(','));
                this.ids[b].mobile = 0 == c.mobilebuttons ? 0 : this.mobile;
                this.ids[b].altway &&
                    !this.ids[b].redirect_uri &&
                    (this.ids[b].redirect_uri = location.href);
                this.ids[b].callback && !this.ids[b].altway && (this.ids[b].redirect_uri = '');
                this.ids[b].redirect_uri = this.clearRedirectUri(this.ids[b].redirect_uri);
                -1 == this.inArray(this.ids[b].lang, this.langs) && (this.ids[b].lang = this.lang);
                this.ids[b].icons_32 = this.fixSiteLink(this.ids[b].icons_32);
                this.ids[b].icons_16 = this.fixSiteLink(this.ids[b].icons_16);
                switch (c.display) {
                    case 'small':
                    case 'panel':
                        this.ids[b].listener_id = !1;
                        this.initPanel(b);
                        break;
                    case 'window':
                        this.initWindow(b);
                        break;
                    case 'buttons':
                        this.initButtons(b);
                        break;
                    default:
                        this.ids.splice(b, b);
                }
                this.get(a).setAttribute('data-ulogin-inited', (+new Date()).toString());
            },
            fixSiteLink: function(a) {
                a &&
                    (/^https?:\/\/(.*?)/.test(a) ||
                        (/^\//.test(a) || (a = '/' + a), (a = location.origin + a)),
                    new RegExp('^' + location.origin).test(a) ||
                        ((a = ''),
                        console.error(
                            'uLogin ERROR: resource link is invalid, not match with location.origin',
                        )),
                    a &&
                        (a = this.is_encoded(a)
                            ? a.replace(/\//g, '%2F').replace(/\?/g, '%3F')
                            : encodeURIComponent(a)));
                return a;
            },
            clearRedirectUri: function(a) {
                if (!a) return a;
                a = a
                    .replace(/ulogin_callback=([^&?]*?)#/, '#')
                    .replace(/ulogin_callback=(.*?)(&|$)/, '')
                    .replace(/ulogin_token=([^&?]*?)#/, '#')
                    .replace(/ulogin_token=(.*?)(&|$)/, '')
                    .replace(/(\?|&)#/, '#')
                    .replace(/(\?|&)$/, '');
                return (a = this.is_encoded(a)
                    ? a.replace(/\//g, '%2F').replace(/\?/g, '%3F')
                    : encodeURIComponent(a));
            },
            initPanel: function(a) {
                var b = this.get(this.ids[a].id),
                    c = 'small' == this.ids[a].type ? 1 : 0,
                    d = c ? 21 : 42,
                    e = c ? 16 : 32,
                    f = 0,
                    h = c ? 5 : 10,
                    M = c ? '16px' : '32px',
                    m = '',
                    n = '';
                this.ids[a].icons_16 && c
                    ? (m = decodeURIComponent(this.ids[a].icons_16))
                    : this.ids[a].icons_32 && !c
                    ? (m = decodeURIComponent(this.ids[a].icons_32))
                    : ((n = 120 < this.getPPI() ? (c ? 32 : 64) : c ? 16 : 32),
                      (m = 'providers-{size}-{theme}.png?version=img.3.0.1'
                          .replace('{size}', n)
                          .replace('{theme}', this.ids[a].theme)),
                      (m = this.buildUrl('version/3.0/img/' + m)),
                      (n = 'smiles-{size}.png?version=img.3.0.1'
                          .replace('{size}', n)
                          .replace('{theme}', this.ids[a].theme)),
                      (n = this.buildUrl('img/' + n)),
                      (this.ids[a].hovered_sprite = n));
                m = 'url(' + m + ') ' + (c ? '0 -1px' : '0 -2px') + ' no-repeat';
                b.innerHTML = '';
                if ('other' === this.ids[a].hidden) {
                    var r = this.providerCodes.slice(0);
                    if (this.ids[a].providers) {
                        n = this.ids[a].providers.split(',');
                        for (var t = 0; t < n.length; t++) {
                            var C = this.inArray(n[t], r);
                            -1 !== C && r.splice(C, 1);
                        }
                    }
                    this.ids[a].hidden = r.toString();
                }
                if (this.ids[a].providers) {
                    n =
                        'relevant' === this.ids[a].sort
                            ? this.relProviders(this.ids[a].providers, this.ids[a].hidden, 1)
                            : this.ids[a].providers.split(',');
                    var z;
                    f +=
                        d *
                        ('inset' === this.ids[a].hidden_button && 0 < this.ids[a].hidden.length
                            ? n.length + 1
                            : n.length);
                    d = k.createElement('div');
                    this.ids[a].buttonsContainer = d;
                    this.ids[a].buttonsContainer.className = 'ulogin-buttons-container';
                    this.resetStyle(d, {
                        width: f,
                        maxWidth: '100%',
                        minHeight: e,
                        verticalAlign: 'top',
                        display: 'inline-block',
                        lineHeight: 0,
                    });
                    b.appendChild(d);
                    for (z in n)
                        (f = n[z]),
                            (r = this.inArray(f, this.providerCodes)),
                            -1 < r &&
                                ((d = k.createElement('div')),
                                (d.className = 'ulogin-button-' + f),
                                d.setAttribute('data-uloginbutton', f),
                                d.setAttribute('role', 'button'),
                                d.setAttribute('title', this.providerNames[r]),
                                this.resetStyle(d, {
                                    float: 'left',
                                    width: e,
                                    height: e,
                                    margin: '0 ' + h + 'px ' + h + 'px 0',
                                    background: m,
                                    cursor: 'pointer',
                                    backgroundPosition: this.getIconPosition(c, r),
                                    backgroundSize: M,
                                }),
                                this.ids[a].buttonsContainer.appendChild(d));
                }
                this.ids[a].hidden &&
                    ((b.style.position = 'relative'),
                    'relevant' === this.ids[a].sort &&
                        (this.ids[a].hidden = this.relProviders(
                            this.ids[a].providers,
                            this.ids[a].hidden,
                            2,
                        ).join(',')),
                    (this.ids[a].drop = k.createElement('div')),
                    (this.ids[a].drop.className = 'ulogin-dropdown-button'),
                    this.resetStyle(this.ids[a].drop, {
                        width: e,
                        height: e,
                        margin: '0 ' + h + 'px ' + h + 'px 0',
                        cursor: 'pointer',
                        background: m,
                        verticalAlign: 'baseline',
                        display: 'inline-block',
                        float: 'none',
                        backgroundSize: M,
                    }),
                    this.ids[a].mobile ||
                        (this.add(this.ids[a].drop, 'mouseover', function(b) {
                            uLogin.ids[a].showed = !1;
                            uLogin.dropdownDelayed(a, c ? 1 : 2);
                            uLogin.setOpacity(b, uLogin.ids[a].opacity);
                        }),
                        this.add(this.ids[a].drop, 'mouseout', function(b) {
                            uLogin.ids[a].showed = !0;
                            uLogin.dropdownDelayed(a, 0);
                            uLogin.setOpacity(b);
                        }),
                        this.add(this.ids[a].drop, 'click', function() {
                            uLogin.dropdown(a, c ? 1 : 2);
                        })),
                    'inset' === this.ids[a].hidden_button && this.ids[a].buttonsContainer
                        ? this.ids[a].buttonsContainer.appendChild(this.ids[a].drop)
                        : b.appendChild(this.ids[a].drop),
                    this.ids[a].mobile || this.initDrop(a));
                this.ids[a].buttonsContainer &&
                    0 < this.ids[a].buttonsContainer.clientHeight &&
                    (this.ids[a].buttonsContainer.style.height =
                        this.ids[a].buttonsContainer.clientHeight - h + 'px');
                window.bc = this.ids[a].buttonsContainer;
                this.initButtons(a);
            },
            initWindow: function(a) {
                var b = this.get(this.ids[a].id),
                    c = b.getElementsByTagName('*');
                c.length
                    ? (b = c[0])
                    : b.innerHTML
                    ? ((c = document.createElement('span')),
                      (c.innerHTML = b.innerHTML),
                      (b.innerHTML = ''),
                      (b = b.appendChild(c)))
                    : ((c = k.createElement('img')),
                      c.setAttribute('src', this.buildUrl('img/button.png?version=img.3.0.1')),
                      c.setAttribute('style', 'cursor:pointer; width:187px; height:30px'),
                      c.setAttribute(
                          'alt',
                          '\u041c\u0443\u043b\u044c\u0442\u0438\u0412\u0445\u043e\u0434',
                      ),
                      (b = b.appendChild(c)));
                b.setAttribute('data-uloginbutton', 'window');
                b.setAttribute('data-ulogin-default', 'true');
                this.ids[a].opacity = 75;
                this.initButtons(a);
            },
            sendPixel: function() {
                this.getRC();
                if (this.pixel) {
                    var a = this;
                    r(function() {
                        if (a.pixel) {
                            var b = k.createElement('iframe'),
                                c = a.getRC();
                            b.src = a.pixel
                                .replace('[rand]', parseInt(1e5 * Math.random()))
                                .replace('[u]', encodeURIComponent(location.href))
                                .replace('[r]', encodeURIComponent(k.referrer || ''));
                            b.width = b.height = 1;
                            b.style.display = 'none';
                            c.appendChild(b);
                            r(function() {
                                c.removeChild(b);
                            }, 3e3);
                            a.pixel = !1;
                        }
                    }, 0);
                }
            },
            sendStats: function(a) {
                var b = { r: parseInt(1e5 * Math.random()) };
                a.type && (b.type = a.type);
                a = this.buildUrl('stats.html', b);
                this.initSocket(a, this.getRC());
            },
            mergeAccounts: function(a, b) {
                if (!a)
                    return (
                        console.error('uLogin ERROR (mergeAccounts): invalid token "' + a + '"'), !1
                    );
                var c = { token: a };
                b
                    ? ('undefined' !== typeof b.join && (b = b.join(',')),
                      (c.identities = encodeURIComponent(b)),
                      (c = this.buildUrl('merge_accounts.php', c)))
                    : (c = this.buildUrl('require_verify.php', c));
                this.loadWindow(c);
            },
            getRC: function() {
                var a = document.getElementById('ulogin_receiver_container');
                a ||
                    ((a = k.createElement('div')),
                    a.setAttribute('id', 'ulogin_receiver_container'),
                    this.resetStyle(a, { width: 0, height: 0, display: 'none' }),
                    k.getElementsByTagName('body')[0].appendChild(a));
                return a;
            },
            clearTimeouts: function() {
                for (var a in this.timeouts) clearTimeout(this.timeouts[a]);
            },
            callbackTryCall: function(a, b) {
                this.altwayCalled.push(a);
                h[a]
                    ? setTimeout(function() {
                          h[a].call(h, b);
                      }, 10)
                    : setTimeout(function() {
                          uLogin.callbackTryCall(a, b);
                      }, 100);
            },
            callbackReceived: function() {
                var a = location.search.replace('?', '');
                if (
                    (a = this.parse(a)) &&
                    a.ulogin_callback &&
                    a.ulogin_token &&
                    -1 === this.inArray(a.ulogin_callback, this.altwayCalled) &&
                    (this.callbackTryCall(a.ulogin_callback, a.ulogin_token), this.supportHistory)
                ) {
                    var b = document.getElementsByTagName('title');
                    b = (b = b ? b[0] : '') ? b.innerHTML : '';
                    delete a.ulogin_callback;
                    delete a.ulogin_token;
                    a = this.buildUrl('', a, !0);
                    var c = location.origin + location.pathname + a + location.hash;
                    r(function() {
                        window.history.pushState({}, b, c);
                    }, 1e3);
                }
            },
            newDialogSocket: function(a) {
                this.dialogSocket && this.dialogSocket.destroy();
                this.dialogSocket = a;
            },
            initSocket: function(a, b, c, d) {
                d || (d = 0);
                var e = new easyXDM.Socket({
                    remote: a,
                    swf: this.isIE() ? this.buildUrl('js/easyxdm.swf') : '',
                    props: {
                        style: this.extend(
                            {
                                margin: 0,
                                padding: 0,
                                background: '#fff',
                                border: 0,
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                overflow: 'hidden',
                                width: '100%',
                                height: '100%',
                            },
                            c,
                        ),
                        frameBorder: '0',
                    },
                    container: b,
                    onMessage: function(a) {
                        var b;
                        /weights:/.test(a) ||
                            console.info('[uLogin] ulogin.js received message: ' + a);
                        if ((b = a.match(/(.*?)\((.*?)\)/))) {
                            var c = b[1];
                            a = b[2];
                        }
                        if ((b = a.match(/^(.*?):(.*?)$/))) {
                            var f = b[1];
                            var k = b[2];
                        }
                        /^https?:\/\//.test(a)
                            ? (location.href = a)
                            : /^\/auth.php\?/.test(a)
                            ? ((a = 'https://' + uLogin.uLoginHost + a),
                              uLogin.ids[d].altway
                                  ? (location.href = a)
                                  : uLogin.openWithReceiver(a, d))
                            : -1 < uLogin.inArray(a, uLogin.states)
                            ? uLogin._changeState(d, a)
                            : f && -1 < uLogin.inArray(f, uLogin.states)
                            ? uLogin._changeState(d, f, 'string' === typeof k ? k.split(',') : [])
                            : 'closeme' == a
                            ? (uLogin.hideAll(), e.destroy())
                            : /to_window:/.test(a)
                            ? ((c = uLogin.buildUrl(a.replace(/to_window:\/?/, '', ''), {
                                  set: encodeURIComponent('{window:1}'),
                              })),
                              uLogin.loadWindow(c),
                              /to_window:\/fill\.php/.test(a) && uLogin._changeState(d, 'fill'))
                            : /weights:/.test(a)
                            ? uLogin.setWeights(a.replace(/weights:\/?/, '', ''))
                            : c
                            ? 'undefined' != typeof h[c] &&
                              (h[c].apply(h, a.split(',')),
                              e.destroy(),
                              uLogin.dialog && uLogin.hideAll())
                            : uLogin.ids[d] &&
                              'undefined' != typeof h[uLogin.ids[d].callback] &&
                              (uLogin._changeState(d, 'receive'),
                              h[uLogin.ids[d].callback](a),
                              uLogin.dialog && uLogin.hideAll());
                    },
                });
                return e;
            },
            getWidgetNumber: function(a) {
                for (var b = 0; b < this.ids.length; b++) if (a == this.ids[b].id) return b;
                return NaN;
            },
            onMoveWindow: function() {
                this.moveWindow();
            },
            loadWindow: function(a, b) {
                null === b && (b = !1);
                var c = this.ids[b] ? this.ids[b].opacity : 75;
                try {
                    k.body.removeChild(this.lightbox);
                } catch (e) {}
                try {
                    k.body.removeChild(this.dialog);
                } catch (e) {}
                var d = k.createElement('div');
                this.resetStyle(d, {
                    position: 'fixed',
                    zIndex: 9997,
                    width: '100%',
                    height: '100%',
                    background: '#' + (this.ids[b] ? this.ids[b].color : 'fff'),
                    display: 'none',
                });
                this.setOpacity(d, c);
                this.lightbox = d;
                d = k.createElement('div');
                d.id = this.genID();
                d.className = 'ulogin-popup';
                this.resetStyle(d, {
                    position: 'absolute',
                    zIndex: 9998,
                    left: Math.floor(
                        this.scrollLeft() + (this.clientWidth() - this.dialogWidth()) / 2,
                    ),
                    top: Math.floor(
                        this.scrollTop() + (this.clientHeight() - this.dialogHeight()) / 2,
                    ),
                    width: this.dialogWidth(),
                    height: this.dialogHeight(),
                    overflow: 'visible',
                    display: 'none',
                    border:
                        this.ids[b] && 'flat' === this.ids[b].theme
                            ? '5px solid #666'
                            : '10px solid #666',
                    borderRadius: this.ids[b] && 'flat' === this.ids[b].theme ? 0 : '8px',
                    boxShadow:
                        '0 2px 3px 0 rgba(0,0,0,.2),0 3px 2px -2px rgba(0,0,0,.22),0 1px 6px 0 rgba(0,0,0,.12)',
                });
                this.dialog = d;
                d = k.createElement('div');
                d.className = 'ulogin-popup-close';
                this.resetStyle(d, {
                    position: 'absolute',
                    width: 30,
                    height: 30,
                    zIndex: 9999,
                    background: 'url(' + this.buildUrl('img/x.png') + ')',
                    cursor: 'pointer',
                    display: 'none',
                    left: 'initial',
                    top: '-15px',
                    right: '-15px',
                });
                this.close = d;
                k.body.appendChild(this.lightbox);
                k.body.appendChild(this.dialog);
                this.dialog.appendChild(this.close);
                this.add(this.lightbox, 'click', function() {
                    uLogin.hideAll();
                });
                this.add(this.close, 'click', function() {
                    uLogin.hideAll();
                });
                this.add(this.close, 'mouseover', function(a) {
                    a.style.background = 'url(' + uLogin.buildUrl('img/x_.png') + ')';
                });
                this.add(this.close, 'mouseout', function(a) {
                    a.style.background = 'url(' + uLogin.buildUrl('img/x.png') + ')';
                });
                this.add(h, 'scroll', function() {
                    uLogin.onMoveWindow();
                });
                this.add(h, 'resize', function() {
                    uLogin.onMoveWindow();
                });
                this.newDialogSocket(this.initSocket(a, this.dialog.getAttribute('id'), {}, b));
                uLogin.show(uLogin.close);
                uLogin.show(uLogin.lightbox);
                uLogin.show(uLogin.dialog);
                uLogin.onMoveWindow();
            },
            hideAll: function() {
                this.hide(this.lightbox);
                this.hide(this.dialog);
                this.hide(this.close);
                for (var a = 0; a < this.ids.length; a++)
                    (this.ids[a].showed = !1),
                        this.hide(this.ids[a].hiddenW),
                        this.hide(this.ids[a].hiddenA);
            },
            moveWindow: function() {
                if (!this.dialog || !this.dialog.firstChild) return !1;
                var a = this.dialogWidth(),
                    b = this.dialogHeight();
                a =
                    (Math.floor(this.scrollLeft() + (this.clientWidth() - a) / 2) -
                        Number(this.dialog.style.left.slice(0, -2))) /
                    10;
                b =
                    (Math.floor(this.scrollTop() + (this.clientHeight() - b) / 2) -
                        Number(this.dialog.style.top.slice(0, -2))) /
                    10;
                for (var c = 0; 10 > c; c++)
                    (this.dialog.style.left =
                        a + Number(this.dialog.style.left.slice(0, -2)) + 'px'),
                        (this.dialog.style.top =
                            b + Number(this.dialog.style.top.slice(0, -2)) + 'px');
            },
            resetStyle: function(a, b) {
                !b && (b = {});
                var c = this.extend(
                        {
                            margin: 0,
                            padding: 0,
                            outline: 'none',
                            border: 'none',
                            borderRadius: 0,
                            cursor: 'default',
                            float: 'none',
                            position: 'relative',
                            display: 'inherit',
                            width: 'auto',
                            height: 'auto',
                            left: 0,
                            top: 0,
                            boxSizing: 'content-box',
                        },
                        b,
                    ),
                    d = ['width', 'height', 'left', 'top'],
                    e = ['float'],
                    f;
                for (f in c) {
                    -1 < this.inArray(f, d) && 'number' === typeof c[f] && (c[f] += 'px');
                    try {
                        -1 < this.inArray(f, e) && a.style.setProperty(f, c[f]);
                    } catch (p) {}
                    try {
                        a.style[f] = c[f];
                    } catch (p) {}
                }
            },
            getIconPosition: function(a, b) {
                return a ? '0 -' + (18 + 17 * b) + 'px' : '0 -' + (36 + 34 * b) + 'px';
            },
            setOpacity: function(a, b) {
                a.style.filter = b
                    ? 'alpha(opacity=' +
                      b +
                      ") progid:DXImageTransform.Microsoft.AlphaImageLoader(src=transparent.png, sizingMethod='crop')"
                    : '';
                a.style.opacity = b ? parseFloat(b) / 100 : '';
            },
            initDrop: function(a) {
                if (!this.ids[a].mobile && '' != this.ids[a].hidden) {
                    var b = this.get(this.ids[a].id),
                        c = this.genID();
                    var d =
                        310 < 23 * this.ids[a].hidden.split(',').length - 2
                            ? 310
                            : 23 * this.ids[a].hidden.split(',').length - 2;
                    var e = k.createElement('div');
                    e.className = 'ulogin-dropdown';
                    e.id = c;
                    this.resetStyle(e, {
                        position: 'absolute',
                        zIndex: 9999,
                        width: 128,
                        height: d,
                        border: 'flat' === this.ids[a].theme ? '3px solid #666' : '5px solid #666',
                        borderRadius: 'flat' === this.ids[a].theme ? 0 : '4px',
                        boxShadow:
                            '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
                        display: 'none',
                    });
                    this.ids[a].hiddenW = e;
                    'body' === this.ids[a].dropdown_container
                        ? k.body.appendChild(this.ids[a].hiddenW)
                        : b.appendChild(this.ids[a].hiddenW);
                    e = this.buildUrl('/version/3.0/html/drop.html', {
                        id: a,
                        redirect_uri: this.ids[a].redirect_uri,
                        callback: this.ids[a].callback,
                        providers: this.ids[a].hidden,
                        fields: this.ids[a].fields,
                        force_fields: this.ids[a].force_fields,
                        popup_css: this.ids[a].popup_css,
                        optional: this.ids[a].optional,
                        othprov: this.ids[a].providers,
                        protocol: this.protocol,
                        host: this.host,
                        lang: this.ids[a].lang,
                        verify: this.ids[a].verify,
                        sort: this.ids[a].sort,
                        altway: this.ids[a].altway ? 1 : null,
                        m: this.ids[a].m ? 1 : 0,
                        icons_32: this.ids[a].icons_32,
                        icons_16: this.ids[a].icons_16,
                        theme: this.ids[a].theme,
                        client: this.ids[a].client,
                        page: this.page,
                        version: this.version,
                    });
                    this.initSocket(
                        e,
                        c,
                        { position: 'relative', width: '128px', height: d + 'px' },
                        a,
                    );
                    e = k.createElement('div');
                    this.resetStyle(e, {
                        position: 'absolute',
                        background: '#000',
                        left: 'initial',
                        right: 'flat' === this.ids[a].theme ? '-3px' : '-5px',
                        top: '100%',
                        width: 41,
                        height: 13,
                        border: 'flat' === this.ids[a].theme ? '3px solid #666' : '5px solid #666',
                        textAlign: 'center',
                    });
                    d = k.createElement('a');
                    d.href = this.buildUrl('');
                    d.target = '_blank';
                    this.resetStyle(d, {
                        width: 41,
                        height: 13,
                        background: 'url(' + this.buildUrl('img/text.png') + ') no-repeat',
                    });
                    e.appendChild(d);
                    this.ids[a].hiddenW.appendChild(e);
                    e = k.createElement('div');
                    this.resetStyle(e, {
                        width: 0,
                        height: 0,
                        position: 'absolute',
                        zIndex: 9999,
                        display: 'none',
                        border: '5px solid transparent',
                        borderBottomColor: '#666',
                    });
                    this.ids[a].hiddenA = e;
                    b.appendChild(this.ids[a].hiddenA);
                    this.ids[a].showed = !1;
                    this.add(k.body, 'click', function(a, b) {
                        b.target || (b.target = b.srcElement);
                        for (var c = 0; c < uLogin.ids.length; c++)
                            b.target != uLogin.ids[c].drop &&
                                (uLogin.hide(uLogin.ids[c].hiddenW),
                                uLogin.hide(uLogin.ids[c].hiddenA));
                    });
                    this.ids[a].hiddenW &&
                        this.ids[a].hiddenA &&
                        (this.add(this.ids[a].hiddenW, 'mouseout', function() {
                            uLogin.dropdownDelayed(a, 0);
                        }),
                        this.add(this.ids[a].hiddenA, 'mouseout', function() {
                            uLogin.dropdownDelayed(a, 0);
                        }),
                        this.add(this.ids[a].hiddenW, 'mouseover', function() {
                            uLogin.clearDropTimer(a);
                        }),
                        this.add(this.ids[a].hiddenA, 'mouseover', function() {
                            uLogin.clearDropTimer(a);
                        }));
                }
            },
            showDrop: function(a, b) {
                if (this.ids[a].hiddenW || this.ids[a].hiddenA)
                    if (this.ids[a].showed || 0 == b)
                        this.hide(this.ids[a].hiddenW),
                            this.hide(this.ids[a].hiddenA),
                            (this.ids[a].showed = !1);
                    else {
                        this.show(this.ids[a].hiddenA);
                        this.show(this.ids[a].hiddenW);
                        this.ids[a].showed = !0;
                        var c = this.ids[a].drop;
                        if ('body' === this.ids[a].dropdown_container) {
                            var d = this.getOffset(c);
                            var e = d.left;
                            d = d.top;
                            this.ids[a].hiddenW.style.left = e - (1 == b ? 100 : 106) + 'px';
                            this.ids[a].hiddenW.style.top = d + (1 == b ? 21 : 37) + 'px';
                            this.ids[a].hiddenA.style.left = e + (1 == b ? 4 : 12) + 'px';
                            this.ids[a].hiddenA.style.top = d + (1 == b ? 17 : 33) + 'px';
                        }
                        e = c.offsetLeft;
                        d = c.offsetTop;
                        e -= c.scrollLeft;
                        d -= c.scrollTop;
                        'body' !== this.ids[a].dropdown_container &&
                            ((this.ids[a].hiddenW.style.left = e - (1 == b ? 100 : 106) + 'px'),
                            (this.ids[a].hiddenW.style.top = d + (1 == b ? 21 : 37) + 'px'));
                        this.ids[a].hiddenA.style.left = e + (1 == b ? 4 : 12) + 'px';
                        this.ids[a].hiddenA.style.top = d + (1 == b ? 12 : 28) + 'px';
                    }
            },
            clearDropTimer: function(a) {
                this.ids[a].dropTimer && h.clearTimeout(this.ids[a].dropTimer);
            },
            dropdown: function(a, b) {
                this.ids[a].mobile || (this.clearDropTimer(a), this.showDrop(a, b));
            },
            dropdownDelayed: function(a, b) {
                this.clearDropTimer(a);
                this.ids[a].dropTimer = r(function() {
                    uLogin.showDrop(a, b);
                }, 600);
            },
            initButtons: function(a) {
                var b = this.get(this.ids[a].id);
                this.ids[a].mobile &&
                    this.add(this.get(this.ids[a].id), 'click', function(b, d) {
                        d.preventDefault ? d.preventDefault() : (d.returnValue = !1);
                        var c = uLogin.buildUrl('version/3.0/html/mobile.html', {
                            id: uLogin.ids[a].id,
                            redirect_uri: uLogin.ids[a].redirect_uri,
                            callback: uLogin.ids[a].callback,
                            fields: uLogin.ids[a].fields,
                            force_fields: uLogin.ids[a].force_fields,
                            popup_css: uLogin.ids[a].popup_css,
                            optional: uLogin.ids[a].optional,
                            protocol: uLogin.ids[a].protocol,
                            host: uLogin.host,
                            lang: uLogin.ids[a].lang,
                            verify: uLogin.ids[a].verify,
                            providers: uLogin.ids[a].providers,
                            hidden: uLogin.ids[a].hidden,
                            icons_32: uLogin.ids[a].icons_32,
                            altway: uLogin.ids[a].altway ? 1 : null,
                            page: uLogin.page,
                            m: uLogin.ids[a].m ? 1 : 0,
                            icons_16: uLogin.ids[a].icons_16,
                            theme: uLogin.ids[a].theme,
                            client: uLogin.ids[a].client,
                            version: uLogin.version,
                        });
                        uLogin.ids[a].altway
                            ? h.top
                                ? (h.top.location.href = c)
                                : (location.href = c)
                            : uLogin.openWithReceiver(c, a);
                        return !1;
                    });
                'window' === this.ids[a].type
                    ? this._proceedChildren(b, this._(this._initButton), a)
                    : ((this.ids[a].providers = ''),
                      this._proceedChildren(b, this._(this._initButton), a),
                      (this.ids[a].providers = this.ids[a].providers.slice(
                          0,
                          this.ids[a].providers.length - 1,
                      )));
                this._changeState(a, this.states[0]);
            },
            _: function(a) {
                return function() {
                    a.apply(uLogin, arguments);
                };
            },
            _proceedChildren: function(a, b, c) {
                a = a.childNodes;
                var d, e;
                for (e = 0; e < a.length; e++) {
                    var f = a[e];
                    f.getAttribute &&
                        (b(f, c),
                        (d =
                            f.getAttribute('data-uloginbutton') ||
                            f.getAttribute('x-ulogin-button')) &&
                            -1 < this.inArray(d, this.providerCodes) &&
                            !new RegExp(d + '(,|$)', 'i').test(this.ids[c].providers) &&
                            (this.ids[c].providers += d + ','));
                    this._proceedChildren(f, b, c);
                }
            },
            _initButton: function(a, b) {
                var c = a.getAttribute('data-uloginbutton') || a.getAttribute('x-ulogin-button');
                if (c)
                    if (-1 < this.inArray(c, this.providerCodes))
                        this.add(a, 'mouseover', function(a) {
                            if (/disabled/.test(a.className)) return !1;
                            uLogin.setOpacity(a, parseFloat(uLogin.ids[b].opacity));
                            if (
                                +new Date() < +new Date('2017/04/02 03:00:00') &&
                                uLogin.ids[b].hovered_sprite &&
                                !a.getAttribute('data-original-background')
                            ) {
                                var c = a.offsetHeight * uLogin.randFromTo(0, 24),
                                    d =
                                        'ru' === uLogin.ids[b].lang
                                            ? '1 \u0430\u043f\u0440\u0435\u043b\u044f - \u0434\u0435\u043d\u044c \u0441\u043c\u0435\u0445\u0430! \u0423\u043b\u044b\u0431\u0430\u0439\u0442\u0435\u0441\u044c )'
                                            : "April Fools' Day is here!";
                                a.setAttribute('data-original-background', a.style.background);
                                a.style.background =
                                    'url(' +
                                    uLogin.ids[b].hovered_sprite +
                                    ') 0px -' +
                                    c +
                                    'px no-repeat';
                                a.setAttribute('data-original-title', a.getAttribute('title'));
                                a.setAttribute('title', d);
                            }
                        }),
                            this.add(a, 'mouseout', function(a) {
                                if (/disabled/.test(a.className)) return !1;
                                uLogin.setOpacity(a);
                                a.getAttribute('data-original-background') &&
                                    ((a.style.background = a.getAttribute(
                                        'data-original-background',
                                    )),
                                    a.removeAttribute('data-original-background'));
                                a.getAttribute('data-original-title') &&
                                    (a.setAttribute('title', a.getAttribute('data-original-title')),
                                    a.removeAttribute('data-original-title'));
                            }),
                            this.ids[b].mobile ||
                                this.add(a, 'click', function(a) {
                                    if (/disabled/.test(a.className)) return !1;
                                    var c =
                                        a.getAttribute('data-uloginbutton') ||
                                        a.getAttribute('x-ulogin-button');
                                    if (a.getAttribute('data-disabled-click')) return !1;
                                    a.setAttribute('data-disabled-click', '1');
                                    setTimeout(function() {
                                        a.setAttribute('data-disabled-click', '');
                                    }, 1e3);
                                    uLogin.startAuth(c, '', b);
                                });
                    else if (
                        'window' === c &&
                        (this.ids[b].mobile ||
                            this.add(a, this.ids[b].event, function(a, c) {
                                c.preventDefault ? c.preventDefault() : (c.returnValue = !1);
                                if (/disabled/.test(a.className)) return !1;
                                var d = uLogin.buildUrl(
                                    uLogin.ids[b].mobile
                                        ? 'version/3.0/html/mobile.html'
                                        : 'version/3.0/html/window.html',
                                    {
                                        id: b,
                                        redirect_uri: uLogin.ids[b].redirect_uri,
                                        callback: uLogin.ids[b].callback,
                                        fields: uLogin.ids[b].fields,
                                        force_fields: uLogin.ids[b].force_fields,
                                        popup_css: uLogin.ids[b].popup_css,
                                        optional: uLogin.ids[b].optional,
                                        protocol: uLogin.protocol,
                                        host: uLogin.host,
                                        lang: uLogin.ids[b].lang,
                                        verify: uLogin.ids[b].verify,
                                        sort: uLogin.ids[b].sort,
                                        othprov: uLogin.ids[b].hidden,
                                        providers: uLogin.ids[b].providers,
                                        altway: uLogin.ids[b].altway ? 1 : null,
                                        m: uLogin.ids[b].m ? 1 : 0,
                                        icons_32: uLogin.ids[b].icons_32,
                                        icons_16: uLogin.ids[b].icons_16,
                                        theme: uLogin.ids[b].theme,
                                        client: uLogin.ids[b].client,
                                        page: uLogin.page,
                                        version: uLogin.version,
                                    },
                                );
                                uLogin.loadWindow(d, b);
                                return !1;
                            }),
                        a.getAttribute('data-ulogin-default'))
                    ) {
                        var d = this.buildUrl(
                                'img/' +
                                    ('ru' == this.ids[b].lang ? '' : this.ids[b].lang + '/') +
                                    'button.png?version=img.3.0.1',
                            ),
                            e = this.buildUrl(
                                'img/' +
                                    ('ru' == this.ids[b].lang ? '' : this.ids[b].lang + '/') +
                                    'button_.png',
                            );
                        a.src = d;
                        this.resetStyle(a, { cursor: 'pointer' });
                        this.add(a, 'mouseover', function(a) {
                            if (/disabled/.test(a.parentNode.className)) return !1;
                            a.src != e && (a.src = e);
                        });
                        this.add(a, 'mouseout', function(a) {
                            if (/disabled/.test(a.parentNode.className)) return !1;
                            a.src != d && (a.src = d);
                        });
                    }
            },
            randFromTo: function(a, b) {
                return Math.floor(Math.random() * b) + a;
            },
            sendWeight: function(a) {
                this.initSocket(
                    this.buildUrl('version/3.0/html/weight_set.html', {
                        provider: a,
                        r: parseInt(1e5 * Math.random()),
                    }),
                    this.getRC(),
                    { background: 'transparent' },
                );
            },
            setWeights: function(a) {
                this.supportStorage && (localStorage.providers_weight = a);
            },
            getWeights: function() {
                try {
                    return JSON.parse(localStorage.providers_weight);
                } catch (a) {
                    return {};
                }
            },
            relProviders: function(a, b, c) {
                a = a.split(',');
                b = b.split(',');
                if (this.supportStorage) {
                    var d = this.getWeights(),
                        e;
                    for (e in d) {
                        d = this.inArray(e, a);
                        var f = this.inArray(e, b);
                        -1 !== d
                            ? (a.splice(d, 1), a.splice(0, 0, e))
                            : -1 !== f &&
                              (a.splice(0, 0, e),
                              b.splice(f, 1),
                              b.splice(0, 0, a[a.length - 1]),
                              a.splice(a.length - 1, 1));
                    }
                }
                return 1 === c ? a : b;
            },
            startAuth: function(a, b, c) {
                var d = {
                    name: a,
                    window: 1,
                    lang: this.ids[c].lang,
                    fields: this.ids[c].fields,
                    force_fields: this.ids[c].force_fields,
                    popup_css: this.ids[c].popup_css,
                    host: this.host,
                    optional: this.ids[c].optional,
                    redirect_uri: this.ids[c].redirect_uri || location.href,
                    verify: this.ids[c].verify,
                    callback: this.ids[c].callback,
                    screen: screen.width + 'x' + screen.height,
                    url: b,
                    providers: this.ids[c].providers,
                    hidden: this.ids[c].hidden,
                    m: this.ids[c].m ? 1 : 0,
                    page: this.page,
                    icons_32: this.ids[c].icons_32,
                    icons_16: this.ids[c].icons_16,
                    theme: this.ids[c].theme,
                    client: this.ids[c].client,
                    version: this.version,
                };
                this.ids[c].altway && (d.altway = 1);
                a =
                    b || ('webmoney' != a && 'livejournal' != a && 'openid' != a)
                        ? this.buildUrl('auth.php', d)
                        : this.buildUrl('url.php', d);
                this._changeState(c, this.states[1]);
                this.ids[c].altway
                    ? h.top
                        ? (h.top.location.href = a)
                        : (location.href = a)
                    : this.openWithReceiver(a, c);
            },
            openWithReceiver: function(a, b) {
                !b && (b = 0);
                var c = 660,
                    d = 420;
                /name=vkontakte/.test(a)
                    ? (d = 380)
                    : /name=facebook/.test(a)
                    ? ((c = 560), (d = 350))
                    : /name=google/.test(a)
                    ? ((c = 800), (d = 630))
                    : /name=yandex/.test(a)
                    ? ((c = 990), (d = 530))
                    : /name=lastfm/.test(a) && ((c = 1368), (d = 894));
                this.openFromSocket
                    ? this.authSocket.postMessage(
                          'window.open::' +
                              a +
                              '::' +
                              c +
                              '::' +
                              d +
                              '::' +
                              (screen.width - c) / 2 +
                              '::' +
                              (screen.height - d) / 2,
                      )
                    : (this.initSocket(
                          this.buildUrl('/version/3.0/html/buttons_receiver.html', {
                              four: encodeURIComponent(a),
                              r: parseInt(1e5 * Math.random()),
                          }),
                          this.getRC(),
                          { background: 'transparent' },
                          b,
                      ),
                      uLogin.getRC().getElementsByTagName('iframe'),
                      window.open(
                          a,
                          'uLogin_window',
                          'width=' +
                              c +
                              ',height=' +
                              d +
                              ',left=' +
                              (screen.width - c) / 2 +
                              ',top=' +
                              (screen.height - d) / 2,
                      ));
            },
            checkWindow: function(a, b) {},
            checkCurrentWidgets: function() {
                for (var a = 0; this.ids[a]; ) this.checkWidget(this.ids[a++].id);
            },
            checkWidget: function(a, b) {
                var c = this.get(a);
                if (c)
                    if (this.inited(a)) {
                        var d = this.getWidgetNumber(a),
                            e = this.ids[d].type;
                        if (('small' === e || 'panel' === e) && !c.childNodes.length)
                            return (
                                (c = this.ids[d].id),
                                (uLogin.ids[d].id = !1),
                                uLogin.initWidget(c),
                                !0
                            );
                        c.getAttribute('data-ulogin-inited') ||
                            ((c = this.ids[d].id), (uLogin.ids[d].id = !1), uLogin.initWidget(c));
                    } else this.addWidget(this.get(a), b);
                else this.ids[this.getWidgetNumber(a)].id = !1;
            },
            buildUrl: function(a, b, c) {
                b || (b = {});
                c || (c = !1);
                a = a ? 'https://' + this.uLoginHost + '/' + a : '';
                var d = '',
                    e;
                for (e in b) {
                    var f = b[e];
                    null !== f &&
                        (!c && (/\?/.test(f) || /\//.test(f) || /:/.test(f)) && (f = ''),
                        (d += e + '=' + f + '&'));
                }
                0 < d.length &&
                    ((d = d.substring(0, d.length - 1)), (a = a + (/\?/.test(a) ? '&' : '?') + d));
                return a;
            },
            getWidget: function(a, b) {
                if (this.inited(b)) return !1;
                if (this.widgetSettings[a])
                    return this.setProp(b, uLogin.ids.length, this.widgetSettings[a]), !1;
                if (this.waitGetWidget[a] && -1 !== this.inArray(b, this.waitGetWidget[a]))
                    return !1;
                this.waitGetWidget[a] || (this.waitGetWidget[a] = []);
                this.waitGetWidget[a].push(b);
                if (this.widgetSettings[a])
                    this.setProp(b, this.ids.length, this.widgetSettings[a]);
                else {
                    var c = this.getRC(),
                        d = k.createElement('script');
                    d.async = !0;
                    d.src = this.buildUrl('getwidget', { widgetid: a });
                    c.appendChild(d);
                }
            },
            forElements: function(a, b) {
                if (a && a.length) for (var c in a) b(a[c]);
            },
            setWidget: function(a, b, c) {
                !c && b && (c = b);
                if ('not_found' === a)
                    return (
                        this.forElements(this.waitGetWidget[a], function(a) {
                            if ('string' !== typeof a) return !1;
                            k.getElementById(a).setAttribute('data-uloginid', '');
                        }),
                        !1
                    );
                c &&
                    !uLogin.widgetSettings[a] &&
                    'undefined' !== typeof c.display &&
                    (this.forElements(this.waitGetWidget[a], function(a) {
                        if ('string' !== typeof a) return !1;
                        var b = k.getElementById(a);
                        if (!b)
                            return (
                                console.error(
                                    'uLogin ERROR: not found element with id "' + a + '"',
                                ),
                                !1
                            );
                        b = uLogin.parse(b.getAttribute('data-ulogin'));
                        for (var d in b) c[d] = b[d];
                        uLogin.setProp(a, uLogin.ids.length, c);
                    }),
                    (this.widgetSettings[a] = c));
            },
            customInit: function() {
                for (var a = 0; a < arguments.length; a++)
                    if ('string' === typeof arguments[a]) {
                        var b = !1;
                        if (!uLogin.get(arguments[a]) || !arguments[a])
                            return (
                                console.error(
                                    'uLogin ERROR (customInit): Element with ID="' +
                                        arguments[a] +
                                        '" not found',
                                ),
                                !1
                            );
                        1 < arguments.length &&
                            'object' === typeof arguments[arguments.length - 1] &&
                            (b = arguments[arguments.length - 1]);
                        uLogin.checkWidget(arguments[a], b);
                    }
            },
            getOffsetSum: function(a) {
                for (var b = 0, c = 0; a; )
                    (b += parseFloat(a.offsetTop)),
                        (c += parseFloat(a.offsetLeft)),
                        (a = a.offsetParent);
                return { top: Math.round(b), left: Math.round(c) };
            },
            getOffsetRect: function(a) {
                a = a.getBoundingClientRect();
                var b = document.body,
                    c = document.documentElement;
                return {
                    top: Math.round(
                        a.top +
                            (window.pageYOffset || c.scrollTop || b.scrollTop) -
                            (c.clientTop || b.clientTop || 0),
                    ),
                    left: Math.round(
                        a.left +
                            (window.pageXOffset || c.scrollLeft || b.scrollLeft) -
                            (c.clientLeft || b.clientLeft || 0),
                    ),
                };
            },
            getOffset: function(a) {
                return a.getBoundingClientRect ? this.getOffsetRect(a) : this.getOffsetSum(a);
            },
            checkAsyncWidgets: function() {
                var a = this.get('ulogin') || this.get('uLogin');
                a && a.id && this.addWidget(a);
            },
            setStateListener: function(a, b, c) {
                this.listeners[a] || (this.listeners[a] = {});
                this.listeners[a][b] || (this.listeners[a][b] = []);
                return this.listeners[a][b].push(c) - 1;
            },
            removeStateListener: function(a, b, c) {
                return this.listeners[a] && this.listeners[a][c]
                    ? this.listeners[a][c].splice(b, 1)
                    : !1;
            },
            _changeState: function(a, b, c) {
                try {
                    this.ids[a].state = b;
                    for (var d = 0; this.listeners[this.ids[a].id][b][d]; )
                        this.listeners[this.ids[a].id][b][d++].apply(
                            h,
                            'object' === typeof c ? c : [],
                        );
                } catch (e) {}
            },
            extend: function(a, b) {
                for (var c in b) a[c] = b[c];
                return a;
            },
            arrayIntersectKey: function(a, b) {
                var c = [],
                    d;
                for (d in a) d in b && c.push(d);
                return c;
            },
        }),
        -1 == uLogin.inArray(uLogin.lang, uLogin.langs) && (uLogin.lang = uLogin.langs[0]),
        uLogin.init('undefined' != typeof uLogin_query ? uLogin_query : ''));
    h.receiver = function(a, b, c) {
        uLogin._changeState(0, 'receive', [a]);
        !c && b && (c = b);

        // h[c](a);
    };
    h.redirect = function(a, b) {
        return false;
        // var c = k.createElement("form");
        // c.action = b;
        // c.method = "get";
        // c.target = "_top";
        // c.style.display = "none";
        // var d = k.createElement("input");
        // d.type = "hidden";
        // d.name = "token";
        // d.value = a;
        // c.appendChild(d);
        // k.body.appendChild(c);
        // c.submit();
    };
})(window, document, navigator, setTimeout);
