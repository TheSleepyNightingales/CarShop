export class Repair {
  mechanic: string;
  description: string;
  type: string;
  date: Date;
  price: number;
  isDeleted: boolean;

  constructor(mechanic: string, description: string, type: string, date: Date, price: number) {
    this.mechanic = mechanic;
    this.description = description;
    this.type = type;
    this.date = date;
    this.price = price;
    this.isDeleted = false;
  }
}
