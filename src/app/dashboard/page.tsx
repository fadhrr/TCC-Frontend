// Di dashboard ini kenapa g jalan togglenya karena G pake "SidebarProvider"
//! Masih harus di fix bagian authnya 
import Head from 'next/head';
import ContentLayout from '@/Layouts/ContentLayout';

interface DashboardProps {
    auth?: { user: any }; // Update with the correct type for the 'auth' prop
}

const Dashboard: React.FC<DashboardProps> = ({auth})=>{
    return (
        <ContentLayout
            user={auth?.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Youre logged in!</div>
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
};

export default Dashboard;
