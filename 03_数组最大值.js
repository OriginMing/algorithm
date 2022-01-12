/* 递归 二分 */
function devProcess(arr,left,right){
    if(left==right){
        return arr[left]
    }
 let mid = left + ((right - left)>>1);
 let leftMax = devProcess(arr,left,mid)
 let rightMax = devProcess(arr,mid+1,right)
 return Math.max(leftMax,rightMax)
}
console.log(devProcess([1,2,3,4,3,9],0,5)); 