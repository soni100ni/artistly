'use client';

import { useEffect, useState } from "react";
import DashboardTable from "@/components/DashboardTable";

type Artist = {
  name: string;
  category: string;
  price: string;
  location: string;
};

export default function DashboardPage() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Manager Dashboard</h1>
      <DashboardTable artists={artists} />
    </main>
  );
}
