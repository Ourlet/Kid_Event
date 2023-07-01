import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { AppBar, Toolbar, Typography, TextField, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useGlobalContext } from '../context'

const Navigation = () => {
    const { email, setEmail } = useGlobalContext()

    const subscribe = () => {
        axios
          .put("api/mailingList", {
            email,
          })
          .then((result) => {
            if (result.status === 200) {
              toast.success(result.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here


  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#ffffff' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Company
        </Typography>
        <form >
          <TextField
          onChange={(e) => {
            setEmail(e.target.value);
          }}
            id="newsletter-input"
            label="Subscribe to Newsletter"
            variant="outlined"
            size="small"
            type="email"
            required
          />
          <IconButton type="submit" aria-label="submit" onClick={subscribe} >
            <MailIcon />
          </IconButton>
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
