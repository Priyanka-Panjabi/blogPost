import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name:'article',
  initialState:{
    articles:[]
  },
  reducers:{
    getArticles(state,action){
      return {...state, articles: [...state.articles, ...action.payload]}
    }
  }
});

export {articleSlice};
export const {getArticles} = articleSlice.actions;
