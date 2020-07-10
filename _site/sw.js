importScripts( '/guide-product-teams-equipes-produits/cache-polyfill.js' );

var filesToCache = [
  // root
  '/guide-product-teams-equipes-produits/',
  '/guide-product-teams-equipes-produits/index.html',
  // css
  '/guide-product-teams-equipes-produits/assets/css/main.css',
  '/guide-product-teams-equipes-produits/assets/css/normalize.css',
  '/guide-product-teams-equipes-produits/assets/css/syntax.css',
  // images
  '/guide-product-teams-equipes-produits/assets/img/octocat.png',
  // pages
  '/guide-product-teams-equipes-produits/home/','/guide-product-teams-equipes-produits/accueil/',
  // posts
  
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
