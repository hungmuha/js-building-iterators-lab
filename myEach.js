// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach

  
  //  CODE INSIDE HERE   //

var car=["Honda","Toyota","Lexus","Ford"];

function myEach(arr, callback) {
for(i=0;i<arr.length;i++){
 callback(arr[i],i,arr);
}
console.log("this is my for.each");
}


function callback (things){
	console.log(things);
}

myEach(car,callback);

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myEach;
