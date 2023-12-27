import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const StudentCard = ({ studentData }) => {
  const {Name, name, phoneNumber,email,Relationship,StudentId, IDNO, imageSrc } = studentData;

  return (
    <Card sx={{ display: 'flex', maxWidth: 345 }}>
      <CardMedia sx={{ width: 150, height: 300, flexShrink: 0 }} image={imageSrc} title={name} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Ph no:</strong> {phoneNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>ID NO:</strong> {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>ID NO:</strong> {IDNO}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>ID NO:</strong> {Relationship}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>ID NO:</strong> {StudentId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>ID NO:</strong> {IDNO}
        </Typography>
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">View More</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default StudentCard;