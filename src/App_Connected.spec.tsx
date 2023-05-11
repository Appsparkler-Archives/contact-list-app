import { render } from "@testing-library/react";
import { ConnectedApp } from "App_Connected";
import { store } from "app/store";
import { Provider } from "react-redux";

const AppRenderer = () => (
  <Provider store={store}>
    <ConnectedApp />;
  </Provider>
);

describe("App - Snapshot Tests", () => {
  it("should render App component", () => {
    const { container } = render(<AppRenderer />);
    expect(container).toMatchSnapshot();
  });
});
