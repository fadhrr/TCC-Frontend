import Hero from '@/components/Hero';
import Fiture from '@/components/Fiture';
import Rank from '@/components/Rank';
import Cta from '@/components/Cta';
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
