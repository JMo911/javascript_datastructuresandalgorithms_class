//NEARLY IDENTICAL TO SINGLY LINKED LIST... STILL NO INDEXES... EVERY NODE SIMPLY POINTS TO THE NEXT NODE AND THE PREVIOUS NODE
//LARGE IMPACT ON THE CODE WE WRITE AND EFFICIENCY OF CERTAIN OPERATIONS...
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            let temp = this.tail;
            this.tail = newNode;
            temp.next = newNode;
            newNode.previous = temp;
        }
        return ++this.length;
    }
}