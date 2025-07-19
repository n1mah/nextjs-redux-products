import { createSlice } from '@reduxjs/toolkit'
import { products } from '@/data/products'
import type { ProductType } from '@/Types/product'

const initialState: ProductType[] = products

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
})

export default productsSlice.reducer
