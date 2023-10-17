function sortedFrequency(arr, num) {
    function binarySearchFirst() {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left; 
    }

    function binarySearchLast() {
        let left = 0;
        let riht = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > num) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } return right;
    }
    const firstIdx = binarySearchFirst();
    const lastIdx = binarySearchLast();

    if (firstIdx > lastIdx) return - 1;

    return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency