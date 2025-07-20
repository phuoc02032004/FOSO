import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import FilterIcon from '/images/filter/image.png';
import { productCategories } from '@/mocks/category';
import CustomCheckbox from '../ui/CustomCheckbox';

interface ProductFilterProps {
  selectedCategories: string[];
  selectedPriceRange: string | null;
  selectedBrands: string[];
  selectedYears: string[];
  selectedOrigins: string[];
  onCategoryChange: (categoryId: string) => void;
  onPriceRangeChange: (range: string) => void;
  onBrandChange: (brand: string) => void;
  onYearChange: (year: string) => void;
  onOriginChange: (origin: string) => void;
  onResetFilters: () => void;
}


const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedCategories,
  selectedPriceRange,
  selectedBrands,
  selectedYears,
  selectedOrigins,
  onCategoryChange,
  onPriceRangeChange,
  onBrandChange,
  onYearChange,
  onOriginChange,
  onResetFilters,
}) => {

  const priceRanges = [
    'Dưới 100,000 đ',
    '100,000 đ - 300,000 đ',
    '300,000 đ - 500,000 đ',
    '500,000 đ - 700,000 đ',
    'Trên 700,000 đ',
  ];

  const brands = ['Asakashi', 'Bosch', 'Huyndai'];
  const years = ['2021', '2020', '2019', '2018'];
  const origins = ['Đức', 'Nhật Bản', 'Trung Quốc'];

  return (
    <div className="w-full max-w-xs bg-white rounded-lg border border-gray-200">
      <div className="flex items-center space-x-2 p-4 border-b border-gray-100">
        <img src={FilterIcon} alt="icon filter" className='h-8'/>
        <h2 className="text-lg font-semibold text-blue-500">Bộ Lọc</h2>
      </div>

      <Accordion type="multiple" defaultValue={["category", "price", "brand", "year", "origin"]} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="text-base font-medium text-black !bg-white px-4">
            Danh mục sản phẩm
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-1">
              {productCategories.map((category) => (
                <CustomCheckbox
                  key={category.id}
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => onCategoryChange(category.id)}
                  label={category.name}
                  count={category.bestSellers?.length || 0}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-medium text-black !bg-white px-4">
            Khoảng giá
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-2">
              {priceRanges.map((range, index) => (
                <Button
                  key={index}
                  variant={selectedPriceRange === range ? "default" : "outline"}
                  className={cn(
                    "w-full justify-center !bg-transparent text-sm font-normal text-gray-700 border-gray-200 rounded-sm",
                    selectedPriceRange === range && "!bg-blue-500 !text-white"
                  )}
                  onClick={() => onPriceRangeChange(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="brand">
          <AccordionTrigger className="text-base font-medium text-black !bg-white px-4">
            Thương hiệu
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-1">
              {brands.map((brand, index) => (
                <CustomCheckbox
                  key={index}
                  id={`brand-${index}`}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandChange(brand)}
                  label={brand}
                  count={24}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="year">
          <AccordionTrigger className="text-base font-medium text-black !bg-white px-4">
            Năm sản xuất
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-1">
              {years.map((year, index) => (
                <CustomCheckbox
                  key={index}
                  id={`year-${index}`}
                  checked={selectedYears.includes(year)}
                  onChange={() => onYearChange(year)}
                  label={year}
                  count={24}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="origin">
          <AccordionTrigger className="text-base font-medium text-black !bg-white px-4">
            Xuất xứ
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-1">
              {origins.map((origin, index) => (
                <CustomCheckbox
                  key={index}
                  id={`origin-${index}`}
                  checked={selectedOrigins.includes(origin)}
                  onChange={() => onOriginChange(origin)}
                  label={origin}
                  count={24}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="p-4 border-t border-gray-100">
        <Button onClick={onResetFilters} className="w-full !bg-blue-500 text-white hover:bg-blue-600">
          Clear Filter
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;