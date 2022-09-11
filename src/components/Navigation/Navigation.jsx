import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar } from '@mui/material';
import { MenuButton } from '../Button/MenuButton/MenuButton';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { SearchBar } from '../SearchBar/SearchBar'
import LanguageIcon from "@mui/icons-material/Language";
import ButtonLink from '../Button/ButtonLink/ButtonLink';
import { Link } from 'react-router-dom';

export const Navigation = ({handleChange}) => {

  return (
    <Box sx={{ flexGrow: 5 }} >
        <AppBar 
            position="static"
            sx={{
            bgcolor: "background.paper",
            height: "7.2rem",
            px: "2.4rem",
            boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
            }}
        >
            <Toolbar
                disableGutters sx={{ my: "auto", gap: 1 }}
            >
                
                <Box>
                <Link to='/al7mdllh'>
                <img src="https://www.udemy.com//staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" />
                </Link>
                </Box>
                
                <MenuButton>
                   <span>Categories</span>
                </MenuButton>
                <Box sx={{ flexGrow: 1 }}>
                    <SearchBar 
                        placeholder="Search for anything"
                       
                    />
                </Box>
                <Box className='lg:hidden'>
                    <MenuButton class >
                        <span>Udemy Business</span>
                    </MenuButton>
                </Box>
                <Box className='md:hidden'>
                    <MenuButton>
                        <span>Teach on Udemy</span>
                    </MenuButton>
                </Box>
                <MenuButton>
                    <ShoppingCartOutlinedIcon sx={{ fontSize: 23 }} />
                </MenuButton>
                <ButtonLink
                    fontSize="1.4rem"
                    color="white"
                    height="4rem"
                    width="8rem"
                >
                    Log in
                </ButtonLink>
                <ButtonLink fontSize="1.4rem" height="4rem" width="8rem">
                    Sign up
                </ButtonLink>
                <ButtonLink color="white" height="4rem" width="4rem">
                     <LanguageIcon sx={{ fontSize: "2rem" }} />
                </ButtonLink>
            </Toolbar>
                
        </AppBar>
    </Box>
  )
}
