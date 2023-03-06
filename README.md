# Spak 
## V.2.1.1 del 06/03/2023
Repository di regole scss e componenti Vue da riutilizzare.
Questa guida si riferisce a progetti Vue, ma è possibile utilizzare Spak-scss anche per altri progeti poichè è una libreria css.

# Spak-Scss
Contiene i file scss per le classi che non hanno bisogno di template.

## Installazione

Per usare *Spak* è necessario installare sass
> `npm install sass`
>> occasionalmente installare anche `sass-loader`

### Step per installazione da file unico per più progetti
- Importare in `main.scss` del progetto il file `_variables.scss` tramite il comando `@import "./path-to-spak/variables/variables"`.
- Importare nel foglio di stile principale *(ex. main.scss)* il file `_Spak.scss` tramite il comando `@import "./path-to-spak/Spak"`.
- Scrivere le proprie regole all'interno di `main.scss`.

Se si vogliono utilizzare le proprie variabili all'interno del progetto allora:
- Copiare la cartella `variables` all'interno del proprio progetto e importare il file `_variables.scss` nel file `main.scss` tramite il comando `@import "./path-to-assets/variables/variables"`.
- Importare nel foglio di stile principale *(ex. main.scss)* il file `_Spak.scss` tramite il comando `@import "./path-to-spak/Spak"`.
- Scrivere le proprie regole all'interno di `main.scss`.

## Contenuto

All'interno del progetto vengono importate librerie css
- **Fogli di stile**
  - Bootstrap
    > se si sceglie di importare Bootstrap non dimenticarsi di importare il file `bootstrap.min.js` all'interno di index.html tramite cdn *(commentato all'interno di `_Spak.scss`)*
  - Bulma
- **Icone**
  - Font Awesome
  - Bootstrap Icon
  - Google Material Icon
- **Animazioni**
  - Animate.css
  
  # Spak-Vue
  Contiene dei componenti con estensione `.vue` che posssono essere riutilizzati.
  > All'interno dei componenti si importa il file `_variables.scss` per le colorazioni e dati variabili.
  
  ## Installazione 
  Importare il file che si vuole all'interno del progetto e seguire le istruzioni del componente descritte all'interno di esso.
  
  Alcuni componenti necessitano di un ulteriore componente vue `GlobalEvents`
  > `npm install vue-global-events`
  
  ## Contenuto
  - **FollowCursor**: cursore personalizzato *(con annesso file .js)*.
  - **BtnRipple**: pulsante con effetto ripple all'interno.
  - **ContextMenu**: menù contestuale sul click destro del mouse.
  - **CookiesAccept**: menù per accettazione cookies.
  - **IconMaterialContainer**: contenitore per mostrare le icone di Google Material.
  - **ModalVue**: modale personalizzato.
  - **OffCanvasMenu**: slider offcanvas per menù a scorrimento *(ex. app mobile)*.
  - **ReadJSON**: componente che legge i file json e li salva all'interno di una variabile da un input.
  - **FormList**: lista di elementi input *(usato per la gestione del database)*.
  
