import { bool, func } from 'prop-types';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContext,
    DialogActions,
    Button,
} from '@mui/material';

const CardDeleteDialog = ({ isDialogOpen, onDelete, onChangeDialog }) => {
    return (
        <Dialog
            open={isDialogOpen}
            onClose={onChangeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
        >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to delete this card?"}
            </DialogTitle>
            <DialogContent>
                <DialogContext id="alert-dialog-description">
                    This operation will completely delete the business card and everything it
                    contains from the database. The card will not be possible to restore afterwards.
                </DialogContext>
            </DialogContent>
            <DialogActions>
                <Button onClick={onChangeDialog} color="error">
                    Cancel
                </Button>
                <Button onClick={onDelete} autoFocus color="info">
                    Delete card
                </Button>
            </DialogActions>
        </Dialog>
    );
};

CardDeleteDialog.propTypes = {
    isDialogOpen: bool.isRequired,
    onChangeDialog: func.isRequired,
    onDelete: func.isRequired,
};

export default CardDeleteDialog;