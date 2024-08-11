export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        userInfo: {},
    },
    reducers: {
        setUser: (state, action) => {
            state.isAuthenticated = true;
            state.userInfo = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userInfo = {};
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
