const fs = require('fs');
const h = fs.readFileSync('D:/Vera work/cursor priglashenie/vintage-source.html', 'utf8');
const idx = h.indexOf('id="rec2014318861"');
const chunk = h.slice(idx, idx + 50000);
const plate = { top: 263, left: 177, w: 847, h: 1089 };
const blocks = chunk.split(/<div class='t396__elem/);
for (const b of blocks) {
  const id = b.match(/data-elem-id='([^']+)'/);
  const type = b.match(/data-elem-type='([^']+)'/);
  const top = b.match(/data-field-top-value="([^"]*)"/);
  const left = b.match(/data-field-left-value="([^"]*)"/);
  const height = b.match(/data-field-height-value="([^"]*)"/);
  const width = b.match(/data-field-width-value="([^"]*)"/);
  const src = b.match(/src='([^']+)'/);
  const text = b.match(/class='tn-atom'[^>]*>([^<]{5,})</);
  if (!id || !type) continue;
  const t = +top[1], l = +left[1], ht = +height[1], wd = +width[1];
  const rel = {
    left: ((l - plate.left) / plate.w * 100).toFixed(1) + '%',
    top: ((t - plate.top) / plate.h * 100).toFixed(1) + '%',
    width: (wd / plate.w * 100).toFixed(1) + '%',
    height: (ht / plate.h * 100).toFixed(1) + '%',
  };
  console.log(type[1], id[1]);
  console.log('  pos', rel);
  if (src) console.log('  src', src[1]);
  if (text) console.log('  text', text[1].slice(0, 80));
}
