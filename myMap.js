// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map


var num=[1,2,5,6];

function myMap(arr, callback) {
var transformedValue;
var newArray=[];
for(i=0;i<arr.length;i++){
  transformedValue= callback(arr[i],i,arr);
  newArray.push(transformedValue);
}
 console.log(newArray);
 return newArray;
 
}

function callthis(justNum){
 return justNum + 2;
}

myMap(num,callthis);


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
