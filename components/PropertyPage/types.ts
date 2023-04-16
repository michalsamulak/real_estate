export type IProperty = string | { 
  id: string;
  title: string;
  description: string;
  localization: {
      lat: number;
      long: number;
  };
  phone_number: string;
  email: string;
  price: string;
  num_bedrooms: number;
  area: number;
  bathrooms: number;
  img: string;

}
 
