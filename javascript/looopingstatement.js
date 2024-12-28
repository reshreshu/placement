array=[10,20,30,[40.5,50.9],"q","kec",true]
console.log(array);

//for...in loop
//for(var a in array)
// {
    console.log("Element present in index",array[a]);
//}

//for ...of loop
for(var a of array)
{
    console.log("element",a);
}