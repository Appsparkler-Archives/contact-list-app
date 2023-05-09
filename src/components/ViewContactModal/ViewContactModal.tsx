import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { FullScreenModalTransition } from "components/FullScreenModalTransition/FullScreenModalTransition";
import { Avatar, Box } from "@mui/material";
import {
  Business as BusinessIcon,
  Category as CategoryIcon,
  ChromeReaderMode as ChromeReaderModeIcon,
  Email as EmailIcon,
  Female as FemaleIcon,
  House as HouseIcon,
  Male as MaleIcon,
  PhoneAndroid as PhoneAndroidIcon,
} from "@mui/icons-material";
import { TContactInfoItem, TViewContactModalFC } from "types";
import { blue, pink } from "@mui/material/colors";

export const ViewContactModal: TViewContactModalFC = ({ contact }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <IconButton aria-label="read" color="primary" onClick={handleClickOpen}>
        <ChromeReaderModeIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={FullScreenModalTransition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              View Contact
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        <Box p={2} display={"flex"} flexDirection={"column"} gap={2}>
          <Avatar
            sx={{ bgcolor: contact.gender === "male" ? blue[500] : pink[500] }}
          >
            {contact.gender === "male" ? (
              <MaleIcon fontSize={"large"} />
            ) : (
              <FemaleIcon fontSize={"large"} />
            )}
          </Avatar>
          <Typography variant="h5"> {contact.name}</Typography>
          <InfoItem icon={<PhoneAndroidIcon />} info={contact.mobile} />
          <InfoItem icon={<EmailIcon />} info={contact.email} />
          <InfoItem icon={<HouseIcon />} info={contact.address} />
          <InfoItem icon={<BusinessIcon />} info={contact.company} />
          <InfoItem icon={<CategoryIcon />} info={contact.type} />
        </Box>
      </Dialog>
    </Box>
  );
};

const InfoItem: TContactInfoItem = ({ icon, info }) => {
  if (!info) return null;
  return (
    <Box display="flex" flexDirection={"row"} alignItems={"center"} gap={2}>
      {icon}
      <Typography variant="h6">{info}</Typography>
    </Box>
  );
};
