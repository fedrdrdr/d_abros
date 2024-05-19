import WorkCard from './WorkCard';
import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';
import worksExample from '../assets/worksExample'

function WorksContainer() {

  const WorksContainer = styled(Container)({
    padding: '20px 0',
    justifyContent: 'center'
  });

  return (
    <WorksContainer>
      <Grid container spacing={2}>
        {worksExample.map((work, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WorkCard
              image={work.image}
              title={work.title}
              description={work.description}
            />
          </Grid>
        ))}
      </Grid>
    </WorksContainer>
  );
}

export default WorksContainer;
