import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ChromeReaderMode as ChromeReaderModeIcon,
  Edit as EditIcon,
} from "@mui/icons-material";

export function ContactListAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="h6">Jhon Smith</Typography>
            <Typography sx={{ color: "text.secondary" }} variant="subtitle1">
              SurveyHeart
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <IconButton aria-label="edit">
              <ChromeReaderModeIcon />
            </IconButton>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
