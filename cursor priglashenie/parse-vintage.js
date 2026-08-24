const fs = require('fs');
const h = fs.readFileSync('D:/Vera work/cursor priglashenie/vintage-source.html', 'utf8');

const fonts = [...h.matchAll(/font-family:['"]?([^;'"]+)/g)].map((m) => m[1].trim());
console.log('FONTS:', [...new Set(fonts)]);

const imgs = [...h.matchAll(/data-original='([^']+)'/g)].map((m) => m[1]);
console.log('\nIMAGES:');
[...new Set(imgs)].forEach((u) => console.log(u));

const texts = [...h.matchAll(/>([^<]{8,80})</g)].map((m) => m[1].trim()).filter((t) => /[А-Яа-яA-Za-z]/.test(t));
console.log('\nTEXT SAMPLES:');
[...new Set(texts)].slice(0, 40).forEach((t) => console.log('-', t));
