import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import kausik from './kausik.jpg';

const Students = () => {
  return (
    <center>
      <font face="Times New Roman" size="6"> <h3>Student Details:</h3></font>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          alt="Description of the image"
          height="300"
          image={kausik}
          title="Student Image"
          style={{ borderRadius: '50%' }}
        />
        <CardContent>
          <Typography variant="h6" color="black">
          <font face="Times New Roman" size="4">
            Name:  Kausik Turlapati
            Regd no: 2200030936
            Department: CSE(H)
            </font>
          </Typography>
        </CardContent>
      </Card>
    </center>
  );
}

export default Students;