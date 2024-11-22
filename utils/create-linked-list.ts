class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
export function createLinkedList(arr: number[]) {
    let dummy = new ListNode();
    let current = dummy;
  
    for (let num of arr) {
      current.next = new ListNode(num);
      current = current.next;
    }
  
    return dummy.next; // Return the actual head of the linked list
  }