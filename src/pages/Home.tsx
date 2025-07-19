import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HeroSection from "@/components/Home/HeroSection";
import ProductSection from "@/components/Home/ProductSection";

const Home: React.FC = () => {
  return (
    <div className="text-black bg-gray-100 mx-auto px-8">
      <Breadcrumb>
        <BreadcrumbList className="py-4">
          <BreadcrumbItem>
            <BreadcrumbLink className="!text-gray-500" href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="!text-[#1A73E8]">
            <BreadcrumbPage>Sản phẩm</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <HeroSection />
      <ProductSection />
    </div>
  );
};

export default Home;
