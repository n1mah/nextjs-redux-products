'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setSize, setColor } from '@/store/filtersSlice'

const allSizes = ['S', 'M', 'L', 'XL']
const allColors = ['Red', 'Blue', 'Green', 'Black']

export default function OptionsSelector() {
    const dispatch = useAppDispatch()
    const selectedSize = useAppSelector((state) => state.filters.size)
    const selectedColor = useAppSelector((state) => state.filters.color)

    return (
        <div className="flex gap-4 my-4">
            <select
                value={selectedSize ?? ''}
                onChange={(e) => dispatch(setSize(e.target.value || null))}
                className="border p-2 rounded"
            >
                <option value="">All Sizes</option>
                {allSizes.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>

            <select
                value={selectedColor ?? ''}
                onChange={(e) => dispatch(setColor(e.target.value || null))}
                className="border p-2 rounded"
            >
                <option value="">All Colors</option>
                {allColors.map((color) => (
                    <option key={color} value={color}>
                        {color}
                    </option>
                ))}
            </select>
        </div>
    )
}
