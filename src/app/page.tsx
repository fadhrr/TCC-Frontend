import ContentLayout from '@/Layouts/ContentLayout';
import Hero from '@/components/Home/Hero';
import Step from '@/components/Home/Step';
import Rank from '@/components/Home/Rank';
import Cta from '@/components/Home/Cta';
import Footer from '@/components/Home/Footer';
// import { Metadata } from 'next';

// ! Masih harus di fix bagian authnya

interface HomeProps {
    auth?: { user: any };
}

// export const metadata: Metadata = {
//     title: 'TCC',
//   };

const Home: React.FC<HomeProps> = ({ auth }) => {
    return (
        <ContentLayout user={auth?.user}>
            <Hero />
            <Step />
            <Rank />
            <Cta />
            <Footer />
        </ContentLayout>
    );
};

export default Home;
