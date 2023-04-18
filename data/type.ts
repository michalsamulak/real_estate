export interface IEstateData {
    id: string;
    title: string;
    description: string;
    localization: Localization;
    phone_number: string;
    email: string;
    price: string;
    num_bedrooms: number;
    area: number;
    bathrooms: number;
    img: string;
  }
  export interface Localization {
    lat: number;
    long: number;
  }
  