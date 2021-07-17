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
class job extends emplyee{
    constructor(givenName , givenAge,givenlanguage,givenjobroll){
    super(givenName , givenAge)
    this.language=givenlanguage;
    this.jobroll= givenjobroll;
    } 

}
let bit = new job ("ronak",10,"python","coder")
console.log(bit)