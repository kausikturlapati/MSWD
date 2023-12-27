import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import klef from './klef.jpeg';
import { Avatar } from '@mui/material';

const pages = ['Home', 'Contactus', 'Counsollor', 'Login', 'Student', 'Visitor', 'Parent','Appointments'];

function Header() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
      <Avatar alt="Logo" src={klef} sx={{ width: 40, height: 40, marginRight: '8px' }} ></Avatar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Times roman',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          CVMS
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          {pages.map((page) => (
            <Button
              key={page}
              component={Link}
              to={`/${page.toLowerCase()}`}
              sx={{ mx: 1, color: 'white', textDecoration: 'none' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;