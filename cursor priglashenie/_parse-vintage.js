const fs = require('fs');
const h = fs.readFileSync('vintage-source.html', 'utf8');
for (const id of ['rec2014173551', 'rec2015139671']) {
  const i = h.indexOf(id);
  const chunk = h.slice(i, i + 25000);
  console.log('\n===', id, '===');
  console.log('bg:', [...chunk.matchAll(/background-color:([^;}"']+)/g)].map(m => m[1]).slice(0,3));
  const imgs = [...chunk.matchAll(/static\.tildacdn\.com\/[a-zA-Z0-9_\-./]+/g)].map(m => m[0]);
  console.log([...new Set(imgs)].join('\n'));
}
