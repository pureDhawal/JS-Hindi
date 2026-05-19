const coding=["js","cpp","ruby","python","java"]
coding.forEach(function(val){
  //  console.log(val);
})
//Using arrow function
coding.forEach((item)=>{
    //console.log(item);
})
coding.forEach((item,index,array)=>{
    console.log(item,index,array);
})
// using nested object 
const mycoding=[
    {
       languagename:"javascript",
       languagefilename:"js"
    },
    {
        languagename:"cpp",
       languagefilename:"c++"
    },
      {
        languagename:"Python",
       languagefilename:"py"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languagefilename);
})