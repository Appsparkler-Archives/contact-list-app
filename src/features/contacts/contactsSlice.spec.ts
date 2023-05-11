import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { isFunction } from "lodash";

describe("contactsSlice", () => {
  test("it should create slice without any issues", () => {
    const store = configureStore({
      reducer: {
        contacts: contactsReducer,
      },
    });
    expect(store).toBeTruthy();
    expect(isFunction(store.dispatch)).toBeTruthy();
  });
});
