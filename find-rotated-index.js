function findRotatedIndex() {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        } else if (arr[left] <= arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return 0;
}

function binarySearch(arr, num, start, end) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

function findRotatedIndex(arr, num) {
    let rotationIndex = findRotatedIndex(arr);

    if (arr[rotationIndex] === num) {
        return rotationIndex;
    }
    let leftSearch = binarySearch(arr, num, 0, rotationIndex - 1);
    let rightSearch = binarySearch(arr, num, rotationIndex, arr.length - 1);

    return leftSearch !== -1 ? leftSearch : rightSearch;
}
module.exports = findRotatedIndex