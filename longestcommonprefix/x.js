var longestCommonPrefix = function(strs){
  let pref= strs[0];
  let prefLen = pref.length;
  for(i=1;i<strs.length;i++){
    let s = strs[i]
    while(pref !== s.substring(0,prefLen)){
      prefLen--;
      if(prefLen === 0){
        return "";
      }
      pref= pref.substring(0,perfLen)
    }
  }
}
