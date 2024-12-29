class LRUCache {
    maxCapacity: number;
    capacity: number;
    linkedList: DoublyLinkedList;
    keyListNodeMap: Map<number, ListNodenode>;

    constructor(capacity: number) {
        this.maxCapacity = capacity;
        this.capacity = 0;
        this.keyListNodeMap = new Map();
        this.linkedList = new DoublyLinkedList();
    }

    get(key: number): number {
        const mapValue = this.keyListNodeMap.get(key);
        if (mapValue) {
            this.deleteReference(mapValue);
            this.insertAfterHead(this.linkedList.head, mapValue);
            return mapValue.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (!this.keyListNodeMap.has(key)) {
            const newNode = new ListNodenode(value, key);
            if (this.capacity === this.maxCapacity) {
                //delete the node previous to tail
                const nodeToDelete = this.linkedList.tail.prev!;
                this.deleteReference(nodeToDelete);
                this.keyListNodeMap.delete(nodeToDelete.key);
                this.capacity--;
                //add the newNode after head
            }
            this.insertAfterHead(this.linkedList.head, newNode);

            this.keyListNodeMap.set(key, newNode);
            this.capacity++;
        } else {
            const nodeToUpdate = this.keyListNodeMap.get(key)!;
            this.deleteReference(nodeToUpdate);
            nodeToUpdate.val = value;
            this.insertAfterHead(this.linkedList.head, nodeToUpdate);
        }
    }

    deleteReference(node: ListNodenode | null) {
        if (node && node.prev && node.next) {
            let prev = node.prev;
            let next = node.next;
            node.prev = null;
            node.next = null;
            prev.next = next;
            next.prev = prev;
        }
    }

    insertAfterHead(head: ListNodenode, nodeToInsert: ListNodenode) {
        if (head.next) {
            head.next.prev = nodeToInsert;
            nodeToInsert.next = head.next;
        }
        head.next = nodeToInsert;
        nodeToInsert.prev = head;
    }
}

class ListNodenode {
    val: number;
    key: number;
    next: ListNodenode | null;
    prev: ListNodenode | null;

    constructor(val: number, key: number) {
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    head: ListNodenode;
    tail: ListNodenode;
    constructor() {
        const dummyHead = new ListNodenode(-1, -1);
        const dummyTail = new ListNodenode(0, 0);
        dummyHead.next = dummyTail;
        dummyTail.prev = dummyHead;

        this.head = dummyHead;
        this.tail = dummyTail;
    }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.linkedList);
console.log(lRUCache.get(1)); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 3
console.log(lRUCache.get(4));
