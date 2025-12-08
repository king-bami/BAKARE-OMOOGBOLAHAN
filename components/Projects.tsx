import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GeoAnimation, AiSearchAnimation, VotingAnimation } from './ProjectCardAnimations';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" className="py-24 bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
            <div>
              <span className="text-brand-600 font-bold tracking-wider uppercase text-sm pl-1">Selected Work</span>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mt-4 tracking-tighter">
                FEATURED<br />PROJECTS
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-md pb-2">
                Engineering scalable solutions that solve real problems. Here are a few highlights.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1: Attenda - Large Card (Span 2 cols on md) */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <a
                href="https://attenda.africa"
                target="_blank"
                rel="noreferrer"
                className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200"
            >
                <div className="bg-gray-50 rounded-[1.5rem] h-full p-8 md:p-10 flex flex-col md:flex-row gap-8 overflow-hidden relative">
                    <div className="flex-1 flex flex-col justify-between relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-6">
                                CASE STUDY 01
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">Attenda Africa</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nationwide geo-attendance platform used by NYSC. Engineered for high-concurrency with edge functions and facial verification AI.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['Next.js', 'Supabase', 'Hugging Face', 'GeoAPI'].map(t => (
                                    <span key={t} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-full">{t}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center text-brand-600 font-bold tracking-wide group-hover:gap-3 transition-all">
                            VIEW LIVE PROJECT <ArrowRight size={16} className="ml-2" />
                        </div>
                    </div>
                    
                    {/* Visual */}
                    <motion.div 
                        className="w-full md:w-1/2 aspect-video md:aspect-auto rounded-xl overflow-hidden shadow-inner border border-gray-200 bg-white"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                    >
                        <GeoAnimation />
                    </motion.div>
                </div>
            </a>
          </motion.div>

          {/* Project 2: Seamless - Tall Card */}
          <motion.div
             className="md:col-span-1"
             initial={{ opacity: 0, y: 70 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
             style={{ y }} 
          >
              <a
                 href="https://seamlessautopart.com"
                 target="_blank"
                 rel="noreferrer"
                 className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200 h-full"
              >
                  <div className="bg-gray-50 rounded-[1.5rem] h-full p-8 flex flex-col">
                      <div className="flex-1">
                          <div className="w-full aspect-square bg-white rounded-xl mb-8 overflow-hidden border border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-500">
                              <AiSearchAnimation />
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-4">
                                CASE STUDY 02
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Seamless Auto</h3>
                          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                              AI-driven marketplace with vector search recommendations increasing conversion by 30%.
                          </p>
                      </div>
                  </div>
              </a>
          </motion.div>

          {/* Project 3: Afrisata - Standard Card */}
          <motion.div
             className="md:col-span-1"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
          >
              <a
                 href="https://afrisata.com"
                 target="_blank"
                 rel="noreferrer"
                 className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200 h-full"
              >
                  <div className="bg-gray-900 rounded-[1.5rem] h-full p-8 flex flex-col relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                      
                      <div className="w-full aspect-video bg-gray-800 rounded-xl mb-6 overflow-hidden relative border border-gray-700 group-hover:scale-105 transition-transform duration-500">
                           <VotingAnimation />
                      </div>
                      <div className="relative z-10">
                          <h3 className="text-xl font-bold text-white mb-2">Afrisata Awards</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                              Secure voting platform handling 10k+ concurrent requests.
                          </p>
                      </div>
                  </div>
              </a>
          </motion.div>

          {/* Project 4: Sunrise - Wide */}
          <motion.div
             className="md:col-span-2"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
             <a
                 href="https://sunrisewaterpark.com"
                 target="_blank"
                 rel="noreferrer"
                 className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200"
             >
                 <div className="bg-brand-900 rounded-[1.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                     <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-500/30 rounded-full blur-[100px]"></div>

                     <div className="relative z-10">
                         <h3 className="text-3xl font-bold text-white mb-2">Sunrise Water Park</h3>
                         <p className="text-brand-100 max-w-md text-lg">High-performance booking platform. Optimized Next.js implementation improving SEO rankings by 200%.</p>
                     </div>
                     <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-900 transition-all duration-300 transform group-hover:scale-110">
                         <ExternalLink size={28} />
                     </div>
                 </div>
             </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;