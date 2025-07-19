import React, { useState, useEffect } from "react";
import { ChevronRight, Menu, Star } from "lucide-react";
import newbieBadge from "/public/icons/newbie-badge.svg";
import phoneIcon from "/public/icons/phone.svg";
import smartphoneIcon from "/public/icons/smartphone.svg";
import searchIcon from "/public/icons/search.svg";
import cameraIcon from "/public/icons/camera.svg";
import cartIcon from "/public/icons/cart.svg";
import userIcon from "/public/icons/user.svg";
import support247Icon from "/public/icons/support-24-7.svg";
import freeShippingIcon from "/public/icons/free-shipping.svg";
import fastDeliveryIcon from "/public/icons/fast-delivery.svg";
import return30DayIcon from "/public/icons/return-30-day.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { productCategories } from "@/mocks/category";

const Navbar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    if (productCategories && productCategories.length > 0) {
      setActiveCategory(productCategories[0].id);
    }
  }, []);

  const activeCategoryData = productCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <header className="w-full bg-white pb-2">
      <div className="bg-gradient-to-r from-[#0d57c6] via-[#37cfff] to-[#0f5ed6] text-white text-sm">
        <div className="max-w-[1920px] mx-auto py-2 px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={newbieBadge} alt="Newbie Badge" className="w-5 h-5" />
            <span>
              Nhập mã <span className="font-bold text-[#FACA4A]">NEWBIE</span>{" "}
              giảm ngay 10% cho lần đầu mua hàng.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="tel:02837607607"
              className="flex items-center gap-1 !text-white"
            >
              <img src={phoneIcon} alt="Phone" className="w-4 h-4 mr-1" />
              Hotline:{" "}
              <div className="text-[#FACA4A] font-bold"> 0283 760 7607</div>
            </a>
            <a href="#" className="flex items-center !text-white">
              <img
                src={smartphoneIcon}
                alt="Smartphone"
                className="w-4 h-4 mr-1"
              />
              Tải ứng dụng
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <img src="/images/logo.png" alt="Sunfil Logo" className="h-16" />
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Tìm sản phẩm"
                  className="h-12 w-full rounded-full border-2 border-[#1A73E8] pl-6 pr-28 focus-visible:ring-[#1A73E8]/40"
                />
                <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center">
                  <div className="rounded-full h-10 w-10 !bg-transparent pt-2">
                    <img
                      src={cameraIcon}
                      alt="Search by image"
                      className="h-6 w-6 !bg-transparent"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="!rounded-full !bg-[#1A73E8] hover:!bg-blue-700 h-10 w-14 ml-1"
                  >
                    <img src={searchIcon} alt="Search" className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center">
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                </div>
                <span className="font-medium">VI</span>
              </div>

              <div className="flex items-center space-x-2 relative cursor-pointer">
                <img src={cartIcon} alt="Cart" className="w-9 h-9" />
                <span className="text-sm text-gray-800">Giỏ hàng</span>
                <div className="absolute -top-1.5 left-5 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold border-2 border-white">
                  12
                </div>
              </div>

              <div className="flex items-center space-x-2 cursor-pointer">
                <img src={userIcon} alt="Account" className="w-9 h-9" />
                <span className="text-sm text-gray-800">Tài khoản</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-800 ">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center space-x-2 !bg-[#0155C6] text-white px-6 rounded-md hover:bg-blue-700 transition-colors h-14">
                      <Menu className="w-5 h-5" />
                      <span className="font-medium">Danh Mục Sản Phẩm</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex w-[1000px] h-[500px] bg-white border">
                        <div className="w-[300px] bg-white p-4">
                          <ul className="space-y-1">
                            {productCategories.map((category) => (
                              <li
                                key={category.id}
                                onMouseEnter={() =>
                                  setActiveCategory(category.id)
                                }
                              >
                                <a
                                  href="#"
                                  className={cn(
                                    "flex items-center p-3 rounded-md text-sm transition-colors",
                                    activeCategory === category.id
                                      ? "bg-[#EBF5FF] text-[#0D57C6] font-semibold"
                                      : "hover:bg-[#EBF5FF]" 
                                  )}
                                >
                                  <img
                                    src={category.icon}
                                    alt={category.name}
                                    className="w-8 h-8 mr-3 object-contain"
                                  />
                                  <span>{category.name}</span>
                                  <ChevronRight
                                    className={cn(
                                      "h-4 w-4 ml-auto",
                                      activeCategory === category.id
                                        ? "text-[#0D57C6]"
                                        : "text-gray-400"
                                    )}
                                  />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex-1 p-6 bg-gray-50">
                          {activeCategoryData && (
                            <>
                              {activeCategoryData.subCategories.length > 0 && (
                                <div className="mb-6">
                                  <div className="grid grid-cols-3 gap-4">
                                    {activeCategoryData.subCategories.map(
                                      (sub, index) => (
                                        <a
                                          href="#"
                                          key={index}
                                          className="flex items-center p-3 rounded-md bg-white hover:bg-gray-100 border border-gray-200"
                                        >
                                          <img
                                            src={sub.image}
                                            alt={sub.name}
                                            className="w-10 h-10 mr-3 object-contain"
                                          />
                                          <span className="text-sm font-medium">
                                            {sub.name}
                                          </span>
                                        </a>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}

                              {activeCategoryData.bestSellers.length > 0 && (
                                <div className="border-t border-gray-200 pt-4">
                                  <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-bold text-lg">
                                      Sản Phẩm Bán Chạy
                                    </h3>
                                    <a
                                      href="#"
                                      className="text-sm text-blue-600 hover:underline flex items-center"
                                    >
                                      Xem tất cả{" "}
                                      <ChevronRight className="h-4 w-4 ml-1" />
                                    </a>
                                  </div>
                                  <div className="grid grid-cols-5 gap-4">
                                    {activeCategoryData.bestSellers.map(
                                      (product, index) => (
                                        <a
                                          href="#"
                                          key={index}
                                          className="block bg-white border rounded-lg p-2 text-left group transition-shadow hover:shadow-lg"
                                        >
                                          <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-28 object-contain mb-2 transition-transform group-hover:scale-105"
                                          />
                                          <div className="p-1">
                                            <p className="text-xs font-medium text-gray-800 h-8 overflow-hidden">
                                              {product.name}
                                            </p>
                                            <p className="font-bold text-red-600 text-sm mt-1">
                                              {product.price.toLocaleString(
                                                "vi-VN"
                                              )}{" "}
                                              đ
                                            </p>
                                            <div className="text-xs text-gray-500 mt-0.5">
                                              <span className="line-through">
                                                {product.originalPrice.toLocaleString(
                                                  "vi-VN"
                                                )}{" "}
                                                đ
                                              </span>
                                              <span className="text-red-600 font-semibold ml-2">
                                                {product.discount}
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <nav className="hidden lg:flex items-center space-x-6">
                <a
                  href="#"
                  className="flex items-center space-x-2 transition-colors"
                >
                  <span className="text-sm font-medium text-black">
                    Về Chúng Tôi
                  </span>
                </a>
                <a
                  href="#"
                  className="!text-black transition-colors text-sm font-medium"
                >
                  Bài Viết
                </a>
                <a
                  href="#"
                  className="!text-black transition-colors text-sm font-medium"
                >
                  Catalog
                </a>
                <a
                  href="#"
                  className="!text-black transition-colors text-sm font-medium"
                >
                  Liên Hệ
                </a>
              </nav>
            </div>

            <div className="hidden xl:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <img
                  src={support247Icon}
                  alt="Support 24/7"
                  className="w-6 h-6"
                />
                <span className="text-sm font-bold text-gray-800">
                  Hỗ trợ 24/7
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={freeShippingIcon}
                  alt="Free Shipping"
                  className="w-6 h-6"
                />
                <span className="text-sm font-bold text-gray-800">
                  Miễn Phí Vận Chuyển
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={fastDeliveryIcon}
                  alt="Fast Delivery"
                  className="w-6 h-6"
                />
                <span className="text-sm font-bold text-gray-800">
                  Giao Hàng Nhanh 2h
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={return30DayIcon}
                  alt="30 Day Return"
                  className="w-6 h-6"
                />
                <span className="text-sm font-bold text-gray-800">
                  30 Ngày Đổi Trả
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
