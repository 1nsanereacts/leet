var replaceElements= function(arr){
  var len = arr.length;
  var max = -1
  for(i=len-1;i>=0;i--){
    let curr= arr[i]
    arr[i]= max;
    if(curr> max){
      max= curr;
    }
  }
  return arr;
}
