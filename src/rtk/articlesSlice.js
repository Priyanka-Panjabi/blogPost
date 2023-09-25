import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name:'article',
  initialState:{
    articles:[]
  },
  reducers:{
    getArticles(state,action){
      console.log("Current State: getArtivle ",state,action)
      return {...state, articles: [...state.articles, ...action.payload]}
    },
    getSearchArticles(state,action){
      console.log("Current State: ",state,action)
      return {...state, articles: [...action.payload]}
    },
    clearArticles(state,action){
      console.log("Current State: clearArticle ",state,action)
      return {...state, articles: []}
    }
  }
});

export {articleSlice};
export const {getArticles, getSearchArticles, clearArticles} = articleSlice.actions;
