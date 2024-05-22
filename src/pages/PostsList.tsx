import React, { useEffect, useState } from 'react';
import { getPosts } from '../components/auth/firebaseUtils';
import { Post } from '../assets/types';

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  console.log("📢[PostsList.tsx:6]: posts: ", posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          {post.photoURL && <img src={post.photoURL} alt={post.title} />}
        </div>
      ))}
    </div>
  );
};

export default PostsList;
