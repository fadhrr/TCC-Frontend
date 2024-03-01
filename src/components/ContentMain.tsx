import Hero from './Hero';
import Step from './Fiture';
import Rank from './Rank';
import Cta from './Cta';
import Footer from './Footer';

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
