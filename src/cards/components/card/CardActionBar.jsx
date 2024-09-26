import React from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CardActionBar({
  cardId,
  handleDelete,
  handleLike,
  handleEdit,
  isFavorite, 
}) {
  return (
    <div>
      {/* Edit Button */}
      <IconButton onClick={() => handleEdit(cardId)}>
        <EditIcon />
      </IconButton>

      {/* Delete Button */}
      <IconButton onClick={() => handleDelete(cardId)}>
        <DeleteIcon />
      </IconButton>

      {/* Like/Favorite Button */}
      <IconButton onClick={() => handleLike(cardId)}>
        {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>
    </div>
  );
}
