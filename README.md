# Spak
Repository di regole scss e componenti Vue da riutilizzare.
Questa guida si riferisce a progetti Vue, ma è possibile utilizzare Spak-scss anche per altri progeti poichè è una libreria css.

# Spak-Scss
Contiene i file scss per le classi che non hanno bisogno di template.

## Installazione

Per usare *Spak* è necessario installare sass
> `npm install sass`
>> occasionalmente installare anche `sass-loader`

Importare nel foglio di stile principale *(ex. main.scss)* il file `_Spak.scss`.

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
  
