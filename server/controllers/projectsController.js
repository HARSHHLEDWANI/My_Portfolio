export const getProjects = (req, res) => {
  const projects = [
    {
      title: 'Website for Zunj Divyang Sanstha',
      description: 'A web platform built to support donations and volunteer management for an NGO working with differently-abled individuals.',
      bullets: [
        'Led frontend development using React, designing an intuitive donation and volunteer management interface.',
        'Integrated Cashfree Payments API and webhooks to securely process donations.',
        'Implemented campaign-wise donation tracking to improve transparency and provide real-time insights.',
      ],
      tags: ['React', 'Payments Integration', 'NGO', 'Frontend'],
      status: 'completed',
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
      status: 'in-progress',
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
      status: 'completed',
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
      status: 'in-progress',
    },
  ];

  res.json(projects);
};

