import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { AppBar, Toolbar, Typography, TextField, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useGlobalContext } from '../context'
import { useState } from "react";

const Navigation = () => {
    const { email, setEmail } = useGlobalContext()
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
      alert(email)
      console.log(email)
      setLoading(true);
      event.preventDefault(); 
      
      
      // Make the API call here
      axios
        .put("api/mailingList", {
          email,
        })
        .then((result) => {
          if (result.status === 200) {
            toast.success(result.data.message);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#ffffff' }}>
      <Toolbar>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1, color:'grey' }}>
          Kid Events
        </Typography>
        <form onSubmit={handleSubmit}>
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
          <IconButton type="submit" aria-label="submit"  >
            <MailIcon />
          </IconButton>
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
