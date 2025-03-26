import { FC, useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { Color } from 'Interfaces/ColorsType';
import { Header } from 'Components/Header';
import { FilterForm } from 'Components/FilterForm';
import { ColorCard } from 'Components/ColorCard';
import { Footer } from 'Components/Footer/Footer';
import { ColorForm } from 'Components/ColorForm';

interface HomeProps {
  getColors: () => void;
  colors: Color[];
  deleteColor: (id: string) => void;
  saveColor: (colorName: string, colorHex: string) => void;
  loading: boolean;
  error: string | undefined;
}

export const Home: FC<HomeProps> = ({
  getColors,
  colors,
  deleteColor,
  saveColor,
  loading,
  error,
}) => {
  const [filterName, setFilterName] = useState('');
  const [filterHex, setFilterHex] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const [debouncedFilters, setDebouncedFilters] = useState({
    filterName: '',
    filterHex: '',
  });

  const nameDebounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const hexDebounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    getColors();
  }, [getColors]);

  // Debounced filters using useCallback and useEffect
  const setDebouncedFilter = useCallback(
    (filterType: 'filterName' | 'filterHex', value: string) => {
      const timeout =
        filterType === 'filterName' ? nameDebounceTimeout : hexDebounceTimeout;
      if (timeout.current) clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        setDebouncedFilters((prev) => ({
          ...prev,
          [filterType]: value,
        }));
      }, 300);
    },
    []
  );

  useEffect(() => {
    setDebouncedFilter('filterName', filterName);
  }, [filterName, setDebouncedFilter]);

  useEffect(() => {
    setDebouncedFilter('filterHex', filterHex);
  }, [filterHex, setDebouncedFilter]);

  // Filtered colors with useMemo to optimize recalculations
  const filteredColors = useMemo(() => {
    return colors.filter(
      (color) =>
        color.colorName
          ?.toLowerCase()
          .includes(debouncedFilters.filterName.toLowerCase()) &&
        color.colorHex
          ?.toLowerCase()
          .includes(debouncedFilters.filterHex.toLowerCase())
    );
  }, [colors, debouncedFilters]);

  return (
    <div className="bg-gradient-to-r from-blue-50 via-pink-100 to-yellow-100 min-h-screen py-5 px-6 flex-col min-h-screen flex">
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

        {error && (
          <div className="bg-red-100 text-red-700 border border-red-500 px-4 py-3 rounded-md text-center mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-teal-500 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {filteredColors.length === 0 ? (
              <p className="col-span-full text-center text-gray-600">
                No colors match your filter.
              </p>
            ) : (
              filteredColors.map((color: Color) => (
                <ColorCard
                  key={color.id}
                  color={color}
                  deleteColor={deleteColor}
                />
              ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
