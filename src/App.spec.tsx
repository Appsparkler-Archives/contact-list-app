import { render } from "@testing-library/react";
import App from "App";

const onCreate = jest.fn();
const onEdit = jest.fn();
const onDelete = jest.fn();

const AppRenderer = () => (
  <App contacts={[]} onCreate={onCreate} onEdit={onEdit} onDelete={onDelete} />
);

describe("App - Snapshot Tests", () => {
  it("should render App component", () => {
    const { container } = render(<AppRenderer />);
    expect(container).toMatchSnapshot();
  });
});
