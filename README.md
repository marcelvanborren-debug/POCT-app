# POCT Onderweg

Mobiele app (PWA) voor POCT-coördinatoren: reagentia afleveren, voorraad tellen en QC-resultaten invoeren per locatie. Werkt offline en is te installeren op Android en iPhone.

## Installeren op de telefoon
- **Android (Chrome):** open de app-link, tik op ⋮ › *App installeren*.
- **iPhone (Safari):** open de app-link, tik op Delen › *Zet op beginscherm*.

## Gegevens
- Locaties, analysers en tests komen uit een back-up (JSON) van **POCT Voorraad** (Sync › Gegevens uit POCT Voorraad).
- Alles wordt eerst op het toestel bewaard. Via **Sync** gaan openstaande records als JSON (terug te zetten in POCT Voorraad) en CSV (QC) naar de gedeelde map, via het deelmenu (OneDrive/SharePoint/Teams) of, na een app-registratie, rechtstreeks via Microsoft 365.

## Bestanden
- `index.html` – de app (HTML, CSS en JS in één bestand)
- `sw.js` – service worker voor offline gebruik
- `manifest.webmanifest`, `icons/` – installatiegegevens
