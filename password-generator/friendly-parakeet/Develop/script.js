document.getElementById("generate").addEventListener("click", handleClick);

function handleClick() {
  temp = "";
  password = "";

  len = prompt("How long will your password be?(8-128)");
  if (len < 8) {
    alert("Password is too short.");
    return handleClick();
  };
  if (len > 128) {
    alert("Password is too long.");
    return handleClick();
  };
  if (isNaN(len)) {
    alert("Please only use numbers.");
    return handleClick();
  };

  var low = confirm("Would you like lowercase letters in your password?");
  if (low) temp += "abcdefghijklmnopqrstuvwxyz";

  var upper = confirm("Would you like upper case letters in your password?");
  if (upper) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var special = confirm("Would you like special characters in your password?");
  if (special) temp += "!@#$%&*(+=";

  var numbers = confirm("Would you like numbers in your password?");
  if (numbers) temp += "0123456789";



  for (let i = 0; i < len; i++) password += temp[Math.floor(Math.random() * temp.length)];
  document.getElementById("password").innerHTML = password;
  console.log(temp);
}
