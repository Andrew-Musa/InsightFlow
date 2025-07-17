import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { getComments, addComment } from '../mockData/mockApi';

export default function CollabDemo() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [user, setUser] = useState('DemoUser');

  const loadComments = async () => {
    const res = await getComments();
    setComments(res);
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleAdd = async () => {
    if (!text) return;
    await addComment({ user, context: 'general', text });
    setText('');
    loadComments();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Collaboration & Annotation
      </Typography>
      <Paper sx={{ mt: 2, p: 2 }}>
        <Typography variant="subtitle1">Comments</Typography>
        <List>
          {comments.map((c) => (
            <ListItem key={c.id}>
              <ListItemText primary={c.text} secondary={`${c.user} (${new Date(c.timestamp).toLocaleString()})`} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
          <TextField label="Name" value={user} onChange={e => setUser(e.target.value)} size="small" />
          <TextField label="Add a comment" value={text} onChange={e => setText(e.target.value)} size="small" sx={{ flex: 1 }} />
          <Button variant="contained" onClick={handleAdd}>Add</Button>
        </Box>
      </Paper>
    </Box>
  );
}
