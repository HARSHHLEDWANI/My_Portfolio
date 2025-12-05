import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-4"
      >
        <span className="text-sm font-mono text-light-accent dark:text-dark-accent tracking-wider uppercase">
          {subtitle || title}
        </span>
        <div className="flex-1 h-px bg-light-border dark:bg-dark-border" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;

