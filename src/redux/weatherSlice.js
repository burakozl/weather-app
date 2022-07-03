import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchWeather = createAsyncThunk('weather/getweather',async(city) => {
    const res = await axios (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    return res.data;
});

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        items: [],
        status: 'idle',
        isApiGet: false,      
    },
    reducers: {},
    extraReducers: {
        [fetchWeather.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "successed";
            state.isApiGet = true;
        },
        [fetchWeather.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export default weatherSlice.reducer;