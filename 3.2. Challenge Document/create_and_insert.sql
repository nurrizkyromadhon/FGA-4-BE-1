-- Query membuat Database menggunakan DDL
CREATE DATABASE create_and_insert;

-- Query membuat Tabel menggunakan DDL
CREATE TABLE IF NOT EXISTS nasabah (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(255),
    alamat VARCHAR(255),
    kota VARCHAR(255),
    nomor_telepon VARCHAR(15),
    tanggal_Lahir DATE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    update_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS akun (
    id SERIAL PRIMARY KEY,
    id_nasabah INT NOT NULL,
    jenis_akun VARCHAR(50),
    saldo BIGINT,
    tanggal_dibuka DATE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    update_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (id_nasabah) REFERENCES nasabah(id)
);

CREATE TABLE IF NOT EXISTS transaksi (
    id SERIAL PRIMARY KEY,
    id_akun INT NOT NULL,
    tanggal_transaksi DATE,
    nilai_transaksi BIGINT,
    jenis_transaksi VARCHAR(50),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    update_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (id_akun) REFERENCES akun(id)
);


-- Query Enum
CREATE TYPE jenis_kelamin_rule AS ENUM ('Laki-laki', 'Wanita');


-- Query ALTER
ALTER TABLE nasabah
ADD jenis_kelamin jenis_kelamin_rule;

ALTER TABLE akun
ALTER COLUMN jenis_akun TYPE VARCHAR(40);

ALTER TABLE transaksi 
ALTER COLUMN nilai_transaksi SET NOT NULL;


-- Query melakukan operasi CRUD
-- Menambahkan Data
INSERT INTO nasabah (nama, alamat, kota, nomor_telepon, tanggal_lahir, jenis_kelamin)
VALUES ('Nur Rizky Romadhon', 'Jl. Barisan Indah', 'Surabaya', '089684223318', '2000-12-14','Laki-laki'),
	('Agusti Rahmad', 'Jl. Pemuda', 'Malang', '089212443876', '2000-10-12','Laki-laki'),
	('Riska', 'Jl. Bahagia', 'Sidoardjo', '081903216518', '1999-02-04','Wanita'),
	('Putri', 'Jl. Imam Bonjol', 'Gresik', '082065378179', '1998-06-25','Wanita'),
	('Adit', 'Jl. Melati', 'Surabaya', '081482935174', '2001-01-17','Laki-laki');

INSERT INTO akun (id_nasabah, jenis_akun, saldo, tanggal_dibuka)
VALUES (1, 'Giro', 1000000, '2022-12-12'),
	(4, 'Tabungan', 2000000, '2021-03-20'),
    (3, 'Tabungan', 7500000, '2021-03-20'),
    (2, 'Deposito', 12000000, '2021-10-16'),
    (4, 'Deposito', 6000000, '2023-04-18'),
    (1, 'Tabungan', 500000, '2022-02-02'),
    (3, 'Giro', 25000000, '2023-01-26');
	
INSERT INTO transaksi (id_akun, tanggal_transaksi, nilai_transaksi, jenis_transaksi)
VALUES (2, '2022-12-25', 100000, 'Setoran Modal'),
	(2, '2022-06-03', 200000, 'Pengambilan Pribadi'),
    (3, '2022-02-20', 50000, 'Pembelian Alat Dapur'),
    (6, '2022-07-12', 400000, 'Pembelian Peralatan'),
    (3, '2023-05-01', 100000, 'Pembelian Tiket');

SELECT * FROM nasabah;
SELECT * FROM akun;
SELECT * FROM transaksi;


-- Query Stored Procedure
create or replace procedure transfer(
   id_akun int,
   tanggal_transaksi DATE,
   nilai_transaksi int, 
   jenis_transaksi VARCHAR
)
language plpgsql    
as $$
begin
    -- pengurangan saldo akun
    update akun 
    set saldo = saldo - nilai_transaksi 
    where id = id_akun;

    -- menambahkan transaksi
    INSERT INTO transaksi (id_akun, tanggal_transaksi, nilai_transaksi, jenis_transaksi)
    VALUES (id_akun, tanggal_transaksi, nilai_transaksi, jenis_transaksi);

    commit;
end;$$
call transfer(6,'2023-08-17',50000,'Pembayaran Ethol');
SELECT * FROM akun;
SELECT * FROM transaksi;


-- Query Common Table Expression (CTE)
WITH tabungan_akun AS  (
    SELECT jenis_akun, saldo
    FROM akun
	WHERE jenis_akun ='Tabungan'
)
SELECT jenis_akun, saldo FROM tabungan_akun;


-- Query Index
CREATE INDEX idx_nasabah_kota ON "nasabah"(kota);
SELECT * FROM "nasabah" WHERE kota = 'Surabaya';


-- Query CRUD
--Menampilkan Data
SELECT n.nama,n.alamat,a.jenis_akun, a.saldo FROM akun a
INNER JOIN nasabah n
ON a.id_nasabah = n.id;

SELECT * FROM nasabah ORDER BY nama DESC LIMIT 3;
SELECT * FROM akun WHERE id_nasabah = 1;
SELECT sum(nilai_transaksi) AS TOTAL_TRANSAKSI FROM transaksi;


--Mengupdate Data
UPDATE nasabah SET nama = 'Adit Purnama' WHERE nama = 'Adit';
UPDATE akun SET saldo = saldo - 50000 WHERE id = 1;
UPDATE transaksi SET nilai_transaksi = 70000 WHERE jenis_transaksi = 'Pembelian Tiket';


--Menghapus Data
DELETE FROM nasabah WHERE id = 5;
DELETE FROM akun WHERE id = 7 AND jenis_akun = 'Giro';
DELETE FROM transaksi WHERE jenis_transaksi = 'Pembelian Peralatan';




