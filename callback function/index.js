// this is a call back function example how to use call back function
// jab bhi hame flow control karna ho to  ham eska use karte he
function add(callback)
{
    setTimeout(function(){
        let a="you",b="can";
        console.log(a+b);
        callback()
    },8000)
}
function finish(){
    console.log("finish")
}
add(finish)
// ..............................................................................................................................................--------------------------------------------
// Execution flow top to down ager koi  method to time lag raha he to vo small method ko pahle execute kar dega 
// function add() {
//     setTimeout(function () {
//         let a = 10, b = 20;
//         let sum = a + b;
//         console.log("sum=", sum)
//         twin()
//     }, 2000)
// }
// function twin() {
//     console.log("second result ")
// }
// add()
// --------------------------------------------------------------------------------------------------------------------

