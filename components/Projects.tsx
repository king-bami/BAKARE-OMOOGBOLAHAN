import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight, Lock, ShieldCheck } from 'lucide-react';
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
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-8 bg-brand-600"></span>
                <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Selected Work</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[0.9]">
                ENGINEERING<br />EXCELLENCE
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-lg pb-2 leading-relaxed">
                From 0-to-1 startups to complex enterprise systems. I build the critical infrastructure that big companies rely on.
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-6 tracking-wider">
                                GOVTECH • SAAS
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
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-4 tracking-wider">
                                E-COMMERCE • AI
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
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold mb-4 tracking-wider">
                                EVENT TECH
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">Afrisata Awards</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                              Secure voting platform handling 10k+ concurrent requests with zero downtime.
                          </p>
                      </div>
                  </div>
              </a>
          </motion.div>

          {/* Project 4: Sunrise - Wide */}
          <motion.div
             className="md:col-span-1"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.1 }}
          >
             <a
                 href="https://sunrisewaterpark.com"
                 target="_blank"
                 rel="noreferrer"
                 className="block bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200 h-full"
             >
                 <div className="bg-brand-50 rounded-[1.5rem] p-8 h-full flex flex-col relative overflow-hidden">
                     <div className="relative z-10">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-brand-900 text-xs font-bold mb-4 tracking-wider border border-brand-100">
                                HOSPITALITY
                         </div>
                         <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunrise Water Park</h3>
                         <p className="text-gray-600 text-sm leading-relaxed mb-6">High-performance booking platform. Optimized Next.js implementation improving SEO rankings by 200%.</p>
                     </div>
                     <div className="mt-auto">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-900 shadow-sm group-hover:scale-110 transition-transform">
                            <ExternalLink size={18} />
                        </div>
                     </div>
                 </div>
             </a>
          </motion.div>

           {/* NDA / Enterprise Card - New */}
           <motion.div
             className="md:col-span-1"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="block bg-white rounded-[2rem] p-2 shadow-sm border border-gray-200 h-full cursor-default">
                 <div className="bg-gray-900 rounded-[1.5rem] p-8 h-full flex flex-col relative overflow-hidden">
                     {/* Abstract Pattern */}
                     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-gray-700/50 rounded-full blur-3xl"></div>

                     <div className="relative z-10">
                         <div className="flex items-center justify-between mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold tracking-wider">
                                ENTERPRISE
                            </div>
                            <Lock size={16} className="text-gray-500" />
                         </div>
                         
                         <h3 className="text-2xl font-bold text-white mb-3">Confidential Work</h3>
                         <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            I've architected core banking infrastructure and government compliance systems under strict NDAs. 
                         </p>

                         <div className="space-y-3">
                             <div className="flex items-center gap-3 text-xs text-gray-300 font-mono bg-gray-800/50 p-2 rounded">
                                <ShieldCheck size={14} className="text-green-400" /> Fintech / Banking Core
                             </div>
                             <div className="flex items-center gap-3 text-xs text-gray-300 font-mono bg-gray-800/50 p-2 rounded">
                                <ShieldCheck size={14} className="text-green-400" /> Large Scale SaaS
                             </div>
                         </div>
                     </div>

                     <div className="mt-8 pt-6 border-t border-gray-800">
                        <p className="text-xs text-gray-500 italic">
                            *Specific details available for discussion during interviews.
                        </p>
                     </div>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;