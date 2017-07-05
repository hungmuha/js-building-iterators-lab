// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

var num=[2,5,6];
var acc;
function myReduce(arr,callback,acc) {
for(let i=0;i<arr.length;i++){
	if(acc===undefined && i===0){
		acc=arr[i];
	}else{
  acc= callback(acc,arr[i],i,arr);
}}
 return acc;
}


function callthis(current){
   return acc+current;
}


myReduce(num,callthis);



/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
