import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Philosophy from '@/components/Philosophy/Philosophy';
import MedicalTeam from '@/components/MedicalTeam/MedicalTeam';
import Treatments from '@/components/Treatments/Treatments';
import Equipment from '@/components/Equipment/Equipment';
import Interior from '@/components/Interior/Interior';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Philosophy />
      <Treatments />
      <MedicalTeam />
      <Equipment />
      <Interior />
      <Footer />
    </main>
  );
}
