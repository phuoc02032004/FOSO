import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import FilterIcon from '/images/filter/image.png'

interface ProductFilterProps {
}

const ProductFilter: React.FC<ProductFilterProps> = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['air-filter', 'fuel-filter', 'oil-filter']);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>('Dưới 100,000 đ');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(range === selectedPriceRange ? null : range);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleYearChange = (year: string) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const handleOriginChange = (origin: string) => {
    setSelectedOrigins((prev) =>
      prev.includes(origin) ? prev.filter((o) => o !== origin) : [...prev, origin]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSelectedBrands([]);
    setSelectedYears([]);
    setSelectedOrigins([]);
  };

  const productCategories = [
    { id: 'air-filter', name: 'Lọc gió Động cơ - Air Filter' },
    { id: 'fuel-filter', name: 'Lọc Nhiên Liệu - Fuel Filter' },
    { id: 'oil-filter', name: 'Bộ lọc dầu' },
    { id: 'piston-ring', name: 'Chưa phân loại' },
    { id: 'other', name: 'Khác' }
  ];

  const priceRanges = [
    'Dưới 100,000 đ',
    '100,000 đ - 300,000 đ',
    '300,000 đ - 500,000 đ',
    'Trên 500,000 đ',
  ];

  const brands = ['Asakashi', 'Bosch', 'Huyndai'];
  const years = ['2021', '2020', '2019', '2018'];
  const origins = ['Đức', 'Nhật Bản', 'Trung Quốc'];

  const CustomCheckbox = ({ 
    checked, 
    onChange, 
    id, 
    label, 
    count = 24 
  }: {
    checked: boolean;
    onChange: () => void;
    id: string;
    label: string;
    count?: number;
  }) => (
    <div className="flex items-center space-x-2 py-1">
      <div
        className={`w-4 h-4 border border-gray-300 rounded-sm flex items-center justify-center cursor-pointer ${
          checked ? 'bg-blue-500 border-blue-500' : 'bg-white'
        }`}
        onClick={onChange}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <label 
        htmlFor={id} 
        className="text-sm text-gray-700 cursor-pointer flex-1"
        onClick={onChange}
      >
        {label} <span className="text-gray-400">({count})</span>
      </label>
    </div>
  );

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
                  onChange={() => handleCategoryChange(category.id)}
                  label={category.name}
                  count={24}
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
                    "w-full justify-center !bg-transparent  text-sm font-normal text-gray-700 border-gray-200 rounded-sm",
                    selectedPriceRange === range && "bg-blue-500 text-black"
                  )}
                  onClick={() => handlePriceRangeChange(range)}
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
                  onChange={() => handleBrandChange(brand)}
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
                  onChange={() => handleYearChange(year)}
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
                  onChange={() => handleOriginChange(origin)}
                  label={origin}
                  count={24}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* <div className="p-4">
        <Button
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleResetFilters}
        >
          Đặt lại bộ lọc
        </Button>
      </div> */}
    </div>
  );
};

export default ProductFilter;