const fs = require('fs');
const h = fs.readFileSync('vintage-source.html', 'utf8');
const blocks = [
  'rec2013195291', 'rec2013942971', 'rec2014173551', 'rec2014507321',
  'rec2015174301', 'rec2014665671', 'rec2013547801'
];
for (const id of blocks) {
  const idx = h.indexOf(`id="${id}"`);
  if (idx < 0) { console.log('MISSING', id); continue; }
  const chunk = h.slice(idx, idx + 35000);
  const imgs = [...new Set([...chunk.matchAll(/(?:data-original|src)='([^']+)'/g)].map(m => m[1]))];
  const texts = [...chunk.matchAll(/class='tn-atom'[^>]*>([^<]{2,80})</g)].map(m => m[1].trim()).filter(Boolean);
  const bg = (chunk.match(/background-color:([^;}"']+)/) || [])[1];
  console.log('\n===', id, bg ? `bg:${bg}` : '', '===');
  imgs.filter(u => /\.(svg|png|jpg)/i.test(u)).slice(0, 12).forEach(u => console.log(' ', u.split('/').pop(), '->', u));
  texts.slice(0, 8).forEach(t => console.log(' TXT:', t));
}
