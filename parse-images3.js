const fs = require('fs');
const h = fs.readFileSync('vintage-source.html', 'utf8');

function parseImages(recId) {
  const idx = h.indexOf(`id="${recId}"`);
  const end = h.indexOf('t396_init', idx);
  const chunk = h.slice(idx, end > 0 ? end : idx + 150000);
  const elems = [...chunk.matchAll(
    /data-elem-type='image'[\s\S]*?data-field-width-value="(\d+)"[\s\S]*?data-field-height-value="(\d+)"[\s\S]*?(?:data-original|src)='([^']+)'/g
  )];
  console.log('\n===', recId, '===');
  elems.forEach((m) => console.log(`${m[1]}x${m[2]}`, m[3]));
}

['rec2013195291', 'rec2013942971', 'rec2014173551', 'rec2014507321'].forEach(parseImages);
