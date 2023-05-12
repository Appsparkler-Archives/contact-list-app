import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ConnectedApp } from "App_Connected";
import { RootState } from "app/store";
import { contactsData } from "data";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { changeTextField, clickOnFirstCreateButton } from "test-utils";
// import { useAppDispatch, useAppSelector } from "app/hooks";

const selectorFunction = (selector: (state: RootState) => any) =>
  selector(state);

jest.useFakeTimers();
// jest.mock("app/hooks", () => {
//   return {
//     useAppDispatch: jest.fn().mockImplementation(() => jest.fn),
//     useAppSelector: jest.fn().mockImplementation(() => selectorFunction),
//   };
// });
afterEach(cleanup);

const state: RootState = {
  contacts: contactsData.variant1,
};
const getStore = configureStore([]);
const store = getStore(state);

describe("ConnectedApp - Snapshot Tests", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should match snapshot after opening add new contact modal", () => {
    const { baseElement } = render(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    clickOnAddContactButton();
    expect(baseElement).toMatchSnapshot();
  });
});

describe("ConnectedApp - Functional Tests", () => {
  it("create functionality", () => {
    render(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    clickOnAddContactButton();
    changeTextField(/name/i, "Jhon");
    changeTextField(/mobile/i, "999");
    const actionsBefore = store.getActions();
    expect(actionsBefore.length).toBe(0);
    clickOnFirstCreateButton();
    const actionsAfter = store.getActions();
    expect(actionsAfter[0].type).toBe("contacts/create");
  });
});

function clickOnAddContactButton() {
  fireEvent.click(screen.getByText(/add new contact/i));
}
