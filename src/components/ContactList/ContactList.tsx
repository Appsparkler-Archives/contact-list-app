import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { TContactListFC } from "types";

export const ContactList: TContactListFC = ({ contacts }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {contacts.map((contact) => (
        <React.Fragment key={contact.id}>
          <ListItem alignItems="center">
            <ListItemText
              primary={contact.name}
              secondary={
                contact.company && (
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {contact.company}
                  </Typography>
                )
              }
            />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};
