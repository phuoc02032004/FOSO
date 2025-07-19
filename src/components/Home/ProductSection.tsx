import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ProductFilter from "../Product/ProductFilter";
import ProductList from "../Product/ProductList";
import { productData } from "@/mocks/product";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import { features } from "@/mocks/features";

const ProductSection: React.FC = () => {
  const [products, setProducts] = useState(productData);
  const [sortBy, setSortBy] = useState("Liên quan");

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption);
    let sortedProducts = [...products];
    if (sortOption === "Giá: Thấp → Cao") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Giá: Cao → Thấp") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="w-full py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <ProductFilter />
        </div>
        <div className="w-full lg:w-3/4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Danh sách sản phẩm
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Sắp xếp theo</span>
              <div className="flex items-center gap-3">
                {["Liên quan", "Bán chạy", "Mới nhất", "Nổi bật"].map(
                  (option) => (
                    <Button
                      key={option}
                      variant="outline"
                      className={cn(
                        "h-10 rounded-lg px-4 py-0 text-sm font-bold !bg-white",
                        "relative overflow-hidden",
                        sortBy === option
                          ? "!border-2 !border-blue-500 bg-white text-blue-500"
                          : "border-gray-300 bg-white text-gray-600"
                      )}
                      onClick={() => handleSortChange(option)}
                    >
                      {option}
                      {sortBy === option && (
                        <div className="absolute top-0 right-0 h-8 w-8">
                          <div
                            className="absolute inset-0 bg-blue-500"
                            style={{
                              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                            }}
                          ></div>
                          <Check
                            className="absolute left-3.5 bottom-3.5 h-3 w-3 text-white"
                            strokeWidth={3}
                          />
                        </div>
                      )}
                    </Button>
                  )
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "h-10 rounded-lg px-3 py-0 text-sm font-bold text-gray-600 !bg-white",
                        sortBy.startsWith("Giá:")
                          ? "border-2 border-blue-500 text-blue-500"
                          : "border-gray-300"
                      )}
                    >
                      {sortBy.startsWith("Giá:") ? sortBy : "Giá"}
                      <ChevronDown
                        className={cn(
                          "ml-2 h-4 w-4 transition-transform",
                          sortBy === "Giá: Cao → Thấp" ? "rotate-180" : ""
                        )}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => handleSortChange("Giá: Thấp → Cao")}
                    >
                      Giá: Thấp → Cao
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleSortChange("Giá: Cao → Thấp")}
                    >
                      Giá: Cao → Thấp
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <ProductList products={products} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-stretch items-stretch gap-8 py-10 px-0 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-row justify-center items-center gap-4 p-4 bg-white rounded-xl shadow-md flex-grow flex-1"
          >
            <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-epilogue font-bold text-base leading-tight text-gray-900">
                {feature.title}
              </h3>
              <p className="font-epilogue font-medium text-sm leading-snug text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
