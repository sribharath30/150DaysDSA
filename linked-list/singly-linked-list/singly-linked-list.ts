export type Value = string | number;

class SinglyListNode {
    value: Value;
    next: SinglyListNode | null;

    constructor(data: Value) {
        this.value = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    private head: SinglyListNode | null = null;

    public insert(value: Value): Value {
        const newNode = new SinglyListNode(value);
        newNode.next = this.head;
        this.head = newNode
        return value;
    }

    public insertAtEnd(value: Value): Value {
        const newNode = new SinglyListNode(value);
        let current = this.head;
        if (!this.head) {
            this.head = newNode;
            return value;
        }
        while (current?.next) {
            current = current.next;
        }
        if (current) {
            current.next = newNode;
        }
        return value;
    };

    public remove(value: Value): Value {
        if (!this.head) return -1;
        if (this.head?.value == value) {
            this.head = this.head.next;
            return -1;
        }
        let current = this.head;
        while (current?.next) {
            if (current.next.value == value) {
                const removedValue = current.next.value;
                current.next = current.next.next;
                return removedValue
            }
            current = current.next
        };
        return -1
    };

    public print(): void {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join('---->'))
    }
}

const newLinkedlIst = new SinglyLinkedList();
newLinkedlIst.insert(10);
newLinkedlIst.insert(20);
newLinkedlIst.insertAtEnd(30);
newLinkedlIst.remove(30);
newLinkedlIst.print();