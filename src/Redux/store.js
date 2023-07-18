import { combineReducers ,configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import categoriesReducer from './categoriesSlice';
import productsReducer from './productsSlice';
import cartReducer from './cart/cartSlice';
import hamburReducer from './HamburRedux/hamburSlice';

const reducers = combineReducers({

	categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
	hambur: hamburReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);


