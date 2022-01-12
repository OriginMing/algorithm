/* 前缀树 */
class Node{
    constructor(){
        this.pass = 0;
        this.end = 0;
        this.next =[]
    }
    
}
function insert(word){
   let arr =  word.split('');
   let root = new Node()
   let path = 0;
  for (let i = 0; i < arr.length; i++) {
      path = arr[i] - 'a';
      if (root.next[path] == null) {
        root.next[path] = new Node()
      }
      root = root.next[path]
      root.pass++
  }
  root.end ++
}