/* 传入一个数组和一个数据 ，要求输出 左边小于等于次数 右边大于此数 */
function partition(arr,L,R){
 let less = L - 1;
 let  index = L;
 while (index<R) {
     if (arr[index]<=arr[R]) {
         swap(arr,index++,++less)
     }
 }
 swap(arr,++less,R)
 return less
}
/* arr l R 上 荷兰国旗划分  以 arr[R]作画分值
划分为 ： <arr[R]  ==arr[R] >arr[R]  返回 其位置
*/
function swap(arr,i,j){
    let tep = arr[i];
    arr[i] = arr[j];
    arr[j]  = tep;

}
function partition2(arr,L,R){
    if (L>R) {
        return [-1,-1]
    }
    if(L==R){
        return [L,R]
    }
    let less = L - 1;
    let more = R;
    let index = L;
    while (index<more) {
        if(arr[index]==arr[R]){
            index++
        }
        else if(arr[index]<arr[R]){
            swap(arr,index++,++less)
        }else{
            swap(arr,index,--more)
        }
    }
    //L'''less less+1---more-1 more==r-1 r
    swap(arr,more,R)
    return [less+1,more]
  }

  /* 快排3.0 */