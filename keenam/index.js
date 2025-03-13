let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatorPassword(len) {
  const lowerAlpabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerik = "0123456789";
  const simbol = "!@#$%^&*()-=+_[]{}|;':,./<>?`~";

  const data = lowerAlpabet + upperAlpabet + numerik + simbol;
  let generator = " ";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatorPassword(passwordLength.value);
  password.value = newPassword;
}
function savePassword() {
  document.title = password.value;
  saveButton.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(`Password Saya: ${document.title}`));
  saveButton.setAttribute("download", "FilePasswordSaya.txt");
  setTimeout(() => {
    alert("Password telah disimpan");
  }, 100);
}
