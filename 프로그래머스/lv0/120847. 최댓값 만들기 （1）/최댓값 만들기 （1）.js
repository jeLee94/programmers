function solution(numbers) {
   let mx1 =0 
   let mx2 = 0
   mx1 = Math.max(...numbers) //numbers = [1,2,3,4,5] mx1 =5
   numbers.splice(numbers.indexOf(mx1),1) //mx1의 인덱스부터 1개를 지운다 number =[1,2,3,4]
   mx2 = Math.max(...numbers) // mx2=4
   return mx1 * mx2 // 5*4
}