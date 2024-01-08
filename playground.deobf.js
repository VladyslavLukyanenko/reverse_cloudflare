(function () {
    q = function q() {
        var t;
        var u;
        var v;
        t = {};
        u = t;
        v = d._cf_chl_opt;
        i('cf_chl_prog', 'hc', 1);
        if (v.cRq && v.cRq.ru) {
            var w;
            var x;
            var y;
            w = function (D) {
                return e.getElementById(D);
            };
            var arg_84 = n(v.cRq.ru);
            x = p(arg_84);
            var arg_85 = x.protocol + '//';
            y = arg_85 + x.hostname;
            var arg_86 = e.location.href.indexOf(y);
            if (arg_86 !== 0) {
                var z;
                z = w('location-mismatch-warning');
                if (z) {
                    z.style.display = 'block';
                } else {
                    var A;
                    A = w('challenge-form');
                    if (A) {
                        if (w('jc-content')) {
                            A.innerHTML += '<div class="jc-content"><p style="background-color: #de5052; border-color: #521010; color: #fff;" class="jc-alert jc-alert-error">&#35813;&#32593;&#31449;&#36164;&#28304;&#26080;&#27861;&#36890;&#36807;&#27492;&#22320;&#22336;&#35775;&#38382;&#12290;</p></div>';
                        } else {
                            if (w('yjs-content')) {
                                A.innerHTML += '<div class="yjs-content"><p style="background-color: #de5052; border-color: #521010; color: #fff;" class="cf-alert cf-alert-error">&#35813;&#32593;&#31449;&#36164;&#28304;&#26080;&#27861;&#36890;&#36807;&#27492;&#22320;&#22336;&#35775;&#38382;&#12290;</p></div>';
                            } else {
                                A.innerHTML += '<div class="cf-content"><p style="background-color: #de5052; border-color: #521010; color: #fff;" class="cf-alert cf-alert-error">This web property is not accessible via this address.</p></div>';
                            }
                        }
                    }
                    var B;
                    var var_2 = w('cf-please-wait') || w('jc-please-wait');
                    B = var_2;
                    if (B) {
                        B.style.display = 'none';
                    }
                    var C;
                    var var_3 = w('cf-content') || w('yjs-content') || w('jc-content');
                    C = var_3;
                    if (C) {
                        C.style.display = 'none';
                    }
                }
                i('cf_chl_prog', 'hc', 'F');
                return ![];
            }
        }
        return !![];
    };
    var T;
    var U;
    T = '4|0|1|2|3'.split('|');
    U = 0;
    for (; !![];) {
        switch (T[U++]) {
        case '0': {
                K--;
                continue;
            }
        case '1': {
                if (0 == K) {
                    K = Math.pow(2, M);
                    M++;
                }
                continue;
            }
        case '2': {
                H[S] = L++;
                continue;
            }
        case '3': {
                J = String(R);
                continue;
            }
        case '4': {
                if (Object.prototype.hasOwnProperty.call(I, J)) {
                    var arg_10 = J.charCodeAt(0);
                    if (256 > arg_10) {
                        G = 0;
                        for (; G < M; (O <<= 1, P == E - 1 ? (P = 0, N.push(F(O)), O = 0) : P++), G++) {
                            ;
                        }
                        var V;
                        V = J.charCodeAt(0);
                        G = 0;
                        for (; 8 > G; (O = O << 1 | V & 1, P == E - 1 ? (P = 0, N.push(F(O)), O = 0) : P++, V >>= 1), G++) {
                            ;
                        }
                    } else {
                        V = 1;
                        G = 0;
                        for (; G < M; (O = O << 1 | V, P == E - 1 ? (P = 0, N.push(F(O)), O = 0) : P++, V = 0), G++) {
                            ;
                        }
                        V = J.charCodeAt(0);
                        G = 0;
                        for (; 16 > G; (O = O << 1 | V & 1, P == E - 1 ? (P = 0, N.push(F(O)), O = 0) : P++, V >>= 1), G++) {
                            ;
                        }
                    }
                    K--;
                    if (0 == K) {
                        K = Math.pow(2, M);
                        M++;
                    }
                    delete I[J];
                } else {
                    V = H[J];
                    G = 0;
                    for (; G < M; G++) {
                        O = O << 1 | V & 1;
                        var arg_11 = E - 1;
                        if (P == arg_11) {
                            P = 0;
                            var arg_12 = F(O);
                            N.push(arg_12);
                            O = 0;
                        } else {
                            P++;
                        }
                        V >>= 1;
                    }
                }
                continue;
            }
        }
        break;
    }
    G = function G(S, T) {
        var U;
        var V;
        var W;
        switch (V = N, W = T[S], W && 'object' === typeof W && 'function' === typeof W.toJSON && (W = W.toJSON(S)), C.wujwc === typeof P && (W = P.call(T, S, W)), typeof W) {
        case C.FCxcS: {
                return F(W);
            }
        case C.jYrHJ: {
                return isFinite(W) ? String(W) : 'null';
            }
        case C.nDGZC:
        case 'null': {
                return String(W);
            }
        case C.zifcS: {
                if (!W) {
                    return C.iuviM;
                }
                var X;
                N += O;
                X = [];
                if ('[object Array]' === Object.prototype.toString.apply(W)) {
                    var Y;
                    Y = W.length;
                    U = 0;
                    for (; U < Y; X[U] = G(U, W) || 'null', U += 1) {
                        ;
                    }
                    var Z;
                    if (0 === X.length) {
                        Z = '[]';
                    } else {
                        if (N) {
                            var arg_21 = '[\n' + N;
                            var arg_23 = ',\n' + N;
                            var arg_22 = X.join(arg_23);
                            Z = arg_21 + arg_22 + '\n' + V + ']';
                        } else {
                            Z = '[' + X.join(',') + ']';
                        }
                    }
                    N = V;
                    return Z;
                }
                if (P && C.zifcS === typeof P) {
                    Y = P.length;
                    U = 0;
                    for (; U < Y; U += 1) {
                        if (C.FCxcS === typeof P[U]) {
                            var a0;
                            a0 = P[U];
                            if (Z = G(a0, W)) {
                                var arg_25 = F(a0);
                                var arg_26 = null;
                                if (N) {
                                    arg_26 = ': ';
                                } else {
                                    arg_26 = ':';
                                }
                                var arg_24 = arg_25 + arg_26 + Z;
                                X.push(arg_24);
                            }
                        }
                    }
                } else {
                    for (a0 in W)
                        Object.prototype.hasOwnProperty.call(W, a0) && (Z = G(a0, W)) && X.push(F(a0) + (N ? ': ' : ':') + Z);
                }
                if (0 === X.length) {
                    Z = '{}';
                } else {
                    if (N) {
                        var arg_0 = ',\n' + N;
                        Z = '{\n' + N + X.join(arg_0) + '\n' + V + '}';
                    } else {
                        Z = '{' + X.join(',') + '}';
                    }
                }
                N = V;
                return Z;
            }
        }
    };
    d._cf_chl_done = function () {
        var t;
        var u;
        t = {};
        u = t;
        m('cf_chl_prog', 'b', 1);
        d._cf_chl_done_ran = !![];
    };
    var var_14 = e.cookie.indexOf(w) === -1 || !d.navigator.cookieEnabled;
    window['some-invalid-prop'] = 2;
    var o = o = function o() {
        var u;
        var v;
        var w;
        var x;
        u = {};
        v = u;
        var arg_21 = l('cf_chl_rc_i');
        w = d.parseInt(arg_21);
        if (isNaN(w)) {
            w = 0;
        }
        var arg_23 = 2 << w;
        var arg_22 = d.Math.min(arg_23, 128);
        x = 1000 * arg_22;
        var arg_24 = w + 1;
        m('cf_chl_rc_i', arg_24, 1);
        d.setTimeout(arg_25, x);
        d._cf_chl_enter = function () {
            var t;
            var u;
            t = {};
            u = t;
            if (d._cf_chl_opt.cLt !== 'd') {
                d._cf_chl_opt.cLt = 'd';
            } else {
                return;
            }
            var v;
            var w;
            var x;
            v = d._cf_chl_opt;
            w = 'cf_chl_' + v.cvId;
            m(w, v.cHash, 1);
            var var_4 = e.cookie.indexOf(w) === -1 || !d.navigator.cookieEnabled;
            x = var_4;
            if (x) {
                var y;
                y = e.getElementById('no-cookie-warning');
                if (y) {
                    y.style.display = 'block';
                }
                return void 0;
            }
            var z;
            var arg_5 = 'cf_chl_' + v.cvId;
            n(arg_5);
            m('cf_chl_prog', 's', 1);
            z = 0;
            for (; z < f.length; z++) {
                if (f[z]() === ![]) {
                    return;
                }
            }
            var A;
            m('cf_chl_prog', 'e', 1);
            A = {};
            A.chReq = v.cType;
            A.cNounce = v.cNounce;
            A.cvId = v.cvId;
            A.cRq = v.cRq;
            d._cf_chl_ctx = A;
            d.setTimeout(arg_6, 10);
            function arg_6() {
                var D;
                var E;
                if (v.cFPWv) {
                    D = 'h/' + v.cFPWv + '/';
                } else {
                    D = '';
                }
                var arg_7 = '/cdn-cgi/challenge-platform/' + D + 'flow/ov';
                E = arg_7 + 1 + '/0.9864985744345066:1618911646:60bd3612eabb488f69d62c994d5b41f3a24f633837823d60c98abad6b04ff7f5/' + v.cRay + '/' + v.cHash;
                d.sendRequest(E);
            }
        };
        function arg_25() {
            e.location.reload();
        }
    };
}());