function solution(s)
{
   let array = [...s]
   let stack = []
   
   for(let i=0; i<array.length; i++){
       if(stack[stack.length-1] === array[i]){
           stack.pop()
       }else{
           stack.push(array[i])
       }
   }
    return stack.length === 0 ? 1 : 0
}