var hcaptcha = function () {
    'use strict';
    var t = setTimeout;
    i.prototype['catch'] = function (e) {
        var var_8 = this.then(null, e);
        return var_8;
    };
    i.prototype.then = function (e, t) {
        var i = new this.constructor(n);
        var arg_11 = new h(e, t, i);
        o(this, arg_11);
        return i;
    };
    i.prototype['finally'] = e;
    i.all = function (e) {
        var var_9 = new i(arg_12);
        return var_9;
        function arg_12(t, n) {
            if (!e || 'undefined' == typeof e.length) {
                throw new TypeError('Promise.all accepts an array');
            }
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) {
                var arg_13 = [];
                var var_10 = t(arg_13);
                return var_10;
            }
            var o = i.length;
            var a = 0;;
            for (; a < i.length; a++) {
                r(a, i[a]);
            }
            function r(e, a) {
                try {
                    if (a && ('object' == typeof a || 'function' == typeof a)) {
                        var s = a.then;
                        if ('function' == typeof s) {
                            var var_11 = void s.call(a, arg_14, n);
                            return var_11;
                            function arg_14(t) {
                                r(e, t);
                            }
                        }
                    }
                    i[e] = a;
                    if (0 == --o) {
                        t(i);
                    }
                } catch (h) {
                    n(h);
                }
            }
        }
    };
    i.resolve = function (e) {
        var var_12 = null;
        if (e && 'object' == typeof e && e.constructor === i) {
            var_12 = e;
        } else {
            var_12 = new i(arg_15);
            function arg_15(t) {
                t(e);
            }
        }
        return var_12;
    };
    i.reject = function (e) {
        var var_13 = new i(arg_16);
        return var_13;
        function arg_16(t, n) {
            n(e);
        }
    };
    i.race = function (e) {
        var var_14 = new i(arg_17);
        return var_14;
        function arg_17(t, n) {
            var i = 0, o = e.length;;
            for (; i < o; i++) {
                e[i].then(t, n);
            }
        }
    };
    var var_0 = 'function' == typeof setImmediate && function (e) {
        setImmediate(e);
    } || function (e) {
        t(e, 0);
    };
    i._immediateFn = var_0;
    i._unhandledRejectionFn = function (e) {
        if ('undefined' != typeof console && console) {
            console.warn('Possible Unhandled Promise Rejection:', e);
        }
    };
    var l;
    var d = function () {
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
    if ('Promise' in d) {
        if (!d.Promise.prototype['finally']) {
            d.Promise.prototype['finally'] = e;
        }
    } else {
        d.Promise = i;
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (e) {
            return var_15;
            function var_15(t, n) {
                if (null === this || this === undefined) {
                    throw TypeError('Array.prototype.indexOf called on null or undefined');
                }
                var i = e(this);
                var o = i.length >>> 0;
                var arg_18 = 0 | n;
                var r = Math.min(arg_18, o);
                if (r < 0) {
                    var arg_19 = o + r;
                    r = Math.max(0, arg_19);
                } else {
                    if (r >= o) {
                        var var_17 = -1;
                        return var_17;
                    }
                }
                if (void 0 === t) {
                    for (; r !== o; ++r) {
                        if (void 0 === i[r] && r in i) {
                            return r;
                        }
                    }
                } else {
                    if (t != t) {
                        for (; r !== o; ++r) {
                            if (i[r] != i[r]) {
                                return r;
                            }
                        }
                    } else {
                        for (; r !== o; ++r) {
                            if (i[r] === t) {
                                return r;
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
                var arg_20 = '.' + e;
                var var_19 = document.querySelectorAll(arg_20);
                return var_19;
            }
            var t = document.getElementsByTagName('*'), n = new RegExp('(^|\\s)' + e + '(\\s|$)'), i = [], o = 0;;
            for (; o < t.length; o++) {
                if (n.test(t[o].className)) {
                    i.push(t[o]);
                }
            }
            return i;
        };
    }
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (e, t) {
            var arg_21 = null;
            if (!t || t < 0) {
                arg_21 = 0;
            } else {
                arg_21 = +t;
            }
            var var_20 = this.substr(arg_21, e.length) === e;
            return var_20;
        };
    }
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (e, t) {
            if (t === undefined || t > this.length) {
                t = this.length;
            }
            var arg_22 = t - e.length;
            var var_21 = this.substring(arg_22, t) === e;
            return var_21;
        };
    }
    try {
        if (Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, 'textContent') && !Object.getOwnPropertyDescriptor(Element.prototype, 'textContent').get) {
            var u = Object.getOwnPropertyDescriptor(Element.prototype, 'innerText');
            var arg_23 = {
                get: function () {
                    var var_22 = u.get.call(this);
                    return var_22;
                },
                set: function (e) {
                    u.set.call(this, e);
                }
            };
            Object.defineProperty(Element.prototype, 'textContent', arg_23);
        }
    } catch (ft) {
    }
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (e) {
            if ('function' != typeof this) {
                throw new TypeError('Function.prototype.bind: Item Can Not Be Bound.');
            }
            var t = Array.prototype.slice.call(arguments, 1);
            var n = this;
            if (this.prototype) {
                i.prototype = this.prototype;
            }
            o.prototype = new i();
            return o;
            function i() {
            }
            function o() {
                var arg_24 = null;
                if (this instanceof i) {
                    arg_24 = this;
                } else {
                    arg_24 = e;
                }
                var arg_26 = Array.prototype.slice.call(arguments);
                var arg_25 = t.concat(arg_26);
                var var_23 = n.apply(arg_24, arg_25);
                return var_23;
            }
        };
    }
    if ('function' != typeof Object.create) {
        Object.create = function (e, t) {
            n.prototype = e;
            if ('object' == typeof t) {
                for (var i in t)
                    t.hasOwnProperty(i) && (n[i] = t[i]);
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
    var p, f, m = [
            'error',
            'info',
            'log',
            'show',
            'table',
            'trace',
            'warn'
        ], g = function (e) {
        }, y = m.length;;
    for (; --y > -1;) {
        l = m[y];
        if (!window.console[l]) {
            window.console[l] = g;
        }
    }
    if (window.atob) {
        try {
            window.atob(' ');
        } catch (mt) {
            p = window.atob;
            (f = function (e) {
                var arg_27 = String(e).replace(/[\t\n\f\r ]+/g, '');
                var var_26 = p(arg_27);
                return var_26;
            }).original = p;
            window.atob = f;
        }
    } else {
        var v = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var w = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
        window.atob = function (e) {
            e = String(e).replace(/[\t\n\f\r ]+/g, '');
            if (!w.test(e)) {
                throw new TypeError('Failed to execute \'atob\' on \'Window\': The string to be decoded is not correctly encoded.');
            }
            var t;
            var n;
            var i;
            var arg_28 = 2 - (3 & e.length);
            e += '=='.slice(arg_28);
            var o = '', r = 0;;
            for (; r < e.length;) {
                var arg_29 = e.charAt(r++);
                var arg_30 = e.charAt(r++);
                t = v.indexOf(arg_29) << 18 | v.indexOf(arg_30) << 12 | (n = v.indexOf(e.charAt(r++))) << 6 | (i = v.indexOf(e.charAt(r++)));
                if (64 === n) {
                    var arg_31 = t >> 16 & 255;
                    o += String.fromCharCode(arg_31);
                } else {
                    if (64 === i) {
                        var arg_32 = t >> 16 & 255;
                        var arg_33 = t >> 8 & 255;
                        o += String.fromCharCode(arg_32, arg_33);
                    } else {
                        var arg_34 = t >> 16 & 255;
                        var arg_35 = t >> 8 & 255;
                        var arg_36 = 255 & t;
                        o += String.fromCharCode(arg_34, arg_35, arg_36);
                    }
                }
            }
            return o;
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
    var b = [];
    var _ = [];
    var x = {
        add: function (e) {
            b.push(e);
        },
        remove: function (e) {
            var t = false, n = b.length;;
            for (; --n > -1 && false === t;) {
                if (b[n].id === e.id) {
                    t = b[n];
                    b.splice(n, 1);
                }
            }
            return t;
        },
        each: function (e) {
            var t = -1;;
            for (; ++t < b.length;) {
                e(b[t]);
            }
        },
        isValidId: function (e) {
            var t = false, n = -1;;
            for (; ++n < b.length && false === t;) {
                if (b[n].id === e) {
                    t = true;
                }
            }
            return t;
        },
        getByIndex: function (e) {
            var t = false, n = -1;;
            for (; ++n < b.length && false === t;) {
                if (n === e) {
                    t = b[n];
                }
            }
            return t;
        },
        getById: function (e) {
            var t = false, n = -1;;
            for (; ++n < b.length && false === t;) {
                if (b[n].id === e) {
                    t = b[n];
                }
            }
            return t;
        },
        getCaptchaIdList: function () {
            var e = [];
            x.each(arg_37);
            return e;
            function arg_37(t) {
                e.push(t.id);
            }
        },
        pushSession: function (e, t) {
            var arg_38 = [
                e,
                t
            ];
            _.push(arg_38);
            if (_.length > 10) {
                var arg_39 = _.length - 10;
                _.splice(0, arg_39);
            }
        },
        getSession: function () {
            return _;
        }
    };
    var k = {
        queue: C,
        depth: function gt(e, t, n) {
            if ('object' == typeof e && e[t] && e[t].length > 0) {
                var i = e[t].length;;
                for (; --i > -1;) {
                    gt(e[t][i], t, n);
                }
            }
            if (e !== undefined) {
                n(e);
            }
        },
        breathe: function (e, t, n) {
            var i = new C();
            var o = null;
            i.add(e);
            o = i.remove();
            for (; o;) {
                var r = 0;;
                for (; r < o[t].length; r++) {
                    i.add(o[t][r]);
                }
                n(o);
                o = i.remove();
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
    var S = [
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
    var O = navigator.userAgent;
    var I = {
        getAgent: function () {
            return O;
        },
        getBrowser: function (e) {
            var arg_40 = e || O;
            var var_29 = B(arg_40, E);
            return var_29;
        },
        getOS: function (e) {
            var arg_41 = e || O;
            var var_30 = B(arg_41, S);
            return var_30;
        }
    };
    T.prototype.hasEvent = function (e, t) {
        var var_41 = 'on' + e in (t || document.createElement('div'));
        return var_41;
    };
    T.prototype.getScreenDimensions = function () {
        var e = {};
        for (var t in window.screen)
            e[t] = window.screen[t];
        delete e.orientation;
        return e;
    };
    T.prototype.interrogateNavigator = function () {
        var e = {};
        for (var t in window.navigator)
            try {
                e[t] = window.navigator[t];
            } catch (ft) {
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
    T.prototype.supportsCanvas = function () {
        var e = document.createElement('canvas');
        var var_42 = !(!e.getContext || !e.getContext('2d'));
        return var_42;
    };
    T.prototype.supportsWebAssembly = function () {
        try {
            if ('object' == typeof WebAssembly && 'function' == typeof WebAssembly.instantiate) {
                var arg_42 = Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0);
                var e = new WebAssembly.Module(arg_42);
                if (e instanceof WebAssembly.Module) {
                    var var_43 = new WebAssembly.Instance(e) instanceof WebAssembly.Instance;
                    return var_43;
                }
            }
        } catch (mt) {
            return false;
        }
    };
    var M = {
        Browser: new T(),
        System: new function () {
            var e;
            var t;
            var n = I.getOS();
            var i = I.getAgent();
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
            var var_44 = e && t;
            this.mobile = var_44;
            this.dpr = function () {
                var var_45 = window.devicePixelRatio || 1;
                return var_45;
            };
            if (this.mobile && n && 'Windows' === n.family && i.indexOf('touch') < 0) {
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
    var A = {
        host: null,
        file: null,
        sitekey: null,
        pingdom: 'safari' === M.Browser.type && 'windows' !== M.System.os && 'mac' !== M.System.os && 'ios' !== M.System.os && 'android' !== M.System.os,
        assetDomain: 'https://newassets.hcaptcha.com',
        assetUrl: 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static',
        width: null,
        height: null,
        mobile: null
    };
    var $ = {
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
    var L = 'Please <a style=\'color:inherit;text-decoration:underline; font: inherit\' target=\'_blank\' href=\'https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto\'>upgrade your browser</a> to complete this captcha.';
    var D = true;
    var F = {
        eventName: function (e) {
            var t = e;
            if ('down' === e || 'up' === e || 'move' === e || 'over' === e || 'out' === e) {
                if (!M.System.mobile || 'down' !== e && 'up' !== e && 'move' !== e) {
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
            var i = F.actionName(e);
            return var_49;
            function var_49(o) {
                var var_50 = o || window.event;
                o = var_50;
                if ('down' === i || 'move' === i || 'up' === i || 'over' === i || 'out' === i || 'click' === i) {
                    var r = F.eventCoords(o);
                    var a = n.getBoundingClientRect();
                    o.windowX = r.x;
                    o.windowY = r.y;
                    o.elementX = o.windowX - (a.x || a.left);
                    o.elementY = o.windowY - (a.y || a.top);
                }
                var var_51 = o.which || o.keyCode || 0;
                o.keyNum = var_51;
                if (!('enter' === e && 13 !== o.keyNum && 32 !== o.keyNum)) {
                    o.action = i;
                    o.targetElement = n;
                    t(o);
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
                var var_52 = n.pageX || n.clientX;
                t.x = var_52;
                var var_53 = n.pageY || n.clientY;
                t.y = var_53;
            } else {
                var var_54 = e.pageX || e.clientX;
                t.x = var_54;
                var var_55 = e.pageY || e.clientY;
                t.y = var_55;
            }
            return t;
        }
    };
    var q = [
        'Webkit',
        'Moz',
        'ms'
    ];
    var H = document.createElement('div').style;
    var X = {};
    J.prototype.createElement = function (e, t) {
        var n = new J(e, t, false);
        this.appendElement.call(this, n);
        this._nodes.push(n);
        return n;
    };
    J.prototype.appendElement = function (e) {
        if (e === undefined) {
            var arg_51 = {
                name: 'DomElement Add Child',
                message: 'Child Element is undefined'
            };
            var var_58 = R(arg_51);
            return var_58;
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
            if (e instanceof J) {
                e._parent = this;
            }
            this.dom.appendChild(t);
        } catch (mt) {
            var arg_52 = {
                name: 'DomElement Add Child',
                message: 'Failed to append child.'
            };
            R(arg_52);
        }
        var var_57 = this;
        return var_57;
    };
    J.prototype.removeElement = function (e) {
        try {
            var t = e;
            if (e.dom) {
                t = t.dom;
                var n = e._nodes.length;;
                for (; --n > -1;) {
                    var arg_53 = e._nodes[n].dom || e._nodes[n];
                    e.dom.removeChild(arg_53);
                    e._nodes.splice(n, 1);
                }
            } else {
                var i = this._nodes.length;;
                for (; --i > -1;) {
                    if (this._nodes[i] === t) {
                        this._nodes.splice(i, 1);
                    }
                }
            }
            if (t.parentNode === this.dom) {
                this.dom.removeChild(t);
            }
        } catch (mt) {
            var arg_54 = {
                name: 'DomElement Remove Child',
                message: 'Failed to remove child.'
            };
            R(arg_54);
        }
    };
    J.prototype.addClass = function (e) {
        if (false === this.hasClass.call(this, e)) {
            this._clss.push(e);
            this.dom.className = this._clss.join(' ');
        }
        var var_59 = this;
        return var_59;
    };
    J.prototype.hasClass = function (e) {
        var t = this.dom.className.indexOf(e) >= 0, n = this._clss.length;;
        for (; n-- && !t;) {
            t = this._clss[n] === e;
        }
        return t;
    };
    J.prototype.removeClass = function (e) {
        var t = this._clss.length;;
        for (; --t > -1;) {
            if (this._clss[t] === e) {
                this._clss.splice(t, 1);
            }
        }
        this.dom.className = this._clss.join(' ');
        var var_60 = this;
        return var_60;
    };
    J.prototype.text = function (e) {
        if (this && this.dom) {
            if (!e) {
                return this.dom.textContent;
            }
            var t, n, i, o, r = /&(.*?);/g, a = /<[a-z][\s\S]*>/i;;
            for (; null !== (t = r.exec(e));) {
                if (false === a.test(t[0])) {
                    i = t[0];
                    o = void 0;
                    (o = document.createElement('div')).innerHTML = i;
                    n = o.textContent;
                    var arg_56 = t[0];
                    var arg_55 = new RegExp(arg_56, 'g');
                    e = e.replace(arg_55, n);
                } else {
                    e = e.replace(t[0], '');
                }
            }
            this.dom.textContent = e;
            var var_61 = this;
            return var_61;
        }
    };
    J.prototype.content = J.prototype.text;
    J.prototype.css = function (e) {
        var t;
        for (var n in e) {
            t = e[n];
            try {
                if ('opacity' !== n && 'zIndex' !== n && 'fontWeight' !== n && isFinite(t) && parseFloat(t) === t) {
                    t += 'px';
                }
                if ('ie' === M.Browser.type && 8 === M.Browser.version && 'opacity' === n) {
                    this.dom.style.filter = 'alpha(opacity=' + 100 * t + ')';
                } else {
                    var i = Y(n);
                    this.dom.style[i] = t;
                }
            } catch (ft) {
            }
        }
        var var_62 = this;
        return var_62;
    };
    J.prototype.backgroundImage = function (e, t, n, i) {
        var o = t !== undefined && n !== undefined;
        var r = { '-ms-high-contrast-adjust': 'none' };
        if ('object' == typeof t) {
            i = t;
        }
        if (i === undefined) {
            i = {};
        }
        if (o) {
            var a = e.width / e.height;
            var s = t;
            var h = s / a;
            if (i.cover && h < n) {
                s = (h = n) * a;
            }
            if (i.contain && h > n) {
                s = (h = n) * a;
            }
            r.width = s;
            r.height = h;
            if (i.center) {
                r.marginLeft = -s / 2;
                r.marginTop = -h / 2;
                r.position = 'absolute';
                r.left = '50%';
                r.top = '50%';
            }
            if (i.left || i.right) {
                var var_63 = i.left || 0;
                r.left = var_63;
                var var_64 = i.top || 0;
                r.top = var_64;
            }
        }
        if ('ie' === M.Browser.type && 8 === M.Browser.version) {
            r.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + e.src + '\',sizingMethod=\'scale\')';
        } else {
            r.background = 'url(' + e.src + ')';
            r.backgroundPosition = '50% 50%';
            r.backgroundRepeat = 'no-repeat';
            r.backgroundSize = o ? s + 'px ' + h + 'px' : i.cover ? 'cover' : i.contain ? 'contain' : '100%';
        }
        this.css.call(this, r);
    };
    J.prototype.setAttribute = function (e, t) {
        var n;
        if ('object' == typeof e) {
            for (var i in e)
                n = e[i], this.dom.setAttribute(i, n);
        } else {
            this.dom.setAttribute(e, t);
        }
    };
    J.prototype.removeAttribute = function (e, t) {
        var n;
        if ('object' == typeof e) {
            for (var i in e)
                n = e[i], this.dom.removeAttribute(i, n);
        } else {
            this.dom.removeAttribute(e, t);
        }
    };
    J.prototype.addEventListener = function (e, t, n) {
        var i = {
            event: F.eventName(e),
            handler: F.eventCallback(e, t, this.dom),
            callback: t
        };
        this._listeners.push(i);
        if (this.dom.addEventListener) {
            this.dom.addEventListener(i.event, i.handler, n);
        } else {
            var arg_57 = 'on' + i.event;
            this.dom.attachEvent(arg_57, i.handler);
        }
    };
    J.prototype.removeEventListener = function (e, t, n) {
        var i, o = this._listeners.length;;
        for (; --o > -1;) {
            if ((i = this._listeners[o]).event === e && i.callback === t) {
                this._listeners.splice(o, 1);
                if (this.dom.removeEventListener) {
                    this.dom.removeEventListener(i.event, i.handler, n);
                } else {
                    var arg_58 = 'on' + i.event;
                    this.dom.detachEvent(arg_58, i.handler);
                }
            }
        }
    };
    J.prototype.focus = function () {
        this.dom.focus();
    };
    J.prototype.blur = function () {
        this.dom.blur();
    };
    J.prototype.html = function (e) {
        if (e) {
            this.dom.innerHTML = e;
        }
        return this.dom.innerHTML;
    };
    J.prototype.__destroy = function () {
        var e, t = this._listeners.length;;
        for (; --t > -1;) {
            e = this._listeners[t];
            this._listeners.splice(t, 1);
            if (this.dom.removeEventListener) {
                this.dom.removeEventListener(e.event, e.handler);
            } else {
                var arg_59 = 'on' + e.event;
                this.dom.detachEvent(arg_59, e.handler);
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
    var V = {
        self: function (e, t) {
            var n = {};
            var i = Array.prototype.slice.call(arguments, 2);
            for (var o in (t.apply(e, i), e))
                n[o] = e[o];
        },
        proto: function (e, t) {
            e.prototype = Object.create(t.prototype);
            e.prototype.constructor = e;
        }
    };
    V.proto(Q, J);
    Q.prototype.initComponent = function (e, t, n) {
        var i = new e(t);
        i._parent = this;
        this.children.push(i);
        if (i.dom) {
            if (n !== undefined) {
                if (n.appendElement) {
                    n.appendElement(i);
                }
            } else {
                this.appendElement(i);
            }
        }
        return i;
    };
    Q.prototype.destroy = function () {
        var e = this;
        try {
            k.depth(this, 'children', arg_61);
            function arg_61(t) {
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
        } catch (mt) {
            throw new Error('Trouble destroying nodes: ' + mt);
        }
        return null;
    };
    Q.prototype._destroy = function () {
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
        } catch (mt) {
            var arg_62 = {
                name: 'DomComponent',
                message: 'Failed to destroy.'
            };
            R(arg_62);
        }
    };
    Q.prototype.on = function (e, t) {
        var n = this._events.length, i = false;;
        for (; --n > -1 && false === i;) {
            if (this._events[n].event === e) {
                i = this._events[n];
            }
        }
        if (false === i) {
            i = {
                event: e,
                listeners: []
            };
            this._events.push(i);
        }
        i.listeners.push(t);
    };
    Q.prototype.off = function (e, t) {
        var n = this._events.length;;
        for (; --n > -1;) {
            if (this._events[n].event === e) {
                var i = this._events[n].listeners.length;;
                for (; --i > -1;) {
                    if (this._events[n].listeners[i] === t) {
                        this._events[n].listeners.splice(i, 1);
                    }
                }
                if (0 === this._events[n].listeners.length) {
                    this._events.splice(n, 1);
                }
            }
        }
    };
    Q.prototype.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1), n = this._events.length;;
        for (; --n > -1 && this._events;) {
            if (this._events[n].event === e) {
                var i = this._events[n].listeners.length;;
                for (; --i > -1;) {
                    this._events[n].listeners[i].apply(this, t);
                }
            }
        }
    };
    var K = {
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
    var G = {
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
    var Z = null;
    var ee = {
        translate: function (e) {
            var t = ee.getBestTrans(G);
            var var_65 = t && t[e] || e;
            return var_65;
        },
        getBestTrans: function (e) {
            var t = ee.getLocale();
            var var_66 = null;
            if (t in e) {
                var_66 = e[t];
            } else {
                if (ee.getShortLocale(t) in e) {
                    var_66 = e[ee.getShortLocale(t)];
                } else {
                    if ('en' in e) {
                        var_66 = e.en;
                    } else {
                        var_66 = null;
                    }
                }
            }
            return var_66;
        },
        getLocale: function () {
            var e = Z || window.navigator.userLanguage || window.navigator.language;
            var t = ee.getShortLocale(e);
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
            var var_67 = null;
            if (K[e]) {
                var_67 = e;
            } else {
                if (K[t]) {
                    var_67 = t;
                } else {
                    var_67 = 'en';
                }
            }
            return var_67;
        },
        setLocale: function (e) {
            Z = e;
        },
        getShortLocale: function (e) {
            var var_68 = null;
            if (e.indexOf('-') >= 0) {
                var arg_63 = e.indexOf('-');
                var_68 = e.substring(0, arg_63);
            } else {
                var_68 = e;
            }
            return var_68;
        },
        isShortLocale: function (e) {
            var var_69 = 2 === e.length || 3 === e.length;
            return var_69;
        },
        addTable: function (e, t) {
            if (!t) {
                t = Object.create(null);
            }
            if (G[e]) {
                var n = G[e];
                for (var i in t)
                    n[i] = t[i];
            } else {
                G[e] = t;
            }
            var var_70 = G[e];
            return var_70;
        },
        getTable: function (e) {
            var var_71 = G[e];
            return var_71;
        },
        addTables: function (e) {
            for (var t in e)
                ee.addTable(t, e[t]);
            return G;
        },
        getTables: function () {
            return G;
        }
    };
    var te = {
        touchstart: 'ts',
        touchend: 'te',
        touchmove: 'tm',
        touchcancel: 'tc'
    };
    var ne = {
        mousedown: 'md',
        mouseup: 'mu',
        mousemove: 'mm'
    };
    var ie = {
        keydown: 'kd',
        keyup: 'ku'
    };
    var oe = { devicemotion: 'dm' };
    ce.prototype.getMeanPeriod = function () {
        return this._meanPeriod;
    };
    ce.prototype.getData = function () {
        this._cleanStaleData();
        return this._data;
    };
    ce.prototype.getSize = function () {
        this._cleanStaleData();
        return this._data.length;
    };
    ce.prototype.getCapacity = function () {
        var var_79 = null;
        if (0 === this._period) {
            var_79 = this._interval;
        } else {
            var arg_67 = this._interval / this._period;
            var_79 = Math.ceil(arg_67);
        }
        return var_79;
    };
    ce.prototype.push = function (e, t) {
        this._cleanStaleData();
        var n = 0 === this._date.length;
        if (e - (this._date[this._date.length - 1] || 0) >= this._period) {
            this._date.push(e);
            this._data.push(t);
        }
        if (!n) {
            var i = e - this._prevTimestamp;
            this._meanPeriod = (this._meanPeriod * this._meanCounter + i) / (this._meanCounter + 1);
            this._meanCounter++;
        }
        this._prevTimestamp = e;
    };
    ce.prototype._cleanStaleData = function () {
        var e = Date.now(), t = this._date.length - 1;;
        for (; t >= 0; t--) {
            if (e - this._date[t] >= this._interval) {
                var arg_68 = t + 1;
                this._date.splice(0, arg_68);
                var arg_69 = t + 1;
                this._data.splice(0, arg_69);
                break;
            }
        }
    };
    le.prototype.record = function (e, t, n, i) {
        this._manifest.st = Date.now();
        this.state.record.mouse = e === undefined ? this.state.record.mouse : e;
        this.state.record.touch = n === undefined ? this.state.record.touch : n;
        this.state.record.keys = t === undefined ? this.state.record.keys : t;
        this.state.record.motion = i === undefined ? this.state.record.motion : i;
        if (false === this.state.initRecord) {
            var arg_70 = document.body;
            var o = new J(arg_70);
            if (this.state.record.mouse) {
                var arg_71 = re('mousedown', this._recordEvent);
                o.addEventListener('mousedown', arg_71);
                var arg_72 = re('mousemove', this._recordEvent);
                o.addEventListener('mousemove', arg_72);
                var arg_73 = re('mouseup', this._recordEvent);
                o.addEventListener('mouseup', arg_73);
            }
            if (true === this.state.record.keys) {
                var arg_74 = se('keyup', this._recordEvent);
                o.addEventListener('keyup', arg_74);
                var arg_75 = se('keydown', this._recordEvent);
                o.addEventListener('keydown', arg_75);
            }
            if (this.state.record.touch && true === M.Browser.hasEvent('touchstart', document.body)) {
                var arg_76 = ae('touchstart', this._recordEvent);
                o.addEventListener('touchstart', arg_76);
                var arg_77 = ae('touchmove', this._recordEvent);
                o.addEventListener('touchmove', arg_77);
                var arg_78 = ae('touchend', this._recordEvent);
                o.addEventListener('touchend', arg_78);
            }
            if (this.state.record.motion && true === M.Browser.hasEvent('devicemotion', window)) {
                var arg_79 = he('devicemotion', this._recordEvent);
                o.addEventListener('devicemotion', arg_79);
            }
            this.state.initRecord = true;
        }
        this.state.recording = true;
    };
    le.prototype.stop = function () {
        this.state.recording = false;
    };
    le.prototype.time = function () {
        return this.state.loadTime;
    };
    le.prototype.getData = function () {
        for (var e in this.state.timeBuffers)
            this._manifest[e] = this.state.timeBuffers[e].getData(), this._manifest[e + '-mp'] = this.state.timeBuffers[e].getMeanPeriod();
        return this._manifest;
    };
    le.prototype.setData = function (e, t) {
        this._manifest[e] = t;
    };
    le.prototype.resetData = function () {
        this._manifest = {};
        this.state.timeBuffers = {};
    };
    le.prototype.circBuffPush = function (e, t) {
        this._recordEvent(e, t);
    };
    le.prototype._recordEvent = function (e, t) {
        if (false !== this.state.recording) {
            try {
                var n = t[t.length - 1];
                if (!this.state.timeBuffers[e]) {
                    this.state.timeBuffers[e] = new ce(16, 15000);
                }
                this.state.timeBuffers[e].push(n, t);
            } catch (mt) {
                var arg_80 = 'Event recording error: ' + JSON.stringify(mt);
                z(arg_80, 'error', 'motion');
            }
        }
    };
    var de = new le();
    var ue = [];
    var pe = false;
    var fe = false;
    new J(document);
    var ye = new J(window);
    be.prototype.setID = function (e) {
        this.id = e;
    };
    be.prototype.contact = function (e, t) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var n = this;
        var i = Date.now().toString(36);
        var o = {
            source: 'hcaptcha',
            label: e,
            id: this.id,
            promise: 'create',
            lookup: i
        };
        if (t) {
            if ('object' != typeof t) {
                throw new Error('Message must be an object.');
            }
            o.contents = t;
        }
        var var_81 = new Promise(arg_86);
        return var_81;
        function arg_86(t, r) {
            var arg_87 = {
                label: e,
                reject: r,
                resolve: t,
                lookup: i
            };
            n.waiting.push(arg_87);
            we(n.target, o);
        }
    };
    be.prototype.listen = function (e, t) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var n = this.messages.length, i = false;;
        for (; --n > -1 && false === i;) {
            if (this.messages[n].label === e) {
                i = this.messages[n];
            }
        }
        if (false === i) {
            i = {
                label: e,
                listeners: []
            };
            this.messages.push(i);
        }
        i.listeners.push(t);
    };
    be.prototype.answer = function (e, t) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var n = this.incoming.length, i = false;;
        for (; --n > -1 && false === i;) {
            if (this.incoming[n].label === e) {
                i = this.incoming[n];
            }
        }
        if (false === i) {
            i = {
                label: e,
                listeners: []
            };
            this.incoming.push(i);
        }
        i.listeners.push(t);
    };
    be.prototype.send = function (e, t) {
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
        we(this.target, n);
    };
    be.prototype.check = function (e, t) {
        var n = [].concat.apply([], [
                this.messages,
                this.incoming,
                this.waiting
            ]), i = [], o = -1;;
        for (; ++o < n.length;) {
            if (n[o].label === e) {
                if (t && n[o].lookup && t !== n[o].lookup) {
                    continue;
                }
                i.push(n[o]);
            }
        }
        return i;
    };
    be.prototype.respond = function (e) {
        var t, n, i = -1, o = 0, r = [].concat.apply([], [
                this.messages,
                this.incoming,
                this.waiting
            ]);;
        for (; ++i < r.length;) {
            if (r[i].label === e.label) {
                if (e.lookup && r[i].lookup && e.lookup !== r[i].lookup) {
                    continue;
                }
                var a = [];
                t = r[i];
                if (e.error) {
                    a.push(e.error);
                }
                if (e.contents) {
                    a.push(e.contents);
                }
                if (e.promise && 'create' !== e.promise) {
                    t[e.promise].apply(t[e.promise], a);
                    var s = this.waiting.length, h = false;;
                    for (; --s > -1 && false === h;) {
                        if (this.waiting[s].label === t.label && this.waiting[s].lookup === t.lookup) {
                            h = true;
                            this.waiting.splice(s, 1);
                        }
                    }
                    continue;
                }
                o = 0;
                for (; o < t.listeners.length; o++) {
                    n = t.listeners[o];
                    if ('create' === e.promise) {
                        var c = _e.call(this, t.label, e.lookup);
                        a.push(c);
                    }
                    n.apply(n, a);
                }
            }
        }
        r = null;
    };
    be.prototype.destroy = function () {
        this.messages = null;
        this.incoming = null;
        this.waiting = null;
        return null;
    };
    var xe = {
        chats: [],
        isSupported: function () {
            var var_82 = !!window.postMessage;
            return var_82;
        },
        createChat: function (e, t) {
            var n = new be(e, t);
            xe.chats.push(n);
            return n;
        },
        addChat: function (e) {
            xe.chats.push(e);
        },
        removeChat: function (e) {
            var t = false, n = xe.chats.length;;
            for (; --n > -1 && false === t;) {
                if (e.id === xe.chats[n].id && e.target === xe.chats[n].target) {
                    t = xe.chats[n];
                    xe.chats.splice(n, 1);
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
                    var n, i = xe.chats, o = -1;;
                    for (; ++o < i.length;) {
                        if ((n = i[o]).id === t.id) {
                            n.respond(t);
                        }
                    }
                } catch (ft) {
                    var arg_88 = {
                        event: e,
                        error: ft
                    };
                    W('postMessage handler error', 'postMessage', 'debug', arg_88);
                }
            }
        }
    };
    if (window.addEventListener) {
        window.addEventListener('message', xe.handle);
    } else {
        window.attachEvent('onmessage', xe.handle);
    }
    var Ce = {
        getCookie: function (e) {
            var t = document.cookie.replace(/ /g, '').split(';');
            try {
                var n = '', i = t.length;;
                for (; i-- && !n;) {
                    if (t[i].indexOf(e) >= 0) {
                        n = t[i];
                    }
                }
                return n;
            } catch (mt) {
                return '';
            }
        },
        hasCookie: function (e) {
            var var_83 = !!Ce.getCookie(e);
            return var_83;
        },
        supportsAPI: function () {
            try {
                var var_84 = 'hasStorageAccess' in document && 'requestStorageAccess' in document;
                return var_84;
            } catch (mt) {
                return false;
            }
        },
        hasAccess: function () {
            var var_85 = new Promise(arg_89);
            return var_85;
            function arg_89(e) {
                document.hasStorageAccess().then(arg_90)['catch'](arg_91);
                function arg_90() {
                    e(true);
                }
                function arg_91() {
                    e(false);
                }
            }
        },
        requestAccess: function () {
            try {
                var var_86 = document.requestStorageAccess();
                return var_86;
            } catch (mt) {
                var var_87 = Promise.resolve();
                return var_87;
            }
        }
    };
    Se.prototype.setupParentContainer = function (e) {
        var t;
        var n = e['challenge-container'];
        if (n) {
            if ('string' == typeof n) {
                t = document.getElementById(n);
            } else {
                t = n;
            }
        }
        if (t) {
            this._hasCustomContainer = true;
            this._parent = t;
        } else {
            this._hasCustomContainer = false;
            this._parent = document.body;
        }
    };
    Se.prototype._hideIframe = function () {
        var e = {};
        if ('ie' !== M.Browser.type || 'ie' === M.Browser.type && 8 !== M.Browser.version) {
            e.opacity = 0;
            e.visibility = 'hidden';
        } else {
            e.display = 'none';
        }
        this.$iframe.setAttribute('aria-hidden', true);
        this.$iframe.css(e);
    };
    Se.prototype._showIframe = function () {
        var e = {};
        if ('ie' !== M.Browser.type || 'ie' === M.Browser.type && 8 !== M.Browser.version) {
            e.opacity = 1;
            e.visibility = 'visible';
        } else {
            e.display = 'block';
        }
        this.$iframe.removeAttribute('aria-hidden');
        this.$iframe.css(e);
    };
    Se.prototype.style = function () {
        if (this._hasCustomContainer) {
            var arg_113 = {
                border: 0,
                position: 'relative',
                backgroundColor: '#fff'
            };
            this.$iframe.css(arg_113);
        } else {
            var e = {
                backgroundColor: '#fff',
                border: '1px solid rgb(208, 208, 208)',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 4px',
                borderRadius: 4,
                left: -10000,
                top: -10000,
                zIndex: -9999999999999,
                position: 'absolute'
            };
            if ('ie' !== M.Browser.type || 'ie' === M.Browser.type && 8 !== M.Browser.version) {
                e.transition = 'opacity 0.15s ease-out';
                e.opacity = 0;
                e.visibility = 'hidden';
            } else {
                e.display = 'none';
            }
            this.$container.css(e);
            var arg_114 = { position: 'relative' };
            this.$wrapper.css(arg_114);
            var arg_115 = {
                width: '100%',
                height: '100%',
                position: 'fixed',
                pointerEvents: 'none',
                top: 0,
                left: 0,
                zIndex: 0,
                backgroundColor: '#fff',
                opacity: 0.05
            };
            this.$overlay.css(arg_115);
            var arg_116 = {
                borderWidth: 11,
                position: 'absolute',
                pointerEvents: 'none',
                marginTop: -11,
                zIndex: 1,
                right: '100%'
            };
            this.$arrow.css(arg_116);
            var arg_117 = {
                borderWidth: 10,
                borderStyle: 'solid',
                borderColor: 'transparent rgb(255, 255, 255) transparent transparent',
                position: 'relative',
                top: 10,
                zIndex: 1
            };
            this.$arrow.fg.css(arg_117);
            var arg_118 = {
                borderWidth: 11,
                borderStyle: 'solid',
                borderColor: 'transparent rgb(208, 208, 208) transparent transparent',
                position: 'relative',
                top: -11,
                zIndex: 0
            };
            this.$arrow.bg.css(arg_118);
            var arg_119 = {
                border: 0,
                zIndex: 2000000000,
                position: 'relative'
            };
            this.$iframe.css(arg_119);
        }
    };
    Se.prototype.setup = function (e) {
        var var_96 = this.chat.send('create-challenge', e);
        return var_96;
    };
    Se.prototype.sendProof = function (e) {
        var var_97 = this.chat.contact('solve-proof', e);
        return var_97;
    };
    Se.prototype.sendTranslation = function (e) {
        var t = {
            locale: e,
            table: ee.getTable(e) || {}
        };
        if (this.chat) {
            this.chat.send('challenge-translate', t);
        }
    };
    Se.prototype.isVisible = function () {
        return this._visible;
    };
    Se.prototype.getDimensions = function (e, t) {
        var var_98 = null;
        if (this._visible) {
            var arg_120 = {
                width: e,
                height: t
            };
            var_98 = this.chat.contact('resize-challenge', arg_120);
        } else {
            var_98 = Promise.resolve(null);
        }
        return var_98;
    };
    Se.prototype.show = function () {
        if (true !== this._visible) {
            this._visible = true;
            if (this._hasCustomContainer) {
                this._showIframe();
            } else {
                var e = { zIndex: 9999999999999 };
                if ('ie' !== M.Browser.type || 'ie' === M.Browser.type && 8 !== M.Browser.version) {
                    e.opacity = 1;
                    e.visibility = 'visible';
                } else {
                    e.display = 'block';
                }
                this.$container.css(e);
                this.$container.removeAttribute('aria-hidden');
                var arg_121 = {
                    pointerEvents: 'auto',
                    cursor: 'pointer'
                };
                this.$overlay.css(arg_121);
                this.$iframe.dom.focus();
            }
        }
    };
    Se.prototype.close = function () {
        this._visible = false;
        if (this._hasCustomContainer) {
            this._hideIframe();
            var var_99 = void this.chat.send('close-challenge');
            return var_99;
        }
        var e = {
            left: -10000,
            top: -10000,
            zIndex: -9999999999999
        };
        if ('ie' !== M.Browser.type || 'ie' === M.Browser.type && 8 !== M.Browser.version) {
            e.opacity = 0;
            e.visibility = 'hidden';
        } else {
            e.display = 'none';
        }
        this.$container.css(e);
        if (!this._hasCustomContainer) {
            var arg_122 = {
                pointerEvents: 'none',
                cursor: 'default'
            };
            this.$overlay.css(arg_122);
        }
        this.chat.send('close-challenge');
        this.$container.setAttribute('aria-hidden', true);
    };
    Se.prototype.size = function (e, t, n) {
        this.width = e;
        this.height = t;
        this.mobile = n;
        var arg_123 = {
            width: e,
            height: t
        };
        this.$iframe.css(arg_123);
        if (!this._hasCustomContainer) {
            var arg_124 = {
                width: e,
                height: t
            };
            this.$wrapper.css(arg_124);
            if (n) {
                var arg_125 = { opacity: 0.5 };
                this.$overlay.css(arg_125);
            } else {
                var arg_126 = { opacity: 0.05 };
                this.$overlay.css(arg_126);
            }
        }
    };
    Se.prototype.position = function (e) {
        if (!this._hasCustomContainer && e) {
            var t = window.document.documentElement;
            var n = M.Browser.scrollY();
            var i = M.Browser.width();
            var o = M.Browser.height();
            var r = this.mobile || 'invisible' === this.config.size || e.offset.left + e.tick.x <= e.tick.width / 2;
            var a = Math.round(e.bounding.top) + n !== e.offset.top;
            var s = this.height > t.clientHeight;
            var h = null;
            if (r) {
                h = (i - this.width) / 2;
            } else {
                h = e.bounding.left + e.tick.right + 10;
            }
            if (h + this.width + 10 > i || h < 0) {
                h = (i - this.width) / 2;
                r = true;
            }
            var c = (t.scrollHeight < t.clientHeight ? t.clientHeight : t.scrollHeight) - this.height - 10;
            var l = null;
            if (r) {
                l = (o - this.height) / 2 + n;
            } else {
                l = e.bounding.top + e.tick.y + n - this.height / 2;
            }
            if (a && l < n) {
                l = n + 10;
            }
            if (a && l + this.height >= n + o) {
                l = n + o - (this.height + 10);
            }
            var arg_127 = Math.min(l, c);
            l = Math.max(arg_127, 10);
            var d = e.bounding.top + e.tick.y + n - l - 10;
            var u = this.height - 10 - 30;
            var arg_128 = Math.min(d, u);
            d = Math.max(arg_128, 10);
            var arg_129 = {
                left: h,
                top: l
            };
            this.$container.css(arg_129);
            var arg_130 = { display: r ? 'none' : 'block' };
            this.$arrow.fg.css(arg_130);
            var arg_131 = { display: r ? 'none' : 'block' };
            this.$arrow.bg.css(arg_131);
            var arg_132 = { top: d };
            this.$arrow.css(arg_132);
            this.top = l;
            this.$container.dom.getBoundingClientRect();
            return s;
        }
    };
    Se.prototype.destroy = function () {
        if (this._visible) {
            this.close.call(this);
        }
        if (this._hasCustomContainer) {
            this._parent.removeChild(this.$iframe.dom);
        } else {
            this._parent.removeChild(this.$container.dom);
            this.$container = this.$container.__destroy();
        }
        this.$iframe = this.$iframe.__destroy();
        xe.removeChat(this.chat);
        this.chat = this.chat.destroy();
    };
    Se.prototype.setReady = function (e) {
        this.ready = e;
        if (this.ready) {
            var t, n = this.listeners.length;;
            for (; --n > -1;) {
                t = this.listeners[n];
                this.listeners.splice(n, 1);
                t();
            }
        }
    };
    Se.prototype.onReady = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        if (this.ready) {
            n();
        } else {
            this.listeners.push(n);
        }
        function n() {
            e.apply(null, t);
        }
    };
    Se.prototype.onOverlayClick = function (e) {
        if (!this._hasCustomContainer) {
            this.$overlay.addEventListener('click', e);
        }
    };
    Se.prototype.setEndpoint = function (e) {
        if (this.chat) {
            var arg_133 = { endpoint: e };
            this.chat.send('challenge-update', arg_133);
        }
    };
    Se.prototype.setData = function (e) {
        if (this.chat) {
            this.chat.send('challenge-data', e);
        }
    };
    Oe.prototype.setResponse = function (e) {
        this.response = e;
        this.$iframe.dom.setAttribute('data-hcaptcha-response', e);
        if ('off' !== $.recaptchacompat) {
            this.$textArea0.dom.value = e;
        }
        this.$textArea1.dom.value = e;
    };
    Oe.prototype.style = function () {
        switch (this.config.size) {
        case 'compact': {
                var arg_134 = {
                    width: 164,
                    height: 144
                };
                this.$iframe.css(arg_134);
                break;
            }
        case 'invisible': {
                var arg_135 = { display: 'none' };
                this.$iframe.css(arg_135);
                break;
            }
        default: {
                var arg_136 = {
                    width: 303,
                    height: 78,
                    overflow: 'hidden'
                };
                this.$iframe.css(arg_136);
            }
        }
    };
    Oe.prototype.reset = function () {
        this._ticked = false;
        if (this.chat) {
            this.chat.send('checkbox-reset');
        }
    };
    Oe.prototype.clearLoading = function () {
        if (this.chat) {
            this.chat.send('checkbox-clear');
        }
    };
    Oe.prototype.sendTranslation = function (e) {
        var t = {
            locale: e,
            table: ee.getTable(e) || {}
        };
        if (this.chat) {
            this.chat.send('checkbox-translate', t);
        }
    };
    Oe.prototype.status = function (e, t) {
        if (this.chat) {
            var arg_137 = {
                text: e || null,
                a11yOnly: t || false
            };
            this.chat.send('checkbox-status', arg_137);
        }
    };
    Oe.prototype.tick = function () {
        this._ticked = true;
        if (this.chat) {
            this.chat.send('checkbox-tick');
        }
    };
    Oe.prototype.getTickLocation = function () {
        var var_100 = this.chat.contact('checkbox-location');
        return var_100;
    };
    Oe.prototype.getOffset = function () {
        var e = this.$iframe.dom;
        if (!e.offsetParent) {
            e = e.parentElement;
        }
        var t = 0, n = 0;;
        for (; e;) {
            t += e.offsetLeft;
            n += e.offsetTop;
            e = e.offsetParent;
        }
        var var_101 = {
            top: n,
            left: t
        };
        return var_101;
    };
    Oe.prototype.getBounding = function () {
        var var_102 = this.$iframe.dom.getBoundingClientRect();
        return var_102;
    };
    Oe.prototype.destroy = function () {
        if (this._ticked) {
            this.reset();
        }
        this.$container.removeElement(this.$iframe);
        this.$container.removeElement(this.$textArea1);
        if ('off' !== $.recaptchacompat) {
            this.$container.removeElement(this.$textArea0);
            this.$textArea0 = this.$textArea0.__destroy();
        }
        this.$textArea1 = this.$textArea1.__destroy();
        this.$container = this.$container.__destroy();
        this.$iframe = this.$iframe.__destroy();
        xe.removeChat(this.chat);
        this.chat = this.chat.destroy();
    };
    Ie.prototype._resetTimer = function () {
        if (null !== this._responseTimer) {
            clearTimeout(this._responseTimer);
            this._responseTimer = null;
        }
    };
    Ie.prototype.initChallenge = function (e) {
        if (!e) {
            e = {};
        }
        var t = e.manifest || null;
        var n = e.charity || null;
        var i = e.link || null;
        var o = e.action || '';
        var r = e.rqdata || null;
        var a = M.Browser.width();
        var s = M.Browser.height();
        this._resetTimer();
        if (!t) {
            (t = Object.create(null)).st = Date.now();
        }
        t.v = 1;
        t.topLevel = de.getData();
        t.session = x.getSession();
        t.widgetList = x.getCaptchaIdList();
        t.widgetId = this.id;
        t.href = window.location.href;
        var arg_138 = JSON.stringify(this._state);
        t.prev = JSON.parse(arg_138);
        this._resetState();
        this.checkbox.setResponse('');
        var arg_139 = {
            manifest: t,
            width: a,
            height: s,
            charity: n,
            link: i,
            action: o,
            rqdata: r
        };
        this.challenge.setup(arg_139);
    };
    Ie.prototype.displayChallenge = function (e) {
        var t = this;
        this.visible = true;
        var n = this.checkbox;
        var i = this.challenge;
        var o = M.Browser.height();
        if (!('ie' === M.Browser.type && 8 === M.Browser.version)) {
            var r = window.getComputedStyle(document.body).getPropertyValue('overflow-y');
            this.overflow.override = 'hidden' === r;
            if (this.overflow.override) {
                var var_104 = '' === document.body.style.overflow && '' === document.body.style.overflowY;
                this.overflow.cssUsed = var_104;
                if (!this.overflow.cssUsed) {
                    this.overflow.value = '' === r ? 'auto' : r;
                }
                this.overflow.scroll = M.Browser.scrollY();
                document.body.style.overflowY = 'auto';
            }
        }
        var var_103 = new Promise(function (t) {
            n.status();
            n.getTickLocation().then(arg_141);
            function arg_141(r) {
                i.size(e.width, e.height, e.mobile);
                i.show();
                n.clearLoading();
                n.location.bounding = n.getBounding();
                n.location.tick = r;
                n.location.offset = n.getOffset();
                if (i.position(n.location)) {
                    var arg_142 = i.height - o;
                    (window.document.scrollingElement || document.getElementsByTagName('html')[0]).scrollTop = Math.abs(arg_142) + i.top;
                }
                t();
            }
        }).then(arg_140);
        return var_103;
        function arg_140() {
            if (t.onOpen) {
                N(t.onOpen);
            }
        }
    };
    Ie.prototype.resize = function (e, t, n) {
        var i = this;
        var o = this.checkbox;
        var r = this.challenge;
        r.getDimensions(e, t).then(arg_143)['catch'](arg_144);
        function arg_143(e) {
            if (e) {
                r.size(e.width, e.height, e.mobile);
            }
            o.location.bounding = o.getBounding();
            o.location.offset = o.getOffset();
            if (!(M.System.mobile && !n)) {
                r.position(o.location);
            }
        }
        function arg_144(e) {
            var arg_145 = {
                event: 'challenge-error',
                message: 'Captcha resize caused error.',
                error: e
            };
            i.closeChallenge.call(i, arg_145);
        }
    };
    Ie.prototype.position = function () {
        var e = this.checkbox;
        var t = this.challenge;
        if (!M.System.mobile) {
            e.location.bounding = e.getBounding();
            t.position(e.location);
        }
    };
    Ie.prototype.reset = function () {
        this.checkbox.reset();
        this.checkbox.setResponse('');
        this._resetTimer();
        this._resetState();
    };
    Ie.prototype._resetState = function () {
        for (var e in this._state)
            this._state[e] = false;
    };
    Ie.prototype.closeChallenge = function (e) {
        this.visible = false;
        var t = this;
        var n = this.checkbox;
        var i = this.challenge;
        if (this.overflow.override) {
            (window.document.scrollingElement || document.getElementsByTagName('html')[0]).scrollTop = this.overflow.scroll;
            this.overflow.override = false;
            this.overflow.scroll = 0;
            document.body.style.overflowY = this.overflow.cssUsed ? null : this.overflow.value;
        }
        var o = e.response || '';
        switch (n.setResponse(o), i.close(), n.$iframe.dom.focus(), e.event) {
        case 'challenge-escaped': {
                this._state.escaped = true;
                n.reset();
                if (t.onClose) {
                    N(t.onClose);
                }
                break;
            }
        case 'challenge-expired': {
                this._state.expiredChallenge = true;
                n.reset();
                n.status('hCaptcha window closed due to timeout.', true);
                if (t.onChalExpire) {
                    N(t.onChalExpire);
                }
                break;
            }
        case 'challenge-error':
        case 'bundle-error':
        case 'network-error': {
                n.reset();
                if ('network-error' === e.event) {
                    n.status(e.message);
                }
                if (this.onError) {
                    var arg_146 = e.message || '';
                    N(this.onError, arg_146);
                }
                break;
            }
        case 'challenge-passed': {
                this._state.passed = true;
                n.tick();
                if (this.onPass) {
                    N(this.onPass, o);
                }
                if ('number' == typeof e.expiration) {
                    t._resetTimer();
                    var arg_148 = 1000 * e.expiration;
                    t._responseTimer = setTimeout(arg_147, arg_148);
                    function arg_147() {
                        try {
                            n.reset();
                            n.setResponse('');
                            n.status('hCaptcha security token has expired. Please complete the challenge again.', true);
                        } catch (mt) {
                            var arg_149 = 'Checkbox not present or could not destroy on expiration: ' + mt.message;
                            z(arg_149, 'error', 'global');
                        }
                        if (t.onExpire) {
                            N(t.onExpire);
                        }
                        t._responseTimer = null;
                        t._state.expiredResponse = true;
                    }
                }
            }
        }
    };
    Ie.prototype.updateTranslation = function (e) {
        var t = this.checkbox;
        var n = this.challenge;
        t.sendTranslation(e);
        n.sendTranslation(e);
    };
    Ie.prototype.isReady = function () {
        return this._ready;
    };
    Ie.prototype.setReady = function (e) {
        this._ready = e;
        if (this._ready) {
            var t, n = this._listeners.length;;
            for (; --n > -1;) {
                t = this._listeners[n];
                this._listeners.splice(n, 1);
                t();
            }
        }
    };
    Ie.prototype.onReady = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        if (this._ready) {
            n();
        } else {
            this._listeners.push(n);
        }
        function n() {
            e.apply(null, t);
        }
    };
    Ie.prototype.destroy = function () {
        this._resetTimer();
        if (this.overflow.override) {
            (window.document.scrollingElement || document.getElementsByTagName('html')[0]).scrollTop = this.overflow.scroll;
            this.overflow.override = false;
            this.overflow.scroll = 0;
            document.body.style.overflowY = this.overflow.cssUsed ? null : this.overflow.value;
        }
        this.challenge.destroy();
        this.checkbox.destroy();
        this.challenge = null;
        this.checkbox = null;
    };
    V.proto(Be, J);
    Be.prototype.dimensions = function (e, t) {
        var arg_150 = {
            width: e,
            height: t
        };
        this.css(arg_150);
        var arg_151 = e / this.scale;
        this.element.width = Math.round(arg_151) * this.dpr;
        var arg_152 = t / this.scale;
        this.element.height = Math.round(arg_152) * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
        var arg_153 = e / this.scale;
        this.width = Math.round(arg_153);
        var arg_154 = t / this.scale;
        this.height = Math.round(arg_154);
    };
    Be.prototype.clear = function () {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.element.width, this.element.height);
        }
    };
    Be.prototype.draw = function () {
        if (this.ctx) {
            this.ctx.fillStyle = this.clearColor;
            this.ctx.fillRect(0, 0, this.element.width, this.element.height);
        }
    };
    Be.prototype._destroy = function () {
        this.__destroy();
        this.element = null;
        this.ctx = null;
        this.width = null;
        this.height = null;
    };
    Te.prototype.rotate = function (e, t) {
        var n = function (e) {
            var var_105 = e * (Math.PI / 180);
            return var_105;
        }(t);
        var i = Math.sin(n);
        var o = Math.cos(n);
        var r = this.x - e.x;
        var a = this.y - e.y;
        this.x = r * o - a * i + e.x;
        this.y = r * i + a * o + e.y;
    };
    Te.prototype.getDistance = function (e) {
        var arg_156 = this.x - e.x;
        var arg_157 = this.y - e.y;
        var arg_155 = Math.pow(arg_156, 2) + Math.pow(arg_157, 2);
        var var_106 = Math.sqrt(arg_155);
        return var_106;
    };
    Te.prototype.getAngle = function (e) {
        var t = e.x - this.x;
        var n = e.y - this.y;
        var i = 180 * Math.atan2(n, t) / Math.PI;
        if (i < 0) {
            i += 360;
        }
        return i;
    };
    Te.prototype.hitTest = function (e) {
        var var_107 = this.radius + this.tolerance >= this.getDistance(e);
        return var_107;
    };
    Te.prototype.restrict = function (e, t, n, i) {
        if ('x' !== e && 'y' !== e) {
            throw new Error('Point.restrict requires a value: x or y');
        }
        if (t + this[e] < n) {
            t = this[e] - n;
        } else {
            if (t + this[e] > i) {
                t = i - this[e];
            }
        }
        var var_108 = this[e] + t;
        return var_108;
    };
    Te.prototype.draw = function (e) {
        e.ctx.beginPath();
        var arg_158 = this.radius / e.scale;
        var arg_159 = 2 * Math.PI;
        e.ctx.arc(this.x, this.y, arg_158, 0, arg_159, false);
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
    V.proto(Me, Te);
    Me.prototype.set = function (e, t, n) {
        var var_109 = e.x || this.x;
        this.x = var_109;
        var var_110 = e.y || this.y;
        this.y = var_110;
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
    Me.prototype.clone = function () {
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
        var i = new Me();
        if (t.x === n.x && t.y === n.y) {
            i.set(e);
        } else {
            i.set(e, t, n);
        }
        i.index = this.index;
        i.prev = this.prev;
        i.next = this.next;
        i.radius = this.radius;
        i.tolerance = this.tolerance;
        i.fill = this.fill;
        i.stroke = this.stroke;
        i.fillColor = this.fillColor;
        i.strokeColor = this.strokeColor;
        i.strokeWidth = this.strokeWidth;
        return i;
    };
    Me.prototype.move = function (e, t) {
        this.x += e;
        this.y += t;
        this.handleIn.x += e;
        this.handleIn.y += t;
        this.handleOut.x += e;
        this.handleOut.y += t;
    };
    Me.prototype.render = function (e) {
        if (this.handleIn.x !== this.x && this.handleIn.y !== this.y) {
            this.handleIn.draw(e);
        }
        if (this.handleOut.x !== this.x && this.handleOut.y !== this.y) {
            this.handleOut.draw(e);
        }
        this.draw(e);
    };
    var Ae = {
        getType: function (e) {
            var var_111 = null;
            if (e.toLowerCase().match(/\.(?:jpg|gif|png|jpeg|svg)$/g)) {
                var_111 = 'image';
            } else {
                if (e.toLowerCase().match(/\.(?:js)$/g)) {
                    var_111 = 'script';
                } else {
                    var_111 = 'file';
                }
            }
            return var_111;
        },
        getLocation: function (e) {
            if ($.assethost && e.indexOf(A.assetDomain) >= 0) {
                var var_112 = $.assethost + e.replace(A.assetDomain, '');
                return var_112;
            }
            if ($.imghost && e.indexOf('imgs') >= 0) {
                var t = null;
                if (e.indexOf('.ai') >= 0) {
                    t = e.indexOf('.ai') + 3;
                } else {
                    t = e.indexOf('.com') + 4;
                }
                var var_113 = $.imghost + e.substr(t, e.length);
                return var_113;
            }
            return e;
        }
    };
    $e.prototype.load = function () {
        var e = this;
        var t = this.attribs;
        var n = this.src;
        var i = this.id;
        var var_117 = new Promise(arg_163);
        return var_117;
        function arg_163(o, r) {
            var a = new Image();
            e.element = a;
            if (t.crossOrigin) {
                a.crossOrigin = t.crossOrigin;
            }
            a.onerror = function (t) {
                e.error = true;
                a.onload = a.onerror = null;
                var n = (t && t.message ? t.message : 'Loading Error') + ': ' + i;
                Le(e.cb, 'error', n);
                r(n);
            };
            a.onload = function () {
                if (!e.loaded) {
                    e.width = a.width;
                    e.height = a.height;
                    e.aspect = a.width / a.height;
                    e.loaded = true;
                    a.onload = a.onerror = null;
                    Le(e.cb, 'load', e);
                    o(e);
                }
            };
            a.src = n;
            if (a.complete) {
                a.onload();
            }
        }
    };
    $e.prototype.onload = function (e) {
        if (!this.error) {
            if (this.loaded) {
                e(this);
            } else {
                this.cb.load.push(e);
            }
        }
    };
    $e.prototype.onerror = function (e) {
        if (!(this.loaded && !this.error)) {
            if (this.error) {
                e(this);
            } else {
                this.cb.error.push(e);
            }
        }
    };
    je.prototype.load = function () {
        var e = this;
        var t = this.attribs;
        var n = this.src;
        var i = this.id;
        var var_118 = new Promise(arg_164);
        return var_118;
        function arg_164(o, r) {
            var a = document.createElement('script');
            e.element = a;
            a.onerror = function (t) {
                e.error = true;
                a.onload = a.onreadystatechange = a.onerror = null;
                var n = (t.message || 'Loading Error') + ': ' + i;
                De(e.cb, 'error', n);
                r(n);
            };
            a.onload = a.onreadystatechange = function () {
                if (!(this.loaded || a.readyState && 'loaded' !== a.readyState && 'complete' !== a.readyState)) {
                    e.loaded = true;
                    a.onload = a.onreadystatechange = a.onerror = null;
                    document.body.removeChild(a);
                    De(e.cb, 'load', e);
                    o(e);
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
    je.prototype.onload = function (e) {
        if (!this.error) {
            if (this.loaded) {
                e(this);
            } else {
                this.cb.load.push(e);
            }
        }
    };
    je.prototype.onerror = function (e) {
        if (!(this.loaded && !this.error)) {
            if (this.error) {
                e(this);
            } else {
                this.cb.error.push(e);
            }
        }
    };
    var Ne = {
        400: 'Rate limited or network error. Please retry.',
        429: 'Your computer or network has sent too many requests.',
        500: 'Cannot contact hCaptcha. Check your connection and try again.'
    };
    var Ue = {
        getText: function (e) {
            try {
                var var_119 = ee.translate(Ne[e]);
                return var_119;
            } catch (mt) {
                return false;
            }
        }
    };
    var Fe = 'undefined' != typeof XDomainRequest && 'withCredentials' in XMLHttpRequest.prototype == false;
    Ye.prototype.load = function () {
        var e = this;
        var t = this.src;
        var n = this.id;
        var var_128 = new Promise(arg_170);
        return var_128;
        function arg_170(i, o) {
            var r = {};
            if (t.indexOf('json') >= 0) {
                r.responseType = 'json';
            }
            Xe(t, r).then(arg_171)['catch'](arg_172);
            function arg_171(t) {
                e.loaded = true;
                e.data = t.body;
                Je(e.cb, 'load', e);
                i(e);
            }
            function arg_172(t) {
                e.error = true;
                var i = (t && t.message ? t.message : 'Loading Error') + ': ' + n;
                Je(e.cb, 'error', i);
                o(i);
            }
        }
    };
    Ye.prototype.onload = function (e) {
        if (!this.error) {
            if (this.loaded) {
                e(this);
            } else {
                this.cb.load.push(e);
            }
        }
    };
    Ye.prototype.onerror = function (e) {
        if (!(this.loaded && !this.error)) {
            if (this.error) {
                e(this);
            } else {
                this.cb.error.push(e);
            }
        }
    };
    var Ve = [];
    var Qe = {
        add: function (e, t) {
            var n = Ae.getType(e);
            var var_129 = null;
            if (Qe[n]) {
                var_129 = Qe[n](e, t);
            } else {
                var_129 = Promise.resolve(null);
            }
            return var_129;
        },
        batch: function (e, t) {
            var n = [], i = -1;;
            for (; ++i < e.length;) {
                var o = e[i];
                var arg_174 = Qe.add(o, t);
                n.push(arg_174);
            }
            var var_130 = Promise.all(n)['finally'](arg_173);
            return var_130;
            function arg_173() {
                n = [];
            }
        },
        image: function (e, t) {
            var n = new $e(e, t);
            Ve.push(n);
            var var_131 = n.load();
            return var_131;
        },
        script: function (e, t) {
            var n = new je(e, t);
            Ve.push(n);
            var var_132 = n.load();
            return var_132;
        },
        file: function (e, t) {
            var n = new Ye(e, t);
            Ve.push(n);
            var var_133 = n.load();
            return var_133;
        },
        retrieve: function (e) {
            var var_134 = new Promise(arg_175);
            return var_134;
            function arg_175(t, n) {
                var i = Ve.length, o = false, r = null;;
                for (; --i > -1 && !o;) {
                    var var_135 = (r = Ve[i]).id.indexOf(e) >= 0 && r;
                    o = var_135;
                }
                if (!o) {
                    var var_136 = t(null);
                    return var_136;
                }
                r.onload(t);
                r.onerror(n);
            }
        }
    };
    var Ge = 0;
    var Ze = [
        'tplinks',
        'sitekey',
        'theme',
        'size',
        'tabindex',
        'challenge-container'
    ];
    var et = 'Your browser is missing or has disabled Cross-Window Messaging. Please <a style=\'color:inherit;text-decoration:underline; font: inherit\' target=\'_blank\' href=\'https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto\'>upgrade your browser</a> or enable it for hCaptcha.com';
    var tt = 'Your browser plugins or privacy policies are blocking the hCaptcha service. Please disable them for hCaptcha.com';
    var nt = {
        render: function (e, t) {
            if ('string' == typeof e) {
                e = document.getElementById(e);
            }
            if (e && 1 === e.nodeType) {
                if (function (e) {
                        if (!(e && 'challenge-container' in e)) {
                            return true;
                        }
                        var t = e['challenge-container'];
                        if ('string' == typeof t) {
                            t = document.getElementById(t);
                        }
                        var var_140 = !!t && 1 === t.nodeType;
                        return var_140;
                    }(t)) {
                    if (false !== xe.isSupported()) {
                        var n, i, o = e.getElementsByTagName('iframe'), r = -1;;
                        for (; ++r < o.length && !n;) {
                            if (i = o[r].getAttribute('data-hcaptcha-widget-id')) {
                                n = true;
                            }
                        }
                        if (n) {
                            console.error('Only one captcha is permitted per parent container.');
                            var var_141 = i;
                            return var_141;
                        }
                        var a = function (e, t) {
                            var n = [
                                    'tplinks',
                                    'sitekey',
                                    'theme',
                                    'type',
                                    'size',
                                    'tabindex',
                                    'callback',
                                    'expired-callback',
                                    'chalexpired-callback',
                                    'error-callback',
                                    'open-callback',
                                    'close-callback',
                                    'endpoint',
                                    'challenge-container'
                                ], i = {}, o = 0;;
                            for (; o < n.length; o++) {
                                var r = n[o];
                                var a = t && t[r];
                                if (!a) {
                                    var arg_193 = 'data-' + r;
                                    a = e.getAttribute(arg_193);
                                }
                                if (a) {
                                    i[r] = a;
                                }
                            }
                            return i;
                        }(e, t);
                        var s = Ge++ + Math.random().toString(36).substr(2);
                        var h = {
                            sentry: D,
                            reportapi: $.reportapi,
                            recaptchacompat: $.recaptchacompat
                        };
                        if ($.endpointOverride) {
                            h.endpoint = $.endpointOverride;
                        }
                        if (null !== $.language) {
                            h.hl = ee.getLocale();
                        }
                        if ($.assethost) {
                            h.assethost = $.assethost;
                        }
                        if ($.imghost) {
                            h.imghost = $.imghost;
                        }
                        if ($.tplinks) {
                            h.tplinks = $.tplinks;
                        }
                        var c = 0;;
                        for (; c < Ze.length; c++) {
                            var l = Ze[c];
                            if (l in a) {
                                h[l] = a[l];
                            }
                        }
                        if (e instanceof HTMLButtonElement || e instanceof HTMLInputElement) {
                            var d = new J('div', '.h-captcha');
                            var arg_194 = { display: 'none' };
                            d.css(arg_194);
                            var u = null, p = 0;;
                            for (; p < e.attributes.length; p++) {
                                if ((u = e.attributes[p]).name.startsWith('data-')) {
                                    d.setAttribute(u.name, u.value);
                                }
                            }
                            var f = e.tagName.toLowerCase() + '[data-hcaptcha-widget-id=\'' + s + '\']';
                            e.setAttribute('data-hcaptcha-widget-id', s);
                            d.setAttribute('data-hcaptcha-source-id', f);
                            e.parentNode.insertBefore(d.dom, e);
                            e.onclick = function (e) {
                                e.preventDefault();
                                var var_142 = ve(s);
                                return var_142;
                            };
                            e = d;
                            h.size = 'invisible';
                        }
                        try {
                            var m = new Ie(e, s, h);
                            m.challenge.style();
                            m.checkbox.style();
                        } catch (ft) {
                            var g = tt;
                            if (ft instanceof Pe) {
                                g = ft.message;
                                console.error(ft.reason);
                            }
                            var var_143 = void j(e, g);
                            return var_143;
                        }
                        if (a.callback) {
                            m.onPass = a.callback;
                        }
                        if (a['expired-callback']) {
                            m.onExpire = a['expired-callback'];
                        }
                        if (a['chalexpired-callback']) {
                            m.onChalExpire = a['chalexpired-callback'];
                        }
                        if (a['open-callback']) {
                            m.onOpen = a['open-callback'];
                        }
                        if (a['close-callback']) {
                            m.onClose = a['close-callback'];
                        }
                        if (a['error-callback']) {
                            m.onError = a['error-callback'];
                        }
                        var arg_180 = 'invisible' === h.size;
                        de.setData('inv', arg_180);
                        m.checkbox.chat.listen('checkbox-selected', arg_181);
                        m.checkbox.chat.listen('checkbox-loaded', arg_182);
                        m.checkbox.chat.listen('checkbox-setup', arg_183);
                        m.challenge.chat.listen('challenge-loaded', arg_184);
                        m.challenge.chat.answer('challenge-ready', arg_185);
                        m.challenge.chat.listen('challenge-resize', arg_186);
                        m.challenge.chat.listen('challenge-closed', m.closeChallenge);
                        m.challenge.chat.answer('get-url', arg_187);
                        m.challenge.chat.answer('check-api', arg_188);
                        m.challenge.chat.listen('challenge-key', arg_189);
                        m.challenge.onOverlayClick(arg_190);
                        m.challenge.chat.listen('challenge-language', arg_191);
                        m.challenge.chat.answer('get-ac', arg_192);
                        x.add(m);
                        return s;
                        function arg_181(e) {
                            de.setData('exec', false);
                            m.onReady(m.initChallenge, e);
                        }
                        function arg_182(e) {
                            m.checkbox.location.bounding = m.checkbox.getBounding();
                            m.checkbox.location.tick = e;
                            m.checkbox.location.offset = m.checkbox.getOffset();
                            var t = ee.getLocale();
                            m.checkbox.sendTranslation(t);
                        }
                        function arg_183(e) {
                            m.challenge.onReady(arg_195);
                            function arg_195() {
                                if (!$.endpointOverride && e.endpoint) {
                                    m.challenge.setEndpoint(e.endpoint);
                                }
                                if (e.c) {
                                    m.challenge.sendProof(e.c).then(arg_196);
                                    function arg_196() {
                                        m.setReady(true);
                                    }
                                } else {
                                    m.setReady(true);
                                }
                            }
                        }
                        function arg_184() {
                            m.challenge.setReady(true);
                            var e = ee.getLocale();
                            m.challenge.sendTranslation(e);
                        }
                        function arg_185(e, t) {
                            m.displayChallenge(e).then(t.resolve);
                        }
                        function arg_186() {
                            var e = M.Browser.width();
                            var t = M.Browser.height();
                            m.resize(e, t);
                        }
                        function arg_187(e) {
                            e.resolve(window.location.href);
                        }
                        function arg_188(e) {
                            var arg_197 = de.getData();
                            e.resolve(arg_197);
                        }
                        function arg_189(e) {
                            x.pushSession(e.key, m.id);
                        }
                        function arg_190() {
                            var arg_198 = { event: 'challenge-escaped' };
                            m.closeChallenge(arg_198);
                        }
                        function arg_191(e) {
                            var t = e.locale;
                            ee.setLocale(t);
                            Ke(t).then(arg_199)['catch'](arg_200);
                            function arg_199(e) {
                                x.each(arg_201);
                                function arg_201(e) {
                                    if (e) {
                                        try {
                                            e.updateTranslation(t);
                                        } catch (ft) {
                                            var arg_202 = 'Failed to update text translation: ' + JSON.stringify(ft);
                                            z(arg_202, 'error', 'translation');
                                        }
                                    }
                                }
                            }
                            function arg_200(e) {
                                var arg_203 = 'Language failed to load: ' + t;
                                z(arg_203, 'error', 'api');
                            }
                        }
                        function arg_192(e) {
                            var arg_204 = Ce.hasCookie('hc_accessibility');
                            e.resolve(arg_204);
                        }
                    }
                    j(e, et);
                } else {
                    var arg_205 = '[hCaptcha] render: invalid challenge container \'' + t['challenge-container'] + '\'.';
                    console.log(arg_205);
                }
            } else {
                var arg_206 = '[hCaptcha] render: invalid container \'' + e + '\'.';
                console.log(arg_206);
            }
        },
        reset: function (e) {
            var t;
            if (e) {
                var var_144 = t = x.getById(e);
                if (!var_144) {
                    throw Error('[hCaptcha] invalid captcha id: ' + e);
                }
                t.reset();
            } else {
                var var_145 = t = x.getByIndex(0);
                if (!var_145) {
                    throw Error('[hCaptcha] no captchas exist.');
                }
                t.reset();
            }
        },
        remove: function (e) {
            var t = null;
            if (e) {
                t = x.getById(e);
            } else {
                t = x.getByIndex(0);
            }
            if (!t) {
                throw e ? Error('[hCaptcha] invalid captcha id: ' + e) : Error('[hCaptcha] no captchas exist.');
            }
            x.remove(t);
            t.destroy();
            t = null;
        },
        execute: ve,
        getResponse: function (e) {
            var t;
            var n;
            if (n = e ? x.getById(e) : x.getByIndex(0)) {
                var var_146 = n.checkbox.response || '';
                t = var_146;
            }
            if (void 0 !== t) {
                return t;
            }
            throw e ? new Error('[hCaptcha] invalid captcha id: ' + e) : new Error('[hCaptcha] no captchas exist.');
        },
        getRespKey: function (e) {
            var t = '';
            var n = null;
            if (e) {
                n = x.getById(e);
            } else {
                n = x.getByIndex(0);
            }
            try {
                var i = x.getSession(), o = i.length, r = false;;
                for (; --o > -1 && !r;) {
                    if (r = i[o][1] === n.id) {
                        t = i[o][0];
                    }
                }
            } catch (a) {
                t = '';
            }
            return t;
        },
        close: function (e) {
            var t = false;
            var var_147 = t = e ? x.getById(e) : x.getByIndex(0);
            if (!var_147) {
                throw e ? Error('[hCaptcha] invalid captcha id: ' + e) : Error('[hCaptcha] no captchas exist.');
            }
            var arg_207 = { event: 'challenge-escaped' };
            t.closeChallenge(arg_207);
        },
        setData: function (e, t) {
            if (!('object' != typeof e || t)) {
                t = e;
                e = null;
            }
            if (!t || 'object' != typeof t) {
                throw Error('[hCaptcha] invalid data supplied');
            }
            var n = false;
            var var_148 = n = e ? x.getById(e) : x.getByIndex(0);
            if (!var_148) {
                throw e ? Error('[hCaptcha] invalid captcha id: ' + e) : Error('[hCaptcha] no captchas exist.');
            }
            var i = n.challenge.setData.bind(n.challenge);
            n.onReady(i, t);
        },
        nodes: x
    };
    A.file = 'hcaptcha';
    var it = document.currentScript;
    var ot = false;
    var rt = false;
    var at = 'on';
    var st = M.Browser.width() / M.Browser.height();
    var ht = window.hcaptcha || false;
    !function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        if (true !== fe && 'interactive' !== document.readyState && 'loaded' !== document.readyState && 'complete' !== document.readyState) {
            var arg_212 = {
                fn: e,
                args: t
            };
            ue.push(arg_212);
            if (false === pe) {
                if (document.addEventListener) {
                    document.addEventListener('DOMContentLoaded', ge);
                    window.addEventListener('load', ge);
                } else {
                    document.attachEvent('onreadystatechange', me);
                    window.attachEvent('onload', ge);
                }
                pe = true;
            }
        } else {
            setTimeout(arg_213, 1);
            function arg_213() {
                e(t);
            }
        }
    }(function () {
        if (!ht) {
            !function () {
                var e;
                if (it) {
                    e = [it];
                } else {
                    e = document.getElementsByTagName('script');
                }
                var t = -1;
                var n = false;
                var i = null;
                var o = null;
                for (; ++t < e.length && false === n;) {
                    if (e[t] && e[t].src) {
                        i = e[t].src.split('?');
                        o = i[0];
                        if (/\/(hcaptcha|1\/api)\.js$/.test(o)) {
                            n = e[t];
                        }
                    }
                }
                if (false === n) {
                    return;
                }
                var r = ke(i[1]);
                var var_149 = r.onload || false;
                ot = var_149;
                var var_150 = r.render || false;
                rt = var_150;
                if ('off' === r.tplinks) {
                    at = 'off';
                }
                $.tplinks = at;
                var var_151 = r.hl || null;
                $.language = var_151;
                if (r.endpoint) {
                    $.endpointOverride = r.endpoint;
                }
                var var_152 = r.reportapi || $.reportapi;
                $.reportapi = var_152;
                var var_153 = r.assethost || null;
                $.assethost = var_153;
                var var_154 = r.imghost || null;
                $.imghost = var_154;
                var var_155 = r.recaptchacompat || $.recaptchacompat;
                $.recaptchacompat = var_155;
                var var_156 = r.host || window.location.hostname;
                A.host = var_156;
                if ($.language) {
                    ee.setLocale($.language);
                } else {
                    var arg_214 = window.navigator.userLanguage || window.navigator.language;
                    ee.setLocale(arg_214);
                }
                var var_157 = r.sentry === undefined || r.sentry;
                a = var_157;
                D = a;
                if ('off' === $.recaptchacompat) {
                    console.log('recaptchacompat disabled');
                } else {
                    window.grecaptcha = pt;
                }
                var a;
            }();
            (function () {
                var e = ee.getLocale();
                if (e.indexOf('en') >= 0) {
                    return;
                }
                Ke(e).then(arg_215)['catch'](arg_216);
                function arg_215(t) {
                    nt.nodes.each(arg_217);
                    function arg_217(t) {
                        if (t) {
                            try {
                                t.updateTranslation(e);
                            } catch (ft) {
                                var arg_218 = 'Failed to update text translation: ' + JSON.stringify(ft);
                                z(arg_218, 'error', 'translation');
                            }
                        }
                    }
                }
                function arg_216(t) {
                    var arg_219 = 'Language failed to load: ' + e;
                    z(arg_219, 'error', 'api');
                }
            }());
            if (false === rt || 'onload' === rt) {
                (function (e) {
                    var t = document.getElementsByClassName('h-captcha'), n = [], i = 0;;
                    for (; i < t.length; i++) {
                        n.push(t[i]);
                    }
                    var o = [];
                    if ('off' !== $.recaptchacompat) {
                        var r = document.getElementsByClassName('g-recaptcha'), a = 0;;
                        for (; a < r.length; a++) {
                            o.push(r[a]);
                        }
                    }
                    var s = [].concat(n, o), h = 0;;
                    for (; h < s.length; h++) {
                        e(s[h]);
                    }
                }(nt.render));
            } else {
                if ('explicit' !== rt) {
                    var arg_220 = 'hcaptcha: invalid render parameter \'' + rt + '\', using \'explicit\' instead.';
                    console.log(arg_220);
                }
            }
            if (ot) {
                setTimeout(arg_221, 1);
                function arg_221() {
                    N(ot);
                }
            }
            (function () {
                try {
                    de.record();
                    var arg_222 = M.Browser.getScreenDimensions();
                    de.setData('sc', arg_222);
                    var arg_223 = M.Browser.interrogateNavigator();
                    de.setData('nv', arg_223);
                    de.setData('dr', document.referrer);
                    ut();
                    dt();
                } catch (ft) {
                }
            }());
            ye.addEventListener('resize', ct);
            ye.addEventListener('scroll', lt);
        }
    });
    var pt = {
        render: nt.render,
        remove: nt.remove,
        execute: nt.execute,
        reset: nt.reset,
        close: nt.close,
        setData: nt.setData,
        getResponse: nt.getResponse,
        getRespKey: nt.getRespKey
    };
    return pt;
    function e(e) {
        var t = this.constructor;
        var var_1 = this.then(arg_0, arg_1);
        return var_1;
        function arg_0(n) {
            var arg_2 = e();
            var var_2 = t.resolve(arg_2).then(arg_3);
            return var_2;
            function arg_3() {
                return n;
            }
        }
        function arg_1(n) {
            var arg_4 = e();
            var var_3 = t.resolve(arg_4).then(arg_5);
            return var_3;
            function arg_5() {
                var var_4 = t.reject(n);
                return var_4;
            }
        }
    }
    function n() {
    }
    function i(e) {
        if (!(this instanceof i)) {
            throw new TypeError('Promises must be constructed via new');
        }
        if ('function' != typeof e) {
            throw new TypeError('not a function');
        }
        this._state = 0;
        this._handled = false;
        this._value = undefined;
        this._deferreds = [];
        c(e, this);
    }
    function o(e, t) {
        for (; 3 === e._state;) {
            e = e._value;
        }
        if (0 !== e._state) {
            e._handled = true;
            i._immediateFn(arg_6);
            function arg_6() {
                var n = null;
                if (1 === e._state) {
                    n = t.onFulfilled;
                } else {
                    n = t.onRejected;
                }
                if (null !== n) {
                    var i;
                    try {
                        i = n(e._value);
                    } catch (o) {
                        var var_5 = void a(t.promise, o);
                        return var_5;
                    }
                    r(t.promise, i);
                } else {
                    (1 === e._state ? r : a)(t.promise, e._value);
                }
            }
        } else {
            e._deferreds.push(t);
        }
    }
    function r(e, t) {
        try {
            if (t === e) {
                throw new TypeError('A promise cannot be resolved with itself.');
            }
            if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof i) {
                    e._state = 3;
                    e._value = t;
                    var var_6 = void s(e);
                    return var_6;
                }
                if ('function' == typeof n) {
                    o = n;
                    r = t;
                    var var_7 = void c(arg_7, e);
                    return var_7;
                    function arg_7() {
                        o.apply(r, arguments);
                    }
                }
            }
            e._state = 1;
            e._value = t;
            s(e);
        } catch (h) {
            a(e, h);
        }
        var o;
        var r;
    }
    function a(e, t) {
        e._state = 2;
        e._value = t;
        s(e);
    }
    function s(e) {
        if (2 === e._state && 0 === e._deferreds.length) {
            i._immediateFn(arg_8);
            function arg_8() {
                if (!e._handled) {
                    i._unhandledRejectionFn(e._value);
                }
            }
        }
        var t = 0, n = e._deferreds.length;;
        for (; t < n; t++) {
            o(e, e._deferreds[t]);
        }
        e._deferreds = null;
    }
    function h(e, t, n) {
        this.onFulfilled = 'function' == typeof e ? e : null;
        this.onRejected = 'function' == typeof t ? t : null;
        this.promise = n;
    }
    function c(e, t) {
        var n = false;
        try {
            e(arg_9, arg_10);
            function arg_9(e) {
                if (!n) {
                    n = true;
                    r(t, e);
                }
            }
            function arg_10(e) {
                if (!n) {
                    n = true;
                    a(t, e);
                }
            }
        } catch (i) {
            if (n) {
                return;
            }
            n = true;
            a(t, i);
        }
    }
    function C() {
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
    function P(e, t) {
        try {
            var n = new RegExp(t).exec(e);
            var var_31 = null;
            if (n) {
                var_31 = {
                    name: n[1] || 'Other',
                    major: n[2] || '0',
                    minor: n[3] || '0',
                    patch: n[4] || '0'
                };
            } else {
                var_31 = null;
            }
            return var_31;
        } catch (mt) {
            return null;
        }
    }
    function B(e, t) {
        var n = null, i = null, o = -1, r = false;;
        for (; ++o < t.length && !r;) {
            n = t[o];
            var a = -1;;
            for (; ++a < n.patterns.length && !r;) {
                r = null !== (i = P(e, n.patterns[a]));
            }
        }
        var var_32 = null;
        if (r) {
            var var_33 = n.family || n.name_replace || i.name;
            i.family = var_33;
            if (n.name_replace) {
                i.name = n.name_replace;
            }
            if (n.major_replace) {
                i.major = n.major_replace;
            }
            if (n.minor_replace) {
                i.minor = n.minor_replace;
            }
            if (n.patch_replace) {
                i.minor = n.patch_replace;
            }
            var_32 = i;
        } else {
            var_32 = {
                family: 'Other',
                name: 'Other',
                major: '0',
                minor: '0',
                patch: '0'
            };
        }
        return var_32;
    }
    function T() {
        var e = this;
        var t = I.getBrowser();
        var n = I.getAgent();
        this.agent = n.toLowerCase();
        var var_34 = window.navigator.userLanguage || window.navigator.language;
        this.language = var_34;
        this.isCSS1 = 'CSS1Compat' === (document.compatMode || '');
        this.width = function () {
            var var_36 = null;
            if (window.innerWidth && window.document.documentElement.clientWidth) {
                var_36 = Math.min(window.innerWidth, document.documentElement.clientWidth);
            } else {
                var var_37 = window.innerWidth || window.document.documentElement.clientWidth || document.body.clientWidth;
                var_36 = var_37;
            }
            return var_36;
        };
        this.height = function () {
            var var_38 = window.innerHeight || window.document.documentElement.clientHeight || document.body.clientHeight;
            return var_38;
        };
        this.scrollX = function () {
            var var_39 = null;
            if (window.pageXOffset !== undefined) {
                var_39 = window.pageXOffset;
            } else {
                if (e.isCSS1) {
                    var_39 = document.documentElement.scrollLeft;
                } else {
                    var_39 = document.body.scrollLeft;
                }
            }
            return var_39;
        };
        this.scrollY = function () {
            var var_40 = null;
            if (window.pageYOffset !== undefined) {
                var_40 = window.pageYOffset;
            } else {
                if (e.isCSS1) {
                    var_40 = document.documentElement.scrollTop;
                } else {
                    var_40 = document.body.scrollTop;
                }
            }
            return var_40;
        };
        this.type = 'Edge' === t.family ? 'edge' : 'Internet Explorer' === t.family ? 'ie' : 'Chrome' === t.family ? 'chrome' : 'Safari' === t.family ? 'safari' : 'Firefox' === t.family ? 'firefox' : t.family.toLowerCase();
        var var_35 = 1 * (t.major + '.' + t.minor) || 0;
        this.version = var_35;
        this.hasPostMessage = !!window.postMessage;
    }
    function j(e, t) {
        e.style.width = '304px';
        e.style.height = '78px';
        e.style.backgroundColor = '#f9e5e5';
        e.style.position = 'relative';
        e.innerHTML = '';
        var n = document.createElement('div');
        n.style.width = '284px';
        n.style.position = 'absolute';
        n.style.top = '12px';
        n.style.left = '10px';
        n.style.fontFamily = 'arial, sans-serif';
        n.style.color = '#7c0a06';
        n.style.fontSize = '14px';
        n.style.fontWeight = 'normal';
        n.style.lineHeight = '18px';
        var var_46 = t || L;
        n.innerHTML = var_46;
        e.appendChild(n);
    }
    function R(e) {
        var t = { message: e.name + ': ' + e.message };
        if (e.stack) {
            t.stack_trace = { trace: e.stack };
        }
        W('report error', 'internal', 'debug', t);
        z('internal error', 'error', A.file);
    }
    function z(e, t, n) {
        if (D && window.Raven) {
            var arg_43 = {
                level: t,
                logger: n
            };
            Raven.captureMessage(e, arg_43);
        }
    }
    function W(e, t, n, i) {
        if (D && window.Raven) {
            var arg_44 = {
                message: e,
                category: t,
                level: n,
                data: i
            };
            Raven.captureBreadcrumb(arg_44);
        }
    }
    function N() {
        try {
            (function (e) {
                var t = [].slice.call(arguments, 1);
                if ('string' == typeof e) {
                    if (window[e]) {
                        if ('function' == typeof window[e]) {
                            window[e].apply(null, t);
                        } else {
                            var arg_45 = '[hCaptcha] Callback \'' + e + '\' is not a function.';
                            console.log(arg_45);
                        }
                    } else {
                        var arg_46 = '[hCaptcha] Callback \'' + e + '\' is not defined.';
                        console.log(arg_46);
                    }
                } else {
                    if ('function' == typeof e) {
                        e.apply(null, t);
                    } else {
                        var arg_47 = '[hcaptcha] Invalid callback \'' + e + '\'.';
                        console.log(arg_47);
                    }
                }
            }.apply(null, arguments));
        } catch (ft) {
            console.error('[hCaptcha] There was an error in your callback.');
            console.error(ft);
        }
    }
    function U(e, t) {
        var n;
        var i = null;
        if ('attempts' in (t = t || {})) {
            i = t.attempts;
        } else {
            i = 1;
        }
        var o = t.delay || 0;
        var r = t.onFail;
        n = function (t, n, a) {
            e().then(t, arg_49);
            function arg_49(e) {
                var t = i-- > 0;
                if (r) {
                    var var_48 = false !== r(e) && t;
                    t = var_48;
                }
                if (t) {
                    setTimeout(a, o);
                } else {
                    n(e);
                }
            }
        };
        var var_47 = new Promise(arg_48);
        return var_47;
        function arg_48(e, t) {
            n(e, t, arg_50);
            function arg_50() {
                n(e, t, i);
            }
        }
    }
    function Y(e) {
        var t = X[e];
        var var_56 = t || (e in H ? e : X[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1), n = q.length;;
            for (; n--;) {
                if ((e = q[n] + t) in H) {
                    return e;
                }
            }
        }(e) || e);
        return var_56;
    }
    function J(e, t, n) {
        this.dom = null;
        this._clss = [];
        this._nodes = [];
        this._listeners = [];
        this._frag = null;
        if ('object' == typeof e) {
            this.dom = e;
            var i = [];
            var o = [];
            if (e.className) {
                o = e.className.split(' ');
            }
            var r = 0;;
            for (; r < o.length; r++) {
                if ('' !== o[r] && ' ' !== o[r]) {
                    i.push(o[r]);
                }
            }
            this._clss = i;
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
    function Q(e, t) {
        var arg_60 = t || 'div';
        V.self(this, J, arg_60, e);
        this.children = [];
        this._events = [];
    }
    function re(e, t) {
        var n = ne[e];
        var i = null;
        return var_72;
        function var_72(e) {
            i = function (e) {
                var var_73 = [
                    e.windowX,
                    e.windowY,
                    Date.now()
                ];
                return var_73;
            }(e);
            t(n, i);
        }
    }
    function ae(e, t) {
        var n = te[e];
        var i = null;
        return var_74;
        function var_74(e) {
            i = function (e) {
                var t, n = e.touches && e.touches.length >= 1 ? e.touches : e.changedTouches, i = [], o = 0;;
                for (; o < n.length; o++) {
                    t = F.eventCoords(n[o]);
                    var arg_65 = [
                        n[o].identifier,
                        t.x,
                        t.y
                    ];
                    i.push(arg_65);
                }
                var arg_64 = Date.now();
                i.push(arg_64);
                return i;
            }(e);
            t(n, i);
        }
    }
    function se(e, t) {
        var n = ie[e];
        var i = null;
        return var_75;
        function var_75(e) {
            i = function (e) {
                var var_76 = [
                    e.keyNum,
                    Date.now()
                ];
                return var_76;
            }(e);
            t(n, i);
        }
    }
    function he(e, t) {
        var n = oe[e];
        var i = null;
        var o = [];
        return var_77;
        function var_77(e) {
            if (null !== (i = function (e, t) {
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
                    var i = [];
                    if (0 === t.length) {
                        t = n;
                        i = n;
                    } else {
                        var o, r = 0, a = 0;;
                        for (; a < 6; a++) {
                            o = t[a] - n[a];
                            i.push(n[a]);
                            r += Math.abs(o);
                        }
                        var arg_66 = Date.now();
                        i.push(arg_66);
                        t = n;
                        if (r <= 0) {
                            return null;
                        }
                    }
                    var var_78 = {
                        motion: i,
                        prevmotion: t
                    };
                    return var_78;
                }(e, o))) {
                o = i.prevmotion;
                i = i.motion;
                t(n, i);
            }
        }
    }
    function ce(e, t) {
        this._period = e;
        this._interval = t;
        this._date = [];
        this._data = [];
        this._prevTimestamp = 0;
        this._meanPeriod = 0;
        this._meanCounter = 0;
    }
    function le() {
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
    function me() {
        if (!('interactive' !== document.readyState && 'loaded' !== document.readyState && 'complete' !== document.readyState)) {
            ge();
        }
    }
    function ge() {
        if (false === fe) {
            var e = 0;;
            for (; e < ue.length; e++) {
                ue[e].fn.apply(null, ue[e].args);
            }
            ue = [];
        }
        fe = true;
        if (document.removeEventListener) {
            document.removeEventListener('DOMContentLoaded', ge);
            window.removeEventListener('load', ge);
        } else {
            document.detachEvent('onreadystatechange', me);
            window.detachEvent('onload', ge);
        }
    }
    function ve(e, t) {
        var n;
        if (!('object' != typeof e || t)) {
            t = e;
            e = null;
        }
        var var_80 = n = e ? x.getById(e) : x.getByIndex(0);
        if (!var_80) {
            throw e ? Error('[hCaptcha] invalid captcha id: ' + e) : Error('[hCaptcha] no captchas exist.');
        }
        de.setData('exec', true);
        n.onReady(n.initChallenge, t);
    }
    function we(e, t) {
        var n = e instanceof HTMLIFrameElement;
        try {
            if (n) {
                if (e.parentNode) {
                    var arg_81 = JSON.stringify(t);
                    e.contentWindow.postMessage(arg_81, '*');
                }
            } else {
                var arg_82 = JSON.stringify(t);
                e.postMessage(arg_82, '*');
            }
        } catch (ft) {
            z(ft.message, 'error', 'messaging');
        }
    }
    function be(e, t) {
        this.target = e;
        this.id = t;
        this.messages = [];
        this.incoming = [];
        this.waiting = [];
    }
    function _e(e, t) {
        var n = this;
        var i = {};
        var o = new Promise(arg_83);
        var r = {
            source: 'hcaptcha',
            label: e,
            id: n.id,
            promise: null,
            lookup: t
        };
        o.then(arg_84)['catch'](arg_85);
        return i;
        function arg_83(e, t) {
            i.resolve = e;
            i.reject = t;
        }
        function arg_84(e) {
            r.promise = 'resolve';
            if (null !== e) {
                r.contents = e;
            }
            we(n.target, r);
        }
        function arg_85(e) {
            r.promise = 'reject';
            if (null !== e) {
                r.error = e;
            }
            we(n.target, r);
        }
    }
    function ke(e) {
        var t, n, i, o = {}, r = e ? e.indexOf('&') >= 0 ? e.split('&') : [e] : [], a = 0;;
        for (; a < r.length; a++) {
            if (r[a].indexOf('=') >= 0) {
                t = r[a].split('=');
                n = decodeURIComponent(t[0]);
                if (!('false' !== (i = decodeURIComponent(t[1])) && 'true' !== i)) {
                    i = 'true' === i;
                }
                o[n] = i;
            }
        }
        return o;
    }
    function Ee(e) {
        var t = [];
        for (var n in e)
            t.push([
                encodeURIComponent(n),
                encodeURIComponent(e[n])
            ].join('='));
        var var_88 = t.join('&');
        return var_88;
    }
    function Se(e, t) {
        this.id = e;
        this.width = null;
        this.height = null;
        this.mobile = false;
        this.ready = false;
        this.listeners = [];
        this.config = t;
        this._visible = false;
        this._selected = false;
        this.$iframe = new J('iframe');
        var var_89 = A.host || window.location.hostname;
        this._host = var_89;
        var n = A.assetUrl;
        if ($.assethost) {
            n = $.assethost + A.assetUrl.replace(A.assetDomain, '');
        }
        this.$iframe.dom.src = n + '/hcaptcha-challenge.html#id=' + this.id + '&host=' + this._host + (t ? '&' + Ee(this.config) : '');
        this.$iframe.dom.title = 'Main content of the hCaptcha challenge';
        this.$iframe.dom.frameBorder = 0;
        this.$iframe.dom.scrolling = 'no';
        this.setupParentContainer(t);
        if (this._hasCustomContainer) {
            this._hideIframe();
            this._parent.appendChild(this.$iframe.dom);
        } else {
            this.$container = new J('div');
            this.$wrapper = this.$container.createElement('div');
            this.$overlay = this.$container.createElement('div');
            this.$arrow = this.$container.createElement('div');
            this.$arrow.fg = this.$arrow.createElement('div');
            this.$arrow.bg = this.$arrow.createElement('div');
            this.style.call(this);
            this.$wrapper.appendElement(this.$iframe);
            this._parent.appendChild(this.$container.dom);
            this.$container.setAttribute('aria-hidden', true);
        }
        this.chat = xe.createChat(this.$iframe.dom, e);
    }
    function Oe(e, t, n) {
        this.id = t;
        this.response = null;
        this.location = {
            tick: null,
            offset: null,
            bounding: null
        };
        this.config = n;
        this._ticked = true;
        this.$container = e instanceof J ? e : new J(e);
        var var_90 = A.host || window.location.hostname;
        this._host = var_90;
        this.$iframe = new J('iframe');
        var i = A.assetUrl;
        if ($.assethost) {
            i = $.assethost + A.assetUrl.replace(A.assetDomain, '');
        }
        this.$iframe.dom.src = i + '/hcaptcha-checkbox.html#id=' + this.id + '&host=' + this._host + (n ? '&' + Ee(this.config) : '');
        this.$iframe.dom.title = 'widget containing checkbox for hCaptcha security challenge';
        var var_91 = this.config.tabindex || 0;
        this.$iframe.dom.tabIndex = var_91;
        this.$iframe.dom.frameBorder = '0';
        this.$iframe.dom.scrolling = 'no';
        if (this.config.size && 'invisible' == this.config.size) {
            this.$iframe.setAttribute('aria-hidden', 'true');
        }
        this.$iframe.setAttribute('data-hcaptcha-widget-id', t);
        this.$iframe.setAttribute('data-hcaptcha-response', '');
        this.$container.appendElement(this.$iframe);
        if ('off' !== $.recaptchacompat) {
            var arg_94 = '#g-recaptcha-response-' + t;
            this.$textArea0 = this.$container.createElement('textarea', arg_94);
            this.$textArea0.dom.name = 'g-recaptcha-response';
            var arg_95 = { display: 'none' };
            this.$textArea0.css(arg_95);
        }
        var arg_92 = '#h-captcha-response-' + t;
        this.$textArea1 = this.$container.createElement('textarea', arg_92);
        this.$textArea1.dom.name = 'h-captcha-response';
        var arg_93 = { display: 'none' };
        this.$textArea1.css(arg_93);
        this.chat = xe.createChat(this.$iframe.dom, t);
        this.clearLoading = this.clearLoading.bind(this);
    }
    function Ie(e, t, n) {
        if (!n.sitekey) {
            throw new Pe('Missing sitekey', 'https://hcaptcha.com/docs/configuration#jsapi');
        }
        this.id = t;
        this.visible = false;
        this.overflow = {
            override: false,
            cssUsed: true,
            value: null,
            scroll: 0
        };
        this.onError = null;
        this.onPass = null;
        this.onExpire = null;
        this.onChalExpire = null;
        this.onOpen = null;
        this.onClose = null;
        this._ready = false;
        this._listeners = [];
        this.config = n;
        this._state = {
            escaped: false,
            passed: false,
            expiredChallenge: false,
            expiredResponse: false
        };
        this._responseTimer = null;
        this.challenge = new Se(t, n);
        this.checkbox = new Oe(e, t, n);
        this.initChallenge = this.initChallenge.bind(this);
        this.closeChallenge = this.closeChallenge.bind(this);
        this.displayChallenge = this.displayChallenge.bind(this);
    }
    function Pe(e, t) {
        var n = '[hCaptcha] ' + e;
        if (t) {
            n += ' - ' + t;
        }
        this.message = 'hCaptcha has failed to initialize. Please see the developer tools console for more information.';
        this.reason = n;
    }
    function Be() {
        V.self(this, J, 'canvas');
        var e = this;
        this.element = this.dom;
        this.ctx = this.element.getContext('2d');
        this.scale = 1;
        var var_92 = window.devicePixelRatio || 1;
        this.dpr = var_92;
        this.clearColor = '#fff';
        this.ctx.roundedRect = function (t, n, i, o, r) {
            var a = null;
            if (i > 0) {
                a = r;
            } else {
                a = -r;
            }
            var s = null;
            if (o > 0) {
                s = r;
            } else {
                s = -r;
            }
            e.ctx.beginPath();
            var arg_96 = t + a;
            e.ctx.moveTo(arg_96, n);
            var arg_97 = t + i - a;
            e.ctx.lineTo(arg_97, n);
            var arg_98 = t + i;
            var arg_99 = t + i;
            var arg_100 = n + s;
            e.ctx.quadraticCurveTo(arg_98, n, arg_99, arg_100);
            var arg_101 = t + i;
            var arg_102 = n + o - s;
            e.ctx.lineTo(arg_101, arg_102);
            var arg_103 = t + i;
            var arg_104 = n + o;
            var arg_105 = t + i - a;
            var arg_106 = n + o;
            e.ctx.quadraticCurveTo(arg_103, arg_104, arg_105, arg_106);
            var arg_107 = t + a;
            var arg_108 = n + o;
            e.ctx.lineTo(arg_107, arg_108);
            var arg_109 = n + o;
            var arg_110 = n + o - s;
            e.ctx.quadraticCurveTo(t, arg_109, t, arg_110);
            var arg_111 = n + s;
            e.ctx.lineTo(t, arg_111);
            var arg_112 = t + a;
            e.ctx.quadraticCurveTo(t, n, arg_112, n);
            e.ctx.closePath();
        };
    }
    function Te(e) {
        var var_93 = e || {};
        e = var_93;
        var var_94 = e.x || 0;
        this.x = var_94;
        var var_95 = e.y || 0;
        this.y = var_95;
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
    function Me(e, t, n) {
        V.self(this, Te, e);
        this.handleIn = new Te(t);
        this.handleOut = new Te(n);
        this.prev = null;
        this.next = null;
        this.index = 0;
    }
    function $e(e, t) {
        var n = e;
        var arg_160 = n.lastIndexOf('.') + 1;
        var i = n.substr(arg_160, n.length);
        if (!t) {
            t = {};
        }
        if (t.fallback && 'svg' === i && 'ie' === M.Browser.type && M.Browser.version <= 11) {
            var arg_161 = e.indexOf(i);
            n = e.substr(0, arg_161) + t.fallback;
        }
        if (t.prefix) {
            n = t.prefix + '/' + e;
        }
        this.attribs = { crossOrigin: t.crossOrigin || null };
        this.id = n;
        this.src = Ae.getLocation(n);
        this.ext = i;
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
        var i = e[t], o = i.length, r = null;;
        for (; --o > -1;) {
            r = i[o];
            i.splice(o, 1);
            r(n);
        }
        if ('error' === t) {
            e.load = [];
        } else {
            e.error = [];
        }
    }
    function je(e, t) {
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
        this.src = Ae.getLocation(n);
        this.loaded = false;
        this.error = false;
        this.element = null;
        this.cb = {
            load: [],
            error: []
        };
    }
    function De(e, t, n) {
        var i = e[t], o = i.length, r = null;;
        for (; --o > -1;) {
            r = i[o];
            i.splice(o, 1);
            r(n);
        }
        if ('error' === t) {
            e.load = [];
        } else {
            e.error = [];
        }
    }
    function Re(e) {
        if (null === e) {
            return '';
        }
        var t = [];
        (function n(e, t) {
            var i;
            var o;
            if ('object' == typeof e) {
                for (o in e)
                    true === ze(i = e[o]) ? n(i, t) : t[t.length] = We(o, i);
            } else {
                if (true === Array.isArray(e)) {
                    var r = 0;;
                    for (; r < e.length; r++) {
                        if (true === ze(i = e[r])) {
                            n(e, t);
                        } else {
                            t[t.length] = We(o, i);
                        }
                    }
                } else {
                    t[t.length] = We(e);
                }
            }
        }(e, t));
        var var_114 = t.join('&');
        return var_114;
    }
    function ze(e) {
        var var_115 = true === Array.isArray(e) || 'object' == typeof e;
        return var_115;
    }
    function We(e, t) {
        var arg_162 = null;
        if (null === t) {
            arg_162 = '';
        } else {
            arg_162 = t;
        }
        var var_116 = encodeURIComponent(e) + '=' + encodeURIComponent(arg_162);
        return var_116;
    }
    function qe(e, t, n) {
        var var_120 = n || {};
        n = var_120;
        var i = {
            url: t,
            method: e.toUpperCase(),
            responseType: n.responseType || 'string',
            dataType: n.dataType || null,
            withCredentials: n.withCredentials || false,
            headers: n.headers || null,
            data: n.data || null
        };
        var var_121 = i.withCredentials && Fe;
        i.legacy = var_121;
        if (i.data) {
            if ('json' === i.dataType && 'object' == typeof i.data) {
                i.data = JSON.stringify(i.data);
            }
            if ('query' === i.dataType) {
                i.data = Re(i.data);
            }
        }
        var var_122 = null;
        if (n.retry) {
            var_122 = U(arg_165, n.retry);
            function arg_165() {
                var var_123 = He(i);
                return var_123;
            }
        } else {
            var_122 = He(i);
        }
        return var_122;
    }
    function He(e) {
        var t = null;
        if (e.legacy) {
            t = new XDomainRequest();
        } else {
            t = new XMLHttpRequest();
        }
        var var_124 = new Promise(arg_166);
        return var_124;
        function arg_166(n, i) {
            var o;
            t.onload = r('complete');
            t.onerror = t.ontimeout = r('error');
            t.open(e.method, e.url);
            if (!e.legacy && (t.withCredentials = e.withCredentials, e.headers)) {
                for (var a in e.headers)
                    o = e.headers[a], t.setRequestHeader(a, o);
            }
            setTimeout(arg_167, 0);
            function r(o) {
                return var_125;
                function var_125(r) {
                    var a = t.response || t.responseText;
                    var s = t.statusText || '';
                    var h = t.status;
                    var c = t.readyState;
                    if (4 === c || e.legacy) {
                        if ('error' === o || h >= 400 && h <= 511) {
                            var arg_169 = {
                                event: 'network-error',
                                endpoint: e.url,
                                state: c,
                                status: h,
                                message: Ue.getText(h || 400) || s
                            };
                            var var_126 = void i(arg_169);
                            return var_126;
                        }
                        if ('json' === e.responseType && a) {
                            a = JSON.parse(a);
                        }
                        var arg_168 = {
                            state: c,
                            status: h,
                            body: a,
                            message: s
                        };
                        n(arg_168);
                    }
                }
            }
            function arg_167() {
                t.send(e.data);
            }
        }
    }
    function Xe(e, t) {
        if ('object' == typeof e && t === undefined) {
            e = (t = e).url;
        }
        if (null === e) {
            throw new Error('Url missing');
        }
        var var_127 = qe('GET', e, t);
        return var_127;
    }
    function Ye(e, t) {
        var n = e;
        if (!t) {
            t = {};
        }
        if (t.prefix) {
            n = t.prefix + '/' + e;
        }
        this.id = n;
        this.src = Ae.getLocation(n);
        this.loaded = false;
        this.error = false;
        this.cb = {
            load: [],
            error: []
        };
        this.data = null;
    }
    function Je(e, t, n) {
        var i = e[t], o = i.length, r = null;;
        for (; --o > -1;) {
            r = i[o];
            i.splice(o, 1);
            r(n);
        }
        if ('error' === t) {
            e.load = [];
        } else {
            e.error = [];
        }
    }
    function Ke(e) {
        if ('en' === e) {
            var var_138 = Promise.resolve();
            return var_138;
        }
        var t = e + '.json';
        var var_137 = new Promise(arg_176);
        return var_137;
        function arg_176(n, i) {
            Qe.retrieve(t).then(arg_177).then(arg_178)['catch'](arg_179);
            function arg_177(n) {
                var var_139 = n || Qe.file(t, { prefix: 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static/i18n' }).then(function (t) {
                    ee.addTable(e, t.data);
                    return t;
                });
                return var_139;
            }
            function arg_178(e) {
                n(e.data);
            }
            function arg_179(e) {
                i(e);
            }
        }
    }
    function ct() {
        var e = M.Browser.width();
        var t = M.Browser.height();
        var n = M.System.mobile && st !== e / t;
        st = e / t;
        ut();
        nt.nodes.each(arg_208);
        function arg_208(i) {
            if (i.visible) {
                i.resize(e, t, n);
            }
        }
    }
    function lt(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        dt();
        nt.nodes.each(arg_209);
        function arg_209(e) {
            if (e.visible) {
                e.position();
            }
        }
    }
    function dt() {
        var arg_210 = [
            M.Browser.scrollX(),
            M.Browser.scrollY(),
            document.documentElement.clientWidth / window.innerWidth,
            Date.now()
        ];
        de.circBuffPush('xy', arg_210);
    }
    function ut() {
        var arg_211 = [
            M.Browser.width(),
            M.Browser.height(),
            M.System.dpr(),
            Date.now()
        ];
        de.circBuffPush('wn', arg_211);
    }
}();