const nama = "ragil nurfadillah";
let usia = 13;

let biodata = document.getElementById("biodata");
console.log(biodata);

function generateBiodata() {
  let golongan;

  if (usia > 13 && usia <= 22) {
    //ini adalah kondisi pertama
    golongan = "remaja";
  } else if (usia > 22 && usia <= 30) {
    //ini adalah kondisi kedua
    golongan = "dewasa";
  } else if (usia > 30) {
    golongan = "tua";
  } else if (usia > 2 && usia <= 13) {
    golongan = "anak-anak";
  } else {
    // jika kondisi pertama tidak ada
    golongan = "bayi";
  }
  return (biodata.innerHTML = golongan);
}

console.log(nama);
console.log(usia);

generateBiodata();
