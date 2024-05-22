// CreatePost.tsx
import React, { useState } from 'react';
import { addPost } from '../components/auth/firebaseUtils';

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      await addPost(title, description, file);
      setTitle('');
      setDescription('');
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
