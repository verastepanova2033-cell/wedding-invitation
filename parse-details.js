const fs = require('fs');
const h = fs.readFileSync('D:/Vera work/cursor priglashenie/vintage-source.html', 'utf8');
const idx = h.indexOf('id="rec2014318861"');
const chunk = h.slice(idx, idx + 40000);
// extract all element positions and types
const elems = [...chunk.matchAll(/data-elem-id='([^']+)'[^>]*data-elem-type='([^']+)'[^>]*data-field-top-value="([^"]*)"[^>]*data-field-left-value="([^"]*)"[^>]*data-field-height-value="([^"]*)"[^>]*data-field-width-value="([^"]*)"/g)];
elems.forEach(e => console.log(e[2], e[3], e[4], e[5], e[6]));
console.log('---texts---');
[...chunk.matchAll(/class='tn-atom'[^>]*>([^<]{3,})</g)].forEach(m => console.log(m[1]));
