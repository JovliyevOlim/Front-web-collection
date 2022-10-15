import {configureStore} from "@reduxjs/toolkit";
import api from "./AxiosApi";
import UserReducer from "./reducers/UserReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import CollectionReducer from "./reducers/CollectionReducer";
import AuthorReducer from "./reducers/AuthorReducer";
export default configureStore({
    reducer: {
        UserReducer,CategoryReducer,CollectionReducer,AuthorReducer
    },
    middleware: [api]
})
