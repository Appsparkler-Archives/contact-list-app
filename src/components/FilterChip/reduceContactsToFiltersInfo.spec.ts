import { IContactFormData } from "types";
import {
  reduceContactsToFiltersInfo,
  findContactInfoByType,
} from "./reduceContactsToFiltersInfo";

describe("reduceContactsToFiltersInfo", () => {
  test("it should return correct info - 1", () => {
    const contactsData: IContactFormData[] = [
      {
        id: "fm-1",
        gender: "female",
        mobile: "3939393",
        name: "John Smith",
        type: "personal",
      },
    ];

    const contactsInfo = reduceContactsToFiltersInfo(contactsData);
    expect(findContactInfoByType("female")(contactsInfo)?.count).toBe(1);
    expect(findContactInfoByType("personal")(contactsInfo)?.count).toBe(1);
    expect(findContactInfoByType("male")(contactsInfo)?.count).toBe(0);
    expect(findContactInfoByType("business")(contactsInfo)?.count).toBe(0);
  });

  test("it should return correct info - 2", () => {
    const contactsData: IContactFormData[] = [
      {
        id: "fm-1",
        gender: "female",
        mobile: "3939393",
        name: "John Smith",
        type: "personal",
      },
      {
        id: "fm-2",
        gender: "female",
        mobile: "3939393",
        name: "John Smith",
        type: "business",
      },
    ];
    const contactsInfo = reduceContactsToFiltersInfo(contactsData);
    expect(findContactInfoByType("female")(contactsInfo)?.count).toBe(2);
    expect(findContactInfoByType("business")(contactsInfo)?.count).toBe(1);
    expect(findContactInfoByType("personal")(contactsInfo)?.count).toBe(1);
    expect(findContactInfoByType("male")(contactsInfo)?.count).toBe(0);
  });
});
