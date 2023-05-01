import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { TContactListFC } from "types";

export const ContactList: TContactListFC = ({ contacts }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {contacts.map((contact) => (
        <React.Fragment key={contact.id}>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt={"Remy Sharp"} src={contact.imgUrl} />
            </ListItemAvatar>
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
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};
