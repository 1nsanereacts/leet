var canPlaceFlowers =function(flowerbed,n){

for(i=0;i<flowerbed.length;i++){
if(flowerbed[i]===0 && 
flowerbed[i-1]!==1 &&
flowerbed[i+1]!==1
){
n-=1;i++
}
}
return n<=0;
}
