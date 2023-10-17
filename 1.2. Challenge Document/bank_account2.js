let saldo = 0; // Nilai awal saldo
const menu = true;

function tambahSaldo() {
    const tambahSaldoBank = parseFloat(prompt("Saldo saat ini: " + saldo+ "\nMasukkan jumlah saldo yang akan ditambahkan:"));
    if (isNaN(tambahSaldoBank) || tambahSaldoBank<0 || tambahSaldoBank == 0) {        
        alert("Masukkan jumlah yang valid.");
    } else {        
        saldo += tambahSaldoBank;
        alert("Saldo berhasil ditambahkan. \nSaldo saat ini: " + saldo);
    }
    console.log("Saldo saat ini: " + saldo);
    document.getElementById("saldo").innerHTML = saldo;
}

function kurangiSaldo() {
    const kurangSaldoBank = parseFloat(prompt("Saldo saat ini: " + saldo+ "\nMasukkan jumlah saldo yang akan dikurangi:"));
    if (isNaN(kurangSaldoBank) || kurangSaldoBank<0 || kurangSaldoBank == 0) {
        alert("Masukkan jumlah yang valid.");
    } else {
        if (kurangSaldoBank <= saldo) {
            saldo -= kurangSaldoBank;
            alert("Saldo berhasil dikurangi. Saldo saat ini: " + saldo);
        } else {
            alert("Saldo tidak mencukupi.");
        }        
    }
    console.log("Saldo saat ini: " + saldo);
    document.getElementById("saldo").innerHTML = saldo;
}
function cekSaldo() {
    alert("Saldo saat ini: " + saldo);
    console.log("Saldo saat ini: " + saldo);
    document.getElementById("saldo").innerHTML = saldo;
}




