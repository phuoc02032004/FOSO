import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import ScrollToTopButton from '../../utils/ScrollToTopButton';
import imgFooter from '/images/footer.png'
import imgCongthuong from '/images/congthuong.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 px-8 md:px-16 lg:px-35 bg-[#E6F1FF]">
        <div className="flex flex-row items-center gap-4">
          <img
            src="/icons/store-icon.svg"
            alt="Store Icon"
            className="w-12 h-12"
          />
          <p className="font-epilogue font-medium text-xl md:text-2xl leading-tight text-gray-900">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </p>
        </div>
        <Button
          variant="outline"
          className="h-12 rounded-full px-6 py-0 text-base font-bold text-blue-700 !bg-white border-blue-700 flex items-center gap-2 hover:bg-blue-50"
        >
          Xem ngay
          <img
            src="/icons/arrow-right-icon.svg"
            alt="Arrow Right"
            className="w-4 h-4"
          />
        </Button>
      </div>

      <div
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${imgFooter})` }}
      >
        <div className="absolute inset-0 bg-opacity-40 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-[#013065] font-bold text-sm mb-4 uppercase tracking-wide">
                VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
              </h3>
              <div className="text-[#637381] text-sm space-y-2 leading-relaxed">
                <p>Tax code: 0305094228</p>
                <p>Address: 13 Nghĩa Thục, Ward 05, District 5, Ho Chi Minh City, Viet Nam.</p>
                <p>Phone number: 0283.766.1607</p>
                <p>Opening hour: 08:00 - 22:00 from Mon - Fri</p>
              </div>
              
              <div className="flex items-center mt-6">
                <a href="#" aria-label="Bộ Công Thương">
                  <img src={imgCongthuong} alt="Đã thông báo Bộ Công Thương" className="w-32 h-auto"/>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-6 text-[#013065]">Sitemap</h4>
                <ul className="space-y-3 text-[#637381] text-sm">
                  <li><a href="#" className="hover:text-white !text-[#637381] transition-colors duration-200">About</a></li>
                  <li><a href="#" className="hover:text-white !text-[#637381] transition-colors duration-200">Articles</a></li>
                  <li><a href="#" className="hover:text-white !text-[#637381] transition-colors duration-200">Cart</a></li>
                  <li><a href="#" className="hover:text-white !text-[#637381] transition-colors duration-200">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6 text-[#013065]">Legal</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li><a href="#" className="hover:text-white !text-[#637381] transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white !text-[#637381] transition-colors duration-200">Cookie policy</a></li>
                  <li><a href="#" className="hover:text-white !text-[#637381] transition-colors duration-200">Delivery policy</a></li>
                  <li><a href="#" className="hover:text-white !text-[#637381] transition-colors duration-200">FAQs</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6 text-[#013065]">Download App</h4>
                <div className="space-y-3 mb-6">
                  <a href="#" className="block">
                    <div className="bg-black bg-opacity-60 text-white rounded-lg px-4 py-3 flex items-center space-x-3 hover:bg-opacity-80 transition-all duration-200 border border-gray-600">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div>
                        <div className="text-xs text-gray-400">GET IT ON</div>
                        <div className="text-sm font-semibold">Google Play Store</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="block">
                    <div className="bg-blue-500 bg-opacity-60 text-white rounded-lg px-4 py-3 flex items-center space-x-3 hover:bg-opacity-80 transition-all duration-200 border border-gray-600">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.17 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                      </svg>
                      <div>
                        <div className="text-xs text-white">Download on the</div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="flex items-center !bg-transparent !justify-end space-x-2 hover:text-white !text-[#637381] transition-colors duration-200">
                    <img src="/images/vietnam.png" alt="Vietnam" className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-sm">VI</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
      </div>
    </footer>
  );
};

export default Footer;