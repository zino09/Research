import React, { useState } from 'react';
import axios from 'axios';

const CreateGroup = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/groups/create', { name, description }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Group created successfully');
    } catch (error) {
      alert('Error creating group');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Group Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Create Group</button>
    </form>
  );
};

export default CreateGroup;