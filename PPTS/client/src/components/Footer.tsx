import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Pratham<span className="text-primary">Puran</span>
            </h3>
            <p className="text-gray-400 max-w-md mb-6">
              Innovating the Digital Future through AI, Cloud & Intelligent Solutions. We are committed to driving technological excellence for businesses worldwide.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-background transition-colors text-gray-400">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Technology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>123 Innovation Drive, Tech Park, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>contact@prathampuran.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PrathamPuran Tech Services Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
