import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppBar, Box, Dialog, IconButton, Toolbar } from "@mui/material";
import { Close } from "@mui/icons-material";
import { TDeleteContactDialogFC } from "types";

export const DeleteContactDialog: TDeleteContactDialogFC = ({
  contact,
  open,
  onClose,
  onDelete,
  onCancel,
}) => {
  const handleDelete: (
    idToDelete: string
  ) => React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
    (idToDelete) => () => {
      onDelete(idToDelete);
    },
    [onDelete]
  );
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
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
          color="primary"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          size="large"
          color="error"
          variant="contained"
          onClick={handleDelete(contact.id)}
        >
          Yes, delete
        </Button>
      </Box>
    </Dialog>
  );
};
