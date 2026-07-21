import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name:'search',
    initialState:{
        query:'',
        activeTab:'photos',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
            state.query = action.payload
        },
        setActiveTab(state,action){
            state.activeTab = action.payload
        },
        setResults(state,action){
            state.results = action.payload
            state.loading = false
        },
        setLoading(state,action){
            state.loading = action.payload
            state.error = null
        },
        setError(state,action){
            state.error = action.payload
            state.loading = false
        },
        ClearResults(state){
            state.results = []
        }
    }
})

export const {
    setQuery,
    setLoading,
    setActiveTab,
    setResults,
    setError,
    ClearResults
} = SearchSlice.actions

export default SearchSlice.reducer