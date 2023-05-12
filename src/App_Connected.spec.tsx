import { act, fireEvent, render, screen } from "@testing-library/react";
import { ConnectedApp } from "App_Connected";
import { RootState } from "app/store";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.useFakeTimers();

const state: RootState = {
  contacts: [],
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
    // act(() => {
    //   jest.runAllTimers();
    // });
    expect(baseElement).toMatchSnapshot();
  });
});

describe("ConnectedApp - Functional Tests", () => {
  it("should", () => {
    render(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    clickOnAddContactButton();
  });
});

function clickOnAddContactButton() {
  fireEvent.click(screen.getByText(/add new contact/i));
}
