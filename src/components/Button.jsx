import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, href, type = 'button', className = '' }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block text-center';
  
  const variants = {
    primary: 'bg-light-text dark:bg-dark-text text-light-bg dark:text-dark-bg hover:opacity-90',
    secondary: 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border',
    outline: 'border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text hover:bg-light-text dark:hover:bg-dark-text hover:text-light-bg dark:hover:text-dark-bg',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;

