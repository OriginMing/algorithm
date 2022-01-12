/* 1.0 */
function quickSort(arr){
if(arr==null||arr.length<2){
    return
}
process(arr,0,arr.length-1)
  }
function process(arr,left,right){
if(left>=right){
    return
};
let mid = partition(arr,left,right)
process(arr,left,mid-1)
process(arr,mid+1,right)
}  

function quickSort2(arr){
    if(arr==null||arr.length<2){
        return
    }
    process2(arr,0,arr.length-1)
      }
function process2(arr,left,right){
    if(left>=right){
        return
    };
    let equalArea = partition(arr,left,right)
    process2(arr,left,equalArea[0]-1)
    process2(arr,equalArea[1]+1,right)
}
function process3(arr,left,right){
    if(left>=right){
        return
    };
    swap(arr,left+ Math.floor(Math.random()*(right-left+1)),right);
    let equalArea = partition(arr,left,right)
    process2(arr,left,equalArea[0]-1)
    process2(arr,equalArea[1]+1,right)
}