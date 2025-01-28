import React, { useState } from 'react';
import { Search, Shield, Globe, Lock, Clock, AlertTriangle } from 'lucide-react';

interface CheckStep {
  id: string;
  text: string;
  icon: React.ReactNode;
}

const checkSteps: CheckStep[] = [
  { id: 'ssl', text: 'Checking SSL Certificate...', icon: <Lock className="w-5 h-5" /> },
  { id: 'domain', text: 'Analyzing Domain Age...', icon: <Clock className="w-5 h-5" /> },
  { id: 'reputation', text: 'Verifying Site Reputation...', icon: <Shield className="w-5 h-5" /> },
  { id: 'content', text: 'Scanning Website Content...', icon: <Globe className="w-5 h-5" /> },
];

export default function UrlChecker() {
  const [url, setUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<null | { score: number; issues: string[] }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsChecking(true);
    setResult(null);

    // Simulate checking steps
    for (let i = 0; i < checkSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    // Simulate result
    const mockResult = {
      score: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
      issues: [
        'Domain is relatively new (registered within last year)',
        'Mixed content detected on some pages',
        'Missing security headers',
      ],
    };

    setResult(mockResult);
    setIsChecking(false);
    setCurrentStep(0);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL (e.g., https://example.com)"
          className="w-full px-6 py-4 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
          required
        />
        <button
          type="submit"
          disabled={isChecking}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <Search className="w-4 h-4" />
          <span>Check</span>
        </button>
      </form>

      {isChecking && (
        <div className="mt-8 space-y-4">
          {checkSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center space-x-3 ${
                index === currentStep ? 'text-cyan-400' : 'text-gray-400'
              }`}
            >
              {step.icon}
              <span>{step.text}</span>
            </div>
          ))}
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-6">
          <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Safety Score</h3>
              <div className="text-2xl font-bold text-cyan-400">{result.score}%</div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${result.score}%` }}
              ></div>
            </div>
          </div>

          {result.issues.length > 0 && (
            <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>Potential Issues</span>
              </h3>
              <ul className="space-y-2">
                {result.issues.map((issue, index) => (
                  <li key={index} className="text-gray-300 flex items-start space-x-2">
                    <span className="text-yellow-400">•</span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}