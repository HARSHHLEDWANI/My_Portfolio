import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const quickInfo = [
    { label: 'Education', value: 'B.Tech CSE, SIT' },
    { label: 'Location', value: 'India' },
    { label: 'Interests', value: 'AI/ML, Blockchain, Full-Stack' },
  ];

  return (
    <SectionWrapper id="about" className="bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" subtitle="01. About" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              I'm currently pursuing a Bachelor's in Computer Science and Engineering at Symbiosis Institute of Technology (2023–2027). I love building products that are both technically strong and user-friendly, with a focus on solving real-world problems in fintech, accessibility, and everyday life.
            </p>
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              From creating a donation platform for an NGO to designing an AI-driven meal planner, my work blends full-stack development, machine learning, and clean UX. I enjoy learning by doing—whether that's experimenting with new frameworks, exploring ML libraries, or diving into blockchain applications.
            </p>
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              I value critical thinking, problem solving, and collaboration. Through workshops, buddy sessions, and club activities, I've gained experience explaining concepts clearly and working with diverse teams.
            </p>
          </motion.div>

          {/* Right side - Quick Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-6">
              Quick Info
            </h3>
            <div className="space-y-4">
              {quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex justify-between items-center py-3 border-b border-light-border dark:border-dark-border last:border-0"
                >
                  <span className="text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary">
                    {info.label}
                  </span>
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text">
                    {info.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;

