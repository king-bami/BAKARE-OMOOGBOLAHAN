import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    
                    {/* Editorial Image Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[3/4] rounded-none overflow-hidden bg-gray-200">
                            <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
                                alt="Coding Workspace" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-lg font-bold italic">
                                    "Code is just the tool. Impact is the goal."
                                </p>
                            </div>
                        </div>
                        {/* Decorative Box */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-500/10 z-0 -rotate-6"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-gray-300"></span>
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-600">The Story</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            More than just a <br />
                            <span className="text-transparent text-stroke-2 text-gray-900">Senior Engineer</span>.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                My journey began with a curiosity for how things work, which quickly evolved into a passion for building systems that work <i>better</i>.
                            </p>
                            <p>
                                As the <strong className="text-gray-900">Founder & CTO of Attenda Africa</strong>, I didn't just write code; I navigated the complexities of product-market fit, user acquisition, and scaling infrastructure to support thousands of active users nationwide. This entrepreneurial experience gives me a unique edge—I build software with the business outcome in mind.
                            </p>
                            <p>
                                When I'm not architecting cloud-native solutions, I'm deeply invested in the tech community. From being a Google Open Source Mentee to mentoring the next generation of developers, I believe in lifting others as we climb.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-12">
                            <div>
                                <span className="block text-4xl font-bold text-gray-900 mb-1">Founder</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Mindset</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-gray-900 mb-1">Global</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Perspective</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;