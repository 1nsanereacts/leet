var getConcatenation = functions(nums){
  return addNumbersToArray(nums,2)
  
}
function addNumbersToArray(nums,timesofExecution){
  var ansArray=[];
  while(timesofExecution !==0){
    for(i=0;i<nums.length;i++){
      ansArray.push(nums[i]);
      
    }
    timesofExecution--
  }
  return ansArray;
}
