function debounce(delay,fn){
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(arguments)
            //fn.apply(null,arguments)
        },delay)
    }
}
function throttle(delay,fn){
    let timer;
    return function(){
        if(timer){
            return
        }
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(null,arguments)
            timer = null
            //fn.apply(null,arguments)
        },delay)
    }
}
function deepClone(obj){
   if(typeof obj != 'object' ||  obj==null){
       return  obj
   }
   let result ;
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
   }
   for(let key in obj){
       result[key] = deepClone(obj[key])
   }
   return result 
}
 //let res =  deepClone({a:'2',c:{xx:'x',bb:'bb'}})
/*  let res =  deepClone([1,2,3,{a:"xx"}])
 console.log(res); */

 function Currying(...args){
     let add = function(){
         args.push(...arguments)
         return add
     }
     add.toString = function(){
        return args.reduce((preAll,current)=>{
             return preAll + current
         },0)
     }
     return add
 }

 