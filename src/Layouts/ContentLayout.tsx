'use client'

import { useState, ReactNode } from 'react';

interface ContentLayoutProps {
    user: any;
    header?: ReactNode;
    children: ReactNode;
}

export default function ContentLayout({ user, header, children }: ContentLayoutProps) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}
            <main>{children}</main>
        </div>
    );
}
