const fs = require('fs');
const path = 'D:/Vera work/cursor priglashenie/nikita-i-vera.html';
let html = fs.readFileSync(path, 'utf8');

const ASSETS = {
  welcomeSvg: 'https://static.tildacdn.com/tild3861-6665-4630-b939-323739653765/Welcome.svg',
  welcomeCard: 'https://static.tildacdn.com/tild6338-6336-4633-a533-376465313466/Rectangle_3.png',
  welcomeVideo: 'https://static.tildacdn.com/vide3466-3230-4135-a531-346237376161/03105.mp4',
  curtain: 'https://static.tildacdn.com/tild3637-3732-4464-b731-626236363633/image_18.png',
  plate: 'https://static.tildacdn.com/tild3864-3362-4732-a436-656238363937/Mockup_card_tg-desig.png',
  seal: 'https://static.tildacdn.com/tild3535-3530-4561-b933-616637363364/__.png',
  heartLace: 'https://static.tildacdn.com/tild6633-6335-4963-b331-303830633732/__.png',
  detailsTitle: 'https://static.tildacdn.com/tild6535-6366-4236-b632-333731316464/photo.svg',
  noteCard: 'https://static.tildacdn.com/tild6532-6432-4263-b466-646162393461/_1.png',
};

html = html.replace(
  /<link href="https:\/\/fonts\.googleapis\.com[^"]+" rel="stylesheet">/,
  '<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap" rel="stylesheet">'
);

html = html.replace(
  /font-family:'Courier Prime',monospace;/,
  "font-family:'JetBrains Mono',monospace;font-weight:300;"
);

// Remove intro music CSS block
html = html.replace(/\s*\.intro__music\{[\s\S]*?\.intro__music svg\{[\s\S]*?\}\n/, '\n');

// Replace welcome section CSS
html = html.replace(
  /\/\* ---------- WELCOME ---------- \*\/[\s\S]*?\/\* ---------- PROGRAM ---------- \*\//,
  `/* ---------- WELCOME ---------- */
  .welcome{
    position:relative;
    min-height:760px;
    padding:clamp(70px,12vw,110px) 20px clamp(90px,14vw,120px);
    background:#e9e4d8;
    overflow:hidden;
  }
  .welcome__video{
    position:absolute;inset:0;
    width:100%;height:100%;
    object-fit:cover;
    filter:sepia(.25) contrast(1.05) brightness(.92);
    pointer-events:none;
  }
  .welcome__curtain{
    position:absolute;top:0;
    width:min(46vw,430px);
    height:100%;
    object-fit:cover;
    object-position:center top;
    opacity:.95;
    pointer-events:none;
    z-index:1;
  }
  .welcome__curtain--left{left:0;transform:scaleX(-1)}
  .welcome__curtain--right{right:0}
  .welcome__inner{position:relative;z-index:2;max-width:1200px;margin:0 auto}
  .welcome__logo{
    display:block;
    width:min(335px,78vw);
    margin:0 auto clamp(28px,6vw,48px);
  }
  .welcome__card-wrap{
    position:relative;
    width:min(520px,92vw);
    margin:0 auto;
  }
  .welcome__card-bg{
    width:100%;
    display:block;
  }
  .welcome__card-content{
    position:absolute;
    inset:12% 10% 14%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    color:#342619;
  }
  .welcome__card-content p{
    font-size:clamp(14px,2.2vw,20px);
    line-height:1.75;
    font-weight:300;
  }
  .welcome__date{
    margin-top:clamp(18px,3vw,28px);
    font-family:Georgia,'Times New Roman',serif;
    font-style:italic;
    font-size:clamp(22px,4vw,28px);
    letter-spacing:.04em;
    color:#342619;
  }

  /* ---------- PROGRAM ---------- */`
);

// Replace details section CSS
html = html.replace(
  /\/\* ---------- DETAILS ---------- \*\/[\s\S]*?\/\* ---------- COUNTDOWN ---------- \*\//,
  `/* ---------- DETAILS ---------- */
  .details{
    background:#1a1510;
    color:#e9e4d8;
    padding:clamp(70px,12vw,110px) 16px clamp(90px,14vw,120px);
    position:relative;
    overflow:hidden;
  }
  .details__stage{
    position:relative;
    width:min(420px,92vw);
    margin:0 auto;
    aspect-ratio:847/1089;
  }
  .details__plate{
    position:absolute;inset:0;
    width:100%;height:100%;
    object-fit:contain;
  }
  .details__note{
    position:absolute;
    left:50%;top:18%;
    transform:translateX(-50%);
    width:54%;
    aspect-ratio:229/364;
    object-fit:contain;
    z-index:2;
  }
  .details__seal{
    position:absolute;
    left:11%;top:27%;
    width:14%;
    z-index:4;
  }
  .details__seal-text{
    position:absolute;
    left:11%;top:27%;
    width:14%;
    aspect-ratio:1;
    display:flex;align-items:center;justify-content:center;
    font-size:clamp(5px,1.4vw,8px);
    letter-spacing:.14em;
    text-transform:lowercase;
    color:#fff;
    z-index:5;
    pointer-events:none;
  }
  .details__heart{
    position:absolute;
    right:8%;top:22%;
    width:48%;
    z-index:3;
  }
  .details__heart-photo{
    position:absolute;
    right:15%;top:29%;
    width:34%;
    aspect-ratio:1;
    object-fit:cover;
    object-position:top center;
    filter:grayscale(1) contrast(1.02);
    transform:rotate(8deg);
    z-index:2;
    clip-path:polygon(50% 90%, 6% 36%, 22% 8%, 50% 24%, 78% 8%, 94% 36%);
  }
  .details__text{
    position:absolute;
    left:50%;top:58%;
    transform:translateX(-50%);
    width:66%;
    text-align:center;
    font-size:clamp(11px,2vw,16px);
    line-height:1.75;
    color:#342619;
    z-index:4;
    font-weight:300;
  }
  .details__title{
    position:absolute;
    left:50%;bottom:-2%;
    transform:translateX(-50%);
    width:min(407px,88%);
    z-index:4;
  }

  /* ---------- COUNTDOWN ---------- */`
);

// Remove dresscode CSS
html = html.replace(/\s*\/\* ---------- DRESS CODE ---------- \*\/[\s\S]*?\/\* ---------- FOOTER ---------- \*\//, '\n\n  /* ---------- FOOTER ---------- */');

// Remove dresscode media query line
html = html.replace(/\s*\.intro__music\{[^}]+\}/, '');
html = html.replace(/\s*\.details__ring\{inset:-10px\}/, '');

// Update intro names font - use SVG-like styling isn't possible, keep script feel with JetBrains
html = html.replace(
  /\.intro__names\{[\s\S]*?\}/,
  `.intro__names{
    font-family:Georgia,'Times New Roman',serif;
    font-size:clamp(42px,9vw,72px);
    font-weight:400;
    font-style:italic;
    line-height:1.05;
    color:var(--brown);
    margin-bottom:clamp(30px,6vw,50px);
  }`
);

// Hero, program, location fonts to JetBrains/Georgia where needed
html = html.replace(/font-family:'Montserrat',sans-serif;/g, "font-family:'JetBrains Mono',monospace;font-weight:300;");
html = html.replace(/font-family:'Cormorant Garamond',serif;/g, "font-family:Georgia,'Times New Roman',serif;");
html = html.replace(/font-family:'Allura',cursive;/g, "font-family:Georgia,'Times New Roman',serif;font-style:italic;");

// Remove music from intro HTML
html = html.replace(/\s*<div class="intro__music"[\s\S]*?<\/div>\s*<\/div>/, '\n  </div>');

// Replace welcome HTML
html = html.replace(
  /<section class="welcome reveal">[\s\S]*?<\/section>/,
  `<section class="welcome reveal">
  <video class="welcome__video" autoplay muted loop playsinline aria-hidden="true">
    <source src="${ASSETS.welcomeVideo}" type="video/mp4">
  </video>
  <img class="welcome__curtain welcome__curtain--left" src="${ASSETS.curtain}" alt="" aria-hidden="true">
  <img class="welcome__curtain welcome__curtain--right" src="${ASSETS.curtain}" alt="" aria-hidden="true">
  <div class="welcome__inner">
    <img class="welcome__logo reveal-child" src="${ASSETS.welcomeSvg}" alt="Welcome">
    <div class="welcome__card-wrap reveal-child">
      <img class="welcome__card-bg" src="${ASSETS.welcomeCard}" alt="">
      <div class="welcome__card-content">
        <p>Совсем скоро в нашей жизни случится главное событие — мы поженимся. И мы очень хотим, чтобы в этот день рядом были именно вы.</p>
        <div class="welcome__date">1 октября 2026</div>
      </div>
    </div>
  </div>
</section>`
);

// Replace details HTML
html = html.replace(
  /<section class="details reveal">[\s\S]*?<\/section>/,
  `<section class="details reveal">
  <div class="details__stage reveal-child">
    <img class="details__plate" src="${ASSETS.plate}" alt="">
    <img class="details__note" src="${ASSETS.noteCard}" alt="">
    <img class="details__seal" src="${ASSETS.seal}" alt="">
    <div class="details__seal-text" aria-hidden="true">nikita . vera .</div>
    <img class="details__heart" src="${ASSETS.heartLace}" alt="">
    <img class="details__heart-photo" src="couple-bw.png" alt="Никита и Вера">
    <p class="details__text">Дорогие гости, приносите с собой веселье и радость в душе, а подарки — в конверте!</p>
    <img class="details__title" src="${ASSETS.detailsTitle}" alt="детали">
  </div>
</section>`
);

// Remove dresscode section HTML
html = html.replace(/\s*<section class="dresscode reveal">[\s\S]*?<\/section>/, '');

fs.writeFileSync(path, html);
console.log('Updated', path, 'length', html.length);
