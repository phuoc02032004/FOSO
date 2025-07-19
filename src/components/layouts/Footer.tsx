import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50  pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 px-35 bg-[#E6F1FF]">
        <div className="flex flex-row items-center gap-4">
          <img
            src="/icons/store-icon.svg"
            alt="Store Icon"
            className="w-12 h-12"
          />
          <p className="font-epilogue font-medium text-2xl leading-tight text-gray-900">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </p>
        </div>
        <Button
          variant="outline"
          className="h-12 rounded-full px-6 py-0 text-base font-bold text-blue-700 !bg-white border-blue-700 flex items-center gap-2"
        >
          Xem ngay
          <img
            src="/icons/arrow-right-icon.svg"
            alt="Arrow Right"
            className="w-4 h-4"
          />
        </Button>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-blue-600 font-bold text-sm mb-2">
                VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
              </h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>Tax code: 0305094228</p>
                <p>Address: 13 Nghĩa Thục, Ward 05, District 5, Ho Chi Minh City, Viet Nam.</p>
                <p>Phone number: 0283.766.1607</p>
                <p>Opening hour: 08:00 - 22:00 from Mon - Fri</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-16 h-12 bg-blue-500 rounded flex items-center justify-center">
                <div className="text-white text-xs font-bold text-center">
                  <div className="flex items-center justify-center mb-1">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-[10px]">BỘ CÔNG THƯƠNG</div>
                </div>
              </div>
              <div className="ml-3 text-xs text-gray-600">
                <div className="font-semibold">BỘ THÔNG BÁO</div>
                <div>BỘ CÔNG THƯƠNG</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold text-lg mb-4">Sitemap</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Article</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cart</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">— Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cookie policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Delivery policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold text-lg mb-4">Download App</h4>
            <div className="space-y-3">
              <a href="#" className="block">
                <div className="bg-black text-white rounded-lg px-4 py-2 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                  <div className="text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="text-gray-300">Get it on</div>
                    <div className="font-semibold">Google Play Store</div>
                  </div>
                </div>
              </a>

              <a href="#" className="block">
                <div className="bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center space-x-3 hover:bg-blue-600 transition-colors">
                  <div className="text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.17 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="text-blue-100">Download From</div>
                    <div className="font-semibold">Apple App Store</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-end  space-x-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <img src="/images/vietnam.png" alt="" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="1.30029" width="39" height="39" rx="19.5" stroke="#013065"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5119 17.2309C19.7928 16.9901 20.2072 16.9901 20.4881 17.2309L27.4881 23.2309C27.8026 23.5004 27.839 23.9739 27.5695 24.2884C27.2999 24.6029 26.8264 24.6393 26.5119 24.3697L20 18.7881L13.4881 24.3697C13.1736 24.6393 12.7001 24.6029 12.4306 24.2884C12.161 23.9739 12.1974 23.5004 12.5119 23.2309L19.5119 17.2309Z" fill="#013065"/>
            </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;