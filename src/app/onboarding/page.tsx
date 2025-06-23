import ArtistForm from "@/components/ArtistForm";

export default function OnboardingPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Artist Onboarding</h1>
      <ArtistForm />
    </main>
  );
}
