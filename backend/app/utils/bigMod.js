export function safeMul(a, b, mod) {
    a = BigInt(a) % BigInt(mod);
    b = BigInt(b);
    mod = BigInt(mod);

    let result = 0n;

    while (b > 0n) {
        if (b & 1n) {
            result = (result + a) % mod;
        }

        a = (a + a) % mod;
        b >>= 1n;
    }

    return result;
}

export function bigMod(base, exp, mod) {
    base = BigInt(base) % BigInt(mod);
    exp = BigInt(exp);
    mod = BigInt(mod);

    if (mod === 1n)
        return 0n;

    let result = 1n;

    while (exp > 0n) {
        if (exp & 1n) {
            result = safeMul(result, base, mod);
        }

        base = safeMul(base, base, mod);
        exp >>= 1n;
    }

    return result;
}