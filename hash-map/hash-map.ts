class ListNode {
    public val: number | null;
    public next: ListNode | null;
    constructor(val?: number) {
        this.next = null;
        this.val = val ?? null;
    }
}
class MyHashMap {
    private bucket;
    private maxSize = 1000;
    constructor() {
        this.bucket = new Array(this.maxSize);
    }

    put(key: number, value: number): void {
        const index = key % this.maxSize;
        const headNode = this.bucket[index];
        if (!headNode) {
            let dummyNode = new ListNode();
            let valueNode = new ListNode(value);
            dummyNode.next = valueNode;
            this.bucket[index] = dummyNode;
        } else {
            if (headNode.next != null) {
                // let curr = headNode.next;
                while (headNode.next != null) {
                    if (headNode.next.next == null) {
                        let valueNode = new ListNode(value);
                        headNode.next.next = valueNode;
                        return;
                    }
                    headNode.next = headNode.next.next;
                }
            } else {
                headNode.val = value;
            }
        }
    }

    get(key: number): number {
        const index = key % this.maxSize;
        const valNode = this.bucket[index];
        if (valNode) {
            let curr = valNode;
            if (curr.next == null) {
                return -1;
            }
            while (curr) {
                if (curr.next == null) {
                    return curr.val
                }
                curr = curr.next;
            }
        }
        return -1;
    }

    remove(key: number): void {
        const index = key % this.maxSize;
        const valNode = this.bucket[index];
        if (valNode) {
            valNode.next = null;
            valNode.val = null;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
// [[],          [1, 1], [2, 2], [1],  [3],  [2, 1], [2],     [2],    [2]]
// [null, null, null, 1, -1, null, 1, null, -1]
// const myHashMap = new MyHashMap();
// myHashMap.put(1, 1);
// myHashMap.put(2, 2 );
// console.log(myHashMap.get(1));
// console.log(myHashMap.get(3));
// myHashMap.put(2, 1);
// console.log(myHashMap.get(2));
// myHashMap.remove(2);
// console.log(myHashMap.get(2));


const myHashMap = new MyHashMap();
myHashMap.remove(14);
// myHashMap.put(2, 2 );
// console.log(myHashMap.get(1));
// console.log(myHashMap.get(3));
// myHashMap.put(2, 1);
// console.log(myHashMap.get(2));
// myHashMap.remove(2);
// console.log(myHashMap.get(2));
