const tinderuser={};

tinderuser.name="Dhawal",
tinderuser.email="dhawal@gmail.com",
tinderuser.address="14,siddhipuram colony"

//console.log(tinderuser);

const regularuser={
    email:"dhawal@gmail.com",
    fullname:{
        username:{
           firstname:"Dhawal",
           lastname:"jaat"
        }
    }
}

console.log(regularuser.fullname.username);

const obj1={ 1:"a",2:"b"}
const obj2={ 3:"a",4:"b"}

const obj3=Object.assign(obj1,obj2);
console.log(obj3);

const arr=[{
    id:1,
    email:"ghyu@gmail.com"
},
{
    id:2,
    email:"hkig@gmail.com"
},
{
    id:3,
    email:"gherg@gmail.com"
}
]
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));