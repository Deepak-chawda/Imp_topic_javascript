// sever se aaye Response ko kese lege our error aane par kya kare ge by call back function
const post = [
    {
        data:"first name deepak"
    },
    {
        data:"second name chawda"
    }
]

const getpost = function (status,callback){
 setTimeout(function () {
     if(status===200)
     {
         callback(undefined,post)
     }else{ 
         console.log("something is wrong",undefined)
     } 
 },2000)  
}
getpost(200,function (err,data) {
    if(err){
        console.log("Err",err)
    }
    else{
        console.log("data",data)
    }  
})