const fs = require('fs');
const h = fs.readFileSync('D:/Vera work/cursor priglashenie/vintage-source.html', 'utf8');
const idx = h.indexOf('id="rec2014318861"');
const chunk = h.slice(idx, idx + 50000);
const plate = { top: 263, left: 177, w: 847, h: 1089 };
const elems = [...chunk.matchAll(/data-elem-id='([^']+)'[^>]*data-elem-type='([^']+)'[^>]*data-field-top-value="([^"]*)"[^>]*data-field-left-value="([^"]*)"[^>]*data-field-height-value="([^"]*)"[^>]*data-field-width-value="([^"]*)"/g)];
for (const e of elems) {
  const top = +e[3], left = +e[4], height = +e[5], width = +e[6];
  const relTop = ((top - plate.top) / plate.h * 100).toFixed(1);
  const relLeft = ((left - plate.left) / plate.w * 100).toFixed(1);
  const relW = (width / plate.w * 100).toFixed(1);
  const relH = (height / plate.h * 100).toFixed(1);
  console.log(e[2], `abs:${top},${left} ${width}x${height}`, `rel:${relLeft}% ${relTop}% ${relW}%x${relH}%`);
}
const imgs = [...chunk.matchAll(/data-elem-id='([^']+)'[\s\S]*?src='([^']+)'/g)];
console.log('---imgs---');
for (const m of imgs) console.log(m[1], m[2].split('/').pop());
