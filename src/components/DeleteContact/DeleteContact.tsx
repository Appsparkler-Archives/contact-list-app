import * as React from "react";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { DeleteContactDialog } from "./DeleteContactDialog";
import { TDeleteContactDialogProps, TDeleteContactModalFC } from "types";
import { Delete as DeleteIcon } from "@mui/icons-material";

export const DeleteContact: TDeleteContactModalFC = ({ contact, onDelete }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleDelete = React.useCallback<TDeleteContactDialogProps["onDelete"]>(
    (contactIdToDelete) => {
      handleClose();
      onDelete(contactIdToDelete);
    },
    [onDelete]
  );

  return (
    <div>
      <IconButton aria-label="delete" color="warning" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DeleteContactDialog
          open={open}
          contact={contact}
          onClose={handleClose}
          onDelete={handleDelete}
          onCancel={handleClose}
        />
      </Modal>
    </div>
  );
};
