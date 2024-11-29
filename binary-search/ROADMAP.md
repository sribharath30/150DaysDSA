Here’s a **4-day plan of binary search problems**, starting with the basics and gradually advancing to tougher problems and variations:

---

### **Day 1: Basics of Binary Search**

1. **Binary Search on a Sorted Array**

   - Input: `arr = [1, 3, 5, 7, 9], target = 7`
   - Output: `3` (index of the target)

2. **Find the First and Last Position of an Element in a Sorted Array**

   - Input: `nums = [5, 7, 7, 8, 8, 10], target = 8`
   - Output: `[3, 4]`

3. **Find the Square Root (Integer Part) of a Number**
   - Input: `x = 8`
   - Output: `2`
   - Use binary search to compute \( \lfloor \sqrt{x} \rfloor \).

---

### **Day 2: Variations on Binary Search**

1. **Search Insert Position**

   - Input: `nums = [1, 3, 5, 6], target = 5`
   - Output: `2`

2. **Find the Minimum in a Rotated Sorted Array**

   - Input: `nums = [4, 5, 6, 7, 0, 1, 2]`
   - Output: `0`

3. **Search in a Rotated Sorted Array**
   - Input: `nums = [4, 5, 6, 7, 0, 1, 2], target = 0`
   - Output: `4`

---

### **Day 3: Advanced Applications**

1. **Find Peak Element**

   - Input: `nums = [1, 2, 3, 1]`
   - Output: `2` (index of the peak element)

2. **Median of Two Sorted Arrays**

   - Input: `nums1 = [1, 3], nums2 = [2]`
   - Output: `2.0`

3. **Kth Smallest Element in a Sorted Matrix**
   - Input:
     ```
     matrix = [
       [1, 5, 9],
       [10, 11, 13],
       [12, 13, 15]
     ], k = 8
     ```
   - Output: `13`

---

### **Day 4: Beyond Arrays**

1. **Capacity to Ship Packages Within D Days**

   - Input: `weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5`
   - Output: `15`
   - Use binary search to find the minimum capacity of the ship.

2. **Split Array Largest Sum**

   - Input: `nums = [7, 2, 5, 10, 8], m = 2`
   - Output: `18`
   - Minimize the largest sum among `m` subarrays.

3. **Allocate Minimum Number of Pages**
   - Input: `books = [12, 34, 67, 90], students = 2`
   - Output: `113`
   - Allocate books such that the maximum pages assigned to a student is minimized.

---

### Why These Questions?

- **Day 1** focuses on learning and practicing the core of binary search.
- **Day 2** introduces variations like rotated arrays.
- **Day 3** delves into challenging problems that involve binary search in creative ways.
- **Day 4** showcases real-world applications where binary search is applied beyond simple arrays.

Let me know if you'd like any solutions or further explanation!
