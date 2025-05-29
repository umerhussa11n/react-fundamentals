import React, { useState, } from 'react';
import { ChevronDown, ChevronRight, Play, Pause, Shield, Zap, Code, Eye, Layers, Clock, Users, Lock } from 'lucide-react';
import  EventDelegationDemo from './EventDelegationDemo';
import ClosuresDemo from './ClosureDemo';
import VirtualDOMDemo from './VirtualDomDemo';
import AsyncDemo from './PromiseAsyncDemo';
import CSSSpecificityDemo from './CSSSpecificityDemo';
import DebounceThrottleDemo from './DebounceVsThrottling';
import BrowserCompatibilityDemo from './BrowserCompetibilityDemo';
import PerformanceDemo from './PerformanceDemo';
import AccessibilityDemo from './AccessabilityDemo';
import SecurityDemo from './WebSecurityDemo';

// Types for our application
interface ConceptDemo {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType;
  icon: React.ComponentType<any>;
}

// Main Application Component
const ConceptSection: React.FC<{ concept: ConceptDemo; isExpanded: boolean; onToggle: () => void }> = ({
  concept,
  isExpanded,
  onToggle
}) => {
  const Icon = concept.icon;
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-blue-600" />
          <div className="text-left">
            <h2 className="font-semibold text-lg">{concept.title}</h2>
            <p className="text-sm text-gray-600">{concept.description}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </button>
      
      {isExpanded && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <concept.component />
        </div>
      )}
    </div>
  );
};

const ReactFundamentals: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const concepts: ConceptDemo[] = [
    {
      id: 'event-delegation',
      title: 'Event Delegation',
      description: 'Single event listener handles multiple dynamic elements',
      component: EventDelegationDemo,
      icon: Users
    },
    {
      id: 'closures',
      title: 'Closures & Lexical Scope',
      description: 'Understanding scope chains and closure behavior',
      component: ClosuresDemo,
      icon: Code
    },
    {
      id: 'async',
      title: 'Promises & Async/Await',
      description: 'Handling asynchronous operations in JavaScript',
      component: AsyncDemo,
      icon: Clock
    },
    {
      id: 'virtual-dom',
      title: 'Virtual DOM & Reconciliation',
      description: 'How React efficiently updates the DOM',
      component: VirtualDOMDemo,
      icon: Layers
    },
    {
      id: 'css-specificity',
      title: 'CSS Specificity & Inheritance',
      description: 'Understanding cascade and specificity rules',
      component: CSSSpecificityDemo,
      icon: Eye
    },
    {
      id: 'debounce-throttle',
      title: 'Debouncing vs Throttling',
      description: 'Performance optimization techniques for events',
      component: DebounceThrottleDemo,
      icon: Zap
    },
    {
      id: 'browser-compatibility',
      title: 'Browser Compatibility',
      description: 'Feature detection and cross-browser support',
      component: BrowserCompatibilityDemo,
      icon: Shield
    },
    {
      id: 'performance',
      title: 'Performance & Core Web Vitals',
      description: 'Optimization techniques and performance monitoring',
      component: PerformanceDemo,
      icon: Zap
    },
    {
      id: 'accessibility',
      title: 'Accessibility (a11y)',
      description: 'Making web applications accessible to all users',
      component: AccessibilityDemo,
      icon: Users
    },
    {
      id: 'security',
      title: 'Web Security Essentials',
      description: 'XSS, CSRF, and security best practices',
      component: SecurityDemo,
      icon: Lock
    }
  ];

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const expandAll = () => {
    setExpandedSections(new Set(concepts.map(c => c.id)));
  };

  const collapseAll = () => {
    setExpandedSections(new Set());
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          React/TypeScript Fundamentals for Senior Engineers
        </h1>
        <p className="text-gray-600 mb-4">
          Master fundamental concepts with interactive examples and practical demonstrations.
          Each section includes working code examples you can study and modify.
        </p>
        
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {concepts.map((concept) => (
          <ConceptSection
            key={concept.id}
            concept={concept}
            isExpanded={expandedSections.has(concept.id)}
            onToggle={() => toggleSection(concept.id)}
          />
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Interview Tips</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2">Technical Questions</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Explain concepts with real examples</li>
              <li>• Discuss trade-offs and alternatives</li>
              <li>• Walk through your thought process</li>
              <li>• Ask clarifying questions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Coding Challenges</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Start with a simple solution</li>
              <li>• Optimize iteratively</li>
              <li>• Consider edge cases</li>
              <li>• Write clean, readable code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactFundamentals;