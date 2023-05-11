import { uniqueId } from "lodash/fp";
import { IContactFormData } from "types";

export const contactsData: Record<"variant1", IContactFormData[]> = {
  variant1: [
    {
      id: "7cb1248c-983a-4207-a59f-40bfa1fae564",
      name: "Ali Connors",
      gender: "male",
      mobile: "+9282822223",
      email: "ali.connors@whatsapp.com",
      type: "business",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1671641797679-3b680a7d2109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      company: "SurveyHeart",
      address: "UK",
    },
    {
      id: "b4fc7a3e-3522-4292-b05d-5edbdffcf3ac",
      name: "Jenny Allen",
      gender: "female",
      mobile: "+39292323",
      type: "personal",
      imgUrl:
        "https://images.unsplash.com/photo-1625621435205-2d09ed661a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      company: "Societe Generale",
    },
    {
      id: "e90ae941-f295-4adc-bf8a-b1d7127a60e6",
      gender: "male",
      mobile: "+9211111214343",
      type: "business",
      imgUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      name: "Steven Covey",
    },
  ],
};

export const getDefaultCreateContact = (): IContactFormData => ({
  id: uniqueId("contact"),
  gender: "female",
  mobile: "",
  name: "",
  type: "personal",
  address: "",
  company: "",
  email: "",
});
