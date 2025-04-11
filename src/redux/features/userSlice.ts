import { User } from '@/models/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User = {
  id: '',
  name: '',
  lastname: '',
  email: '',
  active: false,
  address: '',
  document: null,
  type_document: null,
  phone_number: null,
  avatar: null,
  roles_id: null,
  verified_at: null,
  updated_at: null,
  role: null,
  created_at: '',
  deleted_at: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
    setResetUser: (state) => {
      return initialState;
    },
  },
});

export const { setUser, setResetUser } = userSlice.actions;

export default userSlice.reducer;
