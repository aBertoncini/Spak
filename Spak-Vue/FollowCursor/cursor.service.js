export default class CursorService {
  getCursors() {
    let cursor = document.getElementById("cursor");
    let cursor2 = document.getElementById("cursor2");
    return [cursor, cursor2];
  }
  onMouseEnter(e) {
    let [cursor, cursor2] = this.getCursors();
    cursor.classList.add("cursor-is-2-big");
    cursor2.classList.add("cursor2-hover");
  }
  onMouseLeave(e) {
    let [cursor, cursor2] = this.getCursors();
    cursor.classList.remove("cursor-is-2-big");
    cursor2.classList.remove("cursor2-hover");
  }
  // funzione utilizzata per inserire event listener su più elementi
  attachEvents(elementList, eventName, handlerFunction) {
    let el;
    if (typeof elementList == "string")
      el = document.querySelectorAll(elementList);
    for (var i = 0; i < el.length; i++)
      el[i].addEventListener(eventName, handlerFunction);
  }
  initMouseEnterLeaveEvents(elClass) {
    this.attachEvents(elClass, "mouseenter", (e) => {
      this.onMouseEnter();
    });
    this.attachEvents(elClass, "mouseleave", (e) => {
      this.onMouseLeave();
    });
  }
}

/**** ISTRUZIONI COMPONENTE CURSOR ***
 * installare vue-global-events per eventi globali
 * richiamare funzioni di evento ogni volta che si vuole far accadere un evento
  
  * attachEvents usata per inserire eventi a più elementi
  * esempio: 
  cursorServ.attachEvents(".link-ref", "mouseleave", (e) => {
    cursorServ.onMouseLeave();
  });

  * initMouseEnterLeaveEvents come attachEvents ma per enter e leave
  * esempio:
  new CursorService().initMouseEnterLeaveEvents(".box-link");



*/
