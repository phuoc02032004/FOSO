import React from "react";
import { cn } from "@/lib/utils";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
  id: string;
  label: string;
  count?: number;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  id,
  label,
  count = 24
}) => (
  <div className="flex items-center space-x-2 py-1">
    <label
      className="flex items-center space-x-2 cursor-pointer w-full"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div
        className={cn(
          'w-4 h-4 border border-gray-300 rounded-sm flex items-center justify-center transition-colors',
          'peer-checked:bg-blue-500 peer-checked:border-blue-500'
        )}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span className="text-sm text-gray-700 flex-1">
        {label} <span className="text-gray-400">({count})</span>
      </span>
    </label>
  </div>
);

export default CustomCheckbox;