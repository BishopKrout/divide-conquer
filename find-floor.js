function findFloor() {
    let left = 0;
    let right = arr.length - 1;
    let floorValue = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            return arr[mid];
        } else if (arr[mid] < x) {
            floorValue = arr[mid];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return floorValue;
}

module.exports = findFloor