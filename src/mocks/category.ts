import type { Category } from '@/types/Category';

export const productCategories: Category[] = [
  {
    id: 'bo-loc-dau',
    name: 'Bộ Lọc Dầu',
    icon: '/images/bo_loc_dau.png', 
    subCategories: [
      { name: 'Bộ lọc gió', image: '/images/bo_loc_gio.png' },
      { name: 'Bộ lọc gió', image: '/images/bo_loc_gio.png' },
      { name: 'Bộ lọc gió', image: '/images/bo_loc_gio.png' },
      { name: 'Bộ lọc gió', image: '/images/bo_loc_gio.png' },
      { name: 'Bộ lọc gió', image: '/images/bo_loc_gio.png' },
      { name: 'Bộ lọc gió', image: '/images/bo_loc_gio.png' },
    ],
    bestSellers: [
      {
        name: 'Lọc gió động cơ Air Filter - Chevrolet Co...',
        image: '/images/products/product1.png',
        price: 299000,
        originalPrice: 329000,
        discount: '-10%',
      },
      {
        name: 'Lọc gió động cơ Air Filter - Chevrolet Co...',
        image: '/images/products/product2.png',
        price: 299000,
        originalPrice: 329000,
        discount: '-10%',
      },
      {
        name: 'Lọc gió động cơ Air Filter - Chevrolet Co...',
        image: '/images/products/product3.png',
        price: 299000,
        originalPrice: 329000,
        discount: '-10%',
      },
       {
        name: 'Lọc gió động cơ Air Filter - Chevrolet Co...',
        image: '/images/products/product4.png',
        price: 299000,
        originalPrice: 329000,
        discount: '-10%',
      },
       {
        name: 'Lọc gió động cơ Air Filter - Chevrolet Co...',
        image: '/images/products/product5.png',
        price: 299000,
        originalPrice: 329000,
        discount: '-10%',
      },
    ]
  },
  {
    id: 'bo-loc-khong-khi',
    name: 'Bộ Lọc Không Khí',
    icon: '/images/bo_loc_khong_khi.png',
    subCategories: [
      { name: 'Lọc gió điều hòa', image: '/images/bo_loc_gio.png' },
      { name: 'Lọc gió động cơ', image: '/images/bo_loc_gio.png' },
    ],
    bestSellers: [
       {
        name: 'Lọc gió động cơ Air Filter - Hyundai...',
        image: '/images/products/product-4.png',
        price: 199000,
        originalPrice: 250000,
        discount: '-20%',
      },
    ]
  },
  {
    id: 'bo-loc-nhien-lieu',
    name: 'Bộ Lọc Nhiên Liệu',
    icon: '/images/bo_loc_nhien_lieu.png',
    subCategories: [
      { name: 'Lọc xăng', image: '/images/air-filter-panel.png' },
      { name: 'Lọc dầu Diesel', image: '/images/air-filter-panel.png' },
    ],
    bestSellers: []
  },
  {
    id: 'bo-loc-trong-cabin-1',
    name: 'Bộ Lọc Trong Cabin',
    icon: '/images/bo_loc_trong_cabin.png',
    subCategories: [],
    bestSellers: []
  },
    {
    id: 'bo-loc-khong-khi-2',
    name: 'Bộ Lọc Không Khí',
    icon: '/images/bo_loc_khong_khi_2.png',
    subCategories: [],
    bestSellers: []
  },
    {
    id: 'bo-loc-trong-cabin-2',
    name: 'Bộ Lọc Trong Cabin',
    icon: '/images/bo_loc_trong_cabin_2.png',
    subCategories: [],
    bestSellers: []
  },
    {
    id: 'bo-loc-nhien-lieu-2',
    name: 'Bộ Lọc Nhiên Liệu',
    icon: '/images/bo_loc_nhien_lieu_2.png',
    subCategories: [],
    bestSellers: []
  },
    {
    id: 'bo-loc-khong-khi-3',
    name: 'Bộ Lọc Không Khí',
    icon: '/images/bo_loc_khong_khi_3.png',
    subCategories: [],
    bestSellers: []
  },
];