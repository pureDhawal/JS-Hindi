const array=[0,1,2,4,6,7];
const array1=["Shaktiman","naagraj"];

const myarr = new Array(0,1,2,3,4,5);
//console.log(array[6]);
//console.log(myarr[2]);

  //myarr.push(6);
  //myarr.push(7);
  //myarr.pop();
  //console.log(myarr);

  //myarr.unshift(9);
  //myarr.shift();

  //console.log(myarr.includes(9));
  //console.log(myarr.indexOf(7269));

   const newarr=myarr.join();
  //console.log(myarr);
  //console.log(typeof newarr);

  console.log("A ",myarr);

  const myn1=myarr.slice(1,3);
  console.log("B ",myarr);
  const myn2=myarr.splice(1,3);
  console.log("C ",myarr);
  console.log(myn2);

