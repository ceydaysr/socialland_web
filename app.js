const express = require('express');
const path = require('path');

const app= express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

//express.static gelen isteğin static yani benim public dosyamda var mı yok mu bakar
//eğer dosya varsa statikleri direkt taracıya sağlıyor. Böylece her staatic file için farklı routing yazmamış oluyorum.
// yani app use express staticten gelen istekleri belirli ara yazılımla uygulamamı sağlıyor

// Anasayfa Rotası
app.get('/', (req, res) => {
    res.render('app');
});

app.get('/suggestions', (req, res) => {  //butona tıklayınca adrese /suggestions ekleniyo 
    res.render('suggestions'); // views/suggestions.ejs 'yi ekrana vericem insallah 
});

app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor: http://localhost:3000');
});