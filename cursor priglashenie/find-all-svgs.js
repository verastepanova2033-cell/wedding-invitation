const fs = require('fs');
const h = fs.readFileSync('vintage-source.html', 'utf8');
const recs = [...h.matchAll(/id="(rec\d+)"/g)].map(m => m[1]);
const seen = new Set();
for (const id of recs) {
  const idx = h.indexOf(`id="${id}"`);
  const chunk = h.slice(idx, idx + 30000);
  const svgs = [...chunk.matchAll(/data-original='([^']+\.svg)'/g)].map(m => m[1]);
  const unique = [...new Set(svgs)];
  if (!unique.length) continue;
  const key = unique.join('|');
  if (seen.has(key)) continue;
  seen.add(key);
  console.log('\n===', id, '===');
  unique.forEach(u => console.log(u));
}
