import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'support@cyberx.com',
      link: 'mailto:support@cyberx.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: '123 Security Street, Cyber City, CC 12345',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team for support or inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-center hover:border-cyan-400 transition-colors"
            >
              <div className="text-cyan-400 mb-4 flex justify-center">{info.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-gray-400">{info.details}</p>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>

          <div className="mt-12 p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Need Immediate Assistance?</h3>
            <p className="text-gray-400 mb-4">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300"
            >
              <span>Visit our Help Center</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}