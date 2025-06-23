// components/ArtistCard.tsx
type Artist = {
  name: string;
  category: string;
  price: string;
  location: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="border rounded-md shadow hover:shadow-lg transition p-4">
      <h3 className="text-lg font-semibold">{artist.name}</h3>
      <p className="text-sm text-gray-600">{artist.category}</p>
      <p className="text-sm text-gray-600">{artist.location}</p>
      <p className="text-sm text-gray-800 font-medium">Price: {artist.price}</p>
      <button className="mt-4 bg-black text-white py-1 px-4 rounded hover:bg-gray-800">
        Ask for Quote
      </button>
    </div>
  );
}
