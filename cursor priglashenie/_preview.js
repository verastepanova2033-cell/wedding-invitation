const sharp = require('sharp');
const files = ['flower-01','flower-02','flower-03','flower-04','flower-05','flower-06','flower-07','flower-08','flower-09','flower-10','flower-11','flower-12'];
(async () => {
  const tiles = [];
  for (let i = 0; i < files.length; i++) {
    const buf = await sharp('decor/' + files[i] + '.png')
      .resize(260, 260, { fit: 'contain', background: { r:255,g:255,b:255,alpha:1 } })
      .flatten({ background: '#ffffff' }).png().toBuffer();
    tiles.push({ input: buf, left: (i % 4) * 260, top: Math.floor(i / 4) * 260 });
  }
  await sharp({ create: { width: 1040, height: 780, channels: 3, background: '#ffffff' } })
    .composite(tiles).png().toFile('_flowers-preview.png');
  console.log('done');
})();
