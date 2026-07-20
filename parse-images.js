const fs = require('fs');
const h = fs.readFileSync('vintage-source.html', 'utf8');

function parseBlock(id) {
  const idx = h.indexOf(`id="${id}"`);
  const chunk = h.slice(idx, idx + 120000);
  const elems = [...chunk.matchAll(/tn-elem__\d+[^>]*data-field-width-value="(\d+)"[^>]*data-field-height-value="(\d+)"[^>]*>[\s\S]*?(?:data-original|src)='([^']+)'/g)];
  console.log('\n===', id, 'large images ===');
  elems
    .filter((m) => +m[1] > 150 || +m[2] > 80)
    .slice(0, 20)
    .forEach((m) => console.log(m[1] + 'x' + m[2], m[3].split('/').pop()));
}

['rec2013942971', 'rec2014507321', 'rec2015174301', 'rec2013195291'].forEach(parseBlock);

// elem-type text with large font
['rec2013942971', 'rec2014507321'].forEach((id) => {
  const idx = h.indexOf(`id="${id}"`);
  const chunk = h.slice(idx, idx + 120000);
  const texts = [...chunk.matchAll(/data-elem-type='text'[\s\S]*?data-field-fontsize-value="(\d+)"[\s\S]*?class='tn-atom'[^>]*>([^<]+)</g)];
  console.log('\n===', id, 'text elems ===');
  texts.forEach((m) => console.log('fs', m[1], ':', m[2].trim().slice(0, 60)));
});
