var NumArray = function(nums) {
    this.arr = nums
};

NumArray.prototype.sumRange = function(left, right) {
    let sum = 0
    while( left <= right){
        sum += this.arr[left++]
    }
    return sum
};
