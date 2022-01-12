function sort(arr){
/* for (let i = 0; i < arr.length; i++) {
    heapInsert(arr,i)
} */
for (let i = arr.length-1; i >=0; i--) {
    heepfiy(arr,i,arr.length)
}
let heepSize = arr.length
swap(arr,0,--heepSize)
while(heepSize>0){
    heepfiy(arr,0,heepSize);
    swap(arr,0,--heepSize)
}
}