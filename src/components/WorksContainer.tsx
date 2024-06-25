import { useEffect, useState } from 'react';
import WorkCard from './WorkCard';
import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';
import { getPosts } from '../components/auth/firebaseUtils';
import { Post } from '../assets/types';

function WorksContainer() {

  const WorksContainer = styled(Container)({
    padding: '20px 0',
    justifyContent: 'center'
  });

  const [posts, setPosts] = useState<Post[]>([]);
  const fetchPosts = async () => {
    const fetchedPosts = await getPosts();
     setPosts(fetchedPosts);
  };

  useEffect(() => {


    fetchPosts();
  }, [ ]);

  return (
    <WorksContainer>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WorkCard
              image={post.photoURL}
              title={post.title}
              description={post.description}
            />
          </Grid>
        ))}
      </Grid>
    </WorksContainer>
  );
}

export default WorksContainer;
