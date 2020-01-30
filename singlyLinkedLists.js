//DIFFERENCE BETWEEN LINKED LISTS AND ARRAYS
// IN ARRAYS, EACH ITEM IS INDEXED WITH A NUMBER.. WE CAN GET THE FIFTH OR 6TH ITEM AT WILL... ANYTIME WE ADD A NEW ELEMENT, IT GETS INDEXED WITH A POSITION
// LINKED LISTS HAVE NO INDICES... THEY JUST POINT TO THE NEXT ELEMENT... LIKE A TRAIN CAR... THERE'S NO INDEX, SO WE CAN'T SAY "GIVE ME THE FIFTH ONE".. THESE ARE EACH NODES THAT STORE A PIECE OF INFORMATION, AND REFERENCE THE NEXT NODE... HEAD IS BEGINNING, TAIL IS END...  ALSO, WE KEEP TRACK OF THE LENGTH...
// SIMPLY A BUNCH OF NODES POINTING TO OTHER NODES..
// SKY SCRAPER WITH NO ELEVATORS.. (AN ARRAY WOULD HAVE ELEVATORS I.E. TAKE ME TO THE FIFTH FLOOR).. LINKED LIST HAS NONE -> MUST WALK UP THE STAIRS ONE FLOOR AT A TIME UNTIL YOU GET TO YOUR FLOOR.
// much quicker to add a new head to a linked list than to add an element to the beginning of an array (no reindexing required)

//LINKED LISTS
    // NO INDEXES.. ONLY HEAD THAT POINTS TO NEXT NODE 
    // CONNECTED VIA NODES WITH A NEXT POINTER
    // RANDOM ACCESS NOT ALLOWED - MUST TRAVERSE ONE AT A TIME.
    // GOOD AT INSERTION/DELETION BECAUSE NO NEED TO REINDEX..

//ARRAYS
    // INDEXED IN ORDER
    // INSERTION AND DELETION CAN BE EXPENSIVE
    // RANDOM ACCESS - CAN GRAB ELEMENTS AT A SPECIFIC INDEX

//NODE - STORES A PIECE OF DATA (VAL)
//REFERENCE TO NEXT NODE (NEXT)

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    //PUSH ADDS A NEW VALUE TO THE END OF A LIST (NEW TAIL)
    push(val){
        //TEACHERS SOLUTION
        var newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
        // if(!this.head) {
        //     this.head = this.tail = new Node(val);
        //     this.length ++;
        // }
        // else if (this.length === 1){
        //     this.head.next = this.tail = new Node(val);
        //     this.length ++;
        // }
        // else{
        //     this.tail.next = new Node(val)
        // }
    }
    //POP REMOVES THE TAIL FROM THE LINKED LIST.. TAKES THE TAIL NODE OFF AND RETURNS IT TO US
    //PROBLEM: TO REMOVE, WE MUST ASSIGN A NEW TAIL... HAVE TO GO ALL THE WAY THROUGH THE LIST FROM THE BEGINNING BECAUSE WE DON'T HAVE A BACKWARD POINTER..
    // FIND SECOND TO LAST ITEM IN LIST, SET IT'S NEXT TO NULL WHICH SEVERS THE LINK TO THE LAST NODE. SET WHAT WAS THE SECOND TO LAST ITEM IN THE LIST TO BE THE NEW TAIL.
    pop(){
        //TEACHERS SOLUTION
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null; // severs connection to last node
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
        // console.log(current.val)
        // console.log(newTail.val)






        // if(!this.head){
        //     return "no list"
        // }
        // let current = this.head;
        // let end = this.head.next;
        // while (end.next){
        //     current = current.next;
        //     end = end.next;
        //     if(!end.next){
        //         this.tail = current;
        //         current.next = null;     
        //         return end;
        //     }
        // }
        // length--;

        // to traverse start from beginning and loop while there is a next...
    }
    //SHIFT - REMOVES A NODE FROM THE BEGINNING OF A LINKED LIST... TAKE HEAD AND DELETE IT.. MOVE HEAD TO WHATEVER THE SECOND ITEM WAS
    shift() {
        //TEACHERS SOLUTION
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
        //save current head to a variable, take it's .next and set that as a head. return the old head..
        // if (!this.head) return undefined;
        // let oldHead = this.head;
        // let newHead = oldHead.next;
        // oldHead.next = null;
        // this.head = newHead;
        // this.length--;
        // return oldHead;
    }
    //UNSHIFT - ADDES NODE TO THE BEGINNING OF A LIST.. SIMPLY SAY HERE IS A NEW HEAD, POINT TO OLD HEAD.
    unshift(val) {
        //TEACHERS SOLUTION
        var newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{ // MUST BE IN ELSE, BECAUSE WE SET UP INFINITE SINGLY LINKED LIST IF NOT.. 
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        // if (!this.head) {
        //     this.tail = this.head = newHead
        // }
        // let oldHead = this.head;
        // let newHead = new Node(val);
        // newHead.next = oldHead;
        // this.head = newHead;
        // this.length++;
        // return this;
    }
    // TAKES IN NUMBER.. TRAVERSE LIST THAT MANY TIMES THEN RETURN VALUE AT THAT NODE. (START AT 0)
    get(idx){
        //ACCEPT INDEX.. IF - OR >= LENGTH, RETURN NULL/UNDEFINED
        //LOOP THROUGH UNTIL YOU HIT INDEX AND RETURN NODE AT THAT INDEX..
        if (idx < 0 || idx > this.length){
            return 'Index out of range.'
        }
        let counter = 0;
        let currentNode = this.head;
        // if (idx = 0) {
        //     return this.head;
        // }
        while(counter!== idx) {
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    }
    //SET - TAKES IN A POSITION/INDEX, AND A VALUE TO UPDATE THE DATA IN THE NODE AT THAT POSITION.
    set(idx, val){
        //if idx < 0 or >= length, return out of range
        //if idx === 0, simply run this.head.val = val
        //if idx === length, simply run this.tail.val = val
        // OTHERWISE run a while loop until you hit your position number.. keep track of current node... set currentnode.val = val
        //SIMPLIFY BY USING OUR GET FUNCTION
        let foundNode = this.get(idx);
        if(foundNode!== 'Index out of range.'){
            foundNode.val = val;
            return true;
        } 
        return false;
        
        

    }
     //INSERT - TAKES IN A POSITION/INDEX, AND A VALUE TO INCLUDE AS THE DATA IN THE NODE THAT YOU'RE GOING TO PLACE AT THAT INDEX.
     insert(idx, val){
        //if idx < 0 or >= length, return out of range
        //if idx === 0, simply run unshift
        //if idx === length, simply run push
        // OTHERWISE run a while loop until you hit your position number.. keep track of previous node and current node.. set previous node.next to your newly constructed node, set the newwly constructed node.next to the current node.. return the list 
        //USE GET METHOD TO SIMPLIFY!!
        //TEACHERS SOLUTION
        // if (idx < 0 || idx > this.length) return false;
        // if ( idx === this.length){
        //     return this.push(val);
        //     // return true;
        // } 
        // if ( idx === 0) {
        //     return this.unshift(val);
        // }
        // let newNode = new Node(val);
        // let prev = this.get(idx-1);
        // let temp = prev.next;//MUST MAKE THIS PLACEHOLDER FIRST, OTHERWISE YOU LOSE THE CONNECTION
        // prev.next = newNode;
        // newNode.next = temp;
        // this.length++;
        // return true;



        let foundNode = this.get(idx);
        if(foundNode==='Index out of range.'){
            return false;
        }
        // let newNode = new Node(val); 
        if (idx === 0) {
            this.unshift(val);
            return true;
        }
        else if (idx === this.length) {
            this.push(val);
            //SHORT HAND TO COERCE A BOOLEAN IS !!this.push(val)
            return true;
        } else {
            let newNode = new Node(val);
            let prevNode = this.get(idx - 1);
            // let temp = prevNode.next;
            prevNode.next = newNode;
            newNode.next = foundNode;
            length++;
            return true;
        }
     }
     //REMOVE - TAKES IN INDEX, REMOVES VALUE AT THAT INDEX.. PATCHES LIST AROUND THAT.. 
     remove(idx){
        //find item, find it's previous and it's next.. patch previous to next
        //TEACHERS SOLUTION
        if(idx<0 || idx>=this.length) return false;
        if (idx ===0 ) return this.shift();
        if (idx === this.length -1) return this.pop();
        let previousNode = this.get(idx-1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed


        // if (idx === 0) return this.shift();
        // if (idx === this.length-1) return this.pop();
        // let foundNode = this.get(idx);
        // if(foundNode === 'Index out of range') return false;
        // let prevNode = this.get(idx - 1);
        // let nextNode = this.get(idx + 1);
        // prevNode.next = nextNode;
        // this.length--;
        // return foundNode;
     }
     //REVERSE - take the linked list and reverse it in place.. no copies
     reverse(){
         //start with head, make it the tail. grab it's .next, and set that as currentnode, get it's .next and store it as temp.. set currentnodes.next to the tail
        //TEACHERS SOLUTION
        // need current var, next var, and prev
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next = null;
        let prev = null;
        for(var i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
        //[100,    201,   250,   350,999]
        // NODE    NEXT
        //NULL <-

        //  let counter = 1;
        // if (list.length === 0) return false;
        // if (list.length === 1) return list;
        // // if (list.length === 2){
        // list.head = list.tail;
        // list.tail = list.head;
        // // }
        
        // let prevNode = list.tail;
        // let currentNode = prevNode.next;
        // let nextNode = currentNode.next;
        // while(counter !== list.length) {
        //     currentNode.next = prevNode;
        //     prevNode = prevNode.next;
        //     currentNode = nextNode;
        //     nextNode = nextNode.next;
        //     counter++;
        // }
     }
     print() {
         var arr = [];
         var current = this.head;
         while(current){
             arr.push(current.val)
             current = current.next
         }
         console.log(arr)
     }


}

let list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")
list.push("hello again")
list.pop()
// console.log(list)
// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.log(first.next.next);
// list.push



//BIG 0 of singly linked lists...
//INSERTION O(1) MUCH FASTER THAN ARRAYS... AND DELETION
//REMOVAL - DEPENDS... O(1) OR O(N)...IF REMOVE FROM BEGINNING, THEN JUST SET THE HEAD.NEXT TO BE THE NEW HEAD, AND SEVER THE TIE... IF WE REMOVE FROM SECOND TO LAST, WILL BE O(N)
//SEARCHING - O(N) MUST LOOP THROUGH LIST .NEXT.NEXT.NEXT...
//ACCESS - O(N) MUST LOOP THROUGH TO FIND THE DATA...
//GREAT IF WE COMMONLY WANT INSERTION/DELETION AT BEGINNING OR END OF THE LIST
//
//