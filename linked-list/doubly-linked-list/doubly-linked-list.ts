import { Value } from "../singly-linked-list/singly-linked-list";

class DoublyListNode {
    val: Value;
    next: DoublyListNode | null;
    prev: DoublyListNode | null;

    constructor(val: Value) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    private head: DoublyListNode | null = null;
    private tail: DoublyListNode | null = null;

    insert(val: Value) {
        const newNode = new DoublyListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        let current = this.head;
        current.prev = newNode;
        newNode.next = current;
        this.head = newNode;
    };

    insertAtEnd(val: Value) {
        const newNode = new DoublyListNode(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        };
        let current = this.tail;
        current.next = newNode;
        newNode.prev = current;
        this.tail = newNode;
    };

    removeAtBeginning() {
        if (!this.head) {
            return -1;
        };
        const val = this.head.val;
        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        };
        return val;
    };

    removeAtEnd() {
        if (!this.tail) {
            return -1;
        }
        const val = this.tail.val;
        if (this.tail.prev == null) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null
        }
        return val;
    }

    remove(val: Value) {
        if (!this.head || !this.tail) return -1;
        if (this.head.val == val) {
            return this.removeAtBeginning();
        }
        if (this.tail.val == val) {
            return this.removeAtEnd();
        }
        let current = this.head;
        while (current && current.next) {
            if (current.val == val && current.next && current.prev) {
                let returnValue = current.val;
                current.prev.next = current.next;
                current.next.prev = current.prev;
                return returnValue;
            }
            current = current.next
        };
        return -1
    }

    print() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.val);
            current = current.next;
        }
        console.log(values.join(' <-> '))
    }
}

const newList = new DoublyLinkedList();
newList.insert(10);
newList.insert(20);
newList.insertAtEnd(30);
newList.remove(20);
newList.print();
newList.removeAtBeginning();
newList.print();
// newList.removeAtEnd();
newList.print();