/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closest = nums[0];
    for (let i = 1; i<nums.length; i++){
        if(Math.abs(closest)>Math.abs(nums[i])){
            closest = nums[i];
        }else if(Math.abs(closest )=== Math.abs(nums[i]) && nums[i]>closest){
            closest = nums[i];
        }
    }
    return closest;
};
