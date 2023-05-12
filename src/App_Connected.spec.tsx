import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ConnectedApp } from "App_Connected";
import { RootState } from "app/store";
import { contactsData } from "data";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {
  changeTextField,
  clickOnFirstCreateButton,
  clickOnYesDeleteButton,
} from "test-utils";

jest.useFakeTimers();

beforeEach(() => {
  store.clearActions();
});

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

  it("should match snapshot after clicking on accordion trigger", () => {
    const { baseElement } = render(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    clickOnContactAccordion();
    expect(baseElement).toMatchSnapshot();
  });
});

describe("ConnectedApp - Functional Tests", () => {
  it("should dispatch contacts/create action", () => {
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

  it("should dispatch contacts/delete action", () => {
    expect(store.getActions().length).toBe(0);
    render(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    clickOnContactAccordion();
    clickOnDeleteIconButton();
    clickOnYesDeleteButton();
    act(() => {
      jest.runAllTimers();
    });
    const actionsAfter = store.getActions();

    expect(actionsAfter[0].type).toBe("contacts/delete");
  });
});

function clickOnAddContactButton() {
  fireEvent.click(screen.getByText(/add new contact/i));
}

function clickOnContactAccordion() {
  fireEvent.click(screen.getByText(/Ali Connors/i));
}

function clickOnDeleteIconButton() {
  fireEvent.click(screen.getAllByLabelText(/delete/i)[0]);
}
