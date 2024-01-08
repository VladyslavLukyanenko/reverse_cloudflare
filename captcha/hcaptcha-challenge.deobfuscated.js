var hcaptcha = function () {
    'use strict';
    var e = setTimeout;
    n.prototype['catch'] = function (t) {
        var var_9 = this.then(null, t);
        return var_9;
    };
    n.prototype.then = function (t, e) {
        var n = new this.constructor(i);
        var arg_15 = new l(t, e, n);
        s(this, arg_15);
        return n;
    };
    n.prototype['finally'] = t;
    n.all = function (t) {
        var var_10 = new n(arg_16);
        return var_10;
        function arg_16(e, i) {
            if (!t || 'undefined' == typeof t.length) {
                throw new TypeError('Promise.all accepts an array');
            }
            var n = Array.prototype.slice.call(t);
            if (0 === n.length) {
                var arg_17 = [];
                var var_11 = e(arg_17);
                return var_11;
            }
            var s = n.length;
            var r = 0;;
            for (; r < n.length; r++) {
                o(r, n[r]);
            }
            function o(t, r) {
                try {
                    if (r && ('object' == typeof r || 'function' == typeof r)) {
                        var a = r.then;
                        if ('function' == typeof a) {
                            var var_12 = void a.call(r, arg_18, i);
                            return var_12;
                            function arg_18(e) {
                                o(t, e);
                            }
                        }
                    }
                    n[t] = r;
                    if (0 == --s) {
                        e(n);
                    }
                } catch (l) {
                    i(l);
                }
            }
        }
    };
    n.resolve = function (t) {
        var var_13 = null;
        if (t && 'object' == typeof t && t.constructor === n) {
            var_13 = t;
        } else {
            var_13 = new n(arg_19);
            function arg_19(e) {
                e(t);
            }
        }
        return var_13;
    };
    n.reject = function (t) {
        var var_14 = new n(arg_20);
        return var_14;
        function arg_20(e, i) {
            i(t);
        }
    };
    n.race = function (t) {
        var var_15 = new n(arg_21);
        return var_15;
        function arg_21(e, i) {
            var n = 0, s = t.length;;
            for (; n < s; n++) {
                t[n].then(e, i);
            }
        }
    };
    var var_0 = 'function' == typeof setImmediate && function (t) {
        setImmediate(t);
    } || function (t) {
        e(t, 0);
    };
    n._immediateFn = var_0;
    n._unhandledRejectionFn = function (t) {
        if ('undefined' != typeof console && console) {
            console.warn('Possible Unhandled Promise Rejection:', t);
        }
    };
    var c;
    var u = function () {
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
    if ('Promise' in u) {
        if (!u.Promise.prototype['finally']) {
            u.Promise.prototype['finally'] = t;
        }
    } else {
        u.Promise = n;
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (t) {
            return var_16;
            function var_16(e, i) {
                if (null === this || this === undefined) {
                    throw TypeError('Array.prototype.indexOf called on null or undefined');
                }
                var n = t(this);
                var s = n.length >>> 0;
                var arg_22 = 0 | i;
                var o = Math.min(arg_22, s);
                if (o < 0) {
                    var arg_23 = s + o;
                    o = Math.max(0, arg_23);
                } else {
                    if (o >= s) {
                        var var_18 = -1;
                        return var_18;
                    }
                }
                if (void 0 === e) {
                    for (; o !== s; ++o) {
                        if (void 0 === n[o] && o in n) {
                            return o;
                        }
                    }
                } else {
                    if (e != e) {
                        for (; o !== s; ++o) {
                            if (n[o] != n[o]) {
                                return o;
                            }
                        }
                    } else {
                        for (; o !== s; ++o) {
                            if (n[o] === e) {
                                return o;
                            }
                        }
                    }
                }
                var var_17 = -1;
                return var_17;
            }
        }(Object);
    }
    if (!Array.isArray) {
        Array.isArray = function (t) {
            var var_19 = '[object Array]' === Object.prototype.toString.call(t);
            return var_19;
        };
    }
    if (!document.getElementsByClassName) {
        window.Element.prototype.getElementsByClassName = document.constructor.prototype.getElementsByClassName = function (t) {
            if (document.querySelectorAll) {
                var arg_24 = '.' + t;
                var var_20 = document.querySelectorAll(arg_24);
                return var_20;
            }
            var e = document.getElementsByTagName('*'), i = new RegExp('(^|\\s)' + t + '(\\s|$)'), n = [], s = 0;;
            for (; s < e.length; s++) {
                if (i.test(e[s].className)) {
                    n.push(e[s]);
                }
            }
            return n;
        };
    }
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (t, e) {
            var arg_25 = null;
            if (!e || e < 0) {
                arg_25 = 0;
            } else {
                arg_25 = +e;
            }
            var var_21 = this.substr(arg_25, t.length) === t;
            return var_21;
        };
    }
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (t, e) {
            if (e === undefined || e > this.length) {
                e = this.length;
            }
            var arg_26 = e - t.length;
            var var_22 = this.substring(arg_26, e) === t;
            return var_22;
        };
    }
    try {
        if (Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, 'textContent') && !Object.getOwnPropertyDescriptor(Element.prototype, 'textContent').get) {
            var d = Object.getOwnPropertyDescriptor(Element.prototype, 'innerText');
            var arg_27 = {
                get: function () {
                    var var_23 = d.get.call(this);
                    return var_23;
                },
                set: function (t) {
                    d.set.call(this, t);
                }
            };
            Object.defineProperty(Element.prototype, 'textContent', arg_27);
        }
    } catch (yn) {
    }
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (t) {
            if ('function' != typeof this) {
                throw new TypeError('Function.prototype.bind: Item Can Not Be Bound.');
            }
            var e = Array.prototype.slice.call(arguments, 1);
            var i = this;
            if (this.prototype) {
                n.prototype = this.prototype;
            }
            s.prototype = new n();
            return s;
            function n() {
            }
            function s() {
                var arg_28 = null;
                if (this instanceof n) {
                    arg_28 = this;
                } else {
                    arg_28 = t;
                }
                var arg_30 = Array.prototype.slice.call(arguments);
                var arg_29 = e.concat(arg_30);
                var var_24 = i.apply(arg_28, arg_29);
                return var_24;
            }
        };
    }
    if ('function' != typeof Object.create) {
        Object.create = function (t, e) {
            i.prototype = t;
            if ('object' == typeof e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (i[n] = e[n]);
            }
            var var_25 = new i();
            return var_25;
            function i() {
            }
        };
    }
    if (!Date.now) {
        Date.now = function () {
            var var_26 = new Date().getTime();
            return var_26;
        };
    }
    if (!window.console) {
        window.console = {};
    }
    var p = [
            'error',
            'info',
            'log',
            'show',
            'table',
            'trace',
            'warn'
        ], f = function (t) {
        }, m = p.length;;
    for (; --m > -1;) {
        c = p[m];
        if (!window.console[c]) {
            window.console[c] = f;
        }
    }
    if (window.atob) {
        try {
            window.atob(' ');
        } catch (gn) {
            window.atob = function (t) {
                e.original = t;
                return e;
                function e(e) {
                    var arg_31 = String(e).replace(/[\t\n\f\r ]+/g, '');
                    var var_27 = t(arg_31);
                    return var_27;
                }
            }(window.atob);
        }
    } else {
        var y = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var g = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
        window.atob = function (t) {
            t = String(t).replace(/[\t\n\f\r ]+/g, '');
            if (!g.test(t)) {
                throw new TypeError('Failed to execute \'atob\' on \'Window\': The string to be decoded is not correctly encoded.');
            }
            var e;
            var i;
            var n;
            var arg_32 = 2 - (3 & t.length);
            t += '=='.slice(arg_32);
            var s = '', o = 0;;
            for (; o < t.length;) {
                var arg_33 = t.charAt(o++);
                var arg_34 = t.charAt(o++);
                e = y.indexOf(arg_33) << 18 | y.indexOf(arg_34) << 12 | (i = y.indexOf(t.charAt(o++))) << 6 | (n = y.indexOf(t.charAt(o++)));
                if (64 === i) {
                    var arg_35 = e >> 16 & 255;
                    s += String.fromCharCode(arg_35);
                } else {
                    if (64 === n) {
                        var arg_36 = e >> 16 & 255;
                        var arg_37 = e >> 8 & 255;
                        s += String.fromCharCode(arg_36, arg_37);
                    } else {
                        var arg_38 = e >> 16 & 255;
                        var arg_39 = e >> 8 & 255;
                        var arg_40 = 255 & e;
                        s += String.fromCharCode(arg_38, arg_39, arg_40);
                    }
                }
            }
            return s;
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
    (function (t) {
        if ('object' == typeof exports && 'undefined' != typeof module) {
            module.exports = t();
        } else {
            if ('function' == typeof define && define.amd) {
                var arg_197 = [];
                define(arg_197, t);
            } else {
                ('undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this).Raven = t();
            }
        }
    }(arg_0));
    var v = [
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
    var b = [
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
    var w = navigator.userAgent;
    var k = {
        getAgent: function () {
            return w;
        },
        getBrowser: function (t) {
            var arg_198 = t || w;
            var var_175 = E(arg_198, v);
            return var_175;
        },
        getOS: function (t) {
            var arg_199 = t || w;
            var var_176 = E(arg_199, b);
            return var_176;
        }
    };
    _.prototype.hasEvent = function (t, e) {
        var var_187 = 'on' + t in (e || document.createElement('div'));
        return var_187;
    };
    _.prototype.getScreenDimensions = function () {
        var t = {};
        for (var e in window.screen)
            t[e] = window.screen[e];
        delete t.orientation;
        return t;
    };
    _.prototype.interrogateNavigator = function () {
        var t = {};
        for (var e in window.navigator)
            try {
                t[e] = window.navigator[e];
            } catch (yn) {
            }
        delete t.plugins;
        delete t.mimeTypes;
        t.plugins = [];
        if (window.navigator.plugins) {
            var i = 0;;
            for (; i < window.navigator.plugins.length; i++) {
                t.plugins[i] = window.navigator.plugins[i].filename;
            }
        }
        return t;
    };
    _.prototype.supportsCanvas = function () {
        var t = document.createElement('canvas');
        var var_188 = !(!t.getContext || !t.getContext('2d'));
        return var_188;
    };
    _.prototype.supportsWebAssembly = function () {
        try {
            if ('object' == typeof WebAssembly && 'function' == typeof WebAssembly.instantiate) {
                var arg_200 = Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0);
                var t = new WebAssembly.Module(arg_200);
                if (t instanceof WebAssembly.Module) {
                    var var_189 = new WebAssembly.Instance(t) instanceof WebAssembly.Instance;
                    return var_189;
                }
            }
        } catch (gn) {
            return false;
        }
    };
    var C = {
        Browser: new _(),
        System: new function () {
            var t;
            var e;
            var i = k.getOS();
            var n = k.getAgent();
            t = !!('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
            e = false;
            if (i) {
                e = [
                    'iOS',
                    'Windows Phone',
                    'Windows Mobile',
                    'Android',
                    'BlackBerry OS'
                ].indexOf(i.name) >= 0;
            }
            var var_190 = t && e;
            this.mobile = var_190;
            this.dpr = function () {
                var var_191 = window.devicePixelRatio || 1;
                return var_191;
            };
            if (this.mobile && i && 'Windows' === i.family && n.indexOf('touch') < 0) {
                this.mobile = false;
            }
            this.os = 'iOS' === i.family ? 'ios' : 'Android' === i.family ? 'android' : 'Mac OS X' === i.family ? 'mac' : 'Windows' === i.family ? 'windows' : 'Linux' === i.family ? 'linux' : i.family.toLowerCase();
            this.version = function () {
                if (!i) {
                    return 'unknown';
                }
                var t = i.major;
                if (i.minor) {
                    t += '.' + i.minor;
                }
                if (i.patch) {
                    t += '.' + i.patch;
                }
                return t;
            }();
        }()
    };
    var S = {
        host: null,
        file: null,
        sitekey: null,
        pingdom: 'safari' === C.Browser.type && 'windows' !== C.System.os && 'mac' !== C.System.os && 'ios' !== C.System.os && 'android' !== C.System.os,
        assetDomain: 'https://newassets.hcaptcha.com',
        assetUrl: 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static',
        width: null,
        height: null,
        mobile: null
    };
    var O = {
        theme: {
            contrast: {
                hcolor: '#FFF',
                hfcolor: '#000'
            },
            light: {
                hcolor: '#00838F',
                hfcolor: '#FFF'
            }
        },
        text: '#555555',
        accent: '#926FC1',
        warn: {
            base: '#EB5757',
            hover: '#DE3F3F'
        },
        link: {
            base: '#00838f',
            hover: '#00838f'
        },
        white: '#fff',
        grey: {
            base: '#333',
            placeholder: '#f0eff0'
        },
        purple: '#65549b',
        hoverOff: '#00838f',
        skipHoverOff: '#737373',
        hoverOn: '#00838f',
        error: '#fc481e'
    };
    var A = {
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
    var $ = {
        queue: L,
        depth: function vn(t, e, i) {
            if ('object' == typeof t && t[e] && t[e].length > 0) {
                var n = t[e].length;;
                for (; --n > -1;) {
                    vn(t[e][n], e, i);
                }
            }
            if (t !== undefined) {
                i(t);
            }
        },
        breathe: function (t, e, i) {
            var n = new L();
            var s = null;
            n.add(t);
            s = n.remove();
            for (; s;) {
                var o = 0;;
                for (; o < s[e].length; o++) {
                    n.add(s[e][o]);
                }
                i(s);
                s = n.remove();
            }
        }
    };
    T.prototype.initComponent = function (t, e) {
        var i = new t(e);
        i._parent = this;
        this.children.push(i);
        return i;
    };
    T.prototype.destroy = function () {
        var t = this;
        try {
            $.depth(this, 'children', arg_201);
            function arg_201(e) {
                if (t !== e) {
                    var i = t.children.length;;
                    for (; --i > -1;) {
                        if (t.children[i] === e) {
                            t.children.splice(i, 1);
                        }
                    }
                }
                if (e._destroy) {
                    e._destroy();
                }
                e = null;
            }
        } catch (gn) {
            throw new Error('Trouble destroying nodes: ' + gn);
        }
        return null;
    };
    T.prototype._destroy = function () {
        if (this.onDestroy) {
            this.onDestroy();
        }
        var t = this._events.length || 0;;
        for (; --t > -1;) {
            this._events.splice(t, 1);
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
    T.prototype.on = function (t, e) {
        var i = this._events.length, n = false;;
        for (; --i > -1 && false === n;) {
            if (this._events[i].event === t) {
                n = this._events[i];
            }
        }
        if (false === n) {
            n = {
                event: t,
                listeners: []
            };
            this._events.push(n);
        }
        n.listeners.push(e);
    };
    T.prototype.off = function (t, e) {
        var i = this._events.length;;
        for (; --i > -1;) {
            if (this._events[i].event === t) {
                var n = this._events[i].listeners.length;;
                for (; --n > -1;) {
                    if (this._events[i].listeners[n] === e) {
                        this._events[i].listeners[n].splice(n, 1);
                    }
                }
                if (0 === this._events[i].listeners.length) {
                    this._events[i].splice(i, 1);
                }
            }
        }
    };
    T.prototype.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1), i = this._events.length;;
        for (; --i > -1;) {
            if (this._events[i].event === t) {
                var n = this._events[i].listeners.length;;
                for (; --n > -1;) {
                    this._events[i].listeners[n].apply(this, e);
                }
            }
        }
    };
    var P = true;
    var B = {
        eventName: function (t) {
            var e = t;
            if ('down' === t || 'up' === t || 'move' === t || 'over' === t || 'out' === t) {
                if (!C.System.mobile || 'down' !== t && 'up' !== t && 'move' !== t) {
                    e = 'mouse' + t;
                } else {
                    if ('down' === t) {
                        e = 'touchstart';
                    } else {
                        if ('up' === t) {
                            e = 'touchend';
                        } else {
                            e = 'touchmove';
                        }
                    }
                }
            } else {
                if ('enter' === t) {
                    e = 'keydown';
                }
            }
            return e;
        },
        actionName: function (t) {
            var e = t;
            if ('touchstart' === e || 'mousedown' === e) {
                e = 'down';
            } else {
                if ('touchmove' === e || 'mousemove' === e) {
                    e = 'move';
                } else {
                    if ('touchend' === e || 'mouseup' === e) {
                        e = 'up';
                    } else {
                        if ('mouseover' === e) {
                            e = 'over';
                        } else {
                            if ('mouseout' === e) {
                                e = 'out';
                            }
                        }
                    }
                }
            }
            return e;
        },
        eventCallback: function (t, e, i) {
            var n = B.actionName(t);
            return var_196;
            function var_196(s) {
                var var_197 = s || window.event;
                s = var_197;
                if ('down' === n || 'move' === n || 'up' === n || 'over' === n || 'out' === n || 'click' === n) {
                    var o = B.eventCoords(s);
                    var r = i.getBoundingClientRect();
                    s.windowX = o.x;
                    s.windowY = o.y;
                    s.elementX = s.windowX - (r.x || r.left);
                    s.elementY = s.windowY - (r.y || r.top);
                }
                var var_198 = s.which || s.keyCode || 0;
                s.keyNum = var_198;
                if (!('enter' === t && 13 !== s.keyNum && 32 !== s.keyNum)) {
                    s.action = n;
                    s.targetElement = i;
                    e(s);
                }
            }
        },
        eventCoords: function (t) {
            var e = {
                x: 0,
                y: 0
            };
            if (t.windowsPointer) {
                return t;
            }
            if (!t) {
                return e;
            }
            if (t.touches || t.changedTouches) {
                var i = (t.touches && t.touches.length >= 1 ? t.touches : t.changedTouches)[0];
                var var_199 = i.pageX || i.clientX;
                e.x = var_199;
                var var_200 = i.pageY || i.clientY;
                e.y = var_200;
            } else {
                var var_201 = t.pageX || t.clientX;
                e.x = var_201;
                var var_202 = t.pageY || t.clientY;
                e.y = var_202;
            }
            return e;
        }
    };
    var D = [
        'Webkit',
        'Moz',
        'ms'
    ];
    var F = document.createElement('div').style;
    var z = {};
    W.prototype.createElement = function (t, e) {
        var i = new W(t, e, false);
        this.appendElement.call(this, i);
        this._nodes.push(i);
        return i;
    };
    W.prototype.appendElement = function (t) {
        if (t === undefined) {
            var arg_207 = {
                name: 'DomElement Add Child',
                message: 'Child Element is undefined'
            };
            var var_205 = M(arg_207);
            return var_205;
        }
        var e;
        if (t._frag !== undefined && null !== t._frag) {
            e = t._frag;
        } else {
            if (t.dom !== undefined) {
                e = t.dom;
            } else {
                e = t;
            }
        }
        try {
            if (t instanceof W) {
                t._parent = this;
            }
            this.dom.appendChild(e);
        } catch (gn) {
            var arg_208 = {
                name: 'DomElement Add Child',
                message: 'Failed to append child.'
            };
            M(arg_208);
        }
        var var_204 = this;
        return var_204;
    };
    W.prototype.removeElement = function (t) {
        try {
            var e = t;
            if (t.dom) {
                e = e.dom;
                var i = t._nodes.length;;
                for (; --i > -1;) {
                    var arg_209 = t._nodes[i].dom || t._nodes[i];
                    t.dom.removeChild(arg_209);
                    t._nodes.splice(i, 1);
                }
            } else {
                var n = this._nodes.length;;
                for (; --n > -1;) {
                    if (this._nodes[n] === e) {
                        this._nodes.splice(n, 1);
                    }
                }
            }
            if (e.parentNode === this.dom) {
                this.dom.removeChild(e);
            }
        } catch (gn) {
            var arg_210 = {
                name: 'DomElement Remove Child',
                message: 'Failed to remove child.'
            };
            M(arg_210);
        }
    };
    W.prototype.addClass = function (t) {
        if (false === this.hasClass.call(this, t)) {
            this._clss.push(t);
            this.dom.className = this._clss.join(' ');
        }
        var var_206 = this;
        return var_206;
    };
    W.prototype.hasClass = function (t) {
        var e = this.dom.className.indexOf(t) >= 0, i = this._clss.length;;
        for (; i-- && !e;) {
            e = this._clss[i] === t;
        }
        return e;
    };
    W.prototype.removeClass = function (t) {
        var e = this._clss.length;;
        for (; --e > -1;) {
            if (this._clss[e] === t) {
                this._clss.splice(e, 1);
            }
        }
        this.dom.className = this._clss.join(' ');
        var var_207 = this;
        return var_207;
    };
    W.prototype.text = function (t) {
        if (this && this.dom) {
            if (!t) {
                return this.dom.textContent;
            }
            var e, i, n, s, o = /&(.*?);/g, r = /<[a-z][\s\S]*>/i;;
            for (; null !== (e = o.exec(t));) {
                if (false === r.test(e[0])) {
                    n = e[0];
                    s = void 0;
                    (s = document.createElement('div')).innerHTML = n;
                    i = s.textContent;
                    var arg_212 = e[0];
                    var arg_211 = new RegExp(arg_212, 'g');
                    t = t.replace(arg_211, i);
                } else {
                    t = t.replace(e[0], '');
                }
            }
            this.dom.textContent = t;
            var var_208 = this;
            return var_208;
        }
    };
    W.prototype.content = W.prototype.text;
    W.prototype.css = function (t) {
        var e;
        for (var i in t) {
            e = t[i];
            try {
                if ('opacity' !== i && 'zIndex' !== i && 'fontWeight' !== i && isFinite(e) && parseFloat(e) === e) {
                    e += 'px';
                }
                if ('ie' === C.Browser.type && 8 === C.Browser.version && 'opacity' === i) {
                    this.dom.style.filter = 'alpha(opacity=' + 100 * e + ')';
                } else {
                    var n = H(i);
                    this.dom.style[n] = e;
                }
            } catch (yn) {
            }
        }
        var var_209 = this;
        return var_209;
    };
    W.prototype.backgroundImage = function (t, e, i, n) {
        var s = e !== undefined && i !== undefined;
        var o = { '-ms-high-contrast-adjust': 'none' };
        if ('object' == typeof e) {
            n = e;
        }
        if (n === undefined) {
            n = {};
        }
        if (s) {
            var r = t.width / t.height;
            var a = e;
            var l = a / r;
            if (n.cover && l < i) {
                a = (l = i) * r;
            }
            if (n.contain && l > i) {
                a = (l = i) * r;
            }
            o.width = a;
            o.height = l;
            if (n.center) {
                o.marginLeft = -a / 2;
                o.marginTop = -l / 2;
                o.position = 'absolute';
                o.left = '50%';
                o.top = '50%';
            }
            if (n.left || n.right) {
                var var_210 = n.left || 0;
                o.left = var_210;
                var var_211 = n.top || 0;
                o.top = var_211;
            }
        }
        if ('ie' === C.Browser.type && 8 === C.Browser.version) {
            o.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + t.src + '\',sizingMethod=\'scale\')';
        } else {
            o.background = 'url(' + t.src + ')';
            o.backgroundPosition = '50% 50%';
            o.backgroundRepeat = 'no-repeat';
            o.backgroundSize = s ? a + 'px ' + l + 'px' : n.cover ? 'cover' : n.contain ? 'contain' : '100%';
        }
        this.css.call(this, o);
    };
    W.prototype.setAttribute = function (t, e) {
        var i;
        if ('object' == typeof t) {
            for (var n in t)
                i = t[n], this.dom.setAttribute(n, i);
        } else {
            this.dom.setAttribute(t, e);
        }
    };
    W.prototype.removeAttribute = function (t, e) {
        var i;
        if ('object' == typeof t) {
            for (var n in t)
                i = t[n], this.dom.removeAttribute(n, i);
        } else {
            this.dom.removeAttribute(t, e);
        }
    };
    W.prototype.addEventListener = function (t, e, i) {
        var n = {
            event: B.eventName(t),
            handler: B.eventCallback(t, e, this.dom),
            callback: e
        };
        this._listeners.push(n);
        if (this.dom.addEventListener) {
            this.dom.addEventListener(n.event, n.handler, i);
        } else {
            var arg_213 = 'on' + n.event;
            this.dom.attachEvent(arg_213, n.handler);
        }
    };
    W.prototype.removeEventListener = function (t, e, i) {
        var n, s = this._listeners.length;;
        for (; --s > -1;) {
            if ((n = this._listeners[s]).event === t && n.callback === e) {
                this._listeners.splice(s, 1);
                if (this.dom.removeEventListener) {
                    this.dom.removeEventListener(n.event, n.handler, i);
                } else {
                    var arg_214 = 'on' + n.event;
                    this.dom.detachEvent(arg_214, n.handler);
                }
            }
        }
    };
    W.prototype.focus = function () {
        this.dom.focus();
    };
    W.prototype.blur = function () {
        this.dom.blur();
    };
    W.prototype.html = function (t) {
        if (t) {
            this.dom.innerHTML = t;
        }
        return this.dom.innerHTML;
    };
    W.prototype.__destroy = function () {
        var t, e = this._listeners.length;;
        for (; --e > -1;) {
            t = this._listeners[e];
            this._listeners.splice(e, 1);
            if (this.dom.removeEventListener) {
                this.dom.removeEventListener(t.event, t.handler);
            } else {
                var arg_215 = 'on' + t.event;
                this.dom.detachEvent(arg_215, t.handler);
            }
        }
        this.dom = null;
        this._clss = [];
        this._nodes = [];
        this._listeners = [];
        this._frag = null;
        t = null;
        return null;
    };
    var q = {
        self: function (t, e) {
            var i = {};
            var n = Array.prototype.slice.call(arguments, 2);
            for (var s in (e.apply(t, n), t))
                i[s] = t[s];
        },
        proto: function (t, e) {
            t.prototype = Object.create(e.prototype);
            t.prototype.constructor = t;
        }
    };
    q.proto(N, W);
    N.prototype.initComponent = function (t, e, i) {
        var n = new t(e);
        n._parent = this;
        this.children.push(n);
        if (n.dom) {
            if (i !== undefined) {
                if (i.appendElement) {
                    i.appendElement(n);
                }
            } else {
                this.appendElement(n);
            }
        }
        return n;
    };
    N.prototype.destroy = function () {
        var t = this;
        try {
            $.depth(this, 'children', arg_217);
            function arg_217(e) {
                if (t !== e) {
                    var i = t.children.length;;
                    for (; --i > -1;) {
                        if (t.children[i] === e) {
                            t.children.splice(i, 1);
                        }
                    }
                }
                if (e._destroy) {
                    e._destroy();
                }
                e = null;
            }
        } catch (gn) {
            throw new Error('Trouble destroying nodes: ' + gn);
        }
        return null;
    };
    N.prototype._destroy = function () {
        try {
            if (this.onDestroy) {
                this.onDestroy();
            }
            if (this._parent.removeElement) {
                this._parent.removeElement(this);
            }
            var t = this._events.length;;
            for (; --t > -1;) {
                this._events.splice(t, 1);
            }
            this.children = null;
            this._destroy = null;
            this._events = null;
            this.destroy = null;
            this.emit = null;
            this.on = null;
            this.off = null;
            this.initComponent = null;
        } catch (gn) {
            var arg_218 = {
                name: 'DomComponent',
                message: 'Failed to destroy.'
            };
            M(arg_218);
        }
    };
    N.prototype.on = function (t, e) {
        var i = this._events.length, n = false;;
        for (; --i > -1 && false === n;) {
            if (this._events[i].event === t) {
                n = this._events[i];
            }
        }
        if (false === n) {
            n = {
                event: t,
                listeners: []
            };
            this._events.push(n);
        }
        n.listeners.push(e);
    };
    N.prototype.off = function (t, e) {
        var i = this._events.length;;
        for (; --i > -1;) {
            if (this._events[i].event === t) {
                var n = this._events[i].listeners.length;;
                for (; --n > -1;) {
                    if (this._events[i].listeners[n] === e) {
                        this._events[i].listeners.splice(n, 1);
                    }
                }
                if (0 === this._events[i].listeners.length) {
                    this._events.splice(i, 1);
                }
            }
        }
    };
    N.prototype.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1), i = this._events.length;;
        for (; --i > -1 && this._events;) {
            if (this._events[i].event === t) {
                var n = this._events[i].listeners.length;;
                for (; --n > -1;) {
                    this._events[i].listeners[n].apply(this, e);
                }
            }
        }
    };
    var U = {
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
    var V = {
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
    var X = null;
    var J = {
        translate: function (t) {
            var e = J.getBestTrans(V);
            var var_212 = e && e[t] || t;
            return var_212;
        },
        getBestTrans: function (t) {
            var e = J.getLocale();
            var var_213 = null;
            if (e in t) {
                var_213 = t[e];
            } else {
                if (J.getShortLocale(e) in t) {
                    var_213 = t[J.getShortLocale(e)];
                } else {
                    if ('en' in t) {
                        var_213 = t.en;
                    } else {
                        var_213 = null;
                    }
                }
            }
            return var_213;
        },
        getLocale: function () {
            var t = X || window.navigator.userLanguage || window.navigator.language;
            var e = J.getShortLocale(t);
            if ('in' === e) {
                t = 'id';
            }
            if ('iw' === e) {
                t = 'he';
            }
            if ('nb' === e) {
                t = 'no';
            }
            if ('ji' === e) {
                t = 'yi';
            }
            if ('zh-CN' === t) {
                t = 'zh';
            }
            if ('jv' === e) {
                t = 'jw';
            }
            var var_214 = null;
            if (U[t]) {
                var_214 = t;
            } else {
                if (U[e]) {
                    var_214 = e;
                } else {
                    var_214 = 'en';
                }
            }
            return var_214;
        },
        setLocale: function (t) {
            X = t;
        },
        getShortLocale: function (t) {
            var var_215 = null;
            if (t.indexOf('-') >= 0) {
                var arg_219 = t.indexOf('-');
                var_215 = t.substring(0, arg_219);
            } else {
                var_215 = t;
            }
            return var_215;
        },
        isShortLocale: function (t) {
            var var_216 = 2 === t.length || 3 === t.length;
            return var_216;
        },
        addTable: function (t, e) {
            if (!e) {
                e = Object.create(null);
            }
            if (V[t]) {
                var i = V[t];
                for (var n in e)
                    i[n] = e[n];
            } else {
                V[t] = e;
            }
            var var_217 = V[t];
            return var_217;
        },
        getTable: function (t) {
            var var_218 = V[t];
            return var_218;
        },
        addTables: function (t) {
            for (var e in t)
                J.addTable(e, t[e]);
            return V;
        },
        getTables: function () {
            return V;
        }
    };
    var K = {
        touchstart: 'ts',
        touchend: 'te',
        touchmove: 'tm',
        touchcancel: 'tc'
    };
    var Y = {
        mousedown: 'md',
        mouseup: 'mu',
        mousemove: 'mm'
    };
    var G = {
        keydown: 'kd',
        keyup: 'ku'
    };
    var Q = { devicemotion: 'dm' };
    nt.prototype.getMeanPeriod = function () {
        return this._meanPeriod;
    };
    nt.prototype.getData = function () {
        this._cleanStaleData();
        return this._data;
    };
    nt.prototype.getSize = function () {
        this._cleanStaleData();
        return this._data.length;
    };
    nt.prototype.getCapacity = function () {
        var var_226 = null;
        if (0 === this._period) {
            var_226 = this._interval;
        } else {
            var arg_223 = this._interval / this._period;
            var_226 = Math.ceil(arg_223);
        }
        return var_226;
    };
    nt.prototype.push = function (t, e) {
        this._cleanStaleData();
        var i = 0 === this._date.length;
        if (t - (this._date[this._date.length - 1] || 0) >= this._period) {
            this._date.push(t);
            this._data.push(e);
        }
        if (!i) {
            var n = t - this._prevTimestamp;
            this._meanPeriod = (this._meanPeriod * this._meanCounter + n) / (this._meanCounter + 1);
            this._meanCounter++;
        }
        this._prevTimestamp = t;
    };
    nt.prototype._cleanStaleData = function () {
        var t = Date.now(), e = this._date.length - 1;;
        for (; e >= 0; e--) {
            if (t - this._date[e] >= this._interval) {
                var arg_224 = e + 1;
                this._date.splice(0, arg_224);
                var arg_225 = e + 1;
                this._data.splice(0, arg_225);
                break;
            }
        }
    };
    st.prototype.record = function (t, e, i, n) {
        this._manifest.st = Date.now();
        this.state.record.mouse = t === undefined ? this.state.record.mouse : t;
        this.state.record.touch = i === undefined ? this.state.record.touch : i;
        this.state.record.keys = e === undefined ? this.state.record.keys : e;
        this.state.record.motion = n === undefined ? this.state.record.motion : n;
        if (false === this.state.initRecord) {
            var arg_226 = document.body;
            var s = new W(arg_226);
            if (this.state.record.mouse) {
                var arg_227 = Z('mousedown', this._recordEvent);
                s.addEventListener('mousedown', arg_227);
                var arg_228 = Z('mousemove', this._recordEvent);
                s.addEventListener('mousemove', arg_228);
                var arg_229 = Z('mouseup', this._recordEvent);
                s.addEventListener('mouseup', arg_229);
            }
            if (true === this.state.record.keys) {
                var arg_230 = et('keyup', this._recordEvent);
                s.addEventListener('keyup', arg_230);
                var arg_231 = et('keydown', this._recordEvent);
                s.addEventListener('keydown', arg_231);
            }
            if (this.state.record.touch && true === C.Browser.hasEvent('touchstart', document.body)) {
                var arg_232 = tt('touchstart', this._recordEvent);
                s.addEventListener('touchstart', arg_232);
                var arg_233 = tt('touchmove', this._recordEvent);
                s.addEventListener('touchmove', arg_233);
                var arg_234 = tt('touchend', this._recordEvent);
                s.addEventListener('touchend', arg_234);
            }
            if (this.state.record.motion && true === C.Browser.hasEvent('devicemotion', window)) {
                var arg_235 = it('devicemotion', this._recordEvent);
                s.addEventListener('devicemotion', arg_235);
            }
            this.state.initRecord = true;
        }
        this.state.recording = true;
    };
    st.prototype.stop = function () {
        this.state.recording = false;
    };
    st.prototype.time = function () {
        return this.state.loadTime;
    };
    st.prototype.getData = function () {
        for (var t in this.state.timeBuffers)
            this._manifest[t] = this.state.timeBuffers[t].getData(), this._manifest[t + '-mp'] = this.state.timeBuffers[t].getMeanPeriod();
        return this._manifest;
    };
    st.prototype.setData = function (t, e) {
        this._manifest[t] = e;
    };
    st.prototype.resetData = function () {
        this._manifest = {};
        this.state.timeBuffers = {};
    };
    st.prototype.circBuffPush = function (t, e) {
        this._recordEvent(t, e);
    };
    st.prototype._recordEvent = function (t, e) {
        if (false !== this.state.recording) {
            try {
                var i = e[e.length - 1];
                if (!this.state.timeBuffers[t]) {
                    this.state.timeBuffers[t] = new nt(16, 15000);
                }
                this.state.timeBuffers[t].push(i, e);
            } catch (gn) {
                var arg_236 = 'Event recording error: ' + JSON.stringify(gn);
                I(arg_236, 'error', 'motion');
            }
        }
    };
    var ot = new st();
    var rt = [];
    var at = false;
    var lt = false;
    var dt = new W(document);
    var pt = new W(window);
    var ft = {
        __proto__: null,
        BaseComponent: T,
        DomComponent: N,
        DomElement: W,
        Device: C,
        Extend: q,
        Motion: ot,
        Language: J,
        Dom: {
            __proto__: null,
            Window: pt,
            Document: dt,
            Element: W,
            Ready: ht,
            Find: function (t) {
                var e, i, n = null, s = false, o = t.split(' '), r = 0;;
                for (; r < o.length; r++) {
                    if ((e = o[r]).indexOf('#') >= 0) {
                        var arg_239 = e.replace('#', '');
                        n = document.getElementById(arg_239);
                    }
                    if (e.indexOf('.') >= 0) {
                        if (null === n) {
                            n = document;
                        }
                        if (s) {
                            var a = [], l = 0;;
                            for (; l < n.length; l++) {
                                var arg_240 = e.replace('.', '');
                                i = n[l].getElementsByClassName(arg_240);
                                var h = 0;;
                                for (; h < i.length; h++) {
                                    a.push(i[h]);
                                }
                            }
                            n = a;
                            a = [];
                        } else {
                            var arg_241 = e.replace('.', '');
                            n = n.getElementsByClassName(arg_241);
                            s = true;
                        }
                    }
                }
                if (true === s) {
                    if (1 === n.length) {
                        var var_227 = n[0];
                        return var_227;
                    }
                    var c = [], u = 0;;
                    for (; u < n.length; u++) {
                        c.push(n[u]);
                    }
                    return c;
                }
                return n;
            }
        }
    };
    q.proto(mt, W);
    mt.prototype.dimensions = function (t, e) {
        var arg_262 = {
            width: t,
            height: e
        };
        this.css(arg_262);
        var arg_263 = t / this.scale;
        this.element.width = Math.round(arg_263) * this.dpr;
        var arg_264 = e / this.scale;
        this.element.height = Math.round(arg_264) * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
        var arg_265 = t / this.scale;
        this.width = Math.round(arg_265);
        var arg_266 = e / this.scale;
        this.height = Math.round(arg_266);
    };
    mt.prototype.clear = function () {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.element.width, this.element.height);
        }
    };
    mt.prototype.draw = function () {
        if (this.ctx) {
            this.ctx.fillStyle = this.clearColor;
            this.ctx.fillRect(0, 0, this.element.width, this.element.height);
        }
    };
    mt.prototype._destroy = function () {
        this.__destroy();
        this.element = null;
        this.ctx = null;
        this.width = null;
        this.height = null;
    };
    var wt = {
        __proto__: null,
        clamp: yt,
        range: gt,
        toRadians: vt,
        toDegrees: bt
    };
    kt.prototype.rotate = function (t, e) {
        var i = vt(e);
        var n = Math.sin(i);
        var s = Math.cos(i);
        var o = this.x - t.x;
        var r = this.y - t.y;
        this.x = o * s - r * n + t.x;
        this.y = o * n + r * s + t.y;
    };
    kt.prototype.getDistance = function (t) {
        var arg_268 = this.x - t.x;
        var arg_269 = this.y - t.y;
        var arg_267 = Math.pow(arg_268, 2) + Math.pow(arg_269, 2);
        var var_238 = Math.sqrt(arg_267);
        return var_238;
    };
    kt.prototype.getAngle = function (t) {
        var e = t.x - this.x;
        var i = t.y - this.y;
        var arg_270 = Math.atan2(i, e);
        var n = bt(arg_270);
        if (n < 0) {
            n += 360;
        }
        return n;
    };
    kt.prototype.hitTest = function (t) {
        var var_239 = this.radius + this.tolerance >= this.getDistance(t);
        return var_239;
    };
    kt.prototype.restrict = function (t, e, i, n) {
        if ('x' !== t && 'y' !== t) {
            throw new Error('Point.restrict requires a value: x or y');
        }
        if (e + this[t] < i) {
            e = this[t] - i;
        } else {
            if (e + this[t] > n) {
                e = n - this[t];
            }
        }
        var var_240 = this[t] + e;
        return var_240;
    };
    kt.prototype.draw = function (t) {
        t.ctx.beginPath();
        var arg_271 = this.radius / t.scale;
        var arg_272 = 2 * Math.PI;
        t.ctx.arc(this.x, this.y, arg_271, 0, arg_272, false);
        if (this.fill) {
            t.ctx.fillStyle = this.fillColor;
            t.ctx.fill();
        }
        if (this.stroke) {
            t.ctx.strokeStyle = this.strokeColor;
            t.ctx.lineWidth = this.strokeWidth / t.scale;
            t.ctx.stroke();
        }
    };
    q.proto(xt, kt);
    xt.prototype.set = function (t, e, i) {
        var var_241 = t.x || this.x;
        this.x = var_241;
        var var_242 = t.y || this.y;
        this.y = var_242;
        if (e === undefined) {
            this.handleIn.x = this.x;
            this.handleIn.y = this.y;
        } else {
            this.handleIn.x = e.x;
            this.handleIn.y = e.y;
        }
        if (i === undefined) {
            this.handleOut.x = this.x;
            this.handleOut.y = this.y;
        } else {
            this.handleOut.x = i.x;
            this.handleOut.y = i.y;
        }
    };
    xt.prototype.clone = function () {
        var t = {
            x: this.x,
            y: this.y
        };
        var e = {
            x: this.handleIn.x,
            y: this.handleIn.y
        };
        var i = {
            x: this.handleOut.x,
            y: this.handleOut.y
        };
        var n = new xt();
        if (e.x === i.x && e.y === i.y) {
            n.set(t);
        } else {
            n.set(t, e, i);
        }
        n.index = this.index;
        n.prev = this.prev;
        n.next = this.next;
        n.radius = this.radius;
        n.tolerance = this.tolerance;
        n.fill = this.fill;
        n.stroke = this.stroke;
        n.fillColor = this.fillColor;
        n.strokeColor = this.strokeColor;
        n.strokeWidth = this.strokeWidth;
        return n;
    };
    xt.prototype.move = function (t, e) {
        this.x += t;
        this.y += e;
        this.handleIn.x += t;
        this.handleIn.y += e;
        this.handleOut.x += t;
        this.handleOut.y += e;
    };
    xt.prototype.render = function (t) {
        if (this.handleIn.x !== this.x && this.handleIn.y !== this.y) {
            this.handleIn.draw(t);
        }
        if (this.handleOut.x !== this.x && this.handleOut.y !== this.y) {
            this.handleOut.draw(t);
        }
        this.draw(t);
    };
    Et.prototype.addPoint = function (t) {
        var e;
        if (t instanceof xt) {
            e = t.clone();
        } else {
            (e = new xt()).set(t);
            e.radius = this.pointRadius;
        }
        e.index = this.segments.length;
        if (null === this._head) {
            this._head = e;
            this._tail = e;
        } else {
            e.prev = this._tail;
            this._tail.next = e;
            this._tail = e;
        }
        this._head.prev = this._tail;
        this._tail.next = this._head;
        this.segments.push(e);
        return e;
    };
    Et.prototype.addPoints = function (t) {
        var e = 0;;
        for (; e < t.length; e++) {
            this.addPoint(t[e]);
        }
        t = null;
    };
    Et.prototype.setPoints = function (t, e) {
        if (e === undefined) {
            e = 0;
        }
        var i = e;;
        for (; i < t.length; i++) {
            if (this.segments[i] === undefined) {
                this.addPoint(t[i]);
            } else {
                this.segments[i].set(t[i]);
            }
        }
        t = null;
        e = null;
    };
    Et.prototype.setPointRadius = function (t) {
        var e = -1;;
        for (; ++e < this.segments.length;) {
            (void 0).radius = t;
        }
    };
    Et.prototype.removePoint = function (t) {
        var e = this.segments.length, i = null;;
        for (; --e > -1 && null === i;) {
            i = this.segments[e];
            if (t.x === i.x && t.y === i.y) {
                this.segments.splice(e, 1);
                if (i === this._head && i === this._tail) {
                    this._head = null;
                    this._tail = null;
                } else {
                    if (i === this.head) {
                        this._head = this._head.next;
                        this._head.prev = null;
                    } else {
                        if (i === this._tail) {
                            this._tail = this._tail.prev;
                            this._tail.next = null;
                        } else {
                            i.prev.next = i.next;
                            i.next.prev = i.prev;
                        }
                    }
                }
            }
        }
        return i;
    };
    Et.prototype.forEachPoint = function (t, e) {
        if (0 !== this.segments.length && this.segments) {
            var i, n = false, s = this.segments.length;;
            for (; --s > -1 && !n;) {
                i = this.segments[e ? this.segments.length - 1 - s : s];
                if (t) {
                    n = t(i);
                }
            }
        }
    };
    Et.prototype.close = function (t) {
        this._closed = t;
    };
    Et.prototype.isClosed = function () {
        return this._closed;
    };
    Et.prototype.start = function () {
        return this._head;
    };
    Et.prototype.end = function () {
        return this._tail;
    };
    Et.prototype.rotate = function (t, e) {
        if (e === undefined) {
            e = this.getCenter();
        }
        var i, n = -1;;
        for (; ++n < this.segments.length;) {
            (i = this.segments[n]).handleIn.rotate(e, t);
            i.rotate(e, t);
            i.handleOut.rotate(e, t);
        }
    };
    Et.prototype.move = function (t, e) {
        var i = -1;;
        for (; ++i < this.segments.length;) {
            this.segments[i].move(t, e);
        }
    };
    Et.prototype.getPoint = function (t) {
        var var_243 = this.segments[t];
        return var_243;
    };
    Et.prototype.getLength = function () {
        return this.segments.length;
    };
    Et.prototype.getCenter = function () {
        var t = this.getBounding();
        var var_244 = {
            x: (t.right - t.left) / 2 + t.left,
            y: (t.bottom - t.top) / 2 + t.top
        };
        return var_244;
    };
    Et.prototype.getDimensions = function () {
        var t = this.getBounding();
        var var_245 = {
            width: t.right - t.left,
            height: t.bottom - t.top
        };
        return var_245;
    };
    Et.prototype.getBounding = function () {
        var t, e = null, i = null, n = null, s = null, o = -1;;
        for (; ++o < this.segments.length;) {
            t = this.segments[o];
            if (null === e || t.x < e) {
                e = t.x;
            }
            if (null === i || t.x > i) {
                i = t.x;
            }
            if (null === n || t.y < n) {
                n = t.y;
            }
            if (null === s || t.y > s) {
                s = t.y;
            }
        }
        var var_246 = {
            left: e,
            top: n,
            bottom: s,
            right: i
        };
        return var_246;
    };
    Et.prototype.draw = function (t) {
        t.ctx.beginPath();
        var e = -1, i = this.segments.length;;
        for (; ++e < i;) {
            var n = this.segments[e];
            var s = n.x !== n.handleIn.x || n.y !== n.handleIn.y || n.prev.x !== n.prev.handleOut.x || n.prev.y !== n.prev.handleOut.y;
            if (0 === n.index) {
                t.ctx.moveTo(n.x, n.y);
            } else {
                if (s) {
                    t.ctx.bezierCurveTo(n.prev.handleOut.x, n.prev.handleOut.y, n.handleIn.x, n.handleIn.y, n.x, n.y);
                    if ((n.next.x !== n.next.handleIn.x || n.next.y !== n.next.handleIn.y) && this._closed && this._tail === n) {
                        t.ctx.bezierCurveTo(n.handleOut.x, n.handleOut.y, n.next.handleIn.x, n.next.handleIn.y, n.next.x, n.next.y);
                    }
                } else {
                    t.ctx.lineTo(n.x, n.y);
                }
            }
        }
        if (this._closed) {
            t.ctx.closePath();
        }
        if (this.fill) {
            t.ctx.fillStyle = this.fillColor;
            t.ctx.fill();
        }
        if (this.stroke) {
            t.ctx.strokeStyle = this.strokeColor;
            t.ctx.lineWidth = this.strokeWidth / t.scale;
            t.ctx.stroke();
        }
        if (true === this.showPoints) {
            this.forEachPoint(arg_273);
            function arg_273(e) {
                e.fill = true;
                e.render(t);
            }
        }
    };
    Et.prototype.hitTest = function (t, e) {
        if (e === undefined) {
            e = {};
        }
        var i;
        var n = false;
        var s = 0;
        var o = false;
        var var_247 = e.segment === undefined || e.segment;
        e.segment = var_247;
        var var_248 = e.path === undefined || e.path;
        e.path = var_248;
        var r = -1;;
        for (; ++r < this.segments.length;) {
            i = this.segments[r];
            if (e.path && this._closed) {
                s += _t(t, i);
            }
            if (e.segment && i.hitTest(t)) {
                o = i;
            }
        }
        if (e.path && 0 !== s && false === o) {
            n = {
                type: 'path',
                geometry: this
            };
        } else {
            if (o) {
                n = {
                    type: 'segment',
                    geometry: o
                };
            }
        }
        return n;
    };
    Et.prototype.destroy = function () {
        var t = this.segments.length;;
        for (; --t > -1;) {
            this.segments.splice(t, 1);
        }
        this._head = null;
        this._tail = null;
        this.segments = [];
        return null;
    };
    var St = {
        __proto__: null,
        Path: Et,
        Segment: xt,
        Point: kt
    };
    Ot.prototype.hex2rgb = function (t) {
        var e = (t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
            var var_251 = e + e + i + i + n + n;
            return var_251;
        })).replace('#', '');
        var i = parseInt(e, 16);
        this.r = i >> 16;
        this.g = i >> 8 & 255;
        this.b = 255 & i;
        var var_250 = this;
        return var_250;
    };
    Ot.prototype.hsl2rgb = function (t, e, i) {
        if (0 === e) {
            var arg_279 = 255 * i;
            this.r = this.g = this.b = Math.round(arg_279);
            var var_253 = this;
            return var_253;
        }
        var n = null;
        if (i <= 0.5) {
            n = i * (1 + e);
        } else {
            n = i + e - i * e;
        }
        var s = 2 * i - n;
        var arg_275 = t + 1 / 3;
        var arg_274 = 255 * At(s, n, arg_275);
        this.r = Math.round(arg_274);
        var arg_276 = 255 * At(s, n, t);
        this.g = Math.round(arg_276);
        var arg_278 = t - 1 / 3;
        var arg_277 = 255 * At(s, n, arg_278);
        this.b = Math.round(arg_277);
        this.h = t;
        this.s = e;
        this.l = i;
        var var_252 = this;
        return var_252;
    };
    Ot.prototype.rgb2hsl = function (t, e, i) {
        t /= 255;
        e /= 255;
        i /= 255;
        var n = Math.max(t, e, i);
        var s = Math.min(t, e, i);
        var o = null;
        var r = null;
        var a = (n + s) / 2;
        if (n === s) {
            o = r = 0;
        } else {
            var l = n - s;
            switch (r = a > 0.5 ? l / (2 - n - s) : l / (n + s), n) {
            case t: {
                    o = (e - i) / l + (e < i ? 6 : 0);
                    break;
                }
            case e: {
                    o = (i - t) / l + 2;
                    break;
                }
            case i: {
                    o = (t - e) / l + 4;
                }
            }
            o /= 6;
        }
        this.h = o;
        this.s = r;
        this.l = a;
        var var_254 = this;
        return var_254;
    };
    Ot.prototype.getHex = function () {
        var var_255 = '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
        return var_255;
    };
    Ot.prototype.getRGBA = function () {
        var var_256 = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
        return var_256;
    };
    Ot.prototype.clone = function () {
        var t = new Ot();
        t.r = this.r;
        t.g = this.g;
        t.b = this.b;
        t.h = this.h;
        t.s = this.s;
        t.l = this.l;
        return t;
    };
    Ot.prototype.mix = function (t, e) {
        if (!(t instanceof Ot)) {
            t = new Ot(t);
        }
        var i = new Ot();
        var arg_280 = this.r + e * (t.r - this.r);
        i.r = Math.round(arg_280);
        var arg_281 = this.g + e * (t.g - this.g);
        i.g = Math.round(arg_281);
        var arg_282 = this.b + e * (t.b - this.b);
        i.b = Math.round(arg_282);
        i.rgb2hsl(i.r, i.g, i.b);
        return i;
    };
    Ot.prototype.blend = function (t, e) {
        var i;
        if (!(t instanceof Ot)) {
            t = new Ot(t);
        }
        var n = [], s = 0;;
        for (; s < e; s++) {
            var arg_283 = s / e;
            i = this.mix.call(this, t, arg_283);
            n.push(i);
        }
        return n;
    };
    Ot.prototype.lightness = function (t) {
        if (t > 1) {
            t /= 100;
        }
        this.hsl2rgb.call(this, this.h, this.s, t);
        var var_257 = this;
        return var_257;
    };
    Ot.prototype.saturation = function (t) {
        if (t > 1) {
            t /= 100;
        }
        this.hsl2rgb.call(this, this.h, t, this.l);
        var var_258 = this;
        return var_258;
    };
    Ot.prototype.hue = function (t) {
        this.hsl2rgb.call(this, t /= 360, this.s, this.l);
        var var_259 = this;
        return var_259;
    };
    var Lt = {
        _setup: false,
        _af: null,
        _fps: 60,
        _singleFrame: 1 / 60,
        _lagThreshold: 500,
        _adjustedLag: 1 / 60 * 2,
        _startTime: 0,
        _lastTime: 0,
        _nextTime: 1 / 60,
        _elapsed: 0,
        _difference: 0,
        _renders: [],
        _paused: false,
        _running: false,
        _tick: false,
        frame: 0,
        time: 0,
        requestFrame: null,
        cancelFrame: null,
        _init: function () {
            var t, e = window.requestAnimationFrame, i = window.cancelAnimationFrame, n = [
                    'ms',
                    'moz',
                    'webkit',
                    'o'
                ], s = n.length;;
            for (; --s > -1 && !e;) {
                e = window[n[s] + 'RequestAnimationFrame'];
                var var_260 = window[n[s] + 'CancelAnimationFrame'] || window[n[s] + 'CancelRequestAnimationFrame'];
                i = var_260;
            }
            if (e) {
                Lt.requestFrame = e.bind(window);
                Lt.cancelFrame = i.bind(window);
            } else {
                t = Date.now();
                Lt.requestFrame = function (e) {
                    var arg_285 = 1000 * Lt._singleFrame;
                    window.setTimeout(arg_284, arg_285);
                    function arg_284() {
                        var arg_286 = Date.now() - t;
                        e(arg_286);
                    }
                };
                Lt.cancelFrame = function (t) {
                    clearTimeout(t);
                    return null;
                };
            }
            Lt._setup = true;
            Lt._startTime = Lt._lastTime = Date.now();
        },
        add: function (t, e) {
            var arg_287 = {
                callback: t,
                paused: false == !e || false
            };
            Lt._renders.push(arg_287);
            if (false == !e) {
                Lt.start();
            }
        },
        remove: function (t) {
            var e = Lt._renders.length;;
            for (; --e > -1;) {
                if (Lt._renders[e].callback === t) {
                    Lt._renders[e].paused = true;
                    Lt._renders.splice(e, 1);
                }
            }
        },
        start: function (t) {
            if (false === Lt._setup) {
                Lt._init();
            }
            if (t) {
                var e = Lt._renders.length;;
                for (; --e > -1;) {
                    if (Lt._renders[e].callback === t) {
                        Lt._renders[e].paused = false;
                    }
                }
            }
            if (true !== Lt._running) {
                Lt._paused = false;
                Lt._running = true;
                Lt._af = Lt.requestFrame(Lt._update);
            }
        },
        stop: function (t) {
            if (t) {
                var e = Lt._renders.length;;
                for (; --e > -1;) {
                    if (Lt._renders[e].callback === t) {
                        Lt._renders[e].paused = true;
                    }
                }
            } else {
                if (false !== Lt._running) {
                    Lt._af = Lt.cancelFrame(Lt._af);
                    Lt._paused = true;
                    Lt._running = false;
                }
            }
        },
        elapsed: function () {
            var var_261 = Date.now() - Lt._startTime;
            return var_261;
        },
        fps: function (t) {
            var var_262 = null;
            if (arguments.length) {
                Lt._fps = t;
                Lt._singleFrame = 1 / (Lt._fps || 60);
                Lt._adjustedLag = 2 * Lt._singleFrame;
                Lt._nextTime = Lt.time + Lt._singleFrame;
                var_262 = Lt._fps;
            } else {
                var_262 = Lt._fps;
            }
            return var_262;
        },
        isRunning: function () {
            return Lt._running;
        },
        _update: function () {
            if (!Lt._paused && (Lt._elapsed = Date.now() - Lt._lastTime, Lt._tick = false, Lt._elapsed > Lt._lagThreshold && (Lt._startTime += Lt._elapsed - Lt._adjustedLag), Lt._lastTime += Lt._elapsed, Lt.time = (Lt._lastTime - Lt._startTime) / 1000, Lt._difference = Lt.time - Lt._nextTime, Lt._difference > 0 && (Lt.frame++, Lt._nextTime += Lt._difference + (Lt._difference >= Lt._singleFrame ? Lt._singleFrame / 4 : Lt._singleFrame - Lt._difference), Lt._tick = true), Lt._af = Lt.requestFrame(Lt._update), true === Lt._tick && Lt._renders.length > 0)) {
                var t = Lt._renders.length;;
                for (; --t > -1;) {
                    if (Lt._renders[t] && false === Lt._renders[t].paused) {
                        Lt._renders[t].callback(Lt.time);
                    }
                }
            }
        }
    };
    var $t = {
        array: function (t) {
            if (0 === t.length) {
                return t;
            }
            var e, i, n = t.length;;
            for (; --n > -1;) {
                var arg_288 = Math.random() * (n + 1);
                i = Math.floor(arg_288);
                e = t[n];
                t[n] = t[i];
                t[i] = e;
            }
            return t;
        }
    };
    var Tt = {
        getType: function (t) {
            var var_263 = null;
            if (t.toLowerCase().match(/\.(?:jpg|gif|png|jpeg|svg)$/g)) {
                var_263 = 'image';
            } else {
                if (t.toLowerCase().match(/\.(?:js)$/g)) {
                    var_263 = 'script';
                } else {
                    var_263 = 'file';
                }
            }
            return var_263;
        },
        getLocation: function (t) {
            if (A.assethost && t.indexOf(S.assetDomain) >= 0) {
                var var_264 = A.assethost + t.replace(S.assetDomain, '');
                return var_264;
            }
            if (A.imghost && t.indexOf('imgs') >= 0) {
                var e = null;
                if (t.indexOf('.ai') >= 0) {
                    e = t.indexOf('.ai') + 3;
                } else {
                    e = t.indexOf('.com') + 4;
                }
                var var_265 = A.imghost + t.substr(e, t.length);
                return var_265;
            }
            return t;
        }
    };
    Pt.prototype.load = function () {
        var t = this;
        var e = this.attribs;
        var i = this.src;
        var n = this.id;
        var var_269 = new Promise(arg_292);
        return var_269;
        function arg_292(s, o) {
            var r = new Image();
            t.element = r;
            if (e.crossOrigin) {
                r.crossOrigin = e.crossOrigin;
            }
            r.onerror = function (e) {
                t.error = true;
                r.onload = r.onerror = null;
                var i = (e && e.message ? e.message : 'Loading Error') + ': ' + n;
                Mt(t.cb, 'error', i);
                o(i);
            };
            r.onload = function () {
                if (!t.loaded) {
                    t.width = r.width;
                    t.height = r.height;
                    t.aspect = r.width / r.height;
                    t.loaded = true;
                    r.onload = r.onerror = null;
                    Mt(t.cb, 'load', t);
                    s(t);
                }
            };
            r.src = i;
            if (r.complete) {
                r.onload();
            }
        }
    };
    Pt.prototype.onload = function (t) {
        if (!this.error) {
            if (this.loaded) {
                t(this);
            } else {
                this.cb.load.push(t);
            }
        }
    };
    Pt.prototype.onerror = function (t) {
        if (!(this.loaded && !this.error)) {
            if (this.error) {
                t(this);
            } else {
                this.cb.error.push(t);
            }
        }
    };
    It.prototype.load = function () {
        var t = this;
        var e = this.attribs;
        var i = this.src;
        var n = this.id;
        var var_270 = new Promise(arg_293);
        return var_270;
        function arg_293(s, o) {
            var r = document.createElement('script');
            t.element = r;
            r.onerror = function (e) {
                t.error = true;
                r.onload = r.onreadystatechange = r.onerror = null;
                var i = (e.message || 'Loading Error') + ': ' + n;
                jt(t.cb, 'error', i);
                o(i);
            };
            r.onload = r.onreadystatechange = function () {
                if (!(this.loaded || r.readyState && 'loaded' !== r.readyState && 'complete' !== r.readyState)) {
                    t.loaded = true;
                    r.onload = r.onreadystatechange = r.onerror = null;
                    document.body.removeChild(r);
                    jt(t.cb, 'load', t);
                    s(t);
                }
            };
            r.type = 'text/javascript';
            r.src = i;
            if (e.crossOrigin) {
                r.crossorigin = e.crossOrigin;
            }
            if (e.async) {
                r.async = true;
            }
            if (e.defer) {
                r.defer = true;
            }
            document.body.appendChild(r);
            if (r.complete) {
                r.onload();
            }
        }
    };
    It.prototype.onload = function (t) {
        if (!this.error) {
            if (this.loaded) {
                t(this);
            } else {
                this.cb.load.push(t);
            }
        }
    };
    It.prototype.onerror = function (t) {
        if (!(this.loaded && !this.error)) {
            if (this.error) {
                t(this);
            } else {
                this.cb.error.push(t);
            }
        }
    };
    var Ft = {
        400: 'Rate limited or network error. Please retry.',
        429: 'Your computer or network has sent too many requests.',
        500: 'Cannot contact hCaptcha. Check your connection and try again.'
    };
    var zt = {
        getText: function (t) {
            try {
                var var_271 = J.translate(Ft[t]);
                return var_271;
            } catch (gn) {
                return false;
            }
        }
    };
    var Ht = 'undefined' != typeof XDomainRequest && 'withCredentials' in XMLHttpRequest.prototype == false;
    Vt.prototype.load = function () {
        var t = this;
        var e = this.src;
        var i = this.id;
        var var_281 = new Promise(arg_299);
        return var_281;
        function arg_299(n, s) {
            var o = {};
            if (e.indexOf('json') >= 0) {
                o.responseType = 'json';
            }
            Nt(e, o).then(arg_300)['catch'](arg_301);
            function arg_300(e) {
                t.loaded = true;
                t.data = e.body;
                Xt(t.cb, 'load', t);
                n(t);
            }
            function arg_301(e) {
                t.error = true;
                var n = (e && e.message ? e.message : 'Loading Error') + ': ' + i;
                Xt(t.cb, 'error', n);
                s(n);
            }
        }
    };
    Vt.prototype.onload = function (t) {
        if (!this.error) {
            if (this.loaded) {
                t(this);
            } else {
                this.cb.load.push(t);
            }
        }
    };
    Vt.prototype.onerror = function (t) {
        if (!(this.loaded && !this.error)) {
            if (this.error) {
                t(this);
            } else {
                this.cb.error.push(t);
            }
        }
    };
    var Jt = [];
    var Kt = {
        add: function (t, e) {
            var i = Tt.getType(t);
            var var_282 = null;
            if (Kt[i]) {
                var_282 = Kt[i](t, e);
            } else {
                var_282 = Promise.resolve(null);
            }
            return var_282;
        },
        batch: function (t, e) {
            var i = [], n = -1;;
            for (; ++n < t.length;) {
                var s = t[n];
                var arg_303 = Kt.add(s, e);
                i.push(arg_303);
            }
            var var_283 = Promise.all(i)['finally'](arg_302);
            return var_283;
            function arg_302() {
                i = [];
            }
        },
        image: function (t, e) {
            var i = new Pt(t, e);
            Jt.push(i);
            var var_284 = i.load();
            return var_284;
        },
        script: function (t, e) {
            var i = new It(t, e);
            Jt.push(i);
            var var_285 = i.load();
            return var_285;
        },
        file: function (t, e) {
            var i = new Vt(t, e);
            Jt.push(i);
            var var_286 = i.load();
            return var_286;
        },
        retrieve: function (t) {
            var var_287 = new Promise(arg_304);
            return var_287;
            function arg_304(e, i) {
                var n = Jt.length, s = false, o = null;;
                for (; --n > -1 && !s;) {
                    var var_288 = (o = Jt[n]).id.indexOf(t) >= 0 && o;
                    s = var_288;
                }
                if (!s) {
                    var var_289 = e(null);
                    return var_289;
                }
                o.onload(e);
                o.onerror(i);
            }
        }
    };
    var Yt = {
        decode: function (t) {
            try {
                var e = t.split('.');
                var var_290 = {
                    header: JSON.parse(atob(e[0])),
                    payload: JSON.parse(atob(e[1])),
                    signature: atob(e[2].replace(/_/g, '/').replace(/-/g, '+')),
                    raw: {
                        header: e[0],
                        payload: e[1],
                        signature: e[2]
                    }
                };
                return var_290;
            } catch (gn) {
                throw new Error('Token is invalid.');
            }
        },
        checkExpiration: function (t) {
            if (new Date(1000 * t) <= new Date(Date.now())) {
                throw new Error('Token is expired.');
            }
            return true;
        }
    };
    var Gt = {
        __proto__: null,
        Canvas: mt,
        Geometry: St,
        Render: Lt,
        Math: wt,
        Color: Ot,
        Shuffle: $t,
        Loader: Kt,
        JWT: Yt
    };
    var te = null;
    var ee = null;
    var ie = null;
    var ne = null;
    var se = {};
    var oe = null;
    var re = null;
    var ae = false;
    var le = {
        logAction: function (t) {
            oe = t;
        },
        getTaskData: function (t, e) {
            if (t === undefined) {
                t = {};
            }
            var i = {
                v: '89f9b6a',
                sitekey: S.sitekey,
                host: S.host,
                hl: J.getLocale()
            };
            if (null !== oe) {
                i.action = oe;
                oe = null;
            }
            if (null !== ne) {
                i.extraData = JSON.stringify(ne);
                ne = null;
            }
            if (t) {
                i.motionData = JSON.stringify(t);
            }
            if (null !== te) {
                ee = te;
                i.old_ekey = te;
            }
            if (null !== re) {
                i.rqdata = re;
                re = null;
            }
            if (e) {
                var var_293 = e.solved || null;
                i.n = var_293;
                i.c = e.spec ? JSON.stringify(e.spec) : null;
            }
            var var_292 = new Promise(arg_308);
            return var_292;
            function arg_308(t, e) {
                try {
                    var arg_309 = {
                        url: A.endpoint + '/getcaptcha?' + Qt({ s: i.sitekey }),
                        data: i,
                        dataType: 'query',
                        responseType: 'json',
                        withCredentials: true,
                        headers: {
                            Accept: 'application/json',
                            'Content-type': 'application/x-www-form-urlencoded'
                        }
                    };
                    Ut(arg_309).then(arg_310)['catch'](e);
                    function arg_310(e) {
                        var i = e.body || null;
                        if (!i) {
                            throw new Error('Missing response body.');
                        }
                        if (false !== i.success) {
                            le.setData(i);
                            t(i);
                        } else {
                            t(i);
                        }
                    }
                } catch (gn) {
                    e(gn);
                }
            }
        },
        loadBundle: function (t) {
            var var_294 = new Promise(arg_311);
            return var_294;
            function arg_311(e, i) {
                if (se[t.request_type]) {
                    e(se[t.request_type]);
                } else {
                    Kt.script(t.challenge_uri).then(arg_312)['catch'](arg_313);
                    function arg_312() {
                        se[t.request_type] = window[t.request_type];
                        e(se[t.request_type]);
                    }
                    function arg_313(t) {
                        var arg_314 = {
                            event: 'bundle-error',
                            message: 'Failed to get challenge bundle.',
                            reason: t
                        };
                        i(arg_314);
                    }
                }
            }
        },
        checkAnswers: function (t, e, i) {
            var n = {
                v: '89f9b6a',
                job_mode: ne.request_type,
                answers: t,
                serverdomain: S.host,
                sitekey: S.sitekey,
                motionData: JSON.stringify(e)
            };
            if (i) {
                n.n = i.solved;
                n.c = JSON.stringify(i.spec);
            }
            var var_295 = new Promise(arg_315);
            return var_295;
            function arg_315(t, e) {
                try {
                    var arg_316 = {
                        url: A.endpoint + '/checkcaptcha/' + ne.key + '?' + Qt({ s: n.sitekey }),
                        data: n,
                        dataType: 'json',
                        responseType: 'json',
                        withCredentials: true,
                        headers: { 'Content-type': 'application/json;charset=UTF-8' }
                    };
                    Ut(arg_316).then(arg_317)['catch'](e);
                    function arg_317(e) {
                        var i = e.body || null;
                        if (!i) {
                            throw new Error('Missing response body.');
                        }
                        if (false === i.success) {
                            var n = (i['error-codes'] || ['']).join(', ');
                            throw new Error(n);
                        }
                        t(i);
                    }
                } catch (gn) {
                    e(gn);
                }
            }
        },
        reportIssue: function (t, e, i) {
            var n = {
                taskdata: ne,
                on_url: S.url,
                report_category: t,
                sid: ie
            };
            if (e) {
                n.user_comments = e;
            }
            if (ee) {
                n.last_ekey = ee;
            }
            if (i && 'fallback' !== ne.request_type) {
                var s = ne.tasklist, o = null, r = -1;;
                for (; ++r < s.length && !o;) {
                    if (s[r].task_key === i) {
                        o = s[r];
                    }
                }
                n.taskdata.tasklist = [o];
            }
            var arg_318 = {
                url: A.reportapi + '/bug-report',
                data: n,
                dataType: 'json',
                responseType: 'json',
                withCredentials: true,
                headers: { 'Content-type': 'application/json;charset=UTF-8' }
            };
            var var_296 = Ut(arg_318);
            return var_296;
        },
        getEKey: function () {
            return te;
        },
        setData: function (t) {
            ne = t;
            te = t.key;
            ae = !!t.rq;
            if (!ie) {
                ie = te;
            }
        },
        setRqData: function (t) {
            re = t;
        },
        isRqChl: function () {
            return ae;
        },
        getData: function () {
            return ne;
        }
    };
    q.proto(he, N);
    he.prototype.load = function () {
        var t = this;
        var arg_326 = [
            'refresh-off.svg',
            'refresh-on.svg'
        ];
        var arg_327 = {
            prefix: 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static/images',
            fallback: 'png'
        };
        Kt.batch(arg_326, arg_327).then(arg_328)['catch'](arg_329);
        function arg_328(e) {
            t.image.off = e[0];
            t.image.on = e[1];
            t.style.call(t, t.state.mobile);
        }
        function arg_329() {
            j('refresh icon failed to load', 'image', 'info');
        }
    };
    he.prototype.style = function (t) {
        var arg_330 = {
            width: 25,
            height: 25,
            cursor: this.state.locked ? 'default' : 'pointer',
            display: this.state.visible ? 'inline-block' : 'none',
            border: 'none',
            backgroundColor: '#fff'
        };
        this.css(arg_330);
        if (null !== this.image.on) {
            var arg_333 = { cover: true };
            this.$on.backgroundImage(this.image.on, 25, 25, arg_333);
            var arg_334 = { cover: true };
            this.$off.backgroundImage(this.image.off, 25, 25, arg_334);
        }
        var arg_331 = {
            '-ms-high-contrast-adjust': 'none',
            position: 'absolute',
            top: 0,
            left: 0
        };
        this.$on.css(arg_331);
        var arg_332 = {
            '-ms-high-contrast-adjust': 'none',
            position: 'absolute',
            top: 0,
            left: 0
        };
        this.$off.css(arg_332);
        this.state.mobile = t;
        this.height = 25;
        this.width = 25;
    };
    he.prototype.onHover = function (t) {
        if (null !== this.emit && true !== this.state.locked) {
            this.emit('hover', t);
            if ('ie' === C.Browser.type && 8 === C.Browser.version) {
                var arg_335 = { display: 'over' === t.action ? 'block' : 'none' };
                this.$on.css(arg_335);
                var arg_336 = { display: 'over' === t.action ? 'none' : 'block' };
                this.$off.css(arg_336);
            } else {
                var arg_337 = { opacity: 'over' === t.action ? 1 : 0 };
                this.$on.css(arg_337);
                var arg_338 = { opacity: 'over' === t.action ? 0 : 1 };
                this.$off.css(arg_338);
            }
        }
    };
    he.prototype.onSelect = function (t) {
        if (null !== this.emit && true !== this.state.locked) {
            this.selected = !this.selected;
            this.emit('click', t);
        }
    };
    he.prototype.setLock = function (t) {
        this.state.locked = t;
        var arg_339 = { cursor: t ? 'default' : 'pointer' };
        this.css(arg_339);
    };
    he.prototype.setLabel = function () {
        var t = J.translate('Refresh Challenge.');
        this.setAttribute('title', t);
    };
    he.prototype.enable = function (t) {
        this.state.visible = t;
        var arg_340 = { display: t ? 'inline-block' : 'none' };
        this.css(arg_340);
        this.setLock.call(this, !t);
    };
    q.proto(ce, N);
    ce.prototype.style = function (t) {
        var e = null;
        if (t) {
            e = 30;
        } else {
            e = 35;
        }
        var arg_341 = {
            height: e,
            cursor: 'pointer',
            minWidth: t ? 50 : 70,
            padding: '0px 5px',
            borderRadius: 4,
            border: 'none'
        };
        this.css(arg_341);
        var arg_342 = {
            color: O.white,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            position: 'relative',
            pointerEvents: 'none',
            lineHeight: e,
            fontSize: 14,
            fontWeight: 700,
            zIndex: 5
        };
        this.copy.css(arg_342);
        this.height = e;
    };
    ce.prototype.action = function (t) {
        var e = 'Submit Answers';
        var i = t.charAt(0).toUpperCase() + t.slice(1);
        if ('check' === t || 'next' === t) {
            var arg_343 = { backgroundColor: O.hoverOff };
            this.css(arg_343);
            if ('next' === t) {
                e = 'Next Challenge';
            }
        } else {
            if ('report' === t) {
                var arg_344 = { backgroundColor: O.hoverOff };
                this.css(arg_344);
                e = 'Report Images';
            } else {
                var arg_345 = { backgroundColor: O.skipHoverOff };
                this.css(arg_345);
                e = 'Skip Challenge';
                t = 'skip';
            }
        }
        this.state.type = t;
        this.state.text = i;
        this.state.label = e;
        this.setCopy.call(this);
    };
    ce.prototype.onHover = function (t) {
        if (null !== this.emit && true !== this.state.locked) {
            var e = 'check' === this.state.type || 'next' === this.state.type;
            if ('over' === t.action) {
                var arg_346 = { backgroundColor: e ? O.hoverOn : '#5C5C5C' };
                this.css(arg_346);
            } else {
                var arg_347 = { backgroundColor: e ? O.hoverOff : '#737373' };
                this.css(arg_347);
            }
        }
    };
    ce.prototype.onSelect = function (t) {
        if (null !== this.emit && true !== this.state.locked) {
            this.emit('click', t);
        }
    };
    ce.prototype.setLock = function (t) {
        this.state.locked = t;
        var arg_348 = {
            cursor: t ? 'default' : 'pointer',
            backgroundColor: t ? '#e6e6e6' : O.hoverOff
        };
        this.css(arg_348);
    };
    ce.prototype.setCopy = function () {
        var t = J.translate(this.state.text);
        var e = J.translate(this.state.label);
        this.copy.text(t);
        this.setAttribute('title', e);
    };
    ce.prototype.getElement = function () {
        var var_297 = this && this.dom || null;
        return var_297;
    };
    q.proto(ue, N);
    ue.prototype.load = function () {
        var t = this;
        var arg_349 = [
            'info-off.svg',
            'info-on.svg'
        ];
        var arg_350 = {
            prefix: 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static/images',
            fallback: 'png'
        };
        Kt.batch(arg_349, arg_350).then(arg_351)['catch'](arg_352);
        function arg_351(e) {
            t.image.off = e[0];
            t.image.on = e[1];
            t.style.call(t, t.mobile);
        }
        function arg_352() {
            j('info icon failed to load', 'image', 'info');
        }
    };
    ue.prototype.style = function (t) {
        var arg_353 = {
            width: 25,
            height: 25,
            cursor: 'pointer',
            display: 'inline-block',
            border: 'none',
            backgroundColor: '#fff'
        };
        this.css(arg_353);
        if (null !== this.image.on) {
            var arg_356 = { cover: true };
            this.$on.backgroundImage(this.image.on, 25, 25, arg_356);
            var arg_357 = { cover: true };
            this.$off.backgroundImage(this.image.off, 25, 25, arg_357);
        }
        var arg_354 = {
            '-ms-high-contrast-adjust': 'none',
            position: 'absolute',
            top: 0,
            left: 0
        };
        this.$on.css(arg_354);
        var arg_355 = {
            '-ms-high-contrast-adjust': 'none',
            position: 'absolute',
            top: 0,
            left: 0
        };
        this.$off.css(arg_355);
        this.mobile = t;
        this.height = 25;
        this.width = 25;
    };
    ue.prototype.onHover = function (t) {
        if (!(null === this.emit || true === this.locked || this.selected)) {
            this.emit('hover', t);
            if ('ie' === C.Browser.type && 8 === C.Browser.version) {
                var arg_358 = { display: 'over' === t.action ? 'block' : 'none' };
                this.$on.css(arg_358);
                var arg_359 = { display: 'over' === t.action ? 'none' : 'block' };
                this.$off.css(arg_359);
            } else {
                var arg_360 = { opacity: 'over' === t.action ? 1 : 0 };
                this.$on.css(arg_360);
                var arg_361 = { opacity: 'over' === t.action ? 0 : 1 };
                this.$off.css(arg_361);
            }
        }
    };
    ue.prototype.onSelect = function (t) {
        if (null !== this.emit && true !== this.locked) {
            this.selected = !this.selected;
            this.setAttribute('aria-expanded', this.selected);
            this.setAttribute('tabindex', '-1');
            this.emit('click', this.selected);
            if ('ie' === C.Browser.type && 8 === C.Browser.version) {
                var arg_362 = { display: this.selected ? 'block' : 'none' };
                this.$on.css(arg_362);
                var arg_363 = { display: this.selected ? 'none' : 'block' };
                this.$off.css(arg_363);
            } else {
                var arg_364 = { opacity: this.selected ? 1 : 0 };
                this.$on.css(arg_364);
                var arg_365 = { opacity: this.selected ? 0 : 1 };
                this.$off.css(arg_365);
            }
        }
    };
    ue.prototype.reset = function (t) {
        this.selected = false;
        this.setAttribute('aria-expanded', false);
        this.setAttribute('tabindex', '0');
        if ('ie' === C.Browser.type && 8 === C.Browser.version) {
            var arg_366 = { display: 'none' };
            this.$on.css(arg_366);
            var arg_367 = { display: 'block' };
            this.$off.css(arg_367);
        } else {
            var arg_368 = { opacity: 0 };
            this.$on.css(arg_368);
            var arg_369 = { opacity: 1 };
            this.$off.css(arg_369);
        }
    };
    ue.prototype.setLabel = function (t) {
        var e = J.translate('Get information about hCaptcha and accessibility options.');
        this.setAttribute('title', e);
    };
    ue.prototype.setLock = function (t) {
        this.locked = t;
    };
    pe.prototype.setID = function (t) {
        this.id = t;
    };
    pe.prototype.contact = function (t, e) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var i = this;
        var n = Date.now().toString(36);
        var s = {
            source: 'hcaptcha',
            label: t,
            id: this.id,
            promise: 'create',
            lookup: n
        };
        if (e) {
            if ('object' != typeof e) {
                throw new Error('Message must be an object.');
            }
            s.contents = e;
        }
        var var_298 = new Promise(arg_370);
        return var_298;
        function arg_370(e, o) {
            var arg_371 = {
                label: t,
                reject: o,
                resolve: e,
                lookup: n
            };
            i.waiting.push(arg_371);
            de(i.target, s);
        }
    };
    pe.prototype.listen = function (t, e) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var i = this.messages.length, n = false;;
        for (; --i > -1 && false === n;) {
            if (this.messages[i].label === t) {
                n = this.messages[i];
            }
        }
        if (false === n) {
            n = {
                label: t,
                listeners: []
            };
            this.messages.push(n);
        }
        n.listeners.push(e);
    };
    pe.prototype.answer = function (t, e) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var i = this.incoming.length, n = false;;
        for (; --i > -1 && false === n;) {
            if (this.incoming[i].label === t) {
                n = this.incoming[i];
            }
        }
        if (false === n) {
            n = {
                label: t,
                listeners: []
            };
            this.incoming.push(n);
        }
        n.listeners.push(e);
    };
    pe.prototype.send = function (t, e) {
        if (!this.id) {
            throw new Error('Chat requires unique id to communicate between windows');
        }
        var i = {
            source: 'hcaptcha',
            label: t,
            id: this.id
        };
        if (e) {
            if ('object' != typeof e) {
                throw new Error('Message must be an object.');
            }
            i.contents = e;
        }
        de(this.target, i);
    };
    pe.prototype.check = function (t, e) {
        var i = [].concat.apply([], [
                this.messages,
                this.incoming,
                this.waiting
            ]), n = [], s = -1;;
        for (; ++s < i.length;) {
            if (i[s].label === t) {
                if (e && i[s].lookup && e !== i[s].lookup) {
                    continue;
                }
                n.push(i[s]);
            }
        }
        return n;
    };
    pe.prototype.respond = function (t) {
        var e, i, n = -1, s = 0, o = [].concat.apply([], [
                this.messages,
                this.incoming,
                this.waiting
            ]);;
        for (; ++n < o.length;) {
            if (o[n].label === t.label) {
                if (t.lookup && o[n].lookup && t.lookup !== o[n].lookup) {
                    continue;
                }
                var r = [];
                e = o[n];
                if (t.error) {
                    r.push(t.error);
                }
                if (t.contents) {
                    r.push(t.contents);
                }
                if (t.promise && 'create' !== t.promise) {
                    e[t.promise].apply(e[t.promise], r);
                    var a = this.waiting.length, l = false;;
                    for (; --a > -1 && false === l;) {
                        if (this.waiting[a].label === e.label && this.waiting[a].lookup === e.lookup) {
                            l = true;
                            this.waiting.splice(a, 1);
                        }
                    }
                    continue;
                }
                s = 0;
                for (; s < e.listeners.length; s++) {
                    i = e.listeners[s];
                    if ('create' === t.promise) {
                        var h = fe.call(this, e.label, t.lookup);
                        r.push(h);
                    }
                    i.apply(i, r);
                }
            }
        }
        o = null;
    };
    pe.prototype.destroy = function () {
        this.messages = null;
        this.incoming = null;
        this.waiting = null;
        return null;
    };
    var me = {
        chats: [],
        isSupported: function () {
            var var_299 = !!window.postMessage;
            return var_299;
        },
        createChat: function (t, e) {
            var i = new pe(t, e);
            me.chats.push(i);
            return i;
        },
        addChat: function (t) {
            me.chats.push(t);
        },
        removeChat: function (t) {
            var e = false, i = me.chats.length;;
            for (; --i > -1 && false === e;) {
                if (t.id === me.chats[i].id && t.target === me.chats[i].target) {
                    e = me.chats[i];
                    me.chats.splice(i, 1);
                }
            }
            return e;
        },
        handle: function (t) {
            var e = t.data;
            if ('string' == typeof e) {
                try {
                    if (!(e.indexOf('hcaptcha') >= 0)) {
                        return;
                    }
                    e = JSON.parse(e);
                    var i, n = me.chats, s = -1;;
                    for (; ++s < n.length;) {
                        if ((i = n[s]).id === e.id) {
                            i.respond(e);
                        }
                    }
                } catch (yn) {
                    var arg_372 = {
                        event: t,
                        error: yn
                    };
                    j('postMessage handler error', 'postMessage', 'debug', arg_372);
                }
            }
        }
    };
    if (window.addEventListener) {
        window.addEventListener('message', me.handle);
    } else {
        window.attachEvent('onmessage', me.handle);
    }
    var arg_1 = window.parent;
    var ye = new pe(arg_1);
    ye.init = function (t) {
        ye.setID(t);
        me.addChat(ye);
    };
    q.proto(ge, N);
    ge.prototype.style = function () {
        var arg_376 = {
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: 50,
            opacity: 0
        };
        this.css(arg_376);
        var t = this._nodes, e = t.length, i = 0;;
        for (; i < e; i++) {
            var arg_377 = { width: 150 };
            t[i].css(arg_377);
        }
    };
    ge.prototype.setLocale = function (t) {
        var e = this._nodes, i = e.length, n = 0;;
        for (; n < i; n++) {
            if (t === e[n].dom.value) {
                e[n].setAttribute('selected', 'selected');
            } else {
                e[n].removeAttribute('selected');
            }
        }
    };
    ge.prototype.setLabel = function (t) {
        this.setAttribute('aria-roledescription', t);
    };
    var ve = 37;
    var be = 39;
    var we = 38;
    var ke = 40;
    if (!('onwheel' in document)) {
        document;
    }
    document;
    var xe = 'ontouchstart' in document;
    var Ee = navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
    var _e = !!window.navigator.msPointerEnabled;
    var Ce = 'onkeydown' in document;
    q.proto(Se, T);
    Se.prototype.init = function () {
        var t = this.config.element || document.body;
        if (!(t instanceof W)) {
            t = new W(t);
        }
        this.element = t;
        this.addListeners.call(this);
    };
    Se.prototype.pause = function (t) {
        this.state.pause = t;
    };
    Se.prototype.update = function (t) {
        if (!this.state.pause) {
            var e = this.state.position;
            var i = this.state.delta;
            var n = this.state.action;
            e.x += i.x;
            e.y += i.y;
            if (this.clamp.enabled) {
                e.x = yt(e.x, this.clamp.min.x, this.clamp.max.x);
                e.y = yt(e.y, this.clamp.min.y, this.clamp.max.y);
            }
            var arg_390 = {
                x: e.x,
                y: e.y,
                delta: i,
                action: n,
                original: t
            };
            this.emit('update', arg_390);
        }
    };
    Se.prototype.addListeners = function () {
        var t = this.element;
        var e = { passive: false };
        if ('ie' !== C.Browser.type || 'ie' === C.Browser.type && 8 !== C.Browser.version) {
            t.addEventListener('DOMMouseScroll', this.onWheel);
            t.addEventListener('wheel', this.onWheel, e);
        }
        t.addEventListener('mousewheel', this.onWheel, e);
        if (xe) {
            t.addEventListener('touchstart', this.onTouch);
            t.addEventListener('touchmove', this.onTouch);
        }
        if (_e && Ee) {
            this.msBodyTouch = document.body.style.msTouchAction;
            document.body.style.msTouchAction = 'none';
            t.addEventListener('MSPointerDown', this.onTouch, true);
            t.addEventListener('MSPointerMove', this.onTouch, true);
        }
        if (Ce) {
            t.addEventListener('keydown', this.onKey);
        }
    };
    Se.prototype.removeListeners = function () {
        var t = this.element;
        var e = { passive: false };
        if ('ie' === !C.Browser.type || 'ie' === C.Browser.type && 8 !== C.Browser.version) {
            t.removeEventListener('DOMMouseScroll', this.onWheel);
            t.removeEventListener('wheel', this.onWheel, e);
        }
        t.removeEventListener('mousewheel', this.onWheel, e);
        if (xe) {
            t.removeEventListener('touchstart', this.onTouch);
            t.removeEventListener('touchmove', this.onTouch);
        }
        if (_e && Ee) {
            document.body.style.msTouchAction = this.msBodyTouch;
            t.removeEventListener('MSPointerDown', this.onTouch, true);
            t.removeEventListener('MSPointerMove', this.onTouch, true);
        }
        if (Ce) {
            t.removeEventListener('keydown', this.onKey);
        }
    };
    Se.prototype.onWheel = function (t) {
        if (!this.state.pause) {
            if ((t = window.event || t).preventDefault) {
                t.preventDefault();
            }
            var e = this.state.delta;
            var i = this.config.mouseMult;
            var n = this.config.firefoxMult;
            if ('detail' in t && 'wheel' !== t.type && 0 !== t.detail) {
                e.y = -1 * t.detail;
                e.y *= n;
            } else {
                if ('wheelDelta' in t && !('wheelDeltaY' in t)) {
                    e.y = -1 * t.wheelDelta;
                } else {
                    e.x = -1 * (t.deltaX || t.wheelDeltaX);
                    e.y = -1 * (t.deltaY || t.wheelDeltaY);
                    if ('firefox' === C.Browser.type && 1 === t.deltaMode && n) {
                        e.x *= n;
                        e.y *= n;
                    }
                }
            }
            if (i) {
                e.x *= i;
                e.y *= i;
            }
            this.state.action = 'wheel';
            this.update.call(this, t);
        }
    };
    Se.prototype.onTouch = function (t) {
        if (!this.state.pause) {
            var e = this.state.position;
            var i = this.state.delta;
            var n = this.config.touchMult;
            var s = t.targetTouches[0];
            if ('move' === t.action) {
                i.x = (s.pageX - e.x) * n;
                i.y = (s.pageY - e.y) * n;
            } else {
                i.x = 0;
                i.y = 0;
            }
            this.state.action = 'touch';
            this.update.call(this, t);
        }
    };
    Se.prototype.onKey = function (t) {
        if (!this.state.pause && !t.metaKey) {
            var e = this.state.delta;
            var i = this.config.keyStep;
            switch (t.keyCode) {
            case ke: {
                    if (t.preventDefault) {
                        t.preventDefault();
                    }
                    e.x = 0;
                    e.y = -i;
                    break;
                }
            case we: {
                    if (t.preventDefault) {
                        t.preventDefault();
                    }
                    e.x = 0;
                    e.y = i;
                    break;
                }
            case ve: {
                    e.x = -i;
                    e.y = 0;
                    break;
                }
            case be: {
                    e.x = i;
                    e.y = 0;
                    break;
                }
            default: {
                    e.x = 0;
                    var var_303 = e.y = 0;
                    var var_302 = void var_303;
                    return var_302;
                }
            }
            this.state.action = 'keypress';
            this.update.call(this, t);
        }
    };
    Se.prototype.clampX = function (t, e, i) {
        this.clamp.enabled = t;
        var var_304 = e || 0;
        this.clamp.min.x = var_304;
        var var_305 = i || 0;
        this.clamp.max.x = var_305;
    };
    Se.prototype.clampY = function (t, e, i) {
        this.clamp.enabled = t;
        var var_306 = e || 0;
        this.clamp.min.y = var_306;
        var var_307 = i || 0;
        this.clamp.max.y = var_307;
    };
    Se.prototype.reset = function () {
        this.state.position = {
            x: 0,
            y: 0
        };
        this.state.delta = {
            x: 0,
            y: 0
        };
    };
    Se.prototype.setPosX = function (t) {
        this.setPos.call(this, t, this.state.position.y);
    };
    Se.prototype.setPosY = function (t) {
        this.setPos.call(this, this.state.position.x, t);
    };
    Se.prototype.setPos = function (t, e) {
        if (this.clamp.enabled) {
            t = yt(t, this.clamp.min.x, this.clamp.max.x);
            e = yt(e, this.clamp.min.y, this.clamp.max.y);
        }
        this.state.position = {
            x: t,
            y: e
        };
        this.state.delta = {
            x: 0,
            y: 0
        };
        var arg_391 = {
            x: t,
            y: e,
            delta: this.state.delta,
            action: null
        };
        this.emit('update', arg_391);
    };
    q.proto(Oe, N);
    Oe.prototype.getKey = function () {
        return this.state.key;
    };
    Oe.prototype.getValue = function () {
        return this.state.value;
    };
    Oe.prototype.getIndex = function () {
        return this.state.index;
    };
    Oe.prototype.getId = function () {
        return this.state.id;
    };
    Oe.prototype.style = function (t, e) {
        var arg_392 = {
            width: t,
            height: e
        };
        this.css(arg_392);
        var arg_393 = {
            width: t,
            height: e,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 500,
            color: '#555555',
            verticalAlign: 'middle',
            display: 'table-cell'
        };
        this.$text.css(arg_393);
    };
    Oe.prototype.onHover = function (t) {
        this.emit('hover', this.state.index);
    };
    Oe.prototype.onSelect = function () {
        this.emit('select', this.state.key);
    };
    Oe.prototype.select = function (t) {
        this.state.selected = t;
        this.setAttribute('aria-selected', t);
        var arg_394 = { backgroundColor: t ? '#e0e0e0' : '#fff' };
        this.css(arg_394);
    };
    Oe.prototype.highlight = function (t) {
        this.setAttribute('aria-selected', t);
        var arg_395 = { backgroundColor: t ? '#f1f1f1' : '#fff' };
        this.css(arg_395);
    };
    Oe.prototype.isSelected = function () {
        return this.state.selected;
    };
    q.proto(Ae, N);
    Ae.prototype.style = function (t) {
        var e = this.children;
        this.listHeight = 35 * e.length;
        var arg_396 = {
            willChange: 'transform',
            width: t,
            height: this.listHeight,
            position: 'absolute',
            top: 0,
            left: 0
        };
        this.css(arg_396);
        var i = 0;;
        for (; i < e.length; i++) {
            e[i].style(t, 35);
            var arg_397 = {
                top: 35 * i,
                position: 'absolute'
            };
            e[i].css(arg_397);
        }
    };
    Ae.prototype.update = function (t) {
        if ('ie' === C.Browser.type && 8 === C.Browser.version) {
            var arg_398 = { top: t };
            this.css(arg_398);
        } else {
            var arg_399 = { transform: 'translateY(' + t + 'px)' };
            this.css(arg_399);
        }
    };
    Ae.prototype.display = function (t) {
        this.setAttribute('aria-expanded', t);
        if (t) {
            this.focus();
        } else {
            this.blur();
        }
    };
    Ae.prototype.setOption = function (t) {
        if (t) {
            var e = this.children, i = -1, n = e.length;;
            for (; ++i < n;) {
                if (e[i] === t) {
                    e[i].select(true);
                } else {
                    e[i].select(false);
                }
            }
            var arg_400 = t.getId();
            this.setAttribute('aria-activedescendant', arg_400);
            this.state.selected = this.state.current = t;
        }
    };
    Ae.prototype.findByKey = function (t) {
        try {
            var e = this.children, i = null, n = -1, s = e.length;;
            for (; ++n < s && !i;) {
                if (e[n].getKey() === t) {
                    i = e[n];
                }
            }
            return i;
        } catch (gn) {
            return null;
        }
    };
    Ae.prototype.findByValue = function (t) {
        try {
            t = t.toLowerCase();
            var e = this.children, i = null, n = -1, s = e.length;;
            for (; ++n < s;) {
                if (0 === e[n].getValue().toLowerCase().indexOf(t)) {
                    i = e[n];
                }
            }
            return i;
        } catch (gn) {
            return null;
        }
    };
    Ae.prototype.highlight = function (t) {
        var e = this.children[t];
        if (e) {
            var i = this.children, n = -1, s = i.length;;
            for (; ++n < s;) {
                if (!i[n].isSelected()) {
                    if (i[n].getIndex() === t) {
                        i[n].highlight(true);
                    } else {
                        i[n].highlight(false);
                    }
                }
            }
            this.state.current = e;
        }
    };
    Ae.prototype.getCurrent = function () {
        return this.state.current;
    };
    q.proto(Le, N);
    Le.prototype.style = function (t) {
        var arg_401 = {
            willChange: 'transform',
            width: 3,
            height: t,
            borderRadius: 2,
            backgroundColor: '#737373'
        };
        this.css(arg_401);
    };
    Le.prototype.update = function (t) {
        if ('ie' === C.Browser.type && 8 === C.Browser.version) {
            var arg_402 = { top: t };
            this.css(arg_402);
        } else {
            var arg_403 = { transform: 'translateY(' + t + 'px)' };
            this.css(arg_403);
        }
    };
    q.proto($e, N);
    $e.prototype.style = function () {
        var arg_404 = {
            width: 148,
            height: 198,
            overflow: 'hidden',
            zIndex: 100,
            position: 'absolute',
            borderRadius: 4,
            border: '1px solid #d7d7d7',
            bottom: 20,
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 2px'
        };
        this.css(arg_404);
        this.handle.style(20);
        var arg_405 = {
            position: 'absolute',
            top: 2,
            right: 1,
            zIndex: 10
        };
        this.handle.css(arg_405);
        this.options.style(150);
        this.listHeight = this.options.children.length * this.state.itemHeight;
        this.viewHeight = 200;
    };
    $e.prototype.getOption = function (t) {
        if (t) {
            var var_308 = this.options.findByKey(t);
            return var_308;
        }
    };
    $e.prototype.highlightOption = function (t) {
        if (t) {
            var e = t.getIndex();
            this.options.highlight(e);
            this.state.hover = e;
        }
    };
    $e.prototype.setSelected = function (t) {
        if (t) {
            this.state.hover = t.getIndex();
            this.options.setOption(t);
        }
    };
    $e.prototype.getSelected = function () {
        var var_309 = this.options.getCurrent();
        return var_309;
    };
    $e.prototype.getOptionPos = function (t) {
        if (t) {
            var var_310 = t.getIndex() * this.state.itemHeight;
            return var_310;
        }
    };
    $e.prototype.lookupOption = function (t) {
        if (t) {
            var var_311 = this.options.findByValue(t);
            return var_311;
        }
    };
    $e.prototype.getScrollHeight = function () {
        var var_312 = this.listHeight - this.viewHeight;
        return var_312;
    };
    $e.prototype.display = function (t) {
        var arg_406 = { display: t ? 'block' : 'none' };
        this.css(arg_406);
        this.options.display(t);
    };
    $e.prototype.update = function (t) {
        var e = -(this.listHeight - this.viewHeight);
        var i = (gt(t.y, 0, e, 0, 1) || 0) * (this.viewHeight - 20 - 6);
        this.handle.update(i);
        this.options.update(t.y);
        if ('keypress' === t.action && 0 !== t.delta.y) {
            var n = this.state.hover + (t.delta.y > 0 ? -1 : 1);
            if (n >= 0 && n < this.options.children.length) {
                this.state.hover = n;
                this.options.highlight(n);
            }
        }
    };
    q.proto(Te, N);
    Te.prototype.setup = function () {
        this.scroll.init();
    };
    Te.prototype.style = function () {
        var t = null;
        if ('ie' === C.Browser.type && C.Browser.version <= 9) {
            t = 'rgba(0,0,0,0)';
        } else {
            t = 'transparent';
        }
        var arg_407 = {
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: 100,
            backgroundColor: t
        };
        this.css(arg_407);
        var arg_408 = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 50,
            backgroundColor: t
        };
        this.$close.css(arg_408);
        this.view.style();
        var e = this.view.getScrollHeight();
        this.scroll.clampY(true, -e, 0);
    };
    Te.prototype.setLocale = function (t) {
        var e = this.view.getOption(t);
        if (e) {
            var i = this.view.getOptionPos(e);
            this.view.setSelected(e);
            this.scroll.setPosY(-i);
        }
    };
    Te.prototype.onOpen = function (t) {
        if (!this.state.visible) {
            this.$close.addEventListener('click', this.onClose);
            this.removeEventListener('click', this.onOpen);
            this.setAttribute('aria-expanded', true);
            var e = this.view.getSelected();
            if (e) {
                var i = this.view.getOptionPos(e);
                this.scroll.setPosY(-i);
            } else {
                this.scroll.setPosY(0);
            }
            this.emit('open');
            this.scroll.pause(false);
            this.view.display(true);
            var arg_409 = { display: 'block' };
            this.$close.css(arg_409);
            this.state.visible = true;
        }
    };
    Te.prototype.onClose = function (t) {
        if (t.stopPropagation) {
            t.stopPropagation();
        }
        if (t.preventDefault) {
            t.preventDefault();
        }
        this.close();
    };
    Te.prototype.onKeyPress = function (t) {
        var e = this;
        var i = [
            13,
            32
        ];
        if (!this.state.visible && [
                38,
                40
            ].concat(i).indexOf(t.keyCode) >= 0) {
            this.onOpen();
        } else {
            if (i.indexOf(t.keyCode) >= 0) {
                var n = this.view.getSelected();
                var arg_411 = n.getKey();
                this.emit('select', arg_411);
                var var_313 = void this.close();
                return var_313;
            }
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(arg_410, 500);
            this.state.search += String.fromCharCode(t.keyCode);
            var s = this.view.lookupOption(this.state.search);
            if (s) {
                var o = this.view.getOptionPos(s);
                this.view.highlightOption(s);
                this.scroll.setPosY(-o);
            }
            function arg_410() {
                e.state.search = '';
            }
        }
    };
    Te.prototype.close = function () {
        var t = this;
        this.view.display(false);
        this.setAttribute('aria-expanded', false);
        this.setAttribute('tabindex', 0);
        var arg_412 = { display: 'none' };
        this.$close.css(arg_412);
        this.scroll.pause(true);
        this.state.visible = false;
        this.$close.removeEventListener('click', this.onClose);
        setTimeout(arg_413, 1);
        function arg_413() {
            if (t.addEventListener) {
                t.addEventListener('click', t.onOpen);
            }
        }
    };
    Te.prototype.isVisible = function () {
        return this.state.visible;
    };
    Te.prototype.setLabel = function (t) {
        var e = this.view.getSelected();
        var i = '';
        if (e) {
            i = e.getValue();
        }
        var arg_414 = t + ' ' + i;
        this.setAttribute('aria-roledescription', arg_414);
    };
    q.proto(Pe, N);
    Pe.prototype.style = function () {
        var arg_415 = {
            width: 26,
            height: 16,
            position: 'absolute',
            cursor: 'pointer',
            zIndex: -1
        };
        this.css(arg_415);
        var arg_416 = {
            width: 26,
            textAlign: 'center',
            fontSize: 11,
            color: '#555555',
            fontWeight: 600,
            position: 'absolute'
        };
        this.$text.css(arg_416);
        var arg_417 = {
            backgroundColor: '#00838f',
            width: 20,
            height: 1,
            position: 'absolute',
            left: 3,
            bottom: 0
        };
        this.$underline.css(arg_417);
        var var_314 = {
            width: 26,
            height: 16
        };
        return var_314;
    };
    Pe.prototype.setLocale = function (t) {
        var e = J.getShortLocale(t);
        var arg_418 = e.toUpperCase();
        this.$text.text(arg_418);
    };
    Pe.prototype.focus = function (t) {
        var arg_419 = { outline: t ? '1px #0074BF solid' : 'none' };
        this.css(arg_419);
    };
    q.proto(Me, N);
    Me.prototype.style = function (t) {
        var e = this.display.style();
        var arg_420 = {
            width: e.width,
            height: e.height,
            position: 'relative',
            top: t ? 5 : 10,
            left: 0,
            zIndex: 100
        };
        this.css(arg_420);
        this.list.style(e.width, e.height);
    };
    Me.prototype.setup = function () {
        if (this.list.setup) {
            this.list.setup();
        }
    };
    Me.prototype.focus = function () {
        this.list.focus();
    };
    Me.prototype.close = function () {
        if (this.list.close) {
            this.list.close();
        }
    };
    Me.prototype.isOpen = function () {
        var var_315 = this.list.isVisible && this.list.isVisible();
        return var_315;
    };
    Me.prototype.setLabel = function () {
        var t = J.translate('Select a language');
        this.list.setLabel(t);
    };
    Me.prototype.updateLocale = function () {
        var t = J.getLocale();
        this.display.setLocale(t);
        this.list.setLocale(t);
    };
    Me.prototype.enable = function (t) {
        var arg_421 = { display: t ? 'block' : 'none ' };
        this.css(arg_421);
    };
    Me.prototype.setLock = function (t) {
        this.state.locked = t;
        if (t) {
            this.list.setAttribute('disabled', t);
        } else {
            this.list.removeAttribute('disabled');
        }
    };
    q.proto(Ie, N);
    Ie.prototype.load = function () {
        var t = this;
        var e = null;
        if (this.charity) {
            e = 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static/images/icon-charity.svg';
        } else {
            e = 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static/images/icon.svg';
        }
        var arg_422 = { fallback: 'png' };
        Kt.image(e, arg_422).then(arg_423)['catch'](arg_424);
        function arg_423(e) {
            t.image = e;
            t.style.call(t, t.mobile);
        }
        function arg_424() {
            j('info icon failed to load', 'image', 'info');
        }
    };
    Ie.prototype.style = function (t) {
        var arg_425 = {
            width: 32,
            height: 32,
            position: 'absolute',
            top: 0,
            left: 0
        };
        this.css(arg_425);
        var arg_426 = {
            '-ms-high-contrast-adjust': 'none',
            width: 32,
            height: 32,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 5
        };
        this.color.css(arg_426);
        if (null !== this.image) {
            var arg_427 = {
                cover: true,
                center: true
            };
            this.color.backgroundImage(this.image, 32, 32, arg_427);
        }
        var var_316 = {
            width: 32,
            height: 32
        };
        return var_316;
    };
    Ie.prototype.hover = function (t) {
        if (!('ie' !== C.Browser.type)) {
            C.Browser.version;
        }
    };
    q.proto(je, N);
    je.prototype.load = function () {
        this.icon.load();
    };
    je.prototype.style = function (t) {
        if (t !== undefined) {
            this.mobile = t;
        }
        var e = this.icon.style(this.mobile);
        var arg_428 = {
            width: e.width,
            height: e.height,
            left: '50%',
            marginLeft: -e.width / 2,
            cursor: 'pointer',
            position: 'absolute'
        };
        this.css(arg_428);
        this.height = e.height;
    };
    je.prototype.onClick = function (t) {
        if (null !== this.fireEvent) {
            var e = this.link + '?site=' + S.host + '&key=' + S.sitekey + '&r=a1';
            window.open(e);
        }
    };
    q.proto(Re, N);
    Re.prototype.style = function (t) {
        var arg_429 = {
            fontSize: t,
            color: O.error,
            width: '100%',
            textAlign: 'right'
        };
        this.css(arg_429);
    };
    Re.prototype.display = function (t) {
        var arg_430 = { opacity: t ? 1 : 0 };
        this.css(arg_430);
        this.visible = t;
        this.setAttribute('aria-hidden', !t);
    };
    Re.prototype.setCopy = function () {
        var t = J.translate('Please try again.');
        this.copy.text(t);
    };
    q.proto(Be, N);
    Be.prototype.style = function (t) {
        var arg_431 = {
            width: t,
            height: t,
            overflow: 'hidden',
            borderRadius: '50%'
        };
        this.css(arg_431);
        var arg_432 = {
            width: t,
            height: t
        };
        this.$bg.css(arg_432);
    };
    Be.prototype.active = function (t) {
        var arg_433 = { backgroundColor: t ? '#00838f' : '#d5d5d5' };
        this.$bg.css(arg_433);
    };
    Be.prototype.hide = function () {
        var arg_434 = { opacity: 0 };
        this.css(arg_434);
    };
    q.proto(De, N);
    De.prototype.createCrumbs = function (t) {
        this.display = true;
        var e = null, i = 0;;
        for (; i < t; i++) {
            e = this.initComponent(Be, null, this.$wrapper);
            this.crumbs.push(e);
        }
    };
    De.prototype.removeCrumbs = function () {
        this.display = false;
        if (0 !== this.crumbs.length) {
            var t = -1;;
            for (; ++t < this.crumbs.length;) {
                this.crumbs[t].destroy();
            }
            this.crumbs = [];
        }
    };
    De.prototype.style = function (t, e) {
        var i = e ? 6 : 7, n = e ? 4 : 5, s = -1;;
        for (; ++s < this.crumbs.length;) {
            this.crumbs[s].style(i);
            var arg_437 = {
                left: s * i + s * n,
                top: 0,
                position: 'absolute'
            };
            this.crumbs[s].css(arg_437);
        }
        var arg_435 = {
            width: t,
            height: i
        };
        this.css(arg_435);
        var o = this.crumbs.length * i + n * (this.crumbs.length - 1);
        var arg_436 = {
            width: o,
            height: i,
            position: 'absolute',
            left: (t - o) / 2
        };
        this.$wrapper.css(arg_436);
        this.height = i;
        this.width = t;
        this.mobile = e;
    };
    De.prototype.setIndex = function (t) {
        var e = -1;;
        for (; ++e < this.crumbs.length;) {
            var arg_438 = t === e;
            this.crumbs[e].active(arg_438);
        }
    };
    De.prototype.hide = function () {
        var t = -1;;
        for (; ++t < this.crumbs.length;) {
            this.crumbs[t].hide();
        }
    };
    var Fe = {
        on: null,
        off: null
    };
    q.proto(ze, N);
    ze.size = ze.prototype.size = 30;
    ze.prototype.load = function () {
        if (!Fe.on) {
            var t = this;
            var arg_451 = [
                'close-off.svg',
                'close-on.svg'
            ];
            var arg_452 = {
                prefix: 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static/images',
                fallback: 'png'
            };
            Kt.batch(arg_451, arg_452).then(arg_453)['catch'](arg_454);
            function arg_453(e) {
                Fe.off = e[0];
                Fe.on = e[1];
                t.style.call(t);
            }
            function arg_454() {
                j('refresh icon failed to load', 'image', 'info');
            }
        }
    };
    ze.prototype.style = function () {
        var t = this.size;
        var arg_455 = {
            width: t,
            height: t,
            cursor: 'pointer',
            display: 'block',
            backgroundColor: '#fff',
            borderRadius: 4,
            border: 'none'
        };
        this.css(arg_455);
        if (null !== Fe.on) {
            var arg_458 = { cover: true };
            this.$on.backgroundImage(Fe.on, 12, 12, arg_458);
            var arg_459 = { cover: true };
            this.$off.backgroundImage(Fe.off, 12, 12, arg_459);
        }
        var arg_456 = {
            position: 'absolute',
            left: (t - 12) / 2,
            top: (t - 12) / 2
        };
        this.$on.css(arg_456);
        var arg_457 = {
            position: 'absolute',
            left: (t - 12) / 2,
            top: (t - 12) / 2
        };
        this.$off.css(arg_457);
    };
    ze.prototype.onHover = function (t) {
        if (null !== this.emit && true !== this.locked) {
            var arg_460 = { backgroundColor: 'over' === t.action ? '#f5f5f5' : '#fff' };
            this.css(arg_460);
            this.emit('hover', t);
            if ('ie' === C.Browser.type && 8 === C.Browser.version) {
                var arg_461 = { display: 'over' === t.action ? 'block' : 'none' };
                this.$on.css(arg_461);
                var arg_462 = { display: 'over' === t.action ? 'none' : 'block' };
                this.$off.css(arg_462);
            } else {
                var arg_463 = { opacity: 'over' === t.action ? 1 : 0 };
                this.$on.css(arg_463);
                var arg_464 = { opacity: 'over' === t.action ? 0 : 1 };
                this.$off.css(arg_464);
            }
        }
    };
    ze.prototype.onSelect = function (t) {
        if (null !== this.emit && true !== this.locked) {
            this.selected = !this.selected;
            this.emit('click', t);
        }
    };
    ze.prototype.lock = function (t) {
        this.locked = t;
        var arg_465 = { opacity: t ? 0.25 : 0.5 };
        this.css(arg_465);
    };
    ze.prototype.setLabel = function (t) {
        var e = J.translate('Close Modal');
        this.setAttribute('title', e);
    };
    q.proto(He, N);
    He.prototype.style = function (t, e) {
        var i = null;
        if (e) {
            i = 40;
        } else {
            i = 44;
        }
        var arg_466 = {
            color: O.text,
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            textAlign: 'left',
            fontSize: e ? 15 : 16,
            display: this.state.visible ? 'table-cell' : 'none',
            verticalAlign: 'middle',
            paddingTop: 2,
            height: i,
            width: t - ze.size
        };
        this.$title.css(arg_466);
        var arg_467 = {
            backgroundColor: O.hoverOff,
            width: t,
            height: 1,
            top: i,
            position: 'absolute'
        };
        this.$underline.css(arg_467);
        var arg_468 = {
            width: t,
            height: i,
            position: 'relative',
            top: 0
        };
        this.css(arg_468);
        var var_317 = {
            height: i,
            width: t
        };
        return var_317;
    };
    He.prototype.setCopy = function (t) {
        var e = J.translate(t);
        this.$title.text(e);
    };
    He.prototype.display = function (t) {
        this.state.visible = t;
        var arg_469 = { display: t ? 'table-cell' : 'none' };
        this.css(arg_469);
    };
    He.prototype.isVisible = function () {
        return this.state.visible;
    };
    q.proto(We, N);
    We.prototype.style = function (t, e) {
        var i = t < 300;
        var arg_470 = {
            width: t,
            maxHeight: e,
            position: 'relative',
            margin: '0 auto',
            backgroundColor: '#fff',
            display: this.header ? 'block' : 'table',
            borderRadius: 4,
            zIndex: 10,
            overflow: 'hidden',
            border: '1px solid #d7d7d7',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 2px',
            padding: '0px 15px 15px'
        };
        this.css(arg_470);
        if (this.header.isVisible()) {
            this.header.style(t, i);
            var arg_472 = {
                display: 'block',
                height: 'auto',
                marginTop: 10
            };
            this.$content.css(arg_472);
        } else {
            var arg_473 = {
                display: 'table-cell',
                verticalAlign: 'middle',
                marginTop: 0,
                height: e
            };
            this.$content.css(arg_473);
        }
        this.close.style();
        var arg_471 = {
            position: 'absolute',
            right: 20,
            top: i ? 5 : 7
        };
        this.close.css(arg_471);
    };
    We.prototype.setTitle = function (t) {
        if (t) {
            this.header.display(true);
            this.header.setCopy(t);
        } else {
            this.header.display(false);
        }
    };
    We.prototype.load = function () {
        this.close.load();
    };
    q.proto(qe, N);
    qe.prototype.style = function (t) {
        var arg_474 = {
            color: O.hoverOff,
            fontWeight: 500,
            fontSize: t,
            cursor: 'pointer',
            textDecoration: this.state.underline ? 'underline' : 'none',
            display: 'inline-block',
            lineHeight: t
        };
        this.css(arg_474);
    };
    qe.prototype.translate = function () {
        var t = J.translate(this.state.text);
        this.text(t);
    };
    q.proto(Ne, N);
    Ne.prototype.style = function (t, e) {
        if (!e) {
            e = 'center';
        }
        var arg_475 = {
            width: '100%',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: t,
            textAlign: e,
            fontWeight: 500,
            color: O.text,
            lineHeight: t + 6,
            display: 'inline'
        };
        this.css(arg_475);
        if (this.state.link) {
            this.link.style(t);
            var arg_476 = { display: 'inline' };
            this.link.css(arg_476);
        }
    };
    Ne.prototype.translate = function () {
        var t = J.translate(this.state.text);
        if (this.state.link) {
            this.link.translate();
            if (this.state.replaceText) {
                var arg_477 = '{{' + this.state.replaceText + '}}';
                var e = t.split(arg_477);
                var i = document.createTextNode(e[0]);
                this.appendElement(i);
                this.appendElement(this.link);
                if ('' !== e[1]) {
                    var n = document.createTextNode(e[1]);
                    this.appendElement(n);
                }
            } else {
                var arg_478 = t + ' ';
                var s = document.createTextNode(arg_478);
                this.appendElement(s);
                this.appendElement(this.link);
            }
        } else {
            this.content(t);
        }
    };
    var Ue = 'hCaptcha is a service that reduces bots and spam by asking simple questions. Please follow the instructions at the top of the screen for each challenge. For more information visit {{site-url}}';
    q.proto(Ve, N);
    Ve.prototype.style = function (t) {
        this.copy.style(t, 'left');
    };
    Ve.prototype.setCopy = function () {
        this.copy.translate();
    };
    q.proto(Xe, N);
    Xe.prototype.style = function (t, e) {
        var arg_485 = gt(t, 250, 300, 11, 13);
        var i = Math.floor(arg_485);
        var arg_486 = {
            textAlign: 'center',
            color: '#707070',
            fontSize: i,
            fontWeight: 500,
            width: t,
            margin: '0 auto'
        };
        this.css(arg_486);
        var arg_487 = {
            color: O.hoverOff,
            fontWeight: 500,
            marginLeft: 3,
            cursor: 'pointer',
            display: 'inline-block'
        };
        this.$link.css(arg_487);
    };
    Xe.prototype.setCopy = function (t, e) {
        var i = J.translate('Having a problem?');
        var n = J.translate('Give feedback.');
        var s = J.translate('Provide feedback regarding the hCaptcha service.');
        this.$info.text(i);
        this.$link.text(n);
        this.$link.setAttribute('aria-label', s);
    };
    q.proto(Je, N);
    Je.prototype.style = function (t, e, i) {
        var arg_488 = gt(t, 250, 275, 12, 14);
        var n = Math.floor(arg_488);
        this.instructions.style(n);
        var arg_489 = { marginBottom: 10 };
        this.instructions.css(arg_489);
        this.feedback.style(t);
    };
    Je.prototype.setCopy = function () {
        this.instructions.setCopy();
        this.feedback.setCopy();
    };
    q.proto(Ke, N);
    Ke.prototype.style = function (t) {
        var e = gt(t, 125, 150, 13, 14);
        var i = t - 27;
        var arg_490 = {
            height: 'auto',
            marginTop: 5,
            marginBottom: 5,
            position: 'relative'
        };
        this.css(arg_490);
        var arg_491 = {
            cursor: 'pointer',
            height: 'auto',
            width: 'auto',
            position: 'relative',
            display: 'inline-block'
        };
        this.$wrapper.css(arg_491);
        var arg_492 = {
            position: 'relative',
            display: 'inline-block',
            width: 15,
            height: 15,
            borderRadius: 2,
            overflow: 'hidden',
            border: '1px solid #b3b3b3',
            float: 'left'
        };
        this.$input.css(arg_492);
        var arg_493 = {
            position: 'absolute',
            top: 2,
            left: 2,
            zIndex: 10,
            width: 11,
            height: 11,
            borderRadius: 1,
            backgroundColor: '#00838f'
        };
        this.$input.check.css(arg_493);
        var arg_494 = {
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            width: 15,
            height: 15,
            backgroundColor: '#f7f7f7'
        };
        this.$input.bg.css(arg_494);
        var arg_495 = {
            position: 'relative',
            display: 'inline-block',
            width: i,
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: e,
            fontWeight: 500,
            color: '#707070',
            float: 'right',
            marginLeft: 10,
            marginTop: 1,
            wordBreak: 'break-word'
        };
        this.$text.css(arg_495);
    };
    Ke.prototype.toggle = function (t) {
        if (!this.state.locked) {
            this.state.selected = t;
            var arg_496 = { opacity: t ? 1 : 0 };
            this.$input.check.css(arg_496);
            this.$input.setAttribute('aria-pressed', t);
        }
    };
    Ke.prototype.lock = function (t) {
        this.state.locked = t;
    };
    Ke.prototype.setCopy = function () {
        var t = J.translate(this.state.text);
        this.$text.text(t);
    };
    q.proto(Ye, N);
    Ye.prototype.style = function (t, e) {
        var arg_497 = t / 2;
        var i = Math.floor(arg_497);
        var arg_498 = {
            width: '50%',
            display: 'inline-block',
            float: 'left'
        };
        this.$left.css(arg_498);
        var arg_499 = {
            width: '50%',
            display: 'inline-block',
            float: 'right'
        };
        this.$right.css(arg_499);
        var n = 0;;
        for (; n < this.options.length; n++) {
            this.options[n].style(i);
        }
    };
    Ye.prototype.handeSelect = function (t) {
        if (this.state.visible) {
            var e = false, i = 0;;
            for (; i < this.options.length; i++) {
                if ((e = this.options[i] === t) && e === t.state.selected) {
                    e = !e;
                }
                this.options[i].toggle(e);
            }
            this.emit('update', t);
        }
    };
    Ye.prototype.visible = function (t) {
        this.state.visible = t;
        var arg_500 = { display: t ? 'inline-block' : 'none' };
        this.css(arg_500);
        var e = 0;;
        for (; e < this.options.length; e++) {
            this.options[e].lock(!t);
        }
    };
    Ye.prototype.setCopy = function () {
        var t = 0;;
        for (; t < this.options.length; t++) {
            this.options[t].setCopy();
        }
    };
    q.proto(Ge, N);
    Ge.prototype.style = function (t, e) {
        var arg_501 = {
            fontFamily: 'helvetica, arial, sans-serif',
            width: t - 30,
            height: 50,
            borderRadius: 4,
            backgroundColor: '#f7f7f7',
            color: '#7d7d7d',
            border: '1px solid #dedede',
            fontSize: e ? 12 : 14,
            lineHeight: e ? 16 : 18,
            fontWeight: 500,
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            padding: '8px 12px',
            position: 'absolute',
            left: '50%',
            marginLeft: -(t - 30) / 2
        };
        this.$textarea.css(arg_501);
        var arg_502 = {
            height: 50,
            width: t,
            position: 'relative'
        };
        this.css(arg_502);
        this.visible(this.state.visible);
    };
    Ge.prototype.visible = function (t) {
        this.state.visible = t;
        var arg_503 = { display: t ? 'block' : 'none' };
        this.css(arg_503);
    };
    Ge.prototype.disable = function (t) {
        if (this.state.visible) {
            this.$textarea.dom.disabled = !t;
            var arg_504 = { backgroundColor: t ? '#f7f7f7' : '#efefef' };
            this.$textarea.css(arg_504);
        }
    };
    Ge.prototype.getValue = function () {
        return this.$textarea.dom.value;
    };
    Ge.prototype.setValue = function (t) {
        this.$textarea.dom.value = t;
    };
    Ge.prototype.setPlaceholder = function () {
        var arg_505 = J.translate(this.state.placeholder);
        this.$textarea.setAttribute('placeholder', arg_505);
    };
    q.proto(Qe, N);
    Qe.prototype.style = function (t, e) {
        var arg_506 = {
            width: 'auto',
            height: 15,
            cursor: 'pointer',
            display: 'block',
            margin: '0 auto',
            textAlign: 'center',
            borderRadius: 4,
            padding: '10px 15px'
        };
        this.css(arg_506);
        var arg_507 = {
            color: this.state.locked ? O.text : this.state.color.base,
            fontSize: 15,
            fontWeight: 500,
            display: 'inline-block'
        };
        this.$copy.css(arg_507);
    };
    Qe.prototype.onHover = function (t) {
        if (!this.state.locked && this.state.visible) {
            var arg_508 = { backgroundColor: 'over' === t.action ? '#f5f5f5' : '#fff' };
            this.css(arg_508);
            var arg_509 = { color: 'over' === t.action ? this.state.color.hover : this.state.color.base };
            this.$copy.css(arg_509);
        }
    };
    Qe.prototype.onSelect = function (t) {
        if (!this.state.locked && this.state.visible) {
            this.emit('click', t);
        }
    };
    Qe.prototype.visible = function (t) {
        this.state.visible = t;
        var arg_510 = { display: t ? 'block' : 'none' };
        this.css(arg_510);
    };
    Qe.prototype.lock = function (t, e) {
        this.state.locked = t;
        var arg_511 = e || this.state.desc;
        this.$copy.setAttribute('aria-label', arg_511);
        var arg_512 = { color: t ? O.text : this.state.color.base };
        this.$copy.css(arg_512);
    };
    Qe.prototype.lock = function (t, e) {
        this.state.locked = t;
        this.state.lockText = e;
        var arg_513 = e || this.state.desc;
        this.$copy.setAttribute('aria-label', arg_513);
        var arg_514 = { color: t ? O.text : this.state.color.base };
        this.$copy.css(arg_514);
    };
    Qe.prototype.setCopy = function () {
        var t = J.translate(this.state.text);
        var arg_515 = null;
        if (this.state.locked && this.state.lockText) {
            arg_515 = this.state.lockText;
        } else {
            arg_515 = this.state.desc;
        }
        var e = J.translate(arg_515);
        this.$copy.text(t);
        this.$copy.setAttribute('aria-label', e);
    };
    var Ze = 'Please describe your issue.';
    var ti = [
        {
            text: 'Too Difficult',
            value: 'difficulty'
        },
        {
            text: 'Inappropriate',
            value: 'content'
        },
        {
            text: 'Software Bug',
            value: 'software'
        },
        {
            text: 'Other',
            value: 'other'
        }
    ];
    q.proto(ei, N);
    ei.prototype.style = function (t, e, i) {
        var arg_521 = {
            width: i ? 200 : 220,
            height: 35,
            position: 'relative',
            margin: '10px auto 0px'
        };
        this.$buttons.css(arg_521);
        this.options.style(t, i);
        var arg_522 = {
            float: 'left',
            marginBottom: 10
        };
        this.options.css(arg_522);
        this.comment.style(t, i);
        var arg_523 = {
            marginTop: 10,
            clear: 'both'
        };
        this.comment.css(arg_523);
        this.send.style();
        this.cancel.style(t, i);
        var arg_524 = {
            position: 'absolute',
            left: 0
        };
        this.cancel.css(arg_524);
        var arg_525 = {
            position: 'absolute',
            right: 0
        };
        this.send.css(arg_525);
    };
    ei.prototype.sendMessage = function () {
        var t = '';
        var e = '';
        var i = this.comment.getValue();
        if (this.selected) {
            t = this.selected.state.text;
            e = this.selected.state.value;
        }
        this.comment.setValue('');
        this.comment.visible(false);
        this.options.visible(false);
        this.send.visible(false);
        var n = null;
        if ('software' === e || 'other' === e) {
            n = 'feedback';
        } else {
            if ('content' === e) {
                n = 'report';
            } else {
                n = 'accessibility';
            }
        }
        var arg_526 = { response: n };
        this.emit('change', 'thanks', arg_526);
        le.reportIssue(t, i)['catch'](arg_527);
        function arg_527(t) {
        }
    };
    ei.prototype.displayComment = function (t) {
        var e = t.state.selected;
        var i = t.state.value;
        var n = ('software' === i || 'other' === i) && e;
        this.selected = e ? t : null;
        this.comment.visible(n);
        this.comment.disable(n);
        var arg_528 = null === this.selected;
        this.send.lock(arg_528);
    };
    ei.prototype.setCopy = function () {
        this.options.setCopy();
        this.comment.setPlaceholder();
        this.cancel.setCopy();
        this.send.setCopy();
    };
    var ii = 'Please provide details and steps to reproduce.';
    var ni = [
        {
            text: 'Can\'t Solve',
            value: 'captcha_solve'
        },
        {
            text: 'Can\'t Click',
            value: 'captcha_usability'
        },
        {
            text: 'Off Screen',
            value: 'captcha_position'
        },
        {
            text: 'Other',
            value: 'other'
        }
    ];
    q.proto(si, N);
    si.prototype.style = function (t, e, i) {
        var arg_534 = {
            width: i ? 200 : 220,
            height: 35,
            position: 'relative',
            margin: '10px auto 0px',
            clear: 'both'
        };
        this.$buttons.css(arg_534);
        this.options.style(t, i);
        var arg_535 = {
            float: 'left',
            marginBottom: 10
        };
        this.options.css(arg_535);
        this.comment.style(t, i);
        var arg_536 = {
            marginTop: 10,
            clear: 'both'
        };
        this.comment.css(arg_536);
        this.send.style();
        this.cancel.style(t, i);
        var arg_537 = {
            position: 'absolute',
            left: 0
        };
        this.cancel.css(arg_537);
        var arg_538 = {
            position: 'absolute',
            right: 0
        };
        this.send.css(arg_538);
    };
    si.prototype.sendMessage = function () {
        var t = '';
        var e = this.comment.getValue();
        if (this.selected) {
            t = this.selected.state.text;
        }
        this.comment.setValue('');
        this.comment.visible(false);
        this.options.visible(false);
        this.send.visible(false);
        var arg_539 = { response: 'feedback' };
        this.emit('change', 'thanks', arg_539);
        le.reportIssue(t, e)['catch'](arg_540);
        function arg_540(t) {
        }
    };
    si.prototype.storeAnswer = function (t) {
        var e = t.state.selected;
        var i = 'other' === t.state.value && e;
        this.comment.visible(i);
        this.selected = e ? t : null;
        var arg_541 = null === this.selected;
        this.send.lock(arg_541);
    };
    si.prototype.setCopy = function (t) {
        this.options.setCopy();
        this.comment.setPlaceholder();
        this.cancel.setCopy();
        this.send.setCopy();
    };
    var oi = 'Please describe your issue.';
    var ri = [
        {
            text: 'Inappropriate',
            value: 'inappropriate'
        },
        {
            text: 'Violent',
            value: 'violent'
        },
        {
            text: 'Too Difficult',
            value: 'difficulty'
        },
        {
            text: 'Other',
            value: 'other'
        }
    ];
    q.proto(ai, N);
    ai.prototype.style = function (t, e, i) {
        var arg_550 = {
            width: i ? 200 : 220,
            height: 35,
            position: 'relative',
            margin: '10px auto 0px',
            clear: 'both'
        };
        this.$buttons.css(arg_550);
        this.options.style(t, i);
        var arg_551 = {
            float: 'left',
            marginBottom: 10
        };
        this.options.css(arg_551);
        this.comment.style(t, i);
        var arg_552 = {
            marginTop: 10,
            clear: 'both'
        };
        this.comment.css(arg_552);
        this.send.style();
        this.cancel.style(t, i);
        var arg_553 = {
            position: 'absolute',
            left: 0
        };
        this.cancel.css(arg_553);
        var arg_554 = {
            position: 'absolute',
            right: 0
        };
        this.send.css(arg_554);
    };
    ai.prototype.sendMessage = function () {
        var t = this.task_key;
        var e = '';
        var i = this.comment.getValue();
        if (this.selected) {
            e = this.selected.state.text;
        }
        this.comment.setValue('');
        this.comment.visible(false);
        this.options.visible(false);
        this.send.visible(false);
        var arg_555 = { response: 'report' };
        this.emit('change', 'thanks', arg_555);
        le.reportIssue(e, i, t)['catch'](arg_556);
        function arg_556(t) {
        }
    };
    ai.prototype.storeAnswer = function (t) {
        var e = t.state.selected;
        var i = 'other' === t.state.value && e;
        this.comment.visible(i);
        this.selected = e ? t : null;
        var arg_557 = null === this.selected;
        this.send.lock(arg_557);
    };
    ai.prototype.setCopy = function () {
        this.options.setCopy();
        this.comment.setPlaceholder();
        this.cancel.setCopy();
        this.send.setCopy();
    };
    q.proto(li, N);
    li.prototype.style = function (t, e) {
        var i = gt(t, 280, 310, 260, 310);
        var n = gt(t, 280, 300, 12, 13);
        var s = n + 4;
        var arg_558 = {
            fontFamily: 'helvetica, arial, sans-serif',
            fontWeight: 500,
            textAlign: 'center',
            fontSize: n + 1,
            lineHeight: n + 4,
            color: '#707070',
            width: t
        };
        this.css(arg_558);
        var arg_559 = {
            width: i,
            margin: '0 auto',
            fontWeight: 600,
            marginBottom: 2
        };
        this.$copy.css(arg_559);
        var arg_560 = {
            fontSize: n,
            lineHeight: s,
            width: i,
            margin: '0 auto',
            marginBottom: 10
        };
        this.$resolve.css(arg_560);
        var arg_561 = {
            fontSize: n,
            lineHeight: s,
            marginBottom: 10
        };
        this.$option.css(arg_561);
        var arg_562 = {
            fontSize: n,
            lineHeight: s,
            color: O.hoverOff,
            cursor: 'pointer'
        };
        this.$option.link.css(arg_562);
        var arg_563 = {
            fontSize: n - 1,
            lineHeight: s - 1,
            width: i,
            margin: '0 auto',
            marginBottom: -2
        };
        this.$bug.css(arg_563);
        var arg_564 = {
            fontSize: n - 1,
            lineHeight: s - 1,
            width: i,
            margin: '0 auto',
            color: O.hoverOff,
            cursor: 'pointer'
        };
        this.$bug.link.css(arg_564);
    };
    li.prototype.setCopy = function () {
        var t = J.translate('Thank you for your feedback.');
        var e = J.translate('We\'ll resolve your issue as quickly as we can.');
        var i = J.translate('Reporting a functionality issue?');
        var n = J.translate('See how to report issues with detailed logs.');
        var s = J.translate('Please also try turning off your ad blocker.‍');
        var o = J.translate('Our accessibility option may help.');
        this.$copy.text(t);
        this.$resolve.text(e);
        var arg_565 = i + ' ';
        this.$bug.text(arg_565);
        this.$bug.link.text(n);
        var arg_566 = s + ' ';
        this.$option.text(arg_566);
        this.$option.link.text(o);
        var r = J.translate('View our accessibility option.');
        var a = J.translate('Give a detailed report of a bug you\'ve encountered.');
        this.$option.link.setAttribute('aria-label', r);
        this.$bug.link.setAttribute('aria-label', a);
    };
    q.proto(hi, N);
    hi.prototype.style = function (t, e) {
        var i = gt(t, 280, 310, 260, 310);
        var n = gt(t, 280, 300, 12, 13);
        var s = n + 4;
        var arg_567 = {
            fontFamily: 'helvetica, arial, sans-serif',
            fontWeight: 500,
            fontSize: n + 1,
            lineHeight: s,
            textAlign: 'center',
            color: '#707070',
            width: t
        };
        this.css(arg_567);
        var arg_568 = {
            fontWeight: 600,
            width: i,
            margin: '0 auto',
            marginBottom: 2
        };
        this.$sorry.css(arg_568);
        var arg_569 = {
            fontSize: n,
            lineHeight: s,
            color: O.hoverOff,
            cursor: 'pointer',
            marginBottom: 10
        };
        this.$option.css(arg_569);
        var arg_570 = {
            width: i,
            textAlign: 'center',
            fontSize: n,
            lineHeight: s,
            margin: '0 auto'
        };
        this.$avoid.css(arg_570);
    };
    hi.prototype.setCopy = function () {
        var t = J.translate('Sorry to hear that!');
        var e = J.translate('Our accessibility option may help.');
        var i = J.translate('This lets you avoid future questions by registering and setting a cookie.');
        var n = J.translate('Please also try turning off your ad blocker.‍');
        var arg_571 = t + ' ';
        this.$sorry.text(arg_571);
        this.$option.text(e);
        var arg_572 = i + ' ' + n;
        this.$avoid.text(arg_572);
    };
    q.proto(ci, N);
    ci.prototype.style = function (t, e) {
        var i = gt(t, 280, 310, 260, 310);
        var n = gt(t, 280, 300, 12, 13);
        var s = n + 4;
        var arg_573 = {
            fontFamily: 'helvetica, arial, sans-serif',
            fontWeight: 500,
            textAlign: 'center',
            fontSize: n + 1,
            lineHeight: n + 4,
            color: '#707070',
            width: t
        };
        this.css(arg_573);
        var arg_574 = {
            width: i,
            margin: '0 auto',
            fontWeight: 600,
            marginBottom: 2
        };
        this.$copy.css(arg_574);
        var arg_575 = {
            fontSize: n,
            lineHeight: s,
            width: i,
            margin: '0 auto',
            marginBottom: 10
        };
        this.$resolve.css(arg_575);
    };
    ci.prototype.setCopy = function () {
        var t = {
            thanks: J.translate('Thank you for your feedback.'),
            resolve: J.translate('We will look into the issue immediately.')
        };
        this.$copy.text(t.thanks);
        this.$resolve.text(t.resolve);
    };
    q.proto(ui, We);
    ui.prototype.style = function (t, e, i) {
        this.copy.style(t, i);
    };
    ui.prototype.setCopy = function () {
        this.copy.setCopy();
    };
    ui.prototype.setFocus = function () {
        this.copy.focus();
    };
    var di = {
        getCookie: function (t) {
            var e = document.cookie.replace(/ /g, '').split(';');
            try {
                var i = '', n = e.length;;
                for (; n-- && !i;) {
                    if (e[n].indexOf(t) >= 0) {
                        i = e[n];
                    }
                }
                return i;
            } catch (gn) {
                return '';
            }
        },
        hasCookie: function (t) {
            var var_319 = !!di.getCookie(t);
            return var_319;
        },
        supportsAPI: function () {
            try {
                var var_320 = 'hasStorageAccess' in document && 'requestStorageAccess' in document;
                return var_320;
            } catch (gn) {
                return false;
            }
        },
        hasAccess: function () {
            var var_321 = new Promise(arg_576);
            return var_321;
            function arg_576(t) {
                document.hasStorageAccess().then(arg_577)['catch'](arg_578);
                function arg_577() {
                    t(true);
                }
                function arg_578() {
                    t(false);
                }
            }
        },
        requestAccess: function () {
            try {
                var var_322 = document.requestStorageAccess();
                return var_322;
            } catch (gn) {
                var var_323 = Promise.resolve();
                return var_323;
            }
        }
    };
    var pi = {
        none: null,
        blocked: null,
        found: null
    };
    q.proto(fi, N);
    fi.prototype.load = function () {
        if (!pi.none) {
            var t = this;
            var arg_585 = [
                'cookie-none.svg',
                'cookie-blocked.svg',
                'cookie-found.svg'
            ];
            var arg_586 = {
                prefix: 'https://newassets.hcaptcha.com/captcha/v1/89f9b6a/static/images',
                fallback: 'png'
            };
            Kt.batch(arg_585, arg_586).then(arg_587)['catch'](arg_588);
            function arg_587(e) {
                pi.none = e[0];
                pi.blocked = e[1];
                pi.found = e[2];
                t.style.call(t);
            }
            function arg_588() {
                j('Cookie icon failed to load', 'image', 'info');
            }
        }
    };
    fi.prototype.style = function () {
        var arg_589 = {
            width: 18,
            height: 18,
            display: 'inline',
            position: 'relative',
            background: 'rgba(0,0,0,0)'
        };
        this.css(arg_589);
        if (null !== pi.none) {
            var arg_593 = { cover: true };
            this.$none.backgroundImage(pi.none, 18, 18, arg_593);
            var arg_594 = { cover: true };
            this.$blocked.backgroundImage(pi.blocked, 18, 18, arg_594);
            var arg_595 = { cover: true };
            this.$found.backgroundImage(pi.found, 18, 18, arg_595);
        }
        var arg_590 = {
            '-ms-high-contrast-adjust': 'none',
            position: 'absolute',
            left: 0,
            top: 0
        };
        this.$none.css(arg_590);
        var arg_591 = {
            '-ms-high-contrast-adjust': 'none',
            position: 'absolute',
            left: 0,
            top: 0
        };
        this.$blocked.css(arg_591);
        var arg_592 = {
            '-ms-high-contrast-adjust': 'none',
            position: 'absolute',
            left: 0,
            top: 0
        };
        this.$found.css(arg_592);
        this.size = 18;
    };
    fi.prototype.display = function (t) {
        if ('ie' === C.Browser.type && 8 === C.Browser.version) {
            var arg_596 = { display: 'none' === t ? 'block' : 'none' };
            this.$none.css(arg_596);
            var arg_597 = { display: 'blocked' === t ? 'block' : 'none' };
            this.$blocked.css(arg_597);
            var arg_598 = { display: 'found' === t ? 'block' : 'none' };
            this.$found.css(arg_598);
        } else {
            var arg_599 = { opacity: 'none' === t ? 1 : 0 };
            this.$none.css(arg_599);
            var arg_600 = { opacity: 'blocked' === t ? 1 : 0 };
            this.$blocked.css(arg_600);
            var arg_601 = { opacity: 'found' === t ? 1 : 0 };
            this.$found.css(arg_601);
        }
    };
    var mi = {
        noCookie: {
            noAccess: 'Accessibility cookie is not set. {{retrieve-cookie}}',
            hasAccess: 'Cookies are disabled or the accessibility cookie is not set. {{enable-cookies}}'
        },
        hasCookie: 'Accessibility cookie is set. For help, please email {{support}}'
    };
    var yi = 'support@hcaptcha.com';
    var gi = 'Enable cross-site cookies.';
    var vi = 'Retrieve accessibility cookie.';
    q.proto(bi, N);
    bi.prototype.style = function (t) {
        var arg_607 = {
            fontSize: t,
            color: '#555555'
        };
        this.css(arg_607);
        var arg_608 = {
            fontWeight: 600,
            marginBottom: 5
        };
        this.$header.css(arg_608);
        var arg_609 = {
            display: 'inline',
            position: 'relative'
        };
        this.$header.copy.css(arg_609);
        this.icon.style();
        var arg_610 = {
            top: -2,
            marginLeft: 5
        };
        this.icon.css(arg_610);
        this.retrieve.style(t, 'left');
        this.disabled.style(t, 'left');
        this.help.style(t, 'left');
        var e = this.state.hasCookie;
        var arg_611 = { display: e ? 'block' : 'none' };
        this.help.css(arg_611);
        var i = !this.state.hasCookie && (!this.hasAccess || this.state.hasAccess && !this.state.allowedAccess);
        var arg_612 = { display: i ? 'block' : 'none' };
        this.retrieve.css(arg_612);
        var n = !this.state.hasCookie && this.state.hasAccess && !this.state.allowedAccess;
        var arg_613 = { display: n ? 'block' : 'none' };
        this.disabled.css(arg_613);
    };
    bi.prototype.checkAccess = function () {
        var t = this;
        ye.contact('get-ac').then(arg_614);
        function arg_614(e) {
            t.state.hasCookie = !!e;
            if (di.supportsAPI()) {
                t.state.hasAccess = true;
                di.hasAccess().then(arg_615);
                function arg_615(e) {
                    t.state.allowedAccess = e;
                    t.setType();
                }
            } else {
                t.state.hasAccess = false;
                t.setType();
            }
        }
    };
    bi.prototype.setType = function () {
        var arg_616 = J.translate('Status:');
        this.$header.copy.text(arg_616);
        var t = this.state.hasCookie;
        var arg_617 = { display: t ? 'block' : 'none' };
        this.help.css(arg_617);
        var e = !this.state.hasCookie && (!this.hasAccess || this.state.hasAccess && !this.state.allowedAccess);
        var arg_618 = { display: e ? 'block' : 'none' };
        this.retrieve.css(arg_618);
        var i = !this.state.hasCookie && this.state.hasAccess && !this.state.allowedAccess;
        var arg_619 = { display: i ? 'block' : 'none' };
        this.disabled.css(arg_619);
        var n = null;
        if (this.state.hasCookie) {
            n = 'found';
        } else {
            if (this.state.hasAccess) {
                n = 'blocked';
            } else {
                n = 'none';
            }
        }
        this.icon.display(n);
    };
    bi.prototype.translate = function () {
        var arg_620 = J.translate('Status:');
        this.$header.copy.text(arg_620);
        this.retrieve.translate();
        this.disabled.translate();
        this.help.translate();
    };
    var wi = 'To bypass our visual challenge, we offer an accessibility cookie.';
    var ki = 'Learn more about hCaptcha Accessibility.';
    q.proto(xi, N);
    xi.prototype.style = function (t, e, i) {
        var arg_623 = gt(t, 250, 275, 12, 14);
        var n = Math.floor(arg_623);
        this.copy.style(n, 'left');
        var arg_624 = {
            position: 'relative',
            display: 'inline'
        };
        this.copy.css(arg_624);
        this.status.style(n);
        var arg_625 = { marginTop: 10 };
        this.status.css(arg_625);
    };
    xi.prototype.setCopy = function () {
        this.copy.translate();
        this.status.translate();
    };
    q.proto(Ei, N);
    Ei.prototype.style = function (t, e, i) {
        var n = gt(t, 300, 450, 290, 375);
        var s = gt(e, 275, 300, 260, 275);
        var o = n - 2 * gt(t, 300, 450, 20, 25);
        var r = C.Browser.ie && 8 === C.Browser.version;
        var arg_626 = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: r && !this.state.visible ? 'none' : 'table',
            top: 0,
            left: 0
        };
        this.css(arg_626);
        var arg_627 = {
            display: 'table-cell',
            verticalAlign: 'middle'
        };
        this.$container.css(arg_627);
        var arg_628 = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: '#000',
            opacity: 0,
            zindex: 0,
            cursor: 'pointer'
        };
        this.$bg.css(arg_628);
        this.config.width = o;
        this.config.height = s;
        this.config.mobile = i;
        this._styleContent();
    };
    Ei.prototype._styleContent = function () {
        this.modal.style(this.config.width, this.config.height);
        if (this.modalContent) {
            this.modalContent.style(this.config.width, this.config.height, this.config.mobile);
        }
    };
    Ei.prototype.close = function () {
        if (this.state.visible) {
            this.state.visible = false;
            if (this.modalContent) {
                this.modalContent.off('close', this.close);
                this.modalContent = this.modalContent.destroy();
            }
            var t = C.Browser.ie && 8 === C.Browser.version;
            var arg_629 = {
                visibility: 'hidden',
                display: t ? 'none' : 'table',
                zIndex: -1
            };
            this.css(arg_629);
            if ('report_image' === this.state.prev && 'thanks' === this.state.curr) {
                this.emit('refresh');
            }
            this.emit('close');
        }
    };
    Ei.prototype.display = function (t, e) {
        var i = null;
        if (this.modalContent) {
            this.modalContent = this.modalContent.destroy();
        }
        this.state.prev = this.state.curr;
        this.state.curr = t;
        var n = null;
        if ('info' === t) {
            i = Je;
            n = 'Information';
        } else {
            if ('feedback' === t) {
                i = ei;
                n = 'Feedback';
            } else {
                if ('report_bug' === t) {
                    i = si;
                    n = 'Software Bug';
                } else {
                    if ('report_image' === t) {
                        i = ai;
                        n = 'Tell Us Why';
                    } else {
                        if (t.indexOf('thanks') >= 0) {
                            i = ui;
                        } else {
                            if (t.indexOf('accessibility') >= 0) {
                                i = xi;
                                n = 'Accessibility';
                            }
                        }
                    }
                }
            }
        }
        if (this.state.visible) {
            this.modal.destroy();
            this.modal = this.initComponent(We, null, this.$container);
            this.modal.on('close', this.close);
        }
        this.modalContent = this.initComponent(i, e, this.modal.$content);
        this.modal.setTitle(n);
        this.modalContent.setCopy();
        this.modalContent.on('close', this.close);
        this.modalContent.on('change', this.display);
        this._styleContent();
        var arg_630 = {
            visibility: 'visible',
            display: 'table',
            zIndex: 200
        };
        this.css(arg_630);
        this.modal.focus();
        this.state.visible = true;
    };
    Ei.prototype.isOpen = function () {
        return this.state.visible;
    };
    Ei.prototype.load = function () {
        this.modal.load();
    };
    var _i = new Ei();
    q.proto(Ci, N);
    Ci.prototype.style = function (t) {
        var e = null;
        if (t) {
            e = 135;
        } else {
            e = 160;
        }
        var i = null;
        if (t) {
            i = 35;
        } else {
            i = 40;
        }
        var n = e + 30;
        var arg_631 = {
            width: n,
            height: i,
            display: this.state.visible ? 'block' : 'none',
            position: 'relative',
            cursor: 'pointer',
            left: 0,
            overflow: 'hidden'
        };
        this.css(arg_631);
        var arg_632 = {
            width: e,
            height: i,
            padding: '0px 15px',
            zIndex: 10,
            position: 'relative'
        };
        this.$wrapper.css(arg_632);
        if (this.$line) {
            var arg_635 = {
                width: e,
                height: 1,
                backgroundColor: '#E6E6E6',
                bottom: 0,
                zIndex: 0,
                position: 'absolute'
            };
            this.$line.css(arg_635);
        }
        var arg_633 = {
            width: e,
            height: '100%',
            color: this.state.color,
            fontSize: t ? 12 : 14,
            lineHeight: i,
            display: 'table-cell',
            verticalAlign: 'middle',
            textAlign: 'center'
        };
        this.$copy.css(arg_633);
        var arg_634 = {
            width: n + 2,
            opacity: 0,
            height: i + 2,
            position: 'absolute',
            backgroundColor: '#f5f5f5',
            top: 0,
            left: 0
        };
        this.$bg.css(arg_634);
        var var_324 = {
            width: n,
            height: i
        };
        return var_324;
    };
    Ci.prototype.onHover = function (t) {
        if (!this.state.locked && this.state.visible) {
            var arg_636 = { opacity: 'over' === t.action ? 1 : 0 };
            this.$bg.css(arg_636);
        }
    };
    Ci.prototype.onSelect = function (t) {
        if (!this.state.locked && this.state.visible) {
            if (_i.isOpen) {
                _i.close();
            }
            if ('link' === this.state.type) {
                window.open(this.state.value);
            } else {
                if ('modal' === this.state.type) {
                    _i.display(this.state.value);
                }
            }
            var arg_637 = { opacity: 0 };
            this.$bg.css(arg_637);
            this.emit('click', this.state.value);
        }
    };
    Ci.prototype.lock = function (t) {
        this.state.locked = t;
        var arg_638 = null;
        if (t) {
            arg_638 = -1;
        } else {
            arg_638 = 0;
        }
        this.setAttribute('tabindex', arg_638);
        var arg_639 = { pointerEvents: t ? 'none' : 'auto' };
        this.css(arg_639);
        var arg_640 = { opacity: 0 };
        this.$bg.css(arg_640);
    };
    Ci.prototype.visible = function (t) {
        this.state.visible = t;
        var arg_641 = { display: t ? 'block' : 'none' };
        this.css(arg_641);
        var arg_642 = null;
        if (t) {
            arg_642 = 0;
        } else {
            arg_642 = -1;
        }
        this.setAttribute('tabindex', arg_642);
    };
    Ci.prototype.setCopy = function () {
        var t = J.translate(this.state.text);
        var e = J.translate(this.state.desc);
        this.$copy.text(t);
        this.setAttribute('aria-label', e);
    };
    var Si = [
        {
            text: 'Accessibility',
            value: 'accessibility',
            type: 'modal',
            desc: 'Accessibility. Visit this menu entry to learn how to enable hCaptcha accessibility, which allows you to bypass the challenge via an emailed link.'
        },
        {
            text: 'Report Image',
            value: 'report_image',
            type: 'custom',
            desc: 'Report an image to hCaptcha.',
            color: '#d60d0d'
        },
        {
            text: 'Report Bug',
            value: 'report_bug',
            type: 'modal',
            desc: 'Report a software bug or issue to hCaptcha.'
        },
        {
            text: 'Information',
            value: 'info',
            type: 'modal',
            desc: 'Get information about hCaptcha and accessibility options.'
        }
    ];
    q.proto(Oi, N);
    Oi.prototype.style = function (t) {
        var arg_644 = {
            width: 'auto',
            zIndex: 10,
            position: 'absolute'
        };
        this.css(arg_644);
        var e = this.state.list;
        var i = 0;
        var n = 0;
        if (e.length > 0) {
            var s = null, o = 0;;
            for (; o < e.length; o++) {
                s = e[o].style(t);
                if (e[o].state.visible) {
                    i = s.width;
                    n += s.height;
                }
            }
        }
        var arg_645 = {
            width: i - 2,
            height: n - 2,
            overflow: 'hidden',
            zIndex: 100,
            position: 'absolute',
            borderRadius: 4,
            border: '1px solid #d7d7d7',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 2px'
        };
        this.css(arg_645);
        var arg_646 = {
            borderRadius: 4,
            backgroundColor: '#fff',
            width: i,
            height: n,
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0
        };
        this.$background.css(arg_646);
        this.state.mobile = t;
        var var_325 = {
            width: i,
            height: n
        };
        return var_325;
    };
    Oi.prototype.visible = function (t) {
        var e = this;
        this.state.visible = t;
        this.state.index = 0;
        var i = C.Browser.ie && 8 === C.Browser.version;
        var arg_647 = {
            display: !t && i ? 'none' : 'block',
            visibility: t ? 'visible' : 'hidden'
        };
        this.css(arg_647);
        var n;
        var s = this.state.list;
        if (t) {
            var o = null;
            var r = null;
            n = 0;
            for (; n < Si.length; n++) {
                if (!('report_image' === (r = Si[n]).value && le.isRqChl())) {
                    r.last = n === Si.length - 1;
                    (o = this.initComponent(Ci, r)).setCopy();
                    o.on('click', arg_648);
                    s.push(o);
                    function arg_648(t) {
                        e.visible(false);
                        e.emit('select', t);
                        e.state.index = n;
                    }
                }
            }
            this.style.call(this, this.state.mobile);
            s[0].focus();
        } else {
            n = this.state.list.length;
            for (; --n > -1;) {
                if (s[n]) {
                    s[n].destroy();
                }
                s.splice(n, 0);
            }
            this.state.list = [];
        }
    };
    Oi.prototype.setCopy = function () {
        if (0 !== this.state.list.length) {
            var t = this.state.list, e = 0;;
            for (; e < t.length; e++) {
                t[e].setCopy();
            }
        }
    };
    Oi.prototype.isVisible = function () {
        var var_326 = this.state.visible || false;
        return var_326;
    };
    q.proto(Li, N);
    Li.prototype.load = function () {
        this.btn.info.load();
        this.btn.refresh.load();
        this.logo.load();
        this.language.setup();
    };
    Li.prototype.style = function (t, e, i) {
        var n = null;
        if (e) {
            n = 60;
        } else {
            n = 70;
        }
        var s = null;
        if (e) {
            s = 10;
        } else {
            s = 11;
        }
        if (this.breadcrumbs.display) {
            this.breadcrumbs.style(t, e);
            var arg_667 = {
                position: 'absolute',
                top: e ? 12 : 20
            };
            this.breadcrumbs.css(arg_667);
            if (e) {
                s = 8;
            } else {
                s = 17;
            }
            if (e) {
                n = 60;
            } else {
                n = 80;
            }
        }
        this.language.style(e);
        this.btn.refresh.style(e);
        this.btn.submit.style(e);
        this.btn.info.style(e);
        var arg_658 = null;
        if (e) {
            arg_658 = 11;
        } else {
            arg_658 = 12;
        }
        this.text.style(arg_658);
        var arg_659 = t < 400;
        this.logo.style(arg_659);
        this.menu.style(e);
        var arg_660 = {
            position: 'absolute',
            left: 0,
            bottom: this.btn.submit.height + i
        };
        this.menu.css(arg_660);
        var arg_661 = {
            position: 'absolute',
            left: 0,
            bottom: (this.btn.submit.height - this.btn.info.height) / 2
        };
        this.btn.info.css(arg_661);
        var arg_662 = {
            position: 'absolute',
            bottom: (this.btn.submit.height - this.btn.refresh.height) / 2,
            left: this.btn.refresh.width + 10
        };
        this.btn.refresh.css(arg_662);
        var arg_663 = {
            position: 'absolute',
            display: 'block',
            right: 0,
            bottom: 0
        };
        this.btn.submit.css(arg_663);
        var arg_664 = { bottom: (this.btn.submit.height - this.logo.height) / 2 };
        this.logo.css(arg_664);
        var arg_665 = {
            position: 'absolute',
            top: s
        };
        this.text.css(arg_665);
        var arg_666 = {
            width: t,
            height: n,
            position: 'relative',
            left: i,
            top: i
        };
        this.css(arg_666);
        var var_328 = {
            width: t,
            height: n
        };
        return var_328;
    };
    Li.prototype.setupLogo = function (t, e) {
        if (t) {
            this.logo.destroy();
            var arg_668 = { charity: true };
            this.logo = this.initComponent(je, arg_668);
            this.logo.load();
        }
        var var_329 = e || this.logo.link;
        this.logo.link = var_329;
    };
    Li.prototype.setAction = function (t) {
        this.state.action = t;
        this.btn.submit.action(t);
    };
    Li.prototype.displayFail = function (t) {
        this.text.display(t);
    };
    Li.prototype.isOpen = function () {
        var var_330 = this.menu.isVisible() || this.language.isOpen();
        return var_330;
    };
    Li.prototype.close = function (t) {
        if (this.menu.isVisible()) {
            this.btn.info.reset();
            this.menu.visible(false);
            if (t) {
                this.focusMenuBtn();
            }
        } else {
            if (this.language.isOpen()) {
                this.language.close();
                if (t) {
                    this.language.focus();
                }
            }
        }
    };
    Li.prototype.focusMenuBtn = function () {
        this.btn.info.focus();
    };
    Li.prototype.enableLanguageSelector = function (t) {
        this.language.enable(t);
    };
    Li.prototype.enableRefresh = function (t) {
        this.btn.refresh.enable(t);
    };
    Li.prototype.translate = function () {
        this.menu.setCopy();
        this.text.setCopy();
        this.language.setLabel();
        this.btn.info.setLabel();
        this.btn.refresh.setLabel();
        this.btn.submit.setCopy();
    };
    Li.prototype.lockState = function (t) {
        this.state.locked = t;
        this.language.setLock(t);
        this.btn.info.setLock(t);
        this.btn.refresh.setLock(t);
        this.btn.submit.setLock(t);
    };
    Li.prototype.isLocked = function () {
        return this.state.locked;
    };
    var $i = new Li();
    q.proto(Ti, N);
    Ti.prototype.style = function (t, e, i) {
        var arg_669 = {
            width: t,
            height: e,
            position: 'relative',
            top: i,
            left: i,
            zIndex: 0
        };
        this.css(arg_669);
    };
    Ti.prototype.mount = function (t) {
        var e = this;
        this.appendElement(t);
        $i.setAction('check');
        this.handleResize = function () {
            e.emit('resize');
        };
        this.handleCheck = function (e) {
            var i = 'skip';
            if (e) {
                if (t.breadcrumbs && t.served < t.breadcrumbs) {
                    i = 'next';
                } else {
                    i = 'check';
                }
            }
            $i.setAction(i);
        };
        this.handleFocus = function () {
            e.emit('focus-check');
        };
        this.handleSubmit = function () {
            $i.emit('submit');
        };
        if (t.on) {
            t.on('display-check', this.handleCheck);
        }
        if (t.on) {
            t.on('challenge-resize', this.handleResize);
        }
        if (t.on) {
            t.on('focus-check', this.handleFocus);
        }
        if (t.on) {
            t.on('submit', this.handleSubmit);
        }
        this.isMounted = true;
    };
    Ti.prototype.unmount = function (t) {
        if (t.destroy) {
            try {
                if (t.off) {
                    t.off('display-check', this.handleCheck);
                }
                if (t.off) {
                    t.off('challenge-resize', this.handleResize);
                }
                if (t.off) {
                    t.off('focus-check', this.handleFocus);
                }
                if (t.off) {
                    t.off('submit', this.handleSubmit);
                }
                t.destroy();
            } catch (yn) {
            }
        } else {
            this.removeElement(t);
        }
        this.isMounted = false;
        return null;
    };
    var Pi = new Ti();
    var Mi = null;
    var Xi = Object.create(null);
    var Ji = null;
    var Ki = null;
    var Yi = null;
    var Gi = {
        solve: function (t) {
            Ji = null;
            Ki = t;
            var var_339 = Yi = new Promise(arg_682);
            return var_339;
            function arg_682(e, i) {
                try {
                    var n = Yt.decode(t.req);
                    j('Solve Proof', 'proof', 'info', t);
                    var s = n.payload.l + '/' + t.type + '.js';
                    (function (t, e) {
                        var var_341 = new Promise(arg_690);
                        return var_341;
                        function arg_690(i, n) {
                            var s = Xi[t];
                            if (s) {
                                i(s);
                            } else {
                                Kt.script(e).then(arg_691)['catch'](n);
                                function arg_691() {
                                    s = window[t];
                                    Xi[t] = s;
                                    i(s);
                                }
                            }
                        }
                    }(t.type, s).then(arg_683).then(arg_684)['catch'](arg_685)['finally'](arg_686));
                    function arg_683(e) {
                        var var_340 = null;
                        if ('function' != typeof e) {
                            var arg_687 = new Error('Script is not a function');
                            var_340 = Promise.reject(arg_687);
                        } else {
                            var_340 = e(t.req);
                        }
                        return var_340;
                    }
                    function arg_684(t) {
                        Ji = t;
                        e(t);
                    }
                    function arg_685(t) {
                        var i = t.name || 'Proof Error';
                        var n = t.message || 'Error';
                        var arg_688 = { stack: t.stack || '' };
                        j(n, 'proof', 'debug', arg_688);
                        var arg_689 = i + ': ' + n;
                        I(arg_689, 'error', 'proof');
                        Ji = 'fail';
                        e();
                    }
                    function arg_686() {
                        Yi = null;
                    }
                } catch (yn) {
                    var arg_692 = 'JWT Failed: ' + JSON.stringify(yn);
                    I(arg_692, 'error', 'proof');
                    e();
                    Yi = null;
                }
            }
        },
        getResult: function () {
            var var_342 = new Promise(arg_693);
            return var_342;
            function arg_693(t, e) {
                if (!Yi) {
                    var var_344 = i();
                    return var_344;
                }
                Yi['finally'](i);
                function i() {
                    var e = Ji;
                    var i = Ki;
                    Ji = null;
                    Ki = null;
                    var arg_694 = {
                        solved: e,
                        spec: i
                    };
                    var var_343 = t(arg_694);
                    return var_343;
                }
            }
        }
    };
    var Qi = null;
    var Zi = false;
    var tn = 'challenge';
    var en = {
        init: function () {
            var arg_695 = document.body;
            Qi = new W(arg_695);
            $i.load();
            _i.load();
            Qi.appendElement(Pi);
            Qi.appendElement($i);
            Qi.appendElement(_i);
            Qi.setAttribute('aria-hidden', true);
            _i.on('close', arg_696);
            function arg_696() {
                if (Zi) {
                    $i.focusMenuBtn();
                }
                qi(false);
            }
        },
        create: function (t, e) {
            var var_345 = new Promise(arg_697);
            return var_345;
            function arg_697(i, n) {
                le.getTaskData(t, e).then(arg_698).then(arg_699)['catch'](arg_700);
                function arg_698(t) {
                    var var_346 = null;
                    if (t.pass || false === t.success) {
                        var_346 = t;
                    } else {
                        if (t.key) {
                            var arg_704 = { key: t.key };
                            ye.send('challenge-key', arg_704);
                        }
                        $i.enableLanguageSelector(!t.rq);
                        $i.enableRefresh(!t.rq);
                        if (t.c) {
                            Gi.solve(t.c);
                        }
                        var_346 = le.loadBundle(t).then(arg_701).then(arg_702).then(arg_703);
                        function arg_701(e) {
                            Zi = true;
                            Qi.removeAttribute('aria-hidden');
                            ot.resetData();
                            ot.record(true, true, true, true);
                            var arg_705 = Date.now();
                            ot.setData('dct', arg_705);
                            var arg_706 = le.getData();
                            var i = ji(e, arg_706);
                            Ri(S.browserWidth, S.browserHeight).then(arg_707)['catch'](arg_708);
                            return i;
                            function arg_707(e) {
                                ye.contact('challenge-ready', e).then(arg_709);
                                function arg_709() {
                                    if (Zi) {
                                        var e = 'info' === tn && t.request_type.indexOf('text') >= 0 && Qi.hasClass('using-kb');
                                        var i = 'info' === tn && t.request_type.indexOf('text') < 0;
                                        if (e || i) {
                                            $i.btn.info.focus();
                                            tn = 'challenge';
                                        } else {
                                            Vi();
                                        }
                                    }
                                }
                            }
                            function arg_708(t) {
                                throw t;
                            }
                        }
                        function arg_702(t) {
                            var var_347 = new Promise(arg_710);
                            return var_347;
                            function arg_710(e, i) {
                                var arg_711 = [
                                    Gi.getResult(),
                                    ye.contact('check-api')
                                ];
                                Promise.all(arg_711).then(arg_712);
                                function arg_712(i) {
                                    var arg_713 = {
                                        answers: t,
                                        proof: i[0],
                                        motionData: i[1]
                                    };
                                    e(arg_713);
                                }
                            }
                        }
                        function arg_703(t) {
                            ot.stop();
                            var e = t.answers;
                            var i = t.proof;
                            var n = ot.getData();
                            n.topLevel = t.motionData;
                            n.v = 1;
                            var var_348 = le.checkAnswers(e, n, i);
                            return var_348;
                        }
                    }
                    return var_346;
                }
                function arg_699(t) {
                    if (t.c) {
                        Gi.solve(t.c);
                    }
                    i(t);
                }
                function arg_700(t) {
                    n(t);
                }
            }
        },
        size: function (t, e) {
            var var_349 = Ri(t, e);
            return var_349;
        },
        submit: function () {
            var var_350 = null;
            if (zi() && Di() !== Fi() || 'skip' !== $i.action) {
                var_350 = new Promise(arg_714);
                function arg_714(t, e) {
                    try {
                        Bi();
                        if (zi()) {
                            var i = Di();
                            $i.breadcrumbs.setIndex(i);
                        }
                        t('challenge-complete');
                    } catch (yn) {
                        e(yn);
                    }
                }
            } else {
                var_350 = Promise.resolve('challenge-skip');
            }
            return var_350;
        },
        displayReport: function () {
            var var_351 = new Promise(arg_715);
            return var_351;
            function arg_715(t, e) {
                var i = le.getData();
                try {
                    if (!Ii()) {
                        var var_352 = void t();
                        return var_352;
                    }
                    if (!Hi()) {
                        var n = null;
                        if ('fallback' === i.request_type) {
                            n = i.key;
                        } else {
                            var s = null;
                            if (zi()) {
                                s = Di() - 1;
                            } else {
                                s = 0;
                            }
                            n = i.tasklist[s].task_key;
                        }
                        var var_353 = void t(n);
                        return var_353;
                    }
                    Wi().then(arg_716);
                    if ($i.breadcrumbs) {
                        $i.breadcrumbs.hide();
                    }
                    function arg_716(e) {
                        t(e);
                    }
                } catch (gn) {
                    e(gn);
                }
            }
        },
        hideReport: function (t) {
            qi(false);
        },
        close: function () {
            Qi.setAttribute('aria-hidden', true);
            Ni();
            $i.displayFail(false);
            $i.breadcrumbs.removeCrumbs();
            $i.close(false);
            _i.close();
            Zi = false;
        },
        translateInterface: function (t) {
            if (t && t.locale && t.table) {
                try {
                    if (t.table) {
                        J.addTable(t.locale, t.table);
                    }
                    $i.translate();
                    var arg_717 = J.getLocale();
                    document.documentElement.setAttribute('lang', arg_717);
                } catch (gn) {
                    var arg_718 = 'Failed to update text translations: ' + JSON.stringify(gn);
                    I(arg_718, 'error', 'translation');
                }
            }
        },
        translateBundle: function () {
            Ui();
        },
        isVisible: function () {
            return Zi;
        },
        setFocus: function (t) {
            tn = t;
        },
        triggerFocus: function (t, e) {
            if ('submit' === t) {
                $i.btn.submit.focus();
            } else {
                Vi(e);
            }
        }
    };
    var nn = null;
    var sn = 2;
    var on = 0;
    var rn = null;
    var an = 2000;
    var ln = null;
    var arg_2 = window.location.hash.slice(1);
    var hn = function (t) {
        var e, i, n, s = {}, o = t ? t.indexOf('&') >= 0 ? t.split('&') : [t] : [], r = 0;;
        for (; r < o.length; r++) {
            if (o[r].indexOf('=') >= 0) {
                e = o[r].split('=');
                i = decodeURIComponent(e[0]);
                if (!('false' !== (n = decodeURIComponent(e[1])) && 'true' !== n)) {
                    n = 'true' === n;
                }
                s[i] = n;
            }
        }
        return s;
    }(arg_2);
    if (hn.sentry) {
        Zt();
    }
    (function (t) {
        S.host = t.host;
        S.sitekey = t.sitekey;
        S.file = 'challenge';
        nn = t.id;
        if (t.sentry !== undefined && 'undefined' !== t.sentry) {
            e = t.sentry;
            P = e;
        }
        var e;
        if (t.endpoint !== undefined && 'undefined' !== t.endpoint) {
            A.endpoint = t.endpoint;
        }
        if (t.reportapi !== undefined && 'undefined' !== t.reportapi) {
            A.reportapi = t.reportapi;
        }
        if (t.assethost !== undefined && 'undefined' !== t.assethost) {
            A.assethost = t.assethost;
        }
        if (t.imghost !== undefined && 'undefined' !== t.imghost) {
            A.imghost = t.imghost;
        }
        if (t.hl !== undefined && 'undefined' !== t.hl) {
            A.language = t.hl;
            J.setLocale(A.language);
            $i.language.updateLocale();
        }
        var var_358 = t.theme || A.theme;
        A.theme = var_358;
    }(hn));
    ht(arg_3);
    var var_1 = {
        core: ft,
        lib: Gt,
        context: {
            Config: A,
            Color: O
        }
    };
    return var_1;
    function t(t) {
        var e = this.constructor;
        var var_2 = this.then(arg_4, arg_5);
        return var_2;
        function arg_4(i) {
            var arg_6 = t();
            var var_3 = e.resolve(arg_6).then(arg_7);
            return var_3;
            function arg_7() {
                return i;
            }
        }
        function arg_5(i) {
            var arg_8 = t();
            var var_4 = e.resolve(arg_8).then(arg_9);
            return var_4;
            function arg_9() {
                var var_5 = e.reject(i);
                return var_5;
            }
        }
    }
    function i() {
    }
    function n(t) {
        if (!(this instanceof n)) {
            throw new TypeError('Promises must be constructed via new');
        }
        if ('function' != typeof t) {
            throw new TypeError('not a function');
        }
        this._state = 0;
        this._handled = false;
        this._value = undefined;
        this._deferreds = [];
        h(t, this);
    }
    function s(t, e) {
        for (; 3 === t._state;) {
            t = t._value;
        }
        if (0 !== t._state) {
            t._handled = true;
            n._immediateFn(arg_10);
            function arg_10() {
                var i = null;
                if (1 === t._state) {
                    i = e.onFulfilled;
                } else {
                    i = e.onRejected;
                }
                if (null !== i) {
                    var n;
                    try {
                        n = i(t._value);
                    } catch (s) {
                        var var_6 = void r(e.promise, s);
                        return var_6;
                    }
                    o(e.promise, n);
                } else {
                    (1 === t._state ? o : r)(e.promise, t._value);
                }
            }
        } else {
            t._deferreds.push(e);
        }
    }
    function o(t, e) {
        try {
            if (e === t) {
                throw new TypeError('A promise cannot be resolved with itself.');
            }
            if (e && ('object' == typeof e || 'function' == typeof e)) {
                var i = e.then;
                if (e instanceof n) {
                    t._state = 3;
                    t._value = e;
                    var var_7 = void a(t);
                    return var_7;
                }
                if ('function' == typeof i) {
                    s = i;
                    o = e;
                    var var_8 = void h(arg_11, t);
                    return var_8;
                    function arg_11() {
                        s.apply(o, arguments);
                    }
                }
            }
            t._state = 1;
            t._value = e;
            a(t);
        } catch (l) {
            r(t, l);
        }
        var s;
        var o;
    }
    function r(t, e) {
        t._state = 2;
        t._value = e;
        a(t);
    }
    function a(t) {
        if (2 === t._state && 0 === t._deferreds.length) {
            n._immediateFn(arg_12);
            function arg_12() {
                if (!t._handled) {
                    n._unhandledRejectionFn(t._value);
                }
            }
        }
        var e = 0, i = t._deferreds.length;;
        for (; e < i; e++) {
            s(t, t._deferreds[e]);
        }
        t._deferreds = null;
    }
    function l(t, e, i) {
        this.onFulfilled = 'function' == typeof t ? t : null;
        this.onRejected = 'function' == typeof e ? e : null;
        this.promise = i;
    }
    function h(t, e) {
        var i = false;
        try {
            t(arg_13, arg_14);
            function arg_13(t) {
                if (!i) {
                    i = true;
                    o(e, t);
                }
            }
            function arg_14(t) {
                if (!i) {
                    i = true;
                    r(e, t);
                }
            }
        } catch (n) {
            if (i) {
                return;
            }
            i = true;
            r(e, n);
        }
    }
    function arg_0() {
        var var_28 = function t(e, i, n) {
            var o = 'function' == typeof require && require, r = 0;;
            for (; r < n.length; r++) {
                s(n[r]);
            }
            return s;
            function s(r, a) {
                if (!i[r]) {
                    if (!e[r]) {
                        var l = 'function' == typeof require && require;
                        if (!a && l) {
                            var var_29 = l(r, true);
                            return var_29;
                        }
                        if (o) {
                            var var_30 = o(r, true);
                            return var_30;
                        }
                        var arg_42 = 'Cannot find module \'' + r + '\'';
                        var h = new Error(arg_42);
                        throw h.code = 'MODULE_NOT_FOUND', h;
                    }
                    var c = i[r] = { exports: {} };
                    e[r][0].call(c.exports, arg_41, c, c.exports, t, e, i, n);
                    function arg_41(t) {
                        var i = e[r][1][t];
                        var arg_43 = i || t;
                        var var_31 = s(arg_43);
                        return var_31;
                    }
                }
                return i[r].exports;
            }
        }({
            1: [
                function (t, e, i) {
                    n.prototype = new Error();
                    n.prototype.constructor = n;
                    e.exports = n;
                    function n(t) {
                        this.name = 'RavenConfigError';
                        this.message = t;
                    }
                },
                {}
            ],
            2: [
                function (t, e, i) {
                    var n = t(5);
                    e.exports = {
                        wrapMethod: function (t, e, i) {
                            var s = t[e];
                            var o = t;
                            if (e in t) {
                                var r = null;
                                if ('warn' === e) {
                                    r = 'warning';
                                } else {
                                    r = e;
                                }
                                t[e] = function () {
                                    var t = [].slice.call(arguments);
                                    var a = n.safeJoin(t, ' ');
                                    var l = {
                                        level: r,
                                        logger: 'console',
                                        extra: { arguments: t }
                                    };
                                    if ('assert' === e) {
                                        if (false === t[0]) {
                                            a = 'Assertion failed: ' + (n.safeJoin(t.slice(1), ' ') || 'console.assert');
                                            l.extra.arguments = t.slice(1);
                                            if (i) {
                                                i(a, l);
                                            }
                                        }
                                    } else {
                                        if (i) {
                                            i(a, l);
                                        }
                                    }
                                    if (s) {
                                        Function.prototype.apply.call(s, o, t);
                                    }
                                };
                            }
                        }
                    };
                },
                { 5: 5 }
            ],
            3: [
                function (t, e, i) {
                    var arg_44 = null;
                    if ('undefined' != typeof global) {
                        arg_44 = global;
                    } else {
                        if ('undefined' != typeof self) {
                            arg_44 = self;
                        } else {
                            if ('undefined' != typeof window) {
                                arg_44 = window;
                            } else {
                                arg_44 = {};
                            }
                        }
                    }
                    (function (i) {
                        var r = t(6);
                        var a = t(7);
                        var l = t(8);
                        var h = t(1);
                        var c = t(5);
                        var u = c.isErrorEvent;
                        var d = c.isDOMError;
                        var p = c.isDOMException;
                        var f = c.isError;
                        var m = c.isObject;
                        var y = c.isPlainObject;
                        var g = c.isUndefined;
                        var v = c.isFunction;
                        var b = c.isString;
                        var w = c.isArray;
                        var k = c.isEmptyObject;
                        var x = c.each;
                        var E = c.objectMerge;
                        var _ = c.truncate;
                        var C = c.objectFrozen;
                        var S = c.hasKey;
                        var O = c.joinRegExp;
                        var A = c.urlencode;
                        var L = c.uuid4;
                        var $ = c.htmlTreeAsString;
                        var T = c.isSameException;
                        var P = c.isSameStacktrace;
                        var M = c.parseUrl;
                        var I = c.fill;
                        var j = c.supportsFetch;
                        var R = c.supportsReferrerPolicy;
                        var B = c.serializeKeysForMessage;
                        var D = c.serializeException;
                        var F = c.sanitize;
                        var z = t(2).wrapMethod;
                        var H = 'source protocol user pass host port path'.split(' ');
                        var W = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
                        var q = null;
                        if ('undefined' != typeof window) {
                            q = window;
                        } else {
                            if (void 0 !== i) {
                                q = i;
                            } else {
                                if ('undefined' != typeof self) {
                                    q = self;
                                } else {
                                    q = {};
                                }
                            }
                        }
                        var N = q.document;
                        var U = q.navigator;
                        o.prototype = {
                            VERSION: '3.27.2',
                            debug: false,
                            TraceKit: r,
                            config: function (t, e) {
                                var i = this;
                                if (i.g) {
                                    this.z('error', 'Error: Raven has already been configured');
                                    var var_37 = i;
                                    return var_37;
                                }
                                if (!t) {
                                    return i;
                                }
                                var n = i.k;
                                if (e) {
                                    x(e, arg_47);
                                    function arg_47(t, e) {
                                        if ('tags' === t || 'extra' === t || 'user' === t) {
                                            i.j[t] = e;
                                        } else {
                                            n[t] = e;
                                        }
                                    }
                                }
                                i.setDSN(t);
                                n.ignoreErrors.push(/^Script error\.?$/);
                                n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/);
                                n.ignoreErrors = O(n.ignoreErrors);
                                var var_35 = !!n.ignoreUrls.length && O(n.ignoreUrls);
                                n.ignoreUrls = var_35;
                                var var_36 = !!n.whitelistUrls.length && O(n.whitelistUrls);
                                n.whitelistUrls = var_36;
                                n.includePaths = O(n.includePaths);
                                var arg_46 = n.maxBreadcrumbs || 100;
                                var arg_45 = Math.min(arg_46, 100);
                                n.maxBreadcrumbs = Math.max(0, arg_45);
                                var s = {
                                    xhr: true,
                                    console: true,
                                    dom: true,
                                    location: true,
                                    sentry: true
                                };
                                var o = n.autoBreadcrumbs;
                                if ('[object Object]' === {}.toString.call(o)) {
                                    o = E(s, o);
                                } else {
                                    if (false !== o) {
                                        o = s;
                                    }
                                }
                                n.autoBreadcrumbs = o;
                                var a = { tryCatch: true };
                                var l = n.instrument;
                                if ('[object Object]' === {}.toString.call(l)) {
                                    l = E(a, l);
                                } else {
                                    if (false !== l) {
                                        l = a;
                                    }
                                }
                                n.instrument = l;
                                r.collectWindowErrors = !!n.collectWindowErrors;
                                return i;
                            },
                            install: function () {
                                var t = this;
                                if (t.isSetup() && !t.n) {
                                    r.report.subscribe(arg_48);
                                    if (t.k.captureUnhandledRejections) {
                                        t.B();
                                    }
                                    t.C();
                                    if (t.k.instrument && t.k.instrument.tryCatch) {
                                        t.D();
                                    }
                                    if (t.k.autoBreadcrumbs) {
                                        t.E();
                                    }
                                    t.F();
                                    t.n = true;
                                    function arg_48() {
                                        t.A.apply(t, arguments);
                                    }
                                }
                                Error.stackTraceLimit = t.k.stackTraceLimit;
                                var var_38 = this;
                                return var_38;
                            },
                            setDSN: function (t) {
                                var e = this;
                                var i = e.G(t);
                                var n = i.path.lastIndexOf('/');
                                var s = i.path.substr(1, n);
                                e.H = t;
                                e.h = i.user;
                                var var_39 = i.pass && i.pass.substr(1);
                                e.I = var_39;
                                var arg_49 = n + 1;
                                e.i = i.path.substr(arg_49);
                                e.g = e.J(i);
                                e.K = e.g + '/' + s + 'api/' + e.i + '/store/';
                                this.y();
                            },
                            context: function (t, e, i) {
                                if (v(t)) {
                                    var var_41 = e || [];
                                    i = var_41;
                                    e = t;
                                    t = {};
                                }
                                var var_40 = this.wrap(t, e).apply(this, i);
                                return var_40;
                            },
                            wrap: function (t, e, i) {
                                var s = this;
                                if (g(e) && !v(t)) {
                                    return t;
                                }
                                if (v(t)) {
                                    e = t;
                                    t = void 0;
                                }
                                if (!v(e)) {
                                    return e;
                                }
                                try {
                                    if (e.M) {
                                        return e;
                                    }
                                    if (e.N) {
                                        return e.N;
                                    }
                                } catch (o) {
                                    return e;
                                }
                                for (var r in e)
                                    S(e, r) && (n[r] = e[r]);
                                n.prototype = e.prototype;
                                e.N = n;
                                n.M = true;
                                n.O = e;
                                return n;
                                function n() {
                                    var n = [];
                                    var o = arguments.length;
                                    var r = !t || t && false !== t.deep;
                                    if (i && v(i)) {
                                        i.apply(this, arguments);
                                    }
                                    for (; o--;) {
                                        n[o] = r ? s.wrap(t, arguments[o]) : arguments[o];
                                    }
                                    try {
                                        var var_42 = e.apply(this, n);
                                        return var_42;
                                    } catch (a) {
                                        throw s.L(), s.captureException(a, t), a;
                                    }
                                }
                            },
                            uninstall: function () {
                                r.report.uninstall();
                                this.P();
                                this.Q();
                                this.R();
                                this.S();
                                Error.stackTraceLimit = this.o;
                                this.n = false;
                                var var_43 = this;
                                return var_43;
                            },
                            T: function (t) {
                                this.z('debug', 'Raven caught unhandled promise rejection:', t);
                                var arg_50 = {
                                    mechanism: {
                                        type: 'onunhandledrejection',
                                        handled: false
                                    }
                                };
                                this.captureException(t.reason, arg_50);
                            },
                            B: function () {
                                this.T = this.T.bind(this);
                                if (q.addEventListener) {
                                    q.addEventListener('unhandledrejection', this.T);
                                }
                                var var_44 = this;
                                return var_44;
                            },
                            P: function () {
                                if (q.removeEventListener) {
                                    q.removeEventListener('unhandledrejection', this.T);
                                }
                                var var_45 = this;
                                return var_45;
                            },
                            captureException: function (t, e) {
                                var arg_51 = { trimHeadFrames: 0 };
                                var arg_52 = e || {};
                                e = E(arg_51, arg_52);
                                if (u(t) && t.error) {
                                    t = t.error;
                                } else {
                                    if (d(t) || p(t)) {
                                        var i = t.name || (d(t) ? 'DOMError' : 'DOMException');
                                        var n = null;
                                        if (t.message) {
                                            n = i + ': ' + t.message;
                                        } else {
                                            n = i;
                                        }
                                        var arg_54 = {
                                            stacktrace: true,
                                            trimHeadFrames: e.trimHeadFrames + 1
                                        };
                                        var arg_53 = E(e, arg_54);
                                        var var_47 = this.captureMessage(n, arg_53);
                                        return var_47;
                                    }
                                    if (f(t)) {
                                        t = t;
                                    } else {
                                        if (!y(t)) {
                                            var arg_57 = {
                                                stacktrace: true,
                                                trimHeadFrames: e.trimHeadFrames + 1
                                            };
                                            var arg_56 = E(e, arg_57);
                                            var var_48 = this.captureMessage(t, arg_56);
                                            return var_48;
                                        }
                                        e = this.U(e, t);
                                        var arg_55 = e.message;
                                        t = new Error(arg_55);
                                    }
                                }
                                this.d = t;
                                try {
                                    var s = r.computeStackTrace(t);
                                    this.V(s, e);
                                } catch (o) {
                                    if (t !== o) {
                                        throw o;
                                    }
                                }
                                var var_46 = this;
                                return var_46;
                            },
                            U: function (t, e) {
                                var i = Object.keys(e).sort();
                                var arg_58 = {
                                    message: 'Non-Error exception captured with keys: ' + B(i),
                                    fingerprint: [l(i)],
                                    extra: t.extra || {}
                                };
                                var n = E(t, arg_58);
                                n.extra.W = D(e);
                                return n;
                            },
                            captureMessage: function (t, e) {
                                if (!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(t)) {
                                    var i;
                                    var arg_59 = { message: t += '' };
                                    var n = E(arg_59, e = e || {});
                                    try {
                                        throw new Error(t);
                                    } catch (s) {
                                        i = s;
                                    }
                                    i.name = null;
                                    var o = r.computeStackTrace(i);
                                    var a = w(o.stack) && o.stack[1];
                                    if (a && 'Raven.captureException' === a.func) {
                                        a = o.stack[2];
                                    }
                                    var l = a && a.url || '';
                                    if ((!this.k.ignoreUrls.test || !this.k.ignoreUrls.test(l)) && (!this.k.whitelistUrls.test || this.k.whitelistUrls.test(l))) {
                                        if (this.k.stacktrace || e.stacktrace || '' === n.message) {
                                            n.fingerprint = null == n.fingerprint ? t : n.fingerprint;
                                            (e = E({ trimHeadFrames: 0 }, e)).trimHeadFrames += 1;
                                            var h = this.X(o, e);
                                            n.stacktrace = { frames: h.reverse() };
                                        }
                                        if (n.fingerprint) {
                                            n.fingerprint = w(n.fingerprint) ? n.fingerprint : [n.fingerprint];
                                        }
                                        this.Y(n);
                                        var var_49 = this;
                                        return var_49;
                                    }
                                }
                            },
                            captureBreadcrumb: function (t) {
                                var arg_60 = { timestamp: n() / 1000 };
                                var e = E(arg_60, t);
                                if (v(this.k.breadcrumbCallback)) {
                                    var i = this.k.breadcrumbCallback(e);
                                    if (m(i) && !k(i)) {
                                        e = i;
                                    } else {
                                        if (false === i) {
                                            var var_51 = this;
                                            return var_51;
                                        }
                                    }
                                }
                                this.u.push(e);
                                if (this.u.length > this.k.maxBreadcrumbs) {
                                    this.u.shift();
                                }
                                var var_50 = this;
                                return var_50;
                            },
                            addPlugin: function (t) {
                                var e = [].slice.call(arguments, 1);
                                var arg_61 = [
                                    t,
                                    e
                                ];
                                this.r.push(arg_61);
                                if (this.n) {
                                    this.F();
                                }
                                var var_52 = this;
                                return var_52;
                            },
                            setUserContext: function (t) {
                                this.j.user = t;
                                var var_53 = this;
                                return var_53;
                            },
                            setExtraContext: function (t) {
                                this.Z('extra', t);
                                var var_54 = this;
                                return var_54;
                            },
                            setTagsContext: function (t) {
                                this.Z('tags', t);
                                var var_55 = this;
                                return var_55;
                            },
                            clearContext: function () {
                                this.j = {};
                                var var_56 = this;
                                return var_56;
                            },
                            getContext: function () {
                                var arg_62 = a(this.j);
                                var var_57 = JSON.parse(arg_62);
                                return var_57;
                            },
                            setEnvironment: function (t) {
                                this.k.environment = t;
                                var var_58 = this;
                                return var_58;
                            },
                            setRelease: function (t) {
                                this.k.release = t;
                                var var_59 = this;
                                return var_59;
                            },
                            setDataCallback: function (t) {
                                var e = this.k.dataCallback;
                                this.k.dataCallback = s(e, t);
                                var var_60 = this;
                                return var_60;
                            },
                            setBreadcrumbCallback: function (t) {
                                var e = this.k.breadcrumbCallback;
                                this.k.breadcrumbCallback = s(e, t);
                                var var_61 = this;
                                return var_61;
                            },
                            setShouldSendCallback: function (t) {
                                var e = this.k.shouldSendCallback;
                                this.k.shouldSendCallback = s(e, t);
                                var var_62 = this;
                                return var_62;
                            },
                            setTransport: function (t) {
                                this.k.transport = t;
                                var var_63 = this;
                                return var_63;
                            },
                            lastException: function () {
                                return this.d;
                            },
                            lastEventId: function () {
                                return this.f;
                            },
                            isSetup: function () {
                                var var_64 = !(!this.a || !this.g && (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = true, this.z('error', 'Error: Raven has not been configured.')), 1));
                                return var_64;
                            },
                            afterLoad: function () {
                                var t = q.RavenConfig;
                                if (t) {
                                    this.config(t.dsn, t.config).install();
                                }
                            },
                            showReportDialog: function (t) {
                                if (N) {
                                    if (!(t = E({
                                            eventId: this.lastEventId(),
                                            dsn: this.H,
                                            user: this.j.user || {}
                                        }, t)).eventId) {
                                        throw new h('Missing eventId');
                                    }
                                    if (!t.dsn) {
                                        throw new h('Missing DSN');
                                    }
                                    var e = encodeURIComponent;
                                    var i = [];
                                    for (var n in t)
                                        if ('user' === n) {
                                            var s = t.user;
                                            if (s.name) {
                                                var arg_64 = 'name=' + e(s.name);
                                                i.push(arg_64);
                                            }
                                            if (s.email) {
                                                var arg_65 = 'email=' + e(s.email);
                                                i.push(arg_65);
                                            }
                                        } else
                                            i.push(e(n) + '=' + e(t[n]));
                                    var arg_63 = this.G(t.dsn);
                                    var o = this.J(arg_63);
                                    var r = N.createElement('script');
                                    r.async = true;
                                    r.src = o + '/api/embed/error-page/?' + i.join('&');
                                    (N.head || N.body).appendChild(r);
                                }
                            },
                            L: function () {
                                var t = this;
                                this.m += 1;
                                setTimeout(arg_66);
                                function arg_66() {
                                    t.m -= 1;
                                }
                            },
                            $: function (t, e) {
                                var i;
                                var n;
                                if (this.b) {
                                    for (n in (e = e || {}, t = 'raven' + t.substr(0, 1).toUpperCase() + t.substr(1), N.createEvent ? (i = N.createEvent('HTMLEvents')).initEvent(t, true, true) : (i = N.createEventObject()).eventType = t, e))
                                        S(e, n) && (i[n] = e[n]);
                                    if (N.createEvent) {
                                        N.dispatchEvent(i);
                                    } else {
                                        try {
                                            var arg_67 = 'on' + i.eventType.toLowerCase();
                                            N.fireEvent(arg_67, i);
                                        } catch (s) {
                                        }
                                    }
                                }
                            },
                            _: function (t) {
                                var e = this;
                                return var_65;
                                function var_65(i) {
                                    e.aa = null;
                                    if (e.v !== i) {
                                        var n;
                                        e.v = i;
                                        try {
                                            n = $(i.target);
                                        } catch (s) {
                                            n = '<unknown>';
                                        }
                                        var arg_68 = {
                                            category: 'ui.' + t,
                                            message: n
                                        };
                                        e.captureBreadcrumb(arg_68);
                                    }
                                }
                            },
                            ba: function () {
                                var t = this;
                                return var_66;
                                function var_66(e) {
                                    var i;
                                    try {
                                        i = e.target;
                                    } catch (s) {
                                        return;
                                    }
                                    var n = i && i.tagName;
                                    if (n && ('INPUT' === n || 'TEXTAREA' === n || i.isContentEditable)) {
                                        var o = t.aa;
                                        if (!o) {
                                            t._('input')(e);
                                        }
                                        clearTimeout(o);
                                        t.aa = setTimeout(arg_69, 1000);
                                        function arg_69() {
                                            t.aa = null;
                                        }
                                    }
                                }
                            },
                            ca: function (t, e) {
                                var i = M(this.w.href);
                                var n = M(e);
                                var s = M(t);
                                this.x = e;
                                if (i.protocol === n.protocol && i.host === n.host) {
                                    e = n.relative;
                                }
                                if (i.protocol === s.protocol && i.host === s.host) {
                                    t = s.relative;
                                }
                                var arg_70 = {
                                    category: 'navigation',
                                    data: {
                                        to: e,
                                        from: t
                                    }
                                };
                                this.captureBreadcrumb(arg_70);
                            },
                            C: function () {
                                var t = this;
                                t.da = Function.prototype.toString;
                                Function.prototype.toString = function () {
                                    var var_67 = null;
                                    if ('function' == typeof this && this.M) {
                                        var_67 = t.da.apply(this.O, arguments);
                                    } else {
                                        var_67 = t.da.apply(this, arguments);
                                    }
                                    return var_67;
                                };
                            },
                            Q: function () {
                                if (this.da) {
                                    Function.prototype.toString = this.da;
                                }
                            },
                            D: function () {
                                var i = this;
                                var n = i.t;
                                var s = this.k.autoBreadcrumbs;
                                I(q, 'setTimeout', t, n);
                                I(q, 'setInterval', t, n);
                                if (q.requestAnimationFrame) {
                                    I(q, 'requestAnimationFrame', arg_77, n);
                                    function arg_77(t) {
                                        return var_76;
                                        function var_76(e) {
                                            var arg_79 = {
                                                mechanism: {
                                                    type: 'instrument',
                                                    data: {
                                                        'function': 'requestAnimationFrame',
                                                        handler: t && t.name || '<anonymous>'
                                                    }
                                                }
                                            };
                                            var arg_78 = i.wrap(arg_79, e);
                                            var var_77 = t(arg_78);
                                            return var_77;
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
                                    ], r = 0;;
                                for (; r < o.length; r++) {
                                    e(o[r]);
                                }
                                function t(t) {
                                    return var_68;
                                    function var_68(e, n) {
                                        var s = new Array(arguments.length), o = 0;;
                                        for (; o < s.length; ++o) {
                                            s[o] = arguments[o];
                                        }
                                        var r = s[0];
                                        if (v(r)) {
                                            var arg_71 = {
                                                mechanism: {
                                                    type: 'instrument',
                                                    data: { 'function': t.name || '<anonymous>' }
                                                }
                                            };
                                            s[0] = i.wrap(arg_71, r);
                                        }
                                        var var_69 = null;
                                        if (t.apply) {
                                            var_69 = t.apply(this, s);
                                        } else {
                                            var_69 = t(s[0], s[1]);
                                        }
                                        return var_69;
                                    }
                                }
                                function e(t) {
                                    var e = q[t] && q[t].prototype;
                                    if (e && e.hasOwnProperty && e.hasOwnProperty('addEventListener')) {
                                        I(e, 'addEventListener', arg_72, n);
                                        I(e, 'removeEventListener', arg_73, n);
                                        function arg_72(e) {
                                            return var_70;
                                            function var_70(n, o, r, a) {
                                                try {
                                                    if (o && o.handleEvent) {
                                                        var arg_76 = {
                                                            mechanism: {
                                                                type: 'instrument',
                                                                data: {
                                                                    target: t,
                                                                    'function': 'handleEvent',
                                                                    handler: o && o.name || '<anonymous>'
                                                                }
                                                            }
                                                        };
                                                        o.handleEvent = i.wrap(arg_76, o.handleEvent);
                                                    }
                                                } catch (l) {
                                                }
                                                var h;
                                                var c;
                                                var u;
                                                if (s && s.dom && ('EventTarget' === t || 'Node' === t)) {
                                                    c = i._('click');
                                                    u = i.ba();
                                                    h = function (t) {
                                                        if (t) {
                                                            var e;
                                                            try {
                                                                e = t.type;
                                                            } catch (i) {
                                                                return;
                                                            }
                                                            var var_72 = null;
                                                            if ('click' === e) {
                                                                var_72 = c(t);
                                                            } else {
                                                                if ('keypress' === e) {
                                                                    var_72 = u(t);
                                                                } else {
                                                                    var_72 = void 0;
                                                                }
                                                            }
                                                            return var_72;
                                                        }
                                                    };
                                                }
                                                var arg_75 = {
                                                    mechanism: {
                                                        type: 'instrument',
                                                        data: {
                                                            target: t,
                                                            'function': 'addEventListener',
                                                            handler: o && o.name || '<anonymous>'
                                                        }
                                                    }
                                                };
                                                var arg_74 = i.wrap(arg_75, o, h);
                                                var var_71 = e.call(this, n, arg_74, r, a);
                                                return var_71;
                                            }
                                        }
                                        function arg_73(t) {
                                            return var_73;
                                            function var_73(e, i, n, s) {
                                                try {
                                                    var var_75 = i && (i.N ? i.N : i);
                                                    i = var_75;
                                                } catch (o) {
                                                }
                                                var var_74 = t.call(this, e, i, n, s);
                                                return var_74;
                                            }
                                        }
                                    }
                                }
                            },
                            E: function () {
                                var e = this;
                                var i = this.k.autoBreadcrumbs;
                                var n = e.t;
                                if (i.xhr && 'XMLHttpRequest' in q) {
                                    var s = q.XMLHttpRequest && q.XMLHttpRequest.prototype;
                                    I(s, 'open', arg_82, n);
                                    I(s, 'send', arg_83, n);
                                    function arg_82(t) {
                                        return var_79;
                                        function var_79(i, n) {
                                            if (b(n) && -1 === n.indexOf(e.h)) {
                                                this.ea = {
                                                    method: i,
                                                    url: n,
                                                    status_code: null
                                                };
                                            }
                                            var var_80 = t.apply(this, arguments);
                                            return var_80;
                                        }
                                    }
                                    function arg_83(i) {
                                        return var_81;
                                        function var_81() {
                                            var s = this, o = [
                                                    'onload',
                                                    'onerror',
                                                    'onprogress'
                                                ], r = 0;;
                                            for (; r < o.length; r++) {
                                                t(o[r], s);
                                            }
                                            if ('onreadystatechange' in s && v(s.onreadystatechange)) {
                                                I(s, 'onreadystatechange', arg_85);
                                                function arg_85(t) {
                                                    var arg_86 = {
                                                        mechanism: {
                                                            type: 'instrument',
                                                            data: {
                                                                'function': 'onreadystatechange',
                                                                handler: t && t.name || '<anonymous>'
                                                            }
                                                        }
                                                    };
                                                    var var_83 = e.wrap(arg_86, t, n);
                                                    return var_83;
                                                }
                                            } else {
                                                s.onreadystatechange = n;
                                            }
                                            var var_82 = i.apply(this, arguments);
                                            return var_82;
                                            function n() {
                                                if (s.ea && 4 === s.readyState) {
                                                    try {
                                                        s.ea.status_code = s.status;
                                                    } catch (t) {
                                                    }
                                                    var arg_84 = {
                                                        type: 'http',
                                                        category: 'xhr',
                                                        data: s.ea
                                                    };
                                                    e.captureBreadcrumb(arg_84);
                                                }
                                            }
                                        }
                                    }
                                }
                                if (i.xhr && j()) {
                                    I(q, 'fetch', arg_87, n);
                                    function arg_87(t) {
                                        return var_84;
                                        function var_84() {
                                            var i = new Array(arguments.length), n = 0;;
                                            for (; n < i.length; ++n) {
                                                i[n] = arguments[n];
                                            }
                                            var s;
                                            var o = i[0];
                                            var r = 'GET';
                                            if ('string' == typeof o) {
                                                s = o;
                                            } else {
                                                if ('Request' in q && o instanceof q.Request) {
                                                    s = o.url;
                                                    if (o.method) {
                                                        r = o.method;
                                                    }
                                                } else {
                                                    s = '' + o;
                                                }
                                            }
                                            if (-1 !== s.indexOf(e.h)) {
                                                var var_86 = t.apply(this, i);
                                                return var_86;
                                            }
                                            if (i[1] && i[1].method) {
                                                r = i[1].method;
                                            }
                                            var a = {
                                                method: r,
                                                url: s,
                                                status_code: null
                                            };
                                            var var_85 = t.apply(this, i).then(arg_88)['catch'](arg_89);
                                            return var_85;
                                            function arg_88(t) {
                                                a.status_code = t.status;
                                                var arg_90 = {
                                                    type: 'http',
                                                    category: 'fetch',
                                                    data: a
                                                };
                                                e.captureBreadcrumb(arg_90);
                                                return t;
                                            }
                                            function arg_89(t) {
                                                throw e.captureBreadcrumb({
                                                    type: 'http',
                                                    category: 'fetch',
                                                    data: a,
                                                    level: 'error'
                                                }), t;
                                            }
                                        }
                                    }
                                }
                                if (i.dom && this.b) {
                                    if (N.addEventListener) {
                                        var arg_91 = e._('click');
                                        N.addEventListener('click', arg_91, false);
                                        var arg_92 = e.ba();
                                        N.addEventListener('keypress', arg_92, false);
                                    } else {
                                        if (N.attachEvent) {
                                            var arg_93 = e._('click');
                                            N.attachEvent('onclick', arg_93);
                                            var arg_94 = e.ba();
                                            N.attachEvent('onkeypress', arg_94);
                                        }
                                    }
                                }
                                var o = q.chrome;
                                var r = !(o && o.app && o.app.runtime) && q.history && q.history.pushState && q.history.replaceState;
                                if (i.location && r) {
                                    var a = q.onpopstate;
                                    q.onpopstate = function () {
                                        var t = e.w.href;
                                        e.ca(e.x, t);
                                        if (a) {
                                            var var_87 = a.apply(this, arguments);
                                            return var_87;
                                        }
                                    };
                                    I(q.history, 'pushState', l, n);
                                    I(q.history, 'replaceState', l, n);
                                    function l(t) {
                                        return var_88;
                                        function var_88() {
                                            var i = null;
                                            if (arguments.length > 2) {
                                                i = arguments[2];
                                            } else {
                                                i = void 0;
                                            }
                                            if (i) {
                                                var arg_95 = i + '';
                                                e.ca(e.x, arg_95);
                                            }
                                            var var_89 = t.apply(this, arguments);
                                            return var_89;
                                        }
                                    }
                                }
                                if (i.console && 'console' in q && console.log) {
                                    var arg_96 = [
                                        'debug',
                                        'info',
                                        'warn',
                                        'error',
                                        'log'
                                    ];
                                    x(arg_96, arg_97);
                                    function h(t, i) {
                                        var arg_98 = {
                                            message: t,
                                            level: i.level,
                                            category: 'console'
                                        };
                                        e.captureBreadcrumb(arg_98);
                                    }
                                    function arg_97(t, e) {
                                        z(console, e, h);
                                    }
                                }
                                function t(t, i) {
                                    if (t in i && v(i[t])) {
                                        I(i, t, arg_80);
                                        function arg_80(i) {
                                            var arg_81 = {
                                                mechanism: {
                                                    type: 'instrument',
                                                    data: {
                                                        'function': t,
                                                        handler: i && i.name || '<anonymous>'
                                                    }
                                                }
                                            };
                                            var var_78 = e.wrap(arg_81, i);
                                            return var_78;
                                        }
                                    }
                                }
                            },
                            R: function () {
                                var t;;
                                for (; this.t.length;) {
                                    var e = (t = this.t.shift())[0];
                                    var i = t[1];
                                    var n = t[2];
                                    e[i] = n;
                                }
                            },
                            S: function () {
                                for (var t in this.q)
                                    this.p[t] = this.q[t];
                            },
                            F: function () {
                                var t = this;
                                x(this.r, arg_99);
                                function arg_99(e, i) {
                                    var n = i[0];
                                    var s = i[1];
                                    var arg_100 = [t].concat(s);
                                    n.apply(t, arg_100);
                                }
                            },
                            G: function (t) {
                                var e = W.exec(t);
                                var i = {};
                                var n = 7;
                                try {
                                    for (; n--;) {
                                        var var_90 = e[n] || '';
                                        i[H[n]] = var_90;
                                    }
                                } catch (s) {
                                    throw new h('Invalid DSN: ' + t);
                                }
                                if (i.pass && !this.k.allowSecretKey) {
                                    throw new h('Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key');
                                }
                                return i;
                            },
                            J: function (t) {
                                var e = '//' + t.host + (t.port ? ':' + t.port : '');
                                if (t.protocol) {
                                    e = t.protocol + ':' + e;
                                }
                                return e;
                            },
                            A: function (t, e) {
                                var var_91 = e.mechanism || {
                                    type: 'onerror',
                                    handled: false
                                };
                                (e = e || {}).mechanism = var_91;
                                if (!this.m) {
                                    this.V(t, e);
                                }
                            },
                            V: function (t, e) {
                                var i = this.X(t, e);
                                var arg_101 = {
                                    stackInfo: t,
                                    options: e
                                };
                                this.$('handle', arg_101);
                                this.fa(t.name, t.message, t.url, t.lineno, i, e);
                            },
                            X: function (t, e) {
                                var i = this;
                                var n = [];
                                if (t.stack && t.stack.length && (x(t.stack, function (e, s) {
                                        var o = i.ga(s, t.url);
                                        if (o) {
                                            n.push(o);
                                        }
                                    }), e && e.trimHeadFrames)) {
                                    var s = 0;;
                                    for (; s < e.trimHeadFrames && s < n.length; s++) {
                                        n[s].in_app = false;
                                    }
                                }
                                var var_92 = n = n.slice(0, this.k.stackTraceLimit);
                                return var_92;
                            },
                            ga: function (t, e) {
                                var i = {
                                    filename: t.url,
                                    lineno: t.line,
                                    colno: t.column,
                                    'function': t.func || '?'
                                };
                                if (!t.url) {
                                    i.filename = e;
                                }
                                i.in_app = !(this.k.includePaths.test && !this.k.includePaths.test(i.filename) || /(Raven|TraceKit)\./.test(i['function']) || /raven\.(min\.)?js$/.test(i.filename));
                                return i;
                            },
                            fa: function (t, e, i, n, s, o) {
                                var r;
                                var a = (t ? t + ': ' : '') + (e || '');
                                if ((!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(e) && !this.k.ignoreErrors.test(a)) && (s && s.length ? (i = s[0].filename || i, s.reverse(), r = { frames: s }) : i && (r = {
                                        frames: [{
                                                filename: i,
                                                lineno: n,
                                                in_app: true
                                            }]
                                    }), (!this.k.ignoreUrls.test || !this.k.ignoreUrls.test(i)) && (!this.k.whitelistUrls.test || this.k.whitelistUrls.test(i)))) {
                                    var arg_102 = {
                                        exception: {
                                            values: [{
                                                    type: t,
                                                    value: e,
                                                    stacktrace: r
                                                }]
                                        },
                                        transaction: i
                                    };
                                    var l = E(arg_102, o);
                                    var h = l.exception.values[0];
                                    if (null == h.type && '' === h.value) {
                                        h.value = 'Unrecoverable error caught';
                                    }
                                    if (!l.exception.mechanism && l.mechanism) {
                                        l.exception.mechanism = l.mechanism;
                                        delete l.mechanism;
                                    }
                                    var arg_103 = {
                                        type: 'generic',
                                        handled: true
                                    };
                                    var arg_104 = l.exception.mechanism || {};
                                    l.exception.mechanism = E(arg_103, arg_104);
                                    this.Y(l);
                                }
                            },
                            ha: function (t) {
                                var e = this.k.maxMessageLength;
                                if (t.message) {
                                    t.message = _(t.message, e);
                                }
                                if (t.exception) {
                                    var i = t.exception.values[0];
                                    i.value = _(i.value, e);
                                }
                                var n = t.request;
                                if (n) {
                                    if (n.url) {
                                        n.url = _(n.url, this.k.maxUrlLength);
                                    }
                                    if (n.Referer) {
                                        n.Referer = _(n.Referer, this.k.maxUrlLength);
                                    }
                                }
                                if (t.breadcrumbs && t.breadcrumbs.values) {
                                    this.ia(t.breadcrumbs);
                                }
                                return t;
                            },
                            ia: function (t) {
                                var e, i, n, s = [
                                        'to',
                                        'from',
                                        'url'
                                    ], o = 0;;
                                for (; o < t.values.length; ++o) {
                                    if ((i = t.values[o]).hasOwnProperty('data') && m(i.data) && !C(i.data)) {
                                        var arg_105 = {};
                                        n = E(arg_105, i.data);
                                        var r = 0;;
                                        for (; r < s.length; ++r) {
                                            e = s[r];
                                            if (n.hasOwnProperty(e) && n[e]) {
                                                n[e] = _(n[e], this.k.maxUrlLength);
                                            }
                                        }
                                        t.values[o].data = n;
                                    }
                                }
                            },
                            ja: function () {
                                if (this.c || this.b) {
                                    var t = {};
                                    if (this.c && U.userAgent) {
                                        t.headers = { 'User-Agent': U.userAgent };
                                    }
                                    if (q.location && q.location.href) {
                                        t.url = q.location.href;
                                    }
                                    if (this.b && N.referrer) {
                                        if (!t.headers) {
                                            t.headers = {};
                                        }
                                        t.headers.Referer = N.referrer;
                                    }
                                    return t;
                                }
                            },
                            y: function () {
                                this.ka = 0;
                                this.la = null;
                            },
                            ma: function () {
                                var var_93 = this.ka && n() - this.la < this.ka;
                                return var_93;
                            },
                            na: function (t) {
                                var e = this.e;
                                var var_94 = !(!e || t.message !== e.message || t.transaction !== e.transaction) && (t.stacktrace || e.stacktrace ? P(t.stacktrace, e.stacktrace) : t.exception || e.exception ? T(t.exception, e.exception) : !t.fingerprint && !e.fingerprint || Boolean(t.fingerprint && e.fingerprint) && JSON.stringify(t.fingerprint) === JSON.stringify(e.fingerprint));
                                return var_94;
                            },
                            oa: function (t) {
                                if (!this.ma()) {
                                    var e = t.status;
                                    if (400 === e || 401 === e || 429 === e) {
                                        var i;
                                        try {
                                            if (j()) {
                                                i = t.headers.get('Retry-After');
                                            } else {
                                                i = t.getResponseHeader('Retry-After');
                                            }
                                            i = 1000 * parseInt(i, 10);
                                        } catch (s) {
                                        }
                                        var var_95 = i || (2 * this.ka || 1000);
                                        this.ka = var_95;
                                        this.la = n();
                                    }
                                }
                            },
                            Y: function (t) {
                                var e = this.k;
                                var i = {
                                    project: this.i,
                                    logger: e.logger,
                                    platform: 'javascript'
                                };
                                var s = this.ja();
                                if (s) {
                                    i.request = s;
                                }
                                if (t.trimHeadFrames) {
                                    delete t.trimHeadFrames;
                                }
                                var arg_107 = {};
                                var arg_106 = E(arg_107, this.j.tags);
                                (t = E(i, t)).tags = E(arg_106, t.tags);
                                var arg_109 = {};
                                var arg_108 = E(arg_109, this.j.extra);
                                t.extra = E(arg_108, t.extra);
                                t.extra['session:duration'] = n() - this.s;
                                if (this.u && this.u.length > 0) {
                                    t.breadcrumbs = { values: [].slice.call(this.u, 0) };
                                }
                                if (this.j.user) {
                                    t.user = this.j.user;
                                }
                                if (e.environment) {
                                    t.environment = e.environment;
                                }
                                if (e.release) {
                                    t.release = e.release;
                                }
                                if (e.serverName) {
                                    t.server_name = e.serverName;
                                }
                                t = this.pa(t);
                                Object.keys(t).forEach(arg_110);
                                if (v(e.dataCallback)) {
                                    var var_96 = e.dataCallback(t) || t;
                                    t = var_96;
                                }
                                if (t && !k(t) && (!v(e.shouldSendCallback) || e.shouldSendCallback(t))) {
                                    var var_97 = null;
                                    if (this.ma()) {
                                        var_97 = void this.z('warn', 'Raven dropped error due to backoff: ', t);
                                    } else {
                                        var_97 = void ('number' == typeof e.sampleRate ? Math.random() < e.sampleRate && this.qa(t) : this.qa(t));
                                    }
                                    return var_97;
                                }
                                function arg_110(e) {
                                    if (null == t[e] || '' === t[e] || k(t[e])) {
                                        delete t[e];
                                    }
                                }
                            },
                            pa: function (t) {
                                var var_98 = F(t, this.k.sanitizeKeys);
                                return var_98;
                            },
                            ra: function () {
                                var var_99 = L();
                                return var_99;
                            },
                            qa: function (t, e) {
                                var i = this;
                                var n = this.k;
                                if (this.isSetup()) {
                                    t = this.ha(t);
                                    if (!this.k.allowDuplicates && this.na(t)) {
                                        var var_101 = void this.z('warn', 'Raven dropped repeat event: ', t);
                                        return var_101;
                                    }
                                    var var_100 = t.event_id || (t.event_id = this.ra());
                                    this.f = var_100;
                                    this.e = t;
                                    this.z('debug', 'Raven about to send:', t);
                                    var s = {
                                        sentry_version: '7',
                                        sentry_client: 'raven-js/' + this.VERSION,
                                        sentry_key: this.h
                                    };
                                    if (this.I) {
                                        s.sentry_secret = this.I;
                                    }
                                    var o = t.exception && t.exception.values[0];
                                    if (this.k.autoBreadcrumbs && this.k.autoBreadcrumbs.sentry) {
                                        var arg_112 = {
                                            category: 'sentry',
                                            message: o ? (o.type ? o.type + ': ' : '') + o.value : t.message,
                                            event_id: t.event_id,
                                            level: t.level || 'error'
                                        };
                                        this.captureBreadcrumb(arg_112);
                                    }
                                    var r = this.K;
                                    var arg_111 = {
                                        url: r,
                                        auth: s,
                                        data: t,
                                        options: n,
                                        onSuccess: function () {
                                            i.y();
                                            var arg_113 = {
                                                data: t,
                                                src: r
                                            };
                                            i.$('success', arg_113);
                                            if (e) {
                                                e();
                                            }
                                        },
                                        onError: function (n) {
                                            i.z('error', 'Raven transport failed to send: ', n);
                                            if (n.request) {
                                                i.oa(n.request);
                                            }
                                            var arg_114 = {
                                                data: t,
                                                src: r
                                            };
                                            i.$('failure', arg_114);
                                            var var_102 = n || new Error('Raven send failed (no additional details provided)');
                                            n = var_102;
                                            if (e) {
                                                e(n);
                                            }
                                        }
                                    };
                                    (n.transport || this._makeRequest).call(this, arg_111);
                                }
                            },
                            _makeRequest: function (t) {
                                var e = t.url + '?' + A(t.auth);
                                var i = null;
                                var n = {};
                                if (t.options.headers) {
                                    i = this.sa(t.options.headers);
                                }
                                if (t.options.fetchParameters) {
                                    n = this.sa(t.options.fetchParameters);
                                }
                                if (j()) {
                                    n.body = a(t.data);
                                    var arg_115 = {};
                                    var s = E(arg_115, this.l);
                                    var o = E(s, n);
                                    if (i) {
                                        o.headers = i;
                                    }
                                    var var_103 = q.fetch(e, o).then(arg_116)['catch'](arg_117);
                                    return var_103;
                                    function arg_116(e) {
                                        if (e.ok) {
                                            if (t.onSuccess) {
                                                t.onSuccess();
                                            }
                                        } else {
                                            var arg_118 = 'Sentry error code: ' + e.status;
                                            var i = new Error(arg_118);
                                            i.request = e;
                                            if (t.onError) {
                                                t.onError(i);
                                            }
                                        }
                                    }
                                    function arg_117() {
                                        if (t.onError) {
                                            var arg_119 = new Error('Sentry error code: network unavailable');
                                            t.onError(arg_119);
                                        }
                                    }
                                }
                                var r = q.XMLHttpRequest && new q.XMLHttpRequest();
                                if (r) {
                                    if ('withCredentials' in r || 'undefined' != typeof XDomainRequest) {
                                        if ('withCredentials' in r) {
                                            r.onreadystatechange = function () {
                                                if (4 === r.readyState) {
                                                    if (200 === r.status) {
                                                        if (t.onSuccess) {
                                                            t.onSuccess();
                                                        }
                                                    } else {
                                                        if (t.onError) {
                                                            var arg_121 = 'Sentry error code: ' + r.status;
                                                            var e = new Error(arg_121);
                                                            e.request = r;
                                                            t.onError(e);
                                                        }
                                                    }
                                                }
                                            };
                                        } else {
                                            r = new XDomainRequest();
                                            e = e.replace(/^https?:/, '');
                                            if (t.onSuccess) {
                                                r.onload = t.onSuccess;
                                            }
                                            if (t.onError) {
                                                r.onerror = function () {
                                                    var e = new Error('Sentry error code: XDomainRequest');
                                                    e.request = r;
                                                    t.onError(e);
                                                };
                                            }
                                        }
                                        r.open('POST', e);
                                        if (i) {
                                            x(i, arg_122);
                                            function arg_122(t, e) {
                                                r.setRequestHeader(t, e);
                                            }
                                        }
                                        var arg_120 = a(t.data);
                                        r.send(arg_120);
                                    }
                                }
                            },
                            sa: function (t) {
                                var e = {};
                                for (var i in t)
                                    if (t.hasOwnProperty(i)) {
                                        var n = t[i];
                                        e[i] = 'function' == typeof n ? n() : n;
                                    }
                                return e;
                            },
                            z: function (t) {
                                if (this.q[t] && (this.debug || this.k.debug)) {
                                    var arg_123 = [].slice.call(arguments, 1);
                                    Function.prototype.apply.call(this.q[t], this.p, arg_123);
                                }
                            },
                            Z: function (t, e) {
                                if (g(e)) {
                                    delete this.j[t];
                                } else {
                                    var arg_124 = this.j[t] || {};
                                    this.j[t] = E(arg_124, e);
                                }
                            }
                        };
                        o.prototype.setUser = o.prototype.setUserContext;
                        o.prototype.setReleaseContext = o.prototype.setRelease;
                        e.exports = o;
                        function n() {
                            var var_32 = +new Date();
                            return var_32;
                        }
                        function s(t, e) {
                            var var_33 = null;
                            if (v(e)) {
                                var_33 = function (i) {
                                    var var_34 = e(i, t);
                                    return var_34;
                                };
                            } else {
                                var_33 = e;
                            }
                            return var_33;
                        }
                        function o() {
                            for (var t in (this.a = !('object' != typeof JSON || !JSON.stringify), this.b = !g(N), this.c = !g(U), this.d = null, this.e = null, this.f = null, this.g = null, this.h = null, this.i = null, this.j = {}, this.k = {
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
                                    referrerPolicy: R() ? 'origin' : ''
                                }, this.m = 0, this.n = false, this.o = Error.stackTraceLimit, this.p = q.console || {}, this.q = {}, this.r = [], this.s = n(), this.t = [], this.u = [], this.v = null, this.w = q.location, this.x = this.w && this.w.href, this.y(), this.p))
                                this.q[t] = this.p[t];
                        }
                    }.call(this, arg_44));
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
                function (t, e, i) {
                    var arg_125 = null;
                    if ('undefined' != typeof global) {
                        arg_125 = global;
                    } else {
                        if ('undefined' != typeof self) {
                            arg_125 = self;
                        } else {
                            if ('undefined' != typeof window) {
                                arg_125 = window;
                            } else {
                                arg_125 = {};
                            }
                        }
                    }
                    (function (i) {
                        var n = t(3);
                        var s = null;
                        if ('undefined' != typeof window) {
                            s = window;
                        } else {
                            if (void 0 !== i) {
                                s = i;
                            } else {
                                if ('undefined' != typeof self) {
                                    s = self;
                                } else {
                                    s = {};
                                }
                            }
                        }
                        var o = s.Raven;
                        var r = new n();
                        r.noConflict = function () {
                            s.Raven = o;
                            return r;
                        };
                        r.afterLoad();
                        e.exports = r;
                        e.exports.Client = n;
                    }.call(this, arg_125));
                },
                { 3: 3 }
            ],
            5: [
                function (t, e, i) {
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
                    (function (i) {
                        var b = t(7);
                        var w = null;
                        if ('undefined' != typeof window) {
                            w = window;
                        } else {
                            if (void 0 !== i) {
                                w = i;
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
                        e.exports = {
                            isObject: function (t) {
                                var var_119 = 'object' == typeof t && null !== t;
                                return var_119;
                            },
                            isError: n,
                            isErrorEvent: function (t) {
                                var var_120 = '[object ErrorEvent]' === Object.prototype.toString.call(t);
                                return var_120;
                            },
                            isDOMError: s,
                            isDOMException: function (t) {
                                var var_121 = '[object DOMException]' === Object.prototype.toString.call(t);
                                return var_121;
                            },
                            isUndefined: o,
                            isFunction: function (t) {
                                var var_122 = 'function' == typeof t;
                                return var_122;
                            },
                            isPlainObject: r,
                            isString: a,
                            isArray: l,
                            isEmptyObject: function (t) {
                                if (!r(t)) {
                                    return false;
                                }
                                for (var e in t)
                                    if (t.hasOwnProperty(e))
                                        return false;
                                return true;
                            },
                            supportsErrorEvent: function () {
                                try {
                                    new ErrorEvent('');
                                    return true;
                                } catch (t) {
                                    return false;
                                }
                            },
                            supportsDOMError: function () {
                                try {
                                    new DOMError('');
                                    return true;
                                } catch (t) {
                                    return false;
                                }
                            },
                            supportsDOMException: function () {
                                try {
                                    new DOMException('');
                                    return true;
                                } catch (t) {
                                    return false;
                                }
                            },
                            supportsFetch: h,
                            supportsReferrerPolicy: function () {
                                if (!h()) {
                                    return false;
                                }
                                try {
                                    var arg_134 = { referrerPolicy: 'origin' };
                                    new Request('pickleRick', arg_134);
                                    return true;
                                } catch (t) {
                                    return false;
                                }
                            },
                            supportsPromiseRejectionEvent: function () {
                                var var_123 = 'function' == typeof PromiseRejectionEvent;
                                return var_123;
                            },
                            wrappedCallback: function (t) {
                                return var_124;
                                function var_124(e, i) {
                                    var n = t(e) || e;
                                    var var_125 = i && i(n) || n;
                                    return var_125;
                                }
                            },
                            each: c,
                            objectMerge: function (t, e) {
                                var var_126 = null;
                                if (e) {
                                    c(e, arg_135);
                                    var_126 = t;
                                    function arg_135(e, i) {
                                        t[e] = i;
                                    }
                                } else {
                                    var_126 = t;
                                }
                                return var_126;
                            },
                            truncate: u,
                            objectFrozen: function (t) {
                                var var_127 = !!Object.isFrozen && Object.isFrozen(t);
                                return var_127;
                            },
                            hasKey: d,
                            joinRegExp: p,
                            urlencode: function (t) {
                                var e = [];
                                c(t, arg_136);
                                var var_128 = e.join('&');
                                return var_128;
                                function arg_136(t, i) {
                                    var arg_137 = encodeURIComponent(t) + '=' + encodeURIComponent(i);
                                    e.push(arg_137);
                                }
                            },
                            uuid4: function () {
                                var t = w.crypto || w.msCrypto;
                                if (!o(t) && t.getRandomValues) {
                                    var e = new Uint16Array(8);
                                    t.getRandomValues(e);
                                    e[3] = 4095 & e[3] | 16384;
                                    e[4] = 16383 & e[4] | 32768;
                                    var var_130 = i(e[0]) + i(e[1]) + i(e[2]) + i(e[3]) + i(e[4]) + i(e[5]) + i(e[6]) + i(e[7]);
                                    return var_130;
                                    function i(t) {
                                        var e = t.toString(16);;
                                        for (; e.length < 4;) {
                                            e = '0' + e;
                                        }
                                        return e;
                                    }
                                }
                                var var_129 = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, arg_138);
                                return var_129;
                                function arg_138(t) {
                                    var e = 16 * Math.random() | 0;
                                    var var_131 = ('x' === t ? e : 3 & e | 8).toString(16);
                                    return var_131;
                                }
                            },
                            htmlTreeAsString: function (t) {
                                var e, i = [], n = 0, s = 0, o = ' > '.length;;
                                for (; t && n++ < 5 && !('html' === (e = f(t)) || n > 1 && s + i.length * o + e.length >= 80);) {
                                    i.push(e);
                                    s += e.length;
                                    t = t.parentNode;
                                }
                                var var_132 = i.reverse().join(' > ');
                                return var_132;
                            },
                            htmlElementAsString: f,
                            isSameException: function (t, e) {
                                var var_133 = !m(t, e) && (t = t.values[0], e = e.values[0], t.type === e.type && t.value === e.value && !function (t, e) {
                                    var var_134 = o(t) && o(e);
                                    return var_134;
                                }(t.stacktrace, e.stacktrace) && y(t.stacktrace, e.stacktrace));
                                return var_133;
                            },
                            isSameStacktrace: y,
                            parseUrl: function (t) {
                                if ('string' != typeof t) {
                                    var var_136 = {};
                                    return var_136;
                                }
                                var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                                var i = e[6] || '';
                                var n = e[8] || '';
                                var var_135 = {
                                    protocol: e[2],
                                    host: e[4],
                                    path: e[5],
                                    relative: e[5] + i + n
                                };
                                return var_135;
                            },
                            fill: function (t, e, i, n) {
                                if (null != t) {
                                    var s = t[e];
                                    t[e] = i(s);
                                    t[e].M = true;
                                    t[e].O = s;
                                    if (n) {
                                        var arg_139 = [
                                            t,
                                            e,
                                            s
                                        ];
                                        n.push(arg_139);
                                    }
                                }
                            },
                            safeJoin: function (t, e) {
                                if (!l(t)) {
                                    return '';
                                }
                                var i = [], s = 0;;
                                for (; s < t.length; s++) {
                                    try {
                                        var arg_140 = String(t[s]);
                                        i.push(arg_140);
                                    } catch (n) {
                                        i.push('[value cannot be serialized]');
                                    }
                                }
                                var var_137 = i.join(e);
                                return var_137;
                            },
                            serializeException: function _(t, e, i) {
                                if (!r(t)) {
                                    return t;
                                }
                                if ('number' != typeof (e = 'number' != typeof e ? k : e)) {
                                    i = x;
                                } else {
                                    i = i;
                                }
                                var n = function s(t, e) {
                                    var var_139 = null;
                                    if (0 === e) {
                                        var_139 = v(t);
                                    } else {
                                        if (r(t)) {
                                            var arg_143 = {};
                                            var_139 = Object.keys(t).reduce(arg_142, arg_143);
                                            function arg_142(i, n) {
                                                var arg_144 = e - 1;
                                                i[n] = s(t[n], arg_144);
                                                return i;
                                            }
                                        } else {
                                            if (Array.isArray(t)) {
                                                var_139 = t.map(arg_145);
                                                function arg_145(t) {
                                                    var arg_146 = e - 1;
                                                    var var_140 = s(t, arg_146);
                                                    return var_140;
                                                }
                                            } else {
                                                var_139 = v(t);
                                            }
                                        }
                                    }
                                    return var_139;
                                }(t, e);
                                var var_138 = null;
                                var arg_141 = b(n);
                                if (g(arg_141) > i) {
                                    var arg_147 = e - 1;
                                    var_138 = _(t, arg_147);
                                } else {
                                    var_138 = n;
                                }
                                return var_138;
                            },
                            serializeKeysForMessage: function (t, e) {
                                if ('number' == typeof t || 'string' == typeof t) {
                                    var var_141 = t.toString();
                                    return var_141;
                                }
                                if (!Array.isArray(t)) {
                                    return '';
                                }
                                if (0 === (t = t.filter(function (t) {
                                        var var_142 = 'string' == typeof t;
                                        return var_142;
                                    })).length) {
                                    return '[object has no keys]';
                                }
                                if ('number' != typeof e) {
                                    e = E;
                                } else {
                                    e = e;
                                }
                                if (t[0].length >= e) {
                                    var var_143 = t[0];
                                    return var_143;
                                }
                                var i = t.length;;
                                for (; i > 0; i--) {
                                    var n = t.slice(0, i).join(', ');
                                    if (!(n.length > e)) {
                                        var var_144 = null;
                                        if (i === t.length) {
                                            var_144 = n;
                                        } else {
                                            var_144 = n + '\u2026';
                                        }
                                        return var_144;
                                    }
                                }
                                return '';
                            },
                            sanitize: function (t, e) {
                                if (!l(e) || l(e) && 0 === e.length) {
                                    return t;
                                }
                                var i;
                                var n = p(e);
                                var o = '********';
                                try {
                                    var arg_148 = b(t);
                                    i = JSON.parse(arg_148);
                                } catch (s) {
                                    return t;
                                }
                                var var_145 = function a(t) {
                                    var var_146 = null;
                                    if (l(t)) {
                                        var_146 = t.map(arg_149);
                                        function arg_149(t) {
                                            var var_147 = a(t);
                                            return var_147;
                                        }
                                    } else {
                                        if (r(t)) {
                                            var arg_151 = {};
                                            var_146 = Object.keys(t).reduce(arg_150, arg_151);
                                            function arg_150(e, i) {
                                                e[i] = n.test(i) ? o : a(t[i]);
                                                return e;
                                            }
                                        } else {
                                            var_146 = t;
                                        }
                                    }
                                    return var_146;
                                }(i);
                                return var_145;
                            }
                        };
                        function n(t) {
                            switch (Object.prototype.toString.call(t)) {
                            case '[object Error]':
                            case '[object Exception]':
                            case '[object DOMException]': {
                                    return true;
                                }
                            default: {
                                    var var_104 = t instanceof Error;
                                    return var_104;
                                }
                            }
                        }
                        function s(t) {
                            var var_105 = '[object DOMError]' === Object.prototype.toString.call(t);
                            return var_105;
                        }
                        function o(t) {
                            var var_106 = void 0 === t;
                            return var_106;
                        }
                        function r(t) {
                            var var_107 = '[object Object]' === Object.prototype.toString.call(t);
                            return var_107;
                        }
                        function a(t) {
                            var var_108 = '[object String]' === Object.prototype.toString.call(t);
                            return var_108;
                        }
                        function l(t) {
                            var var_109 = '[object Array]' === Object.prototype.toString.call(t);
                            return var_109;
                        }
                        function h() {
                            if (!('fetch' in w)) {
                                return false;
                            }
                            try {
                                new Headers();
                                new Request('');
                                new Response();
                                return true;
                            } catch (t) {
                                return false;
                            }
                        }
                        function c(t, e) {
                            var i;
                            var n;
                            if (o(t.length)) {
                                for (i in t)
                                    d(t, i) && e.call(null, i, t[i]);
                            } else {
                                if (n = t.length) {
                                    i = 0;
                                    for (; i < n; i++) {
                                        e.call(null, i, t[i]);
                                    }
                                }
                            }
                        }
                        function u(t, e) {
                            if ('number' != typeof e) {
                                throw new Error('2nd argument to `truncate` function should be a number');
                            }
                            var var_110 = null;
                            if ('string' != typeof t || 0 === e) {
                                var_110 = t;
                            } else {
                                if (t.length <= e) {
                                    var_110 = t;
                                } else {
                                    var_110 = t.substr(0, e) + '\u2026';
                                }
                            }
                            return var_110;
                        }
                        function d(t, e) {
                            var var_111 = Object.prototype.hasOwnProperty.call(t, e);
                            return var_111;
                        }
                        function p(t) {
                            var e, i = [], n = 0, s = t.length;;
                            for (; n < s; n++) {
                                if (a(e = t[n])) {
                                    var arg_128 = e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
                                    i.push(arg_128);
                                } else {
                                    if (e && e.source) {
                                        i.push(e.source);
                                    }
                                }
                            }
                            var arg_127 = i.join('|');
                            var var_112 = new RegExp(arg_127, 'i');
                            return var_112;
                        }
                        function f(t) {
                            var e;
                            var i;
                            var n;
                            var s;
                            var o;
                            var r = [];
                            if (!t || !t.tagName) {
                                return '';
                            }
                            var arg_129 = t.tagName.toLowerCase();
                            r.push(arg_129);
                            if (t.id) {
                                var arg_130 = '#' + t.id;
                                r.push(arg_130);
                            }
                            if ((e = t.className) && a(e)) {
                                i = e.split(/\s+/);
                                o = 0;
                                for (; o < i.length; o++) {
                                    var arg_131 = '.' + i[o];
                                    r.push(arg_131);
                                }
                            }
                            var l = [
                                'type',
                                'name',
                                'title',
                                'alt'
                            ];
                            o = 0;
                            for (; o < l.length; o++) {
                                n = l[o];
                                if (s = t.getAttribute(n)) {
                                    var arg_132 = '[' + n + '="' + s + '"]';
                                    r.push(arg_132);
                                }
                            }
                            var var_113 = r.join('');
                            return var_113;
                        }
                        function m(t, e) {
                            var var_114 = !!(!!t ^ !!e);
                            return var_114;
                        }
                        function y(t, e) {
                            if (m(t, e)) {
                                return false;
                            }
                            var i = t.frames;
                            var n = e.frames;
                            if (void 0 === i || void 0 === n) {
                                return false;
                            }
                            if (i.length !== n.length) {
                                return false;
                            }
                            var s, o, r = 0;;
                            for (; r < i.length; r++) {
                                s = i[r];
                                o = n[r];
                                if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s['function'] !== o['function']) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        function g(t) {
                            var arg_133 = JSON.stringify(t);
                            var var_115 = function (t) {
                                var var_116 = ~-encodeURI(t).split(/%..|./).length;
                                return var_116;
                            }(arg_133);
                            return var_115;
                        }
                        function v(t) {
                            if ('string' == typeof t) {
                                var var_118 = u(t, 40);
                                return var_118;
                            }
                            if ('number' == typeof t || 'boolean' == typeof t || void 0 === t) {
                                return t;
                            }
                            var e = Object.prototype.toString.call(t);
                            var var_117 = null;
                            if ('[object Object]' === e) {
                                var_117 = '[Object]';
                            } else {
                                if ('[object Array]' === e) {
                                    var_117 = '[Array]';
                                } else {
                                    if ('[object Function]' === e) {
                                        if (t.name) {
                                            var_117 = '[Function: ' + t.name + ']';
                                        } else {
                                            var_117 = '[Function]';
                                        }
                                    } else {
                                        var_117 = t;
                                    }
                                }
                            }
                            return var_117;
                        }
                    }.call(this, arg_126));
                },
                { 7: 7 }
            ],
            6: [
                function (t, e, i) {
                    var arg_152 = null;
                    if ('undefined' != typeof global) {
                        arg_152 = global;
                    } else {
                        if ('undefined' != typeof self) {
                            arg_152 = self;
                        } else {
                            if ('undefined' != typeof window) {
                                arg_152 = window;
                            } else {
                                arg_152 = {};
                            }
                        }
                    }
                    (function (i) {
                        var s = t(5);
                        var o = {
                            collectWindowErrors: true,
                            debug: false
                        };
                        var r = null;
                        if ('undefined' != typeof window) {
                            r = window;
                        } else {
                            if (void 0 !== i) {
                                r = i;
                            } else {
                                if ('undefined' != typeof self) {
                                    r = self;
                                } else {
                                    r = {};
                                }
                            }
                        }
                        var a = [].slice;
                        var l = '?';
                        var h = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
                        o.report = function () {
                            var u;
                            var d;
                            var p = [];
                            var f = null;
                            var m = null;
                            var y = null;
                            c.subscribe = function (t) {
                                if (!d) {
                                    u = r.onerror;
                                    r.onerror = e;
                                    d = true;
                                }
                                p.push(t);
                            };
                            c.unsubscribe = function (t) {
                                var e = p.length - 1;;
                                for (; e >= 0; --e) {
                                    if (p[e] === t) {
                                        p.splice(e, 1);
                                    }
                                }
                            };
                            c.uninstall = function () {
                                if (d) {
                                    r.onerror = u;
                                    d = false;
                                    u = void 0;
                                }
                                p = [];
                            };
                            return c;
                            function t(e, i) {
                                var n = null;
                                if (!i || o.collectWindowErrors) {
                                    for (var s in p)
                                        if (p.hasOwnProperty(s))
                                            try {
                                                var arg_154 = a.call(arguments, 2);
                                                var arg_153 = [e].concat(arg_154);
                                                p[s].apply(null, arg_153);
                                            } catch (t) {
                                                n = t;
                                            }
                                    if (n) {
                                        throw n;
                                    }
                                }
                            }
                            function e(e, r, a, c, d) {
                                var p = null;
                                if (s.isErrorEvent(d)) {
                                    p = d.error;
                                } else {
                                    p = d;
                                }
                                var f = null;
                                if (s.isErrorEvent(e)) {
                                    f = e.message;
                                } else {
                                    f = e;
                                }
                                if (y) {
                                    o.computeStackTrace.augmentStackTraceWithInitialElement(y, r, a, f);
                                    i();
                                } else {
                                    if (p && s.isError(p)) {
                                        var arg_155 = o.computeStackTrace(p);
                                        t(arg_155, true);
                                    } else {
                                        var m;
                                        var g = {
                                            url: r,
                                            line: a,
                                            column: c
                                        };
                                        var v = void 0;
                                        if ('[object String]' === {}.toString.call(f)) {
                                            if (m = f.match(h)) {
                                                v = m[1];
                                                f = m[2];
                                            }
                                        }
                                        g.func = l;
                                        var arg_156 = {
                                            name: v,
                                            message: f,
                                            url: n(),
                                            stack: [g]
                                        };
                                        t(arg_156, true);
                                    }
                                }
                                var var_149 = !!u && u.apply(this, arguments);
                                return var_149;
                            }
                            function i() {
                                var e = y;
                                var i = f;
                                f = null;
                                y = null;
                                m = null;
                                var arg_157 = [
                                    e,
                                    false
                                ].concat(i);
                                t.apply(null, arg_157);
                            }
                            function c(t, e) {
                                var n = a.call(arguments, 1);
                                if (y) {
                                    if (m === t) {
                                        return;
                                    }
                                    i();
                                }
                                var s = o.computeStackTrace(t);
                                y = s;
                                m = t;
                                f = n;
                                var arg_159 = null;
                                if (s.incomplete) {
                                    arg_159 = 2000;
                                } else {
                                    arg_159 = 0;
                                }
                                setTimeout(arg_158, arg_159);
                                if (false !== e) {
                                    throw t;
                                }
                                function arg_158() {
                                    if (m === t) {
                                        i();
                                    }
                                }
                            }
                        }();
                        o.computeStackTrace = function () {
                            s.augmentStackTraceWithInitialElement = e;
                            s.computeStackTraceFromStackProp = t;
                            return s;
                            function t(t) {
                                if ('undefined' != typeof t.stack && t.stack) {
                                    var e, i, s, o = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, r = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, h = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, c = /\((\S*)(?::(\d+))(?::(\d+))\)/, u = t.stack.split('\n'), d = [], p = (/^(.*) is undefined$/.exec(t.message), 0), f = u.length;;
                                    for (; p < f; ++p) {
                                        if (i = o.exec(u[p])) {
                                            var m = i[2] && 0 === i[2].indexOf('native');
                                            if (i[2] && 0 === i[2].indexOf('eval') && (e = c.exec(i[2]))) {
                                                i[2] = e[1];
                                                i[3] = e[2];
                                                i[4] = e[3];
                                            }
                                            s = {
                                                url: m ? null : i[2],
                                                func: i[1] || l,
                                                args: m ? [i[2]] : [],
                                                line: i[3] ? +i[3] : null,
                                                column: i[4] ? +i[4] : null
                                            };
                                        } else {
                                            if (i = r.exec(u[p])) {
                                                s = {
                                                    url: i[2],
                                                    func: i[1] || l,
                                                    args: [],
                                                    line: +i[3],
                                                    column: i[4] ? +i[4] : null
                                                };
                                            } else {
                                                var var_151 = i = a.exec(u[p]);
                                                if (!var_151) {
                                                    continue;
                                                }
                                                if (i[3] && i[3].indexOf(' > eval') > -1 && (e = h.exec(i[3]))) {
                                                    i[3] = e[1];
                                                    i[4] = e[2];
                                                    i[5] = null;
                                                } else {
                                                    if (!(0 !== p || i[5] || 'undefined' == typeof t.columnNumber)) {
                                                        d[0].column = t.columnNumber + 1;
                                                    }
                                                }
                                                s = {
                                                    url: i[3],
                                                    func: i[1] || l,
                                                    args: i[2] ? i[2].split(',') : [],
                                                    line: i[4] ? +i[4] : null,
                                                    column: i[5] ? +i[5] : null
                                                };
                                            }
                                        }
                                        if (!s.func && s.line) {
                                            s.func = l;
                                        }
                                        if (s.url && 'blob:' === s.url.substr(0, 5)) {
                                            var y = new XMLHttpRequest();
                                            y.open('GET', s.url, false);
                                            y.send(null);
                                            if (200 === y.status) {
                                                var g = y.responseText || '';
                                                var v = (g = g.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                                                if (v) {
                                                    var b = v[1];
                                                    if ('~' === b.charAt(0)) {
                                                        b = ('undefined' == typeof document || null == document.location ? '' : document.location.origin ? document.location.origin : document.location.protocol + '//' + document.location.hostname + (document.location.port ? ':' + document.location.port : '')) + b.slice(1);
                                                    }
                                                    s.url = b.slice(0, -4);
                                                }
                                            }
                                        }
                                        d.push(s);
                                    }
                                    var var_150 = null;
                                    if (d.length) {
                                        var_150 = {
                                            name: t.name,
                                            message: t.message,
                                            url: n(),
                                            stack: d
                                        };
                                    } else {
                                        var_150 = null;
                                    }
                                    return var_150;
                                }
                            }
                            function e(t, e, i, n) {
                                var s = {
                                    url: e,
                                    line: i
                                };
                                if (s.url && s.line) {
                                    t.incomplete = false;
                                    if (!s.func) {
                                        s.func = l;
                                    }
                                    if (t.stack.length > 0 && t.stack[0].url === s.url) {
                                        if (t.stack[0].line === s.line) {
                                            return false;
                                        }
                                        if (!t.stack[0].line && t.stack[0].func === s.func) {
                                            t.stack[0].line = s.line;
                                            var var_152 = false;
                                            return var_152;
                                        }
                                    }
                                    t.stack.unshift(s);
                                    t.partial = true;
                                    return true;
                                }
                                t.incomplete = true;
                                return false;
                            }
                            function i(t, r) {
                                var a, h, c = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, u = [], d = {}, p = false, f = i.caller;;
                                for (; f && !p; f = f.caller) {
                                    if (f !== s && f !== o.report) {
                                        h = {
                                            url: null,
                                            func: l,
                                            line: null,
                                            column: null
                                        };
                                        if (f.name) {
                                            h.func = f.name;
                                        } else {
                                            var arg_163 = f.toString();
                                            if (a = c.exec(arg_163)) {
                                                h.func = a[1];
                                            }
                                        }
                                        if ('undefined' == typeof h.func) {
                                            try {
                                                var arg_164 = a.input.indexOf('{');
                                                h.func = a.input.substring(0, arg_164);
                                            } catch (y) {
                                            }
                                        }
                                        if (d['' + f]) {
                                            p = true;
                                        } else {
                                            d['' + f] = true;
                                        }
                                        u.push(h);
                                    }
                                }
                                if (r) {
                                    u.splice(0, r);
                                }
                                var m = {
                                    name: t.name,
                                    message: t.message,
                                    url: n(),
                                    stack: u
                                };
                                var arg_160 = t.sourceURL || t.fileName;
                                var arg_161 = t.line || t.lineNumber;
                                var arg_162 = t.message || t.description;
                                e(m, arg_160, arg_161, arg_162);
                                return m;
                            }
                            function s(e, s) {
                                var a = null;
                                if (null == s) {
                                    s = 0;
                                } else {
                                    s = +s;
                                }
                                try {
                                    if (a = t(e)) {
                                        return a;
                                    }
                                } catch (r) {
                                    if (o.debug) {
                                        throw r;
                                    }
                                }
                                try {
                                    var arg_165 = s + 1;
                                    if (a = i(e, arg_165)) {
                                        return a;
                                    }
                                } catch (r) {
                                    if (o.debug) {
                                        throw r;
                                    }
                                }
                                var var_153 = {
                                    name: e.name,
                                    message: e.message,
                                    url: n()
                                };
                                return var_153;
                            }
                        }();
                        e.exports = o;
                        function n() {
                            var var_148 = null;
                            if ('undefined' == typeof document || null == document.location) {
                                var_148 = '';
                            } else {
                                var_148 = document.location.href;
                            }
                            return var_148;
                        }
                    }.call(this, arg_152));
                },
                { 5: 5 }
            ],
            7: [
                function (t, e, i) {
                    (e.exports = function (t, e, i, n) {
                        var arg_169 = s(e, n);
                        var var_158 = JSON.stringify(t, arg_169, i);
                        return var_158;
                    }).getSerialize = s;
                    function n(t, e) {
                        var i = 0;;
                        for (; i < t.length; ++i) {
                            if (t[i] === e) {
                                return i;
                            }
                        }
                        var var_154 = -1;
                        return var_154;
                    }
                    function s(t, e) {
                        var i = [];
                        var s = [];
                        if (null == e) {
                            e = function (t, e) {
                                var var_156 = null;
                                if (i[0] === e) {
                                    var_156 = '[Circular ~]';
                                } else {
                                    var arg_166 = n(i, e);
                                    var_156 = '[Circular ~.' + s.slice(0, arg_166).join('.') + ']';
                                }
                                return var_156;
                            };
                        }
                        return var_155;
                        function var_155(o, r) {
                            if (i.length > 0) {
                                var a = n(i, this);
                                if (~a) {
                                    var arg_167 = a + 1;
                                    i.splice(arg_167);
                                } else {
                                    i.push(this);
                                }
                                if (~a) {
                                    var arg_168 = 1 / 0;
                                    s.splice(a, arg_168, o);
                                } else {
                                    s.push(o);
                                }
                                if (~n(i, r)) {
                                    r = e.call(this, o, r);
                                }
                            } else {
                                i.push(r);
                            }
                            var var_157 = null;
                            if (null == t) {
                                if (r instanceof Error) {
                                    var_157 = function (t) {
                                        var e = {
                                            stack: t.stack,
                                            message: t.message,
                                            name: t.name
                                        };
                                        for (var i in t)
                                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                        return e;
                                    }(r);
                                } else {
                                    var_157 = r;
                                }
                            } else {
                                var_157 = t.call(this, o, r);
                            }
                            return var_157;
                        }
                    }
                },
                {}
            ],
            8: [
                function (t, e, i) {
                    e.exports = function (t, e, i) {
                        var var_172 = null;
                        if (e) {
                            if (i) {
                                var_172 = m(e, t);
                            } else {
                                var_172 = function (t, e) {
                                    var arg_195 = m(t, e);
                                    var var_173 = d(arg_195);
                                    return var_173;
                                }(e, t);
                            }
                        } else {
                            if (i) {
                                var_172 = f(t);
                            } else {
                                var_172 = function (t) {
                                    var arg_196 = f(t);
                                    var var_174 = d(arg_196);
                                    return var_174;
                                }(t);
                            }
                        }
                        return var_172;
                    };
                    function n(t, e) {
                        var i = (65535 & t) + (65535 & e);
                        var var_159 = (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i;
                        return var_159;
                    }
                    function s(t, e, i, s, o, r) {
                        var arg_172 = n(e, t);
                        var arg_173 = n(s, r);
                        var arg_171 = n(arg_172, arg_173);
                        var arg_170 = function (t, e) {
                            var var_161 = t << e | t >>> 32 - e;
                            return var_161;
                        }(arg_171, o);
                        var var_160 = n(arg_170, i);
                        return var_160;
                    }
                    function o(t, e, i, n, o, r, a) {
                        var arg_174 = e & i | ~e & n;
                        var var_162 = s(arg_174, t, e, o, r, a);
                        return var_162;
                    }
                    function r(t, e, i, n, o, r, a) {
                        var arg_175 = e & n | i & ~n;
                        var var_163 = s(arg_175, t, e, o, r, a);
                        return var_163;
                    }
                    function a(t, e, i, n, o, r, a) {
                        var arg_176 = e ^ i ^ n;
                        var var_164 = s(arg_176, t, e, o, r, a);
                        return var_164;
                    }
                    function l(t, e, i, n, o, r, a) {
                        var arg_177 = i ^ (e | ~n);
                        var var_165 = s(arg_177, t, e, o, r, a);
                        return var_165;
                    }
                    function h(t, e) {
                        t[e >> 5] |= 128 << e % 32;
                        t[14 + (e + 64 >>> 9 << 4)] = e;
                        var i;
                        var s;
                        var h;
                        var c;
                        var u;
                        var d = 1732584193;
                        var p = -271733879;
                        var f = -1732584194;
                        var m = 271733878;
                        i = 0;
                        for (; i < t.length; i += 16) {
                            s = d;
                            h = p;
                            c = f;
                            u = m;
                            d = o(d, p, f, m, t[i], 7, -680876936);
                            m = o(m, d, p, f, t[i + 1], 12, -389564586);
                            f = o(f, m, d, p, t[i + 2], 17, 606105819);
                            p = o(p, f, m, d, t[i + 3], 22, -1044525330);
                            d = o(d, p, f, m, t[i + 4], 7, -176418897);
                            m = o(m, d, p, f, t[i + 5], 12, 1200080426);
                            f = o(f, m, d, p, t[i + 6], 17, -1473231341);
                            p = o(p, f, m, d, t[i + 7], 22, -45705983);
                            d = o(d, p, f, m, t[i + 8], 7, 1770035416);
                            m = o(m, d, p, f, t[i + 9], 12, -1958414417);
                            f = o(f, m, d, p, t[i + 10], 17, -42063);
                            p = o(p, f, m, d, t[i + 11], 22, -1990404162);
                            d = o(d, p, f, m, t[i + 12], 7, 1804603682);
                            m = o(m, d, p, f, t[i + 13], 12, -40341101);
                            f = o(f, m, d, p, t[i + 14], 17, -1502002290);
                            d = r(d, p = o(p, f, m, d, t[i + 15], 22, 1236535329), f, m, t[i + 1], 5, -165796510);
                            m = r(m, d, p, f, t[i + 6], 9, -1069501632);
                            f = r(f, m, d, p, t[i + 11], 14, 643717713);
                            p = r(p, f, m, d, t[i], 20, -373897302);
                            d = r(d, p, f, m, t[i + 5], 5, -701558691);
                            m = r(m, d, p, f, t[i + 10], 9, 38016083);
                            f = r(f, m, d, p, t[i + 15], 14, -660478335);
                            p = r(p, f, m, d, t[i + 4], 20, -405537848);
                            d = r(d, p, f, m, t[i + 9], 5, 568446438);
                            m = r(m, d, p, f, t[i + 14], 9, -1019803690);
                            f = r(f, m, d, p, t[i + 3], 14, -187363961);
                            p = r(p, f, m, d, t[i + 8], 20, 1163531501);
                            d = r(d, p, f, m, t[i + 13], 5, -1444681467);
                            m = r(m, d, p, f, t[i + 2], 9, -51403784);
                            f = r(f, m, d, p, t[i + 7], 14, 1735328473);
                            d = a(d, p = r(p, f, m, d, t[i + 12], 20, -1926607734), f, m, t[i + 5], 4, -378558);
                            m = a(m, d, p, f, t[i + 8], 11, -2022574463);
                            f = a(f, m, d, p, t[i + 11], 16, 1839030562);
                            p = a(p, f, m, d, t[i + 14], 23, -35309556);
                            d = a(d, p, f, m, t[i + 1], 4, -1530992060);
                            m = a(m, d, p, f, t[i + 4], 11, 1272893353);
                            f = a(f, m, d, p, t[i + 7], 16, -155497632);
                            p = a(p, f, m, d, t[i + 10], 23, -1094730640);
                            d = a(d, p, f, m, t[i + 13], 4, 681279174);
                            m = a(m, d, p, f, t[i], 11, -358537222);
                            f = a(f, m, d, p, t[i + 3], 16, -722521979);
                            p = a(p, f, m, d, t[i + 6], 23, 76029189);
                            d = a(d, p, f, m, t[i + 9], 4, -640364487);
                            m = a(m, d, p, f, t[i + 12], 11, -421815835);
                            f = a(f, m, d, p, t[i + 15], 16, 530742520);
                            d = l(d, p = a(p, f, m, d, t[i + 2], 23, -995338651), f, m, t[i], 6, -198630844);
                            m = l(m, d, p, f, t[i + 7], 10, 1126891415);
                            f = l(f, m, d, p, t[i + 14], 15, -1416354905);
                            p = l(p, f, m, d, t[i + 5], 21, -57434055);
                            d = l(d, p, f, m, t[i + 12], 6, 1700485571);
                            m = l(m, d, p, f, t[i + 3], 10, -1894986606);
                            f = l(f, m, d, p, t[i + 10], 15, -1051523);
                            p = l(p, f, m, d, t[i + 1], 21, -2054922799);
                            d = l(d, p, f, m, t[i + 8], 6, 1873313359);
                            m = l(m, d, p, f, t[i + 15], 10, -30611744);
                            f = l(f, m, d, p, t[i + 6], 15, -1560198380);
                            p = l(p, f, m, d, t[i + 13], 21, 1309151649);
                            d = l(d, p, f, m, t[i + 4], 6, -145523070);
                            m = l(m, d, p, f, t[i + 11], 10, -1120210379);
                            f = l(f, m, d, p, t[i + 2], 15, 718787259);
                            p = l(p, f, m, d, t[i + 9], 21, -343485551);
                            d = n(d, s);
                            p = n(p, h);
                            f = n(f, c);
                            m = n(m, u);
                        }
                        var var_166 = [
                            d,
                            p,
                            f,
                            m
                        ];
                        return var_166;
                    }
                    function c(t) {
                        var e;
                        var i = '';
                        var n = 32 * t.length;
                        e = 0;
                        for (; e < n; e += 8) {
                            var arg_178 = t[e >> 5] >>> e % 32 & 255;
                            i += String.fromCharCode(arg_178);
                        }
                        return i;
                    }
                    function u(t) {
                        var e;
                        var i = [];
                        i[(t.length >> 2) - 1] = void 0;
                        e = 0;
                        for (; e < i.length; e += 1) {
                            i[e] = 0;
                        }
                        var n = 8 * t.length;
                        e = 0;
                        for (; e < n; e += 8) {
                            var arg_179 = e / 8;
                            i[e >> 5] |= (255 & t.charCodeAt(arg_179)) << e % 32;
                        }
                        return i;
                    }
                    function d(t) {
                        var e;
                        var i;
                        var n = '0123456789abcdef';
                        var s = '';
                        i = 0;
                        for (; i < t.length; i += 1) {
                            e = t.charCodeAt(i);
                            var arg_180 = e >>> 4 & 15;
                            var arg_181 = 15 & e;
                            s += n.charAt(arg_180) + n.charAt(arg_181);
                        }
                        return s;
                    }
                    function p(t) {
                        var arg_182 = encodeURIComponent(t);
                        var var_167 = unescape(arg_182);
                        return var_167;
                    }
                    function f(t) {
                        var arg_183 = p(t);
                        var var_168 = function (t) {
                            var arg_185 = u(t);
                            var arg_186 = 8 * t.length;
                            var arg_184 = h(arg_185, arg_186);
                            var var_169 = c(arg_184);
                            return var_169;
                        }(arg_183);
                        return var_168;
                    }
                    function m(t, e) {
                        var arg_187 = p(t);
                        var arg_188 = p(e);
                        var var_170 = function (t, e) {
                            var i;
                            var n;
                            var s = u(t);
                            var o = [];
                            var r = [];
                            o[15] = r[15] = void 0;
                            if (s.length > 16) {
                                var arg_194 = 8 * t.length;
                                s = h(s, arg_194);
                            }
                            i = 0;
                            for (; i < 16; i += 1) {
                                o[i] = 909522486 ^ s[i];
                                r[i] = 1549556828 ^ s[i];
                            }
                            var arg_191 = u(e);
                            var arg_189 = o.concat(arg_191);
                            var arg_190 = 512 + 8 * e.length;
                            n = h(arg_189, arg_190);
                            var arg_193 = r.concat(n);
                            var arg_192 = h(arg_193, 640);
                            var var_171 = c(arg_192);
                            return var_171;
                        }(arg_187, arg_188);
                        return var_170;
                    }
                },
                {}
            ]
        }, {}, [4])(4);
        return var_28;
    }
    function x(t, e) {
        try {
            var i = new RegExp(e).exec(t);
            var var_177 = null;
            if (i) {
                var_177 = {
                    name: i[1] || 'Other',
                    major: i[2] || '0',
                    minor: i[3] || '0',
                    patch: i[4] || '0'
                };
            } else {
                var_177 = null;
            }
            return var_177;
        } catch (gn) {
            return null;
        }
    }
    function E(t, e) {
        var i = null, n = null, s = -1, o = false;;
        for (; ++s < e.length && !o;) {
            i = e[s];
            var r = -1;;
            for (; ++r < i.patterns.length && !o;) {
                o = null !== (n = x(t, i.patterns[r]));
            }
        }
        var var_178 = null;
        if (o) {
            var var_179 = i.family || i.name_replace || n.name;
            n.family = var_179;
            if (i.name_replace) {
                n.name = i.name_replace;
            }
            if (i.major_replace) {
                n.major = i.major_replace;
            }
            if (i.minor_replace) {
                n.minor = i.minor_replace;
            }
            if (i.patch_replace) {
                n.minor = i.patch_replace;
            }
            var_178 = n;
        } else {
            var_178 = {
                family: 'Other',
                name: 'Other',
                major: '0',
                minor: '0',
                patch: '0'
            };
        }
        return var_178;
    }
    function _() {
        var t = this;
        var e = k.getBrowser();
        var i = k.getAgent();
        this.agent = i.toLowerCase();
        var var_180 = window.navigator.userLanguage || window.navigator.language;
        this.language = var_180;
        this.isCSS1 = 'CSS1Compat' === (document.compatMode || '');
        this.width = function () {
            var var_182 = null;
            if (window.innerWidth && window.document.documentElement.clientWidth) {
                var_182 = Math.min(window.innerWidth, document.documentElement.clientWidth);
            } else {
                var var_183 = window.innerWidth || window.document.documentElement.clientWidth || document.body.clientWidth;
                var_182 = var_183;
            }
            return var_182;
        };
        this.height = function () {
            var var_184 = window.innerHeight || window.document.documentElement.clientHeight || document.body.clientHeight;
            return var_184;
        };
        this.scrollX = function () {
            var var_185 = null;
            if (window.pageXOffset !== undefined) {
                var_185 = window.pageXOffset;
            } else {
                if (t.isCSS1) {
                    var_185 = document.documentElement.scrollLeft;
                } else {
                    var_185 = document.body.scrollLeft;
                }
            }
            return var_185;
        };
        this.scrollY = function () {
            var var_186 = null;
            if (window.pageYOffset !== undefined) {
                var_186 = window.pageYOffset;
            } else {
                if (t.isCSS1) {
                    var_186 = document.documentElement.scrollTop;
                } else {
                    var_186 = document.body.scrollTop;
                }
            }
            return var_186;
        };
        this.type = 'Edge' === e.family ? 'edge' : 'Internet Explorer' === e.family ? 'ie' : 'Chrome' === e.family ? 'chrome' : 'Safari' === e.family ? 'safari' : 'Firefox' === e.family ? 'firefox' : e.family.toLowerCase();
        var var_181 = 1 * (e.major + '.' + e.minor) || 0;
        this.version = var_181;
        this.hasPostMessage = !!window.postMessage;
    }
    function L() {
        var t = this;
        this._bottom = 0;
        this._top = 0;
        this.storage = {};
        this.add = function (e) {
            t.storage[t._top] = e;
            t._top++;
            return e;
        };
        this.remove = function () {
            if (!t.empty()) {
                var e = t._bottom;
                var i = t.storage[e];
                t.storage[e] = null;
                t._bottom++;
                return i;
            }
        };
        this.empty = function () {
            var var_192 = t._top === t._bottom;
            return var_192;
        };
        this.size = function () {
            var var_193 = t._top - t._bottom;
            return var_193;
        };
    }
    function T() {
        this.children = [];
        this._events = [];
    }
    function M(t) {
        var e = { message: t.name + ': ' + t.message };
        if (t.stack) {
            e.stack_trace = { trace: t.stack };
        }
        j('report error', 'internal', 'debug', e);
        I('internal error', 'error', S.file);
    }
    function I(t, e, i) {
        if (P && window.Raven) {
            var arg_202 = {
                level: e,
                logger: i
            };
            Raven.captureMessage(t, arg_202);
        }
    }
    function j(t, e, i, n) {
        if (P && window.Raven) {
            var arg_203 = {
                message: t,
                category: e,
                level: i,
                data: n
            };
            Raven.captureBreadcrumb(arg_203);
        }
    }
    function R(t, e) {
        var i;
        var n = null;
        if ('attempts' in (e = e || {})) {
            n = e.attempts;
        } else {
            n = 1;
        }
        var s = e.delay || 0;
        var o = e.onFail;
        i = function (e, i, r) {
            t().then(e, arg_205);
            function arg_205(t) {
                var e = n-- > 0;
                if (o) {
                    var var_195 = false !== o(t) && e;
                    e = var_195;
                }
                if (e) {
                    setTimeout(r, s);
                } else {
                    i(t);
                }
            }
        };
        var var_194 = new Promise(arg_204);
        return var_194;
        function arg_204(t, e) {
            i(t, e, arg_206);
            function arg_206() {
                i(t, e, n);
            }
        }
    }
    function H(t) {
        var e = z[t];
        var var_203 = e || (t in F ? t : z[t] = function (t) {
            var e = t[0].toUpperCase() + t.slice(1), i = D.length;;
            for (; i--;) {
                if ((t = D[i] + e) in F) {
                    return t;
                }
            }
        }(t) || t);
        return var_203;
    }
    function W(t, e, i) {
        this.dom = null;
        this._clss = [];
        this._nodes = [];
        this._listeners = [];
        this._frag = null;
        if ('object' == typeof t) {
            this.dom = t;
            var n = [];
            var s = [];
            if (t.className) {
                s = t.className.split(' ');
            }
            var o = 0;;
            for (; o < s.length; o++) {
                if ('' !== s[o] && ' ' !== s[o]) {
                    n.push(s[o]);
                }
            }
            this._clss = n;
        } else {
            if (!(i !== undefined && null !== i)) {
                i = true;
            }
            if (t === undefined || 'string' == typeof t && (t.indexOf('#') >= 0 || t.indexOf('.') >= 0)) {
                if (t) {
                    e = t;
                }
                t = 'div';
            }
            this.dom = document.createElement(t);
            if (e) {
                if (e.indexOf('#') >= 0) {
                    this.dom.id = e.split('#')[1];
                } else {
                    if (e.indexOf('.') >= 0) {
                        e = e.split('.')[1];
                    }
                    this.addClass.call(this, e);
                }
            }
        }
        if (true === i) {
            this._frag = document.createDocumentFragment();
            this._frag.appendChild(this.dom);
        }
    }
    function N(t, e) {
        var arg_216 = e || 'div';
        q.self(this, W, arg_216, t);
        this.children = [];
        this._events = [];
    }
    function Z(t, e) {
        var i = Y[t];
        var n = null;
        return var_219;
        function var_219(t) {
            n = function (t) {
                var var_220 = [
                    t.windowX,
                    t.windowY,
                    Date.now()
                ];
                return var_220;
            }(t);
            e(i, n);
        }
    }
    function tt(t, e) {
        var i = K[t];
        var n = null;
        return var_221;
        function var_221(t) {
            n = function (t) {
                var e, i = t.touches && t.touches.length >= 1 ? t.touches : t.changedTouches, n = [], s = 0;;
                for (; s < i.length; s++) {
                    e = B.eventCoords(i[s]);
                    var arg_221 = [
                        i[s].identifier,
                        e.x,
                        e.y
                    ];
                    n.push(arg_221);
                }
                var arg_220 = Date.now();
                n.push(arg_220);
                return n;
            }(t);
            e(i, n);
        }
    }
    function et(t, e) {
        var i = G[t];
        var n = null;
        return var_222;
        function var_222(t) {
            n = function (t) {
                var var_223 = [
                    t.keyNum,
                    Date.now()
                ];
                return var_223;
            }(t);
            e(i, n);
        }
    }
    function it(t, e) {
        var i = Q[t];
        var n = null;
        var s = [];
        return var_224;
        function var_224(t) {
            if (null !== (n = function (t, e) {
                    if (t.acceleration === undefined || t.acceleration && t.acceleration.x === undefined) {
                        t.acceleration = {
                            x: 0,
                            y: 0,
                            z: 0
                        };
                    }
                    if (t.rotationRate === undefined || t.rotationRate && t.rotationRate.alpha === undefined) {
                        t.rotationRate = {
                            alpha: 0,
                            beta: 0,
                            gamma: 0
                        };
                    }
                    var i = [
                        t.acceleration.x,
                        t.acceleration.y,
                        t.acceleration.z,
                        t.rotationRate.alpha,
                        t.rotationRate.beta,
                        t.rotationRate.gamma,
                        Date.now()
                    ];
                    var n = [];
                    if (0 === e.length) {
                        e = i;
                        n = i;
                    } else {
                        var s, o = 0, r = 0;;
                        for (; r < 6; r++) {
                            s = e[r] - i[r];
                            n.push(i[r]);
                            o += Math.abs(s);
                        }
                        var arg_222 = Date.now();
                        n.push(arg_222);
                        e = i;
                        if (o <= 0) {
                            return null;
                        }
                    }
                    var var_225 = {
                        motion: n,
                        prevmotion: e
                    };
                    return var_225;
                }(t, s))) {
                s = n.prevmotion;
                n = n.motion;
                e(i, n);
            }
        }
    }
    function nt(t, e) {
        this._period = t;
        this._interval = e;
        this._date = [];
        this._data = [];
        this._prevTimestamp = 0;
        this._meanPeriod = 0;
        this._meanCounter = 0;
    }
    function st() {
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
    function ht(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        if (true !== lt && 'interactive' !== document.readyState && 'loaded' !== document.readyState && 'complete' !== document.readyState) {
            var arg_237 = {
                fn: t,
                args: e
            };
            rt.push(arg_237);
            if (false === at) {
                (function () {
                    if (document.addEventListener) {
                        document.addEventListener('DOMContentLoaded', ut);
                        window.addEventListener('load', ut);
                    } else {
                        document.attachEvent('onreadystatechange', ct);
                        window.attachEvent('onload', ut);
                    }
                    at = true;
                }());
            }
        } else {
            setTimeout(arg_238, 1);
            function arg_238() {
                t(e);
            }
        }
    }
    function ct() {
        if (!('interactive' !== document.readyState && 'loaded' !== document.readyState && 'complete' !== document.readyState)) {
            ut();
        }
    }
    function ut() {
        if (false === lt) {
            var t = 0;;
            for (; t < rt.length; t++) {
                rt[t].fn.apply(null, rt[t].args);
            }
            rt = [];
        }
        lt = true;
        if (document.removeEventListener) {
            document.removeEventListener('DOMContentLoaded', ut);
            window.removeEventListener('load', ut);
        } else {
            document.detachEvent('onreadystatechange', ct);
            window.detachEvent('onload', ut);
        }
    }
    function mt() {
        q.self(this, W, 'canvas');
        var t = this;
        this.element = this.dom;
        this.ctx = this.element.getContext('2d');
        this.scale = 1;
        var var_228 = window.devicePixelRatio || 1;
        this.dpr = var_228;
        this.clearColor = '#fff';
        this.ctx.roundedRect = function (e, i, n, s, o) {
            var r = null;
            if (n > 0) {
                r = o;
            } else {
                r = -o;
            }
            var a = null;
            if (s > 0) {
                a = o;
            } else {
                a = -o;
            }
            t.ctx.beginPath();
            var arg_242 = e + r;
            t.ctx.moveTo(arg_242, i);
            var arg_243 = e + n - r;
            t.ctx.lineTo(arg_243, i);
            var arg_244 = e + n;
            var arg_245 = e + n;
            var arg_246 = i + a;
            t.ctx.quadraticCurveTo(arg_244, i, arg_245, arg_246);
            var arg_247 = e + n;
            var arg_248 = i + s - a;
            t.ctx.lineTo(arg_247, arg_248);
            var arg_249 = e + n;
            var arg_250 = i + s;
            var arg_251 = e + n - r;
            var arg_252 = i + s;
            t.ctx.quadraticCurveTo(arg_249, arg_250, arg_251, arg_252);
            var arg_253 = e + r;
            var arg_254 = i + s;
            t.ctx.lineTo(arg_253, arg_254);
            var arg_255 = i + s;
            var arg_256 = i + s - a;
            t.ctx.quadraticCurveTo(e, arg_255, e, arg_256);
            var arg_257 = i + a;
            t.ctx.lineTo(e, arg_257);
            var arg_258 = e + r;
            t.ctx.quadraticCurveTo(e, i, arg_258, i);
            t.ctx.closePath();
        };
    }
    function yt(t, e, i) {
        var arg_259 = Math.max(t, e);
        var var_229 = Math.min(arg_259, i);
        return var_229;
    }
    function gt(t, e, i, n, s, o) {
        var r = (t - e) * (s - n) / (i - e) + n;
        var var_230 = null;
        if (false === o) {
            var_230 = r;
        } else {
            var arg_260 = Math.min(n, s);
            var arg_261 = Math.max(n, s);
            var_230 = yt(r, arg_260, arg_261);
        }
        return var_230;
    }
    function vt(t) {
        var var_231 = t * (Math.PI / 180);
        return var_231;
    }
    function bt(t) {
        var var_232 = 180 * t / Math.PI;
        return var_232;
    }
    function kt(t) {
        var var_233 = t || {};
        t = var_233;
        var var_234 = t.x || 0;
        this.x = var_234;
        var var_235 = t.y || 0;
        this.y = var_235;
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
    function xt(t, e, i) {
        q.self(this, kt, t);
        this.handleIn = new kt(e);
        this.handleOut = new kt(i);
        this.prev = null;
        this.next = null;
        this.index = 0;
    }
    function Et(t) {
        this._closed = false;
        this.stroke = false;
        this.fill = false;
        this.fillColor = '#fff';
        this.strokeColor = '#fff';
        this.strokeWidth = 1;
        this.showPoints = false;
        this.pointRadius = 0;
        this._head = null;
        this._tail = null;
        this.segments = [];
        this.addPoint = this.addPoint.bind(this);
        this.removePoint = this.removePoint.bind(this);
        this.forEachPoint = this.forEachPoint.bind(this);
        this.getBounding = this.getBounding.bind(this);
        this.getCenter = this.getCenter.bind(this);
        this.destroy = this.destroy.bind(this);
        if (t && t.length) {
            this.addPoints(t);
        }
    }
    function _t(t, e) {
        if (e.y <= t.y) {
            if (e.next.y > t.y && Ct(e, e.next, t) > 0) {
                return 1;
            }
        } else {
            if (e.next.y <= t.y && Ct(e, e.next, t) < 0) {
                var var_236 = -1;
                return var_236;
            }
        }
        return 0;
    }
    function Ct(t, e, i) {
        var var_237 = (e.x - t.x) * (i.y - t.y) - (i.x - t.x) * (e.y - t.y);
        return var_237;
    }
    function Ot(t) {
        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.a = 1;
        this.h = 1;
        this.s = 1;
        this.l = 1;
        if (t && t.indexOf('#') >= 0) {
            this.hex2rgb.call(this, t);
            this.rgb2hsl.call(this, this.r, this.g, this.b);
        }
    }
    function At(t, e, i) {
        if (i < 0) {
            i += 1;
        }
        if (i > 1) {
            i -= 1;
        }
        var var_249 = null;
        if (i < 1 / 6) {
            var_249 = t + 6 * (e - t) * i;
        } else {
            if (i < 0.5) {
                var_249 = e;
            } else {
                if (i < 2 / 3) {
                    var_249 = t + (e - t) * (2 / 3 - i) * 6;
                } else {
                    var_249 = t;
                }
            }
        }
        return var_249;
    }
    function Pt(t, e) {
        var i = t;
        var arg_289 = i.lastIndexOf('.') + 1;
        var n = i.substr(arg_289, i.length);
        if (!e) {
            e = {};
        }
        if (e.fallback && 'svg' === n && 'ie' === C.Browser.type && C.Browser.version <= 11) {
            var arg_290 = t.indexOf(n);
            i = t.substr(0, arg_290) + e.fallback;
        }
        if (e.prefix) {
            i = e.prefix + '/' + t;
        }
        this.attribs = { crossOrigin: e.crossOrigin || null };
        this.id = i;
        this.src = Tt.getLocation(i);
        this.ext = n;
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
    function Mt(t, e, i) {
        var n = t[e], s = n.length, o = null;;
        for (; --s > -1;) {
            o = n[s];
            n.splice(s, 1);
            o(i);
        }
        if ('error' === e) {
            t.load = [];
        } else {
            t.error = [];
        }
    }
    function It(t, e) {
        var i = t;
        if (!e) {
            e = {};
        }
        if (e.prefix) {
            i = e.prefix + '/' + t;
        }
        this.attribs = {
            defer: e.defer || null,
            async: e.async || null,
            crossOrigin: e.crossOrigin || null
        };
        this.id = i;
        this.src = Tt.getLocation(i);
        this.loaded = false;
        this.error = false;
        this.element = null;
        this.cb = {
            load: [],
            error: []
        };
    }
    function jt(t, e, i) {
        var n = t[e], s = n.length, o = null;;
        for (; --s > -1;) {
            o = n[s];
            n.splice(s, 1);
            o(i);
        }
        if ('error' === e) {
            t.load = [];
        } else {
            t.error = [];
        }
    }
    function Rt(t) {
        if (null === t) {
            return '';
        }
        var e = [];
        (function i(t, e) {
            var n;
            var s;
            if ('object' == typeof t) {
                for (s in t)
                    true === Bt(n = t[s]) ? i(n, e) : e[e.length] = Dt(s, n);
            } else {
                if (true === Array.isArray(t)) {
                    var o = 0;;
                    for (; o < t.length; o++) {
                        if (true === Bt(n = t[o])) {
                            i(t, e);
                        } else {
                            e[e.length] = Dt(s, n);
                        }
                    }
                } else {
                    e[e.length] = Dt(t);
                }
            }
        }(t, e));
        var var_266 = e.join('&');
        return var_266;
    }
    function Bt(t) {
        var var_267 = true === Array.isArray(t) || 'object' == typeof t;
        return var_267;
    }
    function Dt(t, e) {
        var arg_291 = null;
        if (null === e) {
            arg_291 = '';
        } else {
            arg_291 = e;
        }
        var var_268 = encodeURIComponent(t) + '=' + encodeURIComponent(arg_291);
        return var_268;
    }
    function Wt(t, e, i) {
        var var_272 = i || {};
        i = var_272;
        var n = {
            url: e,
            method: t.toUpperCase(),
            responseType: i.responseType || 'string',
            dataType: i.dataType || null,
            withCredentials: i.withCredentials || false,
            headers: i.headers || null,
            data: i.data || null
        };
        var var_273 = n.withCredentials && Ht;
        n.legacy = var_273;
        if (n.data) {
            if ('json' === n.dataType && 'object' == typeof n.data) {
                n.data = JSON.stringify(n.data);
            }
            if ('query' === n.dataType) {
                n.data = Rt(n.data);
            }
        }
        var var_274 = null;
        if (i.retry) {
            var_274 = R(arg_294, i.retry);
            function arg_294() {
                var var_275 = qt(n);
                return var_275;
            }
        } else {
            var_274 = qt(n);
        }
        return var_274;
    }
    function qt(t) {
        var e = null;
        if (t.legacy) {
            e = new XDomainRequest();
        } else {
            e = new XMLHttpRequest();
        }
        var var_276 = new Promise(arg_295);
        return var_276;
        function arg_295(i, n) {
            var s;
            e.onload = o('complete');
            e.onerror = e.ontimeout = o('error');
            e.open(t.method, t.url);
            if (!t.legacy && (e.withCredentials = t.withCredentials, t.headers)) {
                for (var r in t.headers)
                    s = t.headers[r], e.setRequestHeader(r, s);
            }
            setTimeout(arg_296, 0);
            function o(s) {
                return var_277;
                function var_277(o) {
                    var r = e.response || e.responseText;
                    var a = e.statusText || '';
                    var l = e.status;
                    var h = e.readyState;
                    if (4 === h || t.legacy) {
                        if ('error' === s || l >= 400 && l <= 511) {
                            var arg_298 = {
                                event: 'network-error',
                                endpoint: t.url,
                                state: h,
                                status: l,
                                message: zt.getText(l || 400) || a
                            };
                            var var_278 = void n(arg_298);
                            return var_278;
                        }
                        if ('json' === t.responseType && r) {
                            r = JSON.parse(r);
                        }
                        var arg_297 = {
                            state: h,
                            status: l,
                            body: r,
                            message: a
                        };
                        i(arg_297);
                    }
                }
            }
            function arg_296() {
                e.send(t.data);
            }
        }
    }
    function Nt(t, e) {
        if ('object' == typeof t && e === undefined) {
            t = (e = t).url;
        }
        if (null === t) {
            throw new Error('Url missing');
        }
        var var_279 = Wt('GET', t, e);
        return var_279;
    }
    function Ut(t, e) {
        if ('object' == typeof t && e === undefined) {
            t = (e = t).url;
        }
        if (null === t) {
            throw new Error('Url missing');
        }
        var var_280 = Wt('POST', t, e);
        return var_280;
    }
    function Vt(t, e) {
        var i = t;
        if (!e) {
            e = {};
        }
        if (e.prefix) {
            i = e.prefix + '/' + t;
        }
        this.id = i;
        this.src = Tt.getLocation(i);
        this.loaded = false;
        this.error = false;
        this.cb = {
            load: [],
            error: []
        };
        this.data = null;
    }
    function Xt(t, e, i) {
        var n = t[e], s = n.length, o = null;;
        for (; --s > -1;) {
            o = n[s];
            n.splice(s, 1);
            o(i);
        }
        if ('error' === e) {
            t.load = [];
        } else {
            t.error = [];
        }
    }
    function Qt(t) {
        var e = [];
        for (var i in t)
            e.push([
                encodeURIComponent(i),
                encodeURIComponent(t[i])
            ].join('='));
        var var_291 = e.join('&');
        return var_291;
    }
    function Zt() {
        if (window.Raven) {
            var arg_305 = {
                autoBreadcrumbs: {
                    xhr: true,
                    dom: true,
                    sentry: true
                },
                tags: {
                    'site-host': S.host,
                    'site-key': S.sitekey,
                    'endpoint-url': A.endpoint,
                    'asset-url': S.assetUrl
                },
                sampleRate: 0.1
            };
            Raven.config('https://0f73e9316e6b4aee9e62a74c820604e0@sentry.io/1198795', arg_305);
        }
        if (window.Raven) {
            var arg_306 = {
                'Browser-Agent': C.Browser.agent,
                'Browser-Type': C.Browser.type,
                'Browser-Version': C.Browser.version,
                'System-OS': C.System.os,
                'System-Version': C.System.version,
                'Is-Mobile': C.System.mobile
            };
            Raven.setUserContext(arg_306);
        }
        j('challenge_internal', 'setup', 'info');
        window.onerror = function (t, e, i, n, s) {
            var arg_307 = {
                name: s.name || 'Error',
                url: e,
                line: i,
                column: n,
                stack: s.stack || ''
            };
            j(t, 'global', 'debug', arg_307);
            I(t, 'error', 'global');
        };
    }
    function he() {
        q.self(this, N, 'refresh');
        this.state = {
            visible: true,
            locked: false,
            mobile: false
        };
        this.image = {
            on: null,
            off: null
        };
        this.addClass('button');
        this.$on = this.createElement('.image-on');
        this.$off = this.createElement('.image-off');
        this.setAttribute('tabindex', 0);
        this.setAttribute('role', 'button');
        this.setLabel.call(this);
        this.onHover = this.onHover.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.addEventListener('click', this.onSelect);
        this.addEventListener('enter', this.onSelect);
        if (false === C.System.mobile) {
            this.addEventListener('over', this.onHover);
            this.addEventListener('out', this.onHover);
        }
        var arg_319 = { opacity: 0 };
        this.$on.css(arg_319);
    }
    function ce(t) {
        q.self(this, N, 'button-submit');
        this.state = {
            text: 'Check',
            type: 'check',
            label: 'Submit Answers',
            locked: false
        };
        this.copy = this.createElement('.text');
        this.addClass('button');
        this.setAttribute('tabindex', 0);
        this.setCopy.call(this);
        this.onHover = this.onHover.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.addEventListener('click', this.onSelect);
        this.addEventListener('enter', this.onSelect);
        if (false === C.System.mobile) {
            this.addEventListener('over', this.onHover);
            this.addEventListener('out', this.onHover);
        }
    }
    function ue() {
        q.self(this, N, 'help');
        this.image = {
            on: null,
            off: null
        };
        this.locked = false;
        this.mobile = false;
        this.selected = false;
        this.addClass('button');
        this.$on = this.createElement('.image-on');
        this.$off = this.createElement('.image-off');
        this.setAttribute('tabindex', 0);
        this.setAttribute('aria-expanded', false);
        this.setAttribute('aria-haspopup', 'listbox');
        this.setAttribute('aria-owns', 'menu');
        this.setAttribute('role', 'button');
        this.setLabel.call(this);
        this.onHover = this.onHover.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.addEventListener('click', this.onSelect);
        this.addEventListener('enter', this.onSelect);
        if (false === C.System.mobile) {
            this.addEventListener('over', this.onHover);
            this.addEventListener('out', this.onHover);
        }
        var arg_320 = { opacity: 0 };
        this.$on.css(arg_320);
    }
    function de(t, e) {
        var i = t instanceof HTMLIFrameElement;
        try {
            if (i) {
                if (t.parentNode) {
                    var arg_321 = JSON.stringify(e);
                    t.contentWindow.postMessage(arg_321, '*');
                }
            } else {
                var arg_322 = JSON.stringify(e);
                t.postMessage(arg_322, '*');
            }
        } catch (yn) {
            I(yn.message, 'error', 'messaging');
        }
    }
    function pe(t, e) {
        this.target = t;
        this.id = e;
        this.messages = [];
        this.incoming = [];
        this.waiting = [];
    }
    function fe(t, e) {
        var i = this;
        var n = {};
        var s = new Promise(arg_323);
        var o = {
            source: 'hcaptcha',
            label: t,
            id: i.id,
            promise: null,
            lookup: e
        };
        s.then(arg_324)['catch'](arg_325);
        return n;
        function arg_323(t, e) {
            n.resolve = t;
            n.reject = e;
        }
        function arg_324(t) {
            o.promise = 'resolve';
            if (null !== t) {
                o.contents = t;
            }
            de(i.target, o);
        }
        function arg_325(t) {
            o.promise = 'reject';
            if (null !== t) {
                o.error = t;
            }
            de(i.target, o);
        }
    }
    function ge(t) {
        q.self(this, N, 'list', 'select');
        var e;
        var i = this;
        for (var n in (this.state = { selected: null }, t))
            (e = this.createElement('option')).text(t[n]), e.dom.value = n;
        this.addEventListener('change', arg_373);
        this.addEventListener('focus', arg_374);
        this.addEventListener('blur', arg_375);
        function arg_373(t) {
            i.emit('select', t.target.value);
        }
        function arg_374() {
            i.emit('focus', true);
        }
        function arg_375() {
            i.emit('focus', false);
        }
    }
    function Se(t) {
        q.self(this, T);
        if (!t) {
            t = {};
        }
        this.state = {
            pause: false,
            action: null,
            position: {
                x: 0,
                y: 0
            },
            delta: {
                x: 0,
                y: 0
            }
        };
        this.config = {
            element: t.element || null,
            keyStep: t.keyStep || 120,
            firefoxMult: t.firefoxMult || 15,
            touchMult: t.touchMult || 2,
            mouseMult: t.mouseMult || 1
        };
        this.element = null;
        this.msBodyTouch = null;
        this.clamp = {
            enabled: false,
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        this.onWheel = this.onWheel.bind(this);
        this.onKey = this.onKey.bind(this);
        this.onTouch = this.onTouch.bind(this);
    }
    function Oe(t) {
        q.self(this, N, 'option');
        this.state = {
            selected: false,
            id: 'option-' + t.index,
            value: t.value,
            key: t.key,
            index: t.index
        };
        this.setAttribute('role', 'option');
        this.dom.id = this.state.id;
        this.$text = this.createElement('.text');
        this.$text.text(t.value);
        this.onSelect = this.onSelect.bind(this);
        this.onHover = this.onHover.bind(this);
        this.addEventListener('up', this.onSelect);
        this.addEventListener('over', this.onHover);
        this.addEventListener('out', this.onHover);
        this.addEventListener('enter', this.onSelect);
    }
    function Ae(t) {
        q.self(this, N, 'language-list');
        var e = this;
        this.state = {
            listHeight: 0,
            viewHeight: 0,
            selected: null,
            current: null
        };
        this.dom.id = 'options-list';
        this.addClass('no-outline');
        this.setAttribute('role', 'listbox');
        this.setAttribute('aria-labelledby', 'language-selector');
        var i;
        var o = 0;
        for (var r in t)
            (i = this.initComponent(Oe, {
                key: r,
                value: t[r],
                index: o++
            })).on('select', n), i.on('hover', s);
        function n(t) {
            e.emit('select', t);
        }
        function s(t) {
            e.state.current = e.children[t];
            e.emit('hover', t);
            e.highlight.call(e, t);
        }
    }
    function Le() {
        q.self(this, N);
    }
    function $e(t) {
        q.self(this, N, 'language-view');
        var e = this;
        this.state = {
            itemHeight: 35,
            listHeight: 0,
            viewHeight: 0,
            hover: 0
        };
        this.dom.id = 'options-view';
        this.handle = this.initComponent(Le);
        this.options = this.initComponent(Ae, t);
        this.update = this.update.bind(this);
        this.options.on('select', arg_378);
        this.options.on('hover', arg_379);
        function arg_378(t) {
            e.emit('select', t);
        }
        function arg_379(t) {
            e.state.hover = t;
        }
    }
    function Te(t) {
        q.self(this, N, 'list');
        var e = this;
        this.state = {
            visible: false,
            selected: null,
            search: ''
        };
        this.timer = null;
        this.addClass('button');
        this.dom.id = 'language-selector';
        this.setAttribute('tabindex', 0);
        this.setAttribute('aria-haspopup', 'listbox');
        this.setAttribute('aria-owns', 'options-list');
        this.setAttribute('aria-expanded', false);
        this.setAttribute('role', 'button');
        this.$close = this.createElement('.close');
        this.view = this.initComponent($e, t);
        var arg_380 = {
            mouseMult: 0.5,
            keyStep: 35
        };
        this.scroll = this.initComponent(Se, arg_380);
        this.close = this.close.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.addEventListener('click', this.onOpen);
        this.addEventListener('keydown', this.onKeyPress);
        this.addEventListener('focus', arg_381);
        this.addEventListener('blur', arg_382);
        this.view.on('select', arg_383);
        this.scroll.on('update', this.view.update);
        this.style();
        this.close();
        function arg_381() {
            e.emit('focus', true);
        }
        function arg_382() {
            e.emit('focus', false);
        }
        function arg_383(t) {
            e.close();
            e.emit('select', t);
        }
    }
    function Pe() {
        q.self(this, N, 'display-language');
        this.$text = this.createElement('.text');
        this.$underline = this.createElement('.underline');
    }
    function Me() {
        q.self(this, N, 'language-selector');
        var t = this;
        this.state = { locked: false };
        var e = J.getLocale();
        var i = C.System.mobile;
        var arg_384 = null;
        if (i) {
            arg_384 = ge;
        } else {
            arg_384 = Te;
        }
        this.list = this.initComponent(arg_384, U);
        this.display = this.initComponent(Pe);
        this.display.setLocale(e);
        this.list.setLocale(e);
        this.setLabel.call(this);
        this.list.on('select', arg_385);
        this.display.addEventListener('click', arg_386);
        this.list.on('open', arg_387);
        this.list.on('focus', n);
        this.list.on('blur', n);
        this.style();
        function arg_385(e) {
            J.setLocale(e);
            t.display.setLocale(e);
            t.list.setLocale(e);
            var arg_388 = { locale: e };
            ye.send('challenge-language', arg_388);
        }
        function arg_386() {
            if (!t.state.locked) {
                if (t.list.onOpen) {
                    t.list.onOpen();
                }
            }
        }
        function arg_387() {
            t.emit('open');
        }
        function n(e) {
            if (e && t.list.isVisible && t.list.isVisible() && t.list.close) {
                t.list.close();
            }
            t.display.focus(e);
            t.emit('focus', e);
        }
    }
    function Ie(t) {
        q.self(this, N, 'hcaptcha-logo');
        this.mobile = false;
        this.charity = t;
        this.image = null;
        this.color = this.createElement('.icon-color');
    }
    function je(t) {
        q.self(this, N, 'hcaptcha-logo');
        this.mobile = false;
        this.link = 'https://www.hcaptcha.com/what-is-hcaptcha-about';
        var var_300 = t || {};
        this.config = var_300;
        var var_301 = this.config.charity !== undefined && this.config.charity;
        this.config.charity = var_301;
        this.icon = this.initComponent(Ie, this.config.charity);
        this.onClick = this.onClick.bind(this);
        this.addEventListener('click', this.onClick);
    }
    function Re() {
        q.self(this, N, 'display-error');
        this.visible = false;
        this.setAttribute('aria-hidden', true);
        this.setAttribute('role', 'alert');
        this.copy = this.createElement('.error-text');
        this.appendElement(this.copy);
        this.setCopy.call(this);
        var arg_389 = { opacity: 0 };
        this.css(arg_389);
    }
    function Be() {
        q.self(this, N, 'Crumb');
        this.$bg = this.createElement('.crumb-bg');
    }
    function De() {
        q.self(this, N, 'challenge-breadcrumbs');
        this.width = 0;
        this.height = 0;
        this.crumbs = [];
        this.$wrapper = this.createElement('.crumbs-wrapper');
    }
    function ze() {
        q.self(this, N, 'button-close');
        this.locked = false;
        this.mobile = false;
        this.setAttribute('tabindex', 0);
        this.setAttribute('role', 'button');
        this.addClass('button');
        this.$on = this.createElement('.close-image');
        this.$off = this.createElement('.close-image');
        this.setLabel.call(this);
        this.onHover = this.onHover.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.addEventListener('click', this.onSelect);
        this.addEventListener('enter', this.onSelect);
        if (false === C.System.mobile) {
            this.addEventListener('over', this.onHover);
            this.addEventListener('out', this.onHover);
        }
        if ('ie' === C.Browser.type && 8 === C.Browser.version) {
            var arg_439 = { display: 'none' };
            this.$on.css(arg_439);
        } else {
            var arg_440 = { opacity: 0 };
            this.$on.css(arg_440);
        }
    }
    function He() {
        q.self(this, N, 'header');
        this.state = { visible: true };
        this.$title = this.createElement('h2', '#modal-title');
        this.$underline = this.createElement('.underline');
        this.setAttribute('role', 'heading');
    }
    function We() {
        q.self(this, N, 'modal');
        var t = this;
        this.state = {
            visible: false,
            curr: null,
            prev: null
        };
        this.addClass('no-outline');
        this.setAttribute('role', 'dialog');
        this.setAttribute('aria-modal', true);
        this.setAttribute('tabindex', '0');
        this.header = this.initComponent(He);
        this.header.on('close', arg_441);
        this.$content = this.createElement('#modal-content');
        this.$content.addClass('content');
        this.setAttribute('aria-describeby', '#modal-content');
        this.close = this.initComponent(ze);
        this.close.on('click', arg_442);
        this.addEventListener('keydown', arg_443);
        this.addEventListener('focus', arg_444);
        this.addEventListener('blur', arg_445);
        function arg_441() {
            t.emit('close');
        }
        function arg_442() {
            t.emit('close');
        }
        function arg_443(e) {
            if (t.dom && 9 === e.keyNum) {
                if (e.shiftKey) {
                    if (document.activeElement === t.dom) {
                        t.close.focus();
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                    }
                } else {
                    if (document.activeElement === t.close.dom) {
                        t.focus();
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                    }
                }
            }
        }
        function arg_444() {
            var arg_446 = { border: '1px solid #0074BF' };
            t.css(arg_446);
        }
        function arg_445() {
            var arg_447 = { border: '1px solid #d7d7d7' };
            t.css(arg_447);
        }
    }
    function qe(t) {
        q.self(this, N, 'link', 'a');
        var e = this;
        this.state = {
            link: t.link,
            text: t.text,
            underline: t.underline || false
        };
        if (this.state.link) {
            this.setAttribute('href', this.state.link);
            this.setAttribute('target', '_blank');
        }
        this.addEventListener('enter', i);
        this.addEventListener('click', i);
        if (false === C.System.mobile) {
            this.addEventListener('over', n);
            this.addEventListener('out', n);
            function n(t) {
                var arg_448 = null;
                if ('over' === t.action) {
                    arg_448 = {
                        color: O.hoverOn,
                        textDecoration: 'underline'
                    };
                } else {
                    arg_448 = {
                        color: O.hoverOff,
                        textDecoration: e.state.underline ? 'underline' : 'none'
                    };
                }
                e.css(arg_448);
            }
        }
        function i(t) {
            if (!e.state.link) {
                e.emit('click');
            }
        }
    }
    function Ne(t) {
        q.self(this, N, 'copy', 'p');
        var e = this;
        if (!t) {
            t = {};
        }
        this.state = {
            text: t.text || '',
            linkUnderline: t.linkUnderline || false,
            link: t.link || false,
            linkText: t.linkText || '',
            linkTo: t.linkTo || null,
            replaceText: t.replaceText || null
        };
        if (this.state.link) {
            var arg_449 = {
                text: this.state.linkText,
                link: this.state.linkTo,
                underline: this.state.linkUnderline
            };
            this.link = new qe(arg_449);
            if (this.state.linkTo) {
                this.link.on('click', arg_450);
                function arg_450() {
                    e.emit('click');
                }
            }
        }
    }
    function Ve() {
        q.self(this, N, 'instructions');
        var arg_479 = {
            text: Ue,
            link: true,
            linkText: 'hcaptcha.com',
            linkTo: 'https://www.hcaptcha.com/what-is-hcaptcha-about?r=a2',
            replaceText: 'site-url'
        };
        this.copy = this.initComponent(Ne, arg_479);
    }
    function Xe() {
        q.self(this, N, 'feedback');
        var t = this;
        this.$info = this.createElement('span');
        this.$link = this.createElement('.feedback-link');
        this.$link.setAttribute('tabindex', '0');
        this.$link.setAttribute('role', 'link');
        this.$link.addEventListener('enter', e);
        this.$link.addEventListener('click', e);
        if (false === C.System.mobile) {
            this.$link.addEventListener('over', i);
            this.$link.addEventListener('out', i);
            function i(e) {
                var arg_480 = null;
                if ('over' === e.action) {
                    arg_480 = {
                        color: O.hoverOn,
                        textDecoration: 'underline'
                    };
                } else {
                    arg_480 = {
                        color: O.hoverOff,
                        textDecoration: 'none'
                    };
                }
                t.$link.css(arg_480);
            }
        }
        function e(e) {
            t.emit('click');
        }
    }
    function Je() {
        q.self(this, N, 'information');
        var t = this;
        this.instructions = this.initComponent(Ve, null, this.$content);
        this.feedback = this.initComponent(Xe, null, this.$content);
        this.feedback.on('click', arg_481);
        function arg_481() {
            t.emit('change', 'feedback');
        }
    }
    function Ke(t) {
        q.self(this, N, 'checkmark');
        var e = this;
        this.state = {
            locked: false,
            selected: false,
            text: t.text,
            value: t.value
        };
        this.$wrapper = this.createElement('.wrapper');
        this.$input = this.$wrapper.createElement('.checkbox');
        this.$input.bg = this.$input.createElement('.checkbox-bg');
        this.$input.check = this.$input.createElement('.checkbox-mark');
        var arg_482 = { opacity: 0 };
        this.$input.check.css(arg_482);
        this.$text = this.$wrapper.createElement('.checkbox-text');
        this.$text.dom.id = 'checkmark-' + this.state.value;
        this.$input.setAttribute('tabindex', '0');
        this.$input.setAttribute('role', 'button');
        this.$input.setAttribute('aria-pressed', false);
        this.$input.setAttribute('aria-labelledby', this.$text.dom.id);
        this.$wrapper.addEventListener('up', i);
        this.$wrapper.addEventListener('enter', i);
        function i(t) {
            e.emit('select', e);
        }
    }
    function Ye(t) {
        q.self(this, N, 'options');
        this.state = { visible: true };
        this.handeSelect = this.handeSelect.bind(this);
        this.$wrapper = this.createElement('.column-wrapper');
        this.$left = this.$wrapper.createElement('.column-left');
        this.$right = this.$wrapper.createElement('.column-right');
        this.options = [];
        var e = null, i = null, n = 0;;
        for (; n < t.length; n++) {
            if (n >= t.length / 2) {
                i = this.$right;
            } else {
                i = this.$left;
            }
            (e = this.initComponent(Ke, t[n], i)).setCopy();
            e.on('select', this.handeSelect);
            this.options.push(e);
        }
    }
    function Ge(t) {
        q.self(this, N, 'comment');
        var e = this;
        this.state = {
            visible: false,
            placeholder: t
        };
        this.$textarea = this.createElement('textarea', '.comment-textarea');
        this.setPlaceholder.call(this);
        this.$textarea.addEventListener('input', arg_483);
        function arg_483(t) {
            e.emit('change', t.target.value);
        }
    }
    function Qe(t) {
        var arg_484 = 'button-' + t.value;
        q.self(this, N, arg_484);
        this.state = {
            visible: true,
            locked: false,
            value: t.value,
            text: t.text,
            lockText: null,
            desc: t.desc,
            color: t.color
        };
        this.$copy = this.createElement('.send-text');
        this.onHover = this.onHover.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.setAttribute('tabindex', 0);
        this.setAttribute('role', 'button');
        this.addEventListener('click', this.onSelect);
        this.addEventListener('enter', this.onSelect);
        if (false === C.System.mobile) {
            this.addEventListener('over', this.onHover);
            this.addEventListener('out', this.onHover);
        }
    }
    function ei() {
        q.self(this, N, 'feedback');
        var t = this;
        this.selected = null;
        this.options = this.initComponent(Ye, ti);
        this.comment = this.initComponent(Ge, Ze);
        this.$buttons = this.createElement('.buttons');
        var arg_516 = {
            text: 'Cancel',
            value: 'cancel',
            desc: 'Cancel Response',
            color: O.warn
        };
        this.cancel = this.initComponent(Qe, arg_516, this.$buttons);
        var arg_517 = {
            text: 'Send',
            value: 'send',
            desc: 'Send Response',
            color: O.link
        };
        this.send = this.initComponent(Qe, arg_517, this.$buttons);
        this.send.lock(true, 'Please select an option to send response.');
        var arg_518 = this.sendMessage.bind(this);
        this.send.on('click', arg_518);
        var arg_519 = this.displayComment.bind(this);
        this.options.on('update', arg_519);
        this.comment.visible(false);
        this.cancel.on('click', arg_520);
        function arg_520() {
            t.emit('close');
        }
    }
    function si() {
        q.self(this, N, 'software-bug');
        var t = this;
        this.selected = null;
        this.options = this.initComponent(Ye, ni);
        this.comment = this.initComponent(Ge, ii, this);
        this.$buttons = this.createElement('.buttons');
        var arg_529 = {
            text: 'Cancel',
            value: 'cancel',
            desc: 'Cancel Response',
            color: O.warn
        };
        this.cancel = this.initComponent(Qe, arg_529, this.$buttons);
        var arg_530 = {
            text: 'Send',
            value: 'send',
            desc: 'Send Response',
            color: O.link
        };
        this.send = this.initComponent(Qe, arg_530, this.$buttons);
        this.send.lock(true, 'Please select an option to send response.');
        var arg_531 = this.sendMessage.bind(this);
        this.send.on('click', arg_531);
        var arg_532 = this.storeAnswer.bind(this);
        this.options.on('update', arg_532);
        this.cancel.on('click', arg_533);
        function arg_533() {
            t.emit('close');
        }
    }
    function ai(t) {
        q.self(this, N, 'report');
        var e = this;
        this.selected = null;
        var var_318 = t.key || '';
        this.task_key = var_318;
        this.options = this.initComponent(Ye, ri);
        this.comment = this.initComponent(Ge, oi);
        this.$buttons = this.createElement('.buttons');
        var arg_542 = {
            text: 'Cancel',
            value: 'cancel',
            desc: 'Cancel Response',
            color: O.warn
        };
        this.cancel = this.initComponent(Qe, arg_542, this.$buttons);
        var arg_543 = {
            text: 'Send',
            value: 'send',
            desc: 'Send Response',
            color: O.link
        };
        this.send = this.initComponent(Qe, arg_543, this.$buttons);
        this.send.lock(true, 'Please select an option to send response.');
        var arg_544 = this.sendMessage.bind(this);
        this.send.on('click', arg_544);
        var arg_545 = this.storeAnswer.bind(this);
        this.options.on('update', arg_545);
        this.cancel.on('click', arg_546);
        function arg_546() {
            e.emit('close');
        }
    }
    function li() {
        q.self(this, N, 'thanks-feedback');
        var t = this;
        this.$copy = this.createElement('.feedback-thanks');
        this.$resolve = this.createElement('.feedback-resolve');
        this.$option = this.createElement('.accessibility-option');
        this.$option.link = this.$option.createElement('a', '.option-link');
        this.$bug = this.createElement('.feedback-bug');
        this.$bug.link = this.createElement('a', '.bug-link');
        this.$option.link.setAttribute('tabindex', 0);
        this.$bug.link.setAttribute('tabindex', 0);
        this.$bug.link.addEventListener('enter', e);
        this.$bug.link.addEventListener('down', e);
        this.$option.link.addEventListener('keydown', i);
        this.$option.link.addEventListener('enter', i);
        if (false === C.System.mobile) {
            this.$bug.link.addEventListener('over', n);
            this.$bug.link.addEventListener('out', n);
            this.$option.link.addEventListener('over', s);
            this.$option.link.addEventListener('out', s);
            function n(e) {
                var arg_547 = null;
                if ('over' === e.action) {
                    arg_547 = {
                        color: O.hoverOn,
                        textDecoration: 'underline'
                    };
                } else {
                    arg_547 = {
                        color: O.hoverOff,
                        textDecoration: 'none'
                    };
                }
                t.$bug.link.css(arg_547);
            }
            function s(e) {
                var arg_548 = null;
                if ('over' === e.action) {
                    arg_548 = {
                        color: O.hoverOn,
                        textDecoration: 'underline'
                    };
                } else {
                    arg_548 = {
                        color: O.hoverOff,
                        textDecoration: 'none'
                    };
                }
                t.$option.link.css(arg_548);
            }
        }
        function e(t) {
            window.open('https://www.hcaptcha.com/reporting-bugs');
        }
        function i(t) {
            window.open('https://hcaptcha.com/accessibility');
        }
    }
    function hi() {
        q.self(this, N, 'thanks-accessibility');
        var t = this;
        this.$sorry = this.createElement('.accessibility-text');
        this.$option = this.createElement('.accessibility-option');
        this.$avoid = this.createElement('.accessibility-avoid');
        this.$option.addEventListener('enter', e);
        this.$option.addEventListener('down', e);
        if (false === C.System.mobile) {
            this.$option.addEventListener('over', i);
            this.$option.addEventListener('out', i);
            function i(e) {
                var arg_549 = null;
                if ('over' === e.action) {
                    arg_549 = {
                        color: O.hoverOn,
                        textDecoration: 'underline'
                    };
                } else {
                    arg_549 = {
                        color: O.hoverOff,
                        textDecoration: 'none'
                    };
                }
                t.$option.css(arg_549);
            }
        }
        function e(t) {
            window.open('https://hcaptcha.com/accessibility');
        }
    }
    function ci() {
        q.self(this, N, 'thanks-feedback');
        this.$copy = this.createElement('.feedback-thanks');
        this.$resolve = this.createElement('.feedback-resolve');
    }
    function ui(t) {
        q.self(this, N, 'thanks');
        if ('feedback' === t.response) {
            this.copy = this.initComponent(li, null, this.$content);
        } else {
            if ('accessibility' === t.response) {
                this.copy = this.initComponent(hi, null, this.$content);
            } else {
                if ('report' === t.response) {
                    this.copy = this.initComponent(ci, null, this.$content);
                }
            }
        }
    }
    function fi() {
        q.self(this, N, 'cookie-icon');
        this.size = 0;
        this.$none = this.createElement('.icon-none');
        this.$blocked = this.createElement('.icon-blocked');
        this.$found = this.createElement('.icon-found');
        if ('ie' === C.Browser.type && 8 === C.Browser.version) {
            var arg_579 = { display: 'none' };
            this.$none.css(arg_579);
            var arg_580 = { display: 'none' };
            this.$blocked.css(arg_580);
            var arg_581 = { display: 'none' };
            this.$found.css(arg_581);
        } else {
            var arg_582 = { opacity: 0 };
            this.$none.css(arg_582);
            var arg_583 = { opacity: 0 };
            this.$blocked.css(arg_583);
            var arg_584 = { opacity: 0 };
            this.$found.css(arg_584);
        }
    }
    function bi() {
        q.self(this, N, 'status');
        var t = this;
        this.state = {
            hasCookie: false,
            hasAccess: false,
            allowedAccess: false
        };
        this.$header = this.createElement('.header');
        this.$header.copy = this.$header.createElement('.text');
        this.$header.setAttribute('aria-hidden', true);
        this.icon = this.initComponent(fi, null, this.$header);
        var arg_602 = {
            text: mi.noCookie.noAccess,
            link: true,
            linkText: vi,
            linkUnderline: true,
            linkTo: 'https://dashboard.hcaptcha.com/signup?type=accessibility',
            replaceText: 'retrieve-cookie'
        };
        this.retrieve = this.initComponent(Ne, arg_602);
        var arg_603 = {
            text: mi.noCookie.hasAccess,
            link: true,
            linkText: gi,
            linkUnderline: true,
            replaceText: 'enable-cookies'
        };
        this.disabled = this.initComponent(Ne, arg_603);
        var arg_604 = {
            text: mi.hasCookie,
            link: true,
            linkText: yi,
            linkUnderline: true,
            linkTo: 'mailto:' + yi,
            replaceText: 'support'
        };
        this.help = this.initComponent(Ne, arg_604);
        this.retrieve.dom.id = 'status-retrieve';
        this.disabled.dom.id = 'status-disabled';
        this.help.dom.id = 'status-help';
        this.disabled.on('click', arg_605);
        this.icon.load();
        function arg_605() {
            di.requestAccess().then(arg_606);
            function arg_606() {
                t.setType();
            }
        }
    }
    function xi() {
        q.self(this, N, 'accessibility');
        var arg_621 = {
            text: wi,
            link: true,
            linkText: ki,
            linkUnderline: true,
            linkTo: 'https://hcaptcha.com/accessibility'
        };
        this.copy = this.initComponent(Ne, arg_621);
        this.status = this.initComponent(bi);
        this.status.checkAccess();
    }
    function Ei() {
        q.self(this, N, 'challenge-modal');
        this.modalContent = null;
        this.state = {
            visible: false,
            curr: null,
            prev: null
        };
        this.config = {
            width: 0,
            height: 0,
            mobile: false
        };
        this.display = this.display.bind(this);
        this.close = this.close.bind(this);
        this.$container = this.createElement('.container');
        this.modal = this.initComponent(We, null, this.$container);
        this.modal.on('close', this.close);
        this.$bg = this.createElement('.modal-bg');
        this.$bg.addEventListener('click', this.close);
        var t = C.Browser.ie && 8 === C.Browser.version;
        var arg_622 = {
            visibility: 'hidden',
            display: t ? 'none' : 'table',
            zIndex: -1
        };
        this.css(arg_622);
    }
    function Ci(t) {
        q.self(this, N, 'option');
        this.state = {
            text: t.text,
            value: t.value,
            type: t.type,
            color: t.color || '#555555',
            desc: t.desc,
            locked: false,
            visible: true
        };
        this.addClass('button');
        this.$wrapper = this.createElement('.wrapper');
        this.$copy = this.$wrapper.createElement('.copy');
        this.$bg = this.createElement('.bg');
        if (!t.last) {
            this.$line = this.$wrapper.createElement('.line');
        }
        this.setAttribute('tabindex', 0);
        this.setAttribute('role', 'button');
        if ('modal' === this.state.type) {
            this.setAttribute('aria-expanded', false);
            this.setAttribute('aria-haspopup', true);
        }
        this.onSelect = this.onSelect.bind(this);
        this.onHover = this.onHover.bind(this);
        this.addEventListener('click', this.onSelect);
        this.addEventListener('enter', this.onSelect);
        if (false === C.System.mobile) {
            this.addEventListener('over', this.onHover);
            this.addEventListener('out', this.onHover);
        }
    }
    function Oi() {
        q.self(this, N, 'menu');
        this.state = {
            index: -1,
            mobile: false,
            visible: false,
            list: []
        };
        this.$background = this.createElement('.menu-background');
        this.visible = this.visible.bind(this);
        this.visible(false);
        var arg_643 = Ai.bind(this);
        this.addEventListener('keydown', arg_643);
    }
    function Ai(t) {
        var e = t.keyNum;
        var i = this.state.index;
        var n = i;
        if (38 === e) {
            n -= 1;
        } else {
            if (40 === e) {
                n += 1;
            }
        }
        if (!(n < 0 || n > this.state.list.length - 1)) {
            if (i !== n) {
                if (this.state.list[n]) {
                    this.state.list[n].focus();
                }
                this.state.index = n;
            }
        }
    }
    function Li(t, e) {
        q.self(this, N, 'challenge-interface');
        var i = this;
        this.state = {
            action: null,
            locked: false,
            visible: false
        };
        var var_327 = e || {};
        this.config = var_327;
        this.language = this.initComponent(Me);
        this.logo = this.initComponent(je, this.config);
        this.menu = this.initComponent(Oi);
        this.text = this.initComponent(Re);
        this.breadcrumbs = this.initComponent(De);
        this.btn = {
            info: this.initComponent(ue),
            refresh: this.initComponent(he),
            submit: this.initComponent(ce)
        };
        this.setAction = this.setAction.bind(this);
        this.focusMenuBtn = this.focusMenuBtn.bind(this);
        this.btn.info.on('click', arg_649);
        this.btn.info.addEventListener('focus', arg_650);
        this.btn.info.addEventListener('blur', arg_651);
        this.btn.refresh.on('click', arg_652);
        this.btn.refresh.addEventListener('focus', arg_653);
        this.btn.submit.on('click', arg_654);
        this.menu.on('select', arg_655);
        this.language.on('open', arg_656);
        this.language.on('focus', arg_657);
        function arg_649(t) {
            if (i.language.isOpen()) {
                i.language.close();
            }
            i.menu.visible(t);
        }
        function arg_650() {
            if (i.menu.isVisible()) {
                i.menu.visible(false);
            }
        }
        function arg_651() {
            if (!i.menu.isVisible()) {
                i.btn.info.reset();
            }
        }
        function arg_652() {
            i.emit('refresh');
        }
        function arg_653(t) {
            if (i.menu.isVisible()) {
                i.menu.visible(false);
                i.btn.info.reset();
            }
        }
        function arg_654() {
            i.emit('submit');
        }
        function arg_655(t) {
            if ('report_image' === t) {
                i.emit('report');
            }
            i.btn.info.reset();
        }
        function arg_656() {
            if (i.menu.isVisible()) {
                i.menu.visible(false);
            }
        }
        function arg_657(t) {
            if (t && i.menu.isVisible()) {
                i.menu.visible(false);
                i.btn.info.reset();
            }
        }
    }
    function Ti(t, e) {
        q.self(this, N, null, '.challenge-container');
        this.handleResize = null;
        this.handleCheck = null;
        this.handleFocus = null;
        this.handleSubmit = null;
        var var_331 = e || {};
        this.config = var_331;
    }
    function Ii() {
        var var_332 = !!Mi;
        return var_332;
    }
    function ji(t, e) {
        var var_333 = new Promise(arg_670);
        return var_333;
        function arg_670(i, n) {
            try {
                if (!Mi || Mi && Mi.type !== e.request_type) {
                    if (Mi) {
                        Pi.unmount(Mi);
                    }
                    Mi = new t();
                    Pi.mount(Mi);
                }
                $i.breadcrumbs.removeCrumbs();
                Mi.setup(e).then(i)['catch'](arg_671);
                if (Mi.breadcrumbs && 'number' == typeof Mi.breadcrumbs && Mi.breadcrumbs > 1) {
                    $i.breadcrumbs.createCrumbs(Mi.breadcrumbs);
                    $i.breadcrumbs.setIndex(Mi.served);
                }
                function arg_671(t) {
                    var e = t;
                    if (t instanceof Error) {
                        e = {
                            event: 'challenge-error',
                            message: 'Challenge encountered an error during setup.',
                            reason: t.toString()
                        };
                    }
                    n(e);
                }
            } catch (yn) {
                if (!Pi.isMounted) {
                    Mi = null;
                }
                var arg_672 = {
                    event: 'challenge-error',
                    message: 'Creating challenge failed.',
                    reason: yn.toString()
                };
                n(arg_672);
            }
        }
    }
    function Ri(t, e) {
        var var_334 = null;
        if (Mi) {
            var_334 = new Promise(arg_673);
            function arg_673(i, n) {
                try {
                    Mi.style(t, e).then(arg_674)['catch'](arg_675);
                    function arg_674(t) {
                        var e = $i.style(t.width, t.mobile, 10);
                        Pi.style(t.width, t.height, 10);
                        var n = {
                            width: t.width + 20,
                            height: t.height + 20 + e.height
                        };
                        _i.style(n.width, n.height, t.mobile);
                        var arg_676 = {
                            width: n.width,
                            height: n.height,
                            mobile: t.mobile
                        };
                        i(arg_676);
                    }
                    function arg_675(t) {
                        var arg_677 = {
                            event: 'challenge-error',
                            message: 'Error occurred in promise of .style()',
                            reason: t.toString()
                        };
                        n(arg_677);
                    }
                } catch (yn) {
                    var arg_678 = {
                        event: 'challenge-error',
                        message: 'Error when calling .style()',
                        reason: yn.toString()
                    };
                    n(arg_678);
                }
            }
        } else {
            var arg_679 = {
                width: 0,
                height: 0,
                mobile: false
            };
            var_334 = Promise.resolve(arg_679);
        }
        return var_334;
    }
    function Bi() {
        if (Mi) {
            Mi.submit();
        }
    }
    function Di() {
        return Mi.served;
    }
    function Fi() {
        var var_335 = null;
        if (Mi) {
            var_335 = Mi.breadcrumbs;
        } else {
            var_335 = 0;
        }
        return var_335;
    }
    function zi() {
        var var_336 = !(!Mi || !Mi.breadcrumbs);
        return var_336;
    }
    function Hi() {
        var var_337 = Mi.report && 'function' == typeof Mi.report;
        return var_337;
    }
    function Wi() {
        var var_338 = new Promise(arg_680);
        return var_338;
        function arg_680(t, e) {
            Mi.report(true);
            Mi.on('report-image', i);
            function i(e) {
                Mi.off('report-image', i);
                t(e);
            }
        }
    }
    function qi() {
        if (Mi && Mi.report) {
            Mi.report(false);
        }
    }
    function Ni() {
        if (Mi) {
            Mi = Pi.unmount(Mi);
        }
    }
    function Ui() {
        if (Mi && Mi.translate) {
            Mi.translate();
        }
    }
    function Vi(t) {
        if (Mi && Mi.setFocus) {
            var arg_681 = t || 0;
            Mi.setFocus(arg_681);
        }
    }
    function cn(t) {
        if (rn) {
            rn = clearTimeout(rn);
        }
        $i.lockState(false);
        Gi.getResult().then(arg_719).then(arg_720)['catch'](arg_721);
        function arg_719(e) {
            var var_354 = en.create(t, e);
            return var_354;
        }
        function arg_720(t) {
            if (t.pass) {
                var arg_722 = {
                    event: 'challenge-passed',
                    response: t.generated_pass_UUID,
                    expiration: t.expiration
                };
                ye.send('challenge-closed', arg_722);
            } else {
                if (false === t.success) {
                    var e = t['error-codes'] || [];
                    if (e.indexOf('expired-session') >= 0 || e.indexOf('client-fail') >= 0) {
                        var var_355 = void un();
                        return var_355;
                    }
                    var arg_723 = {
                        event: 'network-error',
                        message: (t['error-codes'] || ['']).join(', ')
                    };
                    ye.send('challenge-closed', arg_723);
                } else {
                    $i.displayFail(true);
                    un();
                }
            }
        }
        function arg_721(t) {
            var e = null;
            if (t instanceof Error) {
                e = {
                    event: 'challenge-error',
                    message: t.message || ''
                };
            } else {
                e = t;
            }
            le.logAction(e.event);
            if (('challenge-error' === e.event || 'bundle-error' === e.event) && on <= sn) {
                on += 1;
                un();
            } else {
                on = 0;
                ye.send('challenge-closed', e);
            }
        }
    }
    function un() {
        if (le.isRqChl()) {
            $i.lockState(true);
            var var_357 = rn = setTimeout(arg_725, an);
            var var_356 = void var_357;
            return var_356;
            function arg_725() {
                var arg_726 = { event: 'challenge-error' };
                ye.send('challenge-closed', arg_726);
            }
        }
        var arg_724 = ot.getData();
        cn(arg_724);
    }
    function dn(t, e) {
        S.browserWidth = t.width;
        S.browserHeight = t.height;
        en.size(t.width, t.height).then(arg_727);
        function arg_727(t) {
            e.resolve(t);
            j('challenge resized', 'challenge', 'info', t);
        }
    }
    function pn() {
        j('challenge refresh', 'challenge', 'info');
        le.logAction('challenge-refresh');
        un();
    }
    function fn() {
        en.submit().then(arg_728)['catch'](arg_729);
        function arg_728(t) {
            le.logAction(t);
            if (!('challenge-skip' !== t)) {
                un();
            }
        }
        function arg_729(t) {
            M(t);
            le.logAction('challenge-error');
            un();
        }
    }
    function mn() {
        en.displayReport().then(arg_730)['catch'](arg_731);
        function arg_730(t) {
            if (t) {
                var arg_732 = { key: t };
                _i.display('report_image', arg_732);
                _i.on('refresh', e);
                function e() {
                    pn();
                    _i.off('refresh', e);
                }
            }
        }
        function arg_731(t) {
            M(t);
            pn();
        }
    }
    function arg_3() {
        en.init();
        ye.init(nn);
        var arg_733 = document.body;
        ln = new W(arg_733);
        ye.answer('create-challenge', arg_734);
        ye.answer('close-challenge', arg_735);
        ye.answer('resize-challenge', dn);
        ye.answer('challenge-translate', arg_736);
        ye.answer('challenge-update', arg_737);
        ye.answer('solve-proof', arg_738);
        ye.contact('get-url').then(arg_739);
        ye.answer('challenge-data', arg_740);
        $i.on('refresh', pn);
        $i.on('submit', fn);
        $i.on('report', mn);
        Pi.on('resize', arg_741);
        Pi.on('focus-check', arg_742);
        ln.addEventListener('down', arg_743);
        ln.addEventListener('keydown', arg_744);
        ln.addEventListener('down', arg_745);
        ln.addEventListener('keydown', arg_746);
        ln.addEventListener('keydown', arg_747);
        ot.resetData();
        ye.send('challenge-loaded');
        function arg_734(t) {
            var e = {};
            if (t) {
                if (t.rqdata) {
                    le.setRqData(t.rqdata);
                }
                if (t.width) {
                    S.browserWidth = t.width;
                    S.browserHeight = t.height;
                }
                if (t.manifest) {
                    e = t.manifest;
                }
                en.setFocus('info');
                if ('enter' === t.action) {
                    ln.addClass('using-kb');
                } else {
                    if (ln.hasClass('using-kb')) {
                        ln.removeClass('using-kb');
                    }
                }
                var i = t.charity && true === t.charity;
                $i.setupLogo(i, t.link);
            }
            if (C.System.mobile) {
                en.setFocus('info');
            }
            cn(e);
        }
        function arg_735() {
            if (rn) {
                rn = clearTimeout(rn);
            }
            en.close();
        }
        function arg_736(t) {
            en.translateInterface(t);
            if (en.isVisible()) {
                if ('en' !== t.locale) {
                    un();
                } else {
                    en.translateBundle();
                }
            }
        }
        function arg_737(t) {
            if (t.endpoint) {
                A.endpoint = t.endpoint;
            }
        }
        function arg_738(t, e) {
            Gi.solve(t);
            e.resolve();
        }
        function arg_739(t) {
            S.url = t;
        }
        function arg_740(t) {
            if (t.rqdata) {
                le.setRqData(t.rqdata);
            }
        }
        function arg_741() {
            ye.send('challenge-resize');
        }
        function arg_742() {
            ln.addClass('using-kb');
            en.triggerFocus('submit');
        }
        function arg_743(t) {
            if (!$i.isLocked()) {
                $i.displayFail(false);
            }
        }
        function arg_744(t) {
            if (27 === t.keyNum) {
                if (_i.isOpen()) {
                    _i.close();
                    en.hideReport();
                } else {
                    if ($i.isOpen()) {
                        $i.close(true);
                    } else {
                        var arg_748 = { event: 'challenge-escaped' };
                        ye.send('challenge-closed', arg_748);
                        en.close();
                    }
                }
            }
        }
        function arg_745() {
            if (ln.hasClass('using-kb')) {
                ln.removeClass('using-kb');
            }
        }
        function arg_746(t) {
            if (9 === t.keyNum) {
                ln.addClass('using-kb');
                if (!t.shiftKey) {
                    if (document.activeElement === $i.btn.submit.getElement()) {
                        en.triggerFocus('challenge', 0);
                        if (t.preventDefault) {
                            t.preventDefault();
                        }
                    }
                }
            }
        }
        function arg_747(t) {
            if (document.activeElement === $i.btn.submit.getElement()) {
                var e = t.keyNum;
                if (37 === e || 38 === e) {
                    ln.addClass('using-kb');
                    en.triggerFocus('challenge', -1);
                    if (t.preventDefault) {
                        t.preventDefault();
                    }
                } else {
                    if (!(39 !== e && 40 !== e)) {
                        ln.addClass('using-kb');
                        en.triggerFocus('challenge', 0);
                        if (t.preventDefault) {
                            t.preventDefault();
                        }
                    }
                }
            }
        }
    }
}();