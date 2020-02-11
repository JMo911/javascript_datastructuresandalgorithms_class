//PRIORITY QUEUES - USE BINARY HEAP TO HELP IMPLEMENT
    // A DATA STRUCTURE WHERE EACH ELEMENT HAS A PRIORITY. 
    //ELEMENTS WITH HIGHER PRIORITIES ARE SERVED BEFORE ELEMENTS WITH LOWER PRIORITIES.
    //EACH NODE/ELEMENT HAS A PRIORITY ASSOCIATED WITH IT... WE WANT IT TO SERVE US ONE THING AT A TIME TO TACKLE NEXT (ACCORDING TO IT'S PRIORITY LEVEL)
    //SEPARATE FROM HEAPS... JUST AN ABSTRACT CONCEPT... CAN IMPLEMENT WITH AN ARRAY OR A LIST (NOT IDEAL, BECAUSE IT'S SLOW. BUT IT'S POSSIBLE)...
    //OFTEN A LOWER PRIORITY NUMBER DENOTES HIGHEST IMPORTANCE.. P1s ARE HIGHER PRIORITY THAN P3s
    //

    class Node{
        constructor(value, priority){
            this.value = value;
            this.priority = priority;
        }
    }


//WE'RE DOING THIS WITH A MIN BINARY HEAP, BECAUSE PRIORITY 1s ARE TYPICALLY THOUGHT OF AS MORE URGENT THAN PRIORITY 2s OR 3s...
    class PriorityQueue{
        constructor(){
            this.values = [];
        }
        enqueue (value, priority){
            //TEACHERS SOLUTION
            //RELIES ON BUBBLE UP TO GET IT TO THE CORRECT POSITION
            let newNode = new Node(value, priority)
            this.values.push(newNode);
            this.bubbleUp();
        }
        bubbleUp(){
            let idx = this.values.length-1;
            const element = this.values[idx];
            while(idx > 0){
                let parentIdx = Math.floor((idx-1) / 2);
                let parent = this.values[parentIdx];
                if(element.priority >= parent.priority) break;
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
                // if (element > parent){
                //     this.values[parentIdx] = element;
                //     this.values[idx] = parent;
                //     idx = parentIdx;
                // }
            }
        }
        //IN MAX BINARY HEAPS WE TYPICALLY REMOVE THE ROOT (MAX VALUE), THEN REPLACE WITH THE MOST RECENTLY ADDED, THEN ADJUST (SINK DOWN) -> CONVERSE OF BUBBLE UP
        //ROOT IS ALWAYS YOUR HIGHEST PRIORITY ITEM..
        dequeue (){
            // let removedRoot = this.values[0];
            //replace with last added value
            //TEACHERS SOLUTION
            const min = this.values[0];
            const end = this.values.pop();
            //EDGE CASE IF NOTHING LEFT IN
            if(this.values.length > 0){
                //LINE 97 CAUSES A FOREVER LOOP WITH THE LAST ELEMENT IF WE DON'T ADD THE CONDITIONAL, BECAUSE WE REASSIGN THE ROOT TO BE END (WHICH WAS THE ORIGINAL ROOT IF THERE'S ONLY ONE ELEMENT)
                this.values[0] = end;
                //START TRICKLE DOWN
                this.sinkDown();
            }
            
    
            return min;
        }
        sinkDown(){
            let idx = 0;
            const length = this.values.length;
            const element = this.values[0];
            while(true){
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                //NO GUARANTEE THAT THESE ELEMENTS EXIST, SO CAN'T ASSIGN BEFORE CHECKING THAT IT'S IN BOUNDS (WITHIN LENGTH OF ARRAY)
                let leftChild, rightChild;
                let swap = null;
    
                if (leftChildIdx < length){
                    //ASSIGN LEFT CHILD IF IN BOUNDS
                    leftChild = this.values[leftChildIdx];
                    if (leftChild.priority < element.priority){
                        //SWAP KEEPS TRACK OF THE POSITION THAT WE'RE GOING TO SWAP WITH...
                        swap = leftChildIdx;
                    }
                }
    
                if (rightChildIdx < length){
                    //ASSIGN RIGHT CHILD IF IN BOUNDS
                    rightChild = this.values[rightChildIdx];
                    if(
                        //LEFT CHILD WAS NOT GREATER THAN ELEMENT, SO SWAP IS STILL NULL.. VICE VERSA FOR 2ND CONDITIONAL
                        (swap === null && rightChild.priority < element.priority) 
                        || (swap!== null && rightChild.priority < leftChild.priority)
                    ) {
                        swap = rightChildIdx;
                    }
                }
    
                if(swap === null) break;
                this.values[idx] = this.values[swap];
                this.values[swap] = element;
                idx = swap;
            }
        }
    }
    

//BIG O FOR BINARY HEAPS
    //GREAT FOR INSERTION AND DELETION(REMOVAL)
    //INSERTION - O(LOG N)
    //REMOVAL - O(LOG N)
        //ONLY REQUIRE 1 ADDITIONAL COMPARISON PER LEVEL OF DEPTH ADDED TO THE HEAP.. COMPARE TO PARENTS ALL THE WAY UP TILL ROOT (VERY FAST)
    //SEARCH - O(N)