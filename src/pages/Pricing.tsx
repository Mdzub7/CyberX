import React from 'react';
import { Check, Shield, Zap, Lock } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Essential security checks for personal use',
      features: [
        'Basic Website Analysis',
        'SSL Certificate Verification',
        'Domain Age Check',
        'Limited API Access',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Advanced security features for businesses',
      features: [
        'Everything in Basic',
        'Advanced Threat Detection',
        'Real-time Monitoring',
        'Priority Support',
        'API Integration',
        'Custom Reports',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Custom solutions for large organizations',
      features: [
        'Everything in Pro',
        'Custom Integration',
        'Dedicated Support',
        'SLA Guarantee',
        'Team Management',
        'Advanced Analytics',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your security needs. All plans include our core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-gray-900/50 border rounded-lg transition-all ${
                plan.popular
                  ? 'border-cyan-400 scale-105 md:scale-110'
                  : 'border-cyan-500/20 hover:border-cyan-400'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Enterprise Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Custom Security Rules
                </h3>
                <p className="text-gray-400">
                  Create and manage custom security rules for your organization
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Advanced API Access
                </h3>
                <p className="text-gray-400">
                  Full API access with custom rate limits and endpoints
                </p>
              </div>
              <div className="text-center">
                <Lock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Priority Support
                </h3>
                <p className="text-gray-400">
                  24/7 dedicated support with guaranteed response times
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}