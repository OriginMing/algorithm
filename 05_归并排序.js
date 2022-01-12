
/* L~~~R范围上 变成有序的 */
function process(arr,L,R){
   if(L==R){
       return;
   }
   let mid = L + ((R-L)>>1)
   process(arr,L,mid);
   process(arr,mid+1,L);
   merge(arr,L,mid,R);
}
function merge(arr,L,M,R){
    let help = []
    let i =0; 
    let p1 = L; //左边的起始下标
    let p2 = M+1; //右边的起始下标
    //把左右两边从左到右移动，较小的值赋过去
    while (p1<=M&&p2<=R) {
        help[i++] = arr[p1]<=arr[p2]?arr[p1++]:arr[p2++];
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
}
function sort(arr){
    /* 非递归实现 */
    if(arr == null || arr.length<2){
        return
    }
    let n = arr.length;
    let mergeSize = 1;//  左右各为1
    while (mergeSize<n) {
        let l  = 0;
        while(l<n){
            let m = l+mergeSize - 1;
            //凑不出右组数了 只有左边的就不用merge了
            if(m>=n){
                break;
            } 
            let r = Math.min(m + mergeSize,n-1);
            merge(arr,l,m,r);
            l = r+1;
        }
        //加不加 不影响 功能，这里这样做 少成个2 防止溢出 一般也不会
        if(mergeSize>n/2){
            break
        }
        mergeSize<<=1
    }
}