const { generateKey } = require("crypto");

function bubbleSort(arr){
    let temp ;
  for(let j =0 ;j <arr.length;j++){
    for(let i = 0;i<arr.length-1-j;i++){
        if(arr[i]<arr[i+1]){
          temp =  arr[i]
          arr[i] =  arr[i+1]
          arr[i+1] = temp
        }
    }
  } 
  //console.log(arr); 
}
function selectSort(arr){
  for(let j = 0;j<arr.length;j++){
    for(let i = j;i<arr.length;i++){
      if(arr[j]<arr[i+1]){
        swap(arr,j,i+1)
      }
    }
  }
  return arr
}
/* console.log(selectSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]),"------------");

bubbleSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]) */

function insertSort(arr){
  for(let i =1;i<arr.length;i++){
    let p  = i-1;
    while(p>=0){
      if(arr[p]>arr[p+1]){
        swap(arr,p,p+1)
      }
      p--
    }
  }
  return arr
}
/* console.log( insertSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]),"---"); */

/* function insertSort(arr){
  for(let i =1;i<arr.length;i++){
      //默认前面的已经按从大到小排列好
     if(arr[i]>arr[i-1]){
         let temp = arr[i]
         let p =i-1
         while(p>=0 && temp > arr[p]){
             arr[p+1] = arr[p]
             p--
         }
         arr[p+1]  = temp
     }
  }
} */


function quickSort(arr){
  if(arr.length<=1) return arr
  var pivotIndex = Math.floor(arr.length/2)
  var pivo = arr[pivotIndex] 
  let left = []
  let right = []
  for(let i =0 ;i<arr.length;i++){
      if(i!=pivotIndex){
        if(arr[i]<=pivo){
            left.push(arr[i])
        }else{
            right.push(arr[i]);
        }
      }
  }
  return quickSort(left).concat(pivo,quickSort(right))
}
/* let a = quickSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70])

console.log(a); */



/* function shellSort(arr) {
    let len = arr.length;
    // gap 即为增量
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < len; i++) {
        let j = i;
        let current = arr[i];
        while(j - gap >= 0 && current < arr[j - gap]) {
          arr[j] = arr[j - gap];
          j = j - gap;
        }
        arr[j] = current;
      }
    }
  }
let b = shellSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]) */



//不使用temp,交换数据信息  对数器
function swap(arr,i,j){
    arr[i]=arr[i]+arr[j];
    arr[j]=arr[i]-arr[j];
    arr[i]=arr[i]-arr[j];
    return arr;
}
function generateRandomArray(a,b){
   //a 最大长度 b 最大值
   let arr = []
   for(let i = 0; i<a;i++){
     arr.push(Math.floor((b+1)*(Math.random())-b*Math.random()))
   }
   return arr
 }


 /* 二 分 */
 /* 经典二分 有序数组查找某个值 */
 function findOneBydi(arr,value){
   //从小到大
  let L = 0;
  let R  = arr.length - 1;
  let M = 0;
  while(L<=R){
    M = Math.floor((L + R)/2)
    if (arr[M] == value) {
      console.log(M);
       return true
    }else if(arr[M]>value){
    R=M - 1;
    }else{
    L = M + 1;
    }
  }
  return false
}  
//console.log(findOneBydi([3,  5,  9, 22, 32, 34,35, 37, 50, 55, 64, 70,82, 89],4));
//35(6)
//
let test =  [1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4]
function findContionLeft(arr,value){
  let L =0;
  let R  = arr.length - 1;
  let M = 0;
  let index = -1
  while(L<=R){
    M = Math.floor((L + R)/2)
    if(arr[M]>=value){
        index=M;
        R=M-1
    }else{
      L = M + 1;
      }
  }
  return index
}
//console.log(findContionLeft(test,2.5)); 
/* 
function swap2(){
  let a = 6 ;
  let b = 6;
  a = a ^ b;   
  console.log(a,b);

}
swap2() */
//数组中只有一个数出现奇数个，其他出现偶数个，找出这个数
function findOneOdd(arr){
  let eor = 0;
   for (let i = 0; i < arr.length; i++) {
    eor ^=arr[i]
   }
   return eor
}
//console.log(findOneOdd([1,2,3,2,3]));
//数组中有两个不同的且为奇数个的数，其他为偶数个，找出这两个数
function findTwoOdd(arr){
  let eor = 0;
  for (let i = 0; i < arr.length; i++) {
   eor ^=arr[i]
  }
  //两个不同 eor必有1，找出最右的1
  //eg:010101100
  //   101010011
  //   101010100
  
  //   000000100 
  let rightOne = eor &((~eor)+1)
  let onlyOne = 0;
  for (let i = 0; i < arr.length; i++) {
     if((rightOne & arr[i])!=0){
      onlyOne ^=arr[i]
     }
   }
   console.log(onlyOne,'``````````````````',(eor^onlyOne));
}
console.log(findTwoOdd([3,2,3,3,1,1,8,8,9,9]));
