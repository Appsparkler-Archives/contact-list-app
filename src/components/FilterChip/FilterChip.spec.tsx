import { Box, Chip } from "@mui/material";
import { useMemo } from "react";
import { TFiltersFC } from "types/components/FilterChip";
import { reduceContactsToFiltersInfo } from "./reduceContactsToFiltersInfo";
import { render, screen } from "@testing-library/react";

const FiltersChip: TFiltersFC = ({ contacts }) => {
  const contactInfo = useMemo(
    () => reduceContactsToFiltersInfo(contacts),
    [contacts]
  );
  return (
    <Box
      display="flex"
      flexDirection={"row"}
      gap={2}
      justifyContent={"center"}
      p={2}
    >
      {contactInfo.map(({ count, type }) =>
        count > 0 ? (
          <Chip
            key={type}
            label={`${count} ${type}`}
            variant="outlined"
            size="small"
          />
        ) : null
      )}
    </Box>
  );
};

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
            gender: "female",
            mobile: "+43295834958345",
            name: "Jenny",
            type: "personal",
          },
          {
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
