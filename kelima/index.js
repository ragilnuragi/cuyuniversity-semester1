const http = require("http");
const rupiah = require("rupiah-format");
const host = "127.0.0.1";
const port = 3002;

// request = data masuk dari luar
// response = data keluar dari dalam
const server = http.createServer(function (require, response) {
  const nama = "ragilnurfadillah";
  let uang = 500000;
  let jajan = 200000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);

  const hasil = `
  <head>
    <title>Hasil Belanja</title>
  </head>
  <body>
    <h1 style='background-color: red; padding: 20px; text-align: center; color: white'>Coba coba</h1>
    <p>nama saya ${nama}, saya bawa sebesar ${uang}, kemudian jajan ${jajan}. sisa uang saya ${sisa}.</p>
  </body>`;
  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, "", function () {
  console.log(`server menyala di ${host}:${port}`);
});
