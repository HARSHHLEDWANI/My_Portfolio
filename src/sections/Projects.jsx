import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { getProjects } from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
        // Fallback to empty array or default data
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <SectionWrapper id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-light-textSecondary dark:text-dark-textSecondary">Loading projects...</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  if (error && projects.length === 0) {
    return (
      <SectionWrapper id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-light-textSecondary dark:text-dark-textSecondary">{error}</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  const defaultProjects = [
    {
      title: 'Website for Zunj Divyang Sanstha',
      description: 'A web platform built to support donations and volunteer management for an NGO working with differently-abled individuals.',
      bullets: [
        'Led frontend development using React, designing an intuitive donation and volunteer management interface.',
        'Integrated Cashfree Payments API and webhooks to securely process donations.',
        'Implemented campaign-wise donation tracking to improve transparency and provide real-time insights.',
      ],
      tags: ['React', 'Payments Integration', 'NGO', 'Frontend'],
    },
    {
      title: 'SecureFlow – Fraud Detection System',
      description: 'A project-based learning initiative focused on making digital payments more secure using machine learning and blockchain.',
      bullets: [
        'Developed a system to reduce fraudulent transactions using machine learning–based pattern and anomaly detection.',
        'Used blockchain technology to ensure transparency, immutability, and secure audit trails in financial records.',
        'Designed the architecture to combine traditional transaction analysis with decentralized verification.',
        'Currently under active development as a collaborative college project.',
      ],
      tags: ['Machine Learning', 'Blockchain', 'Fintech', 'Security'],
    },
    {
      title: 'E-commerce Website',
      description: 'A full-stack clothing e-commerce application with admin controls and smooth shopping experience.',
      bullets: [
        'Built a full-stack e-commerce platform using React.js, Node.js, and MongoDB for clothing across kids, women, and men.',
        'Implemented an admin panel to efficiently add, delete, and search products.',
        'Designed user-friendly shopping flows, product categories, and clear navigation.',
        'Self-learned full-stack development through YouTube tutorials while building this project.',
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack', 'E-commerce'],
    },
    {
      title: 'AI-Based Meal Planner App (Ongoing)',
      description: 'An AI-powered meal planning app that personalizes meals based on nutrition, preferences, and lifestyle.',
      bullets: [
        'Developing an AI-driven app that generates meal plans based on calorie goals, dietary preferences, and allergies.',
        'Uses machine learning to recommend meals and learn from user behavior over time to improve suggestions.',
        'Includes a smart grocery list generator that auto-updates based on planned meals and ingredients.',
        'Handling end-to-end development, including UI/UX design, backend APIs, and AI components.',
      ],
      tags: ['AI', 'Machine Learning', 'Mobile App', 'Nutrition', 'Personalization'],
    },
  ];

  // Use API data if available, otherwise fallback to default
  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <SectionWrapper id="projects" className="bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Projects" subtitle="03. Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                  {project.title}
                </h3>
                {project.status === 'in-progress' && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200">
                    Ongoing
                  </span>
                )}
              </div>

              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.bullets && project.bullets.length > 0 && (
                <ul className="space-y-2 mb-4 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  {project.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span className="text-light-accent dark:text-dark-accent mt-1.5">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-light-border dark:border-dark-border">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-light-surface dark:bg-dark-surface text-light-textSecondary dark:text-dark-textSecondary border border-light-border dark:border-dark-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;

