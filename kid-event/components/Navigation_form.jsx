import axios from "axios";
import { toast } from "react-toastify";
import { TextField, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useGlobalContext } from '../context'

const MailingList = () => {
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
  return (

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
  );
};

export default MailingList;