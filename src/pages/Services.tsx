
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Services List */}
      <ServicesList />
    </div>
  );
};

const ServicesHero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-primary opacity-5"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
          >
            <motion.span 
              variants={fadeIn}
              className="bg-primary-light/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block"
            >
              Our Services
            </motion.span>
            
            <motion.h1
              variants={fadeIn} 
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Comprehensive Support Services
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-gray-600 text-lg"
            >
              Kind Access offers a wide range of personalized support services designed to enhance independence, well-being, and quality of life for people with disabilities.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesList = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const services = [
    {
      id: 'daily-activities',
      title: 'Assistance with Personal Daily Activities',
      description: 'Personalized support with everyday activities such as personal hygiene, dressing, and meal preparation, tailored to your unique needs and preferences.',
      image: '/lovable-uploads/a7d8144b-7a35-4071-b737-615f27ea6ed5.png'
    },
    {
      id: 'daily-living-skills',
      title: 'Development of Daily Living Skills',
      description: 'Support to develop and enhance the skills needed for everyday living, promoting greater independence and confidence in managing daily tasks.',
      image: '/lovable-uploads/69f30e36-4728-418b-afd7-386a32b84a38.png'
    },
    {
      id: 'community-nursing',
      title: 'Community Nursing Care',
      description: 'Professional nursing services provided in the comfort of your home, including wound care, medication management, and other clinical interventions.',
      image: '/lovable-uploads/bcca136f-a681-4793-8bca-44a354dd7666.png'
    },
    {
      id: 'group-activities',
      title: 'Group and Centre-Based Activities',
      description: 'Engaging activities that promote social interaction, skill development, and community participation in a supportive group environment.',
      image: '/lovable-uploads/a755c11f-9634-4683-abc9-5427fea1dc7d.png'
    },
    {
      id: 'community-participation',
      title: 'Participation in Community, Social, and Civic Activities',
      description: 'Support to engage in community events, social activities, and civic participation, fostering connections and a sense of belonging.',
      image: '/lovable-uploads/eaab921c-d4e8-4cbc-b9e2-fb2eb620a6b4.png'
    },
    {
      id: 'travel-transport',
      title: 'Travel and Transport Arrangements',
      description: 'Assistance with transportation needs, including accompanying you to appointments, social events, and other activities in the community.',
      image: '/lovable-uploads/6c5e0534-f40d-48e7-97b1-f9c8dcc61eea.png'
    },
    {
      id: 'household-tasks',
      title: 'Household Tasks',
      description: 'Support with maintaining a clean and safe living environment, including cleaning, laundry, and other household management tasks.',
      image: '/lovable-uploads/69f30e36-4728-418b-afd7-386a32b84a38.png'
    },
    {
      id: 'innovative-participation',
      title: 'Innovative Community Participation',
      description: 'Creative approaches to community engagement that align with your interests, goals, and aspirations, promoting meaningful participation and inclusion.',
      image: '/lovable-uploads/16edd8a4-d2fc-47ef-a754-69399afe3367.png'
    }
  ];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildren}
          className="mb-12"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold mb-6"
          >
            Our Support Services
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-gray-600 max-w-3xl"
          >
            At Kind Access, we offer a diverse range of NDIS-registered services designed to meet your individual needs and help you achieve your goals. Click on each service to learn more.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: 0.1 + index * 0.1 } 
                }
              }}
            >
              <Link to={`/services/${service.id}`}>
                <Card className="h-full service-card group">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
