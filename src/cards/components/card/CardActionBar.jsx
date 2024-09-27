import React from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCurrentUser } from "../../../users/providers/UserProvider";

export default function CardActionBar({
  cardId,
  ownerId,
  handleDelete,
  handleLike,
  handleEdit,
  isFavorite,
}) {
  const { user } = useCurrentUser();

  return (
    <div>
      {/* Edit Button */}
      {user && user.isBusiness && ownerId == user._id && (
        <IconButton onClick={() => handleEdit(cardId)}>
          <EditIcon />
        </IconButton>
      )}

      {/* Delete Button */}
      {user && (user.isAdmin || ownerId == user._id) && (
        <IconButton onClick={() => handleDelete(cardId)}>
          <DeleteIcon />
        </IconButton>
      )}

      {/* Like/Favorite Button */}
      {user && (
        <IconButton onClick={() => handleLike(cardId)}>
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      )}
    </div>
  );
}
