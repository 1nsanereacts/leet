var generate= function(numRows){
  const res =[[1]]
  for(i=0;i<numRows-1;i++){
    const dummyRow =[0,...res[res.length-1],0]
    const row=[]
    for(j=0;j<dummyRow-1;j++){
      row.push(dummyRow[j] , dummyRow[j+1])
    }
    res.push(row);
    
  }
  return res;
}
