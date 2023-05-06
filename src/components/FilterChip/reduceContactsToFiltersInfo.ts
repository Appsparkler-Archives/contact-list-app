import { find, map } from "lodash/fp";
import { reduce } from "lodash/fp";
import { IContactFormData } from "types";

type TContactInfoItemType = "male" | "female" | "business" | "personal";

interface IContactInfoItem {
  type: TContactInfoItemType;
  count: number;
}

export const findContactInfoByType = (type: TContactInfoItemType) =>
  find<IContactInfoItem>((contactInfo) => contactInfo.type === type);

const initialContactInfo: IContactInfoItem[] = [
  {
    type: "female",
    count: 0,
  },
  {
    type: "male",
    count: 0,
  },
  {
    type: "business",
    count: 0,
  },
  {
    type: "personal",
    count: 0,
  },
];

export const reduceContactsToFiltersInfo = reduce<
  IContactFormData,
  IContactInfoItem[]
>((acc, contact) => {
  const mapToUpdateCount = map<IContactInfoItem, IContactInfoItem>(
    (contactInfoItem) => {
      if (contactInfoItem.type === contact.gender) {
        return {
          type: contact.gender,
          count: contactInfoItem.count + 1,
        };
      } else if (contactInfoItem.type === contact.type) {
        return {
          type: contact.type,
          count: contactInfoItem.count + 1,
        };
      } else return contactInfoItem;
    }
  );
  return mapToUpdateCount(acc);
}, initialContactInfo);
