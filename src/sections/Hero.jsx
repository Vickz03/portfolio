import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import HeroCanvas from '../components/HeroCanvas';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <HeroCanvas />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center items-start w-full h-full pointer-events-none">
                <div className="pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                            Hi, I'm <span className="text-primary">Vignesh S</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        <p className="text-xl md:text-3xl text-gray-300 font-medium mt-2">
                            Full Stack Developer & Software Engineer
                        </p>
                        <p className="text-base md:text-lg text-gray-400 mt-4 max-w-lg">
                            Building high-performance MERN & Java production applications with scalable architectures and modern UI/UX.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <a
                            href="#contact"
                            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105"
                        >
                            Hire Me
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Vignesh_Resume.pdf"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:scale-105"
                        >
                            Download CV
                        </a>
                    </motion.div>

                    {/* Social Quick Connect */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="mt-6 flex items-center gap-3 text-gray-400"
                    >
                        <span className="text-sm font-medium text-gray-400">Connect:</span>
                        <a
                            href="https://github.com/Vickz03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center text-white hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vignesh-s-01384025b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center text-white hover:text-[#0077b5] hover:border-[#0077b5] transition-all duration-300 hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href="https://leetcode.com/u/VigneshS03/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center text-white hover:text-[#FFA116] hover:border-[#FFA116] transition-all duration-300 hover:scale-110"
                            aria-label="LeetCode"
                        >
                            <SiLeetcode size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
