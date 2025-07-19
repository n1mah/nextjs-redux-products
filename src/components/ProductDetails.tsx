import type { ProductType } from '@/Types/product'

export default function ProductDetails({ product }: { product: ProductType }) {
    return (
        <div className="border rounded p-4 shadow hover:shadow-lg transition">
            {/*<img src={product.image} alt={product.name} className="w-full h-48 object-cover" />*/}
            <h3 className="mt-2 font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="mt-1 font-semibold">${product.price}</p>
            <p className="mt-1 text-sm">
                Sizes: {product.sizes.join(', ')} | Colors: {product.colors.join(', ')}
            </p>
        </div>
    )
}
