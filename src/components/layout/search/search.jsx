import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { debouncedFunc, callService } from "../../../utility/common";
import "./search.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  border: "2px solid #000000",
  boxShadow: "0 0 10px #383838",
  backgroundColor: "rgba(255,255,255,0.73)",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    cursor: "pointer",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "60ch"
      }
    }
  }
}));

export const SearchUtil = () => {
  const [searchStr, setSearchStr] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchStr) {
      navigate("/articles", { state: { data: searchStr } });
      return;
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        autoFocus={true}
        placeholder="Search…"
        inputProps={{ "aria-label": "Search blogs" }}
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeyPress}
      />
    </Search>
  );
};
