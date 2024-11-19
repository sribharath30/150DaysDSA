class Queue {
    private queue: number[];
    constructor() {
        this.queue = [];
    }
    enqueue(val: number) {
        this.queue.push(val);
    }
    dequeue() {
        return this.queue.shift();
    }
    size() {
        return this.queue.length;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.size());