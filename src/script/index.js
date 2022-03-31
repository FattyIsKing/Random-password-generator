const password = document.getElementById("password");
const number = document.getElementById("number");

function genPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number.value == ""){
        var passwordLength = 12;
    }
    else{
        var passwordLength = parseInt(number.value);
    }
    var password = "";
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;
 }

 
function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}