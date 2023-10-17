# Backend Javascript Challenge
## Silver Chapter 3

**NUR RIZKY ROMADHON**
Github : <https://github.com/nurrizkyromadhon/FGA-4-BE-1>
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

Table nasabah {
  id integer [primary key]
  nama varchar
  alamat varchar
  kota varchar  
  nomor_telepon varchar
  tanggal_lahir DATE
  jenis_kelamin varchar
  created_at timestamp
  update_at timestamp
}

Table akun {
  id integer [primary key]
  id_nasabah integer
  jenis_akun varchar
  saldo integer
  tanggal_dibuka DATE
  created_at timestamp
  update_at timestamp  
}

Table transaksi {
  id integer [primary key]
  id_akun integer
  tanggal_transaksi DATE
  nilai_transaksi integer
  jenis_transaksi varchar  
}

Ref: nasabah.id < akun.id_nasabah

Ref: akun.id < transaksi.id_akun




