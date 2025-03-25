import { FC, useState, useCallback } from 'react';
import { ColorInput } from 'Components/ColorInput/ColorInput';

interface ColorFormProps {
  saveColor: (colorName: string, colorHex: string) => void;
  colors: { colorName: string; colorHex: string }[];
}

export const ColorForm: FC<ColorFormProps> = ({ saveColor, colors }) => {
  const [colorName, setColorName] = useState('');
  const [colorHex, setColorHex] = useState('');
  const [hexError, setHexError] = useState('');

  const validateHex = useCallback((hex: string): boolean => {
    const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
    return hexRegex.test(hex);
  }, []);

  const handleSave = useCallback(() => {
    if (!colorName.trim() || !colorHex.trim()) return;
    if (!validateHex(colorHex)) {
      setHexError('Invalid HEX code! Please enter a valid HEX color code (e.g., #000).');
      return;
    }

    const existingColor = colors.find((color) => color.colorHex?.toLowerCase() === colorHex?.toLowerCase());
    if (existingColor) {
      setHexError(`This HEX color code is already used for the color "${existingColor.colorName}".`);
      return;
    }

    setHexError('');
    saveColor(colorName, colorHex);
    setColorName('');
    setColorHex('');
  }, [colorName, colorHex, colors, saveColor, validateHex]);

  const isSaveDisabled = !colorName.trim() || !colorHex.trim() || !!hexError;

  const handleHexChange = (value: string) => {
    let inputValue = value.trim();
    if (inputValue && !inputValue.startsWith('#')) {
      inputValue = '#' + inputValue;
    }
    setColorHex(inputValue);
  };

  return (
    <>  <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col sm:flex-row gap-6 items-center">
      <div className="w-full mb-4">
        <ColorInput
          label="Color Name"
          value={colorName}
          onChange={setColorName}
          placeholder="Enter color name"
        />
      </div>
      <div className="w-full mb-4">
        <ColorInput
          label="HEX Code"
          value={colorHex}
          onChange={handleHexChange}
          placeholder="Enter HEX code"
        />
      </div>
      <button
        onClick={handleSave}
        disabled={isSaveDisabled}
        className={`px-6 mt-2 py-3 text-white rounded-lg shadow-md transition-all 
          ${isSaveDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:bg-gradient-to-l'}`}
      >
        Save
      </button>
    </div>
      <p className="mt-4 text-red-600 font-semibold text-center w-full">
        {hexError}
      </p></>
  );
};
