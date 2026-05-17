//for(let i=0;i<=10;i++){
  //  const element=i;
    //console.log(element);
//}


for(let i=0;i<=10;i++){
    console.log("Outer loop"+i);
    for(let j=0;j<=10;j++){
        console.log("Inner loop"+j);
    }
}
let myarr=["Batman","Superman","Flash"];
console.log(myarr.lenght)
for(let i=0;i<myarr.length;i++){
    console.log(myarr[i]);
}
for(let i=0;i<=10;i++){
    if(i==5){
        break;
    }
    const element=i;
    console.log(element);
}
for(let i=0;i<=10;i++){
    if(i==5){
        continue;
    }
    const element=i;
    console.log(element);
}