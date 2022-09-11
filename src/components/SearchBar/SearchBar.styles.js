import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Tooltip } from '@mui/material';
import { tooltipClasses } from '@mui/material';

export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#F7F9FA",
    marginLeft: 0,
    border: "1px solid #1c1d1f",
    width: "100%",
    height: 48,
    color: "#8A8B8D",
  }));

//  const Searchx = tw.h1`
  

// `;


export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.common.black,
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 1, 1, 1),
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      fontSize: 14,
    },
  }));

export const SearchValue = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      maxWidth: '100%',
      backgroundColor: 'black',
      margin: 'auto',
      color: theme.palette.grey[900],
      borderRadius: 1,
      padding: 0,
    },
  }));