import { FC } from 'react';
import { Funnel, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<HeaderProps> = ({ showFilters, setShowFilters }) => {
  return (
    <header className="w-full bg-gradient-to-r from-teal-400 via-yellow-400 to-pink-500 py-4 shadow-lg rounded-b-xl">
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-8 gap-3 sm:gap-0">
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-wide leading-tight text-center sm:text-left">
            Spring Palette
          </h1>
        </div>
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-500 to-pink-400 hover:from-yellow-600 hover:to-pink-500 text-white rounded-full shadow-md transition-all text-sm sm:text-lg"
        >
          {showFilters ? <SlidersHorizontal size={16} /> : <Funnel size={16} />}
          <span className="font-medium">
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </span>
        </button>
      </div>
    </header>
  );
};
