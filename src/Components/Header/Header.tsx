import { FC } from 'react';
import { Funnel } from 'lucide-react';
import { Flower } from 'lucide-react';

interface HeaderProps {
    showFilters: boolean;
    setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<HeaderProps> = ({ showFilters, setShowFilters }) => {
    return (
        <header className="w-full bg-gradient-to-r from-teal-400 via-yellow-400 to-pink-500 py-6 shadow-lg rounded-b-xl">
            <div className="flex justify-between items-center px-8">
                <div className="flex items-center gap-3">
                    <Flower size={32} className="text-white" />
                    <h1 className="text-4xl font-extrabold text-white tracking-wide leading-tight">
                        Spring Palette
                    </h1>
                </div>
                <button
                    onClick={() => setShowFilters((prev) => !prev)}
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500 to-pink-400 hover:from-yellow-600 hover:to-pink-500 text-white rounded-full shadow-md transition-all"
                >
                    <Funnel size={20} />
                    <span className="font-medium text-lg">
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </span>
                </button>
            </div>
        </header>
    );
};
