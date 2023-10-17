/*class Toyota {
    constructor(jenisMesin, roda, codeRakitan, tonase){
        this.jenisMesin = jenisMesin;
        this.roda = roda;
        this.codeRakitan = codeRakitan;
        this.tonase = tonase;
    }
}
const toyota = new Toyota('bensin', 4, 'ckd', '1 ton');
console.log(toyota);*/

class Sekolah {
  // Static property
  static namaSekolah = "SMA Negeri 1 Surabaya";

  constructor(siswa) {
    // Instance property
    this.siswa = siswa;
  }

  namaSiswa() {
    // Instance method
    return `Nama Siswa : ${this.siswa}`;
  }

  static adiwiyata() {
    // Static method
    return `Ini Sekolah Adiwiyata`;
  }
}

// Membuat objek dari kelas MyClass
const siswa1 = new Sekolah("Nur");
const siswa2 = new Sekolah("Rizky");

// Mengakses instance property dan method
console.log(siswa1.siswa); 
console.log(siswa1.namaSiswa());

// Mengakses static property dan method melalui kelas itu sendiri
console.log(Sekolah.namaSekolah);
console.log(Sekolah.adiwiyata());
