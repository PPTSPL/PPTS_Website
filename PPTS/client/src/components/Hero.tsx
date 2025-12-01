import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/futuristic_abstract_hero_background.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Digital Future Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wider uppercase">
              Innovating the Digital Future
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Smart Tech for a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              Smarter World
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            PrathamPuran Tech Services drives digital transformation through AI, Cloud, and Intelligent Solutions. We bridge the gap between innovation and real-world business needs.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="bg-primary text-background px-8 py-4 rounded font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
              Explore Solutions
            </button>
            <button className="px-8 py-4 rounded font-bold border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm">
              Our Mission
            </button>
          </motion.div>
        </div>

        {/* Abstract Graphic Element (Right Side) */}
        <motion.div 
          className="hidden lg:block relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
             {/* Decorative circles/glows */}
             <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
             <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute top-0 left-0 w-full h-full border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
