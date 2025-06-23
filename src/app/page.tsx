// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  const categories = [
    { title: "Singers", image: "/images/singer.jpg" },
    { title: "Dancers", image: "/images/dancer.jpg" },
    { title: "Speakers", image: "/images/speaker.jpg" },
    { title: "DJs", image: "/images/dj.jpg" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Artistly.com</h1>
        <p className="text-lg mb-6">
          Book Performers for Your Events with Ease
        </p>
        <Link
          href="/artists"
          className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition"
        >
          Explore Artists
        </Link>
      </section>

      {/* Category Section */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-center font-medium">{cat.title}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
