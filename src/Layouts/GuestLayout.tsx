import ApplicationLogo from '@/components/ApplicationLogo';
import Link from 'next/link';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex pt-6 sm:pt-0 bg--100">
            <div className="flex w-3/5 px-6 py-10 justify-center items-center bg-white shadow-md overflow-hidden">
                {children}
            </div>
        </div>
    );
}
