class Bank{
    constructor(){
        this.saldo = 0;
    }
    tambahSaldo(){
        const tambahSaldoBank = parseFloat(prompt("Saldo saat ini: " + this.saldo+ "\nMasukkan jumlah saldo yang akan ditambahkan:"));
        if (isNaN(tambahSaldoBank) || tambahSaldoBank < 0 || tambahSaldoBank == 0) {        
            alert("Masukkan jumlah yang valid.");
        } else {        
            this.saldo += tambahSaldoBank;
            alert("Saldo berhasil ditambahkan. \nSaldo saat ini: " + this.saldo);
        }
        console.log("Saldo saat ini: " + this.saldo);
        document.getElementById("saldo").innerHTML = this.saldo;
    }
    kurangiSaldo(){
        const kurangSaldoBank = parseFloat(prompt("Saldo saat ini: " + this.saldo+ "\nMasukkan jumlah saldo yang akan dikurangi:"));
        if (isNaN(kurangSaldoBank) || kurangSaldoBank<0 || kurangSaldoBank == 0) {
            alert("Masukkan jumlah yang valid.");
        } else {
            if (kurangSaldoBank <= this.saldo) {
                this.saldo -= kurangSaldoBank;
                alert("Saldo berhasil dikurangi. Saldo saat ini: " + this.saldo);
            } else {
                alert("Saldo tidak mencukupi.");
            }        
        }
        console.log("Saldo saat ini: " + this.saldo);
        document.getElementById("saldo").innerHTML = this.saldo;
    }
    cekSaldo(){
        alert("Saldo saat ini: " + this.saldo);
        console.log("Saldo saat ini: " + this.saldo);
        document.getElementById("saldo").innerHTML = this.saldo;
    }
}
const bank1 = new Bank();
document.getElementById("tambah").addEventListener("click", function() {
 bank1.tambahSaldo();
 });
 document.getElementById("kurang").addEventListener("click", function() {
 bank1.kurangiSaldo();
 });
 document.getElementById("cek").addEventListener("click", function() {
 bank1.cekSaldo();
 });
 document.getElementById("saldo").innerHTML = bank1.saldo;




