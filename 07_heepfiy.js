function heepfiy(arr,index,heapSize){
    //不断下沉
  let left = 2*index + 1;
  while(left<heapSize){
    let largest = left+1<heapSize&&arr[left]<arr[left+1]?left+1:left;
    largest = arr[index]>arr[largest]?index:largest;
    if(largest == index){
        break;
    }
    swap(arr,largest,index)
    index = largest;
    left = 2*index+1
  }

}
function heapInsert(arr,index){
    //不断向上看
    //比父节点大，
    while(arr[index]>arr[Math.floor((index-1)/2)]){
        swap(arr,index,Math.floor((index-1)/2))
        index =Math.floor((index-1)/2)
    }
}

//返回最大值并且大根堆中，把最大值删除。剩下的数依然保持大根堆
function pop(heap,heapSize){
    //把大根堆中最后一位与根交换 ，进行向下沉操作
    let ans = heap[0];
    swap(heap,0,--heapSize)
    heepfiy(heap,0,heapSize)
    return ans
}
//heapSize 已收集的堆得大小，limit  限制堆大小 自定义
function push(value){
    if(herpSize ==limit){
        return
    }
    heap[heapSize]  = value;
    heapInsert(heap,heapSize++) //++ganma  heapSize是一个虚拟东西  你数组添加了 得 手动添加heapsize大小
}