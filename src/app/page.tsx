import ContentLayout from '@/Layouts/ContentLayout';
import Hero from '@/components/Home/Hero';
import Step from '@/components/Home/Step';
import Rank from '@/components/Home/Rank';
import Cta from '@/components/Home/Cta';


interface HomeProps {
  auth?: { user: any };
}

const Home: React.FC<HomeProps> = ({ auth }) => {
  return (
    <ContentLayout user={auth?.user}>
      <Hero />
      <Step />
      <Rank />
      <Cta />
    </ContentLayout>
  );
};

export default Home;

