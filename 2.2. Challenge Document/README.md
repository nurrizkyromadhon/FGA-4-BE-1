# Backend Javascript Challenge
## Silver Chapter 2

**NUR RIZKY ROMADHON**
**FGA 4 BACK END ENGINEERING KELAS 1**

**SKILL METRICS**
*(Kemampuan teknis yang akan dipelajari)*
* Programming Algorithm
* Melakukan error handling
* Menerapkan Asynchronous process
* Menerapkan OOP
* Menggunakan Git

**DELIVERY**
*(Hal yang akan dilakukan untuk dapat melewati chapter)*
1. Membuat repositori baru di GitHub dengan nama "Basic-Banking-System"
2. Salin file bank_account.js Challenge 1 ke direktori proyek di repositori baru
3. Membuat file JavaScript baru dengan nama banking_system.js
4. Implementasikan kelas BankAccount dengan metode deposit() dan withdraw()
5. Gunakan setTimeout() untuk mensimulasikan operasi transaksi yang asynchronous
6. Commit dan push perubahan ke repositori GitHub

**CRITERIA**
*(Kriteria pengumpulan challenge yang harus kamu penuhi untuk dapat melewati chapter)*
1. Menggunakan modular class OOP (40 points)
2. Mengurai proses berpikir dengan menggunakan flowchart (30 points)
3. Menggunakan GitHub untuk mengelola repository (30 points)


**Studi Kasus**
Dalam studi kasus ini, kita akan membuat sebuah Basic Banking System sederhana menggunakan konsep Pemrograman Berorientasi Objek (OOP) dan mensimulasikan operasi transaksi yang asynchronous.


**Pseudocode**
Kelas BankAccount:
  Data angka_saldo

  Fungsi **init**(self, saldo_awal):
    Set angka_saldo = saldo_awal

  Fungsi deposit(self, jumlah):
    Jalankan fungsi setTimeout() dengan waktu tunda 1000 ms:
      - Tambahkan jumlah ke angka_saldo
      - Cetak "Deposit sebesar {jumlah} berhasil. Saldo saat ini: {angka_saldo}"

  Fungsi withdraw(self, jumlah):
    Jika jumlah > angka_saldo, maka:
      Cetak "Penarikan gagal. Saldo tidak mencukupi."
    Lainnya:
      Jalankan fungsi setTimeout() dengan waktu tunda 1000 ms:
        - Kurangkan jumlah dari angka_saldo
        - Cetak "Penarikan sebesar {jumlah} berhasil. Saldo saat ini: {angka_saldo}"
