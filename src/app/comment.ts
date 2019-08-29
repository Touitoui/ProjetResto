export class Comment {
  id?: number;

  date: Date;

  author: string;

  content: string;

  note: number;

  restaurantId: number;

  constructor(author: string, content: string, note: number, restaurantId: number) {
    this.date = new Date();
    this.author = author;
    this.content = content;
    this.note = note;
    this.restaurantId = restaurantId;
  }
}
