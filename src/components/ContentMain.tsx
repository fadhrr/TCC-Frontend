import Hero from '@/components/Home/Hero';
import Step from '@/components/Home/Fiture';
import Rank from '@/components/Home/Rank';
import Cta from '@/components/Home/Cta';
import Footer from '@/components/Home/Footer';

export default function ContentMain() {
  return (
    <div className="overflow-hidden font-mono md:min-w-fit xl:min-w-full">
      <Hero />
      <Step />
      <Rank></Rank>
      <Cta></Cta>
      <Footer />
    </div>
  );
}
