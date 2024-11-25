import { createLinkedList } from "../utils/create-linked-list";

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let stack: number[] = []
    while (slow && fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(stack);
    if (fast && slow) {
        slow = slow.next;
    }
    while (slow) {
        if (stack.pop() !== slow.val) {
            return false;
        }
        slow = slow.next;
    }
    console.log(stack);
    return true;
};
let list = createLinkedList([1, 2, 2, 1]);
console.log(isPalindrome(list));