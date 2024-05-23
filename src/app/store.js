import { configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export default configureStore({
    reducer:{
        uer:userReducer
    }
});

