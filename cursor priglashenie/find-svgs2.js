const fs = require('fs');
const h = fs.readFileSync('D:/Vera work/cursor priglashenie/vintage-source.html', 'utf8');
['rec2013942971','rec2014173551','rec2013195291'].forEach(id => {
  const i = h.indexOf('id="' + id + '"');
  const end = h.indexOf('t396_init', i);
  const c = h.slice(i, end);
  console.log('\n=== ' + id + ' ===');
  [...c.matchAll(/src='(https:\/\/static\.tildacdn\.com\/[^']+)'/g)].forEach(m => console.log(m[1]));
  [...c.matchAll(/data-original='([^']+)'/g)].forEach(m => console.log('orig', m[1]));
});
