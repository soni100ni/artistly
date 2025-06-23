// components/FilterBlock.tsx
type FilterProps = {
  selectedCategory: string;
  selectedLocation: string;
  onCategoryChange: (value: string) => void;
  onLocationChange: (value: string) => void;
};

export default function FilterBlock({
  selectedCategory,
  selectedLocation,
  onCategoryChange,
  onLocationChange,
}: FilterProps) {
  const categories = ["All", "Singer", "Dancer", "Speaker", "DJ"];
  const locations = ["All", "Punjab", "Delhi", "Bangalore", "Pune"];

  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-center">
      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border px-4 py-2 rounded"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Location Filter */}
      <select
        value={selectedLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className="border px-4 py-2 rounded"
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
}
