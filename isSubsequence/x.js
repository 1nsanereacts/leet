var isSubsequence= function(s,t){
  let sp = 0;
  let tp = 0;
  while( sp < sp.length && tp < tp.length){
    if(s[sp] === t[tp]){
      sp++;
      
    }
    tp++
    
  }
  return sp=== s.length;
  
}
