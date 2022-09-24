import { createSlice } from '@reduxjs/toolkit';

export const wizardSlice = createSlice({
    name: 'wizard',
    initialState: {
        firstName: '',
        lastName: '',
        projectName: '',
        organization: '',
        whatInput: '',
        whyInput: '',
        whereInput: '',
        whenInput: '',
        whoInput: '',
        howInput: '',
        howMuchInput: '',
    },
    reducers: {
        updateProperty: (state, { payload }) => {
            state[payload.updateType] = payload.input;
        },
    },
});

export const { updateProperty } = wizardSlice.actions;

export default wizardSlice.reducer;
