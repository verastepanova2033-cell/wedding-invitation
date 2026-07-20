const https = require('https');
const fs = require('fs');

const urls = [
  'https://static.tildacdn.com/tild6439-6365-4633-b536-313361653935/photo.svg',
  'https://static.tildacdn.com/tild3664-3438-4239-a263-306632386364/photo.svg',
  'https://static.tildacdn.com/tild3236-6334-4631-b333-306565343235/photo.svg',
  'https://static.tildacdn.com/tild3830-3135-4638-b032-323531666334/photo.svg',
  'https://static.tildacdn.com/tild3763-3431-4633-b030-383634316530/Love.svg',
  'https://static.tildacdn.com/tild3861-6665-4630-b939-323739653765/Welcome.svg',
  'https://static.tildacdn.com/tild6535-6366-4236-b632-333731316464/photo.svg',
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (r) => {
      let d = '';
      r.on('data', (c) => (d += c));
      r.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

(async () => {
  for (const url of urls) {
    const body = await get(url);
    const name = url.split('/').slice(-2).join('_');
    fs.writeFileSync('decor/' + name, body);
    const w = (body.match(/width="(\d+)"/) || [])[1];
    const h = (body.match(/height="(\d+)"/) || [])[1];
    const op = (body.match(/opacity="([^"]+)"/) || [])[1];
    console.log(name, `${w}x${h}`, op ? `opacity=${op}` : '');
  }
})();
