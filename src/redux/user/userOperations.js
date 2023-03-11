import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://640ca0c6a3e07380e8f931db.mockapi.io';

export const getUsers = createAsyncThunk(
  'users/all',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserById = createAsyncThunk(
  'user/single',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUserById = createAsyncThunk(
  'user/delete',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
