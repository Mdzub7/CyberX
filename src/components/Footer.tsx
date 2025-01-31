import React from 'react';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                CyberX
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Protecting users from online scams and fraudulent websites through advanced security analysis.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 text-sm">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-cyan-400 text-sm">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/mdzub7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/mdzub7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/mdzub7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} CyberX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}