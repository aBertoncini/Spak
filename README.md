# Spak

## V.2.2 - 17/12/2024

Repository di regole scss e componenti Vue da riutilizzare.
Questa guida si riferisce a progetti Vue, ma è possibile utilizzare Spak-scss anche per altri progeti poichè è una libreria css.

# Spak-Scss

Contiene i file scss per le classi che non hanno bisogno di template.

## Installazione

Per usare _Spak_ è necessario installare sass

> `npm install sass`
>
> > occasionalmente installare anche `sass-loader`

### Step per installazione da file unico per più progetti

- Importare in `main.scss` del progetto il file `/variables/_index.scss` tramite il comando `@use "./path-to-spak/variables/index"`.
- Aggiornare il percorso del file `_Spak.scss` nel foglio di stile `/variables/_index.scss`.
- Scrivere le proprie regole all'interno di `main.scss`.

## Contenuto

All'interno del progetto vengono importate librerie css

- **Fogli di stile**
  - Bulma _default_
  - Bootstrap
- **Icone**
  - Font Awesome _default_
  - Bootstrap Icon
  - Google Material Icon
- **Animazioni**
  - Animate.css

# Spak-Vue

Contiene dei componenti con estensione `.vue` che posssono essere riutilizzati.

> All'interno dei componenti si usano le classi della libreria.

## Installazione

Importare il file che si vuole all'interno del progetto e seguire le istruzioni del componente descritte all'interno di esso.

Alcuni componenti necessitano di una libreria esterna, ad esempio.

- `GlobalEvents` > `npm install vue-global-events`
- `VueUse` > `npm install @vueuse/core`
- `Anime.js` > `npm install animejs`

# Aggiornamento da 2.1

Utilizzare la libreria `sass-migrator` per aggiornare gli `@import`.

`npm i sass-migrator`
`npx sass-migrator module <path-to-.scss>`