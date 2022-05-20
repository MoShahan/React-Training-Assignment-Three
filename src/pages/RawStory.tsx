import {  Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import { StoryType } from "../types";

const RawStory = () => {
  const { state } = useLocation();
  const tempState = state as StoryType;
  const jsonStr = JSON.stringify(tempState);
  return (
    <div>
      <Paper
        sx={{
          margin: "100px",
          padding: "50px",
          color: "white",
          bgcolor: "rgba(47,47,47,0.7)",
          wordWrap: "break-word",
        }}
        elevation={10}
      >
        <h1 style={{ color: "#979797" }}>RAW JSON format of the Story</h1>
        <hr />
        <p style={{ color: "#C0C0C0" }}>{jsonStr}</p>
      </Paper>
    </div>
  );
};

export default RawStory;
