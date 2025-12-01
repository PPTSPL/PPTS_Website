import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 border-y border-white/5">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            About <span className="text-primary">PrathamPuran</span>
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              PrathamPuran Tech Services Pvt. Ltd. is a forward-thinking technology company driving digital transformation through cutting-edge software development, artificial intelligence, and IT-enabled services.
            </p>
            <p>
              We specialize in crafting intelligent digital ecosystems — from scalable enterprise software to AI-driven automation, cloud solutions, and secure data management. Our mission is to empower businesses with smart technologies that optimize performance, enhance decision-making, and accelerate growth.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              "AI-Driven Innovation",
              "Cloud Scalability",
              "Secure Ecosystems",
              "Global Expertise"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="text-primary" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-white/10">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 blur-2xl rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full" />
          
          <div className="relative z-10 space-y-8">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-gray-400 text-sm">
                To redefine digital transformation by combining intelligence, innovation, and technology — enabling organizations to evolve faster, work smarter, and scale globally.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-gray-400 text-sm">
                To be a global leader in AI-driven software and IT solutions, empowering enterprises and communities through smart, sustainable, and secure technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
