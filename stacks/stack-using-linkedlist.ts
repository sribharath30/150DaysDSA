class ListNodeS {
    val: number | string;
    next: ListNodeS | null;

    constructor(val: number | string) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    private head: ListNodeS | null = null;
    private size = 0;
    insertAtBeginning(val: number | string) {
        const newNode = new ListNodeS(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    deleteFromBeginning(): string | number {
        if (!this.head) return -1;
        const val = this.head.val;
        this.head = this.head.next;
        this.size--;
        return val;
    }
    length(): number {
        return this.size
    }
}

class StackLL{
    private linkedList : LinkedList;
    constructor(){
        this.linkedList = new LinkedList();
    }
    push(val: string | number){
        this.linkedList.insertAtBeginning(val);
    }
    pop(): string | number{
       const val =  this.linkedList.deleteFromBeginning();
       if(val == -1){
            throw new Error('stack underflow error');       
       }
       return val;
    }
    size(): number{
        return this.linkedList.length();
    }
}

const st = new StackLL();
st.push(10);
st.push(20);
st.push(30);
console.log(st.pop());
console.log(st.size());
console.log(st.pop());
console.log(st.size());
console.log(st.pop());
st.pop();