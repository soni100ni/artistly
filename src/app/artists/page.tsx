'use client';

import { useEffect, useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";

type Artist = {
  name: string;
  category: string;
  price: string;
  location: string;
};

export default function ArtistListingPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filtered, setFiltered] = useState<Artist[]>([]);
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");

  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let result = [...artists];

    if (category !== "All") {
      result = result.filter((a) => a.category === category);
    }

    if (location !== "All") {
      result = result.filter((a) => a.location === location);
    }

    setFiltered(result);
  }, [category, location, artists]);

  return (
    <main className="p-6 min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">All Artists</h1>

      {/* Filter Block */}
      <FilterBlock
        selectedCategory={category}
        selectedLocation={location}
        onCategoryChange={setCategory}
        onLocationChange={setLocation}
      />

      {/* Grid of Filtered Artists */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((artist, idx) => (
          <ArtistCard key={idx} artist={artist} />
        ))}
      </div>
    </main>
  );
}
