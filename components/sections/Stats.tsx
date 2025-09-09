'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Étudiants formés',
    description: 'Depuis notre création',
  },
  {
    number: 95,
    suffix: '%',
    label: 'Taux de réussite',
    description: 'Aux examens de certification',
  },
  {
    number: 50,
    suffix: '+',
    label: 'Formations disponibles',
    description: 'Dans 4 domaines d\'expertise',
  },
  {
    number: 15,
    suffix: '+',
    label: 'Années d\'expérience',
    description: 'Dans la formation professionnelle',
  },
];

function AnimatedCounter({ 
  value, 
  suffix = '', 
  duration = 2000 
}: { 
  value: number; 
  suffix?: string; 
  duration?: number; 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startValue = 0;
      const endValue = value;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary-600">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Nos résultats en chiffres
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Découvrez l'impact de nos formations et la confiance que nous accordent 
            nos étudiants et partenaires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4">
                <AnimatedCounter 
                  value={stat.number} 
                  suffix={stat.suffix}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {stat.label}
              </h3>
              <p className="text-primary-100 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-primary-500"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Certifications reconnues</h4>
              <p className="text-primary-100 text-sm">
                Toutes nos formations délivrent des certifications reconnues par l'industrie
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Experts reconnus</h4>
              <p className="text-primary-100 text-sm">
                Nos formateurs sont des professionnels expérimentés dans leur domaine
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Insertion professionnelle</h4>
              <p className="text-primary-100 text-sm">
                85% de nos diplômés trouvent un emploi dans les 6 mois
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
