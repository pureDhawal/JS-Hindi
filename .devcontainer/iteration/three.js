//for of loop
let arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

//map
const map=new Map();
map.set('In',"India")
map.set('Us',"United States")
map.set('Uk',"United Kingdom")
map.set('In',"India")

//console.log(map);
for (const [key,value] of map) {
    //console.log(key,":-",value)
}//console.log(key,value);

//forin loop
const obj={
    js :"javascript",
    cpp :"C++",
    py :"Python",
    java :"Java"
}
for (const key in obj) {
    console.log(key,":-",obj[key])
    
}