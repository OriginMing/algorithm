class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
/* 方便创建链表 */
function createList(arr){
   let L = new Node(null);
   let p = L
   arr.forEach(data => {
    p.next = new Node(data)
    p = p.next
   });
   return L.next
}
(function(){
    var arr = [1, 3, 5]; // 为了方便，将数组转化为链表
    var L = createList(arr);
   //  console.log(L);
    console.log(removeValue(L,1));
    //console.log(reverseList(L)); 
})()
function reverseList(L){
    if(L ==null||L.next ==null){
        return L
    }
    let current = L;
    let pre = null;
    let next = null;
    // 将
    while(current !== null){
        next = current.next;  //赋值 next节点

        current.next = pre; //使当前节点指向原来的前一节点，最初pre为null
        pre = current; //保存当前节点

        current = next; //current 与 next完成替换
    }
    return pre
}

function reverseDoubleList(L){
    if(L ==null||L.next ==null){
        return L
    }
    let current = L;
    let pre = null;
    let next = null;
    // 将
    while(current !== null){
        next = current.next;  //赋值 next节点
        current.next = pre; //使当前节点指向原来的前一节点，最初pre为null
        current.last = next;
        pre = current; //保存当前节点
        
        current = next; //current 与 next完成替换
    }
    return pre
}

function removeValue(Head,num){
    //此 while循环 可以让 head来到第一个不需要删除的位置
    while(Head!=null){
        if(Head.data!=num){
            break;
        }
        Head  = Head.next;
    }
    let current = Head;
    let pre = Head;
    while(current!=null){
        if(current.data == num){
            pre.next = current.next
        }else{
            pre = current
        }
        current = current.next
    }
    return Head
}
