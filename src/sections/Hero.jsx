import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Hero = () => {
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const tags = ['Full-Stack', 'AI/ML', 'Blockchain', 'React', 'Node.js'];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-sm font-mono text-light-accent dark:text-dark-accent tracking-wider">
                Hi, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-light-text dark:text-dark-text leading-tight"
            >
              Harsh{' '}
              <span className="inline-block">
                Ledwani
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="inline-block ml-2"
                >
                  👋
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-light-textSecondary dark:text-dark-textSecondary"
            >
              Computer Science Student & Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed max-w-xl"
            >
              I'm a Computer Science and Engineering undergraduate at Symbiosis Institute of Technology, building projects at the intersection of full-stack development, machine learning, and blockchain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                variant="primary"
                onClick={() => handleScrollTo('#projects')}
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate('/resume')}
              >
                View Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Floating tags card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-6">
                What I Do
              </h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-sm font-medium text-light-text dark:text-dark-text"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-light-border dark:border-dark-border">
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  Currently building scalable applications with modern tech stacks and exploring AI/ML solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

