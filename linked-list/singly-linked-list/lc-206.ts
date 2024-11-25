import { createLinkedList } from "../../utils/create-linked-list";

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let curr: ListNode | null = head;
    let prev: ListNode | null = null;
    while (curr) {       
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode
    }
    return prev;
};

const list = createLinkedList([1,2,3,4,5]);

console.log(reverseList(list));