import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-cyan-500/20 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              CyberX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  location.pathname === item.href ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="px-4 py-2 text-sm font-medium text-black bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Navigation */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-cyan-500/20">
            <div className="px-4 py-2 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                    location.pathname === item.href ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full px-4 py-2 text-sm font-medium text-black bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}