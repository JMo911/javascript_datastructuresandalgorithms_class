//HEAPS ARE ANOTHER CATEGORY OF TREES
    //THERE ARE MANY TYPES OF HEAPS

//COMPARE AND CONTRAST MIN/MAX HEAPS

//DEFINITION:
    //A TREE STRUCTURE, SIMILAR TO A BST BUT WITH SOME DIFFERENT RULES
    //IN A MAX BINARY HEAP, PARENT NODES ARE ALWAYS LARGER THAN CHILD NODES. //ALL CHILDREN ARE SMALLER THAN A PARENT //ROOT IS ALWAYS THE LARGEST NUMBER IN THE TREE //LEFT-RIGHT ORDER DOESN'T MATTER AS LONG AS ALL CHILDREN ARE SMALLER THAN THEIR PARENTS..
    //IN A MIN BINARY HEAP, PARENT NODES ARE ALWAYS SMALLER THAN CHILD NODES. //ALL CHILDREN ARE LARGER THAN A PARENT // ROOT WILL BE THE SMALLEST VALUE IN THE HEAP
    //EACH PARENT HAS AT MOST TWO CHILD NODES (BINARY)
    //THE VALUE OF EACH PARENT NODE IS ALWAYS GREATER THAN ITS CHILD NODES
    // IN A MAX BINARY HEAP, THE PARENT IS GREATER THAN THE CHILDREN, BUT THERE ARE NO GUARANTEES BETWEEN SIBLING NODES
    // A BINARY HEAP IS AS COMPACT AS POSSIBLE. ALL THE CHILDREN OF EACH NODE ARE AS FULL AS THEY CAN BE AND LEFT CHILDREN ARE FILLED OUT FIRST. ->EVERY LEFT AND RIGHT IS FILLED BEFORE WE MOVE DOWN
    
    //WE WILL IMPLEMENT PRIORITY QUEUES USING A HEAP... A VERY COMMONLY USED DATA STRUCTURES. (THINK OF A QUEUE THAT CAN ALSO HANDLE PRIORITY ASSIGNMENT.. MOVES TO CORRECT SPOT IN QUEUE DEPENDING ON ITS IMPORTANCE LEVEL)
    //ALSO USED WITH GRAPH TRAVERSAL ALGORITHMS, WHICH WE WILL DO LATER ON IN THE COURSE.

//STORING HEAPS:
    //REPRESENTING HEAPS -> LEFT CHILD ALWAYS ADDED BEFORE RIGHT CHILD...
    //CAN USE A LIST/ARRAY TO STORE A BINARY HEAP
    //FOR ANY INDEX N INSIDE OF AN ARRAY, LEFT CHILD IS STORED AT 2N+1, AND RIGHT CHILD IS STORED AT 2N + 2
    //for a child at index n -> it's parent is at index floor( (n-1)/2 )

    //classname = MaxBinaryHeap
    //properties = values = [];

    //PUSH ON TO END OF VALUES, THEN BUBBLE UP (SWAP IT) UNTIL IT LANDS IN IT'S FINAL RESTING PLACE/CORRECT SPOT...
    //COMPARE NODE TO PARENT, IF NODE IS LARGE, SWAP ... RECURSIVELY UNTIL IT HIT'S THE CORRECT SPOT (REMEMBER WHERE PARENT NODES REST -> FLOOR ((N-1) /2)

//WRITE A METHOD CALLED INSERT THAT TAKES IN A VALUE ... PUSH THAT VALUE IN TO THE VALUES PROPERTY ON THE HEAP
//BUBBLE THE VALUE UP TO IT'S CORRECT SPOT

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(element){
        //TEACHERS SOLUTION
        //RELIES ON BUBBLE UP TO GET IT TO THE CORRECT POSITION
        this.values.push(element);
        this.bubbleUp();
        



        // this.values.push(value);
        // let index = this.values.length-1;
        // let parentIndex = Math.floor( (index-1) / 2 );
        // let parent= this.values[parentIndex];
        // function bubbleUp(bubbleValue){
        //     if (bubbleValue > parent){
        //         this.values[parentIndex] = bubbleValue;
        //         this.values[index] = parent;
        //         index = parentIndex;
        //         bubbleUp(this.values[index]);
        //     } if (!parent){
        //         this.values[0] = bubbleValue;
        //     }
        // }
        // bubbleUp(value);
        // // while (value > parent) {
        // //     parent = this.values[parentIndex];
        // //     this.values[parentIndex] = value;
        // //     this.values[index] = parent;
        // //     index = parentIndex;
        // // }
        // return this;
    }
    bubbleUp(){
        let idx = this.values.length-1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx-1) / 2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
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
    extractMax(){
        // let removedRoot = this.values[0];
        //replace with last added value
        //TEACHERS SOLUTION
        const max = this.values[0];
        const end = this.values.pop();
        //EDGE CASE IF NOTHING LEFT IN
        if(this.values.length > 0){
            //LINE 97 CAUSES A FOREVER LOOP WITH THE LAST ELEMENT IF WE DON'T ADD THE CONDITIONAL, BECAUSE WE REASSIGN THE ROOT TO BE END (WHICH WAS THE ORIGINAL ROOT IF THERE'S ONLY ONE ELEMENT)
            this.values[0] = end;
            //START TRICKLE DOWN
            this.sinkDown();
        }
        

        return max;
        
        
        
        
        // let idx = 0;
        // this.values[idx] = this.values.pop();
        // const element = this.values[idx];
        // while(idx <= this.length -1){
        //     let leftChildIdx = idx * 2 + 1;
        //     let leftChild = this.values[leftChildIdx];
        //     let rightChildIdx = idx * 2 + 2;
        //     let rightChild = this.values[rightChildIdx];
        //     if(element < leftChild && leftChild > rightChild){
        //         this.values[leftChildIdx] = element;
        //         this.values[idx] = leftChild;
        //         idx = leftChildIdx;
        //     } else if (element < rightChild && rightChild > leftChild){
        //         this.values[rightChildIdx] = element;
        //         this.values[idx] = rightChild;
        //         idx = rightChildIdx;
        //     } else{
        //         return false;
        //     }
        // }
        // //get element to correct position
        
        
        // return this;
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
                if (leftChild > element){
                    //SWAP KEEPS TRACK OF THE POSITION THAT WE'RE GOING TO SWAP WITH...
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length){
                //ASSIGN RIGHT CHILD IF IN BOUNDS
                rightChild = this.values[rightChildIdx];
                if(
                    //LEFT CHILD WAS NOT GREATER THAN ELEMENT, SO SWAP IS STILL NULL.. VICE VERSA FOR 2ND CONDITIONAL
                    (swap === null && rightChild > element) 
                    || (swap!== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);


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
        insert(element){
            //TEACHERS SOLUTION
            //RELIES ON BUBBLE UP TO GET IT TO THE CORRECT POSITION
            this.values.push(element);
            this.bubbleUp();
            
    
    
    
            // this.values.push(value);
            // let index = this.values.length-1;
            // let parentIndex = Math.floor( (index-1) / 2 );
            // let parent= this.values[parentIndex];
            // function bubbleUp(bubbleValue){
            //     if (bubbleValue > parent){
            //         this.values[parentIndex] = bubbleValue;
            //         this.values[index] = parent;
            //         index = parentIndex;
            //         bubbleUp(this.values[index]);
            //     } if (!parent){
            //         this.values[0] = bubbleValue;
            //     }
            // }
            // bubbleUp(value);
            // // while (value > parent) {
            // //     parent = this.values[parentIndex];
            // //     this.values[parentIndex] = value;
            // //     this.values[index] = parent;
            // //     index = parentIndex;
            // // }
            // return this;
        }
        bubbleUp(){
            let idx = this.values.length-1;
            const element = this.values[idx];
            while(idx > 0){
                let parentIdx = Math.floor((idx-1) / 2);
                let parent = this.values[parentIdx];
                if(element <= parent) break;
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
        extractMax(){
            // let removedRoot = this.values[0];
            //replace with last added value
            //TEACHERS SOLUTION
            const max = this.values[0];
            const end = this.values.pop();
            //EDGE CASE IF NOTHING LEFT IN
            if(this.values.length > 0){
                //LINE 97 CAUSES A FOREVER LOOP WITH THE LAST ELEMENT IF WE DON'T ADD THE CONDITIONAL, BECAUSE WE REASSIGN THE ROOT TO BE END (WHICH WAS THE ORIGINAL ROOT IF THERE'S ONLY ONE ELEMENT)
                this.values[0] = end;
                //START TRICKLE DOWN
                this.sinkDown();
            }
            
    
            return max;
            
            
            
            
            // let idx = 0;
            // this.values[idx] = this.values.pop();
            // const element = this.values[idx];
            // while(idx <= this.length -1){
            //     let leftChildIdx = idx * 2 + 1;
            //     let leftChild = this.values[leftChildIdx];
            //     let rightChildIdx = idx * 2 + 2;
            //     let rightChild = this.values[rightChildIdx];
            //     if(element < leftChild && leftChild > rightChild){
            //         this.values[leftChildIdx] = element;
            //         this.values[idx] = leftChild;
            //         idx = leftChildIdx;
            //     } else if (element < rightChild && rightChild > leftChild){
            //         this.values[rightChildIdx] = element;
            //         this.values[idx] = rightChild;
            //         idx = rightChildIdx;
            //     } else{
            //         return false;
            //     }
            // }
            // //get element to correct position
            
            
            // return this;
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
                    if (leftChild > element){
                        //SWAP KEEPS TRACK OF THE POSITION THAT WE'RE GOING TO SWAP WITH...
                        swap = leftChildIdx;
                    }
                }
    
                if (rightChildIdx < length){
                    //ASSIGN RIGHT CHILD IF IN BOUNDS
                    rightChild = this.values[rightChildIdx];
                    if(
                        //LEFT CHILD WAS NOT GREATER THAN ELEMENT, SO SWAP IS STILL NULL.. VICE VERSA FOR 2ND CONDITIONAL
                        (swap === null && rightChild > element) 
                        || (swap!== null && rightChild > leftChild)
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
    
    let queue = new PriorityQueue();
    queue.insert(41);
    queue.insert(39);
    queue.insert(33);
    queue.insert(18);
    queue.insert(27);
    queue.insert(12);
    queue.insert(55);