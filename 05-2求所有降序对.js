/* [3,1,7,0,2]
(3,1)
(3,0)
(3,2)
(1,0)
(7,0)
(7,2) 
相当于求右边有多少个数比他小*/
/* 数组的小和 */
function process(arr,L,R){
    if(L==R){
        return 0;
    }
    let mid = L + ((R-L)>>1)
   return process(arr,L,mid) + process(arr,mid+1,L) + merge(arr,L,mid,R);
}
function merge(arr,L,M,R){
    let help = []
    let i =0; 
    let p1 = L; //左边的起始下标
    let p2 = M+1; //右边的起始下标
    //把左右两边从左到右移动，较小的值赋过去
    let res =0;
    while (p1<=M&&p2<=R) { 
        res += arr[p1]>arr[p2]?(M - p1+1):0;
        help[i++] = arr[p1]<=arr[p2]?arr[p1++]:arr[p2++]; //相等拷贝左边的
    }
    //要么p1越界要么p2越界
    while(p1<=M){
        help[i++] = arr[p1++]
    }
     while(p2<=R){
        help[i++] = arr[p2++]
    }
    for(let j =0;j<help.length;j++){
        arr[L + j] = help[j]
    }
    return res
}
