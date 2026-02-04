import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace these with your actual EmailJS keys
        emailjs.send(
            'service_v3zccta',
            'template_do99cwn',
            {
                from_name: form.name,
                to_name: 'Vignesh',
                from_email: form.email,
                to_email: 'vigneshselvam038@gmail.com',
                message: form.message,
            },
            'Q38IAAky5iV6QG-_r'
        )
            .then(() => {
                setLoading(false);
                alert('Thank you. I will get back to you as soon as possible.');
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            }, (error) => {
                setLoading(false);
                console.log(error);
                alert('Something went wrong. Please try again.');
            });
    };

    return (
        <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <h3 className="text-2xl font-bold text-white">Let's Talk</h3>
                    <p className="text-gray-400 text-lg">
                        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <a href="mailto:vignesh@example.com" className="text-white font-medium hover:text-primary transition-colors">
                                    vigneshselvam038@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-secondary text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <p className="text-white font-medium">India</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="text-white font-bold mb-4">Follow Me</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/Vickz03" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/vignesh-s-01384025b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://leetcode.com/u/VigneshS03/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#FFA116] hover:text-white transition-all duration-300">
                                <SiLeetcode size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Your Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What do you want to say?"
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
