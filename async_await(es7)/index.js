// this is data come from server
 const data = {
     title:"first",
     title1:"second"
 }
//  this is a promise concept
let getData = (status) =>{
    return new Promise((resolve,reject)=>{
  if (status == 200) {
    resolve(data)
  } else {
    reject("invalid status code")
  }
})
}
// simple funtion with async/ await practice
async function md() {
  try {
    let res = await getData(200);
    console.log("response =", res);
  } catch (error) {
    console.log("error=", error);
  };
};
console.log("hello!")
md();

