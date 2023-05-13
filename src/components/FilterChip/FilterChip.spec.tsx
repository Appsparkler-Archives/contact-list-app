import { render, screen } from "@testing-library/react";
import { FiltersChip } from "./FiltersChip";

describe("Filters - snapshots", () => {
  it("should render nothing except wrapper", () => {
    const { container } = render(<FiltersChip contacts={[]} />);
    expect(container).toMatchSnapshot();
    expect(screen.queryByText("male")).toBeNull();
    expect(screen.queryByText("female")).toBeNull();
    expect(screen.queryByText("business")).toBeNull();
    expect(screen.queryByText("personal")).toBeNull();
  });

  it("should render only 1 female and 1 personal filter chip", () => {
    const { container } = render(
      <FiltersChip
        contacts={[
          {
            id: "fm-1",
            gender: "female",
            mobile: "+43295834958345",
            name: "Jenny",
            type: "personal",
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
    expect(screen.queryByText("male")).toBeNull();
    expect(screen.getByText("1 female")).toBeTruthy();
    expect(screen.queryByText("business")).toBeNull();
    expect(screen.getByText("1 personal")).toBeTruthy();
  });

  it("should render 2 female, 1 personal and 1 business filter chip", () => {
    const { container } = render(
      <FiltersChip
        contacts={[
          {
            id: "fm-1",
            gender: "female",
            mobile: "+43295834958345",
            name: "Jenny",
            type: "personal",
          },
          {
            id: "fm-2",
            gender: "female",
            mobile: "+43295834958345",
            name: "Rupa",
            type: "business",
          },
        ]}
      />
    );
    expect(screen.queryByText("male")).toBeNull();
    expect(screen.getByText("2 female")).toBeTruthy();
    expect(screen.getByText("1 business")).toBeTruthy();
    expect(screen.getByText("1 personal")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
