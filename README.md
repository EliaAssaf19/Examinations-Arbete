Öppna min hemsida genom att clona repot i github. Du kan klicka på den gröna "code" knappen. sedan "Open with github desktop". Och när github desktop öppnas trycker du "Open in vs code"
Efter du öppnat repot i vs code, klickar du på "index.html" sedan höger klickar du på koden i filen för att hitta alternativet "Open with Live Server"

Vad gäller betygskriterier och särskilda krav så uppfylls dom såhär:

1. HTML-struktur: Header, Nav, Main, Section, Article och footer har används genom hela projektet

2. CSS-styling: Responsiv design har implementerats med hjälp utav Flexbox, Grid, Media Queries och Clamp

4. Tillgänglighet: Alt-attributer har använts till bilder, och vissa har även Figcaptions. Rubrikstruktur har använts från H1 till H3 i bägge .html sidorna. God färgkontrast finns i båda sidorna.

5. Webbläsarverktyg: Har använts flitigt under uppbyggnaden av sidan. Jag har använt inspektör läget i chrome för att justera borders och dylikt, men även kört lighthouse där resultat blev såhär: 86 Performance, 95 Accessibility, 100 Best Practices, 100 SEO.

6. Versionshantering med Git: jag har byggt varje element för sig i en egen branch, som footer i en branch, header i en branch, main i en branch osv med flera commits i varje branch... För att sedan merga ihop dem till develop och gjort små justeringar så allt funkar som jag vill, sedan till slut skicka upp allt till Main. 

En undersida finns också som heter "Shoppen"


I css filerna finner du texter som denna: /* Header */ ovanför varje element som css koden gäller för. Samt en likadan längst ner som visar vart css koden till det elementet tar slut. Ungefär såhär:

/* Header */
.header {
  background-color: var(
    --color-red
  ); /* Använd samma färg som bakgrunden på sidan */
  padding: 10px 20px;
  text-align: center;
}
/* Header */