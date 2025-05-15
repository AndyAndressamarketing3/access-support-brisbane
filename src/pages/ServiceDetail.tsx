
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Phone, ChevronRight } from 'lucide-react';
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

// Service data
const serviceData = {
  'daily-activities': {
    title: 'Assistance with Personal Daily Activities',
    shortDescription: 'Personalized support with everyday activities tailored to your needs and preferences.',
    longDescription: `
      Our personal daily activities support is designed to help you maintain your independence and dignity while receiving the assistance you need. Our trained support workers provide personalized care that respects your preferences and routines.
      
      We understand that everyone's needs are different, which is why we take the time to develop a support plan that is specifically tailored to you.
    `,
    benefits: [
      'Maintain independence and dignity',
      'Personalized support that respects your preferences',
      'Flexible scheduling to fit your routine',
      'Trained and compassionate support workers',
      'Regular reviews to ensure your needs are being met'
    ],
    howItWorks: `
      After an initial assessment to understand your specific needs and preferences, we'll match you with suitable support workers and develop a personalized support plan. Our team will work with you to ensure the support we provide aligns with your goals and enhances your quality of life.
      
      We regularly review and adjust our support to ensure it continues to meet your evolving needs.
    `,
    image: '/lovable-uploads/a7d8144b-7a35-4071-b737-615f27ea6ed5.png'
  },
  'daily-living-skills': {
    title: 'Development of Daily Living Skills',
    shortDescription: 'Support to develop and enhance the skills needed for everyday living.',
    longDescription: `
      Our daily living skills program is focused on helping you develop the skills and confidence needed to live as independently as possible. We work with you to identify the areas where you'd like to build your skills and provide the support and guidance you need to achieve your goals.
      
      Whether it's cooking, budgeting, or using public transportation, we're here to support your journey towards greater independence.
    `,
    benefits: [
      'Increased independence in everyday activities',
      'Personalized skill development plans',
      'Practical, hands-on learning opportunities',
      'Progress at your own pace',
      'Support to build confidence and self-esteem'
    ],
    howItWorks: `
      We start by assessing your current skills and identifying the areas where you'd like to develop further. Together, we'll create a personalized skill development plan with clear, achievable goals. Our support workers will provide guidance, demonstration, and encouragement as you practice and develop your skills.
      
      We regularly review your progress and adjust your plan to ensure it continues to meet your changing needs and goals.
    `,
    image: '/lovable-uploads/69f30e36-4728-418b-afd7-386a32b84a38.png'
  },
  'community-nursing': {
    title: 'Community Nursing Care',
    shortDescription: 'Professional nursing services provided in the comfort of your home.',
    longDescription: `
      Our community nursing care services bring professional healthcare to you, allowing you to receive the medical care you need in the comfort and privacy of your own home. Our qualified nurses provide a range of clinical services, from medication management to wound care, all tailored to your specific health needs.
      
      We work closely with your healthcare team to ensure coordinated and comprehensive care that supports your overall health and wellbeing.
    `,
    benefits: [
      'Professional healthcare in the comfort of your home',
      'Qualified and experienced nursing staff',
      'Coordination with your healthcare team',
      'Reduced need for hospital visits',
      'Personalized care plans based on your health needs'
    ],
    howItWorks: `
      After an initial health assessment and consultation with your healthcare providers, our nursing team will develop a care plan tailored to your specific health needs. Our nurses will visit you at scheduled times to provide the necessary care and monitor your health status.
      
      We maintain detailed records of all care provided and communicate regularly with your healthcare team to ensure coordinated and effective management of your health.
    `,
    image: '/lovable-uploads/bcca136f-a681-4793-8bca-44a354dd7666.png'
  },
  'group-activities': {
    title: 'Group and Centre-Based Activities',
    shortDescription: 'Engaging activities that promote social interaction and skill development.',
    longDescription: `
      Our group and center-based activities offer opportunities for social interaction, skill development, and fun in a supportive and inclusive environment. We offer a variety of activities designed to cater to different interests and abilities, from creative arts and crafts to fitness and recreational outings.
      
      Participating in group activities can help build friendships, develop social skills, and create a sense of belonging and community.
    `,
    benefits: [
      'Opportunities for social interaction and friendship',
      'Development of social and communication skills',
      'Engagement in meaningful and enjoyable activities',
      'Exposure to new experiences and interests',
      'Supportive and inclusive environment'
    ],
    howItWorks: `
      We offer a range of scheduled activities at our centers and in the community. You can choose to participate in activities that align with your interests and goals. Our staff facilitate the activities and provide support as needed to ensure everyone can participate fully and enjoy the experience.
      
      We regularly update our activity offerings based on participant feedback and interests.
    `,
    image: '/lovable-uploads/a755c11f-9634-4683-abc9-5427fea1dc7d.png'
  },
  'community-participation': {
    title: 'Participation in Community, Social, and Civic Activities',
    shortDescription: 'Support to engage in community events, social activities, and civic participation.',
    longDescription: `
      Our community participation support is designed to help you engage meaningfully in your community, whether through attending events, participating in social activities, or engaging in civic responsibilities. We provide the support you need to overcome barriers to participation and to feel confident and included in community life.
      
      Being active in your community can enhance your sense of belonging, expand your social network, and contribute to your overall wellbeing.
    `,
    benefits: [
      'Enhanced community connection and belonging',
      'Expanded social networks and friendships',
      'Opportunities to pursue interests and passions',
      'Development of social and communication skills',
      'Increased confidence in community settings'
    ],
    howItWorks: `
      Based on your interests and goals, we'll identify community activities and events that align with what you want to do. Our support workers can accompany you to these activities, providing the level of support you need to participate fully and confidently.
      
      We work with you to gradually build your skills and confidence in community settings.
    `,
    image: '/lovable-uploads/eaab921c-d4e8-4cbc-b9e2-fb2eb620a6b4.png'
  },
  'travel-transport': {
    title: 'Travel and Transport Arrangements',
    shortDescription: 'Assistance with transportation needs for appointments, events, and activities.',
    longDescription: `
      Our travel and transport service provides assistance with your transportation needs, whether it's getting to medical appointments, social events, or other activities. We can help with planning your journey, booking transport, and providing physical assistance and companionship during travel.
      
      Having reliable and accessible transportation is essential for maintaining independence and staying connected to your community.
    `,
    benefits: [
      'Reliable and accessible transportation',
      'Assistance with planning and booking travel',
      'Physical support during journeys',
      'Companionship and reassurance while traveling',
      'Increased ability to attend appointments and activities'
    ],
    howItWorks: `
      Whether you need regular transport to recurring appointments or occasional assistance with special outings, we can help plan and arrange your travel. Our support workers can accompany you on your journey, providing the physical assistance and companionship you need to travel safely and comfortably.
      
      We take into account your specific mobility needs and preferences when arranging transport.
    `,
    image: '/lovable-uploads/6c5e0534-f40d-48e7-97b1-f9c8dcc61eea.png'
  },
  'household-tasks': {
    title: 'Household Tasks',
    shortDescription: 'Support with maintaining a clean and safe living environment.',
    longDescription: `
      Our household tasks support is designed to help you maintain a clean, safe, and comfortable living environment. We provide assistance with a range of domestic tasks, from cleaning and laundry to grocery shopping and meal preparation, all tailored to your specific needs and preferences.
      
      Having support with household tasks can reduce stress, improve living conditions, and free up time and energy for the activities you enjoy.
    `,
    benefits: [
      'Maintained clean and safe living environment',
      'Reduced stress and physical exertion',
      'Personalized support based on your preferences',
      'More time and energy for enjoyable activities',
      'Improved overall quality of life'
    ],
    howItWorks: `
      After assessing your needs and preferences, we'll develop a plan for the household tasks you need support with. Our support workers will visit at scheduled times to assist with these tasks, working with you to ensure they're done to your satisfaction.
      
      We can adjust the type and frequency of support as your needs change.
    `,
    image: '/lovable-uploads/69f30e36-4728-418b-afd7-386a32b84a38.png'
  },
  'innovative-participation': {
    title: 'Innovative Community Participation',
    shortDescription: 'Creative approaches to community engagement aligned with your interests and goals.',
    longDescription: `
      Our innovative community participation service takes a creative approach to helping you engage with your community in ways that align with your unique interests, goals, and aspirations. We think outside the box to create opportunities for meaningful participation that go beyond traditional activities.
      
      This service is about finding new and exciting ways for you to be an active and valued member of your community.
    `,
    benefits: [
      'Personalized approaches to community engagement',
      'Opportunities to pursue passions and interests',
      'Creative solutions to overcome participation barriers',
      'Development of new skills and experiences',
      'Enhanced sense of purpose and belonging'
    ],
    howItWorks: `
      We start by exploring your interests, passions, and aspirations, and then work creatively to identify or create community participation opportunities that align with these. This might involve connecting with local groups, developing new initiatives, or adapting existing activities to ensure they're accessible and meaningful for you.
      
      Our approach is flexible and responsive, evolving as we discover what works best for you.
    `,
    image: '/lovable-uploads/16edd8a4-d2fc-47ef-a754-69399afe3367.png'
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceData[serviceId as keyof typeof serviceData];
  
  // If service doesn't exist, return not found message
  if (!service) {
    return (
      <div className="container-custom py-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">Service Not Found</h2>
        <p className="mb-6">The service you're looking for does not exist.</p>
        <Link to="/services">
          <Button>Back to Services</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      {/* Hero Section */}
      <ServiceHero service={service} />
      
      {/* Service Details */}
      <ServiceDetails service={service} />
      
      {/* Service Features */}
      <ServiceFeatures service={service} />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

const ServiceHero = ({ service }: { service: any }) => {
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
        <Link to="/services" className="inline-flex items-center text-primary hover:text-primary-dark mb-6 transition-colors">
          <ChevronLeft size={18} className="mr-1" />
          Back to All Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.h1
              variants={fadeIn} 
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              {service.title}
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600"
            >
              {service.shortDescription}
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent z-10 rounded-lg"></div>
              <img 
                src={service.image}
                alt={service.title} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceDetails = ({ service }: { service: any }) => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.span variants={fadeIn} className="text-primary font-medium">About This Service</motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold">
              What We Offer
            </motion.h2>
            <motion.div 
              variants={fadeIn}
              className="prose max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: service.longDescription.split('\n').join('<br />') }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.5, delay: 0.3 } 
              }
            }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Benefits</h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <ChevronRight size={12} />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceFeatures = ({ service }: { service: any }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            className="relative hidden lg:block"
            ref={ref}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={service.image}
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.span variants={fadeIn} className="text-primary font-medium">How It Works</motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold">
              Our Approach
            </motion.h2>
            <motion.div 
              variants={fadeIn}
              className="prose max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: service.howItWorks.split('\n').join('<br />') }}
            />
            
            <motion.div variants={fadeIn} className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Need More Information?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to answer any questions you may have about this service and how it can be tailored to your specific needs.
              </p>
              <Link to="/contact">
                <Button className="btn-primary">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
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
          Ready to Get Started?
        </h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Contact us today to discuss how we can support you with this service and help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-blue-50 font-medium">
              Contact Us
            </Button>
          </Link>
          <a href="tel:+61730000000">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
