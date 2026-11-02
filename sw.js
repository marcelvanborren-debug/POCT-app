// POCT Onderweg service worker: app-shell offline, fonts runtime gecachet.
const VERSIE="poct-onderweg-1.4";
const SHELL=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSIE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSIE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET")return;
  if(u.hostname.endsWith("microsoftonline.com")||u.hostname==="graph.microsoft.com")return;
  if(e.request.mode==="navigate"){e.respondWith(fetch(e.request).then(r=>{caches.open(VERSIE).then(c=>c.put("./index.html",r.clone()));return r}).catch(()=>caches.match("./index.html")));return}
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{if(r.ok&&(u.origin===location.origin||/fonts\.(googleapis|gstatic)\.com|cdn\.jsdelivr\.net/.test(u.hostname))){const c=r.clone();caches.open(VERSIE).then(x=>x.put(e.request,c))}return r})))});
