export function stringToHex(str) {
    if (str === undefined || str === {} || str === "")
        str = " "
    const buf = Buffer.from(str, 'utf8');
    return buf.toString('base64')
}

export function hexToString(str) {
    return Buffer.from(str, 'base64').toString('utf8');
}
