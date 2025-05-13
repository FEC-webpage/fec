import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function News() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold mb-6">News</h1>
        <p className="text-lg text-gray-400">Latest news and updates will appear here.</p>
      </main>
      <Footer />
    </div>
  );
} 