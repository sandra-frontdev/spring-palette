import { GetColorsResponse } from 'Interfaces/ColorsType';
import { FC, useEffect, useState } from 'react';
import { Header } from 'Components/Header';
import { ColorForm } from 'Components/ColorForm.tsx';
import { FilterForm } from 'Components/FilterForm';
import { ColorCard } from 'Components/ColorCard';
import { Footer } from 'Components/Footer/Footer';

interface HomeProps {
    getColors: () => void;
    colors: GetColorsResponse[];
    deleteColor: (id: string) => void;
    saveColor: (colorName: string, colorHex: string) => void;
}

export const Home: FC<HomeProps> = ({
    getColors,
    colors,
    deleteColor,
    saveColor,
}) => {
    const [filterName, setFilterName] = useState('');
    const [filterHex, setFilterHex] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        getColors();
    }, [getColors]);

    const filteredColors = colors.filter(
        (color) =>
            color.colorName?.toLowerCase().includes(filterName.toLowerCase()) &&
            color.colorHex?.toLowerCase().includes(filterHex.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-r from-blue-50 via-pink-100 to-yellow-100 min-h-screen py-10 px-6  flex-col min-h-screen flex">
            <Header showFilters={showFilters} setShowFilters={setShowFilters} />
            <div className="container mx-auto max-w-4xl mt-10">
                <ColorForm saveColor={saveColor} colors={colors} />
                <FilterForm
                    filterName={filterName}
                    setFilterName={setFilterName}
                    filterHex={filterHex}
                    setFilterHex={setFilterHex}
                    showFilters={showFilters}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    {filteredColors.length === 0 ? (
                        <p className="col-span-full text-center text-gray-600">
                            No colors match your filter.
                        </p>
                    ) : (
                        filteredColors.map((color: GetColorsResponse) => (
                            <ColorCard
                                key={color.id}
                                color={color}
                                deleteColor={deleteColor}
                            />
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};
