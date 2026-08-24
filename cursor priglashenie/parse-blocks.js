const fs = require('fs');
const h = fs.readFileSync('D:/Vera work/cursor priglashenie/vintage-source.html', 'utf8');
const blocks = ['rec2013220411', 'rec2013942971', 'rec2014318861', 'rec2014507321'];
for (const id of blocks) {
  const idx = h.indexOf(`id="${id}"`);
  const chunk = h.slice(idx, idx + 25000);
  const imgs = [...chunk.matchAll(/data-original='([^']+)'/g)].map((m) => m[1]);
  const texts = [...chunk.matchAll(/class='tn-atom'[^>]*>([^<]+)</g)].map((m) => m[1].trim()).filter(Boolean);
  console.log('\n===', id, '===');
  [...new Set(imgs)].forEach((u) => console.log('IMG', u));
  texts.slice(0, 15).forEach((t) => console.log('TXT', t));
}
