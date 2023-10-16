
// OBEZİTE
function bke() {
    // Formdaki değerleri almak için: yukarıdaki kodları kopyalayıp değiştirdim ama 
    // umarım sorun olmaz çünkü aklımdan yazamadım.

    var boy = parseFloat(document.getElementById('boy').value);
    var kilo = parseFloat(document.getElementById('kilo').value);
    var yas = parseFloat(document.getElementById('yas').value);
    var cinsiyet = document.getElementById('cinsiyet').value;

    // BKE hesaplayalım
    var bke = kilo / (boy*boy);

    // Yaşa göre BKE'yi ayarlalım
    bke = bke * 1.01*(yas / 10);

    // Cinsiyete göre BKE'yi ayarlalım
    if (cinsiyet == 'kadin') { bke * 0.9;} 
    
    else if (cinsiyet == 'erkek') 
    {bke * 1.1;}


    // Sonucu hesaplayıp ekranda göstermek için

    var sonuc = '';

    if (bke < 18.5) 
    {sonuc = 'Zayıf'; } 
        
    else if (bke >= 18.5 && bke < 24.9) 
    {sonuc = 'Normal'; } 
    
    else if (bke >= 25 && bke < 29.9) 
    {sonuc = 'Kilolu';} 
    
    else { sonuc = 'Obez';}

    document.getElementById('bkeSonuc').textContent = 'BKE: '+ sonuc;
}








// 