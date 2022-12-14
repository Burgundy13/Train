export class Tickets {
  count: number;
  results: Ticket[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj && obj.results.map((elem: any) => new Ticket(elem))) || [];
  }
}

export class Ticket {
  _id: number;
  number: number;
  from: string;
  departure: Date;
  to: string;
  arrival: Date;
  price: number;
  name: string;
  birthDate: Date;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.number = (obj && obj.number) || 0;
    this.from = (obj && obj.from) || '';
    this.departure = (obj && obj.departure && new Date(obj.departure)) || null;
    this.to = (obj && obj.to) || '';
    this.arrival = (obj && obj.arrival && new Date(obj.arrival)) || null;
    this.price = (obj && obj.price) || 0;
    this.name = (obj && obj.name) || '';
    this.birthDate = (obj && obj.birthDate && new Date(obj.birthDate)) || null;
  }
}
