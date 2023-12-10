import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    isAutenticated: false,
    userName: '',
    userRol: ''
  },
  reducers: {
    login: (state, action) => {
      const userData = action.payload;
      state.isAutenticated = true;
      state.userName = userData.name;
      state.userRol = userData.rol;
    },
    logout: (state) => {
      state.isAutenticated = false;
      state.userName = '';
      state.userRol = '';
    }
  }
});

export const loginActions = authSlice.actions;
export const loginReducer = authSlice.reducer;
export default authSlice;