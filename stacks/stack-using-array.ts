class Stack {
    private stack: number[];
    constructor() {
        this.stack = [];
    }
    push(val: number) {
        this.stack.push(val);
    }
    pop() {
        return this.stack.pop();
    }
    size() {
        return this.stack.length;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.size());