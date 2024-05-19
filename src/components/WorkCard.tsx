import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface WorkCardProps {
  image: string;
  title: string;
  description: string;
}

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '20px',
});

const WorkCard: React.FC<WorkCardProps> = ({ image, title, description }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default WorkCard;
