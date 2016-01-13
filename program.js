/*
function upperCaser(input) {
      
      return input.toUpperCase();
    };
    module.exports = upperCaser;
  */

/*
function repeat(operation, num) {
      // SOLUTION GOES HERE
      for (var i = 0; i < num; i++){operation();};
      
    };

module.exports = repeat;

*/

/*
function doubleAll(numbers) {
     // SOLUTION GOES HERE
     return result = numbers.map(function(val){
      return val * 2});
   }
   
   module.exports = doubleAll

*/
    
/*
   function getShortMessages(messages) {
          // SOLUTION GOES HERE

          var allmessages = messages.map(function(msgobj){
            return msgobj.message;
          });
          var shortmessages = allmessages.filter(function(val){ return val.length < 50; });

          return shortmessages;

        }
        
        module.exports = getShortMessages

*/

/*
 function checkUsersValid(goodUsers) {
       return function allUsersValid(submittedUsers) {
         // SOLUTION GOES HERE
         return submittedUsers.every(function(suVal){
            
            return goodUsers.some(function(gdVal){
              return (suVal === gdVal);
            });
            
         });
         
       };
     }
     
     module.exports = checkUsersValid

*/

/*
     function countWords(inputWords) {
           // SOLUTION GOES HERE
          var countObj = {};
          
          // for each word in the original array,
          // count the number of times the word appears in the string,
          // add the word and the count to the new object
       // initialise
          countObj = inputWords.reduce(function(prev, current){
            console.log(prev, current);
            countObj[current] = 0   
            return countObj;
          }, {});
          inputWords.reduce(function(prev, current){
            countObj[current] = countObj[current] + 1   
            return countObj;
          }, countObj);  //start with the initialised object
        
          return countObj;
         }
         module.exports = countWords
*/


// official solution
/*
 function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        console.log(countMap, word);
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
    
    module.exports = countWords
    */

//my solution
 function reduce(arr, fn , initial) {   
    //exit condition
    if (!arr.length){  
      return initial;
    }  
    //do something
    var indx = 1;
    initial = fn(initial, arr[0], indx, arr);
    // slice the array to remove the first item in the array 
    arr = arr.slice(1) ; 
    return reduce(arr, fn, initial);  //recurse
    }

    module.exports = reduce  



//official solution
   /* function reduce(arr, fn, initial) {
      return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }
    
    module.exports = reduce*/

