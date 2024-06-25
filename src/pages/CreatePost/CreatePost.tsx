import React, { useState } from 'react';
import { addPost } from '../../components/auth/firebaseUtils';
import { Button, TextField, Typography, CircularProgress, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      setLoading(true);
      try {
        await addPost(title, description, file);
        setTitle('');
        setDescription('');
        setFile(null);
        setMessage('Post created successfully');
        setSeverity('success');
      } catch (error) {
        setMessage('Failed to create post');
        setSeverity('error');
      } finally {
        setLoading(false);
        setOpen(true);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Typography variant="h5">Create a New Post</Typography>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          fullWidth
          multiline
          rows={4}
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          required
          style={{ marginTop: '16px' }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Create Post'}
        </Button>
      </FormContainer>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreatePost;
