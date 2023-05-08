import { Box, Chip } from "@mui/material";
import { useMemo } from "react";
import { TFiltersFC } from "types/components/FilterChip";
import { reduceContactsToFiltersInfo } from "./reduceContactsToFiltersInfo";

export const FiltersChip: TFiltersFC = ({ contacts }) => {
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
            sx={{ backgroundColor: "background.paper" }}
          />
        ) : null
      )}
    </Box>
  );
};
