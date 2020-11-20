export function stringToHex(str) {
    if (str === undefined || str === {} || str === "")
        str = " "
    const buf = Buffer.from(str, 'utf8');
    return buf.toString('hex')
}

export function hexToString(str) {
    return Buffer.from(str, 'hex').toString('utf8');
}
