import { Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function HwStates() {
  const [myText, setMyText] = useState("");
  const [btnTxt, setBtnTxt] = useState("");
  const [toggleText, setToggleText] = useState(true);

  return (
    <div>
      <TextField value={myText} onChange={(e) => setMyText(e.target.value)} />
      <Button onClick={() => setBtnTxt(myText)}>Show text field text</Button>
      <Typography>{btnTxt}</Typography>
      <Divider />

      {toggleText && <Typography sx={{ mt: 5 }}>Hello</Typography>}

      <Button onClick={() => setToggleText((prev) => !prev)}>Show text</Button>

      <Divider />
    </div>
  );
}
