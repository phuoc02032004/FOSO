import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { formatVND } from '@/utils/formatVND'
import { type Product } from '@/types/Product'

interface ProductCardProps {
  product: Product
}

const ProductCard : React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='p-1 group'>
      <Card className='rounded-lg overflow-hidden shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,158,171,0.2)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.18),0px_0px_2px_0px_rgba(145,158,171,0.28)] hover:shadow-2xl'>
        <CardContent className='flex flex-col p-4'>
          <div className='relative overflow-hidden rounded-lg p-2'>
            <img src={product.image} alt={product.name} className='w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-md' />
          </div>
          <div className='mt-4'>
            <div className='inline-flex items-center gap-[6px] px-[10px] py-[2px] rounded-full bg-gradient-to-r from-[#FFD666] to-[#FFAB00]'>
              <img src='/images/gia-cuc-soc-icon.svg' alt='icon' className='w-4 h-4' />
              <span className='text-sm font-semibold text-[#7A0916]'>Giá cực sốc</span>
            </div>
          </div>
          <h3 className='mt-4 text-base font-semibold text-[#1C252E] h-12 overflow-hidden'>{product.name}</h3>
          <div className='mt-2 flex-grow flex flex-col justify-end'>
            <div>
              <p className='text-[20px] font-normal text-[#B71D18]'>{formatVND(product.price)}</p>
              <div className='flex items-center gap-2'>
                {product.originalPrice && (
                  <p className='text-sm text-gray-500 line-through'>{formatVND(product.originalPrice)}</p>
                )}
                <p className='text-xs font-bold text-[#B71D18] bg-[rgba(0,184,217,0.08)] px-1 rounded-md'>{product.discount}</p>
              </div>
            </div>
          </div>
          <button className='mt-4 !bg-[#E6F1FF] text-[#025FCA] group-hover:!bg-[#025FCA] group-hover:text-white font-bold w-full h-12 rounded-lg transition-colors duration-300 ease-in-out'>
            Mua ngay
          </button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard