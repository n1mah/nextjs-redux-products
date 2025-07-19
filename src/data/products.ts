import {ProductType} from "@/Types/product";

export const products: ProductType[] = [
    {
        id: '1',
        name: 'T-Shirt',
        description: 'Comfortable cotton t-shirt',
        price: 20,
        image: '/images/tshirt.jpg',
        sizes: ['S', 'M', 'L'],
        colors: ['Red', 'Blue', 'Green'],
    },
    {
        id: '2',
        name: 'Jeans',
        description: 'Classic blue jeans',
        price: 50,
        image: '/images/jeans.jpg',
        sizes: ['M', 'L'],
        colors: ['Blue', 'Black'],
    },
    {
        id: '3',
        name: 'Hat',
        description: 'Stylish hat for sunny days',
        price: 15,
        image: '/images/hat.jpg',
        sizes: ['S', 'M'],
        colors: ['Red', 'Black'],
    },
]
