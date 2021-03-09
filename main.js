// Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords() {
    let dog_names = dog_string.map(x => {
        if (x is in dog_string){
            return `Matched {dog_name}`;
            }
        }       else {
        return "No Matches"
    }
}

console.log(findWords())

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

function replaceEvens(arr){
    arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
    for(let i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index')

            return arr
        };

        console.log(replaceEvens());


///codewars Q1////
///multiply 2 numbers//
function multiply(a, b) {
    return a * b;
}
        
        
/////codewars Q2//////
//Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, 
// the largest and lowest number in that array / vector
var min = function(list){
    function small(a,b){
      return Math.min(a,b) 
    }
    return list.reduce(small);
  }
   
var max = function (list) {
    function big(a, b) {
        return Math.max(a, b);
    }
    return list.reduce(big);
    }