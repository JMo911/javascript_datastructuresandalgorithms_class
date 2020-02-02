// A STEP UP FROM LINKED LISTS. A TAD BIT MORE COMPLICATED... THUS MORE INTERESTING
// TYPES.. PLAIN, BINARY, BINARY SEARCH TREES (BST)
// IMPLEMENT THE OPERATIONS ON THEM..
// TREE - DATA STRUCTURE THAT CONSISTS OF NODES IN PARENT/CHILD RELATIONSHIPS .. CAN HAVE MORE THAN ONE REFERENCE TO ANOTHER NODE
// CAN STORE ANYTHING IN THIS STRUCTURE... STRINGS, INTEGERS, FLOATS, ARRAYS...
//WHEREAS LISTS WERE LINEAR, TREES ARE NONLINEAR -> CAN BRANCH, MORE THAN ONE PATHWAY THROUGH A TREE... 
// CAN THINK OF A SINGLY LINKED LIST AS A VERY SPECIAL CASE OF A TREE.. KIND OF LIKE ONE BRANCH..
// NODES MUST POINT TO CHILDREN. CAN'T POINT TO SIBLINGS OR PARENTS (MUST POINT DOWNWARSD [AWAY FROM ROOT])
// CAN'T HAVE MORE THAN ONE ROOT.
//ROOT -> TOP NODE IN A TREE
// CHILD -> A NODE DIRECTLY CONNECTED TO ANOTHER NODE WHEN MOVING AWAY (DOWNWARD) FROM THE ROOT
//PARENT -> CONVERSE NOTION OF A CHILD
//SIBLINGS -> NODES THAT HAVE THE SAME PARENT
//LEAF -> NODES WITH NO CHILDREN
//EDGE -> CONNECTION BETWEEN ONE NODE AND ANOTHER (REPRESENTED BY ARROWS IN THIS COURSE)



//APPLICATIONS/USE CASES FOR TREES:
    //HTML DOM -> TREE OF ELEMENTS DISPLAYED TO USER
    //NETWORK ROUTING -> CHECK OUT THE ROUTING PAGE ON WIKIPEDIA
    //ABSTRACT SYNTAX TREES -> DESCRIBE SYNTAX OF A PROGRAMMING LANGUAGE
    //ARTIFICIAL INTELLIGENCE/MACHINE LEARNING -> MINIMAX TREE... TIC-TAC-TOE AI MACHINE.. BREAKDOWN LOGIC IN TO A TREE -> SHOW LAYOUT OF BOARD AND ALL POSSIBLE MOVES MACHINE CAN MAKE (INCLUDING BEST CHOICE) ... BASICALLY A DECISION MAKING TREE
    //FOLDERS IN AN OPERATING SYSTEM (I.E. WHEN YOU OPEN FINDER ON A MAC) -> FOLDERS INSIDE OF FOLDERS UNTIL YOU GET TO YOUR DESIRED FILE.
    //JSON -> WHEN YOU PARSE RESPONSE FROM STRING IN TO JAVASCRIPT/PYTHON -> IT TRAVERSES A TREE TO INTERPRET YOUR DATA.


//KINDS OF TREES:
    //THERE IS A WIKIPEDIA ARTICLE WITH A MASSIVE LIST OF TREE TYPES.. SPECIAL PROPERTIES/RULES IN EACH USE CASE.. OPTIMIZED FOR ONE SCENARIO OR ANOTHER...
    //TREES - 
    //BINARY TREES - EACH NODE CAN HAVE AT MOST 2 CHILDREN (BINARY) ... A NODE CAN NOT HAVE 3+ CHILDREN ... SPECIAL PROPERTIES THAT MAKE THEM EASIER TO NAVIGATE..
    //BINARY SEARCH TREES (BSTs) - EXCEL AT SEARCHING.. STORE SORTED DATA IN A PRESCRIBED MANNER TO OPTIMIZE IT FOR SEARCHING... AT MOST 2 CHILDREN PER NODE, AND ARE SORTED IN A PARTICULAR ORDER.. TYPICALLY COMPARING NUMBERS, BUT CAN STORE ANYTHING IF THERE'S A MEANINGFUL ORDER... ANYTHING < NODE GOES TO LEFT... ANYTHING > NODE GOES TO THE RIGHT
        //EVERY NODE TO THE LEFT OF A PARENT NODE IS ALWAYS LESS THAN THE PARENT
        //EVERY NODE TO THE RIGHT OF A PARENT NODE IS ALWAYS GREATER THAN THE PARENTS.
        //THIS IS THE DISTINCTION THAT MAKES IT A BST AS OPPOSED TO JUST A BINARY TREE
        //WHY USE THEM?-- FAST TO LOOK THINGS UP AND INSERT.. VERY QUICK TO SEARCH THINGS... EVERY COMPARISON CUTS OUR TREE IN HALF TILL WE FIND THE VALUE WE'RE LOOKING FOR, BECAUSE IF IT'S > ROOT, ONLY LOOK AT RIGHT SIDE OF TREE, VICE VERSA... SO ON AND SO FORTH WITH EACH NODE... 

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
}

 
//BIG O OF BSTs
    //INSERTION - O(LOG N) - NOT GUARANTEED... O (LOG N) IS THE BEST CASE AND THE AVERAGE CASE ... GOOD PERFORMANCE! ... IF YOU DOUBLE THE NUMBER OF NODES, YOU ONLY HAVE TO DO ONE MORE > < COMPARISON TO INSERT A VALUE, BECAUSE THE HEIGHT OF THE TREE ONLY GREW BY ONE LEVEL
    //SEARCHING - O(LOG N) - NOT GUARANTEED ... GOOD PERFORMANCE! ... SAME # STEPS AS INSERTION ... WORST CASE... SOME BST CONFIGURATIONS ARE VERY SLOW (I.E. A LINKED LIST) STILL CAN TECHNICALLY BE A BST 1 -> 2 -> 5 -> 10 ... BUT WE HAVE TO TRAVERSE THE ENTIRE THING EVERY TIME TO EITHER INSERT OR SEARCH..