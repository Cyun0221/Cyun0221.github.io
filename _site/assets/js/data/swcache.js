const resource = [

  /* --- CSS --- */
  '/Cyun0221.github.io/assets/css/style.css',

  /* --- PWA --- */
  '/Cyun0221.github.io/app.js',
  '/Cyun0221.github.io/sw.js',

  /* --- HTML --- */
  '/Cyun0221.github.io/index.html',
  '/Cyun0221.github.io/404.html',
  
    '/Cyun0221.github.io/categories/',
  
    '/Cyun0221.github.io/tags/',
  
    '/Cyun0221.github.io/archives/',
  
    '/Cyun0221.github.io/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/Cyun0221.github.io/assets/img/favicons/android-chrome-192x192.png',
    '/Cyun0221.github.io/assets/img/favicons/android-chrome-512x512.png',
    '/Cyun0221.github.io/assets/img/favicons/apple-touch-icon.png',
    '/Cyun0221.github.io/assets/img/favicons/favicon-16x16.png',
    '/Cyun0221.github.io/assets/img/favicons/favicon-32x32.png',
    '/Cyun0221.github.io/assets/img/favicons/favicon.ico',
    '/Cyun0221.github.io/assets/img/favicons/mstile-150x150.png',
    '/Cyun0221.github.io/assets/js/dist/categories.min.js',
    '/Cyun0221.github.io/assets/js/dist/commons.min.js',
    '/Cyun0221.github.io/assets/js/dist/home.min.js',
    '/Cyun0221.github.io/assets/js/dist/misc.min.js',
    '/Cyun0221.github.io/assets/js/dist/page.min.js',
    '/Cyun0221.github.io/assets/js/dist/post.min.js',
    '/Cyun0221.github.io/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'raw.githubusercontent.com',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

