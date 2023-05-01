import renderer from "react-test-renderer";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface IContact {
  id: string;
  name: string;
  imgUrl: string;
  company?: string;
}

const contacts: IContact[] = [
  {
    id: "7cb1248c-983a-4207-a59f-40bfa1fae564",
    name: "Ali Connors",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1671641797679-3b680a7d2109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    company: "SurveyHeart",
  },
];

export function ContactList({ contacts }: { contacts: IContact[] }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {contacts.map((contact) => (
        <React.Fragment key={contact.id}>
          <ListItem alignItems="flex-start">
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
}
