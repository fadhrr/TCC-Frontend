import ContentLayout from '@/Layouts/ContentLayout';
import Hero from '@/components/Home/Hero';
import Step from '@/components/Home/Step';
import Rank from '@/components/Home/Rank';
import Cta from '@/components/Home/Cta';
import Footer from '@/components/Home/Footer';
import Head  from 'next/head';

// ! Masih harus di fix bagian authnya

interface HomeProps {
    auth?: { user: any };
}

const Home: React.FC<HomeProps> = ({ auth }) => {
    return (
        <ContentLayout user={auth?.user}>
            <Head>
                <title>TCC</title>
            </Head>
            <Hero />
            <Step />
            <Rank />
            <Cta />
            <Footer />
        </ContentLayout>
    );
};

export default Home;
