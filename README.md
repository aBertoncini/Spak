# Spak

## V.2.1.13 - 07/02/2024

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

- Importare in `main.scss` del progetto il file `_variables.scss` tramite il comando `@import "./path-to-spak/variables/variables"`.
- Importare nel foglio di stile principale _(ex. main.scss)_ il file `_Spak.scss` tramite il comando `@import "./path-to-spak/Spak"`.
- Scrivere le proprie regole all'interno di `main.scss`.

Se si vogliono utilizzare le proprie variabili all'interno del progetto:

- Copiare la cartella `variables` all'interno del proprio progetto e importare il file `_variables.scss` nel file `main.scss` tramite il comando `@import "./path-to-assets/variables/variables"`.
- Importare nel foglio di stile principale _(ex. main.scss)_ il file `_Spak.scss` tramite il comando `@import "./path-to-spak/Spak"`.
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

> All'interno dei componenti si importa il file `_variables.scss` per le colorazioni e dati variabili.

## Installazione

Importare il file che si vuole all'interno del progetto e seguire le istruzioni del componente descritte all'interno di esso.

Alcuni componenti necessitano di una libreria esterna, ad esempio.

- `GlobalEvents` > `npm install vue-global-events`
- `VueUse` > `npm install @vueuse/core`
- `Anime.js` > `npm install animejs`

## Contenuto

- **FollowCursor**: cursore personalizzato _(con annesso file .js)_.
- **BtnRipple**: pulsante con effetto ripple all'interno.
- **ContextMenu**: menù contestuale sul click destro del mouse.
- **CookiesAccept**: menù per accettazione cookies.
- **IconMaterialContainer**: contenitore per mostrare le icone di Google Material.
- **ModalVue**: modale personalizzato.
- **OffCanvasMenu**: slider offcanvas per menù a scorrimento _(ex. app mobile)_.
- **ReadJSON**: componente che legge i file json e li salva all'interno di una variabile da un input.
- **FormList**: lista di elementi input _(usato per la gestione del database)_.
- **DropdownBtn**: Componente per la creazione di un pulsante dropdown, customizzabile e con animazione annessa.
- **Tooltip**: Tooltip (anche per più elementi in contemporanea, cambiando target)
- **SideBar**: componente contenitore per pagine con sidebar
- **BreadCrumb**: creazione automatica breadcrumb in base alla route
- **Form**: cartella con componenti del form già pronti da usare (dati scambiati attraverso la tecnica del 2-way binding di Vue)
