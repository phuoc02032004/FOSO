import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { productData } from "@/mocks/product";
import ProductCard from "../Product/ProductCard";

const HeroSection = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative flex items-center">
        <img
          src="/images/image.png"
          alt="banner"
          className="w-full h-auto"
        />

        <div className="absolute inset-0 flex items-center px-8 py-6">
          <div className="flex-1 z-10">
            <div className="-ml-8 w-fit bg-gradient-to-r from-[#FFEFB7] to-[#FFC42C] pl-8 pr-10 py-2 mb-6 shadow-md rounded-r-full">
              <span className="text-[#7A0916] text-base font-extrabold tracking-wider uppercase leading-none">
                MỚI CỰC HOT!
              </span>
            </div>

            <h1
              className="text-white !text-6xl font-extrabold mb-4 leading-tight uppercase font-epilogue"
              style={{
                WebkitTextStroke: "4px #0D57C6",
                color: "white",
              }}
            >
              TẢI APP NHẬN QUÀ
            </h1>

            <div className="text-[#FFD666] text-3xl space-y-1">
              <p>Tích điểm ngay trên app <span className="font-bold">SUNFIL1</span></p>
              <p className="text-lg italic">*100K = 10 điểm</p>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center relative">
            <img
              src="/images/other/test.png"
              alt=""
              className="h-110 w-220 absolute left-8"
            />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="p-12 bg-[#0D57C6]">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {productData.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/5 pl-4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 h-10 w-10 !bg-[#CDE4FE] !text-[#013065] !rounded-full" />
          <CarouselNext className="-right-4 h-10 w-10 !bg-[#CDE4FE] !text-[#013065] !rounded-full" />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
