import React from 'react';

type PageLayoutProps = {
    children: React.ReactNode
    darkMode?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({ darkMode, children }) => {
    React.useEffect(() => {
        const htmlElement = document.documentElement; // Access the <html> tag
        if (!darkMode) {
            htmlElement.classList.remove("light-mode")
            htmlElement.classList.add("dark-mode")
        } else {
            htmlElement.classList.remove("dark-mode")
            htmlElement.classList.add("light-mode")
        }
    }, [darkMode]); // Re-run this effect whenever darkMode changes

    return (
        <div className="light-mode">
            {children}
        </div>
    );
}

// const PageLayout: React.FC<PageLayoutProps> = ({children, darkMode}) => {
//     return (
//         <html className={`h-full ${darkMode ? "dark-mode" : "light-mode" }`}>
//             <body className="h-full"> {children} </body>
//         </html>
//     )
// }
// 
export default PageLayout