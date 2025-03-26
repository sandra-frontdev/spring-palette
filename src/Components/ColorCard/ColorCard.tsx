import { FC, useState, useRef, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { Color } from 'Interfaces/ColorsType';

interface ColorCardProps {
  color: Color;
  deleteColor: (id: string) => void;
}

export const ColorCard: FC<ColorCardProps> = ({ color, deleteColor }) => {
  const colorNameRef = useRef<HTMLParagraphElement>(null);
  const colorHexRef = useRef<HTMLParagraphElement>(null);

  const [isTitleVisible, setTitleVisible] = useState(false);

  const checkEllipsis = (element: HTMLElement | null) => {
    if (element) {
      return element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
    }
    return false;
  };

  useEffect(() => {
    if (colorNameRef.current && colorHexRef.current) {
      setTitleVisible(checkEllipsis(colorNameRef.current) || checkEllipsis(colorHexRef.current));
    }
  }, [color]);

  return (
    <div className="flex flex-col items-center bg-white shadow-xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
      <div
        className="w-full h-24 relative flex items-center justify-center"
        style={{ backgroundColor: color.colorHex }}
      >
        <p
          ref={colorHexRef}
          className="text-white font-semibold text-lg drop-shadow-lg"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          {color.colorHex}
        </p>
      </div>
      <div
        className="w-full text-center py-2 pl-4 pr-4"
        style={{ backgroundColor: color.colorHex }}
      >
        <p
          ref={colorNameRef}
          className="text-white font-bold text-xl mt-2 capitalize truncate w-full"
          style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)' }}
          title={isTitleVisible ? color.colorName : ''}
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
