//我们设计链表包含两个类，一个是 Node 类用来表示节点，另一个事 LinkedList 类提供插入节点、删除节点等一些操作
class Node{
    constructor(el){
        this.el = el;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = new Node('head')
    }
      // 用于查找
  find(item){
  let currentNode = this.head
  while(currentNode!=null && currentNode.el!==item){
      currentNode = currentNode.next
  }
  return currentNode
  }
  findPre(item){
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.el !== item) {
        currentNode = currentNode.next
      }

      return currentNode    
  }
  
  // 插入节点
  insert(el,item){
  // el:要插入的数据
  // item：数据插入到这个节点后面
  const newNode = new Node(el)
  const cur = this.find(item)
  newNode.next = cur.next
  cur.next = newNode
  }
   
  // 删除节点
  remove(){
  //  删除节点和插入节点类似，首先要找到相应节点的前一个节点，找到后，让它的next指向待删除节点的下一个节点
  const preNode = this.findPre(item)
  if (preNode.next !== null) {
    preNode.next = preNode.next.next
  }
 }
}