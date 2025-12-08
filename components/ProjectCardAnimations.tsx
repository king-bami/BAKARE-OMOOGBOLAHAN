import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animation for Attenda (Geo/Verification)
export const GeoAnimation = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-gray-50/50 rounded-lg overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-10">
                {[...Array(36)].map((_, i) => (
                    <div key={i} className="bg-brand-500 rounded-sm" />
                ))}
            </div>
            {/* Map Marker */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="z-10 relative"
            >
                <div className="text-4xl">📍</div>
            </motion.div>
            {/* Scanning Effect */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-brand-500/50 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded shadow text-xs font-mono text-brand-900">
                Verifying Location...
            </div>
        </div>
    );
};

// Animation for Seamless (AI/Search)
export const AiSearchAnimation = () => {
    const [text, setText] = useState("");
    const fullText = "Toyota Corolla 2020 Brake Pad";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) {
                i = 0;
                // pause at end
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6">
            <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-3 mb-3 flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                <div className="text-sm text-gray-600 font-mono h-5 w-full overflow-hidden whitespace-nowrap">
                    {text}<span className="animate-pulse">|</span>
                </div>
            </div>
            <div className="flex gap-2 w-full">
                <motion.div 
                    className="flex-1 h-20 bg-brand-50 rounded-lg border border-brand-100 p-2"
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >
                    <div className="w-8 h-8 bg-brand-200 rounded-full mb-2" />
                    <div className="w-16 h-2 bg-brand-100 rounded" />
                </motion.div>
                <div className="flex-1 h-20 bg-gray-50 rounded-lg border border-gray-100 p-2 opacity-50">
                     <div className="w-8 h-8 bg-gray-200 rounded-full mb-2" />
                     <div className="w-16 h-2 bg-gray-100 rounded" />
                </div>
            </div>
        </div>
    );
};

// Animation for Afrisata (Voting/Stats)
export const VotingAnimation = () => {
    return (
        <div className="w-full h-full flex items-end justify-center gap-4 p-8">
            {[60, 85, 45, 90].map((height, i) => (
                <div key={i} className="relative w-8 h-full flex items-end">
                    <motion.div
                        className={`w-full rounded-t-lg ${i === 3 ? 'bg-brand-500' : 'bg-brand-200'}`}
                        initial={{ height: '0%' }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                    />
                    {i === 3 && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: -20 }}
                            transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
                            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded"
                        >
                            Winner
                        </motion.div>
                    )}
                </div>
            ))}
        </div>
    );
};