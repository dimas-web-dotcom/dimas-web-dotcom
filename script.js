alert('Selamat datang, nikmati permainan ini');
alert('Komputer akan otomatis memilih pilihannya, silahkan pilih pilihan anda juga');

function pilihanComp () {
    const comp = Math.round((Math.random() * 10));
    if (comp <= 3) return 'batu';
    if (comp > 3 && comp <= 6) return 'gunting'; 
    return 'kertas';
}

function result (computer, player){

    if (player == computer) return 'SERI';
    if (player == 'batu') return (computer == 'gunting') ? 'MENANG' : 'KALAH';
    if (player == 'gunting') return (computer == 'kertas') ?
    'MENANG' : 'KALAH';
    if (player == 'kertas') return (computer == 'batu') ? 
    'MENANG' : 'KALAH';
    
} 

const pBatu = document.getElementById('batu');
const pGunting = document.getElementById('gunting');
const pKertas = document.getElementById('kertas');
const computer = document.getElementById('computer');
const nilaiAkhir = document.getElementById('hasil');

pBatu.addEventListener('click', function(){
    const pComp = pilihanComp();
    const pPlayer = pBatu.className;
    const hasil = result(pComp, pPlayer);
    computer.innerHTML = pComp;
    nilaiAkhir.innerHTML = hasil;
});

pGunting.addEventListener('click', function(){
    const pComp = pilihanComp();
    const pPlayer = pGunting.className;
    const hasil = result(pComp, pPlayer);
    computer.innerHTML = pComp;
    nilaiAkhir.innerHTML = hasil;
});

pKertas.addEventListener('click', function(){
    const pComp = pilihanComp();
    const pPlayer = pKertas.className;
    const hasil = result(pComp, pPlayer);
    computer.innerHTML = pComp;
    nilaiAkhir.innerHTML = hasil;
});