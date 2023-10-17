function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated
    if (arr[left] <= arr[right]) return 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if mid element is the smallest
        if (arr[mid] < arr[mid - 1]) {
            return mid;
        }

        // If left half is sorted, smallest element is in right half
        if (arr[left] <= arr[mid]) {
            left = mid + 1;
        } else {
            // Else, smallest element is in left half
            right = mid - 1;
        }
    }

    return 0;  // Return 0 if the array is already sorted and not rotated
}

module.exports = findRotationCount