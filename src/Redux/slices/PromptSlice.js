import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  reqPrompt: '',
  grade: '',
  slides: '',
  difficulty: '',
};

const PromptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    setForm: (state, action) => {
      const {reqPrompt, grade, slides, difficulty} = action.payload;
      return {...state, reqPrompt, grade, slides, difficulty};
    },
  },
});

export const {setForm} = PromptSlice.actions;
export default PromptSlice.reducer;
