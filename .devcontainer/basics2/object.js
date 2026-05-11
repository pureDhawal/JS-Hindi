
const mysym=Symbol("key1")
const jsuser={
    name:"Hitesh",
    [mysym]:"mykey",
    age:18,
    location:"Jaipur",
    email:"hitesh@gmsil.com",
    isloggedIn:false,
    lastloginday:["Monday","Saturday"]
}

//console.log(jsuser.email);
//console.log(jsuser["email"]);
//console.log(jsuser[mysym]);

jsuser.greeting=function(){
    console.log("hello js user");
}

jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());