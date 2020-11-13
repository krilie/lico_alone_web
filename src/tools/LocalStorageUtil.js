import store from 'storejs';

const UserTraceId = "UserTraceId";

// customer id
export function GetCustomerTraceId() {
    let traceId = store.get(UserTraceId) ?? ""
    if (traceId === "") {
        traceId = generateUUID()
        store.set(UserTraceId, traceId)
    }
    return traceId;
}

export function SetCustomerTraceId(id) {
    store.set(UserTraceId, id)
}

/**
 * generateUUID 生成UUID
 * @returns {string} 返回字符串
 */
function generateUUID() {
    const s = [];
    const hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "";
    return s.join("");
}