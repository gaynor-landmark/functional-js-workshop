/*function upperCaser(input) {
      // SOLUTION GOES HERE
      return input.toUpperCase();
    };
    module.exports = upperCaser;
    */
/*function repeat(operation, num) {
      // SOLUTION GOES HERE
      for (var i = 0; i < num; i++){operation();};
      
    };

module.exports = repeat;*/

/*function doubleAll(numbers) {
     // SOLUTION GOES HERE
     return result = numbers.map(function(val){
      return val * 2});
   }
   
   module.exports = doubleAll


    */

 /*   function getShortMessages(messages) {
          // SOLUTION GOES HERE

          var allmessages = messages.map(function(msgobj){
            return msgobj.message;
          });
          var shortmessages = allmessages.filter(function(val){ return val.length < 50; });

          return shortmessages;

        }
        
        module.exports = getShortMessages
*/
 /*function checkUsersValid(goodUsers) {
       return function allUsersValid(submittedUsers) {
         // SOLUTION GOES HERE
         return submittedUsers.every(function(suVal){
            
            return = goodUsers.some(function(gdVal){
              return (suVal === gdVal);
            });
            
         });
         
       };
     }
     
     module.exports = checkUsersValid*/
/*
//my solution
     function countWords(inputWords) {
           // SOLUTION GOES HERE
          var countObj = {};
          
          // for each word in the original array,
          // count the number of times the word appears in the string,
          // add the word and the count to the new object
       // initialise
          inputWords.reduce(function(prev, current){
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
/*
 function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        console.log(countMap, word);
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
    
    module.exports = countWords*/


 function reduce(arr, fn , initial) {
      
     // console.log(arr, fn, initial);
      var xxx = fn();

    }
    
    module.exports = reduce
