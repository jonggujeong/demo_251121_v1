import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Philosophy from '@/components/Philosophy/Philosophy';
import MedicalTeam from '@/components/MedicalTeam/MedicalTeam';
import Treatments from '@/components/Treatments/Treatments';
import ClinicalCases from '@/components/ClinicalCases/ClinicalCases';
import Equipment from '@/components/Equipment/Equipment';
import Interior from '@/components/Interior/Interior';
import Footer from '@/components/Footer/Footer';
import FloatingMenu from '@/components/FloatingMenu/FloatingMenu';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <Philosophy />
        <MedicalTeam />
        <Treatments />
        <ClinicalCases />
        <Equipment />
        <Interior />
      </main>
      <Footer />
      <FloatingMenu />
    </>
  );
}
