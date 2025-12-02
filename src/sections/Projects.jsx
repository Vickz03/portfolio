import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

import projectPlaceholder from '../assets/project-placeholder.png';
import projectPlaceholder1 from '../assets/Medireach.png';
import projectPlaceholder2 from '../assets/Ecotracker.png';
import projectPlaceholder3 from '../assets/BrandTracker.png';
import projectPlaceholder4 from '../assets/WeatherApp.png';


const projects = [
    {
        id: 1,
        title: 'Medi-Reach',
        description: 'MediReach is a full-stack web application designed to connect users with nearby blood donors, healthcare volunteers, and support providers. The platform focuses on reducing medical response time by enabling quick communication between people in need and verified helpers.',
        tags: ['React', 'Node.js', 'MongoDB', 'Firebase','tailwindcss'],
        image: projectPlaceholder1,
        github: 'https://github.com/Vickz03/Medi-reach',
        demo: '#',
    },
    {
        id: 2,
        title: 'Eco-Tracker',
        description: 'A smart, semi-automated Carbon Footprint Tracker built using the MERN stack, helping users monitor, understand, and reduce their daily CO₂ emissions. Features include automated travel calculation, lifestyle analysis, electricity estimations, food impact calculator, and a clean, modern dashboard UI.',
        tags: ['React.js','Tailwindcss','Javascript', 'MongoDB', 'Tailwind CSS','Node.js'],
        image: projectPlaceholder2,
        github: 'https://github.com/Vickz03/Eco-Tracker',
        demo: 'https://eco-tracker-rouge.vercel.app/',
    },
    {
        id: 3,
        title: 'Brand Mentors',
        description: 'A productivity tool for managing tasks and projects with drag-and-drop functionality and team collaboration features.Brand Mentor is a smart analytics dashboard that helps businesses track brand profit, turnover, growth rate, product performance, and financial metrics in real time. Designed with a clean UI and visual insights for quick decision-making.',
        tags: ['React.js','Javascript','HtML','Node.js','Vue.js', 'Express', 'MongoDB'],
        image: projectPlaceholder3,
        github: 'https://github.com/Vickz03/Brand-mentors',
        demo: '#',
    },
    {
        id: 4,
        title: 'WeatherApp',
        description: 'A weather checking application that provides users with real-time temperature, humidity, and wind speed using public weather APIs.',
        tags: ['Javascript.js', 'HTML', 'weather API', 'CSS'],
        image: projectPlaceholder4,
        github: 'https://github.com/Vickz03/Weather-App',
        demo: '#',
    },
    {
        id: 5,
        title: 'Seaboarder detections',
        description: 'Seaboarder is an IoT-powered smart monitoring system built with Python, designed to track sea-level changes, tides, water quality, and coastal safety in real time. It helps predict risks and improves maritime awareness using sensor data and automated alerts.',
        tags: ['Javascript.js', 'HTML', 'weather API', 'CSS','IOT','python','sensors','pycharm'],
        image: projectPlaceholder,
        github: 'https://github.com/Vickz03/Weather-App',
        demo: '#',
    },
];

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            onClick={() => onClick(project)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/20 group"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg border-2 border-white px-4 py-2 rounded-full">View Details</span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <motion.div
                layoutId={`card-${project.id}`}
                className="bg-gray-900 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-black/50 p-2 rounded-full"
                >
                    <FaTimes size={20} />
                </button>

                <div className="h-64 sm:h-80 overflow-hidden relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    </div>
                </div>

                <div className="p-6 sm:p-8">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>

                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            <FaGithub size={20} /> GitHub
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            <FaExternalLinkAlt size={18} /> Live Demo
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Check out some of my recent work. Click on a card to view more details.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
