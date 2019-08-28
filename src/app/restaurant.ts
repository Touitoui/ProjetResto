export class Restaurant {
  id?: number;

  name: string;

  address: string;

  city: string;

  image: string;

  cookingStyle: string;

  description: string;

  phoneNumber: string;

  website: string;

  note: number;

  constructor(name: string, address: string, city: string,
              image: string, cookingStyle: string,
              description: string, phoneNumber: string,
              website: string, note: number) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.image = image;
    this.cookingStyle = cookingStyle;
    this.description = description;
    this.phoneNumber = phoneNumber;
    this.website = website;
    this.note = note;
  }
}
