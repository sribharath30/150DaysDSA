import { createLinkedList } from "../../utils/create-linked-list";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }
  const node = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return node;
}

const list = createLinkedList([1, 2, 3, 4, 5]);
console.log(reverseList(list));
