import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-900 py-8 text-center text-gray-400">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Vignesh S. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
