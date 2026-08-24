const fs = require('fs');
const h = fs.readFileSync('D:/Vera work/cursor priglashenie/vintage-source.html', 'utf8');
const idx = h.indexOf('id="rec2013220411"');
const chunk = h.slice(idx, idx + 50000);
const imgs = [...chunk.matchAll(/data-original='([^']+)'/g)].map(m=>m[1]);
[...new Set(imgs)].forEach(u=>console.log('IMG',u));
[...chunk.matchAll(/class='tn-atom'[^>]*>([^<]{3,})</g)].forEach(m=>console.log('TXT',m[1].trim()));
// font styles
[...chunk.matchAll(/font-family:([^;]+);/g)].slice(0,20).forEach(m=>console.log('FONT',m[1]));
