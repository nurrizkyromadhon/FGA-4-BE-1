-- Query membuat Database
CREATE DATABASE coba3
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Indonesian_Indonesia.1252'
    LC_CTYPE = 'Indonesian_Indonesia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Query membuat Tabel
CREATE TABLE IF NOT EXISTS nasabah (
    id_nasabah SERIAL PRIMARY KEY,
    nama VARCHAR(255),
    alamat VARCHAR(255),
    nomor_telepon VARCHAR(15),
    tanggal_Lahir DATE
);

CREATE TABLE IF NOT EXISTS akun (
    id_akun SERIAL PRIMARY KEY,
    id_nasabah INT NOT NULL,
    jenis_akun VARCHAR(50),
    saldo DECIMAL(10, 2),
    tanggal_dibuka DATE,
    FOREIGN KEY (id_nasabah) REFERENCES nasabah(id_nasabah)
);

CREATE TABLE IF NOT EXISTS transaksi (
    id_transaksi SERIAL PRIMARY KEY,
    id_akun INT NOT NULL,
    tanggal_transaksi DATE,
    jumlah DECIMAL(10, 2),
    jenis_transaksi VARCHAR(50),
    FOREIGN KEY (id_akun) REFERENCES akun(id_akun)
);


-- Query melakukan operasi CRUD
-- Menambahkan Data
INSERT INTO nasabah (nama, alamat, nomor_telepon, tanggal_lahir)
VALUES ('Nur Rizky Romadhon', 'Jl. Barisan Indah', '089684223318', '2000-12-14'),
	('Agusti Rahmad', 'Jl. Pemuda', '089212443876', '2000-10-12'),
	('Riska', 'Jl. Bahagia', '081903216518', '1999-02-04'),
	('Putra', 'Jl. Imam Bonjol', '082065378179', '1998-06-25'),
	('Adit', 'Jl. Melati', '081482935174', '2001-01-17');

INSERT INTO akun (id_nasabah, jenis_akun, saldo, tanggal_dibuka)
VALUES (3, 'Mandiri', 1000000, '2022-12-12'),
	(4, 'BRI', 2000000, '2021-03-20');
	
INSERT INTO transaksi (id_akun, tanggal_transaksi, jumlah, jenis_transaksi)
VALUES (1, '2022-12-25', 100000, 'Tarik Tunai'),
	(2, '2021-06-03', 200000, 'Transfer');


--Menampilkan Data
SELECT * FROM nasabah;
SELECT * FROM akun WHERE id_nasabah = 3;

--Mengupdate Data
UPDATE akun SET saldo = saldo - 50000 WHERE id_akun = 1;

--Menghapus Data
DELETE FROM transaksi WHERE id_transaksi = 1;




