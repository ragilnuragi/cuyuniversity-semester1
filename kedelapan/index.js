// const mahasiswa = [
//   {
//     nama: "ragil nurfadillah",
//     alamat: "jl. kuningan",
//     usia: 20,
//     semester: 3,
//   },
//   {
//     nama: "Dadang",
//     alamat: "jl. jakarta",
//     usia: 20,
//     semester: 2,
//   },
// ];

// function getDetailData() {
//   //   mahasiswa.map(function (result, i) {
//   //     console.table(result);
//   //   });
//   mahasiswa.forEach((result) => {
//     console.table(result);
//   });
//   //   console.log(`data yang ada cari ${mahasiswa}`);
// }

class Hewan {
  warna;
  keahlian;
  constructor(nama) {
    this.nama = nama;
  }
  set newColor(color) {
    this.warna = color;
  }
  set newSkill(skill) {
    this.keahlian = skill;
  }
  get detail() {
    return `hai saya ${this.nama}, berwarna ${this.warna}, dan keahlian ${this.keahlian}`;
  }
}

const kucing = new Hewan("jojo");
kucing.newColor = "red";
kucing.newSkill = "loncat";
console.log(kucing.detail);
