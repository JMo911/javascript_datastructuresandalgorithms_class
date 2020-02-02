//GIVEN ANY TREE... HOW DO WE VISIT EVERY NODE ONE TIME?
//MORE DIFFICULT THAN LINKED LIST, BECAUSE THERE ARE MANY DIFFERENT POSSIBLE PATHS WE CAN CHOOSE..
//WE USE RECURSION FOR THIS MODULE
//TWO WAYS:
    //BREADTH FIRST - WORK ACROSS THE TREE FIRST (HORIZONTALLY)
    //DEPTH FIRST - THREE ORDERS:
        //IN ORDER - START AT LEFTMOST NODE, THEN WORK OUR WAY UP
        //PREORDER - START AT ROOT, GO DOWN LEFT SIDE, THEN RIGHT SIDE
        //POSTORDER - START AT BOTTOM LEFT, FILL OUT 1 LEVEL, THEN START AT BOTTOM RIGHT, FILL OUT 1 LEVEL, CONTINUE UNTIL WE REACH ROOT
    //WE CHOOSE DIFF METHODS DEPENDING ON WHAT THE TREE LOOKS LIKE AND WHAT WE NEED...

//BREADTH FIRST - WE WANT TO LOOK AT EVERY NODE ON THE SAME LEVEL BEFORE WE VISIT THE CHILDREN/NEXT LEVEL... VISIT EVERY SIBLING BEFORE WE MOVE ON TO CHILDREN...


//TO IMPLEMENT BREADTH FIRST SEARCH WE WILL USE A QUEUE. (WE'LL BE USING AN ARRAY IMPLEMENTATION FOR THE QUEUE), FIFO - USE PUSH/SHIFT ...  WE'LL ALSO CREATE A VARIABLE TO STORE THE VALUES OF NODES VISITED
//SO AT THE END, THE QUEUE WILL BE EMPTY, IT JUST HELPS US OUT WHEN CREATING THE LIST OF DATA TO RETURN IN THE END...
//PLACE ROOT NODE IN THE QUEUE

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySeachTree{
    constructor(){
        this.root = null;
    }
    //inserts value into tree in appropriate order for BST... if less than node value, go left, if greater than node value go right... traverse tree
    insert(value){
        //TEACHERS SOLUTION
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value === current.value){
                    return false;
                }
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else{
                        current = current.left;
                    }
                } else if (value > current.value){
                    if (current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }

        // let newNode = new Node(value);
        // if(!this.root) {
        //     this.root = newNode;
        //     return this;
        // } 
        // //RIGHT SIDE OF TREE
        // if(value > this.root.value){
        //     if(!this.root.right){
        //         this.root.right = newNode;
        //     } else{
        //         let current = this.root.right;
        //         while(value > current.value){
        //             current = current.right;
        //             if(!current.right){
        //                 current.right = newNode;
        //             }
        //         }
        //         if(value < current.value) {
        //             if(!current.left){
        //                 current.left = newNode;
        //             } else{
        //                 while(value < current.value){
        //                     current = current.left;

        //                 }
        //             }
        //         }

                // if(!current.left){
                //     current.left = newNode;
                // }else{
                //     let leftCurrent = current.left;
                //     while(value<leftCurrent.value){
                //         leftCurrent = leftCurrent.left
                //     }
                //     if(!leftCurrent.left){
                //         leftCurrent.left = newNode;
                //     }
                // }
            // }
            // return this;
        // }
        //LEFT SIDE OF TREE
        // if(value < this.root.value){
        //     let current = this.root.left;
        //     if (current){
        //         while(value < current.value){
        //             current = current.left;
        //         }
        //         if(!current.left){
        //             current.left = newNode;
        //             return this;
        //         }else{
        //             let rightCurrent = current.right;
        //             while(value > rightCurrent.value){
        //                 rightCurrent = rightCurrent.right
        //             } 
        //             if(!rightCurrent.right){
        //                 rightCurrent.right = newNode;
        //                 return this;
        //             }
        //         }
        //     } else{
        //         this.root.left = newNode;
        //         return this;
        //     }  
        // }

    }
    //look up value in tree, return NODE if it exists, otherwise return false
    find(value){
        //TEACHERS SOLUTION
        if(this.root === null) return false;
        let current = this.root, 
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else{
                found = true;
            }
        }
        if(!found) return false;
        return current;
        // if (this.root.value === value) return true;
        // let current = this.root;
        // while(true){
        //     if (value === current.value){
        //         return true;
        //     }
        //     if (value < current.value){
        //         current = current.left;
        //         if(current === null){
        //             return false
        //         }
        //     }
        //     if (value > current.value){
        //         current = current.right;
        //         if (current === null){
        //             return false
        //         }
        //     }
        // } 
    }
    //look up value in tree, return TRUE if it exists, otherwise return false
    contains(value){
        //TEACHERS SOLUTION
        if(this.root === null) return false;
        let current = this.root, 
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else{
                return true;
            }
        }
        return false;
    }
    //TEACHERS BREADTH-FIRST SEARCH SOLUTION... ADDED AS METHOD IN BINARY SEARCH TREES FOR SAKE OF EXAMPLE
    BFS(){
        let node = this.root,
            data = [],
            queue = [];
            
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }; 
        return data;
    }
    //DEPTH FIRST - GO DOWN TO END OF NODE BEFORE VISITING SIBLING NODES... DOWN FIRST RATHER THAN HORIZONTALLY
    //DFS PREORDER - VISIT DOWN ENTIRE LEFT SIDE, THEN ENTIRE RIGHT SIDE (NODE BY NODE)
    //EASIER TO DO RECURSIVELY AS OPPOSED TO ITERATIVELY
    //CREATE A VARIABLE TO STORE VALUES OF NODES VISITED ... RETURN AT END
    //STORE ROOT OF THE BST IN A VAR CALLED CURRENT
    //WRITE A HELPER FUNCTION WHICH ACCEPTS A NODE
        //PUSH THE VALUE OF THE NODE TO THE VARIABLE THAT STORES THE RESULTS
        //IF THERES A LEFT, CALL THE HELPER FUNCTION WITH THE LEFT PROPERTY ON THE NODE
        //IF THERES A RIGHT, CALL THE HELPER FUNCTION WITH THE RIGHT PROPERTY ON THE NODE
        //OVERVIEW - VISIT A NODE, TRAVERSE ENTIRE LEFT SIDE, TRAVERSE ENTIRE RIGHT SIDE... THIS ORDER IS VERY IMPORTANT... CHANGES FOR OTHER DEPTH-FIRST SEARCHES
        //VISIT NODE, TRAVERSE ENTIRE LEFT, TRAVERSE ENTIRE RIGHT
    DFS_preorder(){
        //TEACHERS SOLUTION
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        };
        traverse(current);
        return data;

        // let results = [];
        // let current = this.root;
        // function traverse(node){
        //     results.push(node.value);
        //     if (node.left){
        //         traverse(node.left);
        //     }
        //     if (node.right) {
        //         traverse(node.right)
        //     }
        // }
        // traverse(current);
        // return results
    }

    //VISIT A NODE AFTER WE'VE LOOKED AT THE LEFT AND THE RIGHT... TRAVERSE ENTIRE BRANCH FIRST, THEN VISIT THE NODE ...
    //OVERVIEW - TRAVERSE ENTIRE LEFT SIDE, TRAVERSE ENTIRE RIGHT SIDE, THEN VISIT NODE... THIS ORDER IS VERY IMPORTANT... CHANGES FOR OTHER DEPTH-FIRST SEARCHES
    //EXPLORE THE LEFT, THEN EXPLORE THE RIGHT, THEN PUSH THE VALUES IN
    DFS_postorder(){
        let results = [];
        let current = this.root;
        function traversal(node){
            if (node.left) traversal(node.left);
            if (node.right)traversal(node.right);
            results.push(node.value);
        }
        traversal(current);
        return results;
    }
    //TRAVERSE ENTIRE LEFT, VISIT NODE, TRAVERSE ENTIRE RIGHT SIDE
    DFS_inorder(){
        let results = [];
        function traverse(node){
            node.left && traverse(node.left);
            results.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return results;
    }
    }

// QUEUE: [ 3, 8, 20]
// DATA: [10, 6, 15]

//       10
//     6   15
//    3 8    20


function bfs(my_tree){
    let queue = [];
    queue.push(my_tree.root);
    let results = [];
    while(queue.length > 0){
        let dequeuedNode = queue.shift();
        results.push(dequeuedNode.value);
        if(dequeuedNode.left !== null){
            queue.push(dequeuedNode.left);
        }
        if(dequeuedNode.right !== null){
            queue.push(dequeuedNode.right);
        }
    };
    return results;
}

        //6
    //5     10
// 3       9   12

// IN ORDER -> LEFT SIDE, VISIT NODE, RIGHT SIDE (RESULTS COME BACK IN NUMERICAL ORDER)
// PRE ORDER ->  VISIT NODE, LEFT SIDE, RIGHT SIDE (RESULTS COME BACK STARTING AT ROOT, WORK DOWN BRANCHES) (SHOWS EARLIEST POSTS FIRST... SHOWS ROOT FIRST)
// POST ORDER -> LEFT SIDE, RIGHT SIDE, VISIT NODE (RESULTS COME BACK FROM LEAVES UP TO ROOT) (SHOWS YOUR LATEST POSTS FIRST... SHOWS THE LEAVES FIRST)
//


// USE CASES:
    //BFS - NOT IDEAL FOR WIDE TREES -> IF YOU HAVE A FULLY FLESHED OUT TREE (EVERY PARENT HAS 2 CHILDREN) -> QUEUE WILL BE MASSIVE (TAKES UP A TON OF SPACE) -> USE FOR NARROW TREES (QUEUE WILL BE VERY SHORT AT ALL TIMES DUE TO DEQUEUING)
    //DFS - WORKS DOWN BRANCHES FIRST, ONLY HAVE TO STORE NODES ON THAT BRANCH IN MEMORY (LESS SPACE TAKEN UP ON WIDE TREES) -> CALL STACK DOESN'T GET TOO LARGE

    //USE DFS ON WIDE TREES, USE BFS ON TALL (DEEP) TREES.. GENERALLY SPEAKING (OPTIMIZES SPACE COMPLEXITY)... THINK OF THE QUEUE FOR BFS VS. THE RECURSION CALL STACK FOR DFS

    //OVERALL TREES TEND TO BE WIDE/FULL/BALANCED, SO DFS TENDS TO BE MORE USEFUL (LESS SPACE COMPLEXITY)
    //TIME COMPLEXITY DOESN'T MATTER, WILL BE THE SAME FOR EITHER, VISIT EVERY NODE ONCE REGARDLESS

    //DFS VARIANTS:
        //INORDER - USED MOST COMMONLY WITH BSTs..(ALL DATA COMES BACK IN ORDER LOWEST TO HIGHEST)
        //PREORDER - COULD BE USEFUL FOR CLONING/DUPLICATING/STORING IN ANOTHER FILE..  SOME SORT OF RECREATION OR VISUAL REPRESENTATION .. COULD EASILY LOOP THROUGH AND RECONSTRUCT THE TREE WITH THESE RESULTS AS INPUTS TO AN INSERTION FUNCTION.
        //POSTORDER - 

//TREES: NON LINEAR DATA STRUCTURES THAT CONTAIN A ROOT AND CHILD NODES
    //BINARY TREES CAN HAVE VALUES OF ANY TYPE, BUT AT MOST TWO CHILDREN FOR EACH PARENT (BINARY)
    //BSTs MORE SPECIFIC VERSION OF A TREE -> SPECIAL CONDITION -> MUST BE ORDERED SUCH THAT: EVERY NODE TO THE LEFT OF A PARENT MUST BE LESS THAN IT'S VALUE, AND EVERY NODE TO THE RIGHT MUST BE GREATER

    