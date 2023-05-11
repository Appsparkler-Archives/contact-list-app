import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";

describe("contactsSlice", () => {
  test("it should create slice without any issues", () => {
    const store = configureStore({
      reducer: {
        contacts: contactsReducer,
      },
    });
    expect(store).toBeTruthy();
  });
});
