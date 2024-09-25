
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

export default function Logged() {
  return (
    <Tooltip title="Open settings">
      <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
        <Avatar alt="avatar" src="/images/avatar.png" />
      </IconButton>
    </Tooltip>
  );
}
