class BankAccount {
    constructor(balance = 0) {
        if (this.constructor === BankAccount) {
            throw new Error("Cannot instantiate form Abstract Class")
        }
        this.balance = balance;
        this.nama = "Nur Rizky Romadhon"
        this.bank = "Mandiri"
        this.alamat = "Jl. Gadukan Timur no. 320"
        this.waktu = new Date();
    }

    _account(){
        alert("Pemilik Bank : "+this.nama+"\nBank :"+ this.bank +"\nAlamat : "+this.alamat);
    }    
}
class Transaksi extends BankAccount {
    constructor(){
        super();
    }
    akun(){
        super._account()
    }
    deposit() {
        try {
            const saldoDeposit = parseFloat(prompt("Saldo saat ini: " + this.balance+ "\nMasukkan jumlah deposit yang akan ditambahkan:"));
            // Simulasi operasi transaksi asynchronous dengan setTimeout
            setTimeout(() => {
                if (isNaN(saldoDeposit) || saldoDeposit < 0 || saldoDeposit == 0) {        
                    alert("Masukkan jumlah yang valid.");
                    console.log('Jumlah deposit harus lebih dari 0.');
                } else {        
                    this.balance += saldoDeposit;
                    console.log(`Deposit ${saldoDeposit} berhasil. Saldo saat ini: ${this.balance}`);
                }            
                document.getElementById("saldo").innerHTML = this.balance;
            }, 2000); // Menggunakan timeout 1 detik untuk simulasi
        } catch (error) {
            console.log(error);
        }
        
    }

    withdraw() {
        try {
            const saldoWithdraw = parseFloat(prompt("Saldo saat ini: " + this.balance+ "\nMasukkan jumlah Saldo yang akan diambil:"));
            // Simulasi operasi transaksi asynchronous dengan setTimeout
            setTimeout(() => {
                if (isNaN(saldoWithdraw) || saldoWithdraw<0 || saldoWithdraw == 0) {
                    alert("Masukkan jumlah yang valid.");
                    console.log('Jumlah deposit harus valid');
                } else {
                    if (saldoWithdraw <= this.balance) {
                        this.balance -= saldoWithdraw;
                        alert("Saldo berhasil dikurangi. Saldo saat ini: " + this.balance);
                    } else {
                        alert("Saldo tidak mencukupi.");
                    }        
                }
                document.getElementById("saldo").innerHTML = this.balance;
            }, 1000); // Menggunakan timeout 1 detik untuk simulasi
        } catch (error) {
            console.log(error);
        }
        
    }
}

// Membuat objek BankAccount
const account = new Transaksi();

// Simulasi deposit dan withdrawal asynchronous
document.getElementById("deposit").addEventListener("click", function() {
 account.deposit();
 });
 document.getElementById("withdraw").addEventListener("click", function() {
 account.withdraw();
 });
 document.getElementById("account").addEventListener("click", function() {
 account.akun();
 });
document.getElementById("saldo").innerHTML = account.balance;