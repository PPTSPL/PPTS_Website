import { 
  Brain, Cloud, Code, Database, ShieldCheck, 
  LineChart, Globe, Headphones, Search 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Intelligent automation and predictive analytics to optimize decision-making."
  },
  {
    icon: Code,
    title: "Custom Software Dev",
    desc: "Tailor-made applications built for scalability, performance, and reliability."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Seamless cloud integration and management for a connected enterprise."
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Processing and managing data to unlock actionable business insights."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Advanced security protocols to protect your digital assets and storage."
  },
  {
    icon: LineChart,
    title: "Digital Consulting",
    desc: "Strategic guidance to navigate your digital transformation journey."
  },
  {
    icon: Globe,
    title: "IT Outsourcing",
    desc: "Managed services and expert teams to extend your technical capabilities."
  },
  {
    icon: Headphones,
    title: "BPO & KPO",
    desc: "Efficient business and knowledge process outsourcing solutions."
  },
  {
    icon: Search,
    title: "Web & Digital Marketing",
    desc: "Full-stack web development combined with SEO and growth strategies."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Core Services
          </h2>
          <p className="text-gray-400">
            Empowering enterprises through smart, sustainable, and secure technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:border-primary/50 text-primary">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
