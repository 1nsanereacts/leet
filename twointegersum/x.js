class Solution{
  twoSum(target,nums){
    const map = new Map();
    for(index=0;index<nums.length;index++){
   const num = nums[index]
      const complement = target - num;
      const sumIndex = map.get(complement)
      const isTarget = map.has(complement)
      
    if(isTarget){
      return [index,sumIndex]}
      
    }
    map.set(num,index)
  }
  return [-1,-1];
    
  }
}
