import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Models from '@/components/Models/Models';
import PromoBanner from '@/components/PromoBanner/PromoBanner';
import ElectricMobility from '@/components/ElectricMobility/ElectricMobility';
import Configurator from '@/components/Configurator/Configurator';
import TestDrive from '@/components/TestDrive/TestDrive';
import DealerLocator from '@/components/DealerLocator/DealerLocator';
import ServiceCenter from '@/components/ServiceCenter/ServiceCenter';
import BrandStory from '@/components/BrandStory/BrandStory';
import Corporate from '@/components/Corporate/Corporate';
import FAQSupport from '@/components/FAQSupport/FAQSupport';
import Anniversary from '@/components/Anniversary/Anniversary'; 
import Newsletter from '@/components/Newsletter/Newsletter';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Anniversary /> 
      <Models />
      <PromoBanner />
      <ElectricMobility />
      <Configurator />
      <TestDrive />
      <DealerLocator />
      <ServiceCenter />
      <BrandStory />
      <Corporate />
      <FAQSupport />
      <Newsletter />
      <Footer />
    </main>
  );
}