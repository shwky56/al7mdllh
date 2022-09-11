 import { Search, SearchIconWrapper, SearchValue, StyledInputBase } from "./SearchBar.styles"
 import SearchIcon from "@mui/icons-material/Search";
import { Tooltip } from "@mui/material";
import TooltipCard from './TooltipCard/TooltipCard';
import { useContext, useState } from "react";
import { DataContext } from '../../App';


export const SearchBar = ({placeholder}) => {
  const [valuee, setValue] = useState("");
  const handleChange = (e)=> {
    setValue(e.target.value)
    console.log(e.target.value)
  }
  return (
      <Search>
        
            <SearchIconWrapper >
              <SearchIcon sx={{ fontSize: 24 }} /> 
            </SearchIconWrapper>
            <SearchValue
           
              title={<TooltipCard withoutPadding={ false } value={valuee}/>}
            placement="bottom-start"
            
         >
              <StyledInputBase
                inputProps={{ "udemy-seach": "search" }}
                placeholder={placeholder}
                onChange={(e) =>handleChange(e)} 
              />
        </SearchValue>
      </Search>
    
  );
}

