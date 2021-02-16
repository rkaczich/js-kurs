class UserService {

  static init(){
    // load user data from spource
    var user = UserService.createUser(1, "Herbert", "xxxxx", "herbert@irgendwas.de", "01.01.1900");
    // create presentation of user
    UserService.displayUser(user);

    UserService.createTableHeader(user);
  }

  static createUser(id, name, password, email, birthday){
    var user = new User(id, name, password, email, birthday);
    return user;
  }

  static createTableHeader(user){
    var columnNames = Object.keys(user);
    var result = "";
    for (var i = 0; i < columnNames.length; i++) {
      var columnName = "<th>" + columnNames[i] + "</th>";
      result = result + columnName;
    }

    document.getElementById("header").innerHTML = result;
  }

  static displayUser(user){

    var columnValueArray = Object.values(user);
    var result = "<tr>";
    for (var i = 0; i < columnValueArray.length; i++) {
      var columnValue = "<td>" + columnValueArray[i] + "</td>";
      result = result + columnValue;
    }

    document.getElementById("content").innerHTML = result + "</tr>";
  }

  static changePassword(oldPassword, newPassword, repeatedNewPassword){
    return "passwordChanged";
  }
}
