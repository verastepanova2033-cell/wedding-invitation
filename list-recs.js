const fs = require('fs');
const h = fs.readFileSync('vintage-source.html', 'utf8');
const recs = [...h.matchAll(/id="(rec\d+)"/g)].map((m) => m[1]);
for (const id of recs) {
  const idx = h.indexOf(`id="${id}"`);
  const chunk = h.slice(idx, idx + 5000);
  const bg = (chunk.match(/background-color:([^;}"']+)/) || [])[1] || '';
  const hval = (chunk.match(/height:(\d+)px/) || [])[1] || '';
  const svgs = [...chunk.matchAll(/data-original='([^']+\.svg)'/g)].map((m) => m[1].split('/').pop());
  const texts = [...chunk.matchAll(/class='tn-atom'[^>]*>([^<]{3,60})</g)].map((m) => m[1].trim());
  if (svgs.length || texts.length) {
    console.log(id, `h=${hval}`, bg, svgs.join(','), texts[0] || '');
  }
}
