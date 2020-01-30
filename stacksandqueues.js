// BOTH STACKS AND QUEUES ARE DATA COLLECTIONS... ABSTRACT DATA STRUCTURES.. 

// ADD AND REMOVE DATA ONLY... NOT ACCESS/SEARCHING

//STACKS NEED TO ABIDE BY A LIFO PRINCIPLE... LAST IN FIRST OUT.. LIKE BOOKS ON TOP OF YOUR DESK... THE MOST RECENTLY PLACED ON THE TOP, WHEN YOU REMOVE, THEN YOU TAKE THAT MOST RECENT BOOK OFF THE TOP.. (COULD USE A LINKED LIST TO ACCOMPLISH.. POP)... THE CALL STACK IS A GREAT EXAMPLE

//USED TO MANAGE FUNCTION INVOCATIONS... UNDO/REDO IN MICROSOFT OFFICE... THINK OF REPEATEDLY PRESSING UNDO.... HISTORY OBJECTS IN YOUR BROWSER (ROUTES YOU'VE VISITED)

//CREATING A STACK WITH AN ARRAY...
//STACK IS ONLY A CONCEPT.. AS LONG AS IT FOLLOWS LIFO YOU'RE GOOD.. AN EASY WAY IS TO USE AN ARRAY
//AS LONG AS THE ONLY TWO ARRAY METHODS USED ARE PUSH AND POP, THEN YOU'RE CREATING A STACK (VIA AN ARRAY...)
//UNTIL SOMEONE ADDS TO MIDDLE/BEGINNING/ANYWHERE BUT THE END, THEN IT'S A STACK...
//PUSH AND POP IS MUCH MORE EFFICIENT FROM THE BIG O STANDPOINT (NO REINDEXING).. WHEREAS SHIFT/UNSHIFT CAUSES CONSTANT REINDEXING
// var stack = [];
// stack.push("google.com")
// stack.push("instagram")
// stack.push("youtube")
// stack.pop()

// OR //USE SOLELY UNSHIFT AND SHIFT.. KEEP ADDING ELEMENTS TO BEGINNING OF ARRAY / REMOVING FIRST ELEMENT FROM ARRAY
// var stack = [];
// stack.unshift("create new file");
// stack.unshift("resize file");
// stack.unshift("edit wrinkle");
// stack.shift()


//ULTIMATELY SINGLY LINKED LIST WOULD BE MORE EFFICIENT BIG O SPACE & TIME WISE WHEN COMPARED TO AN ARRAY..

//NO INDEX NUMBERS NEEDED TO HAVE A STACK... SO IT MAKES SENSE TO USE A LESS INTENSIVE/CUMBERSOME DATA STRUCTURE

//MAKE SURE TO ADD AND REMOVE FROM BEGINNING OF LIST TO KEEP CONSTANT TIME O(1)... SLIGHTLY ALTERED PUSH AND POP TO GET DATA OFF OF THE BEGINNING OF THE LIST "STACK"
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.size === 0) {
            this.first = this.last = newNode;
            // this.size++;
        } else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
            // this.size++;
        }
        return ++this.size;
    }
    pop(){
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

//BIG O 
//insertion = o(1)
//removal = o(1)
//searching / access... not the use case. not important... would be o(n), but shouldn't be using a stack

//STACKS ARE LIFO DATA STRUCTURES... USED TO HANDLE FUNCTION INVOCATIONS (CALL STACK), UNDO/REDO, BROWSER HISTORY... 
//NOT A BUILT IN DATA STRUCTURE IN JAVASCRIPT

//LATER ON WE WILL USE AN ARRAY, ONLY BECAUSE OF CONVENVIENCE.. IN REALITY WE SHOULD DEFINE A STACK CLASS.




//QUEUES NEED TO ABIDE BY A FIFO PRINCIPLE
// ADD AND REMOVE DATA ONLY
//THINK OF A QUEUE/LINE... FIRST PERSON IN LINE IS FIRST PERSON OUT... 
//VIDEO GAMES WHEN YOU'RE WAITING TO JOIN THE GAME... BACKGROUND TASKS... DOWNLOADING FILES, GET QUEUED... PRINT QUEUE, PRINTER ONLY HANDLES ONE DOC AT A TIME, FIRST THING SENT IS FIRST THING PRINT...
// CAN BE DONE WITH AN ARRAY, OR CREATING OUR OWN CUSTOM QUEUE CLASS... IN THIS CLASS WE'LL USE ARRAY IMPLEMENTATIONS LATER, BUT THIS MAY NOT BE BETTER IN REALITY...

// enqueu - add something to queue
// dequeu - remove from queue

//can be done on array as long as we stick to solely push and shift (add to end, remove from beginning)
//VERY EXPENSIVE DEQUEUES BECAUSE WE REINDEX THE ENTIRE ARRAY WHEN WE SHIFT...
var q = [];
q.push("first");
q.push("second");
q.push("third");
q.shift()

//OR
// can be done if we stick to solely unshift and pop (MUCH LESS PERFORMANT DUE TO REINDEXING...)
//VERY EXPENSIVE ENQUEUES BECAUSE WE REINDEX EVERY TIME WE UNSHIFT....
var q2 = [];
q.unshift("first");
q.unshift("second");
q.unshift("third");
q.pop();

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueu(value){
        let newNode = new Node(value);
        if (!this.first){
            this.first = this.last = newNode;
        } else{
            this.last.next = newNode;
            this.last = newNode; //THIS WAS THE ONLY PART I MISSED.. NEED TO REASSIGN WHAT IS CONSIDERED LAST
        }
        return ++this.size;
    }
    dequeue(){
        //TEACHERS SOLUTION
        if(!this.first) return false;
        var temp = this.first;
        if (this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
        // if (!this.first) return false;
        // let temp = this.first.next;
        // let first = this.first;
        // this.first = temp;
        // this.size--;
        // return first.value;
    }
}

//BIG O OF QUEUES
//insertion = o(1)
//removal = o(1)
//searching / access...DON'T USE A QUEUE. not the use case. not important... would be o(n), but shouldn't be using a stack