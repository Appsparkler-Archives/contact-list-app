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
  name: string;
  imgUrl: string;
  company?: string;
}

const contacts: IContact[] = [
  {
    name: "Ali Connors",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1671641797679-3b680a7d2109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    company: "SurveyHeart",
  },
];

function ContactList({ contacts }: { contacts: IContact[] }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {contacts.map((contact) => (
        <>
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
        </>
      ))}
    </List>
  );
}

describe("ContactList", () => {
  it("should take the correct snapshot when all information is available", () => {
    const component = renderer.create(<ContactList contacts={contacts} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
