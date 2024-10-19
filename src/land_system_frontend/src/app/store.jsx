import { configureStore } from '@reduxjs/toolkit';
import accountSlice from '../features/auth/Account'
export const store = configureStore({
   reducer: {
     account:accountSlice
   }})
   export default store