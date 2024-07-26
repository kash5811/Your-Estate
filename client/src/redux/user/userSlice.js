import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: null ,
    error: null,
    loading: false,

};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state , action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;

        },
        signInFailure: (state , action) =>{
            state.error = action.payload;
            state.loading = false;

        },

        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state , action) => {
            state.currentUser = action.payload;
            state.loading = true;
            state.error = null;

        },
        updateUserFailure: (state , action) =>{
            state.payload =action.payload;
            state.loading = false;
        },

        deleteUserSuccess: (state) => {
            state.currentUser = null ;
            state.loading = false;
            state.error = null;

        },

        deleteUserFailure: (state , action) => {
            state.error = action.payload;
            state.loading  = false;

        },

        deleteUserStart : (state) => {
            state.loading = true;

                },

                signOutUserSuccess: (state) => {
                    state.currentUser = null ;
                    state.loading = false;
                    state.error = null;
        
                },
        
                signOutUserFailure: (state , action) => {
                    state.error = action.payload;
                    state.loading  = false;
        
                },
        
                signOutUserStart : (state) => {
                    state.loading = true;
        
                        },
        

    },
});

export const {signInFailure , signInSuccess , signInStart , updateUserStart , updateUserSuccess , updateUserFailure ,
    deleteUserSuccess , deleteUserFailure , deleteUserStart ,
    signOutUserFailure , signOutUserSuccess , signOutUserStart
} = userSlice.actions;

export default userSlice.reducer; 
