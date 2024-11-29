Here’s a **4-day plan of daily queue-based questions**, starting with the basics and progressing to advanced concepts. These are designed to help you solidify your understanding of queues and their variations (like circular queues, dequeues, and priority queues).  

---

### **Day 1: Queue Basics**  
1. **Implement a Queue using an Array**  
   - Enqueue (add element)  
   - Dequeue (remove element)  
   - Peek (front element)  
   - Check if the queue is empty/full  

2. **Reverse a Queue**  
   - Input: `[1, 2, 3, 4, 5]`  
   - Output: `[5, 4, 3, 2, 1]`  

3. **Generate Binary Numbers from 1 to N using a Queue**  
   - Input: `N = 5`  
   - Output: `1, 10, 11, 100, 101`  

---

### **Day 2: Intermediate Problems**  
1. **Implement a Circular Queue**  
   - Support wrap-around in a fixed-size array.  
   - Operations: Enqueue, Dequeue, Peek, Check empty/full.  

2. **First Non-Repeating Character in a Stream**  
   - Input: `"aabc"`  
   - Output: `["a", "a", "-1", "b"]`  
   - Use a queue to track the first non-repeating character.  

3. **Interleave the First Half of a Queue with the Second Half**  
   - Input: `[1, 2, 3, 4, 5, 6]`  
   - Output: `[1, 4, 2, 5, 3, 6]`  

---

### **Day 3: Advanced Problems**  
1. **Implement a Queue using Two Stacks**  
   - Implement enqueue and dequeue operations.  

2. **Sort a Queue using Recursion**  
   - Input: `[3, 1, 4, 2]`  
   - Output: `[1, 2, 3, 4]`  

3. **Check if a Queue can be Sorted using a Stack**  
   - Given a queue, determine if it can be sorted into increasing order by using a stack as an auxiliary data structure.  

---

### **Day 4: Variants of Queues**  
1. **Sliding Window Maximum**  
   - Input: `nums = [1,3,-1,-3,5,3,6,7], k = 3`  
   - Output: `[3, 3, 5, 5, 6, 7]`  
   - Use a deque to maintain the indices of useful elements.  

2. **LRU Cache Implementation**  
   - Use a queue or deque with a hash map to implement the least recently used cache mechanism.  

3. **Design a Hit Counter**  
   - Keep track of hits received in the last 5 minutes (300 seconds).  
   - Input:  
     - `hit(timestamp)` logs a hit at `timestamp`.  
     - `getHits(timestamp)` returns the number of hits in the last 300 seconds.  

---

These questions cover fundamental queue operations, problem-solving with queues, and real-world applications. Let me know if you need any explanations or solutions!