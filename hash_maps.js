//ALMOST EVERY LANGUAGE HAS SOME SORT OF HASH MAP BUILT IN..
    //TYPICALLY, JUST USE THE BUILT IN ONE... WE WILL BUILD OUR OWN FOR LEARNING PURPOSES
    //STORE KEY VALUE PAIRS (UNLIKE ARRAY, NOT STRICTLY NUMERIC INDICES AND NOT ORDERED.)
    //THEY ARE FAST FOR FINDING VALUES, ADDING NEW VALUES, AND REMOVING VALUES!

    // THE DIFFERENT TYPES IN DIFF LANGUAGES... ALL KEY/VALUE STORES
    //PYTHON -> DICTIONARIES (DICT)
    //JAVASCRIPT -> OBJECTS (A COUPLE RESTRICTIONS... KEYS MUST BE STRINGS) & MAPS
    //JAVA, GO, & SCALA -> MAPS
    //RUBY -> HASHES

//WE'LL BE IMPLEMENTING A HASH TABLE USING AN ARRAY...

// WE TAKE AN INPUT, CONVERT TO A NUMBER TO STORE THE DATA... A FUNCTION THAT PERFORMS THIS TASK IS CALLED A HASH FUNCTION
// 


//HASH FUNCTIONS (LOTS OF APPLICATIONS IN SECURITY & CRYPTOGRAPHY)
    //PASS IN A STRING
    //ASSIGN THAT STRING A NUMBER WITHIN OUR ARRAY (INDEX) -> ANYTIME WE PASS THE SAME STRING, IT NEEDS TO ALWAYS GIVE US THE SAME INDEX BACK
    //CONVERT OUR KEYS INTO A VALID ARRAY INDEX....
    //TAKE IN DATA OF ANY SIZE, THEN RETURN INDEXES OF A FIXED SIZE

    //WHAT MAKES A GOOD HASH FUNCTION?
        //NEEDS TO BE FAST (I.E. CONSTANT TIME... IF I NEED THE SPOT WHERE PINK IS STORE, TELL ME IMMEDIATELY)
        //DISTRIBUTES THINGS UNIFORMLY, AND DOESN'T CLUSTER.. AVOID COLLISIONS (STORING THINGS AT THE SAME INDEX)
        //DETERMINISTIC(SAME INPUT YIELDS SAME OUTPUT - TEST RETEST RELIABILITY.. ALWAYS GET THE SAME OUTPUT WITH A GIVEN INPUT)


//first, convert input to a number of fixed size...
function my_hash(key, arrayLen){
    let total = 0;
    for (let char of key){
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

my_hash("pink", 10)

//PROBLEMS WITH THIS HASH.. 
    //ONLY HASHES STRINGS
    //NOT CONSTANT TIME... DEPENDS ON LENGTH OF STRING (THE FOR LOOP)
    //COULD BE A LITTLE MORE RANDOM

//hash("pink", 100) -> pass in key and length of array

//run in constant time, and increase distribution of hashes (more randomization)
//take advantage of prime numbers -> reduce collisions and spread out our data...
function my_hash_improved(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
} 

//COLLISIONS -> WHEN OUR HASH FUNCTION RETURNS THE SAME INDEX FOR TWO DIFFERENT INPUTS
    //WHAT DO WE DO??
        //SEPARATE CHAINING - WE JUST STORE THE DATA AT THE SAME SPOT USING ANOTHER NESTED DATA STRUCTURE.. (MAYBE A NESTED ARRAY).... 
        //LINEAR PROBING - WHEN THERE'S A COLLISION.. LOOK AHEAD FOR NEXT EMPTY SLOT AND PUT IT THERE (NO NESTED STRUCTURES... TRICKY TO SET UP, BUT CAN BE FASTER/LESS SPACE INTENSIVE)

class HashTable {
    constructor(size = 4){
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    _set(key, value){
        //accept a key and a value
        //hash the key
        //store the key-value pair in the hash table array via separate chaining
        //TEACHERS SOLUTION
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];

        }
        //check to see if the key has already been used.. probably not a good idea, alert your user and ask for a diff key or it will overwrite your data.
        this.keyMap[index].push([key, value]);




        // let hashed_key = this._hash(key);
        // let key_value_pair = new Array([key, value]);
        // if(!this.keyMap[hashed_key]){
        //     this.keyMap[hashed_key] = key_value_pair
        // } else {
        //     this.keyMap[hashed_key].push(key_value_pair)
        // }
    }
    _get(key){
        //accepts a key
        //hashes the key 
        //retrieve the key-value pair in the hash table at that hashed position
        //if key not found, return undefined
        //TEACHERS SOLUTION
        let index = this._hash(key);
        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++){
                if (this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }

            return this.keyMap[index]
        } else{
            return undefined
        }


        // if(key > this.keyMap.length-1 || key < 0) return undefined;
        // let hashed_key = this._hash(key);
        // let spot = this.keyMap[hashed_key];
        // for (let i = 0; i < this.keyMap.length; i++){
        //     if (key === spot[0]) {
        //         return spot[0]
        //     } else{
        //         for (let j = 0; j < spot.length; j++){
        //             if (key === spot[j]){
        //                 return spot[j]
        //             } else {
        //                 return 'key not found';
        //             }
        //         }
        //     }
        // }
    }
    _keys(){
        //returns all keys from hash table array
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                // console.log(this.keyMap[i])
                for (let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
                // this.keyMap[i]
            }
        }
        return keysArr;
    }
    _values(){
        //returns all values from hash table array
        //think about how we should handle duplicate data.. do we return both, or just 1... typically we return unique
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                // console.log(this.keyMap[i])
                for (let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
                // this.keyMap[i]
            }
        }
        return valuesArr;
    }
}






// BIG O OF HASH TABLES
    //INSERTION O(1)
    //DELETION O(1)
    //ACCESS O(1)
        //COMES DOWN TO HOW GOOD HASH FUNCTION IS.. HOW FAST, AND HOW WELL IT DISTRIBUTES YOUR DATA (MINIMIZE COLLISIONS)











