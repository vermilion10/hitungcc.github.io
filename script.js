function hitungCC(){
    const diameter = parseFloat(document.getElementById('diameter').value);
    const langkah = parseFloat(document.getElementById('langkah').value);
    if (isNaN(diameter) || isNaN(langkah) || diameter <= 0 || langkah <= 0){
        document.getElementById('hasil').innerText = "gk bisa diitung osss!";
        return;
    }

    const cc = (0.7854 * diameter * diameter * langkah) / 1000;
    document.getElementById('hasil').innerText = `Kapasitas mesin motormu itu ${cc.toFixed(2)}cc`;
}