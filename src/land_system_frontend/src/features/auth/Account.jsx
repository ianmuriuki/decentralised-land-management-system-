import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthClient } from '@dfinity/auth-client';
import { HttpAgent } from '@dfinity/agent';
// import { helcon_backend } from '../../../../declarations/helcon_backend';
let authClient;
const initializeAuthClient = async () => {
   if (!authClient) {
      authClient = await AuthClient.create();
   }
   return authClient;
};

export const getPrincipal = createAsyncThunk(
   'auth/getPrincipal',
   async (_, {  rejectWithValue }) => {
      try {
         const client = await initializeAuthClient();

         // Wrap the login in a Promise
         return new Promise((resolve, reject) => {
            client.login({
               onSuccess: async () => {
                  try {
                     const identity = client.getIdentity();
                     const principal = identity.getPrincipal().toString();

                     if (principal) {
                        //   dispatch(setPrincipal(principal));
                        resolve(principal);
                     } else {
                        reject(new Error('Principal is undefined'));
                     }
                  } catch (error) {
                     console.error("Error during login onSuccess callback:", error.message);
                     reject(new Error(error.message));
                  }
               },
               onError: (error) => {
                  console.error("Login failed:", error.message);
                  reject(new Error(error.message));
               }
            });
         });
      } catch (error) {
         console.error("Login caught error:", error.message);
         return rejectWithValue(error.message);
      }
   }
);

const accountSlice = createSlice({
   name: 'account',
   initialState: {
      principalData: {
         loading: false,
         message: '',
         principal: null
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getPrincipal.pending, (state) => {
            state.principalData.loading = true
         })
         .addCase(getPrincipal.fulfilled, (state, action) => {
            state.principalData.loading = false
            state.principalData.principal = action.payload
            localStorage.setItem('isLoggedIn', true);
         })
         .addCase(getPrincipal.rejected, (state, action) => {
            state.principalData.loading = false
            state.principalData.message = action.payload
         })
   }
})




export default accountSlice.reducer