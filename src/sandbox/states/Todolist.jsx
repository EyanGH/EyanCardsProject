import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";

export default function Todolist() {
  const [myList, setMyList] = useState([]);
  const [addTxt, setAddTxt] = useState("");

  const generateId = () => {
    return (
      new Date().getTime().toString() +
      Math.random().toString(36).substring(2, 9)
    );
  };

  const handleRemove = (idToRemove) => {
    setMyList((prev) => prev.filter((item) => item.id != idToRemove));
  };

  const handleCheckChange = (id, newCheckedStatus) => {
    setMyList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isComplete: newCheckedStatus } : item
      )
    );
  };

  console.log(myList);
  return (
    <div style={{ margin: "20px" }}>
      <TextField
        sx={{ mt: 5, width: "100%" }}
        label="Add a new task"
        value={addTxt}
        onChange={(e) => setAddTxt(e.target.value)}
        variant="outlined"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setMyList((prev) => [
              ...prev,
              { text: addTxt, id: generateId(), isComplete: false },
            ]);
            setAddTxt("");
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setMyList([])}
        >
          Clear
        </Button>
      </div>
      <List sx={{ mt: 3 }}>
        {myList.map((item) => (
          <ListItem key={item.id}>
            <Checkbox
              checked={item.isComplete}
              onChange={(e) => handleCheckChange(item.id, e.target.checked)}
            />
            <ListItemText
              primary={item.text}
              sx={{ textDecoration: item.isComplete ? "line-through" : "" }}
            />
            <ListItemButton onClick={() => handleRemove(item.id)}>
              delete
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
