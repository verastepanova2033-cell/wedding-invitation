const fs = require('fs');
const h = fs.readFileSync('vintage-source.html', 'utf8');

['локация', 'программа', 'programma'].forEach(t => {
  const i = h.toLowerCase().indexOf(t);
  console.log('\n===', t, '===');
  if (i >= 0) console.log(h.slice(Math.max(0, i - 300), i + 300).replace(/\s+/g, ' '));
});

['2014507321', '2013220411', '2014318861', '2013942971'].forEach(id => {
  const i = h.indexOf('rec' + id);
  const block = h.slice(i, i + 12000);
  const svgs = [...new Set([...block.matchAll(/src='([^']+\.svg)'/g)].map(m => m[1]))];
  console.log('\nrec' + id + ':', svgs.join('\n  '));
});
