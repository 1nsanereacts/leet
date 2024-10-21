var countTriples= function(arr){
  let n = n.length
  let prefix = new Array(n+1).fill(0)
  for(i=0;i<n;i++){
    
prefix[i+1] = prefix[i] ^ arr[i]
    
    
  }
  let count=0
  for(i=0;i<n;i++){
    for(k=i+1;k<n;k++){
      if(prefix[i] ==== prefix[k+1]){
        count+=(k-i)
        
      }
    }
    
  }
  return count
}
