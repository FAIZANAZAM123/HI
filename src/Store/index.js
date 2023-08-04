import {configureStore} from "@reduxjs/toolkit";
import Newsslice  from "./slices/NewsSlice";

const store=configureStore({
reducer:{

NEWS:Newsslice,

}



})
export default store;
