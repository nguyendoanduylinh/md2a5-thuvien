export class Book {
  ID: number;
  name: string;
  constructor(ID: number, name: string) {
    this.ID = ID;
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  getID() {
    return this.ID;
  }
}
