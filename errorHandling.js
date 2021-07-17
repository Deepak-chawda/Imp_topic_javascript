//suppoce this data come from server site
const ping = [
    {
        first:"data"
    }
    ,{
        second:"data"
    }
]
const handing =(status)=>{
    // status=300;
    setTimeout(()=>{
        if (status===200)
        {
            console.log("respose ok ",ping)
        }
        else{
            console.log("errer somethig is wrong")
        }
    },2000)
    console.log("check for flow")
}
handing(200)

