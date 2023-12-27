import React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';

const Appointment = () => {
  const paperStyle = { padding: 20, width: 400, margin: '20px auto',backgroundColor: 'lightblue' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '20px 0' };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AssignmentIcon />
          </Avatar>
          <Typography variant="h5">Appointment Form</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" placeholder="Enter your name" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Gender" placeholder="Enter your gender" type="text" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Age" placeholder="Enter your age" type="number" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Mobile" placeholder="Enter your mobile number" type="tel" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" placeholder="Enter your email" type="email" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Student ID" placeholder="Enter your student ID" type="text" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Student Name" placeholder="Enter your student name" type="text" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Student Department" placeholder="Enter your student department" type="text" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Purpose of Visit" placeholder="Enter the purpose of your visit" type="text" fullWidth height='500%' />
          </Grid>
          <Grid item xs={12}>
            <TextField  type="datetime-local" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Attachment/File Upload"
              type="file"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="I agree to the terms and conditions" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Appointment;