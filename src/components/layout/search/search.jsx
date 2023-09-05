import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {debouncedFunc, callService} from "../../../utility/common"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  border: '2px solid #000000',
  boxShadow: '0 0 10px #383838',
  backgroundColor: alpha('#D1B3AA', 0.25),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
}));

export const SearchUtil = () => {

    const handleChange =(e)=>{
        callService("article",e.target.value)
    }
    const magic = debouncedFunc(handleChange)
  return(
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'Search blogs' }}
              onChange={(e)=>magic(e)}
            />
      </Search>
  )
}