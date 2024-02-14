import Hero from '@/components/Home/Hero';
import Fiture from '@/components/Home/Fiture';
import Rank from '@/components/Home/Rank';
import Cta from '@/components/Home/Cta';
import ContentLayout from '@/Layouts/ContentLayout';

interface HomeProps {
  auth?: { user: any };
}
const Home: React.FC<HomeProps> = ({ auth }) => {
  return (
    <ContentLayout user={auth?.user}>
      <Hero />
      <Fiture />
      <Rank />
      <Cta />
    </ContentLayout>
  );
};

export default Home;
