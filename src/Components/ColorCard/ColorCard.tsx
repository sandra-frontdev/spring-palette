import { FC } from 'react';
import { Trash2 } from 'lucide-react';
import { GetColorsResponse } from 'Interfaces/ColorsType';

interface ColorCardProps {
  color: GetColorsResponse;
  deleteColor: (id: string) => void;
}

export const ColorCard: FC<ColorCardProps> = ({ color, deleteColor }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 h-40">
      <div
        className="w-full h-24 relative flex items-center justify-center"
        style={{ backgroundColor: color.colorHex }}
      >
        <p
          className="text-white font-semibold text-lg drop-shadow-lg"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          {color.colorHex}
        </p>
      </div>
      <div
        className="w-full text-center py-2"
        style={{ backgroundColor: color.colorHex }}
      >
        <p
          className="text-white font-bold text-xl mt-2 capitalize"
          style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)' }}
        >
          {color.colorName}
        </p>
      </div>

      <div className="p-3 text-center">
        <button
          onClick={() => deleteColor(color.id)}
          className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition-all focus:outline-none"
          aria-label={`Delete color ${color.colorHex}`}
        >
          <Trash2 className="text-red-500" size={18} />
        </button>
      </div>
    </div>
  );
};
