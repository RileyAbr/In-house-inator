export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function createObjectFromTwoArrays(keyArray, valueArray) {
    return Object.assign(
        ...keyArray.map((v, i) => ({
            [v]: valueArray[i],
        }))
    );
}
