import React from 'react';
import { motion } from 'motion/react';

interface SplashScreenProps {
  onAnimationComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <motion.div
      key="splash-overlay"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.06)_0%,_transparent_70%)]" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Logo with pop-in animation */}
        <motion.img
          src="/assets/splash-logo.png"
          alt="करुणा सेवा ट्रस्ट"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain drop-shadow-2xl"
          initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Trust Name fade-in */}
        <motion.div
          className="text-center space-y-1"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-2xl sm:text-3xl font-black text-emerald-900 font-['Noto_Sans_Devanagari'] tracking-tight">
            करुणा सेवा ट्रस्ट
          </h1>
          <p className="text-xs sm:text-sm text-emerald-700/70 font-medium font-['Noto_Sans_Devanagari']">
            सेवा ही संकल्प, करुणा ही हमारा धर्म
          </p>
        </motion.div>

        {/* Loading shimmer bar */}
        <motion.div
          className="w-32 h-1 rounded-full bg-emerald-100 overflow-hidden mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, delay: 0.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
