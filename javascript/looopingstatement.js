array=[10,20,30,[40.5,50.9],"q","kec",true]
console.log(array);


//for...each loop
//array.forEach((index,element)=>{
  //  console.log("index is",index,"element is",element);
//})

obj={
    "firstnmae": "reshma",
     "lastname":"alavutheen",
     "age": 20
 }
console.log(obj.age);
for (key in obj)
{
    value=obj[key]
    console.log(key,value)
}
Object.keys(obj).forEach(key => {
    const value = obj[key];
    console.log(key, value);
});


//for...in loop
//for(var a in array)
// {
    //console.log("Element present in index",array[a]);
//}

//for ...of loop
//for(var a of array)
//{
   // console.log("element",a);
//}


