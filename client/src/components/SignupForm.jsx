import { useState } from "react";

// Material UI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const updateName = (evt) => {
      setName(evt.target.value);
    }

    const updateEmail = (evt) => {
      setEmail(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        fetch ("/signup", {
          method: "POST",
          headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: name,
              email_address: email
          })
        })
        setName("");
        setEmail("");
        console.log(evt);
    };

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={name}
                    onChange={updateName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email_address"
                    label="Email Address"
                    name="email_address"
                    autoComplete="email"
                    value={email}
                    onChange={updateEmail}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    )
}

export default SignupForm;