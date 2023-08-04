import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchingnews = createAsyncThunk("NewsAPI", async (args, thunkAPI) => {
    try {
        const currentPage = thunkAPI.getState().NEWS.page;
        const category = thunkAPI.getState().NEWS.category;
        console.log(currentPage);
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=38d7295d563e4a38a4fdce0eb5b8bf91&page=${currentPage}&pagesize=10`)
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});
const Newsslice = createSlice({
    name: "news",
    initialState: {
        news: [],
        Original:[],
        loading: false,
        page: 1,
        totalsize: 0,

        error: null,
        category: ''
    },
    reducers: {
        nextpage(state) {
            if (state.page < Math.ceil(state.totalsize / 10)) {
                state.page += 1;
            }
        },
        previouspage(state) {
            if (state.page > 1) {
                state.page -= 1;
            }
        },
        categorizing(state, action) {
            state.category = action.payload;
            console.log(state.category);
        },
        searchbar(state, action){
            console.log(action.payload)
            if (action.payload !== '') {
                // Filtering the articles based on the search query
                let filteredArticles = state.Original.filter((article) => {
                    return (
                        (article.author && article.author.toLowerCase().includes(action.payload.toLowerCase())) ||
                        (article.title && article.title.toLowerCase().includes(action.payload.toLowerCase())) ||
                        (article.description && article.description.toLowerCase().includes(action.payload.toLowerCase()))
                    );
                });
                state.news.articles = filteredArticles;
            } else {
                // Reset the articles in the state to the original articles
                state.news.articles = [...state.Original];
            }
        }
        
     
        
        
        
        
        
        
        
    },
    extraReducers: {
        [fetchingnews.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchingnews.fulfilled]: (state, action) => {
            state.loading = false;
            state.news = action.payload;
            state.totalsize = state.news.totalResults;
            state.Original = state.news.articles.filter(article => article.urlToImage !== null);
            state.news.articles = state.Original;
        }
        
        ,
        [fetchingnews.rejected]: (state, action) => {
            state.loading = false;

            state.error = action.payload;

        }
    }
});

export default Newsslice.reducer;
export const { nextpage, previouspage, categorizing,searchbar } = Newsslice.actions;