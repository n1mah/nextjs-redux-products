'use client'

import OptionsSelector from '@/components/OptionsSelector'
import ProductDetails from '@/components/ProductDetails'
import { useAppSelector } from '@/store/hooks'
import { selectFilteredProducts } from '@/store/selectors'

export default function ProductsPage() {
    const filteredProducts = useAppSelector(selectFilteredProducts)

    return (
        <main className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Products</h1>
            <OptionsSelector />
            {filteredProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductDetails key={product.id} product={product} />
                    ))}
                </div>
            )}
        </main>
    )
}
