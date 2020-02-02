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
    //ABOUT THE SAME AS SINGLY LINKED LIST, JUST MAKE SURE TO INCLUDE PREVIOUS POINTER BEHAVIOR
    push(value){

        //TEACHERS SOLUTION
        let newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length ++;
        return this;
        // let newNode = new Node(value);
        // if(!this.head) {
        //     this.head = this.tail = newNode;
        // } else {
        //     let temp = this.tail;
        //     this.tail = newNode;
        //     temp.next = newNode;
        //     newNode.previous = temp;
        // }
        // this.length++;
        // return this;
    }
    //EASIER COMPARED TO SINGLY LINKED LIST BECAUSE WE HAVE THE PREVIOUS POINTER..
    pop(){
        //remove last node from list and return it
        //decrement length by 1
        //make sure list exists
        //if list is only one item long, set tail and head to null, with all null next and prev pointers..
        //TEACHERS SOLUTION
        if (!this.head) return false;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = this.head = null;
        } else{
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous = null;
        }
        this.length--;
        return poppedNode;

        // if (!this.head) return false;
        // let temp = this.tail;
        // if(this.length === 1){
        //     this.tail = this.head = null;
        // }else{
        //     this.tail = this.tail.previous;
        //     this.tail.next = null;
        //     temp.previous = null; // make sure to erase both linkages
        // }
        // this.length--;
        // return temp;
    }
    //shift - REMOVE NODE FROM BEGINNING.. similar difficulty to SLL, no particular benefit for this function.
    shift(){
        //make sure there's a list
        //if list only has one node, simply return that node, set head and tail to null, and decrement length
        //otherwise, set the head to be the current head's .next, remove it's previous linkage to the old head, and decrement length
        //TEACHERS SOLUTION
        if(this.length === 0) return false;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;


        // if(!this.head) return false;
        // let tempHead = this.head;
        // if(this.length === 1){
        //     this.head = this.tail = null;
        // } else{
        //     this.head = this.head.next;
        //     this.head.previous = null;
        //     tempHead.next = null;
        // }
        // this.length--;
        // return tempHead;
    }
    //unshift - add node to the beginning of list
    unshift(value){
        //create a new node with the value we feed in
        //make that new node the new head of the list
        //make the old heads .previous reference the new head
        //make the new heads .next reference the old head
        //if there's no existing list, set head and tail to be the new node
        //TEACHERS SOLUTION
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        // let newNode = new Node(value);
        // if(!this.head){
        //     this.head = this.tail = newNode;
        // } else{
        //     newNode.next = this.head;
        //     this.head.previous = newNode;
        //     this.head = newNode;
        // }
        // return ++this.length;
    }

    get(idx){
        // TEACHERS SOLUTION
        if(idx < 0 || idx >=this.length){
            return false;
        }
        let count, current;
        if(idx <= this.length / 2){
            count = 0;
            current = this.head;
            while(count!== idx){
                current = current.next;
                count++;
            }
        } else{
            count = this.length-1;
            current = this.tail;
            while(count!==idx){
                current = current.previous;
                count--;
            }
        }

        return current;

        // if(idx < 0 || idx > this.length){
        //     return false
        // }
        // if (idx===0){
        //     return this.head;
        // }
        // let foundNode = this.head;
        // let counter = 0;

        // if (idx >= Math.ceil(this.length/2)) {
        //     console.log('working from end');
        //     foundNode = this.tail;
        //     counter = this.length;
        //     while(idx!==counter){
        //         foundNode = foundNode.previous;
        //         counter--;
        //     }
        // } else{
        //     console.log('working from start');
        //     while(idx!==counter){
        //         foundNode = foundNode.next;
        //         counter++;
        //     }
        // }
        // return foundNode;
    }
    //SET TAKES IN AN INDEX AND A VALUE TO UPDATE THE NODE AT THAT INDEX WITH...
    set(idx, value){
        //USE GET TO MAKE THIS EASIER.
        //TEACHERS SOLUTION
        let foundNode = this.get(idx);
        if(foundNode){
            foundNode.value = value;
            return true;
        }
        return false;
        
        
        // if (this.get(idx)){
        //     let foundNode = this.get(idx);
        //     foundNode.value = value;
        //     return true;
        // }else{
        //     return false;
        // }
    }
    //INSERT, TAKES IN INDEX AND VALUE, CREATE A NEW NODE WITH THE PASSED IN VALUE, INSERT IT INTO LIST IN THAT POSITION
    insert(idx, value){
        //TEACHERS SOLUTION
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(value);
        if (idx === this.length) return !!this.push(value);
        let newNode = new Node(value);
        let beforeNode = this.get(idx-1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode, newNode.previous = beforeNode;
        newNode.next = afterNode, afterNode.previous = newNode;
        this.length ++;
        return true;




        
        // if(idx === 0){
        //     this.unshift(value);
        //     return ++this.length;
        // } else if (idx === this.length){
        //     this.push(value);
        //     return ++this.length;
        // } else{
        //     let foundNode = this.get(idx);
        //     if(foundNode){
        //         let newNode = new Node(value);
        //         let prevNode = foundNode.previous;
    
        //         newNode.next = foundNode;
        //         foundNode.previous = newNode;
    
        //         prevNode.next = newNode;
        //         newNode.previous = prevNode;
        //         return ++this.length;
        //     }
        // }
        // return false;
    }
    //REMOVE - TAKES IN AN INDEX, REMOVES THE NODE AT THAT POSITION..
    //USE OUR GET FUNCTION TO HELP..
    remove(idx){
        //TEACHERS SOLUTION
        if (idx < 0 || idx >= this.length) return false;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();
        let removedNode = this.get(idx);
        let beforeNode = removedNode.previous;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.previous = beforeNode;
        // removedNode.previous.next = removedNode.next;
        // removedNode.next.previous = removedNode.previous;
        removedNode.next = null;
        removedNode.previous = null;
        this.length--;
        return removedNode;
        
        // if(idx < 0 || idx > this.length) return false;
        // if (idx === 0) return this.shift(idx);
        // if (idx === this.length) return this.pop(idx);
        // let removedNode = this.get(idx);
        // let prevNode = removedNode.previous;
        // let nextNode = removedNode.next;
        // prevNode.next = nextNode, nextNode.previous = prevNode;
        // this.length--;
        // return removedNode;
    }
}



//BIG O OF DOUBLY LINKED LISTS
    //INSERTION - O(1) // SAME AS SINGLY LINKED LISTS
    //REMOVAL - O(1) // ALWAYS CONSTANT, NOT CASE FOR SINGLY LINKED LIST (IF REMOVE FROM END HAVE TO ITERATE ALL THE WAY THROUGH)
    //SEARCHING - O(N) //TECHNICALLY O(N/2) -> BUT THAT'S STIL O(N) IN THE GRAND SCHEME OF THINGS.
    //ACCESS - O(N)

//BASICALLY THE SAME AS SLL, BUT WITH ADDITIONAL POINTERS TO PREVIOUS NODE.
    //EASIER TO DO UNDO/REDO WITH DOUBLY LINKED LISTS.. JUST POP THE TAIL OFF
    //FIND THINGS IN HALF THE TIME (BUT THESE EXTRA POINTERS TAKE UP MORE MEMORY)
     