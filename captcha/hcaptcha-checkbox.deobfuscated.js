!function () {
    'use strict';
    var t = setTimeout;
    r.prototype['catch'] = function (e) {
        var var_8 = this.then(null, e);
        return var_8;
    };
    r.prototype.then = function (e, t) {
        var r = new this.constructor(n);
        var arg_16 = new c(e, t, r);
        i(this, arg_16);
        return r;
    };
    r.prototype['finally'] = e;
    r.all = function (e) {
        var var_9 = new r(arg_17);
        return var_9;
        function arg_17(t, n) {
            if (!e || 'undefined' == typeof e.length) {
                throw new TypeError('Promise.all accepts an array');
            }
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) {
                var arg_18 = [];
                var var_10 = t(arg_18);
                return var_10;
            }
            var i = r.length;
            var a = 0;;
            for (; a < r.length; a++) {
                o(a, r[a]);
            }
            function o(e, a) {
                try {
                    if (a && ('object' == typeof a || 'function' == typeof a)) {
                        var s = a.then;
                        if ('function' == typeof s) {
                            var var_11 = void s.call(a, arg_19, n);
                            return var_11;
                            function arg_19(t) {
                                o(e, t);
                            }
                        }
                    }
                    r[e] = a;
                    if (0 == --i) {
                        t(r);
                    }
                } catch (c) {
                    n(c);
                }
            }
        }
    };
    r.resolve = function (e) {
        var var_12 = null;
        if (e && 'object' == typeof e && e.constructor === r) {
            var_12 = e;
        } else {
            var_12 = new r(arg_20);
            function arg_20(t) {
                t(e);
            }
        }
        return var_12;
    };
    r.reject = function (e) {
        var var_13 = new r(arg_21);
        return var_13;
        function arg_21(t, n) {
            n(e);
        }
    };
    r.race = function (e) {
        var var_14 = new r(arg_22);
        return var_14;
        function arg_22(t, n) {
            var r = 0, i = e.length;;
            for (; r < i; r++) {
                e[r].then(t, n);
            }
        }
    };
    var var_0 = 'function' == typeof setImmediate && function (e) {
        setImmediate(e);
    } || function (e) {
        t(e, 0);
    };
    r._immediateFn = var_0;
    r._unhandledRejectionFn = function (e) {
        if ('undefined' != typeof console && console) {
            console.warn('Possible Unhandled Promise Rejection:', e);
        }
    };
    var l;
    var h = function () {
        if ('undefined' != typeof self) {
            return self;
        }
        if ('undefined' != typeof window) {
            return window;
        }
        if ('undefined' != typeof global) {
            return global;
        }
        throw new Error('unable to locate global object');
    }();
    if ('Promise' in h) {
        if (!h.Promise.prototype['finally']) {
            h.Promise.prototype['finally'] = e;
        }
    } else {
        h.Promise = r;
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (e) {
            return var_15;
            function var_15(t, n) {
                if (null === this || this === undefined) {
                    throw TypeError('Array.prototype.indexOf called on null or undefined');
                }
                var r = e(this);
                var i = r.length >>> 0;
                var arg_23 = 0 | n;
                var o = Math.min(arg_23, i);
                if (o < 0) {
                    var arg_24 = i + o;
                    o = Math.max(0, arg_24);
                } else {
                    if (o >= i) {
                        var var_17 = -1;
                        return var_17;
                    }
                }
                if (void 0 === t) {
                    for (; o !== i; ++o) {
                        if (void 0 === r[o] && o in r) {
                            return o;
                        }
                    }
                } else {
                    if (t != t) {
                        for (; o !== i; ++o) {
                            if (r[o] != r[o]) {
                                return o;
                            }
                        }
                    } else {
                        for (; o !== i; ++o) {
                            if (r[o] === t) {
                                return o;
                            }
                        }
                    }
                }
                var var_16 = -1;
                return var_16;
            }
        }(Object);
    }
    if (!Array.isArray) {
        Array.isArray = function (e) {
            var var_18 = '[object Array]' === Object.prototype.toString.call(e);
            return var_18;
        };
    }
    if (!document.getElementsByClassName) {
        window.Element.prototype.getElementsByClassName = document.constructor.prototype.getElementsByClassName = function (e) {
            if (document.querySelectorAll) {
                var arg_25 = '.' + e;
                var var_19 = document.querySelectorAll(arg_25);
                return var_19;
            }
            var t = document.getElementsByTagName('*'), n = new RegExp('(^|\\s)' + e + '(\\s|$)'), r = [], i = 0;;
            for (; i < t.length; i++) {
                if (n.test(t[i].className)) {
                    r.push(t[i]);
                }
            }
            return r;
        };
    }
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (e, t) {
            var arg_26 = null;
            if (!t || t < 0) {
                arg_26 = 0;
            } else {
                arg_26 = +t;
            }
            var var_20 = this.substr(arg_26, e.length) === e;
            return var_20;
        };
    }
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (e, t) {
            if (t === undefined || t > this.length) {
                t = this.length;
            }
            var arg_27 = t - e.length;
            var var_21 = this.substring(arg_27, t) === e;
            return var_21;
        };
    }
    try {
        if (Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, 'textContent') && !Object.getOwnPropertyDescriptor(Element.prototype, 'textContent').get) {
            var d = Object.getOwnPropertyDescriptor(Element.prototype, 'innerText');
            var arg_28 = {
                get: function () {
                    var var_22 = d.get.call(this);
                    return var_22;
                },
                set: function (e) {
                    d.set.call(this, e);
                }
            };
            Object.defineProperty(Element.prototype, 'textContent', arg_28);
        }
    } catch (ut) {
    }
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (e) {
            if ('function' != typeof this) {
                throw new TypeError('Function.prototype.bind: Item Can Not Be Bound.');
            }
            var t = Array.prototype.slice.call(arguments, 1);
            var n = this;
            if (this.prototype) {
                r.prototype = this.prototype;
            }
            i.prototype = new r();
            return i;
            function r() {
            }
            function i() {
                var arg_29 = null;
                if (this instanceof r) {
                    arg_29 = this;
                } else {
                    arg_29 = e;
                }
                var arg_31 = Array.prototype.slice.call(arguments);
                var arg_30 = t.concat(arg_31);
                var var_23 = n.apply(arg_29, arg_30);
                return var_23;
            }
        };
    }
    if ('function' != typeof Object.create) {
        Object.create = function (e, t) {
            n.prototype = e;
            if ('object' == typeof t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (n[r] = t[r]);
            }
            var var_24 = new n();
            return var_24;
            function n() {
            }
        };
    }
    if (!Date.now) {
        Date.now = function () {
            var var_25 = new Date().getTime();
            return var_25;
        };
    }
    if (!window.console) {
        window.console = {};
    }
    var f, p, m = [
            'error',
            'info',
            'log',
            'show',
            'table',
            'trace',
            'warn'
        ], v = function (e) {
        }, g = m.length;;
    for (; --g > -1;) {
        l = m[g];
        if (!window.console[l]) {
            window.console[l] = v;
        }
    }
    if (window.atob) {
        try {
            window.atob(' ');
        } catch (lt) {
            f = window.atob;
            (p = function (e) {
                var arg_32 = String(e).replace(/[\t\n\f\r ]+/g, '');
                var var_26 = f(arg_32);
                return var_26;
            }).original = f;
            window.atob = p;
        }
    } else {
        var y = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var b = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
        window.atob = function (e) {
            e = String(e).replace(/[\t\n\f\r ]+/g, '');
            if (!b.test(e)) {
                throw new TypeError('Failed to execute \'atob\' on \'Window\': The string to be decoded is not correctly encoded.');
            }
            var t;
            var n;
            var r;
            var arg_33 = 2 - (3 & e.length);
            e += '=='.slice(arg_33);
            var i = '', o = 0;;
            for (; o < e.length;) {
                var arg_34 = e.charAt(o++);
                var arg_35 = e.charAt(o++);
                t = y.indexOf(arg_34) << 18 | y.indexOf(arg_35) << 12 | (n = y.indexOf(e.charAt(o++))) << 6 | (r = y.indexOf(e.charAt(o++)));
                if (64 === n) {
                    var arg_36 = t >> 16 & 255;
                    i += String.fromCharCode(arg_36);
                } else {
                    if (64 === r) {
                        var arg_37 = t >> 16 & 255;
                        var arg_38 = t >> 8 & 255;
                        i += String.fromCharCode(arg_37, arg_38);
                    } else {
                        var arg_39 = t >> 16 & 255;
                        var arg_40 = t >> 8 & 255;
                        var arg_41 = 255 & t;
                        i += String.fromCharCode(arg_39, arg_40, arg_41);
                    }
                }
            }
            return i;
        };
    }
    if (!Event.prototype.preventDefault) {
        Event.prototype.preventDefault = function () {
            this.returnValue = false;
        };
    }
    if (!Event.prototype.stopPropagation) {
        Event.prototype.stopPropagation = function () {
            this.cancelBubble = true;
        };
    }
    (function (e) {
        if ('object' == typeof exports && 'undefined' != typeof module) {
            module.exports = e();
        } else {
            if ('function' == typeof define && define.amd) {
                var arg_198 = [];
                define(arg_198, e);
            } else {
                ('undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this).Raven = e();
            }
        }
    }(arg_0));
    var k = {
        queue: w,
        depth: function ht(e, t, n) {
            if ('object' == typeof e && e[t] && e[t].length > 0) {
                var r = e[t].length;;
                for (; --r > -1;) {
                    ht(e[t][r], t, n);
                }
            }
            if (e !== undefined) {
                n(e);
            }
        },
        breathe: function (e, t, n) {
            var r = new w();
            var i = null;
            r.add(e);
            i = r.remove();
            for (; i;) {
                var o = 0;;
                for (; o < i[t].length; o++) {
                    r.add(i[t][o]);
                }
                n(i);
                i = r.remove();
            }
        }
    };
    x.prototype.initComponent = function (e, t) {
        var n = new e(t);
        n._parent = this;
        this.children.push(n);
        return n;
    };
    x.prototype.destroy = function () {
        var e = this;
        try {
            k.depth(this, 'children', arg_199);
            function arg_199(t) {
                if (e !== t) {
                    var n = e.children.length;;
                    for (; --n > -1;) {
                        if (e.children[n] === t) {
                            e.children.splice(n, 1);
                        }
                    }
                }
                if (t._destroy) {
                    t._destroy();
                }
                t = null;
            }
        } catch (lt) {
            throw new Error('Trouble destroying nodes: ' + lt);
        }
        return null;
    };
    x.prototype._destroy = function () {
        if (this.onDestroy) {
            this.onDestroy();
        }
        var e = this._events.length || 0;;
        for (; --e > -1;) {
            this._events.splice(e, 1);
        }
        this.children = null;
        this._destroy = null;
        this._events = null;
        this.destroy = null;
        this.emit = null;
        this.on = null;
        this.off = null;
        this.initComponent = null;
    };
    x.prototype.on = function (e, t) {
        var n = this._events.length, r = false;;
        for (; --n > -1 && false === r;) {
            if (this._events[n].event === e) {
                r = this._events[n];
            }
        }
        if (false === r) {
            r = {
                event: e,
                listeners: []
            };
            this._events.push(r);
        }
        r.listeners.push(t);
    };
    x.prototype.off = function (e, t) {
        var n = this._events.length;;
        for (; --n > -1;) {
            if (this._events[n].event === e) {
                var r = this._events[n].listeners.length;;
                for (; --r > -1;) {
                    if (this._events[n].listeners[r] === t) {
                        this._events[n].listeners[r].splice(r, 1);
                    }
                }
                if (0 === this._events[n].listeners.length) {
                    this._events[n].splice(n, 1);
                }
            }
        }
    };
    x.prototype.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1), n = this._events.length;;
        for (; --n > -1;) {
            if (this._events[n].event === e) {
                var r = this._events[n].listeners.length;;
                for (; --r > -1;) {
                    this._events[n].listeners[r].apply(this, t);
                }
            }
        }
    };
    var E = [
        {
            family: 'UC Browser',
            patterns: ['(UC? ?Browser|UCWEB|U3)[ /]?(\\d+)\\.(\\d+)\\.(\\d+)']
        },
        {
            family: 'Opera',
            name_replace: 'Opera Mobile',
            patterns: [
                '(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)',
                '(Opera)/(\\d+)\\.(\\d+).+Opera Mobi',
                'Opera Mobi.+(Opera)(?:/|\\s+)(\\d+)\\.(\\d+)',
                'Opera Mobi',
                '(?:Mobile Safari).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)'
            ]
        },
        {
            family: 'Opera',
            name_replace: 'Opera Mini',
            patterns: [
                '(Opera Mini)(?:/att|)/?(\\d+|)(?:\\.(\\d+)|)(?:\\.(\\d+)|)',
                '(OPiOS)/(\\d+).(\\d+).(\\d+)'
            ]
        },
        {
            family: 'Opera',
            name_replace: 'Opera Neon',
            patterns: ['Chrome/.+( MMS)/(\\d+).(\\d+).(\\d+)']
        },
        {
            name_replace: 'Opera',
            patterns: [
                '(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)',
                '(?:Chrome).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)'
            ]
        },
        {
            family: 'Firefox',
            name_replace: 'Firefox Mobile',
            patterns: [
                '(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)',
                '(Fennec)/(\\d+)\\.(\\d+)(pre)',
                '(Fennec)/(\\d+)\\.(\\d+)',
                '(?:Mobile|Tablet);.*(Firefox)/(\\d+)\\.(\\d+)',
                '(FxiOS)/(\\d+)\\.(\\d+)(\\.(\\d+)|)(\\.(\\d+)|)'
            ]
        },
        {
            name_replace: 'Coc Coc',
            patterns: ['(coc_coc_browser)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)']
        },
        {
            family: 'QQ',
            name_replace: 'QQ Mini',
            patterns: ['(MQQBrowser/Mini)(?:(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)']
        },
        {
            family: 'QQ',
            name_replace: 'QQ Mobile',
            patterns: ['(MQQBrowser)(?:/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)']
        },
        {
            name_replace: 'QQ',
            patterns: ['(QQBrowser)(?:/(\\d+)(?:\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)|)']
        },
        {
            family: 'Edge',
            name: 'Edge Mobile',
            patterns: [
                'Windows Phone .*(Edge)/(\\d+)\\.(\\d+)',
                '(EdgiOS|EdgA)/(\\d+)\\.(\\d+).(\\d+).(\\d+)'
            ]
        },
        {
            name_replace: 'Edge',
            patterns: ['(Edge|Edg)/(\\d+)(?:\\.(\\d+)|)']
        },
        { patterns: ['(Puffin)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)'] },
        {
            family: 'Chrome',
            name_replace: 'Chrome Mobile',
            patterns: [
                'Version/.+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)',
                '; wv\\).+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)',
                '(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)',
                '(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)',
                '(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile(?:[ /]|$)',
                ' Mobile .*(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)'
            ]
        },
        {
            family: 'Yandex',
            name_replace: 'Yandex Mobile',
            patterns: ['(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+).*Mobile']
        },
        {
            name_replace: 'Yandex',
            patterns: ['(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)']
        },
        {
            patterns: [
                '(Vivaldi)/(\\d+)\\.(\\d+)',
                '(Vivaldi)/(\\d+)\\.(\\d+)\\.(\\d+)'
            ]
        },
        {
            name_replace: 'Brave',
            patterns: ['(brave)/(\\d+)\\.(\\d+)\\.(\\d+) Chrome']
        },
        {
            family: 'Chrome',
            patterns: ['(Chromium|Chrome)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)']
        },
        {
            name_replace: 'Internet Explorer Mobile',
            patterns: ['(IEMobile)[ /](\\d+)\\.(\\d+)']
        },
        {
            family: 'Safari',
            name_replace: 'Safari Mobile',
            patterns: [
                '(iPod|iPhone|iPad).+Version/(d+).(d+)(?:.(d+)|).*[ +]Safari',
                '(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).* AppleNews\\/\\d+\\.\\d+\\.\\d+?',
                '(iPod|iPhone|iPad).+Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)',
                '(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile.*[ +]Safari',
                '(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile',
                '(iPod|iPod touch|iPhone|iPad).* Safari',
                '(iPod|iPod touch|iPhone|iPad)'
            ]
        },
        {
            name_replace: 'Safari',
            patterns: ['(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|).*Safari/']
        },
        {
            name_replace: 'Internet Explorer',
            patterns: ['(Trident)/(7|8).(0)'],
            major_replace: '11'
        },
        {
            name_replace: 'Internet Explorer',
            patterns: ['(Trident)/(6)\\.(0)'],
            major_replace: '10'
        },
        {
            name_replace: 'Internet Explorer',
            patterns: ['(Trident)/(5)\\.(0)'],
            major_replace: '9'
        },
        {
            name_replace: 'Internet Explorer',
            patterns: ['(Trident)/(4)\\.(0)'],
            major_replace: '8'
        },
        {
            family: 'Firefox',
            patterns: [
                '(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)',
                '(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*|)'
            ]
        }
    ];
    var _ = [
        {
            family: 'Windows',
            name_replace: 'Windows Phone',
            patterns: [
                '(Windows Phone) (?:OS[ /])?(\\d+)\\.(\\d+)',
                '^UCWEB.*; (wds) (\\d+)\\.(d+)(?:\\.(\\d+)|);',
                '^UCWEB.*; (wds) (\\d+)\\.(\\d+)(?:\\.(\\d+)|);'
            ]
        },
        {
            family: 'Windows',
            name_replace: 'Windows Mobile',
            patterns: ['(Windows ?Mobile)']
        },
        {
            name_replace: 'Android',
            patterns: [
                '(Android)[ \\-/](\\d+)(?:\\.(\\d+)|)(?:[.\\-]([a-z0-9]+)|)',
                '(Android) (d+);',
                '^UCWEB.*; (Adr) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+)|);',
                '^(JUC).*; ?U; ?(?:Android|)(\\d+)\\.(\\d+)(?:[\\.\\-]([a-z0-9]+)|)',
                '(android)\\s(?:mobile\\/)(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)',
                '(Silk-Accelerated=[a-z]{4,5})',
                'Puffin/[\\d\\.]+AT',
                'Puffin/[\\d\\.]+AP'
            ]
        },
        {
            name_replace: 'Chrome OS',
            patterns: [
                '(x86_64|aarch64)\\ (\\d+)\\.(\\d+)\\.(\\d+).*Chrome.*(?:CitrixChromeApp)$',
                '(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+)|)'
            ]
        },
        {
            name_replace: 'Windows',
            patterns: [
                '(Windows 10)',
                '(Windows NT 6\\.4)',
                '(Windows NT 10\\.0)'
            ],
            major_replace: '10'
        },
        {
            name_replace: 'Windows',
            patterns: [
                '(Windows NT 6\\.3; ARM;)',
                '(Windows NT 6.3)'
            ],
            major_replace: '8',
            minor_replace: '1'
        },
        {
            name_replace: 'Windows',
            patterns: ['(Windows NT 6\\.2)'],
            major_replace: '8'
        },
        {
            name_replace: 'Windows',
            patterns: ['(Windows NT 6\\.1)'],
            major_replace: '7'
        },
        {
            name_replace: 'Windows',
            patterns: ['(Windows NT 6\\.0)'],
            major_replace: 'Vista'
        },
        {
            name_replace: 'Windows',
            patterns: ['(Windows (?:NT 5\\.2|NT 5\\.1))'],
            major_replace: 'XP'
        },
        {
            name_replace: 'Mac OS X',
            patterns: [
                '((?:Mac[ +]?|; )OS[ +]X)[\\s+/](?:(\\d+)[_.](\\d+)(?:[_.](\\d+)|)|Mach-O)',
                '\\w+\\s+Mac OS X\\s+\\w+\\s+(\\d+).(\\d+).(\\d+).*',
                '(?:PPC|Intel) (Mac OS X)'
            ]
        },
        {
            name_replace: 'Mac OS X',
            patterns: [' (Dar)(win)/(10).(d+).*((?:i386|x86_64))'],
            major_replace: '10',
            minor_replace: '6'
        },
        {
            name_replace: 'Mac OS X',
            patterns: [' (Dar)(win)/(11).(\\d+).*\\((?:i386|x86_64)\\)'],
            major_replace: '10',
            minor_replace: '7'
        },
        {
            name_replace: 'Mac OS X',
            patterns: [' (Dar)(win)/(12).(\\d+).*\\((?:i386|x86_64)\\)'],
            major_replace: '10',
            minor_replace: '8'
        },
        {
            name_replace: 'Mac OS X',
            patterns: [' (Dar)(win)/(13).(\\d+).*\\((?:i386|x86_64)\\)'],
            major_replace: '10',
            minor_replace: '9'
        },
        {
            name_replace: 'iOS',
            patterns: [
                '^UCWEB.*; (iPad|iPh|iPd) OS (\\d+)_(\\d+)(?:_(\\d+)|);',
                '(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(\\d+)[_\\.](\\d+)(?:[_\\.](\\d+)|)',
                '(iPhone|iPad|iPod); Opera',
                '(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)',
                '\\b(iOS[ /]|iOS; |iPhone(?:/| v|[ _]OS[/,]|; | OS : |\\d,\\d/|\\d,\\d; )|iPad/)(\\d{1,2})[_\\.](\\d{1,2})(?:[_\\.](\\d+)|)',
                '\\((iOS);',
                '(iPod|iPhone|iPad)',
                'Puffin/[\\d\\.]+IT',
                'Puffin/[\\d\\.]+IP'
            ]
        },
        {
            family: 'Chrome',
            name_replace: 'Chromecast',
            patterns: [
                '(CrKey -)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)',
                '(CrKey[ +]armv7l)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)',
                '(CrKey)(?:[/](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)'
            ]
        },
        {
            name_replace: 'Debian',
            patterns: ['([Dd]ebian)']
        },
        {
            family: 'Linux',
            name_replace: 'Linux',
            patterns: ['(Linux Mint)(?:/(\\d+)|)']
        },
        {
            family: 'Linux',
            patterns: [
                '(Ubuntu|Kubuntu|Arch Linux|CentOS|Slackware|Gentoo|openSUSE|SUSE|Red Hat|Fedora|PCLinuxOS|Mageia|(?:Free|Open|Net|\\b)BSD)',
                '(Mandriva)(?: Linux|)/(?:[\\d.-]+m[a-z]{2}(\\d+).(\\d)|)',
                '(Linux)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)',
                '\\(linux-gnu\\)'
            ]
        },
        {
            family: 'BlackBerry',
            name_replace: 'BlackBerry OS',
            patterns: [
                '(BB10);.+Version/(\\d+)\\.(\\d+)\\.(\\d+)',
                '(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)',
                '(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)',
                '(Black[Bb]erry)'
            ]
        },
        { patterns: ['(Fedora|Red Hat|PCLinuxOS|Puppy|Ubuntu|Kindle|Bada|Sailfish|Lubuntu|BackTrack|Slackware|(?:Free|Open|Net|\\b)BSD)[/ ](\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)'] }
    ];
    var S = navigator.userAgent;
    var C = {
        getAgent: function () {
            return S;
        },
        getBrowser: function (e) {
            var arg_200 = e || S;
            var var_176 = j(arg_200, E);
            return var_176;
        },
        getOS: function (e) {
            var arg_201 = e || S;
            var var_177 = j(arg_201, _);
            return var_177;
        }
    };
    A.prototype.hasEvent = function (e, t) {
        var var_188 = 'on' + e in (t || document.createElement('div'));
        return var_188;
    };
    A.prototype.getScreenDimensions = function () {
        var e = {};
        for (var t in window.screen)
            e[t] = window.screen[t];
        delete e.orientation;
        return e;
    };
    A.prototype.interrogateNavigator = function () {
        var e = {};
        for (var t in window.navigator)
            try {
                e[t] = window.navigator[t];
            } catch (ut) {
            }
        delete e.plugins;
        delete e.mimeTypes;
        e.plugins = [];
        if (window.navigator.plugins) {
            var n = 0;;
            for (; n < window.navigator.plugins.length; n++) {
                e.plugins[n] = window.navigator.plugins[n].filename;
            }
        }
        return e;
    };
    A.prototype.supportsCanvas = function () {
        var e = document.createElement('canvas');
        var var_189 = !(!e.getContext || !e.getContext('2d'));
        return var_189;
    };
    A.prototype.supportsWebAssembly = function () {
        try {
            if ('object' == typeof WebAssembly && 'function' == typeof WebAssembly.instantiate) {
                var arg_202 = Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0);
                var e = new WebAssembly.Module(arg_202);
                if (e instanceof WebAssembly.Module) {
                    var var_190 = new WebAssembly.Instance(e) instanceof WebAssembly.Instance;
                    return var_190;
                }
            }
        } catch (lt) {
            return false;
        }
    };
    var T = {
        Browser: new A(),
        System: new function () {
            var e;
            var t;
            var n = C.getOS();
            var r = C.getAgent();
            e = !!('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
            t = false;
            if (n) {
                t = [
                    'iOS',
                    'Windows Phone',
                    'Windows Mobile',
                    'Android',
                    'BlackBerry OS'
                ].indexOf(n.name) >= 0;
            }
            var var_191 = e && t;
            this.mobile = var_191;
            this.dpr = function () {
                var var_192 = window.devicePixelRatio || 1;
                return var_192;
            };
            if (this.mobile && n && 'Windows' === n.family && r.indexOf('touch') < 0) {
                this.mobile = false;
            }
            this.os = 'iOS' === n.family ? 'ios' : 'Android' === n.family ? 'android' : 'Mac OS X' === n.family ? 'mac' : 'Windows' === n.family ? 'windows' : 'Linux' === n.family ? 'linux' : n.family.toLowerCase();
            this.version = function () {
                if (!n) {
                    return 'unknown';
                }
                var e = n.major;
                if (n.minor) {
                    e += '.' + n.minor;
                }
                if (n.patch) {
                    e += '.' + n.patch;
                }
                return e;
            }();
        }()
    };
    var I = {
        host: null,
        file: null,
        sitekey: null,
        pingdom: 'safari' === T.Browser.type && 'windows' !== T.System.os && 'mac' !== T.System.os && 'ios' !== T.System.os && 'android' !== T.System.os,
        assetDomain: 'https://newassets.hcaptcha.com',
        assetUrl: 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static',
        width: null,
        height: null,
        mobile: null
    };
    var P = {
        tplinks: 'on',
        language: null,
        reportapi: 'https://accounts.hcaptcha.com',
        endpoint: 'https://hcaptcha.com',
        endpointOverride: null,
        size: 'normal',
        theme: 'light',
        assethost: null,
        imghost: null,
        recaptchacompat: 'true'
    };
    var B = {
        UUID: function (e) {
            var var_193 = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(e) || false;
            return var_193;
        },
        UUIDv4: function (e) {
            var var_194 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e) || false;
            return var_194;
        }
    };
    var N = {
        eventName: function (e) {
            var t = e;
            if ('down' === e || 'up' === e || 'move' === e || 'over' === e || 'out' === e) {
                if (!T.System.mobile || 'down' !== e && 'up' !== e && 'move' !== e) {
                    t = 'mouse' + e;
                } else {
                    if ('down' === e) {
                        t = 'touchstart';
                    } else {
                        if ('up' === e) {
                            t = 'touchend';
                        } else {
                            t = 'touchmove';
                        }
                    }
                }
            } else {
                if ('enter' === e) {
                    t = 'keydown';
                }
            }
            return t;
        },
        actionName: function (e) {
            var t = e;
            if ('touchstart' === t || 'mousedown' === t) {
                t = 'down';
            } else {
                if ('touchmove' === t || 'mousemove' === t) {
                    t = 'move';
                } else {
                    if ('touchend' === t || 'mouseup' === t) {
                        t = 'up';
                    } else {
                        if ('mouseover' === t) {
                            t = 'over';
                        } else {
                            if ('mouseout' === t) {
                                t = 'out';
                            }
                        }
                    }
                }
            }
            return t;
        },
        eventCallback: function (e, t, n) {
            var r = N.actionName(e);
            return var_197;
            function var_197(i) {
                var var_198 = i || window.event;
                i = var_198;
                if ('down' === r || 'move' === r || 'up' === r || 'over' === r || 'out' === r || 'click' === r) {
                    var o = N.eventCoords(i);
                    var a = n.getBoundingClientRect();
                    i.windowX = o.x;
                    i.windowY = o.y;
                    i.elementX = i.windowX - (a.x || a.left);
                    i.elementY = i.windowY - (a.y || a.top);
                }
                var var_199 = i.which || i.keyCode || 0;
                i.keyNum = var_199;
                if (!('enter' === e && 13 !== i.keyNum && 32 !== i.keyNum)) {
                    i.action = r;
                    i.targetElement = n;
                    t(i);
                }
            }
        },
        eventCoords: function (e) {
            var t = {
                x: 0,
                y: 0
            };
            if (e.windowsPointer) {
                return e;
            }
            if (!e) {
                return t;
            }
            if (e.touches || e.changedTouches) {
                var n = (e.touches && e.touches.length >= 1 ? e.touches : e.changedTouches)[0];
                var var_200 = n.pageX || n.clientX;
                t.x = var_200;
                var var_201 = n.pageY || n.clientY;
                t.y = var_201;
            } else {
                var var_202 = e.pageX || e.clientX;
                t.x = var_202;
                var var_203 = e.pageY || e.clientY;
                t.y = var_203;
            }
            return t;
        }
    };
    var U = [
        'Webkit',
        'Moz',
        'ms'
    ];
    var F = document.createElement('div').style;
    var z = {};
    q.prototype.createElement = function (e, t) {
        var n = new q(e, t, false);
        this.appendElement.call(this, n);
        this._nodes.push(n);
        return n;
    };
    q.prototype.appendElement = function (e) {
        if (e === undefined) {
            var arg_208 = {
                name: 'DomElement Add Child',
                message: 'Child Element is undefined'
            };
            var var_206 = M(arg_208);
            return var_206;
        }
        var t;
        if (e._frag !== undefined && null !== e._frag) {
            t = e._frag;
        } else {
            if (e.dom !== undefined) {
                t = e.dom;
            } else {
                t = e;
            }
        }
        try {
            if (e instanceof q) {
                e._parent = this;
            }
            this.dom.appendChild(t);
        } catch (lt) {
            var arg_209 = {
                name: 'DomElement Add Child',
                message: 'Failed to append child.'
            };
            M(arg_209);
        }
        var var_205 = this;
        return var_205;
    };
    q.prototype.removeElement = function (e) {
        try {
            var t = e;
            if (e.dom) {
                t = t.dom;
                var n = e._nodes.length;;
                for (; --n > -1;) {
                    var arg_210 = e._nodes[n].dom || e._nodes[n];
                    e.dom.removeChild(arg_210);
                    e._nodes.splice(n, 1);
                }
            } else {
                var r = this._nodes.length;;
                for (; --r > -1;) {
                    if (this._nodes[r] === t) {
                        this._nodes.splice(r, 1);
                    }
                }
            }
            if (t.parentNode === this.dom) {
                this.dom.removeChild(t);
            }
        } catch (lt) {
            var arg_211 = {
                name: 'DomElement Remove Child',
                message: 'Failed to remove child.'
            };
            M(arg_211);
        }
    };
    q.prototype.addClass = function (e) {
        if (false === this.hasClass.call(this, e)) {
            this._clss.push(e);
            this.dom.className = this._clss.join(' ');
        }
        var var_207 = this;
        return var_207;
    };
    q.prototype.hasClass = function (e) {
        var t = this.dom.className.indexOf(e) >= 0, n = this._clss.length;;
        for (; n-- && !t;) {
            t = this._clss[n] === e;
        }
        return t;
    };
    q.prototype.removeClass = function (e) {
        var t = this._clss.length;;
        for (; --t > -1;) {
            if (this._clss[t] === e) {
                this._clss.splice(t, 1);
            }
        }
        this.dom.className = this._clss.join(' ');
        var var_208 = this;
        return var_208;
    };
    q.prototype.text = function (e) {
        if (this && this.dom) {
            if (!e) {
                return this.dom.textContent;
            }
            var t, n, r, i, o = /&(.*?);/g, a = /<[a-z][\s\S]*>/i;;
            for (; null !== (t = o.exec(e));) {
                if (false === a.test(t[0])) {
                    r = t[0];
                    i = void 0;
                    (i = document.createElement('div')).innerHTML = r;
                    n = i.textContent;
                    var arg_213 = t[0];
                    var arg_212 = new RegExp(arg_213, 'g');
                    e = e.replace(arg_212, n);
                } else {
                    e = e.replace(t[0], '');
                }
            }
            this.dom.textContent = e;
            var var_209 = this;
            return var_209;
        }
    };
    q.prototype.content = q.prototype.text;
    q.prototype.css = function (e) {
        var t;
        for (var n in e) {
            t = e[n];
            try {
                if ('opacity' !== n && 'zIndex' !== n && 'fontWeight' !== n && isFinite(t) && parseFloat(t) === t) {
                    t += 'px';
                }
                if ('ie' === T.Browser.type && 8 === T.Browser.version && 'opacity' === n) {
                    this.dom.style.filter = 'alpha(opacity=' + 100 * t + ')';
                } else {
                    var r = W(n);
                    this.dom.style[r] = t;
                }
            } catch (ut) {
            }
        }
        var var_210 = this;
        return var_210;
    };
    q.prototype.backgroundImage = function (e, t, n, r) {
        var i = t !== undefined && n !== undefined;
        var o = { '-ms-high-contrast-adjust': 'none' };
        if ('object' == typeof t) {
            r = t;
        }
        if (r === undefined) {
            r = {};
        }
        if (i) {
            var a = e.width / e.height;
            var s = t;
            var c = s / a;
            if (r.cover && c < n) {
                s = (c = n) * a;
            }
            if (r.contain && c > n) {
                s = (c = n) * a;
            }
            o.width = s;
            o.height = c;
            if (r.center) {
                o.marginLeft = -s / 2;
                o.marginTop = -c / 2;
                o.position = 'absolute';
                o.left = '50%';
                o.top = '50%';
            }
            if (r.left || r.right) {
                var var_211 = r.left || 0;
                o.left = var_211;
                var var_212 = r.top || 0;
                o.top = var_212;
            }
        }
        if ('ie' === T.Browser.type && 8 === T.Browser.version) {
            o.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + e.src + '\',sizingMethod=\'scale\')';
        } else {
            o.background = 'url(' + e.src + ')';
            o.backgroundPosition = '50% 50%';
            o.backgroundRepeat = 'no-repeat';
            o.backgroundSize = i ? s + 'px ' + c + 'px' : r.cover ? 'cover' : r.contain ? 'contain' : '100%';
        }
        this.css.call(this, o);
    };
    q.prototype.setAttribute = function (e, t) {
        var n;
        if ('object' == typeof e) {
            for (var r in e)
                n = e[r], this.dom.setAttribute(r, n);
        } else {
            this.dom.setAttribute(e, t);
        }
    };
    q.prototype.removeAttribute = function (e, t) {
        var n;
        if ('object' == typeof e) {
            for (var r in e)
                n = e[r], this.dom.removeAttribute(r, n);
        } else {
            this.dom.removeAttribute(e, t);
        }
    };
    q.prototype.addEventListener = function (e, t, n) {
        var r = {
            event: N.eventName(e),
            handler: N.eventCallback(e, t, this.dom),
            callback: t
        };
        this._listeners.push(r);
        if (this.dom.addEventListener) {
            this.dom.addEventListener(r.event, r.handler, n);
        } else {
            var arg_214 = 'on' + r.event;
            this.dom.attachEvent(arg_214, r.handler);
        }
    };
    q.prototype.removeEventListener = function (e, t, n) {
        var r, i = this._listeners.length;;
        for (; --i > -1;) {
            if ((r = this._listeners[i]).event === e && r.callback === t) {
                this._listeners.splice(i, 1);
                if (this.dom.removeEventListener) {
                    this.dom.removeEventListener(r.event, r.handler, n);
                } else {
                    var arg_215 = 'on' + r.event;
                    this.dom.detachEvent(arg_215, r.handler);
                }
            }
        }
    };
    q.prototype.focus = function () {
        this.dom.focus();
    };
    q.prototype.blur = function () {
        this.dom.blur();
    };
    q.prototype.html = function (e) {
        if (e) {
            this.dom.innerHTML = e;
        }
        return this.dom.innerHTML;
    };
    q.prototype.__destroy = function () {
        var e, t = this._listeners.length;;
        for (; --t > -1;) {
            e = this._listeners[t];
            this._listeners.splice(t, 1);
            if (this.dom.removeEventListener) {
                this.dom.removeEventListener(e.event, e.handler);
            } else {
                var arg_216 = 'on' + e.event;
                this.dom.detachEvent(arg_216, e.handler);
            }
        }
        this.dom = null;
        this._clss = [];
        this._nodes = [];
        this._listeners = [];
        this._frag = null;
        e = null;
        return null;
    };
    var H = {
        self: function (e, t) {
            var n = {};
            var r = Array.prototype.slice.call(arguments, 2);
            for (var i in (t.apply(e, r), e))
                n[i] = e[i];
        },
        proto: function (e, t) {
            e.prototype = Object.create(t.prototype);
            e.prototype.constructor = e;
        }
    };
    H.proto(X, q);
    X.prototype.initComponent = function (e, t, n) {
        var r = new e(t);
        r._parent = this;
        this.children.push(r);
        if (r.dom) {
            if (n !== undefined) {
                if (n.appendElement) {
                    n.appendElement(r);
                }
            } else {
                this.appendElement(r);
            }
        }
        return r;
    };
    X.prototype.destroy = function () {
        var e = this;
        try {
            k.depth(this, 'children', arg_218);
            function arg_218(t) {
                if (e !== t) {
                    var n = e.children.length;;
                    for (; --n > -1;) {
                        if (e.children[n] === t) {
                            e.children.splice(n, 1);
                        }
                    }
                }
                if (t._destroy) {
                    t._destroy();
                }
                t = null;
            }
        } catch (lt) {
            throw new Error('Trouble destroying nodes: ' + lt);
        }
        return null;
    };
    X.prototype._destroy = function () {
        try {
            if (this.onDestroy) {
                this.onDestroy();
            }
            if (this._parent.removeElement) {
                this._parent.removeElement(this);
            }
            var e = this._events.length;;
            for (; --e > -1;) {
                this._events.splice(e, 1);
            }
            this.children = null;
            this._destroy = null;
            this._events = null;
            this.destroy = null;
            this.emit = null;
            this.on = null;
            this.off = null;
            this.initComponent = null;
        } catch (lt) {
            var arg_219 = {
                name: 'DomComponent',
                message: 'Failed to destroy.'
            };
            M(arg_219);
        }
    };
    X.prototype.on = function (e, t) {
        var n = this._events.length, r = false;;
        for (; --n > -1 && false === r;) {
            if (this._events[n].event === e) {
                r = this._events[n];
            }
        }
        if (false === r) {
            r = {
                event: e,
                listeners: []
            };
            this._events.push(r);
        }
        r.listeners.push(t);
    };
    X.prototype.off = function (e, t) {
        var n = this._events.length;;
        for (; --n > -1;) {
            if (this._events[n].event === e) {
                var r = this._events[n].listeners.length;;
                for (; --r > -1;) {
                    if (this._events[n].listeners[r] === t) {
                        this._events[n].listeners.splice(r, 1);
                    }
                }
                if (0 === this._events[n].listeners.length) {
                    this._events.splice(n, 1);
                }
            }
        }
    };
    X.prototype.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1), n = this._events.length;;
        for (; --n > -1 && this._events;) {
            if (this._events[n].event === e) {
                var r = this._events[n].listeners.length;;
                for (; --r > -1;) {
                    this._events[n].listeners[r].apply(this, t);
                }
            }
        }
    };
    var J = {
        af: 'Afrikaans',
        sq: 'Albanian',
        am: 'Amharic',
        ar: 'Arabic',
        hy: 'Armenian',
        az: 'Azerbaijani',
        eu: 'Basque',
        be: 'Belarusian',
        bn: 'Bengali',
        bg: 'Bulgarian',
        bs: 'Bosnian',
        my: 'Burmese',
        ca: 'Catalan',
        ceb: 'Cebuano',
        zh: 'Chinese',
        'zh-CN': 'Chinese Simplified',
        'zh-TW': 'Chinese Traditional',
        co: 'Corsican',
        hr: 'Croatian',
        cs: 'Czech',
        da: 'Danish',
        nl: 'Dutch',
        en: 'English',
        eo: 'Esperanto',
        et: 'Estonian',
        fa: 'Persian',
        fi: 'Finnish',
        fr: 'French',
        fy: 'Frisian',
        gd: 'Gaelic',
        gl: 'Galacian',
        ka: 'Georgian',
        de: 'German',
        el: 'Greek',
        gu: 'Gujurati',
        ht: 'Haitian',
        ha: 'Hausa',
        haw: 'Hawaiian',
        he: 'Hebrew',
        hi: 'Hindi',
        hmn: 'Hmong',
        hu: 'Hungarian',
        is: 'Icelandic',
        ig: 'Igbo',
        id: 'Indonesian',
        ga: 'Irish',
        it: 'Italian',
        ja: 'Japanese',
        jw: 'Javanese',
        kn: 'Kannada',
        kk: 'Kazakh',
        km: 'Khmer',
        rw: 'Kinyarwanda',
        ky: 'Kirghiz',
        ko: 'Korean',
        ku: 'Kurdish',
        lo: 'Lao',
        la: 'Latin',
        lv: 'Latvian',
        lt: 'Lithuanian',
        lb: 'Luxembourgish',
        mk: 'Macedonian',
        mg: 'Malagasy',
        ms: 'Malay',
        ml: 'Malayalam',
        mt: 'Maltese',
        mi: 'Maori',
        mr: 'Marathi',
        mn: 'Mongolian',
        ne: 'Nepali',
        no: 'Norwegian',
        ny: 'Nyanja',
        or: 'Oriya',
        pl: 'Polish',
        pt: 'Portuguese',
        ps: 'Pashto',
        pa: 'Punjabi',
        ro: 'Romanian',
        ru: 'Russian',
        sm: 'Samoan',
        sn: 'Shona',
        sd: 'Sindhi',
        si: 'Singhalese',
        sr: 'Serbian',
        sk: 'Slovak',
        sl: 'Slovenian',
        so: 'Somani',
        st: 'Southern Sotho',
        es: 'Spanish',
        su: 'Sundanese',
        sw: 'Swahili',
        sv: 'Swedish',
        tl: 'Tagalog',
        tg: 'Tajik',
        ta: 'Tamil',
        tt: 'Tatar',
        te: 'Teluga',
        th: 'Thai',
        tr: 'Turkish',
        tk: 'Turkmen',
        ug: 'Uyghur',
        uk: 'Ukrainian',
        ur: 'Urdu',
        uz: 'Uzbek',
        vi: 'Vietnamese',
        cy: 'Welsh',
        xh: 'Xhosa',
        yi: 'Yiddish',
        yo: 'Yoruba',
        zu: 'Zulu'
    };
    var Y = {
        zh: { 'I am human': '我是人' },
        ar: { 'I am human': 'أنا الإنسان' },
        af: { 'I am human': 'Ek is menslike' },
        am: { 'I am human': 'እኔ ሰው ነኝ' },
        hy: { 'I am human': 'Ես մարդ եմ' },
        az: { 'I am human': 'Mən insanam' },
        eu: { 'I am human': 'Gizakia naiz' },
        bn: { 'I am human': 'আমি মানব নই' },
        bg: { 'I am human': 'Аз съм човек' },
        ca: { 'I am human': 'Sóc humà' },
        hr: { 'I am human': 'Ja sam čovjek' },
        cs: { 'I am human': 'Jsem člověk' },
        da: { 'I am human': 'Jeg er et menneske' },
        nl: { 'I am human': 'Ik ben een mens' },
        et: { 'I am human': 'Ma olen inimeste' },
        fi: { 'I am human': 'Olen ihminen' },
        fr: { 'I am human': 'Je suis humain' },
        gl: { 'I am human': 'Eu son humano' },
        ka: { 'I am human': 'მე ვარ ადამიანი' },
        de: { 'I am human': 'Ich bin ein Mensch' },
        el: { 'I am human': 'Είμαι άνθρωπος' },
        gu: { 'I am human': 'હું માનવ છું' },
        iw: { 'I am human': '. אני אנושי' },
        hi: { 'I am human': 'मैं मानव हूं' },
        hu: { 'I am human': 'Nem vagyok robot' },
        is: { 'I am human': 'Ég er manneskja' },
        id: { 'I am human': 'Aku manusia' },
        it: { 'I am human': 'Sono un essere umano' },
        ja: { 'I am human': '私は人間です' },
        kn: { 'I am human': 'ನಾನು ಮಾನವನು' },
        ko: { 'I am human': '사람입니다' },
        lo: { 'I am human': 'ຂ້ອຍເປັນມະນຸດ' },
        lv: { 'I am human': 'Es esmu cilvēks' },
        lt: { 'I am human': 'Aš esu žmogaus' },
        ms: { 'I am human': 'Saya manusia' },
        ml: { 'I am human': 'ഞാൻ മനുഷ്യനാണ്' },
        mr: { 'I am human': 'मी मानवी आहे' },
        mn: { 'I am human': 'Би бол хүн' },
        no: { 'I am human': 'Jeg er menneskelig' },
        fa: { 'I am human': 'من انسانی هستم' },
        pl: { 'I am human': 'Jestem człowiekiem' },
        pt: { 'I am human': 'Sou humano' },
        ro: { 'I am human': 'Eu sunt om' },
        ru: { 'I am human': 'Я человек' },
        sr: { 'I am human': 'Ja sam ljudski' },
        si: { 'I am human': 'මම මිනිස්සු' },
        sk: { 'I am human': 'Ja som človek' },
        sl: { 'I am human': 'Jaz sem človeški' },
        es: { 'I am human': 'Soy humano' },
        sw: { 'I am human': 'Mimi ni binadamu' },
        sv: { 'I am human': 'Jag är människa' },
        ta: { 'I am human': 'நான் மனித' },
        te: { 'I am human': 'నేను మనిషిని' },
        th: { 'I am human': 'ผมมนุษย์' },
        tr: { 'I am human': 'Ben bir insanım' },
        uk: { 'I am human': 'Я людини' },
        ur: { 'I am human': 'میں انسان ہوں' },
        vi: { 'I am human': 'Tôi là con người' },
        zu: { 'I am human': 'Ngingumuntu' }
    };
    var V = null;
    var $ = {
        translate: function (e) {
            var t = $.getBestTrans(Y);
            var var_213 = t && t[e] || e;
            return var_213;
        },
        getBestTrans: function (e) {
            var t = $.getLocale();
            var var_214 = null;
            if (t in e) {
                var_214 = e[t];
            } else {
                if ($.getShortLocale(t) in e) {
                    var_214 = e[$.getShortLocale(t)];
                } else {
                    if ('en' in e) {
                        var_214 = e.en;
                    } else {
                        var_214 = null;
                    }
                }
            }
            return var_214;
        },
        getLocale: function () {
            var e = V || window.navigator.userLanguage || window.navigator.language;
            var t = $.getShortLocale(e);
            if ('in' === t) {
                e = 'id';
            }
            if ('iw' === t) {
                e = 'he';
            }
            if ('nb' === t) {
                e = 'no';
            }
            if ('ji' === t) {
                e = 'yi';
            }
            if ('zh-CN' === e) {
                e = 'zh';
            }
            if ('jv' === t) {
                e = 'jw';
            }
            var var_215 = null;
            if (J[e]) {
                var_215 = e;
            } else {
                if (J[t]) {
                    var_215 = t;
                } else {
                    var_215 = 'en';
                }
            }
            return var_215;
        },
        setLocale: function (e) {
            V = e;
        },
        getShortLocale: function (e) {
            var var_216 = null;
            if (e.indexOf('-') >= 0) {
                var arg_220 = e.indexOf('-');
                var_216 = e.substring(0, arg_220);
            } else {
                var_216 = e;
            }
            return var_216;
        },
        isShortLocale: function (e) {
            var var_217 = 2 === e.length || 3 === e.length;
            return var_217;
        },
        addTable: function (e, t) {
            if (!t) {
                t = Object.create(null);
            }
            if (Y[e]) {
                var n = Y[e];
                for (var r in t)
                    n[r] = t[r];
            } else {
                Y[e] = t;
            }
            var var_218 = Y[e];
            return var_218;
        },
        getTable: function (e) {
            var var_219 = Y[e];
            return var_219;
        },
        addTables: function (e) {
            for (var t in e)
                $.addTable(t, e[t]);
            return Y;
        },
        getTables: function () {
            return Y;
        }
    };
    var K = {
        touchstart: 'ts',
        touchend: 'te',
        touchmove: 'tm',
        touchcancel: 'tc'
    };
    var Q = {
        mousedown: 'md',
        mouseup: 'mu',
        mousemove: 'mm'
    };
    var G = {
        keydown: 'kd',
        keyup: 'ku'
    };
    var Z = { devicemotion: 'dm' };
    ie.prototype.getMeanPeriod = function () {
        return this._meanPeriod;
    };
    ie.prototype.getData = function () {
        this._cleanStaleData();
        return this._data;
    };
    ie.prototype.getSize = function () {
        this._cleanStaleData();
        return this._data.length;
    };
    ie.prototype.getCapacity = function () {
        var var_227 = null;
        if (0 === this._period) {
            var_227 = this._interval;
        } else {
            var arg_224 = this._interval / this._period;
            var_227 = Math.ceil(arg_224);
        }
        return var_227;
    };
    ie.prototype.push = function (e, t) {
        this._cleanStaleData();
        var n = 0 === this._date.length;
        if (e - (this._date[this._date.length - 1] || 0) >= this._period) {
            this._date.push(e);
            this._data.push(t);
        }
        if (!n) {
            var r = e - this._prevTimestamp;
            this._meanPeriod = (this._meanPeriod * this._meanCounter + r) / (this._meanCounter + 1);
            this._meanCounter++;
        }
        this._prevTimestamp = e;
    };
    ie.prototype._cleanStaleData = function () {
        var e = Date.now(), t = this._date.length - 1;;
        for (; t >= 0; t--) {
            if (e - this._date[t] >= this._interval) {
                var arg_225 = t + 1;
                this._date.splice(0, arg_225);
                var arg_226 = t + 1;
                this._data.splice(0, arg_226);
                break;
            }
        }
    };
    oe.prototype.record = function (e, t, n, r) {
        this._manifest.st = Date.now();
        this.state.record.mouse = e === undefined ? this.state.record.mouse : e;
        this.state.record.touch = n === undefined ? this.state.record.touch : n;
        this.state.record.keys = t === undefined ? this.state.record.keys : t;
        this.state.record.motion = r === undefined ? this.state.record.motion : r;
        if (false === this.state.initRecord) {
            var arg_227 = document.body;
            var i = new q(arg_227);
            if (this.state.record.mouse) {
                var arg_228 = ee('mousedown', this._recordEvent);
                i.addEventListener('mousedown', arg_228);
                var arg_229 = ee('mousemove', this._recordEvent);
                i.addEventListener('mousemove', arg_229);
                var arg_230 = ee('mouseup', this._recordEvent);
                i.addEventListener('mouseup', arg_230);
            }
            if (true === this.state.record.keys) {
                var arg_231 = ne('keyup', this._recordEvent);
                i.addEventListener('keyup', arg_231);
                var arg_232 = ne('keydown', this._recordEvent);
                i.addEventListener('keydown', arg_232);
            }
            if (this.state.record.touch && true === T.Browser.hasEvent('touchstart', document.body)) {
                var arg_233 = te('touchstart', this._recordEvent);
                i.addEventListener('touchstart', arg_233);
                var arg_234 = te('touchmove', this._recordEvent);
                i.addEventListener('touchmove', arg_234);
                var arg_235 = te('touchend', this._recordEvent);
                i.addEventListener('touchend', arg_235);
            }
            if (this.state.record.motion && true === T.Browser.hasEvent('devicemotion', window)) {
                var arg_236 = re('devicemotion', this._recordEvent);
                i.addEventListener('devicemotion', arg_236);
            }
            this.state.initRecord = true;
        }
        this.state.recording = true;
    };
    oe.prototype.stop = function () {
        this.state.recording = false;
    };
    oe.prototype.time = function () {
        return this.state.loadTime;
    };
    oe.prototype.getData = function () {
        for (var e in this.state.timeBuffers)
            this._manifest[e] = this.state.timeBuffers[e].getData(), this._manifest[e + '-mp'] = this.state.timeBuffers[e].getMeanPeriod();
        return this._manifest;
    };
    oe.prototype.setData = function (e, t) {
        this._manifest[e] = t;
    };
    oe.prototype.resetData = function () {
        this._manifest = {};
        this.state.timeBuffers = {};
    };
    oe.prototype.circBuffPush = function (e, t) {
        this._recordEvent(e, t);
    };
    oe.prototype._recordEvent = function (e, t) {
        if (false !== this.state.recording) {
            try {
                var n = t[t.length - 1];
                if (!this.state.timeBuffers[e]) {
                    this.state.timeBuffers[e] = new ie(16, 15000);
                }
                this.state.timeBuffers[e].push(n, t);
            } catch (lt) {
                var arg_237 = 'Event recording error: ' + JSON.stringify(lt);
                L(arg_237, 'error', 'motion');
            }
        }
    };
    var ae = new oe();
    var se = [];
    var ce = false;
    var ue = false;
    new q(document);
    new q(window);
    fe.prototype.setID = function (e) {
        this.id = e;
    };
    fe.prototype.contact = function (e, t) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var n = this;
        var r = Date.now().toString(36);
        var i = {
            source: 'hcaptcha',
            label: e,
            id: this.id,
            promise: 'create',
            lookup: r
        };
        if (t) {
            if ('object' != typeof t) {
                throw new Error('Message must be an object.');
            }
            i.contents = t;
        }
        var var_228 = new Promise(arg_243);
        return var_228;
        function arg_243(t, o) {
            var arg_244 = {
                label: e,
                reject: o,
                resolve: t,
                lookup: r
            };
            n.waiting.push(arg_244);
            de(n.target, i);
        }
    };
    fe.prototype.listen = function (e, t) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var n = this.messages.length, r = false;;
        for (; --n > -1 && false === r;) {
            if (this.messages[n].label === e) {
                r = this.messages[n];
            }
        }
        if (false === r) {
            r = {
                label: e,
                listeners: []
            };
            this.messages.push(r);
        }
        r.listeners.push(t);
    };
    fe.prototype.answer = function (e, t) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var n = this.incoming.length, r = false;;
        for (; --n > -1 && false === r;) {
            if (this.incoming[n].label === e) {
                r = this.incoming[n];
            }
        }
        if (false === r) {
            r = {
                label: e,
                listeners: []
            };
            this.incoming.push(r);
        }
        r.listeners.push(t);
    };
    fe.prototype.send = function (e, t) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var n = {
            source: 'hcaptcha',
            label: e,
            id: this.id
        };
        if (t) {
            if ('object' != typeof t) {
                throw new Error('Message must be an object.');
            }
            n.contents = t;
        }
        de(this.target, n);
    };
    fe.prototype.check = function (e, t) {
        var n = [].concat.apply([], [
                this.messages,
                this.incoming,
                this.waiting
            ]), r = [], i = -1;;
        for (; ++i < n.length;) {
            if (n[i].label === e) {
                if (t && n[i].lookup && t !== n[i].lookup) {
                    continue;
                }
                r.push(n[i]);
            }
        }
        return r;
    };
    fe.prototype.respond = function (e) {
        var t, n, r = -1, i = 0, o = [].concat.apply([], [
                this.messages,
                this.incoming,
                this.waiting
            ]);;
        for (; ++r < o.length;) {
            if (o[r].label === e.label) {
                if (e.lookup && o[r].lookup && e.lookup !== o[r].lookup) {
                    continue;
                }
                var a = [];
                t = o[r];
                if (e.error) {
                    a.push(e.error);
                }
                if (e.contents) {
                    a.push(e.contents);
                }
                if (e.promise && 'create' !== e.promise) {
                    t[e.promise].apply(t[e.promise], a);
                    var s = this.waiting.length, c = false;;
                    for (; --s > -1 && false === c;) {
                        if (this.waiting[s].label === t.label && this.waiting[s].lookup === t.lookup) {
                            c = true;
                            this.waiting.splice(s, 1);
                        }
                    }
                    continue;
                }
                i = 0;
                for (; i < t.listeners.length; i++) {
                    n = t.listeners[i];
                    if ('create' === e.promise) {
                        var u = pe.call(this, t.label, e.lookup);
                        a.push(u);
                    }
                    n.apply(n, a);
                }
            }
        }
        o = null;
    };
    fe.prototype.destroy = function () {
        this.messages = null;
        this.incoming = null;
        this.waiting = null;
        return null;
    };
    var me = {
        chats: [],
        isSupported: function () {
            var var_229 = !!window.postMessage;
            return var_229;
        },
        createChat: function (e, t) {
            var n = new fe(e, t);
            me.chats.push(n);
            return n;
        },
        addChat: function (e) {
            me.chats.push(e);
        },
        removeChat: function (e) {
            var t = false, n = me.chats.length;;
            for (; --n > -1 && false === t;) {
                if (e.id === me.chats[n].id && e.target === me.chats[n].target) {
                    t = me.chats[n];
                    me.chats.splice(n, 1);
                }
            }
            return t;
        },
        handle: function (e) {
            var t = e.data;
            if ('string' == typeof t) {
                try {
                    if (!(t.indexOf('hcaptcha') >= 0)) {
                        return;
                    }
                    t = JSON.parse(t);
                    var n, r = me.chats, i = -1;;
                    for (; ++i < r.length;) {
                        if ((n = r[i]).id === t.id) {
                            n.respond(t);
                        }
                    }
                } catch (ut) {
                    var arg_245 = {
                        event: e,
                        error: ut
                    };
                    R('postMessage handler error', 'postMessage', 'debug', arg_245);
                }
            }
        }
    };
    if (window.addEventListener) {
        window.addEventListener('message', me.handle);
    } else {
        window.attachEvent('onmessage', me.handle);
    }
    var ge = [
        '10000000-ffff-ffff-ffff-000000000001',
        '20000000-ffff-ffff-ffff-000000000002',
        '30000000-ffff-ffff-ffff-000000000003'
    ];
    var ye = {
        sitekey: function (e) {
            var var_230 = B.UUIDv4(e) || '00000000-0000-0000-0000-000000000000' === e || -1 !== ge.indexOf(e);
            return var_230;
        },
        dummykey: function (e) {
            var var_231 = -1 !== ge.indexOf(e);
            return var_231;
        }
    };
    var xe = {
        400: 'Rate limited or network error. Please retry.',
        429: 'Your computer or network has sent too many requests.',
        500: 'Cannot contact hCaptcha. Check your connection and try again.'
    };
    var Ee = {
        getText: function (e) {
            try {
                var var_235 = $.translate(xe[e]);
                return var_235;
            } catch (lt) {
                return false;
            }
        }
    };
    var _e = 'undefined' != typeof XDomainRequest && 'withCredentials' in XMLHttpRequest.prototype == false;
    H.proto(Ae, q);
    Ae.prototype.dimensions = function (e, t) {
        var arg_275 = {
            width: e,
            height: t
        };
        this.css(arg_275);
        var arg_276 = e / this.scale;
        this.element.width = Math.round(arg_276) * this.dpr;
        var arg_277 = t / this.scale;
        this.element.height = Math.round(arg_277) * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
        var arg_278 = e / this.scale;
        this.width = Math.round(arg_278);
        var arg_279 = t / this.scale;
        this.height = Math.round(arg_279);
    };
    Ae.prototype.clear = function () {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.element.width, this.element.height);
        }
    };
    Ae.prototype.draw = function () {
        if (this.ctx) {
            this.ctx.fillStyle = this.clearColor;
            this.ctx.fillRect(0, 0, this.element.width, this.element.height);
        }
    };
    Ae.prototype._destroy = function () {
        this.__destroy();
        this.element = null;
        this.ctx = null;
        this.width = null;
        this.height = null;
    };
    Te.prototype.rotate = function (e, t) {
        var n = function (e) {
            var var_249 = e * (Math.PI / 180);
            return var_249;
        }(t);
        var r = Math.sin(n);
        var i = Math.cos(n);
        var o = this.x - e.x;
        var a = this.y - e.y;
        this.x = o * i - a * r + e.x;
        this.y = o * r + a * i + e.y;
    };
    Te.prototype.getDistance = function (e) {
        var arg_281 = this.x - e.x;
        var arg_282 = this.y - e.y;
        var arg_280 = Math.pow(arg_281, 2) + Math.pow(arg_282, 2);
        var var_250 = Math.sqrt(arg_280);
        return var_250;
    };
    Te.prototype.getAngle = function (e) {
        var t = e.x - this.x;
        var n = e.y - this.y;
        var r = 180 * Math.atan2(n, t) / Math.PI;
        if (r < 0) {
            r += 360;
        }
        return r;
    };
    Te.prototype.hitTest = function (e) {
        var var_251 = this.radius + this.tolerance >= this.getDistance(e);
        return var_251;
    };
    Te.prototype.restrict = function (e, t, n, r) {
        if ('x' !== e && 'y' !== e) {
            throw new Error('Point.restrict requires a value: x or y');
        }
        if (t + this[e] < n) {
            t = this[e] - n;
        } else {
            if (t + this[e] > r) {
                t = r - this[e];
            }
        }
        var var_252 = this[e] + t;
        return var_252;
    };
    Te.prototype.draw = function (e) {
        e.ctx.beginPath();
        var arg_283 = this.radius / e.scale;
        var arg_284 = 2 * Math.PI;
        e.ctx.arc(this.x, this.y, arg_283, 0, arg_284, false);
        if (this.fill) {
            e.ctx.fillStyle = this.fillColor;
            e.ctx.fill();
        }
        if (this.stroke) {
            e.ctx.strokeStyle = this.strokeColor;
            e.ctx.lineWidth = this.strokeWidth / e.scale;
            e.ctx.stroke();
        }
    };
    H.proto(Ie, Te);
    Ie.prototype.set = function (e, t, n) {
        var var_253 = e.x || this.x;
        this.x = var_253;
        var var_254 = e.y || this.y;
        this.y = var_254;
        if (t === undefined) {
            this.handleIn.x = this.x;
            this.handleIn.y = this.y;
        } else {
            this.handleIn.x = t.x;
            this.handleIn.y = t.y;
        }
        if (n === undefined) {
            this.handleOut.x = this.x;
            this.handleOut.y = this.y;
        } else {
            this.handleOut.x = n.x;
            this.handleOut.y = n.y;
        }
    };
    Ie.prototype.clone = function () {
        var e = {
            x: this.x,
            y: this.y
        };
        var t = {
            x: this.handleIn.x,
            y: this.handleIn.y
        };
        var n = {
            x: this.handleOut.x,
            y: this.handleOut.y
        };
        var r = new Ie();
        if (t.x === n.x && t.y === n.y) {
            r.set(e);
        } else {
            r.set(e, t, n);
        }
        r.index = this.index;
        r.prev = this.prev;
        r.next = this.next;
        r.radius = this.radius;
        r.tolerance = this.tolerance;
        r.fill = this.fill;
        r.stroke = this.stroke;
        r.fillColor = this.fillColor;
        r.strokeColor = this.strokeColor;
        r.strokeWidth = this.strokeWidth;
        return r;
    };
    Ie.prototype.move = function (e, t) {
        this.x += e;
        this.y += t;
        this.handleIn.x += e;
        this.handleIn.y += t;
        this.handleOut.x += e;
        this.handleOut.y += t;
    };
    Ie.prototype.render = function (e) {
        if (this.handleIn.x !== this.x && this.handleIn.y !== this.y) {
            this.handleIn.draw(e);
        }
        if (this.handleOut.x !== this.x && this.handleOut.y !== this.y) {
            this.handleOut.draw(e);
        }
        this.draw(e);
    };
    var Pe = {
        getType: function (e) {
            var var_255 = null;
            if (e.toLowerCase().match(/\.(?:jpg|gif|png|jpeg|svg)$/g)) {
                var_255 = 'image';
            } else {
                if (e.toLowerCase().match(/\.(?:js)$/g)) {
                    var_255 = 'script';
                } else {
                    var_255 = 'file';
                }
            }
            return var_255;
        },
        getLocation: function (e) {
            if (P.assethost && e.indexOf(I.assetDomain) >= 0) {
                var var_256 = P.assethost + e.replace(I.assetDomain, '');
                return var_256;
            }
            if (P.imghost && e.indexOf('imgs') >= 0) {
                var t = null;
                if (e.indexOf('.ai') >= 0) {
                    t = e.indexOf('.ai') + 3;
                } else {
                    t = e.indexOf('.com') + 4;
                }
                var var_257 = P.imghost + e.substr(t, e.length);
                return var_257;
            }
            return e;
        }
    };
    Me.prototype.load = function () {
        var e = this;
        var t = this.attribs;
        var n = this.src;
        var r = this.id;
        var var_258 = new Promise(arg_287);
        return var_258;
        function arg_287(i, o) {
            var a = new Image();
            e.element = a;
            if (t.crossOrigin) {
                a.crossOrigin = t.crossOrigin;
            }
            a.onerror = function (t) {
                e.error = true;
                a.onload = a.onerror = null;
                var n = (t && t.message ? t.message : 'Loading Error') + ': ' + r;
                Le(e.cb, 'error', n);
                o(n);
            };
            a.onload = function () {
                if (!e.loaded) {
                    e.width = a.width;
                    e.height = a.height;
                    e.aspect = a.width / a.height;
                    e.loaded = true;
                    a.onload = a.onerror = null;
                    Le(e.cb, 'load', e);
                    i(e);
                }
            };
            a.src = n;
            if (a.complete) {
                a.onload();
            }
        }
    };
    Me.prototype.onload = function (e) {
        if (!this.error) {
            if (this.loaded) {
                e(this);
            } else {
                this.cb.load.push(e);
            }
        }
    };
    Me.prototype.onerror = function (e) {
        if (!(this.loaded && !this.error)) {
            if (this.error) {
                e(this);
            } else {
                this.cb.error.push(e);
            }
        }
    };
    Re.prototype.load = function () {
        var e = this;
        var t = this.attribs;
        var n = this.src;
        var r = this.id;
        var var_259 = new Promise(arg_288);
        return var_259;
        function arg_288(i, o) {
            var a = document.createElement('script');
            e.element = a;
            a.onerror = function (t) {
                e.error = true;
                a.onload = a.onreadystatechange = a.onerror = null;
                var n = (t.message || 'Loading Error') + ': ' + r;
                Be(e.cb, 'error', n);
                o(n);
            };
            a.onload = a.onreadystatechange = function () {
                if (!(this.loaded || a.readyState && 'loaded' !== a.readyState && 'complete' !== a.readyState)) {
                    e.loaded = true;
                    a.onload = a.onreadystatechange = a.onerror = null;
                    document.body.removeChild(a);
                    Be(e.cb, 'load', e);
                    i(e);
                }
            };
            a.type = 'text/javascript';
            a.src = n;
            if (t.crossOrigin) {
                a.crossorigin = t.crossOrigin;
            }
            if (t.async) {
                a.async = true;
            }
            if (t.defer) {
                a.defer = true;
            }
            document.body.appendChild(a);
            if (a.complete) {
                a.onload();
            }
        }
    };
    Re.prototype.onload = function (e) {
        if (!this.error) {
            if (this.loaded) {
                e(this);
            } else {
                this.cb.load.push(e);
            }
        }
    };
    Re.prototype.onerror = function (e) {
        if (!(this.loaded && !this.error)) {
            if (this.error) {
                e(this);
            } else {
                this.cb.error.push(e);
            }
        }
    };
    De.prototype.load = function () {
        var e = this;
        var t = this.src;
        var n = this.id;
        var var_260 = new Promise(arg_289);
        return var_260;
        function arg_289(r, i) {
            var o = {};
            if (t.indexOf('json') >= 0) {
                o.responseType = 'json';
            }
            Oe(t, o).then(arg_290)['catch'](arg_291);
            function arg_290(t) {
                e.loaded = true;
                e.data = t.body;
                Ne(e.cb, 'load', e);
                r(e);
            }
            function arg_291(t) {
                e.error = true;
                var r = (t && t.message ? t.message : 'Loading Error') + ': ' + n;
                Ne(e.cb, 'error', r);
                i(r);
            }
        }
    };
    De.prototype.onload = function (e) {
        if (!this.error) {
            if (this.loaded) {
                e(this);
            } else {
                this.cb.load.push(e);
            }
        }
    };
    De.prototype.onerror = function (e) {
        if (!(this.loaded && !this.error)) {
            if (this.error) {
                e(this);
            } else {
                this.cb.error.push(e);
            }
        }
    };
    var Ue = [];
    var Fe = {
        add: function (e, t) {
            var n = Pe.getType(e);
            var var_261 = null;
            if (Fe[n]) {
                var_261 = Fe[n](e, t);
            } else {
                var_261 = Promise.resolve(null);
            }
            return var_261;
        },
        batch: function (e, t) {
            var n = [], r = -1;;
            for (; ++r < e.length;) {
                var i = e[r];
                var arg_293 = Fe.add(i, t);
                n.push(arg_293);
            }
            var var_262 = Promise.all(n)['finally'](arg_292);
            return var_262;
            function arg_292() {
                n = [];
            }
        },
        image: function (e, t) {
            var n = new Me(e, t);
            Ue.push(n);
            var var_263 = n.load();
            return var_263;
        },
        script: function (e, t) {
            var n = new Re(e, t);
            Ue.push(n);
            var var_264 = n.load();
            return var_264;
        },
        file: function (e, t) {
            var n = new De(e, t);
            Ue.push(n);
            var var_265 = n.load();
            return var_265;
        },
        retrieve: function (e) {
            var var_266 = new Promise(arg_294);
            return var_266;
            function arg_294(t, n) {
                var r = Ue.length, i = false, o = null;;
                for (; --r > -1 && !i;) {
                    var var_267 = (o = Ue[r]).id.indexOf(e) >= 0 && o;
                    i = var_267;
                }
                if (!i) {
                    var var_268 = t(null);
                    return var_268;
                }
                o.onload(t);
                o.onerror(n);
            }
        }
    };
    var ze = null;
    var We = null;
    var qe = null;
    var He = null;
    var Xe = null;
    var Je = null;
    var Ye = null;
    var Ve = null;
    var $e = null;
    var Ke = null;
    var Qe = 'https://www.hcaptcha.com/what-is-hcaptcha-about';
    H.proto(Ze, x);
    Ze.prototype.setup = function () {
        this.loadImages();
        var arg_296 = document.getElementById('anchor');
        qe = new q(arg_296);
        var arg_297 = document.getElementById('checkbox');
        ze = new q(arg_297);
        var arg_298 = document.getElementById('checkbox-label');
        He = new q(arg_298);
        var arg_299 = document.getElementById('config-error');
        Xe = new q(arg_299);
        var arg_300 = document.getElementById('logo');
        Ye = new q(arg_300);
        var arg_301 = document.getElementById('icon');
        We = new q(arg_301);
        var arg_302 = document.getElementById('config-warning');
        Je = new q(arg_302);
        var arg_303 = document.getElementById('privacy-link');
        Ve = new q(arg_303);
        var arg_304 = document.getElementById('terms-link');
        $e = new q(arg_304);
        var arg_305 = document.getElementById('checkbox-a11y-label');
        Ke = new q(arg_305);
        if ('invisible' !== P.size) {
            qe.setAttribute('aria-hidden', false);
        } else {
            qe.setAttribute('aria-hidden', true);
        }
        ze.setAttribute('aria-haspopup', true);
        ze.setAttribute('tabindex', '0');
        ze.setAttribute('aria-live', 'assertive');
        ze.setAttribute('aria-labelledby', 'checkbox-a11y-label checkbox-label');
        Ye.setAttribute('tabindex', '0');
        Xe.setAttribute('aria-hidden', true);
        Xe.setAttribute('aria-live', 'polite');
        Je.setAttribute('aria-hidden', true);
        Je.setAttribute('aria-live', 'polite');
        qe.addClass('anchor');
        var arg_306 = null;
        if ('compact' === P.size) {
            arg_306 = 'compact';
        } else {
            arg_306 = ' normal';
        }
        qe.addClass(arg_306);
        var arg_307 = null;
        if ('dark' === P.theme) {
            arg_307 = 'dark';
        } else {
            arg_307 = ' light';
        }
        qe.addClass(arg_307);
        var arg_308 = this.select.bind(this);
        qe.addEventListener('click', arg_308);
        var arg_309 = this.select.bind(this);
        qe.addEventListener('enter', arg_309);
        var e = Qe + '?site=' + I.host + '&key=' + I.sitekey + '&r=a0';
        Ye.setAttribute('data-href', e);
        Ge(Ye);
        Ge(Ve);
        Ge($e);
        var arg_310 = { '-ms-high-contrast-adjust': 'none' };
        ze.css(arg_310);
        var arg_311 = { '-ms-high-contrast-adjust': 'none' };
        We.css(arg_311);
        var arg_312 = null;
        if ('dark' === P.theme) {
            arg_312 = 'images/logo-small-dark-theme';
        } else {
            arg_312 = 'images/logo-small';
        }
        this.retrieveImage(arg_312, arg_313);
        if ('off' === P.tplinks) {
            new q(document.getElementsByClassName('logo-container')[0]).addClass('tplinks-off');
        }
        function arg_313(e) {
            We.backgroundImage(e);
        }
    };
    Ze.prototype.loadImages = function () {
        if ('invisible' !== P.size) {
            var e = null;
            if ('dark' === P.theme) {
                e = 'logo-small-dark-theme.png';
            } else {
                e = 'logo-small.png';
            }
            var arg_314 = [
                e,
                'pulse.svg',
                'check.png'
            ];
            var arg_315 = {
                prefix: 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static/images',
                fallback: 'gif'
            };
            Fe.batch(arg_314, arg_315);
        }
    };
    Ze.prototype.retrieveImage = function (e, t) {
        if ('invisible' !== P.size) {
            Fe.retrieve(e).then(t);
        }
    };
    Ze.prototype.select = function (e) {
        if (qe.hasClass('disabled')) {
            return true;
        }
        var t = (e.target || e.srcElement).id || '';
        var var_269 = 'terms-link' == t || 'privacy-link' == t || 'logo' == t || 'icon' == t || (!!ze.hasClass('active') || (this.setLoading(true), qe.setAttribute('aria-hidden', true), ze.setAttribute('aria-checked', 'mixed'), ze.setAttribute('tabindex', '-1'), Ye.setAttribute('tabindex', '-1'), void this.emit('select', e.action)));
        return var_269;
    };
    Ze.prototype.getLocation = function () {
        var e = ze.dom.getBoundingClientRect();
        var t = e.bottom - e.top;
        var n = e.right - e.left;
        var var_270 = {
            left: e.left,
            right: e.right,
            top: e.top,
            bottom: e.bottom,
            width: n,
            height: t,
            x: e.left + n / 2,
            y: e.top + t / 2
        };
        return var_270;
    };
    Ze.prototype.reset = function () {
        this.state.ticked = false;
        if ('invisible' !== P.size) {
            qe.setAttribute('aria-hidden', false);
        } else {
            qe.setAttribute('aria-hidden', true);
        }
        ze.setAttribute('aria-checked', false);
        ze.setAttribute('tabindex', '0');
        Ye.setAttribute('tabindex', '0');
        var arg_316 = $.translate('hCaptcha checkbox. Select in order to trigger the challenge, or to bypass it if you have an accessibility cookie.');
        Ke.text(arg_316);
        ze.focus();
        ze.removeClass('checked');
        qe.removeClass('disabled');
        this.setLoading(false);
    };
    Ze.prototype.setLoading = function (e) {
        var t = this;
        if (e) {
            ze.addClass('active');
            this.retrieveImage('images/pulse', arg_317);
            function arg_317(e) {
                if (!t.state.ticked) {
                    var arg_318 = { contain: true };
                    ze.backgroundImage(e, arg_318);
                }
            }
        } else {
            ze.removeClass('active');
            ze.dom.style.background = '';
        }
    };
    Ze.prototype.tick = function () {
        var e = this;
        this.state.ticked = true;
        if ('invisible' !== P.size) {
            qe.setAttribute('aria-hidden', false);
        } else {
            qe.setAttribute('aria-hidden', true);
        }
        ze.setAttribute('aria-checked', true);
        var arg_319 = $.translate('hCaptcha checkbox. You are verified');
        Ke.text(arg_319);
        ze.setAttribute('tabindex', '0');
        Ye.setAttribute('tabindex', '0');
        ze.focus();
        ze.removeClass('active');
        this.retrieveImage('images/check', arg_320);
        ze.addClass('checked');
        qe.addClass('disabled');
        function arg_320(t) {
            if (e.state.ticked) {
                var arg_321 = { contain: true };
                ze.backgroundImage(t, arg_321);
            }
        }
    };
    Ze.prototype.translate = function () {
        var e = 'hCaptcha checkbox. Select in order to trigger the challenge, or to bypass it if you have an accessibility cookie.';
        if (this.state.ticked) {
            e = 'hCaptcha checkbox. You are verified';
        }
        var arg_322 = $.translate('I am human');
        He.text(arg_322);
        var arg_323 = $.translate(e);
        Ke.text(arg_323);
        var arg_324 = $.translate('Privacy');
        Ve.text(arg_324);
        var arg_325 = $.translate('Terms');
        $e.text(arg_325);
        var arg_326 = $.translate('hCaptcha Privacy Policy');
        Ve.setAttribute('aria-label', arg_326);
        var arg_327 = $.translate('hCaptcha Terms of Service');
        $e.setAttribute('aria-label', arg_327);
        var arg_328 = $.translate('Visit hcaptcha.com to learn more about the service and its accessibility options.');
        Ye.setAttribute('aria-label', arg_328);
        if (this.state.warning) {
            var arg_329 = $.translate(this.state.warning);
            Je.text(arg_329);
        }
        if (this.state.error) {
            var arg_330 = $.translate(this.state.error);
            Xe.text(arg_330);
        }
    };
    Ze.prototype.setWarning = function (e, t) {
        this.state.warning = e;
        var n = null;
        if (e) {
            n = $.translate(e);
        } else {
            n = '';
        }
        if ('invisible' !== P.size) {
            var arg_332 = t || !e;
            Je.setAttribute('aria-hidden', arg_332);
        }
        if (e) {
            ze.setAttribute('aria-describedby', 'config-warning');
            Je.setAttribute('aria-label', n);
        } else {
            ze.removeAttribute('aria-describedby');
            Je.removeAttribute('aria-label');
        }
        Je.text(n);
        var arg_331 = {
            opacity: e ? 1 : 0,
            display: t ? 'none' : 'block'
        };
        Je.css(arg_331);
    };
    Ze.prototype.setStatus = function (e, t) {
        if (e && e.indexOf('invalid-challenge') >= 0) {
            var n = e.replace(/-/g, ' ');
            e = n.charAt(0).toUpperCase() + n.slice(1) + '.';
        }
        var r = null;
        if (e) {
            r = $.translate(e);
        } else {
            r = '';
        }
        if ('invisible' !== P.size) {
            var arg_334 = t || !e;
            Xe.setAttribute('aria-hidden', arg_334);
        }
        if (e) {
            ze.setAttribute('aria-describedby', 'config-error');
            Xe.setAttribute('aria-label', r);
        } else {
            ze.removeAttribute('aria-describedby');
            Xe.removeAttribute('aria-label');
        }
        Xe.text(r);
        var arg_333 = {
            opacity: e ? 1 : 0,
            display: t ? 'none' : 'block'
        };
        Xe.css(arg_333);
        this.state.error = e;
    };
    Ze.prototype.setLogoLink = function (e) {
        Qe = e;
    };
    Ze.prototype.getLogoLink = function () {
        return Qe;
    };
    var et;
    var tt = null;
    var nt = null;
    var rt = new Ze();
    var it = new Promise(arg_1);
    var ot = null;
    var at = {
        init: function (e) {
            var t;
            nt = e.id;
            rt.setup();
            et();
            var arg_335 = { display: 'block' };
            (ot = new q(document.body)).css(arg_335);
            (t = ot).addEventListener('down', arg_336);
            t.addEventListener('keydown', arg_337);
            function arg_336() {
                if (t.hasClass('using-kb')) {
                    t.removeClass('using-kb');
                }
            }
            function arg_337(e) {
                if (9 === e.keyNum) {
                    t.addClass('using-kb');
                }
            }
        },
        getID: function () {
            return nt;
        },
        getCharity: function () {
            return tt;
        },
        getLink: function () {
            var var_271 = rt.getLogoLink();
            return var_271;
        },
        getSitekey: function () {
            return I.sitekey;
        },
        setStatus: function (e, t) {
            it.then(arg_338);
            function arg_338(n) {
                n.setStatus(e, t);
            }
        },
        checkSiteConfig: function () {
            var var_272 = new Promise(arg_339);
            return var_272;
            function arg_339(e) {
                var arg_340 = {
                    attempts: 3,
                    delay: 5000,
                    onFail: function (e) {
                        R('/checksiteconfig error', 'request', 'debug', e);
                        var var_273 = e instanceof Error || 400 === e.status;
                        return var_273;
                    }
                };
                je(I.sitekey, I.host, arg_340).then(arg_341, arg_342);
                function arg_341(t) {
                    R('/checksiteconfig success', 'request', 'info', t);
                    at.setStatus(false);
                    if (t.charity !== undefined) {
                        tt = t.charity;
                    }
                    if (t.brand_uri !== undefined) {
                        rt.setLogoLink(t.brand_uri);
                    }
                    e(t);
                }
                function arg_342(e) {
                    at.setStatus(e.message);
                }
            }
        },
        translate: function (e) {
            it.then(arg_343);
            function arg_343(t) {
                if (e && e.locale && e.table) {
                    try {
                        $.addTable(e.locale, e.table);
                        t.translate();
                        var arg_344 = $.getLocale();
                        document.documentElement.setAttribute('lang', arg_344);
                    } catch (lt) {
                        var arg_345 = 'Failed to update text translations: ' + JSON.stringify(lt);
                        L(arg_345, 'error', 'translation');
                    }
                }
            }
        },
        tick: function () {
            it.then(arg_346);
            function arg_346(e) {
                e.tick();
            }
        }
    };
    var arg_2 = window.location.hash.slice(1);
    var st = function (e) {
        var t, n, r, i = {}, o = e ? e.indexOf('&') >= 0 ? e.split('&') : [e] : [], a = 0;;
        for (; a < o.length; a++) {
            if (o[a].indexOf('=') >= 0) {
                t = o[a].split('=');
                n = decodeURIComponent(t[0]);
                if (!('false' !== (r = decodeURIComponent(t[1])) && 'true' !== r)) {
                    r = 'true' === r;
                }
                i[n] = r;
            }
        }
        return i;
    }(arg_2);
    !function (e) {
        I.host = e.host;
        I.sitekey = e.sitekey;
        I.file = 'checkbox';
        var var_274 = e.size || P.compact;
        P.size = var_274;
        var var_275 = e.theme || P.theme;
        P.theme = var_275;
        if (e.endpoint !== undefined && 'undefined' !== e.endpoint) {
            P.endpoint = e.endpoint;
        }
        if (e.reportapi !== undefined && 'undefined' !== e.reportapi) {
            P.reportapi = e.reportapi;
        }
        if (e.assethost !== undefined && 'undefined' !== e.assethost) {
            P.assethost = e.assethost;
        }
        if (e.imghost !== undefined && 'undefined' !== e.imghost) {
            P.imghost = e.imghost;
        }
        if (e.hl !== undefined && 'undefined' !== e.hl) {
            P.language = e.hl;
            $.setLocale(e.hl);
        }
        if (e.tplinks !== undefined && 'undefined' !== e.tplinks) {
            P.tplinks = e.tplinks;
        }
    }(st);
    if (st.sentry) {
        ve();
    }
    var ct = me.createChat(window.parent, st.id);
    ct.listen('checkbox-translate', at.translate);
    ct.listen('checkbox-tick', at.tick);
    (function dt() {
        at.checkSiteConfig().then(arg_347);
        function arg_347(e) {
            if (e.endpoint && !st.endpoint) {
                P.endpoint = P.endpointOverride = e.endpoint;
                var var_276 = void dt();
                return var_276;
            }
            if (P.endpointOverride && !e.endpoint) {
                e.endpoint = P.endpointOverride;
            }
            ct.send('checkbox-setup', e);
        }
    }());
    (function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        if (true !== ue && 'interactive' !== document.readyState && 'loaded' !== document.readyState && 'complete' !== document.readyState) {
            var arg_348 = {
                fn: e,
                args: t
            };
            se.push(arg_348);
            if (false === ce) {
                if (document.addEventListener) {
                    document.addEventListener('DOMContentLoaded', he);
                    window.addEventListener('load', he);
                } else {
                    document.attachEvent('onreadystatechange', le);
                    window.attachEvent('onload', he);
                }
                ce = true;
            }
        } else {
            setTimeout(arg_349, 1);
            function arg_349() {
                e(t);
            }
        }
    }(arg_3));
    it.then(arg_4);
    function e(e) {
        var t = this.constructor;
        var var_1 = this.then(arg_5, arg_6);
        return var_1;
        function arg_5(n) {
            var arg_7 = e();
            var var_2 = t.resolve(arg_7).then(arg_8);
            return var_2;
            function arg_8() {
                return n;
            }
        }
        function arg_6(n) {
            var arg_9 = e();
            var var_3 = t.resolve(arg_9).then(arg_10);
            return var_3;
            function arg_10() {
                var var_4 = t.reject(n);
                return var_4;
            }
        }
    }
    function n() {
    }
    function r(e) {
        if (!(this instanceof r)) {
            throw new TypeError('Promises must be constructed via new');
        }
        if ('function' != typeof e) {
            throw new TypeError('not a function');
        }
        this._state = 0;
        this._handled = false;
        this._value = undefined;
        this._deferreds = [];
        u(e, this);
    }
    function i(e, t) {
        for (; 3 === e._state;) {
            e = e._value;
        }
        if (0 !== e._state) {
            e._handled = true;
            r._immediateFn(arg_11);
            function arg_11() {
                var n = null;
                if (1 === e._state) {
                    n = t.onFulfilled;
                } else {
                    n = t.onRejected;
                }
                if (null !== n) {
                    var r;
                    try {
                        r = n(e._value);
                    } catch (i) {
                        var var_5 = void a(t.promise, i);
                        return var_5;
                    }
                    o(t.promise, r);
                } else {
                    (1 === e._state ? o : a)(t.promise, e._value);
                }
            }
        } else {
            e._deferreds.push(t);
        }
    }
    function o(e, t) {
        try {
            if (t === e) {
                throw new TypeError('A promise cannot be resolved with itself.');
            }
            if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof r) {
                    e._state = 3;
                    e._value = t;
                    var var_6 = void s(e);
                    return var_6;
                }
                if ('function' == typeof n) {
                    i = n;
                    o = t;
                    var var_7 = void u(arg_12, e);
                    return var_7;
                    function arg_12() {
                        i.apply(o, arguments);
                    }
                }
            }
            e._state = 1;
            e._value = t;
            s(e);
        } catch (c) {
            a(e, c);
        }
        var i;
        var o;
    }
    function a(e, t) {
        e._state = 2;
        e._value = t;
        s(e);
    }
    function s(e) {
        if (2 === e._state && 0 === e._deferreds.length) {
            r._immediateFn(arg_13);
            function arg_13() {
                if (!e._handled) {
                    r._unhandledRejectionFn(e._value);
                }
            }
        }
        var t = 0, n = e._deferreds.length;;
        for (; t < n; t++) {
            i(e, e._deferreds[t]);
        }
        e._deferreds = null;
    }
    function c(e, t, n) {
        this.onFulfilled = 'function' == typeof e ? e : null;
        this.onRejected = 'function' == typeof t ? t : null;
        this.promise = n;
    }
    function u(e, t) {
        var n = false;
        try {
            e(arg_14, arg_15);
            function arg_14(e) {
                if (!n) {
                    n = true;
                    o(t, e);
                }
            }
            function arg_15(e) {
                if (!n) {
                    n = true;
                    a(t, e);
                }
            }
        } catch (r) {
            if (n) {
                return;
            }
            n = true;
            a(t, r);
        }
    }
    function w() {
        var e = this;
        this._bottom = 0;
        this._top = 0;
        this.storage = {};
        this.add = function (t) {
            e.storage[e._top] = t;
            e._top++;
            return t;
        };
        this.remove = function () {
            if (!e.empty()) {
                var t = e._bottom;
                var n = e.storage[t];
                e.storage[t] = null;
                e._bottom++;
                return n;
            }
        };
        this.empty = function () {
            var var_27 = e._top === e._bottom;
            return var_27;
        };
        this.size = function () {
            var var_28 = e._top - e._bottom;
            return var_28;
        };
    }
    function arg_0() {
        var var_29 = function e(t, n, r) {
            var o = 'function' == typeof require && require, a = 0;;
            for (; a < r.length; a++) {
                i(r[a]);
            }
            return i;
            function i(a, s) {
                if (!n[a]) {
                    if (!t[a]) {
                        var c = 'function' == typeof require && require;
                        if (!s && c) {
                            var var_30 = c(a, true);
                            return var_30;
                        }
                        if (o) {
                            var var_31 = o(a, true);
                            return var_31;
                        }
                        var arg_43 = 'Cannot find module \'' + a + '\'';
                        var u = new Error(arg_43);
                        throw u.code = 'MODULE_NOT_FOUND', u;
                    }
                    var l = n[a] = { exports: {} };
                    t[a][0].call(l.exports, arg_42, l, l.exports, e, t, n, r);
                    function arg_42(e) {
                        var n = t[a][1][e];
                        var arg_44 = n || e;
                        var var_32 = i(arg_44);
                        return var_32;
                    }
                }
                return n[a].exports;
            }
        }({
            1: [
                function (e, t, n) {
                    r.prototype = new Error();
                    r.prototype.constructor = r;
                    t.exports = r;
                    function r(e) {
                        this.name = 'RavenConfigError';
                        this.message = e;
                    }
                },
                {}
            ],
            2: [
                function (e, t, n) {
                    var r = e(5);
                    t.exports = {
                        wrapMethod: function (e, t, n) {
                            var i = e[t];
                            var o = e;
                            if (t in e) {
                                var a = null;
                                if ('warn' === t) {
                                    a = 'warning';
                                } else {
                                    a = t;
                                }
                                e[t] = function () {
                                    var e = [].slice.call(arguments);
                                    var s = r.safeJoin(e, ' ');
                                    var c = {
                                        level: a,
                                        logger: 'console',
                                        extra: { arguments: e }
                                    };
                                    if ('assert' === t) {
                                        if (false === e[0]) {
                                            s = 'Assertion failed: ' + (r.safeJoin(e.slice(1), ' ') || 'console.assert');
                                            c.extra.arguments = e.slice(1);
                                            if (n) {
                                                n(s, c);
                                            }
                                        }
                                    } else {
                                        if (n) {
                                            n(s, c);
                                        }
                                    }
                                    if (i) {
                                        Function.prototype.apply.call(i, o, e);
                                    }
                                };
                            }
                        }
                    };
                },
                { 5: 5 }
            ],
            3: [
                function (e, t, n) {
                    var arg_45 = null;
                    if ('undefined' != typeof global) {
                        arg_45 = global;
                    } else {
                        if ('undefined' != typeof self) {
                            arg_45 = self;
                        } else {
                            if ('undefined' != typeof window) {
                                arg_45 = window;
                            } else {
                                arg_45 = {};
                            }
                        }
                    }
                    (function (n) {
                        var a = e(6);
                        var s = e(7);
                        var c = e(8);
                        var u = e(1);
                        var l = e(5);
                        var h = l.isErrorEvent;
                        var d = l.isDOMError;
                        var f = l.isDOMException;
                        var p = l.isError;
                        var m = l.isObject;
                        var v = l.isPlainObject;
                        var g = l.isUndefined;
                        var y = l.isFunction;
                        var b = l.isString;
                        var w = l.isArray;
                        var k = l.isEmptyObject;
                        var x = l.each;
                        var E = l.objectMerge;
                        var _ = l.truncate;
                        var S = l.objectFrozen;
                        var C = l.hasKey;
                        var O = l.joinRegExp;
                        var j = l.urlencode;
                        var A = l.uuid4;
                        var T = l.htmlTreeAsString;
                        var I = l.isSameException;
                        var P = l.isSameStacktrace;
                        var M = l.parseUrl;
                        var L = l.fill;
                        var R = l.supportsFetch;
                        var B = l.supportsReferrerPolicy;
                        var D = l.serializeKeysForMessage;
                        var N = l.serializeException;
                        var U = l.sanitize;
                        var F = e(2).wrapMethod;
                        var z = 'source protocol user pass host port path'.split(' ');
                        var W = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
                        var q = null;
                        if ('undefined' != typeof window) {
                            q = window;
                        } else {
                            if (void 0 !== n) {
                                q = n;
                            } else {
                                if ('undefined' != typeof self) {
                                    q = self;
                                } else {
                                    q = {};
                                }
                            }
                        }
                        var H = q.document;
                        var X = q.navigator;
                        o.prototype = {
                            VERSION: '3.27.2',
                            debug: false,
                            TraceKit: a,
                            config: function (e, t) {
                                var n = this;
                                if (n.g) {
                                    this.z('error', 'Error: Raven has already been configured');
                                    var var_38 = n;
                                    return var_38;
                                }
                                if (!e) {
                                    return n;
                                }
                                var r = n.k;
                                if (t) {
                                    x(t, arg_48);
                                    function arg_48(e, t) {
                                        if ('tags' === e || 'extra' === e || 'user' === e) {
                                            n.j[e] = t;
                                        } else {
                                            r[e] = t;
                                        }
                                    }
                                }
                                n.setDSN(e);
                                r.ignoreErrors.push(/^Script error\.?$/);
                                r.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/);
                                r.ignoreErrors = O(r.ignoreErrors);
                                var var_36 = !!r.ignoreUrls.length && O(r.ignoreUrls);
                                r.ignoreUrls = var_36;
                                var var_37 = !!r.whitelistUrls.length && O(r.whitelistUrls);
                                r.whitelistUrls = var_37;
                                r.includePaths = O(r.includePaths);
                                var arg_47 = r.maxBreadcrumbs || 100;
                                var arg_46 = Math.min(arg_47, 100);
                                r.maxBreadcrumbs = Math.max(0, arg_46);
                                var i = {
                                    xhr: true,
                                    console: true,
                                    dom: true,
                                    location: true,
                                    sentry: true
                                };
                                var o = r.autoBreadcrumbs;
                                if ('[object Object]' === {}.toString.call(o)) {
                                    o = E(i, o);
                                } else {
                                    if (false !== o) {
                                        o = i;
                                    }
                                }
                                r.autoBreadcrumbs = o;
                                var s = { tryCatch: true };
                                var c = r.instrument;
                                if ('[object Object]' === {}.toString.call(c)) {
                                    c = E(s, c);
                                } else {
                                    if (false !== c) {
                                        c = s;
                                    }
                                }
                                r.instrument = c;
                                a.collectWindowErrors = !!r.collectWindowErrors;
                                return n;
                            },
                            install: function () {
                                var e = this;
                                if (e.isSetup() && !e.n) {
                                    a.report.subscribe(arg_49);
                                    if (e.k.captureUnhandledRejections) {
                                        e.B();
                                    }
                                    e.C();
                                    if (e.k.instrument && e.k.instrument.tryCatch) {
                                        e.D();
                                    }
                                    if (e.k.autoBreadcrumbs) {
                                        e.E();
                                    }
                                    e.F();
                                    e.n = true;
                                    function arg_49() {
                                        e.A.apply(e, arguments);
                                    }
                                }
                                Error.stackTraceLimit = e.k.stackTraceLimit;
                                var var_39 = this;
                                return var_39;
                            },
                            setDSN: function (e) {
                                var t = this;
                                var n = t.G(e);
                                var r = n.path.lastIndexOf('/');
                                var i = n.path.substr(1, r);
                                t.H = e;
                                t.h = n.user;
                                var var_40 = n.pass && n.pass.substr(1);
                                t.I = var_40;
                                var arg_50 = r + 1;
                                t.i = n.path.substr(arg_50);
                                t.g = t.J(n);
                                t.K = t.g + '/' + i + 'api/' + t.i + '/store/';
                                this.y();
                            },
                            context: function (e, t, n) {
                                if (y(e)) {
                                    var var_42 = t || [];
                                    n = var_42;
                                    t = e;
                                    e = {};
                                }
                                var var_41 = this.wrap(e, t).apply(this, n);
                                return var_41;
                            },
                            wrap: function (e, t, n) {
                                var i = this;
                                if (g(t) && !y(e)) {
                                    return e;
                                }
                                if (y(e)) {
                                    t = e;
                                    e = void 0;
                                }
                                if (!y(t)) {
                                    return t;
                                }
                                try {
                                    if (t.M) {
                                        return t;
                                    }
                                    if (t.N) {
                                        return t.N;
                                    }
                                } catch (o) {
                                    return t;
                                }
                                for (var a in t)
                                    C(t, a) && (r[a] = t[a]);
                                r.prototype = t.prototype;
                                t.N = r;
                                r.M = true;
                                r.O = t;
                                return r;
                                function r() {
                                    var r = [];
                                    var o = arguments.length;
                                    var a = !e || e && false !== e.deep;
                                    if (n && y(n)) {
                                        n.apply(this, arguments);
                                    }
                                    for (; o--;) {
                                        r[o] = a ? i.wrap(e, arguments[o]) : arguments[o];
                                    }
                                    try {
                                        var var_43 = t.apply(this, r);
                                        return var_43;
                                    } catch (s) {
                                        throw i.L(), i.captureException(s, e), s;
                                    }
                                }
                            },
                            uninstall: function () {
                                a.report.uninstall();
                                this.P();
                                this.Q();
                                this.R();
                                this.S();
                                Error.stackTraceLimit = this.o;
                                this.n = false;
                                var var_44 = this;
                                return var_44;
                            },
                            T: function (e) {
                                this.z('debug', 'Raven caught unhandled promise rejection:', e);
                                var arg_51 = {
                                    mechanism: {
                                        type: 'onunhandledrejection',
                                        handled: false
                                    }
                                };
                                this.captureException(e.reason, arg_51);
                            },
                            B: function () {
                                this.T = this.T.bind(this);
                                if (q.addEventListener) {
                                    q.addEventListener('unhandledrejection', this.T);
                                }
                                var var_45 = this;
                                return var_45;
                            },
                            P: function () {
                                if (q.removeEventListener) {
                                    q.removeEventListener('unhandledrejection', this.T);
                                }
                                var var_46 = this;
                                return var_46;
                            },
                            captureException: function (e, t) {
                                var arg_52 = { trimHeadFrames: 0 };
                                var arg_53 = t || {};
                                t = E(arg_52, arg_53);
                                if (h(e) && e.error) {
                                    e = e.error;
                                } else {
                                    if (d(e) || f(e)) {
                                        var n = e.name || (d(e) ? 'DOMError' : 'DOMException');
                                        var r = null;
                                        if (e.message) {
                                            r = n + ': ' + e.message;
                                        } else {
                                            r = n;
                                        }
                                        var arg_55 = {
                                            stacktrace: true,
                                            trimHeadFrames: t.trimHeadFrames + 1
                                        };
                                        var arg_54 = E(t, arg_55);
                                        var var_48 = this.captureMessage(r, arg_54);
                                        return var_48;
                                    }
                                    if (p(e)) {
                                        e = e;
                                    } else {
                                        if (!v(e)) {
                                            var arg_58 = {
                                                stacktrace: true,
                                                trimHeadFrames: t.trimHeadFrames + 1
                                            };
                                            var arg_57 = E(t, arg_58);
                                            var var_49 = this.captureMessage(e, arg_57);
                                            return var_49;
                                        }
                                        t = this.U(t, e);
                                        var arg_56 = t.message;
                                        e = new Error(arg_56);
                                    }
                                }
                                this.d = e;
                                try {
                                    var i = a.computeStackTrace(e);
                                    this.V(i, t);
                                } catch (o) {
                                    if (e !== o) {
                                        throw o;
                                    }
                                }
                                var var_47 = this;
                                return var_47;
                            },
                            U: function (e, t) {
                                var n = Object.keys(t).sort();
                                var arg_59 = {
                                    message: 'Non-Error exception captured with keys: ' + D(n),
                                    fingerprint: [c(n)],
                                    extra: e.extra || {}
                                };
                                var r = E(e, arg_59);
                                r.extra.W = N(t);
                                return r;
                            },
                            captureMessage: function (e, t) {
                                if (!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(e)) {
                                    var n;
                                    var arg_60 = { message: e += '' };
                                    var r = E(arg_60, t = t || {});
                                    try {
                                        throw new Error(e);
                                    } catch (i) {
                                        n = i;
                                    }
                                    n.name = null;
                                    var o = a.computeStackTrace(n);
                                    var s = w(o.stack) && o.stack[1];
                                    if (s && 'Raven.captureException' === s.func) {
                                        s = o.stack[2];
                                    }
                                    var c = s && s.url || '';
                                    if ((!this.k.ignoreUrls.test || !this.k.ignoreUrls.test(c)) && (!this.k.whitelistUrls.test || this.k.whitelistUrls.test(c))) {
                                        if (this.k.stacktrace || t.stacktrace || '' === r.message) {
                                            r.fingerprint = null == r.fingerprint ? e : r.fingerprint;
                                            (t = E({ trimHeadFrames: 0 }, t)).trimHeadFrames += 1;
                                            var u = this.X(o, t);
                                            r.stacktrace = { frames: u.reverse() };
                                        }
                                        if (r.fingerprint) {
                                            r.fingerprint = w(r.fingerprint) ? r.fingerprint : [r.fingerprint];
                                        }
                                        this.Y(r);
                                        var var_50 = this;
                                        return var_50;
                                    }
                                }
                            },
                            captureBreadcrumb: function (e) {
                                var arg_61 = { timestamp: r() / 1000 };
                                var t = E(arg_61, e);
                                if (y(this.k.breadcrumbCallback)) {
                                    var n = this.k.breadcrumbCallback(t);
                                    if (m(n) && !k(n)) {
                                        t = n;
                                    } else {
                                        if (false === n) {
                                            var var_52 = this;
                                            return var_52;
                                        }
                                    }
                                }
                                this.u.push(t);
                                if (this.u.length > this.k.maxBreadcrumbs) {
                                    this.u.shift();
                                }
                                var var_51 = this;
                                return var_51;
                            },
                            addPlugin: function (e) {
                                var t = [].slice.call(arguments, 1);
                                var arg_62 = [
                                    e,
                                    t
                                ];
                                this.r.push(arg_62);
                                if (this.n) {
                                    this.F();
                                }
                                var var_53 = this;
                                return var_53;
                            },
                            setUserContext: function (e) {
                                this.j.user = e;
                                var var_54 = this;
                                return var_54;
                            },
                            setExtraContext: function (e) {
                                this.Z('extra', e);
                                var var_55 = this;
                                return var_55;
                            },
                            setTagsContext: function (e) {
                                this.Z('tags', e);
                                var var_56 = this;
                                return var_56;
                            },
                            clearContext: function () {
                                this.j = {};
                                var var_57 = this;
                                return var_57;
                            },
                            getContext: function () {
                                var arg_63 = s(this.j);
                                var var_58 = JSON.parse(arg_63);
                                return var_58;
                            },
                            setEnvironment: function (e) {
                                this.k.environment = e;
                                var var_59 = this;
                                return var_59;
                            },
                            setRelease: function (e) {
                                this.k.release = e;
                                var var_60 = this;
                                return var_60;
                            },
                            setDataCallback: function (e) {
                                var t = this.k.dataCallback;
                                this.k.dataCallback = i(t, e);
                                var var_61 = this;
                                return var_61;
                            },
                            setBreadcrumbCallback: function (e) {
                                var t = this.k.breadcrumbCallback;
                                this.k.breadcrumbCallback = i(t, e);
                                var var_62 = this;
                                return var_62;
                            },
                            setShouldSendCallback: function (e) {
                                var t = this.k.shouldSendCallback;
                                this.k.shouldSendCallback = i(t, e);
                                var var_63 = this;
                                return var_63;
                            },
                            setTransport: function (e) {
                                this.k.transport = e;
                                var var_64 = this;
                                return var_64;
                            },
                            lastException: function () {
                                return this.d;
                            },
                            lastEventId: function () {
                                return this.f;
                            },
                            isSetup: function () {
                                var var_65 = !(!this.a || !this.g && (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = true, this.z('error', 'Error: Raven has not been configured.')), 1));
                                return var_65;
                            },
                            afterLoad: function () {
                                var e = q.RavenConfig;
                                if (e) {
                                    this.config(e.dsn, e.config).install();
                                }
                            },
                            showReportDialog: function (e) {
                                if (H) {
                                    if (!(e = E({
                                            eventId: this.lastEventId(),
                                            dsn: this.H,
                                            user: this.j.user || {}
                                        }, e)).eventId) {
                                        throw new u('Missing eventId');
                                    }
                                    if (!e.dsn) {
                                        throw new u('Missing DSN');
                                    }
                                    var t = encodeURIComponent;
                                    var n = [];
                                    for (var r in e)
                                        if ('user' === r) {
                                            var i = e.user;
                                            if (i.name) {
                                                var arg_65 = 'name=' + t(i.name);
                                                n.push(arg_65);
                                            }
                                            if (i.email) {
                                                var arg_66 = 'email=' + t(i.email);
                                                n.push(arg_66);
                                            }
                                        } else
                                            n.push(t(r) + '=' + t(e[r]));
                                    var arg_64 = this.G(e.dsn);
                                    var o = this.J(arg_64);
                                    var a = H.createElement('script');
                                    a.async = true;
                                    a.src = o + '/api/embed/error-page/?' + n.join('&');
                                    (H.head || H.body).appendChild(a);
                                }
                            },
                            L: function () {
                                var e = this;
                                this.m += 1;
                                setTimeout(arg_67);
                                function arg_67() {
                                    e.m -= 1;
                                }
                            },
                            $: function (e, t) {
                                var n;
                                var r;
                                if (this.b) {
                                    for (r in (t = t || {}, e = 'raven' + e.substr(0, 1).toUpperCase() + e.substr(1), H.createEvent ? (n = H.createEvent('HTMLEvents')).initEvent(e, true, true) : (n = H.createEventObject()).eventType = e, t))
                                        C(t, r) && (n[r] = t[r]);
                                    if (H.createEvent) {
                                        H.dispatchEvent(n);
                                    } else {
                                        try {
                                            var arg_68 = 'on' + n.eventType.toLowerCase();
                                            H.fireEvent(arg_68, n);
                                        } catch (i) {
                                        }
                                    }
                                }
                            },
                            _: function (e) {
                                var t = this;
                                return var_66;
                                function var_66(n) {
                                    t.aa = null;
                                    if (t.v !== n) {
                                        var r;
                                        t.v = n;
                                        try {
                                            r = T(n.target);
                                        } catch (i) {
                                            r = '<unknown>';
                                        }
                                        var arg_69 = {
                                            category: 'ui.' + e,
                                            message: r
                                        };
                                        t.captureBreadcrumb(arg_69);
                                    }
                                }
                            },
                            ba: function () {
                                var e = this;
                                return var_67;
                                function var_67(t) {
                                    var n;
                                    try {
                                        n = t.target;
                                    } catch (i) {
                                        return;
                                    }
                                    var r = n && n.tagName;
                                    if (r && ('INPUT' === r || 'TEXTAREA' === r || n.isContentEditable)) {
                                        var o = e.aa;
                                        if (!o) {
                                            e._('input')(t);
                                        }
                                        clearTimeout(o);
                                        e.aa = setTimeout(arg_70, 1000);
                                        function arg_70() {
                                            e.aa = null;
                                        }
                                    }
                                }
                            },
                            ca: function (e, t) {
                                var n = M(this.w.href);
                                var r = M(t);
                                var i = M(e);
                                this.x = t;
                                if (n.protocol === r.protocol && n.host === r.host) {
                                    t = r.relative;
                                }
                                if (n.protocol === i.protocol && n.host === i.host) {
                                    e = i.relative;
                                }
                                var arg_71 = {
                                    category: 'navigation',
                                    data: {
                                        to: t,
                                        from: e
                                    }
                                };
                                this.captureBreadcrumb(arg_71);
                            },
                            C: function () {
                                var e = this;
                                e.da = Function.prototype.toString;
                                Function.prototype.toString = function () {
                                    var var_68 = null;
                                    if ('function' == typeof this && this.M) {
                                        var_68 = e.da.apply(this.O, arguments);
                                    } else {
                                        var_68 = e.da.apply(this, arguments);
                                    }
                                    return var_68;
                                };
                            },
                            Q: function () {
                                if (this.da) {
                                    Function.prototype.toString = this.da;
                                }
                            },
                            D: function () {
                                var n = this;
                                var r = n.t;
                                var i = this.k.autoBreadcrumbs;
                                L(q, 'setTimeout', e, r);
                                L(q, 'setInterval', e, r);
                                if (q.requestAnimationFrame) {
                                    L(q, 'requestAnimationFrame', arg_78, r);
                                    function arg_78(e) {
                                        return var_77;
                                        function var_77(t) {
                                            var arg_80 = {
                                                mechanism: {
                                                    type: 'instrument',
                                                    data: {
                                                        'function': 'requestAnimationFrame',
                                                        handler: e && e.name || '<anonymous>'
                                                    }
                                                }
                                            };
                                            var arg_79 = n.wrap(arg_80, t);
                                            var var_78 = e(arg_79);
                                            return var_78;
                                        }
                                    }
                                }
                                var o = [
                                        'EventTarget',
                                        'Window',
                                        'Node',
                                        'ApplicationCache',
                                        'AudioTrackList',
                                        'ChannelMergerNode',
                                        'CryptoOperation',
                                        'EventSource',
                                        'FileReader',
                                        'HTMLUnknownElement',
                                        'IDBDatabase',
                                        'IDBRequest',
                                        'IDBTransaction',
                                        'KeyOperation',
                                        'MediaController',
                                        'MessagePort',
                                        'ModalWindow',
                                        'Notification',
                                        'SVGElementInstance',
                                        'Screen',
                                        'TextTrack',
                                        'TextTrackCue',
                                        'TextTrackList',
                                        'WebSocket',
                                        'WebSocketWorker',
                                        'Worker',
                                        'XMLHttpRequest',
                                        'XMLHttpRequestEventTarget',
                                        'XMLHttpRequestUpload'
                                    ], a = 0;;
                                for (; a < o.length; a++) {
                                    t(o[a]);
                                }
                                function e(e) {
                                    return var_69;
                                    function var_69(t, r) {
                                        var i = new Array(arguments.length), o = 0;;
                                        for (; o < i.length; ++o) {
                                            i[o] = arguments[o];
                                        }
                                        var a = i[0];
                                        if (y(a)) {
                                            var arg_72 = {
                                                mechanism: {
                                                    type: 'instrument',
                                                    data: { 'function': e.name || '<anonymous>' }
                                                }
                                            };
                                            i[0] = n.wrap(arg_72, a);
                                        }
                                        var var_70 = null;
                                        if (e.apply) {
                                            var_70 = e.apply(this, i);
                                        } else {
                                            var_70 = e(i[0], i[1]);
                                        }
                                        return var_70;
                                    }
                                }
                                function t(e) {
                                    var t = q[e] && q[e].prototype;
                                    if (t && t.hasOwnProperty && t.hasOwnProperty('addEventListener')) {
                                        L(t, 'addEventListener', arg_73, r);
                                        L(t, 'removeEventListener', arg_74, r);
                                        function arg_73(t) {
                                            return var_71;
                                            function var_71(r, o, a, s) {
                                                try {
                                                    if (o && o.handleEvent) {
                                                        var arg_77 = {
                                                            mechanism: {
                                                                type: 'instrument',
                                                                data: {
                                                                    target: e,
                                                                    'function': 'handleEvent',
                                                                    handler: o && o.name || '<anonymous>'
                                                                }
                                                            }
                                                        };
                                                        o.handleEvent = n.wrap(arg_77, o.handleEvent);
                                                    }
                                                } catch (c) {
                                                }
                                                var u;
                                                var l;
                                                var h;
                                                if (i && i.dom && ('EventTarget' === e || 'Node' === e)) {
                                                    l = n._('click');
                                                    h = n.ba();
                                                    u = function (e) {
                                                        if (e) {
                                                            var t;
                                                            try {
                                                                t = e.type;
                                                            } catch (n) {
                                                                return;
                                                            }
                                                            var var_73 = null;
                                                            if ('click' === t) {
                                                                var_73 = l(e);
                                                            } else {
                                                                if ('keypress' === t) {
                                                                    var_73 = h(e);
                                                                } else {
                                                                    var_73 = void 0;
                                                                }
                                                            }
                                                            return var_73;
                                                        }
                                                    };
                                                }
                                                var arg_76 = {
                                                    mechanism: {
                                                        type: 'instrument',
                                                        data: {
                                                            target: e,
                                                            'function': 'addEventListener',
                                                            handler: o && o.name || '<anonymous>'
                                                        }
                                                    }
                                                };
                                                var arg_75 = n.wrap(arg_76, o, u);
                                                var var_72 = t.call(this, r, arg_75, a, s);
                                                return var_72;
                                            }
                                        }
                                        function arg_74(e) {
                                            return var_74;
                                            function var_74(t, n, r, i) {
                                                try {
                                                    var var_76 = n && (n.N ? n.N : n);
                                                    n = var_76;
                                                } catch (o) {
                                                }
                                                var var_75 = e.call(this, t, n, r, i);
                                                return var_75;
                                            }
                                        }
                                    }
                                }
                            },
                            E: function () {
                                var t = this;
                                var n = this.k.autoBreadcrumbs;
                                var r = t.t;
                                if (n.xhr && 'XMLHttpRequest' in q) {
                                    var i = q.XMLHttpRequest && q.XMLHttpRequest.prototype;
                                    L(i, 'open', arg_83, r);
                                    L(i, 'send', arg_84, r);
                                    function arg_83(e) {
                                        return var_80;
                                        function var_80(n, r) {
                                            if (b(r) && -1 === r.indexOf(t.h)) {
                                                this.ea = {
                                                    method: n,
                                                    url: r,
                                                    status_code: null
                                                };
                                            }
                                            var var_81 = e.apply(this, arguments);
                                            return var_81;
                                        }
                                    }
                                    function arg_84(n) {
                                        return var_82;
                                        function var_82() {
                                            var i = this, o = [
                                                    'onload',
                                                    'onerror',
                                                    'onprogress'
                                                ], a = 0;;
                                            for (; a < o.length; a++) {
                                                e(o[a], i);
                                            }
                                            if ('onreadystatechange' in i && y(i.onreadystatechange)) {
                                                L(i, 'onreadystatechange', arg_86);
                                                function arg_86(e) {
                                                    var arg_87 = {
                                                        mechanism: {
                                                            type: 'instrument',
                                                            data: {
                                                                'function': 'onreadystatechange',
                                                                handler: e && e.name || '<anonymous>'
                                                            }
                                                        }
                                                    };
                                                    var var_84 = t.wrap(arg_87, e, r);
                                                    return var_84;
                                                }
                                            } else {
                                                i.onreadystatechange = r;
                                            }
                                            var var_83 = n.apply(this, arguments);
                                            return var_83;
                                            function r() {
                                                if (i.ea && 4 === i.readyState) {
                                                    try {
                                                        i.ea.status_code = i.status;
                                                    } catch (e) {
                                                    }
                                                    var arg_85 = {
                                                        type: 'http',
                                                        category: 'xhr',
                                                        data: i.ea
                                                    };
                                                    t.captureBreadcrumb(arg_85);
                                                }
                                            }
                                        }
                                    }
                                }
                                if (n.xhr && R()) {
                                    L(q, 'fetch', arg_88, r);
                                    function arg_88(e) {
                                        return var_85;
                                        function var_85() {
                                            var n = new Array(arguments.length), r = 0;;
                                            for (; r < n.length; ++r) {
                                                n[r] = arguments[r];
                                            }
                                            var i;
                                            var o = n[0];
                                            var a = 'GET';
                                            if ('string' == typeof o) {
                                                i = o;
                                            } else {
                                                if ('Request' in q && o instanceof q.Request) {
                                                    i = o.url;
                                                    if (o.method) {
                                                        a = o.method;
                                                    }
                                                } else {
                                                    i = '' + o;
                                                }
                                            }
                                            if (-1 !== i.indexOf(t.h)) {
                                                var var_87 = e.apply(this, n);
                                                return var_87;
                                            }
                                            if (n[1] && n[1].method) {
                                                a = n[1].method;
                                            }
                                            var s = {
                                                method: a,
                                                url: i,
                                                status_code: null
                                            };
                                            var var_86 = e.apply(this, n).then(arg_89)['catch'](arg_90);
                                            return var_86;
                                            function arg_89(e) {
                                                s.status_code = e.status;
                                                var arg_91 = {
                                                    type: 'http',
                                                    category: 'fetch',
                                                    data: s
                                                };
                                                t.captureBreadcrumb(arg_91);
                                                return e;
                                            }
                                            function arg_90(e) {
                                                throw t.captureBreadcrumb({
                                                    type: 'http',
                                                    category: 'fetch',
                                                    data: s,
                                                    level: 'error'
                                                }), e;
                                            }
                                        }
                                    }
                                }
                                if (n.dom && this.b) {
                                    if (H.addEventListener) {
                                        var arg_92 = t._('click');
                                        H.addEventListener('click', arg_92, false);
                                        var arg_93 = t.ba();
                                        H.addEventListener('keypress', arg_93, false);
                                    } else {
                                        if (H.attachEvent) {
                                            var arg_94 = t._('click');
                                            H.attachEvent('onclick', arg_94);
                                            var arg_95 = t.ba();
                                            H.attachEvent('onkeypress', arg_95);
                                        }
                                    }
                                }
                                var o = q.chrome;
                                var a = !(o && o.app && o.app.runtime) && q.history && q.history.pushState && q.history.replaceState;
                                if (n.location && a) {
                                    var s = q.onpopstate;
                                    q.onpopstate = function () {
                                        var e = t.w.href;
                                        t.ca(t.x, e);
                                        if (s) {
                                            var var_88 = s.apply(this, arguments);
                                            return var_88;
                                        }
                                    };
                                    L(q.history, 'pushState', c, r);
                                    L(q.history, 'replaceState', c, r);
                                    function c(e) {
                                        return var_89;
                                        function var_89() {
                                            var n = null;
                                            if (arguments.length > 2) {
                                                n = arguments[2];
                                            } else {
                                                n = void 0;
                                            }
                                            if (n) {
                                                var arg_96 = n + '';
                                                t.ca(t.x, arg_96);
                                            }
                                            var var_90 = e.apply(this, arguments);
                                            return var_90;
                                        }
                                    }
                                }
                                if (n.console && 'console' in q && console.log) {
                                    var arg_97 = [
                                        'debug',
                                        'info',
                                        'warn',
                                        'error',
                                        'log'
                                    ];
                                    x(arg_97, arg_98);
                                    function u(e, n) {
                                        var arg_99 = {
                                            message: e,
                                            level: n.level,
                                            category: 'console'
                                        };
                                        t.captureBreadcrumb(arg_99);
                                    }
                                    function arg_98(e, t) {
                                        F(console, t, u);
                                    }
                                }
                                function e(e, n) {
                                    if (e in n && y(n[e])) {
                                        L(n, e, arg_81);
                                        function arg_81(n) {
                                            var arg_82 = {
                                                mechanism: {
                                                    type: 'instrument',
                                                    data: {
                                                        'function': e,
                                                        handler: n && n.name || '<anonymous>'
                                                    }
                                                }
                                            };
                                            var var_79 = t.wrap(arg_82, n);
                                            return var_79;
                                        }
                                    }
                                }
                            },
                            R: function () {
                                var e;;
                                for (; this.t.length;) {
                                    var t = (e = this.t.shift())[0];
                                    var n = e[1];
                                    var r = e[2];
                                    t[n] = r;
                                }
                            },
                            S: function () {
                                for (var e in this.q)
                                    this.p[e] = this.q[e];
                            },
                            F: function () {
                                var e = this;
                                x(this.r, arg_100);
                                function arg_100(t, n) {
                                    var r = n[0];
                                    var i = n[1];
                                    var arg_101 = [e].concat(i);
                                    r.apply(e, arg_101);
                                }
                            },
                            G: function (e) {
                                var t = W.exec(e);
                                var n = {};
                                var r = 7;
                                try {
                                    for (; r--;) {
                                        var var_91 = t[r] || '';
                                        n[z[r]] = var_91;
                                    }
                                } catch (i) {
                                    throw new u('Invalid DSN: ' + e);
                                }
                                if (n.pass && !this.k.allowSecretKey) {
                                    throw new u('Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key');
                                }
                                return n;
                            },
                            J: function (e) {
                                var t = '//' + e.host + (e.port ? ':' + e.port : '');
                                if (e.protocol) {
                                    t = e.protocol + ':' + t;
                                }
                                return t;
                            },
                            A: function (e, t) {
                                var var_92 = t.mechanism || {
                                    type: 'onerror',
                                    handled: false
                                };
                                (t = t || {}).mechanism = var_92;
                                if (!this.m) {
                                    this.V(e, t);
                                }
                            },
                            V: function (e, t) {
                                var n = this.X(e, t);
                                var arg_102 = {
                                    stackInfo: e,
                                    options: t
                                };
                                this.$('handle', arg_102);
                                this.fa(e.name, e.message, e.url, e.lineno, n, t);
                            },
                            X: function (e, t) {
                                var n = this;
                                var r = [];
                                if (e.stack && e.stack.length && (x(e.stack, function (t, i) {
                                        var o = n.ga(i, e.url);
                                        if (o) {
                                            r.push(o);
                                        }
                                    }), t && t.trimHeadFrames)) {
                                    var i = 0;;
                                    for (; i < t.trimHeadFrames && i < r.length; i++) {
                                        r[i].in_app = false;
                                    }
                                }
                                var var_93 = r = r.slice(0, this.k.stackTraceLimit);
                                return var_93;
                            },
                            ga: function (e, t) {
                                var n = {
                                    filename: e.url,
                                    lineno: e.line,
                                    colno: e.column,
                                    'function': e.func || '?'
                                };
                                if (!e.url) {
                                    n.filename = t;
                                }
                                n.in_app = !(this.k.includePaths.test && !this.k.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n['function']) || /raven\.(min\.)?js$/.test(n.filename));
                                return n;
                            },
                            fa: function (e, t, n, r, i, o) {
                                var a;
                                var s = (e ? e + ': ' : '') + (t || '');
                                if ((!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(t) && !this.k.ignoreErrors.test(s)) && (i && i.length ? (n = i[0].filename || n, i.reverse(), a = { frames: i }) : n && (a = {
                                        frames: [{
                                                filename: n,
                                                lineno: r,
                                                in_app: true
                                            }]
                                    }), (!this.k.ignoreUrls.test || !this.k.ignoreUrls.test(n)) && (!this.k.whitelistUrls.test || this.k.whitelistUrls.test(n)))) {
                                    var arg_103 = {
                                        exception: {
                                            values: [{
                                                    type: e,
                                                    value: t,
                                                    stacktrace: a
                                                }]
                                        },
                                        transaction: n
                                    };
                                    var c = E(arg_103, o);
                                    var u = c.exception.values[0];
                                    if (null == u.type && '' === u.value) {
                                        u.value = 'Unrecoverable error caught';
                                    }
                                    if (!c.exception.mechanism && c.mechanism) {
                                        c.exception.mechanism = c.mechanism;
                                        delete c.mechanism;
                                    }
                                    var arg_104 = {
                                        type: 'generic',
                                        handled: true
                                    };
                                    var arg_105 = c.exception.mechanism || {};
                                    c.exception.mechanism = E(arg_104, arg_105);
                                    this.Y(c);
                                }
                            },
                            ha: function (e) {
                                var t = this.k.maxMessageLength;
                                if (e.message) {
                                    e.message = _(e.message, t);
                                }
                                if (e.exception) {
                                    var n = e.exception.values[0];
                                    n.value = _(n.value, t);
                                }
                                var r = e.request;
                                if (r) {
                                    if (r.url) {
                                        r.url = _(r.url, this.k.maxUrlLength);
                                    }
                                    if (r.Referer) {
                                        r.Referer = _(r.Referer, this.k.maxUrlLength);
                                    }
                                }
                                if (e.breadcrumbs && e.breadcrumbs.values) {
                                    this.ia(e.breadcrumbs);
                                }
                                return e;
                            },
                            ia: function (e) {
                                var t, n, r, i = [
                                        'to',
                                        'from',
                                        'url'
                                    ], o = 0;;
                                for (; o < e.values.length; ++o) {
                                    if ((n = e.values[o]).hasOwnProperty('data') && m(n.data) && !S(n.data)) {
                                        var arg_106 = {};
                                        r = E(arg_106, n.data);
                                        var a = 0;;
                                        for (; a < i.length; ++a) {
                                            t = i[a];
                                            if (r.hasOwnProperty(t) && r[t]) {
                                                r[t] = _(r[t], this.k.maxUrlLength);
                                            }
                                        }
                                        e.values[o].data = r;
                                    }
                                }
                            },
                            ja: function () {
                                if (this.c || this.b) {
                                    var e = {};
                                    if (this.c && X.userAgent) {
                                        e.headers = { 'User-Agent': X.userAgent };
                                    }
                                    if (q.location && q.location.href) {
                                        e.url = q.location.href;
                                    }
                                    if (this.b && H.referrer) {
                                        if (!e.headers) {
                                            e.headers = {};
                                        }
                                        e.headers.Referer = H.referrer;
                                    }
                                    return e;
                                }
                            },
                            y: function () {
                                this.ka = 0;
                                this.la = null;
                            },
                            ma: function () {
                                var var_94 = this.ka && r() - this.la < this.ka;
                                return var_94;
                            },
                            na: function (e) {
                                var t = this.e;
                                var var_95 = !(!t || e.message !== t.message || e.transaction !== t.transaction) && (e.stacktrace || t.stacktrace ? P(e.stacktrace, t.stacktrace) : e.exception || t.exception ? I(e.exception, t.exception) : !e.fingerprint && !t.fingerprint || Boolean(e.fingerprint && t.fingerprint) && JSON.stringify(e.fingerprint) === JSON.stringify(t.fingerprint));
                                return var_95;
                            },
                            oa: function (e) {
                                if (!this.ma()) {
                                    var t = e.status;
                                    if (400 === t || 401 === t || 429 === t) {
                                        var n;
                                        try {
                                            if (R()) {
                                                n = e.headers.get('Retry-After');
                                            } else {
                                                n = e.getResponseHeader('Retry-After');
                                            }
                                            n = 1000 * parseInt(n, 10);
                                        } catch (i) {
                                        }
                                        var var_96 = n || (2 * this.ka || 1000);
                                        this.ka = var_96;
                                        this.la = r();
                                    }
                                }
                            },
                            Y: function (e) {
                                var t = this.k;
                                var n = {
                                    project: this.i,
                                    logger: t.logger,
                                    platform: 'javascript'
                                };
                                var i = this.ja();
                                if (i) {
                                    n.request = i;
                                }
                                if (e.trimHeadFrames) {
                                    delete e.trimHeadFrames;
                                }
                                var arg_108 = {};
                                var arg_107 = E(arg_108, this.j.tags);
                                (e = E(n, e)).tags = E(arg_107, e.tags);
                                var arg_110 = {};
                                var arg_109 = E(arg_110, this.j.extra);
                                e.extra = E(arg_109, e.extra);
                                e.extra['session:duration'] = r() - this.s;
                                if (this.u && this.u.length > 0) {
                                    e.breadcrumbs = { values: [].slice.call(this.u, 0) };
                                }
                                if (this.j.user) {
                                    e.user = this.j.user;
                                }
                                if (t.environment) {
                                    e.environment = t.environment;
                                }
                                if (t.release) {
                                    e.release = t.release;
                                }
                                if (t.serverName) {
                                    e.server_name = t.serverName;
                                }
                                e = this.pa(e);
                                Object.keys(e).forEach(arg_111);
                                if (y(t.dataCallback)) {
                                    var var_97 = t.dataCallback(e) || e;
                                    e = var_97;
                                }
                                if (e && !k(e) && (!y(t.shouldSendCallback) || t.shouldSendCallback(e))) {
                                    var var_98 = null;
                                    if (this.ma()) {
                                        var_98 = void this.z('warn', 'Raven dropped error due to backoff: ', e);
                                    } else {
                                        var_98 = void ('number' == typeof t.sampleRate ? Math.random() < t.sampleRate && this.qa(e) : this.qa(e));
                                    }
                                    return var_98;
                                }
                                function arg_111(t) {
                                    if (null == e[t] || '' === e[t] || k(e[t])) {
                                        delete e[t];
                                    }
                                }
                            },
                            pa: function (e) {
                                var var_99 = U(e, this.k.sanitizeKeys);
                                return var_99;
                            },
                            ra: function () {
                                var var_100 = A();
                                return var_100;
                            },
                            qa: function (e, t) {
                                var n = this;
                                var r = this.k;
                                if (this.isSetup()) {
                                    e = this.ha(e);
                                    if (!this.k.allowDuplicates && this.na(e)) {
                                        var var_102 = void this.z('warn', 'Raven dropped repeat event: ', e);
                                        return var_102;
                                    }
                                    var var_101 = e.event_id || (e.event_id = this.ra());
                                    this.f = var_101;
                                    this.e = e;
                                    this.z('debug', 'Raven about to send:', e);
                                    var i = {
                                        sentry_version: '7',
                                        sentry_client: 'raven-js/' + this.VERSION,
                                        sentry_key: this.h
                                    };
                                    if (this.I) {
                                        i.sentry_secret = this.I;
                                    }
                                    var o = e.exception && e.exception.values[0];
                                    if (this.k.autoBreadcrumbs && this.k.autoBreadcrumbs.sentry) {
                                        var arg_113 = {
                                            category: 'sentry',
                                            message: o ? (o.type ? o.type + ': ' : '') + o.value : e.message,
                                            event_id: e.event_id,
                                            level: e.level || 'error'
                                        };
                                        this.captureBreadcrumb(arg_113);
                                    }
                                    var a = this.K;
                                    var arg_112 = {
                                        url: a,
                                        auth: i,
                                        data: e,
                                        options: r,
                                        onSuccess: function () {
                                            n.y();
                                            var arg_114 = {
                                                data: e,
                                                src: a
                                            };
                                            n.$('success', arg_114);
                                            if (t) {
                                                t();
                                            }
                                        },
                                        onError: function (r) {
                                            n.z('error', 'Raven transport failed to send: ', r);
                                            if (r.request) {
                                                n.oa(r.request);
                                            }
                                            var arg_115 = {
                                                data: e,
                                                src: a
                                            };
                                            n.$('failure', arg_115);
                                            var var_103 = r || new Error('Raven send failed (no additional details provided)');
                                            r = var_103;
                                            if (t) {
                                                t(r);
                                            }
                                        }
                                    };
                                    (r.transport || this._makeRequest).call(this, arg_112);
                                }
                            },
                            _makeRequest: function (e) {
                                var t = e.url + '?' + j(e.auth);
                                var n = null;
                                var r = {};
                                if (e.options.headers) {
                                    n = this.sa(e.options.headers);
                                }
                                if (e.options.fetchParameters) {
                                    r = this.sa(e.options.fetchParameters);
                                }
                                if (R()) {
                                    r.body = s(e.data);
                                    var arg_116 = {};
                                    var i = E(arg_116, this.l);
                                    var o = E(i, r);
                                    if (n) {
                                        o.headers = n;
                                    }
                                    var var_104 = q.fetch(t, o).then(arg_117)['catch'](arg_118);
                                    return var_104;
                                    function arg_117(t) {
                                        if (t.ok) {
                                            if (e.onSuccess) {
                                                e.onSuccess();
                                            }
                                        } else {
                                            var arg_119 = 'Sentry error code: ' + t.status;
                                            var n = new Error(arg_119);
                                            n.request = t;
                                            if (e.onError) {
                                                e.onError(n);
                                            }
                                        }
                                    }
                                    function arg_118() {
                                        if (e.onError) {
                                            var arg_120 = new Error('Sentry error code: network unavailable');
                                            e.onError(arg_120);
                                        }
                                    }
                                }
                                var a = q.XMLHttpRequest && new q.XMLHttpRequest();
                                if (a) {
                                    if ('withCredentials' in a || 'undefined' != typeof XDomainRequest) {
                                        if ('withCredentials' in a) {
                                            a.onreadystatechange = function () {
                                                if (4 === a.readyState) {
                                                    if (200 === a.status) {
                                                        if (e.onSuccess) {
                                                            e.onSuccess();
                                                        }
                                                    } else {
                                                        if (e.onError) {
                                                            var arg_122 = 'Sentry error code: ' + a.status;
                                                            var t = new Error(arg_122);
                                                            t.request = a;
                                                            e.onError(t);
                                                        }
                                                    }
                                                }
                                            };
                                        } else {
                                            a = new XDomainRequest();
                                            t = t.replace(/^https?:/, '');
                                            if (e.onSuccess) {
                                                a.onload = e.onSuccess;
                                            }
                                            if (e.onError) {
                                                a.onerror = function () {
                                                    var t = new Error('Sentry error code: XDomainRequest');
                                                    t.request = a;
                                                    e.onError(t);
                                                };
                                            }
                                        }
                                        a.open('POST', t);
                                        if (n) {
                                            x(n, arg_123);
                                            function arg_123(e, t) {
                                                a.setRequestHeader(e, t);
                                            }
                                        }
                                        var arg_121 = s(e.data);
                                        a.send(arg_121);
                                    }
                                }
                            },
                            sa: function (e) {
                                var t = {};
                                for (var n in e)
                                    if (e.hasOwnProperty(n)) {
                                        var r = e[n];
                                        t[n] = 'function' == typeof r ? r() : r;
                                    }
                                return t;
                            },
                            z: function (e) {
                                if (this.q[e] && (this.debug || this.k.debug)) {
                                    var arg_124 = [].slice.call(arguments, 1);
                                    Function.prototype.apply.call(this.q[e], this.p, arg_124);
                                }
                            },
                            Z: function (e, t) {
                                if (g(t)) {
                                    delete this.j[e];
                                } else {
                                    var arg_125 = this.j[e] || {};
                                    this.j[e] = E(arg_125, t);
                                }
                            }
                        };
                        o.prototype.setUser = o.prototype.setUserContext;
                        o.prototype.setReleaseContext = o.prototype.setRelease;
                        t.exports = o;
                        function r() {
                            var var_33 = +new Date();
                            return var_33;
                        }
                        function i(e, t) {
                            var var_34 = null;
                            if (y(t)) {
                                var_34 = function (n) {
                                    var var_35 = t(n, e);
                                    return var_35;
                                };
                            } else {
                                var_34 = t;
                            }
                            return var_34;
                        }
                        function o() {
                            for (var e in (this.a = !('object' != typeof JSON || !JSON.stringify), this.b = !g(H), this.c = !g(X), this.d = null, this.e = null, this.f = null, this.g = null, this.h = null, this.i = null, this.j = {}, this.k = {
                                    release: q.SENTRY_RELEASE && q.SENTRY_RELEASE.id,
                                    logger: 'javascript',
                                    ignoreErrors: [],
                                    ignoreUrls: [],
                                    whitelistUrls: [],
                                    includePaths: [],
                                    headers: null,
                                    collectWindowErrors: true,
                                    captureUnhandledRejections: true,
                                    maxMessageLength: 0,
                                    maxUrlLength: 250,
                                    stackTraceLimit: 50,
                                    autoBreadcrumbs: true,
                                    instrument: true,
                                    sampleRate: 1,
                                    sanitizeKeys: []
                                }, this.l = {
                                    method: 'POST',
                                    referrerPolicy: B() ? 'origin' : ''
                                }, this.m = 0, this.n = false, this.o = Error.stackTraceLimit, this.p = q.console || {}, this.q = {}, this.r = [], this.s = r(), this.t = [], this.u = [], this.v = null, this.w = q.location, this.x = this.w && this.w.href, this.y(), this.p))
                                this.q[e] = this.p[e];
                        }
                    }.call(this, arg_45));
                },
                {
                    1: 1,
                    2: 2,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8
                }
            ],
            4: [
                function (e, t, n) {
                    var arg_126 = null;
                    if ('undefined' != typeof global) {
                        arg_126 = global;
                    } else {
                        if ('undefined' != typeof self) {
                            arg_126 = self;
                        } else {
                            if ('undefined' != typeof window) {
                                arg_126 = window;
                            } else {
                                arg_126 = {};
                            }
                        }
                    }
                    (function (n) {
                        var r = e(3);
                        var i = null;
                        if ('undefined' != typeof window) {
                            i = window;
                        } else {
                            if (void 0 !== n) {
                                i = n;
                            } else {
                                if ('undefined' != typeof self) {
                                    i = self;
                                } else {
                                    i = {};
                                }
                            }
                        }
                        var o = i.Raven;
                        var a = new r();
                        a.noConflict = function () {
                            i.Raven = o;
                            return a;
                        };
                        a.afterLoad();
                        t.exports = a;
                        t.exports.Client = r;
                    }.call(this, arg_126));
                },
                { 3: 3 }
            ],
            5: [
                function (e, t, n) {
                    var arg_127 = null;
                    if ('undefined' != typeof global) {
                        arg_127 = global;
                    } else {
                        if ('undefined' != typeof self) {
                            arg_127 = self;
                        } else {
                            if ('undefined' != typeof window) {
                                arg_127 = window;
                            } else {
                                arg_127 = {};
                            }
                        }
                    }
                    (function (n) {
                        var b = e(7);
                        var w = null;
                        if ('undefined' != typeof window) {
                            w = window;
                        } else {
                            if (void 0 !== n) {
                                w = n;
                            } else {
                                if ('undefined' != typeof self) {
                                    w = self;
                                } else {
                                    w = {};
                                }
                            }
                        }
                        var k = 3;
                        var x = 51200;
                        var E = 40;
                        t.exports = {
                            isObject: function (e) {
                                var var_120 = 'object' == typeof e && null !== e;
                                return var_120;
                            },
                            isError: r,
                            isErrorEvent: function (e) {
                                var var_121 = '[object ErrorEvent]' === Object.prototype.toString.call(e);
                                return var_121;
                            },
                            isDOMError: i,
                            isDOMException: function (e) {
                                var var_122 = '[object DOMException]' === Object.prototype.toString.call(e);
                                return var_122;
                            },
                            isUndefined: o,
                            isFunction: function (e) {
                                var var_123 = 'function' == typeof e;
                                return var_123;
                            },
                            isPlainObject: a,
                            isString: s,
                            isArray: c,
                            isEmptyObject: function (e) {
                                if (!a(e)) {
                                    return false;
                                }
                                for (var t in e)
                                    if (e.hasOwnProperty(t))
                                        return false;
                                return true;
                            },
                            supportsErrorEvent: function () {
                                try {
                                    new ErrorEvent('');
                                    return true;
                                } catch (e) {
                                    return false;
                                }
                            },
                            supportsDOMError: function () {
                                try {
                                    new DOMError('');
                                    return true;
                                } catch (e) {
                                    return false;
                                }
                            },
                            supportsDOMException: function () {
                                try {
                                    new DOMException('');
                                    return true;
                                } catch (e) {
                                    return false;
                                }
                            },
                            supportsFetch: u,
                            supportsReferrerPolicy: function () {
                                if (!u()) {
                                    return false;
                                }
                                try {
                                    var arg_135 = { referrerPolicy: 'origin' };
                                    new Request('pickleRick', arg_135);
                                    return true;
                                } catch (e) {
                                    return false;
                                }
                            },
                            supportsPromiseRejectionEvent: function () {
                                var var_124 = 'function' == typeof PromiseRejectionEvent;
                                return var_124;
                            },
                            wrappedCallback: function (e) {
                                return var_125;
                                function var_125(t, n) {
                                    var r = e(t) || t;
                                    var var_126 = n && n(r) || r;
                                    return var_126;
                                }
                            },
                            each: l,
                            objectMerge: function (e, t) {
                                var var_127 = null;
                                if (t) {
                                    l(t, arg_136);
                                    var_127 = e;
                                    function arg_136(t, n) {
                                        e[t] = n;
                                    }
                                } else {
                                    var_127 = e;
                                }
                                return var_127;
                            },
                            truncate: h,
                            objectFrozen: function (e) {
                                var var_128 = !!Object.isFrozen && Object.isFrozen(e);
                                return var_128;
                            },
                            hasKey: d,
                            joinRegExp: f,
                            urlencode: function (e) {
                                var t = [];
                                l(e, arg_137);
                                var var_129 = t.join('&');
                                return var_129;
                                function arg_137(e, n) {
                                    var arg_138 = encodeURIComponent(e) + '=' + encodeURIComponent(n);
                                    t.push(arg_138);
                                }
                            },
                            uuid4: function () {
                                var e = w.crypto || w.msCrypto;
                                if (!o(e) && e.getRandomValues) {
                                    var t = new Uint16Array(8);
                                    e.getRandomValues(t);
                                    t[3] = 4095 & t[3] | 16384;
                                    t[4] = 16383 & t[4] | 32768;
                                    var var_131 = n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7]);
                                    return var_131;
                                    function n(e) {
                                        var t = e.toString(16);;
                                        for (; t.length < 4;) {
                                            t = '0' + t;
                                        }
                                        return t;
                                    }
                                }
                                var var_130 = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, arg_139);
                                return var_130;
                                function arg_139(e) {
                                    var t = 16 * Math.random() | 0;
                                    var var_132 = ('x' === e ? t : 3 & t | 8).toString(16);
                                    return var_132;
                                }
                            },
                            htmlTreeAsString: function (e) {
                                var t, n = [], r = 0, i = 0, o = ' > '.length;;
                                for (; e && r++ < 5 && !('html' === (t = p(e)) || r > 1 && i + n.length * o + t.length >= 80);) {
                                    n.push(t);
                                    i += t.length;
                                    e = e.parentNode;
                                }
                                var var_133 = n.reverse().join(' > ');
                                return var_133;
                            },
                            htmlElementAsString: p,
                            isSameException: function (e, t) {
                                var var_134 = !m(e, t) && (e = e.values[0], t = t.values[0], e.type === t.type && e.value === t.value && !function (e, t) {
                                    var var_135 = o(e) && o(t);
                                    return var_135;
                                }(e.stacktrace, t.stacktrace) && v(e.stacktrace, t.stacktrace));
                                return var_134;
                            },
                            isSameStacktrace: v,
                            parseUrl: function (e) {
                                if ('string' != typeof e) {
                                    var var_137 = {};
                                    return var_137;
                                }
                                var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                                var n = t[6] || '';
                                var r = t[8] || '';
                                var var_136 = {
                                    protocol: t[2],
                                    host: t[4],
                                    path: t[5],
                                    relative: t[5] + n + r
                                };
                                return var_136;
                            },
                            fill: function (e, t, n, r) {
                                if (null != e) {
                                    var i = e[t];
                                    e[t] = n(i);
                                    e[t].M = true;
                                    e[t].O = i;
                                    if (r) {
                                        var arg_140 = [
                                            e,
                                            t,
                                            i
                                        ];
                                        r.push(arg_140);
                                    }
                                }
                            },
                            safeJoin: function (e, t) {
                                if (!c(e)) {
                                    return '';
                                }
                                var n = [], i = 0;;
                                for (; i < e.length; i++) {
                                    try {
                                        var arg_141 = String(e[i]);
                                        n.push(arg_141);
                                    } catch (r) {
                                        n.push('[value cannot be serialized]');
                                    }
                                }
                                var var_138 = n.join(t);
                                return var_138;
                            },
                            serializeException: function _(e, t, n) {
                                if (!a(e)) {
                                    return e;
                                }
                                if ('number' != typeof (t = 'number' != typeof t ? k : t)) {
                                    n = x;
                                } else {
                                    n = n;
                                }
                                var r = function i(e, t) {
                                    var var_140 = null;
                                    if (0 === t) {
                                        var_140 = y(e);
                                    } else {
                                        if (a(e)) {
                                            var arg_144 = {};
                                            var_140 = Object.keys(e).reduce(arg_143, arg_144);
                                            function arg_143(n, r) {
                                                var arg_145 = t - 1;
                                                n[r] = i(e[r], arg_145);
                                                return n;
                                            }
                                        } else {
                                            if (Array.isArray(e)) {
                                                var_140 = e.map(arg_146);
                                                function arg_146(e) {
                                                    var arg_147 = t - 1;
                                                    var var_141 = i(e, arg_147);
                                                    return var_141;
                                                }
                                            } else {
                                                var_140 = y(e);
                                            }
                                        }
                                    }
                                    return var_140;
                                }(e, t);
                                var var_139 = null;
                                var arg_142 = b(r);
                                if (g(arg_142) > n) {
                                    var arg_148 = t - 1;
                                    var_139 = _(e, arg_148);
                                } else {
                                    var_139 = r;
                                }
                                return var_139;
                            },
                            serializeKeysForMessage: function (e, t) {
                                if ('number' == typeof e || 'string' == typeof e) {
                                    var var_142 = e.toString();
                                    return var_142;
                                }
                                if (!Array.isArray(e)) {
                                    return '';
                                }
                                if (0 === (e = e.filter(function (e) {
                                        var var_143 = 'string' == typeof e;
                                        return var_143;
                                    })).length) {
                                    return '[object has no keys]';
                                }
                                if ('number' != typeof t) {
                                    t = E;
                                } else {
                                    t = t;
                                }
                                if (e[0].length >= t) {
                                    var var_144 = e[0];
                                    return var_144;
                                }
                                var n = e.length;;
                                for (; n > 0; n--) {
                                    var r = e.slice(0, n).join(', ');
                                    if (!(r.length > t)) {
                                        var var_145 = null;
                                        if (n === e.length) {
                                            var_145 = r;
                                        } else {
                                            var_145 = r + '\u2026';
                                        }
                                        return var_145;
                                    }
                                }
                                return '';
                            },
                            sanitize: function (e, t) {
                                if (!c(t) || c(t) && 0 === t.length) {
                                    return e;
                                }
                                var n;
                                var r = f(t);
                                var o = '********';
                                try {
                                    var arg_149 = b(e);
                                    n = JSON.parse(arg_149);
                                } catch (i) {
                                    return e;
                                }
                                var var_146 = function s(e) {
                                    var var_147 = null;
                                    if (c(e)) {
                                        var_147 = e.map(arg_150);
                                        function arg_150(e) {
                                            var var_148 = s(e);
                                            return var_148;
                                        }
                                    } else {
                                        if (a(e)) {
                                            var arg_152 = {};
                                            var_147 = Object.keys(e).reduce(arg_151, arg_152);
                                            function arg_151(t, n) {
                                                t[n] = r.test(n) ? o : s(e[n]);
                                                return t;
                                            }
                                        } else {
                                            var_147 = e;
                                        }
                                    }
                                    return var_147;
                                }(n);
                                return var_146;
                            }
                        };
                        function r(e) {
                            switch (Object.prototype.toString.call(e)) {
                            case '[object Error]':
                            case '[object Exception]':
                            case '[object DOMException]': {
                                    return true;
                                }
                            default: {
                                    var var_105 = e instanceof Error;
                                    return var_105;
                                }
                            }
                        }
                        function i(e) {
                            var var_106 = '[object DOMError]' === Object.prototype.toString.call(e);
                            return var_106;
                        }
                        function o(e) {
                            var var_107 = void 0 === e;
                            return var_107;
                        }
                        function a(e) {
                            var var_108 = '[object Object]' === Object.prototype.toString.call(e);
                            return var_108;
                        }
                        function s(e) {
                            var var_109 = '[object String]' === Object.prototype.toString.call(e);
                            return var_109;
                        }
                        function c(e) {
                            var var_110 = '[object Array]' === Object.prototype.toString.call(e);
                            return var_110;
                        }
                        function u() {
                            if (!('fetch' in w)) {
                                return false;
                            }
                            try {
                                new Headers();
                                new Request('');
                                new Response();
                                return true;
                            } catch (e) {
                                return false;
                            }
                        }
                        function l(e, t) {
                            var n;
                            var r;
                            if (o(e.length)) {
                                for (n in e)
                                    d(e, n) && t.call(null, n, e[n]);
                            } else {
                                if (r = e.length) {
                                    n = 0;
                                    for (; n < r; n++) {
                                        t.call(null, n, e[n]);
                                    }
                                }
                            }
                        }
                        function h(e, t) {
                            if ('number' != typeof t) {
                                throw new Error('2nd argument to `truncate` function should be a number');
                            }
                            var var_111 = null;
                            if ('string' != typeof e || 0 === t) {
                                var_111 = e;
                            } else {
                                if (e.length <= t) {
                                    var_111 = e;
                                } else {
                                    var_111 = e.substr(0, t) + '\u2026';
                                }
                            }
                            return var_111;
                        }
                        function d(e, t) {
                            var var_112 = Object.prototype.hasOwnProperty.call(e, t);
                            return var_112;
                        }
                        function f(e) {
                            var t, n = [], r = 0, i = e.length;;
                            for (; r < i; r++) {
                                if (s(t = e[r])) {
                                    var arg_129 = t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
                                    n.push(arg_129);
                                } else {
                                    if (t && t.source) {
                                        n.push(t.source);
                                    }
                                }
                            }
                            var arg_128 = n.join('|');
                            var var_113 = new RegExp(arg_128, 'i');
                            return var_113;
                        }
                        function p(e) {
                            var t;
                            var n;
                            var r;
                            var i;
                            var o;
                            var a = [];
                            if (!e || !e.tagName) {
                                return '';
                            }
                            var arg_130 = e.tagName.toLowerCase();
                            a.push(arg_130);
                            if (e.id) {
                                var arg_131 = '#' + e.id;
                                a.push(arg_131);
                            }
                            if ((t = e.className) && s(t)) {
                                n = t.split(/\s+/);
                                o = 0;
                                for (; o < n.length; o++) {
                                    var arg_132 = '.' + n[o];
                                    a.push(arg_132);
                                }
                            }
                            var c = [
                                'type',
                                'name',
                                'title',
                                'alt'
                            ];
                            o = 0;
                            for (; o < c.length; o++) {
                                r = c[o];
                                if (i = e.getAttribute(r)) {
                                    var arg_133 = '[' + r + '="' + i + '"]';
                                    a.push(arg_133);
                                }
                            }
                            var var_114 = a.join('');
                            return var_114;
                        }
                        function m(e, t) {
                            var var_115 = !!(!!e ^ !!t);
                            return var_115;
                        }
                        function v(e, t) {
                            if (m(e, t)) {
                                return false;
                            }
                            var n = e.frames;
                            var r = t.frames;
                            if (void 0 === n || void 0 === r) {
                                return false;
                            }
                            if (n.length !== r.length) {
                                return false;
                            }
                            var i, o, a = 0;;
                            for (; a < n.length; a++) {
                                i = n[a];
                                o = r[a];
                                if (i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i['function'] !== o['function']) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        function g(e) {
                            var arg_134 = JSON.stringify(e);
                            var var_116 = function (e) {
                                var var_117 = ~-encodeURI(e).split(/%..|./).length;
                                return var_117;
                            }(arg_134);
                            return var_116;
                        }
                        function y(e) {
                            if ('string' == typeof e) {
                                var var_119 = h(e, 40);
                                return var_119;
                            }
                            if ('number' == typeof e || 'boolean' == typeof e || void 0 === e) {
                                return e;
                            }
                            var t = Object.prototype.toString.call(e);
                            var var_118 = null;
                            if ('[object Object]' === t) {
                                var_118 = '[Object]';
                            } else {
                                if ('[object Array]' === t) {
                                    var_118 = '[Array]';
                                } else {
                                    if ('[object Function]' === t) {
                                        if (e.name) {
                                            var_118 = '[Function: ' + e.name + ']';
                                        } else {
                                            var_118 = '[Function]';
                                        }
                                    } else {
                                        var_118 = e;
                                    }
                                }
                            }
                            return var_118;
                        }
                    }.call(this, arg_127));
                },
                { 7: 7 }
            ],
            6: [
                function (e, t, n) {
                    var arg_153 = null;
                    if ('undefined' != typeof global) {
                        arg_153 = global;
                    } else {
                        if ('undefined' != typeof self) {
                            arg_153 = self;
                        } else {
                            if ('undefined' != typeof window) {
                                arg_153 = window;
                            } else {
                                arg_153 = {};
                            }
                        }
                    }
                    (function (n) {
                        var i = e(5);
                        var o = {
                            collectWindowErrors: true,
                            debug: false
                        };
                        var a = null;
                        if ('undefined' != typeof window) {
                            a = window;
                        } else {
                            if (void 0 !== n) {
                                a = n;
                            } else {
                                if ('undefined' != typeof self) {
                                    a = self;
                                } else {
                                    a = {};
                                }
                            }
                        }
                        var s = [].slice;
                        var c = '?';
                        var u = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
                        o.report = function () {
                            var h;
                            var d;
                            var f = [];
                            var p = null;
                            var m = null;
                            var v = null;
                            l.subscribe = function (e) {
                                if (!d) {
                                    h = a.onerror;
                                    a.onerror = t;
                                    d = true;
                                }
                                f.push(e);
                            };
                            l.unsubscribe = function (e) {
                                var t = f.length - 1;;
                                for (; t >= 0; --t) {
                                    if (f[t] === e) {
                                        f.splice(t, 1);
                                    }
                                }
                            };
                            l.uninstall = function () {
                                if (d) {
                                    a.onerror = h;
                                    d = false;
                                    h = void 0;
                                }
                                f = [];
                            };
                            return l;
                            function e(t, n) {
                                var r = null;
                                if (!n || o.collectWindowErrors) {
                                    for (var i in f)
                                        if (f.hasOwnProperty(i))
                                            try {
                                                var arg_155 = s.call(arguments, 2);
                                                var arg_154 = [t].concat(arg_155);
                                                f[i].apply(null, arg_154);
                                            } catch (e) {
                                                r = e;
                                            }
                                    if (r) {
                                        throw r;
                                    }
                                }
                            }
                            function t(t, a, s, l, d) {
                                var f = null;
                                if (i.isErrorEvent(d)) {
                                    f = d.error;
                                } else {
                                    f = d;
                                }
                                var p = null;
                                if (i.isErrorEvent(t)) {
                                    p = t.message;
                                } else {
                                    p = t;
                                }
                                if (v) {
                                    o.computeStackTrace.augmentStackTraceWithInitialElement(v, a, s, p);
                                    n();
                                } else {
                                    if (f && i.isError(f)) {
                                        var arg_156 = o.computeStackTrace(f);
                                        e(arg_156, true);
                                    } else {
                                        var m;
                                        var g = {
                                            url: a,
                                            line: s,
                                            column: l
                                        };
                                        var y = void 0;
                                        if ('[object String]' === {}.toString.call(p)) {
                                            if (m = p.match(u)) {
                                                y = m[1];
                                                p = m[2];
                                            }
                                        }
                                        g.func = c;
                                        var arg_157 = {
                                            name: y,
                                            message: p,
                                            url: r(),
                                            stack: [g]
                                        };
                                        e(arg_157, true);
                                    }
                                }
                                var var_150 = !!h && h.apply(this, arguments);
                                return var_150;
                            }
                            function n() {
                                var t = v;
                                var n = p;
                                p = null;
                                v = null;
                                m = null;
                                var arg_158 = [
                                    t,
                                    false
                                ].concat(n);
                                e.apply(null, arg_158);
                            }
                            function l(e, t) {
                                var r = s.call(arguments, 1);
                                if (v) {
                                    if (m === e) {
                                        return;
                                    }
                                    n();
                                }
                                var i = o.computeStackTrace(e);
                                v = i;
                                m = e;
                                p = r;
                                var arg_160 = null;
                                if (i.incomplete) {
                                    arg_160 = 2000;
                                } else {
                                    arg_160 = 0;
                                }
                                setTimeout(arg_159, arg_160);
                                if (false !== t) {
                                    throw e;
                                }
                                function arg_159() {
                                    if (m === e) {
                                        n();
                                    }
                                }
                            }
                        }();
                        o.computeStackTrace = function () {
                            i.augmentStackTraceWithInitialElement = t;
                            i.computeStackTraceFromStackProp = e;
                            return i;
                            function e(e) {
                                if ('undefined' != typeof e.stack && e.stack) {
                                    var t, n, i, o = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, a = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, s = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, l = /\((\S*)(?::(\d+))(?::(\d+))\)/, h = e.stack.split('\n'), d = [], f = (/^(.*) is undefined$/.exec(e.message), 0), p = h.length;;
                                    for (; f < p; ++f) {
                                        if (n = o.exec(h[f])) {
                                            var m = n[2] && 0 === n[2].indexOf('native');
                                            if (n[2] && 0 === n[2].indexOf('eval') && (t = l.exec(n[2]))) {
                                                n[2] = t[1];
                                                n[3] = t[2];
                                                n[4] = t[3];
                                            }
                                            i = {
                                                url: m ? null : n[2],
                                                func: n[1] || c,
                                                args: m ? [n[2]] : [],
                                                line: n[3] ? +n[3] : null,
                                                column: n[4] ? +n[4] : null
                                            };
                                        } else {
                                            if (n = a.exec(h[f])) {
                                                i = {
                                                    url: n[2],
                                                    func: n[1] || c,
                                                    args: [],
                                                    line: +n[3],
                                                    column: n[4] ? +n[4] : null
                                                };
                                            } else {
                                                var var_152 = n = s.exec(h[f]);
                                                if (!var_152) {
                                                    continue;
                                                }
                                                if (n[3] && n[3].indexOf(' > eval') > -1 && (t = u.exec(n[3]))) {
                                                    n[3] = t[1];
                                                    n[4] = t[2];
                                                    n[5] = null;
                                                } else {
                                                    if (!(0 !== f || n[5] || 'undefined' == typeof e.columnNumber)) {
                                                        d[0].column = e.columnNumber + 1;
                                                    }
                                                }
                                                i = {
                                                    url: n[3],
                                                    func: n[1] || c,
                                                    args: n[2] ? n[2].split(',') : [],
                                                    line: n[4] ? +n[4] : null,
                                                    column: n[5] ? +n[5] : null
                                                };
                                            }
                                        }
                                        if (!i.func && i.line) {
                                            i.func = c;
                                        }
                                        if (i.url && 'blob:' === i.url.substr(0, 5)) {
                                            var v = new XMLHttpRequest();
                                            v.open('GET', i.url, false);
                                            v.send(null);
                                            if (200 === v.status) {
                                                var g = v.responseText || '';
                                                var y = (g = g.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                                                if (y) {
                                                    var b = y[1];
                                                    if ('~' === b.charAt(0)) {
                                                        b = ('undefined' == typeof document || null == document.location ? '' : document.location.origin ? document.location.origin : document.location.protocol + '//' + document.location.hostname + (document.location.port ? ':' + document.location.port : '')) + b.slice(1);
                                                    }
                                                    i.url = b.slice(0, -4);
                                                }
                                            }
                                        }
                                        d.push(i);
                                    }
                                    var var_151 = null;
                                    if (d.length) {
                                        var_151 = {
                                            name: e.name,
                                            message: e.message,
                                            url: r(),
                                            stack: d
                                        };
                                    } else {
                                        var_151 = null;
                                    }
                                    return var_151;
                                }
                            }
                            function t(e, t, n, r) {
                                var i = {
                                    url: t,
                                    line: n
                                };
                                if (i.url && i.line) {
                                    e.incomplete = false;
                                    if (!i.func) {
                                        i.func = c;
                                    }
                                    if (e.stack.length > 0 && e.stack[0].url === i.url) {
                                        if (e.stack[0].line === i.line) {
                                            return false;
                                        }
                                        if (!e.stack[0].line && e.stack[0].func === i.func) {
                                            e.stack[0].line = i.line;
                                            var var_153 = false;
                                            return var_153;
                                        }
                                    }
                                    e.stack.unshift(i);
                                    e.partial = true;
                                    return true;
                                }
                                e.incomplete = true;
                                return false;
                            }
                            function n(e, a) {
                                var s, u, l = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, h = [], d = {}, f = false, p = n.caller;;
                                for (; p && !f; p = p.caller) {
                                    if (p !== i && p !== o.report) {
                                        u = {
                                            url: null,
                                            func: c,
                                            line: null,
                                            column: null
                                        };
                                        if (p.name) {
                                            u.func = p.name;
                                        } else {
                                            var arg_164 = p.toString();
                                            if (s = l.exec(arg_164)) {
                                                u.func = s[1];
                                            }
                                        }
                                        if ('undefined' == typeof u.func) {
                                            try {
                                                var arg_165 = s.input.indexOf('{');
                                                u.func = s.input.substring(0, arg_165);
                                            } catch (v) {
                                            }
                                        }
                                        if (d['' + p]) {
                                            f = true;
                                        } else {
                                            d['' + p] = true;
                                        }
                                        h.push(u);
                                    }
                                }
                                if (a) {
                                    h.splice(0, a);
                                }
                                var m = {
                                    name: e.name,
                                    message: e.message,
                                    url: r(),
                                    stack: h
                                };
                                var arg_161 = e.sourceURL || e.fileName;
                                var arg_162 = e.line || e.lineNumber;
                                var arg_163 = e.message || e.description;
                                t(m, arg_161, arg_162, arg_163);
                                return m;
                            }
                            function i(t, i) {
                                var s = null;
                                if (null == i) {
                                    i = 0;
                                } else {
                                    i = +i;
                                }
                                try {
                                    if (s = e(t)) {
                                        return s;
                                    }
                                } catch (a) {
                                    if (o.debug) {
                                        throw a;
                                    }
                                }
                                try {
                                    var arg_166 = i + 1;
                                    if (s = n(t, arg_166)) {
                                        return s;
                                    }
                                } catch (a) {
                                    if (o.debug) {
                                        throw a;
                                    }
                                }
                                var var_154 = {
                                    name: t.name,
                                    message: t.message,
                                    url: r()
                                };
                                return var_154;
                            }
                        }();
                        t.exports = o;
                        function r() {
                            var var_149 = null;
                            if ('undefined' == typeof document || null == document.location) {
                                var_149 = '';
                            } else {
                                var_149 = document.location.href;
                            }
                            return var_149;
                        }
                    }.call(this, arg_153));
                },
                { 5: 5 }
            ],
            7: [
                function (e, t, n) {
                    (t.exports = function (e, t, n, r) {
                        var arg_170 = i(t, r);
                        var var_159 = JSON.stringify(e, arg_170, n);
                        return var_159;
                    }).getSerialize = i;
                    function r(e, t) {
                        var n = 0;;
                        for (; n < e.length; ++n) {
                            if (e[n] === t) {
                                return n;
                            }
                        }
                        var var_155 = -1;
                        return var_155;
                    }
                    function i(e, t) {
                        var n = [];
                        var i = [];
                        if (null == t) {
                            t = function (e, t) {
                                var var_157 = null;
                                if (n[0] === t) {
                                    var_157 = '[Circular ~]';
                                } else {
                                    var arg_167 = r(n, t);
                                    var_157 = '[Circular ~.' + i.slice(0, arg_167).join('.') + ']';
                                }
                                return var_157;
                            };
                        }
                        return var_156;
                        function var_156(o, a) {
                            if (n.length > 0) {
                                var s = r(n, this);
                                if (~s) {
                                    var arg_168 = s + 1;
                                    n.splice(arg_168);
                                } else {
                                    n.push(this);
                                }
                                if (~s) {
                                    var arg_169 = 1 / 0;
                                    i.splice(s, arg_169, o);
                                } else {
                                    i.push(o);
                                }
                                if (~r(n, a)) {
                                    a = t.call(this, o, a);
                                }
                            } else {
                                n.push(a);
                            }
                            var var_158 = null;
                            if (null == e) {
                                if (a instanceof Error) {
                                    var_158 = function (e) {
                                        var t = {
                                            stack: e.stack,
                                            message: e.message,
                                            name: e.name
                                        };
                                        for (var n in e)
                                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                        return t;
                                    }(a);
                                } else {
                                    var_158 = a;
                                }
                            } else {
                                var_158 = e.call(this, o, a);
                            }
                            return var_158;
                        }
                    }
                },
                {}
            ],
            8: [
                function (e, t, n) {
                    t.exports = function (e, t, n) {
                        var var_173 = null;
                        if (t) {
                            if (n) {
                                var_173 = m(t, e);
                            } else {
                                var_173 = function (e, t) {
                                    var arg_196 = m(e, t);
                                    var var_174 = d(arg_196);
                                    return var_174;
                                }(t, e);
                            }
                        } else {
                            if (n) {
                                var_173 = p(e);
                            } else {
                                var_173 = function (e) {
                                    var arg_197 = p(e);
                                    var var_175 = d(arg_197);
                                    return var_175;
                                }(e);
                            }
                        }
                        return var_173;
                    };
                    function r(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        var var_160 = (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
                        return var_160;
                    }
                    function i(e, t, n, i, o, a) {
                        var arg_173 = r(t, e);
                        var arg_174 = r(i, a);
                        var arg_172 = r(arg_173, arg_174);
                        var arg_171 = function (e, t) {
                            var var_162 = e << t | e >>> 32 - t;
                            return var_162;
                        }(arg_172, o);
                        var var_161 = r(arg_171, n);
                        return var_161;
                    }
                    function o(e, t, n, r, o, a, s) {
                        var arg_175 = t & n | ~t & r;
                        var var_163 = i(arg_175, e, t, o, a, s);
                        return var_163;
                    }
                    function a(e, t, n, r, o, a, s) {
                        var arg_176 = t & r | n & ~r;
                        var var_164 = i(arg_176, e, t, o, a, s);
                        return var_164;
                    }
                    function s(e, t, n, r, o, a, s) {
                        var arg_177 = t ^ n ^ r;
                        var var_165 = i(arg_177, e, t, o, a, s);
                        return var_165;
                    }
                    function c(e, t, n, r, o, a, s) {
                        var arg_178 = n ^ (t | ~r);
                        var var_166 = i(arg_178, e, t, o, a, s);
                        return var_166;
                    }
                    function u(e, t) {
                        e[t >> 5] |= 128 << t % 32;
                        e[14 + (t + 64 >>> 9 << 4)] = t;
                        var n;
                        var i;
                        var u;
                        var l;
                        var h;
                        var d = 1732584193;
                        var f = -271733879;
                        var p = -1732584194;
                        var m = 271733878;
                        n = 0;
                        for (; n < e.length; n += 16) {
                            i = d;
                            u = f;
                            l = p;
                            h = m;
                            d = o(d, f, p, m, e[n], 7, -680876936);
                            m = o(m, d, f, p, e[n + 1], 12, -389564586);
                            p = o(p, m, d, f, e[n + 2], 17, 606105819);
                            f = o(f, p, m, d, e[n + 3], 22, -1044525330);
                            d = o(d, f, p, m, e[n + 4], 7, -176418897);
                            m = o(m, d, f, p, e[n + 5], 12, 1200080426);
                            p = o(p, m, d, f, e[n + 6], 17, -1473231341);
                            f = o(f, p, m, d, e[n + 7], 22, -45705983);
                            d = o(d, f, p, m, e[n + 8], 7, 1770035416);
                            m = o(m, d, f, p, e[n + 9], 12, -1958414417);
                            p = o(p, m, d, f, e[n + 10], 17, -42063);
                            f = o(f, p, m, d, e[n + 11], 22, -1990404162);
                            d = o(d, f, p, m, e[n + 12], 7, 1804603682);
                            m = o(m, d, f, p, e[n + 13], 12, -40341101);
                            p = o(p, m, d, f, e[n + 14], 17, -1502002290);
                            d = a(d, f = o(f, p, m, d, e[n + 15], 22, 1236535329), p, m, e[n + 1], 5, -165796510);
                            m = a(m, d, f, p, e[n + 6], 9, -1069501632);
                            p = a(p, m, d, f, e[n + 11], 14, 643717713);
                            f = a(f, p, m, d, e[n], 20, -373897302);
                            d = a(d, f, p, m, e[n + 5], 5, -701558691);
                            m = a(m, d, f, p, e[n + 10], 9, 38016083);
                            p = a(p, m, d, f, e[n + 15], 14, -660478335);
                            f = a(f, p, m, d, e[n + 4], 20, -405537848);
                            d = a(d, f, p, m, e[n + 9], 5, 568446438);
                            m = a(m, d, f, p, e[n + 14], 9, -1019803690);
                            p = a(p, m, d, f, e[n + 3], 14, -187363961);
                            f = a(f, p, m, d, e[n + 8], 20, 1163531501);
                            d = a(d, f, p, m, e[n + 13], 5, -1444681467);
                            m = a(m, d, f, p, e[n + 2], 9, -51403784);
                            p = a(p, m, d, f, e[n + 7], 14, 1735328473);
                            d = s(d, f = a(f, p, m, d, e[n + 12], 20, -1926607734), p, m, e[n + 5], 4, -378558);
                            m = s(m, d, f, p, e[n + 8], 11, -2022574463);
                            p = s(p, m, d, f, e[n + 11], 16, 1839030562);
                            f = s(f, p, m, d, e[n + 14], 23, -35309556);
                            d = s(d, f, p, m, e[n + 1], 4, -1530992060);
                            m = s(m, d, f, p, e[n + 4], 11, 1272893353);
                            p = s(p, m, d, f, e[n + 7], 16, -155497632);
                            f = s(f, p, m, d, e[n + 10], 23, -1094730640);
                            d = s(d, f, p, m, e[n + 13], 4, 681279174);
                            m = s(m, d, f, p, e[n], 11, -358537222);
                            p = s(p, m, d, f, e[n + 3], 16, -722521979);
                            f = s(f, p, m, d, e[n + 6], 23, 76029189);
                            d = s(d, f, p, m, e[n + 9], 4, -640364487);
                            m = s(m, d, f, p, e[n + 12], 11, -421815835);
                            p = s(p, m, d, f, e[n + 15], 16, 530742520);
                            d = c(d, f = s(f, p, m, d, e[n + 2], 23, -995338651), p, m, e[n], 6, -198630844);
                            m = c(m, d, f, p, e[n + 7], 10, 1126891415);
                            p = c(p, m, d, f, e[n + 14], 15, -1416354905);
                            f = c(f, p, m, d, e[n + 5], 21, -57434055);
                            d = c(d, f, p, m, e[n + 12], 6, 1700485571);
                            m = c(m, d, f, p, e[n + 3], 10, -1894986606);
                            p = c(p, m, d, f, e[n + 10], 15, -1051523);
                            f = c(f, p, m, d, e[n + 1], 21, -2054922799);
                            d = c(d, f, p, m, e[n + 8], 6, 1873313359);
                            m = c(m, d, f, p, e[n + 15], 10, -30611744);
                            p = c(p, m, d, f, e[n + 6], 15, -1560198380);
                            f = c(f, p, m, d, e[n + 13], 21, 1309151649);
                            d = c(d, f, p, m, e[n + 4], 6, -145523070);
                            m = c(m, d, f, p, e[n + 11], 10, -1120210379);
                            p = c(p, m, d, f, e[n + 2], 15, 718787259);
                            f = c(f, p, m, d, e[n + 9], 21, -343485551);
                            d = r(d, i);
                            f = r(f, u);
                            p = r(p, l);
                            m = r(m, h);
                        }
                        var var_167 = [
                            d,
                            f,
                            p,
                            m
                        ];
                        return var_167;
                    }
                    function l(e) {
                        var t;
                        var n = '';
                        var r = 32 * e.length;
                        t = 0;
                        for (; t < r; t += 8) {
                            var arg_179 = e[t >> 5] >>> t % 32 & 255;
                            n += String.fromCharCode(arg_179);
                        }
                        return n;
                    }
                    function h(e) {
                        var t;
                        var n = [];
                        n[(e.length >> 2) - 1] = void 0;
                        t = 0;
                        for (; t < n.length; t += 1) {
                            n[t] = 0;
                        }
                        var r = 8 * e.length;
                        t = 0;
                        for (; t < r; t += 8) {
                            var arg_180 = t / 8;
                            n[t >> 5] |= (255 & e.charCodeAt(arg_180)) << t % 32;
                        }
                        return n;
                    }
                    function d(e) {
                        var t;
                        var n;
                        var r = '0123456789abcdef';
                        var i = '';
                        n = 0;
                        for (; n < e.length; n += 1) {
                            t = e.charCodeAt(n);
                            var arg_181 = t >>> 4 & 15;
                            var arg_182 = 15 & t;
                            i += r.charAt(arg_181) + r.charAt(arg_182);
                        }
                        return i;
                    }
                    function f(e) {
                        var arg_183 = encodeURIComponent(e);
                        var var_168 = unescape(arg_183);
                        return var_168;
                    }
                    function p(e) {
                        var arg_184 = f(e);
                        var var_169 = function (e) {
                            var arg_186 = h(e);
                            var arg_187 = 8 * e.length;
                            var arg_185 = u(arg_186, arg_187);
                            var var_170 = l(arg_185);
                            return var_170;
                        }(arg_184);
                        return var_169;
                    }
                    function m(e, t) {
                        var arg_188 = f(e);
                        var arg_189 = f(t);
                        var var_171 = function (e, t) {
                            var n;
                            var r;
                            var i = h(e);
                            var o = [];
                            var a = [];
                            o[15] = a[15] = void 0;
                            if (i.length > 16) {
                                var arg_195 = 8 * e.length;
                                i = u(i, arg_195);
                            }
                            n = 0;
                            for (; n < 16; n += 1) {
                                o[n] = 909522486 ^ i[n];
                                a[n] = 1549556828 ^ i[n];
                            }
                            var arg_192 = h(t);
                            var arg_190 = o.concat(arg_192);
                            var arg_191 = 512 + 8 * t.length;
                            r = u(arg_190, arg_191);
                            var arg_194 = a.concat(r);
                            var arg_193 = u(arg_194, 640);
                            var var_172 = l(arg_193);
                            return var_172;
                        }(arg_188, arg_189);
                        return var_171;
                    }
                },
                {}
            ]
        }, {}, [4])(4);
        return var_29;
    }
    function x() {
        this.children = [];
        this._events = [];
    }
    function O(e, t) {
        try {
            var n = new RegExp(t).exec(e);
            var var_178 = null;
            if (n) {
                var_178 = {
                    name: n[1] || 'Other',
                    major: n[2] || '0',
                    minor: n[3] || '0',
                    patch: n[4] || '0'
                };
            } else {
                var_178 = null;
            }
            return var_178;
        } catch (lt) {
            return null;
        }
    }
    function j(e, t) {
        var n = null, r = null, i = -1, o = false;;
        for (; ++i < t.length && !o;) {
            n = t[i];
            var a = -1;;
            for (; ++a < n.patterns.length && !o;) {
                o = null !== (r = O(e, n.patterns[a]));
            }
        }
        var var_179 = null;
        if (o) {
            var var_180 = n.family || n.name_replace || r.name;
            r.family = var_180;
            if (n.name_replace) {
                r.name = n.name_replace;
            }
            if (n.major_replace) {
                r.major = n.major_replace;
            }
            if (n.minor_replace) {
                r.minor = n.minor_replace;
            }
            if (n.patch_replace) {
                r.minor = n.patch_replace;
            }
            var_179 = r;
        } else {
            var_179 = {
                family: 'Other',
                name: 'Other',
                major: '0',
                minor: '0',
                patch: '0'
            };
        }
        return var_179;
    }
    function A() {
        var e = this;
        var t = C.getBrowser();
        var n = C.getAgent();
        this.agent = n.toLowerCase();
        var var_181 = window.navigator.userLanguage || window.navigator.language;
        this.language = var_181;
        this.isCSS1 = 'CSS1Compat' === (document.compatMode || '');
        this.width = function () {
            var var_183 = null;
            if (window.innerWidth && window.document.documentElement.clientWidth) {
                var_183 = Math.min(window.innerWidth, document.documentElement.clientWidth);
            } else {
                var var_184 = window.innerWidth || window.document.documentElement.clientWidth || document.body.clientWidth;
                var_183 = var_184;
            }
            return var_183;
        };
        this.height = function () {
            var var_185 = window.innerHeight || window.document.documentElement.clientHeight || document.body.clientHeight;
            return var_185;
        };
        this.scrollX = function () {
            var var_186 = null;
            if (window.pageXOffset !== undefined) {
                var_186 = window.pageXOffset;
            } else {
                if (e.isCSS1) {
                    var_186 = document.documentElement.scrollLeft;
                } else {
                    var_186 = document.body.scrollLeft;
                }
            }
            return var_186;
        };
        this.scrollY = function () {
            var var_187 = null;
            if (window.pageYOffset !== undefined) {
                var_187 = window.pageYOffset;
            } else {
                if (e.isCSS1) {
                    var_187 = document.documentElement.scrollTop;
                } else {
                    var_187 = document.body.scrollTop;
                }
            }
            return var_187;
        };
        this.type = 'Edge' === t.family ? 'edge' : 'Internet Explorer' === t.family ? 'ie' : 'Chrome' === t.family ? 'chrome' : 'Safari' === t.family ? 'safari' : 'Firefox' === t.family ? 'firefox' : t.family.toLowerCase();
        var var_182 = 1 * (t.major + '.' + t.minor) || 0;
        this.version = var_182;
        this.hasPostMessage = !!window.postMessage;
    }
    function M(e) {
        var t = { message: e.name + ': ' + e.message };
        if (e.stack) {
            t.stack_trace = { trace: e.stack };
        }
        R('report error', 'internal', 'debug', t);
        L('internal error', 'error', I.file);
    }
    function L(e, t, n) {
        if (window.Raven) {
            var arg_203 = {
                level: t,
                logger: n
            };
            Raven.captureMessage(e, arg_203);
        }
    }
    function R(e, t, n, r) {
        if (window.Raven) {
            var arg_204 = {
                message: e,
                category: t,
                level: n,
                data: r
            };
            Raven.captureBreadcrumb(arg_204);
        }
    }
    function D(e, t) {
        var n;
        var r = null;
        if ('attempts' in (t = t || {})) {
            r = t.attempts;
        } else {
            r = 1;
        }
        var i = t.delay || 0;
        var o = t.onFail;
        n = function (t, n, a) {
            e().then(t, arg_206);
            function arg_206(e) {
                var t = r-- > 0;
                if (o) {
                    var var_196 = false !== o(e) && t;
                    t = var_196;
                }
                if (t) {
                    setTimeout(a, i);
                } else {
                    n(e);
                }
            }
        };
        var var_195 = new Promise(arg_205);
        return var_195;
        function arg_205(e, t) {
            n(e, t, arg_207);
            function arg_207() {
                n(e, t, r);
            }
        }
    }
    function W(e) {
        var t = z[e];
        var var_204 = t || (e in F ? e : z[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1), n = U.length;;
            for (; n--;) {
                if ((e = U[n] + t) in F) {
                    return e;
                }
            }
        }(e) || e);
        return var_204;
    }
    function q(e, t, n) {
        this.dom = null;
        this._clss = [];
        this._nodes = [];
        this._listeners = [];
        this._frag = null;
        if ('object' == typeof e) {
            this.dom = e;
            var r = [];
            var i = [];
            if (e.className) {
                i = e.className.split(' ');
            }
            var o = 0;;
            for (; o < i.length; o++) {
                if ('' !== i[o] && ' ' !== i[o]) {
                    r.push(i[o]);
                }
            }
            this._clss = r;
        } else {
            if (!(n !== undefined && null !== n)) {
                n = true;
            }
            if (e === undefined || 'string' == typeof e && (e.indexOf('#') >= 0 || e.indexOf('.') >= 0)) {
                if (e) {
                    t = e;
                }
                e = 'div';
            }
            this.dom = document.createElement(e);
            if (t) {
                if (t.indexOf('#') >= 0) {
                    this.dom.id = t.split('#')[1];
                } else {
                    if (t.indexOf('.') >= 0) {
                        t = t.split('.')[1];
                    }
                    this.addClass.call(this, t);
                }
            }
        }
        if (true === n) {
            this._frag = document.createDocumentFragment();
            this._frag.appendChild(this.dom);
        }
    }
    function X(e, t) {
        var arg_217 = t || 'div';
        H.self(this, q, arg_217, e);
        this.children = [];
        this._events = [];
    }
    function ee(e, t) {
        var n = Q[e];
        var r = null;
        return var_220;
        function var_220(e) {
            r = function (e) {
                var var_221 = [
                    e.windowX,
                    e.windowY,
                    Date.now()
                ];
                return var_221;
            }(e);
            t(n, r);
        }
    }
    function te(e, t) {
        var n = K[e];
        var r = null;
        return var_222;
        function var_222(e) {
            r = function (e) {
                var t, n = e.touches && e.touches.length >= 1 ? e.touches : e.changedTouches, r = [], i = 0;;
                for (; i < n.length; i++) {
                    t = N.eventCoords(n[i]);
                    var arg_222 = [
                        n[i].identifier,
                        t.x,
                        t.y
                    ];
                    r.push(arg_222);
                }
                var arg_221 = Date.now();
                r.push(arg_221);
                return r;
            }(e);
            t(n, r);
        }
    }
    function ne(e, t) {
        var n = G[e];
        var r = null;
        return var_223;
        function var_223(e) {
            r = function (e) {
                var var_224 = [
                    e.keyNum,
                    Date.now()
                ];
                return var_224;
            }(e);
            t(n, r);
        }
    }
    function re(e, t) {
        var n = Z[e];
        var r = null;
        var i = [];
        return var_225;
        function var_225(e) {
            if (null !== (r = function (e, t) {
                    if (e.acceleration === undefined || e.acceleration && e.acceleration.x === undefined) {
                        e.acceleration = {
                            x: 0,
                            y: 0,
                            z: 0
                        };
                    }
                    if (e.rotationRate === undefined || e.rotationRate && e.rotationRate.alpha === undefined) {
                        e.rotationRate = {
                            alpha: 0,
                            beta: 0,
                            gamma: 0
                        };
                    }
                    var n = [
                        e.acceleration.x,
                        e.acceleration.y,
                        e.acceleration.z,
                        e.rotationRate.alpha,
                        e.rotationRate.beta,
                        e.rotationRate.gamma,
                        Date.now()
                    ];
                    var r = [];
                    if (0 === t.length) {
                        t = n;
                        r = n;
                    } else {
                        var i, o = 0, a = 0;;
                        for (; a < 6; a++) {
                            i = t[a] - n[a];
                            r.push(n[a]);
                            o += Math.abs(i);
                        }
                        var arg_223 = Date.now();
                        r.push(arg_223);
                        t = n;
                        if (o <= 0) {
                            return null;
                        }
                    }
                    var var_226 = {
                        motion: r,
                        prevmotion: t
                    };
                    return var_226;
                }(e, i))) {
                i = r.prevmotion;
                r = r.motion;
                t(n, r);
            }
        }
    }
    function ie(e, t) {
        this._period = e;
        this._interval = t;
        this._date = [];
        this._data = [];
        this._prevTimestamp = 0;
        this._meanPeriod = 0;
        this._meanCounter = 0;
    }
    function oe() {
        this._manifest = {};
        this.state = {
            timeBuffers: {},
            loadTime: Date.now(),
            recording: false,
            initRecord: false,
            record: {
                mouse: true,
                touch: true,
                keys: false,
                motion: true
            }
        };
        this._recordEvent = this._recordEvent.bind(this);
    }
    function le() {
        if (!('interactive' !== document.readyState && 'loaded' !== document.readyState && 'complete' !== document.readyState)) {
            he();
        }
    }
    function he() {
        if (false === ue) {
            var e = 0;;
            for (; e < se.length; e++) {
                se[e].fn.apply(null, se[e].args);
            }
            se = [];
        }
        ue = true;
        if (document.removeEventListener) {
            document.removeEventListener('DOMContentLoaded', he);
            window.removeEventListener('load', he);
        } else {
            document.detachEvent('onreadystatechange', le);
            window.detachEvent('onload', he);
        }
    }
    function de(e, t) {
        var n = e instanceof HTMLIFrameElement;
        try {
            if (n) {
                if (e.parentNode) {
                    var arg_238 = JSON.stringify(t);
                    e.contentWindow.postMessage(arg_238, '*');
                }
            } else {
                var arg_239 = JSON.stringify(t);
                e.postMessage(arg_239, '*');
            }
        } catch (ut) {
            L(ut.message, 'error', 'messaging');
        }
    }
    function fe(e, t) {
        this.target = e;
        this.id = t;
        this.messages = [];
        this.incoming = [];
        this.waiting = [];
    }
    function pe(e, t) {
        var n = this;
        var r = {};
        var i = new Promise(arg_240);
        var o = {
            source: 'hcaptcha',
            label: e,
            id: n.id,
            promise: null,
            lookup: t
        };
        i.then(arg_241)['catch'](arg_242);
        return r;
        function arg_240(e, t) {
            r.resolve = e;
            r.reject = t;
        }
        function arg_241(e) {
            o.promise = 'resolve';
            if (null !== e) {
                o.contents = e;
            }
            de(n.target, o);
        }
        function arg_242(e) {
            o.promise = 'reject';
            if (null !== e) {
                o.error = e;
            }
            de(n.target, o);
        }
    }
    function ve() {
        if (window.Raven) {
            var arg_246 = {
                autoBreadcrumbs: {
                    xhr: true,
                    dom: true,
                    sentry: true
                },
                tags: {
                    'site-host': I.host,
                    'site-key': I.sitekey,
                    'endpoint-url': P.endpoint,
                    'asset-url': I.assetUrl
                },
                sampleRate: 0.1
            };
            Raven.config('https://0f73e9316e6b4aee9e62a74c820604e0@sentry.io/1198795', arg_246);
        }
        if (window.Raven) {
            var arg_247 = {
                'Browser-Agent': T.Browser.agent,
                'Browser-Type': T.Browser.type,
                'Browser-Version': T.Browser.version,
                'System-OS': T.System.os,
                'System-Version': T.System.version,
                'Is-Mobile': T.System.mobile
            };
            Raven.setUserContext(arg_247);
        }
        R('checkbox_internal', 'setup', 'info');
        window.onerror = function (e, t, n, r, i) {
            var arg_248 = {
                name: i.name || 'Error',
                url: t,
                line: n,
                column: r,
                stack: i.stack || ''
            };
            R(e, 'global', 'debug', arg_248);
            L(e, 'error', 'global');
        };
    }
    function be(e) {
        if (null === e) {
            return '';
        }
        var t = [];
        (function n(e, t) {
            var r;
            var i;
            if ('object' == typeof e) {
                for (i in e)
                    true === we(r = e[i]) ? n(r, t) : t[t.length] = ke(i, r);
            } else {
                if (true === Array.isArray(e)) {
                    var o = 0;;
                    for (; o < e.length; o++) {
                        if (true === we(r = e[o])) {
                            n(e, t);
                        } else {
                            t[t.length] = ke(i, r);
                        }
                    }
                } else {
                    t[t.length] = ke(e);
                }
            }
        }(e, t));
        var var_232 = t.join('&');
        return var_232;
    }
    function we(e) {
        var var_233 = true === Array.isArray(e) || 'object' == typeof e;
        return var_233;
    }
    function ke(e, t) {
        var arg_249 = null;
        if (null === t) {
            arg_249 = '';
        } else {
            arg_249 = t;
        }
        var var_234 = encodeURIComponent(e) + '=' + encodeURIComponent(arg_249);
        return var_234;
    }
    function Se(e, t, n) {
        var var_236 = n || {};
        n = var_236;
        var r = {
            url: t,
            method: e.toUpperCase(),
            responseType: n.responseType || 'string',
            dataType: n.dataType || null,
            withCredentials: n.withCredentials || false,
            headers: n.headers || null,
            data: n.data || null
        };
        var var_237 = r.withCredentials && _e;
        r.legacy = var_237;
        if (r.data) {
            if ('json' === r.dataType && 'object' == typeof r.data) {
                r.data = JSON.stringify(r.data);
            }
            if ('query' === r.dataType) {
                r.data = be(r.data);
            }
        }
        var var_238 = null;
        if (n.retry) {
            var_238 = D(arg_250, n.retry);
            function arg_250() {
                var var_239 = Ce(r);
                return var_239;
            }
        } else {
            var_238 = Ce(r);
        }
        return var_238;
    }
    function Ce(e) {
        var t = null;
        if (e.legacy) {
            t = new XDomainRequest();
        } else {
            t = new XMLHttpRequest();
        }
        var var_240 = new Promise(arg_251);
        return var_240;
        function arg_251(n, r) {
            var i;
            t.onload = o('complete');
            t.onerror = t.ontimeout = o('error');
            t.open(e.method, e.url);
            if (!e.legacy && (t.withCredentials = e.withCredentials, e.headers)) {
                for (var a in e.headers)
                    i = e.headers[a], t.setRequestHeader(a, i);
            }
            setTimeout(arg_252, 0);
            function o(i) {
                return var_241;
                function var_241(o) {
                    var a = t.response || t.responseText;
                    var s = t.statusText || '';
                    var c = t.status;
                    var u = t.readyState;
                    if (4 === u || e.legacy) {
                        if ('error' === i || c >= 400 && c <= 511) {
                            var arg_254 = {
                                event: 'network-error',
                                endpoint: e.url,
                                state: u,
                                status: c,
                                message: Ee.getText(c || 400) || s
                            };
                            var var_242 = void r(arg_254);
                            return var_242;
                        }
                        if ('json' === e.responseType && a) {
                            a = JSON.parse(a);
                        }
                        var arg_253 = {
                            state: u,
                            status: c,
                            body: a,
                            message: s
                        };
                        n(arg_253);
                    }
                }
            }
            function arg_252() {
                t.send(e.data);
            }
        }
    }
    function Oe(e, t) {
        if ('object' == typeof e && t === undefined) {
            e = (t = e).url;
        }
        if (null === e) {
            throw new Error('Url missing');
        }
        var var_243 = Se('GET', e, t);
        return var_243;
    }
    function je(e, t, n) {
        var r = T.Browser.supportsCanvas() >>> 0;
        var i = T.Browser.supportsWebAssembly() >>> 0;
        var var_244 = new Promise(arg_255);
        return var_244;
        function arg_255(o, a) {
            var arg_256 = {
                url: P.endpoint + '/checksiteconfig?host=' + t + '&sitekey=' + e + '&sc=' + r + '&swa=' + i,
                responseType: 'json',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Cache-Control': 'no-cache'
                },
                retry: n
            };
            Oe(arg_256).then(arg_257)['catch'](a);
            function arg_257(e) {
                var t = e.body || null;
                if (!t) {
                    throw new Error('Missing response body.');
                }
                if (false === t.success) {
                    var n = (t['error-codes'] || []).join(', ');
                    a(n);
                } else {
                    if (!t.pass && t.error) {
                        a(t.error);
                    } else {
                        o(t);
                    }
                }
            }
        }
    }
    function Ae() {
        H.self(this, q, 'canvas');
        var e = this;
        this.element = this.dom;
        this.ctx = this.element.getContext('2d');
        this.scale = 1;
        var var_245 = window.devicePixelRatio || 1;
        this.dpr = var_245;
        this.clearColor = '#fff';
        this.ctx.roundedRect = function (t, n, r, i, o) {
            var a = null;
            if (r > 0) {
                a = o;
            } else {
                a = -o;
            }
            var s = null;
            if (i > 0) {
                s = o;
            } else {
                s = -o;
            }
            e.ctx.beginPath();
            var arg_258 = t + a;
            e.ctx.moveTo(arg_258, n);
            var arg_259 = t + r - a;
            e.ctx.lineTo(arg_259, n);
            var arg_260 = t + r;
            var arg_261 = t + r;
            var arg_262 = n + s;
            e.ctx.quadraticCurveTo(arg_260, n, arg_261, arg_262);
            var arg_263 = t + r;
            var arg_264 = n + i - s;
            e.ctx.lineTo(arg_263, arg_264);
            var arg_265 = t + r;
            var arg_266 = n + i;
            var arg_267 = t + r - a;
            var arg_268 = n + i;
            e.ctx.quadraticCurveTo(arg_265, arg_266, arg_267, arg_268);
            var arg_269 = t + a;
            var arg_270 = n + i;
            e.ctx.lineTo(arg_269, arg_270);
            var arg_271 = n + i;
            var arg_272 = n + i - s;
            e.ctx.quadraticCurveTo(t, arg_271, t, arg_272);
            var arg_273 = n + s;
            e.ctx.lineTo(t, arg_273);
            var arg_274 = t + a;
            e.ctx.quadraticCurveTo(t, n, arg_274, n);
            e.ctx.closePath();
        };
    }
    function Te(e) {
        var var_246 = e || {};
        e = var_246;
        var var_247 = e.x || 0;
        this.x = var_247;
        var var_248 = e.y || 0;
        this.y = var_248;
        this.rotate = this.rotate.bind(this);
        this.getDistance = this.getDistance.bind(this);
        this.radius = 0;
        this.tolerance = 0;
        this.fill = false;
        this.stroke = false;
        this.fillColor = '#fff';
        this.strokeColor = '#fff';
        this.strokeWidth = 1;
    }
    function Ie(e, t, n) {
        H.self(this, Te, e);
        this.handleIn = new Te(t);
        this.handleOut = new Te(n);
        this.prev = null;
        this.next = null;
        this.index = 0;
    }
    function Me(e, t) {
        var n = e;
        var arg_285 = n.lastIndexOf('.') + 1;
        var r = n.substr(arg_285, n.length);
        if (!t) {
            t = {};
        }
        if (t.fallback && 'svg' === r && 'ie' === T.Browser.type && T.Browser.version <= 11) {
            var arg_286 = e.indexOf(r);
            n = e.substr(0, arg_286) + t.fallback;
        }
        if (t.prefix) {
            n = t.prefix + '/' + e;
        }
        this.attribs = { crossOrigin: t.crossOrigin || null };
        this.id = n;
        this.src = Pe.getLocation(n);
        this.ext = r;
        this.width = 0;
        this.height = 0;
        this.aspect = 0;
        this.loaded = false;
        this.error = false;
        this.element = null;
        this.cb = {
            load: [],
            error: []
        };
    }
    function Le(e, t, n) {
        var r = e[t], i = r.length, o = null;;
        for (; --i > -1;) {
            o = r[i];
            r.splice(i, 1);
            o(n);
        }
        if ('error' === t) {
            e.load = [];
        } else {
            e.error = [];
        }
    }
    function Re(e, t) {
        var n = e;
        if (!t) {
            t = {};
        }
        if (t.prefix) {
            n = t.prefix + '/' + e;
        }
        this.attribs = {
            defer: t.defer || null,
            async: t.async || null,
            crossOrigin: t.crossOrigin || null
        };
        this.id = n;
        this.src = Pe.getLocation(n);
        this.loaded = false;
        this.error = false;
        this.element = null;
        this.cb = {
            load: [],
            error: []
        };
    }
    function Be(e, t, n) {
        var r = e[t], i = r.length, o = null;;
        for (; --i > -1;) {
            o = r[i];
            r.splice(i, 1);
            o(n);
        }
        if ('error' === t) {
            e.load = [];
        } else {
            e.error = [];
        }
    }
    function De(e, t) {
        var n = e;
        if (!t) {
            t = {};
        }
        if (t.prefix) {
            n = t.prefix + '/' + e;
        }
        this.id = n;
        this.src = Pe.getLocation(n);
        this.loaded = false;
        this.error = false;
        this.cb = {
            load: [],
            error: []
        };
        this.data = null;
    }
    function Ne(e, t, n) {
        var r = e[t], i = r.length, o = null;;
        for (; --i > -1;) {
            o = r[i];
            r.splice(i, 1);
            o(n);
        }
        if ('error' === t) {
            e.load = [];
        } else {
            e.error = [];
        }
    }
    function Ge(e) {
        e.addEventListener('keydown', t);
        e.addEventListener('click', t);
        e.setAttribute('role', 'link');
        e.setAttribute('tabindex', 0);
        e.addClass('safe-link');
        function t(t) {
            var n = 'click' === t.type;
            var r = 'keydown' === t.type && (13 === t.which || 'Enter' === t.key);
            if (n || r) {
                var arg_295 = e.dom.getAttribute('data-href');
                window.open(arg_295, '_blank');
            }
        }
    }
    function Ze() {
        H.self(this, x);
        this.state = {
            warning: false,
            error: false,
            ticked: false
        };
    }
    function arg_1(e) {
        et = function () {
            e(rt);
        };
    }
    function arg_3() {
        at.init(st);
    }
    function arg_4(e) {
        !function (e) {
            ct.listen('checkbox-status', arg_351);
            ct.listen('checkbox-reset', arg_352);
            ct.listen('checkbox-clear', arg_353);
            ct.listen('checkbox-location', arg_354);
            e.on('select', arg_355);
            function arg_351(t) {
                e.setStatus(t.text, t.a11yOnly);
            }
            function arg_352() {
                e.reset();
                ae.resetData();
                ae.record();
            }
            function arg_353() {
                e.setLoading(false);
            }
            function arg_354(t) {
                var n = e.getLocation();
                t.resolve(n);
            }
            function arg_355(e) {
                setTimeout(arg_356, 1);
                function arg_356() {
                    ae.stop();
                    var arg_357 = {
                        manifest: ae.getData(),
                        charity: at.getCharity(),
                        link: at.getLink(),
                        action: e
                    };
                    ct.send('checkbox-selected', arg_357);
                }
            }
        }(e);
        var t = at.getSitekey();
        var n = ye.sitekey(t);
        var r = ye.dummykey(t);
        if (n || r) {
            if (r) {
                e.setWarning('This hCaptcha is for testing only. Please contact the site admin if you see this.');
            }
        } else {
            e.setWarning('The sitekey for this hCaptcha is incorrect. Please contact the site admin if you see this.');
        }
        ae.resetData();
        ae.record(true, true, true, true);
        var arg_350 = e.getLocation();
        ct.send('checkbox-loaded', arg_350);
    }
}();