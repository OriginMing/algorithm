/* 栈 
1.top(属性)查找当前栈顶位置 
2.pop方法 删除栈顶元素
3.push方法 将新栈压入
4.peek方法 查找当前栈顶元素
5.length方法 查找当前栈元素总数
6.clear方法 清空栈内元素
*/
class StackArray{
    constructor(){
        this.statck = []
    }
    push(item){
        this.statck.push(item)
    }
    pop(){
        return this.statck.pop()
    };
    
  isEmpty() {
    return this.items.length === 0;
  }
    peek(){
        if(this.isEmpty()){
          return undefined
        }
        return this.statck[this.statck.length - 1]
    }
    clear(){
        this.statck = []
    }
}