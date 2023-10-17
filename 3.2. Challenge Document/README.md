# Backend Javascript Challenge
## Silver Chapter 3

**NUR RIZKY ROMADHON**
**FGA 4 BACK END ENGINEERING KELAS 1**

**SKILL METRICS**
*(Kemampuan teknis yang akan dipelajari)*
* Database
* DBMS (Database Management System)
* Query Language
* Database Indexing and Query Optimization
* RDBMS

**DELIVERY**
*(Hal yang akan dilakukan untuk dapat melewati chapter)*
1. Analisa struktur data pada challenge 2
2. Rancang Entity Relationship Diagram (ERD) sederhana yang mencakup tabel-tabel yang diperlukan
3. Buat file SQL dengan nama create_and_insert.sql
4. Tulis perintah SQL untuk membuat tabel-tabel sesuai dengan ERD yang Anda rancang
5. Isi file SQL dengan perintah SQL untuk mengisi beberapa data awal ke dalam tabel-tabel

**CRITERIA**
*(Kriteria pengumpulan challenge yang harus kamu penuhi untuk dapat melewati chapter)*
1. Mampu merancang dan membuat ERD (40 points)
2. Membuat Database & tabel menggunakan DDL (30 points)
3. Melakukan operasi CRUD dengan DML (30 points)


**Studi Kasus**
Sebuah bank ingin membuat sistem untuk melacak informasi nasabah, akun, dan transaksi mereka. Mereka ingin kamu merancang database yang sesuai dengan kebutuhan mereka.
*Entitas:*
* Nasabah
* Akun
* Transaksi
*Relasi:*
* Satu Nasabah dapat memiliki beberapa Akun, tetapi setiap Akun hanya dimiliki oleh satu Nasabah
* Satu Akun dapat memiliki banyak Transaksi, tetapi setiap Transaksi hanya terkait dengan satu Akun.

**Membuat ERD**
// Use DBML to define your database structure
// Docs: <https://dbml.dbdiagram.io/docs>

Table Nasabah {
  ID_Nasabah integer [primary key]
  Alamat varchar
  Nomor_Telepon varchar
  Tanggal_Lahir DATE
}

Table Akun {
  ID_Akun integer [primary key]
  ID_Nasabah integer
  Jenis_Akun varchar
  Saldo integer
  Tanggal_Dibuka DATE  
}

Table Transaksi {
  ID_Transaksi integer [primary key]
  ID_Akun integer
  Tanggal_Transaksi DATE
  Jumlah integer
  Jenis_Transaksi varchar  
}

Ref: Nasabah.ID_Nasabah < Akun.ID_Nasabah

Ref: Akun.ID_Akun < Transaksi.ID_Akun




