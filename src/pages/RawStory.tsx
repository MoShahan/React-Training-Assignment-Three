import { Paper } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { StoryType } from "../types";
import "../styles/RawStory.css";

const RawStory = () => {
  const [isFormatted, setIsFormatted] = useState(false);
  const { state } = useLocation();
  const tempState = state as StoryType;
  const jsonStory = JSON.stringify(tempState);
  const formattedJsonStory = JSON.stringify(tempState, null, 3);
  function handleFormat() {
    setIsFormatted((prev) => !prev);
  }
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ color: "#CBCBCB" }}>RAW JSON format of the Story</h1>
          <button className="formatButton" onClick={handleFormat}>
            {isFormatted
              ? "Click here to UNFORMAT the Data"
              : "Click here to FORMAT the Data"}
          </button>
        </div>
        <hr />
        {isFormatted ? (
          <pre>
            <p style={{ color: "#C0C0C0" }}>{formattedJsonStory}</p>
          </pre>
        ) : (
          <p style={{ color: "#C0C0C0" }}>{jsonStory}</p>
        )}
      </Paper>
    </div>
  );
};

export default RawStory;
