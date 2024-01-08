// const input = '{"chReq":"non-interactive","cNounce":"58001","cvId":"2","chC":0,"chCAS":0,"oV":1,"cRq":{"ru":"aHR0cHM6Ly93d3cubWFsdC5mci8=","ra":"TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkwLjAuNDQzMC44NSBTYWZhcmkvNTM3LjM2","rm":"R0VU","d":"DbKrLEg4z50k+5o/kDJV/lTVc11UiB19XDcT1fn4nJHDqQzHdlO0C/FTAAsTMjHuSt7wZXfPhvA7LDSwR0uW2fBuvhuyKT6Rp91jcAJoHuJQdkmEN4mmiWJYyCI/DeQGQ8M66tU9XjDN5cFEsNGZBE76EUJRRXbZi5tYnPfaRAP7FUA56sMIQDnDXkoIKabUAIhGT/2w1/h83SzHfS3LMEqBAuUxqA0hlU4QQjQsA/vPD/rsXLiSMcxbeyQ2xXvE8lZs1XXn+9/BlygOaUBPxV+rS9Uvc1UShMwcu+mOEu0d355rmXIHJ2NsdQO6ajeZ0rVrRftMJ0S8RSKSBfxTm1dKUZQbzpN8BtOV++c7wJ01Qul1brvJwSDzPsSQSxSkMMGEwrlZF6cD9byaRyXAFn7avWGEqDGIvNhVhqEGrFfZabYAeEQfWfaw32vj13ALNOd9kCYFjBC5PgtimUvMbMVqE7BKS7lkALbmFcQ/g5Vg5028wrwlZljRyiy3e5CYgBWjsxfCrIWMnCe96N1dh3n2KvSv/pekstdI/QMaLyCiHhwvXoqZbyTd1chjjgGLm1PuW9t3832G/xdHcRIyuToL7CKTUiR77KUxsQRvleGMZpNzSzux1tc2HYQ4dRmWRxgUmveHYzXUCer8V4KSzo8BDscdccE4iUNUXgCAzm30uoeXczXtN0Utp5lnX8bmEUXc34wHkGPIbHIlj31Oxw==","t":"MTYxOTEwMTk4NS44MTEwMDA=","m":"qVQ5eZPXw/01oLEXAJquaklcPy6e754Jf/aAfB8FZJg=","i1":"v9L0mqFWQE7HZcyucBOtJA==","i2":"p/gDcS9RzPRltCzU9xyKlQ==","zh":"lC+oCJbZUA7Q9Se4EeNKPzZ76MtIXw7omhJlMi8uGh8=","uh":"k5IEY/bSNdocJ67cjNSQVyvfn/aWh2K87ysj0jD8UF4=","hh":"egK42bw1/XT0/X5yBmca11NZ9SXb74tnzVqir92xopI="}}';
// const expectedOutput = "xFIOqOZOGOMO6R0b$0EOpq1uOK5W$FXha02LVBOfFXO0gF03LOPFM6bI$w0V00Xv$JB3h1$G0-D1O0+-JOh2KmisD0OOf8ZEx0mzQt980GK12KMaI0KPmi0u0wOm50JO-v0y0f5qVw-Xhf0aW05Oma5yI30H9OAZX0S-IQQO0n0uFaq0-0VR-0LLM3t-F08RW0dOmG1uI0myTczh+pELbK0m50RL8ADGMJEO0RIubjzLNJlJzE0aXRZL8GlVI0NLzE0hW01OmC7OmRACw0uO-0zQk-TqgzlJUAVR8AzRKD--dn18$43BBUoAA-Idn+5u-kg12oZDsmMG$0CeqG72BKX0HAuAqP7bW0XTPHw3O0H0+TJmQsQ0Q3IfhIwwry3VwzyWUIMKsxW0PM$$+I09o$n-KX0z+PhKcVhFDX0NhXg0hT95mzkju8B9HjJmv76wk$r72CE5mJmK7O0Jq1hK1MXw0iOCIw56j0VQpVK9zZpRW1yER25LfWvxxBQENRj00W1$Onj9a09nrruKOhP1Li9J$O1KOC$sKhq1fMC76ZJ0nzdWbAymMR9jc1bg0LcGH5JTdZqD-GDO5XmMkmM3cXaemwtbZ0rgm2OIP$QHge9V+j$T5a1bwgd1PmseqVr03e$dZ$2Q4-P0nze+IHwU13hX2aXRmWmZ0mErHx0R$s-eXbQ11erKu8Gr9oZU$0C0vx1z1w-gN0paqh+O+5oy9HIFhzVOImjEQ$1TmWM2$Zc91WzJhUU1O1yuKqwmzaXX$DeX5h3f-wyu$2hGFxW62$72NyuZhK+3u8x6jZXDQE52AzAzJwLgG8$mzxqA1Wm8A+z$0kfAbqKzRcNhG5V2S0Fm2$-RE5dUac5XOTcgJLPf062F12B-IP0++Xaq+2F0WWmz$MOcxHKQQR7Oq0nEQ6OTeXzcnpOC-AehVuQDzX-mEio0TKOAyFeq$0WzdB6z05z8m-IN0Tx1w6z95kmwe9huA12AP$hXX0fxqIGeZqN2zIIzfL5OP0$fnF0fe5chC$hB0Oahh+A1OO2xIFeNDZ15-ZmW+1$1lBOvP1PfP7OehzKqT-EJ14fuac3R$5MxORzJDyIGIZHweXkfgPrMQAViM6j99mSnIIX0TuzDOFr119FP1Cmnk9AHj5WWh3r0b0vf0a0CwMxO$5W1RD-gd-I-106wZ0dhOEKT$$R0eh1P1POWx1PZUfW5fu-Ivm-Ewa6w52bmQr0H0Or5PVux0F$aGZQ6-72IfP5WD6AKq0BmcJ4mXmq1PQe99GDJ1Hm0P0ch3K2Q61KqM6QrxBGOj9M2$yIaQjxW5mAaX6RRUZXP5HKomXJ0M0wbIaOKJ1W-R0IW$DJMAzRPO0dcE9A8KXOCfg0Q7Kcx05nfJ0qm0Jhh1KrhAbWEUN6Pa18hcGIehFKOghOE5XV6ShThFEQvhnmOA21E5CVn9EfFv0UBOw95lUm-1t0w-1F5v72VGDr5FOGaOv-QVM3RDcNQUnyMULKx1RcTbph2zZp1h990FfgmWaZwgxNLAuzhZxX8aBaa0LfI95A60zJb03m0j5V0$GyhxHP5OPOzq3$$-3zF9cik5--JO$OrOy0v-RV0II01aOHUhf0IA5hxRa6XP3JoR$9mIhnJm1g3QW$ZGOfge03OzcmRDZL+WDv20WOOKIxW32KcWmQP3+3ZdMOEm3fWf0hKh1XVWhzzJPI6RH6wVO-16lM2W-Rh0zFr1k$q$5Vw-$dvL$va1JwmOI2hGdZUVFx1l0qhWm0P3hXgXXmZhKhgr1HOPhLOO1-$0BJCm+h3$-5We0cq3V9--0QdvIhLK0m0GWhIMho-0sPE5D1p09IF$F+5gcR$jyW-3GcfdMO-6X$OZ-rNw$-m3ZIHIj0jOR0G00bNjz00";
// const output = encrypt_payload(input);
// console.log("INPUT: " + input);
// console.log("\n\n\n");
// console.log("OUTPUT: " + output);
//
// console.log("Result matches: " + (output === expectedOutput));

export function encrypt_payload(input: string, encryptRange: string): string {
  var F = 6;
  var replaceChar = function (ix) {
    return '0h$m-ZfVIKPHJxae1cG+z8ub59jr3Ep7O2R6QULyWMnswBCSXqDigNA4FdTkvlotY'.charAt(ix);
  }

  if (null == input) {
    return '';
  }
  var H;
  var I;
  var J;
  var K;
  var L;
  var M;
  var N;
  var O;
  var P;
  var Q;
  var R;
  I = {};
  J = {};
  K = '';
  L = 2;
  M = 3;
  N = 2;
  O = [];
  P = 0;
  Q = 0;
  R = 0;
  for (; R < input.length; R += 1) {
    var S;
    var T;
    S = input.charAt(R);
    if (!Object.prototype.hasOwnProperty.call(I, S)) {
      I[S] = M++;
      J[S] = true;
    }
    T = K + S;
    if (Object.prototype.hasOwnProperty.call(I, T)) {
      K = T;
    } else {
      if (Object.prototype.hasOwnProperty.call(J, K)) {
        if (256 > K.charCodeAt(0)) {
          H = 0;
          for (; H < N; H++) {
            P <<= 1;
            if (Q == F - 1) {
              Q = 0;
              var arg_115 = replaceChar(P);
              O.push(arg_115);
              P = 0;
            } else {
              Q++;
            }
          }
          var U;
          U = K.charCodeAt(0);
          H = 0;
          for (; 8 > H; H++) {
            P = P << 1 | U & 1;
            if (Q == F - 1) {
              Q = 0;
              var arg_116 = replaceChar(P);
              O.push(arg_116);
              P = 0;
            } else {
              Q++;
            }
            U >>= 1;
          }
        } else {
          U = 1;
          H = 0;
          for (; H < N; H++) {
            P = P << 1 | U;
            if (Q == F - 1) {
              Q = 0;
              var arg_117 = replaceChar(P);
              O.push(arg_117);
              P = 0;
            } else {
              Q++;
            }
            U = 0;
          }
          U = K.charCodeAt(0);
          H = 0;
          for (; 16 > H; H++) {
            P = P << 1 | U & 1;
            if (Q == F - 1) {
              Q = 0;
              var arg_118 = replaceChar(P);
              O.push(arg_118);
              P = 0;
            } else {
              Q++;
            }
            U >>= 1;
          }
        }
        L--;
        if (0 == L) {
          L = Math.pow(2, N);
          N++;
        }
        delete J[K];
      } else {
        U = I[K];
        H = 0;
        for (; H < N; H++) {
          P = P << 1 | U & 1;
          var arg_74 = F - 1;
          if (Q == arg_74) {
            Q = 0;
            var arg_75 = replaceChar(P);
            O.push(arg_75);
            P = 0;
          } else {
            Q++;
          }
          U >>= 1;
        }
      }
      L--;
      if (0 == L) {
        L = Math.pow(2, N);
        N++;
      }
      I[T] = M++;
      K = String(S);
    }
  }
  if ('' !== K) {
    if (Object.prototype.hasOwnProperty.call(J, K)) {
      if (256 > K.charCodeAt(0)) {
        H = 0;
        for (; H < N; H++) {
          P <<= 1;
          if (Q == F - 1) {
            Q = 0;
            var arg_119 = replaceChar(P);
            O.push(arg_119);
            P = 0;
          } else {
            Q++;
          }
        }
        U = K.charCodeAt(0);
        H = 0;
        for (; 8 > H; H++) {
          P = P << 1 | U & 1;
          if (Q == F - 1) {
            Q = 0;
            var arg_120 = replaceChar(P);
            O.push(arg_120);
            P = 0;
          } else {
            Q++;
          }
          U >>= 1;
        }
      } else {
        U = 1;
        H = 0;
        for (; H < N; H++) {
          P = P << 1 | U;
          if (Q == F - 1) {
            Q = 0;
            var arg_121 = replaceChar(P);
            O.push(arg_121);
            P = 0;
          } else {
            Q++;
          }
          U = 0;
        }
        U = K.charCodeAt(0);
        H = 0;
        for (; 16 > H; H++) {
          P = P << 1 | U & 1;
          if (Q == F - 1) {
            Q = 0;
            var arg_122 = replaceChar(P);
            O.push(arg_122);
            P = 0;
          } else {
            Q++;
          }
          U >>= 1;
        }
      }
      L--;
      if (0 == L) {
        L = Math.pow(2, N);
        N++;
      }
      delete J[K];
    } else {
      U = I[K];
      H = 0;
      for (; H < N; H++) {
        var arg_76 = P << 1;
        var arg_77 = U & 1;
        P = arg_76 | arg_77;
        if (Q == F - 1) {
          Q = 0;
          var arg_78 = replaceChar(P);
          O.push(arg_78);
          P = 0;
        } else {
          Q++;
        }
        U >>= 1;
      }
    }
    L--;
    if (0 == L) {
      N++;
    }
  }
  U = 2;
  H = 0;
  for (; H < N; H++) {
    P = P << 1 | U & 1;
    if (Q == F - 1) {
      Q = 0;
      var arg_123 = replaceChar(P);
      O.push(arg_123);
      P = 0;
    } else {
      Q++;
    }
    U >>= 1;
  }
  for (; ;) {
    P <<= 1;
    if (Q == F - 1) {
      var arg_79 = replaceChar(P);
      O.push(arg_79);
      break;
    } else {
      Q++;
    }
  }
  return O.join('');
}