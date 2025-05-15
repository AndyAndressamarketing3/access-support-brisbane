
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Clock, Shield, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <AboutHero />
      
      {/* Vision & Mission */}
      <VisionSection />
      
      {/* Values */}
      <ValuesSection />
      
      {/* Team */}
      <TeamSection />
      
      {/* CTA */}
      <CtaSection />
    </div>
  );
};

const AboutHero = () => {
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
              About Kind Access
            </motion.span>
            
            <motion.h1
              variants={fadeIn} 
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Empowering Lives Through Compassionate Support
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-gray-600 text-lg"
            >
              Kind Access is dedicated to providing personalized support services that promote independence, dignity, and quality of life for people with disabilities throughout Brisbane.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.6 } 
              }
            }}
            className="relative"
            ref={ref}
          >
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/eaab921c-d4e8-4cbc-b9e2-fb2eb620a6b4.png" 
                alt="Kind Access Vision" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-2xl font-bold mb-1">Our Purpose</div>
              <div className="text-sm">Making a positive difference in people's lives</div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.span variants={fadeIn} className="text-primary font-medium">Our Vision & Mission</motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
              Creating a Resilient and Empowered Community
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-xl mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  Creating a resilient and empowered community in partnership to support people with disabilities in living an excellent life with choices.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  To provide high-quality, person-centered support that empowers individuals with disabilities to achieve their goals and live their lives to the fullest. We are committed to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary-light/20 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Respecting individual choices and promoting independence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-light/20 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Delivering services with compassion, integrity, and excellence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-light/20 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Building meaningful connections within our community</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-light/20 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Advocating for an inclusive society where everyone belongs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: 'Compassion',
      description: 'We provide care with kindness, empathy and genuine concern for the wellbeing of those we support.'
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: 'Respect',
      description: 'We value the inherent dignity of each individual and honor their unique experiences, preferences, and goals.'
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of professional conduct, honesty, and accountability in all our interactions.'
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: 'Empowerment',
      description: 'We support people to build on their strengths, make informed choices, and take control of their lives.'
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildren}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeIn} className="text-primary font-medium">Our Core Values</motion.span>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            The Principles That Guide Us
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-600">
            At Kind Access, our values define who we are and how we provide support. They are the foundation of our approach to service delivery and guide every interaction we have.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: 0.2 + index * 0.1 } 
                }
              }}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildren}
          className="max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeIn} className="text-primary font-medium">Our Team</motion.span>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Dedicated Professionals Who Care
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-600">
            Our team consists of qualified, experienced, and passionate professionals who are committed to providing the highest standard of support. We believe that the quality of our team directly impacts the quality of our service.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.5, delay: 0.2 } 
              }
            }}
            className="space-y-6"
          >
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4">Our Approach to Staffing</h3>
              <p className="text-gray-600 mb-4">
                We carefully select team members who not only have the right qualifications and experience but also share our values and commitment to making a positive difference in people's lives.
              </p>
              <p className="text-gray-600">
                All our staff undergo thorough screening, including Working with Children and Police Checks, and receive ongoing training to ensure they provide the highest quality support.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl mb-4">Continuous Professional Development</h3>
              <p className="text-gray-600 mb-4">
                We invest in the continuous professional development of our team to ensure they stay updated with the latest approaches, techniques, and best practices in disability support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary-light/20 p-1 rounded-full mr-3 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>Regular training and skill development opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-light/20 p-1 rounded-full mr-3 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>Mentoring and supervision programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-light/20 p-1 rounded-full mr-3 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>Collaborative team approach to problem-solving</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.5, delay: 0.3 } 
              }
            }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/dcd1f979-342d-4387-af59-5d63bdb1766f.png" 
                alt="Kind Access Team Member" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md mt-12">
              <img 
                src="/lovable-uploads/a7d8144b-7a35-4071-b737-615f27ea6ed5.png" 
                alt="Kind Access Support Staff" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/bcca136f-a681-4793-8bca-44a354dd7666.png" 
                alt="Kind Access Support Worker" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md mt-12">
              <img 
                src="/lovable-uploads/bb3cfe77-4f5a-49d4-b176-033d02e4e075.png" 
                alt="Kind Access Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Learn More About How We Can Support You?
        </h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Contact us today to discuss your needs and how our team can help you achieve your goals.
        </p>
        <Link to="/contact">
          <Button className="bg-white text-primary hover:bg-blue-50 font-medium text-lg px-8 py-6">
            Get In Touch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default About;
