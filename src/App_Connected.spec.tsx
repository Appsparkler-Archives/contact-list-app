import { ConnectedApp } from "App_Connected";
import { store, RootState } from "app/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

const AppRenderer = () => (
  <Provider store={store}>
    <ConnectedApp />;
  </Provider>
);

jest.mock("app/hooks");

describe("App - Snapshot Tests", () => {
  it("should render App component", () => {
    const { container } = render(<AppRenderer />);
    expect(container).toMatchSnapshot();
  });
});

// Mock the app/hooks module
jest.mock("app/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

describe("ConnectedApp", () => {
  const mockStore = configureStore<RootState>();
  let $store: typeof store;

  beforeEach(() => {
    $store = mockStore({
      contacts: [],
    });

    const rootState = $store.getState();

    // Mock the return values for useAppSelector and useAppDispatch
    jest.mock("app/hooks", () => ({
      useAppDispatch: jest.fn(),
      useAppSelector: jest.fn((selector) => selector(rootState)),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders App component with contacts and event handlers", () => {
    render(
      <Provider store={$store}>
        <ConnectedApp />
      </Provider>
    );
  });
});
