class Address{

  constructor(street, postCode, city){
    this.street = street;
    this.postCode = postCode;
    this.city = city;
  }

  // auf Werte lesend zugreifen

  // werte setzen

  // status des objectes zurückgeben
  showAddress(){
    return this.street + " " + this.postCode + " " + this.city;
  }

}
