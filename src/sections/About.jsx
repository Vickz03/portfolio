import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const experienceData = [
    {
        id: 1,
        role: "MERN Stack Developer",
        company: "Praathee Technologies",
        location: "Coimbatore",
        period: "May 2026 – Present",
        description: "Developing production full-stack web features using MongoDB, Express.js, React.js and Node.js. Designing RESTful APIs, building modular UI components and optimizing database indexing."
    },
    {
        id: 2,
        role: "Software Developer Intern (Remote)",
        company: "Sankhyalekha Pvt Ltd",
        location: "Rajasthan",
        period: "Jan 2026 – Mar 2026",
        description: "Built batch tracking systems integrating Spring Boot backends with React/MUI frontends. Refactored Java REST APIs for multi-source data aggregation and led Git release workflows."
    },
    {
        id: 3,
        role: "Web Development Intern",
        company: "NLC India Limited",
        location: "Cuddalore",
        period: "Mar 2024 – May 2024",
        description: "Developed responsive internal dashboards with HTML, CSS and JavaScript, improving page speed by ~30% and collaborating within a 4 member team on UI redesign."
    }
];

const educationData = [
    {
        id: 1,
        degree: "Bachelor of Engineering",
        institution: "Akshaya College of Engineering and Technology", 
        year: "2022 - 2026",
        description: "Computer Science & Engineering",
        grade: "CGPA: 7.89"
    },
    {
        id: 2,
        degree: "Higher Secondary Education",
        institution: "Sri Aurobindo Vidyalaya Matricular Hr. Sec. School",
        year: "2021 - 2022",
        description: "Bio-Maths",
        grade: "Percentage: 70%"
    }
];

const About = () => {
    const [activeTab, setActiveTab] = useState('experience');

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
                        <img src={profileImg} alt="Profile" className="w-full h-full object-cover object-top" />
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
                        Passionate Full-Stack Developer experienced across the MERN stack and Java, currently building production grade web applications. Skilled in designing scalable RESTful APIs, optimizing database operations and collaborating in modern Agile/CI workflows.
                    </p>

                    <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <span className="text-gray-300">Based in Coimbatore, Tamil Nadu, India</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-secondary"></div>
                            <span className="text-gray-300">Open to Full-time Engineering & Freelance Roles</span>
                        </div>
                    </div>

                    {/* Timeline Switcher: Experience & Education */}
                    <div className="mt-8">
                        <div className="flex gap-4 border-b border-gray-700 pb-3 mb-6">
                            <button
                                onClick={() => setActiveTab('experience')}
                                className={`flex items-center gap-2 font-bold text-base transition-colors pb-1 border-b-2 -mb-[14px] ${
                                    activeTab === 'experience'
                                        ? 'text-primary border-primary'
                                        : 'text-gray-400 border-transparent hover:text-white'
                                }`}
                            >
                                <FaBriefcase /> Work Experience
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`flex items-center gap-2 font-bold text-base transition-colors pb-1 border-b-2 -mb-[14px] ${
                                    activeTab === 'education'
                                        ? 'text-primary border-primary'
                                        : 'text-gray-400 border-transparent hover:text-white'
                                }`}
                            >
                                <FaGraduationCap /> Education
                            </button>
                        </div>

                        <AnimatePresence mode="wait">
                            {activeTab === 'experience' ? (
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative border-l-2 border-gray-700 pl-6 ml-2 space-y-6"
                                >
                                    {experienceData.map((exp) => (
                                        <div key={exp.id} className="relative">
                                            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-dark box-content"></div>
                                            <h5 className="text-lg font-bold text-white">{exp.role}</h5>
                                            <p className="text-primary font-medium text-sm">{exp.company} &bull; <span className="text-gray-400">{exp.location}</span></p>
                                            <p className="text-xs text-secondary font-semibold mt-1">{exp.period}</p>
                                            <p className="text-gray-300 text-sm mt-2 leading-relaxed">{exp.description}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="education"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative border-l-2 border-gray-700 pl-6 ml-2 space-y-6"
                                >
                                    {educationData.map((edu) => (
                                        <div key={edu.id} className="relative">
                                            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-dark box-content"></div>
                                            <h5 className="text-lg font-bold text-white">{edu.degree}</h5>
                                            <p className="text-secondary font-medium text-sm">{edu.institution}</p>
                                            <div className="flex justify-between items-center max-w-xs mt-1">
                                                <p className="text-xs text-gray-400">{edu.year}</p>
                                                <span className="text-xs font-bold bg-gray-800 text-primary px-2 py-0.5 rounded border border-gray-700">
                                                    {edu.grade}
                                                </span>
                                            </div>
                                            <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
