export { isNonNullObject, isUint8Array } from '@cosmjs/utils';

/**
 * Sorts an object properties recursively.
 *
 * @param jsonObj object to sort
 * @returns a new object with keys sorted alphabetically
 */
export const sortJSON = <T>(jsonObj: T): T => {
    if (jsonObj instanceof Array) {
        for (let i = 0; i < jsonObj.length; i++) {
            jsonObj[i] = sortJSON(jsonObj[i]);
        }
        return jsonObj;
    } else if (typeof jsonObj !== 'object') {
        return jsonObj;
    }

    let keys = Object.keys(jsonObj) as Array<keyof T>;
    keys = keys.sort();
    const newObject: Partial<T> = {};
    for (let i = 0; i < keys.length; i++) {
        newObject[keys[i]] = sortJSON(jsonObj[keys[i]]);
    }
    return newObject as T;
};
