import { FC } from 'react';

interface ColorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const ColorInput: FC<ColorInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="p-4 border border-gray-300 rounded-lg shadow-md w-full sm:w-auto 
                   transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                   outline-none hover:border-gray-400"
      />
    </div>
  );
};
