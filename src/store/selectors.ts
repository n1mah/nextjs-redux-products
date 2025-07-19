import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './index';

export const selectProducts = (state: RootState) => state.products;
export const selectFilters = (state: RootState) => state.filters;

export const selectFilteredProducts = createSelector(
    [selectProducts, selectFilters],
    (products, filters) => {
        const { size, color } = filters;
        return products.filter((product) => {
            const matchSize = size ? product.sizes.includes(size) : true;
            const matchColor = color ? product.colors.includes(color) : true;
            return matchSize && matchColor;
        });
    }
);
