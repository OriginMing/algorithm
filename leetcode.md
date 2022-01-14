# 1.两数之和

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i=0 ;i<nums.length;i++){
      for(let j = i+1 ; j<nums.length;j++){
       if (nums[i]+nums[j]==target)  {
           return [i,j]
       }
      }
  }
};





/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj   = {};
  for(let i=0;i<nums.length;i++){
  let num = nums[i]
   if(num in obj){
       return [obj[num],i]
   }else{
       obj[target-num]=i;
   }
  }

};





/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {};
  for(let i=0 ; i<nums.length;i++){
      let num = nums[i];
      if(num in obj){
          return [obj[num],i]
      }else{
          obj[target-num] = i 
      }
  }
};

利用对象，key存target-nums[i],value存i



```

# 26.删除有序数组中的重复项

```js
var removeDuplicates = function(nums) {

    let set = new Set(nums);
    
    nums =  Array.from(set)
    return nums
    }
    var removeDuplicates2 = function(nums) {
      let length = nums.length;
      if(length==0){
          return 0 
      }
      let fast =1;let slow = 1;
      while(fast<n){
        if(nums[fast]!==nums[fast-1]){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
      }
         return slow
     }
       
   removeDuplicates2([1,1,2])
   let a =  removeDuplicates([1,1,2])
   console.log(a);
    
```





# 7.整数反转

```javascript

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let tag = 0;
    let n =0;
  if(x<0){
       tag = -1;
       x=-x;
  }
  while(x>0){
     n = n *10 + x%10;
     x=Math.floor(x/10)
  }
  if(n>2147483647){
      return 0 
  }else{
  return tag==0?n:-n
  }
};
js中的幂 Math.pow(2,31)



/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
let tag = 0;
if(x<0){
    tag = -1;
      x = -x
      }
     let words =  x.toString().split('').reverse().join('');
     if(words>2147483647){
     return 0
   }
   return tag==0?words:-words
}






```

# 9.回文数

```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    let ox = x;
  x= x.toString().split('').reverse().join('')
  return ox==x?true:false
};







/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n =0;
    if(x<0){
        return false
    }
    let ox = x;
   if(x==0){
       return true
   }
   while(x>0){
     n = n*10 + x%10;
     x=Math.floor(x/10);
   }
    return n==ox
};



```

