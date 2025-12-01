import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@assets/Logo_PPTS_1764528338303.PNG";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="PrathamPuran Logo" 
            className="h-10 w-10 rounded-sm object-cover transition-transform group-hover:scale-105" 
          />
          <span className="text-xl font-heading font-bold text-white tracking-wide">
            Pratham<span className="text-primary">Puran</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-background px-5 py-2 rounded-full font-bold hover:bg-primary/90 transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-primary text-background px-5 py-3 rounded font-bold hover:bg-primary/90 transition-all mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
