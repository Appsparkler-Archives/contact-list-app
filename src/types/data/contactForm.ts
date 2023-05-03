export interface IContactForm {
  name: string;
  mobile: string;
  address: string;
  company: string;
  email: string;
  gender: "male" | "female";
  type: "personal" | "business";
}
