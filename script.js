function threeSum(arr, target) {
    if (arr.length < 3) {
        return null; // There are not enough elements to form a sum of 3
    }

    arr.sort((a, b) => a - b); // Sort the array in ascending order

    let closestSum = arr[0] + arr[1] + arr[2];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;

