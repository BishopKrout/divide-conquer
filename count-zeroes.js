function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    console.log({mid})
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
        console.log(yoy)
        return arr.length - mid;
    } else if (arr[mid] === 1) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }
}

module.exports = countZeroes