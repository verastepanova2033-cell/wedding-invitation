const fs = require('fs');
const h = fs.readFileSync('D:/Vera work/cursor priglashenie/vintage-source.html', 'utf8');
['rec2013195291','rec2013942971','rec2014173551'].forEach(id => {
  const i = h.indexOf('id="' + id + '"');
  const c = h.slice(i, i + 35000);
  console.log('\n=== ' + id + ' ===');
  [...c.matchAll(/data-elem-type='([^']+)'[\s\S]*?src='(https:\/\/static\.tildacdn\.com\/[^']+)'/g)]
    .forEach(m => console.log(m[1], m[2]));
});
