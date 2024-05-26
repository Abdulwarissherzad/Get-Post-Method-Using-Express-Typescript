export default class Reminder {
  id: number;
  isComplate: boolean;

  constructor(public title: string) {
    this.id = Date.now();
    this.isComplate = false;
  }
}
// We create another class to create a remiders list.
// const reminder = {id:Date.now(), title, isComplted: false}
