//with promise
async function funName()
{
    return "hello"
}
arrowfunName=async()=>
{
    return "kec"
}
console.log(funName());
console.log(arrowfunName());
// without promise
async function funName()
{
    console.log("hello")
}
arrowfunName=async()=>
{
    console.log("kec")
}
funName()
arrowfunName()