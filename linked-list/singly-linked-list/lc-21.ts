import { createLinkedList } from "../../utils/create-linked-list"

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummyNode = new ListNode();
    let curr = dummyNode
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    if (list1) {
        curr.next = list1
    }
    if (list2) {
        curr.next = list2
    }
    return dummyNode;
}

let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);
console.log(mergeTwoLists(list1,list2));