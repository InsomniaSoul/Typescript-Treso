import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {

  constructor(private bezeichnung: string, public id: number, public wert: number,) {

  }

  get bezeichnung() {
    return this.bezeichnung
  }
  set bezeichnung(bezeichnung:void) {
    this.bezeichnung = this.bezeichnung
  }

  toString(): string {
    /**
     * Datentyp der Variablen 'text' muss nicht zwangsläufig festgelegt werden.
     * Er ergibt sich andernfalls auch durch die Zuweisung.
     */
    let text: string = "\nID: " + this.id;
    text += "\nVersicherungswert: " + this.wert;
    return text;
  }
  

}