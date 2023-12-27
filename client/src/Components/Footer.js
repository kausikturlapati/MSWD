import React from 'react';

const Footer = () => {
    const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; 
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div>
      <h5 style={{ color: 'green' }}>{formattedDate} All rights reserved to KLEF</h5>
    </div>
  );
};

export default Footer;