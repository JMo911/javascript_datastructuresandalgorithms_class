// function power(base, exp){
//     let total = base; //2
//     if (exp === 0){
//         return 1; 
//     }
    
//     if (exp ===1) {
//         return total
//     }

//     function helper(helperBase, helperExp) {
//         if (helperExp === 1) {
//             return
//         }
//         total*=helperBase
//         helper(helperBase, helperExp-1)
//     };

//     helper(base, exp);
//     return total;
// }

// console.log(power(2,2))

// function factorial(number){
//     //base case, recursion, variable input
//     let result = 1;
//     if (number === 1) {
//         return
//     }

//     function helper(helperInput){
//         if(helperInput===1) {
//             return
//         }
//         result*=helperInput
//         helper(helperInput-1)
//     }
//     helper(number)
//     return result
// }

// console.log(factorial(3))

//CHALLENGE SECTION
// function reverse(str){
//     let newString = ''

//     function helper(helperInput){
//         let starter = helperInput.charAt(0)
//         let switcher = helperInput.charAt(1)
//         newString += switcher
//         if(!switcher){
//             newString += starter
//             return
//         }
//         helper(helperInput.slice(1));
//     }

//     helper(str);
//     return newString;
// }

// reverse('awesome')


function isPalindrome(str){
    //figure out if first and last letter are the same
    //slice first and last letter off string and compare again
    //if always the same until there's either 0 or 1 characters left, then return true
    let incrementer = 0;
    let decrementer = -1;

    function helper(helperInput){
        debugger;
        helper(str.slice(incrementer, str.length + decrementer))
        incrementer++;
        decrementer--;
        // if (helperInput.charAt(0) === helperInput.charAt(helperInput.length-1)){
        //     incrementer++;
        //     decrementer--;
        //     helper(str.slice(incrementer, str.length + decrementer))
        // }
        if (helperInput.length <= 1){
            return true
        }
        if (helperInput.charAt(0) !== helperInput.charAt(helperInput.length-1)){
            return false
        }
    }
    
    helper(str)
    // if(helper(str)){
    //     return true
    // } else {
    //     return false
    // }
    
}
isPalindrome('tacocat'); //returns true
isPalindrome('hello'); //returns false