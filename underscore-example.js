var _ = require('underscore');

var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42];

console.log("is empty: " + _.isEmpty(scores));

console.log("flatten: " + _.flatten([1,2,3,4],[3,4,2],[4,2]));

console.log("Range: " + _.range(5));

console.log("Each : ");
_.each([1,2,3,4,5], function(i){
    console.log(i)
});
      

console.log("Map: "+_.map([2,3,4,5], function(something){
  return something *5;
}));

console.log("Find: "+ _.find([1,2,3,4,5], function(a){
  return a % 2 == 0;
}));

console.log("Find "+ _.find([1,2,3,4,5], function(a){
    return a == 5;
}));

console.log("filer "+ _.filter([10,2,5,7,2,3], function(b){
    return b % 2 == 0;
}));