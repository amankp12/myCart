import { configureStore, createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: [],
    cart:[]
}
const productSlicer = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts (state, action)
        {
           state.products= action.payload 
        },
        addCart (state, action)
        {
           state.cart.push(action.payload) 
        },
        removeCart (state, action)
        {
            state.cart= state.cart.filter((item)=>item.id!=action.payload.id)
        }
    }
})
export const { setProducts, addCart, removeCart } = productSlicer.actions;
const store = configureStore({
    reducer: {
     products:productSlicer.reducer   
    },
})
export default store;