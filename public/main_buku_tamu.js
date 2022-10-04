// run `node index.js` in the terminal

console.info("Buku Tamu");

// membuat function buku tamu
const bukuTamu = ()=> {

  // menangkap element tbody
  let tbody = document.getElementById("tbody");

  // menginput buku tamu
  let namaLengkap = prompt("Masukkan Nama Lengkap : ");
  let domisili = prompt("Masukkan Domisili :  ");
  let keterangan = prompt("Masukkan Keterangan : ");

  // output di console
  // console.log(namaLengkap, domisili, keterangan);

  // menambahkan nomor dari tbody
  let nambahNomor = tbody.childElementCount;

  tbody.innerHTML += `
  <tr>
    <td>${nambahNomor +1}</td>
    <td>${namaLengkap}</td>
    <td>${domisili}</td>
    <td style="text-align: center">${keterangan}</td>
  </tr>
  
  `

}
