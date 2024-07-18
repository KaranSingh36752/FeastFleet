import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }

});
export default store;




// /**
//  * Create store 
//  *  - configureStore  - rtx
//  * 
//  * provide my store to app
//  *  - >provider store = {store} - react-redux
//  * 
//  * Slice 
//  *  -RTK - createSlice({
//  *     name : "",
//  *     initial state: 
//  *     reducers: {
//  *          add : ( state , action ) => { state.items = action .payload}
//  * }
//  * })
//  * 
//  * export  const {addItem, removeItem} = cartSlice.actions ;
//    export default cartSlice.reducer;

//    put That Slice into Store
//       -{
//         reducer: {
//             cart : cartSlice.reducer
//             user : userSlice  
//         }
//       }

// */
