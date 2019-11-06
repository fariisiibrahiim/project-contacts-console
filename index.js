const namaKontak = ["Alpha Avalon", "Betty Brave", "Gamma Garucio"];

const showNama = namaKontak => {
  //loop di array nama kontak
  for (let i = 0; i < namaKontak.length; i++) {
    const nama = namaKontak[i];

    console.log(`[${i + 1}] ${nama}`);
  }
};

//showNama(namaKontak);

const filterNama = (namaKontak, minimumLength) => {
  let namaBaru = [];

  for (let i = 0; i < namaKontak.length; i++) {
    const nama = namaKontak[i];
    //men filter nama berdasarkan panjangnya
    if (nama.length >= minimumLength) {
      namaBaru.push(nama);
    }
  }
  //return value baru
  return namaBaru;
};

//filteredNama and filterNama are different
const filteredNames = filterNama(namaKontak, 13);

showNama(filteredNames);
