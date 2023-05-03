export interface IContactForm {
  name: string;
  mobile: string;
  gender: "male" | "female";
  type: "personal" | "business";
  address?: string;
  email?: string;
  company?: string;
}
