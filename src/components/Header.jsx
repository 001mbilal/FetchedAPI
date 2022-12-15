import React from "react";
import Button from "@mui/material/Button";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Button className="btn">
        <FormatBoldIcon className="bold" />
      </Button>
      <Button className="btn">
        <FormatItalicIcon className="italics" />
      </Button>
      <Button className="btn">Normal</Button>
    </>
  );
};
export default Header;
