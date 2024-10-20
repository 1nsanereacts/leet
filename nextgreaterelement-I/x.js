var nextGreaterElement= function(num1,num2){

var hashmap={}
  const output=[]
  
  for(i=0;i<nums2.length;i++){
    hasmap[nums2[i]]=i
  }
  for(i=0;i<nums1.length;i++){
    const number= nums1[i]
    for(j=hashmap[number];j<nums2.length;j++){
   if(nums2[j]>number){
     output.push(nums2[j])
     break;
   }
    if(j===nums2.length-1){
      output.push(-1)
    }
    }
  }
  return output;
}
