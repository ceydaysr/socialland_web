
function sayfaAc(kutuId) {
    // 1. Önce sayfadaki tüm içerik kutularını bul
    const tumKutular = document.querySelectorAll('.sayfa-icerigi');

    // 2. Hepsini gizle (aktif sınıfını kaldır)
    tumKutular.forEach(kutu => {
        kutu.classList.remove('aktif');
        kutu.style.display = 'none'; // Garanti olsun diye
    });

    // 3. Sadece istenen kutuyu göster
    const acilacakKutu = document.getElementById(kutuId);
    if (acilacakKutu) {
        acilacakKutu.classList.add('aktif');
        acilacakKutu.style.display = 'block';
    }
}