import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';
import '../styles/globals.css';

export default function Blogs() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020] via-[#08a6c2] to-[#0a1020] opacity-90"></div>
      <div className='relative z-10'>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-16">
        <section id="blog" className="py-12">
          <div className="glass card">
            <h2 className="text-3xl neon-text mb-6">Blog</h2>
            <BlogSection />
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
}