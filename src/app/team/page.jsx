import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';
import '../styles/globals.css';

export default function Team() {
    return (
        <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020] via-[#08a6c2] to-[#0a1020] opacity-90"></div>
            <div className="relative z-10">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center py-16 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <section id="team" className="py-12">
                    <div className="glass card">
                        <h2 className="text-4xl neon-text mb-6">Our Team</h2>
                        <TeamSection />
                    </div>
                </section>
            </main>
            <Footer />
            </div>
        </div>
    );
}