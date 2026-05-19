const number=[1,2,3,4,5,6,7,8,,9,10]
const condition=number.filter((num)=>num>4)
console.log(condition)


const condition1=number.filter((num)=>{
    if (num>4){
        return num;
    }
})
console.log(condition1);

const condition2=number.filter((num)=>{
   return num>4
})
console.log(condition2);
//using map
const num=[1,2,3,4,5,6,7,8];
const newnum=num.map((iteam)=>{return iteam+10})
console.log(newnum);
const mynum=num
    .map((iteam)=>(iteam*10))
     .map((iteam)=>(iteam+1))
   .filter((iteam)=>(iteam>50))

   console.log(mynum);