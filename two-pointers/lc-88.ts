function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let cursor = m + n - 1;
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[cursor] = nums1[m - 1];
            m--;
        } else {
            nums1[cursor] = nums2[n - 1];
            n--
        }
        cursor--;
    }
    while (n > 0) {
        nums1[cursor] = nums2[n - 1];
        n--;
        cursor--;
    }
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);