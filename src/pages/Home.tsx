
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Heart, Users, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Framer Motion animations
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

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Overview */}
      <ServicesSection />
      
      {/* Why Choose Us */}
      <WhyChooseUsSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-primary opacity-5"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.span 
              variants={fadeIn}
              className="bg-primary-light/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block"
            >
              NDIS Registered Provider
            </motion.span>
            
            <motion.h1
              variants={fadeIn} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Empowering inclusion, <span className="text-primary">one step at a time.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 max-w-lg"
            >
              Kind Access provides personalized disability support services in Brisbane to help you live your best possible life with dignity and independence.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <Link to="/services">
                <Button className="btn-primary flex items-center gap-2 group">
                  Explore Our Services 
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent z-10 rounded-lg"></div>
              <img 
                src="/lovable-uploads/858a3762-ae77-4bca-87ce-8fc24813f5c9.png"
                alt="Kind Access Support Services" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="absolute top-[-40px] right-[-40px] w-[120px] h-[120px] rounded-full bg-secondary flex items-center justify-center text-white font-bold text-2xl transform rotate-12 shadow-lg">
              NDIS
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
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
      title: 'Personal Daily Activities',
      description: 'Assistance with personal care activities to maintain your independence and dignity.',
      image: '/lovable-uploads/a7d8144b-7a35-4071-b737-615f27ea6ed5.png'
    },
    {
      id: 'daily-living-skills',
      title: 'Daily Living Skills',
      description: 'Developing skills to enhance your independence in everyday activities.',
      image: '/lovable-uploads/69f30e36-4728-418b-afd7-386a32b84a38.png'
    },
    {
      id: 'community-nursing',
      title: 'Community Nursing Care',
      description: 'Professional nursing services provided in the comfort of your home.',
      image: '/lovable-uploads/bcca136f-a681-4793-8bca-44a354dd7666.png'
    },
    {
      id: 'group-activities',
      title: 'Group Activities',
      description: 'Engaging center-based activities that promote social interaction and skills development.',
      image: '/lovable-uploads/a755c11f-9634-4683-abc9-5427fea1dc7d.png'
    }
  ];
  
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildren}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span variants={fadeIn} className="text-primary font-medium">Our Services</motion.span>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Supporting Your Journey to Independence
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-600">
            We offer a comprehensive range of support services tailored to meet your unique needs and help you achieve your goals.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: 0.2 + index * 0.1 } 
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
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
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
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button className="btn-outline">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const features = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Person-Centered Approach',
      description: 'We put you at the center of everything we do, tailoring our services to your unique needs and preferences.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Experienced Team',
      description: 'Our team of qualified professionals is committed to providing the highest standard of care and support.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'NDIS Registered',
      description: 'We are a registered NDIS provider, ensuring all our services meet rigorous quality and safety standards.'
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: 'Local Brisbane Provider',
      description: 'As a local Brisbane provider, we understand the community and can connect you with relevant local resources.'
    }
  ];
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div 
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={staggerChildren}
              className="space-y-4"
            >
              <motion.span variants={fadeIn} className="text-primary font-medium">Why Choose Us</motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                Dedicated to Your Well-being and Independence
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 mb-6">
                At Kind Access, we are committed to providing high-quality support services that empower you to live your life to the fullest. Our approach is built on respect, dignity, and a genuine desire to make a positive difference.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { duration: 0.5, delay: 0.3 + index * 0.1 } 
                      }
                    }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.6, delay: 0.3 } 
              }
            }}
            className="relative hidden lg:flex items-center"
          >
            <div className="relative w-[90%] h-[500px]">
              <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-lg overflow-hidden shadow-xl z-10">
                <img 
                  src="/lovable-uploads/452f632f-c90e-4728-9788-681b37c8312b.png" 
                  alt="Kind Access Support" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/0ac73aa0-a58f-4cef-82ec-4114aaee34e8.png" 
                  alt="Kind Access Support" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[40%] right-[10%] bg-white p-4 rounded-lg shadow-lg z-20 max-w-[200px]">
                <div className="text-primary font-bold text-lg">NDIS</div>
                <div className="text-gray-600 text-sm">Registered Provider</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const testimonials = [
    {
      name: 'Olivia Thompson',
      role: 'Client',
      content: 'Kind Access has been instrumental in helping me regain my independence. Their caring and professional staff have made such a positive impact on my daily life.',
      image: '/lovable-uploads/0ac73aa0-a58f-4cef-82ec-4114aaee34e8.png'
    },
    {
      name: 'Charlotte Williams',
      role: 'Parent of Client',
      content: 'I cannot speak highly enough of the support my daughter has received. The team at Kind Access truly understands her needs and helps her thrive in ways I never thought possible.',
      image: '/lovable-uploads/452f632f-c90e-4728-9788-681b37c8312b.png'
    },
    {
      name: 'Ava Mitchell',
      role: 'Client',
      content: 'The personalized approach and genuine care shown by everyone at Kind Access has made a world of difference. They don\'t just provide support; they empower me to achieve my goals.',
      image: '/lovable-uploads/557d8a3a-d90d-4401-a974-e150c144e4b5.png'
    }
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildren}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span variants={fadeIn} className="text-primary font-medium">Testimonials</motion.span>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-600">
            Hear from the people whose lives have been positively impacted by our support services.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-4 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="mb-6 md:mb-0 md:mr-6"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Take the First Step?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-blue-100 max-w-2xl"
            >
              Contact us today to learn more about how we can support you or your loved one on the journey to greater independence and a fuller life.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.5, delay: 0.3 } 
              }
            }}
          >
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-blue-50 font-medium text-lg px-8 py-6">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// Add Framer Motion to dependencies
