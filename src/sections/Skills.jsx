import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrandThreejs, TbBrandCpp, TbSql } from "react-icons/tb";
import { SiTailwindcss, SiMongodb, SiExpress, SiFramer, SiRedux, SiPostman, SiMysql, SiPostgresql, SiFirebase, SiTypescript, SiNextdotjs } from 'react-icons/si';

const skillCategories = [
    {
        id: 'frontend',
        title: 'Frontend',
        skills: [
            { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
            { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
            { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95, color: '#38B2AC' },
            { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
            { name: 'Three.js', icon: <TbBrandThreejs />, level: 60, color: '#000000' },
            { name: 'Framer Motion', icon: <SiFramer />, level: 70, color: '#0055FF' },
        ]
    },
    {
        id: 'backend',
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: '#339933' },
            { name: 'Express.js', icon: <SiExpress />, level: 75, color: '#000000' },
        ]
    },
    {
        id: 'database',
        title: 'Database',
        skills: [
            { name: 'MongoDB', icon: <SiMongodb />, level: 75, color: '#47A248' },
            { name: 'MySQL', icon: <SiMysql />, level: 70, color: '#4479A1' },
        ]
    },
    {
        id: 'languages',
        title: 'Languages',
        skills: [
            { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
            { name: 'Java', icon: <FaJava />, level: 70, color: '#007396' },
            { name: 'Python', icon: <FaPython />, level: 65, color: '#3776AB' },
            { name: 'C++', icon: <TbBrandCpp />, level: 60, color: '#00599C' },
        ]
    },
    {
        id: 'tools',
        title: 'Tools',
        skills: [
            { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
            { name: 'Postman', icon: <SiPostman />, level: 80, color: '#FF6C37' },
        ]
    }
];

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] group"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }}>
                    {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                />
            </div>
            <div className="flex justify-end mt-2">
                <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    return (
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto bg-dark/50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    My <span className="text-secondary">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    I work with a variety of tools and technologies across the full stack.
                </p>
            </motion.div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {skillCategories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === category.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                <AnimatePresence mode='popLayout'>
                    {skillCategories.find(c => c.id === activeTab)?.skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Skills;
