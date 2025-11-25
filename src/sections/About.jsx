import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/PHOTO.png';

const educationData = [
    {
        id: 1,
        degree: "Bachelor of Engineering",
        institution: "Akshaya College of Engineering and Technology", 
        year: "2022 - 2026",
        description: "Computer Science & Engineering",
        grade: "CGPA: 7.8" // Replace with actual CGPA
    },
    {
        id: 2,
        degree: "Higher Secondary Education",
        institution: "Sri Aurobindo Vidyalaya Matricular Hr.sec.School", // Replace with actual school name
        year: "2021 - 2022",
        description: "Bio-Maths",
        grade: "Percentage: 70%" // Replace with actual percentage
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-secondary overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.5)] relative">
                        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Full Stack Developer & UI Enthusiast
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I am a passionate developer with a knack for creating visually stunning and highly functional web applications.
                        With expertise in the MERN stack and modern frontend technologies, I turn complex problems into elegant solutions.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <span className="text-gray-300">Based in India</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-secondary"></div>
                            <span className="text-gray-300">Open to Freelance & Full-time roles</span>
                        </div>
                    </div>

                    {/* Timeline / Education */}
                    <div className="mt-8">
                        <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Education</h4>
                        <div className="relative border-l-2 border-gray-700 pl-6 ml-2 space-y-8">
                            {educationData.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-dark box-content"></div>
                                    <h5 className="text-lg font-bold text-white">{edu.degree}</h5>
                                    <p className="text-primary font-medium text-sm">{edu.institution}</p>
                                    <div className="flex justify-between items-center max-w-xs mt-1">
                                        <p className="text-sm text-gray-400">{edu.year}</p>
                                        <span className="text-xs font-bold bg-gray-800 text-secondary px-2 py-1 rounded border border-gray-700">
                                            {edu.grade}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 mt-2">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
