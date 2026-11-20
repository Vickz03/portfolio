import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="bg-gray-950 border-t border-gray-800/80 py-8 text-center text-gray-400">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} <span className="text-white font-medium">Vignesh S</span>. Built with React, Vite & Tailwind CSS.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/Vickz03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vignesh-s-01384025b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#0077b5] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    <a
                        href="https://leetcode.com/u/VigneshS03/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FFA116] transition-colors"
                        aria-label="LeetCode"
                    >
                        <SiLeetcode size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
