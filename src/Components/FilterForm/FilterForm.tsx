import { FC } from 'react';
import { motion } from 'framer-motion';
import { ColorInput } from 'Components/ColorInput/ColorInput';

interface FilterFormProps {
  filterName: string;
  setFilterName: (name: string) => void;
  filterHex: string;
  setFilterHex: (hex: string) => void;
  showFilters: boolean;
}

export const FilterForm: FC<FilterFormProps> = ({
  filterName,
  setFilterName,
  filterHex,
  setFilterHex,
  showFilters,
}) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: showFilters ? 'auto' : 0,
        opacity: showFilters ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden mt-6"
    >
      <div className="flex justify-between bg-white shadow-xl rounded-xl p-6 space-x-4 mb-10">
        <div className="flex flex-col w-1/2">
          <ColorInput
            label="Filter by name"
            value={filterName}
            onChange={setFilterName}
            placeholder="Enter filter name"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <ColorInput
            label="Filter by HEX"
            value={filterHex}
            onChange={setFilterHex}
            placeholder="Enter filter HEX"
          />
        </div>
      </div>
    </motion.div>
  );
};
