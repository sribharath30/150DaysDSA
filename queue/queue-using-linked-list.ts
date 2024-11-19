class ListNodeQ {
    val: number | string;
    next: ListNodeQ | null;

    constructor(val: number | string) {
        this.val = val;
        this.next = null;
    }
}

class QueueL {
    private back: ListNodeQ | null;
    private front: ListNodeQ | null;
    private size: number;

    constructor() {
        this.back = null;
        this.front = null;
        this.size = 0;
    }

    enqueue(val: number) {
        let newNode = new ListNodeQ(val);
        if (!this.back) {
            this.back = newNode;
            this.front = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    };

    dequeue(): number | string | null {
        if (!this.front) {
            throw new Error("Linked list is empty");
        }
        const val = this.front.val;
        this.front = this.front.next;
        this.size--;
        return val;
    };

    length(): number {
        return this.size;
    }
}


const ql = new QueueL();
ql.enqueue(1);
ql.enqueue(2);
ql.enqueue(3);
ql.enqueue(4);
console.log(ql.length());
console.log(ql.dequeue());
console.log(ql.length());