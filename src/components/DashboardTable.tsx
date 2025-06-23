type Artist = {
  name: string;
  category: string;
  price: string;
  location: string;
};

export default function DashboardTable({ artists }: { artists: Artist[] }) {
  return (
    <div className="overflow-x-auto border rounded-md shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium">
              Category
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium">
              Location
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium">Fee</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {artists.map((artist, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2">{artist.name}</td>
              <td className="px-4 py-2">{artist.category}</td>
              <td className="px-4 py-2">{artist.location}</td>
              <td className="px-4 py-2">{artist.price}</td>
              <td className="px-4 py-2">
                <button className="text-sm text-blue-600 hover:underline">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
