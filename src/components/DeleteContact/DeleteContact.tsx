import { TDeleteContactModalFC } from "types";
import { Delete as DeleteIcon } from "@mui/icons-material";
import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppBar, Box, Dialog, IconButton, Toolbar } from "@mui/material";
import { Close } from "@mui/icons-material";
import { FullScreenModalTransition } from "components/FullScreenModalTransition/FullScreenModalTransition";

export const DeleteContact: TDeleteContactModalFC = ({ contact, onDelete }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> =
    React.useCallback(() => {
      handleClose();
      setTimeout(() => {
        onDelete(contact.id);
      }, 500);
    }, [contact, onDelete]);

  return (
    <Box>
      <IconButton aria-label="delete" color="warning" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={FullScreenModalTransition}
      >
        <AppBar position="static" sx={{ backgroundColor: "warning.main" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Delete Contact
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography p={2} gutterBottom variant="body1" component="div">
          Are you sure you want to delete <strong>{contact.name}</strong> from
          your contact list?
        </Typography>
        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent={"flex-end"}
          p={2}
          gap={2}
        >
          <Button
            size="large"
            variant="outlined"
            color="warning"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            size="large"
            color="warning"
            variant="contained"
            onClick={handleDelete}
          >
            Yes, delete
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};
