// Klassendefinition User
class User {
 constructor(id, name, password, email, birthday, address){
   this.id = id;
   this.name = name;
   this.password = password;
   this.email = email;
   this.birthday = birthday;
   this.address = address;
 }

 getAddress(){
   if(this.address === 'undefined'){
     return "keine Adresse angegeben";
   }
   else{
     return this.address;
   }
 }
}
