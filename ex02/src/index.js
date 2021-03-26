function* myGenerator(){
    var x;
    function* insideGenerator1(){
    for (let i = 1; i <= 5; i++){
          x = i; 
        yield x;
        }
    }
    
    function* insideGenerator2(){
        for (let i = 10; i <= 15; i++){
          x = i;
        yield x;  
     
    function* insideGenerator3(){
        for (let i = 6; i <= 9; i++){
         x = i;
        yield X;
    }
}
fifteenArray = [];

const iterator = myGenerator();
for (i = 0; i < 15; i++) {
    
}
console.log(iterator.next().fifteenArray.join('#, '));
module.exports = { fifteenArray, myGenerator };
