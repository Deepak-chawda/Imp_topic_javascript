// server se aaye response and error ko kese lena he our use show kese karna he esliye hi ham promise 
// use karte he esse code easy ho jata he 
const post =[
    {
        data:"first name "
    },
    {
        data:"second name"
    }
];
const getpost = (status)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function () { 
            if(status===200)
            {
                resolve(post)
            }else{
                reject("invalid post api ")
            }
        },2000)
    })
}
getpost(200).then((data)=>{
    console.log("data",data)
}).catch((err)=>{
    console.log("err",err);
})