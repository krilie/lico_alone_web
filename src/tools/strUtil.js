export function stringToHex(str) {
    if (str === undefined || str === {} || str === "")
        str = " "
    var val = "";
    for (var i = 0; i < str.length; i++) {
        if (val == "")
            val = str.charCodeAt(i).toString(16);
        else
            val += "," + str.charCodeAt(i).toString(16);
    }
    return val;
}

export function hexToString(str) {
    var val = "";
    var arr = str.split(",");
    for (var i = 0; i < arr.length; i++)
        val += arr[i].fromCharCode(i);
    return val;
}
