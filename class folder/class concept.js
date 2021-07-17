//  class is a blue print of object  to use code easy and reuse
class emplyee {
    constructor(givenName , givenAge)
    {
       this.name = givenName;
       this.age = givenAge;
    }
 ageCheck() {
     if(this.age>=15)
     {
         return "age is above 15"
     }else{
         return "age is below 15"
     }    
   }
// also make static function use kar sakte he
static kd(){
    console.log("this is staic function")
}
}
// we can make maltiple emplyee and use it
let first =new emplyee("deepak",18)
let second = new emplyee("jay" ,20)
emplyee.kd()
console.log(second)
console.log(first.ageCheck())
// ________________________________________________________________________
 