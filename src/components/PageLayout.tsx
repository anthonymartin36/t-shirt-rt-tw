import React from 'react';

type PageLayoutProps = {
    children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {children}
        </div>
    );
};

export default PageLayout